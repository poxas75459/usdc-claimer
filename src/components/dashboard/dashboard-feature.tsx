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
    "52k46Av2Kb1saTUGpSbcFnijdfk2Rt2A7mNsFNK86eVDQTDoWWTy7GJTKf89BjAniEumdx1fTaKmvRt9bTrt9J53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6T7xGgkNDZZzGjsxJQZpJt47S3nqz2jtP8dKw8pJwocFxBXdQqqy8n8HxsYMZLs631zBZf8UVnqcynJhQUDGBmY",
  "key1": "2ZkPfAwVKja86rKkc7Gej4qn5uvforeVMNbvJcgncazC4kbPNXLiGacvHx61HXVG8YmtJUXQG2PtK1GdicvW8TjF",
  "key2": "2NX2M8kNPnWXhkracTA1J7TzmZf4fptV4gfNWJ3hwFRW2xNQTpvVuFwaTDRebQfSvbQXhHN6i6Nw7KRPNoQJgPWz",
  "key3": "3TZvrw9YNE7cbUbTJzpZKnQE26BTwRaXhMJA7dve5zcuKt5XkTXv2XSjCBgrbUF3zbMNhg7eQbuKxvxdwRWdUuGP",
  "key4": "5Ny6xHExS5zePGxv22VoNy6F63vYoeg6pTfpbNJk3GPJG2wCxbJtnmkDmR431p8UJqyv9GQaEofTzkt7yMzFnRsk",
  "key5": "43Zz4DdF448Fe3eqbvXWvixVAMoiueyZiaq7c4hgjbxbKKbCZdn65XM96rLPXXcVbBy6U2GMXuph7y5RgWFXRvQw",
  "key6": "4atewhZJ5jG4Z3T3JdfQtC7VUCMjW6Q5YcHY8Bbj9c5Q4gFqd5Whict8t8SAWGNoRsvToDAxNXX4rRkAYwLR7Qje",
  "key7": "3B1pwEvF8htv42s1VY4dXcUvqsKKBqoEAsixNrQmVXvxdWMPBUsgqXNNwPjHrJWNV5dYx68cT9JMPxAKRdFNZ8EV",
  "key8": "2YEcujLu4RNRYuqdqNujLJEFUB9dDgfPZVrqpiYDuACv5TnJ5crVh2Rrf1X6xNjMb8s6nKuJbv7BapNLJUdumwwh",
  "key9": "5bo8QpHADaCBTi4tMdZpC9L9Qj8UJoHBvuKGg4CtZhukyCCzzALKrUbK3EAScptHRsyLCPFVC96emRHLEfx3Br6z",
  "key10": "5Hrx7b2MwRKYoWVFVxsZ4hg4aFEgWfQ4UrxonqzvdvzUhWzKVrAJgRwJNqZPpuUaY5XiSyRP49XuWuFuayrsA3bj",
  "key11": "3aDm7CJyiZEFzgxmyQMpmwwgPzNSUqKXELkPwratstGuknCJuPDJzJyQnNGcozNz8xTs1CV87CDhCzvMHAPE3dNH",
  "key12": "5ptjEKTidT3uMKb9TmPb9krdxkPb5bV7FDRtMw2FYuneU4CA1ECE2HkrxEtpRLSVYQQDgAjDaqA4aaUyjcBAkJcL",
  "key13": "4HwS3LB9cvREuBfmDM9rydFViTzCoo2rYU3Jyo9XtM8RaPgQ7jqVwfVrLRPGtuTQRkZWBxcUh4YUinH6cD5NLuc3",
  "key14": "5Fsj8K3JUKPU2Dzk1CZb6AsQq7LBFeSoE9XwiFb3xgd9XGcLhBkwzfqgMzPst92Z7WoFG4jBZgnWd6g1292avpgZ",
  "key15": "3TFdUd85zwnqVGqWkCyFgKnwMNuVpBmmYbK9zqbiBKmWWxLP87P7ECWaLSMCMrTShedyfdF22cF6C9enfMJpVzwo",
  "key16": "2XdiBhdFKwoY7xaaYurzQu5ciBTp98y2EZTCZcsA97AvC3A1TqZdPfqwn47RagpNnxP4xFMMo5F94mm675qtpRHb",
  "key17": "4BCk1dvcZhABurnC1KqGr6Y7JDWLaZSL7AGK2eFzX72WSqrPuVtpHYaNsKvZKSz1Cp3EbuadLzk9EeCNugDsYEPS",
  "key18": "pbGFBAyv7stvi9jRfF6vtHfsEArosL3TUJqRTRvozQ9gsVFiXoBJxu8NebfhPSKTQ8ZCio3iAXxCcEoCshVuFqQ",
  "key19": "4DG1R4G5UgbMXz2T8x67tfAX3ra6rVexczf7dULVYkZLFfpHVHscoCzcckRK6pk1eE9sTHoVfiEZq7vWCf1hQz3T",
  "key20": "UjznaPuhA9nvYrCQxAFwPTjH61ar45C5MgpZWBKjhBNX2pMGW1D2RP38VutgcjHwBSheZZ3dUkVXwFRjpdPFv3F",
  "key21": "57RANmqVyNUVyQEFLqqdd4Q4Vv94QJKLvEuas35SqCaWqPc8hkkgCQUv7FCfRn3F3EfpigFZhWFvro5XqKEuqgiB",
  "key22": "2uxBHU82gokFbGEY16adWmcqm9XLRcAxqsZyFxGBRujB4VVafZinbDaDF2FLF7hQF8rQG3tNgNAtfzGoyWxFGPYS",
  "key23": "3A3NxPyYy7VCAhmepmirb7gMatbY9TcdZy9Zg173vSyv8VpU5qbAKxGKWphqXoQEtRERwMzb7nXcHRgb3U5Vk9pX",
  "key24": "4dWGBuisnB1Zun7xMdXaBrAkuwsJQ2q6mdQsPoF3ngKQ17HmApvEXwXm4CLChdn81mNjy9fyg7v62pRGVpCVL4ny",
  "key25": "2EzGVqTQqaJJiCmnLFHy2ygFfLsk5PvLWLPRgVDsyAHEyxgtK9sNtKz56fjEBWCyqSX7wnevgcBLGj9DmfxfKaZQ",
  "key26": "49N2U42rwwKm5zD9PCoaxqvM6cqgAQ9Y7cmw4wuymJhCDaCCusHe9Zdp5KGYdBUhxz5XEJyMJgcBhwvECT6ykGz3",
  "key27": "5JPxi8aKHiv8ftfoTXSDTUQXA5cEmvPENhhQe1RPRa5WdP2FZgpgj5wu6dtBtSmkevk4mFd2Mkt1ZYvAPZ7b5wsX",
  "key28": "24N7G9Dt6KjLoPZBVbeXimykFAtoqQBUiQUvGT67QRFmFh9MRYYvNKq5AwXAzbSJEjNg9oSMDEwSVe2FNkt5yRHC",
  "key29": "578vhCsFSXQtET8uDg6RqFKi3dg9zNb75sDvhJzLTxLawdfNMQNRiQhAKqqKBbKkMxp133whToGLNwhrEhqRU6oN",
  "key30": "5fKv5kmXMAZUKhzshnBQZSWa3Mgy5X6xiDvPJRTXXsD6D4x21QJCi33N3A2RZfhQRa4yr64zw4Rpo7HEB6odPpK8",
  "key31": "59VUW62cqJUb9tb3TYE7q2Y5HYGXFH64zisC8tXpTqsiza2pZW8ciGrMDJ9ub16rQSYC5TZETtoxDT2isErFWbeS",
  "key32": "5CNsprs9155kCJMjMhkMvBdZvDMdpqst5hJpirTuo3XWbsfEBpXtt6wCGvhib3HFqECjSNgDiKwLE6noX2pF7aXu",
  "key33": "2BNSLD9zre43L9pvGnQkfxrjzPoq3aCNF5UzF7vJFYnvcYrYQCtMCcbN54grhshy81JTMyperXDxfiGL3adrxTeb",
  "key34": "2Mn8BKin8ctrvLBfR9RaFGzVMrUjVXuvAShmUT3E6CZikdsdJjcGg4fRd7bD2inbaDXeQs9LpSpz7KDcXP5vbrJC",
  "key35": "3KgeH2e46C5duvqoDHG34apuUtuKAhd8ZQ4oR5fge9Xw8VwarHviXymzRCaMbC4pYKPTZ1u4bToGVM5AcNFctZ3b",
  "key36": "3BFJUjV1cBzuxU2sR7qB1cBsBZpVuiigpRNrbMWoCsADELS5Jkpr7SmCjdYEGDoECWnYLVCSRZSLprnoCqmTSgK5",
  "key37": "2mS7zv6VNTVChj3MZGeJMuHdbGZzqvLfNNYvmCAiU8f7EadhMJTScWFTfW1ZPDjFvaWA69t6G4zZmZVjtUNcYKCJ",
  "key38": "4YnCZrSwxLmC7nZ9qjBmdHrVYGXxkk2hAgqYL72e7ku84evwoWM55PqteiGevNfRuYrgwwBmCU2RFXyhScV2tiMx",
  "key39": "EYsZh5dqUwXfb7nG3p9angF3KanvJftw8dPU7gDU12jJcWtD3Yw8PDHSk2xpEXJDWGN9UHhaw7fVSLSL4EoKRTA",
  "key40": "25osoyQ3x8nxm7bsSYB2b9Vgd7xbp2gVghnuAXAXePqYa3TX8K4ajC7wJfezejxk2DwBDScy51zKXefh4e3Y3UeF",
  "key41": "4uKUWqpVPcrVqYttE225a9VM3krRAjfDV4EqZgF7WfXD2PYV7HeE5PooWSB8k8hyoKpjSGn1BXMJpyut5UWthJE3",
  "key42": "2cXJWbnsMKbU8dQUHDHSpAnWY7m2EWCgpxF5d1JC7ni8J2dgzaFfjWsHoG429hniRqEaEjp8LgM2u4xtUerWhheY",
  "key43": "5cfC9nYC1Rpxd9k2xhUfHUQYrZQTaxWozQHFoq7dZ2r6GEXR5aKrWUGYgHfHEzH6X8nP1PpqeBktjoudzaFBoe78",
  "key44": "5SSgFHnrnnVaJJGbywKH4V9EvxtpVGRHsedDaBXhFkhy89Ai9Yyt4TMUHb27S1t3E3jHkf5zqJqCxv5NWXtANUU5",
  "key45": "Y6Gx9KcJDTC6KUzwmEtwqUtoc3HT88LZCK2ns9pKdaStN9yo2aqdNSM8cxxeeSW2pQUxxrW1HGc7s9xC67tCYX3",
  "key46": "33VAXccWr5goG1mAUyGSbNxrL6Q37Nc4Kt6zNkrfTfiWWchowGHpA3XdUtEE3yBRgFfD3RGqRLVT8wY3kMZqZX5h",
  "key47": "2tB7SW5VFjFWKSFjw6dHGc3uECe4yxMwpr6J186xGPWSPyu444TdZ9FNRLYVNPMuZuH1w3BDLJNSsjJK3qsfHset",
  "key48": "2VKWXqDdSgpsYka8eLi4Jt7xkbKdy8NwcTKaLFt35Vd8TQzx2MGrvdKZPMSSToDPMPjtke5bd2PcNFKGaxpdcZYm",
  "key49": "2QrjPcXZmbLNPdhg4n7ThacgHk4TXJn3JHfsFgM38ocenT3PtgvSFS2TpJpnGXQWN7pP9xzbxQZeMmtPAWoNsXtG"
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
