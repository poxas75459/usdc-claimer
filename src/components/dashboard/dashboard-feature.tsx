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
    "52Z8SPXwQKFXi1hnbaM1vFWBkbFouuzWEYMwaKVb2bXDouDh8q71o7oUKCaAETyXiqc95mcvT8pmpDs9ZHt17ByG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTS4kEMGR5QWtmdDmMPgieiD34cJrTNUWLHE6WZw7qQCons8Dk1RH3x9EWTw3viWTZ9BrYpzTjpMgFvmh65XENx",
  "key1": "4exjJMyr7BVepoFUh9vZ8ajnUoBUKAdMG1u1W6bHZNmHkxAJYgqvNdJJnhRAVQxkBHLRCRAMoettZ2H7zPnJn4ot",
  "key2": "5fLTHeWehYijzFGxHs1fYS9uXMTJAMSKSNvQuqkjQZ7wFhj2kzbiPVbwJ8ezCjqDem9yhnwnqAUgevwnz3erLS1j",
  "key3": "PHm21XHv2GRaCbcBLCWdDLnmmKxLMz7ktceyhhjg4R18gPeHYP7BDocCqUvjVR3D8ekhGfeD2kgY6wwXacvUmux",
  "key4": "3S1aZExzu148QLnhtCLpWqGiBko4YCpJ4xrVkmXuBiatPwsTZvKEHiaBRAnCES1ENZgNffsbRAxEYAkyuVkwxUdB",
  "key5": "2gvYHkmfetvfUv7ZU7M1pfz5pmFo7p4Egknt53akmFm27x8tRW91nGjHRvjvYxL6CLnc9n3uds9JkpDZzaG3yF8c",
  "key6": "4jjpFweTbQusL4fSi9AjZrcSRdqf8XkkdAi1T7b746cgwrGHZVUmFfe5wEqNm779gvtDzkHBJCyuxw5nEBpvFmqb",
  "key7": "5LqTf6PGbS1qAiDrBuWfsZxuLskRxpY9xuQAF3pG1Q1Mif9jwVeK9xsNoxjtBF27219Rw3t4ZoQDkoQWnMyHhp5V",
  "key8": "3QH9P9cHH6BwGhzunQsxUyypewCX4QU9DpjtGYWqAeGyaVZztG6q6GgHYaBPqp3qhdWaSwT9iXhmjPC1Qo5B2dHA",
  "key9": "4Bso7m1dxGYsEpmPMFQhaiDShuc6Sr5kFNvrk67YZSRSMWbi4DmcutPAXDf5mGZ2324hJCEVjdABJhRR9HbTu2J7",
  "key10": "7FSDda2Hu6eFccxRZufT9hJaJGfabojFUocyTcyuaqduWEwHxjdPBo3rmVQHXViefBoKa7jptMhzetCccNNvGWB",
  "key11": "5Z2As4i2M35wWCJhs5un7q3FSLz6zGUTzGXhE5Gj9Pwfw8WCcGiqHcGfZ9Mh8PsPkcCwkb83PC4fMW1k31QPUkaj",
  "key12": "5imMR3EiFgMAgxXjJUy6wwF9DNhmwVSCssavwXGQWcN74pzxCWREkaveeueWgxDXhV5fgmetzU96KhJwwzmcmu6U",
  "key13": "58BPcAyXmQaKgYE2jvCFvhrEHhGtnWMdNvKt8yKEPDhdDS3TTY4o9SDNg9kAvhHPxeVe5UWYgUvbPN5Ha9yZRqcq",
  "key14": "5QTs5Q9yE6zjjX9pQC5dT4pESZGkB1QdxwenvfgGxaQdbnUDq5RBsUsDSyGxDXbfNnguxA39BuSgy1mgP8SqZ7pZ",
  "key15": "5iJeUjPhdPsY5dL83zoyQW85RBhnXNZPHn8e6YifYpiaD3bk3esbVfPYov4hyRnEVLuGoKysJomm175EF2eoJb79",
  "key16": "o4KpWvWkXh9HA1wBrKEd4NWDu9xRCDQvCHozmf9WrGfZAyZM8hqFSVeuf6MBXA6CWddSrhfRFGC4w5LN4qMu7wf",
  "key17": "4gtisE5C8R5ti3ksEu9zCoqd1TeDBnTbtZAqFzBDBLe9vwVLL89fvVB7uL6mVF4YmLNvqsm2Xfa53eoLzYDdDGT5",
  "key18": "2wpzxevmk584nN8BMNNqHak1VBSvTU5H8sLcx8qcaGcdY1QaaSHUBu5ZwsSyFa4HKaRr2NakfDPPJcJpVUKQuuDK",
  "key19": "fmyjMpLQtkHHc3b9Hyrp6atWdKq3yqMKYW3D9RYjgYw6fiW3DPBx3Pi9CMDnce2GKLK16rTsv1j3MrKwtiWpMko",
  "key20": "3kzFXXvqVggPZwgDXEKKfNCaCHt6diJqtjryVqyehc2v9vX5YMZ8buCbGDJB7rDYYghauzCQV28c5y9vmWXYXWXX",
  "key21": "2tdKTdRkTzmNbPd43CmTRDbEqjMKSPHDGiYzxMybjLPRB7AcaVx6q2YkFmqyxAVTYiEnSAsikY3kgLDRC27KYyej",
  "key22": "3bA47PiBdHx8TDE5y62e4rVru3B2M9ig4ysKnxt25md3hm36JEumUcfMhGQhQNur3n2b9JZZAXfb2x87jbJrBuu6",
  "key23": "2GWshjzYWh3Ryqf5oiM7yvvrQMp7Ct3MA8j73yoiQQoZ9UgP45FbkAhBByzaC9LCGC8pQqU2ufrnaAJjzHk3hFnp",
  "key24": "2cqvP9JSusmiySStfpbxWcgtnJZdDiBsJqPqntrYQGQUa2bquz7ZsYgYp1SKfHWbkdpTFERVttuYYR7vo6R7sCJp",
  "key25": "349kS4QYnLWCESAjpdUiF8tsLiTCh4jQVkvC1njAwtNyF5dC7syQfefj26NiRHGrbihUWwggeFxLDkhfbGBXW1pc",
  "key26": "5ryzcqRuaS52DwwZpaCmfTqYWXEZXmdPdAKaebmNzLFuYvjxnn24zd9mv8z7xHCgiARPLFtsStcJzN4HMRvGtu3j",
  "key27": "46XvQRLJsYXP7CVdP7yJSfHhbp1Ls74DDLbuNH8NAFQBeTu8iSpAhGp7pzgPAwkqSrzy6aLUfKqm1VLYEvoFgagu",
  "key28": "4HG8TscU52tjMEz5wmzism9gRAscXHpUApxWDjjJaGZ5UHPo7KgoC7B5pVxxySfkjrwXdouHq9c3ks1Y1z4wZqQ3",
  "key29": "bnNtJpkYoYFqczFVYDgdMyFwMSj8VBy3bDAD3FFFYGV3h7v9Jzsas6daNVtSANLbXH2y5Hx8CM9JhoXzM893h3T"
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
