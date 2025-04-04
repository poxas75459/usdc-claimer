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
    "2th6Et9DYoF9STq3LrU4QvVyXAQJMuCyNdGqtxB2tpduYx2p7HZ8rkyc6z3CincodvLgyvUNwrQMv4ShvtmUXutG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoGCTT8YYPhbXwxbxcELLar8bzhfi8E7WZDE2yJwD7Ajty5Y9XYeykQHwfowEZNiKv8keHrmEJuWXBZcAfMjsfr",
  "key1": "3ZBoTmMuo8jxJU7oi4oqeCgTKJpP564moL91wSfq5cwzF13VZDgyPCEp6fQzKfocXVMfMGDukCBzpLKXG2siRCLc",
  "key2": "CtdYGL1fCq1TcCpTM6f9nPXWSHL5bmYNxHELwwxygGazUs7ZhwLDFCHPJUrq2Awbm7gseun93uDcbeDJ2jkkXWr",
  "key3": "2iRY4EU9Wyj7kw9AhYdTADgrKyGVr1SUv2coXVkQcqVMdhDG8MnDrdEQNSAfbiBY8ggWgoy9QRSQPbevMRFZV7pV",
  "key4": "WS7C3HbA5nRMEfYuSvaJV9R9KRgw4YFDmotiqYXirJxx5mzgxzuZaXoUKhrYF9JT9z1Dk8Spf1ndfaygqUSxjeV",
  "key5": "Hfi2bNMkgX97FMWR61AGPTMK2SwVHg3wtk1xUMtRvv4ciE78WVJeASgAoY65xxnYVTeFLZ8nSj7sy1Tet6RyCXf",
  "key6": "4Q8V1bawgEXrT5kt3GqqCwH5uxwLsf2Yp3Z3699EbkUtkzU52y2h6LTQz7wC7R1c3GBdXaBpAVeb8dqtoPQbPStb",
  "key7": "4GSzem3dxcgo3MTrUcYPpRENRibrn1ruyQbdHzrDncqCxBnYcDiDfiCJoDjAxdJKCEm4J6Pix8gp8ipLSK4ADftS",
  "key8": "25P579DGj84SyhUsLvXjnJNFi5AzNMw28kSLN8coDLyzTi8zJ7JcL9PzZXiZUn6nRDBuY825ZjNijh7uRT3ULapf",
  "key9": "5ZMNQeDMAjdcWYeUCKsRafWwHzUHFD5xFVR1eoDa9UbA1rihoLRfRz5NGc7YVMqDkF6LFRerGH4hiEvkp9ooAotz",
  "key10": "4uxhzBd4kPwvGBV5eFqPsucQvvDEyE9Fnt1qstfWFSrY2QHAEdwD1TMxKzJoNcYmLz6VDpwwZSt3nZVwWbhCTn6s",
  "key11": "3Ps4jnmbaUUDvrab46wN6T88etavusUnK1jN5T7iS7VzkyGEaidor87DdqhBPFWj4hHThWE4fGNumCsJuzReqhCF",
  "key12": "5MhFPX1SYyqFyyggnAfzaW5zWNVLuNap2o8GEHcrxAC5m9r9nRcUrPHUW2BTxJes7Xthv4EM4rHp8YmGSK6uSZLU",
  "key13": "5Yx6vMbuvscQMThLLowBcTtKnwvKwcqHsPgEK7ozRyznJUX5eKv5YsBugYoGj4QVaikYtd6JembdtyUssGvoRj1f",
  "key14": "54oz6PzX2PSyjrMJB2zLRfg6H26KZ4xwgEiqB7GE17UQPbCXDTdjAVstZGQnE8EC54TSzUaZqiDPLMrPmUaA7m75",
  "key15": "4dsiPfWQ8GoLAgNaSXrihbWD1ajUUPam5pT8mf187K1HypB8FjnrnwaL8E8jahnLuDbDkUDj9kGMmTs87MsXEMMX",
  "key16": "5BecB2QrnWFH8Z6Mb51hQCQXmGru3e8Kwi8JR3ddzRC4hdDtXZLkzPGUYGRfR9L6ZDZ9ruc3kRWMxjjuD9aTv8Pq",
  "key17": "4zvaxSrUphsJpvikQiUQoNJuj8qQtyzhhg8Wwo11DpnoKZuboYEozsn2aaoeqM9ctFqXpmo55Rd2qJSHT1Nsi93Y",
  "key18": "5GuwEktAtbLzNSW3RmftjPsDGNpF5a2S5k4V627iVUfjnEsYUZr7cLR7UZAyrqNi5VMx5n46NfaxEU72mYwKeF54",
  "key19": "4YjsoP1QLRDH2AqXEmVRXVjgmtNJa8aD9aHyqimE3xVNR8MnSopSfSDSKMHJMAYfkcrf14qqe7KCDMtoqNU8rqWA",
  "key20": "mughn2UTmpeRWbKhcXFKYSUB61fJhNXYNVwN9f2yqZ35HakfGeXn2qD7yDJXb2xVUB3Lfs6z6Qh3qQKhTxT1x6N",
  "key21": "4aaUNmdRUHVrCr2MU7k3iphbS7b8uq17ngvx9CYugW46fYnyN9GdU2nZtpubwXTWi4GapFnEBswJw9rqTQaUyrSu",
  "key22": "33d3smm5u5UzwP9f2a7nJmQdp1cvT1X6p7u9UmKbYUWeTiGp1uGCMGRxKhzrcrzrHHiZpUahgPt8xPBfVQeXVkjG",
  "key23": "nFxqmfvAa2VEV258VA2G61EwFW1J5nREodwvwps4MG4Azu1MGgq9jncbuvZhWK71ap7bu9MNfsnSCEhXz929EMg",
  "key24": "23q22crusuGBijmeiober4MiNmwyV99gqKNzHdB56VqJVoAsGortZmkSPrgUYnmUUXxCF33fBfUHtbrW9kDojaNv",
  "key25": "8VM5tUNeuNp72b7ihg9Z68d2cBS3vugYW8Bf2BQdePVy2zJAW2LS9KzreiXeBH1PgKwTJVGZWSngbm3B9gqP6kB",
  "key26": "E2uXCf1wd8gzz5LHGc99bgGx7VcNFwvZQSUdFki5BYd1bpV6Gzz89KHN7L4rFzvLSEh6Z6jugLRRwawtK1dxQm7",
  "key27": "3MqWMjhMzoiTPyprodLW52L5j5azjReN4x6V6nRquSDCj1Yu4swanGh3bB9jkfXNkTUenZH6TLFbAdEAQhFHXg99",
  "key28": "624Dw4a9uXTKEUjJWTmqNP8G6kwEotqLS1Si7jp5PWUnToQThUzss6xWGpEQ2BCBnKzp6bLi1UKtbcgMQjccsag4",
  "key29": "zBi6sgcdnwWSdChEFS7igqHVB95QPGD4HRfBi6oVLJ1wEMHp1QXLpzx55eAh6wvReoPYiQyAPStr2duBWS1qgeo",
  "key30": "mD4sMaFNm4UAfanAhpq2J5J2CiFvco5wNqx4HqeAH2vYJYuAV9q1kfk56RozXFApQ6T9YDD39WPR3miV4oFaHPc",
  "key31": "qG6WUHeyReQDfYfRx7ASiHuY2aTJ7DcwF2Vn1MT7yJPQQZ3VsLjvmZFMiTPv39edL8zMhitHAJzM9WuB3qrdNNc",
  "key32": "5Bh1h3CXsEqmdPFwmbtn7yCT74Wi7MBH3X9JJnYw8urD5Fy4Wf1wL9R84S5h9NnauYNYPDmwY6U32WPNaCMXwgfn",
  "key33": "31xjLEb7JAPqFDmibu2gQMqsWpmZpWe7HfgCTwdoJ9PmZZYLxASxJ7DYVnZBn78WCVL6dvAQA5v4nQ9UXz86wAS7",
  "key34": "m1pWn93RYcUkxTynJUX3AsRHwh7uzC8nz8WeuKkXoQUE7umZNWq2PxC5D47jDWwwWvMiZ9TMYEcSLKHzuRgvFPT",
  "key35": "3SS7kBpFMhj1WsfE1enSAvFyG7SyyegkTgZbwTDENd2a6EBqqprwdHLQtetr69K7g9PNCm8YSBoo88QntTDR5DyT",
  "key36": "xyE5vPuiZV16ZaNoumpZzrejCtGJ7WnvqGkjQDYATGyKv2WEZqVmTyLYam1ETNHmeKNt245BwHU71AhwFiJFZwo",
  "key37": "4x6N7SHmQZ2XYfPdy9pZADEMNPRtckhpH8ALt6gd4eSnjH9BYjxwMvfiv4UcPdBTLGZhMH8SfV9LJqe4TNj9SChm",
  "key38": "2tmAaEgKFCGUo9yNNqKYFML9nyJVNdsT6k3fXCre5HRS6Mkio9WUmxPBVchKETu2MhrnyNTb5RnuDB3gh1jwgWri",
  "key39": "4Uo6bpSJZ3gD3GQqoHMW5L2vGsaaxDvpeXE7UphTT1u4cbZdNaSmCfnUXUPBvypSUc34J9g9CJeN1bRqyRG5n5Ry",
  "key40": "4jRNwV2KypH98P9ey67Yfoe8Zm6Zc45TUG4gXPMLMCvGGsz5WXbZY7B9SeJd9LikrajkAdTjBzLdv8J3GEBHyGhN",
  "key41": "2sBnZeputT7XHstF1xruK3JqwPHhvq5keoc4XjUL5mZhzBgahq7UX2ntMHhuxmeRXeuA7HLKCZiWFJaZWpwssvjT",
  "key42": "2fd5L7WthExPicJhYJowjht2jecCbZHUtJ9PRcWVVBvT7aSMgWskuacgeG9DqfTaJRBig2VpDhLNgLpW4UULgPtA",
  "key43": "2kneZ1ktVgNbXrAPyL3X5m6NY8hRfXPsrKkwM4zXd4AieeU8nvdwewyCUDxwxVkLEvKYTLzm9CK7B7WocTh8wQNx",
  "key44": "4W6hTVB8ddmerBF2kzRrDZoMvcje5ruQarGWqJY5uojBJmhZfz2X6EYWjkgVByhN5E5r42jJ1t3amq4okApCpsdV",
  "key45": "2iKwshVv8JbV3ZX9nQLhCSsFobpwGDYNFdqdvBYdaonDisbWs2qPc1YoFo5miSpS5BDn7aWQfEqEgjU3E1WmUb2n",
  "key46": "4GtGAwjEibKkUC1ccJ4VXR66rKztGXPHJeLDJpNPB5ivEHz5D9dpXgr6jwTqrzf3w4PcvZ9rK17beoGdWKXhuWC6",
  "key47": "5epZcXmt6fVtDTqEh6Pd2PnRqmtxDDFp4o3yNYxAA4LgEHhkhoSzv4JQcGkTxpSRZeagYN2U16z95WoPXpx1ZBvb",
  "key48": "nKqptXahUos2d9aWhhbHbfRbaDEbi4Yn9JTkPSNB2rugj4HkZEsZioS7RB2Vr87Kq91Dt3hJxe7Dz2YtcqDW3Dg"
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
