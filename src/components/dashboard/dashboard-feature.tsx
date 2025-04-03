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
    "3P1UH2bCx1NkcRLVPeEFBWDLPuu8vjx4Eg3LECZm4VW8p3AjoK6RmVX2X5V23Fiy7xkPvJARTTygp4qDGsmckZ6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfjhD68HX6zhio6wANi5oeqsJ63b7J2SBwPKgCoSj51P1JMyNDU82oUWLmsmRNPjQ75cA45RMk3fu8BW8RyFfP9",
  "key1": "3v7kFCT29by3SgVPbRdQpowrHVqWcoepVqgvRxBnS7Vhouv9vy5ZwQVZfnzC2W3MZEZsfGxt3HAcd3x1SQUfeGe",
  "key2": "M4EqEWoDqEYSiiiRRofmvP3oPNi3png2B3GG35bYSdzwt8DsyCnqyg5npf7RA99FbYqdkbTDARjdTKNR1wDXXqH",
  "key3": "668yXwM2gYAu2Mej6MeZJRCaCiznc2SWy3e7Yrq73d5YaZfJgUGQLsq9nTayT4Qfzy9GFCM4YWYkP75YVDUR7pno",
  "key4": "3uSLCEdsfCdJF7YV2Bdoq7JXHomAMJ1AJXaugVBis7c8eZY5gydGci66FVoMQKGfPvpe9EDztdVsRsCXW2Z3cfZw",
  "key5": "2eoYkr8MTPq8inbVtwg51h1uyxuQdimUzH6XKkMVwbWahWW3Bwe6Dm1QA73LnGyQmW5PYfQ6m114JJFrmbeszPLT",
  "key6": "2KUCENUVPg5UmtHyGn1cxBfiCL6YVWi4vNt8xTStQCnEevwfbdtc6w2ysiN7Z4JffzcFQbDWPxDNsUS4PycpMcoE",
  "key7": "5RzxEK4qWMQJdZnsWJTdiyYEfcryHZLy4k5WdKaZuueDb1Hkuz35a27aAwYyJ8YSArcMzk1ii2uvesQSMRLnDBcB",
  "key8": "39LhWshgcT8ureZVE3DyeJ4F2vXzYUkPB9qaugfD5aymjLCedB8pwmr2HNS8kU4ygG5qngAtsgSTjC5qzffS2iD9",
  "key9": "3Nm6HzuvZbPmU5cRRT4MErk5zay5ezabC6Abj9NhAx6td6dd4CVdp36a9dDscABfBRC1HnKNXLdnpoDtQL457vJd",
  "key10": "2sKo1yjMBFPLaZq71GQqrWSbkdAbbFFUSscw5MdBFCzdDHQx9cmourDKNKyWAWDT1QfBPxwpEqBfjkqsWy24bnpi",
  "key11": "3ENJJDodvrzyqvQCN7fAPPL2HCnzwbFmT9zK6r8THGZaUW98cUuZoQKsLZkeKjfrtKffCiEcC7nz4XBJdu6Ubb2S",
  "key12": "241qkNDjggVRQLMU4bzTj2Bs3MET62TtNVwiWnRGebg71UoaFCK8xdNH6tcoPRWCdppYub7WMS32Zn3JvM8oc47x",
  "key13": "2tX2Rxmq7S8dCU8vpXVbQiprgN5NheaDENTss9pxj9VGWGt8PsrLkeKGJcPLqrZ8Z3Ap8q3ZTdSXEmavc2Nptwk9",
  "key14": "7xPB3hadonobM5NUjeRDnpRoPe5hd2SyFhRzHuyjhL6tpZF9DSLQLQ4ReeGRhTSC21DkANSvYqfscrY6YMUq4Xn",
  "key15": "4GMk9RmYMg4HZ4d6AS8QmfM5bBmYTuZJDBbzVthzG8PkdUywLkBCbXVkmnUhQuqNqmmjNuWVgHnvU1xJvkbVpTxM",
  "key16": "4JgWnqyDBWWrndj5kbvffcUx775u8RaCXFANjhXhVpVDyRU4AuosoBDY3ZLRrtRokXEVAiX7UwLc7R5L1z84fyHm",
  "key17": "49giiX4WNTqJ11mcZpCed6saf15kq5dqZpBTrBLzXYDrnkhTkEx2xDiun3r6TYU5YyxK8fitV7ZQ6XKA38u1qTCp",
  "key18": "5j7KXvhhxRrPmjGaEGJXra7US2oV7GR7PdG9qwyisXnqjzD9PUAb7Ev2CmwjyUhkuZ43HppuJ9nh26cbYX6JD9Rv",
  "key19": "4TzcTpgHzEFmSAvBtsfVtP6HPNDsYcAdY6ZmyPDAY1qX7KQGrf5NXK9AeAVPkuVPt4wmgcBLtK1n7RuzkLnRGBgY",
  "key20": "5eKXVZP7nzM2waS4WwMHaCgbnKFb3nA4m6NneRcuUWFCrnoCPFEFnCShMgWPya74mT6WVrJ5nidrkNNST2EX8U2Y",
  "key21": "61hdmgekbDZ3xQ2eoNf3HG6cT3DEEhQqs7F8HYbp6vMjbVuG7T4CgK3dCzKCHR16zpQnu4GwGgBoqg789vRk3B8Q",
  "key22": "3JNQTGCNWkWkfSf2vqbrBaagKzngHJYY3UQgvjm2dcc9kY4kUqua21c8o6pSUMuYwBpxX9MmzxQPDo32bD52gWAh",
  "key23": "2x1VUuTQfQg6ryB1oGafQUabuDnuneQEkEMeFxpf2eZHHxHgwXuoL6Lz7iqJJcZVeKnEf86zuPL6QaASsEArfKnc",
  "key24": "4aEDf6gvs8yFH5iGNm6b1gWsfSC4P1wYfLY2S415W3YcFVJLZNPCPwkh4bELoBberqqf8hZ4MBS5QAZpqeZWXs25",
  "key25": "4Y5dQKVP9NEAHQEqvW5LMrTuW4tfJFthsYY7askC7rxLGJX5GxC8ho57XXjgkaFNxFqgh1huNykapkLudzsAbCmQ",
  "key26": "63iCMkgZxo7oLAVgWfQXdZU6takneQ8j2GgaBCh4nhoan2fzTuEYSbMogwTqUYnBkAx2rvnHdxny7wSZ8CTVaD5M",
  "key27": "3VLgi3mRLCTQNjGd71igA2YenSLwtJoVTHpVJrwjrb9vhXyvZge2Ym82ys3curPypoMHHont4FboKPXKszKVCiTN",
  "key28": "3gXxonLHDfwTrJScgvoTB3CCkw7kc8RJGXEFcnCgCYs5cKNuEsVWH11Ad4gW6xGhidEpTLNriQxtFTPKs5D3sHsB",
  "key29": "4gHKY9pxsV16nJtYuRs1cBbXAyHCAwbPdY4cgHojsyv324E5xdGWuxYPRCoMRcT1F9DM32ypwHgMJ6tn77Ws1qtw",
  "key30": "49YfWP4Lo9vvbSZaqqsXtyRszoEA9h1aGChXwo8EUfEn4cgaAhc95cSsW2g2nF9teyuqFy5CrNAzNPWwDeqjE5WD",
  "key31": "4RnyDnVeuZftqgSFejj2U5SrEZsFECP38mZbQdTWqBTiMFYHLiPAaqw7KRSnufKXUtaQHY8cQy42vbCbwsbJoL8c",
  "key32": "3SAmTdbnLEHtSdK5YHWLCb9VbB8vwNXSHVMXLNDxiUyL68DoCKdnmaJAmez8iXvkPoNU7Z5VjpSzHX4SQQRdncfR",
  "key33": "2Dav1qn5gRh6RFSwCpsCYsg6pVLQyb3t81NxKPUCQHeB5nPbhRtT1aXYsokbsWrSRhzFkjjhx3kGWRJzmsrttkEC",
  "key34": "bW2AFvMPBSpKZ4NLLbxzT2K3TwFMVKhMPCUMeL84BLrojVZoCmRBRiPYqi73bfTgVM5UdJ4GMx2h4GygPcFMvAd",
  "key35": "4QztyTL1a8SmjgHiprVG2xsQuFVpRehq1YFtkwitjfR4NBx922CYUdLUvowPnKjwVGXkCBjusLB6zpf15UK9QLPm",
  "key36": "5as1sGGH83iYjJCG6BVAQgADtAP5zMiAthf7VWPLFDuTfvyosAxcVtSqbuPAC6ZZEdRejURVcr511D8rimp4VdDU",
  "key37": "EKBk5tVnGQhsHyxwESuCA4TT7zSyDaEqmxDXRtn9L4EndHP8Hm3kCP7ZznPyYgtRL8Ckx9RhDK9b3o9o9bUHJ7L",
  "key38": "2KJitxUWQ1czMj75YnsXWbWzjcM9EQMUxszUurWwLfyXj1Dp9oXV3cAkdEqFuyXBveLsYW7Myo3biMz8r6MFFuEJ",
  "key39": "3zv8gfJq634K4cHLSBPJGNc6hdHcCgbuhsfjbq6cr7EDJw8qT3WHq31r6Wn7TncVeDSNPKn7ogjvmpriQKUkjqv2",
  "key40": "3LjUpi3JiHQYiwmH4Hp759P43z1LxvufceZK2aJCthd4opZVj7PFT7jRVVJA9XESrEJYewJ2YVrX6QPZgUSiaHTu",
  "key41": "3Ys8wUZ3gwfhFqwr8YdrUE2b1hhNT5M6s57X3CEKRWSeVjb9y61mWpcj5au87UypRc2KAB8kesQxcfMqgmbNzqjG",
  "key42": "2QXS7YVSWVLLyBmQbnwaoR9rZbx8zeTkYgCoLT1KNMrGCbgX4fjWdhjvVEJCt88nmUbyimydy3URyTCtB2oK512z",
  "key43": "32mSnF9onLdpLFSvYBeaaykk9ReKbGzh4bKceDhXe2t93EVutsq1sfWeaFArHD9NJxhfEe3iLingdbu7C4t7MeZz",
  "key44": "53wmjzFscczpf9pjPNmUkP9XArxjAfapep8ga7Rq3XothawFDRFToDnK6QNahT3owAtyhRnotepCiuxyy2EMzHeL",
  "key45": "3f2ERCXgwa5MdMZzsrUaUB2dtD2FW2dF9qUEaBeLJ21txAXDLeumDYuEfJERueM12B4ZrX1V76Uei4HJoXduLG8Y"
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
