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
    "4SYokMWYAtykMoqDp3hBXQPEWtuDuEHFGkjJg22CsEx2LrHjh8cqSPvLDYqSv1QbwZMUjiBCGGCRzwXv471Gey62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzYeCY4s69TXKj8wm8NbhmUb1uCe1KjfjECKkXpDjCjJzVwuDMnCibGm38vwt5pd4JiDb4BTuT96Dyehv9Wx4r3",
  "key1": "2rvMHGb8YtK1DJA9uLoaaTxeqzbYNH7jqvY56mFnZ1Lw1qGFS94NXgcibYVufuF1njVmiY8n6C3mRnhUqCyVBon5",
  "key2": "3uD2QJeeEr7mj5Ce4f7nbwHPjaVKyrdywdCu3DBzXsEgMaitMgrjxGdzNUWDMRNF6wjFJGaSeSGNbKxvPjNmGdmB",
  "key3": "3iHycy8oKEbAoLKhUx7HayoFnuuYK7jEHxsCzgasy6cCTsCgg7TrojvqrY7gHaUgLtgwUddkhNRijGNnHgRuijSc",
  "key4": "4w2SqjAcJDBPPMzU2guu15nY33jVaCSoNB1WDxDsM9sRn8DsNTY6nfA9bhYXcrK3UV7maFZ3eFFsHivoq8PANbRA",
  "key5": "4kyfi93rEENgyj4f7RWtgg8adBYBx2zoU7WKFtzHThzDwpT8C3Bp9tSZXK5cVEoVMKPtabJf3SjQXufgeFrwdMJc",
  "key6": "5R82wQoaPoaAKCBuEt5UnynGuJ7VJSCPn3Hbf6hJeEQhdXTubqDMMhFe63JxdyzC9VBuixcDUUCDtcsadR3gqKUN",
  "key7": "2XtRrwRzCxv4R3QRQBqkzVMAnijhKBabm7PgkZDX1BWW4V1nhSB2RASftBezU6y2keCAwKECbAaWpkmh3TLaDuQ3",
  "key8": "2okCC8NPLhMJu74EUKYoetGAYDszb7QEQtUCXX36WGGqzzEEEnErXSJfjbDQaLbEKP2SP8Kdu4Z355zThneNaVy6",
  "key9": "ry6B2GnjGQEhugiQ18yq1vMX8pgAVMuwqYuNZ2LTyj1Yv8H9d5VXF2FgjYtk5RHGeaRb8kMe9dLF14CNqk6XVni",
  "key10": "2zwk5e5E66tdenChqU35uk4uT9oyJnbqmFRVn7na2X9AfW7D8F6bUzdKq35Vm2mCkyBGniWoUUZYpf2L5LahTWGX",
  "key11": "zp2QLJYGAmAfwAaJwRauaSefet5xVnZ9fidDs8QWD8t3N9PHLquY9ncvMbY8NMVrajpkpwwKieuDqUZ3zjriqN9",
  "key12": "55oCmK6pBA3uKaejEPKb3DFTjDVJdDwc6pbQG3vLggY7fiuDveGZj8BPdtk3M1HrXwU5UfUZBXXgfuxGmuDUx1o7",
  "key13": "65pTF2UT7WEB4jV3a9ZPZRAa9ciVZZ41xH8KGrR4gs95Fh8Gy2pksgJFEiVNx3dyaVnYbdzHDUgS97hWpRrTRMBX",
  "key14": "2uvutafecneXg4RugEPN9ckk7DGGVSsekUuz1b9R6fkNAfwu3eTwQCaTvan23hzW2JCoRJM582scuDAAM5CHtrjB",
  "key15": "5YdXudLMxHDMBfgTbUkkpkmvRtxVq5mXVZBkVDcnm7Uaug34DBvUVYagPGTfv3DQp6ocb5GTTTxggjakF4vR1oEU",
  "key16": "352RknG7Zi57mgRkHLAJqRzKy3wTyRmQ6VfjDYmhSVZ7awnXmeB5y4XmDD4yvWKpCqZ5FbdfvVLqSzHqwQyDWNKw",
  "key17": "4cWkpZYkux8NUuhSLVUuswV9enBieyS4KKrqemJyZi2XB3t8HqbN29SL2RSrUUhK4UKFR24uSmU4y7Cz5jBXUhUT",
  "key18": "4iWcVqN1eRYFFWx5hyvJcpC3Q4P2UZUSL3XsyHAEJS8RaPUwRXtMekN1xauApVSJdPQjAyo9yLGkarNJP9hmmcMH",
  "key19": "4FMNDiL9DLnEPYFUwiv7GdWJFdYTt65fGwZKXYgXc1TByYpxkD2MpvF18oLEXDjW6zcDY8im7u9N329uPu2haAw5",
  "key20": "4KLVkGFbZRF9obsP6XHuZDSfdqXigJ7MfL3wLiqj1GgQ77M7JjDCNXMA2P2JDPy3oRfd1cbd5CqdcrQZfBwmSLkn",
  "key21": "4YBnWDYSZR2VgSnAgAnbEZxVs4Wauqhcvom6fC18JMa5DcyFfzhbsQFRcGxx5UVbvc2MuFT8EMp1oTMA3x7bH647",
  "key22": "42KZtrMTAnd3F6wV7ainzZFhSUPeDHdDs6A4qCEhrjGTd7ixPnCc1WsgC6LNvoLFUjYSauNEtWTFX5J8R6rJWfBv",
  "key23": "wEqHnCv2N7QbrPEHJ1kNkZcZsZu9EVW9G6yvTyEFSj5ouku5u8FgaU1qFyTKmitxNaxoqhM3gSvctvJPQR3aeh4",
  "key24": "4bZXFcLX3bSXV5Bz4McNs1KJFsS29LGyVKUFnuT9CaR5AXUcBDo2Hfd86moxTAk173y3YdPzxXSo8feoZMJjQCoL",
  "key25": "3DBQEPU4YcU1YUQjkfvkb2Tkock1wLwfHZsxAkVxvGXoeWih1eeoaebULdSCAGyfNLKcD8UJe7SXLua5wAkUkMn",
  "key26": "5S9dMvSyzUNF2sGVeEDwkZS6PXa8TpBLBJmxc5i3Lh7hwG5n3NyB1k8JnYkNxd5snY8s5hdyEBfERgHGzR67Xaj8",
  "key27": "5mdL2pY8XFaJv8S3dpcY1jzzTnBD9FDym24xc94nz2dhCJoJaWmZQLtnHQBhVXc7WZcFz1b4ETCzLuvohcM5K6Um",
  "key28": "frJ2jo91aMJh5V3rcndZVBE5dxK4YL8nb6QTT8b4iV4wid4pqvmd1CWfpuNpzPnJEf72TJH8w4JibpGKm4mhV9C",
  "key29": "SxNXZ9nYwGHnLyWGXL1HFHTq7uESHR3nsaZyUC38xW6dVGmuehKS5vGxMNwdptcC1cgeNDGeGPSPpN4KUvAfJdu",
  "key30": "xoseXzuUT47uRnrJSCHtN8SGgGvvnFociZmro7yBMkLVzMUMgEbvFhBS7Uz1HMUjPQaAYPBxNfBruCZ5QHfHhWG",
  "key31": "4S2AT57f2hU6cnjRWdVZMvxrx6mFsFX7SqGs5tRYSjtANx4QYNAEDBB11prmeNgXa1uTkNhpzQHQ2U7A38hy7pvZ",
  "key32": "2qvz4YokFEp991dd4BUNHE4BUx1yiiVc5GS8zpEYyRhTN3ZPyLWMWTXeC31SGAw7GrShs3ymNzwCJmGKfcyPe7AC",
  "key33": "4XWne2RV1XGdtEwPFY5btTod2iE8hApsPr2TSAvxYpHu7vebrE73uPSNVLy8W46spQx9gG7XpDLPdFVLoyb8qnXB",
  "key34": "49EkwXRCzBRnVE5r47QTVs3aSFBts4wxz26dAZkxoqKQbT4rHbaMdMS3vig9M5k1pm7ZbSAXCCT2NJcPtFYM9TwP",
  "key35": "5dFggR9nhsetEDVHJzRG5WEVMCTjyhmBcbp5Xp8MdEXPgt6Sjquv1qpQJtKFFS6tnqPkAFCkzYfXHme7CMvvqMQL",
  "key36": "2ssDfSwt8GqCbx6azi6fWuf6Qj6iXxp9n7QSBYqAbTwM9YTGZb7KTsaLiUQivpvzdzR86adVNEg8iuhnFLVbXzwY"
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
