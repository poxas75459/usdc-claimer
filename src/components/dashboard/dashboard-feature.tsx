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
    "3fqgaf1T34Y3KqZpdusW5yf5MNLw6U5jydFQnF3jVCq7Uzp8QB1p1jTKaVSafFHqDTtQJnP3xS5Xs8j6eBFYTJTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x94i6BwKY14RVKt5DwgSh1p3y4VGwPRKRNtFmJEGS7UBjPtHWm1dFpiwGA2YwZM9eSsS9JhwzZ7oavyAmeUJdkT",
  "key1": "tNLskDLCv5TqxNQ99umBFcxiiM3faWqvnLX5VZSEfW7b9djodLoPXyUxavN4tFpgGzqfmV5YRNEmAKJJd8tL2iH",
  "key2": "XRuL3kGeQ29GjNfd6cnbbwm34ohtyCydLD7ruJxMxx6q9SJKRfzy41CabodSymKEo3DW1ebsvuJZXjdVimYxN49",
  "key3": "2ePG163rzi5fEX5mrL6WZfkjJD9d3JVPuDPLoNPQUw8tsd7PwdivSmNLnpU8iquCzQzYMGu5JgcTqMVu8cX6qk7s",
  "key4": "2VmX1a9RvcWtitFzbiVG9bF9FEnUmooR9qmVwuLemF8iFgSkqN8zGANkmEaEKoJqhbrzGmVQck83dnaJ5ygMaAkY",
  "key5": "38SGQhBWsK7LgZfrtx6seF7K9XoL8N1mCpaWZjpyczCgL6EUrqVopDMLYqyZ3Sq7Ce7yxhsC5L8TgKVUZtUDxcxP",
  "key6": "5wwjGCChpB47hZhcyVSb4QnTkyX3LzpVkATwY9eoQTKFyEjXppCETaabKK8xQWBYWf8XFgtERPbUQWa8Y7TLEAFq",
  "key7": "4SZ423nf4beXt5sEQfsjDc3eJTRzKYcv3qpEkGvtxhZbh49aZwMFAfCcwVpJa8d22D28CQwLVv5M48SbEXUBLhxL",
  "key8": "3zZxdUWVoKMMPwBNLumdL2NcVZUkDEeVWWVDMPA6GN6K362Jf5X336Y3ZUxbrG3vCSkH6zNX3jn6zg168rh7AK2h",
  "key9": "uNqqCJivyUC7rLGPwMraW1ifKCAaP1AUYqrSxuRHQUhaBGDr9rg3hEGna8an3SrJy8TZHyEJpisyeHp7K6gimQW",
  "key10": "bneCZpb7BEsRajFqC9Ad5LRvfcaLq8A3vDqRa28RWLLP1kcA1pNDU4NFk3YmhMQFfKRRSVGSriMbNk3vkhUKpT1",
  "key11": "4QsmsJXEF3BRSoyqHkxbwG4ubGzRZiD9yrWgB5yJsCe5M9T2jpAYnYGCtWNJHhKgYNrnYBETT6ZhLvzC51VqAycA",
  "key12": "24JtVJT8Nx15TAhpVeDqzCT1xAE2uj4YSV3RfZYQ9cUNZRKXS17DeCwa9X4eFErAdgqckWD5akT4Coii45szn69J",
  "key13": "3iKSHth3HzZjP2hEAGitzrVE2pbTUJEFXEsaRo4QPVanEjD7YcAGTnguVeUQJaapCgxJNKb6NNbMx4krzkuB4aP2",
  "key14": "3oRHWRFw9xZVbpvPbbxjskCRBfQPQrxtfrtTtaFaCCZWDkxvTmFtkK7w3aSxHvSj6aTVUWYom3vWQnQQ74UwzcDd",
  "key15": "2Z8sbsEZeRxntjL9Dum74Csk1rTKKDYdXQZwnx3oKyXgV1NDx7k6htLEFbnYL8mRgFciDqFbRy7Vn9G6itq21pRH",
  "key16": "2mMC4cVMQmiQpvUdkCiwownSqeoCRuvxQEmcoWriaSTSbexdcwyQB2SorxQ2qpBAdi4HHeA2dQpsM33xm8svWpbh",
  "key17": "4K99qtSUtMUhndiZZUhDxP6Zq8p5dFueA3ENq8esUq75f8jrySJ1VgXicwA6BGGDtsxHkepczPhc4j4oqNwzHHmQ",
  "key18": "5QXbr8BXCvSTcPe7coXZ4FeQL5yrUvzcpa9ZdgRPgSidDoJ1xTucvAdMWdkhsv9Vj2myLnFzPGqCYVYpGJ5RjBYw",
  "key19": "3eCSyfYz72c3ts9kahpmf5tC9VChUQSHXfxxKHGdWapahH8vp97jbTiwgBLoav4zSoNnZziLfaeBFbee289exTrc",
  "key20": "5tHQcE3jqzbfjmFikPDRfhWsURTUxwbSU5aWZBB8AyTaRFgKHNe4o8R6UXuWqSsrEgEqaM6gdLc6i9pcWmmC7HEu",
  "key21": "5XYnGuaHwftAfNCB4SGsbMuJcyE8Ndy35jQfHTCXCF5gy1HNYUo3gC1zgNC4QAguYS2dYhk15mRCjd4k3JuwYAzz",
  "key22": "3RhXMQTcx9P3GHuoj2Rfycn9PgiPVaYwXtTySvs51FHtgTodHdsBSsE7wy8etjNkLs9nTksWnTi3PFTvCRfebWxL",
  "key23": "5HZAMwCpvhUoJqqxaRqyHPv2N2WZDPJHVqVZQbqYwsVMtGnacTCntVi9WR3nZcY4WzrCwki8qK4ootcGKE5RbauY",
  "key24": "4feLDyi2QfhJGNkhTQFKU4cnz66rLt1GrUcHaTjms1dMeTJHDdTJ4UKkJN9Zkgk6aNwhKGL9Nqky6fV2GaVd2RGB",
  "key25": "3B6CneMTu1Gt7KZbNMPNjN81sTw6WcsXovZh3k9EXfpWGrNfpq2gv5zJ3rSW8TuEGAxGCnspzLaw138c1WJa1YoF",
  "key26": "4seLeCPhXWuyNVyxPDicXVpENsaEZurfT2bFvMfqS8KpVwhSTAgMXFBbRqS823JvY93hjsPyfv4aw8g42j8zMF3n",
  "key27": "5qJQ9NtKM3mxctubPR2LBW3dL1WqEJt9EwpfYDrV9mfjdHynYYXoJy8SHxrsHLuewWEeWmHaUk4g3h5qMwZq8JMJ",
  "key28": "WC4vBf7W2sD6sTKQPnyKadBKYSd9ZUZFDMjgNqgi5K4vBaP92BNBRZeVER2sk4f1CKPE6vYso2jA9VYszs2sBdi",
  "key29": "2RXkhAgqoQL3MiAjxwfZxarZJxR7i9btZyoeDJYgRF3USCRoQswuEAPVxdYD9Q7jK8i2wJZRJgEYqDbUxSc1zz6D",
  "key30": "k7CVp6zndDx843bz5NRGsWyaA7q8Akz3KoHQidC6VWdR35UvqaLw1DvrrBAbzFpxgA91NWkCzQjXeFQQrt6owZw",
  "key31": "3WyoiU7WUuk3YCMrxY5szQrS9SfvUSx1H1sGthvnotLJntJ74rV3DXBMnFFb6hFYM74uDMGZSyG6uvEDQSWjfaj5",
  "key32": "5Ld7tFHn4s5y6HfLvCvx3641HNFw6wcWv91HWFda73KFHFd3uFc4Xp9QdbFpiCC7cSe6kk2sik1n92pr5xjWGm3N",
  "key33": "5bdSdsBpgGqENrAGsBNV1egudoZSSXxxsMjmFau4gEfcrMRavFRY4p9fEDhxcMyVN6hBH68n85AtwY26BjwoM87H",
  "key34": "5v4PeH7g1ux2jN1fz6fMDiKAuVqHQMx64v71ymUUaNYvkcoeeJT4vikyayYN8rRTa9mnQGHhwVkqfFxYRCsMn3mx",
  "key35": "3s9G5drpGuoq2XZ54snD5nVQZri7DGebpn2D2dGXjyUeVFDmN2s5UztzSbnUjN2gMrbbNrZcmLqxxmNPqKpXKcmZ",
  "key36": "3ff6cRJHRy9msoyJ9f1G2e49WyXzvZs7wKMgLyLkmTEwk3QqMLTqzBogewvr8WY8UN6KyWF3pEQ4cVS3PgT6YiRr",
  "key37": "5gfPvaFD7pmYCy6CuCM96DV26Z7T3njdGsWeV7Ec6eHU1EGTrPn8waKFRPC6g5oh93c3wLqafAsZ9HNe73PnqEjK"
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
