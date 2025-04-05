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
    "3urtWAFt9W2oVSffocHeT7nToKCokBX5FBT44K8UQ438SeoMeKpt56vVxZ99cauoGrKbyLQA7L8Q1vBNdXYQPKta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMkS7GigRUxLtvGFdij9iN5P6dndjL8ykhbFPRAx4AKH8UNAd9obQCyEp9ecCAS7ZVeKu7VoGdKBmjaY15cZXHm",
  "key1": "249JPQiTuspS5ujvNRZxBiPGBmPzxtWU2WDLD2FVJ7SzuJBnPfsxJrbaUVA88MX3u3CkkvBBfxvi8rFgWQgSrLZB",
  "key2": "26PLVzSj9ZMNcFQWcamZVUkBNkeogZjM9ut45HStZ6oZ2BYEQLgvKdfrBukWvGZcZUc4jB125EJWZGje9NWhRHYf",
  "key3": "59vTg4rXmsfspbN8KADJJYhFfWbzRWujmX7po9dMUCLXpXpxWE6Nk7zDrqw4xVFjjFWpws1g8NGbg4hsw4BtyqHi",
  "key4": "2HTHZZ3LsbuKT9U76eTjEyyFh8nbgTCL1ivv3JsszVZXMJFnb5h1Q5CugETsnuZophnvqvEvQqQyV98Eiq7xE4K6",
  "key5": "61FcP6CNDSf1hD6NtUfhHJWEdcrJ9kQg3jXCfrxMieXvTR6gkmy1azU2jTzN8UJyQ3mXoaNTzBHUC8rydUXT8MJY",
  "key6": "44mJHDVaotLoqEbN9fPBdWVdcGXPnfUZqf8SuK5NvAwnWrKRuPQHUS1TAUETGsHoBQPLpdEniQTBffvEr2QTAR2o",
  "key7": "2gv4eovdxHTGidJDjSRdJAqw4PkKPc1QUivNnf3E1ZD9T6dxyi7FnLRLK8sUfdLomQytQsRtqhPWyDFMe9jdFsXp",
  "key8": "4ua62RjCGnegjgqxpsJDp6q3ZmjicVqKUYfs9wgkPhc7bAQTpTvkpCNp8UUgayCpV4no3r7eMjv6ei8BnsdnMZEX",
  "key9": "bVn2fYx3wiqfMb2qDy2nRHL4h4WDQZTVYN7YoR2bzTEkoYEXoZ89fTLDNwehwhurXwqLMtroc4vgiQ3uUJ9wxgm",
  "key10": "s1ZARoLUyGtjPjff3WUcFbYwSrwkVRAH4FUBs6zsqtiDFAciMYtynkJKBGWeizzRv5cFpLzyyWkbcbkVsmuiomU",
  "key11": "3cszoYjfQb9UHA6dANTQZ581xHQka6VzWhHEcnbb4YAyrvtj4fJtK1woXjkjKC9bdiXTxsf2gKUYEfjiPswxKW88",
  "key12": "4YCsfAPwhqMf6VduNM6jM67U6EXwgA5n45ZbfK1RBxSCajZYR66pEqzFoFtXkm12tcMbTYxdQCDYb4qQZ1XAh8hj",
  "key13": "k4isFz8BVaQR4x3QSwbr6aQhrGsmLDJ2o1GzKCV95gLjAKw3caVYBBbC4zxFsaEvtEPjdzAFLSfMYg4iAaFb3aC",
  "key14": "3J2ccjcSUmhrrZoVuYY6kXYAA9s3zdzihdXFRz3UuY3PRXYzymxLp9XnRZaRngdkkeSqJyaNvmgyciHBPXRt99jq",
  "key15": "5sB38QyGRxo6KSk23gAneMXUszU5rs2CVx4ayHChUPT8TL2sUztkYV7d2CJ353EGEzrLRP8hULMtnfLBqEYHoprT",
  "key16": "2XiTSeH2UkSdoYLLsFjFrVR8NZLPoXsy9dms1V6UXfhP2ZnfCxfWH7jYnY8LdiPYCLofhgdLU6wCVP18WLHftwoX",
  "key17": "4vn4tbk5sahBRiJJRoPeGNkN2NDL8YVXa8ucVniCCMB3jo23GzmZp4Hz1VYhkR1DrbxisvHYeYgGUH74xCENejN",
  "key18": "8zMsTtsBWtc34cXdVLTsMi8sGGUhTpyAGQaGB7qJ6UZRtDm21nddB2UKY8zx5uoZ4UNC3jULFjFyCzEbCK3xSD3",
  "key19": "3wKxikukVDkPXrERtrYUtP95goeKKGMQeCGAi2hkT2Jxcu3NZ9gX1ENbgkd1o318FWPtW23PcJrzijhAJLAZRqqZ",
  "key20": "38g6vAMZadmnhBxaTeARLsznLDZDKQfLwrRsNXC4r4ALiCoMMdkDJiqcUSWXiEMDAU6U3ozhMVTzdnwFk5Xskn1y",
  "key21": "HTxSMwvzzkyzGfPry96fiA1oZSZX61pge2hsCZLPoVHQSKtB9PseaCcY3kerPMxM3kV5C58c8spbtPpbZ3LsyQc",
  "key22": "3zMU1V6DG6XTriQXyqCKTo1WU2TwNUtHzC4EeRBK73m9KqRR6Tp7rpFtctCfsrtWHt2qu4dzGSziDA1U64wJfGft",
  "key23": "34YHqNB1otTE4AFpegPeFxGLVJj2K3T5qh2JFJS3ynBVAGoihNvJWdapc37ANGDzojEEoRtokSiMhYr4X2PHg8AK",
  "key24": "3me5dTgFCJKbGopGEWtV1BdVvgtKN78ukuYK2jb1W2pDkDYnb4yEiDiMjD9t1uWfMKUF6E1MKfzkp6aVRwUg8FFN",
  "key25": "3sacG6f62RR7bZw8AxeanVgPUZgdPDmJXqSdXmtDdk871EzQZfRzH5c6HSwvVMoT2GBXacxioQCF7FYEEHKWAwDA",
  "key26": "zF2fiFZWLiYsp1aJ4Wm898TLGonPPsWznEeZskKt8GAeDXvP21NBeQyZxgcU2tWFVrxeZqEa1p7m9SBHcDiAkCQ",
  "key27": "359HVRKbGDHCBTYf7ESiR6aV8k6k43w28RW72NzNBXdBdZeBfFC8TTtkTaseRH8jvfRvPnSxFSN6pVWMKnoPZgAm",
  "key28": "trBBWc4yBHnAdoNWFL3P5NBtTeNmwc415rr2wwdpCBYQWVtVqB2Jd44MjWN4DBu6Gs3Mh4kdpVF4qq71pvxtegX",
  "key29": "3REJLPU98wsKMaRgBZqfxjjyE8CHDgg6hy9t962LbpZFNVnNzjrAYrdr3XrRgvhuQe22hqsiooPY8Y6E1LvNi23X",
  "key30": "55xjMhgG7kyWyFXfQBesMyV9GYykdr4QpApa3no8eqwkvghbDLqBP9ArLdmgrGXUZNewQJujxRfnaNh3MAu6Gx25",
  "key31": "2puGLe1UoheJ7vJbBz11bhFvtWfwXndUshJqVZ3QiEeoGBJuNn9zN6fVCBMVPuZ8khd5aS6GZYeyV1QXExWxFNq1",
  "key32": "2vG3LceS4smtGYaiLTkxBQS2Vx5ZzQd861527J4Vn5KDXerTyKhWfAYVFUWjXKthh6F4enK8WYfhtqnsgxPCF5rz",
  "key33": "2WA4os9M1yteLzqJmyUkcGqMreui7Tp8QaMdbyeQKK2k8pTcYymTHub2tez9nk37i3CJFLs7JacxUqCSYj5FERtV",
  "key34": "3rnbm1b69yds95WH5C5zvNAx5wWij9k45xKvAaRhWYsxN94DqEAn9y97QSnZ7HT1iwC3Uu2upjThnoGUC64ZJrXJ",
  "key35": "2wfqaNEPPPcwujbts6zMUpQQG4AUiK2iRQYk9gWk2rucmBQ2mbEvqTPWj9X3HS8cxvKNvR1rxiKwYS7aRk2qszqb"
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
