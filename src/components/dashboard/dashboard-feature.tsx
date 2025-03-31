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
    "443J5hzfPGECd9KdGK86eNLg4jfi4PcV6CFA5skkii1vNrwE4ywm1EESGksUA7wkw2wiFBd15HvU7KbRfGMLKHda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1rJG4gg4PqaYrWtVF8WjwTyTi2i2PZco4g84CGJw461etDQSFXcX8TaoWe5DsSUGkSv3uAYKnXyiwL9xLk2q9H",
  "key1": "4uakNJszCNBsY6oT9om1t3C2NccsbNMHGjZEEE4Sy3sL39vAZT4KTeom1K4UuLyNRP7JrXzMzzkabZhkNfqU4j5u",
  "key2": "5WKhhSNbcH7R8nf5fpZQwwASjYtSMzoMw76Xth2zcHgKkncRw5qq5JE3LeYZMMyHuF2fvyxy3qfMdCX2tAybrhwh",
  "key3": "3dcNWz2FsN68a8bfTSnGkJ7dhUkLkBkDu31LX2TuAonPCxCsMH6sCkH8NbiUeQF6xRk2Qkif6yzg8x62RW7JABTo",
  "key4": "2qYuAzP4tS7rt2ri4pamG8iL6AdhQayRyZbLELw5hBmQxxaQraHKRh5PWaESnvX1MRcRLKtkJ1NdbdW7JZdjp1D",
  "key5": "5AGz2FPqRNcgFbCD8wGnL47xC317t6o7VC6bNPhthdU7VqN61PvaaX5koxVhc95KeqDooQqpapiz9ELUqtw1PqWM",
  "key6": "2qLFWJ4rSofrSmBVjGHGrMD1ehcsadbtni2ssgusSR6A8cX6rAUF6FW23c6L7JUCvZRAbTundJ4YSHAz1BvE9uSd",
  "key7": "4j6Vg5Y6z1RsQNTzHSZ5qV2zg1hZiRd7gGSFHR3t5m7eYu9GZHjo2vRfpudmnSiLTZX7LursrEHayQ4RN3CGCxK4",
  "key8": "5K2i17DQqzHdBXrPqcaeFZvqBEUdmSVCJZaJB3VhtLvRRxDekyTxZyYDerASJ6pKe46FwhVhFko1FEysVhngcNMb",
  "key9": "GubcvgbCEqztFg7LuRxSnQgZ65xXwFQ9H2xN9i6rsqLBqMaCACVpmyimR5Jh2PvpdRr1q4Aw2rJhMzv2EPGWJwp",
  "key10": "56SA91RPfWHoPLsfxNGFWorKUANai3SP7s8Y3XCxAhVX2ZcDAERencdZk67VKx3MmtdbppMSegoK3vmQPXziGhC8",
  "key11": "7XYW6XgfocgjrGvJd7Mh7rnLFdPSmpzjq8zpgKuR1WTBUSygmRfMotreH83HTv2WKU7NxauCmuASUDpB83Txpdu",
  "key12": "5qicPCm8gYWCeWyiovNyEhkmYJhjs7NHQ7HaMBF77MNMNGcQRVKqZ6FpvRR45pB5HSBkY4tsLWnwPWD5MtFNvvyg",
  "key13": "32WqWFLE7AS2QVn4E6dZS8icYZUepUUB5nPm5EwQmEJcNAwo4akQuvh9Y5UUQmkUkijmHyVJoKAW1XsNmkbw4TKv",
  "key14": "EomNeTeCAdWquiACRFgWX11i7AmW6hzTq1XNuay3rrBLo13ATqv8qx7TJrs3hbtbyi9x9MvcrAjFdUJUae94QYi",
  "key15": "2pEdAq1CEYRtprCqCuGwC4LepeVrmh3r1eStG57brFcoHRqPzuksJwio8vzi1Kgb6yC2YSkpoEB6XTWzzp8AhP3Q",
  "key16": "56pLjNkoq8D3yXFeadUzs4FhyRu8Asaru6d4MGNTuTw1AvRq3WmNFPTe1tAEP9c9wjceQizHCsUpS921sr34918L",
  "key17": "YptZCK3o8aRJeqXqacn8bnbhUEPEDu9FypW2kHEfH36zcLuaYRexvkJz4vH4b1sYtS9Qy4dxofwt8o5R2AeCY8D",
  "key18": "5V7eBdRnYWjsrJeHmf2nKtYYaZqCfua7cWTirqJnwx3r2yBHx6sjpFKzoeWtiSNR3nMWu8v6kxTVxhjDr9qyvqtx",
  "key19": "5gPn8QA7Ti34LYjiHSS6GxNDibRCfE5egN8vVgUGC9kHgsJT8bYWtTiB9Vzf5M7sBF2m9a7qNxHBCdvPexuNwfjE",
  "key20": "5xQBpZQcCuTRURYMMVJHrfBAPsymrCyUEiTsuKi8r5giVyMtaZaN5qBYxonYd4ND6D5qMFpu9tCtPUdbAFMDeP52",
  "key21": "5mwchwuRWWwDGXW7ZMZ68Z7MBDLVUuh8pmTRna2URbav6KVioRRaQVkVWipnQbVWR7D5wQiDAWckyrnadNnbqXRz",
  "key22": "4sm5uthJ7mWuvTjkHtm8BKBEa5puhGnANi5Axfikwy51waFDuCB2VJQX9DuXP2ZBk3jpyWPVqx1hpokrjWT6PLuw",
  "key23": "4qziiXQ1KyDySiRRqBbNt6mJAwB46fPwVVH27JJpDabDDrGXZ1ith45vw3hYXdsyVo6w9BJnfCNKM7NRrsF44RaN",
  "key24": "3mNpY59yDRt3J4utd1nWrjEL5YuB2nmkdpkQuR74YWLcuMPwGmBdk7eLR5oHRGDvNX6upiHjWYbuaqfQUWCzQqtb",
  "key25": "2gMwBW21cXjeoqvv587qEGwMkphiwVo9rriN2dFVBkqfowK929Gh4nkr497hfd1hLtzjWR6D7mziCkT5tyZ4jBoR",
  "key26": "2qVPzjRU1TfDW8ByV3xapaDuCRQXAn3T2xz1bopSaCJ37VBbPx7mHTkkdPBX8VFgyghX5hEJ8m1gXGnEQJRP5sgF",
  "key27": "2TDXj2P9r6PzM3f28xGdpzyC59UKbQrb5gBiXDLKp2HxT7WMhZni9RHFw7W8fkFo5RhT79bK9r7TTN4Py9dHQYDC",
  "key28": "3sPmxrUiM65Gme58SriGzrgBtjHjkt471qouNByHA39TxGjhKPcFkS1PXtXxoMsk2Dp6VSqiuZeNzu9o9BjTNqrk",
  "key29": "2HGm7zePd444ypuxPnnYX5V2yU5DieEwvyQmBQxpaTFJ65CgTH61qhL67DbxRDtY3YhEYNbNVUB8wdCe7JAxxm28",
  "key30": "2tqh8kmmcqbRcqWZouY77GJX3HttgbSoPdGxrEc1VdGiyFUaZZmtVr3i7LmPdiHo4Hn4Skv9EvAcK33SfuYeuf3C",
  "key31": "JrPKsErgGt1YQegSQm3iyAm95BPXGCRFoy22RkN59aJaB2VmcLZWdvqoZGjtYRtqDqBBH7bJqF83qoEPmDkLM4A",
  "key32": "52W8f3ynvTqDcW6AUyX3WvNdQjozD7DvygsKWnf574ayjspGD4YVKzY8w4pgeo1x9GL8bB3FArF332B6bJP292vD",
  "key33": "2MJ7wZoMXBw2vJM38HCxvB9f7jhXiQ3FYig2mae7sJPbNfqAVNN596tmzdPLwEF8nRLjVbmzMAdrTCWHT5emxRme",
  "key34": "27RsTaL4YUopyRrXQLw5uZZKspZm1Ks4gJR1ZDz1yHgMDPY7VDDMg35zzvrZjrBDRoUPfES2Q6HLQBZUMXCGHCnK",
  "key35": "3EaZnqYntj5q4aonebDwAHdqYownSZBHmBubo2iCsoBGAZxCcMdPWqe9YxAz8LJ4B5CNnJJP8bP5Dof4kism1CuJ",
  "key36": "5ij8KW5zENQG5JSNys7ubAmKcWLCP96SnRde7mSiGYGboUB1PZ5ifFJJtkNs7mw5zdBZMUAyP1JPDtrGXM1MNJam",
  "key37": "3t53VRDSN4YhC6N22uxj4xhnhiGMfNmKdbgR1rscXdWjsjBV5Hcpf9YHeqmQU9WKgztaeBFPgriqtfUryw1oyJRc",
  "key38": "3ZQTeA22F5ZkhsmAuZH2RsygrbW5NquwwNTtwqZBSea7RpAu8REUnS6qFsTHaUbwM1NZA3jiuDoS1raxPDmLrAkK",
  "key39": "5TXgH4KL3UGyfQ6km3QqD8gC5SsbPCeqR7QS5U1TT7D7o2tRVBz9n9gtyKMTHhy39QmVpRKXDsx6m2tv8pekBTku",
  "key40": "dzdWk44DLosVY451vXVp1ataGDnBZ3MM9oEezwaDBbKov21b7mf1Fp3V5kDQtdMuFSPaDKqLAaDhuAaQufox48b",
  "key41": "2Rd886cQsfagwqpzaRgwooCLL7wNBRw84UFvJDCrPVaQb92C1g9tb8m6orqhohsRdqkMPjFCcrZHUTNf8sHzNGsS",
  "key42": "5hK9HiJEs6R37QfEZGeGD6ZgVfUPtKbZW3RY4nAZF7W65afeHiVEpxYJ67fUcyXd5DaxZZ6ZoxXXqE62Hboz2XAE",
  "key43": "tgzz5z8kYmFFzretua3mZtJk5BMKWMrUdUCZ4NVs5H5tATgJuirQL1FTJnP6GrKR3z3x7znc5QZXw4dzGYpB5nu",
  "key44": "64isqbu9oUxL4KBdty1iyaX4D3Y2FkWADWG8id3Dj8tGLTvs1XGV1zpXiumh9PNz2JZeEL2i1raz5355mmg53e5A",
  "key45": "44UhJHsm5K4JB19iSQDWx8Ca3E8THD1cKT6ZU3FMP7Eefp1cppW451hzte6eFm7kw2KRMGT1Hs4BTte5hn5Yd8Q2",
  "key46": "28B9hdNFXckp4Ddw2eQX2D515shsPo8zSCBLtSbFH6bDPtVjet3WX2Bn6hfcjK5eqTrTFM3xzRLJG1HMEJ9FJpMR",
  "key47": "3TzSNQtJwJzGbyYnCfKuJxxgQFUnhGsFXBCJ5EdV4VyToZthScQjJKGD81y6oHukaeQmvMp8jdhSxTunMsr6Jn1T"
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
