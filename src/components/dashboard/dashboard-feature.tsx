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
    "4917USuiJe4s7wZcxmRwveWsw11UiFGEAHHhu2fC3ESvN9ue6x7MwEQvy4ULSiPF2T18c2fwBVbNaLNMeFuijj9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEG7WqqsKEQgTFma2pZpWWFyKjrBYGUHFHQmhiJ3sdwRTwMYfFGyKqajFNi5k76EXPoE1PFKDZx1Vxcm27xY1op",
  "key1": "5xCPkPs6iFuG69QZKZNeQfrpWgVM6TFKwvy9oCAz4NvVDSTBHJ1N6v29LKPZe8rNQXspBpFFz94a82bVEMv4w2Xn",
  "key2": "2E4sn7a3iiYfW1WHjyREchfiHzcD8Wm545WaSLZJa52enkd6ivf52ciKWFBjiMxWCNqoHiWFJ4okLRMup7ceKc4X",
  "key3": "2ejnobrFJixGF8aJTYXTkAkmFtBPgNNFDYhrSrBnVHLbmxnuEqL4DbcVvkdoiRZeWH4oaZ3rZNySrCPLTweF2PYr",
  "key4": "4NFxCXGn2th79t3kSmKRDyBhRhzDmK1vWAU6VAin4sx3Q6CYYDbBVb1m1G5KX8vZ4ay5ABmMGFPK2rtEycY65rqT",
  "key5": "xK7AA1uVVu5aKiTyyigyJX4HBEgDaLuVXnGYMUhmwWPyiyyX7BGoSb6FhB62kkaUqVKTX9JAnxkPp1DzMxv1F2f",
  "key6": "63k6YTGthv3rFazn8U39gkNdxKumoQbScho6HVDLxW5rMnbMaVtyuCYhDiQtQkchs5b6rrMXiVoypVSChrp4kopg",
  "key7": "2RXQySmfE3HRmpvPCVgACHsb8fMehHAdmnEYrdgAXcTeZKs4XBkU2Gu1k93irPXrddfig2wRKV5X3Rwk47NCzex1",
  "key8": "41WoDgibj5r1J5koHzra3oQ3pw8pooBTyvbQFgnnPpjSxHh7zGbSM1dbpWxzf3k8pFPTmhy4SUZAkojY5sqV8xtV",
  "key9": "5arPs2f22VuaEc3CzP5gnD4jUmX2uwYcSHhXgyzcGnpHB8DAwNZwjt6jdYdh87KUtdfQcESCumegz5Yzoch9hknE",
  "key10": "5ZGhQXV59ibovAjA5iYMZdvjYd7jvdLKSzLDfJLpicPVCwHxwDGNNqnzkuYSsx4F3RALpJUi9P9NPSJrCxbGJHzA",
  "key11": "uGcXzxMMQiZ2czCnGpkyRmqKSJ7hM5J1obadaTUXLMUMm55kn1WScur4LyAPU9pHXLWBNj19RRZcbwrhQxBCS4Z",
  "key12": "22jcrs8iF5uWXkuZvsCwbRGjjN3cWd1GGprQa39xWcNT45quaYDYs5keDcLC4YihnQTWJAq77pQq9D7cVaTWwRgW",
  "key13": "626rJg14bKkdgQhAUV1GLLQCnjQpfJqG56H9EU45jhR1NABP2PbbLMbAnfBnNzuZfCPF1shF5UBQGa5cHTgc1cYu",
  "key14": "5aTdZ2sHBjaDE5g9ZVdFvEfrsDeG874xXiUQ7JavqWJv5EeHQp2axCN5YvoCQsFQfaxGWvm8scMWCgVshorzXWY3",
  "key15": "4P3NRurGN2MuQEDakqF59eLcf4wWSWLgwdeUaxAxKYX4r8BcmpL4Zaa51gN5yvr6UEAHncyXWMW51PL1dSLjPHaN",
  "key16": "3pKUmdikj2GXFwecnPRVwyF5GuB1WjYSetHGbau6KYq1q8p64KdSiauxYNZhP1eSEGcgg6DFAvKN8V3h5mLgi3sN",
  "key17": "4vJwDrxGLbKBVpY8882jp5s39XYGR3YfXjMxYzmD1X65uwjsxFwVKotyX8s2c8iV2juUqHqMw9uyMHgabeEDQWCQ",
  "key18": "gMUUzmamKtywttDMwmEp5imBEbToFEfxSingSmjzRgvAstw2DDtnza4MU3JRdwdAXit6ogAD6ygvfENRBCZ7W7Z",
  "key19": "2VNYEvb5TLdoREHW92LaHobDzexBrFiPs3YJTmk2BajERFpqRmfcN9rYA1nnWRzFr1dDCNmagBwBeaL7FBEcgEbn",
  "key20": "4jEe3tEkuCPuLamcgrMzSuhNfpiN9d247omgX4nyEex2JAVYZwX8guzf2c29e7LjUskvYkZemJNmu5D6qLsJ6xB5",
  "key21": "51T9EJuGKCJTmsotjc9AUqqfNc6Gc922LyepkpcHgB2FKJ8FRWveDu2FFP9SuVYBwsgEaZzRGqjYzfxpnCRmmUTd",
  "key22": "3BRhtTdzgfteQd5YrS9RxYvE8tiiEDaSY6rgtwr8KJCwwNtqRZacaCb9yYfWF6ZvM5nhLQnjnqLowar62ELMPxLh",
  "key23": "3YZ2cwErv2rjpqWiznhagaEe2NFNXmg5Qm6AueQkPeakT6kA7AdALtNLBcjtQLc2RYAdYibJhSHRxSs92j8DYhCA",
  "key24": "5CbNHgcHkeT3Y8K94R1DS4HAYTQ6pfgfwSgP8K11Tnm19GL1deSsJvr2Wnrd1GRzwqtXbX7kw3qn1x5VCUNMrans",
  "key25": "3anE6YB77oK4WJuTGajQHUcuS346NZhmCkS1SCGwFxP7hzBuM1KBTqBPgwzWqrd9JtAGnyjfd3J1Hg1eYXkD6RLu",
  "key26": "3qRDCFhCdjA2nt4tBwUi7XHgER6nSAMvdRNnjH6Y9KoW6aHexQaJva1KjWTe7cmKMdGeGn78Xhv6LRs3RnPBMbMX",
  "key27": "reARu2obD7erqgZqY2Vq1sqXbrqYkvwRU5ZsBBsebYVwknor3PQAswqdaAF63oHXjD3c3BZRm5CNax29s6SWisA",
  "key28": "4WgHkreYxdeUioqTTHqXTHyzxQtqM79Yqt8C9zP5kpC8xzPpveEd7R9BL94D2euLynQsbzQEnbgQXnmsQXQUoGvy",
  "key29": "2bhwvmLSj5YepBhG6fg5hov7hdafwrGLC92oP32AmdZuGwKkaHCpUczm8LHzK719pymBCiT8M4pjzTBEeuXDP321",
  "key30": "4xVvviU66iUGdoj1RNgRnp8Vw2oYu3cTNrMw8ajtXVzk6AwemXS1JyBt6WZYks8MN7TdUUB1Qua9DRqcvL8ASkuv",
  "key31": "2m2dJzTpT8WB5HtENy2pPMyX6XLowKspQt9Ej6JC4ooNqzmJuQBcGomURcT42t8PH4SuZB68zcr12MTG6N6X2R9F",
  "key32": "348SSpUrR5N88T7aeftuAomPATeinhDLNqpti2qMgKL2U8paSL3gUE3i1L9wcBzXTrdQkXjsijTqNP6vQkuRw7YX",
  "key33": "2tCU8kjdW9ettbJBaShEWuW4XdWArnwr14oys1JPDQ8dJ28JfFg4YrwZDkCi99iTk9ngBJZ87R8f8gNykujruMjM",
  "key34": "457AMRuSSGzQNzDs3dXSuFaH85FmiKqecyHpSM8zEqAK7RCKNRqgCS9uYKLfiBwEWwoqPuPVcEGrNWjks3tNMf3s",
  "key35": "565qLJPvwyvhZBTtgGFJjwjjLAdmi93dgTfs3qdDmBTKGFuV3u7KbYKDWabKcXvMyhQrCDFrrH4i3DdUPG4GSGSg",
  "key36": "5CCiMYJVNpvx541SXwVzTmPL5XDmdcdFYk1WYTB4rQKPCiDRri2NLYQN4RixX5Fmsp4p4gCVJ8n76SUKMKNsW1Nu",
  "key37": "3RqCExDs1mSvjULCvVfVmWrM2DdmMboGSyBM1rXNNiCsFXm2oYB6w11aPSaosXN4cEiweGtcBaUWb2Zr16jS8ivr",
  "key38": "2AnxqtiJQ3kNDWANVKp8KkMnMGFZzz5Dmt6ju9zGpvAjhP93YvYrNZTxLtXGMYtv1VDWRLySyGEXej7YFNmKEMka",
  "key39": "3QEyBoREboYfFaEhavT99jJhBKehcugYQKg3K2fMKZ5Lr8iDQeEsYk5cgysiicVGc4dxtyH93N7ZU1Yfja9tevFd",
  "key40": "ktnRBnEGv8E9jL2UgxxTrrMGtywEauBpfR98oDaVzPyc4Tv3TQwT1RHCrr48Bq8rsvqhxqizz9zW8fnLHnpwg9X",
  "key41": "4bunc42pL7UMWqv4A2dfbek7US779PQkHnMhdxrtsFKecufCJ9RbjquWKuquXDroq2XT1BwsXWaehJFGqwEfzWYk",
  "key42": "hso3t6VtjK7rCUPprLDaBNWCrB7bBBJA7weC236b5BQcbBy3hWuXXzdEdEXZdxt8nQuDGGGwoRbZkRQ7F7g3jYp",
  "key43": "1WvTZ7DY7ENEaZ25vD3JZrZizLNo3ed5pMe6nmy58QCeDUyRLdTQQZZciWPvb47yKS9gh2feiJqhX57fdHSgkak",
  "key44": "2jwuehoS2e8QXn8CqnVCcTSx62GLa8YsvanxEeJZyN99NtKsjZFcYjVeA7HdMZLTRJMvGszZsbTBW8kounjgxgz6"
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
