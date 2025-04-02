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
    "3pvxQTKz3gtmqMSVqSzeMZXPceqHiMXGdmaXVzP5zHqgDjUmByBEhsYEevuVzSK5Tm3UXCSSu1a12VAH9yAYsVmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MeR7Ab4fgwMHH8oEeJ9SefhrB2DWw4s7Tb5g9uHPS7BY99915YSSfcHjAKrpuxDsuB8WFDc1Ub369ja1GgsdkKv",
  "key1": "37shDupejyMT5QC8ifQGMZ7u4TSx5dXLLNpV8Gk8jBF1aunWTnfMNWQnpbSEYjRmLbXVx8eV7Fr29Umzjrj7VPM",
  "key2": "5HP4MnvQZhSTaAVXaMb9TZdCB8UrHVpyZSvGscj4Hd5pYbXUN9jvRgs6uD6xHjHWme3j6JLphmtDiRLr379ktTe1",
  "key3": "5FBe5TKQaBca9uxdiVQSiYEM8zYphVz7ve3JQcwSsWadBPoADZ6QJQGaksc1akEopQak537wHiJS4dius3cxDwrV",
  "key4": "3RMooH5WKKsV1y2jC4LesCgSTjmboQqbpMKbbvQzzpGhmsMd3Nk86LJm7s37j7CVYhPKGdmdLTrXLXf7u147M1Y9",
  "key5": "2pnjsE4m2DNGTGCp4zAYrLVmsvGGzD1j1ZmFJKMqJD6JnbHQU6YZymtUw2RYwrjMHpmdzovNEUoqYdGCAqCbCX9r",
  "key6": "54jUKLkpcRyvLHbCg18S3Qt88sVx6UUHsMhQ9rGqqteguSkXn1o499GPQWGv5vBaYLkaJRzcipG4RcJYy4eesKJR",
  "key7": "3aVPY8YhotUXwe8fdnvcyCRnBE1HeCmQyiyXyo2NdK2t1KuShkJizZoGf3tHRnyqHZzrjNdk4g57k7fTxEG8aadc",
  "key8": "d5dWscFb4D1LrxrAx5iqfi7VKJnAhjMAJRzys6nSN8JK33hSut61vKN5FgYZwJXjTsaCFbGfrWFvLZtu1crAXjK",
  "key9": "ynLhnedBWJB8rZzwYAmYVPon9zf2kAF5Wp7CCfWiu7xyeFv13bCSg1nfDCe3mQJKkBqFT4oK73JM6mWwD2ySEpe",
  "key10": "21WsHMGXrmvRDch3ebihePDuRGj9QzQZdsreiLeXzVKiXVNgDid85DgJTkYbgGcNzdrBnwvfMj2GAfzGQxCzDNWi",
  "key11": "2kfAem1HFdQR3stPtXNL2XcWcLWvMddQoWqAeUbsB5Xi4i9Nyo1btxJUzsh6VMHkDsDAqccrUk4M8xTUa87TwJfC",
  "key12": "47KwUwTQBfXdFmJ8HeNsn5He1W6hYF4Q6FFRbatPPf3by4iRDjaArss1rZrR4XoPWzDyiWGBVRsaYQ9wT1ywjih7",
  "key13": "4PoS1eq4SNBXPtFqwKacWogY9CLmgzurpNQgfGQ7g5Y5pqcNQiEjCuXk2iGaMArYwWQa7wPuc8v7guZ3r6ypo4hd",
  "key14": "XZtcJRNSTktnFA4EftU5ABszQjHedX3gtfENc1S4YECZVanEcTTgqDXikdzY9rcHCY6HqtnyL2HVRcDb4wDT6ZB",
  "key15": "fEg6oUpPHmhQYsKVTriPpazgfrwisoQ1sAYsRTsYp2CWoot76iHD8Ry5EBbF44MzEen8ShDV3d6qjszay7Mo47u",
  "key16": "2NBspvitX8x5W4xXE1JFv2j7mi8Bb6M2Rf6dBZcmjNRpeRSLrcBvWRnrKpgiEUgDsay6LkbQrfQHEURHF7Ucmbq7",
  "key17": "5AugpUWrfACTaq9eDuADdytZkvaPgzZtfLCViWHpdspYwtvZVEb1rFhF16sTNYYzxezFzx9GbFvSr8XQ7tyXq3nV",
  "key18": "53UY1yoKcoLHTsctpgGihLi2G9V52WujibhiXe13LccTD7CpxPK5wrcrfpxAYTkdXEpzS3BoLmAt9EVQuPdUBCgz",
  "key19": "55sRrp3f3ETdmNEMDHuudGYEceU8Ht7nGtCR1VaF4wcWt3zPA1s7DThJ3MCyTG3PZA6aWVdhHqo4HLXqMLKvAEhJ",
  "key20": "4ZBGXPtx7r1MPP7LcqLcFN4U4gw1j7Jce3qVnda6uhceSMKtzDRch7pDr97s1bp2UH7JN7yj2CBGZ6Y3GmTrBJNw",
  "key21": "3QdBpJNc4fe7HpfCCRKWa3uaYN1rgigvQqpcWaYPY74ghuuWtqc9m9ghTLJ18aX7BCVmu61z3dJeQJA6u3PVifWh",
  "key22": "5UkLEta2BG7QvKqZLqDiwVNWKz3Mb6EfuoqfdfgPgsSMNjp75s14DzEENLhCgUyvKt4qaWM9agk9LKcWqahwNTki",
  "key23": "5bVuoCAh1TVX4comHbqg1YhBd7wx26SBJYAFLk5Ftc1xia549rkWyf7ShmQSUCewuZjvmfrepbVkYii9RmsoKUyo",
  "key24": "5Kdx6pJzH4YCbzNnDBJNSpGiEQNHefw6uYsrAPrQHkALVZbeLmYWcPmADb7bb2z1QiMpsJhMfLpk8XST7GNDexf4",
  "key25": "2wPSSEDJze4PytdxpiB9JFtBuPjXbykBcQq2PqgUChjkLaA2n6L6cQQjoJyvYnRj9wjZQV9H4unvmtSjDd3p1pyM",
  "key26": "2aw2TbupnZ18wjaVMzUHZXGbVRpfEmUEmh1KiALY3AazNcfDKvHpksa4UzwpJHJAVf12iB3WSWvf7FJoy2Ttkea1",
  "key27": "3couUtXGpC8cHjko9eFRxfefnQZPrzjUvpFi9nHebBDDJAtEtfCXE7A2XNrQZVG9dHdivE6DuBtbMhSXSjpmUZxF",
  "key28": "5mqMKwGHNMDLnKFaCjEwtbMMoEpfkH4r3vyHyUgDXR9PDRYbqKFQ9YCdMzNo6ZMFL4t5GYNXUFsStf5eqBNmuYzv",
  "key29": "5QB9MLqnanSowrkvXBgHEygsSSFb1yi1rDNDmgVEipsbgY6dJe9wULFobQH8yrgZuU7TPsM9c638qn5WqchtUfdo",
  "key30": "3Poby1tYSn7tCtFmbBXaUq3MRHvXx91ENVEyDHF44oikWScqSezNbBhNtnRj6BQ2KJ3qBb4CRmrLDoSLbUFohR96",
  "key31": "3FiGZwjbJ5Ei4vpxepupGNckBrDUJxo3wNUoK7fT1BZwVazJvzyaPw1jCaugWSp4VLN7ZQ7DoueYQUfLcidZkiCr",
  "key32": "3eME5kihtqdBcCP81Rxch8QrPXo2GbzkbcCJHdqVamcLVSFmVcVYBdXuzCT2yGf29v9q97K2aZMSuPTULbpjCmjR",
  "key33": "2vk4BSbkjEifScqJvGR8KMEJGw9VQTeThBYWkBw2s7zNTFnh4RyayskmkAtKT4CWYFhtgoH7qT3cFZgYy2yPYNk6"
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
