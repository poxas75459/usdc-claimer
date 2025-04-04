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
    "2iCtkDfuiNwNVPomcpPRD5D2u2BdU67v75CV1V7isY7XHVuB2LYR1M4eKEiM7ESiNTah4Jq9B925nQDUs18yfDKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCy9UjBpMzYKCkGmrEt2i81n4jbpX3Upd4uyQKoA29qZDc6nVAfUQ8FGGX74B93urUcfierJ9gBGuto6oGoPpZ6",
  "key1": "bke2s6TxzJYGQWbrRt9eLF4tWe7zAPsw4d5k5xEuGgygg3ZaXopJtZhuKyh99SeUKdvA1SvQqyKPE8gTDsFnRSZ",
  "key2": "61iSjxxGFyjre1nYtFoL6wbJaWGT9nCmzG37tMHmfbzRhK5h2LvuJ9gxBNDXMviRg7mUZKHVj8pq1w8UjnzuTU7u",
  "key3": "64wUcZVdVPNLtB9Xxt5giqZGLM4AXoHvLhn7RiVjab45Fs7hEPk5rBvW7cfN3o3QLGfVn5tvnzqFafLaNUoiXLY8",
  "key4": "4pntWKyPjq1SWj4VTY6tvATE4bisjXX3QjcFyBz7T3ACZC9so6rLWfWxNzzZBsEwun5vDHkjcVn7v2hqxPmRB9bp",
  "key5": "61DREMzt8Dd2YKMsb7W5af4MbGdJE6h6gLyzBUYRWcjqmy5kSBPKwtPbJvC21NhHgcrQMacjCTpU9MwiV6WYFLvG",
  "key6": "2icoLNPSM8kxar3RCGHsVXzxtWmqRBok1oR5mvq13pFUHe2p6FLk17rcyAAEoQGnReXiXRiS3cH3JrKnT7nQvPVw",
  "key7": "67Lh4uQzqJqPqxQdGMvsbMmvN8SLCrVmwpAyAzpSBR8akTcRmXv9FHz3iwt53rNa3QXk4s7mo8adG8o7XQRH2Jmd",
  "key8": "3iyma2cGmR87yRfDAkgkCFM8A8YfbLEcvK6m9yV7QwxPv4t7Y22S2guUobXXeoHcbJZNSQ2csVydcDCZxdwBcQyJ",
  "key9": "3au8TM72auo65agN75xejvyhJqJCexyboKKMMidFU9hHzMoyTrFjd1wEaq5GBTSjnLF8zJTG5rTD9FnLTyeE9m3X",
  "key10": "5b97STJAFhf3SLMuLnWppAYvQ1JBwYgUWLLSFKE2xqngreCVvycxRP5bHyQ3tKxXadSj6td54xmPzcRyagPUMx4Y",
  "key11": "2LyjYhzPXpmWzJFm2CAUTrjFMrB7ePoN2dahhSigQntDC8J9kxm6sSXVM2Zuau4DakSX76ENwWbwUK7cAHy5GfeY",
  "key12": "3oJpS4NSXzMyrP4ckHdT9dujHsuDw6ALpJfrw5PmgS66pJTHAEHbX48nMeQszqrqqNcxcCY31Edm655dMrwb31FA",
  "key13": "VHpFnoc1rPAUQL5q71vPkFMg2LVW6qSyvdenN8h1pvHEb6WvEQxhVBN6Bh3eZW6c3dzeK2rfxQanhLXWvJ6fDMh",
  "key14": "3wTfstnXszDdv7HqhHmUTif1UoK3zGXzVGWTqqdvG7u8kSMMEX557cUqD3ZzbZNPdDBBqNHY9XdnhUao58hk9M56",
  "key15": "2qAqRX4RW9RbxL8UeSapeJSLLB3Lo5R9HxyFA6xPdYxQ39ucBJZT3nEHpTffkhH5iJ3sSdVfebfNrN6Mr6hgz77r",
  "key16": "4WdFZu4Qh5jxBykmKtjeaAsw3zj3rzr8msNtbjFCgA7Yw1X6C3VPNPiEW1wVREwiFprKPRBPwsBcAMSG84D6yUk",
  "key17": "27cEDdt2EfZztxy331xD2bcBr9tkUdpDA7YhKE3qBqGaqewwrFZ2o9fG1WV3QVUnoFitAZKs868A2p6em2KhVezZ",
  "key18": "4UurCxhBAxRRyR8xjEQ11ofVeTPZChU9D5K8eWWrEoNTyJsfAqsadzEudoSDtjxvX9P4XZChqK5qkZaQJfvsbpRp",
  "key19": "5oTCMXuSrq1AVDHENNeShBNz2zCXVzSYAh1X2QnMdjYoo5LXFperHchRbmpRKjdv7SFPb3Vmrthw98ZJfRsyjuir",
  "key20": "52yBAen2Xyvx2kou5YKN5X4AsKXHuHrQAxWenBhNnr5tx4hK8BDo1dzfKSo7GfMnCtrgvk8MdzTU2bHh8yJaD2pN",
  "key21": "3c6jPUBhfpdQsAts8qpMDBTrD9LVRSC4xe87sD75MNqwck1kjwoFY1j4QERrYq1mXgAEfM4xHEr93TQwFgocxvYt",
  "key22": "5Doot1qGSG7LzLUvJcmvY3ELD1wgdE2s8CRG192v7ip5jyPXzy7vHXzpqAikFVJsztqfxJmjbT1F9Uk5jP5U1cxs",
  "key23": "2ozfQJZkC2ZCjga1HoCJQrbyfrWxsCjd9mZapyN2WLGkNoZyEk56amtPXVHYmr1a2zMHuaLsnCcSiTvEWJaCo1M7",
  "key24": "2bHCRx8uVN7ouwetP4Wh9P79qottRhT4BkadtM5uLC9QXGYZ3hVNKvmZn72MsXKnQrbT4dN7PhbK4CJrLzxDcjsQ",
  "key25": "2ysKjn3XHERdx8Dc1bdx74BjKmRMGWs9NJ2Ycs2N7txRjyx3vgpu1PiQ3H8Ceveo31rLVgxojEY95q85mFE6jQMw",
  "key26": "5Hyg4bqzoZzWTWf3fsieWvWuYgZqr3mVcgE9qeRs7oGTjdAHn8Fca1hBC8t6Xa9tRgcbCRhVL11UJPLa8qQbU64r",
  "key27": "mGkj8hQwbudUXund3tPurYyyT8eUru5v5mLGR2KKzyi95ZiBKYWEqmzvpVLXUSoyRrn1dJSw4P4rEZccJtV64dL",
  "key28": "3bCpTvUkoyZve3ASDgXWNyoMiLeFA1gqXswoSVZy4TEMGDUqNaWTAagCBikhcWe7sC4ofvoVS65o5gX9oVc3KXBQ",
  "key29": "5VV2o32da2Fvzor2BvmhmuiramDvVjkB5kYA8jCLoJcAHnErBjxq8egNGbzJzDiXuGioZiF7Ubm3XTRxDZmUzLMN",
  "key30": "22LFBUid9LAzjC3EfxHgHc6haqeCuVaBZStFdgT54HFW8iEWGCVrX3uhKNwQU1xXFVpwWgGi2rAxbGrh75exUy1X",
  "key31": "2zXHGNcGrbZz5KNSc6ZSgHJ474zCk315Ugoeh7xZ7TnDWe2ZZ5MvMNSaXgwjVYTioSRfPFK6t4Dt3wukpS1i8Sqj",
  "key32": "3nrtV7pAjvVeMJCHaXrdnmbv1r62iU6J2oKJbTcCv48MCkxmJfQ6NRtcbwSH1bxd4CfTHwLGf9bgKuDnG6CA62AY",
  "key33": "4fnZjjZbAzS9jjKwTTTNrsmifzh2FDCqoJQx8AVVjtm77j9s7o8KAxrP3eVgGJodRCnXZBG1GwhG2NBLdRzgUUVE",
  "key34": "5Cvrq64z1v1gba46nreweZUtPmXmjGZk6BkiaDS5P2BXModuDaFDdFTFVDo5ae4SWeMx2S5tangbMvooYv1pvpYM",
  "key35": "2iPFS7wuZkHefi8WNaPACVnxQZHpY6gLrzcoK34Nk4qrgcumU6dZ81ptbA3Xb5NuRUbRr5qEtYqY4FyhontzRLJ2",
  "key36": "5Suv7jTZNSCjMNXd97qSqFfedPg2VaFdWqBPkMF9Pkx5S1Pq5GYczkiegJrJCqVyh5AjHCrFFYexpnKEdQEVCCqv"
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
