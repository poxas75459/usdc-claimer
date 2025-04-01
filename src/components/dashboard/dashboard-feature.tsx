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
    "3Ur567Ko2cEh6WLsyDBcgBNcNWD3esrEjP1wSMFeGUrEFHkvSDEXUVeAg6ZJuH2J9sMJR5DfcQrWUckjPzAqaSTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCpU4RczJ1EhiYwMgQoQi1u69BapjbVLiZCirmpARgrnXiGh4fJ6LzTNxx9XbLG6EYBAfV5PLni5Q9zzyXJqvDn",
  "key1": "26bzAn8qihEDDRAhsNamQ5wEF3P7Ms8ogGAgNneFDAwBjbWd9t9Td3NmBfLZ3ReB1cuouaHwDo4SzKYQqy2Kxd1v",
  "key2": "4zSLKQDHimyBeuMYU4xfnMSPGyNHgGepfqWqd7eRzg2vCeRotMjjf1QJ3C3VndP7oTYQaGZqg77jPLCXcHn7apZL",
  "key3": "4DgiVVESdBTk3dddFBBKwzyZrcSsfXAjvGEeRZTjeLg3Qhwp7EonJDHBT8qjvqD42iAAQLdo2SJacBHne93ioYfE",
  "key4": "4ZvgjoQ9swgJE8gH3fm98g4Zh8fByVnKvV7rTG8tQvtTQn7WQkqcrj63sEQ9nXiWkeLX41M1uGk8mdeK8N5KUc19",
  "key5": "29dJZAwxAxroXCxYyKidApLYaNrRk85hVF62rRzFdwpiuXpsDYN6qowsMmxb7B7BCjr9cCEZyJE4AR68HFtGhFBn",
  "key6": "2i11ZskHoL8zFn3MKAhvPgFa7V9hrL7vEoswQmzBzLpNtLZPVG7cm6mUjZicJXoNXzrb9u4fvm4suT2k7mRMDQXR",
  "key7": "28tdFAqzzUdYe3zSVcGcd6Qu3p2td9UDK8SQyjvoFqxDnbqpyzLMsBYtpqiodmd6F4LBefouyqwGnF8eSNMDUDaz",
  "key8": "3Tbk32hLK6Mkv9CvUTmfwm3gQ5DXKsQDBPKLLKQc3jqN4PgBP9xrq2TfDddhvDBH26tKZ4ofiEJQAVBgAmkdvRua",
  "key9": "UUxiFtMu2wafCbdcZn4wJESyZsziWJNjFpecDsgBUJ3xHh6U8TCLgmE9iU1P8DBafS4XYDGGNjpG7fh2dtM7htg",
  "key10": "3MLXqa58xhJN8KVF1rhqEYokAig6xKYFc8vCUFpcS2thUBWDqKVG1tddRxz7gpuw4YgCBng4pq6uLfzYm1xjSpgV",
  "key11": "5if1oon7YUM6f4SArK3mkVjJC69L2B7qygboxWsWhRqiLoSpJo6mq4HWvaUBNNNfYKnzLMRFtbPVa1nuRVFSDoPT",
  "key12": "5n3unWaPB9sA5Dtt21LvJnURtzPTK9WFjH1rxMjXPs8wAV6E5PWVqiPYhY214eAvegPJmCJvsigqeknRA8BXGL7o",
  "key13": "4vWb5REzjhyDzfTve21tp2R5bc5j1KV3bLSnSkjT6eTMVsKnSBRCiPwmPniVxos1SD9SXUyHSGChMvwDerJes2K5",
  "key14": "5RKucahJU2cQrN2f7aHeqKdmoWP21P5ujkvzVFSazvqo8z7YReip7qyQvamFJGFAJovyNmRYzHzk8JpdqBDNRogx",
  "key15": "ws1NwghP6YLfhWzH671BExYhB3SAWjeT6rRifMyhuuzkQCHcr6BZfQupeUJYoqNhh3izLBGngtrrTaHAcbwoPk1",
  "key16": "3DkjD3hLShhr3g6JDsxN2y5Dp5zWdL4oyN3UX6wCYDKMr61SoHxVbNmRjPemYzoyzrQyd42VMT19SPDL5Y7nVKFz",
  "key17": "3gf4u8viJTuZBnJ3buFCcaGBjhv7D9vGbxPff4cJXjeX1koNHY45utFCobLu8LcWa6cJRzQh4VE5b7kVXt6ubQwj",
  "key18": "3eabpyJ9VjKcLyQjyQk83YG3yZgn8cd48pVeb3TZiruDjy4JfZ5HL4hkwS8qWKgcT385qJA3PwsGmeRfhDx1hQBz",
  "key19": "3UjX78rTcjEwz5ErTfrJSnaGiyKZJF7xYUBq9EDd5VzXdYkBNyaAbuHpgXgRsdSu4yhYxQHrmujsvT1Ro5KuHzaP",
  "key20": "4GwNLSP8moA3vpAPPTXxWGwV4UXCvj3qnx7UyEEnAyHBShdQXDijwS7ZoKKqtJ266QFp8QuS1vNpqXjGxih3TCqx",
  "key21": "5rtMeVNTVjNeutCYcbrtmFTvdSe1qk7F4m95XEMV3GHYeViSLnvbSwoHt55ovsvdC1SkvpWsV4RbL4yXbyzYhdcu",
  "key22": "4PYDDbKjswScRryw3mgUbohko1eGCVijWoomWUTvEzmQUS4jEPFraG2Ub2p7J15awG4cveKgqqkDdQF1FXe3ymp6",
  "key23": "3epjkfByNAwBg864bBmZiTKVFGmWbLxGqqGiYGThZCgSzCh2vsaAzJvrkBQfauxhpnencQHhtXr5schE32hFh51n",
  "key24": "2xjpbfJULmZVqDpEFWAAS82JRsGoygyxfvQvuYzwmqnNvGSEd8Z8qsMUPdr26xNzMM8fahTChLNMt9SZtFmT2UkW"
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
