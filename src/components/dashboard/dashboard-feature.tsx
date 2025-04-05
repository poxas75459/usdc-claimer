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
    "5gW32R61wjSgALL22KcUc4J4eVRoyGu6r7bi1CDxeLbpjTpdec7AZNcjzaNqSq4ws92sRVZroL5LAAFys6UkzsWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXrUaJEFijGfRAuiubJDbdXYNcp89YKWSHQyYc1hU5HDFDRXWsuUvRCCWWsaEnzvYP5qfAdCPR8esUEPhkaJyqe",
  "key1": "QT1ZRiZDWx9NiGPy5aCC1ygfZhnS9818w2gF5tXybXoAGY8nrznFjLLLgogLkYrXiomovWkwmGzKC2aJRLqBk8S",
  "key2": "42tk2cdny7iCgPrRtY4uGwQu1ttSyrwoGSTkFne414Aano6iCKf8FoxknpdoZXYn1HDkRgasMWxiZF6uTmc2bkem",
  "key3": "61gMit23EBS3CbVjxoqrR7wqwjqESBuSg5vAUy2jbp3P3Z3BPX36QMvygKNgKfPda7Sno9GkGrbK3PzFLVBvNFQQ",
  "key4": "2b4ru8wg7gEKpkbYEj6pSrKhk9tGp613u5vc4C5jsKGCasfuBmyHCsU866dfYVit5VA7TttxobwxHsdqYnK4JSxC",
  "key5": "27fHHFxuia97HD9A2S5a7uGibJBfDvQzvLGMqiGc1jVMG5sGZm97Lh81isr2fEgtsFjNx7vyaXusASETv5bRZ2N1",
  "key6": "2zMBsKfVaZPqtGcg9VguFeVkMAwtBKDyCnCe8F2tG9DSsazsH66xfqXbVJmnmWcbeXqE433De3aESh1jgG4NdoT1",
  "key7": "4nsE6gHhRTtt4qcNXmKqDifbNfSPYh3yctLhHcsM5Q1RmHyG6AvgektLwFGeTXHgdztkNmYWbG38yAjzUQ8byRrm",
  "key8": "4wcwbdJx2qTuoLPWHALnvLPadciheFXraMVmSvwTMbz1agwCwBp6aRm4jGb5yk1GqDN4W11f9Ndhc5HrQkSzUK3i",
  "key9": "GcWcknNgoK6LQRzp4jL9aidHuf9r3QJBnB9dxCcfNXMG6sxexbVTbt5BJU9Q1Zug1FLYgWPSUb5aMFUWgZL7Hni",
  "key10": "NYwmEaxRcSbRiPvQP8FrZfTW8ZkQDn1rKsJ49A4bVAFBSNtbTG712GeBheQqY54LE7429VafQ9ZQyCGCV6kNBYx",
  "key11": "5kP6WU3MXbLz5wPWHWfhMykX9g5WA4YUmvk3ypVVFeHqvHBQPZeQG8Hh2pabTCFALER1caW2BSM1L7CwkkxKEJp8",
  "key12": "5NLfs5TwERULT2jAsftWRWbprXs6sFQMSBVTAqpNB3ZCEgn4VmyMnJ7v7D5wXdKzmEr85c1vprJPDEVnudd3s3fG",
  "key13": "62oeDP2gWYj7Qih9h8s3GsZHQ1FrTFezQ9yEBLsZZPfUbf949vksL9ta1fG9TfqFhDuAXuGFFKHmSx4TMhLY7s4A",
  "key14": "4jftsB55gMfW4EjwgKFDe3316XKiqjFqPh1q2SgCXqoaF7Td7q47JqVJncQhY5Js5afDQfici79WEVRu6EVrtkiC",
  "key15": "5pojiVZHXKaYcVnhzapApd6ufdHjHuNqC24i89KL8nnC6e1o8dJREzaScsSBmBZbWFZeBHTVxGyjJPeR85hYXpj6",
  "key16": "3pXnzsFfe8wHpE1WEPMNcCdq7KnEiNxTT51JTbnupXgBjTJekNdcHWXZ2PRLytuKKrkdKH6kdHZuTNtuFifbe5dU",
  "key17": "2xmTkaVUcbhtBQce2Lq6cm6gzPjZmBxYGvLR94nZHdRmhpDEh61PyzuueDJPT5rEdcUNMAeH9QBV6Vp2QAr6B64c",
  "key18": "4YrM5tUDj6nH8id6PUSzwsVXcmE44e7CSVdJVubMbmUkSjRbbUhrGejhMEwtGLzbU2irLsuzqVKkkL5FVgWHwhhz",
  "key19": "4fhAmhhdg9nQa3v7fsyvtqVxDRSvR8RdvuSGkPjNokwCZuzqFaWAseXCjqt58A22UEK1AFXbwVq6A8eVwGUHthrE",
  "key20": "2VgBfxRAzdNj9KDcpUEahokUAY2twAduaer3gyosRp2ZMVk93sqPU1kxHt1ZDheyZSaJZy4dQ2YWTTUqSRu7afHh",
  "key21": "3F1XKT8zccExqQRdPBuaV34z7Cb8Fhtn7TbPaSLcCZ6H7buqSwdu6tH38KUbazpNk7DCpkUpyekoF5Byu4seou3X",
  "key22": "61YxthMvLZ8qN1NhwobFLSoCRQfLfLQUpcsNzSWGR4mLoz3xkW4Ly5eg2pXNw6YPKn84jVveS1nyxbvNTkHpdBWk",
  "key23": "2sVVNPAxkmmMfJNqtyNkPEqGMkjciM6PBsaikJaDyMzCtDkmifjUThBNogeZ2TVxP196DxPWkbnm61p7iM2YM4hR",
  "key24": "53jw5VCQc5K3Kf2TcWtjoFqE3oayLopuUf8qMg72Up5mgmAwMBoxNB5MEwn6kZCBUdn5HWiM13VvSg2mXFZPYm7e",
  "key25": "2KouGYZLoTwq8ErrHFF58cxiqT1TB3arUWs6JDrtQoU9qpsqKr1w62bP2T3KbcV6sQ3TrSGEiVDXKyy7UZ2uQ7RN",
  "key26": "43vTrQ93zZSTfTh8f2n8ApwzbGqoMH8BGRfTkznXDjiRw1h9jfMy9L4my8Tzg25GfnEfjFiA5KL9SGUNJyqRStKL",
  "key27": "4667Rk1cNXeLAK8SR3Z6nu9VUsMMn32h7wpAFomKjgXuDvaFFehFd16eu8LfAFQdXuHMXixxqvyaEPzCGnP2XLTb",
  "key28": "72kuRxnfTEJFcvy1ApHKL47KGzaTdWWu4kmKDy4iaMMWTECkDpYRVxMzniTgc4KebQbJNH1m44KiRdEf9StjUQc",
  "key29": "gMPCQ4fj2Mh8234MqYtu9rTXrHNFNpyxvY9QfX6dYY3h3HKujxwZNX5yt8fAD3wb5aXgZ2nYsrQtX4wAfFPhaZa",
  "key30": "3KChoiNQh3r4fjdqcSA5Wxc9JJFnfERmWCvKhEdEpZX6iLkXXo4NViuKebAjwpVPKP3UzHmbQ4GUYPKgzqRQR5eE",
  "key31": "5Giz4WVhaeHKi7JkHB8KxE6x5ssLWS6urTpj7wX5UxUSmMMFcSCM4RFQZXpvox7Pq9A838rag4T4EfvzwpqJ8DHz",
  "key32": "PNUoCgfx6zNoqtw9Rd8u1zoLkzeUeyzeQLgfPLzVWrAiGCCYcgraVv6JoCZXCZDcJii52Acko1r5q4NBQ1qiojP",
  "key33": "4FjSoXGPXMWkhZ8RtuEWjBvXHnHFSiQQ6Hbjcx7zpvm1NppKGLBtutBzjU3ecGi8VLcL4vt6EX2zXcxYco8FNkby",
  "key34": "4QzAqH3SpLKhcDbvX6dBwcu8mV4NqUL6VRA6hcxkryJE7bgM8hoqvAWJK2HV6iPkmdosAU2TVJfWrWBhn2pkEhtX"
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
