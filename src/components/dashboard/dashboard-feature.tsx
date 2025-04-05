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
    "mEaQXozsb54HXbq7KAMTfeAfVBPJRpRejm81QVRaTkpfdeT718qm6dhooxoFthJssyBKUscFPB34MY8B4oa3DAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bo2yifZhQCTgZJhmtXqGqYn3XZ8XvgVrQsS3KCjFhYbpbm1HEFXZ8NNMBW4XAbtWg22g1oUkTANLSotz1jvWbgq",
  "key1": "4f5bYEdrYG1KFynCaqJvtK8kv5ruWgW26TC18Ljirn4JjSMj9sYoPmEqkz9zekqxESRK1ezGnK7JtNkRaXiF8UhT",
  "key2": "3AiiWc1FUnUf99jZyuHv7ggRt64XMhNm9mamvnYMX245BbijxPmRDdnMQRMdtGBuL2H4qynyzMZnWBPiU2bBdrNZ",
  "key3": "tAwGwdGhyZCpXBPUAmRRfypnAQo1HDL8U7mkjXqkFxT2Z8sdB7pEjY3TL3d44eu7DU3Apra7keAjZV5rgo9A6St",
  "key4": "28DH9nc96eFTBTRdCyujHb5BNAgrgNGzjTSnPCudDqMduaWyWtkZf5vn3znnYvpDCMTEenDs9opRkJuDugbTBNDR",
  "key5": "2AUkDXB1RYvNhKgVuHB95mGgM9AdZKttnguLp9yQ6Yay6XSwtwyz63YWUPaJW1xt7bznzzPduws2BUSBGbeQcW4r",
  "key6": "5jL8H2msquyP5nTwb4jjyaerHCKaitXxnwdFCr3JTRcBtFh1jiA53vdkNmUWSP4DfoUaqs1pTGzXhXcbRXHjgoww",
  "key7": "5SRfcti1JZmb2oNVjcwVf6SrGPAQ182gBT9RC5hvGb4HFV6PkNqxFXR7SxCdkftZyNq2Ryuo565LqqYw3ELXGSWd",
  "key8": "52E8jLhvSFeomhF2NhJAiBojP3mQTUx7AhkMRFKU4AjZktXZ6fChVhpqD49jupUntaTEBQ4XASikxMYegRobkoxM",
  "key9": "4VfbYdyFqNxaL9APUrps2Uz7NbGPpc2DL235qvkP6FccMQEFpzrvvhgsGpHq2Ns5789QZZAXcaMV56LyaQoUcBDZ",
  "key10": "aNhHEWjgFPH5vKcbrXun33pymzZELSoDoBnCmtrou3Gbdaya1yngk1mw4FUkVrnZUzNUhNGicjHdMkLnsfL4HaN",
  "key11": "5WGPyVLqcNvW3fHHRJeDRtsUsGCbs8dBJVYR1rdCGNGC6VyyG74ByHVANEHjTFTCbE1hySpAoqFpqBhihKDD9VwC",
  "key12": "3d1SYkBDJsapzEF19mbzMBFDJ3M1tty8UfqYWD3p6e2cusukiE55wuYmaDJTBoqpC5Z5WkjCzwWVZoTN39pP87oP",
  "key13": "2wyrgHCWQxfqe1E9zms4QPH8PfGQDkELbFJKLYcEWoqczcKZukpzmevESLw1PJV8bcpfEY2xJ3i4BtqxbBoKe7mf",
  "key14": "36eDsovb5B4Mq4JruTsLHcwqG6GRu2Y4hnN4P2EBAbVDorFSwPDj98LwvkGAxNvoRmdT3nHSPbb7VmvmRkpnQtpf",
  "key15": "5zfQ58KDEG4BE3dBRdxK5NKciCSWDnbnHLMC8PndrFqxtLqtmycyeLPCwYjLQSi2f35YbQpXe2LWRR7ychchia1N",
  "key16": "3eBxFseGLUhqwkikkjFt6zfCsaHqGNYk5vJDxPJo4xxNK53MpfDj4pSGagE4JzfC8TGTHebcHnk26JLCeSJ4vMhm",
  "key17": "5a1RuNt8T9t7G7LDCeDRztaD55r4W5JgMvAWmNks3rt9zfhq3gt4wA7VBcjma6Z5GuUDuJKzTdsnb35UhRPrt9ho",
  "key18": "4V64nRui2Nz6ZqQS7tyUf6SooPV8R4X5FiLz5SKPGijwKHK61MfJcMxvRZuXrEmPrBvBYHAaoYBidJz4AwUMcx2X",
  "key19": "5R8SSF5sNPjZ9s9UhqHGfDoYhjZ2mrDJpw1mgkMrXA5U6xPVAGw1e92pTc8pFcEJSGC67QZYNyoQokjW4KvR5nkp",
  "key20": "sYU2RCMSzkweFVVFAyNgpYMmygARoCxjxZ5B19JGUMQ4EZSvdAjXxNhCpnRFhcibmwZ1bkYy1KSF9oQTdUD8WZE",
  "key21": "2A6gRJy19RgSe8ftKXrNTZ8pR71kUqBqZKb6j1WBt7FWzqquSWsBcQGFncCLgYWMD2VjhzAAJqWYcKmDT6vubGEV",
  "key22": "4pxoFt8xkaUyKdG2uMhMf3kMhaMnnTtBK5xDs9BRgaqEF88gEUu3qRkeQQo75xEh9LuxBNK5EKMhrtC9UYVBaiYH",
  "key23": "3QByj6MnNjsDKBWruR56bMPZRP3CxwoB3WPDxGi5GXu9CK1z2pRy6imFFfhX6eQYZNN8i1Pz5Qix6LHXQnWfagvR",
  "key24": "CCwWP7FAPVSnDPB8AVX54RBbLosP7pPnEcScFmKF2eYQq5QSdDxLWywhtrAcDT26HyLjwPVHiRhNg1VSEkUMuwJ",
  "key25": "e5xgioSxZgFBVu18egzJdHi5XBNsSLZTuN9tQ92rQEaJoermMbj8abf33X6SaCowFY5mCHU4FYA6GAy1uj4Sy56",
  "key26": "3sJmDVq2CzttriTXLHA5KFgCjTpEz8YXs696LEF4BQdnGpcBFQsZhuZVs4dUwBZxV3gjMwQ6jqmFBoxAL67LqzNP",
  "key27": "5o37mvzr52bxuSk2uLJGtAjhMzYdKGt1SBhTwRQcKWRkNMR3mYZ85k75Dw12NFv6nccHmNWtUXTiy7gYSamWXzAz",
  "key28": "2QfMzPdp5xpvsayT4KFKFLSSgvqBiB8f9Ms7rBuiGZXjwwV3cn9JddnVX1Ky59H8Ht9SynbWyojedGiavQ9BFBzt",
  "key29": "YVhBmot3zSUgj2jnJRuicfHEGSVRHAiNWtbVZKgwVGvm65ZZ7aKfLryefzDxAW69P5AXEnp5jFdhxPAcncu5Fq4",
  "key30": "4Y8XAhLuu3niaGYucepuHxsReNjVs9eLEn2dWUDrCsAXW1wrkWAqAsk3xxjEVFTveQVp7uTSBQuFKpKDdf6RxzEo",
  "key31": "3dLyzwjtfii371gRLU4XqqrSZfKebEqFYnCbUYWYbMZ2G9RsavAx1X4VNVDaoMkZEs63qJQpp9ZGVLM44TdbEEjN",
  "key32": "2eojip1Mhre5wKZDxtXJ92DBVvduDHNKyu57dc53KYg6U8tqrukPjBhMvonS5xsgoy9xNuvKJS2W5fXkcC7VxsYP",
  "key33": "5ocVTnMHpFgdexTmxZedR6nQgwNxSXqET6gXutAenJDBMmCT9xZatdoHHXiEw8Svzky9YGE68qjyj1Bsn3Fmnj6R",
  "key34": "3NcQDcngJdDCgzBrLZ7h2nXzGsBwjauJVhcEKxfftYYYVENoFf82xucNFWG5h1q2FuiRNhR8kqCoAKQyixnAF4nT",
  "key35": "31muAnoeoCXCy1MHky9G5NCSfG7b39SbRpRFrwbw69HiwMagZmVoNYPdVU1RKAThRVsRb9Es6VJbrkXS3bVHMDxj",
  "key36": "nbYB6E4kVQWZUa6dfB4K5Aohk6foX7ifUxXUk12R3oajNLBHyzH4TofAZR4CBzsS4L7R5G2JNpHCkYxdjcaKfKf",
  "key37": "QtE5qqqNUew1Z1A48p2kH6nwZJAYtUwrFkFDfayBPRwhmjjEkbmCXN3vwWSGZWTnSMMMJ9vw941ProFZeMGwzAQ",
  "key38": "4APCWH5oPyv3qJitZC791cXoW1JAumdTyhfs1p3MxhpjnbAB2Vochn8KgEV2K7nBJbJsv1zMhY4FnVHDw23R1Ynd",
  "key39": "2ZjNdj5xCDam6UkZVjdbYJb9xdDdvTvWEgGRC4ETqi7UTkvSF3i9YgcSHjVxLJssy2SfMVxZSwaBLThZDcsCvXvS",
  "key40": "GwDVvLcm2K8jdpwybjpVG4CjxqAenQTPgAoaJrauPipam85PTLm6bDZxoJ7qU3JmAHwJrxrde2nHCgxguzfRZKc",
  "key41": "5aXiCAsyErSCbEpYSHMsQjkmwMH4BJjV1LadEpLJo7gdJHyJorWPDC22sEiSFTutrcig9b7c6gNCSs2WjQ8LfNyg",
  "key42": "dW2Tfu5MswmR16QM4BUhtqKyij9mDyjHHQwsos55y5wi6KkqAsYRawiE1HG6GpMgnLFMQax4433HZNFd9JFGAjJ",
  "key43": "4vW8MLuakLpEXrEVFstREzRDuQuURB2Em51Ho8v7jXxmGGpXqGLiJEeQx3zHWdHWDFBd2jbwvRoDEoFTrFGYTyFt",
  "key44": "3QodzkzgVyqFMSEY8J9dDLSnbgyM5XWWhYrnyEsbX48wV4bhYNwReXbC9jGpkFpuqTepnPJpaseq4L4pHkXydxYQ",
  "key45": "4uBR64wDGZBDDHHZTcpVN9b49KbkPwG8zyoovJCJ5onDD7McRpZwQBSx1hpfNeb8ejPU6rejKymg4HKhD2r8VBxA",
  "key46": "4SVUr73MXqrwAeS7tvDc7KRY6gmfudwLtTZevaToaEq41emGavLrVxRweaFXYHAje6AvSxo3uZSAgMw79LWdZJMB",
  "key47": "37ERaG7GpdZ2UcVX1fU67nZuU7kESbfub6kAmvyn6nmBqMet4BN8fkUgkUQ31quFWMSdqY9tsbaMhaxMBkNmoJRr",
  "key48": "33uYKYhnfrTNUCL5CRfYhX6N3gwiiFhsWh3Znib76jpMBvqWqGFo7svgtdt7qcN489in5KqwEpQJ8jha4PRWhbQR",
  "key49": "5Cztw5iYpZY4JcGN3dMR1qV3UaBK2BQQRnRefEPsjFwSYox7hkwf37muaWzsrieVir8zrLXCDLS4poE167EB8Sp2"
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
