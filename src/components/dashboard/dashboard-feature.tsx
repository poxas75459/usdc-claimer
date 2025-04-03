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
    "2JqsdaezqU5Sr8pCbkdZCg1uUQ45LrS1bitiex2nxiEb51bcABEzN7UXeWbwwAadbnzhDFC9pdXpW5x6cjosGxih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZ3sRgAMkbTpNf5pFwJsCDyMqiwFs64HTGH5MrzGTZkoVKWg1nLPXtF5jR8pXDecndY1yLZvYAoPA8AFn87xQG1",
  "key1": "X2xAk16e5mHhGUsZ1JVzzvAx1UM1jRLcwDdEVFcWNF2UBZcNdLgPrQE8i67w5NPSr9dPmVPSjYjpETGEMjnyKMZ",
  "key2": "4Dvqyiq5a4whPyN4kMVZECG8EcnBBRgKu3vYQBaRzVHf8wLQf2dVpNZpaDrpQFJSBS12Tqp8PBfBK2foAk69xSR5",
  "key3": "3Ez2sNYaiBYJo4Ah57xcr3xnZkjP2va1TsAUTP8WrtnDtnrx6Dhna2FKZFqyHEoM7aCW3ZiDTBZxfuRTHahT7Aj1",
  "key4": "3ndj2q1PuKk2aPwDSA3qNEdJfwMhtFbPV8SUYXcwHvV3YMBZzWyQEJSG8g4H8rwb4zzscWrguj6bH1mJ2FALmd7W",
  "key5": "hcabD9XSxxhTJKn7Pnyp2kZQcxQ5727wmqegBWFRVa9JxErjtDcm5SQN9oCSAR9aU1zHsFsuJHKbtMQEdDqy4XA",
  "key6": "YkgpMHRpqFdtKJ67D5LyECccGFLCzch88E8b9WPwkC3srxsjzFKd7kDE6uUtUNxGtRrQe7dC7curKd6szgWVXua",
  "key7": "4fx87oJ6EfFAD7YYFFkaA1FmsBbmLisHgXSy3J9ZaDiooUQQuQq2Pz2kpXzmZCeQ8kEzQ41RL7L7jSH1pvcDnezM",
  "key8": "2FrY8NKqZ4WgoEiVo4dTMBq5R2qvsAFC6C176qvkmSgUp1XQy4Hg2b7nKbQxdAzywYe7YNoXMUwkk56EEsM3dUSp",
  "key9": "2zBZavXm9hmF5cCU26t2rE5FrE2MeUKhHNNVxrDkYe2hHau41QwNteN7g9MfH3vw2MX1CAdoqfxEdKBoN6MqSuzu",
  "key10": "VKCyTT36pmj3ubwhrk2S8T5v46HsXpUpM6m6QUmUAs3rPQAcVp8ktTHvPnbrcQsVbYQ59LzxPLBHTmbfEV98dQG",
  "key11": "4yrRcKE6DFAYjjfg3mkFHHoyKeQwExcmbXm6wJKyWf4y1PxGgMSg4ruipne9B8krodAC7SERnGchWbSPwuRYg8pv",
  "key12": "3ncem5xBHTafUzqHfRHmjXDeQpxKVvR63rHuPWyPkx3tPeEmYguju7928pDexvDFm7J4SWevWxUJsnfVRsVzkxb9",
  "key13": "5TXdzuXnNcmBQ1BTbzYcHibxnctD9taEVdZE3jMb643Lx5DVdK9MvRN6jeGTGtvqsRARDZSn3Jas6MZZjq32dcA7",
  "key14": "2aJKyQgmu4XHP5YZECBLufmfGanzsK5PGi9xgg42HqEXQmBM4UWMrqUir4ToaJ3WVH9o4g4NuPLqXLTAJcZiJuGE",
  "key15": "4CDPebHyaB6vWv5oQn9htEcUANGsoxu6HEVPED8a5nZCye3kVmMtUcvffmngYmBEzomY9ajAXLbbLcnSH8YsNxS2",
  "key16": "4Ec1J8Tqacm9YRPgf9hHzSzHYndBabGNGLrGg9fJRXhDRYbTubyznVLQaLNTpHRKdE4SpouiPHYNs2oheZ1bMdfC",
  "key17": "XhMcaQRF3y6dH6yFFSqezd9EApkSVcs6CTHQstBkUnztR1sua4kTHtStm3PaJ6EkqyCBcNPsnM4SVD5DShUSzr8",
  "key18": "3qBreu8peWYDFLMsMG2zpnAM9YmDwSxZVXCnzPdE9q5DxRZ9Q4z1CVA2M5yRYMTJsGoEScw8fATFgywKdSrAxGHW",
  "key19": "5K9ZfgFKRSodLjUr23up5kDL5bE4fxsnaMqFLnaQgqnBruuj6wbsefAFXy28ukLXs3vbydXyo2wDdPxgd8bj127J",
  "key20": "ubXCH51xvitDB9dZsST3BFiciqm24Jag7NEvbAam29Wp9FAASAU9nke9FGNQsFwormsYTtx5KZhNHjrMJmoxsUF",
  "key21": "3smYhHmXSor6B3wmdZXy5YrijzYLnUo5PWfedANLNY6qXZ7S2R5n1cQ1VifTXqehAjLtZJrNZGVKfPRFbbDf2Kgg",
  "key22": "5mcN73JaoSzE2rtnJr7vXo9pgeqjSRJVyaVwJryu2xQSM7zQmEr9SucvRZggGz3tFvWV7h1tFU9J4cwMvaZwzmwy",
  "key23": "5Q1DHF8tjEYbEvr8FfnApka8wuVXBvR8kaeDoM9qHB2dWK7JUVuDtrCPdqGNkJgMsh1BnC7Bv7MRSjc4ZjnDQKRm",
  "key24": "2tZHV5yMXGLUCtYLbk2xYQqWWX4EPEodATaVNxJRUSHvHCLXFpUcP7uJGZcb3r3Q4cG9oQTFsxyE9Kr9Wr6pi5P6",
  "key25": "2yHa93tTFVV9E7TbCoxu42PKCNAaciYrwwuiNdHyNAzfucujSvA8HoHsaWAGUhPCBYCiS6A6mTberjANGqeWXbZR",
  "key26": "5TodVBkDYvSZFtgoZsm1LojN7JSG1vckHViT5URVUwHmtP8re1tzrqKQZeAo7P9mvqddMUCnJyhp6RoAZF2nrWE4",
  "key27": "4kfj6MGgKJVTcbte8L9JWKqTjxwkc29YPMdnB64uUAQZHMxDD128WhY5ng8Cqoff3xfgq639yQEazzzpnQu7ScV3"
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
