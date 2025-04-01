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
    "vr1Z6Ut4w2VmZXWAgaC6pZCYaKNYVtqLD5xDy7o5ff7jqVmhXxZE5ENtqicfn3i9EJdQWFQBmfGxmTrT9hDTMkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPBRRdLydn3FyLJGK3CAftKZZiQXyEVBYFNnWZXGecUesSrnHMhc3F6UpPFd6tvSi49EcJ2bpySax7dZasS85uR",
  "key1": "58Yg4D37CT5yQSHcSRT7aCXpo154T8kEG8bES1qvkwYow8TYpUjrYLHbwS3Kwyo56WAUZeUkzjjBMVRSqqLuBn2L",
  "key2": "6HTDGofcRMP8X9Qf1S2Q3vh7iEeSUhah3voiHNC7oWpfZRhEv9gN9JsonCMbvC53pzh4vqzYVmvNbuZWZDYyqPi",
  "key3": "3GX6p9MDJ4xXXr276no72b3censaVg1wPRWDB8r24BszPoJJJHfeBk38AtvquRvkMW4zSKBQfzHQ878prLrm2i2o",
  "key4": "CQJNWh3va7kX8ckgEjukyYRgkmcGfcDR35b22PJiJJgDcHUr4mKGzEDibCtRVLsek5qDhZfBRF9DCLBXZpe6D72",
  "key5": "2Rumfvemwoog2o1HSpVnwv7kKP9ThNXddd6oqhaTfn9s1yXnqhrk3sC8EKRAbsnYbrv8oj2S7QxHsj4FvGwBUapK",
  "key6": "2LTiMp5gUGrrxqiQUBfCDJtbWUCGpxzivifLFaasayENRSrAs79Dt1yGr5Gzvbfm84ooWPm4VQ2AcfaBeQYvoJCA",
  "key7": "63VAqcfHCRqQ2fcdtDDnkjsEDr65HhMorB1hHTgwZgFDmAaRjgUY62kSiTqMWfXyPJNvwN4GTcwVs8ZTcvG6u7VA",
  "key8": "4un1MZEKSuPTZc18rVUJN7ga66hZZjw6eVs1eVa7dAYiLSkaBcZufT4tehwsntYAAV9dYVQPmn9bK43NHCNA98yP",
  "key9": "5t2qedBjNnZrH7SbMbisGx4dU9BVo2VxPaKitQch13z2XjDoRjcPA9DjR2Lc71F5zYKxuiS5bUGJUPkxn3XYNFmt",
  "key10": "2nF7fgdUN2psseLpNoNnPPurCd1YQruQoUsajV8B9jzYTGayFQfCxzttSYTwPY2Ex62tzv4hVmMP2Ciwc8G5vGGs",
  "key11": "5B6ZhuVzDsmiZxKWy4oVRBdbSHyMyYWLT3TNq9Sb4qrFC8H8DXmUYgJKweC5wWQBLpBi1hmYzXDR8DBLyUZRhCWd",
  "key12": "5wmpARy77hffLGcfTkTHcEsAhVbc9TR6jbYKAFyh1SRWzqmNQBMNBdg4E2fbJKVm6yL5rCkZkZwnPtwm7iGGgCak",
  "key13": "3Ts27d54xAxirSxSP2P1Urs2KBsTH6SFmHSLcwBL9mbwxePL83heKEu1RdpWQcsQtheF5Aov1ncn4oLK5SWrtfqV",
  "key14": "fFqBVmaJZErJ6H3nFvHse14ArmkkAAKwV6g17Kbu5kWx6cj8sWwjLehEG4Bpz9L7eNCgKRP1eH1uCR3hvAjsCBT",
  "key15": "4qb3YkJMCDSPj4HpTzUu7cimeWvTV54e2G8gdVvvocsyzZmaCK9wG6WwCRC48D514tWU2Pq1yUJFQuFuvT4q2ar8",
  "key16": "3xVDzgcNnCduw1Un572hutcDRcWmjnJSUMRisUVUf5676ST4weJrtZXVpoZGKa2GQqYyU2oR41GjHKypzWragZeK",
  "key17": "61a1UVYAE2fHWcNif9zncum4KS8vxPAZjbj2u9v4Wf1YhDbEFuVKC7yPQzthctZL5R6jsGLaaVmBvLCuLu1nv6te",
  "key18": "zb6tCFoKgz5aK5LphAXmruwVSGffatQoFhqcPNWT3P2UMK25LZwubcWZcVUJX1rXMLvzYanqDDS2bUURB8pNGmi",
  "key19": "2XEnRKDbGLwRq32YcSqH4GpBpkCAJyPwjMb9gy8foDh2oXvf4YzCAeRx4NvtM5nk7zRxHbwYJQ3NXghRfQvtCfkX",
  "key20": "52cquXPApxQfrzYa8ADG4wfKHBQPvopCh11yn9jV7UiL1G6CbSJQnG47QXcrUNcXmiwH1r6bLWPaYxnect7D1nHB",
  "key21": "5bgtWxVzNoMFkXkFzuEHMNZcN3DuSDMBCnLtoSFNYdo5mYW6uVGC5eoeanQTaocqtqn9iw1hKYQE7QM4sjyuvoSz",
  "key22": "2sQki65xwSjDvLePYxENSgmk1Ca3ix7PACJjtAUr8JKS8cHUKprLwND8PRSrtcXmzXKvJLHsQpAR5YvXMmkd5A6Q",
  "key23": "P6QeaCMY8yX7xKmnVPJPQug391Tgo1HG5ReSn7jM4fwueRGuG95xjCpj9kqJNw31Z2ygdeoTSACpkQQr3FDgSst",
  "key24": "5tFjLRNyvAXJTTJ1KoWETe1o9SufizcBsvkKhmg1ZwGhUsfeLqMR2choqUW4nzCUog3cf9PT1MPxdCnDyxXvxYC9",
  "key25": "LySFDqcWWyDbH9CYp5Kd6knppnDG1sLFrbrYMQdAwn7NUiNkvXwzQhBftcLcJgGdaZvAoKgk6MUPtQTgCe8ed7x",
  "key26": "5WgBiRcsksnMUmfJU9HXugCQCiBZLCTSwoQYGQLdWxnYSQCqH4SKodBx4Ty275GMKeapx2uqfqG1Gy5wenQWEqfd",
  "key27": "okZ1wwRovsadHQz4dawFBq3qZ25SwSGuq31v8EeF8qAWF1xieqv7THcbA23d6jtgcvVwGUXwFrVYVPPuJzjKwa9",
  "key28": "3Hrz8UCmxBB4CywLfmXKGZbCJ4YN6fM8CnFEMAsdXS8ubf7bspqj1SWQf1xtwjdiTYxhNFibs2PqnvoBWPu9xQMZ",
  "key29": "2AWhBetpT6rFuhiSaDZphuU2paZfeUsXQx2P5WCZ4Epeyw46gHwC97xMyCdfP2LyQQo8ALbMpAD5YMufDFjkU2A2",
  "key30": "5zZiceoT9mGC8N6wv6Q6tvRsKQ33hqszzqepBj8hGJCtPHqMNQ7DF7g4vyXNjweBC9QserRENFgAKoqxNLgShDyW",
  "key31": "rbmdpJmKdDNxxgsA6EK3q2QY19ecRMbi232Hg4WSn1fcnGDDTunJdygMsfmR5WGe4LPomgY6zpCt2KyRjb2iKrL",
  "key32": "fogducnj7r6TbxpRh5vrin6qdsvLZECVmiK55sqMmmTYPkwtbz1SpEoPMvvrGENN24yR3cgv8VKGytCYYTzLsY3",
  "key33": "2Zhs7vbgr48KZ5NPYEhf54dqzRdSDa38jzSdKLZB2SQ8bVhrxNFbZVnLuh9DB734MrRx2ajaJbPUaqc4sB26Y7SV",
  "key34": "2ZRGFGhXVa37wwE6Fz6xZNsbJ2M2tj5wayG2NAsXNnPgphiV6mYQh1xktRDYnuKN1Fhyc58MHZyCs68Wk2FezJsG",
  "key35": "25oJWP3hBEHYPc5Gpf18wubjwy2mScp6ZXwSymDWwz7MckE2MpU6CQ4XYyeSj6gUFd6DAvGXnJPmPh8Rc5aUxYP3",
  "key36": "2z81qCMS2LcE4rv1qLZQLLgsSyPyLBvGj2NYxjQxF9hFGomLmpx3MZsuryaB326tLS9ANkXV2D9bnxCEwqPySTUn",
  "key37": "SmfVCHidpEGCHWmVYE3G4FeUP5CLakxMLvLfGSCWj3s2SFNsAF1o3paE5hhdP2ARL73bukax8ssCYdAUgZiD7j5",
  "key38": "2jvCANehuhJAMVjCp1MsMEHDe7RDQJSbLPJh2uMJjZrpA7LNHmLtVdbPAK8C8ip9yVFPZ9AGrSPaUUXgALTfpbXo",
  "key39": "4wveCdLLvQfJ8puPeftpwCi1mzAkLmBDy7dy9zmd6UeFHg6HFANobugM8bQ9sDa95NrMxAjxMdpgtTcyfzxouQ4Q",
  "key40": "5NkWUJPSvd2YVGPhTPqTPPXsDuG3dhPE8uS4opFKZreradSe9dyyzWrxstaJaoR3gCyyJmC2RicoLCBREQqAmxTt",
  "key41": "5nTViLL6DpmgQJk5o8wLsZkxdpiytZYsmZv11K8iLNh6ed45uNeRRGKLZRGFggiFZBJzcFcBB7nwW1QM4F823RWg",
  "key42": "2WjAVBwA6Vnx2SJzbARS5zVGn8jBQH3QeyCdeeTgBS5x9FsZr3EebF7y9QiMUStpYn5YpLen9cdaQMkWEFpYtAy3",
  "key43": "KEkGSMyFRUK78hBzCstbSRW31azV4V6aJJJqh79jfacK6YDhXRREbYiMtXYAcyY5K3JBEchhY2VjhUH59oT6S26",
  "key44": "4sqSt1dn45sh9HB7uswnaWmPsNESVEmn5XCmYKxdY2TBfEnrfRc7zzZryMvkeSpexMCFT7WwMCNYTbxNQp4MwfSJ",
  "key45": "5Wo9xagMG2gYBhBUszV5MwfKKoAjTguxYVYRRKfzeucrb3a8tVLgVusStMyVT5e1AkhUzei3pLkT9PZGH5T77aAT",
  "key46": "4nRWpKvA22hMDUPLJm6CzpZ7tTZBdq2kHU8Ws8F3AFwdhP1cEPFAHnbE2RpWygTm3f8Mm5yy5QLwSyyHrhWK7UUE"
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
