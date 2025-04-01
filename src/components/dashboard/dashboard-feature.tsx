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
    "5cLFsAPXtZp9hLz1SapaepUeThe7xWxbYBQE21xGvsFCug5Fx1tbkob9ME1Sc7FsJwrSkHKWegvc5HP1aSGjp9GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Btyd7mmhg4hmzLTMbWqqKyuWvCZcqZcxoX2TZ4ZR1HegjQBRQMtcV56tjt5TpbLK8QV9uGU96QZ9ZguUZxQCrK5",
  "key1": "34PnDcRDX2n77WX3k6EV9db8pxpPTYH9C2yFzocJEqx6LzTJ28yyUts9zLDixzSmKr1Ebx2ZMWCAqDUm8HgWjgF7",
  "key2": "jnPRFySszkW2xeN5Yheuyw61Hi8DX37GZUBNDkvTod8x5Uv6RfNp1AGjAsJkmxPfBF9qHBxQmDaTni1Swu1BB4p",
  "key3": "eKHVd8EU6Kz9LG4sHGCKeP8XiqpGXUYt223MMtiMY3D5NgARJnUZCnmREdzjhKgHa1MznV3hMHXnB9kD1RUGUTg",
  "key4": "2UbFpn7HZTBq9j1kSP2ySLgCx5oxTZJu8dcB8bsimhRdyvBwX1bGCLjdcbwqGXuS3wV1AYsf727TTumtkDVXPAcU",
  "key5": "pXvzgLein8jteNkxK8hNp8kZGR6kLUmHoJj3S4xkuwGyAUwrfHCP16v872v9eYrmjeBVeHZp4RDV9MqcE6TuGNW",
  "key6": "2vtXJVJh9RaC7W1EaaNQgjytJGTw6VBdqifLRPgDRRbhN4rafEi1DCZ7yNNrPkaFEMGz8Hen99ZGYoeaa6nU3g1T",
  "key7": "2DeBHqQjqCmE2Br9yDxMXitnqbbzybzfw3j4MtoW5Zh9obVCb1VQ3Y5zxJKicmMDVPXzac27PKCJkQTS5WVYtUQu",
  "key8": "tXTyAcMa1PSY5CqDsfjx4LHPSwJHgcgimUmbNtA5U1QPFRDv2NrpvcpEZT29FmPtLQXGSyuqHHZ3zDcDpaLiPao",
  "key9": "2cje9avxyfZFXAwifiSjMWmvzBzfqZ4zVGqxkLotxkYQQ99VbbEdRKV8LGsiikvWBoFhB5BQjNKzq8TMWuPVKEEu",
  "key10": "FEzNMVC3e5Rs16syHjJZiYtGaqzh6aMHTa8oMDMVUAE1PQbJXEPWsCnm37RUkDPJ85V56RaJAzgpR22pz4ew4x9",
  "key11": "3yc5YASPgjiAheW2JSsZLbLNr3rvBj7hcpFqSnpQZMwzEAyRQFG7jqE5Xf25nygU87TEcERdRk8E4HTUTC7ijXkR",
  "key12": "5KJ6HRzkQGJ7xVbGiVn9NSc78E8N8s32N2hoKnQa9iRhz3xSWr85Q818ccfZKVR94rdMt5affXuWHp1VDiXHAfFT",
  "key13": "4MNRPwdgzXvcY35ardRwKcQb4nVAyAz9qje9eVTrDJwrfEBiZxA1yhCTZFQtTiPTvzVn5LHPnwL8bMxsmcj5ZVwp",
  "key14": "4nHdP2FH3jJLYtAy2SQ9QGDbLw6A2PrpWmpHdrFjgVW2L4FetndhpYHWuQNC9yRj4tUpXpeu6QJebvgqz5K2Wtti",
  "key15": "35JebnMG9dbvMnThNieoFFMeCjiUEfcnZSE8GsNNQ1CLLsEQAP9o2TtqHr2ed9K7xxYJr4u6MApSHRWxcWkF7K9a",
  "key16": "3wuKQhjzyTSA2UVVkHfYQdyvGtrYsPos97azaZL87u86fxchitXjKMAJ1kbVATFwFFiPdgeY8ayW5foeU8En4uct",
  "key17": "42FS5cCkAwWQwuafaJEHKkM53Cuipxeq9jvUna3spzPRAkkUpNg1mSJA17PzT2FnXWvDD6PLfbp9zft63YbP1pbF",
  "key18": "1BaoRvq6mJ23CaZRyvEfGButJAQSfzVGJnSWSkTMast3VnNm1WPuusoemUp7rxSJPi3wqHjcVtxHQAZSor5KVN7",
  "key19": "2LAJgAKSZb5Fc58hz1oqL5S8YHFQp589MsAAmW4r2Nd9yUK36ZtZYE7Uzu5cbKWxHELro1ahHnbvLCpNw8rJKf1c",
  "key20": "4bCZqHhSiap15sPipvZwL4HdExypCDvbXYoTNDsXCrtSKzEfN5eV7buMzcGKUqhmPY3nb2irfTNq8qirCqgJva4r",
  "key21": "5kzotfKZ72qqi4wecwrLBzpAtUFNf5XH1hCDPEuwwQxCpY73C7yBqpm91nzDRgTTgAthh4ev7v8JJHz7Wfn4jiT3",
  "key22": "5sDEnrWWgYEV7wm4BLHkRoKpWjoTV1hS5qScV92QDKPoMhoZe141dP83UQ13EptQWCiHueRacYdcmcQGzYbvFJKt",
  "key23": "52AMi48JSFj11ZP1EV3nPimwtNszqdG52NPE3fNTNjR5Qy121gSs96ChJUDt7ge9EvockRa5Vp5PPqb3C8BVSuLd",
  "key24": "3vp3YYy4QAJdfWFFu1ZAikdrUGqHNTbpc6wBGEmV3pYKAgB3tD6a9YtV3ytR8F8YBaHP15uUgfgMT1GFMBayMoLS",
  "key25": "SqeXsYs8DrPpBdswFQxzkpETVMgkprDc5yDqtE2J3r1zQmc1S2kFmhviPvGKHPKB7rgBrN2Gxjgq7ahWYUMtszZ",
  "key26": "5W9dCAU3UdZMnKrZtV9FfED3mehjNHNT2kaZFcr3D75g5qBPikrL3pcGozTeD6T8o16HkfcYdqFqGMbVCyLvrKRB",
  "key27": "D9L1KfyvZ42rJywkwsBF3enVykAmJW1YFdWJegKjdKJVAiF4FLwvjafbhhXSMQGrHFr7TUwbnPTNMQ2igr3U2Qk",
  "key28": "4CmoKWU32qaZd25f4MXU6RTq1XMVu8jVve1NYCMmD8Y7VBGi9bqaKHDx8qVKh4nRd2L2JiX2bYMN7RxYakfc3ws3",
  "key29": "3FfoYJXnykdJJeQgL8DWw17xy9HE2Uk9Hz7jAc6gBuQapQo52Fxx5KTfmAoYSJUQPt9XMpXMpgz6gZrsY7vcUPJc",
  "key30": "26R1WR9R9N5VnYzmmPBLpvztQhNna4MD8ao7NQTvHdPwzR5KoKwo674UfB6xVechqRoXC9Q3xKfwiPQaw7vw96qS",
  "key31": "4S2iJNSGkP2mEdjZQchWmzWQFobemtcMWprPGZwCNAdxfqpShHxVsu6f8Z46hCsEf4iTpfwRgAmUNZCcQAhkScwv",
  "key32": "Z6ftz94oNeSokmPTkAiFFryiqLhBEREbxCBGoPnTTbgXDtPML7jLmoqLygWMkCxXRZfpouGFo3vZ2zaNvcYHkXm",
  "key33": "2KgKqp9NF1JmAsaUtWxhz5TJUdPyfd3vW8ZpCFQBMs56XqgaRqVETmZGdjCAzv67judz8rVFnNzc3FZjAPbF39MA",
  "key34": "taDvP1tLmnQu49ruB3PeYpx7kNdbdc5wxUHPVxRA6SeiNCH1PjAxUjTD3CBeJu8oGC9iG98ZAebHWPqxAZBLFPP",
  "key35": "4Ckpbx3yzZTeSKCt8iQCD1XHY2oqoQ9WrnjNuSpGGm38XSsqPY7x4Hj8YFFyrK4JGShihgJNNFgoFUGn5YyEDUgH"
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
