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
    "V4osoJotW1CZnPZyNL87gtGuewmpSWYQJJuC2F6qNVMVdLZ2Q8x1zZDHQr6Gg4ohrm9vqqPEB5hDDs1wVt8ZtGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bd81sWUpRXv3Gow5ZdRkvoMEDZPpRMxdAcSsTTZEFQJY5zPfZK3UKHKToqaYSohPYpWYmkaAUCgRv7Ko3rYMPen",
  "key1": "P4R6BfFXPwx5NApY1ebCvCK9ipchdFxXUasdP8YNBKkHGxNnSWqhAywmYsZMyRneogJGfsQAQTQ2cqSWuY8HHJe",
  "key2": "1M3Mgk4saphWqUQtKmqt4xhmv6CjMrkKvcpd1frH2xs39YdWEzydyXGBwcjG8RoABtjLvi7ru6wtfWy4Chi644a",
  "key3": "5pJ8pkJ3Kj4b7wotH2TMirgvGHfems2iFUznrRaN6iryo54ZBpFjjRrRkcUPVMk4ASxYn2K74nHYCH1rHumyBQPC",
  "key4": "4ZfdWpUrYe7Zje1vSH6ekqHaewcP8zmkg3Z66ZW8MMUc7xfnNsCeg9q41TYhnRuUKr4uvBz2s6tqZHfK5jbye8mH",
  "key5": "5juv6wWbGAsJb9h6tPZMqgCS4ej9mUrHXtBVh1B5cKfTwbZ7iRUrPJUE5guheNNvTdFR9bZXrcGhUMcrXPxvXm1A",
  "key6": "3gaReeQbMsV4s86rd4rDDa6hzSzkLQBaXnvzD3VQuuYd4EKEqFf1bsgbyGrFJYjQp1LbouHnm6GyJVKgbxUi9n8x",
  "key7": "fBaoJx24EWMCxrGyDrCLgmHeZCVKsefoK7T7BTX1biRUtjMigH7piF4RfxqKxYfhUd3R8qh5pvhFZBUNmthWibY",
  "key8": "67rXS7sHzbJmyFoDHF5RJ3K7Ybu2ZJJGYCuDWeNTL5zU7CD3LocUXQ8oPAySpnCnM3DFTUNjUK8JQ3tc4HStVYGB",
  "key9": "4cft7KYydwoFzTk8vgUGtcby7VuXzwfbumrSzFymbTP4HApBsYCehgq7AFXaJ42NLfmin9BK3wbwXmBv9gzYkpSh",
  "key10": "mqAtvyDVKQATBrDryUVDDMip1oWxDjhKEBUX7tzXut2s7suEdGGGtU3n4jXdF1Js5ncL7grZsgzAmvvjA4XkihV",
  "key11": "5nLDzz6nfWpcdbRmbs8gvzHuARyE5j2qVn6C959SdnGk9CnsHWwwSsYHpHF3aQSZbDeqSKk6qGwBamCWBJJch8MB",
  "key12": "21vV3StGtfEHVcZbX3fG7BK4NhYLHnb2yp1XpWxMckt5M3poRVMcK4cqooohnf5Wajmum6ajMmMQ4k6E6MKDSUgT",
  "key13": "3KmyWdQ79bA4ovNQmJwurEUssvuhBeRgGXPFoe2Z4cHtEGHBDQEmxn61tzX27nCSC5EcQWg6Jeo2LyR9ZSk2Xewr",
  "key14": "2BoLE6jmv1XPW4vhPFxRD7GEV8XULwpftri5DeYYb2HCrtcn56v9vTEL7pJjxTV7SDPHAEUGsqgZ7k5TcyVU7F6i",
  "key15": "2wWYmQpkYFYnYULQQNoBaxfL3YVKCN54qzY3Hahm7eMpXnXxsUVbZoz7NvCxd42csucoZY3FnuaF55zbGC9g4pg9",
  "key16": "4hfsPkXQQH114AK3JsvSVNzuptEp1z2xyFRwtBkg4Cch3HvD9TXX9JZ4Fy1HToH9spGYNkPzfX6yhWwnLuYxNm5e",
  "key17": "rkZ4ysQpmrZ7ZubxCLqWjpUqPpXLLNYeUaLmR9QSWCLV2KumrTqMVKsnej5TTbc8zUS9oz2jP7bS1fq9UfxM4cU",
  "key18": "sRt8g1jrdmVCyGQoS7cB5UbuqVzAHP3yyH1FHjfuV96pcNEAZ2Jnb7o5FhmkExVn56RHFN7t43gsMJBDrVv6RT6",
  "key19": "3CwNQrsZ4LKtnjgf7DzZUK9mCpZUriiRrXkzMaN77hX4gqKCAyT2t9T1DJX3YhL96MQ8SDNwWsBmXVWEtGy2yGmN",
  "key20": "3jVSJJYpWxVQTSS1vQnnqUJRyDqj3BzTD2wQUGkYk3oxZYZxt6uAnuL85Q74nK6bT3ALwGdxKAiYydZrk5LtxVSu",
  "key21": "4ZY4dtiWB1peB9y8bDfbp6uC9by5B3Ed1Q282X9z9CR6PML9UoTm8P6sTYXe8BerGUsK3Kdr72vZaqDDwSfmGJqd",
  "key22": "3J5M1ge48VpDwV3UDKutKWBNsS8PpDEEGVQKYxm6irGYQV3dKqpqmdLN1aTLPw7ykUFPVG3cz2hZLW4pLgFUGWJt",
  "key23": "sti7f7DgeAUcB4EEBgaWgSyRB9KEtWnCV1o3Wep1JMu5fExFe7xWeG3mfDEmiQt8pyZdwjpugKJij61QfdnJ2wz",
  "key24": "4eSXLUuRu4Jh25fUWjtNp9xKBwNFG6FJ2z9KZTtn6w4QVQSWZvk4NqDf5CWm47xgs2nkzjw7U5wBRMQbMrBH4jSk",
  "key25": "2f1RfWhSbaD3mkiYQJXSRDY5zuJ4Hmx1SWSS7ngPudAVaPeUxpPC76mqganWdfssCkboiuFchotsVHmR8bRMTM5E",
  "key26": "4V3hfsVrthNBwDCaxi8DNZbnKwyEqZ9edppEHAy3LqCREoLihDTGTKsWqZzVU6kaWjXZCxum9pLZBidoM9x17YXC",
  "key27": "5WE52NhGMxEjBQYfcuqcyGBaf2hozdZUNQwNhx4Eey8pgMQYBhTdFxbLEMu1iw3A7WpdPvbUayCvjQhUPkD1xDqj",
  "key28": "3P7pdd4EZZ5EqP9ALhnzLvGMT8r5RNSaoKpAZBrs1rL992cDMgxK4cf78wXLnk88QSzVxkqZVmH4fxmiuhYL1KTr",
  "key29": "5FK3XHoUYP4FJRmhYo91iEJ8oPcPusnZbRAiADDKXbuqhEeYbmzdJbY61cwBaXvoQ3V62cyvwKa5V9Q22DqpBJ3o",
  "key30": "A2JR9TdJpFiyGa8SswTfcW75NTMSVtxQ6wo8BkNrymaqB5ZdhQvV8reRaLEtUuENx557iuxNkDb5rmx48XEmcy9",
  "key31": "5ae3mktWjK2rzywCZt36rzVbi4fxYNHzKTyuFXWTcFCXvj4Hpw72gjVtv9udL1Z7J6e3Bv7Q1Lbz5DqcFzTYTpNt",
  "key32": "481dhqS5wN62Xwqi7fmUDYPHGuwaXgXTjmZZiaXWtT9diEFQbNJGKX268fATgBNQus87vrr3nbA6xRueU28HG6vx",
  "key33": "2eS1XvDiSpxFMrSWvc4WobC6R2ArjcfxASic4eLfMLzxz4pcmBcXzSCQEa7FLSxCYUjzB9r6tSqXuNLrZA8YvSEP",
  "key34": "67SRnZ1w9Dk4dxrBSkokKT9drRsMBEohdfAAj2cK3JuUceARVpFcbi2xcSPw62xc6bfXSfkj3dU3dRjAHaRojRcz",
  "key35": "2CGVd4kuqn5iVW5tnN9eZqYafAYTTQ26ZduV6uN5uuKiG1KRcmJ1mnkUVBS6JTdQQEgPyqPZqc8Wp8fuDzVrynhn",
  "key36": "5kjbmgvAQPSJ2dQUh5b5MHo8NJnnM9NYNgJDXwzVkfyPPJpYjMdFWMMSHaJdZ8oiZ4pTkcsgM3NTDAYjrtuhYQ2S",
  "key37": "2BPnw12GZUXz9WhyVQUMZxwKqaaU7cToirFDaAXb9YLbSrnUs754A1ZsbmtpXYXwzugprjsusWrPuFWHBaCG87ht",
  "key38": "21fpKbf32VvRQCVx7eNKk68g6jrUB3EfUJrJqj4tQjMVgVHUdn3j2HLmwk3UKTqqU4CWo2vMSKmAGtpVKLfYnmhQ",
  "key39": "hMF5Q2SuKxN5B4CEJWbuztt93NSptyPNXkkEjMDUCufUFEPcmv7KGedkjLn4fEsE3gG1ECw2QgJHxrhiLJUp3oP",
  "key40": "4PnmegYPPbZ9FFJHoYsqLfTrYb1RHXkhJ7aSvMiXfuV9geQE8ZMQoVWKHZgyjU9ow9Q1cAnSKGzFa5kY4KCYAWt1",
  "key41": "DDhvHXzp8z64dLCXHxJUqxFukVe6L75ixuWKyt6oRWU3EF4EZ7kpsV8Ygtmo5EtoXz6Qn4A7SADpK6Z3LVWycgJ"
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
