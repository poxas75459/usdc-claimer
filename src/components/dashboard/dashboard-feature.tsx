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
    "4CGr51prVw1mDy1KKV3XGCpohMU3saYHrBL7iY8rKMnaGEzwAtZE7NB2fmVJANLS8jggj5jMmEo7zQUwT7WYQe66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57p4z7xqT4dYx5wAztwRnx3NHs4YMeWvb628o2hVSUMCMVwHs73XyyEHKmPwsNYaSp41opAkcydPD1LWi5gmLdWv",
  "key1": "3Ns7GGghroTf3JSAKw95EVL4nfoxnmJTHXWhUhpqpcP65piHnEammQd7AsUXYz94nrT5LMrfLLxdxpYMvXbdEMaG",
  "key2": "51TE74phz4xfKfyuyRR8UBXs32Bi4eMdTWMkFn3ZCxFkX9CS5w8X2Lnp8uhMTMmKp6d2rQBwimD8tPRqEfUQW8i9",
  "key3": "3gHotUZPnWNmcZKf5C8AVmxzPVABBzwT88xnuxShtnypGbVxFN9y4NbE3UkiCvVt8CPEKs91JYMtwYZkj2ArBnba",
  "key4": "3zdLCJ27fa6HePzyBGbDJV7eZD1d3KivJLTuNqrsN4g4tMHCnBRAqGq9iR6sALSk6YgN4uqWptwbWKcUBSfaKi6b",
  "key5": "2yeWS9PTe9Hav81Ud6U6ydr83wb6AmGBobxgKhAzYwmq5Ly21ZvtFoYJvnb9mPNHYvdhMGCGTWcYLuaoKfX119aR",
  "key6": "2bYuoSaEjpH1FX991hzEwuMSE6HgqjdJiM71LUjanVfUv8yBtSHTWZifhRovkueVtwaw7drTujUuxkAXTBDP6zpa",
  "key7": "2pWzbYqvB3fTjsoEfJaeXMw6MdEpsNs5459qvVxz9rC6RGz2ftCrwPtWuG2qSkPgN4ZGvJeZeucCYYcNib3cEfP7",
  "key8": "5rHaHSqDbDpxcT2FTciSSefCapghLu7ZoJz6EKxs1CciCZREDHCpq78k5fsJiLJJ5vnyhZKppboHhfcmqPywTiaV",
  "key9": "386mUBE9AdRvcaxkA2PQ4BLubNLj3yxWdXv8U1y8yE2a8vysR6K484BbKkiWRUwFfRFRKPb4YC3FdrjjfQjvYXZe",
  "key10": "282im32gkvCY96JjxbYxJwdN5zDm9R4QGSnQL3FyAtEjFsBQSS9yciW1GZtaCEd7raMprEXqBAhVpvVSLQDdXVJ4",
  "key11": "KGdAjioMXcepm5BVyicaT2yF6bEXsZghxUS4eLe46CYadnin2feac2DYdKLqtP95wQS7hQ8qdx1AGZitjYPSSRX",
  "key12": "3jCSnUHtpkbS3UrjSxikS6DhtNWbkWueotTXq6SZRUtPgGTfDvbEgZWzcjUHGdX8dW9RW98s8QpcskXeN7HiJCDD",
  "key13": "4rTqQRf6oLHmEHS9cUPrKk5CYNUahKn9cQZG9SVumq6MYKtAF5AHxR3drfgkAsxpZhb5F2ZXLfqBGeEF4YNdt4u1",
  "key14": "4itY94n33z5Ceuqu8x1hbFtPsNYVCgkRoucjAiLMBZaU7XSPaJZYY5SfJLYHf2nstp7xZFBw2tJpAYCjh7qVFQrP",
  "key15": "3JLPRcJK5Khw9S5P68o6uFe5uLbvz4LheHuHgteF3ZmP2rLV8R1bXJKJDadPFuMSooXLzBEsmNw6V5yjiN73vcrZ",
  "key16": "28DsfBERCXE8wx8mv6aLj9AoXUbhEK5z92PB9rq6Xn57GZBG9d7Nbc8rNkivJBMbemH57t8uDfRZE7Sm7eSRnCgS",
  "key17": "48ym4EGuU6QtL16oXFswGpkAeKmRv5iKwmS6vLUjANV5st7Y7xceMBLch7fMa4dqjK8Z32hUwPyY8T3pmypkiwFk",
  "key18": "31kHEEV7zpNovSGLSzPofmr7uQbxH43HhCFDyCRn9vVvpdqXMUxe5oaK7wuq84KYh2DXFsbDbaq4hjrpMow71QoY",
  "key19": "XaSgBci9BE9WYeDkPJy2MWcd3VdAChzNGfQBdQu4XzDYDJx1xcQKajqgk7aWVtpqKAMUEB94w6kU8jHQrMakYTA",
  "key20": "2TcF8U4eua3cU7mURX1CR8vjCVdyP71KAgsuaKfEsBeLyhmsFTu2ZpB9beL9XUwbfuaBi3p6ydnfFY2sCuLX4SWL",
  "key21": "22SfvB1Wp7XhEXE1EdozdjSfeWoPMtTvR3855XtiZuJWZacj8U6QLBwiQQ7bYQyDgVHZszy88GMg53fV5pzCBLsp",
  "key22": "3a42Qq9r8ZeKjXvgmeZg64aiNaUJpcCeFAMAG5Ei7gvjapFJ2qUJSifS63sxb2t9XFMHyDyuVzLNyBJrVRuGHMt7",
  "key23": "2bq4oAx7R5fiuczTFpyYuiQNMGnhNABjhnJE1BvQu24pcSfN1MhismD4A9EcWyHdfccGv65RirGMGxXGwEVVFAsh",
  "key24": "BWnHwg8k4TRsSvZmF77BQdHxfbAEpXKNReBgzhV5Di4Fp3tyjVXsgrPNUm64haHAGuCQ9DB9mbchRsHhxWHVTGm",
  "key25": "5cDbe6wbCquCKEAcm6sE4D5jWeVvfzA9rqutSNfAG7vYD2CGzEVcYmYaHASNS9DLZiRG9vTJMkNCKpDs1YADNxRg",
  "key26": "gGq8sQC927S7mepcTX1zC1X1RsNN56un8abrLhUgEp3Q9btCyvBzEFvSPLhmNsLPymDsEKaHx2i8nkgAQ5Da9jC",
  "key27": "4GdSB3SAV8Hmvof9eqDoVDxLssNAkFMcJsHxsCkmHMGnPmU7dUeJmc7Z2t2vQTjDKM8sr11jg2mnAAARrtLhNqmx",
  "key28": "4PnstNxx5LcaCc3ooiqqK7zDB1nMUwfZFVTXdSGjw4oqGsvjjzBiKBYj2sPWoUXxKWoFJKctzjtk1mC3AhcHUY1X",
  "key29": "3YajWE6ewnKPPuC7EpaM9i1FJqREsHFWDB4wcv2usjsQNCbzVQ7LxvxjFvPd2D1yC12H2SkLr4dAS3LS489QYmHX",
  "key30": "3P5BSpKgACfSwmfKaHzpzJKaqAcVVx6TRbkJNgBBkt2eRpfiEcgffMNU46DAmPd6WKWBV2UhJCNJu5jTJUh5A48V",
  "key31": "2W3qcexbpePC25QveqtnCFp11ujrsAseRjwPnEGKkrXWgE1WbVpcAAJRHe3Bi9tUuteHYxfPerHDp2Hz7cHcLduP",
  "key32": "5CUSNzPwac8kfhmX6W5vVJpvqn7p4MyzqSyS5sRFBrg37jEvdL5GrYuieMvzA5BCV5ynjmMtVMWq4Zib7QJHC2SG",
  "key33": "64Y7iedrAFqD6K49YWNt4zkasEs7QagZkF4SaLGrCjVpjAPEoCoTpFn2TvcMwigvrti1FXJFt8N2R72FyJnaYTYh",
  "key34": "3H9XY8ZeRnTQFyqEgWoZ9eyxQ1WXrJz265gE5PVeMYdPUFZAvQ6TVwpTzVqQrWRQbfLvfMGW9bvw3WYHNYReuyKx",
  "key35": "3QKfRyyc83auZFke9y3JC6zWqTTDgJiX51ckGMnq8L6F3eLBShQV2WsAWutM2QtHDL5UbxMMFVuor8bd4bKHavnv",
  "key36": "meYC7ReD3LW1QYRq35c9ftsGmSoteVLXiWtT7L91XnEzsV74N6aLJPTwwSs4HmA9J3DWTR8DHaDVprttmcu9Wx3",
  "key37": "4xPbG3VN4ER21UKY3vyvLy1KGeEiDs8ZLVnLuBqwzbh1xDKvzznHTD7V6nUDbfEC3kLV1BnZpm2XLrXpwuvx17w3",
  "key38": "2DYMYsczv3bMzSrfKo7v5uTiHm7YNsd5iNtYubwKTZnYjaSxy8vAdrC8BqhLARUHWcxGMGvvZNEJUgA8PDsXuK7n",
  "key39": "4S3t93aY23irK7a2FMryUDgcaHwrbcwHsvG3vqZWSRApyvYNTcqH5TLrrwNMBGhXgVQvMDGzRpmDqpcuDksj4Fc2",
  "key40": "3z2PWRRkNzDrQ2BymkDHtCTEJeAVZ3StuQn8NZdK1T7Swg7AoVbWMtWoZBqoUZCinnzKZpNbM8Y7gP2csyyfQNyj",
  "key41": "2NUcpJC8SgmyBsABBqK1HPBAhpLHpxbeEvJFPraemdMaWWUiY3W2R79J8vXsJaeiLijizYoRVACz7PPPJ3qGExQG",
  "key42": "5r1749YvoQFtfvtD1Q1Rgk36LrYvs7qDVobHAx3dr64bCpbiaVpgCanHvWEXo1Ap3TyzX3qjdUAjotrZTPAYmTxc",
  "key43": "WcDJf7skghFziQ8r9CZRQohmTmgUzL1SskjWwr1avpPxFnZipjxe2Ler2JGLtWMoozBsC1v1SfAVvQiX7DDJ1sy",
  "key44": "3BpZ28AGsChEUydMAjGSqWaeyRFMKDM1bUc9K8tXUH6zqvfgawm33NRcfBSLRj9oQ92uKBf4x6GPZ5hSKas7r4bh",
  "key45": "4CztZuTrh9pYugMCFvTbNAYS6UQhQAAYg949tnkV9xkmSDjUL33hgnqNmCKN9kTHk2TNMjNQuMSVwYTumQqs2R6V",
  "key46": "4WeXa5x8vXtT67X8SZoBU3HFtrharQEFY1MUvi4pSUzoUNoeWpCVWgd77XttAUPUNbrXGgSWAumfzgz1tQ22ctww",
  "key47": "jgKhAjioJ4ifgy78wqU3bWoNx32KN1zxAePrKhJuoxzyoAepiChdbz1FWY6sYNzi3rQxm6ym2ivSEA6YEzpLLF5",
  "key48": "49kpmU3yAVzVW4j1H2nHqvnPBFDqvmvSoYKBTMDfrc8TxENPTkVysxsZQKsu9TAa95LbvVeTQp62YJaQYae6u9xW"
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
