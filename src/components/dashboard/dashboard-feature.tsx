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
    "5GmAbzik6sW357QrttzuLgdnz2TuHnU2iFcmdrqqcPJrxeEJmmX7cRz1z8qXDNqcvBTGBHDWf3irEabocG5YvsQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdi5vtzVFcbR4GaeLPuBbU5RgHegU7Ujm1htNZSnpnKQ6T35YYgTbJnjvmS5kcSM5V37xaDGYfM7yuyPH44jQtS",
  "key1": "2jnCdDtpc2o57rjnzbad3qb8haBWkey199oWhy4SBYxWc5J2wsgCiZpK316LQAGiPBBGbq4ftr5eFryZLdde3TRt",
  "key2": "4wfpViPp3zwb8TXZLFqQY8bkgbgwvmCyoLynQRWbb8bWxLB8A2bkbm9uN9EHDN8EKRHf542F9Xa8YHsVFgfJ2eM7",
  "key3": "WidaEkoqMMjiu7YuBnRgmwsteGJ3WryDLT5R8ZuZ9rxro8UugcCrmJRnPPosk33QpoeJ3WjSLUsxbrpsK1Tf56o",
  "key4": "9zhLSzD8xs7uWjV9ym5DH71zQXWqtPNGSFGAXbTDRQwvZmwe9nTsexFnxxKhE4TB9XvDXtAx835ndVZK9gMZ8EX",
  "key5": "3QhBKsRigCJVgvbe8ygVjqP1QDD6tubCKRSptMb2e8G9hycWrrJZ3Gx6yj3g3C25wQ8N8ii1rB5geQQmWwx5Q56e",
  "key6": "b9z5AnPZe9bu6HnczAr5pPGBXYSWF48DjjpjycGNSd7zRjm2Rtp8WDP6HkMGgt7ZSzibsrZJrhZtfc9PfHmLkLx",
  "key7": "2wZydjQk2vCEWVTe7EQVGDdsvqEdxrNEXcFADehUEjfZccWFjy8gXBXDnwYgHwQikCG6TiWp9KzX5eJr5cQomvx5",
  "key8": "3VcpuR1NiNNbX7FCeDyGXX7BTnygYn3UmZWZKdYuBm3b1Bo6rmKpfckYZdi6fvg1vkVgGCD8g5UyEkC9s5eapsqF",
  "key9": "UHtzBBJPWtkigmTqV5Tbmfwb3LFQVomcNuRHrd5J76x97z82AtDhGQXtQW6329xZWJzcHu8QJLXr6WqB3YmpJad",
  "key10": "rzvi2Thczv1pqyNxwfE25vDEALA1c1fCDP2GonkcjpLf3p5nmTNc6sw7J78vBPjW23xEL4zAgkc2eC6qVNsXbYo",
  "key11": "2P5ouHMMTfcvbHtcyx97zGMFyrcgwpfYRPYRX75jqNosnLpXTgPmKLRZzjBpFhGeiuivt3tqu63SvkgBY2ztvU7o",
  "key12": "3V9hxBBbe7HzhveDJkvAZuiVWTLh146DyZ1UU8FZY5o8JWWmY7n3yQWHm44W34iDiaRJt6MdAkgYG8uVYBteHAJ5",
  "key13": "2PfmHHEwvKnr4tRNfNEdo7XALYf1eQrefecYJS9SyHcYGVLwNLQ81qhf5rDvoE451sm7K2GAzyPgbkzF4FsoLSEu",
  "key14": "52TNpSprDFmYSPyMZ7Xpsav1s8ts7tpUDZ32GTatTo2EouLeXtpPVz1aR2FqiCyx3Ww5ofE6AVY2Zju5ExzHUj9m",
  "key15": "2ScTeDrGa2LBmy6nADvrxCKWGEkLbPd6QTkC2LL7L8r6cVDsSRoXmhURL4L2sT3NXToazXTUP3TZKLc5U24EJM43",
  "key16": "4q3EuRbCNF8CW22pxwNNP7WPu31aueN6mCmyEEL317mYBebDfL1uC1BBJ9PH2B7nrApi4TL6TVK2geNb28SXNvbN",
  "key17": "5ee2MTa87qQbbL4wVdiy8Np4ynuLhQm8NhssrDGod1V9jhFthZ9YWShSy14pRB45dixh1sXa9yZVrnMmzXWs1gWf",
  "key18": "42CsW51fRkXXCgmEUAAxLRUxWQCZihc9NTynwwUWYgTAGviczrxju6hYdcRiVctUgBVqEcWSAYUwcLbfv7ADZr54",
  "key19": "2XUos1SEuj5kJePc9EGRs5P6ScurmjZBntybPPBdBZJAc7GuXWFXFTuWBy6Eni2vG12YsLoRREY7BTUZGf5whdEL",
  "key20": "5GFE7ULCcjhsNdMZxsmW4UM1Sam2H9rc2G18wr6thrwKRrrsuxGyP6Z26ijHeovUjExEHBiY3HFh8JRgXGaS25K5",
  "key21": "2ZpJnGEpuwYPoeCAbH6Grytm8CruNX8Adxukhwi8DAWFBHzyfEx1Waxq7BDM5PK2ruT1i5M1XaNwj7V3e3zS2fmb",
  "key22": "3Z8Hb8oLJdFvA6JbSUWSZjU9u1Jw1v4sMePfryr9fYDGqmzNt7QiCMq1KPRqsVKuPZpy8s4ijUrJ3uLKxZtf64bQ",
  "key23": "47BwxQtaDY1zNsiZyRVmsNJfAYva4zUSabzX56N88EvGYyvcfAZ1Gv55oy7z4gi1EUwaNTi6WWHvYQztpmwsEeho",
  "key24": "3LzkDQMriwGBfRLwyEc3m3dBPEQxJdV1FgTHmvqfMuFr9PcEsAyxFENRy6UfnW9dStV9otYz4RuZjm3oDC3UXeEp",
  "key25": "4CPQrudKZbhdU2gdazJc48rWDEjoK1eAsA9xAWkscCAJiXAxmFQfk2qDsafu6uUoJdTJYT2ntZ3H9amjPKBVSmyg",
  "key26": "YkALKSHPTF7zT8iBw5fPFPJAgfZvQCAyhgUtJyAPfm7e41ddyYxFKsyPxX8oF51gSVbfMViA5YoMYTrmxKc54vy",
  "key27": "5npmSf1pZCLjaujdQP7cokQHmFRrZNj5CBMXgRss5gggbx7sPTWo3iwfJ1MT64omP2e2VDjh8rDtH7Vp2gPES7rK",
  "key28": "4Hfvujfmk3G823FHNZe3UnMs3ejAFnrJSmmSL3AzxiosUmhvpqRvF8GaSqVAT4rXtn9CpJPzeafwH49HCtpijoRX",
  "key29": "4NBdd53wafPd3PweTonF8HhsrkCewYJy3XkZ9rwZJLALSaYccbQHUZDYvJ6Ldi9cGyoxBJVL8uJuPR5WTbZuct6G",
  "key30": "QskLefXntBoLzPWnhZ6vyK421s3W8RHQgY2iwfHFnq2H1yge1Rhnkqc5St5NAmbB32TMVsVDjxHkYzjKrSoVAZT",
  "key31": "3fgUeEJHBQLq3Sz1Y7knMHUwxo61mY8ndMtXUzCjXYF9KfFBXNZByppf7K6tt3kQ98wVMfuTCShgWXo46XUvLvQK",
  "key32": "5XGWBTeCprGABqAAg4Dco47q7BFwy6aZKrGAuXNjWHiUtCLhc4o6JThQ9bmBnh6U87jfG4gHPfA1RMn1WuTUKi8M",
  "key33": "3gQ5CDDqXj2MixPsg6KDaiKk6edRpBJT1Pw8XfhABqPJdHPawowYkbGFZhNveqVPuyff8bQ1nSPhdPuDAiZyUiTY",
  "key34": "NzCNyse5vSNkzGtTUkqTCuJmNiTbPjT55SL9qiHx7U7arfggqRQymyRU9eVXVv3f4d7DXPfQcYUAq3DuwBsmDFk",
  "key35": "2r5upvhwTweUAez7iJhAyPjuVLYyoDtuRRfUYLi6jRtZMk7jE4qbHG8mVX5QAj4jZDB1eg12uDXBwNbeJtF2ULGV",
  "key36": "KtJrr5xnGzs3hYS3ZZEcFyiGbRakTMTYLKddj4zPBVKEfu6kJnUMPGzaxFbvy921HevAW8wGLRiyKN78w4EUJ5N"
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
