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
    "5up3vaKKmPuAkrhWyUHVMB7VF1WPJf27Z46HHd2bTKN66zvmo1Ub7XxgF6MtVLVUqX3bHLAvCovEQFCJVDWzzGg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ydszhsm3t6fCgb7vexr5U3CkAgDrHJb3aoodjBtC8V9vKwprNK5RZri69smgcRiCRR3BKv4dZLuTEmV6fFpYimD",
  "key1": "tTVB63FhZmWDiPK4u7e6d6NcnwVXZ33rDwuVPhbBwb9tGeSVrCXmc2Yf6PNvqati4cVFS21qX6eh4GUN16JXPKf",
  "key2": "3GCTBRfpAqdbdBb4b9yXDf7uDkmXYLa666tnPF1vgqyiiXYrfPtVpZwVCHrcjzP98WgjvFsXuCSf5qDn3o9ByhoB",
  "key3": "gVzhNra7hzPyuEcxGxfVsmjkx4jW4mLGdaPKU1YPvwTwVGNtFnadAXYr6PCLaGtNfoYjV2XYcJEa9JeiAqeTX3E",
  "key4": "535ZP1YiZcZXBVLzLXk9ZV54mHiDBsZDETy8AVfV8RrhGGRMpPqeKVNtRdYpiRVj2ngEg9YtGiiTXotHYw5GJpCJ",
  "key5": "2RJM9Kp6xnxGGcTVCZhfuJH5hN3Avm4DM3arEYoTMBqtwZhVqBrCsLs1MVYaKqXVSSo5XumeNf3DQaZEXyHQXmP9",
  "key6": "36oUEEE1MHr7majGYnkTY4ETmaRvU9apNbcLYywhUVZGsRMxVkAu6chWWCSHsydsr3U8QGkRZqbBUfoYR6wiwXZF",
  "key7": "2hhqEwbCaCbPFGmh7f9UPy9uTfoVjCUjY1jmLpgM7ZqhQ8GVS6S5d2k6QKqFFmhhq8UFGSQsCBTeynpK4g2JKGcy",
  "key8": "5RoR5NqwuPGowSpe7ozAtHczS1N7RxpLLwKJ5V7zxGkPwMQfMrPivCGu35qQXYXvxLgL4DauCzsCP4ZhoLb6WSNX",
  "key9": "2Bppg61ivtiBFoce9JvdZG1kDoNFpRBF1jxqroLGfvNTHeN4sxyuxvMSAGTnUE9qp6G9ifgk2hpeYURkmvLVjLzc",
  "key10": "3NSSPuKN7bnqzarSoBZ4jmMgc8yKWXXTCrScS5isNytAnpTLVdudL87Uh8Vv1fmothsAaP7XzMySRha8tu1qviGw",
  "key11": "2z1TZzxGsbbSdFEv8FSteMFnqCfWSS4WNfxsjBvEKjYxXavhSqACs26dHe3k8APXidJrCJKjQJjravYN6RcX7JaQ",
  "key12": "2gAb2hDtDuiLKLZXMoZD166cxKLZjQMwwY9SCvEC7k5aTkAkoNLtsMFx3CRR1psnTFMbL7gvVbTDshbUytj66Utk",
  "key13": "2XZYWgZbwY1TtFSZtnkSyUMhvhYbDQ4QvXnzAFFCnxVX2yG3SmMC5byzjpiPSTSiVmRWTPVa2kDc8HZ62KVCgdHH",
  "key14": "4CCtHUKBVyo5TSeApv8FJUBZjjcPaFH3tJVmoDvi5GvBq2uT2qc6RRcS6c8S1NAfiUi1FJ2SqCuNmd4ie9hzwrAE",
  "key15": "2Jcz5fCHwwXmKknMuvZewmb2Z23tJZkzWA6EuiggZckswDhnNxGY6DTNRUxoUX6LqT7ayUpjDzVtN8WRdMWv8Xrz",
  "key16": "5f51SzSsHGvgDuusTcJyzmP9rJcjhDuTHbgnKyVVZWHVrrrbeqsFKn68uGunKGYoQP5SCkz8zKBMWjwq8hJiEfQq",
  "key17": "Gs9kKVYCnJ2TESDPGdYeboLBcGpWL9yEzUMNe9hm9JosAxLHxocURpvANeGk39Xa6CEZYc1Gkn5e1aCHoNEbWwX",
  "key18": "sAH4v8q82wU2moZxA8b6urZyzQsDCWgfKrHuh7qFx4rkWRE5fiDC1Aw7z1ZV3xLrJoj8tCSFGtEczdtmsY4igys",
  "key19": "3qtPVNwS2J8RthJAoiTCkmWfr5HNFdJo4basoe7PLVQpMJeYfta8Jja28inp3Zp83wRdpeeJL8xme9LhhRcDxU4W",
  "key20": "3DLrzicakoBEGs7bmPLMJp9r9khdde369hsXaDNaLTUbZV7o4VpT2FX9nuSaRTrg19BJsxauHRZa1ZLD9E6Exh7",
  "key21": "2jqUdSp48QcgMPbTqb9NgBXhfqEKuZZhjsrdhkUukCLQaLDLSboTzXA216Ch9M1AVt8T2z7pKdsfWNgF2ZxJnYpn",
  "key22": "35dSqcRMf483CeP427wjniYGn6cHBybwvUUi43KtKz4shyUo8FCA6TU7Vq4JMGqi7tp5GNHLsi19ESdDJdsqPbbx",
  "key23": "2EB4d6tKM6teaESiTy8eCfSQKNcuPXmjpbDV1sDAW2W6Tb13JfERTUqF1ijkcA6UYq9kESkdYZqj32gU1GH2z38M",
  "key24": "AYZeKDxBnM5yPbTu9ZawYXfhJXp9K9LSk1bz1sqCyKvevk7ExVDHn16GrH6PpLpuDry6UsVR5G1ZJEFJMydNHw6",
  "key25": "5HZ7Drvx7dJgX9GGUiy57QunxH8RdsoizWDr42hcwmPxqEBtHK3aeMxH2RmNNJg8YAjqCLDMLQm7HHWAXpXY99Ts",
  "key26": "4RKNkMaEgKPUv4pavxjS87Bxym8WrmyDk1t1Pj4GiGCRyGZoz7Pd2B4tHfJwJqpy6rwj5QN4b4bFkqMXdWpC35Lu",
  "key27": "3zH1YXTQgzJTZ9TTw3imS3EqmhVaC4BYzSjZfmPFa7dzuPthfaZ7jwxskfwJEi74rbD8PTR5pPxKzrforWQk3Bsc",
  "key28": "2bYRxeFjEwFxLBmBFmkQgJjqizjR1mUSgmcawXMC5daDEmWRvvHhHvGz1Lh9kZiN5iZeYfk7JZinbj6T4nJcntkQ",
  "key29": "5mRwD8D4kY92UUWd9Yq9i6rHgHUZfabwb9HbdbCZNM8D54dCERWBvJx9w1mCzf9L4ijEp4NLg76S74MoiLfFGH1x",
  "key30": "2TWw86LxgofkQZgsjLFvCupPjDDJiecDJqgVQPtB35CCivN4aqnLKDpkPbSHobaJmH3EP3ED1sB11Mfs7aJofJ9B",
  "key31": "2erC9w1DfsNAsPr7ug7VWyWsPDdgBtMRTn3BJ4554ChrF813oWhKhZaD4accVKuwVFGFDqDTDqxt6Zd2BUBkUSuM",
  "key32": "5BajwZesYuossztdexrBkhGxfJhQGrdtLSUNCvZHZV4Q27rvAf2fJqUwQUAyXpNGFUK383pB2XHWXquxquq6WtUW",
  "key33": "2cMJfwALwi5HvofUzggwcMPaSQRyJVosfweQa6Wh8kk3TUSjrmuWSHQFTsWqmKxbsTNbr8BEZ14bKVcNn1xBnVie",
  "key34": "26fSkjdf9aF3synKT34b4y3fxjTpnhni4m3prXDEKuesXqUXR7ydEmariKxRSqugeXUDxqvELxsjioc4DFD9uoJv",
  "key35": "XJFtSh43tYPsq7E8rrDG6V6KRNNSZ6eC6sTW9wikdkj2afFLqWMr2GsA4eu7h2pmho6jiNPiYwZiqU96CmyF7z8",
  "key36": "sbKSVg6YbeDyevbKqQwgYqfWNVnDJSDpae4P8uSCvst2iiQLr5GdhXt28u1oHRWhYTio1RUx1nGBK5ha726EnFK",
  "key37": "5UCsnvpEfkCQw8sNsbVjMy38SCFdiWVU8p3oq8zuCTELZrKavVmA8hjSsXrjyXmKSxP5S9M8ub1pF9VBDxQjU9wn"
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
