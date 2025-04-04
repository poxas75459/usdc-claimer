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
    "33Hn1EU6pLjrmHG9gWtgjg6jTyZa1vJdipCja1BbKPqQiTrpH9knfzD9LmbxAQT7V8MMdykaTeTKaVKdWoLdwTpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNv7KtLpMeGdBtDQXBbuSojPAGaL5n4wSAeePHWbqgbYWh9nYTiT2npySARuTAvro4QJMwAL4J7yKdzEzFhLrTH",
  "key1": "32mbv38e4VvUR9rQ7A9JwJdN5QC1gwg4fVLCU1kQkcuPCbwKZwFwpQJWMBpq8r6VaETrftQVLXMJjKrcQ7QcRgwg",
  "key2": "3SHhk5BCnMaajtAVjDDkQjPD8dSQQPPLjTTreFzK6N4HKyTQKjojYgk85gAopXcqp18nhXiAnvVkghsr3rvgJ5zP",
  "key3": "23dDYzMFeCpjBYBtEg5QiEUuvxxcL3UHLQvr5R46Ynvxa7mCCqMJso97JuuJBrP3HzEjwoDGkiVjEQ8KFqbqeYJF",
  "key4": "4Cd4CtS7xovHoSCpyE6JBtYB8nxDs7J8CkUcrBhAhR8edViK72R74K6Rjf4WzjhVzgzkMmJ3MP7HgYoezUi1m8UX",
  "key5": "2jEPLzNGCKVt9GKMbcUVJSXTic1LT5oZz8S6uTjt3nddSvF5BbZW9s3mFVpmyHuYKr4C5vUYpc5dt8ZcxBwKhomQ",
  "key6": "ZaqoNkW55kTySkohHtxt1zAFMFL4CjRb2sMFtP55TtetBLvA5os4iDmdopDXyZ1C93bPb5RwvJrnb9JxBfokBTG",
  "key7": "E4TdWux35BVSTy6zrFVYUEk8of7WjjBsVbQNJqT76TxgSxw8P9NMAwzKYsUXnNT5LVLx7uZw8j25fj3rdWfikP8",
  "key8": "5qupejaRAtLnx5uw8V2WLGdZhaB4kTCy4DRhxyEDGtXc3TvHrQF3TtrUFFry5MHDSDGLwfc9di47twjTJa64X8jX",
  "key9": "3hzXkLmmdvS1wtkWKKn4Soy1SYS4UHN6ubAfgVauNRP3nC7CRSyN3ZcZ23NTQ7kNieRaPusDNFUsUMmtCPZ51j2w",
  "key10": "2LNykDpejUdYo6Bj6k2mGxJrtpdb8X8BTbsPF34yCrSc2XJ8sPvW3wYJNbeEsYTkvEuMKytv8qrAWuYHnnLTEYhw",
  "key11": "33ghY9XjRmEf4gCKfC4n9bC616qxN9rtpSUpeKmS21dh6RFzMsgpwKvnVAy6aRWuXYnTEHUxHwrr4EtgYJq7qYvM",
  "key12": "55cM6EkQH3WVdaCKx4fFqriDFiyP4Hx3Z7idCDxmRoXXLx12pm7i4cmXnurUtgB8j3XGKtPa8WLi9CZjobWKVovn",
  "key13": "44nkN5DETpunSYvQEKhyHW1hqJJpvUhmRXvPGgec3hcFgkrhcWcCcZ3hFp1sKtixr6YhJwwbt8x6ucprGegrzHN5",
  "key14": "3H6LkDGoFavYtR9aqgmqfKqLJnj6agee5KUtgiK5hg5snGnMzfWyDoSEyTqq8kcGQnK5oG1jXLQkmVJc7XtjKXjz",
  "key15": "xapVn8hWNzA4GL4UP3bjixdMLrwAksEkk9qJn5629VHRjJarXcEkg5QyWuvXUNu87qSEKyKm25SG46UpBcCGFjf",
  "key16": "43GULKF43nGSmncgvjYgB67dwoVZds19CS28DiCqoggZLb4SvQshfmBKJLTJsbZw5nVCnENwkso6ZtviV7LRFTjL",
  "key17": "4p7fRa9hYAa2PQAhiF23TpCz5TC9S1kmf6Lo3YaShLQ29DqrtsjSQZxfGybKwrEndnjNazyY2rjdn4zX9RqcpH1Q",
  "key18": "3ms3qBNsjPgdeDekyvu3aPS5VnikyC44eRAecKTHT3ms6SShJVW3xSJVtrXtBJNPiWQ7Y63oYapNZJS7WMHUrSo2",
  "key19": "5SouQoVczQcSdFgqzTpEDCno3EcG74x3TxA5omWjdLbVJnnjYNPWrAX8oACU1SRByn6hUJFFWw2DBG59Sw4uqQXU",
  "key20": "3CvX8etcS6mpqTGPYzkrYDcuXvETxV7DVdHVQnkoUux3F88HkeLTgbcg1NFPjsMMJ82PMCuPYDKdizvfrBG1Gikh",
  "key21": "5CWy895YcHUz9gBiTfoCvMwQ4BjEFH8XvHn1Knfemo9pLP7o5wfg31uuy2i3gaoASn8e6CdjN52pwm9GZe4qfQQN",
  "key22": "4xbsDi8DTDD5qfsZV714kGh5XFR8VwEgYgAXNxwSAC592RGMktLwftMRsKkMPRQdostAy1eVa7ZLrrZt3H2Amcze",
  "key23": "2G2eEePPzn2MyGX5vnGWiBJtfpBVEbxbYGgZNSmjx5WwU572bepz9vzMvfqsCMwdSHGeiJ848qM61kADWULZ5hAH",
  "key24": "5gLfEZA2JmSBwLKe1227QGt2xkebhURe5eCABGzN9zjQ9wTwSPANdBCTALAjLCB3amcDPpE2oHHBdVfn2FYNcjnk",
  "key25": "62TXeAeS8NUnnALp5bRNjy6USFomvqTyjujzRm2L4UGoqeV2xbRdTNTPcbVwLjbqx1F7HMedkGpGgXmauPVLnE5y",
  "key26": "3b182HTyF3X1wSnCbo9XwArhLM9pHV3dNvfKo5sf5QCmvG1h6Z9NbM8XKGYJJVMdf5bso3SRiVGsLPr3fu3GQrCs",
  "key27": "4wuG8rwqEzcVFczLBCExrkRj2k4WMkUx29BzCUfCVsWTopG2ycgT12FCpUWPfEZzLChrNaH81ATinrbVDqo75bHN",
  "key28": "2JZd3zXsRQaPpB9FbkosN12H3yVgCNA1Dfrhf3SNTogg8RtbPFT94eMyFYyBKd3UZ7C5B6WUbYE6gEfZfdChAzr6",
  "key29": "9WBTqjEzQWpJPh2Vasn4eUWuFwmUyJboDMZxEhj6LXbBHQZg5GHvmcjgNLfSy5H81uaKk2ahAjtpcpYHksKxwco",
  "key30": "4Ag9PAkNiK5EYf9n4EMRutKFihkVxWnJ5pm3bTsApDhcbXr5Ek2DMi8FgLf3BY4urnQxZeUxgsDwx2n2EDUBB9Yj",
  "key31": "QPMrVd1AUh1BbDcEJdiitxS3CrCrwGVwamMc7Sq2aZhhwfRQvXhtvTd8KuJSpjvvYmxCpRAQDFCyXnR9NFbsa8f",
  "key32": "3sPxHDmonQUNzjfkyA3dfHVpRSWyPBFYWB1jFDNBAHkXUdePjyVvgpt3TDpccPb5ePRPJEkWSQUdyhyY9uQA2zRF",
  "key33": "5QGj9tiU7DfeDtHUQtQVtTPAFUi4Qdcnu7aaEJd3nstNz19mze63iEKcPhkm12k2RavZLVLMUQeHPY3pv9bUfv6b",
  "key34": "bWJmZXTLNDd98TRtmQCcSeUGyQ9DHf8RD3d4YnQM4xQofVvYB3wL1bDCUq5RSHeTU9d3R2pBmYbuULrWe9UnL81",
  "key35": "NM9E8KUQ2khEW7VcQ5yaVXZnaNGRkXNKhb78CcLdBgH2DwkB12YHSryspcvNNkPt9yiav6sxYGdwi2d4FR5tt98",
  "key36": "YedYsDVnmnUPanfmH1eRJ6SrC52z6eZzM5xzwoMSjTwFDvQsxAgiyAajhG7JxVZTRq2H6gdcJgj2v6FYCs7g7Td",
  "key37": "3pXN54KQntroowmZbt3yeZrp2aewunpcupNXZ92wCyG3FsDYyCa7weWYbrbNfSRVM2FfAew7Kc8ofx7HaGaHXx9W",
  "key38": "qsjNEh2ExvPBmHrZx2DX4iKMJ8esmteWyiwNP6rpxLHzB67VyDBXAdmG4DmY7FpKgESkVaXLiFA1gdyxsAkBafk",
  "key39": "26s7dhueFdwzeqFgBPN4DwMF6X7AFzheJgp48bbyBqCdScNJkARFAcvyJRYUCYpv7UBuHMyCFgbKZZwu3f2D7QFr",
  "key40": "25ywNDuGYUCPR5Eq6e57ork9njuAG4F9Ym96nM7SPLtFVKSYfiZBfErpbfHvqH5Z9NfjCDq8QUEsSSrD2iMcf4rN",
  "key41": "3jSpGUrQfWa2TG5sMyKJ88EQibpmxKMfR4FjfbMsvw5pvoz1QCwC9GdrCQzM9u1CmGW7i2oXF78YyJamaJENioMk",
  "key42": "3efBkefrGaF7o8gCaPytYn9oHivQsy5aSkYi7nxMYunWLGFwtfk8fB4ZJatvM4xtdT9LSNAjWP2r6oqy9wCZv517",
  "key43": "2JTwwdJR7kFD33CqQ5z4UN11ZX2jwnRZwMs6WxaBQsqKtbhcRh3i8ojcvDv6463gTga2QEKDGurD1UsTjbiSA9gc",
  "key44": "i9XWxAsyedJ1QGUkwaiH7sHRXgiUUL9XQXYw1jzRM78zir2EbFGntXbzu9DrMbvJ36nvWDWBqhLSqWJtdveQXFo",
  "key45": "2PAR37NmS1xetZxH6QfaA3RykiUT4A6D6LDP4sMrx5ywyHonttCXyQW3N92JwWqP9PyNQAocCELTZxK4RmtGLc8H",
  "key46": "53MeCWAb47L1TZZJFpDMQSHJva1hbxz5zKDVUxxtWfzRcgu52Z6g3Rk5WWuevfgwRKfxzLhyBwxZKKpnP7FE48Ee",
  "key47": "2nAX27ynzxJxY7deL9DV7g21cALQPcBJtU8W86Ka4DpBGKaFPq1oU48HmVdL9ypoHLCmzPC1sMZhHHkD2qnX33x7",
  "key48": "3Da7SuSk5EYFwqArRAQCpDsFTzwihzXUDVEMadbfiy2N5xh8WFP7rC1qnWMzS3LufbEK9oJzU7eAh2XH4uVwoq4N"
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
