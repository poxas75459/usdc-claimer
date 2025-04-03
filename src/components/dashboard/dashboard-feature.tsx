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
    "4iwQ4RvtSw61yXAGUn1baj97Z2Fuf1kZVfKEzqsNyJXco4uhZ4AfxpePYaMekjpY5WJngFzXL1pEDrPK9sBdZf9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvqgthf1wjWtYwT34HYbKZpHbyYPokBtjUAmjFh2BJT93mdUxYS1XEGUYre8nPv7eydAchJCRQK9wnk6NWkgm42",
  "key1": "4CojcMZ1V8oh51tFPdRP5TyiL6HEGsXEgUaezGbEdjNTtWLUaeqgGpgm2vZAgQ43zX6HH5iHSAhMdRBZnK7Q2w7W",
  "key2": "3pYPiJGQ1Vc81gSVpe7936hVHMyoLW7bFfMUfDWebisGwhDQuHh5n4sd34bm2mJdDMRqkNjum7hwhZpuVuDe2aQT",
  "key3": "2VpFmrzaMnheN7XLAXeZffcXkSVx2WtxgHKShSKdaYe9R6w1tU5SETddMQCEcg3JdB78ULrNpM7BQgNPzRyGfAD2",
  "key4": "2mXawG3dmV2649s4YsxJtv8WkxJp9dNyX6hYTANXuRWyuePjFd5DG7j3opzuDf97hY4csmNvZFKffQA7cJNr8As2",
  "key5": "8XaPhBqMWw5ddo2Z9drwiqz1Sk3WJg4dmSUhqfzRMSceAMBjJfjQdfTwgKeoutw91GqQZXxuHJMutgdsxMyhwDU",
  "key6": "4DBuJTqrFCKEVvuMTbhPmY9ETi31j1R1LDU7icJtJHJbZWfUBDqMFUaQtcQu2rhrVSaDvXHdYj317bTNwWNNxm7S",
  "key7": "3RKzUCV8EbL87j4Mwjk4KaKCuXBxopwRW7BDAaDdTkceF7xQUSbLnZ1AZaPR3NjRPWCvyHWDRi8w96ENpHFi4wtH",
  "key8": "2Tkse8vmDN29MyQKrAmooW1T8JAbb43CRwB6BayqnW42HfDngeS2qFdH4RQnmnkB1go6GaHtrq8ByD6yCmZWup3r",
  "key9": "4NQ3tXCfXxvQztNVZckPLC6fUfNp7R3jqHjzQ9Sfx7yE1DVe8xEUhHkT5a9ZiJvTHGomeCu2VHMyQ7HTvG7ymHA3",
  "key10": "r5DLiVjVtSR57qjchhN9Krme56tFuhPukCUJTfA2gFevYtBpno6BAB8QNEQWf7c2NbA7jZsdhZyeCEv7fv9oUfF",
  "key11": "37dQ6imPXqVyAvmkgicD3XfsjiaHGDnb3adQNrA5Y8Pa5upb8o4z22cjTxkfJiR59YYY5X64kuwDCgQC7ASg5Z2i",
  "key12": "2ePCWQiefDCyoroVpMFdS5AiY76811TvoQ6LTtz8DZ9Po7hQTrkhhLW2UWKT8Mfc67aLhnyTDbHPFzVUEEnKrde9",
  "key13": "3QmoBtM31c5SWC8LHeDEgAGseT3VfSox12hDhGP7CeqoKC3rJ84AmMWJgrP3A83oK5KS72bG6SAfU5LEUshjJHP1",
  "key14": "2s5LAwLS7dba3yfLdCjkNFqVta9JhBrqVTP4GZe1oi5Z3jyBs6CUapJVH2TmpZDxLwJkY4MFJDWgEwSRzobJHCvT",
  "key15": "3ycz35FKa4ydWVzqWG9wdqqtCPHx5zZrqkooykpMWzptK3rUwF1H6frTo2JYiQrALAceyk3Mf8Dqawi3sHQfEvBV",
  "key16": "jxsBeJvnr1QbRqviav6pkBr7mboqv5V6HAqv57jLNWNyyhude9qnjGeBLMeyLcEWu3ZfohU27fweoA9VVAcCD83",
  "key17": "3A6PXrbpRk7hevzyX8V3AnvyPN74Hk2Cub6yMWGKKcpRKTF8oaLoLAg2hxhCNqvxZb9GhBaoSMFEXzKrFuJrM8oU",
  "key18": "3XrgUozq3ajrhfE4QHD22JCaeuqhKd5d4nXfZQq9vrG1n4AarPPaErPKa2pJrwVpXyY12RLMtS27btojAuXXTuQ4",
  "key19": "Z7jvLx8cb8ebPKwh1hKBF8EacYNg24FfHrjgyyj7FBxrdPnw7ypcvG1QsZ7zbwFZJMS7eqKquiVVHFUbbS36uu7",
  "key20": "2zKkZep9Jt6qw2HbDAR5xi8TTirSVr6yr4VU3P8rqPmQWrZHhryDAbQT3EfBGqLz1ERjgjXNh62jSCccSsPYgHtv",
  "key21": "2DjxfvX1xmhNgJLr6UYJAFFMB4ckmH9W6nFUiHJ9rTcghEYwShYnXtrkj4uyUcGgJtECeTzVhJfPpCzhLbaE3k7c",
  "key22": "3Xcx3YN1Vhh2Mj783zKg7z1X55jjtkEzUYRKzWUcFbGxQ4wBbfXeySDr8qJ4J3gzgtAegpB2rPwXaH3NZhQvm4Y5",
  "key23": "4iF25CYepYFNGTfp1jgS3oUz5nqeayqazEo2qEC5nwAULYTMBUid5JK7gV2qioCznj462bSMXcdH4NHFjeNaBJ6q",
  "key24": "5P7jqwotx5M3zTUgPbZEmhxk5kNDEhFkwvmvSpxSZGpWJ687zWHMoQjcwT6nfjMkhJc1n8LDmEB4mXAcMaikNara",
  "key25": "4UHupNUqWYamR9g5YMP4ZLUEvmpYDezZghY4oos1TNatBDfqiAwhY77ExNeUQ12CJqTfkAwHKEQfgmRRz6gYKhwt",
  "key26": "47kgavfCvSt2NLQbZpm9pqscWtzvatVSVWxpH1PV6QuScPrthsCjtNWZevMQ2oGmdaXfbmBTdLEfFYavRe1gPScb",
  "key27": "4eVYjJr2Me4NiQAR2v21d4PGd33zvKMcBwm17zfCzWi6KpAYjcPeLQ3qECqg5KKTTDrFuGFcyCFnUK9api4GKNDR",
  "key28": "47VeMbjbx45je7jG4XvJonF2bN4t25sJrEq1SBLdxAZZebrroEnMio64eLoQ6KWFWa2D7t2JA2k6UTCWDsofKRS6"
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
