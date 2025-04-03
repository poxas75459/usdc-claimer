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
    "2M1tJSsGNhSMiFFZVxEsTXXviWrTD8jzKWcU7RmPc7wdC8cYp5HXeCJMRxbr41FpYGFL8K2DEr8PjSRL556yMXG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPWL1eQQs1QRSe1avnrDW1UmezQHPEAzs1fMoSrNTYWJbghqzr1J6KoPhQzM99JGHF8WwJFjfZg6WMcJbssoVVk",
  "key1": "5PrQxXnk5M85V6UaBkqStRzpSPTJSqujGRCBX2MEQ9su9uWvwPXrYS8QozXsz3S8eEeaAez53pCd8BX12wbGwgTb",
  "key2": "35fPcZ4b75ZE2mdMumVMWyFDZXQvB523gkAqNYcVqPmHZUTyarMJsp35iGgYKMhbC3YspmfMCg9ueXXVQqxTWJcv",
  "key3": "4HXmSvkYnjMy1v3BhW7LfYDzgZ9GAEcdH4jSuerMGuVYdSA5FK4XZApR3cZk3m61mCK31ygtARu2Ecf2vAN9ibwG",
  "key4": "5WwRTbmjFUPzzrnrp2JZzDE2bvNPw9yv7dVSWHwrJiRoPQjchKrZUjRJTEoojnXoSxiy8zJMtVKCG9hhJMYxddEt",
  "key5": "28d9TEpm4U7mcLrVEkV2eLR3MPoFEkZcRDNjir4RjmTjbPfoahBUb8RpBM3Js6Uzsn6Xy18iCXUHmHjyjZksNV3r",
  "key6": "3iip9cEWGhqhCFbSQYY5ifwfVKCDCnkNRm8kPxziStHimSzY1LZSdkW8fXLCNCJkSZBynqM8suWH7ct9HJ4pN31c",
  "key7": "6rVnGazL7gG33JevVMpQNSEj98TzBeVMXN9BqRfWRRV2coWcDtuG6iDvnVkBEUpNsGXKUZQwvHCZCeQRhzpzecs",
  "key8": "WAme2DieAkorHtqX4oM2e2teBMfcpbMf9ZUa7ZsDDVLz7SES8F7AUwm7NaXzGaQj2L6KeE5mptmrwKcxaFGjEHV",
  "key9": "3oAogMnHUeJPAE96N3rtSkZxvayqBiKPHnBZ7bbuqHB8jkt7Cud5X9yFhJsezD2JjZVdCBtRQWfVuYBNcuqRbHRr",
  "key10": "3UDkGz9pQiYZF9TF7q4jvTsoDviwtXtNYCiA1Jhc2dPd7xzvqw3LGLAucT4VgHPTQ2WkSMrpWejy6GChJizVkUmk",
  "key11": "PbSwf83ouDcrENFBiivZREWHHkoAHKb4hWTkX3tcYN2hJydfwSvMu8efqEEptZeB4RA3bsPqb7xFgCz69dcQsvf",
  "key12": "2JT7N9o6YwhhBGERsPPVBWXGepJFXoTYYLFANZ4AWbHwthKXGrvdz8bZGNe9GaoBXzpGKvXvEXgXDUezv4W7ZGAn",
  "key13": "tV19Vef44S8cHosKnKKZoxKbDyK1bLFaJ67WzRtAaK3CsZzdTJwcYxzkx1BciBju2dW7iNvWH7wikenuTcgPGtB",
  "key14": "5tKT4tAu3k1pE4H4sZCVRr93N1CNHvtWNBBBFvXYsqtc6zUJjeH3w7ZEySit9c2LJdUGKmai7aWgwkeyJqyxXg4x",
  "key15": "5b3dKSBvSkTDTJGg1EeS2aqf4H36bommzYJkPpBkPqXbTjtDi1HgvZMDPsUym2eukzrpHSRf23MA4noL9TpenSD2",
  "key16": "3ayTyacrH2LHRtCPcoXkgcUwdFgbJhq4L5YKyb93RWK6LWdqMtxUN4UeoU3n26poHEd1HySN9LAdaEmKHL4sbwyP",
  "key17": "4SxZvqF6c5as1jGsZsJ1Ut66ezrBXNQKVQ3aSQMR5tYhfMppD7VJTTGqS6i9ZeoRgXD2aW1q9Ui9yTKgcVnetXGn",
  "key18": "MrTZPmeCLxSQrDZNB23wjucqd449wibcTybwyYPMnAyR7dV9WVro5paChgMUp6BB8AY1iPLeSibNDDb2ZgrnSKk",
  "key19": "5kWriEhqFPsi7d4FnV24tkWf8RUAwdQFnqgN1bb8CeLT11ZdTWS8kY3bhpk4McyiTZXaF4TNriPCfYogmExSYEwB",
  "key20": "2on9QQ6RoPQpzjcTcfAM5vthSQRyrMM6bEG4BFWYZLRjRgzJsg9LQxTp6cAohEtF38LcVAJ7qnKSsWkJjK95hiXc",
  "key21": "63oofeJRafi9g55aj1PHQUz1eNLs7sTrRiRB4Ff5gkk55t8HASGcaiHS7sz1EU8xfhLWXfTknVp9PBmqYNv1d2fQ",
  "key22": "23WNgUuL4sM7GHhTVYeuwSxb9s29QuhpaqpGXXnezRZYUoxJQubxUNWzR8wfa98BBScAtxM2RdjLoErYz4YHJdvB",
  "key23": "2rowYCiEniwt4AEVycnTfXyKA21ue8HJhRdny4qRb4KG6f9959KQLGH4xfWtxRQUhifDMUd6xbBhZjUMiZqJyZmX",
  "key24": "TyHPM2BPPSPra4675rxPKzKG452at3Hzqynt261syL7W8bcqqnbuNQdpmYJypkYJhBsLFNUyXAUpYgeKNo3mha3",
  "key25": "5vf9Q8aig9XJE1hVKoVsKhAifuPTvmsLbGUhSsAdJDREB3WiiAq9PZcmpuzhNrAFuH3iiKeb2gJ5MCoJZLLLoJPJ",
  "key26": "2uKjKyPgMXnWjhc6rh1CenhQ9Ao7ZTFg5bCikaZ9mKD2fsezwzcnYmwhdRPvhNicfGWGPmC3jx1jMEdzFnT6Y7Jp",
  "key27": "2QjkncBkskGzwCWdVdUgd9ZPsFGewM57oDHbovyeh8Njy5Wt67tuo5TUbtPq9UMFgSxHcWeRQJrrZSikZ6LpFhWU",
  "key28": "4a4qLj3kot9iLFgZoJe8FPgfnxQuuKU5DfddPhEqn2RSDA3mVXJVYeiA9njq3ZDhMpa3zWHHitcJTr4Hg6QSQuJ",
  "key29": "52kcsS4ztQnGXWSFCQasjkBNk2Ge8hTVQrV8GUohhCB1pvN8f2avcPsuCJi5KshrD82gVbxDfSj1BF3xmV2KapPt"
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
