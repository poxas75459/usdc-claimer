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
    "2FEMWUw8aR5jtZ9ywWd9ttUaCcmcLxNW1gcKuxi4f6WDPvKkornv4UruK48vnC9Mf18jJQiHKEGf2V1PEGCpM28e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubjNg4cvWV7aaMq9begqzgV6hirfpvN5R7AGAvddZBwL9aXaBp9cswooMwZK9gjMvhrgMD98kem1nfbCHEBn5TM",
  "key1": "3hp4kXCRWCzt5mPps2Ndud8vsmPnx6ZWfXX66DGm8X2HNwqAFgXW116kBT95M1pCF5GhyVwdGfjXQwUUeLXDCaJt",
  "key2": "52MeCX5wS2HBLGpC3rkgaeyrYC64cKNNvUwDnshVyyBtJLu5y5UxWx74YoqU3pVg9HiR7uU5Qz8f3WBLxCYZL622",
  "key3": "3ZAMN2xSGcxcd1gHX3u7XxoWyNbjWEoksLM8oMMoLv8qQcX3BsZKMcRnihUAKiUZ2Qnffj7PKbEJ5USSBEUq6HL2",
  "key4": "4uXYirdbwEuSTGhnR3bZdNhrrGMAqWn92vcq8r4rveZRMbXWGVNuh9xFZSn5G5SLXLRR8Ud4PiQNG4EZ4wGQepMH",
  "key5": "3MZ1DrNcRZBtE8cF4RRdvrCARSp7Z8U2ZSFvhapdHrMNz4yxfwW5XUw6FHWmGJ4V5A4X6YohDevrktCdmscS1Rkx",
  "key6": "5VABN2bb4hMbsYT4Sjgf6Fs3Nf3MgPcRuY3B8VC5dJNXtuySuReXNbBWqd34Km4u42u3qSi9VoGJBBaei9ceVB8c",
  "key7": "4XWgde4obuZV4tethf2FTcCQBsyaJeFzAvTADMBP9xd2hgbWHPirxX81pYbvrSEwGsxkEvVG4FLkU1cEBkkQ2orW",
  "key8": "45AGYG9Q6mQtriGQKjRb8xwo2gnWU57tDQKjBPhQRrzENsFzmg2QWqhhRrn35Pp2qUStDYdcP4dSSksp4knGbqTn",
  "key9": "DCx64ToqUHwzcnuhJhKpLX5s4TzCTUAJJy2yM7T6ZfNYQFAEzfo28zqNryY9pWEhdq1jVzJ6DNwSVCqdA7RzQjK",
  "key10": "2wgDpEvq4H4uYD2axrgjVfr1MKMJcAYFtKPExAevgmDvMgHdKAzBr9m5HaWg3RyrhXSFmhixNLydmgJvYHBTTZvw",
  "key11": "4T23xsSa68ECchgiWvhkuV6CUK2YySuCcCNYLDNDE6MfXDRB1nvJ5AQnX9uCdJxbhjQvLUTbqwekqBe6FBdroCVM",
  "key12": "34pU7Fw6iHLfE5hdMq4tbKugN2GkEpbDCM6Q4GNt2w7yjvNGVbFdFioNnAKg3LYasNWBPWTrDSwiUdCyRgK8TxwT",
  "key13": "3WdKKkz4t7vAGaoUj1Uu8YhtWk9mggicdB3ASeLm1ro1PVX9oDiQQ1KFR73WoTSEPacjkCvBSyGburLjf7hx54yR",
  "key14": "3ghFLdvt7ZhqiszXCnn8SqSTpcFXKzpkegncDGGLFHLkHm663HrS8xDaJ53fM2RWaajSk13BVqmsVLPGhBEmueoA",
  "key15": "6b6scLbp8gF1nDTbvFPUta1nyT8XYHqzXvXv7dU96ze9VqS1eVWmCsLjUhJuyLvbAWEwxLk6BDMqtafTZiBA13s",
  "key16": "CaLtu3CWS6qgLkDrgJd9psnWb6ejTrm6Q9xxAEhQC2vbtp9q4KJHu9mdY3sAZ7PEQDKGKyUzj6ShH2xesdUhCe9",
  "key17": "67Jnpv7ZcgzerjmfMFZA6P9FS6ayaVi6ohFso5NwnHVs1mhR3YXfEcG8PyQUgPhaYDucAZSNhWAmNBFmwUBmhSDK",
  "key18": "2VLGXNtyFQYznJx2kUPzHJKGnGFzkEJT9h3WAtahiqiuV7tRwCNiht5TCTFC5EPznWQ2t4wteYEvJfsP41QJURA5",
  "key19": "bQXEBXErTPEL8RycDyg3mYLoEvmCQFn4jXyFWEYynbTziCMgP9RknGSVd4SWnUpC59zypxz3J8aDRCo13SQCV5c",
  "key20": "YTNgmRu4AxQahmoL2ACCKr37TJNajs55mex7m6WSdi2FFts3jFe46e4ofHs4HvNzbbamYXdo7UjEchiPfLoLeDw",
  "key21": "2GEwXY3rRYu4sEei1MBNqNDXktSQiK8SQvknf5tPJiPnQi31YC8PmDauQSdRCigNpzCAZ82ms88euGhMAPxYXhHB",
  "key22": "s2v4RhRZGZd34wKYq8H2QVRFEgrJmYUv6j6FLFXdUR5UwhB6cm2neFGWftakrNqQ1jFBD82id8oVE1ZtV4Hgb6p",
  "key23": "33rNeE47RUKd3e4JpMQp52RrkACvGsfLQQpPR7x1MFLVGpFZeJ5YpVH8icijrmRvvjosWERYj1XBdSuthuTRK32Q",
  "key24": "2TUPASizXUQmoJdDX8bjWTXUyy2831HctyhbeepkJAMX9gPKc7GpoCefzMPArpWqeSyqM8umzLwQYFQfY7EVwKH8",
  "key25": "245VFdpngxPd4DTxpm1As2vHuL94Rg3iKeCx9k7YA9xSsY9urmSrfwKt1FYqPUUnmdArDxsWmadMNnBp962Hx1Si",
  "key26": "4pVVAiwNbTjERnAmzL2m2nU5p5FvP1Zg8ge8Yw8sfMeZT8CrqxPYEubkjLp5iYTXvSjYh2ojeTj2N3E1ZvuZ1QNC",
  "key27": "2HSgpH7oEFk2t3CyXdZt6Rdao7WE8rhPuGTMx6bAtapNpJjMV2bFFdGRpU91rMQLhLCH8DNefPzoHJQZeeEXYNuD",
  "key28": "2n3J1Cr2yTAhYDGFFq19FofnwG3Se3PWd7EnMJKf5q68pttkM6KjWEPmFC8vaK5ktuoxLzDNZMKyHEKszL72HCQ1",
  "key29": "4aXjAY86SfMzjCghPALWNn9NiHaXFR6VauiAgPFYc3GJpnBMhwAG5zgwYJMzEnPqARWAW4xrLkYiCYnKrqgvzGcc",
  "key30": "4BKKK21asCCHsEKXRFr8Wjr38m6Ep6NNqDZr9ojvUjoZhwEJSVw5RBLDoiCBDyyZW7fu7V4szDvMNAUDm1HC8BmH",
  "key31": "3jWhX8Aei1Q7cLo2SNGfTmnsXfjqxygLs5jP9EJSNgzqEAJZU7dPXDyPpGr1JQpQwDpreHGTHQ3mVHnvHJENxsUP",
  "key32": "4Boa8ZCM8sE9HEDdL69JonDqmriuzUyS3A5AhvjXrjxyVrEYsRhHXFto1qcg7MVDXKsiKSeiMrNNeUBbaGvujsNH",
  "key33": "5atGuK2uakqh4GLJd48k39XAgdjoiFMaztf8yEJnHp6q7vnuakhCoSBPZYT4Dy3Tbu9nEcB5Avg264YJnbCXQ1GZ",
  "key34": "2ZHua7JuoRF7mNANGYE2mzZgxsszxP7mN4B4WkDBSVXBvcUj1VPjew8SgjZptBseMY1AVKMw4NVTE1uAdPnKDvN1",
  "key35": "3wpo99uQXwaz5H9KjRqsPWdgKUN1HFV9JzpPb9wPHHRNF1U1Tg5P7VkQS4eskorHYYxPZ6PbvS77VeQK1qzctUjM",
  "key36": "uRqxNhrHv11TEwPPpvHqq1TVDH7KpYaUuVgeo4dhmM49HonTyMMKXe6cAn4RHA5NCEDPBKR2LkEDPQjnhfdpSnr",
  "key37": "3Hs1KRCtBTPwt35wWSB8FoyHTe6L2U8jV3VjUGzMK6AQkayEzXdFx27tDCrD3jqWESsdvRo4tBr6hD1A2PK6dnQ6",
  "key38": "5xQZiTGrdjGX9P8WB412G4LCV28GCUEiTDgLfzqZVRJLTyV4ZoYqio7XfA6aXLfRb8TJEVkspBv7iP9vzvS628Fx",
  "key39": "2KbyZkA2da2Y5iakwQiG5BrnQejKgnj3bqz4cC8YTH2q7KKGBPFaaaL98HFLN2K1217gvWrznCTZUUwTr4bPhzcY",
  "key40": "3RApkF7n2fg6pVbFWBdpcGKTnKt5VFp2jPLoeHo1NjanVPZhFfwL4W9YVJ8gUJUdWugx9DiqYVKw2QGw72yyLHw6",
  "key41": "pEiaiWRgkgeu92coXFqev52xknYDF4DQoZsARG42Q6N3rS3Kn7fR5pCXUEMgCn9MmN7BPg3Dw5tE3rRVRhGCsuD"
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
