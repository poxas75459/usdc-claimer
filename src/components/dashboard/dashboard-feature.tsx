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
    "4j4xr79fmPZrG9tHia38gSvjmJuP1XxqPUmjFCNBsjheusVfKrHMqVjNsnF3LDewC7TLSe3aQHTfNVJ19K53LWTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzRK8hB8ZPF4My82tng59yCivcRmk4Nyx83VVA2j3y9FVta3JzYd8RCH4Z1bByLuAMzfNhQsLvCRn7KZtnQXUB5",
  "key1": "4qaR16qvtK33W4up3UUgnELEMjFwg6upCuvdaYAx5X511fVoZnXu326TJk7M2C1mFQYEYWoUmk9KZXoNKYjXqjAN",
  "key2": "3TUmcpjH47U5aUKxoeypkfJi78Xor7zA6yacQNqWK1NYcpYLCePLtbp6nt2J9PqWrw11iBBQTTV2tjAV9duZJJgt",
  "key3": "48sMngmJzcSKt6dPY9Qntibu3Hx15kNsk6TMsu7wazVkxqe3q11W54KEyq3S3dCTt1tmizMV7bRouPdvg7ZJD6D2",
  "key4": "56BJ8f8cG766dtssjBRRxg99hUAyxYVgzVEEGb9rzpgZwntGsADPnmPwDAcC2jXh7itwG5C5A8v4LsEo8qFnqDg2",
  "key5": "27ccJCntokTF5pGPU8CmPHP9GevHNu6hJWYBencvzcTtMCHD3Gv84UGpHvaVzNX8a4t5fjE47Kw7q36ysTpCuVJv",
  "key6": "socLCxNy3QhrWnuGvoqY7gAoAeDLpXXe539jPsNNXeSYP7SE7Ehj3TmZGCUQt6jJ9ssVYUb6Vi1E45w3izEkPXz",
  "key7": "3rutAZT1GVASRAoDEiwwa9Q2GLcnVyxWSpNMqDSgntdcZW4nFeo8Dvx9NGp2k9SModDDiHXkVJgLgjQC3Zun1CP7",
  "key8": "igTz3R9HSttchZmpEy5xQkxsj2j6qjJ8dFyKGS3ndVvLxVNPV6VGvxyxfHFreK8Uk1usRyhUEATzaYxDvS4XooV",
  "key9": "56ESkwv5qZD7z4aASqAjyShR3ofWPD1mgBhBsbKJKxfrgmTSsAUV9KWasTHiQ1FqJJTEjbQjKvtxEWKGbyEAcWGg",
  "key10": "3fc9LtK8Fef6WfhqVfGrBPFDe5X6kUZF4CsvB4ixXK9QcZVGtPvDZjREMxy8jEtmJuseAGo6Ynw39j3Xmw4f5Var",
  "key11": "2C5mjuDkikLQAVhb1JGdZdu68JyotyjaiwJ2DNeXzaT6NMGhLsNaxvJqKwWPyPbHz1QShJo8YRifhspvvWCHGpdB",
  "key12": "3VXbt12y3SDqLUbV4oS6Wodjp4wkmiP1UQh6hyZETxpue26QQc132WUKaUxPUXPTNdB9URaJtSL13cEDGAgWn1ze",
  "key13": "4VKcEG8DoynUavX8rCmJjrKVKC8SoLcLgEoR9hkKHeHfNRSd1znkmTK5VjVq3zvWUazWd3CZrCd9E1BWY16V65vz",
  "key14": "4iPzwNAL8Phzf6ySgDPpmoNwK4YRYmfBxc789ZeqhsQgc4aLmmRNxLm4sRQLozDMc3Nx6H896AJry5zSfdLBYxMQ",
  "key15": "3Qme5SLZs2nhYrYAbjKWhyndbAgqdHC3vMUeXi8EKkpydVn9Xx3uXewk55fbxmmCUDoqP3ge4btaBf8w2crAoSp8",
  "key16": "CnVt2QB2cXfDqwL5kyqJ9qi1f5FeCYMVeJB5rPxaYjQVeqZetESrsXMREiNLhcb8XqXGxMEhpctfQQ6p71pwnw9",
  "key17": "KyGERu24ztX5jjn5AVp1iwpqkJ11jYzyNGhfTDHphKa1mkSFz61Vbt22TFFCeVYRuT9yGmtP4bg4LQsNCXGeKxT",
  "key18": "4SxD3hofz9xMF9Lkb6VoAEPsaC7dobT4DDag28KFYSbz5ZaYUEe7XafJkuAZ8W6birqnFnPNspxzHFdiRLbsLgbw",
  "key19": "4caZepTk4JKpTHoFLYGZaX9AHMhxuvDNjxbhgQmKHfWG71GfSRe6GN5W5EfqwRpCjAH1KtorNAhfMbz9MAqyu7Do",
  "key20": "2ib3hZa9w6bGofurra54465oqdZ2Hh99BHES6CamhwbGj47irBBVmwDQavT9TTbbcT9REaek3Uj6G25hNWTvXsUY",
  "key21": "4X56TiMDQAJbskAJjqTk7WTwFWvLkkE3TwFTBuQttSkwdKeyqeTuYryymQ3giBbC5gciruSo4wj9dSkZFt5h7Fw6",
  "key22": "3qWzkoM7E8UKeAsbrxzpxsxCLzzj2AiYpvY7Ka6iV65MxyBrxvtoiEMf5rJZ34NwDw4am26LBRxRdHpDpa5itNAr",
  "key23": "3w7G7uqrfytrK33aG9gNKaJ2tdp9sCEDGnxLT6f1bdKyUENSZGzLXzBbht7KXkz55QxDmXdyr4YHfdFd9oWRtaKK",
  "key24": "5Ft7a9iaUYwYR6mgG5wtjBFHCuWZ2pssNvSe5MSzdLgy9LaiMZA7vM5gVvqwZwgq8JWCHEnf3QkXBAPuGTgntZHx",
  "key25": "3tLonyNmZqM1Xv7irZHBbCEWZM18erjPosviKfwzGhdZJF5WabzLnSr1Sh1SGP4gkdKHfnXADVppaByfmXyd71Wt",
  "key26": "4NvQZBAkPb8arhfu986SSo26UBBYn4MXiMKUpWF9idXE6VjwNyTpGABVR9AKZ8TngDQXnbiFn2EzLVCDJoVd4K3g",
  "key27": "2DbDvXiJ94GYcLuZ24LjEFpaSmDDh34PTiGU8UEMexvM5j4VqdJ7jo1r2chC7zu8JZLqAWC7LtaUDxhV8mjJosrm",
  "key28": "2S2qKEz4sZd1EzYhkroYp9yUnkeVsCeorkxu3u9HYu2AnATXjR6uBTCGw9APX9Z4V7putU5fs23MNFkuP6BoX61F",
  "key29": "33duQ6KpMSpUS2nHw8fbQgNJSFwArrqToWwggcYhdqaVaK4CBJMJQcp6ZxR3d6xZjp7FJVEPeA8U36mF4oZebT85"
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
