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
    "vMrMpBSS4uqejdq5tyQv9SQjucj38SKTC1qsYKAZbDCsgmJgJJH3fSuyfWqCYqGZahRCLyR3aGntcmo169F4oeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjeUf1e1bm6T74WYGjZ3KisEv1YSe6SUvE5jmFZowrfjMXUdX557YKkZhRRmWa5ZvDLgxBLcYcsjtuyZykDGWX1",
  "key1": "3PWBJQDLyDR97NK9bVmrbSStpDGMP1WW6pTJPuVy6bxksaq7i3DcVUuzPnZUm4VKDrkH3kLr7WRfkUBjWcJiDuYY",
  "key2": "5AY1AycWjaQbhbJxHXp1cs32EejnxagmXCAwc4UfxQG7YHHoyhwLecmibmYLuC9zX5QouttbSEazpk8Z8XtgHcF1",
  "key3": "5BuReqCcaeyMAgi8E8NtVpQaxTTtsu7v2nsawe2oUT2rXVvcozsf1k5pCAQTJqS8wpVWwkf252qLmSYeJuDczuYd",
  "key4": "2jcT5wLQHKXrV2yxeseft9DuAMsanspsEfHRW8zqW8z7hJhuDyaHuzQHM5vr43nS9oHPrCegMbzUxm3EuicApxcN",
  "key5": "2fY9wHRusUxLqr3nXiXaR2xGRr7an41U35q2QePrUAU3dnF9rWXwpRmKY3TEgPJcRxcW6SS2gXK4yup8wzQayGqP",
  "key6": "5U5s9qZXcDJvBhYp81TbhbDHUkkqzzfutQs5tWdpW5Jo8q2jY2rSeVN2Ukree4hH7a22bt5qQWuUbgvWyHfXxiMJ",
  "key7": "YAnfGE32R1Jqw5sS7pMApnWhiH2waLzUiZvH1RXFqZXfoAxdH4Y6WzCKZB1Ga71eT12GBb82qKktT1PzQSGqHgB",
  "key8": "3Qd6uYHSksYdBdM5jatUBbPPNQ27eRuTZscxHrTkFgFmVmUM32vNXMMsjW48N1YietbPoY64VpLb2M53uMeaapyg",
  "key9": "ij5sWDhTHeRDSCV2MU6dq8sSCh9Kuw6b85K1t3uoffg4VApzgB7ydzSnowXK9EqLLPdSAqYR4fvGCwMT9evp1MK",
  "key10": "4srjnK1iod3iaQjhAdDUARdjDg7uuRqJabNRRH2TN5QjUGneKN1DmC5Dy1kFWzufbwAQ4hxaCDkLEfGofd7yvUNj",
  "key11": "2dZ4jH4GMbMMLouvYmnqy6VW6iEE9Bg9zQp15Txzj2v86qrKSrT4DKPZRCqmEJwarVm2Pf8Hh6a7fhGVYZ1fBWK9",
  "key12": "3SaxmpkWYs5uiFFJLoFcsbvDzMGVLkDpnpHmSjBQGQ4KnUZhLd2cAxQB8G2Ga9LU4LMrzUeu8WUWvA7V8S21w1KR",
  "key13": "4WLtHqZ5rCApP2JvradEYm8L7NDPYLJZyid4MPznmCftjPaRvQeZkdTAHxyjA7ifMgaRkSaZ37cnWu5Zet35ykiR",
  "key14": "37LEDZ6h7DUJYQscwaLptuFcC5tGT2KonBQqLzyCsPzBQcy36PytoqMcAfjFbZaC3nkCEfiSrS8uVz865WbkM6JN",
  "key15": "489m78p1Qboi5mnCmqjD3tHWseb8yNncFBKdXx7AKqdEAsbmFPYi2cBuh8VhNhqg69pt4G17QAuiFzMnnS5YGSdt",
  "key16": "2sBjzWq9myKyXnfkWKCeHMh2Y94whvDzUM1BZgP67js1hxPhopxPcceNi4LrDzseW7STMKijcUeGWdu8ntwYAyHy",
  "key17": "54QpCC8ychUJ7EGKJkbjEGXTGut9uPyegTGcRNZ9pwi4KHZNzUpe5h3EefhPuwcDqYCdofKUSkj2z5hWzxtTe8k9",
  "key18": "51NcjAbQvV5jFrwbc4oZToZdUgBGbq51rLwkQvPkfnpZ92du5rQAu6JNs4759K8DLcuzNMaAiyYCeyXgxshTvven",
  "key19": "2xEtLzTE3NcTBfF5kXzmY2o8c21QSANttUWRrc2hMEMUjpT5R7CM1ALJKtNDM5F8T3q5k3vYJDuam22VzRHJphvc",
  "key20": "3KjHb1YUVpxCiQXjtHN7xKtN3B7QgBomT7eBrN9gssWTAugmxBtuaUhPcipCiSD5C6ESCDwEyjU8ZQUvPuYA9rzy",
  "key21": "4TBZpFJXA4YUSEGdSgJdLCwkNVW7ku2ZLf354BRMHm5TbTiWgiygUV7o1bbN7b7JT86fZDRwD9k8H53Bx1uBjy2V",
  "key22": "43qsGPsD4CtZecJyiqGJZHL4jKeZwP1yvC8D4nvqf5obZd8QwJYzAMra5zjNBA2ad6vYBMi8FY1eJwtmNoLj5XQ",
  "key23": "VqHDZ9gnriyebioZrmYK964qXtgjyW3aMsokB4tB8cqGvDdY8ofQY9XqS7DWdCwXvZvriCA9TXdnUhfubLSFBrR",
  "key24": "5cXCm7UGQKwD7yTYbKUyZg7YZHTTgB28bvkmFn5cS1QJVPLC5SyAwPCk6ZxrVAbRUpQjEdsmDHUWuZEQk5csNcwa",
  "key25": "YbHZEh49CM9ne2yz7yv45Y4HKKbmB9m6Fg8VSNknHjKhAt8kSoBH7n8QH9DiDarX1Lz1y9Ng1aez2BzfDDkxSbK",
  "key26": "3NcHtLnUawJEHkpNmGDZQjnBcvYSp98PwwGdBkNeHEMau9W24G4eip7FCvfxuvRzXsNFyqf49jFGGkUqVW5tPX5T",
  "key27": "2zpnT4MDZ8XXoT2zp6KAVE4GvGHYNwfiuHFKKgq1gWmj2LEwkEmnWAwqaEbduGNwWBVqTCouS3i1JXZXfPuo7PCV",
  "key28": "c1KoxZHNYsezHZ7ei7itzkW8nAyY26TXdJ1FwQSF9ZVe3CkSZ33Y8mfPshZosxztZuXoDsXiEeGkWbvwq77Vgyu",
  "key29": "4sbSYSnqLK1EBaB2tEBHavDghn39ZBF35gA4pzEdVMu2bE7cTgZX3Ax5QtzqJwzGfcNTCM6cnkPdTHaHpAim1PMY",
  "key30": "4QGBfCLmgf3hBB9eksxHMU6KfB7fJpo3udVNEVbv1TbFPeU8jLRgkYHBbdNF8n44HpP4rBBRJQhvLP8jB88EcXi8",
  "key31": "2x798s7orK1HCn9Z3zt5jJA6D3Na2Qv8CAMj9s1bxeBC3pCzgxU9WcaCBVRigHsSetMCwSkwNVBfPUEisY8XBJNY",
  "key32": "5NGfd8DizX2aJMorKTfFx1yaHBJQ15bZwAm5GcgCc1Dsp3WpbEE9GXCGm2e5wHnFJi2seqDM7JfJ78LdwE4F4tBB",
  "key33": "48jmMw8dw5DyVX9H7Yi9FN1x1U7KhdibppAUaiKuvEDwyf1n8EAAdtFUNTV9paBDEvAkd6fBmFRfK8brCQEt5MrS"
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
