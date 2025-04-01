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
    "3Yksa7hSSsqc1HowCucftiiBCrgfAwwrS46gtT83vvGYREUA3BwHJ114LjmKWp6cKyT8ay2UEuwJ7PusZuCseVFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSjunTDKsZVe31A4zrJa5kPZ2ABXfXAQCtQuTnjZVtBDQZZXWsNr9FJWhv7gBYCSBzN8mCxyGGeTCjBwi5ZPpLd",
  "key1": "45HqWTHpgDgVGEpPmKKMsNESEWqVrKzQHdHok5Ph5iXm5Vq4KAZudhM6g65SwqX3agL1wGy132XENaVpazGGqGLi",
  "key2": "2WdXY4HgcesoSC9di9e97n4J4Px4kgLPsLmrcsKDqzousk7Egb2rvFGM6sHttnqPqHzpdP2MLmi7ufATC2DBEVpy",
  "key3": "3Zg5eV2Tgr6Ft6iJZ5AK92dyDA8JGN9JaUYmR2iphtWjXmriBDU9gnBJxXXptxbBowKPgZFJrjG85CNXcQarpZ8E",
  "key4": "2zjdSwb2gqHP5z42oP7jLfjZWVfFVYK2uVoZYt9zfNsxzWCSbQTH9zXuxuEhsQF96fkhcPrG9hjb9iwCxWGXEKAw",
  "key5": "5hkEGPapWMySFLxFHD5vV4hTVjnyKpT5gu4ME9VDX6v6eoYPLY3zCgECzJstTS98k2YGMzvh6oM6hCNMG34yhVpk",
  "key6": "4Yv3MuGPHHhHJGcHUPiNM8Do6hnSwB4aa3gAYt5ERx5mtAiGPcyGkCLBrbiDEZ1phmCFFdRGkoxcUxknjm7VcGoZ",
  "key7": "4RyRseW9T7NwyBJUpH5VPspAmod28owaoYUYwuDQCHj9gca6BMYMqn8dLBSsg5oxKPVsEqTBmEniKz6BMXxmDdtG",
  "key8": "2h8f2hbo1pDnqCWmiKpvfDr7FvsuLdSjRvgFvMPyVcUdpdwrrQSBmjQp1krFSEofCmyCbE8CNjn4o3q68wAv5LK4",
  "key9": "2Df62emnMK1orppKeR8Ycxjvxzto8ieA6ADVvGNdieWBcwBGC1411isAGhkdiUXf5XkHy7nWMHyQ2FberTJsaskC",
  "key10": "2PuyGCp7suV84YUi4DNuSh2BGX1hZXcdsoppGPBBzZs3nbSHpnYypHeNXAAsvH48kDBTsru4jyWVqyHMszLEJPnm",
  "key11": "4QRdNGsE4iKNZanx7XWEgxiZ6mwoAKu15QxyDMHwpJNF2Mz5MB9k5F8piFAaUSbauVmat9BjDyXP2yB1HT12UkKn",
  "key12": "2rzQn4pCTG3NwitippQ3FkY16avfKoZLToksBLU7akJyM2CNpAXEMTQeXxuFu5ZR9W7xr6pesaGSmjbAuPq12CXJ",
  "key13": "4kzdrpgqDLde1BhHoJ2gP2wWKpRiymzjcsWU7xfkTtW6oqZP1K5qpUTFxafZVxQy3UweB9jM2mehEXxMZWc7foyM",
  "key14": "uVx3wwS6AkpzHPBHFfV6TAX9LHDbVbDasAewvyYtZdzSz5xruEDfPcPgGwf1DFf7awaMsKLi9Zn24x5gPLgUtgV",
  "key15": "4wskMmZmZVm7MqijshWKVVdui7JDjFWNphHRNYhF3NjEWhQRgFqYifPG59h7bC94sTzYYJsStjuJsA854Qs86XoA",
  "key16": "2fBTNBgXcAhP7cRG63AGZDBsnQHJqHMEz1oZR21Wmvqwog2dpVTXPp7FXTugtZV5TFDbcrmSuUTaa1zKi7Tua1dK",
  "key17": "3nAkVryVCtUoSm5HLugUMNSw8b99VZ436XVqRqrVAUDGHZmQ1cgk5ExFdr9Wf15zJpb6JkjErBXFYbsTmrWAZHZb",
  "key18": "5FJ9or5E8FEdLWfXhpuHZsVhhJrncWqXAbGE4WfH2C6oDmiBLB4trHT2uj223aZ8pEWLFTh1cZEUsMEC616VqjAu",
  "key19": "4yc1h8QfyRqX2yA9VCLiWDvpD7RJbt4fsqnXUqnkDTZ5ygYKniARyGEFHPNpUniv7XzqsBiTJuuHQhr1iXMYcLRk",
  "key20": "2LejKpV4cWRxS3NSytDLVP1osGfM8g7jMVkzFDywERxXAAWA4YLoZBCqe3bC5HqkvReyASRE8GsQDVJfsLEXGigq",
  "key21": "2M9ab244W488AhS4P3GRx844gQzGHSAKNzNNhUwTEheq2r8QEcBQT5JZh2AXhgDDwRH1TRos5DhFmt6PqaxHBonD",
  "key22": "5HxkHtVBpBZHrYLuMMwcnucqYcTC4KYhqe8Vb96HYzjZDUn31vRwscDzPLBLqgbEjz1vmcpL6RkVHNWjDnfJ8SxC",
  "key23": "5aErgrixV2Ra8wSggYD7XK6xL3WGNvYQUNAJSCY76qadnwVMmJcSpXURbRBRoaHTVcg6ri6M3PHzBfhMCuHWJqNg",
  "key24": "3Jb727LDaU8S2PLeGijWgVj6AV2Li7uRVwRNyneWUs1yYF6kPyAiXw7bndq2rWAEhF592gbNsm5c6b6qrFJmXdxT",
  "key25": "3PM7iPDzMizMUGDBnu2GppWNVTsK8U7nBCbGfpJXHp5vksgtttugN34K6Poa4QWY1ViyFKvwpHUbehwnsUpE7B6p",
  "key26": "66VEUjBN7U8uJhZNgep5k3wYgcH9bJsA1ntYUsWGv4crT8AAfSoWS2ypYggngh7mHLrun7X6G8xXHdJ7sDLkNT3u",
  "key27": "LvPLRPUfssrZcP8THmmA2ifScPrH86tQCA9HY1FAfporpva3rYj5vpRj48XzUX2FvEmqwpN4j5yu3LVKGzv8BDM",
  "key28": "3Mj9ChdaTmNMFuCup2H3pbzy63JfomxwvYqYAcWg994t8PoCwyFaTP6PNS3E2htFG6tqzdeHzfrZBk3aYc6BiTUo",
  "key29": "3T3a6UAPHzfWdkWj2vWGNbJW34GXygw46wng7jacdn7oNpsVt6i5ScdkJkYDs7CbXk4dZwNg2f7wMkmdnGGu4aK9",
  "key30": "5xDk4DnsVVjkoqR4RFvLbLLAX3i3GtczXmPNom75zk9W4iHhsG8yYy2Qs6isHrsgs4NUwTx5eSHxYdEqzuntwzbh",
  "key31": "f7TFmhAHaK7tbWqk4EjP7ddb6LaAYYPupCzc2DXBoVWUCkUEcaYrrRjtWuzwJgGLn7bSCC3tvxyQDhNwXpA3RwD",
  "key32": "H6X1dZDpB3Qdb2NGC2PV52Wjx7ir1LSiEfZiAAUuUddSJLnRbDa2yK1KhA5o7ypAwW5bNR4G5S7GkvTj6NgiTbS"
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
