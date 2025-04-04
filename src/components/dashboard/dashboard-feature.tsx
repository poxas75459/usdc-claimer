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
    "5sdiVwYwrbKiUbWZ3nixgguvc4YR9xdvbUL95xn9n4Chxpa6APPc6u471UwC8az3QExWXSJjQiDZ6zaeYixgucyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjSTFuB2QSFwa4Z8PYwXUTa2s7gTH1jmJTCCHufVrbK5PX9fxBxbhpT7Kt5R8grUfs8SSx6CFd13RHxc6XLKkb4",
  "key1": "4XpBCyaiR8riDMiFVH4mAmPPjVQA5YmhGnSUnPkx9xMEFomLiykuLBVn5bnH2KogxqoN5YujhnW6Cb6PUUfCJJbe",
  "key2": "2p3Nk1ptXdyR9wnxhRQPfRSpKwbcZBzTpPFJJ7wR8oVKuNAdQTLNyTjkMgp5uXyAGYHRu5UBXhAEu6dSLYhbgm1P",
  "key3": "YtTBWjRNTYCqta4VW4zvuCLC1QVAZK6UpLYAJhSqM1S75GNAU1ebjiBAtYmNWYANsPzqYap3BfFnFh7Ys5F9FCb",
  "key4": "Lzf8cTC6DNicebeHnvD7vyhcyJAJNQ3hDLHFZ1HpCCoptjVjXVScH9zrst6RxZMzdLVsaKDN7HazNBUeYpUrG7N",
  "key5": "aD4o4mFHzcDgU7UGJfoXYhzLCUGy3SNUUviJQQLn5gT4zmWXoNRW3Y62KrezCqVGN9gmJDFQxZPcLwRjsTjeMxW",
  "key6": "54TUcoJbKZesVgf1StXGF1zbBx81T46ezZKdR1HCgD1XwpEGmHvuqLu9Apg243Ke5tgfY3NTaBMANkkaN6ndBX6t",
  "key7": "35cCapPWGSDdQyLSnJgpxqCnkef6utyRVXPa4L5Fi3QjBiupp3pwzEFK4zciKrhiphzgCunGhPTAeoUK6pfKyWfX",
  "key8": "5NMT1ksALqLBwfp271T8fh6U7YjpWSQeFd9JyzagQTqJg8Lcje7W8hbNkvoY7hrVE5BEkZWzwCHSzbFS4yPzqT9X",
  "key9": "4YZTDvdyfhHUdER8BbDXGLjbj9GSiNY5fa2NqX4fgmUZ79DZSWqbVaiyWcRTcKsZk7Yc8DePKjvJZ1W3ri3RphpX",
  "key10": "5gU2YUqLhU7W62VdX89ARZDdnmQDnexR4557WdQHBJibLH6dsuiiT3Ss5hfSvH6nmLsSCwpXxeedF2QvYYkuBg8g",
  "key11": "3tR8FxbAfQcHwrYBerARkJC1h2ppaNNAtPBc8x79rvXppxSqQ8qpBCAMXa7Yy56htKVDUAx1zGYsgzyYT6kbN7iN",
  "key12": "2rYRjggbjVWyX61JNYBSizVzaXL6y1zt6kiqQk3cdz2kLF9PRc4PwSHANwypE1aASAsmh9Zaq51kzQtW6pGDgfCC",
  "key13": "kXEsqDxnmjBjy9GLkMSZ439o8PC4H62QEtRrBiVQGiLPU38mYSrCd3gLhYUYZcvqL52beba8DG2TePnBk4PzgFY",
  "key14": "25iHqrUaDXyXVHmPKwcD9fWpBPDbnRumCGEVLgdjsLhX5HUso1KofqTxuFSmcUWDcvYzpL7oiGCYUnhenvRmPo8n",
  "key15": "5p1kou3ZSmrd7SeTiLhUyCfMt4zcSvQWUp86kGDa2XyJ1w3DKHzCC5Rt4xAatvxxMgfqn7sFzV3pEZbF22pyLTdD",
  "key16": "3UrLTNjGgdnj7JjF2mEX4LpCfD3xnuWNJADti4D8TmxoetnkVo9xK6eYSLSJKErTqndMPL7ydKWWaC58F8fJkF82",
  "key17": "P33B4CgHK7Lb31hM4EreGGrd9D4DwFJSKsZC1DNthzgg5BhUugBzgNkdotkZsjnwp9zU84CYVh7MduFtA21r5RQ",
  "key18": "hZyhbop1PWyTVnDD9ZTW3HacdxFFQkSxzfQCuUnaoMtro6srmXMZnvFMmFX95D64wL5iHmEefzhNktyE1LtjLrs",
  "key19": "4AGnM9Wp8EcLnuuh4RhkUdqcS5BB16mCt7UEU5r46fqiVah6H5Y2s2hPC9SSH7hpnxnawurMsUs68j8A3C1zdEZE",
  "key20": "4tCnKEzYVqkUP1M51Kji1p8h1BBXFsn5MDVEq3ob62TDB68x7pBH1LakBYmXSgcsnjRknAxsBxkGoCStcXS8bS1d",
  "key21": "22fBNj2uLQB8p5Kd9oA4p1rFd3ZgX4ogZ1sGq3BzrjEb2qbLr6qzfQaqU7TQo6UyBXqfukkaCZhUGCoZB6Qcz5Q1",
  "key22": "pz3BwJpq9nHyz1CAAhGKXBhaMHGvhW5XvavEK6h4B8v48UFnsN96d8gNE9rgvxvBkH96AihtmPx59W2G2gRSioy",
  "key23": "3FcjWXvMzLQ8i2yGftf2DRKKqSsbrdFCa1LE6icSnFkzmwfQPxXfb2g2SNoESLNrhjUcVWUBGvQJt9gD8v8Fu74V",
  "key24": "188dp2aSCdRzuoDvuU9XEi5o5S4ke5BnpcRRwnAyCJy6a4pCLamx5UoNpUW6v7A4LLMFnxf9zg5F9CzYyJLdTfy",
  "key25": "LqtE1JrzpCih3rCzzANP4L9UVnJ2JSR97d9kgLpYHJD6j5QZv6DM27iJ7RFJCrrCHPowSXJjsfSEBJ3iTrJB9YC",
  "key26": "4uhv8hNBig2Ewgvbxdx2wA2xLLDoG2Beq25F4bk7uXpJKqTTuE5s6LwBRjgrQi6qoa3N9GM1VJdtTqHF89Kt6hM7",
  "key27": "2N77Z5YqDZjKWkCniLDeHaBzzs7RxXegSwFdrdbWWC2iVAEQnK3LJXqNiTB55oJKJVUBdsk3jn4nSpVaXn4MDSsW",
  "key28": "8bZoWHBi3n2d3X5XCtpMon2foAuXim3MUQ9Gg6GTu2ywToTpYCQkZDYSoRbEpvd4UXDe4wU7tqrxbWyjNU8YykF",
  "key29": "54XTe8jvExPBVbQcbAGJHcZ6ixo1SKntL6xgCojtV484BXHLbWEebGP3eukNLVMinXt7KZFEUSV1ScQZcRcZT3CN",
  "key30": "qkx2CRHrJskfthFHwpBiu74XqSpC4pBArrP1XFVZjjonLXcrEz328mYMxzjEvMsUAwiRD7VgCJFUKd7aJkUhpYw",
  "key31": "2kpbc5ubaBAKTmkXLy4SsUktkStEq4t2oDnANJt5enNHicL4xAWfJ3y65NrDnJXExmBVKNKDQ4PdoJXU2xMxYEF5",
  "key32": "2m1W2sgBUwrxDGoukU6eVKJ4WK3fSTm4YRcxB5RqjitY9ViRDcrwEjVdN8vBx5FSy3swQNmnmR6KoCsPQnveAjYd",
  "key33": "38PLPzvDxzHpT2wm6aj39bzV63vaYUPd2ux4L1FjmzRKRJZNN4KjmB3vyEhZhrXUb4Hsf34CWNCM9TksnksVpone"
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
