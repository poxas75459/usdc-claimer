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
    "YQvUs64hDucHHJnqcAZXZBHjixM3D1zsRA8Q9TrpabWGzkDJAPabtqm9GDtUB16BZqDtPe1RjcSugdQNs6ZnXkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9DYi4oNi5cF4kntV2gdFenGgmYnpRy9XBNUrCcVpg5CY5iaeTCMys7EPNA7RDEtauAjpf6PzDgYvgE9ineNsag",
  "key1": "rncBTqpgNavKKVNbVo9ekWTea6QKibhYfPFqArBoe9stoyz4PtNeoGBG2ujF5CznuMfpt1wvLWMJDoWqDPLuv1p",
  "key2": "5Aok9TG7rsppn9xbuGhEV8v2bxLa5q1cSdRLEyJ3MVMWnC7YJMxehybDLC5y9Ay6XqwKXJ7drknZcgmMA5SwGH6y",
  "key3": "5e1yCs6MdD6CukZAC4niCz56wZaLZA9J9wAVtdf2PM11B3fwymgyRX9NTDqdZXqrRZWZHT1Lgq2y4HoWroZF7tnd",
  "key4": "43mHqo3fzQEsVdHyP22T2ZXFPr64UAt3dAPA4sESUKoFbrHg5XrBcoktqJ4z7mUCFpAK6Vi4ww5srfZ2ws8Y84Wn",
  "key5": "5knnq2gmcY5gG1ciUADxv9f9ERzWZboqn7gFQQHFiLuvSNy9q4Cfjo6ai44D8ToN5PJRGyLVcaTb3YJ8iv7WrRGC",
  "key6": "3V9WKe4ffuuL3uUnXRrXbA86GivWYHAdmKhZVgnJbZarsG4HJeFvQ4HsxV5H5sXE9fvgN89Xu8vmfDr4Wo1P24Bz",
  "key7": "3721XbpxNf4qMCv9jdzyz9Dzsfwf3XpM1Vu5uvf4vE4xeTDVk34efnXFvc5jJobcusAwdyBxy9XJy7LVAuVEvqba",
  "key8": "3VQxfhNhKT4AM9d6jyh2JTmqbbxnQepVEahcgLXLNSXSAGYHAC9waDfuT3T8FMippJ4YSZ3PM5ME9jaMrFzmht4A",
  "key9": "3yzN2u6xZWdQzjyA8wTfE5MAiB7DPJQ5d51zCzsB9TqjUtAPMj4uPzsbykw4ag9rqVLSNDm6dK4Nz7hdSsjF7WEF",
  "key10": "66ag3jnWhq3PvyYH4REy39X6FEmrJf835vYgaRVHQnCw7U7WJHGH6DNe8xz1WfGZxp4Qcb9fNySAToaCgdaButNQ",
  "key11": "S883VJ6XHGGUbU6zsM3nEp9ReCK9ZaVTXbfQ4jFSD88sRF6gqCF8N1ETauAYnMrJS7dvFFxedtcfW86A5KZPjbH",
  "key12": "2EotWdSjdqdrSxrgTkK2PZaS2vU9ouCxQLUTEhZvdYZw4ZPYWskVTuZdrFUSTnS1DH6BbitfT7W5pZKkLuRuUR2u",
  "key13": "4x3JHCJGw9a3B5UCtH1ABPeYCbKMy5bdWnvPcBWkCTYZZPd9F8TQ7hPTzntD1VabVPHw7ooiUh2SQsFZsntpG2aN",
  "key14": "27DCviNhYYwHstPkMtCXxZmA9EABUqtH4Z68C3DVTVnfNvdUWj54pL2AnxGHvrwJzzoAY96HH3UcmEY1jwUrrmry",
  "key15": "4hoMgHKndZzjJPHQisTuDHWDiu9mji138bdRqR74YXHSoj1fT7LXyKv7NrvRwK55jWZq7VX8ZcEed8YhiPYT4Kwx",
  "key16": "2Bse2mDkJEyv5qKnvrb9C3EUxYmfPMkq9PprzNzf6QY7QGeHsRXmc1uzjdJhP8YqLvNKa8HYe2e9PfMfMfRYqzXT",
  "key17": "3Suoc9rCy4Ld8F4Fy8cUaWXNmmvCxx3W7of4N7DzjWamXFN794V9TWm469c2Ds9rpYojMVR8PfcQWzq6CnUepLRV",
  "key18": "5L7bRjv5pvxfoZf85QRwm8W3pqhjVCZja4CC3H2zHU15uHjzDq4N1LUZESsR24bBrDAts7ST8eszqGK7krorB9gz",
  "key19": "3Ye8CVRZr3LYz2avCMavrorRMKkxBaf9D5nXAFFat44A7sW7QGSM2XkEQPGqkDxiHem7qaKv3eWGArtkUEJpg66N",
  "key20": "26q8A1de66nhxe2a5qmABVGzi2fax2zy1V1uagAdytVFRnjcpACQsRw8u59BqvEnCRDwAadqN3ZScde8rW53Rsty",
  "key21": "4n8mCeVqSmsxECZan9Ta1rN8kTaZvsRqtXzy5SzvxtSWy8Q7PtwymPCuwEgTzTg2t3aqt7G78EmpXMdS6QA7mcPR",
  "key22": "3ga7VDDj62XqPggJo3efFvvKmRAMuiq5SsVRr9oog1tTeKMw26TejP2TBWDnrrpwy78wctYoHdQFZeeDb3GjspxF",
  "key23": "5KkTooDQN2ycJSnS6bCbUPhNBi3AmLrjTeLSK5YX99c2SVVQ2rabqtrqSkgVsuafQBmbEMur6NGCbNCmh8y1KijQ",
  "key24": "5nin6in6JFs75Megbw25r1gcn6jcaouhw7ardjvYdidbae2b8Uc7SqvSc4fF5bRqWGAZ9eJRRUiGSDcGRL5fnfYk",
  "key25": "5mYxhLfBWqaBHB47fEkzjGd1ERZxmGkbpAHDw3xBcvvyNv8PsmSrrb269ngqkgWTbDnMJh1s8KHv5uFUYHZkVqao",
  "key26": "2DfSfsPT5jaWtCdHi4zsA1XcE2QafZ1eQ6kNtKL29AbbtNfQ1RjEYCCr8nrrsjKLtPguZ9ChVynEFafg1Tn54cj9",
  "key27": "5yPm1HgbHdThVpr6WWYit7G8EbBvYBZi66F9qePjzCoqaSof8NxGCAd1dzgqppBDzviXQvxqax56rVqxBrhNK6SN",
  "key28": "fg3QJQLrRknQ4uYT7rdQkQaDWfv1uNci3XTgD6rAeJQV8xqBbtA2a6XPHk18rbj9hC1Kq8z5EG5wYuKXZVdg6Zk",
  "key29": "5Tm6SCYrjrtGooue8shnqgxK7gBkjBnyZsL6WPypReDNKWBmJSwmV6Nt2rzJtmL1nbimYRXcEcu73Td1raCzQxiQ",
  "key30": "3SNU7Q12QK4sMFPpUcoLXk9CAVikxCtbquskhnsyWdxwCYXTWdyJuKvMVJTm5gKaX5Tqvio5WDVrvZJKjvkCq8Ed",
  "key31": "41vzeqsR4bksKDntRGdPaWSaZK8h3eJP3cErUZarxbvRsVhhhHMwKWf6sYT8Knfppodwc1N7fma4pgmu3y4vxTd2",
  "key32": "5JQzLNgan8Uiev94o66wZyG2qHyoW5fszj5qMiN9RifHfgGorEoD76cWBmtcLgcbzUVNrEfeEkWqcLzToUdhVQiL",
  "key33": "4bTnKV35jYRm2u77MmVCpJmRuVBvT95ja1FeRjNoYAZnJs7zGbK7pKo2hf5kTz784hLmPUFfkfr5Meidzp7xJjiz",
  "key34": "5pSzndJpeP4c9i7GhJ4oSvpB29QNX1oNSfkiaU55j5jbZSGLyWcQCubGgpTQmYcufvuUrEsc2GJwYvd1xuqNdEXx",
  "key35": "rD6Zm5JHZPVWX2s8y4MfYeKqHJRUw4zxZLb7RuNqPSh6zQp8yezgz4piBHKm96PyA9KjnsfTk3nJJoDSKr4aC9f",
  "key36": "NcLnWkR7dQvAJgH8addNGrPG7z18Zr9z5VQf3L8osWMKYV5qbQohQgKrwE8FKJzi92kVbSA6nf8EwvhQkBuy34Z",
  "key37": "5kNmtxi2mZzuDBGYkiaQUDUHvy9s7PLVsPTEG8da3aeRyPPH1KRMkENG2jk7cJtnzWT2LRs52rUYzCCuLfzWLGsp",
  "key38": "5kihNngzqXrWSPkEbUwmap3qYXAb84xK3q9yYYShRRmRoAyzgQmT7s1VSpoLd9h4v6PT2kh1AmNqE4uRf2STS8nD",
  "key39": "5mgN6daNtfRDVvQLs9T5tQ4yu2PfmSvHb1iwwYgHGLDLqAvcY41vfwqBWCrM3GxE7USFHDDgvXiXKVdt24LE6Pky",
  "key40": "42ywLsSBdonHYnJa29ZJqkCGH5qfhFEM52hng63aCCWWJb9Tp316bHHFG13aN7RYyjRg2myHEJZdzYgMyeNnUfDP"
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
