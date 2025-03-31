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
    "SbMtmK5H2tWxDRYGrJhh7Deu98Ro2V9dX6QdXXyCEF5uBpKDHKpFhps4GTux3CADQ3hdWhPax2s9LvioC4TawDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39axc44rkaqL49hCSP43cnTgtpvkFFZ9XH1aH18NZoY9PbxAGRWaxwGvLKTHUqTFQgUbMXij7XvoULBUY9LTuiKK",
  "key1": "5C1kavdzHom2QoYDJqB6xH8Uu36NsCezuk35qrx8McxZmwT7eDijWuQRrzZvxRu2j3NDthe8Pyxo2cPTEwxX9E3P",
  "key2": "3jJoVL8net62sk8N5jVhuSsgoEqCyFTUWZWmEBWoCEVN4CiqecnzKTRQfCoN51x6cuvKaAHUtQBCDg1M2QNEuhd5",
  "key3": "2Tzx9mskRgyhni8yxpz46VgnKHwrhrnkPnXYMSdbjKZrcUf2K9qpbrq9YpyMEeoatztuRBX27asV5D6oKuY5Acmx",
  "key4": "5yAGnhY9ngABjeMvQT9aUAzoPoAw8VeygC2X5XiijQM6jyRRuiSpXiGWF85uE14zAU1aXmpwKwEFdYSpFdukuRKw",
  "key5": "5L81WWBbBxmePo77dmaqYhS5JhWyi77PBQVgUc4MwzfQiLnpeMDSun1qKPXV6GQaWKBLMgtVeFvJuNxADVffm8eg",
  "key6": "45DRwE2awyo9T4Apu9XCMA3jY56yfduyhTBYYdqCQACaEcmhgDnxfvEprtNgrNaWmYEo7EWaZMBhpN4PbfLK2o6F",
  "key7": "2CjV31SPrC3Q412QFg6uyAMEw5kKWQqwD8x7Z5TBEGTSz9MNSBxm4LSid34wKEHH5JBTuVKC7dkwgSLLs6tXEuZX",
  "key8": "iG6yChWqb8MRzEMg2WcW86iiRCVMbYjGuZ36YQ5bfSfjjdTV4SGJonN5ks7fESmg9FEKdCCXbaZRxhDrDeKMjTL",
  "key9": "5tfjfCgT57WZnmoVzzAZxKRUQZ79pns12o46nmKZ7JN5jXHMjregb4aHbfGVLYfqu1R7DhmWgKdqUxhZ8mRkK5dT",
  "key10": "2appEKMH8pdb6vbdWVo3cUeyG5KN4i36pqD5KVbkbv9QPYjkEU49M8tQwie21n13doM3jyMYES1TVVrqgTfRaU9n",
  "key11": "4DJVwciY3nVfsMvgPUn3pMydJ4LVXKa5Zjo321CWGwFfv4gm77Yejv1AVj6sR6LKHfgauwLnd8y6kguzQHX1mF6J",
  "key12": "5TycjKWPuJKhLaLqnK5QvGX2Axg4kdXwQNA46MWcE2qN6XYEWGk4bNCRs7tCjLFRFDz93TbomgTTpfsxGgKP3Rbk",
  "key13": "2j68iST5rhZyyyQj78pD7oYVXuazDUHGoeXEgJ9GjrtZ45Hq41i2WRSW9vVkn44Qg5neCACRVLZR3YMvxZvmSYB9",
  "key14": "2gexuDET6qLPkNCnvRkF3xfEEtj42FJkj17h8cgVV3DCZaKkz9AceZqReFZfqNMAWRCmyzMiL2eDAvXWjsvCmGGE",
  "key15": "4gmRQmvc5j4UBx3FKzEvNn1W2dwxuHYoRNqL26icZjYuEqVE6mtqJdREgTFuwJzz2XRicTXrBe5DQLv8SNZ5r163",
  "key16": "5L3Df8UwZLGg1M4ZWKcqsKFsHshvSYVrZ4ZsPjw9crZXXeonq9h3iAXGcWTa73ezH2EEToj16H4zSH5yMKfCAhgG",
  "key17": "2YbRsXeBCCC4PnJpUE9aFxSqetCoZN4Hisi1PhEbu9ir1YAvF1ww3y4wLXgMhic5d1j8xYgbjSLcuyesrbVMFfeW",
  "key18": "4SJbVwcDHVswZpqEfjKxDGMMAejRXh7BaUr5JASMuUWMeMuQ2sLpCotHtHMvgP9nH9GPZ5iLkm7vJt3eA2AJVzCx",
  "key19": "3SXAVBebuDHRQkzrBhegRrjC3dHGiYAnXsd6cpGwtShLCQkAq5yqyLDw2ouoLU5X2xBeuPXApbmK29P5o1LvRqrL",
  "key20": "5hH1g2Ck7Xj46E9vNj3EXz2NRgCDoVJLdDna7eMNy1bMXK4tdEnzHYcE9KsBut38RFm7yoJfqqDFyeoaonPFwHVG",
  "key21": "uJKn2PPPzH9FovqueaWTXoWz7emzM1SjFnyzMs5zAdnZRUzZxSXbH8dbNC8e2nJ53yZzAoiaMQtXxSmcfFc5vuz",
  "key22": "4eh4HMFC2HtJh8uHnm5axCfYQ1kA3gQejeGTzJE4NBK4CgL9zhpGNh5kspoWPTwZR59FbdiuWnaEXZqxmTJvtxTh",
  "key23": "2PW51YwrQU3b9rLta4crFJTyUyToPSyvJrUdSDSepKZu3NPwFxgJME9H94RbTpVXS17WpuhJ94X1mpgjBXvYP1qe",
  "key24": "2Qh16sAUnENcoTQUmG2UHCSb8hs72Yd1GgR8boyw79G64Nf83PeF6ovBeUipKt7tMXubvuyRcWkRNFxZqaSoPVdQ",
  "key25": "29XQbJzbf5ip7vjU2iJJbZLhTp12SnGYYZmzom1D74u6ZeJrCAwrbR7BYzB7hduTRPtGTkDmVbevU7kg6nSWMnSH",
  "key26": "5uZmRbXxW7fYaDGFk6WViDJ5LyibdMbdWx7r9nFajHctoURNMV9tTprsq87iXjcvz11kEEZJJz5JvoaFrfzT8wkV",
  "key27": "NTPqRQX8YunHzDETeDqt7gkDgUk4LpYMe6wVx5kY5t3yrpYxigVGVL8zVyZjaKXnxUbd3jZm2SQd5QQjDLMBxjm",
  "key28": "3dRVRwJDyvhQoG8jGFkffkTg7z4Stjb1CpjAbxrb7V2M3jHiMj9WXXt4jjSeVGbp82GPDuSRJaQJ1APf9NA2dLBK",
  "key29": "5wdwB96mbT5ahXaGcBuDe6ftH4fG3qHoSmcd4UiGoMb6Wpz8Q7gC63k3uhYJZYXUsKLpnz1TLrfKV4vuRFXgN1bq",
  "key30": "5CkoyQocjYavqC8nsYY1gTyRJkgmeba1y5eruogNmTZDwGw7tDMVNxgxVVcZAbDBgYProb1wVnDC4y9edqpbXAzC",
  "key31": "JuzBVjVxisWfhVj79rQ4t2DwNYhA5gE4KCPDJt5wyLn13c7QijJeV29UThcpLpG9AsWick3FmQ2rPjegCHwd9Nw",
  "key32": "2Z2nAWSQC91GgL8j4vxMaY2CY4KAyxYUQ1QKc33B9iUdvNFM1fY8LZRtsWbrvm6EN682JPnMkZDZwsTdLSdCNKGT",
  "key33": "2D4eCi5tkhucuC9VbmjGf5QUNLBgqD8fXYTovC3ZsPihcHRXvTiTvy2CyWMm39FejKb3kzkoXDA9tKSjQ4SRGodo",
  "key34": "U24C4YfoBuTsgXmY5bn22VgbEyY1of9tmeP3wv5PsPZViqxYvjq7aWEwkxp6exyGSr5N4PqQ6wHz2zPz2mCmUVE",
  "key35": "2N71VwVF4XCnNvko5QTSgpgonJvep7qUjRiz3JtfkewPn78y9pwfhhrigo73pogaDPFgsqjRJfdtQKyvi2ZKzA32",
  "key36": "mY2EnqinpzZRpNFx4ZEfrYoR51FwqpRzhSN5ex8kETbS9WLeapy7Ct2crxQPozKpJ8yLbLXcqpSwfCyc8eJYWyY",
  "key37": "2Rhw5cULKiAJGGeweEZRZoa2QmNqiXZvkoFSWhADuNm1Hon31RoWpfDefEf9qyF4ZCTSwHSvp2cYrUcws8bnZRjR",
  "key38": "sERY9e8JB7gAY7rFLeVCLJddprk1FaYAQHuvDkUMXV6JiLX5vWYXa3Am3Yngmy1NKrCDeuDVSih7QKLetm7avyM",
  "key39": "63pmgugfG6rVmtPZxYW7VttuWG1R4pSiHyvx4N2VG8ZwAWE4dkToAN36p7rrS7szdqt3U5aSzTHTp5qPZPMxhHdw",
  "key40": "5aiEXxkzV7cGnmeJvXsTmXWrk7aXh4RZe298NwY3y6wQc5iSkZUUGZTrh6XUVjwnRgx8hvNHhSwBEjVqdK3ErKAC",
  "key41": "3dQQQwC3FBkTvP6ugCHbv9ViviWBMmRv4RWygwr5i6CafbHYjYcS7JxbTcJKJxGA5eq3tVqSpXSNzqxj9Kw8TcJH",
  "key42": "2jKSYLdR56GRLKxG5CXorex78BZkR5nzL35tpXhJb61YPSUU8np1JLm2F6N2b6QaatbKYQUNjgD4VodwcgMHW3Gc",
  "key43": "3SHUUwdyWZa6Q7QnstMzRQ1iWaUUF8L5XCaCEGrEYktbZjGXtyFNwNiMd7EhboTWFQQSKMDxPcZ5GzFUD9W87tZ3",
  "key44": "UKtUDVcczPMxYavQKAuj3kyHEFq244vBCuFhbS23NxY8mhVUZwyQLwDC5hMrMS3SATztUENSzs4SLETLKVufouh",
  "key45": "5crvr2EiVbNmgXqEVdJZqTD6rArSp5EvK8tvgx3kF8vrSzqvQUs96QxkeFfrZ4hkwpjHMSJRRKHaP6nwKPn1BZQn",
  "key46": "29uFWgCPtDMNKBURRfJDviH2VcBqCdCt4rveaCsSyvUmhbEAUdk4xvbWTttab6R7sNhzV8jTF3sxV5d9YokPFi7P",
  "key47": "xzLMNXTNWhK8R1cesipc4ceH6EyvJkdDFo4HMFpxwXQ1dKQo4QBbuCpMz9LwtKJiKs9fLaYQghf3nNjswHBWCUN",
  "key48": "4cF4zJNWKJe9G37aMZLb3Ps527wPT6jwAGkasmdtRoZT5tGH57RD1WoB9WEwcrjYo4r1SwAji68W3DRiBQtkjojp"
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
