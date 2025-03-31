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
    "2t6E8FbnDKGNb9Umj9LxRanzZwrvvi19NyrkBnajiuiULsYVGwdC4Ew22kNjeZTzD1ERDhoFFz1mkeBDkXjEXpYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krygUyxwnbqWv3eC3VJwe2A173bDoAfE8qXiDpY5DoXoK9PQqqgYQMeXmeNaURr8s6Gt2jxURDdwHqMVEPqK2bw",
  "key1": "2Pb9ALQwGVt19HAh7ZyJsxaRQ1xQBJjUVF35YSXJfbU9PneTT5oyViyukE87qGSzaBy7sfcy1HGHFADhqdQRvq42",
  "key2": "5jVTVegJmEvWRwL2m7NoLD2WT417eCFCk7T6M28bMM3ZCpDvt9w5AzVqXPRL8sYu8NL63kgzaCiPDV3Jit5gqtYm",
  "key3": "4u9uuJhCmqUhuWhyLSvQub75qY3RMLejmEYR8KAgYpbKybicgNbJivhCLszErv7gRSfbvaHw447FSDSBkzoSPaCj",
  "key4": "3JCPLfrEyGeah9bxQwNt67LXStVMWYYmn5s2Kqf7ENWfUL9P8h3wgEHHKXcQFtCaBgzQUPeqw2aiUPaF1JQ83DBa",
  "key5": "4vr3ZSBhDf5yCw5MWsTPE28BTDMZ8veFou83XEZ6yKwWZgQdhsfrEciRh6uc9iNVRnHgTjuqikK5HdPLb9cpv8Xa",
  "key6": "3tpm1jhVdbQ9B8ggSWukY5U9t1UhLq6Wy7bRHHbSnDD4pshytYyLdRMxmp58ysLYS4aJTiXL7BZGCYYnLmrVvP4F",
  "key7": "5X64YJqVWjffYF8HWUkKVVdxeFQmwfw1Vu3CEyYN9MnQbubNF4WEA1h9i2QU8d5kzbY2y8nJizTDwgjHwwicKkgD",
  "key8": "e5h9ipE5AriDY61tcyLQS5BSWsU2QN2QgejSJGjW8s3v2smneP79mJvw56o8Dh5QgsDRjDM93DnXJMDSecC4Bj9",
  "key9": "2WUTqmCqzbT1fwntVcxcfwcfDU7X54PDe1JTVH9fGFCrCENrt8Le54Py4keibRwXz6hzUCqGiyzWRwzuPDmKDENN",
  "key10": "4FwxdmmBJwak574BZ8qaJ4CpP6dyjLxXavtRgaFGeEs1Mx3LgWQdsa8n3VzEGZ4J2x1Bv8X3upKcMmozjSBk94k3",
  "key11": "53K9ZtUSmuYLcyfRY1KiwP1UTpHPRg4sWH91JXB3vwtCfgKyEH5uS9WWyyjQn9A9RZAUqj1GbBttztwfUC9KvogT",
  "key12": "Qmy7qv2tY412M3hyyZnJa8PcsnWebnuvADwRJn3W5PHu8Gk7zhZf5RqLDUSyd9jxYU5cvcybzi8SLRm96br2EhU",
  "key13": "5L1ufVvHNxspzVda6guddyejBYexPhQPdyfo5ptCkgsboUKhg4xpDTUtEtus396as98j9mNGAv1h2SLNVTgK9VQ5",
  "key14": "a4ErjzaiZRcKkhWzqtF8Ra6uqzrVRTaDY2qgXc5FRRU2BESBdCvAsbcqJgEr3U9FdseRnM6owCrJtpk3zGWMheK",
  "key15": "oxU2RJpt1hsDBhuzRvADHaxZPmnEjnvrdTyckLfcY4mccrvH7Ex5cbtx8zeeStQP4vjWBBNAGJgAy9UX51vJT4e",
  "key16": "UaKYHQ45gUj9dPyPkBoAYGHhhi4Bp5gsWBq8TyfiGAF1cefA1Ltf3hNZR1GTfDsuAGuVtXTQ1gpdPdYu9XLVrY2",
  "key17": "TEdfzA5ECKs2fdAptiGrtA6NR5yE1RusYWNc5BwTQfPSxca6TiU1j2GwbLZYnSu2GCab5h7b9G9PUNJkifjeSyu",
  "key18": "2pduNoLrBdpvViJqLAWCY8dvRznzUiCcyFBZCbtHBhEeJvWnyYCdTtHumwGwVBDH9urTGamp2s1gMK2fSfiHegvW",
  "key19": "22tNAjyGUNTM2GQwPTS1p11GJp16TzR86Ck3u3jTwgYF3kG9Wz7T7gCeeUQZq4XSUZNdnJyn2v28WBFcQwcLbC4U",
  "key20": "585haf47kKDYjbXYtQQDyaig3DEGzkEr37j5W6U5Ajas7CwWsu6puUqezVeeGvukefBqyS6U54o773wngW2TrmDy",
  "key21": "3Hq8ibGr2PnoLacbSmjtR2YkTUDPHGcqv2bhCAxixuu4rMdCp2sotZbvDyHWWFDLWHDPWiktu5G4H8bnhCzhZH63",
  "key22": "d5yWBQgnZDiCKWuvZQGv9KVuUTUe6XCWqzXQfNCqcd9zGE5sEsFNxFpVH8jNokkM2wyu9AS3CwzhhEVS2LALs3E",
  "key23": "2CamGmyF2oUw76WitWRaLegqA3G4S9vpr32pdPcaKQmCjQXUsWX7FM3kFBKQS9gVAeBdkjDim4BgTY9fo4QbpPos",
  "key24": "2Nfe6g7qkiDTFe5cVskbLwHHBkWJF4MvhmeCyK8CCtwYBogrZLJGRBAUZfLiaG7jA9WSgnFpxSipWrVTczHRCso9",
  "key25": "sYyAgQMhsmhKPfSoWK5ay9LXRDUA336nVXBe7qt86b82b9K23aDy143nEzQMinLfXGK47YEnw3dknUxPxGJvmY3",
  "key26": "nCWdhRWC9CTSJdgUo24fatJyzXSwsZRzD1tfMYRjyK2d48gaBHQwaj4ugimGRHBHesmB5vnQw7wGZrQAEPiEJ3T",
  "key27": "hZmkpAmicNMcPMGqUzG1irsvCdUDDn1nC8UAGZJvLQyzidDk1NFzEpBwaN2hGKAtdAVW5o3ksWJG6BVyJYJwiwb",
  "key28": "4feqwhdStSgq2zb8PrrCmh5BkJmW4RZiucxasE8URx3DkJAth1pYQ5JwNVQxbqCF9dHN6KPBmgUm8KmuTCewXdHs",
  "key29": "5E65UveLFmvVWEovU9DoiK8yvpZgsTxxk3eANu7P8UcM2cMm8i2bV7EzkPdkNJvHcd6VajGETiXLnjBJcjPKncaX",
  "key30": "5oFXwYzLMEG7Rq4SxhMnXu2WpNrRZh6XH8sRnbRTMt9FMFexCZet3xfyUCQQJpsesWW8FuNCkMR8TJgchihNo1VH",
  "key31": "4bdjCbkay6ouHskaiS9vidGAEP31XK8kCyRCmJ2iHGfVWjiWkf9RzQy3ipcodYKd2K1G2G4nHkddTtWJ2NHdQ1tW",
  "key32": "cuiv9YKBs9B23bR5can82jdaSvRdkefg3M2HpH4hK3KNfxLy7Vz9XVCP1LuGf3LYiQq5su89EFzp3S95pWd6WhL",
  "key33": "ADfRB1WwGoxch5u6pZUHiGj29MyipcmdgLqT7MEc2qEhtUkCMP2q3Ba8sVnaifAEVQxK6LSe68C3PtkYxsSp6Nf",
  "key34": "3LL4935xRaaS1J9i4aG2vLEDCMHriYN2tHPCSu8Zw6PYZZ56rQcHxrnqzHydvNX64o9HJqHgFy2xX52fHJq5gvdx",
  "key35": "59zfnMRpYg4As7gVwWEgjtN8mLwbnu5CGau9DTfMc2T3uemfLKKx1KtWTxAwtgxRMjhmJ6NA75g7cqLic3SwbYKQ"
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
