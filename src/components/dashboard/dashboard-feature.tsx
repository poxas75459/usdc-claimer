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
    "4gWa5BfqiVN9KQ3nFbhmZobUyt2gJSzmtX9baEdXfWtfQ4PkZTFnzNRQbUH35pzSPPnP4RzUstYBtrmhJeG8xabz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdaxx1wVZAL2GQqRrDLj7zTrEBRpFfJWwHi3aRnHUiX9KpyirLL5Mee1bDiUJYTCrPNfMzkTfqz1KCa2myPgC9i",
  "key1": "5XabvbPvchcXeRMdqrBSQuPdsCR6XnSK9vz3QBexJdEBV8t6LjaF6XTPutrHNYgkP54X3mafZgXZ6XAwhH7y4wRi",
  "key2": "6584NSF1HnKordtzSkqVCPJEWRSzJoV71XTkgeqHhpkn82zVP52VtiZdehbB4JEUBYqaSn1nUWgcwYVD9FTs99je",
  "key3": "2VweyqNitJ4ZsapwNbN2nYcbbymbdyhx4Qj1GvrpC5bh8M7KGv68ycW1BybuEt1mFY6vKKVRK7XFpTQ9aMaMhkwH",
  "key4": "3hagZ99BRbySuitURg6rQHtxeUSAxF4pwMuKJhcDiWdM6kBgN16hqGEhHDmaTXAQAktp2WQNL3hxfia3Hj8hx89M",
  "key5": "64oJgXJQqvey78RE5nbc7yyHxLdfLYby9U14ahPEQBXHVRmwrx1s6YWg1nVGmPpyvWnTN1xTMVPLRBNiREmSTPm9",
  "key6": "35VrYw9Ca1i5QByBb75bLm4ZRedCYcm87nuowchgRGsTdLtJ6ZAe9fdYpVhteHAYYyeaUpVrTJPcqquidjCBjtEe",
  "key7": "418qcaDEo2VRh3F9BoWcpW8MsBuG2fHP5RGAccyd2anCzW4c7b3x1N6z3CVSS4QZG5E6ptbeM6KenB21dLyxUvti",
  "key8": "4pvSgaz6mN8WjKsGBymxrjnEctrNe9vHJBJ6d8rukkUHmJgFWV6Swscve9TpzCT1Qp6GsLRmNkydcaS7yhpb3UE3",
  "key9": "5it1wqFFGU3NHzjRzSjY9LZ57ScbTShghUnbqBzJATfRa2c8Xv3kzr6UvQ1dhhqnFgKHBL2ujVVKdSX79CesBTn",
  "key10": "5JrzfRhy7npcAhPBqoV8zrftWEc3ozn3wN5CpM7EYh5RN1Hfr2Bqi8CzEo5ZjK1ZVvj1hVorZhAn8NQWWv7CVYDg",
  "key11": "39goathXht6QxBLgYsYbSZjFLv1WhqWzAB1f5tBw1ubv7QeMgGoirJoustYWREQnqqnUwowR3Wa6YY6Bhz6EgUqT",
  "key12": "xrW1PPF1GzYqbYjwmwARD4A3j2tK8dsWkgTxPVdEpKXPChujbGhjckvG4hiRx7BwFeSzjeugqo5KMrwW3aTs1Pt",
  "key13": "2rUUgVawVd8LRqgpPuB3hyGsfLCSEwPzPVzt25X6JWTA8T25euJeiprC4kDa8Qt4NWfthhU3N5ZYCx8NUDQJiES",
  "key14": "5qisRBV1pE9x4Nq3xjikdtCXUw7PySRHDoxcTwgDtkg8coRHXbq7prj5oEjfQ5jtmi7yoHnhDc4AGhMZ1eL7oXaC",
  "key15": "MiP5tFh4W99wrj64g6Z8GmEnLhJrwMF87huA9RpBTHSFMtRAf3Xce2jtyoC2bospinmteXrU4fqrRvRtFBUFV7c",
  "key16": "2jebnDxSQVcyJfTYH3DSG9HsR2rPtYqnhfYfRGjHa58EZ8LnX9dTUiyvd64wKr1CnLXNoii6vgZE5eG1cxoFsb6R",
  "key17": "4rMxVXG5En1SUGhfGGYfqAzKqM6LN3bcoBWMx4cWLf94TSPMgyuDP6JcTbpqQHwjnizd8vfkuT6Vu9hpzUuJmY1W",
  "key18": "2e2VVf5vbjvAZvpfixyxgVQBPRLVrLHCWimacuu3DADTbu4jKQQ93gwyuCvBaLiKTBwkvNbXrKgrj79pZd4MgxQ7",
  "key19": "5pQJBrkxabaE7MPNM3zw5xiedGB55WY716AAGqCdyRd6ViqrKZbEF8NWs1RysiLx5tZ6DSWiyGoQw7A7rD5FUak4",
  "key20": "22HcxxFpHjEAPyuVpHG8MdgS76aCDR2HJxMh8FfLztqzADhJhChqn4ZgaBbtDitHZg79bDEpaBG8r7o9yxW7vuP9",
  "key21": "49zX9VHXfVMEFrXQwRdTchqaoYxFgvDFna9MajdxEggLqfkTa3VpaJ2NPU62Y9SEgXYDX6Z3apUU7Lo4xcvtY4qR",
  "key22": "x8nAVkWxmHLEYC3bPDdg3i81bSunTMvrAXVURcYU8sNc1r8yUPAeKEnogdyLt77epHTYGHaE1XAjF2uzuda6nXw",
  "key23": "2rju5bU84Cbm1H3hfQCQVUzXffLgEPWksRYiPn7AccRFnWLZJFQ6NbPKKyKsLo6ubYS22wHz2BHkTEAHc1XTxwns",
  "key24": "wd9qs2Q6CFbYE7mxP6NqbbumMbmgRM98jSFA8Y3TUtQ5zapbAPbJAH3niY7kpg8VqsqFVUCJ5xmyJZG4Lkgx4uZ",
  "key25": "2eQgBimxoD6t5fi5AZTVeXVHWywzS6muP8Jg2CZSgwjG5tr8gJhpVhF3hhcnpsteR5KCS4CANADNSdvpzXtWvAqo",
  "key26": "gGqG1xqaGQBMyXCsTQQH6KR61A9cPxC9enZJBxMEZ6QkXCSgCSsMYFPoeEvoEhYZTevfemKjgq8gVjBEz3PJyYq",
  "key27": "5FFbBYd8qusxGUvVCq4iiBM15944v1T3Jy4ii628baRDxiNLFXc1q1h6mofNQD7seDqcuTCYhC1XcRaazy38rn5c",
  "key28": "4DPsRnov8zsxtDxLF57zAFaaTSLNdSgWrvjc4kmegP6gFm7tR88EATz43jnRGGfxk4z8mJcGmbXBj63fMWxkcQHz"
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
