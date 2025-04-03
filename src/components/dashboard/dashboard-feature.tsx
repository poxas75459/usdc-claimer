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
    "5qdRbbwg3TxmNpXRXUZ1vHgy5H8dV58VbhwrnCc1k9gpn1hyjAHmr297nH95ihuWYzo2GVrZcPEjvgpSHWoUSuVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9WhbguTMLAWurSPK7bVhCXdi3a6CYjYru1bQQ47bhfGUXiWWXmXhpquhLieVVqCBsxttCQe48MEmwGMWTCek4t",
  "key1": "377wt42peZp1bgKyuTcJzBNxpgi8umMkn34hAzatCFJhbZyEvpdDrRpqyc53UUYqdFTXAAmgQspBZ3GGv1CNymsU",
  "key2": "43zLCHD1QSH4GeAaYk5Fdxnvp8prRRXgrmNHKLvS7LwBCd7k4JngoqEYdefC5h6pyjiwQG3wJYrAWvWdGZkvdazA",
  "key3": "h5Jw4U3dEw3rHvNEZregQUCEgohhPiibcrdp83mXWoJmHa9vavG15d9rWjnz5cVa8CCptcNm8qCCjhff6ezhcgw",
  "key4": "2nfsaJUsw1wFpgXjAvjdWgmyS3NcxLZdw8ZvABnHHKD8RoZiS1FHpwBjDRfYRpHiTCM6a5ToW6abDFJtMWbVozEX",
  "key5": "4oRnU29Ygr7usa96se3gNGeVmVXCsJgrAMGX7dUTTKVyiM1QkySsPKxaxhBTKeQkYwY1g1dvDkfvY93EEyxXHCFx",
  "key6": "2iwyaCY4aHcoHcJjH1d6Cwiw3cdFUi3rU5CHLiaUvnwWdzVG6Ew1y4sRpjwNsPR4AZfyGh2wBRhKuHGno75eNkFP",
  "key7": "51R9Afh7mYSr2q6ZaPtz1XxKruhi4UgxjtZGV9feztb85JVVsMWnW2hzVAMkxjR3HrB5fp8UfJS6FRL5pg7GFTLp",
  "key8": "5mHh4PWB4aenCv9q6zTGtZf9GzMomHEStc84N5on5wdnYYfq6XGpftP1EBPBFXd5RGe4ZzQhVTGT5pgWPsN4eKrx",
  "key9": "bt5tYb8ZokWuqaPKjtkwqv38BHKTu1y28zuC5Y3GvwJugfvJZs3K5DRC1GymKieSAzHV2QA899LahZb5HQtKyA5",
  "key10": "5FekE3h3sC4oQnTKJop1xTKSCjsr7W3znYtY2aAqUirjhLhgrPu51FDdCxDh9CnFk2X4DejEkAU73mGcB2e5Pp8H",
  "key11": "h2ZsBjexzhjGTHkkkYUKagisQXVv2DZb5h345GbZCQXYb7nnH6tKpfNyhaVbjnmpTecoFdgK18L5KMokBtKv87n",
  "key12": "4ghbyxjM3GzqYUejwEN7rfPbZKeWRBR21TjApBcb6yAPdznNDqZ9Aez6csNqjRzbncUqDWi4nQa48mBiD2h1WNTy",
  "key13": "2WJQSffitCQDRFkcpGwoMKrDy1GNzBTQVSWvT2KJDiK5b48L8NeiftcDTvawiNmCSS9wXaai7xAo5nqTwPG3NJoT",
  "key14": "soCtaFR4J3pGzu1PAdBZrW8bQZ6wRL4Q5a6qDkjULV6xPipCWEVn39d9GCW9nb8PguLUzHG78cJfvVAhiA4LH6E",
  "key15": "4wTxvRL9QE5sx7uLYSLSnVEuc5YUCwU1vbpoHxUa7XY7d24aJ4HaiWGJBfp1cba1PAtJZLRtbaCnQ55t2Vp9SAjE",
  "key16": "2M2J1Lafzddw7Zzw7Ki4avGTmUnKaihDB5ZPxonrsHaSpvokwUhR7zuRrRsPZSYvuz96unHLPLQ6ZaxkrxyF4YJY",
  "key17": "3VuafAFcNoHX8qazvBnSN91DwZyoFDCiTmmtCT8doefsncc8fjLQYDF41eWtDKFBjsf4vyRfQT3wiR9wChp1quzh",
  "key18": "65RXDVNpQWNSqV7MmB48xGCYy721pJdKmrKRqCCR8S6moPDiBnTV2AyRGA6jDUoipWAgsMK7ZoxQh25kLxXjFVif",
  "key19": "5Ng9GFeUrtpPNwnmp3ZFuuC3SGs9SN6Ty3ma9H5t5tpdmYM6S9jCRFBrFSRUQoWCoUWqqDWd7gWnSbBZyxbFVo2d",
  "key20": "3rp13MB9FuXSvwZ3qJaGSCbpaWvdrjh8Ct38of55f4kbh89bqZMTb6UVENjsTriY9PU4ddLwJsQRggdaKnRsK2eF",
  "key21": "2BRVuwWztdzQNELXxpyH7xALmxKBKAGtQR5iK5ft6wEz1SaKBSkAazMegHRMANSGp9BVjfGAQLtkfvev4cznDkwp",
  "key22": "5KHxurhGrJEYB4vj1z96UhBQA5GpFo2sp52JH1u1J3Z5MaGQe3Y2q8vANR2c84TffkpojU5d3y8YWbhvecuK3Sr2",
  "key23": "GsDTVxvpSE7YooqhXRX8vakF2psedkRrp625pVjjYp1x9SgFBbbKhaKzPouYTK7NwmPCsv8MAch6PY9ZjA1bmTc",
  "key24": "ofxcbpsWhnJBz5xMMHk7trxkopFwBLN2iUTDsWjR2PZ7wqkpgoX3AzJbPwYMdZ2beRLhZWYWrqGjacs1asZr896",
  "key25": "SZCutu6fRU4w7fr9imp8hStbCxi4J7t6714Kz5D3bH7QsQkjkZyVA3dzfCd3jwxFQp4zYuYFy7o6nXJt6Cda1Fb",
  "key26": "3CDkcnXrsYUDuoom4jqBPR9QR7p2i7HuZ33vjRi6bSDJTmWSLpYQLWcVirQwEZGi6qeqDfvfNyGWTRMZrnzmKggi",
  "key27": "5d2PmkS2c5ADE6Mrk5MbMmgGo4AczjiNTxoKk4jE3wzGQA2K3BZL4ZosV1wfADKmgn4adaJN7UXU6FjCJwajkmKS",
  "key28": "2ZSsarv2d7TTg6agzfScxXMtK5N9oEBpuuxibXoubTzKyhwRvSMqhgzmV8E9VEffxqjzkjQbCbDm68enY8gMQMgg",
  "key29": "RCxEtgy68tHVbwWCCV8TgZwvfc3vABZAvdh6nQmDCkZWkqsF8PyccRKYSpRr6uGWzDT8b17RwpKfaZZDWAs6pF5",
  "key30": "4rdiL8cWhGhkjSw6bVsmjw8abfFzeo2Cn1ord8yHppLjcqFLgdqPo9ojm3ZBnmw3zXJX49fftkdbH2wqRqANFMZ",
  "key31": "38ZCR3XQHb1WkKHtpWsezuqJQ6y8mhUmRcCWPF7piRZcFCvrapPz8rYyMpAviEtfLWpovcU92vmUbvktuC5fSoYp",
  "key32": "3TYWEihPhHtuHZAfV8dPLpjTmHEo2hAKKCLzPmr82HtwjG6LbrhS6cRWZNMCpcyEqqGxiZMQRZCYMudpYhF6sidf",
  "key33": "2ThhEvrqU7ogtg7iCzJAR7ubZT2YBUg5Pdz7qNrUNr6ycBfmJDRRBfMcwDqobXJaAGkmN5bX94YQFWaog7NNBdma",
  "key34": "smfcwwzobdSyokjkL5xHnQgR1seb7at3Ct3x6M5yVcgNKYiFL5i5ypJ9XPAtgfCZHVnnr68T1JUt5y5PAXvvzWe",
  "key35": "4hsm6FJ43mDyVDBGWLiN6wPsWThvPfPuiH9MksUz4j5ucaGW6A1nVgZU9JCHbqjfSB7xNUsEA8CBBBZeiK4Cc3kC",
  "key36": "2AVskScXva7AumVZndTxAPJMk1X8oisnhZjDVKwkw5KLw44Dsvyw6Ygw183cCCTZJE54kuc9jSYwzsgw9ANpvhLf",
  "key37": "57A5Msd6i2XZNEePmMPeXzzpz59KXfqB613vKw8zis1EUX2r3jeBnVL59AXZiZzjFDCTXTihxv6M9kQMNoB3B4QG",
  "key38": "5b3HfDVusCZ4buZB7X7j4WjUsqHgfgiizddPoZL8kv9ekGei2uGvwGn74KynYMkPdMui437CxHzq9pNSCfJRZjNp",
  "key39": "55Z5DFdRPf8WR3Wkd6f5MNiNPdzG5Aa8T11ifurdt5S6EuiYVtr8XMJV9q2nsE4JAPbQRrynsXw3ZMKPXezettXp",
  "key40": "5EfJMcTKjCABtufasW6r9ksJfy6uhFUF99wiTrQxAaXJKctR2BbRoAhzZ4BC6SEm9vpSL1WS1UwgsHK1r5WW5LuG",
  "key41": "37xXxDCpJNgMGnbtEsWcCC9ExyMG4Pa8oqNBh5WKxUikomkqof1XRv7NKDj71M2VBRtjvayfKH9AMxvxHsA2KjTK"
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
