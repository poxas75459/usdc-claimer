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
    "2rB6wq4Vdca6qLrhnKQ5NLmr3U1uAafAPdwxFfM2qVNse1M6hPW3LDgdSn8hcF6jjeMhznBvofkJHiYwvhtscKNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGZv8gtyej9ZLwE4WC9fZzHQJCiibzEoyAduyejLxVPa3q7QGP8MNChXTntm38bDSG1gqYCqw7upasRm4v2wjzC",
  "key1": "5GjLwsitsS49pH1WCqdZ28HrvuX2bG52bC7zktR2hw6haRiSuertijLJoirDbWtMcAY5HEEeKdzrKnPpFyfL87fx",
  "key2": "ZvtaKruJgrQHWitwMJKVd55pcyKNLCPpWyUik2FZP2BwJejsjD1PD4mmD7z5mgYMxhHMjNkz8C96umHmbFTxyGT",
  "key3": "pmVMBkASJVGrz8ykzZfQb9xDGQtPqxjt1fLJDo6vysHXn32ZgqCRGsZQQwfpRXSEYkZxqZE4WC5r6RYeoaH1DWB",
  "key4": "2btCvvYJJeX6e83e8XG1n25H5nKyLtLnEu2YMEuBN6oJVb2K62SkNhHRtPnq7tXLgBKhCqVo1kNjaTQzyUXumKZw",
  "key5": "4AVYCkn8XrrsDCLZCKpsGTQfQxuK5U1qwyP8unjRVWqh2JMTWrQZhF48ZD1rnUXM1DK59edg4tK7yoUfYwDvkBTQ",
  "key6": "5nPaBbJvxQi2RSpDvABbTw1HqPFabfeTYQnfWi3GYqMi5EFv5UViSq9TxE74yfS9mXaEKZoLm1LnZvgnrL6oHhhg",
  "key7": "3eiD9Keg2Rf2pxzVt8LqQBo6knVWKFuf8upDK667Ay7jPchdVrjBRpXo2QpZSjwiiNWtA1pRvGFpVUkWD2x8oZYd",
  "key8": "3Nsn21MwnBuyKNcdDstf2Hb9nYYDa2bmnv2v1zE37XPcLHTBpTicUB8tgfAhFDp5xT1HWGEGU6XPN2Vz8w2r2ige",
  "key9": "3R1Sm32hFnAcsWXnoDvbbwZeM5KqPqaFYdpPJrcb6GY6vPC2LKTKK5jStZrz39bvfY5nvrLSLoPFtBZW6PmPjvx2",
  "key10": "4Hw2zLNkRDLpN2Ddu8feEsyDZi6ryqpBbbmo2SNDBFVw9vbiyHse5DPz1bMV83yQ5UDGRb659mC1ijksdWv6c54R",
  "key11": "4m7ouP5m3V2zYFcE6NK1GzLJw46kaqKZyD5J8T9oxfHFWVEGjqQnE7TDMJiACtV9DGQtbGJ5Qd4hNG4UqJ7c33SQ",
  "key12": "4oV74nUpWnGFKnJF3fehyuFZz7EYp1HuvemZSbtQvGbA94MC7815hM81hGUM3MEEiRWns3LsebsoZTdcKjgnxbLY",
  "key13": "2wV99WqpW5cTkQRTdTBvkhbd1QSZ5BKqPAepYtgaiE6iR9m3MaYeikUqtQqPSEsgjBk3LE9XyTNvEHiC7pgJy11Z",
  "key14": "2cDkDMLnjVErQsQ43MD5S5JukqoRMMZ6JV5AuEkW4f5Nu9vd8EJaJepJQAkJpmZFCCoGzY29qKgAKr5W2G12qjU",
  "key15": "4eqcjzTkSco869Zh1c7fHhLPczNDDyTi9tQpiM9MQKEReTyGi59WYVaaqbxCaqspRg1z5AuqYdR5a4KrG5WW92oi",
  "key16": "5xM3LkiEowS1Azq6nNdvnE4F2q77Jpi4r2kTd1o95o4NRXnVLA5aMtXKaVeX4Aj1yJfheTBeoXT3Hso988umokpH",
  "key17": "xMsweVwXkMJuWKMdRKXaEqfHDwkjVUJrgz1Us1RXAPxAehtjmBir5BCFSPKRBt72916AtsV3WZerL9NevojBbpj",
  "key18": "4wLUyP2tEqsq3r45BPW2BsC2cMwT2fD3ggyRS7C2eTiH7PWDoaZYV4xysCfU4hwatuuMH4WQKhSbDLwqcBSiSHJ7",
  "key19": "5siRj8fon3iL4LyjHYLPBp6qgt1CLMdWChgW6Z6fHSXPgvHAfEypQyV43wznHQMoxqSYYdZ4cN1rCC7pdUuvPSEe",
  "key20": "5p2z5fFqqXFcnkwiNX9h2uNXGKJdGpNDq5uQf1WcAgSB6n9Fh9PEpA9R3as6AHD1EcDxFHfBbVCYyjT2MGFZiwMm",
  "key21": "4HQh2oqF1TC8JaqtTPdapUqXL9skyoB4D4SZihyF2Tuz31PEjwi4ZdhavF1egGrykXJexMfvc9GCRY6r6ikCC9Sw",
  "key22": "45i2b4FZae4HrcAaeNPyw5575vYqTSDRnzkGHRrTV3adoF2j1KNRhMEf9CEJ76fZNcbfDya9U72RR18dmGLoQSqM",
  "key23": "4xDhK3Y4UTDrVBe8ETyueQrYPW2LCgh5Nk3Zj1S5KRg4JwoYYmkEWm7Baf424Gmy2dF5FG5DX3imJNZXzxgPKdxT",
  "key24": "4c8ens9ia8DNQcpVCXBw1pLnNbB2kZjfwyanAmHPoeHDGr5krjoeaV5p7v4UTJABYRY376zuWYSvu93EjXDDVcX5",
  "key25": "4vbYfTsyRVP9Aa58om5fvrw9rUsScqJmXsMPZd1pwyisNj73fPRXA6BB3DKCDaFiNGKAPxWqcLbYNG7VhMu2pE7M",
  "key26": "5oVbVrEzaxpLbAYaGpKx3aF2kNs9euw7u4bLc2g256mkTBHTQaQY7nhUWv9ptnu5uHVH7mowRL6TiGaw98fjY7LV",
  "key27": "6g3TVHTsD5KSzizLFw2M2UpuDdwphT5Xah8QVGQHx3LVue9macfvsdTj5ZmSeBhLbxVZW8QrUmdmPnZLoxLGXgk",
  "key28": "gChrP816w4AeJv5tcFeRwQaHxY5U9bu4surjQHDVGzcyrtUFmTDum1X24AvKR3EtcdS9YGtt4amqZwgC7iKzUSL",
  "key29": "48n4PKkQqkQumEBkUe3LJ9Fra1curN3gq6mPrZhPCEwvMoQiBDuX189QDLakn3yqTNZY4xzUJ2FDxRb1LCJAa1Lo",
  "key30": "5qikzsnUhzmHJeTDUSEX3ARiQayvFxNu8xUEBPsSKJEnfkp951xmg1JBHSPLCVSL8Phdcj2fvQiYhF6TY2xg2Y9T",
  "key31": "3iL5HMwTWYDP3t4mRBgEEb31LmrTzSkHjf8mLaqzvVZph48ZNwpZZeBQuiPx1A7NxZNyZA7UTS3kRdVJUwyFAxMC",
  "key32": "2B9f7z8BNVxW3hNnT5Co17eiMZicQFbN9zJGgiJU3aassnHYNy6hTZsckoSPPkQWti6tVt9yb3GEGxxXXH91kXcf",
  "key33": "4YX4QJzsU5cEHUuEdW5H4EPfPum9bSScPHEwU4c4Q9nTkjutJNkh58sVwFtwgmi7t1B7SzMs3ZmF9qmHLVT1cH2F",
  "key34": "2f8uWpMaqxeqwpCFzBKmAqCBfHVfqb3cxCpaWzDH3jMGBbMfZkL73k8wEEjqzpexeGFaGixk72JhWFbw8YVayPWd",
  "key35": "2wcpc7bVrsmqHbd73fqNMqwn8QqW3Vx4tThvw5ap5WehXZZxri9nSWG3azbbP1ggNHL2HtQNyow5PDjWhT8mCmB4",
  "key36": "C4y3Cn8YWSWHDfPEG6oBosUworY2rWF4L66eUbEpLNftqoQyvPuSDpT95USqeYM2Kr3jMhxTwHFpssKPkFBJ2rX",
  "key37": "6j6gdDvcpkVf9VC1J4xnzCjmzdJuqudyPyc7bZmw6BBTwNwoijMDJag7jjSZKoc7EpMBcsmDoBJUJArx4qXtG4S",
  "key38": "4V1YQNVdBnv9KXusFYQeooUEeypMVTtaCv11Rb8TNWcdZqJh7FHJUNhxgZXhRqXMjHoRSxtKv1i3BXXESMUjYPoW",
  "key39": "36HsoKEu3vsCAXhabExrRPEowu9W4aPrsDFAs2tpPorNdTHwEojB25nhDPimKBPgc1oSUF8b3w9rCBGZsRtfVT7U",
  "key40": "5dnsBzYdzvvGhYzqJhmoZwNtTHRxKKzZXvpTMLU7pYkxgQkbpkiZtJ2oekeMpoe1Ump8vo68AAFjJHuSEtkUemat",
  "key41": "4M4vCMUUVT8AQQe2pyouqoTNLnksxBYTMDWeWU4kK2eiHxuYJ2Nzkx7P2WYR2FHUVutRZKLmwYSrPYoaLACDofcz",
  "key42": "ku9KfMR6mSCvDFv3mqipZhMp8Ejepa6m5UPokAdrGCSw9j5VokUisdQXDJY7hn9ohWL3Sp3VtpofLSEZHzKDnfv",
  "key43": "5xpCNApX4pBVvLwfstMXivNSEWekq4FfQWThKWnX7h8wor7ZyeUp8zaNKYDEv31S7THKfxYsAYHGySHj8jBaUFym",
  "key44": "4fxkUkyoLYjeAP3C8madgxcKoDGmWqKv82qPdPXZXVNYjxu5678h1sm6DvXpo1c7XnomrEWHQBFbpfxjWH6g6Lei"
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
