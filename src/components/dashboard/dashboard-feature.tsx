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
    "2hzVmV5Duj9m4YMg2noezHWTMn51w88rahddkNrVYvhuVFaQuc4KGqxmSNUVNWtvHqrC5fmJPVYNfaUtf8yL4cH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTpQaUizPrxxZUkrNoKza1qUQyndnwY3LbqdjRqCmybFqcjh5xdeFUKNRtUpQufznBEsvYRYr4xxP6EJ5RtPov1",
  "key1": "jAv88gbrt9DiWi5wVxuY1f4425cJgJVcSCK5jnMz6bLoZ2PqQjx6fPFtFgJK2kzHHqecgksfyNxzZe4n6BxdgB2",
  "key2": "2ZP1Cn3JhoxBsSxt6Wqv4zf1P9Bapab8pPiacWMqggmGoUuTpSkmysAj3zfrvbWPeqvPxuE5Cx4yM1qWR15gJPNK",
  "key3": "4MqvBxsn4moiDma2mad8Jhu4k9duS1wVYTrhcZzgs83KqNaTPTfmZpdcXLPJcbQEbrCvWUDevmKchWJBH1KEJKhe",
  "key4": "5bTZgasqugsigkDPCohcK1McbNmXU93tLZWBxhSrTPQFb8iYerK5L6qnWWo1Jh5GxwJ5RwoRH17CtE3JCBUrotYN",
  "key5": "2vKayGm2em5oosqJQFzU4eZJEeooLwXBEFfns27ZHQsevsJMnMLms59TAvtWzyCBp2iWejpqSaffFpAyug6AUaiG",
  "key6": "4DVssbbPckkVu6uqfMgJXKezkzE2bWpLEoFqLdxSFnrUAodAF1Ccr1r3qi3hKoWzYLEGCNisDhF1treSkvxbPnaC",
  "key7": "XUVsCTd5kvk91YiJUdXGvVMe7rYzczrgrKL7DpoBqwNpv8ZaVcR8CfWUKk9iPmjT31x9ckV16NAzUDbRfoaLGUi",
  "key8": "5beWjapBqGwaoW3eiEVG3uGt6RE58vBGTJHtpRTiJ3LXr48p7Py8sfyg2q8AfoqMMAHrU6CeGbGwbeEZNbTU7HHd",
  "key9": "38WRQt8hdtYdvxZYsrXWuypkjVdk4N3VgVHcF1TtR7aQDsfWZR5m8UgqQGcstz1ddvW4PA3AuqSkpMGmbiJ1upZR",
  "key10": "55QJc436eJYSf89DCnAZmQ6YUK77noDQ3oL6PdXe7756kJSJK78yCLDV3vM9aupiewwXgKS4wxbZBoU2di9DVfem",
  "key11": "491jS1PEkb5vSDE6MkTjEjWHHwG2V5DJSnPjt2DytRkwbdnVfSrKs8a2oLnKNhVXQqVSFcRe2k1RqehAGvKj4XDn",
  "key12": "Ut2RHstcuLxvepv68grREdbSygTw48edxmgX6uf7Z28WLjiq3LRauy8FAtgCmKD6TbvkkaWVfrks3BpZT9R2d1g",
  "key13": "3CQfqyvNtBBmEACVDFrZfbWACHGbUmYcVy5SfrvZMqx4iGiD8bGfiQEQvnFsZAjNSdyBpZj9PTaU7eRaK5YKfiYd",
  "key14": "3GBkRNM4iFKVpZqQXDKdJqaUTiQfNGpYXXeLEd4NhLu1jVtxKkLGzmdBjr5HLKJLZQDYfUohtrYmFNNGmpc1yvHR",
  "key15": "4ph1pQVctZXXipagb9K4irMds9T9NprnrfRCxf4oFmeVfhQf8aaUretHGEy6Vy1kc8J2TrdbhEU1HvL4Df7LBNqt",
  "key16": "5UKHa5nZu8BPVhfpZgY6rBLMaULdgiCPKNose9sP5iWJAnZcYu97GYE7hGZjni2yaj8frvdYbkaXRjH9eBUPA3wP",
  "key17": "44iCPCQUyMj9GGwR79oAJRakM3h4nLCdmpV6xZUMH1pvVBtsS78EHVBRfDA7G5vZ7yo3FtDMBfZgcmLzp9cTFrZd",
  "key18": "34gXu3cGEM1fsu7URPkmgxFmW9g2Tz4eHTMYp4UAjVohWHH9isHYj2AtuM2gttxBMLXRX3uCMZNADGiG7KoGSSrA",
  "key19": "41eBEmdRVELrnYkbBMvxcKnsNUv7GAS6hZHY5nRn8XQK8Gby2GoDWpEC8aoWn1VFU2YoyFmu42aCgk4q8KjU73yN",
  "key20": "VNuJ71yf5LdEpgdpfFzgNLCBLAebMKUNenCJ76skS3u4o3jjKduYeKuwihE9xMEB313B1qrDPyJ8qVJ39k9rmdj",
  "key21": "UFCKPiN11guWgoC4346LysgnJzi5PQ1bckZxaWP9yBda4zfPcdnj6QiymtAUsaXgWsQEP7RRbZUXwRzz7u4vDAK",
  "key22": "TsmDQLbck2F7S7mGQ8qm1G4qCmFSnUATFcsXpKyKczmXM9xjvzw972ahG4gbSGCMYYY4fgcooKxZCZ7AZ8vifUZ",
  "key23": "2ZPYNGDH3ib6khwYNaHMtBTPE8TQcERiTv38t5fdFQdXcCpSWJMymqt9tnS5CPuwDEzewb9mGeA4EQnMyh2vZ4v8",
  "key24": "2qbr2yeP93WH79tY5mSYARcB8Kunbox7WAA1jLLzh4xYP2vUbgRbEYj1ZRjEsmMNTyUX6ZN7X5T5XcQHWTMqZnWm",
  "key25": "LqdXfPLygBf6XR6ZoFSqp9tEMSDJvLnJeqgBVU987fmR7FDpQqQcioTVv94oyR7iiQbQtzuCZeSaTaur8GjLPcK",
  "key26": "2JwHHxVqLCaXismLL8PbAChZRLZ6jMFpeCy88RFg6ZTafwZDotqCnRVK3tohg4nxXV3QRzv3ecGLzoyPd5ezEtCK",
  "key27": "4FoFCmF5tjo6fgzxNB7Pq9ikJJuXb7vKymqabxarpqZaSCGvJJqVUFsqTHZFUrTmb8Kt6iWKw6N8nDYPsFmr5ApA",
  "key28": "2dqLMReeGzgp4aRCEVAkudM1B4vV2guPwnoAjnZwm4CRC3rwwByZB8kLv1Q9e3AnhwyrQjyJy1EnmAjWK2N1PeQN",
  "key29": "3KbnD1MxgFcXHLV9uy8gqNE8kX8GyCiGDPF1Xrw83zZGsBtJ2VmsLRKWC3tEUzPXQhNhKHnVVQAGANRSLKU1NvMb",
  "key30": "5sA7nZaC9eXcrXKDVq885vxSJ1faX6duWiZKs6imTivJV4eMe3YKb5GctgxinaTmSj75VFoJV3Pvx89TgDkJqK9F"
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
