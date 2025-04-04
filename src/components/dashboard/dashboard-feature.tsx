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
    "4on4rAJqQqNxgUTTYqVVkHjuG59QcVo6NHUVgPemE1Spcafvcd8GZTEs7766uPFruPz3yfHnDiKSeMdWdTYredEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXhQWcZLm1UfsgWgTmEy2HFmLkKgYadEGbbRbrJjcSeSHeea1f5jFqFYg2TBKqdCLSrRFmPwnv3G844Cd6rdNHf",
  "key1": "frAsis2Z2MB8Exj5D7YtN826SEsFbrNW9snrRyHsAGMUKvt7qKUCzk1Kvqikr84ZWn8F9Ced8VNjqTqnFTowACi",
  "key2": "F9RB5GqmbyvVupsViFBubtFSKZVmcgZNuVeYwQsvo1iWd2H3FtLgGYYhqNjcUix2sKh6fg3GHKqUvnqCRnD8Nzh",
  "key3": "5LkZws2afmCvCGytDuBPsw7naTK5AMbiVY981DHQc32xPzAPXRiA6SrkTbKx5LzEShDcnMCmwz2QANibWXSLxTT8",
  "key4": "288haW4v3gUGduyyh3vXsQWfDK7vGZPmACnSbhosgsGhfbXbvprAxWjS9rGCor2D77MXcHWpYtXzjXqhtZ6YVHqk",
  "key5": "3bVxbCRsAo1FVeSRLqZFxNAgLavaCwUkTkBkiRgfihXj84pgzPoAJMbJoevTa6WE2m97zPtRghAYhFJtSG9xp4nZ",
  "key6": "5ehsp4DktmCqjamEBfYUChdvYFGugMZqt3VorMDJRfj89QUA2sndityEkDG46yZnNMcieHJiqcSYa7p4VFHT7eHh",
  "key7": "4mEwMJDz4cfLuzBjkohdvQaiJqKNyreHy1rNQVtML6oeZAecaHt64dwRaMs4zRgBhjCHVkvTvcJwEPcXgpg4Y4mh",
  "key8": "62gx9xCLXsh27nf1nhPU3cVuEKQq4jRUGybFtVLdTotDGcnn49T4EHjFVP4CnVhiMGWxVV7AELfKQB1VR1bCyFbV",
  "key9": "4CN2FxfZDiUVRoEaJcL5xQ3fh9JckSqeMR68xq7fQc4sMHbGqeCxZEZ3yRE8zzc9U9GZ3KWTyctCmBJ86s1u2GxS",
  "key10": "LhyDfLmXV8ZhABC4aJDbkuW3ACKDRqRJ2L3XDfN7uNCGF1VoKojW6KBx7vDBLBXGYgDrhJr4RkMNwd2JLiuduET",
  "key11": "iVza3xEKWFXYrgGVceEoGhsW6yMEFyCR5wiQyh6D1Bf1nKAJPjdmUdV9kBEmxfEL9vWPSZmck9tKbfPSU2Ch1dw",
  "key12": "3DJR2Kgxr8sLTBnMkiEsfc6MAto3EfV5nducijK8ktkA8kUaxGD7Y39TV7ZcwsXVpYAxY4jshv8tHoUeCBPsG8Bj",
  "key13": "5dN1cbAFwe6wGpwM64ie4ScQwA27pv7jxGC7zLTkjns5EJD5n84KWx8BaGaRk712trBmQsE6kLtPz2UivTEUJFWv",
  "key14": "2hmeGJ835C9dih8REboZxMauPq1iM3bYxCaJsrKoUzPgu1K3eWaAjo6Wvn4tG11QdjaEgJXQsy1Ug2JE3NA8b7Hq",
  "key15": "5tXw4rXVajkeC5pfHsUtHKDtMXvSqw5BeQhRWaw7wxgb5DJXyubt5yTqCpp7VfwJy1fdHRaWFVWkdFyeEaGrD7Vc",
  "key16": "2hrxt2cpYKbkdNXbHoDLgeMPS7dVbRQNEySCoeTGMe6GdA7UrxiAG2qH81X2Ru4B2YUuoxrsZimSGg7nNDbCk1mj",
  "key17": "51R3PUcSx3cDPEWNPmmstvVz3fESbHQK1qLhzT89wnerZN9bQ6sQMZMUPbD5LXdqyAXTnMkG48ejXqnmwF38srB8",
  "key18": "2VGjzKdcDswTAk2mSu3ZMdMLQKyodMWm55EQYB1GiJ2ghSUmWngVc6XnjTaDUTrxwhFQG3DVPKimyEPEYYXAv4WE",
  "key19": "63FydLeesp2zghgMNpFwPyZVBMmg3RCqCJui197BrHxbSYiZ4Ev9Bmj8Y7YVCCkpLQTaKGkSR8xKvr6CxENUv43c",
  "key20": "2iNaGDKEk5pGwCZkcr4ucci7NpzCBcegeJ8qG6JyXnHEt1NiV2JLzDW5SrPU1s3DtZ9j9otKudqYUV8sQq9rSU55",
  "key21": "DDjH81ggUsZGtTMWQu197MA1ZV1qRpSDfKSAYubu6o6abWkEn5SVFonGwEB8gPkWdNmwrVS7caSFVdkd4Xvhwrr",
  "key22": "64aYW3EKRj3Mt3zbD6Xcs5aS5vDBycsDpj9cn2te2wnAupWWvdsGmxBsxwQx8SFwKU5yU6N8tF3fozESJSNzanh2",
  "key23": "5YuSGUdqBVuV5qxGLmUUknPcmTkoBmuXyJkjTNDhZd6A1kqcwFVMWzd6YzCWvRhLeaMRQSsceKTBLrjUSwzQEWTv",
  "key24": "2phHyusKbqY6HmRAyFLNPUkNwqZEwa3rkJq7UvB2YKKPWgotm5ZyZvfcNBYm99e1quSHreNQVD3d5xqvAYVtxPPX",
  "key25": "3gz7nXdwptgdk3mR4bXKmBfSXaGKVSaFy1q22AAddNRjKdehHYwiuP5rYoyWrZjPHALfu5jb9Hbw6pMqtRdRgCaB",
  "key26": "2gRqAeDbKvFcwkU6KZyYXniJbd17Lemai1yx5nRJ1uyUW3UTL93SCfbhRuYT8zXQWg7zrcbSGnjYAEiArBCRyXRD",
  "key27": "5daNbtPc53JUveQT3Rk6eLRAQxC9wafvGtQwMePfbGAGwQ9LM84MWLs118iF8e9pJBifPppzVYHZtDvvtmUpLZvq",
  "key28": "XCXxnBhYY3k3WjbjtVdZ8opsKuZRaS1Wfag5UJyiPwYcR839ns5wFWSup9muFJhTJBxVQSEhLUH8fgqcp4ftnSr",
  "key29": "22KuRDMLKrfVqkMyKfCiT64ZiYswZZsoyET68LsVvgLQbBXSCK2o9UNv9K8upa2svbYVMUEPN9nSa3ZHq4z9Db3y"
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
