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
    "57CxSzfC9UD9KSJaZvhAM1hJaHMQbB2c36oJe2XEGTrf6XLLG2UE9LLNXftSi9U1X5cDMEVxfWMTD6rTUGuF6cag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyTBgumvVmCCZy98dhUvW84urT4D6CkQxNbEnyHqUzaSa1UuDDetnvxEwpcxwxeXpc5VU3dsgHpiTHUjDpTyKx9",
  "key1": "66Esue9XH7io4QQ1Gi9wGi449i2NumHparXtycKtV3nSjW7YZMTBsgFsKMstx16n9i4vL5wwAoWeNabgEWrNiYTK",
  "key2": "3LKbRPchw4UEeFejJFMu6fJEqoMLuWMtebSKubWEjT5jKbimN5wvy7zxMrqtrsZ2hmxwwZAq4hcxEtU9tLZwvbz2",
  "key3": "2zA3tdFt7DtpJhWsffkMKdv7o7qyETjppRoCtmnLJetKg5yEKUjo3FS933GT9FWZcpB86ZM9FJ5rmLW4Gq1TJrK8",
  "key4": "2WC6teaYkTKYV5f34zGfZD2g3z5W7DvwGV4dCqjbpLnjxeARd4XX2Y57ymi3rti94ba3nLSwa5nSd2xe3vJEdZ4Q",
  "key5": "3wNzEss68NVroJ5GS9xfJHVdUkZkvUPvpG4azvC65yo9Y7QksFcVhPV8Whtvjzg6DBdL6mvLGapd2LQbM8Nvhqn9",
  "key6": "2PL54JHdZuCVJQJbcZ3tYLyWddQ3vziLv11N6yf4BdeJUiBJFBZHawGzdBCzAmWqo7rPAtB66JWYJdGSkQE1DCB2",
  "key7": "rmoYKRMt9HeUxLTMee1LtZGmj1oLmEHjcQHWTh8WS3FaLyHYLubu97eGj5jMj4kUs29vHY77gQvLAJsAbSeQ49R",
  "key8": "3TfWJuShAVt3t7PWD3JzfyauDQuDziAejizj1ghj5rJabVrUqoEigj1NX4oR5ejGQoxdhZXYZf3izjGknToDDaYS",
  "key9": "5k1dmCpJXSzatrXEnJ4v85Hod6WVQxoY3cXkZEQ9ZhgnPkwkXUvZFQFMXn7RduQUDnfKMwN1z1CzBG3h1KN26zkz",
  "key10": "4bqrs7mZ52CAzxHTXtJf7u1V97GmymH1fqQrEAgn9FkxzQLAX9xS8JbKzsMtHdig3tijzkBK5vEkx3Q3kyhSey18",
  "key11": "5NPcSEM6xhnswxgA1LbZ6ghsFKCXNFfu8JfjPK5LcyNyoqjVEZPfPBCSvBNNd2hbQEmmhSSyFe37e6SmGdgSppZh",
  "key12": "5rMMU9HGtfQgDAfpXvcFz1AReAJKFnENbKTNXXjE3t9GLbah7MyzhEAZqs3ecJtFWmsKMXv4UsJPQx1p9s2kG93H",
  "key13": "3iMNzQUFXYcHH577wRRmVAu3UqKMze4HZzXkZf96WC1228ziu69sEuWXevs5UFGj9d6ybuBKT9xcmk8n11xhnncM",
  "key14": "2aiFPddZLpFzhL1DzkpupC8SxvNcSzDLqtEQtJpY7UMkjQi3xv8j4w3xqEF5qMLneq526gvjCfGnhpixhgGWyNY2",
  "key15": "4p1ao1JfQRNMCRyyvopcSRQgD2ayAGKg2ZGy2LiAnjxUacTmUpg5JBtnKMr44P6DgNbtn9BkSasmHQZN34Hh2PAr",
  "key16": "5Vtq3DYym4XDdieCbrUMP1ehWpCuPDqi3Vu3CfvLCrneLy7R6ycYx68mjZmCAVsr5GB6DTrdCzDL24AxgG5Yquy2",
  "key17": "4wCCFD1DSwzCPxgDEpZ4d6RiBoa2Q6eMAYFmjCupRz92rkeaBMGakSs9DrU3SV8BWgNQJRJt7ZxEdkGonzsWpZ5a",
  "key18": "2jPjxXLmcPb2Go9GgjdQMKAUn6k1PKao72L9PQqjGEfxBuv3DkTFSAGax8Ajtnxg1s9R3WcLBYVS58oVCuNz4pZz",
  "key19": "5Mkbgwg5cbhMo6xxjr3422XAtKpKdJRX4ds9Hd5XmQNhoeCddtNwCNQPTzm6ATB739jANg9dqi3wWxecJ5pP1kuc",
  "key20": "5NPXtPZxCJFrwRTYAJHajkfFPUBZfxv4AixArMCWV3MgVi8GbSC4TZT3pz52XxBTVyBcZCzBmkMz3SgpWB1wRtg1",
  "key21": "3bkaaZvmvmnjFU4zgHCdAzVT5J8Ti9JmZnJHjc6Xjh7PskwwYnNR15jvYE94k1iNZRCwnM393Ld4PNWtZjC3dwgS",
  "key22": "2kpXGX8dsQ8UbASV8VoJdMe4BkyXXzB9kASrjBfePL6o8Zj1DQVqSvEKNNPaY7BPJPah3ASyNQYSbVDXgLYtNiqw",
  "key23": "52ijTrguw5vo2fP8mMs6m7VjxcfkrgrRqgds6vbhU3sjo4fHV9oa7fLoKmkS5ZgGjaDTZBrQZw8GngXsuUayaJB7",
  "key24": "3jNRR72dL88mbiawaxwAJYCPULcs4ioaUgpu4BJKVmQpV4oaFF8nEf5MqQTEnaqfMF4pUQEKgEU53LyMWEK2BHiJ",
  "key25": "VdYKo4qM2R4umW219wDZyhQyXzshWS27YWrfnuBp6uDhCXRar939EK4NucjtpuAn5j8YNYdckuDjervUZfXqHWK",
  "key26": "KMviUGC9mp2BHhwk6UNgcmboCjkGR4hYyqvforBBmSmTqzrEDLsq1RXUxqUrEgxExzbZxawEV2qkppz7UUMSi3U",
  "key27": "GS59ywaXiGozJsJQxWDeQaTp1qHxpZxSLK58j5gpAQNRxQ8JMmhBSejDKYyisx8wL5qLBiULtuSZuYGULrQdZKA",
  "key28": "567iCXn8JpCmxuwFbc8KPBtGn8ibbHZXgzCUSSRALw3TmKaC6pTTEN88H9HcWH6AWTd938LsNqvvrgpyDY7BQXpP"
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
