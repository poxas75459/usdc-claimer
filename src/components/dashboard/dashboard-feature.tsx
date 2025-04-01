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
    "57Xm41SXqSTegGBntwCSPiGJzP5QbjzjZ9NgKJqYE33niQFEAdghrAR3aGDMuThaDcqJNeru2Zm3Zz7oDbfNCBAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sa7kaxgYeYdmbJivaFyHAcWoT43MtizMitY9md2x2QYp8QPZTUUEQ1R64oUyvdjaoNVNBkkd8bTr4Qru7u5pMUy",
  "key1": "4Hj6NRn7g3UgT12JWcawcXprhvrMc4y8FXLkTqd59zvaq8VcCmvwz6jihBkY8J9n4qRGNon7aX2o3P9VTf9siGwL",
  "key2": "3LEoVLwYnU8M2Kt1TCSVYCTCXkU1FYQfcuupDCXqwHceMgiGywy51wKvz3bvoMxWSggHYB1mKgneVgkSL4oxrDyS",
  "key3": "4wVESGzLNnXMZNKVMCbUZzRvtmbVeCp3K2v3CXcPsVdR95UToPJBRkKb3s9iNHC4fxBJHWPMuEeqpLfsNKFE4R8W",
  "key4": "3Qos5vcus8a99EQ9evz9oobv1FoJJSGtpXGAU1amJRgGkd7s6JU9tQxBJuq5Q9zHs6C6teWhoDxUkd6uaG2SbPBF",
  "key5": "3wQRu1fR4u3m6HN8gyw5CQcyiZmZztLq8XMyYrJmUW32yARnTrHD2pVWgGcr56etybZq4Qn7pwgHnW4izFmxia37",
  "key6": "4j7CmaCH5JdPxmw8Ecwcdd8paVorWuiGBZdLHKNUgnHj97YMeLkoLnXU345pgE7TwinbvKNiCD9ee5WfyHkD3tFQ",
  "key7": "2JbFceXCdiJF5v9fVZNdT8UYcFbhUyxxGeCp44fXLttLcPmvDimLffph7CNy2Pjta45nUL7UuikSyKXzmuVYBBcf",
  "key8": "3ABF2VsVcBor8cf5uBehvbofVUuSHvYxw1nKCP4Y7mQXxdeFAnMNpw4RccH6Kakht3swfLZsHuv2NNLFivwv6AqC",
  "key9": "4qDX5eatwSm2GUXYZinRnEeiRVVnoVtbF8bBePCuVnzP4Fit8Z3yKTnxX2JXZi7McFSkZPQttjWNWcXPRs9stngs",
  "key10": "2akjALzdSKSgqpvSR5Nkh7wNhbCkfzisGDVRhVsCX5XvYeYEQLwUV9c8dmsjbb8XjAWw66SYCWwz1Qt34HyfpFgU",
  "key11": "pYrpX7QrHCKfGRK2oimujeMrQhx236vEYmKnXvki3eNMjAJESoQ8rrK2ZYJMstUVfJhskb8k9wYP5P1Lqn7bYzZ",
  "key12": "xQ2Dfc7ovfrEwKYeKcEarNz2CaLxgDnKVKCsK3gui7oHrYiFno2bfrSsA6WgBzRcX8Fer8xeriscvUwSUyBuNrC",
  "key13": "48UAZExQTmzyQ1xp9Nu12Cq56QRAKSYaA3Mpy5WvByLUGsm77iSZHdW9754UmnDhtiF1oYCmqB4gKPoBL2tD7jpA",
  "key14": "641p7iSEm1AGGA3XujgkBAbNHuvqWvgYGdKT6o1VhwzNToRN4icL9EuRJQD1naLG42BHf8TX5ABr5G3gpwv4KRdi",
  "key15": "VzGRWUhsmkxxbyh5YGueoSgj82NYTbJ4WyEUyjRyGCRhP7ggFxCUjrmUSx34Qryt5P7hwnaRncb3RU4EJvneMJp",
  "key16": "4L5Bvqnz6B8NxCVpARDPE6pkspj2xPcQhEdde1Y94WNDm6q7s1B4nykWWXYeH1rRrYokdqcs1AUGGV2uUWDtNJF6",
  "key17": "3eZh5k8ApVFM33rG4zwKeV8smt2NKkJqzc6NYCcjb6LH4J7xkLASrvpNYC5pxDvRWw1ePqzmThtXuxeYAhTxNzjz",
  "key18": "528DZpDFy7vVRpgAtPEYuWjDnFSMijCsMiC6W7MCF5kTHPXbhjPyHhkYomxuGUBbpdK8KpbsAZYrNqgvHe4rnxkX",
  "key19": "27AxRgj6MRC5doiD1cvxX58VTsswVT5rDmKV32HP2tGkLr5hAnGdGzzheoF1jWKiFh726nZup8VqVYKuEvBA92Rr",
  "key20": "4mmYbGPXMjrDbpsBia7JSQRkUUhris9kyhmMPbAsayp75kuPjLUyc4c1aSpXmBZsF71hHVGbtsDYWnpXx9HbrCyq",
  "key21": "3sFrzDiq2eqXez2XUjoyHvMi85hcHtKwxNAd2JxcLmxgxfXGY4Grh3KhYTCULuVY9v8JBAHydCvxVWx1Ku22k8cK",
  "key22": "A8TJzg2TY5Srr6Jq51AhGJKC7M76HMbRDCAqQfn3tZFvSEZqBWkdNEbZgdgQwrGzw2bsLEqQXYEMeULCSh72bju",
  "key23": "3QuvD22k5nWHKr4NVQ75dMN2PBVzU1Qmk3HPGqGvDurHMeD2374tW8owNyGFqSUt9JqcHqChed7uqPrHDAh6bq65",
  "key24": "2KaSJbf33Tp3FMfoQMAsmSr5nQt6UeV2uHAZtGsDGfm1J1cAb93JDNwnEYGEd4jh3BDMfjn6dnhJGRPd4SDR5hGa",
  "key25": "4LUhafvRb3MaCatkQAzUmZxsysNiftR6eDSrW45DzA69FMwawRp6y7aTBZqDkVQ85GSjshU8iFkQ9gEZ5jkAsitp",
  "key26": "D1BEjyHcW184nsBuEvY479yb9xvG6tcJJQCuCGUT2gh81TnYmE1zHKMk8naNqHerbWDMgrYR28urGY85kPETUgD",
  "key27": "3rko22GWXuuUbE5B9uNdCn2UiN66u5371zp2utpQpfpRK5xRB7znXGcAJZzksa7xz1eCHV43x1ksvdYKXGpAjc4D",
  "key28": "3LMTyr6AaBJeaJc3kJ5jMRX82eRLFQLgFkwH6Wth4eVtDXh2VNFXZNCy3DKsGSCUmBkMXtvHSThLFwjEZZhAYrMD",
  "key29": "2nu31nEQzTE6bPVQ3L98CaT6TNNpqQKqRtvFnVbhCu5Smm1uiMTBTWDSR8xtLA5mrBtRWZEeXZTNtsqdv415yZBW",
  "key30": "32T58V8Nyr7NR9mutvcdfXjU6aQWM9VRwiSAKB5dPgA5iFrPUhKtFmkdWjd1pttLffhx4tJLmU6LN7TcfqY7nraL",
  "key31": "3t9Y4n1cd4UcobKdB7n2oS8M6aCsDKqNU9CCEPtA5TzQ27BhZkSkEUKUtUU51e7aiKr12oCLajgChiAXD3JpLqo4",
  "key32": "LnzPNfY6aTgBZLjpn9jX1MNgtm3kN2NwniMybH1Y99gBG2odBF1TwVaiGsdRFZYwM9NK3C7qDyJkXzRopLBGT7K",
  "key33": "3nkxpmqFXdSMALJPNHu1Em7srwvCMWWmxTJ4WNg1FbSA4475XAc5vWTnKPAUzqQ4NzaC7m7AJ5QDFyiFJnPhtv8Q",
  "key34": "3rn4Cv7kn5uEp2o6gDYvqs3aDLtpsJqfUSm4W9WshsTDVNmzXvDtyUapFEiM7oyR6n5u597QxyUd3LRxQGN4gBwS",
  "key35": "4i9rs6sQQZ1z3yopCwTjCSQMPvRBzbC34j6HAgW1vEzoktCBkHb2cYh6nfSvZcB4g7kvPC6xMyM3KSUz6PdwPeXu",
  "key36": "4PQKci5udWA7R2JeoA7YJAFU29kcXy46yLQ7337yhfvJPnxTWotHiSDuSX8Hi7hyXsRx71NQY84RQdwdjugcNXdw",
  "key37": "5Kj6JTbDj2qTwLbKxsG4LAJ4twW3j38r1KtxzRb3D9FSuzCq2xiUuSnBt8BUtFnDxjFdGNVKeM4q4dGJXwxJsRnj",
  "key38": "5PDVQeq9pbxh1M1twGfnVBPVjHhm5x8GtEayNVRSVmafsLJBWJ5ZVncH4VCevR8A1p2Gtg2iq4PH2SsFkF19q7yd",
  "key39": "2QxEuhtqDELsk2Cy5unYx6RigQGgc89my5Db7qsJwhGDzuQz7c9zJBSB8A3NshJzPE813eTG8nXXUhXCZojueVrg",
  "key40": "3tyWf9wTZEfwSqcwGdbcf4dodZXtjNTE3dBKbyaqHCgPtTcE4SDTMFr9efznYc5t3dpxLyQ63hU9XoWbfUc7iUQ"
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
