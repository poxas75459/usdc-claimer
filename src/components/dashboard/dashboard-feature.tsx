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
    "3zzzcK9svu1ezVriAve3Q96H5RSddE6p9XXfrGvsheMnuvqXgqrxBGZisZfzBSLFEijmFRxGtbs8nKvCbyarMyDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31CKJesLtcLTazAWK21DDgpvG22xCnWQhuNCJ5y8aVTJMQdiYc17QLfyBedWiKWsMW75di7yHztnbKXrC5g1xxnT",
  "key1": "MZzKhqmPqaR2Jh2bmnS1UxAc3rHAx8KwvkvWJ3PLjyUzSeC5Z8V3djd2a3f9cZ8gEgLQVky7dPHTtpuQyF7LQtE",
  "key2": "3x1YSHgnpJRxgyXr5wtby7mWqMwy78z5NCc5nnHd6aF8eDfRyWUtNTiucFGFRgG3KU6W6HffVhZD2BbJTdZV3yAW",
  "key3": "2woXMpmuNVXeHrfPXawfqGfVy4yi1a5p5XcZqpkwoLmquWTGxeTkiaWLBRE9wYJuGpviBGovbuvrcCbB14fXj6dN",
  "key4": "4Dmkac1HuthC4NAfyJsRPwSiSjcK45UuKAC4uPvhsgy99mYQwXxTVPrSpxvCfvH1MzgMXoTv2fCd2X6FjqNidhDf",
  "key5": "qbHDzmiQKwhpDGjWzQ95RmUt6Dvb8tC4bDXAiWxVJVusuUgb6LWa7wmHiYJoija9KvPXZ9NWw16orPsXvk3dw6L",
  "key6": "5BSMQG424XrQQqrwxpfejd9hEXjP8j5Ux3viPPWDn6FFFrhFeirzTFHq4G2R8KDE46tTDCCa4rQcNe33RPHNJVDD",
  "key7": "49DH9pDhyf8FabtP7nogFggsDNf7aoi9zimjwhKZRqFaZyQ1J4LThvuejPuLDWGLLn2y9izU4ebrLaEmusFH7HKh",
  "key8": "4zcAgu8ChPN29bZ4Ug5bP1Wf9LQzMG9SF1NWLftzL934Vtvg2F5mgteokdTDzT4bUKDibrnuha2E7D5spz8SpZdV",
  "key9": "AuZZvTZA4rLaxHKtUZ6ui4oa3RHry1wYF9TihEhXymWayk42jGEYS5RzBQoHYFjNkwf6tCXsuPAnPcrxD19QLxT",
  "key10": "5eNM5Bykda6DnYpKfacxfhFSi4rvySpsS8jbnRUVJ3hEKQzrczkWMdqxWiuKMc9DF4UVgushtm3cEnZV4LUMp8oY",
  "key11": "4jDqYRgqY3DfvAZLvuhB7XDzUtswv1wP6Etfe65oj2VzWXyNaHAjouVcaAV7KhTVoCu75xCgD37a3H11dLyVBQfN",
  "key12": "URyhjvGuhU7UtwoQQGFL9Gk865PwQGtjDazkagkV1h2V4BsLvq9CKyosPsrgaiifjzUSaQ8e67hhhu3J4DD2guT",
  "key13": "4gVmYCSY9wQYfKypL12F11c84nhuq1yTdiE8JqAtj6RbyCafSWMzDgLQTjSwXBg4pQsdoRsC8xdXgFk7X4fHvSpa",
  "key14": "5k67rxbvmToA6keETDHSprbZWHx5iZbnsKt6hosKk57gZvhj9Kaj4579RUwtgnHuhC8X8e75HKPAqpshBTXvNThz",
  "key15": "2DvYXxnRYM8r51Pzhe9zLhXQLBmHFBRsXkSztpvnx7koH9x9SnMXrBqkaXp9WBgdgm5oU8JF8GcAix58DibFJaF4",
  "key16": "4ktcJTVyHRBH2CxXn7wYg96mr7kZComwV2XJnuKw92NSq35C7yXgMGntfB2MC9HAMPx4zxp6ahj94722RMr7Kiy9",
  "key17": "5AK2fTXzX3sQhnLLtKo9xuLNDdSNy2qCnXgzDuGfmXypxts62MP5vc1hSR6F77j2CiDemX1aAEbgWH89tx3r1Chy",
  "key18": "5BSoqYJpXRknXF5e9a2ffi7rirRAqJzWPaRhN9JknJyRNuFxMUZvb5E8JEddcTLBb9Nu6ob5rq1X4Aw4KA6YZJpV",
  "key19": "3sbMKhxhzn2mXm1NAQirLYt9eyChQCPRrkecHoJKFytWX1T9ogXcB8RsLbVi6cpm9HFZFvRYVsCJnKJD1ChtwJDY",
  "key20": "48VFjyC3ZqvFJRRJVnGCKYzgW9yuEUR7DHuZFZowBJvAfrFXfPHzH7eGXAVKP93YwZsttpnpSdUW9xDPrMD9VbDD",
  "key21": "2N7Em7kQhiu47eAdCGw3LLzx42Y9BHiEQRUb38XjfwFXDKADvCDk8TuFtgriEPUEiC35XAcEixNGJJ1XebhZVbEx",
  "key22": "21hsbTRaqYK3ThxLgArw4xPZzN3nQBwTFEchGn2KEnb83sWMR8hrQaFjN7DgwtEJ485p6TD5UQGGEevRN2KSj3nR",
  "key23": "3Z2HwdTuwUyf2ifkk3713Q9BjxN8kGazwHqTYWhWJkqTh6hfaXT7TP5Ax6feFb6MdYcWfDqiAJsFGqLZ88RZBT2D",
  "key24": "4w7DJvVXmbguBfbQ1BsLjkdduKpZ98gRU82V8WQCBt4uEn89NZu6z2AjRYSSoxtHF2DSyMAx2s2jGxowq9YdVPLm",
  "key25": "3MeBzZr3MKeJVFNN9UH1X7gwvz75TDrmBuBpeFfrCHg9Ydv5gQTLQgqfvfDmEZsBq75eSZ1PX73GhRxJ4u14wGob",
  "key26": "VeVCgjYL8C68mR2VEmQCZGxQj86QXy294SzyzSVZnvx8QqXZjKu7JQf5TnpbcJrpiZqg4q68BJqks7kdGSiGY8c",
  "key27": "3qirh7CuceiUbb57D7axdinLDSQG5XmoKwA8DS8MPfQWMmE8BPRai9rcALpGrjbsGY4NrUHyMWKWVen3S6Acu5wL",
  "key28": "3enyeSXYguVU2tE5wtYfUfgLfo1Y2vdKnGY9bKQ6265RMNZov57coH3LDjNoc5BZtd47K9VBJeEYqEDuK3mfdxqY",
  "key29": "4ftZem1MeHUM5wiE33FUiNCPW4KaQUV2Lzj2zEEZHM6JegSWjbokVNuGF7ShTMAMmZAmUWRgRoE6o4BprbVStqfo",
  "key30": "2jD5mwM1TREVupt74PazjFG1zhkZG8hup3UxKXKUQv7kVKAfsfwSFuoRuCNK2mAPyZoL9xQ9AZbVAsNrNbE9b2VL",
  "key31": "5d8Z3CGYSd8JTrfFVNureBVZ1atnV4ebwcAtPjH22rbREYUyB8EyJjHNzQwQctmBWSym1nzFKAGwS5AWCcxnA8fx",
  "key32": "UbyUJMd7vVduLoCHJMvvuitBMwVPCsQ5jpSFjvKedbEetGCeH1RaXXcHaeRZXcnkM2dzDfHXDkrTbjBDUFm9ZB2",
  "key33": "4pG9WmHh34XbVYCNDGYnKDJFn2QxFpxtUkMBCuYyDZQmhC7Jergd5vYeswkwNgJQTH1mKHJXPqhNz3jk9beCJbb5",
  "key34": "3EPFd51SeWqz7DwwBQL8jH1NQt7zWJcH673zkCETSQickfU89WrRqWuVjvrSwcQdmBkttRj5sWpVqTRSQqXezvSF",
  "key35": "2no5nza9kT8omMjF6U1fXHjPg6wMCXXyJUorc4KbudPdRnyB94mPYufWCAaVvTGr172WD3m9vzBTsavJo1eigjfb",
  "key36": "64XhiTYtnbiVX6okArwNCECwnvrfgGo7FXWWFBYcaxrnXUyt8r73jrxvtjRXmbds5z5AV1NyEA3ycSxSu8YSjcxi",
  "key37": "3REgZXbRsH9w2BEPxPneK6z9uqfrmUqA3FtbitzMyPJ33MBjC3ZhWDKN3boWPw1EFUYxkJeNygRLjuUB15ogNuq8",
  "key38": "24C7LJ13aTn4WWWfcw3gj5Ykp9uhZwUGbXV7xJJj32CYQfL1mLQ43YkFPbnrs39XUTJ5zhpwhHjbJ1xZAMTsrZE4",
  "key39": "5r5joJQuXGBExwqgWre9cD4AuqZ2rHn4tVWBHK7TB2a8Xg8KbHRVN6B5ADCegHBUNUamoVQgZ9GpBw44ztj2qjdA",
  "key40": "5MG38rVbojC63ZuiTXWsBkCuFaTpM5Y39kLHfPf9QHmfRGjHQmmkvM3kySjk97BwdV1nAbq3AGHtWqA4uoRUFjx",
  "key41": "bNMVeCnUvQ7NGnmVJABECPFs632uYvCkLzeB3DSpAWvRzFWVRKT28WsCEPzcXmA5oAR5H8tRhhDm7GYv6wfrABF",
  "key42": "2MaTDhTqjSwt7kDZBKTw3kZPANWAgb9XQkSD2eAcj3TVj634WUsX52qxyapXEj63zqgJYVEz5YcErxaZnPkNDXww",
  "key43": "44re3qHHPCaUvzTzn3JfNxtvfDKVzxNCQ4T3ZiK9y9RTMx1K7dTHptVSdGQxRLd8XXCyfNi5EJt7y6rdNt8BquTM",
  "key44": "5iFYqyQzgCayWMLupAgS146oKLSd3T6p36svAmCtMoCHCjSSqwc48mTNRmPN7QgNecEHBmQnfPNxFud3TcGMw8yT",
  "key45": "By5zCtWaZi56VWvRvT2pUMVGDwMFDoYk2igqK8bHXjmuFwmtwpWcMLuGf54N4e8CFwPqzfBz3scy75RignAdHBq",
  "key46": "3DK2nHytsSooHfCvdTQkjn7iQiP1Z5M5fr5hcfpFcEEo1VX13vwoGwbkcK2QJcyBQDMtp1CyfExHWPYNtSwxxT4g",
  "key47": "3eYvzPXipgjaGwstEVHkzi6bw6Y3UteagpphF5UZp5AwSZkapjGbpr33XNSFRkMTCTNWHXnyJpv7N4MZQ4HR4tsn"
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
