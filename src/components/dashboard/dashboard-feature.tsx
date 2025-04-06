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
    "3Zt5ezezoukfQaMmbAjewWVUoaKWYV3n6Z2qvuyThfDrPmWTfMt1AYDhhzWpjKckX2W41J1NSA1UHUGLG8eBacZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRJMFNkSbejpkY77MeWFg6yk1v8tBpLDVr4M4ZgG6wf98gYKVe8BLestQ8FXzUCznUwUFZtG1tpXAgJkUcTp8w6",
  "key1": "5BzxG8RZjU3v24X9a9pkD2gYKeNU1praVQrzL3h5tYHqiGdqYCSVW1xn1yQFiRfnm5gjHJ9KWT8JhapbSspxKi6P",
  "key2": "56sH29jn4Y7RfFzWPcqjzyC5SGZuDPQWDoLsYbj7dTWufvMJgSVEEAXxftFZcftTmJmqSzbUPW6Fv8wwWvParKwW",
  "key3": "g2hQvpZ9PhSLVmfewwU4akLqw2HT3zUQ6nFSZVciD5CWyreqUhqohjCq594JybFVG2oYwUSLrJbTuZ84yBC9JoS",
  "key4": "2kSfp7C8x1oTx9SV8aroBpPgDxHf1QrzEN8vWyuh8gpdVna3hE7L9pi19g7hH6ubyrQdnHANkJQSPZcN2nFgeh97",
  "key5": "4oLzGATgavA9Vrcu7FDt3NSQDumKAJVv5JLH7pyKM4q49nFxKos5aTBDmyYR4WapS4uVm6cdEEH8DTizryTcanJe",
  "key6": "64rxS5LmV9s54HV6Mi1Dh8CPYSBxabR7xwZf4q1X3cwJngTMZiocNJVkwWgKpFUEcbxim7n2dZahVwBvvopKkQjb",
  "key7": "3n7YeMC5eBpZpgcfnJh9DYyeLRsQuyJi9ub2GxfExu5kJrxJrV1LbPbxeVR8dintEKbrkZHGBhQcZwqTxAJob6Az",
  "key8": "387WGRwnEnHajZvpbKq97aqPpKhjBhStrjaXTHGYHSvkvazataAbeDSqnEAwW4tqXPLWuaYSJT2DN17bfg2envK9",
  "key9": "3vhX5WuEgVTKFtV5zf7pEP6EcXxSfjm6z2jLUZj9xj2XYETaMj7oDX8AiVjjF1XAENYC6esaTnraa62kaHvFte7k",
  "key10": "SvVLs1yWVrSGT6SG7AAjFTwCcZ2JVTXeC8F4UgWGkWJ3ijLp1VPeeFcn28DofVnwMvA88wHN3R8zZDjKwRbdeF7",
  "key11": "PPvQVsYUbTR9QBhrD1GPCiTXjbZudJtgNUjdZgTVS1P27dMnYBLebuLoLHN6dGJm6772pqxVc5TmGvPXqk1euBT",
  "key12": "65Qh7gnwjWh7UQG1w9wUn2enFaae8QpL4LnjuBFT51aJhVBGxqBvMkph3D2tHAy6iutpJUWy6LLYVMGBFAHQC6JE",
  "key13": "5GLjLxuupE9iBZDRcG359wSZZ9dZpKTxYWkcWyi6ktkPdXvZF1iYxo3fFTW4DB3D1h46MjhzYbfwcqr6ZmD4k3L",
  "key14": "3Lxb2c8wfsshzDJd5ehLu3XSevgxxPrnVqa9TWQPgqTGTYLshx3J95NfF6Pem7ukAMszxzpwtqmiGqTLWkcTrWcP",
  "key15": "2hmmfeyBJGbsfDRyq1kNdWLJVf6sfmBczUGMUDJVTdsnhHkiY5kxsfpNAijbmDw6LSMnGCqZvFZ485qA9L1pk9yM",
  "key16": "5g1CP8tGQGgJRubdnnwgeozrUHtmrLwK7LPhWG3abL5UiA44fSDV7ss7ye6WyX9DSUehiJehyUbhkpWXpHANTFTw",
  "key17": "3mtW8Pi1swh1pNE9MVBfg95Y6Vwc4mZU6yTFWLgVcjA6FitzH9PSXwZAF5eHTxVYGSWic6kiHeuNK1qh9z9ytSep",
  "key18": "7A17qCh2gZtXDekeRrPHjTcabqiSZcb2SM2HC2gbSUyDU3DTLhgtg17hWsE212nqhzh7S3FdyGuPxXuhAZnTfgN",
  "key19": "48RWU2smud7zGV1VymWpW3SFnxtdYLWa6y8vRbm98RJrva4ogPf7vM1r4XJJUMGM9LACjUxLKk9mnzuRC5GNbiVe",
  "key20": "EG3riqwYAm3K7iPKjVfHuQ6PWKF4jofmSnemJ26uo4Pc8CTZLBQHZJJpuxj7hJFfWpzHipQhkG83t3Ecawd9Toy",
  "key21": "4SJHsvTLk4JAw3W8SGwQYRgydQ36iMH5D8qXKVFX5Vy4esLbPU1PVciUYHWUm9qtvoCLeSRWPVMGHL82J2LA4ZNJ",
  "key22": "4d2pbfrubrPL9Ew6BTWiKn4wJDdT3KMeLcPtwFiGJr1s1bnxz79PguDcDhYx3ZzTx5dBkvtTfW81RL8j3XgZ4RTS",
  "key23": "2rNwVUHpf5866m1EiQ4Ki6Q89H2syLDyT86WbMRc7gaRcC8XpyqEwiXbJBSZWoQjPLd5qVWJi4YPi2vedArKCZzz",
  "key24": "oQF8sHhNuH3D8aR5WLx9uA9pJVCGETz2X35Rd3e2GwuQNLCfesB4YHUTmgrwLWZEc9VPoHkuyvduBJymoEoBPUo",
  "key25": "4cwE5NGqoJzt1fThAegHv2pV88DVoKJtXvms2i2aJPPqFRvADmG8TvtgzHaTvA1R46Y4MwRz4v1hEhqsygJ42DH9",
  "key26": "3aSYZNAsPs4JFo2VhxhrvCVkWQ5JshNFRyTBeUHJQFfxz53x4Qy5MXLytfi7iTCEj27G1aaYfPK9TqEPWLi3L8Ut",
  "key27": "3Sr45pMCEP9y89FKCCuaZrvGeLAn2uv3cYKz2pLh2FNn6NYCa4mZrmtMwY22H24jrk69w4zFb2NJR6bLd7febTxx",
  "key28": "5eBuwGFr2M6HQkiAx9bVZizCNpScqcQmS21LM3M6BKA8tbTFfyqvUbsQWNtxzBuQX4WzZdS7JYAziSdDr7UdgEc7",
  "key29": "3ywHYLX5ZLtXpUZZfkM6dqXsPuo6BdQ4eFRRgM5cxJ3uJmdEZvjTt9aEGRfezRuknRYijkiHgpMUtQ4j314at3TP",
  "key30": "8U7NXsz1mUQS4pJBAQ3X5UciZSsNkJmLH2iZHngg6Lo4ycyXUhrtUJdaRhD81bFuhuaTKm8rywVN37njbtGh8uk",
  "key31": "3kyFBbiYAPRpUyf2pujFN52Jk4VH79zTN9Ajkj9vK94N1fiXVE2urMEjd4kLdauPN9R8UaTbwqwNTmbJi627Gf2L",
  "key32": "2HbLeuaSvof6kvjZcQCfcDqqSnM3ENg5xrT2fiCzDHSFathcX4ZgQ1vn3K8QFYqLgUTDqXzYfGrKmgVceMrU8MB9",
  "key33": "41mWLkCaNJyXDxqeqRDXz9pbz1hbtzxTf4rgG71jmXTBfBPcx3w1se8kgc49mWpG7CoTEgViVTDZ5UrLw1LeHDRG",
  "key34": "SRd9ZgnNHrxsE9waqWZugSoo3CohirB1xVy1GummShJxRCGVM1kMGKQqXHSxpCkrCPmciLNL5zFuyMfmnGECknH",
  "key35": "3pMgwaYTiiEJjprhGcd7qNSP8vzmWYk9HYx5iVTKyn1dA9zCrJCTjGJ9KHXmqerQEpAFVDkm7nH4r5idexFZk6eD",
  "key36": "3bWMFEZTSextjxGwaMDqoghyfL32iUgwrM5AMQUJ1Gtng2qKAJguboLLgKahcqhL94atvZjpUBjhpGRVqkfQttWq",
  "key37": "5p3CRsn11G1GrahVRFaB5Lv19gTKdM8ekwQJwS9MKC4zQU6CEbs93dxjQUTY4U6kEtVYRcqDBv3BK3zMfcbcRxpj",
  "key38": "3x5DtsiLoSHH2H1vYMujWrHVuBMyFkhFKBqppbJBK9hqMqsKHQ4ibexX9uXKjj6CU2U9dcjRYf1iGgDJqRrGLTvA",
  "key39": "5w2niy9egwT2nFDYDnekCj58S69B4BREBzsJdfzXAKBZF9UZVdgw2YFXYK88RfFVhwEr9sv7MLnP32qqfiNj8YdB",
  "key40": "2g4wRJkBETa8W8d6AXKj4u6ZQUN2ZoCPC97y4DCfVz2YAQLUCKe7mGiinx7AZJJHwqDy567tS8MJu1XLUabgtUVF",
  "key41": "57u2HDEcHHoVyzEigfboY15CXjdMRoU5KxftNS7pdrAxmiK5gXN4kMAq9kaGGyf1GxQAHQuHWoGa9em1ZUziCuyA",
  "key42": "26y8PzTjSwPec4D1XZjANBVy3FYtmouAwz3H7yXjBhzoPFV6a4tzc5sMNag8YMVp7rv4KC23kFvUHgt6iteVTHQV",
  "key43": "4uYeYCp7B7Hjqcef37nDsYtfPJ1a8qfewKKPBAuKeVZE4P8oxiUSWHkBiZXPJBGtE7Z3sf2jqRjM2eCSRx7cyfvz",
  "key44": "3vgQVecMWyeqKu8swoTZx7zEKQdaQMqGmPKiBEyLDvoiwgGiGAKVfv6qDE3X9X9JhWPRUPoKEfPW5inUwtggkbaL"
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
