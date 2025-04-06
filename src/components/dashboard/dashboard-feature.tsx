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
    "vugZmChDnqSv2FnXYkL5uzFP7nR87CsWt1De62F6aor9J1vQoG4j9hoXqyT7T5K1tqq49fGyZuuoNCNrGZRtExh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VKdaGft1jST63SL5VncdVHSifKpJhmJRpQGcc1Dt6zuMYbcyjQLdSgNtQ2P1kfQKSm6M9F8Xbwv8M1k6AXER7yW",
  "key1": "33QYZYYAc1bh8tney1JKdhXJpPJfk5r8TupCRiySZs5uS6MEUf94vD1CCHUakxghiBP7CDMt3H8ZaxA5ZoLSv5QF",
  "key2": "5Y6Kt5YW1sVMZgxCFH2eKb8SXjyMmQ4wbSYX3hENMkzArWAd2yy71eMfcT8crKYgQTS1mWCdnxNdBvSQPZkdZJrd",
  "key3": "4ziuKHQ9iT13gyT7mbuaAMDQBTWzTuLMBnwGitu2BxuSsDcmGUgmHEC8fRMMeRWbXNLSXuckHMcrYGVSowXXiX8y",
  "key4": "2NFWhDuRiHLheH7vK2iUuz6U21QARdMj3ds2QRt5RqiQjdgGpf8oNRC9hzPww3ftrCa2Pgza6MjaUCt7AVAxP35W",
  "key5": "zDNzYHy9ikDES7cjdY7ykCDDM9YawZqrdEneizPD1QSksYbv1kGmBzKrL8zmp3WWkUbY4vdd9N8a5xqNWRgajeL",
  "key6": "2AUDE6L5WTyigCvHVJM2Rz7uniXNcQKkrtCKGV83mbKz3PfySx6uSWFbK6sasW4JztJ4M1xQua8TQtmnyLsPrSwm",
  "key7": "33XqbfJPsRjX3koGr6sEVRG6H1gCmhbuKvBCZbp85hZ9UDXB7749NrpnZin7embQGBq1bYmearZ8SaTTwRAogp7Q",
  "key8": "2XedLGe1Vj7oiWhjqfjfrriH6tYmZxAM5kRNrkZ1gY2jGqt7fzAU7BngXLQsbZvKwfw7whk5F9qqox9sTaqdVyfx",
  "key9": "2xQcmZRNFWu6JGfjKzgk6Fmk9hYy3VJuFnBFXhi7TcUt6XioKz9Jtd9qqgutQJEjNyJW5UAg5C73iJJPLm4QhjwP",
  "key10": "4GmR4bCMizbYBxNDbGQYpjc5Y99dpdxrrU16hK9USbtrEZo65HTVeemsJSXy1d9ofSJ3w5mLFWGqzuCz49fUYQEB",
  "key11": "fSY9jQxdg6x7pUW4vQgyZu4kFZxn9FHBeXn2jnpK8YDwaUoVngPFV7pqnWy7nte4ntfsZVwDKmRt6hz4AfPoY9m",
  "key12": "39oWDjDWo2NsNbvTA1sDtymdPFpo6QCFdxT3Qjh6WeeJyp8v8s4MomjBi9fB2CwhcQoStUkJDFQg4VktZuLzXmu7",
  "key13": "4jgHgcHxkthHiG71Po7WezYK6H729GEU2EkVpEzuxJ56kQzNkitzrwiGffJ2MtuxvUaeUn8jeMoWzUiXVyUoygpz",
  "key14": "2bhfr6U5Pz69iNzupXSXMYhfq1L7cXWw4bQSeGpRLBEXz34Sy6mXipu4JTtwzStQi2rJt4NvyQaGEDnUAbHqNTiQ",
  "key15": "2J4C9ixnBMi9PcGHkYpU1jdaDEysBS6GePQ6A11jmL6hpdtZdG7ccHQKbqPh64vrCpFct6p6j2YMxLBScUvd1v1E",
  "key16": "37LVwFkR8bQiP1ShNMpGAraRBtTx6QsFkmUBboG6xnMzQgXsSR82ADrYWG2ziqM5LGX6v3JozWJFT3dHbRMY7QFJ",
  "key17": "61Q5TmqU5HP5FcNMSZS3D5BGxAxBj5Jo4pFifeVuokDA4x3mjTTVtrNWjVPYNjkqg4uoJ16Dz6Nw7qL9PPnkcfJr",
  "key18": "3PhdsZxQFnTd9MRSvC8cob45berRkTsBakdjqZj8qzeSjjKH9VXj5jK7Qp93H8NUduhQCj7HDdQNUMbnrC6LrE4y",
  "key19": "5AkTUXdvBPCzR4Y5ptEpWaJADG514bK9EkDWgjgmZQAkkshaZZKh3zJYBsVdTCChLjXeh5D4GKcYXagmY3wcV2Z3",
  "key20": "3qUEYuzbvbKxDy7dGWLAeFYM8KK2U57b8xaDk2ZzxQLg4EzbBWzgNGZ58Hy2mtGeJAVxRjfgJtLTPCKd336tWxSk",
  "key21": "2TGwBSZKPXqjd3scj6KW1hd9WzrcHHDxTZddFXoEZ87F8q1Z9eEGbUivdmNBzkPvyViLiLkZrigqHknXMk5huFDn",
  "key22": "21qNtdsCZqcSY1uafqBrAtUHYNUqgp4H7Uk8Vihd7DeAbaYCevwvzd784ywGBc7zebk3bCvJzg9AgucoGiktYhrK",
  "key23": "4SmURxMUzeCzhy54S4GwbCxfHqAE6CL3cQ7bQRa3hHwc2X46Vo66KdnmqE8Hw6u4UYsVSSH8HY8oaknVL78J6Es1",
  "key24": "5GLuskhCnGKqoZpNKdkmPv2CBM3Dv2Bti1b9brvLB7X8AAN3UdU569nVQXeiHHQa6nixFiThX7NF5vKJvNBVZQWY",
  "key25": "3o1bRNFZ96UVv1mRfhWbcfhbMfuEkLbogJKNuMXtf5yYjdUY7oBbeHFjCfRhdRaPNjhuFBb6CeQA1FSBwggMfrpv",
  "key26": "5F8BbN32Re92w4XqDeN6gdFfUtpEv8hyqHowAPXTXL2WhaJW2e9GoPy52ezkPFtMcDaigkVxCvpSFf9f5BjRhTn8",
  "key27": "2av17MHhKWL2MJF1x2TodkTZ4qJnc2HPUmtmHZfn4HvM372ySVJPyvAmTn8RmwN2rKmJBT9GKf5SCaARMNmLhVtB",
  "key28": "5HhmB1kdMuL5oVVngcrMKtZ72JqrDjhe34oLjQQgr6hRhPQvQxpbyJP2gxgq2wQL9JSLSbrjdbDfgbyHXTjU6u2T",
  "key29": "3y51fx6728RkngLJmUXqwbyqjeeJ7bWSsNaKpYTv7oeMwPGUnvK29VoyjDgKKvjsSTq7v2LR8RmQ5xKco1zo2xmb",
  "key30": "C5soyc6vqY9Djy2Z6cmrnVpp2FZWPhSVk5bPzx8n1mXQPqiLLH9buuGx364frFfcWSRkdMWCn1ftaHpL9ZZeVcS",
  "key31": "21H5XG4HAbNWmgg6tx84CTGsLAfYdDv3B1upDisFQkkaS1T9WsuVKTPGmt12b3Xn2xiyjicUMALUUJCTK3guH4LZ",
  "key32": "4jvC7t6Fs4ajcRowrsWjkoS8fJkUZpBT4SfHfRbZ1kRe8mLkJSpVV45TXDmMyjqvFVUeU6d7KtxvEJa7kwskWkDT",
  "key33": "3cDDdCavN71L3xfeBmQyPNAoXUnEDmxRJsLiU3XKXrTi14jXfsgXiqEXRskSy4zxDpxDX4XsefXALyEph5Ruzv5m",
  "key34": "w5CX7cRTCQsGr5ASJBuhbHVBKkopJCJQbGvpEcSifGtqdWkFYbDmmDwRpNwQX5MVgGgyvq9L6u65QGm1SYyKGGr",
  "key35": "CC5M5Xi2MgFfDjdRapiCX2bmEYPHVTzCDG1Fd8VgGsos4WKMnSGKC3S6t8z2hgU4BMVZknqqguL96iCZTN5q5Ed",
  "key36": "B25NDoghcixiHzc19oH5WNYDik3UAg8zgqbmpYv8XeZ97jVpiAdzyEnyCGWWFXXUqipqHFaCGQyXUXRkH28Qimc",
  "key37": "3uSPDhnya4RoqCzGMSUbFt4amferW1YHabJgJYdjpeXWd2Pft7VWVjxFM6CkvdSBaJadKTQsx3uNkifxtDKeY1Z6",
  "key38": "3V6eNLWX8AHD5jXZM6JuEB2XHU8fu1MNzYNbaHhoSqrSjcNvhxtPhwzjXTkGdqcLCE4DTedmphBVB8kHx5VtMbFG",
  "key39": "4WUXjx8SabkU4YpfLUWqyqqSg94Hxrn1TNM3PN28PgsaPDSn9QE7wGJAMsLt4NmVcxPFpYshU96u1kXxT3XWFTU6",
  "key40": "2sWF5a5LLs13bsxh1A8Hjft84hh9KwqjDtak89PmMzx1uoiJ2qbBvYdNnKCxZMyKwP7GAmSpWJBmi8U3kb8crtZA",
  "key41": "4j5Ug8GgXDeSTj4wezEciAfnKvYQwJ5Zk74aa9vwWGLQjkZMPezBCV2VSo89iKGh1RSuFtcV5Vyk5C2hHwJQu383",
  "key42": "4biwUJz4hLkHDwrRGgAaxmBNggzMDHzS3DfD1qxBSNuCg4Bbk4noUtj14Z7ZJ6Q3FuxucKavcamJfH8bFMPvLME6",
  "key43": "vWc6fhRE72yLpUnjxLktMPWLcRS1VWHjPK7hRWKuyyft4JEEJQoMWHcNRecTp6c8SwK9pGUAEpcXqKdwQ9qTT4h",
  "key44": "432qyBHZr7ZD13HxHzcYaFEoaUZXhRuLQpaUC4ADDTdAV1Xy3XbK4dzv9M8KKqujVDca1jHAdy5ayWoZYqT7FApV"
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
