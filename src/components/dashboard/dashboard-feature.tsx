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
    "2SoAEikN2fgb7oKay77RFZm6HuBTk5LSF8qZbq17U6VgWWoPAaCRekoEX5uBx7Br1MJd9EYiojKFhd8Vfia2zS1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ky9PtCdGh53A2jiBQi1n4NMtwJVedvbZ3QwZTSWfMwnNL4GnFMcfPupvxx3QZ3LWifJoDmhmP4z2RHThMyxEEFY",
  "key1": "4q8RWqX7tMTGDAfF7HnCQBNqspbpaArdryQLhatJPyEKqgTfQVQ9kEv6B441EAYq7KwDXJhnDLfZjWurqt8GFze1",
  "key2": "65rRo64bWhDDUsdVkMcvbfx4jcfPwQCwXMcwy2kmCm5oNmZRAX5pEc1wtHwrpFZoT3WLYSPSthFJfS8d3rGP7B5c",
  "key3": "4YKECYCkLnJGt3Japu1QUZGAkQjBft1dAKuxc2KjgQ8kPWJAhZ1BDbJCfQM8e5BdoQuHiWRSiJ231xZ4w8zA1fKM",
  "key4": "25aTHPN2x9TWiYeGpEqxAqAcuErcwVQvNfiBuoFYfHhZLbv9HZBjEryeuHWYt9ffkLPuK19BqH5dnu6C1v4RpcQr",
  "key5": "3Y7GYm7x2Kfjvvcsc3gaT3p9sPtHic2RX2gY48hJjAb5SxGewzMGD7jrwn5LSZweCyK1T7kvkBRMusFWBHx2dCGT",
  "key6": "2KXyt4e4Kzqo4KtiL8sHJvC9bJu3xyD3L2KPtpYHdiQb4aTB43s4XgBfKyTdirWPj9a8HtCwFfR3b71PoQ6p8kgo",
  "key7": "5SvQuH2rw2G7sZfBFJgYp4EqVYaFcGW4U9HCe8wiYCNex8obaxUfHfF3ogbt2ktzoHnCieYY8wuDK2mpY4QYJies",
  "key8": "3AgXP64f1iQqVYsqpzMaTeVoFJauAFWSSYmoA5xeU2pePs2fDL6HitSbth5M7QWQSaNunrEBaZm29S6FBPNbb4zx",
  "key9": "55Asm9qZU7EH9S6BzoTcVd3AxgQwU6QyfDp4Uh9DuqVdDxkUMXfchSyd5aRKdhD58FNvJM6dufDPYtZYwjjosw37",
  "key10": "45az1wCK3KVGq5w5gUSfsXSXEiMng6YaUzuyfph3UuhsjFhqtXGEwr5BDJG7c55Hdg2X36RAwKY2AA3Bd7y49wUV",
  "key11": "23qWNR3EV2FQXCLBMMj4Ztz67pmyjeDiLDszhrWiBTYySN7AmqNuLiEEBq3iWRZPeciuCHZLKtyQMK5nyWeP7S48",
  "key12": "3UBQTffSU2eE5c9Z9UvZjJ4EKkdQZPJYP4VRuDvsQp4kP1TMqYziKiWHvE8b34iE8bz6UCTu4WG9W2raDn7PqKZC",
  "key13": "6767APw7w5HL9QDfKc5RhMwdbFkCiMomrMSRXSp8LE5PNU4nwH8B86eFKcDPs26pTBTvb3EiU6bgHBTZ8Dpe7TrB",
  "key14": "ThtFcZv3nNohU2akTErLDJxu5cWL7NtKCfc3uTHip6vstaJqUA4HVYB3HXqrnSBTw7a4RPQ8WGtSaCGpgXCpUaM",
  "key15": "2Ehuwkb61odzueAxRFz8HRFRgtHMcmBCduUfNUztRsEqp83XrjegY5upy3FjPRtQPexkgCtYxA6ewmpo2ATU8zn9",
  "key16": "2AiLhZf8v7QQfyk2R9YiY2Qmkdamf5awqqR3HibXo2i1kjPfdYr1xNfFejdZkpzqmN3MGgQc2NmiWh8idQrsWTcn",
  "key17": "3vmtRTGDmaDBnVZ6SSajFTtLn7yvWpnKEeKsb83ZPyPg5AFPD2Ga9kTL7sVg78FqNgfQXzQByokkpLHYrR3XTMMy",
  "key18": "4YcFZku3BxSzQFSyFo5FhoR3y4qukjcmgrE7cyQnRo6U6ySfGAMxHRQgutuJMN4sT6gvvsSiqfaDxXx9PP5Ux6UY",
  "key19": "ynVxxe1DpjtVuxE19PY34dpQLpPBjgfgQyUR6RfoCHSVZEQsH9tmbBC6ZUX6nFuzA7rKCMDbamT6a63HALwin5H",
  "key20": "z8yt1c6LGCeszfP72kj2XvBLrpL8QXfbYAWoE1irjF8bJc2y4e4TmfXGendxukGfbwbkM3nQribekXNcpBwyXsA",
  "key21": "4fL4zxCqvaGQtDBExBmURDYB3WppV53SntyYRZjA8jrBfG5aasufKswPehYtoiUmdhwwxpB3BxQ3DSyPL1VZiPJG",
  "key22": "qGnSQ4mh531pJecp78tQ8pqeFnzuhn73uJyw3L2GSj5MSVzpDpCenqap5dnS7CHBvFtxHGRB9axH3y4rPGyrSfw",
  "key23": "5rbUjuhwAKCYAvRWD1QyBbFrZ6TorDpFmKTP5sWZPs4zsdSoc44weKi3pZSgK71jDRg9aALSd6785WxK3NYBoJVL",
  "key24": "38gSmbRjZ6wq4csDFPHSrohVMSFF8oQdaZKvhqQc555jjgGRr5ZKjHRkaypM1bvjMd4NXVEcCsDyJKi9vBDojtLp",
  "key25": "4iq4U5YWnSc12uW7XH3orpja3PAjvr9ggSiXFVntbQ1rMAxgzzDvJ8m54BEVL7S1k734xWgvt5hQ5CUHsq7Hx2TT",
  "key26": "2NHb9LXKkn2LBY67Bxgm7dro86faDCzKG253YUGhCceAPNxaTdDbtckwciweXsyrJ4H2hiCzdRJbKezPMHoWJXQX",
  "key27": "Z2U28fVWyooMtBXjBrwGNojcDAmRP3xmdXhtNyC67C5JXPJLYSViMPaBZRizsy1Cy9fYmGBtancPgnbV1Jt51WD",
  "key28": "5A5jepcsjdSh8BZrfDm2Vuq7UA2KztPridUKAaJoHFVGHPKPBDxyFFuxMsMVg6RpRS7aQhDEZ9WEfxEGeKJu4R9h",
  "key29": "5sq2VoRuz3RYwbSKoVFJ8Un1kM3ELXF6Hj8977QaBhWJwCagUVR8sDk5wii9LqXwStJ4XQJELW83uPGDEQoBjTJd"
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
