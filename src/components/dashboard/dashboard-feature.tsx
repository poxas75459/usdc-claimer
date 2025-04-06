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
    "RpJwe794ZeM81X5EKXias6MdPCV1Nuq4tEkpbPLQwGbeVXUXqAcWCrUhtuLfKt4r2QvYxVc4FQHAzAu5WUtrF2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xh6NxQpLFV72bfzMZxXP5yhV8hrMgtyhpdjZS9KveRWZAR13JbJBKrGhP8d7fNGg3WvYo7XZLghon3JXLQrWwN1",
  "key1": "3EusSHWaHR37VSTLr1XJSyj5mhJ5wteBjQuPMtkiwCwRtXZ8FyLmWMcjLaP4jJfnB3TMRn4nLENhjexUaMaVS6Vx",
  "key2": "5NFjRLXzfakQndaGe3xnpMSQFy6NyCjxfcQNw3q6szceiYJdp69SNcjUUuqk8SY9FpsPzSVQJnUkQnZj7z5J7kAN",
  "key3": "4iumLBEJ2rWUjHU1wBZfj48h37TK38vriZxa4H6y1okLxCETdg4t2vgJTPcYDDJ7TSNhXg6gbTNkyXccct52M5P7",
  "key4": "5AuEshViZEZNcGJcdRuD5D6gmyng629LaRqF8sjQKy63oDtbXsSijWi3hpwDprQugr6Lrr69ZNg941Qjpjj89BfA",
  "key5": "5AocSSJ8KbCTV8jwFr1eUskP1K3q5hbanC8HTHaHpgeDV17DrpL7D7VuFr2LVB46LzPUUhMtw7r8Nfjdioz2DcgD",
  "key6": "24dhDiXvzG6RVXSKzRqXn98vYB6LFwdSJ8d99gmraBn3ecNvciL189n6JJ7PMYHgJ5dLnTzrijcj7XhQ12YVPjDp",
  "key7": "2AMMf1riohYsuZz8zXCK2JWEhQ4MMnGMqZ4AxygBQSfV6GJeRmxRGrMiRcJv55mbZncLYZvFvABHPLbA4mwukhyJ",
  "key8": "3g39Uc4cA3kVpkd2kmG85xxKi3aGsAYFtxFNFUgB5B5gPDwUp1AGqngnZR8rHxQXUsTyeN1jCiWoo8EkbP3Nf77X",
  "key9": "7bAXdMGoCzdLK2K7sxgNSo3mFM9pqekrNh8Rf5vpuz48XUFNsgfsNoJEUUCKyKz8Gvu3r1TKPrDBp7g4FcvDJWx",
  "key10": "2vLm48AaWkANkbsKsHezxQQ18vSj5Cf8JRPHmoHJtTWGnY9ddVETfBpYTXCmdBSWkWoA2o2urr5EfiPzCwfTXYpb",
  "key11": "2JzkWBb5nbKXAKiR24rWY8qXqW4iF3Aq3dEQAUNz9YAqZxBj43DPVeKiANiXLo4AZBYtvDpNSrb2sQyRbtZzFYsk",
  "key12": "4dvWKmHX3RF9jS6va2hTSzXuX9HE7uJGmNsZdsgpHyvdFatKdG8jiwkophH456MjvDBRmkUmyT8UVoCLGtwtpdLJ",
  "key13": "XZbMRUrhhtF3XV3x3TkfSCLEJ6iW9QMjHj59gu2n46qEcoBUaxu3PYpPrYU5T1VfsCNegVLfowneUf7WEchA4Jt",
  "key14": "5SYbT1HjVt1RXStDh8uGHhzDdeqSmGHGGCvGyMkkdUPu8Jj8D3WTtD3Mq3SfbN7GEbUyzBGUtWQhEYsPPhzSnjF7",
  "key15": "4mJwCTfxaTbuFoKzMjEn2xCaW51VSVdL58FNeEHA69TERi1GvjaiYZnQUBaYw1i7sNupALVcBTz1zNdYmwHMRkpW",
  "key16": "4FwTJraRevGcYLx1NSCq4VhBU8eKjiHhvxbQmsGGjLFD2bPGyKno15mbY7uouXJy8eqCY3qF6GKQjCPnvVndobyU",
  "key17": "k1ZR6KvMTKRDYPdWDTUSohfhmrWQPJpwoVvi4uEz6QAVuJFkNZgqZP7u6pJJJiFNanuMEd1Xw4gTbMJL3471Wn2",
  "key18": "5Z5TXgEfcgux3ZpCSnkVS2BcHyQChbDCSzhUpH2L1dN43V3c5afZifCG6jHKZjyDA6Pw8MBf5zN71aXp77U2ADhb",
  "key19": "32p2f82J5hv38cX2wCLrmewFuDSCUoNzVvgWFMZyWDeW5n6rABkYHVTJLMnp4xgTDAJgGaBLksP1QgQ4FaiTrjzA",
  "key20": "3a8npaZiS319Q19Ly9RAmVnnonSX1v5WoqkEFtWGg6hPMZV8MhGx3qdhwWF1u1ZN3hnt2RE1MHDjvukvb94kpKkt",
  "key21": "3nPZfvU4FPTu6DdLDsf4eu9GtVWYV2pupSrNuDcMsjHYW4gFPGBqMycLgkTUfrphzEJiPbPpHyqoqq7Gsw1zBkPF",
  "key22": "bZuCVGfwfM3U5utKHZdyHnU9ch2s3U7SBk7cYzAkvy55P6DK77ty9CyUysva3tudn1nZiNdMtVG4YsLhADKqE4a",
  "key23": "5LKGb7MrWDPjScsf2y42PfnnEme2bF8Gyjj4WghEhxQCwKCkmRGR2CphJqV8zq2aSwTJVSh7gVoLUYJDogi2jidT",
  "key24": "4s6pvpHZP1xpizkXJpHaCwycSgM2R6YZuQ7fNYmFiHoQd1d1fzd6i4q9dFyGGyhW15aY3qrGaeiU8UXfqfuMHdMk",
  "key25": "4S7Jz3p8c1yWcZoHtxTUqsJ8Hm6HY6MfDuosA8gSGM24TKZoErjmRuuZExdTML6eM4EZ2gwUyFpY98pzfH2xdaSv",
  "key26": "P1jcdAdzf4mcdDo5DH2zZY9M2tGuEosMjTcQTskVpjbFG38RNDpirAPJCzZPJr8nve9PCPm57nUVR9UGhhV4cZp",
  "key27": "52D3WKHu6EkMqEVGi6czBpcJGUtR35HFavRoRXc5RsqdZfazrKDjhyebBBNVAPWUifWTnktBoTfCja5CfFBXi4nz",
  "key28": "4xAVnuAQaso1A62d8m8rvtqDTuNrjdC8333JGTPJffE67gTJh5tHebjgfjF6q7Gxu9GmBU6GUD56aBiGH8iJT8gs",
  "key29": "55WsgAzDo9CYo1rx7TGLydJB4ig9obZXmZ2Pum76Vo2JB37n8sWzxjdZByYaoK2oNpgx8GDgRcYrpZ54zNfz9WYU",
  "key30": "2FmmDgE2kkakC8ykv7TRzVwpX61JNiHnena5WrXWzS4fZMAMohDX1vKjn66vPZHFpbQ6pwpBEZ2gLEh8VSHJ7S3E",
  "key31": "5Ys1tRCnCHGV753e57GDwGUeTUaMGSNv4s5WeKvaVzSZF17w4S9N5TMWXqtuPzpqNKCDb33FcEYNrtXcnSoGA2JY",
  "key32": "5JzKe1kQfAQvrKNTtAJhuGkD7eSJXx1ECgp5yZaq4wiQaBRXTtFDoJKxg1ZLkwJJHuwo6b6JQs9fhtp4bog1Zrq8",
  "key33": "63wTMMeS1gvpGxUU344kmNWC2LQ47HWhQ6XYfuiJzz5gbt3ZaVqCAFfjkFztXKx8uVKzkGQAqVV9gUr9sBP4ZwjU"
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
