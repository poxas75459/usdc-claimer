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
    "66xHgSLmQMZYBB2zhXnk1XZYBqMNm5Lq6MioNQKhUhM2HKSsCxCG9MgFbGmizVqNUrpvW9r7vv6qvpKxYLM1sWJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zoe81KvMxdaTmXWm8QJhvkhjDx2jjAMUwPCn5zMEXN1KyRM6sftzadNLq9cREwqk1CVHpHnk8UxLBhbaG4wK63e",
  "key1": "2HZk9Rm7VdDNB22viMNw6CM5syL1UcmpcbdV4JKusqjyDrDukFD3gGgeq6GDTH6SKvgBfF2V8L84e8Y9WKrdXADQ",
  "key2": "5HGa7AWoBUAvfphWVu5f11DLivQTGTREx1qfjHqpVyKxqyowQkjZKvmynA6dRJcUAQvy7ayJCivfjacSZ8D2t3tV",
  "key3": "3aV2Ji2UiQ2nzB3rvPKRHGNokP1ZVbSsPwpMG6AGSSuoLS4W7Ss1FVEK2soyxc94pF8dikRqCqVzTzAtXVxpfAN4",
  "key4": "2EiwB9QaUMxppuZdNJNikp2Lk8dQknBYQG5iUpa5YAUYaSPXwtxc3oP131TsFUFZQWTafP1xcSFMGbuBqU1Y9zYL",
  "key5": "AsrKSi9XW6Ys8fj8oMLERfZ8ca9V7TFNQ7w1dbkkWvcKM5tks9Q1F5ZcSpr87QHmDoqhWZdVwSfFq1LoGJcsvhE",
  "key6": "3KXmpo3HPbCRjdiV5zRjiAXgoADsR8gPkeLDfbRmoEugaHoLECzFGPHeM96tZFY9LgXj9iP5jHcuscLfr3w9z4T",
  "key7": "5BRUFAGJrJUzTfqB4utvEe9LexPXx7U8QcapMFJSEzhRNQnAtUyE7Zy5tFZdMRNwNidaGLrVyE5aBm1PHaJebRkP",
  "key8": "2W2CnTJAHJ9r7SLLmcETacndaFtYt983gsewi3ZysT5iWxu9e1aE3Mpn6kwtPvR1Wnrqt6RMcd7kWCorw5pwWQx6",
  "key9": "39CcaSifyFi76tk7vAmvqULWnUAonyAVUAS9QhXuco4SMUcWVnymvdkmgEsth9JG7KXJDa8BJcNYNFns11wvxeKY",
  "key10": "4CALTwAYVvKjVnqs67ax7m8fPgncG6wf1atj6LmWxj9CoXqnU5wzkvd5U519WToPD2g5ztedUnT9f3rHKvejA4Lt",
  "key11": "4Lj4C1gwMuju79sFnUs5spD7zjySeWxo6SnHqY9xo9DjP3VrxCAbph5GccZFZf7cMrDAV1dReiS2YAAxxycPxLKm",
  "key12": "Jbh3YoDjMVgyACbxMXoftdcgCrs8CyHM3nDGHQJvRoXh462e9B9vZw5n6Wo5cVfNaLD5urnVMevAqyhMxvqRCAW",
  "key13": "5QjhTuhy4pTSzYbZzvxeSbo1KGsSkWt8YF7MPmnHyM6ahjZK5LM7f1qHWtjSHs9c6HfBUAod1XfhVcsdyKvnxEQg",
  "key14": "41o4gNtiHZz11d59YeVK6bi4zwPy2DQ9tAryeQaXFqEV3AEKVBHEztD8VwY7y4mKDeD7xYWFfARdZu8fjEJNREwm",
  "key15": "2CY4ZmMSnL3LzcSriE6caHrrKr2eQh2pwgeK49jkBE4KwE8dN19eZDmN6hc7cNCZ65VdMuyZrob1mY4aWxtSjVyd",
  "key16": "36kLFkgXrxpD6EaKR4TkyzBQxsaYT3M57qTuxnMLZZp1GnWvNWmdv6fktwj8Z2khf87visaoUCbWdLSww5nUoe4F",
  "key17": "21UJhGiPJ9LRTPYCbUfkvkfJar56fuTBBT5A2MGKAS6ZT9aLyhugB2XCrPd5WVuMAguzcUro8rpwe8yjTcRrrT7t",
  "key18": "2jmL5rP7grhLbkEzFZYzaj3inJexhrPdozaA3vzwmStABM5Jr96zFHtbj211A4Vgth6N5d5n5WLqcXdiNwmVCwtC",
  "key19": "3kXkWKgbVuiZHakSQb9Hkdua976twCYTrnBcbFxw64mCA5bCDQi2P9xFzvDoJ1ac7721AjUf4RmsLeArRkxPbEw2",
  "key20": "GDhqVWKvKewC2iQ2qZMx53htYSbupc25NNDtHdENP4QDAbGSGBQJZ63vCpKNV3T7LonQf6YKdmCR4rzoKLYfTrw",
  "key21": "CWrgziPXd8uqNMBhKHBwMQuFi2U2VuMiU7DJN9KvZVewmUG1EdNrFYrQNQJh2cj25xzXinxReyAuVKPyrmW63Z2",
  "key22": "5LdE1FrNS4nyjdDdcAiqRKWisUjQn6YQDak3jhcxB5dhtcuNN9nUG3Rt3dafCctVUq7DcbieCBhN9kmxpNHxGjeW",
  "key23": "3MNMdJWJazvvEPuXYbj1v6ZKgSaiG2Cu9otJBxAStcRmPgkfW8gcYy6BvyfbA2sKGWanX1gGUWH2wy6uAxby83XJ",
  "key24": "4SN4FSH6Z5LUeWaRafqAa8ZdHk7qaady8rzZymbPCRHRrKMC9LWqnZYJJ8DFKxnZaMAGNRJtr2PU11W4w98XwR41",
  "key25": "a3dzDkzQEpKDwkDbe5s79f1RvDRy9Wkoq7YAPr6z3BBYWXPnyiruCkYn9f3L5XrpUtUP9h9wcLz5MMKqc76rCn6",
  "key26": "rBiDxeF1WPBLoTUQ3Tms4JYAhcjWtuBV6oFhkZGJq5ujjLFEM8JtRBC4FpDTzRJSb25oRcKdQsd7nammJm43qDx",
  "key27": "2y182jH1L8pYy8uY3Se24ZRLodtT3NyxyBhQh9JDwmj9qhz6f2Sf6HxgUHW9Rfzk4hhtdKnKgn3yUPUSeccLt7j4",
  "key28": "2p25D3cDJzyV56WjKLctjHTp9St1fHib3R24hMVkBzAnp79KpDNBGyL9yCYC4Yr9jMrurWY7HmuvWqVGouv8onan",
  "key29": "3KM77BeSnopodPvZqgSBKDBdPvK9J6bZ4HMqpovd5RdfGGhFCdmyk1cvK8aYdBYKJaNWK11TThFn5eBwv2Lgs1EX",
  "key30": "4b5XHyyUjfcFpeT3NHkF6Ge1m4iJHcDLa6A2EfXPMfSrWYYZv4bao8sDat3HbKsiTT4xxjuKEFEx6KwdtxnAPF4i",
  "key31": "2XgRUiNLzMiwYrdAESgATpksNq8nUyehrCuBpSRUzmWFQHfo6Te3RLwdhanKScPNpFuDQZU4BosimshgCZ6BNGXk",
  "key32": "bJRpzXy5GfjWFxoeZTTDwHBszuvcUF8kbrA14hbYoPXp7zYnTKGRUvkY1VWELhtk9RBhzHj7bwPXs53ELBnccUV",
  "key33": "2whUkD35RRTzJxS13WzHjxd86MjDX74vziY3obYwCJCmG5Fqn6wGZNB1azNJcQpp5R1VMcYuQEx9nnE6PSnKJE3y",
  "key34": "5HBo3r7SQAQEq8eMTfdMaXADd4qj78AfTdf9qnFnLgrW1ySjJ4oD7kUhPzXNwniEK9vmmfZ9oDdzmSSbarq3AZA",
  "key35": "48jDFMoMtTmhhUJ5qX8BmjjZh5GB6Xnnvf8qf7RQqiok62EixULfxU9H7SPKvPx7cqSwhPzq5X2RbbhKDe2RefpP",
  "key36": "4ZQVr3monCaQk1QTL7oeD6yRTTh19xvoRxgYBe1dYeuiCpk2udLJAB4Dctdpo58vQzrXKK2Tsr7B4i3eics8XX2P",
  "key37": "3Zqq7by96hHdp2RM8fFubsRiLbdD6Nf1ErAAya8BmMhHtiMVE8ssMXxC2vpNoLZn5EB1oMuHJRVMXwTcikMqtbYA",
  "key38": "BEkMQisBPC36yzf9VyCQgQh4XRY3dPru8JeKR44DUxuKKGMZVhN9fUYWJHY87UuEQwqBAez4m6uHXF51jJSBm89",
  "key39": "5jjsMNP4sNV544VrwfoMkrpcH9jtSkCh6ruZj6JbrBSA6Tos7CbdVdA5vcKdbMdso1yYjSkYjyGuYR2QBmqdwKow",
  "key40": "p6tBotwS8hMCbSEy9ke6nCNzkVrjZgq5gqrXJrjhBAzPprsxXvahrHgrP4ku2quYNervhNnXuegnEn7bs7uJBXs",
  "key41": "tDKkD1oVYEFUv7ninCbzUzF1NzPqCjNDCu2Sb4U512yk1BeTi3bJjXj935XX4hwPpeyTq4wT1YEKVFD2smD1osF",
  "key42": "4DbLTtrjYCnhVPUWtUWj5AJJHMfrck7fnK3ADxom8GA1i4xy2dKQAvbBWBHLWcAYtkLsoRzBV8CZNCgqnkw4pKp3",
  "key43": "54hD4UsiMcemTJw9r1kz3KLzVHWs42DC4VzzCJZseFXWZwBPcsxdxNkLi1h7VoH6Qxd1qLcZBdtpapoz5juTseRM",
  "key44": "44A76p9qEzWkv9Srx1gRy4CziepXat4wMJQWKvHC7ArbNbbZcEjib416FuAkxDW32xsAvKBUeYou9feCs7RmdAx8",
  "key45": "sZe1UMwcEWjHMABbsAPLnuuJiq2Qk4fxhnRRRmZUZs47L8xCPcHokyunpUuN5Wy1q4CGkWKwGLyjd7FdU2JJACN",
  "key46": "4PqGt97MN8xzfxHA7RJ3p5bLLCrMwTYMo1dzipCBKfefTMUpqvg2rHq7LwmtaqWceiNzF37vvXPDWPMK34c41cNg",
  "key47": "2m4TqGN2p8xqWYaFbcpLy2XK8f98j1wMUYgkszEYSncSBK9ZPTdxmcwE54D1jm48Ug3cFgHzjRyhoqmmSbkPJ3VC",
  "key48": "MLYRdbxyoaQJKLS8hMiSixh1NT7uhr98sqHuhYcCJoo5cnbSA8oX93rnKuEiiKCbQ9SobNMS63FWYdrN1LZ8bxP",
  "key49": "5XXmWZ2RM9gDXb9K7tfWLC7gj1MiufTwRDDJk2EF2RRNMKQWykr3JdLTzCqUZTsN39bwSMyU6YyT7DiNYefjK42H"
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
