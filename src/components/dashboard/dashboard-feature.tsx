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
    "4AJLmTAGHQd68rc87PDkfHCdwehQu7szF2hY5uJJrka7Gcr1XfHEZxkCxAPtk3nnHK3xrKUxH1dj85VaRgGasTj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61h4hiQfRsFaZFn9nWLo4cmGuifQuapNQrFPmM8kumNBdqyy97ye1XLwY7v11Fmpev38xmfcUKaBHUxnX9RrV9nm",
  "key1": "5GNy6e7kxYhu62UqW33bqn53nvNkH2Rr1vR2vEahozyjph2kRZRBKWWhftbeqJiJBmd6z1YA8ups2rFhAphxgxhv",
  "key2": "WN3KsFUggvHzGjhhE4b23jJ6q6gsvygc32YVoyXU2jUyeZJPJqhrNqu2VnbfvCwnLmgfvctb7dbDgLj7huwFry3",
  "key3": "NSDK95Q1Br3P1yhUB8heNddboHQEJzjR5kJJr3UmLsbb4BiRDuKnE4BAMHeyhseiXFFJpB4qokAaKYGLoYQ7ukD",
  "key4": "yWiUWDUoQK6vjmvmtBw8TDBYA475pdhm7Rf9rfytpS1bjD54w6QzmMxTTEtFheyNnfq5tqzUa5TSTs1gB1RyPSd",
  "key5": "2cjniHbgK5bpu5rbqnVfoSjLCmQzHbKzLdcuqiCoL8frcsDGdsBxZCaDxPeDfsdttBTCtSp819F4rGVmcsbv2FNe",
  "key6": "3sKgGgJ5qppJxjfBqrosPKaXcA5EmxTgEcsRhr4bk6ZMFEeew4MtchqTqPL71rFgTRSSRgQyo58xJmmmj5GEhQzh",
  "key7": "2bBqw6VoF6bP92CMiAcBdbGHCuA8LuhPx8navs27q4t4utLaNnBA4gLLXVg5BEwaobbRtkfxtXerwSReifcBg82t",
  "key8": "5QNaavU5W1rf2Z6oNmon3JVADU5yMpoeHx7CQxLRntDGNAnFiHZfJ5pv4dA5WQnCn9Mt8WRWrEJfymRwLajbwsae",
  "key9": "635znE4HeMEBFCUkDU4UBHXcDR8VbPSDfMQwUpZVaYoc6oeHmUhr7ttHaitd8Z9BUHDdKyv1fxqyoygtqYbXtiYH",
  "key10": "2HAWXfufVwueRsD2VAe272aYZnx6QSYEYNELAjAwfDPHiTpvJoAzd1aFNqXsbZnsuFMVt5KBNh1vXNpkBfLBwrfz",
  "key11": "4Uxvk4Au7bKVPfeyEbVwAJHLS7qVdtp6W1sfQ24HCDfGCwmnQP7g3Fu9yH3NR8LTEkLPZQoniHZ3tfpTQJVHhqXM",
  "key12": "2YiWznuNtr6dXZh13DFrLffFPqn7FLDxvCbMYXZErNmtGsT6mkZwN8y3xobzHPugSLdDgsuN67LQupso1Frj5Rvi",
  "key13": "3WhBwy8FRKVXYQUbBmUibSHcykeaQ1pfaK9DUSib7FWFfdNEV9LFYAYKgkqjKKcKyN6btq8w6DLTjEtx5VA1ve9U",
  "key14": "5nDJyWwdfv28NMf5A7UAtnY5QaqQwkonnv3o596FzT64WmEz1tJS1DaSs9Q7QoqeX4v56tR5rkAtg1TTAfjwfMz6",
  "key15": "4AcqZN58QBJSw2VqBPByLSTgMaS4suLZW3KcUSwG1yioSesacJk81VDhrPNb1oip7V2HCUErRiy24ihgjS9CCJ1w",
  "key16": "3dUtDSSraBzmtYKx34WD1Pg4qcWKQDjvkDMRHjL34aH2cgVsnbVXrby2rfs8eFfcxqnBAGLgEJyWfvJ7fhv6T6HT",
  "key17": "4WpdFkTLUfS6XAZwuX31e2esnw1VhHPqbdDLMRAGs36rZeLbre1k1tDnD2CVvF7pFtRCi8AHRMeZhbtehEasj6XU",
  "key18": "3KUuvycJev6kwaQvTudkEN3iULFGTjv6vpX3ixPVVjCx53xnyhK4ajKnWbAqjvhQFGdZB9wNkSp4LWZUywZgHNgy",
  "key19": "4sVvaCXEDuLbsBaRYsisQKeEDyRM6HZ3aREPWcWnEpHkF2nHqjMpW6KC37ancm6kK4xgXJEK2bT8wzLgPvG4uUxX",
  "key20": "4bC7JHRQ8CAQ12GdCpy3V37viRgvvb3sH94TNCAgtdQKwBc1ETSURCHYRpB6azKk66WTwK3N3ykiRvZHpHtk6PtS",
  "key21": "aKa8isXSKv4b4avM9STfttddW2GHQbVmbwgL1NnXqGWirH5ZX1eM7EB2taVa5tDLr4GSzWA9TYf9bLKSRcr7JAz",
  "key22": "eNVyWzUWz1gd6XD3zv61Si6jM98qeqwSicsZU2qpPsCSdXqPbEkBGsLDx6sMt1u4DmHLzZQK2HWud8xaNy6vHqR",
  "key23": "45xdJhnyxc4QWMvM4NSvXtbNke7F5EkEA6tB7AM1th2BduTyCsbVxjWpxv5G4guBeJjcHarnTiZ1ocJ1A4aTZWq1",
  "key24": "5KCd8hnguL3bxQCWAVLtBAcyZM7khSVh1RK4khxnwqdHyNXFJwDAeHsDk7MorTna5wAX9cdMNSvSwmoaS3MLJgFQ",
  "key25": "rqnTdGyCRJEXSD2cZbxMBEosxvZvAM8mX3Z9NQj8iRmLktgcURv5PjdBm4qXHp7v3w9TxsadUNXLpPxiF7Xwhyr",
  "key26": "2Q3S18JApUVdNGZn5KPEmdVp1zpKnBtHzQoQzWzCmWApUkZZs13P7uksKm1qTvEzQNgyGbEq99AdyhFEoPfSM9UM",
  "key27": "2bTo6Z5Fu4p6mYJPJTPX82eNe8VRRU7iWy9XgfbN71kGqYK1E5TF22HSgy5D3NVNFARPrpDAdf2CqWGo8tqQt6NG",
  "key28": "4mLCBHNm58Aod2Nxgii8eNRLe4UF9t5diVQWQgNCGDHTDwY8WomiUykytZeogJDiNsttVCqja6j5NCLVJvsDa21",
  "key29": "3y5dir3dbXRP9hbzHiWppbk9FGMmz6nW5PyvwEDr7dEpxMT5W1u3rHtyeAdLuZ4HYbejM2rtGCVybobQ7oBRBCXW",
  "key30": "2ibHMGdaRqUeMVSHouBCe2wyfmvYmQQRi1fNJMCs949s5ig9u6JNALCdHbbWRoNPVeqK7oCPRBJJkKk5M9N4P33Y",
  "key31": "42fr6usgDcVBBV4rkiATyENjwbzTe6rSbmSP2b69Xi8x95dmdarxnDifu9JDxrLU4k9ex8KKejbUGtqgQXJDYPbo",
  "key32": "2Tw6qyr4R6Vu3wL7caoKLaKdQPEY2k1yWBgh7t6ucwJNEoZg5WpGGGjaDC4k3Yd1UL552UNf4BRqEvM5UCFWpYvu",
  "key33": "58MtiwwJNkQ5jbsJkYEb93MkDEsXWgExFygCanYKy47sGEgPqVc2JM7fDwb4Q9i7zoV6NnNMtuJFP3FUbiUhEbCr",
  "key34": "2kcCtUgSiZh5d7b8iWzaVj99AJWHQEhT61PaqcuLYGpQx6LB1dR17j5p1wZDRLp2eWVL83TF7X6PdF6inGw8J2Np",
  "key35": "3uhniPvJ2aVQSzSDTxyfhqA2V9kdP7DiKVhZaXhJMnsk4ZKRpPje6W1eY689WDjG5GoCUa3kQhqdX2FM2P1XyaDz",
  "key36": "4HXnwmirbzXhQrScnTZkXp77qdGFtomVViabHpWnZfwm6eEreDVgcDpdVxxxFmoGSzeoV8cRqrS3i9PJbbPcyGw",
  "key37": "259Eg5k39wvjVoVgPcLEEGxB3s4hszNf5T6sYftaMbuzdhnT5m3gDxVpWHrpNfSxmcc728NedCagzC7CcFws5ig4",
  "key38": "2LJtLH17eUwRoAW7GFTq3WgnC1ANxo5TX16eJzTSDqgUoVbQJKDdfDegZJcuBCKQx4MQEx1LFywyLdFsiQimJhtV",
  "key39": "2hE4U7eKu2KEBhK63N8EDGpx4sTGoWVHHvbTucakVCwKQFdhNkL8DCxyCQ78sQ1VFYVs8EA5yyqFUV9MqEwnfqcq",
  "key40": "4FPLriP8bFivFez2hoUKkatNGBWquRhsAQdh7ggeUnxivWZs8E4S8fCUwoF8EZjug8V1qE4fBWZXEQHRbWqsywqx",
  "key41": "2kREpWjwW7TgsrguDEXbn5bzP3Suk4q6W4Ae3oejjdbcYWVXmXuXLZR4tyTXqa5MnmKfmjB7jf4QfVDSyE2KKw3V",
  "key42": "3c7cHA9mARVG5X5id8F9dhaePg7MsQSSR5pf3K5GDUe7yeYxjX8DgP3YXzH8qYuMn51NU1LiTXbShiqmPHU7t7Af",
  "key43": "bo9AULB2CUhxMujc1LUKNbm1hkaxd6dwvLPURZZnfYxBv8Ra83VekZb6DhwGMCb5m7H4BjKYZU8hbMCdfUFfgTs",
  "key44": "4UqfdbYPWLMFM4yPEz6EAiJk7yB8fJZ2uteposGLtvnKQFsty4Yvtf8JmVJodW4N4tysfLCZVJimFQHyaxtzV9Ea",
  "key45": "4PYTKG56zaZdpqckTmC2xeymBzrBvFSVDiFYkGHAtR16x8BSBjVwoDP8wGcperhbqKbgKLBpru3Qy1B1EuhdULtf",
  "key46": "4Hzf7QrbQzF87mgbHkzanGHAjHbQyR1QTsTGrmzPu2KdevqMc2en1yKw5Jc6Rzx54k8eGa8Dzj9GczQvj8DQnavr",
  "key47": "2fswajNzU59iy89KPgfct3Mts71jxASSQ5wQLLjphtjXgVzFeZ8bCvzGqruZTe55sGJKkJebCyVf6ogAESGyVA7i",
  "key48": "3YVdy7fmxFtmSqzj9rE8vs6gXkDuMkEZGLkPSDnaXDDUT6EZQh6wH71zk6ZvStbgk57nQzCai8hmjqQEN9DiXUM9"
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
