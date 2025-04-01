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
    "2R3skbEqPEwvjcu7xYxJmi8pB1qpvRsGet3qpco6cgsFS6DweCB3vXKFu3Zz3iEn6n4F2tZQMddGxQoYmXhv3Lk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cAZBCHedH7dDG4yJ1TMKAjFsLMy3tEuGC8QXXzYT1qpT5XAKssJoUoXpjeQf71hKdGa19yaZiwdHtdpZzPFfpcq",
  "key1": "5B9E88CZENUVUF1BiUpfCeWcNcr8QxpNau86x4VcEbmnw7t7mAWDNmABvLoVmFHVBK1C5AGfMsJMc6CmfiuSBvBc",
  "key2": "5hr1jomKRjXEwiJ1PtsgbTcTeeLmZKN2vS9JM1QXxjMStoxHwpRpvqphjTbBBku1HUGW3mdgriNfsQMYteWXspaq",
  "key3": "2t5mYcqcS9rBH6tfrDFEPnY4HLL7BqXBkwWPiVRCc7Bc8oSZPN38m6zBxFprmzXTzjJiiczTXi77ZxcGyQfeP23",
  "key4": "35Dj8d53r563rxbmMjSLcpLo62oN2VH92hDn3ex9oZ2i6pxPmSeS6JxWC8smgytRATtHG2FwTJYEBSgXSJSHqVsS",
  "key5": "3vXVAdv6sXNNyq9zEVcGwPWy9XiqAPGMfB7Hus4Zx7zD8ckSC8wNEWCLUn2265UervHjEMBxMR9QwDookyTswQvz",
  "key6": "2Pib16DRWbDNLjMUmeTDHyMD2oCfy2KaE4fKTPzpyWTJV48oZn7AVWQwVzYxWiMbB3gsCoY8dGMjbrdM4MpQKqKA",
  "key7": "2FLouqY6p5mg7WXBkWLuNrDxDNUvGt14jyBLeYiy6oiVYjB6RUxwbhEGCQ5owYUWtfBGVc1ukV6awki6feCSRtvq",
  "key8": "BiwMbBXBWZnzjLi4RN4kx7vT7d5YJsv3bdXPm9kG15WBbEbCosPwN6TM9Qru5V5xutHPLrvrBbReA14Ve9nc6Q9",
  "key9": "3HPzzGfNeNBNofrYQBeCbFgbNxBWz53KGkarArEgCYzKxejxtvosEmbUXtpJ9xQkVXN9WZv7FaKxv6bx1wsqrxwj",
  "key10": "5ygpikMqVwUzvhKzWPALd5gNRaGZbEEWdfDnrQDwJpSgkfB6rmRgiHvT4uvtTuysDqPdisY5cMvKnbQ1vt3abVw2",
  "key11": "2295c9Gfua9S7ZvnFutHxkXvhuF7z3yVDe1quBveunMMjzYb5Bf3pCB4Et2ea22MCoaJFDQenQv6TK6t97erAdKH",
  "key12": "4y5zRH2phddupsxUM2w3vesDx3oDb4oEEVa4Th94FR3XaZkymRFBuA5ePsr1ebdugCLfsNjpc7nMRLfxgn5sVi7s",
  "key13": "54nQd2Vt7eh7jbpDvMfeEFqHRvPY55eN8XxofDAfzTHzuCURECpZaxt91adVuhCSbpiYgP6rf5VvcJbKvPcvQMbu",
  "key14": "4ZfYVEf17JchKYLDJaRfMaUKkn1br6RsEriPibLEwfQGfQaZBPLUoK5wkqf5cWg1fvhE1eSiE72A5ovXCQa1y2Zm",
  "key15": "DrXNzEM1DPLekow2bo8ncaAk5xAkzaNkyDtEwAGb45ktg5LENBvCk1Sd8yujQktbuY4TPcxbXqUrHxvzjm2pyYF",
  "key16": "2yGZNvbzXZ3uUkAro9rW7E9CJ9brMLEJaUWYFdkAXV9sRsZ8L6J9y1rNZhNAhg7S5MdjVAH75b4rEZHVdgwn7pVf",
  "key17": "4fa4BQ61Kd5cef5Hj5db45PLfkC7bsgx7LkuN3a18mqESZgC4MD2M48E1Jg77dQQ6MHvFPM72TRnTvS6upCqFRyN",
  "key18": "4hfdDjGGBPFqmTL2J7SSeyrJQG9jeMkdCHP3sCQd8MvitF8kZu7gHrhXYBPkCmTzg4RHnLjpxtZbdWeSg2SNu7TB",
  "key19": "3LQgnoJuLwWvi2kJE365QcqWNFgGP4VR2zPT78WmsX1GrSH8P2Ng5zYotufVSgrEQBRNNyXZDwam5Qh6s5Nm78qG",
  "key20": "4mgXrpU3Ars8HEp2E9gvmNbjkebNpdDbsJFRB1NeyXdn25kxpgtU7Mi5YbLiUD5TZvfTjDJqDzSq2yFwm6Q1rn3Q",
  "key21": "3uNYku6shmrmQ67dgx8YCLZLvQftiDejSxp57upgK37iW4k3hgwERLcewVX5zw9QaUuxXrZr3khXKZ62jWd3To9P",
  "key22": "2c5NVe96XMt3cJASnjR7KCyNRXYM4AFhMgkprvN7WbqvJyKU1a2Y4ApVMmcPJNNrxErTND4U9e5ABWjRTzksRsJr",
  "key23": "UdKLuEFi8RjGhD7yNfiEHPiCRCg9biiKer3FP5cePJgEnKxfxCyN9HDokP1WcwDKb5WThtGhCQ5F8KaVH15hpYN",
  "key24": "Z2hvsrhsy3w8PLbEJQ4b7be2j15XqfXPhRnyPS5UsASbQFQ2BS5MaQhA1j9q5u44BjJri9vaFyp1BE4umBwksyd",
  "key25": "3dvN57VEyxU2Nw4oQw7kxSCubdT54mueYub3fiSHf1oXLovnh8vGdrqSeE8vYGtoDzQHihxVTd9RAuKczCtWzfuy"
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
