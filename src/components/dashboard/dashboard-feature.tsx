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
    "3TvLcUJ7Cznbcvokg3oNNH7U4oHNCKZcbPewWta51RMoLps1pdj8Ac2BXuHiv9XuLBMAKPxppefgRco5osgWmYeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7ujskRuCtE8xtG71KhQNo5qzKQ1RqUaFeFntzMCgPZpfc3x6uth4j8KYM2kDsEUZZ1SgBPPExuqQKAwok59vwE",
  "key1": "2XVLz6PrCUsEN77uUyLiFYptZeiAD5vnvr7NfJ5cGj1P4GApMBAmCWbTVARXH25uURwSBim2Qpwpo5c1d1rFb9bD",
  "key2": "442xxd5X9dgmtKBvRi4RKFvGEddDTy6Cx7zLMwuy4pqNUYLxJdED8EkBZUedTEpj3mXxjC9ww3Qbefhd1VAKBUwP",
  "key3": "2i7vgUqAGJFuC18eTnyHFFuTkXtWH35RKXw8q8dzjCrLVbWcoG3E2DaFsf3j169f6dw2JB3GW51rJh2eqT4g9Mzw",
  "key4": "3adYX8g97cp3Ti9u5e4Wbbdsyd2P1BdhxLy8waNaLd7kcmNq8etD6gDZWkK2nmbH81KefRiQqFymVarowRC2gkNy",
  "key5": "3zDJr4DYZmFVVwThs9PQy6P9Zbi5BFjZBk66ZGz9qoxc8sR5hEyUnkgW5AH6sKChpTTmBwt8QVgFFPZcySe8TgVC",
  "key6": "4GvEEvCotsib5Zdk3M9H7dvrJC626qzHjaDuvqDGwu7MYsyTFTPEy6esqdgw2DhutKnBmYFq12huZLBM9DsQyfA2",
  "key7": "3R38vF66MRrTVEpz6hhkHTw7xPRZqE9VEepWeu4caZydhxX5MBLnGUTDwXAGti5urp3A9chrNZbbSxhVa32f6w2c",
  "key8": "3Gy8n4pQeTSr4vRicMqc4b6SHKvBSBvegbBiGT1685PzCyFDPL7mkn4wbWdqTBWD1E1kkCnD8ADsUUCW9QaanNP9",
  "key9": "61wJaEh35Bwtq2o35fyW8s3YCsGRtkc39j3WFq87iEp1By4N1kDer7hpZg3b4asqHU3fKAQzdTq4tnqZK7vwHbPE",
  "key10": "337C93Ma7KWLPK5RmSCCW2agKJohCMd4t2RUdNkJGXJLB2UQ8vcG6TPyaNzGfxjbszapA7Dg5jZVxpuRLQL9tVLT",
  "key11": "2Mr5aZ9Dhw3WvjRr7NPCtupjJNcAxr8qd9GfZC9L9rN5VEaJyAqkupHbPBzdg1dnnhefAFPtW4acdAwSvKavegMC",
  "key12": "2EMqvssiMko5guberMRkJAD4MyRvkTCBB33mC3FtKkmmnHUMVywuWVCUtBwq6oqExyF4orWZLhrQrYMpGm7ekKS8",
  "key13": "4izCwfQpx9CBQymgg5qD4hypW7etYicsXSdQ4NT7rShRAmEHD1RvAE9jYbT2pdLGxgkdAL2mCAwztQZ99Lvzh9hB",
  "key14": "4VpVCjDwVYzrRJS78bhHMqnXu6qiMhBRv5Cd43pZ3D2JWznVpPndabw1pKoWax8qH7JxT5zYNaUsMdCqjmYXPJf1",
  "key15": "5iYfW5rUKyMNigehxcRV8LEpEvdzubdX4hGGAMzx9Gp7xzez3o9QAfzAP5C4Stmre9VjEaiixKLT8Pfgm2uWVFuy",
  "key16": "5QV91312CoZ5tdYhxg2AtTdVyzFHK7vDgWCvfMjgznVVxLAenegm2gDRVgeqbXPmdQxiMRridwx8WpYJPdK5w3qV",
  "key17": "59CAjQTKbJL6oh84KdAKB4hnxZbCSEoPqgbx8dmtg6xYR5WpzogySfS3whnsbxyDU8RSUrpsvFNZ2NPhePBynbJC",
  "key18": "3BwBcDAUWgSjDZhdY7aPPyETNgxUvr6hpZCEqnYA2NsmkACTGifcTxmTTezkXMwegUJXc66feZZspgxAM5wxcqg3",
  "key19": "4TBcGj76jTz9NFcDuJLvpa9d11eb3B9an3amigQgBo89ypG2TKy9evWtAwoUn1Do2bTraRq9q8LU3FeR2XyGNiS8",
  "key20": "5ScEeud6gC4RNAVZ7ecgirSxSMPSdFrKFJQGsr2zrCoLcEnGmSd4ju3woy7XLZ4pjABYXZbKY2HKngTc6AG4XN9e",
  "key21": "HWsbBVpNqw6SAqPCeY7iQ8vMZM1e23WbG6VRKPJLpfRXd4d57moqMUd1yuPtHcd8kd5bzytNFWwfao3rmKnDbdr",
  "key22": "2sSBXqxRbNf9Xr4GnduirTVugECNjAKxZa8Wst1NnDwNCojpqrtJSKaB1GWsh8KFxUeCdVytKtNG7Zmz8wNaYyui",
  "key23": "22dt565frNGazgdFbBxFrTe2b41kbApX3f7EXN16wRXqSozmofbDn3GVofsmF3bKQn5jJjhUeytCBtv2CJJPtPB8",
  "key24": "3abPUrx7GSrCpaSymczqGQbB3bz6KuLFU1AfQxbmUEftTmgGS5PMyUhaX5X1eHi6M6sQEJg28pMLxzPqradtp1tm",
  "key25": "2fQgT7ZPiBSazXbo9gtEsh9WVtoeyNmvV5K5yKKxk9sYQ6xa9vUhLodP3w83NbcarYZaR18GLRSQP3XTRy9PvScu",
  "key26": "3Vzm9BSTXEsYZSJmRsbCKLeA2yoZXT1UrKkcXhcCRwTVzKJ3YHqPvPAvZcVZvLsXWz9hz4UGxJeaGcT4HfyimttK",
  "key27": "3dWWZeGXfjPTgf4xaGoeyarrpPrSEgzNkVepzSSCj2Vv3H9diLrFrqKWx5AGxogxA5hYwkNHoAq9vqSHWCscD16r",
  "key28": "59XWM52L41XyjiyoeTBTKXZmrrVY4kkhGyzYhYyS6aYMCfzyCgEz9KwuYdtCLujoDxnuxDrCKg1LbBJPv4J1WQ1P",
  "key29": "4ztVLvxvenxeQAWEHbPVRW5mooJBkmkevq5wTQWJEihiLzJy6cvmQGjeoX6sppJXQ8kK77NHRtVaUEAkJjm2J1ZB",
  "key30": "65V6zSjjdq5P3DhpKw76LAHVMSzaLvCiNSmDYhrT9M1QukYLKcHZqc6qNL7qyj9tFBgmWyFiozHoTwtHrdab4a7s",
  "key31": "3BSAHfejmKMd1oXy9WD9hruUPZdUPVbpbeLP1AN58wZAdW3ipyiWxwyq3t5g15uhR82cwwZ4EPeCP5mzg8Nw68yg",
  "key32": "2VKL6KKfewtFHbuxLbTWN36bZaiaPgTTQLRusyyn86qLJDfrseHBsM2X8df7z9ykqCJb448nF8f3xCDw24bb1J8Y",
  "key33": "5VRiGFJzxWRXkv7YufFYAohGiKRP9gf3Dw4x8sEBiHjfeEpkursWoffDUuiw7giori1DjuE5hXB5QdAB4sHn1WRJ",
  "key34": "55v3HwLDLtB1W21CCFWAZbEL9haeH9Fe5BWX8WLuuSqQ9jkK9UPmVG4op3HdmPvmGZqirvZxHWxyZ6dTk1D8u2EA",
  "key35": "ubpneGAMznhQMJHUsHPsKKZw5DiPSptqKeJKeLFL3SNvTAncqSr1vs5wRxuWZ4XRnGsD1yMJq68kG3bSgsP3iG4",
  "key36": "4TB8wVz86fZGE3KvdTDwgtFFp131BMA7hwjePmETNY28CnbBXzZprAbvMj1G6s1PMrWq3M6NmENpapRTszqnigEB",
  "key37": "31bEfb3iHgYXaowHjYFAXBifBco95x1GaQs8FkkZwdZcjt2RZvqArm8vW172m3i3CxkwB7gAppuo5ygXM1PZZNZX",
  "key38": "5r1G5MxHHTKhoGBLJWFzcm4k6mvruYJpXjcuVATeiELbA1F2A1NsM1CJSihCQs4FqaaJ361dA89KxQ1fwjyomtc5",
  "key39": "S3PALzH9hdunAdrMrggdm4dimNvHQBRBmV4Zh3b7dprgbDGML4T5A1m5eJQMmkmipzU1ENHsNZJqcja8X3KAQ85",
  "key40": "38TLzVMHiArJLV9Axq7e9FUAYhpbThvq6tiWYtcFqGeG5xSUPjXRJkcwBPEucVygCY8VpkupQ9aFxMyNRDHqJESL",
  "key41": "J6e57cHbEWsnSLk9siWJYMDdLotyMhCUd2PciJ4UcV1Lco3L5cTMezNEHXSor7cGEqxEmgthwLZakHsTBihZDT2",
  "key42": "5SXQKXwXMdx8iecW2ZJ5yCJZQ8sYXoeQvCp5eKVLCM8vHgBKoE8TV1JZKrLWwgNtJpuQHxwBcz99FhsuWTvazmFQ",
  "key43": "3BWbMvPaZemeceXCAc9oLnkDfvmZRDuVf1MCASKQtL8qyds8cs9m4NvEs9HjhgXiCtfrZMaDqFchfmy2hLxdY8yP",
  "key44": "47x17gfuRuSTbUQ6DJAS9J1FcKJq177FafGpU1tTDJBnCab9Fy4avUX4n7eLMnyyY7fLfUoxL4LxRKZTkZDCAV2v",
  "key45": "4Yfq42P3seJuRohw99wraMkyuL6wE9QGJUdpwzmKEinr9rwSsRniuGJ14RVPgfJN8q3BZyYPxSbTt92ZmtiCwQXV"
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
