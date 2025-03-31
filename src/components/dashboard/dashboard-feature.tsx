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
    "2gM6MJC7dbwZfAcPhrTViytr26LZB1Z1u2DcSKv3FEXmmkE1w34DFcXp6cBV2T8VGebFGBeNPVksZBknzSBpTNsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wN5xLxHky3CLQpx8TSqFK1XVMbDz64fpXcwNLz3FyW7kttfE7RHyG3JatkyjBABDgvht1n6nDM6G3PZ6f7tHvSQ",
  "key1": "44j2wVNF2kU1SJiF8g5sy3vtEZmEmbW7Swab7V5tDUvWdmPw9JTsrvn4ECVmZdAcF7gQagrLKy9MGfN4uztCqyhm",
  "key2": "3EnqqxGLxqekDzyxbtUVULSgSvwJuvvyMHn6KcxAsaP4DN8GjRSBL6Nn66MNdcGDE17w4ionb8Z8RFZGjqxVHqV8",
  "key3": "354m9BBgF8vcvVcskLWzskzVT9kVu6JmB9R3Y9ZU741aNhYV5fU66xkW2NXt6NvZNLxkKgGZkAg7gqTBcUXXUsYw",
  "key4": "3QHA3Fgm9cSX8FxFuizRRjSHEH6Msp4z4rTq4sR1Wk7xBieDS39zD8z1KaR1PWDZeeGgJPbVfVVzDw6w25mGXVXH",
  "key5": "AbuqzsuRB1gFpPogzxBXneyRa5RNc7uDwN5329TCn467ydfPTqyuiBtLMUJnx1D6d2zENeS9m1pA9LKXipL5hfK",
  "key6": "3LjdU5KbY6rr4ZWyD2AUMZcSkQKs896rZy8R5jrmnD2Y3xcoV96xaTFAAcFYadcaaDqxQ2yiKgZmamvdh9htYJ45",
  "key7": "2bycSw1wV8LcKtGN6w6fSBk4jkB1mEcut67CTLDXT1ggm1NR9mqnit9WCjxLKDST9V4LB27TEVFbPCgdf1GxGAuL",
  "key8": "5dqAL1dyPoAVHtPSJfWbvpws9s6RoeNbeMTzdQgSgiN7a5BumiZHrKuHzecYm84HJtdEG55xSPaer56TqDxvFDBk",
  "key9": "27hqiiFAyz3U3K2dTT1t3m4ZMBjLBAM76mkYX1RKYVL3u7NbPfe8g7XwDnCUvRsjkH7er8niTXN1e55RDrEUieXk",
  "key10": "5yBvxdZDXGnKCxyEqK1Sn2YzTJg2n2kTKLtPQ6kXbGH4BuohEGQoT6bWgnrbGNMaAmq8VWYWXCABGU9JQELxVtvm",
  "key11": "64k4haziNrvLCWzuiV1DXZZWQgogqB94ah9shhUwAWbGwP6FpvKcQ56gttNmEFy29YK7rAq2vD83QwcZytxocPLD",
  "key12": "2nSvq7P3sySkwiydEB4C1xDUxbWvVdXjJJUBim4q8MYooHW5pfNW7ij1F3zncAjxzwyPJc3DeoVqJ1SbBiwArJWq",
  "key13": "4tDJjYRo24NjXEBtoyrU1udiWyiAFmmzPuRusWdqognGidp38sncUR2BnRrtUHNWtikY4he9WbtGSsXx8q8QstFv",
  "key14": "5GFr7RW23MaNTJi2hZdGpTJzeTy7bqqC1hY9mMUSw2iwJiryEJzUCAigNaDMopHeqGFCq5n9pbgDYdhvkTc7wzJT",
  "key15": "55uK2in2JgDPg2QbUi4r7fnpCW6KKUSfYajAFyHMKwhT9dW8ykbfsPjCG9teVNB8wN59TSU7JhazQipLuSCu9Gyv",
  "key16": "5fLUnpLUE2f2F4xDm64oJMRe5n1z4rYZjhvL9gR724zxM3mv3fJLBf5KpEkHaHLL4ZK5A1cNMK5WH6DJ8yuYnAa8",
  "key17": "2i2UB9reCvjDnuABZPSYe9ZTWYF3sQPhcQQ46UboF7mY4UBYZTY9JzHpF4kcoit1tYKBZhA678tYCreBLh1AFAg9",
  "key18": "5Zp2F6B9sWPhQ7W23SUZqW23D7wfcGidw6dPu5y23BiVX18Szw4k26XG3QYjznwoV6kd9NePnQVtjDRAVKCDvE8j",
  "key19": "2xD6SJtx3tdiFTEvz36mb2yzyR1LvZnep3mtVykGkygYHN4VPi1si2YN6uiy6nqcELXYNcSd7DT43rxDgBUQPssN",
  "key20": "41DAmdyvXb9cL2jgKZ4WabmiRrchqc6pmXEh4gpsCFCJdt2DTVdsx5cfaUNFuKGNuuHhYdC7FoCRV664MFcuhAm3",
  "key21": "3YsVUg5LxhoPMcrwrhjKyLKRgUN2GzKS5dB38Lxe4M1aBPAgYAHHUPh2ozfNPpd2bg68WTskBMG7j2jrM1vc122h",
  "key22": "3Mn28UujNsrEVeRvjvqT9wmzbuzhXqUNhuPy6hmUHzE5pYFr99Z5xwKhREdWZHyFu3SoDcrERprqzgHwGcuAekfm",
  "key23": "4SwMcS4m8z2jzdPkr5gzNLapeHY5baE8Gyt6eWJSM6E9dw8wMKYU78b7K5RDswEXTvGduD6pPSLBn8eXUoetkCnL",
  "key24": "4rHCSXPUJrx9rzUVsuGavHcR2XYMrc4TCF8gEnCt8d4JJ9db5vthvr1VAu6PNny9Tg8RKdMpAWG1FetHHBiVviUV",
  "key25": "4Je6cUANKMjuQ1RWZUGwS9vZuEVa9rXvj6s3y5rVBXjdAk6R4542kYfdQxkq1bGp7y2PF6xu9zfBAoYbiTQDRJCW",
  "key26": "5Mqexg9dQgfew4hRYeNKP8FMSyYdma7Z1hK4e9hqGF5PqowgePmrC6Zot26onm9e3PSVpZfsCK61kNPBdr3rAutG",
  "key27": "kWS8vqHKSEpabgYKsa7emmSeV2h8egKbZp6Je4QLx866vcp54BbuhrCLpTcTkQWjWp5dVgaPXFokHyedQTdpC6g",
  "key28": "4NWGK5u2ztVWsfyA3q7fy6WALZgtZhTfR9v8hcZ5E1RHsehmthRA4DseMssv5zyvdCoW3ip9HAY67rAfZ4SeDSZP",
  "key29": "6EM83BUEs6tF1UMdLNKubSHoEosDKzLrpQrHup5mbW5SNbpTNctN4Ptnno6Y5FG2nXDgXYLyhRFzPXtEGQE2BqN",
  "key30": "33xACdNs5dTWW5aa4HDhm4NZV4xUwSis6USG7DyfcidQzPtXSmK3236DwAmDnP5E9VZxfgJFRPhtV3HwjXoGbSoM",
  "key31": "34ZfsXdDFe32jzzwoCoDhqEZCnHeDK6eLzUPpnR8wqzPm7E4wg9CSDKh2PAnj39hnzfd27fSqmJB1XKJEJno7Aeh",
  "key32": "4gbz42Vb7BZewx1LarnoC67oh5gYVJWgWSJ3PaPxGZtYhKvZCwCvtBYYuMb7Hjn6osry2VU8LgJMSDekqbu7HJfk",
  "key33": "5Dt4gygEJbDhm4LhsXv43pSdXy8k3fjsprQeE93pZfVGop29ofJtkgFfr3tpGDyzNDNp1APFsGi3noB9d8iw4oS",
  "key34": "S14sdXYYHFoHzmn7R6Zr9xH6JhNpsPHULpaCBELi5m4zogH2sqkrCjb5NCEcvYoNwNMHscxCzQSa8iYwiZw2j62",
  "key35": "3exnQUFT1JYp6MUwFAp5b5Ehik3Nw1PjQyjKsFV8XHdn5fbz9Mk4iwqCsgAC3THiBfAYNdMHZNes4yVNzQB5Le1f",
  "key36": "4a7Bb9e6EwDrJ3jPEvzc8ZzNF6tZhAHzSbCVBa69CJm9KQFe1F2GuHvxS979JjygQvuQPPL1SDk7GKfMwjQg65U8",
  "key37": "2pvBgPhBJtc6xqGPZES7NPkdnEBA9TXKcXFD4vgpMoNDy1wSEVfygTLes87UqYEMMEpcJrdma2F9Rpye9bpCFbz8",
  "key38": "5HFBzfhxMYgimAr2Gkngf1dga3XM7oLtEphQJ4FQmTnwCYbLdKxjqAkKbJ2XKd5LLSLC1K5vCpTbcD8E7ZsAV7Gm",
  "key39": "ajFRC2SZhtCokqqqx84ZWHmVv45ugVt4L2H2TgcPwN6NKWCYk8MNynLLcDtjRfjhbCtJ9qhzmb4VQZkhubk5vq9"
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
