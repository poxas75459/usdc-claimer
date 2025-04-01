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
    "3jqf24H8LAXC9Hoxm2raSKvKHtvNPPDqjqokfeiEBaDARtDWT8WzmDrbE3pPxdetcWemxN1PJWJupRwzrpXXDCgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pfmg85YG1W479sQs3fuf8g15wDMCaRXxhDt7TRt9zDTzvTzP6JDZLzJo7EpPJ4HdhSG6DAmFkHQzjtKh9rYyYZ2",
  "key1": "3Yk432uxK4s9UBWMD3GMKTfEvMSX5JZ8Tfu8zxsK3Z9GdeJQ1834BgvaJj7FjJPXyhxjFciMDng4L6CUuqxTgQoe",
  "key2": "UxTdTwprTp7fSs34tty2AXMMMkV2Khdum3G1xRQ6LXBkhsW1gCGa9wJW8KEHQfXqb8iz69VXYiecxrQKM6tsn95",
  "key3": "5pBBCG6unmwPL9RjZPRrn2FNM395VNjtX2oAAEapvintRcDfTpnrDBz6MrymhgyRVTxFZT1CbG3QPkGZHHihnHy1",
  "key4": "58ssa8RPvQzrnWdvFkUydGVPS893dYwgoNrF5xwZL3d5yM6FbFXcfPp5RQ3sim4Nq49VdRYkrJoWhP8wrTxRVncF",
  "key5": "2qi3sDDUM2V7qAvKCwJNz2eiQWpDzhVhhTkdGLRnXUuc7wM7kVCZjmiEuw1Gcj82njVoTsGUpqdGoErd7FU3gjNM",
  "key6": "46JVLEWPcjyhT8oTUcoofaSoz7FtDvrFy7iTP6kfvpyfmvxDfYVr12s4hQc7RKat7m4pEP2a2V66KvWXP8vanX8Z",
  "key7": "2Dgg5DyPycRHfvfwDNE9q5phP7BkAQ29QkfwtmEmAba6PUecP1skqvLcb7gK1g6tEnPRcRfZ4i4KjkVdzyhhejTi",
  "key8": "6WWEjaTyb9zkzLzVu9gK5FrASdAi4WFRNL1M7UMxexxe6KZGKnb7U6JGJXYzAfuGpvth8S4obzPoNrDz9oDELnV",
  "key9": "5b4mBC75Toi3eFGwohzTe3TUYen2KEkegwaq5ZN4GR31VmEhK1zQJ8vgAHUTiasSq9JMCwMZgRjEsPmXEWbijuot",
  "key10": "5U2hQZ8oJSnwsKyQVwmphQjq7jUKPv1Y2cE2NbucRmYNBWH1egpHTWv32Vpg3JUtDJe4YRyzqPZyGJt7HVg2ER5V",
  "key11": "36j1uCE28TECKeSznoy9RYRx1H1n9ZYaLQFWR4UYB8W79jBLLfj6drKqKbdPQGzuHaMpRUAR19RQH2dsbrKQcQHb",
  "key12": "3QRzoNFmeLCcm6scMPKZY5cToUDeVbQQcARevXznpUm7or8rTKcQtE7VWHHcCjwVtnpdXszNgxHXq83jDU9ih1AU",
  "key13": "5HAJ4ZMyJg1hnkmBYsfD3cTEo5dCYSdaxcWgzjqJh4vatJkVkRB91wpXfM4zgpgJZsdHTk5RaCWZBYrnjSAdAn4s",
  "key14": "3ELo5Kk66SUKmtCTEJEaGnnBzjt5v9NRqvMUPQkbEcexJphhB9sN75qGWgUjsAHVVNjJ3AHCxNFVZ6mhHK82YYha",
  "key15": "5ZuWZMw12sGwgnsmmoyazE5Y5DV81PyMYanbNo16PnJe66UrpNDXNtBi3TJob2oXUmmTuJ9TUh3haMyeAfNz8P6i",
  "key16": "57kPLZyjHD53B8p87Lwf7g3v9zvVmDBrga69sTC4G2d3oGSegU263G4apX2qz7gfXx1nPQcx4oKLB9wbYMzUXSey",
  "key17": "4g1mXJ2yWSGJ2oLD93YbUXYpEb5Zj2JY6mVHxpEBSQjyv4s9qxMJmCZCPxhqZ378xT11wgfz3MjNAPX26MqPhYQE",
  "key18": "2h8392unFC48oixdgUQo1BV7xAG7GxUHsyZy28QYAuQ7MkSTfmovJmZvdCLsyg9DBkYwzPGbtLbkUBFkGUbvghbB",
  "key19": "4eJ5kVWUrdewE7rUKcu8Kj6cp7PZSYYFd524GpGeJp7jxxmLAL57zwFAf4cTbHDJMULtsEPp95Ny2jxWwvbVPykX",
  "key20": "32z3piwXa9ASzeadgTmd3a87x4sjWeuxGnvpHxZ6Jqq7ecenoWT5Fv1GwBo32gL3ZAFKDm5tfxDJrEw3Xdu5zZYd",
  "key21": "54euSmQYWDbETRNvGDBN4jNWW4Wn7MTVkC6RebchThe8khcEehkYzK2L5Pf3vkqJpTRSS96pNEQm2vh8SL56uJpe",
  "key22": "51hgYB1vJ6EHaLMJaoqxM27bHFF4nxdZzvdoF1R6mnkEbWy1vvHrtvYTJyvR6u6pLrbUqbR7LWCs8ked4stGa7ZG",
  "key23": "2XXa8mn9TLhiPohgMQ7darAnsVH2MQ8HVF8zRzGZXc7wWC3XNbvF7YDbYJdXiPALFCYm2SAbP7MTpPj7ZGpqKJHG",
  "key24": "2mGnUYM76shiEAY4wbqWaYbwRS8pJ7cqDGDfr9WRwu4pBHEmLvr4B2kiGmSt4xVTBEAHog18grGuZ8NfSqijSxEK",
  "key25": "tEKxV3HooUBgWJ4G1M85vNAFnrJihvhNFYnquwfQ4pm9tfSPCLLkbNZrFBvKqS4EMJf8yTs7KqRTAS1GUv2MHrw",
  "key26": "kEBcmw45MsGn64BCzmxbT5ohQGn8LGJ6Z3vtYL1i5dtD8gLnsuSwvNxnFSosRas2yoeH6h2taAyTJchYxTYHpaJ",
  "key27": "qWet87yXyxshXV6pkNT5eM3V6wpU1SdjoTDcFbuzJ5CgkRdGdyzmyCu8hqMSEGMkN93b683Hs7F46YEnBnv2DMx",
  "key28": "64T92ntXdJN2H3o9MZPnUFwfzqqAFVvGktydHmAZa2eK1KBR1zYQneUjex6wZdbvNBshezeiaqW3PqyaQ1TSJDhp",
  "key29": "5Ht3MnLx9mZhDAgC41w6gEYd9VNowXsQjLeVs3Kae3JNcYvJ71YHeJcRCp4zbmf5cE5yAMocDf1MesoPw89wEqWY",
  "key30": "ZeyADHwJ5P1SJ1dAiq64pkCcYeKVXYJ1KRLas4nTJskKcffjNEqxYrQhwbQFRB8ck1Yu6PnftLUZcJHoaKSS6q9",
  "key31": "4HqcqYAXdhQeB8zRdm8oWRdFQuVf7YpXGXJ1pC9xxC1xQV8jr1eLK37pBz8fETqQqwtf3LzK47epAXbqSEUSzXVW",
  "key32": "JAENmBejAzx3ouoyFkbmE9tNvB9r1LEnUsjvheAyUXua5TES6V8uTCoPZPJrX7ZSeTsZEgY2VbBuzGot2azX9dk",
  "key33": "4gCds3k2kbfeYxjpSQvYy977hNJ4R8zSBRMTqQKbFeV52PZpmz6JGgtfQ3Y14K8PwSQBcth1DtwMgc1ScpzPeCEi",
  "key34": "yBpDViWg3zdijb27wb1GQfXQtcPipGbR51qKUkzGHKvjMv9aA9bjRksYxEXCpsvDnVejffcKJAhJ7iXACnMgftB",
  "key35": "3uoZixJ3bL4dT3K2jCvku1hzLfzP3FpBxmYmxgDhbZ8Cnwbcd56Amu4cWsjuRq8X95joKCTUdDMDGhU9DZaxncvG",
  "key36": "24ep61QyyDsSFfdzwSoYzrUjx9DHrN8WNNuf5GZ2wJkaB3JCtENE3P4yPLB6Q7MjjcEYNg1FPcoor4LePwdb2EDF",
  "key37": "3VNbWzW5TnZS2df42KjbYKu4UgFnFwDgxqLBGzWVFzycrG4GDGoJfxaqfFWwxQY1swmSKnP8nMTkp8gpH2J5RhJC",
  "key38": "4CLn5WgexCsuWgiTKvkribzpRn1aEePLZWM6NZAetyML1LXk4pQCCJQMLxgQdqEHYFPfPX3yY9XyrMGtkUwdbtWx",
  "key39": "28GTJiwZupsz5evLr7dHJMGxjq15vboa5mWHMZk9DYDJpfxJainsgh9XY7vCHaHDcRtJxoHimJ96xMVLF1uir1pt",
  "key40": "3cn5NajJgyJSpqHua41v8RcvQkYcGAKkRC1V6js2WrX4AwqDA42hV9j8phTh84WSdeiEhvaBMuTcFg86XcNaPC3A",
  "key41": "4YXfnKpY6QTjUyYUtawC3YzFFaPrzrwq8kDdzviHTpcG8LttPsQvejoZ1TUnUHpgp3P8VyHHRuwPUb659UtHojwP"
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
