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
    "2snRFZoJxSxrMCET9TwLAKBXa2JVUZ8sjWa8VruU7VM7B7pWxjDvRmsDDt23cEEbWf7U5AWTeG8EV88qoieUXTtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9V9e9o7aZS2d6B34em8saUmp9wk9mSfEi1e6cqgoqAgDwodSFuYmYrPuE1i5pzK4KeLAXdmaAXN4Pcav6AUJYQ",
  "key1": "3XZmzGkuS8aA2iZsxWtXmhidFFXPEm8E2qSYR6xdGFDvenf1p1FA3NXXMb4FV558n4niAmjxzquPC422on7gWDZs",
  "key2": "5RNyXZspS3ZzhGyNrmMd9dPQWE5x5CrDoaup9qNGnqhtnSf8wtHSWE8Nq2U5GSBiHF8kJr7hJH9pYMMywnQm4C4a",
  "key3": "nZbxnxCPaP5jUztKgA8iAYM9Y3wPvFmkzEWattrBAwhgYf6SNPfjXUs8YSUJD5AdEAcJt4gKCmKVejoNW5X6vTW",
  "key4": "53i1XaUHSo9VmJsBjYE9pbFqixiFtUbm72WpXG3sYzjJTm8iXN1tGVHi26JmEo4nRVCDVcB1SFoP7jW6bEbmjSVY",
  "key5": "2Fx48SvC2t7dpvHdHLeVHw6GuVKJZPfR4gZBGjT9Z9u52yE5h1ir7c4LVJcfg6jt8cquS3LqxeDALC4mPK7aDBrb",
  "key6": "sMUvE8hTsP2QsBsSM8b3JQrhot4fSPuHutBK7AvJuUuEWarKamFaeA94P2hhaminyqxdtZt5v8CBy5mNFYZbhz6",
  "key7": "33tzUTdJVjPqFwH8td8QAYLcGAVQemrgADbJ5ugF2CWu77ayjYRS15mT1Sr3aM8u3By9RtsfYHKYpeWaLp7nyRYQ",
  "key8": "3SgYvZdFF5w6rLgQsosAQcqKzK3A84qTcyhh4AzQJ9EzXyRJr1GeG7TbRxvFacT5EucKcMsNYg7zezfyxRHhjUvw",
  "key9": "3mK46uKbCGybHpDTZe7LT4pwfYoS59nS2za5wAtXhEv3BQTQVZFBeLRzoDMLNkVkJsEPK3RRZkubhHpuX9gbzRdz",
  "key10": "24qcDzjjbegCnEN1VxMkpDkZxf2YFnqUdLn5oyxGoAeqAxopsM27L1mkGQxtkZWXsK8mFYs5cEckD9MScBjhZ2mk",
  "key11": "5VHB8j6DYSoww4TjGjdbvckgihzsAjYC3vEocUjmKxdczajoSWLohTJCc6ixJZpjmfWYhadfG9BzK9JjRytziQ3H",
  "key12": "2kUonv4kE769HnRxxgeub97FQks8ChCH4usvMa5VBdQggPDvfXXKAHpzwMqQGtkii8Kv8Ta3J8DnPgoZyp8wLSap",
  "key13": "n7bFADDd8XqUrT5u26EKkKgJamTFvHCkEQN2nJrLs7Ws9TZj22EAyr1ZHJHt7QXkihMQiPayPDo7ZDM2L1uqs6S",
  "key14": "33Gzz1jN6nt7rUsxQUtstfUMiiUN3feyUuMubZFkseNXr5RE969ZEbMFRVBoQsYFZATHKET4vXhr5z2aFhZWvRhk",
  "key15": "64W6MfbysqQXQL7AM9GuM835roERv4J4qGWiQLdmmgPFbJGTA1eT1vxw64wLNsgQ9g3geQb6cwEPAtWbhtpBqV9K",
  "key16": "5R7KvCbSSBmGgUfAQsJnFwYWTrVS5NmNdBikcYFf39zi7WFk8i5Mo6jxrUNn6xB5Bzk3o4ApM1kYj63JNrrCqbJy",
  "key17": "2Kx1HbRKamV72SgzHQcP7vo7ce8W2YLBSFYazbrUDFDhSx8Ynrhtb4nKYwAkbfc3cvzjPgNBLqW9mo6RYACms4jD",
  "key18": "5RkDgg926JPPDRVaDvM8zbgBe5BNxvFPA9YHDmn5kzDWJoERNaZkivq7CuoWayoVbizergWtqAFvA48DEMXeB1ts",
  "key19": "2LDWAQtCYpB1HUgiZ2JF5CkCBD9mG3Ke1pskLzhLa7VQJYH95wubbJgAwJxhNKbP2BPLXTEWREGiQ3XZXh35w2fc",
  "key20": "2x27y9YXM6aRB916tLtKJAwWrBMBLu9t9s6cmNycVJXLmXGkhFqdidWGT6eKHsqmdo7Y6kYvBSwtcwP5Eaaqam3C",
  "key21": "3a6dceQUoCaWEhuT1qnAwtVk5TFkrBzVrLrxPA1vGSxqwUbpLE9TYGHhktqFjF7Xt7BRWpPGZdiXBg7SYs4d2G7T",
  "key22": "2p6uPh6mjMCYrTdbVzVRDydoPFx3DMfozsaqruisvLvsDr6daFZb2NzmYAx9Ydnfe9oHd1diqEGzria8JtqyuDmN",
  "key23": "5VrbNhzDVgD8b49CDFRkqxQRN5BdsicpT95bD5PTHHGBtw9rfpiUUQ4G7swrfi2X8LwSEhrmdXGKU1bCAg8TaFw1",
  "key24": "2csqiDsvNKCtQ1akVHiQtNsdt1jcnPMEuxoHgoAMgfeL9X3T2anf2USp8f4C37DuQmuVCNK6hFhb7HGgpLGYuunA",
  "key25": "3Sf2dAJFwxxePZpurtJ8MZhRuHRBksWUmijRCdeKKzMk3qm1ibitb6AUK26TtL8NYhHaJjJwoTaCCPvpmYbpWjwh",
  "key26": "4m3iePA8trUwTgxTnzFAx9bqrH8SGcsfVhzxH2wDZPZFtkMCYVh1B48nLwcP6LJkv51cFP8z7YRSM1zjRSQLTGMb",
  "key27": "4oFFXwKjQ6Snfy5ub4YSxBwyDr1jfsXVgUDBXfzM1SVZm3NL2cE1cnVkJuNPa6oyDpaM9hzydtiuWYPDSN2Pn93b",
  "key28": "5sJ2gwbhzaKFoojk5rFDrUCsCqMv1z35ZH6KV9PJZE613ydY8tEEJcq4ZhZL2XcseSLCnHgMPgExmAewHpvrSJc1",
  "key29": "5EJAb6EKsxc7ubbMzwhLPrbEg2rek6KUgxps1mK37dKLH1uwWZvMvVkszq7XfwDcXE7yu3imHzJANbnCNdXp7Uaf",
  "key30": "2dUJiSU4tNPh1Kg4sRiyaLDcYyi8AjK1vEw4hNVSsVFmNLDBTq8uXscJcoEkDsYH3XX3TYichmva17yHoyG8DPMW",
  "key31": "8VhN6nD7q55YjzrNTpFtUbqsHzaDTvTxqrQdqw7dmu7U65sSeiXp8m2MXrDuBXaT8jsXjKWbJi1AbRuaqsP8Jx8",
  "key32": "2oGpHcieSrHd5j1VURcGwRNgchchngZJzRLUQUCPXM791kvvXJueuGZRU4AWZ3tdojAtzXxE6JhCu6VxZzwy53w5",
  "key33": "5jZBfcQwzrhWqif6d1PeLKwvjspMvV7NBkmiEpVdyAsT6Tc1hy358UaFxhezm2RkooW4nDbL1NqBcmJKE5M9Aw3L",
  "key34": "3JRZkM14J3iBpxRCZRjtF7MgFztXZK5x79R784HooqVDxZ7aE1HfgvtYUCj9AmxQm5cP36whK4icxXXunXKrpqWL"
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
