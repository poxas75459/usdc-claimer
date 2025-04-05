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
    "QRcAH4Z6xzNk2gcd1fvj6jbKjXuBDkkdUr7TkyZ4x7hvckq8km4ZjySzsrXA98gtSx8hZr8Vp3wk2gQaY13NwHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BKe9EsVSvQRLfEDBQaDHpU3w3G9WhN3zbUDZR6AseL5CF5ssNHJVBM9BrviEVbAEQV1aeGNCSXv6x3yF8dS9eon",
  "key1": "3FwGpPZc9rhWzEM4158TMBnw6YZGezgtqniQvMTE51RMwQeBvWwHKFkdVNe2tRKy3io1PzdvFc1eDNtXx2RuatLE",
  "key2": "3nZZbND8DxzkzZsNFrSfcGLXrxZ9Eu3HC8qCM8BzadqGX2fw8DE6uBxfucNcFnMBznpHvdcXtabAv8Thsdz2fZ3i",
  "key3": "3cp92SxrGq5QADLWpXMUL2wUbx9ATdAzwJG2JWEEFCuZUNmxUJwmi1SLg3FpLLAUusTppj43q9DmbwxbFrNaYrB2",
  "key4": "zS4GDYQrbesatpCGyaZ1rUgNZnSkL3yd4ssNevJQwGmqFU2eRwrm1XQTsvtPk5pnYcyQcCxeU31VzijWBCxLKkR",
  "key5": "4Gcbn3AzzHsEZtZ8AvbWf84k3Q7SKR6kfFkQdr7XPWHLoin19Qg88XE9yc35pz3zp5HBRA4bY3Fb3tMMjcSrshT5",
  "key6": "4BCsWSHuoAYRmPqeSwMNQXSccjSNswQcQqrTxvxtbD9NeSxLzy6HGeZ5GeU7ELRF8manZNHqGF6hh9r5zYjWPjb6",
  "key7": "4rrGCX3Qz3BF3LCYcxXy6MWWp51P6dNSv2JWm8oMLoTrCYAeEg9cnq5ExLy6rgjaEJh4HiANbrvmkQQGuxipjyeZ",
  "key8": "5AJHo2UtyTS33h43s45UbP1drqQDLJnrGFfSG9qWnuBekPi1VVYEVq72zd2uuVBqxPizEgUqqW6w8paK9KwWxBsZ",
  "key9": "FhvrtD5F7CreBLtrnyoXo4c7Si8i5Kk5LQuukaQTnbyFmZBUjEijmupMZqTzRXaJ4K1EdgAAtd4CAMjfR7MRRJe",
  "key10": "3UPYvzK89Q8NKdWStCaQfkiofRypjLKL8Q4MirW3MtdjsQUP3MzLCqbZbGG3eDMB8fK6HKCjXZNPaDiXuEzukgq6",
  "key11": "436BJA8HP6C4Q1r1GED9kDckBv7ZcstfR22BeTonxFCGNvX7ntoJhLVSqwmgJomfu9LMGvMgq9w8QwXajfM2vTvR",
  "key12": "66Ud8ftMZ6dN6gADxAoJG8FTSJZTALTaa7WviGfBegnrPe8HWormhrRarz9N3YhZXnRNSaQ2recbPmdcoAqaPWah",
  "key13": "3sTPPDMVtnYdAMycv8Jeuvw9H7c6swpeP1bqSsKWZr1JhTvnGzVeckcUvxRFnN8WwneZd6zrxuzd9cpWTwC9MnGx",
  "key14": "4NfH1G5foreNLgMW9sDbVdJpH9p8dgUkHBUT8ewdo5qcLj3TEYTMZjuWULRfc4vsKtbMXwv3EX9pqSKvrb5Ba9nV",
  "key15": "5YYwbjZ8EXsMEf232qEwqLKncDV8y8e2UhTuGPECLYkHmkuYssEaM6SSVf1csT6JXuuDNExEhavbo6ZmGjTkg173",
  "key16": "gdoDnPBPVJ3M4es1t88j6jb5yWiAiQ8nefkKBEU13r9cyu1gwm8EuKY4AZZEHbnD9mjexg7fU9YhnnuNnirHpa2",
  "key17": "2PNV1nBoPUYz8VFuDGGQF1aUoAztsyLmZq9Y2xQbmqj8yDNTQiMmUu1BvWHDUjabbt9ttTDhsRdm34yPSfjM5atz",
  "key18": "5qTMjwCWeQX8FsZ4aqzMRQtRy1XvHnjgB57H5gHaQ7ZyPSgv8JuFYfq4tkLWSkFd9CYj2MpAeFHtHAzW2i8ZHxiQ",
  "key19": "5ejPB3GT1aKUEeQvqzvCQToUhJwGSn3qV7oLx96W8EAoh4jUDMAZE4VTMKHVMoo63P4Sm8heMEGiAVj3f5B9rNGa",
  "key20": "3r5aKa4UoZsce6F1hC2Bpg5fe4w5CBX4byLaEw1Ny7cVZPbVcgMwga7FE13hXbLwYon78F6xrqSQMXz93bAje26o",
  "key21": "4zGkxKb8QfNRVkmcL1kmUu4zhzDHtXCFiyaCnLpnrzn76yt6p3Xu2Ne6kjNcH2bp4VrQSFuLidpffC1X6rngj6Vo",
  "key22": "3sXA5h9YqXRHa4tbMTytHJbr3GnWwwRG6NrRzS2ATrEdbjWsUCN7RQ1N7nAKeE67ofmUfKNpNdiwrxo8VDkJhTdD",
  "key23": "4v4X96sxKT7yBQsVttrwKYbPscF1ggAaE1bhqj8JBeBEoP274TZQxyeJ2TZNJ6XRiTkg2dFqMas8eG3LPH6ANF9L",
  "key24": "4WRhsL1YMKaSNgFmaFjKYNvNrcPAeX6DsWACLHw4DWczvJzaYA44Y7sDoGCRpZ7G2MDVdSv2XDLUPPntJoyr8j51",
  "key25": "3BRFYExhhU9qpxq7a4TANqB9vNsurq1gUHJEu9bgfRKQ6vBnGya9k3EsS2Ru5MRDym3V8eK22pyxKDqmcdUUj9Xr"
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
