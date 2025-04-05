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
    "2dMwwJhVef2f6kMEHEvDK5vezvzE8xCtUTKA5WcsfLX8QvEP63j6wCkZ2XZQVjPppChvCCTPiUjLjnwKefH3XakL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HbisK3AUXQh2s1PXtMR1efkWhea3it6EvGnMf2KUBKqaYpFkJ2qJ8nCpZKU9uv1QTw9yVbayCTLoraDgxRVbJv6",
  "key1": "57wdmsZPYGzXwCbN974GHf5G5FKVF7WzT2KivhDhBbSansK8U37mgVpA1tYd6rFPjtiBPK1UQiV51FVvwmR7Dwhd",
  "key2": "cYRBNyuD7t6D29wcRojE7pMNC7RDah3gQ6ndkZNRhDENNjvDCPJdvuUPmaMrQwpo8RYnor2kfnt36M4JNF7D4Un",
  "key3": "4u1r5UVgANccA9NvZL245ZMC4kVVdZPT2mRz7o1k3J46T5hgr6oS928oSdUTdK1RAL6MULBk8Zy31XNx1N4KevwJ",
  "key4": "2F2LB9GmwQVnk2p72voewkPEqHzEnuX7HzqPuUd1KxT54Dt3xMsx3K2cGACMqc1oNGggSNz2Vsx9RtPPQfU1Mzfy",
  "key5": "3D1tgQnK67zDvFdyhH7gfafqMjraDRYxKZ5i7Mf11T2HUysCu2cNeBibEdz3666NnyJexwjzJQHufRWFbUFCfskx",
  "key6": "4yNKE7ySQGbiAnoPSCrPxvtqMbcebVBdMrwkafbEZhYEap8upELKHYuwNGz3TeGkTpEy6SVdKmnkfuaWarq7z42V",
  "key7": "3qWjK94iUV7xhGRC2HP8e4RKAcaMZvwPiAvNVKfmyugsHQD5wZFZy2kyozP336yGhtLKHHfwBmYNXCYDVDLpMg7R",
  "key8": "2XasjYFHd2bGR5HpexGKokN5n4dapxGaNZL6YpbgcHMuxrxa78YGXNtgJcrb2RV2Ea2t6fPNPqLfHnRM3y7GhaVA",
  "key9": "3m8vsgfDXqjSgJc2rEiwaC6Hxqra9Cc5zMe2S7NLheHnkX1ZCwMmUnvopDDBAKg8baopDTwoAPkvXEAMEMtMnTGY",
  "key10": "2uDKcNuvJf3At2Xt4DHbo9nmBpkazz2wAnX92GbU19qGaKW58W7F2VpX7ZYQC6Wp81K9pc4igyoxYVDSwWpsLsYJ",
  "key11": "5UxXpeRqKGLuaDm184soeJSrppFnshDBSBe3VX35YLxmSURgeyLfFzGom4cQcoQpzsTUeSWVKtoiX24GEGw7wXm8",
  "key12": "34WyXoYFJSJxAjoYCbkiYQMiHyejoTBFMHN6hD5D6jEXYDSEEFrLyQzCQKDJShP5eUeggHBKnTPKq6uS13aqjaNy",
  "key13": "2x9S41w9KGB2FSDkhB8BA39qM23KM9QNzZsxgc9UWX8wuSeJtefJJw4Whp1jyGzDJ85P8f4TxVQMpP6X5BzDVz6y",
  "key14": "S99goPCmNSbNSwg8EEZrcXws84pFnvqyf669DedeHQDGaW2GeSKqehmGp8d4eo3S3e4F5a69iVsRJjcGswRg27h",
  "key15": "rE9ccMUSPcM4bWKCd9sezEb6NN4hcGUo5zxPYCujktcYnGiyoYJzYHzHvGYb7aHXZf3RufjDaXQCzPJQttcaBje",
  "key16": "2KuAxEPA9oQrq8gG2VsHywAaLRazZDbs9sWqzqqSADhmowQpaMCjwUyjg2MHZbHSRECkH7Ws5hNYfYsrQkLUb7PV",
  "key17": "47Uihqa1sXMn9uQL2MvmFf71qn2XhVrqdxvHNvAdSii3J8su46GPwBCWon43CQ7YeKB6JdddDGyFoDEzyXxZqMTB",
  "key18": "4fL7A8ek7yBZEf6brXydAiQoZKeAe2iaZ8oBGoZZ32Z1suSE98ugw491UCESjaDZD3TFKiPN86XrF5Scnn1wDhc7",
  "key19": "55retXqFQfh9GsdkajmPAPuhXtEoU2TBfVUun9BQFDMm654x2KBoKwpQY6kTmBUqTPUKF17VJb5nmzhjY6A3Z83M",
  "key20": "159xYEFyeKhHNxNWHcTxY2NhEPKCjaCnaG1L7KWdgvvoA1iw5Fi4Qyt91ETsHvB2VqGsBuQnrSY2jc4DVmMCPDb",
  "key21": "4n4uQTYn2oNDvgCk8k1df5rVzxSqpFK1ormGN3SBGzC1iLRxcKPFa6YsgiqkL45U348tYZYw1TR2Z9RutaWgPqJL",
  "key22": "4YiJGYwemXmkjjczmziRsKPk4GiijWxvxVEgfUTGCLB6c8LAY4azNdBvpRmY725exAGW361FiuDaRNnaiPHAGvdZ",
  "key23": "3vYCjXnrL58uzwR1eq44Rt9RZnszGTnTx3Cqx2DcmoRpYfntgjn8LA5Nbz7uoJFV72UCGxHmYwK3NF8UpAdG2rCP",
  "key24": "3JnPvHtufu82T1qcQtUvrK3emjqML8KXYRc5iYHWhuMHGRXe5dGoATmRqJReCq66Y72YsSsXcUdpybgFE9HE14Zx",
  "key25": "2hf5oQam8Ays2FX53rmh82WyJr9HBVWgAXhx8UZUezpBKJPzJ7PrgrwiaAFRzUtEYMJuprAaiRzXCt2Kjn4eQg32",
  "key26": "62RD47msGUcdpqztwHTiqDDwFLibGMfvgytF2emPDnPt4jaYQQ5j8pv76gtLHHwzFdsgUF9rv39Cfm4ApmopzY3X",
  "key27": "2zD5389JDDdMZ9yAGgJiWmxBMmFNLX1aA5PX4NTi1PFSLo4vWeg8czAvn1bKPF3hZQ12dpNhuUFQn1hn9ZfpE5zn",
  "key28": "5J5wPpSdeimNHMYsQZLhe63fahPro3L7hJq1JgBdcpdXe1YCSt8Pywz3cAj3JbktBd89t71sLSseGM4jmKhaLm6D",
  "key29": "Cx9hXKDuWVtaJzcEYhHFwcQufnY7WC8AYB7Vr6Amu7JL3V6JUnoDxF8sBF4QktPrf6BHNSTNMWbXSNAPjvJKBm7",
  "key30": "2mKJEaeWcnPjjXG6r4L4ds1RctMgALmUKiD5EQJJhfJ76JYA2jPTNHxNjgXegbDzciSKvAjdwW3XDEgrvyebdnPB",
  "key31": "4DAiSYVfwcJvzDJxGsPEuFtQ5E6yYfemLUcrpF8LCyDSfe8zi3G5kHC7NwhYR4vSZVeakUvfVMM3aV5agf41qDjJ",
  "key32": "33tYsPxJXsSjzXmgNVVXRSKd9CDDeiTs7o2xLZLtbE34qPQG2KjVjQMiqFgCMY3w3xZcSghxR1UZriFgq7iFWNJK",
  "key33": "572h8wAb8FMV5Na4EEDZCSKjTLAmd6QTydH11WNDRo3tsWtZJZ25Naf1b93JexjfhASNciAJtMbYFwYgWKFPJ9fe",
  "key34": "mACbi8wnpgdJiQxSbQLcwvgq2tNZRBw3er3KaBQKUdym5PAKE35DesXSKwcMVp3Lthseo3R1MWfdzPvGre7oVT4",
  "key35": "52ecoS7sakysjW1W3bQX6PPBVy7VQxpPCVkf35y6y8CQ21Ck1oQzQxiXK81YvpUcMEUADpZRvvDQVDj5AybsHRX5",
  "key36": "H2FwQUc6e6LFKYCsAEdd4LhPc3S8sB9tThoRfKynV44kztBWKtLwL4uc9K8383n4mk7MF4zo5caoFHPm4pL8ii7",
  "key37": "R4sypywVNJgPCLvQgweqeXphNT8SwAmZrBsh8GWkVeLFroG95LSC4wT6ka12qkoTwsjbkcLrwWRe45Pq5RL4yhe",
  "key38": "F4VNH67YnXjaoQs6qzEqydMNUrMKMXncRrMau5hqH3NcMUp4iMDnVWpotuGqNEgLTNdUaDmfex4HJCX4cwtbVFX",
  "key39": "3w1VMeNzfFmFodGYFAwSqvPtVXrhyf64CuUpDNTjwNDpuW44cyb4ogbcMg5QchuHAANuD78T9y5EwjFRNtFwAxpu",
  "key40": "3S5Z4H2fqcnNwfcXgfF1QTUVo69RuPqpfeUcC8iJ35MSMFADwKnh1bbLKNfqEXBj7kmrxmGz36LnUwWz9Le4brF3",
  "key41": "23CYAYTde1TiM53y2xkhGegci6pqLn1uhTcbHp1BkghvD6wG2KkRSRgDFPUYZUaMBrQeCx2pZXnt5tW8GSsYkQVZ",
  "key42": "jetNPptiFT8Ey7p6G2FGhwwnL3f28dUpN1iEdT8MfBZqcfjZKUXAwbMHvY5k25FZXQ5yEk8yXt73HWnCgAhVzTx",
  "key43": "T1ot3exoeiJKBRmNmztQN3HfuhnCVgMAi3G4JpuuRLpyv4nHfAuQfy1HntQ96P83hHrmnxETyk52DLdZM7CrJar",
  "key44": "WuVPxTaT4mW1G9r9dXazuuvnWXSMgPzo8kTY8XJn7xFzMXbUcBSzEKTrb2xew8bMPq5yCPvoRHmBKqipLQ46dnE"
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
