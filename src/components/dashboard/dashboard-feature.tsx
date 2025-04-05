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
    "3TqhJFXziCCd8nw92fY31N9f6QKB9BijmZzpvrTPGARLsxmWyjUE6fweeWCvPWwwQtUm8JmwvuF9okwEMceMcBDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHQ2cmtYxU3uB9Po6r7iBeoHBkCyoqmCjpDYhHCNdFGQXqdPY88KeH4X48cMUUbN9o7hwSe976uJzd8ShpdZhFp",
  "key1": "4cz474fFAa6VwmiD8aNKt4BtNr99hbTNZia7XcnrMoAxvirCAv7hWKX9cb9GqqTYWWZYrrQbkrVam991mdG7m3CY",
  "key2": "4NikXkcjshi6ZAqoSrN3ad7Ws8TKTFWpmuS5soD6H57w5iBzDDDufANKWbBrBDVR5VLBxqd1N25tg95v6kmVbgAZ",
  "key3": "HPrAjXUy7ANPYFBtXxGWr3SUuUHYsFEEEY7q1UBCJsJU7vtrq3CYcWzFL1pT5dK5fPXYy5kCe2PB5y5AX8oCTpm",
  "key4": "3sKgZQSLrRkBnABMWNtgPYvYLoWBgWF6v6ALvyLp1twnNiCSwy7pviuumgT3DQRBVhyvDeHwUEvTAUFzcPfTwsiw",
  "key5": "HruFJC49x9CQqp5SGRuXUVUfFRyiRZTApRvNZt92e6g1w8ZwKxhyaVH9WipMv9nndaZPRzHhhNzkWXhLJEd5B4y",
  "key6": "4bNYpySC9eQPsdK6y7Va8cc8BRTLiHqRyqV2KuyVB2kkMnUYc7fFW1o23wZhLfx23WU7vNy86Je5CLm4UsJXrRKc",
  "key7": "2aBc2o2v3YKuh6bnfvATXJD8M9bTHgN4PtfQ3Qn1ddqGJ3CwSUvjC6AJ7H8x3zYwFp15aaiCc9xBR3A6S4cdrJrD",
  "key8": "2wMR3oHPv6ZeNKkk2amULfoYJVdZZLBrPw81oLxT7wasnQgpbPqB4QCkrd8pgvBN8oSGcpCepgo6pRKBsT3uH8B4",
  "key9": "58HdysSCy1o9jahFbazy52W5skQmMjvea3NPkqMD5kqqYJMqvdQDA9Y6eFpS9Bg64mSiNeXod9cDehHQ7y8795aG",
  "key10": "2v7tRe8iFEsCmeYwxVeY35jzpcNUDzfeGzXXDPRRmi4DjAVN3mrHYKrUoJm8Wpt5BdxeWdXcp8W7oJejRH9vDKGd",
  "key11": "4wWiRg18SqbLfuV3PoAJueKCcAEd7dozSBehz7CcYMD9WD3xNQ8FRz9jrjccv8acA5Urh83rH6zUWaWi9hED5Gvc",
  "key12": "CBECoh5SDaGLGCkEk72TiQUuYf6X8xYdxxCn6dNpPpJ718uEbx3FHzg3DWFu31RN7ycCs49VgC1NP8tHCS1fQjV",
  "key13": "3b1GPegjorcbYDzZjmTfXGHA1ECu3taRumKPkFKY9U2j3g3BMXz8S8N3kRcZa9mYaw3MFrY58n5jCWtUYHCYfB64",
  "key14": "36BdLEtsWxvme3zQ6ftH2eTwJ3XT4W6HmMJi3RNcYefKmzhqFt5SM52DvHqEdTjUhxep2aqhrqZejeLg8HL4eWb4",
  "key15": "BWmqKVwtuFYufHwKT8joGMzJ3wjxqxrm452ctHdhtPo2hBvhiJCZDqgpm2T5KEhzxoeww22YN7hA7jor51ScNuh",
  "key16": "L1MdRA74QM3PJMiMHv6vHwJUzw2LutA87v5ec67iHYVwAhpWWdqDTDZ47gMkXux9v3tzc386ydaanymj9FpPaBf",
  "key17": "3KcDuYKaZQSyR1wHyJY6rxx8tLtUJMhoQTT4LZSDuvJ41hTRYM1cjQjLYSsRnfnfQsoJ7LNMnuaCzKthf8FN72K6",
  "key18": "gFbtPAkiJJNvvdVpLGGcmRdLbuB1uCXiki95pEute2jMH1G18dAe9YMEjqxai2XKcuKWmQvFNE9gfPTuWQweEvE",
  "key19": "4BSKFstcmrk9JxESqrY4dspYTuTrMdojgw4DRahgcMctkNb38EeL59VcgwCe5UKPRyng83DG7917s23cXVytU6CX",
  "key20": "2Rwvc91kWy7ZbHrK247gKfC4YuH419Ync121PZ4rDiYC8pWyEV6A6Cux89LE5ErQ5EkHkBzuu4Qk6w7zjU6EfRBn",
  "key21": "3TUy4NJyYAVCbgLiSEVtfx57nF7bf9WMdcRg88Ji1qxftEvmZ93jd8m9djqoCdQgX3H1rtUdhCK7U3sAyDjdjHdr",
  "key22": "4xmW7kC685MTMyWd7wJkh8bHadtqTGGAikv5JHiPDgt2qoKmyNmz9fPKgTfXdxQXzHZenjiUvvCzAGKPB7JRuW5u",
  "key23": "67fCDERrZQ4CJDfFfvah311deNY1vQLovuNXdqXSxhcMPgkQZuqtpEgqr3dncQUSwpuN8ZU2NKNXBZQzJzhE2W4p",
  "key24": "9GtyWYmNqR7f8NfzE75121evJfd7gQM7YGrR13xP5eJGGNiAGUhatgMkZmSoSzTL2AHXyP4wTdioq6xSUYMdWuy",
  "key25": "2AjCYrwNdooAxZk7qjf25UfgcvFmeKFXj7Fne2pEYpweizzZQXJ9bUgZMcJVtnmsnheAGCZzbEc9hh6JtagLa5C3",
  "key26": "4EdCixn8NG6rpbieZQr9udj7egwK8p92RP3qQdHAMWa8BgM9AXRpR7dWpCbNvLf3KzX6gT4FRSqWTbH5KRiP34C9",
  "key27": "4SPJyz5x6if9C4bSMvbz1TNuEWxmU1EfJi7T1mTYT3sesbDdjgB7rdqhKfTv5RjwukYjQPLnzup3gVwPdcc3GTN8",
  "key28": "3g3HhHxqBz5ypJr9rmXUvd1XyyusvZ5rVfZ4XKuJhZMft9RoCYA7cnX75LAxDR6JHYqGh8vZMiVERCxC1SdmJ7f5",
  "key29": "4SYovYJreSiBcJ9YMqynCzwJD9wfwRevWYPNisDc3oe3io31Heo5rG7SqAxqaUUc8tXhjcxakrACdHN9AJVDYZhD",
  "key30": "dM6YXGt5P5F6gS731YD7FXY4pmqHY3CgmufvaDnQLAfQsNLhDuiJmNFZmGJjDerYoHYVY8187uCgEJ88K6gLcvZ",
  "key31": "5ymW72FQxYMM7K8wBzPZ5peQTWrA6H4YgSvJk3eTqdzsfHLuHF5JvcX4gNoz9Z5gxsEToFdoAqJjhpXPRkgrttww",
  "key32": "3ubtcf37xZuHZUMeV1q93ffXgqCCZeqo88qdMDZDgF2eKm79TV2gPNUwpDdU9Ly3QzgxBJEbiuf7PaDQqjYXg8zQ",
  "key33": "2chNWd6jhMgTgDBY9ofDe9Tb9BH7Cx5vAfiEXBKYkTVcmCbpypA4DpSALhTGkLHjxLgsRhv2cpX3PpkSouBYe2qe",
  "key34": "2Zn3SmmikkRVQLXa8FT5SLxZHrZXUFLeMQxUhGTVebBTbKCV51Q7FN8p8MSQ3fimwh97fApAhY43AX42GwucUTUC",
  "key35": "2TQDT3w7YXUiJtmvGA9y1xYR7rMnnVmrtFgMRQouDgxcDpkvQysdU5WB7hnm2zxWDv6iGPgz6JBjB9JLLKyZ7efC",
  "key36": "2jHxkwofcNymGcAu29MjbnzrZSHuAaXhEaNivRB7RUZfqWAXNL2mREjg1uEU6qr2bo1zT5jSHMD9SySuMeUmWyD1",
  "key37": "5wSifFgyGYp62KfRjWpuN5N7t83T4Sa1Ha8XhxqpBxr6xx5mfz3KpaRCZDa42J1ffe8U6zThAvKU3wQ5jtQeAo1K",
  "key38": "2veYSVWYHLCNmRYgbpWCkgMu2R1RUezzEmudtfJCK3ViRoBq9bzUxLBKDnFartcBRyzP77xPHdnmCZnGoQB8x7ut"
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
