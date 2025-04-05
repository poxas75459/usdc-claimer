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
    "4vzW7TrEcALrPT8Y2abv7w1HMv41JxCCGCGabATvx43cueGGkafABRcoQhShnTuW86uxaD5KqxJkZ2gd45qwzJ5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkE93PCk68wBWxXrmUpDPn9qH1CxgaqZHWYk2x4sh2spEgvA8eHYyFg2AiMBcA1yHsm1u47sfM37DqbvVkXmEHE",
  "key1": "5M9QaoyvC1DZsWuhWNGW4CwhUdcVhtbMB7MY6SHYERH6x7P7FYcjMynitQ3fAnnnujx6a6PGnonwaYP7EprVYdia",
  "key2": "3jyEMBaS5pAFMtiXK38YPUmGPXRC3zi1nuJJ5KqKgTHnAvtzYeyiDgpu2wJLSjA5ho6gsWwxBFGGAsdA7BqbnUKu",
  "key3": "3aEy83TYLvXhivNDqdTa2EN4wdQG3HZpYyKUewpF2p6LT9R7t777RbWBH3tovWrjEZnqVRzCQLFYHdy9gmkARzB3",
  "key4": "4qHr7KVpUoqtVnSpAFaDSLMVkbdek64y3TfNu7swZTa19TocijqTKwdE9UaV6e9UWoDNpf7G6XWQiecWDHb6A5Xp",
  "key5": "XrFsmsHAKVgUAEJZTyfw4zozB56iykBmCUdcp8eWf2mJbasGNZV27frLxxUigTGsaXvf86bYF3Fc1LpAYsFEXEf",
  "key6": "3T8ZTXJebMCVm2Gjx5YG9xxPMLQhTrV87zgabkbJewLDkMGLLv5ojGrjJr9TRH1jSav5oAHPmrijwenNwZRGVH1L",
  "key7": "YjJiCDgvxWVjchHQdmwS32HGaCHUUyf4Lav6PkQ42NSSPxvWFXv9F7kNDegAba79rYynJqtHxzpKtvNhjKZTFf5",
  "key8": "4QqrcR4iK4EGZLaQaucEs9cKh2pfvvPcaPz48Tcxp7GivTPk5iRd2bYxRTTLT8nQTGECqDFpvjeouky7ZKFqmSHh",
  "key9": "5wskjZCtWQza5RDiPfK6MFciHKkMX2zNVWW7BRew7MQsQTfxYbeZE3cJGorkPAWNg11nrrCVNkP5fVzuy27x4Epj",
  "key10": "2fgC9fsJs8FG51cNq5DBnXV9fErGSMUY9cFnQhvbkjjct8muQrqdCaAMRFS1ZWJfuVqmRLtAbjPabgkh1fgHme7q",
  "key11": "5NyqSnMm9VTJcWQNgvfEB7iEM8PKDh7YnS3F4SX1qMHERmDUstgKxL8fFjWoFa8mZ5RCDAppFo5FoHGrX8ChCysR",
  "key12": "4mjanUhzX1cP2XjAvunN1MLM2hzLdNRx8GAaJ2qRi14nKsR2fKF45aoJ1qTjbHPJB7c5zCh5Rz7bw3jusTzmq8KN",
  "key13": "48wjzw54BzGrpyR6EKVTCbrYTExvgDKEfmz2iMqzncTqcd7goMED3aKviuDBZjELK6yCwnQseRWv2TrpiuozRGPk",
  "key14": "1qYaQvffk9pSoZw63epP4iyuPU1uyUJkFjJZBoQUpXpkcW32GD4VF5Mw5Goy2MyKbDktrBDTe2Px38rd3Fhasdv",
  "key15": "3yCPqYwQKbMiPmS5tZVC7KTJu1P47yQKhtkgC4zymoZAX9qNojUGRNdQoXSPZZuWnRsnN6ZHRLrdmuxiDDBJ4x5q",
  "key16": "3DXBE7XG5BPd67Y57dyyef57EhzUBvw1wBmLVHtwgUT2v145kwAZVKVAYomb5NoEZAx4AgXLkdNt7GxZjHgNFEsd",
  "key17": "5cWbvw7AMBXzKCmbHN5KWVEmjpL5LkXpW68QkVncZMHZ9ZqzkZ1svTfc7Ue8RF21tTLQ4NtXVdkRj8K7GgfMaUy2",
  "key18": "51cPyiMDDR5RrBc1Q4iXcAR7YSndKU34DYnkZaSnS3X1ejSWyRexNJGTQm5tU1nLmVb8okoroSyEh21x5GAngKtq",
  "key19": "4TKYRFgT2y8z9ehJAb8s7gXH9SUXXZbF7zsb5ca85oQ1GqiL3a4yTzNTjhEfbWqshUBCGABujLbLKosrGisChZsd",
  "key20": "2Y3VJhSJSHtDUqPrHpuFq6VPiZCFJJ1hihTGUpeN7JJMhnZPQduNDs7ZLcPGhVUS59staxJR7qJuVJTgvq8pi1N",
  "key21": "5SBa6tAKZ2i5bzTQD4s8GJTYn2MkUAvbSnvXVx9GYNMNyba9MYmoiBQArCHac8pXmWXNd35KKws7Pput5vRNV67T",
  "key22": "2d1RfDd21R1fR13PeJFabM2iyfGGhbzBxJYutPYe48dS8xg9VaqaiFyg6pKiFBwePUm7ASesmSNSCduwv637fkD",
  "key23": "4ujeFWbxr4tmfChxwodTDWidDw7eDEqmdF5aUrawak6qqJGq26XxeeUVUVcnDj5t9PkJ7hc18Sf4mTeMPvoswh8y",
  "key24": "4un19HsUMPWEh2JiZvXRUn2RNL67rEhUKV9GapPHyhXmPKf5mTjEDWJZNQzTDZMNkmpP53cUMo1Eb7eWEbogva67",
  "key25": "5MsWoWPUcrU5CReCPKLs6rLt2pntj6gPwNRS1J254SYzAfmFEPPoLtYBstBbVeJRTv96EbKTqLs37zGvezKns5Yz",
  "key26": "2J6Pf7WbpgADcpnfwgQkCzPQg5BP33hfwgEeEprcVgJ3BcHAwuu7cjzuvSxoRt6GyS91bHD4maHwmaMyHeVGT663",
  "key27": "5kosgLUe9YoHyZ2XS9NQmAFrD91bWWxhKZyv5zt11qmwxaQcS1H6uSBZHMznGkMXJSFKaWPRuT6kSACw2cJuGp5w",
  "key28": "2EtVEbWZnekPHaZTZHNEk9npakbzZe9iPW38VbnkMJU4rA9tJ5cjGfxgE2xquy4SophgRZZ6icfS3FhrX5hXvfik",
  "key29": "62UKz7M8ajGi7dYQwvLm338q3MRvEwo44kzxyDjqdCPuwVPgsZKXSczJRsMqdRSLQmv6gLWjdBUTUq3pCjMkcmsP",
  "key30": "xDyZyC6114FRsMT9GQqqy1Hd74kJfre2Kw1c8WtRWfGMqq2axnjAiFqECPduukbgviZraeR5Qm2SVw1dtT2Ak9o",
  "key31": "3fyfUjymoCgaGBYnQxKuiGtadN1jdz9NJJZh9h6e99voDSrh3WZQU1VqPzSiE68fHvtvQNrKjCGWbsDYWouy96ph",
  "key32": "3pPHzr5YnKEhhyoTAky5CVV48c1trjmasNcoEVX6ZPgCSCwCTjgrwkkNncZsn86KqXAvAfSUkxnyJ22ZaTPBWZNk",
  "key33": "UfVM89qys31GhX8B795boBSvgEfhUSNZpzNgSR7DkHdqjVRsKMzCyDc1q4QYxXK5MXqKud782YQuvFAeRyubfYQ",
  "key34": "6rcZ2aymG5daQMDrBz6MPT4dqyZMaMnZDizzPfRwncCBvhRsGHYCC45s9BRgm7uenRD32EPaB4K6WFNT6gbtsed",
  "key35": "2oS75EfqhK6XTZ1qE9oAU9DPG4YxzUvmAqJdhziTYyKtYCNyWLW9xJ7VqxArx38R3XcsDvUaN4KV7jyWss2EtBiA",
  "key36": "3EdPQnM6tUhqfQFg92qf8ahE4EVLaEzeg7bBR4h97u7TpQ9j3NxFZf32cgiGrKm17GF9n3Azx4gmnnFAcWQHQ5YS",
  "key37": "4ccdqZ369BWyB8TyJDvdacPMzyuFu2CUSpNHFeKHFjYYZ5q4wR5NeohwYwn4TUvZYjMvkWV6A6Z2TsJsmspKMMrZ",
  "key38": "5j3g91i634UVc7xdp6uFdeVqMHvRJUsxAH6pXGNCU3w1Y4K1kWKCch8FQELCwHH5Yjdxu6DH2WQdbifmchkHPDey",
  "key39": "56yJ9R3j2vL9cUwh26d39uadCSZN4uarQmhrWG1pyhp7ECnBYoWbDkzQ2Ke2hHxu7DHq3LnUNwqe2kZV6GMhWVTg",
  "key40": "vxeJSdm5nXyYhfTtLaLK2hrkeD5aeczJVau6J5GjBxXe7yAPp6wVbvunR8Gp6MqnUb3LW9obmPT17vi2yBWHrVt",
  "key41": "4fywrXDJg7gnGy5J7xnmvvSpXFfsaeqATEuy6yMhduLGnHyxSQpikJvv2JZZVvMmbSdXeYuzcuTKWbU5iCNXvtdz",
  "key42": "U4PesxjhaC4u7efrcrKT7hM5u6VaRx3243DKPHPugKXtn3TRi8PUYEsfY47Sx1EPLFfkmfp8QuDA3TTiSeDHNNN",
  "key43": "5JUiYYgDyYA8e4R68RAe3PPr2oh2iNBn6Asafsdfgy2Ys3XSzpaThvdRsKUgFSL3kyHdUYLubBoR7Fz5SiHH4xNG",
  "key44": "9yb4bvvghf6dbyViPww8w325QQ6cfpa6V2NhQu1kp5xpe1sF7EEFukCG4d9JXYxazHNUd1QAriTAhNbtUqheuU2",
  "key45": "JZmiZ4oZd6AgxZ2Y4dBqUxdubMqbxPJZTEKc8vXPLWpw2aJN6W7VdaMzvXLCcQdAFgbyhSJ2TrRz2p9WgjRZ98u",
  "key46": "4SwU8Xc8Bqybbjb8idHDmvdB6KCjYubH971sCKHFxANrkNGi6hMtTizxXdiZYzadWpoePBdPMuAL6yXhB6pykPNm",
  "key47": "3Z2jLznMyQmiAkpao7XFHeEvmRkBLaSFZuWGnBncTVjXDE6Xvju1YLkezrQizhrcSMPNW11sGeE8xx7Z2u8z4t1t",
  "key48": "2iN9Q1riYYsGUguB61UugNcfwYVKpJA8GV4fbYmYSkDcPJou7H1n84SWKd18er74EXYG1VR4Jr7HYfY74kvEGYcn",
  "key49": "91KaHxiyUPQbEyZko4Fgms4ud9vqTFJm1DPEdSmLzQvtiT2wAXaw78LmpxNFg8MGHRvmSrRALD4Ju7YuckFTYNb"
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
