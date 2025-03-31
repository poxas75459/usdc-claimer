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
    "5TGGpwjMFHCpogZmLQu87bhqFrdaUrxguqvGDUPq1TvpvW8Qb2fUKeguJbDxavQonAyw8fXajXAYUXqaVbhMrt1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umxzD4dfrT5SjWUBU4RXQmmze4QsGwjLHeNaJFFtbRm7DMrLvNw1wiuTKSGcfw8qsDGEhCotcgdwkfiYNBCcHXr",
  "key1": "5nLxHA7XsB7dX2RSxziPvVeqCEgiuo5N1haoQTSnSRZ4wy6CvGDUxMdZ9pqRyjUC9mYFDUFUSxW9DuCNnTeEAMn8",
  "key2": "3USdSfwok7BrNfQUWaGLz4D7X6sPqi8HhcshWpGnksFwoPNjSjz2uLGbzwFWyctW3WBwEf2BYYfE2XB2hbok49b4",
  "key3": "43bERwJCo6Cn7PZF52ahpmHTb4AkZMkNJavMQfRLjd46k4QHtSCCAckEz2SnnsDHLx9o8r4ci4LjCJTucan7tsiQ",
  "key4": "4yWXvTmnNXqDfV8SMtCCRWK1V4Su94sFoLTQqYCboG8kqgybNH6aNG1TuFvJSdYSFKwwuUUeQUERdYQxPmEbB3N9",
  "key5": "Rmw7nVtEbW1amRfJF9tYYMstFJqkh1adAE7NjPnyA6SKxaxcc2jKKVB74jzovhVEzAL9NMzAD7ZnECMVKGCKJt2",
  "key6": "5voAP7PHNwtX1CDx7uip1QPa2pnHsexMezd3coPqXdpKUgpEAMCJThpgY7WB8QEmKKQTZyCdAzayWawVvuxwdbDP",
  "key7": "2Qar6MeweNuaUbTnZ1bKvm5SgXHfLYNZn3W2FBUi6JUtHwszx1J4uiQ6Q4hZPNV7Lj9jL4sSSyPe6jA8YspYf4py",
  "key8": "qFyZExH9FTgpZvV2hmHw4Vw2qf53fUuTfLNkedYztVN3Wm4ua4Hv2CeWhkGKhDrHsm8w4W2Y8EMsscdNwR8KRJj",
  "key9": "3STxuyhMDeoUKD1cQsU82ihm571m7PrFkcUYxV3GtG7jrJhbVW7KNrVtYTaDicN5SXvS954ifKVL5QRvYSoh89kH",
  "key10": "5jEZBy1RsZ6TH3wfLpMBLN2RWpYkvgDUyjLo2RMZ2Cx37HRYWb461921tKSE2g5BZkPtQpcN1yu1iq3ZhZXUMBXf",
  "key11": "5w38ogoiVnPKambg61ephirAct1RkTmT2WdvN2BfzG1R69xykFfr7Qd4qE3XLcbHYDXC7HqeAQYpDqvReFBJ45nN",
  "key12": "4ihFQf9x7Pm3r7Uj5rMxjMNZpaiiwPBkvDnei3F2eR51m4xWH9TWF42FAkXz16CPAKAXqQwHxY7HKbv4Lz1EDzmL",
  "key13": "3ngF1fUvjjwKyLHEYo8VSoBnJEJCVA37iWAy6oBKaJkzQikfeMjrwBRGD9gXhqQegQkcEUB5aR3rw2Ro9Cb61n2f",
  "key14": "2jZApPmPfrveRwvyvGQjr64tcMP9G7RZANBunTbrXZh5kU4aHvpc1QSXEGyT4tocGXar1zkgVxgiC7qbRydBdaGL",
  "key15": "3F369bVnbwGnf3sB1KV3u8jxkqqKCX3n5QiR6PkQiqZkkwQJE3RMsdYGAyR9KD8MYyHz7gy3cTEer6sG32cJh8MB",
  "key16": "52TiQfeCZ9ryEDbhVnohKLDgXCbiJSBmnyBthrDNKDvnjVBZpjFmhKy9gNbE1GYurA1v5MjFPWx6PE784vKruCFw",
  "key17": "P2jggwZHNXskfxj9GbGJTCNu5fBRD5ExudxXoQ6wS1K2yveeuhXkJYSr5y9CTF332oPCjtFWWqMuqTUc4ZwyC83",
  "key18": "3s5bJX5RugySENJcAr2ata3nX9oeSWpE9eLibH2bhVwfduu7nbFFTJHLa6sNDbCyHhJWfqCa3ERpY48kKdDRC76z",
  "key19": "22gE82rSugZAALTx7sJZ1oWcZ9KYhMtjZDdPD5xqdKs68dui35kMfHnJkCoX8ft9zT5W4tb74EEsghd66Y3pxg1u",
  "key20": "m9hJ9aCzWXMnb6R8Sz2QrvSHauLpka2aTZT1GxJn9cyvywRHzo4b6HD1K87wgFftmatooDRfE9BVquCN8hpfExG",
  "key21": "1Pzo8aDv9ZUyX4yqTpwHKuzmKinN5TJqz1acD7xSJanURviNJ9xUCstjKHv7WDHECnPWxoAXgsoVz1txyF3q49K",
  "key22": "2LjhabZj9u6FEqWkhA6FYZtSerBFEAJsqwzBdWfo9RtLFCTsnLFPZTiz7M97fpEwJJJ6kPsrApqugomukoBYJ8fh",
  "key23": "4gem6azrC5C59dTDaBuYZWBErcFgCBYJxNVju5cRbea4YLCYebDiCX4KJ4rjpNYNcxCqjWbwQxWtutsAVGKFGhGa",
  "key24": "2TjGb4Cim5vNmhBMFFHa8vFPAPgStaiCKxqKAeBZSWaHUUYfwFVWuk7DR4u3nroHw4mUUcnsbXM6ix2f11PVAzxJ",
  "key25": "4kN2GJkmpxHTXnD1wwxRh8N2UMxxBQBYP3KFrVemXYQALehLf4rTjKq3rEQjGDpDukUxSMGNtFSvrTujotfZjvd6",
  "key26": "4LpT5DHgtFfW7Z3Vnqf13M9apLZirNycWNs9hnwm5b5YjySa85wKFANAY8pcdhRsK8LVKW5UbBmDJPiTbk4FfXqY",
  "key27": "618n1zmdNawXk8wpu6bVsjTYY3KyQuyeiKU9RJ6vCZztDdv9SiEEJK2XpMdZqgK2QCmeZfSyyuMq5e1f7mBcJy4B",
  "key28": "2VMVJ29PWdScxbhsUFBvBEHoH19zVL43WhxGmygdHyxYvWt9qBUVS4HHXukJmSrtmLmLp8TSTJo2P68R9KmcYgmf",
  "key29": "QmKqz4xX3R3hextWUcRFEKCjbMvNncooZVKBhoxUsZfrmAWgEikJHY2sBdhuxbU91XrX63NshcNi2LS3gd3o929",
  "key30": "2qahqVeohuYuXJVsXyKqxoXLsyVn3PiuBvFSpmabfiYrzMux9HdsaK9VyQAiBNSxiBTJGvo8WiPk2opDepBLV8XA",
  "key31": "ozVHAfJ7scnskC41xFpKxRWLGAxUFc3RSwK6Arr6QVzTsq4WmdJs37PQ4ef5kGSpq5G7ZrrUSB5ETHZZ1jkNMDy",
  "key32": "65eh2ojoMriaUKAmYKMU6DVYSCvbkHk6Kaj8KyoGXTZqjSK9nC9nfNkjrh8P5K9QHqgfLsdxoim67s9MYfUea7sS",
  "key33": "5RpEhh42dAkgVBLEgKbbjm1SzHZYbB7nHKLEisa2RHGiGVMkEicmiyAvxBVVKa9U4v88z9XGKShKGizA7fVMhckK",
  "key34": "2CsFo4TxdQNtrmwmWswUPupfkMYa2pLBDTvXZYEByyekgkCRuwX4qiyjXxi45PKummm3xcQwAHQt8Z47AQRgpsEU",
  "key35": "58kofXK4iZjJMTeT2KnStqcif6BkiCujTo2eGPyA3BAVG2jjZykfV6maYsNVWwdWqKPJ2Uz2wbFqiPnCqbFD5dEW",
  "key36": "2xVXFWLUrc8kXjJXbCvtmQk6kFBUPohL6ua3SdiRosRyKX8N58GEDGepmybdFukwvvd5yTPhUMZMwgm8y8qCLcMV",
  "key37": "4JDUpNwNJJgnF3WHLcvN9qvTT1oMj2yCXcLfJh6BNEBS8JUQ6mi8x5PGfwGKiqG8kjjRBdNF1GjvEB565d2jfxzj",
  "key38": "4Jd4minMzFfGaaD3oTCAo1VPemaHATiePQi7pHdJbRZnAupwuXJn7kzCVYfUEL24txfeqPLvnNnF4uvG9JTg7g9U",
  "key39": "4si6V2Kt5DxhUmBuwv43rzyTGBicL48Vpe9Ze3FNDyP2EbBABzw3vQfhxDNeEvc1X5hSXhLanWb3W4VakbbjpnK3",
  "key40": "3EUASDAfhLKrs8Sz4QmjYorNZhToKskiN3eaitSbwpQwjBY6V5GWBzqa67qUKsvZMrnR3YFoHvHi3ef7tBauzL9c",
  "key41": "2sYhKhXXzNwk6jPCPt7x4KpoeZXbpip71d4J4U7j8nZrCLGzPr8fGCb7m1XiMfut4qpUTRHR7fRWMuE3orCSLdyK",
  "key42": "3TqcQodT2PgYJkvn5PW2TR2fK89k4aXMgrW8PdzLoQog5R6d4dHUaY5CDZZnYvWCWNa8kNt7MWg7CURcG6ieC3js"
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
