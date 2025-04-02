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
    "43DXcTHmo5KKsWc5H6acthAfuPszN4sLEUJWWCfxMDqC9SqUYnce4FpS7jDkoo83AjABgqfyp6ntHo7Eie6syDtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPUVi7F4CA4KSt2EGbfMuWaLMTFzBnfbqFuw5eBrVKu1QuSjYE3qARiiMoVTBhcx2w9DVDxKrFTmKJ48rVKjN9n",
  "key1": "2eCTgTu53q8MfFWxUTzV7LRmkySHHpVe3h6iaASJXYAmHN9KVLok9ko11YCVuNto7x9KreK9kEiUN7sztRKuUKRN",
  "key2": "2pjKm1N9vEG1tAJJKt4nNJiMHWnq9ZJjaKtbU3hbB5LcpMFrMFpT9EpXxZP78R9KxG8y16BagkvK1q38Fb3NRwRn",
  "key3": "4gkwmokeSNCbAttLhMi9VBdHxRYc4i23sveNtknVDQxWusbHrVsyPcuLPuBpJt2XNCPWFofo3k3QwYYEowxxnXHD",
  "key4": "3BC5YkvsUPKkEzkgwQp64gzg5rq16jbPBEBNXXHERMLtUp1PtGFv7i4Xg1eBMtmQP7E651AYFhPcthE11macshb4",
  "key5": "QB4p8NPo4du3yjqwGWFzWCdYsdASaVYXmME6makf3QRBqpXVUzrGJdPZTFPk3hi3QakRRYAeWtSguaTyrDbufrj",
  "key6": "4XgnyY9tajudT8tixvqesor9fXYfzjW6WGjw1dccU2qZ43NsfSucLKkkQioHPCA4XSqU2NtNXy45r4msNZfRcXwd",
  "key7": "3SqiGZa7d8h43qNnrrr7mmbGbUiukN7UTsp8ERcqjGTGExBU7oMShBoKTTmutxiMmBxcnkqvc8d7qLHdiM4A2JX5",
  "key8": "5pLxRecDJpZ8ozagiUAzRTRXR7uPcPHhkNUEgB8jfzz9dWy8baNUzN5EQwLbZxtuNHDSNEsmMdE9ruj8NkZ5c3zi",
  "key9": "Uhkw5mCvxpawvDTtQawHe8MZeKDMRdJbthwn8yNokUK5r5FrVYz4Rysxc98SKa1wLLdVUB8KFaqzojoXQ717bMP",
  "key10": "33HyxRfd78w73dB6YsaitwJUEEcBg57FhftyHe32nTEutN9oxjEVwfAqR8fDEkmaXfVZWqpteSAj9vZTmnZ7Wcsy",
  "key11": "3yBtgdpi21UZt7N3gVxw7HefD1nb8nCspBjCT1J1yHHvuCbDKymL4x8yeSXnguyEGmv6mqTRE2moda8b4tT2pHta",
  "key12": "84sXdwV8rXhFBaNQvDPMBLhSZRZsT99Egp1AqiA9NoYxvHz75guEKmpqGrDcbBXSxkrzhCaSeomNGbbEMgBjKec",
  "key13": "25XMZMtWSssEkcVdGEgn5DYNqGvgKfLDicqhsSyVuYFVJ2BxycMLBPmySkZZRWs67NhZQQs9ky3XkLHP9VZSu7mi",
  "key14": "4BT6uizPYHeeXYfrcSyWdUp6F4VDahGBAydscwumMbDrW6s6dPgBD484NzsN5oMHRjQBd6rreWQQZyUf2DCATrao",
  "key15": "BySmvm2Bdha3rPEj25vFidFNyZ5soPSRJHGK1chDVtBn397uxHmNJ6JZCHcaMGVwDvxkQ1uU3VfNnP282TQYcej",
  "key16": "28nVEK6dYfG8hLbxkwKBsHXfuvs2kDPLcD38Z7wFq3MVApcE83CE3kRBP7MSCe7oYq2WbZ7rv6dXBaA7BDYjQum1",
  "key17": "CmfgDaNKH68rkZQ6Fy8HE1jZaAPcJgjqA6EeCvr3FkFunnAsU9KPQ7cFR8ZDT2gfExSGCeKy2GXdVJUxPSiA7fP",
  "key18": "5kL6FG95RXe99d7LPLKg8T6RL4gAmiCbLbDoZa9X3FZ264xSthhJVeBMCon3t15nwjCoi3CGQirpWJsV8QeRPmrp",
  "key19": "rngycCDguMXn9qN2sm4chtSBheHGV3pQRTKNvPrLxYUeezu3AgFxsZFFLRz9jtX12bBTUPd6RMS8AyJmxLrrQR9",
  "key20": "5CPHMgH1LS8V8NZkKtnPB1Cm8DJBa1N43PNy8Q3YwxYNeSFpC4LLhGLvu6XYUZ27DkTyREgiqtrBqxLhDwQY4Wkq",
  "key21": "KfeVX3zfKjEGLG6r6Y7FGSPE5dqbKCNiM16k6yUXL1yDjVznwHov9m4HDVmV1uiwCWJ43YXuytxKnNLNFyjDyb6",
  "key22": "Cd91rc4aaqAXFxHAXw7H6HEwX9QHD1nGJo5ArjEyn2CVASHzcxQBgm77oiFsrCEf1yW6t15gP8DoyTZwoiAjLFj",
  "key23": "5c93tcCGHDDSWMZMn6wtX8wEywyi3bhkm3KzrY41k1ghk7w5LfxVEk3iWBDKArjn9khGDTEztt8NTNisvtC7wB4s",
  "key24": "2FiiCG8F4PvUndgEceuiufMdAYXwqS3Rgd7w8YZ5kNSaqM4ebRARvHToYDYNMNVAQMXgL8n49EfxYLqzBdGgfQzb",
  "key25": "5AiDLwX9XaxPLqNzE6ekNQr39ZHX2wjkSV2H8FUFGThoSuLKywhwBKw1RtW3LeprcnysF5d9wrgZJ8HVuMo6ijgh",
  "key26": "b2oNHe6FF4j9NG8XmGzyr8uaSZzUbUq19xrDsMa9V7sLhueJAMZ6LEEakF5EGxYhpf63BKFkpiDT3hkZitwjgQP",
  "key27": "33gyoZwbtCJ8Q1r4xL1Mn6WGTBqCZRk4f7QNfDhTvtb87CE9S9v2b8oNhyniKa5YpkoBkmLT2Hf7JHisGhmu5AbE",
  "key28": "37XR1AuDqYMKZr4FET58JRdTuFiCLdQHDEhj5vpsof34uZ9Q8wJi6kh4L9tcDdj1gAW4LAp8R22ZvjfCSTZRzJAz",
  "key29": "5a8dw9WWSGv6HuPeevpy5zbHzfsfttY71PehzEB3yj6j5rTZ9k16kUkb8CvMUdPxVsirLnyjjsZJCQoQzsb1npDo",
  "key30": "42jJtMBVy2qwVGquXYvuohDxD9cwkK8C1dwo7pmAduERMv9oVWJ1PKpoEjExEnZGVsFTCTKq326GhptHiVqDxeX5"
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
