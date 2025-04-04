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
    "5vuhGeGwfS7ttdqBERdxQoHDYjReoW7zKNw32GT7Yb1rYE3E9es7wubq1LX7rfHJ8bKFsY8AcVFLQa81y7ZWiN4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H9AZDdw61YvL8ff7c4rrvex1RmNHRcowdHwiTS4CGUxjwSXfoJaM5JXPVrXT2Lc3crLgPD9UraXKRgj8xJ4ty73",
  "key1": "2gZoDpN7Yk2gDvNprmGCTS2yEvdqDBC6Ku69jZV9L7FR16Yicpe1TWeoTbPnf7YrqD7HT2x6hw8imRjP7HnYvyDS",
  "key2": "LPt2mnPtS4T8AezvavV9bNR1QVMkUDxZJD5N2JtxDJzh3P7WnvPPWwW8FjQhk3RQhSaRbNhMDaHVVd66rWDbjp1",
  "key3": "sEGHJKu2oPgHjwaRmeGWg2rXJwoXUG1QAj9rzXrD2YkvZo696MCBmjtNYKrdWxin8KS6r13c7R1A5T3u1VbVN4j",
  "key4": "59NunAHmaVxYmrhmmsvmzwBwMRNqWRRKjPejzdK4uBjXG9pVusejAZFSBmrviZNQawdPPtJKx6kkgpnpj5juWodr",
  "key5": "H5Y3iAmDeWqUKptX7yB4d4QMwiVxgAZe6S8Ss5SBJW7huQdd6hzdwiYPt6CDf6RH7m1wLGUvahwAz4WsKDr7kEh",
  "key6": "4KfAZQEZEvZnwsARMTDT4QPSbXX2EaLafXMGChdzJd1fesygDZYKS7WYZrjS97RSrKez6qFv7CiPh6ECf46T2HBk",
  "key7": "5WUKN6cpFMqbRVv9fUpruAEjWTLUNsiBnX65KXDAkfF5WPPqN6ESyTEHBMyJWkC9i8Coe315CfdmZMGRPwZ8wdo8",
  "key8": "57eqs2f2wQ3S31eucK1CzMeSwHowi3kiCJ9D9N929Q7ZVrtZ28tjAsv3EvA9XrH4ZFuUyU1s3UsKnScaPnzmTg7X",
  "key9": "4FJ9tmL3RUYe9SJS93TytgwTM49c2iWJ1o4DeenhB1DDa56Vr6vRXiWNLpjJgWEZuvCpDKkKRAWtkmmen1LaYa61",
  "key10": "5s8zazsSkQMyhZNnfrj2jYps1XroFD9ojbWFr23rsU6NbyiDGvJqP3pcUPxjWZHbRS3GHRnhPaQTWaPKZdQFAHG6",
  "key11": "4x2JBDjfgSTALv7MLG1c9HoJEDiYr7PjLCzCZ6p79w1UBvKhD7UgvgH6gENWtPjhqEFYnybXJwLkRYB9oQuhMLSf",
  "key12": "4jkZo6PT82CAXwijCbJXePPoBNwnFGL9wN9gvyk2YQxveP29BDsbZ8PqvemfJP1Y587evbU4nKxQF9VuE6N5mozE",
  "key13": "3ormEUaJxVcQNRVrTVRfNG1aswbhuq7azwXre8gWKtRhTgoQQfy4agoriNCzvBtigEoLavFHY3ZHwB9p4TLa2qSH",
  "key14": "4qEWv6NPa2FNSN8ePSA455oPxndomRGB6Drx7wACxFwn9wgFdkfcicp99E65Yc6dhs9EqJzbkkxumPQErA5wpZNE",
  "key15": "3bnb1zH7e8ZFZ3xpLFTgVJPvpsUys9oPANwf1PXhHNQRyD67Hanv6m168GypspdL5zcd4uiPgSwgAUFdQV2Prbzt",
  "key16": "1gDTumFJa73JmHuD9SEkE8KR2Ry7Lox6QvgtkBqz1BJJ2DM3uKSZUy7ceWir121ZjPa8TkN5CGNNMTA3ECnb8PM",
  "key17": "5K13fpFg9hQKMy3nqhHEjXi1tU3Z8ytJe7bVrZssjoENBpHgaCfGKdNRqHdSdBUH4k7vKFpsLtTTs9fTeNDsLhJJ",
  "key18": "2CmA59XcuRuELaa4zrL4SyxAbKayGBssZnmCjb1GCGa6mGhcmobB6xCDf6TicX1GXv5dXwk6jajhdJMyeyLmtSRu",
  "key19": "5vrAZN4o81Ds6vBTi4GsRWh9JKErk8PWCJaD427usZgfJjHpB3TNueeUwr7bM9b11HQrvYy953877Kh3cMbLuMpw",
  "key20": "3dXpKiPriBLBrfqoGEAa8QFd623HuuN2kKNSBit4fxUT2ab2MgqQABM1Zdgc5F6ZaDUq7Nijd7skg7rum16uSsd",
  "key21": "ejSd46MJgN8WRGd25nuG8Sxbmep5o2ApL9nYHZ81RJZsWhzx2hpXKQy1JadnHScoucSatvbcz2VmYJQZWcPrzHN",
  "key22": "1oQaVzWdLZsf9VDTwKq5QpnXbvjMgYYdUSYuTDHG1X7oFsaiRWSjPfpMZi1sQp1mKVhf23F8Kh5HboyvaraL3Vz",
  "key23": "3we9bvANVUbjVK19nqmwcpzFTs4ujzFW1Ex71a7TexmTXUhEpuqYC3mdeHM82jLnnGcoPXWHEyAi31ZCK2bWTJAX",
  "key24": "4BCQnVA9L7Rhkd7Qv71p3kuqnDzwpYTMaUB2JCFadxMope3yhcWzRnmbvGe7xjpNWnyemJgAnSbC7YUyQmhGj9WF",
  "key25": "4HGeeCz43hXP23pBpyDCnprADAc7ZtvQtpCYRj8Cvde2iUaf84XoCHFFyPGcvmPSQd2sUxyBWjjkh3NgY5QNAdFH",
  "key26": "3hPm2kiaid7HTh4NjAmYFtMpcQZvvZtvn4N5cdYvYxJsrznPdLFeeLPWVpzmfJTWAzcpwYp8gtJRrUKu6tXeeRNp",
  "key27": "5hSjHXPwRVPLHWM4h5mv8hUktM3kDSsoM3Y8JSkBRaWJLi1yFoJyAoB959Bk7wtjWpwSkCuu96CmdRdt436apXDG"
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
