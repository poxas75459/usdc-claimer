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
    "3JetUexzQQGKZjxeyWw3eyQRF9kUoQVvKEtpfX4LWrCujct7P45ngWsDXYaFn3kYycP9S6QVuLe1Fiqv2gXztJKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsP81kveaXJ8XCDkW5RWNiobLqdeGfRT54PjkTGqxGsG5WYbMoZGYT95vbBRHVUno7bv2UGby1oi3dX6opXHDNr",
  "key1": "4ZPRUdGnLitraMG1MQzHddMdbKVsZJLZ3mTqKCdbxmjXhZXj2kHhLwDSJz6DBi2dTa4HVqhvN8vRY5xB3h2cEw1i",
  "key2": "bSKqJCzQ6PfRicvKEgvNgxEbhWFSwKo9uhZX2BfcoqvVrs5S8Nywci92ae76bo9aYPW6LqKK8aKkTvXymUVj72o",
  "key3": "3kU4ctCHKnjxNnNTcxLcY8MuUA7wDYhk9gjQZcSk98JQY4LWqfufTAxK1Eaps6ThEwpXPGW1Z9H7d1tcX7M6XTnN",
  "key4": "7CJiHoRbXVsu8iM1YNsdRaYHQzvj87dC6GrmLytm5vvujZ2Wh7ZGGBcckgnauG3t7EMh4U8piWXrXL7BDTF2RgD",
  "key5": "puz73df3DeZqsgzTQc5ojJAVB4frBYuFaksp4S4VGGMPNQfkxzcrDPjsWuCvfHWNvUqs4BN7te1YXQwPVRTq2eb",
  "key6": "5Hj5xJKv1veiYVXA6zetkRe3NEBwZaj7rikkBMkgBJyixh1GsTE48Qw7QF21oRh6HVjQQYhMZXBKuvCNt9RUPYxp",
  "key7": "48GMiEZG999zezS4kpKPreNFz8yU3ZMbQoS5xY5P5JuhTxGuvFBexcQzBEGJCFngDRSgMmddcxgBXom33QFjTqCo",
  "key8": "4s2qsQdvihbpUQ4f1zzihEuVvZ56pb7bHyGdcwDRV1mZZ4TQCPEsivNqwfZtJEQYQi5oXTYtJPRjqpJb491XdRZV",
  "key9": "2WhnG1WoGMYScSn219BfoPDDTbGuFdLQNKZJZnzpUWEvieLjET7XHYgYvGz1foXxF93PHvsfpnBY5LDxpYCDbDEJ",
  "key10": "2H82MaZWH8ijm2KteedRP5BmPqGqre3eT3TrBfAirvFbJipT33gtgu75fKQqqikSx9fqEaBGBqjt3TBRkLgtrVhE",
  "key11": "3D2XnLuSr1GvGXVAYost5axtEUYiVXNq8EmaV4LnUdyZk4CAezVGTJz1u636a72cFnm7sBUAhGa7hBABYKh9T7Ni",
  "key12": "vZPV4y5DVetpP8EkRrtrwdio86jrumVgPVztm97KaHFHcXBk46fXcF9i3Ep4QuEw7VJLZjceFEe3jM1UxgbyCkM",
  "key13": "5qNFqDy3pHrQ7qza4nxbcjJFov7uo27YDUUA8HPkTGyHd6nznXahnjBwoQ7UidMn7VbYDcCw6tcgpeVyAJ2PC8j6",
  "key14": "22sEq3gDBUgSCcJFgZwQvBGz9iHKBg1n9mLdknMcnH8vhtxKLQmQJXyztXM6ftvHdD8KBNtWYqWWKcCC6UqjMUuX",
  "key15": "APwub3dgmGfH4XbrjiQ12M1JRH26vhrEhqJHoBEibvpAohTCgNBEirEUXichwCWhZM7tYFP6H5S7imCRGJw5Wbb",
  "key16": "5uvyCqyp8VMxa5m6CqnLmV7e61Qc9dJ49ARwj58fz1peJqXWx3je6VhnUXAzCTagm9uenJKetv2URQPYoU3dCPxW",
  "key17": "27yhP6sdmiThZmWMPaWj9JVoRN2oeYJWC4KV7WkPDA1jqj9czbNCKnvhcmX9ippmexy2ZAJ2VNWe5mKt3JVrztrd",
  "key18": "28skmcvZHju1RgZb1ASqZY54n526xX9iWW4GWp7nnVteKNbrZD7KpPwccJUUiHjaV93tBrD3GGcfeTCmVnXV39VJ",
  "key19": "3k1fknPgzANEmnVWuGcWgkoWApg2PmF2D1hgwwWBhf5V4V9aiMT4ndzLiYoofhXczHGsbDDtZ8kwyXdgwnrq4nvV",
  "key20": "5qjEXtxKyRqDQj26BEWQsHgMY6K7AwUQtbMpq8a3a92x6qCv6EFjKHf5E914pZDMaFQ5Lq4nJXZJnYuUapxABX9E",
  "key21": "39bgQX1LGEeivSDYyZsYamie5eewPuZpyDqyaP2VdjA2Bwwud8hpzRaey8TYd6RuTNGJYVaJwSmzPZ8spe9LZySv",
  "key22": "66xyrHVJXuqN4oV5AvVZsrKk4BNqmeP7goLuGVDqcTXoE1MVhYkSX1Y4mjocFMbjj3MrXUuSrFAVTCU9ey72zvLL",
  "key23": "3AXHoXiaLo3qDHFG2cnQcSsmUQCcKsHwY4M2hNHge3przXD6KCs2q177kUajcHdbHgzB92FC9XEoENrboq49jyg4",
  "key24": "3uCEnYLi2kC9qXZvirqhJ9qfK2EpEiiuAWyxmiUwcLJBP6Wsscgukvhheq98QMsNGtotd7W2kbqPvAXx6dr1GvKs",
  "key25": "3EYvbEuMDfVRKDzzkqsspzbU8qQEgoKL9qCWLWzKHDvVbBNKPbdZtg4j8DXGg3sNkmo9X8y9AiRAGUpmDDddin1N",
  "key26": "2G7owrxsycBfZHR9prxyFmWpm7CMoGEHzabddskJqhMUk2vkqAPWx5rKWWUY4ZtD8ux66KT8c4RhUPn7DzGUbNoW",
  "key27": "4wmbNXpuJzLxt4BVsrERQFabCaELXsaJ7TYLgkbWmujBH2bBp133eKE4hgtCYvFTZw7AdkLCsWp5dSitRGYogeBV",
  "key28": "5sCThqL3P7rq5KkHGcRpQGDFQYTxQp4sKinQmZNAaiKex8q9iGLaLMy3RZWDs6Qwnpx3oanqWrxMxvUyp5GsMMt7",
  "key29": "3Uz7sGpGsyKD74cW5TVuRoQKrjerLg7wFHJVst4oPzugrbK3rDbigQS8Mfj2H2DgWjsYCW4hvE9wae5QKdXYsrGB",
  "key30": "2Ci1br9D5Mz4G456cEuU7RcRADTEcR45cBzKRghpE3csSed2t74iWTqoXenRRk7UkxnpzkKjPScTSxdXZjMBAXy6",
  "key31": "4L5TPDE8pp1fYRCZgq6yzmUcSepJzUfuKrnnGdawACNQiA28QpoaKKgpKnTmR2NrpaXt7573RCh8yBGo2w3Y3Spq",
  "key32": "4EocvmK2jPzmQfcCyJeB1k3yvdgwZFmQ8k46aycGY7n8Pf6SoNekWoMkCpCevAQp4QQizmpAQnwVs97WtBmJLpeA",
  "key33": "2WjmbSLSZMJiKmUCjb6qbKSqgRyiCt8F1jp5L9H1s7pYLyUTSFo6RoKZzEN3GgCfxEqB8Sp1h2LhbKRgy28WhgDm",
  "key34": "FPuzdXMAvAjXFXMczCh72xGwWtGBMmojiesGWgNZh5M7nzCdWnZ8YbbcHf3g1CnS6N5FL8AjH6QCw6vBUEhQ5PY",
  "key35": "pMe9YFeJrnSZEWzKgX2xdzAAxPpBoAzD48H7A7RMb5SuzrEKWanFFVwfvvYbG4z5s9HVLCgzXCMbm5Hj1LVvsiD",
  "key36": "vadV46H3pXbE544Vuq8b3otTw6CHSP6rRGmwrsDHej8DY3sj2jW9VWtqrTEcP5pyZnBjKS8sZMYxCxZmAJJfs66",
  "key37": "5zsATtUBGeoxznMezBm1tnoNYjkStr9T4aAAqV6rYB9foJbdVz5mUd41BZLZRG3UgM7dRuCUTEyHZMgpyvQKht5K",
  "key38": "2gDUBq7Uu4hVMztQLWFnLMGTqwD91kw6VeirbdocHh63jwM1ATstBf1w9BGd8u9LzFFBmWkoAX94AqKQVT4fnGw2",
  "key39": "37uHeFNCqNaEsKWRWtcKhkiRBHSwxVah4X8vmC38shWcg6PMJxmtyfqd75RA1DeqbBnria3Bc4duGd4UrmCBcPqR",
  "key40": "3NXt7Hix5GQBVCbqywA9azbdMnh3UPg1bPurHhS3tiXr8NLA7KKAvomFXqKonsK9L7j3RPbPfmqgc4ab7Vxk3QqL",
  "key41": "4psZovQP7mR7vFvFb7wSVPBtgeBnKzq7r9a8RCewxR2PsdEMkMnLTcFx2Lcu7zJCpVJsMZpqRtR787okuBo841QH",
  "key42": "od24dhVJrVYq8EGzVH8n4fBnpHkeMj48PMBf4zzLrhe5viKcqwCnSZoiVCkNJMMZSfCmRwyPQdtgGQkmG33NBWj",
  "key43": "2arhMWn6YkkQTsPMWX7o2nJxwTqJAyY1nBy5LP4sWsQvmHfkaUtJEWgwjK5tP4PfLwo1XuKkycdTXaX93Q8PhhfS",
  "key44": "2Er2EQcdwc2xdcWCsrSbLVRhTce8RBYMAFpboA16dgXXjtCGpM5nyVQJizFTLNwQZC8oqocCRi76d2TrS18JKCU5",
  "key45": "rdDuEWgHDf4kVcj11SbUg1Jk7eYp4Qcu4EGd8BeWSWzwWSDERaqPpYcN3PkLo9Q8ML2XNU8aLJQ3WzD9wpEeXeo",
  "key46": "5F14CGWUngcT7VsWBh1WdPPucwp6fcyfYwr24Gwf3fqsZBJrp8eY5pma32n6fsdo51vbDiPwS9xg2o6AcRCyfvvt",
  "key47": "2NPThHDDvS9TtA3eNr2YhWxVb8zwQa1zCeZgdQpZRNafbhM2dkLZkWNFPmZ1TAAKvx6cpbVBVKFLrme1pZGj9k5a",
  "key48": "4T6VhvFTAVfNfJa7Qx1PSJcSEG7fJS9XgNnFzn3uFZNcXywL5pbVciUjtnFBsMjjHXi5Dg7dwq5CmEkdjGLDD15K"
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
