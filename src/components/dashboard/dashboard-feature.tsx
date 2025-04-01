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
    "2KKsTtbUiRSMmJ7rjFNyfiszmEnbiVFhzMegNrMDxEMLzgmHicNGuHFfF9eYbRtM4XZ8xvGRrwmqaEBGEWCnHFg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4smgc3wAGzwneX2cYYFwEKDy4UMyJqyVCzNq2CKQxnaQ4nb8u2MwCzBaQoEVqsqVKxLYhwmNdK3AVETm1FA8g8",
  "key1": "4Tv1hu5HPSopNeWsQuoeoNZ7YR2kbsjH3pTWMfkdyCqDefwQ5WkyyeZbRjmYfvZ78fEt1HGZcekDs7q3frkgK78X",
  "key2": "x3csDkHtfAc27r4836AUQXHRrZRcRMhbqioy4pgMhupugNEySUDvx1KQcK8VPxsHMrrHTd2rrYwjfMbLSYkjPLz",
  "key3": "4FWCA34JAzAqiJ4HNHwh9bdYVZStLqEZiQeJaZ7jeAuZLEZk2CZSzW3728F8soi89WK2HkxbSiZjD389De4jnEGL",
  "key4": "4xiuTXZY4bromJLqxkNHSQKPGBcPBMAQAA4xmp1Qw441wKjwG6TvMRNdyjqSvgc6ZmBeHSRtvrowSN7PTfVGWKbG",
  "key5": "4Z5DAXh8ghQduV7f6FrbdBNjgJRxKsPiGobcL4eSjAJVhkucTHeyCtusDCMubRAKkHhuF6VpMKSGUa6DLLFGK9fr",
  "key6": "4VuDpKaHFbwKNzCrsYYFTqi2PK6Gk1wQ4na5YKmbrAvERrxW58yxZQUQwZPnSdUpP3fz6sVAheK8pdz8nFT6CtDS",
  "key7": "32iYcT63gdSocXtyuxX618Ai8piGhPP8djwgz85U9kHCBp2axCe9dNinAZnwyT3FazxyZvgX3w8sH8TumH56Ncc3",
  "key8": "5FaRRnrfntDiwESV68QKMsD6UiaRqv1sUD3kiaZbhH4DmPz1DgWinisSxJqroYkQumzky63Snh8N7sd1UndEoTFB",
  "key9": "28pmXX813dj6f81bD4RXKAHDLtjZYMVWTpsDmiFtpmiwtJP4xLtTvcoXYfq9EzvZjYwuXXCjYEdy4cbPmrzMtPbk",
  "key10": "5LiAf4dcVvmeWZ3wq7b7kNAjLry5kzc4c4Wi29BoiuAbS8FSnLZgwQqW3SWrXjJaVmic4VqP78KtrY47f39Kb8w5",
  "key11": "u4t3TyqXZh6HqNg52K8dMaTfSq9tGvvCHQeLunfmNJCPvSC46SKH1zRY829QP3j4JbEGgmtX4rAkoDnkvVCuMyu",
  "key12": "536X8GcWy2mQfXvsAtYjsjTaaC4NShFGJakpE4MXazUe7hm3cA1EYNAcGynRDEdrJ3D4HENg92pBDLoGLW9218t5",
  "key13": "2rtAbuVJHUbm2hK13vHw28DHNZuHomCZQPoLiXYTkX3pBJTZb36d9Rfs5buLvZTBQBd8SFmsQL1eMMRtiPt4rJwX",
  "key14": "31dt7X3Y48QapAdXQaLUrLDtMfd1KJFVNa721ZSGtTN947eJmp7mq81SVXZ2RyRSNYZx8TE5kXqAtBzVFQswV6bY",
  "key15": "4PeSutxubN1nAX9keXJBciGUEQvGmMBx64sFthSmwkswE9ySCc6LPFssMJXYm1zqMiaoyaK81AZoc5Kdvb9Xn4Yv",
  "key16": "2oxNwbh5kSEYjGRHNNw2XXTWrfYfZ3jWmzWNtbikNmJTnZEUhSHX9jXksrdxuJBM4W4fAVds1yB9tz2RsoTdDRwW",
  "key17": "4aX6yEe3NsggY3faCYYRfmxKwiHbsnAgCQBj2Rtxm4oKv7uoabNijwVMGV6Ge8XYDVi8aJo1GQkcB63rW4eJ1zZu",
  "key18": "4ygtJVfczg1H2B1hbJ2818r7PsfqEWctx8SfJD5u4sUWufU2gP66EvKAHYWYPWE4yMdU5KbriKiNfs17h6jz6mtT",
  "key19": "4YVL8mvnFC8rAJj56JBZn6ZEXPhL2MAEjsieY4CzFoL8DFaYnuSV1rSfDyZ2h9sae3QUoa3WqKV6Wjx5rrv54kky",
  "key20": "dygjH43cGUBMMKXZEd8nYdAhJ22SMhjaHLTRmUyRn7TwKdepKUTttW19PZS6JGbCF331Ei7qw4EYyP5F6Aqke7w",
  "key21": "ZDLnu3ecjtibAFzf3Gj11u8wrjFyXr9hUhzrMpQSp5pgezNeGFTS8uXGZCJCmSBMrK542SNmTUhv4o1HY5HEYnx",
  "key22": "62BLkLPpWDewR3iUhiARwxiSjKqmaJstnKRkptvVWccTrTsWMH6K1nbX5D8DWdAmLonrvwu3GsiqUwC3BsCbfqPw",
  "key23": "4L6Yw8zJQPgMJ6vFSSoMYU9umtdDLocQPu5spNZUeihiYXPYWGMddVZ6vnPfQNEChyafCroLym9ZgJxxwS1RDWYn",
  "key24": "2awG34kGhSg6Xn8hmk2sMZtcZpr24fvGYUjE6opLYYwmVZy3Zbk4yd4gPW5LY7DXxNVS9NfyxHVqgmdrkTy4qSAM",
  "key25": "5xWZ7ufGCMu1nuFmW6fvbJSz6SLp5UneZyAePqY8AQmvs2CfQjhYgKXEM2ChjMDSzLiF3tfJ259AYNTv9Uz5sCR8",
  "key26": "49K87MDZQNPCmSwf6WrTVwtyENaPkw2tBkoPHcWGHHRfP5piNMaTCqagjLPzaXhZehXiRV1S4xKXUxbvxXhkeaJd",
  "key27": "37ruZBbaTvowH3WAhk1ub5C3h3XUmNyHiCGXY8iJGnHJP4SJ4WaTVhQ7PFdHRmAr6Y7YSyvQp7Lw5ogkQkq2fqbY",
  "key28": "Py8s49nikPgkpd6RDhs5yo2b5aKg4mGxChMSWdFXztf4vpUb7TJh7z7pmL3WKVoGx67ckwUsL3QGWFjNeWRFqE7",
  "key29": "FmBjPFWeykkdTHtLt1rND1TgyBzwvK9Ew3aYmGkzMRCiYSMCEKbFmnQtUdrFzFzs1vkq4v2NWFC7yEvat7J4Fx2",
  "key30": "N5NBBjXd4iKRSXTVE7rP1bgh29Z2NesQuR7cEzRmfar5MM4ri5H3i4Pz7GuaRpv6xFtDA7WAQEPxiguH6Dzny3s",
  "key31": "4Gq9v15jZWkjT4xdavHroxuiq6PtkpNYw9kTLbuZfxDrwLyEzeajkAqBQB8rq27Qanho7fGwbrLY7uJUCAnDB15g",
  "key32": "21jQFBCu5uu4ywQTtj4tDacmSnw26QEHYJcz7Ns8oZW87APmA6uhrpwqRdCqJ2oYF6HVSKGFLJsd3D1rfsfRkHgR",
  "key33": "vodJhCwynJXrqixLCJZNaHoYmBjC9RJy6cKzU3a5ncDnHnPd9myjJBjR9w7T6fY9zkDp9QJyBHFWqWCeb7uWh9Q"
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
