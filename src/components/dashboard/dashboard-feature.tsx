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
    "5ppxDjJLWoSQSHs4xR6NDeGQaC1eWWeJi1CEcP4RjqDCwbiQ2okhwCvDVG9rPdWu4fEG2dFWHrD1vu7Sh7ufv6nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cViJduJq3QiKbsNiY2Qe5TzJEFJhpDLSYEv92FZozTV8YMrDqcestkM9xFSQocMXNf5D3nV9S5YYvMdKN2ZYZF9",
  "key1": "3yM6WUhhxPBgZe89HhQVRzfsTphD1kGazvRhN3hWr9bCbmyJbHbabjZVzDj85Kj8ZbPNdJFg4r6fTnAYGQM1aumT",
  "key2": "2syjrcUipbDin18ykU64zXsLwt7kJiugU8Xavk59AfMYimKfRz7Ue6Eje6GzyrGcfi6oHYGu9Yg7nB87MwqKKBQw",
  "key3": "2cDacJYh1BSmUTFVZWJSxuZi76Pdz2Kr7tsQs3cdmoKpAe5WJUzSEQRU3dRR36JxxiKxV9sikqXEXMR6GiMxE52N",
  "key4": "4jdGgg5vz86V46XYVPATZYfxUbV25LsAZmsiho3XCJ8fSqvbTxW6TuzVYyzA7AJKcS6ZNQhoztm43uyA2ryYB5ex",
  "key5": "4Bg5aR79fnjmanpFN88V3ZACuHwDpzL9AdQWQsHaV51TexbFsSgFx1EVBnCSLxtNqoBCnhk64fFtpWrZZqJGCJQ5",
  "key6": "Lxzo1ayRPRcnsNV11ZaWNAYN6PDCDXGSYqtVauhpfDmr5pXAmDownXzbDoD8oVSYSiiwy2Hybbr5vXkyGxPWVvq",
  "key7": "4kFXoGVuAp2XBAsFcAFBRpqmtG6FjVRTZFGYaXbys4oC93q319jFaSa2UczZLXg89WWYwrx5kjZpNwSZZDfY4GNZ",
  "key8": "4RDDX4asx9trwMHK1pZJMuyidCvypecF1X7KsMhyqgZTSCYfh86wLmzN7RKcxjp8ajTGZfwXB3Aqo2cJHtoPaNTw",
  "key9": "5j8gQUj27YboX74GmL4LJqQCCtSpAc9P9jVdJRBywmGc8bdbzbfwXMcWyrnQcw6wJMxFCiVQ3JFY1ApxtRzmotPC",
  "key10": "uYgMcJDKHioBTWZwLVULna9TK3QxHhsWTWMxDPVcjDEVhCUZNsznsauazh1SR9GYMog4d8tGgoCjuWssQ4gebP4",
  "key11": "3KcZj3Nv4rW3yhSh3odL7zSqNXHwpYG2P5SaYbPEEUM16HUQSJPcGFF8EPhKxpjxSDjCbUQU1UoJSFWKDDQn3zv5",
  "key12": "EgekCKAkDeDiCskbFuYSjb2nBHMkTGoWZvNdwd4ZLr9K1ZK5eWsUGuFdsJratj3eK2VpGy3LVkMShqr67h6XJir",
  "key13": "MZeLVWK2jcWcy8DMnNxUaEBRuheYMzu3g5D7ARYaEY5xsNFvReWZwsDw6Yvzzs5SksfstTDvdrQGhyGcVRi4z1f",
  "key14": "2y79tL3pvMVemCJKZFXVHp1vLxTgnPB148JX3r1eh2VhejwZYrdVfY73pw7UxhnvCaBJEbx42CWp3KVGxbRcy7Vg",
  "key15": "67R7ACRDbkj7xXa1erz1bh4XcmZPKE3VD5169gnBLHambWwhuSr1ZWPiyW9eh8541isVd2fvzgVmtuGfbrUcGkNf",
  "key16": "4VYxxzcTUzWHf3H5ogWPERQCi6Jt5ujqVXCs7FsWDtCpVbyRj8kEnXDgJQA8NiBRP8x5eBcK1jUa1t2Daa5AcUi",
  "key17": "44uL2EgWWhYUbPxBXBHXJEoBJ8uBvaFp4zAkkkpW6WDqu2WhpsWHi838hJqiZwNXqjhnh7NDwD5vg1XJVmcri5tp",
  "key18": "P4cofT2uNK98GT5FtkxEdTx6aE8qu1heeVMKoUEjTzKbGrg9r9n3FjaUfmdvGnPaT4wjcPwNrfzTmE1iACXE9ZN",
  "key19": "kG5Fi7zf57nYrVmQfcEA5CZiSb6yB6RNc3yVvUTesJ29n5Bmg4NNTHqjqJSQqoqEVeE86DS3DEaHcP4jA1rUiur",
  "key20": "4cZJE1uXHwMBXfHNKe9UuEkDWSAhtMqKRUJNtx5Zubsi8Y3nC7BcdLteUu4jZ1hUVmNM5C3Mufe3igiJZADvLkVp",
  "key21": "3yskz8tBR8ZJSByu1GpCdy8P7Lk9TAyWf6rctFncknMSGa3aV7vYt9w6w2dH3tJwCjen3tZc5YT1j6h4y7bGQjR8",
  "key22": "4WKctonbccrk5j3rUhv5QmCPSPaxHLhwyPQXyFpnBrUyywib5ViLGY1YeCjPUjKzfNmRUn3jMDNQvzrBcXoEZyvg",
  "key23": "3qn6hf7PGLxbPKcY8qqM1KgkBqyricLnCMVVsxARuXcFjgtnwc2NNSMSGyvc2syBfvhsmCc1QuD3ebic1CxQBVUW",
  "key24": "5k38vsnsHQQ3tae5a1JPbbEe6HT8Yt7TXxQGJFtssthoFM2UeJHwS7JKxfX75G4TpvRbo3CpF4gatqg5HNbTf4Qb",
  "key25": "5NEGLhpnPp5K6M6CEi6ZHYcLw9xwREehgTHnjH4xAUeuQfGnYsUHTGfSqH7dKUeM1QSg2dRPPdtnfTFUWFsTBG91",
  "key26": "54WEP8fGmG8bWREZWVLWRobqarVBrbo3jXt5vm7QdKMcPHypVVGFnUfPb8MMqZW3tRCcDwiXM7nkxSqpTa4miEms",
  "key27": "4BDcCF2wkghuKjiNu5KyP4P7c2vSXBnAze4SjQwW7Q5nTds89GVRSd2fEw9XxJHxkMWnNcHjtWALJvPVYJpBhqiR",
  "key28": "5AKC2o4qW32fkfyhvshFXpa9yk7Nos5CrhitzXtNgScCA3UHoqk7UqEn4AyZ4eM8LjaNuApWTBk1E9sjbzbaBqD3",
  "key29": "2P4EYMTJtATGoppUR7BJYdm2pi1Tuy7iUEs5AbBxGzSWFUdgVXUznZQJBZpGjfBoQbCyMUnVs2KkzFUY1YnjWzQV",
  "key30": "4S7ZqFKn2njeUyM8HHak5hx34qF4ttroruqZbKC2G4uJsgeN9o6inerVgw32X4FqeikaQgDzaLKTebQkL6nV5G1p",
  "key31": "VWAUecLsxwajchZ44zQ3FyjPQQ4PXhe3REgb1zmQ3qybmmiDhPviCjnKnxX1xWh7Sqb2phzJfyE2QbXYsYqY6UV",
  "key32": "xbKqqBHXQACY9L5kgcC1DXhB3kdVbKN4SdfJHvSL2CZ6wRBGTpQ8Q3r2cdSjD9xfe2KqxkcYQZXnKTRKTGFuDv2",
  "key33": "pfzDJk8SKfaSTNvNf2j7bMNrdRyhhNN7aQMrNPj2sAUSKrbYhHygR5ckXuQURLtwaJ4Eu3mFkrjKkf4GuA3RsFZ",
  "key34": "4hKAzvnoWALXuHpALyoJ1F2QLBuTj71XDAieQVcBp8ksrsq71ny2FGXTb639wcfiN6GaeR4jWtt5trREDrgWxSTZ",
  "key35": "5nKtbWoeWPha6rwcDghzB69aVX2mtrUPtk4GHa85EkV7TA4bVXWWpd5xrDg31F7HFuRu2tEu2rdU3rKMGDb8vBus",
  "key36": "szhhmzXBZ2rFrC9itmd2UbTtV32trg7FcjRbpPF7sWd1ziYToesjxNUezPfHVX6rzA5xKY5thU4ZWFtMzC4imcK",
  "key37": "MYPNKAT6aAT1bQL1STL9LLvbWzLtX8A6vr6yxeSYtguXwCmYbjoPBe7LcMAkYLipZcExWUBK3Yw1iqjoxvf6jjn",
  "key38": "5YbH6xtGRtxNB9brDBxwDKyoEYq5oZYSTA35iATWBwUMRs39Vt1gQi7TWXmG5mfAA5B6tMjr6amnAXpj2CAuZL8a",
  "key39": "37xEhXYQ93oxVJtvc22QX7jEZCXRE2zTjZQ8mmbE1dpBad4gv8rgYMP9aKUrxxd6t3nvMh2aTGAtH5iCqFLYf471",
  "key40": "54xoSUmHAMkji76c6YFU4oiqR3HiEqQKHjAVtRV7ohX48kgijZPT1g97u7NSz64Q1eYcjXJzTNixqcLnHokdET8U",
  "key41": "3MRqc6dHggdeFiSitmum2bpV9mrkChubLkkZuXMyooymMCR3zsfxtWB1gmcbkHuxZxnDW2jJ5CXncTo91dtAChrK",
  "key42": "5bmVYtpVzpA1ZjSZEnEEu6jcsEsRs4wBG4k9A9MmDV9nCazawMyvd7nfuioz8fxVrHCZHTL6JwwvX42GizLdDMbg",
  "key43": "5dhxFqtpbYYfCQPvLHF1CuBRXXCLaUdoPFd3Sd5qdWWndDBDP3qPkxjPZHTauF5CtWMDsYMSHYHirfEBW2yNuM5T",
  "key44": "4XLxcrHD2F4hHSYK1Gb73HK5K7cFoLmpTJ2HTsFcji7fWUxCN7KK942e7Q63fAGQkVzUmnW5atBiVitgpZKVsqo4",
  "key45": "2CrBQD94PFPvU5iY3sk3evBLLXcdUs3L8YrWo5oAfgdg2RGnQjWKNUSSxjEm3kfgKdwC3ySFMXQnkt8Gtu2iVNfb",
  "key46": "23EQbXrMAwiYcmqAfsh6Y73qFyGjKLRgPTsuGoyPW4xXETS72iKs7dTyJSWn42EQLCmAN8fJ8GESZzSsssQFvb3w",
  "key47": "gbmHmtsT7N7s168BrSPQWUo3qpcwF2kByzugMAUbLPmqN7Yn1MKTN1hXrpVjfCDU3YDwEbWuZkQ74oM5cbbJCVq",
  "key48": "2F324gHm6U7UiBky8ew4Q9YMusUDGLjRJq7hjxukiZHs6YfscKLYimmbbDeeUiVtT7jvwErvy3BAEeqk1knwkcS1"
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
