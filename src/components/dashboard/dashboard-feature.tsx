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
    "4rdxUQqXbVTqCzd8HiLDxHacn25ESDekzSg25Zx2qQWod4MG6Hok4StpgrWBdYRX26VwDaQYV2hBsxiBX1CVVpTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhJgtJZf9xigZTeohP3HaZCSKqU5C1fQGcHSGDd4Rvzve7xygXWA2UXVAR9TKtgWmQJtEktYuiP7DDyEPQbrz9G",
  "key1": "5C8dZ6nuXiWoc1BTeHkLS6jiBi8qY1MHyZzXZRQC4AEzikwQLZC5B9gDc6wvVk9jPNVo1JRBum2u7v5Vj1Tz7tJk",
  "key2": "4qDM1t4uxB9fwLMP7KY7XZe4KBF359Racej456VYYxCGGDCFqcFVU9DViDSvYvvvFQoRyJ7akY1raUnodCiEhtPg",
  "key3": "5ez5oPCRdxjejE2626MGuv11yqSCatRyA2PZMub6gQ9fAJYfvjYgj2VGeEyzSYkpr19RvyhiH9i4eDpRzmxEHMhL",
  "key4": "3PdPd7WVHb8rgydQcQeYfEhaf4GbJC2jUxrR9t2BFRzc63zTAB2v5ka6HTEFHE74mKyF9yy6pbzF4uzz4736shw8",
  "key5": "3WZvpkqfhQbdudLkn5y4mqsL4cKYzX7nvo7T6jSFziyChLLwABWEPewCpiVjH8fm9yo6bP4FKwaT4BwVthRXjWyR",
  "key6": "3CEG4a3wnEXfa5UzyEfJj4AEWnk9fKK2ChtPzUymWcyCJ3YNaDvJdaqMXh4XYpDC7YSzN2vKGR3iToessKFvL7qM",
  "key7": "yzoRsGD26gUG11meEp76XEkLp8tvC5MatMZx58sN38J6iEBiTHdQ2ZR2ieFhSAahq5K9n3HCcyymcG5uemBxrz3",
  "key8": "57RfZo5X9vX3v4oTDvvxLzgSD8Rd9FQLtdYdNiWQpDk8g91G2xLVtEbF2ADNcGZnFkL97i93Xaz77iA51kgG7raA",
  "key9": "2JpjfersuosDaSGajugPnJtdaHP51SdJyehj4TpybUocNgAZ9tYrQhCFAUPNYxm92EWg4q8V9cX5wz5fTM7Mupm1",
  "key10": "mA2ye8KFaz6hXGrNeCj6qzZQHQqHyLJE2rAzYbX1JEV4VhLuXFnmDFdErEmkBBX57owm6TgKDg9vSR4yEws4L6W",
  "key11": "4RPJ6r1KbawKbp5dLSyW1Si6YUPUy2rYTVKmBHmgxsGRaaWdUsf9w9EFeVkNgpAKaza9s1zMXNM7K9rmKBD1XbQX",
  "key12": "5Qcn5giyMz9Ucb8sdAsHnDm9RCo5ryUzPFDCpmP78nxVFMSwNzi15dCF1Xx2otdwq5AVUBKQfcpExNF7e8oh8DJy",
  "key13": "b7FYHUPVof6TRxN3oPHUoApUvi9pXmfeYST6euQmAdP2oNCrcUV8bYQBPEPBQgXKWSi7EkhZ5UwvpchVXvqTpd6",
  "key14": "25zAiUXbNKxF3rVy1C8c8xvviAMSuLcUAbfVETgjLPjPt65AaCaNjW5JpVXXXbG1PcDxhkyQasPnMNwzg8WQ1XNe",
  "key15": "61JdPzAvk9aN6qpFPiQyP4dtb71uzpmi7sSzwNoeRDoZp54wfsf2utHcasuQvujDq5EVFTgddM6PHo5oj4A5wjEd",
  "key16": "5BPJbYgLJKeeMJ7VZUVr5mWKDYFuqyywvUYaGG5BzjwGESPpJ5PpKxVdveGchuV47c7kzrnfS2ATMZH6iXhCChKm",
  "key17": "4rM55NodjckyQqxTkur9Vag91taZJoGGnhJnBpr4pVbuB3PAz3m2Jgnova3SwFUc3Lroc3iAmSzvAjomgzTW7hnK",
  "key18": "D6NXLcFsJJzc6SYWVAyc4jeaG8Gt2yj4yFNm7R93dZ2P181tFFmDrBpXBZd7WD8WTnTaku8wYESSwSY2eq4ENqj",
  "key19": "5dXa8w4LqXcFKY7RfNd7g3ect5vMybATqkoYXHVdfboaFX8UGWG7GUwhhpVtdhnGHn5fRr2FLrZ5H3dThraRUaHQ",
  "key20": "wrKmhUNJsN2a9JHveADCmXyViGDkvBPY44L4th6g3Cd5JfZG74kWrWgnKWLZcELYMqmpbwe2vZVLmrFieGQXLvh",
  "key21": "KJfGPzEWE6mWweWxAi99rQA1TsYW8b659ULNFXfhpVpt7hnKqUdFCs3TAH9ofm7Np2tiA5w8rRpg6RM2LNCfM5Y",
  "key22": "43qXrH2LifREMxdwEuhs8ppDje3trwZCmbdRv2fMPdE2esEBxxCzTWF8cQVurr2XkmWGEUvep3oFYGMcVYSpt2zR",
  "key23": "33gGCABKd2qiwyPXPALN6dxghWGQWUuUWXHd7towQX188H15pTfD3zCdqpTSn3bZfpvu8nTm4koiGY7tQMp4GV47",
  "key24": "4svy5ZCGHWSsFyJAMcsTpgWfz7yZ58QBnjCLqP48yHRQ2SJA7xedLMsnUh7Y7LwSboe89hBRaUdy9k1V4Fr8uWo2",
  "key25": "2bg3RB9ZzfgMDzHNwpszZoAKQYMA8ks7GjvCtaWVBA5ZEqYhXrFizabGe81rGiCH2jRGt39T6WocMQFgVaTkdTKw",
  "key26": "VSf1GmmP73a99wy7bo8ZrZxRJEM2rmnZLe1kGx4aGQ7q7WwRV6VmahuaH7ZUs5NX6tVHZtZtxvnTV2gGPWztPbd",
  "key27": "4xZHfCrUTYgu1mKu3DiVqBArCYtXmQsk5zPWG3NYJykgD74bX4cNsGB7RtXVLUvzBNs4fJhXtp1uUSNbgbnZF3zX",
  "key28": "42CTiizP5E7FZmEQBYcgRQEjW4MuzA9cQrjaJzmCsePh3gZnDWZ71r7LizVNkaUjtFBAgv5i2whJwCaHXz5iU6XJ",
  "key29": "b7KeFrQcWib4QKc1jhEdAch365hW7rTDSX5nAbqZs35fQbQKen9ovmNw4mTCKXkvZLNpv4yq9JM7iNQsWVvRTZL",
  "key30": "22N4MHFaDEpHFpFAFQVjbev6Vs9JvRqCg796wELSwsdPUFkisjzgFSCAQfstbUfhgDSgHBceNgZ4akBsMD9H1Q2f",
  "key31": "3CLZd5gkparN7UD4ppnk8bzXDfMbYA6hUd9Knn5SJA9AMxHVnnrC6TKhFyzpeFuRwBM7mR46sftws6sAJynyxho4",
  "key32": "3FPqzivuKcMkN4Ui1ztuc6wNpRpDXhBmowNAoXFmgz35bhG3qQCNpoNXP6DJDiV5EvTiAcALN8t9h1hagxPR9Sfa",
  "key33": "3z3UxfRuMd6AKqRH9VHsNTSpK1KuUJFs3qUSxtCTUhXs1DAWTAcvRoQjQA8Ju1NcBk3ohJXsmgas5fJQLgBy8fRd",
  "key34": "4q2hyxwhtVQhb9RUypYrLapuQc5gVveLQAk7hgvwkYwqkW4xWGcshfs7r5e2wCJ2hF4UmDfevw9fXfnb3fFzPSLt",
  "key35": "3kGrHm9RBK7EdhUS9UibYK3iBcDaCeoTsZakTsFP8vN2C2cYUJrLKAo19fo5NkSmBc9jSinZs7XvBhfw5DqjzUf4",
  "key36": "2GRTVnri2jmcjowQKuhNxxQJAXmkGsUNVaurQcpCLef1wYYdggXJYaUjvDrizQPt8TeLwyZCJYUun12TFw1KH5Ei",
  "key37": "21AbZnN7rBLKwJpQpr5DNLJYfh4MBnVR6bV9KdcHJKECyC1uHAQNgVt3GxuSWd14KXKp6JwQDEsLUVkBxHYHWL3H",
  "key38": "3iEygKLujVuHRz1xGvVT4MArwHojZ7epZpsY1y3xcvEaKNV7zSo48gWZ7hpHmNQNyYfpWanZcuTgMxR9r4LX1pnY",
  "key39": "3kFPfANbaJCxULoH32dDoLmEd51fEeuvJoz1TVn9kYS6Khxp2fw7jcYXVeSWCQg8a4hvKXUf6KXQ6ZiZ8XLYs6hg",
  "key40": "67WcUxZWXTdDbQchXabD2cZP4XttWhzzCxLexfczn5BXhvku343UmB2ZvuZ5tAzwBnzXeUxpajezmbAS42jh4VoM",
  "key41": "5vyRVG3XchhHiuu1mxAZXEgia5cpRqBSAomMjxXwgfn8Ft7KsyjPHoAvfXDnu3oJT2khFssE6bF2vTXX2GwJYcw2",
  "key42": "421j3EMVz6A8kef3tEWGR22vzJPosGJx6iD5PXS7ShfthwD27PQ2p5RK3McBuA2YW4kn3AjuM8HpC7JgkBMBEwSQ"
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
