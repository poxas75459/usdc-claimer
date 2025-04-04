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
    "upFGwViqoBrVTXaQyzpP3d93m9r1iRfpcTsWGWrFCVPd11PaMB514gJ6x1UnXgukVzvg6aapZeChF9jLueMciRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33i1Dv83T8vLuQriWc1dPHkni4FvUaJNGvCcX3b7UUfRZZqGTnBzgamh8YP2vWYGvfPdKci1pbW8aNeUTqW9wVJb",
  "key1": "2kTkoeu1AESM94j4tzMA39sFth3SGTw4DdkFTM5PgFnvLaGAur4t23ayhq1yesv1ZBcSzw93Zm6BwB2jFP4asPFT",
  "key2": "MrahTKLyxjvKWBgSR4EWxTAP3K2u6zBA8EaXtbkxq9zK9Z6L6NmwFGiRJEGStAtt8hSg6CbRzXYYJY8rH25yqYs",
  "key3": "3Z4XAEFqEmPYeJiQNkshXwm1UUiPWSbwoTHfUtPuxM2d1i56kchZP7xgJDxrkxaCc9YEvnGQWKuHxUNNQfB5xee1",
  "key4": "d2ousMbFFmk6AyjcLaLiS7w2e4sDEwmawe3BWgzEd8XDxLA468DfCohsf2xpu99NTaw7vQtcNf8rooSsE9PYhbv",
  "key5": "prf1w4vhzDCvjKayBnFTSQK9gjYZfNmE65GBSvEvfBEUfC4GBUHnxnJjeeQvGzk59V9eNpNCmU2kHzEUTdJsKM8",
  "key6": "2gbZ4Nt3QyWYANFYsgJpZkA9rS6iLe2xLpPCTwfw8ht9xQ6BekUabyizAB9xiGVCn5mmeaeBL8cb6ZB5wFrfkCWg",
  "key7": "3F3gw4qzP8Jq7r3tqM99JK5B2Ki3UYUz7Bz1SQEQmLZJC9AnarKxdtH2HFcNrj2rtJnmmndCxpQHVWJ2ZuFvYtCx",
  "key8": "41GqGd8kRQ6HFT1YQqhoMcYfoi48QX6ggujsGuSNd9HonixUEP3eFwE8VZg1DtEGDfEZC1bej7xbF2kjRGdMjaXL",
  "key9": "dmsVJtt9CykS4fC4jXU4c7DctojCCDdLqcoRYCxq9VNQ7Qi8tGJsbeVxzitEWQChrr14X7NLDe3gtcw5ecyH1qj",
  "key10": "pFvoayHCsViS3ymeCRQHqrGXmiHo1rwmfF7THhcYiRBBffjDuLGm28rxxBsiDKX47w6UMy6km22S5Dscyxm7EkB",
  "key11": "5Cc9mNj27947ozgH56cRMX1tQrn6Q7VEcqkckmABUVyafGxGA4cemYF571cBitjCH7WDD4aLjgdpX3eNhnasHoH",
  "key12": "XGJvoFiDLyhucUP6pJftySX4oVjqCKs8LwvWtAtkzVKYZ8ejhwJVbhKk5WbcVbS9UJQzGdp2nsP63pauxF13wey",
  "key13": "5qXkttbjTUyZJGvGuVTnujskhtX9dhc1E3Q4xqr21nmhrP5JhZhPQxd3jckM9LnJkKjvBrkmmtojcSrNQozbG8TA",
  "key14": "21U2iGH8sZTotPDs838ogCKzGYYFyA1oJSu96YztwypnYdmTU5UvGgEuVKV6iCV8e2KuohnAVyhAnbmMbmFvGtQ6",
  "key15": "47sspssCM8ypxh8R5VozUHcr7bkb95T7S46c2JmeaATaKmBBqFvwbr8XBAchn8RhyVM65ZM1EothJ17WD2Vm3tQ9",
  "key16": "2YSGLFU8G3yS4G3uC9gXYHL5mqyDWa4yut4QxdxiFUBu2LCw1WF5UxreTgbaxARvrkeQxNUAFoYcb9APgA1CGu7W",
  "key17": "5uszc1mhnRu93vw3sD51UQ7R78UnX3jhXrP5Knd2yxx5VaFPqDMei9wQbCKXQzbVCTQJKH4D1KmLmciPU1fnpyJW",
  "key18": "JSK2ksLYZRC99TJjhrYMiP6LxgKJ6AwfDfWgWrLfMBgr8cxiFsU6y6ATVkAGemP7zRMg3Z1uoPfMGpXm54rc8v2",
  "key19": "2crp84BV4Wu15eTyULP9bMduxRGrk94sWcNCpCaKiK4vjJfMb1w4QwNYWW9ismMYRxjgXUfjkpLuzSYj2Ard8jEZ",
  "key20": "45W2JTCzKQS5BbnaHNJoXKnpFtk5rPVPttkpjNeFLqZJ3aq8nn7o1qR3Vss3LRGBLBoUtXLzXuprcQ7SUA8DUppL",
  "key21": "VhTaSmE3JuuXemUnKBLzZP9FJTS9r8yru6ekwkXvhEAdTRDTJMvhVURNXn692y6Wa6nurP5K9c4114s7EYnku2c",
  "key22": "214mhQu2xYTfw9sTqY6BsjdoMk3wGZJRTJqzK3zhi9w27pAoNDQSDR27MHnGinA6Lyy8VyrButSoboqFbkpkPG96",
  "key23": "5e4YJGDEV7HmBYPSdCi3dkjCvSBzE1edh1atNpWeH7WgQtRtU8LfzWhFEVWTFyx79sgst8CZKY9mpnUuFgE5ZwRd",
  "key24": "5nn4iLNt7YQ9PKSuk3W1yx2DEQTwwHMMj4u31TYwvTY5sqTcf5zHXmRs3RKFQtKiJ2eiqtidX3Zh2pTTAYjyuKvj",
  "key25": "5XFUrrWkhC6JwjgoZPWdDi2V8Bfr2f8eubXLApSpPdHKCyRAE82vWkuRnWeczbj1Rs44oC8vVa1KcJFUyGQALr8Q",
  "key26": "2XcqCxxEG8wo6aASDYuo1wE29BTK5VKmyudw1rsM2LUvQR4UBqkWkXb91UyZNMHM76AgEaaNTdCpy4QcChHwMDjJ",
  "key27": "4wFtrb4z47fRuBRphK6HvqZ2QhzsDK8BnXeHZakWWnPq4gQFShud2yNDh9WLqwxrJDDFd4kqj2f6Ny3Qvst1Gxid",
  "key28": "N2PvVLvWH3NiQSLsRuUgTstmJeeAoyktEu3dVca2dd3DFvUhzkc3B1kqVqXo4irHdiUSzuvPF4daiXXfYgVHzXh",
  "key29": "4JU74e5K8GKHA5pwBxUXAtxSsyN98tbWUsqGc3ii5yVX3PgpSKcvGNfKKf2ox13dQgzfKi8ecfRSz1LnnULdpcPJ",
  "key30": "5nT2EBeiCnL55NMn1gZwn3LZdU8oHPcFPApT4QLi1Qei5JEoZ8452WcMbV84LRF3Ro7LuZW4cG3hTZiVjyct4afB",
  "key31": "CUtuPP5WiZymri4BzyaipPtBE8YF5kspNTsFbYX8FY2Z8xwS5jyU1kGy5GHrLPKtc5QzXCmjxVFvZU8Gn6WUpXN",
  "key32": "5T4CJiPhqGdjTaveMgxUkEzccRPBMUouYmi82AiP8prxT7VWhJJBCbqWppeuxLSeRTrKRHkkie9u7zu3FZMSArqq",
  "key33": "4UKsE894uqDwv1ApTxNtYkb3dJdL11GQ8g2JuP1ZuyFLyhmwiZKetyrVefAZEyfpqs3TKUJZufTvi52CofS6fzFE",
  "key34": "4Uk5QCr21BN4aa4QSF3oYFrwU3RdJNshNhEppByqTANhJ16RwGyzMDB5scC7U2zKk38ipfSMp92XpaE2Hr8Z763J",
  "key35": "3VuBXs8gGrWQe9npnYwSs61kBMRXcVqvb3nYQEieyekHKTUfaNzh3Mtgrv1JxpLAgDh4NFnpcGXSBMNBFY7dcxiD",
  "key36": "UTpPskQzQGqUcW9TP2JYCFF5H5oURk1VL45dBMTRqLrSLBSjkxw8FcdrMHRvBmcheHBEJBgPiiZiZh5rDk4B4Mx",
  "key37": "5jAPqojjRY9VLqfATtP3h9Dt75xbmWDELBctVZJDC7cY7EUZhDnqPVA66yh5GovTscjtkoLVh8obW73ViTaH3nEm",
  "key38": "3Uy8w4Z7NenSKp86z1jHemzWtrmnXs2TZa8gxddxxnN7RfHK1fkYKcnBC3qeVVTfiTjDrR8Z9s6jYa15GN7AZx1r",
  "key39": "3r1tP3KEsTNQb7XgX9q4uVcV7fUJLyxHnrbxbS75ToVLD9YJyJ5dZtc5JY4Y4ze6PQsBb3jdan2c4XeHw2UcjP2d",
  "key40": "ZWnQYnhgyHo92WDZEWPoCBNn1JcCEa9H7Rf7Vwg25imNcNCZN1PydUnQFfnreypM25ve4avxYbsLuRZoo12RJKb",
  "key41": "Qqbrk9tsN7Kfdw6R9qo7LHyu5woYQxu7KoHKCT76sE6UGHtXVuPdRwaEui2P5wBR1id9Wbo5WRuVeiuVpeaHirF",
  "key42": "2xyn8o9V5MbtdUx59kfABo5RtiaCM7MSpDmsVKXBvhubKQU5LrCzq6QV7dwzMcs7NXsMtr5siPDaFQPfQP91ncz6"
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
