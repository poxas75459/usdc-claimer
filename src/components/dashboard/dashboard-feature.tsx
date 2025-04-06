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
    "27AxQ3MYwHxjHGFcj42eus5DPpL5S8Un4ULRBkr7WHi7EfiR1JU7v2ypVTVotJcePTQ7yhP8TfKdMTnEeqs11ZmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nHM4Qv6mhq1iSfBG5oXMTkgsW5HcSdLnqxCZmJ8sNwYpDbmqFN6wPNUe8TQ9mccN4BVQv7x32b9QcBHCk5rb7LE",
  "key1": "3X5bZLPZ6XwLZy3PEzXCCuPCwdtsD7pdGUoatWcq2eMwU5pYs9qo9D5MhfH62KaPE8BmPY7Le8Nzs7VGMGy6jxT9",
  "key2": "4Vr27bo8p8r9SaBjjU7GyE4qM9xA7mT1UdtHcQRFE7PCYkzKUsJd66Ev6acF323xrNGio1LhHKncV1BxHWmKpUz8",
  "key3": "4NVwk3DntRLQXt16Kj8BpxAN381Zz5Db6dgu29UGYoTmFhmp9BCaCZjcTetCaZJXD9d3yUNaj23NqzaFKgwDyDQc",
  "key4": "3dGm3FsAc99K7t9SboBvgygG8enHm1qY7EDRbYrjYS1ehuxD6Bpr93kp6Ju7vDoGA6SvANG4bFcHFDps2Dzm4GNw",
  "key5": "3BugGsMZnwow75Q38rHVomiGjvMcNcBCz5tyCne8Zy5MQnoQBogxXGbYeSH8GKdKkbWipd76MziQXTJekvtxfTub",
  "key6": "2P2LNeDZq6VXFy3J9AGySbFehfezRNWqQahvz5ushMdYoeJgBoh7TMtkFe57xmYRpaAiDpoqdw2nJtkPyqjMy3eN",
  "key7": "3Hs94YCLrJzdagb4BuqLP2sfLpHmoEUEnSyMxYH3jDJHoRgyY1mF8HrCRM3Y5g1eFtCW5Ar7PJno29QAoDCyMw94",
  "key8": "3MoRS7mhUA2Ht6nCPt1nqvgYxPv1yvC5syFzRv7uujP14X3FKHT1BGwMrVfaypM6sSHaPCzfNYssfKV73uGhyDGc",
  "key9": "2vnuUs8jUFzFPK7Fmfvtf3jCzoTYDH2TZcp9wyUuZvNUH3mcX9wMuZXSRVDzc6djGv1EYR5RynNAqLtn5kQRTVWf",
  "key10": "5UHT6kLguD3NjBx2KurmsgkkezyZDnGzUhNUtP9irWuuV4KxhXRJEwZvbSbK6jKKX5KTGcz7RW8sgqR57gzCGUBL",
  "key11": "5bCGerMb1QQLcxvxJbpepi9DxoPof6NYcu4mk6KPm1GVuMsZi34pv3RQtVa97sWrkRNqdsKctXiGTmGskpxp5SC1",
  "key12": "3ZzW2zM5TRAuLeXqLtYPhEEskHzTjvqDC6HAjS7syPLwKU1Xbjx6LpJedyZKAT5QTRfu3ELq4uGwUemz2TmhdTu9",
  "key13": "4Y9uPWEik3z4TjjiHCQGmn1VnFtdhCWrfQC2k9idKmxRdBDc4tossw48LA5RV8cvu1XnjbMYMc2gtCLJKVaFzRxR",
  "key14": "j8ac22ixsv6vC9j7jzCJhkGS2ioryDahZdbDtizoui6uJAMyLZsyVU39oVhEjrahVE2tco3BRw6wwTrFKQUP8kz",
  "key15": "r82J6pGhKAbjDRBhb8NNSeuG9Af8fgxqsvMUVrLNa8GHrAKT1rudAkd5yNuRkN5GCoi62Kqvwb8uZEDGTuo1a3D",
  "key16": "2wcLaNNauLmoPzbMK2SaNyCYsnzSmitwFMeHooizfNqRnVnw1ZoDUrnt5RDDPDC32YPn2UCFKQZNJwp1He8G365E",
  "key17": "4muUvbiwecGpJuwCTfc1rDp4LirHy4NpDJbZYRyVU8Xai4v2tnkhGN3gA8EyBKjPT9AhYiQr8m8pg6Sb5LazGNdr",
  "key18": "3UEKQQTxvmhNfP4aEy1yRsJcQACQN5eoRQJsf7Jq3UDKrpF3THuzy9qQ5v8tPxMdr9D3hEyZaHSSXthE5abk8GJK",
  "key19": "53hxLkfid1xjhL5eKv5Knpg1T4rBR39BLQ6ijCkPT2a8tfHk8tsaYu6A8Yv4gcWYNGfR1QuByWcKAVnGktR3SQ2P",
  "key20": "22ZLhPhR7SsS1vZfoLtkp8Xh8YF7X5kLDVLcScVPS3tvL7jQ3EoGnFhn3hrPDGcQGPAnLcm4hJfXAkqENkLHKioA",
  "key21": "2EXEDhXk7CQgCbhf4gR28xUQRUAKz3u6kDpTcLJ4vMi7aLSkpYqoYsC2ptgSb9fcSCfys1qMJr8RX2wNcpjtcHCJ",
  "key22": "zabpfYaK9dcnx4N14s7UEzQdkSRUTBSi6ZfzCr6FfjR28Hi5aeKdWH8i98HUPwhGCfytkcgYfxcbEDNFpk4AEQb",
  "key23": "3fT7P1iPTbhxEw2z3AHrZTSP6xvSpGUhVrN2f2pX5bK1PLKwjgJQuNeRswRxPA1iCP3WwWr384ja72QPdegSFwE2",
  "key24": "5zpRfCG7gGGgNtrk8wGtn1mtxvvYsgNdZyfhQDjc478uhYtbYxqKhzGisdsHDsj3oxGTt3oVynn76caqEKaTEBWc",
  "key25": "2qkBKkYJhKoJrQEr4tp8KAs4UgYCxpp9UJPFrQXpKhgLGjeBMun3U5hrhvkDQUCk6GbhjDnfEqZqgnn4UCGaQi3p",
  "key26": "3u7XkChavPh8MraHijRKtp2bwLHgQv53T5FypbptVdC5cZZFn7zcrrMXP4aMVudYnjji7XZGwuyGDMabESDDGLaq",
  "key27": "3rhga1we4Yq2D41FNjUuGYx9ch35qtFZBs4KJJ6h5nwnkGV31fAFQppRrtkoHbSzu2HS8G1opna24xqZ5F6h2ysp",
  "key28": "472iHLLJMtvqt4RKbGXo2LJcUk4yBDfGKBLhjr2PrRPJEmDsnmkv2xbVGAMjQ96PcnS1pTPVvmWjsk8nfRw2Y8sM",
  "key29": "2iVb8HW1hYErisiyocHH2DLZnRbwtra7ED8p7PGwpTrpnsCYHkYdpUSd138yUBnvisN4Cw94zD7qEAmE29E4Abfu",
  "key30": "3BTVS7fuaXemFENoS8FvCxDgU5sYV2P1dKr7x4V535sTFhw2HAZPNBrhSNrR39AHZaoKcDquUmDVYGsaD3bNuTHy",
  "key31": "637vAqPrWvTKcxQ6c7yPCqNtQvmvEzSLsW9V3SH48qdA951ft7cUXRtkZfeRMwpfoXE6eL9Fj1p4JrQvfnPyzAdx",
  "key32": "3moFV51CNrk2ajAQKWSD6ZD6MxpYz3UJFbMoBDouFoV9Px7rszLLYH5QBGLGEmMp4Gxfh1US8AF1RXGuGi3PkqSk",
  "key33": "2T7aMnzn2rh9N5SMoGVomgesYGo56AMZNE3FY1GHSAWULpCUdaXzFoHQ3xpJ9qtn6nbAQWUFwcT3ViRizhYoEKCT"
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
