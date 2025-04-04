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
    "45Ht3THsvYcYsWa3WoixQki3JoQvtWfAG7tXeh2BteujUuytamYPm8hxenFi6oYCpRQiK4AxEECBUJrdfdxECkVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Tq8tKGVMaYdd1C1zSx5EJUSo3duhTFpvMcuquUGHG8RgXCgFFcwv9YryNaFSVdmgEbB4B8Sja2Nd1u3FAKGoqn",
  "key1": "4PSQ3ZV8CkcgHtAMmSHC3FhbrmDwaahqGdfV4zm1tKkc88eya2zB7vXzdftgtVq2zCyeiZtVvkwo11pFBd6YdJff",
  "key2": "2WytDMphKyTH378rnU7UwyCtoZNhgvdqHTEnWUMKyFEbr4Lf6vHwveuxNDWtyVquLK1f9WCoaFnnrse9i6CcRxjq",
  "key3": "4Ant8ff6niqqJAizNCi1gv7gWZWUigLM2WVonUrK7uYcJ4Pstg2WA9ydroyXDoaCtCSVaWyKR1esAxVFCtnxH77m",
  "key4": "5NkbzZytCS2n1eRR7oiBjpMWeqAU6149dVGhwLzyiqMcrJ8M7TQpSYopCaZz1oUWjCLyNkxoLCMtQ8UNEMShsS8k",
  "key5": "77Rb9Cxz6wWLD8BMo3PCfm1DrPU92Dw1c1SSvyVBRGgvn7ffcSP2fgmBxyzqXyXoHvNQkv8d8dSqjV4MDDdLZbR",
  "key6": "2inMonUCoC6eRGRudg5EPoun9qBBF3kM4hRA6HSQkJqntqaxPSDoFRti7zsAJ2Roi2cuvfhhaQQsp714e9qTskQw",
  "key7": "xJEkLvL6VJbTGKxP5TpDdBrrnBPaexkxgZvxKdJAHwPvSMH9H4aZnWKFoofNEKFP5Nbs6VaF4vkEJQ8wy89fPtQ",
  "key8": "3Tcx89cmFAcsQY1ck73oiDEydd16vNr5yeePcMXiwqGqMWxhALkpBybmQtus7USPHuSoFph7vdpNGRWVBwcabnAJ",
  "key9": "2JSbxkuxPTcfkkoNhPFC5JrRPQob8Wg3QK9PA6XD1btUz8tmEiLcPCzdF8s2xdc7ryoVaJxeQBcfNBVobBQGFPRk",
  "key10": "57qu2UBBVgT8ZcakRRor1MSRqa8azSNsV5nsyddKfMkDYzE54BSTZZThFhKAbv4mh24ryoV4P9VBGU9xpuVpmSNY",
  "key11": "ZuB2ag97wNrFfmdS5c1PxURi5hGKGwRotnHBg25xhXXVsLZLwwSRD9N9H9AdFNJyzQVGqZLdtGtVgKw6UotUEpB",
  "key12": "2XwaHagWeMmAaVZKZ5Z5JFXzMVrEwkrH9utwDaHje7gxkaZr3MJVdqHuNQrXLywwmhimdcCJyhKeh62XEoJfJnzW",
  "key13": "2ojCfZSnLRYNUyvhGi5Ujiuaj7RWC7RCRvnmaMpUU1GC7KVh685rSVbE8d3NWg8mAo4CFjFC8eBrHs3fJSRkNK9C",
  "key14": "wfwyoiZhLD2z674zjFcVwizjRagNV4RjtBDNEzcquydM7viFcMkEfJxFv1EGx5euExJygW7mf6dj78caFN4wQ8H",
  "key15": "2txeWX2Z4f8JTmphVkqjeXvzUoBnvvvECMWRPqtvzcU6MX1SbtMcWnUEwK1z8vVAAtSuqa3pbwv6QKhs164Qdi3K",
  "key16": "5gT85bgVJL27YeM7pGS6PvpJnqdNNsRk4xMyQPVXvSLVNx744FTT8qbpgPK92Q8H9weCaxhiQxs2dBxTG1JA5CjJ",
  "key17": "3eJmUZyBSCeRLxJgv9iS7PuwSf9uDhFxGa7s7XT22utakFLhjL4RMyaKyjZg6ra6jnbWz6StMC7kSwbmZYA3Qjy3",
  "key18": "3h6FESDTQijPc3wZG1skncSWLdoWWHyTzNdBPsBF8d7W5bX2EGWebptE6kUPK45G5Vm5chcAsiqZAQJpVmtUWd3p",
  "key19": "2BJwf1RZKqGdPLXB31B6ZJWCGa7en3mejAkrGbqtmne3B1ikQtX5koXeaPYLivSLXQ5gpxiKyR9D1QdvPuCWPfuW",
  "key20": "2iggf8XEhqVfyB3JASk7FhVvD44VbLh7dNPumFfqatxhW5c9wN78m1XreztnJF6fDWmz8bvCjtzZSxRLVjp2tscJ",
  "key21": "mx4GXsfokX3ZVRjRrZQDsKjdL49QgLGEFseVoHSqe7gB1vXLcRtsKLa5swiftZ1RgTnTQovHZHU3ksnGRNHKE8i",
  "key22": "3LmDQp31WREmvV1Mp3X2f6iwi3Q2W98ZnMaTSmeKpRQcBCapLw5UFQGhphte9AQH6AMi5sfzziKkrGh4V7DauasK",
  "key23": "4UU7gG3Lxx7jPviPfRKGKk7ZoknmxHpogC4jwzAbQo9PP91LSYXA3M6RQAzmFEvVqbqmxje1esoMLkgu1xKbyxjB",
  "key24": "61BR7JEnEWbtbNQcWJj89tuCivquqk4SttTHFMGWtfE25Kcqho1zwGLSiLGaRxtbxcF79ezkwuzmcL2L22Tkhv3F",
  "key25": "5wtozR9yLi3AKMZWmkCibxkmvAjpmrTEtxWdnJHoBSsiRYckdmuaV1NwNhWdHJa2mZxwRptQ56Q2nnToVGmfjDEV",
  "key26": "w8aPudq5vr2aKNAR3QTAk2hvCndoAC2QyvCMeujYHT3SRtRddU8qpYRRnEXDVbxR3Cp8HFiaYM4RNnHXom9SgWz",
  "key27": "55Qt1ZeGS3nmsp7n4XXic1Ut96X2uKR1KTtDwKoBk1bfte7nYtq9a4CsA2DJZrmxvX7thbbkCBa8HJ99sgFEzFf",
  "key28": "5qmdsycCujsVdYMQHxhAeiQ4QgEQTpcLtxEs2ayqtmdHt6wrxmfKxkXShmsU5K5Eb2N51AUWwNpybHpKc4VSjarg",
  "key29": "Ut9BbKNx3c8Xec3CsFSQxLa5XePnE2XAcbjB4C11td2Qnz1DMQo8NoZHDbFubfQxJXrHvSZvPNsk1mVKiWXBBra",
  "key30": "2qUSsUMb3JRBU9797PVTurWsCgHFJGDt3WoEcXpKXSepVNzaimmtBzPtrVyMst4Rv7pzHDzLXQAbcxJMG1uddWwH",
  "key31": "4zCBhgPseHV8wwFzLEfPJpPcYgSxTQFiA7qr7v1NZgyKbVEfSoHhbGY6oDqv2dLzqC7pqbygg5QKNnjJPom2sasf",
  "key32": "3PMbEcStX7kenyENPN3CscqtA79Qp4mc5uTNzcxit75yFSxaaFAyxHvweJtjZT9TevUQb8yQrziyBcv2UWmR5Qz7",
  "key33": "2FHdUVqwKF5ae5oWYNYg8mr9j9ZCiPJr57REPYBjJQZZH5bKxCwK49CHgHjMhe3MKUzJrbeQMn3VYYf4h2fa5Hwd",
  "key34": "Bck9VywNKE79jCA9eMGAMfGvs3esZqdjbp1fp44L9UV4A9kW2HhsLT9vjHuCApyfgmBgK7EMRnatc9hWZ3252XQ",
  "key35": "2RSuEhWrtrAgj7oieNETRcwoc9FnpZfLmr8JZdzbQzNwxaQgoXCeRnYJ9DynogkDFNQNGaZWi5czp1SvhkSdsnQe",
  "key36": "2CryLYYHtEgXZFpSw5sQuU3K9HgKXDWTM5ZmiWNneosHNAREvp1thGdrtdRgTw9kNqY6hHWAojuv83EWTjwn1k5c",
  "key37": "4R21usWpffTa8F7Jh5SYoq3rYEyaAVaZngQA9FLqvX9LaCWovE7qqcXFKnNKBFckdScBEe6dozeriffLkEXzBCuu",
  "key38": "T154yXxwX5iHCTc6JDAXbQY9ttntyGe1ibZVS9hv6JvpKfRjUM1WeUyFFhXkpHwRz6qQo94R7LcYMkJHivTpLxs",
  "key39": "3L8nzR5ADNRevY675qXeetk7S9xCduvvKyngmyEnziAxEro5vjehBeJ2peLjvm1YR4crYHP8HADzw1v9dwPxqWSt",
  "key40": "4a6tX5ZZ97Waew8xBCXRuMRjTgfvDNw6kPDtTCn5V9Br8D6reaSUrDRebtxwMqVfgKbacuUwFzKLjejJ7AGkDJmV",
  "key41": "3gFVnLpiFiApuz9vrGwHtdHYXUBuaUmXov9wjmVnDZgBWckh1iHM4rhKMrPnan8qeGASGptiaoRKh6ySk2N6GT36",
  "key42": "45K4kK1npXyEavFhvHwBgAgQL8KoDrJLFTkP9SRdmhiXvRPLxr2uwBgncqEdPmwwDd3euav49mbvXaq2B7nQp6N",
  "key43": "3vpZZ1a1uVpXQUxeK8DE2FYC8xS3DdhtcSKWtTvuiEtaSQZ6xqZyrP7kQQ6nwx1v7TLuNfCfVhVCFwjCXqMub9dV",
  "key44": "3fX7fgB6cFuLAdW1ckWQLfwNQTsUsbJgVFsukFekCphRVLm6n5vehDmbQAPJUUJxYB3uFaLARDpJjGXTkmzvEPzY",
  "key45": "qiyzXZU6K1DrWSjGtNtJSQ841nvxFEqDkUqsA2RF5oncvh27M9M5SZfcAuSC3AvYe9PFpYYrsqnz4378Kemhtgd"
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
