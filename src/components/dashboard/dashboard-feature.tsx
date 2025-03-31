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
    "2qvoDAvY2sHnJZibnC64TQzA8i1PVEhQ5XWwhowf4KTLbqNuwEfHACs9n3gANjiQ1Cfj23ix2LGhWxAaaqkUHdDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TmpYhvPcLCig6j4TGaUaXqeLFYjf1py8CTU5Wib7ntHNYECgHswHQSLJeX5XNzWygdnppo9gQbqTRjirybSfJiQ",
  "key1": "62rUNkjqn5jc2PrujtGMAgLjvindGo2eVvUYX5QFPqQ4FAWeADpyoGSriqYdQGCkppBzwNk9w5jHBUahJb93XiTr",
  "key2": "3Cwtvqfv2nsgKv2w7mWqKZM1jiRZYCGPYu1dKAhzb93DaDkHdiwg7wm94yZJV5txmXHD4YVufZ1bHnua9Cxd588a",
  "key3": "utoH6BQTHbgA9xbSMWqVVVYMzUbK9WoWSHwfL85Q3f5xd9sp4N2TB47PYvzo1QHx4X5SDYNqndz2WrZEJqbUBFS",
  "key4": "27u7mffUha2ARzxhmKNHYmrSVGfFofZnh94V53HY31ctSuJijptu8RNqiVybWLghwRRJYkNpDQt6zFaBzqfWGZjp",
  "key5": "5ysuboLKFeK382yZYhoX4q83nveh4BsFMudZo7uPMAXBEYHLvdFvcm3kUpL5N6SPbqSJHYZcxz9Bfpug5eNmyJ7G",
  "key6": "4pRyK3ZPKGJJca7gcqWUpaovo8wCACCD1dVVzp3iKMFLLRbQtF3xjzsnXAEP8HLhgwokR5rGReJa6DXuAKZqNPYX",
  "key7": "9EY2nyJa6rx33LSMJaEAVv7ZgYXDAXTA2EZttgXrym46VDgC9qfDC9Hnv2m8aCUd4gsa1cSd3Y7zRJrygU6Ff8d",
  "key8": "2vfJM6S7vudThHiViRSu6jJ9NVA9kc2urGN6s8VEWuiFKRtJnknx1jTzTVEVKnB6JLadqyLG3VB5z9wBjt1hQSHX",
  "key9": "5pVpwrRdEPcWpbf19FB1TThCe9iCrw69Aagy2op1cUCoPXybWqXtpkQNaD6vvYhQTAodF3gFmZsuPUy5wrHqzU4V",
  "key10": "5jXrXwgbEA6LJMdeVRM3ukmWtpBhqzExhrbFM3eU9HvHRsxzUXbc9ym5kcP33myGR1BJwdWwdjSDfNGFneTmbuek",
  "key11": "3kDY3LoEcbf3QMNvJ2dwNybd2WPotksg85ynGV4KD36tggrpS6iaa6HqbEWSUN2ZrzncCqiUtyT8UhHd5Z2F4KtY",
  "key12": "28nyHN8Lo4nmtYcgx64BD2iLCiqVCRBqMWkSsSdZtzCDjKUA2cbr37EeRJyhcgRN3rVPeCPGBwdYETbzpgCmZmJE",
  "key13": "249zuAByiWkRSoZuEqqVGDVgCLhd8szqdPd513w2iYZS8YJhTLsA5EMvwyC9uedcynKDthJwgQgMNpHfLAaE8ZBg",
  "key14": "38m9e4HgeZ4uvhTuN4TYMuNRKoqSHSLZM17JYmiDwGcXxTfUzZ6USYUb735HpsZ6g5vvsFF1mR2934FDZLXqZmY9",
  "key15": "rmzvkcmcpDFPgukZDpbioLmPnAr59xMpodBGgovDCxCqVqQoCKyszs49fSPAkCr5M3Kqo7LeyghECwCAEqdzVTq",
  "key16": "3mphgrJ3Qtn33rk3TxF6YuDtvcD4Ns2snfTgDZKevFp6K5ZuZA8LWc4hWGcWU69HD2yTCUcsYDhKREt75SVXB9Hd",
  "key17": "5ve6r1td8y8KnRg4kwMzpyQhzAJAzxEudgdMcvW298Li4iy5zzYJn2CXdEtxNCnP8MzBg4dgqoHHnwAPzgyWXm4W",
  "key18": "5ubbD2rPjJgWhvq79fJe6TRHrcLpmEp5qeBeqvResGWxVZUmDXGzzDJ1sdnjm4VAXDe8RPAxtkTDgAc5K1MgespK",
  "key19": "5djFU4nLVh7TcfYnt7yR3icXYw4opYi62w2MDK2xMcj9LtWbrDc39kN4NG9VShu34X4Xcbs3rUUxjaa2z7xpqVso",
  "key20": "29vTynyGsJFCykrJeaujfwrNbRnnjgPA3975qWgb8PxLECzYp79FbkBTjddH7AQKnWkKVhUSCYMLDYYHeFfStNDq",
  "key21": "31rFLMkoG6qD3sfyNQ2FaTrb6kvxXfUeESsyYuwbyuSy6zXpuaXYFowHJ9ZmveTM6YzJnANmsGriwfJkf2pJXtVD",
  "key22": "2UGuVTurRrGBRtbncYLf72hYL97BSbfjGW1dAYqxt5tjXCQPvzDPkTumJfyaMji5ZuDYFzK91XnSXhohrnHru12F",
  "key23": "2w4dJMFijEvCYdk48t75zxjD46jEv55FixT6oW9Xk47bGmQLpjVZxeKyumFmW2FGiZYH7tzhv7HLoH77PYChBCUL",
  "key24": "38pxitfYHdLpyv5R9oshkrxbBYqFV9hEbXy3TTZySnLaiw9oFtv5u9oogXdZ3bBNv9ydSmiKs8BNTQZ8xEB7BLMo",
  "key25": "rKhQWNMgzpEjWTEuTHKoXwppvyDiDSWDkKGNKdyz3i8iSuoG1S4vYXjEi3yXANtWPyrbXFnMCiv8VkCCVCoVzPq",
  "key26": "4iLunFXpn6rekQVwizpaAxpHr6T2rVPDGJxk9JMEQH9G8CvRnMEmYD5FCRoHo7w1VuZrh818Qx7ysxoo3Fjk6Ho9",
  "key27": "62xEzw3Vyd2zMXkTzP1kPVBEimLoESvKRxJFYBkcxiCWJKRHxkfW65f7jfDCVBhCAnNXTjxUWiSncuQheyF2q1xJ",
  "key28": "37SEhLjYYEruJsSs5jSft2EGyBLiDkLUVTQjfRqhdiyW4rXVFsGcKQ6EP8KuBQfH45dkDDTV2VcPz67Wu3DprDRw",
  "key29": "5eE25ApQNMqrgNtZYUeRCcscERiyok4STUEon7sUmSPtj6ZU7DWQCuuv3sYC1Y3VJgDwYeCqA16n2g1qtANwzhso",
  "key30": "57KyUsHZDWc7ixwSetXTySj9hGiWp8CPAry1CZbXDJxy2r6btuaoKkHps4fFrtej6g5jAhNGzDYxL1oDTAQBr7TV",
  "key31": "5ZH4HSJ7ptrqvQcKNzVyKyXgSitFceHajLtp9yH63VUzPASXymNBCb7fGWh347km2KzcNzAKCKxkY7rFF95K9Sdc",
  "key32": "QGEBsGkSYAd4iNjjE2tNTJzfdKzEFdhs5MphbXryxfo7uKqDjZ5PPLqy1tDyEKUKHf8kz6jT7Kp5STbnZXzA1bj",
  "key33": "52E8xGxpistShpU6LiRHwXy3bw1LK39Ynq7kpjo6ZWufQhHCNrmaN6KRvJA2qzh2f9g9k5pwcfmv4GeRW8DnLGqW",
  "key34": "2RJJyKQHJ2tgTEpvfjHm3RuPdayF1RUntJn4iwp8SQPUFCZzVB5JvKb2QBacMoaAbyBDSFgEasCrAffEc8hENhav",
  "key35": "3HSwU8DN7tCogKR1Uj9cGtrYG7Q6MW9t5hgEykzhM66N74Tvm1xkH5fmDPctRNjPVi5F3yFx34kxx2oCTHKhVYoz"
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
