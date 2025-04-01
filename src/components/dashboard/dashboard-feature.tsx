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
    "52cZwKaZfe3aCbMKkj5arVA9LHA4hDbXVgbwRmyNtZWFJrASnUb5EUEFywhJbtGtN16g3CiBaLBZfLtJknuudmXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W6zW4kcKkTJ5deHfhwLoy5hdYsiyp6Yj3jjwuB5XKpZe5epfYtPpSoHCtefnDAkq5CBvf5CjtAYUsBEmQhdSnnU",
  "key1": "3HfWfJtvdhEKcpteLu9jFXUa4ZtoxsmgwMUnsU61jirtDppCPENDK4E52bkdQN1oiE5uNSupbAhUyGjKqmRVXA4J",
  "key2": "MD9STam7zkwGxY9YKRARggVcb1b7NF1XPmg9DJuBv7fgq9DUkRGGjLtWffA43pb2E5saRtSPMh9DbGPz2Vw3AQz",
  "key3": "2EjzSfF78VqXZGYiGz3t18hERjL42xG3XmKJNqrdLfwvPiP3tBpYc87c4yoGnj7ZffB4rAqBXPhzSDu9Rs5dHmn9",
  "key4": "41L8kDvLHic1Q4PR2fiE5soUdDK9xnLoy5c1ndCmXytbx6Xn9J3DSR9mnjpuFqAEd1CQ4DEnNKYiP3m4vFvRCwXN",
  "key5": "5AD2YJ1LV5fRjN1z414YzdRTHrBEnP2CjY8N4Sj1GZ7aSRwSvqLhS1RLjAdT8owWFYk6WFWt5rThsHMMp8PBdMwH",
  "key6": "299wvZXEBDtNCcDcwN4KE1oSuKrRW29PxeLmiDsxkbaHP9YYaynC9dxqy3Rs5rV1CNmjvufNzrX5NvXW1M4zuJh4",
  "key7": "5LzEuo4BzM5jUeU6DQSuPtKEyzk5TA2XEDYwTA5LBdY2MiG1xE81UsKZEYuGTyAMeY6628rtdPTPdKTszPXfA6t7",
  "key8": "5zaeKP1zyAX4fowGoXvmnNBU8gL93eYfg8GDPiGksuMCjjjrW8JTRS3wK7pQXocdx2sxY6PJhiyQdYsgev4oE15Z",
  "key9": "2LwwpcNVjgDeMfVXYGtbZs5LNEzi4Jpad49ATnLeiwTt9JCDTHJ8WgGw9uNF17QSZssugyrbywviFku5E7QMmzbB",
  "key10": "5xZsiPvBhBNJm52PAX4kCcLoYZxn1a1V1vJKc3nuBHg7FW51EvJ7qyvww1MJDLGzm4vBV8XvzUCWff9fF9DNZGjb",
  "key11": "35iSFzgGroZ8HzZKfnPLBbXyNy2dwHbjbeQSZ9rC1f5QDZ8ok2PYPdcmntyBi34T9Up8xmig6jhnrp1TPGDSgi4M",
  "key12": "4kCy6mrbV3RkML3iiKdPPDxMQ1dsimHgrGUnGg55R31FTBGwbk7Y32HgDfEgqbXpdk9d1HJwMQUzixa9ayyf8QbT",
  "key13": "5AKfGRrMjowMxmj841gVFJtVQJeEjTtKXz3wt8ukGcLd8Uq6SQ5a6NpABFWuJNKNdvS5LYSt3XqLKx2UmVraJiro",
  "key14": "347KCQnjgxhLQwxXdp3DHjh5vbNeLHDgkoKHAwrkVusn9bAiUNcomPAsS5mcizNbkz7i4cY5WjSTxTQ6d69iXFgY",
  "key15": "3WV5ME5nrdhgGAHiCVpSYPmk5yvQgRshbxhjXtqsxJUsxWJtbw6VrFWY7yRf1J6uoE7qm97shyzDNgEi23a4DuPU",
  "key16": "2o7oiMGFphtJxniBvMwsT2dmyiy2TimVNpFRP8cUCHuEi3jZmyntnc4h47S43KLsUJgjB8KV9uyrHXWARbXLBboc",
  "key17": "2PxrkU99jtJgGt1aDhJ18Jr8csCyBADxXuLHZ171SKZnQxxgYSR6aFRVijUavTP8iqRM8L8a1t2QgFi5idMHGhJU",
  "key18": "rHvtWrubcxdqrEUM5TYpuRaynTBBNhVKu7Rrp5rCKzMFH2cPtHibdi1pZZPpEfgDzBnfsWHxJmk6JfyZj4psoDy",
  "key19": "xYC1fKtdxEuhJdU1L353tBncSojpUZXbMGfrLgK1oNXndzae7nxkxwMGZUitCbfBMKPrF3nw5HAuTQxaHvVztDJ",
  "key20": "dWgN59WKPGmXgpC6VTkfap5bvrbSV6j53PZ6qMYA8U1xPEYFWA6sKVPu6MZ9zBK5vADPfGhv4N7QXHvwjcixMsj",
  "key21": "5hg7etw782EVVPrmjQDzRMcnNzMtTMdnG4T55g9fFxtam12CDCmwhiqmDDBsYCWeteM6quJpsdj4EsoWxjNE2crW",
  "key22": "3cuMBAR4sBKhLnMTrKM2WFSrVyK8qH94Tgb1AGqhoJsRkBP9dUGimsEe8tdQ5B1zY6w2JdfULA9n3GsNUBTWK5zt",
  "key23": "3xv7caLVzu4uKrDAAzDsssBaPeQmtLXNoz4Nh8GjAn1LhqwxayK3vCeEaemBi6uKXtJ8kjD79z2m6F354oLMkHLW",
  "key24": "5MWdn6ENfSmDiNayRTDwuodBeScWZADxpCgNjhu8RiBcLCdSVTg3154vMzQt8PAmcX7vmGLXjNs73LZaUQNLfpaA",
  "key25": "hw2DzQeDMgccu8AhEamZr5a5977R2j8kHeJju8dgkqv5SBwtQXv24uWazCsEpr1ha8z9YCDJ494udm5QuiKtrSd",
  "key26": "4aRviRL65zxS4wCreFYS7FXs3BUrGQwYiwnnUCsDJsPfp359XHKFYSzJRKF55gqUj7KmP3pKRweVo9Y4cMr4y5Xi",
  "key27": "2jxQMJRDYurymjjEvXgDRZtfsYFvWHac5kdqNkUfvkJhaTaX2uJG2kgowYJCJ5AJHudnpSMQX68fHa3NXuf1thfn",
  "key28": "2nZ9opWMrhx3nsnJMtcsS7xJGavDj9taC62TE1mA5qWgYSkRsXEswrBwAxEueYMwjL9PB4o1h3ep67X3iiBcaHk"
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
