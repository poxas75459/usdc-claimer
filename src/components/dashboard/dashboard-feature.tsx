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
    "5cdN79CGFG1t27ewUwCkvSidFVv3nrcGJdRHwymruQoue7Fqp9Q7VhxcNq9btbqnwEiqsgpAb2gjtjLTgi6dyp22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXQFf7AHTrWtojZBDVPmpuxptviNqXSQxiZNhrYjwPs2nG3ycqyxbNDmHiixzLYysg5H8FJytoRSNCikzU2Rwr9",
  "key1": "aBZm2bEnLcowiZFtec94H5SDhbPFa36W4LyxbZR6qNDBSPqjJ6AKNkMqRLbYNcXRE1J7XjaLGbNYJhpuRP5DVcv",
  "key2": "3qDZ9NLUFJmUz6cNL1KNKTHZsSipKAxF8eYnT2YLSkmZvbfMnn13GkXjaJBQsMJUijBRFogqQaCGFaqW5MpborEj",
  "key3": "49fFvAN9kQVno38WMaNsxHCcYUXyEYUhbzw84FaLgvGN8KyntN7YL1c76s8HB8skEVykNEVoH3hFrr7VythRsG4J",
  "key4": "4Mzv4QyS7bbCar67zpAxu9BCQ2p9v841LzZNKk8XcAU238YabuYCiHuN9U5w8hVkfj9hP9WP7kvSezMjHvSxQZQn",
  "key5": "4MZzJLZUDMUrL8V4cfBCKyr9SMkq3LyrRfFnJRm8vzVc3FNyAY62QjmXJQfZG8BDvYJMrPqXNk7ZJ4F1mYhTV73M",
  "key6": "2sEgENdnyECKSBrwfT8ftMZdnW2tpSsNpmm74XH9MVEKcgae71N4FMsEyQyoBhHb3k6rsiq4wTeookpyLpyAFkF9",
  "key7": "61YhYCHNsAwLDSukZ6zGUFExzZzTkBcoNXtqaP82tGcvYABZpZbHP2ripRjm2HCL8ysD1GVqYBTZFpJ7y1XYqQaB",
  "key8": "3SX4u24d1R3ZfgWbDSzVE11mu9quapjd9gKJrwFXucc5nTNYehkSsTSQJGguBSDGREeP2TxmnrNRFf2Q4wgLiJ92",
  "key9": "4Vecf98BzccGwD6tgaWkS1AMNpW8sjE3a7UXtd9vkxdZ7v3UgdJyCN1Gomv7ZhzKQueg2VkSmZNEN898868aomNZ",
  "key10": "2JUd1gwnDoBhhHxzzpENmui8862tAYmJhkHDmzuPRmyGVqxsnRxPTCtwVE7erAvkxGyegJxm7rhST85oetTpD2GY",
  "key11": "4ughKJJKa2cmYjb3ByfDvpsPTvedg7G1USwxRmq7LL86FGLiwL4My66AfoqwTNUkGDuMzQXPTDH4oEL2GsRjxQKH",
  "key12": "29C6Y1XhmEb535BjZiJ6m4sEpcJDSStGCe8ojzRCCkhujJawyYJp5J9MEppAUJg12k9EVivUKGvqACYXEJurvc7H",
  "key13": "4X2LEy5ZBPdAXARCrhDB6yNH8X9GvE6rgXHQ1dEsVWimCy4nGAFFwLbbYLjT6SxjN57jTgnKaPaCMQpgY35th2h5",
  "key14": "3ugoWQ1sH74ZXGEEJzjPy4dmH9kPymJwQekD8yb5Tcu2Ax5RT4mrqticTryw5s7yYDtqosqGJVygAMoffQSBHcQ3",
  "key15": "4BAspXPMe6o9JZYdFNtMZExdFvFKGntx523djJe6ZfKEvFr9xhiqzs447J9gcZ5RTn3WRA3fdhESBiqcuStTuXiB",
  "key16": "4qckvcuKSWY9ZNHspekMu8rvD2PHJ3KaiusKhf3NF18WqixHkEGZdMizLGNxi3kMeuAzQBxP32vbnJJ6iYP1LeeT",
  "key17": "5fuEAtChxFHYRaf5ds9qTyGjnT5TNkb6dWpVyGPdEzgrGA1nTRbkMUQJp8j4GRHGJJQxaex9wbfmMwc4AhmWnu7H",
  "key18": "5t3ZS3chZWPZQZYQULaZF2Jaj3tnzRmsk4jK8ed15Z1JYQZxDij6DJiHnrjfSn9eusKmKr4CUcYuFtjnTxdiVRVy",
  "key19": "x2FhC9qynCc1Hy1NayTpEnPBy14mPshH6zZyaznw7r2fJJM5Js43pPrfWPrGSoRiuq7dLFLgVbBkXLxrB4nVxXu",
  "key20": "4YLLm4Sxw4NW4wjXCiApGNAGyS9ygzRPEePdDQQbtXwPsS4kgsvXLzNNtdsNLCnaLZyDECvZootMz3fT7iBUAyLu",
  "key21": "5XYfqPgk4nFfoefDHgdthNRzUgicgBWTGfY585WLuCt7ugJ1Jr7tbGyXpZ9bDAf1xoHRrMBuBY4BG7ATPDE4fQHE",
  "key22": "5kxvSzJBJRHATvNZtesvoz8NVWVuCdhfPfjYdDH13hsweugoBpBJN1DXy4r6QjF6jtvBBasJeWPWi1CF57HjXN33",
  "key23": "4uk1dzzAHuksUdGKvavXWraVZtXT3FVtkM7R2WEPZguP1cZJHQUjcasoZSUJi412snVZytdNFRNnWLrgxn8eq9WB",
  "key24": "2JBbGREWmyj77sCDGCkvdgiQD1N26QzF6Qd9Na3eRdLjeak3ReXmbBEEV3KxnPE1PW6EkzESnQyTaqJmfJGi2rhd",
  "key25": "24Z6UhyqQxqo2ihgaQNMR4JWDTaZTHwiDHYQbReAvqvLYtNZtLzn2hgp8Qr6aEF9m6peRYG3zjAdjsW6gjQ3sMDo",
  "key26": "3izmBZLunWJ1XpU6Gmq1qRQcoF1mwTJMFgAPHgtPJuNuYqzQHD53gCgSCGChKq3YhXnC3gZGpJVsXCLQnkPx7rne",
  "key27": "2q8gEQKoZqbknZS62qXcEwRT93gC4bWmkK92TjS4YqLgj2rfYwUPam74M2Hs48gn1pCKETEPM4NyjdLqH2qkF7mE",
  "key28": "4Yz6Eht6mTRDLyjCAHeBE2A1zauypTF8QthjhBaJopk7rhZ8vzFNrajsG7JbofEt4firkEBz9D1wadQXFaJuQPPL",
  "key29": "3T2P7Ja144XBkoceNwqKg1J7p7HGuabFpD3snui6pM6YdAnpnXkFGmuHTMZzscLq6oCVfJgk4JyXkEZUho9hieTb",
  "key30": "3zrHEQcpzGsPBdbc4CiVh8NhncDtoXELKs3gHut7XMLaLsYV2QPP6xDdD8GxZPz8P545YkyPBPdDyfYcYAzN3HyC",
  "key31": "icmB3gTVAaqUDGKGvhe7JZswAnthS7UQVgurPb5PgC6hwDA9H8cCvTzA4ae5ib5YqmMnWWrRV5oM8JSW41dy6zd",
  "key32": "5jFEn8Qj5eMJ7TEnmzQ9BPooS2XsRWdZbzUp8J7y3wc3NoxxinYjeoCMEi9eFZoe2FBAcbZnLFSADkPFxuofACwx",
  "key33": "2oDs2TLNxqmbfxtwJ1LSxo7mTPUP5rnq3dAhDPzbyKw84wZ1cJomdT2hDoZFvfDzbxkP6Lf9gLn23LGKGLAZi5fc",
  "key34": "5Y7zymsxKbvs7qM53Nkaqi3pCfDVwTvu4GmGQ3YgRNY6Pa281fDi7bnuvMCnFYZJgmDcstMzKJ87g7MKpxGWJ18F",
  "key35": "5KRYiE6BSyRSVJxkqFYEBLyb7Sm7HNhiVMSuhoJmPzZbnDPGNBu3ezpHcEKLf2VAT2YLPrVzCcQ5FRVhjdD6hSFU",
  "key36": "2Tg51V28SEAgi1wGFk69EtV8JS7eqCPZKmpu8PUZVmocGVQpwT2jjyswpd8uNHUzJWVqjukULwJfjLMUnE1Jfy6o",
  "key37": "4TstLBQVgggrzoz8W7DcStBWfx8eGcViU9otyULKNx9FAdpcMwSZGa8oUkGDDvWBAPCwimo2xnvU9wAqYy6Dkbnz",
  "key38": "5uAJjjghW1mpicpx3gEDaeePMxkPhcZ6w1aJ7p12Pw1EDmbwzW5c88NwoDmPeUCtoDzzvn8f9NYRBmxYECkoPuSx",
  "key39": "2ow5LCFHEcL4qwoqXDuJQGAPcYqpoZXCw7ApgYD9thkyE8WPxKhRHsXRSz4dUAptbhEHzr8SWhEBVV3ATKtvnGnr",
  "key40": "BjFKk7WQHRfYujf2s5MGadAgC4dNuJWVkbgCGURZvT1CDp7gjxj6VNLG9A4bWiZHXnmRD3DVwu72ExAEpTFsmzB",
  "key41": "4tjRsfXxbbMTYqe3MLHUgXWgbFh7ap5PtCv3jVQDCvyU8V8w4D7pwzECWDwwuuTWm9ALNotiKXr8LtLry1zMscP9",
  "key42": "5ndkpCnt9XGW1wU5VwQww3kbjewHSWFGdP8zA19pxgNqTav3ZRJBE9FY2v9JtfRJ4g7gUkqcEkUv5LdMQkbqyXUj",
  "key43": "649rAnJ9WrXLTbW3KriPMMxHkJ5FByeFLVnSp1DwTHkP2o2T3D1maRhfySN4nZgaGUDkYXCaXjGNgkjiHsuqKsL5",
  "key44": "3N3ryNkUyz2Yjg3Uf174nNkM5GbQ86quLz1AZWsxctd4M774hg6BTU3VLoQxAo2CeqWTH2mBsxZpEzZbm9Wvnggf",
  "key45": "5GnnUckkc7RgzDDKg6ibg6jxUHuishuGhBbbq1MzbujHE559JaRPc9xCuiW27CFB7ofcD4dMBhAehbWJgfPpL2CB",
  "key46": "VTZ7ziQEXLkYtomBTvsgKus2dF7DaA6g9pA3yu6y2tci1tRnpCHXvGAKwrqYHohBv9wVf5G8cNVyyS5TWaBSqho",
  "key47": "4JJ3WsnRJ9p8Wi734H5RS8iFbP6WE3MCEkRSQJ2cSM3v1FQLaDMrwjSTeWhpqUvhxAgQKiwZTYHhQh68YMAmFTeA",
  "key48": "4quMxwLHbeo9pB5h3psNSc2v2rLiQGmbRnLfCxwGqj5oncj9FhMYU9fW5zzVkEQQeAyg9yJD6CCDEwTRBDeq6LmT",
  "key49": "54EYiwUAbo3o4w9dj4DMAR1vn9rxSaXyNz1tPWM84FwnZVGnjbogEVjmsCYhfY1KPGVc5bg3v7b16TjjhB6fgVbq"
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
