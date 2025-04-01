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
    "4fr4zfPJzLwv7CXdNArh66N6PiiqAyw5JMdaUohb68RwPR6mZogxqNkNPkuUZJMW8qAZgkv8GpU52dLGWZme6xFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41oKPdwVSK4jWLZD1H4fuwHQfHVjHJ3XUA5iT1rg4stu7va7b1wvn39CqW3UT1wDJzpcUziTbjgJ7nQSBTLeuqwP",
  "key1": "5HETRQNDaXnQbDuVNyczfcnzcB4wpDyzo29SKbbbjoeNDVCY5cESjNq1CtChG34wr6ozoEyLm3y1cXKEPdJqEfyX",
  "key2": "5gsjstnzifxk1buYLxjTgG7TJ3TfZ9WujMckbACgvhwXG6ZxCBsxWjE2R5HedNU6565kRUTfbm76W5hEokX4evgB",
  "key3": "LerTpSfxaDnjZd9prAN1qHaYqvC2XHvGNuUJQmRKhDkVnJsguS9JXES82ChtbFkqMbojN5ggRUsUfDpLqAxgyoT",
  "key4": "5HSPULn1SMLo4SLEfUiBti3dp1rX2VDwpwzUXeXqC7GN1coSTfLUXe437SpGvNFKrLYsDKHr3oeJ94w2upEU3AcZ",
  "key5": "36cFPgEiTcQJvy7yuazSNUfxwwWvWftP8QwnUtwmqjDrAVnRCH7GNodyZMd1bNnNsQAeW8VgzwiLeemiUt9DhodC",
  "key6": "2emD6gXoAvWhokbk9ZdUVqcrZVhxJAimj8ep2fgVoXZRw8q3NiSzox4eRi7f4vfTQ4JnLW4NhQ78bXDbLygrAuA3",
  "key7": "4ma9CRVitjrmBNyeekTG12rgAvEGcWsGR2vRxnsHWAeLkQ21UDQVaNNGiYwt8PdLJqKEeaa3oEW1VzKNK3gB3WDs",
  "key8": "35kxmnvEzfT1fE4yveWJ3FxjCcqeF6izJfqDbRF14wrHBpzf3HLC4g8fawHeE1obdo2wn3cSU6Nw1jaV8otJsQZH",
  "key9": "fFdbCPwerC8kbEehLxt2JzChH1hR21yXn7CuJSaB9wHpgARyG2YsBYokrk8f87NQqrt684WYdevUYV939CmZVM6",
  "key10": "2iWBXS4aV5C7KnV8fxvwHXYRz6KJjfCWoJwAYDJjdmGUHcaJo6NUst7bu4mCvZjQQgFpsfVttoaQgyi2JBUCqE7S",
  "key11": "2F4kdb6WTeZtQH8ckPyLRLV6pjJVt9zn7dXARXBCdLXMhqM4BKL8nmgHad37kS8xivkYS7dTykJw2rLzgu2wjJrk",
  "key12": "57v1Fcwnw1mHND89onfGKkuao1wwgrsjxF9BJs3BK4fHCquaa1hFniqphZVDjGryTEjh7PVQc4cGuh42RU4S7J7s",
  "key13": "3S2yU3gUoa8hMw783BTJ5Jpv23FEkPz1ahPuQ4oAMUru2QffV3LsjXCGxzQDY7UEXFTRGoJSotaGGu5PXdhTzKWS",
  "key14": "36FC6RBeAaGe7PjADXwPJ9Gn1hapKBRPMpdut9wJByKMDPEbrUbt8QBvRZjYz5D9SK6nu9bPF8KTdSieYSB3Q8uc",
  "key15": "2uEoyZ3FmHRKQpz5rCxfaSvGjTfsoX2Wyq85EDp6rM81DDG5x7ZU71yXLoDy6X3o6bvXw5Uws3vcFQ1oMpP7Y6XF",
  "key16": "CTw3c9avSu9YXW4kiivuMk75YipoP9Kws9z63xSmnv8aEgEprTu1Dxfy5jMWzZwaEqo2mrCacoCaeqQwznj4eEK",
  "key17": "zenAULSrLavB6jSvDEgXr9b7sxgR7ZQRr7VhFPQUx4etWYf6whXmaQPFPRWHXog9jXMH6Ga8YZKLBzRX2n8Dgf7",
  "key18": "4Jp8wELu3Jx5J4r65ktbycQzmj1MtzxXZUCkW9c8J5q5WUUDzmThMG8xuHZYsZrhmcHqsYZ8kWbZAaT2zsxUGaZa",
  "key19": "51Qge6cewrjmuj7EDvH6Ao1XzLmRuJckiQgLhSNhNwSCZoeP6CLNWjMQXkFYWNCno95S4z7Z74yRdfbwPaahSQob",
  "key20": "4X4LV47pQS9GsY8AW3NN11PwE6VR35SuCiPuD2Kpsp9fGTH2nW8vyxPxTLu2JtKvBvFHwRNTmHVbimkm9xogwe1X",
  "key21": "QLmCUu3qnYJymPksjEHcy3P7FNUvmkDb5TaKt5AfLVDPBGA1srx8miwt44uS6xHxxacM8Mr3YaMJ3Fx388fFysj",
  "key22": "TBzbh4WLwh15LtFnTiwuFCdVBN92dzPqqztMwiScQnacJt6cZfuLLLB3HrxenWRb2EzUpHuEgHbXw448huePA1n",
  "key23": "2EGyzvdWmAfypmRZQ2e3XwvLiusR97N88oEyEA9KCg9KqNgAbFgsWh7XFSiAsCq6j3aGrCQNXSquxeJSnTxgmmJS",
  "key24": "iuvragCAtXJrJCVGnj5jtTR6MFwkA8F9q8VaYffb1VnSNnC3gUc98GPNmpAJPQ2Vmbcc1VpFYjv4vexhDWB1JBz",
  "key25": "5EsRBBkHUvhPKvF1Xj4J6seBGGXhmgta1BB2Trnzmh2b5BE4piDQL3A6Zkvds338YUoXUWBmBkDkLpiTon77Xt6k",
  "key26": "2QzNwxbNvacUz51cx7QyoAa47BLU6FbFWeizWsShFUVmKvv691yRTMJ5gFa6Vj4czho1S2FxFMyikMQQ7a4PHwjK"
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
