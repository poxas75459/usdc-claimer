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
    "276fPzxtdx6dpHbFvmBHTG8C5tPnEq5yoxCmG3psNTyC6Z9tE6h4sXZtxTgFAayVCYJy6STqkPsx4GSsh4kKfbyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCiDYXmQDzn68Tbxnxapt8Wuu6SNxDsxyF2AwpuXpMYWVpifYwkfGAfrJ2bESJGjB49nGucmkvH4dSwLa6F1wcJ",
  "key1": "4XWLWfT9L3n69nfrXmZkow8wQ2MYRboha5qvvij8WLx9y8seTTeT3vNHnCfzZJ4MY2hYNa9wouULfuWmJq6uih8e",
  "key2": "57Xfom9p2mT3JvBcUFFDkC3FeUgLzu4wJgwnJcAZXZyfPz4KvzTbaM4jc6bQxLTMLmuMyn6pRhJfav8Rwn8VL5kS",
  "key3": "meZKouPGsRrhTjZ6f3gQRXcrwuL2MFt4xQpor5kZPBSLUBxuWKq89UsTDhvEE7jdPyZdNxhiKgQq1H7TzNrCtmF",
  "key4": "2usFy3VZQMGxUXUwHWznvrFdK9FCMYpYSL9eXxYqRjU9XRUaKzyohnoC8TojavpeA5QTHiR9cw5Y3imBjT5tYQcp",
  "key5": "mjVqtp6tjBEUKsD6UhwuNBAPCDQsrht4kuN8jwbWd3v4ar7BoHTuZNdAyeY47NujRmgZGPUBjs2YjBmsg9XZNqq",
  "key6": "67kSJGwtkVBEMsNGBjUqZS4bcAyJxjNDySu2c7kRk3mrvpCw6qZRybLQrT68a9JTQL8K4Nyz6eAQYk9XyAg3QWHJ",
  "key7": "3sv2qQk1a4qd8DzZfPK3gqWNo8E5erVvQuQLyQsAZoBedPHNX7jTcwR249xuFACuZVc46fmhSdr5fD4rhLiLeHdK",
  "key8": "3XaRJrq6vGHbnB5NkiiPTVC4bZqFTBkD5MQzGYNWcVfAWrDJCGTFNpCXGTothgCaJu5sSv91tL8H6CttQEJPw1Kr",
  "key9": "31PEEHW7v9Dw3Ai2iXgZ11ZRGvXy8NA6EugrNLeXcvpXNZuEUAVJTep2PMWEp9DeQzAVLQZFRA2wpjscCfZCRv6G",
  "key10": "5SrnNxVJV5aW1ejaHjFhe5hBcxsje7QVvXK7Uh3M6SxK2hKBsfoaUukaAdyJsv98VyhKkcJrtxgftZ62DqQ5ZvWP",
  "key11": "4vVDr4fNFgZVCpmXoM1QuekWqWKQ9WXM1ftvbEJbQSus23Ec6xeXQrD515ypFokUyYKFWsmyqe1ADuKbU4WzLj6i",
  "key12": "2mCwAEXoY8w3ZibjKwvPBDcbtTDujzYKDdjHHoRUmp9up7TedaxYmHSo2KCG32msRdkMB3k2K5GMo7wntjN3acfv",
  "key13": "th4eFnhKER68rV2uTQ498QqfeENACQhdezj3aXc7aq2msXpgvniriWiFiMwpnHiqdi5iK5VVYW7YJBG5ToheGXn",
  "key14": "3Ncz5prj5Si4zbRdByp9y7XQJci42aywy2STpXaFs9bsQrW1YdTsmruJWQyJJPrunmSwU7SG9KDgFUckPV3Kpbx",
  "key15": "3ad6VVQuf461jsYGzbNuPwMpjGn3PYXw8VZLS2eMzrFLLBdNHK6hQRJm8ojnZ4jgAyynJK1sZ4XxqNHFfjdgthCA",
  "key16": "4eUDxCUC3vqXPQBZqrxonp8o5bhPKBAdRUGQY3mhsHAPag7j2zZaqgJxb1xACT61z3t5Ddss9fGddcr7xQnNrAYw",
  "key17": "36nW9Y5XwTZCK9WSdGzCvP8mshEScDEDaZSfseocydFjmH5ok2JkeDv7gZyNJejNMpdG9Us4vqg6M37gdki1ytL8",
  "key18": "qYaJ7HVwkK5vGwJyoBJxjS6A7Nogtrk4zy8VxqkGCodPfDWMaeqSaPKV3ua4GSwKKntgj4yzEGJEBRmAdgCYHK1",
  "key19": "zYK1UU8SiqT1VafiZktGELazPcoRwuKr38uk9Qw7YCdFXbHQmPLXMNkMC6ybM7R9nPJbFqpMYLtLa8r9njm5K9q",
  "key20": "3MwzMb9o6xfW3PyzbWUCuX9r8ed44M6cPZF7StbkwFCpTMy6TPcdvkC8EFEoL4EzsHH7uHacsbgJwvehV6F13QSJ",
  "key21": "4kR2G8XKr6bbw5mVkYStpAZjoQxn4ASW6rELKBpxdMuPXDtmFarswtMwVbeTmSXEsP3CZfxachXxK5esgFWuo1Z4",
  "key22": "4Gmy1ecmg1L3V1XNaj7tNdkpSEtmcT78TSiVRWLwwvWkjB9CjSxMoiGWuykR1TaKnJDiiZGmbpkRTWQcySfcwzki",
  "key23": "2UbNyqp2w1M8zeeqecUs411NgVFs2cGwnwJmfXbvgpeVkqXUXi8gj2yPHppw9CTvS6U7BqD8jnNNYzMpfwR7JPJY",
  "key24": "3XdQGGeayTRF1tjWABM6uTLmtD2eiSjjGZGAmkJKyLSU2mXnLxKjH7SUTw7npMWeRMoR3XoGpoL4EqsxXhC9Yoh7",
  "key25": "4E2uMWBmtfVXwBnjPZAAUjfGTDyW4UAvNXbU6nduFenbVfLzGBAjSGCbAKbyEnZvu8DzyURwHsmRqV2G5UpkvjCp",
  "key26": "pT1S8w5m6vEqz3oTby65XSALYDMbhCDCnf53oxL5PGgQGdGw9BaEchrfG4tyLcDGXLN7E8YvLShAaw78b64fkLZ",
  "key27": "XxWVUpdyY13WKvcrvsqA8t8NJa9kDvX4BcQLFHcoi4f6wdwx8SUtx27zEQwooQ2GhyD4pRLc7zDWWqchV7S4i9H",
  "key28": "U14BTgy2Mi93X9CLp3WiE5XJJj4fYrB39jxTFabenQ2CifS7NPZGuXTyUj8AV7NWAvaBtXqUtt9tffe3iA575tA",
  "key29": "TnCQ7ByVHcdpRedXbXjBDUpx1NdAUPEy82hoNdhvkYA399Vggz32CTfJ8neWySY2QUn3D3DiYeMx2dNJRqxHUhX",
  "key30": "5MzAyAJu1UndTpeSLtfZfGTgpJqSwSaYSPEjCX4GjpvEQ4iGhz6NWLnnp7vYHEfF8sF5WRNxjg8FAxXH5ZgaBMpX",
  "key31": "nr6475u9ZXVpEA5pGWJ8Q5G45xxxakznuqGG3vc9zoULGe9B3d8a7FsFjfKc3hoXftMKP8d3AcC2zcwoEMqJBnH",
  "key32": "GNfLiH6XWprAGAbYRhPbfkSGXTKpWcoG95rmSdRqApRrtAgHRaRc92d84AQLvLCUmr2stHPmoAimd5PPYhN1wLC",
  "key33": "5iRB86KiZbuCxpW3bFPW5LL5nHX7bqe7PQ9zfjsvvfsTnYxfFnNMEbcXFby3CLoP7BGiA3gVBi9F3b1VAsRFcL6V"
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
