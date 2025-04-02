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
    "5f59wAMieKpddfdmFhwfWHDqFb1Sq4jzhX6uBWo4GcKAQFApAeTMjPwuxigh8YcFN8LUb17bpXXAANJuVLyVCe2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmC67tZMbTD38CgHY8dqT22Qp8bouAnsCh3fnWAdPK7WNT6CkWiLqK2LbJ3c5fZxSCrXMar4M5c6vHMZvS6qWd9",
  "key1": "2XRnPjnw9X6SZL8gY9wogKoHuKRg6gyFjxjUQMwmHN6tjQ6rZ5H4xiP9iGzeyjH2zKr3aJphhnvGKXrg1uDzAfaS",
  "key2": "oPDfjVTU23rCNnnyjhMB4zDj5oZnwbmJ4k7ShNjpMkdkoSyyY7Fxk1gQpmnQFsUP3Z9yV2oUnXzrYoHQVsNEprf",
  "key3": "SGqEiMQBdrSRr332HLH5pZ7mYEmdM4u264kb3R2mo7Nrxqc6URg7RMx4FbBJPyaeWhRLYAnBzpEJPzio1SCqwa8",
  "key4": "xHqEzzG45k8nH7aGsHke3j9av9hMGt9EyBH5s5wEwRHr8au7y51LQRsUn9TnYDrA5GaSeYZnZ2i7zGmXBwrecw8",
  "key5": "G7wMLWqbx1EEB49CupDmGHBQZH9XPACz6tJqUyN5H1tYZysgch7gDcafJejmBoSdVXgfXGE4gUBNB49FVP7LZ7u",
  "key6": "33p5G9upS18ERYW8iNYWxEf58NL6QpW87S9jsNLddcw1NU77zkzt2FYewg4YExwKXzZBKdzHfjSqcYxHugufc9GU",
  "key7": "4TEnwKH5WdGabh6zNTrPooy7BQ7iJspCZSR9yAKgPsdSZ56gMB331r4oKLK9edNCMApfmLEjBsh8SDfPJoRPRsJR",
  "key8": "36R14b4DABwrMLvt55NwPF89STmM6q5T4AddQZryPkQ2WwuAz4W6g9pw5hJ66JsDZmnujLcmZAWFy5XsxLkKozuV",
  "key9": "2vzx3imGoHwrQMzQvQk1pqfpscqyfwEsyVvBxSoP9nEFgCju12NNngKWP6iNJJe6rdo3f8Nfx7SEwMBvuNgvnker",
  "key10": "4Tgy3h2VnbyfeZR7Wj7hzuf4kDgmH4wAHjxDuQUbpaRW65VYasiASbzdvz2a2mYLS79LYYgN8vkQAtHz7kQhkZj8",
  "key11": "354ccu8gAJtFbdPgebajyHureMZrBsXRJZkxtyVrAu1Jx3Z6zqmzujuqFKcLPQ2hV7oKXVUcNN7xXVufTxBvjrF9",
  "key12": "5Prdo1sTjvQgA1jpaTBBhbekA8qXT4Q9aQTTuWCZrwaFQJ5HXBdAbNprwrQS1SW9Gx5p91LFgRbRkcAFcL95hWBH",
  "key13": "45xGPgd48Dh1vQhuNFKkfGrB9Z5tHf3RzpVaAxUgFTt86kTnxc1H4t5XYjRxwJFi5guEJiJLmaf1ZMXi9EQavgsq",
  "key14": "5rVfRSve8yc2oWyFkzrun5BefVTv7iNamkfJMZjro2RMktszcwZMoYtRfhAeWeg8jF71stDS6vhKMVd8rSot33MN",
  "key15": "3d9fygeKQBXsZdJMtn5rSccza9bUjCq4vuSoXJDu9yXyF7VExM3mFpnQjH4RmTEtAk55ct1rJKkL5yA83pNXmK7h",
  "key16": "2SrT5dyWzKoz9HbyHMTkguzCxR4nrMnjo2Crnz5BwUUQDdY37cvt2CRAJpKYfnWgDkMsUoTaSE11FSQnKYMjnsrD",
  "key17": "63VChkxaaBozFD2sEm27snAfNvMRdiZHD8QS8Hs18Kfq4LBZnJehd2GbF276fq42eD1qXfPufNqmuUBree8pog46",
  "key18": "4G77oRsJSX1pWngvLDmQKGcu2Mou8aCnrEoDqsctjUX9NB1pfgYQg7rPG9kCkhy428vPUBVTpuUv1YG5b6DYwRtX",
  "key19": "2xGEZjPsV8cPzu3tUzcXLCJG1EWrkTTCfCDNAmsMGWoW2EbPAxM2mN3U2Fp3UEHvWgyXf1oWTPnGh4pKCp7uz39N",
  "key20": "4PGTcW3VfWCGUmyitwzLpubN4EaRmvJs7saH8L9cQiEijJrpUnPyLUujxZpV92HcNvfbHWSnwBJYmQYTf3seCPPA",
  "key21": "5MeMSwkWRhj5bbB19nBpYpLSr12Bjn6u4JowrbzBw3yN1LFHLrP9mtE5mUJdLsanTp6ECFRqCgaZd3ak56tvMzCv",
  "key22": "2UKPjYgGsCr6mG8Z7mqdF33AiYP7dvKLPFvVyPPg7Wbpoh7xdCTnwqGeQec3cc162M9nUKKQbbqaYEdPjbWqSrN7",
  "key23": "2xNjGvkLiU6o5uUN3UvyhXjNLiY6va94aUU8BmSHemhiUh6gUXozM3PHXSvgmBuDAbZjofkPmXCGF6kqbPxjJXNu",
  "key24": "mEZpjMEga3nYmDYVzaSUYQ8Hs89ihYs2kjo6NnEidbTMg9J17hmNyRX6khKqxBBjK8zYS6xxd5VcHvpCVnih5dJ",
  "key25": "2J8pr5NsjqSyG6S83N8AWoWtTuQfYKTpmUsg4gTPsp6euhgQVi56QBieFrg2VW64o7p7wU2qtC2qeeqYSDbwTCse",
  "key26": "G6uiHJr7FcKTRsZextiDmNzLGaDvL5j5jxtAUYwhZFNmKkmnzDdxX7aDTZztnsMvAhgRxx7258kNnv6EuAqiHSv",
  "key27": "5KM2FTJLUDpBqwgUUxhbuRctR4qnyY34xsoyso1WBEe45WfhcCjeRV5oDhzRdmCoYJmfwCXiqt6DXgUEyy5ubzbJ",
  "key28": "3bFeqHyrX7epse7eM5gv4XzpfHVA8r2gxYQUtnhDM5RpYaNG3uTaSdfPPs7kGXM36tXDGVGrHezXYK2YN3g5wpz1"
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
