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
    "iqJBgtWKLf93uJHQg7ZRuhruJYaccF1fErxd5svNxJJgxZGtKSK2cMREKHophpPxecgwx3tRjybPRyr23akvE7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRQm221dSBo2ZnsC2hWFEEGWan6HQQ2bxAZUd8RDyCBjVEeiQAFxn87TDoctBVr2qq86mhiR6ZcZVskDDEY6TTr",
  "key1": "yJw5uZvDdHM7GYxYC9FFphdBscL6uv4T1KT64bdD7tYhnNmcK3YK2vZBA1MtwmHy9D6WomEv18XUrzKjrZeyVnM",
  "key2": "5qnXS11BNmYF5AZXoSsjCjeZWQkXy6jKQsP5esTr3ec6Gffsvf8SacwzciKeP82B7V2VaUyDDQgtRYfNGwwXVENR",
  "key3": "LMGNoMt47cPdaxGRsoZ3Yrj7JJccgBtKSsgKb5spYarot2R83Eok8MDjxJDvKxkU3N6rtwexSr2oXQTULE2X8aq",
  "key4": "2TyG1NFTvtgpriJTiDbL2tnngeSE5vTkw2uZicDHFRJxka2cTSSGqPMKjLW1j2egDBeo75YkoPmLR67zYXaRj5GE",
  "key5": "536nWG7hn4QitP8yjJpHtcqNZMqZAYwWFUj9qyDfAxJSNj7BNTdBD8iw5unPf7jGn6jFBaaJzHruRhz3FxmH5tJe",
  "key6": "2L8XhbSRypDCTgtH8YGvYSBEZzm9LzL8a1PtvAfVhzHgFfsSwsuE1RQqbyhByDZzamkb1dpWLSuCyWSvPi2FVufg",
  "key7": "4ush5rLuu9FYK6uKMEdWMAjbiNuKstgLjcQzqZgM6zjJQcdWbDAUtdX2AU9E8J2WckR63UHxUHFkY1YVFp44Vfqb",
  "key8": "VuKghx4xQWLT7LKM1uY3KoWa4k6rMoq64p5THBZ7XhxJ5pGdfZi2QvxoHS39cSmpvhSj6Jj8ErDj8D9mLyKsWPb",
  "key9": "58WVBYGum24BZbmd8W2y4htNVb5Tqj9rd33yZovj7e6SMvxSrct8HwLrBEpmMwW9w3WFszNxK2Etyq3wWsLPmsn4",
  "key10": "juMRMA9X15kjS6p95APf9oNLjk31bzX8XKvDMgGCxnpEFViyJFgTpWsHFqKbJW127LmAp4iQ6d1DKfSbdfG8g6W",
  "key11": "igxW5brphsNmk67S7Lxa5UZfN8zJDkab4LUt9eoZoCysTJ5aJuEaRP2FMBraM3qhsGv5uW1QpZHfJncS2KhGQqV",
  "key12": "3jt6zAv4tR6W7VEvcNCJAz3p35mom3ZzsVtUPB7k2hG917jwdKNGPQ2gVWbxF2iJ3DGLkCLGnrerBUeR2JAsdGnv",
  "key13": "2D2GS6ivMfiMFdqm5VipvQBmKkBf2KofUZxVvuQyCfjHQCFboRC5TVpnFfccjXb9xzf4B6gi8BbooZyqVByJ532K",
  "key14": "32PQPjD9zx5KtaGueD31JACLooPVhw1nXoR1G8fmQCAkp8kRfVKVkh5SqZup6Ro4g9S8w1fNb25eBDsazecA2nNi",
  "key15": "34Zm5WX8iF5erfY6VXGyTQ3v7gPan9HPQx7gWCYP9ifsABLxQADuf7a1LymUVJyThBSYYbKi8M5gML7bJ3bjwduB",
  "key16": "3WQdFw9TYSoYrKXTozuUr2NV9GgJFVERqAVFE9Kz9myWkb4CkRd1wKhagGjqorevo7beq5Aez22GgSa8sqUYZe8Z",
  "key17": "3FNnFy5JADXnci1FJCN3QsK8iLU9TFXKwqRyJaH2PzMezBs6V1nrztJieRnbWex8gc9bMysypdS3aweYKkhkbYMq",
  "key18": "4TnyUPUzC8X1uCCGWAWgGfnCtse4a5mdzPSKezXbgiQgkYjLDCvNtxPPtxWGVkNjg8XNhnDQJYNXyxKkdwWxPXQR",
  "key19": "3Ytye4cjJLSKTh4pEmGvzscN24HG1HKTCRrhzWwcgqQSFcjtTRKMWP7prQ2Zw7tGXJMah2Fq5X62zpcD77uMrFTh",
  "key20": "2B5SESkAMihUUegEFnsKchdcb5j79V8CF4Yi3QZhBEthCb5dKQNarUbmCTnUG481CDuwy4F8qCLDWGmzBGUeN2uT",
  "key21": "u4cXfAvr2jvYP9nkTzPypgDh85zE3xdQD3M5JbXVwpmERpsvq6D7oJTVosAtLvic5jGAfCyGLjsdRhyjuZrzJH8",
  "key22": "2TRTuDmMMA8U8wkaR9AMd7SQyGrHjztbLnbTCJ4VbpvHfd8YWrsah9PKrMXLvXxBDfE74ymPDhDYPtD76tAmW28C",
  "key23": "2jB5V1rkM4T9daibKPPecQrDaKwAtLgkguH9U6dXDsLStHFnx5kQZEhN2hWPtqjjTQvZqUUMo2cxJQNB3VzysAxp",
  "key24": "wSphmULprkd9tcWmwhtnu8fR3sYjHGhs1shjh4tk8UhM53Q8SGw2UZvvpRovdGbFvM5n6HnSDn8brzB8GQRxk1j",
  "key25": "4vWtDxJ12j5qubCNZqowGXoXQkzZHeWUAr9eg9gRMsnqt9nFLKQ5WUKQa7agdaMu6n1K7p9uwCnoKq4Wo4VyvcZZ",
  "key26": "452x1LNG1opHGdoev48k8jRqoTj9VCK58A4EuDv2nmxQAWK39RcgGUzMcj2rwYuWu6EvSMmH7mj2pWz2kiecT3Qg",
  "key27": "3uHddcxNMHowVtaXmRtkPjZNEf5upnPn8qhdFYNm38FirVtAV9UusJvSo9BXK1P1ALZZMc5XaUKW8SRh1mrAbzHH",
  "key28": "5LQRtG5YVSBiJJznmM1EBRxHziBsmYGV2MbbkrQoKUT18YRabMGoaJYgpW7XQh4hEfmV9C3tzUF8aKzGsqfDCqqN",
  "key29": "3gUfkKZRLV9nwQDiohEodutWnUCnaRpwLXhFUk6ytKLVZGokDx8TcQRRvoRvoH1jc9zNVHfg3YpT3vw8eMBX1YaU",
  "key30": "4iZcWPYpM8w5qyqgY6azHiCZuY6vaXqsW1Y2x9FU7jPpmv6RbbQZN8Z7GydXXP6sqCLUMKkUaksenoA8hmU2V2jo",
  "key31": "37fcEHn5LFXkYYLwjmugDANPWiudmxLqKGfcdMoRA4YzqunTsU67B1jB97esUNqUtmtcKLsqJL4xnycXWMRGPQNJ"
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
