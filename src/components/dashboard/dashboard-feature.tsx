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
    "TqStvrFiwikxw7WDPgJYJrB9GAdGR9T54QqWVvypPFqmfFWsQhfSzq3PtP3RDeQXc5zDrw56Qo7ynZdw9G67YX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBaQtcg2r4WeiSPBgoaxtc1QEtrLk3RQwtY7Hykw8zBj8A1qG57PEQkWhtLbUxovgTx663ZU6fMpFSthoyj43SC",
  "key1": "4r7mbtpcXm8qt3s27HtVQxjdJRUZg4bge4SJAV8TnpazowbEMb6DsjDaT2C78mnbRafzki4BCwUWsyxTWXzuDDvH",
  "key2": "5G2dTXRkejhw3NmeeZnZMXgn2Vp4JworZBhKV6gqev9ajdeyBZxkVhGNTyqh5haRk83bCR7NgoaJ6BiWJ1Duo1Mt",
  "key3": "4gSMyLGhYHaNAXZKtXV7WmST3infa6PBJqXKwdffroiXiZRPxbckNgCbumqSocrqXR5fagACQuXnGJQjER5Ukntv",
  "key4": "2sPWrMegiACdXJAbKT7SLrAm8PCviRShwomV6zKtBvWebnsyQFA7V68WNE39N6uciNBF89495S2hpWpXwzjtsyvA",
  "key5": "4vKRvKtTY8YUG9YrWPp2XvPujzqpYwSFdjjQ5irFGpEBMwz22i2LrovCcsUMSRY55jhwxzwgQBy5ZwoWKDow4KL7",
  "key6": "4uQaRMmYgijmzPMJiaiqjsyiECPWQheG8AxxK8xaHH417HMHdiFL1Ga2BP1atmkguZFLJeJfoW5UQBG29wYUyS7X",
  "key7": "4daqmSjAf8faN6F2S4y75iyE9gFF6g8TxRuNCVR8Mfuovk6uXw7iiThvoiwSZ4SntcZTedfEYAV1PpuJUWq9u7qJ",
  "key8": "3fMjWJ1LwZ3NzD8AbpEWcPvgXWSn22sYpyLynkSPeVmzsZcBNEjEkDaeQcwntMciihTRKWqSsuNvDZ6PquHM5p82",
  "key9": "62K1LudNDA9aasNHMY8nht1R8V4bpr3XqFVipAa4WRRtpNNgsYPMVqP2vfx9NavmLUSsjLwajPiU45sXUGLmYAsb",
  "key10": "3xh5zwRrV2AerXVEXiN5mXcxWLDN3crFdHoSiBGYmibcUjC8N7ACvfKgvMt1ug5FBaN2ZSigzqUADighmFUHKRCN",
  "key11": "5MsWPNp65NJXBA3jHfgPanugG6Dh9oRD3jatT4m5mAP5A1QYMNpqAAkTRJs67fbrbTJ3tCxcUva5KBJH62KNgNxs",
  "key12": "53nbgREDbdvYCKDUhcdXh5WJrpsaG4NLMrp7JwtbkUX2wcDTpv6Rb6ifXuFwi8sGETPzDvHFSREJzgZKb5vte85w",
  "key13": "2mxXir1Vy3m53MMG3NxiuHDmyBgmB3xHyTW2CSi2QALMygj9REDScsAuUM9dDeoXj6vw92gfUGiavyg9DFM43WJU",
  "key14": "5NF7FBwzJFgzfPxLv8VsFF2v8xNefkGSzWeYrXKDNmxR8Yf4Lva1aL5LAnqyZHANq6XzeELeukw82muEqHw9WBFG",
  "key15": "2Vkea8QyUzTmjHv1db7QFyV2TN67xqQW4SbZsnSZ72j2rykc53CfTmsTc8ey2Wvgrx1DfZLJPJDx8CLQYCD3qkkc",
  "key16": "5aWF8r9D6XaJw2gG4yVuwDAhXC8U6vgix6CdY1c2ZZg9UAunvLhmtY5UD2yynie6d3YWsqp4rvsUmnurJ5LJ57r9",
  "key17": "3RESYWG4Kd82pejteRPYJwgXSg72hq1E8jCXBb7FiPkWKVJHC8X5dXBEeQNoZPrRQY1pid7UzJqyJJL7rAq8VTfo",
  "key18": "2BNemWdVRjfkmuspe79DvyJB1AKLaDBXAkuW7Ge5yT7q9DNuD9CSkA7Y1HtmqukxT1LLRcgoTRF2GikNh6DRoNvm",
  "key19": "34vKGwYGNR67E1cpAG4YtEnheVGE2wfJb3w34W3VnSSVc14X5VfJfmahhD4TSUw6noyL5ZRfunj7zk2XUMbMRCdZ",
  "key20": "h5xjwoD5EAgZLUvPXeot4y2oAKsMpr3avxrVK2pYQ93Vf6tk81RXNgmwsw2jWZUo3icoDTVdQkEyfUdRcgbMsL1",
  "key21": "rxnEDbjNCz2qAjrXrQGCYE3u61uMh28372QPdkEEWe3JW4u3Yox5zFijpNL48RNQXp6qZTh33BcMAYKLLjDvQAq",
  "key22": "DE6zFy9mpgZvLsswy7ftURSX93grGAB2AuztFuMNZB2Mn55pwWcuyVLn6sn5v7U33PUgeN1oHUuGRcQCGyTDn6V",
  "key23": "2hPt3wUrwgkAbvZPj2dpivgCTxqXFPfKnxBXgbeRHLo9oiVyBvrKkzvMYPG1zMqyHtQ6GTDXfdwmqmkQkFvfPy3g",
  "key24": "3U3PCHEbjgBxJXh11iss1PXkmX5s1qhUuzrKEY5iTtmfGnZmxdQ3LjZp7EZG1QYDLnWjHarFMcAermEcuVTVhHnm",
  "key25": "2r2nUFW1u2jHaFj1Hky2nyR8w5TPDjiBVBHP3Wk8KnEWzWhYSRNNz5W6KEHYua7iEhYCGzXUowRLWtrdMnt1HMBB",
  "key26": "4e11BWnXqG94ERw6oJexoBFunPL9Q1a9ngNhBWqqs9ivgrnoyGsSEpXj6MQ4RBWncNvyvv3APnm4BxHCFQ9hwf4M",
  "key27": "DpsYPu4rd3xgtb5t9siM9p4nTQ8BUWoccgKdb3uVZb8gRzFHbFEdTT69CSNxY8CRHxRRB83qEzQFYJiUAemQAyb",
  "key28": "wFgAkVBtfQid8E4W7zacGkzPFjgHwDz7ymFQi3sPjqT78LaLChx7JLxo2YtBBSZvw3Kzj3CMcBVHbeSmV8VQJYR",
  "key29": "2JDxEfQakG44TftookffPvEgGYz2BXQgxVDceAgjL7xVShb59DHzJFTMmKRbTV6VtCrgfPkJfTxdR2Qd6WYBAfho",
  "key30": "5hie8m3JsAo8Pg3qGKyFybddBgrWQJa5hYKZRDWsNnMHbSo1jTjLD8t6uQsj57wZCFqYXoU2M2cQKhvdvEhJbcKf",
  "key31": "5vcMPZc3kcQDrkFZMcbrBnzkKfLxEXDikM457sbnbZbPYjm8U1VnjH6fDezUbi6qt2171TxcvuGNjysoGqVMKCAj",
  "key32": "3YbVVJMinoS6nWuvWT6WDT9EbfY1gM4pAdkLCHiqF1z5UZDHHYxF6CAz6f4JRcJHpuxMT1J2e6oAkVna4gVx21xa",
  "key33": "22S2SSEKhEJgxweMU4xZqRvwys9NnLsHgkVTM6kXsTz2UzAvL2ETBnxQBex37u8LXqUCGMuqSYk4PGcrGNwENWrk"
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
