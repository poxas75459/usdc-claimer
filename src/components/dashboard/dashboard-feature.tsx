/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4qZfU6grr3CuT2SwEcCk6gteLAtjB7YiefdUVTnc1gMWx1fNWN3UW6aMxnJPANf6Ch4EvJvzdkJNANWH2nSKjgoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSCfn8W5r7HZNDpd2vf9DmugVACMs1o4UnNmsZ58pVJ4MHmnw6Snkm24T1eN2cMVkRAvnRsnu9gksSu5JjGEpeZ",
  "key1": "35HDPo6XuL9CXru5BMcK8HnxN64fwuFD3uWR5yQfhdQgz5GuoRwWSNjyQCwqnM597qHV4SCxCPpwediRvC5Nnvmt",
  "key2": "3B3GsyVK6qgGCFEALU2KRD6PBQ1H2viEPmPjNGzYTCY1cRcstnjKFWh9nrMu5brHWzkyDAFitUxQ5HmUbShr4xuj",
  "key3": "53JUFjsbTMty4FMHhxjgKfB3GqKhgwgVPU976qkKEbV9tFMJEXxt3eJYaZzX2WPa9W6qC9V5kC2q8KWnHJpjFPAq",
  "key4": "5RfaFCsBtMgw3qjtBk9skSL4vcarav9BbxrjDqcfMbjFtoMDKgUMVivQwbDcru8i2oet9uP8ov1XXZThJb1tYaqv",
  "key5": "4U2xihepyKNmpoiS25pr1oTaYH8qB5wpPND2ucQXA1MVncMGFz5zzT3B1de4H4hcuSCBbm8nSjBJgz1T58bco9xK",
  "key6": "4tkduiQDLfrDZ4YtKXybhJ6YwBMx55sYPSBjk2PfTYsDftG84t2QYdhkzL3sjGAPqHeCLTUesHuZaDmgPffzz7W5",
  "key7": "3WX2yRhW3egYBbpgd2vizaKrdhmArvJ1TamncCA52Xv3qv49Shp3EoCCF2vMfzR2JYKLpDwmJVAt3LdGpJXkRVob",
  "key8": "5zfwRhSpwbWJ6ubVwPHEWaGZDhBKTPe8uNvkqghfFmNSjBUPEZ5SUCZaES4HkwKYb9AbLoAwr8wvw3fwd4tMWbBf",
  "key9": "2vzYXo2zQkhwokTETC3vCAjibgprJHdm3zhGCKBwKBWjrPHY3qViUL1BmJ5UiWdCZgi7kGbz5bnz1tD2r6HfUXQ6",
  "key10": "ANoJsdb9qjXDQDdLZ2nMDTZv6mgzz8NfBj9aP69Gyj7otqQBpoz6SBfGpg54DMUiPcjLgzBXteYNwjyp2z3WASB",
  "key11": "3rG3capeisFHxFKdpD15Ebr7L9J5dKUn7krGftikm4DJWMNotxNRSvDsdoCcLaGeX83xqMfMURukZ4dzbDoJxa5j",
  "key12": "4mw3fz94SAFFdrh5gPNKgRececYjpfRgVY8hCHs2qTp9ueVXfojxC9mWYBAvLQpsLTmfSoqxygfrh1xcmXC5C7rt",
  "key13": "46TYbYpRoy6PsYhP5DcqFd3GPBC9H3Tz5yEQmUr7UwB1sSp8xDGnwwPSn8FSkuG1binbezoNc4dccFWjb9TD1ETu",
  "key14": "2SJzByGuPNWk6bQKYowgV7sHctMw5CuNB1wEFhJKBEhNTuhxnz452Cqpu3oT49xCpJGBfm1obWibLkyspn2RBdMb",
  "key15": "3REZDMg2iNnKxXKQEzdMpShccbuBfgf7K9xaf5pXijB4GbT3jkLNkrt4z66z3ENY2V8dHXUAeRAcHEriNe2qDcLd",
  "key16": "3vs1zXAm8WmZCjZu4YL5rjKCRWytsSdQZ1oSxg99qdKAm5DVggsuGCFbkWkwXQWbkTNE3DXjMNqvZ6bXxL8Mv887",
  "key17": "2GDfMBxhFaWH3DMXVY2XBDNPxzYDqkxKa5gnnfiaTe5X7MgjmDHXbp6ZEbS4i1zsUGggYrx5XikREW5DMXJMGNzr",
  "key18": "2LHJ87eK9KKFkySogKieaT9GikZScnLkjjSY7Kz6GAZo4XYBe8Wd1ZWAAFH7hvYNnate9rR55g4P4LsEyxGW2CXS",
  "key19": "22SxTiFDQSP75mFi4VkkrXbPfeBabAYoh248NkT7L7xsbyYWK6vZLLXFcsffbE9cpArbLkDv9oTTW8AwhTftZFxX",
  "key20": "25H4FJy75HthKMWZZ44i1mBttif5wbECZ9e2xNdkabKz3hnxmGefCJYQVQ1dLiF4AshkB9PFZBkrS49xi52Mfk75",
  "key21": "5NxnT6Zhp1JUrzvvnqLan7YFhaYyqEJuzoTN13nhaNQuicVqGH5brcZs9962948j8ZNmGUYsoPXyn4G4qJ1hShw",
  "key22": "5TodnYJ6CM2UkotKbdvcb9hwowFDYT8KB3eMVhkjUkq6D8iPEsHkPrKLuJaL3ehCj1PX4gxoALvDFJtX6ntsd6i6",
  "key23": "2CH74KerRCY3PXnHaBZrvAARoXBsYLLoqeJj6ju5KcYxreHV5TJtVdPE4fR8pQk7pMNoxyJCqcYYng2hmKKa5CEv",
  "key24": "4nPMCpVJTFZGQg2Fin6Uzn2d4BMySPNXb7J6BAi2vANs1ssWmQLDe4FnrQMP1xEmy4zks8gx6nHNRqk8GvubL6wR",
  "key25": "4hky5rQypnSAawK27mPbeRZrNcDT5vyLGKyoj4gPapgurtTA2BwTfHgKztXiWHXACVkMdMBkhdXHciAjfwmQFH4q",
  "key26": "4sUffBREktd25jzNiM7bXf7nf91w2UQCZauaVP1qEsCgNQHnUAKA9YKscQG4jBP8bvKd5bAqQgjBhebm72UCSCz6",
  "key27": "waYLvBVfrVEWYDzEnqhdSrerU49q2eNma7APAtMcpfuDPFJYkHUPFP7yHDZfB24Gnob2DaNWvdoiHES5XeFDy6v",
  "key28": "2r9PnWELFrWKAwX621qaoJqcLQZ8yG5U4nEJU84aTVDwfW4HfkSHrGCoa5vT8CJpbaXcJb4hNz99C5CUDiV42oLJ",
  "key29": "dLDxUHsJDG7QWLQtyqjGZ7UNbvvCXB7NrkM9uBWrKauUyDgJMoi6SkdVUDZW4VigwyHmcQqH3fLPAqJ4JQJmcxB",
  "key30": "2yB5VZR1cprgEJjV6HFJHni4PWWj3tgwAT6pxLFY9emL7Fdwrk8mARvsKS2kiPjU4G4Y6QGKT7JrL7fTA1hyptTc",
  "key31": "2D6L8MBsBfpujgGc7ZyKJpAZzb27UUub3SRxKkd1S9CyihMpsfASH4b6ZVfd7Ehm3QmpLXsLHCENceLBHprxWwnK",
  "key32": "5bV5dEocdxnm3bJN4zrFjcap1AnuYzc1wAYwuk9726mdzFhNw3RvkBzFRsiAegNvtD5rjetJHpBhwnBWvusFVwdZ",
  "key33": "2FpqbX9aoP5JiAJvgdnRioMdWkVrLJoaHSteJkN9tEdKTDTQ6qYRf2y7TsW4SVBUcxJkxJQ4DmuLWzaEi1DMULez",
  "key34": "5Z5W3MzjjV1rw8w6E1DmXi4YqPkAFi1X3FndzT4Ci43K5Kd6TebApWBthX1YP9K5Vxygj8iZnJUKSrxWgVPuqmBU",
  "key35": "2gEopGLdmdkfh1j53hfEHiSBmUyTuZMaA1zd9ZvKLhSZWztHczyfSRLF8bkVr8urbb2iBTDA8oz8j4hdzx8dvr4S",
  "key36": "39PxevH4BpWD6wGFuh7E6gGTj1ujXZmGxLbTmk6zsb3miibifHuWHfPcVrSgqyfbBNMHwBgrv97jMwhdmCUPkEwm",
  "key37": "6ksXdw8XwaXtG4ktRx2zXZwGKjKF8EFBD225Qwg3KAjEstXWLR6S3ViAUk1R6KdBFe859qRQqVBnssYEzULGsef",
  "key38": "2awp8F4v3SuXo3dGPWr5HpyyNcv4Aooq1sWq6J2Se1jzVB3pDTiXHYgkYn5ZuQWqGHZeANp8YEnTv3GuSQByoAfv",
  "key39": "2oDP4Ys5vNVJhj6aDii3f5BvArQMpKmM6wbx5UB3sxDXXDfKGZAmhLHomkdnwDWXwBGy1bCARwWLdCZ4pXNBtUKb",
  "key40": "3HReEMqWwXMeqXMT7k2Pv2RZo7gT9j8tgigHqgs9VVMf7xHcDkzsBAJGbXcx13VkQfoWwUdYbWKYGfrvgZ2kKkNy",
  "key41": "5pqQFri53ouDQ6VJpPykdK1FutUBqdBVcWn636bZTHxhjF6XF4Ra4xvxuv5CC6vKM72Z2aVYcbeL9uHmZHXCqk8W"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
