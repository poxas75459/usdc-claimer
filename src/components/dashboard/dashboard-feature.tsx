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
    "bZbAzvfGEqtDT3GZcJsEz9x9wpnBnEEuPzXnxHRb8isyQ52mJwKNqy939Vp1SUia5F3N9k3NtZWzgC39LG6jf2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHjAiUjs6VPfP1jpYBmdcqyKiiq1VGcHeD9hfeNQryK3iTTPobYjRfH3uUbK7i4peA3FEH7EXH3xq2jAisWaBGF",
  "key1": "4bjYrMRpACb6g8ggRJMA7jA8FuMkHaqQWMM82gxPHA9fepNmWPkknSxWF7DZ9C1c5MVZKmtfhMid2mrQsMLNxPR9",
  "key2": "Sas8xHmES7p6xQig2pvUXD4UJLiZw5Gx8pCrVrZqnyGZN3UV4igAEpYEz67UqfNycDQqEnQiV1RuA23LVDoVtEY",
  "key3": "28yFwi1LLd3PgR5ESP7a8DGNPyZevYbKzmpUA3xMkV93UBjFChWRzVds8LMhaMchgrWwe2PKmqytEgUqazdCkP9J",
  "key4": "4uE24MrHctbWsX2bgU8JrnAg8JN7GsF6CAArK88oHNSxk7x2prhvBf2BRBTZuyJEzYj6N6KW3dJra1oMDUcW2FFX",
  "key5": "Ftn8fkkzhmwtU4PhwJfh9QxXUcYGP1q2sCYMoJwAfHnzdBW2mJk9YjR6YJkmQQTUu6RsaaTbtdjXeR1vk5SmssZ",
  "key6": "2JPm9j1VFS8mA7sksHoduzG7SrJNm3JJdARi8VMCmWxZJj2vGsfSZo1ospGYdVKmzznxZNfdmUfgmYywqbY11F52",
  "key7": "6iV4GDgNMvCY65TaZgkkPYSwrRJjvs8onUKme8DRtZi9q9mQo2852xfjZASShwTEFVCQMsGWcUxC22gE7D4CaDK",
  "key8": "5U9dWHBb56L4P1KisBs2x327fJtUBXgQKozAhFKxLd19P4TXHR8fWXdThiSbsv5YcYZnrUgVvvFCSY7JQqLnJVnS",
  "key9": "4GxCqTviFNuHMTFwFikhccuHGeKL2PMT8wEjku9hZwQfkmE1HPMmQPFxnkHQ2LUTi2a8VJ6eEBLWtCWptWG8ffgJ",
  "key10": "5rLLre7GSjp3rrcCg29vvQKWJUqqrsScgEY3SBSVj9ucpAuLDyvekGWcJbjk9CADMky1uNbPADUzu1hBDSwhT9mo",
  "key11": "Z2ppAhqHunCyj5sGMsn73JavRg4rQrDD4JTPaNa61bArZCyihGDZSBF7ABJ3cChPx2ZM6QqFHDUaUYry5D6iRer",
  "key12": "23UyjftRzmquo1Jo6uZ718wQZXcoQo4Rv4L1CxoZJnZhX3Es1Vo3sWYckV62m18HNicCAaEnGVwQNKsDV6CQE1RK",
  "key13": "54PKttJ9aB6thvgMqP8bjq9cnRmfHTPRZEPXDpfAFBxWmbS1PQYtzXE5Jv3Ba1UxtLnNKoXfeXv2zUeJcszhk5zk",
  "key14": "4JCpGdwjPsRNjNGRiak6hdaHcKLCK7mxRYuj99Wr6BSnv9GkG3TuLP1s59dqcpeFVuWwdJFeHPJNrEyR1kQntTQF",
  "key15": "2J5GiHYXaQX4twhwAwabC6zxcV8okYXtJMGWSfeMPt3g8m69GeLaA76YooFuBXHoLp3o3zCYaagHBoVFNqxuhNSf",
  "key16": "4wViL8iXBzULGp5S5EPc4vETSoSKqNLWPjhgpDC13oQFrRkV45G24wCprMEtQZM4tA3hUFuNBT6zK2i7ErjfWies",
  "key17": "AtpTgovU5y32FYekSMS6PN5WZMY8RFX28kEeCQAHuACX2cgzjvoHGpj54afQcaZJfHUf7q13axNd7WLXjEbi27g",
  "key18": "4YStggDLobUVaD4iBFKGTQ9VeeSEJEvwNpPNmWxhaSaLULrpZ7LfbTEo36LyF2j32QTxCqj7fjSHyDXNXKDFe579",
  "key19": "3meiYQeNHzWzkYL1Lqut3CdgtjNLdjzT3SkPsY3pgweVMcMpnLvJTYBsporBWeHGCJwbipMtsH1nFnKVF6Afg7Rx",
  "key20": "63vomCybgV911RwVdrWhvBrft8yEV6ZGAbt9LdtaNT7i6bLAuA8eN1RXufVbHGmzE96kuy5uKJ3cCFSoubyje5je",
  "key21": "5qFiwP1JCqZDJzu5J962vFoNw1yfm7HuNrVw38of7wx3xJyj94wR6gKRpLXewGAtMD5m3zYD23spqXXctNXLaksc",
  "key22": "4Lq8eZpbtysvYFCgQB3VNz6dTTEMccZddSYR8yWXJPFP6KuiKWbSTPjqT16spkjq29awoWuHq7GnExet8rDFS62M",
  "key23": "3jkxr5zg5G7vKo4uvqufMHZAdc2WvR8uJVGQ82QbxvMjAkBY4hTd6Wv9qsE6BLWYwf8wv48j2DQ9j6cKC44Nwpkt",
  "key24": "4kwdfS58VmG4ddAi9ctFpm8ukaSATGGpuUxuFhJGePkodHTYoWDEXV81DwFHWyAWGnxNyJkbvNkjf1xSAsV7qddo",
  "key25": "4aNiNgZEX8HABN4ry7jirLKyL5ayXzMuBPgfKLtVWqUA3mGqSRgREjSySkxHv2sT3UinZ7jE1PinRv5mMmWdae1q",
  "key26": "T7p9PL2Sp2MAcYTKhLyNDV65Mw4Devqwq37epKrVMFdBsHL1LbyG3dQP7nU5UFBtcbCGq8YNkPySF8QuVTTMqeb",
  "key27": "32eykRq1uy8EzqVxUSe8GMCNojUabLzS3zNqTiv6s1DGUz27GJgrAiameB9WkbsbteQWhFBFvCC1tqcNJka1aaJ6",
  "key28": "57ZTYepJAEZ6te8VXYtQz1E85FiGjon21swRB5WTVnkLjrVZx9a4n4Q2C5KWmAbvdbmMJbCJttw9JGu7uXXhvHA9",
  "key29": "4hBXNbZt2fWMKZfxCQJMA3rKpnXv5vLxWLWy4KSNoHkTTZDkdD7hL86x8L6XWGEskCNXnSocoTc9Sh5Mkz4RiUov",
  "key30": "5HHyQt3MAzK8yG5ev2q5HQNeA3ESEm11TbMfiUAsKPi2TP3PYZUWhWbNh11eo4cP6x4xjmYrJSDoreEwMBdePrrv",
  "key31": "5fAebkeHbiUtV4sVwfWv7tha8y8pQwvBn72ZMk7XczSSFehADsoV1pdiQX1ZXBdPN7MMwMHfeXrvPe5rtUfQ4E8E",
  "key32": "58NKHqoG9j3bjBP2xt7DW2YyZbxm5LCEpJXykonVLevNuXpt1n4rynER58CPvJTvbXcvGJspfDUByCUaWuovs7xz",
  "key33": "4oPQnJgica4zx7ajqMekZ5EmDJVLPSMqBMMdW2uSZY9YNsYgwWdz8ag3mse7P7FtSLz1CgCQA9n5WWYxVmd8ScWJ",
  "key34": "4wLVjaLTdytaRkF3E5Y4ZBK6UPRvvVJmTTG1saZ71NdFAz7Ka7ow3iPgfm8wLy9cEETBntnZAf4uHcRn2q59Ltfm",
  "key35": "5rPkqFzTq2iwftFsAeE4XPGXNyaDmumumbgqGsYcvfn8tybsWUmoJ7eCQQGzxa5GF36QdZbYLhGJfmXPGX7Rc7YW",
  "key36": "5icy97taWxXZWmRc8Gx8Bjx3uwQ2KqZ6afyrnj87wijELC7HmhFXht21oaSRcHuMpmAnTiHBa7KB5YZS8TVJ6KnS",
  "key37": "5h6m84xH7PameC5tx69catBTKcLj5ZM2w1Hp75AhxCmVH5tBgF9nYMBtcEHK2i1Y4TYdYaGoCCZQw68VuBYbF77J",
  "key38": "49FkxwYTFfArdvEt1ADZ9soDAFhKApFG4Sdi2krJitMtgfEyrqn9FT4yuidtKgZehfyYipLkYyMUKu8jRUXh2gFz",
  "key39": "5Kv3r3UvGAn8Re4vFSAG6TRNbxSnNrnFut4tjuBzGnVZzhEWB679MAY5GHH59WBrMJh4VsErz2eT7HSMV9WwyUM4",
  "key40": "UhzpGvmAMsTiL1at2ecPhVXWPXqQz5Wy6NKfpSiWViRUQcMhMeqxSJdyZ8dB5y22J8qrreoLb4zPKZGMAQ5JMSL",
  "key41": "5bnDqn1fuhhEd5F6FSdYG2e3asW6L64UnecnQMgj4sNvU1d57ZfqMrhMyzroty1XRmDvAPX7wjqt7Pqt2nipyxoL",
  "key42": "58A6pkUGDRSYbYpSNDPpFYsQT8vKh3HHh4BGaGoEqm3bLj9ZsAfffbqgtkXYAZoRwKBjExFkJNLDRrMaSZmsxxLd",
  "key43": "4ZhAYU6HCyfqJDbGsoCLEqjeC9pNT8eBqeFUkMfECANTihCgzXQDHftjda6Pjs7P82FxuM2QEPWZHsG5n6gYsPiF",
  "key44": "5VN8sPDzkmUGLzQ8qmPM1ECnbZcU3GRtcnqTYcoUAoyWRwm8itcgmGg5arAqe74zomYEPHRacizuv5BgRwFK8DCB",
  "key45": "2Q7f8YXNbpiMTXKEYL2ndgMXbx4mbbH8DnWDtdbxQbRgWkWxQdhM2smnsygeeAZcvSuzQ2waZM1tnb54kPYdwnZd",
  "key46": "5TcugEvQQpktkMedVq6wjaqxRD684AFURPZ4Tg2SEmbZx4Ph3Vrkisv72jhBFaqehD9DfSUMVTscjs59CPWf7T3Q",
  "key47": "5xgT4keiAtnWjGULg1fSV7QwoLR3kdVfJ4JKuMvknoFEtNjkhiR5YpCG8WmLHryd2kdr5FpG9u7aNgeioLx435uM",
  "key48": "24AUwFJomA4oh9dk5F5VWTiQgQgvFLZ2VaKnn6T4VpeLsH5g8xZzqZy1AP3xfFCWoUSq4b1AT2FvhToybfzuQ13c",
  "key49": "43uUe2G5xaHPSpiUAy5tju7AnkzV3iUTxeUggapqUzyVxCH4YubtcvbiYiiAwhwf1gu2c6mYcouwYbKfwBUp6uSo"
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
