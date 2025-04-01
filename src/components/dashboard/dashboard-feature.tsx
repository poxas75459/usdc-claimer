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
    "ids5R6SfuuYjc7QULUeg3F4rm6SNhbCyStw9j3kxKzYp8H2JLtnnz4YEKqGu7n1uixTkyM6q971KyDDGPJYKYb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDtvwgwN9y8zXDAFfY1LN7Suohxj2Wq7V9641ov6yjMzwwBTo1d5vxgLUE7TBgAyc3p6vtb4VqTcLJy7Sh9fsJt",
  "key1": "2FMBGSRGz3UXHPmMtmDbszBwhgpYBapK74MNM2FEPMcCXVHvFyo53sPp3sSCSJNJEtDcXjXpunS6FdBB9uakJuph",
  "key2": "E73m8vvKPV7mXhSSk1SZg7ePHERSCHrVHkmjrnhyST3LMQpfa5ps2azJUkqEN9catiCc6wunbw8QYc5itXtdL2t",
  "key3": "4reFrXWyto31CnyKGmi7rFFumQbEDV16JuP1exhNmskw4jfWyafpMUY485yLKngLe1hhWfycBXjRfu1pRQkXTv3Z",
  "key4": "WtvRYDVMryQ8wwd7AWDHShVFoNBVuaSVjDyV3TjztiRzx8yQW36ykry8EioY7yDhzfK2ZxQsirqD93VBdmoHgDm",
  "key5": "29KRtKfSVGHhi8DaRgcxYzSorMCY2qFv5CcFTidFkt7znz4CS9g5q8ybP11aNDtkkaRM3QKwsRYzPDcEtuigaCkv",
  "key6": "5YLLHdNz7aWW5TPp2mZEKMAmRNMEjpQt21dFCzVbz3J3i4SQnBzVQ78VESKNRbRj5Fx5v12ZaFzMPXhXGR18UeKr",
  "key7": "2mu6fVKANUgwTkfmRbEcBXQnyUSJ96BwwZEvBiv8LYKHjhvmoFUzAYZQdpfimWj162SZWGB1EFudJXKh3rTonTWu",
  "key8": "4ZvK2xDxJNvcvNNXpctsLqnTLNNSnautNNc2QP5fBfyQg5avHUZvNQpCcZwPv7wUQ1JNNbYAqwGQgXebNFgGpinN",
  "key9": "rayAFLKqMLuLFtjnCDQuVnNdgMFLUcqViJWqvctjjNDovsEHL1GxGwWm5TSZPEUYLJDPyCZWvNSveBFh8Age14A",
  "key10": "kz9bVF2w6wgdKme7AcLLAhCdfLA73LPWGt4KGZijxFkeMihQMqx6LpcPSZigZXixsDDSN8KBz8wqvAPYW6cRtEh",
  "key11": "MjHDexgjEKQ9Yo5xogWYwbqD4dw7Lw29RVHfkBtehNhjsWRXVvtrDnRLLvuzRUUQoMoVmjmUCa5FJs7JELNqvwy",
  "key12": "EZUmL4FSnu41icBuDL4E6P6jwUodCbipih8Rjk9UT1j26Q9gWSokyiiMbEckD9yUF6qqn8P8JDexpWPw42otuTy",
  "key13": "4FFghDeY3tTRD2EvLXQZMU5Xvqi5RUeNF6dvF78pSXHm1C2bSEBQYU8otkhKWKWmtZrbM79W6sNj5bUJu9RD12mu",
  "key14": "7B1BANikE7ez3ag8ogatXrPxYqKqq8aT8WcJXUbNzW6g8fPR1btst699YejDKEXgA6xQkEpyiYjCxMVkJPkNYFr",
  "key15": "HToZAQ5dVCRWVty5JdNTNvtooTwoAUT77fMXMEFpt9VNzvUkdg3xHzmjLpM6Ux64haqNCnrshFf87HhsGmcwGc9",
  "key16": "3mpTH8TAZQ3weGa7WoKRz3eK1ASvg6eyxMcByJZTRp13nYqv8EcGaxxKsrwRASQU1B7emgbmzKVWHJtg6cEMF9E1",
  "key17": "4KM9iD6VFcVRLDmQbzT3tXP1wu7cCszdJKdKy5bLN5vzrXemWanXokxax7YPGFXMqUrsE7FheLRBq5Nfv88ArXyu",
  "key18": "5HsrKhPHdoK2TXpz8JgXjiuLZytbbphzxmNKxjtRdZioizWEEGyhFfm3bNjSTaGt3RexDzschbWqfWPryP5NhXN4",
  "key19": "2gwdWbfLdBv8H5THhY8PJtDgWvrZbRdhHEx1s8vryezdyiTvZMGzwrGcTk6Y6SoQsPfr54fmaMf7wMuCMKQv5nFU",
  "key20": "4LgJxf7DK7NhsFbpNM4o4a9CZMDmfetoAetfcVfVfCUPAxjMALkNPNEApNYs4WseEH9vdMntMBT3iTE3aiFp7Cc9",
  "key21": "vD87nzYcEgqrojVpkta7WiTxhmYSErWJ7223SoSPG7dr9GNFwTXmoHTzBsJ5Wao4a7wn8KY8cb9fBRdCUMxZeqV",
  "key22": "3qyWEHxk2xawDgGK2ymi17KxBNA9nzeBi9xPGwxjipZihNTk6vwfvZ5sMv5dDQHsrVTkhT2baDNv8ijmJ44N4bbV",
  "key23": "3sjagjySR4UzWAbK4cdFfMxxeQ2cuEih5QKVGrKHbWYqA5zJdDj9Zc8zvBE54BN2AVFw2uxKTp1ULamkiobKTYLL",
  "key24": "2vJr6ksAX4RNi6dryMjXrQL43VNpsrJmosDzPpXZdVsZT8aGJe8AkKTUtZzJk6DSKxGVnTNHwNhvtSKvEiDZmfjq",
  "key25": "dLrXQGPXP8XiNPBbsVvRcZVkw5ATqUXNk73Mhta8qpPnKdxiyNRRMNbk6wqVVhCXnE9bnuokHtDzm7KG6z2W5n7",
  "key26": "4XbawdpteYQUSwyXkniKebUzE5fH77Q1MydFvDxkwNV625Gq9gDokKuBXuutRVDcYyjEyxutS7uzQ1TGDRL1fcDh",
  "key27": "63W5Y7YtoPBsiv68M3m8HRgoVe5fo7JnZdv3Y4CiqShSRjciPjJnkRwbYk7JJ9dYhUwwUoFXPLqpY8MhQztgP2B",
  "key28": "22ZdGE6ZTjUdT7hX6nu1pTK4HyjYhoJuAzL4N11kqU1UGxfGCBkFbafrvRE6wSunq89zF7Dp4pZHE1qZ7CMyA9HL",
  "key29": "4rJp2PbqVYCSYBEf3R4AqUFDRHRcr9KSvTARjisv7SbWVymKFacdbnX8cnvvo1ArHY1f1ZbwU8H2UYudkh99PaYs",
  "key30": "yTAR12dwtQLSoDkY4Rg3wj7EDSK7ZFL6KFqdkJ7mptQHnwPfLpMy7W9S46KJDxRVXqKZ9ayZjwa9oEhh1bXKnRL",
  "key31": "4oDNEiTwxRZX3fasePr7Hw5WDL3a1DKY2Cdp4MYEiYR4VvLZxBt7GRxNwbutXhJwSgRfiriM39GiacDa61JabWgF",
  "key32": "4LmP315K4bt3ZwQmcjKQTW6CmpmPkRYN91PdrGWrrsEzK4TnustBdkG8QRc68srQgHhi46MxiaRG19MVZTVwL34D"
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
