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
    "2q8eqBtXzeXRKqaEKojt8g1fQT9R66yEqW8kpLqgNnbU7ZgwZV5SYfMGrwT5zfBsghR9jd93zo5LHJMgM2A2NRyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAqxyTEBsJLTKRKTaM9gp3wd8Mk1Cbg2DeDDWJHgBX9xXQyZW11gg9sD2NDqooCTUimzmwxntfn5TDtDP25Jwtt",
  "key1": "3n1NYnEdctCaA8QNtEBvNpH82xEzJBNs1LTUSpnAc29bh1VvdSKKqipVT16byi26SuvYaqQQPvix7vpB4oMvaZoH",
  "key2": "2A9XiJiAr67aMUgycmyH2VdiD3Y8kLuN4V86qxemMHBuX9TSfR6PeFd33NWodGF2dDovV4JqXuDZS4mVmjafJX7U",
  "key3": "1Jze1DM3PkQx8ZtJxXtcDrUMxJriZL8RPipTw4yQeHBerDczz8AWSHMtpouAyxLiNKHyTsrfiMx6JSaUBkbQzn6",
  "key4": "4NrYGwEjQ1zZTkftY1v8WWtGFeekoKFWQMTyDdqGGdWSXxYeRpXdCyuXcUGwuMczb3M1sBf69mrpMRTGLfHp9meZ",
  "key5": "3cuXcBP3cTZMB1XfazvTiB2Deeg6kpJ91XgwFYBJ8ppZvFV1jvY2bts6BaPfq51TKUaSi6jM4BUKVCNABEo8AEKu",
  "key6": "PmL5XqbiZ8L5jYFm1J6JkHCvzxcfJFays4cv4R1t5D16ft2yFk4vmVmM47HM2smt493ycuxxMf7MTukqh8PyrLJ",
  "key7": "4izYaGgC8xcVz4sDTuU7ZGD7aYkA6zjdhgfGTfpv9Q7TnNQz2heqRtvapnq7UVKDNoR987jGeMJMME2JqDkbD9EC",
  "key8": "31ME5YGTfuatk15ewsbAqd6etiCTGSoePswKB4sGXNufGXUvacms4zxDWfLwGdXPHVshqJyUeJXFeuFmMS3du9k1",
  "key9": "3XwdSafK488J945hFwbAQyaGqPfHapmZHh6vseXv9mzddBrKZ8eSYYEwpyrTHa52qkaNPRn3NhpJXwhq1fQVuxBd",
  "key10": "fh5552Lwm1zXB4ynpraCmN8TsZ3zNre6u478kcybaJdMH1w9XswEEKoh5dDT4U9bJs67DeyFSnskyarwGw26to1",
  "key11": "4VtBY1ngdWezQFk4oy3nhGBRESjbyu4VJ1JJn9JCewvN1HysdCSsfU1mY4vW38VWL27BbR4viakekpspc1Zt9gXx",
  "key12": "3w7nG4eV9hy22Wfb76M4FJktuos9vkrv7CAwvxR5QhdeP3kVvrS4bxUoWyoh6g4pfzmX4ypPpEcaZ8PYNcKMRT7r",
  "key13": "3KVe7cSRVhDFA2WQJ2aTay1iDCh6FEbtf3uJTX7WyvuPpVUzj4NTogVHuArjp3grzcGGCW85tMSYPw18j3FtUAFR",
  "key14": "nhPAJZHaMyfKbi2MQbVapwxsabRwb4VU5KrShK3jG7VHsmmok6BwNHhB4jswm689UtxaB1bEYzZzA38cXaZoPTw",
  "key15": "36MkFWrzjMexUcNBxftGCaMQSrbJzWbRq8MUcsAyXw3MsuXPYcN1CPthUeyMEDAFT63tVkg4oL8nU7U4ZD6hqG1y",
  "key16": "5PjKB3aQ5nLwsByBvwcZfinad4r3yfd7yKsLTWHNtT4bNdcsMnKn8r456sCWYUKdfY7rcqhB5fiUkvHY6VUzUifk",
  "key17": "3BQA1FPijTqdKzNUGe3cy1iMq2Mm4jy2uU6s4DPox7iNLYNs93jKttL399jFXBDm8mhdnu2FeGwQjNAjLmRz9UCj",
  "key18": "2Rkvsv7mUb9qdYF55FzTnxtBv5tcWfmgB4VoP8P8BwcvdMLCJDEgDNCZ7QM3NwhQ9GPSbHwVe54jnxYEBu4AAnxR",
  "key19": "3bHLDu259XMfgvjA8MTWbHpMGJ5491E6dXjWn7s2YkPTYnP8DCx7JqSid4Zch44V4WTCcUNot19sAkkknbFxWYb6",
  "key20": "5bYaSAXoQEkYmDAAfGLAyNmbMLgRnDczQvPYBzp1PjfJPpa5qtcaTxSxjfFELaApsQ7iKV8yK7ZMEBxgr5YqnAQX",
  "key21": "tLNK4ZErtGndPGjDHU4SJvf15Jq4Th5QQVrfmS56ccwEGPRGY5Hr54SLnBJNujFVhKiVBoZXSo1RxECx5bvCpbJ",
  "key22": "5hHu4CixpApPFtMP8N6vW3xs1yehHGQQCPp1uHA2osmKjpddLhUVPhbiTaExd1AUAAHoxbeuUDGCG9ZVztj4wwVK",
  "key23": "q81473rmgHbXvbVyN2yRJWXxAy1a1E3Z4Y1t69RupLLTbU8qZcGpzsGyzZVamntfVg42UJr2PtdSzR1U46QbfAg",
  "key24": "4jPX2TE9PURG5hr7ZpWAUjH5uk63ZvqU2BpuKocaLhXkJsx66KumJqCxzxe1D5p2qvMASne5biq9Cie5Q3dPaEZt",
  "key25": "gLKJvcjwEe7UfzLmtJi6g43ghsgoBKfv2ZMMdURqjQz36eYganBEEWGDYsMbyM3z7tBRjDv3WHTCDNmwrzLWTt5",
  "key26": "31zpBudz17niGJzwKsRo7isovcxPiXHhA9RTu3wttT3ftugwZ9an7N5q76sKUcMP2N8PSY3kVAnxbhiThVomQNc9"
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
