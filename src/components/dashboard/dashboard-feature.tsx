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
    "63HTeAybFo7mjZVrAHFKLfYaJkahyoCPzFhUJEPhWHNAnaWbmmU6cMVTm9maY1oVMrTgzM2VDCXvJTLmQXCtcRvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTEUgvpzs89AbYpEynx9hBY7wFiVhzHuDvNe1ZMiDC7Y6wapKgF2fstjQgyxsxr7bWucNftfRRR8tQPbdfaLZEn",
  "key1": "UVPLUmZbZu9UeF2Ga1W2Yav9rkkFgtArgfk4QoYcJ6cnyfiLwQTJN2pM56LzzqzRC9jEMVi8zQ4jGtYC4mW4sdJ",
  "key2": "3FbQ9jomXz1yQBsg3LNuYtA3NkF3Uckp43PNjkAdKBPxy71dtDBBqcQtFoanbhY5eNDrsiAn4SJJQPu93F63SsyM",
  "key3": "4bihQdi6NVpweZqmieomh4Cw38S25VUYGRpCWorJpi4mCLjSBxKxcjxtAtsNmjGpRTYccPvMZLWBvkGqu4f2SyCK",
  "key4": "4LYGxRnbJoT5gTFVBY3cxwcfkEv2hqb48KSmdBJKNmUsKqKKEeEz7h6jSWCDRqo4c6CrDxf81EukB5kQM6uaYANk",
  "key5": "2wQ5iVwAWfjfMSKYBahbEVT6CoVd9QJeSFMb9KPZGsiZFLRPBM3TJvzZFai2KDPCjPFTntS8VDTiyb8G25wn5q5V",
  "key6": "5M3xmNugq8W2Vq5XNk27zv7gcL7eCise3A2R11repj7ne1jdM9PrGgSdDFvxqUVd1QPdjCzTpWKtmcJacx3e3Lzu",
  "key7": "5QzHJLaA7RZwgQYPVspFTS326gtY6V5rSZXnwDsjohoy8D3w6YiXfuvSSmwWo8vFsifPhedmou4kHYSwGfS5knbC",
  "key8": "5QsSpFxgRB6CKoJy2XKixdB3qBMLTKcZqqrNVKXbF1avSpeCMuRJE3vUBsM53oFGJCCj161zKtmqw87poa2WT7nW",
  "key9": "9CDkKePHFWgpZUWrv6F6N1BVcujcmDur1ZtfXz1rYEdzzJWeygrqgRYk2KwttjCHfdCg5HDbWnJQQn2M9kpTMzk",
  "key10": "5uymJpWkkepFL51GNfCxSJwvzXNoWJEoFwxqiaCAtx4hmkrLhSYnpTxPiE4rWEsfsrXmxcYQRYooJ7W6APVPwwKd",
  "key11": "5oia4dBMdkciC7f7zRAMowQ9cUSBrE3MmooghUBS62dgacGDXHozLMtNy6YsqfT7xvNENV3CiaDwDx6YQDMyJEW3",
  "key12": "5XDo536iDNtnTe2vGYAuNJixHoR9w9zk4KGtSF58YN1UVd2APWzq6Y75NyTECpJ9fRdPspAdP6MtM7t4cd1NinLj",
  "key13": "3Vr7YW6nZFVqGGoFY3WcwrtSrKuMYQ3yMPVgT4GZj6CatxqrmVvNwpXBXYDjRSNtWHGdtf3zuwpBDRntVQFzHZyR",
  "key14": "3zwBERYEjhin5vrkc9P6uWhUPtaj1XtXjtK2rV6WqGrHB538rjCtiBY2nyfFCGrnnWWdF8qGWAeN4qkAd3CRHdMU",
  "key15": "3wuEskKM7fTGDnuifoNsEP66MhU5ZrhEUqS2N9CfxNuXKbrQfub2vGLUURQDL3VVFruYuWc5ipisFCDhXMDaKaPd",
  "key16": "3cAE1uWpmyDwvEcXwy34mT98gwDw5bdQFrvMThuYFqBHX8FKzZcUWJhVa5zweaT9FnCYhMLep3Raf3GzxqQ24PBN",
  "key17": "5WbqS8opyNjEVgVbNGutFr9xPCn6nJT1chzce5mFqY2R1u2XexYi9PZfsAoQjSZuYh8EtUT3JfvKhW9KzFa3V4Pt",
  "key18": "5uZsUs7bzyRMEXTGGwjH45x1yyUdHDSh2TKcVteVyEBBRKhds4S7ddCJVefmMY22fcBz27c5A3ATW9p7EkfYhDBn",
  "key19": "2FELHy39Kwqnax25X4oioguU7pYK3FBkWn1AwCW1SUYHE1Z3rFhLiAhxaDv9P2r42pg7dgzZFJKoQ7bLxyw4YwWe",
  "key20": "4US4ZaZs4gRCnoGLiyMtUiXaphdD8RDwMJ9Afd6dsfkoaXkRFf1rsmWAV4TApAivyPFzkroiw7Q75cmZsr2NNcSn",
  "key21": "31sRCpvgo8GGYtshbvgJqfJxoynrUrW3PjPhurTCoNdg2aYradvB2Un5bw3GgPs7e1k7yxsqgQySjwDMRUVxYJaQ",
  "key22": "3LVWJ8uFJgKsQ5RdK9XWEwB1XnvhRXkw4WGkMFgQiderEX8JywPFeTLDnhcFb23nRw5BjSRywt2LbG5KxxXJgJhN",
  "key23": "2rs68Dp8pvxG2JRFnM44Z3kRMbz8e2XSng3TqiSd9y1nhsRmzShH1EfKxs5cmgxDQCwNwezR7dU7eKA8GxZiMD2F",
  "key24": "3HkWQxz1nJdouHBJ4GyxQdyUs43bxpzzB6j7BqSaFPyNqQ9Kgis2XBvMpS5MHCz826rXZ5cSEadKbrcLKsx4YxoQ",
  "key25": "2N7pqkr1pk9Jmnu7Fmx59Xg6YXDTrDPYfosfRiMnysdbRDeQbMcLFzz934s4NHSsfFEkxaAKUNCRpMECVg9X1Q14",
  "key26": "3vMU3z944ZFBHAMjXNEyfXxQwAXpwMfgqZLLsfs75z5zyW655iBtXoHfTWryyBPqhP7bP3YV5FHatjnnkRU6Shd6",
  "key27": "43NjjSZnSYtFkrJmC5KsVNG4BZU9x6ewDYTf4GiTeDyxDZvMWk896Po6wBZ1ACPBXXqUBxxn5c5gLMm2swj2wv7J",
  "key28": "5Yo8M1wv6DqCYskFjTbcbJYfmSjwt3CA9UcqBHqCNUAtKw5askfU7imxuVnAFjF1HEyMNgHcMNaUTUsEYiSNCpKA",
  "key29": "51NxnxpcooMX8DYgNYWnYGwe5KvHDfzs7c6PoiyfkWcgUFqXL3nBh5G8goeH4i9JANDvKFNmMoQ6oJsPdK7qb8sr",
  "key30": "5ox6ghMPHXwMZ8DZph5etvjbeHTpYuiNzfZxcqYaYrdwUEmAxxDfFfw5Z3nMg5uVUBNaanoVUMVKkQKnc3u2ByWH",
  "key31": "2TxkfXqNXAiB7QziA2H7EGBKWN1XrHPhHPyzr9RH7P7Q2F7b1oRZbqdn1u3cWpyxcFEq4JMBt4BGdTqrteBZ6oyX",
  "key32": "2dmSGuT37LVNMa6fvx9o3tEnp3tysmuV5EUHDLzM4jYggoSzxQKRVJwms5rkeo8M9m1Jf38kLFvuuWYkB7ygVmui",
  "key33": "zKV9VVkc6husokX86Wub7pgVPAa23kHqn3Z42EhcM5QJi7Ez2arr6MMCwDwE5V4LqjPB4hFBBHAUUauNTCZEBZL",
  "key34": "4izttX4vy3k9mDTrFZHkYEhLfPEfJ1u1oPkASnDif8kVtroLZ83Dg5EMs8hDkpbVgXuxfTSuxFDfSQr2H9rEVw1o",
  "key35": "3SJWWEU9FLZzSKkd1nVu68TVNrT4cciYwZNXpjscRBFfPPRjdJtUuzA81NvsrbsihWc1ryNz6EvMgFaHnuCHVk6C",
  "key36": "3PRhmpDFzos4WPfkw1XXFN2LbXtY3Sn8T3PEabgYKuJMxmuvJr9a1jsVcZ47VRJVtPGge6BEDd6QFPDqzQW4WERv",
  "key37": "3w67Vxmd9qStbV2AsSgswGEndmj69KDu56WCjw7e1dcrTL6VYoGeekCc2uExv9mFLLXYCjSCpUnvoYYfRWRJQyFV",
  "key38": "2cdY4gzSRVzKUJ26jdV5WHtxTY8FJdWDFc3Hd5G7B1mudt8C6eg7uGuwCQvD7H68meFdhs1mgychmn1NrBuofoEN",
  "key39": "2difE8vJZAF1FLGHg4N7ZWrjUNMycMiiY8jVxPvptyeDdS8P7hmQHu4S1Yy2u2tGiegHsVKQm7whiZ8ModzRD6GK",
  "key40": "2RcnjAXNvwQMRuNFnWdtp5KVPbcPnexMNV35CXwmCmK9iLUVrgKgnZvJ8pU9etrhLs4rogYmGV7zzUvDH3pHBXh4"
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
