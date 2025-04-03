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
    "3s9PVPMfdjQoo7NH6T9JKwbJcANoUZnHZfbxzUangEpiCGyc8Kw6HBqJqac7jM41AXrBBE7NfibfiEyiwyp3vvpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7HvAAfuff6AtknboDB4VyHxBox5XBemtKbd2ddX7CbGnnyn11wJf7vHycNfw5idaEaQtLXApqthqJTmmf5HxXZ",
  "key1": "2VnHYpJNycZ1sgRknSsrB1xL9UhbokiZ7yHS9mM9v8ui4LHSg2Dwra9zWCQcQQtR3bzF35zSsi1pVpUDnNZn9A54",
  "key2": "HrYPrLXC1kUAswMD71XPYDixx1aPjqtN4j4DhQLMKRZhJm4e6Qf7fteVcAZiAucA8iQSuaJX7WBNuysr9qg9AWF",
  "key3": "2CiF6pt2fnToNLhd6aXGfRTVHP7rhgtSqx1iyrVufuWw1jTYEpGN6KqT3k52KnLZPWeBebftdBiikxuD1LrJFz5W",
  "key4": "3zXWQRGWZEgv2kRyt3kuzJjWeE1p5qyakZbxVsPRNwnwcnU9trKHmurcKXMfBuqLmJ2GMsz9BeLVF9g2syfPGGtM",
  "key5": "5nWAsM5Nb5jicL5PRqZjQZK21iTj8ELVyqkgdHbo3xzvwvkhnqXmroEQzdyKLKggTAtr9mg53hJWgHtmNbGkAEL8",
  "key6": "DZeCXQ3vc4miZWJ395URPEFZsbMZuNgNxoibguJzjffym7UWSD6dwP5fBZ9cWXRHmMQZddGY8jCuwVwbjPCHrDi",
  "key7": "2hRSZ25NbNx8pvq9eY3va6TZwAq3QxJV9KWz3aMZimjxYbFrWA9jt5nvHvKP2WGHa3jyP231Ucm3uTbDgS3j9yKB",
  "key8": "4FDZvNe9zoJHruxgmyzbpmsqzug1CYqBjYvUihnHSTVk2iFPAieSvpGdB5idesEjwSK6pzRwAM637fdLYhsuCXU1",
  "key9": "pzG8NFG5i2ePaBnqU5YSN3Yttm6uTHufRuW9URaFzLQkjh6BTQ3n9sJktrYCMxGViNWPk9QNV5nN6D7ERiT72Fk",
  "key10": "5FZrRqurvWzCQmrQzbXXgqy6FupXajRUmUP7wHjRApA4c3CzTpgehobobSjihP4v4fqg5sRXfLYTNUtsotKxySFd",
  "key11": "FxszMBKQadiJPR5xPLppTFK6ToBiNxCnxqXnXXu16VcmyeT4PuGs2p6aT3YKeGFeo1GowpVLDrUeaMRqGf4VpwK",
  "key12": "5n7MqE6anhA2FS5aSKB8njz3Anv3wSTq23jpmTpq1dhxsB8piWvWUN4xL6FjJo68yDKb18njHv2oTSi6Z4BxkGYD",
  "key13": "5yRwSsTEyiQnFJi7az11pUkCm4Y2ufswotjLd2n7JQRKGLeESywfU1voKRdmc7PiBopVHLarSXMb7Y95qCTUaGnm",
  "key14": "R68XQuJ21xkGr8WXgXYjRQ7WPkghhQMNWpNkSvp7rQKE4BkyYu7PJeRYZyjwBBZNL2f2djDrf1eKtaJvc7r1gLt",
  "key15": "qknSfb682o5sRoDzr7XLSGyEy6qDfEKXCqizvmaC5Km8cd6Xeb8fzxrUQEE5Q3zbtgkyFrJcsYB1KxgxMmtou8u",
  "key16": "2RgU6HxCQbzuuC4pMjpff2KUWbaejHSGPVo5CepLPTvgpNDbq9jCtPZpgTaWkfNCXyRafm6dq5rZbWQyQ6nYukPX",
  "key17": "4RghxcYVfGac7DgqwcAe8uQFRK5gYSHc1bDasYxSF2j9TvpuBf6u8zNMXP4c5SeLWM3tTao53xm8GQXt8LCxkGQd",
  "key18": "28k8wsvNAbDAirWvvPA5PRAwnkrCN74ZFPgFZSt3JWgJhuZcru3jHHnNBJetcYYixW4FG5nmRanv51Q8QVuQEBAo",
  "key19": "4gaZAYV7e6N8vuzZ7c9eRk6cSXou6kenAyURU4X762xSNGe7JNTMrJcMXbXuNwrcHzrM7wCcX5deXa25KhFm4EjX",
  "key20": "3EJYDWZFbP4ppR3VtoNmUVnwqiasyUN9UGDV3DddUnFuPibYkvkDYbHYCJsnAPTJy8c7KLnj2iKmcgT16BtMK7Af",
  "key21": "3J7aCsBdhNkJSMdE6Z1c3W2DvFtHngRzsWZtk5nNtP2HjUnZDxTQ6h9bWxpM4u1812sXcn3Kjq9FxcrCsnsJ9SZC",
  "key22": "Yd7CZmzQTGjApLvp9Fx3xXtf1QwzcCx7LhjSx9oPNH6EHbfYADjy1XzYPcLR5q5KJf2FaQTqsbm3z95cgAjRUZf",
  "key23": "dSUx5CmciNi6EeWuhCRFgeLwxGq9Su7ieRymQQFfiHd2C5cziLWq7325mZSRMM5s4Co9YYVzBGiM6N9smQUQ4fx",
  "key24": "3EGbT1qHSEEuRyEjNnws71WmzUXTakhpuhbjgKciL3nLj3xBk2HjKywEgqA3Baz1zrTDt1kXgHSnEzB1gUBJexnq",
  "key25": "4qALFsBBW8WSguzk4VxstEgzNA5pj6SkAtGiX8RdUVw3HMLMPUPrEMRMNfLBtZuz4hcSdVuuCmrcg6pkYMWRToGu",
  "key26": "3FvsWcyx5vm64ZCRjZ1k5CykE2dGGeAi9n5Ck89U7rG8u2pCfUVmpZSG3aMbngms4CwCJZXkPbEmuCBLuM6oJXFC",
  "key27": "23mRJjNLnqoNxD1BymHc9YFznDqmspUz54kpPY3wTuxhKrbm3Z9UHd2Maq1WodXm2K6BuQPhmNzhRffbeXJqmKqU",
  "key28": "5o25PhnahDLsShYsdVpwkcvMzEKBnDH9xZpGZbM9xLy64nhXof7oMPvvckRH3wYV7CWy3TnQ2VWu8XkwaSTYqiDb",
  "key29": "385LVYdtijiYDwZiTBdNfmRnTdPxDptxUDUc8iYj3aQKgfGEq9S5ZyV1dwMkYDy5egGaU2ViCSXACAiFsTPifiLT",
  "key30": "5ToXLhDyFnYCHuV2T3vZZ4aJuAP1FcvxtkcNCcDQZoaUSFUPsyhAFbac5hc6rybCKUPXYWh8CoQXw2tCZLaRsNMr",
  "key31": "2THotCDi7SDBdnnVGTJGVZ8ATZQSKu6W5rseHfVHztqhGaqcwxHbp3H7dZWqfyu2mm4JR6CRQUYDucvxWeeeij8e",
  "key32": "MGGE22Z11573pSMrBP79qeT3vCcKYR8PPVmwxBRsmQ1JMz7ZLKZFjKzftpt58t7LM6tsmfzxxjCEcsci4GBuMW1",
  "key33": "3ArgJVs8CsP1je4rg5h6dAhV43i5HhFa6c5XHZrF8ctuYQqw6auy4DK7H3f7x2rAkHJERxGR8GZb6qHSp9yei1Mf",
  "key34": "4A1L77SHMxp1DKiEwm16eqNtExm6RvyfwQUoWoNdJNFDbg6M5LRh1MhQ9v5C2Q7ZJQsbJM9tTiGpLWDT8cdRVaL5",
  "key35": "3DZTGkMFudW5qeevJdPoSDYq3Z4BXuhyDQ5nS3WUcPSDAgFejF311jSvsPKovW8tJJwvewLtcgACAq24xTK92Mjg",
  "key36": "3gXWShjHGawx3vfFQn7HAr8C3LUMk5LNmNiqBUhuuUYQKjmbxnnGqrDvBVjk2e6jSN4VgvmM7RKnLPxeKb5Dn3Qk",
  "key37": "WTZckYdg2HBTHvZJe4THVTUfConM8HwLE3cqhuSWTmZo7h88CpvJiLFGLUJa6f8QnaxVvmiws77URnXCm7uGYQf",
  "key38": "juaSW33rEV5K3Tgb8U965jKPY2CvcvL3iqfTQB1iy68Jxi9EeiVAyq7GVgzvqDVV3XVtXjnBAtFwRa3dJJxHpFT"
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
