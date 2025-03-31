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
    "46H8PUSqMQaFvFLBWZmH2X7hmppygNpTwUYu7L9xCkgBi5WHSCx8DvmDbEQVxcsp6LX1jPfUQGeGuxCkmVwrU2xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFtYm1j35pPewwHw1t6prxmbMHSzkZ7Ensu3U7tVuNe9hBpYCSPxVVqcFqo6xjJbwsNYsdUQ75p7ohn1YALbWii",
  "key1": "hmUMewv9YhgmQVAhTQXHuG73JGtXvUN84quFKD8hKE7ARGMw6UvnBW9s8ck7qhjkWhdgJK5WwJ83J5QYHa7fbTn",
  "key2": "4CoE7gVU9bDV6X9dYE72GMvh3HtWP9ok8DK7XtugH1TA5WHVLGaxL44XNzL3VhNuztwXD5MBoRvkVafnN4oafMC1",
  "key3": "XRyMNjj8TqenBguaewVKnfHkC8ituXmRYE6VeEd5Ad7LU9DNLDBnAyyjzyxhc85s2LsaVDFN6XKs2wR6FeNRrFJ",
  "key4": "aVMYfL5dw7kdFEGt7hj1wVQ9SR1iGxb2JdGG2dRYVdFU2dBKnaa3oT1BViyc1uFzR11rEuWs9oyvg6X89C7bA6A",
  "key5": "28nnjKGksovFuZ3g5FNBxFCQJkHDbErx3GkAmvcFkRHeJmsS4MrMtQpLtU9pb2PkSUoae2Wx5rmmAD2m8A52u4Zf",
  "key6": "59gTMG7eb1AzPaurV4PxJ1RZE47txqZiVggguBBPRtujMLqK9bf49X7sD4WvEZdxQdYipVZ8UywDrNmK7A2Rj22K",
  "key7": "4PPUDkCHACxnZygN3PNoXUjn4JNVRxfrDwca5p6KFW82GhsMarUX2aDbbgxggQsXdQdWm6VfKbZzwLVC9QuumH4d",
  "key8": "5ippfEJpgMw1ciFASy3NH1cjhjq4bsda2A14jhH8Dc1QaxBQ1uuMkZPYSsBStPXusz1gbwXNRmjQj79DM1t3oY75",
  "key9": "k7wN2R6EcbT8kRx7cuhJBXTBgsXNk2psUy3rHeqMsEGKh7H4jEgLRZY5WDND6r7FjhtgZVRM6FnFpXPzUn6pKhy",
  "key10": "2m9cMKuviDMqNqw6ihRxwbvhd81bQ1AAuoUErQhM2V1byJcGhTSFRp7z6AaUyUDkSxYdWmnyJQvffvZegXgykg17",
  "key11": "spYpLkLXu8xVvrcpazJ6sQ9hZRfp9wYKs8WHMDHMdwUcKYF4NezoNxDkEp48LMxTSfYX3TKhCsq1fLAmMhtUupx",
  "key12": "8GmaZJLV9LRKgWKdTmQyxbk9RUmTk4pf8qcCYiBZA8US7vSRGfYBaJVnytueeCBYkAz9HcKCFqhtP1eXrneWCsU",
  "key13": "3kUiLpPAPLtrmdrukJRFv2MCC96Dxb2uJCZM3eC1q4LvdBd1qGDB8gfxPzAqKEPPqTyczxVwtMShoAVKAdoWrVHC",
  "key14": "5XGKcyiPgr2T2ocrznwrDjjU3HHkQg1BGU36RjXniWFnV2prmGnq6TpPa4XqdizjqCYdVTwrck23sdSk9ajguK2L",
  "key15": "2S7boH1SwtjFxzPtbobNpndy8KX4YWwM2hX6aj2UA3ATEceyzQ5SDe3Wci2SFD3REq6bqujtwBTrH4tytuStb4Aa",
  "key16": "2PZUxu7WrHqUktuq5tDosUsbN7W1YxP6fEpjLrfhpZui2yakqbxQcfahYbYLzKcxgz98pXrsHPeXoYRwnh1wPZA4",
  "key17": "3xpsthrcPLE2saBtAmX7bNP9wKpY3uymGBgm4BDj7MzeKoMEBJQCFxnWk5FAvTWAArGnrv9vWJ9UZLfqua9wEzeu",
  "key18": "kNVnSxGGc7FfKMDtadmWSHMaprn2cPsu3UaburemHZ2fjkTMdfNMbdKiQKEiKsSWw3RF8NxvXJHK2AdgMRYuWx3",
  "key19": "4jE9RRGuBqTvQwJddpKJ11M9i1yLY4A1DAVAWLr9NEkAVCk9MaWkZVVwYFC2U84DuqTzEPejiosXKXFCoWTPQpk6",
  "key20": "2DqiLL5etJJ2kEZcEEYF7LWfBjoFi5EbMVtu5xN1qB47dx9GC2B1NTC2vVHX2f9DDqueBF5HEU51KDrjay8vLuF9",
  "key21": "3AdBfRet8nX9TPgqigaTQ2iXbx4MrUQxNXQ3BwLSXL2AruBBsHvSJYecaGkHiydUxGDfTjMxvaP4pfdAK6KauEYq",
  "key22": "2p5MhMx2CYWJPEzFmRDkawd8uhpjzE9Hj3bS628qN4N5CUuYgnnrpSKDj4FH8FiQypnnBbEmqbdVcyED9HimvFuK",
  "key23": "3Q94zTTMAXLXjDrWuYaMdkdFjDeBJdc23GKEGuUvitbwBob3FGjHXX6rd8XJLrVNzGabMXtgxRbPPxqDkzwCRTUr",
  "key24": "3Fhx7WqKdKcoiFp9eg58wsMA8Y2EEjGRbEb6EyVvsCVWm9dJqyYxS5cJRA3SMeJDrSjudJX3Bw36WuTSooRf1eUP",
  "key25": "3VF46FxJZPdq5WYEAksHirKj2AVV5LxUnPR2SNEnvsyCDHd3PshtHxnkTBUa3QzoeSWfuxZoR4WuUBuh1PvQJvqZ",
  "key26": "26zQzXNH4A7D59XFsKjBwv1wZ9btWC7j5TjZUBj7LYnuvCSCpB4VpJiUJZYLKqXojkXQuwNMgCZYnTaTsoM8nhep",
  "key27": "5rV5evptS8k7eDhrL2jYsJFZeb1gcRg9YV1YLUsLJq1dLu9AHtxpZEjFTbcLzps7Ea9dTiCKEqEHRTfke96DCSdR",
  "key28": "3fDDw5G1nnPB48gTf28uFaa76t68ViTumkxiv1mZfi4qb7vULuo4ghixUpckw9zGpsnZLsFH796mgmW3UMHpL3YW",
  "key29": "5J6bPsqi7XwiPbtrisG9dGBRWGC12mZKVknDP3UfUftiA3kJZsykncSu9D4B2nBD1GorHABuqCFi4dFiBwSQ3Pvj",
  "key30": "5a6pVHgqZgxFJa9xuXnhYGvcXarCtPNGgTkupBKdg7Z4w1xZvmpnvb23yHUn2fuKbDAkSE6enTvDjHmeX8ZWJJpo",
  "key31": "yvXDbpWomsVp36XbLzb7PAKHYbrG5bqKLSwu5J89F5UcB4jHMPjwcTr9wmDvkS2kB1Qb57XgZrcUN7ZjGVW128v",
  "key32": "62pYnmaSzEymoM2WYxVCFcybxN83oEx5QWk3xRcVkmpCpxWmFnKbdr3FeVcQANJHxHNZrvYCac4hVYFAr8r8nNXr",
  "key33": "5XSXEtJBiSoovrYbspz7axjhvAgDhrLPML2XiRaACFvxaRasnsDaAkXtkkEfUn3AUJXgfogkCsa6HMMEtPN7mJ6",
  "key34": "3qbZY5Vba8xpS27mx43fT8RVWyHYbuhGWt5DRj1TAQKho7Xby8ABKGPmTtLb8dowzYRrDFEtcCZJJg9UPoEnC9Jf",
  "key35": "5Hb6Z7XnQNa3SYF7ZmobdTAXhVHqvf3gpo22qwjXkJP3TAjwYyNYHeLSBNafQ6yUoeihWLptW23R7j8EXWx2YD9Y",
  "key36": "5Q1EPkrMoVVS4kmCFg6UCCFqNZ6ejTpy4usx7onXXjYXnrhAdr32LjFL8w6AfX4wf7zMvMiKVD2Uvv7VPdBZAwBv",
  "key37": "5MCUy87hW2QGFEgeGtUEnCYsZqB8hc6niahDsURsNaiwrW1zynw5hyXr3WLo1kkbjXMHby234D4U9se9bfYjsUh6",
  "key38": "x3H83MWTYknHmz28YR71myCwGLwhZinmYdrAXmdkMGQKY5n1DnmAw35oxFngmXukConyjj1cKf6tFc3ptmzw8Bp"
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
