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
    "5isuHcC7ds8Mp22NTeGSb5tQPZ8zQSmGy5AxV2cfaUEnHBPRFH5KrFbvAb4Uftm1XNBSNVccmrhswfbFRJ9quCBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk6MVuKJSdt3VHj47rpFEz8SWeDcF6RbpbJM31398R8Eku6kdKZZYCrAKDQwCSQw2t7JFgDkL9RjJFfPqhqdcLP",
  "key1": "3yNccZKGjjnUTz71xoGyY8osBSibngsjsAUQQtswF21JPoZsM5eZt69EeHNcqUw65uicd1gQoLsbsxjbwHhfRutH",
  "key2": "2umV7DT2V66N1iwhnAR8APk4QDqG3byCh9RWK5gATgi1F5ZtCrHMwZoutzxWn9CsDaq8TUcf2Ta6H4cZRtRNjirL",
  "key3": "22SE6o3S1z4CnEG4fFseJ8LTREauvVjdCWzbRzbRqiqFGMjpBZeVmtXJ1QL6JcwS65hJPrbaB1V5T7MKRSsxu3sd",
  "key4": "2kq7nx8zvvPUSFc1FmGpfVq5tnAn6Bm5B4tJhwppuFEp5nPnEBMKt4PUEuXZKVvorSHvCbK1YiqFRN2y5CAiAzay",
  "key5": "27MFYfernaqNEFqQ5goLKkoxYNLzhQi4rTvhzFncoQxx2oo8h8rFvwUKhBAud7KJaeorTTUC6ipMcSX5hX6vx1tP",
  "key6": "2NCKsdAZ4GrZKBkPJiKDqx4w8YAXqbHvegrJAWE8q9rDBt4tLPbzEHzApAzRVDRgp5pEaA34qyfm9fzQkjxyFoad",
  "key7": "3Rrz77YQpdeTWM3sm7wQR7HADrWaEyJVCHjapuocNbENk16mFL2uLfdrQE36dfyqk7YHdeLa7AeZsimV1KZ91Tpu",
  "key8": "4dBiWLeJYNBGaTY1Uyq1hqxcPyFt7N7qsj8guiLHLy1u6xKJ7DBC32RfFC9xbKv93KvFDjtfzgJmwimPVZHXxY1a",
  "key9": "wxwaf5DQ5jUXNJBkKJga3JtcrsiFzo2QaQKvYD2DfMDSyxbzaSgeNNFZiZ67ZdW2jbGmJxyZgvPMidjpgT9md8q",
  "key10": "5rRbjHAaEUVs91s64M6TbtL8xfYGixsTPS1hJSX3dqRD9DU6gyF9ZY6aV6AAwhqM5PGACkBMpSuz1dhLoWvK2h6g",
  "key11": "29GFFEQwkWHkcVdQ4asfKcwziYS7bYJkVfh3XJ3YyswCPZ5SdgDFybxbix8rBJ3LHfqWkyypqgBRgKBiqbJiuptJ",
  "key12": "5bYtNGLshB7N4uFpnfi4iWHUWc4oxdbPq7EyYeFp24hNT93XtMF9yyk7aQ2vo3kmnrCDzR4boVMUBSy2zwbLv1DK",
  "key13": "gAkoBMSLWDsx1UsHidgpDxyPjPpmSREfb1Kb8zrLAqj9pzoqWUgmoqU6i11vVYHyapUqqPLHRZDhfCYyMpSSifi",
  "key14": "3eCk6jZxiLHAfVcmhXAryqU2SJi61jH43ByGi2BFChPM27X9pYhQLwqzzM2F9xPDW156RJwmX6duxeZxQWt2wEis",
  "key15": "UmF5FBzJTkRx6jYicsB4xWPRdwXnduuvVqH6dTT4ikumYPwv5rM3HP4JvVMybZ1RNbsy1hGFba3EHqpkvKLDsEK",
  "key16": "2GRxyvBJXA3A41wK19JNnBqN4hEVVPudZqP7k2HaegGPuLkPFX5YQsB9BVUTMY742gTEC3rdxZHDLjmY8KgC3cQj",
  "key17": "RCjZpBR6EL8vJofe8zxUAGBLSRQQzygtzjKi4Tbenv2TR4cTvrJzu2xAiLBLdhJ6GGm1MqhVfVh7QJzuQBgkkWC",
  "key18": "3zDu5SXYKWkSR7S4zNZunJKyLtZ9e2p8qPGrTRM5jRxEDrxiWY4YtxcADKJcAZZsqcq4Mf7dBwBmA85Q5xT9YMjQ",
  "key19": "4CvdbEnjNYTL4La1ytKdDxWqzjHGb6hfPY4cAaM39csbeerotijr6tQmQC9tKf2Anj5hJ3JxUyDdHFr5JmFfxsft",
  "key20": "5AmiCmJfwpNVm9bTUJKJbcEaMCrn7HdDCAdrAUp1tBY7Kv5RiTRXMreMy25u8nbrpsqRddLdbdVnZHz8Sp5FTHZL",
  "key21": "48qfX2gYoEdwEqkVwSc9afx21jGLMq3Y47NSxFnLbLhvuwaxDp9dMReXSTg8eWF1SYqweprR4sELPNdtREncqPt1",
  "key22": "5fvQcMHXA1uw9LB9xZ2UvJ3VjxXqTCw4ukAvLaSaYqFEgGqYon19JkxSdGeS7yjLytstYEGvMvcqqZQZva7cjDWj",
  "key23": "5RwGBvGfDsqMaDXGn2SAFUSaeNfPq5W9TeSQBuLmqRXCHemdjXUdu3nYZ9xZDFwjnisMT6PzMgA1LDuXkFjkLyAn",
  "key24": "3ieGAVn7oeoZBzDFhEtNm37HsG8Lw6o6RjdCVsTSWMU5NLBD5QTqEhcrp1uYApppp28xaRTSiSzDueup3wB4Neac",
  "key25": "5MSfKvrV5ZvQ78svHQRkNjbr9SYWPmQF3dzUDjZrkWukurfYHLaX5yMoJTfqNUaB3Ud1Gab6oA8DpwDAj3aUf8ws",
  "key26": "2FYDmm1s5gGGj79RHgNAEABgjNQoFYxSX2W3NAJP3pHigUvnHg9jJN9AP5QEZ4Fx98J4kwKGxZUyd9Fbrw453HQz",
  "key27": "5QR2Pti9n3uQMfNAidP8cB8foJqgM9evmepDRTLTzLRNtFbjCC5RRmQZhkefJXFSoiogirZorzdt5y8NLDCAdsHJ",
  "key28": "Gg5pPwh8Gz83dvf9qKgUJEVPfGn73Hc8nSsAdd12BuoXWehHavhfkiMc15Mugo5a3qYesLhPNdJ5TKsAj797uyH",
  "key29": "3PU8C6LGWdQcPLfQ7gkP3xZ7kWGKritw8kJM8q2mxTtggxVcrkn4F4NSaQ6ChTF4GMW8sMU8V8HhR4dhaJwaBBa8"
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
