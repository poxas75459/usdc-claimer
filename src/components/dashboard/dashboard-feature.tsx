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
    "5UKKntjhRzegR7QG4Y1gZo7iMdrogLx8KWouSh8P152iiqB5pYgQd3JjYuQM58o7vVWePK4XwWJfxA1tzsRY1mxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFJUagr7TN85muKYuFqUtMLmsLNVb1dVJDovZKQ7vt1s1AS3TaLTyCDhHj6oekEG2mApaaYYMugDjzK2TpcSKej",
  "key1": "4sEzRkff3QSnrrX9ZwmCnc9y588U1efSCAsbW4EfDjLHfR2Vbss3W6SaRGvtbRwLfU2aGdgjY88fPthtxhzHAxzM",
  "key2": "TVpegf1ehUYTY8Axwjpqx2NhMemNWCv4XvZgtTV3SJhXfrBibEM25jaU1ize1ADFWpCNU5JmLtRtomn3Vuq4y3p",
  "key3": "27pRgWerE1CJARaLMzwvRTFtUBp136WsZ7rXKZzMV155VnGk6LXHmd5FyQju9dDMDidjDr2LWS9BdWyyjsfLi8Ds",
  "key4": "4GJZrpvDiahHQgPzCCqTNQzHkvgtVRCJsXXWxiiQTVB2LTYcutRGVZBBxShq7egxGqtXaDJ2empCJeVA97ESsffZ",
  "key5": "SFAFDdoeKnq2QEDtnfMbGM9eyv9LaiWeUwHse5WU5txYKbKZUmGfziezYjSiaL1mmgsHL4DbguA82Nk7LSjYWfS",
  "key6": "ViVSsBj1KpZwfFGWqzR5RhbEMbJqUwk226aA7SxixquCPbGNV6tZiidUMK53CgLrPAeHQXV5s1xpnjqeTbx1RqH",
  "key7": "67ScVnEYXabqLbLv1fmTRv5Lq3u3eDXnewNYHXoaBEzy7ZbjxbG73187thaSmXPzeb7ycX44aNDDFDWpg3Lw6a9x",
  "key8": "5KTuNRRiHCHDsGqPMFbXHeBSHiGbynMWFi7p5ZjtB94sAWuhtdCBiSCNhZvia2BgAu2YAzwcSRzYzSgodcPPcrRB",
  "key9": "3rmB7RxUmMZpvdpyfkDqtu7Cat8JCb8orNDFScfbyryajBwuTNiAg58saWusHFEJaeqcEjQ3ufUdQMst2uMYLAWH",
  "key10": "4tMqoTmdvTFiLHU2AhLVejrP4mYNu5NeUR21PnYUycgbuJ4t54QQq9zsmFD6HtTf1CgwbeNfXHBQrd8H21aUdS8Y",
  "key11": "4CibicdWM3a2jMwTTh3CUrRPUfybjPqaMsKoxyi4547k9SgHfoVyrmPrwPNfBT3UX6Y47xdzfwwsEBzaGLuK5FHt",
  "key12": "2V4RhANGjjZM17pvvTXCzv1gyPrMDxPngX2JovTKcaUwyLXFJsG8dS6yd1YA9nTSLLCUfP7rhkiVD7vGUEp7qN5m",
  "key13": "3WwTvnn7VXnqHR4qh4C9PkcezGWFm1Fgvm6sj9MsaxsGa6QNGeqfBccAnE2RuEdKgMsdJx24VgntcwSryeyFpczK",
  "key14": "5E89otMggjSjGRy5uCtx3EYMdEYhese1CZhGLhUvwZe2uaF7A5LrXFDQdmCe7kN7EJebcc5qxeAfVuUGfjzstQ6u",
  "key15": "5zT52gxz7u4PuHtgkxSc73kzLWuGDErwRB1QpsCAisa8pbzmJqwgH4NPLXfZxvZeuaV8TQBC8tYGSQq85JAosY7W",
  "key16": "NsPDRmD1gMVzFhmgRaAsbD3REdsAz7G81XwG3brhdau5vckZSKpc5RG7A2mQnzcMGWAmwKxTyec4Bw5G7o5Y3GK",
  "key17": "zQMo4DFNxZ2GFVo3dQSsoQLoLmjvofh9Yg1GJpheYAbm4AodRxuYJ6ZUKMBNKabnHrcwQQujCwtdScx7DTkHQpo",
  "key18": "3QSzonK1b2b1CPhVMKX1Xh75q3EgeqUqmsqchTdsFiY5LKKPPwzx1WvUHAGR2oemuY9dhZ3yXNxqueMtSSSRFNJF",
  "key19": "L9LgjnnNCsCbtuZVFQXRjT3JkCrhT5ZKJMVfLRLocb2iDhvou7sVN9oQdyWL4uBj5ozVUJ2jCZBCNiEr1fiU4Cp",
  "key20": "5eetipAwPxVRjBzc5nUz36AXEHVHCKpc9dvWwjXbTAwDuVUeyhXSwY8s6wpDeVh6yKKUoWV2Zd1BbR8KKvgPfds6",
  "key21": "qWjFmWLDFfPxGAyZpsGFvgJYh7xXENYTRcXt3GJe5my8o6jKFom6YKuA6GoMpD4NJWBXzj8REy295ou3fERqrQS",
  "key22": "5FLwvexEry1DwguhKZMPHE7jVmCVnPi8xmfYZmfiPMXD7FDHSow4GjMLdCQyKe3AsHHEHz168vo7cd1j9EpAxZs9",
  "key23": "27zqhmQTidRevEx4KF6FzmWdNpoYi63sVL8qbRzoeTw6LnNFY5Pq9xsnkQnUCrr42gzgZWdudjC9zwm8j5ediic7",
  "key24": "2dvdNtrwaBxi2h3DZfrriiCc81cfqZuRofBxP99HLr4oFiUwCEKZswHd2H33TYW7VRtPT3Tb4TFrF1KCuwu5DPAi",
  "key25": "3nDmA2pqQmQoUJ7LYbPU7eNZ4RsdqTg8ycbjyBxtEf6gBZ3ybp963xbDDymvV43LzvXBDA66ryJDbLpi6idPetHf",
  "key26": "2acoCy9k9jkvkPRZ85q3fBcLUdaMrms3oK4uoB9V1qtWoojqinLg1AZGiE12sAKYk9r2fpAVAKLSX4vujEzBMwoJ",
  "key27": "q1WP1kaDebpwC72psDPbDu4wyoHaaQGe78i7ow6f18ji4dBXA5nu1h6h8Y31aRtCQxaoTTbimJknyeoMK8USVWE",
  "key28": "2WKB1QPMryTberijzQzDHstve5ZFGDUTaSoTr1NRgdY6AuyiHPuyGwHkjcicstYAS9Wond2BLRySFMWJzjX3SB7B",
  "key29": "4GZ495bsa892vEan7FHbki6gAp2YoCyWd3RYV64yTe4L1mQraAFn667ntyWnrYsmzwVx1d4XnEBXF2v1j3j8iLcf",
  "key30": "5wAYtoCiN7pVyQ6BitqmSRdRJa9xwZtH6UpSBa12o7ZTEkhz52eRnsyUDfUpehPuCL88ZA9Lgeq6hSsFFJ7ppEzD",
  "key31": "3o3p9Bvr52BrdhtfHj2n1tjYYjDymNTNEyEjo3aqKXNPrboRrX1kAfu4w9h77spD6pUTTLneg2iLnJaQ954FrhWN",
  "key32": "Vtw7irPRPgDgqUTDcRG11Zx1pMS7hkDWWkWaUgB2QXDk1V2qGrquodxCXPXbbUFwQ4XurqPpsuiJ1hbTEDh536Y",
  "key33": "32MibEyqKFLik714MY7CY5BDMBGLAgWFB7UD28wKuAbapr6NLgdFD8RXJeVzEczeEYAyFpds1VWMSCAk5aoZeRQi",
  "key34": "5yRT2SWfTNrEUFNsoY435S2Wc8yVQAGzDeTZAGd4pw31tEqbZKbbrkxfx2aRH6h44mdeotYp9WMJfGoh3J1JKynC",
  "key35": "2DC56XSUesmuraWRk6PtPtaEjzCNbHaBnyw3SVxTz2hGNm6mSGLWSWbfo3qvKkjZjrmUZf7wUeSHonJ7xTSTgh8S",
  "key36": "3ZMSi5UV6aFG8peg4gLtRpJvprAsgPxdZGGS98jbChjafoaVBULGqtoJJsaY9kFvigJ3E3zsh72mSHH2vVG47svp",
  "key37": "2222ZLU9P9ePdtkjp3r28vtUZup4PfSmkRhXCNwkVvcyckMX9QN3g8jtfYRGPmuJaLf3VKUYdKTTVCQoAp7VcwEX",
  "key38": "3CKy719Y3CUQCLepED1BYQrp6AD6p6LjkUHposKoCQgVTEjHt9uspg11PNvzamch1qtXYBFE34mgbdPXBrHVhCuL",
  "key39": "KbD1d6nn12NjW4J7JExE3oQpxNk7eZ85ah1XE7s5k4YpFtRtJPEduJ6DCKFGph79xTaycHqfCmVBSBksK1zgnby"
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
