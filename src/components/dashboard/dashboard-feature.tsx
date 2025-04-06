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
    "25SZgyL9iFzont665XgiQ33c6wCqzEKUPz1TfcCD7msGsRGqBn4C422YvnAk4mL263qC14ZQKrpMAwco9HwLw5Da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADe3cwr9d4tTGWBiQCt1892DtcGDy3xQ2jdm7v7nWAQYvUqV7NhxUxXvwCbkEbWirFuBs1bBh92zr3Sn3EhxTLT",
  "key1": "2g1wFPkZyBJiM6MbFhiUtSuL29vhmk8pfZeiM3CN1NJRse9MhXwFrvJ3FQER6gU2iQiF3wBcR2jfTsoT2cqZGens",
  "key2": "2LMqwf8VGVFcjtq2kmQ348X1sWGucDpXBzbSFdUSSm7vsgFGPqQmNWmB2ZigBsvsjeHvn1njHqjRkjFPNvCVZ7Xh",
  "key3": "2wd4FYfekwKU4EVCDYqgTS7Yt4xJcSeq46af45e53pd2LdQQ2LaFQMsjbrWWTEA6hzUHwXtMYdErkPBaaBfQXhYL",
  "key4": "4cGNoKhhnGmTMkCjqmLHwSCYNrUjPMycDCJ1p6foXGi2NXZmhAvZmCrpurHYyp85qZP5iz2HAQXxeFLyQeX7ePcg",
  "key5": "uVBBM4UKtPnqZjPTb4tPa8odbpyXEd5xpeJitXAPzxdvEmeCbDmh1vJ6bZF6UL7rf2CR8ixucQmQpkYKcxoXNwq",
  "key6": "z1qnapPjb3rbCRo5mmn4zmTUbbJZ8u4mikWZkUiZ72jM75hYt9HpnHjCQa44txSyNxZvZUe1JgRatmcRhDJSJfH",
  "key7": "39H7niLxqsX3z3qe7J9VH9AcyfEeSLKNzYXjjSsT8JPQYdDcCUik9YEKLeZ4chobPrHZigrbJ4hNatZzWnb5EePX",
  "key8": "3a1hdXzvwpGtkR9o13ziLs7Hd7X4CfCtMVfxgMiWUFm6XWtQ5HcX4djzncDkj9gQshMBjsdmyqeaMbxWPQrT3rCG",
  "key9": "52U6TNK4o3Zbjt6jcugTXK6PGcW7hDDs2RrePZNepuigdT58cZ2LE7SncFReJA4x7y1r8XyeTDZ89y2U6f9Wxu5b",
  "key10": "3ZYLiqmRGKdr3qhgFitr2NpS8AGodoyGDrDXtPrtag1KmSpj1HaUD6cwf8QbFQYGrrMZbLYByTNWzmhG9zPDytp6",
  "key11": "25qcMyiJpKPnnUTLDjW5c5cc88WChp7TNnpULAPwSQESzppJDQwBVJSnmp4VaWMhVpFQ4YrA2iA9By6cKYSoUs3d",
  "key12": "JtwoSYYfRhseRPRyNH7GkzB6ivmQ6w8XMmJndd1W8FpA4aygufQskwrbCwPiWyYDkBbi1kGt2oGxnMvBPCS4Bpj",
  "key13": "5j2c98jw7Bz9iy47okbWVDUudHFHF6NWCPMBWD5GSrFCgwdryqbzDJfyoNSTcceM2xzG6AA4U86kSRW8dQmRJ6Zp",
  "key14": "595EjLcbatHbC5oqXkchDEW2q91Xo1nxkAEnqj6fbxQF6S24ho9fnLandzLCtQA1FP7a7nMS6qcgeo9hdhq3vWUM",
  "key15": "4ZeU6Gymtrptnd4ZTxtFDpBocuGZf6DbcT6gmQ3Pf5FrDq1txqZQoHAaTXZzyBqqW1NdkhZGXr4pDrWGAV37Z4ZE",
  "key16": "5BD7Q62zxmXB1xVEVdf3Jq8dNVqw2RWuJcN8Ja9qYHS4RnDrdJNVVuNJidxQRMEQdYoBrJ2BDX48LW372uh88wTx",
  "key17": "4R17SdQZCDywbfMJWNcWXmHJYJJMiZGQhQj1zWCK42rgF4YKvPzFbWsXPKxS1eNqtxYtHCnxafGAuyucjFFQ7u4p",
  "key18": "28N4gvnRRbEj9xyFdL38eqJ7opg3zhCewmWxkTz51EwcMGpp4ZR5692AJXp1fuYK2QkyPijLkKsr7ocR5L38tfWg",
  "key19": "5FsHGkAoxRTgz2uGRs6puUYvDzFPi8JoktRGo67UiGrSr9onCGexKgZeqRTmod48LQSUChDJpvyDEbuTiFXHzD7p",
  "key20": "5dzDpBx5Vg4kFMtskdLKkAfEwXXsYYxSdVwtU4i3EWqW4yYXpT81dJxSFpYCE1MArszWtQueitQZwK7KgPjjQacQ",
  "key21": "59KwQKnD9gsfXQA8VS7FaCtsSsqPdqK9VguvviUF6Lq2AsAjwCbgi3DHhA3EtnyStsGuuFcS1Njbwd68NMcCf2A7",
  "key22": "TLMp5JbrK8eUNFwicne7amM65ys2YuBpUiN8k1GJ226sxak7cYGJ9stA8LiD5om3PhTC97e1B4RkQMRLgvS2B7z",
  "key23": "4tBVHCcPForww3u6RFdKgzpGJaoiYUevF8SmPxio9nGpxARjfCnU6bmvWrZZdx46kaao3oDeM1jSQMPbjoKy6GMa",
  "key24": "NA2mgkWbG1j6mWGVDHGHZi8seHyJS2b48Ebsa1v1PnRK39hZ9d17nTMhsrsoPDsfAuRAsS4pUrMuETDM8gw7JUn",
  "key25": "3b6fGUBmHvPK8Annq3jbgN4tFdggC5Zs8N3wxdzJ4XMxHRHpB6MqsC7CdPKQ1jZYLPnhEPD8ADD6Dmjt4Qq1v4pK",
  "key26": "4YnqJZvgYJcBs6XYRtuCcmEPuZC5WSBMmynhZU9xjioLcxCDfBGTTpe6ym3cJNuZA6b5WXpsYrMZ4gUY5JNBLLTd"
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
