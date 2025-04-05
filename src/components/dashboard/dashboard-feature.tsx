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
    "63fLzBeDY5JwH9hD54AvoaVifKU4i9FuqPv6CG7GjeZrFbpae6wgX7DbEGJbX9j64JaJv67SZMx2pK7us9tgLuZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127PMBihY89HWzk65o89y3G6qTqjR3xNmbAgwqJsVdDUZGv1rVeHRRpFsLiqYxzQX1hLzZ2MGBiohEGA1SjAnqNd",
  "key1": "zNRiJ6PEAeGFkau1QTGnyHCrQ6LVckbnhVkMnrWze7j54E3wvAWwuHL6BhVUmhMURaUCL4e3jPuUNLZJTGRYtRa",
  "key2": "567Js4UP9bRhTyKoABsjGj2G4LQF35PxBiM5c6rjNUyeBatjXgJtrJraBK1qPp9mRouUpZvR5tvqozhvRRFLEGLn",
  "key3": "2EiZ4vVZq3E1ajpgbaB3bdGza6D7vvaQ1Ex1teCWjVTYdQYT3qy65dPjjo7x6aKw7NsQKTgVKxgCbrTsonrxZrsp",
  "key4": "QEfP7HjQFMuQYcRnt5qRpXmRqTjwm52EsnwkbYdPtkRqnDEJpMrznL5ACHF1ex9PxM5cSbKygovyTUFMPTsPF8j",
  "key5": "3VLVFdoqDvVPiYhvv9y1mZJkqFcX6Xkc3ds1BhaWi4Wmfw3BQq4uP68oAMoskhiJvoJYwDTJNmwyCuwZgsM4ZuFN",
  "key6": "GscCyJLSFf49KVYAP5AY8YW52idtQmytQWe8cfegvcUMQgyzpvJ7NQLSWf5mVbutBTND7VeCqaES2mdytHrV211",
  "key7": "3ASPcVFMBXP8jDxF2gEFb1tqURu74D2daovX9No1uK1panSxxnMHQgved475aHHmvjpezeYfCygHNAAntKWwp5iq",
  "key8": "5jW3uRQSwsUPkD6MP5fwihoZMJtJXbfTZSDwmZKW9BLYUrQ4o9EjQUZCEaCRJrDJXc1mvi4V1UHZzWDs8QLaLS7Q",
  "key9": "rPJbqR3UTmtLaWdNxYSfapzLroeJKxDCWHGKHiwBAB8iV9TXfGddQ276b3iLtcw7EmbLTR9pnQ5ZbUiShUYbVgV",
  "key10": "2TXNfndEttftSaUqcxH57Ykmdq9iz8uknZKFJvKWGVGDstZbvqVRR2RvcRkmSFMHmrF5J7LY5yZvtvHPRbLRgDeF",
  "key11": "4bMaF7fTMQv1CXr1xk298BYSigCX27scD73yMaVSt2mi7zesrZBCPFHHfbAR1m5f3pzPmhhG5TD8nXyuBcwLCLZ2",
  "key12": "3VDMyonQsh9S3gMymcDi8r5qYn2ff3QyC89yHapWDN71yYPJY6m86du3pcT5PUryEJqWWpY5zYmuz9q7LiH3pKgr",
  "key13": "3JQ1ro9hawdndUJ1MDhx6pCKBVatF3urkRhyvh7QLtmc2w3GZw2ua4uTWFpBuDwi9XmKqUHUEeBX8p6sQQXuUjBN",
  "key14": "3DaZvysiWSe7zShyeSBvuBB1jEsssrTnrr8r1khiwsXiMAnJrFMWVev5EeFtjZxznteKoEqneHzv9HiVuu3EAyzJ",
  "key15": "3NiKKPXZatrnSeRUGtXFizPWea2UTy8tAgugH5iuyCpfyrncsGjRB29zqNP1rirCBtvX94sXFncryV1GHqyi7qrS",
  "key16": "64u95e7Y9ZQJmoGym2oToEivpnQwnoaxeEugjxiq8omwTW2DQYrkzi4BcCNQsSem7NWueLzfNMT1GhUEeGFCmjXQ",
  "key17": "gdVRpBcPeU96K83oY5QSHLhy2nUQS9JxXXrAJVbJWyUZftUtGkrjR5XqyM16bYRvMWC4KFGRaijG1wfvVayfDQx",
  "key18": "4tATM1aB7WcrAPS68wG7dNwh3MSX3UxQsbaAqSLurdfwRKtbwsgyajGaMbqE3CXsAt1H3rTNbd7sXaSzShBvyqaY",
  "key19": "4dPjD6qAxuU4pBvnU4TLLgNVTub5nMwDi3k1NtSss9zLHmFizXCPaM1eCL7e97naWsY9hp7B5njoSWAGotyarhdW",
  "key20": "4VRY3NFQU3MtW6TCxJhhmd7sEVFPGfpauyK4cgR84HEagfBxiGPnptMxskAfAL2jaiCCtHzZv6BrMW4FqhTtMJDp",
  "key21": "4yvnJPX2cU7wjH85N4CsWUJAMVTPL5GYf9PSpNcrViGGH8VfT3dRyMaAge4xdQtMRsG2R92Drq5yZ6oHBtF1e5bh",
  "key22": "4HHNtiLuDcTKgTU7RF1PWSD2bjg1pRbmaxBBjGjEb69x4rBXbm52hqAhfLq1LkDJrSFGgEbvJmKHzA9BotgAbWL",
  "key23": "3nRgYxpYfQjKi8vsjB1ygbvAnrxF2MaUwNjFwCGW2uiVEahU23r6mmPxgtGZCGo5aaM8RLBhk7bRWnQqcEG1Jtvp",
  "key24": "2UHHfNYuzMzSB5CEYqQHT4yPsuBVQYayPsVSfutkG6qygm9yTeFRYyTnxNnG8AwsZaC6q1ncsjn41EnuXJyrdheu",
  "key25": "4byhTutmZPK4nu67UPGA7hDf67ZFBDJ5qVXKFXWTMnsGp8EUMigPFV1sGMXjAveWWfhdrUC55qtB3YzdrUVUsZH6",
  "key26": "5ycwQuaX2mm69dQZRePAqvkFPzBkAB9e4UnvA2CbDtcnJcaXSLa3L6WsPW6xFNeBi4vthR5ttoMTiEHr9ijLWZ6L",
  "key27": "44rByfArUCCZgq9QyCm7tZn3y74iShjhVy9eFQJoPY3eoqjoudk8dj9UfqRE47uNdkcH1SHB3woTbt7c8DCRVJLA",
  "key28": "2a8dgvcuNdVRZusoqXNCuKLxjj8fgvyTfQ48SvYcUcsVSxdUuFxkzym5mvumUcyv5sTcRRLFDGhe973A2cZgak1N",
  "key29": "2ipjFXAWhGeTbtu8hxYE43ng769xRPv5YghxuTzNznifTemD5GJYqyTDVNnkbeR4veH8eC7uTgeX6TpGeFsujbBT",
  "key30": "3B5QG2zwpJnbNAAVFv8YNMcozZwZrTLFiGFVbFDQbYcE8hMrjAPL4pJr3yUxViKYkEbkBWiYbzcD3B59itCiMt8v",
  "key31": "2SQZ5n2ToXd3KzCcXamEnSNhGUrURvNHq3TMwHamSFM7qZFAQB4AmSaQhmMYkXp5XddJvVHQDL1HN2PsctFUCJJw",
  "key32": "4WtEcoTDfjJzwTbs8LCRDKoc3xPKCgTxBfrfqyCu4nizeX3kbs8bP3WruFXYsJgL47XKJM2WuVoNqbqHBxMEYeMs",
  "key33": "27tDPSZkbxr56BSziA7xMmTY2gMQLKtfwPkwNn2nhjZ7dWFXuhn2u6rmsFbGi5iGKEr6i5SzLbWYL5SVVgbVV5xn",
  "key34": "4dyKCLkS3Dq1BbvoMa9cuFPM27KfcuAUgtNgtjzuj7CDSHX2sVSEBZ2zg6UtVxghHNGVk8KRBmjhrUgvp98mv9DC",
  "key35": "2exaoJRQmoqfMwUzBWRtXiNcNWM3pNSxT9sC1Pbyh67MiLSwyWi7hRZnRtcwCVdgZoCo11jgv77st8aqBJ9CHnDG",
  "key36": "eChfCRYz44gY25urnFcT7CiVLubMuCwyUEoCxkmjwQPTQPMcd1mrVZFCHZqoa4iZUkfNHV8RRgX2qigob491txN"
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
