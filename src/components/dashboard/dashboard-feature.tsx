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
    "2Do6LoNY3W1kA49xz8RKRw1sX3n5JWxx41qtG2bQ2jUVyDXojxaLrbdncMEQbjtfmSWfgsXaUwN2YEiJwDPmHAfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hMz4zrJWnj6RX9mEHDKighAzf2zD5rV2vhWd9vxrwsC84MxbzkezfShpAHxuL9wwf8nNQQ72RTgRJgha8QNoCH",
  "key1": "3FDnnU8LN6BsTJiAS25L9HZnZVNELCiQezHVuNETgf96ZrPsYLBeZcu23D9egQ4K6M2evrwQ2okDHTEzxg9nbkEZ",
  "key2": "8oVZPKK24SgrTc4e2eDzSMWsK5QBZGEwxgbX4tzSRMJEaKQHwPcXzpBAYaiZn5NEY8mn4LWfhZ73mWFfZGhw6rS",
  "key3": "5ikc9DjCYC2gifnAPWbHStkhVJPt6yaB1hjaRigphxbQ7DRvQm4DagXyQGY9ChQd6MpVE6PjoFJuv4sFqfJRyzEG",
  "key4": "3qYm4eSyCyMVSeRsrZjafho3koHdBhmFQvZ7LfSniLwT4FRHB7JYn9VEjkj3TUS7A4YNAM7BxwmDgSaLyYTQ1syN",
  "key5": "4GVzroymohiegAt7AckgyJEossa5dhWCVi61Av34Wmbfnqhq1FXXm5y7TTBMxPVTDpzBaVq9eKyAPcDV86qe5ZvJ",
  "key6": "3c11z73rjXSyVy9dp4x3qZNnWu6ihYWHFHo6LXKbdPWRfyPdUTyd885yYoBJ2ntX9VTYUZuQdX4Gng3vd3oeeVTQ",
  "key7": "pVZt3FYBBC9NxFZtxAdKPyWbRWKEQDyTVfNyWaaYWjq6bmtFtDNNfsFHFYWHz1Gy2q9EymaejjM61GrwGNfzQAQ",
  "key8": "637o4zDRKgLEKkT5cM9izxkdnn1fRcsMdgtcGQdnaTYBsgyrW4GDxhv6RaHKDPUcbFctpzKtLMgmNoDQ2xMZ6n6H",
  "key9": "2Cmy8wgcD5riCdNEWSRdQoy2V8PPYxaKiwJ2pkBRHVAriDPjL2pHR7zJ7tx3Fgo4twq3C3aJSt78AaUY153feZji",
  "key10": "3wn4VLMmM1pHoo75dhV38yEdLjRLEsyh5zMUXPvFEgyiucEhkKVp4HiWgJRkZZdx8NfKFmLE3roYTj3qFAFM1wUc",
  "key11": "3PbSt8T2pWdMf69gkanhMTABqSmDX3qB2mULn7p4FxtZwxBFWdQjAoz4ZznEXvJr2Ewams85EYJRKN2L2iELeXJR",
  "key12": "4xnw4ndWtaWLJqfqbeFKvHk1TdRj5tMdbtPEBvJXm7nzA1JYwdE4TBz6y3Xnc1E5icsaSiUEesU9KUghBnNjBDpK",
  "key13": "4yLsutRTFyekzquSASrvtTzjH4j4vBEiwK938u3JvBW3xXRuZe61RbTuGYoaAuYQzQSwJHA7VTnCpjGbNtRhLzyY",
  "key14": "3qKyvT7JTuY24UXSYEXUnmZjkoThy9YZrLyAVgXnDaVfbC5cqgXphh4BLHogpCks5WqrekB1E6aPXvE5uwk1VsLY",
  "key15": "59KQmqvL9KKN3mbnxY2vUBVgdbRQn4DiQ2JZFBVLdMQfZ364fU18Roz1u1MnaqZ79q7fainBx2zdhVVCHTTkbDm3",
  "key16": "4vLSAsjq9npwSELoNte6edPuHMYV2PMSdchdYAwe9ALDhU31VrsG4RCznU1TMsyWkou3AA2E6bewfrYeJrEmTWbb",
  "key17": "4t5c1g5jEKyaK988RFcShHAxmvRRongnUWCYYky6i4dLjZKZCErcMGUvqz3ej3GYpocJtfrHqmr3QxkEDkjY6rUz",
  "key18": "4ej7GNs9fCgALm6aKoySMKhGv5myXGfyQdTgvCA1JsHeJRUzStZZCqEAcnU1Eg7cmhWNKvM5v273nqpbszdjbQe3",
  "key19": "zKQ5Hn4p8A3ykfX9oGuBjS1QKiMxrsMeNCznta7oL5jks6yz1MJv7osj58jWLdfepnnuc3sCB8yDgPVaSAhNHiW",
  "key20": "3fEGHnbsHdWYFiYq4hMRDcueSGu5YF6Z4o3Hy8ow3KECc4SDNqY4niPdUgDxZSMvrAckKpw3AsUdyDKdGRxCp4sc",
  "key21": "2kmkSn67XdLiXuUF2j1fYiQhtszrtiuybUuCC8A4neR2Bit5kH5tcdeKcuWEggVfKvpajtS4LRNo7rT8YjdTM4aC",
  "key22": "5Xpf3TEoN2vcQhwa2zvLmYXa4rHf1jR926ksvDdsFWty5ZntCCBU7u9FaMv9WAtBFH1U3QhZdoxQjgnoxr4C1z1Q",
  "key23": "5QGWiJVFPB1CnZtF86ZuACmYt9A7R542tsquVgp5T2zgbJd6Su6TG51VSPWji3Duzvs2usdMKt6HGfD4urWdR986",
  "key24": "2efhawTtX4H94eNxfSssnTYgQWiPZGAb4YtT2KpmkiYbjr4PqX9LHij3izpmLGMLaN7oGGNC3cSxGcrcAjYvxyta",
  "key25": "JykEiA7aZhpdg4ikU6daNFV7rAkTa3jYnBZ4FGjEssy19S372L7gS2NTUDKYf8S7UHaDvpLXnaAM9aUZT8uQEH1",
  "key26": "31RfdpUuupmhKnsnCcUA51YY5vsByixnZEgruaftihyjiwTcZgMENxzXei2rF9eQiRJCng2md9k1WdpVmW4fqC9m",
  "key27": "4gpwNHNz7cP3ghoqZELC3mVi9uHXZs8NUTqDBpms71CpjG9nSsoK4wGFfJ5CVxNZ4z3wWeYjHMbYu3Gpoh1Zqq5U",
  "key28": "3y4uwcjWfTvwbH9ViW44Jt1tdeQurc4VaXUa6Rz9k38MELAkb1yGpzd7rRgkMSvuCpHbdSp33u8VAvzSTUxsxCuQ",
  "key29": "AD4vg63bomfhDcUxcsmqHjrqYbt6RmAzu2aMoJ8eKohXp6eGNHHzwA2fNGQYjjLt7EUnWfzxcGBbNuE4fk239N8",
  "key30": "3fBc1fqCiwQkbFFyE27tdobE67aqp5R6B2AShUw1asddyupLibKTN8DZwTMyNDyoeQ4KWyehJ2KZQvBSKMpYvc47",
  "key31": "3oVQP9GEP4AqWx2M45U6t1PXwF3Q9YLa9gcmWto2T19Hfj3XrQc2nJVZMENatPLa5LYMb8k2RMuFiAPUJswZMVrg",
  "key32": "96re3YtWkvqjxmwyMhHQR6XHnorXmwRZHgGwH6EjS2R9EQXrdbMJPebpDEpSNDesFrN8agcqzKeUVHJzwsstEwa",
  "key33": "2zn3ddiDYVYXb3SDEPJkEzS5GEcQMdyWaUmEZzpcMrESHeRpK2vQQATkAe4sNyUbzy3eNkiEEZ4RCyqmTw7Bjs91",
  "key34": "5f4rFmGYMwc2wAVnSDkdMdTwBvZgGibjp5CRk2LZv8oGY5YB3kre3n5eZdMMR96cJtgH5WBB2s86WAEK2WaLcmZc",
  "key35": "4ut1e9o3dMESSpunXi2xyuTAuBE6fqJ3rdD6tNBHWNUYGFAYd5cDHYn4F2fzV7WtJ8T4RuHx5Vf6UiYpcXyHaoXV",
  "key36": "4bQtKMzLzvYQRyBENpDMARsRzuqfwHv9omF8NUXMLsMc5vKF2Y5rVo17P6wBjEkzTYh8oohE5vSLKv44RYr2ynyk",
  "key37": "5DGtpRZu64E6SUFm2PaPBM14noNztKfLJv8uWxvY7T6dqm595o5KLFqqqKiLkRQd3rT2hqgqnobYqL7dGHQNa5ss",
  "key38": "55sh9qM197aS2WQKfGgznys8271RjPht2aBS2Kg2Ns2SsjgiDp2tVoUo9jqEzaTv2hmGkmepM3d2VkhLBVXUszpC",
  "key39": "5qpDdvS4NA2tBhm439smPLSFpUBh6dZivZkh1H8T4ZcuGM9F7qDRxRpaxaysWifDXyRf4Uqojh48ze3TBPLh41yt"
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
