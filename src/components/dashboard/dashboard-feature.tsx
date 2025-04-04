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
    "5qvEvFqTMPLBEZiidv5cwc9ySdFiVMzsH2PGXAfZKBakMx2NMhmDjcp9Uce7NNJZ1Gw12AqtWaYQp8VvyGoBbgWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KUSQFtaiQmcULq88KPv48psruWsNwwQLXZq1YmPN2LnMYNiujtV1nBYwDrX7Y577SyvLcr6bXRtHXRtRzeNpcrg",
  "key1": "2A8Szq9SJs3DmocKCSYXR7qCymjg11xSLsAiQBb5LuFgRrDPxA6teFqsgcCoirMr9ehUPq2yxMb5UmY3bRLnq9VR",
  "key2": "5nyun4YepFMnP43waHkefHKDSyc5FkwP1dNXinBDySs2Bqb3P6npGrmsY15VLk4NTCdX2VxNsUQbTPnU6nJw8jYP",
  "key3": "2xQYaNciGgBPR6rb3CWan9B9VdnmecKjwmj4kEdKYEjW8qFWNXwYg1ypZeKtzfBgL45mSexAaBjTwz8QAVMmZ241",
  "key4": "4kZSxwPwVtKPFzWPyi7ivk1pY1Qpq5Sr6APym3LHgtjYxeeJp4kqAYYVzP3JzARfVjUc8uUaH9PNjeX4gbmVTkJH",
  "key5": "3DTDUj27uhatcE1s6QFMfs6uWmYVjd3Y1Cg3aBAJzA42e6AgtiWzutZ3mv2Rz2NtAZKzX4bYudEP3m111MXCSjqi",
  "key6": "2eNgzJ85FGoy7W8JUzDr7rU5ViAu48NMJHLvTRTxoukTi3AzHmjgr2fcWsfERQV8wvveTZcbmhjpBYUjk6iVQvxo",
  "key7": "xRTdxGBFNBen4KdTCKcCAeEH7EUUSsMWXjh5q8SksYVqzdYwMBNxvM2mNhj5GjB7YbTHprHhaZSgxcdpBSRd5Tp",
  "key8": "66YpxBuxvorjah39teVxMHZ6EwwtWbVxaPrvCUncBgcLBXaoM1BWe7B3e7BtZJAgwukFUdED75uGfgACWZAKW8yX",
  "key9": "62PoiLdRwVCLYDV8GPy2NREoC5zESPCDXBPZTnurYY1xojYbbRdcEcY8i4QwmwBz8MMsFP6SNEPHWpbGo6jh28wB",
  "key10": "5PxWn8naRduMrF4tzfPKJboQqXke2imk3Z5ZXMN2zhYSJB893EdZFfwmkyxVsvip2pbyJFLZzF2ajwqsg8mL5BrE",
  "key11": "2YUWQMj4qAnzB5WuRkFVxkuhNUMvukXAL4AP18H23uR7GM964ohEtKVnYsN6wnziVvQ2PKvWwbM7X6VQWB4Eapmy",
  "key12": "62zjcLB6djAGmWTBjHtfPLEZT1ihSijTNg92X6U8MxHyu6rm31CJtFQP16LiYs9hrJbqwDGRyvRjYZN82RXtJS6B",
  "key13": "48964nLZnqceJzUo9mabkpx2Aojk5ZaWHZQATR87cmkSGZZyxAQTdZzPMS38dqBqhNkkTq8ZcwYYX6BqekXJV41",
  "key14": "4Tix46AZdcKdEC6XP6RrkBnLgk1PV11SUGRTivt845ivhpCY5bkbJPT5cKGgi9jPd3FbmJ2WWADTa8FYLt7xQSW3",
  "key15": "3upPnAzyTvWnfNsqnwgRHf5wUAB6NCgsrQk5WF1XiW5AptazTGp5W8EbdAxu5gmAqwV57KtKRZfyxJVst2gyXesC",
  "key16": "5J5kTCVUs5M1tyEQzoJz8hWKwNDzMC3Ay3VBRZAeLbpPXPeNQMKG2gC5XNZXdnpZqXt3XdYUtJMY8poz68AUWwnt",
  "key17": "2rUg1W4CTLANUAZLhgCYpmJo4UNoia6rPKDWrNsWwy42yHwFAoj8b3RWEwL5aJCSXfbYcBtjdwfiKqtD9DdAdDVC",
  "key18": "3VWGBTKgXai9Spo6JTFSwAqV5KuVKPE8wa8AZuhfYa4ZskhWUqf5SxUKCMkVmnuaB5VjmE353z6FqsHeKmfpZMSA",
  "key19": "4nx9iqJGPwv2afMpW2PT3JTHyNdGnCNV4jQRUnCTNFN5jV1dSBz8rDREBJHMZFam4iSzKKkBfXyHrbquvy25AwVm",
  "key20": "4ktniJdarnmDx5SdUgCjCJ2CY1iXY7hjAyz8GvXNv3Xmh3wtf7DcPwxjLE9yeZQiye2DpnnNRXhosGfEv2JCeLNC",
  "key21": "3WLX9ZLpP5aaM79Bn5V1gE1MAE9GQjbgU9f8rdjw5TUKyRSqVLmNHRnaJYu7r9EEJSoXwnUaWV7hvjKwP7bJbeah",
  "key22": "aDsJbXo8K6npAJ3AAVdR4Fxf18eoJpj1QuBC1MVzC6hAz41BE1N88GPeK2pCEnDXR3BKgXSP3yBnobbLuCkCwmj",
  "key23": "53dyEBNqapb2JbVUoMBFvU9VuoEsAXCp3m5qnyXUQQbGX4MtyDty4CytusmQsi1PGXue6PQAEqTQdUHPZF9LTiJ4",
  "key24": "4vibtGXXruY3eHaRzbj2sHicJUyy1RkmHWA2dbAFPGK6njXgXbQk28kyXKHFxFixexzEcE2Pq3CMNBbzknkfRW55",
  "key25": "5rymSGVcekCeXRKBFZn9UCFNM3etYchvFgPTJiZi2RkMPaX3iJPBC2gjP1pFwCRUNaHpvmo2eRhbzaqEcfxbd1mL",
  "key26": "59VxpiuvxmvV3ofGBGmEZbhvjpXax6Nf4cbdrxStbKNaL3HQLyP5fmYEECMVMJqZJXc3yJyfchZQURgKLyUGJdsT",
  "key27": "4hjtBqE1ijFHv1jBoXHxawhNMdAutP7QdgqoscHQUQKeAXin6F8Mc4WvNt52a57QmcEj8P6bwR9fGLTHbKMJMcWQ",
  "key28": "4mzwMb3hQJbcxdN74D6GbdV22fxJTyfnqXRBV9ihsrZ6zAmjjjnNv2hXccWN5H29oEBCgUKG9xr3MucAnNgqx77J",
  "key29": "3oWBcLAHHERarabB9SLTdoqtMLve169N4s6dgNjwjThHYnVThKWntFwyqqCq57NqEQZCcXWjCApTwdBDbH9WWziR",
  "key30": "fZSfA3Hd6YWsam1rBzG3icHG7aCnwr2LRJ7BxeccneDQno2F22PbrdqzPajBPEqmiwD2pHx6nzXm3iKojfhsnt4",
  "key31": "2bnqoVEQAUEefyv9EiGJxdhRe84BHq1XRASinFNdxQTRa2e9xvq9LqiRD6C6DiYN6MLe7HGrGPTMQLLqjz3ZbPsG",
  "key32": "45u99bGajtg53MFCpL8kSUTbNRTEPFToKCk1sTfxDF1z6QAHKF3DPhdU5Y4WZnwToxccZGrCpNJEx9VP5ErDmtf5"
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
