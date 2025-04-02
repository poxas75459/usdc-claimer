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
    "4Gvm9PoCJEYhWqVWxa9Zqr3mvPB7WEnosmgW3T3ks8rAUAH1vfwR8nMdbxAFPABa5Ly24jUHfTePcYX2T2YWr5Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7KWCTByR2zo93MGnmwWQ1Y1tdHnvUTHLPDhAXHhx38ChTtvmiwEmXG1YN6nq7kTaPVh6SrStML1c3sPb5NXygg",
  "key1": "R5UZsbEPAG8Wwdy4gY24boPMhYRu6a2AfsGFfMKwGd17Yzb6c6UEUnW78JsWCMh5DgfAVanLznoLKanHTxGq8KZ",
  "key2": "416THPB1CktAqBYiQkJdV2xxgLbrCnDrVELADKyhum86jP9QvbY5aDAM3H4sY91jWQa8H76VTkWBrum4hBQMUztP",
  "key3": "4ywLtZVzUCzEZUM77MCS2kmcpFd3nxfw78hDSPoDwXY61KMvvT51q3KmAUtwmvnbgWg9xHnMpQrLRAcApBzw6TJR",
  "key4": "39C7ooqYT7GnxY2DYgmdyFrejod9hasKQ5vnABmmsbpdejqk2gA9dZf68LEZxmETQUCc79QLHDpoecnmMkgMMc3t",
  "key5": "124xYuRARJGhEfvEx7AC9449WCEvhZ2HPG5xDFUGdVPhQmb1LDBiGnQctVDGWBgJhHm7YnhiuAUs4BXE4ciMcEEQ",
  "key6": "2SYMsJnhm3YBVUKrij1z8VRcwyfX6veozJRADridy2NbtSVWwusxnN87YhDvuPYgtiRHVfQTtHcuSvvyd3CHMHRX",
  "key7": "4yKnH3Jugx6TefvZtBXFY64AbEEj8URgX2knWgddNHJHSx57je1ZtiekwNPdvkfGcseG62EiZ66AZLTq2SomZ5T1",
  "key8": "5S32nxyQNwSLPLJ2Bza5d4Yk2CB6woPoETp1Kxa8HSt8y5VNWKPsh5mi3WRC1P3NZfg8X8wVsFU6PrWH4ynigLy4",
  "key9": "yK19Df9HWjmaH6P5W3QpVMH43dfsGEMoCGNo3zDp2CQap5buYrmQeHm1qG4Pcb1VivU9tosC8EDCUYvdAhFLHFs",
  "key10": "4eUQTVgnqUkFDA1zxyLcB6uA8N8ZfgVefnbm9LQ1dVhb9tTwL7ahRJ4fNkh6X21Rk7rns6DdALEMQP1RZLZ1nXh7",
  "key11": "5qbkNMeYoBRfj7M1N684KbZDTdTxjynxVchWSodA31ocoP2sw4cBsZ1MwTnPSzkRVTdN89qvQUqScGwV5Q6NB4zH",
  "key12": "UAaD3zCMNbqMvFppd4qtoieAkGy8UtnzG9GHkehTiSqeXqhVQogvQWiZEEYZjVDit15RAZHWfw2Rcriv32UCbvL",
  "key13": "3dqWy35KAJDNm99FHkujc6U25kXvJ5PAqMBNY9EZqeVTDEwszBxrkttCQFwyVcLc4RSBdJ6PhcYinRwVY2aWUzqk",
  "key14": "3fWR9mUW5tFBWMAB631wMdkHgY884qG6EXLsQgoHBh1jbPV8MVNHftyxkDrTHapBX2SSbje1YbSPQFCmpSqiNVVc",
  "key15": "2b18LoQAWhUf1gNwFkv4yVaveJxZQUfVFcAZSuRx8W5orUXJzmRkAwGh55xRbhtbfM6RgLEoMfKkHHWZQ5HoAb54",
  "key16": "zqK81BWLTGrU2vstsG1KBSqPpcf9NAfV4CGxkQj5kRLmXpD572857wkNngtQNLLzDfVEDMj3ts57ocjruHrC1y7",
  "key17": "2RdxknU3hFDC4JQSVdKzV6USPTKMCVpF2TQp9o59VZokrBbEtETxwux41KXzD7AyR4rh8YX4RK9wTz2xPYkv6qWP",
  "key18": "67UajFqByTfDa8EuXd3aqr8UhENudhK1CnnniNoRaQyvDbPdqzuPeVka5xdx665AiwN3dDHzq3W6u8YmvbPkxU2x",
  "key19": "51Znwg5ZMmGSut2LpPyLvwgkA1EMrD3CmiN1XRGtdYQDcc7CA11rafFnhcA2YXiQtfMJJAtuivJfUpXpCFB2xoQN",
  "key20": "2XWuHh9YCkcHWWsM3gGm1YoEmAdDuzBEZjCjk5aCwYsLonb8WE2xVwEDRzv7L4nAo7aHju7wNHAmTbwT8rW9NUHX",
  "key21": "5dzCKh2N9PPQxuWb3Ew2MoqgXWDxNevew82RXZXvc6hfEWBQTyLGBgEvmQyz2Ha3636xgSQtoZQKcHoVSZfwXexq",
  "key22": "4Qnn5fWa8gJQwLbPy52eeRzH29TFT111cN431SbaZu4gomm2BkMLBW5hnxFbTDXj3y4huhGxs7F1VzPxEQE6s3yv",
  "key23": "2vLHLkWFU4K1Y7oJCyjfZdHKmjeDyuJqbvo5hqQ3LCSH8hALx2G3HPj9zHPobgaLvZZcdQZrWPLWsJsH6y6aZRMx",
  "key24": "3kxszYK32hPNC5WQp5WiAWjD7oSG2uVSBdGKhCG9AqXd74SxqAkcwBq5p4kH7xAgLS3SB6Z2dSZcw91uyzyXqb1H",
  "key25": "36WZyrkQrS2vpxJ2n79dfpZA5Hg6r58PaczUrisWayzsDou1KbyBhN68ReMUgK7b8xFiBYbn9mBGMde2kzbUYdtv",
  "key26": "w7QEZgQPCeh5GT1RR3AF2gy6YWPujG5aZA9FyseLKGkLvqadw5tjrwndD2zzTv8a9ZqdH7vNdATTMLQ7Mvo4sej",
  "key27": "3DxYopMKkZhyq1do5ov8NCy5ubmyst3PwaDdLjJ9omMZ8kt8Z4EVCTT861XUAQctDdwW9FTpg5CJGbG9B52VVQju",
  "key28": "5hXJ35ZK386wzHb9zqbTNDo8S8xkR1bveghqbjcAeS8cdokif264iscnDAcYYu9cva45Mqjet5uhwfvAJE3egVc9",
  "key29": "sRFL11Q8oohFTM6yRqTKgFLoWhXLXAujumzZgSYtYtk91hjX9zsL4Z6MsceMpa7pWZig7WLNHSBKL68uGGh6y1C",
  "key30": "3GX4zizGXBpTvzpw5j8VBj9adebnwv3DxPi99ZjqHFGftcUrASq2c7AMzXh5mud6hysu1afxVgGzKbaWHDNgVNQ8",
  "key31": "2T3pyw4WyoCpga7Km8jyYqGiFkcpKa4s1NBbZHdXhJvucYE7mcSMPutBjrH58rrXLa3pvBKKH3DpKkuJsuyncbdi",
  "key32": "2zUv3EpyUHuYT6zEQD8gbzeVNTe3igtMkgSo28KvbtKaga6rZxiqSeNdw8EEc9XxudkXV5iVMjYGL3xTwpnHYJ7t",
  "key33": "4whbE8FGWU55fftFoSbyYmWqSoVm38Y94cRZ6s3BuZwxtAk1Ne1Fwj5ctVWGYaWoHny4YCmmJoQtpdVM5Chimjzw"
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
