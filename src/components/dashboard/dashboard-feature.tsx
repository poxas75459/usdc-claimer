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
    "4rzpqrYoLNtTcy1Nz1yBaAYgLahNpJ96bcMBgc8jYp5GzoumLLTHbYKsEUiNu9AbGzT8fvx8Lr84qigRsvrqRVce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWeqosZH1sn6YayYW7V9of5RrHDV2oJLidnC6k9ay1StBftoJqk2RDFX2QasiMBRFLzgAGn5k7vZWJy1hDpertu",
  "key1": "3XPrwjyxLyquhiboYsEiERva33BfHUJwW7qQcbNBT5BVsEZefT8FbC37cxAzEuCDVwqX53aBf9LcDuNBT4FWt4vJ",
  "key2": "5s5KadAvrbVU5hEGZ6isAUfpMQ5f4ptStShQ8deMRLKgtvXHNobcWetjPRYe8tr589M1B5FAxrxc5YiNcFhehaYP",
  "key3": "5FjYNGMkVseHWu1BRTFKXA9MtoA9a2nkw356pVFtEzLUQw6y4rbUA31RC3xuEP5dGDKnH2i684dfWHpj8H1An9NU",
  "key4": "5jKuGvBtdoUkQJUHiiCiu4UzGzs7X1iJZz3hhdFyozUikXrR6FNJacfPzVuUZQMXaY6rLLfeWn5CGoBVYvT8dC1D",
  "key5": "x9iAAd9V3ohtNdNtrWGTWJcxQrYvxiTBSesmGEoTkyHfSAdhYaydj1Gr2Y3qrRAhhEExJTzadSkmqsaSN2FtPUo",
  "key6": "4uDYn8o5A342fEbBu1yUEzaMcZM13bQrQ1fTcB3rQW1xTH2UQToaracxpB8RdjHY8oaZavBXw1RAofy15R1QuzVh",
  "key7": "5EScCmZD9fvDhdNdJvfKeQ1ZkPzsqgFH8cCqT4jsZ7fgG9Vu65BqLUZTbyr9FqeM33Bed6nknCBizEPQZ8XTwa6N",
  "key8": "3dVHDvfvYdqW5uGHevTrzcQscrCGKpgkjqWvQMKjQj7caA4M4hXVVn1LRtdWqAw1RpJie28wATJmGDBozQ53bpjp",
  "key9": "pYTXgY3E3os7ohsTcQ2azf9DnJHs4nnF6S2oxEXviVBHTbMJBSemEyrdwrn4sRVtAXCTPUWL8XZFz3d7YWw6Ejq",
  "key10": "4nXHUtKjobGCkR3p17niA3qZ7cmpVjnx1dzz6YsSG2i6ZYoBQAouzZ2CRnUqbsVL46zjRN9qjorjSXqFALSVevH5",
  "key11": "543MAJY9C6ijYTX4Jx4njZrUjdy45uJCzn86vY4xLCvQiNSqyUcyoXCTZrDzueiih3rztaXS5RJ7FX3v6wbZAHAi",
  "key12": "5mSoXdsN69sQMGS3L6Uw4yPDPwGP1Geo6a7C2vc6amdqaAKgaNEmYJUpLKFxWY4ghwFsBJemL1Ro1pDDGkhHvDRG",
  "key13": "46y4LrHAXdSXLzvj5gHAmrpBLTmWpBLuUqvszNYQE1zFmhMaT3bfSSY7rT8avssAcNNbiF6mYo5fBU4tpoTZq9sw",
  "key14": "79A4FHL8KU4pe8Wdwych6dkxRKvEHgxrfpVGmfVpws4LuZm3Vzam9NYycNmL78HgzE4662a26nh7XTy1ud5zWzq",
  "key15": "a8pzAJuPnqkC82mRB9FNAHzaT9o9Vm8B8rVvMw9JHZWdfbahwLcvMgfBnjPU81hs6WkU2qeMWAw79E7QAwWscQA",
  "key16": "3pFqJLJJm2n8emjzWLRbbVkV8NUzhqci43PT2SRGvpg3Mpd6TMKr4wRmwKM6zeqpZb3GGCrtzCAFjJtVTu2mUq7c",
  "key17": "3jrCEDPMcHXJjmTAuffPLM4ac7S1ZyQnqdkZ3gX1yGooioYHAnT2DCc1b6pMze3yxHNTyMPsxzS58zsj57fk57Cq",
  "key18": "5i9P56wziJLcysiKqneJC8kPiEHdQV3xCkTiQ3d2Kx4WWtTE8xhGDaPDh6QTeczimjqosTCub4Md5TY7NZf4UTDQ",
  "key19": "4afreyhAa9Yn7orc7f8WnaBjwrUGHJYyGdDRhucZuDw1Nxo9J3w1jjt72NB4QbeqKbsF1ZYPHKcv6cqQqZDWZbqx",
  "key20": "63G3kh3mobAaBGe3mLrKPDr8Dvxta8qHXkfcEvQ1Nxpou1L7Whppy5sUFXterygyy68jLNH2CC5hmx8yqdSKbVR",
  "key21": "5g7yhTSPTAHC8VjKtZuesxaVT2jCMUhWgcrEJCM5J3yGFqC1A7cf1Biabe3SG3bVwu4oBTBG8uxgdj3ayfvgYhLz",
  "key22": "3gVvvQ5FiwjvMZLycRg7MPtNShxAhwMjzwscixGVPbGHDMafnFVpmFwVbzYuGckRjuKHy99BbWKXfR91eZPCTnhn",
  "key23": "4DrzZTstsP6YrTP44smb6knqbc37PtEMhgvLy9nuzws6zYnjTTmXw1Shg86s9CNQkS4wCtaBVwnvdTegGSzGa2T6",
  "key24": "3CTM14E9LSfL4wRivNy59zzpviEUoAkdRiouVKmVdF8JCCE4sDpWFZZoDMuAzHxQV8JnxhSCgJZQ9psoejFB7Ppk",
  "key25": "4RVwLm8L8btFNsrkbiBww9XDQyQcUdT5MAfzTJRhtoXk1iJK7D3ratMfLbGkY4Qbs9fMcME2ixYuMQCCaWTBjnGu",
  "key26": "2NTrdLbwMKv2Y6JJkaU2D9AbuHroS4NXJHKFzSgCmUBHeqPxSzvrs1DDpGVaZB8txM6PqdtpJXLJu42PWyfHm22X",
  "key27": "3amNEStpiULiADDbsNta5dWDbrJgYFtoT5euJUpjEJBRQNtvcSxbiDRSPCTyLcAjfst86j8wcs4PDL9AP52iaFtz",
  "key28": "bHvysR72FyRe6rdPDpksNBPkjAP1Xk9D2jTjg6z3JkoDsFzztvBBSGYKwrbDnHAns6L2mrKJLd6UdBC8oEYfJZw",
  "key29": "2766YbcDAWKsfhR8KB3xihwQ2wdqXNWrpiJCbn5Kv2uv5XmVgUNJKt9EFYh7Mbip7bmXj2mGo1j1MRvpnWk8XG3Z",
  "key30": "4r4rkuQBXbJoCG57igqZ6UhEouiAtB75aQfZpzv8ZsDxZJdvnYSqUJBLmXM9JHhjFBe7HXXQUDGuNCqBzjDohJ9F",
  "key31": "3WhZnmddBmyuQQdLi8gxJPKDp3oidXonmRw4kdKhMMdP6bJRgvMPCtW5inEoVY32X3MCTLweaAebgnyYJcdQoTgs",
  "key32": "LFfnPa1x6pVvyMJ46WLvqV99xQ1Ayr3qf5aJMS2HomZiedpxpmhZEQQfe9HxWMZivZbvLE1FfQbzLgM1UkKL6Tz",
  "key33": "28ezWpyT1qjK8o5LozAbPeX8YqB6vEmLRkm4TDy8NvmTZhUAVr8eRZTDqP8VSeTtumJKnTi4Y7SqamoKzzXRi3Te",
  "key34": "4jAYX1hznQMrmACWHR1zNj7FdjBavG7XeyEoMPHWPFCy8Cw67YMdD2eyDFGq5nQ1C7WYZCgRBvvycGY9DSUCcRyg",
  "key35": "2QBcRqq6U4ASgmKsS4TwWxcWsQkNCzSUbwUjxXE27UuYPPqmizVsJYyyCSxDr3ny69dnsCDbcMo23mdxGSjUvvgC",
  "key36": "5RdjWrvrqipkBJ2tFKu8ayE36RS1JmdMz7S7LTYNMKk7xFCErF3ThPKz4vkaYoCCk2daBcPTjsR4oBtBrs9RCwW2",
  "key37": "5CoyT79LaJUZX9z7E3Zh2JyXq1V3ns4VJCGvK9qZF8rqG1y9qk81EvPtNq7SFjEKuCYu9q69sckjDHxk4tsj1SQe",
  "key38": "2fAjuEqFc5pFai4kxynJ8jUrpy81JAxQJfbZAaEtHs2Qf8GThGiiGfmdzxa3B5k92G1XTTJoX7S94kPAwGp9eMe4",
  "key39": "25GMeXkc8GN37yqaATQC9EMNQsmTaLc2AY77HtmTaqWdgLqXrH1x83sRUHtcu41ef4JLmgjKemBbA6wUchXXzxUN",
  "key40": "5g5NxAvvUw7FAQBuGVdcbn2JH62aDDWJmmhgZ56MhHC54zXDg9htYyvKUbz7K2ZKxukp1o8F2wvHx9cbuqzbR5Wz",
  "key41": "28ghNGLwMPz9v4PK4Z5KXUtiph9DYEcXYQ7oq8P6GJgkDnukBT734JRRqTPJ9Gn3rua7exeDPmPkSQa7XcyEwNvK"
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
