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
    "3tNt6phPE2bkrvEN5iDz5fdVbJErLMk5bkyXiXLRysVgW6ZBv59aNbS6BvFcuYemGhswbqXKbKychWbpKybD3QSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LMfbDbPjYNStCtgAniR2UdCFDoqWSNan8Xf9NL1czZycxmqi1JdxfJ3H7ZDi5WUirmttF1gP6z5KccP7xY1VLw",
  "key1": "rnwup24Xomc3mkak8FwFVXqDZ9as5j8a4Fj78KpY7mk2rfWHoHEUj7KEpKRaX9quarMmUKTRpysMCFucD4zwJdg",
  "key2": "4y43PB4rxtXFFKDAHGLwTZPPZwRwbparqKZ8wS1EVm6KBjiExCV27HWYz8nds2MKTyKFA8hWuBGWN4aUQByb4KB7",
  "key3": "5DJwcEwrmJRz1d94PSzbbxTjx2hD7hdJFzMvETSiBigX2TZzVtQ8GjB7iNYWVfq9j7xbP3AQmFqU5GmcoYQRcDAT",
  "key4": "4DbardttDdkci9jBa9cWEfJtaVJH7XNV8kytw9wTN3TYctzrHu5S1bue3VD63Kp3Xs5qdEQmfTjZdTAgz9q2tr1Q",
  "key5": "3uH6VezYJhdL29jfYZZZQcFy3DsfvFU1XwYXmvbwRcfxnmLhVjuG8ZvCAQ1udQWtXT6PfEURxA298UmTi5oGkFwy",
  "key6": "3gQvuxcjF7GcmaDn5zKMzCj5HncQN8kyQ4wstbDqi5GF3qRdCjYJy2pn347HEFQmfEbBQULwYqR7CBBh5gXg7fv8",
  "key7": "vX4MFwHbxxnkscziRG7LyRuWTLxJ7tFs2u3w6NrHbRjyzoMyGxcCVuSfMGAtbJHN7v4XpyVPsRsP3smebSHYDb3",
  "key8": "2Vgg3SwQJWmy5MaJccLVuCF33TgHHGBPDjMpaYkcJZZZzJedkWR7DRaZP2j4t9cEwkEvX5D8EGQXWV8X7tkUASxH",
  "key9": "46iryhzpyNGoscyPEZeji3dEygsPojc1T2pqSsWCojfuaVZ5PpcNjat9gR5eb1MfHirQXHg3j4aj1hN6Y3PpnacQ",
  "key10": "2b1fXyySaHUzNZ3RCGiEpaQoTLEDoX88oPD25gD6sd6gaTenh5LzTjPprQ2ZjGipGNmoGjaWK5QfDXBG5cFTVkFW",
  "key11": "3uKWThYVENUYkoqDnycYd8PFQFKHVDw7AJt1pyguWmQdUDN1EdqV1YBEzM3Aywg12zGe4ta989YZoigCdpUYpYPD",
  "key12": "4zSTZCb8WxAESzhRsq5yU8L6vrPnMvgtdvdj5MEhiMiVHsmKkXKpM4qwjukh8nT2MiGRAt4bRjguFiVuKPkre8U2",
  "key13": "4vMCnA5fLRGhsiLYgmgrwCw9rMDimqQ9jMEHXyUxNuyQWHHQu3Kws2xnVAmG5G6X3R32VZDv1H6ea168cJ348zvS",
  "key14": "27XqLfpRFSCsKhyDct1RsA3EZnqHtYMkC7DUi7z53o4kA9tUwbTQ9eHqduQwv6adEsuyisoVPViG834rLSuTb9ba",
  "key15": "54DRHHcM5fWNofWaD4nomfhBKZV5GHs1fR17DdZ5LFDMUx3qpuxfCF4kmZTrw3UFVvqXZXwMQ1E3LQ2GoWKVLb7K",
  "key16": "5psK1Z9PH1dzWMUauakzc4rPtcLfCYV2ssPBv6KFjWDycFuM8ec6mc9AQ9Nps81xWRKFJQ8nb1ut2EHeDeeWiGXu",
  "key17": "4Rm1q549K4TRnsuqFHb2SZ15o8jkB9ALiNGpc1dfXgaZmpNmHsr46kuaEgAATwmRQsRcjrifoF8fm92BszS4AdvA",
  "key18": "645HoAaUWcr8hrsVWtpsx1LxPdG7tFjc8pd3uzzhEoUTaqC6hw6Jb1mkLt9sPmyMzbECSgPXVyaX9PexmvVJ4z1y",
  "key19": "wLAHFahYbgmmH1VJvHnKMWQYx239JGkCZLjo8LnZzN5ki1Yz6FnjCF8TSmaoYTzJUgL2F2W1r8HqCp8XJNTajpo",
  "key20": "59CEjx7ipz7eLbZVLLzWe8sL3RE7aZLY5BUkGAQgZwvh2qa9pJAxdHfjCAUhf5dd8YxQBSQsQzJ71bYHgUmZPWpw",
  "key21": "3HqkjcrMEdSpRfVQdGJwwNed8EXmp77SiYb9njowJ815gooAbZqyUAXCJiPqV9LGXqauV4TdMVoJpmnKi4XY3WU9",
  "key22": "7DMa59SKXc8pM7xvDqhViK6mwteD2461vy3ZR6NMwqUbP7ntyFpnY6GPP6wDqWWhj2TjrqzVt6nQHrYmNbqH3p4",
  "key23": "5XhXEUCqgjFzXGPxASKqo7uvjT1s7aC1AMmxyALcZaS9cN79YUyVDNnYaiS5pAHb3Qiuy2L2kqGXuohyHovvRoTn",
  "key24": "59xY79u9qQJs5JE62CYzUuFFaQsyLZcxZSfT6eyhcdyFRRjakbmmnnHi1c9oGgfNLRxLDdRW5CLYvbXzBUxxK1Kz",
  "key25": "Tt8TS4xpRto6YhsSdNeT2k9xCAzpznCaBg4XAXbgRDfBgg745YaYj7GBJ1tHCdzzpjp5hpjFYBXES9YnoTfUy5p",
  "key26": "3xsJVN6dip8Bxwp7uA88Tn4wgzmZpknqsJbdPMaTcrri1traMEv65gFE4zPbUT6Yq5bhVMX3hbMR1J6hTT6bmPG7",
  "key27": "5HrXGRt9zC9b5gWYBNsMXd54GoPZAAti8Mow2kzrxfMMedFSpm4mj7JrjFSfLxEK8bSgV46VC73woyyHvZ4n2j5k",
  "key28": "3uPVWzRfMRYMWUmG1YriVnB1zcbVhcCEFTT47MChxPdYJYTKMDytDQcLhvJj3EG6ao2eGWCzbWqNFeRe9FdL6Qji",
  "key29": "3HXvBbG7GFF148vWrTkKjReERD1DdCwnXUppQ2QhYBT9fVeFWe8szD3GNy8ntbhGwDDB9akaZYnoDkWmVqYUY5hw",
  "key30": "4vdBtN16iohyGCbkDEP6SdHLSJ3wtwjZYof2wesuMkqsSX59in4AB1BMRb88STNNE6zdGcgkV5BcJY3vm8cFifei",
  "key31": "4dqaGTiJCqbE2Yr1QEuoTXoJSbrFJtsLDQPPf9ft1CrkqbFLCatyzc221oVmJmmiTkWExy1h36pLPAaAL4F81k7G",
  "key32": "3bvuYMD5WpyA2wXPjJmrUqHk9nSCBX5TRzyMN8rRVMNhC1wcEDY5cyz3quotKkYydwbAGV1cMwfAoBh3JeG8bdSY",
  "key33": "4BMEizRcSTiVYCSJUnvTAkMhQyfwveiU7vCSk7vjoHEshPMwTGa9Ra5BhJzEkroPhWrpBssxwkfGzYumZ4w3kTPz",
  "key34": "2SrbcyxK2Dd41to42Pv9Wfo5eXspoEFoxw1S8zPwvQvdaTxoa4a93uVKXnhWKbZ5SGiagHKirMzxbKitXFHyKJmF",
  "key35": "4YGgBq8iHQSL52A6q8FkAvdPywiGg5jDmPpYf18VibAzw9A1zwYnvfifbffvwuQgaYoXGhoRdMYvX2MUw53z46oh",
  "key36": "3cr3WmA4X7a91CirhHFHiqujjohDmXAw2d5cAJhohfbZ4785cpSrdUdSK9qPfWpFM9H4YC1FWX8JKJ8kz9KYJbZo",
  "key37": "id2u7VN6UKC6aPCf4PPrFL5t5wM4g2AYzw1RiBbovaYRvkGWBEDrH51errRPi52sG5oZDKr1gQY81QCqEGCjLHB",
  "key38": "5LSqfrToPo4fn7gVrX2gkQGpJQFPRPnMFfhebqNsL52c23RZHJfdYLFMhx6qavAEenMrz7zimspWUTm9aXCqjExh",
  "key39": "2zMUTqjz1j7CeQocem312WLYCfC12TtzRjEU3iMmeYBwKNLvM4w6D7ewFuPMYD6b9mamyoSB8hsSqvELBuU9k6K7",
  "key40": "5jyJMLuKouwugwWYW17vcStaGcDwwGPQUqNfCVzt9fyCBbUdJfwR7aASq8HQ5XfHC3KyCKn1s5xA3FY5KVCVVVw4",
  "key41": "5DMMjmq7BFTnBy1UMamJguyNhynSrE5EduBK3q4JQScE81x5FF64wcv4BZ3PyjRtTNcoHVgz7iyVAeM7oP9M2BPX"
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
