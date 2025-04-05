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
    "4xpJs2jMCcWxXp9ygkvchC3g5KfNcx1go6fQttCB1MVN6aTiRQZU6DixgJ6dgdZh6vVRtHLTmJfZS96T9kLeqix8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUaTsdwHt8ZiLtet4byyjFFCeZU4JjrNYhF3SjnGPwPgc3TtW5BPjXmswhyCHpuLCCgEt4omvtSECUcy7Y478jZ",
  "key1": "3XXG1jchvY8cdz71eNDZPJr7XA1cMj483V8PQ98kbgMGChugQmy4pBy8MiXdrnuzPdaXmrupia5bVxUeVMGR5QrX",
  "key2": "5R46virEMSXRofKE7H4DweJiRwfnagG8wxtus5S1HDqsxJKD2SDLCk9x3cECRHmjVsbnviqQXXytZzG8mJzgguPy",
  "key3": "3q7QfEaECjwGCg2VkaKZAa6LudpV18S7WaLouja5TWpYhYxvzryZRL2YY8aykWUsbnx8LHuKkR6H36Hehp2FdyS4",
  "key4": "2J8bW1Tb3WV8n7WUz2sGZ7ZHJnn5HLkCqNwitsUMerB1m1rek7oumiPf4NNTMtQZw99XJMZ9DzMQHP3uaq4LS2WE",
  "key5": "EpHgapBXFKYBc5HLWEb3EeGuuGtabbAmKj3yPNZ4y2aUB5eZZqZGbYHjNEdrfr63ka4L1hzN6dwZEEM6mEfH4ym",
  "key6": "2ZufkCLcJ1NzAuJqENpuiQ2YabD3BFYTYxn1fQRb6KcLL57DwSqnTYWSsVUNWLVfk5cZJy9E3GKj13Y44fNtJCSp",
  "key7": "4HgtL4snRmHGUxK4oVBucxquNLLCoyXN4CEGtGq9gqJ7CWud9MhNPWn7Pwhz9KNktLphqUzaF1ry4v8czWToKLag",
  "key8": "2q9A1RHRTZgH216PwaxPcwj8wBTCnbVfVoQrSDqKbCviHqbjPa8JmVYGncS9KNfXiHAGWthSiJCLbyG6EBN35hJq",
  "key9": "2foWeb13wiPo415dc6Bhn6EmoFxxpuTbMGYdBDCp2F8GC9Ah3owxVx9qEpbFbTxDDUyzAEGDf4JR7dJxVujusUH2",
  "key10": "2RHQTwZ7LDJvz1dQXrcnaDtnMCQax9WyomFLvK9mrBT72wJoLg1gj6Znn2wQNfQQxz3rvjRiWyqxhVQAW3EG3qiW",
  "key11": "2wQ9RQ8HRkVqTCyd8oMyAJED6YWHwDjLswzxMGoevMSs2VuSG3VrfQWWLqfiFYV7i5ZetvBqiD5uxanPqJ3CPd6D",
  "key12": "2EiJfyF9od4GWGfM3f7bgbit8kZmCK4mgGEQgRGWXTRp4RDwam1KG9iGGtLmWXwrkbMPkVwFrbFYYoPhvhgCjLnf",
  "key13": "5iHTTVt6ZJJ88Rigt6QDepr2fVfTNWAKoSzUu2pGZQjcv8chsiCKTXMnQ51Kw9tRzZuFNCbG8ajuhsM4iDkKqvwk",
  "key14": "5y3NCCT9P22yU42PhK2cg9MZ2WEVNn8PvSMYjs37SzaSKsc8fpxspADh8CjBbdnqUhj1VfKA2jznXJAA6d6gd2YQ",
  "key15": "U17rdZXHhDCBuzeK9bLCAHr5Y8av9vZXULtFtcRLQbdAUgM3TAsgEJEhkvbhgwQ9DMTBr7QSobfLMHogg8MHntw",
  "key16": "43SwgjRVHFtDpXCewtgkD3r2rdVicPtDqq1sjGusQwci9PJYZkE9S37qBE1o76CXgSHC2K1qSnpnSxJs44xCz4Xu",
  "key17": "35NHrWJFS4VnaJyAkDfhPr8ayNmEVAGmbZVAC872aeZLqT6LERXbArsPgXSSQDUkDBRcHUnnwicL9uSustvMWqfM",
  "key18": "47ou2oaMMShT4sKe9NcBf8DrKPV93D6WcewnPm7j77fxfc3AWcGVjEzhP6UthkfZq8oiKRGU6HKuBkaSCQuMt83c",
  "key19": "CFHhNqXuSoqhJbWGLDemKDX5tSGS2qz6ZNii42b3QbjKiDrbBK8WUqFqCBr1LAfunsWAYBLWMbohwwtA9YTxx8z",
  "key20": "3XJTpPuUMJaSkGx2Fv4HyqaXshKZXXgGSZHbUtejjFwH7XQzXqXfjeanZAeu9wdfDMevWxvg7igcQpsn4bCMuiGz",
  "key21": "4kzyesR2kQearw9x8UeS3NT1BAUCbVGs1xwnD4ZssgvWT8f7izv4oGNtBFBVvET3DzQrhZEstJvM5WUPgvqiLQz6",
  "key22": "4WrELy8n3shiFNaGatwJsm7VdqEuNQten3hCuJCa47Xj7HW8AaeUDhBD2c2bDyu9jRdvGz9RMGNj1vDe7cdy3F3n",
  "key23": "4VEVLi6q2dL9sZoTieq8N7rJLm2B4J5E2RxQgTAFwHrFwfJ1N4tzdeGtCziSJF6D1YycSnUzwedjrMS1M77tLVLG",
  "key24": "4YPsu23KugYnCH28q53rccsAjng2Sbwc4g1LAGDuFCWdE9ThMPAyZ7NtkKRCWtVoJzon1AtDYxxzi1WfDa3Aw4pe",
  "key25": "mdruTx9R7ypoj4zbkZcG8QB8kB83UAsC1kvahzrgWHY6JBQRxV2qxKDeYoJQZXaCekCkCuDemb9im2MY1yX7bWG",
  "key26": "5RW8zDYSnzBP97TjHUJ1Fge19igBkHfhkSBP4TAXjHWsj3x7Tj5DtQmUrUcTxjWPL3Mx8g65x2YhYtZCu1zA6sa5",
  "key27": "5PQoeZEBe1UgiygPNxsKrEdF5gmDURJoZYyfXY2G2BSFA2sWLeVZBNY9Z9GE6ZZ8ZhwjqFnptzV2sDbdH3bmtXxr",
  "key28": "2R7GTBQqsJPHKyyg7cZBsCMiis6chUQd6isPcYBxiN5hJ9HVrkmakAyyRCXaMaDRxZg3wNzSeP7hd1jSJ4igujoa",
  "key29": "2QE91JFZPwX2YnTeuG99cnSqZ9zafADNGX4ShGy2fnAjmuHAdKkMnvjpJYZZ3LLZaZzzE4ewUMYAUwq7ys3k9guW",
  "key30": "5nWxAe9tagp9TV26sW7nWT613fXthdbnCPdNDudW5E3CbgUjqqJHYAdEUUjCXJ8zY6ZyF33rABFrGkUeqJkgG7C7",
  "key31": "42LMAFkExqmroht8Rcy5meEpYNRcBX6FKW48PcCAteNhQzxzGHrmNLBRf52JpCrWPYfbd4kCKyf51kE2koSyvLn",
  "key32": "3axXR8DM5aPgEugaKxm7c9kmeAv5TFesQNVtMHb3bnZeGRVetnE3aSdARVMXZW3RX2By2NWAW9AxEDZXYT757GdG",
  "key33": "4cveEsfPU9xQHCyK7Pt1X3dnhpPaFbReXwyCiaPS1TtcaQb9qkKMQYpquhr3dGUAjEFiXtJS5yHXza2pEnh4K7Lf"
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
