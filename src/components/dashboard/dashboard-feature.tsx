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
    "C8pWxhw4RcmpYWoPLipmdWBdNx1oyk7uthEYoTTfJYfV36yhRcoR15xFwYAR3HYZou9mkSy6hcPUSs1kqLTvths"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yERLstwAe5JLPA3p3my2S5S3qSB4HVB1S1aecKiRdo5wayZauqcJ9Jd9drqNHEGyU2vq2YiqRteX9As2kJdWS1",
  "key1": "41Qwp9uEcxUdx4NVRH6QKLoqKABFifpbkW5P5xQE7LbB99ufFApdGG5Yoh29rsGViirUFYzFWqd8iWCEa3R3XrJ3",
  "key2": "5pFUZGnjL2NUoNaRR1rcbzBK9QTYXNpdcjjkGcrYWvMYa5WNUxs8LmKpMdgJdvz54rsPDHvXnyzn7yfR1TMmud5n",
  "key3": "2FMCAtuE4WaKdqoMXoNz1y7i2BmEBatSC4a6DQd9YmXb6pR8grqy9FnNvtKADCpTY5mnCabPFsH3s573D5JQ96DW",
  "key4": "3vJqnyooivvoryk2ewT4tKpA5UciUH4gRTPkikRxFXDyzVDDsv1ZHuwpJu7CryT7sHfHF6F4UEyTuxZcTzpXmjca",
  "key5": "rv4UrVrHRi8fUZ3EqrE5i1JPPS1UCDXVXDsk6BG8P9Lw5wrZwTF7n11tVsuy95UDjCfZDGBE5WtSD3Nsur88uqu",
  "key6": "4iSYsCcZgozoN5LJjSnQj8qPSEgMsJTZ6V6BmFuVLjG7ZftBwxDiNYfywHsZ1ZB9mdh4NB9pia9UZqwysGdFc3u5",
  "key7": "3qjRZzSHZyDoqyCrohZAicjmmJnsJSTzeQoEHUfM7gvVoGUxMqfmAfmFgSNht7ejZ9pdQV5LYfBTFXZWRCjzj4vC",
  "key8": "2aZPjbp9TzhTGAGcX9pJVLeHAHAFzqwHbqC6cHj1KFAGAJx6qNgCPoTdYQzDSNr1WybhUPsbUwUS9nK7HqMES88e",
  "key9": "2BGKdNgdTK56aKHexssL1jUJyyZVW2ngYKTPE39LvPF7BMuLcc81DSN6WvZX1cRpUzw4wtuwCbaFNyZxHzjnj5MA",
  "key10": "2naSa5QLkJTAUJzQNCYzm8xbGDB7hb1GEkA53EyCFC2yzW6FFqLTbnCofFTetJg9rM5jC3iWgb3d5R52e3LHfD7U",
  "key11": "5fg16cruUtuEqAJ9PHdo5xdm5MhrK9jH1xyNbpvBNo5nJpTMwzSyWYus8GfYGgsGWxqEd3N87mdVwAySt39rjCDF",
  "key12": "53DMYrMHUA2A61KfwSPbCydrcdbgbdAoxWseKsWWfYs3LR2ibKHbMdmP7iCRPwEJQatrLw7JuGDhpdZ6Tb1h6Bhi",
  "key13": "2WbJ4fsXhJANYpXsKfeLu4WNbXhRK5PuG23DBacsTT8tNQV5j3zJnrUKN4kDFHddRm8RmyW3VSWcbwxhCF7qBuEX",
  "key14": "5ndMxAMxkTvcGCvpKMuGKJBP4JHYaKUZYBJ8V1pEiPeeaKYPRPgMAShbNStCZgokvZcrPC6Wq7fy2hXyKvErGoBL",
  "key15": "5hAFKBADYdvM4GjSKzigMhdo6XZWLaGSZNwnY6RiGgtnqXn9MpjkKQScSfvDBF6zAgacNTAhHHKaiWwj1yjb37dP",
  "key16": "5vWvipZTGX2xebdYH1tThjsPMeq3gXEe3W5Xg32eZG7SHkVzDeASe9sfTj3hiG1DGhYUmMie2sH5WrNugxpTJgkY",
  "key17": "67PQfoNSrEeHyDWP5T4gZcE9vqychkUfkv6ESaBdi59W1h5W9aogfeM1ZwSnNNFUgXWEPxshqDj358DRmPEvdx8t",
  "key18": "3DTVUM8iahdTPoLqtC9RkPg8p7GtAYGzmGtH7CWJhaH1iRfxQ1gmLmmZcwq8S4agAn556kSGGdJjxg6mNruYo2Na",
  "key19": "5kPJqke2vvBie7RMm3ZZVxRBiHD1wSHhETrYcWruskUMmDM3rEJcuiUq7MmpDQxvf7KxPZsRyqnepG8usF7ToitQ",
  "key20": "4pTtJXrLNR5Q3dJtzDEjcNoFXjht3KmBJpdAiFb1BBdMCgwtifLjt4N62mAgHTTkDdfA8b3dF94oYZqsgFs6V496",
  "key21": "5aco6Vn5SrzYsd3x1qHpVpDCNFX7uAeejztNY8VqD4G9PbHBzr6e28t3HgEacMkG8UDgwEKWnYqwtFUirAnRcSNm",
  "key22": "5vNdtrDdLHoGNA9t3FNYnp3UmVRUcwWKdEXKDi3Ax7F8CJHdnknWgXwYSpyhmAJGdGkVRn3qoyxcSMPMVBPZ6WtZ",
  "key23": "3uDHMMTpfC24kDyWRb5WpXbLXbcJRZnuSU6v5SQGNfMQEZyh2w7BNLZnAVrmQYdocfMWiHvokLKQMgqoQr6EEcpw",
  "key24": "mqLVpk9NAFBLzGG8rCarQ6Gup8FHGpVeJBZ8zKTzHf6H8Z8p6Qo3mwAPxm27DSagvVQT8Zy1Y6bEPjeC6EjuPjB",
  "key25": "3tKQqY1HJAkoKor6vjnwZTD1FgTEMvLw35KdCbDgAxtntniaoWzLrtCU2cqVHA5psJs2v732Fv4a3kny2DqKnjHb",
  "key26": "WNgjZ1jCa7fYHaogJaqEp2V7CZsVtdPXEuqi37o9kYXAQ3L9pUJXHuJrWPmgYH2F6DQzNUvvoJaer6Vk1xXBKVX",
  "key27": "5GM8uN6Mt8cBg1ajH5EZc3gVu75vgbomJiYwpLt3QEXpdtreb6SdFQLY46dKkerhs2xYnjKCr1jBC4hRn1DBBWf",
  "key28": "3EVvNBqXVjsrNnRPUXbhAZo5Hw5Uc3BPZTwTsoUh8daA5rNC88WEw3vrSCGgMCQxADQu6gyC2ma5ZrkYCK7H8xUu",
  "key29": "272FfGenhjGCy562XvEM4PEk853t4KGvet4rX47jLw6fDNHY2EKKky84RfWNRZMxJoaWAjW8jVvbKwNo7ugwQnu3",
  "key30": "27RjEBbNk8iAE7f1rt493fRiJ3uUzDWc3NwGe2g5AuqJPSzBB1No7TvJPJVQqTBhoVK2o9M79ybFo1W4aJ4yfcw7",
  "key31": "3ykTVE4PDpzYpb3zQkwM5SfC8xfNQxJiUHfxocDYswnQEGBz67p7uNB1fRD5e2gPnpxYgLE49ST5LoQvXaxKNEER",
  "key32": "2g3YUYAyXpwxjruYgMzh3XVpjqifEEzGX2hzFPdTW2n2vZdrZXdyGTn1PUVA2fcdsxB5r6sZbBfY9j41tvuMF8VE",
  "key33": "32BJuHGTjBRyreeDN1gp8W6zyJ2LAxj94uNAfhii7vgPvjT78THuuFSxcBPZ3JM33Vi2uDRVt14Wx2XFSXBQ1jaw",
  "key34": "5d4NuXBQbQapBCiB74ATjbScQrN6X9Em2Pe9581PvThMxLzhwPDVySumLzEYsRTswTvbFSaccgzZ35SSvsBvZigN",
  "key35": "5eMHn4wGwwe3Kf7jdafHTfSAKFxrhEgsZtgAsFf1TdV3t47RMA2pRFbUeTAqNrjfPRUiASsyf1uf1jwUHsxXRbks",
  "key36": "2xuQEM5owowWhLv8GdVPfKTuMC6Xjk1GrJyFW87weRZLvxd5Naef6wK2VLFGbFMQS8PyZxKo9piXVVF6vRQAKCM8",
  "key37": "5RoVdejHqPKcagQKpkm9F1gNtH13xxML5yPDr96iWXpL5WHBCk3r7uvPgNPxgCWioBjebN1YTzojTEtu1cdm4LLe",
  "key38": "5NyiUhpJxLKvLAMrv1kCr5oq84KfgmD14xLeuhtr5uZrnfZwgQsJ9Dq5BkixrRqzChz61YLaAczkk2M84n7im6qg",
  "key39": "2nJrBuXuknCHUSRLGWukAHS6TEunXMg239F7NWfqX3b7xHusDmqsaHKTGqXak6f1ESYdwaxWbH6HF1UMFLYubGRe",
  "key40": "2c32oibSGbPiCWdssY9LimMg1McYoqNz1VyoicbE1zSngDi3VWrEht345nuif5AxFJvK1ZtBz1JX9tnKzSCDLYLf",
  "key41": "3Fwhmav3QvSkBGi232BTKb5SR8VTDkmS84VziLPmmJGXHZuHt8h6q6Ew9sWuCj9zK9LarRrLHeQs6YErzzqQpTqY",
  "key42": "66PdwfgSAs1zU5mxukyDgUuyqmhcmwE1mo5h1k8xrFLsKXVYUyS2hcsLKhrsapPLjtmwqrPQNjtfG95xCwEEdDxt",
  "key43": "3ZguYqKK2bQoB9HybRSiw6aCzhzaDow6H9AQLxmYQtztHD63nLd9GhjgCZuyE5NuFXPK7Cu3DX2qRYRVafZ6DzsG",
  "key44": "4Vo71K5HZef7bXFhTEeodVW5jN4B5dEriZAUxrqXeY4NQd4AVY6YQ9Ld9vPrbkjZB71pJvoQexUTZwT7rwB7NPGi",
  "key45": "5t76vR5ffgczSgmpKiSiJ4ZxZvNSdaLcv8xRsrQVdbFXinC1CUcdC6UAd23j1FnxHR8SqnasGb9Sc7msMAduyhW2",
  "key46": "zv7rNKKskAA3WUEN4QuvKMhKrAsfxntKxGP675wqhUfgUsxFwomUbfnR4bNwe5whCYx45DqpFJxgcnvJtP8mYKs"
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
