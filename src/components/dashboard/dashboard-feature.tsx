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
    "RvFDA58tJ4wsqPD5hzCKkzYe4M1YtRr6jbWnYsXv8vxnbr3Xad4rtK6aTM4QLDwJWN5xgqKhhBjzdccXmnmeyEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37sse2EUnHqhMcEFGJLPUHqzVtkJgDWLC6tKEhAxwWGD5BXFL8ePzHMDEh47ekGerSJK1YekbWMaQZiBKHVBw33K",
  "key1": "dH8ntk8Xf2cm81iBrycQAKri9ffGhdNqooZzs8xR9iqtgruWmnajQaUjomMfw2VdDzwdT2WfQsYyMuFD4casGbP",
  "key2": "2MKU8mXQ1RfeJkxpwEhbhLr94Djkvhhg4viYwyuJ8z3xFuA8Ve3BSFjQ8sUHYqHvfAXcmAMqdDqSTt5FgSHottDc",
  "key3": "Q6gqT8ZAoZi1WqBfrTRQ6E9jgtA7aNf5KognmJ9FBden58VHBVC5TGB7YphV4DBQr3HqD5Rb7YHQpXoZ3XmEdzD",
  "key4": "49EUn9nAqyHZxK2XnThshwBWkvkFDqytzGqStJojjju2DmhgS63gbuPdw2SR8iRLUGagpf4PTGbKX7DYWBmfYyF1",
  "key5": "KMLvTkJQo3p6H2rHQXLHKcFDH5YTeiLyFRvmX1dgMUPqb62n2pviJKz4gT9em9LcAZ1rGpP8qkvuATp6YRudsGT",
  "key6": "4vc2HbqLDD4c4GJPuKbdAjV45LXhBRhTawUi8FVtfSNTWboiDrHiuWxbyev4hvaFNPV44UTnb7CDYEaZ529qjLzJ",
  "key7": "35e8a6T6JG8658ZxuJYasw8zeNxEds6oxMcZ1SVHkhoJcq8R617RQvw1EXEFz4rPorBekVhKazJbKZcMNNmSEd5j",
  "key8": "2Z2wjzKvkwWpwhP33y8CwxGsQexPBpYtcShYWxMpfeMW3tbz5itYzzEoCkq2Gfrhnus5mA4aH6DBqMHe7S3pT5Kw",
  "key9": "5pRL5ujqMTSRmaXYp9zVBvdDFqNULneimWiDT4qb3QuAdTBvTiuRSnL1RdBjbzhQerzsXYm577W8YpUmr861RE9N",
  "key10": "4ouuRmjf9jmQU87Nb7s2kQciqnGEGFQZLcZ22enRbCNrVfiSz9zBYTcTRAidXSe7CkRFQmNT5uvqhPaqUqg2F7Rn",
  "key11": "pLgbdCeMrQpu1gDy9Cf6vQbNyA3YtuFanxbMXmx6my85JNALfyJmWoChqSrfRrSspambDEDEFKnmRxk6HMaujNP",
  "key12": "3ePSk2VmWxr3BWyZfkZY2aB8Qw8PbhLMfFJJmDpKoxnLS72ZuKEweKtDEpfwK7dfkQEPMzN7kEsTN9iGEC362JJz",
  "key13": "5iUNYD3Y6sBuoq49XMNYFUNVZ2RG4xnoQJEeUK9JcvkSGWV3NVqyAtiCnRcRXvRFLf9cg9fH86hEsTFUjG1iSSPR",
  "key14": "5NEpVeR2JAurVMeKq1jR9YVmeqcD7ibcqS11CedWzBVgRGYzFojemgNgWzJSWdb36XQJGkTN3jAMMFuyd1Ub64sC",
  "key15": "48aF5LfWZDrT1tg7vmwYqvKEcSLbowCusGWfCLNNb8t4cMLYZufmtc6rDMV6kH2ombhbizezG5jiiT7zVd3X4j78",
  "key16": "42veAK7s6zQHnpqZwzQgRp4PMeSL7rURFxmwobz7fwJA3jTYx1tPJMuua19xXMbtrsqvq3hDEA2uwKwfb6cRQt9s",
  "key17": "jsC4cxEDop4EXH3YbAoZnGSbNsSMneECzMmrEUfDNmJ3jBZqnsT281hcZvjDtH16GtHdTUbeWxpP9TmrqSgjiJR",
  "key18": "6sDG5ngF6e5N5ZxbPJERGBFqew8RLVXzFTwWDfvAEL887Zse9qB2MLAQt5W9ViwxvbvQSDzn2cGWoxVJagvEgoU",
  "key19": "2QCSGFyVkiUEHnxjp5vSpQeDv6t3cHUCoaB4e6JG59KjNyyfYTf2x5hhPfmmUhvk2fm5ECb694Pmw2jmqnxUusKc",
  "key20": "5dWP4tnwYokYR4WbYDEzaLTJ2Xwnb1uvQpipQmAqq7bANhKANxA1HTNSypB354XKaDD6FF8MqV76mJFQBifN9kWM",
  "key21": "FFD4nXZypoVar1Wi14eUvM5HdZjGnyVmPSf62Vw5QsDRQDGekrXU2wTMFLF6LegbLYjBqfeZyMQtiYx4kyGQCDi",
  "key22": "3mexLuqW5JiGYoHo1cFV8LTHYiQmXo1AUoLRoJY9CeZXZ6xepofG2VmoFaqwvfpqTLSNcqvh3wdi3odwGCF7xVQY",
  "key23": "56WTumxFxNRjKaDmCok9MhP848hcwoCAHDfQkJ1DLvDi5d3EPR8tW7uV7auDuKaSYAX3DtM4PGqUj51joR4Qa5mN",
  "key24": "64NiCmC1i6sqQDFRYimgHHcJDTvkvHwbLVQ31Sx6W95k6tsU9MkN7uLQXhtdc8qdXFPo6FwJ55hYowtqbqLB579X",
  "key25": "3Py4yFkNyVWRw1cfMgtoDvus42b6gqPETXZ7aLSgUYjgSjJq6yS9XiZo9rwqj4mCVm4mfgxCeeu9WLa3io1gkEWG",
  "key26": "q2Yz8ngWb1Huhj6g9XTpLqrPGUk85337iJHAkPt5Ww4RjByoF3tyGhkUGXkgUs8gsqF9NHvtRs9ym6RiUeFQdMC",
  "key27": "4ZWUAtwTbP7EXhVH1RKDw8mLTnpbmQ3bKtwRCdZem44kNFW4vYLXSemLHwNY4ttgt5EUYx1ZxoGz6PJk346YZ9sh",
  "key28": "L1QXGPxpvChccVNFf8KWm5e5vPM1pAwnsMphzutTucpeSDAMbywQRgvanRK7fv3VJRt6RVHejF2g45cuyvqpfyr",
  "key29": "43F6vuLbfkxd5vkJo9tqLHFyMPgQcUoNmedde8KxWgVjeUGeFvQ9Xo9fYz7v35HGK9wT3NF9qRS9HVduB4kmo5hH",
  "key30": "5KoUoViWffikXheCE8KNusFpk73gg8uv2dPZ1kWcWvJkCkCdTqfbitTA83fE9WcedqweiKUvqYXjdojWAtY52AWu",
  "key31": "574bhHHpxRRncdATtqRocjxW47xJNapJa1cySxW2PRvTfCeBAPy7aj9adqHYdKWP5jsYftdRyT3NrqnE5Q93AZNK",
  "key32": "3v8KUWRrrefRutFSYbdmWmej3iiJb1zh7JGmcTiU3fRs91MaFRiYnKyGcrUG1ZoQHLziBs5Rhq7foPEjHricjb7k",
  "key33": "24py6cURwpy2NhrW7HqaFJN1XYRZs4xuNQhmzBcorZyFFt5aME5QdHf9xfzGnSWrgq7bTgHuAntdCfiVKh49c2hJ",
  "key34": "5jHFKetxaRarApm9oNQyUfUA3eCsBLrz4rAmafYmMGUQEuSNBvgKsLARWzQyKHedRKVHQYFbuceDYG3hhkvF4WYM",
  "key35": "5UbauxKiqupZcCyNZJvK6DfT72Z1C9KsTuaR8d6LVUzDjU2zCJo3ga2m3TUeMFUNfNLxzpGRXV6QXMBE3iiGPMW3",
  "key36": "mU8rAFssWKtA3HCsyYHnor5a1RRfXJgwPuziDFLEkY4tZA1AyQRaCWmFgeGXG6ztH1A7sYFe4thsJBdw3cEHWfE",
  "key37": "5dwfZvirah1eiTs7ESsKd5X4YSTpht7rcTAgRDrPDih4yuU9yLjzU42ieX9eqQZYEghof5s1tTgc6PUvuRWxikqw",
  "key38": "7y4eB5WYgV1tikhgbrLodUEpEEZbUnMkbHDxXMQe36nY67BEY7ak2haXvMkTq2DeEyNMAqxCbVKQDCyEAvC6MSK",
  "key39": "5YYZP6Vz1JLNT8amNHxVkdMpu4Ec9SSNL5RWZFy9qneAveUjRND6ct8daiAXCoZ4BJgqViciUeTuUTUvxdk86hBB",
  "key40": "SbTHMWZWpBdoFREtTyVgW8tFhugTYWPbv26CASczecSVGr22BDYNCtSsRjobRu5JXZudEaLDvVL3GgR3FGjdDzL",
  "key41": "3pujveb72rQRMDwMTW5SgHxSZmjsc7avsU7u4FJwdRY9Qc435xknHiEDrjAP2Z4cZ7gTqNjneN4hdi3DfFJDrHGa",
  "key42": "5WzAK6Ue1RQvUYcyQRYYwPDta9fTTtFpWacDJVSB5bnLG6CYPpCJYmWnnKsCRSygkEc5jWWRWkjmPvG5c69cTLNP"
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
