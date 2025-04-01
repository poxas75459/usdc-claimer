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
    "2WTtDrWfhEVMk7UJUovcKmqjJsErouuZqvK6zWZpwtw5rE2Ry5HyPcLHw9XV57eYZhyd72Bugh1xbgeajfKAosw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xcnm37gwqBaDYxENqaTA72qRZEQphJS7cte6v6DA74LU7yrvGdg1HUXCADoi7zereaJCFh8m3XJw6oWHjGdYKAM",
  "key1": "4qvXHBCUbmr5t4zVKZXX5p2zuqrBaE3a3foKqvPk8MQJxPUYL4EnXvMuPtoCFCJLzR1KQRUK5p2qBZeWF3SYeWiF",
  "key2": "4kw97V7kLtb4g3rK8TNHxNWWsYWAjPAcXVk7JiyAC8J57jkuCLbeohot6CX4Agm5dsrex45TwXER7yxRQZxMhWCS",
  "key3": "2NhcPR4ibW3hRq5KoEk2RACXeT6tQwj2A549mvN4fhrMyRobheC6K53hg5PoRyLwM5GnxFmQt2JWNKS6jHrkTGYQ",
  "key4": "iKoCVhinAzWNX1x3MxuHGavTUGbpuNsLkftyk5FJ3U9x7iVcg8GMjqRDzwaAe5Gnk2dsVkAs9YLHVMUPkmT6iF1",
  "key5": "3UMN1vkTuzDLY2t7Pe7sZb32fQ767J85xKsqGu2BiJRz9ReiV5RtdCLh9pPETzxhDS1mqvjuK88yrVPbnnRxRT4f",
  "key6": "Lz8d6tL8skxEy3cy1CBjH8vihM2v58d23pNhHuBYDwUbSYPJ5z58sks2As7ECV5onBJhnHZrV4ooDrRZJd1go9x",
  "key7": "3JHLYNwqdWkECM5UwQiXgKtat653aFvqPZUheoxD3tPGogQMF8Z6WcYU6mn5HfbgMNtRkgaMaRgd4jUUt3hH3qfF",
  "key8": "yz3YRyueMuoAraPy31hJAAtxrs3mPSoJ493coS7yZuNTCrm3pJubn57iH9KM8hA9LqHfwqoHPYoE7fRsjRxbRh2",
  "key9": "J8pVaoPL4pk5Fup4AohSzceKzyPbBSEL1o1tETNQjrz5EvJov1QhF9FVaqGDEFMM4iMds6i8d75gBN7LjCcYqNW",
  "key10": "pD9Fjz7SsVtghdtCWfqTEnAx3pzZK9g1iP8kuvni3ZB5UpdkGa6weWVQcPkh7EXqDQhQ1djEFVp3hH2qWuMz23L",
  "key11": "uEM4ipLeLwJTnh2qGwE6rGMUyFHWnKytzM2s8Hi4yTE96fTzV228twLvXPwYJt95wSiFzoVAHLttKUoEGhfh9ih",
  "key12": "xLjPcShQQowGfys2ks27y6ZkjD1ZRh2t1V6oozWsiWfBwxNVQHTGRDNw6KfQWuDfbZHYHNMjAPPvwPKzY6WwYNG",
  "key13": "3eDxbWEXmyrdH3XWFQ6AvZG2mvZEZSHAXuD6jcGZQY7mHNP967kyDhWEs9BxqqDTvEkYimK24SCiT3XCXBEQVERu",
  "key14": "3RGWuHQ6cnBG5A3ZH2NqDLbR6s8oPhF7C7SERDvUDhLqqwnXU8xBfy9Y2M44MccYE3bqM5JRf59G3L5zjHgzHXoY",
  "key15": "3opRTkAghj53n16fnTRwyWLpVRW35CqPpQ4rAYnF57H2wA9fkspVPZrUZJogGSDzZo2Fdfm4Bsx6RSQtZicPeHQa",
  "key16": "3vygEhYBGaLCBMtotqkhDHhQmWpARRq7v8fpcsvpvUvvFwHAQJxXfuQ7DWhZxcirJfA41JdkiVoRadUEHfM2apTk",
  "key17": "4cu2t7BK8QhGLtku6vn5QBseTG8LXBG83nRjj55jyKf1Yb29CBwBF69GzYVUVByYZCrxL9kPKdToDASCAcpyhb2Z",
  "key18": "5MfU1XChrw9fXosKWjdenYf7MX5CiDbdY6dknpoNC6UFZMSeEWbvN2fueABmhioZM95eQdYQ5RocqM4JWPjaani",
  "key19": "2GmysJKay3XwiYsKzhsMnw4Ra3hwn64H1n1WgwnZqewA1voeLiX5G32QCS6ZRJ4yDz1VAXvuEH1Wjy19cjCqmBWE",
  "key20": "3Mh5VNCGTf7c9JHL877aiz9b4prqFPVyvukdQtdbqqYBY2ueXHmSK369chvEBgeyWJdEGCSoFyQeqdwGKc1NFE8s",
  "key21": "35cPaYjcZ86uNEb6etyBKgVXeGgEK8iPJTfMvpeGuZdcKQjrihXvCH9FgqHdFYkvoYMNTuLhBVGbtQe9C6mc86Gx",
  "key22": "XhEFcy3RbNmHnLaQT7Tf5E6WJQWLisM9iAk2rdksVGYNLCvpeYMtJTTvg6RVQajscV1NB2ALMUTJweAdgLmwPpC",
  "key23": "5HrqTC8tiLaGg6P75pu9cWJez6EN2XSPG8Tf1zFFexHoVS8s4bszZ7LKby4d14Vz2CvonHd9UJ3qkgXMTpD6GMwY",
  "key24": "4HHCirmAMT3mccSWbXYQd7Hpq5iTcY62pXQsvnmB5Dh7A3a4N9g3THqgQAZsiqeinX7xmeDwdPYrNpmL864toK4h",
  "key25": "2PTjpvT7DFv2QpuMCBLzzNF63N5PNFoXHJosN6GPnk6Zyi2gVJif5WV2j3hSMSZyEJSgpQeVtQ8vhyvywHrsWXfc",
  "key26": "5LR35tYhu78Axp5N3tPSyFXcpEsx9EdNJH2URYBma1gXBnHY2JUJbfAW6UwjpwKreBRsZ4JznUkBo9SXe9PiZCoZ",
  "key27": "48bmxcZDe5xk9wf12egUFsAGgASBgzEhTP1NKkFBdA4oQ7FACqyHKK4C3zd69xejV6kupe7JK3p8MaUNAL55YVKR",
  "key28": "21SMRFKBBM2Wmw4yrVsjMvn2YRM6DiZY6zgv3Eeuav9Kvq29NEHz8pUgR96Zi2A9tcdMinyU7KTXneQ9sqEnb7nu",
  "key29": "4R8vcCxhbUg4w65rUFqiriTNxy6bjDRKob1hrsbpaAyh9rRZ2rL8pEpBAVgnrMkUiwaz2kSsMXL1SSqGdRZUuijc",
  "key30": "2LPM7JeuHzTDDawxfY88dJSq3525ZL6bydkZifpCjb6MQTKf8YjbBfDuuEu4fAEcYdNF85LHmGUmynkhXX4iTVRk"
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
