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
    "5pbN93E8PTvgU41mgX3zsv5VushKBnAhJXAksVtR4WgMg2noLeFrLJ645FzmsEvsSy4FW2PkiSjLhdv8LEVY8Sbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MuFuznBr9fCPBT68jS374nsQgeBdE9Ye8vb8FSJoH32tbWq8zvxEN5jkNT2tGNueb5i15Z3L3NC4rgv2JoCRyET",
  "key1": "Z1am6b4o3gj5MfNLRwAAAY5wvpS3X646XZeTa5K8LEiV7SxE5s4LwaV4sxkeg2PrsjnetU7pdZESk3ib6yzoGw8",
  "key2": "RAzcFQ1Q2t2eXvVPM4PyysEWjEBW9q6XBwkntzGg2LpzgZYjxuvZcpLVjKpGXPUaz8yq1Zer4jZEHUXgVH5wVFu",
  "key3": "2HAG5SoRqq7fay1FnZxxjAYfDvc718RJXafv8YbiBTHeEjBoikSA4CXdk238u4ou42CRktMvvxQej94WcYTsEjAw",
  "key4": "2cRcRJDNqEFM8nam1mc2Td6ZzDzbUpS8QziE7jXKmPCSSD9BT6kpj1Gknp4FCJhi29EyS1TqTdd3SfAWBHB4jbwc",
  "key5": "ncqw3x1hnK3xaafU5FGsczBKgXak4HEZ6YkXXtSGR57PbXzGaLseAzneMkUxHnLxTmnPKD7317DXRqjGLCtLQAC",
  "key6": "5F8kKoWuDxCRLUoK3GsewxLqi7XQ56KPAiGmCZPeVqV1d2pPVmaNfu6B8jMPxnymg5iVoAQte1KinQ7tWMnL94nR",
  "key7": "4A9iuocmLRfyY7Zj4rvMzY87GZ5XkpWHPfoxPQcXZkjUBzKXyajcs4pWkhzEWhaqjqQX4XfGRkCuT31ZtcdDxJQv",
  "key8": "4cbQD2ZoJ7z1MojEgF6CKynSpxczBSZukNFKnEkCVeygu4FHY47q2xit91xttRaKxNXDAS8hKCgQJ3BdSaZuBjAr",
  "key9": "55KfrS5fXw5Um8m2W4baxGhzEpMVKKCMzBVHickpaQienPmUTeqjWPQpveFJLaAG6uSmChDfV41f36oeok7p2N1s",
  "key10": "4FXcPzp3zGtqVHwXtwMQf1dHvb3nUPAw3x9R7jXnwgYpHxUuu9EXEREUKbi6TFYnzdKh4ZjsLfaBPz3TZyhvvdJD",
  "key11": "2n4di8yx1HgPPUYBdzzkknQWgnzgm9JvzW22xSLJDkKq5tkjWBqoBHkJsyAAzLiKqppbY7ZTfsikbG1Y6gdCttuw",
  "key12": "4z786ea7i4hdY7YNgEnHq4pZFJuEVEAcoKb99zvKRhizbEBcqntpEx67jjk48kT7suqc2vawxrhJLcAfMDTkEumV",
  "key13": "3WkbSrnbLpsxQQjg3vGBm8epmCh3sKC1KABfWGbrVhyc6jMUMYH7aXkpzEfVWucZqAnq6CD8WLfPYVe8Jp97Jrrt",
  "key14": "5Kotb9nsHbJDKZ4dH5hrMZdKf8VTChVcovgMU2yZ1h6qUBC8ZenswzxhKPHmNw1TYXoNDPBnwBb9hzy4L53SCbu5",
  "key15": "38hFPyFDEAETtxDu15TUn2NCU6S6aRxQXaMsrbsvf1g1JA6nv3pvUsUKE5tUrY8VUUpJ2Bn88P334PJDH3w16d5f",
  "key16": "5bThrZBQZohHiUBxmnkxka72UyZAvHF1dzeyBS8pqXLAEjWR1gqiN9Qm6awBNNuUH1Cbwx5GARGqeVDSosCdpUhc",
  "key17": "2KeCALPdjnP8MkYUVQUt2w58QjtibzJo88pEdekoZfpYSG68487AZeLAPAy4wziGn2vWii6YRj1J32f3nPazccjL",
  "key18": "a36bvbBQ2pXLRwuaC4TTrVPndhhboF1KxyT6Fcb6PKre2ZEH9aSTDY6rTnxjjL3UEZxE72Yj9iwMt4PnRCHsExg",
  "key19": "5WXnXWQm3jpTbWsZqCEfUsmwVaeyHqTGxtbtzDHn7C1Cza73YVmRMYeuRQAFcaHB6kfvwwSbRfSEyVoN5VLQ5QZw",
  "key20": "2XtKXd4cW2TDEx3kiQ2mer5sQyNWDyx2KggNnrbJ6j8dhNch2yUfUy3a5scS9jr6SrREvtc52Y55nVnY6ZBbEtkJ",
  "key21": "4tJiNwp7vi2CqWamAENxnNT5hbikKH9eCNE7ac7rYJgYQJN79yZgDEsvqSpnswEExwKZUNrQWUmj8rptLJTagDFp",
  "key22": "3etMeaWEBxFhWkqaXLdYnT4kAjCqi2373rTpr5FYgqtWHjQLM9qTt5gw6CHHEWgAGaJCii5WNKihWGZWciC9cpX",
  "key23": "525Lx7yVhQ1VecSUVqewXJF99yweprdzDAPUjMquWU5bqXkXyM6Xgv6bx4Fdrm3erRFrjf86QipxUxPNPq64UeXU",
  "key24": "59W6Lh6oA6haw2o9CRKgoBBEseocaSEAwrNRrYBmbApcNCE7PKtRaCm9HrGCf2w6bbDm2ZtMHnxKjcRv8kStWaKs",
  "key25": "3HCZN2KaJb92aJWkri1yRunFTukH4uCk4Q9gxZeGGPRS8eAc5Sh7vqRgkcoVFB3UfjRQUCZckxvzGfagZUnJu9bm",
  "key26": "62MXTzR8HKGL5xi3Z86LxziLQvRHdBiMB77t4y4pu5vtCceWiNYGwR4hncGuuhMNQ4pDjJk78KLdd7r9NWQ8sV4T",
  "key27": "2k9JNvcm1yaaZdTZkAydK6hn3RWinoJRsjC8zkedo7urKospzKbgtzC2sgT8jBshWZohLw4yV1cx5Pdy6ZvMJuEz",
  "key28": "4SGEKVbBDZmKwpS7QDFKbyaVTVbHwtaBBWt3bHupUpWLwTbgfY4M1EbDAvH9WWy9Nb2F8B9KBi4RBayavRFSaVoz",
  "key29": "3yJ1oCh81hmyUfTyGWG7AYtarkSU9KHKGBhcJqV28AucPzzhKPZVm12EjcoVKJNh5S48fGGUhozpLWqjDPxnQPVb",
  "key30": "3Yj8mLncBvjCH4yMhqDpVEd62idCTk5Rb5ro4Vdriq5NaYUJfoX5KM25X2nZ2fwj54qTetRfJzFVLjaSinQ9biQy",
  "key31": "2wT1eFLM48jYYnC38xgz9vT4nicaJFVuVMMDMea3uBZdUPqehXXMvPWQRFjesY6E8J89qcsJXuSMT2rvdfGuN78D",
  "key32": "3jAoBm5jDnDbTAcgzqa4pjCZ2P5dc6cweNzHmLRJgSxkPLYZzvD5iWQPfWbhhaRQtfnpZNzRhfLmqKALyrErUJst",
  "key33": "29j83Se41gteaEqGHVUGxbBLwBUivfBxb9vwhZWD73tRkoy7ZtQTjdAoefALFZakJEpYTNK2WR69QocFL2MmGd9F",
  "key34": "3J3w4TU1FjZrbeae7uSEP2waxx7NmZAZfAsULNjjFUVV5yQdERLH9utPubZXN67Chcga5apG7YfYZXCAf2TfoFYN",
  "key35": "sz3SPhqqvxbw272MVoH5mCdHCY2cBV1CfuwUhefMLCozYoY63Lhb7mRrDp2UjBuqcTRFrmG1NS9MHBPcot7UUme",
  "key36": "5XSWo4xCppMMQzacp15Ki5fVjt3UUJmxQ6ZL2RwbPvkPgPdfXBPMMtxh3Wha8p9qG6j2aKLaf6MSJiVXi4euh3Bu",
  "key37": "3ApvsMa5pDfFGCrcQiGkGSfUCu3UqsMduevugvsnWVQCpiLpgbVrzYToMMyqAGcz3fEmbrAcguAWuiiDqaA88XHF",
  "key38": "4qw8ZSDHxedLz4Xe4iFKkQshaCJnJrfXLpaTUVkpEcjVLLEXagYKcJHugrVziW86mP2gmsNWffKfCQBfPA5k6J7s",
  "key39": "5uTJLWYsMcXwikTbqE5SuX6BePuyatBawnDLMBy11NcXNG63thejhWHh1gafWE5NU9VTAMV5HbwxE4cR5pQb1CR5",
  "key40": "4vTadSfkoq9SBzxoAZSFUnzgrDxSym9HWqeK89h5nYKVnNBcJWZYGmdcZXktdizRxKanfkvYBovVrpYy2BJjWNvz"
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
