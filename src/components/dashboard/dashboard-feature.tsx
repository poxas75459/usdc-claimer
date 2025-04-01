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
    "4m7DgYoJmgBuv8XVQKzA7narearxiNCqJRzP3vjRAzJvA38bKy4SbmAfXgkjWq65PES4o3zex7F8Nk3GgdEtUYa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fLTVbZeQb2k6RsgkAoWb5YBnjwFZN5nhW7eXsyYUDAEkxVD7gjjXNerMtKDKs7GCc5it12MAKVntiZmdgwL9f7",
  "key1": "5m52APiSVJgfz4TBnYqfhihmCQTytGPj4XEDMk8XT8fEhTRfjEMcirm6y2tCPGS7iAXfMQCqRQoP1R4MQQ4mz3mx",
  "key2": "4ujeHtVFS9qgZ35p68U1zLGFJLcjAGkg8iXk8dkJzeumHUTgzQdgQU1Y5TN9576HjrE9CQ2w6F2SZ45JsegnKSiG",
  "key3": "5wbryQjy3muz6Ajx87GefBc4wsoypT8jRQZUwhLH3QcXQoQiE8p36QbSoDdGoY3uHMWNtz5QLQUKGnZwoKqsGJCs",
  "key4": "3aPoavENAFmSfG2NYw6r5nKEdVyPU4K9Vk7RmL8f8aBHY7oj9UoruswnjhQLYCdEwQLMWdzt3GCzHAuHXYfoHZri",
  "key5": "2fWtiFw9f9uKdY5CC3ePpP5hxPreWXcL5VYC9vWBKtZftRbohyBUCTR4p1f9BgTKPPJDWFgPFSXTpGFzk2XPQVGs",
  "key6": "4TmYJnZhGTNQr4Ycnbsi5Yu3YRtU4yxmtzJ6YNkVv8BNyB3sJVsNnt1FtB9BwLBQAwhRoq54eNmhwBNKEs9VSiHJ",
  "key7": "5Ege9zT3agRGWSsY3QGVj7iS67URwk6cfPE2NDPFHv7SaASuusERmfMojp18zV6J3mcUkKJtxLE9EPBomWVgD9cw",
  "key8": "b3HGwE9SssuwU5XJskWqvo9SJ21BaRhb9NBFYFuhrtEmBhCSTdAQhXsLrWPqcCeaWZiJWR2DuJZYMcpnWNCuxms",
  "key9": "LW29BA5se5Pt2jNoCguaLCKSkXHERWjW2EJ3vJNGE45HQkVFe46VV1Gp8hBuMPy8WPmnLmfX7zCE1aq2WLdkCKr",
  "key10": "7wmZ6zY319fa8HKuCLzf6oDthWCnzKwab1VcMaMSakZ2CegGkY3c7v39xpgug89M5fedkaYzrgg9BHtyeKV9E7k",
  "key11": "3AMKG9Z4tht8pGEhzBDSBpApvWbGve73PijSuiC9ao7kx5iMWKHieov4jC1vA9rc5Nt9Lx48xrWFRf7kQutTDBuS",
  "key12": "gp5M5XwJTCga8V1DQDfdFmQ2SHNCjAYLkpyTwbWgApcUunERfNhnH74HFBdCGCqpr6RZWVk7gMzNNMuwByMUFwF",
  "key13": "3Yd5XGN77oZvKRQjBmcHqPdnghVeQn1XtEG82pWFmM7E8zuYVYnVgSH8XuLi1npa1cF9xZ1hYk8iagzsF9oUczti",
  "key14": "35tS4ZtVqQYMgUE5MPooiWec9cjFxMgQfbPCsdkmtdGjsozQGthH4rWYTaobFt3vuUwxFix7mKpn3ZAHWkxkfZrU",
  "key15": "4pzJsPZJvAaKEbfLQquqAyu2nJZLteLuEEqzYKdiuwjYtiEkWWYxDguBw1xnDJ9D6jAtKN7rsVUvyhVKYdNXHgoP",
  "key16": "2mboRcVH81p4DFC8cA2DRjeyBNEFigEQvXHH2XfJSFeLedmdJxdo2anXJkQApsyUkB2vBat7tFc8Ro5kvRtpP4wC",
  "key17": "CigiutzH6Hk8nJCWqcoACaiBDgUv9UkPn518C4f3mb39PkPNBQ3CgP336mnvbKsW82gnpsvExcmoMdG1kKpiKy7",
  "key18": "24ziNRH4QbRnjxzVaxfh1dkXuDpueCY57bMbxpAEwnhXe67E8Syx4Z4v4JAiLkunSmWaDd1r6SH7gpMA3V6gLeSK",
  "key19": "HQRLdKUmGcQbtM4g43BCfGJwEpabgBiXJLRNwUNi615X3WVEFHgSdk8VUU5QhieLdWjUrLsU96gNCTKcrGgGntc",
  "key20": "5Km788gr9qfJgtPGxMBf9SZgp86x8ruaoYRXKCKiMcKmuyKw1TPu3z54LKEMo1TpUMh7fL5mPFkMgBhoQRsJN5hz",
  "key21": "3ZnhETnSXXRx73BUigeuwLZk2QAsiRkwt5AvEHoKwibgR4ZYREEt5FUDLKzqvDKRToBxB2pXf9bFG3jiLpDz9XSM",
  "key22": "4CuAfpye7DpSHLAV2ynLcfwYwBiZoAJQkfjBC9WG9p6Lpp8sqCNqQDLBhak1VtfN4H95tSwvgMCjWH6MYAi6gcPk",
  "key23": "3z9WRiH7JfTg8EpJonZShtVXSkvxQwyo1p8fe89ZTHrkNycNQg7HFaPm5f4E7n3zkmvWmwutCucDMpK5Xg8mtCVy",
  "key24": "4t8G2YkqBxErGbHjc3nT6YobYFih7bjyLBn8Na5HubgJb9DCJAzYa1G4XL7TBZ9wK4TvVGRVwX8NCwTUzWrpZ7HZ",
  "key25": "4Y2qtfyVZSRFQpFNqL4Mb2sHbvY9Rhj3WjLDEp2yw2iBEaKHfEZYm43q44Ld6fLS9mk41ch4x5JgqYtiUSMB4ADG"
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
