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
    "2kK3eBmzRCH9pj8vkQkNQvBhnuYD5GrwKadHxzfHi6bCzwZex9BYrxTJbqF4MaWKKsVp2GChfKPFHgTkH2ufyKt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNrn4Lgyiu3KweodKqT3xnJgmVWXvfCeqGn9zmhb4TMmm4NL4DeWcKiUcfw1RKFXo95tNSAYbyyw8puYuR4ATqW",
  "key1": "5Fya1tRRrDhLJuB8AHsj9vzKdLPbwZyLEE2zF9LHEG34SDAmYkyvpxEgP2nivt9Gq8ejjrHidDrvj5PtHdYyq4U",
  "key2": "5hMxKUCrkVqvzV1bEBJcZXcpZEnXHWF7cGnJsS5QR2zwkffd6zsj5oBfQ1Hphsp6j2R3QaMDN59LV7v3MPwALnQT",
  "key3": "62tU3Wd6wNXqDyWGZep1QSuE5yajLSW3y36A8Pn7VzF6f7qFwkQgqQm3oiFqpa9hRhpfWnpVnfmM11kmx5DxvcDG",
  "key4": "2dH6zu1nLjJxjPSjXHC6rKJmZaAzEszH8f34JWCUp486q3rZQXv8siGZB6cPtq7yTCbQ8og1EdaHuXmqh1MK1nTx",
  "key5": "3cUxad4hUd3PY7ikR3QS5mUcpBaa3WtvXAz8c6aRBPvqLAcBksqRFr45NusUPPoBPYwhrfcDy2H6VHHpABEn8W6D",
  "key6": "5dv1tPPBrHsuRYvKRuij4Cc1X4KpjwfWV1M4aYBZ7UMwJBgVS5dAEjd5i7u8XcQjfE84qau1DBz4QzkPqG2ezC7R",
  "key7": "4D38B24zRwGPVZVEaajqSyyyt8YhgXJMruJXvBZGsMzCjvRdMgUmgg5KANvQw7HKvRGA2NSwjZKpEzKiAcrixxcQ",
  "key8": "2LYEeuVrQmzWQU48wWcSRBVPU3rz5q433xNqxL8mcAwp2dJu2UbEv35WNQAD91UHxaFuZR65byC2zmB7maqtEkk9",
  "key9": "2CHoYHXGHy2ZNZP4sF3AQXxtNZJ3jpRQ8CqSG7GKHRcuo3CvUqdjDQ8xtWkSci4kkaTvddpDFn8h1UipgT6tiRgg",
  "key10": "3afVdy4RFWDsxri1ukJ1bdMRd6inGv5vueFAsB3wsk7i97uWUkmdT5hASWtWECx5pv4h1U4SALyShtejRXQDporJ",
  "key11": "Vh7CiFpFwxU7Vou5Rbp1CCZsQrA3EyGrq4e5gjkwy8H1xB3dvwEuLtJPzVwFxk8KjWuLZg6cdSLR7SSwVW9jQRQ",
  "key12": "5v4JhNX5UBpJQbPWtN4dtecbpMAnfmvn1czhsUHRJkpGqXS8JWsYTFw6GK5ysxUzQwjFLJYUKHyQqJKBVDD6WdQ8",
  "key13": "41MoF8XnMReiSzrNGKDzCvBTxS3DNhQ2stB11QdwGJgapx4Ckza1guR627hs2VZt28AmwE3utHQt4T6fBS1hb3wH",
  "key14": "5DkVFxRNw6LVSkmSRpQWCXnnoSja96YaSXJGLgkoSJcc89ZRJzHVxeJRYyvr4XmFMcoVq3GgYH6GJq7QWHUroX7y",
  "key15": "2ugkhuUkXN9jqQUC4C7CX8gjqNLAyv9d9H2MprwGXMwfnpo7VpDZWuHfC8eaM2U8kxuoRaEGPXJNozxLddVonu8a",
  "key16": "56zhe9rdFBaoEY8xQGM5KDDRwFb34wU9RzHmmVCBZdfniuLLewcJ7RTUDg5jx7ppWYPpxpLHBa9Y8Z6tC2SMm8nX",
  "key17": "2rjoUjry8jD2tpCDXi3WjEaLJJoFxvLMybFu9kFxgxzcD9W1MdEYzo7FqoVrZVQwCgwbtb6PxKTXdpJ2HiThWjno",
  "key18": "5DyJfHQowDZdD2dr8fpvMDnC7J7chrF8vdtAJuX33VYU9xJtCAamvTN6XXVLuUNjbXPDes73kWzQZ1nJe1hu4ps5",
  "key19": "38vkPYqPBmNF3cqX3aG9mAY3pF5LnazAzH3q2UvzcMe5PLWLqP5yAjc6oEnqo8cVQt254jQAoyQgEykqdDd6F8Qs",
  "key20": "2QaFaHkkDXovau4DU6J5cSWgoMp4uRfLC4341R8hvCHQQZP9UAsuC1JNzHT6DHdiTJdp4qp5JPinKB4pC2EfS9MA",
  "key21": "5XvTNVTUhLaV6Qn8Cfm1eFg8FJiTnefoYmPX4VTBp6ahg9wQbh7UmAaDErEZEsYUbKoPAw6i75FTu7dtNkqL8vKq",
  "key22": "2CYELZa4jqdTSFB4T7ghJp7Jfnqe5iDPtdw7bZPAJRnxrDhy9LQAkWwk2a3anvp5zwr8doDHw6eeeQKtW77WcZBT",
  "key23": "46BDeLpWrPMewRYugpBjJ9G3viji2tMzi92HKip9eZ2v2J8mjCXFqRm6f1fLYdVn29E1trbeBdJa7Vnrh4f7862j",
  "key24": "5WHRX2USAggRWyeFikyk164kAtBiaGD7gY67U7Gee7ga6TM9zeNmGXLpLzeFjZTJ2sNXRjb3TapfZVRU6DueKZu6",
  "key25": "5NfCDoNQxWE7H9D3tpGUFcrrkqoVQrAzdsBdEK3i3HsLLSuAghGnj8KGAZzUsJ3Sde9iqnW3ioXMPeXFeAoowruH",
  "key26": "5N1dkz5NfXDmGuAdtbMx8Xhz6HmdaxPWe3wX4zcJ46UkbtsTrtyJSJLmFzjUpSbxsLWoxoBevSpw25rMsC8DGwUo",
  "key27": "4ZgnLHGyZLYnL1Xd7eeqB1mxWrded8VPjdaUUzPFYtfqVRgyYPZFpkMZYrwnuRuzBxFBZNpKPbZvmQWNqfUoRi8F",
  "key28": "3pZGhWsGqBULv2sZciFE5rVi1cn7sMQHzzi4tCcXfMjWDNdnz85Rmbb9VokEhG2ZHTDQPhQr3ULHsAhp4pbDLkgh",
  "key29": "4zW7jucugbitdSC3DyFUQZaAiZJtcbY5Mdhzwab52U1LQjRY64byDuXHS6YpJqVs3WzHmNzeWfrXdHJ8aMchESvw",
  "key30": "KpvSgU2wwNcwQ8yGH2JHYySkQ6oBTtUbwz4AgCoQx7f9N87a3NYrY1CM9DqrYsm5QEDowb7bVtWkvPQT95KjCYo",
  "key31": "2KxJn3JiRe85PyUzg3qmzWGUYNqm91aqAxTEz1xiw5m7WgxHimnHvLrbFjm3DHro4a2ejZ4bCLkUxZjbv9qX6BiR",
  "key32": "2oEnmnQPfuT7hEWVgikwhE3CDn2wVTMEicyW7u6cRWEQzR2b9R3vVX2U5m4NhnQMVyq9g9XtNUNDF8haF4PJ9KkZ",
  "key33": "31XVshbvYJo3QAaKZUniwgRS8JkcbYLrpxKfLuPH2MrR1WHTEmcKiChX8kdePXg6jZ6nXAAQSNhYQtyK2cGydDcm",
  "key34": "4TpxMmkhATaq85f5QwLEweyQtK5uTCozugjZSHeJmcnub14eQHR5Q68SY1NvkgvAgcwe3Bwf2bsEn5sfs32ufkyc",
  "key35": "5jCx3CkcV14C3zVFHAMsVXfAGA9oVyZZHRkwUpYrYpUsL2sgMaDQVavHKw7uuvQwWwGPBNVAJUFghHZdFtyrNKM2",
  "key36": "5LZyb5EYU3Nf9shVHN5mdxZiKkAgXmNBgVxkokcq146QU94G8WZFcDrJfWQ6iXzxNyj7uafeYzC8feSQppK3uZEk",
  "key37": "3xMq7jCtNEnNSAmSJsttVNiWBSYrjPA4rX8MmjQc6tpT3bTmVTRQkiqbzt3N8QVGe1pGu45gWzFnjh1yzpoGM9FV",
  "key38": "2G3mZLPir4RGxuBVxZFXbMRJmaf1MmY9qAcLunLZquKMAUX8j1uDmEs8qw6UbkbYQc2qMQQnqJz1Uwz8Rtm2p2PW",
  "key39": "4Fe8eBpd5ZvyR2EsTPPA5WBb3bW3bnq4XCqjxs8rQyxBFFuw86tu5sqqUMedBS3m3WCCkDavdaRy7zoYPNLTHYPZ",
  "key40": "55aixk8bpLB58awLsGAYUmmBzMLBHG8Nm5jmeDfHvc7NkYA2Y4GFmKSQ7i9JpfQGhd9amXesUcTp2DY1scQhiLc5",
  "key41": "3rS5x1ts6FGoek1mHjkah3PV2MJd4eoLbXFD7PJ52HhgiFHBxckNEAubYq8BMRyrb81xgnQh9VSWEuyxsZt89N8a",
  "key42": "5aNrgTid6ZYj7MNCZaKwvoFm3re5m9iNKTgN7dQ1quPzmo3Dx96LNhVyd8C8QwXigU3Rmufvei8wbAwqZdq8g6F6",
  "key43": "bgzvx54Rsv4dN3hsLbPw63NvP6QQSMXfaFkRDWnWWG1QuW6zsVu9TdabmPvuysbrZcf97kcaJZK4m11npvBa4vw",
  "key44": "2CL9RmWBTzWzcR2WDywBVKS552U1kT6dvfKzJDkwCFoPByck8GVpWxWvncD4YxZFTkcm5PExv726V4zKfHP6waCc"
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
