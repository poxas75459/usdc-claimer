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
    "4yQHg4WZTdFNyhWN5RqQ7RzuLYr2XNsA3tXj8D26d4nuWAFuyhZbgPGcXvaEfmLTy1zhJuGT8c9yQy81dvXmfHbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUYyhp3FDzw6n9Pg2kbVLTVUhWtSsuUf58gHVztvXqWht6bGMMmJtdQ3TDNwEEfUHsDaBah2dRE15fvSQhY8L4C",
  "key1": "2VNyww2HfvWJE6NoyDVTWVjyuGng2i7LVtcgYZD89eHpdPCHZuonmh8jda85RFdHKztTp8CPJntaicrJYDYd1e7Q",
  "key2": "452763CAeQLf7j38vKrrHH7YcYx8W4qDyLcZJCALZ4MSAh8uVdc9YRRr4R8QGCFJAWRLbL43tpFfwYGjssE6qp7q",
  "key3": "4H5Cz6CvhQ5FeMkTpi2asL9MzcFJnjaUPJJ1byhiEQf2nQ1QczdkptbrQ2qUmdDZ1ZvS7TsE1xYaJGUcpNVERBdT",
  "key4": "3t86wjJnCdVCxTTJWgLgrkyYDs1aj4kvCowggE7ZxKfWevbCj3EJrERogxqAMTKrfmvdJ2NxZGh53xiJPhC1bcyX",
  "key5": "3JXLTkcq9SZBkcQNQdpY5kJbjE61Do7mHPEaVDEgjQss8z4EG32wRXJ8cbwMRPRoKfpcoZiHpxvZKBubMusSM6VH",
  "key6": "4WDQtj5nKPdjsNU4n7gGQiaq3Nx4frph5NbPLhM3VM9LwFWjjYaGqRjsrcCGVk5Ljx5jLAS41uLfuVjWqhPnLrVK",
  "key7": "yRn6WUm1jMZbEGbuV4C9LEidNL3Mb8swkA2oHEtrcZqYSa1zqzVQRKt83qUHiN2aCnEMEbHSxjEzEKvb1gg4CiU",
  "key8": "4LFzzZomtv4cxyvhRh236cdrtdTvj4fXWLoQWFAC8ExitsNgfPMpFJpb5LN44bbSeVQ2gQHxi4Y6wtxHgQDP6wzq",
  "key9": "tsLPnWQUsnGWb3RCazDhLe6YUZsvYmNDWnz3YW5c7BCjmmaTipDUiyHALSFV8imcmrUuREUAVqbU35SAZ51j4XU",
  "key10": "2C6QcdGnTk7VD8xwTVyRakARoaZD2BuL9jSHKJKS6muZ9MmQYo7y2oAePDvypzHEaVSatETUdT8NdMEX1JePYT4H",
  "key11": "4kpDpbPFt4zGPKtxTwxaLxcKtMt5axMEw89WKUPdbibQRdKj1EKmxA3yEacuEH5JSWUD7T74ZGJJeq9VGWh1jYxf",
  "key12": "5uSwPZ9H1pS312KYtfm64DngHpH9mriaLfVr5YZRnm8XJVGKPGq1Xg26E2mYLNMgcJnWmXdvhJvXEBSGDgnRzJoc",
  "key13": "3bVRa4QxrV77gdmHxe4cGRiAKZfYgKUPLV3UPyaTeKhqaFxwXVxT8nquH32YDFgEYMsiyrf3qJPjPqnyTS2VQJKs",
  "key14": "4UexQi4d9fUHwyKtyEoEuYs4kufZYnjiYL3ptM3Lzd72nXbGea3EfSLxSKnaRbNM8AYgAKNLnrMoJbCY7dEmQLJN",
  "key15": "63mu3geKPUhrKAr85ve6bEL9H6ATAES8vfNm27LaKMkVxTvaCC7VrMq2DcXX8RSJACoeADWdBvdNXycmxKhqA6xx",
  "key16": "5Np9iohdJMbswFpQAfMUYVXvGpTvdS6YH6k4ouhBmgFC2z1GvEh5rwVeekrNH3j2YXoZwdrMbsWCRPXvt3rysvoo",
  "key17": "2JePKKgd1MxPCtUDxw3tmGatRZtbHimyv757g3iPGV9nDcaeDi1PTFYvTPLBSV7ooUG9FT6EivFwsxsAnbpkn6Ug",
  "key18": "4fb8q15S1ZBqF3fDS83tgHf9wxTf23vwZ6d7VCpjSCgqCC9JWo8JUsoA7W3ot4vf1oCwjXtJPo9pqHm2jAYGw3Nj",
  "key19": "2cCxta1qW5n5XzQtA81cPtjKnvPos9UbHFZquodYiSTuguWKnZSUhrXzD8TdYuZrFRG7T8j5aQcSmp6e3uTeVo6Z",
  "key20": "5rZBLm3Mjav3aYeBMyDrbk43d95toDbr8fHjKEw8vB3xhhmEMwCjf3z8hxZjpNra8eFCwGdexNENnPRXVUfxpzTF",
  "key21": "5VTdgsWbuQSKZfGf1TwYjPdRh2v4zX9NimHYSxMhmmiLwzf15xqhHsBZ7oHxTHazCe81w3UbFGqXXTMrrDEYn397",
  "key22": "3s22fyYMMenCAhnQugJfPUmTapJH1K7HkF8r8eej9awrFoVKQnUt43GPnrgq5BnyQ1Uej51ogR7j4cJGqxmqdMNG",
  "key23": "4K7tVSm24LBooLhBn55vCDcubnysATtLKUPza8P5mHH8yrCg1aUavAZ9KCYsP7UPsameijG4RHZUoonUto8QMM6e",
  "key24": "3aJdGPtCWHgs5uztwYxg49MFSPKfw73B3ZjJDPxcWGFRiF1ZBzAy9yN118EXRJnWTARvxk3n4VpqjtekMajWhw6S",
  "key25": "2obJ3Cjo2yYqT5LhccXoDS7NXToeepuXFpJHpJgV6buaiFVNPVyqt3LwoEGfjdu1zk6ksFt2nfLijAk3Vrh7iqBy",
  "key26": "64yxXBSy5h6HShRztavvWEP3h3bF6i6W3NxnZxGLNPKcz4h1LGJWBgUX6TgXqoxzkacdLy1gKDJ9zu9cU6FoqrTQ",
  "key27": "2uKBkTBSa9f9exhbgDZJogoLTBqMnnkuxs5KgLfpi9QogGuSo9tBm9D8Usz3FrWVcdK8wGirJ4d5B9xjchTD1eiK",
  "key28": "2KdUqbnd3AaVVNQ5NE3xMnxUdMcMpeTocuEmkj1pdPUCb7zoq7bKYo8JGiT2JrWkHEVom45hQ4r8C5iZxJ5ZJpqX",
  "key29": "rAciNbDV16q6jdt1T3YbkQsuVdg8ZPUCATyvJU8QJEL9zF25Z8W5Tt2XYaVLuz7mdFYTTKUUXtuPWTsxmwionKR",
  "key30": "USqrGSCngmbdKagUWUHzvnbSzQTd7XWUunRnRmykmXahA3UB32cjrhmUAfXymKNqwqbmkWP7BKKSkmV7254de8G",
  "key31": "5WeYbWq7XmhQ9hHAqdYGThFtrLtqA5fwHh8ELYxq65WVd3qrsrxEwASsCHj9PyMwRRt14h7MezkL5kjsfq4WAqbJ",
  "key32": "28FYxaYZMdZUSNyKLbLuBEcnoeQJZLJKziDnPWMZvA7LfQm9ajCUzGrsSmMPcJEG8QUxrJ9t3dTxmmWVQ1ZBdt8h",
  "key33": "3k9unU27bhYj8afMYecChB6LDrTqKJBTTXXGkas8vPdA962tLZMgQfEzBYDs2pCgPkBju528AY9CgPryfXSG1P72",
  "key34": "5wZQ1jVBj199zDPGgVvXJYkrDnQaRAjCGhNbFqUmD5xRy4Cqj7PbutU3awu3tNra6aLw7h4XYT5qDMz9FSRtHUJr",
  "key35": "2TzSGMDvPvb7TkpsxxYrPWSgGonivDz2KAbiWgNWjHTvGuCTbHZptby9Ep2Srbz274HS8sNMDJgmuPxmxfRPYS5Z",
  "key36": "3CHJdmiGRbWcUpYkuxdAxD9NBqjZNxJXYJFbpAS8BsSZqBv7cNxPgy5gk9cn4va3SVfaagGdLVSemYiibj3S8h61",
  "key37": "2dCwrdSqGoMWddzTsJ4N2QH2zvGebLpAux41DyPx47YLrTjMZPzm4yZUw74xTiEWBVbozZh8SSrXbwq1nHHqPSNc",
  "key38": "52n4g5kyMJP2Fy7UGHQUZC8qvkrbjXogrHMygKVK9Nn83nN79vYe5FKbk3bACTnEkb33EKawAVZeiMX1pjSyHiHK",
  "key39": "DeNNHE5gcNbRXQpedNfc7yQor6M8Q1sPkCHLggWEF9GH6AGcNJ3hW9Qpsc2UcNH42Sd2tfchFZpDLtmBFhnCcBV",
  "key40": "4TcvbDT3bVMGhZZmS7apxx1BeLCVXJXK9bzUUg1brpUCbdKp7WwVKuzCB11g9h6WEAJpM7XZLZrEYNJABEZv2XB5",
  "key41": "4kj2tATfpTxgBro75qWe1ys44K5RNPUZy5ams3b2Y692XcDccuHsBbfkEm54B7SoHWV9eGjo7UVPNQ1aphER5Wzg",
  "key42": "4YPQECXrisXFqfBH77s7U8CuTvo9fx1XheGsmZf5q1fugfGufpdtmHZQs57EFqMuPpiACK5giTee3FKwjfkWEcZY",
  "key43": "3MZ7FJUV3gsu8ajuiCupoq766bA6VbFi5ZUoxsbAnS8jLF6wGJP29HaUu5pbNwzNgmX5Vqzf8y2JYSSdC516LoYk",
  "key44": "5LA8eTko3KUyRJUD1Bi4aRc1UG8vHDekbn4oPJvCsfP8hPfvHpZxyuu1vh66sz6P36aosvPNiFpEgGnYAGg8avga"
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
