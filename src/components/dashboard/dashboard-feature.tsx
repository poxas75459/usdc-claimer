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
    "He6GGtBieYaTvUZgu848JckRpdpQ4vSzkCFbSgu1JBddAsS2ns1MNPUMRK9Jp5cThDtCVQV2RF8Hckp13xd7YVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRjc1mwzYkUxKWfBtarZbXpUfMS9rPZX5wMxMSkC1nc5WE2etem6GiSVSxwTUGX7LKFa6rBxfUXebec8H7oQwWG",
  "key1": "mBZZ2uqfcHLBnttdbUVdkVQm1EYsfXUD7uJXvRpCKM61UTtcG9FhNctn7FdjkZpQX5pKKLRDwzkTVNqALdJqETd",
  "key2": "57A2wgdh4iNyEBE2Ta2upExLjuAzSyR3wQe5FJapi9YUEfmfxNoyJrsKtqTZu5Tjxh3GKANEjeq3scBVxsdCuAXW",
  "key3": "3yDDun3fFYC1kV249krt6ribozjMtrABQDYWjzXESdZ7xpeVUd6ZGrCLZeYsKZT2kZz3J2sALXApqWAUHJsGK2d9",
  "key4": "3CeaaPjuT1W642U6wtVjgPMwoh6wP8L7TorJjPDYXxqYDENH2RKydPXgoq5QMKifd9NqFnu95UeAYu52qqVBvY4L",
  "key5": "49DYRRsK61B5iDrwVgqVeWuLkMhCvBAaouc39LsBRozbN3x5gKABJH8QnMjnLLVvS1CAFS3k3g5pTWWb23BcJAgd",
  "key6": "6dZ7LZzx7526F1Viz9GZuF3bbRXQhQfGdWPSHGymjEbbncXGdrXqswVvPv2FnBv6M4gppCGQcMLg4BV31FvXkER",
  "key7": "2k8UZkF8TGtqtPWPaP5p4tujxZwgwFEXZ9WSUfnE35SkdsFkBXmEoLTS2PGsRgJjENxinLN94yetdriiS5HYFWUk",
  "key8": "4Zyj2CQHdJqAwHmWBzEforwm9Sv1EsRc3ujjkGKXeShKbgAqHQjhxSDgvxc2gtZC3SECBcC4P3oT6mBuAnDgn66b",
  "key9": "5YuwfgYeLvKJKioRnhGfEKfgR9HseAWzQSV4KiAscBSSGvX8JVpKcTVfuThJieojD7GYXmEWTKUxL7kGnWXmdBjo",
  "key10": "3rR3hSLC7QnyLwfTjJhW2aPdcHXYzrde93hnnZ9oSsLiwkwNoLdguCALP8BPa4iCqNfnitp142BAdnUMwEH9gDyw",
  "key11": "5Yid6xtDAhDmMPevQhA8F927rCyCKGtsUovQxerbdVWMuW29oQ34Qk1pi6t1fzH2CDgxWVEC2WkjAWkYmgT9sR27",
  "key12": "61WiJWwBp3VC16pgcLWW2yDAUysnLfhu8p6ANar2T9AbAEugjjrWb2AW3AHg5jtWfKDjSXQwB7otkLA64P4oeG49",
  "key13": "4i7T7jDRR3yPtJHYXVZVNcLGm6yC2JXngs8aA35ddibmDRYSZq5DAwYzxJDX3f8qrp6UskbPKqVUwUzNSmDKVcnN",
  "key14": "7r2eALLQd3MfEdAd4uJMqPnUHSgS6jEtkLrx29tH4AgWnjrp1BJSD8862MXvM93s6JtmMBGnj7keSaoS9JDBedQ",
  "key15": "5shDC2yV6pH7oDuphb3LcHr5m5h3cbN8nxzeVxuJ6aopAPH7kFZuJYsHd2UBJvd4wu6KNohRTJzyK7DD2sPv5xKt",
  "key16": "2osdBo67RMAqYr74qvk2xX1DAUPJJsJqdkxavxNteHrXDdh8A3QTpULwxGZsXvZAnzLurrWdnpzYaDs1HVLJTSA7",
  "key17": "2sdmRM1rB7Uw7BHGePXANHhWP7PrrFE8Jyorg1KBBLxCabRQpEEdwyrP4ymJ5bjMmDqLMfhc1p7owWvRBinEc2Ny",
  "key18": "37dDJa9U8regXRpoPihXcTy736C4ZGy58uDDh2HzsCfQndiPLku8hDvfn89JzC1QAqD4wZo3jtBg5WDe862VwCT6",
  "key19": "2SwedvPWzd3wdRBizzgR2T42Rw6cTdy6c9cCSZuGisTaf2Qu1HouAzaKU9byrfW1zHrFcYtBiW1X7XkYY4P1CD5o",
  "key20": "S5tj69w6oQiSAxukGpVnfTAPNGKNXkCHo4hWqhHrgYHNRUakKP6J1cFtE32Nn3XAxZBruH3ppFr1UsSxrHpqhNS",
  "key21": "4VefPeuU61yerkmuHLTCpR3i4BHmjU9q9wh9rsrHBWBSz5enfzjqLBvh5STCE9XvwTJasygNX671z296Eb7eut4T",
  "key22": "45Xbs5VxmbdGWM8ucrNgdp39eQPFEmTffDas38Ne2sk5z3WyfN3WatxAmgiuViLhBpKySxaVZkpHctu3rXSRnBrD",
  "key23": "5PGWCRX3pWJS9V2vEJAx31bC29JwiiKsmPq2jhsExztoJKxzjn2PrQX5J8mH6fmu3UC2GPzVxbobjN1Df2yrMGDM",
  "key24": "5eSSXdWNF5g8Ua9D4zd3FPRtFfXkd3cy9q6gUWndPKwsATx2k9ZJqhA71eiqVA5pCDsYbMYjoRTatntYxzAhrLJK",
  "key25": "3Wi6Gv8qigbvLz1BZ7e3RihYp1dHNYcBMCaPSF95oPHsyhs32SCYWSWMP2dBu7ub2BJhen8UFgnhfKP4ZLBrG9VB",
  "key26": "3BnPu8yuTTXfU1mEMTPNj1mW4oqmoqsHcnLChpapt5PRrEEYWyKJ74qpAQ1PE8ba5tsutyTB1nPVNfxWWMwnuoHm",
  "key27": "2rc7fHsZT1mfVsE2AyMLZPfFu99ee8wRRrcDv3XVUc6R6U2y5JJvzekFVP4XsLZpSZdicor82nUe1z7F5DtLeXYv",
  "key28": "gSRfY23dGuhna8UpS4cBXdhwJWCX5ctf6FK8xV9iuvGAXfg8KVTyGHw8Ep6jGpNvKLY1bXMVULrFbzZhFjPe3Y3"
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
