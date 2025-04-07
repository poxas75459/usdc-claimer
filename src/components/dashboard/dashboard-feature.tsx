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
    "3xAUDZpWiD6C9RzStzmtGEnYrDFkJGJH4ePaXyJpQuUiZapDf7WufNtyvpCMsBpEr6kDDusbPSEZXv4vC5yRbQaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1o3iXWqjXvyK63rxM5LkNvzxZYcnsxLwyTx3p6NkDLCSPc7bnBNZFTqUFb8oTG4z7u4aScRQ3DamQTT3oJG4XZB",
  "key1": "SHc83JyakAZjhYZh1hEBQvQ2SjkNnLkTrEpPsuA9khoNDtEfUA47J1P3PhbqaYSWgVwE8rU5EEVTHzgHu9KdSAn",
  "key2": "C428cbrxGHEQQHtD4XBPLuPFapksphwVge7BAJbceRsejijPagEF3CF49LwvC3ZmG2cDGgAkkR1ucNhfRyj9cV8",
  "key3": "2nMndFPimMoAr7aVRTxoajCzLUhYhgNvmrRDSfoNYhJS3gNvmo1bPFaFM4BH5KzAypvN8GrRuLssGTb9fnZZ4nM2",
  "key4": "4zwdY5EF4t8a26A8i4Z7xXHT81id9vFM3BqNfRiuX1fQ2zfCCtMx7DdA6TBxi2dmnEkvKPnRrn2q2Hf957kAiXvs",
  "key5": "4BBfrE9S5xwtdJ688sfhvbVzkD5g9fMtJcd8vfePRTnnEyuw9e3s7WBwfNDUxgeAK8zHnKZtd8MFQNoYWYJXFukV",
  "key6": "3PaPz62pfU5qAJWv3bZCaR2LJRKDmxAm53LnuYsXnTm7wHfgdUo4PibzK4DxfdN7CvtSW7ikohmx5NwxTH3jgqMF",
  "key7": "4d1Hdsss9FjJkvQjs3F3wSjL4sZBDhMdRwF8Rx6SqE4QRZz72RWEBcDYSoguiAmjwPYosXUBZAQHBqr4ULEpiYKN",
  "key8": "3YtdWQv8LbQbG7XJR7DR2tJ6FWWFhsoysDVV227D3FjEozdu15CrCebTUBhSuVfkiGmQxvBrS2xmAwq7R5F3ZtQA",
  "key9": "1jCLBpERAPLctAJ3SABPEMVBDgw3GVbNvoUkAcan8W9pUt5zsmgZAuYGhpm1bExhXuLaBUcG6Ds5aqU1Z48J6RN",
  "key10": "2WKgoMovXBZXM9pmnEgjjGgAe1dTRmU61vRtXBMLiTu9CYudG1An3dh6TCf5AWoqq8Jbumeq4iDGjo2cchxmhcdq",
  "key11": "3WRyURaQ3jNW4fVx8xgaFsYR8J2C31XuVZnJcQpzCEjqW15K6jECYRbGZnp7CoRq3jbve4Hww75e5QFFiiVW7iBr",
  "key12": "3RdNY7pSWoKq8ypcSkQAYCcxip81tgFJy75ePHfMZP1eB6aiQiZZJNNdpYbFQR7uNTAjQbsF43p8TKMZzACfaQhK",
  "key13": "62E892T24mdiaogA5bHsBGi93b4uzLLRAJaEaqriqT5HP28YfWBb34qKfejXAjoDvC2MtLmfMLK5MfRo1GbCbo8w",
  "key14": "3yF32r6b7H1sAwjEPnsHhR4EJggLcpWm2TwuftGD7y4YnqHjhNxsaMCGruYJHPei7cN3R4xezsTbAtxdsUPz5QBt",
  "key15": "TA1eXgPCBHgv1v98gdWBPwqHABGZbcksgnHyuS9fWxMRo2TGYUw9AGDPKkMtKWX19C2bE2jtHYkUjEaP5VouQyf",
  "key16": "5VmsjNTrwHJBc1kF2iM5XZCx7KBkVGtRMzDEoBtkfuVmNY4Kk8vbKEDkfpfkzjo5Xztaj9Twb57cTuojUzYUSAMy",
  "key17": "7mozXwXBuwyNrffqmHKWZpEgawSFCx5VLo3av1JcHtXZPUqKu4FT3yGStE4jC9A9DcB2ooWp3QuHXpJsvW4DntF",
  "key18": "5g1MSeFoifosfUSFXq7X2DCkwYECuug1xFYg4FSX1snN9B25PfyLrbk556n5geMsJ6HY6t3Fw6TKoeJr2rXq9kzn",
  "key19": "4nCSQnPEUnvRngHZ8B5w5UfwKC1oyUorrLvfjnM6cRb1WdrTCPQ5xv85DjV1fyWBDpFofvWsGqwH5Q2wx3cbFzP1",
  "key20": "4cYfiMG3JRjbt83QHpKRSqq1vg2LygDNUSKPgpyd6ZXupWTN3Uv872FNBauppzPrv23ua1VsNJuH5aHy7ZX2DT9g",
  "key21": "58z3EK58YQG43wbyQ3Zf3EB7HTR3T1SnCNfm6JDKnDNvSEjPbZtNm9Rba4MepsLeCDqjA8XbWa7qxpUQLcZBn5WW",
  "key22": "QZUA7WWdq1Xacxguq9gypqFaxsKRtENVSfF3LmTNBrfMbywugzNnKjD9brcJNRXANERg9McveCCMW5zdtSmmPgF",
  "key23": "24my5q5c9ybvpRu2KRUqR9CDQpETAkLnn2nCJLUaT5wMLRzQQBGDtjvoKQzChWzaWBSiSNzRGkXdXQda9HpfrkYi",
  "key24": "4GmaAgpWmNnzPuSE6mLKYPoFqKTYNgoiNf9J81PLntbUfhsVKgyPaNT5b6D2EiCAKPj5VccfMDSzu285wJ2ESn3M",
  "key25": "LM6tyLtY5bfQmudL9BwqmxP2Y67kcvtCJVovZPSXhmxU42WY2EAuTWLpoJzcgLDHGycXrHEnpA8DoWypG5Z8PD8",
  "key26": "4UWGE1FKeAQeEnzQFyERbvoHo2QqtvNhJooC4uRGjxW8ceACKAkk28RcRZSLffnyvepkY5QgVFTBDM8PqGbhTDH1",
  "key27": "5ciN47tYq7pNfvZ3vkdWSUuAW2d9sriS8EkCCYPs6gYKTnNUFHcSWMFmwVsaJNPhzUprED9VdSvNfrmLNeRD3NyT",
  "key28": "49DJESf5hQftQzUzTR9YaT918KcWvtWJepwJkBqZCaMWWVBQ9vz2VLGVk3VnU5x3icVeX7E4F2sk1Wa9AUmRJmHk",
  "key29": "5D2metMcy6bmDJyWujcznkrWdeVMsq3e9ERLLsNz8t9a2n5LTCw2adrGUJCh3zWXUC8Jbv34XQVVT3xKyVpRWXHv",
  "key30": "2nHL8ASA76MUJ9zQJ9aCtXWeSZ68qk8WzAUc2NQ4iaQqdozjBjEtMjoourj4vUUH17ZBYERh5xmRfo6ACfPmKzQn",
  "key31": "3MgxxmBYkmPD6yJonNsAPsGHcHUyr9bUpfGcjWAZLacBtgJ6Sbob57bzimbD99w5XK8oBTXgMnqCFZzkKA9D9s4Z",
  "key32": "59twpTRgBwhiaSDXNwtgD5Cv4v6AdT4SVEfmRYoWv289YpNrNqQY2Xax2ezuE2AYA5h1FZoR9bwKbURTBoUgwU8h",
  "key33": "5MFZm7VA2jM4oHwp1vgQG4THLbykJVV6d4g27tRYZrFfvF6twBCeRHx9AeUP3ohvDagpLtDpKPeNo4ewov2DgvK6",
  "key34": "4XcuWQAfndUcifNKYQaLd9igqvamvcLKF8r47q48HCM1KoijWQWgZX3b63mjdim2GL2ATQGn2V61BY241zW1nidR",
  "key35": "35WfK5UFVT7foGET1e19UXFyoNeWRUhEkaKxd47GKjCfNGnfuVxMVSeTrks5SyCtRyEk9DwGQRYi79Rzpnk96pU6",
  "key36": "3dfFLmFAxszK7uTsRN7BfbTQ4grkFFApPBhqnxt3ooAP41v375pBjzVf6Rbej6asRjU74d8o4TySH8na6qPkXMuG"
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
