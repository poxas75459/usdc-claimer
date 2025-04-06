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
    "4xCYWdzukfnqJQ5FoacSbi3CsZv6ddtgiqtQSado2chgPSJgetr7bx1JEz5vjaAJS6oVC2yir86FoTbD1SgmDok2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faq97u22jk5zaneevS9RybnAkx3Yb3rgQFPzKcsUHnU1sSddWUYnYX6rPQezCSL6iXHFX9Jk48Dkw3eCQ4U1gVF",
  "key1": "4V5P6PMAkngMfRWJ92TrbDzavyUncQXBt3iLkHKQVXL6pGh6MND3VQc4PJa8Xtz2FTCyvJoSAtmnLFrxcQeu4nHV",
  "key2": "5xVzYkAsdQMZH7D3jWUKfMrV1RXD4wXFefezq7KvDVxyoY8DYPenBA3bQXqjaq9iLDfh7N275wRzGohFkjUhtGwA",
  "key3": "3poDghypJhruDBtZuRe63TnJxD3r3ENisqKY2NyLYVidqy6cApr38PtCiUuS7PKkHt55WYdLzQuTvuU5cWYD7BRX",
  "key4": "2EYaLRxFnTx3cDxRhZ7x7kunU5HMJUofANUq7oBVxoRNpSnLUYFkkksGnTBzQ7oVjUvuyowtSzkqozKkgnaz5vSt",
  "key5": "3YHb4Uy9bNk7p7JYtBwEytgU3y2E9eGmW72Vnp3sC6bj3zDBUwS1CZ6kGWnKqoLNziNdXwUyBQ7s3YSRidJ7kwMB",
  "key6": "4jB2fpmT89tQwpE8g6iKCfDRtwnQ4UCDZkmJPA8uUXjecaNweHnid585MzuobNqCc76A4tcSJaeAHhKQ2eS7JZxV",
  "key7": "5YeAAqyHMENk2nMXKEcbsyfsyEKje3wMxJ2a3DHFoTHcgxNqvhrURfTfxL2hTWZFm8wq9iBNkPfPymXqpBpPDckE",
  "key8": "xjV4Roby3WYFPD2qDypZHLGKTfdocQ24pUDDybZRgRq1HynjvXs1JiKooK7R6iDMZG8yQiHdvqXmLPL8h7StzWi",
  "key9": "2u2VPoNMg5yPgFrhUBYXSGodBjQ5t6MY6Qq7KABQ8QYyBu2UdjXKv3gwC4QDEZxrvUnaroGstMonqyJ1jjcCmx13",
  "key10": "3DVFqZmTjtBz4dxNd213oymLeS6nf9UepHWN4G5qpkCNfdbL6exAJFM2cUzX9rrRP6QEpf9Xs48dUQkeXG3n1wcv",
  "key11": "5voYhSCVrLQzrH26FoSVf7MuRWbU3amvGZuMuJQnDvnnkbTNvWaJupiBdPNf6R8unzix3RhLQPsBAwUbfcXTsu8B",
  "key12": "7w6PqK7q2zkvEtfitVfSUTSwMYoNwNUNSRFr6eGcVcQzXszVUreJHA5cywCEhWR5TYRJErmY8gU5jwz7hEXZxx8",
  "key13": "3LeAXSLKUjVoAKUUu4hvus8AdvidBamjMR1fjkYxMqbfUygzWNrb7a8PLnquadLfka7XsJDXyzZaw4ngMShNehwA",
  "key14": "4T7vehcenPTHkCpqEY5p8ATFTM5P5ngGa9ULYVdFeTWfghTB89WMirpjtJZU2kv6g9pAz4bXhA87joq5ku8B3URo",
  "key15": "4aLBmMKe4eQ8c5b7qDUfAD2UwgqpYdVowQdRDAZnpkW1J7p69nGwXtsF5a36jk7eDEByLM6wHt6HdYaiJ73WLQxk",
  "key16": "EJanAKc1raa84NjaB7jN6BEEoU4xdaCVts35v8u6mCyTN9yg7ZyZ1ZU2fay8Ajz4hzC296hjjSdEJbBEVimpzyb",
  "key17": "2eASSRkJfwemBmc8CisDM8mHXVNMzKguUhLAN2YKyjMvnNUjGYbJSTTPwh5kJNUZjKqfcFYnhqQB6FftQj6tubtU",
  "key18": "4paXVjYL9gzkcKj66y432AV6YCFMRwsL1e87r6ptEaNEZ72pwxyCZuhtVG3N15fY1ESRFyAfAMpaejwvZvaSfVHG",
  "key19": "mfdDBboyY21iKdRTJ1HoyhKW369LDt4TXFFJAjQREcfxckakdQBjnrUG8LaTSCUPu41myaLDKxYmjTJWaoeoUGK",
  "key20": "2ZwRwofPCCeG1qeY1jJ5WDSJhr8uyU5KCPmYJNxkVbbKzJCkPQ6qETqFVwFnNwBkd5oGdarSivJbt8133oF8QMfk",
  "key21": "5YmXBxujqVCNW323HE7vk1JuuUWpx6aGFuVDxYGdvZwHTK6Ah4ZnPDEX8Sj6sph7r74DY27SAKJodVJsxmTY4E5h",
  "key22": "3sgBdkuVPziBqQ4XZJRf2eoJzE2okG88JgoURMhoTdR3cpKK4Ehvugqop4TNQxNZRCycE8DgrTjEYrw7dZF1XNCf",
  "key23": "WngU1xKB8gDN2G8kwujZqfCfP8weoF2dPMtQLT1bDQjKieoTeczGjVAGNWuWPdrde4fYxeRQDd7yfKsCWxJvCoK",
  "key24": "sdMnAzhuAxbYV23coGsNdb3Rkvgqh6nn9QNi7CUgKFoM5kKNQiJGss7v9v3Hno5LJtNuxpotDmjudBzsW3rzhMt",
  "key25": "4nHaHWRuSkFtKfi6eZc2wpamXyTdCLDBcVbeZcN2ATtzdWBwx3CLYRFSnKGmqYUQit7qNFUiLFsoXa5jdSMM9wap",
  "key26": "3nvFMqqRmncTTU8SkXkQ6fG9hpuAyR1nKezT9SDjNGTxuEBGiifCSdPZheLo3uipUCLzVFbrqMYPkBJVeRwXgtR8",
  "key27": "2PdRV5dWuTobvUPu1FBU3AeqLniK3j9oYSC1Qu41HhzqS13uQZsSa7Ex4DWoCB7sh78LVdHavv7Xsanjwc1HXnVd",
  "key28": "fYHDqBn25F5vBDF8NHQa1ju9McHa74FTz4ZGekobkoFLSvruaD46RSZE7UYSMfF1gSuNtNmXnAtKEB441yWhAjU",
  "key29": "CRC2ojD6z6dnAXf7FSUqoMyMHbM4hb9a9S2GaH88TWJHthZqPHT1bW8yHkqHMQ3ozyLinpiuRTsxMLkguAT1fre",
  "key30": "5es7DYds7WNVqNWVp43BT4JCLA5Wh3QMynx6varwzZo3cKevaRZLQ5dEGpfetqb7SEXwaDwPvn6CVZkx2tLdSqvz",
  "key31": "124NBLXSij8TKEF7qfMn2AaiwpzfQNKeLnVAQ5B7D2yXfnfpNJJet4dTwUpMsa8WcWJ6ZQqbEkJCLL9Tmf9wjDCG",
  "key32": "2orAnLTkgvCdG6ceiwEwSnvu6g3cAUhUK16VSpRALVWtq8gZxbZjviBLxTUjQQ74tWFSRCrX8cp1911jM7nyspd3",
  "key33": "39CCC6xVcU9EaC7C2hFS9mPECJL8kMFZAK1sfraf1Rs17UVG9UQ1Ry6ZYx1vXbojswoXqFsbSx5mcnTCTYyfCwcW",
  "key34": "5fZ4bYongBQT9ZkmuQV58wUgx3eXqjZDK4CyiydeUGsK1aVLoGjAdTENXvHG9ZD3vWhDjt5pGfvhysv8p96UNmjK",
  "key35": "2BzQHUoScPiKtcbESBm4KeFp57xbbvkL7ZzyDfNhL5JXhfQr6y3ChNurKzAsFAMmXRKzD2NsdcYb3HCUiCD93Dek",
  "key36": "i4WjmsfSZNrKxoN87BRhaCrJcChv4GRgtBGe6ygrFYdPzBLVN9zXHfDFfG8Ns21T4VEGWBihgkPxo4QWCQYiTXn",
  "key37": "24JeWW2ruyX1oHEZAPo23APUZizxan1pKvMLXigD3rNR6jrTGneyCGkhK7ozqp6UGkvWjujzMLhFyEqK7GZvvQHn",
  "key38": "QuCv62Cup73kVBTm7PTZGTLgc5uezXBxk8vSzRUrPYJPSLDzLLRqRyb2opoXxj1p3DFXBm6LKv5xKxMSxNBR5WJ",
  "key39": "6hRefbYR3NLmtcuwFB1ryPGA7JBd5EeuZjyPjUDp1fPoTtZrkTrVFLrvJX4SfyM5M6JxCMEkC5YvvSiKav2KnA2",
  "key40": "3SoXCMWf1mQFyzaaq9E7nZFSmJKk7288trHsU1irQibzpjM1wiK9UxdC7N8CFjNfh2Fw4CAEB1NMkb3ks6ve8tBy",
  "key41": "2AR6zpvEW2JyRu6c45AbTqRXqNgjoKrhRy6eiv9h8GRbWPGLeihQLTFqvXV9heAMSdpCkAYBD4xf5HDpDrfBwt9E",
  "key42": "2XurPujFiZQXt5uepxjBdKnZLrhmNm6TNRDHZZbL8M6KzR4mH6HhrJWQ6SLMowvyPYdxTbThZpQkUScRXzEYvWRU",
  "key43": "2JGMkjGpdY7scs2HE2XvEqUQv4m3Mox31oryhYr2hy5D7MZi3eCo49sfd8toAS1hGE9cjjbShmoWXovD6EEiXmBf",
  "key44": "3dALF8mp5RYXtbkFv9PQWXpTiM1HbbXNYn93y7GrKZMTNfGEzEKbYWjFtNPVFEoF74ZNZGMDDUZBxahZKhfbjaZS"
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
