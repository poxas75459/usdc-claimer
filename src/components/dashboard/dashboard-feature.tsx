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
    "449w7MJ4aM5EfhpnXsFsTGvEp6yBguGyn6undzBHiU9jhEMhbVRb1WdGtvH5xCrSmHpeqo1DSwNoPedvF99kBNAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AtWEaDpaQtt2kucyYHPyWfG7e8tnPzcX8Q858ySN6NXdwEC3BDeP7x1oQgpQtK47mgHFJZWVkjPf3waeAhQEFva",
  "key1": "5y4n2yh2r2EZawiYG3cNMJ45JQ45whZz2eDG6GP2DigSysfX74v3tB5tNFp5JLCxBECh9mMAzru7FfXDx3CzHzvV",
  "key2": "tWCGHN8upYe9kwR4Wj1mLj95pdrQYfWSGE6HtjQ2S3xkMNcoPxEADb3kTqZugekKSrfxDm6aQfN1DJPQZRX9fuX",
  "key3": "2RgnzW3YjaJd7uDWhj7X9GrDxYZVGm8QZJjkVvNsiEMBMk5rnEY5LQqz6pAmjA4FjJExZ5U781hMSxqYCtd6nYLL",
  "key4": "4Wi5bJ7MeJmbfuzUouc8M6Lnk3k6bggJAJTWE6MEgzZqc5EjGpcrpXjEn9CecGWHL1EBCV2yQwrNwDzhwr2Q4vt",
  "key5": "sRzKaVbfZkdjjGcVFekbKH1Y2xUroLcYUCbfWUcxhVyc813PncME2MVEVTQBBVRZtWmZzFZXYFbNMrbmc6N6yB9",
  "key6": "44qhx5eNSRJMX6J4KRfRgADhbsDjymHEbzLXBR8TDmU4QGPCLJ6yM1JiYJXpRYaE6T44fWou7qYtQBFTxS2gzSQi",
  "key7": "55Vavv1LAGyLSafrqeoRnxwkmJMyvDM792D9kDoKBzCsJ8aeHgtrHudVNYucWxMWnFRpAyHnSAK85zk8Si3VLV3Q",
  "key8": "3VECFgsBUNUMggMJMvXnFmM9cFX3Jab7PLFnqHcJfcJKZ4amRaPDUND2A7uWYq8vhyUZDqXQq7EUkybRePCMbsSU",
  "key9": "2cbLo2P97rV8mshg8mbEnbyWiAkz5HVe5pDknfPHUB36ATrHK7iWRce5UJLThvGYn34NuuXpgpiUVV27SUAmcn7B",
  "key10": "2FtCLESd3AJVF6UvK9HrGc5rwuKNBH5jNU9BGv8Mu8aRnC6ZjAFqbR8C16PDNfyhjYEvKy4hSY9RSX7z8D8BhGVj",
  "key11": "4dqGwi9kCKT32KzXHPaw6gJfxQYyN6ZrGg65PiEDEH8fxwGqBRs7zXJhmWkoxaS8Ak23T3iUpRLj7eC29FmRgFQC",
  "key12": "ydmeK7ikpGwLgbt9NHYErVX68VYNSW5KmQ4tQx4q373bgfPqfRRR5dww8wmCyo1kqJZ1oXSU37gcedVKTjf36WE",
  "key13": "4Q2WfswPxVLP6zN8NGuzePhtfdkGoq4JTAaJFpdzKDwkQckgJshbfdtcvJU2sjCsikPpJhn5AUfAiUZ19cjw5aZG",
  "key14": "21DVanYkAi14FBbfqtnpyT45byhcfYL5kukLbRnQsmNsZvyvqFnQYRXFtEbVmwPMc2gDpT4JhcGPPceAmyEUAEtS",
  "key15": "3CszcPWMEan3WSJmnYPG2G4WCEX84UVA3EBrif9waeCQ7rKLpyf8gh1ECL5mFD67uZ9zYTEpgwqViHUvzXCRkeHP",
  "key16": "2qpoUT6n6c2oBmNQ17nbnsCWpuaLKguz2xQZfnJumhTXRCs8VURCg3hiFGUGtwS6WCnt5ZNcUVnUpfmPvqTZw81V",
  "key17": "2wwXF8cT3jUCo2gyjSFLmzpSx3ZHKtWZYMgsw6ZioPtXLq96wPdCsi2i6fdcoRus3LkQhXiqDHQJjo5NUUhi5gyB",
  "key18": "63hwLSgPMZiZeEvMcBQYKdu2NxwXwWfV5pnjLMhJC5LAqz9bWneksqDiAM7VB8Ks7ELQ1xk5f68REuFhD7jQNdP6",
  "key19": "4DXFa93CcEmk8w4cUo515v1AtYqWHW4S25xHfAPTonzyinXDAfzFmzApnxQLNEeC71kMad2Du8bgJ4Udbwtp4Ewe",
  "key20": "EWD7jKCRPJEFakER17iEZUeHFEFs5LFqGBNwX2bon2Df2fVmFAxxNHDWnRetXHtWfhjnfRuH8b7TseiXzLp1s32",
  "key21": "3FqRxK8qjWgJ7kAx9nnMz8bMAhD4pY8AnbLB9seRiUBgbTeHZVFijKWiPFZPSc1qizo4JHq62CCiJUZ1tCyuKHTt",
  "key22": "5Lyd8GtB1GbqmoVCY78Tq6wghuzcvwmwF4aMYhxVQChDAgymzH11urRH1Y2pmUEJWwsigw7zLLmdr6JTmqTfaKZY",
  "key23": "5TXFsGZ8bcaZwSbmRd8Z5pYAq8o85zqWdiDV1JhbKpJGScVJNAn9kAAqdMw8WRSRLFpwHRUw5xbzdDHbDypvybv7",
  "key24": "4HrJDnq1VnhNYRBB2bSH9XJa4L7XaN3avzW181dQWYqTkSf5jZmMd39QUcccvEjgVR7bJZw4sEAPpjCNo48BYPxX",
  "key25": "3ETDWH49oRq4ZULjSg2F9i1fzfNabSNdgUkZnv6E2wksu6HYAqrxWYmsWRErCFZS81iMNozpqCVLaH61NFU9cHPH",
  "key26": "4QvnYzK6BSVdVoFmNT4WbGgQmF9oNcJwbF2Kfj9z7XUQRPQ3noHofdbVFRvZkHxy6SY4xP64KhJYuMgedniaWQMG",
  "key27": "5CEQQi4ge1fxrhdyqeBXhhdQBeBSqeoJw3wLu75VTZkZATjgitduS2VsJ6kpXoWc2zyomVxxkiKe2J8PXPPMmjTY",
  "key28": "48jepGgFQQjUE1P4AZHHEfEy81Udwj34CmVkzHszsMVasJc6vWU5VQLQqu9mDUdxAhSG3MKKs2BuEGbo3pMf6ivL",
  "key29": "HUmoLMDUJbu6RZa2Z4hkNcUkRSQ5TCog51b6Rfm9kq4R9YZwu12kZTxRTAUuXBFFR8rWnBvQuzB3c88GDfK66yN",
  "key30": "2pnKRuTKPKd6jbFTWZ6VjinPn5ZAYebhGx4A3i8koQNWVzsbWe5dbpCwGHooYsVxxANwqtcrTqoUAP9iWRAGrFiZ",
  "key31": "2aj7dapNpYMwWCw7XET5R1c5932LM9UMsb6sbGG3UngVpRpNojU6C3eYTwxJYfhyRpniisVSmFDh1Zh65rVrdKTF",
  "key32": "49KURCe5poeccJXhxvdnov114wZ1BygEfBspLkutRxxVfAT1PMSThSP2V3v2cR6KMU3YUaAFvtgiiWMhYcwqAaG4",
  "key33": "3NVSV2bLLYacuxFppjKWqQv1LKTWdyuwJh5GuxWkX9DeqgfpDW6yXqfYFmYGtST6tyr5drBqFfhaPmb3i5CmuZgi",
  "key34": "4wkPph2fw7Fup1ANhvUNRSrrSdmk3zbcXPAN4opoUgK1EwDHd1KqXq5NwgA9nQRv8tbtfYK9Kn5mCgVdzD8MA4zf",
  "key35": "3pN9WcPVg8Ub3T9VNRksboSH3nDtmyiGqW3aD4rE226gLfq5CF6YygmPf5c6Nbt2iLCEDMc5RttZh5wacCcdKzYZ",
  "key36": "3Wv3dqBrLDjopKCtmDmiTs4ybj58ZpnNfnStqxW1vE74eiAYHWQK8TLETqnHbUFqZ7xKcPomnYMEbWcaf9bi7CH3",
  "key37": "41c5yssd9VgDNepGDUDs7oXb74ny41t8XzVpg2cPgNEDAF86jvCEozxedmmWDsJJfJThK4REoJ6Gz6MW5sm4Fnyh",
  "key38": "4vY7K1QyMBbMsbJkpUQM2Jc3VzogQadjq4TmoibYBsPP4exr2z8QGZWrDV9oYGDghaXQCxbZM6mwrWFYrenMZa7H",
  "key39": "35tHNe2oNN2g4dG8WwKstPhQwB8UNa4QYMBRdd7yQCrPd15jmGdkRABsskC7BwNs2ED5Q9NAgV8kWYwx8kHv4V8y"
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
