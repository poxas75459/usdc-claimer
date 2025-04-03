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
    "4Af46UTQX7VJujrtCZ2v9QP5MvV6F67wHGEYvpFK51BXafmQN5ccByAeSiQNk6NdFnCDoYCCkWKZa6wUgaqT2dVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2FreEbRtPhiB5uL91ZpNjyYdL4sdC9GC6TwjZyQST8pZGZrmowy5mVsJqmc9HYDfHUuMxDtCz8CDj7Nk1DMyqr",
  "key1": "3TqYRCnvgaGZojtKkhdiy93S91LWEuDNs8bjim3UkDUhzT3i9N2cBrhRqh3V2yRHkTEs1qDFgaCM8uSHgYLXuru4",
  "key2": "3KZZSuZoHGLDL1ac9mza7e9WzeTq7Skj7KoFJRQoLwbPZMxWHeTwyjXbJA9Yc9WFQd2Qnh6yCrDCDquDGqN6ShXe",
  "key3": "2Nwo82YR69QMWJERYjCSJTU73EzSDvGhR4Zz2Z6m1Jxt8qgDDrNgz9aNAhLrSg1QCdzhR1GjtzDMAYkLxtYXMhoh",
  "key4": "4qPgGQrrfVx2dmqsnxEXBDvyTFvooFQqYKktEeYQYDnnUHZhunVs1Au34qijLxJPReDMmkoxZ6BmZa8psZqMHvtF",
  "key5": "2uoeuz9rSGPF3mA93cnarRXjB4mb5LACVSTqD7iqBDbfkAJAa4Neb9C7pMA9GDnMYMQXu1ogteygxVBKVHRLTQ6v",
  "key6": "3gFaN3hubRxkDoVZfYJimYx4pTXuucN7rXF3dSfPfPM234bkXdX6P5bPTgTGpfXXVSZogw3U54SemYANviSKxspw",
  "key7": "4eYWkyM1t4XJQ5THn7gERUVd2vEv1HFhzBhMrw3EPBrb7Vcj6XtPzJw5womWnVWnMvmCjF2ncND26E8PfCcbBH4q",
  "key8": "2JWDMiWbb21m3MbaC664QivF9iRJyeeimrLbvCjw858JpTLfYyEroNi4PXzTVmUPoBG7YPSuq1uQzsyrSNCWkzNW",
  "key9": "35gM5NVqU5kY2g8hUbKZC7oTquHU3EA51KHou82yTQpfPrUmKghz2mLTBUveUTDmXM2Z25WfmUDt6UiHmWuRy68Y",
  "key10": "T5atcMZugsWozz9YyRb9N41s9kS4xtp7Kas34jyx5hgT5LvYUwqgg1Q9q1vQfTxTHaZwCt6NQEkerXMdzeaS681",
  "key11": "4ipBfQuyAZFtH4W6rncx3ameD7aYwwHKAv6cpygBSK1oDbh5fHXLfTbi6XK3MFmXZbcEgVkp6iLEQJUrPiRvJ4pU",
  "key12": "acYJxiiN1LYfpaCk9XWJTgDRfmWiLJ3huz9KXWr7tFS7mmB14kkAmWdFJH8K4bVfMec8dnNPeoGSFWBCxNvHXbs",
  "key13": "62WHKxQ8Sn98pxiDeEHQC4VFyUvUsuh7NTcKidqkaMGF9ppcN2hvgWJA5vAhsCN2omh24vfY9SJkYsRhGwkWbsTo",
  "key14": "3xwrznWyR1ogp9s1dsGezWV8cfZgXcTVaaTdm5Q6Mt4nSBSfFfTBAZiaEiCcj9wHgfgxTCrqXZtXpZ4Vwm7WA5AQ",
  "key15": "4oDFSgPhsxqUhaqaCVRzR9Fxkgfh2GKmVixQTiFp7eT5e9WKmSBzJ5JUKS15EaUyuzHR2bsTK8VymjoEEbfiTt1C",
  "key16": "5GWZX7nkUghuDq1dCcnz5u1FaB7QNpS66sNkMrYorCATSmU6RfGxFEy9d17KAEPgyFw8CCLafBHRRhXUxaVSUyWn",
  "key17": "5fXuqJ6de3JMGPEJ6NKefWRGuB4tzFWjyYL77jZmtNkWZHqM3n6LGoforAVqu4JTW7G5KWKXK9mqZr69FU8xE7Dt",
  "key18": "4cncaH6KpkSFBiumkhRVmFGZtCbvLnTzRsBAniS7ZKhgpsfWRj4q8hEndgga4fKV3eLrXagE3wmNGz9xcVsEsiJo",
  "key19": "418PkyCYaSTWDxNdtxyBKxX2V7J8egfLfNkpNfWXfZ88qFRrL7MW4Ax1aE5xmWfnDus5S8VsgJBEarnqKkSEkxVK",
  "key20": "29JRJuzhU7uECPiyR2pvHgUKFDNvSXupTuBvdjmMs3xU63E95M35UtZx36qcABFHDV9UUcjuMdN3Xm9rCKTiXa18",
  "key21": "2kWCuMZYd8UPDFyUnveo9K9wHbzBXy7A3VC7aXz9Yyuo73M2pKMnz54n4DFGQrmTfx2Ar4jwdmhQnY7ZwGcWjUbe",
  "key22": "62SEtXAV8CbgFSLDjZv3eSbtN5oC45w8sY5EGLSEGiC2AXPnx1mT8n9p4sfCJunm4sxss9HSfp5srfsCyfrpHduT",
  "key23": "2VJkmcd3E4Qcgk6xosg5pwxAbPJHPXmkkKWi9CmisHtoZE5wBNTEex6Bny5wBosbDu46MMUxu3BnrjBk7gkT7p4",
  "key24": "2n4vKwCqb6oufKUgZgPJLtySEtMV3EaPq9bqZtxpYLHM5TSfKWHBFKPRHXFKkubZVezbNvhrZmEP5if6HCvvuE8k",
  "key25": "361jnL52Msg5XiUrwvHZDcietxgaAz6LUe1sVF28mXoUZGjS18n2YeXVhpdKRjKLyupRRp11N8K73qU7YU63AERq",
  "key26": "VKNuhwEoxK6te65asCy9Gk11zsSvS6X5Fv8DrgicQNsheeY9xXAn4Tfg8XAmPHobUp4LJBjW1gzCVyhPeuN8T6S",
  "key27": "3vZbzpSBHrrzrDxa4FJg7X5LXA2VWLD6Ssb8rJqQkohyQtVzo9KDSHPiy8WM7cqVFTt2QgFMucyZGU4CxwxkWVTe",
  "key28": "5NPretPvvREyp3aCiVmgvQRHL56pn6aM2jxFCRGDuG8cjZ3uUXbnsfPcXqT7VUG962Lntm6BkqN3ods7pR5f9TSz",
  "key29": "3oSPR8Lq45UqTYDQ1xtdAKmsmaBZWNPJC9N43m6JnivEVARoZttQW3vavrpTEGTj1tpbAD1W9CFUuQmmW25sEA1X",
  "key30": "WaBkBZfy6GggNpCLCSUbepf27uPZE94DUfpfKMfjVDbpWZPfZbv7cSJJNuFbySf8pybFzWj9tL1LTLKXdHHgDXQ",
  "key31": "76DURiD2A747YteDUZ27ZpkjJkPiACU7bUUQZynC67xPaR2pS69187PyN4FMns8QttfSEyKGjdSwH66rG5LFaF2",
  "key32": "4gXK4N1xZRWxLZ35qhfoPqyTrKQVaSyrjGj6U46hJwbvt4SRZtyFJiaF3KLyzPhKxGbMQUTepR2m5f86hcYZQ8Br",
  "key33": "epvEQbpQXGQTzoXv7H632EjKBvBJPUeCdhvYVAGNSPhNyE8Y1aTBJNzpsZS9qWRAskQAwdh2oFXQGhPUJ6yYfJK",
  "key34": "3e1Ko2jSTQ6rfP1Bw9B2WRZHddZyxZVHPgpkDVVQfwyvBTBc6X8kNqaR4meCsEhU7GX7tL42sc6Td2RPpgNm6hPz",
  "key35": "WPkneWu7zhg3WAqT6L6qWW31CtjZJBN8DBGV4FNL4pjJMaE51F6737TaXUsB6vbRrx9AMHTHuD62TrpAGataBCs",
  "key36": "LzZC7fQ1v5roYfkAmkyHCJzninfR98CZAu3iZNEyWXrjBeHSkHcgjXApTUVn3hjoBXxJUaMAfxhgqMYSjZwe616",
  "key37": "5EyYh3UgNPFentoE73A3YJ98dHm1h2NHL5b4TSn4zPR8E87PRz3wmsaX2uNgbCq1F5prDbLe5ktM4x514hYAB4wL",
  "key38": "5fq2HVYViwULQksvVxjD6caoUtEF91mssz2iUiDjS6ZHX3FfSG9M65j6TWmLGPX3BaA44tKu2VMaM5hTGrr3eXXu",
  "key39": "3Fw2Smez1uPNdM4B7zqipsoV7k3oS4VVcTo2cokvW4vJJhWdgidtpoXRX17gtauKvAbHahUxYkXcrR5BbNuDazZ7",
  "key40": "3ea97tSKZUGRUFjrG1HF1njac623AsSsw8p3XdbU9H8ejffHFHnksqNNXhDw2F13mG9i51jzWR2a29bPE9MtwLEW"
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
