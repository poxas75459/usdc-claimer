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
    "2u3pYCF5PXhLWWfEeo5tx6P14oKdrKPM8xXnhSv4YGXukKMso1yFq9DgY4mkNe2xixv85BGm6sCERucVSaHfg4Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmJpk2Kk4qTYSPLKB3VDs4XzkgZvmVRxWR7dxKfW4T24911jUJzXSufozdaT1wUaK5SdWiQEMUam4KjQMt2aB7K",
  "key1": "Mbz36L7v6tCypogygFPbEqdGYdgtMnMjJL1mMVumSCNzczv89md2MN2eDcH5pf8gvFsbxxojp8xpuBJdQ6qGLfA",
  "key2": "3L1NzAMN27eGPn4GqGE71LRNfycPpF8aXqLzAdADFoyNmgSy4dxA7xL8UPHTeWiseoBZ8GKaQZ47WBoBRfoZNcC1",
  "key3": "KzczyXed8cKeHd5qF1fAN5WaR3GYoLGKJtBjc9RayhUpfhZCs5JB3EZEMVFYeSj2P3RbAvsAoTEdukcAFyRkCpJ",
  "key4": "2nY8kgUq1WAS93wLJJoxJrhdV1LuvX7e4Zd1sfPnBq4vrTZHvK22FffgZzXaqy5aYPFvX6JdrnSc3RGSQx2HKoqX",
  "key5": "2RNxSSLVjBF6uhjszk7BymPZU3nohymESWWo1krqaGNbWdZt3UGyNhWTCGPMnBSWoaezghFm47YkzKAXkqo1Crh6",
  "key6": "2BU9jqT2byrmmEo6zP3ujvwdBJEL9FbPAGKswsr5nFBgtyfM2ak7pbwqAFmAfTEGfBbvjCTNyTQ8kYKdYHdEGkwU",
  "key7": "5FwUjGpihuZEtoQnxWuDUuVgf6BgFUL4Uvy29gcr1nCt3598mqEHwWjLt7Koer6m4p61pqyTLfdR5mNHY1hcJSmm",
  "key8": "3YZQBtUzVCBqcjmAJFfdT9QRnXEJaSk2tDVyMvXknXBH24ouqGY4wqznXcBCkkpejjABNrpsj6UkGbg7JJctj4Bu",
  "key9": "2L4spbqrvSo95UZuyGjoZAupgKevfppHFyJ78EgBxoaLFBXgGun5RGpYkuNLkvYSVsER192ZrtkVgoyRvwN4DPu3",
  "key10": "5hWqxh7Pm1cZwCHJEDCLLGL7sSCF3aHnEmzX1RrpaVzkrQdBmHQ3bomuj3JrbdQtvVpEPSe1o8HdazDGXpi2V4hz",
  "key11": "3Ai9gmxSGtve7C7XkvWQMt9cqnbFmEf17FeTqiqacQcsaM9ucJHvWky5DJ4PBzxTXPKqwAGyTcbezcXxetkRYyoG",
  "key12": "2mPgbFifeL494YmJ5usWevAtnJEdnQLFySf5vTfxQ9QXQyRZ519jNWkQNEiK4cu8t2EDqMnLXxd4vm9hZVNZFw3x",
  "key13": "5eiiUN1tVqEUPacEeWaCpytbFHAQLqom8eFuaNK493Hxc1e5wGpJvUYZy5LLWW8Y3s4M3H6W3DXdEHJPz4CXnjdN",
  "key14": "2eJcmuAUubmXX6ocS68czidjDDtJuntKZrWyuRZKo2gXBJpq9zrRyELU17FDJuWbsupu92p7JG8LuwxHoAXtDVAa",
  "key15": "4KLJkeM6iZ4BbWG96gg7xHgM8xXW14VRVK7z1sNqctTPWP8VH5vz9Y617kMrzpc5ihDHEuGoFcBtoD5Eg4NCX2Yi",
  "key16": "5cVUK6LwYXJJ1ZP5zfmaEoodqU6yE6twQkzg4LWJ1Az6nmyJ25qNwaTLBbj6cS5NWnMpmcPvFdYQzhebXeLAuGzy",
  "key17": "4yAiDW1qZ1E7dErbC4o5cmL2jdPRS2BnRNrHTSwSLtioxA6fWrrxbwsegN9d7GdjyNotF4AhRToQdqhi6e7ijPfo",
  "key18": "4XVYjfPZNbKbyD1C4YaoaCXXkyR1jFm4ttkNnED1pc9av8H4At5KJqDn4gZrBxjZr7RRhM9oNViC73SKoitebiti",
  "key19": "4MwRsJNKCvS4Ztp9pwnXR4G9KurvapyKvhtbNsuYDZDKTkfeMPeokv9coPonakqBV652GuhisB2EnJJ3oSVoJCBk",
  "key20": "5cQF6bchxfrFFQwmBZVLbNgsyEdE2599ugH62vDCgtHm9SRqLHnqJ5mWpnV1CEA6SmiMDS8U9hXnnGWMy2dZh9YJ",
  "key21": "4Uqh4bURZ1ij1wPGWayfDWzzuEeqCdrqEAAYzpozWus5et9myKWTTiK4B5jQdkb2MBE1fi92of3vfYQNzTgVFy9q",
  "key22": "2zkmTugo5LLS3RfeTNhopJz5LzJLJbptjPKEfyV2smqJN8jCKJu6N82kBxrFamHku5YXBBoJaDjXW77xk4p2pSRP",
  "key23": "x4uGsZm7zgNjEK6yStdVhLtRPjYJmE4gmvMfYx9rYjMiHegp5UTxcanAmvAfbdc8fZvccrwRx1MeSKf8dehUzNn",
  "key24": "SvLR3vm64D2aAhGjQ2TxCgTd6BUiv82eyCiWzTSLrK9GqTLqwvY6KiqVM4o3tkShyM64NRdaKth2Av7LLLbY257",
  "key25": "3P8Bb47K4NQcpcykdomEZqBFMpPP2as8VDiXHrgikLC7gUuvvzwa8oXzjCfnc4K5W2TBEG1zD5caTzejhSXtCDj6",
  "key26": "5WgDwP4pnGXUk9VSbquUYzhdfE5EQRncbahaap9gUVkC7bz9rRSCpVKb74CX2EWLmWMjhFNfYjzVG3meKMiSwSNh",
  "key27": "3V3DrXCVpR8so29HJqqhkHCn25c28DyzoqMBUpBtB4yd2j8LvvpJ9AucYpyHTHtVvCRpKeyTpnuG6CmdtdnRW4cq",
  "key28": "3CTPvGQX2Uc7nvJZWQqTmyLKTK9bbhxo6eAV7Yi5zrmcH4mLYKvRi3haje86e9wkuHQYMNhg7TUSDWpd3GubPxKB",
  "key29": "3UC8UPtNZVRW2mXF739W1GsvXQLHnRM4LxZ8DutDGgXJE5GmvpwiK7Ck1MBAn74ddYcjyXYHumXXZ7CwXyrxR5T5",
  "key30": "5dwyYEKFCj6uGEoukwerD2SPrg2KE7bCaz3EV3aCKo2R6WCVN1GvMDqTpSAvyMkjmKvForXD2w8BLXcaJ3E7eepq",
  "key31": "3k9LCUNdHTCyAJ6qZCjYjwgEC9YgB6Y7oyTietB2vjqivABqxxbrzDB9RZvE1FioaGLG9v4d86n7cnVZxuUYmwom",
  "key32": "3LJBvAMWY3vmu7823vDTuwd77JCjm3PvVg4KAvedrkezmsa61UXkSES4UT7f55vYK3r6fsGcsof26xnrmocHobZQ",
  "key33": "gDWuDHj6XuMrqw5oGG1JFG75BnRiep2PAc4LqgTXwe2HVr1Qqa6UcxfhKMcTZPitv5KB9SVMAN3crNA9pTrHkzJ",
  "key34": "2SG9Q8xCcjrrzGiXS4mYJw8qWLyzqQvCpnJEs1uXJDXXkDwRbB9fZb656cJehnrLbXgidwQ97QhU3vnz1A2aFZdN",
  "key35": "GVGCbSHnEGVwet5MxbZjzPwjUFNRpBipUurpKwHt2UkumzuMNENbvpprxcLLnw8VMDksj5HHtki4pXN3ajPtemM",
  "key36": "5h7nj9J4QvboBYtuc9tFE2ts2JyKiNEDW1T7mEgu4FoTRQC8tQ9XeJMw7E2dQmr3ZkrR8CQ7Hk1xSX78B9h5hkLi",
  "key37": "54EHte3yCv3Nm6ZwyuZ9QGMg24sxBfLDh8xtLPuu3M9VqgGpK74FoTYkvBjLgwXwhR7oJwMcss1rEuHHiY9x3kMu",
  "key38": "4ndshCg2A6MDdxVWRGydETs9MdC3FRsq3aYGAbnMr1XAxuuv74kg9kWTaxqV56fKygBaLpPujbBhEqhCCvfohBU4",
  "key39": "2KzFp3UoayZxs41NKBNSfgAvEXVgQ9ykDGxsLSLgsTxK4um4P66PTKGaB1xLNDsuyWGUUGj8btFa7pft7vgBUvE5",
  "key40": "4JBpP6tkjPVbjejapDnzFBQykNdLs9i5rodLb3gyeVu7ML1wDvNWtK9XfSb93CFjpRTr2pfh7BrSBqLtSWd8rGV6"
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
