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
    "2D4JKxLGPVasuLzLYNF6VTnn79AcyWweX1LpjcWNL7vetBHqEbDjA9XTqBjfD61EritekBuRndBgJYERM1C15pDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57AKXriDkdYVWj9YpEwUMbxb3Zjo2Ynmm5bqfuuCRjedgS3NhnhywbA8Y81pXGrKFxoMyDt7R5ajL3nNn7eB4r8e",
  "key1": "3Z5Fo48qfnreJgRA6VMvTMfF57BvczsDMeUnWp5DSVW8UzZFXCJabuprXt45jnxKgLkyJJjpALrvuycjvnYSSm8b",
  "key2": "3QPDXxUA2aUHJePn2d735VsLnoVeNKUtLmfDbp1eWHwFR4aXKVsijDVHLggWANAFkUGqYepovhCuQMhFDSNyZdai",
  "key3": "3osJfK8hCMaEb752CPNAa6gBSJDQxD8Dd4mxzghU7dFqcGxuL7sVeXZX7AsVhW874SD8ns8dKfb29HaNC3DGu1e",
  "key4": "3qtBMKa2EjqJepYCVwKQr4iFpGPXH8rmCNMNW9VTvhjgKktKcfcWmTwWi7TxUgXEZWSUmn5Adq9iBwjaudDmJGAh",
  "key5": "3iYycXY2ik91tGuJcJvbVy2QVu6VEpvdh2te1KgBpzfRSwK3SHn5Q1BXbrvyVXB7qkGSEpiTrFoYP1RApRDrxV3Q",
  "key6": "2AuYVewx3AbsEQmaoWT1Rw47tXCUvH5oPNrg2ZFvmLVCUaa1LNW6Mv9WfxzUidsaatNyew8phd7FH58gsERWzjp8",
  "key7": "36AAMxPt2NbmmL1jaBdKfQCJqBiM8xLTCt8vDjMVRRVyYW5xCSv5Mjh5DmgjPVNq7q6MtGG7ErgT9QHvkAem4pHF",
  "key8": "5uR5bSrqgJH4occKcv49ZEuRm9QrGwyPbuu3GHf7Z5sfBVhw6Pk2uqNeP8CDR4XGG4Ahq6uBz6xGWQ8WicpnwRJ9",
  "key9": "3QSD25rAMgviYGbnZQx5gDRrpoaqdQuVkaoL62xirA97hN8WVqPhWqvsf7qAStFQQVbCxEvvjmoWCXo4wVxKF31U",
  "key10": "25tirQbqupsqhL7kxEzncyAmRByr2CiWvxch62CPZgrVmCuiuMERakq5U7u9hvhf1udrESwVm3HaEQvftAtxtSWD",
  "key11": "2ebPtUs2g13brmjP53pWvXg8smu7X7zDN8MYBYoMaCBjutNz4RVM9QnyzLjnngkP3iaRYqfcFWV2oPVjxpYYhMw8",
  "key12": "JrBpBn5o7kdF7gidNcGGb4rKpbtU8HjiRHwHNRpPyMefEncgmSq2yKHWHwLhY8JWRGS2c7c68nPrytidUimL2bL",
  "key13": "vc8t8ybB4UmLwaXKBAMKNRjSuS2qjGfbGQ6cyaGq9bVeY4CREVs4zPKb1YDuut16zyrABCEB99h6RiVkTbgesJQ",
  "key14": "5fddJh7ZMRYMBUbqoANBqXn77DAuiDE1u8GyB53HhCRMee4mPtNLtF5swjdXCZCcarEN7AHuv3Zd3YgkynRAgZEG",
  "key15": "64KcEQuC5iXbU2aFG8FPeyz3Sda4po47tuhaVqYrVY5xF67wkGNEwvUQmdZzqxE1xTrRNy1rHuw9BTMReb332xNw",
  "key16": "3RNYuCdaMPUNQTGVeqZXugsyxRQ1hvS5oi7xfann7spmxnPgbgW3gDmTZshCiJY5aAYarr32hdos1bgfuhH4zfM1",
  "key17": "4U7W25jthXMVWoQNgLGwrJSDUzqncSzFiNNbu8HEcoCgYeDoWUM44N43st7bs5fG22uqxAue4wU4PjRya2w5hpCk",
  "key18": "4wE5XvMuo2YcqrpYZZcHWSDUdoiv2kRjD9K2PtfDkX9WgoLnkXbq5eNG3wtM3wyZSxTsmS2DWC9Zg65A1BVvU3tM",
  "key19": "3ydAxdbHKfrR3UsaQwFebzPf73BiR2uneH7mb9zxxHQP411CjXLprPyF2h98eDGg7HTgASHwqff3zL6hN4FsnqGx",
  "key20": "NBnTDNieDBaribT8zytEUU6AQrWRzqm4ydK3Xr5fSFZmGP18p1oR15rpQjoKHdRPcK4fYEokbgmRCNZQ24codug",
  "key21": "4M4QjiLV1fDVfNXbTL5wz1BZtZ3yDrSB2V7xqju6aDgQXwzPuHLFWPcRE1jHa7bNS8eLryMjcPKmTQdKBHUWrTG3",
  "key22": "4JgvqDk9EWRnMbtHCMuhjRfRAFuTgpnm5JszPaUu1cNLr1FS1A319aoLJf7da4sVUXQqxKb6WD5qbrubGyScwHXi",
  "key23": "2VMemn5wu5LffrVszgt816dWvbAGh64SkY72wWbJgTwaRdLmj7DkbjFBfVViPs3TySYBSQpNoAmVdyX4tkNBE8YV",
  "key24": "3KRL5ax2P74Q5QNrLGbZsq9q7xUCMxiu3Wxvxw2K72dpTFWU4CLHXx6gCxz9d65yKUJee3Q6PsmZRnyFrT6c8D87",
  "key25": "3vt6HPji1xJTKhxd5sGS3G8JuMpoVoSP7kDWRkLHCt13W1scfQuzx3MVRqN6kZ6nzh5P2EXnCc2SLLCtgJ75HMQ4",
  "key26": "3bTAhJnh6ttckL5k3WTzzHBwzZvr2XESD3n9cchuzxdYQ5u9exDwro6avAZUeWqfKm3QvLVGcU2BQTP9Aew98nTm",
  "key27": "37TQeHb6Xx9nUXKBS5n8MCDU5osyuvuLmXJWSA1GDXes6jwL7R5gANuPBZitwm2NvpMbct77dzgCqWfceeZoWMbo",
  "key28": "kkqGi7kAkx6rGT6wprjRS3JAcfcraZgXsUgrcTAPTDue8KpEkasFDeNDmGGyq8kBFdJcQzzrTaejPkoYJDizV8o",
  "key29": "34LVR9wrUx8hdZ4Gb2Eerg2k6ZFrF5QxEZPRy5s925KUFJQgQqNQxDuK554dtck8pndPPBoxBZsJGqFmuL66DSmE",
  "key30": "52njL1mLpPMSpKTffQ6Uw91HyQC9C7cJtHNeoNW3wnVoWgFVWL1bNxs4f8wthQEMvqRY4NHaSxbvRmG2f2ZtMfCf",
  "key31": "2LHoDmfN2N7Ye6L1tEqmH4sykuWnf8ubFHiKvevTAeJKfCHe7s4sc5vQryjfBdWfHdNfGkUcZH7gX6ykRkxmduJM",
  "key32": "2DHEi6vUs7w6fko7MofTgnxGeUf5WtEV6srdGT1SnfpzhJstj7ky5vFiBEHGDzSSkhmRxgRkfd3Nbyofi7LB4PA5",
  "key33": "2UGmB7ecgqz6wBzUQGSjd6WDWQTSRxF4kPWnBPhZYa4BAUX49SMKUKTMQ4gdL4UFWx8TEAT26565TtUm6E6YmEga",
  "key34": "2TpuGEtEGZ5ht1Fd5sASi7GaUhoLsU24cnXQp7CEb7CnyB3PivxBjiMc6mWgt8oUfyjoumyQ2KErf88Qtm1KVcdT",
  "key35": "3Lc2Fk8UDRNAXiwSQc2Fhw91gmKVU5tWzVHT5Fx1BkgazPn168BJLUZcea8xBFkFVHVBNQANbPYEkrHJugqa4UoS"
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
