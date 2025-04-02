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
    "4jLBWws4c9otB9iKu2ZGUBdvDrnTqvU8xEdQM9rkxENk3BBkc8iqNwEYTWGE2VBK1jHraov7apmW1a2frmFMZTKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUYw5Ma861VWRJ3CP2QzmjV1Jr8UsTHMQw8ahkNkuzfeCC3fUCJzjN9R7zDW7pqr9fdurJs5b8S1atdLuJjGWUe",
  "key1": "2WNvn6VmSnv54pSgfUFgyyQykX74Fno1dzDv4oEQn2SorRTjQmzGT7191ioS9mG53HXpLkNAY6Z2d8cpifXUM4Kz",
  "key2": "34UnsK2tHo3ei7EJmFt9MCupHhN2ae5Kyz8wpX8qzQ6wXDcZ1y8c1358ChcXJEXPzSf7UR78hJLi4WKRqT4y1kEi",
  "key3": "4QuMzGk1RihfAwFiwaMVQMudZBMFg5pNZZqbsQLGrzjbJJEtEVRVFoUK5eR7kHXyWxMd8k3wgAPWGnYDRLRqc1PS",
  "key4": "4a5rctGqpzChXCrCCbEm3NPKhdLxgztDfMFU9Cg1V84pckSmrevSY59F9GvYqJwQ2YVUMKaBWKejuRhwGQ5JZ2Y9",
  "key5": "5mKP2WQDc6ig8SqBnvjUksreZVT1a1NiyTpFygjTBcgQaYKorqQih4bQpZDLg3B9o1WzuGGxTjqk6nwZtGVxY75h",
  "key6": "5Px6VMfSquK9WvvoAK4chZjcWS7zgwh4W5CKhrQ3A5oq4vuazWH6BwrmWVCdZsNMviPKVjNKXhwqoVFQjcE1hMD3",
  "key7": "2g7Dfa3fg8SpZpjLPw2tEYMAEm3rX3vMSYTQXeKrVexGDUDWRhqMENb7axQY61P3ukBYKmjT44yZfyAuwGGnCEUg",
  "key8": "585C6dhhHtAmEKdG2pZ7DHzkqPKA4TYnKMqo5kgJEQhYVG7PVrKZzbHDYNVQSF8ub8PosJxjYk3LATdwdrTpcUVh",
  "key9": "33yLApEMzt2sBQK2q1bb7XzxfQ5JfTFB2oxGvi8V1c1rschbWBQxRwXMQjF2BEBQds7vBgPLsmG7S1tSo5uEXRmu",
  "key10": "3jFDNKBBGd8KwNdyKeCHZBbg9apPM666MW983PNDYzJkrViK578qtFcwWoKXwFzKF5fMPjLMscPnw6ZoD69QCHjz",
  "key11": "5XA9Vy6k44HPzVsgcoiSC8vQFSsiAa97E9h1MVJ7Y3moHm45xCmWZoWfAEbAgxPpaimLxcfpgxw1pU5sGepNMvsE",
  "key12": "3Yhjm5ZdxtSEWu2nR6tWcFpLAagbwiaBtrXbBQegzyeGPhvNDahd1G9WCyh3qzbXUXe4sAPcaC9L4FYQiBjc5jzj",
  "key13": "U4yyUb6ifKFvEgLFvUWyYd1wLxTAshZTecuMfJQTBNRkdddV6dQ5nR7gAs6Vz7or6PNNEzxAuEksCw1QV412XZB",
  "key14": "2n1qYP3wx6uchnY8fL1HdQzMgaZgSbyHp1SCZxpNuP7ZCHtZJC15zhbtu2XTybDm3Q9BfmWJvcXPbqGJEUcqZzZF",
  "key15": "4hNkcY3xSncstbPbVXSDo9ZwargibSigTkaozMb2bYV5TEdVbdNcAYc9mJtZenh3peMgaxYycAJB48C6H1oEQgc9",
  "key16": "4q7QWu9YzPbCJzjksoMUARr6SrkaHJh9FioYwSC3MEbmV5zzR3fC2d1K7UMcRtfg4wLdLkNuDWy1strAnjV7cJmA",
  "key17": "3S1sLkvY9zgeYmA3wZYpeBkHCbLoiEPV9qSVdL2TyTYj7B6VscESjWVVnaJDJcyokfYaGZiSBwaDc9W5p5Fm2ouq",
  "key18": "3iMrfNiBv7enbqHRkoWtjS5PkEeidmRzbahqgdLrSZswdmUTAJvaUf5hudhyn6PwTvjhPAjo5gxCxUiDWQ2rVAhL",
  "key19": "4FGsHbynen3asRbYXMDtj31wK5pLfsbfhuxrJvq3KVDhsaVgTNBT7sn6QHnqMHfKA2nkT7Q8t3EowrPxTvz8biz6",
  "key20": "5gEnFymkaDY5idzpKe1XGEYyUsHH8JFtLhccLVaCvkU7pTLMx7dBSwDJ987aJbxmLSCrbfoGyj6oeMwpDQT8pYgU",
  "key21": "3pFyno6pKj5htsdfPHNdoq8HbsDjnjBq331woDydWuCkCgZ2JrU9a7QoNChuuyHaMw8WCKhjkg7FL84sQhETBisn",
  "key22": "2BPKL1dwkUECWWYPvFtL5h9Tf1zvtexiwmhJdig5Me1LQUN2yws93pi7Y2qmG1DzaSvTuERBsibPShrxYBkQ2mYR",
  "key23": "2KqEACngaw3YccySBVgqcuFpC4MbqNTCyVDzPwPoNNZyZfgFVRpzh2SHT7egXkvd88VYnvPjoaVu1awZQroLPU6B",
  "key24": "45T8euZoLHkpkTJiGX1YqP36W5UFZMxNmNNwPoThpcJPpUTrwUFqR5HcxQW2x9D8KDTYaoaAdq8yhrmvu2gfzpzD",
  "key25": "5LsvKbqNrNiCa2EA9KTChAAvNk7xcNjG5F2CjZkWfGx984gbm9mVeUy5s38iF5teyT2c8HZfD7q2MPnXMjBgRz9v",
  "key26": "5ppWTg6h67n99F7tTfeBU8gWNsrKudVUp4852k4Tpeofs1cArcyEt9Sf35SqNkQduBB6BG6K71Ei24ayhVz2dpjF",
  "key27": "3YZGZbeohJWWZhQtkawqFeb4U9zA4s3mCchhU297rH3Wfsf5usRZgzPyB8wHuKW2E7E87iiMa7ghZspHmWZo1Xxt",
  "key28": "5vuTXkS2qUWHUyLUMeuBTc6MMKTSvLEtQyE1yfmqN5FLf1kv7J7uDdDCT6PGByCuNMVniL8d3vArM4iC7kgppNrz",
  "key29": "5evW7TdQhEf4HVre7hBzhKkecrxSiK5k4VtWKpzuxYtrop8o9C2JiFVp754Qk5EjNpV29ig21a5c1NguBPRksNuv"
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
