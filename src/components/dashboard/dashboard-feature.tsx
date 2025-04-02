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
    "5HQvuEpeD9CJAZjNH51js88RZ5efcHQ3pFgqBPchgLdfmDmTeqTsXMcnApC3Q8vGobxWY8xxXMoZ1pEmAAnoevDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7RzKeHqPDVbSkNdT2TFdFSnMpq8bzHvzg16Vb1np2pwVW4Y5ZPBBPubNt3UyPHfszVuww3Eb3AXMPrAPdeebfH",
  "key1": "2ePY5Kgzj76cFYFeE3SyGHY6JaMaQgPsLtw7rNQxFnezAYtNgqDXGbw4xHJuaPUon71euTrBsAnw9fWGjTdeEaYM",
  "key2": "2fAtTbhX5NiRhMK4DTeVSKkuaGx5WmHpMf9TXXv62RYY8QPJfKUKHF4vvpXXbf2YyL6qBS5zPp2R1firbmme939i",
  "key3": "3oQTLthGuFtX2q4Mr3bEbQDSjV63KMQrfowZHHH9CrLwej9jvdCMqL2zHvxtUz8f3V359kpAyH5XkaMapZxc5XvR",
  "key4": "2MNU12bufuED66GNUbfQCQ8QgweGY5jCLQxP93HvoC7NmDWjuonQKpBb49nDYawNpNtdajCRW1iiDdwn9qsLwWDC",
  "key5": "5VWFknWsSSbeuULmH2NDS4z3ukpPoeW1GTDZLQScvkiGxgoWsD33Ak5GPvd3qzphTvu15Wwo2cVanRSEsFHnxdf4",
  "key6": "uLPLr8QTVnDxChxwXcD13SLUYjzFwW6CcJsbuX3Ebdjn6JaQD16ns3WHj9ezZWmv4BciVj7wRoKjtTFurcbNZyX",
  "key7": "4L6An7QDaWaMBN7aHpD5YbpLP7tMX9J4hSMXjbCikzZdgBq75Rc7p3tenxkCaiCRZmH8mis2eazy9AQY9n3Hyjj4",
  "key8": "2Q3NPDdPDBwVW3pSiWvMNZfWqzAQohe4gUfe4PzwV8iVA8NKDuua7efLP1mpgCYYL4pNDeobzZKsVjgDpQ5YEJwi",
  "key9": "2isG9wX9NVGHSzEeh5BZLpJdNiMYDfie3fuVTq7ptkRNxxTVekp4qu2n7vKd3efrq7FTmCPqkxTBdd6KSoL4ujnh",
  "key10": "5PtT4MKU8AZoGbv3uAutrwycZfE5wHpqbLcaYEJM2EmRW9DA6LGhqzSgNmi72nyZ7e7TnxDmu7yhRA6HMB34sku5",
  "key11": "65CbmM4rPr2fUB3HD4YxDb58TcdZpbgDbsWNLmEG1rW1i5EacsbQnCVfnCDPZ1cGFEtEQ1KWhikadFEuGSNTx5Ui",
  "key12": "5GR8Xe1ETYL1gU497G7dE21BigYGMbGibXgvYRtCHoZFZDayVpQpTmHzY2TJVT7jCt39K19JMPzvPq2RbydNcU8t",
  "key13": "4BNU899Zwy9QwxdGGvJZQ1DedKPFADEjC3UQJCahdax4VCbdhRZizopJz1ytL3Yy5f93r4wdZiEFFNH23xEsPxhX",
  "key14": "xriRpowydhdyrKEkgu9mAGm4fgYmhaJFi75QPbVpTUkabX4BZ956gdaoLZYWNzzwZwZrQrfVPZUyUdgczZJDpRP",
  "key15": "5dwg5B5GaXZbsB73hdEYjqvNUSkgdApThkHZeiwEckzYLFdAmUrS5dmq4BT5HzQYDh7n74biqG6ipMCp4HXvRhVy",
  "key16": "3Mj818nzqGgeRyYA47L2z2pfjMjwS3PtyeD9qFege6kkP9MHzRncG5ExSTabWACFSqZWgWNLCzYdbgFrvsvGnudd",
  "key17": "2CPwbDVsgWhEJ6scX4LePjVFTjuuoTiXNm2bkF3LKtcWBZhFuokKshYAqX8oyf8odfrpkD1w22p4GaLcHpSaiJAP",
  "key18": "2FGYvWreFaubjq8ZrD7aUUSHbxJ1YcyiDkks9cUyewoKHooRXJB4MR4Xoq1nfTNAokJkohmo5oYBzW25QDrVRoT3",
  "key19": "514n4cqBQV77nmEdodQSyRJwcZEHAFjwHcn5jXems1DLdt7UMKs7ryTzCfjyBf1r4U9BaYjJRXfMHsgqCcbR9DSj",
  "key20": "m7waF4yxEwKUopPxBGxmKdEKJYkPzm4E6QLfFimCh9c2XDMcAxBnGCMzutnYd6ZXkrow9qpQK8YfHBTHpsPGhuV",
  "key21": "3fJ2uUmzChcBFZWHoNFVffuAZBqC3JhQkQmqchxLRS9QkbAFPd5qjJiCUm6GtYPpEnCCsdHvvZ7YwagLm1ucrKWb",
  "key22": "22Dk3Jd8dr15EZbvpDmXns1z9L6LsnRS5A5DZzns5JyR1tBs3BASRu4cH2t8mLKEfJxkrwLWYtk9pEhqoLA4sLwz",
  "key23": "4oaupFV646k1pGPdRaLijafoJjvHFmhfzyvUu1yyU7jvodVUqG4uJerxV6JT4by15rP8Fspw5HYJGUngoTEiRE5W",
  "key24": "2UnMkGmWEPYVdUgvwyeHUTdSzib4fyC3zZ8TczSFPTiJJcGzLpceH1ABXzm8C4DLYtyCFEF2CDQ8S2er9xU4PsXJ",
  "key25": "558mMkkbR4euv4yWW6qvZpM2hu8VtErJn4rDyZkq2Yxxa5BRzg7HqxZhRkXMzgy5tugVN2wUF1CFE8hF86uuXQ3U",
  "key26": "21hTmMXePS5fh1C5YxDsL6eJjZs6z6rbosUHr2nfLUCMGHh5jRdB6wDYrUFvVYq4hxuvWwu8oVu3VVVF9vEnQkKS",
  "key27": "5HdnBJMdUS1tkubZ6BHC5giDKmbDFAGLxTubwRy8oZanikKfNUtTn1NdBJMypLxLG4dmVXv4wLGNtczg1cNszFpd",
  "key28": "5jbyiS93wwf72zab9KewJ6Pb1k94MEaf9iY1C4oA22HgmoV2a6gLXufAm94SohucFeyyvmJkrhvYx56qPEvjaVgL",
  "key29": "4y9xdxJf6RNw8Qszm3HbexM5vkZYz2K7a3NWmhFkcDx2FaeFxSujyBGvog4FPCzCq73qKDaKT8YRimHpXvcosTtf",
  "key30": "2JVwLxFjVRkBB5p8QDMZEaN9BCh3Yc8ukL6XzCkebYdaSNyhGJuLUX4rWjkuRrtU7DBAKXm1dwqmhivs1nuC5jgq",
  "key31": "4gsktCYpMt8J5bewxvcTQ1zVs4b1ZbsJueWHNTv4Gy22PzSU3WkTDtmRrprZrPjg1NcA8KBybetTfrSQarToBWDW",
  "key32": "3rajLEjZHv7xs7FTe2kGiee9MgG9PudUSnAjFkQKjSNe1GUfjeoAcaq4w3xCN1PNorkuVqeBKhB8AgabySNdSasv",
  "key33": "5HXXvnXWKQH1gfLVBRRtZStQhX99hybLe5jGTMaQUPVSb1NfXBnAREteXCKpMqgcW3PsYATYnbJaSrEK9bqgaSwQ",
  "key34": "2xGgZ3uEC6zg5jmc2zQRUKdX5zKqTsVW3XC3zTeArLXrZtofUXfTHznWrx2jRGWupzDzzhSR8HVYtJwZEVJDm7Q7",
  "key35": "5saYrBEPKsFUewtvE9o5c81zr8An8Dr8faeptjZaCpMGwJLroCbFEM5v4KpTKpcBqCr8tqcLU9cho2RNt5hcptMB",
  "key36": "4J8CnGgDT5VbCPtzXdzK3jZogngumUKev5zJek4PA6i4qd7VkcLJQ1qZnGq8gkhSYMJXz9psacG2z2cs5hAbQzaB",
  "key37": "259JfHifGpRVpsqTycU4NNsrJAcPGDf8zbukWMDYHZ4m8wfyckiABpdzGAfCRcXg3eBzKPLg9CspuKjCkJKyEPtq",
  "key38": "3eTDzJQNi3zH4QFjTxdZnpfWeBdsvSbmnE4DqqdVNn3jXcwqLiLUp5VYx8Qc3X3cv2btfnRRpdeVyfB5Zw3Sa6ak",
  "key39": "2i3RGPW97uFbxLWz7YK5ZjTWtMfz2SVQ6HVJXoP44QvBv4rgoiRJN5KoKoLUGTMhWzn4JVY25XFV1a9Nt1zUZfWS",
  "key40": "4ezdkJGuYiQS8BRTwjAKjfw9pjmyhV5W284wFg5Mp9EZHiz3NxNv9MATR6qMeMhFYjCcmhTPxghFMrqcCqyukLCy",
  "key41": "2M51p79H1acZbEGLJqhWiFxbNAgNvC9knxoRqDXYTSfT1M4UGhmVnnVSs6RA24KfkKe94amd8uHHCnxM9XA4hmNw",
  "key42": "5DLyeE5p1J4KGh8ToTXSxYjxCHPCCnTxESRGiBKgQNbRP8Jt5hve6YBTU98YK3XF4fHzdqwJj44QhbmB8sHT9Vgz",
  "key43": "2X8zfHEHNWQXNRA44SZe73QY26CxQ8xHazhL9jw7Axp8Zw254BukJiEykYd9bGHCPwbCvfvKbM6zJoZEexUeEqPZ"
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
