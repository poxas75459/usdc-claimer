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
    "4ZMRWNsKMpnXeNyPQVZzU6WZod82woNaVp8zRbzatWGranZcBvxEWZm6JvzdNffLmirBr3Qw9JagCmtEDfUb9unn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DoBBrVTu5PpCnGzZ51PY6Y5jqp5hhoDiQAmxCPXfNuZbSEmp95ycP1vUEcePc5whnZpNQ5YjdNaULKxZAx4swLa",
  "key1": "349qtq9wtZUuMM7eNSKkNRrfCWVxaunqVrBU3yUpppoiv9CGwKeHRNunG6xESLUVJT3FgDvWayHsGZCNCYrt59ZU",
  "key2": "2iE7Q7ukmy8bcKWR9wmxHTyzj8mipNw6ZPHN4AojJn7ent9q1zdQRupnj7ZfsqV34D65ra65fpg755kuKn3xfusN",
  "key3": "4pLJnQyNxcNisXp5zgmbpPSt4QvFZQj6niD1id5ZQvKG2UeuArNZvg92acSxTZd3TsEDTaULRbd3Cq3seYEZCVZV",
  "key4": "3dvJQF8WZv24jP33ZxH1yyUizSeMdGUYceQEptigbNxeKutvSqut9GLZEPx3g1y3ZfFkb7v9YCripufYo9KcHDYt",
  "key5": "5xTMFYdo4VnBT1fiJM6KNXH7c9YSJPq77Kx1F22ApLzyeia6TSUbrAndBVR1xcbcZAzkw8onWyPg3dte7gUN7N59",
  "key6": "5bhUAn5DbCh9kTKUEpMpqSfc7tiNEbEohEsJ5J9iqJFWRXvqUP1fnUpjo5tqcRb22vkMNY9JyA34KrC1fowL9hCG",
  "key7": "xN6wpwsr2RJNEhFk5DbfwLqz5G2MrKuYTUvier7zruSuSXcEQYrGbyG5iAghpcjkGZYuBwcdH7JEvaKjETtWuk2",
  "key8": "54rdjwpYosiA24JuDR6s62rhPrQNgfxDctUMeWu7X9f8dBezocZq45S4SniMwtC4pxgqgMZgYXosGjXQctYJniCz",
  "key9": "4Z9fQpqrBQUHvEbSoHUgkzZ85bHBAj4yJy8EsaJZ5efLE2u4ufsTwwX7bbwi4UCaYu4HYjVSUqXrGSApU9VY8KYD",
  "key10": "JfNfhqQsb8iHQuACVkR5JAyiC1awmxUS3XymxwegMUUWJcAQvZF11ryrqd8EmNexaovJ6s4E8RWnVd6K47VUHSG",
  "key11": "2HryNw8co3YsTuoLzw9MhfXQMZHuEX9VS9TRFm5Tx3WV7rHKVEFzy4H54qMh9yyR5byphFuuaxR3p61RtjrNnAgh",
  "key12": "4wbirpNcJ27q9ot7aSjc26nz7p6T5a7oCf5tnbfxyKMqkTxrNEfZS2uieDyRGQfdQvxGG8zBn2yxRsLh5w9ZQeip",
  "key13": "5TCwMTqXXva8iie6kUhghKtH5DmJeQAWGdARQbp92kxUT47R5SDxaCZ2VHvixVXQfhqMq89FKxjAxYCrxrAXKRkz",
  "key14": "3cd4HemJiYbkZU5UTADAXS49D48siq8XLWTJ1u114CUxxY9jG2mrGhHDaRifBsjvdmQfR6jyUNj1VnsojD2ejAdA",
  "key15": "3awRbZxikqjQrasNC4BqicpvA247GtN9aXWgb9DBCg5xY9pWxgFeDeuLt1pEX9bdpyehZe3nYQADUMZEXj1VJQU4",
  "key16": "39uraka8SLA7HitXiDAZoFVwerMc5kZcgzokN8TybBrZdm9ChHgokB7P5M3m5y9DxEToLxy1GQSV5KBFJp1ZshUH",
  "key17": "4PAtPvKopKHkLg23o5ypDCUgtot7uFA7GDWN3bbzFJT9egRUP9BjFXBHpJFi98qFCqTZ1A1b8695kNfW8YcX6t2n",
  "key18": "49owGCAK1Dgd3wboWiUkdgmyopo72xG6hV1Yr5EUsJUULWvtTa3WdZeMrBMZc6C38RkX9vtp6dhVYChgHaSc8qJJ",
  "key19": "5f34Nmf5kh6NEHrnAG6Wv5JeC2m6pUVeEwEwn4FdcJuQGuvBzcSzMHGfXiVKh2P6of65SkU6Bw87TCnDG8NEXrKw",
  "key20": "3ELjD4XqkN4fTp1tVNRAZPT5rVHyttuMEDvT63dKwzxAwPm4zS1GqGtMhb6G1KackkNAqfXPW7HFm6eRXXrj3dLp",
  "key21": "aRdF1ucjGZP6KdsE6MRk2u5XV2cqPskvjawP75rGA5J5A2NXZskZXuYJmutZpdJaqXp5oc2D9GhWq4BdHjaCtuc",
  "key22": "2HP86H7QPpdQnCcfECWt99hNTnDjNjNrDSSJYLHQf2GYkcz2NgmQKVNLwJYsW3PCmZ3JneS8K3aeybCjJD7exvZ7",
  "key23": "4Wu8w6CiE969EX3etSbfFC2AZG1MXTqz8FQLWXxdrBmnPp8N6qhyQHVbGMkHPQ3WMo7TuZDEMN8X1hzs3uXDH7a1",
  "key24": "3NRU45cff4uzW3UT62NGffwgzD6aB1EZfPMMoyrQ57UxDFwpwRNBLZ1KnLrT8EeiE3SDDSve9fsQy5mBQ2LkF79n",
  "key25": "3F7PyXz9RiTcV8ERYPZZ2KspJkocMyckHf7m5rhabUmzSW4BWJbvmXqQxKP75WN1TxaB8fMLn4k54AvZiEpyDcM1",
  "key26": "4MYCAzg7AVvcWLYkte5p8P73prNpPM2j5UjRSiUNoBqEvqEkx7sQreiEQvW7ns3wHtbsNwr8c15aA5SkX2G5EvY9",
  "key27": "3N5WddTRtgvbBa6swqSotcRybtxwEj6Z59CF5whH91kKjiJn5fzTUBggj4gjSoz93kGzbbwEHoEiXdq69zDzgDfr",
  "key28": "3U1JVedUQmDiFjGY53u9KPXp9pPk5vSXjnFtT9AbPeHSGgUKEQAEUAT5QhbjZuUGGgb7WZUrNjLuA6gNNQvjFZbh",
  "key29": "Zsym9h5PbsfT3jtHN3CiYrKJ6WrSDSEkb3Eid2nJsevMu19PbULR8uQA82VgANMjhq3duFMeH685WiqnrYK5jDd",
  "key30": "5XCJq3X9MWQdWkJsHFpoaK2aeRScuRBMkXUYWpFfvJu9LAMu47ccxVZqJwKqcdnXbZbuXT6uqSSg2AXJvp6SB5DG",
  "key31": "5AhFXnGFCxVKXBCJAKpskfauwVRRJ7sGvMzko7NhqBpe8NBtmfqWVzVJ55aUtX91j2bp5drkobiiHt6LhWx6TY3f",
  "key32": "29hcBWVryFrNxubrgSKFkQj814PNuNUiBUVF2dV3jTEn6uKeG1QDpvsc4K7ubFqRu4pymHo7zLSriVoC1DjzWFaK",
  "key33": "2cWKFqbMoxVBqaioXL2NjV9A64qTuXfgQF5M7WiFWkZwzcG9boXJtdiquqrfzpXwtSSte3vwB95pfDyAfVCpqWfq",
  "key34": "3b27MVY3sd8VN8Hy2mtgZLCW4QPeb1mZN14U9A31T1CmxF4HPX1KpNmWoeKt3SP5d1Quw4LAoVvm9nSsVNvWLDW3",
  "key35": "3KwqM2VLu57MpC1jMz4qpbxqmMdg4qdGH4vpiPk6C221HdFUakrruMM6K1ma5MYnzT7r3fdyysGtmTncNcMbna9e",
  "key36": "5kD8cPZYAeZ4vj9sxQ9eqM8h3eRH7367Rof1HRJ9KQ5qTUfR1F8755XavS34AkjAAerrkNRDeHZCPyS7Y1xaX28s",
  "key37": "5GshzKz4tnybLgmtpvnZHJNn7T1e5vubs5tPx6Zs51339Fz2LsZB9F5jMycwFRV4uMsWbNJqwbmiVZ8Rrw4UFCJA",
  "key38": "45cC9XFHVbdN5aFGktVHcbv3TyHJqjJwSBBvXaMVJsLVwEC66P4eHbaHEVJ7zcKHxoLjTwhvuFATkFueSswzG4cW",
  "key39": "43zwWp7ckLPFxpw6kPAfWH58skNGhMG5NYU3KWFdRpwDngE2JoTyNSrnmq4QuboAbNL2fAcuVFXfezQnkb5fqigh",
  "key40": "3gL9gvQhuf7MNpvsjJBW9UfLqNwjxFfMZZUnNi3MybJ7zdfNkxA8be3CNV9vgk9RKpjviWoQfL6P2BnpGCrH1qkR",
  "key41": "4A35AjLEXQYGrh1SNjATfBL3FP7P7P899HFMMZrTuuqvE5fTEDbEGvSwsfMkXqFKjt1xgxYaLKtdu9MirtarQLFW",
  "key42": "2PXVVgscMufF5mGnA7vbvz6VJk5QkCfyR49VZujR3HA2i9H3dAUmqj22qRisfLtb1Q3jTZ5DA4h4RFpZ6ehd18ur",
  "key43": "ZkDisfUuDKWDiq3NgpzX2DAWjQ6mj9kVsGJQhcQp28XXoCARaDTtBJ9tBQUzJUFvcGMr1YTcZuYR8Gg7bkKfNEB",
  "key44": "rHuhm5BQgJrLn5yHSTJqr1eGJCbsQ6vvGF2b7fKXZDXcmb4Wyqw1WzhtinfMAUR8KCT7jKjHd5vHt1SwcZiv4Ze",
  "key45": "48yJDTN9qNPCrKr9h4Y4DDDykZtHdJXyULsacSf9Hmh9QgKPPkw55e8uwxbBzVpGmW4HiLVYr99rfMqLE1f7T2NE",
  "key46": "37M78zoU88RdhBq2sYPitPGef4GSHtWQeKEKnqnj2THcL2d4NyXQPMWacsevH3r41Qs6MggDKDHp3KxnQZswFTZP",
  "key47": "3KhuQCFAgTvFMMrQf5T512KLWHrYAK49VBbiXpvEbrBL7ofGcusmuTEJM9DaJt4rFsAvmKH5U8HFzfmMYhte3hLh",
  "key48": "RQRJzEczGfjqbfBV6o5NZgVpKUdBaeqdRyG6LWUEWSjW4N2C7df98tFjApeTk3qby5SqGkmPRtyvWC8pdkYQrMv",
  "key49": "3LZR4tef8U6meiGmosabumd8UFWMqxurnh2h4bE1AUy1z4cxc1tB88c9VG4S2KteoDUWVKTbXhkHD9B85Hu8LsKu"
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
