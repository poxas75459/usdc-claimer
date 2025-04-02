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
    "2SLmKX7eANMEZ3hjL7ds5CBrrW7Zo2wr62h8iHpAaNLy5T8v8LTcCgUSWWTJdP4yXWQsXjAEjo2e3ucmRFpJN6o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnZsGmbRijFtCdeuziuKHWZ4GMR53o5pqYfkxDzKXNon91dxwdbFLwUtrQGxvoXdSZUdJMUawDbRk2MvCeTxGBN",
  "key1": "5geyWZThWxCHDZc6tmhky5j4cRJfNNVytZZGHgEpKRzoWFASbMXNjHr4LJ7MvqAKWM6Wp3yHvLkLp2LrxWLwJAqN",
  "key2": "D6Pu4Q8WvijvB6xsQKRfUjTTN3phoGa4PGTDwihrtiGYUk673VbxQXWvk3Q2UjYWtGhayiDE85Q8j8pMqFiXRLV",
  "key3": "4smrUMPe87VBzhc87gzxcM6duoTyLhmCNN3GR7kMeGLPDmCjzkBhfVkxZzfcfEdxN7s5kt1hUWVpGfTvwcXwF46k",
  "key4": "2xcH31fU2ramyk9WnokYKvbi6SQb75W4Hha6S1N5dgHhSbLgbMoUTPeiJfpkFAYYLyyKWgPysBWrks2bb5n78F4J",
  "key5": "54HkgHVKZvNY6HyU7tyRA2SGWXU1FknyuhUdjw9tbc42bpeMAukPcwDXvsSd57hMi3v2geEpwVHqV7BmqEDT1ufg",
  "key6": "4nZtbxX3BtyeU29dNAxSF8z8Ly1KKGYfNh4HqURdZoL6q8oR4PRxCZmXHVcULxxhF61ieVVpKpyztB5bbcXYBvjd",
  "key7": "m61tvAbLdz6Fa2SGtdJtEB2JV8mUf2XQgVKLz3ev6zF2Yj2mdX8odi4voaHzyqzQ6ZsrgLjEcLShXLuPR3LnsKX",
  "key8": "5qkRQs6V1QYRTKi8LdTKkEZqKVxMMcv9tfsKgVz67jNJ6KiP7gxpeR614G649EwMMmjGLLhWFj8EM4KLgKkoWpmw",
  "key9": "4Qmq8f1NWxz6kRr5qqSnyCtytfn2Uv5bN5zGEwbv1ZEBURQFDVefJKY2J3ucU6GJC9VvcATSPN86ERQKPmbP4ByN",
  "key10": "4JFauTqHfEf4gujcapvKFDra3VUd6xn6rmaEYo9dg2xzkpa78YSQFnQ5UMpK6kF3Sp68CRgXc7RDsrfcznMmwm3R",
  "key11": "3z4XXPzRXY8RQuEJCZX4YSd4nJQXCt2nZg8wM3zAFYbyrosfdDbTq8JEkqFJ9SKPtVPAErawuUaJihyUZTNdSLbq",
  "key12": "58JuBwnsnHAetEMn9gGkD4zCM8XgBXYUKubEstWNFojtK3YErtpJVmQBfC9riMUD51NY3vMLV9mpt6b3psooqWTE",
  "key13": "3BwrcCDkRW7CA1rZHHN1XGRziPE3ppg5TYVZ68LVq5tyFgJbtRAPafpraqZePaf44ivCjF1zkXjbHhFAdSo3FXx5",
  "key14": "5AaBqUGVbmMVNMVtxrdhgGc8F9CpVMaSojXVC6XtWqt4r523kituiuVbD35PYedaEdRoCaXe82SjLnWNQpedLs7b",
  "key15": "5vK8yevh3gUuCWALeruMJNKEcbQ9kPmHqRTAYynEPaNUnCUR4YtvqfQU4HcEiPa6z3bKxLNpXdbowSP41mFqLSX7",
  "key16": "2hzN9fXwno4hZJHx4ah5Ar226jEDdPhz5EzUHwS5aTbKTusZaj6iV1YoHanzKdCWzKMSdRvv1iZrkuV7Q2ECngSN",
  "key17": "21QXAzdrhN8jxLzGS4eVSvJR6UqjrKMTQZ82f1TFEJ64jxgbZmRaLP3WChbrDcZmTmELHSPzRSj4dhsCpSQnd1Gx",
  "key18": "2CLi61sH7SvUzfZXqd6s3acmhF1vVEB9P5U5AB15FE7MYESqYKVnTJgTnBCCLsptDtfMWRu1cuvpV345eYHwkENX",
  "key19": "45CTxyp8vRrgGAuRcNRX3Jatx7vWuog4ki7BeDLa7s5Xm9QTN7avLpn5wZQ1UwsMFfiSqx9huA4ow9tedAeJE6pb",
  "key20": "tdeF9XjP52RAP8UKw42nPUiDBHesoEkxsSTN1MZo6ZB4PYGK36Cy182jMyLFaaUzNbvdi35iB6GrqiERzzcAXzk",
  "key21": "6U4czuEHrfuJZj5vRXRKiMwmhrdtXnFixsNqs2WjKpgHDERQH8afcYE9zMwn94Rxpj7cXtvYAZw4ZrrWKEt5yYA",
  "key22": "5ub6ia4JG89KR9WTmWrZKuB1mtDDC9qYGh2Soe7sMQfZSCQZZCTT2CoE27DtSznWqxBbDie2MtSFZNhuSZt8CWVC",
  "key23": "3QwJhgJoHeqMz5ZcYi5Qj42nCykTfm32JCakPU859gKQJqCCGsDbJCDyapY9GhMoUUdFBKWnp3GLgTQihxDGywTp",
  "key24": "2haVGqjgW3A9oEr1BRZR6KUVGxDDMEZrU32u4EBwYpxotdG29PDgVncaUxt9xy5usGRhDHWjNZXzL5Eu6pxSquMX"
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
