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
    "4GvnSW43dE8ofXJPpZh4PJtTx7FqcfUuRho4arrXHnZeAUGrQWamHbMhJPcQPKSvVm2Z49KQhb2KgCLHaKnUUCdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njG8jCC2hywjxiBmc3uEz2Art9EfkBcQ3geoFQTpqB3H1cjgDgoZ19zicUNwnm2gJXiMWBz7o8Z7BbCLNidFfDV",
  "key1": "2G4ee9sNTiaLAWNB9CSBpbumeDvx4Fvgx3JFU5Up69Qga6c8FwiWcCdz6PyNKqNfYC4ugFCVQ1dvtVb9DJtJvzrE",
  "key2": "HcnoiPDbUQ9ZpqE2NXZDJ4Van1LSJAb9E62tcANCJJqVin9BDApGSNGr2kr9aEubWgvHmsyAd9RSzXy4RLUE5GA",
  "key3": "3WgsL7hgmRuWv5PV9jo2fiEUG1fmHuLG2CgAzJq36qoxHcUBkZCPZjjcBKdYf8zjqpWJnuS13jEvCGCmKGW1ukpz",
  "key4": "2ndafa12K1RRGg8BtZU2XwfT62gfqcniDYfCDuEpk3w2kVEtKGovyeTRsRPauCULPHfqi5EvKFsD1fZAMWHY7cpQ",
  "key5": "41fPAnCsUWXdAtgoJuWohSbrFegFPjyLoUvVYpkf1yLMaUgeMD9YL1qKtcJ26hsqGTrtf7L4Ktd777jsu2YpJmkM",
  "key6": "2nR8hQnYHf7NoWBdor8MjLn2mjJQjwgHbtTn3EKKSdgJT49Gx12FDEC5w3v6YMhvdSGv2icD9D4pAMy8XZNAmDnx",
  "key7": "E6vNLif6CZPi2zYKH5BkEM8cEo2dnwcmdnhaDtL5BVfAFUQWDT7zKJ9NdZh9txRxV8E84RYTyxRjMug68ePKDkJ",
  "key8": "4ErAm5sNNjDDPre1coGjmX9FthbKrbUZKvZrHcNg12StXcJZCUjhGfa4bJgdrnTZrpxxqVsZ2bHGXpeqTFWNMbfA",
  "key9": "3MzLDcv8gWWDoHhaETXz7okZ9kpb9sPZpS46QoWGqHqGuqX5kh8y11YFjokTomYtXLi951V6cymCBoQFBD6HyTNV",
  "key10": "36RnBMqMFH8g6qoKPvvSFXurwyNcWSULCJAvAxpqVwHe1idACwJz9FgDXXMZ6fZyivem4BB8C146yTHMhKi9CGdj",
  "key11": "5NxgiCHZ9xQqcFs1kc3kUaZAkAQepYp1upGZsVC1s2gM8W67Q8ga48v4NrBWM3qZiDAoREHTYFTpBQmvmWzbxANy",
  "key12": "apUbbwdP6ALe3ceNXCVhe9Cw1eSAJBREE8EByuEWpZRaQ4JDj7sGfrpqfzyNVMmMAezGNSzc7fL328zWWz627DJ",
  "key13": "5CpCzvdi5KQyM1jMSjF6LEUJKDpWXoyx673gLVvs1bWpJnLasDEqbfvKyX6BhCihZc3nbPgFRaG7NqWo2Tm4eUr4",
  "key14": "25depSzXM7ibbB1CcaCBLJuKRXb1gogx867HqmJqbgreer9PchVVMi29vHe8EjfNVcwsewKUbFQxFUAmRfpsBqUH",
  "key15": "fiXoAd66f6iqboY5h4tyJ3TsBsgAtRsnEu4HMMGhHM2SnF71NdJU3pHJG6EKdKtYPR8tQE8R3eeVNyp3xWH65DD",
  "key16": "4kZFPGgsdP54cfPLGq2dg9GVWTPHNWhky8z6SSJjE3qnxEzw2SBa66fgSRDoDpBV6qRHUfqc1BWkpREkaZKJ1bRs",
  "key17": "3zYtzeyLZqiYm1bLhPG5tqwxgmsMzr3SUB2hE1zzowZRP2MikYhboDWUZddqMnkmJYhaKE8AnBTUKu6CfKuo83T3",
  "key18": "3UyKmjtf5J4dvB4YVQna9KgoWgJ1LZ76xyhGZEt1EATgQ1e7xB7BnQb3vFahmKNZ3Py2YkRKVRVSgcqAK4hByD9Z",
  "key19": "5BuJoWUw8Ck46f26CLvVewoFUDgEiUYu4LBTDrTapEHJsx4ExP8LaNQRLKKB54zTF4trjrywiHhGqGkfWVgb7XDM",
  "key20": "28fbTcUq1uNdktR2aKfJSK5gd7ia23BRGfDwYDTFN5nigrYz3PjEVy2dPHW6vGZvRY72fdBTZxadxzNAoUDKPe3T",
  "key21": "61FxsmYKyQRaXNWfXkqP4ijBQnTamMFh1FLEGgp4EK8Kz9Hq3iZWvGqYN6NrtyVk2knYvAKkattQT7QSJcv2nTm8",
  "key22": "3JqYhzNQbLExEEznhcJU2irXUSW2LmgHCAsykUYASyugi4T9tdYtSRT9K9RG9aDi8wEDA2dLmvKmhUQv68CcrL3z",
  "key23": "AC8CioGPBD6oC6knJhAasGf8WfYGzJPVDLaiPH2HrkKMFdSLhrbMLmz48ctsxftLRUbfppZsaqV7dKfe4NVWuHM",
  "key24": "3kmVRmbGo921BQRHRmjn6NvemkRCt3ok7WMuVghGPPcaJipK8zbqcsW4gwtPe9Gyf4Ma5ia6dnanPdvpSneZrHke",
  "key25": "4Hn9u1gK1FKqf5Tp1pimYFP54qowBSwNk4vrcft2UYwrhwwFQP6pfqRLeeS2p87iHdwes8fM59CBRhGNKtHTq4bh",
  "key26": "5r1PZruXDsCPSkE76KYphPMxrcAreAZvP9XBGpGWWmHam8KSCs5yrw1aMGC1eYesb53hTH2Ktxziw9A6yz2SWxDV",
  "key27": "4py455Mtbjy5cGsCvrTQeg1xZXVUdBJQPcWawQhtqULbbw8G1s51wLqgXPHD4ZN21thQcB6uEBe8t3q9GRpJF2Qr",
  "key28": "5eoDWWwUnq6K4Pfqfde9vxHZ5wuavdbQW9rsGm5ppqz31zAG7L9yMc9rWgQNkSuxD9ZzxUSWQkzD4qhyGkkQEU89",
  "key29": "57hcoiosUC7KUx6em5rYYkJMfAXkSeVr4xayQMfGAhG1XGc5FYQYHu6i5cPWARNQiHzjMzXTHJGkbqVAjhZUBcLL",
  "key30": "5yvBz3ARNGdD2psrcrmPk7zZ3AUtR8qkKBCQ9Ywte7yFE29KsMX9Y52aCTdYAXUpauRiAGyDR7U413Fu1Zw6TCRv",
  "key31": "ScANQD7GYZa1Lxh6AqMPd38RYDJcPgHUoz92HPvxqNXqNvamjsoEhkpheMN5Vx9rpWEaeZQvMGzhyxn3QDJJPWc",
  "key32": "4uRrJJmA6yrkFzTg9khChBiuU7AuRurEXBHEPUDjhi4PPpvhN3MeUrZ4ibLqVB57j63zcyBMcEmTkHUL6LiLb3Yy"
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
