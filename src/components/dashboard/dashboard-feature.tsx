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
    "2xueRSsFCT6CuhCPb9mAin68ue6cH3goFYhx3SYfZyaeGrYM1jz5wqzD6FzfdR4vsKVF1EmnZG4cxtEkxdaHrvSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVRrrVa7T3pJSNooP4LtzZNb6zqS3AWFjdQ1w2pZetmn1CcQQxW6nWnYVYDp95SuKybLmHe42gDWcKxbQP8j4ND",
  "key1": "Taw7kC1nedh5kyZo93X7Yua8FeygCZcyaaNFNGshmerH3f5KGr9jnzoS4dWmh9ZHrRWT2UWZbQpQxSAfMChfMcs",
  "key2": "5BE1CX835CSM2yxeebWyqJ1aVTmCkCqRb8gKQtrns6M2RmjPQ3xsEGB6K3mxEQ5R72Ez3LpvPCHhsQnqkar1xihm",
  "key3": "2hzpoTEceE29gPpyD9fZdbs32F3LPxVGYjeh3CzffcuZ7eyk1U5Frca5eRYMfYxPJ8UBvxKWgZqtTnF8BABY3dZ8",
  "key4": "4hubtAfL8aRnCcd2FgSFRfsXASpsBtKQEvPhEDfxpwNPTJXVXRg6BAwwUuC7e7jKXrCYabxenLYue6Jm1gnPURVQ",
  "key5": "5E4ErsKHRwwZPqu8hZgwUoL8jFyfB3FGjTaXNMuj5LSk3Echh3XsyFWaMgeYLXvYyoRLLw3ZfbUthUeCgCcV8MRU",
  "key6": "25k8TYaGSs2xcjoaj68vmhPx29mK1WCzTPVEoSChsodpL8rFFj8MY2kDH3WhLDPFmR8Cn6fTr3eTnjL936TZNFL1",
  "key7": "2V6uA834vE2ppHvxpbtaiPKsCERu1g12VxmY5n8T3yK1XwC5w4XccE3pVTQtxwqvZjTfZaLWwvwMPgLwtEpnAMSC",
  "key8": "5xwRsyN6YwK7CXLDQroh7aM7F6WbRWzaFbRNsFMDg5QvWxwV4FBCd4GXrM7wVLaNkB76a5h8zR5yWiXGJqm5TraH",
  "key9": "57s7EjnhwjvAWVq1H4ZbQ8Vii7XxhfB9Y7zuUu5cJcb4LbQxAqXfroToKi7uKs8d3RDaHjbZEeBwYHgAtFd5MX2x",
  "key10": "28URWjkx1aUj6gUqrfy5GPgR9yAmW9hrbxFdQe99yiNY4BcGfb8dfdaarnS4bvUwYr5KpEzDcim1oPYFsx67HoT5",
  "key11": "5LaBbVXKJ5mjkZk2nwHN4tupnpLYtoPEXqyvmwpQbpbsfVYVq69wdwhfHdK5Z3bMdQYmDqJrpDF986U7a8Y8Kyqk",
  "key12": "39huikXKVs9bE3fEhWUXigh5RdXh7LeQQHo3Kjevg4i22tEkLKHtQ9Fd8EjQTQ3axjSMhtmq66gEVJiAsYwfwRvz",
  "key13": "38uhnh2kyvThx3FwMDXSpC97XEE2frSwt3ePdRyyKUXd3i3sADpzKz3CQvUSh18rwZQxgxSnrryHySRvVLe5WnSe",
  "key14": "31Kuzoj9vuX2qWJhaZXjwBR1uLJ4626uhKQpPxu1qkQnBE3N1Uora8f3ZMXMa9aQJCAL52uqXo8RuvHh9e5guUmx",
  "key15": "2pPN9p7xHbv39iqwTrDc9Ks93vDaBP1X2CXshszCiu2bz5YLCTXpso8Qhq3S4b7s6HiHEhJjgGBePAcX4j4KVytA",
  "key16": "38xTGcvCX4vsPTmET1jsZCWEpq4uwb6wbV85Zb8MLopprodFYd95M5nLPY5NjagMMHfnWAUJQcM2dG5DFPt5mf9R",
  "key17": "5xDWTTddmcktT7iAjq7igtzfkhnyiDbihsBvhCEyf72dgyUvzeMCkrJH5YsvHotZg3aBt6f67aiGvg15bKnFLeiU",
  "key18": "6Hxgngmg4v3GnC3mXFGj8WFiAqEHj8cojiuTiYQp1xKHTVMb3uM8CZ1sCD7QmXBAju6CDCwvqByctrDLjipjpP7",
  "key19": "4MBKeXX45zUikTVQH17yXPgLeyWNGiiEvCnFvo4hvHC6og7Gouc6tCcu3FPMxokgbjcGP3HrL7vrVSbj7UnWdFtj",
  "key20": "4Pwe8Qr1mjdQgmdLrqeJuKurRvY7NVWvDoXg4xjw8UyhYuTMBHReMJJCzk6MktJytYCc3JtsuurRXmTk7Lf8iBNa",
  "key21": "4WnuCEzeh5nviCC2t1Yayt5WecGXXPgZsEPy7ySa1y9wDrno492gCQnTCbKwBUhAsLrFb3buV5JjG5jEPVPfpRWr",
  "key22": "3QSZEBaPi8EUmv7jgACgKJDCrr6WMPx3V7YJzhyp7FPig8vzXJALV1zRBEKpQzZv3FfEtMR81uUH7y6MzWQmwxoP",
  "key23": "498DNMtNVeeJg3cRYRvtr3o227s9x4KcCSA3E5HNHjgcc5Gt8JBF5CyDx7YqJUaDaWJ63Tgdd7BsTm9isSgEa53A",
  "key24": "9kePnGrBaLiFjUuQxUz695FfnuZPtZTWPaxdrchKiumA2uv5J6Zg4AizYEhH33nY6u14KbJV852MddTefH8q9ou",
  "key25": "4KrM9Sr3ap1Rj78VS7gKJYNM373w9Y2WWM2CaKVBZN82ygpT5QvLK36X1DRvpzkCJSXQAMFQdpD1ZNc3iVvX12LU",
  "key26": "5qX5Fr5mnFqbQZmhyZERmoaQviEthzUwHkgyVtY6Ue6zapBUudbjvz27HwP2YCkYp7bqVzkVhuho72ECabnBMDih",
  "key27": "43TVw2dmZffKoqvmH7LQXYPHPhScXLEL7p2Mt3VUj9PtNiUYarYU7Kj4e784MLhxgpLwwe4NpvKo6pLc9K6RsWU",
  "key28": "3LhkBocqpSiAuQt3ybghBpqR1mvh6EHFiKHdVM6N1G6zoVG92HqbSAxYGKV7dNKtBK4LZRgmgp3KY2EkzA3bzaPj",
  "key29": "4vePhv3H3za4CGgkjD5FzUrabzN9mhn9yZuwL3jCV8DHJiyS6Pdb1dGAJdZh2Ys9XA3uKufpyaPk2n6gcAH75Aws",
  "key30": "5G1vhWi8FbCaGPm2JV3gmRzjuCnsqAJBW7rCg2JvrQZkpKLpAMGtmkkQC7NDEgiU1zrPZEXkjPpNArBM9uRRRQDT",
  "key31": "2BFk7WeHkFyW3urxM5JYPckkXHgHWo16ezTcHPy5bArjBihdryW4VdhvQEPJpopJUwSBGqETUnTdgUC6mgwUE549",
  "key32": "5dJYY5bvZ6r7b5FcwuMErpHnNxtnczZv6effyfY8vxatSsVq8sxJjv7hqadJ1anwut2GLRbbrqHEXKsDiRooQM4S",
  "key33": "3Xfbh5nXjCKJZWxih5ziXbGmvr5nzPF9M32ijwsta2tpgV5yfdMGxteC7UyTWVonJJUE4XAY2pWwQLtYa5VRxYbq",
  "key34": "53J4zTbKzuauiKSysEU5BKKga8A44TDyLk81dXPuHM7x8kZC8xrswdGEqYcMZBPMRM7pnkvbwAkaZSGEpMAx6W9s",
  "key35": "2w5GeVhTUqxmf1TvYx2av5qDtAKo8G6btVDqebUXytCbRNbvqwJYV95w6GmaUDVyw9BE3RSfNqZrY3hURLXg7zbH",
  "key36": "4q8L6K8srioq5prdLT9FnXrRK6wC13UHSeA4F1cPXULYewJZ6jwcngwm7QgMNLMspJSi9QU8F9Kqu1fCTMLynGP4",
  "key37": "4qCoA5RVjXN9RyDVD2c1tQKfnwG4L7FtkWFxNeg5ZPjzSBY29bYFuiHPg6dd7RCxDkFJSXpeo6VYX7n6zw3tPmPV",
  "key38": "2ZnJFEek8T6jUixdZhkEbNojGWP4nyEub9rGEY3bvuKqi5cnCvJLXGJBN3AhLxMfMadc8ghnPZSwZf3hkXwvNbeX",
  "key39": "AH6jqMa8rdQSyuTj86L19aboFnJpZFKKbcagQw5UnabjUYZnnh2z71BtBUY5yugXoRSzBGYu5WabfsVjKYiCyq3",
  "key40": "3R6zAH6qDxQ91h3WTWEKxHb65WkpEN6RoJCAee2nC1eq9ZXcdr3VE1RjanyAKrFGKvcDVd2S5uzZoqeinyh5rhwk"
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
