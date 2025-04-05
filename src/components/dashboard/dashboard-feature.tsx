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
    "57gfQoaEYAoKJrHy2hVatXwDSFaz3RTRUomsVqvD4Zdip1KBkqSmvQA4gDwxmrFouzudZ6josR2jMnTt6cPkpQXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gE7ERkwJsrbfW1q1E5WPPnq9M6SNZcFBJeJQGm3V7Nfe3vMZYwA876s8VqmRvP5No7nXXVppWgteSNdPw8WtGfM",
  "key1": "56ZeHwJDtTyUoWJ4i7SHzVW3EF5pBNwEV75kZEPPtYhjhZW7USZYM6ULp2dncio9oi7MDzTZ885hWHvZbkW2GX8c",
  "key2": "5yPwigGuHgtFad5F7rf5ycprb1jkaYKacB27zGG6FGuo1kBoHsQCWsMsG5wxCLMvD6zHXLu3LQXUq8oskRWvPsbm",
  "key3": "5nDufNBKgQgzeFgazgbc1zjQLnm2C55JsJhLzGfRBg4455NsqVsG1R1dJREC1X53DPZBGhEu43Hcav2HsgX8feRX",
  "key4": "Ng9x34LNvJeC7ZasJAF4qUNLoepSs1d2GafptpnN1oTKATS2HnYQ4HZyWUAA3tCVJDkjrf5MqafupCSEXELEtLi",
  "key5": "4NEsHAyVxVECEwze4VDteqNYAFWEZc8be8ZEUEjfQVCZEgfZWZdKxwabLHqFMSHTeQrMxwrjHZi3zkyuRxRFjkS8",
  "key6": "3XFkthtcpUmRvv7EbHjvEQ4s8g6MfcBYzX6pTWtxGbMqXU3BBdNe5Etu1YDxSgZrEh9qYJXejimXcXFrGeUTpMM9",
  "key7": "5nwm9CXAteJbR1nGNBABT7x2YVtwNeHG655erwLjj9tN5WgWvvRzFLE97retHmdfR72c5xdn7yuPofUgqKgQrUoK",
  "key8": "2XuwaLNkZfEYaXcC1zPHv51SFKtb1ufB1y2e3ZYNSAZmA9CLwbFB24TSHExzwa1a7XqDf1TpUiTZqQMWNrC7GBbL",
  "key9": "29MHsVvV2tw9oaE77mvZ3ZLXH5g6ej4PhYfdYMBqvNoqUwsUTaGVc1Mtz4ByJNy1VPacKvLCc8VuVqaZWYpWnAx9",
  "key10": "2sysBm4KfhfzRtrkGAYWrdk2yeCRrKhG6YfkqtjNtap2Ruu3XnAndMqNor4aqi2fbbfb8d7s3odSFC5RUKGziUqb",
  "key11": "YxNFkwRhNjSz2JdaktDocJjrsc2eMwyxjBqPWBWst4peNZghusYYLctnz5tTJFKzhXGqMSsxCm2EuTUqjzWErLd",
  "key12": "672aY1KEJRkC6pN1B8myuqGVm28Y4Az7yVZ5r561StZuTTvuJBF3MRJCmfqdx5M4Rg4XhtdBuskWdi5ajoe96LsP",
  "key13": "5pPD2RpwRL3M4pY56yNEZ8rvCgZKG5LnCSDTrEeVRLZfpZFrkeGih1XFqFxMwS3Lv4dAPU4FQARCRjfqvBqC2eYG",
  "key14": "2VRkUPVKsvGw6WsaSu4zuU7zbijpbmiBx8okPARB8934UVSn8CCdTAzufnSn75nqwgCBGNDjUoxKEC6QbV7CfLEL",
  "key15": "Wxc4eVwPRhtvgEdGfL9WBrP743v5LPeeR3opym25vMakVP3X5mUNmgYyKgY7VLYPVWgw53g2Y3x8wzpFLaUVB3C",
  "key16": "2a8KM2M8oQhYjsLvnHpZwQcMA1sqJ8e3ymtpxc3ZxmXBzVFrFcvQv8Rtb8FgQFm8JgZWhzMHe6raXDcGk6cRbJkh",
  "key17": "4kMJ2ACTc6BJ12zXNpTeiH5qLtrbyMZxSi8qjqwXnBBcTeHWH7FhQUR9z8MiXREoh82roK1YCBMiKKfTWmWtDwx8",
  "key18": "32TkHb68FNvL74X366d3gc6tAiEZtyzDSoJNbvGfyZk9VWiDQ4uHVJSnd7ebYmxqmWaJF3AmjFdxdPVQ82yUVsFe",
  "key19": "95fnkT7skGHuhdUzcBeQCnw4XvP3kf6eARhvVT8SAAyt9Uva3Zxo9X4YhAMcPNwo98A4BD47sa7PCEBfRXJZBhV",
  "key20": "4ZE76cVbckzfYfLgpze5w1siHGkq3PdELeceWf1kKq4YVGPKKAbrvrfZ9Xjseuasfu5ernXyKM1AKrC7wR5HAvTC",
  "key21": "a6aF4gGF9fZLXM5bjBzhjsxzkPEmzN58XDcp1QwPaH5Xfw849gDXGqDhYzk6sny6WfpFVoUhKeTvzdpFPYvboBi",
  "key22": "3znadM8KyWhsPHVmgn2qMN2w3tp3EoAPL2b5FQCKdvm7JQrCHQErVngEamfnzt6qcYxg8kX3vzwVBSwS9C28o6eS",
  "key23": "2BPxhYaGL9Cs8sZhV7h2xh8G6xAwMyU2j2EA9RifzJkBz9BprkcezN5AWnP2SXCSW7qQzk4VGmi7RMEbsNF9vEEV",
  "key24": "5mLnUMGixDJBDwRWYyGxzSkTwX9Whvg5qwT52RskUpw1ynKyyqgk8BUjAytobCj8tx2hrFtDMyQGNyJjJ7z2mnRt",
  "key25": "2iqPVUudBvpiEHp7QNWK8qKCJcxAvxCKM4bqmhej9ta8r7DpYYAqqBLmXLopsXmoNrEoqfoeN4pBcuxBapPFaFb8",
  "key26": "2ThU7UjpmsXswsgievC263dcGwbqWJkDecbb3yHEPFDT3XTDxwU1B3vyGHDQYv8YKSsyvB8NQhwRs17yukjLecN1",
  "key27": "5huTH2RCeoAb4WmpRfWXAVBUSVqhL8mEJbRDUpwUWmb452ZzgqHKQqAtnH74NdutToodKXXy8LBh6fobERmHX6pq",
  "key28": "5VnPXi1YMVwSMnYuNNFBgD14e8kXvEDko3gW4aQhn5hQoz5FpBwn8NNie6ngRMEu3vDWrAGzgn2gyMapiocMe3n8",
  "key29": "46NzG2TY99Fh2dV6w8cTB9kJRdi6AzJHkUzFSs5S2jKPHr4RUncajSTZ6Q8ikFYL7uqtr57YCE6kjpcCtB3vFKvj",
  "key30": "4V5QznnBTSXqXtWUeM52p5BLZScNMtNhSsf1crGKrDZJX8ftc52nWdRiJKftk247UhMhUiCS9CsCSFUMtHPoYkfY",
  "key31": "3e3xm7hzdTtTTSxTZxdgPxNWdCjUXAphyxDr4TMh3T4WaoiTVpDUBbFoVmggAThjoUBY4dH7h5BTxRLxq7tv1KZb",
  "key32": "XT3V1TVLJr2MnBqY3JtajwJ669zyjiXxrgqSLijvA4Em2gzcDp8x3XnCZpWPvUEgGKPpXj4gjQctZ5UpA6cbXMh",
  "key33": "3saXhhNhBZJPrC9n7V2J5Ao3TEagVA6rTRTBfMVxd4Ye1hTMKyKJbKuaf9ckAUSUp3Q2ZSy7mtui2o2TKfmPLemT",
  "key34": "2rXDD7cNvRqKkXYE316adRv31taWfV7gAg3GSsjKhuvVYP9KSL82bEziBzU9UUqa5ofX2seTxzV25ewYwEKXoyea",
  "key35": "3h3MtqvzKhkNqe4riyraxTk2obMGmPLDCXDGQQTD9BzCiEz2RY9bSx8uhsnsD2FbxPtZymQXhUMogHEKBeqQf3ww",
  "key36": "268iucS8fnue3ZFTZDKzd4UfkLuKq3SQNoGeWdk8isZuXpBLhNwg3Mf5PLB3E2vBic7dZ3DN7KyUuWRMCReteYHj",
  "key37": "63grvy9PxSaXi6EaspyWmbKzGBJD8VB17jGGDCm7a1515u3wpZYU4wbun1RFoZQSDmbH8BuYGP767rd1oZgSTbhz",
  "key38": "5YEr4NhBRCbiAA5qEwGXKayhXRPr42hyx3UnDbX36kxzRJVzZ5dgzZ81Ca2WDmzbENroSyaGM1BpTqwwhgEL1SLQ",
  "key39": "3BSUTCCX8HPkESAq5Pbs5YBo9c2Sw5cXAwJg5eHm9UXD7Yatyfcezado8S68aVhHGuY1HCtcYe3d1eTPzmCcJzyA",
  "key40": "67Sp3Jo47UAiSAdkSYzctVycvxEiVMdjA7Y4qP9ThsN15iMuqMWDcMVNmtWGLyvELpmdpaxVenrhZovTZCQiNguS",
  "key41": "4JY5cAYdr4sKqcfqeaphXtp1sGH9LqdEm4CeJK7GjviBZ6htkBoPRJmhaFjjBR8q9HkMbEjAPdESG7TnSKVtYxxW",
  "key42": "4wfum5bMZLg2gBwbmnPZhGa1MDrPjt126btskBKCQazeDM3xTAdm7FwrSF8LAQnKqtgzHoGofq2DUVNMnCSWJmzo",
  "key43": "4uxBsaehmyHixKuCg9NbpFB34ZM4JVNew9CLZ7czLG4rSD4BsvYtrX2wwfKztwkDfiWC6t1aB6Y7VHiLDe18xqVG",
  "key44": "3cYCREgPVEVdnbvisD6gJPtFwWWWewuSyhHZSibVghs7gqeMx8mQSb2yaSdCTFAq5nDaxDLUcUm1zLZD476PYVm6",
  "key45": "28herZC4aufdyajGt9yCC9MnyDFV3Ssu2Nn12gz9HbuFmRsTHz2KxfbNDXq8afma2VswvgUEY6y1NxsFmXF9CuuN"
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
