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
    "3wj75T7PqPsU1xmrtnjJrG4BcG9bHDiqEzHKu9d9P7UF79w3t2whDfugYT4mueU5m9ZAcKMX8ScRTHpScn3etAiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vMQhmmfz2Ge2i1TrMK2V5qG92RCapupiCxHyMJSSWRZxNNXhhYXS4Ufx2TYjjjCPxXgCDfsc5XwnD58UsvvtfG",
  "key1": "2iwRfRgZMsM44dctaFSWXDGiburLhw9V8YcTixunGztpeLoyMy8h2bFbgvtAYD9tVkPci2zEUefCPLsa2qGgwagq",
  "key2": "2a5BiGYTgP3qgnFyHA4EaM79ZkYqaQgvFHRu9oLVNNVM2eV382AZ7QfBuDGcyJkf7h61aPERd1QitFbiopjqVzCa",
  "key3": "2z3MhmEq8WvZ2XnpMeCQwyNHV2UFGMnAyGV6ZTTpxaJLAVevd8Do3PGNNSyeB36MSHLJrKwjKfZdgzc2q6XJ5Y6h",
  "key4": "n2KtQkDMunRTT59krVFi2NaK6kzwY3ReKEHMqB1tUgSSVy56kPBtTnfm1sVQoPGdy5yQVSu63CUjfLNVJZzEkWz",
  "key5": "M7sh8uQP3rc6URr18dyFJfFv5cxnZFFeBCMD2PMyWPXYNG2QCELywVAzpqX9cw5Nz95Vzi4ECvqhur3VpvKjMpE",
  "key6": "3Zjoj2uemTK4o5aijjwU4jYs6L88VGvVUftjfFJmxyJHJFCk3gvPSFCzA3MqETgPSxn3HVMQ2cw2H8tAS9HoniTE",
  "key7": "3S3dqYw22acsqwZJnFeLecDjncyyLMBwXwarQbx688oMFAr1Ehkd3giZX2B7mf17SRjXxFiy15f1vrv8ugcuq6oL",
  "key8": "3KSpvRZRi1YWx9Did6oghjSN6tzedcH7vQfpchvy9UsxVZ2HuY6feCNcPSJUt1RGLxR1CYHWu5sGQSx96TmoAJpq",
  "key9": "4WvfHGGez2u35HFbn9vDj4kyBFNR5RYY3XDo8AuSWXCboYfSgTUKJjXPdCWGqW97TycFeELnRrfkWWBDiqKV4gLF",
  "key10": "59ahCN6zJatHMpyB39i5DRuyZptjdkenygMPVEJsAkAHXwUMgJTwwZmzSBG1oQrQpVpQvtFAEbu8RpV2MrnZ6Bsg",
  "key11": "4Wfnz3AkyAVctuz9xDCHZA33nxnV51rr1fLczppAXykdpZQQbewBLckQZ9oJ4LUXjbLecSGwdRoxyk4gdZCYknKo",
  "key12": "2Sx9nMZuS9n6kzDXDkmWuT7mQ8phScioUHSyFTV5WtAzAKquPVFG7dAoh5hNVufgjQBLLTBMnv4EFn1WhRwybxxQ",
  "key13": "4eEppcB4Lk8JWo9mQP2po84zeWwhLMLEYnwir9Xnd3WDSrnUsCPk3TYba3WHXg49nPkaCmE4HdQwpsBJfGXbAJu1",
  "key14": "yHfq9Lagzohb9H6mpAJ3E3wx1dn9V6BK8Q81vT666XexZsNHpmmiUaBBvTuBMC5H7t5n3m2a1oT6MsGTGhgXCrk",
  "key15": "2v7Z6q7zYzU7fHD2aBgKAvzKvBNgiKYNFLLhjKwonQjfTbx9KeH6LQCdisDXKZ9V1vqDq87PuuMT3qqQGYRJhVqR",
  "key16": "2TjcRo2GBSvfEvXgnh7WsxkJxve8jzZf1C8ZQ6Ei1Y9yxcBwzuhLWsksvHviUzY5BQTAvB4SruhdK28UqCyWHUvL",
  "key17": "TbjNjkWg8GiyhrsnXbMA3GKcJMkT1GG1xYkt51pDzqvCZDWdBCTEhgbNQEV9EtKtu9X1EHeajscgNXMJTSdc1BJ",
  "key18": "3nGFPsJp23xoKQ56VqXL9mXx4LCgrWdkBxQXMAVWRfK4K7bjoqf2VFWjpKL8neYQQqSnqA1xUZn3gPtqkgVWa31D",
  "key19": "4fdbaYpzzbmisfo9tkB36SRgi4TDPt26RzGPuMRvYQTSp7RpRg7zrAuLqxECrABjMnZqJeexjwtdYy5rnbzoNnDX",
  "key20": "381b1vvxpEzcykEbXiFnT2ykQw4jvaxdys8qiu6ReoDiJWo465tUnF4XYaYuzEgvP7GrLBqnJQjzTHwWTku5eQF2",
  "key21": "1c5E4wws2muTcrJzJFhMUNet8N8u9qhXrixgfMXa3suWH3fr9i1ZSER4ZDJynBpxBqaZ7oST5jemNEWxDGpxVY2",
  "key22": "DQsttH4HwBpNjjZK4pqZjDpfbchkrjiKuinzCdrta9etbwRd73SHhZinFWHav3m96hUW4STpnXhnR8C2LDFgp9H",
  "key23": "3rxxJgg2c5VGF3ZpqUatDpLS5erNEDMS8RjgAJEefDneZa9SY9kFDkvVeoy9i2e97XKrHJgMKBk8uHdwSmJyJeR2",
  "key24": "4ZNqtgVv5bxmfV1tX8tQYakeN3Wjpah8xyCk2SbmXMdyZXqZLLt7QMbR78iXfmsKoutPhgaHp19PzTEeRTgj6v9K",
  "key25": "31aVVpo6ECZf94denpGuj9L7NWhYz6suWkcuSs3tJyxZHKdnxvTG4VBXTQD2eC8LFgDZug7ZNDnDpScAPJvRVtRw",
  "key26": "49aFEQSdaoXZs69NgoMmpPcmgazMmLHDSQZopDMh5p9QoUJ7iKR14ec6ZjaCxNj4mjm7tup6U4qBw1pMhw3MpGcY",
  "key27": "2Z7X3La14Qg7KjdVDtjsMwmySvhGxZoqGHkG9pY7faaNE88HtzcHo3pkdShaSPwBSP3ePfG9q92s51FATfCAH2tW",
  "key28": "UJHBdkfibhXfkSNb4qTwVTk7kEr1oe7ip7u6H5K2ACmUMhW2yYs1KmM3zj3amo89ozotBS65rsQtUsyxS1Rhtve",
  "key29": "5KN9LpYFb7jfkXqZFrYihuUv7NTLrhKx98FSHJBwbcghk1et4zGAhdUg9LYmgNPbEa2LBa3YWCV1gzv4GeojQX5m",
  "key30": "2dk9tF1RfGJkhw4jZ5gk2uo84JkgV1aAiRGRWmAFmvfzN8TbNpg6aebtHr43ARsNgkw8L8fGAqbhc8EPhqPk3ogg",
  "key31": "4mqE8gxr7V4oGLxAToXvePC3Mmh52qBy4adaJMQtqFqTNXM6ubd4neZmLnwGbK8iD6eqt8dUonUcQdqWxNvyWUxy",
  "key32": "4omruBdxazraV7BnTd8MkmbsV5ZmBD4qYLLApQXcMaFwDTUCLPGT4ta5nPeJu2RRjMSBLBYjQwZR3aCUM9PLquVy"
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
