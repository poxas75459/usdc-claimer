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
    "4E7jD7w7GZmbtNjkTjsjDY42sMr6fQcvCSgwwxzq34695ALRT2YSrXtiVMtPBUtGANTYYqLqTMRKsEyEDoLwNGep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35437YcNQubNCM2ewwE9xuJRnaiJvESogxXUqLRU68bc4j9Rgc5Vsnrgw4w5145wXmkYdK6dLm9tViK4sYSYHNk",
  "key1": "47xiWheZfWGqNecPQNUFiXnjgNuYqD72wfzxFdvvzgH1U7JgSEPCwH85BMPwbENGU3THBRxDkF2kPna2DhyvWf7p",
  "key2": "36T4VRMX24U6qGhS4wMK6CToi8bxELD4s8gRQgnUHjHFwsX8u1ddL7C8y6strEqDPfLbbA6Gu6MmiDpt7s6xNRSA",
  "key3": "5bNCJvjfwq2n4AGehZvyubeXnCYFd8YYRwGL8ZJ6MbxEWBRDsywoqUxu4tZDTvukNTnzmLRrBnNVnHsWLXEQTPna",
  "key4": "4R7PKLBpXbtKeAN6Q9nAkesLNwtyA81XYV6aB9TvjwiBsYuBgWRJ59DgBjsQxpTtfR51HgS1osUEq2Mxibkb4A1a",
  "key5": "2KqN5PAXiPrJbmAT1Lv76mH3ckkJGN9oB3MncLs9xjrsqjUJqGNtYBQh1VfCFdPCnxCJGR9R3vPiCnXaNcwrfhCf",
  "key6": "3yxiEJocz1yu7FXCpsM7ufcknKHCresV7zZa6paqmPFz5np4ibiTdsxv1DQuwbM9BGLSmHibSCLxDs8cPFcoboUr",
  "key7": "3gcw1EMXqvnNhqsXX7ipNB2VvWq16RtPNwX2U84pjQJG6fjM86ZmnRoAM5NvJGbWu91VCmxWXrdRRhSpVHAp6wD2",
  "key8": "2sRFPJ1jXqz9cf8wtZhBkwtJaaRHEmZN6pzQqxZTPKKirKaAKpLKnKmVPjJ6bb1itxDojVkYBc2E2YThjkvZDk67",
  "key9": "2DrqsHk93t85ofjpHtpNjJgKo5qCWzGkVCCYrDGcfJuoq87NM17LgmxpKAf4TuP3bZq7L69DLfh4PEHvY9RSMSkU",
  "key10": "2hJdifXSvExeJRFm6FRDiS3NdgLNJiP68zYXjtBqv3p5GY8K43VBgyBq63k5q9hbSZaG7S9zr5f23gPYtpDbsFS1",
  "key11": "4rv78bq7r6LLdEhnZP6k69TxgB9x7gnRqBZcLWdvKuz6iTDFRJjJXHEuKQJFU68vYunRacuyesd2ke1XzTFT6RgN",
  "key12": "541kVJJ9XAinpq3Kvz9N8LzYVmeMKUjpRan9cyPaHdA8zhRzTZK461efhtSUa5WzmzsSm2pesmM2RSEm7N5SPHXi",
  "key13": "5kMKk5R1Z7FDt7V77jjXCyGstkGcpCSunTdpxhNXeRX6WFd9oRkCTrkacDDTUdTf3dfMRFXkENwrcE8JWBmmgdz7",
  "key14": "TVBHJQCRys1Pf21gEsKxnByWah89rXiyLZhrDKH4nhRnvUQGCovj6Y6buwVpvMU8FZwNTpr2VvW3zhHYwjyQo8h",
  "key15": "3odqCbVkkKKH3X4ojumvhoogrTKC8y1hsFv8L4Z83PUo1TDjusJzELEu8hUDM1tECyN5HHSyE5BGV2LURA3cxv8",
  "key16": "43xB3Cie8zgAkumuNXAXMKVK3nkxwu6tpsd7A6v5ETwkfFLi9n8zbWK56X2nw4aF3NEPPaTVthE82TpcG3pBykSk",
  "key17": "76dKbSGufKmKgqfNAhV4Cd1qyxaeMMCCs2cYZbCcRAjzViNWFbKQ1YDpCFy3HTGvrcAGdmLUHxFDQZv5v7YgZpG",
  "key18": "3bx1eNZBEkrj8wk5BeV6ANyKYipcEha2eTM7kC3NRD7skEHzc4p5KpYSdmm4WLeu5LBtiRKfXF8jkSmHCZzkWFS3",
  "key19": "2sLCYRP5E3c88XTsoL3DYVw5E2uYpaGTMhGRazxh8NmE57q8UYbWKnyC6mAiZbWjmWPtcZEdP69GNsEjDA77jRtw",
  "key20": "4RtEhgRyU7LN2F2CHXXZ6HVE6T9v4fsbpbFv6Md1iQEpxGS9o9dLJ2qzoiqLoTWzXHQPFdChA3xLpmQzh6tmJJWW",
  "key21": "44qhgTAUYu8yV16BgWjnfaQ3y9GS5QLMBdzzR2qibnZSCrEpfiUbMTDWQ5Qg41xdLBbc9CfcAntBtp1bfxkQqNzm",
  "key22": "5SdK8SB7TP4FyixmJMQByjGLGn9JHje5YirQHvrXMLc4aCvmUkWkcEFu1fHJnqdp4gKRkMxyeJbkcKXeg6mEG9Mw",
  "key23": "4XCLHgur4te2yasBnd6KrfvFmgWTx76sVjKU4zKKyQ9HqbJ32fiKY2jRp6hjpvuZQfuHRHCA2ztqHibYhyxj6bbZ",
  "key24": "2X6eYNTztZeVFMDwLkiZRRpXCHFYZsdvQUUfs4tQNkssfukARJb8LaM8npzviHQBeu5hXSHS61X4fYu5zjMAeU4Z",
  "key25": "3sMe1GwmxtwKj8Pe9uvWVuS8Z6MUwhYFDQwhMsjGqC7PyGyoWebAuSDmekfowHUB9Q8EXbRPp3XhqnAab1CmiUpc",
  "key26": "wRvdbwYKKpo4SH4Y6kTMpvtAgbYotTspspaRxcR4V6rfNvTuzDsSTwZJrLf99d9mTXrDRxhJKw3osHH9yBkU5nJ",
  "key27": "3vmeuHo1NGDzejYDAsyEiwP8wW323kLVby5LNaZ9AT8KH67L3aW48gdSFoa1yo3JE1yZYJpa9ZSw1oDgoEsdAMMS",
  "key28": "BKcGAmd6cfaqT7smXMm16WQHfFuPJSkANs1AB7rW6zLAm6NqCNaBAvy3XCq71qo26iVndTrWM5BY2DAPLgnrzTg",
  "key29": "3D7Cq44GaqGxcshTc1pU5WLnf2UsCvhZY9guVR8J5RKCzqgukkiwzpNCauGuAFqMiogJmahQkdujuCaKzNjqtx7e",
  "key30": "4jXbKEPyCWBwxEixZKyBPq1TF6pyh3CvHU3ZUk3Uo3zPcUS3eBq5qUZMyK6f2BbnfiRj5eBKDb83aFjR5Jw3pGi4",
  "key31": "3ufB7nLWfSb7AoYnf9y4jHaCP5R5KKzDhr8sx4DTjkUsPxeK8rm7FjDj3YjvZ9eK9X5xc9C1GmzWo822ranxGymL",
  "key32": "7gesxerXxvP2ujt3c2QrS44v6tHv28VKZkEvV6t4z4Pec3pUoBRCe1vZjNzvqhzQsgFunba5HFTGmCoHykMKem8",
  "key33": "55fYN1RC5sQsAnhXjc97nUwxPzQioLHRBq4zExyCZr3Kq22RHJTUgzxCxCav6Nr1fodZLEQ98nDqDnmSvgdnXZGw",
  "key34": "wxuCAMrtVWMuKW4CBCNtKByvE5gjho2PnmrBjAF4UKEyFbxykqbiV6dBKU4fKCs6hcgB7d2SV2x3KGCoDZYwR3Y",
  "key35": "2sGX7Wrtpd52gpyvNPQgrGXGXxBFGcjhzFGNcLXkz8QGNNcf7hKTdrHhTUqXThi4BjCu43MSb8Z9PrKqEnp8qYaa",
  "key36": "5EHyW4VQpJfrJUNP1e6wBxKLcJnryvRyv6kb4SkvT3vTnLj3HdnwKBzyPRHNqmj1K4M5er56ov5AqPriyYMxU7p",
  "key37": "2zLvBFusLjceQu2QwiWQrtmayhoSq7UmPmA7T11fS8XzQvSCk28DRqMPZicimpuJFx8sTBM1mWxUUPeWE2CQHKmz",
  "key38": "2ej61hqyo7ifmek8RnqM8oEK17iXavqWLZ8TNsBReiWFDQaVGhGgUMMzFjZiYDpznyQwUhDLmT6fw8yLpb9AhFXz",
  "key39": "5Bv7B6kyYgqbuaTFbpoxjYcvEMKRcouZf34hujn4nXP9NHyTweGJw8qASXCnXcvo61Q2st9xv6SeB8z1H6W7yZPg",
  "key40": "2G7Lh84TUdgEsdxqcHaGVdKBUX9Pn18hNrm9YEjhV7yLHzUQ6M14p5SGYJ9ia5pnLNKVGHEApwBwjz7C9juJbarR",
  "key41": "5kNTwFkTE7GSPXPKLP8TaxxUDQ6YfZBz33mGyt9Yy14r7TvSxiyerzQW58P3QFG7Gx5soPNkke7W5k8sr9TwA4Bt",
  "key42": "2iuUay3fZXfEbF7Xa5uSPj4phn1h645ZJz7vCpZeis8nYZYyTnMxYSide96WKoJU6p69kLxY2pUVhvQLnqLa9sbH",
  "key43": "4UuSGjRXvsXTbtshcrjqT1deE1m2WyXf76t2gTrstDWgyWvGoCGJvYCmAUDNWad3VguLF5kUph1DDYgtmnc4GZnP"
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
