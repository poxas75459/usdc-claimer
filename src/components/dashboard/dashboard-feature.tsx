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
    "5BDA1PCSFc4kwK1MMAc2HFyzpVrZFyC5Pny46XfekhKCoFFGyzeTeFo38kdPsA6Eg7iKTkg1WrEeUjx2NXEcXtBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zu4U51DPgGj3iUyDsvxvz1LPTaqTtYvMmjtuquR9HV836MtayCZgdaHp5zSMru3MmgZm5YSdxAvtPXTeV2KNt5Z",
  "key1": "3xmFZpSbUgbviPkuQXzBbAnWzjeRVcLfpXV3a5dwXswrWYLa9GvjH7cyWxtBsNfxCy9nZPm6aHFHSbrgySeNUjHr",
  "key2": "3azt8HmYLuGe7W6BK9gX9k93QG8UKLk9K9vvp4Hmw6QMRSKJrSrWZiCYrh7GQnwVQdzTRq8dWLRfAMDwoZwL3dxB",
  "key3": "4ivGMCQYB7mB86CWtKAtGpsWQozWsE4GJbd7TuzxcXjyugepb7JS8ryhHxHQDPbgdv8L2SgjoALibigEw4dxLhfA",
  "key4": "e9kABTT14YcEmWPg7Q5dcoUHfxHZ2HV9fjKmDsDiGb2SxaYRZZyKG1FiwjtQLnbnGfiKHtYpAMaLvzxwixViLVq",
  "key5": "3q2GM6PuECFVgehSkiVSpzbjKhYW5M3pRTUokdQHAAedTopqFmsJbbFBu93JafsThasQJDgWheZkrPXoc67gBNBc",
  "key6": "5tYa9Vh7m2cf94vWhrXEpnjxb13UeqvewQMpUg7Qmmxh3m1y2tKkMZJtf46Uoa6k3a4293cKKp5obBePE3ZNoAB8",
  "key7": "2cWK74bPPHqf74H8vzfsZekKwCXUyKSd8beC9hBZfs5EZnDhfBNNRnt78Ev3FTjJCtVC8XwKJNeEa3DV6M2eGAf3",
  "key8": "4rMYzvcZJABGZv4ENnoePebRgbQo5j7eqrzf3VUUThMMFYxnxEgA3vVVA2xvyKweg6Jhe1FBVftzUxMewvKX5xtF",
  "key9": "4BxZk3egRDZrDANdy3QWseXqk6rpvJD5fc5e3zZ4SVieAMaRRoqPT4GbgzEHPATiTJiJsW8UZoNG5aFarBvfqo1X",
  "key10": "45e4FisDwcZxpSYrSmkJgrDLT1hhzi5X6jvHfbcDWZbjFA378aaqiMypUHTgSqbxPkhfRRjhgNcn3dXsGVs6YZQB",
  "key11": "2ov7nHvW5fEJQQvuqdmdhqj1DbG5w9GpWBkgjdTDsV9N7PaACyEXFghWfTfibPFFu4dAT4yvBSrp82LNmLXLRhkt",
  "key12": "4hEyEJa9B2wBbnwj7znWjMptomZdnmZHM2iJBe7c15X6HcgiEy1k5tU8ActN4rJAb1iauTGUjSpbGaCedhWGAhZz",
  "key13": "2nKx45nTrr3fMVAJBeYaFDk4X5WMADzDi6LH5YQoN3xHVLDjJRM4teHqLtNXtdr2g8PqHGUmtn7VenS2dYRGc2u2",
  "key14": "5UGuh76X9Di3SaoDqp3xTweCEbNjT2eaQhSN8SAz2BTuu3raiPd9Tb657Ge3WA2VLoxYqmZYmDcS8xLnXRPa2W8x",
  "key15": "3HLeaAHXHBCtniEmrnz8PkUA9dgowwBHAX8FKArFo4swnEt4W53vjgE55NFgLRf4ZSy3wjTYZyQHhpmweyVny7SU",
  "key16": "3bRwr5Hyi5X6BMTRSBRKHZMyE3TveurYHjD83uhwr1HbDN3gogx4u7HbQ3j7rgWwFJAjnhVnb1B8FxTk8bZc6P7G",
  "key17": "4ddKZWhGXQzAv2KW6koryQ4XNDBFmdn5sWN7w2N54eXPvrSBq6mawxzfQ5uw1FEYL7GiEFd82NUBbfcxFAH5tgP4",
  "key18": "56GESNLy9SzgAKq8hHeWD5Tfj13ZQjqoAngMdSaaUUBBo3ARKweXZyPV9TAmuhXMm378a1qEwSGcRp7qkbbFqPTt",
  "key19": "4PDKpxxGX5BvopyDmmKSa3G8ih4D9e7tTA7fFf56eJBnd8ctgLj1YQSPzFCpN8NJZKYvagzAq6k1PTVEhqS1jU6m",
  "key20": "2N8n6qhzjytebWqj3CJpnJyKoxGUgSLTb23A6VmrtYAC4zTQRroz44N1GZYgTrwiqdMNsDV2QTvuythGEbRRJFg5",
  "key21": "5arAKJxiVN83mkq3NEsb7SXJtwodHjBLEzbWx3rkRutRyueEYaaNbMsBxkS3DSpF6uxYQ3n3kAB4F8ZJoGwjp3Qz",
  "key22": "2BVYDs3Pk3F3CvLeJAhQWugi1iuKpK3MHwTnKcGzSmZKsq3ogWiDegQfhFedccgGwLwccgkXA2pvuEyRM5aWSpyX",
  "key23": "ynfLMYQwHwoHgs2UT9XjvnYPRhYA5WhrT8G1RPHEfY6Sx4A5eGBErK12jcYobd62sz4HKZh3JBtApfdBzkfVDMf",
  "key24": "3qmScs4CdzGoceVXVjEP5NahCSzWjNtf3VRaVt1hZqgvMzWSziA2uvezF1Cj6o2YdeWH3LKcXbZjgxRcECnJbyQ2",
  "key25": "49iMCrpN8nRbUioNf8G5HteNcpdQHnyHJ2wcMFY6h84NY7ENGV3cVRAp7Z4qa6URVCpSCZJLbWcvJdyY8u9fTgvy",
  "key26": "31mREGcgFw9mFzBqkCdWaEusPzHPbwQJQWry4rCAbmBKRdviZW3S1SzgENP3Qj3gHH8ZViBQdnCcHY8aR82Rw42C",
  "key27": "dXdLfihdBZdM5XeP2RFvxN3d6gF1Coo3BNcYMHNrnGF5sqy9ZM2jmLPK6HBzZjnPmZwUw6eoTFt74uEGynDtLQj"
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
