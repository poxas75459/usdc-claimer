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
    "2cZTKP9UsQpUhNMLHp7f5MUm2Ra2vKVny2eK6v3wgJJ6KHhmw62pt6S92jbkEn6XHdyep3wSuZnXmCnghHngXnfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syfoXwmh23NwYC1yZV4CfBag1NLbBiDgo43TJ6G38mke6p1XYM6arW7s5veJ1mpgvqhr1a52rduXFyVzHt8Cpnb",
  "key1": "5t2qmd31zi6bUSzxhibPJyDPowmY2SBD9mCdWkuRRyRNdMmXn324NU6BV3W2yEW8s4rqFX48AqNsxyacye3owDXG",
  "key2": "4S3BWhUVzL3XofTJLFBZL6SGvfFvPCUd28MX5qc3vPMyY4HwX7AWr8CAgV5xexs5BLU5ztnhZAUqmU992xjyA1YL",
  "key3": "3WxJj4JPEGDezCyPnL8dBFnxiMtPGk15J9NSS1b7odvh8MGKS3aqMsWPS1CzGmds2uXohLaxjMD4y1sBDYhywjwt",
  "key4": "4zbqQs8kUeq4mziUgmSLV48nBtf4ZEA7QYFqGbtG7taVygnEksAu3bDcHZHMJCpaXCw4gKf5NzeCraHwzMhXcAT8",
  "key5": "4S3wQo6iCRoUpkVhSU2B6ojjrfQXAVJrAyffRQpcNZEkLkLr1afMvQY9TkkpsQAGuwGsvMvnxhxoJ523tUdfDb8n",
  "key6": "63cB7xGb9WqWFB73cFrQwnfRNwt5Pdt4YZJu4vD1LfFDuymb91CvPK1eYa95WwekYqDYT6iHE3D81958sDWKmftg",
  "key7": "5aD3N4UFBTFfyozcCZcrFWzW8MNjqKZBxNNA8WuUVwHfUZN5T5SJdDPiuKc6Y5iXZKgvq7d1Vis66C8ZQqNz15Dq",
  "key8": "5r4FV6N9363VHKFScehve5j8LM4HbuUgKPsWTjs1bQqp4TFRGrge2AKrMaRqjb7yHD2gJ8oR17iLjeDeKqfE4Nep",
  "key9": "3yrQTFf8WejAhdnkTKiiEwr2EQx2tfu88W6o1sb6r4R1NYJLLExFjuKZZLGjfRAFS6MvJ5wi3LcSufjqbLEpAMk2",
  "key10": "j2r2xU5ZD3kBAHrmfurYS1Pkd8Fwet1ZT8cceD2bdYPwvAF6Krd6gEH1A1n6AMSW9Z9DsBdgKjmtSvxzeQgCy5G",
  "key11": "55H51AhsBWu4dsf2tkBvaNEBazwM8RVbGTd5YCGwsHKYmyUcWRjuQ1HvXYKYGoxT8Gooi4f8cNDAgfMK9vfCkHGi",
  "key12": "46zaUCx9egbByxif91xrGjhTGngDoFo2TkZUY9pip3coxzemCQ5h2BUi1K6QAPF7TiAbL6tEpeU9Fp5z33kbyGia",
  "key13": "3SHocC1eWwbtnpjaUzVVtVL73sKGm11h5CSWF7SPihych4EEAewnxoAe5EMD8VX85x36BjRTScYBaGHUeiJhoZ1Y",
  "key14": "44p4XkExFpSyWt9f275mtniQnxamfy7LkdnzXXhc9saA9vCc19w5kwuYgLdySjTizNBvJbGmiPMfjGVAhn58Fkxw",
  "key15": "2NQYGDBMRezUWaeD1RVNQvM6pbdu2k42vZX2nw6nQLyFcx9cfyzk1ghoPuBqVzpzh6x85cTpe4EpYSutQM2BG35G",
  "key16": "2mrgr2Y1Tqq5quzK48CF2M3hKY2gUT4xMm4eaKQtnLgKb5HNHj7NuNaepZruRiNaW4fJgLgqmfLSF1KPnS2ieZ7Z",
  "key17": "57MgGaxBgrJJFyshEgZxmVz2CrmFgxGxHbtzXfvkAi2qBg36b7NXFVR9KZKynWxSyd2Q7UFmxdA8iXqKVdWBWqwE",
  "key18": "4xG3cW3AtPD9A7N3ZioPmR4ss8Kj82UBdRWkTon8PsveWuFqvXfr9sEnBnDPrmHRfvNo3nn5yUBjKKJxxR6in1Vj",
  "key19": "2RQirT6KRGVukMQiwN17yo44j1QkG14R22Q8mLCTd6xJUMsRAhchW9ZfRh5TFYWYk6jQvrTLdyBQrf92TpycexUG",
  "key20": "2sE2cYsNt7YvwNwu3e7YKdZmaSXLbs9nfdkep5oM8Qv2CRRSiMDXCMxwQoDa38h7X9KnJhp9wuxcBEvLEMRnKQ7q",
  "key21": "H9Fhgif8kNCboxZy2pYWZs8FwbmBEXrjiQNB75TFpteKJVGkdRVTZySaBQXmfbTVnX3ptYMNpMPJvzGpUT4VoUq",
  "key22": "2pGcK1e2LkAAzpLoAGkTFNbBfHiEHJEoxgbhydAC3PRJCXZazPkAVSMKkJQAQbpca5iQuqmg5adyy1AuKAtqpRcs",
  "key23": "2bw8THvXa1AnYbFATWoXHkP6uNwZcWjDDEQ1G15sqYfTsbJuxoK3o8FowfMhyzKQGSE9LptcdPN37Kt86Uv3vAQ6",
  "key24": "2XWa53uuhJdTWg5f5ohk9GBAtZjuHip1nWrJtnBqf3dbQifpvpc4eum73wwjVAED3z2udCw4bdnVKoLhobv3ncN7",
  "key25": "2mARW5nz1ALGfHCHUXekSTis3gAXvW5Ad3Fo7UMcGDz1hC69zgFzVziwFa96eB55d6eULQF8K8SEKDngAbGiN11a",
  "key26": "M63vPkuD6SxVTPHaVsXswaMu759cskcJZqsmPybGNgdyVEVrXxEn8tYwuUBLipYM5YZXz2YebmTvxGyAwCETEnM",
  "key27": "4BEbeVLWpEwgSXMXDjDuUe7bMgm1RoPeZ1yVxZbnroWNrzrqAQdCk6kCfzEGTaNV91wrv1GGt1HZsmBCxDV4p9Ta",
  "key28": "5cckr4466gGt5DxVGYVtVCrwwCNtCGzPa94KgxPA7cGE38R7NMa1a3B7Jt56C4rAQQNcsEr52v57u7CjuKKCfPk2",
  "key29": "45Ybx6k5przrhG5ownTv8jFA4YhbmJ9uCxWsTdGzut9Tm5Csv1K4rTfCnaLoBt5A7RFjZUYasLsyQ1CoSwipzwbj",
  "key30": "EjvcoAXGBUbdTN6whhiUvGrh8Uc3MUE3K1PGUsAVv7y55WQDu1oMruDCWvrQhtGuHV6pjuZURs9Rz3YMLUh8TCV",
  "key31": "4SsUGP3ay4GNNdpoUgjGFogtVdtY4FD5N7g3ojwmWDaSUxCU2io6KJ3ne3MgQ6Bkt8QYCyPZghPgecoChy5Pp6Le",
  "key32": "M5dXHEHm1UhKgb63fJFLQNTNnJtSRfLKWAtdNcVpMQ9RpuJnah7VePa7GdLitp112mktN8TTMitmp42Jkj4qU8C",
  "key33": "3s53SyYzwB7Lur5JSKKDuFiWyw2sAeFAxk4gvUqJn8feQq2PxHmoBMBJDQFAFSFJ5hdkbbvMp9D2Qv2zSKjQKfHr",
  "key34": "2rMRggdC9Ruxeam65praNksPUdZchdUZqnchkx6VAxCgJsbFHonYbgfXhb4pVxd96NwW9pj2gomumvfLuSp2vhg5",
  "key35": "4sc3aW3TRm8RKutFiffj7aVkvAwjq4i8zMQNe86jsiKxGCNr3TYT2R9waUbeSEDy5ScQpEuZhinENMP1WWnmdX3m",
  "key36": "eAU3d5Biak71VKhzZSnabgtpD8XamckQd7UPUVaqGVkBX3o1gSDLZCaEfDPtinbnfMu9g4BsZpXPgeWs3fJTLbd",
  "key37": "4bBt1tnYKqR3nMquNpozjuNKazbEUKx4XfPEfX7WpouaXqoeiwAUHyjCYgVdzYFRNs2subZmYiMpN3tLHXRihXmP",
  "key38": "HT3QQFT976cZqmEBtADB7kQFPHF7boF1QiWTtkhpYN1bzZ97QcvJf7za7Vgy6or6MmZtWiEwBXkA7uqCxxUrbfC",
  "key39": "5xT8bB7kmdQTRKPsRE9Cx9DyfKbR4t2fPRbxvfNn9AbAE9QGECKLa2M14sMjAQzb7PNzcBBF1jVPkCAEZv6LRQqt",
  "key40": "5VZjkiLU6DbWas1nSk9afJcotAh5FFBoYTfLvefYmWCqK2Z46mtVbJrGxNh1dUoixf22SeFSzLijmrmL1gKVMSJ",
  "key41": "3LrtWDgc9VeNXPLKBtiArXsrk6bH7v5JXRXoX4KDg4WVkMf6hekQw8qsEWdJzZ91612CWKkg92P1xsrokGWTYiQF",
  "key42": "43v7gobM1kxjzaKmxbzRKK6kbACEFjPKygEsCGHoiXuw8ZBmNZ2EcziYKcoFJaZ7invftCMntUC9u45GMDBg8vSc",
  "key43": "2FLi9VZB93RLh1pgo3XhnJp554rSW2hp8Ki1HXPHiopF3EsbiXe8k1kakCVFm2g2jpxtug11a2S8s7aZWiVDmhgw",
  "key44": "5TgEQ9CGVL5KrsrQKdgAJGnBAUYuc5i97SsVmg4jNJ9Y8Jm8SarDXFVsU1UEcdQV6PidC115qYbNNzMsEco53kSd",
  "key45": "4Ygtorcuab9kQZWiiFQYgPt6bi7KAT8CWtXCBZrYB9j8WMMEteUs2D6XDiB8bRqJ7JnHm1cV2syf2ixmmqoGDZtg",
  "key46": "3Doqkgb6si6s48jX5mbpSUDB4anbCwjM41kcBoExNxqfYeiqvYJdAEGiSDMmZJggRCNVC6KyCtyuayLFt7JcvwMu",
  "key47": "2G8sbXqeCZoJHZwPew515FArCnCD9bP35Me2mvKrBqQeJ9bqN5BJARoYaNW8wu1yuiawshowiqMGSdmJKwAEQ1Gr"
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
