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
    "56z41NPYQCZduPkNkKbt1KduJ413QvgNP2FTdMMhSs3xHDs2MhTKgQeuJZ6DLbotVqVExeL5W4gXtgTrbWMqNhdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39f7T591eE11kLihPfGbNKnkrj1xennX5Smk8nqV3sT6eRiiJxv6spMVyMmMRfXVfQifRWUcHgf26eh7LA5nDFvA",
  "key1": "NsgeFX3Qbm5Swytud6i4JTRW9QHhWsXPFGT5ErtxqMmsqkBBPS1NC82g6XBhHU1Gis5uecoY4MNrW7urUUeNbLo",
  "key2": "27eVvsRwBq2NxNdsaW6GkAdV5rZubMCFkSJotoTSYjBGgJuUPEV2w9YzkuJdSftSaxdcissTpMwiJhUu6UJk6zpx",
  "key3": "62iDnhE77mo9Tu21ehC8hmY6kbTpgrrbZNeKQzyym7w9rf5bsAubjXbW2eLqzRFAGoTxBcgzi7HVzPZD1s72mQJz",
  "key4": "5yHLgBBNEkPSj54JGXKX4tZF1resLoG79nxxENCFXNC4uZWt5f4oSRtcZ74Lu7knNDrC1yVKsriyL5dGbtWkJTHY",
  "key5": "3sMCfpcNxH6hBcfSNNsgzJhzppU2JDcdXNCyWkt8DPgZeY765BNJvo49KL4gXRk7son3UqLo4Jn8GvbyeGwE94Fj",
  "key6": "skw5PLRT512GMvcCZHWcosbfPgWRef3gwrrq4cyvJ4bmVosMepDYuqx2TKLHWF7mq6FCQnynNHQV3p11zh35KCi",
  "key7": "3JXfFpwJbbgMQY4UMnX5SpoRi8gxC56PnMTY42T3AVhpbskht4a5Cd3EoYQhZ8XjxZBbtbXdrLcVporppJcVX7o1",
  "key8": "4gfohJbtmDT9YJEBKzdRs6VVqkg9bkTSziPZkGAQvM3W6Ro8xfe5oXitHyhViyZL7deMtYpExMMkHDLoq86QQKp2",
  "key9": "aUSU9LiztrahELjt8N6AEbxeARWQzjmkcFbrbkhQkdhruZFaYNp5LGyYqSg6Woyf8Bf8TMo2G2jtmqNzUPxm487",
  "key10": "61JcfVc4jQCuec754AGGy9mTCLGG5TJDDQke4pCkPLE4CTkTdYiuqk5tVAyac9gE5tTbQtQhAZ9uJtrZmWzkfBu5",
  "key11": "16NDTLumif5Fap1bJD4WGAsb65zFT6jyx6S2EZdHP5GHpv8cFUcJAxEBgmoC2fXur4SZYjx7f3WZk6pZSiUhrH8",
  "key12": "5ufm7FnWxDqoqbjM24vMWTxZxntwhCrNFJ52krAFVFmjEB7qRE5a2c5rKCNnd46Kmh4jjSh6kBfa2eHqzgLtDZEB",
  "key13": "66emA5Rrwm8xfFctF8PAxaLhRFPXziJeau62N7kD9BQrPoyXZsMavdDK5xfNeBL1XvUKS5SHZbGPCAuT2xZz2jt6",
  "key14": "4PPmKDmb7F2hvepYcHHMitNoCTpsexNiA1DmkSEy5J4X8zXy1z1zf89ST3yWXNMMzkaTyGxv6Ad8NJHQgqqfwwgq",
  "key15": "4HMiRRcYZ16YsBk9sMZWkEFTMDBtm9V3Qyb18zcvqAdRJ5RvMkqCxwW2KcDKNEq8EiBtMzXSiwWELdE2f1GAUS9a",
  "key16": "5p6TCxUKAGR1AnKUUPJJgyQ6nFiXNfdsFbsnMr4oCPCctQXUJeJ9dBJqkXRuTfakwn3RmnRitueBNz2mzGeiqwaH",
  "key17": "2yLmf7VqZGXa53oYpu5GKSySQVgyDZVQ4fAfSnd92drSTwmaUGQUrtmMVEX5Xu2PNU7LagpBkJEZk8Z6X7Y7nNXx",
  "key18": "5V48UVHDcCAnxSmyHhzwLZSvDxj36RzD1rMWeibge1VnK8yTKtbwkt5LUvqqoFrb4ptbWLsCGujJadX6wptcPgnN",
  "key19": "58n2Mo5K7TYgjdBhazYCDcmxWxgeafH6PjusVh9hYS2Ci6SPSSmxekNYJm5bfn2FTcMfpuCK7JFw3psex6uJv6Hi",
  "key20": "3Gs7q5EzvRaczF5oDmM4GHJM7boGhvABeDwwzas1hjq4WNh2vk5UxE4B4agxjee7CbipNvcwowYuizL5iwdxiwWS",
  "key21": "5Z3D4148sHWauBq9hTpnbrPjVr2eMk8qgXh6xrfL9MdbwPprkmcCX5N9bQsB9umgk77PWck55gHUqw3RP6x3ZCud",
  "key22": "4ScuD7B9aiKQzMQJWrg2ofcN1fvK5cPNN2KBq44wajYR1WXvVQJHki96TNZA8SKm5ekWTvC1SYED2r2UPLodSXNv",
  "key23": "2nktWdH61CLQ9z4YNS5iUtNg84AERAPW3MnQrkYDNHg2bZdD2dcqtGwgA1jDUBsgrNtv6U1XH9pZosLiVLdNLxwA",
  "key24": "38CSgF2nJ9UrL9K6nAdDhNamc1P5qmj6rDFV3jWQ48cqHdKgiS4xotCBw95SiRbqLQ4Ruj3SKERgzCfg7iMqwf8C",
  "key25": "63o1tV99bfgmGHVz8yzTUPkqoE5T1yjvkSXXogPCt9Q3N6btSTWCBqfq5NUGKyUF3ujQcCJbbGeLWCSM5QVnH6nL",
  "key26": "46pjBCTB5TXKumGcPLNJAZLcnkLHNA1wTJSkdb2nBRtvC1cyQXFQzyM2AyjQ1QwmNf9D4yr7hCCzqMvLjiPYq4hf",
  "key27": "5HpPqDwAmUn4eTDNmdufyHkUncqcqx2HcRrjWhtpfDXKW19yTxdCKAZyzyEeJ8BM54VrdfhdcJCkV7V7zYHD84mQ",
  "key28": "67NYvViyszu361YgY1e1LYhPwFKxngvuEyfNerXmeqLeDRCFKQYgLrsCMfTpwDBZ5uQu4DZs5Gv2BLCyyVNppEhA",
  "key29": "4rbFU5W7BzU1Yjoy3itGnWQvtJ67PWhpynQBN6JWzdZNAdsQ8ech2BukVctp2B4oG2ihXZZUVPqMwMRe5KFFDKN9",
  "key30": "4KrhwXq3XUQ9joJEk3vEn1Q8GHmmqm37z6f1VU99u4v6UPKtjNiDmGg7qDwLCnnGKXCehthn9G31hG3cgpwzJcXy",
  "key31": "2BJ4eNqPJi5MR5G4c35VhnJ9HCnJRK9jvtG1XbLSMNAoAayTFiWeZMjgzqc87Rbp5ahq14FyHkfYhfPxtqWZZZos"
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
