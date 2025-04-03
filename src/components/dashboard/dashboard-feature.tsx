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
    "2VRzWa4owQnrPP314hCVaJjrfxyR8v81tmQGHrQB52JF7XFKaCC6iFkn4Q1gbRxFD68q5BfHq2FiMaePcPcZfg5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QzSg81mCLU6RqGiVYThCWhniowEwPKAJHy1cGCvc4RGDjpJ5K3yKN4FowvwhySLYNHrS7wUFeUu4hhcprpLiVDL",
  "key1": "2a2LZoQAZZoxh1gz1h4ZebqA5pQZsSDNxaXat3WDyKCyXCuJ6VTXjRUHxSbdue712BAHaXMpzyGY7m2LoBzcNE2z",
  "key2": "6EDD2yWcY77Ca8heUp8P4TGR7J7vweGkbZV7gsYcKxDEeBFTgsibAJaegLqvAnknLkbK7XdvkwTRD31rT3kSnTz",
  "key3": "25pfihrNMFnRMS4qUip69iPQP57f8U2XiW7Xefd6B8o6yQeu2kv4gkP5pApCnJjYtvouYfRvyjrMPHEXSkyQfRrr",
  "key4": "28RdXCjwkEEzs4pKK6B1wcL5fWGDxmkLCoU7vWM8QnjFdaq8sani27mvdPe6vSadntQJxHyyRgQYuBy9wwFDRSR8",
  "key5": "3hZEL9HQVM5TSW72wNz4dYwyPkECNJMXz7TdLkX3LgMn6rXNG24ahs6mScnT6HgDs1ZmwV2gk7ssckD2mYEpxs4Z",
  "key6": "2AT43WhtRPEyYrLzuY2dehQpviM7xX3HThptmQ6o9YyfT5Nq4be77ipLebynKok4hRfqYDEcJErsqAMnkQ2xXrBv",
  "key7": "3gJQ2H7YP9W9XxPVnUBQh8CHMV77eGffrBKUCazy1A4kdtKU6z9L1CdsjPMgZmv5L1BW5LZ85KUWh34y1RNLJxFt",
  "key8": "LRV9SnvamZ2nT4dQcCqDeLdyviq9n1JdqaaW5wt5KPRMcJjPMuRPV5roB7Vhk7qY7LJiiGZc1tNd46ed3ohsAjY",
  "key9": "5YzAf9zg473ycSEn1vnYD9va2MoCNTCM57xRehnnHAERNz7m5R8dDgobLREB8eaypbD3iJhaXv676AUSL9aVM9rk",
  "key10": "4h38BQJQ3yfpnKgRW7ynvjEepyXjbCxiki4i4HBLWmKpbX3DkeTH3NAEApaNEgShhpUw49iLdaGuKaruMEZVSKYu",
  "key11": "2thVQ2hekc5x3x3uPvnd2nquL56KAk9jvaFrBKgdnebMQs7sd7n5jMw9zcwQnGqgUG523xxvvJEQR8eRr9vhHEbT",
  "key12": "5mb87GUBq2neby3YfVsj5dtPYtNoMFGaUH8WygFCPN3FHmY59YRqKufaB8oTYf6z788gZcCdDc9kfotHDLE4DVQA",
  "key13": "2iVQL3hJgUAkaxugsSP5GXYpXdMs8eendvgbB8cAmGZA9b9oo1BuhEyN6x774KvtqgSPZsvCW8WdCdVXGzNr7c5t",
  "key14": "3R5fT4rPzdkejWVXpYfM8W96pmguwdyz4T6BZddMZreoMWfmBb7iWVS5QLQzuzUT5kCqTez6GP3GKjczVAcDb2fe",
  "key15": "3VCWPwyx7DBPxgbhXYS1vQaukip4r56x1sS4ytACcuczir4X77F1MuvubLED7QJ2JJVr2RV9fbjZMFQZSvaJRu3j",
  "key16": "2S6GNWzxQAV21heShoSPpDXzxcvR3XYaigFasKJQBkidTGpafnJYufgr6m7ak3ZSFM1NoL4jpKfXj8vjFfEZzj7X",
  "key17": "2ZekwjvoPv8umB3N5Rpux2B2CjixAnbZgb2umfYUJ87qMoPbRc9s3qcy1oKaaQfJAmACC4nBufHyGrpo45dHovxc",
  "key18": "4rHYggPZX4E2ycxaprF6fKTLt9K9MXMMQoks7N7GmeW54Wia9ABzSDtLAdhx6V6jKUBvNqVnUJnRiADWK87iUvTZ",
  "key19": "67bUAxNhZDGWSJQf5no5WotCcA2iqFx5oCbaYrvteJRoHsi5N7bUCda67GspNgswaghRcKHZjzGxr7zFGPQrBYjc",
  "key20": "2CjVQJmXCzcpcu76Dzsbj3jaAMJXLDha1KrMj4ZnbyEscGu1KQGRqX6BPfnAYWZ85sMnfvSDsdiEiWmKdiC8UURF",
  "key21": "38LSTF52NxoU5NxKJqyj2E7AR9wbz4AvTDy4T6SNUPx7LTTS6i1qjt4KdHfiMVJnEPJNAwiHESn9gC3J9ELKKGGe",
  "key22": "3govgyKuaogpajh7uubf3kpnUyUBMXwGNUq8Zf69kgNF1XNm4vN6TRDMbEAMkB2VCV1X3nEH8HrHGd6kxk23S32g",
  "key23": "giNchGHhfYsfvNPmCJeGgfJMWvApKWb2oMvedKiwUSuAoVbRdfu1cpPQaixZxRtyP1L1wZbQLCQ7TJzVFBittAH",
  "key24": "RqK5KextLrVhkwi4mdgtfp3hQ2bgTGmCGKBceRkYVFesppAwqXDf7F6ivnhKvuUPgcKjFqqXL1Py35y3T3bvufk",
  "key25": "8UvNk7EWK8yshxFPZXrW7eagHpWhfH89cgi1MPA5N8GvnixcgrEqe6vbuxDfyyyzkUSg5JdnCqHzaiyuQq4HCRx",
  "key26": "3u6eUGHfLmdbe5wb5Hbbef8TshzvPx65giYSb5sGEcSbBQM59xYAJHAR6zYVMTXNgPNxkESoTVD6N22RMtywp2Zx",
  "key27": "3N3ADPcr7YaAtPoqMB9Kyyb1Wq8GW5SJAESwnJNLSeRd6eAorQiEMGWHP34pFzVBbCSLDJiXJyLTDhX8wXyAkzb6",
  "key28": "UXHUFca43t61PpcYcEgqc5zTLD8c44QtoS4hfjLZyq28eJ5XgtCRsZnGxPBr848CES1ZTa7VrCsoK1pwDe94MvG",
  "key29": "5VqZivqj7UzhtMSYT1pLcD4fMdaBQ7LmvVKCGyoWzqdpK5SfvwTMYLfxqvXw9MEcjgLXkrzhmSvtZWZxQQt7Yxn3",
  "key30": "rYxgdGeSLErFg5dM7mdm8ZGGDPcomeyjqinL2zpAaRx1Dz8d38SgmQrpidnuzT9Xnq89PoUAdAUqsq1LAC955vT",
  "key31": "m7EXmp34WJkueZ87GXnjRktXQkRC4fwkFjVc1gkZHDVNPtV1hyvai8P44H1tSdmMJn2aZ9HVyKW88skTKmKk5Ti",
  "key32": "JeVED3mVsWSBAagDpiZkVQQBf1Nfz5hhdgSUX8yznTaA3D1pbF4KL5sPLPNqCePnYRaBxgYhE1dzTgdJvhJAmrU",
  "key33": "5qPFk3zmhNLVEYR1XsTPMZm3zMovnLgWXmUxpBYmHNG8vVZjB8RHyCgyitsTm2YuCueaGpi4AzAen5XmLn14iVd3",
  "key34": "2dsnjA2WAjQdog3M96iv44k9ao8P3fm54ydVbgxVYo3iHjQPCdzDaq6XwDL7XM3dBojuftdmgZx6Wnyfvh51i8fE",
  "key35": "2dc8NysdVc3iDpsXmyqJYoubLCASwVhNnqjCML2wR84vwi2uMj6gugDpQXu6C7Mq7gK6YKs4V36X2jW3ZMkqpWE2",
  "key36": "23T26b85n3GxE5P8HaWkyC3LK7MEaTSHo91VXkDDCrvkWKncT5EUjWXs78RW9yWRDuQgodrVX3pGnGeGZmVnW6kL",
  "key37": "3XcsPu4Jm6NL2ndgU8DACm4J4MN5jHAgdBtEd9j5jW4QcCkUugcmKU66Wv14Fx5hf235kiToxUaDf1bp77veEWG9",
  "key38": "36v1aGJQpcSoY99CfcfUJTEUg3mniuocn1u9zGM2SoMEBEUhEyNJqSSkZMUcsj7FYBe534vSUNDQbAm1RRWE4fRe",
  "key39": "48ft5kTNUxVS9urtwXBR2AJkM3gur8ibZz3Vwb3v2sKqM6HQodPrMb8tNH2g4WMAwiZUrD3yGWUmASdanC61XJHo",
  "key40": "2j45qcM1mCmFdgh6L68EuVEuuoCXXDZyAyNfvyuRgWVdkmmp549JnYejqxrLknNx9sQJBqbpHvhyPEgAhxHgVuSr",
  "key41": "3rjhd6mDFrnyRc9BKZNZa1JDUYVCZ9w6QdxtK2NdRFW5pWTqM7pVfN3vEVfAjo6DjHjBKjd8FBbst9HyBrPUzYmr",
  "key42": "CuoE6G1UFZGwyM5UP1pA3U4gVVnzY5PusPzNu4fwdvWYjwqbGzidxEwovVLxGsY3LPoTohD5qUHfDeSzP6cVUGx",
  "key43": "xWKpA8Brh8wq22GcpksHK4kg9aSFsjc2QL96w743QJc4aN2RGKDJAdFxVPhYKuYRU1hNo1WQQnyDJVdfQGiwnRE",
  "key44": "28e4WvfvKxXdqsNpowoSpLofVVUsM4BgxyGcPu1K629ARBnx8AsUoLAaovzGzThDp6wY8pKXWsnLunC5Fh4TjSq6",
  "key45": "5q98259dFu8gmEbX6DLU8GusAwoymhuv1E5KKKiCjM26ocQJwayemMvLitEgCfQ9A8StBc477DZhvH8Loqs9HQeA",
  "key46": "3WQU5pKBCsMPS8UBU6JEfCKSewAAiyd2segeLib83398mQpvb1LVtco1XMR88pqSg29cvMfPzzYT1NoakFwtiJCB"
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
