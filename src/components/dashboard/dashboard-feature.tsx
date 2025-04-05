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
    "3fGGppevXSWrpUo4PiZyNEfZedujth6Lneg9B3KL9RQ3BwgV3Tc5iRq9h3ZTpaHrjNRsdJAfadLhs8w1yB2VZzvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXLuWbtmqFnuDkdueK1gXGv9SaUMMXq5z8kfCCGcfq8Utui7wcoc22enyPVmRnmvNmHcnLAReCk8rbGVvQ7WGeN",
  "key1": "5nMyVV6GVbyYFS1HUXeP82dCu4DBnSrG86ZSHEoU2UMPXtkkkkvx2xKcWHee2ePHd6cPt5LNGBiqxzefpzHBRDKF",
  "key2": "FgSRpyCL44ABueqgK51DXh6VriEtgaaF7RDgRrwn8V1cnAQYfuNQ4nNA5CykKAAngSh42uHewBkBdtF66jXh3cR",
  "key3": "61hPgPTyXCnL1DRE5PE7JaJvxQ75sgoxm8oAk8vniwU8DoN6b3oa29oKzkzdTUDLyJXpstksMtnqS67Mtt9EeeR",
  "key4": "khC2h6dYotaL2i3epC6guPXheWkasUPpUsfWB926DUbsiTX8LBbxyar2oiGsWxVwwrnnvpgYeKFSLs2VhtfmVTH",
  "key5": "5a5AFLAR5o1WVRBfgZZPBXV2jvdtQoeEhSArpGtGWpmj1auHYWSaRCHRb5PbcbUsGhtR46Qst9LcBcb46LRyHsJh",
  "key6": "34k534zHZfgxzoJReoVugskMemKNvU8mry6hkzhTrduSZNbotkWpohYZEZKdKnK6V3dEK8qbvsW8WpwRcgus8odN",
  "key7": "57zKDHVyW7tcYkVJ7N8TNyoF7q8nyq1xJEq3HFqgW2rFeC3qY2VepaehdZAhqvmmAWNZKiaB6b2pw564kkQZip1q",
  "key8": "31gAonhFYwRUYZbPcMoF5SxQh8faTyac3YAgFijW67LoLkvYEyqvJbejg5wLe7VJVE45NbqYEQurGm1MgFhxN7vs",
  "key9": "UswcLZgPhWvQyy94WUpi3yEDAvHgELMYt8GnanzAsKohHHXGCz3ynxh9GReqPeks7UoFDBAezT3Wz6va4HLCvw7",
  "key10": "2423bkHwEpP4kWpSFCMByJow43sNH6FfcfAadxm6XcoY8b3ZrNrgrS5frW1mGjyCgnxwLgAPEZcvQBD8oAQ7vJ2y",
  "key11": "2BhuHg5XpNtHPQgHUfdzQhyKdKX3yTH7C9dxSggm7JPyPS7gTh7pFzoQXmf3HQ4km2Vj31cdLYuM1ujbfGiuGoYz",
  "key12": "22v52e8ecLUcy7MF3PF5Egdroan6cGFjBhHMdLZvnNrx63BH5TeQgSELSkyTj9DYNEwrEMbDhf5ZoiYz2GksMNiU",
  "key13": "DAWZ7sfc6xQWuV3Gu4Nzj4YWkGV19VaD6j87gfuPL4gSvftzZM9WHw7D4Hz2x8ybqup1iqPyehosiNvwNckF94j",
  "key14": "54Z3MBUM91kzVyyZDdy1tzdYR27arQ6HT5jw9v6vQAcTJiv6eYoWGHHPhCpMfV4A3wTMngU6JeqYa4RvUPXbtC1",
  "key15": "4jCmwFMNchaVQV8bar8aXQNtkGGEX42PDK6HSJN4Wvzg8VJxNqKHjtXjeiTKZwsREYUHdyyAQzSzZP1ieTVUH11b",
  "key16": "HuT5PmSXAiKedsWvtqxak8pvYxUhmT7VwfurCkyp3Fn9EqU6rfTm4ugwV13wNXwhij8QEnX7pBjNAhNxDjqrt4W",
  "key17": "28TN7vXteUEgDFoCGRwE7Dfzmu5EHuaEpMzPcZ8C8rALYRNr9NVgoaWxbpz8oty19JGiZzudKWSKvyhzqQCnaZ2Z",
  "key18": "wND3JKNu1mYMsczA4DCPcG1isvzLjTtc9GBJxekF7HqeExZ5K7kMi5YLqZgdmcJzbnMmhMeHiLStbDmDriYM6PD",
  "key19": "4LDD3ESwcizbpGkE2mFiXMgJXeiLRaToVhYghYyYdsRprePyMBwjAQ1qkHX8b8L35EvmNvhdGVCSNmZXS2vwgxqH",
  "key20": "5TrFKYxNiQLe5Hab3By16hX5Bg49Bu6BbEnbG98RrGMZ3wT56aNTV6D1PF6fifvta8ZobTAcUq4vVNQhyYVrA7TW",
  "key21": "5xoaPPd3SSWhWsugM763qW7BM5Z4ryBhaD1wYDsUhRhhhdT4LVokE2tdNx1rEA7c22GSzKR6XJH52mXUkRzComK1",
  "key22": "2XsXRZSqvKpACkbeQH7p53V37UvGMbWbeU9jrhT578NKFG2ugdMsE9uMLEpYyGzgorKXSB8XHnEiLEs1zGuEPd2N",
  "key23": "3b42RxgnFBspUWg9S64ZnH3iWwfYcZniRWvVghVU9tjzBJJ8ygZr8nVPnK5hBUTJJjqRcBftGMY3xRUVvdjbsWPp",
  "key24": "5t2e3Kc9KEQXxEfaTegYocoCziyTEsnq3kwZxsn5aJsFpB4g16gVBpkzdef5aPmpS3UUGE1Ms6ZEkCQoW5uNGSqr",
  "key25": "4L8vzBYrqwKYr7ZaQdA36okj7wTaF55oZHJdRWZCGuzhxLz8bc674Pc1nqyU3Ao318pzPNW1fpCKyUNYoU3c5Z9Z",
  "key26": "4czycLLh7V1iLYUDrrCkdvEs6jLfms8sGQNsTsVoydWCVKmcQLPPHSp3cATR9ar5LAtm9VvCDJMYqfXQYQ252iz5",
  "key27": "3hsCQmnVwKDshQcCKW7oj2Hk5BXwYsfvb3XZ6aGRKoFE1Vf2kTuuZ9K1Js56LeyBKdXo5hKNWRGhx87hbNbRGchW",
  "key28": "2JWWreU5Vcw3XMHmGaSQUf7GDXj3EM8yV6uTY4zjgMb1HgTozkDKpiVtJGNPCxCfpbzTrPYwZ7g634USTDxBbBMb",
  "key29": "5RcCJPrB7faz4qSpjkC626rjjLUYYFqwuYGf78L1WEeFQp4oG4XU7QAZQv87Hikv3DgntmzTmcrF4avM8Qk2Z2vP",
  "key30": "2tb6piG7vJUwmkEGL15A4oHHYtPuCsm6s9TUGJUJNjyT7YzS2Urk8xar4t4YeKxSNgV5UHsMzkuNZezWyCMAoU51",
  "key31": "4ASbMP2hew167a88hoxxoUsmcGfQ5sPiDL8n8mbUfR1eYKeSpCoDuS2E8KUpsFQefeir9p1TFoLBGpdnkx35aWY1",
  "key32": "4iibrYPCmyNkPEohwCZVnRYUJaHdiYaknDLDfDw76EEAxGddwkNJLXWZ1BAcL9CThZPgFEL4c2FT3nUwtPVGqLKm",
  "key33": "28iKb9YW3z3ttDFXjsFqie6A6H11RC79JCCXJjxCByRAv5sHLz5tf3wv13dpXRTdqPkdKsizdb4esJCWt9EgScZ9",
  "key34": "52AVhkYXVrpo5Y8Jv54cfzYZonb3m52s7Pa3iBZHXTcyhhV7i2qryjQbCsWwU3ASCmmFurc1Jf7ADkJayaDCbC32",
  "key35": "233bGUeoYzp7cqDaTLxJRqzCx3uk6fUjoQz7VHQQXyobHTLnctMCfNVd11WsfGJzfQFjTXNdoFc19fH9n25AoX4s",
  "key36": "574FLZqntfbUtPyCyQ8bt8E6voTVBphoTmXhg9YqVf85p7FvqA9jJaF5ynaK3UrKoLGp2Awt4HVZ5DYexyY7KpDX",
  "key37": "23zJXrRZ9kdFRSPMFHYwqZa6Fshjqs2kXzR561WCugUo22JgaoCnDHZPA65MPiHNT3ez6BHiwvBSG6ybu7irGEQS",
  "key38": "5MPSiTux9eUvvyK2arS4i1SEnc8G7iW52owdGcgNeqfsprnqCbdRTYsN3MCe9Te1kciLjk5vmK5DsJF5qn4LPKiC",
  "key39": "4Hf7vGiMvvbPfLSTb2gVDi3QwnWifaqSVYDWpEYnpAQQCGNgUdanCUaHGY97HocergH2xqEAFcwtmkcFCAsPRngw"
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
