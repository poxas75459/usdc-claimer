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
    "vTnQ2msgTiYHDM9hrJrG8xPBtAKxYmLf63vYEj6yJA1L3cQV725mCdtVEAtis7iVpQVeQmxhnJg2RL3hpjw72pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6a6MHNuRGNKRcfb2JbxGrxgmw1sNCfDNXSSJj3pk7geWZjfkkXuaseS2uacHgp2kGL62JVFEMCjEy9hoc3qtqd",
  "key1": "GeF9SiazNzcUNTWdhWQzehoBbzN9QRbB3fVHkn8ZHrh3i4AtCZVvfzo6WLSD7KUVtWDwBTRWXaZ1GjmMEzhCLNj",
  "key2": "2eBt39aqb3exPFTDx7fG2aM9m7jRrn2FQXbj6PUSPpaPZcvu2kPzUoZEUhpgah1L1ztTnsSKD1jaDV9FTqqX5UjH",
  "key3": "qzTix7Agcm83PsExXCEBdssfuvcnAuRGZroGK9ZB9LxFEDkZ47dDS7ECWzzvbJQabyohvwdB6Uvz4SuRsKYLgHb",
  "key4": "54Jc89xFgdJkFWXVjAVfu4es88hBdC4J93W9Fpcq9X3NqGkXrqLVHXKeK2aaRJ23fhYYebiPgVc1EcPcZTNRuHiD",
  "key5": "59G7M5qNo7GAw8crGvLwByQUiwDfUx5uvV2sFbB1xfdVoJzrHVAxe1xKDY5yNH4UMdztR3Kd4p7R6hYPvZpdcNQ8",
  "key6": "4D3ZjgzwvaAVD9bmWY9D6hdVLNurnk7eQqgRSAQbkfeGEJadqn9Bz6oU8tUHnW3MATENhDuqy5aX8hNcGMDFi5kM",
  "key7": "2qcWmqbyuoZaZzQVPXWfFjhsDh8QJkzb8mph4VTXWThzTddLA4hzumn8ZJoi816733f3TTq2k3Deae1BPybE3bH3",
  "key8": "3ThsStmcbRn2GkTLkjkTWapkDKtC6rw6w3KGTgEv3HFVMEW9jf4ucpia6LiD3N1BzSx4FQsCEMoMQHhq6GuSzNGE",
  "key9": "3eeK6GNyzQ1TTa6qUno4r48Nxo4nAq6xMoYfLSCyxnQXFs7ugwNuGGF2VwHhqbX5S8MDofY2bLB5k7VXWdQgPkDW",
  "key10": "2E9GfpCW1omUkB9DdgUTWgdBTdE3WZqtFVDgJQaHG3LYmfnhqtLLLuLJRNmubRsN8XAX4JeVA7UqFfy7t38TLxuG",
  "key11": "3iwgyZipLTvKbKU3suBQGJrigdmdrBZasZxCaKF5drpexALSpLFmmPXFTQLHvPTurKCXvPqWaXkXxuf9BPhJoW4A",
  "key12": "4vnV7tD9dLPBjQPxtkQogBLyzQthHEazVQgmXu5HNpVs1SBxAytZBgxEzRQCopYeFocutP5wUCU2c3BAmXiQckUy",
  "key13": "3mWCZLUTUJNZzqeXccchtk7ydixCvtqFCVwZdarLSxbZsbBDrHhutLe5HPX6mnJFKsnCKP3octC1jw92e3MUKEF9",
  "key14": "3e4QdRAUQQa7AQrjfM4o8nNxCnqAhmcgccNwMXt9ey5BHTZRiRXSdi9nzFDEbsSQSmPXcYQD7kgpKaayH5A2DZYi",
  "key15": "3oMhWw2m1g1ukjwzFjvSJmrgZEHiXxwZAd1nJLcgaTvZJrEAPdCg1Zp2dZWiQnUasKJEU8noRPDE98JXSDwDL1s6",
  "key16": "4yE56ARPZsdoDhf1iUqiJMD3UVZ4T7a5L2PfGNE8d3xECtGckjVzFrQv72cuTXyzUejBiW8AAfUzZBM7BWfkufyB",
  "key17": "g6QPRBZ4cfi1LFG92DbpvSUXbNzZYbat8TmF6a3Kt6opdB33EzCR3hR7wPqErThkYU3CaBoahFZMHKVQJJ5GJMi",
  "key18": "21tPGtgKXykKJh4ArHstr6ncpYAwdNC9hC44P2yDbcWwJ5sa7iHnCQPgUeeqJKAoLgDqc8E6kpYbbgQ3hD9jtU1H",
  "key19": "aaRLi9QbpMkQsFdcFJdfDoisE5rcRHtXvnj8L9tDM1s7VzgzGZsckgWxLd3H4BM6NjJz2DEPprz2m48R89Ns5ws",
  "key20": "4ej2XCSkRmcaACLSPnrdAm5J7gzypmz5MBzCt55pp7bFvEvfA11bBXKwvUpSV6kUYQxA9YAzuSd2duA5VwBMxpjH",
  "key21": "4NXyiy1KxvVEY2B6VRz8XEAbBNXey1dnaS32d8zwJzk8y7uUGRjgsh5Zaocnc6GqMghnCEf7GZYeXX6GgoSPoGC1",
  "key22": "4yMfDHR7tJHNxyLqMN5YtH5ukXAGJf5nA4oaN8nUE8HQUD4aEeXC4z1DCwwVnhRKD4o23e26gpTCdRBoevrT1MGv",
  "key23": "3SwU2GKnt3ne9F664FHvoQsGaeJTJ2vjbiutqjeGN9PNWSBcQFaFHuA2XakGKqRydPgWfUSWvkTA6tCXNXp5Daia",
  "key24": "wUuLTyFtcN5WZNmy3t5S1zkVEEx2Ukne3rAWdZpoQuFy6PZWrkjwqfkR5vGwq2vcALYAxPEC9QVzYiXxVZSRa4J",
  "key25": "2bMvUawdq1rQRdA96Wqz6bxUdqCoXYaey1XXXCFbH4jeGkLYJj6ug3G3uVebbkTA4Wmf2W2cAq4n6XzDXNXE8pjt",
  "key26": "rZe8n2eVrWdrU66dmEPLsT8ipVDCvqSnUKgybZbvWYJsyDCFpbwe6c9pnuvM9aFpijx3Nfwu1961WkQCeQ36eEw",
  "key27": "3CSr4sBiU2fGQZ9mpbAHkwp5k5MWuSN6bQbVgQzgSyPKbW1dyKbYvFAcUeP91pcSFv6RGCFSKJEsHzPHJ5YGY3CL",
  "key28": "21Hhy9MYuduW6amLKPFKkapRMdAm2JsuJN2VqF55CxQ7XNAUdnnmiZaBR1ShaoBTLoaPrxpteT6vjSfkcjpoXVu2"
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
