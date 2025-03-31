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
    "41vTVkVQBDusCF43B36D78VQvkz55gQyxfQEMxG3ibAATU9sW3AzrJhQEPM91EcFXGLKj71gASNpJnhkDRnMToWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573Kpfw8cKZdqP3KvfeyYcgNjQHJ6sSvubFQBRXzcLFRKsW5CWZbfX9rFy2VyZS6GxPSLyEN2GebB4DYooSnEgqA",
  "key1": "3BhrVzd2YmkWoQ6UWqf6Z2hZvr1WYv98RLf5seve7ZvEP2UWCqrdMYUL8t7JQLSwrwremuD3NU76DLCUbSVTPHJm",
  "key2": "2yRHvv9JDhiT7CquKqcTDnvqkLEHKanwT8u1c8xNkAoR5FJMASLwxaDoiqi5KfCy5zxWd2Eu45CGicab7jRVUnCb",
  "key3": "5NTpBNqQidN8qE4BzgjDYN4ZUKnJHNFYv8bQfUPR7jJWJ8BEVFXARQgy3e8v9EzBUciAfzXVPgjpK22mQ2wFW4UX",
  "key4": "37L3i98FvriqBFa8gkRSzMCfY2avTd3nm5UTghs8Mvtcx9yCFWcv6rKUB2zXCD8S7GHYkXUx957raGZL33Umst7g",
  "key5": "6UTj8wiEwqmjLim6QqrMvB3g5rqLhTAfutes1GBtUHwYgjUQsuGJYFKfKQaEsPmoCQMLsKcbdn5ux9WEocoZvC1",
  "key6": "2pjmCrHRVNKvo9cvN9H1udjMxfcr89LPdGVEcqNJRm7gY1HUHsHD3ZbtpYqxuCQ6dDggM2KBTJmSUPoc31n9fpSv",
  "key7": "3A4AeQ64318nTibZFJAWazdZFuRLZLy5aNEfXt3J8GrZ4V9StDpw5WPqw5YCTwNCjzkffMwrCfDdxWMA5djFdpuJ",
  "key8": "2gQMwBeKdniNTSpzLWjrdqrMJfbox37iHGYrLyx4jf49UVoqFEDVQDJnHwEX91JcJ7zjF84r3vf5CHja1ny1tBq5",
  "key9": "3KEqwkBdZvs89K8YWAbZbXNAqyYsatiRQ6MkWtw79h9YANhw3tbVJ5dt8FXp3Kzvhmo9Ugixq6VHPsuSFGJBQzaY",
  "key10": "5rfhK88ujBuCAHRcjxquduvAG4naWJFZSpbc56uGrzsGW9EKvV8RsT5K3HU45Kq3m9Dcabj8LMHSArr67ZRMRTYB",
  "key11": "5kxt2ATjp2QK1sDpuDhueas21U17tNB2V9cHqRNjAEEzfdA7zGc84CK4hF5uVVZStAq8Q6t32kXf8qnKZmgCq2uJ",
  "key12": "4HPVZnrfwcy4K1xUUbL3Ea43GY4eJ4dBMsvBkjhpJSNvLfozCat5eKVzmcd4TPyoBrw83FinmGWSzPed7DLgmFGU",
  "key13": "5aP7xLwhMc2KWzeUfzFC9KcP2DSQvKCGfDhQtBFqtR3w2dBsQSySCDSigHrGy3HV9TH9VVC56kJmAMNcV5y6DaoJ",
  "key14": "5GSCdgKhnh6KrtDVpS5w4RKJwBe1jz4J1QS2upcdzHFJ9MfqSK2sUKWEREHRSGZFbsuj4Ba3RXVuf6H9HjWVV1T8",
  "key15": "3MCbxvoBi6PixJnhBe6hBZEbVkRjyPLbkaPXmfgPjmaBym6qXz5MHags98Vk2Bx6w8h1duXtUr46eFzR2i7AcMJy",
  "key16": "4jhYYnZXmE2NVtakogLmqB97tqUxUzu7aaMdLb5nXLrhT1MupELu4m7Z7u1druuY3e2wyAbCSf1yyZiE4y2dRt3i",
  "key17": "3rhP9MBZvBpdNADjNXLfgksPVwMSx1FuJeCLX3hcN4Z8kck83gEZThAwTNYcVwVemWWhzXW1PTZGAhhsRvrA6Ln3",
  "key18": "2UPwHfkVzp7yM8gUt9iufSkpmA8556zPaR18wxJuBTwBHthVpjaLTwtRNx6gCcDmb5pz4X5Z9JuW638WgKd422bJ",
  "key19": "3fyF6PRjxUS9AKoMrFvgMPwbvPo2FgXpHe728vYxv9Nbc8gmQPWKNjhU628j816DQRmpWovr8pSTiTTChBexxaEy",
  "key20": "59pcTDXTg7qbcQs6PLkszG4StTh65rG6gjHPnshyjLoAmzEVJphVGdr4T2A42s3iT1cUA8zvszwEdyi48jmq4t8y",
  "key21": "66r8Ki4KHQA9nMiq2nGgrJovhSZmYeNXyCmjqd69JUYWwMz4WSmfsb7RNqNAQm3wo44kNXkwhfAvW1Y7uBfnjhGs",
  "key22": "28U6tCq9ya5yjK8ArVco8h3qDwCRAzhS5Bth9m6NMTGod2aA6JJGTjdfrUF93HfmVu6mnr1dA7aa4F8ZfYm6jML5",
  "key23": "3xhi3VGk6EqwJgSWfbwTe3Bzvjmiutxe15RPZ2MgWc6fwDrrSwaaNxr9UFnoWgCW8VBMNCRTRtKJRQoGqBqBpnXC",
  "key24": "CdcwpYCYhmcwA41JnbWC64v9Ja2qrXLXYnYzyGCd8zTdGgHeGXxwbGMixX393WGeFj6zcgsmrjxgbauryVUujGE",
  "key25": "2oojGeg7DWBS1WwUfNCZjFAi9jV8QEVrvxb85rNZJzV8EQazBPnJFXchK4ZTztT5Lxvk41gmKufTznVbh68n5cRn",
  "key26": "55LrqrLUGPiWbwhetiM1PaqjfaANJLmy74nn3fjTwRhikkVfzY8WrowRkquhncUtnanjvNwGEBwT8NYAJMQhqARE",
  "key27": "2quCkUbaA9sM2BZeADTZV4xesrriLxoxAXg5JZEghWMHzdXwbDTjDJE7cPLhDgWvHqghTETfE4qzTbYAiGcrteqN",
  "key28": "2yD9B5TJAHsKkPZT7eZga2xtKP9w1PiK6DdspiEkKRRhuUrMXDKAwBNQ7hCQayrduvgZz5wNAGYNgMQYbt7TtTMf",
  "key29": "343DcYKYZCyJFByWBzpGB3mLQaCLg6Euv4dbsWPjJAmt16yoAGuPhSvkPjQcp21GiJ4ikKQFKwPFUvdKBoMCXEvP",
  "key30": "2gCrx2JEAT1vK5axo7gF227hQeF4ef2JFmcWMybNcwGMuVd3uARBWiCNjeiiMZQBpXYLJDRmxtdxcrjHcz9WBQes",
  "key31": "5GagumBVzekQSB5cevt3SvXfTUsnBYRfvfPMqU1zP3i34hceN8Cvfr4oPi2Bmb3wAiyT3mjC7Dg8iQ2AHD95dJGH",
  "key32": "4coGA3NXd4Gf7mBZLeL6xTP79wNQVNQcB4sNfpX63sTKbArzpNFnRBESz63PCRkxUyVLDCMVx4cDkeGXBtXMghZX",
  "key33": "4Q946TxyAHBnXCp1TmqnU6q5LDaYUMcTjaF73FhtbGe4G65jg9JQQjANEpoqJQhTCGsSJrKWdYHhWkUkuSAbFvif",
  "key34": "5FiK39ZnsPCHQPQMZBekcrmeJ3z3FVE2tFtKxN7bkEnAwnvgNYAy8eD89n9LzxHCWAKycoX9BCJQsSaSMVn1kU4Q",
  "key35": "3P25xJnrnzJUhqNCTxNMP5yUprijibM6NMxieGJxCsRACgJrwJT6vTaQUJq3ZQHUFdvcP3wGPrkQ4voNs118vnET",
  "key36": "2Xa8ZWUDYbP1R3DGtuEgLftAaBpa7kLBGobPKhuofqdUv7Tqz8f9U2ynBifz45ajSzEe5REeJfBFzxEEzuAgYqUU",
  "key37": "46d3P1ox9Gqz5YRZchzhzyxmW6woLo4wfTrxoVabxabZBhsAHb64z17sVgiT1hhGq7koDpwUU8xogJNnt1shhhZx",
  "key38": "66SjYbzEqE5RiTPxjJ8eCUThBEoX3gqAVAiD3yfzUgniB7Sq2eXUPryDPkKAqQSb1q3oqiMQJTzxoY5TvLzNMCdf",
  "key39": "CeY9q41c3PYbd2Pv6ym9vqxfve78wLwfNjtvogb6Zod5Dz3DRM2icK8kPt6XH1f8LHZArHJfG4kXFWFrcB8D3uS",
  "key40": "5i2g28S1UiLcGpeD9a4fYmfzdDwgD6e6naDYE7x64AUWBXSRrVGdzLR1pextcbhtGu6x3DbxRF3EB4Vtv5jnV8XG",
  "key41": "48uZyBxtHAX49MhGoQESuzQ679e2sU6KqDWLr8SVLXcFn6TQPoJLDqTars4HGVoxVb1JTpiXo8rudELvjauG3TR3",
  "key42": "3xTL6x33YLKes4Td7kPkk7ANiZpMFKC8dYHwQTEoecLrBX9rYiMkd86aGKUgSfDraRik8mZSE9DY6hhHcjFHkww9",
  "key43": "3jwD8cdZTHZsYbLw6tnAyAgcQboGZtEhzPXnUJYmPc7SMsgbQQUWMNNwsG7VnW12fdFx4X61QSSy47nxfn7pSxrU",
  "key44": "2qM14Bs2MGCb7kZghd1YGiKY2ggGzpTkjq2KwRQGGA4QfabSbWtkZkvnP2WwzMpGcdRfwdVFZv38Hv1hR6pFtMVg",
  "key45": "kMYcFRGXd4tRwSkCujFvaajVDG5q6DqKYGheDEL1XeiVGQR6MBgRSZ6jXuWBwsDXSkW4bCnsDo5b3VCh1j7LL5E",
  "key46": "58sFh8Tdq7oLzP7j2SZk2M9NKNUU3A8yXQcEf6HuwsLAc6jokyGEMqsvqNF8nsUEoJ2HXk52hediQGpBGePidodx"
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
