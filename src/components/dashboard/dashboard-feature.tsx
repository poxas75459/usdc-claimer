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
    "it38SXaWamWwXZ5NeDnG6qrkLj7qwZTZmQvWQrdhZ6Z5QvMcHNA2W5uLvopuYoFGmJVsBGuPFHm8rubeykp3Zyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vmSQ6Dbr3dEgHAeaDzoP1Fj3evCGiUdK1dhow3XB38qNcTWrq4Khe9HsVpkKMd6uqQQVoz66LEYwEkjAhxGFdu",
  "key1": "azqBw3uAxWiPcjeWvjTk3fVHGD83MuWgoGTByEmfDwaXpu7ST1dGWHqtn5YBJfXNCzUfeRhjVc3tp7KJdZaPxU4",
  "key2": "kXLBZdJbrcJop8HUfMXs4A3sbfxg3K57VZsYXf33tGwBDpKs1qEowTHjhw1uorDTV16Fnk1M52WA6RqhCfzWJS9",
  "key3": "4vbcKyVCcu7w6qwevfBsWdvijsTeuS79LvFjQpnAm59ogseeoRAh8WSrdziW5buiZR5DGrVF9W3jTt3DPg2W7Xvk",
  "key4": "2BEzxPddyrECdo274zQgnMuZyCofVTN3z7EZhKFV5Yc4U5KR5LbuuQ3F1jKtNanho1RxGUebxCZmeiMckv7M57j7",
  "key5": "3vwK1k34UMzNyKWRGv6VYNmxKAY6CmTnAZ8GjCcSAGktrDjQa52qzRmEymNdWSwMAbCg3pBWSmfdLwREkU8mtvEW",
  "key6": "4B2AMLK55Apvegi2x9aQSxgU9spqgimyzeMuUqr5vHnMfZPnV7FaCzk2Fft16Nv5xXwYEqeqEZrSt7pyuL1j4Eu6",
  "key7": "m2AgowtMq798LnrptyFU3L1grkUt9HCqxgbcneRK5aSDkpG82qdHc8KqXyLtMb3SQSrm1YKAQnNfFh5WLY4MwfE",
  "key8": "36s9rU5tFqzmykjsuQjGpVCt68NayR4UCLaqy29rKXULjZySuCunXwvicF5znzPmF4GV216zbYCoy3MazeKhNAQb",
  "key9": "38NadD6S3fAd8hzLWS2JTkKMZtgw9BCCq9woDcUSsWdbMXAyn9wUSn3onCWrbns1do5gfLpTo1MY5MP81jhdJhQD",
  "key10": "5k7sgzRwtXATRcWenhbk4gVXbn9AXcav3iwzHWjsbENP7omsjDcHFWfL3s1Vu6WUwULnoxMbKpKCwtRogAY5m4PF",
  "key11": "2abDFtoi6foVoJXJiD8ZEzymoDyF668ffSunYoG4yTWB6qzFriMdsKcSK8x286Fyy8iCFihHHjudh9WBKLpB9xaD",
  "key12": "5mXtSBru4Zdt93cyKpLaEw2iRc4QvtyTpsYwFscyoJj3G4qriMWM2xWhA89nniuQZSGnuyJi2jG1zLDRkTGfjYko",
  "key13": "SoFN7L78bjEPGmKDPHa71MQK1aD3jSUGjB3QRQJzaUCMpkNsreFraXSTFT2kNCYWpWZsUzEYyqJN3p1Q5NGvniN",
  "key14": "Rd3ZNHtZyqxwZDkARUADLbL337KasUWuYxNNY5YyhBnFRkX6e8ZyAQNoG6sLBu2RYngDAJz3C3VthWKKVB6qcuV",
  "key15": "eWaSmFEqD1M393tuP3Wy6k9gYdRtovzTGn4ckj7fFoxVJ7WEaneBD5yuPHdBWWLswPnWWj1zTjPSn7BgNoZ4wTD",
  "key16": "5AeL9cHoohPS172mSsVpQQqqMxqs4qsvNjUethc1ruZHwtou2FqkpsAxkB3jQikWtTvgMjfvabaBqMW3fWeTomLU",
  "key17": "oJpiwiHT7Zo7Tdvgp1zVkiCa3qUTNGaB3ckJXwYARjdYpBt7jpieM2r5cN1jEDyZ8HW3fbd3LF7a5mWCsbxSiiS",
  "key18": "4yzFaRqYekexedy7MYf9poqQUp21kWaWkiKvkCFs7MYrs4L9ZhvwWpanDL964y3LoaqLyB97TZsX6wj5WX1S9rhE",
  "key19": "4cCdeQWnFTBuJJXWv8N9S1nWByy5a1rsHmM5uLjrzdN2RLb777uh36Qkw9LXywrJ8QbzTAzutpjY8EidQVfLGMbL",
  "key20": "44qwhngpxakrfS4NfJz9tMCjgxfn8hpm3tL6ZdWjz3oqGNi4WZdBGmsSgvSvV77Xv499UCQYZJpZ9ZvTa7Maoadr",
  "key21": "32SzbN4B37dnCtQzH158mjjSdUh2vRuycyweKjVLWafTBTMopK77hojce15UJZmyTvsULP5MbkYDdWP6iKi1Mzra",
  "key22": "3HscqkBWQoKYLKtmBfcrCE78jdC91rktksRfnbpXvArURFJMtBPXg7J3NHQtk7h7AvMczDivvrLZDe2JN8Z3vhBS",
  "key23": "5jzVYZvKGddBHrS98qZfA1oK9viYziyvxKJjskmw48cvMkzghoSjS6H6GZ6NcmKHC2Wa4mgJjeE4Me3MqgvLShwD",
  "key24": "2cHd4M4d9aBips6rCisokptAH8YUBhms11cbpfgwm9pb4M6EBDLAAmywt3nhoWtnpRweZ4U2mzvkza3vgjEeXSct",
  "key25": "2f5TPXW1Hh2wmXwVcHBNU2De3so7X3V3cxDAKvLZayrPZ7rzzY4Ws5fvCHiJxxe7z4PePwvuYxRiRgkxNpxXmZT1",
  "key26": "5fwMEw7S2i4ACjFmBjU6dBcynFzUbATDmE59KJhfEjTvqdvuMd4UQ6AjCACCo8u7QXKsuUsB7izKBVqtNtfdQNYT",
  "key27": "3Qzu82TB2NagEaX8EjB1UbAPB6yXwmfiVN2hLZvhsn1g6KJ9hqep9GqWpT9U4kgXvBELC9QTqTC8qYfWhphCzBgL",
  "key28": "2DebaFSPHcDovh4RmHmskskzfsCtA7ATpiCqGDRyYLBfTLGYGWN94vZzftkv4Si4PADDXwVEB511MAGTqpNraTCX",
  "key29": "s3Um9AknQE6xgriP5dhYNzP9ZFmLnWtiRwSXJgW3BLGxtebtG9i3a7AQArxDngW3FWCX27CcT8vgwE5Uan8fVfV",
  "key30": "5FVP2fxLtikDG3EmcfjYiBcreMqq6LHEhGVx5u22XtAmpeE4GDnurMxGSF4it4SBWCcXbJEzWy83dCnBQostQ3Bm",
  "key31": "4VCeoiPfPkT74swXChJkrpjCdxmam3RMVtQ7MShS1UKjVcKBG5k5dYEgToRwgasG5nMeoEs1w9bU8UpV42sBdEDU",
  "key32": "2dRsbQJtz813w9orzUvSFT77R6xqyRvKxxgspGv14mFm51u3VLddnmKBrTp9frD8HPkPSWhVJc5t2Ld8FbYmQaj9",
  "key33": "2UHowD8mhsiaf9xKwUkbHTVA36XnBt2yKdGwXibdCwF6cZa6RkkFjmjMjpUTYPGyZiei7Buodja6FfwXpB1s56P",
  "key34": "36aYq6TodY5JDLrt5Aa1nggjofCoU9YkKVMuv6cWcgn4jjpBYELubkztTAEoEVhcgPr1fZkojXLjGvS8Z1UbFLRp",
  "key35": "551AWQTNi3HJV26p8Vj6iwQmyg8AGzfGLHsRcycP8DovrB2GZHELDpf3eWo5Y9JALw3D4vJ31bsjXFfRFC2EjcnK",
  "key36": "3dUPgSstetQtrg3KkjV1od3TMWY36PwyGNahEh8X5aoYWiafzWPmTDjYjSkgUguY27j5BLMcXgH4BaASeE1BMaG4"
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
