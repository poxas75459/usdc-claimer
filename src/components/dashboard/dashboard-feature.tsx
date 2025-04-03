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
    "4SM1mhf5d7E9genM3jJkFaDEq6T62QHmvZqNJQpXBe7soRdADjjHoMqUUeTtECJBQWupvk6BkGZMEruisxnoqYHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5noJxeNJaRJjVzBNwtba1xQTC5XFW8U6XXc7KjgwXJAVW2veDU23f6dtCC2VLhHyC8raPgHmgz7yNzvByBKnn9En",
  "key1": "4TcmoH4xhV5hMy8nw3MAEv82neiJ32CXkvjHCU2GsEnNn7CcS8xGMVeN5qr7JKGSzjkLZjzYvtEu4tjLydhQQzWE",
  "key2": "fNgQtP4zvF6b6LmkcpLcmozz4kyRKxwxMrzqXark1vUS1KVEAVia6hRW9KQAhMqZ4hHPyjyeU5RiBUqhQpuzdTt",
  "key3": "58NpYXLmztDzXzA7x36CJjaEKfU5qvKpCRLpoBXrGD4nPiBsNqn9iAHEJWc8wDxxvW8VqUhwYFjDB3Nkqnjr5bAB",
  "key4": "4CW7PbA1aNymBWS4vRb6i9AxHXPCnV3phtmogTv1BWkEnwKf2J6cHLdHyEobqZTN4whSsdbUkP9ipvgsAB8GHkAX",
  "key5": "4NcJLhDXALiy6UY9YsfY9rkW1H8xdLPSZvZjUyDBrJttks7CRDGCsxapLcat1pADtkRi5cWrnnnQpiVzE1H7o9rr",
  "key6": "342MTTnh3HmPZ1zJ3a8Vfw1KTRjxSRSSRXtE4aVkSaQYZZvUpErnkDVarkgjwC249Y2LXyRwQLUhShRacMh4bsMc",
  "key7": "2wbgY39Uc3uVPQs3tuoMW7PdzEquP5CKutxRrAFecVpDUi2MguKgfbwnsrnxgD4t5oUVxibis99xoU344P23K3Jm",
  "key8": "3dH2jvVD24s5PqMJ4DkjFJhXacCwkpH6VFYBQCJrwryYENqGjnKJDgU3quRWmC6rCe2QvviQodzKxJqVXkkTnhB5",
  "key9": "3vqkNGhGGS93c4uhPoprVbufDfJrbLhQNtRw2UrqfnnQjy5QV7Ssbx12Bu2iDdzD57kE9oXHLJcSzFEsCgicbPHi",
  "key10": "2oLhFj5pK2PjWpYN1ddQcgykWgjD1GkfVdz6nmVqKnbnuUiDx4ihWj3oygLVQHcUQoJYuwkWTq3aFFyRBT1ybiBo",
  "key11": "5JXDa6xCqm1VBid8diLZKk4LWfP7teUHkFdNsbxCFL1NC78s9RWcvh1CFsjHq43GqvpSmMBHqUqfMkgNiyCwYmbD",
  "key12": "31SEZXKgfpaDy4577GKwks4rmQE6scGMc1UZBtscmdvgFG7nbLDzabP1MzqwLoetTKtpjseQRgeLN3wiZH2uVEoK",
  "key13": "3EbLuPbG9U3Sw7zuEabxH8hpt1kmivgkrFxaWXnYBXKKJGUepXAtst4rEWHVXnn1eVMbCPEFLaEegi5G11bFRYAU",
  "key14": "5EZudG47d4Xiw3ZgqiUGkBWv26ADFbXAtkqpiL7oR2vrRZyyZeVhwxwXzgj87DgGh3ZzikpAHMsC6rjMcy4hwx3b",
  "key15": "4QLTnkPVkKKkrYQXifrwdUPEGLLsco5QM1gmGVRoAoQ2StSypfR2LHDQXSv6E8kdkztmhHJQMv9meATNUCDbAHVX",
  "key16": "2jbzVjXS2FrwACMp85bkUT7ADwDAR573wtiw9Nj4Y9fsQH133YqwmUoik7sZCJTAuT5Lfgsi6PxKFGn9vR4xNhJr",
  "key17": "51Ysq2znQi4d6JDry7taunLv3RyakGT8uRWtFaDTCxmi6tT45fW59g45k14iUBBNsVFXAh6CoFXeWV8kq7CRweW7",
  "key18": "3H1JdZca2kE3Wnzjw54QshNVMq9gDaNnbEz4QgExuFqw4U1EQkNKjHyYZDBpv2ku2wNaZfYMRnEk7g6VFWZ7TsUc",
  "key19": "4Vnyx7jKdMtjYmeSxqLKDEqagkdu68GaTEMxGACpVDJi1FizjUNhM48otibbpAVCd8BF2NuniZbbMpmJsA67xaB5",
  "key20": "4LvYieNyCcd9MJx3EoKTdJnvzGMnZFZeWwkzADoNFGMxew6riM91XmEZqPQPXGAWe3AVymsagUnCwnpGF7a8p8CF",
  "key21": "42EVDYDunPGK9NNzpjGDHHCmspEMuiad2bgwUt5i7UuimeXQRi9T7F6PsntPC3xwBAbiTrxxuMuZFqXAb86gKUfc",
  "key22": "4MN7dEDMX2eTAskZCtMqUUCr8Xu8Qn2LJJAjpsjCtNSRBXVU9z52x6VCVYGDJRUSGHvUarWFfgQojJosEYkmGgwZ",
  "key23": "5kB5kmjezwW9ZLSyB9DfKtf69rpoVrwmqrAbYUVeh85ZhsKuSgarvy6JmaC83BNv3GsFquK6abMUVB6wBFpxay6w",
  "key24": "2JR9QcAuyBV4NgURHYukEgta1PQbAsCkoqGQmnSMYLuGrcpNGy7EZGo8Ec9stAGwUmaUi8M4JkoKwW1r8nhheXSh",
  "key25": "pMGPdf2fVSBiMtJ2ugmYbpN6SfcmX4vjMwHZiDcC8z3HNzvGXy32isMigPwtruNFPZuGs7hnZpkeHPgK6L5kTcq",
  "key26": "56reSn2S4TkgqA53WsMEvws3P3MnHX5ABvMvaN8KprBVcTa4gqpqrhBazXnyYM96c9pWUavvka44R4Lfa4seZ5gC",
  "key27": "3pKPvg7rejk6yakeXkiPpbVx9jDA7DNEVqDKyyJA36kZABCqAAjusaf4e3NyiHJXSgACem5BKDspr9zhnXXJgRa9",
  "key28": "5wRPYa91JgCAzWLfjBrmSmJ85qPm1vxt81TFdVrf8sum2MfX1uX6CREXusBgahyPxqjJ1qyWWmtJuoDH39T1MtPX",
  "key29": "BjYT5ipRTzPFv7aa9W8KpXB8pV4gcCNAuWALXzLh8jRdaSugbRRaVEu6f7QZ5kMVE932YZ11zp5Cnz6XSMoaxQf",
  "key30": "4Uv5hf6q2JHx68Kbp67hCXsU7vg7uLJzYaUEcRpPnTmebzUPgZ18GJL7cFyXrhnCK1pTvHBdEy7QHiRkcD3TVFBs",
  "key31": "4mgyDFtEGxwnYodb7oT8XPrjgYq27Qv1d5EiJgVBjgmCjE4YuMR3fdq9c97wWyCNT7f8Fs8SoXfpgjXgYenZjomr",
  "key32": "2LyabLmu1khzh7Pn5QixmY9phKtonuQhnU1bBx37AkpQmnsFSPytS9i2XND1vuEAhGTKkq58qRA7rhusvTw4aS6p",
  "key33": "2nszUhYaZcYGF2dvXb89uquaRvz5XMouRDYM8qbGpG16tGvg5ibLY3AbsFbVbCbaTZHdsZ6EgHUY3nE4usgMKtVr",
  "key34": "sYTq4uFcamtY3cpr4CqKnNmM1tRXGsS8nEzGWmhhyu4NDBxZPhnDftpByh2gD5ZQyBKkkufX6X6ydPCUAedD7aC",
  "key35": "5LjuSReq4T65YB5HVUxcRprKpqoEXVQF9kCLVocTMBTtbSyH4cpdLttUCAAMvpGQ4MF35fbgBc32nGA229BdGmhd",
  "key36": "5ZG7zG41nS7PDK6Ewrcwx5JFZNvEPTfZxdDKLK6UJf7knQDmfzBmJa87Gvc446gBmceoS5dYpLcBPxsoLHewBDNA",
  "key37": "hiWTRXaDqdfk9s69GUBZ8uHMGsvq8TGTqCptQjhD6DF9fykJ5LtBWxyFfmnnufd4Ewu5PHLPVuCAE2PrTmvtCee",
  "key38": "4bwcXMWqmfU2MdjpvNPPmb2dSuKTUSeydatBPcosoXh1EFCwEbwttFG1LiR9my3iKjdrzYzRP72bLCHx5DPsauh7",
  "key39": "3PERQEpdYwjvs2pLYBLXg4dAgURDqfWt3GAaJTTqM1tRzSCLxEy9zxtTMcMFpj4Mu9WWkGkqmeZZwZKE25NzVvMt",
  "key40": "i51WJSUg1vpjPQgxiWhoeSu5s69WaemVmwecQVCZfpmpn9jVuyeAkkyCfxHDiSHnccYANEggDWYgfHXjsYjQmyW",
  "key41": "3T44i8WNU1BrtguJekZzFjGm8niwjv7wYgx8dCrqPfNnp9MGKMCmQZCBi5q7JT6u5GmymxHan7ZDNnWQkJc7s5Mu",
  "key42": "23Xo7SwNyt1oLEr1uwN3a4AmYFTpYJFsqLK5rC75YVnkt56x8h7q3mhZzLe9868grt8zbb3gygWMzxjMmjCechCY",
  "key43": "5V1cxepwMjhNZoof3XsfxAPFEZJNBRqtgCrGtgsDQck1p4CZqgnLKCmVaKzkLzKZhjAef7qiYq98MQAYQG1bnZQt",
  "key44": "Ue6UwjGpy8rnWfrTyfrHkJnrHE99CDWWqKq6JMWAKdqLS7Xy6GZqn3HBtqWUKFWpYvjxVAfnBysgcovt2ZxuMqA",
  "key45": "p85opyeyTHfs3q48k6XEAeUvTF2cn5ugJa4fjTM2bgD3dCAEQKvHPhDLdUyu3QSeqy86oN3Vp3Ry2FH6gNWyEyz",
  "key46": "2mgSEtqMztgkfCpQdLDgq4Vy2Hkyq76SZJg7ore6RN3ET2HjVCCkh7nqEbHwbFgVrM1UUxP83LDoEaGdJB9tGFwi",
  "key47": "3JZE2BRDokaJN37W9Lo5RwGajP6b1PfqnzxQvwQktsSGzG3SyRucUS7ouNZaB8iwNFRU7NzrAZQhYrFHi48H4HDB"
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
