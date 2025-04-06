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
    "5U3mNkSZJ4DaemXx7GQoFa4eNiaA6QTwPUoPcpDrGyxA1LTHkAQukeR54WYQan3Mh47Z1yRYuT9JjxXJrogTHAWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4zYpVvPHcNnYQ75wGVwbiQNZRqUSfu7EMTdNejM3WVzQAk357BNsKHCQZq1WZxBLdVNZa4Ggv2Yk3CEsoKNXZF",
  "key1": "5HSnGSZRyWXjyD2Fy1ayNm4oRwGnDvaAzM89PumiaHyTSFcxnDCvpeM8dBK13Ck54ZVTGjvJG3BnmJcK6TRkpod5",
  "key2": "4kAx592msvjYi7AGm5oirmKMbNuPgiRUfgx6yaNPjk8KcmEkBHbqf3GyMTG9RZRh5p1fD7jUoJ7rrHcdMejsS7xm",
  "key3": "vywJdmzk1SkFuBojNaVWaDy6J9PZnbdnJ2oHekXFVL7JFjc18ZpERadKPDMkqTY4cBs6sXCxB67SfZLsQjpjAkM",
  "key4": "49AKHUGRzEsMiQn2aTX6fRn73WXMckPXaTQdUek9ToTDW6teJUeyuDvsKUc4GdpEDh34kbLjXKXtz8KmSzyYTD4V",
  "key5": "M3xBnAMhsn5pcfY6YUxMK6iJmaWc4Ceqxx65zS9KugVokkirXuqQ1hJnof6ZTLdW47ZzQyFUhvdE2Mti1TUAGN4",
  "key6": "4TPui4wSBuHBtNpoBPz1H9Mi4zdks1gpGTFy9if7iBSRFDtUSL84fDTRBX2gvjCrioAF8egw4X4hXzQhg8L7Th2G",
  "key7": "gnbXPMs8cTyfKbL74X7kXbAkNqs3ka5htWUSXzRHTKrhiskLHXpQUbS6NAqmA3UTJLQSvC33QT8DSUgDA6Mn7B2",
  "key8": "4aokxJqFqh57P6L9pA3PFf3hEFHfqC3gzUNUwoscFEiLbc98ameK9Wj9NKFmQMSSYQEht8u1gqh7dg7qTV9rW46i",
  "key9": "4NtBbuD3DnV65cfAzFVuofKHgRu2S7JMakVMR9iYTYaJ3EGeNsR34KHvfKeMf8U6gxNNveJPFbzJXM4D8Ke7N7y8",
  "key10": "2t2Qgdu7QqFgct2AvPWBTPdRyBWaDWG2XHLVVH1tz8tBy8XmJUnZTTupPL7DM6SXGeMVGPH7NiRs34MhYdBYyaZY",
  "key11": "PHTzjgopP5quch5BiAcPFLxUPbKTEAsXVnFQx6cJbqRg1zXfCPg2sHMAJnS2U8mxxgSspLx9xDVY5umygxkVdXV",
  "key12": "2CXBvjxkGYwQ97hWGJdhpQced6CfrLMFGbj4hRsBtEYb4Bz6S1GSQx12SQpd3WKSpH46njPhu1qzTnVvo8rMLeEK",
  "key13": "3wJUwpfnCLmcnEpdJyVvvqnoPy7pBDC4LHYT2qgQJZUmsgWQ6uf6WjeHwAbgrGWtoALs1ZCxKVyrDSSAeMrAwcpK",
  "key14": "3FdV1h6zpE1crRAo4fX72wTmJxq1aXSiAiww7xyyMbfAR3Rs7TrfVsmgy2GTxsxk91pdJDhtbUKcG1pHnMJB8RJt",
  "key15": "4pUipjMgEeGttk5Fqds7qsukQY1JX9d22aQAYmpsVF1peqbqZUX8rUfe7exzgxSUVcLNijKXNty9aQk3zXnH6uno",
  "key16": "3Uo9kYVzt3e83H3WLyLD3KfdrY8zJ6B8JdaGyJJKqW75g9LRxzUfvGSmfN4whK36ycbuq7N9RgHREkQvzwEjEHu3",
  "key17": "5MjaSEqApQLRoez8Ni4ESgtJipdpRkvLwBaeVCwPyBvTXic3tXf8Rusbms9wnPpRJnY2E4EieJ6Jv1BnLQXDsJeR",
  "key18": "3tEx1Tu38kP7mUobu7cYmSk2iha97i26CSBmgrdvYM6Qxn6r56CFs5SXQAVwLuimLAXrfAq8CsQ8YdumXLuEpufQ",
  "key19": "3vWZYLA9Zm88NXUGiz74c3BoTmVuxkKjUUpJmQCWt3gjQRTSnx9KYhMLwRArddzKnGDwRy6kzkA3p7hAUVJjVKyD",
  "key20": "xVDFmf2YDuwtkZkPEABEwMid7whr1o1ZyrKJAGjWSFGQ9ABY2PQvtrUMz7i4HiwGqXQxj3ykNxgeGhge4fXkiJD",
  "key21": "2csicRnZEtuSuvdo3PtYBNDd7F1R8W2cb3LVQnrqzNu4NQVZwDpEsyw4GM8sqAr6cFi4c6zNnJTdykqTt5sCeGmS",
  "key22": "4jic7bTVsQM5xC7rQ6bjMK3S9qzhJy8ruThxVwb77rFuAyufAfurxCZauBm1u3qbNhhvZ5WYdeFvDFgxSb46qyCe",
  "key23": "3ujGtFv85dSHhHsW1xLvRbQVHYRVD6WfKsuzBjF3pWE4Cavu8FsvGujLUkjhnNavZkNn8JKvuVxhoQsqJGbuQS4g",
  "key24": "2f9p236VZxL4j1N8P6HheJCtL5uzJTMY3LsAywy66pTBFiAirqcsSrbHvNB5yZ9wuBRRQ2XXxur55pazaXrqsLvS",
  "key25": "5Ut1jFLgj58nhHTBf1HQRgm63W8aSEdaVGWd3NNYsBJMP588wWVSdrxYBL9SWjWQ2jAQNHKQSSFRsgiuZjoTS9V2",
  "key26": "2FxiMWPgnmancFjqfne8c3xBLZcp4oFJNKtBYRoDqKskqw5EcAGL8tbSPSJckKeBnCeVe2Myqt9g2Lz6oCP1aTEq",
  "key27": "4sYC8hPXZR9ahr33AEpx9YjgRndxKVKusQVr6kNeia6Sx3VYkSx2DQKnS6NuxciEvoxgjhUafmX7Ktm3vcNTJucV",
  "key28": "22YpeQNg5CSMBfVgc78u9EpUk33NLK7pQmhHjea9seA3io6pjMNBLtit3XqPSy8LBAFuvuFpdYtfKFL3MgdjyKLr",
  "key29": "59sudW9h7dAKAC6aZSSSTg9QArpvibMURnQQbhSPP9NTQPGBwDeLwkUzb3SV3ndCJkjBok2XYpgB1RoDm8mXWjZD",
  "key30": "5EcULrHQFPgM5YWrNmdaGdxUuPsVWkGSEX3Rm6cTFm4ymK5nTyfoNsrDRgCxAhxzx7vcD4WVB6Cb5nz8NefnmR8Y",
  "key31": "2ZWQXnkDQ8nmLe62RbxHGpkaq7Tn4L18k6N9S7523qgDYQHyqVGvPRK3dwTG7nNJWfLQDLJ2VskGVYpRuLjg99P2",
  "key32": "5f9ACkMN8aNZxFYHqE5ZWcbuwHj3czbtS1tGcieQdAopXV3YQsoTgLCc5BGH6dLRq4pFmuBSJQLpXU33KFDqFG25",
  "key33": "66VQvMigwTSBcxyz9vNpgXR6F4s1VFY3L5P1yd3t4uCJZPNhJUjegqvtSKsuvkKR9R2mRZa2tpctB8RxtMKspSBG",
  "key34": "h64x7DR4wZiqjFPtGShZo3uzKrRKkRnAZAUNnY3DZXsMzXa9yS6GoveVDfKVff9ruLHeGGqj4ugMTYFkJk9uC5f",
  "key35": "5qLwvhcGsfozEwqRuvxvcGFZQUJBeJ5bUqZQGfYjXZMy4RT6VXG9TLboVh7adh5JGNnoctQd55ngeNvD6N3oLEbY",
  "key36": "oYqteD5ts31wh5AVBxgxFJYoiMDrHTH59pasTmzdEEn8hyfi9BUrrHmvSyD3a1JBvniQHhLivosx3i2cbBQNMP6",
  "key37": "3LyNxkmBPNpfKWEFhYKTK3Gi6zhYQVkNmGkLbNLfDi3aGqNL8cFk1mRhaRy62j1EZoVHQ3mDXGSm24bdrLWpYWrm"
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
