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
    "jaxuAVTxzovpubukXTpf28Z96sn81QPvKKzhqkxnajDhPMtgZ1UMdqqRyLA8eBZYUpdtsLuhG4f5Y6WwGFPS86n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4suZ76XUEg6q7Kc9rj8MK645NjbQHVkwXWDDfHBXReQrUSBiH5ibNGvGA7eTccJYzUyj78sSzRPcECnRQtxwvDor",
  "key1": "5G4wBbevKVj8Mgtf53B6q7Z1FQugVpWYjrDCYJVkvfizbAA866nopzbcgyXX7fLAikyLtPqV8iwP7eXkMJMyYRP5",
  "key2": "3Q5Kkob4hfe9yo7r5o7orwjmhSWU7Dz5N3QurWwi1sovMSbYadjhG3qHePu5nz7RfnDRZko6pGptE8rYsdvdMuGE",
  "key3": "5pk8sQX4BrubsxHH9ZMVhXJuJomhLPxwC8BsbRTiD2KNk5UCkMryH2XexezasWUFQ9n4aSaZ3s9X6qsQ9J3NYwUY",
  "key4": "5QxxztK5tNGBNcmHM3nWruad5AuAUkG4s29kTacG2wEGzDSxcJxaktiPaXqqjBmnGiQSjV16xRNRf39YzhV3G18e",
  "key5": "2UVUhNWhoGgpXxpHqEjCLv1cB1hH6qXTo8XEyWF9ZgjGYpEsabH4bHsVMzZ7eedtzSZVugcZDR7ugPiYLJ3Jggtu",
  "key6": "52GpTzfJQe5Rqrj8XZdxz6qQabbMJh5ARonbJi8N1xD7hrQkvMFQX2hGBBMMzqdVDe2RWGH3pY5rGgSvn2ocQxUb",
  "key7": "2WCrpPQEzth9oe3iPBPQDJSnSN5Agpxnboinh3EQ5LyRgiMmAs5zVKsR59jNbdVQcQ17eDHZNjv79dxmNL563D9V",
  "key8": "5ibhHu3DVmCdC9Esdsq7GRM9m5mbNZKeRCWenPZMYP6XyuM9MBkwwFU7HXjH6PgDW5aN8fe1Ykk2rjV6i7iHeE3h",
  "key9": "4oErR28yZqVf4edVWFRxtCMPK2X98H8h4aRSZWNJ1UBLjcCe9QThdPGkRWvN7wQGGmro723kVLDpQ8Tiji43uTwy",
  "key10": "5rCkcx6pSzgtgNHTA7hhsLkYVPhLjMTdxi1UGitfoZBHLjRvCm6MSR5BTRErx9LfvA767hniY9eV6dDaZfWZHjQh",
  "key11": "KmcvzcM6DtR4jNwSk6oPBfBTXfYd2tRyqme5dRb26hfyPXwtpHi78XJT4KCC9uDywLxhf8Yvyrv4Qq26PTzgZah",
  "key12": "59gTc2umJJLnycyLxb691wUxNxTZHMFGKybLurarn4tCdYYZ3P1tKMwCXs9xzTMKaErsCF8rmwZPx6jhR18YwZY",
  "key13": "35Ec8eYar77JW2dkRL3SRjRV2egN5birvd7G4f4r3ozQwCiT8NAvFPQu52N9PXzpUgRmuM9d2v2EUmvWq2p7r7Dz",
  "key14": "4u7WE1DtdBs81f7jtntVXL6c8cYiwZNVk86U2KCyX3j5iCpNGcM8yK5jCqLEJS2Vx4gGQtLx8umKfSc1Uzrx3m7c",
  "key15": "4tu7ztunnEEfQMYPxakjqN4eDRiXUaXQiYvTtRzQXut3H7sDpv6P73Rp2VAZw7YtoT2Guzjvj3ccM6oLcEBYsr4h",
  "key16": "3hJLYQBbx8oX4t84Trzex4hcfiEgSpPkhQ6H2U6DhQqcQd8WhG6J12AjduniQG49girUC6HZjSkiynwDvQU2ioJY",
  "key17": "37kvjfri7jFTQU1wgMJnaYJ3gSrYfg5oBkKs4772mZN4fekmnkgCa4px7XF5p15kCDfixtjAK99zExG9sATaJjjy",
  "key18": "3yXwzGk9whcBkWeUbqd9EyPgMZiESUu4GhZuBdrh8iqB1w5Mzny7hHc5f1AbTXCvHzq7NTtEU9gAoDEEtN8N9R9i",
  "key19": "2GEpGyahUQyK5kDnA8AxzMXtfhBa332WWkfJbZpB5ghgnJd6EAUVwGDk6zazknHnapqApk8LiBnXtzhLVLMepxTr",
  "key20": "3Lg8E9L9LVgtNzdYtx6UcExvkMNWcGm7rkN4bUUNjc66yTSVr8GFWxufqFV7VdyDZPQ1NGVw9Pd3jmgU7EFoB6Yr",
  "key21": "2mxLED2zVj5KWm5c9oeipaov1G1MUJNgAKEjqEvNDUQrGuJS7mb7Fd6wUcPh3tm6kX9Ju9MjBDURwbxbFYBxeQTK",
  "key22": "2HZ6pa6iSN9Gyxe7ubZJ3etivombuGcUwqMkq95gM4nGiuqvyVKvY9Q3RWsEcvHcL96LeKd3j7j4cLEroqP96Wuj",
  "key23": "Y8btG2DWQdTT3E1NNkTJG7G2Z4Xz4BZwrk8c6SwdcipvacSsA4ZP2oEWcktZ9C6oJuxHQPA8Um2ijQv9s43Xwkr",
  "key24": "3oZbGgiYHDmWbHdEZCMGfngJAYfv8vkyhpeEq6VoQBCuipmrsmzH1SUM1MtqdQrwftkwPAutBqc6inpaBTNSYFA4",
  "key25": "2GuLTtmgPnBecTf6YVYVBArTJU6mmufiy7BuCiqMmQBdcABLohpjETzf5mL6nuMCjZd7UsdSNL4yqbnWnaZ9ojvM",
  "key26": "5BX4siaS3S96nKmgdd9wRgoNT4WQFeEtU6nB4wiuUdkcaj5ujDzUB1mq7quTBBcmNSmRa5qpW8FFuMN1bZnx35L9",
  "key27": "4uiPWs7pZUrkuhgBWFbY8CPHMJvUKmADVaWZQLAxP55ziefJdvj17Ba6N3KntzAUzefgjGDTTwhpGmW8YriyZNqp",
  "key28": "3sA4RozeY9zehm32NSwtq9tGkeTf5nt86gzidHuFo2ULXCTiToRTE1WWsF7Lda3FNQigXEFF3UjqU9k2hCP9zibu",
  "key29": "2qU3rbzmqZDec5G7yqQE25e9SadFtMrYJBtaLspJMbKvLAxDsgQLs37BNxnxFsTatmje9wjqSenNNAuvLh6nGUaX",
  "key30": "Qgj78mVLXsRMiQL92Me5nPPBQvRoaxiBXuvzsDctZUEQEX5SvafeabU6CJymLfxhBmFZZzaD76gmA7E2bGSykST",
  "key31": "5sDQf1B62HHdGszj4XXA2KJkNYjaN9TJuaLw5HUVGhp1F8fXLmTdetWezY9zqwVdkuawZuuZZKTGPYG6KMLzyJ8w",
  "key32": "3S4zVypJdbjR3zMyrPh41ANao6qXGtEEoPbgtungesHfk5T74kjChsCKGFHo9kuwvZEaebyz9fav8B7Ktn737F6t",
  "key33": "5LFDdKteEe1XgqWFhrxHqEdCd46kCBQNadnq18XmWRR4snmZkfv7XbFawZx5be3ncjUABARSAUSbmoAN7kceydtZ"
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
