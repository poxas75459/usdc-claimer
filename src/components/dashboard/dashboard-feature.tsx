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
    "4U9g9Sg9omFdXstrYeuWGa5wfJF8DLaNNfP8jCMuLbmhHwZPw7gkesF1FXb8Unu7M6Fmzy4LiAUxcg2GBc6H7Pfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vByGGeDvtYEFF8Hku9LXPRQ5rNtsivCAigaJS4GAYxN2f6CYMQDLKW95T6t8hSRUxsd8r76Snf9jQT1ymSUmQti",
  "key1": "26BA2oLjmWmFFF5rpMirMbvBT3rQwnuShFB9YPdaga19duoGYRiHg6aUBe48KrUSq15dS3bk6G3QtWCXXR7U1b3X",
  "key2": "5AAdim9XokNLJh7xBgWtyhLsQvr6Le6u5apn3syDCL2DMgGqwqypxs6tCSgSmLY9GkupZNaGkJZ3YyfxT7Brvqo9",
  "key3": "2BhrHgTVjp4hPTv7FDZMKLmtnR5p2mzNLr36Yc4btNMtjNK6s1CiPLgWYB7VnWSP1Bdogrum5SsvRzEurKuDXVYQ",
  "key4": "2e2Dyf5PP3GsbGgUUTjDvhX4YZRfH3mfcZAE4ZY2tNNcnBDTBdSbcKDv1ynGF88KZtcRDiuYZCkZEdL7itZ8XyWQ",
  "key5": "5v8KRA8YjqbqpzYkxkgfaBVwqgbvtakn9ADiwUh1V4Ch5Ni2y4211RZVriLvvzJQHg8oSS4A8kZi1EEC1fuBA86G",
  "key6": "2M5Re3ERn14UQSRg3Xvv7v4N6wfeAiSLXjvKUTkd3ywvRpgM2JAQGN3MY9oJYvAVNQWucMHFn4L3sg5f5fmCohCg",
  "key7": "4qd6dXtwn197fcRb63t6fRNpeELJLcgBzPe7Zd9QtugUXFuiTnMZurLUPhqohDNxKxquFWXwyPY6LqZAbKMYikbW",
  "key8": "5Zujcu4aj9bb3RzbHhxFJtcEYHsxAzV3UVqb3A21RXHnd93rUfcHvHksAZy1GvN5ZcSADMMFxBypAnitAf6G1SFr",
  "key9": "48x3qfDyaPu8VWCTgBHjaUv1VLJBL2fKRc8E1uAxcdybp8dPWbKvBubTza6wK1HeYw8Mqp98Tv18wsrmbpoKiQWY",
  "key10": "hpgZnpiFKz7ixnrFaqjTipxjrV6j278k78KHPK9qmFQqZ2MijqKz4rXXaLSXv7Ezk5fzubEcfrzJy1uxvaqAVWN",
  "key11": "3GmHjBfFcWM4g4JfgvnAwNRbvu67ZJXsybaF7ivxtj9m27pkzN9SuHfmpiVyCFE2PTk5U2ZTa8oQoD43sL9oSeV4",
  "key12": "3w8Ti8zYUpUWCtBNRUNGysmyUiMo4MkMM3BaRyGzeUPyZ1NqDApA2vw2yubGeGfdk9JSfgwi5nvMG83ZaYeMxguN",
  "key13": "3pUZBcyA7LbDSdCMtP2FifWY8At5HNUeLCFZHVFK7irqrgjoQnsjBQayAgkTBeg77NEfNVxrhUnRcmCYZcn8BBvF",
  "key14": "25QS3kYCNh42qE7ejh2k9Lmw1xoxkLa19WGNLyXSy3h5WW73k9ajpm5AXYbdU3Zf4bJLZtBoczbq439tHVBzeh8B",
  "key15": "3GsrTwwpgbyqvTdGrL1DvnroiQSa9fB5pb1dSLVfaXG6r5NExrz99YUuYZy45KaoELretScw1bsegGgcXMCBZgMV",
  "key16": "3aZg16UvhQ9SL6V5qQVF56heKyAgUpJPzLqt9NXc76C8FNFPPYY3k6gM3cgJTZy3yBKTbe1W2nNaP8ygLktwEJVY",
  "key17": "2nQGWmQcxoRmiMPtmYqq2TY76GnMHURfL7pejTSAtKQ5q8JWkMXQ3BKYtheYv8iUVS4mWAQmMoahD5bg7joTMmjL",
  "key18": "d9ofY1KNG2LSVTo7Lbmd72Kn9mcyjS5AYMGK4P7e8pCzzbBCPV6wnMzVC5SfRQtrtMihESMJ8zJqVWT9JnuahH3",
  "key19": "QCMCozcGQdH8VdTcUVv1zpCwjcTj2b9WumHU3DHrQTXEkqtPnKifEx7CYJRQ79r7iaomraiFZxi9NmmFxCiDWoh",
  "key20": "33h7m9EK3Q3ziiV1pRkweXB4r4KiUbbLXRqPWEsks5taaXBD16oPhFBQZYt1AMh7Q1P6eLL8JDfjqmEoMRn5cPkL",
  "key21": "FhMvwKk8pNCXRsZCpHR8jxR1XUMUNw4VkgVNovrwUda2gYMaufgYbfG4zJf4hN5rgcfyZ6u6DK52mzZdGqdRqVd",
  "key22": "4MPwSEeMb1RbEUHzrXCuLx3sjvp9wWhffjryzLrKsv7NLnVxQvUBbcCCzk1mcrkf3TWhHk9rBx4CdKiK4KKLWvvv",
  "key23": "2k42Hc4NUphsdLheB7nXzcS2nrMUSD5j1jFe7Mt92PtysATJqB2jTpCQ8BGBb6qH6LrCd9da5VbnerHXAAtbnoL2",
  "key24": "5g3pdkAcqwJpFbgMnhqddkVDejnJLmwVAi9PW4RrqBeoiKoEnoaQm1Q8G2XDQyoUvn6g4exVg4RG9ubdxhBoDQcN",
  "key25": "3o84fJq1nBwrk6jyMTw6dV9yvYR96LXHUP2b8QDyeWJB1QBee6xx3UYszj3SwwFSpUDWhWjBb7cLRbrHMVb3zQzT",
  "key26": "25CoJKuWhFSMEAVrJku5SoVM7NsCJ1SfYnP6M5VCYoszgb1Jh6LYPkbSwPLHPHrU9MRvj1XNBGrjFanCMzqDoEnc",
  "key27": "3ZGeUAeB2iAbAyaYfCdbxyw2pHBs1jGS7svVzS4PEjJWkRTF4wyiD7xH4YycnxdsjJiRpLqsAEN29C2CKJu3cyu9",
  "key28": "66vrfDuYj6a1DySumccnELtgfiGniauy8shFZsj7uvf9NCjJBo9z18wR7AUTVUgLgbkDJgjwnWm8Q7RBa4UhhSm8",
  "key29": "kpAair82RDxVEWYEtVgRk94XXz7XbNgGKjuaX87fqoSvNoCtukaLk54m4fEgrWkz28q1pbuo5pDebaidep663Zz"
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
