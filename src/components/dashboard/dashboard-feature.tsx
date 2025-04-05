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
    "2tjE5DBjLy9ATd84Btu46RHGhnEQWkm1krh8f298aFB6pu9w2Z7yYUryyaFAXFRBLAkAFd5zpuV7Ysdu5q6ZbXLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtEFHGGxWeFECFUdUkbuJbRwDoNGLoCStUhS7FJ1svc9RtwTNpFcXuV9ip73MVTdUhtdf3WYKJLM5RtbUJZHG3w",
  "key1": "2c9Mq7cXJhuPU3KS9LioRPma1tvPAsJxvuAUu9Wc52wpXshsyqdutviWi6ocBTwECkLtJaUiFzh8TvGBA9TJBtTv",
  "key2": "3LWRhSzh4e9wTFsTbjhDd26LG4DVYH6QF6HwVDsWj6zQD1DF3UsBvRFkTCNM7vVt9CjaQ3mdoQqZ3GnxuUb7Qg8g",
  "key3": "2XRfVVreexk1AkBwxhtpuxguQZgfzFXCi98Kg2UXn758L8N333te8iedxVQp81u9psYL16aFVYen1WCBvw1uSbqt",
  "key4": "2wixKnMitRjH6aVe5Gau4PbUxGLbhHZ4GEVsnB7YW9Fwbef2w9s1cS5kLSeRBEG81KjqwuZrYW6udPwKqzrwrK8A",
  "key5": "34kXS3GQ8eMLwbQbca6aPGrTV2jxXf3L1xHKwHNsZnrL5xuGnkEixc3dGCvs59o5onM5j8NZB2CYwemaVJeXsWUU",
  "key6": "4XNUMWhXuD94Bj4tKj9Xbrr9iKACi3zjKUAtug4VG7bEYSvWH2mJ67wk7E3rq3rhFA9gsHiuqvUwXDHhGJwM9yBB",
  "key7": "2avuaGfQXq3Cro7HPQUhQpgdHRJPxjGSr9SK95YPoUhUYXCjLhH6ZDAvZtYF7JkEPyW7JTfcYRuz56FN8GwF5qdH",
  "key8": "59tKhMf52otypWSAxVHTvs1sEUVZb4uTiQik6m5cGMMw2EtvMqomjHRupv65taoiPj8u4wMcrScsq9hvcBD1omVi",
  "key9": "5DTu4ng9zKfKqRUnGV5qWEonGTtKKwhiJX1f7vKbdiBdZzF11fXbpsc8moLqPWWbWGb6QvpYPTusSVNeQyw5YTjp",
  "key10": "DjVu5ghwkvKAjcq3bGJoU9rZpBziopWEiW4eVU69PQBcEtVuXaA3HB6UL4dHjiAnNHHNTYjL9gkdg5HceXPajEL",
  "key11": "4y9AizmwH88UiyXXxBDh37eoSiUZZdD223m9KCWEoBaY9PNk1cmikAkjvxjxa4to979tvASs8ddCEz8zXxcV3WHg",
  "key12": "33MEkYbqQnAujjQ8Aw1whfCGpUrWeQoso5FmuzHnNXxrrNFP8JE3zoe9nANeEeX2TUrKkNbusd4QDnMHTkHL8QkV",
  "key13": "35UCCWqji8qD74NZQNjDBspZYsKvyGqtcKqoeJYUJV3gN2Ptj9heKCBxYHG4tfYeidWPkiD7TnjfK8dpzX83Xxwb",
  "key14": "3A6xevAShBc5ciq5SeqEwPo1eS9HKMVhykC9WbawUoAnCmtH6Lq65ZhH56GAmkmWk6dz74FYRsiyS567JydhWVAC",
  "key15": "3xzy77yUuwT8GxNsozdisyoXuesnGXH1NBTLMaGNeuJf7wdgy1SKRmTaFgKKYZM3qrBJn22YxGgdXTFWMct2cuJN",
  "key16": "3SUYDUAk7s9ekQ539auJMuUnrWgCrcFGQK1rus7GGykJhBjRgFdKNnkUHV6YnL2XtwRquzfPM2k1dDExDQxcFGCy",
  "key17": "jMggt5Zgdfx3p5XxFt8WWddZF8mfqiauG5GjJ75bJYrR9AiKEVYPWLKyBrRaCHESbFbRcq33hNFdKCwYMb5CfUs",
  "key18": "3AzMM2BLCGnAC22HdpQBj1AnNbKoPGaabx9qMUayv1NquzfnUoQhM2xk7HPrZCyyJNgshWuChzP2ZZ7WUUsHwbCo",
  "key19": "4oWvuA3CNfMopDqS16dzMV8svKAfoYmTBssBacXQBdgtR8MJzvYVWy8nCqp82KnK8Q2N5vG4pqeWRtgVDX6zjY4d",
  "key20": "38pwYoywSKpJdHm1qsrD5hupzuennzeRzzBoQA8hDFSV9rCPvHsbcucZVbLohvQydwcHJyb3jpdx1aSx7C1rFvqA",
  "key21": "hgwEnt6Wt2TMLHuADhJTAPS3iRD465YcZQdDafG7B3KCa73nfJEpAz9hVL6xqiPKgLMS3HnAYfSM1hpyi8phv1E",
  "key22": "ag1kBqRRRtwrXjD9bXSDMXC3YZNpEqSVpY33tMEJTakaHdzZHDYcE6QgRcZQBsyKJKwepr1k6UHV1YkHS1NsH6H",
  "key23": "MHDPd425caTDRuuufWCMxmVNXu8VMhCdZGWxtvEQHkmS26REDGnfcMCAJkEuD5amu6BudnJ6SSRndqV1JaUuBRF",
  "key24": "j2MHon8oQ7gMZ6v4qF3FgPCJuzBBxA3XZmB5d7XC1ZjNqFwxhPanbZfheh1UFtDYuNo62cbYuVdnSwjgQNMyY7U",
  "key25": "2vk6uPZJMR4KeUKGcf3jmw4pcmMhyrVcRzDoXSViCAgbaGYhZQ42koimMP2gyYU24jsM8v5LrhfjicQ9qBkgMMKD",
  "key26": "icDMvGMW7RaGZbPujmiHykfqqJS6ptpUaZzgHpSAtEDjKaNnBAi6AfsMLmuq4bwGYBcxxLduNpJ8gMTV7yBjxZA",
  "key27": "5mQDngDMNBySYLJxMY7CJ5Q9iKTqz4BYq8vgQkJZHLs6ZZ6An8ZufG9X7iysQfrEwZUJkawt4ZvDCs5KbxaAuYoJ",
  "key28": "4gV3ywoCMEFz1KeeT4YiuGbHrusiMY6aWSJvYcDiWMvuNLe5cLPqdWxE6wFZWRpmAqExtEzgB8taX51z4PGkvZTP",
  "key29": "3Y7s3dEpFojj1WaNNFqAMAW6L1RSBHpnPLoRS96MFcgvwNiuxNnZRYL7MDTMKXprtJC13BakexjcM7RL9CRVTwrz",
  "key30": "2FfH3vdTvda1CK8sNhDpLaN9ynrtuQkcV8tsCD3M6J4PcsndLmpJaxZELpWBEwxZNT72EtUdesX4obkUBhNoCA4d",
  "key31": "niXx4oPu7L3tVxrBRTpN5bwixNAeuicRPdac41nXHLMjX72bG1ejiKd4JPsnfCf4GGz3SMSyGJ68ccVFt91dJ5W",
  "key32": "d5FZUYWaDAuoGcPQofNjSMcJ7nP6z3RA4YrUY6s2xc2vWnPnq6v76ACwu1ee8oDnWDHAyLyy3XNQyqBJVhhXX3r",
  "key33": "mQSLvjDCpLeBCg33s3CvjJQ2ru9ko8gcqxUBG63oX2YUMJtBycCdwzCwdcCp8LCTkTPKu8jXk1Xz59gaE9MWwMp",
  "key34": "4hXzESLmcsQCbQhH45bdmXNKEXBTVvHowJ6MkHUDPP5UtpNC1NCC4ntW8zShA3g917quZVwhvuoJ2SESoNwSnB6",
  "key35": "3WVNgDnhsuR12EnbmRoN2Ca23xC4Nv3dwPPnYM781CtNvnmUYS8PTQs3SS3R999D7iwVM1dRcRwGWKVqRcGsQKGD",
  "key36": "Z9gXp5NnkJVWJr6yP9VY4grQhwNfjt1Nz9jrjYMC4MyCgeWfxuWbaf7VcvLUQrcG4EJRHfQcjwbGBgcTPY9UiG6",
  "key37": "4AMdaxRtjREbeur7QrA8jH9WRfzEZGtpeGdL9idpW7m5wTfkmfjZWUc1ikxqCuj9Fyk3yEicg5DWWMe9QmHD6C88",
  "key38": "jdaoNEPNXhu8GwgWwnn55C9arc9rNCeV1MVaNd1Nw5MqjbnjW3mwHB2zg8HQchw6rhu4rFMKCRTcw4JmzBT483Z",
  "key39": "8eHkj1yz5S9vu3eHxoahb2dvvwUopSmyDoB9JwueEsphP4oCTmo5bYK4VkiM5Zog2aPhTWyLqtW87EGrVkB5oBu",
  "key40": "5LecZ4Z4M2caLLGad7xF89kq1qzeTgZ6R1wFisCUsSWixskqXWTUfRxvJ5Tgu4hEFZmWbrQC7NAyRnpogyeDE9jR",
  "key41": "5oBEyrCgB9M265sgcbh5upjS6Yvigdb7tyZhVoq9EZaA7fdHVqRw4MwdJbibiWxfwLP5GhKFPAXCGMdidHDYxLJb",
  "key42": "523NuiekTP8ztyPpAKCXUuWnq3oTxWwn3rfGCB9iuanBxpxKqRv9MT9cf7PYBaMDR12V3zsLzQm1f85M7QRr9CyM",
  "key43": "51NzDhAyDaB1BKPkJef7yugFZuLhReGh8eT8jF2wXgJDCaBNJFPkApewLegiXFBgqR5XJPKjySFjDXk6FvLvFZNe",
  "key44": "55arW4LxTBQbac7WyH3m3n58fiDjpvyKU2z1Q8Pqgp8Qc6UGBHYJXbr66XPnD1N5Yi9QccxGWJ8ik9FFeoZzRjwx",
  "key45": "2ttkjJEepyMrqppDYv2ui3oqDa3e9Jachijnf8mkGXHypq8BXqSBHfdw6Rx3BvDhAD1jCUe87fz8jyMekz5tQQov",
  "key46": "64GUtXoR1xPKJy6GrRM4nsbxF1dFsmLFP5DysDWX8Ns9SaPCE8ebUygpaZ6HAsFyYYfgoxwj6Zkm75JzH3i5Cmui",
  "key47": "4wAN2WcYZvo7d9YraLYwwoCUaC6NiryBDqX28hNxoDkQsYw1YL3Yzhv3VC8oHPKG1mD253LXjXk1jmogXPG1AyRa",
  "key48": "bkgxMe2RrPh3KrFWQQPuq7fZqWaZ2kuQH1WaUsMmaEtKXk6Qoe5vLp7zFFK2bUBAL5tZxxDikR2UPFdJ5BDk2Tm"
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
