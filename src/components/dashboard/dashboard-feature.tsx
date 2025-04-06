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
    "559BBGgd2CAdDH3jTzHoJPc8gv8Ex1UHycfCowzU7ByEMsfxjpfMnCi5YfGkdo15UNJHJKcyrd6aFfrPeFaJfJUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SuZTce59GrVSPKUvXmKyFW2v8Yt1Vgj18pAs9eGJXXeg5Ree1TLg6vG2nfWUyxBwTWfT4LHdXJWkgCJtwHYvnfx",
  "key1": "3n4vAiZFV656Wvf2UdqqbYdQUvXJDR3NA8Wa87PoeWyJAT1xKtiaycKqPjQxyGbS3F4TrDtNALGYPyL7Q7Sr8ciw",
  "key2": "52t6YbbZKLQfn5qnirX1cPgTsBmouFjtkJAqs1wm6df1wVRFhtYWo8ust4CiU4W5hFMRAJvSacdYYfoXPi9rcaLe",
  "key3": "31i84wc4X14JfHRhKvQyt5Ld5z94zkdHGGLPzd1oZndjPvoqiCab4Rj5PYVEaSR1DjXTTiJnnsJ8BwDmmMAdGt9s",
  "key4": "5kg2RG7tKGY8JXtSmiQRgqvk2y7UP4XpoRrtLdoCTHxtbMC9Zha314tGLZdPTCxeeoz19ymM8RUeEPzEW2RQkSSj",
  "key5": "2cesMmcVRjbmMDcwbYnUGUty1NFbEerxvq2CLBxk4nLyYuXTPSRbFYY7kuT9Bn6MJp7shPgmwGyAwFbDXFg6p4p5",
  "key6": "pEBaWFSiS7DqD8qzxwgTM6ygphqCvTQiL581JSNhawhCEvPzJ8yTZprTXNKztSHGsXo7me9PRW6rz9Uiz67gNgt",
  "key7": "4V2jZebn6cCnbmmckREAR2PA58FXNzZaQYoG1jyX13QzkPE5nRFkUryv5ZZry574CW67sNuom9xa1PpTV96Xv3DM",
  "key8": "49wrjLHvNbRyTAT8Dei1d5MhTBJxurSMr3uVgdSfeN9ksZGpQyVQJNCzzS79CgkWs7RChniMThcUB6D8Y1tmnsdS",
  "key9": "3PWN5AnXrqwEtxF6ECjW7R5FXA2RMFUa3vVv5VuBSk8J8HVcjSyZ7RsExZyjkQDPaB496uP4jioBKj73mVDFBXx8",
  "key10": "ohYg7zhHV8xeS9a3rvTSd9YJZBtEpkhr7fXv9GAbbTJDkuShaR9BiEXnHyihGbkjhNcf5W2pbqn6twUNPZo6GGt",
  "key11": "124ddSvrBcPSreyBbUNqv74dNVEJH3oAKVa33j46rdGBUzappJTYsRf3NiPSbX46PvQhUeNDXqBKrFJaJ6Q2zSV9",
  "key12": "2E5d7VFmX62uqfnFeTrAA9yr7tzwAyJTKJ5PPm1d5gQtqPLraVX1dTLDx5yLxD9DDHWgNTsiLfbtMiZHkuai7opW",
  "key13": "4YNRXLedwrJLMvCv3CVHPCvXGk2nqP8xhak95HBxmhMxcLH8ZU73RTXqozEMLWkuWT1BEYkyK18j5aD9fmzAf5Nd",
  "key14": "4YmiTcCpFiBiuf2mqLttU8Hxy67xJuJJFr3tvPHM3vtPc7d4nQzMcVw4oNWvT1SNucefpY98mNgPY2iTmJKPHot3",
  "key15": "2jxqzM6Bm3g2YvWHDxFJVhZDZxjr1nxFQunYRNeMYfmmGbZg58hxtyUXRchDZzctmfENEo37r4D1fawEin4LAsuM",
  "key16": "4fZAnfLJVrbaKDJueQuS37ofHDdmVJWk79PYeMmGCFBiXqWtR6ymuHfAHQHPr7tv2NxVgp6TREBQgm3YHiRxPqcW",
  "key17": "5DNheEsoFrZoKvHVbMW9BycAjrBbtn56LjduRFt95VGJTdqHPR3Jg9VDkC7aQ2yfhVmWj6JCxuTXAeLp3RKJ4YM5",
  "key18": "3aZG2VdYDyACQQk3bs4Ty87qkYave6jFhLV16U165aBLoAh9dARgmEKoA5t3ds7dKg9ZraKeSNKrhbntPpRXsqbK",
  "key19": "2YHeXWgnX6bhYyQPiYKoya2CyPrWa5xbXBU94FTN7xaBMETNo3AuLQAHGdfD6F5bUY5EHHqhGx17UcauJ3PAoBuU",
  "key20": "44PLbzhizZsgA8mofZAxxz1wi3susuAQGWQ6rRVtTAvQLtZx5pTzajARAj6G6Zo1LmNFoymyiK6QFM7qYu1kWTA6",
  "key21": "3CpFzMeQxEvvdMAfFZCYyGH98acYLZ4F9A3uyM6M32bom1r1h1u4zW4CnsbNSKxbq6mfRxyXB1NdPK7ZGsTUdaTA",
  "key22": "28DcqmRU8J3oj1a4R42arWwaYQgxcQvRcD1Bnxy3F22hsRdLRFuN2a5fbMbD5EHZYsY6phou2fe4QtNUGYTZ52LA",
  "key23": "2LjfYUGwe1z4KZMp8NU1rh5jpPQzV6ZEon4hKEeEDmdvwtBpQocdVCW6QKaHhwfZSAdEB5qAE8u5vRMuAYo83qwK",
  "key24": "23pxK96ogML765NQFerA85tr3byE4yKCNRxHWYwEGLQeYgo12bymtySQi6RxtnbhRREoADgGS3GU6UHvNqtfFety",
  "key25": "5DyXhDJbnEjqR5MCWHYigfXs5Cd6MS3BvJDv9JF9T9qYHiY7jiRGUJzibjXAA5dfGTkt2BLG5uu1uj8s2769fPQg",
  "key26": "4tA22xkBQLEdJZ1TUUz5iaWAhbhchaEDy87G4gh9KpE2prP45nVmpWHecYpM4d2AthFWKASpiwp1tH36KSyLae8J",
  "key27": "SsDW9Y834NTtcyaTaYtrX1yyVHgrsrjjsxtb4KntNFuXC4QZYJU5oueeChz1sUyFuF2ZbGEqvxyWpzpiKSoaUvV",
  "key28": "2S1tfEeoftCxD37SEWi9XjSHiHyPxyJm4gz3hYQg26d1Ug9VgryPWK2QuP9W18sUpm5YTjNYNnesR9MAoSr4GrMV",
  "key29": "4pEoBcH5VvQDbjtsMTbiGAedPf3FieS93oHLgz6kpFUthPw4Crw5QjN1r36tMC2cgw5G696pfX2uzBJVbp6HZ4Mt",
  "key30": "5qhR4RGW4mDKUfMk3hXX9LCVRJXxumJswzsP7VJpZ7DQQn2fwghbqcaLV8xb7AED4oVdGgy8Kh72MRnfpPSD7G9Z",
  "key31": "3fMcBZvQ4MX1KsFFtKKnr6eBjHMxSRvMD4WrVduF2NHiYcPJzPDn1Win2L841syiTnYBKQaV82ziWwVVAtgbncNt",
  "key32": "2PqpprAnsoXTU4DwjhdyoLqu4hrLAJEtb7Qp25umhbs8xPFeAq6CfUY438okziPXEwJE4uqy4x9t51XG8kcp3yqx",
  "key33": "55kBsfB3EcpdgfW39nAJenuwdtKvTdD8YPuvi4QwnEZ8U6cr9uc3cuxNythJzV7d2bvw5rzbBoanFKK23C5VwiWL",
  "key34": "4HSv3eWeLh317jh13JP71NUKJpa7jABGndK4dNri6cQ2UzfopDMoA8VmfuVudUV6NMCY8vrWbsb6cLdtmatQ5AL9",
  "key35": "36SkpGzrw37cccyuzp2n7rga3acbQCsnrD9BzyuYknhSVVHo9iYgcV2zecTtTjX2edQvUcJK4gbjmuf3f4jG5WoU",
  "key36": "32wWTwN3V2rVFE6AzcQn6WKpzFnKDNusG8U868pXdRLM4b6MxhyzFeaCFq6zm2EJnH3UXcy56Cy6aVZUNDFKcaBe",
  "key37": "5DAr9odjX7zurh8yKVQy8G2DzVVDGwuV9L2C26SAhRe8orvo5g37UYkwRC9jkzTPF7LKEtZJuK6odbJaEkSjePii",
  "key38": "2SLhk7r21YqV1jiZLX3zvcEJo7UbG4kw3FLNhvdKiJLzJ3aJa8sjf3P6bQdu3gV7pmBtjiGciRpEX2ji5jUL8rR7",
  "key39": "2EmYVxfDBdJJcrKLtm6MCMNKjruzka4wRyVZAs4ffrMmNsU8R53HWSU6oguocA8bSsS4G5Utbxae6EC6sw7GvySz",
  "key40": "5UrxygFG6GwSXzKBM8M1ynJDWq3HvWsz2wBEc4MciCazQpySW2Dn1D2CPwxMLUdSs6KWAvwXPrU1xYxzXUy5FjpA",
  "key41": "3faEUzHvkM3QNfoYJV3PRLz4bkDGCL85Unzu1znsPwMQcbZPzrBts1ShLforuY2Dc7iGGbvQD9pyBLR3MmqWBzjE",
  "key42": "25YY68c4rBbTMj711zJNS6vnDekrwiHrCxwzzSj69nfmn4YJUPYyXEnY63WouwWKiadSPQfxXRfw65pedy2PRXxT",
  "key43": "5d2bitzpLVNKw762rHWKfZ4r6uhomhdtp3hMmmukpANu3ppq3jizg3PfZjozEm2dXJmXYrS483S3HNN1egGSzqir",
  "key44": "24Xqns8rBgnwX88CPMbRpfaW2APNibMkmQ1Q1oyjaBUSgrWTrt6bTquWj2txgiGxuQq22Q3j1FdQKVpJyF92R34f",
  "key45": "3A6KCMDVfuEyeJpVzPzHfF8Js2D6Kz1gxFu8U6W3GPu2SBkQ9Wz7QrYE7Z7XJc7Pom1XGeu4m9Mk9BoFgTvYjuFs",
  "key46": "4ze7kkXEzV7txUDL7GcGGYVoiMHFd3rgnwzEmCPCgo4ZdTPt3azhgJqi4W6y8Mkh9ajACrcqF9QQFg7u4gWdNEVY",
  "key47": "5xbjGzXBY1sx2cieshQssbS8P6s5q3a7wXQPa4ZjjBjXezhwcYrLFkkg975JpggXbCWti2yJ9uDZQEtG6pG54M3b",
  "key48": "5CuodhP9uEY1XzhQCehPckMC7GXUuNmNb6aicv74maGgqCZqmuYe8ck2JVN8Vc9aEKKixQBs4M1cmkPLSYeCGc2f",
  "key49": "2necAQEdbsYKvK9ZBirAgHzqWapxM1YJ9HYYvyz7JwDuZgF6TcL5Jh8sXWfqjqWYbdEQuNgmN1pgdPNTBuj81YYS"
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
