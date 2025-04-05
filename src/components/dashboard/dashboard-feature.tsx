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
    "3pJ2TrtADPhk5vhbzWN6aqGA48NqKWBrLLmMCFLS2FeNB2KvWkhDAgQiTHfzmzynwFzEEb7MqRgDLJuNJv4dGnAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264SB4vBoh6XjDu8JgT9Yww7mfnpECj5KDJ85pY7agfkUQjqU4KNQ7yrnrFdWM8mpqx4jMa2ndi8oV3jmbfLTtfR",
  "key1": "64SsP57Q2royD2SCteEFpwi8svJiDD8DaS1NokiX9XL2LrYFpbm5UZ6T4mF8YbDNZvCzGxfgiz8cVgsXvgWQq763",
  "key2": "4XwhfaYCZEiHC7opfsMYZAAT7V7iyV2iZU9qiu2h9XhJMBoYehEbu3wxrtuQkve38Fbw8DCqsHkER63dnTVaNr4p",
  "key3": "3Ck7gLua64LmBNsreTDq7ypteY917VMQVuUZ6iHJQrHFCVJJ9i3xLEdf3sDWTV1vZfMe49RqdHKCWp34h8reRQwo",
  "key4": "4VWt4a1MxN7jcGuvXTW2rtR7213oBz8e2oXkfzk6HMx8B5Sjss4imvpHmpHg518Es6zdr5D9tWBTGjVyYh8wjosh",
  "key5": "3rEGfFrmw4fDjxrSCR8HdQqhUGK5D13jseGJkX2MdPuaET7dTxv8iSHp4TBGU5vNsSxJ1qDk1zzG52qczJdm1oNX",
  "key6": "31x1Fww3RBN7tFTDPxBj8c9mLCMnGA9FEDK5bDfBZz4YSMrykM8sDvLQwctF6e5iUow5rYj5XpjGYe73hNEBdjtK",
  "key7": "2HfiURy3tiLX4VqKhhsgjqJaYU3QVPpu6JgHFoSQCgAmboC4RqxV6zBBBpS6KzeEC3ma2NVbgSAT9gT2h2Mm2uxC",
  "key8": "4rtz6FqL8ZjjrT1t6dbp3trwsB2xKfbBPVNVVEifkZaVD5NznXNuCoyhUpwQ2h6AndJQEfH5CJ2RaZpjoreBGLqg",
  "key9": "3VE4yZcwjc8f3Y55HGbNbFetKEU7uYbakjnLkVCusFU3KkSZZdKUdpajHJgQZy5prPGrXu9348u9CX7MCwJYsSac",
  "key10": "3u7ouhn9dXUxWnnthg2RKcvUEQ8edYmqwRvByoxjiTPxggYdGvPMCLVmRRVFAp2bgWV174ZaNmEryNSQiqe8Qy6S",
  "key11": "61CJq8UikzerCeir81iMJSNRZ2bZBQy5nCtVb436mP2kj8XLmCFXEnAXauGXdwB6fmLwSpTqELABrfBeeN5a3YwL",
  "key12": "4GcD3qYHn7yZifvmqZg93Ac9B9K2uRoM2XfeecqpBbGmBzfvGCQBnni7JUzzwyBVAiSMRdy2XLsUbVCQoxjRpxRX",
  "key13": "2ZuPtYb6GPdoTeGxRv2g5SrbMVgq5wdmqM61NhzBayTCiqf77KBnts3eL9nAz8B3pcifAEtoaXMjnaDRXSTmvdNW",
  "key14": "4ksCeSngvyyXKhKjdDu5fS6YaHXdrVtRvXsZfmGqTHDmn9KQHsbNd4SLa2cEhYdx3RzeFszRep5SoAZczkRzjKvZ",
  "key15": "4xitQ5b4iXuYQWj5xn2okRjF7hmnDy8WKyRj5ZX5QvcBCaVYKkehWncrNXjWtSTjNMS4sm1J1wHyythNmDwoN5Sf",
  "key16": "2WzJDHnN3Lpvdbuk8pWpVH2cAR5qqgszYYqxuS4oCdnuRDzcpBQRVJooaoz5X3aVNnYvmnLQviLXmhSrmps3x6ni",
  "key17": "3E42jWRNePKheAa2V8RUh6Jh3jad4Q6PG45jqbCY5krm91cEtfnRaYhrLTSWCWGvGDADFyXn8zPq34w4ha7ziWXg",
  "key18": "P6UL21TdLjN1ocMb8KJRFvgYiihKtPEgWh7mwNJVubVAGUKQP2bKS1YdLUPvozt1EymqEF5qMTaX8APRznN7roc",
  "key19": "r2NGx4GBbDGG5yRHFzW44U7i4GTuJwfGRcJGKg8DxhCkQrMfNn65K5rqnWA75zozLFvw859v5EdK3ZwawpvijPt",
  "key20": "fdaydQMjKUdzB6T7ztnUAGyE3ZTenBTig4RWWidQwY2rrrvQZqUk7w1mcy9wKcmaYx3eXhkveNDm4VV3vYXGgR4",
  "key21": "5RCAJ2eHrkBg6ig7bMHJAxxXgSNEmqj5DztPoGFhYzsensGStpVnaSruKcMR4WT3DvpJpbzx2sgd7o7XAbfdRXGJ",
  "key22": "5A8k2nByaKyXiWESvVFeUj5JpaxAGHyhoKCD5SszgE4tGtxskspXJpjrywFUVdPdoXXD9B1yNSPPRAoFV4B3q2nE",
  "key23": "2KbNKMcGtQwJjyESzh2fwNdqzrrqXKSL42L1iodjAPb4LMrxTHKHNaDCbMfbvU27a8DAr1aby3ooRiKq38gmxiTQ",
  "key24": "pToRp1s16mAkNrwCgXGm2eTBu9c3eLo3VYQ4TuUAcm9oXKxbRFzKcSC8DNrq1gDuQTHTmmVQnn5WqHJHNWhX6ab",
  "key25": "3vAidyXGjYQ1sz2mfUQuesm9KgKuf5UWYHphqm28supDqYwc7woWe8CwvbfXNkFdQ2TeVFjvEJzh4nSmwvoNFnbh",
  "key26": "CzqtUyEbZZA8USTVpSLhoNJqvTUxXATpQZnHdibJC5X24CPaMaH5UYjNqnrBD71bPn6GqugLynhPCcKUEXdW7qm",
  "key27": "3WKP3gfU1JMS1dx84b5Wd1AJYc4DvusBcqHYVp8n7Xr8i4qwigK2y8b9aYHhEsZ59yBFaM3fjYEcPaBJmbNwtQWL",
  "key28": "3X6a9AZMKDSEmbLyy3LEH5rsB1wMy39P3Yaf8wPrdBX9mQV6pvFZwW2RNRh8AoGn4FSAuEgc7imD4ynQvy2eZwJu",
  "key29": "3btAuGvdapqdidudrhcFqLtgUuHWPqSrgyx3qbCcCuBighWNduR3s4QkL97Pw42zSRM9VsTp3s5rMvW3nQHtwhB7",
  "key30": "5BZ2Td4onyaiuAaFs3patZNDQifz5U2EMMqLWJoggTHXnL1m3tFErBCR3TiybBe5ucCHmBj5aZ65TtxhVNHHkoLh",
  "key31": "5aWRQo3KLSF3Fokn8PMLYDhDhHCZuuJJXnMD3VrRfEZtSQt5zPzh2CWDFvtHjw6tuTfBqPYWabdciHCg1jHrMt95",
  "key32": "4enf1U5uAyqT4SSK8nMFiFE2xREtkkuBxmLMExNaz19pVKJcbuLi86XwZwooTcgxRBcih8FtKaN1tpi8USoWayVg",
  "key33": "4oXvrr5NrdnEhZsWeUsai3zjPMVJTi9MgiifuDpixwWgUWY1ec5ZY6Eumqtct14smRt8fBdNZ8tgziKXNSXAEt9R",
  "key34": "4rDkffX4FVr1FqvbqT4s7TupezgQZRnfdjtQaHVaseRBAh4GdE9QXYNMQUwGShiKdp1eBq6XvtGfoiAqM1P1Cyua",
  "key35": "3rkY559D4nGNXx5CRS2wWmX5SkkXygy3UEpJr1M21kD5byXoEuNrhT12jArBmgZLmNkoZqzoGs85va6EpCjQddPp",
  "key36": "4jLzGrpyi1DrJ7wzZfaJuKAFbwYgziCrArEB64XKuQhxBhL6FbZpjrfqEbihm47Rq3fQ2iWePM4wnAyjUyxt97WF",
  "key37": "4UUhW8NBRjjFmTjy7uzLaKNzAZhHxaULesh6HmEUCvRzmzejWPg6toAdUf3VCWbLMid5KFVdeqDCUUGzHPzkg31U",
  "key38": "5AgHxZMEhspih4pQ2rRQZVeiUyd5umEYBdjX2ULszmxKGg2FaznYZkuSynQCJXiofAUmUVSV9usqz2zDxc1xe9a5"
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
