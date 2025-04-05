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
    "LZc5TReRCSaeK4Ti33e1FGpqgAj3geUrRbNxX8kqT8h6PWNkaggJwxSCHtubHgpGzBiKJa1ZoPQKvmJ5KQmJFRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcgqcYr99AQRAeRm4ezHS1AuiTitQ46RaHwYypnupoFmHCyuouEH6UfhHT6JPtGzgQV1QGCnospsjpJFRVM4EHT",
  "key1": "5eLfFbCPRqQCLw1Z9FD1t9S2X5FthexuUeMKyjSY7htYWRxVTpuq3hXxHPszWdJGbkijDGa1EjEXsa3nbUuJqHVn",
  "key2": "4uPbhZAn1up5Px78Y6DBvJooRFk1aAmf55ar8RDmbaCkZgaQZyYxowVjJaTNDqfE1FTpqyZkLbZq5gbRLKJVx1F6",
  "key3": "3ycNAoFCVwwYsoNHdNrjs1JpEpyAC81bk14CwVu6gaZ3yAbRNRk1Yx3yHKAVo6AvSAzTsESN2c3Dvv5yhd3HwJk1",
  "key4": "5QewD4RdzqXJAa75VCqdPpjVZ89nFtnZKgpwVHXabZjQJmqDhH7B93JLgtgGsY46gWFzyBiSTuho2SZz7YWcxfmc",
  "key5": "4aceVJ79Tsb6xwqFRpPHhzhVc4E6MybuAoaqwqaPjrpUpBRmNJ9K5kP9zg6JrEUVvryZYBLuiMXLPoBHUYeD1dd8",
  "key6": "36N8jQ9hNDhQmDwu56jTDMWNG6fdpbvgenTf5pZNiJB1HBRSt8qArPjLKkaUAN6Fy6rEP1RhhRfMf4KgpVdpARee",
  "key7": "5Mo59LumkmZMscfHJDFba5oaPe1uCopWKi36CeDYtLoJdqXdXR2Uii3E9sktJXBkgNspToo5aPmweYqdhiiVwtMt",
  "key8": "RbbejsJjD9uohL25R2GqvuZmGFt3sTS9f4jen13VTt9ZoFY34F9ar1HwNRVBCi2CoizQs6tgFchntLXG7WstCTy",
  "key9": "xqJs4eY1WkxaYFMeu7QaVLFD7tNC8xrMsWo4CZCHsnW2sW2rCN3ePyyniMJTXhTTjWaVWq6j23QpoZweBZN665L",
  "key10": "4xgbXhPZAVSXfNRtDCycT6xdZ3GgFG3qeZjujkwb3qLTkQbgpBfFMQg7CUtBPnwALmd9aA4UCnPchgtQfrESFWAT",
  "key11": "45smLUP9t3pgEHgKUyuDKoKYTm3rjRJSx78PRNTUr6ReBtXgAt3JPbumfa8mi5iz71zQSavHdspr5pQT3ePm6uSq",
  "key12": "oKVvP9xzgnAEgCRGQySFfKzf6V732E5XfbxAKvT5NVxaLKiu5XGd49gBJpUtR67vxonGvJ4Mxe5FPwENKcjHmui",
  "key13": "LMkni1YTjGkX7gppXWxZ6MbHSbEKv8jRGTSqHjMHFdV5Gqew5avPDQmCYitAPyFeZMrEKiqiUkvXBePe4Wo3VW2",
  "key14": "2EXpmygeC38RrRy9W2C9nmy2N1uqxMVGDD1gcamRfdvNaBUSFCHpgqJGnPagjyD3eao4Af6MENgNhurgieMAsm5X",
  "key15": "wQrazoUwoFWSBA5FqTxF4PQHMD12R8mj1WNa2xZi7rXxoKcmKuwcmVqKoahkzbfhHbnSTJQtfajAhcAm2RUfxS4",
  "key16": "3Tuga7J98Kuw5fCK1YYh7YibNtHa2ZSDD5USjdaTvuE8qmDbM89gsQNXs2SuRk8uMUD8j1VJcwcjMSeQcEdngTtS",
  "key17": "59Ntubkzm9octzhYVnEwYHMAtdJrDL1x98ajYG2ftTkLY1MDcy2yRxfAztVyLoJjanUMDh1hBcWBj5BPJ2dsYTkQ",
  "key18": "57tkwvbXJuymmqdG9p5LU3QN3prJHDpE4xox5B6Wdp8n2ZxRRcVvtX9sEnSMDHPfe9NrKYsPt1a1b7Lc7XxgxqGZ",
  "key19": "2jAJrMKTfemTFkDDXtEoh5fzYc2CMc3JvUk1FFjxL9mib3m99CGjo5Vm3zvP9166CmrAVdkakoVuDuBLGUQ17fgZ",
  "key20": "27cSf59zHnL2To642Uq7Znx1gMHQNz5eyguZvX4FgceytFJnNhPJKH2jF9ySHost85jqES8HZgtmzRpenqdkWKaH",
  "key21": "gtWypvuzPG3z1F1V9KaWPHdXMco32ZYPvrPpbDqnsUshuEpEweFMS3b1PSxn8PvU4i53b9WuwzupeQ3XN1ZHw9L",
  "key22": "27YQmrqMEAzpWfTtijQh2JzSQSTUR3cUK6ZraJdt9cDw7rwjW3zphJJ66wmHNqestwsRp4kyq3snyKc5EDg1Yf3L",
  "key23": "2Rmr3Lsrd47npZm7648GGKQYKVVenQ9QjRqqASVE2K129vknc88VB6Es66jgApWB5c6tDJNJRaorYhaYyEjJXKa3",
  "key24": "3xMxH4pWNZUQfXcgS2wdNFC7ydWDi6HgyA1BVNz51mBoLNSJ677YdQ1mEW1os6ojndHmjS5cxu1hJksmwVbg3BEY",
  "key25": "26gaQrBxxGpiVQx3SPeT8GwdJzjmcTQHUcgU4Wvzc8RJ54VmPCPndjzPFoa995Q5VwQdbjSCXQp8TSbXnTaHWBNZ",
  "key26": "4FPqAG4CHWXed95Qs3XPeQjaqeEFd1RF1csoK3s1ANS1vMcKHLqv1DE7Lz9tmr3Nt7aF8WqujKRsG6iSAKdGjaB1",
  "key27": "5JpScm58xVVxgan4m4tqyjyg4vU1wUkeAAmtKZuzFub3TdsZNCvXhxBjDD5UyDLifRXqTCfFZhogfiVeYTYoWYH",
  "key28": "3mi4hnWvbbZPzqjuHzLvx7h1TGCErWrdCZhwaJpBvKYxfXdaL7wseim4n56TsAgjdGQ54HNqbgevLUMYUx7pNeEb",
  "key29": "2yuXJuQtxcv6DzpwZcMbNpE4nidBLXHsFh9R2oPjhBXRNj1Pa3XmDBp8MWJDQBwgEtodujut6bjjgoodQTmPHpnU",
  "key30": "DWNZsiokm1otw7ZUkRcHmiGbf3LPQRm59jdwxFEwkHaCcsWQRnn7KJqrywuuJRWV6ksKNhgEQrDUe8RqMyJgJPB",
  "key31": "4rwMVAtTJsBNAheUmYwj9UiHVcmfF59zindoYjZSQJ7bfsfNb4quwpxtjpaJkoSWp18WmeGDgRT9hgPxKCF3BS5o",
  "key32": "3qicqnWzsiiDFckxRXtCb6mbEMVbx2ZVpfzWu93hZ67KyjwQ2QfMs2Zg5Hgq76bipYBb7qmQZVzvqUjTzEjfiurr",
  "key33": "49AL923ReUYQimKMMzT5uKd1k9rQ461USExmuX2ycn5FJGrPxgkApEDRHpzWZTAbUoMtFDnQiQZs2V8qPyXHSv8S",
  "key34": "4ckJ3J5fBLjUYuAMD5MDycCgwKLbaMFWqawtmTyWK9vhGQ3kfypncWzg6Z53kKja4YzGyHgKVuXga2a4JdKTvD28",
  "key35": "4Kva1QhnLch8Tb5JS7rbUHJp88iafuGj6Bofb6oDR8fwbpNeZ8hSi2UjAveKmsevyPCCq4BDHoSWjFLgXDjoUSb9",
  "key36": "22ePt8WrgA8CEmG2s5rYCKS8jL3GY15dBpQerjYQ6UstAn71Zf7vFme4HaozRW6BXX49F1fjHJXkpgin8tsF46aT",
  "key37": "eaELSmYn9p8wUtouKouuteNxNCUQKfVxw4WKuEKSg1WSmg3TT13zBTowAVSy52HEU4vP3vNY82sPNqBeqeu2s6Y",
  "key38": "51oGwaWLNBmmb8bayV4wjFRu3eg2fkPvt7TZXVP8opdKWiNtaUwpFpJn655x9wDnoijkFoSH4PbKekp99SazwMQE",
  "key39": "4czZ5EfPLj2J2SWKTYVdPhUqF8kDuYj4yZu1rzUWRzyFxPmjUcscjXSErLJvbFwLM6gDDx19RLjxFWGeZmcK6tPs",
  "key40": "2HEeKnzJz4HBsHTQq6foEpQrA7WMErarT9CLCAMRRAuvUdpJzPLyKkDd8BYGdoNStr55cKgPKJ8Qhy5fnAMX6xAJ",
  "key41": "2kQAHi2cAjP1YnghBm5yiufw7sttPWEd4GWZibYpukzQNPQ8F43XKjHPZsSy78LnNPRJf9Y57G2Pg94GyQjxCHrf",
  "key42": "61u72uwGcwThrrqG83ENQKeWyxzmkjQcsfbeaUuiRwSZREkar3XhDirE71MGowQdXx6uLSYedzAEWd9MgVkPqRUQ",
  "key43": "2Hszs5cRSu32fG7HaHxYkvu57ScvPd9vciDkNudPMEgsyqr7Yp39esowBYHiVcb7J9Y8oVLipe3Ms9ewYcPBn94L",
  "key44": "5zUtKA48g5M2cM6NAjqqDCWtwiqDAuPJX8VSfbP8j6haVeJ7YhzgvnHXoCBN2QGzarU2Eu5k4tYQv23JUCP2qn96",
  "key45": "4ZRJMN6fkZiQNXUrmKfBEtHFAe9g7EmEGyibc6zQ6EHLVrx2G6ULU7uWsehoCBtBZVLhRTH3N2kCRQK6wapSK2tE",
  "key46": "5JeMGihPimiyHkaw5Sm4cSqXsSvppVfsQ4JCvPYzmMc88hiEo5ZVmeuf1JKqEt8AssVuaBNRoXdHdmEPmPKBior6"
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
