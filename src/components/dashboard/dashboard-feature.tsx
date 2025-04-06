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
    "3b2p4R69zphjrFoNba5MeBHrtMKimyFabmQyocY2y63vDKDeNcx71yA2a1anSteL76Cux5WtzMg83jFoWyvNhiwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDSYkTFgzZ3Dx54y27tkEwoPro1ZebjUMhThH1d7wQikYXohPZVuW3mPxAEyJACyuybd2bm24QjsWe4RN2mKRsf",
  "key1": "2XW3XvrJ5VzoG9skrBAr3aYV31aBvskQZEPnQR4FKDUhsjXDpE4yMM1Xn2a1GRUAKfmVAp4X7xfpvXyvYk8nx2aL",
  "key2": "5dXVAtnANTWqnDxywCDrY2Kei5c82zUyg781HbcQzN495i3UkzgbN97x62BdvjuSCerPYFVbs9Qxoah49uYfUQcM",
  "key3": "wECGw9PYYCgJPcqMRgoJtPsNm5WXL2CxE1QkHzgdV1RcVmJNtTDJCaiA4bdPdryvmfqpzFHrerW69KFuVPaaUAQ",
  "key4": "pKVQzKJL4zWRdk6Yq1BKmUM3NXDfuWKXLahC9knzbSzyY37GByTVEdzEZMzSR8ZgsRHekYFt5RpCWynNhXWjqxy",
  "key5": "2n2oAKHAKg423sRDyvwB9C95YTwHKVpPFu3ZBT96FJCwKutQhf9pWCMQmfyeqh24Cu3pgBVSmxxqku2ahH87qWEf",
  "key6": "3kQGRCPYsB5U2RvS2BTNwMAdBtgPCB7bQziCfCFQEG5hmaL6iXg52B4e87vAqr91tDHGTupRrZ9etJaqBioscVWZ",
  "key7": "4w4DbvRQKGoPoo64Qhown85J6ePrCDGdgM4PfT4CvD8KWtA8zK4U3rXs35J8em1QGg9yXpJ2xzEiVgoTzyFBsNKL",
  "key8": "pL1GnonwLx6zkd4Q5qvJ47XZVb7utYTyxmN3Ziuxz7a49goLhNirE3ZFxJhX3xDMNsBGYKBsZbEHXUVPjLY1gvC",
  "key9": "4Eagax86MT5b3n34HTSLwWdYtPWXevJ1HQDG3vpXd7a5PeNEk1PL84DPLX8mMmY4pvyj2nZ3J8ykVhpnRhxbVjrc",
  "key10": "f3j9jXUf1Hu9NAkwdGfTwG8XQ2uBsZvFGhV2TikFgzPVsVhyvELVyAMmD2d635NXnYgYgbMiwaCTPmJjhkbExhq",
  "key11": "62c1krv2Exk18VR79sEGMr3YnCFrVoRYciM8D1PKYbeXpP1zRACMXxqPA8bccT1jZymn4NvxQU6fPjRjD5s29ykJ",
  "key12": "4H7a4mKfhziyawHkt4qsH7o5fqbD7wvki2g3ZUAzNgw9GFfmVEyr4fDgNjC4bLgR7ZTfN8Wfnx9NLPXGy6rVPNrc",
  "key13": "2bSSmZuGNAmL7hmntVirnvpwJQU5g3PXhmqhmUzhQQKTvqcFwamuwvBSC7UA81x2ZYtN8ycw34AN2vFDYErh218W",
  "key14": "uLgaUDLNiQsEKjVG9cSgWq6Zmp4iJjMycxxQy76NiLUKMcmyTn16rMadDHtWgvUwgqGPZVbWhdUou18ePHfwEZF",
  "key15": "K6UpYpM9noZwwsEhEGuKusyoUvVju18bYEBB5HzNnDZi8r744ve8JKZFtANhrt4pdyTKQrAKJXvoT1k6JCp1DxF",
  "key16": "xfy72TRS2bezPjCmDRnwYTZ3EaPT7Ko1EphHYEL3EJXfmWLyUKbH1oAnaba7tWnYan5NJWh2wCv4ShHQDXqBSSH",
  "key17": "5vG7C3rYBtjM7upeqJcB5uSCfWfvsaT15o56hdpzVFQySGE2hvxFhFVySHAfHe3DSX33KWTCwaJFdhKUwB8LKrTE",
  "key18": "4svaQkfbdsCk4itBR6MMT3ojx9N2Sz6i4ff894NtbfA3SGDjB4SLDBqqhYFpFN8f7mSgMGgnGbu3NUvTeps6eoxT",
  "key19": "2BLp8PTLKtoHfSLmGaDXYWmk9JYsyuyNDnQ4hhMio6uBKW8cGy42vBd6Pf1qvsx4VAiPx1K5FEKyMTTq1GRyTCN3",
  "key20": "2QyFv8pAKvYcs3KafkZCTLc4uC1L26KuLArFR54a6SFGnu761pY7a6ZUjQXqQu2Y8VwXRffGH9f97AnuLLvN1irY",
  "key21": "3QuG3kM5oMzarDgihqHhDMyanAAF9anodf3AatdaNH98rSEbjbHNzPa73tNVevLw39BJxqRnf9sTzgKbu5e6FRCD",
  "key22": "4h76vxXdydfdcLfUWgvVgnvSq7nfE9mx95UV9sxpdz5duRxwRZ1yuPtB9QtrHCtrNLQcRzjhNTLUEFRQzMxpxczQ",
  "key23": "3qJzxKyvbGXaZLtr15dQdQD5ThHLnAGSonNUzJHj7HaioESjNk2kzZQBMdoujKv5oqgaWHai9CiZicioMqsMpQmR",
  "key24": "6nGjyq4WgVCsxemSrXwxB2mHRbia5mpDtc72BBCBcLEi6jXoyTy8eCcRWS3XTqPobBJW6nJja6X7sT9Ko8SsyuM",
  "key25": "Hi4qR4tgvX1XGkkHTedLdeq8fJyKMSFm2sLuiCtapf2w35itGh5VpfTHpXUTZzfPEdLjz84A1eV5teTDVzDydbF",
  "key26": "5pYBVJinKxQL3CdzpBtyeEbhjjmwgEob7Te8vxkrjmZcSkzkPuAknxszRH4EaDBxfG8AgZxj54XxbpfLdM4TJ274",
  "key27": "5pTQw2AqvCDgkdZAYYJ6ASm55wTgSQ551xdSDRqPFStoxMzHoyaNfvKu7JDmXzaBFtuacRQ6tVaBCnodSdwaMLnz",
  "key28": "zQcTRQZQ27KGvMJisnhkmZBHx1GXwgkQcRZbAU1bgCYr1GZdgN7Jd8Z4rcrPoUjwENV8X6FYkY6DofK7t3FS2TS"
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
