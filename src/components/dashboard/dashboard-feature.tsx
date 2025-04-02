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
    "38DJrYQ7zoJsi2cgKNNrERqsRshs4Mzyoi7vogcBmWjt92t9M1oZSPJfR9iqkZe3FreSW9J6T5t91WnAwg4kcWqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRkRT6Re2h3bxNVCWyd4J4zHXfu4biTVzCWoKBjMcuPUwPuvF7SShUt2EKQeoyFMxLseqDGzpnyKYnQtBL8Hyei",
  "key1": "5Tu7Edx7v5wqYivansx5Uc7UEPgarhaQR2ry9geuZ5t1oujCsCHMpYUPdDq4d4ve7dGvtSmBAHi3skm2eBXN98ST",
  "key2": "66V5pfN1om1Yety4nTF1N8Y1mNGNAqpVP65pAtfBQGhBqFR1C5d5BLJJERdUr3Ld6mWwgd9pCFjdG8332uiQnM4",
  "key3": "BSqggkMV5MiWQ91ozCcfpCaYPDKMES9SU5UW6keEZgwCrrerGcrS4Ze8WdhZvqQjxvKUXYLdFPV7pbWXFiGuuKg",
  "key4": "2Cv5hBwmDphMhTxnvFRjbGN8fpv737dqaabBL42YVLfeKT1QZsjMizXJN1qRHsFbG2CS6ELpGbAQWj9Avok1NrSX",
  "key5": "2KHGzBnaqt7PsHUi5xGsjeZq5TooEeEK4u4Pg6mNqNQJ7oKJjYYGTp4zu6gcgfeVYQeqWRTmyfDCfZFQny67VFVL",
  "key6": "3ogyNYQ3hVJ2VoJ8CzfAJZ131HsuaQojCZJWx9eEt3ZFR3k8ug3HUSrkdR4m6MJQNAM9SkasuT13PV3PWEBUNhvZ",
  "key7": "3ZdZ49RKzYdZ4VuxNiu1xMqbK1zPHSK1bBooRqCPkSh9FsUqWFkwRBAHEmo6yPDrniNgeEtVkM1cZfRd1MGvAiGa",
  "key8": "3Dww5a4u2HJEwmkVcH4xRmeN2Jz9YChMFHyHRLV84nCv44yEiinGBkR875yfwMoykGNWG3J7TZsZdi1RwffPETT1",
  "key9": "2AWNKtkDuK2PbWCF5hdFGmmsY2mh7RDVCqedcWTfZ64HrnqVcFDf6pQBQqcTkSyFMXX1ttKjLpVNvr8yb6Ut65j8",
  "key10": "42PJUsMRwBqCGPw2m6ousPBZS9NrBDVgqpq3evusANFMg1n9WfvXek8aLQ769VyQuhTAAp1Rc1a8EC8Gc4QKUqpf",
  "key11": "5cdtQBs11K8r1infQjnUi58dREJqPdaXbNVoUo6bmaV4paY7P6MPMUi39GW8iik8me4yzXQk1F4FzPeJSK2tvr5G",
  "key12": "2ZxpEPqVXo2CsygtNM58VhGnKZiuDMR7aHp3LqhqDm4VsTp6UmVrL5SQjnUT3bcid9KkyHiu7HvGoWqPnTUiYt5o",
  "key13": "Ln6AKRdjbCqqu4XAEuDK1sHzuYFWKNDQZZfqVwkeWLyBzQ2Tx63UDvZakT1nvRL2zqthwpqvjH4jBRnZwgY2ywr",
  "key14": "4SGLoWpxKoMeZqiMsMJ3tHdZw528LuLPrZynbXYyBqx3viEcVSQgTcQMvxzTgKniYvgmiyj4k5vRm8dvwmSkK9XE",
  "key15": "2TQJNy43k5Qor5AnQghSRzmsroJo3pQhFFA4ChbeYy335TNhUQu58ckRLh6LdW3LLz35qcqAXnARawT2mKim85Xh",
  "key16": "3SxBRPqdUhhCVsQfwYBvsb63DLYKrbQtjqbNQZRmWQzf4egTnwGHsrR8giewv3ZJLjagawAN4Rgz7dWRuMqSakVp",
  "key17": "3PXSpvMnZoZb7pZFVMJv6ZMNECsVeaFeMcmENynF5EN5MgmQtwVaDBDUhA4AST7k17dBwXb7S9A5GZaGb9MpRoGh",
  "key18": "QW1qLs11dGiwjYHtm1XnNAXh5V5MyR8EpTe8kwmsTfCYMXWXXHJVtjhTpVVaxG91LbwaKMC3VsTRgAGTQY8gc5g",
  "key19": "wLaciDoJBfBt65YyC2VAuUbVpsRcfPodFu3Qdd32ew6eL6h585jcSnTzJHYjLePUhsyE2gs8PMqW8FRkTqpaBtm",
  "key20": "2cSomF6WKaVHUGfmgCLA3LrRTh8x7JXV9HUbqikSeZXcinYm7gZyHfissP7d94oYm7DGQmw7ND3uxp9T3Zr7SzEJ",
  "key21": "3mXy7LMCXAS4oRHpNatAgtNKJGHrqv7uHEY4UDk2SKmjZsVqycMgabCg45uRoucnLBbgdY2sHXQdi7h4UfdXeoyP",
  "key22": "3ACVh3LbyWabw2vEgSW3ZWDVjPG3RHgLrNuu88XWwJrkHCvKH17iuhGXzY96TGMN5n25US7mChpqFkkifwskKo4f",
  "key23": "RKbiJbZxfxyvmXf2tEHJ8Z6QkVBgeCmL5EnGEEvoGGMv8SpyZZiWf3nUpoNKZGipWQwAeKF6n6C4LLrWL5q3hAL",
  "key24": "fy1AahSauJ8swwoLV4KAguNGAY8H5FKGcoNdFjSGLogTyitT6r2CTAMsd5za5CK9MLAx9yxgCFAN3izBgXE2w3D",
  "key25": "4yLitvTVGyTj63i5dU7Zj4xkPVCxmNR1xzMSGrtN4Rd9MhYv5UGKRSjkV1R4WGhZjkYBGoN7eXLjv4mTsD3qeu1P"
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
