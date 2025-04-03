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
    "5h17fWhvnvWo66QcHiMkGGS6qEVDzHtboaedTGEV4JMg5dWymfvsNXrc7vps5MsaidUdyCJ2TTZaWgenq8bMSK6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X45qZE7G1t89sTR9jrwaMsyLpcMYvtjJQz9wGZrzRNf8c5mTKtr9eMMHHtaakJim4t59WCB5dHpV2jSZQk9AYUH",
  "key1": "2sKGni74ACbH8LxRFjDXeXRHJNvLgWrd24KwmbbiBczXjWuyDn4wi2o9yvrMQVmHBH3FJkbWEszhagrj7LFfXEMy",
  "key2": "71eCfV48dhXxygcreUrrXqXWoSNMqPwDUiW7349F6Kcf3oY1cCpYXH2bxTzLo7YBDFFZbRaRXhUZzhfQGMViGZE",
  "key3": "gnHp5Txk8jnRVwF72YQH8pUNZ1WfdwEAUFFUQ2BqGsUJHBaZiEcpegbi2UfeLU118dBHjTGSGpJuh8aKDAkeCyu",
  "key4": "5DysD9if8rxPFdHWXsR3Z256kx62yTutVFHprotvzP4TN5jmPQ6rx1G5k1DHw9rZx6pTwY9yZuFyvTFQZFKnN6BP",
  "key5": "2FgmPsty7qHiVLmaCkZG3XPJs6U1cDhCtYTAPUszEJTWc8kXQ1qLH3wo7AzmpEUNamKXWiA7mee4HkM3EevKxsFN",
  "key6": "3qjUeeqqwyVxftEVDkaXvY26Z38X9tLVHTb1cScDQ7pzSFqo7zoDsUTCGYDzwLfkaE8FSd8hTL7MXsNinLYGTpiK",
  "key7": "aycpqQcr3KErmRUQLMhpKogbHSkifaDZ685cSjCMJAAbSz1VkX4qCpy2SF8kfou9ye8UUbgTHem8KkKebDmgiPn",
  "key8": "2C35gma5G1GGbbeeEbhdnYgxUuvXgoBUVanoLeAGGt5DLehA98zq8aL3xQs6xJ5Ti7b73Y56TyXVSCpLMtgB6shq",
  "key9": "3uXLty9Fs6ghw1wSUrBdaU6ndJm9tmZgK38kAhQMkx8Hazxcop1S85292uS9CBkWy2WZS1ReDaYHyAds46KngXfQ",
  "key10": "38dBcxp4CXwAwHtcCo6xuY7GRu6EcrMwN4sjkAoDcVWEGiKGuU5Kswjqnq9VZ1u6m6Wx9LVedavfCah5tnqAB9Mi",
  "key11": "3QDLBxHFLREyWyHiPzAXtquph2NYszRrnV6Rk5dU4PiXYNrx3ncs27DFCnChim95cej3RpkdAenNpkgmAZH3Higd",
  "key12": "5TxQA4Ufa6X9SCTz34yPMjiRuzHSjTyM59a9bKkeLCRZkyMAdf311S4z6RvHHbjGQ1vC7HCzbPQrDzFiQg7hDoqy",
  "key13": "39dw4KcX6tNxgA13LGMeUumtX2qBF81dT1u55sTsTdidLZmW38FDt81itcKDAnB4xYSYGFvH47GCrCQs3ycvWFDJ",
  "key14": "5t1JE4Z7o2ZpSubnpdSFtDhxCAjkUpZH9Wgfxof37NP71pX8xrNb6HrAo2wqnavkwsFYshH4vYYw5aGDS1g96tjW",
  "key15": "DCDXzdfkKDzWfVSbsXhgC4WHBy6XtTPJg7sj5zeDEjSMarNuHptGZmnkmi3Bzzo2Fy9zVKe9k6PmMn9qgYFBK2L",
  "key16": "4bihUN7qS9xngCWkcsmVjMB4diHQXUJePHJaQ84Fr8Mi4GzpcSJ2LbE5Y4DY1YQpQ8RW1KanNgiXVjXrShHtnAPm",
  "key17": "4GLTdTdW598hbvx2CTFZFUf9WjBzmxRNyJoaGHSbsiroLTg4LsNnBrf4EzKzmLxCwK9vuc8fy89KF1n6fWdyjcmu",
  "key18": "5hEYNReSYp3QH1Z4ohrnZAaiwLPrjqL8C1JpzEMhUcHTqJrrnHJQFE5VyFNGAY4YdXFEtyqvuHPk2DTJtJzFDqWv",
  "key19": "3ubXoKYSxvTGiicRKMh7xrBwpbGbR7wPAa2T67ZjgiaKwvLndgjXjxwVrYwmYgLnW5V3pi52RLBbbCNoKjGReCxw",
  "key20": "vBYZ6MpBgNpsgHYYKMtt9RZ4CXJmRjzJMSgofaNBPCFbv7ZbAbho2N6rrMap6iSmNheH7o3Bo8uEG99kXMZ1u1F",
  "key21": "5sQQWeHrafh3EJJTPNPAGzv4XdAY7Dizd61KmD6VHprof4RDYwi2YRig2mmjkyxkXvmUGfSWdscdADeG9uTz9Nd4",
  "key22": "YcpX77Ke3J9VjEziMG2DstyX57U8pHF7wiExCs2vsJZkeyF7iJXtp7mfw7sp3h94opkKDTYgXxbFyYqTSFaUZ8M",
  "key23": "4M6F3kXeoy5njgf9gGsZjNDQzmdKmmggPNrMsqMBCe3hiq9cFrGUQSfkvRARyj4Sb6BdT76g2DSDvgB1sbMgecDK",
  "key24": "2gMrQRY7qg7uXKUhwM5d5JDpo9FpseyyaRaRPnK2CzzyE4eckCHTmToHCGJDUakjTG7iQChA26XQP14Y3UtS9KvU"
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
