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
    "65R7u1gooRBi5i93ZmfaV19S6R2kXCx1Rrtx3Kn3iEZZdSkfTCaEHpc3oMgHRfrUZmhUGkranfxuLicwmFKy2Zjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iu1nzYagiqFDWs2sxyhAPp9dhsaTgcaY3WmwDY1tgmmiuCKvGw1vgTn1nw3fGUAdSvTMB5rFiAr9Mipa4G4fL5a",
  "key1": "3ekmjWt6XkZrKo3RmSMLPWjzJkaEE8f2He2bASYRKKMbrjYJ1NxwVHMfohgMkE4nbUWFXD4k2f3phCsi3pdLMsq3",
  "key2": "4NXzdWwYwicifsAxS575eVtWg3cCFg7JdzqDspm6AhVJNjfT1xuAWzRvk98AaAe5Cdp5FgoikygBT46CpxCWuNGa",
  "key3": "4cocSzXbUFx6VqQ9Vve3cgpG5gTCx5D1YxeYCX2jafUky6xZpD3huRnDGxQMKMMfiv2Xjko65Wso8XUvHpw8c72S",
  "key4": "2y755aZJxapbYugtr74TFEyqW2kjLDBAy4AwF38q9J3pNUNij2zkKEQtU7SD7bdC3UJUKmgBVPRu3YN7wRueaAta",
  "key5": "rR7AmCVPGZHN5HuhJR5A5KxgiKDNnSodSAnuwwEZbaa77Nj96zL96xsFXCwmTFAJwnAPp8yiYpvy4qdc6Qq41Pj",
  "key6": "3WHSthgJd79byaYRd6fRoLWnPRE2RADf7hymkNNUuRbNneTWWqm8zDFNCPtTmi54v1xCDfE6rJDnBiPY4UAfV5d1",
  "key7": "2cih7ANxJP5UxVyGwDGTZjt3GYA646Khpywi18AA4bxYEBtE6moYge4HBBhR8Px9HB3UZLnPN4YTdg49SdqxnfPu",
  "key8": "61RmAGBCWSgcNhfdtfnYdMboKFCrAEUs5zXGdPJh5vM6RT54nt26PQQ3F3xZfVzgL5yWZbtxqkR4qVQ8cweoaGZB",
  "key9": "4jYsiKRRLAyV19SFFW9vyDssowkELW5u8jpgKDzDj65MiSUgxLVTmhPGuRz7RpneDzZaGTMP5gFotSBn2zxJ1pn8",
  "key10": "2hscnDFp26Urj6LiRynSMwvEWG2tJfQHxWNhmx51hrm87uE9LpXZ7HyHSjCWPoqjn4162MiqkLsmK4WdENYzV8tj",
  "key11": "2YmFcJuqGfyxkzRB8emYxrG5XdoX9pHrSSrSPwoc3yHyYkgXTXKF6QBfKzUQdiZuMYPArvQQp7eWWe2Lcm6komxQ",
  "key12": "4kDFNNR9zFPaDPqe5KKDgVCQhWxuaobVSu2FsMyk5uzK2kF5dymi8yktb3izeUMhGCCBdCtDvNSkB8DjWnFvMZb9",
  "key13": "33AHnQ4BvJziCkhbfvF2diAiDASHg9WCoDiXBhZaUQeudxZpTGUJdRJXs2551cYzoAMR82CZCGzQ67222UL78hqC",
  "key14": "5gL526QmDRinDSue3xtaHFnfbW3pj16gp6XkJYhpKKsezKCgbgDDn1UGcbHhDt9D6LwYaNmTBGG3V3TDd2AkK4bq",
  "key15": "J5ibsBrXKaTAs1HiUituG6SxTy8yhGnNFRdxQyPHsXDyUYFrxXoXFumhRPDkwzn1UW6E33s4z8wgd3QF5zpgXqy",
  "key16": "4BF3jYDHsgApXHwDBT2Gruj6n4zDQFkWu3y8N71qcVdzxvY1udgGmFRsGiCbrpDATrtdA2K1WN3tyX1aayB3KubR",
  "key17": "4gonpQNP5nmow1usasFG5kz9kNHTSoCZgksoPsEWxdxigf5eAXwdspXSMSGuipRLa3jh365yepL8ubygHrFw21gL",
  "key18": "4ZgKFoVrn4NbyP1PYiYFWARanYXpSHPjVhU8bxhCSoTSJgR9fCTMWDJTQhWQp5T1QhnHh3Vq7ScsHfHhXhNMNnSC",
  "key19": "4xmUVYCLZtEn57g9eZFfs6Jy3cfK9HNx7r2CrKCgneutRrRPiT7Kar7SHesvnLAKMLSfTgP7SPvruuascS2SDdJt",
  "key20": "33q6uwxh1MU8BwQs9M4R5weqvvAQktx7QqVFj8CCvWswxPXgnNTPYLfKCHY6MjjdYXQ7Yu8HKs6iJShnEW1EYBQq",
  "key21": "4oQCm5dn9ppre71R6P6iQEz1ET9CTzZJQTiyZMAZEnGnif9jh2TFjNKEJrCBvVSDMh1SkXN3WmJMAr8V3421PQY2",
  "key22": "3F2jJticuNAdvAGC7FUexUfHXEHNHmXoGi6eEnWnxtGfzqbgqWdYXMCLRdvToFjzsCiCDNQkkmfNTzGf17bmnimf",
  "key23": "4dWNDBBqA4hCbxbFt16g8RqKrJA2W8p2hvBcyTCeZo1155wHunQRScvCRzoY1umGTu1BpvM6dEPdc1jTyBaNQ5f3",
  "key24": "3TfX9X7ujdAVCFmha83ynDAnACBbtjY1K67M6y9ydaGGPS68LciyQ5xkT7veVU9WHKvsJi3kathqZjoY1m8oSmX",
  "key25": "5ziDNMjXAAhfgD1cE2JUsdc6VqBLHJDzRFirnY9LudSb3XPA4rV6uJgVo5CPCSg41weN6WAgiqpT3JDiDAkkjBXq",
  "key26": "2WDZWumxDd8QxcJLG9JpV6G847zzb26FX5YGHnXNRSAD59f4zXEGYkVK5LpfZkX9XtJHHRcpvSpPQYh95ezg3gaE",
  "key27": "23cwcUaR72C4JGkvHop5S9fhsmChYo3jg8f3xmvrm3E6qagGzy2w1WMuibgRMSYKeny9VyHd9waCnNrCksNjakdX",
  "key28": "55ViRZQMbEaH47uT59xSeW9TXJ8DJYDGT9UWRk3tdLjSC8b3omvXAY9eenb5PvG9UdwJ2UKCCowqJmSGzQW4MPpz",
  "key29": "4TnJ4uoECdfLRaBUoXgmfXSJJRvzbrEfQBSZ7zgrLrAaNYXJW6yFheRF5ZmGqL53eahBAL8bhcE35RBgGrR943S2",
  "key30": "2a6KJTMEj7p2pwLD58FBjSX4htQceCEi1sv9K1YFYkeAvZHU9iGWmFdvdv5yGgXFX7oho2Koc7859mHucuraHjoJ",
  "key31": "2K2WNtCsTWVsYxXSYxBC5qVMWm77eVsyepcWYXozDLk2YU8uJcBkZWg1hvq7L3ohc2Utq8r9ExwiQvwLDkP5oXZp",
  "key32": "2cVwzCChovwBV5Wzn3RTxLv8hgpuZJLtQhNM8W3Cq7RHNUY3FxGdfnTpLxX6SaLfT1kDxNZcjrva2ib8zvcTUqwX",
  "key33": "2sSmxFWTPFrrpppGJSF5tam53QcarGCggbcss95CVN8ap1M9meymu2vR4ehXRcsuk81DxiRuLqRZUh5ecQuGceJP",
  "key34": "25FrD1i1zgLB7M7ohm34EJzP6QdDDb4sqftdkRVgVmkKQkXnZjUFrT31cDzkmTRPpL7QrbLrEope2wn1VCApVKgg",
  "key35": "7KDajrqFg7QPRBwDbXjy2Hg8frAiTL8UN5etpLftTQAs6yLGwtXfxCtwHcFaQiZZTrmUXJsL56FGBn3wCzhYXfY"
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
