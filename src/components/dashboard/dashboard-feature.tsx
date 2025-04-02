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
    "2G8XUuhKzKNgLrFXYdq9SggLfmgByn4UgAmnziL5vqMv8779dDt2cJYdnDtwa4wA3YqDnbYsg81W2k7D1hEgpoWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vptKQJm8XqWVfdQZEXqwcLNHqic94GxtHhvfMjpdmoTs2qoiy11JiSnAewzDyc1oxdH6pnUecYPHmwBHMRbiepA",
  "key1": "22NmYN3xk8MQCDQWLzDJL2juLgKJxhYawxwapJkg8FVm2v8GvxnmvbsuRW1AMQSSCXP4ogZT6LTA9n9ruuvTdSxA",
  "key2": "3zfrgvMoCHHDGRj3DHAzQfKZ7354tHqv7Y72mAtfsKbAcNASN9bgQCnJUuExKcjwALFFb6FUCKduT5XVtEeMhZzT",
  "key3": "2h4mAoTurzP71UsbLqZnVqGcuCZJ1nN3q2Y5DU98JhwPiFPsKwzCuZm4m4bENXRu4gp6zrmjMHj9pE4ACvZhc14c",
  "key4": "2TpYJkY7VvEBLgYtYjqTBx8iqcGVjzmu3TVxdR7rzzxyR9ME63Qn4Pst1iKgE3tWgAJYwrW1JkLkmiciXiaW5qP3",
  "key5": "5ccUnsQE66mX3g4fNg1x4p6HGGfxS9C4fwr2DpZMPw4k52hPhbczXgCLoairtekjEZ46uLMw4SCa7NdP3nDhFEE",
  "key6": "3hc7j3eVGA8DmULDjZTfPfJNRDzCuMhnD3vozHitjjzy5VdDJfa9kqGpudnCjGimsaY38fYnhZkctcSR7BQdWVq7",
  "key7": "5acd92MMWvHp4dUzrVoGzZXAu9g7avmGhd6Qp921VeuJHkvLmp3cmzWwdYKPJnUYvrTWeWcVSeMP9KMG5U6hAk8D",
  "key8": "2EabfjqPDj7pUjqSVA3DGRqrvTnDywBWXi2rsdfTGS8d4YGdT9LfWHTVJgCTLb7ysZEdwd1ZpEkDm2ZJtgBZFZVe",
  "key9": "67gL7FDU4rewyonw7dAeqUWewaS6boPdNhcgYFBMFAzyQZ2cmEXnisifbHk11c51gMnfP29exq2vd8vdYgDkARYd",
  "key10": "4HQ8AbfWNTqUvVaTNf2ToRckNi2szmaNgcbdCDHXLGWTqt5hcMCQ1eWbdaB8MsZEnn3sLCqpZSx4Nro7STGABKuL",
  "key11": "3CHswp2f6NuSHSA5K1JqUVUJYcu69bCQS4vDdcSqdMG9KHadDPjQVsPLMb6vCctuEtrjKJB6H4ggHjQTqn62w6FU",
  "key12": "7LRbdsEmEvmCSWea6NMygQZnCcygMdRx1pXhkHy7MvzpR4wX1Xah2u7Gc9zMSFuP42W4VuKTWvrqD8echcj7gtA",
  "key13": "2SKbonQyPT4ucDQvVXFyvB93fM5RSPmBacaGjLvJHwgTTxgPAKQSP1BP8q5ZJLutn6vUmTLVpFgvE7EEBG3LiQ8J",
  "key14": "4kWBmb68y67QKYXXaqEuhfgjVRuxhzJ5rsGsC5oDKrzz6LDcC1rq9qgGubx4RfzQFNJBcvWjE29ZQwnTuweQXSid",
  "key15": "4JDR1XHnWsUwNsneBiEUSoondEDNXT3Tw3tcsK6syvH7RTkjM4kCM2WRfRpndc7bqh5Atm8Yem2L54w88TB8FZZH",
  "key16": "4eVCQvW6Va2HEtjE1j82Ytc7hWxHWXXbMHZ6kpq3JRSqZ9HBqgc6z6wwdj3XcH1z25GUwG2JjmBaCeqnE1ykyo59",
  "key17": "2jchrKDByLnj7fmEJ8GMTb2EKaCxGzxTzNtv1RcGi64or34HMBMaUveVoLd6PMxv5adMx5xa6WtshLpdjv92vAoF",
  "key18": "2k65pNbK6YAB76Vn3vXi29WHJTxwgM69eerrKdgL7RwBfw3Wbmef1hYAMyvPjxQAGuJwqdRMQC4QKXrneRNpRpTy",
  "key19": "3dvhiQ4ZhZjZAgjUCvyuAR9CxZnwwazXyxZERkMAEgTQYSo1rmE8XjhRX8yZ3JiTw53T3aFq8Y2JGeKiFuPiMJy",
  "key20": "3P2MpwKbkkd1BRzqrsx6CaqcR5PQWTSnV7zZduJwu7E4utm9L1unZD5zm8iCH7z15wzKi3YdLf871ThZtXfV6QXu",
  "key21": "oMo2dtcoXDSqyCqJp4DagmJEPFPsZDabA2xK8qSzuZHJuwh5pEQuQnYxrVoiZVYmNxk2K6urUmj2V4uFrxivyh5",
  "key22": "HBYGrEfA3b7CHbwB9TBPaN3ojLSCUttwgjzNsAjr55EBa4eU8evF5a4XFPXvkP4AZbZxfBL1ENDcJvAn1yKtoXb",
  "key23": "wkLKzRRqmtMPSV3B1Emj7DHUsWfEVU7KREixL6w5HBYc5k9jNpNgxN1e1HhD5m9hCVa445iFdUuwtZHeNHPv63i",
  "key24": "4SNC3jxtHbZK1iE5ziTCEN8uoZp1AbKAq9XoYFVhRR1pB1YXNPfcgAL1ywEy44Gy4exY5w5MzdjaN9tbdgjgwaYG",
  "key25": "3s8d3fz9RnH9dnKM3rM2D9oCiYytAVxjxwW4zApYjXnz6jEGXPDn2U1vXNJDmR4RRqw2RouvooedYRZoMn8qwGje",
  "key26": "3SWfaH3eBBteJNBUUBh2rjJkyoTXCpmTbmhmXVrZWagWjoYRhXd1bbchEo1GeoQJp8QGA3FdMudnoWAw94smmJzk",
  "key27": "4L5mRmLXBqqWFuLKeeT6m5VkE2ZYiFyy8sPk2UABPtBSur3uEPHDSiSkaxGdqpj4hR7o3HYZTQvikxUsBf59BGgp",
  "key28": "448sgkMkDkvUGizvJHtoU9xjZQAN43iFPwoEKeqqc5w3Jg5hbKTyAiwG8XSL1fASvyAvQn4M5fTBnzun2eF82QyH",
  "key29": "2ZkzyDJksMAL8kPaoFGLK5vPHD8Gv5UVJnH9sW2YvfdMcCwCLqa678bLxkpMZjxjuQX5HhRnQfeN2X2tftkaqLnx",
  "key30": "3QC79gz1w4Q293qJPuaWg1T63qypySZRvKBdMQU4MyqcdkrVwjifo2Q69hGNkvyoXP7vBoZt6YxELEbceni6tq7H",
  "key31": "5sox3oVJeptKDR442236g8CrtcCKFFySfcr7p9FkJ5wqy9Lq6hgw55WF1U8CSm9ZXhmxERYhNeDuwetpvQgDqLZb",
  "key32": "5XsXw1KLEBFoHADzmCXJV1bLKae2XJwA4fGCW2iVdG4NVxzqgrgCKq9Roaiz4aKfAPghUEJG5HNk7Xa7h2GvGsCy",
  "key33": "4x8bTkaRuDr5niceoxkHrcVgKin6HY4r2z3krsEQGm1MoZwq7Ej1NLHEfn4Ebreec6YgfjzP13UMBwcRqxC4y3Yx",
  "key34": "4UpKAbiUN3WU2iWQ2nH5THyT28vBVVoVqNokRevG25QWXYY2hcCL4VMceLZQ41S8TejgwLZzhiG8htqoWbbEwhwp",
  "key35": "Kke38qWwQN9ncKJMihmr7FtGbBKvuLkCzPuWNJVtQtzxMkWPQVerqNvSLKTxgu6rCM8PQ2svqAhk3Z4Z6bnrVC3",
  "key36": "3ivBtvufepGoT5jgKvWA7MzppeRA1HXYViVweDwqQLFjAibU7naQYotgxWNpszhAZ6x5PUMoShZev4TKAXGL386h",
  "key37": "37SXPPQSSM8FycXnxxKW8YDSv4nZktDz72VmfxVJCUomRMGL2YSC4UcWbwqBy3sZX5HoXSsgzh3AMag41b2uTE1N",
  "key38": "5SZCNcP4RXz8kt13TudWg8h4kcFXbW12Ca2t1Kni7xBJDFiJkau3ewhMGJkjwsrbPNJ6MDdXLTxbi2WKcWiTrBwb"
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
