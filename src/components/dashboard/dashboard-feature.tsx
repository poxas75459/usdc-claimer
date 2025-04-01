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
    "4JQApvT6TVyp6fKgzp6Jhae1v8u5RJGQr4eeKVRVTd53VKr9j5KR5Sk3v2qAoitGq31ZsYpvbEnrZhjvNDxbtJBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nEzcCFCSx9Rsv8PJN83hmCazvKfx5KBkH857yaZ7KGSSnBuRKN64kqavhUuHKDEDvLeiT98zgdqEKSiZYbKwen",
  "key1": "53x82pUavJUoMELiHHtBYEa8HUeHtW6XUbuiyPo7h548S5gXSEGPs9eLzKgLUU7pNQchpKu4rtzBBFKvoF6DuUPo",
  "key2": "2He3w3GxcpkWc8fGhXBYzjx1TRoDs4sEzXNFN2mNkMjJX8oqxhfe4rw9cBG2wvqDYFNUH8b5ANAyrXsbEwD45WmV",
  "key3": "5ykcEiPBWto3TuD23Fqq7qXmAZzKx1bu5uQARmKqyrc7FoQ4nyfruExe1FjKoGFJ9rhCwXfcBPGtUxF3GmYV22XL",
  "key4": "27mk1CoQBcvugmQatmcKoBXADgK1dm1r8KRcnRFB6DgNBdw42KHp5H9SZRa6oN9L8XTakStxNa1YR2u4RPnzujqY",
  "key5": "2tpD9vAivrEDTAAvYPNtvqm911mBe7JKB9EPXQ9qTDA5v2S3uCL38VQCQG3WZyRYFFWFzGJj3dPtRtbAmw4NK4YT",
  "key6": "4LnmCAdvM4FD4N2KfgTT9s4FNp3yBpHTQEmdAMUtcpZJK6wx64xdGwABTE3WMULvH3UCbtfmL4d2GAnEfTNFTKUu",
  "key7": "3DZCry5kWPDyFFbcB7kbn2dYKjsUMznhzHtYdXFv9LTVDKTh7hAnFwQmYZDWZyLwxRzG7ZTzBp6apexpbiE3aaGY",
  "key8": "5hcL4v726aKiS8yNtF5V4HAjmJ8D6Eq8wVxNpRyo6czTq1Vv9SsiZCZBPgZK2SqpUDngmH2vL1s1SZ4x7fcpStxK",
  "key9": "67ZDgzECaQAHYfd7318ceeQUrHCtXZiLK3NQqrh5vwtoLhkzyv6mV67qSTc6cz5KD7fAe5JWhuKifJyfUAHmn1qG",
  "key10": "aVmrieezcJkBB4JPvb1LsXCXbYu6v4XXHTcaNAXimL4Uf8QkuEnsCBWaEpGSGGBSQxUj58qoafA1ZHM5xN2ejKj",
  "key11": "62LsUegyNzMEjp7ch8wSwYRMpVFqNgwGNERi2v1RRBR4XGMYZBEjaeLdfV7AY8w8LdZnuGXCtWqYQibKeXMBjHiq",
  "key12": "3MyWQnRuVyYWdh7eHC165NcEw4CdFA6hXcNs43cpGdviFwbXnpb7V5H1tfyifzBnVNtksiSv1BaTJFX6v76Ke8NK",
  "key13": "NsmQgpvzvySseJbmZg7RnZEpUFX6q6izQSWz718QMhZZv4tQ4kMFMZvdkUzoQUVmkdVXukvdCkCvqCJtqJe1n8k",
  "key14": "Q8MGAioXWQ7NS1hRUv5jYcBpp3tSGfGcMxNhYmREePwFJvLf9R9y2Wyt5iQ1eXWUx1VWRyNS2puRwKgQ9G5B1Qx",
  "key15": "5H3BM7Gz7CibunS9HjDPe3EMgosKWNrTWAb6akMrQkSyWzFNfUfpQd3S5BBtNNhpq6qfF6GzFqj8HAiwWz8PJyix",
  "key16": "2Ppf4F7fhinW3sz9MgPv459AuB1ChfHoDw5B2wX9GKjWoMZPm9qMmjgmw6hGW7mS8X2DxaXPG7noxjxNCRE79ePm",
  "key17": "5XWM6E7ByADVJLjQZCeoJ4kJpME4oYWZ8h4uaaogCNCLREznaNQQAQ3o34gNNxQLPzofWrzYAkVHadbi2T8EoQnA",
  "key18": "2jQNxdDLNjDRjDX4as67PpD2krZogCTmCniWqzgGPmz3NYTxKsSqr3k4c2t83nToWM1dAacHjqW7fYETUaJBq6ZW",
  "key19": "2bo3son2mddgPTXVbGrN3FLeQz9AmU8eqW8PCvnWWCNWyfzTDw4HH71jdA9GkeDwhrh27Tdi8CEyPrMV1pqZvkFA",
  "key20": "5aBzsUWJYwzCp7ACCaM1Vm4B6PwEn3TxU54fCKKTSL7H2Zoarg1ySMmx5XCpP8nfqamSrMaEpwwMNwDw7MM1gvLS",
  "key21": "2A4F3BJaVk2bnV2df77HnwEpUa1mr15oAEGLFDh7c2nJ1YYwoK599pWbQkMLcAPJ7ETjueBKaogu7tfUnFeUMieL",
  "key22": "3HAcZ6fU3gkRaovPkSAUKc5Tbt3AEbeEATEPbaMJBGpXtghhVZSKAKW7BmQ5V3kFvtFuNvHJBtw1SsC8UDfj3WLu",
  "key23": "asDhoLJdKPJw9DUUbTBjubPVrDJzHVT9mE6mwhifWKWKQEW8VbBYKh3jX4xGZRg6jvtob5w2MJunTtBAwxRX7CR",
  "key24": "3nwvQVcGjBspTXqnr8sqqgd1ZvvgN8fYy3p8UtQmtETxB3NqFhBUGsKoiywPHqUZ5oQ2oJHLQQ6Nrdb41jKiiaYk",
  "key25": "3zAm27CXQrmKbXDSbeNjUUkWkMbiSPEXAwcr6RtaECbRgCXF7CPy9L6C2CcZyc2F3JtFwJh6B7eyH4FmbYhKv2GZ",
  "key26": "4kuSMFhF3csPG8ZW7JgQaGYgMuSVPf5JyRTyxbderrCzE1sG5VBcjUVGvhmc5fdmEBXrQj4Dkd9baoVephcw3Lrh",
  "key27": "63Xzm7HkyADApD2mXT5HRWm373TbNLem4Syb1K3ZuaQUK7odTNbi5vDxRSUC6kVXtHK1V2r9SvkyJUaxuRZ2Tuh4",
  "key28": "iJhdsRZNuWs9BcuivrNbHjGosiodrm7s8L5WMvVo1oYmM7LpsfX9izpDpqgyFoWbWkv3SMawFLc3AhnXRutdodU",
  "key29": "8HDThvysE5p2mqVH934AfakFMGVkGJ3DkTo5eftswFzWzT3sHDK5dezZtGWv6KenFL4AfAUpKVX6pdceEydVPVn",
  "key30": "2UxMTZagVs7cgHZVRBpKoUTH14Y4pynw9HDwxACWemQoYQVaNhWxEsQhKHeMZ77wkf6SSJz8e5PADy1J2orgC3HH",
  "key31": "5TwdbkVqJkNLf8rqVKyMEf759unKzDrDmWSwwSLutVHw3pS9jjHVxWkre7saeHURWjkeQkpjcsykXr8d82Qgrxhg",
  "key32": "49xusmNrVN4xBmvBbuqoktDDoeUc6CyaX6X9r8LCpPmBn8YRcMYiFNp9epJfZxWbzpbAwVcsgWysRL6oC4P6LBtR",
  "key33": "3CuP9bybSFeqBpSGjRXroqFLLGyWXy14rNstx3HTbmm8hBNBfaspkSQVEk6RHKLhiHFEt1xCAeydbTVvgzF9ipzu",
  "key34": "3r4b2fF1iEtxTU7LRkKUyzHrHuFGJGmqxCqiPqXR1rLnz2mtdV1adTpZWYbom1Ztsq64F6aRjFSondVT3US78QEL",
  "key35": "2mR8GYyfEaRJZvn75vYHFN52p39akKURACgFimwUS4YQmhZGxnysjfvn2YDbXjCy81grawkGV6HM6YpobKnmn3y5",
  "key36": "29qu6MaAkoPKjTXMNVFgsQsSiZXYCEdiuE3eNPyDsdH7aTLZcC1Dxp3NujBwyc9YT48EhShF5jKpRbgcs5EiKH3a",
  "key37": "3o3pXb7CBfi229S1T2dQLXZ2j25MGc6JSGuvZQWaPgNHRQ94D11ZDRuu4GARSA6DS5Ewh1uUufZEWLFeEReUEehu",
  "key38": "3tPsQccneqAzsoUrJXLC9yQWtM4NuAAzVtETEP24anGuwKXqbXcU161p7sLGV6ZgyzhPt3Ap67LvpqHPFMk3mQtA",
  "key39": "t6YReA2M1GfFygc2i7EBwCNHxSz3u2skLsSrcvajWFYutEVoRC7d5KGdKUXfz3u4htnv8kJrJq86zUNVCUQTWy2",
  "key40": "3rtC1dwkE2pe4AtHkTFbQbppvLhtvzXCT43tkrHBXs7U6WNE8t27Xn2LbYZXerNF3V6NHWCWBQLTiF57rk2T2y4e",
  "key41": "Ar9bknmvCsumXgcynBrXcjH4Af8scvGLK7MCkNGj3gsGKWBvDRSS7SkJuzLg9kR2SDRVKpAxg2UWULPW62BQMTD",
  "key42": "2khtjgPvnHYCagbLsKExaWfs8sD6bDE5mtjvdN7SEQ8ze1gfBN8SdRbHEANfD7c2rowQ77S9AVrb3mkovXPMwyKP",
  "key43": "24Arapm2Qx7ABcsPonaHt9modsksMdjuoHKJJhMvUyroJSL3XxuiKqseFYjcNPSUvxvWtaxvA4MRTTe848uNXA8A",
  "key44": "2h7ztaD93rRnC7diYX3qWpfcDmiqEbqkBCefQF3e1opQuutovebPaNP9cDLw5E4H8vWmT5rTesozR9esXE1Jkbz8",
  "key45": "2Mx463d158hkdAR6oJj2eY48XR1VRUkUYiD35xqi7mCkqGqkREmdMxV2DzxbHVLjkFGrUggjhBshPMuTLfvKeRdj",
  "key46": "6faw8tLcUjR7JDWff4Q7d2kmwRWQnegVx9ChefSYgVbE721ME1CAzrVD4oyJbW9BDEgtFnYLM7LmvEnVZgLpQrf",
  "key47": "5fUoe2t8mA3JgjPZspY8bqrdWpQsvCQfsxswCRGrpouDJGDpYyzZBN4E1ZGWyfLyfB9TuP5RMpH77hven7zrFti3",
  "key48": "47DcG5zeSaTGCHzQf1ei2tc7q12sMxkieFAwHTGCknkvAEHJpfkYogt8YDZkw98EkdjcbtUuretUa5d8A5uXV6po"
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
