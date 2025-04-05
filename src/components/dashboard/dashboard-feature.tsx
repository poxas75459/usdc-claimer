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
    "Fv6UFuEK7gMxvcvy5Nq4kEkvFSavMxe3k6unzwxrraTjHiFmSJ6RfTAtrvkjEpBCF3FJA6Vyorp6xTatwyyLXKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHDaH3VEfKjHLz2X6V9kUTATUJ6LEv3r7sqUyU5Myvu9eHoZFzB3L66ixg3Bz2VCCWd9DYUHdNv9eevX6emjjkU",
  "key1": "5pjXAbWDSbjrqBhny3TULaCjfzk9vfr33BPV8MAvdYKtEm75hXjHYjDLXzSp8k2fafP624FeZmRa59j83eAtoDW4",
  "key2": "5htJ9Jqx9m8pf9xG2LBGd49zXJMUzmSwPFB5FYXsNx5MbWSu7fLNZ4Lh6br7u1TrDih1VV8ZVKw9whdV4duJky7T",
  "key3": "3WuhwSp74Na4pCZRoRE5rj2QWAa7FBAMG1CydPgn1WJyrNS38eTc1Vjgvv5jP1Nx2Z2QVReJDdcijdmjjXuHUM7h",
  "key4": "2biER1UCDXphy9PiU54Es89TLjEwx7WHwTaMXUc7jfJHPtALJHBqv9qnbMgLUiX7BZMuFSrbPCzYju5mgBUNNiEc",
  "key5": "2LSmSqHuaDrsXJk17uToyScLFK1bqeXZKe9qij2VrG4cCSFnNRE6LLN1MhpkfZqyyqTXQjKzpAcNT6canSAjAuWQ",
  "key6": "QDaC3SAmmmGkSDLUQCtKk1NprrfFDCYz9HRMQhXC6iQ6HNEZRRdseuusPWDuisLc6TSh8WkZrzQmh5wwopWu9m1",
  "key7": "2YFdKkcCvBN7WggnzzvNfaXinDuZMerQU9124DTrJnASxZx9MnKZYHEFpAgUb5sPgbtxnJhiXo5EWfhtLrnLxasJ",
  "key8": "4goPdSNsdehDLhKe4gf7MLxM2Ttsa2z9kGUkd8BppdESGdiTJPwZpi9QZLLxHAWNtawqtgsPfK6kKU9is5xaKFQ1",
  "key9": "4DQQdzXairuUWPYdEoTfLPnexxPUngk1Eb6nfC3pkFaT6Tdy6d72VrP25PWtoLtGSrwkLCur2QWhg7Uf9n3Fz9pb",
  "key10": "5a9ZXFxDLcTZMJ95du2PgRafbMMkouhmeKQ4xheUwKkkk4BqxsVrUVAAM5uwAy4xjmjTLekdZmKXhhpDg6V7BXR3",
  "key11": "3uZtzVD2VE2rfaasHnAMzKPEBLmZ4iMNaAVY4AKaJuHr8DVpmAZAv1ifb5ZExch1vM1e1qFQFncbXsGnuf1hGMCj",
  "key12": "39MSXLiZx5A73Dfh5Rfwz3R6kXqJjGrmiQt5x3hrEuX6Ue5e34knqVXqm2xxJgTuG75tq1TEDQ8vq5N4m5MA6ioG",
  "key13": "x7y6yt523wjY66G66AoHJcr4BvdYaDfS55DdekC9NbdZJmAGmV8AUhtyYdBmv3GPJgVW18btez4rYgJPLk1YdSe",
  "key14": "5QoQXtcN4AxGNEE9jHGWBRP9mjjNpp3ZqEMuobtcAtU5KmYLkhw69kUtgYsZZ5Laqu1QMNjZRpiAJAhHNm45z87S",
  "key15": "4KnLhYPpFxMPoh9g5N7dHquJSvMpGFsWYbGqSe9cPdnUyG1ukB2sYoV5ukGGMwt2AU8ZsQKXBwwMWDpRjVtztZGY",
  "key16": "hFEaG1KWcPcq728WD6i6jjXdMX77dVwX291Ved3c8oxecvgHAtKmJymCTSdshowq68tZJJi1GAE94fd2WJBfAsR",
  "key17": "3tfNEm3mwS8yRgXTLcDuxgf32gQ4FfKsHjabENHyBGFDjqJWFBmEPsDNfRKnqHgLXbFTWbp3vFtWtr8BSpnMeyJ",
  "key18": "2ANpoboqLVH76vRCy4DP6z2mEX2Bi7yGd1NjZLNzHnue7orm3xiBxdZk8jyXGZrsgSvPrnzo7WJRF7pQaHSiLgyx",
  "key19": "xRmJVnfauNsCkqjiCYMJejC6eHRrSgYA5zwsNrSqFBWdfNytAWJ6Z1EbJWucTU5TqiJqAPV2vxsWXgk4ncpt777",
  "key20": "2MozVpF8TpJBxg9ufS3cWpuMi6vBESghPrvtPewk1HCNsrgDE5TajYQgAsX6T2bDCoot3L8UJkzdorw19Upkb5Xq",
  "key21": "4kFnB41wZwZ3E7fGEdRhR2mJLh5J9ypDkBqBMAYEHJT4vttnrQD36gmyNbN1w82HZWLP5vk4migrLsg7WncZZ9Ko",
  "key22": "drStkfFncGwsa5Vs1HJCvN6QHnNqeL8ntStf4xPp3q9hNKcdw83cijhWUa4AL64BQ2QwKzMLoto4WZNrbCAiUMY",
  "key23": "JdauyCwaetdXYxCWkAV8qU3ka7XjAFKsnYggtczpVS6Ha2CvG4m7hrTeSuRKucwMzNE3YQrsJhBQYmJX8QenQ3V",
  "key24": "cYm8Jks8iWWUx3q1GCSw34ctBEgeBtiVFo2yaYsbC8U7NwgEjsFUKeujF8f7PKrJ3hdXYkowYaY2y4Pt1igReF9",
  "key25": "3X5qz6Qu5qJQ41JJocbK6c4xeQhK79uWkVUySzd9JshnTVaJpHHGXAeaeY5V9uBSDTYHMSq7gEwSMtCcgwd7WqND",
  "key26": "4prABYz667yMeD3itxXYzZwTB3bue7saFQYgEDNFSvYdGmsVZmABpUjoGUpjS5V7PJFpaVewfcCZM3WjaBL2xmUM",
  "key27": "4eMSd5pgUxPwCNiTjoBGVCumdpYhuTVsMqCfcFo3xUxVKeAJ3nLc7MRiBANVFMS2mxAcXfznuJwoxfJo7AWVSrMm",
  "key28": "54KErQiChGmYQui8Gv83ZD1M1SxVi9aFPU7GeQeyXzBkkE1f7v4x4rfnHxiQwHFRsHo7ZiMH5ctnn4ebpC4KDpca",
  "key29": "3xWCTX2m9aM9BKyDv6k3bp6kxDM8tTfEzdPzmrv1HGtTKcSBGACwAyEc1Kh4XpKFi82qgLWBhkh6AyEDLV93WSVe",
  "key30": "54uoH4EJb5vHpSDwG5kSSAcKxkCRS8si437YLrBwtv3YatJ1fZYithfRHT9B62yQWos8ihnHEH6UghKPP7aMANTK",
  "key31": "36PzMaXBu7adoNvLBGiKBAgH2ZTJMQF9PRueub3CQsosfttYsErUQcGMLi458cLpgpzUouY4DB39aJZJjXq5aNsi",
  "key32": "4YA4DqznikeT4RxNtHzvSa5T2sWibHmqH4LVXWJHjo837K4zPwP1UDpPELHWEfkxhgdv7nCqBbZUj1KCtS1iPKh",
  "key33": "2KguuEdCbXcyABho32yyBSY24hjxQPWtLJgCPP5QkTudMRj48xaY8HtXVw9SS7o4zyfhtouwzpEc9ph2bmCRUQnT",
  "key34": "3fHMEuutLw7n1AGTXAcu2rbwvU5ayCccgTR6gFoA5kS7Mcz7R3HRyEzxBgZRHXrYkdHLMZPxWzFNm72jNHZiUgna",
  "key35": "85B3LzdeBcxJYwAjtqrZcApjuPfdGACVuowvWdUSwBzwoiBJ6jtx1Z6LmYJJMARtM61Q3WkHVbJvxYt6ft1wqjf",
  "key36": "259w7gyVyL3jrb98VF9DjDsTMB3JbRbxy2zg89z6Ypxem1dbAiMBhBP9dCJVh7boJ9o9SCcksfNVDmAZjujJPy63",
  "key37": "3Hp1JCb2uUv4TFN7y78iEziJ5nYitq1Xmu7t12J4GavKJdpXB26TcWFYwZkquy6HKpBK6P69vqc44Z7a3ahPrje5",
  "key38": "PU3uZCL2nJW2huBhvrESnoziarYJcowRWWsBjvsBTtWWD4sGMrToisc9GnGSwdCCrui6moPC1fAJVa9aNA7MzkA",
  "key39": "5mBzwxbQd18tGRLAqnYJ9cEwRgJMNfJTNMgpYQPS3djKc3oMZcMVsfMfF55qzPA7abGt1vQ2kLgNJnd6vDk3N4Um",
  "key40": "485dGsg7wGVRMy863h8Fv6DacqGyJ5k3H8h5gPZRYCqf8HvVZ1ofK9UuX2f97ND7NJvZAhXBZYd3jurme4YFpXmr",
  "key41": "24W4AwBYA6zj7DSFfRDNAaaHtpTPVqj77MH5y1SNSvhs1bn19ALFfMGx2EU3oSTFAhmjjUmDuT8dLBfNbXywaNCd"
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
