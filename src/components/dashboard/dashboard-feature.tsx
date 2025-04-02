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
    "o2URWL6NEqKAczD5ES7WcCJQ92TrtbkU7wGaZTmacWj51aKeJbuX4zNEUC4n1NN71CXQGDnnsGGG446dgmBfi9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24EZj52Bm27ebuxhL8iQzS1gdk1sEx6twi3yocifzwDkcK8gyDW15pTVhKVRB5wkQkfHEb5MJ9gUBv3rbBXsq4Ld",
  "key1": "FCJS3iuapP8ZZvtwYFaQmJgrpqvzX3FypAxMbEQPhwUe2JGdXF4rmQsqBjY9F8vwduFi1FpPwrbQksxgYAzDcg3",
  "key2": "jgZ7GYjisRvnirwNbLRckXH9BTBCm2mV9Z2V3AyTh3w5zNVWTPoKuoxeGTuiTgVcmyB5nCx6orHRp4vGfQMqRj9",
  "key3": "2TgxgWpTmEfovz6VxTgz7R58vGGv2Gd99y4y5jY4zPscYxffHFaHzK3ZA3vbE7oVj9jnU5Dk3U7uVMnk1Ez5PiHC",
  "key4": "2Ge6QaGzV1gL7cVAVawCuc5nGqdvuwH65LFwd5AcASCdbw44E7doBYZiSFQdmgn8JaCx9yhJuC9p1cU36AEyvHvz",
  "key5": "tVemKAbHBzmGEUL8XHeURRaBzo697g9RbEsjkwWovPcLtjLKdEymFnMUSRXEowb3WqXTMTW7JhHU9FMhvsSy1Bm",
  "key6": "3cjV12yb4zKAHLTFV563up7CJrTfm95mfdAUuC38o2jxCkvDyQ7FKdMXrAkjmjeKromDr3yxF4rp21Dr9D9wdLkW",
  "key7": "4QkAw4aLtKcCSpYckZrV1hvHVm8VbgQEcR5VH7MZjsmVRNtnbdPcNsqESw962sgxnjw1VEv7Y2u8BjxtKsaw2WFd",
  "key8": "5wXheSrA1eNC9iUuL6iAcpRY6dBtE2LZAxhrqqAFyfhgYY6oMsnuDnRqfcEcxwMKu55aCktdTKPmY8xMQrVLYPJt",
  "key9": "5BsiZkuADPv77sS9aC8HSbciY6KyxwtmHRHQvv3zJ3KY4jG1EHMwuA5tzdALnhmi1VdmWWYvYAe3XZmpDXqTiRFC",
  "key10": "2yq87iwRbaMuYyqX6bhKdzs5umD8GpkbqFBeS9fVtekJJEcWNVzmERzvt3T76yVX5ABbZpJ2c5RLEoNStbfxNBkr",
  "key11": "3Lr1fSKubtcZCYNYDmcL1C8SHdyzLm6RJ8pZkgA55X4HLRR93HkNsF9J4UapT2Sj3oAuKXiiwYYr9Q5Ku8YDLBr9",
  "key12": "5cPm46gdzUUXx7HuN7L2a1s4FiD7gwKPqY7EkDqBMeXwiPYmmo2JeDsDkyBWMWgZbh1Azmc1twFD9WaGzT32z72U",
  "key13": "sWaLefqPTQ11LsfgjiNGYso84cKkkxQoSNUsyYT5hfp7L6nouvUdqnxqBUSRr2B4sq7G63W88psw9ni9yc4VUJD",
  "key14": "5rRoZJ6jwWLCvfP17C4hEDQijeK8WpgJXuLuxUEkCroNYzG1GZxrnDuUtpBmq8cUwFDfAAv6GpCAAEJWcZHYgvWd",
  "key15": "4mWA1n4iPD2b4pFDUJvURRy5rm3rfMaieT89wLkCvsdGwzkuJHQDxmtFAus14xkQUVptZHLsCEnws7F9jFppM5Yu",
  "key16": "PbjBP4zFc88bPrKdFsugj1ofv5yYbKAXWwm2PU8tbzGczFWYpxDVz1GguXrmD6osjASKZ6PQ44bQmjUGokX1NES",
  "key17": "4ZLNm7jAnAXBym7evEnzfoWE2pK9FUWQjsTv7KsoUHrCJGQwGVT9NrsxYDCqiR1uouqo7B1Vc7JuqY8cHLsebNcT",
  "key18": "5v52WcXWNKEx9HRiWYfpB95o7ukdUfmn3vtweH2thxspx8vwSHxMtj3AtctZZ2A3xJjKMYLPMfsGXktJMR8NH1X5",
  "key19": "5imCFrJ7garvcKynqUmXU591Hr8xxqqN7zYTSf7UUpZN8SJPkgPKaYJFzbvU19tqV351NfVo5gQgJDRRnkXUCk8J",
  "key20": "4fAj17qGWoaGxhyBtqqNfkiMYXshGifEmqwnPqWRkCPXCWhY3y2KHachbKgEYSQy3yR5GGvDLaWSmSFs1ZScaNX6",
  "key21": "5bXNk2NqWsNoQyJ8WYvsbqdszDm6rtVVCR6AKGbFm7mNDvPPMf3sse7wKd6S2xadLx77rE778tELzMoF4JJ249pu",
  "key22": "2e9hb6Bpe6MYrxY78k68tJAurq3JRjaZ8kq4ZNg2dim9PQcvHgo1kK9YzxyCFDkCsJqu8tfdwS4rnogf1Q4ebrQ2",
  "key23": "2dKziuLGKcWzhkccy1A5Nfqxn2UgkV8gZKT96NsPB4pabf9PPT7mbY2ufRD9AFA19CND4UECRurgZyEDii3qBMCX",
  "key24": "ts59duMtLkLE55EowEGN4jkvzGpiCABndxu788CCPYLgLvQpXvZPgBtuWgPQm6Qp39Rf7ELUnc1ahGapWnasZ2J",
  "key25": "5wDCcykA9DPVBC55E99wMqY6J6PqgLKzUWm5kYmLAJmd1W66823pD2Nd5KsSo8A3aMq8xra9n2ZrTsSjvSyALCc3",
  "key26": "4RDUHYudQxwBnvkGTFYN1sF1khQZ1sMAgfrMWGKUgz1KF2xLgZyAqWKeiUkMMZBRpd4oLT3Yvt3unfNWJ8GeVxQB",
  "key27": "3FmtkCEURkvWXsnPMJLCXR4W5dgU9TpH3MVQYxP4kptjxMdVMGNk9MBF4sHiieduY3gyQ2yB31ZRfx9kZ9TbPB7J",
  "key28": "4wf2nVpuFCTzqVuQRApUaRgGqwvar7d7RzakqdoY5DXcYnGscWQDFJppLNbmX8qjZfF64eS94KuiFzFcQfm7XZjH",
  "key29": "36xYf6n5z4LymhxRuDLNykVzUpresRdAyz1Y8QZzVfxyqgQPFfrKkuMBZAwXBvye8Keacn5yfxUBGRaXAfuuwKrc",
  "key30": "2R58asStYucgXAEGDtiJqSNTFZaQMpdQoKxg9oceyP74Y2CUWeRc9vB7QuR9XsukpTtNDMHg763dStb4YDGTGyM4",
  "key31": "RG67wKWgakHE4WQLH1pSp47t8cUzKTgkqHs63WzWL4KZE7gajGt1DsPQB4aqhDbwzBXhfFDeN3Sw3XicEKxWjR6",
  "key32": "2HmJ9DuGKaxj1rqN2M116J6DZHAmvvfAK2aL1GZPrQszd42neTRUJQYb5CeCktL29uLUG8MjbuDaYYgZUMG9rDrw",
  "key33": "h6hRMZe8hhEau4wRa65Xq1RsChyoauonkoSFaGsKpznK6KZjBtgGRaW5jiMmQgitiNYHEzxzBRkWczsiUwP6PE5",
  "key34": "5BrQd9YT2WR98ccECTbbs3yPEHgW6pRuwZDKqN3NFkFtHtYsWcAHfHyF4VViqcekzKvbbTFRSgsEgsjMmFUTKN53",
  "key35": "5X54t5LhVWpxHFZA9HuSnEeLNtBRSABnkFcxEfnPU3pLB7ZbdBX9GfxFP4FLoupKURPKVJKkbzS4DFzC3yhiLhG5",
  "key36": "5xNQ1MvgPGFWMYmAh9vQhMr4EqE2oSRyvN2YF9CgjiHsCzHrPdKVpvmukwUzZHi7NbHdWgHvsAwkabXU2L8nxUUK",
  "key37": "E74f3W8KKfjH9s3yXo6Es45Aqm18wdRHHzHt2p5kVN8PBCh6yYPNzaChM3Gd4G6z9pP6wPbsd5XqqqEGxMA7YE9",
  "key38": "5E6xfigrxkA3b85SM4FR3DjCWuQeG7NMFWRLm8RMoWV6Cx5GAWMcet3KYR9RcbBNyNV3u4oPKRwNgHGzqp8msTXd",
  "key39": "5hVSa9ucG3tVvDfGoSbPy7hTnoX16bNtoUjEzMv7GhpULxS3UuubsUKPfgan79nRUN9n8p5MbyGAYxSVPqxaoqFD",
  "key40": "42rjPDzWhsWWRbizUyKh367FjVRa2LBaB6GSW8A8sJPgLgnfT3oeVHvhJg2YTetFbCT6WV8wkqguxw81Nr6LWnZw",
  "key41": "6K8meH3kuvgfWToKseSM4xjGqGxdGTBEaMVZrUtkyBpZZzRjo4DcbFmJqtUs3NcVqNE9s3LYTy1MA1BQPr6TYeV",
  "key42": "22onuYdCxdydDMK7xbNMwfaWQyRpLGj5UyLcy8wpYsp6GAUkuSCF3c8aWnnPMf3RdEXTU8JKvcVqZDcjLSyeZbsx",
  "key43": "zM2pPjhbwg7NfgqLx4SCzfaVt9UjYWvpHwxMLwxpmuT5dY8qSc7GPMgRHuUKu2A4sJr5ZZUVGRWiMHbaMVLJEBX",
  "key44": "vk3UnxHjPDak1394zn1vZaZ4sKyX1HUhpNZBzDz1Btb9Vsr8UeHNz8DFEDtnquNEPSQKiuQJ7b2T3HxhG5Ynm2L",
  "key45": "5M6hdigwu9nWgdmpTTa82tjKuAow9yZHZK7CpiRGfsFxwskwGCy8zswwQRKNr8UKHbk6GnAxgg4BHfvRQszCMCxH",
  "key46": "3j3mMTNGb5qFjfAk6Ttp2jCufbnwnA42s9wEvjVT8SPaZJYQYwhjHzr5tHHZeWJiLYh1Ncd2AQESKnKsJauZ5KjF",
  "key47": "2q1YDWXMtQQtjHAHxrJPRipRX4F9G4KkNYG2QWcqoNe7XsT6VQVf7e877GVKJoUaxK2FZeCRj2AX9wKJg54LXhnv",
  "key48": "3HP4HMVoRQmAZhkc5syQmaiGrGdCdykCi9FER8i1qFHdk8oQnDHFBAgGAjzVoNywKuB9pgtYWZfBuVpkAJf5s49g"
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
