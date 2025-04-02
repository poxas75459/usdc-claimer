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
    "66oDT89kddb2q9vw9WV7pFA9rsvUaFudEneMVhrWPG36noeSQkDDX6bZbSMeA4mhyNN1KTSLk9o7XArR147PiNpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdwXqogeiU2Yw6NovQQysoEsCb5yg3vuFbKi4x3fVNkhDjTx7RaYQqkEqJJcphghnNjTnuYQk7XH3FoMPCvB1TL",
  "key1": "FuRqPEtzR79G8P2ExxiBsM3vo6Ly27CzUXDXQhqhpxVXzMHrW5imDFvJFUvQvJuNteW7WxPF2ka5mLnWwyX3tyx",
  "key2": "2icdMLTtYCvgdV5cHmYopuiFuJpSdG5gNk2U9RDEHAD6YXuy4etZfSPdPa2ZruYMLVYUR4xBfXW1tRqYchB1CNTL",
  "key3": "48GvnAchUNiTQn94g288Bw8vCrvXaPWDvL29UjCLeF8d9QKqgnBKUMuUvLhSTnW1v89FcaGVMWahuNiHpmNpgAQK",
  "key4": "4zFXWbHSYR8fCqjLHsqo3WbmcXpbi2n5JhJcN7tZYsARDE2m4GHFsid1rE2VkWfsq2Yt4F98YPdByqV7D96roJst",
  "key5": "HF7sdj6LQhTmU11pj7MwiGz7RvdWgf8GSbFq5M9fokRZtJxxGVQLko4ZCtM94WbEMtvAoTkc3kvsjhabwHF8Svm",
  "key6": "3fdPTSH451RxJRV49tfj2hdT7o7UbaRquD4GoNJWbvFKPqUTVfKuDWgorPmjTbLF7v1pXfkysEYdWG3SmdPxuEjN",
  "key7": "4zBcDxhcxVX62zcsgTS9ux4JbitxebRESmqprXwRcfGMPNWTogvPw2x2H8AbdThwzpkNuPFC9zdySCXrMxtocR5B",
  "key8": "23nEGPoGuKhUPjJX3xcK5C62Q4Nxne2GWutwpXBBSRtvHaA332N6r98ywx73figSRg6UYhFz2G3D6tRBYtw6XZBK",
  "key9": "2tC28aKDDaq1JKymTzXnXvJkVhFHrapj84ncnVwVFpwazqyrhBgcghKC5gsf81nKA68eFbKDEknF6UrtC74n49g5",
  "key10": "TcVoPa6C5ELEqcYMGd3arvs5MrTS61g3JQTTYSRJY16koXkuwEg4D5zXRLBWfpjHLCExg4KHyogYin2ptGVJE5n",
  "key11": "53FHB1C3rrAwc5pt5xau8FChVh9Ha3bsJJXKqky6qfCDfiPXUBZUZPuabWta8rwfWgCaU7dC7gJVj5ggiUWRZrAY",
  "key12": "2BExMzyjLkJuS6Tnfgv4ayyDAMcFi1siAeaGv2oNR2g5x14wPaWw65Lv6uHQNz86uC8HxniFh1azfieRPjYk1k46",
  "key13": "2u2d1ifc6wPDjuaWKymAAGgtrg5raTRmP5VdVFgND5KsnjCPFVfgLjzMboS9RZv7wLddnshWdSpDVjyzbRLbz4kw",
  "key14": "4oYC499p8qgyc7Pr9PTVivHWuTVkjn3p3SHbppanjuJsFrxn8Vs7DvDXjzncPUQodAM2pjRLs1WDzNjX9mfaUXLR",
  "key15": "3VA9hWPXUvs6ghxmZZiLH1reBbVogqphSJBbRwV5eSqoXC4ZuPbDg75fVqv38oHChDbCnbb4XQK36618f76C1bnJ",
  "key16": "2vg7t9UyrXrwzVhyHXBJTj54L8KjWWeYdmv6Ujme11GX76JEFVbghqoAkFMS6wswekDEXwWbBE1KMzD28do2JPA1",
  "key17": "48QqDSKbYG9UFtsrh7c87baGFymrxoSoUeh8BuvmeDaJpBKBhs1Mh8ywBRioFwNJLo4ZDGFjfZ67Vwe5fbhvoBTs",
  "key18": "XyqcP8DWvqgfzo44C88oK685qf9QQ7VQyna7JaVC5r6DJTLzrimXg9QLTVj1Z7yPgUwByRvrYRqo4QBmw4zFtCe",
  "key19": "3LR1Ljj2NjqrAmcu9Ljew9e7q9RW9HbQWb3vm2US8veG8wZ6NDsP6vyAH5SE2QhMoutu3bivE9T5NLQZTiozhBAR",
  "key20": "3yxUGeetwxMRL7WQNhs17Aj4MiB6zoacooRJjRV4UnWnWiGYTnvCav2eUfinXGpEKYVnS4PmRtN9GFHj2mjD5cKT",
  "key21": "2fEcJNuVFEC3cramwe2UvUupwsbpPHqWqyNBbTYMKoiUxdAxPyppEgGj8yd4npg4WQ6bhE2mqbK47A7JzXtpoEFS",
  "key22": "5SLenWoErRHUvSgfTF4bCPKdEjvvgbmd3dFknJRJ3FjnZmdVSd1kTNrv5iR4kuELrPJzE3hzxUSXwWFvW2WqRdr1",
  "key23": "3jA2GaC9VHSrdz8Er6ze1rMSjLpeYMpCdKsMw8tUzJxhmqKTYE9kFH6ZyVvrbgqFrLchQowExSBNLimAWvqBc8xo",
  "key24": "dewAY13NMtDiJ6kvsM53KnvELC9ztAFaKe2FEsA9yeocNGfSmfWh1oCQHvAqTtDWHGXhpUppKatQX3xcSrnnzgf",
  "key25": "5E5LqNzoyL8mV4URt9gpV8m42aDVxj3vG7ns496k7dmU28843V5fSq31Gjzwf4rVvkdvD4nTdGk6fTDRzGT1ZTKm",
  "key26": "2TCjEiwSwLrvTTvcuumN68zozPikh38Rzzi4v5kzfm5hQPU7cvv7ESSY35sbtzrFqZZv2gq7BaH97mwnddcM3M9L",
  "key27": "4gRsB7Qo8mHy4hFyaT3R5FHZGHZueQFLtwzdTHiZBkQgGfJXqy2A6wCeWEXj3N2eSVpHMt3dByhcsMosU26YHRrQ",
  "key28": "4bcxcvBe1bykFCPWzWzGkduhZqMAkfw1f4uhPuFzHsekHMbYXdvoc2BtdsVraQ6kcAmz5vhs9SNchWYhkzC3Ed7r",
  "key29": "3y1QDRxDBwPeujnzLBryJsumx2Kzkxb7QkTZP7TSwLYTArpGEZgGkfUQPq9MLfRgtDyMxEYZnHm4kQPJNB23axsC",
  "key30": "2E7EueFhKPDVF2Fvt2g9aZWWC4nFSQUGdce3MD4TZBTmpPbsoKmo7s8BmNa4yFce7bfoVqk53odPAVVLBZqeUGdS",
  "key31": "6585LLKwwnLJ76n1qt49hg2bkATzktvjw7sRZJutmfUhkMTa82bi8kCC6mqFc3FcGvb8SAzfX55SY6bpRuT9AHyp",
  "key32": "442N11nPE5HmfV6ctRmbpygVcDcjBVwYc2woWtKUoB2WZB1Z1oDHSKMFneCrF59ei71GU1vEkD7VAsZbXPkKV23w",
  "key33": "2kwX6yWxYx2QfnejzdUNWcqfwUKbeVAY6UfTQmYH78u3MNdr6jKFV46dbosdWdBa1NP7rtRZR1vjvpSRHxFWpZU9",
  "key34": "3Sho5XQVuWBqz282t9CwMFwQ7XQfsXvbuh9J6FrCJRT3wVo2p6xbkGq1hkxWjCzionZVEVpgiFFaEHDGt2Gq64Bh"
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
