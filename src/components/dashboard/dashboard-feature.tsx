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
    "2m9ZsPHHSRAWfm8jrN7D8hCz8RosoMcEP4hLxENC7tkLwD5VqCdTu8EgSkptU5UZcVXZTaNzx2CNSFjk8TbjUTyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMEuWo7aj5UpgoL6gnturz4jLDc1Gma8Hd3p8MNBMft3SLzKf9BE9zMGvrCSRkYPn5Xny1K6xCxsCBXVqDyHFLD",
  "key1": "bnR7gUZkq95PevqtgZnVWRNaf6einEF3467ahVRM2W9w4HqudwNDyoCf8X7CV9uPreB4KapTvyB6yAHnXG2fLd9",
  "key2": "33fwZtmJdj9raH9WwpFrnS3h8f4eSFAWiT8Bgd2nLfRm5Uz53Z7i4gXPPxw77yEficVviYXmhdajVzwUHZpTo2ht",
  "key3": "5VUdGADka8UnnmoS5iNfqLn72SCcxWmcdt1Ru4wAggzFnN8ZX6aRKqQQi5jyT4V4iRVZg9q1FGkc3mhHZgj827Zy",
  "key4": "5HKFWxZ6g7F6gmCPBXuBMmNjR79UN3qC7p1sCUebhSA9CCDWbhcX8htJSGq5LLsE2pDGCHV7F18QV7UmRn2d5RAz",
  "key5": "3DrxmN1cjbKSRgUsn739DQevzv5oKGjigW7uyiYA9xPL1r5cx9Jh8GLsDxs3ykt8Q9fK5XC5ivmgn2zzPf3cZc7q",
  "key6": "5pxy8J6QtbnSdMcjiYvLLSvk7dvzvRsbWuxVjRLWQ8TtU2Q74io6TXvuGF1UWDqo2jT7bqZmUrqaYBmScddaG1dq",
  "key7": "3HtAaq4XTa86UfAKuCMNLLtE3s3eceCTjM5EQnEypqkdwKDVd3FjPY6M1QtFs1goqUATGfP1oobVck56CbsL6yf4",
  "key8": "f7vg5PprwD86vAdKjpTscnK7vp9Q8bpb3ewyAUgfCnksXNKAMnRo1hf3uUdyjyEpQmpgYTGBbjenJwDnZirLfrQ",
  "key9": "sNkx8hihBbdRLLtgB2zqE6cUkjmXiufgpEbYcLQ1W3tdKjGjzXstZWB8zHqAcVFKr1whcG1ZG33NKxo8BLruRb7",
  "key10": "4cPnyeq5GJxc6eQbP3sxS99LajQ3Jpz8tWa187bxPpToWA4q9YCe2zRkzetEJF2kFg7J5oRcn2UmysuqJ9LHfsrZ",
  "key11": "5pbEFrbBXnWDuZJZSVqvbCVSumS6DqAh2x4aKzzbzKX2GNhAiK83NTLgY75nVx3DzYkwKV5Fdd5dte4RJaef8bxp",
  "key12": "65tpqZ6tZQDfsyRmFQuAhLwVcbjpdMdvybqrzRgZTMP1oWHT8KVGiPar8xDVHfpr6bPf16Yp8zptYpknquP7gm3o",
  "key13": "2FHiXGKAAMZttiF6YGBsVqPF5g117uUajjUgXyo1XLCUWpPwJMcZhLHrViWZ4E11Ser6pYsmxHg4GrRdpj3qeGeR",
  "key14": "4BU1SDapsVD7aadkSZqAQ43PQQ9kvGpEqkgZ5CqHsKFkp2bbQPcv6qMD3FPTzbpLRbHZDAwCbiHHAyvXkmyhiR8",
  "key15": "4CCniSR9gRF5jsPhp3hryAT9ce33HGmCzEos1kHt5QNpHDsG6B9hkETmBNMAHhbLtxgpmcMFwzNh9zbSSCsjtXhm",
  "key16": "4bd7YK6gjPBuhHVwEDPkYpGQpyTbXwxaWpxujvWWeYAiBYV36qB3RKmZpHjAo3qzo1FyNf1hHromu3x9PaNahy6R",
  "key17": "5xWTL51fzhRBPmK7KqRRJ4p3Ev6aNiZMzJuK27u2JKRfKaLZRmmEDPH3SJG8NQfpk3rngRkeqtF4qYsMCYGqU24y",
  "key18": "KTY3Xxchw5HEQvBYLQtoy6oh7Rw8FzWy9r2a1CCj1Sb3FXHKJxBQ3occUpSSQBnz6wrSqvip4cu58d9w2e2HKEa",
  "key19": "5AGAHGRDRN6HktQrxofZC2FKj5r9YMLsinxVmQBjXz7pTWduDJ5WQo1YGXhutyJn2qudoZNfPAzutmNijSRUfLGa",
  "key20": "Y93WwLsUd5QLvUJL1cnq3NGNUxyiJ2KEChJ9XPHeZXjTSs7F7UgXpoKLvuDaTahgnUajfb2xrZtB8hsfK6rXcME",
  "key21": "3RHNeABnhTTUPT86Do2P9jr6zFEgsNVS6Af6dahh8hycTfDF4yhzmv64e7TB76ofwBBuZ1PkT2GUg3tyKHcuWFkm",
  "key22": "3HQcLJ8mzyNCeo6nPGw3XDSvwTZgHnmWQxs3mWCwD29V5dmPkafcfhpxkPqo1vCYiHSpZTS1dPLafRs6usMzU2hJ",
  "key23": "4qhMmCyTv9rUGvFRJV2DMy5Qga4cA2Dkw7jch8HX6HobKLe5YiNQtTNSNV5tAm3RswjiVaZgU2F5CMtmBJ6Vo5jt",
  "key24": "2d5tscJ7PfMXFSj1TH4VseXFDTHNgupYkT2TqzrPuEm3YvRcjb3SuN6KHzNjowKRya2XL3xQfa8e3LJKhGrdrmdP",
  "key25": "2V9vNHhEHueDRvb2SXapGKD29eAWaQMGruGGdKypyhWWDzUoYNLZnqP6Zq9c9FSAaDrDEJJr1B17PBJqURvFnY81",
  "key26": "2DQ41F26K36vBuna2SGWoaWEiKiqgCqPbkKv3X7vterE1uqdPrt2kBMdAh2GX7P5dnVx64MbMecwDHLzmH1j1qZs",
  "key27": "Yg8r8Le67MgLTymmx8wJ9TvCezjkYNCAfY36p97gmMjHQrbQDJ58mf7JupcH6477CtEZ9h8zu93e42gJj7cFu17",
  "key28": "WsW9foaXy2un9GxtaGyCcTHTLp2CqnWosc9WzMjQkT1bi2DcP5H2HtLj1AKmqXL37YucW3dwphN5PwMRnBMepCM",
  "key29": "4c4whVMmGst21hcXwVYCfzt4Y2wjUivW2AWLG14h5N4MG1ZtCJtphhQmjT6UwWTVRDTQZuR82mMPJDm1kEcLBfmP",
  "key30": "5roL9JoLRi5XiuKCYqgNQVWVurvgasXRJbWSHRn9UMGgi85bYSHNQfhnZwz3up6BPvStdfLHRPvBJ2B9jtPNj1So",
  "key31": "3q1h8PnrUC3sLBw6fiVvGSXFMesShajUWKKJ4tgKp6yJ4riGCWj2hNvejfP8sJJ6LKdhRc2987Z9C7p75vmexb3j",
  "key32": "3CHU2CpHEQZmrpCYnssyZhRXDA9SV6f4cdXW7cVy45xra97spYqMjMozojrpAqbD4kfRZzJLHabADw79XfTkCu1Z"
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
