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
    "5SEpaN8p2Rusopb6bVYAtQiDdzvmxR23ZxVuS8nB4yhNTX6wpV5eW8APBwfMVU8LPKD4Ez2Zkg2M4dgS2XbSrX5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrQSgYCbQUZ5cqY7CJyava5HsLJd7cGiMg5RsUjgcvRAsa9bjVFR8g7S9dTk6B4gYCyWpndR21qLBwDtDRMMByZ",
  "key1": "VwmaoJNAqtvf2TkZfzGAm8v3nHpoZyp1EJdj9zTPMirAy8ANM5xvn577xCkYLnWpDgwnfDXzccMvUUP7bJNiGvj",
  "key2": "5HCjLkm2PPEjwTSGH2FquyvtBDDxpLPYTmbCDgNpGR5Jwz4m6KW6BLDo6uyJYrFMhrZJ71EiXFLDpPQN3iAKxCTn",
  "key3": "5mtuHjW9Hw3tRkKxKbigReYXwdUBCvEpz4SAyUPsfNFXtwqv1w8o8LouL2tRbnm9ynRWEMofhTwHkFfbzK9v6muz",
  "key4": "KdXh7n8HF2Bj8htwzH99YqEnQWGz6Q5LH2NQQD3VCZcTYwCV9K7fXrQvzU5Z1vB7ejNaq9vvgxxP1Z2q3XGw9g1",
  "key5": "4A3S1vbBthsUeZAWkgCz68s7smRahX8nQoHMJyu2tgGCXneecofa3AGtcNDwmKCTBdo9amkrZPnznQVcM4jFs1qC",
  "key6": "4Gtg9GC358LFhsNJ8ko8ph4Z9oaadq2oFaWaWFuCL3hANvxqrCbJaiF6hEQYyzGsgwBCnDzzsxw7LMuc7ggTk2Wg",
  "key7": "5Xb9SXRafgUNTNsRyvsooi3zH5YHmRqTRgwStwNvLsVi6m3cJuyTuRnhckEi6XwnMdnJTUnduRmLUJrkGpdCAxDk",
  "key8": "5ZrmETNKzWNVw1H8Qq1TxvuvDda6gFtZ8NoEmgqSNyx5ggL4cHWLDe1UUqCrwQ1fvcdotBU58NCdfAJspc5YVUwh",
  "key9": "5rVpQkjsHJx87R51KATG287ceG4hMiHoDiZ9tRzLierHAiE8NDiQwYgXEChJqBeivPkSTvDyVxXEQfygTsT2RfNm",
  "key10": "22FZn64gDaYpxgRZLCSWVDEJBY5xPqxqHLSMb6BPV73C9XJvt1WdK29bcwABcFAURdXcxK62BkiQKcN7Z9EjHAT4",
  "key11": "5aYc74gaJxS5HavmrootD8ncMZYBF6aP9NsqCtNXbbyXcmWZpwmRARg67n73vjYiTtFd1xETArhRhwStUitod1Db",
  "key12": "4a6xqPkomH4d65VuU9B2c5XZ4tSSFFBxnfUvUtAXWAJgcoAUtSVchs962QmbkCAy3qZjhzHRRDhuFfs9PgdzQd93",
  "key13": "5HrLUAfH3WrqGQesgVzkyqKLDm4MZonpAxks5ZpVpKnWNixCTWW2pJPoWdLrogoknTqVMky177Z7VxPZeomE8UuF",
  "key14": "29hNfT31WCAgMghg7MeUAPsLUeTbaeQktx3VAAd7V2etkwakQbXn6A3rTH7xomDbVEBCejby9KPCNSGtALc8Y5TK",
  "key15": "3C9nysvknigAryUsDHSHKdCveao6LD8hKE7uVNh5mfPQ1KiztW19TGEsxzTquKzNzvnFUUcV7nq6UKxmEhrfTqkr",
  "key16": "24hGtRdyvjiDNHcN3pXiaTscXdWmaoLtfy2ZKBuxyc7NAffHa6zMYJJ8odKyErLCu3jRM1utJ9TpkqxHuGxXnheP",
  "key17": "5Ujs2JeA93waWxMbAmeonq5aGikaBSYcDAZg1Ks82Z16xkPghxcMmobVshc9vvdgDQPLGDwaVNNqm73pAHrGZ2b2",
  "key18": "5Fy68hc9C6TmJjD1dsFKF69q6n3hYWHz4RNquz3Yxp5PsRjMa7qethdhxPycAnbvnzz9TYNv4skYTKQkXv6sKAw5",
  "key19": "2enFQmYKVs4shhwjHsfdSA8s9UixnSnYtwEsQDokrPAbJqBuprmMnWD5LerGo7pthYmkZvGTZHfr7uuL3fCJybKt",
  "key20": "5LosxpudH94kWZFH2EFst8ZdRZTJahnomeGAW7cjUNoTTbgugjTbctnJuEXhaoDK1xqXASquenYq5bYpa2RDEfwN",
  "key21": "3NGYtEUQBaB4K37ahUavjJariTjdfYpb2nxx48gKvZtFChZBUYqUy8UyHwT79URfrBgcrbrTN4PrjhPQmXnfhAe8",
  "key22": "3DJqcaaq8Ss2HXYvVWeDDNRo4m66fKvCYCDKdmGBSDXRJQCH68b59CUY1CuYqjYZbsA5eSMWEAbR1nknQz5vATqb",
  "key23": "4QYjQYAJtLywKt6YHtjQJrTAGzacPP4Sjy6r6PuAnGEsywSa9SaoxBtVcFU6KPRgDKHb2wwSsNvKbdEMn5w78vV2",
  "key24": "2sMXywkneTuf1Lwvkef7cwuWSNtpPCZNzZKTJRXJLr7t6pkbiALxHh1MBCXrEWCbZFNxMK2XvFhpn5RfL2Z819Mf",
  "key25": "2dfKncXwCrgt4KPmPEH4TnVPCx47Tq1N6mVMoB3z8RxDuBrVkTPinxoLZPA1AVZYtQESkyz2NLPBrJpXxqGdL88B",
  "key26": "5TvuN7XJFX1cETjKR9oaVhceCiQjT8YvphsQBv3H2UcxtihYY1zoGHDS5ZYL4N6q6bs3DnDZq3THPR1CCr3RPPUX",
  "key27": "4rdpviuhtvyzK5BS7ycVryu6ymhKxVr7dwoNc33KgYq4uFVrRvaG1hHGwyzz3ssWCRnLAkfrPMuHwKYd221EJhgC",
  "key28": "gmozo31ZruiujQTbYf2JjHYFh5fUqKmMbGXaa2PP78QCs27EE3RcTdqdi918iZ7wyAzt2XxqDEmqgYbtNUVxujv",
  "key29": "5z34gjaJR46ajoHwv7bo6bpfxWZJBfWVky9DyDNaa6bN4S9as76B4NFgUQHGit6nKNwncKJEuFhjPkto9e3sFe3b",
  "key30": "WfXwGxuS6j3isjR3jHr3Ht1c7KKVmMTtJW7ozNr5ia3NxeuvkWEmLY64Px5ioY2uUySHq4wyYaYNL5jZQhS9gHL",
  "key31": "4p3kJTrbDU5pKsZPhYW4shszhgCTkX7nbxT75j9ZXxNDsxdE9Da79a2NhkVX2FyyWcg7WhByt4G5VUHXDbScRo4X",
  "key32": "2yRxMMyNdfNBUf1MaSQ76YwRWdvfPfXACt5qCQq9S7gdE8EfynYqwkhnaohhRQEdp6qAA8zcqx5MPqgQK8gyApXi",
  "key33": "5pyzN17oNdjPxC9AV96rZ9qAAgSZ5qyGLbXP9fg6av7vTos2inxXk9bXB83uJ2PnUTR3GTUQkZmKLwr2weJW36ZR",
  "key34": "1erFd11mUMCr1YxVgo39C4XGa6i1hf8w6CEcwJL3wTG1UwhcN6L2wX4JbNv7w5XiwXUfrF4TgLz2yceUsMnD2qn",
  "key35": "4fBnwXSefivoN1hoXwcxZP3LWZLv1Bx6nMdKXmCLe2E6jVtdhCovprNfBfcGCVYR7VJH2ZyyvHn5VU8bJdhVD2GG",
  "key36": "5RjbJEad9LRNSbK1nZufpdyBQ3tvb5MXb6sg3izfjLCEWBGzQNwmQeoo8akP9fQbS9zmmLAK8KxjAQTGChTizMgJ",
  "key37": "4nnPK7gQTc2efcbEe24eykpGhvcDXEWihS9U7KfzhW72BedpPhDN9gUEoxDwLmvDDpbZSA4Ta9LtYVta18NSvrRW"
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
