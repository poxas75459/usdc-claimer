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
    "4EpxfE8nWbWac1DP7f41P8KcNaicKoaUbwbmmjUBWUsbFzoYGu6EgguiNH8kwRQn1fPrCc9vMvmJVSe2JR3znz6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XB1ekFCvWin3gVSBfsEMHd2oYPAhhNs1kLiFZEeWWwF39oYLmG3m3xFVXcZnofALKPi5XBLQt53ZJreTrSc17Ye",
  "key1": "i8HqVwVk2y2o8FQnUuvpuh7pzhaNojDRmJiWommc6PYLJF5e4v7UdUFqZ2bDvJnVRiYjSRNDs8GUEFhoBV9otSK",
  "key2": "5QyRPNdZsC9JvTkKwNx2B4zj7YuafuYRbXRJa8UWmAwSKMa2VRWcbAHy2GtmYZTaDq1tpAioYCz4PTNYQhSAJ66n",
  "key3": "57zwEKNATb2f9FAXVmfi2Z7A3S4BH364QQhFBJFcLrf85Kyr5iJFHKZuieBssveKNjsN7WHreb7qDBCC3URdRZHM",
  "key4": "xokbw7VJi94RZrjcqzPEaSk55VcDsSaCrDi3pwEEt2AL9LkuuDSMRTxiJd71E2y1AUkTEKSVEYZP8ZD5fB6ZfQC",
  "key5": "5xPtTqBs7iVLEk9EjTEdJSaUCzmeZSW1JkuXEqDdoVpwAU8xuV15uvzdseUHrPVthrpuhimBWSdBAVth6sfEeZac",
  "key6": "22pA5hE24sJmx79anHDmntPQUkp4Nv7jamcMw7hraxQ1jvnJJkui2nw5jTro9FNARqmx8Mfk1YG1bwpwx3Nmypaf",
  "key7": "2QJC31cNgrWrdYDbdnpJgC9RejfWxPVfTbnAg539hP7txmXvLSU7EDck9VwSBHUC8vPtUDWpNaCSuXVByeq9HfHe",
  "key8": "5zMqQ2i7FrbqZ6Zom1cb56F5oc5d7ayAkxhFtkW9eiWXwgBKMxVjNsu9T2GDkEYqZJZ7TKs5tydhPtGJG6tpRvPJ",
  "key9": "4ob8LYaHuSbDR4T7JXaJX3NTGEMX4ZXZgZ4BvnraFFL1w11ZM8SzSX2FRYazJZq13Qtr7B8Cjj5mGpd3e4EBqTX9",
  "key10": "4K7L15RjBuw4JwFZYabmpUqNNeAsUKJvuU9VcpjvU61DTFErLg7f91A2ajKszdRnebjmzNPUVkfFnuGeaDhLVJrR",
  "key11": "dVL6ZfvCCjF72UwMBvyiTXzbwfFnjapbhw24FW3ym3vfBq9cKB2iSxRugEqkvkvySoRrjXw4LwrfgiNpLNdqY3v",
  "key12": "65EH4oY4hAXiQsKnnAPnquyiRd5zotetzCMV5KYyzTsa8oHLVNVc6MMtAqsXHLaCCLf7Esvv5FzKKe5MVUnHoeue",
  "key13": "3bFcMzr1RBFEBhNxd9QFYsoaH83ULMpjcRZedpCrvfvBZjnqK12hnGjubaQAQXXMfWJmpeH6VBYcmbLdzCF2ctxw",
  "key14": "39U5n2x8uqy3LKKV6wEGBdWjQcBCprPkwpE8zrhACVbLJj3yoJKwFwHChF6k5efrJRwYPu4ieUpf7gXWEaWebZS6",
  "key15": "3PGx3hjNRMA6qGMzU9E6UK8MsKjjj2WCD8UeKuERrGY8cS95AsAYSLCHU7CkoQ6Q7uaRoE6UUeHbepvTcFGpjTJe",
  "key16": "4n7YmkHBFmmmXvK8EQZRMeUPuQZi63TSsA9Hmhs9rJpWfhK2Yrzwo42FpBH5UD2m6r9r88FwgyvJA4kopjyi1v7y",
  "key17": "uyaSPH4zFGB3QKg92o4Z3thRBhJP1GMXr8F8qR3smXbsRVbXc8VcsQqQc2CotHee7n4ihBxVKn2E8N7TfT56M3e",
  "key18": "RvjbLTcSau7PEogyqbGiesW3tCmmzCHu5XjkJuAVcVMr5RX2AYccxmTmALLgu6sQTuQUKkA53eLdbdwLN9KdydZ",
  "key19": "dYjQPLcJzQY43D9hzb3drH8m1cHY1NxrxtZhTBBAj9o1V6Ct73ugTyVq9eLpACKesEPRQx8yMp4XUWaYWVrGDNu",
  "key20": "4hq8LN2e3FLaTDvtro79jWQou8pvuJD9uvviyHzSsvr4zGDQePSkGKohNnMPm2L9s827tZDmksEzHz7fnBkMbLr7",
  "key21": "27Jo2w9aytbr9qzKmYLTYQSo1iWSSgzBj5eCPGQSk969TwibRYAJUqietUDtUwuEokAedZTSkZ5ShjSBVSoDMQ1W",
  "key22": "2v7XG3F1TyfBG3sK4nEySDiHhr9MxkAtPPBVfmfYCRAGh5iuv16NxjgoRFS5XsJAk3Gevs8F2HaMM1LbqQfX2PnC",
  "key23": "SZn9rHsbCysVSP4eS2on2fDFYuQKFyCmHt4MZr5mbHXfRwTKU4ivoXGtiD31pfSRaBFYr8Vj1zFePxCvxwg4QAR",
  "key24": "jRWeDMv5AHqw5tG2DtY3U3zBaSP1mvV8mZXiCtrdJq3zcoEacJfUcdHQVAa9PnMxywSKT2CH1m2PgzpwwzsKSv3",
  "key25": "riqGTCdq7X42b9LQAtWUqCFm6ksdaagZWyo3fxvQpuMU4coynw6RbwX1bm1bzVT5CbqG4gsUDYHCJvEXYTDNYLv",
  "key26": "3YbMdsPza3rVFAdb3VW7XN7z5CaCe2QGA1vX2Ea2LbYet3aaGkhmBbApuXFLqNzNAmFQuhiyTWjDKKCPA7WZnwVk",
  "key27": "9SaUBM1mxXcpAWPPm3aofESvUxL1h7kw4sW1daiKSRuZfHWRgQaHhqk4K1U8t2okh1eWsfa9YPeSEeoz3ALkx3x",
  "key28": "21FAhWPBKbzcvCSH6EsWKM8qfpwT7rErk79whAUaPegXssEfBJ85xRaiHUfkvsZ2UV4MmSJoi7vvm9hf8twg9Vur",
  "key29": "FzAfq4P1KbMKUvTgjVqFyCwi73Tf4fSrmNmoQrSwfbVDECYuAxALsmXQocjcrDgrQVxBuaGJXZrER3re62WG88G",
  "key30": "4sf6FmUbPm9KVWGtg9W6LS2JumQ932dYuj9Nr7L1k126TnCjQJDeMi1H4hqiZ89JVzg6CwVem4gDp1U9PLByhETj",
  "key31": "5jm7kib67RDPReBPC9kbtKMTHLy43FPwLfTX3PGHi8DnRFPdmeUboNBA1ib8TCkfRGCWstBgWdfm38TGpK3mqQ4y",
  "key32": "5gxpWqeAEVTj5tMmEqZdU8D2M122282oU8jErvbrPZWJRuVREHY1bdNjsmSMib1DBU7amBYkJXA1HEGHtpaC8GNc",
  "key33": "9tcbBka1zHPLCdaDMupgsVYnMjqdJ1fydj4AWBF5Njt9wMzi58YTdxfYQB3k7qptqak1CZW5Sbvy4LpD7FeiSaj"
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
