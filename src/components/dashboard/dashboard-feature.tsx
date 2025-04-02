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
    "3xHF2emhiba4b1RdJrs71L4jtTcQQUPDYNrX24Kt8sbrWVG4D3gL3d9w3z4ikCJuY1Jb9LAyjUS1LNetA3UHPMCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jV7tEjJNLTdM21onkUGPxzJNdNjdeUpm5y7xwsJfrpfBHbpvLKNmvbcQGrvgSb9QZwKKL4mXGpEkKXzcPWayQnR",
  "key1": "49NhCjNANzmWXLVpSJobGLewN7PzHxiB32nQNZyJ2egpznUs9RsL9Vnq27GidkyGMLhiJNV5KYaWktWEFXzrFcQG",
  "key2": "5X47n8iDQfSrKKJPpaV4psm2LzoxhpoBm21gG4f9sQTwJ6MoghaJWWUg7769gsSrrRgcFu6HufzowwNbNDokEZsC",
  "key3": "3pNa1NH9obpht45sU8qzYWS12yXarCtu3EmMkyoqJNYZ1ouK9WncJeF6jSrv9cEA92km3CbCPt3cccfctDPkc34x",
  "key4": "3p5Ui8CqRzWUtWLCWjyhqLYiNV3b1gGrEpyh1WAoSWHjcXh31SnVfGGDK3bGCh8r7Q9HDHYUMQh3wKsXhfrMkuhM",
  "key5": "56gYTFfQYuyJ8TVnVgs9K84XUrbuXTn9LZE7bncE5nGg1h2AKeiSHbYubQym1T22Di2aqAguVmhiPTnwxGtgB1Jr",
  "key6": "3jH5pcUpEK75cpwi3bEteDUKhpcQGJD29fu6rk1kjtWoFeg5qirPKaadYw4hUJSFcRufkXimyReHEu9XfQXCNSvW",
  "key7": "5CYDzU51TKnarEw5MrsesAmLwYCiGPD9aehs5VyBRqj84S4WqK9mdWc2KvAfZSyBXfUMNA3EW4UasSXrGMLWKzH2",
  "key8": "3RbNgtV3nDT4qYqLngvz4x2fYSSgqP6edzVKr7kWjYYeobWUfg74HqB9jLg9qj2ek2pySKf8ZkKSiSgs2NEgPuBH",
  "key9": "2vTKGEHG8gvLd5CVWXAKoUzaoCez5sBKfLEvmMziaD2D2gazdSwTAn7uajMoK6hCB7oAqW6yVApX8nzpsLohhZgV",
  "key10": "49o14N4qVfRQEEEy6ZMyUcwewQJz2dnQwnRUpTnftxpXq2PBMnvtdd1yd3nENUHFbG1bcnj3Wh8irxxY5BGc7FVk",
  "key11": "4o36KSxkBqeeMSHrop9NUbCxMynnxHgLhppeQzV4B6SZUhad1KhauQPzLWEwpDifhymhHjrR8yfZaSiCXM3mMWWn",
  "key12": "4oXpeHWh9SJvHoHv19PJVvH1QQJNgWu5TkEFy3H3uQgqoQHz7dbTvPPhdjXpTAJvFUvcjr3aMiGLkRF3Pq1y44CD",
  "key13": "39EHw8ZaPscS35S1bM8GMpMqxR3GSZo4RCsTTFKMzqitnDsEAFz1SGbF6UaowutvNbLNUe5W3GxERUx88RAD7pcg",
  "key14": "5bND9tCX48bb1VLKG3PJkeee8XFZeejLCUe8SxVtQBTSrtx7M7ZbPRxyesmk4AXfDwgd3RsJetwKX9yVHgsorn3B",
  "key15": "4G2r8umqWaZ3Puc5hNBaXmD4Wr5Y3m2icLiC9uekWnUn5exHZeKWQFF7ckyUH4eExMN1d2R3YWo7dFbUreju8cop",
  "key16": "TQ3kUjkSD2zQ7MN3mSQ46TTvjg3ZsyGDPzXn7QS3LAvhfY9GriNriNCNvaDSP9TtBdkdMXmMAFMtjpET6ze1N8u",
  "key17": "4b82aH45BVgcvC2C1rmZr8USsF8wFGoTyYbph6ujX4JdrU936B6xv5DtdLtyj5huNKPpynGwuencYCvt5xCfqsCH",
  "key18": "mZvmJNXAqWPqrBT3uSnTa5zjf9hPNqahR6mKHxiL8Z6wvom45yK7vKaabVPSMevXNzhe1PV6uokrwaqZUg2tAmL",
  "key19": "5NzCKgdWTbVx7UdBveDa3ebhCzHdLVTz27U7kf1325m4A24W54otm6RzmkeDfUB87oJ87E7oSkJJAxzedvd8LqtD",
  "key20": "3iC3Xvpthvx7skwFQtmAFdddkvDWg6fqt6B6YKbaMHxsZSU2Kzq7PcwmSasm8GHxohLavnBF4RFt3o4fuzD8Vf2t",
  "key21": "3BCofX82mNMFsfgiP3uNF1ngyPutubju6QVYksxNC3ujqksXtykCiHNiVsYYh7Ev2eeVpV951CsVyUTWHPv988Ye",
  "key22": "3PNwLWQnG5knBzvmKKBEV1GoRjRBTnVWgYtMWAcy5mtLNYV1nV8wGybQNHwZLDfKqfJKNpmHykKjkUZD66Fofs33",
  "key23": "2CZ6abE6Bsqq5F7BpigSBR7K7DuRgQ8KEFHvqdhx8aUWGjWKR7CNoqQJTKQLw2F9LDoKSykha2wwvvCXbCYL2Erg",
  "key24": "2pPhMxXketawrYLgBrK9AZLcycwt3iv5WYfoiErY7GGa1iFYmxd2dp1uXLU9zWDk96E1aszGzauYmVkWV55fsYwM",
  "key25": "3r9ouvKDdLX3NrWEvwQhLKeVW4Njx71fqedZhYAy7kStRtRgpKrPYDunMmBEx625KWA6YAgBvuVeQHTh7fD7DPkA",
  "key26": "3K8SqvHQoWpbBscUYWf3Vxi3P9VKFMSetNFZ3na7hLypDbSBeaJq5qCdjEGmJ3eztJPYESyEjvcEwxV7WMR3vtPJ",
  "key27": "4BNoV6fQR1uoomRSUYxEqXcV4TYf9u3xnrp7yQiW8o4nJXPKW9VBJ7RsvBGux3GbYMsMDVVtwGrqA1QKqkGvnLe2",
  "key28": "5dvS1v2LMfjPHyQaJkRfwbFxX9bA3KhcLh26cdfS5WWaDfb6fikhzLnsikY79PGRL2pdKqA2J3HH57BcpN9Cxya6",
  "key29": "5UuU7AWw4UFmq53F89y1h3u1QNvAV2GXyyVHvLFzjDxNTXxVnWs37yTrN1ktrMudzYWzCJfeJ8Z9P9voBPMGKD8d"
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
