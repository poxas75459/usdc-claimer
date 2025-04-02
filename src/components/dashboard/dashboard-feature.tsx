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
    "5Hk2AhQgByGQD6Z9Y47RbGF1njYNUE8YqkotuGkAWesVr668p5LeggVcQa6bCtXw8JPUwVhai961w13HbhvYVnLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dLLoGVYUGjnieD77n3AbDeWfRD7TsRhV9RL8ik6Mfhz4pebFrTNKjByLrB4qonQHnbJxmZnAHioR3W3627sBTwV",
  "key1": "3ufDtUQQjtS7my8k8tkyxQuyPXnN6ca8pLvwEwFXMrX2iU3Lx71oMeGfy1oCUGKDVDgLhWsUcUH4w4H261GitJvs",
  "key2": "3Y2zHyKoXUPkGDYndZLeDmrVwR1JHhtXQL9oGTS1MGE65ttVbSosQNuNByEtrfU3GcsjsjHUsZBPscLTFqVsdTRN",
  "key3": "4Qn7eSquu6VzKEKUYVkLEADbzG8QRGWpdsVGcNwzmMM46dQPz17d4QKKiHKUXbG7jizbHysHegYqyuj2DtVeaLnZ",
  "key4": "59FyopYsJi4JtZqvrHWEXYX4WpENpqXHZxA4R76WMGZg7AkrwEBRyYdc1NzGtMvJ2T3fDdYKLPRcZAgsgBCEDvYW",
  "key5": "3RGhKsRcempexCU2waLXNp8VeTAG4qBZqobMFjXUCchPjaJ4XSBvyYw32bz1c7nrsmb6CV54oFrhp4UtpkLW9umJ",
  "key6": "PExyGNnm3oxT45oRCGTLH2UkwhbiEgwvG4jZ1TVwvLg56bJ39AXMAqnGQfhNVBssXeQAzhR6LawdeyULWoh4rJg",
  "key7": "5dyURP5gdC6ZYmSESzAxwFck3q5PpR8WB28mcqXZXFdh1hu52FPUoy5pnUWm1UB2cJesbyxVivjMzWc1BCCwvx7J",
  "key8": "3Sp2q2fevUf7mhHK7ZRfSPMKw3Aqgddigv157V5zQkKbXeS6GSZzSZNBryqw6iaSMZgyJLTRD9bf42srQ2Wnwkie",
  "key9": "WUPQYU3qC7w3ELWNk6TmgPxwFu7AZtHT4ALkgjmyLjo3ML57Xtds2WskFWecrZ1NpJNgfWaNiZr2kUcMSxnhvrZ",
  "key10": "2wLQHkS5wUN7zpm2ijk6iBPurdoFoHWcj9qa1cNsz17Eh1ehDKy7zGJYE8J13FqREB1hBmCeZStdGWGVnQUQXhvX",
  "key11": "2iu2rwwiSTZeBVNyCnWiVYHHxnRk6dH8zaxySKnFPY13ZQCrznUkrQLyZDzwYN6JNJC5LAPn9JqMpzbvDC6bAX5U",
  "key12": "5ufVdJnwoPF7oAPgmxWW7HDzH7jDyAx4hFswZgUvZWCyR81ueYbtKxZithohHfuTMtckvoQgahY5BiX7qFBqEU5F",
  "key13": "LjnMCdioCExnu2j6yec6wJFo1ZeyBkXe9dxaFTCNr1mZaZMTxAq43LztBTmGGRFqLRNk98GFgfjmfEJmRURRodE",
  "key14": "dPGp361RQBgBVhfnSYpSvEU1gFnPQFi6f9LovwumsGAAvHPifYPB5Z2z3d918FvvDTsa9m6RwPwzngk5PpEqzgM",
  "key15": "5vWiaCM1heCGH7DyN2Bfd7841FdBqBef6sVHbmpHePmHgte1zeMZG6a5pE4izERVJAmaDaCVvGA96CxTKLyaLA1u",
  "key16": "5gkSjPBDiXKeBCS3SUuqYuXcUF3uocB1JK3TBUKhxPYPRYXmMyJnPXmkoFres5EZ45Wqzn3JS7aZJZWcce6pM68d",
  "key17": "61sbzsrMYoNFv6eeu1cZP1vUPJ7HUxwV3rNjYuVRqQVoRtnru6baT8Br3Zyyw15cop9Ro5bMpoX73KkSV6EfRKyt",
  "key18": "3f8Gwh6sw4XuJd2VjFwVHmhK9t76D6NdeZbSFWWzbxH78Pyu2wJZ8uUEkqhcctQPLk5DGAiQDQQaBUqhkqA8nQff",
  "key19": "5kJKcA47R6WwKATKX2Yip946raUBCpeiPkP23ZHMLkKkTqQPuyUjMBf4Au6jSzN2v5fCXZG7j4awq3oucLTY4pnX",
  "key20": "2WnWe3Ab3EyRzScuhwm6yjuJkDqM3Bj7BrULFB8EKRi44tGjsjSCM6wXk1e3tcCBvgBHnVaeY5nU3AaQ69UWhhys",
  "key21": "51reRyGe62SmBQKjvUERupdqwwbAcJ6rUqp1n9eKvoFJkmVuvQT7xNaN5jP1fxZcxhehkNrbWjuJ7ugSwx5oXek4",
  "key22": "5G66yFv3QdTNir3hkwLnDbMjMZ1AUYvLEfVChUnJPdMPPqzFU7oYsGMd8Xa3GijiQc1zRts83kjGeDcUkjtoEKgu",
  "key23": "2GyHGXSxXDXf7zPJBKjFjyD3Ab7PA65f4DXb2Qr4wfTspJZLDRrtD3NNqkQri2fr1ghiSpUusaXUk2WU1PkjyWyP",
  "key24": "33ZvduiwX8wubs4sbxGaafNA7aT3bM7CmPSZtGpHbE97unqepGesj7tAMkHJvZnv23v2Cci25NqkPsb66HSeRYcQ",
  "key25": "mQV6PHoN6Kxtk5kGQKSLyG3Q5nu57Yyya4ThFsmqn4oN13Hgz2jzRm2xvgTfd1XBS9kucpWJSCmG79renf9RCHb",
  "key26": "2YyZDRk5CsXq8LAn6wnKEg1iNszZ58bc6DDk55bMc6jdH3sdGv8oTjJDmgJ3wt8CK3DhGMRBCDt17ZbRKKVc2niE",
  "key27": "2ntjUCRBo5dCNXdx7CzRfc7xknRwifNJqnf9U228iZwvMAyTpcaUQcDjZ9SpcHoMxgvCUrTXxAyegaBsaGoXquqP",
  "key28": "yx32DG2zbNb4ZojpTSSbCakUfmNNFBmFS1EW2vgcoaHKM6UbcAAKkiiWRnA7bJY6jXj2W7fHyWj9EwdinJV6K4N",
  "key29": "3RBFt2ZBGdLj6bRSLzJZ57Eu9KREBjJEAQouJX7aKX1VQW5TbkG6vKFAAkZqiYqQ54KdWni926ymwMCg2uk7cnYg",
  "key30": "22xaU2RhWp3nG18iPEC4QJbhGvVKF3x2hh1XTkGnfj7TbUxSyfqTsBtJ7c5XfAAVJVHffbVYCjsETMtFPkuwBL9r",
  "key31": "4dycziRPdWdfx9wxay3RWBwdS4NZh9ZCG4GTtMUqNZh7tZrKLRg99BJiEE1TLcL5Yua4AWqBrmbSLK9KAfoFqSqx",
  "key32": "5Xp5NyHzeip5kcScCfRmc3GikkYPiC5feHjSFLuWUwtd29Nzr2ypFLQGk4CzXTnJVnjssi9MxRcVoML5pUGSm2C4",
  "key33": "5Skpy5VjLpuYHbwLMuyAnTjVmydk6kL29Lr3dkgJqNyNN2dfU1NqyahFipCWPScSG8i8bDwUbxJ8NLBWGWxG61vE",
  "key34": "5VMUPd3ifwKSbKWtgF85sZKM1s19N8ssvyzggmniqosqrw2QspFrzty62dkbmwQgbw2D8Qas3fozKNdFJ3J9vXRP",
  "key35": "2nSchq3AopchXsN7Zi9BcnDVn9sQUqPWL7w38RCyZ5pSr9ofjtu62fUvgh6rdfB71QficucRZfR1Ce1ik2Ctvz24",
  "key36": "3QAyCTNX4BQNtPsZXrWgyJY5UiFkts6iPtjH4Bj8v2qDDN6B9hfSaGG5AbBGa8hqBeF6ZWjy4TgMkDMbeFsx2z7T",
  "key37": "3cPiBGYbU6tU5FQg9WooxzqQYihRF9cwjnf59Boe4oTKcRXisJ4VpKXP2XVXGQrmou6dp3AiupLM2iXX5ZdcNqxP",
  "key38": "4cV6oFatXU87Ms474rZm1Dg7cvKrkCdw8oBb7sMfuwih8NYFj1aba44AuMM72T4LcUQdmBGD9TmjQ8VPseeoc2oH",
  "key39": "2ASXE6ndaQ53wmanyoKf541Kr9ZJLtDaaJAi6eSyakoQBCT78Nkt4s2efvuMBbosVrgpnwwQh97P5sfXmWLEjYR3",
  "key40": "5ZUq48MXw3c8FfAZn8RcSqGtj6apeshyQFYfadHPUVJjnHJi14tmAcjLgLU1syE4iNAcmL9BUnWW484SxhtVf4rH",
  "key41": "64U7rUCtPSguQBC2KPUDkDWDY3bovBAdmuArCXHF7dtftaFS6qxUNuGQZDyetHcmMfMZgDudTy54w5bPfMjTVcdd",
  "key42": "4UA1ULqgntS3EVi8Dk4EN5FQc4Fk52PrBXwtP1iHTeZma4W1xB67ix5aGtp66ejGqPoKbAMKwcTs6pgwGMAPbgVr",
  "key43": "25B21g3GhXnEyi3cb4MaHdDkJCMExK5BhNVcgJE7Pnj8Li6hYYWHzCDudw1C4wSBovPPtpj3MKTgMMBD3jJgmwaG",
  "key44": "4rTeEtVq81E1BCb8JmwPsi6vHvHUjhGrPkEF2CAmgaGAuUwNwbvFyL86Wb3kaxzGGzmMYc3eQSny36xPSfWRf2kL"
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
