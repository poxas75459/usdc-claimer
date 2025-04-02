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
    "2AkniXXuZmMgeL3ETYGTCJ6zNDLF2DVMQs2bysRXWjLjmtiN2RrMm4HPyDbYyTRTi8NSVFBc2BwGZZs3PhbaSYto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtN5XmGZeq9zf5ck88oGHBWXuGz6N33k6CWeoKTLcLjTBf4R5qNr5XV2QthAmRix1sJiB2WdCy1DErEmbY3t62E",
  "key1": "3XGSCvyG1PkC8rXcmQyeCHERgdZiuFH2xUEzMyokwXsq56pqa4shtpVsZ3XJT5Rc4NeCwMNWKaViSXTbnqkMJXQ3",
  "key2": "3BcX4aXzssaCDcFYYTuWgkwMT5Lsn9zPnDQjGZvKfKN5CsR5VgKmRvGqDCE7YW3kLhVEuz8WjyrKyxreed2zoqcn",
  "key3": "2wn8S4cAXVSh41FXuQefum77VCbDFhdZfJorV1rn7FVVEjuLJNa6mTVShxhKezmQ29AK8YX4M1iBPF57uSZUFheq",
  "key4": "iZSPoh4ycVR2SRvFCHMGzYXVrc3Z9tZCKqbRZqFfgXhT1KAKScNpYUmgMSVZPm3s7qfGWxB2ucAtb77j8PMX8AY",
  "key5": "4SFbPNi2fRejqL75JheqrkuTBPTsUTCymzdtTJWWHa9YpNax9rToWSzhA6sNLk6xvjTX3keqYLt12ggahrUB4fE3",
  "key6": "4peFT85M4XsqfZyYjZTCPR1jeW5BeTUvVkBFDbzeQ4GjVcG9gWsUDdkzizsApCCwfynvVDZoNgr49DExiGktsRcz",
  "key7": "i82wALHggJzM3WHtWw8UMKM2cfZizL6JzFT6Rbj4zYShJbqWAbe6ypne1ABVkpsA2bmUbLjtddBdT31r7GhvuD6",
  "key8": "WWJ9DARaypKZQzPu3gaLoyJYwqyRs3Xkv34YtGX6ZSv5c9P3aP6VNHUXSdEGaejKE1Vf38FihRyS7qz5e2ERwUF",
  "key9": "5tD1jHhuhZRSUiKqKmUYSUkwgVpvWdzqRWNvT6fUofTTvVD4iQ32wgUH5knru8wL6CBUR9BbSMKwmhHkm9v1Un9c",
  "key10": "5SCPiXCoxZK2k4dfXJbxiwSsob2fiv5tgBhG2jNWHZvhJY6ZmFXCqUZSaFMMuT5RTiSzMHypD6vLr3H5TH2NBN7N",
  "key11": "2C2cig3Y4y1L4nAZ5KEiggSD3w7E9m5BrLR716ZvDBsebtmgS3GvxBd1EnYBVWbWfdJVGVCuaHMdcoGFM9Ek3iTL",
  "key12": "J2bz1p7uEDqu2GietivZPiwCfpBCpBveJnU1ANKo3X8QqkJsZLNV1kuCw5soPWbVwmwQ9RnimBDzVSsfjDkjfh7",
  "key13": "4HMqUNPLpSgZzcfmmJwQujf1tk7D2z1EUuKKe7qdCVbcUqw44NT7r8ezn8nAzq2ndrBS61NJ8PKwbcMGsrrze2cm",
  "key14": "2aRGhpa6nw6HfQEt5yoJgTuMcLf4VHcFRSaoB3vk44ZjeTkoYSqYkKt5TrhpmtXKJuyacBBDB4W9K5uY6k5cVLLq",
  "key15": "S77CoJGErg4QqUfEBtiZ7xndWni5wpyui3yQbC2xtoVPtQJqfAJ7uftNvjHswgkfvyfcTAUFo1FQtR4Z26zhLwp",
  "key16": "3RiqH5ge91ZaBpY5rCMokbbD1J74vpvFoWhdVM69hYEwNrTFWeUJ5LmhURJhKCLPFiXUSspXwWe24r8MssKiVmYu",
  "key17": "Nu1sBg7TG93gJMLwJ63enkWvPYiLoMERFLpmHkUpBtdxhiqq6UC8NoUq9NbwFTCyyMsjpDTNqYu1s17Nz7MMbuT",
  "key18": "3184PpqfycnJpiWNBNnGrbkidJVYD6sUoL3q22qTYkoaZFg7CxG8N8cTAjCc5wyHZnx5uNGz5UitXm52wpBmYSSa",
  "key19": "3Agsz57TVKXBKCTT9oT68HUsA3gf2gDsbzdnUZttUgg3BnSMaA923gqH7JUageoXrhZUkUkxFMnZ2cKmXYjaaap7",
  "key20": "5iMHmu3AP5F8WjWXU7JySb8JzDARXpHptVji1S6ViFjMZfbykLwMZfmmGNfkP3zLVPAFD8b1VLECcGRLbvrSMNAh",
  "key21": "5HnwTyijMe72eVBnFurGybvPVP5LNK1AjSVwZtQvLiZkY7HEsLaMKcAWjVjUfH6TCXRPfuwjbXDayxtN2Z7pJk4o",
  "key22": "WNSUVwyucq7NX9acatyHWr6JQQ8eKDbwBBzN9nGyKeHVLqdSuS6TuDizuso8kga49GfxBmUu1h38N4BCLUEAieF",
  "key23": "nRTc8geKHP3nGs3w5PbpYtZufaznfNK6v7KS6CpqmGjMjwCkm12SVvKq8p2Gfs2MqU4L71i9KBpsuMsvtKgmEbP",
  "key24": "3XA8jp53nFrxuPJWPSVxicvvZH7seoqKvp2mbktRvTBVEUCqzrtLgGMRYPi73wgZrun2jmEXVkrA2MbPvnZyf6Dk",
  "key25": "5S5QuZ6trWeMj8yDRvQ3SbPwzAcpxPxN6ymezJSqSvdRp34GeqDf4pGnBdQQ7jJmVk8UA7WtYjXgFR7Si8xcg7DB",
  "key26": "2JDkhHLr6QNLxqq7LGD6hQjK7xfYWQRUm1wyjXnpoj5qZjYG5uPKGbCNaZFB6EdxHAcHzBQFbEKj5qwzguqj5Ahw",
  "key27": "5zEAqy41sGS3kfigw7kLk6ysCPsm9Ay1vbdpLeEyUTobvSDGXfDtixPLJzU9UJounX9hu6fdwujmwVYXeh9mpT7e",
  "key28": "3F2nCkWVxya6Yx6DpvFftJT1nZhke5JEDLfrVtmfRwvdkAjye1vaatKT4Ryg38nzjstuKHGRhTELBQ7cb3qLx5vN"
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
