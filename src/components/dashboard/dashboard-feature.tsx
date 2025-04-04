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
    "4PG4xRYQH3mkeiGXoL1xZcvaQ7QADLTB46Ji8dKGvrtmCoArtmSie7WWJCASU9zqL1uPfxwdHpK6Hk9s2isNVoFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PM7VUi45SNo36AArTCjhaXsCX8GCywuK4JAirNd1gY9vGUTrHJ5nZtWQMMRLrwL49mxJhXrcXjPgKmVmoM6WuNf",
  "key1": "VoGtS9J5zjMcBJXEtx38zZkt2b3yMr3w12RNudopyn94vdKQ5je7ph1bT5FCKBmNc7DVmrqQhV3aexi2Lugskv1",
  "key2": "5iLDe73XCNyoAWwWMtvtMAvbBZacZKxPftzRYMR5wEp36vpgwHakornkSRaoQoM1tXCCDKbzze3VFrrJM1iHnSG8",
  "key3": "5ghmZcfbDSmTorDpfpuvDr4Avv1XwMYF4TB5D24rTxo3HXBxAiGVxjRFvtY7zPCKUneqkjgRjNzooN9q35Trn4ah",
  "key4": "2uckY6f5qipqGfV7FVoBHGJNhrVwXCdbzn86gX8eVaYkxUmeaYRQqRacqqL2CjRBU6WUab5xA7PyfYJrCqrqZ8be",
  "key5": "3B8j2qxyWMgTpTRuKJ5GdncLCCA4hn28FJ487b3L7t4Y3DvJ1mNA4GNeUhdA8d68DEVj1VoFJ4wcBnV1hKmMhBEv",
  "key6": "5Da7NH5EzqUPaRsRqwKh4Csz6pF3H4zzitHeZg8vQaHsWsoNZFm7kVCheKg5wj4SeorKoFiEtEQwVSk36SoV91qQ",
  "key7": "2Wze22YZANoiEH2YtkLhEfVx68NZqaKmL24U3TtQfbsBAHLvxMkzPTqsovKaLhDCfxKY9hA7GVqnNjaAc6DmHtNE",
  "key8": "3eVeNm9KLdAfHtRCnYmMX24vFHst441By59fFJkNVJqQURpiVUTapzeYn9uUrKDabJrWPpRMPFvXcvUQMmGGiT63",
  "key9": "3f2TagijMgJJC42xmpAjjgH9dpnnZiAX2xoPdrPvm9ERrePSz6xKGUzo9HESEbEWYb8niypq8TQiqfyK4ra4Wwm8",
  "key10": "4btmezGmbQCSXV31JACVNujdDVN9wmrgyko9kXRrUQvcc4P5v5D88itxVyNjvfSzjvEnkEWkj66qkzwnbLVWSq7a",
  "key11": "4o4A64kHX7W8SrPNLSWaHa7ahumCkjVyPeriEr1w3ApKNkW7kG4iLGQieg4pe8TUYGh5WQ5LCPUXqsrjA39ADy6g",
  "key12": "4ZV11uGwdQjiAtrzpN7npkUJbnwYfFa4S6R89L7pHUaNNWWGc8cFKF9o4XU7ZAQPQCJxUbhmJDmaZ5jzpkJb2FF3",
  "key13": "4aHEf72pojrRjqUJMvchVaRzjZeWsfzBTuLJe9JNGsqAwBL99wP7H9AHyrggPr8zaXRDqXHHLRUBCQk566r5BeVS",
  "key14": "5QVe41rYTpE1E6bcP6CKuiU71PKLfXxYY6dt8NrzQNBYS8yDpUaPj1cyWZESYf4MdTtDqMeue5pGa73VX3Nnz7VQ",
  "key15": "34oH7D6g1vUZZDp7CBDq6fj8VqjHu5NpMxK52jP4S7pRN5xJgzbJchB3byYFmahxxmb8zinCKp97PK6jZ9qw61ey",
  "key16": "23Y8oDbR181RgxQmH7aeA9ioa4nXMRLtsKU2zLCqqXR5HYjSGT7QGfggpZm3xLVjSCfatywjLYJiRWHZvNhrRxzS",
  "key17": "XQNAz5wuNX1vDBCBYZjwVJ8CWtjPGuiQAxGhEsRHmcKey9Wko8VwEuJiG76C1sTW5NcQ8WpFCwE1fcACrTcJzwv",
  "key18": "3Xz8zRfv55BHy2U9ueKr5E6VBUD1hNcxEX2C4VyEcYCjMmQTfDFZFCdujfLCtCUuCJQVFMNZz91cjbeJvbhHknh5",
  "key19": "3EQvXiz4xnBFii742eD9EFdEWzdKTYRq9PkHG3PuNTGveDiYKLTrEFDofEyvWpvcFp5wARZ3EUcAA64P4Dr77BRR",
  "key20": "4v1Jz8U5oA2ZkBS64WSRJoyL4quTaJ2vdUohMWCM38NvnuDyR9xiTZYyKbUBKF4VivqhcA2uzvGiJAnEJ1EF8r8Y",
  "key21": "5kXZ1mCuVM3g3omDHNCkikQJkw7tBQmjhKCQQySJpcsUuUTgWdqnd5JZAkJCZdH1zKZM9EzdcS5Zk2pWSheJdzZC",
  "key22": "9AmJrAcVcFmBQfuVW2uhxmysG8YXmfJ1aJ7MDEDM4pD2ovKYzxxv2hsdi3j8wFQPAfv13U8bVBuzG3iGcZ9EAby",
  "key23": "4uLR9jb3BkSvaWN9RDC6WdeKbuPSEmrwPYceyWZ7wdS8RBvLeehmuWozdPBESiw4sabPR312GquFUE55abyY2EHF",
  "key24": "XDFpBGbJ2zyuxxJrbB6okkZmQRPTJPHQjvtteVuu9GKQimS5mXscQerMf964tLSGwFRJFJULXdM7r2NxTP8jB5Y",
  "key25": "29NrPp4ptHyP3tbkhDsnhEvGNizrtTmHbr4Qe2CaQRMbqvCpnXTRSQFjA2TfwFiCe7A29yX8KgFYor7NSAp1AaKo",
  "key26": "83E6UbZviRtEvp4RmSwsn7zzwFhmWf23AViHMnzHKh5YQy7hUfaBgJALARiMik7dCa193FpNtEH2z9myePiK1GE",
  "key27": "3aapi1q1mKfWwfnACtroe8gAG69XXFVSQuQ89qRxjo5DUXZroaTAwV8gonEaJfaqQnBmCWqfFjRuLinLs512Pz2b",
  "key28": "4VZy3xfgJSoEdniL46HYMDq4JwUq8aSWSafPohkr8VvTzPw3uaHgNyeKZZCPpAMwmMQLwfLvCkcWrqFAn2PsuQnS",
  "key29": "5stVSQZS4n35YQ6hemtqStyJkvQhgtzeh2hcn3SmCbJv9crb12tTphy5UahHB8dQtpE9cTLuDHpYFnkYHbpcMFwt"
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
