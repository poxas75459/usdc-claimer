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
    "2EYDhuF6ZZ8e4sW6simSdUucHHJp5VT3Y3czFj5WAzFv1z9dJhfNPbYtFMwdz5HCgkB8X1Z4Vx9Ctvt77q6Tvue5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Ux8CmLCAwTGFvaL1HsugmYgjD9eZrQAH757oJWidK3d2mDRTtypHHBfz7BsWRf6jDasF4QF6WbCWzMSgCR24aU",
  "key1": "4FrddXPYJrAWKvEGj1goQkv5mi2JinV6geQvRfTcipB1G2znYzEtNWys4wekHnuG9WNXYfJdKqWnAPpUPtE8VYrD",
  "key2": "5idtC5nJLvNqX4oFLGKsgGTTMFPbuAZgxt86JR4SJEzTsvv7zRqszruEDX8hcvBLpDX1FxgtRPF1yoYneTKVWFKK",
  "key3": "5KdzE1NESHDCWUib2iisJaEyf5GmhG3i6CMQoaJkq3TLMRUQ9pYXUU1RrH8JGf4PnqH5GH1ouwYCCHZ4YdBTbB3v",
  "key4": "5JYmDMJCugum7NtGP5KB9NbkgLPDEKP9jsobjNcrYix8Y3ZR18ytD8NTaVRDdBVW94wHZNNN9XyGG2tGhCnsEyHF",
  "key5": "3EtBY1DvWMD18qbZS5jCHd2Cvy2DwEa44JVtsqTjQSLgfjgk9kJq66Vsz384yPUVFoFGmJHUH7DEe5Q4ojKp9gBq",
  "key6": "5nRSxg5aiHw8w371Y9b9YJobBYoLCvX9kcxhb5fqxuMnqZY2pdpUy3oaVRi7KfPgtFYir34youkovqwozPL4LMCF",
  "key7": "T9hNsd9akzBKc4NfFKgZUdVzERhCjCqAWtVP8UfyhTMD8HTi56ckdW6eJnfRHfqSuDqRAmAGyDMPbNvwH6UKN9W",
  "key8": "5E6dYAM6x1EtwY53qozgEy1gjEKnCLziRvTLJhpdJrMZkUj2fB1jxPQ44QZJzxZgjxLaG9S2RmHzxXvfQh32FKTh",
  "key9": "21DXuQqcFQBKPW9sGgN57n77xtKZmswsrKSXzsX9mT555EUuwH6rTuCXoyobNCjPovtwsbpkNdjiwhiVc5FuE4d4",
  "key10": "tKrajrAoUV46AGSSULS1u38UhxRNoSuaRJfmEF4yUPggsPdgegLnAsis3g7rYhwW76FnKiTBsyKwoGQ3w8pHTmH",
  "key11": "3qpYeutkKYcS6fJt762rtPbRXPwaZFeREz8FLenRHDUwMBfMSyBWY8U96ondJVHZDnu6vVELM263owQ6NUKrB3c4",
  "key12": "3fNUb9jUmGx2WEm5q6fKwiPpofXQKdSXCMeLhvu9P7bMBsSfMA8j2yUgzDpKXfJ9i8coNXMCZNDAMQBApH1RQba5",
  "key13": "5uoRjcWyvz4TJg2awYkJDUFjvMmNm54hW2zPzaQ4NPZhxygJwqSsnD84uXJavBLsCvgPtCzD6Pizna8WLoCqgyrr",
  "key14": "4JwM77kFeX8CNrjHCFAgmemRdXsAcX521UHB6M5zVf4RTikkHm4gxdFVJo2nnmpnWxXquADA56kYHuC1hsN9wHER",
  "key15": "5YDdVDXch1M2si9kG6jyqz3shrNRuebjXnmDhQAvmtxeFuTuo1VjQEb74Nyqnpk2NB1z1Askjq3aMtWFeFhG6LCE",
  "key16": "di5zU5Z5444fErzk6q8wgADni6DEAwUrDa1mTqmoPf2KBaMDZGjz9EuEXPyTMCmnKtQyEqkYBerkRqhoYWaGLvr",
  "key17": "CSgFDvDA5eC3csMUr7zXANTQZXeSfT18zah3dP9zJzvjtW4HnzjmtXDXDc96Z7zKB5XXEgVN8yvYu4cA89qc7aG",
  "key18": "2qCDH6SNzB8wAJuxwUShnSasDTMfrJtLwyYPCDPbUbv3DV3vLdQXk3F3pusyQj2rYvPhbzj8bAfZbAPzNDFZyLgJ",
  "key19": "2Q6jyAiwGT2T4sFEMrhyUbqyKSPtEhvynUAUWXE4M37dyr45YRGJv5boQ6DnWST1SoPf1VP7atGjLsNw662chLkB",
  "key20": "fATiNvAkgzoyj1gRdsiipbfwxCnBhAXzjZwTnJ55J4rJVz1s1Dzp3KLTKcq8uQwoxAv67C95sbDQGdTYZwC2cxZ",
  "key21": "ShzwW1tVxRRJdpMLdFZqDr41Y2GSDavBq3SiNjFkh5fzKasMwnXXoyaft9wFMkj5p3JRKkjq7p8iwkyZ3T5g7sQ",
  "key22": "3uKWPG9BRVMau3iVQBQZAQDZXDjn85XPKudSGVZxDMPRvMz9Ngs63hiAqrmtH5qLjZ1pWk43W2YuAPNQ7qxg2Y3g",
  "key23": "5UeCUDXbyFVEppLWbtsV3ZqrD3RAGNmeVArGreMgMbbsR62GX53f67hPfJg1XjCk1nk2vJxS3ZGChB3RnJBnYbRZ",
  "key24": "5UkoYosZiaCvcMA7pKU16trft7pb6E1KNwQJT9Ke4rQe7jGMACMRQkdfdqjE8rXJ13oFgtbpKbg46RCHZp1gYkfH",
  "key25": "5UwxCUJCeXmSQ2pHtUVhP9QJB5WD8yVo9sVmPKw1j2jQEtenSJBgrvus8XA9bgTFrWTeWBfovPaYmBpFDyzBebo1",
  "key26": "Mmhj3qXURN1MNcEFTTCoWZQv17W3obcL4BbV9a9NhzFaX9riC2dLRiWkKGmzL4z7xqPoKSqfdxLVEmMniJtcPMR",
  "key27": "oGYcXvSAzqxgtAAbWthb3SoKxU4rXrAqxqUa1pbLB742jgrJzCpdX4GGssRQjjVzQLYs866EBcqMWQ2AnecPiFU",
  "key28": "2Hb8zr3t37Z7daTG7bqKEnpLpPnRZRNcUcaXdvXPtfzEiNQQGuHMN6xcLJUPfCgAZC2j7QzXJrHX5bdo3V2KPABp",
  "key29": "2P1kDPpVvgRcPaYDJiyLjSonCD13XqjqqPN3EXRs1EA767JhhvMvGnw2e1X6Fe1GcU2A68UyLiP5fGQjpQG9VNt8",
  "key30": "2Cp9d95SR2xXmFG3UF8HyQ6hfSgfU6pjjK3CNJkAFzt2RM29EcWsCJJjhMrJB9tmdHcD856P4Gw5ruqpvacWo9yo",
  "key31": "3ec22auaXAct1dVsGqTGCW7VNUwuyJ2qCHeAGnmaskxxqsctUmoL67444mGFP6FzXtRfGqkpCDovySg9JDMb4UA3",
  "key32": "4bY4s5dKnRNi8xa9equ4b3dzQktq3bCdsoq5uiTRXtzFYQZrGNhsi4bcw9GG3prNXe15rUiqKi6jJwQJNUgpXYZW",
  "key33": "3LkiPaqiZuGNCnQe5aDAquNKcnbaWcQYxq4M6o3ckyhPxAete9LJa8W33Y7MRKfTcBATEMB6SvHKMG43LL1T5fnA",
  "key34": "4FX66cVHEUMLxHE6ToAG8erQ3osrrxMageKYybTzxBy8ywTuDmyuzXW9KjH1emZiCu6jEsJH5nX5Pdrr7YBATeiL",
  "key35": "54df9abqZgMSKjt76xXiNn8fZxs3StcW99TwoJxNTwDMP4BS2Vye1oNzGqKuSFXsqw2x75phcK7zBAcZvhSC7h4c",
  "key36": "3o3y9SWFAyzeGZCGv8cPCeTAYT2ZMjaEngTPphmyMxMZ6X9ovXKgrtreJmXN5Rr7YciL35xsiE4E93n99Lmm9Dqx",
  "key37": "28DBkTv95WdpBTmxXAz54fEsRHbVajoKN5cwBLDvpfRp6iHWy6Kq9FLt4N3XgHkvw1RgjwDuqKxfkSgBN6ukKTNs",
  "key38": "AR3HrSeD794vitG8Zv65dZdqyoWNNhZtjtzELR31Ppsj796bPcyoV4bNTyWJsprof59SzV1tyVRXoZioAnukDMy",
  "key39": "2ogPVTMB7ZudZc2CmknvkBagLs3LcNSvEXceq7TGf6fLx8PrP8zmnuMHjo8EzR8wUJ7xFfbwWAerGGpJDxi1pfEn",
  "key40": "5KZkw76dWv962nbdge3AF8ezYRk5PQGuqjwGKtz5hiX2Xr1MWCqRsDSmGQDJ4vw6R7FcchnZfMR8stNHz5owKcNt",
  "key41": "8Umm3qmTTdhJDPgaLf9sBnK4GZEyMCCgi2QMEb51RBnRdXgZLQTt6KX6cPxupvHUSLhNEFSB2wZCQFKYcDresXo",
  "key42": "2joeusSEBafjDQGwRdWyhXVsYtCFVeoVEcWs8QCySkK2uE7mCJowWtKES1BDgY2o6ZPK9VTqRCzLEYV9G8cP64it",
  "key43": "3fB6tUtNrc5xU4jKHQykwDgvJXBqiNfoY9SFAD2ToGVnnQ9G3whDLuL6mRtaSNNrLJ4qfzA5oT1LM1FTthE9b3aW",
  "key44": "5hr39AmMM77DawSFthMvf3U4Q7Q7njzH7RQXX8Vja72SEub7UbHousSix9UWhWcZEwcMNL8PrFNquoLDyrmtvbie",
  "key45": "2VC3atKuBzbKDzkB6qVzLNPJxSje9ekHe6conK6LLsmRQQDVJE5DNriR1nBhTG6Czx3MT5S7GLnq7QiTZcgRNgPT",
  "key46": "4bLiqoJRt9sLFEGtaDPseKD3h5gohP2La2j3VBz48yXanLgvnpa5ss45zUfVnvWtK62oZGm1Csb1uZiTY7WccDt5",
  "key47": "37PzyTJ3KMgvyxbhKcqgd4e4xRVx1J4BL2uYX7NBRb5fDUmuownQihrqw5n9HmMiSsHrFZrAbJz1ahY6aY8DmgRp",
  "key48": "5qDEXmpEHeM6vYKWseeUzsYzEydtedCKJgrucaqwduHhDQSvtZgePQL7cvdb5ixRjh1dnhhA8LLhfVXYV4sBeu3f",
  "key49": "oNhcyFq2zsFqUEFo7VL9aWiJ28J1yZPzPNcwgUbh6NenNX6mXz19z2B49St7dAxEyv7ESxj19v2w5thybJLn2Hr"
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
