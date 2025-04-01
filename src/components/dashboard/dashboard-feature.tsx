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
    "5cWHQsRotr9quwgt8a5XPDut3xXjQY3vEZNKZX2Kgn1VP9fPpuVESzW1PjuuSHbvys4bnk3MUTwYtCTFKZ1YNyjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCdXh5gvoYVhBC1pBdMgmas84KkeMDMn7pWkHKziYskbQqfKpyXnPYBUHP1jfCGkAXKUmBeQiTDbR18dedyF92y",
  "key1": "2PevfbtZ3QLVJ5PaF7ZBb9qnCayAWvJ1fPn2ETdi8sGKEoqE3vEyeWLQJtkdCfU6BThJCoQzx3r5ge7xu8JaxvKW",
  "key2": "nFRsovQRsXLXF6iU7yMvRFHiGdTUrCN4PTQex1GZbAB625m7BpnjLJ7jP5xPt5qWzRuFER6X4QGfxNAsPrYkCHe",
  "key3": "2K6aVpXWTN2QWcup7KfcAnEGsq9qk1fAdFbtpUR3kdpukbYsoTx6MreESL9zyQXhF6Dy2DuaCFP5h661ygWKb8yc",
  "key4": "4N1BMHn4uEsTphaf9xM2GbY8wcbn84ZhEHAaXgRCj7uza5R61qvjtHqV6RquHHtf5royYsuuw8Bfo6Bus7JREF17",
  "key5": "2C2MVZtJsNk1g79A9DE2MZzvm9mmpuXTSeCfLdwjc7Ni43osT3wmAzbKYmeKZaeqZKqPZeBTzXeza8MvDmUTsbtK",
  "key6": "2q4cMvTJ9bBzMGeRYLEtMWchFUiSTFvQTU2ZWzvCcrhyDKfgSghmVuBjwwwYAwz79hNqd5GQZufRjAT9jp5ohk78",
  "key7": "4gGPywM7vwzteTBL486YNCSxNzXnQD4aZHV855Vpr8Gdqe3KuEfc2pc9Jk9YABjZv2RLbEM3QkGeLMHStj62zKXg",
  "key8": "4up6KPBYU2R5XfUMiCRsJGS8nYaYbq9zgHSTnbBmwqzNsGFs3UEn79Z7GMLAi971kaaGnq56KJXTucYrpapVKefX",
  "key9": "2arrsBKoa3teAXHHzZUainTgr5U6Q2uS3aWTfduK4ESvA5u9HKJ62zzbTJ5K12K6FtyNBRR3xxgHX8n5t83z5qFS",
  "key10": "q6dkDL7K7fmX7NVuwNk8u77QHoFjdF2miaNgeYCJXfHbDyyaaYYh9dTh7aVdcGcK4qpgdSw5ogqeNff86gnsNSa",
  "key11": "X9PcA4cHbuQWHq7KWHSWNENJfoUKyxRSd1VKCc1WEofGfA3sDAnCxekcfTkWB2H6Docbe1t3dRt4zyLqqA33PDj",
  "key12": "9ra5bV6ksN3rPftvnfsCCpMMPxWCR8ef4PEzWc7CqEpPAAP9wULSebTniNzNfm91YxYt8Azq5pHMjahwLY1h2MU",
  "key13": "5wfAx8paUKUzAY1PZcqUhzZ8RJAZLL3y84sW3ECik9KocNjWhcSFxgktLgGdTwVXnZiVKJkCWmVbyU94m8U264zq",
  "key14": "3qVhYPzmtFptf969jW1FXXEb5wMK35E8m2GyL8rRntAU4vYv3bBT1FKxj1mkPNqf3nA1xUDTq2hiV3M4pap2KJG6",
  "key15": "4wA3izhFScXhZ49gyZyjXfh6cBtnnjP2AYNCSQvY4EZrRo3aeac2X7yp3ku3mgSVfWo6s72WYGeaMEfUCNCYrKRB",
  "key16": "54gXMvcmTkitKgRF2Z8zRij9cFNoqk4Whr31RqCnuwh9sN4KhU5X6fKDji9kvN5kEFgpAZWBvzGdrpqoSjXnMKmX",
  "key17": "54Qkwq7to25BYU3gAPEWnrhtS4qXsjV3qdrQ7wARwDchqTjsbG9ySr7bjsGyYfnSs5FUYvcyebKp6WxaJbnGbg4y",
  "key18": "2quRWwzyUwXUjBw8jNTuWuefPtmCiXmzU72ZTYqgcDxwNRTnLg8p2fKNMUKiwMhSHkeQd7A6NiGtDZdcM6PWqLc6",
  "key19": "2YV2mFbgZJHhjeQig2U9LyWZ2cQPSuPV1JzqXqbF24ZeS94vocJ3Vbc91bx7A7WqcmADMJFKo6cVtESs4rZKqCDa",
  "key20": "67jnAndZZMSsuZWsit8sdMsWS3f6Q4iyEqp5SUYQ6suC1ZibLua1NdfVmLkADUNK34hgwKP5wzs792E3cnvgJ46d",
  "key21": "3MW7UGNXhAxwUEgdHtChi3E1kSn9RJtXu4A5nTGPBLLWTEERFBoqbdem1VXZVB19oSzdZ8jGKPH8dxCoDDaXaFse",
  "key22": "qxkdT4u8fWzAmEcpXUord9HYFam8C29vy6WqofdoAnLmvuXnDsD6xenCiiSuWXhVgr3SNKcP1Fwi9amXNSUiEZB",
  "key23": "4UXPB11QkonJjXitHS68rGBxuqzQbZpJDNgis83guavFLfwBhE9ZiDeQJGqxRPBH2TMjKgQnivoanyHzP7BTv83b",
  "key24": "3y3kwLfXu16rwS1ujrdjaw6rv6hJx2N7rsfqiZz5FJKyMmfHwL2qKSFdErE9YEHGkDYqjV52JUHbh9mkUqtYdh8N",
  "key25": "5x63YtuHRjpnj3iY3DT1WaYwB4DcEtLCo5Ha2MYkD853vJpe7ZMpJvjypPsV6zYw4znkBC2Z6azmSZ3ZdnVDW8hr",
  "key26": "3C7LACUuKdKJ9Riau3wqbCGLuXYQ1ZXvdExj2qqE9FdZ3EzUEtT8DujARdv4cvG6z9Wfg26upvSytY6rkN8ds9pp",
  "key27": "57kfYJgH1JzoDdPMCkSCBsr4gRq24tfpQwma3aLcrNKuKjCbd8J2hnD4YzGVRxzWNHCt3G9PHddsj6FZLBXoaRED",
  "key28": "S67tM5362Vc5ftUwVqVGgLfxjrDqp1G31neeHgBDD4DD2AWjA9KrdV9taRwMhgQfvbnT7Bb7UEd5poVTS9SCVcA"
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
