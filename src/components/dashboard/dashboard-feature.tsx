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
    "nzRXSB1dYZfqLSBNZ5La7MNTuzqqHQ5HFspreDV8EkRJVRb3AbcsggofvfsMkkcTeeL2a1GZkp3HcKhxoVpu3kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsGWz3PHwNi7D1AS8t8mMFV8EWKZj3RadYFabYYefeTav5iRwB6erkgDPADjkvuntMvUnh471WA8BihyeLkYoBQ",
  "key1": "43EdWPpswwi2EVWM6sKE8U2Jgf4pDEiERD5Zgme9vkvBZQ7MGfzE6Mq7vtTi9UHdVbhKbqN3g6JGccz8R1Ju9G4n",
  "key2": "3VmdK2bGiukMeePF3VUgeTyzhqcTTyPiZNzcwXn9uayYJEpBiEE3jiMZGUhHuMdwmuiLG2NypsxgDiqG48ArGLM1",
  "key3": "3NwzFZjwkoEkqQEWexz3uYfgWFzozR3REHUdNzLNYTijH2aiFSG8Q1AjDJ3uKJGMrL3CgMnV2X1ZNWNQ1KXMMWdq",
  "key4": "3YB42yVBgRsJcEbVSBSYfX53mmFJUwNyT6y6y8ojKKsrmt8Qk4s7Wr5QXL1EfnmMMV18rNJ8rq49eUUSChkP9BNB",
  "key5": "5USD4Vc5TRXf6G1VKBd9PxbJ8sHXkEUKpJBHAZT5Qc4i7yDPzxqSu62aKjbWCgUcQz9hWvoJBUYUm4jNGeubJdZb",
  "key6": "5GRCUjgV36FSLFS9hHerYd3VzNFjDre9cW4PK7T1bkREmx65X9acCDcYTYSrGL9oeDvwVtpezxh2dULTgEaAC5fS",
  "key7": "2kw86HSMZWXULP3iQgUbUnTrjUCT64uDqEzzt1MCCNKdmiphcHYz8RB5g1CCvGXG3LbcB4AB1dpY1BFdvAu2DpsH",
  "key8": "3B1jVDRnGVPCm8Udz4oJFBeWwZezAHXZQt3KKvu3CwauT752thTEqZ2brnUxb6sPENxwfjKjk41enwrqfp6pXmVv",
  "key9": "2afPkztV2Tt23nSa7XoZZ3D9miXy8GQGMjkSohxvXVgjvgCcxeyNBJFJw8KYkVmvMpYZtqicUMchYfXkccH2SiB7",
  "key10": "5R3KLxYXrDBJewJZcVn76fAi4Ug5s7SqTKbT3U4ba7EfnLXwAFUFWjoCumwZQmLRpYXCtuwMENhZzQPF32vj6JoG",
  "key11": "4dE1oR28MWRNpv5H5LBQuCW3WNfqsyi8zZsvP7PaAxEeadjYiQimijSmYXkZ9bBTV89SRRw17ya2NV6YiXo2KQeG",
  "key12": "NDMaegAgX4FEePDj47dxRpoJ6f1caMXYSMxeb97tBzBYGZriX7hme1NDCMewH5ULr45xzSFa47X9kPrEPFJFsAE",
  "key13": "3Mo5WvFNSvBu4MoXRPVz1RLmgczT8ubvU7hbso8o3SzzPtJV4FKLyHGD26gNhRSbDhGzjEoqsmCEZKNiwzFRG7BY",
  "key14": "352cWaGWcqDVdfevRjW644a2WB8jnvkNWKeAU357qPpkeaFUZEc79NfGRgWajPpcuWdQmQAUJGVGYRx9k5Qex5Vv",
  "key15": "53Yq87AK9WsSYhuskSaWbGZLkcqAuQwKfaccnbvRAHdEBmdH3iKTtd1Cw8LuEGmMkcfPb4rhAnsb7Qr8jgaHgxZH",
  "key16": "5bqQvqoY3bNCDbVjL8R3w62St6H1KZt93Y6ZDsLDdG5T7gbsJeCcPXAvrTNeTH4WhPYYSpJfqVMjxh8nCuBEdqTB",
  "key17": "mhEBrsLL38j37WqXDkRVNy8MBc5pMzw8SePLdBveTWEtVip3RzhgEXn1Pf65KcRKutrMeAKJNoVkuGm8PomxNNw",
  "key18": "4cBwQ7Scocmy3gqSxzYuGwRc5BQUaTncVjn4WRTvAd8ddUzy3mqn9fnvsW5DiDMYKLyJo8pHtrrWhYGr2kFtcdDX",
  "key19": "519aaz7C3P8XST1RVo87zTzgCRpt6n2pyKCsNS8S3nJ2FDuLYfYPFZRFKNkUTNkwA5srNkj4uQe7vJ38zJU6aRQj",
  "key20": "WCCmkGRTRijaKEUiE2ye6Jgj3u2HHf43Ygy1FkK1huGDsndbYKvUwuLrzKYyKzTtqDPJwKqNhchqk6HMrjsxvuT",
  "key21": "4bwVoLAH7CHzjuV4B7Q4WMmPd6SYzW5irv4Gay97bQHAcZQQW69Un4P35SMUryB91UwnVvubYV44SUbWiKEtD7MZ",
  "key22": "31KJ1kZ5KyUQYCZdg74JofuzF1CfgoEQFK5bdb8GBTxQbthwZFc4Zqks7GAt668XDP257n1dbPDyARn4ftSCNYgo",
  "key23": "4bFMFqkoNTU59AY3Z1KVg7onuBvMWs7b9HVNYgDnCseSJZvV18WN9wGcLU7tF6imX4MPz48VL85nsYT2UPR3mSPy",
  "key24": "3DG2EXUfRPZNreph4wFb4cAUNgD9EhV1fYbqEeczHefraYB3Y3WnLFNwcnEdUcB9WwBeGFm6dKLFbYA4h1bqn7mi",
  "key25": "3XugEaU7RcSACgbh1q1wvRnDEdGomX92ChDL5NUExC1otSjABXEej9XU24WRo9JckgpKMMcRZujKd3ZHLMxZrBj7",
  "key26": "2W1qfnz7kQdyLJTApQi7F76sixdBQrmG3ATQ5DNVWkV5BeA8uvHxZxxwuBdagjQJoeEu9FENgcev6ruHf4D8NNPZ",
  "key27": "4UHorKMdiT59G59p6AttDyoTABRbvtjirEAgNjxFhaejCB6v2E6WchnYZ6pGzNhPucBTBmD4EZDcsFb2zLoonaJo",
  "key28": "2d5iuF2kscyH5uL44WYPAur2B2hZnqGQGbmckPdccxirAFNwvUdYpg7icJ73UXSXeBDPwjyNntv5f6Vc4NkRFkse",
  "key29": "2ABUFjR132c5SGB2GhSPcwRisHVZNi1YC2J15meJJhsF2R1xzR6G3tUWkuNvUP2UQkGN6MLyra1hmMtDvgFrWAbc",
  "key30": "5nTFDjsDVogaQvSVV5Cb2g4eEFHFENWRkfugu8SLqd2VB6MxWhBPEFWHAJZRiByY8a5Gw2uZv23h13NLAYs8eSko",
  "key31": "wkc1BZcdgCA1qW19hbLRLVPQZmZyunrjg8nUmhd4KDRKug4FLQABXo9wYt9LRhS5ooEzQPuDA9MWBss6YJqegkE",
  "key32": "qNX6TkWiDSy7fBF8pq2qK1NtrrYHqPvP4UkrTNqQQguCnm7Dr5UfGouCVCvNVu3wy4gwXa1qtA7pydvykCZ8EAm",
  "key33": "3mYKhjNqV7CzV6ckqYDJBb9YiJeBodg9JzSBSKwS97fvDDkTuk8srTgVcCkZkQiLvtaRchs3F68uBH6Vc5PynByn",
  "key34": "5RL6ZcHwbRBiwzaVHY5xom8pPAwqkLxUKEZV9Ltt58pfxM2Yv1eGUVS6vrX1ZPDR7g7UvmEKzuc7LFQyY5t3wjqT",
  "key35": "5R3ch8nnNoXH8mXdjGGiB22juvB59nPk5cJgtU7VTxqkvmHjFFoeNo8As61TnKGyK6Teo3BXEoAGrzvmLTPKYQrR",
  "key36": "3VeAJibCGm1SCbMf1d2XNjU2P5AY1N5kX7hesibA4QLCrFW9vv5QXvBNNX9Bs9vWxxrkNNPpoYVN4TXTYBvLEe46",
  "key37": "4dsYvxb64Q1ZTLSNTMazs8HAzoBpbpVyGW7LWtaWYkK4J369FFXiATXvjDVc2yc1pj2jABUijRmajtnkRfhmCZMd",
  "key38": "4sEoiGdXXc4hBJPoGUt7xTvYN9AqWMGjZwt5TPZZepMMCYmBQHEZFNbqofZ5xoKYDrHdtL1Q7ZpZkuXbUe6j4zoD",
  "key39": "4KyAkVupfvLBMxLCzUjCb3zPrsXmYGPbj2jYFZtewkEnPknmRidKTJMoSLjxZZRHTqbNBoY7P3pbpajxwgfD6ZsE",
  "key40": "3UYc69qNwyAbKhKazJenJkiyKiB3KKJu5qxXez9MNCQf5TriZcBwV6Lc3XED3g3uUk5zGHErDw3r8tGYAxH4r12k",
  "key41": "3VuMj1kzePP3xJVJK2YJ84zNRgXERSFZnK4ZbbG5A7fMaHgwqz9mKo1QWsHkREazKfSZ9JKJayJFnVWyReBcGR9N",
  "key42": "5cUDVDwH14yeLopEFMYhoFbwATu2QL4zJV9HLSFnYKXRcTNXE4FG2xw9yWkhG3oyizAhDdGQBd7MzNBDh2qUJqH4",
  "key43": "3mMSRtSxU92P8Qh5zq12MXu54BaJ5i5R68oPYis7pzFz2FgmKAAL44p6NByDHztYXPpeohy6zTNJuZnejs43tVNn",
  "key44": "5sCEC45uFKsXrR4rthtg44uAeDiEtQN84KAPSYXkFoSPVVCW6g8pXwF8jLpi1g2qsuDcyv5rEwDPwqmjkq84EDqM",
  "key45": "2gJNYAAvar3AMUvLyJ14i3EYspjqZkjZDGQe4ZoMswewk3f5qwJsq2AJLscEbRKoGE889ZVUgAL9FPN2DZ8YiaQZ",
  "key46": "49V7A6rwnPe2uR9zUVRMkoxP2rmBWN4ctixUgS4pmKGBx29GkZoTDWC2FnGGmPs4mWfcF13877nUJAMmxtGE5GX7",
  "key47": "2ec1yEatAAqKqLrAAxHYM7nXoRARQsAxCY6QHdfxbNfZD4tHKuzoutinwXR7zeGwVdBRRitVcoDRXf9hAcyjrsn3",
  "key48": "2YzqQBgomP8mrEv9YozLM4CrjQaqkar7orvmichwLwKvRBHruQf3qm4oUHvnssRsDVdeNydWbi4D288HGKdPqobb"
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
