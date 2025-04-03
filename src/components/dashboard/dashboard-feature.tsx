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
    "4qddazPpAyrX9vwjYEYG88bEPjZy7cSEZprbPGjw6jTHtfcBDAmb2tCi4c34jfQp4aXW6t56J6HULCCjLCUms7va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXR3LpQGLNVbYjummppPzHZWAk36VBYKMjCMSWvh7QQCG1ekZvXVdeEgmL4VYxYXSek6X8MNiJSH8NXu5vrL5Mr",
  "key1": "5sUEoh2msQNyJNEUAfeY7S6XfQMYrDYmtYt6nqRioZJbzew6vWXmSi3WFCcVXMu55XAgBusUSiL16VmeKrDj2ty1",
  "key2": "3z6JL84dBKV6wTyoy7tP38XLiLczCn1vTk6KvModv5wnRUb85L5wNKyST2YQ4N4KzfFKS2nXMwVK2PMR3sNoW38s",
  "key3": "41W5SmiUUZkJrhx1NwdJuG8G2ne7arYkuYm27qcZAK9wQjFr1eDzYHPXg4D1xxTxBgFq9D3HPNj1FSmE3DDJN3rF",
  "key4": "2meBB8TW5Xxg5mDUSzBhLLFRUcSwi5GRE7JrH3ACakx65WLBUoSBUhqwQmxhPehFo7sPyTEkEac8bdCVv9QJpK5t",
  "key5": "31GGaecbPy1iCTGzTH8qgxBQh4ED6rH4e7Z58rb5uSuxyC9XrcCtuUjHw3UDmQPLtVvr6fktfsGcamdbayveYHQu",
  "key6": "4R5WEaoChNWCuMsYKgHgSwM9BwjC3WAvdhMV8B8b4hLvDy2myeQScsbmg9uMWzUonZQxeqv8JUstcbCBHPCLmyUM",
  "key7": "39f4HxqXNnDLNosCAYxFSqrFhet4NqZnxJwwJx37Hy2Cwhv4HQ5EsgZAp74y6cSb8LbPFjAXWYezSWmfNSjEposf",
  "key8": "34GGGjFduFX8rr2x5fFKi7XCPGMp1YhcQWjQKiErDxfefDvAz7nZJeRj6VczbaEZYxDx95HBJNAVKdE3rdGhUhj2",
  "key9": "4PdBRgrqcFNm6A9TBNxdmRajEhYB1MBW5f68c2BSX7vZgbhrJX9J4QHyThCFXG23SPKZHmqWEbaKLdfFk7Dxagko",
  "key10": "8kfMVP65t8omaXrdSc5QTAsBFPMLYSzMV3RZdbaVNRzSisd843LsLw5fGQbrUdUv34h2BQQ8Dy1b88AHrtjqR1q",
  "key11": "vEkkUga9sboGg3rKgUStNXiJvX39EcLHFaNVB2N63vBmggPq19RNHGVJCwuk5dc4DCEJ6JYysEJGeU2YL6DYjyZ",
  "key12": "nkKTSgK2yGJDVrMkWsmptUdfXVEWV8rz2yYxZwdUDSZK2qKTBW1XeueRFnNBnsY9fPEzjLZGxHFzYxxFC3r6BUo",
  "key13": "3aUvU2mcoJPJn4rxsh8L4GbfSFXD7LxZiPtX92p9jpARQy5hD53hqX7wBhAAngvMqmxkGc3amaPFGuh4ZJKg1tW6",
  "key14": "4BY3V7TbkZPYK4NA7kK7ywjsbBZrGu2prmstzo9qP5wcPHaZTKVDydRqwwLzitFhBLNGnPmgVPLrL8NiBCxY6Tdq",
  "key15": "4QaWhpPr2yV3AfUjiaEmoKrBN7MKiNTqsAnNYaCx8fXnz6D3C1WKBQXVJtQQ6RLCd6AasuhDYamdPW2U1KD8Et3X",
  "key16": "3vMcAk32wJNLdJKVjBkkVMByH6CwdkJjMqLfgKpNKkMNy5mSWHVs79RbXJT2RQ1BBZBJgvab8tU9ugDJAVgmqQWQ",
  "key17": "URQG4YgrmRk5f1RV55xXFmZ9RjVfcqRm3XbieBakUntTqRhiZvTK6p81xBGxHCAGmM1XQF5sNbBbLTrFRXziXPD",
  "key18": "2fmBpkWhULNQvDrza2sZPL92ktBQuatxBRUjpguYNo7fbjZeM3Zff6Xk8n1wcGXuWtyWEAFVt2uYDyFA3eSRn8uf",
  "key19": "4JjdW6zHUaLdu5R2vWy4KNhxnJXrm2xsek42zz6ZqeCnwm1vfHTsYYFNn4Xrb149fFo1BGsqPiTYrau9r8YYGdPM",
  "key20": "bGRqk9G9GMqgj7ENvMWwkVupAbEbQToqV8aVejb4SzjRrqnxHYcwUE27K1RaeRX3pbypu2qai8eS2WwknZpnMyY",
  "key21": "CyaX1sYpBKtsQRydcy8VPgfmAf6Ew29NFZaFC7hnmoPv2ivCcDhn6SQAXG1KXfXKGRTojTaHnvH9XyywBiduHEq",
  "key22": "2GyL1zRWcHN9pwePF3rdfwAK7Y1kGVXib3kS69AuB6EzB136dRnPCrze7E6yCK8xSg8QBu7b8Y7vmFWGEpMSgRJt",
  "key23": "3DPaGTk4SVXvu3eaCrFWtBNMYe2S336JAVTwoA4KGPEpdaCXoHBpG3foSJjSLkXy1XLM6SawbncDmeE3wChHf75s",
  "key24": "461cZvM6UxWEJxXwwHXrdedidP5aXh4Ko1sqDq4w4GMPZ6QSPZQfz5K5jt9o4KZmTXAtAhAdFHorjg2wrrWLU7g9",
  "key25": "3mVfWTENggSZTebT4MCGzj2ygDAgJJXbkwY49HdLGUanLWrozdAAQHEZoEUazbvSeiTQpVDdc4ucooRCXJE5qyDP",
  "key26": "5c9AkKoMhmRxiKgkYXajt5yT9GeRNPYTC9ksuf6hkUfcY7YHZn3z65L6iUzfTKZwXyv8SdzTfs2AM6QjeJhcNQnX",
  "key27": "25dgndD17yR34Le9b9nAsdLWxXRYdrAWjDmEgBYEPoGiM76QBZbxHQBMd1vtL5mqwDVNAuuJZ6ipAVrUxkA5fMsJ",
  "key28": "5pBgVfNTSiFUC3Wi2yP2PkJp9iS2bmo1x3RLddhxYnNyubq6ij2ZTBCdoDZFKCnSckpAo1hfgwX32tmGwkGU6JhS",
  "key29": "Fo6TwkCuJLiEHtL3q5kZrC7d1Z7X9d2x94seSY3qJBfe5Z2N718YGTbLwXukmp3fZwQ51BPkF2QQQGaMuAWKk5v",
  "key30": "5oktXRgXjriQTx6TVbh4UNE71zk1kr4kxd5wJzG54b9Xm2WdKtrMq94v1nDeUQ8gkc8LKZWskFdhcHcK4HKVzzSU",
  "key31": "4WzU3KvbuRVZyMbHqsmVmK3kt12WssdP35sMgsWk3QAYFzjxvBhh84sNqNbBNj86iNetcv4TqSmXMkhZTJ9PCwQ2",
  "key32": "8sDSnkVnPPjnBfV3ZdYi4uXW1YCiavy4TT8sq6dFmRSqYomF2zbu1EW3JXciDMVkdDrKb2EkHJpyREAUPttEUVe",
  "key33": "PfRCz6AusrVEwDjTGVVoHs9UwLVywcFWtB2aBDGA96crDCkwn2ShgNZVar7CHftkneGJmbwckBatVrVhMUQG8YW",
  "key34": "58w8siCoNUr4rsM2612ZfCMAuw4VfY89qxnsNpBWRojqEKtL85c4wiqQdu8mpVLZVb7QTNrtQszu6C31met9LNfJ",
  "key35": "2jPHg2ynSBT6LpWByt32sbpW1YTssy6mRGttJLx4FGah85tjWoDwVxG6z9DReoCVHQPjT2tLsKEvQYe4q1b4vec2",
  "key36": "3qLyQbbWSbYS2x5HUMJfQmAfnJUTyTQst6RT6dxEjS3dghCaem39jf9HNNTcx8Mwsk3vdGGBALkeSv7NGjBmyA1W",
  "key37": "2S73ZpecjWc1PDMm6epoVwNiw3yivUd7cURk8KenMvJYAgCBg2X8PeFm9S3XdAivbu4SsYrm9b7HaX4zjgiYXW6m",
  "key38": "4WSGTwZYvBSjuggKK95m8yqPcH5VPYmBqLkj4chtpARQMKXtVPyPChw5sSSs9pNW6Ufy2RJdAucND9VwATXkMUcc",
  "key39": "3H6GPf216917RyXLVGPui9KjM9efmPsgCTADn1FSihRbbwEuG8KwKx2F6pwZj8hjRXCrX4j7mgpQDGHKZUh1xsYC",
  "key40": "jfQi5yr7xLVbLQjhFqVWQ8eC5BC3J4zD3akWHVdiPM83A4qWw124Th8pXaQbrdcV71y2g7tfXvWvsFQxtFi7KYt",
  "key41": "2inkWodFwmAp8kJVBA62etWR1zG7HbgbKcwABpaF9TRySYejN218kSSadtwKegiUHxMt7VpUkQYMZvm3gZe6X7QN",
  "key42": "4q1m71kXcSiDQP2rg4WH5azuSq6wjPJM984zyS2ritWojwbDj7NMUiuYXiiCZQg3iCp94WanJMRWWjWfkXuC886e"
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
