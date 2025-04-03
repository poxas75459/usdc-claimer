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
    "KxhAxBxXKEFctqMaL7YXqc7Gyw91c1mC2xMutt2EQucH5btBbLD2vJcnwN2F4RLj4e9SJ3wtRDE2eqqeK8b8pZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ht1HjoWY4SGTNsPFz7JHLPZgxaNBJ5nnjmTFYJv1bXKf4m2k7ZBddp9ikVkjS2xxQChGHF5MBRZ9WXu2e7ejuDG",
  "key1": "4xPo3omQQwkGLEeb6YDT8HK7VUjZ3uXFXTdWS4kB8CP3rLaB1CYrni6CAUJNHNpT7LeWwcrF7u71jsBHbmG2uWbq",
  "key2": "4QJAsHyfzsYotTuRe12yGE3khKDUFbwJ7QnSVACEoCdjGdVf18BorwQte7CYKrTPFYHuHNKekWxrgjEyh4aTKWhS",
  "key3": "24tTSsLakGtcEuXGAFfwoGgqj7ySfWAdng3aswzWaBcAGdjc3nartgqjq1rYU8Khqq2pER521wuXPAkNQ51KcCWF",
  "key4": "Xmr47DSWFG919nKPPhMZpGEFfvNgHBQs8A2FGQPZ5SXtXLcYFMNM28JJQejjWfrQkBLq1Mq3C4zcwkJGxLjDPV1",
  "key5": "4xUrXQSh2JsFN7iQR3Yohg5NingqLX6ijoymWwxq2TWUwWtJGiAjj5VqdQuYnowQG4U6w47EpuebeHpTRj1grLAK",
  "key6": "3XCTesLZHVDMcon2pXQXUaofi61GpE81pnLnQb7hivyeq2hw64xrKLuZpRLetYr1N4vGUsKDZ7oJtfawhKNhWx3p",
  "key7": "4pSqGT1pb4ndwMdKvNFi5xTp933Ddg1NDQga2ASYaTi3Y7mNMhsNvfNnqsaZd7CAdmUPemYkYm9f3xPuMAvdMYSd",
  "key8": "BAHDXkT33kHzxSWSZgb7n1K6JobJUX4Trk6iJHiRgxWLS5BtPpPjVWn3CQ7giamVmMfCFRAS1hK2FtFrX6QhEL1",
  "key9": "4b8rtnxG2czyAGcckAk5obiMUcFmJakqqJDtZidLZo4v5YWSm1mRnZbpgZJhtXkecVF1EEbhBvvZwcMMiMZyn6pX",
  "key10": "gg6fwCPzgYurDsdasrMN3S9U8xyyWkufYgBUkGZr4uveesYb1524PLUifi91P8qdfxn3EwvSJqmDFQH9dAuGAR9",
  "key11": "23J4qQWPcWv51Yi3RyqeaxqvdwPbb2HtAGkyHP5pku19uBJFnhsJrD2oCocoQn8JGjACsGRk7KrQRBZpGsBvkvUV",
  "key12": "k5TfcZANo3zVNofPttDmP2isD9kGtQzEgNgwvA8qqn9iCZDvxUQ94BbNA3pmDmd3TMztycBhaTenboW3gYqnx2Q",
  "key13": "b1GHss18hvbR44bDc9B1SDCJKmeTxp4rj8efQHvikGMRiB2yT2vsUEXUjHRvtd5RHsmHR9sCe8y1LrWcPFQ2hfK",
  "key14": "5TtVy5MdqRKCFeW9KX7NkLBSfKxMyMBxXLrK3CtMywh6ZDG8jnh5oA7T2gCrkbwX7QSBkNVwLc4J7ve9togBN6YD",
  "key15": "5RsqPbiRfcgvW2G6gTq2obDJpiAjcb3n3ctYu53kx7keepz98kiNN8aW5dtBgF3B5u3euYqjzzpt5ivggPq7GeVU",
  "key16": "5KxcdUgdxnkVD4RUNzb1jSkeQwuuoGyUeBfL1xeKeZM3kZ8GY5KnefxPaYbxM3hAmukuSCCZuGLoHjKiW7TW6shh",
  "key17": "4SfR6FFuHLzpNEKfSeyYHfd7q6cwa4gLkki2rVobmYgNjqNfXTteJJCrL4MhuZbmqCxjdFsye6kP7NBrxfjpUz63",
  "key18": "2BokYiW9ZJGYvFgndMKRxtHkJLXTSrqvn9cE8yyfnh5mkczAspX6FJYJizo3p2eKSpBevCub8fGhSESkT75JXQ1a",
  "key19": "N1KiuPgnNREdg5krXPXEXCqtqFPJdnFHYsBuZojXR2givvm75Q7ukKXF2V9dU5hi5DLKAcM1XmzQ7suB1JSZimj",
  "key20": "2tU8vbM239TWXykqSVSufaXMzTg41YoVxXcvzAvm5NyRjgE87Qgg78QuQCCkC59bpJqFCwiTvGXzDq8smFQv44hi",
  "key21": "PbowuHEg61yXD2A8aLLTpKLkdErW8m633okQh2A5fZc8StGauqXaxoHVeVh8nGG1rsjRVMvYmZDgah5ZS8HSj2i",
  "key22": "5stpaFjNEvdzMQgjmMmfydvkVA54oQkcJuwd9VLT2sTCHtqkb9mCxeQEx2PDzLARQ7yyajv8adaAtvz7Gg18WcVQ",
  "key23": "K9MApTBeQxovmj3JnvcaL5V9WDeyJfyGT7oWafSrGVKmw54mskCWvTsm5fGt6ZMLDx1qnFTgBQgdZiDUtGiYYKx",
  "key24": "3kft6cSvD6jnxbqAGPhjSB33CaaSz4Diq4BbZxyGAmU6exTiimTnahJhRy59GVRzhvrZqdcaqEZj9evRmJqE6BYL"
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
