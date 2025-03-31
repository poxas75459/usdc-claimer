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
    "29Pdpz5ahGE7P8ZgbNExp8xpH4kW8jD2HjWfyT3tiD8RatM2Xyhifxsqgu2PXh3w91k7MXdg7UHnX38nDxG39LQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3PihprZdbX7nxEe6DxrtTzJCL4PUSxTemFaVqTzFMpW8guUxoGFYhjJxgTGXupV6zNjsMguXRc4oMHRevn6i25",
  "key1": "5seCj9Z9MiDad6j2qyv8ZrMmJiLHTjybJKGdepusNuVKgFci6t6mxeg8NeKXNMAqM9noEc6Np1Zftss3whV4d8kn",
  "key2": "2qnWSy9BsCz2dZgTv648eD5JogBkv6yin31cWHNtcrPotx8WbSXT6njrWaUfj6jVoLCHfHoNTb2oZt1zCApvg92e",
  "key3": "24ZNruzuhmS8rob2VEyUKv3VuZDKp4E2eESvkqnWqMkNnTWNmcPXa9Kry6w6ST4MjmLYLRevTGmtKo5mPFRpncSx",
  "key4": "5dGUxEaJB4ryFv5XQymSg2WcD6sBNYmBg8cg1ar4dMcbjCVvbZCf2gYn65xBSMqXVaNLghdqKsUDVFyehtLugFHT",
  "key5": "2Gaa37BAJ8BxJhuFzkmioNBngCHa3c2KhK5qBFhRoNPh1LFrnJMX1wncAVrYYnmhcyMuCTVz1FBoNf27uSa9iVNN",
  "key6": "3Q3dNgEn1ekdu4z1yxNguMR62cwQQi46jTot2C9oq4j9Jj9FCrfMfYRXejTcwGH2YqqMkQ5V7y3yqNmZgS1UWTfZ",
  "key7": "55zaagLPv7NoR1uaK9niiyTtDQ7MxyXwfHohDiJ5fnsT7scKQPHdsnHcbykJ3dCvcTXf4rMMjcUT66aRnp9BwSRz",
  "key8": "5qAKt1cVDTnx8a9dEo1ehVUGRfcKpBfKs2cCy3ZHyrQsrSbGqyfitHJoBJLXtoDbCo1nJ5kb6c2A2dLjWPozwrNG",
  "key9": "5Cs2HaRCWD5kAmH57GnTUvBTEbGjsnZ1L4YjRom72fb9Lc9XkRCRTFwmbkF6n36zBoZgTdUN6SYxXAb9F5hXJT7f",
  "key10": "4fQy2eBwxbVcgxyHAhG4wbkVTqg47c2RyzxBCDXc1pvHpwC6FHy2M2NJv9JaNkrr9uqH29H5pBuTVXBAyWr3XNEu",
  "key11": "2XiJ96H3PiRnJBA8spGqtCexnrWTxpMewEWbeYRoTztvZZaZooYJ3miyZM2GXdfogQghhtSQxw38ucw6DgFHPf2V",
  "key12": "5YDZixaVgDMtySvJpmw5oxi3zK6t3kFzyiASuYDRAy7mrrAwAhg1SWffvxtLXgvR65a5hxRSFBn97rKdkty1hvBi",
  "key13": "4by21SBWdaf7nAwcMqPcixbEiuK29SuBGiGgU5WBXYfF6rr3dMwxk1ioQQx3tA5NaVRdwSb4hfM7bMmRdhfU2j8o",
  "key14": "4gUyy5rBeBYJJTdT6mfe2urbC2iYkmXXrdSmfTcH7T2VyeKJtouQ9mNwv8KQPYjfm2KLQ3hQGLai7y2jYhTZtWAE",
  "key15": "52FauKjZyowKJ3ycipHRR9HzwnhBXtcpuvkLHU6NdkcTZ4spk3vzNF5LWVVuAyXXs6rWap4yRoL4rtLAZ1sPPcVf",
  "key16": "366b6NZzAXbjtu1jByhjLXLhGWt3LAewr4Kfv9MbekRE8bHDjDin4yvtaTxh4C5hDUsCYpv5y6fkxxknp4UFGcEY",
  "key17": "55Cr1VH2BWEXnP8ymoXUFUc3ywzSVc6rLXgoHSGR4ZXybxJmzaqKwEic4ZsfLb7PysV85PrmhRYV9xwsyQadnh5r",
  "key18": "67qTydgcGyQF8rsTDKptvaGnR7uA2uPWp8uphXZbzMyUJsox5CReQmviAG6TawyRAC64S13DNTLa6xzBkKDbs8Yd",
  "key19": "3tMgiwEuiGEfuX2YKbJpk1yRDmJCQFhcsqDyf9P2fqquKhL39FBrCroNV6YGtcCUQPPo9u6tCKqPGoCQR9a6vPND",
  "key20": "2BQ7R3LFZX7m7wuz2xfY4XYYo9BZAoz294BBCJJVwa8nsoGZ3v26wkjvjhB4Q4yqL6wEYJsVVh9YcV7koq86863Q",
  "key21": "44H1my6hD6NpQvrRKTqgvAmbSufBZXtSBR64yEo8WSQjvVeJ5zeTUKcei4FjyvQuzMuBGFxYTEN4qVVR2ewXJ9Qe",
  "key22": "5p8RuNqZ6YdTnh42U9t93KgUFjdS6DKstmEFzM5r2T61kaqUma3W6hLfH8zwAKWVikfNuynaRj68u7FxGPCUh8FM",
  "key23": "4rGPmdq4vYd1TYye937LSZTQBPpQbynqjkAYWYzLjpsdcfaFChdsjMdXp7Ncd7oizWTQCU8TKgV4AgUZRchhD3Ru",
  "key24": "54jXffFJQy51szJ8BThNPKBjXNy5rG2sLwbzPtGD1M4ymSkG4ozJZbPSiXGZk727fqemvPvXjEQfNLbCm4rg6uaY",
  "key25": "4s33p6uqXr3RnS1zMVz4beSHcfFPLAukvZvFTk1h6axTBT9qppeYtrwK9zqxeRSnb9epCop8DptjFyQLM9haWzaF"
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
