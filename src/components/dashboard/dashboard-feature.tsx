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
    "5ugjL83hri2yQuWUaoyZi2rimCBQPMqkogqgqCe8q8ANWFHE2zDnYjogB9V7SxQPww1G4KuGpHfpWD4ACdx3mP75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5MgHsaUn7jNrjkw7JD62TmTE2wuLhmQZPoeXMDLnKdCJ43GEsPXGPcw9pUTKFqwYuHKVhJkQaBJ5zDuekNeEXR",
  "key1": "bxVEajSFm2ZMFfL2FNfRRpXnserbM7AHT3tybL8Vrj6952uU6RKnYzSS385LFveZ3af8feoxpEJimY57VeUKk1t",
  "key2": "2sPKJDACDkXpukHnakhkcFAqKo2Y3wVjv4RuByyodfHcUFyLUR73J9DFiENnwBRb3wuLzLHhUg7GafF8yFm8qBuP",
  "key3": "aFKtEZJacDvknVimjongFRhSY8qiKe9CskxZKFSPiA3Tb2AtZ9RGoh2qviS3W52R7eEbEwuvKrVBRdKnrxyMgvS",
  "key4": "2mkwcVsp7QCqTDiGQiMbALQntqjRxYmrUR9TBaRibcdjAH5BPKDiFFuhcdiXE85dMoeUDXtQSL18DVoGBspFtp2",
  "key5": "4PXdTJBubS3s4LqqqdwW56AAZ1wG3HHCrGkh7sXbkhjJ3CrUpBhQtc7rFuyedNxxAsGyA2QZzMpgKYssMxkQxHPY",
  "key6": "3kxPcweDfxSZFqwJZ6YfMSn47hn39Hn6Fy5WUCD4UhKgGik6ZmBd5E7RSWWvkDkHmaoBDrQwUg91E2DHf1QrKL4v",
  "key7": "4iwLrUdsqqw8LUUe4WCPj7Ur8Aw9w7cvFP4BvJakYJyFy6N5GnuTe1y25sNHjjuvBC1KZD24cwBmLHR1bbPoPrUB",
  "key8": "5gPji9S8HjY9JHx2Bx7e8rV7w8MVYBUL5KZh8oYFhBZKqZ72pwQ7yKdgSxW1PxqGrvqXENpG7yCym1GRWQ1E3835",
  "key9": "21iLp5jcCDPgiD7KEM2NdHuvXsRNW17QGLaHM1QAzhJhQQzUqybfqQwTs7CUYt18nEPPQVesY6SnEykqvpd1hVrm",
  "key10": "5praGLanmEFqKexr8pKj4KpQK6qh1ycV5SE5vNr1U7e5FrUxTaFGRPPCQVw8GJyijFZ59mneiHmrKrsSorRRETuM",
  "key11": "4pKYM8ozxa5heSqWqVJ56uXxr81PqtjTjg8BxS8yaAntVws5qQW3D78Bz4hrnUvzg9qwP5Dq9gmLwe5k2HATSX6q",
  "key12": "qeNDHJiEdqZ3DRa6bPRG4C9vhGpTpgoosPRrFf1JLtz34Sx9iScJWaDcDTjCVU5tb5JXQZxPbGmqR8CPEmQK9Sh",
  "key13": "4QX9rbgU2vKWjR5Sm66XM6DpLj25jQTjqR78NRrat3qbXLweZ4pUypmVq4Hc3FYKyEXRmz6Zc3aQ8321akt57tpq",
  "key14": "3KAJpfD9CfH9piAMV4TXXG4RDejG1akYWrHmBGSmUAfvzGzVxG4jHn3QsFvHddNatvuzHeNquwFwFSUPxQuQX7ZD",
  "key15": "4QStxrrmreWdDRkSfLiyFKqKnZzoVsyXWbmv3D6vSgqRZ5W48KygbztGiLPgVt1mzZZDtKEoKzYcyrGy6G1bUkrW",
  "key16": "5ek6q67nEDno6k7P7cTtCBUShzuZX2MNwDJPLCDdKZbmEbFAdptJj3N4XhxSBiRLpzjhWfoYZzb1cmYdg9dyzwQM",
  "key17": "45gt5714YockLbPv7hsCefqNM1dWr9WMu5avYjjDufDi3pqcNRSjvu7AYzn4GMk3itqERySX8wEUFAZdiz8MuAnB",
  "key18": "VshVrt2Jj3g38rqMEhjcqs7YCxyehphTwj5HLutL1pBznnLK8juSVgunGiiAXqstz21o3JWquKAynS3bgU8cQSC",
  "key19": "3fthZFu9B9xKg5ddsy1WMaz1HBb2k3k1u3U7prCk2MsDAGzXRJRHaFBxLBaM8cEkRdf3NRnDFXa13i3Mw6hanhFx",
  "key20": "3zwkgPKtvNKdhS4hrg3u88G738dF2fsdbjvjxewbKzxuGqryS5UbWbBkZRR8HMqi7nXRXutmwouLoTUfXrr2N4vF",
  "key21": "5nsgx54it7CdmYuofiaJsKGNF1YnW3XgMFmLoUgN7ivEJG6Q1Nzy5KMPhTLRATzjaLeJR4Gi5GWarSWqSiw8xBFR",
  "key22": "2p76toD4n29yDxixSN3vy8ERq5xmhjePGK6zTRkz2u31gVuATcCktVHCajYss374MG2SSiWaNa7VbFjw6Y8KRQ5T",
  "key23": "5dk41v7mWsi3CopeGpjeKERgFGwVcyGdxFnGBBfd8ckgqiPWEMzrRAquAVCSN5E973pecCDifZuRZHmRL3shVTJk",
  "key24": "5uuEeSF24eXGB4PqbkdaD4xEF2GeMWiiu57FgwLFcoWhvUAL5B9rjztNskHwPttMkQuSo2tWsEmcmdupv1p6uypM",
  "key25": "2LQ9imSQbkPgnnCzTM8rPGaxZX46UmKuk7vkuyTx9sYfYNRLWJF6bvjkFgqkkkRWo4kkr5tZnTBynGRRQEbn3C7o",
  "key26": "5pJog4S4HgzkE13i8JR37qQvDEPj5nCXhVokXPuxjWW3APf568EuJdRBTUZmHm2pXjFJ9s73LTLceGoQhS58oT5e",
  "key27": "5mVc7wiQsrMLwSCf31yNVjcnqouqjSmjbJ8LuxcRSFB4bgsKUkWfMbA1CA4dhMpgAmNuiyqZ2DfuiTYtqu3iZnFM",
  "key28": "3cmb92L8eLNdvAHBT6AvXWikKNMAtv1wmTdZckTGKuCDegcqpa1NeDASn32bqoy262wBBHEBh3gE8BLp4grBWiVE",
  "key29": "5mUE1LHiReu4LRDPr8EGWMWiAFjUctgA4BxpQqsTW8nHBRexKpsbaCbLym2EgZNECX9rBPjrrZXhEqT4UFRwFHvg",
  "key30": "5RLFPZ3VTZHQweqgNRR4cyfVanejcAXNEvxGcV22KTSALrGx4nQy9ZSBb87eks9cm2gwQSVnhFUYtrPuNQbHbQeS",
  "key31": "2Bj5btizUSix7yX171woRQ2w2QrzuMMuLoqzqi4YkTax2HzVuSziQRS1tUkRTEunae6PU2u2ELmrNRxUN8HdFdT7",
  "key32": "3HHwvdzrniQZDMRfaBrA34uX5RR9MDKgggYwXSeuxC9XmJyG6Rpx6Quyy4voMZb5uNGRfWVxBE3xhox1EQYpfS39",
  "key33": "2QScCCJwSPfQFgBJid5GDdCsMGAZ7Ef3JyrjToxseKcwHGivBjPvLkPBF4jMXFuD3LJ8gC8DmQHofXMoa5ZxynPy",
  "key34": "134tNFt2ZkPxAWYdzw5ASRoAqfw95hv2NT4wsaCvXKrxCkHYSBCFLngx71pp9iQcfXoRTprgmPjvzyjN2N52LdT",
  "key35": "37AxRE2yKd2rwYECUYXkPS3Ux24kP7yWHvBNwb38bkndukBhhaz3495fYiRUZi8R4sL12PpG38hAsiAf4K53k3tP",
  "key36": "55DAHxUQxavhhMV9rkpcZfoaERLjKJAMfYs5eirdKCnMeW7Wy5CGS7B33uQFZ7TE59PbecYFCeRjJFmdto4JPhWj",
  "key37": "3P4Xexvu6py35eRWrSNCmbaR9b5kSxDjRaeT1wwz3q1ZuYMtbjVapFZmxfMMAL2RP5s1cC9rauLpvMwaJ2aoBvui",
  "key38": "2EPF14mAPvYwksxhXT9PHCsAkgBRW2yETRf8Eod5L55nry2PrUH9BUJFb213KiJq2Ytjmgyj52ufe7BuDyRCQqYS",
  "key39": "XETZW9v1pdaH8q8v3P785BdqFs8ZcniBiEfWPQy7mkJPpwUNJYrHt85MupMxPjqRHTwz3pc2scw8Rhp4AAGyCjz",
  "key40": "8FB7TeXKoSkasEyv5xH9k947xnEpJtM8o6UCs5esSd5BLBymfUDPqMsy9fm6VBbzVwBLbJwEQVrp8evYA8mPZUZ",
  "key41": "5kABiUmhZEfvLXmrnHkUgZRKmpnv7VNgBkWBVoQTEeeXEebD4DD1DM2pSntiqYtVzHGt7FuRMch7k51ijcrtx5y8",
  "key42": "3Ed3sBXV5FLV5vGdRmwE4fW6ci6voYKkxVrdDmPATNBRspH4qz66MsxjkD7xMbhqf4A9F4PW8DzbtUHLA49K9JEu",
  "key43": "2Qn1PsiJDPonMhGyR6RGi9Jh8gcKGxp8ZzavZ4cjDWzHzz9Xs1M1ZACFNbKS3Pgwe2sz4nUfrgHQaR9KHfGkcC4L",
  "key44": "3q6FhToQG79sfBryiFbwHV1Zz9iyyPvdQVBoh7JsykSkWjtpmvYZzfH5uD9AZHzLDieWrVCEJ75Ehfi4DQSHCfYQ",
  "key45": "ACH9SuScwSSeXidYSsBUw76xYrnqgWMwhoTGtk3LEpVy4fY4Eqr2Xw8Dadauhf55nWJf7T2Vhk219PSwSB9WPBP"
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
