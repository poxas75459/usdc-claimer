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
    "4xRGR5kMU1hFqKugTak82SzeuUGcfDp6ZzhpGYw5CHcDcSoiYnXPxXN4QLb7jJQ84ht7fr6KHbR85SPQmuFvVqSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfpxfFTWsnt3Bd7pbYjX6NS2QTapchPBjTHXBvf6M3W2c3S7UpnPjCGLYx8UdqZN2o3AByDdaaBx4ksYwZVkiQK",
  "key1": "5qcwfwiRijxVxEGTTNehrmFnmsBA2neRenqR9GpNG8wdzUzzRoXUCR1RBBiZWXPLrrWBq4LK8Dxy7fJipPUcmQ4C",
  "key2": "2FCDKdPdYvswG1kUgbstJ5g6WC6ZrFQGS4SEmjqE33YPM5g8MuaWarfB4NsmXEUg2fZLyjLofXjkoKPbg8isY8x3",
  "key3": "5L1WmSkf8tq6cCRsv1gHvwSF5q18DwhsELHae3n4jFYfAtxyrrfEmT5u8m5dngrWqYLJRiJ756nHijF35WsWsGVP",
  "key4": "352YgkZdKUSxKGD6g7JaNFXyEcUd1zVWx4SVrpjwHriUdhNvpHqevvdEjp9MYSmp8APBGohhndgCSDHwxvuvd9En",
  "key5": "2FDVjJM1mk6nNCjGFXgqyHBEo8CiDrp1jnz9HacdVZaLRmKfCtiAPPmCHRm86yLHbPTx7gUz7ZEErAKWfNi8Kv7L",
  "key6": "3kU5vhntCdKqsFuiYa6Lt6cRbx2DVfAHyMyfG5HS31TBKvoEd2eGJKQs7fdADou7o4jnk63Upz85zz47Zw9AuZGF",
  "key7": "2GM1zTrbZXJDSA5rYeroUdtQhp6MwME8DM3FHXF1pUUMbnaSVm5vPn85FnpNbgLpSunZkW5J858FfFhdJYjc42g6",
  "key8": "fnmYzfQAGWLBpDkcLazBNh3AWhd8f5TFTCWRywKxHpYkvegd6C8oBuN8EY8uGy2rarNuR7D1btcP9Xy4RNQkfwk",
  "key9": "4Jc4izo7Pw94a7sLGDJdsMGuXLNdFAgRVB8SbUDDqLJGaw3VVHcrs1QAANubeNpTJ1GqVUvzEuDHWzXpFsfExcPS",
  "key10": "2D9NrvosRPQpM3t774dBuJyjckAzJtkF15JAjDCL265eTtuF3eRQvVr3AEMQTLLHMbTKhmvKKheT2EpJFbqdQZ7V",
  "key11": "2oYZymPsTEsDrKzom755QcMuGVTWfebJUnYubbS4BZ2VKrHKqMv6pYwzWdqdPR2XEmriG3wUSPwpwpquctEFWmvk",
  "key12": "2x8h6XYNwKAuJizBrT6JBUVtvL2vABBLoz1g6fvom6dENb4KyHczGds5rBAtAMUigZTJ5FjTGU5dFpzmSbRGyxUE",
  "key13": "6krNpiGBDTuCHA4a8GsrPGQNKwt9VhV54U1KCRuFV4V8Lm8ryRG4jrVh8Dw6vE4KeDjkco4QnyTZAa6swhBcWy8",
  "key14": "4svw9EgwctqcApcX3B6AcroKYaUaDmTaNecbdHQhtdTdY9b34hNR7xTHxLDnmt6gB54JZJH6KX71as4et5CEWF8X",
  "key15": "2o1bRMir6oLfXSYDKbJgWguH4g5GryHYvotmCp6eAC2X9QJtpvC8JWETV6R3XWw4HDwqokY8HWhhA9t8LP3NbmPC",
  "key16": "4dPXzw742iunN78RiCHGLLoTnZf7jYmBWyLQkugfPF9fcb7sBqqxXrUFU3GGDhAjimHNL54cHE2ptz2DxcDvb3eb",
  "key17": "2bS2Rf7KNmNe7if58dGgz46xz8Hqc6uiF6pZuzKMj9ggL69tHZdUY5Va53WUq1fBESnCnvYuHv2kymqqAdoo2DAG",
  "key18": "2bQWEtYfQ4zuzsJFzBwriX4gZMMgnb5cJwpRVZ2i9jDPLYH3dQzDdhsyxE7WiUQatL6xLnTgFbWcHYREABi8SxhC",
  "key19": "5VZ3D5LWR2zCJQGSnGFBuhF7CVonUxyCLE4qzrM9YiRCwjz6cq3A5wHtmqt5vG5sxMNUHX7EsvQg4SwZK7VTJU4D",
  "key20": "2K7AtSBrtWZgKgHkqdhUk24NBXTmHmnBN5ZC8TF29nZ538mfa6aCagjfukfF3JazJ2jnsGraoVcSYFYyhwefft7v",
  "key21": "3RGfroFLrgHz3eCnPvXQAs7gbByN8wz5Tevtok6smMm1XbUe8kAzd7A3oC8zZrkTxq2h9zni8VjZfCSkxhhTjqFh",
  "key22": "4XCyaUpsvMXT3rcm4HmBmhRTTC8fJFTwBLiar38XjXfUTr8LFEZj3JwDiurj5oWzEXcYJoJzmfPe2zxYuHyke4Kh",
  "key23": "27ckRfthKfyXbiFgkzN4RuR4q9k3qak6dEmkfh7piSCsTfnXzxPGKUnWuMGSVoFj3r4tNgniMz3kHfd8WVjtL2f8",
  "key24": "2h9HFt1rzMFmspYbqvtpFSWhJ8yt1s8TJr3kHcRSEUJUyHKEaano95afSfHCF2mVkrHzvJUumeK8o6TxcZb7GKv4",
  "key25": "5rhwmP5HrCHvQVuGeAtfomnNtfyoH3uYWACFYmCCVyavE4AUphYww9cVqZWcJp5wGdgq3vLNdr8b5uuXS9BHq96t",
  "key26": "wiagzaYL3R4raQiiqq4jm2KRcNecPcQKg2fiLS9gceCWd15uFnaCTDso9kgdbF8xW7bkJGgWuyZJ97yLkgkg97Q",
  "key27": "2uBu8H5hAsMqUgtS3dN39dMM17zZXWUw3bEYbxXZSEJUKWT3LZprh3YFHEoTi9sBgb6iXs6EfVwBBNqWsZGToUEM",
  "key28": "66fc2VrDw8jG8cpKfuHHUFHNcubNxazhbPBV4uXaz9SHvmB8xQ4jijApRU4hzeShEs9FZKixYq8SEC7ZTHMN2ci4",
  "key29": "3yY3cWqbBNqYwF9NUX7QrgdraqiWVE5xtcLfLtvNyJn2PEV7Q2SByjsd8sBhSk9HxU7qKhwoGyYG1rZkfq2fokH2",
  "key30": "3L21ymEmhHAeWSWMpuVKPmiGH1vHpheZLf76KcT8moySBmH1Y9MT9PsxP7QeVzT9yKn4MPhX5A9zChTkedwvF8Um",
  "key31": "264Jeg8ugMNiTzt8RmbesjF72gRFoCHCYszDyjTV1pbd1CMdcEiaw2oAVFffSAos331eg4KwBBwjTpPWCxNsDiNw",
  "key32": "416Cx3L5MZLZJcB6TGwunw8pUhWWxKPYT5qEYj2biN8GjdRR9jVaKqTc3caiN9vMcBdZddt5PjxkBRXWGeeqagQQ",
  "key33": "HDP3A3ehqzWd3hdkGW9NULhh8ULFwXi1tH2LFvon31bcb6M5AQoj15KiLQ7DxNiSPqPAk3aRnxkDcob57tZU2Hg",
  "key34": "4f77KjAq3m9GuP8cbwFyBU3yx8zkoECM56rY1wQqHorQtwctmu18qkT1cSfMftTLXLuaCQmhRZ3Ac6eNXYNzqa5E",
  "key35": "2i2YxXdKJAY5ce5x22mPNvhoH9rXiU1ixXS6b7jaop7FVsp3Xnku471uorSGYPMTFy4KVNkjj4pLyWXoAg3c7Qx2",
  "key36": "aUfnjGkap3AuxBfNaNVbJjn4nSG5cLK2SZkZDusAjgwJZjhDwCFXajQpBzJoXhWC5U8Dn4QMwx6ZRYtpwT6AmAG",
  "key37": "36oHjdadg6z7FCwSPAZttrNokkCRyjuFmHNuGsruJ24twVVag26Dk4pQR9oDVsgtX75NnHGNjQR3ymaJuHqk3kem",
  "key38": "5chMXqPdMDa2C7CRe8N7nBTWPb99XuqDMHxN8yMjXGaJha46v57A6CKrBHG8MNT3wT9i2VUiPkSkgjQjRLxYAhVU",
  "key39": "4jUJxoZdHYtj2NEvysiK5AAJatLwkG29uQo4NYbtx2Py8aT9brV7THSqNbHPoNPhMB95yGKt6GabkhLT5pA6kSNW",
  "key40": "2DukcQvby5q6YsvnRjtFmg31QwcRVsqv33oUDVgUGWfTavNdzBa3Sw3DMn6W7oXBLYZHEQj6v8b98VXyegSS9BPW",
  "key41": "1PLvb4dGAt7rLXAE2AZ8snS1dUAiKT8UDdG4Wcr8ARTuS2ySEBntVpCype8WFiF44yRcuebTqdy4sJs5ZBJd9GV",
  "key42": "324qgfoYfhyeWx5YEnGFRzSmi7ACyMPRTtVCokL8pZHEdWhHjCQ5aumwpJr4pCSQyCyAGf8xpZ4LmbqSqEr88WkP",
  "key43": "5BYR2m5N4JFicqWPGvsJBY9GgnRTLCzWpUzSjauRQ9ShzdCbTQbVGiLTbocMU6tV4Ev7yfifWCeHazcnNgtCWscT",
  "key44": "3oYNwJ7S3Uod7pDMrXryUEryWeVnqmm12f5R5xQiaZ51daKitYRG9VAjq9ELrY7pioqCcaKaqN5ds27EvDipNeTR",
  "key45": "2aiRSYp1sBjt134ZU7Tfr5paHRansLixvAjbdt885wBep8hGuWNGBkk14HksAH69T84yL26EyVSiJQxx8oX7rQf7",
  "key46": "5CMnx4A7aLSxaZ9xSkiSpxpPyGTrbqGWC6aQxt9DS2isMs66bH7NjkQJqEWpRQtopXgvt5wAC7YQKxgHP3FL5Su2",
  "key47": "2PbHHXFXc8ijurKr4nUyj8fuXpYnH7d6fNLgz4evLoLnEinJwTP9Gt5Eu6pj4XXCboDSwp6mtd282fzip8sUk67t",
  "key48": "5nAUMuQhyZa5M2RpTQ747PvPA92Wji9xwJdzxL95op8jHEvZYmP3qm7qsPY4CbxhepKyTTAxYSkWDhAn16K1NtE4"
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
