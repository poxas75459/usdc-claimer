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
    "PXyQRmw6Y6JBRDjFLddLhk3NcrDifwk1ZijfSC2ZY5Lr8jw21KGRdgkE6GhwdsKxqF1Vsk4dWWMhV1G62Yv3GGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tBgMakC6BmBioBxqd8TQm1X85f2fgzwZ2sGVyJmZtZ3qnqEZF3sQ9Q2oTkEk846nAvX9ZYEhPbqwjEtEoSaqgd",
  "key1": "3gavzHcCKfGC2PMwUJY2y6HjX6sqWtpHxjNDEELzMAHVfjxxGzH3qzwepBfw5ZUChYrWsHZ64VSC1u5i2Y1ge8WD",
  "key2": "4DdXsA7P7cfBAsrASGHWmCjW5Xaat8pzd2gWRD2s6C2CCwPtMSjm7WhYTABQPExfqVZuJcJgHqb3iE8CEZsCxmWS",
  "key3": "3FzGziiktc1XJuBWNz6kF4GRZdfKLZ8tEtgz4NMY4b4Xcn4JKhbDjRQxZ5Pkd5QuqvaNowHRfVydhUaa4dxHWxNP",
  "key4": "3AkgVnSi1t7dHMDshEjeXJcBVEK7qRfAsLoWaywihpmi8UC4ZJyTRk88tNK7o3XqfEUchYXvyBJTcpmY9ddkBnXN",
  "key5": "ogEWatN3V24jRzuPn7AGsRWGnxvpjxWCqMRBU5YKQQteady5oTwMSf7DkTZPQT89kuuJA8HQYWXUsEVpVSGtS8d",
  "key6": "4JzD7SLcXuLa8xa8zqtCNB3CybJv9xa89HGrGZ3HzugH76ki9iBJknw1pnnAfXyTSfMyb4WRrSaHCUSr3AGuCAbz",
  "key7": "LogKw1dWJSSBasCPXEHrN1Xg6WS8UBWqGST3mRAwXRAu7EN4NcKmkvSajES4wvvLZJKGd8E6hi3JdA99HcKCork",
  "key8": "4B8nm7bsw2zicVkmuGWbXbRKHVEzBhfSTj82R7QFJaHFf7AomTdhMmktAL5pcNfb5MoEM94YBSVbPzCCzK4WCBns",
  "key9": "22ZQTuTnJNDoKM3mJ4uAVeKoY8NqqyzZoSLzh2VzMhUxqWRPgqRsTxetVSRKnQBVWiPUuvxoSc3TPjK8PhTRKGWn",
  "key10": "3FDsYxYsu42GgdTryMtHgdDECfsNvh8DRvS83cZvjSfCCGREMSGKKRmhAJywuXEThS2Q1QhXDLUkUNvroHBemCiw",
  "key11": "41ZHpAz1Mo1QaAyCqPvEBPxk4HWJEyTbeKP7bEHSsr3NcZYBZyik4cCsq4LVoZJ3ZKrPfiAJVUMy25JMdpCVtGZ3",
  "key12": "2g6rZRVP1aZyT46PFJ2FxkRQbuQrQDe6C2wtpktLUYS7iS8JST4dkEkXYUqSyLEE9BySHyeBwb8qQa4wWAkKcoxm",
  "key13": "53WXHZaDtVezW3NVJoDZNyt7ri6We3mUMPCr1JZm7rPomj3q4MFTLNSJLosCfRFjptT8oPdwk7YwX5ZwyXytrx2P",
  "key14": "xN5mTUuqY3kEgPUKxosuxHJMm7yeDRhEdiQTsEPjbd1SrSpCLQT4CQ12qQvhDEhpSab8XFimCJN4tKz9HJ1rMq3",
  "key15": "4NE8dsGe3shetncqfVF5XnaUKBsNpLaUrmqFH8SAiLjadqEN87xLEL6Li9grZCnqxtbsrrnoyg3xjn3VFy6wjL1A",
  "key16": "54cTVgH5JQkGBV9WV6yyBbmjyip5so7wrWKm5jq37P4fAAXww1jkcuNTwPc8xJk9vxz6DABmUwsECSp31u5oiCLD",
  "key17": "F7fBLN21sRYriPceiftyah1XSUFfqbDKwnAvusVdKQ7qjWTxCawSxFRHjVYTJThfeqGzfsv3gyfkRgCTTzv6Lsp",
  "key18": "56KHivjxhATLepEYPJA1nGE9UZDcakjwa8uyMHpA9Sobumi3suTEEqiUk3aMbfhSMzHtwUW66nCZmP9nrFvvqCgH",
  "key19": "2c8pxYH6rdjQ8rrWh4wLizjFVieEfQREjtNKMQ9P8e2Ux9cQgWKwqCK91L3F3RWrd1WyJrS1VLkmkdCpNekE3WMZ",
  "key20": "2Q4NuRbW66uFZjAPWbzCWgz5zd5Knd7eoGRoTqb3LAY55fHpu9jhLcf7kBGwphmNSZn4SMvFA15GEgdr5HvpC6bg",
  "key21": "VMs6XNKLNHE5QH2KgS9u87KPinBYQnKyRkg1bEKZ1indZSYwb89RHaofGDDWbjuVUQj5QErCfSTSwSBkd8SVK6S",
  "key22": "2PTgBQ4Qm863o4yyYjXUDqa8g6JV9skoNWC2H7Xsi85BHfs4bFagcaU35zya46R6ovBBQfxCKqaNHx1Di7NEgjzN",
  "key23": "5SDXu9ecZ2quaWjJvCf7gQpq34QNjZfoWXg63KbzPV7Fo9yn7pivvFPSFr6ujsP9Pa6V6TYaSCfwwgewddwErwcJ",
  "key24": "4iQqEbZiWvj3v2EvzMzDMwQcF3DrA2RaeSS6aNpCcA89T72dxgpkeHJo7qSJ7D8dJQTzftd82PHbm7SPX9eg57Ni",
  "key25": "C1jTggqTV52Zjgu6NyeHts1r9xGDdB1Bk3J8QqqpWtequuMimUzuF5SUGMkcZDCYccGGqL5mU2RXg6EEnwxyWqn",
  "key26": "2fkTPdHXeUmAw8RyCnbWxpW4msmeuhVDe7S5QyqgeuHtXfN82ZUZCaAHNVTSsUYT779sT8KF4zU6rU4RoCtePapY",
  "key27": "2V7i9mPrbqE8YvLrB7U5i5UCKRi38drZAnBPkkFUndWY8kFsanxhccUP6boYd2oiqfFrBLLBKkPQ9RzZjGSvgKUP",
  "key28": "2eakEyjPfgQA1s2k9eMVeQ82ZMy5nkkgMZ6wbNXVPgKhEX5KenQ1e9AGQMesYq5nyCLvKYPxXcGY8v113wkDSw4g",
  "key29": "3K2HJpWhjQpKmUsX4ajiTtkPGZAatzTvLU9EbjBz81DKKJRZttWpqN4xZHsJT92jvcDPaUYGyWF9cuiZgrq6HtHM",
  "key30": "5x5ph5CcTN6mLDpybiYCDXPfXxGGNqHawogu3CtepRjZd89ArnuGSNNEgwBexErubVTt1zdkaeYgwtAHAgGJ1Tij",
  "key31": "4D5UvLubq3uaVZKmcxSQvuBXy5cWKBzonPWeDPFBGeFTu78qgGLwFoNNRvWgsKvUsjcVF2ph4qEQgUGhRB3xBXa5",
  "key32": "2cyJaBbt2FdCF3WrSK5rQThMJBMupUmkkNJPp2rVno6kXESb4Zu36cmxk9bNtMfmDnzBkTZJdAgnd74xkfgUrNiu"
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
