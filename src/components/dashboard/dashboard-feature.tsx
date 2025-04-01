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
    "3NgEoFtLaZGHk8CjxGth8LTYyQfGSKkvNMy9BMpJjMr7dDFTUUHR3dXLaCDzRh1Xa1mc1FAmeEX2Axj8CRAECZQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXbQpBB4sjuX8AN9fvB2vbEwT8KikmCFrCw5LpdzE5ofEUUFk8bDn9W5kKfwJ519Aj84wLh7gMSyJ2efHzYd9u6",
  "key1": "63ZdttTw2zffkU1rpnn3zg1N9FBYdtn9JByVYHXtLVntrZwmB58QNCyw6MwF4GrTWTjmjyEMCqNPUB9WieRLq66W",
  "key2": "3t8LL6RQQFgHHizLbE15JWAkmk1RqY9ZLeft1hj1Ntb4YZGU6EjgefRT3TARGKJUSyUh8zis3dHX3nWzmyfTKUUs",
  "key3": "3WPZq4Ypva1BPepn4PLu4Eh1wdRULeLxqQJYUYW18v2J42uRbV5eoiqWreF64R18nqWuLAhyz8LD6LnonXNxZYgB",
  "key4": "BBqH4E2zpP1H8YbFZZaukdPUt7yxcnNEF54ahyUAUGR8iYUXAMUeYp3tHg57bKC1ams2RFfcM6LQPtAoK5ma2Nk",
  "key5": "31sowJkEHvF2T8MuJ3tjYsf9VcpyU16XpMbWVgHNYgs6iUo6nTh3hgWWzBKZvZgt2C8terTNPmakbqmhAkkDwmKG",
  "key6": "4ktV7zWEtybsSBLwYGZE8GeqzQrok6Wft8qDCZWQegwi8K3zfphKBjuzChbCHzy8rNJXXodZJsHLkX6FQtpkaHYZ",
  "key7": "5sruBvdKshuEW1xxUbgkNYEAunrCsMsTr3sUuz4X8SQ8P5HRKJgXJykxwZyEiWKdgyeyYXgX6vXiwz2ZpDYUVG7n",
  "key8": "31wwqSqFFb44L9E3A5VSbHjE5ENCTk5nsu18KUjNaCn5dqBvTByri1FMidJBfao3xbBgUj8raWcNJMSb3YeWfdp6",
  "key9": "4Jk1hsCXeLrKGrAXjef3HMyLCJARFQv6Mi7Vv12mRbYAY7oFz92HzTnFbnwXDkd77MbYUSLnDp1cmtkXXt9pYEsJ",
  "key10": "3yd7jx277WyRGJQujtgvm256SxdSbZxyYCDFVZjKUMh1NLroPZnL1eRdVWVz9ZrNk1vmwiCGTrG8tyguzVUg5LFm",
  "key11": "58jdgy1ryqV9WzkgEBAiyXL6JjWZt9JxnTYMaVaRUznGzSi4K3icvATpSz1GY1SvPhXjDhPYEn6FuoTuDdr4pwRg",
  "key12": "23R45x8pdciytDRS9daAgELN9jR5eJSbVWV9KuDpUunPHsrP3AJALh52AzyzmtNeBz6sjfZGtrhmciEdjjoKecky",
  "key13": "wjsB29Sd8axkcjEHFJ9FZ1xwRoZx6vxaDrqjoXzeJEsEcW2ikKCLJpud2AVxcEF7RX6CuyGcDuPWXoAnUd269Tk",
  "key14": "5iUqkTKHHgGrAQ4BoPGnK3sbeiB7Je17ygt7MzGau9nK8wUPEXhgWXZrQQCMaVQVjLYgbgNZnKMUVPFhTFUWMtj9",
  "key15": "4dcTdbhRoYHAwpg8neLFVv5jf3DCSv1eEwqG1f1kts6vBCdrCVDf88xHipNvj61hMBGG1syu6DSbYe5vAUYiYAss",
  "key16": "4gKx3RkNemWTTnRsiWX6V6eBWiR2M7EqJyGNtcMbpBJsKXhtdiGuyeM5EHs5n3QsxqTfwTrbhjzc25yeHRBE9pW4",
  "key17": "5hESviXtQfhg29UYF3eMesEfgNwNMouwNmyhofe2k6gHrizee1DL6D4DpG9MH96tAwFNqDHHskHCFgvcDWqqxSYP",
  "key18": "4YcLwQkRJUjXVaNLphiWgJQXUGTxR2Ung9wg1wn7xpePu7TCKZHfG6TkyFSBjGyrLpwBACfNzVaRiBmdzsaAmgcx",
  "key19": "3MpsYFFzKxDfqUqdaTacTUVTue8QoERSRyBQ2gPJMWGtzTPVgNP61UpLRhrw5x71VgpyNEVbzXn4AUyk2NzfQsbd",
  "key20": "6E6XziwTfo2KePjFRf9mXkmAQpbkhbmXVEpapb1X672KeYRX4sCKim7gfkGMU2k2ZdQeGx1M1Ju6AiysEVy3iMf",
  "key21": "4bvHKrHZNuTcYcuFh2Ejcwpght9CfRFbkLJ2BgFkWxoJ7dQ1GFPBZN9dsPswTe5V9JUTbffDx3GhMP2qdtEazVkQ",
  "key22": "d1hN4MGNKGb6fMJPp3QyhQ51uphH2zeKCJBQEokSTNJJFdJvGPQodpMKUUgNdEfKNkKwqp1RfQPVw5Du6gFYhG7",
  "key23": "2XLKWXqJeAxqe8SZH6f7kE7brHFtpeLDZGZrkidjV3aBdjXzHnTAM8e5fsRTQqM642hMuyx9FzXdicRnBmXJSCgf",
  "key24": "Z7FQQS3RK6qyqAfFr1jfmZEYWCrmBsgLWa8rKN7SzH4XVYJ5kS1LDyxrX1LN7yE8ZGsjewFRLYyQStJBDz8S2K3",
  "key25": "5hohrwSzAyXsBCd8aNmHvstjmmMQepR79m9dpnT9zV5qAP7tiajkHpEdW1diVBELMV3WSHBTyQ78gVdDvdASyfjb",
  "key26": "3aUyxcj3DnmW9q3LMHcRZy5Ga4U6PiFKvLJrvR61EAcjrqjoP745k1dPC2ghds5YzqcM9vYFbdoqoYNN7XgtouNF",
  "key27": "5xSEq21TxZXRrWVRDH5t9u7UR7FBs96T8Hu2d8oPnBnerqVoTGkn7sjpdP5kGybkBBqvvXZ79umJHFCeswMwZtxQ",
  "key28": "67JpG4xHXd6ciATAkqiE81Crfh3bqSaxFwdyiEUXwQZfSnn45mPxH3nX7bB3JMf9mamG5NfkkpbtXcxU3VcfggqT",
  "key29": "RUA26Y97D7WGZ1gtvLK4N3jk1xLZhnEU8gz9m1oPWFRJcsWXXkF7ouoFNUyGik2MGynJ4NyYcka9ALK8CUo3QnY",
  "key30": "5yLrSmym5ZNJD9vhkB43poJz7BtUH6sXZuzUX7TK3394N6vLceJ9oG5mtyMQLnuNFyAr39b644NC6NWpZaijoe8R",
  "key31": "3g1UbTe6UP6iqgVpgFXxNyzgT7gDCMNkQkJcFvAMfR5vaF4zNRMoqGEThiJRgGo5YpSnb2yWohGNdL97e5d7GEgL",
  "key32": "5bPZEtXcLbZ2RnEjfTfeMKcAZnffJBTSCMF1SKcGaCwy1KeHXXEekmjrEWgx56cWxFjrynDxM89tcQee71tdfQ7f",
  "key33": "WXJqWtj6Dsteox9qoyWPrSGZNTxvTxH88MGMMHHcAcsZAoQpb6J6R9LixkV5YMhq8ctK66WKTM5aNBHkDCFnetM",
  "key34": "2tn6eBJSk11DyweDVjko4qdGTNvWGtTkypnPDyMUdQCogzcQJmHUfsf4N2qWj5mcpybgAJAbkEgFVUMAgB5ZRf1i",
  "key35": "2tQQNtdbJuTAeqRuyxxn8SmJAYbuMw8eKfnEF73dYgh17aQZAaTnMbNhVrEDRCccrrhSprGwvs6u2ghTgUENqvw8",
  "key36": "H2PTJWeSLivv176j7Uzwa5H14awqb8ChNQZrJAdqM1qw4sYpjc3JX6akz2dzCiktWxRdntR5qtwpBADwGwZNY8U",
  "key37": "Ayrjzmho9cLkAhZHttpWAcSJLiYcveUka3uu5Pzxi8zmsxiUt89mPsw7CPytzuvfTvrrBPCW3NkbeF9ysU3DTfR",
  "key38": "3jghcYYbqChadQx5Yk6vXSKuUQKoPgFQfuusfKsoRZNmruh3ztKrxWdankn8bd42Rv4eJZBg7oWT41TSm6VzFXEd",
  "key39": "2pQw3dCFgrAHdCkAWZiApdBpyzjSBvoeJNzn57Qr9a1gEPzduqLq1XpUivF6ZFaQN5vgnLqj9QykDDUx4Lrcpbs9",
  "key40": "278b6JWyAH2YBdC2UPy7BTsarhpbpbtJqQg7Xjd7yLqnr3TPY5hgjnx4v16Nu9S9J61zHSKBKGmRR5MmLQsR46FA",
  "key41": "4GqS3Pf1rdaQA2r1DjtrCz4MvmDcNXJWoVrRfXkkHFjjuJQULBHX4VbTBFmioaC7VHKkmuvDr3G2swqh2cFtyFoh",
  "key42": "2kv3DbT51CUMm3x98G8kAY8rNa79B9eZQqdRRaCRKUNRgxqeoSXUUQ12wrw2LLQL2gftpfucoaJEfJnBCyknDUzs"
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
