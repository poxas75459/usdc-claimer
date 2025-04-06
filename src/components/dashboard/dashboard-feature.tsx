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
    "2A43hf6kg4Dzx6eFidDBJ69kiNgQJWQWxi28yk9QzL9PTZZxU8b8zNi8saM7KUT4JG9CLxLiKRBN85BVUFXaANXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFLFC83sdEDenXkYQk94V8VdwdqbfMkbVpd1aqwyicyZTRqcZyJNZs4UmC4zzgnhcdkjRSN4989TKVsFz7FTUoP",
  "key1": "peVk6cyStipGpgxpqVBoLq7xjD67kLhGVMVrKnbcwi7Bi2xZAkWCmvC1eDFQxSfYAWHqJJejnVP98ZTt4hms9Sz",
  "key2": "3pBKHbFYP8L4PyTiwETTLrtzmTspeByVDfrpdir5sbmHwCix76X4qiFUCt2qGwCCBa7QkrjNRYFYoYd8TCKwViTM",
  "key3": "2wHKtGSsWj7fpHZoFPGHq21vKxkM1s7c5pZri6FuCX2hJ8HN8dicvKYdDCEW2nzUPxZHvLLUfWkMMA7QNnKV6mpr",
  "key4": "4j6mrnkmoWBDDXhSpzJD9LVNQgEzyJaPTxNfWT3emq1YSJwkQ82bEETVbdiRaSrG6zHxkVwQDwtVb1BaVQVsq3on",
  "key5": "5qX9a8HfCAtqX2bjtZUaRjoyweCFWtHiqcHcCq6wizLS5AckH6aiwtVcdUwGK2z4mVWd1D1Em65Jyk3UbsiDYV2h",
  "key6": "4PTuH3twYvFZYPKeFP2m6E75dQnVmQQresdYjkTz1zxDjbm4dEQ7q6K8xcrZSK4wjqoD5SUVKTMhcKHbJY4zMPFT",
  "key7": "5szUoVbxaDPdFfm6sxhSyGMrQaBnWAnQWKH6PV4SCWGuYUWy3WQCeeKrNoSNeAuYwEXNxxDbHAL89DwqFyaYoZov",
  "key8": "5Vebqc743kBjUEVeaobW2V4dowypqrRKLiNf6Rwrn36W5PJ8bVH3fgPgHeHTpu2H8kUuCY9CnSz5U7Nh6CdFBkbc",
  "key9": "2AMjHNqqvxSByiYWAt1nPrYEoSqYWkAnhsrdgVyAK3L3TSgLMfMp23qKQiqyraDHt2iMFKHBKUstm8LMYZTTMwz2",
  "key10": "4E436KYybBcTDj3KYMmUaTMsxvRxRfYCKTofn7g5Q3bc33GbQKL73JQxmCYh5pBjcnCbpoZkueRNeCRjkjhbsRNW",
  "key11": "ZAtcHZHxZF9G7LGGEL9iZEvaVpcpFjifs4hUwH1JCphu2Q7AAJuxNwpe5aFZMNtVY2RPJ2v16cg9KharTM452ug",
  "key12": "4SDysmdxBobesTGjoq2ij9JiaxYw5Br9ZXw81SQ22Cn21Sdm2qEEdYpKa3jNm6u14xQGNdQGpurekAtQj6Vb2FgD",
  "key13": "3ZUSJjg4BPEHngMiY8o3DZ1zv7GVo9R4Jix3cqoJx9KJn72VrzJHM13uS74VS8Rx2QvgkcyNvxuGTCX4MAaie4mN",
  "key14": "2kVhxjZ5GES49ecDSt3yfUN122xeU29Hsrvbsi6z4xaJMHnzF9MzWjvEEc5C9x4t973qoFT5VkMXCm1nRQkjzKm9",
  "key15": "38SmYQR6RWhUXkpjbfRbfR1R3kv1xLY1TYhYaYYJfU9D9hMzWnJWcgB6XFNhiSY5meeks6McUqji3DfRb4vGAkQn",
  "key16": "54Zz1eGqsMtBt1bYdtKJzbmmCQBAysEjxowJ7k4EXQAsw8QmnLPz9FGbZc4a8QtaZgrnkMdkMzNjx5YwoibesmUh",
  "key17": "56fDeo8pbLcL4c6sE6AQAjHeKykGc5Kub2n81vquEgwuoWZBChxociaUVA2YYUdLkk8KcwHcaVa9V2k33n4gv4tP",
  "key18": "3HFow9yyAJnFn3GrwnGfUrPSPQm4bCV3P1HUJkKd82hYrrgFtopvZefv2FrdzHiVFrxtT6sCkpDBmBaGDQHTyeVC",
  "key19": "xQABJcj2zUuKAne227QREGyeog6ZZqppxhxdz3AUVPLVNSgboUrNXA7b922YexbbjZZs8uSYCt2AdmBqH3W5LED",
  "key20": "334uTN7q98tUDFBh7HXZEZM41kSZG39x35R3MVfEvKejDPHDkg3T2YXEseYf1MKEuJUVSPZGwZAkrffeNwqQN3KB",
  "key21": "42ZReYqbL3y52P5vgPp2Y3GUJz8iKm9t1EefejcBETCBAySYLY1UC2fngydRL9NZSdRx9gb6ss5NLZBoucuCH8Qg",
  "key22": "3DVQ4L1oPT7ZL5Fs4cAGLCPiz9f5niRSVX8PMbRs33mWHUvkoG3sYqLCTYqKpaTCyhYD3UeThdqerUcupYR8vziJ",
  "key23": "43MdrXY8S3Pm9wHgNGG26euah5JHkF4bqBdNFA5jg6YbKJ9rxj2uw5vswU3nj61LeLMETu88vrj6GDsDXrBRi4NL",
  "key24": "2g21uByarFRaeabSe262kbPwCYGgaJ3z6tWwsp2DcqAAB3zqJgCoNvdsfUDZwD391HiN87JpGRBDw3nxodXC58Jb",
  "key25": "49NSwzudax1C9ty6eECqJrWvodGCqhnn7MN9P7C8T33M6WokBV4pwSh8kYEcHpVyfpt7DcQkSiabRd4r9BUngH1J",
  "key26": "48NyzRGTV9JkrWdnKxRATBGPrREiDFQPy1TXouRD7sCBqWfdvLVCThud8q4ELQq7BR9zt1s7sWgMz2JeTVHkktGh",
  "key27": "3FxGaqRNkPTk9UWvxQCszB8Dq4YHcWkgPRbdUdmhky1uj33hkY7fRS8t4e8E2CWs4bS5rFZmpd6ZXwWr8CfAZ9gR",
  "key28": "5U1Sgw9eB9Vk1Ln6jYPBuG2zgXD3st9hvxp2aP8x5zdiNbVpTfJqEiP4aQRKk43mJ2LEAJ2dYsCmcA1uheqULyio",
  "key29": "xDFxxLaGvbpZW8XSdgTHrbdUiYk7gDFKU7Bw9xrUJjFsVBfjRsaHQvwNGcvTv8hS8xTqHWFmrrHK4N5iR4WJWtP",
  "key30": "2WP398eTMuD8EkaAmriLT9oX2nVHUXQCBCLvfH9xCxRizxDvTQDv6eL5ZTdQxnN6jgRGMrh7qgf7WDJ7bDefdySW",
  "key31": "4gBNfyvfcpefWdPJPzTTn9MxL3StBHWxea6FU9RqDAjESGQjXbBTV3unmxyz9NuXG8LCuiGBLpzqiUkypoFS2WHd",
  "key32": "247T2Zdtb7KeSD4jD7V7FL84k4K77MVkWqAaazQ4om113MRcic1cBnHSU73tp9RoG19gsGr8sGdnLPdrQ8pHW5Jb",
  "key33": "66JTM38ACigx5bDEHRYgWmf4uUW2yaM91bTvbPXUE8rF8QXfKMx75tryMg8V3tVcqrriEtSjeuMAd6UY5Qu6Cd6q",
  "key34": "2NkMTC8proKrQ2sfikj3qEYJxrhm7KKYcrPgCo5HRxgYGJKhZfLMVWEZYmQ8i6XnxcRRbAjYr4MTZJ7f5Dxnxb9X",
  "key35": "2ji6eNzgM5LQzA55PNPesZhJUhBHQGhhArZS2KGngVnqr2r6R5Zs6Tf9jwU7Hm8X3pXD1PyP11pgBhqsGSHHVgR3",
  "key36": "53LMnMeEJzjxi4yjNhn3jSDMZRftu8TryuZhckQNwAwduLnVnsZaLf1yC4efgbpNWGNPk6YWZxMPF52efhGvKwGU",
  "key37": "4n1dxPSMrCwDcANak9J8PxShSMfCd95GDocQ3TtAS7cAiPvRXwLuHkxhX9pVkWJmmYagsu6PrFZtK8hphJxvQWKC",
  "key38": "5vjLDivB4UiMrn5BwECVDCoqfxDkLK8D6gmqbqZ7LwXTPq5uY33w2oQGHCjfmxiGSLiNWSXpb3r79PyFerfvSnp1",
  "key39": "3BaRDy7CKZpLJVrZQarkDTVmf6mfy4EhDGEhKNV4UaeuRJ99V8d36kJfi2V39XQnCNJwopbff3Za59z4uBc1eJu3",
  "key40": "2dLZwnP15S3w9FVpcZGs1M9K8cnBpgYZabX5Fb282NPgudhZdCyCsDN2gYFbUPffyGjT8jQWQQMkf2NS9ph65oJV",
  "key41": "35nrpu69CgBwZvkP5gZMWaUQC6NRPKt1TBaNK4Yg1o2cS9Xtp4ZT3TsZNwPtzfN1qbquP1UUkUpMqv91zb28wxcF",
  "key42": "5TFT1Ee4pBH45BttXU57eEy6SWdm5suG3fV4PPC9nTsFMbhdsxcZ7RmzoRYkrY7rpMgEZVAHvvr1NcKKoqJLXeEB",
  "key43": "5b731eyGH1fyf9sXK87fABNgyEeZ1aV3eKVFrBNS5CFH3Vjhm1RQwC2FkbcChhfSqGHjyTQ54VSJBQasP1KDQ8xV",
  "key44": "5hv6JwLmyj8e3QY6nhtPq9i8fuxGaQbzhA8bSc5AvaFQm8AEY6v76WEhqW7kTob5Bm4aUQBD8uu1F7tGH3GudKxT",
  "key45": "3ng9jsFsB8oq7rEG75afM77uU2dA5PLJbfZEmqxBCB6WfCpkuxdQDaxQAmKyuGMvH94RwStBnx19akc7WNEc9eiL"
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
