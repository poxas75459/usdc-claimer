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
    "31Qt57igsxxCn9my2gs6N636oE6ZEyTBBr7qCqXBq2P8w3ABM3QrngT4dwQ19GYjeGTLX2VAjE5Stsauya9U8Vhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpKGp8tRrTQWBym5i2v1ctZGLbTt3C4EfqscPaj28EJtz4GB3sojzEPKcpN2UQJG2TpdnRZWm2YkVfFYoPzdCpT",
  "key1": "5Uu1UPXoy86uXNPkEtE5kGnEa8o6ySyaAhk3kVkVYsJqwK1nCK51yHQEMpbC5md8hfjdZzxvzgAGME1i8CJAcZTk",
  "key2": "5SnjhxFRAFmWPqm8pB9wXtZyGGLGnNkQAyDtuwEoVYzrt78R12mKSb6MBMrS57TFjZiyUwbze35wak7mZBx9wNsx",
  "key3": "3zhZNreBTcvZYtdnVpQhux5YPQh8AtiZzCf2PJPZpJHQezL4SvUS5VZ818AYQgVU1yc1Reewr2TRZHe27TvpUcLS",
  "key4": "3D4YnbvTxnFQVMrutvVEMk4b648fmkKmmJew3SuFTFE9aKGxZqNVheCDVSnETgn1Sv7jDfpaDXnC78fXKcvmB5gh",
  "key5": "KPnSjCmWwqrbuExBngq8CmkVUe4RbGumr8Yeffo7UyxZF4rbPe6D26p8Lpupj9TcNpTphxhm1zdmTTqub4urQwn",
  "key6": "4EFkxJfa8zvbbdcVywnGcMjBdYJtGj9VDHFK1NMZfcNsseJ4g86WxskYX9zqG9jYSEzk8srXUKrymWkChkpkLVCe",
  "key7": "2aVz19SpdycKMDTizJf7cUqRWqBqqoxKNWYbCMFBCersdc2gChshCerwrAxB9CmoSVTfCd26oKDGUkG2jNz7mgbX",
  "key8": "3e3joqD8hYVy1z9qVPa7wuqiBojMLRD9SfQjK631vjgDRxDvvkB9NZvJyYtPLcwfzNZb2JD9Ve71Q3UgBuBJf5Kc",
  "key9": "qBaqosTNTGGgjJvDJuNioBafG1rewMpcybRuLjY5oRab5Qg92GCUKgQfBaNJ74t9H7axcUT9pzieC7GjAoHEfY4",
  "key10": "2H1yZ4NfaSk6CtSqWTrkQtuYTAHscempTwHYTpW6jWMSzRi4JCJWij9cvEJ8G3GnoGQjJEp9dBpGBLCxruTpYFpB",
  "key11": "4YMRfBudHE4jq6zE5GZBgW9fv61gCgXRh5o7vETFnLekQ6qeDpXZX3rRsvV83ZjLWRyMoS2HYBW6A3DMfG2Jcz4C",
  "key12": "2gjwiCgZGUYTUCBWw8Epk5VoQtX9o65t7GxjLmvfLL8ZLjTigXjtQhiVnsRKQ6L1n4hxa9wm4B9Vf2Vf3jvjSj6i",
  "key13": "2Qzwv6eSmV6i6PNtQx3V3uunQ6ku3NuAWe28GwpnrtbFBW2eZ2VfEVXxbNnhqGKoaX9yBNg3behn5btESbyH3KRY",
  "key14": "3oYMnFqqaG8nnSwGEJHgbhrBpMVt5R9ktb7YsS1aJzTYx8CKbEyJTYVNbUhFeya4kECeKXAygUUD1KwExRNxMFbk",
  "key15": "34WuVy7BK7tdWQYv7iaPrgngTMNhtibwLa6CZQ7dWXZ4vwevo5MimrFMJGLsgAQRjm7xRiixj99czX5uYc6yUFdy",
  "key16": "25vQqMuSQjPfgYj1fWQwkt2VcJQk1a1rsXSzRv68onhLJjsjNh9duv4SraDvoZB6F7QZd16eSd3qfmuRy2bpHF2w",
  "key17": "4LMKSisoCfAPC4JzyFQVTRCbxVAQj2C53GtSUj4T1a831p2djjzq9R252gpHMCJAfe7qhbENjeGgfTDF6jyFYycb",
  "key18": "5J2wS81NkKUiCWTeTnwfAGxR2P1t57tfvSkU1jW1LvBSPYqfMLoVMFvqeH25SaxC5pnW1NDC3BVFMu5zKiwLnbQ9",
  "key19": "4AZh4QYCqZR3dked5JgK9mvELgHwjMjXLyoYNkDbhRC4ySG4hZYx81UtW53yjm4siSmPRuiho6AHsaJAi4Ad82QX",
  "key20": "5owtpAD8BYbeJpg8LxF47fAPFfxpjanNdK43niGYDxZVcjuBXwEkcYZDg1cW2UMefdAouzY7MESRo9s4NAAjRtaC",
  "key21": "3HENv7TEyM9z9WJyowuTigzapSru1cvVYbmhnhpvBmJZsW9u85NZprRVRPg6cxibHgRdDQEwdvgH5n3B7xf4hseu",
  "key22": "2UieogNo2JNaKacxqFH8RzpHCtkgP11iKph9mEbPTzk79xny1bEjMYEAYBTT5YZ4GCJxiYb6fQUsCVRQNVg53YNr",
  "key23": "Q3xfbtPoQ7wdJwhB1tBPDv8syPGcxKSpideNxBEtdkJMVm4J1s3EQoWjLAKCH2NhtPxiAsdxhTKkXwwPn2H9HcD",
  "key24": "3MvU9AF5xULq45mU52wQYyk4sduU9a9V234nKMhA2wuxJB69P9mP2iVKUZ5hH1BvAbZ7CtgfQ3mRxE3cJ7mVUbur",
  "key25": "4bYwCgxAQ2ju9DT55D8P3ciMcEGNS7ibTmr4J4wgZLXdd8MtyxYuKDyX5UDxQSmfvFr8pePwpWL5jgYe31ATNMkC",
  "key26": "3LxuKsA7vXTQJdiJqqEA2rKkiMMjrv7ER7Rtk3Wzrt7E9J8Lox8tuj4kGF5pYfhVzBC7FXvkhq4hko5LBRDt8ozg",
  "key27": "2CZYcsrp5uwaQEp7edF3naNXoHkeRtsSmoCotRZoke4QhqAezFfnppJZuEoUkdfNcYRjkq5VP3AQWZfb4EeGeTzS",
  "key28": "4LKWGzk1PJ6eNPwgD9r9nvDEyvdM51zXkrgx9q2ixT2oTLN37uQKR2k7zDUqfpVb6ScroA1MeUPvoULXzqUTtW2s",
  "key29": "55oCo6zFRicZNBxDyhHjH41Jav6UY2fKMiheE9v5Pg8ufDWcGV65HsK1XxXCCDEiGdBkUruA5oQ5qWGeoBr2toAe",
  "key30": "2FdeRrjyNmtMN55K68K7xwX35X8jjbkozJXtHpa81tHqbYToFARJdW5apTNhY39oWJx9esAp6pmQbgWkTVhEgnAU"
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
