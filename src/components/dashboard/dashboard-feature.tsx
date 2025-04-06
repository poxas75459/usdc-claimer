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
    "2GjdN2Baq2zoHt7YKwjUVEdWsmVEbhtb5nfBs5DbGWZLB5B2vrEWNm3iiewQ7nGRP33ccxdMZ1zonezKeHWtj5kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMRBo8m3fFjjR7JLAPn1PhrCFefrTvkVDWm2m7zTLTavVSwevqtqPMomtfCmPxBesbZLajnbRDAb7Xw8LD2H1tY",
  "key1": "bGdbJ3SkJuUiju9SqPbhQXTo6gC8AJ8LpZkpGXLN6GUUiTS17ZjQBEZLkgHmbp8bZXyxFNKaRkEYTgwHeWpjx7g",
  "key2": "HP45PNiiHYEzzdMJ13i4r24TbGhAdyveeSCh1wHgjZtQNpY5xQKGmbs7cJXJ4Pr1G9RkdVrZHBRNZ4kYrErXJ6E",
  "key3": "5eLPsrdFTpmwwjn1ZhmE3C27zG7fUeY33gAVf6eknpqeWPQD4USJEPp37dFeZLL87KSmcdDXyPnNV6AGh7ViGFn7",
  "key4": "4prcYWFmX13FGkvRjXoiEJ2e1z126zfY42i1iJFpjq3dpdXF5HDbsbM9YvXMo4RQTda4gjm1vs6HL8wKNJL3DLEs",
  "key5": "4Jd9d1G6KxuUUL3G9uJNv6bRsEABZecf1kW59cQ3KjQ5PfY8aAXbSVVvD23NhLzShVixuiHaDoiKGEZg4eDrXMcv",
  "key6": "3uaGjcXf2dVk6ffZFDzxx1TfzVkcN2FPBTSGjuPBfKn2HMVY3gJQeAXyv9stRP6cAn2DiwAf2d3mN2Vg9tPyWsEQ",
  "key7": "44hRcuZaCvVK9CSj2oxVSpQLHopMJDuNPSU4ePSEVnvrzN6rN56TaGcMTn7T3KAqDLAnUTAhZJ7qobJ8mgCHqhA7",
  "key8": "3RL4gtyFCzBv7KdtZKyWvcm1X99quZwFeZvgEG15tPHQDtb5S6rvZe4FhG27VQe4nXeZoUpEhys1s8VrL8FCwBKf",
  "key9": "5wSxPXQVekUsjJmmTZinV7WSvKTL86w7RQuEyiSf9K8QXFXhcravhuW9eftahovtWNJCh4m3fH7anztSbkZhRFMK",
  "key10": "4ggUt4vNzX4aBZkWqcVv3wsKq6Ej8Lat1nDTBoDtbZ6Yp5faDzkZCnwCtVkaAzTVtmLpoisSmjpek6s2VWeJXhgh",
  "key11": "5qjSCtLyzfZgvbEVchbvQA8nNRBrrsBfRrAsX7kJjVEh2FUqb3zV6sPqxysohzYj7YU8JK7zi7v328rnTdo1iLP1",
  "key12": "63aTtMNKjuEH5Ki8GmQ4Udz785QA5oL64uKbKNkbLLtoSCLdZP3k9wbKPmBNC5UJFgxeBDHFJuk4mkV9YHWwgCJv",
  "key13": "pDUbJ5NX15HnUicY41r7yct9NbKRyPwmt1cEkHdF4KaiW84d99oNMkaXS6KT4m8zkHHkR4HWQH18jNK66b1jhuF",
  "key14": "2hELuCU6qi6Z9rNWDA1YNTZR9J97ox9ph9Ly7uu9K3wTEiLAkgwZTTqme3oaGS4NHGQxWUFqCKbkBUSfd58yPM98",
  "key15": "541phkz1iTBMZWhyfiBjLpaUcYh9cg3ZdeAAU6yHa1PYUKxMtRMw3sAtuvYLAfFsGZMZxFWwijfrSgDdKR7CE3R4",
  "key16": "2WKVR7TqtGDfv55qfE42TDXqFsEJKWGyAQt9jZJvo3bu8GtPPj9obaiWaf579DJuyVKWGdDB5QHC98SNgQvjX6uQ",
  "key17": "2P6XeFJ8JkmjApeoipsDQd5EwCWSKi7nHHm1nab9EhYPyNmgSnMgXDn32s79CtVj16Bb8ph2fqo9aDKpUC9yYMLc",
  "key18": "64N5jTbkBY8W7FqW7QMvY5vBDp3xzpL4zDjJ5GV2QJrnXpoEA9Kt7PQmBQWVoMxc7nLRd9Zdwo3XSQJfEKsL8fdq",
  "key19": "4CCGKguoRZdpM1Z4KAEpNDq7C5Jc34nh6vha94rY7RcV1H8eV7YMVjLCgChmCR1GdpzeDmjNgXxpRs12QUjXwEjd",
  "key20": "4HHpgiGoiP4KucruMiHaTB6tpkQ5Mit7cjUfhWw2H9caKSSNvZvSXAb7vDKBg45ujWvZQxZNZhZALJY5FU3CDAuG",
  "key21": "3Zguau18HYAixyePPxZmQAnJqmqHL9ohL1UPE8mQ4NvXSmDc6uP1ggcjypgJNDDJEUafHcKj1A6S4kVmSg427tEP",
  "key22": "62zd6N4CFPTedUTQ8N86CD6HhQbpvoLn6uwVe3brMXbcGXMoE4tm7yYtmrYstFK7LUdQsYd3bejikHpWNrCTUo3L",
  "key23": "4udNJgbRiMJkJoXMyhwoKHNAtWBVjJj77bFUwwKfK2U5BEofsC2bweCAM8axQJNWWVEYj5bonG5tr4VrvUCNftDR",
  "key24": "5rZM5cwuh1DzQDb4nyvukMDs88HMVeDEg1xECVS2YgdWCJkNmFW6vckTCtYNkhezEuyTEUJ7qsX79648FchWgjrK",
  "key25": "4RyKQgqcFCKEr83akdPM4YYcWYojaUAPtXVo1MBKTxaTmykMCYvhsahHjmPcM5eNaesNkgXYQwt8u6Bo3XtvpGbZ",
  "key26": "3nCVU8o2CK1FaNnDLBcNDtUN6QeHbAtZrngz8LUFZ2J9gyPa1Hc4nwxPgfLzujo6QdWZfKeCk5mkHf1j6hZ72kku",
  "key27": "5CyEKLcmZNPG8zeZqG8szssB5BX6KNjDJcupuCyx5EaQxcdWCCbYfgJmYAniFD85JixbiakUuy5YwxZL5hhxXV4C",
  "key28": "5XRvWZzpoGLdjY7d3n4LiNBVjRVeSY73Fpu43kpXjuYD9TfudtvhScASMZHZKSsJi1g2SmcfWg8KZXGVzEPq6gws",
  "key29": "4LwBjZQaD9HcAWi45QJyX962PJwYUuD475RnvxV2tQgfZrWs3iq1U6tFNjRg7fBRw1yQUipUcZJXLd9YrwJwvVBT",
  "key30": "4LUphUvNvZVnzUheFgaTXZEozrYz47AmXJB4PZFi6LHoxw4fhNL9MDJtzqgZc9jDKYvg66636KWp2YYkP7b8V2rX",
  "key31": "4SXA25jMDMAU9u7nQTbCytGrsba8d1vqx35r51hnwiNQNdz1ZMnjTuxKojU5f9CGGTWkvpfatviB5Rj86xLnwjGc",
  "key32": "3zArAFehG8XBDfzNJzUVpNdUz84Taq97jAnYm2VijfiWzTzXPYRwWcxKN79eNAb9cUtY1XWSGycNm7dXWUgUxfKe",
  "key33": "E8HNdHjpkM2QBwoY4ZyYSJCRSHeHpLA7A2QwhN56e8VVUtkceNdvsNLmEuGcx46JHTHw3K7uKCEt2iwyLQSVgr1"
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
