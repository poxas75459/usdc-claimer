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
    "5eY5T1BHFmoJKySqMcU8szTykKNzgifS3i7fQDKCTbvzRvvqoJ9ArhFjVPGYrpbEMfSt6MRvndjg8JH9iUbNEPiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmUyfywNGaMHi5ynRy2zu8Ernop2zkqKjdSanqLHFLa79uscs6vX3PbXFAY2eKFkx6eCpdjL8uS93mMYZrHHHtJ",
  "key1": "4jDuibvHtM8u3jYqn92tngctwiTw6uDEuRoeLHqFNCQ3VC4gpZGcGLBR883d79jy5d7zESpwPg32UADd1z7hR29D",
  "key2": "4mkYDM2NvVNTjwhohq8zXBgZr8icDdQtGTyLXCCLSS2SE6FKriXWQCF7E1ASeRiQQAuwWrFw2ASuYrNxqv3N1KFs",
  "key3": "2KZmgxPKrgzbh7KrjP6xuM1uJWGbz9qPPK6AJiqXhG17f1g2RCwi3ZVK9zhrwr78tk3EZKerLRS12JoGmN47M26q",
  "key4": "LKtxdHUE4qKhwv6SVThtjNWpPzQqfdnR2ySVXvQMdn2usbaxqYSzEzcTiQPvstmMLisvoQdcUMhLhrj1WkNfnts",
  "key5": "ek5kLc2i8Mc7CGMsYC6bDee92o616eTsVFyjcrPMD4heA16p5jqgzEsqPgqL1AvVKD4MPAT2n61DcbWvcK3YPVd",
  "key6": "63HnUFs8dXgzHimLGT8Uq7WEbx9hqrR6i75PiBxL59xiWiuFj7WCFSFjw7ok5yJ6kVcLatusUWhfcHqoaDpegs2S",
  "key7": "82C6ok5mn9CFWJEiXMJ9Nc6rQzFWa2WxjfpitAm6Tv88rqH38ZJnAAyxYgDw2CfL2fdBY33vfirxeuSkZYTPLHg",
  "key8": "3puhryEW9EsvKrywstxm2Qo2Lht6iG9H6XAdNgzqkGik5j2YtaX4384PaDUbJTAu3U3CHgkKRRY6gKWkJHu93Jc4",
  "key9": "3jiVRafCBDPqQNCMmw5vV1cddvVvJthMGTSnbu1mtTh1HxtznZbykLUxhadaEPpee5Nih5JpP7aFjtoCrCYdPZwk",
  "key10": "78ZpPJhETdBb7EQsiJm9z1b1wemTSLdCt4ujrqyWr3wGfa6xzHb1muZnrjYTz6sGnqnaWwMNiWPQvGoCPEHMKod",
  "key11": "3x2eFfJjGPUXTkreHHyQmibgpz3qpsuPyNP6xhanGbEfGPg8iitt7MkLL6jQMYN4ABukeJFdgmnpqWKL9yCrwf8n",
  "key12": "2aoSHSGAMQsNqiRPRRRfgiQV2KGLA1mtjkA1QQxnNNtcEFDAi2NEyQd85xdAy3vpg5VfuncJRAGrVRW4AoqbQH1v",
  "key13": "4yDpxKtguXSkUox1UeKStv6qcyaSuYacmwodKM9YALJDBCyFjCW5h3PNdnCGKvuMm9DykkPrcoXZmcXFSH9bLZUq",
  "key14": "W68NhC3FXQu1s8MgfLS8XyDmh87F8hu4TmoiSgDjvy4WmR9wFQgZzneqeSDWUdaGLUR1gwv9zQinfoWymXXV6Hh",
  "key15": "2aGkBiWCSjK6HaAGnZAqNSz6EMc5dgKLjMv6ZdnDGcct5DbnZPqe4rWnHSNfx797qq1m2EsJZ3m2J7dueep18ze4",
  "key16": "3BWvUDqpbmKnmSf3vQmQnccwen51BmHxayiVsdD3kUeU7hqRTCfgPkyNMSs7Sp8gVzHcKeNB3oWKAt74yL9eqQRP",
  "key17": "w7wrX4wwiVuJD8SDSiw6231zeAaFG5drX3bi5CWPqowTNTQAm3Jv6L6t3TyRJqnZyE7qXUBF9UG4QLQWJYKAo6E",
  "key18": "4Aow8qpCfLmxBcgoHoMiVpAaScXigw9CjWRMiJuWqpHweDcvCXne8pMZ3xJm35wJ6Yuq2LsEscYdPZsZF3Qw7mTf",
  "key19": "LPJLg8ZFXELfqhf7xTZha7jwqjfMXZc6EBLVFcsJj5JtzWoDE129XTeBznZKSSXCrVmqcDrziAEytn33GoaQXps",
  "key20": "2qqrMLnpYg3qbFEkMgHnexgdq4jiDykLe35vhTX2K3F4PuAgXSnkwxZ2zyM1rPcY7hdxEi23ceHV5zhrXR1kpXgS",
  "key21": "5aMcUof67UeLnxSmXU7mhQbSzdqUXcAd5yg9bfPLo5ruAZz6N36A8N4xxtXWHXD8hpAGnrd1pmTpjSaBNAXU9Tg6",
  "key22": "3wSrUu1BCrXcKHAzBw1eY5tD3y1bLSDLDsmMZEwAyELXzayc7V5twxVzasKg8JrAP6kofRk8eGJbGfhs4AjqMq4x",
  "key23": "F9KQGKNu8fT2en4fFr7J9KAVCydh75D2LntM4SswRQNQDgJdz39GVQjETgoNtftsBnxz2QjmHrZmgd7nK3huiER",
  "key24": "gdg3U1fbZVGQaDMtVbhsdqvADyYWCaCpcxnPmrFXzsxwhwThNHP3MR5fo8zVn2ibkD9EXQEzsXrCWKF78G6cPWt",
  "key25": "4bZodPoyaghTuzuTz3ALpPdjC8ErkQFBa1NmLQwrzKSaTTL8rs2kTApZ1Dm6ik6hYNb8GAaP5ZqUYftMbuoEkqJ5"
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
