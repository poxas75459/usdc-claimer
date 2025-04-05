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
    "k3eVDXoC4XYqjYD8oYbaEhkUZdDbgmEDjyJesvWFBnBhqcmjjNCwWxCFmDvQZ99BP3Hc2b7sJKZjGmeaHM9Yieo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QN49M7Dq3fv3EP54LrxyB3tVx3xNoDhpmD4ytmCShRE1r9drHGfvr9pQkVpVaUGfde4X3eEy6BNgkaJWHxhc1s",
  "key1": "2t3wSw72u85dLZXawU2eiw1V7xhzfcJa6aPkQDyM6PQpt42D1aSuZrbTnZXj4mJ8sf4j3b3utyJZ1zEsrPBppd1z",
  "key2": "2WtiBZcTiweuhXeQA2t6f1bD4jW9ibcc6CtcCC1Yq9iarkrqAhg15wekMMS8uMjTu44Jpo1H3XHoNRevBiEz6Ujc",
  "key3": "48fV8VdYjuSknZcLnAF9mCjJrSStURsp9KtdxJmyX44CZcdjDDtTvLJjQj7Ffo92mzs17KhKbudrTWNo4ps8axKp",
  "key4": "38FoEx4zWoaUpp5DtN1Hu2KoCDh6pnp7Ss1hzdQrPSbiBfmZaLWpSy1QM85spknk878GDP7TH3RkrSNDUyUY72zu",
  "key5": "2w6Vkt6PeFrqWcDJ66xgHauWYgqvcBSsw1n7PdUFQ4aXEdKj7mH2pmFKwxH5k6U3tKRJEPZmsNtDXbGhJos6v2ef",
  "key6": "eWA3YxH5PzAF72JEtfhjFJPM3hYXF4twdEWqAzMAs3LREYaqDUEKgNpsvqYgn4Vn8vcYC8Yu2FdJpJzpt2jNaFc",
  "key7": "5XAJw75sqeo2yNZjj4HNqLARsWgKZZ8zB4GrB9Hq2VZuGghdDBKxciNxKgnfB2EzvpG9YCtBRWhQgR2n54aV1qPL",
  "key8": "cc7hciUbZK1wTj5cUKY7ZAV5Ld2xnm6A6N9tK4EtbRGRj6ex9NzY2TTGxsfuhNMCmxqDFdwfjwdhizAMjMENtnR",
  "key9": "56JJMWqsCsfmHLBsxHSkpvrJ4Vh4uhP9rSEEBrwki7mAdwCVMHqH4wK2kcfNNBaGJrmw8xKXqjbWfV8mupKhp36B",
  "key10": "4QDdCeLPJevGWc4MbsixPQLBCzjkF5Vx3KqvSn8KtNSze5P7zuc1tzgqe5LHEzjqsXxN1hPRw8jbsFij5MU9wsDy",
  "key11": "5uE1DZv3bvqDuZK31etUK2BonG7jjbgfGTz3TmjzcRQcoqNHp862CopFWFr4CypvrYfaHd8AbvM7bKQgZRMMT3mb",
  "key12": "65uX546n7kQSYMZEkddQtS9616aVgbUAn8SiFVKgmLxQJHRV9qH6ZDKdotJ4qw26zkBQgvCkiozq2PRQLPVY5h9i",
  "key13": "5dDAJRj64TAFmjkZ9rpz9q8ora7U5XnstP2WKSA9Q6jtXSKGB4MTsME28Lu6szU15phEVSV5VLczs9TXRjBubeL8",
  "key14": "3D7W1Qwd1azp9heAZSv8v4TPxirEomKFmoCpRCY9ePVqin5pYj74pTJmVfnvjeJKamLE3B9D2jgYytJKdYbPhukt",
  "key15": "5Y3nCFCbueCxncuk3NqEEnwE1AxgXnW4m4QMij4nqrTUW5Sn8LhTPbWXFs8Zq4Ye76zcci13WuciSh47SF32pSQ2",
  "key16": "2hGT47FnUknRNegxwXTmo2M45k6J2c45gX4JmtqdUza31SeHZzPhcCa1cJg4YaUn9CRAELKzcoocBnkcW6c16nZ",
  "key17": "4HspRJCYbj16oYiWKC9t1a3Bz2LDJmuyD8Bf1WvtY2SgbaYt1pRbYsMtSCeuqo65kdwn9VbkjfTh4ZgeeTdXC95S",
  "key18": "616J9u4TcYCN6oNx6B6QZNuu2Pn59nhBFkmVxEtsKynRNgRPf2SUqub8WJ39viEHyUUyLrT9KRmdGiw5ZrjBb75y",
  "key19": "5Va79zMdNkyojjQZHPdwPmzA7iAUoVnZKGkYTqBVh9hvyiW6zegdCimz4CFcTELjFH15fdnU8rTPspi7PUyw2iNF",
  "key20": "423LXDKAho6KDsHFwBAhaDUijVuv7TeXJxxkLQsm8u8SuH4EPHsajV2ykdtQPUhKHvPLJiEQ5v3RAHorCm94bo9G",
  "key21": "59vHXmvqsio4q4ZJAhU6f53mXbmAv6dFdupXf5a3XqNWWHxMc9D83ZfnprbfHk9ZM5vrPDKAHTUPsQppEEZrucBu",
  "key22": "44QiRUNXQgC822CfQPF1VhrsseffVvQA2WPBKnZfVnbJMPxyjhkQhHvFMYsAwL4wTexWjynv29MnDzp37VVWEFq2",
  "key23": "4uMyQDZyGbDe1vTzX71UDhqJsKQroyH1ygEsBK8jSpuoiSLcd4c2PCXHowTuxjnAfFz64b9PWxdxbnte9KqfDbru",
  "key24": "5URy9DTQ7vUa772BsEdz8dB2LMa3KVpu7JyhREUsCzG8vAT5326tWkZbuJWsEtMK63xGPgcPDuk6uMwKrE4zFXqR",
  "key25": "5mW9jPTTHQVNNLmCV8XKAG3zJjyi8PW3ytTdBGpWZkFKPyhswzsmPwZvDyBWQZGTEw2wKmb26kDGc6k6E1JB12us",
  "key26": "5KSUpMdourjJUdZAqyA3ifemMXV2dH5EqUDVJaayTN3G7QCeVpHUyGHfs9iNNcuiHGyN2GuaXZSZccDnViEMQz6i",
  "key27": "4DCVW1VxhDMFCtmUuWpegUHRYts1Zt3dUt4qXKuwsC29pdFX5wKa8QwTdwXXsk5d42UPCRvCcidEmiHNikZ7xU16",
  "key28": "4zx3b2jf9hCbXvUo8fzMZ1bgkEEMTiioVygQ282jP6f4pxXbok3p8hh9TkLw4JoZ65JusVmSCzqpUwRz4zw7nRg4",
  "key29": "4zsG3ZbmGBqgGYzAKbQ316vGrAVGCYHEx7ywZYgcDAohBvTi5YyHp2AumLfwZsxXJHbZ8YjgcC4HBKZdJJd65ZLL",
  "key30": "1WjXbfLBFjmNRxvF93KwQscQdY46EsUeRSWJ6fjZ2gWyfus8iLrKaeXkK4urMyWnQ4mr9hLE1ufwuDrAUWHtcwQ",
  "key31": "3pJ6myGwHpfBG97b8KUgiFSCSwGqdabkhpka5zYknY4SqsXDaad5wqRzdZLwf1RowTXgFMRvQuG7tjckVc2tGAoR",
  "key32": "RiTgU1oeKZQZFiJdFEfXg6qhogSU11EK4NFsmWWbj57dXCxDqfZXMXUYSU1YXPpR2qvtvwarcPPnvVj76vmn7js",
  "key33": "2V9oSkHrR2faVu1UCojpqfYZesfJSVA6uyUNnxjK7bKKTJgwqCWkNQ89UzZ95ik2mwUMtZmkneGyC2x1e17T3Rqf",
  "key34": "49pmsZ8ph8aPM4PmcYUSnKw2HxtvLd2vEhxb3WoVfQE3rS55bX1cYCSDSJJwZQevDGPcjN83s25GpijevtK8a6RR",
  "key35": "ZPSqxrgCauBQmznTB3QAxfwvqZTgbBaEzvrLifCxWswT51b6mEj1Jsq31DZrZWg8GppgTkVksiudgHk7spa5WrY",
  "key36": "aXMf9xMwu6Srom5ysHD9YcN5kD8n5x94UXcWZsjBaCgUyq71F3Uy8VL2dNvRTaAGrp316eqhTh4FWZezjw8h4os",
  "key37": "3btRMmCgQzLEAoFUPQFVUkrArnJ6Ez1GrABcF5woAFQoez6ezpsxiwrJPgU9W1fJ9GBGqZeAjTYuYcA7X7XjZjfh",
  "key38": "6336YhP9R9BDR5RxS6tYLTtjVaaL3QCtoEvmXeeekRgdoF9uJVhJvA3R6XqJbE8rbXLVsmpx3GcfM5n6qB65JuyD",
  "key39": "3kjaPbUEAFx3Muua7uJdBfvnEYbjdugREjEeHUu3yWTbjaqfVu9tVDxEMJi1psrCMtxAH8DHhUNUQ7KFSH1jQ5KL",
  "key40": "2HWmvn38RPd5gwrWJphcHHT7i9tnyh3ZMx3jGQ5NRsdnQwpBwekdywL8Kf3amezYiLBuCYR2ZaFphx6WxfpUjzZi",
  "key41": "5BB9E7Hm3GLgfTCLEKwvuLbUStmXV69WhtSDFPHPYhKwmYQCC3gyPVxpQ8gJ4njFHPV8pXSCnSZmWmD1xX2Y1Ejd",
  "key42": "5DqbHE3DfLSgekbj2YGFeheRNaxWQP4pLJMC72GA8WprQGEyLPepjbHHyBJugn1iX8uwGPWhZ4zGJRuaBKUsEAeK",
  "key43": "BEdUpSa8x3omgpaQCrzvEruwbamUR2MugFZ9wrDrLiP9KeAQtdCRTKAqXK3rqZicibrtZVfQgXPj6hYoHQZCsda",
  "key44": "2887RmetXt8JCwuw127DcAHW9swx5FdbeQNjnY3ktWJXWnu4B4wRoi38Bp9ycvQPksr3ao9c5AGgEtvWY4ps5eyG",
  "key45": "fCsq5pGYBCVmSQ2ymyQoTXq188pSR111P8G2RFZyoABtutDySjGab4m3TwDUq5Fkkb81Do86avRsJrtYGkm4GkU",
  "key46": "4RNu1Qw9waUy3dUD536SveKkqLXEGoKWAfhU56acNaSFNYAoPSEtYPKn2s7rZ6YRBZNYoTVZ4ehSBXhsYVMGJvnW",
  "key47": "26jsmY5TrtHKmQno83mxGyqfQ9ytkY74bCzw15jGLaqMmbE7LFyAZ2TtZuBpjWzq6KUZXVnsTdM5ns1nz9RRDo5k",
  "key48": "125XDMtyKYS4XVZ6mKR9kNagnfZHPcvydK6a252pToffjV66E73AqyxXJ24HFQJ3KLJKedCQkYBp1Vs8mDkSV3Qq",
  "key49": "5LwZhr2EEztvQ9uSSrhSGZwqqT8wSDM8tb9TyLDBnFA15ay8omfMDd3NP2457QuxfbZLpE46DkDYHSmtcffCc6Bu"
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
