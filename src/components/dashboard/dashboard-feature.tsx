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
    "jmXMqHX3RTiRdPRgSwyy42xFcNRTiLMvFPdgesWLC1ukD7XShMgL52MGvUVhySY6dWMKSMpy9YjzfDZ7Dyj2nYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qA2ru5DRk9Z7kMndXnxwEjdBbB4kfq3oKaGCMvpW7HrTdjq5qga2mDpGFX4YXRkdCW4BhHLenb8qdkvp2pQeeq8",
  "key1": "4MvwZELiKLpqPQs3cjzXiGDc5ywPnzthCQEEFXw5XmUSCChw49w6hfdysvZFPQre45oCZ3BfwAfwR9RDHYDbpoGG",
  "key2": "2tAGxrjtKxyeiET3pLuiB4LuzWN13bCqtGfSjFs4E2UwKhkDBndN3eS8oqo9ehcy3Lxs2nJWyFL2w6HCZHxLK5Vf",
  "key3": "5RnHLKwTQsjUy7m73YesNxMfWGY99GLH2MkZ3eS7kucHyRMAshnzir5ivnMjSXhPq3NUWHY3fY7KA6e3EbKjboW8",
  "key4": "4VXmxpA8dqcvSeQAyj9hRVEFG41iTy2mvaQupFs76C5UPTFmGnZagZk6FZbf5Xuw8xLt6Mpjj7rGrccjpjKTubpb",
  "key5": "4QmzUEfLZE4CQsvUu55xY1waTpYE2khLRjfZ2ZLzKen4bTdFeyCUw7bfQdmZKZpLPCH46kNwAWyxyifQMHQdQuDD",
  "key6": "5r4RGvUN8FCM92hSczZqTGkx3Y73Q4CpXKEvGDY9KE5fkDKCwBPxDqJx77rvyVk6frnotrJU6P896LtSHQgjUDjB",
  "key7": "2jbVkV6REX6zjsqEve5gZCSZHVH7D4VuENf7TTsxf4Jajf7Rg45KnDtkPCs2MBszjckRNivhj9aM6pSeZn9dS5jb",
  "key8": "5wUy3qF8n1by2kKv1K4UQyizDsQRVQXyqrpuQpk4hcYxKzEu7n3rwXiRVDWuKBT4Y3paJKqjXMjeAeXVoEHFPdvJ",
  "key9": "3aiCufD5iQAz9nkX4E3o9X8XTswUxB1FAoy9VK5745gjFoHttNqYQ6pC9zfnYU8MAKaCBMGXCNzBKc5c2Ckh5Hjy",
  "key10": "47715uXZ4qmpN7yKp7Uh3kKXcVUqEhyyw4bLcv6RHXeZBofKbWQ8CxoGRStfJ28dfqTiHz7az8Ad63qwDDpMGeZW",
  "key11": "2cGN7bbmLmJrPBjSav1ddJXnk48bVWZFgXMXgNuGqY8kbXFKM5NztVWEW6Z3qtzNoTTwgpbYfiPLMgzGhZX8XyMt",
  "key12": "3zVkzLefT16QZq7sfFiqDaVg3wtV7mBPXEQxnYu2g5bMsUah4Q3YeG88UDhiW3uEep3LYZhySisKKC3vCnGkQrEy",
  "key13": "moxHfUw6kHMUYwXiU5pYX9Rdk1A7JaJVu4pHC8wPEDPYJXyEU8MsoS59aS3XAB6nQXJQguGYzZLhJL2JGCdRMwp",
  "key14": "229FTEW6DPh14KFzdPzCX86AREZK4RNGvge2NGWjH2P9erzGuhwqDks3o8P6rJNxHkH5TzeKTZUhEGVVTbdWjiF7",
  "key15": "3JP2cpq5sZwM7hcydrGshAEJQpM1mpGaCcwcDiaWmSZJJVAWLautUxfUgchKw1ohiHbkvsvbvbcEaEBX6py3tZZb",
  "key16": "guTDRsAse1VtBv7RPyaC2DRAi2cSjkCaXr3f1MCEakURNQtYH9qMBgXcJ35zjyf6ewWtJS6T3dE7Xq341ccAeJD",
  "key17": "5KXDDYP12AbKpJ3DhrAjWkAmPxRoUo75BvBuxbPwMqMQRK5dDWqd7fNnvEHBwy9TD693jCq3omvoMFgts9dtbvjM",
  "key18": "PjY8J7W2wjbhQ6c4YGDNTh3R3mPadsUytC1rFmkwwp8dk7Ub4UbNCbYNtGkG52msi2f9zq1ZLN3KAZKb7vtZdTw",
  "key19": "3jXsxG3aRfGms83TPAUBAZcaAw7Q4pbUtKUA9EW3223Nsm4VkwCgEhUHGqvhAnZpWNm6sYM69QBPVeaKt56KJztE",
  "key20": "4XCqB41aKVMFHPBMjRQ5xGgvAb4VHqwiHNsJEbRe685T6vieRDvXCeENUub85WEUBDNoz67QCsu9z8cP2SByxePt",
  "key21": "39SmaofQN1mPY2XCvgP78PG3Ai6Wa2rcoBPSMyAu5qfwuwZYkpQBvzjD85UuGBwGHX7piaED4dB5MpFFQwdzT4wU",
  "key22": "2JbaSzuADr9L4Af2jZQPD5vw5yDScX3aDSUZW9PZ75xqWCVYBFQ3fUrPBVufKKhVEyvuy4Su2uCHHHYNTV4C3Th2",
  "key23": "3yLvyuDspcSEU2QMMqqnJT3gGUZn7yfKkvPkzafpSgQtAbEcJDHdFaWGoqht2WeMnpDhjMwZJZzD6hnCuFk4jGgB",
  "key24": "3gZfuhUyiUA2RVxRWJNT8KHgXVtB9eHmc2UaRP32ymHnA6p3aSsyw2YJjGU8BuhUzstFP7bBLcReEWugwGjPTXZs",
  "key25": "5cLDB8stWhvEg5Chc4TP4jMiDHu3zQvaqaSRTMp5qeQpRwbAS6zjCkh5wCsnTzW2GoQVf3uPhfcT49r2aC6r3gNK",
  "key26": "5VrtHni9NsnGhTKXdPYd1bWUTMYCrNYQgibmidh3UzAgXk6PcdRVyuZaLpLzH1bYsXVxy55VqLrx6LmD8wZrQ5Px",
  "key27": "5VvYNrGMJiWLjRBSASEJdavPTEiJDitahPU3ksYiw2Qunpzho9ZM2XfL8yd5f24m6A4qCEMaPXw6cRkpTcbFxfq7",
  "key28": "2pKZjUkMtQJg88qrCXWzLiaR4WkvzVokfkYWMFA1PFAGm57EuyGYYXVeAEeiAacoz24vRt6jWWppsaRfDQgXbjK4",
  "key29": "4QaZdtHaqNXFQ8dQ2CgwLAen1fgJaQ3s64WJ8YxKgP6rVW9xqJ855MA3E9f2VbKfx2v9ouQnWh3ru8NVK8wTk7yh",
  "key30": "5Yp59mUt7R2rZj76r8FvRedVHfGWSjHnP6kQRmiL3GZqXGXDjNv7mkDgdQN3zXqC2p5PRGBMqF6jPx8JK58vARnA",
  "key31": "VrCyEKBzPMkgrxBxqw7V3i5ZxYotaseZDyPviig3Gtecviv96oqQbdFMYw2EwZNiGnag3LcQRTGCUy1Wfzqxc3V",
  "key32": "4mz6uGNb1WN7AgqXcc2ZNFQ3hFWyfiBvaudt7EfVLWkAQojnf3LkFzvh1cBBcsn46BY1z6nJNuf4yx4p1kGMNZep",
  "key33": "4wiX5yV2xokstc1XsDvWLWQTMwQ7GseSwNDUB6HkG7zoJehP4p4SEPAmevTvy66o5uuHfbBmoQTEyHY6VBh5Pfx5",
  "key34": "3XwdH2o9i1rXzsvdnmYwdZ9QXm17y479WyxqfpNVPjsqcT5SXdujmeUgupWs5Ury9Rg5ksooAmCcfCatAYxBpsXb",
  "key35": "3vAmrK9szZnJTgw4cywU2mg1VeUb8VtWbTqS2aGHrpLxbvSGkcVPtaAHferVhnRg34ZhBHegDPGw4ALUpRoG2D9o",
  "key36": "2JnNh9bDAFbPo1C3mbyuaMbxRifrK7QcXCJqyxbvLQ9he62Soytat4nTjoqF5XTWWasc8qxgNHatjuMesMTqej75",
  "key37": "3VVYiUHeQSik9n63gVCQW4BHGavVWZj1gazXBfU9D9SqG1YmDWHWnLX9qUHPuSXqWsiHc19WZqJ8H1SvnqPziQaw",
  "key38": "4pZV2LEVDADEnPwX6aKQo2GuxU3UUu4UJuttANCm6nS21XEmXAkpCPRNoEZTmqMX1BnFtSZoGTS5No9oCcnUDksZ",
  "key39": "3kRFeSZX79jHyifUjuEx32BWhAsuLWBrMyudH1MBgECy716zv1xA3hrgyM4y3MSnh38oqLzhBAdxne9XiSo7FdHh",
  "key40": "57CnWrf53sE6ve6xkaZasJFbDGFBmVjnM18ZjDWcpPwvcUvauxQT2nhDgvB53t4Ey96Yq9YW6hLK9yiJZypuaeZY",
  "key41": "2idkeQMG3RM6Ew51AdCoBLTTzrbFxu6aJbnBPXzU6wXvu2pZcCsrGWLMzahk3GjJzPVRKatYL9J2USxJLRQT7PZ1",
  "key42": "2CMH3S8bPRYvoT72pDzwkGUJ5QmemRtgh5wwNHihyFSYxZfDEme3S2fMAo4xaWaUdq4aQwctaGcHaC3hSCJzYZKC",
  "key43": "5Z8i9Ju5ckzo8g8Nz8JPrBgCWyRSV18BRFFFwZyEsq5WCFgfZGYDVzNBayfkChiB4WtgBbZk8GjnNFVDRK6JWmkL",
  "key44": "2VrkSxTMWauPApVmZ9GZy9jrJFQSfscbvyJ44hEADerARVqXrNzFcKYS3rkbVamPQSYXPi7VVoDd7151VTv12jR3",
  "key45": "2DHCfp1hmUBFbSne4duCepdqCFL68WMWRD7qk5pqwvC6vPUCcZw4wzXg8aqmmSdeNu4ZGz5U2EhkjvisUx8G6NT1",
  "key46": "4J99r7J1MXUzdZq8eoPgsqGdDsDP1aMqMgiCG5GfBJAWUQoiHwiL5Qujv6C7mPkaEBrw9crGPSEgLBfFbexudtEz",
  "key47": "5r5FFMf8cdExSgmYwmXvjtYGMMqYuC19tkjcmC6J2fTNpA13KH2SUyuEXsLqzmYxrePfY3voDnQ3ciVrzV4MuKhu"
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
