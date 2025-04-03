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
    "3k2gHnVXnXjpitkuNLEKYR3S2zhc5EtDiezB5TbSiDgmAjH5CpyzEmzQ5pSkHYm5uVzWZtREPMHJgrovS7r1s3NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFwYK3hJMNohbHEGZMrcaVMtVjxcAR9buWxr7R6TU6YyupdFH1PH6iCQvJMiX95TWYN3pcmiKLPaVGFPKzT5NaX",
  "key1": "yQh4qGJ2iXqrfdaqCRw8Z8QhKtTiKeDZRfKaZjcQM6rtJNxrbtXvxxA69nFVGaF8qzYCi6hZjXnxCAyhaSaXUJc",
  "key2": "3pLVv2pv6UHqRDYFcNR2GBd3uBy8jBfC5zcq2gncVCeic5dESs4Edn4q2cGerEsccJ5kSpHvoi6MEQSX6RxqxW13",
  "key3": "25jsJ3PZkRvpEi59gh2YUs1bQiVNyzAZ3Q7umMqwzEy4qnHv2Ymu31yY9eBb5wfu517deUbiXfwmdgnTiVNdmzEK",
  "key4": "3fxG4posaMdEHt34RynHLRDtuDuuJA3uRD74mtGCz3JUwV8XWj6mV9gMeqXBYmkyyfcqxp4cEMnLpXAMMJUmMkcE",
  "key5": "5Znptc6525kQyzYfLjr9YaDmaWStWUyTCGfrK3tNgHhKk7kVzsL6h8RNtqcVsL8PW79y3ZvoQCxwthsToHAiBhkY",
  "key6": "2USRyyJP2R7S8ErZ8XcRWvCN7LPEHijiNzZk3A65UMn3WgQqrtNDGrEwautMXB83NyoFmSMWjeW2HcXKh9nnhWbY",
  "key7": "5hnLJ8K4nPpA4JNgtDr7YaFUadVLjUZimJWLVJTAUs6FHf9PkX9qTbqRXaig6c4tc5DuQpSe7VYcxvd9bmsgcjtZ",
  "key8": "5k5Et2de56xX1iCKZQQzqKhs4xQcbkisuqHjwmi4uBKKMerbwM4ovF5c95Y7pYzNJuBpGaZ57WA945h8V4VG4sEB",
  "key9": "45oSt5e5dUYSSEhVMPsUaaqagbUNZqfF2eqEPRVjqC4TBwubJoCPGmAr645tkn7CiqfbxuwHaNVxkPgsuDWuPA9y",
  "key10": "2TBfcqS4pMQNGQjaoA2ZuNC1R3acw3QHq31hivRnPMvgYkjZhM9NNRdy9M8VgEVhoyRcG6kBBpyg2zVSjnmK9Wiv",
  "key11": "3rC77gDmoa53tNnJdL4JjrC1DFPvH9sSi1Ua5w7qCbV2VgiBLW32DyiZBoZ38VUiQzdRcLL7qTCkPH1mUaUyzvbY",
  "key12": "nKm6hvGQCPD3AwnrM9q2fty48oo5SnFLASWoESTu9LCn2BjZBN5Big29PHtxFN135VisMiDtL5h15zX5HYirCBH",
  "key13": "1mhM8ca84djYp3eyuxAJ9xvQy3XBZsn2t3uSpEJBQRqiQ5aGKoCgECXyMsWMZT6SdfuGKnwaE57doKzT7B4Dhsm",
  "key14": "dzDYW7Fb8GsBpzCzCE7XRTi8ubisAN6phBLfccuVoR9PR1shSZ7ywvC96WTC8dFBhrC3dcqiEVKy7CEfGhU4Rew",
  "key15": "51GrGeAwwPVunY19HfrSXBbcTvMA4Qxg3QDFuCWswxGQXYXyDPFDZWZ5iUrYwZRA13UPMk4vkRTohtkA8xEB3L5C",
  "key16": "4TYnYmgH12YDQgvMtDLjYm36hu9WcCPXPuArmL7xXrusnSeGMGWVmQiyoz5WKafxYZxD79o88Fh57bLcUGeYSDi8",
  "key17": "364MjAR8WYiog7PwdBJs55PmZWwjKjZrPfN7W4vFfaRutJU1rWVJBm9jbjWEdgD8c9PrMNEKwhdUev9kd9k2bvaU",
  "key18": "47UteCF9uZW8kazYMWnms9qyFpb6dEjohkw9MoPcSg3tXVCjZ6ukHB1RkFs7AsSuk4N2LXnf3Kxhytsc7ZcQgmQe",
  "key19": "5qak1Gay7eYknWZw3ib32dhBvAdgAT1W8Qpb7XhqXaArXWN33mtjuwCpgRrJn3vWXrsr1VVjcbpeRKdDnZpJXtPR",
  "key20": "4DA8Q7mPvUtAHGqawEdrSwgLM1MCSmfz8FeoYGsHtgk41Cmhqyy4GrQbGGV9MrAxrzXcxcqMHSv2o98DVQzUh1d5",
  "key21": "X33zWQpPp1kprfixKnT1yXpuQfek4yzsHUGfPyTg8KJFWTYZoKFRZsaeu2QDL6FpwD7xebA2nbb4JsonCS4cZxS",
  "key22": "ifEcXi421AambWmg4yVfJVn4MGjGDeuKNrVLqmkXHRavcUYSPVpePbUF9U7VGw4EXeh3JufGxWeoW29pR5taVfM",
  "key23": "9grfsAR9Bbq8bZ7pbUHBBhs7vyhDU713ndL1t8pjSPksf9wvwADCx7uE7DXsEEqyz7fZfdhPS4SYkEcGokmkMeq",
  "key24": "2yPqQcgrxbM5Bqf3oQyVCxZRxN1QhwC3bK3WxTGWQ2zYYYn74yKv6eghcMtehUYPCy5am2K4ky2pZYm4r21CvFNV",
  "key25": "3e9Nn8jvDEd2YBszJhaW8i651JeFctnVHxqq4p5TuA6b3EatNRdiuXCScRBbwd9rKMXPGECAjU4RoNv3pS7Kor8z",
  "key26": "4hiz6yDbQkik4LMHbus34MAKRVPM9HXunpbj1PyFM1wcWjTn5uUauv3rZDogoKhoJRPTaPaT1VsqMPMaWzSmZzDe",
  "key27": "it5nQCxucentU4GvuhsAKTFowWTv6YvGRawsnStndCpN41vnBcxMXoM6vatuNstotJF7SJ2UVVS3xuinn52gJhe",
  "key28": "3sjZcTXny8aSt2yWmnmKRk3DtGL3cTbo6Ace5Sk8fMGcZAtWrDG2FnHFPj6KUWBEFF8RmcM2dezTd142iJ2gJJTz",
  "key29": "3o7qYGVcCh1K344zFkAKm3hdgaP3rKoCEmiuFrPQE95Edj5QbGTWPBTyRvgohnEN2pSewscL3MJ9Lm8qvyR3RuVQ",
  "key30": "355ToeNVhPV5bB7QeWsZNkEMdyUAcSftPnbVQ9qDFxKPg8HHTK8tSvXBk8HwcyJ24PBJhvx6SuKJTRqfxQGtjTna",
  "key31": "3icrUCMKx7qTJ8mdeXhbPKNyMBpyhdZP2NACwrFnd2BUCXS7rWrEF7xLVFNabL1Xebv5m9LFbTJFKsA8CztJ4WsT",
  "key32": "4SdrfJ4VZiXAsUqiQewsnhtDtDdFX2LXr58RG4XVaUEE8TqPzTWbdUAfYLQDxkCSPU3kuFb1xdAr6QMwWjqChgTu",
  "key33": "3BhF1jxSZsSeHvyJ5jiM3RF177rxfxicpxtzk2Ze1fTHE6UQHDCKiyuvxZBSEhgZq2N39tPDFJ7oJLr7V4N73BQE",
  "key34": "iTf4b6GBXpXMytb7A243D3BLYaM4CgvmYfuCDpCwgx1oZrz1cLbiCHHymAbhbrpqyiyFz6mfsDmK4wEUwrL6VkT",
  "key35": "2CeoBL6zW3zSzmku6D4uXQmb6qz7bQAweaZcsUc8Hq4HbR6q5bu12hBK4Sf7kvPuxt5mMbu6kPPpPaWyNXhbsuVJ"
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
