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
    "2mmtiZXyYhZ5TfnucT57mRwtT3ie2s9uze37rFxSfuSXy4BSqEJpeogv59WhNhmNok6u2REjuzNSK1y7MyfMWxmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cR2DGcecoBNhLNg6ZN7dfuFf3c5jhEJf7E3CbD9uD86fWURQyuMPMoRnDZTbVgAsdZmXKhzhf8oDMfceWviaFtZ",
  "key1": "gFGWP9ySoyJWCEzRhWekAZeugtQsh9o8uuoKNJDo3zjGrF5gZUtQiSYc7cLmSFYAuMU63rU5JE2SkiWopW7XL8j",
  "key2": "2szByyzbeV6JezyDm5uRoTTV7h4QFmVZHqf564cnvJ1tKi73ubTwBhU1bQYjPUC5fFxPc9dzzvuwCr1p7EDQf5oz",
  "key3": "37MsKHJXFa1wWVgNgzk61k2PMixChr4cyXtv9UYwyxuEFx3sqEmAZJNPxDqo4a6GKGzJCTuXBVtciuPWbaoERCE2",
  "key4": "3qY8512XW6PeMdCqTffA8Kwzh3NwNakADw9texCywKQx7eQ3uWSyWXiTB7DMLNRpyW9AcVUHihzgGCqCetd9dshj",
  "key5": "jfixG5onJhQaHmbijkjGpBpJixvnPx3xdqGKdmn3eXo6K33N4er9S5XDZWXmpzoadmhg6iS2d6y45em2HmPratz",
  "key6": "5GGtNBJktoh8GPTFbXqYZumMW7n8bro7fmB43Dr9JAj6bQSAmqqGjzdyYtNmGN7TSMfytywKre716SHTF6Ce11KG",
  "key7": "2HwY7UtvV8XsyeqcaJbNfAjm5Xn8pHsHBz6nbwna8BYus1PGTjuCQwhPr5KQoNP6ADbnvcDoE5cF4tdFZM6VgUGp",
  "key8": "4zj7wNYhBUYnR3yikXnhLRqxWq1LZ92XLoNeC32GHbLjWPjzp4Fm1xysaomiVYiRQYhqEkNsJuBghTuPNVpmLnkH",
  "key9": "2KDST79Vm79Ubsj9mrMrxmt6EdDLMX19NPiRjZ9PQuxVC3qMDSMcgHren2DQqaPFZMNiZjGRE4m3Dbcs61f4LLoQ",
  "key10": "5zmTJPP2v86x6F9zJeaHWDvCSqm3LaDWh1MCkK9jAzA36d32JLb4YrhSar52CSChmYRYqqX6i6prDCKLqdnppBUh",
  "key11": "3y7jGY9ni1FLxNzQz2pyz9mQm5cbqeyhRaYwdjJJPN8gJyyDDpjM6XQtjC7T1SoHeKjkfSSyGjjtfDscYLY9NtxF",
  "key12": "63m2NZggULATJmDR7mB4ErV7cH7eQU4CnhsFog3AMQvvr7yPWNCZQMKhLuXpCyt1qgY5aoca8W96wDUbmV3vcUGY",
  "key13": "5N7dn1GX38ojZJ1mdzzBso9aBQxDVptS9QXYH4GiGxiyiZXrndUDJERiCCbWe411WWgXLDT2FsmR7bnsgFF8dPDu",
  "key14": "4NvBGHhZn9UN9cuYA7fxYrYAMvGupNgRvRgkeVnp9HDb6QwxzAx3zWRdcuM59v4gwzGDERR7ef787wQVwJ3woFp8",
  "key15": "4NKCQEhVZ6aUEYJBzeBop3WrsN6MZq4mMZzRrH1KuJLhjJGUpdTyvPAN5pky7e78JqmsH9RT1qVH5vV7C3htzjCD",
  "key16": "4LEmnAkV3wCbRwF8pJhX66VceToL7NnzkDU1TRjWqsMj3AvKqyWJZ15h5atjZ9VFM3Q72oEs8L3QguDST35eonGA",
  "key17": "65coeiK8WyX3z69Ffii7aURyPWjahZ3EikQbEDt6MffwfGLQ4p4FYC92oHRFS3PB3B5NbbbhS2CyytREhspiij5H",
  "key18": "3Dqu3zb5McooWq9BqHCUQxea6Z5nCT78HMRXPZQiVh9KhjMo5wHXPiNyHEHYHBrULWoysjspxn76q9UnKxeJXmj3",
  "key19": "2rgG1SCWACpyCYsJjQ62LqFoLhatUTvxU6KoNXYA3SiiioUxnuyqaqwBKGqgZ8YSGNQ4RfuJUiZUpx2NnxtiLrao",
  "key20": "HwAsyFbqzBC34Jb6LvKMDBkyJYWWZLPqsq8PGQhptF9731tKr7GHhVHWcQ2MS9p1kipeT6NwS4oDQT91VnVnTTP",
  "key21": "2Bm2zFcQfrJqM2mJE7WCacFkerizbmrvTgGfi2iCuybZWK6iYxeUJsPWnVwxZoLqYUEt4by4oBEr3yrff1fCZUEa",
  "key22": "4BeXgV4prn9pArnmNpQtPPK612XLeBXLLb6kgUZJYESBhuY4d8SqXiCCjBUPDUsacjSDWNWoE8qiwzBLNjZ4adpm",
  "key23": "5NvkKod5YqzaNMGJDwjep7B7SRMx5vsx2UPddco5zaNNTfy3g7vZa28TWWxFcbEhR3sEr3TGUN6VmoKyEB9B3w8E",
  "key24": "2Na9Z4kXp4mBEJRtM562b8vLkLZQ9xfJNCkYXZAuYCefCu5RFqGwADifEc7XBDyAn42iNK5AEzTgH28xuNxHu8jf",
  "key25": "4jZZmfUEHGpiNA71eRjGwxozm4WBWpxv9GG5DtBYgrfzkaGbMyAHu35yJww47rzipsmjoTXtxzn4B6obz8esoef4",
  "key26": "k4EMVEazfpJbAgfPd86KoSMeLcJPcLBD5uwd36t7vBmACmNGtnzZJARyLpGYLR9iatV2D6jJuqjGsnsieNuMrYn",
  "key27": "4Nxeyr6GKh4bvuDTWrRU4NozLeG7xsn7nRU4Wfb1vAarpZnagSLPmSsjkqGTPkNGz2jLYvFWgdbf73CuST7Vz3bn",
  "key28": "5mrZb3Taq28GjvS9oSkU1H95TT98N6K5vCYTDQVaimSCHM9hz1a3EL3TVkh17kQn8Xio6n5Be1q2hVvNKzJEqcMn",
  "key29": "4QqJCDPpcP75aSKAftCigBYXY7bKzjPAaUyJewhgPydTaNpvA4pmRWXKsXZeCyvK52S6iR83oZJbE54sNuCe9Eoo",
  "key30": "3dmTMtttS5g9WgegA5nUk4TYraC8GEknhenchdd1qY7xCaCW4dtCfJDtSC6kGHFS9UhbwF3PasZd7bPZ6JLXK9vt",
  "key31": "63KHfvBQRVdz5BStBCg55JUsfCgMhPPVJKy5xgjsCDtkTmwNuAPHTce5F1ZQRo1uTnGz4S2KEk43NcSnUdVEFDJn",
  "key32": "XKmpGBPYGYkk9oy5KufncdfJAbikF9xA3CkQq1eyNbVtF471jxwYmfEAHfn1RGPjRUD8oS8B1JZapCDQavyRTHg",
  "key33": "4eCvGddjjpkmr5AAPPDSnotF4ySS4ME4UM5tpDaEBrutVofrXKZfBj42nBKn3BkKTM7VA7mtHmC7hUD2CFmH6sc",
  "key34": "3ZppqghtRjhEjR9sxfwaqbRZVVeiGkeWnQVX78haddqJjnXgPMR9ncnBG9UWZeUpY6rPxPUVdtAQnSak6ZjXa7WU",
  "key35": "3SGAN4PRGsdK4CANJQNpzrEV41vfdKbfLnQARGcFPCRHUrJYzA1K837bo83y8CCzokeJjoUAFgQLizrigVRa2mQA",
  "key36": "7pV71tH7xZXFJ4brY2qfJ38mhzspwBhQT24PqvbuJHCrfFxKm6oN9R4WeATtesnYm7LcW8Z8XZ6t29wjVoDE3av"
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
