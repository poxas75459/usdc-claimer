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
    "5LyYtEuGbkNYT2WM1dK5edinHXD5HD7oQQhfias2GLGMGMpqAc68XPsVPDKP33EjiL8Gbqd79HwCQ1L6nfPqjXjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJAd6Ltwc54o97ZAYmcNhqQcgo31R4C8C8KjiYjCTnRyeN4ewKPZqsuMXA3Ck3jhopfav5sYXkVqFGCwCEsvPL8",
  "key1": "4M6beTZKCDPxf84qLdeVaq1CpiQzT9eFo6Y7dF6v2jE48vQ9R7Y6rNwoLawQuFByFwG1RbtY3Ljr5T4rAJ8hymua",
  "key2": "3Wz6QWYjDHBKNasFUYQy6D6W2o12rmkV9xSY2uBAfJAAWK7wQSmQGjkXtPHcaPNufYCyRrdXCA2YurJaz5b5yEaL",
  "key3": "3cncyMukoDCJPCDRFymoP1Q2KY14YELtexaFWsDJToBNz8LBcvA3g3JaMFfmsgmGCQ2LNSoPgSMZPRpeZVGGFwvk",
  "key4": "3Ha47xqAat48bfbuK34iLoj8D2qjcnCYULwdHG46gmxsSr1EcXrJjtgxh51QLgFjEPixE7mMotc3UPTYfvJAJitk",
  "key5": "2r6oNXUCxMxdcRTe3vwQixF2SoVmwC85L452JfUbCCXmtD2fnYrPkjt43oVx8PWiySzcDBWBKn8pooSQ2C1owrsW",
  "key6": "53BivJUt4jmazkQ8pLzimc3rxZkoYBqA9LrDVs9sqYYZEpLynZbombvgWy74K4CT6pXzRSiDN6bihVMvZVcWoEan",
  "key7": "swBf4Yjgo3TXkdNbj2y5fDia4f4rjwWnErd7U5jbx4wUSvHhAt2JP1Bj3DpU3mL9a57hw8ufC15FuJdgs9YZzVR",
  "key8": "6pRJy7FzkYWksbNvDFhcisJJquJyuv5STF5YvhnC3PeJLzh4FAzgkvTVMBT3vSssA98v177RMp1jN6SftXtaamG",
  "key9": "4CKn5jZ4TV2gV3GxWrepzN1LKoBfAuimmgRxkA6ZbY3iAuwoiALmBRYyWb6EgXUfXVmz1jMMNKeLVSbeoGfs6VJ8",
  "key10": "5e6q6xRQhJhpr5K5oSiXRnrY4n9Rc1qdj5rZQdLjbthzEpmNa9ugNA4YgtcjAbsvApyA8NhHEF2x61WXDDaKhYW5",
  "key11": "4cgDsGd2Btqmxq7JJeyXayPZJjvBLGT7JBD49urccg6QzyszXXWNJXRst9pkRzAhN1WXjTGAGjrwhK8QTxVyjrhH",
  "key12": "48hC8hKDrbBgeLxzyukX62KwpKWHxwUsFu9Z3g83JhKYXoNKd7X8EgtY4M7s998R7qQtBGncj4Ads9V6AVwR9HaH",
  "key13": "4yscA8zLtdaAsoWM6QUcLzoUoAN2qL4TBmzQhQc6x3Zc33u9VwVCx2YUpSYcnCWZFqJCdUoYdMmWpwDVLqTkcCzR",
  "key14": "eMQTCHdCuumj94ewzufrVafhpqmcAoCHh4DbhwfaZV1vid1pvjdRjbDkjUYEMFAdbtqCaJRzhv8pt7anp7qwB9V",
  "key15": "EwVz5WFCysPDkpR31WHSR9kJhEPc7admw4Sg89BKsXghqgvTU76RiZJPjG2k3M7GrqewQqQn1KB7nfcFmhhxj2h",
  "key16": "2Cp1tBamGU1L4aUwFUwW7SNNy5ofNuTf31g661jthDWBMFtHH9UPXFktms4xkkwQc9HowjgRSiGCLi2EUegRkcoX",
  "key17": "4hkZGo6VM9xpcvqHE5wJ9TbNZWeKWraM9D2koveWdUTUhnmVjfMBuNRNH6cGbN2P4zvechmNNTZYfPVu78Sev8dp",
  "key18": "2XD9FcZ5pjJMKvfDTeZtFPoQtZHherj6SRnEaHrPnUTCr6RWKowrBoBKgqUES55roQvCEh8j51TWLbSiT94PfK86",
  "key19": "6QFzLdkw6Fzf5k9mo1bBLkApcdwQuMRyXqvxTDJbXoYSQmwtvQPaUwpaAQgKYnawtAxRfxmaLeBsyrRb6DKSpH1",
  "key20": "3zBaVT2nEeRBbHTWB497gegSstRrnsHaLYR6d1wnsS8nePtaGW65CDhbsdbqPi8CnVuEc9xXscTbTaKYJ2tqikyz",
  "key21": "5qmJqmR397sTnk3Qwc2Wy3jn8mYPYkhmSkV4fuDQmeKwwYSUjJRDxbzQiWx8JXJn4LtKxsf4Xt57cAoLxFbpaQdr",
  "key22": "2Lz9YvtyqhUyGhYBDjisWNdHT1hoaZwGAZWouFm6gzbkAyY9HK6dW3ZvCMDb9D2abHjHbu8mGxrskaJbyaiphYpD",
  "key23": "3ZHAZsTWND6nwbR6Cgq8wt2guwi5EhynJ3jSoKD7Jr5xSwLz4Jnct6RDzAea4vK55i3QtCfhaybnfRiEBsWfhQLD",
  "key24": "4BqZeJjAAiM3B1UuBXuT8NsJevtaLu94YNqVUmn4jrRMP7FLqCkijUeCyVeyH6v67VNCbW99MJD5tRKpZ4DXJ2QG",
  "key25": "5xdNaE4tJGFNowcsaQ3mpfkzMCwmYd1fDaU6GSCJVWAD4JmuigtQtghU6SLk9Rz5jeQb5PuDbJq1Uk7rYPRY8Aw2",
  "key26": "5C6hN51d3CrhXNtdYGDkgpDHy2hXSHpvjicDWgruPhdfAMor8dykM3psJb9EJPTDGwxcuqRxG5bjs6qExpRJkgCD",
  "key27": "53ECojm5C4k8H79Bns9XZj2w6znpshyn6cS3psfRm1PKa7Tivdj2TaUKwUK5fAEGTWeUQkQ391QEJj8Q6Xc6EkiD",
  "key28": "pStHavjqKjM8Aqxw7C3BKCiAZ2BtUpr6karvwoRicY6gr2c4m8hier67sGD9WFzFu2d9uKYvE9Cmmw9mn17eZbk",
  "key29": "5aP2hpSxkQFTLFQqnvXXhq9nt7tach6KHRxXwsMruMAgH8rWiqzsMf6iXUihQ8C3EfNdebxQeBeQovVry2qjYvWV"
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
