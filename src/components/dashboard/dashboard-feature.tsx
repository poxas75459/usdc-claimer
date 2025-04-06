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
    "2JLC6KX7n3LhXBjdDrGGNdNXJ9qqgBMrszNpoGULs1ZV5eWDApXFhg2WoE5SRMkNiTAfZMNAVR4V6scofHhinyR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrthGe9KeYdVcfQmADpmLQHU8u9CCzdTfr4KpUbtWmLbEiro7HxthFCv3rAFUiMqRMC6NrQa8SviV2WHVZtPf6A",
  "key1": "gHFFeXQMjnJs7mYPJxEDEMZL7aKVyJYaSR9fceSYYzTZwJyJ32LYQAymie9fqkX6uvcnPEdwav7kg9q1MT5q85C",
  "key2": "vqwwV1qo2QThmQK9iFQj156RrDnw3HbXC2xe2hyGDMpsWawRy71t3x1wPm25b4uxWDaUX4r3C8muYfcG8ZqdQsZ",
  "key3": "3Z9yaL9v38vxTMfNogsNXXrYTfhcTWw7VuLz4ot4QH3bJZa8m8CZTw7DHUtUo46E5KjHo6oEq8BxCUJuU4uHnYZ2",
  "key4": "3ZCoC5TqLSu9TBshvQR4GitTcCmLCDotRwgAZdTYUwQ7EJEnBE46AwdmLovivAYFpEUH3Kz6hMWCoQs7w7cCE2LU",
  "key5": "35M6Wn8FtvJNnRqmmtaP6UhepZgNnsTawAwnQ2q36gwgVTordxzdfCRQ4vzZexGzDHF4vDAZj6atBaS4NEXoYLwV",
  "key6": "3fWwLZdXsZwDcjKgV54Mn2wUfRwYmRXsBXenKvzSsWPhxMwq5ohDFMtjDbdCooUq3rfN7J2qgPBaZ7rkVRUvQ1RH",
  "key7": "4iGQ8uSfszcdBLPByFiKg9kHpUhAvsW7kufNUqj4w38ks4qzxKx7UusPrWEcVgNjwukHX3knt3Tq4mAL1Nukdgx6",
  "key8": "qzpq1Bx7KLqUDYvtEoErWV5TrJoxBhujbbpXuGMRb1Bj9EAnh5k5N49ModiKyX5kf3k1e3XA97Y4MEpkRbvqUtE",
  "key9": "2TGzPRvWevTSKfMix9FQjyquTTtTq97fYGeq1dv2jaGs5cahM9LH26EnUoXNqZJomxivkSUtEiZh7jKTEbSSSVxd",
  "key10": "3cZ1LohSUapK9wpV9FHv3CTckLnacjRhh7yf34JdHad3PWV669AMz4fxGC1KSLw9X9gxeVF76i768VbtcKPSbVEB",
  "key11": "3N9XhYMSDPNvub4D5kSRJQxR4kWuaq245G1aC8iDfiBpSXqeCHYz5aNHUUtTjSoVnoRYgjXfkd7BD9ZovU4PEJj1",
  "key12": "4cJvXJXiJ5ceKgeW85zS5sstnzksz2HJbx4CNMMTNy88U4RQCDczCirqiywKn8mLA47DDeX7HupzN3LMCMWjreaF",
  "key13": "3uV3qKFZrYACwPDEokpeUevnrkWuKxcMSxrhQG8o69tfpRiCHd1pEvyikkPh7FTtgriHzHDDP4oUR4WRnq7GBb2K",
  "key14": "5yXhAWtwNQQbmdjfhKjTXuv1nmU3YFAE7aatxx6UFnj8iuD5nHGLP4qmrNXoXDaCPUAfZTDsD1fV2Wr3gDYt6UYg",
  "key15": "4owqfMiotHh3pbUETY9R7qFY6eZQ8r7ivV2HmUyDqMNhC9WaBjYXCdjmDXutXEK3aWjoqZ56L7QxkRYt8ycxjKrn",
  "key16": "2wXPXraGNtbJWXgVE7Nc7noDzq7hNZEehJWS7ochS4SdeyZik8cba683LaxuBCXjE6HczpW8M1vPUFiXfeudGchh",
  "key17": "5aP4fNGcZnrXkb87pT6V28LAQEeKS61CZw9CB1vufpNpyvMgzRfNF3Hyce9kxUuwQrWFwEjqMhyP4FHbDqMu7p4h",
  "key18": "3zmYV9PF3UZY19Ds63t496qV8sRa3DYY7JYAJqtPv3K63AUrEtYrJxA1xb4M8p9w2deEcABFRNHXpkLw3eC5qFDM",
  "key19": "5yrVpMnz4H7M8DonoNuLkhJBZmWRMC4Ark1HBVNaBtkVD1G6GR6XmmBPW2L2wkKNQidNd3oWT9nrUh25Ajw9g7Cw",
  "key20": "3uVjD9752GA6ATnnSLtc2Ey9uwjUL9ifXppNnNiAUqbojxMNnAtnw93RvqTZdQi6KTyo3yNYXeJg1f6iqkY4NZSK",
  "key21": "4EYLZhBscuNN4zYL4hZ6TfQtzarLBpNW3PywXiGyRkzqZuGmN6hTdZy2mG9NnJnUWp2JTQTBJ1yZup9UejK8md9A",
  "key22": "3nqgoq53DyDK85k2wRJL52HGVo8oUkihGe8KbgYFEQuVjthb3ZyCqJiuGGprQaXqBhrhW6pZibrxX4omF5AJXLkk",
  "key23": "3rVvXwD2YwrsMqR7Gciy6WBMPRhQQU5K3HQJc19avo8eXx1J8z5EBK9iwojJDuKFbszHEcJUdSxxa37D3kWRPSGq",
  "key24": "ctc4bojuvkRKnbJLS5dMpBYGcwccjYamQdbKom82LhjhtqcqDuhvKCELiyjQNVkJ2jz8XFQugEjp8ZRscjQGaTM",
  "key25": "55bpf7a44ae2kpHGEtRHWJKkMqeajPYnhE5iBxPg3NQMioDEiiJTzqWAaziYxkeFmtENFa42k53UnK9Y5nk9nuPv",
  "key26": "3J6gCf2CcNkRi4G8BRFP3gszSYYL2NcUkWitYyoswQyEAKDsfv9GivdbyZsgxwpw1KrLnMTs2Jm2EdnTBamKvmrX",
  "key27": "17H1d4yWjdxBZfBPmDja3AQnSgmop5XznbaeuSj68Xgx1jXzDdGC46azm34WvBRr1XajVE3DpFD77YzNNVwBMYT",
  "key28": "3Mc68rVzmsAvX4tkD4yTjh8c4RQ1YD1wV5zaTeubXqSJLR7k8SdJaux8c9xVybFwoNX292WnDQYS4qY7gCLKwS69",
  "key29": "5KANmfxxTy13FY7QLgrwVkksYVCsXk1RQJw6GUMwNo3tvj2LvEVHfssnynWeDK6Yt6ShLg3VQq4sxBTLbTH8BoUP",
  "key30": "21EKPLvVW5o5ZRi9YEBUJWiHHe475Fc8M55NKv4iYcj5NDhVX5FkFhCh3D5PwfgKhwSPiTa36c4euBDSL2gcLiwd"
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
