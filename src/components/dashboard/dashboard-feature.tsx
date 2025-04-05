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
    "3GYPLoYkD9m1UgAXUZ9AQw1wt7Dc2Rqbw94x2c1bv3XdbPQbaT8tDUuPFjaSarbbwD6ULPijkttAEpmpcAPwEgsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZALa6kZqNe3vCVyYyn32e4ByyfzE1vNyv7W3wGL8cCP9DUV4HVQpwRWSAE6oP9uc1rX8BLKDeGpL93tzk8EgiVS",
  "key1": "KjBYMF9jHt6J2rESj6m79TXtPj1sELKaZBN6je9qcj3uBqNQfjrCA2PPN2rn8rgkyzMGTPuMWsnQjRRiSF88k6J",
  "key2": "qd3A4j3Lg5nU1zM857MSXeoWwMegCW67Utjomf82wJoynVWWB4ihdwLNuxk8yzaNL5K4QRKftPzKUhjqFu2M2ks",
  "key3": "3krTpoKpdY5kTeaLT8CvnD5MvrvC1zGLs4TnBfGD6F7QxQQ9MkDo1MicwFDXFD5uLFKRkayWLueefiU6mrPacTYt",
  "key4": "3WUEjsszCVD41EJSiNxEHT3hoyDqRzuM4cgEqe7BorHz14K2LmiuKeuxxdT8TxfVDUvLPZDHPktZ2kZP5rSesDjJ",
  "key5": "4E9J3WWmbiZutess2mA8dsC3eZ583evBjewHoxEnZcMciaHCxr8V4Amz4FYzTtDBXWBKYBcXVJqvEAuozMuFHb7F",
  "key6": "5DaxtSw31kiyip4hnDFysVecPj7i2wADvF58s5L4nYcR8QnNfRpnQCyswGSfg87iyqYqE2PmDmmhpzvhYYHufbDA",
  "key7": "5tG2FA2v1EQv68nxf1Tm4NEESzHaoYAXm6B5p4kUswppnUs2Ut3YwhP8vLfMaDSFPQcG4Zf7dE1Bhh6FMyYSPkKa",
  "key8": "26qbMPyEUmj98THQv6f2VYzcrbGeLnUARorspzZuXtH4fNUatwBU2AeKUGL8xXzC6YiCrHWJnGwGqjJcJSD43VeV",
  "key9": "51n36ieXzoKExJb3D8PVWWis6HMpqHzX6puHgwLC62YrCYRZqPsitD2UdQBNFRuzNa8kor11v8iRYX5XCe4Ydq8Y",
  "key10": "2ZEA1jDTR3cJVZPUsEWmhiJ6zMJ5LDq8C3VcHoyDf14GcxuZankxGEwz2PkPYj2P4sy4scgmxaQa9M6VLK1NLmHF",
  "key11": "GzRHQ5SxcvRGZ2pnNHzHaEQeWX6ZVLW25Jskw31DGT8ZPCUptqjiqRcTJ4YNn3SohUsFhvRJ6H6WgaPwPxUw3Qw",
  "key12": "hV9r9XYKShMmV441Wp4m4pHP8XvasLc5sYWkvkPX4LeN5SXdxRTAvuckgTwwNU5yZpsFbbkNCzQKW7rwxXKgp71",
  "key13": "DtSELtYvfKgq56Mz1uuzPodZKW6dCvKPcdGkm7ZaDNS3CsGEfmtyC7dJHpywbrGeYday5TyjpJQpVZKbEyVmkJP",
  "key14": "2s8LiaLfLuXbX6KjHaFXkV2xM8NM9dXgKi1B5EorrjGZqd5ydsyMQop1fWqFXnCmDAgudG1tboazTNPXtsExXQyt",
  "key15": "3tX8Y7iDNdwBzdM7Nw1Hbx8HKLs2sAopSv3sQRuWok6MUTMEr7umuSSDtgvHMtaPqg7K3aZ5KnsLNrg2A3NWDcGs",
  "key16": "2rT2G6fqbfGKEHhbtmgh2Ch2KJBNeWyGzuDsjD4UZHLzJLhQN5eiN1qFAJey7uQxHCpwF3PaaWNMu6ojy2gj467L",
  "key17": "4QFGYkSNrqhSBs56XGHUGjRdBJVqkiJ9Rwb4fwp6VQFPgp2iUhMDqjFHQYTqVcp1jB61FJrFbcDcZXSwkcPRC4ai",
  "key18": "3B6LvgGFpaEzNRQugoNsb2S3AaEoYiuHGrFTnMPean6SKNiBF2gUxLrNnbtE3Yzw8QdWoBobriF72AemkPDRZVkA",
  "key19": "3JQvPWYB6zcFLFPKk8CCC5HDbUwB82GVAqMn9aBamXUur16AaLVHBYSdp7Zo41e2CoNEzPTXuJdi2rRaJNkvd3xP",
  "key20": "3cc2fbT8tbfy4fLDufeC171q1J2mEdFnZejjemNzUnRyTTG52YwWj35UgAYKUftv8Agwvk1gG3K7xTLNzUUeMeSd",
  "key21": "36kM3yogNqe5jT9zZMDSUgsJzGq5qAaBojkHY22onkiWNV2K2FiUUHN8AR54sSrwAZK95kA4X2z9sLp9XWnnJwi",
  "key22": "2A2mPvtbvEV3kGs97S8n1tJmW14BwXpCmuAxyx67aQa5Z9MpLdHh2s9WuTs5oVzFKCCoD6hSjRdikXzdcrQPF87b",
  "key23": "3tieNLrCE52QbZT7Zau1LfAr9Yv7ZtepSMwdVANRNWRaokfTuMysKu6NXxTWperRnzdBF55Vo5TVUhg4n7C1AGtL",
  "key24": "3d99dJKxayMukypyHTfJmtNCw3h28wHrYzo5AbZ5sdfoy15YnWkS6CYEn154HJYehVwXwDJhv128M2Tw6TTmMY33",
  "key25": "5MFW94KHkzT52RihL1k2r2P4xV2kngNULLb27UQH6xdE3SDid41P6zwqGb3xAiDKdbwBFcgk5pV8wK3PqCjSBWx8",
  "key26": "2gTHX4vTc4BQAPTNQBBffNrxzMcttPU8bqdP3czRvR1PHUmBUc3g7G16u25pFgAzX7rQeLhERrBcVFtwqhrJEGER",
  "key27": "sjPwZzjHW18kmswS5cbmqxTogC7GjTFYcFfVkzPaDHb5vgE54M68Dp9QqrkH6xjmhJcae68mDSGikW7u4HXJjna",
  "key28": "2rau9eTgdXf6fs7gLEEZDFVzadVNTuCTwuC763dzFUzDBUSxGQiorBj7akJ1BJsJFUjuJHsjJq24r2ExYPkLuQwS",
  "key29": "2u2rMBRbR928qMTJp6hCg2t7oQw9AkHKJVtE6ZQpfMagDbBTXf4JgrAifwzE63BbrLizL3HiboZUJhbsoZQXir2J",
  "key30": "4jV3tHf4tsYtponhWXVmkqXW66doFAZmUUK6mwhQWKMXVeVPSNbnW88VsZFu6vixTN1msGGM4QmqVtm2MsjhzdHi"
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
