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
    "j9L4Er197KmaV3NfC2b3rdQ9WMLQT36hJ9vJXDcg52Tpr58rUCGxNKknxX5ysWJtdyFPdfBqbxj5Q59TEs1DaY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E1ZwrBhP9gwjbFibSVkgExtfYvq3NTmFJZhi2jKtPuGtJ3jVwUSQAnGuLiNffU5TgmGZ4Y2bud1iFZ9FcTvVghX",
  "key1": "3do5uNTDFeLm51bEr1yLBzWLsxJbXzmDPxHfzFZLNZcPUKCo2r8kwq2u3wQ7of1ct9T7gcME5CuRwWoZWZsUWUn1",
  "key2": "5g6JPwWRsn5eAcASBTUJg83c9VC8mzLSuZ9tU73jqBiaEAJngAcxtZJHWMkbgPfcYx1vtrFrq23h8QmKJh8jT4sA",
  "key3": "3s1MwxpexQaLLGNsRjyctT9KTNiJtyWn5LSgUPV3MyuKpEpyycpDrTchYvX6119gaDaovM4Hskp4bQYpJfyc3Mht",
  "key4": "5yzJZaMf6tGXxYZRkSm9nzs7NCC4mJUsU5UUykzCQ3WwSkX18Pq4EYxujw894t1JyTRwBNwHC35mCUu7UptMxcuK",
  "key5": "HTcLUxSbnGKAYdZUKDZjb3F6haG2UHuBMgEyTsmfuDNHGHqtA2TB1CmevXybntymNcxZshCjjm1PyKNatKjsoEK",
  "key6": "5hU6gMadRYHKdPcAnSb641ncWFCijtcrEKE2FPLiHuqRwAwPoSc7JLoJxTdu6bAfpxmABATkjuKeUBt7rwZumVjP",
  "key7": "2TU6hjhVvo7mWyG6wwJ7VcTGrmmrYRvhFK7S5sXC5AXddNNeajHZQwvBwoFmdMhAqAdJDsmAmDkxCgxPEMD9t7L7",
  "key8": "3CjSsHxBxLoiuZ3cTiD9SapjJ8q3kdYQs4F6w1qWVW5MmEWJ9FNoHCAe3MsxpnuZpLtH3HaNhiTHwvwXVnQxZoAD",
  "key9": "4cvJbyKCZwWjBeCak1pWEC1LXnKVuYevbtEmSdqjP5TfGGU9Q7DJfiUfnMAgBZuUttpiHHdh79RcvJ3xPijjuJWi",
  "key10": "5cBq6rZkim5UBUrZHNc7GHu5QGGJjf1itjqaVRG5s8QpAUwYfv14mJsYXoUP8hNfAhFkriXYNU45Gg2RsJzCinXT",
  "key11": "3sJmqJNGU5XQT9XEXy266Te5UWcmCq99vxsRK2N1JWknzQMBjSeBkmFiADwNwQmbSHjiRhcaF2iaBcwGm2eahBVT",
  "key12": "5zJ8gYeuzKDD4ZWgLAxiyNELnFgkycrYNcD9w3MCY2tMFkiVPy9Ksvar67LcGJ2857mxDCqTDPmT6MyKRRj71mFS",
  "key13": "3q77s7K2X8TfZTph5sw8YdKNbk5QjizegcEQrto1VYpNfzvHAJeWuFTH5uQcscyt46W8j6X3oeNK7YacYbtprm5Z",
  "key14": "Akz9uXfoett9B9ggnZhmP9q9vSEaKvbKFLjRptofj4svi9qkaGAV16LVAu25ApHMpf2HLv1JcqFUjd49zm8HdML",
  "key15": "RERbtYjAoTtAyaqCtkqZmaSxyfMARNrJtPUveWejwf1RPgWs7LT6bR9BSbmub5H6exaYnT9FCge2NMkuCsMi8vQ",
  "key16": "5AHd8ivavL4vBRanYF8EHtWVzeMEWyygT19KBK8quDVUrTVoofr7F6CKVKHizZ2FAHR7Ts7LybvUshDZmc1T3XgZ",
  "key17": "GKJfdN8QYswU32FfCWyWkgBAfcqwRtoJ4cp286arV1K6yURwPXhiAXY7KKMDEszGQ1R9EM2BCfuGtPpwHh1b5Yv",
  "key18": "4Ldks398vYSSeBfsXp879xYTV4LYr3DLJepqioBPS9rWSzjN5cDayMbY4w9SL4TC3Gco7Rnn3bMHVBRXzEtFPYYB",
  "key19": "5hdNBF1vYTrRshcJjdYF9f17Bp41CX5vSjTMhuKpPjjzE5bfapKKBZQpMNa35fdpcZKAqAzCsEX5bKAxxappLAqN",
  "key20": "2dySd2kCcxoBohUBk2v9JD1rGtfwaZmxhnXQyFvwGGXoM4sz2omEw2ceXaa372rGcweNbEzSxbEweWzH7hos7uwu",
  "key21": "57QBDNtkSKss9w5sFs4rSwYSDz5sfV7Reo5TMiZ9ATAT9suK1KuqBzysSAoo8ZKW4dmpheKtMEPWQT8VnwaPfoK9",
  "key22": "4Puu9pVjd4bxYF815qoeXXLcdfo4PrkNb41F6HbFViocowe6iWG733JT3UBdhQmUgWs1mS83sVEmzhTbDFeAUTwJ",
  "key23": "2FEFYoTNPNqcifgxNHZgWChmhgrkrAy14MrC6566H9KwUhBfi4ocSXBAhALDfC5Crx1BEPLRXEQtdcuvfrdWrcSM",
  "key24": "4fyT1sRtYsrjnNrc21SnVrHtGkwdr2d4TiKQ7opN7Xg7viX6s9GfhjpApQzDMdDX2jBNKukKcPhHunHvsHtTomp7",
  "key25": "5qihAS4RhAH3utGy4bNXufvUzpb5ufcamMQMdj9vFH63s9oigRhkBDW4Htq4GGwcW9R6P4VbNy74pd8gZDDDoo68",
  "key26": "4rBinMVTMSSR3wbr8MPfDsqRoUASDGpt98DRvsqas4bJykCAD5f4gJZWRxrTzGDX6hijpfkGwswGECSNAJx9V2zW",
  "key27": "2giCWoTWoftveSV58RWk3MLcbsbQsZnEZGwdTgkLF1fVHThxNeq7p3dHgG7UwLE46V13KdEE8b5L6aWzzCAhjFPa",
  "key28": "4v8mPMyxcPjXJhVPQ2fn6hkF8Swvy8R8Vs5kF5v6wjg9G42FfEkjRYR9xGumCzmJCqrVg7wjGdQaERcH7LaH4gJw",
  "key29": "2fmiGh3PfDHfPYZZx8ogNE1T4qD9tF6AVCrJNiESFFdav65dDJwmh13Gi4CV4dadASayBThKr22Zr2qU717wWVfr",
  "key30": "4w85JUS5ji7znWro2aqHSiFa1cAesZ2WCxNmkmV1JvVEN7uuZnTLve7VKXhbYkm3UwRwPRBtrzmcPYvcn2UZAZ8A",
  "key31": "s6KveoXCG2LcTWdnuwkBpZXSNv6L3oSxWwBKmRThs24dYkC3LFv5SL3s3hJrz8VSbfGEwZ9QGXUz8UFCgcwX3Me"
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
