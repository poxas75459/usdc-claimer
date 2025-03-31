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
    "4p697FKQGX1qPNmWXC1RG6CCwrb6drhgEFAiWDzrWDNruLhhpXVpjQH1BzosgpSLxWGCV9bRGCFeRjxgeEgRbUHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Pg6tkjqyfrhnAjCqmz2vCyixZU3gyNuKJdqgQ4eJHrtJYz655SWgBWMvR2X4V68f5avVoP9BbNbKsqsMnc1258",
  "key1": "2SVorH1hZkAeQ1pQ4cvXrgp8sqJaNVkuzPyRv4mPiCMeuN1au1UpXZebeaZwCVJiKbWwofaWRs1Ab9QqNVsJmxho",
  "key2": "4dxc4dehLXqCMJeNwsLgowZ9frgavGP4QZLW2Zavjw5n3n7WZ8ULhUQS5nud8GHcFTrri36Xm8oY4Scv97nnji2j",
  "key3": "TdiR2vM6pRGccEY2dPavbw9pMyV5iHZE5oiynFeH886BtSKEh6T4ZBwZNm5AYYQ4pV5a4N8wYSUjrH8tSALGGqq",
  "key4": "i5jMwmu8nmzaLnctY2Ng9vfvxtgJoCcdm4P1abqDEDRvVGRwAukh1f87cqY4756yANK65H1eYuQ2WrjSouAxQaf",
  "key5": "xCkANrNbYJHqtTpJmSbyZ39Czj5HUS7ic8qunUZ5HGx4fSnQx9xH8PW7t9x6mxyjcFsiid8xVVjJcE24qXa4mqb",
  "key6": "46p9TdigirRu6gu4NADq7AW89QoLUXgMMdYhEKmkfkgMUUuURX44faV8rU2DQM6WEzGbeiBEdSZoPz6XYXxjQxH9",
  "key7": "2A2p7U6qyUXiMnwih6PXZTMNsawimWwaKENarFGf8VsgtnFBWgGR8vmJPnXisx2nbES8M67T54g4kWCBE5k8CuQ3",
  "key8": "2Nm7VGUsrkMqERGAsT6dTqW7QK8zKthZRRkyZVhSbofLDjxhdWxXhHKqqRgnqWfGuXugDqQGb9qREz8Ry6yAGo6H",
  "key9": "4SSNAqQWCtJetW7pr96U7EspV8KDnuv3HyjXb1cSRBZz1pSfjHVysPBTm1mrkXejU61wiHKMzh7iSTGmBiJotbiv",
  "key10": "2hS3wUjVrKaCGsNEyi6yfiPe3a9WSAVpEca28gPtaZNMXK2DSkAFqXwx74pASEsiWimf9DumRQbXxeKcKqnaSpJ5",
  "key11": "Cw5NUCAzjA7VGZhEVpud4yvPxG47TN73YvukTfnqoxbjdkHiUSi3bgNX8d1J1bCLQq5BYqBUUnW6u5k8wo8avR4",
  "key12": "FUVPveW8LaA8UQzifC1v3iWb4FwsL1iAbiv62w5QgFPzRK5kSqVyhzTQhwMQH53F2C27WFg1Wq9L2v5pnQWjR4K",
  "key13": "4ceosZrxNhxSEVgZM6w4DEGLwibi1e9tCZey1mbcgUBNWqc12BrcX55Tq9gmSGvQECgiwtMmqEQNERd4PRtYwz56",
  "key14": "61Ehypy8sZCAjaRGbsRye77GjUPfSjxLa8pqbbXpjjMFTx6dh4QVbyZoGw83HAAMFUMBKaEwnSTnUBpTWPr9Kdj9",
  "key15": "26drVv7Ne5SYrdTYbq2QrKrDxsfE4FNF9Pj5bajv9MTWjBc9tcrrwe2m7UZGc7nZVRQ1KvCRLaQ2CfHKDp8PnMRk",
  "key16": "66modAxLHdgkWNvqpPtywPam7a6LYbWGf7V8sGeitqmVc6KJF2GX9ANiFpJurw3KQFsCX2pcCYBcWxC2GKBggWUM",
  "key17": "32iZyD6wkUj4CiErPqUXjPC29g46aGrTgfkkzuWhe4T4NTGGx9JQJ3wXzVQ5Lpz1Xa5gFjkb1ugTP7vNFPPwigyw",
  "key18": "2jgcAo3gedLFCgVZ8Rm24jq32sLpPFm7iYyM4hH8G3AkwP13NUhjkUFk1EkTTB7y7Kzq8qURhmFkkzf2i463QNj5",
  "key19": "3zuggTB2zUpAqwHRJwTzTmkYisrzdJcWmakPw72EMvpHUWKrfkUDEu6FMMHAb9zKEJZbwCnUgStAfrKcupi7e1ZN",
  "key20": "5ruUvJQjw1BdFTMi22nJRKF8EW4e2YjAGE8S9HFSrbUrijaWBy9bcEQfYFEfDeek4ry59aU1GgDi3kA1de4fwGG9",
  "key21": "4jzrDaWCR3VKJqcwRzbURQqXArvAoG2LAtXWryX12UEmh9YFmBAQWvbR9P9GXsYFBGRhPhuwv8mt5GfkZZa5MjPP",
  "key22": "5JHkysk68hV7SSBfmg5v9XSqnaEBVPjHsQ8nw7qkm5qf3n3AS1akqT1rh6LfwSAzpeAvodaDfEtRvH1XcVmCtG52",
  "key23": "4d4u7rsxEs6rzVpeRNPYQxiv5CXyT4947gKRW3yu16jo1D3NVP4rtpZEvwZ3Pb7U144E5EL7jvX7h19YBug6WmTM",
  "key24": "26S4RkpH9ss4xTXKXDULPx8y3sWKB4d6pnks4VFMX1jD3QaeLhaPjTZqy1JZ2wJBF9vhjtdfC8wzxLGHvCzg7zNw",
  "key25": "3R41KpFhqiU1AWMNMZgh1NsSnG21LnUaE7xuUhS8LTP6eeSaBbpwhAg1Wq9pv2osPJRJT84Yjm2cC9phfk21tbUs",
  "key26": "56KZFqLR4gcoeMt4arz2B2Kgr4EAJhCRDe4SL12LoenxPeRJNVjPg18mu3ymQvfuGnh5KdC6uDheoL4pYjxu6TRY"
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
