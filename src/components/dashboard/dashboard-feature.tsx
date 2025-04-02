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
    "2fJTfPRvzycpBLo9dDhg5Jufr7CSfx1hTuptkCw4svotNn9xgCTHA5eRt5ENT8xhrJ7L3MYSuziYPpKSZjeX6mnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QeBbwxt3X9V1BRSvvoUTfmDm6mgqB2KHEwXYhfQ6T4itr8275XDVGkcnDJpQf5BFUcmdXwT7vojdFw2HFzg3Ez",
  "key1": "5mSh81ZsFMavSbTkJkLnok8jqZ3amUQyWq4SsTH1BAS51Nnc34vJv8QAGLNPsidcpWv9yCs5qAdyat3pV2iCA5S8",
  "key2": "5w4EDA7a3XbxFVkNdcBFYo5EuBoxxLmVhHvoyqLh7R1Cz6UKc8HbG6LpJMS8RJacw1C3jXsmax8hEfkiJNKH6dd7",
  "key3": "4osseNHWuXNTZ9E71Go4gDbeAf2sbByBYSyBiVwumgQoqqzTE5CYqQ2yb2GyrL6eAvuAsL4Lc4Vwkij4DWzTCTS",
  "key4": "3JtS27ghbKnweKJhQu6n6KhMepM2WM3TSpLtTnm8p2N7QZsDjSZivsQjGikvgZ4KoKQqSjmBxDURYGDwD8mtnNaw",
  "key5": "3iHWMPEtVNhjdAUrAjQY1ZabZtY1y9i7DPKJGiu8Rt8YWfR6Pau3tKUZMM7st8czAVtM72hbRb6tJXxJuGdhWkf9",
  "key6": "5Y3QsZvmTcdXSYFQZozTvP6wsr6Rnd4d4fqEfGApXPzKEnNTFmkkZTzBkjsxCHmka4NqRnefGeAU51YEkcuXwNcV",
  "key7": "txvQKQT6C7TJrrSbJz2DYV32AzyKfh96brwZr6t3Uk7Fit87wqthqm4eLbPN5Pzw4LYfXEcKgdBcZYZMhQGwvvJ",
  "key8": "3kaz7F7xVLFzAFDD5FVgvqFsbH2h8anqCLky56nDAMcuUHGE5Y7xqXNJRxRNhmmmLRrDGnSCrkPrdRreQmrkzm4B",
  "key9": "3JdUEmcgXmuv2pQv3hAcyzbQSbLm8tRRBCSMk8Bucj7R7yY321hY5zkYTuw4QLzo6cPyzyZyhbAqxUrQTUbuzpFJ",
  "key10": "5A7R4Umq4SwDGCira4MQcerRyG65o5QevsyxPhHsL5bGtaWzTANr5QmGYvvWD255sYjrL5Addp1W4ZqgvGfNP8CH",
  "key11": "5WSQVyT73DKA4BtMopWkExUkqL1vjDPF43BsD4nEaQMe1cTKdfomzpEHX3suMZdgs6V7gbUwZ8PGBz6SXHc9v5ii",
  "key12": "3vps7rYYaiyQFftfAKu3UKwNN8GDJAqMDYSTyUXrL7LZ8NbEaU81E6suJpn4zxbgJatCEevZVAQW4KDvxMXGStUW",
  "key13": "42AAbthpQaZqzyMeK27NQ6X1NVHqoz3tZqwoVpt1CCZFUpQiaiviXcF2VNx9KzFfrM4s6ytjxBXf1ZtTeiPbnKdJ",
  "key14": "3FyhvgFyrYzsvwjGAYmVAPSPLFp4q6Hx2TXkyxNcrz1YvzD3sLGZss8Rp6cG4NJXtBB7quFh1QTJrZdm9ph87nmc",
  "key15": "4UPrAz522piJruAQ2yVgvnaP3jFLnLn796gS8CpjPuawrk53xtWuG3N7kxPsrQrUJrTK5nBho1rqTK5pdg2aeQoC",
  "key16": "Eo5qHtjpuUwqQJk16QxXBAm1tzciNCufpbkhG3fxq8WScPfZqHGn94GLhVr4nwkoKaEEiUNwdQtCynEV7DfPtiG",
  "key17": "5cf1SnGqxY6t4UC9PEczEYpS1U65yRjozZfpdz8mdvWgD5xXedS82SPnrvc9KUiqUt2aYPssZBTdXyc912zLduo4",
  "key18": "Uf4mDe9xvivSBbNr2jkXcoS44Yn2nJQGAPTVDdea2Ass4foGCsTRyhzWdd81EJJ6H9utkX9j6QRYR1xia4wEDUK",
  "key19": "4RWct4SSaZL9a6vyR4YHV7mkBsygJF6KPFDvFuwbqzL3USjoRAurYRWvTL9gy7sFPnkKju9qdQnniMQ8XjmoZ49f",
  "key20": "5sBAkc9yjWnWCpzJGiL16cmA75LcRCVoYWdjU55ojvqj4AVEVzmohz4Cnau5kYDnvBeaKGqqh9Dse44zHke8DMfN",
  "key21": "372nM7pSiRE2m2fNrec3uuouLT3oz5JpAgfFFaV9TqNoom69r6whT6xyV6zZW7cFxyKSnVkZSFNPSmWdtYfcrTta",
  "key22": "3KhzKHTBELjLFmaZgMQJhawqsyD7XmYEWdFEc6Ko15jnJ5jjse9CQvjsexXP8rZcMADvqq64eeVA7ohEPVsoTz9z",
  "key23": "4EPkvr8r7uRDfbNjzkYoXNrZFtEUCBmHNAhoX5D1jw636GjExkfr7ASBRAy5bGfYoi55x3WSTcKTQNun2L5yXZLP",
  "key24": "2HmBMAjZCKM74bU4sUjBKb7mMEr8ujaz4dZsUW7J6w89L44GZcFXiEUFuAMwbz5G7zAeE4WNe8wVs4FfViZDiiQ5",
  "key25": "5MegxAzA3SSpdnU9Z6F2hoUgVZQp8XnYXGNFDLSjtUx2ppgDP2vGk6L3SR1bXCTQWBY7747jQQ5JxSHi5C8iKigN",
  "key26": "48Ke9SNCfEytTam1radvP76bgnJ1HKUvbkgGmuPbgATyRRpzQAsy8Yh7hfdQFukDGrShm8FXmzqUvNGaqo7Lv3PT",
  "key27": "5x5vFBaXGYtAgvs2MM54G6CoGGVH9E9CCyBMMmktaskDW8Tk97qbu11qR5QiZYs6HwRcHpyCMsPX47vBEFBQmgno"
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
