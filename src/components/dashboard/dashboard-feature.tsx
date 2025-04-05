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
    "2MbkrL3fwwtfJEnQGd2bH1PT6CfN3AeXepJxV9s1m6DNQNaw4Gi92hGkW3vn5yJxWsw9Ve12A3rCrDsCsak8b3Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tVSeHTBdBSnHHFkL917odyZQnF1egUuMoAcX6tca9v21UUxiwUZ8PQJpzBoUaaynGVBXfJ5psuKgbyUzpYo51Wj",
  "key1": "33xoy95AghRAGT6TcsJv11txz33mQFdkgkYr1up4JW7djnireryGEXcyB3qPs142FXLvm2AU1zCkvJrJ2Wp6dQQN",
  "key2": "47mRP7WC5r9KNpnxYYAH7YV3GmkUW9UDHQJE48EeQK3cdKkekBAwWFEPMjUiMqVjY94imuvYueDNEMydpfhUaNxy",
  "key3": "QbvvfYXJC1i8Susv6VBLAoaQ5sBytEPDuRpkhnnpns3H7HSED78q6F32AUphJzkeeNQzbZUCGJCJLF6sfZHVY6Y",
  "key4": "1h7n4m66qdLfj7tAKf7wFcjGJYSgXRhpud4GSWPnpeieevWiipVATHG7fVuV5fxeAuE39cJ598SWwQab8f6Uki4",
  "key5": "SZiWciCcYVjDLZA9zRJqtgGA6n42qtWmpWg7MkJicvnkFS2fTzZhZinF9wAkAreN3K47Z2J9NdkxPmWdJ72jbN2",
  "key6": "zUgfEsvGv28M1tcTY6gYp6UmzevddM8AcFjFmifgGSxT29r5gM4VpVxoLbP5z6hqCaNB9YhmFxFoggcsEdZkD5T",
  "key7": "3xF5QvdwtCHCFaBZADtJ4Y99RRPtb2jsDoFrRCcHSdXVUcFp2Rg26PgCViGrS3gfBqELHJh7Xs6N3MvBebZtvLmD",
  "key8": "4zQgC593V6M3RmahowBHaFWCR9mGLcUx1gRaeyB8kfh4geXdKJLZg2nd4MSAG4sGCHjqiGXorBcYru6DnqSCbDXX",
  "key9": "4GNee3xL798SvUfKQcg6gQguTckkE9o5h3xM7pfehUYBwW2k7PDYTzj6Yi2mtahcA1WJime2rpLjYKhtmoBiCt6e",
  "key10": "3yWTxAxVXSa6v9SxEsg2523TuA7njUCCeGPqPTzzmbHu6gJxbGLAdp4fcpQeduUGb3PWm2uZdKYFxWe2HmTnHopB",
  "key11": "Dkxcv14una5dKRG7ynzWrFA9g3qW2NFHELfnRLV2z3r31hkf3qJDj5neqbbVowVnZpRTUNyc4vTKn5yJAkmmYZV",
  "key12": "47wtYGrbVM1S9ZfycfZhzh3xTuv8DASB1FAwk5GMX7CX2rhKEwaX8swjguUR78zMJ5AoNXaDPc2YmyWd6FJ58pM3",
  "key13": "3Hr4K6GjS7AAoHTVMLEhQZQbeyhLwKLVEaevYnMhhjDPpnK2Qqd3wF5dXC5kNyfWGx5JM6odEFzXZZELUAeG3H7f",
  "key14": "43FDk6qYVPxHFVEzaZC6HkmLTdDQwabDEtKfDAg3EYrupFgwTvAsA365U7w37co6fjuhYDHE594TvBbyWun21EMF",
  "key15": "3tQJc5441WMnsbJj5MnAryHHTdqKDMs2C9zdQQTnWdYmUUKCMcKNjkTEoCCZPQ7ym4gVYmc7UmEREfJt9neVHzbY",
  "key16": "5qoc4nqAT8V6hWQ5RKKm4cLH2Ao4H5vDqAVB2p3bgvVfLzRpyEXCnC33kf1bDhEtp5gsDP3RAi7NbgrXuGsGzt6R",
  "key17": "3c1eWidkmJ5kCAjycB9eDH9iFPvqUncgRguBFE1z2oP6E6D1xFg42oaC1xUZkAYuVTTKL1PJ6bwMtCs5ZbeSZWEg",
  "key18": "2mtz5ocR7af6t8opd5NwvQuwdL98BkApcshHGnpeo8C1HRkhU8a14Z7EuDKMkuF1y3LXnRuWBcjXzRWJnaZZBFxJ",
  "key19": "4eNTk1FbW6CER5tt3PpVGwDHAJtELVh5sdAMk66vCTKT7371jNCBPgtnDo87fB7LDVbYjD2Z3V2HDZDHSZkghjNv",
  "key20": "2jQAtnb7JmsH7AfHq3H7dko1NbLz8t9tKro3HLhxQBhEjq6Qvq2x2PLZRsCt2oxoCc1r3A8Nn2oyUVj7CZ7dAiUs",
  "key21": "TYG88QTa8vzMtQNjE3u8cKoHrfTToVntZmPG64yHpjg6jTy6mWSbhSb7hwtrj9kw6MSRkNDdvPxPd9eCU2diX42",
  "key22": "3HjDytYfrHay7Uj28DNdRsUMEQDgcKchXPXWMH5NksycQ2EHmkquMFJzeto5V6NqdRGPT5GTBZMHkHhy555x5WBa",
  "key23": "4Suikzadsof3pEDEeC83a95phCFp2ZEhpYxdmo18ZrUr6kBHSRweHhvP1Qh2S2JkKAGwudtPhvgrxfEwf6wah481",
  "key24": "2QRDppTCpxr12EHXL5gxYxqVxSkVAwxYivmwb464rdUPYF7KdHdv4xRoJyXSP67wKC2XUVuS68ZagdxfMamdKHT8",
  "key25": "5MeEM2wXLwkgeE2WLGYZgfa975q9HYXZRsudbRLvV73gX4nu7h5eHjZF3Czo5uVGG1xrojqtgnULAZN87mC5W6HY",
  "key26": "5oJ6VaperGzhzhRdEVK2M9pJ7sm1SzXNYa47Du8CrBvofPyRY7d8KbtgHeJw7bN1S9n9NVtPD4bcKD4D95ZEV8HY",
  "key27": "oGCdd7uNyF5eSPsNpFe7GRJ31kS57c41RN9ysmjTTwkUnQDifvNZ748hbjWcca66wac6nLzrr4XNhq9A1dGCKAi",
  "key28": "5kqLVg5nkWSQzyHMSbH9jUjNrbHkPFvtNQvFBwutGHJr6Tvcmmsydx39zsfh33Pd8LhQYLdzUtkdkzbPkfYPZMpv",
  "key29": "KiLo5ppVV75cPfZVu9zk9cQFqSZaBimaJYK2R5woAmpMW8qvDd8bcQKfZfCtrFfVkGy2ruXEj7ry4u2dJLozfxr",
  "key30": "25FkutCTh9Z8JeT1mLGyxV7Bt9CunsyP3HtWfrfTYKnL5HzUED6ARRsTqK65Znzm8HuSqjjyzWWgkp7fPpy9b3Bf",
  "key31": "2BmgKoe37c6pmnyEqYspRP6qqPvTDikdXjxE2vswLKSTNGHkv4oebUy76d9tsKptfC1YyeaCj6XXyzdYYSuWwDzn",
  "key32": "T3JqDBQGDSMdRtmj3LcprSBzVyWn5RtQgJCRomj44E35iqaGJQXZsfeRQeM2V47Z6e92kADqLaL2BGxdkS8Zb2E",
  "key33": "2WQATK74gz58xsLVYrWTKQaWHFNffHcQvm26XrS3u99EWvmkGj43ghFt9f6kMSjrFETBxcJtiCxhBat3N49Khe8i",
  "key34": "4rDWLwngGKYps5U3fWfoK8kQ2RrLY5sBWZvu7dsJ9sn1uySXAZKULbnMbwhrnx8bJ417FM686xuYw37xZpkFDSEf",
  "key35": "5fKNSw1DdHGCr21547ScQ9X88YTKaNtR7nfigKcq4bxDXiLJKuALji9y4qoZRpdnKrm8DMKQrwjJ7FBtpaXR7SoN",
  "key36": "36XzULBALohyxi7zkoyMTrZ4SQRN3NeXKzyR213H8t9MZ6F9DcUFnt2jAqCBoiPd5cZWTWKSFp6DZ4gX41CinXqc",
  "key37": "JpxBx9YZN4FVCe3CeFWVLH7CeRrkerCcSAqN94oB2e3tQFnNMLo1xBmYyHKAehimsjwUkLdisLFzSAUTJnCXoJQ",
  "key38": "4LfwLUz9H1cNFFnkDZZqUN9u7GFkK3L9Z1qDpGbDGnRqgAuqtCa1VYfGgirU3Me27zHih8TiZj8k1SjpjetJ61pi",
  "key39": "2PQmiJiDueYkpRW4pWBm5tZwgw2a9pN9qbwJqpYXUmEbJZMcin8Ps1Ce5T6P5qvV3irrSrN3RkftEy6vT5ZFYBZd",
  "key40": "3a2th9NBQE7vrdwCxgGDFEVau31spvfD8zngbY8oEvXxfFSjAEYC8sxDV7Uw17zr9qadnMBPcyGwEMBTaeU6EtLP",
  "key41": "4fXZgmCkbLZ4q3kh2Xk7yj5339JncmE16rsJ2ZuucdMQGADZ8ixVTiuHu7NGe6oJSDmAMqwns2jrNJrgpxXGWXbF",
  "key42": "4Kcp4SbncNaWsxWgnQQGgNEfCBbEBL5momYmniz9TPBm1zi7MbDxCM1aGmd5fQmxcyQtLYgQGgBUUSxFkRDu2V7J",
  "key43": "62c9JTw2sQofME4DoQYTzH4FArgy3YNxF7BDneMaUomVAWt1fDiih377aeVZV9hsPCVseAb1rScxVdK8yNcmFFfJ",
  "key44": "3PXD3y1qBez7LtNasV5GfLux2fPt7EFxsX87n2HcxbPksX56aVUwmyvs4yRTd2oVtcTAo97yLVBo1vsQXVsUw5NC",
  "key45": "BXUp6UnXMf7Vo9CyCGMHmCZCHUoKjWX4nwq1roJ22Qe25Z69GbFGep63L8bqan4xkj2CtwbFNS23kiBjecvNhJR",
  "key46": "VHxLkUCx3dCF78mtjZXJFa4gygAuHycQiqbF1vw6RmYJHL5XGkrz7NMufa13wkGaj6iHRkF6ZrdkYLAgkJymYVf",
  "key47": "5JPwS6GAurk7LMH7yujbHjFgSXCtvrtwhkRpzfsHTV8umUk5kFfDPoxahjXNBbWvNm6VwaxPKMtzmLnLdn5MYq5h",
  "key48": "2ecG3k3DSH2T2PskYXmVW2gqhR8EoG93XXhrubtGGJkpLnhxJ6KT4AhEUUiC9buwCckbbRRCaAzvuXLuEXg1yLLg"
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
