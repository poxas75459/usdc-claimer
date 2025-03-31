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
    "RVD194f8bnuS4XAbGuUr2HyodNfm93nZN14DGSiaiAP9sZYS8yXBqrebzJkCy78M1qAgg89jSbn9ipFxMArCxj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4Shv8uzsbNkEJn4UtavhNJHHF5gjgzuZs8TubVQMK7KZTnBnZL1iKAUxcLZ1Zz3QrUoGEGhKdrLQMTdPmPXCq4",
  "key1": "23sm2HJmS2htsEojBtTpKLhRK4EZ6Nv3f34rBcfnKsgxUhSCxDwFn5t1HxhFYfmVMu2seABJgifzK9X8JTiJHSXV",
  "key2": "33mhN8YJkrB8jDsNfcotJZZbxYBgVn3svHbcW6JNJPQaDj6PPHZor3cRtMrPTFLkTEH4tKUbK3A3eRSFopGAuSxu",
  "key3": "4yXeA9J5h99gQxnfYQPhCUgLSWpvo6BW4s2QrFN738HkdRGZvwMA9SJVhrB2BNWQbzcBRxVEAoJLEEhTrqTuAf8T",
  "key4": "53So9JfCLSZZc2UXbR9eRzJs8wTcw1c3UYajjSERBpgsw9GACNnk81rNgADRpY4CDdqo3WFMgFReeyMPQv8RUwY",
  "key5": "aDTisptx64PTAsFS3ed7xdYhYTn4qjdzSkv2V2xHPBmabeKZcwY66n7yGzwTLxnfEftjsm8Q8XHJn4zvkZdiWAg",
  "key6": "5UaMec3Dnu9uxcyG4paUC8Ea5gsKknKjq8KR8B7JKmDqKL6mTPdrVdipBGsTJLTE4ZAXRwDjR4zL9LJjQAc5ewPU",
  "key7": "2mku47ixo2VMeFwTRMpJL1ybTVV32EHvyJsC9UUoqfHbzZNJnhJjVZjYMtncbUd3VaQCCDoQeas9HyGEvJdczZaW",
  "key8": "HtXWkLP1Scg6yDkXMq6TWaXTAYRbpE4WULYTCyw5ntggdC2bMbaxbNuEA8pXp8oYmeGhiM5WUrA7S2d3WrsSqaa",
  "key9": "3mFpRRAWnRSemj16a5vMSK3adtxmF1DxgeFC8k4nk7SFiRXGTX3o6jeECwyoZcSuAC71FoQ4KK5ZNErFk8v7Ji69",
  "key10": "3xfe4N8fozGyjWhdVvfVV3VqZ7uVPT1pW7eg4gEMR2SbRBrmFEkLDM7BSoFBtCgBxAq82E31eHFa7sPSqK6Fs7wn",
  "key11": "5u2Af6GrHmfKQ3Jnmgt3S22F2cZBm89XvzACgYjL8yWMAZ4Q8N271QHa64wfvAmKaFGzTwhUNfpPCMqQpR3RqqY",
  "key12": "4gTD6LiPrFnkwLkMZGZuHsAZdy5vQTcRcPQXY7R7QaCUCJgWdxAB3NixVs3SEMcRLa5ET8EUjg3hnNeKfxkTA44A",
  "key13": "VUuhqS5xJU2iVB8p8MhxmgobpWs62FCzYD1w5XanxV6LANKvt66DZ6mJnK7xNxbCQiqwfaWivK1BC2YbPNerC3A",
  "key14": "4uoM5GVy6KBdDNr379Gq1kNJCAzSSFyt2qchmuwjxqnhbDmcHNdhMYqvSLAKbtDrC2rfFVV8Qhj8jqr9fcg2SuAd",
  "key15": "a52MdRrHQa9u3xA2qwd3gS5go648xSoXWMvBhXzFyuYTKZfKZaPscxCxvro7dhPE24tzt8oJbMZobo7wu2GyKG6",
  "key16": "65zEB6QCK6WJoTfGCVkQTJCfPW6nezJHRS2VBf4hjWfCMDgiq8burBkLK8TPkoYg4Q7atyU6o8hbStBad3tjXBBn",
  "key17": "VVjeawjRib1LqqvMbmMbkQJsVrpSQdTgbJV7XNS29eS7W6FQ4BrmsFxa9wM2DwFE7TuSqxSdD566rdFoSpBCmhD",
  "key18": "bmpHfA1Cv1x1kShEdivwpTnR4cnzBpjYvhXz9mVUSEXqiQgTofANLxGoKgaZaUonVFf4ZhZe3GpxNCoPkctu6Ca",
  "key19": "5cTUojsorGneY7bc77TrHSyVFfsUo1vCfnjy2HigwgH5syr6xxDFBUT4kZfoc3j142pxUswAckPvt9jBjWAH4SEk",
  "key20": "6KtrSeutm7NnppQWR3ZFnMAQfdFhbtRwPa6qSR5TecQH5neSTUCXPnW4FJQctsukCnxAfWasPa6CLZAnMdPfhG8",
  "key21": "4TzHpLDfpY55TLAQ5wsDSNy7qM9zDM9e5SEEHs3KhkQhLK2f9ZxcgaC2uQHNH5cwRCaKQ449j7kcY2u7dyXswsjS",
  "key22": "4Yend28CZvLZ4N4Ph9xiP55qmf3Ls7cHkebcyNexe7nPnjNhTgG97PRFHgjAjbUbLyXjshTrmgMZRyk44f6ewdSY",
  "key23": "5NivRahbsEg9gWUnzQBFGTAmG48r9sSMtujaqvXZeif835n8D12rjdPNM59zftkBmVB7bLQcdWeYeFC2eYV4oUj7",
  "key24": "61guSTaMd7oxHqVo2XWy6tw3uiGpUnBJj35UcVmd2FutmuAbwKhkuAC11BjKe181VhhVBKuzceu6YaDNwT2AYnoz",
  "key25": "5rgRudGn3upaiSpMpgmBMhifJvHTUqPeuEMUX53jGUHozyCD7QQ6pWvmxiw4KXjU9jc7yDWHKSiwVg59BstoWkPd",
  "key26": "jJkgSGgB4siS4XF5Gz1ETK4TGsXyt2cdiWDNfMSMid1GoyHxPMv3L3tWpsP3sJ8fLFC3x8HKHtwp3u7EjEYGRHm",
  "key27": "hzMdqC8pwbdQjFWADTFgvF3zLwhTh95x5JkjpDc9UWpAypFS8M4Q8Urvr3tycZ2As3DXvU7cfHVUtY1RmrE98ar",
  "key28": "2GH7bUXcwCc7wBxf7vBU2wg5ya4AJE7rBwoSfzqcvT4EQBfP3ibFQpkWZWUwDXtx1c1QSCcfgE6AZ91aB6r3U1dJ",
  "key29": "4xvvtnbwjYExgXiWG32LXBy6u3oLduEAMbQWqN51DU538Cfcy58guz6qqMK5UqHeTNYivF3esoy6wHaJktcZ93Ej",
  "key30": "3e4GnrGXhKNrm2WSVuCc2941GKQHPfeGPKFSvb5FcZW7wZpctv3J6v8kgAwV4kn5fJceHfAry9vc1JB8juhbSXEs",
  "key31": "5yGRFZ4Y1WBsWmozqhzVutBZphAwBpBjfGk2eAVYtJ9BoVHjTME8vnXufcniAnhADACkAk19MqUg5CNABKgHc6Sp",
  "key32": "2opyVFkug4Y8FavgCnG9jiUKbucaZPfYKhSjXfRSuUZvrQTpxu8TYaKoBtWNWLFLGgJkdEw8FmSYoNjekix4yjYX",
  "key33": "4hcvsWjv7VQoXj9yKzHKoeL7RmSbrdF6jKFmCNg5eiv15Mwuq73g5tRUurdLd6JmkN4y3JmivsM6NxncawQv1m16",
  "key34": "4zrPY4J5En4Y6CumZ4JqJCmErMwHfywNexWa7tpPcpARSuMGN4mZ5vuLzYgYJVaqT59EE66yLZQVtC9ehQ7Gidsp",
  "key35": "itYxhYGG6cBADtH5i9wqJcTMCP3M1doWm4fTJGVb1bZvfkqT39tSkSjYUPtMxfikfVSM657kKNtAmVAEiBgcHBF"
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
