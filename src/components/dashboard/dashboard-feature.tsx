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
    "58GdMHPeZvgiEKRzQEaxzuRhmwdubtUcRCiX1SeGq9qhhtTCnbpoURbLm9c1EEXEDsg8VL2Ly6Tqve5bRnawtPWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wutPKnbS279Rj5WVMsJAbPXEfvRzk9X8mwGgyNYR1JiQB7z7uQPTLMdEZ2QeGJKmEij1ySQXEdzzKtfvVfdW1Ge",
  "key1": "4sqGEsbYBhfpxFC57jJQF8Usmi14CfWcge9ScpNBWifjuxcsVk3AQTdJcSB91MJPEH9wgh3215aQM9ugoZdFzy3f",
  "key2": "5RepcLY11PTn3u3xpFGNKAkxnvjyYps9Sm2Ho5mTh9ARBkqNhJjGLNTsu8d1eNQctNamcZHx8xi77c1bNzySdp6X",
  "key3": "4PteqmfscuTJU9KZV1mJjYHUvLL22kzNGYyc2NspvtADXZSyrU5KdX1ghegGM4V4MzQCJT1Go3XTy57QZjbhHCtM",
  "key4": "5SGMvMwPXyiDbacw64QEYgg9s8tCrKpiUqu2fNtbwstjdMtDZhitSewhVEoJHHySaZvGEj2xZo8C3SFXLYSrJTPq",
  "key5": "2vfD9XBxvaq3nQZSMb5AM8q9YvKDUXWyBP6HXAPzjLyvng5RFrVytwzsVg4YWyU6WaP5LCZD2Xmx9VSqmsn9yz4Z",
  "key6": "ub4gtMWp2736kCzLGVEoRvm8Y76uipB1MMbNfznKx6zVRFuhQ6qafpANadBFdxaa58tovekeChCQq4k53QV66VE",
  "key7": "2Xzs8hL4UAA6dKzVUMRXM7aWwc1AYzrnnWjv6wJp34vHHrvgKYVBft2jWLLto2KcUV1Q9da4Ji6sWojE7BHA1KqT",
  "key8": "5kdy5genEg5iYg6oqkPHZCruEiyLE5GcKLWw6TNMawmHgWUXTpFoxiwtrH1RhqmNAnvt1is3nsj1w6PemopohXkY",
  "key9": "5cRtkzDw8q4Wt3kJkpzEovBSizvLY53248Hf6f5NQgVXLUdc5DoaYXgELbo4yNXkn3KvgJhNfdJGhGVk6AhKnHbS",
  "key10": "2XFkvssCu66RoBoBC5sZd1wN6Pq8U3RiFbLxbeNEHXA4mxRmcYvCuEaxKMZyATx7NEjqXWaxsnmUTAwV7PKqVD71",
  "key11": "3BHbYE3ajE3qo37xaE4yJe7eVLMsn1tsPkGFUUuz3m9xj5irUqgHgU7dwpnAnMSfA11WyCb61XEWxyfKgh2pGE9z",
  "key12": "m4JkDQSvu4ZLhttWaZPgQeq8A96Q4p5P7aYyQVe9Ky7TdW3qaLucsLN82ExMixzAMeH3e2AdVkhn6k7i1qw6bCD",
  "key13": "5zpUiPBzMU1XkQ8pA5zxVv9fLk1SMZFoSFDx6sozgkpzGLrrkL3uQojs3d8cC4aNiXiaEUe634PtXwq3tmUYQy5x",
  "key14": "a9t8Qk4LBJ8JZU72VmmBrF7Y7fTWgEZn1BLsdcLrWi2bpnsCdZ4W6hWvyN1Sr5qTUoCQEEjqbHuafeamrq2KQgi",
  "key15": "41idjAWRDHM3Bof9a5AhdCRpeTyB2zNn4xq259DQkSx2DCRxHzYbqZc9XzFtA8vtF8tNy249oWrETNQERQuwFYxB",
  "key16": "5cZDm3yLyxGEPTatkbTLZ1zX6ZxZp7WJ4AWWTd4RE7GAAinPBzMJX5oGaVzUojbUuyqNanJ62sH4XRmHMNBEyFW8",
  "key17": "42VEDge5URLp4BT2d2saHANsdVdTUXAXHjPjbYv38QqWMeuzu8BmDyeFQKPCQ4XDejwQwCqeSBYVgsQpiKVUvNJJ",
  "key18": "3UZAF4NNeHHaGwBsoTfVibPejmSRgRJujSz74Dv7GqgCAnFzyWE8pTqv1wHfFsJ4pRFYLsuEiF8JdoAsBk54pxd6",
  "key19": "2qHtZEzTZRYU8ZWfccG68BVzoNMZR73EmKwGLN7DbsKVzgV4KMRXtHLxNXZi3a8phRmqM9wHy3hr6mPT1GQ5QAct",
  "key20": "496WMH3LENdUXqi2j6vPjCJGUTvSj6KBexT8MBfx8hPSYjwwcJ4c8tgsovHpHMDZJG9VfYhUGGdG7g45uSFWoB4F",
  "key21": "55nFnCdXX9cfXPxmgDHUnvHUQ86yqHwP6k4v8qKKQVL98nS1XYk1LGspxYxRVaVW7QbCprdkCimaVG3EG6oRjUbp",
  "key22": "SC2JMsicWsAovoPbbS5t5oAQ7KxDNW7tDph1ndELHGWXEtRyxt9nbVcwnnMyMvscaZzwDQevyjuoz9e4aoKGApL",
  "key23": "3P1FPCYdHDnZkbfE97XpFCC2oXLr8arJ4tXK5QGxEp7mDV4Y2tVJzPq2YhmbQWCnznYxd6ka5Shw9cPkg8tpxc89",
  "key24": "4WjKXB6UfETom5brQSLkB2hRfmEppksTskAKEe8iaPw4dorH8bvHviBk2d8Ta5SYw2f7WWKdQcfBxQGa55fp1w7Z",
  "key25": "66ie4ftb5km8F6QLsvyd4xTJ4fWtj2wGer5ZritjDKsVZkTpsmmxvkhNauwHYnEXzeg1jYNpM4pRopFcdm1fkWeK",
  "key26": "2gYr3zbuiLeLz9qsS1xvfCnUkqxrvzWteSBvc1fKGsM7P6A7Qn887RaErJGe21vxSVQkSwX6cKLdnWw6hetvxvQp",
  "key27": "5hsAxsRuZct9DURyMuXDrDfzugsMyhtjFbpE7erjzeLa3UWhjuNedXhP8E9PfQ9u1rDrWgnmoLVY2P8BXWhdSx9x",
  "key28": "5BDt8PNJosp8Y14dDYrrgmb8aXtNSvCJiLA8UhA3qgEXAyrV1Ap5CRAWyXMP2SnusuNdANXjBvUy2F3WoGehcVzp",
  "key29": "3TuZcVGBMSNxdhyEc6oHSu1mgok9RugL24Aud6iiyd5CWcxKYwjy9ydwDA4fuqSAhNhG6nBZgdKGxDe7yv3yVZaU",
  "key30": "Lbmf4228nzXnf4woRsLy8GTxnNVxdrsVthosSaNFFCPG2v9QcqrFFE8mV2hCpLqVqRKGHEMTHraRAihMQaMR2gi",
  "key31": "2dyx88EwTftoPZiFpzTsehqeJx3NaJzYGtEh9jEtYAMatu6r7JurFJ9AAGR2iELY74K8cSTnKwNcSjH9NJrVwdgE",
  "key32": "UBuLHhdYXiMh2rqx8SXctb5NyFUG4cw3So4YsdMsiW3bt5ManuSiFtpzjRGsuDKbnB3VPrrYLp1rFJtESi6YLJ7",
  "key33": "4WVn1c1jHhcCRFBuCoE1hKrUjwB8DfmHYxTSy3TtMUdRycYkbqoonBYstzbbJGGxNoCRHxdrUWgeUYCvkQKvprPE",
  "key34": "2A1AAaMrym9kzYxGJAs7wpGeKio9YFALGqEgmKts25BguuUNPxF9xR737b42SrYuuGSBMiiEsoZQQAbPkdfCdVtY",
  "key35": "4FK8fW2i7x2ke14LAim8s5iNTZzSbCM5MJXqmoKB8rtTxJogur7efcGgFeqeyhZyfQoHvxWyS17k5wbDbjGBJ8Fo",
  "key36": "4HgxdQ94RcsBMjybBYxAreUH187rVdkbFrpHNrPuazMZmfzFumYqYeYW6QUGy1W7thB6uAWV2VDQpPJHDcYkPsEK",
  "key37": "3y9ih6bymbPVtH3pym61WDYzSjzUCmY5fF4q2FvFEZFszeQXUessqDZ4eFC5kPg8RNgk13iE5rq7nTm1xR3NDR3g",
  "key38": "5UVjgr4e6FV4hiuMERAVzH4EKLsgiZcEcNhtQ6kxr6LFCoaLxrratBz8AxCUUZNnpH8KucZ14jcMAnNBNZutwYsy",
  "key39": "UHjfb9wfVVYVjdjiC9C4SPq3Nvcwfc2xE9YHcJybgqzVHPRasvCL9tajpMHmKj7SU6h4YqWvvYSBRXzrjSWQY2S",
  "key40": "fPTTo2U2t1RvX2u4xYtfy17nnc7MKykMsVZSDhPZrdMA5YHjXARjsdc5eGkS3fJEB3NoAmQKEyyfQpB9rpW2iPQ",
  "key41": "2zXWzwrFXR5f5gBSY8Xovk7LsfFhWBNYPGFGNHkDYCncmc8C7y4VFaV5h4caNd76QUDykTRVU32goMzkep2TSVEE",
  "key42": "B8RdTR2GHV3B3eXz9G8USTbByfreouzoroW7vN55APSHQkxrzRjJEcyLbniT23RdREFGaSbWCVfYiwwWeqpvZXh",
  "key43": "82mrb952rJFd3hz6ZwPY1S7bCh3DfSfjPxwbFhHxc7u9Xz5iprQ3XaQLcdwLsuW8SVMMfCPq1sT5m1SbCawbULs",
  "key44": "2fbKvZN8QfKPEsDsL2dPbZdgsdQxmxDqccucH76saqzTd8X83gdSGaHA6aLBcWZrtCdG1NWTX3AcasENDQTC5JRx",
  "key45": "6xFFRQymu1DG171nsNUiCvVJeW9QKwkwCztPEjMfhxXtYxoxiPQ6GT2ZUNX1TVyoUReaMDyKF4P9rUoffozJxkn",
  "key46": "4PbWt4dUQCqLqTohmb9a7KpJdpYCUdiHi82LU3Aq2fbJQvPrp5J6GzGLqx2mJNrqxQAnpcvhokUMqCUyCocb3qHs"
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
