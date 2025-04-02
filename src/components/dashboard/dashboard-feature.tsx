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
    "51yscdaAJpxMxudQpExHZD4PLaXoZFAYQ9qewc2a7czviTMjLZj6bZMEZEMc7U5FZdksT4ivvqZbZDB9H7PmJH3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uJpxbed7b5jSbddFZRdqWRoeQi39dvpLM5ocNeuvV76amN7Fx3Z7niUvX4avxTPPEEcav6u9ZHe48aYq2Knt5s",
  "key1": "4dDYfMEuDkgdY2CosmcuT1QzDfHaw2RgSWHrPCgwTWL8oVoxQPaanKSd6nBAJPMxqZXrkTAdUmSk6P1uACJ1FZ1p",
  "key2": "3dFvwKHm4vgHXWvqpb85uHKLnEVCxhyTh6MboL4PcKtAViXfuVWCMX4uUHpT4B8NgdXnNcyFJrejrx5jyxJLn6cW",
  "key3": "2G6BZiWab2vQPay4DcnuZhRbRhTAsWuHytSdkRSFwnhfJggPykUpgFUC1i6fYjESWbSz6gqgD8jGBUQj8xVA9XQW",
  "key4": "2JATWW8VYzATZjwuCxPPqM26ogi7apP1T2GDu1MKsSqHqHNb6ZjhCgZJ1199rQdYZvuoNGoXWx8nxPB7xNGKvzpU",
  "key5": "315WyNxpD19bV1oG7P3cBqKjvNvkwK21KuRZ98Qi2KDpktcHKByUq4soqx3scYJt4yrfiaNCCfrD2p6P2aCA5jsk",
  "key6": "HJV8ra9MxcyUBXnF3vqpezEufY25hQocM2C6GjQfqM8o9Py2dyXrqQ3whW8K6Zm5QXN6dj8nb3CeqJ8BcnxYJgf",
  "key7": "3XDtRxApFVACQUpEAReadQsxRW4okPuQDhmpYAEB4X7eCYHVUSnQhjmqCkcCcJ7MRp4YZMUNHaGL9JRYehAA1FrN",
  "key8": "5yNsPWUVazpFruUGzx6TAnNb5aiG1Nt4qaSNDRjpUAGJnWKs2gxCTPbTVs2UxjkzVXQ7hB4DniXrpVc8mJWfwsFe",
  "key9": "3UhEtqDBf9dTFYh6MWGSVDgbGLTa9PVek3m63EYrv3gQH8gaKLcieej1wmqNukMZ1uiFSZae37RBWmRRpMxtWtay",
  "key10": "4KWVnEi2VVCw6Mq6mkoxGQNDTqNHbVMerfbXQa6ivdfdgURV1GoVPN4r4iurkCYGcRaRCZM2MPQiWfur4PByQsqB",
  "key11": "2Va9o4yw8LBke76xnD7iwbU2k9gVdtrtNJgWewiufzy8PPVL1nQtVwY1DLsoFMsUBHC3wAzVdyBgZZTWhWfwQpEb",
  "key12": "hLpJReNCvu8Kt9YuEfUYRRprUmUaWkU85pJb5CpRckvLecyQZ39fSMCJfNahCG59mRq9oJNLioCcDxTgRseJwqY",
  "key13": "2q6GrRSveMzxd23sXZu6iuZmVet6F9ZNu6JQAS4mSBDwnZvyDKkmKn5hdxHnUMsnv7ADUQkh3VkVAAWR6HCAFtbK",
  "key14": "3u2anPFvzWBgzCpiHzP3MCGAKcjn4xFC4e7GWv1zXByTGSxanamLQomvm7SnFKZkAv8KofyJk2hXi99sw446RiCi",
  "key15": "3ez1BnFb1KAoeyd32ytGoLYZCKqLna95rnFWT2rrfoCai91fAqDTUmkzXafKcGBXudvnzQZFBFzz5pHHqtL7ayHf",
  "key16": "XMhRHsZNBV8mybGkTKoPtbmYDjbsQmzHvQ8hrmwV5xXTNSxNDWsBFtitEC5wJHs7nRZ2KureiTESRxBbAFnsi13",
  "key17": "3GnUTJPpvk6YymS8YuyNPHj79rezt6a8H5ApHz7NrW6Fbc79DcVXrpEhpzWUhrbRyEPkKt8X2FCm8fshCHh2HbLj",
  "key18": "5UBY1SrsgzyppdaxvMfBZcBdBXK28gHGFMQysWGgv61KpjvZQ14Kx2SfLKfnwxKAasr7ggKKsfLiQKRQ6NJ848JN",
  "key19": "3AMKjKDqBjMnjQBGTy193NmEhp7CzGFNaEinJG9svj6jt3Edxit2T1aeKmU2nxoMRSEuQ5Wm7zfuUkq3bVgSivrt",
  "key20": "4La3tDoxE8GiwyAEA7rZv9zJFUiSmtpxFQ5c8tB7PDBVDPr5M9FqyPMUCGDwngCA4H91tSVnyqMawamC5XvhQbNX",
  "key21": "2oFqNCh1ERSJEk5MkqPhs2nkeGNzNRV3pj7HVQmRwzXMwQtcgc1Bzbxo7Y29R6aGf7C2pifk7tqEEW6qYrVqC9nx",
  "key22": "5oHzJ2Zb717MG6y1PUsLKA74wXLjZpyGEK6ctbmvK4J79JqpHwDKHd7BwQdycGEGk6HkKgRMyHctdRmeVoZajLwk",
  "key23": "3WcKCTNL4sMtG9fRuvdL6M43cfmcP254mCsdFjryNQaTne2coxHcVtvn4k7kZsTYcBnL5jjvGjkvqkQtHTodQXz9",
  "key24": "zQ9uKPST4aBxm2C1xyMYQWo3F1xNeYEuA9cMtj41WMCvGovVhTduES8iG8AEbi1C78xFFYmDxMZvWfR5NQ4Dn6P",
  "key25": "5zkoBwarqbFmJ1yddLABpygLdxJiGrSLKo6tkvbhAr6CekG3PD2kjAcN2k3zLkbqUg5bbXmjXZ7FsMgUNv5u3NEU",
  "key26": "32tWw3tTNtYzfuDhBgEe3yqVW775Y8Uu9W7SsSaTGo2xCjkiBrbYPHckvgnLkuzo9LNCyXo31md7JpvvUVLeiaCg",
  "key27": "2BKMkrstPHMuLX5849LvC3a6ZiGRvKcp9D81gS4MeZzRURqjAFWKjQFXTUGV8kLvgNQHQrwn6PgcEp21XZAbaqCY",
  "key28": "2fwW6EU7g6eLNhN1G3Q172XQrp3TQ7jJ78viiwM1e19nJ76bjRcCp8JA1SsNSWdu9KateP4J3m8j3Ews4JoZBwnV",
  "key29": "AmeeUa1i4EUfhHpiqyCTm4NH7R9jUFiYQKr7BLbMqXiidBy4jTFLjnvEFyG89jeP294LDYbkgJuVTRTN6kTyPPt",
  "key30": "2m53Eg2qwoGcVje2f8hiPScWMyLGNAbxRqwiPjp5ezvBrLB4eCZkLn72anYVjZ2TvaxGGWEzi7ecZxk28rtSPAz6",
  "key31": "2y8EX2297FPRBCBqTnUipwBS7BeCVxQvVxRD3ZCTLhhcyztUyL6s97yzaNRoU1Q5pZ2ofzxQTN3xXAS5C1mBK55k",
  "key32": "PGUyNr8cotQUZQmnd1Lj5CJgzMg4epAaKGMZyuNXYVGNLy1iwX65iPWE2iWFqp3pjY7U8bY3oafej812gznk7V1",
  "key33": "5J4SFEZtYGRL3yKTRVYX8psynBE1AZLRT9GbmCXBgg9rKXtwqFJYcZrikddxXR7KQmPojw3RWYgpmARW8fx88ADE",
  "key34": "49FycGQhZf2sdA7c23cLCPCqiqN34Ry8w4rAtRdudRoGS2Bf3w9aiXURFsxfruCFCTGwvnZwgjgdpC8dmnVovBuL",
  "key35": "BrEP1ZQS9Q9FXLniSRP2hJQR7CWm26UvGxwiyFyKgds22LCGoZcuRkjHwxr3z59ywFo85zzb6iDwkSWXE5sTKZg",
  "key36": "XgACWGPkuw9QV577G82SLM2Txcc5yo5sPhzKKS5GcHGwW6ZYUk3d3jUoWfebTzrdhGzJTJ4kYRSDpGngN6H17va",
  "key37": "2PCD6LAd6DR5ZZAE3AgpDmXxPMR5eYERK7BRJztRLtUezabrcDMp2SusRXP3AW6HUK7XvwyLWciNp8RGEkqhpHmK",
  "key38": "3XA7W8UJYbVrXouNDgrxt5YvmSCKsiBUit23S47rBYUJiNY4vrMYZC1EhzKgc2EvN6hVEtpRsYXCMbxoUuK46Wqu",
  "key39": "5UncM7JXcDbUhf17LGzssdzyPgfdsYm672zLAqK7ZR7zwDvGsQfzMf83i1hCiMJWsktbm64kL3YoctgRB1cD6Duv",
  "key40": "3jenziFsk1fNMNcJiPABbgSkKVMtbxmJMzPARwLvSd8rngzSqi9kiq3uLx1RkfFZLFnajwcvZAM5DbEghzTU62SG",
  "key41": "qQ3AoEZUgu4vrrm9w514S9y5fropuCJSd5xYuuJ8v3aLaLvwd6LkrSRmrZ2CS6rBCREugUBHU5f3BLKVJJa9RWa",
  "key42": "2uYKsyU7BnGm7TUyqCfMJwvmzhAGjCk1oEr8xKxjLvaLjewXwXMWUZGjjw2bXYq4PaR3mxzGzpHo3M1yx6RMR7Ug",
  "key43": "5rwKfaZGKfHE5GDxebzPSdcWmwuFqH7X6gGLcDwiZd2bgiVAkgiwNXfP5Xb4SiwrAsRRBhvFsHpyWpMqGryMELBd",
  "key44": "4CsmZ1MVE3uXG9smmrihyDSQuJBwi4p9tgnBoF4kBwkJtykzkCuhKA3PaUDdfGPeZBdm6XvBj6uYwjiLU6FN7o1Q"
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
