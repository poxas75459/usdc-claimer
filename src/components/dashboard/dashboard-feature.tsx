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
    "2ccZVxvHr4utK5hUJBpDZWgoDpePM3VPe2xxU4mW2KPJPYowU4uLUPPDN3KkuracmvPd11XiapFhsp9R4KMeHbLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4g8wtoz38wtvWXUBYifE6rBu874rsXqad6caTvZbS11ATJ1YJxZWnA8hY4FWyiA9ug5weyRkjkCDmcjTVnrgeZ",
  "key1": "tUXRujWjdjgzfdqqu7rUF7eW4RW3QBqyBVefKGcgtTfsab3mRCCoPkiX4ptTgDKsWAYfYEziqxfSvQevfJpFpjL",
  "key2": "5mdFd9JS5PoXaDhHi78Y533WmsgPwLiCGJ3E4MqxVTMPRJdaNMR9Ak3vGZ7C124DGpJXL3RZLrHcBrMysSRm6777",
  "key3": "4JF1Jjpo4Dmyf19Wk49bDXhsrXhVCvxSap4pVTmAAmx3UqeZqEgEJGNyhgX34y6qMjfbjiwe3cjDvh8w7R6mLStc",
  "key4": "2pgtZuMrLzkge1SphTXjSVFkyhjLVHxYKwrfVPXg5nto2to7puN317y2JbwjAPNDvwiKvFRks6Jff8MyWGNoALeu",
  "key5": "3omd559gkzs37EmmQHwtNCdaERdS31Lc8Kpy5oXy88o1ApG5hJn5DgB63QZDKPyYKLxpyuCkddLvBrRaAY9RSTxo",
  "key6": "2MUUBkUg91qiEqPkv8TjCHr5YNdM9t6pAPjZTACWeXzwYcxMWfVPc7tT4yyiodPHuVsYBpGbgMsEYuasJyMWifzh",
  "key7": "2A5nTRuNQUTvJDxVA5Cs77ctuEbSBYJ7Rx7qKyEKtxUq5gg49sRLczDMCaT3bEKAhho2fs7k5RwmwAwpsPBfYkwn",
  "key8": "gvcanCqV4VQCBrJSpXnUjMW3BZ31htcof2zW9srTMuGKpumscqV4m7fde4JvRBq5FpLXVrKtc3yMoDwVrDSCU4L",
  "key9": "299rNjhEtA3bxmpSXkbpYNDMuMXRmHus6U3bUcWTitU9itBASGCY7RthHo1w3twpYBjeA1T3qjP97jCftnNiaFkM",
  "key10": "RLhQFzWGWUSyp7rN9Psap1P7MqEpzeEQwVpXr2QzYJTK54o8kmA1GptG5RByUhiMfaY4vMK1nQkfNJvSUeACX6C",
  "key11": "2mxj1yCUeaTu9nnJpZf27yeWtYM1FB1yAaXwhM2B3qzBW8gd1tNnVzBZMvyWt7XGDtJH8u2C6m3BQPCEJaSPwL4i",
  "key12": "VTkeDFo8XRPUE5S8H2m3Y9QQL8AAcKRWiuv17wKnG3rTecZnZ1nnFbbMot88pCWTBF8tut2fa33GyYDrybz7RFd",
  "key13": "4ejZ4BicVqU3PohUDbrQYzba7cmEPsBvS4PiLMx59f8H6VJptKjYuu9cDmwJNSBFrTVXzZbNeNjh2YL52iW8NZry",
  "key14": "48KVGbY4ee7dYotiSBi4HeGHujNPk5njVKyWV2UKhe862TeysKX4enQ1WknvgrZxEh1Wi935pJwnE4hTNNzJHHGy",
  "key15": "4Wzg3NB43GoEUPuSvLkb9UpYUQjDYMPQ8S1vZ2B6txUhJY6r9oiYT6cL2wvRt7kHzqqpZ7pmRQMPkttosjV3JQ3e",
  "key16": "61K1CLcyfENqv93DF2ZJv22pRaj3FvBmz1XEv2KLjasc2qnW5iVZu7Th7nWB3VSjygjkZx6Cv7sdtio5vZh2eLTw",
  "key17": "6JcKWWsYmYFsy1y9dhmjyPRYehfywypCyFcJmjp16B3dbTRzNDNCgqVbaZ66oVeU3toPuQZZ1Ewaos4omZLqpwr",
  "key18": "29QviyKjtkstsUyomFmmtCdPC3cBVSSBJ2FvJpM3y1Z5YVamSjZgMiDu9iFS4piyyxeBjYH815EAc5x6YX986FiQ",
  "key19": "5zoWBVdQmzdrFWYHyaW7Zrd4viCSN7uehHj6BLHNRRutHnyoXQUC5q8RrMEPERcJvJAxn7YLvWeefBy6xiCUaCa9",
  "key20": "4sapEbK2AgeobAChqZQYozsUadsc4NnwqmDda9fcb2xQEePTSGXsDUWwUNcWJEuwyZZqwndqsdfrQsmg3yoC3K6H",
  "key21": "4Vgp1vWHZ9gSVioQ5Arjwu3AtnrLVUjfWhetpAYVVEtgBf9yPRcKoMEtkPK8x8W79yfsm8ZQQfYnMc2ATcPHJe9Y",
  "key22": "4PvToQtPiKJM1eiASMvoTneZs38Pduad8NVun753kFsTKcHmuz1qFMHhzXSk7vyiVtWXis66MuHiqYNuc6N6529n",
  "key23": "5sk6ZMY9PxshzBGeUeouepTUEE7J9kjYyDGHu1LXnEPjQiry2ksHsJ2tXFGwDMMQjCRbnTX4MDCRgEF21djThFZn",
  "key24": "26DcjGQxfRfH2a3ZDJkfsefzDCAPayEyU53HE8zyxhuvw9Pvf7MGbbGdUu3ipcX5N9vHFnLGt2FtfUj6qnKtF14f",
  "key25": "46bJvUEahEUjrGDzJe31XD5nt8oEMBCpy6T5Wdo9rLKHQGXiPS4QNcwjkwV5GaNftS98cRy8ugCcBu4A8mhi7fzm",
  "key26": "3yevDKs57sqKbbRMm4u9svtdnSn3qfHWUCxJ88VC7Rs2JBWuv5tdUWkk4TX3UxEhZdyjtYqtFd2AGDS7L76SPeEA",
  "key27": "3LQT6YgvWewdkTKezakMvot2woTdPPhhKcBHLBhABZ7qiMiiSuYJHFcsUzdtKkEBepdfa4rMJ7c6umRUEXWAdFWs",
  "key28": "xwgSRFjX8NLX1NqXsGZR8ShhDsxgyboHMpofz5P6pRnbG7wUfNff75y9erB8hjGjFeZGeAYrDsZ1HoCcaThcCQi",
  "key29": "2SJbWLDhSGBfQt3hdPMjwLZaKNeR8y1qLYrYEJP3NNG6b9NrYBhJyrSEnYfT8iszWBwJD814qYw2idx5P7Zr2mKd",
  "key30": "h1AzzmAHzjrpbjUQxTcf29qbcoGXa5HJV7ZaBdfxT12ZUXfJ8q9HjjX5hFfA1Ho42MycpQtpGnRDQDvuMAyd7GG",
  "key31": "4JuVp8bTwxzCHmxcLpu74KxQ956QAYvCUS3nHJGmFPUEDYbfqhJD7wZx1CNwwH1KGq2WqTFd9xk2mGkaXksXcDKQ",
  "key32": "2iSYvGzUsLaXz5RmXdo4gnTDxh5DZnGAjEwRA3kcP8cZN6erXjWZjk8an5DWMWYYjh5PWKDkEW8b917r5ypk7xTL",
  "key33": "45S3Xp4VFxwLRtA1BEVhm99P3ns8Lohq1YHTa5bRfzoD3vwWm4Z9jKyvC6uWUNFtskSF7h6Ka65QfS4j51zgWDZN",
  "key34": "5tSuDspdJgLppVZH5shNQjh4Lyin793qtVRepkDJdYsQf84TgkkzfqJshKgwF4rwbyNXmDgMiqZFWUXeUHuLpEZc",
  "key35": "5og51JexvkE8nm5invxWinKznEJMYDhtfeZYaxiaMiQkqDGzxj4br96FwRUxT2THD7HPqjB86sy2z5CBvv9vsLUa",
  "key36": "651RFiHUXSLZZ7BavqCLgnjzqUCQ6eoU4fYPVh1298ZXititPcN1KC5MrN1YgZbVH4dw4HsLgn3PhU2CKBJ6fEz3",
  "key37": "3w4HZBBQgt9AE95KaX3nEJvhEiKoQS7PPW3Rk7DoGncxHeRNb3UdocgzTzyeyYsRd3pdiYsBG5pgR3LBpwQMLkzy",
  "key38": "5xZsAndFbAQHUXxchD5HrvrLhY8PJ78XMshmdLhWVXRFoxazVTss8NSz5QsdPn7RoJK6bUU1UP42TS6VXiKG1iAx",
  "key39": "Y8bx35NrbAfZ4bBVkqBWiWoD35cNiCkzjtZ9EFX9wZ7iPRH78H2ijLXCo5XKcMSYehcUKN5rGHfpuzLvwJcHRGQ",
  "key40": "Kec1P11H5gSVwWyu8UPWaR1rR6EYrGVsLd1GeY7ahknEY6x4aU2Ffw9wQDXBweGRvFDbEyo5iu7uGxNhtAGTiC6",
  "key41": "4b4e7dGXubJ3TrTfDKgiExfJsuC3JNKssUjgj5qB8hWa9NLetxmeKdtLWrcUiR12Z62YugihKcR2dnoWhJz1La3s",
  "key42": "35XAtA9jeGUiybpzhjvM8UvNVnemFhfR25bhHvi6c9xhfqgWcW4WGDpriQZL79rf9etBxNMjtkX3uWHSbQUG2ZKy",
  "key43": "3N9YXkN44SwkZNGwYmbeCSxfrh8Ds74amemwsZ5yTdCEMvEBr3DopDC46GJoiknFA4JDxeGnmUBPLfEi45DibprP",
  "key44": "5ojhJAQNMSKD21nwzY2Eyg4PJTxaUPUvmjKUiFeuBN6qJ2BB3g2gatq4VPY14PvqZEth9vbr5BNC4QcoQcXXpM1i"
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
