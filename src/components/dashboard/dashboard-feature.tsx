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
    "5eKDoPWrimkKYDbha5ct7LJkHW1YjQUF3jqAj3miCfwbaVYW1qNjEm49m6vJCo4Utgs7zTjfjaGnPBMVJQhT7ztF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UW7fQgR2AqQ5JzLhVmKbPnrHLgqMVNENnCDyE3q2Ya9DNjjEGSe6a8oA65xdMGotCNK3kU7bW7kNAW3humPghjx",
  "key1": "39Yhakckg4rFm3Y6KUqmzYqmwWW9fgzf8QaPvEBEnQ1PXDHMiM1JWPUANCLvdoRircg4J4UyN8xQ3AduPaguhvEa",
  "key2": "TwuoRETUEhG6g5EcAtNccm3yPd9tGVfPUMpFxVyacgiE6kjMDg9uxcyS9Hp6jqm9E4eUbiyh7TXAATKBcYgFzdZ",
  "key3": "4kH7m8pWNi4aQmGVgb7xn8N9LQGfk1543oKtgUXPYTJsaMdhhst7Cwt3vKxM6edDvddyPWtFE7XxeNKVoieWq8Cq",
  "key4": "VjSH3VwocUATZeZjJuLtvHPbfyWPJeZJZFugAa9qgAZHQ6p51QFVqCWU1RC8VkLZvFnvkEwD2PQ1xaDGc4suMdd",
  "key5": "3aowARsm3vmGi8Lny1SL5RTQiQLbYWX1NPKws6W8Zdwe5YvzQXXoBt1bpcujDKxPPsLScKLpGFbvnmacbxheX5ex",
  "key6": "5SBeCBS1Hz6NM852hWFm6KgG5sj6qgyuY18AR69tTysGbBsHsFVDtGLb5QDL1kQfzoehK5bGvM4aQzLD7S7tqwoL",
  "key7": "GCczdQxA31rCdytaHjngqHjwTp1sfnxXPnhN29EVJWxnfG2o43k5tRwcvPrgENWmWDwBxh6kjF3TMoFwBoPkZo5",
  "key8": "54iJJ3kuNEucXTsHnWVsbUGDSChrL8wTHxip3NSqbxqnfK34vM4FhzxhKxvvGXop5rTC7t32zdasZpHtrJMMUUCh",
  "key9": "5dH2X9Gke7Pk2phdgKwbR1P84qCL2B9VEG4Uf69gMn7zkWgpCeqFoY3HF9umThZXpBZ1oWWLEAoELGJE8DHFBYF7",
  "key10": "4WRF5rxztWVgc3oMCgtqeg2P3NfTs156BEKkQ7z7DXxkv35VoSgV3CcwFQMaZGctUwujt8xYeifNSExN8JzQfLiQ",
  "key11": "2o4MHXwSX9SBX89X8F1fi5iUiXZVYnTkDnznAuA6swQFgLiJDw1mi7iim8CGyj6ZCVcKLvKsvyZPinozvrvBJg7y",
  "key12": "CGaH2s4em4cjFctzfCnvEz7utBZ4ZRSkVNJm9ybC4yNhzxBKZpRaSuctjnjqVS2Xmda62MavgPApV7Mb4zmfa4v",
  "key13": "5XbYpm9Uv944cxJc9yc1hYwedhpJjqa7z5cHnc5YmH4mDWvdopLLRM4g7iRQPFCqNvLE5oY7WWwjm9w4WYcTr7DH",
  "key14": "3oxWjYS28tK8Ud2XKbbKUU1EjfAGv4s2EpPcqjqbMZ18cn6NhFYYupnSkMHWMPdziYa2KGJLF4QMy8uDHmFNsvyF",
  "key15": "2r14Fjimzy5m9u9RYGt67ngF6dZvKPmAQH8aNL7Fh5e7muYw7FQA462eyMAUrTPSgBf6ammdhmBHUfEuMB7fuNAG",
  "key16": "61V8DrbAwwqJQSDXQtB1HdMDKXEuzjZi9XkWgTwiYawH8PenrgFWRmFxvJumrXJZpTcdgm4Z7VwLvg2afURcBtiY",
  "key17": "X6T36ys5funiXaoopJkmrHTNbQ3Tx16uD3hd3L59ZTt4SwbZqXG6daiKHqnJ8UQXFGfSo8CSY1ErxDNgjACmq3Q",
  "key18": "it68u9tXmhUoJYdVbQRBrBRUwdLNvbuWs31xQfCFAMW3RteHgXdsfXGiSvFa9aD11Gez721HN3XJVtDvNVtAd4r",
  "key19": "39w3ozkCPk2YH5gHFrcLqQRPPBN22YkiP9NQyJuomRdLHz8BmSE8dvidfRoBcG5euYM1ACUCm8m7sceJuz8k18Bg",
  "key20": "3fyZMQSPEsczra7ChUmyCMAwkcj3hBguL9G8KZ3biMaRRtQEncnNHPkvbhvjMbaXKZRHdyC74pGo5jUE8Gw3k424",
  "key21": "5oYEHPhpyQfgRVSk1XX5dwuX14U8b2VbyP49VBVQkhEq7LkwCUM3kT4xJTuG47Uh7L8sWczX8UQAMN79Gq1zjGMg",
  "key22": "3tjnJWz3EFTEk7ScJ2zeJaE2oEfzXFL2tX97TSLuRAnMhgafrS5eWkVQvmsVy17F5yCyK1nyjXQtFNj3nke9VQas",
  "key23": "4r7XW87RteeDVdHgyomf23yZneyXYXbGnk3BWwsU1Kay2Mpv3WcQehTkrbdbTTWZfs4abLTKu2smM56DBxcrAvor",
  "key24": "4ufcnVG15V2mRNKhmJ6oFVBTUzPBBu38SdQgLNTvezDPPqhkAMjhqjHok63vu84F8e89iyLWQMUDyfccpYriXMNa"
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
