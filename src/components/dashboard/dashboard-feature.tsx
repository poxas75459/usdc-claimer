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
    "4Urdsqe9WpnMBDmtYkS7MFaLqVgLte9qvnbLpwL6sqRhjsC1awy5rz1vUa5YVSHz4cxHwmQPwgeNzkAAajNZUJLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WBSvjsLhRAbVLJfHKtE8KKCYpSVQgLN8FJTaCg1RjkF6UroEY8cUr4R1CQhTFdQ2ZmEbMQmBKKgKeZ1uXDrPzU",
  "key1": "2X4jcRgZ66aDoPJLnn8QLQwnZejoyE8GGzLf5KN7PS1wkgYNZJqjntbUCs4BZVWPiyZhe53is9Ma7GEGYbj6Viho",
  "key2": "2EVhmg6T46NgwnS3Sd4oTV4gEPGgGvwyrxLu5md4H2UK664x6adjjdAm4FyQEybAgJ3xCYzfQ6Q1jVy72rXPX9GY",
  "key3": "3wD92T2KL64azJVENgFkTGCXsirXHp5MgsxS72BRUYCjLnCP818UEBVfUm7riHctqCBedTyjhPUf2gY1cZ3AWNhu",
  "key4": "5iKuhpPwhgPkAChsFXuN9u43ZagAQ3aunXy2b2qjws3R4UGcPQMVjcfb5nRnHvBaw2tkRugFkusXxhhAyKni64Ep",
  "key5": "3AUPkDGbGQjUq4e6PswUtUbf6XSJC9N34qF3qKoxV2B94bmz49T4gwbakKnn2UFNVnWzJNa4YMD4yE9szFWc5RHk",
  "key6": "3KG3L3qk3Qm2synouyAqgB9kKWQ9EQ6M83K9FVAyoVAkfHAqdTs8N2DfoJW9n2KJ751rAYNM2xHYa7jv45d43qUF",
  "key7": "5KYkLpvztVxoUqhxPpW77X3VmfACUPd4N3NyWQzHoWo66cgqQxhNTafLu92YqMRtduWJzVxWqcrm8Yov3a1kPAQk",
  "key8": "4Gn9JoQMVJyX74ytQx9DhAaYN3U4vCuGyKEvMJRo5DniYpfedh5eM6LuNHpN4sodcfu5kcGposdqrzLBi1WyiWUB",
  "key9": "2R7DxWbKaNZpYqE7rAgXmHLf6df34ta2dTqyhuzXJJnDptKUvT4fRMM4EV2cyt44EFFtuQGtW9HMbWtmzaE54EDa",
  "key10": "4kWZVhGmsNNnu22B6HXonudNZ33QmokNuqivCdYdKuBihEBRarjvckD2DcMMTsETndwG8mqJvZSHuUpVMhXPpAK6",
  "key11": "2zUZz5WQYxhss83kPAsH1H53heeqjaKzzpUtYD18F1m9yJcZB1EifbaYip59g3JiDizyMx1EnYCCvR3UMQJS5y4e",
  "key12": "4nAQHiJLzxGqV3zMA8FUBmwT4GbHQJSVQA6Ks1Rf761ahJN9eunTECd9k5SdBHrm1w6PvoVx5sAaNWz82drkMvPq",
  "key13": "2UykWjhxH2BT6ytwQFozPMsfjutKU8ePnrhywKdaVACRscVbAVf8W2pQzbwwLRkmja8ZxVbaZSQRne44Zjwno7z9",
  "key14": "2RKwX3ZvnwJaeuEiVzgV2i6W1pC4D4fUUvhKdaj51b167Qb5BVLUKK1BQxFYmEVfhrKTabHhea6YXP9hpzNPZ6uE",
  "key15": "5KS4trxTHppCnGxxxnYws58R8kmbc2htBc9DaAGGgTBbVQSq83pEsjZTP4X44gMhZBBe5CdwkGndYueoJbRd24GX",
  "key16": "5hs5yPi4fsDDHVPG925z196hbY4EwVRh5cJQh83CazWwPU6Uk11RQhSfuMLXL6KL1LdJZxujV4TfqTvswhcBeixg",
  "key17": "uy7Jdmn4J3CzyZfJxLyUUeSoFMVF3tKV45y4hBW57N2YPfUAJYPLEcFc3bQsf5Xgut59YrzLsdzWm3BGsqn7RF9",
  "key18": "4iSCpsMcn3gctgd3hxyP88czwKHviYbw5u6bhfU6DYvFEzGqtBdgGBUefHzVYs11dh7ND4YbfR9PYhb9p9bPHgJu",
  "key19": "4QxemTtzPuanXAmHhwNDeFV9jNCbUYbgmrR11rk1uD5PJf7ZUi2Ah32tfVnTv5m8oicLqUyQonqUvJYYypKd66vy",
  "key20": "59fBZBGnQpSUj11zweBoqsaDU12GAAYAbCKxrHQ5R5sqM1U55thwqRQA7MKmwgA9wiQ11wC7qeqDG1Vto5b2HMuw",
  "key21": "4othDKBmioS85x2nkuFQLkEn6bKcrdJRdHKHUNkJc1hMVPx87jqSWiwKrWfmNdMunWoTREmhXP23pnbSQ5NYA9zU",
  "key22": "4JkFr7sRk5Wu6V8YUaAnRt4TkP8BuLvDf2CGg79LmbfBnBKyXrvMpP2BcNXaYNPN7LVCR6cpxQoqtCvENNvW6kJz",
  "key23": "2LQQBUDR74i3y1WMhSsKwMofunTTWXCqChUWvVY3YEJtPjZbCn8W5mktLZkR1xVqz7hes9WDRbXDiQuLT6W27Zqo",
  "key24": "4eUea2yDyFmf6hAAP72aLmx8sbdYnBJhbHeSL9NasdxdbqE172v2XgYmnkci4q8PrTWGvE71pTy6uPtahdUm48hK",
  "key25": "zNNypwS6LmeDDmJ87HYhWVEP8YaHwYvqs7ouNpsS1BLGcpdLBwAcivU3dsZo3RkWU6r9jmAdviGnq8DadAmwjCh",
  "key26": "3zKMmFR2XatrK4bUhCnJpXYeinGzqDTma2Mxq8CQBngjwmUm7sJYPPLB21FJLDyHd2jFwqJDVCfKK9J8i8urMbJ4",
  "key27": "3RhcXPR86ZsaLGfJnExze5nVjWnv4tVxgr5EDCM4DGXeHTLSsQmj8GY25M1Wf5R6ihsPXFAN4RXnb3vYb1fedf8N",
  "key28": "5R65ZQKcz6ecoBnP7tPSYZCGFiKKFwqyZKtBENVf2wSkBqiGtq5mpbXTxj2h1yeyLgDecyNaNwtDtyHEjSUca4rU",
  "key29": "4aWm7eZqQUh5NTVk8WqZJXyXFmWxHXN66F8f6Ce4PAFKnuUzh6cqktAXJZKRm2sk8uNp41Bv5maG1e1kkMFkC3aK",
  "key30": "45uf9uFvctvpEhsEX94jyhkUwfKmj4kMuad6mqzmfCM5UTB6ZanwqjLbUYfrUpbopfmc7mDLuDbECDCYZX3t8sLa",
  "key31": "5xxauX1LNtpbSieyTjXv5tT5WT9wupukSQ24T4buQXqxeXFFcuR1nyCQFYWmukNPRYKfzKvBa1PCjK7mWJBMXuPF",
  "key32": "27PTj3wHgGp8M6SppdRPtgrsHkETkJmQUWYAnydgGb5bEk6NTCFouuhqtgcfGdwadXT14xG4XCVMYnJzkftT2wEE",
  "key33": "2rfqGMQ6xDxz36YabArVnD1axRTE5Qa8SmJvJC5rFbdaCtAPv6psW8PsCDSpr4rYrCoeePnp69GECXWGpaxfDhKK",
  "key34": "49NMgxE9ZCMPiEdUeRGMgS4eqbSiuvVjLq3wpMkvexQ5uDZv8VpLYPCv5zXYpvjPVsB4h1APgmD8NZkbAhiWuG7r",
  "key35": "3dJuRccDdWbWxNvLZCLmHbzTos5LxY935VcXLqNxtwqkpebJLkyBdSYgepiwbf4sXdyvrqVbWNrix37h5WCcP9VR",
  "key36": "3AkYzjod21DpxxrXG7NCXmKars9ETaBuFokbCGDEmavyxi1ZfBZPVhL19YjhVm88TrqEZRSDyb24fS7jau1kvDZL",
  "key37": "SNpqrqvo15DnZ8fze54qtWzq4N7FyRUsAcR11v8CKKbwEqB71gcKqFtqLQL1tkCu9XvMVzpfLTYhEXNjQ4nbH53",
  "key38": "Yn59VbJehmnT4oDb8KncceX5G8wv1JcsWe6di1dXqxky8Xpd9WcbKgeU28GPwP6rSga1LQDUmor3FftjiLSVBip",
  "key39": "49W1m5FcnvARLdqk6PXf6Vv2EhQiVqEbMwxA1GdmGeFZSC5niQD3teRCzNAtxVABGGEzY58qA6BtQzLc5p8ZZGe4",
  "key40": "fwwVrZpLPJrb4ZbjhtJrRaxfG2a1aZRRuUado8xyV6VWszGhPddtoKV9Xx8WehdAbc64hpodDE7Wujjx9812zM1",
  "key41": "SoHZzd1ixez6PgD7H4xAHRiwgXNgSgpoRUwiJjDQuHdVLzuaa5tAtNLFDg8f3TM61UEvgLgUBTL5GaMfk2wPLcJ",
  "key42": "msu7MAbw3Cpf8DDDQmSeHS9jpR9mAHAPz8i93HkqXjxh8FGpJk814jqVpzu4WPYj7RWHZVsWt3FJUan6HqY2Gbm",
  "key43": "SxpFTciJvrBeJ8uYJ2z65kUBxKe7PbZTbovuc5hnWzzK7gGP1cgEvn5DVVzGE4r73wv6togtfqjWt5eKYDHGEGZ",
  "key44": "JcFtrHp6BXAvCh6KjQD1uusEXqsVLRDrGjY98q17C3hfqKZtftCRaZViYkSzz25n7X9QKqc3sQDUbioJqByajUC",
  "key45": "3okx1HntEC5S4Nv6D5Y2jMANuAEyGm8wVuFEjmMCvQKQA3avuuBe5ZRubSZEfQsH7qwJjpHXkZKbh5BtqBdNBjJt"
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
