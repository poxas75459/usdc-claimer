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
    "5jXpy4YwkT7nqPDPc7Jr5DVzo66i2AmTwvQmo97jH3JjAXyiqKGdyf6p8827H6GV4SsxK4vtTgnJtqWAPM6peXmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37X3R6M4JgnkgcnvAPRgzoF2XnXvfAm9iotPF4e5MBXM5qRjwTVtxk5k62qx39mmpcybW1rDbaQdrpKk7rNDt8Th",
  "key1": "5xL4a1auN431nQq1zksheYeeu5PH2ymaDwT8fji43VLFVv1v9jJQLKyg7DwntVPx7d5neRGQPchdf3KVrvB4ndAM",
  "key2": "4SQr6DjYY55jLfB2aUYxJANALs8A2zh8aHKx2nsdjzkmZbYZWPckWFgopD2QB8q7d98HTVJAx29eiqudofJT6ic",
  "key3": "eTmTmvU51zSzrFBcJKAnXCe6f3xNXuSc5FfB9JGEmWL8TqqRHNV4pYwPjJnjHYNvqih6vUaXH9JAAAJ3JuWZpZw",
  "key4": "2v7whmeTExpGHLSMBnD1Vk6Ur342yk4LJenMWdYoUvtR5sHN6GbjkU5Yqwh9igXc9jEHsxLaJTJqTsDj29jB8GGH",
  "key5": "5FM3nFk7o6SVf2TSxsrkTEUepd9mdCYFb4YqgSXNVZTE44bFitWrnmDpDeqXok2hFAR4tQEu7z7HPap1sUVbFXJA",
  "key6": "4mvYcgXbDoWcMsDjRwiNu2L6q4hyyieeXDKA4no4CkMuK7irxBtZZGCSUEfTgBrugN9MjkHBTCuYGVYEmz35WPs1",
  "key7": "mh5XoNNNAJvNnSWbPF1tAihKfCanXYGuH9YcthJYdgSGmK3zfW9hiyV84LYQDchmy8rr3jFH6jsijukqXbWV5sV",
  "key8": "5qZ5Zf8dqHrHC1KZFEqkxePtjN9yr3dPdrJ3or79ucwYHihrWAo5uAxhxLMpvzTHXzNj1qsH2kGbwZsEpjrq6SEE",
  "key9": "TMfuNnznQZzoPPFKB5K2giz5Cna9v9SdYZNYyLecvLMd1DugPoA12SGaVyxMPeZhsk8miDknRPtRqL826nZTqoJ",
  "key10": "3MrneE7Jqidz3JLNWTMVitmNaUz8onHdu7yvtNvgVTK4qAGw9y5og9UJvFMx7547JvhZ5synANypSprYQLgtqhZV",
  "key11": "5bT2fdzyDx6Tdo6nBY4EdwmkrFdLn43fH8AwQfCLKJu3nSqiS5geUMQx42wV2xVUifomJjek7spfWvJ9Ph6wKRfS",
  "key12": "97Gi2X69fVeXDdGoWqcGWNiV5pnQspNNbVhAEYSXHK9CBNGGoeWva8PTK7ojNJnV1PJ1hjAWY4PmE3sr8FFn8gr",
  "key13": "4s4fCi9FU18YQG81W3KCUoah4WcUkYAqYPxfMbCVD7p1uh6gFGZQemng2WTTMeMg5JNhWLfED3MawDZLPcmTXMwL",
  "key14": "2yaNqiPU7bTgFvL5neZ3dshRHkTZEVs8pLLQKcStGYF6kFRHDwkLamwoD45t4aFXQpjss8oC9vYYrphmnbMLBxCV",
  "key15": "3DpjRMFayMD4VfRGCXTjScDmAwnq3weijRyozeq5SKeeHa58rZ6QMBS6T5WAcucWUtXmMeYn3XHUMWi5RUMJSCAg",
  "key16": "5pqrm54vpqteEMCUYM235Z1NLTuZfwCYgPdCyyquyKb95KSk1yj7x5zf6q3UnRReFm2Hp2kESztD4B9Uvu1TnoEj",
  "key17": "BPWPfdEEYN1QFdwHSoG3HcaNshNnVuqhEvXofhb4AJJhS4FNpVrtN35J1WRXNNupbRX352fDzqBKTP9NSsov7CR",
  "key18": "4rc1ULHCqKb4kFPvgpgVnQB2G1TLkHWpTMF2iJsZ6b6dwsNaPN9RbJc1FNHkyVwyaoFmoQUtzQZxbunix9wLwEvq",
  "key19": "2i77Zpt7cRy3wMXof5cbPznc2p7QWcARjhCaPYMYvJuZQSQ6A79f7X5Jfw1NBeDkaiL7aNG1qhLwW34RYHLxiSy3",
  "key20": "56eFBouGNedbqnvSzX2aRq7KgADPjMGeuUmvNYqKnDrWmQJ2faENwBQT4pLErMLhhbnKX3kzpLJ1z7tpVKNzuyfT",
  "key21": "4CKeVBnri6t1t1jGBHNwPiFCFV4J2T7JxnCLDfqQadUAxyHiJZDLHAxYep2Xkt5Sbnw3HxNv84FnK4N2A3bhZyvN",
  "key22": "46tpmzbdMrKJj2pYJJ4WSFHx8oHN3iSQUn1GZgRGc4yRBCCNr4VRbh3wecwSsJ8cgQvLQP67zmhtDVDe5AdhJVTD",
  "key23": "5xp9R5mLXWhWc4FhiaiaZCpj8PcaP3CcXUg4mRTvbqGwVYpAovMj8Xw1UULBMihfH4JM3pcPSAPJSfiTZkZ7yT4X",
  "key24": "4oETJU67LdgUTvMY46uycmkD9nqFah1NrrQznWrRjjHMQ7oucb4qHrCmJw6exqQnqg4ck7CRZjPNW1XhtpLBJY7f",
  "key25": "2cYBEThPRbb1a6fgTkzTvEyEvyLHbw6YT82vB5ZmJ1qP1uMhdGpivtoN9fho6F6rtQ2yd3ishGwmVd4dXZQNcxen",
  "key26": "5iAGwE894MfhM4DzKrYkzvY5TLcHsqRKbzy5mrfDVQHas7jvGpahH171P4niFNWNJbmuq35vTS7SP99myNVm8bf9",
  "key27": "2BWEZv4JBHnboH4UdYk6JnHwZ2q5R9LmEXmApjo8MzY7sGuHjxMYrdkM9DvKkLTFRHynsD4tqgshZnYenGpL6Pq4",
  "key28": "4HYoHhwqPQFuSgFLQBA7gacUswdQtz4pQrMaCxi58U6bmD1PwbZMYWSPSFwBhBUhZz3dEUtCKCcpQFoVHntMHARV",
  "key29": "GicBzdadRMrLH1g3Y6iwqDVcScwvohkSQfzBTWNpfyYPafUytyTTvzPiJ4TDcPBxUUQ2PRqAbXSP9upjE5u4RvQ",
  "key30": "2QdbXD3zjwvkaPzKDB4SbvPoSdeUqQDNpdWvmkKda26nCQnwT43cbUpGYGvBRWQ6tXfrjFFKnAzipKh3dUCXeJdW",
  "key31": "4HfvMH4Vc4cr1wBAuucxt9i4n5kBKRq87KEdtN1ZbaAXpWdt5aRisZYEGBeiZq3WV6JPZfnPxdbfKRCHhBNxRZJb",
  "key32": "4EcgqSUL9reAiqxpUbf9EMJ3P3RiyYoC84V6dtaHKzzEgFeK8CMVEj6JUWZooLMR43rxjnETp4e9dxoqUbteNyxU",
  "key33": "4Exj39gE1Adch9xgZi2ybtzc8GUCgXU5NVfg5ThRWqLYumX48bDagtARzfHRPzMJfHW7MshcifDnRkVqGaaZU6wx",
  "key34": "3wJqtLt1gwZCAigkcC2KXkSyM7rPHsuPq8z4TsSaAkNUWbKyJKLcVSbGKYvST6czbUTpEDVjFEzmajeSPqBPoGB7",
  "key35": "5isKA5GfpP8Ny1nj9NCyqXr2Bxu7zV7E6XWHkKj6B45NCcpmGofUTnmyyiqwQfy8M8haGfjC49njukRGioTayqu2",
  "key36": "Qcdf1Wmt4EQru6oC7THGfQKyPHWzKsShFwn7uKtWVtSou49zSGUP5h5eKz9fegWnsfie3nm1SCDj1pVH4iNU9Hj",
  "key37": "24nxzJg5ZuNbqQZkn3zCEbbCXexuhHqgdWwSqsiCg5q3kypVTbpDrrAw1gPJzoVAwJCQZriBaD6EiaRAjiLapefJ",
  "key38": "5sGN8CQCRJSqotfwb2CnJjSdep4HejXVb64SPtu88Yg8Eez11MiQYBUL2xC4gzrvTi4hSNp2Nm43FSnZpLTm5WSC",
  "key39": "3XPm1mRs772Bh7RUuYu6sgXziiJP37nta1E7XP3GjcE7aLp3m3NfpSFKpvh5tAoraPUoiWU5zfpu9oYzk8dUtsyN",
  "key40": "5VpAgprTK83JhuLUjB7RYvLPqo4EJNn8jw5LfUjwWABri8bLmE2MKNCGKWtWWtsnbuG43iHXdXuz1RZxQUTTYt33"
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
