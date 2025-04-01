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
    "2Gh84M2oSpNwJFv2BUgEWafdMAMidc4cmzP2WG5AvDAXzVNfxPt2ecXA8Hj5Ae4T1xG1BZY4mUV23BJDVZ76kikT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyKkFVgbiiSJcGnSXaW2mGBAyXpNvzM95Vp52a7c4H1taqSZ4D9UW2j4umR1rXzj16J3YFiHSwe69dTrFcddG4p",
  "key1": "38Bg1CbSMuSmrP4offPiLNayWdLhZdnmKA2qyg6s5sgcdrPAqckffhgLaengcMD1arFHSBL2pwYW1jbK5aVFtbpL",
  "key2": "2ddbrrHAgUu4cJNRk66dHoD3368mmoYGBxyg9cDdFazPWSJgguAYTQwCDD381z4Xy264ySTicKMLg1BJJsyb7n5a",
  "key3": "4dRRnwGZS9KoJXi2K5duMcCjtyZntKvGfunmkGsv3aTuUcYqdDjJWWMWc1PsyLfKQwaWmbiQj3suA8biifxPfDky",
  "key4": "41FjnYtehxLxWD47D89Yxfvot6UtWFoF6ActevTNCk6pNnwcQaa1z3rQSWAsiHowJ9LXaz4cbFxjqBZ54JpLuPW3",
  "key5": "5xk6mG1yrK2hjQGXS1xENpdcVRrSQ6RbF3ToGvaGEWskEQepopkGwDGJDetHungKNtoGQZTwCmvFVufVceCRnQhk",
  "key6": "2p9x8Dr1LGqqqaGmFCBv1P5Y1Sas55LQBcswv7VxS8QVTS218G69vw6GuGRJf7wpkAbegweAKy2g6eKppYXTfCrj",
  "key7": "4tdbrKjuXm6Gw5obAyapkX6Sd7rRL38AZ276ex1SDrHYvyfykQ2u4EgXYD7YqVZtN77JKFMQK8q4FJefHijaEsG4",
  "key8": "rZcCLJGLfFmNdbHWCtdpEt8SDYCYNCxRLYBSSKRsyVvQe8DcqXZ8Zak9LHFJf6ETWGbseJPXcNPMZjC2g9HJmUx",
  "key9": "2hZQh47K7zMibSPpmCZxy8ggXZuNFiyGm1D6GfytqTuzS72KL6aA7rz91a1bE1Lgouxs4GUcFjzfYKcKjD9io63y",
  "key10": "3h8PgGDWDMxYPt9pQXCVJgVPPNaZxAADwiJsQBcouoeSRBWrpRaWU1qaeFoB22S9k77BcWobbhk8TZSw1hEgJqm1",
  "key11": "3b4Udcbt2rTbhUbmRL8poXB7a9SE8PjzNe4CTcAvRUnnqPGrm7zpKUVpiCfhhmTSJz73LaLh24eTBhNr3f4y2tVx",
  "key12": "3tfwFKQR2NqyKvwFAFwunhBotaTjXkBqdbpKs6EtuaV8t6XE4CSj3BjuFdQumUgiHrxA3beJvpgEGSQpxKxJekym",
  "key13": "33bqBrmTMsY94yC7bFca92kVgrBJP7Sc3zzxFfkivq8D67vFwGBtRRvQPJq9uBC9CwgGphEU6913dGntCb5tTsR3",
  "key14": "25K4AwiMLiRYVJ5NY5S5ShgjAvmN8FbE26EtRGBzXd35L4zD1h5mV2DhFwxMcDwQpQqZuuMWog92ZnMSU14Ka2SU",
  "key15": "5ZaVzNuvgW2wNvsCKdtRMJwtAg6YpH8AjGcoMkw6w1XHtxhmdEY6Bk8jjLaezeEyhMgZjMX5J31xZoA5wJiBaBaK",
  "key16": "2JY4t996Uh2RKWVR7oHGZkQDseacUYVzN8eKFfPymEqRkmNoGfw7dDzLYd53474TZhfWgyTBk2NewguU4ZvWKcJN",
  "key17": "4rW7yvegZqixCWsqug5ND8aVUT4vDeN8D7CseVL6r28A25CvMR1AUin7CHYTeLArtqzQ2DddFNDYU2CUNjT7KP3C",
  "key18": "2nQ8Pk1iPsUEN9xTWNj9Y5z4Qm3SCjmaJCVvFoyPogHKgDAJ8LttXXLuG2ALjxZ1rUAff3ZtRTa3qhWBBfnBkJgP",
  "key19": "4fge9yTPAE9hu68np1gnpWvWxNVGjfvrSbc6BTAHxECKBkYKjHrikiGvGdmGNiMcrQzE3HJTJBs3RqJhhLf2cKoz",
  "key20": "poYZwjpu9t51xJ5nXezRriguYYZHKLpN9KkxZB8QidUpXBLR1utNVtxp52qDhJfTosyudxNEKouXdumuhxTTmDq",
  "key21": "5RvHP3rotYZVEM88pGRk4P4LXHgGhNes7bnyyT6pDiXopRvoQ7UncEuLE5nBdVWJ9y76HeMoHDziwimXj5ZU3Tht",
  "key22": "52ZtzkFvRBfXYvvTkrK2LdEGWLyYofKgJR6SwnPVGGCS9m6TvWBeHuMnV3uxFFeLe9sWKoHvULf7xiN4fAASxwZx",
  "key23": "2nq4mgwrNQP2a9AT9z1KR2sSjpa2K32D2vMciytDk47q54L2YJ5qZFqqEfotZ7jNh3fgXXkGPtXuptBNuwWXrb41",
  "key24": "2YrTsd25BPD34qGeg9D4fArfp6KsoTCm9dscNeX9EM3z5SKXZYMWvkmdHA3kQsXqNizzjwdqnDFmdMyh89Rpmgx2",
  "key25": "3yyiDY8YgCS78HFqzy9bhV5GuhtqxHvHQyU1AZTTCgffA4kptaXWf5aVGXW5aa9HGb6w6M5UG2MuaTn7wgpV1Mj7",
  "key26": "4CcUZDwNWHYAVRuYQ5uUijz7Z1EGWhb94tJcngLxFPyQzD3nZqvDkmkFjRDtYw1R9XhYNsUptHBMN4ZGox4mcw4D",
  "key27": "2KbqH4sCrrwU3fR9qp58AdFQrsHxTgtGdQfaw9nh4DgAUq2C2wUGR5M8MEwRCbDeUS15Kg95TZTMSMiJJURXm96f",
  "key28": "3tT4CGpJvbRuJg61RqLFUACJN7BsjDPd7CsjL6MkuVu3t3pn4xuhtaFaLuVFNXiVe6bvVUd1RhPpYU6Z28L97LWE",
  "key29": "54ZcCocbGjL3erLMJ2rknajJE9CoTCGGy21yGFyA5EwifHQNXZ9siUrnJrGfsESi6eYyGPqNvJTKcpR8zEo3AeUn",
  "key30": "3MNJbFjwutR44crb31JtG1TeoWDMRtWtu55cCW7L3TL9URvTNkzvPhXV3AXjhs1EJdtpHZyiWLgcWvQzC3D6wgHX",
  "key31": "493MFZNRBMhVgm6EvAvVzPiivTStoYY4nQxVRwfUGquYAG1FGeFxc22jhEKj4zhKsREitXJUU7GNSWgcJNyqXBgj",
  "key32": "2qSgfWWgfhR8K1zdfMXbpYA4S2H13xJpGGhvMupT8HNuR9ZrooqFYg9Ud64YE4zHSpJvP8o9yBwRQyVMbzX83SCM",
  "key33": "3UnSVgeAibYcXucBZ7n2xiznd6iNoyC7E1nxYvgitiaJ9KojZwRJxtDjyoRvHDMXHUWaD63Ea2M328r5dZD23jHf",
  "key34": "3AXRmktbDcu4ow35ZugXgq1YsWysGjQgZkmBuqkqRvV7qvtXx7Begzzmhh3kJStrVmnUUeb2B3aBKrLHDHKa38wa",
  "key35": "5qVicyrC9gbierBuXgCmexDyeLjWrpSLyhA7NkpAAejn4HV7wJP6Wb4hjub7MRm3criV5E7RfA2ygMMAqpCY1587",
  "key36": "31VwcrrEh4qi5Jy1NJqaRnWjtkRB4f8tvps2hEkxLpAtFLsSTR6ts2V4haMyMZ7j5JxhKkamxs2k5FcZA1r3e61N",
  "key37": "4zShDFKjpcj7P9XbdMYEvsKK45CfaS2fGofoeDBypNUhnthLJrreudzGtzRQQMdXWoMsZEsQZhN8STihjfBmEW9e",
  "key38": "2vWAhxWK2JV9ED1jrgQ2cE7Aw3vEuxA4EmEpZijkVdHsEjkaTLUH4VYfjzQNkA1YvaSG4syWNDujkjRxV8FfgdMN",
  "key39": "5MjEsYcg3SVZuZbzLBjB4ezAQoNZEeSELyESi5u8jgjpBGdK6CoYqFwEdofY1LJ87wEwgrWfocGuMnkwtr6XFzgB",
  "key40": "5X8wMCw3gTUJwuU5rDNyY5Po4UQBL6cTqgtxuNfHHEiN7X6Bc5MBvYQvvJpR7tcQS2kxsJJyRbYXGToD9GXHnQfR",
  "key41": "hNe1yvnq8k6JvAg6LEFXNPuScKUEBdyBjCbz3hbGYs18jMNBHSMJb4sheJBVxSJoXgKBxUxmkFj8zN7tGbu6cjr",
  "key42": "QJbSAEXgzcrgKoEhoPoBgZtXUgZJ7m4qg2U2pAngVBVGJ3g1yXJv2AUZeD1W2u5ZVJmDWzioxmnvbQaHbjcjPZW",
  "key43": "3RoQyQvHW47637dAsoLiW3iXnownV8ZaRG7bqoixJ6cM7DKDwEcxtjkJJoBpSGdt2S1uFtYfKDcpGqpkU26oaYFw",
  "key44": "5z8YQvTSL5KfguPncRtnQshSrtAy2r2AMMb7rdWDqMDBhyKU4rY7ujvkvMurthgX9epwuj8Hkj6XPNhtGkwxM2wU",
  "key45": "3XAi163EnQVquHvmmPbVVKWYzrCXwSSsiaQy6WdA2Rw4kDxpPxxT3YJEByBH8nGpxhZoivtJ5ngFd6rzosignTPi",
  "key46": "23uvKKrcrjXRUiS5WFN4L2ETVgBwWEgmA5WyT6ydT3JPS1rqgMVd1GhKiZr1QhminCo7SLWVEH7TxAopFTTZWqgG",
  "key47": "2rYKi95oGYGH1Xv1UnhcibVc1AMSD2BPKguifSqfE1wSkB5rc3cgNthRYrSQfm2f8qHeGh7Dc58aw1zHiQo7H4BK"
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
