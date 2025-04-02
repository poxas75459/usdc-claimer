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
    "5frNYK9qbxwgtDybebq6VRfK1Lu2GWvm7VaFZeSkMoU8XXqmad8XbeTLmZ19JWjbwZbesGEbXmZoTW5vMTDG5XuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XfEqDumkiBbQJCkjfMgCNBY6uUn8h3oj3GdS3Me9at5zC6aDxH8rQDb73eER7YzeL3pLNPzP31T3VsrtAMf7QEL",
  "key1": "2YvE3CEmc5UABfimjmxfjtovoJbQDhQiJJdZ2vAAdv5VnL5b2hci6RWXZGPrxpP8AtHFsUEgEY5aFPpHmvmCPFEm",
  "key2": "2tF6BG3bBBZAUZRhXqo8YxyjR1pi47UmexoXdQHjiRD6p2hpmAeCxYrjyp7YMa3h4Y8p8f63DdrJFjz5GTdZWWP2",
  "key3": "2Got5Z1h8UQ3yTcYVzeTTjTnohkq9NboukASPWJ82E2gif72AUd2xRhuj37S9hqwbzULRd69yHjG97jXwnV867rS",
  "key4": "3933gNb8Rd626Nv3AsR3YsKo9KizC5QSu6n13xsQ4WK6effyVLPy9xM58h6y8v5JyGwUNaPYrMMJAzLsgStfAjVt",
  "key5": "3PwhFEDprvrtXWVjW2JSDYXA9LMwCio8UQ3QGDtj7eTicrZgD9xn3BvQEy9c93LWsFi3DM27D56oJL4WNezg7PNR",
  "key6": "4QtNRYG69z3it9zXfzrPbt27xmNHbiAtYwvPEMZcTKFySZATaDbpgXDAR2P8zYWKHTLnsDSB9fGwS5zPCpoK6Qbh",
  "key7": "46NMCx4FAtA77vHPt745x8smJ9969STTFMaJQBGv5bDFkiacPGreVTtSdayZZNQ63gz7pW54AUCvijAD5BNZ8s4q",
  "key8": "3gutyA6KEHBUTHVoHcyFTCshn6AEiVh3rXkmioCdMoBTD5uRc8LNAYEC1fQ4PLSRfYM1go3AR9Vjes2H7QLEJsxe",
  "key9": "25JDxHfpwvkaX5S9HF4bSZx6wRCkhLnz7RapFyKRCm1oGGmny9xn1KcVGEMx72EKabmwLktMtcgLmdbiG84pNxPS",
  "key10": "5rQQQUGEN97q9r5HxWFm3aqJLJiz7kswTDBFixujYEaKWGZryNW2FRaLHVv16u84NduHLN4zvYsWwcn52pTpdakK",
  "key11": "2sEhzbdexWCwgiSLzLwAWAehEFRLTSB2V2RW8yaT9yqqsJNEznqP84CEPXUyYLPkE68YM55EXrStvi6NjwyXKkku",
  "key12": "zdshNboxQuzM6wcNpqzwtoDKqPN6AkdbJah4TAvZsc27gNEkm68etpzVhe1u2WRAtDbUqDuQzuRciAkwBZRWrvV",
  "key13": "4R5tyucLtEF9pgFmMQ2izQgLfzXDQEwB14C4Hbdyp8NShhwMDw3e6YNcEpLaUv8hkeJmKUmTRtid8eJateoha6tN",
  "key14": "1SNaqB8Esw92Z4ThytsHGe9EWpkTsXUnHKS4GXK2pEmpv6eP4vbPgrne7rADrbgHXt6Z24XEvSrDLs68ZCmpi3y",
  "key15": "54EpWXaJeRJABetn9FhPTkQrc4x1Cu7xCP6zCRBcaA13EYJ6fPKtLH6V5fdfkczRr1EzJNhRW7dLP6icHpLBhddh",
  "key16": "4RNe2PpXgQ1LPYrCeuUZSKeScv5Y6xCsFCMxRbG9NDgQQckfuAqv5JWowdauY3BNiXuK7aEz9TxCYmmD13Ux2dAY",
  "key17": "479Uae7pnKkCoXQn7rPNG3XHsBbNkBiwNp17DR1zMwg6zMd2bXrZkwzwvp2ygvWBUjWmfBLVA3UmYAErTpGnN8ep",
  "key18": "sFQBebKx323dkqRPfJwvnpXyMi1K4KE4BQUpwxyjhCeAFUvZGQWDywrViJ7WTBWj6mWkriQDJJGooCg5VsRu7H5",
  "key19": "4BHsLHwuiTq2x4CCm7jfGKySdSMfbcisPcJqxj7dViL9t67AkpiEetfRkXDfYoytsN8BHxuKNxHPCyRYaCbyfCRS",
  "key20": "4oAtKTVhPqtey4kywSjMpeVaWVvqLnUEgFTV1oNuEKdKL8eK3cekXxGRcbf7NXMHpM33ksRJ17CHoD15J7V8FAr6",
  "key21": "4vRJ6yqpFJG1US4VmJ5mMMmYsNv72xaM7FSMQoQLRdssWnoyQGKNiXeh3skt8YfrSMUJhbmZubtjjm18pYchceTz",
  "key22": "2aW31f17Uv3pduLuCyTuUfJaid46vuWLM2eY3mxwMk28iSaA9K4qzGKCUXEZXahYPFQFowa5mYPPmuFTvwCthfdz",
  "key23": "2vTcQbWfRL7dY1X3HMKYQnPjPxypJ4dVMdiVJhMy9ArLcv4D2CzH648LdgEo9uT6fxt1myy13U64JKoNPFoDgmFt",
  "key24": "4JkZAmF7JYjQYCCAQaCGAvD5gXoq2ZrvwqXS6skFZrw4kyXrdocYVsBDuGiQrW19QJi7Yrbu4YaguJTvKp4xfoK3",
  "key25": "3xsQjN3JyhGaXEQGy58fCYn6Hfe6pFZvUcp5gJ8BAFSQkCq9UDV3M7tZiZpYqbhCkkRqGRho5JD4vPNQE6Tkuw4E",
  "key26": "3ajtzgjXsYzjLEWhBDVqg8Qztf1NDHJu1BXBbbBBD37qCiS1u8mSMgvZMpazFbu2NrEJBm6DSoMv3251demtGYi9",
  "key27": "5eUDHVTbhHREE4EHCpdXMm2vNPSFyTzxTuseC8pvHBWmw5XCSqcHGTCNB68PZRZVUg9AW1fZH8njw1E9ehvbkg7R",
  "key28": "3hQJv3JQKbsvCbPCtJsM9wAbV35mNvrtdDR6W9fcXCjuoB8soymYmGzNgpfnX3XybCF91zQcZ9ZrgHWBZqzLoBRg",
  "key29": "5GLQq7d7PH7jNRyJJyvWKvJ12aAPwmL87irn6hgvTsVFdSqHSHmEPed72tRjBVqrzWzWZcaZ4UJgn4PmSwjMt8L7",
  "key30": "5bGdtsiedAtn4gCNoyEb5fJs1rSFQDxWmNL83Dv8MEViJYiYwP3auBMMMDRaYCsMvan2AhsVtMyG6Db6cCXcvmNM",
  "key31": "3S4a7DRDcBg7zt268iBXFGAmyL2mSsthubT4ucQLbHRkrYLp3Mf6qToZNgKmUo7wZzjiLwHFwmdhpYGt27FSYbnD"
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
