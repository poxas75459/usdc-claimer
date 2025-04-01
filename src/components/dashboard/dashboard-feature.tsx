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
    "5K9sxxaKv1rikh62Pg71N9RWjWhe7Jg6TpMCaUPd54UUEH91PJQdPXRNA1Uy7u7Ea4SQTFbBE4wh53MksCkR4yok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRoJi1vcJu2HxiX5BxpbU1wig6STtbCFmpZFvbRw7o4NiYiRivWNrUAjoFg6BduXLDGt9iF25Kc65vfRSLhLk8G",
  "key1": "WBkycm6B7Xkn5K7UJzayt9jUThrKq2gCetpL89z5PoUDtMqE4KZJwktrnBE7aNMR9npzWt2nn7GE5MQrry5Kugc",
  "key2": "4zgbbqMhJJm6WsgSDxvsCoBT1Y69QoJFqgwx7cTWvW3ixMvkwjkxfqhnxP5nusbcjPvJypLHaNwrxK51ooaG4sq6",
  "key3": "t5fdmiqCiFcFvm9z3dtTPEBFZuCBQ3QhA5E2GRC99K4RcXyv9RDqGLKiCY5tsUMBV6dH1QMtZK1tXuapR8imPC4",
  "key4": "4zNiFsNVZUeQERo7k7FZBzAQcffJedy7yorMh7HyPq5vGyU8kxN2eoXGCyPTZF2nnP4W883RgMn3JotSPoGieaEU",
  "key5": "XRXSKEE9MMgVrZCVH6Yt1zdp6kEGSoD6sAJnjN2PaL31Wi17RouEAphkwddeUY4L3HAKnmeHEiz4rmu1m7iDEq4",
  "key6": "2LFN1YMAos1Ld7oGJGftvemb1c9kojQVMV7gb5QyBxp4ZT95c8S9fQZrrm6FmDGdDMvDWbAdGikuEBLkvEKc93Bz",
  "key7": "2prCkW9ks3223VXR3W9Pt5Y1fAfmYmr7H652fFbRWv3PKBn3DtwCjA2VN2ZfhKoqPxR67kzPuuFNe5q3L4PFeHcZ",
  "key8": "DBjRHKpXXjGutYWr9GCwDfz2oVJJweuVyraCFfNqKz1cQ9smbnZmrUnPSxEsHKCsn9VBhGYbcwEGvZ1T4HDHgWM",
  "key9": "4Foihz3H83k43rUXMx5VKsTcrtoWWphxLveA2zbR4Ycak7kJTpZTZ9ZWEewq9FGi2Nb3yHqFfZdv4dEq55rSMZdY",
  "key10": "4XsZnAMsJ314sDJKtSaygujiFsQjYE3ydBkdxzrEdN152cWgoaQRnHq3mg259e4muGoNWHbW6HsMaBpUgMnmrrD",
  "key11": "KDPJKsJXp2KmFPhEv927DsidqbY7RctMd1HgPzKJf6EtX3hWgyTuVvmvYSKLoxqtP2JJQtieSTKJEYcbTNSvhRv",
  "key12": "qXAkV4Tw749Hy7Y8w5rhD8BRQ7SxEPVMU6M8kopMrEWQu1eQ2XDtjXBnXm8b3HChLTV1rcjnL9m1Wenk5to1Aa4",
  "key13": "4qFcgAWTKDi2yegEK95gmoty9N1R2oJfWxFcFs6tx82x6PirjbPscwaM6Ce4awHrAbyqhNqWT5iKG2BeRdbuiWct",
  "key14": "245tNHegaDr5U8BnzrMJquak6rP7wGZUnGQfKhSJxWR8QXvXp5bLrjoFQvrQ4MbZKPchdStYT6YPQDWTDGw6S9HU",
  "key15": "5Gp2eSjFyLiEpVcfBEyJhGySsJMTtoSHQriBzjHMTrTxQousbTvFSvXdFBfbo98Y3GM4g2gn6Vv4QgnLwsszXoKG",
  "key16": "5ep2275tghRe4pKQvVUwyL5pY4ChJovuGhvebnmroZuVTTbeE9RX2WEt9GkKdYEEb449ZasyVPBSCLTB3rtB9aZB",
  "key17": "JwqXhWUivhvA9Zd48fdy1UN5GKfcNrAJyRv4MRvkB14nqkKcYSiuHK1Nnimy8kmruqaGbya2s1MffVAkdj2ZHjA",
  "key18": "5e5HjDLW3WRtjvVxP29ZEUNUxH6PYUnjzxrhRVotm2Dekd3PWPcjT3dhtNMLeoAMs9eSpq7fepQvBeHCkTXnMmGM",
  "key19": "2v2MfGyLa9cBSfd9jUp16ZxQnrCS2CiRYkfod3dn6joyUqq65AtGTdXvA3qcBeaEBAcbRxD23aF2ZjGytaarUNpw",
  "key20": "3TaejnKEzPdXKiugJU2ZkMVpNtMufDGswFHztQKqtW4TzX7xWUn92XL8h5RpvU6j4GUJyfNhXJDYXvzhJEL5Eg4U",
  "key21": "3cqBphcZsen43YZgRg4zqSHopNdNe5Qh6rD1SfZLvk5asHkVJEg39CbcgVxgLmLVbbt543ytkEGD9hEGcmdnuHwu",
  "key22": "5jbDSSFYpzV5gQZtuX4m1x9xwNa3NGK4UG1M5hfvKKB4H3CNyvrZTw95u6wJyc7AGLmmgzFrccUH6UcP4f6SkksE",
  "key23": "2yn4Cp9EffcD6FnvRLvfuHowXU3SrgTPUR9whQPJpEtiQMDU69LXW3V3FiPrctUZbaz95o1Zy5g69Teju88dYzZ",
  "key24": "CFDVe8atqUezzxuQeS2PTCTKWLLUMbQAqUDjbxLE1drXkCUHVMbupFCZA6KRtGUpma9CuJcytgaDw1CuYohyrmQ",
  "key25": "5kmbtMVYVifudyGmC3AzvUPDCWU8qLFGw8zDMiiDqShLCeeFPNXKnBVPgTQ8nxbL6DFZniXMEa59c5H2H1q3G9nK",
  "key26": "34wS1YZprqP3zL4Y5Se3ui9BV4uPiHpy4aCLbD1DwTVrjqvAp1Xbah3NjNdnxergcHeRA27NepJCvqY8jhUXXbsA",
  "key27": "3wSAwMvTKyVLuBWa3souExLMXpvcKJQP7BXGRuz4uY4aXdbYcRRWmJyvLteYnePHD9fpuHR9PT6fbxf6SCPHUuWw",
  "key28": "3y8yCMR2HSGNsE4ToHvzo86UfpF5biUe5wro1bwR1KuETVVEkbocTfaUY2ZTTXhq24W5NVneYCJ3eznfVjEha927",
  "key29": "22sjsHQUHTv7ZNJUvCb8nAZswEsajG7WVvzuURbVLHpbxRq3Er6qERGDGJRGpweUXu5Si2RZRaf6wxbzmCUy8x4L",
  "key30": "39wTV4FRfBA4NTzqLzAViPSQiZ1XLvCAcsWsTzT5rvyMoNvAoumnMpBQkKoHp8VVmpWWjV9DmNpToscmij9HTWFo",
  "key31": "3hyrjZsHdziJPerezkcfJknip5WgJxfsRFXnFQd2FvdrhHUycx9bZnUQDdv3Bxb4M6N9Nwwts3XuATzAAVBH5Tm9",
  "key32": "5ApUwEDRN3urscioqdx46CuuJvMLvu5UNRhmJKLkXw853LDoj7HauJ5F8epRa5anCAomLno7ZFVRVq3T9LjaNx1m",
  "key33": "3qokxsQTzm6xojmUeebjtpw6XvbDaXKWLzqQpcY7TcVi2RNtqbMPXv18aQdQMohSmqRatW6WZVWWsVA2d9kngf8g",
  "key34": "58zmx22ve4Ue9YAc9s6xhihzxjLsGdyebnQojqaaLYfq7Ua9tCcLBUJDXHAtnu6USwePEGQtUK6VY21jXPhvnfFf",
  "key35": "59UcGB264CkPTcaed8hfZMbYGrzSQHTTb1NTuQXv4PqEBbkALEH7JK2kkEZ2QnajJ8Wj9BbaN33kLxosCMnBJFPa",
  "key36": "2tHrt94sKXCFTKmDN5axf5Et8tBpNukfjYyCcWXiikqTgXYrxpTbMcRH4h3FXW61uGaRFUqF9xT1QdjA4PV1AboQ",
  "key37": "vouo5nJvBdwVS9RtcX4fKUW6AAb9LmjSagDFsh1eLtabrxrtnMER5RmnEKABFC4qaFJ3XTq9MHnARu3XANfvxFQ",
  "key38": "ZdP6RapyAcEV53M2Z3rz6RTBq4XK9rgMbk5zS7zCgsyx384pFrj1cmTcnR2bsYS7AkH3KnkjYFCC4MDtSRkJ2Jv",
  "key39": "2pkHhYWJE4YvPUrrspMzQAfA3GHSnYJNobDZ2EYjvt92Lm7RZMJfKJMeV7Jqtf1KdCzJGyZgjEZZtUQYJ2PH9aHH",
  "key40": "2h2S1c3VHarqWMgpcmLQWFox5WqVsYaqnVWuKBA6eisrioUQqCkCwKt4xpPxEygEAkYFAjWHhNugYgV7QLkqwVZ",
  "key41": "292qVfh14M9sk7mq6mbUPd361sYMbnXZ3VM5sotw1CdJrKn3fZDL6TE3W3ZGPFxT4K5DmikcpJXMekYeDFRJ9Ffg",
  "key42": "5qESxyXQf2GmcnfXorwUjtvzRUvfBZDxBapk1tYJi6NZqzC4k5XkFJ1N7EDA2rmHLiBqge8cMjaAZMtYkzw2wn4h",
  "key43": "64a7d3HG4eD12nvBKg359ZebHNxbzhaBHVejEV5YAZJyR1WSWMpVtyNrDn2m9wW1yP19krc8GkcbwhVbHWHeuDb1",
  "key44": "21bic7JAaKh2Ugc3oBbmkHev959L7YWd46XXWmKbKuz757h7GscovdystgVPqiHDp2zutR1jyjMnQe9ZVNxmkt2X",
  "key45": "5U9ELNKYBzGgcxZDAvhPpBMeNvCeBkHscKJ956gj4DcFMrdoQKwqjDxLJ1HvHiPctYD85gtk8Wxxp6pEVV4E9huN",
  "key46": "4bveFBXFiQ8A2TCVM6VRt77c6FvgcMKfHJhaobafDUP7aSnHgmPHJVE4eHsb5JP9nvRFr1JY5QdUW3C4WdFK7JU5",
  "key47": "hB5JAZFqkFGxAqURupGX26LjfUeGmGY5PmfAAbhfwzfcCh3crENwfcNkaZHfFa7Lx8VwyoZccz2PCqwEgwQ9tU7",
  "key48": "D9w2Af5wXJ78uYNJiiJg2QdK6RCyUBxXZibatW5r3UpjhF2pAswsxJYJChzfh667xFdqnJAsCJw74XBjZLcy2Tp",
  "key49": "2kFZuHqgUYC3nWEikHCtTute6JFHVZquPC9NB5L8n49HKmSxBwcFSu4d9WSggouyCvNscjN1mbcBVwoANFh9tNZh"
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
