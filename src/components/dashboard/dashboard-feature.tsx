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
    "2Vhr4YuQL3oLUM1gDSHc7Bt6oeCggrGP1jJcyqEc7DCXY7aPV15Lxc3hPwayU6bTqDLFQJsGgdwi1NFhPmmT3ufF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LERMyDyP7P89aFwf4a1otZyXPuRfUW5RvhuywoMHqxr32jTw88MLTak2VsPQ2NdsARBZzjeZz6sCfGEPtPC3yTi",
  "key1": "4dkc55vEPazKwY2bYB2g2SYfdsgSbDmGfvB1uHomTmJW2jqJmSEKPwpTiZvHrN7dm8hQXPdUBHeCZiofAYYCcjWP",
  "key2": "5WgcT42M43qkogqqGbTaCDg85QPc41B4mWgCZNWFWuDyHo5eGZdxY6cYhMy172GP6MqAEBPXzzwVtzsLf9n4bVKx",
  "key3": "2BairLmBwZZGcetzaDW6oXGV16tuCTcuZdcDwZHFAUgs1WRhxhTvEi6FKgWpaHnKgAtmXhtfey4roaBhryYY8YH6",
  "key4": "MpiLbSM9n5Ut4WkUVjjUHgYjW2MaPEdCweWqWn9F997DdYVUA3U71gm4RQKNwSJBqFp1LaUtHYBL2wPqTkBpeQ8",
  "key5": "2Ca7GxfCT2VTPL5EQfxHi4RF3WVpjSQqi22KRHvYM918kqAfzcgchjrZYqciVcxi7cDqL9CdXFDuj1zktUXxfypY",
  "key6": "4oUGpRNHXKP9aBTT5wsFcqMaGXybjdSbmt1gCg4VAuHpJNUT6Q3of7GAMFHR2DfUMy65W7QEzDRweKb9VcNgjxeR",
  "key7": "43e4jyqtwo9KUozGNP3K4KwK2zTPWCKDn4E4JFonvn9BAchL8XYEhBH8pUmbDNrBHcQhZebxnoDpHK34ZASCv99n",
  "key8": "2rpstzJ8VR3M7mUfr5nZrDVLMfNAyhsEeJnxEyNTKtJZSWkoYtPQAxrRnHXgT4Bo1yVhrHRqbPcn9wfLMDjUde3z",
  "key9": "3qk9cQopG34CYGdNv2JX3nQXc6YSK89AqroEjdTxbWp3WzymmmoFgPFD2WPyg9nyJHfwRbUdwCrGYdVF4SV1FSsv",
  "key10": "3sSzJ4MmFhadLx6LgEZcm4qXWBGH6AUEWGUb6cCZRR7FEXwDghqkuaj7M5Lvyw2xGKptxPumtdxK5vcmQzhnjaiY",
  "key11": "tWhoEUdMt6fWT2ksG5ZE63j7R5B8h8o1pS8QA1jJmavzCZUmnBz5k6kCV8yb87X5RoaFH8xRr4F3HRkvyzvap1C",
  "key12": "5GCoiQMjXwM9aUcuPc82EBsq3KwLUxJZWLEiesbmAzEbbJCUsxW5a5gzEdT5yqxa966tcXxzctGqHSSvBmC2Ufb1",
  "key13": "2XUsCSk7wEueauxgKwAZ659pX8dvdSxctZsh77Ke4MLtHk28AgmtMqLozXsqWyKRXffjFk4NPxkUa5uphR8azQL",
  "key14": "3BfLCY4QqPPQBQmdb8u55pEYwqXULKADiAyXnf7QqQvUArdfAXYyurua2H2kaSeSycxYQuGsPJmfmXY1aepxy5pX",
  "key15": "2C6vcWLDDNTUMgk6u4XmAGPMA4idJhmZ7bLzeMaK3nZdX6pQd74Fh5K36y9G5KyQaAfWXVkHt1Co5su6c9boVohV",
  "key16": "5xdud6rnaq5q4Az47QM8qEMBoqik2gFFEhhM9rffTQVQHQYowPVH1sNopkK4nAx8S4nf8KAg9tnSjeeJeWQFe57K",
  "key17": "3MWN9BYRdgmxhMCk63UxJVH9ARQMDtjiXVXz9v9cyBgi45iBnuxfxumnbMXCd6aZRztC25L2qf157ztANQqLZPL5",
  "key18": "5KhjSkiCrXxLtQ1529LTesTDVEtoabUwiVPWNBeMU8U7PN6xLY8KxPkycR5MNKLpbrB9giMQaHWS5dkZk1tdoUhK",
  "key19": "2akEa8xrZsmj5CBPujrRB9ntBxkTJTPXEBp6wvF3aRxcm4Mtct4RMZdyHjVKfu3iGghv9T9yaEVgtaUD9wnyvPtt",
  "key20": "2nT88mDrnoCrYnXSLQhxJpo4nqfME3xeaftmYJgE4uHq5qxa6VWo6Ls284LZscMbvHbGZEKJvQHwNqCj6W9B7NK3",
  "key21": "41dndWoETHgm8wbpfFepXHNJxZewCSBmfQP7gmEsdtQCUpkignNBMWLcujmckCScq6GPkW1fTZRYP4WHBNB3bFBb",
  "key22": "3kNNGZp4avmkQhE7jyhcu5kTMEn8F4imV8HLQmCubmqh1iPznWDbZDhGEMQxwQRjUVdyQZ2xsSmwJ8xgSERUk3Wx",
  "key23": "4HUfLsz3XtUrqX42PeNbKWyKB3JcBiwKMMtixyYbA6ZAiZ6ZVRCvAojzFT1M1Bz6wuQKLhX3wRRtcoJRHYQ3crFM",
  "key24": "2QUqE2nUB8CJ4EQdbTyqD5uLBKgQJygvQYCztTwyVD598DjnUd64J74y91yorzxw524sVwZSZJW2p7KMAwJSH7kt",
  "key25": "3cBGEdLg4M8XDq5wwmw2CHbRgCPs7GqmEEkjfoNuMzxD4YDkKAaaoV9uDHZGt17chVAVjdMe6MCJpKVqebKYKqji",
  "key26": "DmrdG7sw2KmkdoBjiBHNHmvsgdjWN7pzYxipcRr1uvyQ9DkJYVbAvqN4LZBN3ZqJGygMR78SAeauY3FkbdoH82L",
  "key27": "WvsZJXXpaAr4zuig3qGP3zkxcSjgrAe8jQtBu3bPAgN4VrfN8dAfZb4vvTGX8gX7QeZH8H6M7pLvJFJGTGuuukP",
  "key28": "4HSsezZ1QJZuWyjUS2CzFocutvTRiqafDKPfYbLr9M8Ns35UMyJZW1bXAiaGR19isyads18nrKoxAes4yvwSTET6",
  "key29": "56DAd3Y9e2jNquJMC5ZpMA7AqsZsx2dyc6efQwUHypv6YE3eTe9V7T8nzMQKYPrq6QA3GmQApBHn6p5WtBtR3tkU",
  "key30": "4ww5Y5EBmEKytKyR4V3TivMVWcbQrm68TFF7LN9AtZ7uFH9K6Kz5KHC5GTuZDHhfFKjAWfhPVvqAwro35waVbfZt",
  "key31": "48cFM87kQ2zdkyjfdSkeqi3KdXYFsKSc69EZmPxKUHiBX4XB6SfphZyWgG4FFw8NwmDGKYYQZSdqsgX4tNYpgANQ",
  "key32": "5UnAScmarSaZpYMe7jiUHwV3rq1u3dfMYR9PBc4qDQQt3j6TaXPp8xr21TgAzStzRW8YuBm7wWnNJJukyzDK96Rh",
  "key33": "S3AVK7HNcu5jLuvRY8pQRC1hxWn7aTkfRXfxgRkaswPg9oFPRQ3BuFctxoYscCsLP5CsJdkCUihdQCt7WBaPoEZ",
  "key34": "4oa3a267rMm33CCVJzthfaeCN5RSyrXgVErcmpEihADzd7AARHMf8x5FZob2KFRaAHPJtaVYMav97Uxs2iP7gNYt",
  "key35": "4QzFJ4oLSKTns34CGRtuTGgSRCEbvhJ3mjjCRykTxnpdBpDJeuCVucvSakHGwewf6qMD9Tx4A9WagMtHZgZfJCYL",
  "key36": "bXQPds4jhUsv1yPpAjoVTHFjiWFfEdUJ7Uatm69ppxzXoYmQRbzUVQsR5ZrBxWyEa2KH2yqwVUpiYDBCcuaF92Y",
  "key37": "3bhaRTXjYLp9XgQe9aQWu4YDUz1ygEDxurBHhvp5NPsEMLK9BAY7yWBAKjjnL7MyPk1KaXhTr7pMqnp5dLxwDACi",
  "key38": "5kSnzrxsU56PNaM5bF1AwRcv8UvkAsybUC5oZr6hDBRouP2cPbfEdFc5BdS5Sx6sjdBUJatsNg3g4sWdUYDRZGUr",
  "key39": "3xXp43PJgeQYnUhRzG42YWNfjFM3XUEJDLiDP23hY6SVL8QUHQYRE5gjbHLy27JM9yEdxWFN9P24s4ddGbEeMWtt",
  "key40": "5r4tdQ7UkvHm4sS6CodAAWLmT8cRAQyoR8KMuq6LT74zmCfFqukebTVUvSVKxy55LzZsMz7U2F3qP8ZXj29HxXsd",
  "key41": "3YBRZhvKrCphBUmtkV7PM2PxhDJZG2REqfU2DG2PccQhETY65XV6fASLv4m2mRKFTSMqxp2hYrztxWhzxWJVuDZE",
  "key42": "2nPd5fdt5TwgjsTtekT6iPaYcuA5ivxfjmtUCP1siareS77KQUBdqYgw6pQ1JTX42WDQQiTvaUTKQF8Fws8Mt4gG",
  "key43": "jUgzzoRAMTevgFyb397DGQfuxuYnBch9rfChswRwqYEhJMkcXVbkrnvbTikoHoAe1Mm9z8ocihfJLnGFgJjfP3K",
  "key44": "5TbLer2cX3cQHxcNJ23x6nHXoGGQZBSxiywCP3629XrSpokC7K2xG6sQWSy2uNfHtc1VyRJMR5z8Mn7P3bxHpHXP",
  "key45": "5pV95ufeA7yXqoqcMNb97y4gK4m9LNuAA3dJi2pSbW6CoocwzZXoW2yGCPNacbaWsrDsSGnBHKSWCWreu4Au6ViL"
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
