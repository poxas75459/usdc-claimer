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
    "CAYYfsTbQ4irfHLQSHMQ9iRbQvEzxSPDdz9U48fLbiw1ksPdoTMxcor8meYW46HXKWN1XJbw81q2Wo7kL5rnkhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRfeWmWs1Mhv5Sbga9uQPmL3qMiZRbjoz5GuDPedpYHJxjkXhZepZC2tk9ajuy9mED5zbPchEzKhVLxvUtyJqDk",
  "key1": "2Ju64yS8To2mZBpu55eiEr2FJUMF9m6GGjy5WB224eA3u7QL7BgXK8xpoAn8Xoa8fRXXTrQgVhD6NVW2JzsvCSKk",
  "key2": "3imPE26d98QHUk6k15fCWuMjfSTjKF8GdHA32ANe4cGfowqrqPYWtSGFTKWpL1rQyJR5KRLZ6bbTxa6Zwy4WJsco",
  "key3": "2vK6RgoCL9pW637BRzaWmx1TDtXSSE2YxUTC1V9n9yfawtYEVuZMwKAgq9cPRhUSGaxNaxN5XhFdVbCMPZLndgxV",
  "key4": "5cqgWa2QBFsWQcooVeia3bQHZYd2H2F7Rxb6ePNMdJwu2xfUmjDopZejddyMuKZ4Ze4RLFNDoC2wjQvUBR2F5eKf",
  "key5": "5VZi9AdwSDSaN5YVnEnDbTTNAdNbNSm5pMzTDrPsN6T43Kioo966kuvjtYUFmpbWi8ra7uVUUF1Nh4UWU9DBaZNT",
  "key6": "jsrTUSJmEHahMq1fntBJRhXKrjMx4Z8iRS2zh9ExfoymEqThXt9ow1vdpAnwtaypaMpP8NyZWfDQankYCDCebNa",
  "key7": "cw1Paqrj2r49pgJMYC1p1XRgA5umUrU76eChRiZiUkEPcGpSxoWsdcJASr3Pqv2anqowQm9HyF21FZQj41ZTfxM",
  "key8": "4874CoujjLaPLF7JAAHrp9vbi8QtQiEY7tfrFRGNHP7hWsCzNadZSNtnTex3EE991Qr7Tzs4dXesUkemgonYX4rF",
  "key9": "3bQWMV5xRPKWwDy23TCxwhskiVnZyZyWVuXM9zU3XemnKq7fo9jzTenUEMS42mFZhSLfhp4ib5C7EtVxiYYiuajV",
  "key10": "3r9WYFmiEuDGed7CGFigvLsmdLC28f3EvYkChBnTMhKtVgboaFGKCj3ApdqJ8KdPCXt4dgkB5FgsuchpGzJSpujr",
  "key11": "2Z4Fi3SGYn1sqjnYurHnKANXLNxxmjxNX7u2QfrafuMwoBfpfDLUTADtt3aWiKkVELkhjVer5HTjxyuJXaUiq6px",
  "key12": "44uDqY9apfWUBnLiphG8Px8WRrSHudYi8uSJsjsJ3iJEnvDCJeZMH9L58HieGSeLUpzVtKNgxCmtZdrKbqKjqnz9",
  "key13": "8zKWdwFxyNVFsKkNpSjomkAWiEJGUFkVQPFrYL8BNT7U8VpPr6DsYj2E7h88WQihe1hGjzrUVQ59xtoD28mRi3A",
  "key14": "4m5aeqMkjyDtYsCo532TzQ36pmMc4QLWe2iiKfxqXpb4zjQQYSUu1ftWH6HhVJSHb2cmLK8rPukQLZ4U7MQrBPjC",
  "key15": "7NsWHYcjzH4CtbS3eFDpUA8Z1xgZRLsi2cCgPxystwmS9iwUXxX64giCns4nV97WER5UbCEuQgLMJteBq1hzjCQ",
  "key16": "3sW2prGTnS13niiNVVYiRcwHXUG1CP1peb81Ru76pYzCRb79bY7zF3f2fq2TW3mnDZDb5VUEGdPeuorErhKCtBM3",
  "key17": "5Aqqe15iWykfu5RPx3Xup2DB9ftm4SLrJ4YR8Szxu9PxTtmr5PtqfxDaWvFS9SBjg7rmx8tJGq5ZFQfmgEE68p9a",
  "key18": "4CzJt3mXeejTUVMDuJRt2N2o95SbxDS8ZNKKsyCfAR1YCEeNDkFnEA3GTbWg7wZhapQC1SM1wJVerCvzpjQBz7FG",
  "key19": "5vcn1CV8CphatNhEy8kVJmxoWzqR1CGLZLAUHPk5RcHF5MYJ2NzcSKACR9FFFf6GWaDY425CyAPGshVpaP3Zkpic",
  "key20": "5ZNtpuZaYv81U6xEbm3eGD8Dgnt54XwacSqqFnQn9rTvJbsJACpvZGpuF11mHVZzPRbk3HVE1vrjUgawzdt1yyM2",
  "key21": "3nqmdT4RmXubF18RG8kPGYwkyUWm67iqc7hEdgV1dxkzVB2pcEE6qF5UV9ZtxEfHQBd2GtpjwMaevFSiG1BybBjw",
  "key22": "2XYxdRE1LSiAkVDNvL3XHgqRqsGh9p8TUzhp21d6B5xZSHiZ1noBvTDonBPWEPsqBTNfaMrRDxcWxCjggL1wvbNR",
  "key23": "4QhtxXUBMxP7ouCs1PjdQhtV5ALrPGn7wzndaDv1NcsmzrKTvgeJiF7qMbRC8AkjEmN7y82W5UKnmt2RznwaY1dx",
  "key24": "2zHYexQxT57qTfroEPrxQtKa7AKnW5fFrDtRqWCo7CMYBxXLDDSmYQxTjK6yGxBJah2p4LiRXNaps3rhMKins5qy",
  "key25": "2mJyFacni9Ahhq2ZCCMT1TphgDxigWiMkA5NXTZMxhzk4ZuuVg25HtA5sM569LX4S7BBPNiiE46JX1Aps6T5N2B4",
  "key26": "3yPXgvA76yJ9dvhV4bntnRPvkaYGT9shJGBeuVKgR88noCnSMiBehr4e5JSs3matxt3yCpiGdcXa23PtAfegPr6P",
  "key27": "4Kx7qYTV764oFQadCZdc89bJhrjskFRa27bGU5UjGRBNEPjLvX4SWMA7t98vXXK7cciP1Tdh394EsJqiRhm25tvh",
  "key28": "4cdWS7QkjH3AJVBC7HBRJLwvT22TByUgs2HohsnMn16nQfAftapveq3pyd1r7YxodYvgMv98JJFyN2iKgybMMRxP"
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
