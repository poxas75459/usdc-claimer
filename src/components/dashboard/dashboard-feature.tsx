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
    "5bGyVMF8EshEhrVkN7q86Y9UjhJZsiYRUu9omwHMhJw4F4p5jR3hm2VtJzXgB6tocdidcmynjUzfF7i5iLdRTtNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRqzzVGw1ys7r5MG8MXUCTc6fGuoPsGdB3UjcWs1232Cfr743naDqjSEokmLp7wxwryWSJWGZj8DPsaxAVtsera",
  "key1": "5x6wU4XoxXWVCiGg7RLFtzBxHhz9F4BJW9LuCzZgf63pH2xPNApdWGqQYtDwG99mY9Rcjt2EgdNxN5R6u57qK7NF",
  "key2": "5Lrre3Xi1W3vvnzaJs9DFjGxP6yR2tnLjxC9tefqzMieTLv3STMEkJJM9sh4Ahcxe1BahNp11r4G2hDz3TvnJHjh",
  "key3": "SrsRrmgumZgdPKzeeRUvEP2XQnAKB2Xjqp6c5ygFBfSrYhm7aETkVWSNAzSrbJ2suMTX4BQaLMEhRA4Bx4utkoL",
  "key4": "MgBmPfNWCkVaBpSrVC6afg1DzbydqfQxFz4tkr5drCmyVCmRGE2QWmS2KfcW7wbMFTV3ThsQo6taE5jZDmtGAwr",
  "key5": "2oWzr3WmnH8TWQtRjeYdzvULx53Wtdd4B9UhoYBAy8TsC9XKc1C2Ej2sfk4TwJJBJ4MhAaTqXWaam6PDMEY22UFm",
  "key6": "2cr62nQmPaL3yYJLHMBPzaY7dJfBkb4Hj7FkDfMv1BSAaxGZ1euZ51fGYNYdetzBV2fZK6BgAYbSMSgAYVyLZtGe",
  "key7": "4t3TBzpU1gWEo1FS3uWWbeQ6zkvnCHmpX3Q5VoChLaX7MdeCj8iwrx9NeHo5Z5BPBzAYfUncKxK36MxnDBh7tqa2",
  "key8": "3mSMS1aDpSg7hni5MMYu91WamS87hC9ByFTK2jMpvj6LH7ESsqhSMzYLGJiPspSrhtMquSNsH6Ypu7SJFBL35aJV",
  "key9": "3JPgK7XZNvkMZaGKvXpAR6UHbcrAvCnuQEK8wUYo9AwGq5vGApcQyei3qTL4rfuSKTwJ3vMUqJzHbL9wmFsq6BZ7",
  "key10": "4gf54hWaXfRe5jLZsBZ8jWQnKX9GiNUuygvvEKzswozstGVceVQZtg7QfcrkTy44f12qRMPiPnQYULPMFkBa23nf",
  "key11": "3bE63xfzeG6Vse7rjaCeoyvTb8k3oXD5sLP7guAtrUb9nUsbvMMLoXgbxetxdbYmRGTcsGdexhtnsE7APdpAA4ks",
  "key12": "2UdoT8H45htnaomhLiMY1i8ZVnBRYw9Ww6F3uTsESPe4FS9oAinmDUdhMkoZr9eqkPbfEv6MqVwNPGqCFZoHTa2b",
  "key13": "42z4YuFWnYBLY2mSVP2JqXAaN7BJ28Lg4CN3Twuf3FGH5W7tiQUyTmJnzP4uUKBZxuY8otv3smsqZa8uVjEJkr5w",
  "key14": "pw7xdTksUNQhzxe9X7WZLUg6gwxXNEtfdRwt2ohCEaAVM8SoF8h3kBpfaseeVwGLBjTarbAhqb2bkJvUWqKktZE",
  "key15": "5aAcvgycm5X5d5TPD93ZHaMURKVCqnb9zBLGE3iFXK7tttd7UbKFFisu8uhGgxEqg7CVWNBcE5pTeyFBG54Lw2hS",
  "key16": "4jb4QHZ1sfHHCABj7fRstsxchkopof1UJ36XcyHLMBgET6XasxjcWnHz1yd4bawbUyuygUtiq3y5VgJGHRokfvJP",
  "key17": "38xCQrH44hm7CGNwgk4zqMd5QvX2FvmGrUdzzYeK7RBRJ5BAd53MNV21SRPAXqFY8iJ5xKgo4RTrujTwfemuuuwL",
  "key18": "5H3NHWCkarHNRgFNDMdGvbsAHuP3puYSJWMau2BKk1zBBxU2UiQn1eYQoWkpKdptHp6a31CctbQNk2U6Rn85S3L2",
  "key19": "5xXAv5z1LxmJxYAaKL2NTtaQewwbH6AnVFFmc9XEoPkkdtdUQy8eAC8XTugCe8fRUCfYagZMrFJTXxposJg9nTX1",
  "key20": "4EMMG1T2BxsrfkyRARFsbM9p52Cfeqw2BcgPFcaxrENXfDpnphNAXpFnzw2KHAVsJfVhcmDTtxC29GCtFVzUaig3",
  "key21": "3MKPaNkmVoDRUeovn5hgQNsofswPmnKid6CxGBGzyzoYWg3rWngkNKDtyVdmCP9gNBugG1ea9DdKxi4szWp2Q3qw",
  "key22": "T3CeNitqtvdPfSy9RQHfRdyuM5QQs5d1VU4BMsoNt1wHoXpFGbUZmugcVPse4xHXyWdDhrpFUbgMA4XKZePXD64",
  "key23": "36cFF4ctxocJMjCqWW5kqvP3q3Gu8VDcXbWPdX3fjtpJ7wqnjQc6LhZjhhvLkQGVoiGDUxoa61eBsqn2zAGYj9p",
  "key24": "3fSTZd5LxbSZWN3NUNwHJfU9DLiEgg3FdGB1fzmMBdwrh3QQ9XaQZveE8KaT19sFoJwJRyhGYqAJzEdB9fQUJYKd",
  "key25": "4d8yCKjkc4RNSaapzom4e6NQzMGkZ1aN5QzbE1fCiq9RwHNK8c3DwPqfrojd57F9BjY35iZeHBvFhcw4JTaAJAfG",
  "key26": "62NnaXgU1nLHUV6B8nLfy9wtaARB6U8gNJthk9H4eex5WowtRdD4Ji4MtVm7UCf6wgADTvRPRYZSk31cfw9sDoM8"
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
