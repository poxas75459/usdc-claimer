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
    "4U76nY4xXTGvvKj2ik2bj2EMDiZHCzSuT44t2Nqdk8qoa6o5bK87Uup3Wy7iYQPcQ97fyPcuEKKQTRUvXqfwugRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3ucfBHaFZVMBQqJ7exYb6drgNY1RMTrBp9nu3pKEngEE2mvoqh6uSVQ2Q6w5E47yMHTm1mjTNSaxEGR4vgKMqP",
  "key1": "5QxCMLBEaxYbNUm4vfs3XvLQetgbXx3ZZ2dMT68Ny3qK66nZTZLeVcVzzEzeSd46j8T3eBEuxK4zTx31JcTsdbnC",
  "key2": "3Yrxw6rscaWP8wPKdMDh4bdddAk6mki5ESHnQFX3a5d6JF8BeVTJNj275WcghjTvGTKimYRXFMmWphTxTK69GCBe",
  "key3": "2FnecTC9GY3z8A69gJBtRBigiPq8fjJeTSALZaxvQiXuvvF51i1S2HioA9qJ4CfCoKqTMZ3M1p1Wy27EZndQdF8z",
  "key4": "55nwYdZY1qckTas25SWepp61Rv5ZKHKFXWUazXjs5WgyF8j5WTVpvvdwfRX3y4MzfiuioYNTVq2xpdUhLacRWCMo",
  "key5": "4Ayr7Kab5XzNwghdrgPCwiyR744xeSqscoKUfAjDrNM5BZmXSpbYxuQA2hFoz8Vh4C8y3GDpgXH98NiRq2So92Pc",
  "key6": "2edqQM5Xxm3evbAdkvnsakTdcFfpofroKkBPQSdNeRJsa6xzqFwUUPfRNHBzL57hBRnEg15SzyJRKkjAw2QzV3N1",
  "key7": "3aAaaQe4TjY7oDqvPutzyfSj9jigGEL4fK3FW3xs6d4n3VKBEYdhtj8axJYL485hz7unxQFjcTDEVfMhtEKAuZga",
  "key8": "2fSfYSqPdjCqv5dAvSzfNTLGaAs7JaKL3Xjgb88WZa7mZ9Zy2qKVsF2sq7LSqQYdcEZqyBpEnjHxFB6gaoB8nARJ",
  "key9": "64x2yNtJ3QzMMLrqkiHdF6dyh9Afkj4nkWP7P6qMusMPCqK4BpMcYz15bQmR787dRntVTsEjSttA1thSaN6hJK8N",
  "key10": "5FERt5FsiyFsgFnSa5AQBkWub6KZXVDFypCXTYdwGMAjp1ScLNbrpEUDTEhGsT3GQmDAtZEhxe4iBypFTp3ZU5S5",
  "key11": "4u4pCvfAfDMN7sGfkKLhUzyjKnmAbVhNX15rjdQxV5Kudp9T4ybSbbLX96rwc3UPeDyRfccJJdtFjs8LdAX9TLyr",
  "key12": "3DN3jf4DHR8W6TAX73kVNLyZBDQ99kgTzKdXgU2TNqYgjfqRRhudYpJtTX4SLNvWTgd5pmdDJmrxFu4rhyqNwMcL",
  "key13": "3vwk87GC7YQ4iLMR32bibi9J3U8sBtVRrN8ePEiY8WT3Wyt6EBS4N9p39zLw2dgXg6AsddhWm3HKYpiBeiJ5Ztds",
  "key14": "346tgp31mrBr7xTKZGuVVPen7YL8eLjCY2P2VpcH436YYSJV969RyE4jTJzH27AjzJmWnfBJFSNKrMySMsd84y2T",
  "key15": "4nydovD1hYspnrxeXVhW9muyiWNmaNqDBMXSvj1yFHr8KawK3pdNSwMzmZt2QwyZ8MPZNHZeusa2zdHoKw4ELQEo",
  "key16": "39nuHyXnbvKXg9gVhMbbpDrVDL3ybCpbajMNdyA5i4nFUo4bXQy79a8ocY51KgJAfg71RQiuYXZr9RscqrkNCgrr",
  "key17": "4AJwD6y3dnD3AwUjaf7vCPUxkdix9K8gGv5U6mzWTRjTJUoLS2XZh8ty5rmCdB4uEA2Z7BG7StL9EAv1rycoibRP",
  "key18": "2rWLQr827xVEexf8i4mEXf6tUD51K8w5cXonJB6HHSSKEuusjXnZwyJdRF8Unrx6bFRioFuhUEEX8XQBeZqDaX5a",
  "key19": "C9iqCMjLPnX9pFamdxtdukpJ9Q2ALtz5X9TmAvYGsqQYyAFZL8PhVmGcxaFxCqrsX7g9fgDL7tgyDNq7HBprXSw",
  "key20": "4MdQPiBJH4NAgn5B9DZzzRQemXDyxHj9azH2fDozXK3eneDBba77RLgWvtLJgVFKHGCLTxeqa2mQNtqLfBBN6uKC",
  "key21": "djuHnXXZi4qMvnuRAdBUGe2eJENk2619abAW7KZonHGYwuSGYHQjdeYomU2WjyMRCzWd9JsukHBexv3gdPwYTUk",
  "key22": "2kBm9An8263UKdfCk9NKizkTtjqdztPK1Atn3HweL3ZEkSniA2zMcSGUDMXhzbAHAKEEeepPjSsq1D7EprfAnGc2",
  "key23": "3xDALpN9qF1d4SanjJg7G9LmixbQkY1q13kYjv7Ns1WiRSD9UMDxCdwUHvKi6XHaHWDmuRqinLPLRXz3axyhVH3J",
  "key24": "2g6uGmSr3fEHkTEPySbpD8k2UFrAzCgEm7CuEzVfbuuBAHzyQybyjVjkHUX95dEus4np5T1ozU5co8ZdkdDzaGb7",
  "key25": "4KUvt32VYb7vF7dRSiswfAwkDRVbZGpk9bmCjNANHBVpAiksFE6Pc2eeVia5Tqjr44BSQczSEYrGgqWGuaoJb8MR",
  "key26": "38KQ9k8Qkz8Niw8eviwQPZdKfNRGzXogoquUuZZrp2k1QD8RfA1GVTJdxTzHsNMRyweUYxbF5cfurju6yvpZrULY",
  "key27": "3AREQVpkG7qCrxfnBR2JsRPYNd1hzpwud2usQNUrdSLBkByBiHXdN4wo423XFPDJtRvTkg7hFepxKfPAyogdX5Qs",
  "key28": "5ag1921RngnLjJihpea7xhQWKHnQG8ecscxA5LMqQCFap8sVgz82GvX98hGn7YDDJcefsN1zBP6MGJmisSwJ4qJk",
  "key29": "5xCbhenU5uuTAPw2YXZqCHBwS9TTEwUXZRodYs3R8VmhMUhFVW91Vc2LLVWrrD2wSrALxa6dCGjtBWZKMqL5iHxU",
  "key30": "4jvwbucpCko2TMPXDfzJcQa4cQdmtGDJLeHGkqQ2yzDCpEMoxZCLJx2YDEPeTFcANxcoc3xe2f1nBniKmcfaYUMi",
  "key31": "3wK9BrqYXGh5GVKM8jXsV6TKrkguB8VN6cDnYkABPHrJ4zmzpr1qiyd66yys9RDcdxpQMySYcdrarjuTVwRj2u87",
  "key32": "654xdvCUp1Y8qnCUBRsnRV4aKsZHdTDFX7n4PnN4vXcJbsk6VkawvFU2hNnSvsK5r2azMszBGLSXKU95R7sw6ShA",
  "key33": "24ohedFgC5RoDjhdostfXmTQ7nt6EXUWY2WNnRsL9VYJLcGDCgXbqzBi2drdjY6Lk1vC6buf8TQwG32KRY5kx94S",
  "key34": "4KLu2tDu6cxejyHtwoCAYjSmizWMkoZPrVf2Wk43QSHB93SgRYwKPSGeuAXRNwUesCSV6HsMcwqKEJwyRJ9GLBwy"
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
