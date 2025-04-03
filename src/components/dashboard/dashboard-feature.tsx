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
    "4Jwi2YpgyqS8dsq8H7Yee2V68wXL9R6pru22YrCn5dYi4UAccDj8bokYR5GKHfv8dHkjXA6RrGGFXit7JTL3MY1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqmwTqkk5BnUPP1U3en1VEWfW21Q5ouJzUdWyx7wKCcoY1obXEHdP13GqowD6hDpdx4SkMQoEDD3GK1ATDGvSjB",
  "key1": "2zuZCzRCAirFGvYTcymmc8ctmzjwHBhAnBZNcSp3KGREYhdgC6iETT78JuPHNErG4yXwmRJjGLhmrxFtBcQCw4fT",
  "key2": "4XoZeDPbwbdFYnnsBLZ1gtgr2y6Xk4DpS4DM6UgU1tmHa7GowRMkQbzN1b1mcQf1Vox6E5MvezUiwDShNnQA2inR",
  "key3": "347PHmQpywmJfhnygHyHJBsD6cMR8UzKF7phd8N2Tmf3Dgtqa2bcE2zzbqKoYhnMjwqwGv9GjuxDjJTL6UYk6ERt",
  "key4": "4v1cij6nz5cgZV5Aosq4vmmMXefdGRVBi4XyubzCMYrXjdEshxe61tujCfE4bSeGhiXhXwAdbspSqZd5boqnbkmf",
  "key5": "2TzvXMrk8NtJykBPDsvBZ8vBFVaV9x5nHDKdH73Cvw2mRxjeQ7jt9dySZqMtNRCtUkHdqFzTERQkBwsGHEug72yQ",
  "key6": "sMVDrLob5vp64cbM2Gacksdsyqzx5Xafnp628PcDunhfXd966fJBWbwLmEBVGd81qUcAxTtzC8VH4SmYe4tcZzo",
  "key7": "5nraSZbrmzTqUnvSDbiDkRwp7aJgaKP8bnB4p2hSRo5K9BJKBinbhMvbhTLnJDpnRDeU2DrNoLqaqrVe4AHRRXij",
  "key8": "4gtShxLtFMePQNh5nTmLm8X8ys9gxpjHxbYnfix3ef4nocDQvh4uRZV5gKmBY8PfaRTNfUMM76TbN61b9gQxZkr1",
  "key9": "2wQhaHLXTy663tZM7QAztxwca2PMBM8i1GzfBSwiNArYr69qhGYgmnrU6ZoDLkeYVtvmwdDtpZ8kXfRQNpS9JhMH",
  "key10": "2CSNd7kw4ZyqJzgS4VtgCoT262xgamgG2HPTJmGrZyG2WdfMChngn3DEB3s2k84Y68b8jHqEyt35pyBkQ429XSpB",
  "key11": "3ctT9cz4SN9kWncfx6CkjN3G4umMi6vswMk6cHdrtzFqjAUqxYiA28r8CXxJDiUuVr7xU7XVi24Lxra5kKGkqJ4w",
  "key12": "jccUpjNLPgbS8VL9q8UhfAV5haimvn6pRq6XDmJKX4Hk5cY7ZLzgfKry2g7ciPhZETQmPQTP8q6h8CNp999ENsJ",
  "key13": "2g6UcBrNY3NeAUkXxALA4YAM7WgREq6d5AsbccT8C4czSZSrEgYuSMQripS7vox75MtiJWmDNEmgLxx77zyYJpP9",
  "key14": "4tp494cPkUn6hbzKnkJ52GWUYtjrsvp3yNJtMdAybTtxkLUeVj5Wfd9Q9YHXGyNA8SdGtyWzgiWGR7hytHmJspNF",
  "key15": "2PSdYMzYyKK4ev2u98mcv3PTxFXaidpL13ZbjcbsBW4SQ97b8mJjUCeBT1SPAX8hAocZDzKjD4AjWiy9rMqLfg5r",
  "key16": "4ponThkAyZLukyupiozFVnF4ffwDDzCPxgnSydaPnNKvr53naaAFm1meE7PH8mUWPYyr6BUU5c1hiHEfwXkHjZgG",
  "key17": "31MTdr1Vd91eTQ2e72nTFXvEWdBaEBxLWGgMizSx2VmTvkipnPRxB6nv32Ns5k9jUxmQgM7aTSNehTo1oGsw4aZL",
  "key18": "sLwiDeuxzNujuz3w1enx5iuJLFzVfQ6pnfNBBdaXjhxxTvCNHpRFLfXh49McFMy43hgF8fLDB2KnvyBq36i4m3h",
  "key19": "6cQNAHgkhW8n5dDMzY86wBaBjo6B8bs94KLWM47gAM5hG4XXxXoPRmLSLPwoCYWJnw43yctQz6pnWZKUw7mKhGJ",
  "key20": "4edPeDs2GLRgACmnSG8wadjNko54reGkavEEZGUT5wDhns3dggLhqiS4qCmkCr5NzJuQ7be8HjBSwGqxHaidrPB9",
  "key21": "2CCboDxGBG9joAVJUGeZu3WZz7iumc8qQBvjHPufLhvAQwTCS4AczmGaWG5iV8YjyJoJvsRKSzAfJxpqopnLPv9U",
  "key22": "5WmXbcB3PWhAwJpmeYtN9nP7YsPdXYMVLDcjxUgSadqdvCGWjYDtmRgygXUMxkUuX1spDaoTncbFCqmxfpewGQLA",
  "key23": "2tM2PrNKdnH94yheYzVCCEQSRB9feMuwUhjMVx9KgMYGQZDjerk5QZ1RcqC99zpKL2YMVFaLhxKzwXxycJH17h3n",
  "key24": "4zcUVDjzmtov7n5LfU5cU4oFP4yt2q27CthjyVPzAT9wxEkZLK3Pq8dN33wFmsH3Z4W6GFY8ZAUQBgDLUCX2y779",
  "key25": "5sBmuRsk6mx4aSPfWkxduPyEcLVQi9y1befd418k7sJgF1w4GmEsisJYcgfq4noqqfYrHmLESmUPaKug3svVTntq",
  "key26": "2zZRcPKMhpydNziaj8zMFMFKmPZTsi34nmYvDYiZcnCzZNPUY8GSCTJdjW1aNPe1GzUppC97YTvqRkTvT1dRft8N",
  "key27": "5QP5zK3GbmYwpwBxeDAeMnz1RhjofnG5vGE2pm5BaoR7hGfm8YVZx2sRf48iHwtJQvxe1BE1Fv8ZRR9ap2cUcgme",
  "key28": "48yVjghHpQGYM5nU2W6jTZDGxeiUMwBCADTtcjB4nuNqpnrqfTvTgiwFFX2se36urPC4GvBDwVUkmnBJSM1ZqxKD",
  "key29": "5WYRAu1Ftwu1gioXvNdRnbwJiMPR6sfBxkeS7jwSdQGhJHZvhmD3X4KHFfLjqhMWYNqMqD8vqe5HeHS7f9VHaRr5"
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
