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
    "yrKig18io7Ui1FcobdKDgxPnBKo7bH8zTwzNG7ScDNSbyUyUTCFeyNMVkaGzcRDMgxcsFtvwnRzQ29XjNn6JWQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYUfzYCYWMpuGvCfwt11wX9KE7gNEibTyEA5NRRkVzkwKEsbSTMwii1xkk59iBAmRqpcAxqR3624gsL8yTwJqZ4",
  "key1": "oq8DWcQfWktMGa5u3sfWW4cCwnoW8g6QrRYtm1GDazFTEER6eiTYNj4gi99Mohy7hYLNQxRQd9bm6Lbq29ZGHPt",
  "key2": "3yhFtRhd8FvRyWYdwaDSotPGjiqL7xcdAk7MqfcA2A44iCNWhLbu7j1KLH4aj9YJHkrA6yq3JCkSMZzRc5wwdSY2",
  "key3": "3j2pFrjgLL2qht2bz5L1ahP7hxCpnQ73YMWWYHdJzJR8jErPTkSpeHLQ3gZdyLB4Md3DbMqwvhDyu8kPcgBE574z",
  "key4": "4z2o1x6C16nbTUQwMn38uppAYMoVYkTJDuZYkfhyBn7iGWP4GhHX2HZM435J7JPoRevpVynPGVakhNZ4oNudEre3",
  "key5": "4fHDkRyuKLN8uXEmFonkmTRKDTcdnn7zYVgrt6cf7cR7CUkVmkrXALtSN6PgHhX5om5ngWbqmoiFjhqdYn29z2cu",
  "key6": "2q4ULmMDFWxvsDk9gtEsh5JXVG2XFMpUsb6dxMKTabi3euNAVzu8MkchLuuwjWmSjM9So7XoCYTC6dSXVqqkZorq",
  "key7": "5BJh5UZeXConmzudYY9emzfA73QscSeR6oFEky6CkmpF6cSxBQcj6kgHWx7FEr65siaBx81VukEpQAG15KcaMSfb",
  "key8": "3ULUywMa4Ai1pvpxWrA3mQqc14JpS3kGFWfvoickTJ63MPzGRVF7xdt1Z93CFEaVHyRhwLBysv6fBvh5s3RHayq2",
  "key9": "46zCswZSqhMAK57NBuTKniK8QDyLxrhFe4Mp72aNmtNi3Mrzwbuhfs6U7aFdKRrNeRWvM6cLQNvimgnj6ZX4u2MH",
  "key10": "4c3FZDFKCXVvM28cv9hQR3QdW8MTkJNtUh166i1JsTQ8dmwUMG5JyFdAwZCfRLExQJHYmzJs51vJ9dNyfxVqBscn",
  "key11": "2KyoHQKtNZcnx2N19z4ugxtEhJqR2EMVpc4FnzVAVbJKXoRMhjMax3fVNHxhxEoZP15mUAio5DKoHEYYe1BH7oiv",
  "key12": "3umVoA6aVGZAiEfj2dshsXFZVqs2g1Qrjk7yTVqsEhBvWxb2emTAKhsuWcrJR4yCd2LrFizJ8y76B9E5p7ABY8kM",
  "key13": "3FF76kuPAQGUHfPdLNYg6ZAmvuSPEoFJKd4JAZ7qRUjmXcpGfMpkEbR8ZseC2qbfP48aEq2YA6Rze35JuLhmg1Ks",
  "key14": "KkEHWq4MwwMVdA7cEGxMdHxWsWv28dBk2kAK7fqau1u7CZc1dJRvufy11qJYJhNUXRcyzNYpk7DqfQpYBBMSicT",
  "key15": "4CXYhYUYN69qMx43CHpWEyLLEeiyYHmR18qn8u9ydLh4hmc3JwQXNXT983H5dVAAXzRcpEQSKpcG3LRYmAVDcsMH",
  "key16": "4hqmk7LvXyaUuG1bmbdiq9NFpBTmDDNRpyUFoskiUpE2Yzzt6tiQVrV1mbbPBLBt8ZC5WakmD9qhTa3ChvgUMi5p",
  "key17": "2PHQz35aQRToNr4zaE8PARnEra4kThNhDZGaMffJJ3adN2HMAqDC5yryLwDfoxFn5PTf3tvmVvv19UNxhefPJRNd",
  "key18": "3AMJ7TRpsUH9zV6Q65W5bnGrkbNFb9kkkZRuRXPnN4K6GVDfVJSokaqGgEgU8wsg1rjvWWHQVvyz9Q9TyxjfKVWa",
  "key19": "3z7FaXMSj7veLoF8rBC2sbKBZcyTq7UoFmqGievPHrTwFJGWBRNjS6LJdzgGsnNw5XK6mgaGLVqb51sgzaHBUpCc",
  "key20": "XUvowc8anKXrs1nr96ZyEDxdqXxw4nCD6PaDReQfwiMs9tNYfzSoiatJtnCkT6LBL2JC6TmnGxdjpr15smSoV9P",
  "key21": "3PHM596rfd3SihAVoUMo79KJsQnurWvSNR6cuB2zNpFLgZAKRzHYriey9875k6ckP8fWRjfEXn6Q1wRa8Y4oxoU6",
  "key22": "EAdfQthyvW97ADRr7oE6S9RUMFpGwbUnJxC9yNKJukg4S36dqUedHbUs5vgPTH7G2sjBMKVW7JY8yJwH27JzqYq",
  "key23": "RSHZGRcPFEE2dukMdqwTau9zpawpe5HmyEqBDzuQdHF1f2EPEW1GHabnNYWsL3bFsEXDh3Jbjk2ecYHATFhyxav",
  "key24": "RTQq9wUtgyHij1SPnZfXyKTMyNhr3iMfNkbYiwdFdEGCefFJ3Y5qBRtwCNFrAzfvvrQjYmFhrNvPihEHgMN5wd4",
  "key25": "41TykyHnygWbgDeusevkt7TRBWoETNxjitNX5AqCXjQTt54VdhP86YFbVkJKc2Y7YaLA2w9dxradzvSdDgCY7j9r",
  "key26": "42CexDgAZi4GdrwTEcNXF17Nw5qe14G7QHcMtoNMvvzqxZQYVppwV1BKSYVZGPYbsZVGsRp33cXnMgvqN1vu53dh",
  "key27": "61fXjDGqyupE9NeUDhZdPSgb2XSomvyaLyt1aJVEKX4Ge4eDttCnm7nJdh9gsuxZFUNv9z6fdXPVAvrYohKznjXd",
  "key28": "5E5ZqBmns7QNAfGcnmeJMpLM8XWjrCx3fyKnAzjLjE2oRYJXw4ZBoqMsguvZVLmm71ypihwhKAut7erb6UZKUewz",
  "key29": "vGtPS4nqJWSNbqPTHpS9QPkZzhs7e2rcum5tdJZQHjUYES22AVevNSyaKg6L3LyhnyTAKfwbu7TBLJmdLMgWhbP",
  "key30": "4jkhB23YcpL2Fru1SW6sFJfeHnx6JLFtZcW8SjzqTRGYKgU6U6kNohANjeoZyNkF7SWRWuPHVNMnEVxLGATYKdW3",
  "key31": "53HKYtbHSp5NKc1WA7HYTcytvcfrdtKjuSdBA4QE4qJmye5mc3fkWB6hmEXnXATVPazonsYFp8Vi2odpHSCQwcab",
  "key32": "5VhkXsNq5WGHrAsNSKBByK72YhP6GCK1a8mroJmK8uJBvruRdQnG7i6G7kH3NUbxDHiNRrz8tT2cDHvHP4xLreBB",
  "key33": "4thsDhyp5fLf89uQ1s8pzY8KqK8WvtAXUs2KDF5HGRYgKdN43UxeAcZuMPrC9oSLvpeFUfeH6psja2my3BrMdT48",
  "key34": "4Q97n6idXnxDJ59SGKKhdTqNBNyhySd9NAdzwe183QQdVtWf822zpbmfzCRjtLtjZHCMA91H7B2p7tor6f4TNjdE",
  "key35": "v9J3h3gmW6KYb1FPZRfQT2SeZ4ziMb5rm9USvANA1f9w6w34qaL3fdEzWv43ar5XBGiqyyXyEhig7cHgGKmZEfc",
  "key36": "3rGZFmpk1jBzs6qUY2q4Mz2hr6eW3mhDZ3JWaraXcFuoJFCdfUbHyWN5YA9p57RWtepMfQu1Yf4nU5sGZbzMQo8n",
  "key37": "5xUydkimoL8JztU2sito4oZAQFRPC2uPPQ9sbuBwMN7XsQbeAL3gxvgGCo46zzrjVLAavXWucg3KCWzMZbRfP4cD",
  "key38": "2mcKuJ7xuKaP2xGG3c8SFqBuA1ZcAt3iG2mc1efENQkvVbqkA3fAKrzWojE9UskSrcXUrSUsr4YnMbHXcQWsS8M2",
  "key39": "4oNy5ZrpHwyYTN1hjc4g7qoC5h3FZ9da2oERKNvm66QsKVvNNyaqfwYieeUssbTcsoC85XkMcf7ZM65BFgjAtAeX",
  "key40": "2dsWN453Azg6MPUdEX9DqSZ9dVKnSSE6t1C5J96f9341Ck9nbahpuMWWewViVgsqawfPQWW7nMZ1QrKG8cXf5xnG",
  "key41": "2qThFNDkswRSjeoykGJuyrzMNVAFzDAXqwtckkrtSVEv7vsH3pvL1XTJePo29oj3gWuDQeTcPKEbM3XrjSkXZ663",
  "key42": "2YZMi2drttTWv8rwNeKcuc5WcrxS9oh38JAgTMNKcS7YpdNVSHR7xbRzVz3ikCxpeGupdLPNymQE1nofsLR5oJ2u",
  "key43": "2o5WGRosAdy9wVaRn1LpUfeyAwLKR9xcRhYZzEFfVLhGCWXDvVVvDXFjjGSbQ9s3kSmSvuFyzG6XaMETbiyz5QZB",
  "key44": "K4LEbDJjpcVh6sjvzeRmYZ8fZF6C4VsCEXF1XLm6W5jsfFj3t39h2mk7JzTBGmcvB47GoprYSTYsPPyYrLFeTFr",
  "key45": "4zuYzwiRv6vbFgZj11iqGTX8BKnDuSPbCF785t3tdmnjVgC7jbcadqutuTEUD2qwBneY2dv9VXMg5edxzWpWRZkx",
  "key46": "5zhkcYZCsKLgCuvSvjqKZ2hHyntMVy5rvi81pKYBZcm8rCEPgvJyXSTHaX6T6XKpNvXgJCitNyRtC2gWsXSqxjBr"
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
