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
    "4Ex1LoWUNASA6voPnkXkL1uiFeErowjkDajerUksqzB7iBtmnmGZkSobfGFLkAQ5WKryxGfPbcjRGF7Pz2ohav1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWeJcAXnYXuoNxAZmC8pqQdJakCrDQyo3t4LLS21pcPxTfaBgnPtpeNj39vjUhP97v9tVCUTT2BKNMyLhnR9Puf",
  "key1": "2EY9tFZjU4druzygJW6L5qvZrg1UmCX5z7AMGh2oi1H7MmjFqaG6rpo1DWKoZQvKwDTgLezhqTFQfUSfzeWaYFAB",
  "key2": "5npjvYazgpaPN5vNMmvhRRhqdRoiX3ovFykDihQNRTgzZy4z6mxKZ7QdKUySNGzCkLxGZLKtxRB6m5e3zq2nMHsQ",
  "key3": "4RX2QfeVj8AceACHaJgv7hvhsciLCxKRNT4Fbc5a9hTEaxBz9fqEFJAHn6SZ4mqvHK59dqpgfSA6W8gpqoRobAkE",
  "key4": "3prNgBRbf3c7Gd8bFUPazEaUHa6Pcuexdnznb1Yjyx2urFHaWdtPEFuA6xMN4UnmM5q58dJAKs3bYd1gviWZp6xo",
  "key5": "48LjA36nrZfgp4P7dmYC2baTZ4GuxrG5cw1TojtMtebY9sG4uU56fqGhtjncfRQXf3MXViS9TsUntJn8mVTrj33Y",
  "key6": "679Aqnh4UHD9qdWNyR1LqjwdZfJeCwR3mwcLpHAvzzSLnr9Ge8W5WaF7eTeNqqS3axMBfqxPi7JBHCNVmqKf8ANL",
  "key7": "5GU7f4HCXhFw98rExXovTEhdx2EMZPv5h2on44RZyBnQtbaboS3r7gxaLQyBQoc9KgfcuMLbbyAPJsEVGte2wh7j",
  "key8": "4a6XwyHScs3Cftf91K4v9RyrimzcjGqbcNY8pH7nYxaUNrMtU72AViSpvGJQghtBvF6j9DQ8mKrLTZPAewxUK3cv",
  "key9": "2PwNPQ2RTPNbh2JSrRbRLEwfituW7xjA9EzCWEn8AEH8UEMwBoAzVg1oYPYZopcjKuAGgbxZJW55WLWH6JUxe8c3",
  "key10": "2Gh43MtfJwMXKCFxnwg1sPBEtZxPvh33PifQ1T2CpGtSBhHxkkLCXtwzR5kzmAugBhD5YGrCuqvxAxPQPAQt7JZq",
  "key11": "9kX2zd9ogi7wzs22cSBjznBJLHc6Pwx5MbzUpneUBdZDw1JWPwDzdoDxrCRihEm9R5tcDq2qLQyvz8w927Zf7n3",
  "key12": "5svCkXGprg4AzBFtk4ihggPKjwrRYmcR1WWzPDmwpLk9BVyNCqv4SToXHRuMPA84Dh57Faej9m1jAKcT7xSR2TzP",
  "key13": "5wdXyXGDta7Bc2aihq6UbUoRmUNUzS5PLe5GLakHXvyxcSips1mkpge1cRPoMHGmVgV2AqBiZWUJgU81Crv5YtSd",
  "key14": "2rGWpfjZcw1icHFTNYkmpZyxY6wgZQty2oJScjjswD1dLQreHaK8b2Chmtugdup8tKoAyz97GNVE1H2QFvJ6WiRB",
  "key15": "7Eg3GgowDvJRcFyCadJVHTPndmaAEcX165LHtL2sC8yzPgeRfDefNzycAkq44zhziWYiW8LrS9AEd7NB13oS7Zk",
  "key16": "4cyRqrYdGj1FKpi5xQHGAUR28ezj1HauEmPnZriswcdAqSRxFYSVtZTpJkZToP2YVphwHKtYyJUd41UGGLEdQEsU",
  "key17": "2adLFPbDJszjoj1frWXiVWEwWVJtj7MSwC6BawbfoYF5JzPwsNfZcr7bF6BLbkgwbfrKSsBJ17MUrecr57v4XNxQ",
  "key18": "53b2pHtVqqWsdbnafWBrHko4KAET9SaiDW4MVm6DE3q85LzADiqxWbYWqkoMQY8xELjHzm5uA2iPEUSwi9VnK2fn",
  "key19": "2GAfUb5jSPk5g5z4Vw75AmkDHidSxYRxdfnLEA3VZEkyPU5CS3eLrBx1vqCuEUJi4Zu3h27xMoN6gqDxMeUKLVTS",
  "key20": "5xwRUSrjUfWACoadN434w66HxR8bxpUYvN5T21uk3E4eUBUcaWqjLdq1bunSgD8asEdBRv7BedpDdfFEv1YQD6Ja",
  "key21": "4YPC7h6WPeUjDTPpHNbTVBoBJMpfB8w1ACdtnfbX8gxeZm13Petj7sWj91PyaueNNWbY41HpjuEo2F25XFwg3ZwD",
  "key22": "55kVJyCr8rx3XYb8zz52q43ko9BR1fKzLbUFZ6LtvtBDh5rvYaNCWP23RBfdRp9Cv67yBYBfWEV4kQWep5Xs3iW6",
  "key23": "tDiKrGeSK7Lbf77Tjkyu9bAv6WQ4Dvd7DyVDvWcmXCKzpskYbshjc34GHPxhRtjsXKHUpNQ3cfEEXwCa6uzyE6H",
  "key24": "Yd7EUHsaxUH2cN6wDAeN4HaaxQwQN3YxMaa4xq5dvaD1PDtaynAxe3fQBypar1dYX2SqNPfqN1zVTeD8CBTAHZU",
  "key25": "57cNGSUDmzE1qL1pwh4PVULTYPgjYCM4yXwAE8b2cgN4d9C4Y7pSJtQra2ifcySwsCSc5ZuPgmSRnBTfspARCgtj",
  "key26": "3vdtb7oo8x2u1xastYW1KeMHqm3DtupLyTLdM1gxhCH329Bt3vhxa9NWpN6Qu7ySHvTxcajEhxDcHwBDZCGarBu",
  "key27": "UVqr2Mnc8mJ4KZnLkXUbuq2iCo7TdV2h3invmPEZvJ7sm7AajukHqpQakG88LpWq1XzA55Ct9L8Q3pd3nBQ83qV",
  "key28": "33WTkSRJBjrd5opWc5tGA5Ek6zEmi8CyYbYq4aZL2cmTM9R6mkX3E1jveLL1ZcCC9ejB4FqASn1A7e7fQMSDWL2v",
  "key29": "64wfRHaBe77MmCuT3BqaCvDwEienW2fycSWEoCaSo5FDAnJGXANnK5SYWsxRT32GxoPc1NpZ7wvhBcNq3CG2dEEe",
  "key30": "5vrWTDCm6Rr96WUvcRaQsk8djcbN1DUQPpAAYNwm5A9B2MqejHmccyi5uxE6B6C8DkTqvWkE6mDUnu4ELGSiXMNB",
  "key31": "4wdGiiHCdNmsnMTazUKWztQ3Beo7vkETEi8X37zJXkZmBFCHZUGoHRHmLLjdLdGVxZCKKHW4vtdPRdcnBywGS2y",
  "key32": "5jQicSx2SJB8xg1hrVU8WAaDhs4gD5BkRNnbCBc4HrAH5c8H6SeysBoVEJeKaJBU2ayi9mt2GFsG7yhJqA7vXMeF",
  "key33": "49FBcWJmdv4cZJB7R6UbPeh4HYydJkk7QCTfyuN6Nc57nqJPDVaFY1mYn6dLhNtAJCr343CEC2VJiyzUKs9HNx3C",
  "key34": "MvHXkiZ1ny3fRYJ9cm42CaA8SDzcENvrKYsfSGHrmV3j8BeD4EJaQgbRpn5haUR5XAHMSL4hvsUCgpYVuB7qVWP",
  "key35": "29RmaeELBvgoV2LfxQmhjmrdAm4ForkrKrKTdTaiTFhtHh1MNntP9PCiUtDeCe3aLxxZvA4NAShK2oGEWnQoHgHd"
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
