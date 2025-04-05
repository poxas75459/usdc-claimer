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
    "32VXRiS2sMMXkK1Yron7seCG2LwV4zb2byDK9mUgQJE923xPGH9mL2Jh6Zy2GEK9RGRV1utiFiXy48toVXMnG9DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bt4cgut7DJ5w9Q5rWfWYcy7JjuwnYuR32gaHhSqpSf8VStWwS5KyMWbYNom4fX4nfRWjqo4z15xieaqu2hvszq4",
  "key1": "27u6oMxwdutMuH2e8Lknob5yMeRTr23apPdpKaCR2hB6abQNxQg8misqCUPBhHPKQi56hAn7t4KS3SQX4fScgTay",
  "key2": "52DwUN2VrqFgvvDRy7eoJKA2PnuGCX5msoacTDErwhfMXK3vUv49xuQndasW1oD6ap9kcHJTsxn4nVHvqZ76z1sT",
  "key3": "3zpcdTAXGRfMvkmJmAJueg2zieoyV6U9WAgk6rqdbhgS4SmogKDpC7eYZHS1jHCqDFu2e6bpLnc8T1mbyEHMCHJs",
  "key4": "WHnR8c3iENMCpJCPijqzfD9h56wtYtBXcDzX7Dby2uJMtBL9eBfCDXTkNVRcVHSFtdYVHnK61FRE3pfYXFhbBxy",
  "key5": "2jAwmxo6f87E5DbRdmUPTUqWp33KgfpFYxYQ75cXvKa1dg4wuqWpYgcDDB41u3Vg6aWX3pU12beENow97MVYTnws",
  "key6": "5wm8jGiGdxPTx3ZxAT3NikEwoTZkbD3cjavExZk7WvouAcDJSq8rDqi7j7SGVhx3Z8pKUDuEqC7vrPEUEkhbyszF",
  "key7": "RzWCN9pyDav4j8YCYkvyyBeRtiW7KsZvfFwJkEHkdw69AUdHYaz4t1n5BuZJSDY5uXS4KLE9GdeKXjFVvRBS4PJ",
  "key8": "5fdrxLhbG4UmEM5t2LpkCoF8VrEz9LcCAiVZo7fYgpqxuRim3FqbEvKQGV1djEuvDsiuyrC7DohZ8vZZyH6UEjJy",
  "key9": "66ZNT5nj1xbEdpUVsN7fpHTD7VoiPQfkPzozkj1g77utzAPVPo1Qn78UQowrBgVNsoX6o9mUv1TPPNnTpe9HttLU",
  "key10": "2an8Bb8PY1wFPaKQnKvChEMyaNLWmgGP8nyxygPi9gTWbm8oQ9bLdHFXEJx3pUDSWif2QthqW2GUMXvdpGuqSCMq",
  "key11": "c8eEE2zvjd7QnJgeQ14vBq5aWWYw4gi9bXpseykmzjmh7jexiT4UmycwuK1622KeLgy1vKaNXebGSaYCzZxUoqc",
  "key12": "5J7Axk5V5tRSEX5LLzP3dY54359Hx73f2BUntFtpAN9pBosKPpx5dHVzJ5jmYyPXsazFeY6C25xf3ZGS769gExpQ",
  "key13": "2KzN2fxexhbRfDgXLhbZmrwRTdCpRMjcXB92QTBGS95pbtE8oFAxqUswryHnqVg82X4t3H1TTb8V9XdYdgcvnccR",
  "key14": "5NwjJ48oo5TZi6fz3UEyB4iVJ2CzqiLW2X3bBLVM6Cd3NJkveF1SGL1bzdAPBo3nSwZNjYbBhNJsjkFov7nYJQTv",
  "key15": "3NNcHuVafBUVMeyEJ5h3X2FEWEmjTQucEjepXiiuPPd9htj9jrzwedgKJcH1DTmzE4kdvy4MiL55LbkW21Ynk5Ym",
  "key16": "JFN7rKAyhZiMp3AMjCmyfATJ41FBoUbJkkA5xkbvXi4cULC1gWvyGi4YXMjCZoAr63b1suYV9ZbyKPTnpnqFVRv",
  "key17": "4vCd7Mw5kEdawEyeP4wt6HsDPF6unxQPgvx1AuQWAauz175x7QmEZMDrGNyTaGER5NVfQJEK3xDsGvqDwHiDrUCo",
  "key18": "3gLCDpsddgqaHKQPbQBDCLXBUTU7e6ZyFou5qx4W5wrzsXaSc2sPBUTDqaRSb28GxciBATfjqhfottiBfjrHjqqH",
  "key19": "26m3fNqdK55A31sTYexgCqzNjHmwahhHbCNd8FkEXeAZqV49w5qyFZTNP1W6kZ44Txqwt4mhuUoGsdpEPRXUPfnb",
  "key20": "5g3c2DuvQBa5GZ9NsgTnHNscHqEaYJ6QwawPfFbCLuCT8Cgdi4oYPojmxKscNxUuwJvFskWNbZpZRGLqB9YefpPm",
  "key21": "FBEbuV23A4mtdVmzA6nqJkuwM9aDvpHA72wRf7bc8ycHEquazMeA9frMuhxbWdrJjtRMUthE6FfkXkpiQqKB5fF",
  "key22": "9vrpK62eaUHmezjdmJ37Jn5mAdgydqk19gWBeVBc1sNa4rqfTCYE5ZbYcytvxEubfGwPqRCG7zUkDs7SqWUBQjk",
  "key23": "2Bk38NDw4JAPvMWS5cU1yCRNnCaNsacDTSx26KsZ1bwNnqeNnJbAyKVXyr8qCmfC9FEAvsWzGLStgfuADuF1LSrX",
  "key24": "4umNH5dEhiTnYtUUPC3AjgfD4qqbYqxKKsgp1eG695raddy84dLSdUn8dz7pZdoymjRECwyfnHcoccDJKU5W5FR2",
  "key25": "2U1a1MVCo8of1ndTfFHBoYdUtZ1PqJKssoVuFLQyfKU49wPf62gcFy6WddJFcNJGVzpwzPM5RioYkHZy2VB3PUZB",
  "key26": "2fYBmumJoURxPemYtarb46PwYzDJgNHwBUL1Skfoh3m7Yn3gYB8cRpQAG2HKRtFuVHB5basqGfWzcVetva8RMngh",
  "key27": "BNvSPwiyJu4Kcts5yDy2ntQMHPDrhj1HKNsBLX2vKoazS7v73ZVkdMY2R26i4YaxsGVPxvY6WGH4eQyLNMaGkDf",
  "key28": "2i6Z8Tpke4Ln7e9w6KXt8y87htAqFfho3JqqEVzHboLEejQi1BZKcsar5Phv1Vxj4mEyWEt4qkQ8xC3oGhaUWnjJ",
  "key29": "3BS31sWuYdHRKh4xRWg71XUpmtUTNfdqav361VGHUArLxGREJQsjoFVW32zg3bKJZFktmQXbkTABdsiTpt7m7u86",
  "key30": "4f9xpG4SoJBHJ4wAgWydjX2UwtSgE8dXjahbH7cn7xcSptMYZGaSGWgXrb8q6sWu8jRxpsnTSrvKZH91tXmDd8V4",
  "key31": "2Jud5tZTeEL4FY4fjg8EbHhBQgjnFHK1oKaXiiAB2BjQqdRVcj2kc2cWjyFCJAdV9sLjrFyzSWR29ZUwjd1oNPbT",
  "key32": "5r7CkYRPL9ncMvUmS7ZHc5w41nxsBsjmA8Kr2ixUmj5ugkup1tp5M7E6o6s1NEAxa7Bqt6skvDGGhmcuq5autokz",
  "key33": "2Pdmm2KZsq2GNwZMHsfsPjgBSNHGU7upywuLo9xyky2KKtqVBF4i1nx7ugJ86CtaoLzBuFKuRqeZroBv59B7D3XZ",
  "key34": "kRsPcW38TwrzUyPcrK8uHLncZpWotc57vHjJfVL7MYzde8XvAnj1CSSmWNbPEnVg6YGkMTbpnnSmqK5hH66jMuw",
  "key35": "5zUTCyE5JGnM9hqV1rn31h43TvHsRKfvSArGPteq6a2oz1cUmfdU3bi8zE6xYbao1t1uUrhYDsu7Cwp1owCRnr8K",
  "key36": "3fv4DmqdoNoymxmU8EJqvsJBvxAJ3n7adN3m2EV4DdeJA1zk8wdfcsFUFuiXKck75WzZkwv24edUoJvX826H59TT",
  "key37": "52YbPv8EyD7N84HBBRLb7qZc4KNfFv7agEfLsWu5AtWbAx1MaA5qSxSGFBnWGgAaE5sxCh9WD47BqVeU8AgoMnjd",
  "key38": "YXgt71g6DuEK7cZvxi9noRCKXBb4KyaW8yj64EH3yuNYsRfzsbgZEmehj4sJ8vicinWu7FJVGrEqP6Awk2XNWWD",
  "key39": "5AyTDAe1mQCaKN3mwpFwf4z2PUifP96hRs7c4EWmFtVeV1KU3Hf9zYfBTjdyLMiQqzEjsVzRyRWMgmfHv7J8nYas",
  "key40": "4DoLS49TUgrgew7YrSiYXZ3gNNJZaV3xDf1WRYmerbMXwuJbrux6eiwgZbuWUNtqzmxy8XE7jqJGAKuJpzukdiKN",
  "key41": "9k6xC4TL6MbuJD7gPr3rzrhXu6DKssvMY7AywRW2uTFf6NJ8Rytchr4ye2jaiqHPr78TR9jLrzajzZUMRXmPdW2",
  "key42": "4xy9CAGz5Gimt2bQpRLVcAgtZk6paMpnLaENnAcLfvWJ7uZS7gxFZQUxvUnTeyZb4z93wHrbshy9yPpRmTCdyycL"
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
