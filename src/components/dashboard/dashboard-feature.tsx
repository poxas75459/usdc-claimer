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
    "4kuGqZ5ydBfBAcTuYpnhsiVZGB5KEWAp9G7hgFwB7ekFEL1LzCfL2tE2MLadwPQWCP7EWNw3A7iZb8f4KECxm2LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbaqS2Jyn49EMcwJQVxfsBFz8oAsuDr9MqUryQMXH3QM7MBKN9oHwr6WfJS7McKkNB9MAcmwFrjD5Cy76sm2Xzs",
  "key1": "ZwDngowiWF3PQC3DKhxXpZ3e2DjQ5mTe3bzaCz6gkqzaP7SYY8f2T1AZkH6aongvw95RzZR5MP97cVhCsoNAeVa",
  "key2": "M2TU7L8Et8Ug5qThpxduo6GskDBppea48mYGEzt5yN2uWrrrtpw7WSy27KScUhFHDc8H8Xc3JDRKvCfpNw19suy",
  "key3": "3SJbydWQYDBd8eQy9VYkqBdsUWB2aKAQn2bqNtAiu7d1za7T1r1Pgyi4D6FXNX8WbMxkc1eJNu9AEDMHGjQ1Sph1",
  "key4": "3P51DZhNT3pYFckt2Y8NWSUyNbzJR9j5MEA1Q3LfEDvbhhoGMFpHDUwEgoMfJo2mofKWiDNtb879j7brM2ZxoPRU",
  "key5": "5G79KKq57BgjboFKruwhQr2Bd5He3SWpbnBSyo2GJAHPNVciHFR9v5SqVGHUkkHsxMDT4C1Ctr5BZwZRR1ouudab",
  "key6": "3GVx8LnYJqFefeSFdQMuDnZukh5a8ddtWigM68zpc8LH44F3YdyAwtY8cZGPttJ4pMNDBHnDueJvWLYaFSzg9GmN",
  "key7": "21Fez3hN6Ybm2PUP9BAtoBguvAfUdhC8NvHRH1iwkCGShcLU3NhQGr8bikm7QNphrABJLeamLTBzioabRNGVPf5E",
  "key8": "2W7wDvqhyQCoc3ErRN3Q2Pms4X6m97c18k1zDS2chNUeupp9yWAfF8t4dYycg7jN7ZRvzXyEnfmUJzc2SBZPEJPa",
  "key9": "Nrhps9zJxfMGWhpNa1NqjW7wrSDxgDDchdWeHSp1egWqJjbjmvXxPMWWXC1Din2ecdCLAUtEAq5bDiMxsFtfzKX",
  "key10": "4ant7NuLf8yvKByXtrC86q2wNFr6EYmvW78BCEWJTe5w2fkVZoVHRuitVt59PLcq7MQMG7wEpHpW6kf3TxNJq6nJ",
  "key11": "3sZ8m47bzRzpxDQBboJZKykM1cn41r4bHjvpg7pNXAwgPKqkt1BUuTXyugW8dk7C71GSaAkCm6g8nXYo5dRnEMxu",
  "key12": "2i8w7M9pBYQHSq93Aa8trJuxU3dLJAoX59xk85SAzPAKqLL63qMutfLbpEcyHrg12QpNsXb5BSsgquXp3M121e7Q",
  "key13": "2bHvnYFoMgdyVnHiJvXkxG4kiRmancbZFCpz2yZ71k7MEnPwmx5RG2Wq4EgBvF9YPRKRejbeUo7DtCWnEswNt9WD",
  "key14": "4C5NALUtAi45BJNtgwg1f5AVMZkcqoLumF4Ffh8LKs3tGhZrp6Jo1EsfpTzvGATFFiQBNy8QXycianQcv5byyKXC",
  "key15": "4rZ4UEPrfgwhV5usvfDmDRdBhUQsCbpD2kHg9gbsdoWxAVRRzz6oZCaz29Z6im4qfN5vWSht5d9gdeTjEGF5HL7o",
  "key16": "3NHRaJC5xoFgxp6pfqd3qCd7rLKVbLBp8sWxpUnHasdQQpfABU1qV5ZAWQf4p8Mwg5Um96VGhsENm9gPhT9hHUFt",
  "key17": "3ejguYXBrVpHSpTYitdTQrUiGHoTBgZGXkUhp9c5ctJcSEQEpckqJpUCRewVqtjdB7AZDWx5CLt17pEsYHohJD2w",
  "key18": "2Jcp4ZhfEN4yvhZK1Btm3kFtCACngwZzhWAghw4szQYpyHys3qSGm9g9zppux2igRfn2mySb1XuQnHZth934Ji9m",
  "key19": "23ox36dKVMWfu3bCjSRxfNyhNYWwrMKF2gLMjVmWyNnBbBhuah2ezL2yopXVhoAA4bG3f7ASu834NWjAYxnzzzJr",
  "key20": "Ey7i1SiGkPc3WBf721bcWtRUsMnRKGnyK1JFV6kJpEjKmRXURw1CicVi7s1M3DNZrdwJSCZAmeHCy7FumsADmCf",
  "key21": "HpDFzyR4krFYr2NpvQFpRLFKzVHssy33wydG5G1PkqouN2zdJA8JHtX61Xo386p6jpfB6CdDq1CpbuqsC4GYnrf",
  "key22": "4RX9sTsN1R5Kr1Mgjhq9TtnijfrSbjXM3bd57HuWeuvTv5S2MmWFrHGc95wJ4DxxNH4C8VDwirszbcPbEPL6tvvJ",
  "key23": "3NEGCfSTx3b4epyaJqdYxcMK6UWCZk3gBDiKYGs2tSeLAMhZbNYKh93N1iEoPwNDYfAc6gKoTHSMvWB1wXo7csXz",
  "key24": "4V3WCaLhxuho1rGpgcNikdh33RiazzRzhGwRL4LCW588phvci7nzTcFnjUR7EAqLbUidsopfNbSWrwnxD5BtcTNa",
  "key25": "mWEQUrJiUkx8ir7r9FyZehvTZ7jB6tJucGR1LcnwnbojKtCE8c2QyfMQt6kBsfNG6S6fDQNP9VTDxQivk8pCx8V",
  "key26": "4VirizvCw2RXz8yKv1FeFLWByM3s3gKoqEWHzGmYWKNQhBh84PHwRtxAh9RiKBs5KtY9LQXWMyumw9sfA7LMFb5w",
  "key27": "4yxxpKxQMQjHscQKi6uTC3ZvBSwssKaJjirRE7DkzYHkympuN3pi3KW7iK8aZSeCui6BFbTk8KdzMGJQBn3BSELP",
  "key28": "5yRvFkPnG93XLWDrTanSGU7UGzuXY3N7o4CfkkcwHoCdKcq2oSfRgVM5xRwcMjGAEVShLUjN5GYVPyJm8GgwugU5",
  "key29": "4b5qTfyPjrS3huWwxPCTwXYjXXJz9Yq1ykTWow3JJKmyivcM7vPWXquVETog6kodZ2nmwmZ5t1hYbZsN7ep7HuSK",
  "key30": "2fi6ieWLUgYeyngyrVLxNTJ2gjBLcGXikyPAEcAM4t93j9MjC5g3NnCboMB66pSuaqcS6WKGtSYGnWWSe2jizVk8",
  "key31": "2rDTPyTbccjVNNK88HL7mVrn3FoaV1QL6z9to4SghGHjjJVewHXerseiNDYwQPSqCxwUgcACjUhrbd6hfLa9hxW6"
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
