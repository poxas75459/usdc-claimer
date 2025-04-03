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
    "2cUxjncWc75jJnVa2N4cfp3i23XqM9JNDfTg8puNQwUh5AAsvrgDqgmNaAXNbWymT5N9UnFDTjGJFBkd3s7A4DL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cofqZqWWtzJoZDXxpZAZPxUhcjXqicv6XzMxZqeXrSPZv7WwCUg7V5EJWDWGMiuif2yMM1UELQ4DpAwpusYoKkR",
  "key1": "49YPSmihvYeFRpTtev6MXjtcnujVD639p1w1F4kGRCCALuZyFCn4JcEwGxmewGaK5WCKoxCpADq9bqAZAMkFQ4Hm",
  "key2": "2JxVnNM49pyquo1xkbhnGdDGDZbR6xBrY2naUPyaNTMJKcahcPD1oTqTqz8YVzksFYRUojH5Do1FWZwBkwVoNZS6",
  "key3": "4jWNDzNsgaYP9uySFEXU94Fha66tPrjKGzAXfiQac7B5M4uNF87bdT6eK9Y1ZqFRM997vCVfScEzZ7x5otykmvmz",
  "key4": "2BtXAZPfisF4gsm12vTudHFQeQhhaPjEFSpT3QcmrdGnct3MN76wkxUFUDCfCNLTgY5NnYVFSSxQ2s4nhjfRyai7",
  "key5": "3h7WzJhEY9NqG9LrwoQf6ZdusVmxca9HoPNDzyNFFV2EUmXcLBhTPkH9LUYU92rrK9TRUtgM6rLC46enQkYJYMmb",
  "key6": "JKd5qDLECmBNYNmjfaCho1MsQ8DQ9S2wTdwNWS5224GGmUGesP2FZzLAGiJi5Wjpd4s74fzr7jAaDaaYNasHRW5",
  "key7": "34uSLAffPVQrL4ZXypjzZ2FZAPNWQnbLBRsGL4RramrJqQugzTJGjsm9XTYeG8rjvkA7iGRG3GPD6v1MNpJUBcra",
  "key8": "2M3Z5uWSJHFH6Bx9iAJGz4G78HgzMb2mDVG7h3kg5faPLorPJZnCTBJLhkVU9cXgsLNZELBT5j72C3UWvPW4jdht",
  "key9": "5U4nzQB53DHWfNx9VAREVGNtrGR6cJ7emsekvmTe5YdLuZXEzND9cHbG8EQB9tZnLoxUiWeJ1dZ62e55dx7tSgPD",
  "key10": "59p49k4qzJhRTPsLrYPMHdtpoH6V4R6qs2ph4JJ84Nf7tKP4C2x95dUvyTyZT1yBjBpanEM1t21XD38Y7y3KxX1g",
  "key11": "5d4ZHpTi57igAMAeyqoCJP44zx4DnkyccVLD7ECzHc7unSVRe5MvNTuBWG1TbqxfiGxtm61PXVDkcjJ5xWmhae4n",
  "key12": "cd6YY4kppnagViTwD3YFR9kNYLySm6ntd9woBRZ5BczMdgS3oF3cPSEWwdPRh652Tob1138iJkiQMxjqCBrUiRU",
  "key13": "3m5Evh2uhdyA41fKhMMyasbaf43hMreDYMgkCJHZtPkAdcSodABuM5mqLwGMSgvHid46GG9tAsv3yUw9mi4KVQJM",
  "key14": "5aa5iaNw9zUTGSYHofxUxu6DBWpERgNf5MUx1mQQFy4LPzDk8xMN8e4JZLYiVQfpTsaRr93vV8eq7VaW5UhHUNid",
  "key15": "4UXyZh7jbNDBVfhcBgfJvi9q1fvvkhqvWnyYnFeeXiYMjE2ofZfZgmRc6nEuVt9bVWBii89YJ5HYYwGACn2FHhBu",
  "key16": "5byGRyUMaiNvjR4p4UgpVTwdTQVCY7p4sXwwCGtqpcGtw9aU3emiCFU7SJomCgh7MCW9EbSj52BBasNuVe7uaCYR",
  "key17": "2YQ2UGpekYnTWJ1RWQSXiEhkqGKANSzEQohD3KBpiZYXSmeGt9jwSuzN7HiEsdPUNzkA6usAr7S95ME8VzgxuY26",
  "key18": "qpb3HevCcrPT3FzDiJt4w6wusFUKQV4P1wRkFsu1csCoJujQbYrLQ9oC9QuTKmrAeeghstzwp8TCj2EP4FJLFJa",
  "key19": "2F6Mc9oTTFYBvvM4uG4DsZ75F3YGFsFcFfHM8meYvnoz7ghdRotRngFNMr5z45mCm4DVpnCovVUtk5AUQ4NV6PFT",
  "key20": "2To9prXaRr96CBiR1iUgWGUCECBydLPmZQXNwk5C3C45qYpprFgpnZQVLXctALszEwpH1sD2DyubU7pNA4GPyP9w",
  "key21": "5QLYq5PtThqwddEHAUcz5AeciA7bqwNsnsheQogZ5tiyxHHZsyQkhCmcGCBuDgJPqeJpGRL2o2UBMESAkm7SpNzy",
  "key22": "4Sz6M2mjvvM8FGrUSXx45fawVTzwjjGSXy4gFUPrZUb9RYi7a1QNkw9SkMG6k1r6r2YP3Jrk1udKy9QTvSkwR4e6",
  "key23": "28zo6MgzxVzpp78KBo69n559YJtJPcTDEELTDuTNwkijqjXAz3YYNBaBs8b5ZCZWrrqFyPhek3b8CH92nuiJpbic",
  "key24": "5EGCSoC7QGq6nx9wHerQt3pRkMVVXHnd3s7Nu1Esw62aNpEcYUng7pRWib9Lb2TwU3SQGePsfYSSBd1HDbEEwUnB",
  "key25": "5X4YpzwcD45tq87drAjKwuRJXG8GbqeH5vPxXd5e26PEaqgKKLrpDB485rBaQP7miXzeohNMroB96C3nmXFxBDa",
  "key26": "3Tdxf6AtBvUHb8Hq55jceJ6jKfB8xRmD97SbwG3RK7C5UdxSVhcUFdKT2P83CYAY25mBXYafD4s97JZBL1Xgp2Vm",
  "key27": "3GSS9xPTq3cmaUVw76z4fg21871ACvLpi9wWFaGdMPBunctrTY6UKCEMd4w9u2M2fCDeKtUExeeFom2WBSMoYEiG",
  "key28": "2H9AdqbK4e2JtDh5C9gKAjuyDNekWZBnGiaS2yj754sPNPYE2bBMgxRq5pcL7qAHUPEgRPG2e4FXxXiQrqixZctF",
  "key29": "3yBCA7GYaWuDgykqCZfe2c3P6DBmYV2gMHXkXLnabhk6CkTzkuZchMpG6nx6WyRjesKv3Mzeeyd6fBjyo6UDwZGr",
  "key30": "4EQc6XNst4HfemXav6N2ye7v2jmWdY77epsFXBoKo2w1xFmiLfjivoeCadG5ji6LdmPVU2SJbhYKyzBf7uS9xwFU",
  "key31": "A5jcJpiZiGN4VzxyP3sxhTHwfRRhG1L6aFDKHjxYNvGebMpLTbBhsdXe9LNLgmQhCsSn2V1r6Qop7zf3pgdi6K8",
  "key32": "5wykx2RUvVfg1Yb7Nz8kYNTUWxo1Z66weVcyJjCZ76Sedw6DVnycsdBNH9SBf8gqapCvbSFfBFMnJAqWq2FjUnoN",
  "key33": "2sq2cZHaSQppSemCUjW9KSUeTvEKunerpSS6CwdkfRQ2PF9ReG9yofhcQUAPtyPfReEmJayqZPKtnuYc4NPgMRid",
  "key34": "3aiP6qno8eHZ6DHjNEMUtimwVjMTDJtfRfXsVLupV7mWg8x3A7e7zGwbavzseV5G2TxwEw9X174fmip2myE1sj3p",
  "key35": "5LMk5g7j2j6akrf9gmdzzKJgZJTn995V7QCkebjXH4CvsZFwCeeGn9RbWQYHWPBWDjj4d6nDJC9ixP3Y9SZLDsHb",
  "key36": "5wfUGWFsdT65qb5KA341g3ei1oaRmaDJGVQSbi2X93seVaGF4S6arbXgJpufsAVddHdZFMdZGJddGiY5Jq6uAZnQ",
  "key37": "4HQCxRh2ou1mwyGeBxMVmTAKK2CHhDZshjo8Z7i7i3vpN9BNBWS4iofB6cTsUXNFRHuJE7hQud8qzPdbegkKsp6w",
  "key38": "5y9nqWPPNqgJzhHzpotw9VSdCyn9QiQgo22k5ji8744n7vVZrJZR9oiaydtGMNMm9Dk2XpT3j779PtXiztWTJyD7",
  "key39": "5ic2aQtNGeZQpf4GShGpPc3B3ZyZE5vW855EFY4gw7qTXjSY53ixks4ZKVgQnZySMmPpEZLQpb4SuriFwrgStTF8",
  "key40": "2yAf3FQwqvLYuMSsCTYLWPSduBbj6YHkPV6VuF3Y5scCbhg1jikpK4D6MiKcrBcCEr5qDHTr9bjHQf8kX2ktVHqX",
  "key41": "2caPNru23cFyCPedsHuLVAyuqYCQDtjwfVbWZZ1mnnQjz1JKF8uQC5aCaGyAVdjhEJg9dk2hXPbfrJ2y54vH7w2Q",
  "key42": "vnMaygzyNKxBaUncEfuCggLmrzz4Fj1d2AQjXd86y68fCVnqwbMJPXV3VgVq7g3x9pxyv77RezSLyX2b4LVwyDi",
  "key43": "55B5itDtHvkLqz61MvShfPmS8ARsjrnDmzo6D3NRgyKwob7Mi9sCoy9Vzgr59Vg8wh9FUgrJxj6eRBFx3ijMewNM",
  "key44": "2QhaiVdn77FiHzDNNzWcfSJWFwgXXfxKeg6Fw2LPHF19KN3P1ZpGaGoSVfZSKp6Gu9E42o4bpUKWwhD34qZGwNvv",
  "key45": "2mV71pKEyyu4r7aUu8Qjzy8YBXogmSKUYGBiavMpHCpVx2vzmzhc1PEmVLeVNUtAgmLidcWa3gwPAWLhp4EaKHaw",
  "key46": "3AP3CHqv6mNDnotmzVZ1zLLwRAxRt44MBC39dJhAqbTXSKuWomjvJT7rHzjMEKaeAG9s9MgKT1cDGVFgY2x974Qe",
  "key47": "XPbSMVtri619VmeHPAoRkcW5bWXSQzqp6aDEddN6rVPdNiRBL8BSG76ekvRtiJHA6cpVa8wmeheUhoFRiqGQbjA"
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
