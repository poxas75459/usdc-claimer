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
    "58bqeMF9SY9KNPSdzXaD6yR1sJhFoFjudFqbYEHZo4R3joRWPrjK1xM5c23QuLPyzdizWTEViJ6LjwJMhRc47YQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gxi6xnY54jSzTsNz8THQaQsWg8CfLGWdENmrAtCfsbfSh31JuE9Wg6rxpc3GdiJnFwPJovF9DLXPUDoJypgR4Y6",
  "key1": "255kn2q7d7tq4EDsabg2KMafcEqaBBBBVDEKvz98VzHArBJufMaiV6jY224mNhCuAJSu1n8n4WA84ZsVFtHkBS39",
  "key2": "F7iEE3Qr9EB5t1GPUaKT6ybb5PQihediBL8GjMpyWAUTbKqQHF7CCyRyrGcGnRRuZuPHHaG2LNS11HeqwSMUxH8",
  "key3": "vuknFWr11pdT3mrRbkddqKbkthbV4rrrnnEZEQYCNcPAEJpbp6eV4p98cwcg6DMQm2L5eax4QZN89eMjUUob7Vj",
  "key4": "53HxrTBCWtUzxp3FiCxvnzyWxLAn5zE31CBRMh7zhjTx7yJ999eh14exENvKLAdJ5bZiQ7CFzH2ueZ12hfHEw1mp",
  "key5": "Nyq96r4J4ZDgaqw4bLzeoMmFKKivSkTvuTLoYuP5L2LG2VDBBZs5ZcNWyUFh8tHYgxTwU8xSeEyGHgqKyf9o1S4",
  "key6": "7tR6uf2G3DwLKmUKrjCNaZqAW9iNbp8ZpA56dmskEX1AJDeMpx8mWPSuSrVy8kRPS8f9B7aLHn9GoUsmDjJHcUZ",
  "key7": "4aUFrjLvudZdPXdr8LVwv3W7PfqRYVGgju4fniCJr5QzvhTpscq6QTu6Fi4Pqgv1GvFaXmqAX1QWatCQo5gKqRLi",
  "key8": "HhczrnVvo5nacg8GCdBR6fBMh9JLCL4bD9fDCeho5Pm9nymYxf43teCzPxDA2Ntc2Bkj5S9NvtfC6cNctcbPHfs",
  "key9": "4Z9foCT5fR5EJxcj2jKmR5RF3Cz8a9rAUtJocfKzciM9vtxyZXpUHMcvXydmWoMW1M8Rju148EFmt9FmBKBWhF82",
  "key10": "KjKY4D9pgr8k3BKSBZzcVSLpX6ciDooLGzxQQkPEj22csf3YX1m31eZvW2fY2T2LNH47M3A3KgTEyp1tvVLcAH2",
  "key11": "29mNqTKb1vDG2SyYNq57fD6EuSeMoTDVWbEVQSqUF4NixxnvfrZMTgTSUNntCzHK5cUGAPNAsUT68ju9eJjGYDAB",
  "key12": "bxp5kYTkeECPp1rxXBMDtatPraEhVZgmoD88sb9DQFcxShpoBXYWTgE2P3uXnUApJUtCxFLTw6FQiS3A8pqvSyq",
  "key13": "252YWYoimd4cGcZhzirfzNRpVDYX5DLM2Z4LFni15tPX4EQUewnrDf6ExfgkKDNk9ARHq14TDVPVQe1ywdirPtA2",
  "key14": "4XRJhTa585tgzUgn8i2YpwnBFkJQEwC3XAWn8CUvKEfgz14nSs2XHhiTsYwRnhkTo6UZjjV5FqwYnGC3CZxQ4jjC",
  "key15": "3QsKgU36FhJ4H6ztjx8QjHXGY1S3jfG9jLsaoMcRYhKujjmYEPzF5jGkS22bGUANh3n8JiM4WmaS7oBCyLgwey68",
  "key16": "5JdxD72duxRo7rKJeGsETeEUuG1WCw8TpZBVYD4L3VRD6yoWJP2pcxLqzesZ2M4H71k2MFQ9dzKNWDtr5gbehDui",
  "key17": "48QPMB6WrMEa19iYWtiLtrW9vWdC7ZkHxiiCLeeD9EbLxDBe3d64XUBuD4J3TRB48REh7wBXNjty6rJnKe6j2nCH",
  "key18": "5yY2hteMxn8yFopUkujoZx98YHELBXiMhzFoxvDVErtUhC8s2ErTz3efh4wVzugUEwygHxMySD7whXviKovs8PMt",
  "key19": "3xxD2BLyiHLC8rWWXXnsdDYiXZ2Wxx999G4RRRFo4tueHA4btezgDmD4ZN9ibJuHxVhDbLVPMDB4gsZdv7vE6Tbu",
  "key20": "4Y4uHBRP7VfsEmPaoykNViLvojGxqJaop3iDsTmbLGVbEYjqvHR2yZRtFaC63zVW5qeD7izcVA4EWQfTQpxzvF7s",
  "key21": "2rqgHGzRcKpcZDnNfAGyryDXjJVgEXHZMZfS2izvDcxFf1dfLvX486hCHPQVtbRTAiQnVfrLwkvkR5ydFXb3SiPp",
  "key22": "AtZxd3ousxBW4WZ4JibGYwFPvdDsxDAprwHBviaekkv9112iEJG9eoTfZFeJjVRm7RjK4RbU3KT1YgTNWKMN6bZ",
  "key23": "21XJNfJdENZ5rUSxAHtsjKUmCHTtvdZzSJ7XTsinuDQJAoNbhXdEerd3rFR71Sc9usQi2pTX1cX6R7RTxnP15c1n",
  "key24": "239STnjHtC5Qvm1BcBBjZauxVgnzoexGwyiNKLQz3URoTUkavYJ58nFkpGVj1aGzxe7sdSToVM9GXZDTcQfTentR",
  "key25": "gTDdWVuqM2MrqDkhuFx9weyMDKBizRrZZpGp8uBsMiPQ3mEc1nZj7FtRjPDCcUgy3mC6LUWGwkBwQ2zrJkwysN3",
  "key26": "5z3kfTDzNmtmcojAg9LcWQRMxSvzu5GsSmZStBjsRb6xzjhv9dinQArWXLRhJSujN46WgX1u4TtdWbkSnKXqF2jG",
  "key27": "5LCsp1jTn8nQEx5msq9143MR6CZpb58EQ7bkcSamVrn6qa1PsKG7zjPiyv8Ye7XGdJ7ygAu9ftzz1nDDYoJCGjhR",
  "key28": "3iYBdD9c6U6hszM3bCtzwq7LxR9Ku48caJgELYGeiG7QwKTBuhSgoev2KnAmBCjWJVYaMPHCk7nR1dWJg3SuWf6L",
  "key29": "4S7QQDXfo5dKG2mPw7LWDVUGExMnwG8e6UhijYjei6b36LiAVGcaCuDZ24z1iLVAXdJWnZN9WpZTbZVnwCupzEFE",
  "key30": "4UvXqpAzA3gH7JKLLrRwpP3H8BSVWp8DEka5hw4QDD1dZZ8BePS7pSNZ4cZpqxwaU9i6mAUoPDcxRY62hwomXGm4",
  "key31": "27Sn4qKThpsR4MekmgaawyAmvmSdY43qKwMAvAQafScCESGNsGHVzf5cV9d8j6ZhdgFGPEFRQLEjnCRvHHj1V8ps",
  "key32": "5AoFHzwsVAH2H17DgByHX8dbReMxaQeaVoc2DWJK2aWnhjFbfZNxx6ZtxwPGGMjWuox3zCMicfqF7AWBrYD766Y3",
  "key33": "4jjU4KQPidQrHrcdQBG8bqZyNQMjXTu1EWgkdKqA8LDXCNPoMcrEL9tk1Bs7XacNhZXV8JVPRp4NajrSjJB3caUz",
  "key34": "VQphTQo7tTf4KwziggZuQzZmnCsN5ZDJuPpyPbfAcyLDPyqLMutg8W4sc8ifq88PCAevpeYo3CiHCEHrSJdCRPG",
  "key35": "wPs45DKCCdAUBsFM6vDrTEuvFUjjcos6Jfe7Ymp9asT5NwTSkPGrYuWikBnFxuEQW5CeuvaJPvnwPwkBPaq2fhJ",
  "key36": "2BKPVut88xWw1gyoMcnbCVYqWnvtJgLufoon7aCpXSTEs6bEQ4Jh4k5EMYAyb397ki3xkRSpA9VShpc8aFoBLi9Q",
  "key37": "4T623dmZgkSodAY1zs7k8EkDZ3M6YLSB68bUwoqRTDv7D6UKmnKxxw9xQ27TEzS3165JGwx4zorhtEk4JUHRi28X",
  "key38": "4AkVxBpzFgU38wT4gqcnciRDLSEDeH33gZVjDgig4fRUavM8Fz6Ca1Qkpz7uC3ECENas8zT39FUsSmsKmanAfXKJ",
  "key39": "4WhobdhTe3xbQ3RgGvwUUuET6YNUgEPyHefF5T4WGaVDUZiWeH9b96WiotGYBRHTAjNk57Hrak7SdHhCjyFjLC9C",
  "key40": "NNWieHJ37iMH4siLfDbHNKG3BedC7P4sFUK55QmF5h5AuQfBEHgYdqjWmbScc6i1WJNMkHbC5MkAizfJWmhaLFo",
  "key41": "4YBpuAbt8ib3PeiiE4yNwLPTANpCXohmQ17sGbrLVeTiva9RnknMW2fjkXWtkHssV2GAvMUqNxdAxjb3hNgs33ct",
  "key42": "o5FzpCRBfEfZPSnrSaqzMYesi2imxQz7EadWQbUM9onsskEcdQTuzsEj4u3mnwMZBJEiFSFnNDpRHjcSucQUj1A",
  "key43": "233pUZvvXcXtTYDhiTuX5RUh4ZrUCnJ5B7dy5CevA65UP91jJCAsPJAe3o1Mu1NyQPcMEjpjbpvQ6xhKSVLs63cy",
  "key44": "5qhufR2PXGmUGQD6iktLUUQrXQsd4GxGWf1uhow96XkAcRPu7s1bAsjRNZE88vEaivMfzJxgiPxTAYpsxa8tLEDK",
  "key45": "3uJKs96q9AtEdae2JzSxY6GjsdBs7qD6pvPjJ5zUqURFz3SF5EtkVv64452xWgoWCTkyoVxjnqyHLVaoSnXQ3wKk",
  "key46": "31uxGXpPjih3iG6mYCKT9BukL2yqG8aKyK798t4iTpy7PStjRBmqeXirhLDC2WVmd4YoAdPfknHSZEzYNDjw6PxN"
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
