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
    "gWRhZjjKMueasPYxNpb2nRuPuC2Twn39N79taZn5b4GNR2myYArDjNcpTUPJk88t5oTkUzyi7wAiQycVYoFfHLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C6jf33wDc3fSEG2G6JMUqdfCzQp251JuQhGmcrmSME3KPi8GBBwSNLgYqgGmECz8sgtLKzgHU7gxKoV2YnookM1",
  "key1": "64Xo3gZnE8xVmDBJjcTjjRP2ECFpeMiw8EbBT8pfYJ32FDuPBrkjFJeBSg3ZGEUhXiGFRtkffYS7W5WYoMtiojBc",
  "key2": "Db9DsiDSsVdzo4DF7NkDz2bQHjfsM9bsUqynkQFPUkoQPWsvvBXVUYQcZiHKL6rZUCKoNFxnFgMZwDZvaz5ZVt2",
  "key3": "32fJvpyNB9FwQJW1xSPCS35aNHTwpBWeQVXQ4KtKRwpT3QSuHrjMRvk6kqjfiPhtfmUScxbzusfDqDU1oyjG4EPX",
  "key4": "2hHu248jBfJgBE9UCJBYNvnkhci3kLfUDKKkcWGd9Sm3sGw6jSUt2HFhLTqAzKaPFyUja6LZGNmFqpZ1f6bX5umx",
  "key5": "39oqYoDAKidZpWuB37LGqRCeshX1gHkaSes2am2xKNjpyAJW7yHhhcErS8AEm4fPLezAJ2LK6zVUurHWx1a1t1Ct",
  "key6": "24aaJLyThTmU8ePdk1hF64kzu71UkjtJxNyoHc7Uex5NZZSqgm6BpUEofnYrfn7x1e37JLFLCsEmFBz769pXE4mX",
  "key7": "56wmPGM8LhN28AGf63RP9sj2qnmNjcYFJRRzwNfjT3j15FqFMQb76hRHhF81DNaygsSC1VeaDvDVkXZTfCsr55Ni",
  "key8": "2upid62oaxWYqo7qWNGSi9LFJ2TcZhjS1yxSSbfNVvTf4Cu44gfaP5XTm8HUugSNVAYd21BKxJY89j8LsMoHQi2Z",
  "key9": "2himn1kemWBgU1pkLW1KzRg3HKdu1qo5nWZf2ZgY4vecruYr1EFzUz9fZjvbtLCSrh6FBRrV59tUQzPVL2E39nAg",
  "key10": "2Dkm6KtGUYGo4pVT8EUPakiufmudmVqFM4VF4erK2u1haDfPAit4wqbdeu49fYuDR7ZhmRzCBnCXQtf5c8de3pNQ",
  "key11": "2v1qrr8uW6w1hg5yGXwvhZX1Dqx7QGn5vQWuFJA8wHdq7tUibJ4xuWzyVMiHRkixA95qDHGgaTMYSsGAaFqUXMRb",
  "key12": "4emh83A6F4LUz3hATkKjtHKBVY6QikkXqRxdtgYWUxmJbVWGFHRvQStRPWkUnHUGNPqLQ61j9GLPWihyyrYcs9qp",
  "key13": "3dsprUhEGwP2qeGVcfHHwqA1RBqcYgaJLmEKmws8FsVQ7q8bUfzpqPx14MdtGsRdrrtdfARjnVrGo62NsNEa1c1u",
  "key14": "64mRxLXZN7PYXbmzquS9QtWC3cmzSjKBFBNWPoFyDUwYsJw4jRXToA2UEZE7xrH4SgCUr79Mx5GoDaYCE6mCMNun",
  "key15": "5xDUkCvKGdcJZKB7mes1t4ZBcA5oHEsuhVwuGEoyB5kfdn65ARbDNUdWt4jaymKjZSmD99KnQUXqWjhzQYAQuUiF",
  "key16": "3TCCZ2x9azGo2SygAQP4F3GuLQxvPjpBWx6PmMJ4rnNkcZS1BmBdiKR2SXShTigJQZXYXUMXou1LB5VLrSk6DZ6e",
  "key17": "4a1XWWxULwSfCNHJfwtezpc4zLCcDkoWq6jvM7gR236eL5rzmesC8gJ7Sgqcatm4VDdDtBv6qzvkG1RkuFNotSuH",
  "key18": "sd73LnTvKg5RLJdPKRcgYwwvQi9h8DR5w1mzMLhgeFnZfDyq3ZFTxnFJF3W5nuoAnbYBjgkSnL4Dj4CBgShhZBn",
  "key19": "2oBciJi5bjWV6NqtujWF9qFXG9YAXoCmBkYwf5J5RLP9pBo8uwGUwP8Te2DbJroAvKvecTtSrKDpKdofP7AHVFc5",
  "key20": "4wD2ZrStb1ssEB2qvVCDVeGFazh6hqukVfqqEFB5jqWpLwppsD3EzQih1WucHubitiMaTBPed9YrsRJYmseysKTt",
  "key21": "3oEXZKAeAeXuRLnja3L77vFTQGVUM63WUfkmuJqj4B6hrmLXx5XUx4HsXmfYf3fHmc6W5Y8r7KLDVq4voo6caChR",
  "key22": "2jUbrrX8YnMS2xCiMt5ZPFgCgqqbEr5zW96zYxVCXUaweX8djojjgwraFaSg2X8w5JPXbxmJjmLueHTykqL3aPGb",
  "key23": "2QMB8gXz6hsgy8tURmKvZdv8Pd9Mx9oW5mA4ACeAyozShYrxf3S8oUpPjfLRs2qr14EMH52vtMQa5HLNx4wEoSQk",
  "key24": "3xhqoDSsy4SGdHeEibv4USm61BmzDoR8wHZeTk7oGuHH53pxVsYPX2EDomtDz9aDiFt6YVCrL2ttdLZ3vKsbhMzm",
  "key25": "45r1QoBRQdmaMgH3tQNLgt5UttPncH9oHBwgqTXBnMr1hy47GzEuV6jWHrPWpC8rfW5sqpY8uwvJRcpJ38jigzdX",
  "key26": "5o8FPzffUSoqS8o4ghz4d1aN1gMcdhMjuNcs8uP6FMmV16yFtCCCmqGznmfPQziiMjnBswCDbcBXucM3uJCwxUqC",
  "key27": "4j3QcpG2W6a9q78dG3S9X75c51zuxy5US9eLJVuauHHVNMVrV6dUZeqCaS4ZspRTGtvU6Apze39QehZDnSWXE8UG",
  "key28": "ZfU7kqxoaUKvnCPWWsBAfiRpAeLKtzpEZF7MNNTo7WXf7M43TTfVwL2L6ZW6ouwYUszwEZqHeAExRn2xg4mWWVk",
  "key29": "5izd3Nq1FzP31V7TJLuDkUpFYCnJrmEJCWaKQV3YouMnEGr85vi5xjCGzJYHPWvFYjbJdf5uypaNNWzy73mcBJcw",
  "key30": "4d45SQ25qzgUEKFFo1znpE7d5CqirbabDshox9CzXMhDsZVrnKCnGwj4Wv4g6vdTXkT8izRFBm9jZe14gU3h3qjg"
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
