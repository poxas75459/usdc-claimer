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
    "5D33V49V9sDUc8mWNDBC4PkSHnCq5iJHpJj9cpe7JV5mmaKDgjUWzJeWhF8y4kJ5dSoMoe2wBE5CLTeU93Mvmr6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2vbgDNwaGy7XVQ8yuPeitRNDrTzUfpkDTWe3M9CyTSYpfVZWHGmQbywGupSdaeKP7igwEhaingsdfPcte7uguz",
  "key1": "2wqEL62GR62cJBHaQCAuy5uxaWiRX32BKZXcJKXdoe5jDBJAmKUht7khPJA5jRBwFK82nzsDNcZca7bKJyRTftXC",
  "key2": "4p9FvsMkvV6xQB5J85axZ3E8dNaJSY776sTtf711VLWwG6271LMaMwzTQmNFxWoccVMPyExF4PgCRbh7RQsqUqPH",
  "key3": "5m2SMYiAkhytnRXHbG3PPVkcAZgoUisAseUtVJpmTs2ENTQuyXEX3YJ5gPTWQGHRJVTrTso7jyEQRTwJt6hdkUxP",
  "key4": "3KkKqGcoVzjAuaf9z3MT6Pebi6ykcHQ3SPg5p6t3di3KH8nWNm1QdabAEWjEvGBNkykkLCj3SdzvaaMJbNpCvEPx",
  "key5": "FVVCiiJhTHGCan4TQjbyQ2uc6Ybh7u1uJGbnm5nLAhGzbaavD8g3bC275vMFBJqQq5jxeXz98TDzuNWJ9Famjry",
  "key6": "4KnUHHoiTLenYxS7FyybxDU4Jft3FKPYSSzqshV3DnUh3E3sF2DdVsVFxX3jWGMie1zVLa93UUtt6gEoiZGzLTYc",
  "key7": "47SRwXDS2prRXRcu6owM7LwJsRqD4ZiHjfmtxDFvXiVLnd6CqJmTMFgr4eeuLt6HYDsHHEfKMGwepCJdv8bn4Eiw",
  "key8": "3z6PRczjmNrpSiu9QAYkChHpfnkj5tejAo7moJK1nEXSLjQEYvix8obYmFqoLZdXsW8Y9uMF8ETNhZbbrapD1Gnh",
  "key9": "WLyWqRmLSyoDXh8VzMuabShRTzdUYjSSETLrhwHrxHbd37NqwxMPWdKTwz2rCvd1ZJgQ2bVrdqaidAdnkTTTG8F",
  "key10": "2GxCFUbjHkoACKNi8qBSYEQ8Mp41bgvPk7CUeaRdiBSi3q4JFjMqcHH8ZmkTmG7EtptquygybC2P5MxibMMD4um2",
  "key11": "2gbNkb1BZVBuoMRbwREMRDmZp1iyZfGR6FBPZLUt3iqeRRnyVJDSTndGEULaxfF2fgPLA53dbx1mZxBDRit531Mg",
  "key12": "itecFdfBmVSUvXdaXyNbHCp3jtrnRsdXDwWkHqikEpkKYHbkhQQFmiH1EtusqMFXLTVUiU1AGo7FtAJBpVijgXX",
  "key13": "3jCaeqem4wX1JN6gAMdkt9fh3p99V5bDoJNaKYG7iA8qmVJ6bk8kMmPDeAXw3Gq4jbLag1ZvzfPQ2hxXcEyTQ2dW",
  "key14": "22qEXgnjMzSwSx5xcVBvxn8n63jzeJn3csnDqxiESfZKXhVWnQY462eXrgqguDsUEVRr7oXQyNTzEcj8AefwwijH",
  "key15": "5Z9Ab8PgeRuNQDeKkcxNDSR4LFKfrXv1tDs2G3KcutNAo2nWGui5veu5d8tFVCg8EbvbU65itfW41GQBcmWdR6oB",
  "key16": "vYWkw7iqH4ueHuAvb1KFLR7KQdbEGEjmsxnbNqMHp57DuF19dhNtqyKB481b9UwVwupwdkzLs54VC9LkVjCrgpJ",
  "key17": "4Mtq9qENYp1SDqM7FHbQxS5ZqWk62aBhp6WqcxuzmQnPJe31wWB5HWfZL6FZBf34XstTbmSFaGFfL9JjdfL8Rg9E",
  "key18": "WdABdJaVj7i6ZU52iJAMia8vCkxkiCk5SJxs5QN7S53ExDd3cpAo4RTXnBTXD9ZMk2ZZRtasMz2N9ff2Y2YWadC",
  "key19": "5m8CyY5id2tXHdwiTwR1ZrfAnQ5Ly1tuStDXPNGskgVAB4o46PJ5oAsRjZivnfB2nQ6NELCPrAQoSbpqT7g6uj5D",
  "key20": "2EjuddWCpECEwMLznMCFxzF5Qsoxi3MxwY9KeV1WSUYAQzGLzoaRQWFccv6rJkELTFbibqFP4XiXNzmsFuQmWGFG",
  "key21": "33DECAkFKFiWQyPqBht29misVRr93P2GHgA3vBmJe56LCqqLb9jVdM8ywBaaV5WssN88DVazJsz2jqL7crivSo8J",
  "key22": "4WsPx8b6CCTsL2Gt4Hcd5xSwbXixMVzRTv1vujVsuj7RF8vZacUwW8qZadH5U8AHo4nDgZfHYfNrrAM4T8SiWxVP",
  "key23": "2ekwxPmfuSUYnzmTnUQiD231w7FGfcSZu8b9ojwYxNcWMpkKPzn9JR3rccmx6XjfLrMB5V1uHA3yYLvbWTkdYT5G",
  "key24": "2ZoHCxH3R1fyfkf7ZdkfwxEEUqn4D9KaJwiipbyM1vGPTgaiKrQmhivAn96rr8poQC81xbAdrHn6XmzJVKczJ6d7",
  "key25": "29atxtf5c45hrehwtZ8bkhPg7188BA8T3x4r2zoM8G7G8Mbgqi7Dhgd7vUBDCK4QE5CeyjNr1ss7xTJ2kJo4tasb",
  "key26": "4WfAeteMP7qgFxqxghNfo2EYBRShBgisRR7GBA6C7soqYN8JaqY8eLwG8Hdoczew8gX72617oTAuufMjcChUeuK3",
  "key27": "4SAbx42QDBjcd2r1aK1KFnqhzMib4eP9iEnkAEaQw2yMaJ4fY6uTGgD8eWY2z2ViDPq2g3QzrHys7ACP4RGL6ZNB",
  "key28": "3npzTNSQ6ZWpGsGH9i6wzZRztQTCN2UtJyWZ17DXiumz51QdFAqovKuNqQodEqXVkBQQ7hFFVmdbAZ4auMZKz3Bk",
  "key29": "36E4eKQokMMkXtEUh2AkdcvNa8odAfi4yqReKt1z1TqHR8s3F33UwgGJ3TFZy1qSkX5EjxMrf4Ed1XnSwumVq4Kz",
  "key30": "5rdG9w9sHnUh1Su8KjK2ssomeCAXQFqMSstLjsihVw745Z5qSQK3WXUoDYTeUcLSdroez2g81qEx4qyqRwGsGrmA",
  "key31": "5S6b3BmFrPaMWWxD7qex1caRERhPLNy7FvgCXdLc9QmgQhBcusVe5ixaZJEMKdcM5vcTdjN4ePW86XAaF7PQm3QA",
  "key32": "EjtMNugVBGz2hVpvqfXLbfo4FwdeW7Nzyhsd92VULMHzL6AAfW9xax1EKjbgF1d7L4y9Cszdy2k1JtExrChbsBm",
  "key33": "47XDaSPJJwqYBAiBC6cg4dipZ8zRMTzKFrW9xnCNiM5nTf6oJNCRbD4ijxU6VcDKcvyVw7kHpZv6E5wjeHupBcic",
  "key34": "M4muvqHe97xf5MeFJLf5NraDFv8WQN4oY6haVo2t8xfBP76xetJB7SJHBqPHuNJGjPqryfUdbsdtNdA3vHCndMf",
  "key35": "2trWuzDntGyMKhNmf9kw1HysPvDgLEqPymYBKPfrFM3JmBcmR2x43FVxnCZeJHTQRH7UxSpkGtrXik3GMkhMYxi5",
  "key36": "5wC1r7Pq9E4DXzPBgnqBLcC61MN1S1GgoQgfZWehWLprHLo2m49ETCkGjuBXguXgx1sGTR63xgqpuiwHi9HMfGVs",
  "key37": "66obbXg6o2q3dBPQpGpvcyUUecEQU7mUchi2LDfKdqtk3HZeNEuo8TUJUrNGEiwkxiV8YEfjoumRyvwvdurnLQ1E",
  "key38": "2q7ewGXMnjLEDTTe2G8yeuHGN65KfTeyt47WFaYxeNqx9o4LZFdt7TQME2LdUCwQszcbFcdVAZwcKGb4V5ZkKYkv",
  "key39": "5r2XDd5MuiWujvTUdjk4thYahFioYHGSNGwCnjr4zK7uTzdKaTfgY9sLzBkYngHREpK5R5fL5hKyWDjUcPoRLGu9",
  "key40": "2H6aiZwTnhWtH2ASu5jN7e2QQyL1Ekz3WrUwCPYFhvQsDbhtQZDdDwNujG9nQfCiTbgYvnpRAujgvNXDyrTUwANj",
  "key41": "2w8t56Rq7BM4MEfG1kXwtJrB5YBtuZKHCfRxoMaVJKhJbKzQtBKm99D3y29uNzYc4Xzcvb3GHyhrbQhQt4fLBnQk",
  "key42": "4h2GnKJtcxQU17PvChc48ZZE9ze1z1TU4S7HQdTt3oge5c8XDWbHqzKkEpAS1TEDaDd5jtHyPg2F9Muwnoihpi7G",
  "key43": "3Q5JQtGbG137okJ315p1SiCw3TQRLiKnTjqePfbDt1kDzbss8UztKJCkbQqSWgVTXjB7gSRS2qq76Wxgy8r79rex",
  "key44": "2cWk5Ka7rDfaG7V7Doc8Ndcu3vgHRLGuVe1mANEMsT8phQVHe5ubMvoaJMGy4BsFL7BjPpd67vTiqAyzvwqfugip",
  "key45": "3QxXQHAEfyGRVvTotZZsCnwPtaEupqYtWovHGt8n9L78vegKCShGRTuByWtG1HCCQumvsD74Ht7gta4wRnrWuF5s",
  "key46": "nphDDUEnzi7WdxvgwDeayeakitbXqGkRP2GZMBzSR5TWegJJrP6JGcKvFh6U2W8KQbqX2KfJ9LZwrxg7psrG26U",
  "key47": "51swSrDhi16iXrAjFEb5vzcVwGz1Tz3Lzxf3o2VcwzPdF7aj8FrfYpiDtH57uHY27Za9DRjqDRvwChkELrWRR4vK",
  "key48": "3zKGPTcbswi5sCfxPHLD1on2v3GRvqy4AWEaDufuteE8RWBd45YztxrY3Xj1gfsqanwZgwV2LxbNHDxepK2HzGBu"
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
