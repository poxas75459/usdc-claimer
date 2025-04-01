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
    "4MWn5WsCBnEokuEQzXUUeCuiafiYg9UicdzFZNnL2skDGv3R6MNpKVu1Mk2r7YUV1CmZsWhtSA2Lm1Cx9Z1MRSNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLH2SWYFpA4qzWEBdo4o2L54YaN47jgMgguNBSEaLKjFk6ffTozbmZnQt26sQKgfRZhHF4YrACn5BTqqpQP3dUB",
  "key1": "2nmskriWrJuuauCWqhJntRuN28eWcHDKs8j2xaHWXnnuv3MTLxmKceLt6J2SQXL1yKdjeH26LyjUDCEXAKn3zeXW",
  "key2": "4M9fhHnTKWUYN4yRhDHyA2Fn325EYVyYRgHany6t9aC1vn3p9fa6y2sk4TPXYcnABriSo3Kr5aV5fnBCRyhBbG2Z",
  "key3": "2sPg7f9PK6UCJ21kLv8Ata7y8Fmz7j3Dy88mJMUPJVPJFaYJm77RiG3fNYHWzzGVRPgBuPoWx3QEodPzFYaKEnzs",
  "key4": "22L4x5wDZ8j18aCwja5jX1ahMrQpqRkAoJNaVUp2aZZNMpq5kUt1CGboW1jrYGueyYTa8gRwt9HbDfXCEa3MVzth",
  "key5": "38DvYFY2qEf65akKwxAC8Yqx4ffgiavUG8rLrPUFsoeHHoGubjStvHh1hUMsa9hNuix1gkZQeWoZ7jzWEE4MqneB",
  "key6": "2xn6pWvfQjaKPnAiDjAfWcE7PibuGNv383exjsn3qWoD4M44WiE1t5eHGFdopSVDFWigTSKnfbA7xCLHps5Tc6Fb",
  "key7": "5Nit2vmHCjp88xPUFkRs96nDZGAyUfMUwzE8pY9J7kcJKgsPFJLtVdEZ7iyY1Uuctd2MCis6QiDkrY2c9YEsiz3p",
  "key8": "4N1bEoCTkzL9etJwKCwsPjegZ5VxxaAMxzy8mLQBpMUGhubwnTeJcKShVXJKAZLFvfExXLe4UkrA7CFtWkqr1ff1",
  "key9": "KqKuDgkhvwn5HDpMrXHeAenQ812vTMNet2AZnWGb2gc1suoqSrnv3YKJc7BQutYJWpVhy4tuLFNZBs6ezm97zNk",
  "key10": "4yaoJHvq7pQi48ojF1UTCibvk4vgte3miFeT5rNBmtMbk3AzYTUS4E3rjT9dCgoHXwhdxwJ81qi35PnCbw36xnMe",
  "key11": "3AJFvN7tZQoqZzjhu2aFa52UMM9qymjew4vXYEpxRYeMf9Fh5imMsZLUwVRMuNJjt9fPat7jEx7yBW4mW5ewXATS",
  "key12": "3dXwjrcSvg3jW79QBX4TAtRkX2P1wHkDftbYhRrXuFUUhQaE5YdyAxnt5eCwpYifkgUuQdoYrbFAPWPFryhk2V2v",
  "key13": "5vPuPb1D28ffoe2tGRTdfiVgvTKDVraJXvWnJeAWz4bvA6ybJQzDkhckdJiJ9C9rvwPrDgP4gVPdSyXvHridtEdy",
  "key14": "3VVkcELuth5rba52FBJ4sKWVdKdt3Z8eDNvdqPw3pSQhfki25be85S5mjXfZWguMm9xMYeueA6DmHgiKxoB1g63i",
  "key15": "3cBvumNNwfnem8WpV4VeRHryAdMRFKBRx8cVm4cAqH6LKiyWFgJNYD918Gyx6JuLSsUFMBFDsuZDLerEULFmJWyB",
  "key16": "5Q6RtJGAqvMZSyqJ26Rbr2krMa1LvTuSbTkY5kfwGdTXYVcyYz67KaacGUwwSf86g3qLeCREPaeycpMMDoxiEcot",
  "key17": "NqyCPK8rPWuEz8SNmsVqr287ZFjkoJaZ6dgrydm5Uv9jaoEpzFBxWnY7o2K6shosbcP6583qdd1PETCvWnWCWDG",
  "key18": "RGqePvDivL5xZBk263guZ1cXR1BCLQ8Rf3Shi4EfhDPWSpusi1jsHU1mKCvm9bmR2ihV8T1WqrVGRWTyvgJUbYB",
  "key19": "2H1gppDhVhkActnYpt5QpVEASYCga6R2n7iEgKwdiQsyyfPzmpcXHU8j6gLgHov7WEaC8dSRnoYoQYhtBjiXcLKL",
  "key20": "3PnxKa3jgUnMYu771EJDiEMvpPMtD1SHPN3dgoDpgYdHXTWD1MifSFpzq2Vf64xnyYrvCPHx8P6xCQj6uMN2HvYm",
  "key21": "4wqkjbHhteDuog4Q3A59ypcn5BazQ1yK9feT9WcdGfWoaUpFJAqjtJsRMMNr8zSzUVRFF7sRmvuenB8VkC2o49cG",
  "key22": "ze8rtRUZCyXb8oChrqogHQnnNGuqWU7XS2GM5kaWaQpjRnBjhpwBmy92Lao45idLeN18TbVoiVs6q5fxfMVG6d4",
  "key23": "3dd4522HRaEmwLrrXQsw2fQjNkPQtXGP9tSdjYk5tgkz1EKdh8KbRjFoAStxpCgrN4MvwUQaU1H5hJreoLvbX76M",
  "key24": "eroyBWU1gkz8nxNRfmiE64fesKDDnStpdZ49J2jiwPrk2kCLEth8ehv66NKAC8JFSyoPwUMx59XmFhE5CepieCb",
  "key25": "3X5rfaTyraTf5Xj1AY8uGhQRBGioXyjMw4DeQdUuGh9da6EjHmosVr4gpTzdwbeL1f1DHBg5GLWDUYbhvRbBy4zU",
  "key26": "5DmaTfBQFUS4EroipPRsuzZrowtEKcrWzATfYe1u1gJrovSeevSXKw8SaVygkAVQXnMAmwhD3WhdFLTUK7qEdKfU",
  "key27": "2EteynD7nSNAwxkdCCmhce2rumTibgij3nsy43neoPNhdbDYdrXA3r1tsgiKCXtuNbwgkMWBXdJxbtkFcesETKqe",
  "key28": "5QduTeonDegxoqXYSUT3iZKmBewsAUTezZVpK8QcGSGCgpCbvrepVM3H2UV6uSdH51LkDXDJjaJpjoxLtahMPAeW",
  "key29": "4X2wFSzi8Dzx1NAE2ReoVUyVtHw99MfY1TuawNtWqc65zyuyyzcpK53zZsUiQPgHfyw6DG6QtYwfXSWkmu1jSNXi",
  "key30": "6kYbmj1ePJwZdDaureaVc8UfE7YCM92dTGqpggBXZbMu3SEk3m1yyM4cQPDyVGUTndBvmAKgucERVaECN1bnhwj",
  "key31": "4GnfNKJv7vu3F2uhdWMPmJsCiQKC7jjuXLLEshPVVkgFzkWDzVCCSU2DrbNuXqQkuRVoHKXphwTJaCr42gAXxzz3"
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
