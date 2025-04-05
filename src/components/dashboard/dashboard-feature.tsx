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
    "4DDErT36Ub553ciPtiNxcxKpHwBYdMmeh4nGEqT333C4xY9PRm7inEXD1aXQprLYEs7U5eePF5RCsUQarj7qnWYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHUKXG1ZbuFe7Si3Y9WZCfHn5pMSzPAjCKBUn8mQVkJYjheQR7ZGGbBCNVC6fhBpgAvqophsyXsSDdyZTh2nP2u",
  "key1": "4btB7U3ztg8AS1jouAooZLfXWCCxeDYUfAappGwTDH3mRgApbqEXw7d6YdQGzFzUeadLSXw9xpaPJAS98oSNpJua",
  "key2": "63uTMMA2Ew6nzE3YPxtxRn7XgYzWVHJUsAXZdqfRYrYDe91r744beY72YREKvnAffgVvwRHcPwPqfSXFkvJD4MEp",
  "key3": "3UvMJWtyqoysXFPXTtCyT2EPtu2KQNjiZJ4ZXJAHtpjgs6nP6zAdgmYEokt7fgTkVvDg6A1mBiySqWycCuaHYqXV",
  "key4": "3QQgq3rzKxxiqvk3wMe6YXKKNbAdDu3utFp4eaQ8jrSXi2ZUQ1URF8V7FHf4bQfNE8LRGS4j1t9VTAcaLidNTAr3",
  "key5": "3FBLasuToWNYBiu9DHLnV5NuQSeAfcZWPJhSQJZwseF6RSVksyRwY1hZjcuEygpFB1DpSRJEh8WH3JYVRkxquypy",
  "key6": "3juEQ4YpDTDXQNuzPbtoV6671ULo8CwMzW2bdePoeguASQi6pMkoQdFCguvnHhsXZUXohHo5F6pYP7byhF2m5sjR",
  "key7": "3stW12G9KWnJa9WrjX2DH1MiCHEdH1C4JfnZADbCKmTUavATrfJsECC2wHvHoYzTXVKBTofhFKFQUZRP69FckK91",
  "key8": "2qB28m8TWkeMQjF7XCWfbwuV2P1bAi3hXRG6zFaEHCqNycXGTg9ZuVKSBwPxVvW3XPhEkbH6Kdz7gFStSE3Wunb9",
  "key9": "3BeYnovhmceHEpjjPCh6QAfhL6vmjPeQYGTJTeSbSLjhUrKxhpaT97qvqrusdyH4fYzNb5RCP8NmxSNSzh5gsA9i",
  "key10": "666PokpbC8RpHNdgP1pkqgWmwYrp1Fqm1d56pJw7w6UgPDVP1akdvKXbqGk7TQrSHkHHLwrjwwiPA7rqKGKJ9d6j",
  "key11": "5bn3LKMDcTojDy4qQrSvq4eAkqN1zN6LcCmwo8MvYTip1cEXKZFWg999mXYHPF8TXxjVQqKRMxMC81YaCspGBLa8",
  "key12": "RNu7jbWLwC6oYCQkz2LshM6b3G2d2J9cVn13hPjAvoiwRLSdMCzKHGE3ZBECqo9km9sfC9n1CPuBnNBoQ2dXCPA",
  "key13": "3iNQkJ3qyzJoULortwwrCBNwhAse54ApYDqy9XCViJey9NA2XsUwGopiJqhvZwk5ucKhuBpznPwfpcqYBbHWRgTk",
  "key14": "4DcMXWCAmRkk1o4jcnLP5ZQA27R9HhKcJwNbXAQ5oqoeSR3GjQXqo8F8bjFJEWx2nP7uXsMBms2mj1Mg6aKM7JNA",
  "key15": "4J17cdL25zSQ7qAVnA8Us9Eoj3egg966kf8RQKwkygLYvXkq1hWWJ2reeaqAiHECjFGqiw9MXqW55VMGR4Jp7wYC",
  "key16": "5cUxwFprriW94SdpdqEvZN6gjUa1KoazoMDJYJv15UetfzjgasahRWeMRM5hv1asm9sg6jM4gbsMv4ajVoX6vY92",
  "key17": "BLLSKrMoRKen3bESGFCBLfAYewDcGkgRzKBG9AWvwT4tyYFQaDqBvhxEKXGp17ActmFZyiLxBwXgwBvkannvLvc",
  "key18": "49JqxRnKH6WjD6PB4ryWZtZL3azjaFNzTUK9D8GvgoM5mvv6rmz3hGz99QD1DT5uxoKkn4ssgaCG2eBAxnRfVNoi",
  "key19": "4ubZabcw9gPXWcARiQLNV76nQ2zxY4kgbAYyEG5ajTCw6oRxDMn5Yk18uj6p2jRqTvCh26CXUyFCjjTAsXE1rDze",
  "key20": "22SHWRu6EXxL1bNYe85H7zauE2CFxQ7x53TdBSbDfRWM1pSV1mENPYn4Yojo4VnG2jwYYy9TK4U2bqZ4fLmCdAHx",
  "key21": "UGkWyt3MAWXavN5kk81HgN5mnov5XpWCC5ZJgaAnyp9rDpY8AWSzFUBv7MpyHtSwzf9JU5k4y6Rw4dCu3NMNM21",
  "key22": "2YSbBvBQ4yuJxsWaDZjEHE1VZFGxYnyiMWJ6pjsohqrToTUxXzxF6fPWZakziiEXaZDMwKkEvs633izGX9i8GPun",
  "key23": "XNEJsy11P9fC7TA9ZCubMbaNe29TymV7UvEV2HffaxiZiYVyaUpgabr9qRCrYfJFYVBHT1pY4fusQgXJSFGJvVa",
  "key24": "5frhHvqvaxJjq4YGg9QmAJfPUzCitjJYSYTxCweX8oVu3jZkFfJNrzgHoErE7PQAFbQNRDjYLNDFn9EKaRqaSMDA",
  "key25": "4C7gESKGDq4wGk2occ6DB6ZpECaQAuHS5rYVUaKYSnHFNWC7Nc8D91TRoWubKKwdyDa59kuhBREAJhMBDP1pTm4H",
  "key26": "66sRmCgUTCu1xWb28qmr1QrQXJBBPxNmNhqt2i6mraZyW7rBSZJMcc9UugX8mosqZyDzuyL6Su9Y1RFxhMRBBo6b",
  "key27": "3c5FsN9qxrxoiV6YPFRGPkvmcBQV7Q6WuqGg3UNqXa7H7nK3pTaFHmKaPnSQbVrGnE8w7QMKED4v2Wv4MVbT6HYs",
  "key28": "2HRKf92q4j15iJyJEGGtvp533gynzaWc6qXjdWR5R46iC2Lynko8d3FaJtrEEyFh5dm49KbGaAb1vo4g2PiXLyUY",
  "key29": "4WurrfTgVkzoh8kXky2ENHAnTx32z4s7fMEP1gC2Csh4MC5o8XTTt2EKLX1aZTtMxb39gbq95d2BRqEfaJ5YEse9",
  "key30": "5Tej3TwcJ5Fr5XvHDuBfhU6ByMCbARQTd77WhXvHub1P6fZXPCx7vV6ewEmTwpxWm6U45UK9X8DCiEHMGkg9b34Z"
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
