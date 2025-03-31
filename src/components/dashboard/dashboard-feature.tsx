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
    "56UinMKdqZTrt1KAzgqq76LkRnsRH3fbxoZbnTpWo9vLUr1pqPcSX4F1mx3qmdZ86xWPDEBvGDPKRLbvUUaQG1E9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUG8kBCnao3LE1Mo7Tv2yQGBdjqb7cB3SbwSuv6BNu8Pzr1y6Kry7edc7WYYgqRoSLhGnZNTkvuXT9pATrpTbfn",
  "key1": "4a9xuMFWLZRcFqg4rxMGBRrbTKfEaQinLud94f4xdubaQkPLd1BmjR6hX278SdyV7npFqtAazYGa9Jo9KCBc7742",
  "key2": "4Fm46qaxKhkTa8eWaFWfugVx8GNTcjLj3hMXaXSNuLAEShf49VHVFxaZeVsNVYfQw1e5wshKAdqcDic8b3zy7bCT",
  "key3": "4Gf7dauuy9WziDtD6cBkUdPMogNHyD4d4As1pwyQiNtms13GLECinxkfCbViUB48FpocH2fCQ1V9Pr9wkw26tmz7",
  "key4": "4z25eNiFZzztwWxhjysQrWm9ezeZA5sDBQRH7Lun2ib8ykVaQUKKSECZwEEkfq5EnCWFJDjP96sA5tNsgfatyoJw",
  "key5": "ELYPJipZqsCHUBbHUtcGVJtFHF2mB1VcFtpd3nzQx4etwUxjwj8KVebBTbqpG7fv1SC93rsbAGpwvfFBtFNy4uw",
  "key6": "2KbqUJRn2ErE32ChP7rpiaqPiERDq1F6HxekijPTdyQmgHWvGEGAT1yavwbcjDX19DqbtTKW9usGEt1RmP1vqXTk",
  "key7": "3vN757WispPxUKQZ7gNAv9ct6S2Zzkw48dYs1BDJ3T4SSepf55woK9HcKBvNBuEo21KkGx8yNUdxRQqBrFPJAA9e",
  "key8": "3D1vCQJQfGLuUEkjtSScVBCsbCo1zj3RMRRezZ5wEB4F9fkEJJDYBqssT3JoxMR9Mmg5P4QCymuDtf52rpF9mh5S",
  "key9": "5e1Mwgh9f8mkNV2GYYEdLKW18TrrvqZBvu9srLZJGvRbWxdaVehHM6ZwnFj2KCWn7UY7qBGYLK9JxruCnoY6Epys",
  "key10": "2F5BqhLwopzXpMsmqCVrNrrfQofzn2qvDq9DKDFpcSb61SgxvPaQQf6ivVppJ6m6k6NRtrveoRcihz2rvEUWBwmJ",
  "key11": "2TiN2xNphPM3h6U98iu9r2WcSsyjGzd3ab3oqVCUPsboFdukkpzNBGCu5H4JTJUEfYjwZa8oyxcKjHcpkCaFu2D6",
  "key12": "3kVPi58uSHRXMyzYzN4SLYtny4xgfjJ7UmWnRtwNkfrTcLAiV8hka1t1KUTmVVxNAgAH3J1D5gXKN9cAf9YG6HV6",
  "key13": "3nGC7u1y8dP2bXY1CpEZjDmzh828ri6VCyGgtV69byzzfaGJCVSy5XXStEDxfaz5SgpR13G3BRJGRLJgNY9hNe1k",
  "key14": "5Gx2hEjnoMBH2egp5JdLN4NuiM8SGvyqVmMwdx2GujzAVzy4gUAHKj44q5Q2WmYwTDRZavhwo1bAnxunsLweUCZA",
  "key15": "292B1BG2tGdwKrXa2WA39dBvc9jXZV5gD2a64cnQviKKhFC8Kg6QsNkodAsgBD5Q51SnZCw5p6tvKjYu3MLyFqFe",
  "key16": "5B4M3FwVNEWHct96GoUV46yvsEczZxjRV3Ur5y6dFFk4cUUh6RV93Dp2r2xWdKsYRj3VA8FhFs61TDpHRDtJ2wuu",
  "key17": "4wEvgBpxAkTK82MNoSyyrHNnFfSUATKW15VJKXmCZT6rgiCnaxMrdH5JWtWFXbKkmA6AGA9wh3R5fwZJwwaLZoZQ",
  "key18": "4w4goqr4nJrweGW14AUXWq3rcRPBu5MYriDjdmyZzWAdfAG4G9pZwRVYcSW2LFFPk9BASkWcjfj91tvepkDXrw72",
  "key19": "22mxW8SEFB3RaQptBMfZXgRXywVvsz9k39XEEfM2CkqYRmkzEfSiZkZY2yuEEyZoKrrUx71qLsYHCu6F3g3H3kNw",
  "key20": "5w3bVt6p5hHtqf3VeRjFaiJybL4whx8N3ihNGinojXb9ohz9p63E1QSVzp86jgneMXDStbUXqS4ruUVxreA2957L",
  "key21": "TbkH9eny15hW3BVhVFC7bFp8ysoEX3fHukB3jBXLEX8Jcf67mytRTuC22wm5rGLMNqzFhktHdE5NY6RY7X8yT1G",
  "key22": "4ZdYXK6RJMMoYM9Sm5KhAoPjbhM11L8SLy5uxCdsCnzsT73vRAPmWqinpXX9SxLgkJ2EMwLU1sc3J9SkFzFwFLTf",
  "key23": "3GMNgxnRZ29uDtxVhY6r2LYhB65qBYVoCrE2nvF24cBct2p6fSJxkmjt1p5d1p4ni9Ksd94WKwbUnaGW4pXQQCCb",
  "key24": "DPHThTZb64rA79wLhVGuGTSNzZK8cPNyVvAUCxpfpn6KuN25dMYehEmuVwX6iAoxueRueDcivtm8Z7gKo2Z1PHo",
  "key25": "4Zc798CL4XMPHBb7jEeDEavW7mKkAN8NCWgAfe4qoFeJsxvaMTvwayRpCPn1gxc3cZ2Qci1KAX5J4vEGi7aPc3Um",
  "key26": "2mhPfrp2MPc9mT4jLTwYbmPK9oycrsf97sXkiByJGSVrZradNeNCFKHhp9qsnDnTDVZnNHdQii6WddPgAuht4cmk",
  "key27": "45Jt1ff2R6JVJSnGJCV3oFcpBC17mgGxYzzw7shRTyB83cKiCsabnJorQcjrb5ecZz1uwYxWqvmnfTEVBDSxDBLX",
  "key28": "5QVSTp1wymnk7vRBDKaC7htnF8Ue8WaWoKtUm5trysgYskaLAUoFnqz26SXD8wjasgguYzCJXC58FUZ4FddqQqUr",
  "key29": "3J9o3nqUSf7KMeJAJ6E2gThRU4rU6Cok4fwxjqZ7jCZUFA9uPg28u8GeYY7LWbo8TEJFvTAgaT7Fou7H6tVCr7Wt",
  "key30": "5UxxKLZRLjp1F9wkkdmdYgB8EEGDhWQZGBjD33yVGrASKpds5wWRtxF3J6i3xQeDjbrLk8L5eUQT4XYyNxhMGZWM",
  "key31": "4ZmxWvzjwxJdcik1uw15btjzBCo3FMBkia2ujyGuN2RoGmi2tQoagrobDwS4Z5JKCVy2rmSgdCvdmBZzGxYWbr5n",
  "key32": "4PNyDm4pJwxXaBxkfTAS9R1JgQLKYT9Sbv1kBZT1w26hMzXKu4nW6GWk6qngrBsQZ2tepiS3zx7tnUtV2b3bmg8D"
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
