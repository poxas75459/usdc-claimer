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
    "5JHDTvZTbBaLyA6ugKjioQ43vTGX3rWjNHsPSPGpRGRqukWC8FRi6dVbtbnRpLmg7bh9NF5HQmYyvTS7g88bSuMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdYZm3htM5gof4CTZXN2vNV8vRiKytHD8keL3UkSFn5KKxB5xdDGW7HT9qkfz9UWc8WVvnBDZgTYEyBzDtaahwo",
  "key1": "3yHa37uf98y4c4xnYWD4pwvNDx8WB89z8CYpaWJuPuaxkCft6vzwZHd2rwzZZPEucdgWbo4QpTAm2SwZh2n2hQvp",
  "key2": "2CmJ2WMA9TserEXFq8Fw36pboEAXhiv6tUeHcRPCbvJnVBLGkUkt8wJUNjtK1kvoCaQ1bMsZKyEHchrZn7GX4UhE",
  "key3": "3xH5QENiEDV1mZfyX9w2LxvYEpqPD3XLusrshqegCVQPq164ZWQixJh33mcAjPd9TDTKiQoTohJGpuSUx1uUgT9p",
  "key4": "3ZzrFGLZ8pxntwBsG1SsjtQDZnqXjyPwp39HQ1xyuAftFybPHHqLuFVCbfjk3vKincCGYYcHaZtqWFJuJ89L2CL3",
  "key5": "2KRJQHxGajxmMKk8TYPade68xayvdd5geVQVrW4sBmSZercTkiRpJwxBYwaiPzcE3SKgzKN7AeUvgvzHjDMqeqrF",
  "key6": "RNMgNs19zeQsDWytcZpWFgB3UfAYQXFoPqHaetbdDmoZ77uEmjxrcyHPhvDihmN7V5WJ8jPZqL1APJBSkt2p1Ly",
  "key7": "4G5EoYqGsVMccnDid3nvxoWKCRNuFBNLxtFDc3sQxZswNyHmSKm7er48vhA4xfbLVs753uzw3MmqxrUEyH7eDDgE",
  "key8": "XinS4ZP31GWDnESCEKAoy9KxDdnAmNur9EoFMZN8jdC88Koy2dWzPfHGXzdCK9WAebDBCAFuevJzubk3cJvkjtS",
  "key9": "4rx5cLC7RAChw3p5maiJVds5YBwGwurWhtZmHQHqFMYna9VPmLnwEqJFbiGgJg5BDj8aAX9xAELCgsqeDP2oyWM3",
  "key10": "2BE547gpGDSAPQSzh7L5vkso1UqeQhfWmkSJ1daw5YyJGrvPueemYCwE9qv3uPAbPNL3pDQudZcTdoXEPynQGF8Q",
  "key11": "2eXL5kZEj6YnxanEwNfpQHPDEYxgP3JZkVQJQJYsrwJAFhVfvZFtVaeWgWCsHv961wxfGNRUwb873rNuDGWXqW1",
  "key12": "Ynjh9hNVbgR3rPDT5LgaiBQNqcA56mxqR9qouM77iwYm5wHuLBhsuVX3amhQ2V6VNJUzJJ26o5TEzPZnGKiNca7",
  "key13": "5Jc2rHeDB4Z6bkQPbX482PXBq4KkNyopXoGKGpJCA34aESFfqzCTnm1rEiFLmvZ3x5L3LaHJrajTZ3QvYt1Qp1n1",
  "key14": "54VZHSVk74t9oKkmrUk4QqbC5b26Qrv6ixtyGRp3UD6KDZPV5yVyVJF44voYdUnagLnrvQpZMXLPZAACmsFrSquG",
  "key15": "3CKiJB3PoDXUw8Gbt7TjaGzwoctYSX8HvhsrJNaxz4aVRL6Z5WHjzCrMCvBUxozcccBiED7woyCtNSSBuRaHoKVh",
  "key16": "3C92YVq7Ez9Byp3hPcKosZGP9MKDNsF9pfyFqYpRQfGKwL6kvfAiT2LuYMShDcStGHBVNscyRDLs6aU8bAx2Ud9a",
  "key17": "5h9VUa8RLPfhg4nWTT8oni4EtXNWpFdizqaCRrdyuxX9TsWjMooZ2D6q9TaEEQxGX1uhmXkhFz7Y5jby6oRoRG6i",
  "key18": "5T5v842s2vwUSf8Va2H7gmSNd8ETB5s1USmD8xgSg2ZXkCU6TWQQDrNFKxpehX7xM1gGTiqGjqHWraGwy5U3YgnV",
  "key19": "rxie7fdKeRKWUfc4VvXhCvG1T8xSFZLDudsT59HbBVmoSTiyTD2mmS6WMoYiLzu2LevkVS2vqVDyyx9GG74jcU3",
  "key20": "qPb463JHEqc2M4xeWC68zkfoKaFvjLKw2UKCvc7PB68Khrg9zePXmZcuDjcDX1K1dd2NM4jDxKPA3FwpZqHcXAd",
  "key21": "2uLb8uRhnyLEYrHT7W5hekPz4dCeD7joj2HD5QJiXLzhZMzSKEBVw4PpCg8kD12NAfXGbjrb8GJz7rmGqE72UG1D",
  "key22": "RA2NzpH9tLf5L4RNpoXKJjULJQiLUMbx5NLHHGqLKEorKwHuHm5ojUvDFvUMpXeufGpF8CZ3F4BMwT6oDp1gyq9",
  "key23": "2t2oKamXuveZqvbjTVCiXZagVzHRQSV4kynXRo7m4aQeRndTsZgg9WLDThLanMLaZtUpXH9wBzDWvXPCwBNPmtAD",
  "key24": "tFbe18RYb4Q9696ZNjHGeCBG7cmHQ99JxnyXu2kzDG8Mb5pXUxCeKyrUnJPE4Tf2mBUAwTzwUYBzzTqsLVcco1K",
  "key25": "2cSvyi67e9Rjx2mpPZBfBfur8duhaE5C7ZE1ggzA9ycCx6Yi3HRTCjsnR1BU91jqXyXGGRqqsGvGuQtqFg6nrRor",
  "key26": "uHdUTWw7MdEz5erQf14qkg83pSKbvM9AU9vi3TqdgtevHNPEqMXgjakQTCrNoAsteHg9a5o7rY3Gz9CW3PjqPby",
  "key27": "5K4tzFzNTRMuy83L7Zq8fmB6CiwkCzsYsTjU1e8j13DGmWHbQ7iTt5tBz8DatAbbm4wsCkqdhue9g4qBrvfkRfDB",
  "key28": "5PWvP59Rt81Q9KoD4Pdm8giQR1H8VDDYRw23v9jtgpTUih1YmFvR6i6wA4bkwuEmcqWNVjxfaTPNGGrxugJNEHWG",
  "key29": "4uxg61UFucSistLnGqnwT9WLfnfdwrgyTnFwq3Z8NTzLaf13rMcSgRsrQgysiTtH3KwGVrC8NoU5s8to6CivJdJE"
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
