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
    "36yUtKyjFgZKaWKbRrVCLCWZ8EEJp6emnS6cAFd5vHzuK75WFzddpihcpb1SdsbsUr24aFhaXmLvgb53uMaDGwVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dPmyHvR3CTPEu6XmtjgVWNYYXwGSzDMtYQi6xAGTqt6BD3avNBD3shAk9by3maBmNpjTxsxWPQiJA3RFaV4trY6",
  "key1": "4JFP3WEbKfHw63vZYxmsiStaW299PM6mU2eTUi8eAHFaYxS8h6RcuEWtGJbyCWQgYGcRteqk9sbW4YrGJ8CoCsum",
  "key2": "4YfeoGCUusjaN7HZ2NcJUGUNqCeQvYCTqkMGSbvQxxjMMyvEKkeRfBV1aRDbf3ebBENV4KD746PQ2BD5r9MdJafx",
  "key3": "3GDXcuzZXvkdxqgNxBgSne1aWT5dV3WESysLQyzDm8apiiQx93VQkNH6r39TkuqRfHYCfMpRsW5YwjU2NPP4Pr93",
  "key4": "2ALnnvgWFwQQLpxetZ2CJsj1SZMzZcvE7eTsKcPMCUt6nu9gL8vW3bp9epiTu4peyjVHLxqjo4BoiqsBhLBjA6V2",
  "key5": "hx8CUD5G49h7BciuxCXyCmDJixfkvwZqnp5wYdGTSk7FjDfFkiryGDYmYGE3THMY316wAKiHDay84sLC9dFQrGp",
  "key6": "3T6Jwy8EBP7fkfnUbkoUL4YA6m9puHTSv8TgHS5SV532dsjSeKSAHDodDS6XhGoF2kKvk6uMv8oFEUu564P3EGXY",
  "key7": "3G3V1eXXdAvicgPshFanPv14XgFLE5NFViRs6DwmaNqhoYqqUcs5KauN8G5N7Dcv2awstzG482CQvw6L4ChbgVF",
  "key8": "5ywuJfv5kNaRW5RPZQDh9DEngJynLMhopRSDAQq3oNTaEnCjgpuzoq54B3aDoEUD4tUGoWtNxGo1maXw98SbGBdH",
  "key9": "4FBD14oTcPjBmoE288sHcmx88nGbrEzvnYTKW9cXjnRuUmj5eUhdouK8WSnrfEeUkJzvTkYSAfXkuHpUnqaSVduM",
  "key10": "26iwyddG6hJRxNxXv3qwWPAmcsLngV7NeQDR1gRSjpVoJKZRHmvLXzteSDyHwMJCWLvewRFuDCgCFnY8Qsb9oXPg",
  "key11": "4v1M6tFHZ8WyDxRE8ogx78rk2hg2UpHokDNvGZBhuPGFrFZbFueEyS97ogtqVk5ZTYwVPPpXJUnZcHbspgbWHQbz",
  "key12": "3RSBLGc9CRGhfNC7sQR6oCQz2Syq19fTF9pHueZT8C79VJx2tyX1QbqxFU5A7CNMuZeocyWUsRyE8o5fGUhZnMWR",
  "key13": "2YqRentYnJNALqC4DoUkeFmMKvdA2FnrwgbHpW11NoaWQh9Sa3jwB93Q5eZXHjSeZLBjLy4jehjgoiqzBiQPRJhz",
  "key14": "UuXpiA7eTJYLWFZUYVy2jvRfFH6SK3bWbCtQakfLYDXDYKa7RiL4kTQCasxHQkZ3dDPs7hgwRKtJzvU7zJT4gHz",
  "key15": "2AtXdPeAZ1QhWYuY688Fa9a3MMS1QshoThddTEUdUsRZTXJx7kXxvXQggoXR4DtfANjZHtwNZ1LiqUFcKCXtHyLU",
  "key16": "4jaMWyAbdzE1HpDWSEUsDQf9aMNAgd9WZunuUgQQnFqXg3yHG4o9hUg1zVBvRGMXqfrsoQWS8n7e12ZVd86nY2PH",
  "key17": "4V7TeCYRZtF59bA47VCrSpQtL5LqVZL1gfUkQWSVaj2414ByCY985ocQpkHv8ZXKQoiwHDYigoqsRXcXBjgcJr3F",
  "key18": "bSU42weA3RbvFCNwyNHCeLsERoy4u1ku2eqnBP8YLDAiLYk3cTia1tdXKt14qS5KYUq4A4fD7HUZND97SDSymDr",
  "key19": "3NNwVki9b6hLBXj5RndHxBB9u7N5zL66Yu1jF9in3T1XEGVziPk2Bba14MKRvSrUrtfNSRKjGS3q1Bcq5YBYbmCx",
  "key20": "5ZV1ZCq6uX4fkU9RfPGaeXDLYVQTKWEa3oncNpVEhTmsCtW5Mg4WJNW6XKZJHZtzC8Yza74kdvB9mrwFNghGrt9u",
  "key21": "5nh3ZWQgEmAZgZY8WuR1tWVaC7GbpqWdbatmFX529mX1LhQ1Q1icdrcyyzArfw4Nt6XqeQYETxaZ4R4JXx4diVVP",
  "key22": "57qK99mGrddXs5E8jVFdyztxBEdSqastkpeQWThmE9X3aF95NdqoSPmjy99TkTWqQGpMt4ACz96oJWheevChUVsz",
  "key23": "5q9dm91ARQm6341MJzG8qqWC5xT5TqmrLvkpB1gVaaKYEHtNuCSk1j7cYJNszdVyUqpsHs7vw1Xf4HEiJ2cBZajD",
  "key24": "aEWEyPbQAQBaF74VTanNfhaqohRK3FqjA8rpFj4237cP2n5r2xh1h7zbVnmQVkoC7nDaENp6RhtxL1NZAFVwVSg",
  "key25": "3wefdMHxcZG9CnA8fP6s5hV5evdvzNwRu7scNro783sMLg1Adk9gk1XnQqhet5zpngapom1yfLWinV1PGivDbcXx"
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
