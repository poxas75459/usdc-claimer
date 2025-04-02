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
    "5UfHoKRLbNCk5ip5vwogHZ4ubjSxKdW2uwywzy2NhCbq3vG13wMpg7T5Di45jAifBqoVxECBEgjC8C41fcw4duUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mw1C7bv81URqdcZe6kUvksCLhT2acLx8MSMNeLUpZVcKuoiJRrPgKFdrHXXbWdhRg98qyGKY7fFZ3QjqKL3wt8a",
  "key1": "59cYJSuuL9GDpVk5ThuycYLjhmLon37yAsNRpZA7mVCDAMCBPpsSkasUatnDLjmy6Aw7LqZKBq9gET23ajNRQksC",
  "key2": "dDiQiKVQxRjtRUEqMCJCUh5dXqUYb3q92SHxv5JR8dpaVHj53JtXuMPYBrpvKGXDdVtoQniCvs68AyoVWtz5pXL",
  "key3": "5NNgUpYYFqH9ZJ8xVnbbfANcR4VCqpdob3WB6EjshpUDCKGLmqbQxJ4ErckA224JohognKVe5WuotPmKSbdgg1yH",
  "key4": "4R67VvXzioBKrVZQnXqf5SiqgacN1NGPMXbBMM9uu3nc7srVf1TZCShcmf4T4RpK9o1kq8Pq25TmRFfEJo6o42gG",
  "key5": "Lv62xo2AettDAJyN4E3CqqjXgvpUc296zTbyox2aYxecmU2XmRGLoHBawP7is4WxLcqXWvfwhgbZnJ1C5RJjFC4",
  "key6": "4u9UKq8cCBcGCZUXbKgMZsSbEwwLJJDHQ4CHJkq1kCPZizqYE9cSpBgHmtHwztBeMFXCX1EmJp5vTUkwo37zz2QN",
  "key7": "a2a6tjvnmrdzBpxsv2JzLCx91bsQMyajACYzZtrvLxiZhKYnmYCcB3GPjWsNQYyV7iu5nrrrdpYJXzyfJEUVVGX",
  "key8": "3ubuW6DTJ6UNPHvqfdPSHtC6RSST3uKSCfhZtwDe3AcdPKwQVJFhhggbE2GVmJvDbHtX5dYAiswmoC7NZ1uiHxux",
  "key9": "5bfFSkuUESpgEa8JbN11RRPVncnNGpQ9dJRwN3er88iHGswyYon8jQSFX1ZafZoetuuaNN8g3ZKq9T91fDmDdx3s",
  "key10": "2RGmZ4q1bpc12AxVt3ZEt4YP72W3CmiWSacCV2o9BU7bopwsNf1k6z7PtRrZ3o47jHDouVf4zsvD4qoy7nMjZAs3",
  "key11": "5fyV6iHmtYujKrT5mtwhcfV5bSGaDaN1jzhjie4QWjX7EvJhYXWf864h68Soo7gZdzPyAJQpoNb867ZW6dB7pRTd",
  "key12": "35vChMB5D83eSMpkfFoxug1kPYwJvVPiUAS8Gkm9s41XEgjPxNVDf7m4mjW9eZYRD7AUAqnqVh2xcTZEbKu4Qgrx",
  "key13": "2aQiz9roar4BmBzjbT3B69ZoViufn4DhpKJn6t2iWMpR9MY9EXQJ4Bn442isT8d4rHRotWgCj4wrRKeNyPJzv6PJ",
  "key14": "4esP58eZLpLgZ9i9B9wCCHSFH39GaDK2np7AZcL3nbD9GJtAcL39a2aqMtcHEHaL7avVExThptScG8gG11T9EgCV",
  "key15": "7XWFC6NT7gxTFa3zeLPaXPCrF8HoGfnNEoKkCowYQHuF6keT7k4zgYecpFK6dEqg4RabBJd6tBw35TThiFVNa4J",
  "key16": "vXyDZiuuAHAkFT93MQRiAGjh7yG5jBUHt9YduXN5mMdFPcimWYCEi7LjeKN1nEhNBGkTcmDtqi65tUtkz8eyKww",
  "key17": "3CbcKArh1C1cn3T5HBCagnva5KFc19N6EBYD9mZXesLhzJXWMHsnhxf5BCx5QuFpFesSHQtTDA6vVW3g7HqRYbKs",
  "key18": "5zjMegCmEJcY3u3nqeiFMqGfp7uP5uxttiT7MwLwdjH9AuNFWEc3h46ZyhT8vsVmYE2UnFAuTZVb36zKZyHSniYL",
  "key19": "2rYmaQwEhTCMRFLaZgxHHhGmuXZzJx3JJRw1UG8KrKSNZ9xknZT5eAPWiH9wWbcu6QC8EDMTqCksG2PkmgHGRx5",
  "key20": "45KnCzc1gMoXGDrFdnbJ5hjDF7CSuUjM4yerAG4rQQG8iHcRYa9FBqWWPFrmgwPh4Ebg6ZcKPVwGnGCcieqrqknJ",
  "key21": "46emZXTskaANcZRF4pB5EpJe8nbZ6FsCKJ41BNcJXeKy1CRwzMzQpB94d6atJcAFXZkRq5goxzogk89HQ8PM7xu",
  "key22": "PsUSKbJPuLFAFEsTMLw1QDVgXwTSwz8NU98u8vY77x54v1v6LS9ToKyB7VBwMdFGWtnwcdaoqSodp7NcoaruzsD",
  "key23": "vyyVK9w3heppFz7Re1rEwBCz5dNuXk4y9TFipDgwsTWnbryAHnsjp4t4Ub797bwwBXeS8ipFHk3H9sYPJXUeJpg",
  "key24": "5GkrRuKsHdQmYsim4fmmYS4S8SxYxoFWNRUuf6PzvNQ2EubXe5kYLpbHkSiQ5FCoBp5RsKc1rpif2VT2vT8WNPnV",
  "key25": "KPSebxYUCdVU849FwNJcvH8MEg15jei8EJ4mR5JMgj21DUjp8h3hbTRezs6G4xdSXa5JnsuAMFLJkg7V9XYLu36",
  "key26": "41Qh6jmJ7bnd6AnYk3zPRiFniLsGZmsqkYp8zizhW3CK5YFoJkzCWEaSmidXqR1Zee8EyuHYYoZkcqbmRuNPGmgY",
  "key27": "5A3DdFX4GDCp5mc2JdeLe16P5uyjsGffsEGT5DeeD1nMQNkSvHENaZm4QcW4WWe25sapcP8JFyytgXVtyHyGXVAS",
  "key28": "2hgWWJVfv4nTG9gia72kGpLf2qqiEfF6eu8KHFjj1mrGUYqvqivGc3Uz1tMgKfQ8ZoHQCrGReQMBf4MeYLBH71gz",
  "key29": "25jKM1Pmmfk3futMn8Kg2B8DkEmTZQtsQMuLD2Q2ZaQcpQNAr35TZyJfbhsGf7NB6iSTbDz3wtXq2rMtTjUuqSGo",
  "key30": "2RkkWtiE1KBiFPYNWFZRSDPN7faEmKvQQuYvKPGTbWkVk2mrJeE1dfZuXCrsqggJexrcfbERQHSaZXsMDckxm8c2",
  "key31": "3UPvWF62pLUAmXvWbCuw5Bwfe8qnyNwqUzmy1cMZL4tiEpW56EogxZzg9BcBUS3UQMAPEx2F5b775wv3VTMGzSyL",
  "key32": "4MGj6R32bTSzfBNS5D9okueKtj9gV8XHHDz7isvZttLfoYZC2S896KsqosmSN4eDsuhxSzSeL5YUWnvaJVF7wBQx",
  "key33": "5b9HxbDGDRQzHcUxfJKWUoJFgpRGPKm9Sgp6JDd7SiwBKTcDPaicoo3WugayUDrmue122PyYJmS3kKUp3cJvkbTq",
  "key34": "55dMiZMWFSDX53E1wn7w9PsiLRot2h71G6FLM7xeVcqhu1h2fNSdpgyKTcQPkgvSmtG3w4XHjrHn8vgEcSmnQzvN",
  "key35": "SPoZjynyJ8e2m6xBfgiBZ98hRD7Cgzpt4inq3RWk9CwjLh5DxoFyM83MmqKArusoh3UyULHzwkkdZTMEWo5CTzY",
  "key36": "5ZuvHdVg6KEBRiig9kxozRpUHfggaChecxpFkjhHrEB7XZGVGBQyhx1BEhkv1HydRu1DWbaTikCnGRjHJX7P6ons"
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
