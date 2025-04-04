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
    "2GPZpPbtzguAh7zhkuBhkgxEWJuPYmHiiGVr17Sa9HZeKh4nwJriZdSXHibULVY5STeAjTuuRsAFPTVHWvzs8wjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGt2PmHBFJMPXPcVPCTGRR85E6TkqGEYTdhMn23j2m49VzPwjpkfcw3EvkqT14zuPXAqvxi2VKD8APp3Bn2VVva",
  "key1": "HtzrUz2yZNNWjjtbizsADojcv8TWdgYeM9RtoEfZdVMkt5Uf75ez3fCcy34WuR4Fz5gw5uj2VqL3iZXiBufviMj",
  "key2": "5veeXEW3o2zTGiHaro3gERdQPdF4C6ouJaPJz43dNsx65K3t5pHqzs5ZHRWTnhjvxKjgzejBcJSRQgFGgvDwm6D4",
  "key3": "AiY1V2XHa95URTeuZy5K38HM4VPbzCsf6nPx6WL98CtRw6geQySrmJsXiCb7mWBN2Uz5UPpxs5y7cYcCbjNJ7Do",
  "key4": "4ud7R6HChhueWXKxPc5wLFVPeNbVCaBPPWLKoiZqymLp1m6VnWMEp1sgCEcRhj5vAsKfy7KZzS5rHE64E9F9XAhw",
  "key5": "EpkJ86XxQMk8kBsX9poLar26QHnFXZtjGgJkYT9cpw3EZTJZUGWPQAGjx8DQ6Xi2q2AsjCqfSEyNqPL2KvvrU6i",
  "key6": "4dLeCQs5seqU17GoqB5a4JLRJfJU2spjm2Tzmps7fj2FyoUUXtRJuByz8dDfVg44iNffMHFTKRnY7CanQfeE8AZ7",
  "key7": "hHJSFhx4ifUMYXbp2ADxyeApRGkkiHbWrGJrz4atdhAc2k1Fa9wDkijAwgWzaVY7m3heV9ZLj31CXLg9ZU8NVsJ",
  "key8": "2WuBaCLh9owQH72XxxPozZpEHBTgSudy1hK1DYvfCZ7DseLc5FaNheEdYaxzwmZVYCiQVmTrRcYgEMDrn76tawCZ",
  "key9": "3SnsmvEokND5Mwy22ytLUMdYgwiKSutTBVAYZezoE7EexVWZZHCVBKanf4tMXnsgD82N9eWL8vTC4PbLue3KSthD",
  "key10": "3hQLhZufHu9Lfe51Hmy5n7rfWPHnUoYjjAYXBhiZrD4FT6BVQK8uLRFoV2U32TCkkYJ4nB9D3XerDamEBJBnRcoD",
  "key11": "4QeGpsm5hPXPFmSZXurr9fcqScmtUaZHg6utDdKHMshyy26qbVyjVK4gVdiDtzYjPZT2eRmhchvGuszRKp3yarbs",
  "key12": "4q7FnKZ32WTU77PBpGb4N2Y9XomfEJsxuVw2Z27QJEhbojngSSoEhdGm4NnxFRGQM3eBhi4J1dakn3GUZtPaMAVe",
  "key13": "3Uu7fX1wXxyqGX6zsGzMhiRG1P6wwsRjLJLvspUqvpACeJNr8zs82mw363cmnXVPrNNDwPPzwYBNJ5YRTPmXZPcB",
  "key14": "3TMfDWyKTVe1T8MwLarfYViZrhCEhFDtkvVxXoqwohXjVSE4tP3i51E8ETHAaXmaJnY2MdKCvVUmqby55YuX2KFt",
  "key15": "4i3XBxkccbRxNeSfpEBeZNdLziRMvmxyaTrFbFEvQm9t4m29WJ7ZXP2FvTtjngd6N4Evv3yApNrtNd76WPjPcgkH",
  "key16": "3BrNiguk96ykSjaKsdhttArTjguXqAvZwJvfyRo1hXjZAMLHJsA6Uy1SjJNUuerEsMAhECFtVpWF5zRzoXMVjtJj",
  "key17": "2bLyZq9y3RppTEbqQuwyRSyHCzQUjGd6LLfWeTiVn9LTK5NqkrNpGXWLtCY85WhGB9v7qTVSmDTYPaC9f1qm4q9f",
  "key18": "31MFYcj9HSfsYXE7mrRxawaFPRSgb1LHGy29Hj48mwjeLBnXdZ2wGTyxqimUZ4aBdsPkbn3ZMkGo4Py1GKkSbSZt",
  "key19": "4KfCfoTmd4trC3tx6LajVegofz5n9KCaQAKFQGzWAV9bBP1wVrZNBXk9dyrtSCzB2cJ3aQFippkosqhmiz9rZjPf",
  "key20": "5f1W6FSL9rDevYCAWk2bWMJUzHSkj91FvA88iXTZnGhF9PDy91ZoShvBBz6qSQUVpix8G7uhiwP4KN5eMZ5z6d5C",
  "key21": "5mKWF4EgC96hE8s3VeLe51om2Vtb2TTQSQoVPDZe11bqFaAeWBxsMzisRmsnRfjh2gvBDdHthbscga1PuypAfS8e",
  "key22": "4N7W5DERCpiUDyfmnKHyssqzMugFfhKPFjnzUgUsBwQWdQZPGokBcr6P6Jt669xteV8sEjAQPP1crzr79v3jykx8",
  "key23": "5PsxasvsthjnkBsF5tGWxpS6pSbRzftBP5GdLkhRm9G6Ca6nt6Tp7Vh2FQQoJgdZEeqCUg78kqup4YzNRuzibsRH",
  "key24": "62FDyRd2XftGdcvL1suQzvfBFWMP4NsHVJS4JiZtrL8s7oVZ4vWCJfJdB1Xfdi1kiiMjUyr5zuViTEJESgqaehWU",
  "key25": "56rw4PAJJZqyU522xQGkjZwXzdFmG11uuXJ4SJs66GZmdParmPy7i4GXYtcUyMkrgFMLYv2tnPymCPSQVoJizxDh",
  "key26": "4oDg9LwyYYhwWbLEU9eVXhXKfFtSXztLN5P9ycZkQmhLQgmWuYfBSb6j835BfLZhFZrqu17HaxqhMq2r3Hqe5hmz",
  "key27": "4mNrvUHczUWKKTz96DPX7yXrpShcw14pKmTrj6i1ktaEnZ5rCA3Axb5xiStDHuxG8BPmJAJWeviCJf8Wep4zySEA",
  "key28": "qziDGjLR61XNTQbqC71pRQJBAkxcCfZXvaTmefMv3ewyKpi6uznZ6auSX41i47zjN6AkUVRjNNx1Ew75rs95jWS",
  "key29": "2ZNcW2mfoNFBYSsfEJeemnZfiyzw4Xjeb18xMwYUFLpSoTCvJYRchNAkcHztsvMXX2x9VPdRTyt6NqCmLGE21ijA",
  "key30": "3Ng3hVZzmmcVrPxnEECLNngcfnYiN2RfNkkVLMbEddQUSzmhE57hQ2A63Xiscb3faNruqZxwuPEEX7yjwDhvsUnb",
  "key31": "4TifL8B6H2S4M3pU85JLJ4SLm7FrZPu77WyW7bt1bPu4XAbNsPpWpcKLjqrCo9DztyJZdkpPaqpKNKNPFbaTgpJb",
  "key32": "65KWv6tQ8NNtSUmkVdMgNUh2kDAoxu149hRdDfiUZygZyu2yYtUj4WU7c7mmJ8g9Gv5WFTMo13cye9pkCvaSvocW",
  "key33": "2s5h2UTXRnLzrKjx79xTY3djHrmKZFFJXct3LoJtEwyxcL1UqDrsfge7JX1yujqYvnUQJvDn5UbhSfJxZbEU6pwG",
  "key34": "3AbnQJ3BupZHcRAyM4z2cDEgcMUZdqoZc9Mawzq2iSBkqNh9JypbSu3Wr7NkmmJa6EbH2pak7v6ZVtbxyqurve7X"
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
