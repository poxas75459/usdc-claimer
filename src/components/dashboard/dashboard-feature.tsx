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
    "39qZVc6P7zGkpMRQssmmjjyZKnipuJ5Si6FKewPbkiDsbKfLE4wPnSJJSUuzZAQLR7hCogw9yX7YUpPV5WkE8gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Si5zKggyCGPULqL4gwAuXgxGgS7ZPW1CMcyt4U4ZEKQdwGD2V545J3uSQr69bcp2xQiTmhA2P19N2vqo2Pv1Ymt",
  "key1": "3VPshP66ZP8CUZk4PXm5Pdd4azukr3Qt2Pbdx9esCQ6NqJj9WBCZTLDEGqs85TNPp4jMPGhg76Pfy2o6fzwJQz6M",
  "key2": "33z5636kfTUrDi2P9RczCGiPXyxfk2iGyD86i7d8739YTP3R7V7XzWF3TA6cYh3rz9mNo2JC6PPHa1qi9sgiCkiU",
  "key3": "2dP7fYHmy3boj1htP1EiXxT6yKbr2WMuuq5Z9DYKyHXqRKro8A58qbCyAFanuDu2L14a7yWWw8UvJ6Bg1xqUmSJn",
  "key4": "5PscLzDnLPR4LuiotX3q5bvdSRdRmr2cTfskNSrPpUXDafMRLawoqUauGyPLdcmWHYUeAYJ53q3QeuHdcSmBiEV8",
  "key5": "5M4oDvXpEbGV18zkCPr8RtmHaohJx4dGf8KZqMGSbPe9iShLLyBbS7qAGZ4Lkmu49bLqtbyyMCEu2e5kxTRG1iE7",
  "key6": "nN6B3zp6F5QWxNtirwdHgaHsVnTphohhLgq2uDgWUGK9LNvYKpLB427PS23PFik8LNXya2SkuLijodxb6TAMJ68",
  "key7": "4B2GujXD2s2SZy1AVXpaLsHWeKnJgHzZYpiJGNuDkVHb75LJG7QFx4GsByH7fP617SN6779NVcvfjzoQC9J7uTVu",
  "key8": "3uqmzMLAwbqPTSCtsW3pKXTaax49mwxr3xkSU6SU2qNyQdEsM5W3mLwu7UjuNKQc5BLwCEFwsF8CFczvwKUpnw9Y",
  "key9": "4T9A16x1g78q4LDaoYeDJwoHDPbHUC48D3zZvQP21UmnXNdGdzBuwoL3ko6yUzy3ex1uPRDDT9ercuNqCCutNNPF",
  "key10": "4oFE67FNxCU8sx9z3nciq95XinGfzrycW5RTw96CJY3iDrcAYNiqXW5BRYjuNzkJPdUHZZBTBD5p1ByUzCxh434D",
  "key11": "42DyZfLF6SSzFKLfCkBG8QBW5N7FyP2MCkuL7HSPZdFvh4ZUGMsot7VLyLncvF36ZQrVsWCv4z7qmuV33JrgvFSQ",
  "key12": "3FPcrUMx9vN8EZFehZWECc5KVPGDcdf4ABiwLu1UV7KPPesJSgEfzAd5BzjuRAhxmYQhkw4Mf3ZE4KMqGDtBuMhF",
  "key13": "5hbHva364N5Ps3g5XwNBDnYLGby7fxFTugcKH7FasWHCevgpnM73Jx8KdNjAr3Ji9sVpA4q2CTupBZhhNgvEJrvt",
  "key14": "xoEmqSiBD3QHHyHmmWpBMvejcoykuSQuZReY2pstrd7ez2DeUs25YufmqppXJratsXa8WgeVy5koexjzgZ5LKHK",
  "key15": "2JkD1Sdij3F66yJAsGCopGMD9VtFZDhGLotVjHtY4FVwjsjoc83YnYG8UwPiCcqLRKmgdDiTj2hAHc3PhkTVqs1K",
  "key16": "5xWVwiibSfi8hvJ6tm9n5LNBJi5NyFtPda5BkaG8YG3PeT5DUM3kFaVB99zRfoPUs6MNDubWgXt24uCjaoGdAHkN",
  "key17": "2Xc2kah2Jzb8HNGbiwe8vYnhg6eHfvEUBatgt4xpUK2DGHt9FJVW5z67xT422BVKeRWYCJCvVnFHe4hKrikDCEcE",
  "key18": "4p692sPyCBcJBNhQkhfcW1JEqMync9KqLLUwSDqiNHiADRcnyq21L77zuuo5SGkXeq5dGwEgZMxbFM3huq3F8NLr",
  "key19": "t9JENjN8Pcp2Wzaa2mKeKYqpbrzuH7nx4GvfSTp6EhPFpZgzBQSjQmorHQj49ApXp7ZxXYPDkaYNNbvgnut9SL3",
  "key20": "5xSU2zmgE2BAMBpTwBpvBL5KjE9EyFsWNujdwsJPoqjPq6dWaMUqM5uAPWnvLSzNgtN7xGF2xXBZnd5AmjSQu4wZ",
  "key21": "2tEMig1KN6NEJihbatJvfCh48sKCCrrGQeyfWhX8oaxv3PEWQR8sXET5Ub39HezQKTHQRJGZMDtWLAGZUaDJ1Nn5",
  "key22": "36heNdDNv8nbFmcfmyYMuuWd4FtNciPQofMUdrs8RNCecQdTAx8refhQ9dj7BwLiEvJNFniRsvTqthnsB93bqNLY",
  "key23": "5pjchNVBEmKhhyPLSFXE3mY5QrnpSW9rr8Jw2m4q2g9u1eGJr9goRokpHt1vJHgAKNiCzLSizaC52SFSzHJp1eRm",
  "key24": "3xvPwBfk3BZzod88266mwcAdMtfGeueJ3t6rNHuF6isB1schnQhJME5XcVC3BM1ymrZSbDGqFv3enYWphz2jEJ76",
  "key25": "4DbAQjyw6wpPU5NSmxURTdCG5Lwba1Hs1T1Nw5CJ3DGuskyhha4L3Qk9XjYbRpN3TfWvVPE9Lsw96mfoEswczzs3"
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
