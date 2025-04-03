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
    "wDo1vxB7gZQRUHNJFY5Ht7g6bPUqQZsfnGLcEKhzfR3boG9AyBiovHPCAnzW4RKH4KwCp4Afb4zeGuss17MtcdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4nPUdapupaSh8QRyormNqKRQ1wDDnvodVVK9bbBa76S4pd5VsrKZCTznZscsU5LocYB7BisT2PNWQfEjRfF3YJ",
  "key1": "ksrRaRBjoGMoq5W92CRKZXtgebgGPn1c7xgyYYoPEiUyxxmUVdtApqAzMwz2QCvSQv97EeV4i5QrvBdKzt3Nnn4",
  "key2": "23gHt8NJcKjHLUhNGu7yMmav51iSgKG8kxHJ1BQ7VFSLS2bV86B6e2bg94ZjSReMqsQWXtF7yWhcSpWEpzGZoN98",
  "key3": "2zQ6pzm2iDFLVicMGfT9KC7JMr6dkgukjQZ6CbNT3EtsR41KFEupFhkqEASBez6sJU3JbawAcFGQfbJZPq9RUtnz",
  "key4": "2HtPqAfd3vaaji7g6WmjqeXdS9wqz4s4SKnXB7hZPvA4boP7pq1yXrQhg75eacbjU8zTBMSHZWd9wUzCuAXABj2g",
  "key5": "48cu3zyQLrfj5yGSWnTpa4pHMksWtM8EdU4BrSyFtrjjpZi346oBoTR9fyJN8bjXRHmpmukcDSRZQGqbcZyhxAQk",
  "key6": "2H2b8AcjhVTi1X5AwPPq6WCWhS6xLgdHhtZKFs9ac4SGAi9UeLdJEUPsfcz9NZxnBhtP8J3RYKNoVP1BeQTF5uYB",
  "key7": "58CQmpP7dMwwZppemGq6eDbGgLcHUooiBZCkjYeJA6yMLAH328qpVoTLPg1ory8u8fu2VbKarAinECcj2TiWFYo7",
  "key8": "4Zm4oH8N55Cu11fdJgWbEkGSTPM7yivLhiTgcGHTutLcoXQvVQG53iaz6NtQ9vLKWcEGyDHrDrdv3uUKjXkLpdhL",
  "key9": "4oAGTQ2SWEEtjLLAVcirG24B28XWMpdPPna6CSDDVpa9arnJEEYJcLxEAfpsJ3WiAEGyXsFdAeUrKLHWLRkwvkHZ",
  "key10": "4BcNci5aertkZPPSgULSWBgGu4i3HbvD69yC5F9zjgwd3PkfETSanci8GXzjH4ChUiiQyuLCXYHcvTg47qE84SdD",
  "key11": "63jbP9Ps6RqFy7xXgQgFZe893pKDKuPp4vr1zjtVjNyXzUjV1pfnYLK3sFe6hQrXrmmJZLmRd8bjJ7BbBUT153xZ",
  "key12": "2BR13kQhZEpSbnFqZHF65jSVXJeQ7sLKdQ4sbbHfcdEHoSdios6pYS7NndmMqiLLVfVYMrE9YBpeKG4YVTy3JRBd",
  "key13": "51tnyw2bMfpqUGMi9VsWoMTM3UkEj6ntWcLwjhij8H224M6iLQQi3T1eW5Vv2b1qNyHEVB5Rj33JV6M2KgMRqnYZ",
  "key14": "551V2mCjWpPTrYg1tivAHMZ9PnnxNofodqzCJiaNdRYprJxoSN4HAzVzCAZNF3QDq9QAAp1mDcxdH2gNwoZLtQ9D",
  "key15": "49ouL66LjwboFJbSYckMRrdMypXPAUavVgxZZkdYbVKKjmfcZMfj9JUTRVQe7XS3EFK28PEupR6dbYTHHnBr1jib",
  "key16": "5YASxK8YTBBEk5rL4mCbrdYNFgErRDhAq4Zb1gHSpNLUVhpQctRCbyFgTgco2a5ZmtJsqQTcXwPguXQ8nAFBhRHL",
  "key17": "5h34y8mDoQdPtofPhwAs67dF9o9WYumkJozGLXrNpZ58A2abhbiZs3RkuRahAaQfiBVfXm3QcwZPA9HyQhQevPL",
  "key18": "3gGd1mS6mewtk6GCwBGjUwmJKVeg6vcYNin23c4D1396r8bSoWv3gkLYtoEn4Bk2N5NghteaM5c5St9LLrss8oXV",
  "key19": "3RDh8ULuQ5nygXGEGmq5XhdMybu5fHjok1bkx57VrZWqQCKuTqWB1TcwwGmGFRnG2we6qdXDMxgLT1kAgJTD7Wya",
  "key20": "4MtK9RR8xCQfXvJViDT4vatFRT6W93K4ZqnHP4YgEckBcCccRrwtKD6cQ26StJjd6zjkBMxpw9TN1oZyDsQB8HK3",
  "key21": "poVgnbYSEZ7WfmehaAKGZHuMUwpVM8ywsWQHVojFDkb9GCEXDCfagzQCqWvun2nogyqfuE3nhbvVcxQP4fPeG5D",
  "key22": "4oWnqvdYHBMYqTfyS4Ucx1Yfzxi839Mi9cxV1YDqbin7YiDQpCgtTfCbawD6DrQJoSTp3A4c7c4mBsuCrc3RoTsb",
  "key23": "4RAEiKfzsWcMczaWGGs11arqHXKJwrPs9EzfK6ToqUo3a2vw9R9iViJorcCyC7vSDyyKEfKRcZJuyHwLK7XV2q27",
  "key24": "4MBqiURWZSs4mkLPrgKyBHJT9ZhX79T2QNW91Fde6XUEmXePTFUMoUCnNmCEFXa5KEgC4oHUanAV1eQDJguy1WkE",
  "key25": "2mrQbMy464i4zibvUcL8kEB8125Est9cwDGRbPQ5A3kjC9S9ofFYT6NQCz1g2eqD5wFt3srLT7AC52oHEUjS3St7",
  "key26": "o9LSqASrN9rDUKcv9L19DPpHVrA1KXxkMDnrqjTUeLDA5RrsezPdcBGvgSdaGwYaVfHX2dSoq1iz9KCmwhuumwV",
  "key27": "64C8sgRzW1fcHABkAabHVvSaMby289wcZVfNjwqGH97KTEYpNZds88fq893Y6TLZkxf5JnemF8nKYiVgChHYKfZF",
  "key28": "2gXawg8PT4muEXvw49mTc4GzbfSWV4tcn3M8EDw7Zk9RE4crRtsoS7QgdJUj58Cmct6YJTFSvzrxSbSUzmQmMovP",
  "key29": "5CaaCvChTZi65fFKPTGFkj8DHhSoUiQSmnZzTYYLTtEAs6D667U9V78HDxSEB3YJbBJ6TuUnoCBaz5PPxVYRKTHu",
  "key30": "5PPXyz9PyC81kijVeJoVCyrmoge4kQsAuJdnty1HPDv4odvknWD2JrQ65GAzZeqgcjpNsrRbgce45jW7ZeXWs9dX",
  "key31": "3Ldmf5Mwv7RBspzgrGdCag8S4fQGZ9oRB67iewmiyAtxDPHAUsvQ4CGXVmRKtEx2Q2DnFHVddMHy4WjLWd2XESzZ",
  "key32": "2ibW31psXc6G2kLKxZy5VCEGBAqcCpqW7iSbknp7kKfKLpQphiXj1vFpWSDL3wiLG3XmGQ9AD5ihGndPQmHkBXYa",
  "key33": "SV3MzP5DwvsbVR1s9bm69Q3325LQNmHR9ftLm2YLeJG6xGyJWLnoVLWtn2rYh1GNTBx3b9NpgNKK7Tau7JFFodV",
  "key34": "55XjWQPdaKYNjk3imGxA1fLrkztbGEkYaphG2UqYY4mj43VFSJYh4iky9xRCDwBEX6xc4ugbnvCiuAr6hGoudPP7",
  "key35": "niQ7RsT9ZKq1Msggf3APkd65ijPuCmArf5rwarcKjEwniqy2JaUcSiiFYpC1obNh1EXkeA9s9Ae4r3RNeBKKHu8",
  "key36": "3hUq5o2jrwvXjYxCSFrdK39JNSQi5A1afCoepLnMu8inghPs97z9r2542kkFYKz9h3aQWp8ewaJgwrQrFvRZTNrb",
  "key37": "jeX29vkbPXhAvkTtq4Z8jzZxctHARytF8hQt4n7ce2EGpj9LrvuRQ2pHGpJvg9uhK1gPJPPbgqJDCHwRifJLgbk",
  "key38": "528drZpYKkdkGKUt1TCYArkDwVg7P8dTonczaRkjXGhGHpt1xoWjvAqUzrSUqv9cjmRQCpEGjT5mApc27bKrRbDT",
  "key39": "4pXt9zueTha33eqkYYX7XwWTWcGqwqyCHo9Bne9Y1jvVSZG63eCFcf5vqxxtsJRFLY7YETzmxD4LSvmQhyPqgHBk",
  "key40": "3Ed8gugYMeB2auiesqFrciqDVZu6myTqPy9nUsM5Q5ka1Rb5s4txBTEtNcFiShT1E1Bx34WHdHMDKpfEpDG6pwP5",
  "key41": "4hZKMimzTy6T97ftjYtPHbRkiHApF9LeYsDUsAbiNEKGR82uUrbZKoZcnJtjJ1Jr9gkxapSQJU4vjBmgr6sziYWQ",
  "key42": "4sfvEfL43jEm263LmaF5xKRQAryWyQRwMGPnDS78RxZkmY6UrmnZaqsMH4TeyCdiVtUt1QS4WweNnhnXDBxe8iJo",
  "key43": "5w8ZTJn36MYMM2QV5RRtmhm5s5qPL4UJvuJmFuuSXRACYNqLJu9ZMgJkmWiPzNAhDHNnYqsMJyzFfTzW2u1jC2Dr",
  "key44": "46vTKkX8sqA5stKrUc5WP6FrpVQFRq6gqGqXfWMMGKLdCQETBgbByrBdwHmg7pxeDhJn6YU7bqQS4jY5UgcMSDXh",
  "key45": "2AYL5fxPUgW8gqQPPMsmjKzBu1MCHb3PLejTjFLZhPeM8raZX5kZ5yDgtLi2ZLMMng9Uc5A2z46aHX5iGh1cibhn"
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
