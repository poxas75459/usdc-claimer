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
    "QUvBr4te6sTERQzZKn8s3YuMBi64GXziDWBSvGU3EGs3UeU4ie5uN5DDcNFBeFFKU4BxmE7PrgGRJKnqAadQcpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NM4GkhSY9Y5VMx4B2w6LW321yrHHj4jCuzkMJJcD55UPw8Nbwk6pGveCXavABm57fTRuhqPhT6erwmq15Jng7R5",
  "key1": "668kwgkAGQ2z6uM6L2aQFv9mQEvrrEfJNDZz2kRHwFDThGAgFH9TdU3DJZFtWHHeST3nUosPqZL7JJCgtcDNxzFM",
  "key2": "5iWZLySsYPA5Gy8sbNwZk36EDXn2Qyrn4mrwjR8kFGYgy1vvrtspdwRbwvUvjBUjQ2zEhcwXGTSJsWyK7Hsh1XSK",
  "key3": "ZAF1niKKS1Zoih4Xkrj8Mi2n8gwpWVENtCXNnL52d8cVtd8PAZSTdewG1cy5cNCTgSEsYmqh7fwrBmBLd5xG19e",
  "key4": "3uUwBXnPJ22eEkUHcKAUREdUce8gCLZ95ZKfN8UfLMcbf546YCgYwKYWvCyH7Jotw5f1vYX1fd4vMJuawX8mEL5b",
  "key5": "3SEFa3CocCjj5usDWmd2wtt3wsLxvd3qdCPkab5v5agBQNQBvGSXpxkanzcv3jm3tUn8FLTS5Hku3SuUJS95bvkf",
  "key6": "2ZsDKtVYPBGUrcgFjdo6r5E5xKVSxADGRaqwYHggTzJE2HYX8em16eVG6SEqi1p52hY1gHm58Phnk9ywFdPQZZkz",
  "key7": "41zsy7MhvRyD2dRpqVXMF3maZqGwgPQ99KW7b3q5N9V2cHPEwdvyNVSdQ1iDgarV1UhZsXhPoNy5pkS4VhvQ7qWD",
  "key8": "5Guk1BjMWpRq7wDbrqm7FQn5kDkZnVvUKnqSmBDos6bwmfBMcpWET8bxs36EYsuV7Ap6JVwSorUxJS8GP71Uy8cH",
  "key9": "k28JqhpZkrsi9PFWXV88xj3u9bar5JBh9Z55xEBWikzv3byPEckn1qrPjs6JYDgBvBwxG7WAB435hmn98AJhrjg",
  "key10": "4zGZcHVH1Hqau8C62vahmY3puutVde67EUkA9Fs6TF8VmLPBrnJgrQ86qzQxBH3zD2ewGnejHqb8ukxKZbwgxmcc",
  "key11": "5uhuJC6jUdk1AMFwYEkqfvwZQkkDsowPes6fC99AMoaaMmARPZh7YhDEqG5hVHGtN3y1UVTqWNGAJtm2xzNriEci",
  "key12": "3XoZbKz1rYdk4RT6x3bcVLqh3KcNwySm4gnnpUKouq82gfnDLunTyCQJwsufZkXBABk5yo21Z7kexBDQuFemoErp",
  "key13": "4YQTrGMbhXgXpQMRTit21mMSusdLv4xz4F1Z4SpsCqFaCEGLUmqQWPCzbCeJYCUgGqLvUvFjVgyeJy7v4gs3DNT7",
  "key14": "4TkbGDTsS6N8FYLoaARGjrC8Cy6wzr7ikviCtTMGxvm7uRHoQ8EWAtPZer4reFz63vh94tpYyHgV9qZiSEn6HNU2",
  "key15": "ctpCrvph4LPaG77xG87w48fmfqTtP1EsaDwXHEQHibxHNXSugB439KFo3qDNSrmnBZ4wWKy9mm6QMSoFkEKVQ1Y",
  "key16": "4UjkQiJjfSZDJoZN8Q8arhQPm2Sq9nL9rJs8QyTK8sNTAw3BB3sD9qarN6jrpv1YRS8Rb2E2akKNmFHPQjJzVMt6",
  "key17": "4sSTGUGvx94Ygd523VWSkyNqbzacb21TYUi7iy3DeuSs7vC99AjTDMsLPN2Nr3n2NxVM3zi9o4KwenLdMCKVibdB",
  "key18": "vN4w7n4PYzq6y7Yix2xuHFhQSqyH5G34U5qrTwg1HkfExL8bW2uYBB8FjWrjA3GrWG1czhrhYwC9EVTznZSpYZm",
  "key19": "21Y6MBEL3YavvsKj5sbQLmf3W2bEtNifup39JRtGvbCCKopSDqQfJmPappQnxPrxNh8ozqhZ9TGcnJQ1ZSGTuWQ1",
  "key20": "3VFUsMc18zbaMFkXKWy5GZwVhzCoKimu1HNpPBLLDTGac1ye579k14ezqU6jVF2KxfLrowM37CEwpm9DnYJ1kdRa",
  "key21": "5oLmLejb7ahB8UmUNErBH6bURTdyMUxdJvu44x9TwTCUQNa2bQYUXMUWsGi9oKy2ue7Q2h8961UvPhTeoidkDkef",
  "key22": "2EEBqkYn5UWvwjBsTFJh4boEMG1m4C9V9x6v7PQ9gzbwwdJiCdkxTmGoKPGr2qRgjb8xzixg4V5Zye2bGCbheP7S",
  "key23": "3JxFnFmtib9cj3N6xr3kBc3R84ofWe1FHe4fjp1bUpsgmJqbPKWr15j2FQRbhEGyTAWUeYU7pZGCxhhgLwquyExq",
  "key24": "52gHEAEaawnJMF9Uqsbi744ZwRpxBit1Bngov7kEFcuPAdceEE7wiKyjDeZeLB9bgJYsNfzV4oKAFCVzRTMMZeMo",
  "key25": "mxPogYa7ktfGgdfdjrPH85QQn5K4Pvvzsbcb96zxFJcLkXCCKnsyYp1SWyU9nphjuPad9SHVXR3ED9mZzuQNxPD",
  "key26": "2gyjjLrmHbYa6dr4rDAwKTX2VdHfvgUwwrRgUranZzvFPm6zSR79e9UWwtTK5BEFwSxK8eWNFAGzcRWXCr9cRXYX",
  "key27": "3CKBtWrEmiZhV14chgF1kuuHz8rn9jf8koaToHVVJyFMeYqUJUzjgXVGD2VnxDJdmY66nhQKFyrJ1DCmHT75rDYf",
  "key28": "4P3QrKXSsQPSFt3CrGFqF47muyxAKyEfNxUkf1JfnX5VsrzwEV2DFqorrVTCLi5Wcq7BBtAACrnbLAkfv7YfFaeQ",
  "key29": "2q7QnLp9KN7X3CyATsKBnMiYLZpkSyTkeZxqoQ5PbWkdgusE8SZcVQFHYEqNr4EAWXT8iZyp6GnruW2xUS6TW5aU",
  "key30": "2pZNNveyJAp63cvXPm9JWThQPHZ5hN9FoBNBUBkoeQYVRpjc9R9tjSghdMA5TejuyRYxzsUZNUyocCNEs3cMnpaN",
  "key31": "BQa6MbiZZFvy4BLbqn81n2huB9Br274dNiuT6zysWG4LE8c8gS8Qxq2oQ2n3hz3W7oZ1LkSrg8BQ82uSYkHX4JJ",
  "key32": "mNfeKokZjEQBzXh7S5VFhget8XiNUJpNAKn8PFAnL4VnKBZ8NGzfHT7LBCLpFroqxh4tqgstqPpKXdo9bo1q5Cd"
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
