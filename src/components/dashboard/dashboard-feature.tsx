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
    "5vafcAda2fBW7u18HEvuVqtZxKq5VgkgVkveH3dsUDQH96HRyoxTAVfGFJDtfgkumGE4QFfEzcng1BjamDeQwFoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543yuwR6gKJWa3A4Ho3Ww4khMXoFw1QePqEudGt8ujLTvhQjMCj9TL9qmrM5Q1Yfk1tGAyvBdKtmoKWrtHErNoMj",
  "key1": "5D45tmxoUQQ7ia95NcGbMqT4J9nX5M2vCf8h9ytPHNi4DmEPr9ij9maGk13Qaz1QLCuZEqyM5kDiBiE8c7AAMyZv",
  "key2": "434KXkTYJX6ZrxzQwSzX6rVFkhPWaWt8T2PcJBQtQ49c4nkxcsmDiBKdcUdaHzs7MvJW51ZovviHF7MWWfecw7GR",
  "key3": "x3vmj4UniVpJZtosBdYfJVWpzRQ2XAZ2yTAFQ7bXfbzL79h91BhRonc72YQ4B25BqmXmcz3xjTV8sK4Tmfq3d5S",
  "key4": "3VNggg9zgZvPn2wDscotE7KsqaT7YWTKyyRUS5Tjzfu4HVxd4GVpptphmiZcFogGH7dTQKAi6PKZiRKAsTkaBx1Y",
  "key5": "mXgHNXCPUcuspu1qv93n9o75DhVBqwdtCpWm9D6upaJSeHdWLM2VJTq66vo8PxGGCR4D78FhauC3g56i214Sve8",
  "key6": "4RoizhwU9WZp4KVTrUWo1HeHyJnoQALdBvZmL1WQRKJU8YewnhoAqHhP5N6NRBwqJbq3yyZyKq79rYeR9pzrvspY",
  "key7": "4G5z7vxQqkhBjyBCe93LywFr7cVnBL1KAwqFSJPjepxFPMBYkpLsc6CsCb83uhQy2GXvMT7PzPHXMKk8knPX7y8p",
  "key8": "4GGPcABndiZQrdPGWArE6w163oemxUd8tkyCoprERrKP9sUkx9rhjPe1Jd32QihjwLcigubagqAV7HP6BSAcSGtg",
  "key9": "39RBtCF36Vodn2QR37h5yBJyzk1JkVJQXfLMGzTK9sme2ZrRqJwxuMAN25CtjnEDmoBjpUzKQkFh87vFtR6C4zqV",
  "key10": "2v1ChE6rJaruT7NAMkaSKWqvDiGZXnvm1gUYN3q5eLJ27jxrPC5QBZCiNS6CG3VT6fXT3rgU7s7SSKaYsQxbGUs5",
  "key11": "67FTV7hqnQezCwz4r8nFYQEmnHmUokLFoidpvzRv4dXrpFWBbapzVPtca5bQ7CkzXysqi5yVdVPaR3Zda89DtSXm",
  "key12": "5b38hQpKuibjmA42iYi5NdzpoUknzGaBmi6r9Pe63Nd2U2FGe6o6EaJ8u6t1hsVkw3gYswwJeygKhmdhqnrDoiGz",
  "key13": "3KA5USWBoEVo9gmb6kKZcgu9XXeEzQoBWKVusZjfCy3hxr66BudLVGfBnFjmJzoQyR3FMo4GiH7mv8L28SNeVMEu",
  "key14": "29g41sLXmLpyZP91BeMtzwyHi2HGCvtN24StMPQEvjUeTsBpu546N9Uhp5w2WXuMGnSRd6Jfgex8eYGRsVTKG5qG",
  "key15": "3YYfkce782LjegHg3q2iMjRVjeCPU1kwNtXDXNByeDUBUU621nieRupj41SCj6Y1MjKbz5AcP7iY9JRE3T68Nayo",
  "key16": "3sV1XX5LZcmv41rr5TSyqgB3TyPZfac7UZqSGt4wmD32UMAtPgjRoVBX4nvA5XrJLU3wo8DCEoU94ZnbowiMjj5A",
  "key17": "2kZNdajWyAVueLb79kR5gqbRzTMJmzYLNsq1hfLU34SchxBgnecbgViA6rMwZ7einfFKusA7f71tDmFqdzB9Egv6",
  "key18": "3ZtRbVS4f5cJA9Tka1wGVqCc7NLcmKngbSNYNR7KMyNeA3BgxTWTnSrBkYvtskdwSYSNgJedMbk9JTLxCKH97ase",
  "key19": "2BBpAjWg4VHfzgwn83Hriicxqi87f932NsrUHnnTM8c1rbHSZFBU5notWC4fTdgCY3YncuF1avXYTUZfXGwZVs1t",
  "key20": "ugpgXgSyNwJ5TEaNNydx5RaFz3F532kx59xvboyrJ3AoRy4D6YRgeuRttzduU8VBr5er3jwQXHhLF884e7wYcvs",
  "key21": "qBfuDsFuXscRAWbnMLK4o7UQxVnHvjDheXc1YNxSJi76fQRah2nnKbEHNbshXv2FuSpX7fRZdt7RGLudzXFVMCN",
  "key22": "4vAyPrdZVh2HiTrseaxGQCeaAKHLVRDCGEi1RjJGg3GmoSNmp1pqUvztRfewoARQPt5SjZh6R4quEuD68JUSjPUs",
  "key23": "2NgStYKXnQ2pWjaJRBfSqByAP1tcEHcPVoNLctApv5u45xtLDxz9tQr7hQGLmyHb7L7FSRjKqaXY7SsTp6qnpvXs",
  "key24": "4kayZnvxbEGRcuBUMUeWKE5iH55Jt1c59CWWyZJBJHLPRLNf3eSxSQVpixsDd4yuuh6iDrxFogmmBtc5ZDQGcphP",
  "key25": "KtWBKyEXwV1kVD1fJehXvmcuss68Dne8nz2KEqK4AkqjxcwffgUJVtkHcQd16wQqDKUKoAp8Vx5xv4gqHmJcmrb",
  "key26": "67GczwMzkYroZoD4btPomStGidvtGcyWFEV98PWmboiHv3dfZD42KUDDvDZc9t8cjqC7X98DcEnWUALboaK9q2iT",
  "key27": "28RUjUTSar2FFyvn6pQsRap7oENJXYCQsrh2yXSdQW3NquUsvXVHEAtqxB3acQ2s1CBHz59GR3H6QCXVH6sCEPL9",
  "key28": "9TJcxbJjuDSD3xHcP1ULCj1yT8RcwYfq3uqXqVX6wnWCqiwKRn5TwHchkbaTLawnpGD78MdsMoWt8D4SEqVCqNr",
  "key29": "34ovJekjftBhrdoAbvVPyMxT7vZLSohAMY5ZoskE9Ef6Wca2rrB2dn1V1oDo6rLx5nrLcyrDYvpammVfFxAACZ6g",
  "key30": "4FXxx3QmcQJZNSsSsqf1iNmqW9BKuPmCDHYiNsb2vt8Q74yJjV7XjbH1U2cuaYSFAGEP6jpUmgToANftGEaFR8Sf",
  "key31": "2skVRcALGGLyxrTmdzxHbJ8awHpZhzEGT2UNUAkaPwd6KNpaZifWc1KqUrTDmzzShEzksmWkeJV7TvdwA5tosgVB",
  "key32": "2QcnBUJnwU4F7cdyicrKr8AJHyK2MCXDsQifNiwLpa5seVE4UuzJEdb2H75Wpc3QohLMVKCdX8g337iqJZV5B4wN",
  "key33": "2ztA1BaabS1bpNRvbEVPfKkQEC6JHTkY1zg1HzxnP8q12CdWbZc1T2iEyAf6grxw1UQ1d8ie9KvSBtzLC2Fe1etu",
  "key34": "5hc8yLJ7LoYHgZixbi4EqZMHAqnJffnv1ZK2qy1Z8d1ahxQLDHfezqqduPCrsU3RCMCRWAEUTbYotTp2Gi6qzh2J",
  "key35": "4tUmnq8MbWXZCtcQC7Wo8PYwdSpbCvLE4wnEdXrdU6hjPWDDgHFXm2VnVc3d3bvXq9fnntrUAd45AAtagKgv55wG",
  "key36": "2AG7aBbnxqhwrd9KqJPoTeQPs4axj9gqq582EVG4gqjhxy8RCDBwEbVMB2sLSk95Pqq9uZbL21tgmE9h5Yvbk2Nn",
  "key37": "2sumwwu7EX9qp3cVp3LfJrYQ195LCHzEFK7ZGg9sRWXHnzvrGmLiaspUCNxh65AXJiFnoECbL9q54vGBCnrQoAVH",
  "key38": "3wNstfeXbF5MHss8boCUdNRFHCsNEnuJQ2gf7mNLiDDgB6rPqELUmbarHj9tBGajvmCNxyRRQcwZ3pRAvEmKZFxC",
  "key39": "5GTLHWNiJEWt9x3GHgQePYowj1Dms5D9hUheQCDwWHr8LKBQNrxqZ5HzfZruP7t7JrMpVWkJVPdP9HeuC8L4sjys"
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
