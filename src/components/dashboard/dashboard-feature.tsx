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
    "4mis15pje3S8HMoB3mEqHq1ASiMrKetZLNZ5gLCrK28psGEujqhhejqHgRPNp1EKDnRiaEToFgDinarKBWzZXVKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eRqJZJPz2gpyBzytAKBZrRqfe52Jzp7CJEf62AoyXZZqzLD4TaeFZSe2Kae2oefDkCNjgPeJwRxE114yf1mJpU",
  "key1": "5Rns6BbhVcjXXQGQE1mQjjLBcRedvruna7WxRiuoGn8famzxz7i8A4u4HYKpDPrD2JLBUfSgwiKBp3fpAEbcQEAN",
  "key2": "4qqwz9PaCVe3rXhGGBF2Sv3ycUau7JP2271rbbXgW1iGBqVQhKtE3KE2w6VHePuv3rZfby4PHz3RFiBfGc8bZFrk",
  "key3": "27Per6JPhKjAKmbRdfhop9yJng3cRwJNJyfs5oXjsaYwMvASSiUKzzrCLSYaTg83WWh9DBviT17JNLL2boczMVKA",
  "key4": "5ATytvAyEuwn6NoDbJ5BjfjoDDzBrPX8AxQYjXP1JG5na4CqVH4Mf1w1xLB6U478r3y6ET6xqhGwKB2kRBxiDHjz",
  "key5": "65LdomEr4u4yiUsy3dJNGSfUz2a2ZLWtbVWCpEoNwJUqXijBz35rwwkRfBE6ki3ZVDYvdWy1oqa6LBR3Cg1f74bT",
  "key6": "2r16UpoMcJneUGq3dgLGksDH9Q5cF32Ev2A2wz3KYPPnL88AaTkjf3diGzF1GRvSZ9gQk4CXqqd8zWwyRXpNGbCF",
  "key7": "4ctknzoGoSSVPA8qtAokjaCTyxA3Eqe7LS6aMmMV2rob6mxjPsVQfDtq61oQq1VEhC7LBjJposxooKhdrhPrBqxi",
  "key8": "3gZm64RZCp12jtmEtYkNydUtCTBTjegqSg5RhyGPqTFggM5TYGNSCcwizog5dvYP3x4WrtyANixWACJAP83kjKod",
  "key9": "yCJ7iKYy9faanhugPozVSDXnUqtdKydftTHhLBDGoxxKg5w5YMyoyGggj8CDFBvPju4QVHLPZgNgvg16GHQik9h",
  "key10": "4YKJHGAbFeQcj8WfJkiXR7kBHTuCDSun2iDE2Yd6k6M2nCMoumg4fBMQf3dsEN1LCW4dbi9obwRZ88696Zbj7SQ2",
  "key11": "5qrEKwc29whbFrKWjrVUw3N4s2qDoyusNgKXSLtVRZzipZQrS4WTxC3AANG757A5MbDHU7WgSQ8gTNzPqQxKgEkz",
  "key12": "3RSs4FfaPGo4DFckbMmqYkoppaDQvnx6SpmuaHAiwpDHdQFchvidHybZ9gsaygdUutFWbUNxe2Pp3TdPJb4nrchW",
  "key13": "2y5bvR4S6X1jmw5XsrrEHFFMejGLFM1URzZaJCe8Qsu71wUpbfQYdyAqbTmLqWd79wPBq35RFYEjXYEdTBUp4LMX",
  "key14": "67h8mdvMTz2vy764q8zF735dHmxVsCDzx5tnSkkoowdRTuM8JeKprYScFmF1frwEUzNH2jMbn4kMkRaUwY1hubsG",
  "key15": "4ChLPi6qYioDGpzkEoA5jPVkixLcCJjrsnhde9EPqH55gdKUsn93ritHFJfwRGgRdbxtUXPKG8aqdEUBSHqLYrTE",
  "key16": "anvTkMM3jvbsZLpuoHVxbpqN9YAmDuFtREpaJQ1tBRXK8qhewj14DNrhHMhjBKTBCd1t48LeGHVFVsrFEkBjnvs",
  "key17": "5iNJGJNj6ZPHseZVu14fXYXTAjSrSskbDjqyxSpqjhzNSBWZXfrLVBtiQEThshjzgfwxABvXzwgmqrsJwyw5ReW4",
  "key18": "5oDRJoXY1qHas3i31oSmfsHhqgQn1TFtMY66sapXARDTeQBqtqX6JYt3gJJBUMnC6Ft5wsbQccCtu5pdoMtypAxi",
  "key19": "34tRjSKfpx6XFPAKosMQLi1o5hXZxTJQBE2yGqwVgbC1g9cn4WFtLrWJGeTTKeSL3zDm5n4RBTSb4QVUnmV7cNhr",
  "key20": "3nD9GwdiT1mk6bPN2LBEysXTQ8B6kn7HT51EVMThw58YUHup6T7NxryFRjQgzfthyuxpfjoDupJusx1itRNzRW1E",
  "key21": "65VWgHcCvm3givqyyxjYoxvCKtaeADu77merVp3BvERJZP1RqJoQx6FBt9Hvmw3VnJzmnWyNSkvMXafr4HETimH4",
  "key22": "jKYotcp3VZ17FoEA1pWWzrxfqcfLQ5dzbDE9ULzomeqLT11hFtG4UKXFCtZ7Mq3tHe4Fhto2gMrp3DJEjMvSNct",
  "key23": "Dv1ePnG6AJAvMxTcs8smH3df6nnaAaF5s6toNrGZL2vMQk5RUr25oAnzYDUEWMFSy5zWg8Ey7G5RMT6S5Gvm8DQ",
  "key24": "NLR83hAsx25nk1AjdAuYJCwNkEPfzyycnGmLA7Zgco5efwPJHxnBP1ZWAttzLiCNUYDSUD7hBmwrhYd9WLJ3FNc",
  "key25": "47HpcY7r6iFegdX5ws1XLBLLsDX8ebNbb7r88Afi48PuAkgbjKA5GNXo9fk87sWKW61NMXWHDnkfWLveRx8ytmhD",
  "key26": "35eB18pX236RtNhhtTx2YGLN6zRETuKEgk3sBE6Uequv7pCvaBc4q73isANLAf4ehfnNrCbLCqu4uCQmHBEfVYzp",
  "key27": "4LJBmoFP36mhoUNQ7Yxg6JfoB4X1SSQ9g74fzVadhDBU2QVjyN81Bb6K1eVw967DKRbNhtbBGxy3ckxG1NxPyh9E",
  "key28": "5f7en87hmUWJFhAi1jE21LCc9XW7kgbUTPtpL9pHiGirVRjmeewPjepLXKrz2t8dagrwtsPyJw6TK53fB71Yw9fk",
  "key29": "sZurkJrEgZNDSoUm4XyHqwSPPatpRArCQb76oT73PkEVo83Tz5aqkU5qUFGnP8JjZTGDBL4sDEeHTB7CnKM211H",
  "key30": "5QkbHcaugWY6pyesjt4yYJpio5yixyhKGNqiFaLZi44HTtFx2riPZJ6cwTG5H4ys1F1P156chRX8x7sazUR3Yhb5",
  "key31": "5gTZMzbDTHiKuXFBSCW1XsAhLDxXMbJSBtGY8qRGtfy7PJNiKrimaDApX1JceT5VYKF38R7zKgddqi5A4gnCAPCd",
  "key32": "5A8xuHhLqExHydEfkUCZTbTH4bk6VrE2X7vhs3Wb4umKhxpXsbnLXibB7usw7n5dQ7bZtqN9mFN5jBCkS9aqQi4L",
  "key33": "3UvDC5eqgVEWoDNtZycZEGBhGK3LXiW2ioFWy43GiMYUKNyVzehyWNCr2PqChRsAR2HkKvSAfjPWPwmbxzLP7xZw",
  "key34": "3c3MZ7Vz3axauMRVYDjucaEu7ZMrWbr59QNpKgUGJc7GPz7UUm3JKi6GT1zy1ymnZK5vTGxifh9owDE3Way1Fix3",
  "key35": "3tbxaK8iM37icVr2mQCoHo8cNioYBp4xpwj9TQacadcEb8pfJjkEXUryziEAcbHZfaMr4nwYaXGWd7UZdr21EcPV"
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
