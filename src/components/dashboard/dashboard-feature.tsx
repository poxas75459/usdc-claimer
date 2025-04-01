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
    "2fZQJbetkeJC4evewSwCWe5z9XqejGZrKpY4GrRtcDriTc5Y2HEu1bFYSSaZtg5XGtrf28hYHzFETmzELs5hXxFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAcLvgYTXvt9VE5DbZ45sJLzmN3uRufNTDZiKyZ1Hu5JpsLz53eBegMbJid8S2utdTgapPJabTrrWHcGhAMp9dX",
  "key1": "5P4PwXkSEdWMDikBJqgXFqRbzXMYR3vcbvvCci48ABzuL9hEYQkvaKytmc1giZSzrRukZsMnqU1F8rZ6QhqKSQpq",
  "key2": "wBx5pLLdWBvKvVUZt4kuiN7dUR3ryrTvpfM8o6NY6PNF4jJRRQaiVBqyKPfN5TDaj8tDdoDM6QMbh1cPRUZB2yj",
  "key3": "42mQx8jXfGCZXBK5e66Tbawzsoryygqpc5gchPFcJbvQoX6J7aRKWEBAgt71grZWGP3GiHSxKCqRzZCdn4Hhkreb",
  "key4": "5Dwf43oy2bsyR6Ag6vGVVViouZdGXNWNHSbCTiFUs6WLRBcH4jmRebNEu3oURziACuscto75oqfVxFSAvmLZTK7b",
  "key5": "5kimcuxPsh5sGTPwvJ6i1nQ1PvqxQX4XEvDWc9oPiXAvntF2xrYcNZFCEh2fcbTEQyGg3UGrELiRM8Fv4FRYUFWx",
  "key6": "4cTsAwy82Hns92cwCKtpgYE1ao6jn8G7vvVUY2P744GpAfC4YZPbLaKCK6zoU4nWDxeoJfKUPdq91gKi7643qwUA",
  "key7": "5XVbbVKtuHfgiMCJWGngQbdPtA9GpSwwTv4wW127Z8UPQngXHYgCjpNVTfqMrbjtYjFwoagtTMcKMinhjT8nzPQv",
  "key8": "4H7X5KE9b2iAs241PdZtQBnP6ZZ4EV76BVbBTc4Fegw3Jmrk6BXcWesYRsJio31HozsEn4pEs1NCWGUUYfS6xm8K",
  "key9": "yyX2HyhVPupYs9gWb8K59hQWCAw1JmNxhiFm9U1zosNB5NXEXvpQvFE7qfgKhvBbBjia58NATrYhf3msFmhZYAM",
  "key10": "2u6K8sBa3USkLZ9mFXw2ooTB5X3GvQvXyduzKs8UZrsu9ZF7BqYjkRP1gKLML8kNPBTRfLpMmzSW3wB4tpukSgK8",
  "key11": "4pbo7jaWNJncRjegMUpT7mAo8hpR19RAB97NJEnAJLXpkFELb7hKvCzL6W4E1VqvcuBETTZctkQGTEtF1qLsVT6d",
  "key12": "38nBwEpt1FGU3PcM1SyriAYG56drQ3T3nV9YB1dmbmXb2tb1PQj4FLS3KZ5rR8qDb9RA7WaDgegExc6AW17v83Vb",
  "key13": "2rs8wrbjZ2WAwFavgMWUKkYYSqhg6mA1JfSp98VeLJLtiEgheycxjKEsDKWnzNvi1M8yw7p7x5cvJWY64UGgk922",
  "key14": "2sn6mY1KpweWSvYLt7k5fR1jiJ64uJoMswX6FhmBdT3tqSiyagZ75jrHiz1vKNtSmfWQxiYe4yFK1FfoWUzaBCJC",
  "key15": "4BJkZGe32MK9JZfi6fpC5pgByicZEMBi3KSWuXJLgd6XevHhscCxxBQ7G3YMfRrJcbyC3kN5M4VTmQgVwHJs2VoD",
  "key16": "2k5ioKiyKJa3ypCQF7R7tUbNFbqNA2E9r6KYLFJKxGCuQq5rUguAFXQcQj3GvDMeX5co2BxEtvnCU6jVjcauAHz",
  "key17": "4p55mQuJuvgiFHumao9rs8JEYp1QiCYnLxD7xdzBDsmKbJ4i5NGqXhN93bPq7DNahQpBtf8eytMfjesTxCk2Mcwm",
  "key18": "4ic6ruLpk9zfVfu7stm7muEkY1A1bTm6tfkUEJvMAY2jQQh6siiK9nnWK2xNuf4qrAC4FiMy8i7g9WBnjGmoAYDF",
  "key19": "5KUUKNVorKnhhpzqSRjrHzpzdQer9iVpqun7mGyW3H25hC4crnLsPrCPTUKu6aPeviCZmrrCdff8Ey2RFbmhzn8t",
  "key20": "35Q9mGGETT1KPhAerfo99hq8rPAYoTATLYTMjdk7QqRtwxVc9MkTCe44PkwbqpQFYb9qdQdhwKJe82zG2PiTsgTg",
  "key21": "3tdTojipgpp8FTnZH7HCBW5WMtQPbnSxQfHwp825bJCfFWF7tH4PLe1TFcHf1UUqsdKBbeGj8CGycycQAMpJ24Ee",
  "key22": "36Xy3VGiktgXt4tV2mPsJoMybJbDikpx7wGGbV5R7eAqfiHJeftky11ucagJZXUUAvQzhqcDd7F5g3ALUiA5vG1i",
  "key23": "5EbShvDgkdN7iim1xCsTLguxwZ7Z2B845SFmbK5d1L7iSoeuTm4fqTKPSrv4J8VD85wXRcwWV4wDjUchZUi98mdu",
  "key24": "2y6pQChFUT9YCrd1P13gUHaw8iiMzTqrG9GTWciwqGaLqFkHi97enfBUvDFugYKTR5R3TRonmGMPqt3SZ8uHeFpu",
  "key25": "56JtJfCKmNTKkMjAfnuyYC2tQFgc82qddvnk2YxJqstWZJirg1FybyaiBN9eUzUJTNtghAD5Ua5e4w1fHZJfSHik"
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
