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
    "5TZuDML9J7iznT8pC7q6DpA7t4aJePfoHypAHnStf2XuJnTBsjXuuCVXBAyYi6f7HmTcYiwHr7vqwaUdzEhCPwsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X44DqouGQpLGWPjxCBVnM3bPy5Q9JJvBEPbeGzKPJaK5bw1k6z2D8TBMYp833jcPXirm5a1gS6zuAUP3SMQURBi",
  "key1": "2Ehk8gd2SbuHGnwV2WWj5SaZDkmkqWc5RDypmQnWF1BoM2ZmRxsHxGg4o3LF1CaHtDUKKjK2DFT3oxKrdWP3kCfx",
  "key2": "5btsT56q9YFcbpamEvxs3WDLV73ztH8jU4HLYVTCPism9dTKFRwCq9xcNb49LCLq2yknaFUruxrbzga4Lx95vdnR",
  "key3": "26LWGtao1GXLPiHyHQBdKYY6xgfq25zkH7FkfUZY2p4X5scF9oiW5jwFbqTAXwBm2wuandkVPrSAMYgKnaM4dcmh",
  "key4": "8BQBzqG9Y4qBdZXNbFx7n4QUZaMk8DKXA4SzkogLx7557DWeqAbkBz2Vcy3QjwEAR3hjn8rGGNT81BjZj7Yawox",
  "key5": "2cs7v9EgjVwDRdqLELYXWTJB4wQc3hJchHzVaoP9NuitwJWr6yvQhtxMCmQQ85A8xrLxNy7v8X99RTfzA9CfZ2as",
  "key6": "Jy7AinEVJ8a9f68kCufy68LjhdKY8RXqcnEyA5pmPJnMVKPu5kvqZCgzGismYQGTjEoUvUcGPsCUN3CVcYFAJu8",
  "key7": "5HX9G5S4XmyKLtBmrSgGTfaZqeQJVeKNSP9um4J7WeHkvkTsMyiW4GEZwoEnK3MS5m7VpN8uodeswNXLd5UdiosM",
  "key8": "5V8iMKScYkRss7qDkM1PHbLnTA8NDkNbfo1QgUrQz9FM6QU2XrYmaVNcThZbRfUTLpKyruvYPmWGuzMAZ1LAJvDa",
  "key9": "27RzS7cMcn6NQ5XdhuyH8biDf3j6Z9MUSPNECnTHMyPgKzfdXXVnEuNjHkfYq28psUqzsSnLGrqDq13bf6is6Njg",
  "key10": "3sBZn8BLcHLMwqGsCnir1g7QGwMpkNDTSynsU8VMAbd98fF1qoLuCZWhpMJt8Gpz4k4Nj1QsB88tD1q7kTQ84K6x",
  "key11": "3nLoPbb155jeXv8WazR88YkUUhrt7tVxvdxshndK8wKA9EER41w2gmQU9tvUTuwyrT5VQkxZ6JgNSGMoxK2kvowH",
  "key12": "4JCoy1A38i67pqm8vK6GkCqkQKHdTx75ZcWmqJgoNGPTgZZGs61NkABkbEVN9j8QJRNjFiTkEvtLhFgqpQcrjgMD",
  "key13": "5yUPYKkWJjpfV6tqpkhDAD2Q2AiQL9RbRVPvinnJ2LiobuoPENzjo4wBGFhZiKBPBaC8Tw7A8ZBBWQbfUhmQ5Nea",
  "key14": "3861zUVHukmmz9vskSwMzXQKCCb73oygMCKhwwuSKnSAZrXgnYLoVaxSLLm5p4w42svxbQCN4wJ29jmeWtAnZhk2",
  "key15": "ASFNsazV55SmfD9o7iH8Bm76BpBCX7roL2RKHNtM4DgiHV5gqa8qtXouEfKrQs6CyxRUtnUNHSqaBYeYyznyvL1",
  "key16": "2wsFU9yiv5QyGHFhc3ojD3j2Udvk6X2xrTPmuXcTngvuqadj67bXKWeoSzpXq3M5UUrrbp3pnAZFT4E7o6QQ3upR",
  "key17": "264zEFe6jyurFx7t3xbkpPuQSR6Rym4sUHK4i96v2btw9CTTZucTRAYRC5k6nF5N2wvFhWDoSeRskvWC3r19crFg",
  "key18": "2PdKj5PMMiG8uMkAjKZa8P5UDCpgzQys551Dbn86WGwUKamkCUjv755Y2zxXABVX9MFZfM8v9tj4QHCyXAu9Woom",
  "key19": "5R7knyj5MzF3cVi9f2AG2EpFeRLHhoGx7vzy7QtNNSizL5p1Yi8sz8n3Sf7F5u7r3WxV93xmJR1hEf8eNdysGU63",
  "key20": "2YnPrJerLadQSViAxCp4Kjy2HPXSYwCcyiVN9fNYj18ktSkqiSGJB6e7bGwf1xdJwNAJks18KVHJdBuyjenbFA5i",
  "key21": "5Yw3r44zJBk3TSL7J8t6z2NpYDim8Pu4pQqeRDif6QBzn3Vb6XSwuTvV13AAeuDU7UvmVsxPeCLCZhJhC7ZqWSDo",
  "key22": "4ahWUBb5qfE6tY1nvC4fKKQRiQ1HJKFG1zmSPE1jjRmq4US4fqEXqSFoYtBRRXoppiDQdPYVX52c4AUUvRkD8Fjs",
  "key23": "GuPZMVszsoY3XVyPQzwuvyibRssPn6QpXoBmonw7tTLYnGX85UXXe3nwMzY1puX3LxN6A568LAK2wRhY45hUHT3",
  "key24": "2J9aC5ot3zTsypg4njHRemLTBmHPDabWbN1628wpgkxbsP7Am7ZX5veEB8hNtCPEmmPjycgG9xA6MXJo6HdcW4Yu",
  "key25": "4dG4TiFzNLt7V6XsyZWnxahgJLrePfxprDn5yV6Csb1jcpjdGSd49VnS638YEJTpHXX5doE9u44HEZpqMFLWjRRz",
  "key26": "5G3kxNqrKMpdUW3bgvKSy5ZGci3x5FLSu1CtXx8doJtQzA6NhbZ2PxaktR7Nw2ax9cwR2HAgGQkC7WkKCsBdDpFM",
  "key27": "4nWx8bgtosSbKL7LvfgHY6QEvokR3RhbF4ptJMRw3AyCPZwNveCyP9xjVE6ckz191dRCeBogac3jQHKHy1RkJrux",
  "key28": "5f2dAQaCaKrtEQVrECTMqm3nN4sBXopFL4EwK3jNcddgeDv41d3Aiva7T8Ji6Rqak2gompAtUx9Rks97ZpYTmi2f",
  "key29": "NyYJyiJswVcYTbmbTqMfvRY1K8wAg2a46QWwYgsNedP37UNHGTXdVxeQ1rpyzNdo6biNPmFJLQi3HV89MNkrn6N",
  "key30": "61RmjrbfbZFCYVvJAwWQG6qhcbWgSZyzGH8schhLhcHsrxASGfc8T1gB63vyTWxUpioeGZedtZLpXxNVjXhTti6a",
  "key31": "3QzLDLNZnnVYd69YWFv8nexX8h735N36TPLW5YFwbzFHNVpAsrJYi8LtpuVUUUW5miwQidxrwA64Fd24vnBYWxLj",
  "key32": "Hng4chmPozwXpktWbdUdEdAgyExgSkL551Y2prxoK2kYtbbrGZCRG4pt8PfXLthP9onuZcZgPATSDRvWz1peaXY",
  "key33": "64MskTwpSpyiYgm8NHhCk9sNBLkTtrtrPVdDZE7JHW9LFMZExq8SWZix4CunJP8S5Jc1AUJQRwJvUkkQDbFYHNFn",
  "key34": "5r7SXvKwmKNyAJWRigJrZjuLTA3RK3JwErYbWG5dEQgJUVj6H4osCEPvcsCm9TAQLuRQyr18os8vuunCmS4UAFVK",
  "key35": "2vqwvJyVjf5L5gVUVLCvbF8BKcLJbTs33qfBrh3piwzL8jnpKoer9z85LzrQ8tsRz9c7RCi2ZySjGbhrMG3jcwSt",
  "key36": "5BtTp1BJmgmUUHkN6LXMXYfSmFAc5rJwZPgxTth7jZ7RFGunku14WKqH8SD4V7ku4NJW5dUn5Xuhz8B3fvLnoJ96",
  "key37": "5zVzPCMAkyyprLKXZRdWKxwobq5cnobcwy3qcDRPnjpa7WCdgVvxgLzFvZ8DQHunjqgSKg4VjBgBvcvDSHyAnEDu",
  "key38": "5THWJXRP3uBSKL7E5w5WwQuE12aDAu1zuXCuseigccjmLYeXvA1XabjJQxq1Y1xZc5fSqmyZ2haF2tQstVXNgGK1",
  "key39": "5gZFsqGJrfTv6jotfvVXStJ7UZtMUQoVVCXT7M8dwrqEmdCcngJZJDUFjNfcv3CnNCTCk3htwuxRiZFZBZEev1Tr",
  "key40": "5FW98dmpshH6gHLgA9xyZ2WedK6VvPEcuZqLxBxHXwuBXYKJdcB3N1QcpsDJXHxh7MymARbY2xJaTZQ1yUAmoZxC",
  "key41": "35xffaT8BJPc6KhCJsYkTVZThDeNukuvaLQzxSzxXrTWRWwdFTUj3FKwFVoAvJpnsioNrgsHBFUenPrvT2P4HQyW",
  "key42": "gw2rhbeugRiwALaHvH7BRMr5osTgE8nUpsrHzxhLqzpHSB19NG9Ukji7dQ6DyQZBD63msuhTiZG4rMF1uPY738a",
  "key43": "2myjMNsE8vZVNUfQ4euAmc3u6QCFwcfbHWQXSzQsQzs2YdChayjfJ27g9u1ub9EeaxvAopsrHAKsjpmZc5jBsEnV",
  "key44": "3paunzkMmrwutVzCxsEBvJWU1mwcGbdDNLt1o1o38Mo8N7VSw2JXBTXciPAiqLosQXA8RQyHt1GPH7t2kv7qDhAe",
  "key45": "5oHwHv4aDUKgi27EDJEG317hJoNd9rWc81nr7v7kVUGT9ShvpD78Z6f3CfnNZN7NQpRsZL9fdLFaXX3GTBSkJCsN",
  "key46": "2nbK9FAzTFcoqZ9Z37T8YPsKs8xxhPWPsABE8SDCuehw7JNHTU3sCDtnzPEBwfgV8WUo8GM3YA8quWVqoMUKji3D",
  "key47": "4VkcbCHfwSHnoyFqKypXvpH3Wwa3d9oBT24exdEGUESUdm9uL6DGaBkKVXJUEe1T96UmwFwCy3k7J6FbpjQHmEx6",
  "key48": "5UVfTgMXAuS7gVH6hK67VBvVGWVx8oGYWwXPCFxmdkztrWC5HrHwt6892MpdHmETX6ZoPF6WGxPVAfSQCY35Jkfi"
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
