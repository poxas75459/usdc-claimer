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
    "3e8kmMsWJRVnQNXi8ZfupWo6BzPx8Zhc1ra5tA9fgMwxjay1fmqmptAmhVARoQK46sGoRQuHQsLY8FErEVHtBPFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDDtQQ3eYSUtu9bsAbYcn6NiCe1RAHe4QKYjQQUoa4mBhEzgtSHxmchDHFYwR5Ptp3b5GsnwinxMfzhvjQTgJxx",
  "key1": "sK54F8dqzTEmLHrhxWHvcES5RyeLG91Wzc3ERKk3vswdWXAmHD5CHtfm9bNQE4hBSkW61rgUDz4gi4NVmuQXoXc",
  "key2": "5e1psfFyWMHxmfQmipNdtDLBfDno8CvJAV89VJpA8mtZNF45DfZdL3BCDXRgx8wJgMVxkQBvNhuRjEbMyEqMNwoX",
  "key3": "4GCUiqgJrjSGL6JABQ7gxVyW4fB843ZTnpstxuVH8PTqzKAR8CFhTjBK2fmN2S49g6ARV1omFWWS4pzs8FvspzUX",
  "key4": "2DxGPdJD2tBMvkuYdUq5wrRuPpodckDN5QwFzAz6iQZ5bH2Bd5KhZ9ore2cJvEo5vqPsE9csjLBgLc7tVLa8gew7",
  "key5": "4KhwKdB8B7B9QfGiFpk3aXsqAVMbFd5X2HM6sf2uuBcaJx4jwargqToEELdCecAA7xnK9LZYnaFmRb8Rg9AvkzuB",
  "key6": "2GFXjxamo51V3qVwQLcedM3QXGWmKVijtuDU1d94wqs45Caeh3NspBD3H2R1CM6AKRLFELPxpdZbsaaAv33H5AxJ",
  "key7": "62uUpCUmD7rpauCudTKxubwvJyMscW8KDtEzFJMuPezFkEbhSTHeac65NhGTzJzzDhnthhPLidhJsNPMh3pMxiAa",
  "key8": "5mjU6GbQnFhMPfsCjgbNbRwuShXBBuwDiu3J53UwjJK99zR2idy85LGeYjcV3vdjgQR91haE6qBAfqi9rPpoMGMp",
  "key9": "382E8zDLmvRZiV5bn8WHqUtF1uZt4QYDHv2ywGUQcj6WnRB1HWBp9mgJU8aZqcMj9i9pE8Ae82AyCNG8XWtaiVdM",
  "key10": "4GscsEWJrWhEsXS63xzmxD4UHWEkKjEYptSHi6wunLuvzMYQnskKeNpiHyiRiyhdDDqoxcqABigiVzrq3zCEVw8i",
  "key11": "3dt8pmM89q8RLSNXDnk6KsoHukfgKBBm8VZVreafYYXZM3Cm1otcaBZx43HAEMXM2D7ZCRxBgRKzNUyLhps1TnMm",
  "key12": "67ZxsKdTumn5qwrPbL2TmMnpwnT8S9wdUw1LZcQzM6aAeUjDAFtTV3QyCZXih4bnepqWBhK1C66nDYbitfXJBgkd",
  "key13": "hXSGGtGYhT1inQFAx7sqVptND2tdjwMSvZM6bgCVL3K3CGUrWLs8KV4mLshucCzCLjGjhd4N6jMML8NVzxxzvp5",
  "key14": "2qJmuJN7L5QRpVfaiXCcuDWXzPyVP2s35paXpmp1WpkpweaA6HuwYVZDi9H2A8vr6VqERfnZQhdM6MgMDcxLWkL4",
  "key15": "5dCnJs3orNbUpfiLJy5hvHxLfRTDrwtZWvQyF2HZKkgCVfPBKJEjGA4cHzjsYFj26UhKgM6dC1QrDLN2Md3q5Txa",
  "key16": "sQkQeWX6AhHA1RsvL2XVz6RzrrnMQ4GZd4hjQbLPNrZpPmJXfZxTAshghGPjDr36eYAKmAiSAzbx1XzbNkz81iE",
  "key17": "5hKEKGmv7qif7YyGaHUkZ8Euk9VqGApXMD7k4AUawydVD9X73hYqfpDuG9FDbo5hUmbKGzFYM2fGWgw2WgwoNmum",
  "key18": "2LMHLueABwheZR8MgpHGH8bf82A7ne2cnBtp8gbDXRsSZwEtZnAPKV6AEEHWngnepyAxmytkKicAPkfkt97jDpG1",
  "key19": "5Kigt6Bf2dc3goiZRBxYzHx3Xg9p4Qujt2EgMUot3VyP1T2By7cn7pDy2rKTcHowSYahoyV22ddHjkjsriMwhHih",
  "key20": "4sdDPWWDevFrzL5MD6nxjw6gW5vZwk1pvKVaXcjN4wANzoJ5XXAYwepBw4XSGSFoGXEUcM8YH5JURnm2qveMu5RJ",
  "key21": "5UdzpYgE3rhr6MEiMEtAZsHC5X5v1B5mL9nfoppXKvGFydfHqeccpkyoFpQZZ5YgdfZSkntAPj3nLLLF4SjGaJyW",
  "key22": "5m6WoLwtH4TGyDCYvRTwK1zo2RhN4GgG6TbKhgBUGAkkq8H7KqVQYD2bVdCGrCpGd6ruHA5CrNPRFwFF4d6bS29X",
  "key23": "45JnuZ4ZPK2eyEhVNp4p2HEwxWGXJqnxP3htshwGhcVVMZWdFmW9XWFy4pc6YDGy4seKNCuncTRSK2QPXv7BcH4q",
  "key24": "4XaeiqYhXUUHCBFRnixyQbkEbJpJQREQDcRSkP8Hj6cShDakChcDQRbCEjHSKs3hff3xx3WGx2qMhw5rawJ4dpfM",
  "key25": "3Sq8N8qiuJwDhNw6xKFmfGWreeQ1vxsFFAXVLub4NkE1rnEQKxAsn4ysfYDLX8y4kXRTYGM8MdALcYBsUCdz7RyL",
  "key26": "62GYRv8sdoGk6gSUNiauPm4BkyRjQovpLXjDU4hCHaL4WK1dHFsZFvnGC4np4bHufXdqGQ4CkvDzVYd3WjjpGkN6",
  "key27": "3jGb3VJ9v7C2gKkB5MMTynwNJPyuAL8Eu4MvPdonm6BUzk5SZ8Uqj4BAg5xVkuufRNAZE6njCx6SCc7pHQQiFmQp",
  "key28": "iWerpBHPzJiEVCvygn7NxXNf55r6zjgXzfVBQzsQ76AJuesKzxbPZxpin3955BDGSnWG3wPEgT8d2Y79SFgnbYY",
  "key29": "Li5f1cKoVqw4K4PduZQA3TicdiYxUgUke57Er21D996pBFuXqkJTGfnRcSHqrH8tQgi3SHGpeunbu3VDsPEYfKA",
  "key30": "5Avpb3EVFDJtNtYzazMq5Za2EFWg6M6hLmAX1h7QfsSYLSjcu2Nu1kzvYackh3cSLozLMdrw7HdTH8BDYeZf7fXp",
  "key31": "2ytBrEhWPM5k3exxjTjvTMUW47Z46715WrrXTdH1Rd9CENukeUnUwfXLWShBecta1UYBP39fr4SVi7UPKgVkNqRV",
  "key32": "4eju7cJFJe4MCTuexHjsVaAvG9VTM9SvkvjE1yikBdZHHUABSfczEpci4Hy918iFtATJSmV59Yee369U1d9Rp6DH",
  "key33": "24Uwv1Cwc8uLAp7YeQzY5miypC3YtzQVVqX3W5SzXPePEFv99cS8hXUztRgJcci5kdWjn3fJQhmJ4oUpMaFYGd9h",
  "key34": "61VvBnc8cMDrRUowkXctkzG1uArNkP72gzLGdmoEM41K1my8ZgnoU4w6XL4cCErYDLRPEyg93WPtY1W5fBwoiNiC",
  "key35": "4yqtELNazfRUP9vG6MXF9HDbVG4PbNXi36oyLVwhmFHyeke6YbgouXhnSDNNVnK3iT4WHFLSh7229qEN2yAVuSZ7",
  "key36": "677PD1ypXyP7oiYzsp5RsDb91t9FmdtwvCiqEeh1h1Tyw6ijmwoeyo2PiQq1ruJDs4YsTxNQCijygP1yrCLctSk7",
  "key37": "5qs2fSQMrf3jpyPhT1xKkgxqB6zLCDQaoQwtdLdzGTJtbte5RdkauMWaexE59cLV2G88QrhAupNCvM2QuatbN6jd",
  "key38": "3Pzrcs9uFzkxm5ntcfUme9SKxwSL6qr1uRyuY9Q4wy5BbMkn4mYDLFgUDNxSEe7iMt1ZeFxXYhCPHrtTEXLSnj7q"
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
