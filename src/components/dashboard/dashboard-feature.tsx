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
    "5pN5rJZ1piSnGLnKwRBLyvDJCmUxdgR4DG5Tfvw4dKmz3qxGdpixnq7sVL38JYJhneaq35RNEK6DAgmAg1qyNDtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWvCiKNWFDreVwyie5BnD91VYqu17ikVD66Y1wkM3pa4ngvJZkQY1RRBYvxdTv1yvB8f8MRqW93EJzRX7XsYeDp",
  "key1": "1277EJ1JYuyFiukETKgTk9u6afTd8tFWBhQuDKbyJTDwnHP1UPbEmJSN7Q6B2GLwXVpePd5CJMcHdLEiWnbMZC5o",
  "key2": "4p5GgZwjqbU711PS9VbzC7rgjxQM2HnpM8s8SrSWsrkZTT8iD6T4wUTJBRG2YFY8NmV7Nrdz2V67GYQxYeDLv1uo",
  "key3": "4JD4LBjVGfA4xzrYJYuNioVhC24WHwV6uNsLShqMtwMhr5E5c1teakfBqmuWyFhMxXXiNhL6xrCpDnbESjJW71gv",
  "key4": "LaVYHfZTd552QUjLQ427eczWRC7LubFFXwDoabkSjPKgmZnboCMd6BTsu1a8DWR3SGH7gjiZYb52TJEVbccBcJJ",
  "key5": "2vBxVZThpAmskjsbE3U5Q5MSB1KuyKfw1TR3ppvJmS47uzx8emoqRRWHW7AxjJG8eTEMSPdbQP6SwiGXx6bRghBm",
  "key6": "5eh9qCHkXvqHQdECRJc2bYW2SJ7EsqoCnzTwqwk21WkJZGy2FLhT5hb7Xs2K4ypDxcyHmDdbUo3oZ9Jd2RrwqMwp",
  "key7": "3P6yL1YNEdmhuQgm74BHmnveYYaF5uFh9ngxweTyPr7nj8HQYHqNXUDSE6SbbDaD27R6BNKvz9cUDRGMVwqUoSgJ",
  "key8": "5SiZZxVCzZdR9SmjwYWxZmR4cpm6RU2JGKU1WPuqmGttS62D8ssiTCsePuQFAZdHfWQcLxC8USfJy14jHEr1hPdx",
  "key9": "669XTgaL9Vr9ANhzqzuAVVhgC2x9F3fzfcJ4zhKtJ9jcRRXPZWUbYppXchjUEh9yATy8Y93A39Yh95C3M6gTgdmd",
  "key10": "4LUwUCJuky4KdeeHXY9W51ZbbSMixCJwHqysmAmhBH2ShvVLrUVBCyUYd66NMCdjRBvqkm9tu2FKm94swdninuxD",
  "key11": "3mw3iGWKf4ZBfgjyQbjhfra7QFBBVGTsre7r9XMX5xXmbfQRrVbs4DerCS8DSQYViXKrvXe3FXBJHM4W3ChCAkCR",
  "key12": "5sTok7ZrFo453hpyc5ADURB4dU9ZPBPydghxb9YfvtQNmUruwq3aYAdhhftxT56v7T2roNtHi4JjTiMoBvkjayn1",
  "key13": "4arSad6PhhfHuX9V8hf49eW9a71kTffZJMbiiQbR1qw1nPJP8i2w3kETiQaSBQHchFk91Ezs5a93AcQ9j6WADzpK",
  "key14": "Rz2eKV1yGJXUdbiJVamVPSS737E875AZPNLUtHpUBtizhukGq8BV34C9kuQpD3KjnfV8o1rdn5Xir1eCSTLGtT1",
  "key15": "4i3gHPDZyzjv9PAKQzzV5jkhKmNaZTLocZHLD6T1YSZmwPqu2tM49qwjeyNdn9VFgfPvQZbjuQFapmAHPYiczZAM",
  "key16": "2cZAA3gwicfVrnCeASgvDmQcxoSihEam2REQiKnh8igRtkHfWzjWG7siAPg6xkeX2HUFe8MRBVFFSjk3mdKCTAQG",
  "key17": "5382veKxevq4efpAaUz12c22U3jjS77WHDbihbpDc2G2dNmvFMdTpGTX8UAnwDUVgNvggDRFFUxeRG5wuKFFnuve",
  "key18": "4Wu8zv3zdGCZUApqUk6KEtLASSc8BTtg1yC1QUJ2iUPvtxmLFyEyQBK9vNvp1bZhSjouJf4Cit1hxmT3d3xpnVZY",
  "key19": "53TJaVeCUHZ7bSFtQKrD48SPhKspAVGkbUPByXBWQ3SkvYVe2xESAqgv2e3agBgqfDSqb9673NTq8gXKAFrJLa8j",
  "key20": "uKN7tyyTGz42mGKvGNQauoXqRMXBKJHLcE123ptvP6dGyd9K9jfYfPKexiDZp4StS1Bn1YTSojn1bGZXb9QD2nY",
  "key21": "2nWJctvxi2jvPHf6svHymLZKxyXZbSNuy4yaVqfq8cB9N2PdhdM9AEuiSZ9ngnUVVwP41NT1bCQrAP1BkuzqN9HA",
  "key22": "58s5QBTvJDjmH3EBsrsXz2fSCtNmCfX3xdX6EG7dkcPE3ApT9VZi7tyRi12CfVpaTpmPgDUtRqY78SRDQdypv3r4",
  "key23": "5LQJNpvGVUuYW9BTpB6BirddkikbXEKMebCBsgZ6zbJBxEarVKzd6urhKwjHLh8wKqWxMgR5UbRPxgHeG1R8HFD2",
  "key24": "2dtt2RSGMQ1A6TRQuhNoQDAvgVc2AtsSaGqnj87RFgv3jvC8cCjG4v5gh15egrJpjqprawcmRH1mnVEadQn8tNMN",
  "key25": "3gnstfrdmZ4tukUuKUxGJuscEJhNYB5e9ZTFVaxazXRq4U9bXK76VTCMyA4vMWkWG8ZrvKUfE4P9K1dB9z7fAmqs",
  "key26": "3iytsEnsxTRtRHQZRRVE34oUo4C35tf6CNeuNEG69L6vzDpKLPY7ZcsXV3Dqb4ZVLsh6i4Sx85DJwFedYiGSScXK",
  "key27": "3J3mYbwZwc73zAnZMG95QUQsmteSmA87kY7KrXYtJCy8fpkKyY6hHVW4LkT5Nh3KTYEeaWEL9ibDWYDimVxVuKUK",
  "key28": "2ngmHeatKtexyMcwsUSVQNWFE4G83BkhaxtLJsx1gFetzwz6mWbHJNvAadjycCZeWjTomY6AhTnot2TX68oRRQL2",
  "key29": "pbetqejMQKtm64cvLQ19oQehRrHCxE6WuLYonFMTW5eALidxGWE4zunVwmJx2FfuscSuT635TpQJXmoXPEtWmkh",
  "key30": "47G6wSTF6NKgxoSxzGbZks7LwdF8J3VuACJJCniapYwDkdYQ1xrYSvh58pnePyNCo5kFJRh1Z7DmVANMymrRY5Nc",
  "key31": "4RKx9skQDwxZYonR1aUijVTGkJQNuxNac8XkYJHDWsjVnbx2ifhEkHXNPX14H4mB3eJo5AWdEr5NcWNCRcmo9fLk",
  "key32": "3jyr4mdqDooLZp7Ry8z5dvGyGb449JnnBJkgExUjSGAeVGpdq6HLLeHxxPPnbqdYsyCc3P2p6NTpm7vVjrd8A8n6",
  "key33": "2AbeDg6AjtBykpi5ysnNnBU153qXj331HdxBb53vSKM4tt8PkwHac3UVEWCLuQFstviHjnYyA88BPM9338DkRSgU"
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
