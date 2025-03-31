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
    "23ickFPZw8xepxK9pVSe1YECspt71KgUDRPLZSjFdS6HdBdR8kG1hY1RFbzAZ7nw9o7M5p7jLYR8uoYCxZe9THDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAC6MgbMWR7krDSK7Eakmog5TinL1qo5b8YdQgFZurf3X5n5nh3C66NyhN5i3nBJXfoTQ4StbyvVjeNauGSQxoJ",
  "key1": "USATF92D6rWff3D3WCtZZi2fbbXnQVyecPJ5BVStJ2orC1JsScb2nKdd359gSNoLtbtGB21VYsmmzDycvEzbarY",
  "key2": "3V8NEvZjrWPhVoXfEHPKyqyvt26dayHkdiz4vTy8dEAbUCrpj1w6bmLKEU7pF4bL3VzwQiXNY7XVT1mAWkA8fRga",
  "key3": "2JWMYexshraCqAzXjiHqS9TTk9SgSN5spKeF3fJR3184yUt4F78hab8NUJf5mBBH1u4zsXraRneHYkNVoEiAcFhT",
  "key4": "3w8rKEvHnijvsUZwcAnjTvPmuh3khsLXfWjVUkWzevemsMwXYosWvaAWeKQyTd9oNeEPrLVq5TZqNczVAZSBFr28",
  "key5": "3vn6vEZuKQTEXDGn95m3zBFEfKSQCkrjigRuMzaDqLahkXcmZY2KvNma8GUt6LNBxNSSnMxHiSz5Ztz9KvExLAX7",
  "key6": "4XDXJFwjBY268FZCBMomtCCWG2SmjbaGnxq89vLrPW83ya61ZSymLuCBRQc3NEkTVLN3LWzo9SkA952ovGfhX5uS",
  "key7": "41H3Akpbm2pR925dtPiYp7Sjtyk9mNwRb43JbQwq5yxPcNN7iPVB1UjAuBfV4mzubhpyXxeADdzxz8VpCAvCdVG8",
  "key8": "5tRj4HQ3uUe7z9eF5ghw7FEoA3G6EMyX4E2wp1DxsNLFn59Q9usYLKogVwaXxoV6NKqVddjyQaweei46ggv4N1LY",
  "key9": "5Dhbu1gTkqgNo87MMBKH5ogSGJqPuHSpQRZ2rzpN2pxtpR7rdsYxfHq1TSUYeYdoomHVVXNbmhwXqz75ZPUt8XTD",
  "key10": "3LWNYFuJF7CWwCmJxdfkYWxVgTYDuv2B6m6Tas41vp4RkUwr3eiepBAHB8wqLSQgf1KSBrpbwuit2cN3Ph9Un1fK",
  "key11": "3pJCZH9pexmr8g8bNg5knNwwcDAg6dtGvKSPdJE3H7e8fp1gxr27VAZac58m6NouNXDLYDu1L9KGJPr8rrx6TnaC",
  "key12": "3jvF1o2edC2rCZo2JWLNfRQmoTAsEYAaW8fC6KKcTs8EeXwNiC7KCnZLViGrxhuoGhFdAGqxfYEW2YA7vc7KjtSX",
  "key13": "2wWBgfSvg1RmU4ojwr3SUe6pACuiv1aj718MQFjvkXrTPmfE46KLHPrXq9vwnwrvqkqvHBqTvHKVcaiUEsBys81h",
  "key14": "4qds7YbgG76f3biLkvdeJEbBRaLGYAQa4zchk7Fgj5vd7PrZneQcnVzhm45syPfnw5WXRXgz83sfhCrQizZ4U8zJ",
  "key15": "2gXVuAGiD9rQSJFMiubT4zmCcfSLAbDtyQWex9PhsAtMtqAWUZUSXZ4gZuGwnkpXDcf7ZuvwvZSSBWVHyE1CtKii",
  "key16": "3155qBcTF2LHPsUcUn6Sn1oa2pGL6BT1YvAAKa8Pb1d5T8mr8z5nQ24PGmfDQuQQ3ovQtuhWsUz6eQLTvjKnATqk",
  "key17": "4axk2pEirC8cSUDRqk9QRtpnfe3gTskmegfHUVjUzrL7FDmmnNwBmccqgADrk5J1J9h1auyJozKHxMaVVznb1Ymc",
  "key18": "4qPgeFrx9yPfSRauzC5i5GxPLJyEgJkb4twNob9inwqXxFgMjjLX6bHYXvUUtamHHwZLfjvtbLa9Qa75EZ77p7iY",
  "key19": "hQphYqkMtk8WUYaXPs5u7rMuzArYMHFD74yKFrTe5NLQfHWY5ihAYeNjDvogi85Csm4WijXfivvjSn2gb7FLzj8",
  "key20": "4nLeVijn2CnFqVZ4B3qDorxHAs3mJH9BE7rPjjFzL2bnfHfS1z73woHpy6gH8U7XUq6DBndvxFM9psTgDDSv6enc",
  "key21": "48Ji6EXJDbUV27ApxvSaHCN32fnRe2jKMN52kLCgaRxhLCyNdqN3mWTowhSWe8HsegLht2vop9SZR2HkJQC7ww5j",
  "key22": "5JU9D8MDrWTsA9vV5kKE1P7xgjz9YF86BNKYVt6CtBbywC47QGV37XFMFgtKHZWM9JMC4ExeWTZaK1ZfX1aTRPCu",
  "key23": "U5ticmueEuT9xLaL5LeSVYBM8TYcAi1EZfP2WQ1TC955CrdHzPd1Qn5EwWSys3THzaz7nGSBxPftPd66NuKbJaj",
  "key24": "jzeZucSr8QP3PyJ3oqeFk5FEqHedSCxqy7hSJpbJEetiBzm281bqmyeCszqHBLN7poPBZgnFuwkWjjRDsdfhpgD",
  "key25": "2wpd2zLzEJ1VUDtipyeDtD9wzVEn3dJa6q6rFgQafem2x6wsVoGLESq3cHP8S8oBn4PLFqW5WPD4vgYfo1vcn4PQ",
  "key26": "2fdrfLJcv4qJnTfjYgYfhgnVjFdgoBNWsSB56zUKS59XRMpped44TL6CiqCKDAZjyJDeFRgnoFxm8C6jb5Sn9Jah",
  "key27": "4JkUASsXhWkAGPSDLUcwdD5MGewpYqZUqnvDvKS7Q52rN3doSdEv6QviZL1JdrtnL8GTZqqHFhN1cxeBwsUTPG4u",
  "key28": "UTAEZRF3dtt41D4JMUiTsTcX2g2M2SC6wkKToonGTp4iffc4ZMpE1MvyyXimYuSWnDEcwCJhLjkjsTZzXFAo5Jo",
  "key29": "4UTE1cEKn264Jw49JxJDftEExYDLj33CHDbXdNarNunm5DgZtXhZxH85saKsVVqJiVWNAREFatXfX5S8dprwKbSy",
  "key30": "3Tw2VuQere5WoScVFdcHdcbCGeL4gtKCBUpx7mnR7xJkK2awN8kJ7mBc112aoEP9dUCyKpb8aHnG8yD9GJyn6K1k",
  "key31": "yfU7fiRqpJ5Gkk6NTURosFtELLqTkbLcDzwz1BtaYsA29MhCiudiEV8oVAd1ibScH9mjouaQcLqwkitgE1kuUWe",
  "key32": "2hPpjWdSNnLQAsTwhrpoMXoX7Y4C2knjNR27dTmDAKagJAE9P4XhyNU7CgCqiWoY4peMaXM2sqWfFsonhQSKozRw",
  "key33": "65GKtZdbTva9AFwACV7MQq7RNoqVEfAAowh6kaCLBQEu4ot7zTtBgzi9ukpr2kq8LemDjL3ee8SFs6AvJZr7YmtT",
  "key34": "26K1QHxXA1Z4bfNfefGfdcPjoL98eVjVSPiPszdnf16Y3NQyzHpDpDZQi1nuLgsunV6EXPNYp1nYjUJbSaPCyZY3",
  "key35": "3qjbV9wF67ApN1P4dD1zSB9omap4a5gCoprDn7TRxyKhTM3tz6NMuReWDt1t1UGX4Rzz7BXz7Pc8bUXZwiuBBQgL",
  "key36": "3hmyvGFnzp1cBkqttp7ArMkjfebJFB4G9n7jR2DiiuDXQGrKPWmXZ1g2qqdD9Fh93uVtES6vEhAJW5M3VXRuZNXC",
  "key37": "aHiqnKrLQFvSWFPHMHdQr2Pkvopf8NdpYVhLFc4pmvxGnsmLg9eQ1GdG8q7snM4hZ2BoTGVrZtD9i8TmMKeJAmU",
  "key38": "2Ur5iboFLvy73dh2MMUfSGfiMHy3gSyvV9XT836xU3rFhfJrSgKEgeHG9GPjzC8RDae1MHv4vQbz6UuxqCqTjCmS",
  "key39": "1NhfWrzUZSFMLoUk13PG7jwViK6TRCLY9HVpSiGzWhpDYwVDEYV7ucH6CVodkji9EbWRn6Sgk7HKW1psL7NLaiW",
  "key40": "45sM9W3RPKjoZDJgSXuK6HysVg1cZMiF2YnrMs5PTZAyJx1HmuutVFEL3ieJ8m2zQGvPhUGnzdqFRA3iw1YxWT9y",
  "key41": "ZnfpmwfqULxYKCN38kbtyuNKCSMtZxD8GtK8ePdXtY9ErEyKZ49X2r2tLVPqACHAGf4C25P8uKVN49L6R6oawu1",
  "key42": "2NDsb3SBjyWs6geBsBVtB28ae9GkrZ25YPgvt1zZrgLBtZiHzRcNw9ccmaLLuEcRJjJShgHACpsBqtpfjxdFmEbu",
  "key43": "54r8tzysH9bF5ArNDRMopvRZv4RQZBQNTrmh5z4eie5Tgrc6rKoNKLo1gtEU4hMwKJfZWZ7JdBwo9Np5QYn5XDTv",
  "key44": "NdCyd1faip5FGNkEZ8f1V9hA8U5GzshPoWZRK9d6N5CyS1WH7RkbvkFgngDVPjas2Th7zepP5UA5gpR9dWdtnVK",
  "key45": "3NPy3UGBd5Y5BzzbvdKBhaBkAJhvursvV6kndHo4eqgFPTwcdXL9j773ZuaNb7A57X8cDvSnz1tDQpuD21ieh1T6",
  "key46": "4BxANmA3KsEsZWr7SUMMaREh8UyRfx4Q4UShLE6dnnDKVd2srRD2EMdj1HK5MEJXXBAvC7o1sro4HqbUF78GXaFA",
  "key47": "4VALSTEHMSRogTu8RzQkDtQft7bfFjXd9q9zFdsQF3yNiKvawzj1GrX6BaVo4ArEX82MADmqc5M2ymUJ7zbaGDhM",
  "key48": "2YwtwCWhapW1UTZDqvQk5fat9dRKxyFjEuMS6AwRvfPfZJPZfKdStrVM2yh28JsmDZvxVNJTvjcw9swULanXHMz7",
  "key49": "dT7pswWCBTneM3t5jNron8cuq2nfVnvThJV7ejLd5KmHMKHY486RbY1VEhGUZPHwgk81o3MQ4W2A81rtVDX1CzU"
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
