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
    "5xfPYR3EtiJTbuhTqm16ipU1bEfWi6jjwvsT6ftPh1vWTqGbby1wiENcVczvUVXtyXR89wf3fRe1qxAKHKAW6eMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67r8geCWyF7Du3Pgt9bXR1pwZicF2X15zUxh3zueCwikbi4mAJj6cp7oDQ73EqxKKLPeQmswMoHZ4tCwgZVUEike",
  "key1": "2JxJERAzPtZHD29fjsJyrhPotbHSbabzHu7vhx2rR1QRHZeQ8gVqDqLHtfW6oiDyHiti7XjK4Yh3YKqxbmNQRewK",
  "key2": "2Vv6i5rJzV2PnuKkBGSx9t6qDizFXBW9AmCD8iUBGbsHPU9qWm4AWNeEzqqJZccRb8kLHWzBD7Psh4epWLZkfsTw",
  "key3": "5JHK51Yjmfuqpuhrjhoi2pnkyxwUN1boJ5peZ8K5uSPJYdFtJp9b1ovgmNbkT5hTMYHeto3KPdjLHii4V4vWAAXi",
  "key4": "5QdfsT7sqaFC6RaJsCAnvxmEXGRqcowzG93KGUau4qasGB8AMCxod1wKqC2BP2XV5sfFgJKnEZirUzG3tY1B3Qn5",
  "key5": "xxGcywaCVcLYNDZYjFxVwYw75fYCh38a1BkPP3NMvPFRYA9sWR1GM8qbwX6AHwz6dYXgHKYGi9g2QELmZiAepyw",
  "key6": "ymzKSWExz87JKUWGrEJDog3gp9TdfByckFmkTdouKRRUW2AEFQ31k3bHnBkot3CQds59PeYv2ftowZNuFakNF47",
  "key7": "2ugYpqBBGDAZLdfz5i44XaPobykfsNpKvyePGPww7Z7V5dKAr2f28Tj2dBe9AmjR1EMCtCLQgWagE7o9FrmZyHYX",
  "key8": "2UhmdgyyJrQZZKc5qxiNfHywZ5MYQgkrHPVMTHaxjnmeJPXaHTGKAkAyYeKg3hXcAFaHNuGpsDQbe9LJvdmWFaNj",
  "key9": "5cDbjuF4cptM9uHb7TFqsKGnQHpd8hAxBQkaiPnPe3jBKbK83rUth2pHAfTStNanDuCtMzAzjiKczPwqvah8eiSy",
  "key10": "36xhtWzfQybLnXotg3aUJ5vFH7HSNTJWJ9PRCU9ztGpRuM73bGw9aDuyxzua2yh8gS2yNw2YTUHhfWXGdaSNNEs6",
  "key11": "AMLYo1rv1HU5nU6a6efTPDxcqzLN37xDRVgtb9kaPmVW2VEUbkpaiowZVQnAvBmkEthoBCLk2xQXAzGn66PUVwG",
  "key12": "ivbX7PryRNcHrfQeZ1wFPQWNM5fiBotLM8n3jiEeKJPZk9QM5XDGeytjcTmCkJUHEka8cY5HwrKTUyCxMK655kD",
  "key13": "4mEqbEyX32Eqn8oU1Wv7Xm8tfEgpqobKcYjf4k3hVUhTPw18eSkV35aqo8xJevmTyZKQivhsTDUniavdag915BF7",
  "key14": "2qn2X2yymvRbVb9csnjrMgyAUJqjHst4NccPeSY8f4CCR1yU5v8XKf9TYxYqVSa4EzpWTkw3cAf599nEbntZCmf6",
  "key15": "5wX69wg23LAjZWJgG7GmLGn5smGwV8deBtuH14jg1a4cJfnjGvUYZuq2V6tZJtbNJePLquzfwqnyWN2betpmBxj2",
  "key16": "5Fqz6YtsNUck8F2K4NWU1HRgtrXF2N4PhxjgE2Vndzhb4LxEx6jMp3AAy7sPvbAijjmbP7ovEBo9JWyDcU4NzSVn",
  "key17": "44X8PUZPEiEBc5iEszFvuau8CLZiuj8Z2Ki6Eo7yHoRZPwRqacigy6nUVg7oX4KxrWd7xYGK9FGsaeWVfa8HAsFc",
  "key18": "5S2SgUe7Em1gBUNWZA3fG3QzwTnTJPeupXdPbK2EKvZAtY3g49EkwtzJVMhVEnjqQqX5oeHiYbwqjMsPcoc1hEEm",
  "key19": "3b6Hs86roPbGem7QDgeMK7RWmqXEvarmFiHTdj172EBnur2fLPeSrDL8EodRZAq6g15MAhdnVn9QehURt6EfTVTa",
  "key20": "4EtNz5b4DCrDPUzrEiaZMYuRFrCkRrA3bmnobx5TudrjhHmzwPhPQJCSKeicufZx2fSCrbCqLgoeS31dALeQZ76e",
  "key21": "2Epv4XY8D1QFEsQvi9M7GM6F6xsuf8fCvgvwWNwG7KY6vaxyiipg1bnN8gb6aVFBB6dx9LamKaFehzmDywVEsNz6",
  "key22": "2dpoHDRfXbBek7ErMteT88mE9vnsUp69mi9SHzNUHGYd3sFT66TNCdsjns2MdqjdSU8mji1cxPU7Uk5oXx7pKmhc",
  "key23": "2y2NQ163q24FqS7xSS4LGYnZYiGwXgL2HZChjd2ghyQadJHw83XKyXzBh4Hh2DqYRu767ZFP6Sf3baaQFsBSCJ3P",
  "key24": "4iPGeG8Lf2M8gGjv6wmFyEvigb8Xx31a1kFW7inGJXsjzYDj3Y3R2A24Vkcr1gZ4c8XePCQaaLvS2cZViQGbmFVS",
  "key25": "4d9Q83zg438FQMD5sqQFT5x9f6FtrTRtnJNn2TgituBFk6BY8PpH9PH3VcRrbmp3gMprrrCQt97J8btXTRM5oXmZ",
  "key26": "5DmXcpUHrGgVneLhvJkMhqijVd9zRVteNta2NJr8qCLpWcXw9LZ6J1qrqi3pZia1QwMAeYfBnsN3WJLULwdcZzoW",
  "key27": "ueRW8HCZwcph35VzbwE8ZqYf8dR3KxqPmt1woveqRX374p9DuT3RBNK8spkYxKUcKjgKT4KT4J4ygek8Rd871dV",
  "key28": "5AmoXbfXQoQ51yjHp4heu2MXiyxd3TTrSFwSV214fpT4aF6EiAqY4gQJngsFmLDsD6kehZddBxmoxjueGcRdoKNy",
  "key29": "nxdHsqDYvNmk9vpDtK9w541AYy1N1ZgJCfpic9FkDK5xo7Uro1yiUYig7DxR8BV5jRm97MsVcj7ab9dnu6hCNqT",
  "key30": "2266tsxqs5s6khSssnt7brbHyuuo2n1Z6PFW7HTt19qxzYqfUfzStVj5TJK74y5v21zC6H8L95JRhQBuJ3NNcaYo",
  "key31": "53Fuo26WDmgtTeFxyew4hLHHvLNf9gr9UvdDqvAm8gfsmLwvVxHUM9HbVBqWdkz1tJbJgrMQjbtRTuy63FUeiWNj",
  "key32": "51unJM2AtkXbYAA5UN1ZuFZDbuFvYjBZMR6dSaJzBHsjF5vXZxYRk6HmPDGP5fN2GFXMBnARRbbgSJCQtnWtTbGj",
  "key33": "7EQ8h4wmX5oeh5goLWzeGNmPEfaFFoVkcuTHxGMYKMFtXggQWXFKZakfztVTkH2scF9w1fkHo3YbcCyKBX9ctKU",
  "key34": "3EFd3uUBhjZ5dfWwsrF86t6hNt4SMYimYqu3QFvkG3ySiGNz5hngtCKtfmhiafNTNaz2f936V1YNFZst1jG2jSXU",
  "key35": "6ugid3u8y1jGBcCJ6BAPi5P7oWwWeENYXConvWpTAV1LQg1EmPB25WdRh4oXJbM5wmymCFBvtDggXX89fVmCttY",
  "key36": "BtNrfrPqTQNFYkgwZK8ZiAc3WLJGBX1FGF2ALwqnSyagMoMfyY52YViMprJif2skf7N5no3P7B8rPdxLV2zSraP",
  "key37": "45BTGwTWUWGjKxx65irRNtnTj4aSiCiQ24p8kT5w9dsscqMQxpGz1MZmuy8xyvuXrak5dxrvfeDV4BjUT5fMKiYF",
  "key38": "bGa1PjkvhT6dMn2nw4VDqM9P82z1cAXtrpXJksjgArfaPmDUkybzxjyUkAMmpQqBzg8cKg6Tg5JLE6ufhD6BGPj",
  "key39": "5ZKJ9FKDCgn6Tg4huWWwNPL1E7orjAWiCVMpvyAgRLWVZojhXBLG9Pd2Ya9adfcfSGBZnSMjRegTHR2JAJHtvxx1",
  "key40": "5ScpwnQGCK7nuWYq4iaXuPJSjtafbxko4D5WjwyT9uWqi9urLZmHt8jwoYsQqBLLqAsA6KspWFV1WUnJUA3gwyve",
  "key41": "2awW7nWg3uM5jML3oNeKY7BeFoSYTSaoZ32nb5tuDYR73yh1o1xv6swMm1W5kg5xsJYdR19vavv9Ci8tSPcwYuvD",
  "key42": "5dKvb1H67XTz5vTup8LQP5fPSdmXUKpbXiqVEnWAjPTjvLnLdTGRQc1fQfp8EsbtB5xoKZ1FW9ZwDpX6s1JqiFHC",
  "key43": "2Gh1TEb8oHjduVU96vav937Z892tGtguCD6khGMVq15QcAhkQ8Kee5XdhSh4UT4bcLZV4ZGd8dF5F7JCMuKgNzP2",
  "key44": "2sZD8QovHirzb6vufQFRfEiXHa9ginktJk7PMLw84t6NJhxiMxicbUEgUeH2bcGWGKFEEoY1PkWuJWuT5t1dTaKt",
  "key45": "5gqKJFCjzvLfCjv7f687bcVCQbMXNEEWQg2qKr1cFPxALLzL9jz6ZtxDt5yjNPrzC81T9Rqd76Ft3mD8ZAhWSSpv",
  "key46": "4Pt3hVnRsWTpcnaxQzKdiiEvVutKFthjhsbaMGaWTunMHXegV3RBCNoFbNmvvXseFJ1aQjdoKYEqbiJAuehz6K6i",
  "key47": "uVfoLLwztKS2k8NFeJ9ELjpNc31eUqEKQEWRfzgw5MXEkVFF7zuWUJVos29jg8rH88j6oh4nMDi6LTeQAhe4ZcJ",
  "key48": "5FKTJNXKBV3U3oNAs1ZRpKi6SNpGU58bL866UQYLVF3Pp7X2Hyx4y6A8WQQqQX7prrDV6EmwZ9WZrF7HYgX3AQSH",
  "key49": "J5AYrrVpLZxqDzFReSodS8kmJdJmoPYv1y4d9nhx8VFY6xj2tXWPQNzmR8i9nnk2CweEFkezcv3w2VV16Kh4dru"
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
