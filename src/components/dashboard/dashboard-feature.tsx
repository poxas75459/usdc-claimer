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
    "3joRzcsLSGqdkDCoKEr1YpcPu43sqau6ArD3EPDYWBUPMJF83AsSWHJPDFn4Yc6YCMvChsmGfyWfBe1cXFesfPQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rX7omT8HAx8BFPyvtNzz5atzHeXqDD3mF8Dds7iocbgRScxqhgbSpG3SVfY6xWyDEzTdcEwiCxYP2X58w8dVb8X",
  "key1": "4YrZYxXxMCWnTCuWQX4HTrLwb6HcgFn2VNDwBsw97eN1WMk6kJjjax9qyBbyVEmh1h7GjBJT4bojXd9htuZBaDHg",
  "key2": "2PFcAy9kLf8SxyddnJe2wU8Xf6i3v8x6LqrkJW6GyNUVAf3UbvtMWYn2RTBDyzXfxyzWWpKLh945McWFLPggF7cx",
  "key3": "FHRYMpsit6yEUVvNx1pAvyKaXQYaq8e2xDk1HVzosVorTReZB58eZWz1kwvweGq3jFdtrCeEqPsQLgQDT1giEww",
  "key4": "28anU1bMfEQaqzN3SPWGfs58m6Q6W6QSAhD9HikwawMmmWkJJv1cbCo93wvhD9WxnGpV1Mqq9QHDxCiaQpReeN6k",
  "key5": "2DwNogtDqFRWXs9DmtgubEfMF5dz2oFrLVVnGX2NXAu3wUUEKw6AMvCvW2MXRgtuXRTow3vWFkRgDz1NYKFbTvRW",
  "key6": "4L7s67VG6arxE9b9GWmVDZfAZCHhjV5cVX6xJkFraJAJsRryvJDrcNBqyxdGTTYLQgrS7nueyoTnk5R63bzRfj87",
  "key7": "AcFsE3f5EdDDzAFoTVxHdAqmZs3AGvZsPvU2WJtkobj5XCreZv4biQbcWWNkaYdTSVEEFC28Ht4FHaehR1ARmt1",
  "key8": "5sSDXtZaVEcCGWkJLq66uWa2mrZ53o58gDCPyLKa28T8vQp7HFdww4hqFFqw8P7AsXJpdii1PQoyySyDUqrJpF1f",
  "key9": "5ra7TJim1oFdyuMvmamKTFfkHgKLMutpRJJ345nB8c7W2sodDhMtMVxk57A76HGUfpMicTNqoNzyVGnTWK5EFN5X",
  "key10": "5kj3w4LsPiAjENBQSQCj2gViLDUdCTZ63HaBVLPhVUedLNVRKJ8z3opuSW5b7nZU4j3Da2DxL53o7YKEsRi2HfRF",
  "key11": "4qCD1iCEcWL8CvFbWXtWPa8twUgxwaDaMhdo9oGHi8HeaWSzfVB5vUP9UW1pmgACm29F372KygWsD8kxBJPFy8bP",
  "key12": "2JUwVLYqYFQftSZaPKRMbCTYyWvKvPeg5L24g18u5NZ6Ze8p3ek8sCeXimwNqPnS8XyET9EKTfxMMSrigpuPcqo4",
  "key13": "5GXzmNRWFxYmxzPngXoziM96egwKF3i1zKcT3BF8YWxTTApaivJwCmMXG6SVn9CfUpjNRrTgVxzCGbgwYHMRd826",
  "key14": "55muojviUCJKdx6Sf45MBV8SXc8JVUbSMkKgkh9pcarJd5BdmJB1J4teXWEazrtCenfzdnwv7G8qQEA6WA2jToGx",
  "key15": "55EBiYHsTPhKyoDNj5QQEm8ygm5NB3JrtP1Qp4npfo1LNY9vk6dBMTdG7j3qELW7uY8hDSVshUfhV2zKmLa37p25",
  "key16": "ies6SkFC47g3XGRvBSNNAX66TWDDCyni4vsaoL7cLPeXZyWvP86yHPFbmBXWRNnzhzuxs1tZnwdMPx3kb9tr42K",
  "key17": "4G4c3P4ahvW9RbBLZaT4tTW9jquWz5TYUorQ2A31HzD4DrfPkFp7f2Uoq82EWNK71GiKEFMjpZ5h3W5ivse3G9Uq",
  "key18": "53Tz5NcFu6UiFD8bEcrtoSae7dBDfRoSYGLzeDmV8UtbPaDjTQAMTbPreu7KgcQHqMMbupzNvPsbYp23roskfKt8",
  "key19": "2Hi9pKW4pd3aSp26yuVjpsuewQuf7GczihFBazSgY5dX2GuzhzogLjFVVFySKRZTP12wus17DXsH6sKHoCpmtpXS",
  "key20": "2LQPEnvwoF9fYnr3gTdP1imv3oZQgigjCdVShqfUMi95wqHxdhUFguC34KFEYBSfzwkM69xKjvgRqr6A2wjxsDbG",
  "key21": "5jNXZbSQLVbiXRCXNPQPRvGkj8YKpVQ2fQqNQnKfUyG6aiQ97GARZwKx3ENBRxD29CQ1AxUgxqMcthf3fZnceH8J",
  "key22": "54tTiANFHadoHqV9hDZGLuuM2FLf2GorTYkyFMLvZH9i2SxMX1crZoKJWCT1sdk8MJgZ6qo2BsYPDpnVpVfFxLtK",
  "key23": "6cATQ6qLwir2uq6umJHqBPMYVMubjyj5fQ6hRK9ajuKXpjLStRdmpaVfXVYcg8GjPJRQn24AoK5WNcXz9L1wt9G",
  "key24": "3fWmMgiH8Z2JRVCUsUGEC1EFLrM4Hm9KQ2pPWpR1p4D196AgRitHmP8xN6PCyT2KbL8zVyhej1QmmeFB77SvMxXc",
  "key25": "3Pr7T5BU3bAxM3o7fuTMgzHeBuMmQFEYwNDDMcuSLgcfdjotrD72qNKVxYG4Vi63YU4F1XKugnqv8Za3W9SCFbQy",
  "key26": "3pGqRTSZWnY4R4ozrKoGhmkvhiXYqxKdnffqby2Qpqn4QE7eHa7Li95GXwXHZad4nyUebgP1DRXW14aJxxqxE6vY",
  "key27": "3cppWdX7CueGqKoP3t4eXv49MK5rbGD1Gki71CdwDBcdJmnMnS24XRwHeVpajGXtkxzJtnFuLsWuKQGMgZghZjfB",
  "key28": "4pPkbGKuk3SGVQBsQ92j6LjXSbafpR1PWZdnnsGqbgm58DcAWTXCMrg5s5vhviciiHsJ3TKHCw5dxv9GBgCwdpwK",
  "key29": "4Bc3vh8VJJsxTfq44S1zWoEyRtszZUGWciJym8okPiFzcmTFm5vs479PgzbDvUYXsTFiTUfrDPc4M3qU3RZYn1he",
  "key30": "4y43UvczFUBq51j7naKvuUF18jqXQCLa72Ay6AZpbbD33eovGEeg4j3WppL9uA1wcUt8SvoSsbf2U8LLFSqYcdQC",
  "key31": "4pSSfkXHkGrqf2zATau5Tma5Qtga57V6u36An2WQ2u6sjXjRuoMF81ax5dxpnwkBywfUS9GWCjq4EUhY2Pm7dpsc",
  "key32": "aPLFGkcXGoFuS1ppBvrMKbzpDjhfgg8kaCHoa3xpSL5hyJKEbmExFmSzJXZu1skbD2Z8Z3RTgbi5Lq5KXsdbDeW",
  "key33": "4mkHLSp2yX2gv4S5KNCkVaJAzAMyvSccStjLZ2FjJCg1EwZzoCztRTkamFoFTiGeueFpnnK1sVNwKdpX2SamugGw",
  "key34": "4vAMgQCgdmZDJ44usCX7ue14V53D7ogyc2jjq7hU931MRtFYpBPAMRXAk569YrTCgmaA5ZnzwHJLvXmqZVX6oswj",
  "key35": "4v9rFKoHSsYcxtNkbqjXabZgWUvBNjPj1eCkDvuCFeNwQ3pWxda86UUUi6LUMVvWs35GuqiLQc1qtEuM67EN2NqP",
  "key36": "2UrvcHqhn4KyZhtrE6TtKg9A1oEcq35k8GRuqxguSwgh3P7SmGnUFpvneF4JX2iiopsALXxYex1ZZrqP7cPaXdoG",
  "key37": "43jq4cr6pgfeCjVT5krFEhWFiV7WrigjfEjF9i2bLUjTyEmGFjpnuH4NpasujkT9khreFM4GTE6YERGpSwpheGXe",
  "key38": "3go1gBi6Yf6EwZGYKrBZfzptwHAjwVnTK6d5NkujwLXGsaoz5x68YpKjm9gV2tAP118DtiB4LNWBeR2PQ1dJ3sqF",
  "key39": "3LpQkJuyu8nwiVLHd8zZAfBLwTHtHGT17QNCm6E5h8bxhRbfhEkTsbb3vwkq7oSeXzZBYmoquXsTEo8aERUCsrQR"
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
