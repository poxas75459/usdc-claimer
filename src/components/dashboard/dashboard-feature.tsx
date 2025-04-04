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
    "3NFLV2rbNVRkhjSUWfvuybqjCPKwXcCWmAM9zWP7CVw6hqJcfWet3sM1PMaKBkLehGHTBhpsREftAgkub9ZJpqSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BpNqLiTLkK7ftEiuoaitevtxXhUBn4nvYkjekxizMJu96u472KRFgZpnXZuqAqrsSwwGJUZ7GzHiar1aKk5wPNk",
  "key1": "3ZE5HAuJ2L1xK3jBXupBbR2WgTWhKFKevrqghXcMthNoz6pTVUvFkwELkatX37yazrP4aqeHeAfsoKAho4Ziok2k",
  "key2": "248QFL9ouzvmKzgPgxHazCXmeAQhycuV1mUy4rgUGxTvs4oLTdREisPxM1yWQHshXon78RXKgBvEYfydQLNYACkf",
  "key3": "2vBov8zw4TX9gzAJ6H8MNvqkCWqyK8CaSQZrWAehaxuiZzNEh3naykf4LaqNYGrD63VUaakuK7SXC2zEHqP2fhes",
  "key4": "hbgAAiHjSYeLKCKsPQDc4CgCei9TcTdiggma96bjaygwevj3SExebQBcHqgUZEbTTQA5FB3JB3JEUDq6jBCfeFA",
  "key5": "385f3hC5E9PwnDiAYriZUKisVNiZQst52eE8kN8pFYUPu8kyG1izEybT4KDaqr9gTNj7qaSnZkx4pNopbrJno3zM",
  "key6": "3UmgMb17zkVH7z8xArpZiBVjieUavLMcwjV2bCeV4mAVoJi8zf8oQBkgVNfSTiKPs78hZ1T579SidUe81VUnebaU",
  "key7": "3agj3owMsnYg2kK27j4ieTw2arQ7JvNrCpchqVkT1vP8ghBG2mD921ztSKHLEbjGTE1LJuU2YnReXt8asstuFSTG",
  "key8": "4h2zGAZ2U2ikkUkTFRsmXytC4arcAtj5ewxbxkfHHoF52vhwzCqFsHK4NKq5eXZYm1zGiDWyDK3s3rxNTbJ6rL16",
  "key9": "5wwWaMaqXEv2B6j86Eap6zrzqw7tRn6jvve9U5YskKLTnrMKK6m28xLuXGUZDR2vq8PqW6TM2veToq2FN5poU4Pa",
  "key10": "jvj2ucVJKiH4wD8VCHQUiqjV5foFq4crziW7iAzzwShPzZQxcb4hmdbcCYUAHtxkbWLnkFKEn4XS4QMdL4R2PKe",
  "key11": "4upNcxQEFKMjGoSrqLxE9cocoP4PQcPe9hJCcCbvJ7ej7iYvAs2kTKX74T3iyGphXSCHQDkaAeb5QVDEPosAJ5dY",
  "key12": "238U5i5twAMKUonnDxcKxQRnK6SMRWp7HgTqBM2kucke7ZPLLLLy5wKYL6c616GiuCP4QhWN7c9t6f7zm1KDHWvv",
  "key13": "PusNeCzuHPk4MiM11W74zm4bPbByW7KgofxrXqf61GB48s14jnxhmWuxy1UGmCA6pBtMqjWsEWgtCovQ5aAPaNF",
  "key14": "fk6C3NGShhkWUWn9UzrgSEbqmQ45DcCU9E3TD2MkamBFsowHjURAmdwc7wt2ffpbNj95pRGQgkcJgcT4ajr8n9p",
  "key15": "rPm9WnnXjxu4kwiaDkJ6scxuaTXJfSzkFkdQKai3Kn6GoG3HnQEMqfNZud26B1LM2ApdeQC6y474CdoQeoboUQ4",
  "key16": "2QqseXowUNc9u2fuZkKpDPMBhnbtsY4jZAufy3T8o7ZY2YLwPSvgPv6KuKfnXcmkNyuhXFigqnaAUhqpqV2pLsPy",
  "key17": "5yM5P35oTZ4sgstGm6VnmEk9JFjvmow1SBvJwbosmbANuthws2qSFA8Zhs18Mgev3K8QRHEh47QCNLXd4jzLps4E",
  "key18": "4SqZzioSH5e83S5kUzRU5A3vtP55dSZM95DtGayuG7X7V2kKcFRr2ebsng3ntkAZHdmfS9fxYKDumjYPasP7mD3N",
  "key19": "4pzAehg9wQDEpK5u8o8YozsnnxZeWuWh3GpBYgZC38QaVSe2Ym6NKEtk6aevLaRJyqaUCbV9qUaxWgj7WLsgcuea",
  "key20": "3dyPjuRivQEpQYpBbFkt3po9YgaHDLiuXcESmpXSEURVUSGd356wpzBVpQLMfivDYtATFdP2dc9T4ALQMY1yknz",
  "key21": "4LreVx7oCYsTbzXVYBCP21uv2rbc76BPh3smKR2e9ZydQZC4aVzKm1cB7WWh9qLUYNtCtd5btRF4qPd7nAdhXGe5",
  "key22": "3Z7ti9P38maWZCABrckqtWcXyLgiCdMjSdsCCTwChRP6WGhT7Q8ugLRTSQfMUFgcWMcmpDUyvKM4fyvJMYGL73h7",
  "key23": "27nvi53BBkidHzTHVNSqYzbqakNJQsgb1LSRz5gMn9g7GZ6oXGGyaE6dUeCh9dAYFATTWBVgA47QKHnFumF2m9rD",
  "key24": "38VCpcibNzDwUbPDCGUQfNcYNtHzBb8vDwTDZp6hhfj8P4x5qJQjXnLZXQbEjo615Z5a4CktF7DzhKUvhkR3ydy5",
  "key25": "3VWs9XU2H7KC5VkvQLoR9pP1ZXspwrgUNY9Gfme92Y3TYYsbcyvRtvy1vXAtrJoeT9tjKpCsyaR4pmbp4ffBoiYY",
  "key26": "3tQkiC2Azid2uSqLxZxsFmzQQVrQC3ccH8xoiCBL5w1aXiXEGGuV33t88GsHVtjwJNwijkUD6YnFmprUtMeiVq6v",
  "key27": "2ETUJhSNPCzX55M4MnXJARdQvaTJrDNkbZgaXQ6FYishWuqwVY8VCBZCgXQxujHVnj5rYZUpSPRr8gFVXJhBzTeh",
  "key28": "4u7LWxGuEA2xnqL2re8mh6B1EFG6sem8EVo4B88vAgxnjyn26eTj2zdumtn8C7HyhVqJQyGfpv2TVymmMrnQ6T99",
  "key29": "47XCXmAat3DJWucjiUy4W3Ut4Kr3S5BhRX8KJoZNXZoxsuT8AGc5y36bgztJNWPVNZiFe53QGfswKP4c77BXRrvq",
  "key30": "4XiARrVCVQphucRbsZ2trzK1iZKBehgw2QedNUKFNUAVujbFncNTHvHhJGP8Nx5C1vwcyi9LDYS8heH172HCLBSG",
  "key31": "3VFV1bAmhgBfJG4m9XwcaKSy2zBKf17naAPz4hdSi66pZkWBfT5JrReLS39zsEhpqQYno3wbXXzJC66Wooy5qUug",
  "key32": "4TRPXEGh2wqTSkWyEX6wtYghUBfpxWgb1dJikXm8sN4M2z6X3kZVosDtREvrXMgyGoUa5ZGpvJgZ3vdiHVpD4aCH",
  "key33": "48V4AYzZGwr8DFLihSnUsg6B9pz4ShHeeRp1sJdBD7yEWSCjft9Aa5nMUYdSLoPZaF1JG4YnL1QUMkJ6stDsnNf",
  "key34": "65m5GgJYUP6HgSoBWcYpuRLafjeZTmcqiZnyNuYWe1aEaDQ58fwrZQUKEaKKrin1szYxuftmBBxuxhDFeVWgjhxu",
  "key35": "24mXTwqPdGSuMe3ygtPF81N7vFPJFM6VvkKHEuj5qBdD9miiPd5m9nGnXmUEZhW7t8dMM7u8SgBerScWrraTQ7ep",
  "key36": "67XsXWWRYYET1wcnmBGjSFtuGWA9T3rEkEmpXpAppXUyfuBxxvdd1MbZQGv4oLa914JncRxRfwQarAtxaCY2jRhv",
  "key37": "44kZW4b3EYBZZFqnbMFBaeRcKifyY5Uouwct174R37cJ2eHWkk6fe5UFGJEQsCzbGc9Rau2ANWC3Gp9mPrSykU3T",
  "key38": "38xEy6S7tuWvPqTL1minPAvotg9DJGoaPdC9t8PutTtcULAWZzqnd3Jyu9GdkdNYmEwYZopasvGCKRT5sKX6m7ke",
  "key39": "KLbXr8nPvcvBTFJyPg2n8nGonLhodFKwtNiNRPqEXtmmneJNxNvMRv4z4ehJz9NkvH3rqZdkKWpS1NcETFBRsij",
  "key40": "5sWChaLv5ioJ2biHJLxsFTN36CiXAqo2RuTZPzgPUnx6Khu4e8G2SroGkrHkAiRZ6xXHgCHo1EPpvZMBFT5KgZmp",
  "key41": "5C2Mca28gR9rXRmegMVsYqdypB4AR488SuhntczCxWiHrxjdosMK2oJxr4wGnjdpVkKWP9Cq4kkvEbU4ekm1GL88",
  "key42": "2Ty48hXnUTq6q4FvfVn2cxdpGgztzdCudpaC1sq1Zm5vSHKmV8oa1QbxzSvf9YLRqzJtEnahxh8E53pkx1TwnNFn"
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
