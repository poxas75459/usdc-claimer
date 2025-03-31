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
    "5b3rPJKoemPRZT5YEBh3sy6Hy2h6cbNHps8Ycz1HR8n3qQo35vfCPZzzw8pvNcjMpjqQYk4UzNzetmqxi6tKL2an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bVL3ohU9eZGgj2nwwmUmeWgFgBRX6cuUhLAAQ22wiNGyEJJXEZBR1enxy1QRX9UBAPFhuJXJMxtTH3E87HLJPP",
  "key1": "ySiTTh8irMaSJRpCzYoQPPiBQbf4cBEwZ56ohmzqi1xqjHsz8L5fXXX4ojwGBJ6XdbLCU3CpD9nmJr28sRKYBFQ",
  "key2": "2k3JoE3bAoGnBB7Ei6T2g1uoofw2WgBvx8FtwA9xuFve92gzJQZNj9kCuG7UZ6iRmfHFwNzTrQjqmQ2qfWaJ9XZr",
  "key3": "4w7av5LKqhXFE3myJ8ar4TXCSDyiBSkSASE5JwMYh4dxQXhr46Y2eiXxdEYawuoDj3fPQtpsXmDSGkZn6Efu4LZq",
  "key4": "51ZEoZRsDhxqQFgRzEnPREKzmaLXwfDSbbkyJ1TU7jsAVBF5z3EGCPMGgFE5tfgiuwr69XGNTGsm1t234D6jntcu",
  "key5": "4iLzu6WnNaB1NWpm5k4qsYDC3QY82KLXCQkFvH2DJPsWZoP54fdScYKuYifwy6Ee9UGRwj4hNw8HkxkdtQiT9Te6",
  "key6": "5uRepdbF2cYSECkN8Lzqh9UuzHnjoATmvVL3A1vkdoNpPqTf1XkJ7KS75Dn5aUSDTrxhRktjEofoH3p9Rzm4zLJJ",
  "key7": "5dKn3tF5AUhMuCy23GTGic5wU3MBPnUy2UvpceXCmSkA1hstWE3vTFGb5jfwB6VmtdBMhgbrXTdm4yoKZKmVoFqX",
  "key8": "5FNTnqP3T78CxWAUjMFSnuPjWrR3kpYjcEyYQ8v116n5k27Bz5oJibRQaEnEi1XjgXsAo53cravhU9msUB7k9ycV",
  "key9": "4gHWGrxsmCDDHSpCcADmSryKqXiLwS7ED17VB4uh6Q7ecS9zjhgzP5h4dhHqmLNDmZGJQcwpU1mTajSUvVRgYgDS",
  "key10": "3KWkdbkqdD63FsqCn2uJUkxh5Ucp8k6mky1wBUYmM16oAFV2Nku1pwDUUVxHrnrj4gyVhGCYwWurpaaRYe4HaD3N",
  "key11": "4vwZcdJzmSgnrSNQKwB3x3x2pUzvw9BSsZTr6dSwToV3v3t4bmzf6G9xqahS2j4J17Xu3dLpKu8mGbjHAMCAU1Kz",
  "key12": "4L3aRJXWPyC2JCT9b3smBGWXScc8nHyXq1KJf3sAg59xj8zjQFxe6L9byRqCRpr1x5VDNW2agd7MDP8dy8Q3oDga",
  "key13": "a6C3icgMWcMjgMCWfRU6W8Ck62sroEZWM5R9DRCzttRz8jGtyTW8Ct69LiXu7vRi3n6gA8pbRZHS4QoywpkACyx",
  "key14": "ugDkAdqoZVB4j87CVuStvm3fSnKmSz53SLaBvr1xbfZC63XzchxbvZfY1jS3LNmnFeyu1yQ5Z5TMsUdJyyBzxU8",
  "key15": "319cM2ALiEyWRAPjhML6jxYM5S2BAKQz6oPWv9FgaQ8amZv9X1pMaEis1BukkjbMg4s3CruRwsFsKT3VfsYLgLxJ",
  "key16": "kxy6Ye3HNQQQMb7Gn993KuATvwqPFSuAW9CryAuMthVm3dkJej7aJoBvdJUJuutFsRH5AQkm2CEkw7D67oNfA4D",
  "key17": "Lh2PGhhX6779X9SQix5sDRgds7qzhPoKs4Ue67MP7TUwpmuxw6jPDiQRJsivgc85nJGUR8vbYv1WQXvFQcBo821",
  "key18": "2475gKCuxX5hc4Erk3FxJwHEk5A4wWJkpcdWmxuGoM4oBtABFiEj9rvG62no8HvssiaFiDNTyTcpfVANBaQZF4sm",
  "key19": "mothuFcXGuSDkeY9dd16GWjzQk6ZamWfyN9jTQG7HBJYM4vdN9LqfypyXjXc1THNkL5g3RDvGJH77sh5Zbbh15L",
  "key20": "5o8SmqSMi1eg6BjgWwTV9EnEXgTmLn95BvyadtpdSTQyPewzYJJ7CZXV7UUY6gyjRGpKdLaYStSKzWveC2nebJaz",
  "key21": "31YkctwN1fhDRhHvVDk2yvfGqiE95jgLKzexYHAoiJFc5EzJutcjxJ8d96bJz77gKhT7TigATTvhCYBZw3WcPrKo",
  "key22": "4PfRW3rY7zUJsxT8Z9vBxB61oKx1x8C62BC1iYufzrQunFiw7hkHpi3aad8FsPMbAfNxjKAQRQZGDCWakPpWigWm",
  "key23": "4EmxrmHRnAUyaCL3PqTu3oW9zKEz25vpEuF4xuAk2Xv4tEJuMShKTkya5UYtYVmCcKcRHhGkB1ZUB7i2wKeUwFJf",
  "key24": "2XB1f3mM6WukyR8vyxJWkPAGTx218AS8r2jxzYsuDgP1XuwhfqoqgurBkdJoVq49okpHjVDpBTZb5ZKxuuA5soBa",
  "key25": "64djDHkhnd5CwW4sprchv7rfjHisXRgjDLyMhJSTGAvFdR5mASeGAHze9v2ECsBoRhBPhm6VdLzSL4FGkDPCfS1Y",
  "key26": "4dsEn4qembmQT6ismvne16sd1xXDwpnfQbJJiRpX13PoANGg39CyWzidDV5S34HmJeH38tY2cQHEv5PcyY5fWSiE",
  "key27": "5s3aSPmsqBmmUW7au8K33Ujnt1E4HkJAajrgNkUSeYYJoiXM8weZuAQvrPonuktNejPwrP1nw4ZHGDyqaQNJAHy7",
  "key28": "3VzZC8XTH3g9HYkcmyNA9jpdQ2ScTsgegM2BT3FykY7vVUwEyn5pqxrXbddnGw6EDficzmWa8KrT6eqL75rNXRnp",
  "key29": "4awMjwM9PLqQUsboSpL32zhNkKb5zKnKc9ugUA5BWj4jQ9kQYTMb4QcnDt7yLbSUxtvMt8WHmuPiDPXF7mJdxqEF",
  "key30": "3NfiD85GyQg8ZE2aRrSHfanfKA4ZnyKYjdBDbhYSJai6hZGk4WKd2ZQDKH7guzkMtiX2SYctYnB179spZmYLfuPh",
  "key31": "3Q5uzitAQhBXARtmcLdJ7TxHtA1upR46Ee7fgHPCA6TjYbsRHJhh6JjAXX8GSn9roMpYNnyUjao7pMn4G8WdkDz3",
  "key32": "2FzFe1FmGDuTDQJXLyAmBuKgAuEmNfxMjZUHK8o44phSLUV4YJtmcsoMKbsGs6mHJ2a6E1ALoGXtXyYSGxKA4rng",
  "key33": "4ev18WL27hq1JzyczrK3KuMZtuS5anjJHfo2wJGGtYNsX7FdLni3rqhxb48ntn648RWV3Bs6BuXEynB5uSHZdigd"
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
