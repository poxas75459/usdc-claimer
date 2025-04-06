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
    "5PYnviisB1wwN4N5WxV6uc8NFvS8wQnqK6ZAxZWDBJrypvsyUdibZPzHCzkEeSPzmkztwbCbnvn5cy3iBRRwAmwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjygTAh6ZxVQDfewQdBjef7PsJGFQXhqH2zNfEDGbt4CVkBe234QG1skGEAjowFVS87eUv8dBhC2mF2Y4U1kbiy",
  "key1": "2SZDjVFKG6d3mXbAfQFMzA1BSdXzrKCQQhBxRWQnPicTgHSB678roESpQM8L7kMK9rD5UkyRHTeHhenej8QJ6n3v",
  "key2": "4DXavmuUudj9vZBZbUyUzCpmT8gea8vjM21WYFyFonobfHRfwKSBUcU84v4zKEJavqNkdCWyB2E3HrqRFrRjhDTK",
  "key3": "3G8fBssc5kXVnCjmewng1LrarAp1L2CJtcdgyQHQ2pfesbU1DDLjjAoNT8US7Q7yQ96q6Y618c5GtUY146SrNDtg",
  "key4": "3xEQUfVMarUvijrBEHKQNKM4QEJg84YcWQmK4DRsYvz8KfJ15rQNHGs4G2SQ6U5qHg9keTdSi3qsTSLnYre5K7fi",
  "key5": "37Ypoiywg6oQ2jXYyaD8C6GcXWmG4PWJNndBBvq7hB7qXVhmHiqRfw3R6MAEcMerocZ6p6mk3c4dCzpiJEFMWsDn",
  "key6": "4VoM4iN5DzZWgRfBzjmXzH3pd1kHo7rGCmjcNSbYD2Fj3fnpGsQraFawBZEetPjvmD3mSYUwFJfRhHL7Ph2PnQkz",
  "key7": "4fHLqbwZRVWixUCQeBVVeNjaCXuLZ4Wc1jBqAbQjSMX7yoxRWFD7xh1PPKTh547naUG8ZMTVL9GWPxtYgTyLQE8G",
  "key8": "5fuhQMGNtyvzE6psUUWQb57QQfzSn9emEhPxKqVWcTZ7aDBWHrqkE6KPJ6tF6cgx4ZqgV4KnqjJMLYJX8T6NLpoG",
  "key9": "5mhD9k9oH5e6KJQFP75TQE7dbjX7apT3kZv8zFV6x4wmW2GYS1imPHdeKDdkmKJZ8KhG9t1heT9tcaVF2gHzZvhB",
  "key10": "3CMw37gKFgGaLHNeGycvZGLrFrZV5dhiggcbKSVXoWpnkBWHvCJYu4VH52PodscCZQ7iR6ou1cp5zVd7xwSwYJhm",
  "key11": "3zRTJBjnULzEpwKcRtZuWWrocoFUynNELv4hi6nb7viAF4vA2MCuXFx8MMUXjykxbNQRPvUmS5o4s2qsRjRdLeGz",
  "key12": "8ahtJp343M8iP5s98qeCQJEqbsJTE8Q3tx7agtkBMzmNkG7dE8CtQ36LGAMYEXY5aXkVaLLyezA5DY5su4PFRxf",
  "key13": "4vfwX1LNjTUjxgVt2iccc1DDCWmEWH9xFrnqywbhgmKZrQiE8bPm1Q3Ny9rM5niFzYC8g2Y4rDoJS8L617pdGk2k",
  "key14": "Ab4KvWriDJBiGYNMT8Vuk4AUk8nEEjo7BaDy4pNCfwQSMTweuiRzcEAQLMUrPi5AUNY27otnr4eu9T1ytHLbZqT",
  "key15": "2xse2FBGUEy6twjtacBKH7QR9HsuQtHZPZxDp1ZS9xMjqc2fGZcjFEeZEQb1vALz6KNaaWioEN5VoeraeEVrpvxB",
  "key16": "3zmsivtx3pq4pD7qZsDNbZZDeNcE1qG3ygyuFxxRNbXcZsXa1K3LzfEfzomZ6wora6hfzvbaCgnQrqKC1gxVugmB",
  "key17": "3TrZQS2xi7F51ZBRP99bjVSeMu5KFwLXvsc4gK4csdaemd277dFQRkN552Qbox2A2zjFKxrWUDpCd8C8Jr4oByvH",
  "key18": "5sE7JFqXQ5rTYGcVGDsDsatnC3TeVVobmaZGyRtewo99tWEefRTZ3cvi6vWBquX6ni6eQSt9qkgYqt874K9TN74i",
  "key19": "3pTYKZkEqmeGJriJDmb5HavS8L2SEU5wLePfqC8V2ZAxc38PJraLm7imBDecb7xVxV4JHLtXaXNHz1zA6QFFciWJ",
  "key20": "B27EieymsrGDdSq6CXRF7d9fAqFcT9hneV2pNEcPTBVmNbTwjZ1HevSwG53NZAvZGr2MN3hLaEBYvQ5MYMD2jSM",
  "key21": "2dpDkZjxmsED5c45d1oa2ejSuWFavYwdcSofs9DNtnxQZK2RHAs8ZKuA8MEnjCE5hn5XKu71FHaqfDoZUaZ9ojMn",
  "key22": "2fUS8Ae3vmVZyqrTrPY8ufjp6SHxMwNMufN82PEQPbu8VtzGX2TUE42sPnVE8nW1qSt7uZtXmaAvQsuwkerXhyMp",
  "key23": "3Wsxo8B1j6XUT5sb8kTXXisNmU8gKUB62orQhBEseM9xqJGz22A5zD1D1w47wiEU6ERfxHadau8JFxzsYariCUXh",
  "key24": "YrK4hsWa6w9zv9y3JyrTRVn7cPm5qByutrUFMQEvDeoUT6Chg3B847pjR9MrPSzYdWfDnvPXkvcsfLEkvQZqBeG",
  "key25": "5Pwmj6LYRLd4d7p9KDL62iiFd4Jtya2bC6FeXFSavsTUCQr6afVnkqXBU47iFUikMQXgR1Rmzv1ud9RL187cugNs",
  "key26": "5xSj76GUWRjuVfTbMQ1jvQSY7dSiPbm4fHLyamPibmGWUrN1WMKZRDnA8oCt8tgHTifMhLM6rLe6k6DRB4XJyWyX",
  "key27": "5NUBwApKomwPccQgor8GG4MAWZyQhHWGmsBPFPZeiGiJMCnsooRRrg1znjNjCW7rJk83ju7vG8JscUxP55nQq98S",
  "key28": "bS4FFm2PUFMHZAp2BvEFcFAcV5HhfiwW6pxZ4NVzzE2bJYTHoqMCCELPwxAa7oXzGpumfLoXFYsKuJxa7nrM4A3",
  "key29": "62eHR47nfPZtZa6w5Prq1HRyTCjSY6DowkRytFkFBNZKb3Km4qRBExezEgkQaFPFML6kGP6EywGsixV3RLtKYHRm",
  "key30": "4GDRemKYdUpm6KmHSeSj19PmkbbYCf8xaHXZUVfYAuJ1HXS2a2HJeywoAK1BE6jnAekHMhYTHp2UpGr7Tk5rw8Kc",
  "key31": "5RUvVU3yoWFWxc4mw37JnxCfakdJmme5Bt4owE1hJSd5j1D8Zok9xM64YkdC1qGHPU7A77aJfhhN5CAkpoYobDJd",
  "key32": "2zLuLSMw2eqwPjcipj8F5aYETFnVBjB6xhibQiokf8A9Yn7CYn5nwQSA65fAN5N1qDFMuP8DiCmuaDZGymnQewq2",
  "key33": "4axSAgRjzCrsYCrcSocY2Ddc4aG31gHUGXRY7ELP1FWFtCnJKV6rLj84MU6g2sambHtAaV5d6LoT8mqTX46LHZsm",
  "key34": "3Fsbm8VUQnWxtt3wKEpvJaMZrQymbSigPox7aACvTNih9zUXxLukujdfz3cF3ZkjxVoyvkCeBvdC2oo3KmwFyuYP",
  "key35": "n56NcKA3eda4wH4Nk6b3QiHG23jgMviX86pXwRoSoLSNsyRJ8pe6bpX3CFRBBn3LDnzbyaSKg3yG2qjMAer24xD",
  "key36": "azGUfCKfPK9ufoePteoGEQDvDGTi9KNzQUeAD8AivFxKRje9SVj9VT3NUZgNQNT4H8uYn6TgJi8355BacGDL2jj",
  "key37": "56N8bUko2dAVd25n5z6YHavUEk6jHAx4bdJGC17HNRh94WGzftPxLjq8VLY5zpMSUats3fEAK7d1abJSkV7ts4Yg",
  "key38": "wQUh9SDtvDWEaXtWuzcnCTy5tDNroQB42dHCeygKvBjHxQmMvz9XiDCVYV5ZZmY9sahUpGLonbYviuu87b1XoxT",
  "key39": "2KNbhzAFD2zhaohUfbYyEXofWUbAzzAKkfrdasonLuNs8WnhEwUMYtQ8x6MezHhCyMMYe7VzUJ5QtTvUKFMLJQdY"
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
