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
    "3fVJwhoyKAYTKn21Ytu6dN3fcb1khNaFZ4yEhsJK2E7P7vpzFGK1xYCGHPgRfbNC7cyZUoUQryh6sSgyXWwSJ7Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJN6K5CCXsM4fUMayq8jzd7CcJCGBNVcVgsqVUZ4Zh62BuZLxHhvPFSew8pcMEABztMYx9LKENabeD3H2Ep6Aek",
  "key1": "5sJGdiGxBkzgG6WXzR3RtoULy9enHKSyRdZV11cBwiNfuEh3QntWuKrSyBcKycFPwDUwrpuzR5j4u6au5ZnbKCrB",
  "key2": "ZDv3F52hfctAMMq7vaBeM3Fcv1zx3mDyc5QcbTthjpTD5ZcuMwRwoEv2ZXBNmk1vTETtFyqpRm2xSJNx9nCtDUT",
  "key3": "21EJ3QfxniPWQwdxzo6qakTuuHEPu2rLGaUgHfArBy5PPzBhBqEmdq2DAMDTjmXVVRBRfCZqGmngeDshTtPus32k",
  "key4": "2ooTT69AKnfzd2hVXKFFiTthRuo66qLtU5eKUYByyYWsKtgw9gXprVf88NKJUD8FYcDWFYuZ1tNYMnkd96wryq8x",
  "key5": "55qU6SZ7uNB7mLN3REMWFv7X58GL54N72Na4FXWY7iJ2EXcrFyHKwPNjqtEM7MS3pKP2AbwkhCeKtm5kcktE78L8",
  "key6": "pkbyGvRkbKVqej6V866doKCohqTyrkN6rvqiQFhapBCZ3pLrkmkXzZmZuSh5dsip9K9vdbkmNEUDawda6fifSrw",
  "key7": "43is8rvntCrvZE7fxjbypsa8khqpQ8L8NvzgtD1bsZEGTq8WczLq3zrybY497vRYvzggKjD3hBahADifTk9hcfjF",
  "key8": "oVfAxiUz4VkPPpeTFQDicMqYJW9hBxrCxQN6enfyYGfLaaCessCfst14bwYkMemmowKWyHcxqrXw6k5mUhn213Q",
  "key9": "DwHTp17dYxUCmJG9Nd6YPy8ZfCVNT4pE1zqSMBdFySr9VJ4oiFMdSTn15Qn5KrcYBTQLh7XGRSqzC82PNJgn8QB",
  "key10": "2YAX33ikGWFEAiRh5dr6xveFVj8tnPumd33NNF1ZTP8Duwki4TXST1n3vEu8Xye445Vn4tU22njHiQuSPgSSnvkY",
  "key11": "5d1D5aRykqoVSYRFwjybEHjxeBQkmigRzmvFveQcirFkZhDnr8cwY4teUMJ7ntjHYnM5S5941V77QJLGxgQJ14aH",
  "key12": "4mCu7arXUTjzXiHGYNbTRQ9xmdFi6p8LW5Xdu6WhfGpGHkcqzMX8mcfvHD7DXVf7CxA8umQVMg9486i9Gx9ZRQAK",
  "key13": "5fxpYLeEJY8u2sKiFszDAcZTD2PDLp8S7LVCHLpGZPqi9ddyfMR27FTtcf6MYCsJu5htwrd5DK1RWFnz24QWDv7n",
  "key14": "2DEN4tZcPpYwUNmfBXKtgPzXVKEiSZDSCMDn2ac9SAEJRdPbQrwzk3pNvYtaNvg2SaALhpZaWbfCDpLiFW7rkJG7",
  "key15": "3K2yRS2UbkNGU94ScwbPNVeinhck2HuitecnmCZTVsaoihPkxEzDa78acURngjjwQgSRBvfKBUKyxWozJALLLPer",
  "key16": "3ZkW1koWLHjEF2oE1eze7LKWgVXJzG98zZuku1oLt2MxcdY143ZN79pQfjzoGpNf7j57ZAXo59RZBsvQosYX8xLu",
  "key17": "aHPKKykHKS1EbTzb6JSYJEBdxJJ7UCqJCpexvK3ZfJnt88sykLzGgdMeidhVQWsdfKvERETWxxc5x5rUtLhgBPc",
  "key18": "4q7KKMcg2rqc3W4SEqhLA84H768LPi5M1gPjuJAUC8UmJcKihL3TzhHZSdeXUgC8u29afwUnQETvA1tZ5d6sPp83",
  "key19": "5Z4Hm4gAuyPZcQSvZ6nEi98wQaTNVhU2aYbnGat1p5Tp3AgMmwi6d6xiUmMZetjDJGPSgRjMLfBzNrp4XMGwWCZu",
  "key20": "5vmeVPTvCCEy2X3g7KcAnu4TZyp2zXgUiJEgVkioCEgby4KztUApqrwZNEkhbYSFCB6i5jc51RUJLUqnJRDRqVF4",
  "key21": "3uPDqYwwoQxM9v4DLBKyfVUAcSpVjK4o4HdQT6HnW2pGqtVD9Bp1g6B5T6tSF8nZEcSEdBX1NuAbFzDNNRyHpMag",
  "key22": "51YvaxNENbd1E4YVbnEQB5YQG8syzrotQdbaB6jZQ2gQM6RpBS9RtuP4GVe7ZwyVb48pzhc72WfndjLiTnVeUxqR",
  "key23": "3HPnnQiALwsh27PkBUZgqj2caY6pTxF1QfVUL4jLwnSDXJwpTkFexh85uU7cQF8KTc3tLWo8Pj2iWrgRtKhQ48iB",
  "key24": "EmxyWYUubfjKGkeSBTFTEJBQhvvcRGm1eiqhDcubwfV954Go1xzaxAHMxbJiqLGkcXo639Uy229g6dMK83AUnTJ",
  "key25": "RmCEToYQHWo1aYaShyNqr21V6L4KTSRRuxUkSbym3zJnWJ3LvRcEC1pLhWtgsRD4Zp4abZjNbDAdTP342cJpR8w",
  "key26": "5nFMwTESdRB3DnbGgo5LFBBjgTdggQzU34fdpT2U4ti4iS5Wkv9Psn1ivtCwH5D1mkeyWCBFZtJQa9aunTW7CtUP",
  "key27": "5XnjUHzyG6jUYbSsSVQapm7PnYgcpmKYbWXpGZVbYheaobiZ4BqjPMSZmJmEG37SqmqpkY3EDzdmMPu3R2ZgDeVB",
  "key28": "T64D6ZJTSdsABTyfjx9kVdJyKxyXRb9psQ19Qqv13RTxv8VhfLwYuTtN1gjCAQ5DeZyeAmh6TSQaYNce8RgDja2",
  "key29": "2ZzCNU1knzJdxGdiKMfq4YxJfXPNkU7NUSE2jF8jz6yK11k3mun87gmaunXSTJcpRydDRz49CjaG4xrNWRueCFfM",
  "key30": "d4dEgR3DwLGNjXNafu1qKjWg5VYLDU8zm9LgmzM1y4uCpVX5JFGr6rYYdHoUqiVov5p2GyjWRWFC7ciyZpiCPeD",
  "key31": "dpnm2mv8yCYDS78NdoWUXAU6vfT9LTj9xa7v7eVKdGn6e6zD9ak5gV6iAbKhZ6bV2kWRm1ztCtj9L5XYassV5cu",
  "key32": "3STvr1xfuPNZuyAjtNgDmEMgpC9Q63vnGUCRYoCttVPDiJfK3kJfVUBWq8Au4G1APUuLU1RshZrsUjXHnTuGMLZL",
  "key33": "pqAYgAR93sYiakx7J6dcxxDmGeWqgizUSh9rE5Ujt6gDa9bqbjw7b84Et2GAV4LunqweKhHmECK6hCEkFkDSiYM",
  "key34": "4CJHTu9gE55dJFrsgZdtMqavcYydWKtmLeWKbZpBcQtHEyQH7oNPpSKtuXgydQQ73tbmLpQg4AmZvLgBGjvTnLv9",
  "key35": "2FecMwCbmigmcgsckWZqA7mVh6DLHcDH8RjVF63nYieQUy3nFwHdfWVvTu9ZggCny2aTrUpGAD8yB5dmPtntAw6H",
  "key36": "3wv5qWRkhLYboAnw2Qbwb6ouKNLJarS7QuGH7oeFatA8bAqp2BuVAJCYSGCohuwnSwg1HUrxv7U698A9QqybXac6",
  "key37": "2kcZcTJdtbK2NfMdie359GcVq7sM5GWdLWz4rmXrknWnJizVdW37Hw5YxZwfeM2pDoBDqMRWWpe1hguCqyVMhaiB",
  "key38": "4ABdN5Sd6Kint6Xdwym1tdHtGJey7vS9aad7fLM9M3PDJ25nSofLe8pHcmVXVcokhW8dpqN8CH9BFnBUtv8NLXDz",
  "key39": "2Nf35jyST9j1VwMwiaR2PNhvqoNkeBMP6Cve1RjPx3dwCAfuZbaWSeCFEQxPthNmchtFRKFUYPvD6vMZKgbM88AL",
  "key40": "42hE7C7F4SZnwy4TuawHZcCXPvDPjfQLGBWuMoxeysmE8hsXGQ7k25wbiQv54RLS3BWVCVhGjBM8AV19d2uh4kuT",
  "key41": "5vHSaCFJwT5Kaeg8KASV8F3NvdH8oHyQe5xPZALSfSHZm327Z664MLgt4fthrqPDp6coa71LTVtvtZdSGGivuYDE",
  "key42": "2aLoczm3ATshoC6jC7e6ED1TtzSzq9PSFQZ24NFSH7VoyKUF5ph24eMdN1BmL4mxjjfGixEtM9LZp2n64dyxhxiq",
  "key43": "2d9UqXJjzsvKUTJ4uSX6BY7PuYKDnd65i8N5GSrGyfFZSyBiySGpG2qetpdk9AU8TRAcKUgoZYiGUPZQKUWSJDDT",
  "key44": "ygsEN2JzGHg1eKL28eDRPg1X9aa9tEZDZQqbcRkyfQXp8VCkyDHx2nCKfVgycpG3PNGhcjkUKeSbhuMdcTgp8NS"
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
