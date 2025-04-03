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
    "53EWDroZqDaCBGd4gLsskF1AznvJRNQU9ieME6EQwDKySYh1Rmv3fPHZUCUcznPLRzyeg8zMHez36MT1gbA82aJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yRKdqBeNJjAR5JXb1nv936J8rQBRWpb97a3TbArANHQY7h3ZdjQRxTxCqbF56WRkMqt6tgC6fwMagTcS1KYGL9m",
  "key1": "2uAj2rGMWBbKyGcvzWKnvsfn1iHMNiq3HhhWSddUaPbGfXhe1xhgS3zy1L4MkftpDBtwXi2nS7zEWpiohpnJzFsk",
  "key2": "piSUk2qQfdYfe5ZVDGGjc6YiUVoDNdHUgcxCGYSFScrXiHg5BoCwxV2ruchM7vYjUUBMQPemg5ZwBPSAeWz3Dug",
  "key3": "5W1xD4v6EG6zRxs5TU5wCZZTmpG2Jt4n7PhPmx1v2HLvDGNbovwdpPW52RRUJGaQ1YkmtSwS3q7usaXSCjaug2rH",
  "key4": "GjhuTEb9VdzUseuUAavsekHJR6jZ5NvcnXpQXraPcwNKv5UkrafCvvuEBrQ2vQUh9RCijJJkzm8KPFAeePd6QEQ",
  "key5": "27iTb9SD1kN4ghzeN4GVVZoNczT5wpgoMWCx4k46oqGbTXyrBKq42678RtLGB3fp8XtpAjAtaWf9RSq3D47xnD2X",
  "key6": "5yvfYk76jeAWFTyBSPhYn7Ym5GV91sxXwZvQX4w6hRqid34fWJeXrD5HwVYUNzgTQXZ5CGqRDEDkMpFJzPWigbUi",
  "key7": "574vmC87nvnKwTNSJfCeiZU6MgP32B3bayVh9bRqm96TomL7sTSmVuH7NDdZm8YBfm4gfQAQQjTmZ8viCqYYnZ3n",
  "key8": "3M8oDiXfkMjbvb7Dd6qySuRqX9tPZEmg2XTtEoXk87g8GxCYWuy94smHm2eVWtLf372o8goDVwxs6Bosaq4QqFUt",
  "key9": "2hLDucr9mV16iVWZzSUPQoaQ49A1r9M24ZnLT3z7haRa8B5qe5UnG9YjZV4MaHmYjesHxqGoR9UTvdCt2NTfsX1i",
  "key10": "ap1g52DLJRVto7VKoRMxufJhGcM74YQwgEqvHJzAWe9Mvv8Ahk2FPYcLH5eK3MzY4P4CAM2k9wauoaDyxVB5DDU",
  "key11": "4k8pBJmJ3uaxF4AwjRq6KvHt91AwCggvztxL99TVbm8rXCPkttVbBZLp8zEjBxXKBCnxtFqWLuaMHRZCP96MjHnm",
  "key12": "5Yq7VLF4bQ9JJc2kUE6R9gJoqPDDVRaQn4dFCFz5vswWiKGdeZipBGExzPbZzcc44d8ojwGs4zybFzt2gMixAaj3",
  "key13": "jA53vxFZzYvSrnWJM1D3YsghKZTS57jkDebqg3ozwEQAH8JBpPhoLjP4tvJap4ym4nYUD8FKE35UK7A71y1V9gL",
  "key14": "4HLJRZf1gJWS7ss4TuENTSBmAy7NewV6azisY9itUoemBPvh3DQfUkwtM5xrd2zyhFF9jXEMXYRMkJ87SXRQBrUX",
  "key15": "2k5vdsuQy5uzAdYaT4FuayMUbsVba1657i2oViv6hhH58D8bADoQmeuAsnfcvj3WZ2yWfGhMf9nyhcWvU2WaYK9A",
  "key16": "4KQWMkEnEJHCj1TmzA51f72Ci8iBhLobF5gvWjDkoBiwyLakvjjtqz7YtpPediSs2GLkBvMdfEzaGdA2rh3VMX2i",
  "key17": "3Xx14SUMdUy9Ui2hWVsxZgrZk9WGX64HAMe3TSifqGHeXxxH8HyC5x41YkkQjsEcnErFzhjBTUVGoP5gfn7UALLK",
  "key18": "2JgBrVjiwtcvu8QAys2yFbq63gJCeE1E8C2qgADYL1sPccU6FXgQDa7nu6LMPv4C3UEsTh4fKR3wjiddHQCcLfEc",
  "key19": "4KWeCJ5r536J1zqgrcCtg1AsHGN9hDgSuBSGeicySShP8rYzXgBc9tjzqy9TdcXBgBustZeM2gXpGBcbjseqU31D",
  "key20": "22iUeJWxYzfC1DnR23HPh4tDNTtwcMHkPfxhaPh7QC94DTdn3eWtULni1kynh2kj8MqnuHF2ETRH9YRxrs23kc9s",
  "key21": "3vMXEbL6wySPchYsiFLvwKnQKB5sYdz5DRZpincSS2kCx1e3Ygcqey7LeifBitFWdcv3FBscKzFLUweG3iAzFru6",
  "key22": "2zQhBaqafTFTF3t1Ct9XFPoj3PDMHVwFNNL6obRButmL3ZvaqaEZ5KUrXijwQ4ZRevxQ15vZURMCWqzMzVarNHHb",
  "key23": "534KfVw1J3YDsgbwf6UYngrPWs5K5xtLXfXPuLsrcchQRzcVEwWAzosbphR9TP7Es8LYGTCmV4fngGZcsx8eRNbC",
  "key24": "3dRRcdqydKhpqGDP5cFTTaAWPyHx95WDGvBix98jwNxMJdsAy7qW28EiHcfhc2McXfps8rPpawX64VRuK9uSJCLo",
  "key25": "rribVje1589Y8h5t6BCN9tPXSVqYHJTxyCR3Bkt3g7jKVQoeJbF7HwiuVM9DzCaruYeXKf2pTGJotJMnFf2Z9uq",
  "key26": "v3oeCETf6abXynu9qgbqjmZyw9UHpubZPNNt6hzZsMeb5nvPHhAXAaFZTZseUQokcgAhADF7aQs6jAnLoWmUwtw",
  "key27": "33z5BpCgCfMijHQkzvbHbHKLriZEroq6NqtAPTWekpqdFLMdxN1tK1HYBZG6i25RDN5MzK7X4KSYLGYQCjM8LU65",
  "key28": "2uzMCWeQpR6cycKPAE7uxtbTPtLhd2E4Cbmw7CpgPRHKQ4XBvKSRQrAV4hpEyYC7n9Q7m3jNYHa6ZKjBzhVornMY",
  "key29": "38gtgzWQQ2J6HEAVzzThcjC3Qz1Ti6KxoTc341ossQSpJAbAeincpvm9v2RDhtPjq9hcReartPYZgAzdzEVv625r",
  "key30": "3QjvJW5yw4Z5mTm4XkiHknmGrL6adfaY5diBd82VF24opxpJ4gCUvfGeDiy3PXa9wisa9qsKzXi5ouDAtBzupo7U",
  "key31": "5BHmWJdjvcxymhzEzzNJmdNzTBW8gzxGCC5tLevmHLjZiFRdQhp5gndmFh5K4YuAA4wgNQ8FTeWDpgMcUEPfsuZ9"
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
