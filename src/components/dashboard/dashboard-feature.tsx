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
    "H79Grxgna4pKMbEMvVPa39HzhBn2eX3GdnPNPvhTWFpLLi81iCKYNHK1cEy4BisduwevPRegi6m6bKBb6v2fePk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxysGMiioXbU9S1Ukm6nAtqTfZeBDyHBEb5hEFE9pVG1Gy6NzAEKiyFUWwCsY6eetZxEPRRxivrkELycd21ohK9",
  "key1": "5wkvbpWW66bY64pS2hDAYReQEucbZDy82VUoT5sQpq9DLVCoP2kFwLEJQoPZkyMEiN2Grpiu8fGdeo16kmWtBeUB",
  "key2": "2w2VcmqBLSyFioZWARNJ2158Uxsu2RxQ5sGkxWz9EixjEqtABfarhFcoaijTp6VeAHFN5fDV8p2DG26ZZRPdZXKc",
  "key3": "2cquSHxZ7phGNrMd8ttft5RPsWBZUv5eUeoZzkj6JbZjtyEJARz5Br94DH6KMnYrwDoa2iMwdJLHvRG9g5K9AYDy",
  "key4": "67QqzEpfDC6Sa1iQhtCAMN9mT9KaDmMUQrBBS6xZqrjYdjPV89Jh6eMFFPrXHnmfXyzpZH18tnCVtMRboZaTcCGt",
  "key5": "5T5jbhBREhGy1phQA7R4gJuX4opmkbNhbwfSg6cMEfDY7DiVC4BF7Fj2ixHg8LqEeohYxtcgSDTY183SFWC1Nck8",
  "key6": "5W24V85UirYc87YjmsvuScvWLVuknD5bLUZvew7CRZLapgnZ3GDaQhaeG6mjHoCo68vUJDLq8Fn679NUindrrmCW",
  "key7": "5DzWfzy6Ghpe1bwj4PLjui15H4PZC5q84Y9AGDg5zE3awGEXTaMrumcA7WRDzLFS6XZTYeYbGf3AcmeUGXBKu2bv",
  "key8": "3kQH7KtBNk391dH1ZDdgN5XxwW8UAzaAJHVaPnKZWEmqjhFU4MM7iVP2oE7FtcAWGGwEyNtYR5Uy6toSFfmswK35",
  "key9": "pmoS64QVpLYSRJsExb6aHZojJDMvTmX2hZq8ZxBeyxmoKtPzBs3iLkADCFyXGsZArps1RF83FWoWRokwjqvUM4U",
  "key10": "9f6iTcLEE7UvEXUnmLRgu3bE33T9NpfbZ9N4hVy9WHXS8choo5qriSMQPGawp8U1HZgm3bePUT1FEZkNzvR8cUq",
  "key11": "4EfkCXQyrc3J9NWnzyxyHjN4J5rR9diYLCEhKpbg8oK9H3pukrrxEoWTfY6aoTnHjTMNp8eB7UeJFBHrsMZCRfMD",
  "key12": "a1hjj2RT76XS8JWmjUpMkvqXiWHgHwcg24G6Gc87L8U4xCKPNzmjEsxCA9LXXrn2X847raKGbvcw29xEy8WUzTw",
  "key13": "yZZmwKKuQrRr5t8cbeW71tsJMThyXWaiuYdPTT1QoWvtv5yAQpq7cUkeLwg3DieKr7rqkQw4st5Wz7Sfj6GKvtX",
  "key14": "A8yS62m4UzWSXN4Xy8jAtby97yx4qBhfYevfTxUim5okE8cW9TtBXV5RwrGvfH1siDrwM5cfT1igCX39qZyB9EP",
  "key15": "45ErKh1TWdJtYhtv71XBAX1kU1o7MRwY9vUVLJgZqR4kVUakvB4wvMQ3EZykangFD5dWqFWquGW5tYZ2WsvWrCPP",
  "key16": "4ohtXRvyfafiiZvWvbhJRay9dPnjrYcg49kcChMgJH9qgmFeD4Nom57UnUSCSCCRBdeKsUNGYn1fzfTFtTCrsi2w",
  "key17": "4iAstn7eYYcqX97hAhSGRyuPsXRaaK42qJwHfxpHqJjZsCz2qMw8XYwdaDuvQv7DuHraTK1yaXd93btzNqBGwy6y",
  "key18": "5yniqhQqELwvkTEfjtP4BgrrS1oNd6zpLLpVzDrYPBzv6dsPvxYzvwgio5Kxco19w8LbWNxpxtJS5PxeKr5FSd4",
  "key19": "3DfxDAKXGTPNFT4XgarFG9du27KH9fiSQHpFpb5x8ZnuLd7PiWirfPjjJ5MEMorb2PGkLfV7fFxdGycPvMMJgFf1",
  "key20": "dzYNb5QQsgjjoExDRvbD2mEfvhoDiiviezG16krzVUmrUCFRMPiSXmuFN4KRgQLt9VJ6ospbqGxRryJt4vifufW",
  "key21": "4ZMFPz8Q2YhJT5FRFUTvhNpAaFjE74YxbtYsPr8F86rKGajMHDFwmyRmfzZBxTR4jCyDXqcGfs7rr2yo7w7biFK3",
  "key22": "49UuAXfbC7Ck5uAsEcPP1FzRKJu94FkYafbbswecTHeZrLPHgQaEJf3opvNV9NrQCbYTDgZMMUvZkhuaEuKLN6vg",
  "key23": "JR7rujcjCsqjctDuJE4PCuFd1o9GAdC88CTNzxUqyEgLboRfytTGSioWNGZPpqrqkCBCBvtPgM9gAm9ySrUdLqn",
  "key24": "5GZuVeBarkhDuDxBhHNzDrsZo5fkmn8f4uQDe67HuejSAwtJxKMRAEL8WGQ23ftEPxTyEVgU999QyuNUcDJEY27M",
  "key25": "3aYhkkY2ZYvMVr4B2TGScLeerSSRJogRvQm58AQAojZGi1rgnqTc7ewDCrV56WQmZUysczFaa1nDWRGS9uga7mtC",
  "key26": "3yrbndkQka7gBovLieJ5sx3nJ96DSnnLPVijkFoQef95AC9HrGewWx2Yr7sQRT2Vkvu9thfYeMSJJaii3czmxC9X",
  "key27": "pTtGNpDxCkyiBUKxTePgzWzpZUS94o3P6wa4jTKywMZTaUpVsc1gU9pGeBPhJ2mb1P3ysEnQH1N5DjQEj5GxHHc",
  "key28": "46Lo5ZEcx89hn7EGPuzV1rQiSt2ZpSd2tTa9Yjvu1QVFH8AV6FgW6MnhdWT6yc3y552hsctQFzSmpKKYHCJDNCW",
  "key29": "2MXwuxh45zrmo6PxJKWe2Vk2ZBVKH2Q1mBkamkV9AMxKE3R4F3rzfjStQA8oQRpwzTLzbC6FqNDCvMHBNrdSEbep",
  "key30": "32pHdKz4gnShz4N3cLKwK5vDnH75eAShGtp3dQL4fZSZfVagnNwoipgmEaDtstBftKruJoP9mgGU9YnmAPNxu9j8",
  "key31": "3F3mc3FGLJrQuoUSnaE88iiauJXcpXURsAmjiYiq8PWU9MMX4LcApDyMxccjg5E1N99aryUUJm7v5xF2uvz1Uzkz",
  "key32": "4xj7xwRUW9TdVBmTdVF4f6KhYBLdQkbNwjoMm64jr3bGLq4N3L28HXktAk5w7sYWjfsupHQmQxf869Fib3HxBtqQ",
  "key33": "38LX1xRhGvvUhejZBLbZ5TazooxF2N8AiSiBqLeLdE2UbybURBd7So3BVuG7XyJmFCW24nQWASAF8WYE5zVxiN3K",
  "key34": "42q4WwzAHVwNGoMpVLNLfspb2bDK72HZCApiGrVGRfXdh5yxuAAgBV38G56G4nS59X1pF7V2MWwKJhUpF3s953wH",
  "key35": "5mt3zJ4j5bbTcxkAZF97VzqXRtHhRsdjrsshJZ2S2C2iVgnV3gY5ug4pSPWJT6rjncBa5tnn9dKHRqEkRscpgZ3d",
  "key36": "3whnTWHcPw8rWFA1UrYXTuDV4L5AHwZ5fjicGZ4NdpNFTRVSehhUbQENxNEirRZt3NsX73sFaSwLe587RsdKR8w4",
  "key37": "4FLBqUXJh2JbFVQiMaMFkQNs2Wq1YcEwHxFKGoWbS3CVFCL4YD7KUPyLquJHLvGRrDDBmFW81QaUKupxuFEGjd6p",
  "key38": "3HjTWaevdoh7j6R4UCgvZT8Dgs1q8Wr1c2L9ukcThse8ureWXTXLeYogDuTk7bm8U1GjyvanurXUKQBQRjb2LEp2",
  "key39": "4MXTbEbiTBstCgGjqa54UAkNEuJAJ41ArG9RrMxiHEmaPc7hci6oX99zcMm65nyhxJLPito1DYJ2B18KwePyKJc9",
  "key40": "55M8EYfnLWRR86SZmCPzabhVUYMYr9Zac7So3UiQtmwDqqrKWKgpDbShsU94pbAFGVWdjo3MTPN94pwfzuseZpHF",
  "key41": "5LXtzkqPD81PMihA5GkfH1JsJr7sMxbT63DcXG7289ecx9xZiueZh6WPKc9dG9vkam5JoEfXXhvkceZ93k7XKzJ2",
  "key42": "2VVThP6doreoZ7nFmRDiPLXJeMNv43EYYdUBcmZDEwjRDFSHd2yMVvEaogM51VfQpHPTkWnifpyf3RzyqKuS2wXK",
  "key43": "48u27yGr3e2u1vqv4ZdFDaeLdM8XwqXVZMGHVAncoJYv9u8AsVCSA5C8p1GE5TqXi328ab8x9NE9Um1o8ahJZmmG"
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
