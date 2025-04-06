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
    "5wEcS36iGu8HXCaSBYkQqnLQmai4GLr9FJzitt5tH9YBauUr4fEhF2htSPc2JXqjRQ3NyAzjGZcprfQz7sPwKxUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCZJH4pLt8ZnvMzD55hp8xW6BEsmYXAS8VyFzJBkq373vQi65bmZPER7qMMki7vtNP6Hif8NNZCN8mEp6yb5nW9",
  "key1": "61bn7CK29Bdf7gd9kK3cnThtDyDkGvw4wAnY8n9TtE2Xk8QgEdXMua6DQQrEGf6RPU5gGtABRzCsMpoN55ijRex2",
  "key2": "4JczgGqNbnVmWP3s2bvV2XqMUucDck2YSyjod4YnNt2nw2jSXXtQWcXrCDnMie2uiyxCk5mTZ4pf6YwLQzKULQx4",
  "key3": "4xwAGNoQzRhrBDiPSKZzgJo9GePFVUGnxgS71WY2K1rhGtxDFD3mAYUc3tjVsf2WD3P8mA4qnxzBgJARhwhncsAX",
  "key4": "45SgShqgKdFpWiWyy8qMjAxyrYR5ZoVZzaz1ozdqD3HxVaCDv3xb4rMno7ZJMNmzhTZp2vLqcms1gzPefMNYvnGY",
  "key5": "2M1fjeSTfo6fv8y9GYvLTnUrteYnLxVzTkz52pigA4d8anDAwnj7eVuwVUeH8nKJoAWvDgLmnnyk71P2PdikC45p",
  "key6": "5m1oeFpT8nXk3iXrtVRMrgKyVy52P4gH54W32ZKf8fsuQZdj6BVuiEAj1vEvmaUbmcLBvkCgb9yWSNwrU5jLDV2K",
  "key7": "4X6wEgqV62pvVGV9x9PYUA6yeBv2MQaVGd2MZatXcYNfndyMeSLMkhsnjzGfonuDwwQhS3nhyWCfwtu7iw9iSHnr",
  "key8": "3CJoruZku8128N33Kov2V5Hpm4qJjxDJzigxXMvjdN7WAmor3ZwdcStZHrqaTVezuRwoDtwA1SdBc9We25yUhYfZ",
  "key9": "5eLZZXDffNuC936BnXKmsxE5jtNrJuUXQ8Du5Fp9UqCPdJ31HePqPvS5D8Tcy8ydMr7nfAeXMu2g9m7Vc27Bo32J",
  "key10": "4DqnfMcYhn15FkCzqPZ8f4k51VWoLQPWq6AqLyPDUbk9sX1dsKQ5FraVh7rivY2jFoixKoGmq7TULUPmqSxWdzuo",
  "key11": "3AMv8BFZ9upgaKanRhSKVr3FKjUoqy3wj1tD4E8GKhtKYJZ64hBiBp66v7FUrxshgMiwTSiwtqzFLQFnjkYYopKU",
  "key12": "6kvnMaNakb9vqcu8mxt1Sb3JoeWLFM1Gv1F2pejDG3CePxYKuayvi8J558sJsX7T8s6D5fwvsXCSDRQonCFdDoQ",
  "key13": "32fhnW1mMKMy8uWukamjqWEwPWUi8GHFbKRosymvRWy1Mvn4SK1qWnnseXsv59cKL5eKiHBmZ3XTRk9BSv7rZaPx",
  "key14": "5rcK9E1ARaADPZWnZeaFYMk89hMnBcSFETb9p4n8NLJ5RzkPBE9QiKMjfy3ETMun4VBv2qaTryqi4qFT8e3bR4dW",
  "key15": "2KMDYKVeswoFu3mgPGikwf7qvuPJKskWDRFyZEgBqJzRmdfqV7wbG9nY76G4LbqQvGpVABG3ZniDYuTKFTAcQMUw",
  "key16": "3YThYQN1vUrpivPXo9Uix2zc6towjTpFCKyDM1Wgq9bVibs5fxT9CEk2MpMFtjeF5SuwDS9iwbZufNRzGD9UY9iu",
  "key17": "2FgVd7FGUmASxKArkzZ4aTpNDTKrhX5LgEHFAqXrqHrvasLGfb9PjavqkmM99GLVvBNxBqJLyVVQKfwrMWMMLWxx",
  "key18": "4tsaKom7sBLwrEAKd8gPPoGyQs4Cvk1R542i5W4QJn9M5MKeUvQjjcEWXqdDMUjgsRH2sFTG2napER5Xc9M3jS7c",
  "key19": "79ZxtVqLqKRmXa8EvhM4bp6yr6d37N5SUwU7PhyXmWdgHjbqDeC5sgvH5SWX6mrgAFTMiaqCHePeVMrz9hxRm1T",
  "key20": "41JUH3B2MF7sQhZPfVeDM94mLZEGuSHUt96rPBB12yz5JEWCjZzsmm4uEXKVUwwxrzMsUHUfPb9i4PpBvrEiguqL",
  "key21": "jCnVfApGGTNsY1AYG6ZwtupH42kcVCK9Uv7vnZF9jjrx5obD3UQFLN9AQRgrgBABG9xGcQuQ8KgkQcV3y4CTogS",
  "key22": "uY8vd7WTWozPrrzutxE8bvwjvKxKYwDneQ5GV857B1YiMJwg2UQGiNQtzpB5yrXFhiPncAyyjxrt3gHGHi3hVwX",
  "key23": "2vKK6hpqGMWuR73abjsDGngVh6CJmfEkFz5rWgbQYgWtqxGPWYeGf4czJVaJVmPUirH8RU3kFiYVgqUjKfF7GxTv",
  "key24": "2pV3VUAmACTZqaYffJjghMfDbp2HsfUZCX45HBprqNpnbvKTSC8k8DAp5s4r7N429x6b7Xo6cZMUdMKxH8PzwDda",
  "key25": "5kocZRjAN7h7qkmcPn9rU3fCKTW9eceWCJpqzKZeTWWPUaFDgXcuJtPUmyTwPyhTJsSiM6aiaQN7Z4hjsWDdGbmF",
  "key26": "5z8PGseXzGFaiZj9y9QCpETfYT5tan9iQBtnhgC1JpWyzLp6ZSGhhTjGFjgaf5k4JY2hKTGZ7u3WZTuF8Vmu2gxV",
  "key27": "4DJ1dUMf4i76mfTQDSAhgtN4iyqNJVYa4sEpefFnBsrDGBC5Y2eKJpsJQvrjK6QGYgJ2ZbUkKe639ictrDb5UkgP",
  "key28": "3JdWh22BLqFR7DcGt3GLn2gNBMkkng2XzwUXVSvAQ6FBAgdJJk2Sw3QrF7o4aAYmwXVKr2eauxEzEez7PofwxLBm",
  "key29": "4pbaEuoyMRCfDnW3cEvdXhiXmP3MaXRiTsrgK6qPhwUkek3DrYr2Fe27t3eUcGzoBAWapXYW4DEk4NGkmxFNvXnq",
  "key30": "34kjMNzHE4jiXUpmwNGp9XatEiWKSwSydUak1hSnNSMpSBvGCes2s99yNX8tcxPMDdyEJyetMfQu8FgXE5q4Z7dC",
  "key31": "ATXCPoAjNSyDkJWyov3Egjm251QHbLU8yXLYHxFSwFbiPGr9sco2GfoTUGoBybYAJ2zxgdE1o1gPmSXRDzGQAiu",
  "key32": "4q3NBL75BYF3Wt74sFaY9cYBY92LaLqVFcSJkUcyrXR5VVN675BNtc4tJLjH13CXTu5F84kxyM8piLiarvAYgm3o",
  "key33": "3J9nUdboKWg4Dy3bDug46nTS8MhN17cgXGuxLCjf4XMtrXhvkwJ1yfUGDC5u4TBvfnyX4avtkNTWApeVMFEqGyVV",
  "key34": "2BrVYFPMYkE9AijnjGu2TGBc8xkbGUSPEJaSQynHaKXwp7pAV3gu5F8PraBNwZ5KgXeEqAgw855Q2FE6HnnFr3jy",
  "key35": "4w8FiqeKPCC63kRRAj9twYXpba6uRKnNUj49a9tLTmWkHv5AjkgaB6HAFetrSm9yKjFw5iXToz8raQDtFWHR9YsF"
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
