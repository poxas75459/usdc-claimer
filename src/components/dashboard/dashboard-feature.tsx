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
    "2RnwqK54KbZkYh6kZB18fHzcaxM3uTMisfdV5c8PEB6zMVENwaHV9Zj7jSZHJp6ZFfDhivoegT6M5vz9YR85Gy6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4YbTQn929T5cRcoSoN8V7oj2YHiwa2CCQjeNGCaGvtAWnphuqXA74N5N1LLtdHcXdALmbhpdwMcQH4WMXf7Bzd",
  "key1": "SBnJgCwNYm6pr2y8gVcf8hr2RFpNKHubFJiYnqKbhZ2jBgJfLQdfJ4z2su6XJFUGh7gy4MgifKsHk68ySnTDA5J",
  "key2": "4tog9PkEkDwE2LeFZgbXLBnQrTH27qiqSWmcsZ92TDswNhy7CC6Z7TVNY4TnNvDSLUqTEEQ5993eTXb4rB5ptgkd",
  "key3": "2iexXepoh7EZ9TT7QvVYnXMdNmhjGEdAzYMyH1b5bZYJhbfBQb8pX8Gz472Lm4XvwCMcZ4RAd3BtaPcdHpmAe23H",
  "key4": "4uU5L9wrACwYthzeChAqq4cNMXTrxoVTyceNhb9WRjJeKbApY9GtetbDYa7J7Kw1MVEowoy93Ks8av1QupZZjJQX",
  "key5": "3AB34aH7mDF2nNw9bMKSNasvdCGzbC7Ck66n4FuwSE2znaSq49gZ6gdLVPS31YawUdKZ1tsy9iT9fKvAvGFGsScw",
  "key6": "5hwHyCQfDC9oEeRinFnKnn2YsE8BYADsJFcBNUmprr5TwHdRpU1NFa61Cr2rGanjh5xwGztcJoU2hubYgRCoDXbK",
  "key7": "3nqpZqqa4Hp9hUuN1aRiCechRSbqo1go5tFxf367RcYGnSDR4TyR2aJzE3qvbUAEz3JoATebPRJ1q6djQ55FvffE",
  "key8": "2CMJiQLe5SkFtZeGpuHTtoPCZQqiU82KZ5poXCMhtBJLpmH4cXjdwmn3U3z6nAczxFn9T9mAcpd7i8b6tDCgqvNE",
  "key9": "pDsRmHrGnJZYQTMEtPttW7DG53G1gixno2cZnJFg4N6xEYxejY3ekmbc6L5tSDtPSd3Ma9QeUJRCeQxAZrKmJ6D",
  "key10": "3A9FWF17hgkdXocv8EDLRDcm8UwJJGgenjYwMqLACGk1RUEMuGLebMg9jgi5TC7vp1HFGqVWJN1fqRR6Hjw4B2iE",
  "key11": "5WGiAn3GQPW7fdQ2F26g6kv76Eq3CM5YEbVbCeGJavAyKenVBrAUdtZEt2UocdUNtZC2rKrup7XyE2zrajf7xLcg",
  "key12": "2MRmmHNSUTEyVPmsj6qffodVCJdXAp9Ah5m5cJF1Z9K8diUZhyHuahfbx4Ph2YL5QaitWbDJdVBtZ4KM2NdV9Nut",
  "key13": "3GA69sbWUuUtNBD28xLbzvK1WBb9E1wrcAiWFAhfk7FRmJ1LhEZeEpTAQUtsX2syPU9YC5JwqVZ3fanrXd6bg9Us",
  "key14": "3KSfurCbqu8nHLoWyLVGQfjHASDwV9XjEHFKtZKydX89KW3ALzpA5PVCms7Rj64fonMZH6SYySUSySU46VpX5MzX",
  "key15": "56uU9t18Sjs9rgX7uumTkrDAd6Ai9pFzYb7Ca334RWzzWDcPjcMxSXXupnuM5HA9DQiYfiecc3deqxzMtBozNFsj",
  "key16": "4ceAYR5nchAvjExJmsdJn1VNFJ7zrEHDfPdE8Lg5D4hcauG8u9LT6FFrZ6Qz1c3dmeE6PoJ9jf6P7ryswJkZk7W8",
  "key17": "2232JGuZKD5HSMnn1W8bAyi4Pjhoujqp1wtwGZZ2Cb61bCNW2BAtqUbUs152iYwcKNCxDppVSpNrPiBHou7Mvmas",
  "key18": "61hzwxfFZhrR5dPW2SSSTzzhqkaueKWZU75YPhkozqk89K8sJmndqT1Ggi6H1rcGJzGrEHqbqjetbNNiFdtTGPmh",
  "key19": "5nVSsfSk7uyhNjS1obSJW9Xbf681SpouWGGQdT3UD1goy9WT3rgxUeN5AELciV2x8Ayg2YXBLd1XPabx8cyTUoQJ",
  "key20": "4mBvCmfQbirDKeKitAzWmivKrZV4Z8AfQvpqnCCsnEWQHLgnp2W2Se6qmnCKHUuHHgWc8XZquv8j65p1jgvgF8VZ",
  "key21": "3CaVdXR5TmCJER5fEVU1SzxgQPawHZSHrmfBgkrAt5SBo5fCdRhk2QLDbL7x5uKzJcBV4mFxvpdEahWZwfuBmvQj",
  "key22": "5npBzZnuGxgWdMX4ypp9NEHw3LWFEdjFWu66ymdNHNDJXbktSsSHFeXj8SyGhJdfnYttAGqMeGbDj32PHftKhbyU",
  "key23": "66r7WoTdzhyuJbW7tEEMicyGYhSdJk74STnR2Ja9MXF9PkNhpR6MSe2SCKuzbgmv6Z8JsMvRWPYJQfKvbzyyXiKP",
  "key24": "4SbDZpZtBxHiWvnuwhSm3VMBANZECfPJY3ujQBEEqew4hQWTSSchLBoDoQhpJRsxCMywCd8oUZA9hiH9SjTG9dHR",
  "key25": "58AMqNd7Rc2izZxx5ajFjpwoTb8aYU1MbbRcSV53bu35CN7KJ3xC6LLos69AMb5NJAYaEQfK2LbyHGTBs5feGtJL",
  "key26": "YXnGF7dhM93rtwBfvaCHGZrZeDQQbFGQ4LZh3ZBmptZgTmCmP5LgKwFkkpWeH3Xc9YeqruLxNxo39qsasoVVC32",
  "key27": "2LtBQuF2q3hbxbtCFX74qbKTAYvUWKwFkqTGa4ps2os1TrLT3TTnuUd2g2mkeSdqehkrrFLdNJWtPCijqDVC6ybW",
  "key28": "2YCpDvudsJNhA4FQpZu8xxSsBd9HHLrrcjEX94vmrruP4mH7ydmdhLkHpCP26SNx8adf5hGupKMMRG6314NWXda5",
  "key29": "2m9Y1kLk82TSrEYGGTtqrsqvThZFFhb5z47CHBZ2ir98MK3BmsKbktfvKQ6EnSpzWJ9cWHnhyNncACvuB4gfwP3Q",
  "key30": "2Npbd1KeCTLuwjbG4TraS1VEkxE5dPZbeHi7Ya4Tu98yRVpHbzdWGyDPrvi3qMk9TuBFHGY2P1S2Xp32acpt6Sgi",
  "key31": "kv179hyut4XC9He75KPp2DwzKc2jR5wC24Aij2YtFipT5xndnq3abPF1fDsFoyK2gbRxtYvCciChDppGoDX6y7J",
  "key32": "4xCNNYMWNC7QfnEqtE4LDSeKGYGGKij595aQ8W6ZTqMv1Y6RWfSZrtBqg1ZPhHwxbGc1sqvnDzTFmLtoh8VSUMxW",
  "key33": "63GmG3USFyNEdEbQkR7xaL8PaqdqkC1VEjGtsBTJGCj47fWQhdBtrPio4XPAnSa2AEnm2WvD1qQtaJEt5ucu5Wiq",
  "key34": "2EHA1j4aVk64Q2BywKQ175zy823e9raDggf6Bt8TQ8vMXZA3H48sC4rJeLRVCQoicXbxihz8GvSWDATydEpcEWsx",
  "key35": "4MCWwy36KVLYMxz7u8cyqdnLboE4BhhZmkKJFzoamL1zVoPXiA1aABMBZN7UUCa5Fu3DTQnZ5fVPAmcvZNZHK34W",
  "key36": "57MsBRr8uYgPvdyaGYxTeK8zR9hzhEeU19mQn1418sMDHAZmT7hSWX5kuzm5LgNKyq8kSRs33YT3JXbu5vaMzB9N",
  "key37": "23pFRZSRwqbSuFocLGGY1oCy4kBX2bw3uargecjBuQEkRoiL6WZWUjvCxdRJQQsDXhWGbMwPSf4T53juTqsNGL67",
  "key38": "zW12TRVwRbyzbGc2Yafw1QiLBij59Goq1K1wJCJDzqjtUhXMcfFNs5iLwqAu91jVQyfWkkn1R2ZcaGM4ffy7C7T"
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
