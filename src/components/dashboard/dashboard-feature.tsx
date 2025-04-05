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
    "3Hf83EHhvVPK5huJZG4hfxkjGbnEAcMKPiE8NHXGPJhX56KcsZ7ehhgN2wkz71MhF2uobpvLKieocLZfvRSpGLCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gF2iVvNbBMoJ9BMps7Unzjj3Q5NvBS8aCFnQLdaSfbcy36tknxELsTEzhFgcvKciWNDfbQpAoQFNpAH5FwxEGYs",
  "key1": "2dtXQUvno2vBCdRAJhjcqGsqefLroEd9qu49VtfKBbPKa9xX4sRvp8YsaDeJkSCcpQGwB7UBPc6uVwSQoWbufJRt",
  "key2": "ucgT1Heo2Gd8utoSTNKAG8dMzx9xk1r8MYafpx9SYyNiza7tPfmaRptKCzVaFgyPCBePW3CnG4kQgtr5eB98oEX",
  "key3": "5d2gfJvwRPzWjQcsx2zq5JonGfMR7rrPFmjyEy9NYME2ewes5VHJGdyA4AqTCAMijo3FrAMNt6mg7JaV7ZScBjsa",
  "key4": "2B65Dfgx24A1XTFLWWKMErcoyKLaeGCyLop27jzuULkseAqTqoexNCjiXwMGiTv6uUffTGC9HikaBbqEX5D7HWMn",
  "key5": "48ePFGfFaTTP6qQjHHaFGUNha6dRL9nBdm887AR1HDe9FRHQAxNicAcM2N71zJo1dJx7pG3EF2Trokuz7w2RuZKy",
  "key6": "51MJ8mYQ89wSP1Jmn2JC8fuJUCf58BXbASETBdYTLfDBdM6LY2c6ut9WHiYFWfUNhpbdTpozqbhE4knEws1Dd9aa",
  "key7": "2RmniETMYaZdMYk2xThfyKLipfGodQ12ec4hbUrMyn2v1mAqUZTXp5CRx5pEme57igxj5th2roRXXL77Bggy43dD",
  "key8": "5hzfefuXEG62FypsC2oUeyj1zJTZ7w5EZqDSwcQe8iTMBiHkM34eeGgHpfocCSFkfZRCbEjgFzXi4Mtw3bg8tRPy",
  "key9": "22BHVZzuoRkH4DfoMu5E3VoDXzomcUXqH4x8ozPiMaWhXcS8gpKNv7wJbMiHBsNinLYC7tqVpvqbeMHHURuNYXk5",
  "key10": "37Zo3W1PTACReA27782WUrpWYQPiqrVtPw6hnhpgauBwJy3aZTpi48Kv5EK6Xcupfknj4BGvvBeLSLLc8AU3sfDD",
  "key11": "eJ6xuT4nQJkXhSuAQjN9jGFs1s95GGxCqersKVtj5dzuBSbDhy9NCSchaN67UaRJqxLpY75MLcj8oBxjBmQbY5Z",
  "key12": "2SPqYJ11AkYYFmBfg9L3Tg3rmu8KEnM1yGoidqiqj2rrsJrpfuv2gk3voeRXbD3wH8RWXAx8n3s46JrDHmUVmQM2",
  "key13": "3c8FfJDfcgonV3aYMfQ7KLkTE1D8ETkTHCQmvPA3XqQdv5tZTRk8mM2n3JNKwk1NgS74owEvURAeqWYfrcPxG7ta",
  "key14": "5tLg7pAcNfNZNEFDdXvDwk8QFEq5CwKvDm4nWoBjkeAaTNqa2CfGoQB9mmGNxW4eY2JKdEMdqRErxTD5tkN9xfVY",
  "key15": "3HKca4rzDLnuuhTwptQN5TJhtued3X7ht4GfoC7rpmeu2xvvr8pRXJ2QnQinc8eke2sT9FsecVFCzqc1Y1HQw1fb",
  "key16": "2AcY8dJPYRsjyGhVF5sF3FZzHEyv7kFxscmiCYkXBvFLt36FMEEFb2jBax4H7mA7x7VSdBmtB5CFBU36Sqf4vorn",
  "key17": "2qRyV1QbvBFX3UYmMG6wwLMJqAnNsn9QckckaRU2vrMBytrfh18L6ZSeMsaNTSx7876n4MtzdMSxFEN77dSSDdZf",
  "key18": "zJik47nMG8ztbsXHoicYfsyV3XNjqxn1RRoz3MByZSqcrL4jAgLLMUXbgsYN4U4s3TRgRirGGyoKnnceWHt6562",
  "key19": "xhcpRdK84rRkBCMwJ57fCCNTdZLhqao327RujTss6sMwSWGbDY3299zRf8Em9KvAtQnmGjRLbDDTnCGjsLEM3gJ",
  "key20": "2yKa7HFpTvBvn9qphQPTAtBBQ9LyZtUtC1yvZ5SAK513jYo99RF216hDSdGq5UyCfgD8sApv4CoCwZ3tMaUXDrq",
  "key21": "62Pnu85E6fnNWLwFoTve9X6i1pnWBJ1dWfr9TH79vYHmj9BhzAPBTSA2cwnFEMxAaAT7rduFd2RGe7EUfmukaJ2D",
  "key22": "26r8cc4KDnEnMZN5NPTaUu8zorqT8QHkYH8XHHBp2uwqs3UR2DwHWpUGXW8FzxJseDNwyPCAmsh7jcNLGVk5SvM7",
  "key23": "5JKKQfKBVUUwVLfXYpBDo6cvmRPDEb2McEpNCCRSaChxk8K293yPDUzf3JiBJPZtD8cjZsVBi1oyULhoUGGKiyVm",
  "key24": "5KXjKxLq4VoK5LsNf1XCu2S9M5Fy5MS1sjJbdVWD2i7VvQx2HTdgLpQN3rScDeHzXX2iG79BewkhCSYx3WiEHNsd",
  "key25": "5M2V2CrFByc7oEh5rXCFq53gVpDevYhYQdFC5VWt3PtZyuNhc1hgwJUfgHCB9c76jsSnq9tYd6SxqRhgu9SjLgMq",
  "key26": "2UcLdQhPYs2pGhxQPbUUWoWzoubNKE8uTdw1PrYgq25AY4Pt7zApT5Ap7ysA5rgeVUAhxvLPZWTJ31jfkBsMtFzm",
  "key27": "2JYotQTBUBi5MPujDG1YPnYGtTsycSTiW1p6EGcuBecUiLwFMzwZheTJcjunUo7QBGHjxpYdvjvaoikWS7R1SWuD",
  "key28": "4S5Rpjwkh1DBpA8uKv2ojZsJzYbPBaUoxbmJmkpB8cPjGEqSYY1UTc6XJjeXhdDmPRChyekLya68L3nQmueA4z8i",
  "key29": "3WFy8e9EmsCfB8gb39vmx5oWZwnJBpcSaHhgEiKkWbhXEBqouaq1dGg9Z7HSi1okGvqSJKqghXhKQS4rvkLWkhuL",
  "key30": "3v3vTi3WoWaGuroEXj1jGJ5wegHGxyshf7SJ3p8Z1ekYgyv74tGHUUsxJ5NXHUW4ngERnNyZw7b5r2NCjeHCwwMW",
  "key31": "UqN1ARg84X2BK9VuCo67j1rUKDbyJVU1UiBKsNGuaecxmvNPmasK87narLLpmMTexNrdTSD51FcgEu7ECvt9bsn",
  "key32": "45gJwAKNgUnH9aV3c9acLAwDwkfBJsa4DxsBXELZpUGHFLmSFi9zZ4jUH6Z8rVZVMNPWEb7d66GDAgFEe7oEvehW",
  "key33": "4WxFB7WmRrkrN29J97FaBRs2myhrXFK258kYcdEcBzDwgRUfcDV95JpPLjBJU1zTSRHFXThj4es3X4FKDf1Axmq9",
  "key34": "657QGbnZLsEKyFeYzjsRjBc6kSrMDRyULRZoEcmysjfHrXer2mA9McAdi1wQMqwazxtv2iHFEsgdE9ZSpCCzL2wp",
  "key35": "2RczGwT9gjjh6WNtyi22TjueTWvUkGjSfCRysovMhEKBhLbjLdRWLqpEt6N5UBZ8nGKX1vCyqZ1adJGFLXf3vDDE",
  "key36": "26LHAPLFX5L1QhZkw11vxcmZnkKdyGTW9Qbm4fZ1kPa1z69iB5rKpYgbDvggusj6apeutPEfxchMTAAChPLFkaeg",
  "key37": "4WgWZczumfG9F9qY8RKR2fdyiS3kTpt46Y7FDwhjWY7FDf2MLNscuj4NjJe4uNni2jR94uMPr7sBAnv9rN4Abeb1",
  "key38": "46S3f1ciQZBufQcgberfrYqe5Yk8zVfsE4dSd7qtDcCzoX4VHaCjVx7SDGchT6pS2dPkgz54jwkxbyS4j9dz11Wm"
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
