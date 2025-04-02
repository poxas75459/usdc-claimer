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
    "dPTWtuacRpU5XEP7KeDDW4ajcoY81MVxgYLh2NYj3puZQL5vz4bbbaGkGCiZ3TNafSXdt7yRtNcPfJe8Dywuh9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rt4i26MVgNXYGC4xjxESksvtGHHkBJy2YQSYuRnBhNVWGdnRxVEoSqVWakKnnizdSJu1QFPm8k3jzJtJZwMLgot",
  "key1": "4b9J3hrrQuAt82VXJjyvHej7UHaJbKCMYqMMhwJNbwrkgfostTncTBqNrkcjqheCdTSSW4LwDHB89fcoXZAKw5Ha",
  "key2": "3n214CHteWzXskxcGpNnWAHPjXehWDMcupCfUGcHrWEjycFTXbd7tCtkCbq7q6UDMotmEUbareC2WRJ91PbTWutn",
  "key3": "5RonGBi52RL3pHFMiKyrJCvKEUaR1vxzijCcC96Ce1UCaXFPJ2BSrkWw8j4x77oHdRFXYfHwqSSmvESu4W8NDBQa",
  "key4": "g3C7z64RDFcQmDYBBiwr2wTht4xsheEJsEn8m64NCaCwY3B7C1avP7Akpxz6E4YMBeXCkTpdT13VjQj7uCC5W6x",
  "key5": "5HCJCY9DHrTKH2z6S5stYcXbmFHrdGq5UovUttxb7izZo5vtu98dobrJLct5bbnj9GiAoUhim1prjAw9htzu66ne",
  "key6": "2WXvycJXJJdWgZ2nRboUD8hnvxwfgzx2GTBrc7Frr9Vemk6HphzKngWakuGPjf4eyrYo6RyCHNJS1VV4ipWwruH3",
  "key7": "4VvjxwEoAiYDJWNotSQ4q8TSoBinAzrsfcjH9iXrYLG3aJikxWMqgs4fbD3M6EGnM1fwVUAABAGRi5zY87aKRH3j",
  "key8": "fA8z4jnhEEsUnEsQa6qbq9bXMVQZjaf4y4a314LeUXWq8m7mmtUDn5Zd7rdr5D2WXqbt84YcWZ3Ysa6k9CtKC1C",
  "key9": "2LWCWMtjiZesqef6Rh5U6nmVqZFyKVjf62JUEcVUxCwAQ2TixyhbkRF6kLQNbyzs5Go7wA2yJaQja3td4Ek4xNvp",
  "key10": "5o8bJQZUiat9hHxnrD8Mr7pbg47WJpDmU7fntALy79dgAZFjcKBTQgHwvwT5Px3mPaHZCptE688rhXiGB63dAQ9u",
  "key11": "2maqakL74aHcFGgc9E7mvWV3SyreFgb7p59XKxUSQWTVhodVaZpsWkyEn6ramvBjs5gwyV2gZudbWwLAaQ2vXqmd",
  "key12": "2t42tmPVfXSy51nF1ajb2uGLMRBpJwuFwJ7TJkW8cCdgeMYdBbea72u1MHkvgsjEANn4P86Y9Utrv3yc9aMpYuqU",
  "key13": "3cpducsYe6bYP2VTioJAHck7osTMntbGJ6TSBnHsbYMRS15wXRNLQKKqoh9RqnsPnqGqRdnWTQPK6e7379QE831q",
  "key14": "6756LyYRuQFpaaaeSqRmWro9TXmFzYCXQzcs78rZSX4gS3VS9hg6iqBRJFRanTiSs9qvxGcBgio2k19kV3aeP5AK",
  "key15": "3o4aopra3AuJGyEu9FqddteQehc3WJG7KiYzyqt6KaTzRg2vfsyPcm4Kb4er9qcfFibHWGNiBVafZzTEPc7Do7ZA",
  "key16": "3QxcZ7GyjMQVWdUs42XDqq12DULagjrJYGBKixLs5FbXzs4aJUiB7Vv3ZCxxS1twvw1X1Nfq6n5xGVhUbzYK2Bn9",
  "key17": "jee3vy3MjTiN7KnuxqhKhpdLKCS3aCdqo3iQWwTiMsHR9ZnnNeXD9cUAACJXrvDhzv4HeiejTaaFqzUFzfKQMy6",
  "key18": "63EMXW3myFWwxPAsgpX77cDtAmM7S4UjtTb8TJv3zGdUTV6oVEh4gaTaeQhtdww3BCZwbTBat73P2tUaWJRHBvF2",
  "key19": "2Ayxq2BLsgyfgiv5JoTpq9p9jgoMXgpDoy8DY5bK2DWzhF4xmiXeiXwtPpz771HFuLu57C5zQbkR6DKEKhU9LCJq",
  "key20": "qK6xEwEsnMtUyYawP4zXnv3NkZJ274PtysAKUajtK5N5S6cmKTcvHLVXRKvT7SZXByV9punNKyVYfeR6eRFkAGC",
  "key21": "4comgYcte2xt6J5hYK1hwac1RXRp2DGkNaT14wGkJDtQqfPUrcV9ZFLb9rnN9nVD3d9EUqAshwLrSs2YmKB14UEF",
  "key22": "e8iHYQdqByZGUjSBeMo9HpBSeKDyhCmoLcQ47W4dFyD3RYnYpVRsf1TZJvZHsfiqc1yYJkDcR9fmD4hhKfWXoTj",
  "key23": "4rc9CMBiaT8T3pNQoLhHmZS3ri9jKfpBuVXHYqS1S16orkBxCaG9iYzvwa2jjYrPM3cVLgnkRNBqPDjqsKo5m3B6",
  "key24": "7jo6MfHpYdFUtNe6TcsQxFJbWDTKmesXWGFaQPkDmVzxzNQNGTS4TACb3H9VvdzfWp7peSG9yTYSkrgedF2RdVD",
  "key25": "6A4Bgj8yrB2EEAdHmydUQwbsmRKcWDgDNSPxqpyD8HgxUwt8zJ3uxPNfmUXwG9sPcWoawEdTuZyoP6cXV824Di6",
  "key26": "33aMqXEktW5dnVtMdFTuwMLcYPYttk7FEE5RaN9KysnoFFYJq6rRcm45rpFSee1zCjAwU7zm9C7WrxLtfqYYS4Ag",
  "key27": "4R9gPC6HjNWW7cG74dbthHmB1uDUvnerMmNybi9baJK9mqwhbn4wA7YYrySJ3kavnF7hp2DWnNVncwdZHAPonL89",
  "key28": "4RfrjdmV3Nc261QGRGGaHnLAgMNroCFCE97RvqTW2eVoNGCM6RqDVHv4Y7xrMQdHqQLyRVsbXTyRZP1s6XjPUiAn",
  "key29": "5kvzbD6Bp7z1DnFEHwNZMn4pdQRhcYbh7iWHCznUJPWaDTLQ8kjWaC2sbc6oRKEmFiZjncV7wCXsePTRzTZZ5H8W"
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
