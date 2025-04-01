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
    "4ZY8eyopmPQVWqzdP2Ve12SozZJKPdNE2LRZmgVa3zzSEEW5eEDGFveYQtiUcpwF2sauWoT1dydTDQKjfjzEbBYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xqno6P31pStGzRd4xth9thp5CwQX4rf68NzW27yfxFGGRtPosxTF6XeCe72oabDt6iPDPHF5v1URQGeykvMKZo",
  "key1": "5tBGn1YTCGCfxAqarVFGWftkRxdNNKX498cuirUdfeHmvyULuM4DMp48KL7gb93Jx12HuoM9vnTWFaQdqifSwbMu",
  "key2": "45944WNQrbUi65LVa6heGWwQWt9FA6TuU56Q3uh67SdaTJzuqLN8PfJ68d8AMmeHqjhgfKPmiGbhkNkqrWP7wPrw",
  "key3": "7LQM7dnpCzmVzoYxjha36anJTHn4d5MgC54W1iwWWf1QUK3h9UyXE3seknQ6jrv4W2F7idfr4sYss7unKDpbK65",
  "key4": "3khFXAjjDCYFkSRYbtfk1EXghHYG3R6V4X9wYiTZAbLehoDZnAXvcwzsxYa5KntBPyRkkQw6qX8Sv1QDkCiS8FDM",
  "key5": "5GyNDuMAK7aEGjgBHi5gZo65pTRyhFpyV5tVZLEj2ZmyS4ywj17LAoJSuNTuHuYJvSqbKbqAq1UdDSK2i7kqn64U",
  "key6": "5FhsZjt8pwfqr4LqwJTbLWqruEmhfTE2wVwtFmdciKEhWNDjvKr7ssJUj2vxJfqXNLZjSg6cHC4ifcMaAbPHw1GA",
  "key7": "15K3ds97Bjbussk6MUnWbakaxyx1DwfHnXUctALdN5d3vXB9B711hxVe8EQfHDqcMhujNJTeG3yBXtWJf4po35r",
  "key8": "2BHqHTtnpYhzDESQ337pxYu5tZvp7MyKNCmN41S2mxb3wSdouRHVdEFpRPxjsSKPbV4uS3CwED71UPH3jc8148jY",
  "key9": "2LCCSg8nZMgKVgjijBPkUe7Ar48ztYJZCj2KxNsVf6XyS6WZx4gWDJDRGGdYRieumpSiyXoP8uXVWr4irKfiNqTF",
  "key10": "4xZGZKM9C1Q2zuHhKhocmXzUrNonTDVZugN1URL8Jv9SG1Ryox2zPzgRViwcMzeLkY89EGMtJQbFzdiNgPs4oiU",
  "key11": "5y5Mi6cBb6Gdj64bnLa9nBLwoKauQMgjKZW4qssEMvN4bFiAG73yZEZzDuQ2rA1dhGJbkCVay4zwLgngfKYBPcYu",
  "key12": "5j5hSvvcve7yw6hzeTNkFvKry4BtVzhX2FNAR5L5ienGu1ZYbmRC5uub2oAqJN5EYQAx3Dij3Vh6uZocxPcXx7p7",
  "key13": "3CiLgaAorKdq7RnBh5L479PhwS85S9RZw7jdML4RNCvQ2xrCqR6s3PrgVitZBj57916T7iUoi26LytbKKaBjhoTo",
  "key14": "2P2C5gquUawpbS5QGr6ZLNpNPZmz9Hq4AQBxaU5wZjjNX4XGRnaiJb1dqJ8MqnKrtixAhHGuVtq841MMkAnajp5m",
  "key15": "2xGKAVmbYqwNnUQc5pxxvtYb31rc6cuCpuPMWnET21A8HaExcgceB5gziSZBSJ492tVSMgT7siEyBGXHqmaTADBz",
  "key16": "4pjBtH7y2weUSSrCidT8bGC9rVVnG46AWeYeLCiyx6C8TD9gMJi2awK9UgjakZKzzdYFn8yjvTu6CaWALLEwyMzR",
  "key17": "4BozDA9eoyBWhTAqsYuSNHLb52VNHX9vQ5yrbASQUKUzXJexvdhHvdBn2tfifbVyGTcFU5BNbWQ49UEP5BHemNAi",
  "key18": "4gQZUewto2nMh39cw5dXXXXsA89PyfDoK8PhwtzGVPmYF9NvkSoMtcFSiExvq9BRhxrz2ehm3CST28tFp9SFemEi",
  "key19": "4kQ1P9UFWnyi6HhbLyEZxKomXE4VuS3ECASENTpAocSRoXG8EU2TCrxGYb5P8aXN14bB1kPCSzJyRK75ZE7WFPwU",
  "key20": "4qaiafTzaE7L9jMsKPhE5GwNYnrrDefuTwPSNxA3tdxjafXBa7npi5nhhiLrpnE7NiMstZEN9YPbjnVJjGASd35r",
  "key21": "4TAfswEHwGUdVGNJA3sRieKLuiWNGmJgCCHL9H3SMiPGcUPyTjAnVWLp2tkiByeDxC21hsqrishxfhp3VKqvoLFX",
  "key22": "2es9o42NnaiZ4XTBbPSi4o8rZaUQUyy7GwqrMaHxxoLn8MWh96GKLCYSugf42KfkihBxWZqzhBmnVyYQBxpSuGG5",
  "key23": "4tdvR4PbdFGmuTjLyRPvMPU2kxAxhyWWZvuXsPqbvhgPoPYxNid4EGmKwcLpihTRjHWKfMwc5Dtznb7Czg9jzvxA",
  "key24": "3YDFE7ayzhZ3baaikV1bJVQTJ18KMokDEewmERwDWbffabV6sp9Q5jUtUPQmyN1cfxTdjTKr2tU1zzWXpEJbt7uc",
  "key25": "4C6KeDdCFPhqmjxUD7w7929hVexLwAWudJDY8UGcfXb7eWtnnhvfsYAP8Qjc8StvYhuEchdg4G7fKWdewvYmhbjh",
  "key26": "2HNxWYNTLbratrNaXEqpajuv6DkNjoQJt3H4v8Btnh87F5PnhzaQ5S9YmmBYRiuGihN2akB1mW1V2fAhoTh8Kbj2",
  "key27": "47A9aPExiWikTD6yLm5VzvcGr6SL8cCpNWN7Xu9yVQDmRybd5cNuk6JvpoUfdkcLLN7ZK873P2DM3xP9J6bv3XvB",
  "key28": "1dhKzt36XAMe8QmiMy3SzwmExPn4RQ6ieQT1k92penC5EdNvPWxo8dbBkwPj9wcv9622QtxKFLTrF1SqvypSbuU",
  "key29": "4oNfgzSS1ufVqmS56guJLQXtQ73ercvRusrSYsNGEmBHqStqDaQsCnn54WbQtNv6UEFJ2ccxCyddKvZYBquPh33v",
  "key30": "64nSzABb6dK5AM3toHvtxN5Eodg2LL37QAbnJ49neUXiXrYNAJVukNn1PtvkCvxwn6tR9ZhMzy2FAdHQS8TeoP4S",
  "key31": "5UypWCT1zPsSr3gGTanfCDzSVeNQywNRy1fJ5hsRB9DKnYfutbPExEtyWQmNiTwx9DU9eLLhik6NyKz7sEwFGtc5",
  "key32": "54wAPKZzdKPh9FpxDW3uJAD2me7eeS7z1fdgTtDdm4EnXiYQZKiTa2WDJEhTTHKBu2iVbbVHYXSqYRtGEzudME9C",
  "key33": "DWUcXzjegvjs1XCi5qfRWgQ1B3PDogNV655rUTKWrLGcyDPLF2ejWhvoqFGsk3h4tJQEh8EZAMWKYZ8vBt1r5X2",
  "key34": "3ifiJdLoyU2YqUz3XyuKnJ2waHmJ99yG8Rax4XMVisVsnPpFo4bpPSnaXZyZzmgLKDDddSkiH7FhiTSeTzDZwfYm",
  "key35": "5JpLUN6f9BeqM5tPQYJfPvBWm4WmEVt4FqADrwzBAZ7WfxtGZWUWtsLdXM3enp5RT7KutKBVrA1y721cvyD2riGM",
  "key36": "5CCKpePNtq88DHXAabioSTCPvfaMjLkBKVzvDAVLicW5ZKmswAadxhguaCjdWf8xnW944aYhTdrUztsfZdHU3UEB",
  "key37": "opTnDsTn7ZbRMu23QVQcDDo1VALkQNhayKESNdfzUyoRfNKGHPCHmMqck76LnJjn5AzQeKq1A3nGbUXx2f7usxb",
  "key38": "4sRaa5UejUfLoj5VscJQs1PV2xexm8HFXBDuP1KxRgc34K4q2f28nVLjkALvw4KXm77zr7y5Sb6t3SbKjSDD9qZM",
  "key39": "2jJZ6JjF6b8E6J5iPkdD6rHoPb6sfB28v95qXBUFAyftkEdfbrePyCvEAuB7aQdfLVq6dHZJ7MKhyNziQPLvJAKv",
  "key40": "3xF9iPPdRT4fLonAUNUnYsZJ7XKHrVgDGKvguQ8QuCpM7zQ4Xw5HGVe5dMK3Z73nmbDfdssf4VTkmePL6ou4VyKF",
  "key41": "3nWW5fazxgQsKxMAdPmsjYqJvKbvLkBTprDTN3jKfB5fqGrGMUh8EBDAAPe7JXqq3AdzUGfLECyVLY9Bf5Kwftgj",
  "key42": "4mr9s2Xz9iPWfpTQhcU3Luv6V2gongGYg8AuQuQPRnDUWZiLegpTqVxr1Aud7EESsfjsbrsZM7LMuCvHgsQ9Cg6r",
  "key43": "2gk6QFLYzhxtZt65HQE4Q1mY2s4qv3xKfve7iqqjuRj2JUBAu1BZ5iQqRr7HsxzwSbr9jYqFCUSCcd97incKG6Xj",
  "key44": "2JtD8uZMoLGbfrSkvpg3ofBXF5uZno3gHJDuFqe2tYGe4VoiWU7zA3ZykiQNV76h37Rgk8PbAGndRnAWjL8nsdBB",
  "key45": "3KuuYcgc8af8ZJvHx8jFZj85HQzLX8cNxvsMS34ea3y2sFw7pjDVk9QRGyVqXPAJgSEPkkUuARvecwkMA9hJMXv4",
  "key46": "FGmh1pTpyGcyt5TxQHiLANWos2KTAMw9kkiJt7yVMJyNB8YTcFUqv5nQfWbpHyE8WGHRxayot9Yr6374bbngMn5",
  "key47": "5LsXWkfTEfGFF1F1UraaBGc2UPFTV9n97xn6hxrhmWjjL8i4F57aKxVK9FUoG4iS5kPLSxHgJaPLBpJ6LpCFhRKB",
  "key48": "3ZQs6YvumRaQSifToM7HaBPnnHc8MPBa81Q1oUJbLuj5gYpofX1CPyu9kFyoS6rLBXtZgAXQFM88dr36vfPE8yZA",
  "key49": "59rhuS1GgAdT5QCNrM1uRBgiEz4Bhaj6eLiSvLgjKbLzMzfraaxjeWvreRnesM5WvWcpJ1q5FaxPgovZTXnz3Ny4"
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
