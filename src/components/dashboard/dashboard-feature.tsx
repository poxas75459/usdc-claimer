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
    "vBj33aPHyJKhqK749TG4oHM6U9zbciuoi1WsoR9eLdQqCQPddo6TCfDjroZri4Yee1wNxxBBtPstLXCNT7qWGhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QiajBitqHgaSyGxiRJ1SJkxuj5Wu7E2R1CS5L7mfzLmYCCGk19kfowvpcXha96ZNCMhmmByFNRJ7qc8EW6vvLn",
  "key1": "536n2zmNBokT3gTGJyqm5pGXm3gzoutf1gKdZShjBsjhwsceRCt3Gv7CCeHmFqt1a7dLafrAsuvVtb2W5GVoiAdz",
  "key2": "Tt3xQ6VdqKSjmHQmf9N43h7hXu99QVr1jxEgrFanZySqRL9RMArqfUqJxJ42u6s68sTbZCoUVSzjkDqdNZnVmeM",
  "key3": "W96AoHhXK3ooSGYaLsxgvFkaUSq1E1LRmWH5KUKrWxuiTeScUMSuq719keg7tQ1KEeWY4GDLbnjG3cqnpCvxV37",
  "key4": "dq1HwVt2SbRj1eUpPdNRAXf9o7Mz1rRzcMcu1AAQTtnHoXfrZgHG7az134dZnucH5T1RqDV8KLDco2v6jGzGAGE",
  "key5": "VNpoeymL17YxaTrUvDREqRYPTKVLj9xSSjpEoMPoMSBi8vDmXRsU4xSzXp8V1bd4SpjZnd2wm3rbTapSS78SfRh",
  "key6": "4agPRqmw88vU7s3zp1Gh7t6e9vGfeXYxTJ5sfqCoJdcT2atM9zwqVfNpziKwuNwxEvPJbxAvsVPKcVxc8oG7xcaq",
  "key7": "gZJBcwVBhFqtEbRefMCtdDVthkUQEUB6yfNUzZB1BL4wbunKAJZMKGcxgVtYwQBVSiRETRfEZGKyW1vsdH1auWM",
  "key8": "3deZKifapN2J1obHPPzeo3tEkfYdzYw8nYR6HDhVC6z8Et2bfaAbxhq2JUadRPHzLH2jTzVSTH6p3JkXRoSUrome",
  "key9": "3ZpyDC7aEqv26EZt4iUs1iwwe77kNVp1jcMfNHQBF9BJpHKtK4isW6jyeC68yoR53en3hraUqCH9Ut5q2huYophV",
  "key10": "4g1UKC1mbFmFsQVh9fjinqfv8NTaCjsRjJGXtVcCHoJ2pcQJWgr1LmhgxjpWE8MJVA7kvkEPg2zb2R2H365ErPjY",
  "key11": "22hYDVPpt71neyQzQxDeT59tnKcp1r4YGWq1bNFjC7zBq99s14TRHac8E9v8uTQQrutPatMFJqai4GCYNrTW1jrT",
  "key12": "2MoU2Y9MFzDWSsQtaUtnR8CyQp21REGbZCY42qFxKgYL1TNKBWX5aFifj7bgqm2qsnaXvTAHN2qjZxpb8w4U35zz",
  "key13": "25KebBUQZ5Nerx71rQ1GqeCwXBMpFEwe2ENT8oTNaDwuhaiobUkBcfBSike9zg3Z8TftpaXj7fAsCdAvjQsKbHGg",
  "key14": "2LqkRCTxW8ZYJ6jj3yYr52BwCh4obVu25QX8vWBuFPZXew4ifndX6JRuk4FDtSMWdfbRYyB62hkLwAxL76sfipFg",
  "key15": "YJt914vWcNdorHhKND47YeSEKqMFVzxo7jtrt4KbkvGXbAE1wkkTGngskqx13Xpk5rYgYFAUxyi18eadtdM68gv",
  "key16": "2uqDBQwwfnUS8Z5Ph88dAyDP4xcJKxnGWvshhHddgcchTVA949Njz6r3yFqDZrTtWAmHr6Ldq21EefPTfFtY7vXo",
  "key17": "3EkbZTiQt9MrkUCqNZEpB72bZCPLcPMuQvnoCii9AQcKP3QGp9wW4yUkPzH9UrvPV9Vju1dDx2PtwT37WgWmzmEn",
  "key18": "21Fd2YmM54yv5aeZ8BKgeYpcVNhfzaT9z1BPoMnSpvMCQVMRzNrDh8uZWnH3cJ6Nmozc6kbf2qLoTdg2cABDAnue",
  "key19": "2CtbSJYPQYa8X4tPbrQFpZntWNQnmfLprMWi7My7dsNt9XMs1zNcSRbLR6mReAYPoXRF29AQZgF829VgbiGnDnSp",
  "key20": "3Qm21Qns2aTkZj8xcd5nX9NDmqBnZtU1Kv84xBuQDCfWu4FTuyLYpjBWmmL6aerAzHfcNcmnSuNvHiBAf3pADWfh",
  "key21": "5LhYSWtcRJNQswsqZ8ZPqteLy3SWdTW2TjmkjVDtFp8VCYiR97VPM3Gj5xE9k6a4bgQTNjgumrnyWiqtKE2dD8ky",
  "key22": "3WAz3gVtykDL98MNBtN3W5cWfkRG1p8Lwmx2R3MpqNnYezSGkNmnxZb4QCLVP1LtGDnhyLBGRWtsmU7xkXgptb8m",
  "key23": "YzSCwcUoPE8e63rx2whdKPDngEoL38wn5wVMv9gqQNzChQPVtoqXVhiCHXFyQg57cm6wQLAH57epFUA28HUuigg",
  "key24": "4ot1eG59XhCz94sfEAHvR67NcdVA8isfC2hV5nCsiHUbwmp9sPm1kGA5b1jctZ21J61ueveTXBvLV2fNXaF9SKAm",
  "key25": "5UcrLae6VhZh449kDXimDMSQoNNptr5n9agPT6Zg8VqcRLjxEAV6UysxP2TY1fcnFBaYeFMq3fN2zYwBsn9hAP4R",
  "key26": "3bkSnnCsZsYT2vmPqgPpGFhmkfGkycL2pkZTyw9Z5cdxbnmBmBwexxhx7gahy8dc42iqM9XjGbjGXJoSECt7H7Mp",
  "key27": "N3eywSnX26CyUMXKbkeNgnqfDUARtbECWc74yXntd6E8WZbYDG61ptfJfb9e7SNcgcHWnvmCRnKG1KESMg8hS9e"
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
