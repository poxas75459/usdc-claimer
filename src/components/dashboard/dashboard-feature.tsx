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
    "2bCdMVaLvAfFCnc76jo1TN9BXv79Sg572km4yhPsBXw7PDseFM7QV4k17nZGJPbj3aWiKPeopNKeTbxQbA9Cidiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezdHS129xhStcrMDJcLzGm1JhZuV9YPebzu9T19hADyDemRBW8XCjvj2RgXvTcjxT9YJQ8NxFd6s2hNUv3yD1GA",
  "key1": "5qwFUXaXtg6yckq3GpUGLSAdV7cP6JbDdgduSEa7CMncevDmGMLMsJ6NmdJmrz7pfyzg8q2v14Yme1jhzPVPsa7Y",
  "key2": "4fox81LHA1JszzHL2kndsW7eECPKJSJokVftqowcji7WrUrCCapNCrhkyJDRFfuJPbycysQRGiT2cCeivxKVvb1q",
  "key3": "2USDMqX8Wga7s2JYsA3PiNMxFmWkaZamLeRkuhQikccv94RSnCXQrVqP8h9jSwh8PtzyJjN7TLiqVkuLrfE4Nuw3",
  "key4": "3yKHraPittaQf7u3rQ3jEZJ8vd9CDcAWp4zXnnSn3hja5GhEmzLw7KBVmSNW2X5wbFcV5jUNxUjy5Wcw6xcx13i1",
  "key5": "3iATpUCJ1UdRbuhrQpA4Z7j76D5YWRvYceRYp8KJz2PwsJGSd6krqHDEjBvEehcnzLSFdvZ8bfbAv8JEricSv9tY",
  "key6": "3x1FqXxK447SaTEKsVte5HbdjGVMzk9Ahpvgtrjg1Kp2CjU34QwUxzZssQq3SgqB62BaAdqQEdzpGa3ST3ibJb8D",
  "key7": "5KMJTFZvc8jcvLNVuxHTRZw4o3Wsmi5eyZuQnCeAqD3zPBqxqzGeKt6qfPgtEU1BvYv4JYGyAPy6z5JRXfDVGWQm",
  "key8": "5wscNyGuQQsGNaFXxeaFz9GbhysdmTW5Zy7WQgnfieR3zrHA62A78wp5s8qd4j6i6mkNqGFs15CNRJwwjbKyyT8q",
  "key9": "nRQtssrxfdpsPnCivLwxpwAWPbLAdZrRPo76HfQ3PJB1j1xAYLTABoDRKF9ZPYNC4mPGx2npgBqtgAS672DnEwL",
  "key10": "4oG693DrBFMT8dcN982n1uSzTQcfrJoyUxfwnEn6YGF6sMUwFZfWY7d5DAySmnQLJvEJN7XBSj3nyLxHgNEAu8Sk",
  "key11": "4foumQ2UnTpHxnLsJMurdF1MyC5sMUkFLMGmFdttew3GJv9Q1n3eVRAPArzocKpNwxEWSdNcN2PDb7wdkBqdqApW",
  "key12": "3wKZ84ySq4Td4XCBE3F83ZjrJDb7q1h6pyQvSwPgXEcgDbM8oPRJCjxSUKvjvAUDeZFKcEu1ufrfXka6J8pQM8V3",
  "key13": "5HpHZ1wtaHvx2iY7dDoj8MHTUdXVN84DypyPv2xXnxY8tKcchn9MX3AvQUbJd9M3NfneFciToG5Xq5DaT27sK3Qj",
  "key14": "upcnJY5T3uajhv94RA1bmWVV82hhDKCts2tT6tj3dpjgDeaKGR3CuXbkUfj9QtHmWskwppgYTzMPQ4LFxAKRXaa",
  "key15": "4oNvxtccP5o5SwwjPreCreqxGdLZfeeNrFUpjyNfjdkycaUmfTCmCB2MtWswxkayFm8J9KrdyJDTYenwaiEq4nLY",
  "key16": "3kS75n12ezJhm5Lt9wNtBvmUsbKveA4vmzwFVdfQTBMdf1huMLtmJ4UwMEyzKUTzhAt3PvdQQYae2Z9CrNTRJJiy",
  "key17": "rp5EgQ2yDeLoHJ5C23wjAKYmWtjgxHUqYN8kSk4ZTrXRngxQ7fA9bxPV8vqDC5j1Q53BoWHnQQ9ajH2Ume7251s",
  "key18": "w2CptHjrHxuf9cyie4ss5XspVvxGNdueveZGRvjABSce6m33H9hYeFjujmMZJWjCwPD6G5UA3S8Wu5sTTkNt2vX",
  "key19": "3xypf92Y75jKhkGWofB6kwdJiNTjUkQ3zSSrpHb28aA9om6p3z4tVSGwTCSwcdM3UdxMbdsxHQySfbRGRHGhJrWk",
  "key20": "38bVhooZF4fhLsZXzX6HjHDtqBDCv1aHiT7KtiMrhagNvPGMaEgCcu6pkDCV9rUW94DqmN36ufX7RuLNZPWDq1Pw",
  "key21": "2dqZiEvFgAmLHhqX6nPXMCfU9U9gesbbUCt3gLRYySRYgFcjmXpL9Y2mMH9JT7Fu27csNceKgyAsfs4zJSiP9c2s",
  "key22": "KS967tAa87swG1vfSQZAegA6dNwUQutaFt7FjwUhzRwabwtcSAaP1i6awSpzkCRMzTfCKdEJkxXYDh3guXH7XF1",
  "key23": "5TDhSXUWXMeGVfzBr5RfsGCFd2vTYXyj8WepU23sfXGymqMw3XxG6m99QJKtiy1oVqkVd1d8LfQ6k7VSSQkYGKSe",
  "key24": "gd8t41g7NydJHsckj5zkQjEoW9gF3xmYwcyVuQ7D6UcxXTvFtcf3imBMPmjVfFVi43ZWAjLt79gifHhsja9cizu",
  "key25": "63kLBFZXAkyNBNVraR7BkP7uHvxedmzMbntTcjtU6URSyNvSfcrQGVSDwWLMbn14qBggW5AXq36EsKLMk98o8uGK",
  "key26": "63Xs5rGwXKVNXyYZEpHbuTSxMMQz7iE69BJYgRbgKQq5QD5qhN3HedKJq6cb1cySRkyzKvJTruGPYKwZmVf6uSTm",
  "key27": "4Q5ay3GuRv5RfDnU4kwZMqkZ68P5p9soKQgVouzvKhjgd6r3PW2VeaSsjMfFgtb1FPBRw9tMzL53QUnCUMDEFzea",
  "key28": "58QjGkvZvuCM4WFtHpMtHCTeowxECdcE8K39xLZmCcZ9Xi881jjT6sHuXXE6NsYJLupbYo2vSZYeTHZxJxNFumsR",
  "key29": "5qTuTj5Rf425JsBy4eRfoM5xxB3qask4aGkyUMFywhVntGpQfX9AQwHDsWvs9Lbpbi9EUdmK2X3ZovLixjQrHEfc",
  "key30": "3Ksv4vXNpjxfQww86NpKpLrL3jy9P8K8Xpg8evySQ1nWmUHYDZttyE31x4iTREBSce59kSWRmmnfJmJuCg9Nx96S",
  "key31": "4q8aAvF3Xew8GVbxJZ99UjYjTBgwsiPZpq1UnpAMPFtnm8hwCTzJrQR6sTgL6e1o8FLHZKfJNM7Tfyy3pYb3i14h",
  "key32": "3iibW83VCbvm9xYWm9Pyt1gMayQ4BoUyJdx3hkzwmQAziFertAWqWJzjbygoVtF7gKPFdyo8WFe8mLcbhYEVYggy",
  "key33": "nRF1RhRK8pDf6Q445HaYNbhoT2U2QLpTMdhtYyG4pnWHuY7KB1Dkk7RYUKKn8Qd6Pw3LN38AWHijDFHFSjJcSuV",
  "key34": "62bTcsBj34yPULvYPYWcWUWTkmwcEiBJinFtQi1ziPdYQJXFYVVTbvEveRZ6iF2BYhL68S72uiG2MbNjLDBVjv2b",
  "key35": "5wBYpLu5AwgpxUSphzfUE5n4QDPAnw9dn4yWVHUbrVBiwiRj2yFg9oFU6cy7hNh815XCor5VjPfYFntBPpeX8oXC",
  "key36": "5VR34nbiw6WA5MuJkrZGKHALSwschtfJ16bt1STjrXhwwe6hXienqNAEi5chBpGv4tr8VWhH927djKRQDmBGGNKD",
  "key37": "29xoF6pKxnE5aYpb9Z8fjLfSUYyUbxVF5Mo44hAhkXJyGZBAsYcqAprHSHnrkRtKZ95Faids28gD52Eg6gDwaHa8",
  "key38": "4AiUofKiw75cbWyUTwKtcyAfPxPbdvLpHB1kV8qgbpTBnJkSpud13CL9fUmW8k291LeAzzmoqmJpkWrsMFM3VwNu",
  "key39": "2PQGqcH48hs5jen1STrtpXBFxVDCyMjxo71WpxRs4NrF87bWjXfWcwbNpiNSmPsp7zF1eJzMNyayC7BPKckfVzUe",
  "key40": "SgzWDfimwEDTEuHfNnpJoNEePhLP7pMxLPFJAfCuXwFfpYsRye71f2Vmgk6cweu6kJnpbQ2BxJtubkDqHBeJXPc",
  "key41": "51cbenf2jJMeyqj51AQrFT47Jy8uQE66nUQ4cqerF4fvpACyBUK8YUWzF2HGnpK5xAjWa7RCMtfgKmu9e9yNUTzF"
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
