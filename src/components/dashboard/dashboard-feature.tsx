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
    "2TTDMUKSTsFYyL7xj2nm4XwfwmtU55FP1t4vmngP27poRaoja8JaiQRB8vLwQrmVQPRDH4TtKjBb1Qa5CQmtis9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qj9x98YsSu8KAoUnxq3Yyn9xFRsNkGe9Vd2PtBsBAACPBKBfq38JtVvRzCdPMmdTMkBjYo95jjfYTMNjYNekaaL",
  "key1": "65kf5XXBpTzyvcLJpFcZy7nFGj7keRPjswZ6rru7xEZXXntg6iwfBuNhVB731HVS42VY8ES6sJHqUjctVQtQvV7E",
  "key2": "42v7UXQFRiCq5mSXsitGXLrWDbhQxRgU3HNhxxEybaKwBNN6zjrivCqJBYbD31s9ee6DrQWZwcZAH8dYFj88eWPV",
  "key3": "5uXNVVbnUQsr4faWhTD1z9VHffzhoFZJEime1hjMNnNKFHmotr7xwek87Lcf5zkzfyzvararK1rhFJagoE1Jz1Bx",
  "key4": "2ioNhQJdEGPNnf4XmETCcjyApBCx83jvJ84W8J1oJcX9fse3sNJjiPUhFdhSnojNUc8NKR4rmYxdqY9mkxEeoV3P",
  "key5": "4ounWpuvKBcdkiMtdXBWojBpsoZw2qygjvZ7ioXzbMXJXTdXPweWtg1a1f3Tv8EBjYwu5rfeDqVDuqSiu7SxZMjK",
  "key6": "63jHUdrVmN1o5GC89Nf5y2asYvmgFoq74LFvqK7EQMidtGe6B7Jm5zT11CRTFSweLemUduSnvJABp64jWTEg8QiE",
  "key7": "21qmojf8E2JoLrAcDePXQ8pqedi4Byr59tdm1B5ixqePqfUjmhjhnpiz4MVWpxtP5Jshn7fptYgXUdDzsphHW8Bm",
  "key8": "41tdZC4ZxWnKpPSsKHLDMKHfnk7h3E3PVbSeGjeZEuFK1aXTPCa2CZFNVrgW9PUsh8QyhqwbsNneVaFbcxsUH7Zv",
  "key9": "4hrNhVbwGRrEezBFjbRx8bW5HNsDU1cH447TjBJtJkciqdZnk3zjg9rWnqHpMzKTycvpPUKnbrGVXTvb2kogQ7ye",
  "key10": "417XjqCUDWaLc3PTL5wNSX7SC5eb7MFYuhje777xKgrLKxUtSujQcczZC1Q4w1CyGfRSnihwhdpZN6LoSRr4wU5D",
  "key11": "5Mfu3mWnVn2zsZyd8o9Zmj4A3PD1nDr6T191yNSLaS9z4zz7Bj2WzAXEzXSk1GtUBBtWLuQJeiSXj4pQx564iQDi",
  "key12": "2VzVeWXoawZKeGnynxohZ1UqoBDw1vWwbnyguMwbdUEFNbuxhD5qBvsJUCJxRqYYqAeAzkPgyTmzwD5mNPqAwAAK",
  "key13": "3r2TQaigP5uLXnu5VDPqYzfsE6Tarrti6PfwS9voxNK4thQenXYR5bYZWxFo152EhqDAoiSA6kWDmZQ9rWCLPHCq",
  "key14": "4kqBXcHovCbeQXKA7k1jH9jwERSgxuNqqcwXGct8UPBVafhWs2Ai4s2P98K3i8DPN1kqXeFAPoLVtnSQNXK1WzdE",
  "key15": "49N2ehDKPadcA6sxwqMpfSwYUMGDRRkkhsx8UYXDG4P22E6WkGJ67X3KVJixUdFxbvFUXfhxE45tofRnaEsCsaQP",
  "key16": "3UbMQGg3xuFu57kJiXP74MdnH3nf1owAgmBHp1qUatAZDsfJ1RrKcZyLBmqC4bzTpSwSRx1qHQpEEZUdCJpX4wBn",
  "key17": "5wDv6aobGwVjvpgbtmZrUW9cnTJVDdCjAj1JJRj6QrCUCD85hDrreURgWzvDVzbLnT9TaiY6opE7S72eE4ize3Z8",
  "key18": "67ToJH9B4ThNc6UFDh3WW8aKNdKsd6WEAxJBHUZHfRKmVWFBDSr2fcYg6yjRyM4JX35U3EmkQqgZTvJTKXpZ2XET",
  "key19": "3DiS3e5XdoJS5q6u64uAL1q7Gv9Esxgv3oJ57Jg3FDnaekFpz59CnzbbrQ4moaZRxoEkMgTcaAFUg4BND48NAafi",
  "key20": "5xgNpVf1M58VfBDSU24X8Verxkegd8KoasqAQbRhqAfGGn8pP8CRarEyS6xEEv6uFPvLzQSahFG37XgFmaHQXJgj",
  "key21": "4ueAgKGbb9n8CzSThJGYq1toMxiTmtAxyBwXs9ZQN2wKrbxZB1mVjmxQdkHNsa45QpGsWWU8PCgp7opLCUnmQcTC",
  "key22": "3MzSRmW2gDihstsiNHEZ29EguSGvRgeFo3Qxx384z4y9tdR1kPTBNRos8j1z5D5j3im13BGj3yt4p9CEinqav54m",
  "key23": "4m4Fd87mRCRgH8XumY9eEqaTAmXpMqmQrihyK87FRGoZiMkMrBp6vvNwYxenjUnsqBWK6Fj5Q1ChTuH8ay9PVREy",
  "key24": "5U7dY4RZZeTuLtCyawVfAQcxs2gdgkm3VnWAbF9uPTdtXSjVexfT2599HGJds9SJzf1KJFcjKmGNMeezXePEUozg",
  "key25": "65F1JytEnoWXJyqFzueTUR79nas4f3D2c35XQWMe5LPwD2vdRGF5YBSGgmDkjVEiQLDiUityGdQyJHm7GSDx8dLy",
  "key26": "3cQfkQd4FHqMv2FbGxAHrFgTVXkVZ8unQpWiqt6Wq8vkt7mrnW2PCitMuVCDVWHQaHYRUBMwW6RwSeHftUyrvpKG",
  "key27": "35YwFGSgCoYs7GEmXUCJ9M7b2fn49AidsVA9agVJfRmJpvzrNAwww4KBaCxESBVmMRhy1YsLvVpdbcFjSqQ9CCvw",
  "key28": "3ympF9KKz52t9aXCrtfDn2vvqRCRWa9n6PwszKfydjTy1WRQA246hB7BAiwQzv4To88uU9j4pXJxopKRupHZduba",
  "key29": "49cP9DygmkyFT1Q6XxsUK4Yn7ydDTkMzRpKZx6RoDkHVMriEPCVPFujcKyAkkugUTtp2t5SyPKBTW7P9JNBzuDU3",
  "key30": "4qorWyQXtAkTkp5GXghJAy8iDqAXWZVg2YFDo9AzwRb6EQapvgprShpbsAVsiFH4fgHE2As7WHGx4LoKcEpAnmU6",
  "key31": "43gC7y51G8RmdpK5XD3CFA5odYmHJfxr4jSGShFL322xAw6jdgMcK19nG12eCTAMD4PzBW8vt9TRCbr2BkZx2WHy",
  "key32": "kZKwnqpTeLbxh9Q3oTKnnq4gYdiVrBG4o9N87ifxE3Xr7FALnDTpiVYxiEBVuccyhQPyc41cqPjtkCTR2vhr9dV",
  "key33": "37d5vTwfrhbWtSCDPMJpnHZqNmqLwqrY4WS38SeeTQbQxYzFrC1vw1m4uUorA6qm6Z99dro4kAv1vyYyrr4cTRAv",
  "key34": "2qJU7reVQoMjWBjMvrpcm5GTi4ip5p7KjX49CCyFCZYNVgvQGhXLeZUxr2khS7W4eHNofkHV58KZsXRbvEb81BCU",
  "key35": "5jqD7bH3oarrpAxQf3kV33xpwNpVfvhqyE1vTRLPWCTAwVdb2HUeQ3WmSuC7aRu7gxLFtFWwH5eqpRPrhBi7TR3v",
  "key36": "4m9pFn7ML5SrWr7fZY7m4XMmmNuaSNnsh9FHGXYc9D9qBDv6RJ6KMJim53m6LmHp8jYon5ey8Mvhx1h82B3DXVDK",
  "key37": "3qPCajTzNxZ1vLrzHccfRZRiT9YZcdwyLoGeJ8pogACxXwJ7mEqqWEai4oQTNdnw2pU6LvSz7jm5xnE7eV2vcKsE",
  "key38": "5ayXJZRH6KZiL7uZdhAfQiYk7KD7oNt38ona18MR8rsLJBsmBfgZEqrs6DHJJHNPEhj1xjQZvVxcH476euYs1ZGo",
  "key39": "4Awts8QDnxFXnoXrJM79vdTuBPB1nTpxt1bHqjETT3mBsS6WF6D6GmAQQGHayTzLk7LUvDfkfunHsZG9K4kTziWi",
  "key40": "3vjQE2dhPxBthzLXbmBaPXFYnzxSpBHfkjpZaYrxiJk291JxLhB8yswkDg6uRBAvTFQUFeAhPZxAKunf76254Ld2",
  "key41": "4QBEL8nRA9gasAPJvgMpWc1iKGjZuSwFjsFDcRcrbfnD5X2sA5PzPBT8zajTLhgVAZLfRQacwXhEisbaLjJkoBcq",
  "key42": "2UQgH5BoJ3Ug4LNCew7dKtxufAoXEmAPXccvb35RfY25et2saaSTCpFapB2YbVjCY8KenTgDmpPw2trcBEAGPh7j"
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
