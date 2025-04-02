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
    "2Jr76qUwvioFZ2Qmah8zTEZoscgC4anx5dJcnaohWbZCsjcumyTv3xXW7LQubo9d4dpPLTQTZs9rpnGrojuAAy2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RV6uAGvxgFDN9CPXg9g1dCuw7AUhPTx7tTN8neWj8AepiZvyfrq9yEyQAE3qLRKyLheL2w318DwTuLGYkVXyJdK",
  "key1": "1TXgCjYiAKE6k9rQTdkWmDeaTGeAoVjrJ9nVEV6zXHDR2aTBeUj5T2TQCAk1HXxkHxsBZm9mMzRZBqGiAbnhM76",
  "key2": "6bRCR1N3NARP51jeFaVBv3GdtPdea9ov7iWXcW6Qx4erRRcGHGYhVtxBPyZBGLqSz6UHoVW67RowuvjazdAnrb5",
  "key3": "3mXbFaR2fc78zjNvN5qu4uAL94B6fhQJEACDR24LecGY5eEkpxHMjv98ehrfSReYPaSGhLgWcKmC2SArysLiNoWN",
  "key4": "5UCwXWnGf4oUUdT5HarphxvRqYJZDCyb8Ee7NWhshcin2s8GrFK96g5hd3wN3jBSj3g9ovM5b6nSdXYJSLMGd3EE",
  "key5": "2WxALPQqHvM8uHBGbzRw3Fsqprq8aRBMHteVEshRfX2GWGtNKHvUbtvhxLNVhX1rkNZhYBwn6ejMCaRLoqNSa23Z",
  "key6": "KsNCq9matFcprcMDGZvShPQRvGC5YNafJ6d7ThmrqCLHsjqr323GsECBF8GoaLBWfkSBDwKAqfrNNAxrsqovxTe",
  "key7": "4f3jA6XyEeezbpu8fYAUznHrvzPYhGfC5skV3mqXgvmpyGndsCGUjWNwRibiFbd7pVz9LqK7ys2Drnh3cohJadj5",
  "key8": "48q87dnPfT8AzTqCY6csjizWU8owsqvkw7yctytnDWTF4ce2c2ZstZxoJTMkTKrZAwpovSU1Fnu4jg7ruvfXAJo5",
  "key9": "5yMXkjLHB3sTjkXJ2ogPQt5nJ5JsQPoi5Df6d2xMGs2KnbjMXoA1hAcnNqDdtbHKgmpXsFyRorN1j47hXVZDBUn3",
  "key10": "4SDTyn9CPNTEpvYj55BsEsSP9zU69mQMUdRXoe2UV9nWbQZxycVgrdT4zLecH9xt2xnpzRGaakXyrfnBTKpEqNBM",
  "key11": "4mKzZS66ZDfEPmw9aV4KdzJoUY51QBC292UwGFLMeYyvm85LNcA8nBED9DGeBve2gbpmrndazv2TAQNCYxpKPnY6",
  "key12": "2ooWZHPrPFkd3FNjfMEYsBneeKaP7KnFY7GMrn4THL83UR1bVzi8aYGbbormqbRDZFctuWpZPu2tLgpiwn9Zye6M",
  "key13": "5QBGCuwNEAukdUXDsXeZGK5Bys1WpnUbAZqTfjubTbeXrgLAm4xnkVpqFqDWhxgBVBJG5EfnrGwpxQEhxhGdFcQG",
  "key14": "3c3NmEdngCNJRJBiLAyDTmc7SCx3LdKyT5BbhaQB34hp6vY1dykcVp9dLBJYYroY6aYxdSgVPxaaS3N4KFbxkaEF",
  "key15": "629rM1LynSQHdR68jEEFmpCEWCn89V7MTivFaUL2SKSviFYhd1s2MSEgk4HS1btMAKjQkGmqTQt7dVheo24d6DgD",
  "key16": "23dPSjiAXBzdinhhuoYdq17hGVvfxabFs5G4KfhM2gPDkiGUq1beGjts2rGPVYY49Rc9xjCP27U2VS157oVwMvFx",
  "key17": "Vz4Thz7pi5S3mNFTNRCKZDKqRC77cS8pHkZFAt5LesxfY6LPrTfdy6KAY7CEQw6nZ8ipTaSbdMYm3mCnE4wQuL1",
  "key18": "27xTBnz7PBcujHmv2TTeW2d7TV5MGUkhLWPRD92xb5FgZkAVVzM36DX5pfjNySoErfihHLbbgTBQabBptpfCyUVv",
  "key19": "5GdiS2K7gsmGA5qUQWmhQ3hogUCSvrR6FVWBLstqxM2d444tLLCFLvr6xakSz3qQ49ayJytY3y9NYafqmh1EZqf3",
  "key20": "4n5ft1LaXJ7xF3LxNhmh7viAQCTzbV6d6WdKpi3Mo7rB7cs2zjPntaxxBwo2X1L6i8nbMLB5v1YTbtk1dMvhuxf3",
  "key21": "2mxZPn8B6AtabGWFS36sHayXbgaKUNHTHqGb9wK32AoRvoJVg3z5rC693R2KYNNLQ3vwM1973XfTvb2fZPvQaM9K",
  "key22": "9p1f6XqvEcJrwUGaVEbGEni6kMANbam5KDrgtkq5NRZKzZYa9hCMsm8zbkhPJKzuLGVqxGB9PXDihtDpcbHbqkq",
  "key23": "XVG37Y2CGvQjjJT7wMUpwZ9j3z32hSDZW9FJrKAi22TizA3NwVKHSTs921bYiSbuzUMo4BA3MdBtMFXFx7gY6yg",
  "key24": "3zpfHuTspWshm4HGRPLkQFeW3Qsku2FZn2XNajrtsmKVSy84opkdS95m4b5BBGfxznuucB6ePuxVNGXoWZpJsVnN",
  "key25": "othsbyduAaaYu1Rb7DkMcBfJZaCVoK3NgWgHo6TbHKNj1wBH2fse7Z12L6GnNUNnv3mLdCL7VS1PVLPzPA1GQxn",
  "key26": "4uKE1tYYfr1McAYgnqjPWR8n7xPpRuRZuy1gXCVh2h3xvDjtr6YZGj3LQwA7cc62gQHCLKbYj9kiLFBKPFz3aGeR",
  "key27": "4eyjkyUqv8tFPWEVt1FBPdDzRE8AsTYnTBgZ2Hqauk2Y1msALgtaf4qUzhfLZz1pqN5q9YPoj6YiXSJCf78dVtjP",
  "key28": "32PQ6CDwEtxNxHqWz9CzPGCoZdXMhwTZKky3kgHiEwR9MyY7ypVrRN37pF5LSuLT6QezH83LZMEVS4pzK3X6NEiM",
  "key29": "2Z3hZHRvieK8PgokyZRcaycYQyg7jxwHqiqUdqX8U6159x2DUXiY24u8ioi7hE6gvEiWXg5vA5BiV5Hj8F8LjE76",
  "key30": "4yo6zv3ZMSzWZq1xh4tBRZCxDb254Ke5oHT6wTmUDy53w6aAQ7NvBXtkEfhehzypbPG3XZoZXhBiz9BC3zvS5NUp",
  "key31": "1kmetP61i3byZZpzUc2ozL3C63kQFkk9CUnTfZUJumpYwPkW8irmDyRq7h2sPy7ybvjHKGCMaZL8cmqeKzBU3mT",
  "key32": "4UyEQFprndfmvKQkemhccKcw8pvb9guRJfYAyoaXqC6gtWWwzU42jbF7YFBna1twqjQ9Z84dUgypKABRz5C43E58",
  "key33": "4MrhbSDA6S9yvzfWHHER76d1B7BXQzDSFn3MbMS6D4MSpPbKM3WuHK5gZvkbPFQfyvnoJR2djL34kGC8Aqb74tf2",
  "key34": "3ZDEsXVzRteVNEsUtKqeLhFohsCfBVU33Ppfg2pBpHZ8RTbYtjwpB7EsDrnR5CnYSRrbKuQSd8bSdv8TZceyox34",
  "key35": "3c3U9PnqytF6MAGKxQ13gytgCgBzwVdVtaXfbhQ4AfHpTiDKPWkn1EUdKMwb1FZmESmjP2qEWaMn1JzFSeM68QrL",
  "key36": "QXw7dHnBUFWqFXmNWh27WkJCCaycnvC3MkemaN6xigC8ohzYmbGDD75jG7ynQoyp9EsGhx6AapdJtaFEbskbVBQ",
  "key37": "E4ggdv7VASfZ6TPVaN5MUm5uh2Vor9vKXtXPHZotRQg56JtWU1usRqbb9g3j3hEYSourMpnAy4UFw8FxqgfaWZk",
  "key38": "2rwSuTkAqohtiLckcDcuRkMMA1T1zMnPELuJHkMfTt4ZKCcpXDbQcxxKe62zNpDn5ptnJFnCXrx6nhs8FZn38BbV"
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
