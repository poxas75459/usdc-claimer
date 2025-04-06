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
    "2W88ZnP3aDovt5SVZ7XetgqTHsT2mcYhKnneRymSzdPvhTr8N3rzZYBW6bdB1RBqR47Fc9iGHdTKBdE9BnJF4ggD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHMSfswcGo4qp6FsktddTukAmX4WsR8aGwBMW8jdtNaKfS4GcVFBXh11Q4NFjAuQVjDQnKMYvpc4uUGPsGXNivF",
  "key1": "3KhJ7CafW96JMNTkrEG7Wjy7fgDcghnrMn7fBmNhwT8vhG6mvdx936fYt2hnFX9tp5BgmzjkRotoKW3o3X8SfBrb",
  "key2": "5u8FuZR4o88uZjbyiYGgzXpN2rJUj6SvNTKEqz8gyREhfrpSAjrmKGwU5T3o7SExf33xnPsLmu9Ze6vwYD58Z43Q",
  "key3": "6ePKowqPmWjTGdcP6XzuHYrej2K1usL2XCNtChxANFoUfEu2wzWnYJRBkPbLi5Bsnjpx3rLdBiFCxLGeQ8JU6bG",
  "key4": "2skoh624gFQZP7oaZGXynqJuq4pB6W7AXcTJN89aHc6wfiEuAjPB9JhkayDEh4kdPAxSr18B9T2QrrLjzLvDX6RY",
  "key5": "5qQeCKYEui8cfsVWyMoSiqPQ93Dk5wRNefajeFdEcRaaPSwZ4zTwirpRG2hrtU8GyerZok6WeMnteeD5VLdtu9wN",
  "key6": "4gyR9Jn6RFMo6rs12hM3VkmyvHvuP62UxnWQhaGjb5hficYr7WyaoS7PpmLzUuNDmmKfug5pnFQybV7T2ziwmYsx",
  "key7": "3Wph3VVgCEKoWxAPuFJR2gMumDJswvesrV3ryzArL7DakS13BUKKLec1tEJ4DgmbKbHSGG7XP8V9esjcXLLWhQ5",
  "key8": "34Kq6qFpC7zLaABvXtsRWhxoFwBzBkwxczt3dTcd748EHWsJuKKFVAmKjRtqDhzxDg4bLK1BH6SC1WLZtiQKreFx",
  "key9": "fqPHjTViKVJDiewfcM1cA1SVrcfHfhvNiFCaqhGJF5GP9Ja15MqtmTrPbuBH5G3XP8xrUAWG19mjRisqW85j4Tp",
  "key10": "3z3wpLnRPgpBjDvcGsCCq9tYJQUmeiLWufv3Fiwo4KdM4jiorPL2MsaroXe3x86defECtfBbUSPVrPoC4yCW4d7J",
  "key11": "43b5hjmFLHdGhZVSr3CqXH4DvhsfASZdK3hyeJpVcjAmwuJKLUNAUK6ioj7FBBWMLC8tV3zaLiKLjsYQbs8briyB",
  "key12": "2W4zTN3k2p82WdogpFKu9QNfUn2QmTLQA6oTxBqm7UNiTtBEjr8PYj3GJjusPB1u51tV2UnCzyHN6c1NNQNuFMrA",
  "key13": "5qYv7oKpNPdqiub1xzPECdnd6eJFCTEJmdMeLN4BDxxDr5bovV7UgCTFiTTDpepVv9nmXjGaHYwhKHikr7owDyqe",
  "key14": "5eisea2RYLK8zMSfBqFhZD9RN433qeu3WoP91negcCNGEKwRuPjhrYTMB3w7L4RgEUcHypvuxhx9W72pDcXggVAD",
  "key15": "2mHzELmsDBAy7gZY6ChMa3GMMzF7yeTaK54g6yBfxNT5pkgoFpHDmjz7vBmyku58cftgFetSMzGLAFibehBWYmM1",
  "key16": "wVC5xURgDk8SVVAx68zrCAprKKFD4pjtXTCzLwMBPtcmEXzZxYqD6zt3cToCtVJVgt6cVLFQ3gCiUcKqR3ypVYL",
  "key17": "7wEM4YQUJ9ZNUU4HzPxvcxZfN1tBk62xMk81S4qUutr9DAnk8WCckiZan2Kqx8bH7MaTeoFfA1QwRe3GHYxNSuH",
  "key18": "y1ESTbwakaDNpXqK8MXVUEW8R1KkQZW5b2SmG9D3z5anfvVb7G8GXua9jqEVnfa78GSEiXz5AT8XMCBEbC9JXwN",
  "key19": "5mDUSkNAru5gWHYSo6UYQLPKuY7aoqysKjVaVGa7naAo8LbwiePkHSQFrQGrBUbZQsRdKFZ8RceBYHHwzrsCYYta",
  "key20": "2bStfBvBYdxLEDUinxTYLEMz2LhzsqCJTNjqodEcFjy3pnQ4dRyC6bnDnmJYDgWxPxxp42qDXsKV6fEFbmNi4vt2",
  "key21": "4cBMtHP3RF3EfAxpau7La7LiBbxDHStM8isc8z1xXwAnoPAoPtXWtXGVW2iVVNcpxysz21rHfRwNqPiqtxB8MrfJ",
  "key22": "3GhcUjJUYzeTysG6jK2V5Wd2WVLJ5WyEazwuD6VRh8NnetVDFAKpMyTroPcnb6dNJdHrQvSS54FcuFneHUm6n8LA",
  "key23": "wbLXHzbTxPGSXA1sDEXaRgjh26ze6N3Fai4DjjiQvaaMu4ehdWWy7g3rGYZt4ak7hS4DC6nqMy73smBxrN6fraK",
  "key24": "3awT1aUT3tHPmLimgwyWDtJKvzAntFwtpF3rQE9tmHP617EVic5yBMGSN5daej3GA86wjUX4Zt9LX6N2S4MTjB2r",
  "key25": "4KBwRvx1SpFJ9pa2DgBWpDN1EU9j9L3Swz1AraNFjwTSnNp95tFKwVganP61ttnEGUQPv8e4sZaSMhCTCELhXZP5",
  "key26": "3raMTrhKHEiVyBCqx6RR3EeZHq5kaArzU6tRgxC8TS4S4sKL11zS6e35WkNmv4R2SjdwAdpzniD6XV65VJSVr18a",
  "key27": "5WEWTBMwUM3awYzjGCkTRbqEejbLFA8LE9YeSqNdxPoSKC6ES7S9btAuhkXDj65aDJodyknhfMjf19vi41Gm8eqa",
  "key28": "chp8KE6ptn7SGjp5NHWjB64jKskiSxzQUgsre76gthmKFermucMJEghd8CJgNJM6bKDPi3EzazJjX2UKrF2KHYq",
  "key29": "2SvkKAc6R9yWTAdypksDvNTL8MTEYnQeYAtuh1pwPRNK3fMPEB1kGMQHstgMbovohA6xAxTR6XXviVexBZFmiqe2",
  "key30": "MNoZ7P94ZrQY8jDY1rX28rekoXWsGnWHkZgdt8rVnJ995psmHABhRsQk1qN2UD3ZKUsdpyMHMewz3xbcq8gNZoW",
  "key31": "549ybdg2a99dgzFxLDz2EuQqNtPuuSgZ4dTBgXDKayPgYTM9mVDfqmDnKv4jFiPPj3n9AKSiiwmUyCBxCZTyMtgq",
  "key32": "5QC4nuYBuZ9YskmpuULZE8kmAoyp2tMwXzRzc8Z64LpEp1f2nTgswa6rFbsC58j9vu7TQ4HXvRB7fa6bSHPpURR5",
  "key33": "4cBrpXLuxFybdDDfV6Ts8624E8DXyyDYKMhztT2MUsTftMDr9TLtGEj7Dbj5APvHYYpgRiE83wDFRsjhdKbftabw",
  "key34": "2RdAkbxKddY1o77fpD2XDnic3siFSSFtsTc7674KixnS6vu8FztYTXsjjNNcPj4adzQNNJBduoJyzzAY6HiZtFAD",
  "key35": "CXyENXm7YyykFS8LyMf9CtBEDBxYShTdbkBdwUxHyv3c8EMHSuq6FmAa1qndeBNbMkpf3ztTck4d2ghUqjjdkCM",
  "key36": "3kY76McfbLNjaozdq9c5pJCjvR8vWqRVBbusJwZa6gUTfpAEBDL9zDKuE2uQD6btyL8WSRNaPXNubE8GXopnHfUJ",
  "key37": "3BNAfK9PhVWTbL6mdFu1AJ3KhRXhsvmsh16V2qPsrKoJQ7zunyMTRSHQcy9uey1DLBfgoqXHDvMzDjm3o9eDT1GH",
  "key38": "5MSQs6RCgmqy65cmuKYyWJFpezByJ8njTwqBWBaBAwWtCYNTC1uDW29gmuR2Wa3oVTUCvgrdq9zHLp6w9fdK3vWi",
  "key39": "TEdRXmsb67gExQ4rMJd7xjKYCNKsuub8qxf8hPKMx9Cj4WjzBtSKxNr1dJbGruGgPJdVxcJaYgst9YvsGbBGwgd",
  "key40": "36xtRpd81bpsV23sZdkCkBSNhTkjBJDjRWNwvaH825EQSogxwR9bZQfspU6fp8W57RsedQN9PbbtegZZPKM3KLhJ",
  "key41": "p4EYq3MtGTxFcRjwxHR3hTUJ2i3E87hguCj2vUoidSAFawKXNeJ585PGPwTR2S9xLsK1tLqoiLtGzBHPQrLDQSp",
  "key42": "4NRx9dc5bZ3Rf65CJsSf58nmqcU2tsVyi8R961kH2Tsez1hS85XEmL33h5fuGMT31Y8w9iGRu1G19f1ykkLHNGQF",
  "key43": "4AkokgS8hF1Yp9P8GxLdyk2GGCqKRCndiJjsDf7BmSfeV3XXCVFYWbQrqiQqQi3NS2KB7YpTM4nY6x3jrerZQjsA",
  "key44": "5JSJDTRFj8gwv6nLJjBRK484KykTQLMNbhXEWRGnYkAQk4PjNejVB189Ent4ceeFJG1eQW8UKwAStzie9ooMg4Nf",
  "key45": "44c8CDhTuCPQ6NafhL31cXCjRjwxZ9fQ5XbfLQEgJzHg3bL56E634bqciNCoxQ72WC5LpMGUpyUJA8KtT99CJUE8",
  "key46": "2aF96uHZNpLBFdQ3DjiZnP8rp5j2prjwkFVEncqjpjL4cnEJT6st5EHh9iuhifYDiaD28JJtLNk8YV9yrzKdoG7D",
  "key47": "3KNBNihHcSa3i9C1Tox17mckvrauQRQVNoukGt1AAFnNQGKZZsTERYQikDDcUkMvKDYK6Ag29MWiWuZyr47NbAFe",
  "key48": "aSbFCTuPfMTxTGyxUgNcExabwaxPFRQntHhodbDDY3Jvcy9fQuWRnK2UvpceWtsnL1PX6V5JMydF6jgBRp4s63g",
  "key49": "rQ1MzgYk1kJtwvzbipZCdwydm5LgJtftZVcQ7hQ78XuvYgjeSAy4RCSs9Tcd5ZuWKywgV941WouMw6uxiL66GnW"
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
