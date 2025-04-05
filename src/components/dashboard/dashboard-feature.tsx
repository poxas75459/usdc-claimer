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
    "3WnG15ErLuTLsToTg7swD8LLRgizfN9PtmkYGN5Yv9mNyydo6cH7DSGGcHwWSALtD5rhMcoV5CQrgRxA5i4FdJth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNPZdQqiZunh3UTUk5E6Qm45cHLtvYDGHL25j59WDYR1R6u4w3wLLUo85x3ZM5g8yAgGvsopyc7SgtdbnDFMnPm",
  "key1": "vPN9L8pFGH3VoCkG6VBBw9WAjXBanzcz8c4iWFq2egmYSdUNcUKraF97G2MwgrSrCyEw3WMfuTXNWW7e57SjKYH",
  "key2": "shXvh3R1BU4RQQkwj7w1ioJvNKYYdJuBzC2pbu4rBGmi7RBjSCcBYQBo1GpCPwTLWDgGvrKPFE4x967JcSLvWYz",
  "key3": "4cRkAczgJKwwxWY9BtziiddvA3WkNFPFsZtbUmNP3VW3LHE3E5DvNrPjPWW5n6LDdjs6ApkBdt2xfmm5jV7S3iZz",
  "key4": "5ULAEkxKyGYz43fCh2F116Menr8PDnERi9FeiDdyKkPMXgAqC2khygbE3GR42Cx9WVSgoJBGmC2gqYznm8nRAPV2",
  "key5": "2jayckh3AsvtSZ4ArnThJeUp1dSjYc3UWrFxda3dq4xqnTtZ9znLpDX85RG4PydMofUBmD3XEeg7UfGArVMDPLru",
  "key6": "3U2c7LE4MXNZGLFYDF9bi55ko3nbAz9B6mET2cg3LzwgQPsSyVQ4Prt9han8nWw6DT9B9epkkjmBW6c8zPWJP55m",
  "key7": "4ubvKjJYjRsawzeZ6vthhVsticyNdZQMEkZQNvDGynCKet5WxExQrYzwpxf1TuBYc7QmwtqYDYS1mNASanN6oCS4",
  "key8": "5z6kQ8K4o5RnasvDduSf4Z9WbvPZpPfHj5PdKrz84QW67SAC7HeRY4j9chqhxsWPBqaqYpmJsxKPXt5bAdkjjMoR",
  "key9": "4HFU3MenPVS5BP6kBLSWEyV4tXqq6TfRz6WNnDgq4jbkDA6R1qAUFin1nvgY9ZL2uaKbREjdvRpCKuq2FPNja24z",
  "key10": "4x1NCSoW1jA8UNST6L6XqN6xG1kn7D35u2NE3LJHU5UuxXMZzsQC23hD8PZ8bF6h2DBLcYMQhMMdji6vZnm1BtoP",
  "key11": "32oZgE2d3UbXmLi3KWLNGVx8zx7fXRA8gjX5s4pSHsPukuoRRvhY3ij7ucjLraYanXQ6baKPDYgzp2QfCtELELHC",
  "key12": "2Hm2pb6EDnNNDuwfSHX4AY3iKya8ZuLFDpyaUxWbJbCzTK82XPcC7d2W7g3roJZfVCDgQ5Xn4HraFiK71ZqzQ9G",
  "key13": "2bnTr5iLySbSqmFrCtSd1KEy3MQ99e2dvKM9f6eVtk3jiWrrYnzAH7eyPezppaBiXLDXjgAWGf7wJ9k9X8aqUbVf",
  "key14": "4wU6vmabMUjSYoxf2rWM3zNJ5v7SB7LFJSV854Eqtfu8CxWECY5ffSTN9CMtZBwGgo3WTvsx1LCxknPADdkJuB6G",
  "key15": "5CX8a1vJVs93KZGiT9gqmgEkYJc1UziwtZXrM5jjrqWinn1hxfCyyzCzBWrYHNNiQ2egGtF6T57sq3XafTFfcZKH",
  "key16": "4UEET3dHzJBCYKba4SRumFNUHgQdNTHto6z7LBJPctMuRFfw73x9tYgK3Lb7mP66VU5JaQHXhgK1o4W4BHkSs8Qd",
  "key17": "4qeSKXcdDm8FJvi8TctMfxDmc4dDm39uYDbhorUSarX8NESCRPYwJqgHDXFRBGQSDkyXR85j1G5noPXKkGz7wh5S",
  "key18": "5jGqXQ4gsrAiiGFurzPn6YdjigvF2oiwPAP18bsWxduH3jphdPF48mdakbh3ZmMgSNqJSzxGud7m3ytVKZ5WUqLZ",
  "key19": "JKkuhyuprbsmRGeLa8Ps8Cwgs9vjXMtMPk3QH4dwkVJYTHWKrpaCUpz8PYWegbu9iLkEW3BSHfaMYEpy7dCPyPk",
  "key20": "7hKDF9Na4MdJqC7D7qygKinBeAj7q5VC5SqdhcRxJmYxLQarvAVBt9p7oMq1HqLKzMHjg7rSfWj3TZjz97RmREM",
  "key21": "3a2nE74kahPyxxD5xcb9Ub577sVn6REUYqxSGguuvRBhExawWsg39MxteBDEbHR2c824vJWAbtU5c53UvkeB1x4T",
  "key22": "ZUXKrRppkrGDLWpxjMptK453gdiLS2MnTC85RgXwJ5hqYGVkN4vokQn1XnQsMVu1jtpdteRDJtRwDzSgsYs67A3",
  "key23": "2EhBBwEMzFX6fEZaTYiV6xJGEMiprPau1nJupAgFU4AhZzCEUUo7WpXiMPeZ9Vd1nU92Jz1T7njRvqAW3xJ16v78",
  "key24": "3DHabrbKA269hJqBky18ZQSWUxj7AivWkiGGp88dTfjXiK1QnUbPA9AQkBVFwpHHjnLP3cRGVvW9jUKnb5MJx6ex",
  "key25": "EAmF1RkKdJLTuhscTmCbLq8SVaXXTUU6kPsqVNJodLB92RGzujLSEdGnebW6ixfSHf1tT78r75Hnx5wVoXsiHqg",
  "key26": "2abF2FoxsMYNdDGhyhxjpu5hnp8Wd6bbK1rdhvq5vNtaUmYzzoNjEgyUvNKbFrfwrSNLtDTU8UKS92C2RC3Cfvm9",
  "key27": "GiDtgWQFCzzvpgttDyVHNsPatRSgUsB8W39y7aGNvhdkW3WDgRvSjn9DVFMWcsBhnGUxxzmSLNp5EiYF3xTw6yp",
  "key28": "TuZDQjRrvTMeDwTBpyA46z3TCFcvqJfbsdfzKTFkFepFcPFPqLzcT4H7u84G99Z5UFcDU2ui2JvYfWmw7h99Caf",
  "key29": "35gzvDmH99uM1LmbXyh8j7iFJD8WAvE9JJviQqUsbWkdPmzApxo6vKtJwqgQGDi6kBMgWKv2XXXtjkc9EWhspvHB",
  "key30": "5PX3EpXqzFaAbdfTbomQwDP2myj9yXZA5sUssADG87yRge1bGkz3ENYUAZTrtWQhhJ4SExyeFcWazN2emHELEdzN",
  "key31": "3ZrDjXadHSRhxbfkwnUo4CHhZRvJDcFq6cfjtBiibvvebnmoTco69RixZVnhbvyttdHBwp2JE95M2YanhbdwtVPr",
  "key32": "5xb84AJ3HezgGya7HXJ9hEgMMk4tq6bL8HUCztFbVaSeb4RRmmHp1bZZJgUBSzEvQ6dDUBpXogGZ8cm6iLMkvqqg",
  "key33": "3cp3YUxocdeGETtHE2QYQi4dhngoQyBVkP6CYrNp8NEGGS2qMt5pbKcHmP5udY9MY3G4cRPVErENSkoFRhNmqshe"
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
