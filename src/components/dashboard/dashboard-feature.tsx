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
    "26oCzeiJpiVDqAddC7Yb1iHozdyjPVswDio8i4jQjL3aqKSHacsuzLFqYUGXknnJKaR4CR3GWfCyfeJ4Wk84DijE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32R8TtiVArTNayafHZyfdajmrP3M1qqttNEYQxAUPZWxrFe82gLQFunWnZKPhUPb88yreQUpkdMEYoqNSbuDqJ8S",
  "key1": "2bKKnustsysT8bzEQCFyabt6fQArbqPffScn2KLogsYSAiF3ExofKPWr2QfW2MV1dETegTgPmdV79FFn1tVJ9V3p",
  "key2": "4d3SeJfF2cAKvEfYtVqeHoqsqW16hB77k3Wr9LSuXJfNrWDqsFsq84YNiqG5rBZJesPYXDmjafQpPnZX8oa6nzPz",
  "key3": "3KnhugYfAyK7PvM8Jz6ZSB5GANCkkaLfHAFmHyeG9Xd6tNWvD2NNinBwxipgUQ439ESWeas4AMBFbiiDeE6RDGYA",
  "key4": "4oD53EtpNv2t6DAJFhkHCt9iERcHbKEpXGDuBrwQVFozVEZMvec6Egk5YZxfu9qHwPiwWAUFVTUnoGxkMX5if7D6",
  "key5": "2gPQqKkvUmBaXGRtPBY6qBE8csk44riCrinHZHXQn6jB8omtQKwLPR1Z9aubhYz2887q9j1dDUxRQdsqq9baW1tD",
  "key6": "473UfxcM7soUEHkfHn9kDPDprtpbCdk6wJhzK1aK6jzDTLjbRGnnk9Nr3qEMtvpomLh5tY1hW8NtJixw3N5oi3Sc",
  "key7": "4QuoDkLZNQRd1CTK6ipmht5DpeJdLPmFmtDsHsYa7dh65YLgCVcn8VAR52esdJHZStLEWGPoeF6bfDNuneMQn852",
  "key8": "41geZpjcbAFaLBoodMEtEXHuj869CZYgBG7CuPMDeZPGmeh73jQibaFB2UKkYBgxP8gpHBLv7Xn6b2KKaV11Pz7x",
  "key9": "61bLKrs5LqmYL9vCwNkpuUub57fw9PXVyJGsU1nzK4ZVKw6RWHaovL2jyghEXuEX1RhbL4YD6JcSE38YFZoT3c2C",
  "key10": "3E9DerVqfu4eWxzKFv9NkHJAhY68m9k3CG4JbQXCQbzKLwekkiK71qQiX5vvDu2xmRDBfueATazfEya7N91gCqXN",
  "key11": "5WaDXsFnjMDBw3GPaF5fP3uNJwr4kyx8N5GBZqw7wAb81gKVm9U2SsnhVMYNoNfKneodMX2nrDFfHMesUihGhAFa",
  "key12": "guXqDqYopPmRs4WSQWZUi4KyEW9DEyV9ZmQA8URxdpLVTnmhf6wM4tYF8n2LNfrJjAei7fEhk5EzUQjfCQ4E3Si",
  "key13": "3qChJiiYZgytGLikBRVsc94qQbpqRRydQtTQfmqUgnQ52bB8XpGe7MS8ocaqCCPxD67S9j7PvvW1piU3uPhUk7bJ",
  "key14": "5bnSk8opq47FuSbVajkq4qKUVwNpXttVY3ZXFFqmVGXQcLurD16a1nc8xVw6eFC7iP3W23bAAH5YmytdowssE9KQ",
  "key15": "2jnfvFi4kycNVxEZXdN8xhS9KXNBw4eWucsb5sHe9nZm82tZpYArfDVsV1VtX5m5BeyV2WcJ3tshEmo8pzU2Z8iB",
  "key16": "4GEwJpgwycavPPr6BK9HsVdKPcwjquHLn5KFeBxsoRcecsPaqRcHXEQxgVGwABKY472avAz377A48fapDMaM4hhb",
  "key17": "5fW2wEvNztwwyGqb3GbMSjsaMqf1QR3WbpqTfoCsmxX65ZMXVzBkV2AGqKWreYNtGFz5rUZXgGMkMrd7uUcP5pEH",
  "key18": "5hNamxfNBTFCxSAUjXPYzG5DzTx3VNa26s47HNBT8QnruzsXZVtMrk8rMLUnkPiEFuxxmJu87LnB98Acf7RRSM84",
  "key19": "63kaEDxnDFg8dMWvXmVVo1xyhadjUVMzUpyix2SfectFzEqTt4mTTKeiGdzVNRokiozgfBPSbEQHy3Dja51GJPnN",
  "key20": "43tBFpHGVa1UozvZkJLZW7mwxE1TGjSH1WmVABTBMLmLE3ANRASVNbZc3ywsWpo3wHuFqW71fqK4LkttNZWE1fVh",
  "key21": "55HLUtaaxyQZTuSdkRU44LgBcSE9V5uJA9vDkvPWEGfuTL2d1rjfvhrY8ZuVU58KzX5DuobtFKW6M25vaWh8jCK6",
  "key22": "s1bUVpuHHx4iLnkZscym5qaBBB5PwZY1W8NcJgMJ5wRt1WedtX2hsUXQTPbhQCAFCRi4wkPPQFzwbMk7BUgsNgV",
  "key23": "43379kgb4i8qVmxAjVJHibMiR47ZSevHHNdFBGnDhfQxSg4zF9VYZVZ1hEppsQq6SDNf7PXvJuNv3MUqjeKbHCjf",
  "key24": "3opyRab85igzeYUDi3AoNxRcDMJt9UiGoxMwjL7LXLCsAHcqi1R9howCyTvJin85JtTEQzEDcbcT3Zq9J4RjzbDE",
  "key25": "WD3gjDLcjVTw6sPPbmFR8hVifbBbKksiJuhmJVjjXyGghawXi54rnM1tvyRY7BkPCshZQgQ65K74XTvTgCFEww8",
  "key26": "63Lq2RcpnycJEi77XvCJpWPxN9Jdp8ksNUzgo25XLP4ceF2cjTBWmUR6yQN6cEcBauJkkuwKZa8MBianZhHjdiPm",
  "key27": "3o26TJg81SfNVtpEKHzW6WH9T2w3X6nFarPnqLJcTRWgLMaWEMxeSN9ZmtCPJQjHmhBnwtS9DMANMqBA4GvZsLy3",
  "key28": "4LQGBvuH52KoEBe261y9Xrb7149FwZd4NpGfhsojeTLWcX5eJXDDTCPmzPDoTa7btqyCR3fmJhxommyguiXWEQkr",
  "key29": "2F8jXeEUxcKnfApNu15xviAQMswWEx4BFKJdSDwJk6e7Z7Cyd3iCjSrGnn9zEWed79GTRV1HP3aCjhhhb8cbtVs6",
  "key30": "5wfHZSXs7beatT3nWkQvBXtVGXFDu94svRcReQNRzD3L1ARs8tHJm49KsA5rqGdJTex7wAni57ck9dFvUk59J6qG",
  "key31": "4xeZE22UHHPGiMwvD9ZrARNCpcNUa1bJEC4yDPynMbHXdcaSdsk5RJ35vK9ZwLiNxCjqhYZnwSjnL6AjjpJz3HCS",
  "key32": "3uvCNatf3kZyZMHTBLiNBqn4sWKPbLGAgx2TGkLX283ZQnhrc98JHAsTsvnDBf4j1PSRyzEdY2s8aizPQ16f1pDx",
  "key33": "3kC6ozrBGF4n1s8PZ5iPVETCYdmSzXmriRYreayrcM8vi31FrTn6HRs1mDJyEdMM1PgdQXsd3GkSvTvqSDJp2YY5",
  "key34": "5w8mFCCcqWJvB6tUDnCFuhFgYSRymvquDZwWgkNmzbZp5CQXFCkMojMMemhs5HpQAah9EjyerdJ7govrLBoonaqT",
  "key35": "5TGDU39LcWaBwYvdtobY6QMrYWm4R5HyTEynMmWjS1BVN7SwW3uGKNs7fgeCC8kvvCWCyEPigknUA184PYofXhQ3",
  "key36": "bFeqHvezD8ULHe9gqx9RoMu9VPi3bdyMk5tuerhQMPuLzu3bqz3qkhDM3psNmEaxG4pwTZVBu26Xtt4kHsxeWHg",
  "key37": "34MjbP2R73yuNZ1mgwggy84q4Q5qhf9LZ71DkfNUvm76vZf6X7PUGgnC3DBuy5tKAGXUP6brXg1y43Q71qwWtad3",
  "key38": "3D47dqvonMramMUQ3GCx4bZ7TdUEc6ehTBoqHfkpbNvKQAnHYuBRkhvfSMQi2BrrRLY1iDvmk9k5KFfLwj8EiK3V",
  "key39": "5Y26gQNUbqdaGhaa4HXs5yWz7HBpEdL3Bz6cXEKdYNMwgk1b5iiRi6fPK8SBaXxWkPRtg3rRyECXSNcSJv8fQcKt",
  "key40": "48WmaZhpuWfjiuK7X7bBPi8vatDyLEM8BSWYVDcnusp3iANqGcA9BZjZ43MY2rhF9LEXUok6n3qBGucAKMrnUhq2",
  "key41": "37JxSade4N7rMtYyyxPBcrGwCoCrGjmBG3xRha7j7EWL2vLHLDT5WNK5csxYfortyP54PHdaZ9R3R7Li7WRs9xAN",
  "key42": "2tWVCqZM93PXnpn1BWGQy7bsaCNLrEuCgXUu84XC1A99KKpCbuXrBSaHVG6oUtUjtx1iebmdkj6CgxyfF3oryZLY",
  "key43": "67d9icawJJJPUuaWPKgfNgcFcGdfdeBBtqGjacg7AteC1Jmh1mTJLdK9XFhg4k7z9nkV6ecC2UoB7RZA57DTsVga",
  "key44": "vTiCLnFwyPoQdjcGfifVr1c1Zi2V1KHfKn3UwMaKfipn6Qpw2BZ9qNnppx7LxtcehudRHiiG9j9B2i1GJsmMALM"
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
