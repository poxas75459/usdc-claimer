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
    "4qqKNv32rRMyGzksDTddgRX1amqVYqjaXgXShc98WvThBRApPk19CoUcPp7kTHAAXA2axy4GpSJiLuB3pattZhpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFw6geMxy16t5ySxC4ZziAFzjmS7Vhkk4mxc8FbjgX31dM5u7dkzfh8R3WFeh88vV3MJa2f8vhJ6vqNSaARfgET",
  "key1": "67JhMaCazs1RA8bL9vCpGsjpZggHKbPoUSqh7dWA67bqRNuT8jgShkcPSCq6woNFRG8bkGcj9xkpQvGEbM4kZ7Gr",
  "key2": "DsP3dDUPq7YRh1r8CiyjvFjsXNjrrsBmjohu9seCa54rSFiN3EWi48FqEHCGs1uYsnwwmH2amdxb89oXFww3Ps1",
  "key3": "KBbfTwJ3TFwiJE4WG8okG63ZoNxjyUPpHb9Zy2D1HtZinfFhd4e3zG9kLfuJvxeJXfD4MW9KR6gRSQhW2ckaXgB",
  "key4": "3C4euzSEuoQsV2aTBMFgc8soGiXPafxqn2n4GqXWFtnaTAHgKQogkD6mGhXRs3LeSrbTtk9F5dXNEZSgQhZhFY7h",
  "key5": "37e8Pe2FdeFZwYsWj9SUdKW7BswGUcrwZFnFtZpEqw9N3BeCjCLqMudnBXmcigvRb9iciLSuyTAMW4jdREzeDzzS",
  "key6": "4i1WdAunb9cqdQWcfazsQg7PVP7o2z8kKMcxDLsx4QEYARf2wTySpi4BBcwBDiCBY6PDhTeNR2QmWE3PbjbydMUk",
  "key7": "3fXM7t7Bop2X646x4wgGFX7qXVC8A1kcJ56i6jBNkHvww6SmXn4CBgbN922dRzTKgU9B39SgekjazT7Lb8GMToXi",
  "key8": "34djAtLKCmotNvEEHLK9i3gfahpjA57doQWBEtwmJJ7EZJaX3qnWgEvdEWUTXHYbsCGtxJRqXwKmci5sYXJifYKb",
  "key9": "5F4JPt4QAg5g5rDtERSDhs3jwM5JKCGP9w9UsBi9jqgUfKVGctVVfavovoyJ4uizkynauM3bFfSGioyFTBGkDsF2",
  "key10": "4gXpTvY2As3UCfDHS4faBhi8xEMut5jdFHic2owGvLfSGDd7bAgtkBgaNFZJnce4H7PLjUdJNGpP3BgJfyZresm",
  "key11": "UjmKyrL8MSKENqR5PKwosvjtgMcF2D8xu89htixMDxb6vzmk9BMagsfACDpPfr7V7mKQpZe6HyQ4CVX2wGamG8D",
  "key12": "5HQVyn55m6mmMbcKUDSMe5FsKCA1RE2DDYXqHULcPGTvxqcetcX27bkXLP7q71heyXkyJcBfVFnVKguwBFqaLE8",
  "key13": "26jPqEecoTGknDnBEhivSUdvdvNPpK5ukca5ZjNDvu3FbYSwmtcyn1gvQkjxLESVEPQMpywadohu5Atf56DLKPTG",
  "key14": "4VeTqzt1uvqCpxtrncM5R1irNidPtWcDGQJa8J4BXq49uHhLQ8qbQZVtkwTyAzwksdrScui491Nj99SnNn68X2Rg",
  "key15": "PfiHTmpEVnCTpRUQHPH6jcXAPVxmdXhXcr1JjLooUnXHESRUyqnoSnXV2nrZnJZpFKddzdvQ4M7RFxT9f7gkKrN",
  "key16": "4bm7oJ4oJrybgXrvWrzDSXSZeM2Gu93SDNmEcoMzXHDeyBZcZ1i5i8iMzmgzpEM7o4KrSvfdET7FfxHTCVAna8uT",
  "key17": "5WxjeVyeo9DC4hNABs8D7VfjJHnY4BxwWKkgpSwZ3LquH19WGSoMCshkV4f4gUegwNXakhiu5NAu1TDUeepYxnHH",
  "key18": "5uKWHHS9MfCrGyf3c3UoHUwTRQEHEKEP6sjyQqo3nH1WxE1BaWW65gifFhGKcpZMokgqediAE7ffn3Eeqajrtscj",
  "key19": "4zevD8ccRrFkjGEHmLYbCRZkc2qES1GTBePxZbCWVs1DfLM91fEPDe7PCYFnF7K4nrKukpde9nNDXxnYUph9SecJ",
  "key20": "64YvQvFqSLgihM6s9TbVYJ6vtVcjZKEkz9iCYPNeFvrpNZTM9LMEvLiZ8ReDnogmKajHa96StcKqM1HKw18t4w4K",
  "key21": "2twrJBUq1VbaZu2oRJfK8wH7e3bfbu5ZuGE1za11YKmiKK342TrwHnrB9221SQgXpHJktDEyzGhcj7chRVxXeppy",
  "key22": "3MvH8ppPYRUk26ngjDbSwNdQkhnVJRyibLda3NktkaahLfP2tZbAeR7pLrT2cNaThEHe52SXHEmSCvvriuMhJ5Rq",
  "key23": "5cnCFRAspG98Lj3Fec3WfCSczhhQwTdriqB5moe7bjU735neWcXSYxbsaDjq7nq7xfahf33UPahiWySuXvydyKEs",
  "key24": "WrC5mnptj3ChHfQjALFxfZSBfRgRExzg6r96tnZGXWX2ovnMMmW5eB1C2Rzm1JQY273Pr27WPHcpMe9zeAzNvX2",
  "key25": "4PoFCfJ3gjjoAC8QxeqCYVM6TE33FgW82x5DsMgFrgDi8Jn3gvQfzX2XS4NPvatk5Tzq3agmJ1WcQvYfnc9nDpNN",
  "key26": "4SjFH5VckwS4krt7JbBtLu96gonWEr3mKNyfQWAinLNNgqC2LXdNm6AwyUQ9pab2ozcAuM5SoTECKgYrTBcSjnox",
  "key27": "3xbrsUB7ZcXJ79ditAuvQby6XrYTCABZGXDgELHAR43kWpJPW5hySFrWuHAuQqDcg6jHGD6EAULWaZxY2PGvGZh4",
  "key28": "qofesyeF9UzEsX2WQxeJHvGVtrh75svbE2d9vJvvLEbEVj78Du9LLhfMN4xrmje5An38jgUy5kwUn3spPVFEad4",
  "key29": "62LFfekd9f6xHnjcWahsSm5xmRYP3EM7vQxrGpCgQeXERVoN25YdLeLPZU59LQuMapsTC1Qu5EziXmYxWpZ5zFLL",
  "key30": "4zHMuKT6ymCGaJvN9Hv7mArqNzQVYEECmYiLbwNprHJPXhgJsUgTJGv9QhG5g4MuVFMRJstB9jnKF6gbbR5BPEbX",
  "key31": "4Ckm9ncuzjbiRQDAUkVr4Da9ywSH6sMTvm1qXrTZwFLuq3bLyPrYpx53HAmnkR8Jhf1FuAenGjGjVWBU7c2xob7i",
  "key32": "3RSx2t4XusHEEA67qUeQN66dmsjtx2hmDYiN9o9Acg3gFb7NwoP7ffUcwmwWbUTrsQuStkWc56JuyD28okgYW8r",
  "key33": "7Z1jNCUVk9ghW84xMKhQiu6CyRBPS3n1i6A3ns6hLTLke1fabK28XeVXWFE6ncRZ5sTCjVa3L4DTz9W5vypuvfD",
  "key34": "5pR1dzChKXH18ivf15prpKkhbheogzc98KupfBCq77FQGLQgdmDz9YrUFGUHBX655WRg9sUDatAyuscgesRQHkrj",
  "key35": "RWWiETKt96kgUvHkvYsrjWAZWMg3qLiKstLe7Tcu6GbvP726nQX4k6HiRFHhVZ96vCS1Y2UukgT8K321S3qVQqN",
  "key36": "4wsdbRb8i2WPmBMFNzwxsHUkZ93rvFPGr7hzZkeLaK1j38ckBdfms7HkJAe7tgU4qPpo4jdHLmiyUsT6M16N4n66",
  "key37": "3v8nQzC6NHFXLWTXjvyrkALP8D4DqMhVcr9NTrH4hvggk2XECg8jSKixNLVaix7Cickyt2brGYKthH1Ps2G1pFmK",
  "key38": "5sf6bSgGyoJJmn4zSSzjTMjmBvhqyyy6Azvd1uUi81tuw6mRHyiwirYgBEApeVwEZA9SefVJofWGUVWSam8tkesq",
  "key39": "5u4yLn3dtoScJ4t9oVsESR2uTG9VmhFz18ufBUQMzZHKUpuxWMgGW2hFDBtLWZi8z5jrT7CN1fuoKd875GhVbK43",
  "key40": "5mCwAQkzkyKb4A1uZ32fXYKTmdTUsBjXe9FC6udi74a5nQZwNsRZU2cwnUDcXj74Nn3QFTLw3Gb53YXsHscoNQeS",
  "key41": "kLXyg1fLGoVmn82xpWnXSffRErabTXYaFjwgnrrYDA4GTtPrcfVVbAKC81wqwEz8jP1bCyz734pm86F9aTCKCQ6",
  "key42": "2pJF9yE691qYk5dmXtDJTZHeegJtzt8nDEW1Bgt6Qk2edGvtnYERZwyckf7AuJWszNy4U7TecKDZJwuFMXFVPvVa",
  "key43": "h9SHAd5bXY7mDspbHPx2VBtdLiyYYYDYvpk2VzBg7u2RUkGNiYzLkQMZGgdcrniYLWzZfHZY9cCz5pzTQHN933u",
  "key44": "4YJ7K87fJXjZX8kmyv7mdXAiYdKrChhT6VhBfpQg5eWpmw8ezqxWWoMkNRwfLxrLxoCDor4NnfdQ4VGZZZW1qpwE"
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
