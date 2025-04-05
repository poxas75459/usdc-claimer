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
    "343NkuqwAf4Ak6V8FD9cuhj3UeLnU9DYVQrLfWDG3zWWpsZTKaq78Ft8o3hodf8XC6QjNjTEE3QCGf1WktViqcwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxsdGRE5dAyvHKjFtFmmm785VKHDaBpGEPKLqPiRWoTWifU7URyEwqzSLJtFw3tzrAb6TpMcZdWAEKRxGBwNFFV",
  "key1": "4kz2xaD2GMEmJStF2j58TEqyWiN2MioJ8X5Mh2JFNfEhQ8D23sNdxoF9RZSX8zKq6pxBu9vwGFbczzCZszYw9BDR",
  "key2": "5DzquL3RxGS5vBKDBYfbGaYoyE7xCXcMWFkhRDKy9qSjydLd9cudiwDwqyq6Z7aedxwH7xdLPRoKVzfBVkSwDa72",
  "key3": "4Zg43igA9Q81F2X8ch51R14Zp3oZejvoAXFJzAAQCQvW8AhZ8qaEiDiaSCtgRUW5RoDmEjSLKGxW2WEeFnkAvbBV",
  "key4": "4Ep2ZAqHZDapX29qtcZNQrAYn83GyswvhvQMjKqpvjfW2mhc72u1qSbBjXUCiVu8RRTRG7ScY8AavfhWRWpkJVnh",
  "key5": "2XZcMD3pXfwisL3CU4uytgmf1zpS7cMdqhuA94xgP3amkMWLF7p7fUYMWLY21VwaSFMSSZfgTPsrdnmYHa8iPdym",
  "key6": "324jmiPfanWQu5AA4pdAuNTLZe3zJgpyhk3RzDWzoVQHAEL4J8eKtYsRnZ6yvah5RrMgpYdy4JPee3g4p9bhJJSC",
  "key7": "yjUoPuyJcNbWECmthEyaCUgGobhwv3KXYGxY7jnGFQqpCdt1537uK9rT4MnEFXLuU6tdNenJkSGUqUBc1yn22as",
  "key8": "3uFDzwwuSbZNan1dZkT7TpwsDUpJbnXK8VgXseaWmotRyafQt9qtAJSj8EyD57s5dzAbEiTRhDrNTWBjs9GpnerU",
  "key9": "2q1Y7qnvrUzKuuBD45jdKcXu7goYSPDPjhxzU6fJ6SFBSvrcNy1eXcWF5XWvEFS91HnPPHf6RKNUECdNyBztgYJV",
  "key10": "4WjwLSRpcX54AJk64vC9aTshx5ajmVRx1Xr6kT8vmMrzmpMHgjRGQRsDw14iTJvGwHDHFZ6ZXmXWmqbEDD8VU1GS",
  "key11": "3NzBKUY3c9XZbL2nws8GfRqrrgLpSbFEQjxU7uRiQaAsXJCSoW43unD8nPCHjVMAqQySgnudZMWo6YcPNzJoM2bg",
  "key12": "2MwKzGRPhKvvf8yGdtJh7ZfewPyqYeFvzr5GJDtqJj4N63BXcwe4NJswwcYz2TJsa6Hdk7FrD1bJihxtaJkpQHjk",
  "key13": "nKgSEWWEyd39rAPf1A4LESagt9ZddKuMm6DAjsbAxpADaRyBTX44EFCoNpxfDJACMvR64HmuHCsuLFUbz194tNU",
  "key14": "gMCHPLcQZ8kqDDLWUXYydMw2zVbk6g2F6MTJF7TGa2QSx3236Yw2s2k1mt8Kek3cMAkdHgG7TuQzD8JvLFamiEi",
  "key15": "4oBryKLSYmVJr7aCcD3RVkDbavXTt97DutEKo7CzHALCDMZVUA1Ar331SRwLKL5PZdfoAeAHdyPWjhe761Xn5GvM",
  "key16": "3BjxzazGreGRMcvXYhyPV758gTAzU9ZmjMFNkSixvRwjYqTs6iFptyei4iJm7nrAxrp3yLHhRRhM4Z6T7fvAoAiL",
  "key17": "63tmAed1yQ5PRfnyLjJ9sB5JkTG4eANErXSPg75ejRamcEtKRHCSEe3x2giLCSkKEbFr9uz6t8dZ8P3wMFCpoabU",
  "key18": "XemRNcYhjuw26Yz94bpUJEB6yTDaQeAJbW3p8pAqUnP2C1GLhUmQWVN6KVxFRc1Ezm5yMpC1yY7CGrrcUT5c98s",
  "key19": "5EkcmioY2SA7VEdEHmkWtuS4ERkbaXsmqy9FhcU68AQrfbgGTi3a1zq5ZntGK3hwxYSrtwFwP81gYKDjYS4J8LDt",
  "key20": "4kLDGYPZLP3rUnJnhZ6JbXyZMTprKm95EuHTixdMvWcS1XPj69i3tS9VDmPrTV9XnsL5hfzN9eLfHCis79MG1nRo",
  "key21": "4hVzm6FJmRjwqx5Lz2kKkSirevHAR3GBugVxaxZmpaYkKowzvpqoY5ZTNYS3ed1gUK8D1P2i5SMqAFvHkfsR5bXK",
  "key22": "TW2tCFD4CiU7NMFvGUjTkJtUhuPtZisMYEbgJBG5wBXLsJPTWfLuoSm3oRWrVSUCAnpLisYeKLvt7xwsVUVr35x",
  "key23": "CeeT9vQzwGjQPadr4GVknw7kpUUmhFGJT8TffJYjFQoB4ms1fKv72tj988CWu8Gr3xxPVApDwSoJos6gJ3wEFE3",
  "key24": "4H2UnnfUADV34JPxweFFKHgmR4Y7tMNCwqNd9Fpc2yCe4t2cupwxbA2oGaAQtAvMPWMQ8iXZYNjCkFQbZ3GCdp2N",
  "key25": "5ntNyTAYZx4eiF9Nu8Ssw219Ak94f1KjzsNtWiFgRJZgwDop97JnSL6q554dCemktG46AXgNGdhHj8gL5ra3U5n7",
  "key26": "qXmVtoVcxBHMez7jWhBN1Hd2LZLQpURcyfxNHX5EnfSNj6BuZwvTb5DhvZgtdFGkiBMoTZbBgqMVH8EwPsBXGSS",
  "key27": "sF6kxLbWpv928Vs5sTk8Ti3k7zQaQScTaLiQnDDEB8LHXBMB37rb2Q5ErGR4Suia2iAMLTmW7vNaqWfy9jGGCWM",
  "key28": "2umP8i6zyiAWiPHfFdKz4qiPhJGSxp9r9AFyCisUZiRNYjWS1yPXwjCYeXKM84auzhd45QNbidqMptHQ6w7cUvqj",
  "key29": "5ar68VhzEixeoA4CpMo9w7FUEzBckFxSci8HedkuwYJawZDmxpodWX7aWuPu34jhyUQYrph3njw2gcgSTbEmirDN",
  "key30": "vJsJLrqpSiayBpQ6LEDnoJkKB2wpek2uZUz3KoLg4Tejc2mK2SdWJn4YMekWT4VH8QCg4MxVirsZU1KHj2u3VwD"
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
