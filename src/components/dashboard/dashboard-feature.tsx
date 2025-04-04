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
    "X5zKdyYvUr2ji3cDTX3sUZHsMBiLqsixEprfFTTQFaMcA1Ezt722RswDE3fU3YAHTbqkNYZxQq2AxBLmgRyskEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dk4SnpxJbxSUCRGRAUoN3CXKeBKpZdggnyhzbVof6YG6N342Ykj8DNrCR8vaTnCBnLLBEpnmNj4oNJXgHuZpAJf",
  "key1": "2Cx4DS74mgxSZm3XZzA6BFxtVvySpLr7PwJyhDsiEMjgUbAkTDWE2zkoQApEXfhmKPLfCgjDAcmwdquuccKsxuwi",
  "key2": "3ojj38ewr4EsMBV74ty6kYRYAZ9RhZfWVP6N5qez8PsdMq6d9RJi5Tky8ekBBBhhS8ii8Pd9ojKk156yvQP33q7s",
  "key3": "ztmKGaismdggZFhKTX8teCkyZYaDmFrcUTcJf1f5mYmgSFDe3wtb6m4iNiEUhYkQi6P73fFPKvaTuNNMG9SswFi",
  "key4": "2b1KkFk3iXerN9LjbZYwP7NhndZLzJijm3xWjr6avPdWUQWoSy9f1GU4JFiJmF8BFP5nVYihvn449JWqTQoprvC4",
  "key5": "9yYwDV1SRdtuMPqEJAcDc5hDEwjvKYRPkbnBFBvcEmvdbmmMMNJyFvdWJFzfyS7YRsJPFJfuJT85y8h9EygRGGg",
  "key6": "3CQsLed4i7Ltnx5Zn7aSn1JZzcgiw51RzTwkYwPiPWxYhggYGZRKjnVqfUY61uaJUB9VMEVgbsnjVXtzjqWG1njQ",
  "key7": "2vuu8M97ZDbMwozwhF9R6rmfMXEM7v5c2pYc4aEpZzrpgpVbGYqNbLsoExHxxEqFtyJqhjUGbLWQAGy3n8WCzMMc",
  "key8": "2nmK5dumWBkWdk1CTtDfwQ9pRbMAeFFYp7qgDvrdbkZShi1Ge77MaY3CCMzJqM2mMmZ9Nadsf4bbZCeuKJ53NMPW",
  "key9": "5FJSS5ZxTz5HDD8QKLQnqzaGgPHkmzZv3ZHTT7J92PrB44PLkndJ77HA8QjsVhF1cDSfsMeg883BAFjBwkoQGHAP",
  "key10": "5o95e8cY6KooAU4YrX9cRMvEAAVeD5iTCXnDLgmYxxd3mE5eBYFpmarRcqvW2uVqtNZZYn8MzHWKB7yyg3rppnRZ",
  "key11": "5uX9unGQ2FPf7tapdzbdB1P4ASTicBR1K4PKLJcEwM8jqxrZb5tFbYoutHP3MfCod4PMq7MGDQoC6qt4EoMZf7s3",
  "key12": "J2PMHN2F5Fv7cY89bmQbuzETN62Xc7t5xPjkxjGW3PR7uLFU7mex5Hn8LKDHfYBLP7WyNXCka6WgjTJL2aswF5a",
  "key13": "uYQwk6goYK7uPcvZg9WGTLh8Zj9ULkmyVksZaBwkhmE8wPVaEo3ByLdbFETVs8ejR3b9btHEFabiWtMLS2ax9j8",
  "key14": "4VBg1LR6SYQgtQkZnpByvJxQGTtv1hYT9JfVMXekdY2oPRikhcYjcM2kMVgYDi4DgLnDSexcv8MZfNMBknXhRfDv",
  "key15": "3Pgd4hxuWLMDmqjnpwGCu6hsFtrusGvXmMdE3gm98mFwoKKs7TyyqBkmXDmAC4rY5HdsDLBVoGMCA6qtMdnnfQyY",
  "key16": "21ZgPxXUoNaDPKq82LCGxVgZowENbeuasJtEQ9TrataqFto6fYkBjEzymgve3KH462d3AMnnqQDLmUsuU86Fhg5v",
  "key17": "4yGtYtKCM35R7d9AWRV1h3WzRzpe8GSCzAg7buDgvFNpPVPkkWxwHa4PN49DRo2qfVBgTbKTDZ2tp1TS8aKU9Cow",
  "key18": "2bJreJiwQ2tCfEAo6R7npAyW3tGdBfSfJATGARiNS2Qm7sXykSwTiezF9MYcg4QwT562wS82GpfeqFV642ZNoCif",
  "key19": "28oRPBKnwEscjVxdTMSjfuLceJa3v3qSxNVqLWDvUMkJqo2XdzQ1ujWAf4ZPjDDSS1P4cPCAGCkRrgKuRrujmZGk",
  "key20": "5DmZYwB4VfZExXNFaqBM9Y5gjmCt3eMbn4kDjgzrEpiZg7y1fwL1zLUedHFizmctdwVsZRvvcHPdZxRnF8absiip",
  "key21": "4sEuDVHpgoafSwTy9Gjj6kxQRazAGCcHkGnebz6e9hqtwGb794v3iRjPUS5tkrFMaWMiWj4dPyediLTWpRR7yQZF",
  "key22": "47PfHrRKF9E1RiworkNErVT3k1yxiD19FWFNCTyK8KiM4P8n7iMN8TkLMzYr72gHkPEZdT5REK8WWYgUnB6uZExb",
  "key23": "5PPian3bDzd9gh9c7PqtUZVC4Cxf2h5CwQ46DarcKMiZmVuNQbQrg6SceHCG4VPKW3SSFUz4Pe7Epv4YToygrNhD",
  "key24": "UBk2wz299ZgtLxx8rpiLDLLHgufnMUj68xAgP8NzhSXxuCsbB6huZg2uMwC2MJqSKTrddkFV8RsnFzrSsHG4TBP",
  "key25": "2uhGP1TgGymzASyQ6LeK1dUL8XJePGGpVu6CTZmhQfzfQyNJQ6RsrUaAYzmtCqDuDB3zxeL2dT4eLdgd9ccKgMa5",
  "key26": "HDvTkScif9xYjfMqGTNPbdFXb8w5tgq84CbL32tCmLBnLFtuFZ2QHeXW8StADb4DiU6iDfSyt74bzYu7tkm1DPK",
  "key27": "2Mw2bJBtVWKrP44NaKuvexaqhtxebeD2uRVS38Qn1BxJvJnvegy7C1JddGvpmWLTsepsGpxWAM9mBYcJTMG3suEW",
  "key28": "5vznff4dPSW8756NzfrSBfeDWRPLaDe3hJtuyehFj9PkKTB3917ePYT1ZAwKr1LUnLMoJQSE7zCPPJZyViNM7oSJ",
  "key29": "4mWppBi9KLrgpUnKv3XhxnLdqRYTfUCKctnVSFUE6bntgpEmpxXb6n8YLi9Njvzi1BFEhot36K3dGjeKCuumVFUv",
  "key30": "s7xryCCzGsHFCfxR5J7ZXzsZM6d3r9tpHEfCUUeLPoGPdPsVTurjAj1EKAGbUGg1HrE848vgzTz59o8r28LeiyV",
  "key31": "31aoaHe9Y4oj37mjo8aBUeFC1c8vo1ZXSBf8qhtBQm3WPcuGhhbbXZuy5SUpsNyTA1DExR4frkqrYrZr7i7HqERh",
  "key32": "hV85BgtBqzoLACJpSbhtgUVZ3zPFdFQp9kty6GhBTtc8J65sN31UApRGqKmGR88if99fbcmJRv6iCVUBy9sTBwF",
  "key33": "3EsSo3jvC8CbSwarZLvwS2e7jPMLsrtEp3XUUzoJy4CTGHep1D2SdZwbNZw4HafKnpn6zcd3LvZEPdMyU3zNZrCH",
  "key34": "hkVUTPxWQVS2jJZdjGaQ6mpVPKZ5ryXtrb4eVhCRuoQKyGXqH97KMFZ5hisMwEXKRpLrTrbAkQESX4qY7fhtGNf",
  "key35": "5ns4tinyK7tdsnkfXvCkUPg3LnbnqTTWxCexUVHLqvJNepKpNx8jwdgLsquU61pEzeQS342MbC3KcXBVTFTtSbUp",
  "key36": "U5BX6BVMziWCQaXGQKW7xbsuqMsQR5x3V3rdoWSGM3VG2HYC1Y4C1ReCut12xS3WvfYoatrtY3WEXZhp1y2tGXx",
  "key37": "3fmzomqRdkXzXW5xRiHbUugy1NcnYbQGqMeBwsjKX4a5AqksHQTfuRVESLcuPkH7NvvG5GdDrvPktkJkE3EaN6JJ",
  "key38": "2ZLMXMEqEr3rYnzYd4z5Jxfi8PAnx4ZyAaHN7zYwEiH441o8nnGxYZeQhwioi1PdJfNm2WiFY89t3XrZdxUYHTcZ",
  "key39": "3tghvVjHQH97HsAmcGSxuVPX6F5QTZvAu9SrztCoULARJ5AHy6pxV2yWBcyd7XZzmyNYiUCDfDGGy9R8G547no7z",
  "key40": "5MsJNFM31z1isKjiiTmLfK2nVhASQfJumzXsbzaEk2sa3R6ujDmVMn3PnF83C9cS8R6xBDiSZ8hPnkL2zppe4qqo"
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
