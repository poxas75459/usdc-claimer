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
    "4VEps7ijAsKz1iJA73a4HRag5QetAgccmnfW3WJGgbet5RNbNMcyCPiPKpT6ibmSazZ94R33iBE9LPTrkwwK7EGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCZs28hHyeKEJ8L7qQx2gU3cR59DCqtngs3GDKLuBm3kkjETQnMwTa9Ys7yKo93pT8MaeMAGAc39Y83ZqMn6F19",
  "key1": "3Lk6MSW1DcWyxvVkJq5XRQGxN6HwsypsghFE9RdDCbpRvz97rYBk1PX1hN7Wdi6Ezh8WRcgmFiW54EA11M1oniKP",
  "key2": "5RwJ2UyfRoTHptLtnqYWf7ewPXMmeQQUajp58HhZYseiKZF5U9wdYFeMGRjBpqFDqT2k3HhW2RW6c5ABBZhVp4r6",
  "key3": "5URx6LDV3AA32YhzfctNUzju7tNepnr6GyGx7vcoAhVmngMNNNumtcGLV2A41bmubMvKABdjxF3WpJWcdyMW3D1g",
  "key4": "314HzHfFwTs4fRzCdxVPW6rtTvfcFiaeFh8ZKiawwT2H4uWqUmMrKHjqkLRq3hiEyP1MxL1NT6pgUgHhrSyooBGG",
  "key5": "5pk8im68hkwnfyZonR6XqmzHcpFGyzposyFa1USEps515zcDNvadMWL3Rra3qoMjJfv87Scb1wtCXfZ1CjCC8YM2",
  "key6": "5rDELp46BScKuG6W7gJjMnuHh4PqQtupgUhsM8ARuFvConp8ccfBFEVReqE6bmNp1FUSw5CLtTLSvaT6Hvj4pW9h",
  "key7": "59e5AEDnywjxFqaEfA2v8KWsfjQDJ2LGMncJjMSb3pudBJmAHaNqnE69jM2LC4wyjRFQgJyX58mDVVVG6yNbsR2t",
  "key8": "3GjquA15kGhef632QxgC7deZyVVmLmcCzV9FgP2zLU5xA793YXx91K4JTxFdrP6uRHwq7Py6xPY7Ebar71m4qhxK",
  "key9": "5Q6cv7sWtJDzECniKCDovwBmyPoaLChP9sjNqW5Ezi68jQ4sLpU9PuU3EYa2VJuBDy5hnzDEjgMt7nwL8VYVxX7E",
  "key10": "5WWnGuHQedaTpqtauSrKYSiMFvJAmBqvu9Ac65R4N19ZGQc5rAoBToD4pcRR4QLe18GBtfBFfYM2EAGNQzR2x4ZX",
  "key11": "4d2bVJ26uTVnjk2C4K74b8Jg6AcHAsajNmrGyQcippVAWeAenF9otDFzBkr2XFrQAgzMojrf4fhn8L7S2CAN6amu",
  "key12": "5Eamg9GDFLA3ixVBtYTRW2V7qMEuuapi5fthp6LModFa3UPowU66EvxGfobgoKz4LiSNHEAQ2B9d3CyUyLAjJUjT",
  "key13": "3R3uVebxw5BYGdZGm9crwYbzibeRRoxQtEvUdC91eSAGHSeVdBV7Fv65AuCWdK9tLqwctsgZ7jkwkkg4rYx2v3Vs",
  "key14": "4L2LGhmYtr9E4V9f1kN2erYwL3KRfHZweBNWhFqJxLhT3X4BecMWQzcd7gZ1PAJrbpjGNqvSXVynHqQRniHDXeF7",
  "key15": "5hGmVaNXLSiUokjBtdf2TDMWjs5Jk3sRXrGD29jQsoandvqptnDUH23wnycXAwMZ9ht5Kc1qCPAZXGxHpoLpADit",
  "key16": "4zT6UFTsybGu1TQxcgjhFixauWh7kVTLsB21G7Wk8jK4j6cRxTmZSA4dj4aeVXGWhJR9Veoq84c9ykJ5LsciHJMM",
  "key17": "3LKEhwRxMR421Vy4tCzNnPMWs6SB4mToT4hr9LSrvnxCG3EfP6Yifyw9tWvhpVHtxd9Fkx8H1CEvbJeAYNCfcMFf",
  "key18": "4eZ48J1U71UrgH61Rz8xL1uEe93tBH6XPspkjR7fDkgUW39iS3tk75eLq4CYKaUvCBT11A8A5YDm4F2edzcEQ1EA",
  "key19": "4BXDkyJ5mFTzgCa3L4xTBny4YetkPDSBdNPckqLtFJW97vbxGjqa6ppcDpZj1xxGwvukybMC76UJ7WGzfB4FW7HG",
  "key20": "2YQHwSnbALdwq3KNyiy855Fnz1KSYT9QCP6zkAxS8irmEdKCHhGWvW372m4w9gJArkdXTSFGY6jVERzFxPyjTqN8",
  "key21": "22v2N5FJ67M156o5www8QDVrVL4k8VSSNbKvpwN9zu6oXgNqmq1Cv954d6tQQKbbkUPc89Ty1qRLCS4xyw9xGCJb",
  "key22": "64m3deSWnAZgpdV3VnMAkVQGraf1o4bhKw9SxZrouAZUvJQrZNrvkS6j4fEgcHKrA5zm9M1YD8QETVnNgVThTpPX",
  "key23": "3o3gRqTih9xUUiP2qu6sxpL1t1zdSkXu2ZNN1y88VMAkaVVA3oT1km7s48YtdLZ17GL9bxUxVuejVV2z3cDdJ7pV",
  "key24": "64HpNXqNfCuMSrBxFgXHJAoz39A55F7TRoV2b7WpYZyezBo6JF5Say1AWGX98hUmCtSLP5PzWFtLKAfwRs6Ufjv2",
  "key25": "3XVmTdup3c7uxPPeBJpfTqGgi6sXEEQJR7iyBdnYARxZ6cjrHBa8KNUPJqAXndVEUg8URR9sRpQhQoBzNewaaCbU",
  "key26": "5JmY8iEJ3JZzQLj5fosjoa5vBE6CAwUaBPo1GsuxbakyjGTBJZedjAbJozYBWAu3cE2J613c3ptsdFqSF8KY6xTR",
  "key27": "5L2FM7uim3TwsXvKon8JP4fQopy8yrFU5f6caafe5iNQSkHQLduG6r1L8yxKri6kPmWi76EGXxrfBcZHCLpUWfhJ"
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
