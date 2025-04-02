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
    "2hmVPi3DzKrcKjt2VnjUrpbk21QhjrFPVEKFNipi1RwRjHnkXsqJkHyqMyDcf1WQ2DSeBkp3sEhPoUPBPwrsYeWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28p7kLq5BwZedkidJ8ibNBoY13eZM4F7rRx91T1QGUuV1qceHViik1D3ruYUDXS5QGJkYWDXWw83MWtC4n42jEBW",
  "key1": "cKypCTLtcZ7FQ12D5Mo1qgQit6jCamurAE523sixSfewrWbZPjvgxMwKn9GF2CbMTKVv4kvsKzs2BkozGNkg88d",
  "key2": "GvUPaQAv9W1W45qzPFrK7xKBPQRzyPNte9pT2yWjgLNG8tLxdb7BJGPMYKyvqkU64drLzKsTB7jss9QrxDYMCT5",
  "key3": "5rpBfVA2vYR5nEuwoLeneAFxnA5AvToEWi6fN3Ep3GjJjAXXtQJLm9reKzZ4Wan8REEgQATvt8m983ps7L9wDeWA",
  "key4": "EtbJNuvM6UXSqYSYfcRc2pXrXSnSNKdCGJ8VHdcF6SYZDQbcdxswdQ827KYn1ZYS1TYY2GeuPM8UvzSmUWDzggs",
  "key5": "5YZc1ASdGrFJ2HH7n7BQSM6rZSkxVgMQ6MWJLX6F48UtX8sHZfwLAy7jxtJ2wvtKjLpFsWyp6qYe3prMYdoWtbya",
  "key6": "3cz6n7wgqHNRxQYzJZGMdxRYiMUHZytJa2Jd9or8rcecWepeNQEqknRaPK2aRkSjMYtJyAPQK3eQjK2jKbp9xUrq",
  "key7": "5YSdw1DoV6mbpbY2oDrCsDdZnqR1VoNsBsanLNBQYAbLWymBhFncXhmT9fJje156FTjbaAUnps8zL2Fx1B9d1rhv",
  "key8": "5LGFCP1i1r6DoSGocAy2EUVN3j44DihysG2HrGjiwFn587r3shshasGezKaYAs87p3QWnSYHxhDEVBLCVb96NiGp",
  "key9": "5Vx4cpzo7qtGENy5v69rv5bGAR9uZoqnUsjRAfr5vDb1rfN79xDrCb3vYSzZdK2uRfxepiQhiHsTNxrsN1ExD7CC",
  "key10": "4fQFGuDpjQ1Lx1waEQPEvQftjpdHUCnFkKDPnhHGQDmfLdyxnXi9s2yU3u7jSiSuhuLQad98TTAC3JqCzdyTVFSn",
  "key11": "4nq7fo1S4qkGaR9J3SGdGwCWyjA4TY6qHmto81vpL9QZbd3ctivwPMwfekDxefTPjkxVz5chMUqrSWxmYBX9pucr",
  "key12": "roTyXG1wca6xwfQDRpzRbVAdYb5AiEKv76DVTG1Z4NzHZc4QA7jM9ESuqfozECWtEF2BNifc7amKQWdnq5LzUgj",
  "key13": "91YQfiAqpV6QTLKuxr3SCewi1sput9sLLPGissYyPaFqkzKPW4JcLBdZXWhMxvJ4QdrFhusTrUziH2EqWsK56uj",
  "key14": "5DnsvCpUiSksT5RuhXUDnA1XKLdmwBnHrojLKTsTg6MMD5uie4v8odnaFMqSKmYyDf9jh9UcVbfFfAMDpMfHnjgT",
  "key15": "4bYRNDDM11RtkHDmkuQAsJxBAdYbPYPhaZzWLKt1hiHR3LzHnHrdUmw2GwuFHHNt91ZmhFyueabxqh8nBQnGVgMC",
  "key16": "3c4ZYjYv6PF568GhARawTjRQy5zWFUaLbDEYJvGEzRf2xQAqpuwJpmNRyZMeKZwTcwD1MfUibHBmDibbP8114Rh7",
  "key17": "55MiakCLvpoDqvpXw1VFJ1doCk2qNL7EdvL38w2FYZiR4NyogxwmKpd98CiyszAJqf7doPWttfeKuh4KjiagsbTm",
  "key18": "4dHohmfEoj9TF4BFWZ8ASCxV4GGMydoqdEV2XQqN1Soe4uXGsYv64XF5kpKXMQkgpB3Fi8D8YX7RACR7m1t2Hndi",
  "key19": "29jPn6NnxuNG7TjUmk2CVNo6ZCGGBaS2TZWZNnTG9QCGEM3apgjJPWS1wH4qee1dgFNg4bupdnkdVxCT8z1Eut9N",
  "key20": "di7WAMHisUYxJr6Qia2wgDL2ngBLztfWMpspgeHk9trqEEZUmC3XF1VHhdjtzmjzxoPMViDJMkFKxda1Jj94zbx",
  "key21": "5KKSgPDfWUHrmvngQLGP7LJoo8XLmrs1MKU1RbH8HFy4JWvoyFocjJxtS1SsE3UXPzWLg1EFkKCc2Tgo6A814hT2",
  "key22": "52ohcA2R6qnwdAByYTgthPWW9Bwh2NsDM9sREPQQZw4WDbAtsJW7NXRtyjdo5JZoeCp9akwC9W1aag2szppnyRS6",
  "key23": "667V7PJT21nkFDn74sHE77BoRKi85xDbSqb9hLQLRDpL4TPq2Y8E2zbsz7PL3sXkAdVW4EkjCpyQLHeUHhZTcexH",
  "key24": "5WnWGjTLqPmkaTEyX12gE1DgJTbjaz9wLDoJHq9E5a1MHLMf7VeWRCHKmDhn28iMpdRLsR2BxYyeQ8t8vBaKRy1m",
  "key25": "v8FC9dBf4BjWjE159gg9H3rT7zFWromXSCBLKWncG4dMMjFvoHCiuv4Zsy5iAREXefH5MxA1H3oAQte2gj3ZfsC"
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
