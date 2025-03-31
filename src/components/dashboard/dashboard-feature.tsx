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
    "3Lh3zBLF2XLXZwbLNW6snU34MxC28ARp7JeuoEZhksdiS6NZ8wVLsgFstRci9jSqEANxtfi4wSKZ1U8SofLDX1DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BAgXf7JnQYqWUFrCQAJg7jJbFUdFCtRmujAtWLXAtogMGqdVCBRTKt82jCLrfWCkbvRxWD6txj2FRNJbTZxEyc",
  "key1": "4NGLbXg4EmE5zF8fzGhKBUJdQ3JhdTurpgBYQpdSvRAs5AEs7UvuCZAfSKC66vJxHH2FfQWXLbMvEP2xdDPSbx2",
  "key2": "RiqGaph4L38dhDFm9k6Atj3ysRffeGSbKtzoA2jJeMsA8xFydcY3m5BM9ojgkKiQSg5fWwA3hkv5y5qtvtuk3V3",
  "key3": "zdks51HQyBUDYxxJLu9Q1RFgN8EJD3XFeZSLZ42nzv5ozj5tziEkZpJv9NQVYHrkPmCkNJwLUJh17gziviQQEij",
  "key4": "3ie87Qk8FjwBHtQ4fvBgzEhXz5z4iFtm58hB1foieFw9QXYDMf3c4YE4RjXT8NvbfW4SzRWZLi6C4ZUgqYNEyLE5",
  "key5": "Sgp8NW39r9hvh5ZW8gZ4WcqvYEhy3qC3Axm539o3mwFJLJyYzFcnjNEDzagYgb4E3ABykEGxEMC6gSh14xHoX53",
  "key6": "2pn93T59qHUjb9MLP1QPF361h8SzKySFxzGnjqAcvYBoSQS9wDXh7J9tbGXZt6Z9eELLbamvMizwcC9mat9whvSt",
  "key7": "23GpKAWwqctvpYPPeMxYYgUDGc4DFR6Hg7JLv3XGmEfEJWFsxxpYiama5koKUDPrwYjV9QFF1A8gEKPW1XwMPmpE",
  "key8": "57fcSetmZfR4Vrh3r2YEo3xPQqGbM1DMJSpukEaDMDu3iUq2NNmstnAbRy9V4ywYDCDKogjqXcHCpMATKMqZ7rnv",
  "key9": "2w19Dqdscacj4Fdhggi6Z1RbjnUENWaL3UteLjqVsUA9vCfj7jB9WzxCxk6A2n9LzPcrudCChpeV7pbepasytxiV",
  "key10": "32r8jbTwaCMXvpfHxvCFApXHBeWBAKLWgy6f9u84bKjY2JUaPFDACvGYT4vGsfKZCmFcEzZiMBEv3fDeWJbaWABr",
  "key11": "3ZRMFbxkMTqSowZ1irAUKhxk25ffgNfdfus2NyYVc1V2itJxAmpGKeYA9iZzcG3MBxxZbf9WKcBscroMwJeKNSvk",
  "key12": "4gEq6guhCQmxkpv4fJEoaEB6b9Vdm7B9RZYXzBXYox88L8pSt259xENjwXxUyBNm9AT1pJCX2BS7bpHigtGn8Dyc",
  "key13": "79dsuy7n7UTh4y5kkctGFGc9Ps3yLkemQv1P7GaPt9hHPUr41WoK9Sew9cnJyZX8GbRkNGXep7JHkjeYxRmv6T7",
  "key14": "5qM6FeNQomq9Gq7xNRLXvhiGr7hLz6YCX6JwqKfNAhVvbtGtowUxr7nYHbhoQG2A6VYdJNBHHwTks1SK4ZrUfkTA",
  "key15": "5hEBbUmAgspbY7qA7SGU567MJsCcG7QeVLp6FREM8wwDfu4Eh1krY56BfPvhTQQyS5KUh8wNPkRgVN74ejNdkmwd",
  "key16": "gYZ7NiASf1DE8HqQaCJStMqYdWz5rBCXLqtRsQfbC4S26JEkDmaw2yF18HpyPorw8Sc6J248cGmVTUjHcSxq9yG",
  "key17": "475UreVZnuM3yXS5Y8Cw4GaWdzAZUVqCH4fRXWW22VepGZGpKSYunwM7xWvYtxB1pSdZ2cVcUhTnucN1NQy9VhSb",
  "key18": "4rx9ExV8wYu2oaVsZoXHn1UXeG1k3gtrMrvs8wZBtyyUorpwG5jboYQcMGaFokSDdWaEgjx61sC1WkCWQamZPwBv",
  "key19": "2ZH3YwXpLgQLczECictKivh8nXcgaWMjkigSq2GdBtruHhEz9LLe95xhDgxnHNtweHHQjRC2pFyS7TzyuAt1UbGd",
  "key20": "5tmcT7uZrP1xVP6HXwPqe5enHYeP2Tama96cxvo5DWnCRJuJrGDetHzYTKWcSEHV2zXwkiE8RHmLGmehEqsxcc5F",
  "key21": "584tv5yBka7ja2yvFxCBSseWfas1H2q7DfKmNvL6nRJxYUsbtrhPDFSfwSFenBKMTevojDqobbc2AQMbfrnASqj8",
  "key22": "2dsPn1XoRKnw5XmxDU9mJSkGcY1pKvoSf8gDyAcqF3benV3iH64kRynVWLwGHDX3tyZbkAfEzw3NbCFc5kFtsMFd",
  "key23": "3QrXhTVGuwf6nZjirMQDPPmVvFvwkFtdZ9gcLjFCL1tCDRAm2TXTe8281zfFTZqc7eXQFnTbVG4jzZprq2btAuqo",
  "key24": "4V4hdCTwehpxBvTCd6QtH8ZdgK5hZMTGnonLB3kbob2u8fCm2kxSCy8wub7YD95bG8pU4wSf4gvMCpSx7nMaFec8",
  "key25": "4nYyvj9BfM3hckJtcSZ3p3VGKH12v5tPkdJL1FRMjwcq1XSfmifCcuFUDMwBjDWq3YHK5W9DdPJmf8WkoXFmzZHx",
  "key26": "4LChALzDpMUFwioj5foA8GPwE1ZjbPkK2ekRkW1Arj6itUoLqbiYHkZ2cipFtge9L6sqpaSZBcgWd5wZ1deuDjEg",
  "key27": "2JaDtbMy89kBfxnKkFKx457WiBoBK3E6At6Y4b4w5Kkf4GyQYb4LMi4ZmKTTFM2pz5QpreLAPQUJZ3FMeeFsy7fY",
  "key28": "5Pf1Hr1sxay7rAGRGKxmb1sQKmuseywjXC4EePxaHp9V2tK8Er17ueunbZtBHSNLuaFSUh2Hw8Ki1MkVWrEgStpv",
  "key29": "4ZZj4BHePt1nt1Kokk3c1BxdSbLUaWSo5aA82LbmYaMip4cnCpT1hyYwJ3XUaJpcraqYwMxwXGw2At5MYdoAjRji",
  "key30": "43mkGX6ed73CpbEqJ6WJ1LJW2X6NuyiRdQehknZxPpab8Z7JHcyFbvvRDe91YcUqHkBU8DEhp9z5UqFLzCFKxerF",
  "key31": "274EWTcpwybem2EHCMi2XvfNphaMzj3WPUnYR2ZVm7iyUY8me53Qn1jTBCUQD6F3YSzWHyUyp4eSJ5rbzr9r5C2r",
  "key32": "3MLeFUzZpDKqiaxBac1AeQ6kYg6zgYXrFZUSFdktUJm65m7mpCMS8x6NKvZfDpSi6qwQRKRhugFCrqwD3V89k4u9",
  "key33": "2gX5SeqEyUJb91QYiy6rUmqyMr8LQG1aGz5gkkrSvFutEV7TzpQXFyVAhrCY2so9BeYAkQ2v1ZF5Bp71E3oBiv2t",
  "key34": "5aNvanPCE95aNfBfoE9CiowhQqXeDPXRcF3dRfPT7hBiJB1gtkdD7R9zDHgmCWkx3FFcFgRMKy44V33x4LBSVnDU",
  "key35": "ykGmHZyR1azQtyPYHSbCEmk4Cc9ms5aqXDETuqbzpP8jNsbDufSckbUL5dVtPbTbfDYVJLSjxrPNh3ViPsBZXZL",
  "key36": "s9n51S7QTdxTErjMCedRdQfcL1aU3V1DUvf5usb6ZArGG5zkKTCCYXmzztvsfLwF5fLvxfT6YmpRziCurhXwYKJ",
  "key37": "3X93dHDuVU3NW3jEjSwiY6APdaG6gKr6YTPm9th3tX5uEqwfB3KArJyeWAdvuFBeYvLZ2vznrr79b8BvedLwWwbF",
  "key38": "4nJ5QQzqBgFRQ117xQANdTetG6wBfAhMnfro9CSK89bqa9CJLDshpi6nwRQgXUdb83guJ8ziPooUe975zUWaBt4H",
  "key39": "5ucvBeLHRE4rs4X7RzwRjfkSCArKhedzMhdh8yLTuSJQKkz9iuqwcHXhNjmZBmy5ZzeUxsGiwwicYdWYSdKCvAn4",
  "key40": "5cBp27r4f11PT5gHSg2onQybMADjvNAoqZwStPS61QyyQjeFnW4z5daW4axCKPDZbwNEYxYFuTx6s5mBvvS6bdX8",
  "key41": "5CQWxhcR9WgsLJBW2H9DC5TGtiXwQbV6eDz8CzYLvRou8cdQv5ao1KkWhzEvmechxtkKfe2eQsBdbJLB6HN9sGiL",
  "key42": "3WMzaWimbY6dLRMZwRPaxmoa4szQR2YBSrk1UDvNrgxrPf6aZKqhVqakeky6GMTpDUM97zWTXWsNUa5NeJatcYGm",
  "key43": "4LHNV5RwPHUMmtaFvdUfBi1KMvdpPgp2qPvEd8Wa7T8aaYgdFWcZWCGwYhgEf1nqm7JMyxmSdoTW6oyRBtbs75zH",
  "key44": "5F398rpTN1LLC9uco8848ZExQbbCpynczVauG6ZW5LgH7snXoVCANpy3zNScZqTbVmqqj5VE7QBFZBtMFTajSz2t",
  "key45": "4uHmRq8zQPdh2Lf5RctF6bjYxdoGvTGT4W7zUAuQ4qyrhUC97hm6ZX5Wp4VPn5thwaMMJrVK9CDNAkr7ih3J2uRG",
  "key46": "urNBe1ZQL2EBN7sWfdAuyxSse2oM9vFZHJZdHgmMf6GqWEheMxovpPAcmNYJkXAA2cKRuBBNnUzqzCXAgnpgvrd"
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
