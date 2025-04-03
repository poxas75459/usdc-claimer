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
    "5HMWWvi9M7rjEoHNFq8hmD7PehkhyBmT85Fj5fKEspMXJjhuWGUjxuuysufymj3fY6aH2mxiqUzD19mKLG1xkLif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKfk7Kncn4hSJwr2PAgZmRnPgtyrxRu3RyMQUU37Pc7qxHcnk2LEfDfZxJgi8irXJvGBCxShSA1QfSSKesfRQ91",
  "key1": "44XgNi6WLzGAYjp2huSQ6yLfHGtN93Pj3pJsMb461mhQBDtoCbGoeTc54ftvk5b6M4bd9iQNsDGkc893f8Z12Eed",
  "key2": "64JSBHaHEiZWbwtuyCeT3snnZdpq6CH2QfzRWShumXLnWv1JULz7NB3QmG4FT9QDjqkU2FjidaYTiUnWaX7XYsmf",
  "key3": "5FXi9f6CDdjmfDWUKpB9WQCTAM8gExvgdeErFWmogvJuF3txdcBEPLcy44eE6Rv1YFqbJQTKYQFxuWa8h9JW5FVH",
  "key4": "2QMmF7QX7wz3rM186UqihozmXUdfAQnWswUPoisATh4oSKHdQt3tSmaoEjyNXX4VHzXSgALVofmpDKYyGMBw7p3A",
  "key5": "4bLVhXvzKLRHGB6tZCGn79SntKFqMqgZQBrDWkB1s9kw55AByprJxovU76o5oBkMGnsHBU8QwpmZ6qLi9cUtEXav",
  "key6": "4d6B4kxyjCwY2aocjszuz5yyuEfQn4Lagqao9BgCAt8tq1wYpBoFChyx98iyvwUqfvXoC8GEkzp1Kx4z4mjANtA4",
  "key7": "4LtaFGVLMZZdhWa7FhJmHdTFozjKHL7NRgeWJdHRXyQdeCA9pZdZNHyMVm2MQ9jU3FLBkm42hRM8cSsE3R4X7xzj",
  "key8": "3s8U2zYW8bQMnduFQE1TqCRWEzUDsJPWwB8wNq9RMQbebbuepAt7h4gD4XgMnt8Mz5dUoCPTS3QFwohTCMn9jmkA",
  "key9": "5rqVE6vhAiUMqEdmwXmCNPv37h4MrPdBkWVtqETckffPRYXBDL6D1GhNCs7fJyKgT9R7guuFPYrgGXKWkW88fe6o",
  "key10": "m2Eg6yueC4UvhAxQhFhatytLjTazYU3M4FTdU95cFww6jkkrqSkRFujaeHMSSBXcQ2DsFuQZ6iSzk8bybymD9vF",
  "key11": "sNQ7hajJjZWVMGwjq6TZuXhw6EL7q9TRvjPY7CXGhW1TFqd2hvFbKCz6xSrU6P8RhHSRhuyf1TqcxRmGyEp5D54",
  "key12": "2zkqJ7ToA7qqi3zWBxG1vqRBdy3YRUULVmJtxeDq9S9i5KQp5rr38rfBMWgRTZJuSNVsJZN5rc3G5qsXeNoa5ii8",
  "key13": "5pKSesyxqevruQTSReBqcUubJCfwX9iYCZ1VKXx5MFJgV7746zsJdVCjYBZx3WdHvu4QuCY5Ujc8UJ3jcsGWBy4L",
  "key14": "65eCDn5YCPGWENxDLzn8Yw5dRBfYAWY3dgcHfVmsqG8AmtQcjTvUKixXotbRmRhw9JhbKKdX3MzHjoLAwzAT7gSz",
  "key15": "5Un6SmJDp129YguKoNp9hm6ERDqnRiQVfbUUCTvnoPYMnWby4fHcKxtcmMhH2DpEkQVNiS5hz21SJvVsRmueMuMU",
  "key16": "4PxymB9x3HRSdoHkYHJVSMHAo9RehuQcraPWcAuCurZ37aJe2kjiVErid645ADiazAx9PfcMhnM2DzvS5xvz4sy5",
  "key17": "2vCv42VexxV9cRuagxWeyeBNcrQgAWGm1YY8pyNJay7645yTLdhS23rrzePfuhCHpwW4eX2hWupdqoE7fa2N6LEf",
  "key18": "3RWgv8bZXKpEvQWwh2duPDSxBu8wH8k469fRfdXN3z3MegWqfYRF4Amavug99q1Yrjt8Ft1yaLc8Ch6aBrVPmL1k",
  "key19": "4B4mECaEPXHr93ci3mgjFNYQdWiGsAt62RpCdiathqJif25XgjF9uk4g4GhHS84w7qmepkegAJm96gFGF39iizFh",
  "key20": "5Mi2fepwAg1kbr4u6a7z2SmstFQNHkEPj2A3binBVEYvFRDtCiE7iEULf8UaVG4HbnLDWe3VejQj6PrP7EyyH5dT",
  "key21": "4p8oPx8BVcqpJxynuEayLKRpmFwqu9Z7MYJP6r7KvX8gEDAHpYPZqTrsknnKghMLe2zMS33V6uEkuzoutSYmZRds",
  "key22": "RJ584cTTcJFqdCwENz2QLzggLh5owMGXMfmFLxu13Jnz7b6t9y3kHWS5ScUPi5bEiPvSiNUdENWnquemC9kJJiD",
  "key23": "3BB3BpudwGTs4hGW3FKweBDjGbPaMjKYrCM6EZ1thiGzS8C7iEeZ3z6bV1KTHEStGy23GbpGbCwFuU1XSq9i14iU",
  "key24": "4uuzcfuHe85rjxU7TWB3WjcAroXmy4aGGyugHmqzPxrd1VAMiYhypXEga3xvNhsxNJsXDp8bdwR5GXggPMSD5tqm",
  "key25": "3ZEXXf8Arhhceds2gHtnumq2f541KuLZLNMU89ZekVTVFP2eV9XCmtJjVxutqi7oUtwY5DQSLZCc8ae3h7GijAjc",
  "key26": "5riRXhtRAygn5bdedupLZW4zfzyutaLoDD5vSrqBSTN6EoWXysxh1w4pqmnkHLVZcuseTLGYywyMeC3qY7HJveKx",
  "key27": "2qUXbui7eG1R6g5fSASmUJKrsTH15wTtJ7GEytjf4cwDNYw8X7XPj6H4vGK8KcKdJzCKQ9ow5XsfgvQXPRiEp2cJ",
  "key28": "ZT9sTVDq2kmQBqiztMrGkBTYi56eJRFusxe4r3P6VwrpeiZ2Y9w1Wxc2M2cR8ogvUvv8RkjgPYMkH1YTwSvdS5m",
  "key29": "4Pkv4xzEHiF6wdXbhsSN4W93q7bFPwXTzQh7CYcdkngAtgSJRgxbaebC3gd4XGi9VR4BeFkAvEgyFm6PuwCAKM7s",
  "key30": "35M16mDWV3mEYiG4L9eFoHAge2dpGVjmXBnfk692mzo1XKuZ6dtbFJewfhgjnWsKV9moyx6ShwtDf5tBEvvrx8gc",
  "key31": "62eg5avsVbM1uDvyw6F7MHVV8q64kvW3zcr6zHGAH4BK3YD8qvBYtS71gCa47CR6FSpgbQRgtw8qjAVLENGaaheQ",
  "key32": "5zfTmrBzpk18d6vThJfnxLF6Xb3t2Zoxu3wZpozN5XQWNZPbXiKHq3ejqYUQaf2s6KqNkcsSK2csWPCEMeCmB4d7",
  "key33": "9ngkwtooCb6TsZ1rtE6fMBFqFATezwc5fYX6UW61KVgiNDKKSmvM2sjtQsUh61CUvv4gXZURBbMH3scXBaYKHH1",
  "key34": "4athQMydrX6dN3p9rvQxqkkVo6iqrZ3g4xkqp797tHMNuL5tMsqQxxUtHGq9ovebyyeeE3pGqQz5yukmV4ekMGhf",
  "key35": "iZZLodz5ysRk45Ru1HTchDNcEaMr1BMkNfxAWVwc8ZcoAHnyXRMFhS2x662pF6jsjwZLKY1T4MtbKBZ6vqcTJdm",
  "key36": "46ePaQkaHdxvGib9wBJ5bR8BPRNGpBeAx1Q97yT314J7S9pb31AuBQbFLafAUyFD7xsfFWpTxMASGKKqvih5Bone",
  "key37": "2jSuZcyiiNLSW5b4bHT7p9MCoYEDHeWSuUm2856ocZ8CBuqPFmm1CXY8smFphctH3rPy1BxhgYBCaLxH6fJX534T",
  "key38": "q9QDgR9k1cvpaL3pEtpDStuQ5WtwxpM44yPjwF5ZLi4wGywssstvw84PxGJ5ZWXi5QRxfFYUTxZ6AU4CWsy2Ubq",
  "key39": "4XJN5r7qkHHt9TLZQhAKQumXBHJSRiuQuYQQgLgd5LNQwseMbeERG7GCTCHgRzb4KWc62jW7TFBFw1LMRfnxDt4m",
  "key40": "3HHjs6jhZKFBTc5xdUJEx6KwTJgvmPzfw5XvM92d1rtJNWR4esFoudnwkb5HvWA2V8ceM2WsvAAnXvVgpC6dscqV",
  "key41": "2aLhdh4nPFtJDRPY8GAeRPykKcpyjHkE64GJ3u4DGN54U5eSaiHHHHRLTNtnJhnwbVNqqTNovjAEtWKSHMz6uWad",
  "key42": "4Ts9UALbA8SYYj2DsYtDyr6pL9FnqXbsqNeLv24LnUQFcbhUnB9Vau4bhzb6JX4QE3Yv4J16TDacHZThBLxZypFa",
  "key43": "29cw7SV9RKMykRPWTXnyNGGMYyMuSK2u77YGF2VtgR6C3rswNftctQN7sWYkDk5rP9f8kD1fouE7SP7ZPxWVCLQD",
  "key44": "3KnNmLL6CtJvscvwtgdmoTwE9Qan6atTDMFbruXi5ojFrG4YMkaEKBEHwcAgMUgP69Ts3YpXAXxRBMsSGUWb4BTQ"
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
