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
    "3ACUHa4aGjcZkB2yQDWr2F259NFr6z5RifRM7uSt6mFwY57Xwks6TuJoFkenQNRaVJwBDQU5cvHBhsEv9uM9Gawx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAtT8Z8cSoMX4VtSzcAYHTTYXfSH1BQB4PRyxwwwtQHf2RDqbfKPyPPoLFUVb4ykHgRL3gTYR8YyGUtgrFnooLg",
  "key1": "PTDmifkhimffEqx4ENmtqpNheeYYwLKmVt3axqKNyBPKmYkwxMwvv7n6quNiLKNvmSMD2uRQYNNYXwaghQPYXKe",
  "key2": "5uX9TeMxEY8xb2ctXNDAVjktvjdY6N6UfjDP4UbQe31JQgm3sMigMuT5TYY7JEACwGBgL3AVmyoXafwoCtc7v7TA",
  "key3": "3cQFCwJsH5jNHqa5dWvWpN3wwsCJ1VbuDm7xo1SfUhRaWZk6zMjqhMcecfbHE6jnYWTJSHvWKMKb1wuVfhjDB4NG",
  "key4": "4aAUFnRsrQ3RWHMum9RN6fEcwp4Kyh1Hthpr8WDUvBu7bLD4jExEmPGsLPJqCG7j4TGNE5Cbikg4TPzJeR2jEWEm",
  "key5": "gtvYtxBeVhxjoCVP3fjTU6pXjhDsKVEq4SukEYze8NE9P4jopnzYb5bPykuFXnTZYduC2sMxK2w9dNZ45gzFaFk",
  "key6": "4FBTp7NUDxNXZjsaF8g86Q6an4SxmHbynKvytqx644Up9hXeMveiMtimHTU7nkxvDPAmG5mDm4s47GpKPsjDSF3m",
  "key7": "2J1q7SN7MFVqEqXdMJBKfURpG72oJ1TGJAbs9iwCfbCuqJrzU4dMFCB4N3ZGg5zFqLjtHANbgGNeuzopAPC6LL2s",
  "key8": "2MpKJUKVLSQ38KHy4m5uftwzpcsJCLYW6fwCyuVZBN1b9r2gGbFuYfBTKjhwUURXLZSNvrmZgzFZx4LD972w8fP4",
  "key9": "4mJuR8mwLJZLWeS7r7ewQJzmnNPHnH5jBneGEkSgzEMggpLodwRwvwGgxZMo9EmDvrwdoes5w9SHhzjaSVDmHNfr",
  "key10": "2jFpRtmgspvLDQDfxynRUyKoYQ33VfCRNYtqr9ZiWd8Q5jgaDE36migCFWx6FrYcRAw8fWfxfH99hTRrnXuK7Bnb",
  "key11": "4cK8wrwV4TT7AcX2HpszGETC7osrEMC2o8wnCBBm7xY7XuFydEUSPVSqxu2FQ3qHcQdqwriSpFagKs5hyVxh4exq",
  "key12": "4yAbavjxXn86NzdjfcBHHjcbJmbbuAGh85UV2RrQBdGtCkxN7Ebawiqy4acb1RpvxPg4zndY7WexALwoeQkdvVvB",
  "key13": "2bao7PfiH96eFGCGTsRp5xR9fqeQxXbNMwJui6h8dkKCNKwnkQ8Fn4RpjLgi8bddpydJR1ELWyhw8aCUaMzarcu6",
  "key14": "4v1ddncXREBVYUZToq6Dcibbm7arc8jQQRCXkLVampDhzuvbTnAaNGfa8aQeZr1Sq9ke97ioBTNXucUk1FPhMrTv",
  "key15": "65EnYqdqZWmPxZpD4tERxWt9DPtYY2iMsdXENGs2F9G6bFJJ7pPDsN3Umt22V4iqKDiKEQhkr72mqHUFQrRhSyZ8",
  "key16": "46D8mk4qw8zxLCZK3DNAhXy3NXWWK4ezhQe2G8Ds4B8i9CKSkk76NsNHvzZ1gRgeijmHvrEsvEZYR343wiq2x1ZP",
  "key17": "66TVsNWA2KzP3TN5kPH2zekfCGD3zThzdo73bxTHUVyxNPbSV38W5TPgZask5fkXEwLKUPeufQ9GMyRJMqUtf39B",
  "key18": "2nJCgx3yow4wrjxacrNwaiGPnbo8X1HMQyTpy7pyyB7HbZDBCEPo1xcrik169yv9L7sBzekGofEB89g4FYhWjdhC",
  "key19": "5V6kuXVEyDdHhWPatREWtBybAtEUWtm6QtD9HCBY7TwEeusQpWwhrG6cQcuFmNsAgzTPHbEmZMjV6M4ggAetaSVM",
  "key20": "4RjNbA3ALmPA2NA4BSNeGE9yscrfDq3q7iXvuoUPUXwTUkZgL8AN6o2XSEgjiW4vYjx9HCjkzTAWSUaS49ujT43m",
  "key21": "3CjSUmoywaUGRi3vfq9QS1Dq1tXJDLbjGp4PAhRirvv8fGYSqwNJo6kMWGV79jEr7ZgaBobepzfzu84DQgepYTtT",
  "key22": "3hUUughRxNzfP2WLQ8KX3hSKQdMcMajY6KTgD3t1U7iJvqLWxF5ruQeKJohJPcpqnXjf7gQw9Fh4doLxoi3q73D5",
  "key23": "61jGpJgbttFvxbV6f4phdCyAbzHjBV4UAsAzKiVM6A4atiB9y5XsAXEtxuvDvUYVrzvuiEGQU1HHkzXJojRhG17v",
  "key24": "4WYXXrWXE6L9ofHsuhRdhcNPK2JsMZgCUqr5yKM91PJh8BEG2DgtbC74GMmenqpZSawbrssCS6d4xLfp6bfEAc1U",
  "key25": "5RnPbmc1hesXVGzWxM4w9Gc5tzpVPcyiDLPN6tiLPmW3Vsz9EbMD45QNvvwcvECKM9BWVRGj4xpzsBxH3JYTZ5ER",
  "key26": "bmPTZaQ2QcHiBSWQFjayTtbHVdeWuVosmrjKyTHFpMqk1iZKWBnqPpWnBcANF416LnuLpALHupyUBpuTGehTZhq",
  "key27": "2bTxaZ6g7u5Ruzznzy7q8usNbRwmwjvHXaCaXeuDL3zrfo1tJrgbW5x8yKPhEdrnG4ZfZkuFFNaZwTRWrv1xgYfV",
  "key28": "qMjg8dXvGyYznchJ1mJDaGLw5uc3pvqNSv8fAWy5iNyRNNZZPV9hekRtUibgaFQnJGYu5FW7GKK7Pgd9s9oGAxc",
  "key29": "5UsmaFGLFb6ittAxvsaKo1B7JKhen8qqicNTbG3uN5Z7GgVVGdPUHqQ8uw6YdVeYyKFa3LFdPkBCHC3td14poUYi",
  "key30": "3cMJsi4RnR9Lb5JykJ2YnHaN3z292rwKoCszxyZhHbNXVUwyGiqNp9dG5sSffkr2bD3KH9BBeRWe8spXsFR4mijx",
  "key31": "ZZQKjfknTH6oPZuQ8Vu5zjciv2QAQtZLABDp9ZVNVZhUGcUFuaJA9EvZTZhtnaK34SZtML8Z5oXodwVscRNuWP4",
  "key32": "4N297DR3gmrqgtTHd259WLkwKwQXWtMp6MycJfGnjP71BuGRNkeqKnWeQkZJPtoJcrR8rLzhrH7h1A2EgAWCmPUu",
  "key33": "4yXUqMe1r6Pdrc8TPhwuD6hWHkZVgSc1fnsiME9yvE3UfojaoxEmgQHobEnTAMnTMh3xEQf9sd9gLad1Gbth7r63",
  "key34": "4Jb4Uuhz3t9G8nb4TMChxWrLbjSg1SLysE8kHJySM2d9PE51hN67FzhRUfETdRY8nNKf2QgPLSeaP35CJHAF67u8",
  "key35": "3wQA37M8GhUXAZtWcaN2NfxFKTWMpd4H1hDRBsRgDec22dgpEXLzku1N9Zck9Qd1EfoDYRzhUayx8E9hvtdcrhdr",
  "key36": "Ttw3PTniVJZnTXKL4z8FQN7oGbFariKHfgS9QL4So4xaVQT8yViFZybLX1vhCR2f3zqHhK4rkUE6XGWjcqE4Pwg",
  "key37": "2FE3uqVwKUCiJMPcRANT1Zzaz9RrgHhufYHY3tHyp8t4htzcfTaGjVxPK5XmJWuUjinzEn1ZGzUfDeDJbjjXwf8B",
  "key38": "27nAoLe68m2Xu4bnWUn4GqrGGSrHj6xinRyhbywua2EWy3R6hB2RG6Sf9v8F52GxL9yaMwnKnXmgxTeybViNTBQr",
  "key39": "5Ga9Ve3grk64BK3x7YdkDXRX2M7m3cVnrgM7mrDmQU25r5Fhvvtdwap2rHJUpGidbkqzsaFcHUGFW5XrnPnR8xz",
  "key40": "3oWXvkGfSR653LVrSbTCMvPDihEHyCUMQ76WcL96tBg1jgKLmBavC6fdrmz6WxByvDs5rn4NCsA9Gn44X9iRwkwi",
  "key41": "4kJbExfnFR2deoF8iazFbstNzUjBaTA7drJGbTvfeojUzyJze6H3Napjk73T7qs3aukwRZYfUZzCNsodYyjbu1nP"
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
