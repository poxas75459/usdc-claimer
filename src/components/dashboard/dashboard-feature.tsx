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
    "zhenqkJn3jEQXkvc75YZWF4sWYASgmmZsbEGctzUV1mXwYx6k1T6YNEBY4spAH9TZDTSMPuYjaCDZBZk4z9PBtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42zP4sqg8cqLs9r22JU8J5yC2P7SM9WfbQKsupvbiR1bJ4jyVkzt4ZQLoFjqsRft2yu7RahL9ZV3J7bmfWH7apJ7",
  "key1": "4CdXgBZTLfo5ubYyMFkyC5kcar4o4cvG3TD99NjDKhoKtCaQ8fsbQdoGtNBueV8R88CNSQK51Tvod6nPec6iGBH2",
  "key2": "5x5q1Nd5rpkgvbEX7dpz1NjVrEe5e8Z7wVXLCnQcizZA85pg6VNUcyctBgLXech7nNQF5pKztxx75C2MoSx5RpG6",
  "key3": "63TnoB7Euie8Tb8ET2JNVbqN7fe8kHEnnbwKgvaDtQwf7AnJ3GCTvWyTHazN2mn1BzDc6qfZLszk6i2DyGvnA7rB",
  "key4": "24pNJvVbbVNCRGnDPhkK1Jxt4usPZspa8N2x9s7wyoVyhY6RGQG9Xt5KWJJLZKBrfDAQseHKqjsPJLV5D37mNbzD",
  "key5": "56DATnx7hD95c8rxY8oVZki7WGyH5fnEfmA1yUwKasMNJNBfnbkyHQaAUL4hWDPtYzum1Ptx1x16oSjdq91VpoB",
  "key6": "3TuFXGWp1hpiputpjoNgBiRJ2ykhALJ8BcgWCkKD1rU9RHr4jY5UefiKypmaZ3aeMFdc37NDa98ksgwax9N1jzZk",
  "key7": "596VxTvaFGrJywyuLFFT4tjq3G6aN7vuhc6uwWGc69D5JBFQVKqma56L8yxMt9G13St4xkzQSzcCAV9whvPpUtji",
  "key8": "5KvcChBXpscQaofFqNtMP4K14SFRLHzHcUmAkCkhxThbFUL2Xy7k2K8cnQwTab6ToDXoRFpyfjxYfxg9hFDLfK5z",
  "key9": "5aEzLxMacZJ6GJYi3R7v6hNtx7eNNCNdg1fpwmwjURpTEVXRStExL9ESxfAknsNe4gKLZfrNewf6UxQ7U1Jk4evT",
  "key10": "QkfWMiDeNTX2Y5DHAdVMTfsaUwsxqXU1Q5gNjLYdPF5wUnfhpWcLLvYcn5V9JXDGjqJLsSBhEJVvwiuTQt883oG",
  "key11": "pPwYBWzmGTks2Wq2SW3AqDvzHKpY7ijMaZSKkJxtepmndzRVALiqeLAxNmmGLxnFMWP8UQYKa8XATBG2frpL9XD",
  "key12": "4TtjTwTmrzRgmBzpo1e4BLxG89vjs6Dd7m8995LVXZ2FUXXTz2wdCiiFer5DXuKMNmkp1M8XSXQUCzULBYYe5M1U",
  "key13": "4r27oYj7nX8mFZ9WtgqpuK6jLT1Eu1tnTQQTFW4bJ3f2EfdaaRjpvogEy8W4NCmPSw8q6vVfaEW8xLfiLM7FcLJt",
  "key14": "jXDevsE2xne7Sqt82NDhtunmuAXAnc3B4GwRwaf9HPD62rQ7qg4GAGAbT9sqtjCki4FdbB4M89zqxHiooahppjs",
  "key15": "63ZDgWLVTHwdtTAsE8CXWsS4ZoBgJxdvhfKs9MDmrRAW4ddqpXXkYWiuTcYY4xPhrGMb4rx8qroM4A4Nhath3Was",
  "key16": "4ipkucL1TuRGwsS786TmEbsfQke3fATvmBF1NJTVcKWt5zMAHxKezY4mC3rK4qJYn2wmvKLPXX2byv6QuzAuuqXe",
  "key17": "BHJm2Zj7rnBCdanhHsmmCdQJZoEipJp1TdhqqxFGw79fa7PH7iWY7H6Tk8caYX4rjQAtys4BHJNhEGFa9VozgoR",
  "key18": "5kSCcHHoG2pw1he1uYy7geXseEwqCJM2Daba4hCK6vPGzW5oLSPmUEPC6CLFhPdaVu7WyRHYPn8DoE2S6sTTEtRg",
  "key19": "oyrC1tqTP3toyLFgrJ6ZjZcRkjyHtErWfPx5SHoCy5P5mtkPYomFoosVDiYMDdAVtUNPpydRwQc7fvn5QHi8jVz",
  "key20": "5SjADeE2NymFXtHduddMxBULRQveRrm7ggmUnQHNhoEKKJNozWV42HTwce65p33rvBFy8j9i3u73RGngJUH1gufb",
  "key21": "5Ywfrd7cj7dWL82VviZSEhzXtZwLLeFa4idB4ksu22KyNxiTK6oV9cR9LYzRyyEgdsBiQ6qZhj9C1tJByUYRBy9f",
  "key22": "4gzhp6KeXcC2vF1A69wJ9rwH7Db5K5cPUkmpFfavz8M3jut2uE794c53J5Hik2vQ2syrp9MQ5mbp6q7A2aZMpRj1",
  "key23": "2wsVEirmshBxeCG6g8Rt8Mx2HmYtw5hgUffYf1XzYLusoqciFdfBX2TXwSodwvk4sSK63SdkK6xWzxupXsVua2UV",
  "key24": "1YXHQvu4mZGbC6LovpVfsmkoWTu8mzQ4HNxgmmdzG6hDQfhKUeNz7uDf3nqHrn8v9FpEtsN3657czEfLih1dkzC",
  "key25": "5YrTuHDQKY1Xcnpgomnxh9qcxMyAoJLHKuspzsVG8S6JeLfJxwzybXzyqtMdTX23joWamGtbxDRXgJoqXvX2npu9",
  "key26": "5Vu4ULzPHSVwxdmnGomREmxehzYZq1zh1KpHtVE3bKuLMCnu91wwH682Kysen1eZNMd5JLhdum1bKDkPWBZfU8gN",
  "key27": "5LXfT1jmDvi9EnLDVfm9Pr3oSSMsFcyR4D3ziaHfNHykEe1N6RJLReFAzGX9VUuNNNA9jcyNJ67c9xohscoAgbUZ",
  "key28": "d43oLXcgN9pYuTSyg8NCpXGzpXxrZFdw78iZDnSSgQ8rcbiJwbGVB1EUsh4AW1w4JH6bFJzgHFg6nJPabStN7mt",
  "key29": "3BbKNvP9DCdQ1rAka2arFrhGYvaTRr6vT5rk9a4HhusLQfdjzsa4mD41wPJJJwFjDXRqzqEqhN55LRXWsgDHHRQ6",
  "key30": "5WSuyqz3pqVWvffiYLj7NUkG7Ssi8hsaP97RpoHKnG24pGt1mf6CeVquj8BYniWVNUR9kpjvKYKrtyCoYqtSvggu",
  "key31": "2Nf7dACdVQtVVWFcCy5wL8nRv14p5yVBnR2zN5iGvozJWUtqKWf5BFX2w5iTfEhAytjAVFhhSJ5PtCtu26goZqxZ",
  "key32": "5Cx3kJQDrXGNx4iZkChxBGLDnu9QDmWV3CoqtGwqyBPKessz7DPM89uyqku56QbsHrDbn4BKd5Lt7ZHVNG8qLC2G",
  "key33": "jR8r1vccLe6ykdbJ7aMyTnafKvyELrFjSbcwYRWjrZGc6YSJnrDegYkrKR5owoRY7XWk3WgGiQzXBqByxzq2xz9",
  "key34": "3dRxPq1QXrr5jcdvUeeyQyy7bU1V8Zv9Fekvgrc4F1NkqvsQcDsMgjhBrNXMstVeEVAWkkSYu6BKfs9zJ7bNJvec",
  "key35": "4p4yn7pAw2JpSuKfqvjBU8SMRiQyjdsXE8aPMdGowbWgh6P1PRwJy5CKscpd5jsTrA3x9HMNHDUbS1RsHxf7qY31",
  "key36": "cucHLuedMXfoRh56fpRKSGp8jYe4k6UMCuE6cCm2YcfrB2CFep2nHnjU6XaiFcFBC3KR6uLYHesGGhxkwUeEHyd",
  "key37": "tM8NHQNV5whz4Bmpg3Dz5qEdr2v2JxUTNfAu46qTg9jw1S2nDz9n86caqGAFyZJwMuu9JKRi4HV6yXwitUrGHsn",
  "key38": "2KXgnP3wTiUJL5hngftdmUVgbeLfvgHJWQiAkkoRXXTzkrXyiEYYnkGCnjNwBy9bkB8QY6ApTzWFhgyxXerkHUK2",
  "key39": "4sVJnzF4eXKB9wFoU16iBw3hRpuQxyUWQpsfdryW9wM5vJSyBQ3pnw6MYh1vupLm7cMD51TwULYtpq648aSjcPpE",
  "key40": "2vD4xMfj9wQ1ehXSa4vSfzV5u6uuSmyW6e3RmtoP8mBQEL5yQoX9ggAcm7tA5NXYuvyvShuzHD3iDdFRqVmLXiSY",
  "key41": "2C34UFepauexPJxoe8Kf6YB3QEcxQDrUvNaVUu5sV5mGKpEo1pQ43w5M1aqCMhVYhENAXq3BPYtJRSm9ubFpJVbB",
  "key42": "a5myaRVupuhjpj7VEX51wsMJ12bDTDmDduGpARaRSc6ze6zVNYdLrNSGmje4fg6HWzjfKqY5RixLy5JdHXAitA9",
  "key43": "3yUfo2KW3MATsDNLCA9SAYj6koNteAj8u6w1NHWb29zw77N4a7NeQdwcXonkHkUx7AFPu5jhBjERtf7r6PNVMpNL",
  "key44": "48kmK3NBjZUMXDPsnS9n2P3UkhscBK6VFRE7EAHNyQnrEQAZ48xQoRZ88TFkEvC87g72RGRWfs8SSM7fvXiywSrT",
  "key45": "4s1dy4chEV3u4LDnWN8XnQdqHb4LMLL7951BJAdBkZZfkLTLEQqht1ChKuZQePo9QGgEEmMjUXviZBvMLEbnKSk4",
  "key46": "2dNwELnquGbm46oey54KnMPBHNgd3y5V2zb8k6VeS4rcJWVj1d96jEhVjxdtciNdgHoC8G3RAJhwa8ENTLsBZu5u"
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
