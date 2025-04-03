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
    "5U4rBQQrkeLKxKEx76fGxpZGbNZitzqNyL996rUz3xjR4NiRTVnAy47WyF4rBHu97g4GRcRo3DvV4E3Yi9wj8Sfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VW1FZ76jrfw4PqRYPkaPGBhxFt2xUB79zBqgbR6TGjKFDUSvbLkoekuMMvQgSDkr87nAZJ7pod6WhvLf7F2mkm",
  "key1": "3CN2X6b5qwHdZKLevzfrMaVPxP5NoW3HeJY2MnrXQS4jFGJZcSkmo1kD1WXPRtPbY69VatLAT3ZrogLucsysd1zH",
  "key2": "54f3Mkr1JSRE6ecihUjZNwWjdq5bhEmitU7umJZfTdxhSFA8mfuDu9w4XyqRP5PsXASBCrK65h4Axo1hK39v4HbQ",
  "key3": "4fsXMKED3q2LMTHhFUJVL3FEDCLHm4e64izPptUC2izyMkGAFbrcE2V5PhxQwQJPfgLyprnuX4zM64AS3UHasMY5",
  "key4": "3Bc8Dmzk3NXhXpATCSfrEC3r8PcF14FJYpQTde3VsgJva41hCnkexaUwFnaSos8uiWfZ4yqx4mtusMicumGThFDv",
  "key5": "4xJT5mAeuKAstdSnkrdqy9Wvaqz42jbua3W7DwAZjR1atYSw9h8b7vv9BqKt12w6kLEdTd2SrMtssrd3XJ4MKc32",
  "key6": "3oEndHqFAwEvKueUFPpg4APvVXshsUTcjsLi8vCEwb4e7FHi1egKmc3zbccBWDBb2WwZEVwPhZnVfpbi6oYkZG9q",
  "key7": "2r7bmJLajJMmPjE2xL5mjN8cRwBHKbKbJvgUBVCAE5pTmpviQqLU2yxLkDJyH1qLGofuqGBKNrWiSvVQDGpZcPn",
  "key8": "oN8mcWaYiTW1wvCK4y5NLrChhtYmvFqfjRqnjJ5U8GvK5E5qVrERBJLFJKTfUGpf6GeN6PbdtgmQuhX5vcFcQmp",
  "key9": "7Y7hWWi9SxnFLXqxtwE2QMbXj2vrctpCNY4mGWSfDBSWSSC3JWY2CVwiyX4QXUNMne4QTEvjciehi6b1ejum6Rw",
  "key10": "4avocjCWUhCAqU5xMUAZhRQeHzf5wwJTLsQwfEKCpkSqHwjzpVUvY39xNCXWb7gRFgew5CJfPmDkcrkk4JitQJK8",
  "key11": "Wod1zxubjB4DJjHEHx8eWtPKgpPqHbLDCfKpc4emRLiTenRUAj2XZAnML87CoEart9UfGgQGDw4TjyEEZvcEaXP",
  "key12": "3L1mP5bKiDzVyrdVLfNq9aj48WGKsjYfXK6gYMAVRV5me98Lc7izJMnbhQNixRdkWptHNRN6Rqvh5DgNZgfUeQzK",
  "key13": "2qoHrinDarvZkBtgGSYns3sSbAgQzFEXw99rn9i8mPgi3j1dqjmtdnBWhh3F6jWWAB519DviknLvuAWQMrKonJbw",
  "key14": "55ffaMC6kxGG32AMQmtmeR8Cn73Yh4q78afCCP1Jqziso5CqTCcFVtfCpPt6ishwwv7dDBbJTD9Ni2iyCdKoFNaK",
  "key15": "3pfYGe1xoNDnB7eEUUnaCZRiZEUEEDQkbH95562PJKUu49PqfmapARRm6ax76p4KSjeJscygxEQ3RMnTS2Dwm63d",
  "key16": "67SstLqjBJGaFU5V3J1ecCPs6HtaWouZP22G63aGvSyJdy8pY4mFouCqkNRxqRKUVZ6kg8CASuhLdNuBuKmHgiHh",
  "key17": "4SzD2Yc4nB5RAf3zemdAWoJbhiCQcf4rLZTDevBwtAT4jUsKWihTpiNeKDNJDNTb3KSAwzrN6rUfJ2BXHM1Ryh76",
  "key18": "3BDTLirwySzcgB4c9H3L2J3eiT7MsiJYSwyRVSs8A2g5swMaCSFEaxsrp7WQHjJALWoWPgi1QP8DJ8heGhj43wBr",
  "key19": "3ouV2MbBKCtguHvhpac8awEF2UpzFhfNzpxqjdezFHm5jcZ9RPpucV21cecCiKpeQa3WB4UnUrJcDrjDvGmdQpQR",
  "key20": "27jpYb5nrRwntLRVBC6xPBTstXqx9ebGLXEA9mKPgthGcamRxvf4Bu9yC48YReCuDXDSde4AvSwk4ibha9w25XC5",
  "key21": "6Cgq69WV47yezD58PkvdcLKJGFLQ6VdtuHLfLMd5AC565fQWjE5qTCWastYJiH7NztTzqC5T6tmBuN9Qgn87d6N",
  "key22": "5MubNZRZ44XgLC2z818gMJo9WhHreu7vvcyppie3brmGrLpBL8Rz5VstRSeDp2ZjW5YySko9PwSeBqPEZB5UJAFb",
  "key23": "ZfBw5bFMUGpy9jm1QznhD4wywXjByXRP3y8oTiEEedvkmTrFFSoZbP6gAjACT3evaWsF762CS2c7Lvribvk7WLm",
  "key24": "4S7CN8qqwnYwvKbvJQwjkcp6C2XsgwZepMAjxeynoYtWUgJpi1dkZKmyFbBPibNghPriqXtVG5RtEhjnBBSe1Pjd",
  "key25": "6YoXEr95nEreAbPWHrt1LyEqBqQvvtWVJd9muKuwUHBs4JRDXZ3F3c7M1gLxX1DZXKRbpYVp9feGMb4LYjQi6Ei",
  "key26": "5ecfQXtaFAt9WkEbzCdVr9eEixK15ZM1rwzXwuqQkRPVRGXA4doKpn1SecjBYQF2xWqCg9is5bXi4xxtnRW9o3EF",
  "key27": "4izAUguS1apRGCUXdvBJcRZkjsVQDuPa9Aojd8vr7a8fsP6LNwr9eETsL3c8oEAqRcm8MHYS6qLtqZ1WuQDSZXmg",
  "key28": "4mbd83cVrj3c4as6FQNuiWD3ysJJqqokbTDX2xm5bRW6JMB6q83B9NpYjdRt6Mun2RQjU1W1ecrxkNaSdFV72J3Y",
  "key29": "4E1CMuUD9JMhQTXNu1U3NZzaeb139sWsm2TpnQqu1is4L13aytLYaftLLqRsSSjsy15chdAjJqmUHzbw11yM2wYS",
  "key30": "641FAYxQhGNDV1c4LpwtkGwrjupEoU9kR6emFzgF9qc2PXnBshUJRDzJ5uXkjRVApb9QgVQWS59bBd1NZ7mQBeWU",
  "key31": "3rmNmtJwwffdRQX3LjC1tjJrQgB17wQovjMxvPbyw1V6UwVYMSVJubTFpQbt61VGb9vfrLKCDz7XVMmsSG6ff2eM",
  "key32": "5gQyi1TAhDmP3y2hAKnJkKQbaVSxSsaE5vqWr7fwQuVgBHEghtPbqWjKAQQEfrVaezAwDSyiypZX6wFx16uGGy3K",
  "key33": "2Qv34ovSSWhKiZzck9and5VN6UveT5ypRAmnF5iPiifmx7pvvE4eKbhfP63o2gsNCMuVYqkwgqFRAYkUbrrrEf8Y",
  "key34": "Z49Uh6c7qRLLUduK3afQ2CW9FFebc6DdZCYu776nurJZ7ygHcDDmqmuLRcaKjawcFjrTKxvjAVV9CymZZYpRjbi",
  "key35": "2HjNPjKqgHjaH4vR8dnUaX8WaNk9mdHoUKHFcwJx94s6JALAJPmyy4KNHNsm5TVxHyd19CkC8tybGZ6cMQH1XTRg",
  "key36": "3AK3myBpmSMnrCFGa7JDEJQErqUr22SNJuDGBKqvWJYyqyHZT3b76vVPSqBao5XwYJJaxDpjBe824xoJp8hPcvNN",
  "key37": "5gDvPFiVAkxEhWxJ1hAK9p8YBe1Rkfo8DJiLzPg6JUHRTefG4QpHTP6mdVmGX1q8zMFMH6pmB5p1N3cpiAEgfnVn",
  "key38": "2D7eVMm6TF9BuysBS7WiRr3NCF8Di32SigTJZb3S44WRc24tt7cbETdN5edL7JerAM98ESa3yjF6SRUB58RnE7VZ",
  "key39": "3tqsFmH8W3iRHccgosaaqdE1GhW6pfED8J8HMrqTj53zLuyNoBdUrM5rfbdF9hzAfLmDih8g4dS1QFT6mS2A3Lwd",
  "key40": "36QryBYfDB3EyAywKywELwxeP4vxC2HLuNfzZZmmGakTAM3yGZtDz4Yn4YCxrPJoPyLSxPLTieidjAREBwVvEs3e"
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
