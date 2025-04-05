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
    "mHetX5Dexu1MViVXKYLr4ytDe4h9KyDQufY2T3CjZDHv7rQr3eLZMgdLPHN9MvSC1ubfVBVdtiJ6YecYejMAZPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Brgj6S6f3ysZtXzMWkAauCFcwPoVoyKbpSViqTxVnP6U8Fn5rYrRSyek8HGMxxXZvHkau4ead8Xp17zKenFcgJP",
  "key1": "ggBNKDYLHeabvUtEsLx4yohS8ktAvDprYED2jRTgaJr8LRTihvDHpq23GQ1b85XXNBFguRdVyesSjGhX23rFjaR",
  "key2": "5QxcsPZYYogvwmbcrDPVAFS39PYvrqWVbd1LnJBhAk9zMg1iRfG9SNTJadLZe264sxXQFqe2Nw25gW3A6N6PdZL1",
  "key3": "5pzxFbgxHxYUa4cqUStxaEv5wtZB1bguPBioZxu5fz17BbG7tqm9CL9b3uUd9vjwY3wFSY6YBqYYm38KtbZkXeih",
  "key4": "4kfnMJexKXPzXhFBur8Hg2tpWDpx1JnEGppTYbPhPJws9dnWzGrqbxrs3SE3JUn7SvBjmYAF1VyrMiLbrx1HGkAf",
  "key5": "4niY29p3UsFJQwQ6FbSwmt8cJdikz4rR6jrQx2GEbiCAefx5F1q7fB3P7QPieeqSeEgJ8mqhhvAsMiQwfe1UUMit",
  "key6": "5xbLdUcWArhX7kLfFh7aHonqkS77VmJ4NW2kJ76ajcWA2MFdfCeCgjym88ZV5BRAySrWmVgihbE3Gdd6JnMneo2D",
  "key7": "5S4Q5jrF9i8gCcCimSaC1jgPRLBstjx5o3He151jcBFHo5Lc3bjSWLEbWaX1pHDB9G1GJQZ99yz5HQ3QEsXU5rk5",
  "key8": "2fcrE2gdKjcmF8JF2X8z9VRSRWiv86ZC2oc35GXYKfMec71sy3NP6BZ4spa1RX3VaHf37MMcppgjhbbeEBoxXFCP",
  "key9": "57jewopxwaKS2bKsjWphYJmaYdJPhfa17Q4bgaERvk57n8rpjqtVg6fFQC4ndwXNi1ok7xyvP6Gc2xYkDfRVyXKn",
  "key10": "5hV89YtwwEV41tPB4GzV5Z9EmMAgWSNqKdug7iJHZwEWVnyCL1gDNyRqU8aKdq8UCVYquk9SsPn55ZfqxVERRVC9",
  "key11": "2hgk6qAQG442h2F6qVahx8kcV3MmKNZihoNHuAMohER62thJcYB3Z7RMi2TUySBqNWTgjpUUNFVX71SkJ7oNie6v",
  "key12": "3L2B2CLoaPmUPBp2MDCXjsaMFQzz76GDEbB1hJDcvfKg3r1iv47P9LipGAuxE6Uu783WCDfRhTitCX5hB4hZZ38x",
  "key13": "2yZUNkeYCHiNEYe3FdAovp2kPAjrGuV6niKEvriDj8cdULvzNTpCMVtNZNUngQnLjTgsXv3GM7yEL9EvdP1fPJ5k",
  "key14": "4rvfw1p7fGcjTTBB7XLFLyknxiujsz79j55ohATjkM9g6nXkbUwho3n1nwX83dokozoQ1tZ5EY1kvEmdcSyyrYyf",
  "key15": "2cRZ5SZvMJ7e8jiUBBN36Sj6zeY3Pjv4SZ3v8kisDdw6bqPg3HbMx4PosRL4UFQoKz8wjji4Tne82XWfKoddbyPv",
  "key16": "2voPZMRe9ArnTgGtVSuLsbFdFk2vUC3RMwu9k8weaBm2cFm5bVta1rAMGkTpyE17B8zFjDnX7nj6ynXH2Dy7m6xi",
  "key17": "3C9G987YR7jTNe7LxB2xs3hiYjZ7AzbuFqzEXk4RxQ8vCDBWAfAK26zUwVkJibsw9MKGbzzfh4pXTGUqHcRjaYee",
  "key18": "2sCcoEdDAKnp6NYDLrvtSeDsWmSeQb5bCJaX1CBB8en9gh54XQBFQpUuPmUejLdf2Rj6exYDkXeteTBjHad7KmcN",
  "key19": "4NjNqp9fNz7R1oXLaNc5VGqMgAQxVw8CXD5mULU7vMaT7S6MGgekCxPMb41KREc8GFyPLwNd38NtSMsrTvAEDJpj",
  "key20": "4QHxZKdjkN8XcB2XFV6JMjbn7SpCDMtfusoAy5AHTpXU7YY4SxWtySxzea9tqPaWgzZvEwkGpj4G8cPh5RtmmkEV",
  "key21": "5Nhc9pgYsVbPohihDPFYvv6F48RkbkqbVZfaSjQ6TDuVgrKVNZDcCEmsYfVg96GNnHfrh5yDVwuZ72HCTf6c6KBe",
  "key22": "2oQxsxzmLkCS3EzW9E73DP7sGMDc7neK6rShfF3nxSLYfUYPycW8gPpKJh9W6EbvsPRo2JcHgVJFy5SbnEibkdyM",
  "key23": "rf6x9MhzqkjLSqHDKkNBUNEUdnJabKQLy6R6CVp942jM7wchjhNT7kYrHrJne1cUFq179e9G5jenH1dCTRi2jrv",
  "key24": "5aJjDtm9G2dze94gsjeq22GcaVqbygRbThG1tFVFMysCKqfesH5zAZgyv1EQ3WVDc9rrHfEpDQgoMMwbN3VeG5mF",
  "key25": "4HF8EqkH4fW4EWkvoPtd3cnnfUTMwWpqiWcJ931QZR4GL7SEQMYe6cA4xE4ZpYRbwBpWwYLZHi6uoDc7Cm3MM4rr",
  "key26": "2hKLVkhKyjQZ2Airxj4n2uC2JanMsJVVcazXs8gCWuVGqzgv3mdG7opX8uvctXt9FCKvxFjCA8dv2F15RpP23CCR",
  "key27": "5Mh8qACrG832uKf6UqwKNSkVj46waMmpdPKpndV7V3MEYN6HKZaEpCC2LLmi5EZbnpgWwiDymdZjwuVn3a2pAndn",
  "key28": "2HRyAiTnaLAnzAqY79GtdVmAW9yugJAhneg4DqLKNfmEJQnNYX5itHPCU3T2JzZkxAfYCCL1r8uKxEpTBr99sv8d",
  "key29": "5i7wNokNQFLYNE68aADjkj3x9jUjdXk4Gk9KuWYhUpwikzjoSLS1JHx4Jyym6cXSUPG8eHsnCihnJjzebUfFZPDJ",
  "key30": "2zfYajGSJPYkbaew98eiwTXR6hwMxuvN6CXQWEwf6hp1P87DKRVVVV9M1YPHtJwiXGj9o7T9s2K2nx11Gczzc93z",
  "key31": "5YVdqJ1DNiPUx6pxBDutWNgr7WwhUY5eyzMC2NRBKpt3hZX3XrkJoz9d8SWreXvzaWvqS1DoeUZ3FAFryi3wdnKf",
  "key32": "fqzkcneqEmx7s7kRrx996pscf8sUWZwq66UJG5CWijmqMc7fXGYTgypSbSq5NNsFs7vBzgQpih3BcL5Rg2bBQTa",
  "key33": "5CjjniLosR6FmaJdq9e9Z1eQLwSRtFTyqK8Xu5b2K4HJZzY7dWhzd6sDFw7HbDZsyCYJ9mkEcsSCXt66i4R7C94B",
  "key34": "3dfjgU3gYcFM9xJzTvxJAJCVPhxNbkNrTDUUwQLQHGdSr3bsGKdVSDag2AneHfeyA2eCyqZ5LrAQbuMKqPKYJEWv",
  "key35": "2TLT7fXFSSFjkAfPVnZpKXwX3JJKzfckRG8QkDWky6o8CPfMN1JATeYSSZrTwxWKY5No2Ri2J6e8eGJVFKjd4Jn8",
  "key36": "2feWQmGFTZMGfT2kBNkMQYuugoyozAnGAMcbvmMzQtA3grSbYbn3K7NuBTmCT3oxK2dd1DFmVV5MANgfzPzyuh66",
  "key37": "4iMGDruzXX4GojytPXuKrdydKPso9WEHyyhdnFQi9KwEtri4dWgJFfe9oohCuNiKYSnEW1MDP6uoz6bb9zNGzkEB",
  "key38": "4MDC3MgtZxTyttpzrYHbjMJoV1dr71iPicEKhzk3iZHzB2JBgeQbp5az9vYX1tNvPM54UTH7B6C7cEYZ5MyAUXJc",
  "key39": "4hBUTxTGQ22jdMygYgBjVB9e6MyQahHwembZPFvVqqsYUEEf4tNiZcB84grt6BaUic23tw67ejcp5ByYSsVUraNB",
  "key40": "5XqdnM8RtwsghCVpEX79ZN9WurTGPtozmW236ttsMTKPRYMm3jXnaH1ZZNHEvtS6shN3SMEG57zMcFeWiekM6Xeb",
  "key41": "2yJxunSZKpbx5pXDvBQWTu4Nc8r7xEzkrpLETSZyAmNLF9AzA1hazLJ9QfaxfwGRcFL6EMrvmiAdbcV7BeRcQvCo",
  "key42": "62zrQpM48gLYLa8LppDtWGruN9bKHVKiDpE8aWpAzVDqUKDvg11We4ZGUxk2VqjoLofbXmdnRP1a7zQ7AtDwsQWp",
  "key43": "RXfic6gDT3ZG7TLCg92BLkpHgbbbC7UKCUAMfBgBZ6HzBnj8ui3wwMTc9QKXxF1X2JjYhCnXMsSNZq921XDZcE5"
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
