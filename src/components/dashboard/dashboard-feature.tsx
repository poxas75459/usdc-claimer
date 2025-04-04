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
    "3N381oE6NbVnuP8DagNV3XqWUNB4JswQH82j3EWQioePTd8pCWwhirZjLg59H9rUiW2dCKTmeMxEzWAq8cjz3aKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1X276UUie2LKphLkN3CyJ5duR2mTFKM1W7UhjpGMmPhYjbB9H5QRdzXucm6fJwbWmf9xMQiB5k9G8ceSvaCycb",
  "key1": "4KKRxpNJZKTUg7VLZyCu7y7KWTroetKbh3GkPDqgJngGH5ZHZaPGiSVugj8osW9EiYxbpUmqgNACidjBCpPse7Yz",
  "key2": "4K81zNezUenDUcHEwBGCg9wX5aZC3UhVMzKE1CBfdTDyBwoj1KPHrAniGC4vvQAPx8qauWXe2DrQ7vW47z63CpTa",
  "key3": "5FGi1PfuERiD2PpNtSQEma7jpBhEgTTJ75shYv7qtCzBxoDgSzzyrcRf37ZV2H33U68cXYSErebuugEp7nMke4z5",
  "key4": "3oFb7qJTSzBkqmG34n3EqqM2hA5RgaUCLdtoPPoUGBhwvV1PNfZ7xR3Y8rGRvSsGyovXrH8rciFzBG3RduGknYEx",
  "key5": "5zcuWDpjhfL47K2TV7p3qekQEb35ihgJGHH52u4Xe5xYaFYp8X6aAsyyBTB71Y19SjBYoMyq3nVrA122Sx8759t",
  "key6": "YkZeDhKF8VAVTKPvcQHG349yPJDafqTnPQ9ovRd2SSZfkTeTkpg4EHwF5sPE6qLA9zge8nkroAWM8f3aYxHrDMr",
  "key7": "2r8gDY6bpDAe2ZucFCM7dCwPbhgzSHuCGTmMgZPQBDdYDGis7qjC2EDRVg8x7Qt25hs1KYnUU2puMHm5y4H8oHrU",
  "key8": "PxHXz6oEG9w8M5KaVa8V2GBQVaaAPo3X4TWQczuNS4Ygn1VpXtzJA2MVQk9spe3df9biLz7moyjFhrhkSDnJgDM",
  "key9": "5S32G29jJ1cmzLsmXGFUtuJyPirdpVCYZbt4FuNrbYHPD3dAS5YB3sNVFBPqgJKPpgau5mmDDoGYfNw9u7WsxWws",
  "key10": "4HjV4uQC2nhw3aAgsZBpRVLX7WJokwqt6wQGxMvV9Emjgq4LaPAj5GtxD1GhRiqfJeCVpQXquqJGhNZftbGmQTs9",
  "key11": "45ozXreT7aaC3axzByuWtKHJFzXGwvKTENmQ9VktG7UjwA83BkKbBALftyTJtoAY9tdaa4qAvte7SoqN5j67eL2r",
  "key12": "5x3AVSUzpdNtDB7szyJjaEAQD9XFbB3Q71HgkxWUTrRGX4vkNkGh6LXtKuucg3xKVxDTzzvgeDvEEdXLUfnSae2A",
  "key13": "5ebhdHJwLwhUYC8mxbp8cRwFtjidCYngLxkLVEdLsKR9m2m1GrMeyrD8AWiriEfTTENDwMXRkB1TgHA5Lp1vpJVv",
  "key14": "pSDbzi4sYpNBSuyjTohuWCxmMksctxEMPU19HWD8wapE7R5CWmu5J92GPLXqbuKu1aB764cQWdbMvEdWi43PqVe",
  "key15": "2Uv2F2yHRzX6ch1JS9yrbzVPNH9oESqktuAXx9C5q44XogXf2kRHMJjMW8C4UUhCM4PQk1p4VAC6u4XaHNQ6AFcZ",
  "key16": "p4SDJYRVJqEMb9E5wvLkWuRgPhUSgKumtWRoRz6N9D3vgkf7wSHjN2w5qPtbfvgYetwfghb6YfLGvsAKiz6cdSc",
  "key17": "2acXrhN825W6PbemiNLpXRCtyPCC3JmxQZFuBctg3sph84h931ppVCdcyusWt8AkCfnBUV6ScdNEcDTcfq1ZPRjR",
  "key18": "3pGU2iwynubKCHmH7we3nHdgE3PyQAPDLd3UHjLmF36hPfd9FPx5GZvR7ih7mYKjAA3tGK9NgFQ9nU2WXP6Kp7aA",
  "key19": "2sf5QwvkZyKdh3cbqv8rwWawjEz5rrmX3Wj4tkKsSue66hsQ1t5BB8gyRJ1sDfi3nD5MtbP1s996s4Un5cpYYbxd",
  "key20": "55DCR9cY7zzELhwyJhUMdixrCa2K1dAt94FTeP5bM14V8KvGLhLYTWXHF8XGXH1tLx2sp6KkJupBaLmHQTzxajYA",
  "key21": "532QaS4s48ERp9p28GxDAyaEovuKo6C9xf3hwuswHvpMdndsLQpqiwAUWJa1y7kRFLqAG7iXbXznP7EbVke9HDQZ",
  "key22": "YhiaX7eBNrTQY19ebvjo6iGsM4QZad7xBU3VzEwXWkzV37VQpn8FaSm4CHhpBwrDVKxDwUUbD91QzgpZCMW4DyK",
  "key23": "e1hyxhW2Pb4Dz2CE7fuoLMYDccTDJoYGtFBE2v3YdmADfJsTT85ziPUHPaBchELLQvKPgJoYxYUYFJQ32cTRSRd",
  "key24": "3tj6PSycvA1dZngoFWpX3xu4dCod2a7WGxGfmCT3ruTvS4jV8Jrp5q9Bc5Ju8wG6MjoTUxT8QYkKiy8RnDN1GrpF",
  "key25": "46ziitdjPcmESrN5igony2nfCdZbyqDaUJbcxSH5jL48hvsFjpDNHW2mPME8hb3gwGtbxw6SerAAjJVrVxowuvhx",
  "key26": "51ezMSemZgAe3VXYqeP5aXPic3Z6rbVqEBmjYM5FRtHgGwUrcLnr8Ph5DBjSxKvkRqzf7pV1JQnCZKGXaJGoc3bt",
  "key27": "3qKRdMF1Hrp7fMbYN9sziJYmWc9i22AEWBd69KuZf1YuWkfzRZEsnLN6SbDgZYPhYsRkfTXs4ngKBGyzHKLyNDHM"
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
