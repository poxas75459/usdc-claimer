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
    "62mTKggP799K5ZHHogNGUDU2XcSCUoXBX4KA98F7PE4m3513175HxMgUD4p1iLEAEYd9MGHF4K5ffGL8XWhsapGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fK4mAYKYSPCdBa2LKQUBbT4uFC3oqCuCG4CdUiDcjVxbLEU6eZ1e5g5x8bLBE3mxGjDFVCTVFGsUzcaUEF21wYN",
  "key1": "3P2yAam57dDE3AQYG1kRowfFrMQ8ktW2aXCbc6it7NSgehShyzXzLSCCCokaqaAoEy3pEcNw4mBTMyeawWzTXA48",
  "key2": "5uKYhEgDodsefimru5L6G5TcJCgP6GGx6PDvxz9moZMm5jBAemvSup4XUSVa2qrnJyyqtBg9xFUEABY8a1bYPXqQ",
  "key3": "2JtovYoPV13XuN94qx7ToNKLEJgncdJZMw33MvuWN4DLAPQvZQZaYGnve2LY8baB2gTcxpCeHr2Hfo85ULmUe8m",
  "key4": "2GByEBfPvu4mMbhasZwfWguZnygj9e1QN2AEH6xXAFuLvFGN9sZhw381o5Ei4JsFagHcdieemmjmSnB2ggj5hbLD",
  "key5": "i3Zn2M6Z75hmPrzXxvpjbVq3v1r7gV6PHWPtNc7gAGnuFKa56WA6NWEUcps2wYQq5Ko1GvmF2AWcMs7YNek3pqc",
  "key6": "2hfUzGFPG7huY2KhWZYiosU1ivWrVBhEvf67KbbRXF5qZM1tyuzJbmLg5Nvvti5kpV7dZbDgoBqqXs7bKYSLnGDx",
  "key7": "3S5BBrDAnUwfFS8mQihNhWPG6fbkHndbLRUK6qvXCaGrfg9woYoXRihoq3U7Qoz1jw7A3wBtpfByjNx8ZZzSXPTU",
  "key8": "aewegyFarfheHv64bnbzEJHJ3EJeR5Xj9i6oByVs3X3FLMiZD6ejbdbkyrwTRjssgXTCXrSUhchMQDG1wQZ7QmG",
  "key9": "1gcdJAX7jcxnsAygfJmZHQvJtkgU33ef2fAQfF1W111hpVDTRwveGUKK7Qqtogqd38U2KtkXKDLAY6wj92fT2fs",
  "key10": "3WNXhatXGurgYEkFqUsoqTTaXTz1GNzYkr8mR9jvVhBkyMmp2NxfqL4VNJmwqnDLmLcmovipDfQTvcGystZ6F6sX",
  "key11": "2Fa7fQ9H7esZ9c9f4BFkUNEJzzQXvMJZsPsLLAo7fF5zhv51eVBB6YAzdJ7qaCAcrikPr2giPhJgXGjU4n8XtArm",
  "key12": "4HcaJ3fWm7JxhfnwJsHUBGjh1yppMmxiBdKM1w7WdbkywJscD3cdJA5zNtNC62nEnq9bRfEQuFgCsT8AcHqzY6Lb",
  "key13": "47VmnsRtC5rQANv59sAr2APVvJpzRPbwdPKgdrzedLx3TMenfcP987Lvv6q2rYA8GwRJ7a8B74vvBsfWKd2D6UYN",
  "key14": "44throZ16curGHgUpom5Cu41puzecNpeskDcQ9pk6NE9nuaFCmVHSLg4RSyBXm7FBFe9dmncpEKdJX6qEtEZH1zW",
  "key15": "CpqZSnj9oANtcSjD5xynNLMdi9fRHjewkFZHvMNSiDjWpfRLj9cny86rzHcAAeUWKAX3DH9cUcr2rnp2QWdLLFb",
  "key16": "2MP6khfQJ3o5KQzRqRrpCJtbMrrZ2YKtrozvqPvfYTtppwNgKNtbosySPv7AtBkQnmFuULxVESyRXzSsZefyJnoZ",
  "key17": "ZPxi8wf81RVyPEjhQBvC3gyXbtrG6TvWjyu14Pp38DPdQFPCWJsnJkVbzWAgN9eH2p93xN9fXbpeJBPoAhdTc54",
  "key18": "4JHJX2K88dUA3jAkj7MTWyzVUsxu23UYxdZxeoTrNbmpb8UFknvTZUKpj5gZFsxPUAWEQGRuiGgWUjN41GAtxfWy",
  "key19": "5u4gAiK6ZLP3fJeLgfmTTtM1tWpHLJDPavYM8fNPqL6YWSk72nRLNkyfqJsBzGRtNwk8dL5q5DhPggNd8c9WQuPU",
  "key20": "2ERkwV3rZsaj4BEFBNAqJK3xFCReKa5fcBGUVKyfY1Be81iaxWssQGkB6XJaszCWj1m2vK143GA6puLbfi4WY2w3",
  "key21": "5oD8S4spEQYJHahzTxhPrKH696KbrdsmfMY6V6Ty4PFKMf8ZNN6EeCqbdJY7LxUfnCjHSQ7a9LXUJhVWAGAv5LSD",
  "key22": "4ziQqL8q636PaUTY25m3A2JVsa1fKPw6pfxErJqrt7HfPbGSy45jaFH4Jz93ed9hkww2TzA1uUgBWLuF7NqRwJ8A",
  "key23": "36t6ZXAttp7VgSakc5agBJ4iyDub7vssPmgfwp4y9pQAfhWZSXw38rXdLD9gpaRKgVShDsTYRTJdYbp3963CY2WB",
  "key24": "5KNe7dwEgQB75eeR8iQkKE6r9W3yhLx8WVQJR2g38MTetkFS1EgLgGPRW6cc9VPbFhzhhFzwPBuvobHkbKRtmjmr",
  "key25": "3o5FTu6xKZWCSxXPQ6pxpvkdgr4VyaBUU7dKVf3zzVB2rL1qkBQocfjfK3KTfw5Q2FweFV98eQWp2EoTL7NBrqyX",
  "key26": "4TSKp12vuBhDR3BswMREmE5fg1NYEieJN6SDcnQqoMuCEysmvKjQQ2Wy4wcXKQtHYuV6MxnjEg4Uzfaa9NMkRxrd",
  "key27": "4rVsButiXjtXuebEZbCQkJt6kC63EiAe39df6sP33DJyJHdHzCvQYjWiFf2CD4zF6sybd7sD3E3oafkiujrWyc6R",
  "key28": "4SB6QgcudJnMRj8ftk1CvD1btU4D4HHn8oajsS3E765vzorgHShDnCJVhF5s5voC2fhCuvrYe2xNdYMDae6oxfU9",
  "key29": "yttWr6u1M5ZbHkPnksriHsoEEEepKWuum4ZGvTDd2sE7XSfXFNEjDPAnZRrKNp5nN1om9hDQSPpQS8mfQzSfEmn",
  "key30": "5R5k8HLdxLZw1VG8waxDfhUT25UXQUEvp42x5AaHpM3bUDyKncC5FpeMFcatAZq3c6ebvHTpGXVEDMhfQbtWD83z",
  "key31": "3NFJDgBFF5SRPBqnYry7XW68Si3USRnm8uTDGtfKyjSvpenxf4gqBjFEUhiYNfrvpHMwc5UtxLZXrij242LmPezF",
  "key32": "3DgxYD2NGLQ24KVFqLyo48wzz4TdYAeM3Sdrzz6HMjRCu3VEyE5iaAhWpgJ6ZoHEwo5UDy3HaMD7pTNfEGDA5qdx",
  "key33": "49ofB9vUAKfizoi28qAeqdcRNhtyKvUzvyY8b2wZciqqyLyX3tHkFtR8ASpAPdzrf7u5tk984MhMEZkWa5pMvvEM",
  "key34": "4SG6FEvPApAZCeMAZdXQzpVZX9XJi6dFtUWoEHtaWCuSYnAPdshHC7B9GUu8CDHVhjRr86yhXjQ1hwyy87rUPmQe",
  "key35": "3hnxK2AwV1XfHGfDoYTze791Se98zfeXGFSujqY2fwMBQ39eLaiPLTtVKDZtiwQrxqSHJNSr3J1qJvdSSFTguQuA",
  "key36": "3fTZtvRipbXxFemuV1jJUkoKi74dbH1ESjnYmnF5RkBvUKnrkYUxbf5yiYMRzXXuyQentZ4fHULQRSvPqBCgFxrJ",
  "key37": "588AM6bJnWXeSUyFTsj8YHxfMbiebr7zixowWTLgF9Mt4sBx9Xq8XAokth5UboQfEheNYyxnfQ3qpTEstq3TGina",
  "key38": "3zyy6qQ1fuHSJnEeASpG5ABBzXwDXCLppXVkLHRpjWr2ns11jcHNjAeT9Q3TioETWN8RBBGxPPHEYfch8R7PkAxH",
  "key39": "3otucf7Hw6pUNhPh9QnsGHs9D6NMTKLsrqLXga84EuHw79javcjAmjvYD2XZvnPkZV6GyqrSCQzyCKGW2GpxN4BC",
  "key40": "2P7txn9GZtK2TN15iyYBTDE1UdjF6GnLEBwpVyNFY1okNahzATTztJUpKVw6hvQk3A4HANjz29xgknE88VcoTMbJ",
  "key41": "2pEuNwTj88qLHVDtgjswuLWaxBt3gidTY3XKp1JiCBxrZ5TUugnzFyt8LrL75pkGpa8e1vP2LcuqjSncHPDNN4FT",
  "key42": "2qWHqUUHPLfHkuLkQ54PdfjxDdLD9Jv1VS3qgPwJ269tvbpKZZt9ZXpYS2mZ1HZ4MpXpLXPaFf47A9SrH9362r8o",
  "key43": "43fNs7QTJHDiWddSMAQt4NYkeZWH3qZHhrRgbKHoy66CBdjucQYa537XY5zC4RYzLqYHBRpPXXooRUJdknvAuqib",
  "key44": "5Bqd2rV2Fx1Lr359B3g1FTJ4c7PwmMdUmvNrJr5GtRtaJ6iRit5XfBW8yFvZFv7wKbrvHvVwRGSUsoFNBfVa1Fyy",
  "key45": "58iMtQ8Vw2nsmz71UqUb73x57WYGkyq3oLsg7jEU5z8GjCCaykYUDNAR8dB5Fc4wwVEef9abB9YU43XfVDogmN4H",
  "key46": "5NJmyk6k49qRJarxvXYGNnwq77q47xoVhSqwKEibRuv5z3yqM486ok1xJyX7YForkj4x1PnE9YPR6TFDGBcjqCsZ",
  "key47": "4bHxUE5Kzo2uALxbu3NugNfwiipjJPC4zfNnfej7kGGCb1A9S2rT83mQUE7FW6uTTP1CzkPuyJ4VknujnhvNHAbc"
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
