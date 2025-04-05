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
    "4BQhuEmXnBLNB1RKZXute86K1ZsU1YBh2CqKTfCGssN7cvqX7SjnYXfaMEuNrXTLvNtdTzawwR55NXjwkB5FTJXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmhZej4rqGrrhroiupXVvSSQBtEaUYdMmVkBfTxKiFBdeAmbvjT6ChAHxWgdW9TWDumfGA8z7MtvkGSJcqiyg7x",
  "key1": "4ucigeDsqeHpwSMw8xXfMxBPsMA9LjAk6gUn5GfwULkvb6UNeMREDTUYvVQdoocEW5fLGeRvyim48uMGchVryGro",
  "key2": "3ZgxDmDTQdFbB24YUtbzWnLRKiYxFcw7hUwEihVBAC4uutjtPPzPEsyRW6VwaL8rWMuzQgdiEsV5VXwhzCMUHnp1",
  "key3": "tx5mHLE5NSU9BkhekNvcL82FJ1BVhsjghgNX2A4zWRZuudMZMCxtVdPP5HE9p5ZNYAeudnJLtRxc2FSh1e9vz2q",
  "key4": "3AGhHDdG3Sj8ByKYwVf6tSq3QQaT6MgyiFGFw6ioj9ujGgTf8SXWpEs2mSsq9KdvZv7nLTFuv7Qba4vonN9sCoTo",
  "key5": "5FW8xfqaibVGgje5iB8ahWmVkix6HYuJHsjkqb6LgtzqxQjfrFToeDyUbZxbwaNTeueNeGrvzbSfPUpEGfXLUW9r",
  "key6": "5qVRLuiTbsN5H6rPfdoLTvgKbmEZV63AtsaEBbZUuS3NZKLNk1GpcnduiUCgVTZEbN5pG4soEfKm3utPiYaXaUm2",
  "key7": "2JqBDYBPhjatXa8GoFPs3zCrk7obMA6KS1NRoosmfmwWs8yQi35D3CsLtAmKJCgNP825LobHcKrXUDdeGEhRSU71",
  "key8": "5nRyz2gDFqqyHVryMS7EAHRTUnoKnABKgpswRhiyYdPZhnMpLhKrznETF3Jny7YPxkKBBZc9xdhT2T51LXYgg3t5",
  "key9": "sZ2g5ABiSMKQCcD4HLdo3TubMECP1wam8f148mNJcSGAD7dL73gLqJtqfnALXSZKsEy8XVr1d8s591QmFw9vGVm",
  "key10": "42dQoH9p8hKiT19so9GYicwGjsWGmoxq94vsvAfhSqTbc7HAuMsyviHQ7PUfQMZQXPBdyQwBoSnDhCK459oQAXZQ",
  "key11": "2bRKwDLB4w32oyfBAaxonjeYwzvXG3SoFTyQ1ezv38nuw1bk2vSnkHAcqU4qK8d2t93B9kTPR3tvMRxbBTwRaYqn",
  "key12": "5S3D8ky9svE5QpEdJme2i1sjsFFUrT6ESnXKw349yaiq9DkrtM8Z8khWVshokUJU57yGLF6TRkNQnTQK5wCG7q7k",
  "key13": "2rrTMVo5QUZ2daBTTb1bfw8xRBCo6oB3J4gpTB3HYiM57dShAjvimWbSCT2cxYoZmnYnutPgZFJ2cJYdZuXT3oFt",
  "key14": "2FtjmaHaGR6UbNbdPuBBXrA56JNN5fagkYvME7DM7b5sgv4R2YhTyjza1QnoBcoAp7vG6fYAeWDyfzoT3Pgq7cjS",
  "key15": "2iH5RJqZ5VPtc1XuqTmz1RmhdeSR7SKMXijE1npRD9THWGwgvKwavYzYgXdqLNBnY318aD7kY8FghoHH2bU9cnXp",
  "key16": "5UNUXWfAbcq4TRiFpnHDqZVY6kT3HLJeSgdceKm2FKNGYakhtU25mKU9HjGJSXF3XVGkg75mv84sne3hx4DGoWeB",
  "key17": "2WmuXRcvj6ujoBhBn3tJmtiMR9USNRQX3pf8YwoLGvKwmoGHbadazQqvQfRDaM7ZwsDSiisMTemCGaTL6kRZ3EER",
  "key18": "jVUApzkVHcKTRbDmULsf56afpD3tW2be3Z2Kf9SVDHBAMiBM9hLya3u2hdNNukThi6xaFStTdgNXjhrTbZs9Ck1",
  "key19": "47kmUao2ydec5sHhRTjAqUpqJdasmrNC6cLayhKhsaqTuyTVLR3EWDKpY8cgHH2KJEqpyd7CTnrW2XuQV7wwCvvc",
  "key20": "37P5jdfJPg7nBwVyHjDdd3kPxVyJWfsMVsGLMxV4j27dbbjgnecVS5L67WT5xAV2jFcVxYX8QU4jt4EYB1EvRWEB",
  "key21": "4jHDjyRdFtPvNHGYrTHmwwWkU2BovwtBS8oDU3B9UJKNJpud1xsn1QN3BisTVhEVYAiMkSSWM7pN7gEKaa1YfweW",
  "key22": "4nQicbYHjLRapeRJYrLPJocffuBXP166cnNdMeCRDCSmzz7DNR2dUGFwuvsVTjo9HfaUZcgihkF4FMqGCFQEHWNZ",
  "key23": "5uwGTJCURwqiNPBEbCg4PtQTFofoNgkw6ojZA5LKgAueZY6Fgh3Nu1ch9gRthzCD7rvjTvZ45LEAh3oG1vp5R5d5",
  "key24": "2mgomnWVjJTtJmcZSSFtWFXstby2g6ebPmP7VURzgnVjuA837ye5sVSKqx1SCuKPDY1ATGryk4SKBDoNBkNPRXJY",
  "key25": "J9ETt2mD29exWqPjNPFMkLhg5bYv8BFDgdUXK56Nw8QBjQjU8Dz4htH4EC7gRMao1fvQvsnakhfG4uhZJqFGJWc",
  "key26": "262EWq7g11BbEFEDcPK2F2SiADMzFpzqRhFGtzkmnJLt9544coTyy6f9HeisyfxAFfxFA27uC4WfVHfvGD1nBuLU",
  "key27": "5M6oMdRBEgjMnbs2NuGq7kPgXvVZhheZgjkynUvGgPNn5jSznHyNudijykFuAL318XRyj98RkUQvzuuWGkjtL65o",
  "key28": "3WDz29fhRckp4docYZAGByYxykVHKVwUndykNgCT3LBqgM3FmdhWFJjpjKhDghsgpT2wsh3KXjprMVQQNnJvPRX4",
  "key29": "pCSAqjiFjZf3t83angGTiKCdLHG3mVm7Fxo8ixyujL9svNVYP2KXMSGYKM58eVo4r4sgd6MerrSfH37iPjUUs1o",
  "key30": "CRVapW6m1D5jRhUQ1KKgGirhPvpE9tznc8mt9aRBJ68UMusbDQ5YCXkV6LsVu3XdSsofGFpD9RTJ7ATMPTsM7Jb"
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
