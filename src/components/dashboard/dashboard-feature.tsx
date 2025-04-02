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
    "2gXdaZQhKnRuigkc5kiGeBPB1apiF5jchKc1zxiH4C3oqPoD4TmomfTdw8YW6btcuGS5DtDSzmE8z7ftnLMZojVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f1uQgxPaATb7FgVUAAbwVKKnPvezQVKANAYT9vP5swurT6hj8DobS9aYCCF7wjDR8Ms5eSxuTKeEdNPvJuoeP4Y",
  "key1": "XNqiECsD8dz8AmkFVAzPB3gREhHtZaUFYSdUXSJoF7i61rUACrZKSjmkcpnS2NKURKGUkEcB4q2n5F4eBZmbfst",
  "key2": "5k1dRq5M2J5LFSb5qVexYCUmQV2Dh4Z3fUNpPvLAAxrguJPdMbHM2cCZKXgYNN2EQcEaXaqU6tcLLUv8LuDHjCo8",
  "key3": "4XhuwduSe89HfrE25GXbzyZWxCtFD1LZA1jGVh4ypvhg5actMcnWyoqJzatwsKuy7uwctrsK1Wgrz5BbFFyqdzoE",
  "key4": "oV9QFBQp2SUiSn24EV6vxcjfkTTFbvwRbVcC8vPmWyv4Q3MxSn3h4PXKSM8xHeYs4qLGKYWNZs4sKiRH1vHMXW5",
  "key5": "59yYdFNyKwmBhPPap6n1h2xaABPVtKDVt7hi4zQU96PjoP1krqbWjs55YBhXyjtapVVAPHMzyog4fHSdgR8c7mvR",
  "key6": "5LJJewEwVHtXV5oymn2v5UoMgn3jn6819S65vYBdKcfRoodfL7ucNejBKk6x2WmmehmGFyLJobQgkmwYfxcFbgvQ",
  "key7": "nxsYbSKEENXNKxRQtzCL9hM4rRreYEYA6Rvb3L4zzpKxrLMd8tkZrcyAodK3qnyewUgfDD41PF9s6TkSAn6iZ9g",
  "key8": "4TnuvTNhesqcLXbVCg3xbpZZWVDcELQkphi7GTxZqAisbd22neUrnxX2wxqNggBJrTS7kC7ngwHtWAwqCSBkLDfx",
  "key9": "43aXRy856R7hfa3V4EHxHT35LVz7Atk9oDpMQbEszUYsyEDVVgWToCxwtJRNsV1C5jTRu5Y1ZbahguGQb19Qbuvc",
  "key10": "5Q5XuQJdhgxCcGFqfWU1nNSYaTLXXmN91W9g8zKZX5fJfc5TZwFg76CUh5v3pNnGJYAxFXfdid6MBvjdmi6v82Mm",
  "key11": "3AndQ9bLeegbw4NfjfN86dyoi7HQohcVgWbbNX6ZXu8zTdCKQra1XuT1JdB4cjKZFCRMggRkmPQcCy6tJ8tfSCZN",
  "key12": "2hAWNE3qmvvkxda6rhefdVbjMac8w9dmmSfDdazS1BKvkfyzSQdKMJwRNdme4gEAF2npV8gke2qaErJaNthXJFrA",
  "key13": "44BPVwoWfVVdUrGAURr9oLXU8wAobw78rLm11qBomgGqpb1zbCnjE4qot5zr2XV2c1foRMwA4DEah8WSi3cWueXN",
  "key14": "GCWHVDjMtRRPy24s1Tt1XUkSHot8wd3GLXvzpHiv8VzKHG2JNBLzuLQ9hDSckNccX2LN6scfYxrutJNJnCY4bGt",
  "key15": "5w1Q7D7pK8V4CjkRZM6R2EKYPhkw5Ngqffzv5k1Ps1QTsvMLF4bwBY6QDnSgncpspJ47iMHubc4DFkkx1LCCgBHR",
  "key16": "3uKTkM8QAuVw13BDsp5dsmrMnEhPrhMvoCZjEzGS6wD3VJF8GTvpZP5x6ex3fBBEU7bqssbtkjukR1WfDNxjgjtU",
  "key17": "DhCKqdHtZXX2bLJZfxnruwAju3qPMZBHi2UMvDLVCWhkniusEpkwx7FqgduHMRdfXgJwbNfWkL3WgkazkfW8QFJ",
  "key18": "67hku8F5xCxYUB8q3xMEpYMWnem4CHdDGWQh5AWSCeoXamms1vaTb5JcVqDy6hteoSXLLQ5DQU3mUwzwZKthj7Tm",
  "key19": "41FkgJaU2mcjrV55dNdTDqRT9hRgaFwS9nm61oSKudB1ZcU1nsDrryq9fFnpJpSqR5ANyUTcvdRup3N16URpdyzw",
  "key20": "5WSzMR3Yer2rw3PrBtNbMCWVYv9eEWsutgc394fDXE3QnXeNoBk37gHzq3FY4sxPDbCCTTXyvaT57tHMoyVu21D9",
  "key21": "5P1dsR8txbpFzkrAW3zVr6RNnDRcPP6tKNmji2dk9bF5yhSVPLddKUm1wNxRtKtmyZrBZHxn6RWLteTRRcsvtFQs",
  "key22": "S75HgPN1zkje3WjBGUeUD4dnzvHc1iCSM7gMCD48omLatp6AmNvwxoAw6k7EtyqwUHZFEEen15e93wRMdtyZLnb",
  "key23": "aDQJWpxXbfnw7LSG4QJ1co15Pi2kQ229QE9oP6vwaC1cRCMcKKd5fBeg2btEQNmbPT7wpQqUaY6ZK7k8gh5EiZp",
  "key24": "4hHHvGFui3AtD5yZQ2rmUXnx32tgHxussUPr1yHbfZacKzkP3X8y3eE9BXuX615tHkaWBfjT117EccK2vtW58uSb",
  "key25": "2CYArYRfMSGEwTGdjh4Xqv9U7UZyUvBuLdcmLBwSrs9JCqRpJgy6sLYHJR5YqYo6gQEk8vVbuDSvejjscZ8zmwgV",
  "key26": "5rdADrcEtTuX6KNJctH4rqHKRgSVZQ6pZxuSLa5m4xuNEMTDLLKdXJw7ArnPCes3NNpz776ScHWwzZD9XybQUGv1",
  "key27": "CcGZ6DEAzQqdPk6iUivshmaUsoA1fgTWqgiDvY7EeHLsg25t6fauvX272vTx4XQaraAvrqrJXdmpJU1T67JrzUZ",
  "key28": "56CeqjePH75FrjVRNDEvubFA1W1FdtyoKE5zf191VAsTSpmccr77xWYajuE3jb7DCEXnVdn4My6EETNzaSiL4F9s",
  "key29": "3BGxqqBFgUNNyAvp4vCHpjHGTtqNdqaJVrDjzfAaKqouSA4ZMDVwjbD9BYcRR91Kh7KyiTKRHgzPZWsj8mWqWTuv",
  "key30": "4o2nmE77yHS4bbNcHesq2Yuvx6Wqi27qxR3MGGRpuZJFfRavXFeBRJyUAtAYXoCdonwkWNbcBSf8m8unB9NkaEEw",
  "key31": "4HmpipBPo7B9jeLc1zyia5uTxKUFm3Y5y8acWctZuCtnEJuDrkpvJRVoLvy12TGbVxLAyRqG7srfyaHpKENC7FYq",
  "key32": "uBmVKYJ1uNVWLixtDtwjaNanLTr4CFFa8LpSh3AfKZhoAYKcEcjpG95k8FXxEEbKYWxnX7LWNjHEXEwMAZsmS9W",
  "key33": "F8g9qGoYAk9xHetidSqBgS6RzaE7TTcnugcGuSqBCGXbUWuupcHzZDVJ148tEuyKFqNq9KdVymyRNb1yVDuAuD2",
  "key34": "5DMBUm8HuKodqfmzLYAJKpjQRZqFVfDqD1nmz1Cx6JZDCDYyfJ4GHyNJPfq1ndeyiLPYp2Z8NscYFkBXJy4jvRfC",
  "key35": "5W5Hb5EyAiskk8QR7HyKe3atUM1116YTcWtyGsdeLfGfLczxTMKanQVQnfJeafYtCXGMYwdwejQseqJUcNRzczUk",
  "key36": "veP8RmrDPz7oEdPfL1FwAiuntvRdbCPvWhGt4eQAxcDPTbbJENUXerRYQSyu7Xxx6UuyNipcWW856H5cxRa1cMz",
  "key37": "1KkoLhokMUWLPdFV9Dr8Dq8zHSnnGggND34qC7WdZMPYfhyYPWGDYmC77zo6BNoKjvGB66UX33spQyuAQzrzGfh",
  "key38": "QZsW1tELhQs378uDExZCxWCFagdYrY1WVbDfJWKninsFNeTcbSnZNKJC2XDpoN3BSG12EjmoRHC46USXKyiFTig",
  "key39": "3wH4cY3N3hKr4DhsnpgQZ7RNPKQBdSVZcs55NbpAqdTpmhXXCKcxfoGKUUzKoD8q7nye4z7iKQ57dhNpdNgS9FKA",
  "key40": "5iMisACZzZP9B79ZcnXnq12GhqYo3aSENLGRGQgTCS5CT17VNUT5TxrM4nFf8WEfStayQ7ktEMbQHqkCfJ8FERK4",
  "key41": "3VuXYaouM3B6GSLmwi8U73dZk7yi2NgXosUaZ2wLx74nUusrRdP581bAofYFVxmop32wENVJNH4eBQVVdYM7vTNv",
  "key42": "22UXvCptAGrKfAjuBKAR6Q85VFtHjgjPqKaKLu6xES41t6QUu5QQe4ESkWJ5LwMP8WZJgZjSo7PwNMqKCmpHuuFA",
  "key43": "4QARaVAr4X5W8rqfLhLJt6nupj1doK2aSWwGh1djovbsxhqATJux5xTs7nrkdEtkH4zhcBMbLum2NxGfSifMDfL2",
  "key44": "4EMDvhXWJiu6JDA57joWMneYT5XVD1bXwJTL9uFHz1gToKW1FpEqhZqsDuyjqSsFBYk4SZ6L5xRuV8hrLhvV4Hqf"
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
