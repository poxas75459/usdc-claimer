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
    "3vECCdurvkymMYS3D7hDhbeX5SHEXDUxjYxJnoFb5Th1QLYbbEXZq3i9xpV71hDiU26dBFJ9oze86Wr9cftkpfdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKoxhS8FktUuM3RbZeYM7FjeHjLKi6Y76CmVcM9Q6jf9YXPNDhyjeiTN5dRJg5jTqJLtUz3u1CxZHGMQUtdyyJT",
  "key1": "v3VY1pizJVs8k77yapveMnEBjkSs5tr7EPXsCdY3A4HpdiDFh6t1raVZPBADqJ8HAGRB1PQMuYpfb8nSdc1AYxN",
  "key2": "4WwZgh7NhsLi3FD83Mze8Dn1aZgxBeDCBx4uLQCQ3A9mVmTTRBdEu7REUtbK26eTQxuAQ8WnC6mmMMmjdmj8rVS",
  "key3": "ReQBWADHF8nCPuP6N2wRtmsNxdGfb3KbvUPnpUuKcBgTQH2y4YKzG3HviXkyhFkWg3ViRgtCBpG9kKWDbuuWAmw",
  "key4": "2G1jAo7YgBT6AucMfjvdKZ1sAT3Ce4zVZEkxJ1KfbEQ6Wd1BZqpPPnPXrY5kicuLQ2KJQeFd7JdrpQez5rXYLNLg",
  "key5": "MGb9qZeth6WEn5jS26gg9a3EnydAo4gXScJxQkaGhJMKUMFGWvDmghKgsZ9cR5zpULdYp4cPWQwMW9bbMBtC6YB",
  "key6": "2czyzMuRcMYeUfHkZGtpAkpPmCpApPxgq6jxB8ZMJ73f9UxgB1UUVRp4Phbx5cDtyQdFu5Nnf9VXZZXkztf7iSWr",
  "key7": "5cEEjNMNHzSXB8e2gVe95LTMKi6N8BJDdbnsmcFJJ6NMVWUKrucTi5VahMJe5TaMEZbPPatvzVUvvc7z6wG9xQSK",
  "key8": "uiptQDqscmpW17foXi1SexkZKdfdZpXrKcWS8F9TKvLRQFnWaK8kgC6An6RQsFcXfQbC4xh1TRK2owMPUEq15xn",
  "key9": "3bDz5nPRzr1xyepxNe8kaZKrrjvchMQyXwSvJ2oQwTEX8N8DKmLLNY5GrNUtV47WKrayMzmASpasGz5DAvHTaic5",
  "key10": "5bb3zSTW4vT9kZ7zb8mVmMxcw8aWtjKCv5CNo2QzSXg1VtzSB451qf9BBYQJsoxzTWMYpUnh6zcysBh5swZgmrVn",
  "key11": "5TAVhUNcA8FYPUJ7iee5mnDxtun5hQkY5f6hwWk7BQEAq6CGV6ebaaPHypwUHhejdd1RHt4wzWeU1tSPYh7zYKLA",
  "key12": "2UqQ771d6Tcxm2JjLVFi3CVsKbDTZ69HCUwbVsGorUrCnAaTdSRY3YK3wQvPVz97Ct7D5nCEzKaQfXXNmvAVVqep",
  "key13": "mtXCgu9RRQfiEn7R2Dqxx8jvjnpFgbAdCwa79mo6k4C1aFbkgWTH4Purht5uKBrWaRievbJ2bDPx6ctzdBLfw1H",
  "key14": "2qZ7tMpYx2aZjL664N58pu8PgG2kJnmUNTmzpZzM9q1SGzPv9V84LH7EpMvy3NXdq93cgfUKXjMtsZCTEj14mFJU",
  "key15": "5sDWm7xsurS8oYJ1VyRYEJ5bX1LWWqUuD64AXpKn99aZRPoejFGpKiitTSfcSw8kxqg6gUhwXfaGnyofRQucL9XG",
  "key16": "58QrUWv8w3vBxVLuYHKinHUH4hDJcWN3g36jatJygeKRW1rm7uqsHdvZNNupD6eqYVmmpUHVmjTiU5xB8DG1aBnV",
  "key17": "5AQSDADZqkfKYLWK7MQbhbW4LySuQRA5Yp5YPMHJ4nSHB5BxjujZzpyMFfauBhTwe8pNc1VAW1ALFbMtszBxmBix",
  "key18": "3nVx5gjhtJ9xYsjeTwvkD2XGYpTf5tWGVnbuwSb9Xhc5ipfnxLBBkFwGsZCHBzjj5Mmysy9mDi6jh6JgjFSUQ1fK",
  "key19": "e6GcShxkZMGh5tvh9puXGozXqFtDKYk6E2v4BXzybv3aN9yHRniEGuq62h7nJmP7N8wXR1DL7KzQZfmD5xwEGDm",
  "key20": "5aiq1byq4uV1Yp12oRpHM146aDZCBcyZAaHH2zU1rs5VpVTfKxKcmvhHfVWLptfiZQA2eQAextSFaqJFKv7xP5xn",
  "key21": "3uS2773HRPSpGUg6GXn6r3WqxVebgXWgePKSKg1r7dNrhcM9GGcP2iDTnqNfL5wfT7XWsp5Tv3MdFT4CPiYLfir7",
  "key22": "2hhq3vpeckwDZYaEbwnxrwK172a6nx1NzqFLKvjUDha9baAANgwxVjfd7rqSwDiFsumFChYKL5oNB7MSW3627qo1",
  "key23": "3wVNQmUGBxJDCxpkafZhSL3iWAFFVFM7GNFo71BjiF5DkajLMUzysSpwribzTQSRgmjwN5wH6QM4q3DcPttY9kRj",
  "key24": "2G7EpPGckiYWSUxa5BYe3L8JC5GhN6cngZUqzYYavX1L6RjprgQPKnjKV2SFzE2ELqBhL78EDwuVN59qvQtdC4fi",
  "key25": "cfQGWbXFjoPjAQ4TBQoML6XUjm7UP8SfM8a6QygrHWhV4m1mMn736udnWtcXb1amchhQZquDuHVGUP7zsoHhJyF",
  "key26": "2GfNoU95cJPMLCEXxyVmogdnKJRFu1tQWdnmQUqNWH7Da3Tu6nHXxJivKP9gs3GwgRbybCcvJoLs2it7qtoiwYXy",
  "key27": "4gNhgm6Gj3ai9mjMC8E6ieeV25VzhSG4DJxM1m33cmmqt8shPNCj61N1SYZ9QFBHd1c1tKR9PkoaD9cVi98u7P81",
  "key28": "HaUkZQLxQ6mhwQVMcSnwf18hibsDySFQVwHecLAZqscVNs5Xb3x8p1e2mdPoS6esEzPLn7mJsModwSkhLjhLBux",
  "key29": "t6haKs55C3Uj5qpKX81jMFbZWkkY2TxvbgBnhcdXnhiffWQCUzJREzXPSZNxNAcSjw6ZAjEA85YrqNTMiKUCsn4",
  "key30": "5d7DZhxbAzRWKvWsBdAPW7bjdho7pMN2s6EGFa9LSgW4fDFfT9TQPFjZGvgRbwUJBue7ejH5yQe389bXNoPz9Srt",
  "key31": "4htQ3vC2SqmT8CAPPcfhKjzpKvfk4iURzeLy3oagQz8cm4hzAUJNYpKBem7NxEchxk6FcdJbNAqHhZnSJQqqjspY",
  "key32": "4WdQaUJFteExWpd6F1efZZexcwCpUbMmmQN8Do9oW5Zabr3ds2Ue3A1WFwGi8bbH7f7DJT7GJDPwdFZ6beacZrbH",
  "key33": "4kWn8JSnswPZiWbXCe6hhnsigKJsvkU5KKVRvWAKYBwb9mGbc1BU7nsgn3fF2NMWU5x6CNmY34P7L9FutPsnhRF2",
  "key34": "SGvXzGbj9CJ2ZCFFZb8zhLCLip85KmPysX8qcGjsJvV13w2tFLN3e9YUZwiygSGoMTPdELeY37gJrxfeGCieqxE",
  "key35": "5to1Yq8N1scSzVKoh8wj5EH1kjTJSkv3mZAuGPGN88gLgLL2Yg423xD8ZQMYVrqVuT5RxU2J2mpn4wtxSfT4QonF",
  "key36": "2yYfTEUAuJ8YDJkP9zvSgiksAaKvMM7JJaLJapBCVxTA442qzPz5jNm7QEdxBFaK1h7ptVvtwEfpTKeDnbmoKEw",
  "key37": "58FWJikPPLCu9C2bLEctJZKPg1SPH5tC6cgkBKGMonQSqZPaRJ8q4Xa6h9DfTD15QUhLjpB2nd1PQNRooTeYp2h3",
  "key38": "4qDs8EsuuKnWSBz4n9NWrvyoL41Dj55kg3DZBvcWuRdTqovtkDhCMQVWv6kXsUUB8sN5nDT4cXfDzytNNRMBChTR",
  "key39": "4xbZzFyDGiZHUFQKxJb8thPkZyu3twvcPrWKJ8ZzeKGjpFhSx2MgZWWUKizd6bpwbXHBPkSyFNWV9tjuVsQQra2Y",
  "key40": "5wQXSEVyzzXLuDp6PEhWvthCEmnRCKbTfHSDq3Tn5ud9tEvLsHv7Fuu3TGqkrLDJmb3tx9hgSEJpBzSGBjp9FGCh",
  "key41": "VYJAntLdnXtraXEu1NM35AZTg95CKbfWqdLsYAFRv7gMh1MBCQiuYNKPXVLB5hKtfbcGQgX76rEZKYyfWQfR8Bg",
  "key42": "o39MibHZY7B5jhyYXRgZn5HF3x7tTxPwjZ4M1PcLiTXabsRh3yr7f71p1xHEhChe3PAKoB7AofdiQzqcSD7wKtW",
  "key43": "5Vm4C3z7TEkM2gaCfMks6KRBVfx2g76BkdskGAbYuQnSBW2DvpB2xUyoA8DYTnryybztubzHiioBPBf2fV7eBhFe",
  "key44": "2CfYyPutDKefdD4kjfodieBnQWPK8R7DtSm6QjQ3DoUXDwacJUeZyRGZLtgFuuifUZGKy9DR7S3cRdvjUZKUhhkk",
  "key45": "5nqVrxzT6J8fqrdgfw4ZVEh9gTGfBdHbCZa3rxuUNizKEV68xdfhazaCbQxdHG1ycu1vN3zZYt6e4V6ByuUqLAJS",
  "key46": "NGZkjCApoP8EqV9YYWRRAeXbP4CctQwoTgxnnTmWWRuDDyGyaUk4BfaJ2MgA4tTB24BtpZPT7FndECSxurPMshz",
  "key47": "5vnig8UJVBdHTmYUkf3TqAFD1JZp7qT3Gn3TKnWAdPFGaEyL6TtnFA3UYEBNSqTRA7EbNtFjE44xB357XpCT9aPY",
  "key48": "27ia8JMyHPoxuUef4XSLJjJCyE2Frshm3CETRHj2Zzjmkc7WamD4VC19QniG2kuv3E5QST4j5WyXjSzbiHymQH2d",
  "key49": "3dpfwBbJSJSJrq1MQXuyBJf3MJSKPTA5LXHynXUivzkwM8Pdx1coR2mPGXHVMcRr3AwdA6PY8d2YzuTwJgHHxdyS"
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
