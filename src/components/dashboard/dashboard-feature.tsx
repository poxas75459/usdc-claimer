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
    "5sHTk6gg6wfudHoPLE5ffZLYFu915njh3Yp1cs5enzduSTgFZBNmyBZGGAR6PU7DKGqXVvnkwvVB9Hzaofa8ZEmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYxJZWeeCwZW6sTUDajCAHnuzr8ES3wgwpR1xHAVaNut5K8ATfGCfzy7JdWXQSSwUKZ135txUthw1jrGqTyeFRj",
  "key1": "3zB2BTwTWMadRcnUmtBFjPcxkEBeU8SpgeTvYH1MwysEBnA2gqCwCfytj8GSvrpDPJFcf3qWZBY7jq9cdLjLWBmU",
  "key2": "FBtF3JirvfSydKbA3smvD8ujDcRh17EisJYnkFqZb6aEJS5jLVKjvcpPCt4iYxitdMSH9dgrHW4KanjgYH3Kr41",
  "key3": "5KZFqDwMhGCYcBP1XGqDwpGfbnWXWvzGMRTjZDFohwQs2ePnN7Z63GoLtjmrSNxM6ZM5HAqWsnwaWZpmw94JxkKt",
  "key4": "58gPcrVspUxqHTVGsd9wdbSYdLdmKkFQGx7qREc5Qp4UGLaMwUrWRxN4pnN64zq38vG6a3VNcs2NT2XN54PB7VA7",
  "key5": "QM4FvDChFnTaw9rbNpiGU7pe3MkfMDpTf5q6BVKk3KuEFeK7MVb8WAGaj6c3QR1ijBRRsdegxXHxUehaV6cqJLK",
  "key6": "5AaJNcSPhthNoiGvwVn6yv5RsuyPobeJb7WcZZ5LbvWunUG5pCYEp6fnhYbCLrzDfMzmLF68YFb9QGLsd7dD157J",
  "key7": "5C1SPM79d8gSS8Dnw5efvsFrYdkqLc5TPfV54XBqxrDTa24VEKhriGabK5mewyqtQx2XgJYGnJNqhEtntkPsHX1P",
  "key8": "5GbSca9AUKWdB5riN2yJEhLDCAiYUmWfDjPBtPGQhqikVvmrqt4CdD2PWE3e52rZvz6W1SZ4iYjr7DoJgGz4qcTV",
  "key9": "2MKsB1qR6K9peheCgJwkYb3NNa35DumxgdZ42WEasvcdw7FnghVkNCbB66DiCjZdtAez46SQegBGLTzifip1aFfq",
  "key10": "3VhQ8dA3UF8mJgi6hmbg2NqBk3CAZeMSgVpLNdRrJUZqxkWT4fXX2vN6GzxmViAy4KP83B8opohkYLXtv9yYrFv2",
  "key11": "4Z3BS5anwADQDWHvxYzbsa49qNhVbkAVFy8Qh93mbSqYN5PpQraQsyHb6tS827Q1oNqXhWSCM1pbmhUwaq3Zd4e9",
  "key12": "3Lvboi4hmbudbDjyUxybwj81R8AFnRs6DNnDRaj7BscYVtGpfPFVn9PDiyhy1eSEFRACw5BNQ6nnHpTR1Jn2R64j",
  "key13": "3fShQ7BU2PfvTnMim1DNk5HeSSR8CbQiz2ydGbhL9vjya7mxhhYYRbmE94kFyShiiGMXryKrNxKeVNDtSCE6r1Uy",
  "key14": "4j2ARGZX6tTHEezmaQ8ZSXoRmAvS4nYdL2fjPjeAi2JwqwC4M9CTSEerLgu1Rxg8KhozLGShGFHqWu6fYgVrREhZ",
  "key15": "5KFQC9Jsue8aCR2HgJNhcrCuxJ5YCjJ4Zcio531cXxgtnX7HuyjrKh67nwDDAF2cL9zRLcwWh23KXBQ8GxQ8AKYA",
  "key16": "3LQv291yp1qxXG17shqXxDa9mLQ29HypAtEu8FidCFE56sotffzTW2fpm3JT4oeoyNgC5qoYCeKJ6GgKKBfANnC9",
  "key17": "21WbbquFSZmzSi2Nuq9aJLMeepG9wanrefL9ysDk6d6Y2oqbxijarrWoypgCoyFZ5VqhSCtBji4Fuj2GAsUpEG4R",
  "key18": "5DXYi7iAw8mFtfvjwCXW6Hp7QMMyaMxi9U2cQibNsy93h11yFaiEgGCSrNk8bav4nSEFEfozk73XEjnWqqnJBW16",
  "key19": "2VfbSeJaVAqNWVr3gnH5Bjg8Lk78Nn4KxJpRMxZnW1VWAfiK3JaHam44o1vW6bZV7tqkSD74ocfqhXHABXtGuQKY",
  "key20": "4udtChKvN3obNTjWtipe25iAMJmQqN9CFSXkVk1gccQE64o3hiB4VED49iS8Ro9BZ7JbvzfHd98uDhjA19qAWGSY",
  "key21": "3Ssw4AgZC67RpBrXm5mewitRCAkacd2urpa87c1wXMzLnbJtH9eJVirjHN4PkiKEnghmHQ68PnL3pPuekDsMgCUC",
  "key22": "5c1TEXQJzFhu7tyi1a4fts8kua3TKmsH7RUxmauCC8KgC3Css6xjNQ7EzYqNtXTCZuYD64WsdMgfqVcZB2qJ2yWb",
  "key23": "KSFA2QotfLsb613niv3xjj4gESZ3QNxowdpQvTN41p54tqALJsCuhv6HHv11isUuU2QdfD12UAc8MAjjUYgBE2a",
  "key24": "5rTPRFEq7f4VFR9piVQQjZzseV146wGiH95M3axYRWod1taHx3yRR9ki1VnT42gJNbLhTjri4TAT2kzbERVNcMDf",
  "key25": "2LXhvacGm6qDvWVJMcSrTcGKqxg94b1ngsYyd1uZ84Z3XBxT1ftcyvN8Ng4AaNsuFAfsnSbcr3k4dzDQ9FEiFpy7",
  "key26": "4y7sAiFbPUy85bZatmGFuucssbLWFq7dzYQ6K2oKcdYvsRPQvEhiWvAdj7z9LNGjvvewpPhgd2sS1rVYqPLr8fJC",
  "key27": "4EVYiJAzUjCKL1Ezaxvm1iDEUaxwu8ZYJ2UDCv2G5dmN8Cg7dDERs7KXHZReVdgeuutYXw5yRHBasthquMa8MmXA",
  "key28": "4nEcHetGkUirNin47wWchfvQ1nQy8d4RQSqeAhrxJfTCp6BVtEhF4tqtnkjJWH5nsjHJWNLGv3ED5YzJbg9srdtW",
  "key29": "5qRKp9Qw2BN7j43JjovdGumbA9t5YKkU8dJcz4MEmGbbNtQYmm6EmRG8NmEZNL1iKyVhvPTRZZJ9Yg33rdwKM8hd",
  "key30": "39oPk3H5xMgMozLWq5tTdwgUzyMCapoUoSNjzDR6HuhMR5hxWeB2VmfMTvK2P56f1E4PMxznkx3T4dy6tuB1pXSb",
  "key31": "26FuvTM1mw5o9TNjuzJs1VnRcE1g6dP3feBCmvTmeJYKwK4ZcnqX4AMckwx5sZ9wiMUYxKLEGMQrDEwc8CZkmRJf",
  "key32": "5zLfPPCcFUpbLydq563nhgGvAuMmY5qjaqq2YXdTvCMvmF1dC4hthiBqkfTRxGPo25jNtdBoJYjHinTXyz6JVbXv",
  "key33": "5W4tJc8X88oPVZnJVmSNnQTkJqWyzj8tWULo8orgHxjRo3qzS5XmfA3aPLceLAr3UswHi2vQUyzRZ4f1qwySvDee",
  "key34": "6zEB1yy3H2vZkBRKwsm6eVfHTiCuN2DrKwksi6puA45yzM2ND3coyVp4uge49a84SDJSLmi88LYxsx3WsA6nHfT",
  "key35": "485t1yshcFUosDzwXLTSLmCAVtDQR31taRBjvAtUJfNp2kDTt2bkxbffiZC5Fu6vXk5FCw3vLDUcDUSjcqmLNDUu",
  "key36": "5KqivxtaAd5AfAafsVL37fxAXmmR5s4PtNEkbzkMzycoB3gMLxaYc1qitFEVDhGA28s3DTKBrv1j9dfyL734UbSH",
  "key37": "5aGwnTu1ELWMBPV8NvxhYKkEJNKgKbo1wSdcM8NRwLYSVhZFGDxyJDmXqEYhfyEno5a4aSNGrjXducLb3B551TCr",
  "key38": "scsWCFJcYdT9mmpYBy3KJvSZEoHBiHrw5iGBWKX9RSnY9C8EVSQ1V2Un4ADWmoqJjhk3Acy2s66UcXtBNPDAEDx",
  "key39": "W7jkdcguZVG5ae3h8ipwk39qtXStBKqG4kKPXT3GSzR1Qn8WkrSsryYzqxMPwb5PeJTpnEK2f18VtCFTwHs4mab",
  "key40": "5MJU3VDKJnG9Fj1N4ewwd8ziDWJ9SRjhJVUpTR6xbfrzvaqGyZkrSTerukJZ7bX9WaKoQBpEiLk2kGbSQSQnV27o",
  "key41": "565hBsLbdBUb8TsDjNRTmtd1uU4FkGQpdngnnxM2XUNEoUGJc1sG2wif8QbJLxatpzxzfYzYyrBoMUN5Xn54TVAf",
  "key42": "gcte3hCrzR8FkYkE7XduZpc4R1MuJ1Ydai9ffd5yo1nrM7TvQeYiuHLKPQGPRZUh8KJL5TQozTUSRDNsVr9cfEN",
  "key43": "KUPUziEZ3B5CTEiLvE8WKFGqyB84jg8NDoHv4ZiMDbbAGH33DQCSR67zqhYwKw8X3AMsf757fJZLonz6jnP52uX",
  "key44": "53BsMTTSqaTn1tRnvgyD8bxGYbyYLcivKvXFAk8GNmBfbdRDQqvmmtfpcHxx62ghB5Uyq3xpqFyQdXUAevPEyiM",
  "key45": "3Shm38PBQLS1kG6CrXqwFuZ5EVVtyJvYzZVakB5kEWqk8QwMo2BfctZYNaFE4mnZW8gXnRPesHgtnF5U4X5WD8NH"
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
