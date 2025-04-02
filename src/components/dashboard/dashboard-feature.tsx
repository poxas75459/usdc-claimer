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
    "5mCxFPb52YZyGka9u4uq5HBKiYe2Ujn71U159kpd4i41aftbmb761P8xsXMARYTW3qek6zqKZwoUycB1MU67wHvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSaHZjWsTPZjXkwZSv6FLTcK8sLb37U8rMaUEn43eM2vGUDqKCEtxdArKXm1Nx2LBWiamZ1b1trhiRrRL1rCWNM",
  "key1": "3QroAnfRjirk6z1dnUyiUCQ1bNxUYhphnxBzToX73rgjNgnzRSZMVCuW73ZBxgJ7RZXX3B4XcbjP6xR1KHPKBYSf",
  "key2": "5KX2nAwLK3yNsQoWGkcaiQqv1QDYqNu4S63xwvvkwkzdWm8nDXgUVH4KDZc376K3WA1iDFoQtLEsEgR77cMTS5mg",
  "key3": "4cz9JzHF76JUFj4KyTDcPzg7fqLj3aPvJcYe2jVH2xbzN4egSfRXNY8FfeJXKSKo4WL5gMh3TDDZLs66uRuhPwvf",
  "key4": "4N6LuRL2yCRnwNwuivm556Xcs1ptH47MJYdyWDEizFEcMysN9KSLjFdieKsSK45KgR6QcXXZNt364FVDFL1Zn8UF",
  "key5": "49ovec6Vs5mUkrqcJg7hF3EdBFUPexDRzm81adGLpvian5z5cRt1gFzTNtzv22p9GZd1uWzzNg8NAGoadmnTLjPf",
  "key6": "2pYJQuhV3fXVxS9FwyT8nPbULNEyJKafE8Sq99wsEnoEsn3vS2Zk2MmDPJHavQt9azcfNqN56uupk9y85hUumUF4",
  "key7": "vAPUptrFcGYCMxjbVFtumUa7fFJRZJsvZTYMUZk9qwNRzqWkW18vqEj8AVUbNNqTM6qECSxD6zCcdbZpNykPGeD",
  "key8": "2KP5X3jcaJsSuE8FsdwRYcEirf5DnwQqLURrKW8BKk4AtmysJ6KKJvff7XCNjwNUpw1QV7DohGdDAEuEjYcUARKL",
  "key9": "4yi3rhAUg7QceJ7n7rk9tebutGJ7MRaXDZrzc4DCUguc4Fskk54tx9JMdwuwnYS8zfyu1jAuGJYVJXLrBMszr8kS",
  "key10": "41oMn7HBY1kG7SKKt6MZPqLRMTzpeSvAGhUjyepCbAggtYZs2ZpkKcKNFc4XQPiTzBk5iPYGp8As3ybSaKboZZrJ",
  "key11": "5t1Qf2EHtBuYfeprzPaf1zZYCeBC1q9AmZEeuBo9KpgyaufCaQGdNEMnrXPqQPwSpkihqkvuN78hgVP8PqYqpVGx",
  "key12": "4qYoGaKCYYj58SNyPkRgmaLqkfgaTUb6dyfyhwn9dUxb34wEYk8T3gz2LirRXxKFLVsuYBsv2NnsCJvH47H482dz",
  "key13": "2odd2YrT83HcMSJi3x5UnnkCaqnSWw2nn16KfGa6BEvQ2p9HAe7buwBeUWr3HMgjbzs2MJ8DbvPSttis8V28QPMt",
  "key14": "NV1VThoXZuv9ipogofdkrUWpGvRtFY3yV3xar9FHGgdXQHwrXGYYaSV8pbnNp3GNPtKKi74RC1QE9PiQbuKawes",
  "key15": "bue4JmCSuYWE9t2nqJZdeDU7ToV53hEEqdLTn4fo1SaRU4V5DbKwVpUV1LcLQiqg93pLKnGmsid15PxYQfARZ5U",
  "key16": "4VKfscJfHJBDPHrAGRDiy42nKgqqL6TPNFoxnf9LE2f7ByGWF1eNRqDcG7eRw5PqoftEKBe8tP1ZvMcfnCdbd6v7",
  "key17": "crsLaXJUSiGFRhiktycsGx3WrWTN9S7rNZPXxw6ADJjWrYHyu2LQTs5BomjN5f6RJS4XQfnJdEDoHHLAzDb3bQj",
  "key18": "5ctqbzhRBf4o3BDw5CZopqcHz1AYV5nN2jBA9bXyiAn3KMwMphPBmS7SHsiotBY8r7A1B3VzcYnhcqMmNSLLdSLr",
  "key19": "38RFAziy6s9PsgmzYj2JKjvN5aN1Eh6HtwRGta74dJyMTTBriwfDm4iPNokKEGx3fJbUFTH4KfSMtxw69msk6DbE",
  "key20": "86yzHTezRj8ifB17NPmNwmV37PpWYXKD7t16zEZcu4GFA3vDrUqcyRej4YxNK6EkDcyudmuSNgC3RaueMApUZi6",
  "key21": "41aGDt1D8w4iQFrSnu1jKAuLfbNsonMca8DWmJkdU6zxUxuERcYHcKEFRcb2hkbm3ZhnVCscVkPzX7jEsuaBJw6c",
  "key22": "51b7ewxP8HnCkcCd4kn8atZV1So79fzCmU6whdRPkTLr8Jcco3YfVUAFoTiF6hoEGuSrPi8qLh7YvhA9N7tqTyuJ",
  "key23": "2aaD9s4sqn8GFWXVrZKKtfcYLvuEne7ac3W7oDAi4mxSW7ZYz14grCZjG9T7cc3nebnsGkD5eutCvqb6omrURiSB",
  "key24": "hB5XSx24c4cPyYVtZZ7mtDLDwgLEcjSF8EFkeJziaUroy6AaTHfukonCLjLyahawa2CmR6AmaZTUKAgw4DoEw2w",
  "key25": "5N8D531j78rq1BZMnq1oYWjLXoYMy8GqzBTLAVUgcfB3w6fDHLdq27wKFBiG8hc32ACe9fWGLgxMtTtwXMts8gqr",
  "key26": "3fyNzPzZhTNNVGV4xAWpja1GzKjLwdBAMcEn859CEfH8B3kw9MoQ3P1t7h2XSGrNP23BVwagD5fPexzDffcRB7ya",
  "key27": "4AFgfyxPz2YqgVJGYjQBVHU42RznAmDNpqeMBfiEYq2YQhBtaghzR1PdQZnbZKpUpzExkDCqRP783Sz86HT9UpEc",
  "key28": "NHbEjMvwUj3Chn74sC9SMtR7x74QAQ5htztW9ohqupBhPUkW8PgtzeijBgixWJ8DzUKdXrsGYvbTqWXtzPmzrQS",
  "key29": "348a7QNthgnix9a1weQu6Khh7tmbAkuFLdYfjGBGLFmAPcDQVEHjR1PWYqBx3mF5BvAQEeMeapmTRjpZEZBQNxh9",
  "key30": "42WUPtJn49VRcD2sRCt42fSFSRPjeipk8ry9zod1BcMW9vAJnBYdDtSTGsSyy98QU4LaMoP8YDRV3YVejpKaoRBW",
  "key31": "JwFggGnjLbULU7Erwvz5XG2nH9bajcid6BWsa2dF9dibL63Egdz9Q1VnJ1QrddYQfgQZD7yaJLamTVb1v27Fgs1",
  "key32": "29mQEEhzqwWQCYCaoNup9bvBD7X8B9JoTqvif8HWG7DKosD12B2VaAB6kdmjueEYD7hhb7kesdBbmyBzdcsyT97i"
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
