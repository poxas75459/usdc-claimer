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
    "36J16LJyhYeVPgHRNyCPWNif5nXm9dHa7W3Lu4tWyQxigAyKhYHnhRKx44XSfnV551pSXJuieLgFMKqs5N3Hrjmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMrFTrGVrkPVazUbB2QFb8CcdeSQwKTd6YPuWkdkie9bk6D6V5gfJgQbkNb2Gn3YBKWBjWQj45W5ZF3nBkNP2Zw",
  "key1": "6667sEe2cgY3anEt1wuFFk4SLQAkoj6BZXxEJpftnsJNMLdrRwm35vYhNE345uqJ9ujRBbAixTGy9DbCPdBzdEJV",
  "key2": "4uoqe66SbakM4nA5BroBAqRLfs2fCSuz2vH4pgv2Nsgcet2SFqnUYDkKbiWt4u8Kjbo5SnjrWxksUPqmEsPo1D7v",
  "key3": "4BPeHJLBGNneCdoJvypc5QgXVk3FPwMH9GqDoqp9qwH5QvQZQuwgx2hioEcHfQyJh8DS3yWziKAABCzrhN1wuc5v",
  "key4": "5UYhow7FVtuBaqoTb4SkbeJrcQvzdxsNoQfm1nxTX4LvcRbfPLbJrtMUiHo9HSWQa8izCbDCJAbn2DHpdPpjdJ2C",
  "key5": "p8KjACXqcoQYr4t4XonvtBiDwB8oTyKADtkvXcvqq3fv6dtm7xkap6Yn5xHqchtgexSNoF7xPHZoR9TwvxN7jUF",
  "key6": "2vqT6cRRHeFkL1k5xNqjbRNzjsR8DfpyTaQg9o6WVr9dQCs6VAx7bLwkfwFwfWT5H6vnZDXdudv3W867ejdRzej7",
  "key7": "4iRPRFGeuAo9aLb1v6JYDz2WGDhD1yaA8mzvMJVaf3aYBtsMRqQJnkf98ou43FjGKHzFWEexE1iVF74A9xJvF7uy",
  "key8": "2iGrWY7BujRuyNfFta2Ta7LnFDKzvcpwc5KMRuS4U34ps8sCfqYMhSi4RndaonQ5ZWP1yWbzr8JnTxFvwEnAVSZ5",
  "key9": "5dVSWbAheKG82JmZKrBG5EBt87SgPhFECaxw1BZMMjCkQ8uoMNKxgaTkCQHrHAqptpVoLDJsFVupMPDFJ3izKBrx",
  "key10": "43mXbWQSiZdWTB1WpD2ikXC1jez8ABJncEwGx4BCPSsDMiJLpX5fuRb83Sjo6pJFCij3Re8hUxmeqUw1p1dXEpUA",
  "key11": "pugzf7Fi5tZVzvkwApxs5pwJmDpHmTz5rjpo1xQstgH6BgF731DWJGqjaXZRNoEjXjjuBcrjK7H9dkimS1z8FFv",
  "key12": "4qX4gNxFQ3H9AAANoti6yhLomdNTTsaNM4qztMxTbUv5YQJDpE9XhtYWnBt8ermPWwW2yMPjgxHnH33G2ME4g8RJ",
  "key13": "2KMCVv7E6WCsgGRLbAeEcoqHmY3Ptej9R4HqgZQoHg2AnknpJRvExQ1cJoGioT6L7Mcr6eXMyxSoZpW847XALzTU",
  "key14": "o2iNzxTtGrewB3vvYjR7nrYTRomL86CbhZEEQ3EJQyqcC2k9ppZBsjrQCvf9K94E4bzHbVWVNuFfgX5sSFeKR5s",
  "key15": "2e6WNDvCL9mvY4WJCcrcYbJb6aPMkbQWphndvC5xfVdqsGEE4hJkGves799uhJexRxpWmiWX7eujgHHE5GMWrX8Y",
  "key16": "3S7ZzZcr6aw1GymzPq7MCN53qBKXLA2QC4thhnqGyLdNSvER5RpLZigH8qnKAyGKy42B6L8CUZWWiPoPhZHvwY1q",
  "key17": "4ZU8xgFDkzadKCjMQfbW9iq8d1eA7MzGRWkXRQrtBhVRCUZvdwxf6APUCNsTNLhoce3N1cnYgFdr2GEdtUwMkSE8",
  "key18": "5Ayf4LwY9nSzXHd84pEzge9K3PMChx1qoQ6sTxEvuQyoscwrVJRCVvGWTu7c9hW5EJX25ebDQnkjZPF4uWu2oLkS",
  "key19": "4zhufZJouw2AhmFT1v9oNM9tXpoKb2tjbXyzhpvLDjw5minMwfF1vpeVJrtSp3Y3f9yCc4sUBES4htZLFXmsUmLh",
  "key20": "5jCHa2Ho6bmp4RrfADZmkoGduGfQkwtawr8CaEvsaDvNpcQbRPru4iZnBvkJzh5MbAv5ZTSpx4uXeR56rBXxUjqU",
  "key21": "pHEchAwCRpzPbjoToCdeYg3ZaQkK4gTnXK2fLzQsQ6jKUUzeNF3YjZ5jpaFh1332Sd3H8DhrFKFKpSKRswy4u2v",
  "key22": "4scXReNtNXMty6dY97SmZg8GouRrUFbKTqDqPTp9JgjsZGBcrRuXE7ECvH52JAuu1YBrgVuMs772d8rvBt11DRdL",
  "key23": "QoV7xh2TZLrhg422yqeYFTgvAmfCnimdpamH5ET5mQwcst5uQUw4C5hRA94J8ULbnsbZ2X3fiqxXa2VfavU7gJe",
  "key24": "2azm4TiB44zwC9rWZW7Tv4LfwwLqzC7zdepBrG3yAxTGUXZwUiuXsTof15eHUqSYv12HNEB7HpmbCPXbZgCrav1V",
  "key25": "2HrtCgXFfi3UEYbvKHtYjMhiQfqHEFeqTPeE8HX2wkG4yefwoNyPszBjBpEBFuofiQLW34azcWMC35VZwFAYZigJ",
  "key26": "m29osUrY7fXqg1jBxtX9EZgJLJoMLTkc6GsBnd8556gncKdCrmoNLbqHc1qPN7maRpL9FCrXgXMqzqowAtMbWdR",
  "key27": "3BsYaDyCLyhxJ9PWKXKdEj7tfjbBw94Zqpjz81utzJfsRewb1ZYUDVyk7PPZD2hpCHMmBipsQZ34ksQLYPucqLTi",
  "key28": "2qKAV4sSRzdq31uTeaW7UFEvmAuRYbwSJuW7p9T3w3fXaogeKLcEPkXteQCZXGPbdJwEtrFUpWRnuwdgCYpHekV",
  "key29": "23DtsBYhMMP9TSBhRH8m1MGSJx3zhft4hor2xtUcNj7Gyt9ub4iX9W5UYiPYqKMSKrLEtQV8eUVP6S7KBLzn7zju"
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
