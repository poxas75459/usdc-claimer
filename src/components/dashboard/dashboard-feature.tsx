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
    "pxtkugJpJ5aBpUQgtrQeSxkpXy5STFajb1Y2emqh4Tt4Z8UBhNNYHocaAPato4dw4fnunjux3pUHnTxTqajMk2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2stNgxWTsZq2B2WXarDuDVLukUXjkLUyVjkyVeR1yndid17iMS6q77eAQ2dJ1nUY6dzrE6aitoEJMmKbT7bLmUns",
  "key1": "qg9wsNZpNsi2r6gGsP5RmrTpydxArbKvKJTVQSwX2sQybk7gtZLHFUmLGRmGaPprNL1XFmq7n1aA8AyuAR8EkUi",
  "key2": "4BzNqp373MvfbtkPZE71rZGzr24dnijozoWivrC1Jh2U1zy1XuTnEcvZjn5J3X6Erap2pkYWK6tEG5VWAFLoX2mM",
  "key3": "44TQ24NA37i6KMiDFKBQdEj3H7TMTrL3hyQtkiNo6ZGftnhFL3kcxdaEa9jL3Q4D24QxHSML774S5Wig1jFwsCK2",
  "key4": "xWmQ4anCdJMs1bxLBsbzyf2RsPMBfCseopCoW7FnCo448HVh759dsjXN2DLDroY4MPyvdVfRvZzRjwWmNyBbVGZ",
  "key5": "5x8TWXz9mzp4i2c7sx9KJhTvPGRszEyH5Q37RFv1gVQpwzc8HxCSSTubLNmJnhikufy4LCdMjB7VyWCpj7PhtHBi",
  "key6": "5hHQa1Es3wqg6NXsDe2vPYHrLUeGVUWC3SsUtHYG1XxvaX3LtKN2LfKWhxQTdVC4GqQas1wDT81bCHBfrPKmxfBY",
  "key7": "22nSaZPMwScVJ3da3xN5xFzXFk3dGYQWxQBvNM8uv3nVaQ4aBWTiAa9xN1Mh227RdSe3znLYpqiPq6aTBpNEJ2hq",
  "key8": "4jCBjtnML8tWxRyfz6cwtej5xPa59znWrEU3GRnbHYBQBFBgdPUdf1NhqY3Z1d4xgVwfQYJmNQALyVAJXgPVyx5N",
  "key9": "2zgAnE5fKT4V7z51gLpFFtV7Vc3tKtzC4TYwuU7D7k73cY9tUGNcd5QLP85m8v1on4soV8eQJ3qqR5QQBSRVKKJ9",
  "key10": "aJcAhBw1cdwSDoxzJ4h69VYnt1KwSiykPVE7zpwsUYZw6gK4nKzLJQijtDW5doGEwgu51dAGmPfukPN15f78j3K",
  "key11": "2FddgM6fB3XXDdUhb6BqAaSz5ufvSeZVjMfZNLS3s2UmhB8k1VgUzC2VohRZhmiDQL9kFbgiViLCpC72uA8jG56j",
  "key12": "4uNryL8kZFZthtinXo5tSweEZwMQSjQxkLQ7baK6SBjs4YzkkP35tVzSCQqVoPShCEE9pb6rXtiQrJADi6WEGiGw",
  "key13": "2YdfW2L6ZGY7BNbuFVS1GLn7X4xxynAuEwGaPddviuHu8aM4NRxrHfEyAFCbdKu4qqGcszCuiWDpAkQh1iYLSWyw",
  "key14": "36K7csrrGshHgiGSiddrbMdMBHXxUESfCmHecxkvKsAAGcYLpyDR5oYQMF5sFZWBkCZKQcXHTo9s7wSDqP55sSqZ",
  "key15": "cXkg8AqYxZ5LAfjqRrwFqpGTMcmpZgsim7UYg4RSHPzySbCE1h9oA82sfx9mbSZnc8f4o4R8MWKo8hWkJtVTyM7",
  "key16": "3fXLSZ4qn49xMvvUHmTWZZY6vYcMfnHUfzRpaPUJv15CNnpejYEqiKnYTWb4EKZkwWCxGLwuGhXv5vULx9p2xJa",
  "key17": "35caV6K6iE5HBDfpEGHmMAEjpanzHHEJ28eqF1ojDtZweM8ZNeAfMAGqFubNqWtfrT1nbrdXQtyd67PhjASCj7qx",
  "key18": "4NK64j3EdaQAPh6BgGMhXnCBubCNgiFReLHd8u389qLfKFQxkzjwQfh5YoFuLCnZ9Qf75XF3DVSxGLszV8gbdzby",
  "key19": "5c9rKzpfCboTbxvPReSjaXrN1EM2nYWHNmF622MkmbYoEApLTFK6omfGRFd8cGSyyqjyEpvoVv2CTj8hDMJLtu5a",
  "key20": "5dzQXdsJY7SkzknMbUfYjn3aAgMAFGwUtB5s5icmkTGifmspRMMYuhEUmPxkCs9riVEMKmrY2PNcRCB4ek1AB5vL",
  "key21": "4n6z92XMD3vppY2hdJtHAiy5zKVoTTd7RdzawWtaCdf4T4MMBUSMHsenARnqPgbyYr9QttPNanXtUqPHoyJ6w98K",
  "key22": "46mxmoJA1pBTo52w3MPNHwW3CZkMapFYFm1ekVPphhK9yRMxaiFvnwLrmuLmurDzxQmRpMvvKDWxeZvqFy896vAp",
  "key23": "4zDSYbjxpBXbMCeJtFjDoDHZRq5DwAM5sTjuWfoP4msHjD436PrfjibapevPvAoB1pMwxmmtkoHC7G1XLeYYwk2M",
  "key24": "5m1om7tk74x2gxg1f2TpYnbhazSnh6jPzyzEt7qwNdcW1Y2hy4PMcedLvZNXKuwBMAk8AubCT22XiC9JanBz8By6",
  "key25": "5A8W8ZXVCNVYEdxJJwzNwhKxVKtauFafzEQH5cjurx6QSTTMN6DnwhV4mYUDPoNDK38gA5F1ycb54Jah5odCY6p",
  "key26": "3u749J8rU9NYCj4VX2shM9rf7owm587TUSMYsq2aPQ22jGdtVUhiCkYhmsrCiYucvq1CG62DDBC2htZbzDng4oNc",
  "key27": "ShqhsBzyni9cRRQj3uPCKpqS6Ag7tPhjPPYyHdzYBBoK7EMvXwB5cUDqPiw5rpdEUSta3bCnSBR8vh9JYDAKt6Y",
  "key28": "41F46egzYZothCZYemaSsxCsyZManXuNPqMM2DPspgMnSnXFpijY8GCDrq13uPcDUsgp2US9Pcs2ujBx7XDMwMdf",
  "key29": "wHpDMjor2UctHDDnB8HbfEWC5QSSHFDvhwrFaFwY9iyFNw94Qu1VKThYSvoUNQBz57cLKnrWxpigs1n9ghgRizj",
  "key30": "EvCPyUeEFMJntphmGXjhV3nLmXqUtU2RywqWCkbTu6GoqL1e8UkXA9yrfXpiPWJkCU92kTRxjUVdsG9AHu885HU",
  "key31": "2E3tjQPs4pdVGtCL3t8MkRySx37DSPL4ahdN5rigsB2e91vTHMo5ZVuZxbbunetKA32dPwGSrUuibRS6xi3qvifZ"
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
