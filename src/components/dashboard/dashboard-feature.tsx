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
    "4Hc67RofNBQXL5LyUkAKCcEa77yDMuVV3YoMmcMQv8xtz5cFRyvrzKJbkABdGB6B36EV5o55ePmW6QkkSK7BDxcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8uD66oqULMaejZ2Zf77iV6AMThYL3w9gHVFNNS4LGmpuFTYMqdN1uXU7V6SiGJ2NSXKFCaxaxiEzMdT8C3fNi31",
  "key1": "4KxA7gqzu1gWFEU1B4Mgi17tuWw4KMj8fm8Frs386vhvZmH21XCeXe6j79VpoDphTJ2xsx9dg6FrdcCgamX5xR27",
  "key2": "5mmqdvNLnPmEz5NHkANVLdf8VmMWaTvjrcCWwsFP98DYNULZNksfTCvAS9458NG2kMgEeEZbPJN54JM9zuba2fFF",
  "key3": "22ijLfL1kKQuAf3GM2ykCxYrqDaSDkDG3pjTpEGkEvqnfd3FdJ1H9nSgBTFBfRq2H1AL3ipBsw3Hh5khRpr5RxUx",
  "key4": "3vP9TTNdVSEowzrsT35U2mPumbjMmXauZZcsS4BGwETiqFbMJvP3QGa8XCi6PEUVKigixycqPWPQowmszEktrVyb",
  "key5": "oXtVRKLy2gYRY39SxXyMUwhow6zhaEZyi3Yha6shBJD5TzvUAWf3gyMV8m1wHePLeBL6kSQiumGsY9SC6yk9FzD",
  "key6": "2AiqNDNQ9E7sYzawwyVrbywgkLRdwY94gytz1YQWBL2qnwekLW6DzmHYyBFiYGQwqqWkWsMZ1c9dn9e1KR18HEPG",
  "key7": "4PFX1iC4aiv4AkxxFbExrf5RxkJDy3yeYhfUBmLgDLY6Ks5CnjfX2UzSToxXxvEk2N3RHfqseVD9wdwicQ3aGZJZ",
  "key8": "2uiZKV1xBocrurfELuMGAMTmk21mooiAbFxw7GcUDDAhqn4ZNCdnhR8eMLts2HixPNUtPefThiXgSEBSa3e4FALM",
  "key9": "3osAg1ipGzbDBbyJRqguyvSAtj4yX7AtVzpnp1R8nUxaSGQzXkV8jjeDM86FzdZFu9XQirJ4GhWogYB6o5TbU98s",
  "key10": "XSdksMmcvTfai64ZwXLygQUzo8ZWihVweg8rXiZCnaxF93wfw4GpuSkU1iRibUBN1e72crjzkZCvV9N32zyc7wG",
  "key11": "PNsoTA5X6USWW5D2YS1o5HvGq5jJdRVuZ7gEgKPSKWJTiVz8ZjFwumSzDg6Jq65WkGBBdkyBP5n9YrqvW8riXPW",
  "key12": "5kzw1jpHAkJwH1Lstopsufk6fa9NrFjgPUxziEzzh2vAJR7LP1QsJFELW9EZPsPamMgNfZL2HF3uWvCMRyzSAd3n",
  "key13": "3adEhnQjKLgZ9AFXMdazFPy8MoxfUXHHumaYUujJ6FdAvkMC8jnpEithrkUtA54mMz24HtAz9vNWRMXC2bfPmo6M",
  "key14": "5m755N8zaoFnsSe7aUERZCEFkC5tEGpCD4r1S97q4Xm9TmpZZWa5rTeSwHaxRfnBsa8r7BctTrcZb7qobbTPzZXP",
  "key15": "3s5Xx7dW4Rd1g9b8Sbksnf8YgAQrRaNVne7FjKFX5UdGDGDTvHh1xkykeRnXqk5RZeEghbJVc6oXwJDExWC7GAFy",
  "key16": "4YMRB1gm6gW8DRWoKjrsSvMtTniShwSTvwKrbLWeSgKDTXAwPfFzCpJoLm4NVo6595wLJhAukoiKgzH4agcRszqt",
  "key17": "4Mk21QiAMPYpnaSy5NSFws4bdk1P8RMpzpnKMpfwrs7NccwG129Q7YqE5kCMwGU9Qmm4R44pSRs93bTpgaSoisgL",
  "key18": "5GMA9kKYkH8V9jJq77XR4gqq8jBnRC6x5FEF9fGf3w724tq8JhwDZyhsDf7Zc9PX8u8PAdKmDHSb93MMzonczkRY",
  "key19": "3dHaQw1KaQnycHrRBonE1v8bDDwNd2qz3EUFYxBstghZRBFSx5gkDAQ4qLkykDizfg8xhHEqZobM4KL5vKdQbiQ7",
  "key20": "4hCgDTnqeYS9gc4dDpGkUi4mVu2bREcupfFfTV2rH7h8D6byTE2e5p9oxeq9svqZia6Eq2gbo2XFeoNy5PYfaEoU",
  "key21": "4Eu4rAYyiVJJhcGVWnuaGhkYsA7oZQAZq9JrzmxdaDY1DHFF4YUeKkscQw2Zc2tdmrcPToDjYp7yAfeSKNiWd4Vv",
  "key22": "5rkGdbAWePNCC4rJ24EbVDL9wMmTbEntG3EHe6fd9nuCQXakMTi7VdPFzEtF8kRKYE67zd2ejcnBPYUCJZ8GjGBr",
  "key23": "T4sX2ENgo3Gh96H7uUhov9zeyrYi74g5iHPcznGgvQcZZapCgM4aF9XBqXFEdf461cGnSUGFxVabKj7X8diYEgN",
  "key24": "36pdX2iDyzWQ6VyGHuxGy6g45jeZt8oqQmTvNdT3vWEEUBkghYcaMU2whVrdhhQwTGVJ8Nh1QA6v8dZvdF3dJNdE",
  "key25": "5j6z6nLHNrBgaNRg7Gg2Mcsi7QaoyZV5igYkxfYA8X866sffHchCyabR56NRvdedGoC2RdrKPEXQzGQvv7nfMzyw",
  "key26": "K8zfYBWumi3MnnijBsivpdApGXM7p58zLsktkBAsVu4oRJomymGbYxCxo7x1NdDU84eTeGREGeSESe5vz2BSK7J"
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
