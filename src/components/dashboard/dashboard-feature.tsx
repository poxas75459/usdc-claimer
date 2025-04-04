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
    "3CX48e7CFBbX1v22btXbzrnN5UfLbcVWL239XWpJZBUswgWDZP8fk1u9oGwuNNxFVVdzrJTABEdRP6JcJsrMYNQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSCxQJhaFrrLiyUQxEMRJVv66y2J4LSMcZAheaP2jXj8pdpqwkVSeDwDse2xNDYCPCRk9wALv9ikjg3hq9WikcL",
  "key1": "jcgbaCmUhpiMSjsaUrUojBuksMipxtNLcCBKCEBpbddPh1rkdGV9sFJgiTzoVjj7u71NTvH8Br2cEcuf1g8s9S1",
  "key2": "47iLvEbXZbmNA1j7XUBz3p4PZ98E43cBjCQ1LcWxe9krRb2VvWwfxwMfsNye7nYoUiYafrRUdSHjDqXs63sHs4FD",
  "key3": "59x8VFEXz57B1vDMm5eWW64hcY4qWcJVDPLrjeHRf9Z8iXUnVMGKhQo1tWbKkDYxDfUjE9ERUFjvxxGZuVyokk1k",
  "key4": "2gfuD1F2ECzJmmsF6942HJkcqi61XB7WBHxewdmnAsgCNpRkVWC16iiS1mmksem6A3Rzo63pnbhf6N8CUkgTqBrS",
  "key5": "3KrkWADLVscGGT2o6TJAmJ7Ck8GE8rZwpu7TykHDNu516B5fi44NkGtMQov8naSvzPfnmYrsdYVgN8nm1MQ1tCYw",
  "key6": "MXSgSErcaeCU7Wawg2XeGS3koiE23zFDaMhwigY3uexghkZVSjWzsuzAoVJHq5tZ6UU4NNUJt1oRCUsvtj6e3jE",
  "key7": "3t8Fk5ayHa4t8En5VrxKT4A8XoUJStqN3j5addkMmWfBcToMzcZJkWYnDX2ZvYt7fouCFvJF7MGUhB2d2rMM8E6G",
  "key8": "5bXkhncFVcMnTbma676hdRdp4EjmdUUegrGpLLdDGdD1FtsSmfNbPLKMuFb2JL6h9fLMgrhjGhzAk5c4xQhAn2gX",
  "key9": "5rzmcbBKsPY8S1wnh1zQ7TndLmUCcBZbxSSkFUTaWA6YodrjxwKvtng3676gY41yD8TzjL7GATjAdbfkXfm3SBCg",
  "key10": "475ppA4JTyG92RJKDjtkzRm7PRjZrFwc6uxwbKjm99Vem2x9wWUtZbia1gG62hEppucBQafCvSJRZ9hzB1NGqsS7",
  "key11": "5JNmqmrJUASsCHkR7kgDwvzW2Pr5p9hpMrGVqgnXty2aGTvb5CJDnMKTuqcaPH9e37dt6kTUUfSPSGFWNTW9o97S",
  "key12": "24bXut3tsecpJAuezhj7FWosNDmWsjG3injWPbsGdJBeaoaGmCdVUpgMkFN5RD71ZZZzrJiU7VbjqUzzoudhSKoY",
  "key13": "3BxSwDDzJYVmDKiz1Wu16Axzm263TRBLkLsxLuZQz7UPMpjhSVrTjTGLHP9Kxvk7scBycmgBMDzcg77PaTFb4MP9",
  "key14": "TGrkvSrVQ46twStSrm4omJ6zcsJiBbXZAzLijArFAJfVbL6YS84QJAccBEhfjL2q6PWDakNq9dxZqwXYBPGFTMe",
  "key15": "tcR1g56xEbhwAe2ASsuaUDQsnFX9veXaz4myAmGeVDnm9Gix2yxy8Wu5PABpBFr7X1SWEM3WL6rrfhfAhLoHdzT",
  "key16": "3ufHCC6dGMfWQZNHyzSUqSXTXwwmMd5sjjQtszZ2PLermCdjPkMuARnyCXTFYY73HKCfCNEvoPmmoHKkJPDGWG65",
  "key17": "2Pht5XVGpQNc1di5hfnqr9pYjpft1sezj7kLcJwyL4jbVs8Sfxgiz11Edk5ebrYLAb1Bc23BBTCp7A23dV39CeMC",
  "key18": "243N91qP8guv3e5qmpV9h6rm8x3ccFciibjp6nksxsqpm8G4Rf9LNkBcJbGD48JJjh8mbxTiaCRRuEehT7KYkMHY",
  "key19": "5wWfskJ4GveydnSBy4RXBo2F7hq89gnXj4KGKfhA6w1oiRNzU1m2GoF46eU4gPhz7UyUDhFnG76N657CQKvXrVJA",
  "key20": "4Fv4eLFkkETqha8Wwfh61r7nMP1GfbSHwqfF7CVRtaz9FDUrKZ8JJPuwgeru33eL4wuScA1AtfAxXFt3F9HHUJwp",
  "key21": "2RLMt7REnx7paDSuGFyDhBuJHPZDC33GNeduX6wwTYR17kVVJQ7mmuS7WUz8wjwWRHt1DjTDZWhC8U4Ro9c5qbC7",
  "key22": "515KMUR4KWWGHxosSLj1kAHTXBtB4PVUrCHdUJfnSiHfvRw8grwpqawe2yAHSGLe4qwsM7ixuxy4MoKeUHN3N9W4",
  "key23": "2yLQiE1WdGC5WCPp7PYdn4B5FKrmzWbmaxXZ2ffJLaeBAeJxz5V8Y2hdTf3JtuvHfVWtFBYjwDfPrako88p4gnfK",
  "key24": "EVtfYvtQVF3c5JJRjN7Hc1EESvLdVmq8mS9xR84baLQUjeaKqBKXxjF7abbjh3WRD1QwtXJ4hoKA6WbqFr1at31",
  "key25": "t6wACAtJHVfMvj9CYe1UZuZXGcymKMQQCB9mAUFAxYx1rCm1CewwLx6FpwCH1mi6sW5LasCoKCxsTnNoSsjzFiy",
  "key26": "4iuVPRjpzwvJwvuLDNKS7bACAwEbHqf1XCJ2WvSQfU5NwKy6zoNVVRvxnMFLwLDGu2wb12s5XkYkU446h4zdQrpi",
  "key27": "48VecvUvUMAD8cMNHwGZ7c7nWtLRk9fxwu6kMxP1ffd3XNLcr398SeZXC8syovNHsad3GX4dMs4jFqRXcvBy5CGX",
  "key28": "3ErzuTy2R1JDmSvLk1XDKWZ1dF3KLoQjj6nawVF8b8gkNyabDBZqPW46rr2WCjLL7ZL3zUzHL5ML7nu57hfL3Pxz",
  "key29": "57tZKT3nCZVrhqq9qEFE631DnDZy835xa7r7BCRyZ5jkuuX3GvTdVqyipUxd7Z4akb8JcoL1VAyMLEtLbSbXQmow",
  "key30": "51ivSauc6MoGWsX2n2TYZ4vAZHufM6sPe99sQXR42bqeRZ5Hoy6jjnnRzL8Ys2B1q1qM7HW2oB2N11Cx1ZtZSTDH",
  "key31": "4rgyXw4w5RhQx6Gt8wgB4faTVP2KZCfHza4a5fZRgTG3rC9dsCewdo3dTFeg5ACV1d69ESg4M9aBumC2BrYTam15",
  "key32": "57YoXt4HCV7LJaYK7ty9KhTLxBYZXARAcs6Bx1UzuuHS9Sa6PJLhnarqb2Ah8T1AfFuCx6HDs8XK8QxaAG1fMEJV",
  "key33": "2KU3d6aePypFqohZeE6bDpJ6qjECPEW5fHBGr69BeNEDfsHb58ZE68xswx2RXtEXWd3pEEtUdFPthUiWEG5zeMXP",
  "key34": "4qTVytdDaRsDVzzwRY5vTihtya9vNRWCYpEhqwMQ1RpYs732LW4h8UzhxMkmfDkaZpnEV9YnmY3KxFUqirWxAsgf",
  "key35": "4FDKqFosF52y1piTQjUMgDueqJLqPHmgiLfykGzJq2ihikKBDsbA7mg8rQTkMpKDuM1qx1pYP4LGfrqHJUBtjKBh"
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
