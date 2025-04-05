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
    "2tiEQnyUvLp2Ch2MnGarGBcgtez7SVp6ZXEukVA9HCTouBsnYcWFJpf7ndkfbPLb1pbQMnHzjoQtTh6UrThDempX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444LJijM6NnJh8CHJY6z4YBgw39EVk8Sx1FTkx48ZAn3Y48yJFnhs87yexPVEyGhH3JHftJqfy283Q8cDaorry6T",
  "key1": "sNRsLJrvcqh3PnXCUmwfBqRqeM37awynMTJk8CeKGZmHwCTjqtEbLB4T45sx6jSzwY3GSqJ21zAy4SdnvepiG4e",
  "key2": "DuhFsQU3TejToKo7WWLW9E4YmVwRjLXzy2hK8MVy6g35sL7jyVjr9GVUBbsztrAQGG35nrx9ZBwb8ejZLZmTnNr",
  "key3": "3qgx3LDvtoswSLnviMEzVBf6LaZjRSHi45uM73LjmiUWQyQiLL8B2ZtMufRKqCdMvxbr9HfEyW8HCh6jBCT9am9z",
  "key4": "5oS5UKmixktGBwfiBLz7H9nsLi8TPJ78wNK7ois2sbQgHEf1XB3mZe86BuhdDeVGDVDLp2jAidPG5GxA6MU9voH7",
  "key5": "5AoNtucZRSZ2vk2EPT6xhoDGk3QBfLidVSH2NKnSZSq7JHh6uvPpbhS5UjCYuhKCYwycYmoCCqSSMyBqDUJ3AE1L",
  "key6": "3fGn2HXVkm3MtPiSJZeLYoPRMvUxX391FTsyf8EL9WGvM4U6SnMicaV8f8Yg2abt8ZxaTuzi8KfiRczatCQFprdC",
  "key7": "2mDVfppkvU3SBfZ3Z2GwvJQ3cpCiRYkUCRBxTVmZBroGLyKqsF1Vw61eJs2p5rkVXLUsx7pyy8wmnvsrmvwVmPkn",
  "key8": "3FGu5G6rj5Pk3tR65RJfLcUMfkMTkUpHjRmvCZHLRJmnXbYZNUJBsAeX3ngjsVawgYf8zhTMiVmjNSCMupMkdSX5",
  "key9": "2b9XTqe43dypHwxBpSxW3bsNbcMG6LuNSqUmwTvLKFCq6osteTETQqCQ6TVU7umoGMm65KFSgrXfaitF97vKabTh",
  "key10": "3fu15dX1EotDWxFsjFLw4UhNyi2PRNZw7VYEX5Vh5YyGcKzvdv8Y4mpPoYhe6C5RUnzg1KQXrKSKGiUMy6VDaR9K",
  "key11": "2hFXV49gavkfMvkbzr9nvFH4paLQTWhW9Yvd93Rh66ZWGrbQ7Adur29S8zGqSywRvMsspLRzrADyUaEd2dzwkhTb",
  "key12": "2tsGuE1HM5BtAkYoPTHAW55K1M3F7xphNTQVxfpSiq7EnmnZhcaK6Wdk8AWVcgFWvpeB1skqPaRdhqgnQ9ENDWh6",
  "key13": "5WidDawn89rQ7eaFYc4nPmkd1YwSgwFwV6QHXe6LHeQJ9XzMXZWnzKiskjZfpyqpwFrbDTpKwaXPxsZw9Cvsximr",
  "key14": "2kCvnrLnNRb9qYMkfF96B2TgkQS6LvLNyop6dYcNU68wGKAyBmpfp8gubXxsvtvNwjQb2XKSa2WBYV1PFsWiuAs6",
  "key15": "3eFHh7QJ9mEtNgisjJrpQ1Cc577Z5xdPxsxZNk4Yf5kSjKpeFH9HfTsCDUsU1PaVnSW9PLP96FXoEjofTF3svfkr",
  "key16": "CEFRk9o5rzznZEuwUfVqyUWCFQizwNrawcR6iyAscyKB5NXPdsaymxw6mKj8KhbV9AjvYPfusCZAmwgbV8XPK9X",
  "key17": "3RgqcootV9zYLrYi5ZD2AoZjvmgYpvizctbuLQuV6uF2u1kzKzwDD9Z95hgYGXxWdyZnT47c8RqqCiQixjSc7Qg3",
  "key18": "2CdrpVLziLicyGiwwDrL1CKTVK2SySw6fdqsWRj39RUeYk1hPf7SLDU5ESany7AC2vZgDV65cGFRuVrL4UZPpsUG",
  "key19": "3vXBwNJHtvfKCfHB5rrkFcy8obRBu6RCpgo7o2vJ3wZeZ5tTVnAkub2tXGLiuCj7PRBKyCVwRkx256rhZk6ycWms",
  "key20": "3BWM6ybSXGCYydcHgGbBTK2UrE8Zcq5pTgCin294TqbVoqqQ8G5RZwL5ubm4Q1qEuQHMLFimXfACGRWontVoc97o",
  "key21": "vnCBNt4fpcBFVx8JeFNbFEPjFJzJTqg5dCQG4X9CVgBeaJghJULkGJFhWVJKCVWAfqmhc887fsrpavNMRbbqv7D",
  "key22": "MaKoSMyXgQo1uMSzxsqWDpVGxJe4UApF9h5GoWQL1tLpLtd2jbEriaobdEWutn8KH3jmt5qQGw3YF2jJCvX6NTY",
  "key23": "2JFr4FjRpz46dF4fEpWvhSj3eNFuecEMt9zsgnaDxT2MErgHFp3R4MLmMGaFkNzKvw66C5QYZJ2T3qwBCMd1mNi2",
  "key24": "4JF5PcYRxqFnPP69cTpJE26aQupgnkdSJnYZ4wFXbdiFLSBwMXYp2XmHMfXHy9375RbzPdp5NGRbBjWQRoryMPZH",
  "key25": "64JZV1WExRnPA75vFZFtSBPymtZm4uXrvp3VUB6eUGZ7grCmo5KodnEjhVhBLXy3g3Y8omYEYZhCdpErKit7LqUS",
  "key26": "2W6vFGyVSyJBU24VLD1toArwkE8FPdkQFXKyPZNH8NmU8pUTzME1nhMKUZ5c34NRt4TpfQM51dmhwy15xGHFs4Kz",
  "key27": "5c75CHS9hvks8beBmGw7gTGmcJB4AjnkjnJpdBtzgpRafkuZ4HyWotBKdngj5nWKFZVPJ6z5aUHYXgSXbaoHjAoV",
  "key28": "2HgeVgGCXvdYEZTWfFnzqSwoW1uz3Su5AYoyNupPB1AM8Guo3ae6VDUeVQTr3N6h3BmufpoxEHSzwMVuTDJC7HiR",
  "key29": "5AVzkTacDsLq8iVd1Rb9FWxWCECpfJ7224GMAJrpQUefF2co4YtjcPSp3yPjoznkgywEziD5iBbe1r9HrNWSvuGM",
  "key30": "451w46P2pQVyFaz8HZ5YJgXB48KTS9ZK6ckRa9QMv2qJh8Hm6nTAUm28CeUhPWMgCApXi2YgQV8US4hjvFiHHb2D",
  "key31": "4MX7JBYZFd1VkdxJ1Z5vbkxKy9pBhNpB4na1RDGn62r2LUcg7BTUyX4oJLFyAuHShk59P4voawkidAC4vb4assyv",
  "key32": "2hNCCJNEzcd3t8zMXi1i3CAfZ2UBXUpEXEKdMpMm57UPUmHAh1BTDyw8azGErK5u7imaEwhbB4t6UPp8B37gsJib",
  "key33": "4h4r9XQqBNKhnUyDEMzKPBXv5EVxUSwZM8EUgQmQRNzaYdZ1EE7dD64uMWGorzNcf97k6pgvNBfKmMe3Wj3Vhrfd",
  "key34": "3VuLq4TqRBHkFRCpfSGqgbJExZxN6QkkrT6WTSYiERRoxtEewvrW7nVrcdFX5CFpXnQtS5ZaDCzhTk45G9TtFZjg",
  "key35": "3mpKZpsaXAvrqkFNKMVGh3x74eUDBYYT9P68DWW5nmZxMjUy9PqrhnEMEtJnrkZHoqumTg5xBQYv6puv8agt7BJp",
  "key36": "63mXVnZE6ibBgJo5stn5ZDBnE1Y9rM7GJYdQci5QZm6SPSxfRSh8jHhatb8ueGrZASFSebgvmpj4gq7btKd5pymd",
  "key37": "4TFFBbkxpJ8id3KAML9dgLXizCNvgGz1eDocYtTnst8vSRiQFSsmjfeRUkwVvwiAP3DjRRaF8vGFehHTcEhzNwpS",
  "key38": "4yNZ8XGnB8mgd2GtrFbrWusCrNM741VHgpLnLe6hcc7pqcqKXb1nHDMJ2FHaaCzNzPpD8je11dje9rqAS4G1SN2U",
  "key39": "2xcVZupHUH6JneU4ct7W6nKtLhuHMiYpL5HseiQ9jnwtWGGqqRsxNRyRWtapBrhG8hZ1kSKxW68975DZ5XLneANb",
  "key40": "W14PZryGce6f4nQg7ZHk6MiLTd2UFuufi1YwoGdSwCH5eTM3qFKzzzHRk7uhQ57q6UCNMvinWbTpvtKQUWiN89F",
  "key41": "4yq8xmnR9VmZRepFpFCx1Ed4AQNcsxwRsvRb2QdRPhYSkYq8yo7YxtqvumTb9xnDdVKMCXMbJ9Ka4sjnXWdfZyj",
  "key42": "2yUeop5FNiG9hXrnBE56egmytcimYHUHYzJrGGZTqEhvfQ7PqRMTJ8939Jy48MVN6SoNHWpe6R9T8fVXUxk5XeZL",
  "key43": "3jode8U11YJHuMafgpSj1Dm3BrYMC1tb9qaWk2KUpHxYGLTyhWwGkMVCGZPu3YqsH7FQMFL1qy8GmBKSSUCHy84G",
  "key44": "2QhjcErYd8CeWBp9XCwyQ3k4MadJD1BpNZGN3quhofNEKtTdnCdhyiHQoxtgSfBDrvVL5ocsvfJAEjza34GgU6BB"
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
