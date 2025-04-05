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
    "chrUks9o75eLZQTipsj5Zj7Mg7rnkU8UukEg8X9UMxzir6FEaQsRqjVPEGkcdnLdurxT4XEY7BKsSFs6rJ5XmMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWTgpnQSu15gu1VasGc6yh89HkawCfU1GapMgbw23HNzxebsfA7sUWkE5AswNiQns4YG8bWPLfvb7bxVCxyqrnA",
  "key1": "LZzRvXvyfenHsXt9CHJ3Aobv9xLfKgU89aX9yxMV5MKhuciewaqLqCCpPNKDSRDdzmaJae4RFSFCbExPnPS3D5i",
  "key2": "5NVpw6KZqorq1PbrhnCpqCwwzmDYs7iTEPSwDLHYKJAin3huCNcHHfTm5Ju23HXwMxD8fJxECwV1MF6jDAh5FDz9",
  "key3": "2Hv5usz5KdRYiWeaeQsERrRo3bWqidJq1VttQ4LCC9y1HVxztz7n3XpRDpj1wf8fK7MRzHrbnYhrWuWXvFRahUxw",
  "key4": "4VbJSkv7WPFfQKYy8TiZrREs4peMmePnHiAiidw4B3H3upEDrR1eoC79ehYJfQwA4BL8oZasFQMShqwvWD2QZ7ar",
  "key5": "3VGVpNrZ1E3di2MKV1HrBRnM6Q3sXsB8DGjWfESTR8GRhKSwAqtgYHJBbQ1kM25nHou45WKBaKQ8NLQTWUvkLfGU",
  "key6": "64KaLvjhjZZxdoZ95j7UFzEpBYMAAbRohAiJMEf895ZzX6vV2V3XbnTbj7CEYLnyd9nddVb6WfsrdkrQUs62Jm7a",
  "key7": "4fnXni2GjegirKkzYQdQGYzeWoktqqn6b8zFJ7Kiz76Nx5HKse8RRwYNLbMa4QofdT461KQ7H55FTt1QyauH4F2h",
  "key8": "3qSkr5cdwmEcTBHHsYbUy9AAju6jiCgyxekCAoDLfUq5vgsPD57fCdWqEAa4kU4nMHumeYJtDqxEU3eEvU8qB7yV",
  "key9": "271vWYTyp7UvNYif97p7NBa5cEM3zLNZTqL2J2kYNfZc8KR8bCsW7hSQzPJgYxksoYF51AT1V6TzC9CqsJCQtdQ4",
  "key10": "36Q6wrGNaZrxZwmgoQ2evWyXirqBTiAATeqX3CRXVTmqnA2knrMkUk5NnZiiqnkj9a3NZVvf56DFFp1oj7jDfpsG",
  "key11": "4c6dwnDXFuqtVJJHPtyEF8geYrR4SzveUnB7Nj5SnksmVNszT51LJ7Paks3GcFQTXqJ7T8LM9fXc9ucdZzH12xQC",
  "key12": "2obFoewyrtDcuEG3SgKm52uShbLw19ubXtG3QdCx62pRuwzKD3vumPpdfuYESvir513jZKGHyzCWHDfzyWeRtHCR",
  "key13": "28F1oCU6g1sw6LjUtH9VyyXQem3Xh1CjKTARwKJQVWgDvxU9SKBNSxYyb3fDqaxrux8WKHK1wRbJtCeS8AfE7xBp",
  "key14": "33AXF15EsT1p8rBdFTiVUi8XythXJoBfjMwm2xX6HAw9rSzdqnuYxkw2FtTrjqLFFYCyWDtMXTLqgUe1zqAzvRD8",
  "key15": "1e1jvDUafhAzJWDWo9ndYSYHrwCeBmKtnJH2Cc8NSCG7YeyV4CZdMyh5biiocqTZLiPCrMU8KSLQxEJhCQKkMvd",
  "key16": "29MXx4Npk5x7WmSqCJasZLZkKhbCcqjtPv9RKVqMwhKY4RWMWApQMs5HC67yweTcyjiR4RQyhNHtRE6gPSxxAoFp",
  "key17": "327K8L3DCSzdjgo1PYmiUjGB3BJxTpbvUoozaZMN5rpS3TMdy5owhPY2HGvZfeenAr36VYFJokkF13bjMopW7Uas",
  "key18": "2o7B2fSGn6WSHTTLJtqLC2ux9opVmkLLnmQW9K2K7D6z3RCFVSDuFzjXZoLQbap1FWC8Ekke4BH3v1vXXzMH1DRc",
  "key19": "5RFF4rRMG9pphbTFKXXhbTAx2U8sJ2bRiQCo3AjSucyUKrBU3yZmPHBtUxWVsPKxJNXDkQ5aNHKZj72YbhKxHE5C",
  "key20": "3LEtpubuTT82r7d3SAR387RuPJzefb2nxike15WJWmRqouknR1657kZXxt94TxRUUeVbBNCKM7gtRP4gZ1SGaSUs",
  "key21": "5rRAgoCLtS9EcBSweGBh5PctvPXtb5zj5EVgFuuCC2RMgFU6w6zDY6kCQkPVkk9c3TPQXrV8hYBeJ1Pb68Ny3rjF",
  "key22": "2UPqqqkYKEj6c2eTgFRzwqmrnwzMUhgzULAgxpigcy6g4MqYBZ8SGbiRViqoyPNCD4AnwGdKr4zT7QzRcLRfjzNE",
  "key23": "23Ck711sp53c6XRY1r8DaB9dw9o4sF3hZGpBHftvj8o2q8aD9rV6AqHhVJLbV1C8QKHUwrkEd93vrP6MQtmP6giY",
  "key24": "5XGW2AVgyw1UCtTgGbQ3T3ZvzUmV6398ogHCFnZvoBoyPQTzRMegyYtgShEMYtxoRnUbY7wtgt8on7xUFc8umFKs",
  "key25": "3pPUjXrneqh1wSAwUQ9tL6Jm4MEPo4uDhbVXfCUieTbvX7gRCWVZ4Z8hHHwewJgyFTbxE3DnNUtmQo3w5hHJ6725",
  "key26": "2Nr5QR22LyzX89ufkr3STKxBmJ4AwumtsQdtjnZ4UEDjzgQ31JGZRrDe9b9SpLWXydVG7Y3i8dvN2HURy6DWUgeN",
  "key27": "4FuB7BgDsnTrFTPGzgDvtZErF6e6P6KgEKaEr5EemG9bqTrozbnQ69m5aWUCDuxaqHzEXztVQSS6DS4F4d3Zk35F",
  "key28": "59SLEHsFgNyqeFY6g9UnPSCXoihzwBbjgpXSynRFtysH2VSSu3GJWE9inmmo8cK8SpFS3HTR95oPF9oF9EBihv1k",
  "key29": "61wLWAERGFgjYnYoChsJhyVQ5NKtmnDTVhoQhqBjYA67ucp8qmAZph2XGd5reoJdixJGRWyaNZudCV2C1V1Vg5zA",
  "key30": "4ssFET9GBosr9u5oQMjowLiucKYVGMP1crsm4rcgifpBhsRA4udP8VcS29LgwAUJEY94uV8Fx5B7PGRALVVu75rT",
  "key31": "62TeY9yq6UiyMYXS2QJYK9GdKAEYksEdFY8LkVZNiMD9iaBvHCEB8U4rk98uW3XUXBtSfRUZBahWFu4bjoATGqEj",
  "key32": "3rQLAAhdTTAPCcBeWk2F3VMxF6mwMsU11gh9YRRiUC3rG9AF1VRevXCgvPiCum2J9dsPmWZ2WSvJJs2jvuxadk4z",
  "key33": "3o3SXmgb4xHh4NS8xQL8fY31s1L4yAAmWxuYpYErGkU6qYkc66eYMeBxSgKaVwwCEm5yHbTm3QzV8z6Nbs3gv7dX",
  "key34": "3Q4VSntBJ8JFZZeyTSxh8pjSxJq7gMrB2Y2Y2oMuW36xx9NfwDBe1Jm9Tts7X5LFYaJnzvbrqTpSTxyTL28qQyaD",
  "key35": "fFzhMGRuYsibk3kQyFEEDKpmBH6TUy7gBmMM9bpTe9za7KyNFAwcE7afaeRC32Pk5GZjtPBy6tqAWqje89UgJ4A",
  "key36": "HuNoUiovkUYYXCnphwThaua5SnUdYo5vzwvk8BLQsVKub2MHFzwWNJsAYznJSWC3xdovfpRgKHn1UpRzJzYreNy",
  "key37": "3H8trqrt8CfdoUY8uosVPV2xzynrwoxJJBpm9YQgfD66kcLRbzv6SW8cXWp57qbbXYEj989KZn1Yn5a9EsSNBzPx",
  "key38": "3TQFWppXcEiMZaXv1XnRERY63c3cyLDPUwZfxTRKyzBEPGNA8wtnhmXaWt9jSo2uXv8aUMHgbh9jzewY7TPbykLa",
  "key39": "5yYi67KQC28FyuTL8oCtEcDMsinLBCt6vRFvBgLm5dzgFtKCnLHrw4obmRiFVK1oZznqvxFwLjfFt9zR7hzW9YXt",
  "key40": "41oXibUGa4gYKLPYMm4ACDE3FoRM6Cz97hhnwnxjE1bRWgNMCZPTYBnRxBbNpWfceRHY9c5rq5ucUNLp99Q8PBnr"
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
