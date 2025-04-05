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
    "5KYVb9oihu9uVBhQMB2JqektBokT7ySS5mzHS5xPcLjSxtCBEYRqkP2gs5JYNAyFiFP27bnKXmWHyGc7dtvXgZnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3v5YQFS7bg2uBgdN88qTWJQVEX3KmbHdFeL8Z3yXEXhHrVCvSefEkb7mJpwtvF4YuXyLDxynfFAdEG3MrZ29ov",
  "key1": "5x4LfMw7mnp3Jc7o5JFzGP5NTCFtjJDja3GDsxCLGJtVqNE3jyHv4TCM9k9aBYS26LVQAZi6TFByCvukpe33k7S3",
  "key2": "4gP3EdiDKvPEF1YG4sqv5QvmRjCb6qwGQsHQ8DsTo8FHsY3LZToJFd1U28bZWGu6bmpBWPkhyHYYVNUQfyhEGKfq",
  "key3": "5HEa8pawSx4qWDifZwNptDtF77Ydrh6m1f7u4xJGL5qZUGhyVJ6BsJPHzSR9TwZ4jbrFipVwoFgqvTpbDHgtoVHq",
  "key4": "5r1xiajXXeeLtUL5HcEWN9ysPH52DhyWbKSHQNqwkeEfsjtMazp3RRUTMSSwf79uTZ8vFNSspvYuA9gCnmLEp9FR",
  "key5": "3ziCjZij5Fo6PBbHEc9rvmWvfeA6sKekkZM1Yez2hzrbBiiw3mDGWDb9EhoGTHYHGBLrQWmy1ukr1uUzf5VrAG1C",
  "key6": "4XJwR9k7MrpNvKVreRDZeuEqj2oyJ3YMUh49qgDUy33iA7ocTSPeKnfLW7D6SCrKjxv5YWphgbxh96KgS2PSKRof",
  "key7": "3RK34dQTpvqAtiCMtUQs6pjmmPW9ACbT4CG79QgRLtk6AX9xgofgSy4wwyU7rafJ9ibbLie7cXetAyWyPPTdmCjm",
  "key8": "456TPj1rFKQt5XTYxdnpMPqF46zqKNQUYfCVpyf9CGSbVoLhFt1NESRxiWFFrWXp8bwDM31VLMshYsFkTgWAj63H",
  "key9": "famHqey8LNVjhiGD2kvupi9UJ9fbrDtLBBzXcwtKggDNaX87kJjCVQKE5rxe7hwuBGjNEN4zEQMAiU3K1pQUkN7",
  "key10": "3vJ14CftQEyAxqsthTva9mUeG4roeXGj4Bj2bk4G9gx5oLSC1ysFb73hcAf1qqUaLK2ZyhFum7rtrxvwA9LbYJ8t",
  "key11": "2TNSuYWwUqXu9viWA2PLGAvxgqdM9juRniS2VhjxV8mxx1EoPTpedq7c8PdUE8SdgFLvTxxNyY2bEuSdXZxeivEu",
  "key12": "5tMhiXBLLMURwHm2fg6HXWF5UmRwZfwGKmn6U733nM1NYVA9Eus1fSQiv4bB5zfxnhjWWBrgo53kmujoXmzt2dp3",
  "key13": "5JtSvHpLDPKrVTsmb4hTEjTxZuG6BvfC4muBTw28bi8nrvSR3X3TM5xSSrWcwA1KEGpD1iAnNp9ZCGPNrj3epmaS",
  "key14": "5oqEk8tmmBmUbMVViHsgzAbPDxCsGCCLtNHmTfDCcR9vhqS7PSzv7LXu4Ah8xX48bTmYwTbGfacWp59NNDJTfo5j",
  "key15": "2R39wrzGdcHvJ7E4zTYQ5wi4JPo7gawDP67gKMpMknY2YcVBvXb7rN1sfMypzwV1yqvFXr3pnZRAX6YEYdZkFn24",
  "key16": "4prL9jFV3CEMyjYCGofifkyUxhxmqAWCXBJb5JQ5aUAzZVQzFRuF1kQAiJfpFUr9t5ASDyenXNZfKZHLQ8C5owhg",
  "key17": "Pf5k4FtmXHD1WbueMnapWh2wgrpc8EDysNQmEhkNgDhGuTuNTB6wcz48jwSG8sV1NhkAsYiFxH6fJqArXHGGG9w",
  "key18": "5MmJPnU32DQt9AFnouhR4YxQsDx2Qg2xCytBcM9YecVCnkw5dBBZcV5YdRLuGAeSugSyAqfLPmBehbXiVn212aN6",
  "key19": "58rVPUdttU28XDQiiD9tDxsSShx5AQYyeQPRG1yKg8K8s2ASJhc2Caip8nuy4wUX73K6XetxQcB3xKd4ovejzwba",
  "key20": "2PjU7ER8LEBAFYPoW86cgj2tyQeUTpPf4QtkcjWFww7adHSsNqwJNj6w4FHPHq3VKjhvgit5SBbanikJwhmPYPr1",
  "key21": "y2cA6yBsc6BmYT3k54iTKUTbUgd52TL2FnVy1kDCsvUUvG2R48XxXBYDx5BeVCEmEzHmM5khdHZFbWVEP8Jaa92",
  "key22": "2XRdLFgeAAFBh3tJs6v6wpDr5oQ44WfirQspUE6FqdbgYhdu33ib7QkSCKhcur3fxUxVRRUJkmLdGLDzxbP5cgr9",
  "key23": "4KzKC6GR48VgueDJKYh6tUivWCmCeYMZwEKNxTBrzpXrHkGzZqbFJq1jqEH3w4vmm5PyeXS3dJb9hNS5vx2RYePd",
  "key24": "RbKBrqghww3wfMpHZerxVBe5Rd3QiVu5kDnCc7j4D3KLzCwR1c6wX5ozVmAADe3oB2M3C224oNxLK8i6hJo8HUq",
  "key25": "3waw3AWPdB4obn2uFMXmRaZomEdMeEZEu4K5B6wutPfPGBYfzxisrkXWapUodiUSV5tkGi5aBJZQEpNDUaLtgzQC",
  "key26": "5cDkJrq77ZCvDWvmjyBYg8UTUN4a59o691Ra1VKVvrTQW9rz4jRSRBzKuQhABfmEEb3mZ9CNdGMTJeUhLETJEQTW",
  "key27": "4fG6rUoJNd5CQtKwemiFJfiaB6bmEuqqi81zJK3MEY8qDNoLvq8tbDDC95seNmX45aCs9TNYhWEq1EuRvRfeYhov",
  "key28": "2Q5sspbPruxS9L9ibXpDCtFQAwfrVrdWdsTpoNpu5yVMkWChaeXgwcTCJKtetoLjDSmH6Edog5XdTawyGd2rxmL",
  "key29": "3WGjYoDrUzT2k2ZhXwem4TaHEEzdzppy8ADMZRwJz2iT7VeZsE1X8CcwSqrqRjhAwpL2GybEkhwr66nTYocCNy94",
  "key30": "VNqBUSHy2pxTYRa3g3JwrwCji15DZF83gko3K11deftQnmyfBxUPv7FrPL5ksPLgXXYMU9nupaZj2R5Utr7osMN",
  "key31": "5bTk5HDXEEKpYsBcv8jGAYUARV5bXANfRUiWXLTLPxEhJ66eyMRvMDCLb5HduzAPBjk7bX6WNrGFCfNmtSo5Wvwj",
  "key32": "4r69krYEBqNdczA1Av5QFqyb7nMJR9Ln4FUdTG6vftDL5q4SQP3NHnNmH8wW9UmpjynA2SYYA7Rj6cyYNVGJimHE"
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
