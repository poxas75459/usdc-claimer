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
    "4J4fsE2z2iQpjhgn3YzfJRVGzKovyVURj89978RRaBK7pdzLj3T3Gt6oCt77jajZppVyeYrwDx3pKDz3wSP34PmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJPoJf8Q7Lp2mdsgLbibv7ruKx1ebKFRNVJu58KSbxWdGQg3pLQn5gW3z46XattNjrSXvecns97MiSiqzt57VSM",
  "key1": "kto1BQMdTReFBcs2f8z4M9FLESNQCX1gKbCfn1CnJSKotKbGj1aHH3AUwjnoFu4ShuiVYQQrvHkS5ppHsejaNUP",
  "key2": "2FWbRsrfJbUQhCs4mzHKsQ6SAMaURL8yg3SQeDYfennCiLnvXN2NGQVbPM7ajjPLq7KrgQJgCCBN3dcRccTr38PS",
  "key3": "9h5jAJrCu8umvCa1Mjh6dgKNdouV5tV8itDAMYnvkeAGf2rm2HAxyM6Lie8XRCeVzqarvs2rj1Rf3wY9hwQVwFg",
  "key4": "5SerjdwEt3VTdFNUDDtSQBvjdrxbjZZHPdSF3izvPJZs6ucBZTisGxMgy79LXKAgX6jfFvpVSenLcYUcMzBW1SQv",
  "key5": "3F78Xm4Zzeat87jD5zrw9VxCHoZBpuczi4WYYxWAmvxVeDEqAvK3ujhkpBs9G7Z7eMH1E5QxqGRvSWWW6gb21R6M",
  "key6": "59bqxAQ4Dgaf6rRYDzicDfj4LLFxzh8ey4u68rgJyk6boUTt429DsuQHHj8z9WhKMEpWgUEiJ29Q2EpYzHyeoF8",
  "key7": "3mPX57itrPWosx861RtFf2C2VJ7BpPvz9hTnDhiAEYfyw6taa6Lf3D1fR6piQzt7Wts9GTY57wbZM6PP67NqQbrL",
  "key8": "286V7amtD1jfC3Lvs53vGpTRk95VcxysUKBN7ZKQfCquXSy1fxsLYSqi8h1Lc9Y6nGpc2WbGfmoTKadQJutcfoCH",
  "key9": "3vi2ggVmx8Gwcb9zyDwEvaccL674c3HCKjhMwn3WvxZ9M3fEFLfyDZbpBxtzmYzGwRpZ5MtMKK6AaxWuNmKcy9Ya",
  "key10": "47har99pL8XYw5NXCqTMANyGf2Tnn9S6LXgJ5MNW25GhhfA7koBBVmGhuvRHEPRfMbwUHqHECXx8XypLHMk7Xug8",
  "key11": "4juCiPjthxckp6NgQ8pZhj5oCVhbgikMtdUVKLJvNjpH7XZwHwUPV897g9Vg3juqRXswCCiWR33EETMCn91jNm35",
  "key12": "3Gr4kuzDiwVcGTU2JigiGzTB63YCoND6AqzeTPP7Lzumf23cvVHR1qAHkJCZiCunpcALSdFisbYiVjCCgBEfWLoG",
  "key13": "4qxNujNQ7NT5rWrewymTj5izL1WaT5NEtsLcdQvX94fsL4vPaN8UiJ4Wm8YWeYvVLxpeDbmXCEsuubmqZ8bsYGdd",
  "key14": "2E3mpVRk6G5AYLTM1tTSp2oV1yvzdVfLyrFwYkabvEF1tbN7J8iJSFcYTzMwAa4dAHVFM81MeAd8DtifNN5yLmZo",
  "key15": "4w52nbGqB1AiqAYtEcbxCQt2xFG59MQdXZXJP3axKYmzx7xsZhZL9vKXUjhBqbLa8UBexwXgwLgjosEzpgga7BvR",
  "key16": "276nbuDCNyMGLB8vLmYk5RhQcwYvQkU6pey5FFPmM2YYQx9SsdTyuVJaWNKtnKX14F3udf9KgavircaxJSjy9XMg",
  "key17": "4MgQbBiCxdATPkBgUMLJ3N4FQB9msa7Hp1ZPTNzsMGWurWjWK5eTT6vfokhYFbaCMrpqQ8vdgZL4vre8xGErae1D",
  "key18": "5mh2BhtNaGJtNB47fqsdr3bABX2RjvNgesFxjaHHSqntg2q34E3uDMH1DRnUVg5Eyc6zgpMLTFJiRPN9tBXDsQoQ",
  "key19": "5PZDtV1TFF4DHd7RXCvR5Z3HaVJNP6kXZMfG7psbaBYkyxdmLgNcnqndDz2EZ1qRxCGgPfmWFdow9W99FBAF34n3",
  "key20": "4Pczdkeae77sqCERuLvwuB1KZWMnyCKca8LsZBaSQqzMLPsvi1MjivdAhgxJETzuMEdUdCRgsSNUTZVz81yBzgPH",
  "key21": "52BiEBpcCVpTCGGUTcQqVtLkSpoeUUhfyFfSp9rc6BLqzCFpBW3ePJQ2zgMfHCGGsKesBJFriNHhURLWqnNadScx",
  "key22": "3XDuwUd3DCRQAnokkFaKpC3aJPxsUBYZHzweHS24cSdVzrvi3ss3QgNUScEWwYu6JegUUdxoUHEcGMES4WossWwi",
  "key23": "W72zkwNTe6qWzN2rLtqXCu9sf4TRxXWWQzJdtHdB19DAdWdUx3rn3PE4J9xbivf8ypLV5N9x5kJmVbyU9DDxbKQ",
  "key24": "3dB4896jK6CfE7NysiXuCFpZXjDbyFQD3TzicvvGzvVHEEYEVZye77HqEQcdWdkerNzr5kKS8dNzcpT7Y5mRXEDG",
  "key25": "2M1j6zTYLnx9PEKCf3iykp13NpkfkaxDb8dDUThqEWjZUg4y8HDmJ2cS3aMjjUMQSdJHuckZ3dtWbd1EEXSe6tSt",
  "key26": "2U7GmaABknfVGLB3Rbhe8oH19eijHTrY4RuRz2zvaDFxBt94WceAVDD3X5hZU5tLUjPs2o237ffq9jvLT5e52KNG",
  "key27": "5VUfjDFrfc6YzNYDurteHEpkuU1tGhda4od6BQZFZsR9eCMtCmrgUoWYgkifQa3CDsg4SetbsKX2iRwZTWMjG5oV",
  "key28": "5DSSw7xmNdQzQ4rAKh82VER11Cu3qMs3ZXVYmoni8gRwMjC6dyNnuLEmtYqehg1j2XmGhhkKqXkCQwx43SaG8CVf",
  "key29": "34teUajVpgBuy1YPXFfJA6YWdG4k9DBniCYcaBEaZEJ7PBo6DkWfFTdX6Whqi5ujNKtJUJXN6emF6h67zs1yrryk",
  "key30": "2pCDJXNuuBiULjqX3nJAKh32NZcXjoSp3KaPMdNdZ639oh1cCo4Y5NVuKNyFroo33EKGXu1zi486YU8HECifVhPZ",
  "key31": "8LYTPgY73ZgGqUp1pj65PTiG21WxHbbtqEv8CSDCXnKKofaKLGWy8nXUWhuDMz5vfe3JrrroJhYCeaUCikbWWPT",
  "key32": "2XCWFRFZn1b2gZy5hMFT6rmS5hQwwHTUzP4koP2YTcod1CFz8MkjDzG19AstdxJHfUP2QubNVViQgtaMNctCXC2m"
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
