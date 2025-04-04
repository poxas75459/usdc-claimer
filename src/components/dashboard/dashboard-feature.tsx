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
    "363gAGSmEKRQT76eG4woPVaKmJ69x6jYHHB7UAFDM9BQD5efCPehDYtGdZcXCiW5zfRKWZuevbuAQrD1Z4dSkxa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SdbV2MaCxFBQNEfvnSQ3qmG8rK52uYAr5mFMS3zRV59GDPBTWPereS2YMAdnjFkNK3RYvBPkJMkLvkexcrdTRqz",
  "key1": "5B8mQMBSTfmYbk1on68NEf9pxKTzVAJxPe7HLJJCSFWsccaQyegqMbKSGJvDnvDaB99PaKgoQFipufqvsHiyKxES",
  "key2": "2mwxvPpNNvJFSegk9RHHudFoKrhcEEsDbCPKUxeMQKgd7FoN7ENXyzmLmUXC6ytwEiDvpQfaFwSaS58agWdR7WyU",
  "key3": "2uQpa46x7c3mu8Bs29Vh8GajVFut8aDMv2EvSbPYwncVsHwQysVn7cWxmKhi7dih6q6mkxQRxnqYaz2PCMsTWazy",
  "key4": "38Q4yPCTLtY7icTpDiUSvKeWvNA7wmgtzBegwrtKUa1a3AEjQaQNMAoAzD7oa66PjmUzsjxZzFfmxd2cQow3h77P",
  "key5": "33zFNGHUD4Tt5VX2HuyMEsp2HmreV3XjLfVn6ARKgrzok4YS3jW9Lzv2BVE6VVZtyZjiUFkHUZR2Z2QbsAr5m3Ao",
  "key6": "mRLUwHbkbKuNCvgTDm6HW6YMBXsiGe9VteAYQJunL1iRLZaSm4CAVvysRpv7TPExq6TGNYNSnZ2CS2RwCGxP1R9",
  "key7": "5y2nkAmhX92A8hV14Ua3LhAocNcfVutQD1TF12wLpB52GrUwgPkaTjmUurMxpeiwoyx4pgzssB1nwz7hUjBuWvSx",
  "key8": "58KzKh8JH59KJZ6A7KXyqQm6LnAAo3Ptk9aafiVJ4fRFXvnyxmJbQnjRhTyCUAoww8JUY5hhCNcoUXkdKbMfVrmH",
  "key9": "GzqJLSJviU3yGsGXpwzgcXhJ4uwRD7aP5cUHzUFuTJgFfr6mA4TnnH44RACT4iaGu2VAkDZWwLUFSMqDbSaEeVg",
  "key10": "3bADgrNsnnXbv9y9e82iYjtc1WEKUnykeFPGAKKu6V9dxJPQ6YaZ57k7Sbz6ikFy7oLAF48LFW9pr5NBHnZfXtAU",
  "key11": "2HS4YqHzvAK92YJ11LNcTCM65kR1Vpqd6FNhW3wxZFM1ARFnDWvQXAUupoNd2KA26rseg56SFEwRJDhH7hZToivQ",
  "key12": "3aFMzzmseicp4Kec5yEN7DfvP3dwKZxN5HcmHd9WqNuBVzTWAvcDKJ29ZPLihaTuPNKTNnKRLmnzK8sLp4h7JMkB",
  "key13": "pXihRZ4iujZ1egBmVzeqDGZxJYFtHUx5cQ6zrAj5k3E7wGpyCkFpSSggugDBGtFx1Jw1Mb549m9azXD5A6ihdwp",
  "key14": "5xGzxUVdirzait89wehZCVKBwLQjZFYXoQGifp55cEyxhvh38bTupRC4yEnw4DA1hjaoRnGFpHFsP4gmTruinVMa",
  "key15": "yNr9jqdoFf1Pw1TBZ9aJa5moyQq4gMKWeM5FNUq6acvPe8TFop8vvL1oEEtMLefesNSPjsV3iLBgyigj8M1x5yM",
  "key16": "3C3xQyqWh1p7cCmRN3sqnAN9KhvENFYA6Eshs1QaT1Qfv85RVjoeRBpdzhMPV2XRKC6tmxQUt6Vvf56y8XRmf1xn",
  "key17": "27AziVGXXhgcKVH6s2iHYbo2EcruMnSfHz1njLnETYVdqoBx3xndYc6KtPiYGJqgj17VsVXNbyDi3nvrWqoD4a1g",
  "key18": "4e3s4adRtS5AFSWSMhZhhf6nqCsviFU2cdBstRabKEboNWXsrAL9XKSmfb4ysE2QMpyfVXmGtNFmQPHToX3TjSWB",
  "key19": "b2yy4XRLMRDZUL2weveXXwbjD8n2uWUBvTuZjvmgDVcx4EhTMgp2V4TutTEYaUZaKyy3rPV47mkLmsAdeVoLaxf",
  "key20": "3DNzs4fpqXdNRWQnMxZt5zRNjRU2TKqRHHVq4d9LthgJfgh6SoXMMpD3puMZV6u7iiug4cGFNjV9TJN8hSRf862A",
  "key21": "45c9bjX8DHQZd9pBPkBcc4XmR3FFSpiVFfkru3Vdc5i8w8L47sPew69Gb2LA1q5JeeT72BB9KkBJyfw7Y1sTG5rN",
  "key22": "2DkzR538KcSWqijJ23pBTsih8QVr8dXYBKgqxPiyr9gMVvL9zAtEvWmYDyu8VCgXF382iC7e8dAHCN49WEjpDkfF",
  "key23": "3gzoWiKNHYYFSoRfTYK7kDRtXvSeXrH6ozxyHbyJ6BG3kV9x5EbAgVreUE6BenypECcvPzKp2AvdSPujjKeN2zEC",
  "key24": "4Tddefkkc32adKDv6BfeDR3o6fU8JR9ZVVSeCgf4GSzUY8XZdCAzfDVMm1DsT5bsgpNnByV3XkF8rj4ZG1sexvkc",
  "key25": "49cajK27isGu1XYMrLJeh3Rg9xt61uNzyUQDJ1xqDLguHSMCPfQGPLy6dfkBxc1qTvmDWyKBw9Pq5ZPaiVNNgEBS",
  "key26": "5hZGBRtmcHkQ4LDWxCa35ebHwZ5zj4Ew4hA6VHZLCmNSnrAa2JXjfBUETUGntGxW252ztdbEXXmpud9wTt2peAzw",
  "key27": "5SWd69jmHT8Z22oqZPNvmNt861bmZWvvAv9hHS6CRLRMKbrpTuFb3NnJfgnBCKf2Axe3J97B54w6a9bGM35LAk3W",
  "key28": "3obkcMW1RSUxfwbLvp3E7pRoZQJ4JqVKK2MayWAmRKifWs7otJsQbH1ah67EmkHKZ5c8aczNvSLswcnFEG1n3cdt",
  "key29": "3Dm2BtrMczkCq8RRFBsXBJ8LQuSpsjoxzHrxMSjjM6AiMLYepctxTpQbf7Ckn4h1Vs3z1auHJKbjeSoj18BDK4PJ"
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
