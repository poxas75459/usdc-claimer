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
    "UxSLYWUnsVkkQRghN82LQuSxosspaqnhaCPoVsNtq8katwqvnTe7aDBunimnqxmGx185so6vzWPdrtXeiw8nPsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uAuSCE6j7P4iPBvB94vHcjmeinZBFLG35D2wjLQgaBY7wfStxdQpK1Ef2qpo4tzA5saZV89Bhs8tgU9ti3vmxGu",
  "key1": "4BD7NL3M8pcJKafxW7QXxz7eqdUE5EPCTTXzn49kdWnPMVtgKGNw8rFdavK1DTe46jrPGeTqEvDYZQfM61Lu7Rhf",
  "key2": "KRQTHV1Zeg7LuQyA1KUJeTf7Yb3BaxWKgsVR8ou7uewVrWndRg18mum9c2SQZQGbKeorMdcELWzrTNqBrpckQP4",
  "key3": "34oTd4S5U21qzCA55VqbC4Tu81pxNJta2U4Jg6dsGMxvnHdpoWGKzWocNoDpk4Ty1iiHnR2TjRnTfMztvNW8QrwX",
  "key4": "5czpweyqxJc3WeJGaaBW57QmaQj6JZ5ZnEX6CyMf8Fsyh5jd8guCaS5uiioqaT7oSwSvxrHRKv5StkjARzijZwLq",
  "key5": "3wBH7HNY4KjFdVzUJ7e1F348jj2C8EWcJySZ9WQbe95N4eGHEM1abRbdjYfkSyaKfcdiNj9vzTH6jBh8sQ4eV7iW",
  "key6": "5H2oNSM3k9P5jPBRwmr9jWcauVdjcE7zU32zNh9A7nHkCviaXF2TY7JCbduQWX2PZvcd8YFcZAE1fyJA98Afbvxq",
  "key7": "2Ahwz8kjdbmw2HCgXWbVDhc5DDKsLzt35rqeYs2L2Za8EQzS1cNYQdnYJg94LLgytCkVgo4wdZp6CUk8ajyLKDXj",
  "key8": "2SrkMUnaX7DsFCSqSqzkmBX7pNgUVzKvQmu7SLVcHQkGHPFJ77eyXN4LWteKzKQ2ZPGWtBccBM8XWw22VpJ6EJbG",
  "key9": "T46YC2BHvStPd3QwsarGLrCSZ9quGSXAJ1juWXx2NXUL9Nj4cnqnnMRfqg9xkQ2CEgfsi3LjNoRC58wydy9kqHJ",
  "key10": "5v9VYryKJeuF5z31LAzJGmDaZExp1GwHqESWC3wBbo1TeVKBx6HMk4YYyMnXZPfr6YYyiMQEMW4prMCvjgDDqhiD",
  "key11": "53MFksFyyGSG3Q1Ag85qcQcJa2FF7bMyyurJVqmWP1A5cA54ufmytMLpvQijN4ALbiy2GgT8nugCeXaT5RP4fD4T",
  "key12": "5PLDKuXPKNMicg3qHHiut5keydWKMtBpipPEiK1Gid5uPLi9mqoTLJJfB5s3c2kqhSux5D5cb88wDCZ4cgqycUzF",
  "key13": "ouYyb7B2kSnHad7ezaDUri3sMfhnZe5VE6bwsAza7395aukPSCi8A4dXP5mhnhPDr93do3dEf9hVJJJepb8GdUx",
  "key14": "32Shp5NQjrszyatS85RvG3sFWcTmiBov5v9PyCCFssHRRd4tutoM6jrvFPyeVHsfApac7U7BuoHUef9AnhgtwhHh",
  "key15": "k3Zpq3N8FkC3AeievbEhFWcsyzdsUVJEBr4LFdtFw3ABDY7GPnE18aCsyk1D61h8tkjTDhwkUAKFm3L7wmg8vkV",
  "key16": "3MbJSYwMFwy1qeetXDaEKeqGLXkAMvQ3KLmCvfo6vaCZzjZE47PME6qzvmR2EEmsZzoWrK1yK1iNzetgBn58kWnJ",
  "key17": "3FwbCcGS6Dohhmsx4p2PN2wAfTkJwYzwGVSn3JLayiPEz6Cj9LjmE2mc9fAxKZb578WEk3ruzyyxMe7upjhgr2YH",
  "key18": "5T19RxFv58JeEHn3TXxrpYNAukB7hpCeK4faDgwaLeAg5pyWhWF2jMLSEbogZyBnnzmA158xt2PQCrRdptK1QULW",
  "key19": "eBKhAGXbhy6suQ4tcaq4g6DDVGEUWZYwtzBCTp2qjLetd4gBGxwoQywUbyC1hU8jbmog6TmXKoYkzLDdCieRPcR",
  "key20": "25WhZCRg51JVZuUdVcv38FB2bUWTtx6fJxFXs3V6kfSjWyYpYmd966vnk25LaC3bx8hzq5rjVsq18MVy2ubp4FuP",
  "key21": "4RBekHRSgZxWcZfbFYs3up6ZJZoFchTuGcUKHYXdNZKriEg5mBjbgT8FHAPb6BGPDfGzLzmwTfAXRLSwWbybR8ka",
  "key22": "5p6SeVEEvp8zTjfVN4ZLJPgB34Wqe8Bce8nEeWLCoAALEKQNmPYUakGymTGRSCB3DgKf1KGZSUEHnKpTiFQnjt85",
  "key23": "v5C5GqjdyrGftoXmcUWnKF4n9TPQ2rdukWVq1epBDBE417n6ViEguKyXmz4fN49FxutpstiYo6rVbU3Bj8bySUz",
  "key24": "4fzwbASR3fnSfDhQTykJ5BvJokdeBthc32bhFcgAc4HPv1w7MoNiBK9HDz7hwYk7ttpusmtg8aJeCKUaqAGwjgfZ",
  "key25": "ZZ7zfySgtdHqW3fvVwj5kaqiDMbbgo4vtU9271qG9Dk5NhhR6GoiDGZ3xdP7odzKwYn2cxEQwesm2VHrE5YVdHZ",
  "key26": "2t4nZrHAzpY1C1EeSsYnJta19zfp6Tob8KsGMcDzBdtZWQmqZ2Q89Dxb5aULs6PfT5UfqhLjkBHjHigWFqY5t6ip",
  "key27": "3q33rZ9XL2BM7GA8fEgdUEiX4WP2A7fmrdwEyornE3hQWwb6ks7SEJULrDxgkkAqBHyyFnntk6YNCyBVJzckcdyB",
  "key28": "5migGEZuNWnfxQam3eQpZdTu26qJoxCZg6TH9Axiq2JTspCbWkhcNEtq8mDeGk9KF2h6JJrvYpfdvfNDPttdkThX",
  "key29": "5n7PqXNi6ERN5ESkKKDGVKRjm7eqfotb8UTBhbtsoAVvFTSVJoxdDJiJYPP4ZG8oQQtGLW5XDudW74P9pp4ZX8Rg",
  "key30": "5M5FZJCYNkrxZDNk677Mk4hL7W4AEuFVhsAHrhGmxZTEPWJCCKZEhsuUQBSXuvv9fVjT6UuVmU3kW9hka6ETEbqn",
  "key31": "5iRAYnwiQhZTruUegj7BtJP3fGUGxEjw2dPodLBRZgmmnLaf68ZKJBSsSRKYxJ96Bu4xAS3n87dAo51zVNgZ9yQB",
  "key32": "27io6VX1D5Zxw4SEL9SZgmKW8WWzMBf3zKriva1dvSB881ixaFdyXELWZtUqVEEKnPiS9c6fDsSS5MZeCNPHFZzK",
  "key33": "3PRcWTKDTehJ15NUDtVvzfJZ8pu9xCif1HqFrHRzqTfwcQJzWBzqjPiiq9Ghk5qL9g8U7mRTYkinEvxoK6MfpToq",
  "key34": "5SsdEQ732EyaWCVSKJY4se4RoLJuraZMVLraThmkS7CLZhKEvFhRmVjiABKZetRpudkH8XofmAfC2yG637cH12hT",
  "key35": "3Jomg6p7vEMHm8y1irphcdhTFwQePQ7nXAoqRrhUirwrM9kAUhd63jtctBYAVbFJarP7LzXumF1Fj2dvECt7mTaf",
  "key36": "ZRzES9gEPn9qsAZZaaMkYZodp1Sw5PHPGULdwH8vdccquDpk9tJykvcBJSy27EaHWA5SVj87oUGZiXq2KVceUHH",
  "key37": "3WQZDMBHHLokiVFacoVB2tMZerc7swWQ1j4dfjdMVPGBeVJKZWxuv9uUjaBesZ8fWNN6d1EU4Ff7v3EzmWK6duQ6",
  "key38": "egxp1Ca1h12ZPY3Pb6bj3tNrCMzNNenz9uNHCYEmNgGv3gYAXZHxjNc8HiquZ3cQa8fBMengVAB5T16kfEpvf72",
  "key39": "2b6ZvNLAHsaVFmS2vrXG12bjuaELQ92UDmikJ3r7pfdVcc38TzSkp6Ka5i54LrNsVgzv674gqo8jCteNZVdrKt7x",
  "key40": "3SBW7GJh7LVit7AqwNAKmqxWpeRzcMdpvfB3xNxMyMhgUWesir1iavXSRqNZgmuGesvmKcaxK4eezyvn8UCv2J9F",
  "key41": "45tVnDBGGcs5mXfqS2h861aZJWVk8tW4ftyqSavetuu5U8HRCWVSvMi1xkCRFUVKKg1cBqQWf5T2j2S8B2LmPTe2",
  "key42": "5F7w48KEzKijwSjQQ2Z2wMDQVk7dXWeQcTUn92nfSzbcDhS3ZvFBuvEKV5sPGuf6HJT3uAizjhg5XuLbQec6JFLZ",
  "key43": "2PSWQA2b45Xs28hd4sEAb3V4WvS7wEFJsG2NZ7Xs3xy5N72awRzJq5MTDxwtDZXT1FN7yfA19mAgPB2Vcgxau8BL",
  "key44": "439TSgHwy2nrqPgyUv4YwutoEknbUSnqNyNJTXUPSF2NgH6nuV8mmKrYEWX1PApyMxw18sc3tULG2RAN36CsrMxL",
  "key45": "7Acd6zztkfG6QYDjJvhrcpPPKiw9ESpsEZpE8BbbXYkHzALEbc7pmweHanQdk7Nsyzmse5vETHNmvVYtPKC17Kc"
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
