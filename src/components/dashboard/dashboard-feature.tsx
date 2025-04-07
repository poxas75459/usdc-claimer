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
    "51i5MYZE2ywBSoqe8C3KuBi9SgFtEbr7seanHHhv5vzMwYn767EubdSHMTtZPy3PGzcW1F9mSVBfgUkoU1HfDV9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22YBnyKhYfCsvjy5dX1Fww8NcYTqxzfLkcNMrdQiwXHHSnCMHNbAkcRrJpXQ3jc1q1oZA5RGstf9MEkUWWGncGBW",
  "key1": "28dfw95pntjru69RwSuL2qBiXnFgFJeV4sWBN9qamGKJLFLow22Bo8pp8n3JArKSL8nvQCAp4188HRGjCPJAeYG7",
  "key2": "7cfC6YC8XsF5FhKaEXSCkaDTcKcpcpXqwBZJt4FnvKMFPEvLXzqLCP8q5A1MLdVzBU8J16nfooCLCZWESAcyPLb",
  "key3": "53hwS6PeCcSN6JkXg9Dqp8w3kHyqkCwePNG83qdSebqzVw3y8qSfcdQsFLk1BifZ4cqkdCrN4G2q47PnG12ctHqY",
  "key4": "5r5SDCPU3hwdHT1yPoh7fe1MopeASaWNwYiaqhvX4VSXKJ6DaoohoNXiMJ1SU8Wy6EoGGyDySQdoPaPMQQpppyti",
  "key5": "5tirPcP3iYEzs8Ydv1CMYicE1Dra13BBkPRQMvaXNWW4HA7PHMWfuCnp1eBNQuhKpxEzRUW6xafyCYQtJKpmXrbb",
  "key6": "FoLW91trejvxj5hqjjwr6SNTAPuxt8WGUC6wGbAw5c8XbMAfMCbmtUDnEHom6tz9ymmuDYquVKw7Hju6nejrf6C",
  "key7": "3xreNjdey2JY4LstPEocJj7qFAuWtYtzZBwKMMnY2Ck3idgB7k4eRGvXSFzK5QYYo5un4U76JkG8qmSdMxQPyr53",
  "key8": "5R5ktrM18FwEK5udWaiA9AKz77kKVsMyepyK4HLAJ7FLtkcY9rPFpiTwNZnuV6A3yCJoejS1s2wNePkA67DdphfR",
  "key9": "5FLf1PuRvnDqtSfteCCoXwgekq3urAhTnGqQj4WhCjLMDszXpdtatLZyaLxuurfeNZrUN1XYH2DMVpSiGrnJpejG",
  "key10": "2Daxy3ttbmiFATVjqUZVXEmafqVcLTeHXXudPGR87jJZVPvm3pyw5pDdSCE2TjrqHSHQTSJuxU1eroBN89FCyPT7",
  "key11": "5rNqPfSTV8o5R41L5f1L85byhiMaXME6SBdbvz4ajkMkQYVK7ok2hdqvM24iBCx8JcHbAYiDTwpvVHMbQsVVcpDY",
  "key12": "3pdTpbWLTwJu9jgtScJA3YeDudEm1UtnQ4v933Y1fiGFCvHigfQ4SKGwiFYkJYGM9qzw6DomDVBNzRhwhfBgtpL8",
  "key13": "43PPLZ8vPrXgZhd8fd88USF3WTmX4iYqbWzubdUmSt3Z4CkAWfAnypjK97pNvxbTnKzcA2Fxk58HMxVvi11Fa8yo",
  "key14": "TjXDQfFbeMMxjajNUTkLDtkAJDJdASbETc4uaTKuw7rcZWXGBjesUEjk9jD5BLUGzhHUwaGCcmF2QnwucuFG7gg",
  "key15": "4qMftFyyd4oP7CDzJuaTNtzBu6d7BzCKSp9H9QMn8FpKd7AMo5NHNXCmYQYVmECTtRtqCc2EWNQFuxXZwMPNhAwy",
  "key16": "2f42drurZ8q6t761H8iRAoNTADgZuZ2tDWeNig8TPEGjbFUWD8xtm3S6oSTCFLc12uJCdEmKYaRNK8hdXcub2o6R",
  "key17": "3SPugeMYdCQDvEVq1jjPy3x6zQgupyEpJpReGHzrSGYdz2DZpSZin7iJZKcru6bmBGeLtukSB3Z8MetpfA72CS2F",
  "key18": "4WLkTrm513rHEkTk4jq79L7qwtJLJoFQKffcbdhYSxUQgaBApojHm8fNjjrWTSLqrG7b23ahx8NzbBruQjakwwxv",
  "key19": "32v2BjV5DemCtE2FRhoVCyUsLpWXpL8Pk3HXFdWhHLjXzksJb9sqfioCBEDcDCjGbTDvWtFQ29HJnh8qiTZjj2HN",
  "key20": "3idUck434t7xa7YRHqDiyBHLQ9WA2VDw4NLTdUX3dBdpZB9wv5zWFfZv4bZMsp3gwXGpKkwcTc5j9av2ZAWHhJeX",
  "key21": "5WyU1KD6RNzJ3PdJPFKCcqJniZiPKz6aJ1nSWkzfrGBgBGfqUUHTiwf6MqYtWWqhntSN1NEqMHBzTQgtJybwnaLo",
  "key22": "26vsAp84rUUmRiYrzCQmAwi3gz8DjDWwbsfyA2q1RRVGCfpA62xiHy6w2tk2ydgi9pZDDsYynFtWAvT1HBHbnzfN",
  "key23": "5Vdzi3ACnxnAxFhxpbHAkxgdzuAedRNxBa6uJag5YiD8j2Qo2TfeVniYxrCeKoVDTDix2CWqxn9NceVGTHgMdQ1Y",
  "key24": "2vfW2j4Y6XZpzpVX6FYwF5ZHXUq7smYuq48qK6nGHkHNYzhVzCeCusbVQz4K98UbDhxaCqSgUxqynbd2awGevja",
  "key25": "49mAD8oUiJ29s5SpdCdPkih7L1jnSCt3XKxYsP8DhULTChsVwpLrNPVxZgoRdhSv3EVxwjWURp9DqpnoZnjugFbm",
  "key26": "4ubvHd8vhY2hPf5FVWZaC73Ktxma7qmbZ3J19WCxU1ppgoyWtqQqyUJqpYCbRmEhiZVj1kiyeLcpmR58FxTJmFES",
  "key27": "2XW6SpqTSzgrH2j7b4t1muUsPuyXp9TGFJFuzfv4jZAavQtAwJYk9RVcuPn5Vrbn7S9bTU9Drfs3bvDFEXuaspoR",
  "key28": "3MDkRJhxsZpRcXDQUCCFgPBgx5nasb1aHNqPKKiwFEggJjihruXkEwmwTuZjnMveBErueZGd5PtnVhhSJZBY3A4V",
  "key29": "3ghWxqHvRtt3o4v5L87si364RUzV95EHhRVo4N7MXD9WQyervFWKfjiowFSfWPd7TeLvrrejqHa1KYeGRoc1uw4c",
  "key30": "5xqwjEkQWUNNseBE4ZsJ6wX4JMj3k25pQCwYTcy9tReSp2Y8gPweeJeWpAZwHb4TRsj9C19sz6LooCgn5AE3fZJu",
  "key31": "3uHHeDepBVreGqHhFLoTwPeKAZhymrDumEmZUEwSeLwJ2WuH2Rda8MvmGbdNzP4G4qgAa4vLn3GQoFoUhDaEhTJK",
  "key32": "4XTxk4r8H4xAHxFuUYuQL2GTEqSumrSVDqDZM5ucJQ6SXpysbXa6TzdD4fyRSkg7LS9xEBGn25UGMdBV6PRSsPjo",
  "key33": "3sU2duSpqvb4ehUeLGDUAHtr79K17nfdV2ZjfweXonWYn6YvhtVoQxsZbk8RmNSP1UuoD9vuCJE5tWvW87iq3YAU",
  "key34": "3V96aVRxsEsjr6AyQFyFYSh14AHRXFFqE8SWQg6SVvRXNjheBanqFGzqsKmrpfJG2M1DkaZECbuPYLdVa667PdEL",
  "key35": "YXn9KA944Unftpvv2Cs3kRnm5zan7cfLUMtbidyhkUEW9rY8iAwBdWRdDbqqp8um4P3W3Xa2VjgEzeghTTpUz1Q",
  "key36": "5e6rLnAphd3yaRdgqxYxjaSrqQtjXhTGLmj22oc7Q5CwiHX2ZJFfxhbYy9ZTFmrauT9PWLZo5T6jggP3Ak1Wb6AM",
  "key37": "3dK8g9oMPfQ7hN56P9BDwjmEvBR44wF9x2dYxuWC26F2rV5CJt4NB8SgtsRJpKvRCJgNe8LnKUS1fwh22QmgXtoG",
  "key38": "49LaX8RUx7ddAfK82HnhQy8mJFfpHUfCMggvSoWgb31Jx8k2CgR9GQSPHKpAbywQkHNE9wGegYgostq82MWaofX4"
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
