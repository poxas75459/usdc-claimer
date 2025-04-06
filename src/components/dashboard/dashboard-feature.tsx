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
    "4QJ6G8VNThXXmqmKZVag6VL5Foy2NswMqeTkaw3rSAZBtUeJtnKbczqikPL8zfx9gfKHUvRTpF4NLgARMMixgwPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WBsrW4T8E2ZfxEwfvJTLEKgbtGUYUfQ7ssrWW2QvtLuVXYf6A6rc4zK2jFhzqBJwjZNNRy9pLNBFqZDHT4n4pP7",
  "key1": "4Zy82cFdwtFPKQD1ATAD99Mx14m4k95B9V9PC1GtUwybTPxLcwmRamTGqkyF9DWK7eUTZqxhwhy9emkAVbKEiyyj",
  "key2": "2DzMM22C1fwGcJxbTccMavbVDPVAj2e9mLNzx9qvfgH45ceEdfJMbmfWZ7mkmVSQVmVbX5FybATdFdcXDebC6D9x",
  "key3": "5MqHaEMN3JmvEzadtUR5ifEThk17uxzos6pp4DbLYEG9YgW4R4UmmAuQSqkLKxW3n1NpjyphmQtrW55HYScdQEAk",
  "key4": "57SquZYfewJ9w8p4QfAj74YFyeammjzYJdxayhmSVrTg5Z8wedLB6szJ7Chsf2KERtykeKLCw89s9wHTtZx74fPx",
  "key5": "3CJ52qXwzqZ1K7Z5RfFTzGeVccreEzERLyhzsiTjaArp2bYiA5ZgGENaAZhe8HHk81nVJ9iZHJhsRLJ9JqiMNgzU",
  "key6": "4d1GfAbaN9JGH45uS92Fp6oZBJBR2CSa7Q4WLAkmHK1cbt2NRgmDG1QkLwA2o1sRnxnY4miLsJuYLLMDxn1QYocn",
  "key7": "5Ezb59s7kpzXFogVHJ7fs71r5J7sN3i6ACnGzrbUZjgKfNTWoyxokrXu5eZoKz67p6HJnF2881K86RhVkCzheo4d",
  "key8": "3zJdbVSM37kuxjXrS5W4ZMLa5KMBJ642qbimXGxNyBCCRhf3vkXZFH61TTBfiH4wNUHSC4tGukZFvaH8WhBu1fi8",
  "key9": "2cJLhAtsZwxegSZrkzXW8YoHFr7MuQ2knwQ2NnwNz8Nv9py5zTACb41oiYz4BKdtFZepqxR6pjsxHms7689BEkSd",
  "key10": "4EPSCff8VyHaMTgSjFFa9sRbGMa6199SR67zajLzh6TRFp72MbT7drHoWyfBuQq14VTfBVAKycfNvGnQfqsXB3vf",
  "key11": "4TjvNxQw83xtj5UFcHyfe3LCJBBacxUdBW4qTgeGkJmfQaTGHpRdDXJU4WWFNpmBUfXe2ViwgCiRrftyZr8xGx9U",
  "key12": "PBJfhzLTTWp5qjF8mdgTk1xNtb1ympdCnyyp4fxNeAGzoZjGGgd3DZzDgLSvaL9pbDmvEq6R4DkB8wCDFQarF8y",
  "key13": "5gp5MuRYnZi4VrJhpKEU2r7KZiSrQtbL5LLrxrPnZ4E29AmD9Dk2N8x6Mk7j4vmGuy9dAcmPCKFNd3AkaxmPumgQ",
  "key14": "2wwp6sGq7g2hzQ2pye3Bg95A8nSZC3L8DbW1JPTkhJGbuTVS2dfrktR8YZpAo2jrBZgj6u6M7kbYSryWwaVM91dt",
  "key15": "3tf5BUDeCxyJDKohmXdPudWhN6kJYW9gezKx1Sm62uLwFbFoawU5NLCg3NZXNsFSijPriHwmvaghAHee4NA7HkoA",
  "key16": "2gvBAwYwojaaHLLkjqfTj2rJmooVqAQRYna9zknZ2MiCkJPemYhc4Zy9ShxRirE7jDtR7Br9VJmJ6Qj8WCJWoM7h",
  "key17": "5uMvfNpdFqf2R1Y4DcyxzBGvxwXjX7m458Zti2sRuo8jcdbkVDmpzdRqTCQc5Qqnyk45qjHBLFJRaoNMDLUwLdyA",
  "key18": "36vPuTeLAqFkZgXyPPTsZh2vcxzcQ1eoo1y9ZMgtSHSfu6AuiMCzPbiFd7ozvwvdT92axBCQBqeES3ngvEDMLPj8",
  "key19": "2qoptcfAMkdwUKrgyb5ep4gNPL4jy7GNRgzVfSUFPvg3xrzFtsCJKirGNZ3SQEwcq7JMoaznWmPjhSa3j8xnzth",
  "key20": "5qrVfJdwE57SzEXUVydSrF1BsdNYRvYPwW2LAzBFVPxesHTu9uuG1qt4wgfYQhFoJsvvrsN6dNXv7oHM6ihWe1Ya",
  "key21": "3mg3DNFCEm44gMWpfVxubmoJyyrau6n6F9rC9gQTArt2yTHkubELp7pq9VjWuWDYRLLCptfEvc4sYLxhuyEfTpQy",
  "key22": "5YjPVHj6esvGhCAZ661wQggPseYPEZfm5SmgmNrJLGZeUytXQPLPaaRKAUbt4gaYDSYsnhfe6eJdELtoNm9UB5m6",
  "key23": "vYoZMCjirwrWhHGeRsvahJkigpECSwtm9mMXbXk5vWuBH4QsAnKQhDScoXYM7rEe95Wy91tWNSi6epbzxZra4FV",
  "key24": "2J6YF95aaGuoRBA5mKkWSg1GUGerfszeSJu7KQyGmFPdWBHZmDyXcsSaQJZWiUJuTPEWZQAqgkQkPHpCWxA5GTo2",
  "key25": "4HwHWU94yhbf6zMc9S8Tkg8aZijafq6UxctM6DQccApZCQUv5NnAoqjJytMaq4BZrTNBgogrWDLdgmPBrZHh3W7K",
  "key26": "2RbSPjwKZjx784tYkPh9fYLPmCzBoenp1ir2wXeKPohybN4ZxUFMu8RkJvzhqM3X1UfNvowGKGFyCANgGrLQj3J",
  "key27": "wUvhooG6UJm2Sn6U3Sbzvqm16MUrSkphvFhoyWK61eg82NjXHyDBFRSrYXpyZp9TmGUC4Bj5TXdD5SH9PPoa5wU",
  "key28": "2awWVzxwWBTBdetAFKxQxqewajxrJMTrS2KRdJQeHyjf2jHxffAyyCULYTci5czQedSnnYB14HBCSYkpuBDAH9z1",
  "key29": "4fiyyen9To5CBejEM14zv6vFrWajTE9d23tqAThsFRpcEvVNoTm58sXEFEWCD93KJ6VSdaGVk7GnftefFDeAutQX",
  "key30": "bPYfMvBeu5DbYFr4uaDKtVhyo6WHv3Zs4thNqwrXBfrH7TKmAgL71FMsXnGoWmV7jxgGtVJmSdm9WGaoJVwmL9z",
  "key31": "3pbtHFrw8YBNRNodwCkygN1uuhrZDWuNTDzsk78GZiMi9XZTJpjsxrtpSuPxnG8BGBdV2Nz68GHBPoJf5DtRULnM",
  "key32": "4mPc2aeBKUVCWz1TSczJtBLSE37Mb5oZ34AgerDXmzFgpSwGH68paUvtYeJ3eqPNn89nSZR6bgjYjKBbf22RLTJp",
  "key33": "5fnjR9JdPduL2DbgojXonhv4i1NkCMFjs7yppF8dTDbRM15DALwa9Dq5Gbo9gjik4dFASgwFsTyAh1U6USZ8JtqB",
  "key34": "putKpU3VKb3UMwYwjXefeNZhqAcvLD872tR1EPPrY4uzv51cszqm5VVtcva9mKmpx571kiVySS1DspGv8ngNxvP",
  "key35": "5pjaq5bFB5vBjGnpkQgLDYN9oA8wLPvg8ZMmSfpA6wXH3m5oUqEZJRqy3oWbTukFCjwr21ouzkHyTvj3B7JxdALW",
  "key36": "4MZ26YkxcKRxr6sT4R2jZ72NHtrk31dHv2khJcekx2kteQud6jxN5spz71fCMgtJ92jKw2cpbUXUgquNnya4Ves9",
  "key37": "2kV3oMSMjz1LdtrxsGBXvo3zY6agGRyTU1DaEz3mbcHMD1vWGxncf5d8rS2GwydjvXrftY6Et5oRQNTZAc5MBqs1",
  "key38": "7LdtEY5PCZ3oRQzpgoRuGap2WbzzezAWphpPDuKg6pG4G5gnme1bqWadfhLhUGjzxwxqgqMfXBZkZhkT63MaVaW",
  "key39": "4hXcpfG8z1hcxi69w4aJoqWUTKhjPctdbAWfqChKg5RtfvNwDiwwmWiTzRkzFz6dSc7e1FXRSRnoyLKF2Gtcbbzj",
  "key40": "4dyqBVDpw7ykZTCQ7ZTat3x8xPrEnNZRxYQJdyuxec45WgcvVnn7rmheCyah9BFhk98fnyU3QBDRXRxgYDeWfsRV",
  "key41": "2PNdrW6eeVqu2hLrd9zNSmoVDtS3nL9ucECveyg9gC7KkD9aCvaa3fqmRvtAs9GsR7JgmAjDKgFq1UHNqypHkds6",
  "key42": "xWjSy1L6Dbxo1P3EhQrrsdczQRvvWWvHHZmPEaSJ5gTVMj8AvG4J8rCLfz49GNSJZ9XqNitCFA4M97jowbQoCjf",
  "key43": "67kvCzps9Wz2TjF9UcXfQa9TNQvaVgoBcUomPshKns7RNyKX8KtyAkVot3udAS2Ucz9z2naiZmgGukKrJZcGKmc5",
  "key44": "5btLBoS2Pb8MFnW7vRHb6CTnBcS7ADTgn83yxYQDYPPqyYCsrCzkdQr1pZxZk61UzqfiktpSQb4aoS1NGMSGbanG",
  "key45": "5r9J3Cao4gonBzV3nNzwicQV5vaXTwDEQcTVYbr33bV7zzZnuGAXuSDHXxh44Gk4S2vcEdvGCPtXMtn8wUAZ32Qw",
  "key46": "33CisSQGoEkRfXKuYiwDYP3r3itKPKMYy5jqpWqs5GCwsLtPN7rFn9wUcHjMVWA6DMA4uLiwBmPfziX6B5MB1aGD"
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
