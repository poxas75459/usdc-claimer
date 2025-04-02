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
    "4c1MZ2aLZGmSWHNyjXu1EFFptu8E1aiAqqMjtpfjSfq4Y8i7RF4fYMyAW5LWBDQw1N2WdUpWhCdTkXEXHHa53tVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCEsXR23ZXSZQWJ8re4kXaNhEZUdxQim5vx6KpxBFHqKx8bzkNnPjPVPHy5hmS4LBF6rkZnfaEqsumyiiia2rhQ",
  "key1": "8Gh6CzwMV7MRczSnhoAqVnH2yrQ6JpMqzURaRrUdy9zx32o9M7Ru18tfzrEtfXoZDb2pRb5nkaemWHYgRLLQ9jJ",
  "key2": "5dupZanH848TeNLiXStxeh9bnpoDDiA3cvCRjzYnQBfR6ZDuyMDqDDcrDBSnEta2qcC3mzkvJzBAgn214TTU8bnv",
  "key3": "36brd64it6x3nCCwpbpw9uQmfgiRmYJbjRkrzFMYgmrqH7Yh7bFUMRqwnAvQr6D8FQSU6bhTs9dwiqzserCXtj2Z",
  "key4": "2JytGdSHNDj7hr3NA4QDaE6dQDBYYYzDnnz2j5UAqPwhPV5st8fS3Jx2uH8bKp7hgCmbv8g9PXrdDV5QeRfZuFVi",
  "key5": "4pR61p6WHsnuktcbM9E5ARZmk3pbzNHNazJGLAyh6canK8KtfUxLRoSKq67XGvwZwUNDxeN2GXFWGqnVsm8Qt19Y",
  "key6": "5ruFWfcAMedEmDs2goq93vTjM3Sm5HuxjAnkYLGZQ7xLn8zrGADWWb6a8r7jZYrgZ1GysfZX81UqkzkuH6y6rhE1",
  "key7": "2GMeyr38SYSkXpHGYKnRuMM1oTmrdoNLyoD2ghD4E1gdSKhtKXUE2T3FSfnccRVGZuYcWZZKreXT2Mxksf3M4ybU",
  "key8": "XrLd8Bdya3xEN3pxfwmho2jk21ro9ku8hBu59paGDDe28cmaV6qiwBLw97fmvUwtSyLLSKaQB4Q1ngo6igcicTG",
  "key9": "2F3XYDt2uywPb41AZBP5okZqxHC6ZtBweL7rwxY3LWUShzyiiSEvVarw4zf6EBpg63iiLxYS4JHYBNaqzBY3BHXo",
  "key10": "3dCLPbDibqVmVGC7z2pzHgKQRHN55ZbwzCNUZkJfiaaor3Lcou399RHKryqW1kGmgyk9BD8ZWMweEv2dtr4jVWJi",
  "key11": "48rpkMWp5o1x6jKYKxBiRfswTzQXY79sXihBgfSousb1bvbB5hMT7JwXLPeYkuh41vvPBji4SGJbmYCqr5RYd2Bk",
  "key12": "5AgYM1D8W8fYuX4xEvNEAwRYDc1wWrj5o7P1nnNavJgWZUvNSNgsmbbfPgKNWewPJMmk4rVB8TSCBCbZveQnxk7V",
  "key13": "2i4DogmnhHeqi7EVaWQGG56LcDwg9ijVLsJgbWsJmCpmvTsyypkP4CdhwyudhK7jMXXmmrG9inPmPyasU9eRhnai",
  "key14": "wJiGUXBpnwEpEakZKHTiEjfzDJdZ3Jq3zxKaYdv1JdEGFe4quXtt2PrDamhbZ8B32iBJ2G9cDYRLVZSjC4dH8Cw",
  "key15": "2wJbk7pdDB57YK89NLTGiBM4XTwt3NEPjKxC4WrHRX3pW3s2V1wrvT7Gygxh1qgofwnkgHqa2yTPPMzNZWjHko3x",
  "key16": "2gV5QbhjF8c1xojYHLfXM6UdEZd5yJRYEJbDqAQrfSKfqjaL4iRHNyQqJLgHB2CUSgB9CWUUPjGdCPLFc63jNYJ8",
  "key17": "17pkwgYwqE4CgNedNdtntFUxpgYS76x9pYhrLi1KEHXtoRTxJ1f62cXz6c2ipCDEdqjutoZnzdN6G3BNaFJXGM5",
  "key18": "2vNZ6XmT5AfXnETuQPrd3TDAnG9bRRufD7Gay4RDiUPZwMuYdDvX7geXQ9jyWFVu3yGtVtwDPhaytrRnJDBTfHhR",
  "key19": "aZNVnefCLwA4V9wu17bpBATYuBEw7xePg3QGqAXCvcdsbfBjkPNpPMh5vPUmtWS529EbG2E9tacXQUrRp78yLjc",
  "key20": "53EEo9fbx1TZRMC1tcFLCoeh53oUyPvimNHXEzTAZJ7N63mTRxgiTnL5MQoX9cFgAchM3z6yH3f38inqRQE4jCMF",
  "key21": "sX515htm8SPiXpPjwio4YLk6dkxi4HmvXJEAtUcPZtmqJh5BFZ2bzK89tEbP5EzuQn6SZN5x8TAx8dimGZxFJHh",
  "key22": "4hvkRCQFdHYtYxBqgiFExmStuXaQjy3M9aEFNeXhs6a3zc8TBXS5WJ9rv42aAtfQXof9qonUFnzZiTfPLttXrhF5",
  "key23": "2gtiMV7eN5BunchC6U4Crecm67tMpwzk2VV455KrpzQKirgLbZD4TmxoV78wxF3Ask7ZxGMtih9x4L3YBvxdUJV1",
  "key24": "PYK3qi8v1dbGZB8eohquoAU4tuy5jeCrJSjGuYpx3nrvpHJgogVkfnXY7WAzMPaz4gMNsvoVBuGt6H753KsT62J",
  "key25": "5noc96KXPzodBAu6o9iDvZ9MUpfTcdNvZh44HNDeH8zSWGjXxGqGunXAyPpfqsGBK3CA4kBud9KNNQzHsHkyhWaq",
  "key26": "YWcTDSSaUNjsRjfwKo71KxVTCTdPoFNhEVZhMqDyHx6Wx7bvQMaQnXrup7THezXx6ZbXfnE5KfhEPA35aoX3Fss",
  "key27": "2ktuQM4wExaYAcBGfEWh3d5c3znCPoQks9ywXHKZNdSZCFVDNB3ZzaDkfqYetm9o6aUQtgjhx4trWdYi2r3h7KM1",
  "key28": "53EkQFs4dpDQrXtU3eVqdTu9GRqkPAJ7r2m1F4yeSk79bJrfrDtHZh8Di5q3EsVeMt2QGKy8WDfc1wBDMbNymnob",
  "key29": "LbzCqvZdfKMdfX3hNZDFYNCjcek7riBkctohh2R2v7F412emgJZrRSk97qGGLar2Wtcs7tHTZJB6R66eBc3tLww",
  "key30": "3HQrWmGBUmnD6GgApaLvjPqyhfYYo4KFzhbrk5KYDsu1xvq7Pcb8tGp79ibmvP3kXRquZfyGqN944rZyZ6RCgy82",
  "key31": "4pyjUF5qU7HEuQctEgnvyqk3SXP3nRAjCZULR85ph7bA2PWWc4waDdGNCGZmmbtXu7TjQnyztKVbRJKoddLy4FDU",
  "key32": "5Skm6Tn6PMCZuTKvFDpE9oXqafk34wktFPUD5uqKnXZKnG7d2xCYQkbS4ykiLvFMyBPZN3hZvWGFbUJ2qBQQV1Fx",
  "key33": "37ZRmQjgtU2rL9fjR22s7BEM8RGEFGby4wnZ3aJ3E9X1wFdBYXi2UYVLJ4UGuZF4cBYWysZCoiwrESQBziks8XGH",
  "key34": "4phJ9TCcsvsYACe5GUePKMbYep7bJ15rnsSPRq5AVH1UM8SFprq9RYUmG3vvuo1K8jU9GnqhiYjpFVQ7iEic1b2P",
  "key35": "2npVnZhEsBMgDtVaokoexoGYdS1L9Xf8iDJoXT7jS15MVvARmqHczswXkYuuxUFkkr9H6oTdcxur1MSrA3UzERKP",
  "key36": "4Z4YJWhrBQSaWKPSKizuodJi8SPrPw7JedHtdXg4asLvmVUxnRTuLsfGrPNFe5JGEqyxb3s7AT7PB8RzrpGdLaEx",
  "key37": "5SgNsADYEzJADvkHPd2mcjwoMAnkZjB3fS46QSbWF5pZhi3ZxSvvgimZQiWYV5ByaJKp9GeRZneqQUyhpDAbPkQR",
  "key38": "3QL5NvJjarm9UPQgqY8UXYx79o6BwKA8EJRKN8JkpsiQn2fhUN5LwdVkPBvXcTWwXXcizyw8BuFidat1LAoa92ww",
  "key39": "dBeb4iynFsfUKYmCAKZT2R37vLdn9iBeyAfrweXYCS822LfxQYBbR6tmnWnD9V199bT2AHHrgixyBQHDCcjekkE",
  "key40": "32Mts6tr27zvYEi6tPG2ht79w4DQWbnymMbukcR5hy1P7qm1FFW7gAETyTcsbePYdBFCADkeqMw8BB7PVR8ZY38k",
  "key41": "22NFnCFCF1dhMeM2frLaaiWMmxqcWH8q5MXesiHVaNexmv9TCSzaFz7oKbWDAcqv6tK9nKfmnNAe78qa5S4QsX1J",
  "key42": "21n1GFbuUEUxxEqNZcBXjwscrTTAJd2gVnyyp1zMJKFHfe8piDfSzASG4HywEQaR4eSFThju9QkCkoXNFSGQjeqn",
  "key43": "H6DXsT8L9ruE9DYdzdmCbukdntpgLWfncAHiaS3afX6uSRaRLTpUyxNabNufQtBTgaq4VondAfqGekkdh4JFe1v",
  "key44": "28D4qoNGRf6X2Wm5GyUv614xPK6rTvWDY3VAgM95QEHX5eULzbN1F3XSajFYUAKQkqBVAnpz9aPZuf2FSi79oqta",
  "key45": "3Emc3XBcfy9bFnn5ha5PfKgiSLLkpGCEtZmwvXtNF2ZkWWBfeAaXZPycmxzQUmxcQKDZLJxCdt2LqZxZDW2nAgk2",
  "key46": "4va3pcN3XKUyucexeTTcnmBN1f3FTKZresAUT2kL9dxPKP2QGgPeZG7AhPFWEfzA4Z3LPjGX1bjebBNM9txxp1r3",
  "key47": "3K2P9Q7axzFLMTPjNjK9Vjm5966qiYgwvoTz3UTK9u4CNhQWd7g4UdUg6Px1w1LASFqW95AxbSfHSVJr4Ra29XHw"
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
