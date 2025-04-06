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
    "5SrFanCX9ifZW5gN5G4EErDihqtCeze6an5cMHxTn4NrbQSbGmzmrTNXCo1wuCk11yTzBPzzRcJHmywFmAQHhaXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJ9t24DkCCFHcxhm2R4quPMFVELm5eAy2TLmxaCbmTDTh2znfHtrapCQM5rNgp54Wu7oRAGe6cK5qLV1qHinMuw",
  "key1": "BNcu2dBLenZNTkQWpntF1wz1cBqCZ4LUswRkbSdvQZ9tc3wTNGRv2mFSeRWMZBaD32yQvsWdkTnpQQGtuKCLRdT",
  "key2": "4xEMqwDqSsgjPZzAAAjLLDWmxLbpt5Zcmm9H8pYEunfhNen5sw4EzRcdsKfob86HqyKwuCj59gxxd6cfsZkjKuWu",
  "key3": "25HqALWnKGnnJKApf3kdzgdHsNc38jfh9hRZrcar3VAy4fxSrudZSwjsjNT84YtDhQ1RpcQhm9bc2wAtbSUyzbR1",
  "key4": "3gS8GixVU8ymWH7QBKUut92nNwqHXFqgA3PVKojHehwCvUdfDWciDLLtY31KWPNSsHYiroDLfcTmkSKvDatBhF66",
  "key5": "3t8cyoxgdqL7ueJ37gtLrKXdrHhZMPS5VSWSMj7gNwzQ3Vt1fnSoQQHA68TmDKQZ1NXHomTNYaa52MnkStrBrRCB",
  "key6": "35VWjoirnR9hZeUZukqFxBEhyMPcyewSFbK8zntmjtQ6yjdXj5iLo1gGjaPqMYdNVbpBL82xApWG4SJRKBPg82T4",
  "key7": "7CbJVHaHtCfbegoSEynLUeW1oCCexVbVezkjmayBn2tJVpqHjRMqThgN5cScNQgx2nGGTU3EP5fXR5fQ1xebiAM",
  "key8": "1vHftdQrdKqcbT6UGM9aZAvBdGFT71tYFKRJesa7bPPHfiJRvQf5HBzY53pGg5qEijkcbqUep3jQrQh6rLuncBT",
  "key9": "3r94Yi5bv2EMKL7BG7iLaqwrPWVerVt8GCEqTQFdsgL4vt29x3MVUawSvjS9dUAjQmzFxPAPfpfM8RkBKuk5hY96",
  "key10": "SUpNz26p5YvaNMkpXgcGwL4HkYQroEYeM6wEqML76difjw81WMy3NF4HVbKSMgTJNNqoMdoajsPjrRCPPjwKTt4",
  "key11": "4PrQGX6DqLTeo643h2xQKUrghEBTc5kipULEWTXr1x1bTKMHRoRkGuG4iUZVLuzWYK2zd4UF1Jwb2p4UPUm78kpq",
  "key12": "4vpGZSy9188sKwpExihAEm7LUEEdZd8C96kB8sQyv6c2Xmw9xxtdS8RAKfRkQqq73vtX325Wy75k4614KeVRBy1d",
  "key13": "vhrdXEQaMmCE2WKJD26izMwnSUjFvphjwFm7kQzvaLt4aDfuojHziKrCpnCBFwL4AHmZVuD1eKaGNzRp1djSZW3",
  "key14": "45Xs7hUr6rUYRqBWtePJhZJykZNM6vUc2nGS8LBCUJcSXa8Qs5uTYU3n32zbTQzQr5y1WGfTTjMG41anVrLTRRen",
  "key15": "4TgQFDje3PeF3zxSJvSnK4DuWKk1TY3bgB3sok4PyAhm1NkzeBS4FaQdn7eT8iuCFU31afnHCANrfFkcEvUNxUbJ",
  "key16": "3TQHhMafxtiSDJgxVHrZ14fLTY2eeA4n261huaoJxuhBskCrYUNU1ejWbaCpVbFgiGFdXwPrUpHXgDuTCCd55gtw",
  "key17": "3D8rkPYEtzUxN1pvvpDo6Rtyrf8QS3EpvKaQbUsbnTyadwXSzg9VLVDkFBckrVsUuGujJXruk7sNjaNEi9ysccSB",
  "key18": "bxSHh7Pzu5pWtdNjzms51bfdGFAuPnDf9V9q9a7PgEv14vLx2VZABxmFsbYX51YHSKdCTwhWSNvPgWXD8jtRyKX",
  "key19": "yPxh73S5dGqn1M3FhZiENy35QLih6AYorX3U8RkJWHKzBpaLHgD6jFZ2PhBX8CcAQ1Q5JMgL7FsjzqVxbnnxFvV",
  "key20": "3Jn3sGG8g1c8yd3utDShzW42DYPdZ5xczTS9hGqLtLT7dFh3LWFu9apZNsy3k2Gyonfem2KG8LJzs4rSiveJYRXy",
  "key21": "2UpRx2MckgHaabJYKa8KG9VTr3mJhVvqL6c7bbnsiD5SLAECt2TnQcnafbsGgH7hUrufPemao3udMENvsr9nqYnK",
  "key22": "54yaSi7fJsNaZyjfPQaYYXd46EAr2tnVvD1Hhm9DXBA9WDZXd3evkE5CQ3STqNJ51UFuKe4BYdtL49zZ9VYzXAid",
  "key23": "332mjfXvaG75XH57ohQXMQYsx9SxPZTc8KXUBHKQDXJaej1RXS4UwM4BUohNYqjn5AZvsbiAG7sNKbjyNbeJ1KRw",
  "key24": "TwaY9umTERvKU7D232UCeu5i12Fx5kGJ2CGFt7pKnEs7P8DntQCPbA9LW8SG16q5bHdv5LUg5fR5GhKVjftdHSN"
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
