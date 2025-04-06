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
    "5Xs3qywTowZdfjaaoahNBmFSYiRNpcXWxzXvuCq1ABo9wEQjQdXsu3zjwfKLhoJVwDAwn2sQahmFmv2tP5qWg9kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLy3Sapq6t6zPtyi7m3mv1pP1P5UScPbtTVBrZKAAyh7Dmg6MLUvY6mZTbkZMhkjf7HFnkgKCneP5iXPdQi9rB4",
  "key1": "5EgNkjxvSwgQum9b2K1FKT29p96To6B48m6mSEEbEzA8EU9GEpDT5yN9L2ZXCBSCXQ7gJR7ipdc56TCGezZ7QPD7",
  "key2": "31vHm8s4QG3R6DxqmDRwRVjGgtzbB7wqQiqQiTPSYrqyHEMsGdt9UV1G3vMythCj9Sp4SPYVo6UnMKr9yMMJfobq",
  "key3": "2wvRTKRFaBKzbTKA4KhSU9qcb7ahEc5SyTR9mWCvhT2HGH8FpEa8b9nRz9Aaa3ijymQJndhKVvq6qBpFYssoU2J",
  "key4": "kMNpVoJpAR2rqay9s6ED4AsTmcG7gydpoELkqDruBGQs4hmRotqo8r1zfU8zrtvZrQRbtp85mAK2J5oWc8E2hAR",
  "key5": "2iphtysetUfmzNMUivaLPjk9v5p47JgBKseNtwPCeoivDaMT8HykFoznq8efujuxctRAs6LUhxXQtmqV16QrgZeF",
  "key6": "b3JmqgoTTDPDbmPjqR3fxLyrTuYj1EEbedsm21M9BYPVw9ESEmTS6UmgHXtpfF2xLYEkcTmNmx4phhvnZs7pPY1",
  "key7": "RGjc7wzMswUdaiLRQrx7Mouc4cThAXA7ombSD4NRbKEtigmhPBD863doVW7JLKGTUwcyJe9qE9y3xt38SE65aqB",
  "key8": "5VwFCJjA8se1Ad4RbXbWa52VdSa4X1A1JdiYrzqFPuokECu9AVeuCXhvPLvZTd1otXpqTKsYrXiX7a1BsbjiG5Wp",
  "key9": "3YRLhuiabBATAzrMc2DbXdQwoZVu2kHJdk6qQ3gf2wehVWYw9FNZnWxuSJXQ4kRJ2NxA6dd1EScH1tgEkfxAGZwx",
  "key10": "5kHPMvVfjYrAZd1m7hXUAaFiis8Znus2sat3MaLLcH3aA5nhf2fPUFahnEH5LEGY7B9spnj5PxytoETx23jsM1CY",
  "key11": "2pUMe2Hzo4UKu2o4zJUkxecy8eu6RbKRGVc86xhuKopor9gUWJTuFSDPf8KWEh9iyw8bTfCfBAQGbc28jWXCcjRv",
  "key12": "5AVib13rmxDsoh5feNZZk1XZUmJu7pURRYLNj9nhZu7gs5Ki8a4dgNhByG8WzWhd7E6QWoMZ1T6QJkTAd7FhbeYB",
  "key13": "45S2qoHvSpzicMuJiVwSw9aXVtz764PgFrEE9QQRFraT1yvx8BKNK3BaMwfCL63u8DvgBXxQzga9n29rH4fLWnCk",
  "key14": "4ujyFP2qGoKwvpgqYTM5vfkghTfZ5pX2kJR73yE57RwM7JReqyiVUA1sV5oskdVGheBZnQofoh46vczxoJycdoKn",
  "key15": "4VrHT6QnBJiwaHYMz6F6734yhwSpJM9xue8fSJuv7uQjF6cEabzEh1JUbwp8ao7woUJo8DxuETocn12uzjsudcQK",
  "key16": "5zBFRznKHRtsKNRayESNcp8zzaQ4bpQHHVFUpzMRbyo4dNGdxFoFo59gM1aeoowuuUMsfsYw89VGKp66goyaVeVh",
  "key17": "4ugmAvkBA8hCdPF9CjMrqe1NvdJCvUNJdGsrrGtuf3wFePukoDWVMUGR5xrxRiiaMuQiujoBGoZc8KaGNneeyvd9",
  "key18": "3JvUddTD1ThECCUbZoRU9zmvzKsBg4J7MmTd4d4qJZjGev4hMwiQd142quAV4NCSbR4YVcKrWavFawDbf3tX4Z7E",
  "key19": "3Zm96zirDhuydFu3zBCar8pUcY8qtSfbt9S8sRZ51qaJ4d4ywbRV9yckBRwfUHfx92RsFSTmSPMqvtnGZztfxZBc",
  "key20": "3yUuxXbj9UQo9xm9utS9WsE4YVZtWneYrsBEPtdb6U1vE9ySezKCpCfq8dBrnaucV7nxFaKDJHdbowQQdyXRMdwS",
  "key21": "5ipHzV13AXhinhCcueoTrPkPzUdSTuFnYqwAxi2uosckSJ3AMtRJaDgH1aGSQ3Zd2fgxe3Gkvxhq5oojUoX2kLno",
  "key22": "3QBjGvaZAZ3WzSDQJdk5hBURjLGmqoaHTd1duYUvE7qg3dv8XFuk3m1gUSUEGdUiYafCz8gYZe5PMo9SzTQ3brLg",
  "key23": "5EJvLmB6idjJtaxdLT18rXKuebxLoxsupsPstSRX9QsDkt2A1MjzZ7u7aDGqKUWjUCGtzyoxntnbhwURjQrhYjMR",
  "key24": "3b8Kyeq7UvHq37cxqSCqjZc6YXQPKo35bbPUxkJqBxqVsKrvxEApyQv64737YR2Fcku1DnBP3XbY4qpBTbwEwvuQ",
  "key25": "V7VdKZQfYrgTAdRGco5vg6LzLCSn7kYVfZfnXgazMj43AgrFwJTStHBRtAj83aFAapuWixFKEotXNBR1Q6xZiJz",
  "key26": "2e7K7k1tV6YYTNFarRoBD2nosMC6AaHccNTJmkYMiHBRp4xJm2x1dYVDjqnPZL1ne1Zzv9g995W9iQvd76CLUfmt",
  "key27": "yDPV8osxfQRk4CWddfvhdvHtKzpTGkvXrX1k2vBfEQf5oRnrkmRnqYfEVCKo9CBp2j6F47Zr4dz6BbApHABk3Gt",
  "key28": "5fbG1nvEu3kTkUotcAMzZQqB1EupMuDgCj4eDrUtzPHf5QqTH8u7pFUuwKtoXDWY2Vq15uWhzMWXceJZueFmqHYb",
  "key29": "4JTn8Duz3yFbrh8bgETL5Vm6bRqCFW8ahjwutfvgZQWjCjuvU571WJ1qZ9SPTrTg9CCyeby92oQWfxtP4UoqgiG6",
  "key30": "3Ya1eoZy3SJEjtSCsmUJevQH5bowA1t9dDUJeWwEgLcSKHBAdQu4CT3yNrsC71BUrFKA8aKTkqGLVLgnFrNsTu7f",
  "key31": "8fuahbzbWZAmXzf1vpFfHA3oftk3zo6js8iBEXw6gXg2ahFivEsEZZvKniSBpUD6wMmaNaQJfsKb15n5gos9wv2",
  "key32": "2k14BCxWAQ5C3BLbqDtcuNzDU3n9Hwi24CCDYrfY3qvmsAtV5UNKJ3vcAVJXzkZKqtiJkAAqeCwfNZpLPGWK2VnG",
  "key33": "QLwYqc1XiAaZS8KEgQVCA2UEKN7fJn6D98CuogGsvJB8fW27dB48J3yJ26hrZz2BSYmfyZcskcCJuwd6Ea1D5fa",
  "key34": "4pG7vbQEG1J47hHMWcKTmyhBpWn4vAB8Gs3dK6Df769nbbyi419xd6MhMH3CUxqA7UMCL5SFykozwoFKt2bJxK8p",
  "key35": "PhQh9PJvbquEDtQGhUZ6XhLfAa4vF4HuUTLFn9Zd2AaScKGL94wZizMr2MseMgBT2RS47d4hvfa8mV5wE6AUrHG",
  "key36": "4z4B3HEJn9AyaU9k6vSjPZVNvfFJc8RJuYDJrzoyv9gayHdCaBtAzzD2ABYzXaa4h5PTSoMcsj3QoAyWnfKPyviD",
  "key37": "28JaP8VaQNu2Vsbu5wXiwnNN8Z41CTQbPsUEnkuBku4roV4QoQBjqMHPm7UaxvX4FpuN5MSZ2Cg2FDwvXbPRAUWT",
  "key38": "43ExPPQbUUfbuJewFA9eSwxUv26bttaBXx8pGWGN49A728gz7kWtGdRKmdBwuGwvevtFHnRf1Lqvu1yvcTXjKUJz",
  "key39": "2YDJxyUB9EQ3FGubFNVCazseAY4XrEMQdwL2wPaRHioJiCKLFGmK66HkrysSVhCKWsAEoP7AYEJNPQzsZmUujSNN",
  "key40": "37jwB9k2StH5AsfQMnYJNqsZehpvbWnEyE8P6uq9FH6rBrExpoHqL7LnqLrhDn5bTw7eZ9JQcJfuLDqFbEnvrfPn",
  "key41": "3R1emaDgShauucqNMcKjK25No24VYcNouAFfemSsKNFN6AwSicNqeKKMtAJZPTjA3HBZDVUKJBSS9VayZ6BwzuHt",
  "key42": "5Pnpfkwi3ds4rK6FZjvATF9BWiLpQ8PpaUtCxsCyvq3FYKdAkncLWxVGnqbYrbnzPXEhEeT18mKvqD5om52m9Yvc",
  "key43": "4f694ieVRZqKC87e999Etb7o9ZZo9sVDpREnT2ER3Hs2n66kYatdf3t9Ghwa5txsYRvriUMmPXTqjVSxMiJDRAoH",
  "key44": "67hbq5xeHVZXqVo3fJs8RuKFTqTE6Tc4SfCN5haUB959g7D3VYM8BFkuynx1S4ntgL5u4WwZ4ifWvMSYijiuoUXx",
  "key45": "4vUZiji5K8y55XZminCwBLnw1qprbVHeMtfqkyafQrz5F3FwoYFCtnK394nHjVxGN8TT7gbjxoEtDLWKUcAaTPHL",
  "key46": "2H59tAVzaHruP8mGanYcS2UEySsEM6Xuf8s1d8hd4hzR3PnN42HE7NCu3SUnAdmKp9uvakJTV5Hk6RHHBjpeqWr2",
  "key47": "3thW33Yr5CJwpiqEHXdoD74rwPE3QYKLkbPSsSupXy1fwdZMPgp835P9CuwHdbgACB4VFGmWAJMVfM4iTZxcFBx1",
  "key48": "4KQ9VdpHg5Q5WvZUDkFELXho1r8gTW6S7DBgZ3LKV89z2XoebLotPcwPHcs4o7Z1udzqPa9Gfo8X39jHHuiN1jxZ"
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
