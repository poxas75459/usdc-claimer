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
    "EKV4qiZQtR8oJ67M1Cuomw2jnyVgNnF4EVWgqq5Pyi3e2nCidVC3rGTUSWg8YaM4KaAhg6UksdwYmVsrwqSw16a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vASDh9VbkuPHto9GZmCzZv54JaSuo6sGCeUChFB3hwEghexJaa8cGFjGvgFK4z4G2xH1WDzycukiRhbXyxVVAvL",
  "key1": "4bYsGkegKTim6fUSo7BaNy2Cre8QcesNShbrrEBvK1FZwPn84A9Xt2XE6AdnA2ByjDe4qstvvtw6bZpusogLkjjZ",
  "key2": "2JfTXSqnS44V49w84KJR7BrwabkaHzd6rxLMywqujjhU8PmYTCFJHN29g5oRFn8qqWFUZNgPcwEBAaycru9j3XH7",
  "key3": "5wmnC4GQNR1CPwbuY22KoB7DAdLM37WDFxGUJHgJdcJPiPXBZjPTpqtM869VCrqd4mnVUJX6SAyefsTdWVAC87mx",
  "key4": "2QJNJjowLn279jW3e4SEavUj4CYuE4UZZqkBBf8Lf5hiCG8HdtQ7JD7zUxLjzTorcrVEnkUpN6cS5snK4PaNaS7p",
  "key5": "YqDto2JiW77jZ9aL5ESz9VWqeZyibBtKGSEBVzQLrhn1k7QJ83GxShwPh24SVCdWq76GjRaA131MUpfH2TS3QjB",
  "key6": "5ntPxgo5eBBLaiBzSYi9v7jKxErhBGxHy4VWw6e1cxYEb5jJdhv9iWW71QeaCzwmJFyhW84bzEXdNZJLv8aQu799",
  "key7": "2iCgHtHMemCEvrFwnFVAxdBFM7cNfFeYnnpR7vVsJBLtn3ecNMJeo7fartV8Mx29tcbFK5T6SDNGFeoomG8Ds4tF",
  "key8": "3t35ReVWDP3vkwTGM96aK5xdKUUGQzKJaLQZzw9dw4nw3NKWFxDfP7YuRFTL6N3M21tEviHjEMHNQNQ6f1U3enh4",
  "key9": "3ytmuJifqEozaHzJbWoX1nUXy1LXY5Wu2yjuJ8oisXGQdMvdtiBeVo7RqqDbo9qK5rWLySMeYiXZoAYN5unEfdui",
  "key10": "43RsUf8NJGYJhtNFrSZgs6HJ5Z2az8ukyFYFfkTwC7HKtW17oSV19372JwgRUTeZFTjVLnsqc3zFZ6KTRmmdsBDw",
  "key11": "625v6kWpM2AVMJCBCHhNSTrEijV47KrJXdfKoNHLUXe5AhCrqjQXsppQxonmDTqP6seYw6XvdRzqsrdpoHGmkK1m",
  "key12": "26ghcn18937zWKboEUVWDocYvYmp4Vv8yygVdBD3Mg8ShQmZorBCX1qZMPqSfLC26NJYrSZcHok2gYwoLnEimjq4",
  "key13": "5wEd3VScNwY5Xfdx6qfRN4e84CdAAZySDNcVpvVYFFTAJpfowjKEZhfu3TGYAj1A1Y6HAWwWQwrcp6jt66RF4E3",
  "key14": "xLCQfnKreZ87ENzJa6jjxFwSJdwt9qP1A6ifSEDBg2ac1PPBUeDPP1ndCBm9xjPmSGgFXidDfy3oLk9UTP7zsiK",
  "key15": "659uJnyA1YaNE9nZW49vSnGfeRi178iY5pY9ZU2UnZdkGD79k1w3HrCYE93VSPDsiaeabZnbc1bMC1UZwcEtVtVY",
  "key16": "63rAsqxTnchUP1VfC1epfJ7sGmF5R2QvSUr9re5dBjgMzRWrgFxycgRESfN8rjAJcoTeMdD5oht2jooLp9KDEV6R",
  "key17": "27BDwZfY3dHceQWr8jzxGSPs2yPcEvodSJDGovk2BKkDER11efkRnhyhPqg8QjbVBvsfUBwCYYZYwGkkqdkiVYUq",
  "key18": "4qeQG6QFurNvuc6cMLBF1qTWLQZxWQSTG7QezbzUW7EGffKKMDSBBujxN18SWeGmoDBUREtvyDmiNqmnRMs7KUZm",
  "key19": "497EWmoHW69oif2kAsRmQSpeJ8SNywtS5nvkYGx36U6KNpPmb855GznvS83tb3LbaSDKof7rw9JQrnuiMLYFMNLH",
  "key20": "FV7SUptgfH35nvsn5jdoKYHa6NncLozjskNRithu3bH2LBmXECQdxuBYRZi8FTMuoby5QZyrT5suAc66iBH8Gp3",
  "key21": "34yex975SSRM6HjZLV33SWuaxgxpNywa1dz54zZMBgtVB7N5ZninkAPz5q1BS42C4cV3z8FKV9Q53S5uzjNZjjbQ",
  "key22": "5XHnZSvB2kG7UDTz9GgjoMfkDcTwAAwR4m52wS3jhRovJG6tVm5kiuAMf68Hg2QHywohLA86ysNBHoGeJUw4ZD1e",
  "key23": "4soQDBuVqct2wejeU1nXQykQE6BjSDwqF7etun1Jn9FioGn2KpxwyhUE3vdKS94ZyTYaerqFW6vadQDw8NmEGyM5",
  "key24": "4r1nCc5haKode1U6nmg8cB2wuqCM9X9BzmEZYmR5sjDrH5KGXzYhd16eak7jeEhD6mDK5xtr6cZzxwgemKwsVaq4",
  "key25": "5mrzKVFLwzbXgsHgEbJYoWQbW6XmjTBFZRSfeD4LK8soZsvQVSZL6tR7wePrPGeDmfWhRTFkzFfy5wvCrotYiEsR",
  "key26": "s7sCSkRN2nKTE1fN4J53n4tiVTdKSiBWaLPoXBq4B4VY2WjoAbPnHvrWqg1bgjnLjQiqsjoTg6TSvESW4HXNebr",
  "key27": "3uAThBRGV9vakRRpzKxrW3GHawcheZw7YqX71ekcfZ5PPNzXu8zKnzmG44a7UAk5Dg81c4FT9hJQLuRWhbkWRvMz",
  "key28": "2Hpn2HqH2uttfTPGz3SCEBGmV99sGgWMVJy4FxwcupjVeP4nhdSc3LRza1oTpgncGMcpDsvkihTR7EjcC8Ep2Ca2",
  "key29": "3WbYT37sNrng2qdXoJ4Sic1mrL23V2dME3YZV2KcjmGAjJap3D1jh6sEtLacAjUUcjAC38dwbu2UNK2MQaTbTA4z",
  "key30": "59Z8ynSNTpyV4NSWSrjSDrszec2oGVZoGhawDZT9Esmi7593wLutCYbGBibferN8BCjXVZGBMBD8gN8hAyHMaK3h",
  "key31": "4zuAxCT7Xd7hvHfhadNqS15c6ZHy4Ep15PVnYsfZ9tBCckBsr65HCDNpwh4ZokpT8a5VQGQPdxmQQBi2unHbBa9k",
  "key32": "WNtBwR4tm4org8DTK2kE75fhacCPRctpEjb4A9ddqjjJzsaVLzJqsThcszJVWQNKYSt2YKeDG2YfgoFTsWdw4Ju",
  "key33": "2UzgurH5hbG2bkoRzpWjb4aJsGdPupUZJRzWQRzexiKLHTiVXV7HJwimqoLh2AmGvctQf6UGkW1EKRyadr5yKPhc",
  "key34": "5Z6vhr5736RixEByHyDzMPtJDyc3o5qStZ8v344mau3hEB5o3waiQZYHiV64VoxxwEtWBsUq13S2py4wpHodWZvC",
  "key35": "5TAUBaBFNwChpFRCGkc4oyMecEJqxjov3qRNax6PD5PfUWkUZUvcqoVMHiKV1tnS74ZkhcsJKrSyAHkc2rKC9Jv4",
  "key36": "5XNW1Ar8mFL5oyD34ttSiFTLtfmu7DxfjJXxm5BjeaCoE3L2mPANW9dqGPRQ8ZVNd2mvDqWG4dD7K4YB9RLyo1TR",
  "key37": "rLPdvNK9pA7an9Vd9hzvNszF7PrzVhUxtCoedpUiLHGoMmhg8nh6yEiVfM8LoVReawKHpLH9t9CMVFumyy42Z8x",
  "key38": "5JUqA6xq5U5s9f7fXk2jq4t9cwAh68T9pMB7tN1FqiEMjKAs5rwULMpJ3WwSh9NgBywgmm9pQtBYKwj23RpLTKUJ",
  "key39": "3R1XV8zgW3xsqEosgvREepigDknAHjcw9rC8yQ7DabjktxtDbr2wfjWDUtbo4TigBcxeR2GXur9HZXjS278E8nie",
  "key40": "2TAnSVa8ujsWAVkkozcXbg1eKAgc7L4ZuvY37xiLmDCcfYP8rjTw4JJqKsQYm38JazKNPXeQiJrbBfuoJNiEc5V6",
  "key41": "3D5XUVsjvvDTVoLmFgCfXajQEG4owYgkp6VdxNB7P3HJhaWnJ5B2idnXiijyD1ySnFaSaaLpF2V1xodUjaaN18YH",
  "key42": "2NeW8NwCpqQCQTkAsbKZmx9yVsZwkcuLpHY7CS4NCYGUMMhCmhGNvvPaxEAAiVzbjXSi7MdJYFiXtCcQC41i3u1X",
  "key43": "3Qrg7uTH5tMZPYtUoCi7PkAimijfmviLRdN7voDK7uqeJUbJrcyKgvhPUViSjRSv9SF6iSaZ87vbCTRXos9MnmF8"
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
