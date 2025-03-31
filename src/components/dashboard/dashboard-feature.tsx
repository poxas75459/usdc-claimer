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
    "2ufLFwidQSAkWeYyuzjge32PYQ3r5URMqK4decB3cVqs4Q7Rb9q4DvCfk3ELBbpsrij2fMaxrXu23y3iC2ohxrwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCJV65aFGAovXvZoFTzd2QNzwuYT7aKV1pr2JAwQxh1H9WVhbT1sq75Lg3ZYq98RvX7GYfV8StsYd1Xv52DbXAQ",
  "key1": "2BaD1LTQVqf9bdhTJqVKwMfteXBSY4xCGwipAiqyLU8We6xwAu5uux7SWczq49Rko24BDDD558zKBEmZbVs5D5Dw",
  "key2": "5vyWGwgpaiZV7NfE74xdqGgnk8UVD9m8zmvBi18JhAmMYpGMyBZUM6aTpUusZzAYGAB14mEjLek93dmRjyvReHw5",
  "key3": "3mDpz9JL4Ec7U7w6Zqod1voaEnzYN3oUKimwmncs6VtTQbCtf3jsCxjY5Ct8j237LvWYGyLHDU83iMs4FnVh9Uw8",
  "key4": "4z1N8hPLFZVq9GpZ1knaNyRgH4aMtQZosHmWMocsgNt4k8veJj794eXj7DmVRarsHjAGF9AATNgsXzQL93o2cN5b",
  "key5": "23UgQp9AxV9u4MeBH6JeRKvHrbjzPGW4nXEkokE9dftQdvbHNF7JvCKtBLHLA97QjkcXj12YiFAqEBeYTUa3jbha",
  "key6": "4FSNAvTxpaqeStqhZByyUCjn8tb2hpXJESLyzXevffWkiEfAi4ckv3Vqk9e6KxeL2dYz4igxANvHdKJCuw2rkE82",
  "key7": "5CinW6QVhMSTvCQ8erZA1MiLJp843LPsGSwPkrPLzb6YBmnDZcteLe1phako88pPT6Jg4GckTnFvBUsY8tWavNx3",
  "key8": "2cCCmqS3dZJgmELvKmGfbuhVqwyUSWjbrZoWggY8LAyqKQdXbNadPyYUsTWKicNspo8VzrNREi6AudrMD6dU5Uoz",
  "key9": "5WXKgpSnxe2BwwrSayYEuPhDfV9CPo7LkpHUCXHDWEy74EM8L4yG8toc1yEkti48pfbgMTio3ca8PRQN7ek59x4G",
  "key10": "2ZJppUY3vFKajWSmZaL6CvnJbVgqwN8GvQgfbVoDpFK6nuT9PaMA3s56fwu7CKoozXGMrLRBffR2jSbiqoyFD1Z3",
  "key11": "NXDwdMyH97S3vx74WgntGCwTQt79VweFwwo1YQPDroe6Tf7C8iZUhXenmAfsyqRN84ZwVgruk14AnoJXKnxeeUv",
  "key12": "2KtgrP4YugqcLEkMJUBGhPYvAQk3TFBmMvWQ7qng7oHxyXM1ehe5KvK3HTCAGQ5DesLwXH2zjnaat5H7T9uJrKRi",
  "key13": "66PvLVvJa79pLU4b7mTezXk8JQ3EUC7ibYPRiuAkWDAhkVhzP8iD42j5tPTA6kGULiVawWj4H6v8QgFqsKCJbGQy",
  "key14": "2YuBNHTB6DHYmiWrG13EJiUbZeRTm82C9D7EbQeArZHoVZmAgDWcGeNwEs6zygGiFkaSFc29EWJSR8Ln2EHN8nfZ",
  "key15": "4kJX7Z8fBQLSg616w6zQjjaLmpodhmZoPP5VJjw173kd9BGkzCjx9Apwe6uWbkDF1zvyunKJNbWy4zhGEtdgVB2i",
  "key16": "4zsf6VpEgNZ1kHpr7yVREontw6qx63g6swwEKvHJ22Qwz7KxJpwtrBCTBq2zMrVHPFh6MCs7Jw8tXcCBHwL5uaAM",
  "key17": "5SgAXCwMF9Q2hzVEKQ6sbrW5VyUAiS7P1BtArSRu6gWSa1hcaZmanXAVS2NDJYrVUBctUgFZa8DN44QrEnGUHYgn",
  "key18": "3xUYYk371932JqZHP4bAJpHcDeV4SZbWjFfqFx5PqA1eRMTyH1MVGqWRmioHWXtenEEnV8SUwehJE2GpHmTz8Cre",
  "key19": "4hYvqT23ezLwdJASGFGXMVtU7J9Qn2WNLZLZJkqrwTRLxiN3vKY6wpt5UnkRErBsdMVsfqRxgT9Sa7prAdTX6AjH",
  "key20": "GH6mzWA7AMmtapem8R8yf8DiRrhHZRXdZCTtwbb213eb6s3dznouze6bf3UazkNCGcxsNdt5iyK75aWJXpY6bnu",
  "key21": "cP1H7jzADLAqzaqp5fdiN5wy69BNXeALubwmfVcMcMbTFLCez9KRrWRaDafX45CjBia9mFKYi7vsUX3NRXiz9VG",
  "key22": "iLG5UmUhqrA1CwMibkJeDUXS6t4VN7hKDDdJxDk7qCFuDAcXK3AQvy1NC9eymyR9rm9PWQyA71T1eXJQeAZzomS",
  "key23": "66brvQfK6v3nso3YkW1vG5wT6dRVnAhbCVJu2Dt9Yar2aFTVvKCVhqhLSDfcb9arhhdSRN6dQpWpPhydZvc2VD7A",
  "key24": "5VSK2XTNCaP1EAnMuC59DD61mBYCoCzujjpySueRvrMzBJUvsH133XsVGhNVPZTg5tPNF252ddFE8NHettSCmAeG",
  "key25": "76v32qF38Cqv5FntMqdjcRyyi6hEga3StFsKjwVkfTmUcaoZ6bMPRuU1usJYu3e285rpBpVmyUD7kfHgQkkMETj",
  "key26": "2W59kTe3kjouB3kDgW9c19sPBh45vQkT6jqnk12ertGiaXi8WfFCaNcqArTzaAQGPAnZfxiuDefBSwHGchxpU5h7",
  "key27": "yxyxrEJUYUQ8esyATB9fEzE4BuMNwbRAJyndt3n6pKCAdvKREAu7BaA22STVjGv9W7ZRcnxVcRivFyHYi4Z2b63",
  "key28": "55pRXmejx7TYHVAqV5iiMWqaRvNbGRiqCn7LpYhy4toAMqFPUAXBZgrzVt5BPAbJBeKkXW9vJ7JxvMMosUmKLq9o",
  "key29": "56xRboE4HHWbwD2Z31f8rnLmsZ6dtbeMU4qTX8YPWA9JanQBwBoK7ucPD5nca8HkHji7UM3DQcaVmemyiFL9nyq6",
  "key30": "4p8zs3FDSGBjodJLVnPHm6do9xPG84cXRiQ7sUuNXUGLNiJ9sa3jEp9odPMmMkNhEpzmcPH1VWWp7o8fMfqNArVx",
  "key31": "zQH2F5R1shECnDXSGDtvazeZdnKViQVa59UwjfBzfamJhoWS9q6XiAaGTcSsmdh1cZ3QXUTQMfAZSp8keR32nNU",
  "key32": "4TDQK7tDBFR4wHVRdUHwiBd7bQrNxfixZJRMp4AqHvZTvHM36EuXpJG47zm4hEWtMgCoNp9h9YMrcKuotAmXowDp",
  "key33": "4aEs7c9Guntn1ytqC8iZYa1BnSqTXzUH7vN4Qfz9ndX1tF9rXYxYGtTaoyDdau6JJh75JPcipJzcabJKsybyAGh8",
  "key34": "5nKXDv9oedKZyNLz5cFWemTwnKHzUJJqzh3y6Zx938zegJUVYc1bD6RqvYVNvYBRTKivgwHxCmf7HaMgPK2AdjeE",
  "key35": "M9T3Az2Z7p4S65nJJJiT1RXvHrbTLawgZ62uTN98YhCkScbsv25sGrCmd3R2TtDAyYpfMmtH9PWrc6YjKJcRn7i",
  "key36": "8NLvXM1c1R5Dav3FVH8iMfz6V9NNEkjPEAYXS5n7Le2yqCNacpjxAtjhbFoPYuu5iJtTYjX3FXD6LjAxEEoVwjK",
  "key37": "4Vr7XBJGXrJeR7Kjn99hH6wDM1NH1DaQvhWsCEavZc8tci729gQt5DoP8E7sqA43VtUohyP3EaxsnE5NSfjXNvPk",
  "key38": "5KhjQ939TMbYAfJPo9N5RU9qnrgcwDqRria5PNuJdAS3BCwMFr9fs7kxPR88tZ7DLt3cakVRJECT6ZxaPGMQi2CN"
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
