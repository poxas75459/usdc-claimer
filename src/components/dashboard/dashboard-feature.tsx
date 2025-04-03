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
    "3MMCTq5mKPxtp35c263DZXwsBtBHRSr9q2eRnU47TQGFNYhMPB4BM7rVfGNDVLY9uhKaTUyErdeW9VJx4Tydykff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36eBDfmA3q3ecsSW3QnEB83D7o6d2zXbUC8wQyQE8a9xQJm2TxHpdnHoe3f59pTRDJRPmUJJGM6M7BAY8Za7eJ9m",
  "key1": "4sCqbkrgN1EGYE3pegGSxuXnFopkCJHZ4XvptzsRCz3zZeiSMQ1yfjzNvC6ASTMFf485FLhX45tMCp1g91ZyASam",
  "key2": "WipBf3EauEgs1hCVHzCan46GGKnEoqXduSxA74MeuHMWkCe3uWVSx9ZJnyVipE7X72XgJ51RP9ConA1zqhzoidi",
  "key3": "2icHjLwQz1VaRzVWWr64DvCUDp9W1s9EwrF6FGGEdUe4Qg6KsPdf8N9SE3tCKx5trbADcka67YQAnQn2wsrAdqPz",
  "key4": "65oNtn16QG7EdHLD5NWSBZtxc9gnHpT9zwit1vfq6VnjPADksTR69pvPRy9zgSYChkWPcto8eA5SQ7N8EFeV3frc",
  "key5": "3wB2VuycTb4VKMDvroEWB8dTf5tt8v5TsiwrxT5n2xnFT7gjk4ZkSN59gg9J2k5p6wxrBXb8GYuN3B2Mxo9DKJHi",
  "key6": "3SmrQWQUbdgm8HbFf87swyKbzbH4uDYSnyxpTH6af7BHzUUukcj9Qs8dRQ4T9SmtPgjzPdsmUiLJbXMTwzEQmMhy",
  "key7": "4pFq5jpqQBgeDffaYgY3sKMp3ZVMKLazDxLdYseXkNdZ1GY7URmstH134mJ8PQrRo6uzWjwqJR53iH7b4BcLG5Vx",
  "key8": "2DsZ9y4DbXSkRGrq6aT9QDG9AcD31hbyyw8cXmxAomU1xEnpnURwbRFJdd7X38kWDK2S19N79yLbrm7PMUaHguGo",
  "key9": "CVmojABT4sRUKRTCrJheX2nTenPFnrfjyefQH88xyaJDbJVtCV3ArUu8CrGeNX3akG4rDPMc6aZct7xzfGDdF2A",
  "key10": "4VLh3C1mJ7QH4VHhjqZzvcmt1MVSdXJii4Urz27hR5RHmQq3TxSBqmtynyPoYuTSTiPUKMB6iULSeqTenvD5okvP",
  "key11": "5SybPAfVJLyNoUEvTMSFKzqAReMnSMEi7hV55dER3BmJXgnFPpQjJCvKMWYPpcczEFTJPY1sa4eSqbfJuQWw5Xj6",
  "key12": "9KwvgUjDffX3XQMbCdDGwK5A6BnKptPRQE8zgFGTUfL2Grh9AEwc3qPnFx4eSLZ29Y7hKhR6XYLb7WFdsGUJVsT",
  "key13": "3cQBaQs6fQLMiv8Q6CeJMoRJL1VTk77SUQ1S2GmkXFvfMeXoZethEahdq1NRYSAVEDQ3SozqyUEgAidCnJezcXnM",
  "key14": "3zv9d9ducaJJqxMU4iYWDUzLpDPetT9CZbaZcWTxBhqi6x8wbENPKCq3FKCGvg24F48xqMcFAZhMY8PxkUbibwZH",
  "key15": "1yuNtpqAaA5gtRaSukaRpgo8SwcQQcGNwDfzh7gm15LXwWrZwbTUu3fbLkABnc9aLh4prGQ8CCec8vX4bFqvcko",
  "key16": "dpsKpjEqPQpePoqKjLmbD84vBLXAWAFd3SgkeTBXiKz8JFoMr3gGj8VUQ8Rn6pauCrYpYEMejUoa11VCDzvG9J6",
  "key17": "33nuqnL2GVYjmJKL9hg2feihnzh6ddGqhfQQzBzyJEWtvf5nJdTboP4UVGH6m77U4maGS3rb6dKaEacoE6r9CK52",
  "key18": "3Dfepopo33F6rsHdWXg3oZfNWi3aUgZ8MtWud2wzf1oREm4aKTAAr7jkeFENe9fas8Y7auGvtU7awYgTzwqP6Cob",
  "key19": "YFzbuNj2zGyNuKB8y8TqKYQJ1Y5oURdgHqN6T35UhwBw1QF4UUvvmZdVacMk3eurFQzMyHKXokN6cVSPy3uGWwb",
  "key20": "5QLZQy4tHcMsLHSYrtr1RQ4FV1ses4jEhXHVm2RT7R4uhqB9Mh6Dr83eNv5beKKhAzfR3gynMwrHyaiv2ML27BSK",
  "key21": "wnpEMyUELjvGvCM3K1oyVEpv6sNnsALN68vmSeudXPvbBgpHfPRux8hRWSDUoPVjocVHfdWheYbaiRkkD7orw2g",
  "key22": "cAtvoNXHkiv6QHgPGwjXhrv7naiEFVCZzqE35nNgaEejmS8Byp4jm9UG7R8Qf1SyppF6c4M988VHarxdzQmPXJJ",
  "key23": "468GE4g1pc3fZh1J2M3mLPikxUjZAZjqiw1ZWM97LLYVRqjzKoH5kFYjSAHz3LjFeY2gU9Q68X4TSobdbMVxMUwN",
  "key24": "2CCApYQRJ8vW4YFspfb15tvQA1uDhhqFzkJzKgFGybN5n7FBhG4TU1PTZsj1vyXviB2j6Z3gY9KdPz6orPH9aSY7",
  "key25": "2XmnTp8t3u1DHsNi1vVnD9Bk71huXVQpwRSrLsdY147DkhXUZ4FQZQkC2o4NCmtbJrB2RHLRD1H3zeXKbes6H8pT",
  "key26": "2WZGVyB2TPxrzfrxh12vhnaB5rfWBY6yte4Q3S4TGF4mzFotSX2bV6G1HTcqiUo33bkobHfNndKkT4JJJAAzq1TT"
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
