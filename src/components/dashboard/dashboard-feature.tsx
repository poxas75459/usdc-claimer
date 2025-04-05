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
    "4MAY8t4VyhNGAhNPiU42KEVDeY62xtg61YdNv6aMfwtSrzbRSNxcnXdP9UK9VawLpKcZhUdxsEPfWp22Evrh3Jow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GE3SAXWeB9Cj2AM7MPxFKc6MsnroKT4rE75sSu54tefLjwrgqaZ5BSpyNwhojbaiJwRcC4Zjv1sXicbzJG4YunZ",
  "key1": "28v96URHRjhycu7uLykynjdBzePDsi4jGEqCvmY6gmTwuy4hFvkwCTtRnbm7RaR9zXtGTMWYHZje5HfuNWAckKxM",
  "key2": "5b6piYZPBuTmLftqS67nT7h3qMRjXdwT2fsPqsxKAD2Lz5ForSDTbbU1YuNvGKnYfwiB35NPsbhZLWt3wvZStPbd",
  "key3": "5b8Y2xjYn3Da5WgLDHTirbP6K1WdbY4zXauaPbtNBud5LWphq4NAQHLMXBJ9497YuTti9vaNPjxry71eDjG4KZAy",
  "key4": "43DBiz7x82mv48yPQtQwXXac5Dpq9SKgu9VBCrzpqzZFSbtG1kEa3c6hpYKfjGiMzQnD1Pzzfg31ciNVnKzDP1hA",
  "key5": "4CCZeLM9SBkpY4Hmfn3vMEWENHzTsXmMGWUKt3fifFfNd7pxGN994SGYgB9HRtdbspDsB2V3gSEqNXrnboWkz3dF",
  "key6": "4KsjnG2nNS46PAPQch11YieP5mQWA5EnrodqvA53T81fv1vUGLCsxAmgekmWiUGuGDJ4pHtbgZKo96wD4jJdFHys",
  "key7": "5eGEAfwb8T9EM7sGewFjFgsDerppNbE5wuYUwrL53yX8BAq3rJBLcRpwhhXKH2an1BVgVQz9FH9odnDvPae5KRmL",
  "key8": "5jUh9nrTue4ekcgHB5NNveGZANgVKe8vqkCVwnq3axQSYeKf5cXKEvKKHWww4xmQuAn8LoJ5TThg1m7VKyHJY8pU",
  "key9": "5MvjWuME65VvJ5jgin3UzfxYBkd2fpYAHZfcpGheUVJbwnym2dSwV1Lny9exMAFu1yincaGoNA1Yd11FYFdgwj9s",
  "key10": "2wgcHFSA5wUb86KkYTbP3g6NEY3Y8ytRk53PZ9rPuyeiwR623PAm4HBpgcNrKvr1sUqkud8XPNfNKWhDxtrXCD3H",
  "key11": "vAkhs5ZXTHhuPWjWs4ohQr3goFePPN1tAsxAfuLsFgs24ZfvDk58MyUCNgxoKmfS24s5c2RoiaF9B2hvgBcuHW6",
  "key12": "mLzewm4i55Q6yQyhY7GYcAP5b5qs9xfK6mrnVBn2dDoVaXGFThLAHa7CXFZq266ipxv3ighzS31nb5p3zm1EbdY",
  "key13": "59WdjdTXmGxAnzQZJhmn4VLUFa7gHMDjXrBUpQE2gAzfh46LMRna7dupLWhUbcFnD1g8gRZ8Pwh7JMvDrT4iB86W",
  "key14": "66BhQCuutzrZgwL7sabpFNNxKQnP9t37etvredxBDVEnnXExHVKzJ4zGFK1dpNUEiPqGwTCJtzNjyyeYckjzmqyC",
  "key15": "3GqGK9veEiF5SLh1Pb4PFKmb1mfSY6fp5Dgzj7w1nQPgCNh1QbwyvM9LHBvTDGtkWHwcvH1WXKynPDjws5WK3U4j",
  "key16": "3Mm1mki9JRbnfo5Go1e46MgSTahMojkUT57rbrTuYLqXcbKdYthGcedFCcPTAiXJG3cnSNDKPC1CEXH3Mwhm2jgf",
  "key17": "3PQPdriDfLv4XSfVYGZGpitGNfFeK3GVqYbQW1ppqxLNW7mxfCWWVmWPi9LFwtPbUz5yQfxX6E2XDScD1bvgRojy",
  "key18": "47rrbv48dbVm5SQN7kSe54CHHCPX9ri5G8FLGMkkoxNpCECvfPYYHW5ddDx7UCCJtp9ZZ3v6rMsrB5UEq8VUHzyu",
  "key19": "556v5gAi21EtcDP6C3UUQMHLZMYo3854o7jmXrbZPUtnd51SbpajY8XpQxCtuKAGt6h9bRDMMHsqorABnJLSUfgv",
  "key20": "3fu7GjbSQDx1ixtJo3cfopT1j7x9Z1SRFYNQ7VNoZCve1C8thePUPS6fCmTTqYZqMM1RqmAstpog2niU7Qs3sR69",
  "key21": "5XSEadzrZKdL5kRSABWX7m2B8SgLy8m8ThgJrXj9ZEGRtySpoBP7wsmPLWVNn2emjkb2jASXW7PET1PzDWcQb8JG",
  "key22": "3VQR1f3aWknCFD9cFoshutEh32KUF5si32axURBCF6jN3oMQyc2d85qnKc7tmSusNxXn8GZVwmPrfX7gHrYg8M9E",
  "key23": "5eYjgW6ySSqyWgaiHdXFqcdjJbJkn2s1bvbs5DJ4wy8ZwVoXBg1oXEg69SBXHWTCkWn9sUs5VTJQ5UrbKFosgkru",
  "key24": "i1aTXkao8eUGfcSXptbGQu93nraM7tsZHKpAru3R2LjJHc56YsaFaamU7ZKtKmYcqts29EHsj4XG4U7h2pMDZkq",
  "key25": "42rLQMH94TqDFq1aQPiG6NdaRPh7u7QvhKX6PTJxxru3dU53yKnpRAtChe1mFdCMgYeYfXgKgyzUyptYs2k9QFqF",
  "key26": "jq7catMbhijB8eg4zcDqW5Y6wcoJfBzhjR6TtCf8MjvKPxUdddtpRbsmFscyXYAyv8gjrGPNfpXJrrjGMNTuX5P",
  "key27": "3THL5esm3JtJBSy3NHeF17H6Gk1UjuB1XCG4dfW2aacsh3J9nWdPR4n22UB5pvxArEm1sRZkcSS3HMHMXDj3ikRB",
  "key28": "3frWkAsWUya5QmvXYrhMxxm8zdTxBwGruRJBqenfdZKTpcTAoFhUbURc3KM186eqbMcTFGurb4DkJQBiTpH2Gw1v",
  "key29": "2P9j1AeLpidPaoxdHvGH1GEvVSdVLpEqEGg7r3wqcrUHmwe4cfho8iPEPMCaw1kYPG3RYYVhPLQH8GxvrrkLagZT",
  "key30": "4CzoWNX1sYsG8XmPBAAG3NjvsUYeGrYQ8ZrRArjDjxVHinC1rH6NEosHXHYeFkaetvuW78x29ftK67LqYUo9tDc4",
  "key31": "2L7je1QuempMSdBE6f8skBLHQHFAoVjpqFcfp4AaS5ccEDc7UgpuR2yfXYMCs3EdwP3KW922pxM8jDASLrz9NYuB",
  "key32": "2RcDDYAAc7Mp8muNggw91fDYKoGQnF8SZnzwZtZ6CKZ8Nneh8gGQi9mmjQcxiJp11LAQEEbjYvs5AaDcRQfHWVNf",
  "key33": "3kzVsJt9S6uGCvLjuA7Zw33sm4d3CLeEng6csvHdqLvyqfzuWnibTviNoQjkexxcPiVsveJj5ad49i8FzoRNuVmQ",
  "key34": "3wiHvDrju4AeHerREP7Uw6gxPcUe2B6R6Xfvt2ciUj7SaNyr87BYXtarRiSyfJ6TKmYhz45cJDhJuV8ueH5JFRzu",
  "key35": "65kpKE6YxDx1KjNgJ4nvfmnAeg7ZSecUq4nq9qti5566aQ6NWnHaAXVFwwgxdmtB8L9gAYeZwEBCA7n7M95g8pbX",
  "key36": "427UUKo8XKidXDzKbm8rHM5CjADdtBR1dYqn5bEq2F271rLWTdZnXhm9Aj1PpDebomBZ9AKnJu6nLiMgzBSFsFM5",
  "key37": "3fRCzV31ARNL46WbZ91t7teaj12A33tjde5yAZ8GcVeiemt1rFHcJKsiFsturrMVQWMAn3h2KkTpuBH44uKEYxG8",
  "key38": "weWszD7iCCzmeANxsmVsaSCAT9ns8bMyFicA3W6nyLegJFz2a4xDDHEwEEacCpUyDBBgXdpJXxRRCbWriw1nMLs",
  "key39": "2k8gfimk9y84c7wVJNz1UpKHujowFzms9D4WQen7cA4nSDskS6RTHzHVFkptYc67QaoW2NHzPcUYerMLJTNPCkAs",
  "key40": "4baY2k19T5RBNtoHKSFctAKn2zMmkhwC58PwHEhVbPCHhyoxAyt3i3hB7t6HvzLkQgFVGYetVSU7W5vayLFzGCY4",
  "key41": "gG3jrFUZmxNance5xZdV3pSpH7XU96SGHmFjzzuqNjHTHExuQP4rA7rinAzPcRefmoKL8mJaVHgSfUTrC4wuonk",
  "key42": "3yLZ6xYyYGHiuQhk7BvT7gYgfQetcUPYdowrSHDnaqcNXGqHBhv4VF2469CtQz5z3oHVQMRkyFwusGBVdraRha63"
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
