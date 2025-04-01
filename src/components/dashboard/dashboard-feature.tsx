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
    "2Yo3ffRGzcUQSAP7cepdY63oLqaQqc8j9Ro7VZWjjbw3CiXirVHbUDXd78U6Chzzr7k1b6kmorWKhMKDSrScGR9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vn96HordjfL7gC6GE2JRF894ECRuHwm2tPacrB2umVnY4fx6bYmCvkqj633wofavqAJfwZB8AdW56JeKHTkoQqq",
  "key1": "2KoAg8c3C68YgNU3WbyxJdB6MQAtXBP4i7LBH5h2oSxxzpf6ErvmUDcCjUcZyjureunEg7ipuAA1DECU9VnQMtJ9",
  "key2": "LseeGWP9sS7Yhp2VcT9a396PRubCVZgMhhSgCfU9hxicLh3GFgzRJ6u12qM1LFcTWnZ7nDPtJoA3gZpu1mqguFK",
  "key3": "5ouaT9coW795jiTAsgyPi7uvfuxt1ndCMhWZQJ1b2tKc6mfv7iTPUTHCrwvowcTh3EgsKeCAAmaQ9rhwjE8QQpeC",
  "key4": "35NzRx7VdGUNj7VmV8eK3JWdML36AR6tjCGcSoiTbw8RLNfY3oZbAbtgHmqdYRCnGDL1pkXXVesLCy6gn3b3uuHX",
  "key5": "tyFPye4KYYi28sk3Yz5jEXaiz8Jz4ijm5FiR2CNMboaANFAbmmdHwiYHKXTefTVWb9UwEu8DkyDcpe3EhtHeESj",
  "key6": "iRVuttasX3dZjD4npB8992uT1y7QL3Gvf1xHoQqyPz5CqnWn2GshCNtFW7KZEo5Z1EZboEfiD3croK9V7xoHsWZ",
  "key7": "4Rj4HAZGjfyEe7zwibZ6nZ5UoJWRTWtiyzFs7sdXUbNM4F4mYuuzBM9Kqq5hTNgQcnqE8Jx99DkXkt2AKwuGrHYf",
  "key8": "4yELiajWLHAHGMVug4EDU6iEsWNG6KJyiy8oVmRYRPegaQcJCtyWFjijf3mMSDiD64a2RbYpcrd5q97pwghk1wZP",
  "key9": "23V2aimyGy3ijWnXARpijMZTgXKTCkek8VCm5Bp4m4sYkGGzUSLknCyZAzKYznc7XmoQXJWze9jKpZpsX7MXE3BS",
  "key10": "2GRN2u77qddzmDxiVTFP8qp5EBM8BfjdQaA469pJRwsSRFG5XWhG92vjGt1sTGs9drYNd2om5ViEHivXxcra2Z9y",
  "key11": "4vHsiVk8kbhBnR9QG8t3JhofwGoU8FRTJv9ziVByN8s7Mj3DRinQGi6Y5TtgSKnuAvLQ1nt11kW6WyHCqvv24gcv",
  "key12": "4rFDWaGR8nsoUaWDasKiF7TGa7n3fr1pSAKCbxPopH3JvHZ1FfZuA6cxzwV956yxyiuKT15qASzZPgS7rBXDJ32F",
  "key13": "3yDB9E3HK7HhYKRn5QRvWxhxVscAW9NmSVnnEr3zV5UqG2ERv6Pxc9FkJdQoWxRT6fjyDLN186sh8HXGH67zSQiE",
  "key14": "54aSpT9Ds44STHb1YZxTVFAEWAn2F6P2rTjicq77WVxxcJzqa7Gus8xZngFT2UcMZEnJUuowPq2TAidDdqYBetr2",
  "key15": "46CNKy3Y87YBXacca6mTHPLCmwXGT4Axw7Y8CPHwj6J8jmvNyGLpBCqGhFLH7ZdZmCx3AJXAgSCKe5MDHZjQQNxt",
  "key16": "5oJs8vRXL7JCX14gjR5Q9MHDMJPvQZtaqGQJWY4M9CWgJkQAdKQQH9hosNKExXeHQxsDdHNSu8SC5kb4kvbEN2K7",
  "key17": "317rbr6aK8dMrwAKnRc1icHnpJCX7ur7AbTtJiHepBiHtK2gtixHSpJNxkUwBEtCiGvD6Wvojqv6C263AruWSVTo",
  "key18": "5X98fgUmtoMbhah9y4Juxet512JdfzLsZR4THurCkTK5588JLCBfiRzKCgk61cTgZQReLWc4msQtuAZshGFVM35t",
  "key19": "5XTvqZkqUgqXCr6xN6pf1PAntAHa7Xc4ADqd1W3FHyZm2FeiRC7MnfWQpjZhum9SSAehF1n8fLdAbFhZyTL91Ggy",
  "key20": "26oDV8vXPGYJtHCzhFDWEVpsiJHc9XkADW8gar7noDfsnwvpmLTiVAtayQtUpZZv2jxfK3UC2maEJGgLSyR5sZkL",
  "key21": "5GrFDE4iHNxZVDFG5RjkGyDf3h5jmesAnHpakU5dFgDdtZJt3vEve5xcmYBCrddC1pytjYQSbs1cWXvQtef2xoxB",
  "key22": "5hE4rSAtPGZMqF2ECKuDEBQHY5FP7KQd7zSAzZgLWf6Aedc3zrAff5PKWrGtxZkYwseZN5XNL5h5ijkiCw2tbbqU",
  "key23": "4rEQ758iT1LajYdPWSj5onKCnfzdo8MsZtKgtgMjs1RS2CV9wj8sWgMUvAKRB4AL2pkcnUj9qUeZ3gRh3Z4ZJDcE",
  "key24": "2gq7tt8WdarvVRGgpVcWZKHKWxuLenv343k8zoTYUVb2SzRAyqupdMMGFMXECfbQejASpApSFnJrdoBgwNsvYxmF",
  "key25": "49N6RW1mq935YoYwgX5vxnVMpWefTBH5r8sM1eyqEcDptzHkjRemCbPzrf93aGWrHDDM8jpxVCtzJiP7zKWvLA2o",
  "key26": "4suj4TM3LRSFzG823Vcan3rfUVuHjPvzMQoRdgrpBazKHChU5Vp7aoxf2Yhb7rGgEJf8mSDTkA83qH5SZPyzfJQS",
  "key27": "3mGrqTyC9mVdBaAaEEcNZopueAaSJDiXoyPkR8Z3QRhkYEqhgDMLJjnm7pPdt9SWytqT7Vv9cYABYvWmgtYvk3HX"
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
