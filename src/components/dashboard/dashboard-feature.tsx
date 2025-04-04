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
    "31vCeF2wBdJaeRJj9ireXnqfYuww9b3PBhZugrQ36N6EbCrXxHL6TKNwNcUNPB9XMJEzG3MBT9x3rZqj9QLRfztV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFJ1QJ7W7PnyykCA1Uf12Troojzamo3LxbrW5yEQTmcMXG1YbkRiN1U193XGpvNm2PsFPVT8svKUw7ifTHAexeT",
  "key1": "45LCMLL9Yb1bsZVsZDWjHTXJsLjnAuCwHP8NNfBuNRKyJoeo5pTDfZVL8sSspgvrgmp6wkZogAUvhH1GsdYenXHM",
  "key2": "58KFW3XUyPHvGiGXWXFuXQJwJisEwZLRqiuMtQKkkBNTJnJ2sq59DriRNgQyvREmcezxN6ZzqRrfqdyeYTrUnZQD",
  "key3": "3vXGZMmkdqiDbZZHVsXQKDBPa5wkXqFswtURo9Yfyph9B88wxVq1tFuMAmgLZHd4ZT1yxxou2iiLN5zTfbG5DUAi",
  "key4": "3X1K6jJhESCWSsAdv1Qrnvbs21Qy63iZiS2Hrp9kwNzMHTQzoNW9Xa1VDBxdYiQJAemPkfVDh1ZBA7TC6kkPoScu",
  "key5": "5b1j1P7873uLv1ac9Tm2rJ3ETvustidhiWRCkKZvCc51K7jduDhtHiNLDLDQ4BeNdMTuL1C5ZuQWhPfcSZd5vv1q",
  "key6": "bbZKHtTYjJ7ULbtyvHfDHdJu54xqhvECa198Bd6GvZ1qtiU46RMb9tcxJzYw9T9vRXG6u4KyBbSCDU9NbsGoCar",
  "key7": "5mZrdn2amy4GeDtzNyvDECmcZpJnThCnYvgo1sp4FRwCbgx8Az7yYbsB7AJ7iZCyXEisu7SuBLrMMqJxop2F4ztE",
  "key8": "4R6SEqBdUAxEzxhLVfu8uroDzYjhu5oKpAN84M7se89ijVB8nD9yTNruueADuwDzEndaa1Ez4sKPr5k9R5kViH8J",
  "key9": "5yWnpvjRTkois1QH8N9CKid58B6iBTEb6KV7Rf9xeFnh8fTNeo4ajdqF5Tb5ZRhwDu9GyCNUDqafyd9G9pqcZBNG",
  "key10": "2bjxX938r51zB6DDvnVvhVUXSDRqY92wmgWwkdCEffh7Wefs5necKo4wsQDzUu31Zp9z2WxBHZup8TeiiswrEf3n",
  "key11": "39EQ2kyvPQNzzGUmcsgaZ8dUHFr5UtMbPiCJp7QAGBiiyais58pLyPT6voyV9KYa4Uv8VHhajNAdU3tkQZZfnMfE",
  "key12": "3yz3pm5tQntk4qBXXvZ8XGM6VkAYAxUuaBkaqgTuwdNEMiAF1WcNN5RvaTXsRbzRusazSJarLbouTmfAMzyQepm6",
  "key13": "2jXkvYtMNgNwrsHL3UGDv9ByLbYwbQnyUr4LPGhVUviYrrkWvVP2Ma8YscKu3S3N7zjZySUG515UEgLfm9wWn7HV",
  "key14": "1bTT7mMjvS4BhcxZkjaHFhRucSat6s5pyJmYKz63RQdo9K4fTDjvjPe84HyWpog98Qz1XUbS73NpYBLVYLVBDGM",
  "key15": "53AN9zgRUayJeKjDR69TTq9d9XX7g5CNfsKbr8WNZw9X5XgdE2XjUYn5UGiV5A4r1wkrZ6VzBHJVmJeUsuj7wUwz",
  "key16": "qSjNT1Q6f2p3BAjCTNhDFqxdfNCYJ6v8twQ4jPDf4Xd8UVKDWjyz4SLKHEkMPuMErmt55w4KmhJXAeKcnmNeAWA",
  "key17": "3s1UvsuumUjXGrQvx9XPeNkLzo9EACYpi6o4eeD8ncubPGdbharvpyeWNPbsYa267a4gEDJVpT9S92GEViBdMGqw",
  "key18": "tuXpfAXBbWSKnz5uFTtUZfJwBkAw7fkd6bSNcY5yRzKZakb8DXkKAWmQVb8ZzDVVXFG9PekJrYzwgeyqE3kauJN",
  "key19": "61WrAtC3wt5J851BadrWuzq6Mm5tnmCcV9fTeBTL2r9t3UJTbEEETcXtFgyjYrJ7xMPNAx1ZdhwGFbap1CY25ag8",
  "key20": "3V3ssPmgyLe5b4RZTF6ejAPzjQ9WezcCaeX5UKARfPDmVVUrZBS4pfZdTHcuXdMYovm7ahcU1fzADcsd6D1u2isT",
  "key21": "3rjRXxyFnnGUhLw4UMyoPsF97VV9ojPvGGX4pjpH8YaUh1W1ZL9LM1hLKwDDcsVXey4Nubzz2tPJvxpu8oPUJ2QD",
  "key22": "7jxhXhv3hz2ge5Mb5GFVePQ8wC599eqJG1AMT7y2c71TaBYpn7QQoQy1jBoGohx2PFEf31LTWwS178VzERZ3bo3",
  "key23": "2HxWbgqgZHJYmfzteq4ZjiyvnfAM4JXVh9cavXX3yUneJ4uptmtMprSmtUuZDVp3EzhdMC4EmpLj2bqRuRqQkwAj",
  "key24": "2RNCTi6XuwsWYSATxpPdXyDqe6rDNQcmm36XjYNJLZJPhrGDB2AN55cabUE156ECmr5R5wR7k8EktymrMEDa7Bxs",
  "key25": "SveCTys32fW5mLq2RxsXvDHxfb4KnNtxxKpKs1F3Z7gc6nGrkUuYYCFwgJUrtYY3ZYB3YMYSqxrRRwVmG5RgNq4",
  "key26": "3BGhfPjY3gjkcHU4Qaod6u6KDWHQT2jzmvdwiEVvqEXfCFZNXQHk4kcv2uV1diUbsvGwhCygNL54BQwqVwbk3mge",
  "key27": "4KerjdFPiHVTSKQg42N9CV7sb88BxjfJW1i5gvNc45YKHKar6xWLTxDzxijxvUCahWk89jjdMX7mh98SgMwVQjbH",
  "key28": "4fCH9LNd8gnNA5NadJ2PjxfdLor6WueyF9JBBKCkvB1NBpNgBbtvdsdsB28QyEPxXkpuCZEfWTZmqEDuYPwj8YuR",
  "key29": "4BVpc49GCiqh7acLvXPoTZA5Z5CuFmpdnpe9eng7QtkxnJ4GYFSmkDeG8MoYYA4ZMHewW5jyHwX45pxXtTQG1mbR",
  "key30": "QGm32X7FnRxi3T9JwSkBLP4yd7zi2qDM6AKLkrin1QYLT2Bj7vREPodQUudoHfQkiPybtnEerEkup7VSz5G9rdc",
  "key31": "3TqdDfA9tef6ofyZ9npAba3Kfm4PSqESzSTWiAyGP6gTfFLno3F373NDkMkLzgT5fs5cpANrqWZTQJZ8kARenAHV",
  "key32": "4Cer9kE12ydE6Ste7HekASbni5spiHRkpJ4metD9mrJ6w2Ngep2LDLBEKNNDyc54QqhsSUhkdzn3HxhVSHJxya8B",
  "key33": "25kZ2pyDp8Dzf6wed2ARNuTryd9tPXBVd3G4RqXBF4WCNfkfSFV1vpVuzeAR78zQCxP1R2KHj2cpZTavCgxLcoFv",
  "key34": "43p1v89BtochtjjFLpYDHJ9uwt2quoW4TD3JFGanWp9Nvxj5gfbYxeijardsCzTF9YzoMQ32sGNC563ckp9ewW2x",
  "key35": "5HH7CgfjjxAabh36GJsyCWHAMcDwoygY5k2MN85wsW56nRM1Vm9K4svkpspgmjn5FwkQLJbavWuGv6HhSa5xe2Dk",
  "key36": "4Lg5ogaCYm2hJo4dY4CQg7MSDwzzdqq2Ypw4Zy26oT5gpmHXLUdxGqdb4B2Abst35NWWPuvVhQAYmU3poA4V5UJU"
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
