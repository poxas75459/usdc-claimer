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
    "4aX2NGfEQWekFYVaQ6FSVf9Fi69XZMg7vgPpdbPzMXTabw8gg6d5xYZaXyrdTxmrcpa6i8d34bGxXNkBRLq2XKVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HF7WfKNKZqi8d6pDkm5a7QdFhVSuv9wMCKjt25bWonkzfQCkNwoAoaY7EeGnKHtYHyhdAiXn55XbhCvHa4hm6xq",
  "key1": "3faqDT56t5GkAL15m6xJV99MSrCYSKVMca6QJfU6W9uHzwyfiPE2nyL6t7WxrY8kscPcsD8DfEENo6sHc8SZGnx",
  "key2": "56Ghg9NsyAGfQwteVzypjcWZzmhetPyMXyHN6MDtNxtrivDMZeiXUJLCWAJcXo9D46gtuSEVpKe65wJ46cdUnF8E",
  "key3": "cSswUmGFCzG5EdU39c9u2EwpxbSUL7D8tmhYuNRHkio2ko71unkLXcEKzDUSnF8aSbPRWDpHBk2d6bbWUctMi9F",
  "key4": "3jg7nGET2UdhdxEhjUPsNzyRuBKi8u4dUWd8YTu9i7HuennaBuNBwqGYa4ZCe4WpYYwrmQNBqcEptHz4qRFpg4Tf",
  "key5": "2R3Nhiay3kmyriEmmHAJyAFEhSHaB2a4jhXF2PSpJ8TXhNy6vPF1MLAvmZBjcEppEaf12ZKrza5uhNtQEUVPMsTB",
  "key6": "5mB2vud6ARGqNWmynXDUk9PwAn8jhufcrPntP7Up3bWEvm77YaQRGMDnw2kdz7VjcJriZ3rppLGMyUP9jnwMHMjz",
  "key7": "4p16pbtELj5VTqrj1ow1Uw1MZFw9NDa9Uya4EWQ8DUvdHahJfzMYXum8AjiPx3yjGu2J8SB3ntJ3sfnCLn2KdQeF",
  "key8": "64L3voYVDgAHccwJcbeqiQGYWCw2wLUAuobGL7RbW8YWkUrRpkQYygKTLMa4QvTBLFSYeG7pRq5YFWMvyY1waPZ3",
  "key9": "4eDW4tFf6Vj4XZeQktQHHT4qBwBiaAnY35CeRNH4hpMJoycg6Sj6i5W4NrJhZB336xdUJ42RJw6dbTDnhtPaYqkg",
  "key10": "2SnpfXXeUbemugFwcbWg2uaDWcmGQKdVDjhUkpVmdEAnz2Njy9NaY9T4G9x4Hy74g61jyMUqDdLbp4ASXUMEDBd9",
  "key11": "5JhKmb4sch9hbFxeaQWbrojg5M3Fd9PSBsVaemHhQnF3ecKwhCc7amRUWjkCUqwTUsY7cBj3DF55KTwopFhVmhPc",
  "key12": "228PqyeVVbMksK5jsaPQjKi9pEBMeVqpgbDoDyurGq7tbKTDdVuhNHTRwuX4EM4KBpyUt1tE3CZKLLseXbXJY8WM",
  "key13": "675LXRo6AWCx2zXt9fwFU16mPSwkiwy9PXGBWTehrA6ywWMLdGzpr6qRYrXqum7W9jjWHcXXgMEo2zvyZ875X4CJ",
  "key14": "4Wtrhs3Y5Rv15R8jQeWTVoXKN4YAkYCxfXFdSt7ypH8MpwCdp8cm6Vk6ZAPFyQMCzPXk98Xcxo75gkoCXHJaBtg8",
  "key15": "5ZBCkWhQWfmHQrQpFh2ra3zj2nqfHFztugibcSXZs1r6m1eH1xGw3RnA5rQfyzXzwF2Q6N8Z5MQNT12Jjhe7mMoD",
  "key16": "2RQiyfq2yndLGwZ6Ss9HSRBAJ3gmdqHcpE8XwLJirWFf8bN1ryfM5aUuGH5Mf34NGqkH8WRCmse9nLCP8kkwfEfc",
  "key17": "5T9b5xnLvy8kYCzYjTDRjpWBAZjNENbeczkrSYdGCJfeVQLN1jCUyxotSbhbZ5t9yZgvJ3x9fV8mH85xHYMaR19x",
  "key18": "3EsKJ4D5Gymojoiw7GPydMZCNNdCEB7MRHQK7qq2gMb6eSofjVuRm2d7p7wbBjyY7k6L5rEE2hMrScnNXzAwVDhD",
  "key19": "5JsB1N4485Wvwrko8Ei25exzqwFQswQptWwVjk8w8fX39Y1tRaAwj9zPKPJU98144znagV71LLmkkuqxtf6gLz95",
  "key20": "fQYQmCJQPRWUtwGwRf6rF76GqVZ3UNV1gSaTh7t3nz3Mfnujbh8RTr1sbGwe8f4gUG7mePduajCSidhAQdvwRuF",
  "key21": "3uikBuQEQE68mfz9hSpW4LL5Ut1STg3QuSQVoNxQr6kh8YbiWPAtmMSv4BQi6ju7Jq6rjW69abxtXvRwnQcKgTi7",
  "key22": "5P1y5PMttdK5iCXKZyy8Vb6W42jsDDqJLQUYdwofZV9uCKHb7rB2G5nHtMicyf5X8MzT5rdWjNTVh7e5B4k2H1bB",
  "key23": "HVf3Sxefboc7f8FAQ4zvfmxLvpFJQqsysA4XpLhmQoQVgneethaBD2deKj7AcZHcVmpmCHhJ7si7tpr3iWWQV6r",
  "key24": "qm4pzryn89BQNvXu3HCySvKNjZ4fvrnPQznCSALvmdWDJSytRu4gHprsVs8LEtjjowTx1xS3u2xbUkXzSJc7L8c",
  "key25": "4XRfweB9pi3iqNFbEqz2TrpeCbEv1En7s5fAHNfG7jQdS9xF23zw5CJ8kuXQkyTstG49a9J58AhdaST63GMLgFfk",
  "key26": "3zQKr4tUrzrqCJrdgvW3oSrNSvp9gNMWJzT2xVPK7pzT11gzXrw8FsMCP6MAgmYcL85q4jTwx9RimZiwZYHyN9tU",
  "key27": "3C8BAtuhwW9gM7sMYRgv773eeTrmKJrcvfZxA5Fs3ZvpY6T7R6eRGpUhVHcGZruEv5ruW8C8GEx45jZuxiem7b13",
  "key28": "FNReMomNULgZ56i2RsNc517jsafpeCYYe1mrtLhZX7iaw1bTLC8EaVyhVg21XBo8DRvL9StX3oNtHm5vKnviiTo",
  "key29": "2EYTYEnUBBz28L24jFyNDUeHBwzEQZkBrPe5F8KfToaxhfNuwwZbDoULvnfjxvvFNbb7xikjVPtG2m1N4Wma67qi",
  "key30": "2LyQaa1kK3DJxPvyHkZxW1cS5fMtgDsN6rm4uXLH6MFhucupXiVMSbSBHUTYePL9i5V5qqmy6eMz6XYkACu1LUdY",
  "key31": "3whoF47yCE62CDDyoQfCak9E3LjbSsGXQFdF45G2J443TRLViDAircp5hMenctjYzLwrsNLcFhk7yhhU2RSC1opY",
  "key32": "2qQgtF3nvddWmEbXZdQh3or5AvJnvsmMP5Rknbrns1HNmdh859o22YL52JaWsQBLoyRMzH4zFQbzFhixUqKU8foM"
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
