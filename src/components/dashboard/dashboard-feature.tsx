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
    "3zcywdsBE9VDMZR2h6bKBnpzGHjuCjs8soh5EagY45xcUBX9ozsSo4KYmSE7AmEJBgfyPfG4XornaSf2nueNsqzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSfRuGDD41oybvHoBtDvhT4WdZJmXJygaWThv3fnSr27JL9aFXPztfy7i8waRyYSftTX1iQVBsVABbU4cfZdsHL",
  "key1": "3pdL4y7yJu3rshVPzwxs8ngYr7tVnKeCTqkzbABVq5FWMeWTCPyjcnzB5BZGbToWrErstH3AtfPR45TqcwbwJPZ7",
  "key2": "4Ku9jaBJmM4V7UVvTTJit7qkGeo6p15EtFoyvvoiZ8gxjnKGxtc4hm5fdVoqTSqfxePWx4FrNRJkU8NCqyKbGf9F",
  "key3": "5r9Aehn7ssfmjdHwiXHF2spMx3JPXfUXahRFYo7RhZBQ8ZXs75VSVhw7BvZLEtdun97jEfaRR66RGdUeb7A4nSX8",
  "key4": "gCdMzZ7JiooUije8TLoiHfULLwrPb6XgMFFN4mG5HPMG5BwZhMWRfDDJoKmQZMKkHmFwoqmPcFAh8LBEtP36SpU",
  "key5": "3FsyH3LEoNHNRuhmycLRMar1UcrusB2TMgQ2Y8Wh6me1vCJ9U92tiJZyK8B31xxQMpFsj6b21xSLTPwEeDtBdjZs",
  "key6": "2PEHy3c21KwnfBzesYQUGRyiZGrfpk9cbzuVA8ZNrxSnWHzfZNQqwSSjscCe1EhQWz15SQaDduF5ZDCLapsh2xuj",
  "key7": "5b3KTDXe8YAUQEU4Mh3m4vzR4PDnhDUMssLeZsuUEnyoEhiziCn8zs5NZ2pvdTUEYZ9zXmHYmfN5U9VJSvPXQjGy",
  "key8": "5VbQATbMktdxi5h1TYGv9cr2kMB6nrSH3vTggbEuoBosTC9T4B2qmNT466fxRymT7PiL99KVyHXwEVEDKmpS7qyn",
  "key9": "3nqHoJCNeSJB36cjxhpxcvfX3h7oH9LTKfcjaVbVuMCyoRUjsy2ywzfbYCMRXLeGG2o9gWXbT7pcoBEjJonK9ohv",
  "key10": "4mdoJKdeNi5BJN1oW6rzBXcDFdioVQheTqrcSVjpYsirvCsJYmYnvkSgyLxUK5QwyU75RmTufkx7d8LJ4sY7x3nG",
  "key11": "2o5dWFqJvosYZh3Hh1ai5QMvCEoobwvzbUM6hDN2EYUaFQCF75zaLzvZjAmXVzvNQugHwEhps6VMkXM8DafNY9y5",
  "key12": "3TJy8tCyMmtGXBTAYATfX6RXCkPmVJUq36w1EoMGr6gheqQB7CoqLjeVSWN495nTbByxSj9twAYqiMuX531LkxKi",
  "key13": "2wokKGXRbFipVbaaLQwrRYTPBsaumCerrjzCne8V5TtMeGETnQwx4GXRGYKwUh1P1iChGnvxRHUXksjSRvBVR5yy",
  "key14": "59YVUNW1ogWgwHd2wDsvzujpcDy9xzUy3d11WpzdJTP4a6hRw8a8VVNbiX3uaebZ1dskJZvFBmfDJ5TLqewV349N",
  "key15": "4SRvbXvnty2eZKqyjTZVmpK7VspytNnVgVNZuLmkFDwZzpPo45fSPrgSD7JmJXY55bRNgcT6ShCP9XQdXveiWqmZ",
  "key16": "5aff3W56hDJXK6gbBGJTMTRxr2hccaVLja66Pi5b3Nm6HTyuKt4mZTiPpViGHKQud5pkrtoFuJZnS3XDJxP4nMiR",
  "key17": "2fuZ8ikU1tTc45g6QrC9miL8i4AwZZc9TBRB6JdjrwJxYEfKUMctAjNLfzAahCDfFGX9xCyMRYPAASS3aLwiMEhd",
  "key18": "NDPL5ojiiChKTCuSLx4x4qnp27B8Q1JaoiwpCpYS64xxn5QK4TmSJAfz9FgHFEaQ9kk91mbicJCYofneckPJHxD",
  "key19": "2XjtyPMgPKp9JyVnwxNrjWSFTVrf6D89Gev97hgEMRNutVsixPvRK481tkgvTbrdjwRXduCo2QrknmSZxZTBuXh2",
  "key20": "46dVqdHC4JaWMjV9XLW5T74Vke1MtunHWsd169sfZj6jcw2DBDQqsjmBtxfpRB3ghJFqe8dbrTTMGX1Qv8FMQjEg",
  "key21": "2oDyTYGpnxqqTtK4jxiXP5E2BM6bWX1woUUegFaStFrS9pSg2oZ2jEjCXBaPfeB8dvyqDAsnDiGY4yLE4EAU5xCp",
  "key22": "5upMdrGWFHkoyYvWZtDH3f4ChxunYajjLHsKesR3GFt3HHzFwwUgTaTMBCKmfnQqnpyeT3sNPsUbkNt7VzZR3PsQ",
  "key23": "3RLGd7UqpTspSuYpmqtZSLYyYYhjNDwSpZfD7aC4tkZkWZbWzkCN9ftjvrMdSb8ffCqvrC275SGtMRp7tC1xL3kN",
  "key24": "GJp8v7ccVwfsBQ7r6hZ2gSq9oyyXYnYmN4y6C1XfvcFUqdqifXLPurzLfLGfS4W2dU1MsJNwwtHearCNtjrDR6w",
  "key25": "2XWYnrDNQbFfbZnqQSM51qWhFS1WtWbnesoK9fnvBoQDro7kkThZ1oQNaXMraRUH1FqKnz5WbaeQ9piFUNci8DEX",
  "key26": "4qc5pE1DahsYpNNtRr2brep8AHFPzQcnRqQByzHrWdVwnqagGrSwmr9rR6cR5qALEdLKqGSmxhXN6Wfb9KhpAvpv",
  "key27": "2E4SJy1bi25TeP88dsZaGZjWsMpZCuBFqasEFJXLNDLyabBq1eti4wD8oGDn9rytZZxiHwWxnjSfCTAwT6LAYtJW",
  "key28": "4Rihad6MaNfQQ95ZaWB6bELrHoz2gkZX9pBYqwo27CKLH8hFQNQ6pb5eazyhGmqK6qwZx4hKzxD6CphY6qZa5Awp",
  "key29": "42afLFis8Vg2ec8winFCyhLr5WZmhrjgRAMaRcEgdhcP1PWNoqEQdWdrsSZxVoDZy3dHaD3siozVwWct2r1zAvkm",
  "key30": "3dC3KymkEZ2QaDpBYwE81Q7S4u73b8mux7TQCF7VphtjoeWwAx997GZTLcRPR5cnquqdgiYyvDRFyCFNobM3WNnd",
  "key31": "4JZQoJWjrWZNDgGtsNgg2ScCt8xrwqhvziW4j8qMaRi5NasaSPxYLSN4Y85TBdpiiLdKf6twS8ZyhnARhYspxCQK",
  "key32": "5TetivFUTWgEHp1P2FRmDJ5bYQ51s1432c9JoRcTRtzrvpofzfcaZ658yT86X7N44UcanF7DeZq2kfDroVZRUy1i",
  "key33": "XCCKSG7Eh4FuZdm1yQqhPK7JAJpzFjwAY1SW3t7mThFStAjD6adxAzufpSatpChFwmi6rW4L5dhvJaGSLHp8pp6",
  "key34": "FaxAmzVEF7E2cakHaM518vZ7WZZU3utjK11yLbXtSeR1QceoafYhYYL1mEm1HjBHpkMc5DD79BEQHSPK37XbaJs",
  "key35": "22s25j9cBYNVTjGbA6BrxzKwQmRDdGc1MsbAV8B3UvGM8bYqAu2oKziUZzBBKa2RnaJdvr6QbM8cN5DmrS3jMRAg",
  "key36": "32aLbwqzVKyyPGEftNi6KVN5GJzKR1w9NCh3PDebzdeH41zGg9QGBSCtgA3JJZ8yEyCqwRohqG8ErVwGAGc1CjZt",
  "key37": "cNduS7VH56hndwKunBLL3tc2Yn6sUF9cD41wSaMzddQ8AbeJQ1d3wzgj5H23y1bTafG8YdSct6CWtbqZG7rt2Px",
  "key38": "2zXsPGp2brqHrdaaJrYZZeFJJEj4AYmqPhMNT75HHvFQHmarJWoawi3Q68WniCzthTQfyZrcxKqmuw4rXedkY4ST",
  "key39": "61zEfWGfY1zBM6AdaowvC9MP8WMhVKumGQ61Cn7NppSF3tZh4W9BcBXasNXQqf9mKuVutYFFRJfHkXD3W4xiTAsf",
  "key40": "53u7ifjJwT1TJo2UyoQaD1Yg27aCrrqWGrm7xLqAoEfh3iJusWwwSjmTgzRztpDxx9R9mDrF4Cq6yUDy6WHthvZH",
  "key41": "4w7ctv6aUV5RqLnLqauXGT6XVaK7CPrNMhaUPwiEgMPruTbmeWaG4JTppdqYD86w6M2f88Te5bS5BJDeajSTFPEm",
  "key42": "3ZVNYTq1Jk1YomYtQPgFpSt6s7XNqxqrgWZzbmJYbttEsq89j4jiqQri4rLu8RndiyorE8h3nEzZd7VGNjHsR9Gi",
  "key43": "2DXi9VLhZjq3SXPSMLLe2BQPcdZDkUg2soqzk1Y56b853ktrUEsKkNNHwEuDzkD4e3QMYXmzDf5HFmqKzobQL3MX",
  "key44": "2394sab9cY7kv4bgusXPjFCBWzo5SG5YK1L7wtaRr7UnFr9Kysrmjh4t4TDnLsXJHgKJiuiEV2aSENnYAzTYwTt1",
  "key45": "62pV3d2vNGmwdi8Q285a3p7M1Qi81ePScF7VWFs72GiEgnpmTfuQMX5CM3nbSVcmvs3J2WnrrV5aEozwnf7hXeSw",
  "key46": "5HqTWTPXnn8Rgr53Pcy68zA6xknbffrBMxMDm4kwtabBnKfL6c76WmQsN7yaBE4kx8r2QdAM1DBUXUSagXwRhA8S",
  "key47": "5pgSL82oMqqLiFximAnxMhhRAqTxCtS6eSizki6qWu7zcga6usKVouKgzNrrNTaKksd1nRBuQFJb3n3xtJXijHzg"
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
