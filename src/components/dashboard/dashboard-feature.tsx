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
    "aiqMdnyhpm3B8TxwgZgYXoV5kGhVPS5mtZMKn78mgHdpR1uEKNGTEHzWPSsJTwr2pCYJeu67bqV5uv3Yt5ubcB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6hDb5uxyBajnZP7HMiMryPZAAAvz6xHKRPJM4i2vh5p5kfhD5kkDCGo14sdzbt2NZYyqAQmY32M3o5uhWUGWaE",
  "key1": "4ey2yHK8pcFKRM2fy8SLSuWVbNSuSpYPC2WP6UtJGxEc2bTgHpR5CYcJ5WHnyp2KSavwzmaQ46tNWPMesukVsxN",
  "key2": "VRVWfCbFvx5naP2gV1LyUGMcbZ7f3WWQnkU3YRXmMFviYeKTQGXs82CnkKrZ52SNTkSCUWghEFFY8N4NxUU65ti",
  "key3": "2wy1gWmXHs429qLeHm6Q7abdKjzk5cnHbfgUUdT7fdvoRiJZXhPCJdpdBcdESMqELQ3yUeTay5xXvgVTEb1H17to",
  "key4": "3fkXH9AV3Pf3vGLF4W1Y7UoXhjWdNUet6SSYjBuFakzL78EpjP1ttBnGUXW2WfPmgV9i2KN17gZuVS2a1oNP59aT",
  "key5": "kZ67cbRLQjeSx1UN42W8MD4iAzYSuRqYHcokHjb2ikXQrZgKw1ZSC3g6pxsohm8M8YmMjGURfABEmPBzvFzM4w3",
  "key6": "5pRMRVjW1fVqBEXuksdFhFL2xDyYqL5ro7PYk5Uh5ebHT2s5VWLRuKxcAB2w933e1ijXCHQr88QJycvtvPq2xUvQ",
  "key7": "326ZUwK7yn5u6vQt6X6FHszksVmiEMZDNxGvzCiZjgnEFHNXSCeawYnkW69b88A38nNTzXVEzaVhXPU8fhNJDh4T",
  "key8": "pBokxLeMr4vFDdiXhUqh5jjQUPvE1HQtkuWe1GRRAE76cDm7Bpfv5WVk8pVvkQDidFGsKWo39AU2zEes1wcDWUV",
  "key9": "J8is6sfd6vT6R1xmZ66nXELcTtvAp35KtHViXrG6YLF2sKdE2Ff6rsiTb3P4zs6HPaKBnT5THdadR2G3WfJ4a3r",
  "key10": "2yfNQEnmMECmNPsnNA8yuofaZKSm2cxkfY3XQXc6yzo7HNu6SufEEKWFfPffEar4XD67cW4b6g8L83fmyPSWjYzY",
  "key11": "4uvgAyyTPZz6uSpBKy4wGUhKZvmRThLXPge6FboD7ocSJDJNavXWVHzY6TTUmNQZZih1NheG8gknF5DsNey3wF4d",
  "key12": "5eAfLfRSVrrz2yyhi3z3bdjDr946EJzzY4q985Lm3DxrGnDUFM1ZsZsLxYYGJJv8yaVXZdifvrFEmbrkNnFZzB5N",
  "key13": "5FPb25bisyMTbQE58JGCsffiCLxm8wo8t8AzwVd1WjG27XLMh4Q6cB2Ri4BHCYFKgmdxpb5FST7epwMUjPJqe1PA",
  "key14": "2e3uU7JUsyGFjQXXdapzwkxBuYf87ajFf5gtk7qmwptwzBtBLiNtiqGv25M6xkHUE69kpraaYChVV8b2178sckjE",
  "key15": "eDfqNmhhTV1ZqBFMXMCNDJeAEBX6svqiH9PBcZmxsZWis1cU6Lh3D7BdTxeJnkqX86M29ZrJ4pprE3oqZM9ogmy",
  "key16": "21duEenGakX57HQppPxqLMyF7eSeEzFoTRfbM4dZk7BgAJH2bp7s35SDtiWiAxFzgNJpnqQ3i21PfMHZkYtV6mpw",
  "key17": "4iwqkWmpDQfUABNiodEv8iCLyABuw73mRCcvS7LMydt8Q93fTPLAsXH4zLBxre2xQbcgTYheoKt9vzs3KAQeb23e",
  "key18": "5zkMQJMEL7qXeV2c3mLe5G2JMMcsn8F7oFJn3cLGozf9pfSHVQYFrwGyhciReFhtJTmjxmu6eqkpbJ5kJ54JMgEs",
  "key19": "5hiKijwpwJ1Bd6MQBqnL2ChiMzjuT7nxyAFYNYVZ7XZoSZ22szLEyE3Ei622StXFMqTSzSUG6V1jcoP68BAJNKic",
  "key20": "2q1UCqQhZRqSsyeK1zFJAXWYhiM6ppmDTUMmT2rgMCT9gLA4ikYXBMweSEM5LvD7gNjayxyHD8kbcHNsMiAKT2ry",
  "key21": "5VCYaRYhgh2oD9p13jDXu46puS1nUiaxyp6BqLFzphHFWyyjA2Un4Hviz3GzhxDtqGTrL2L4gnQZN2x7bY5dYabC",
  "key22": "3Bxu2ycAF5CRCLYKhgrCnwcA65qDtXSBzHzU1gV8ZKehzpfpjAfddnuuRcJZDtwt7EUgTSQomguwbwsBPH4f19Jj",
  "key23": "3YJqm95Tkm357uUHFFfpD82HymCzpJU5fuAE4PqZgEgAt1vqSiRyjwmJYrsfkNWpUSaqErbH9aaheRhW7SNnW9Zi",
  "key24": "3bB4boKRCTGYvrYb1BXPGHS9ZDTvJBbK6XKXe3GWPPSqkgrErUBMQT2xCMgMm8UDSG3viSsvHD4wcGQmXiiWon8d",
  "key25": "3XxXeKruhUL6j3gr7GSVewCk4KG2hEeER4QXgHeQUdReuzW87VEzyuf9CRJXfZYPPBCuJKE7tZwy7gfJiQB7uM9M",
  "key26": "3G4mx6Rw5q9TzYX92zvsQLGHDF6kqP76VgARSZ1xAPEy3Z8SEdGRyKHaSWP5W632DWqYoJGstsSYth6wrnDvPvZY",
  "key27": "4mWJRehYCMG6HDdBxsMGLeFaXXfEhkA9FrQ1JAyCm3Q44AFgkyeBYGQxRz9fcXjjs47R53xE2tU75tbBuH3nGQvn",
  "key28": "5Le3irX44SrTzrSPA94DiALDrNo7fWnaxeqnADz6hb7aATpQeUFdDcG87cZ5Wb9czXo3jn6FqXnQ1UVH7t34mf1M",
  "key29": "5PPP1B8eYSW3mnA7XmhkASzjveMp4rKfaXHr29dCydrYy1Bfddjm8ZftT374zjpYdMsoHexSCxpJGZcEfgqvUtM2",
  "key30": "yiPGhoyx83DMExhuSVz7KAjj6a8gAJboUyxSHSFFfQYnc1t97eg5cYnpMRDzpfmZemX9RDoCnLt1DTDS4qCyJaH",
  "key31": "3KoVmSPfACh9caAmHoWDxedfi88noTenpgs5TcAQ5jn536WatcPCm5jd3bB8SKRqFmFKSDcg7taj1ki7qkyFWyPu",
  "key32": "4944puXQH6FhM9oBEaVcMQcTTRiu3HK6BJQANK8Rxivyzp8sjRq9HkYSMEoBzusXjoBTjn5mMU6x3vUGXrpLGsP3",
  "key33": "4B2oC4Gbw1ik7YLSJP1SoNbjitNAMMw7Gj7qrqppvLcK9MGFm9eYmdEtXFqNorfgTwMUJq5k66eJPJAYqvbVnPDx",
  "key34": "5y7kXEhu83tpxrRMEn4fgsHhggj2HXpPZSo2RHb3trq4L46GPQnqMC1ESZ3anUpTw8UPpntX8dgnmxqynAfmD3Yu",
  "key35": "4fhqa8eyPt5LfhtWdQcrLi3YZRcvoJvjBbhxgKsAYhZG7vFKqqr3SUeXH9yR2PFiRav2UMDW29s5eFoJAg6fjNxz",
  "key36": "3wveVZR8iM8F8f16kmsZXi1GZ844BzpUaSDnEkahw6VAJp7dTrcM5JuJy73iU361uqXCphuoQbG1CnyyFVs14yfM",
  "key37": "T8NUSc9Vfdwe2i7jwECXCFr4Rd6iqPLxro5Z7z7eL1cKrAZeKVYJc9yvGCE3os5YWEVhviCR6qQkuLaXuP3SetV",
  "key38": "4mfDta51e8yZiKCpq4iCZr9pYtfz6zzXmGh91sLm2fmzW6PPXkHwogqQkCwNUZyMcgM3zNLvXVc8ktPj1pxdUYkX",
  "key39": "2BvrFLt4j8sQnYZhic43zWvSCAyyxSnK5BdCpMpWYj2EBfXG1VxAYvohuvMP3pFYmoutfPaeeCvF3H33MRcfCsWe",
  "key40": "39f29i8WjhDr7bw3PveeZPy6jk3dSxFRu7TR3raLFZbkkKrGaJF7VVWsRgcU892qFUCjGod8Zj3Enbx2RieJNAjP",
  "key41": "3ketXqkf9MMwxzreRMX7b4AFq3K876PGHnFB9nvcBnBRTc9Vf5B8SGgUZnvewYk16JxyM2cD8Uw4AdBZzsUjwkQt",
  "key42": "3yWt6xBqbDV37CpmbzbcUBXzpv8q8ACNgN8qqatsEdrGK4DaCXosbDA7F1mbFRE26Y7gJTQuxnWoAitTuLP7ZEgz",
  "key43": "btFzSGgZc2cbESLF1Tz6HUxE3SDiyVXpF38PL9TNviDCjS4PRJZCzxzjhK3Shb3r6tWNJGbnY7vKJQ1zPcbw4bX",
  "key44": "tKvHEbYpvAVzB21zh4b9HiMeRqWF8Nh2mHT4WGqrhJvx6nmp2CCGnyeK1h4knL4ySsd5MJPczHydAq9UeKB4Y2B",
  "key45": "ruTeQCdj8BH5hWPN6j1uDgH9CW6uEks71KFW9pGr5CqaRJHoKEW5J8J4D9NLA4yEQrQ8t1V6oviBHEhFhwsjuPt",
  "key46": "67oyHKUbpMA6NMjgCqG6ZsbjcCnZTCsKnUnCiSG4kUwLzSWj1A95NfsMwXLwv229F6VA5xjtAM3Lo5LYFy13DGYG",
  "key47": "3ejjYHzjyRYczmza86DK6KBxGUJkD7rGzBbSZfpi8Dt7myHC2NhxMztgVdvQ5c3k25jNRSEYYLDQL19RqzqJud2z",
  "key48": "2gS8tCoaTZyKnN2A7ABpNfvfEAG5UP2kfbJ4ZGdE1v7i5gTg5idTW9HZXxts9Znuu8vJc6geW5M9PfPABHnSUCtd"
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
