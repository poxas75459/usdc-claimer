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
    "24B8DmFiw3TWkdSqqg6LWePEs71oAxh4Ld3TXBkX2ANoknPsE7hycVbwsCjMboD6EaDwi94YzrEoBF8h9mmvdje1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHP98aLthiz7oAJoNHfiHEUYfSMyvGUdZymw8XwPrs5b1eKxuDBPKCyUUX6ztM6unhDBfZnQxvBnvhaLTCRPCJK",
  "key1": "3UovoXhAev62vmoQhZGf3PsY9BbV3XdukVcWnRcd5tVATq8vd8tZAJAhok6qo2hZQbuLf4nPsQ6ase2jN3f4J7qa",
  "key2": "5crq3AjrkXD3PzfcQiW89Rdbuz6iHzxq3JSqJXR4HC9habRUz7hQmgykTe9LZZr88iwHCRVXqKpMcBCeub1YA347",
  "key3": "3CL1BrWgXUeA3qbN7RyNK4xT5WR4U6qnnsG5qj8HchiM6Pe2FzZrc9JK9MgGcHt6CVydg6DTK3cDnai1XK6wNZnR",
  "key4": "5dAGY23RhmU1GVZgkfhASXhSabSLLCrVRFzDBCidJzXD7wwjPhqgMQabdCE2wUrDJbYj814XHvVGDUQJFa43C9au",
  "key5": "3KgoTQPZrRernT1nfLbwwi1BGpdzK5xATMrn3sVNj76ZjKyfAYvyHrFn3nQgnkBkRJxVN1bYQNCT5RccrE8cgdLv",
  "key6": "2GdVP5indwiVUjjy9oTG5PzFMPWDT4jV63uSPwx2xQyeN8tuMjP6e7spgiazZYZuehfvVjq5BRfbCyH32YsQ1vup",
  "key7": "4gpG4a49EdsGtqSFgrnUMoKSSmEo4vfhBZNSdGZWJALrKNaPyyabYYx4dZSj758Jsh7sTpxXbBngFgoZh29f9GbV",
  "key8": "2sf3EwtE57K9hcgYNFxTH5W7qTA4UwThaH8zBkddejeUH6qthvokPBPyHZt3csjpwX2Z5RpDjWb4xTCsw54afwYh",
  "key9": "2raZNVztC6KNnmMgyQLzt24z6Z7MAsAGUb1TZiLMEpU2TdwpcZCK5JRfXuGLXeMjzEL1srcFFKyU62LzzrRJepgY",
  "key10": "53HYPQUvzGCMRYb3NnuBhYKGHQqZh63HuYpFKThfCWt2cCwLdC4pG6SYGnBkVHtiJgLGy3iJfGBE9RkmC4eMnmo1",
  "key11": "3XnoFWpCpg69VSGb3tH8wrNWhvbJU4Gggi8RbAkE1UVmSn9dqiZBKkDQdDg5E3xzNybxByApMpLyZGQ13HvJLybu",
  "key12": "4JaGbupGECXKvcY9wT3gVAFFtNTEHgtKgcXGpXDW1tY2F4P2srsdGYgZsVsDjGnYBPRYSfGs7zSfi8oaNaPDqTow",
  "key13": "5bLpiLah3csAGzgLpvEHhVGmDYUQwvx8hABYrudfu45sFPgZqsdg12Lu97Qr2wuhxgK2E6MfKJESsgYPRS1ENd4w",
  "key14": "5zQzcxquoTZcDLZmoBvZ8oQXGfLRHbCfKBERoke6hHfVRzXCWJqPoBjBTXnjHHXonbtKvvjNbF4KT1yqSLHPMWv2",
  "key15": "286cM4fFLXSxSbkXxhHyzKpgmTusvQuPdMtHvx54B4zoJEiDBkHByQ6UkkqvcMbvKk8BkrNca4bu3odVF67idGQ5",
  "key16": "2AvK7zsGWgJvVeyJLLvs4SRF5YwtHFf3NNs5vKTpd7JNNMLtKLGFNQiLhYg5NTpAZU8auraYsYiyee4TK2Qbj4oR",
  "key17": "2EEBdZEecRYnj43YtQiPQX7XBLMqUVpNaXwgEME5tnsGQ8EhHKkRAGPbK3ysDGjgRatUPqCrTBH5zZHLXNFmjb1S",
  "key18": "3dBtCNs7jXz152MZCDA4Lbtbi28G6zjgu2UBNj9rL7f5FLVUMh7dMJ3DyLLx4g5rr1qwPc7wMusRLWU1rSxHw2bf",
  "key19": "5wQ56dDzcT1quuNmzRroyiEpW3etfgtE7cdJxuw99ED3gLAqpgXe9uRLez6fXDt6PGCGyvwK3dNgEcJf5wNiVYEA",
  "key20": "Ku2uQuuLnEfduUTS3gP3hw3YSMVuazfMQusfWBp7zxaqoW1UWyD63vXKdYMPMK6QpgobwWeXPL26viEwwuP88bR",
  "key21": "3Dm5GeBSfwhF6TecMrJrco6vA6qyPN3ou9u8ubBP99E8PdxmTwCXcoXQv7bWgG19e7TkBiUgjU4i6V1nitqL8sHc",
  "key22": "4sfouhb3JAC81wc62KdEeYaXuWPbCxodZbuJTZxFE3hpPhXoMD8nbiWAxVKZhungzdf684n4eCQvjbG5yYTNfbK7",
  "key23": "5vvYAyAYPNZ7wudkUsfTtt2GZsyJH8TsmSTDJ95yisp7D2YqyZJAV9cevkqDr9oZomSjAHMLchJtUXbnSqQrzKRT",
  "key24": "5PCiyRE9JZmBiQ4HvEC2xS8RRVWV7NCfGPntsof2ZUEPjbU2bqfFeek7duzmCYrtu9y4N45dSkobxPDE2Hp3qvoT",
  "key25": "4gxH7811X2SX3vn8WywdjtMKyyEKo1nD9vWVNdqXTiLTg12yyZ87LyayQogyToQKdLTNnLdQSKZ2PJ4xuAYFT6Y2",
  "key26": "5Bbo9AAj8inPDRhhZQfT1bBiGLG2Xf9mhXK4dLpnch5NdR5bJUbEB6fXsWvSsBo21YvLeSeFLJMzAVqJfguPRaSs",
  "key27": "3AXpaA1QWfc3mL7Xeo1ooXATg78aFG1WwJgVEkHbDFWNQ4h5CmtWkStWeJSyhJmEEaWtjaYR5GH5JFMnAZB27QNm",
  "key28": "3UTVMCcN54u8vAx69fJEN6n7Cmx424WZwRjeBo27nat52qPEWUxNDHffPpDUpWabKFGAGnT9ZfZcY6b4TtGtuthD",
  "key29": "aaXPB1DCuDgwvwuuT8QyXHDh1fPehdgcyER7QNrthvzbsxRssdJw1fjQ8H9rsWcuRoZbwN9TFNbghsNG1aLAJ8g",
  "key30": "472wqAW3MDdxNKn5GSWL3oh7yDVLcphNLZq9DhXkkkpm4sRDS4DhZTNcBVudGnCkeRQ5zQZ4aQaP1bpDva8zkZ9v",
  "key31": "4AuMyrLRMsn4Cvw5Nr9Dv4Q8JnQzGtNhMbmzTGsxtxhHha7N3yk2p35daP1w55VwqSak41DC3PUU9k9NVkERj4VX",
  "key32": "3BSXv26gGPCyM3Pbd3oUzR3oFWVWyipfbUpzDo1m9RYXeSFDXz54CDRyrvpREMMTekhRAjLqNMhP52nMPTWFaYog",
  "key33": "KAehJtPrWzRSnjdjrgzVLfq1Sib62nwhRQ2f97E7DsSE5QAHHNamhX8dvgg5FUauxQSeVAkuFpvD8hHbgkk2KMK"
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
