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
    "qkYdW55AtLZFAJbRu3LbZeRQmzdRdtJtz4guPt55tgMRAEJAMaByfbTEAzMEhJBLV3ekfViwdLf26yNrctbBGto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euBzHwqP7sVXPLi8L8UiT9MURpgsKziHM8ezFK96A6a8YitBnLhRyUyjcL2CNfAkC2ydHhW75JAKhBNPhbpwnwV",
  "key1": "5SpNmRwWpczwtswzVxof9TNMFLkHsQzXDhbEdn7ty7UPATKcXpZtrG491iyDiFxpDYXdtCXeNQ7qcX7p25fE2FRn",
  "key2": "5mT7EakUgByCUMXcSQzM5hZNZGSv5JaeafVkygpEjYYH7kJDXXdimm9v25uzNm8PU8R1VeDGTa1bxb4sQ5awF5wi",
  "key3": "tquMz5qZJwUBYF1ejxe7UQymaDDWRzUiQaAbrwGD2SiNjhBUcMmKRGRAq7DprWcezb9GyZmCBHLNffzyFLrCPLp",
  "key4": "apr2SMzoapveE8VdwUCWbPZQZXj27D5qFoJ1c8iAo7ud8eChfJtE8acD3FhpY6HNPnwU1Jx5ragELLFeqzuuoLy",
  "key5": "3WQcEihpACPnGpJ2dik3ddei7QvtANHx5WRj7oDbzyUtBXyHuxFHoxS4bMFTXCg2FHDqPHtgD2MNFZemrciDDUax",
  "key6": "3TBFsyfnAAhS3SdxB2WqTLiigH5SXLhZRndUPtyaqm93w5r12aaojKA2yjjPQZX2g4gxKVPbiAbfGP1T9PYCaBA8",
  "key7": "3myVD1qaacPV96gyKG9jfCtRCRnsgKMAV8PPfh15sjyXDbKiweUZmYjtFKi418h2oBpByfU63adz4Xm1d6ezK1ta",
  "key8": "2Ny5WHJxky35kZ2UrmciUzuQei5jddQKLeny29Ws78sS2TK22nUwLGcnEqC6Xh1cbYa3UTsCbSheq6T4pAsKecEU",
  "key9": "2kr5uDRENNXHcd9r7LRv4e5pxwjGE9gPUMfRBth7Yw9AwHbZ3FCHyF3LNgrPs13bHadri5mRLNk73AEXTBAs1AuU",
  "key10": "JVHANeSx5R5xYXRQpfF6GrR7AS1AU1Qsb8K6SWS8FNUuiiM2sqmScrgb4pyn3M57RWQMkvj4ZruVYNwgKC8HD1n",
  "key11": "GLp4meATNcvoJNWjTMR51hV8BE12EJ8yQfUawYE5LFjAMeCrDZ8ArPJq1CTfKzVNUnpQNxyoqykm93nMaTUMy6d",
  "key12": "2fdgVZbPBSQAkFvpBamZbDffynr2cDtmVZbC3NLpQH33TkEXHESnXhcjrCWAhMA11CmNH5KEnJmngaRbiibopDEc",
  "key13": "3rRXGxWzVsRUNPKefatdyr5859tjpQUBbG3o1y8JH8sbwD3LsJy9eZFHuKtXKwXMLxdsSk7P4zWXJUaqrVHvfxLe",
  "key14": "2i7JibMrLbs2txnkRU32oXFpVR5kTdQuQoMrQCEmiL3JyBm3JcJtF9FCVA4H5ogFgomm7qnKLX1tPDVCaw8vgBpC",
  "key15": "5emAwvDb2KhReNWkd6rC2smFqrGQgJgtWMJh2vpd1nTGDzhNrQJmAPYno3dVGYaFay61XKEGqecVvAKGn9mMhV3Q",
  "key16": "3e5b6YJ7nZrt8jszTYxR1au7tqrrQKy6NNxQNoBszfLKBJh4op7ce5a63BodC3X4Fb3MPv4bBc8whYQJUQMqQSoB",
  "key17": "4H6JBKw3LBKSt7sS8bE6utmrFbHsDMzApfNfUC62h759qRKrDfoJheYPmr2xrT2S7gFeveZyHWwEjwFBHABEeEPm",
  "key18": "3urkCG3fPZytLbcMkbnc9cfRKFbh7SbhjcHVkpqk5EVosZX6aVZsKUjxqA6yPgn4BhkJaLLJVtzjvkuvmoFmyfoL",
  "key19": "2cWzAz9rgjC2Za8PwBEyQKcddbhHbRvPVzmdwaHhVKuG9EMSGyoH5dE19fw7KB2NBW1JBVD62ojdto3mFMxTdSC6",
  "key20": "3qjfRc1JwfNpoFSDYYfi8iQtYjZAUFWe9deygLMoHaamHY7YLiM94m6GQPfBQzRjge1VG717VqxXZSDZU8ay59wD",
  "key21": "5FtK27HKvjU4ggaVDMubuAMnghX7jRg3F8q4UdNpDM1N5AM3jJRhokHFSxLUxq3VT3pgypAuAG5feHWGTc9afn4i",
  "key22": "3tyhRhFjuwAAy7rQr5BdEPiygJCy3gvS2cM4EhV8bkLsRBTYtjyHfLJQVDWpynHHgv8q46ZcQb1GCF4dnC7Rj9t6",
  "key23": "2Aw8E2sHg4GHVvfKyTYT2rX24jM9mmFTQAAKniFvSQ1wVrb22MiVXXJC5R5yUq98k9izwE2krNwvQ5vF3q3XBLdH",
  "key24": "BZuPTMJVkWkeFXUkDyake6gLqCuUzZFY2poTUbXPFUSMNBQgTSwmiqv5Un6LqkVWCWruDDagw7LPizkn5mKrZAL",
  "key25": "3qrGCbknQcFe1ygPaNfoFs7nvVgv7FCLrNedJvYMfoJ3hgecFXv25hL2bQYShzVPkMDDE4NEtxTRguwwJZmJRKnN",
  "key26": "4GccAxoERXygZV1tBJtjoZ3vTGiRBngnDLXY9iLYLJVh5FzJowdo7zVm6csBjWs1RJCsmzjW1jibaNbUCo5FJfk6",
  "key27": "3Cuu5mBytPVTEgwPyqkRhh4vFdoChu3rnBA2XkxRajnAXA1QRPxFNxGw1eaixXP5oWoPcwJN6e2LFxgRFensuuZi",
  "key28": "5sA8MBDhpRNwj1FBkW9MD8KYbwDVC24ZnSYyvtT1mMu8KyEFPLR8SUW8pcAWiikEW4hjKP88XB6VMHps2QoPAUgL",
  "key29": "37dVL72CRkmjDCp4n4PmRoUirWBY9vvaoKsEGRrkqTtKkcgwN3axhK8KYYrB4mygWqExYeHAikgPM4SiG2FgZ65X",
  "key30": "4qvaqQnbdaGE1UeeK9sKNg8vhtovF3idZ7ZXZEAEo5japqRJ5nLYtYxW6hKTDNmGKKuPwFkSg4xuhY6o9HozyE3P",
  "key31": "4U9EfRr6fZ3CrwSfeYdKczrYh7zfgJS2HUkaAZ26uEmjATe6EiHhLKoEAT5SkR1aare9wDjhTq1zhnd8xArQ8pXZ",
  "key32": "36MPn1mGV1ffghzG3mJJ5nAfqKjqHUqQdsJC3BrwHHM9Q76LLuuq2Ztw3k6zFjeEKk6kNkRyzfZ2kqpw9dKpZfg5",
  "key33": "DZv6j7wgQqiNGr7qZH6eCHaWn3kRgVPXJXV9bW79qfK6gKLid8j7aFWAURCpL5rMb2HeWgQNKQCbiuNHF1bWDWs",
  "key34": "GYxCsUTJour7i6o4BcJrGxHfPQ5LgZDbCMNYBvDR832CVLL8TJRvJRGjkX5piDF9A9Y33wHCMn4MegZLbJRRAyq",
  "key35": "175BcXheBNDyAbr6GAvDUCgj92WsASbcvqxiTJuJyiNkSMVkB8pbGfZdwSgRNuTjq7NETSCEoeh9wB9QY8bMh6m",
  "key36": "P8VZnfc4BoVjTzV9KK9ScDzUfYbUtqAtK9TVhnxax21FzK7VsutRURXGj238MxU5BEBYRwFUCRZJJ9SiPWtvRQp",
  "key37": "3auPitsiznq8YD2sJdntkcuausTfJucCW9yPUrahy4c7G1YgKmajyE66UNmb7QXHhcKptFTguMSG1Pmjm5U114ee",
  "key38": "ha8VW1czMxczWWEvghCHqfFFRwbnRq4KAszpMq5kbw4Grgko8scGvTKvn9DqNeDEL4VnmkEriNCnGk3r1KnosgF",
  "key39": "66LGr6iVJCy9t76ynoBuBpvxgjnSPHoqrQU7AzVz7iAjVNUbNcxXZ6qVB5Rh9vnDYVeHbTLBzKB9GpvAppdwxX2j",
  "key40": "5isfFDzGjtsBTBoefoBPZp9piCJYkJUNuxk9G7bRNH1yvr6Jqjdm7zD1piaD5Rz1RJ26KVLhEdYfKbuYqD1zVdND"
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
