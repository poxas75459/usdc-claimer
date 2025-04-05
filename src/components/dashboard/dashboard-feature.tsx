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
    "2RmKR4FrA8tTHT8bdaz4QdRxPKjrKXXxMXeqsAJNsZ38cCxRxUgBj1BupT3yphevAAsBHHFvs5NRAg4baVEnaU9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPQibuC1AxdhfEyMtHRJ1Xkn9SM5DGJhwt9J9oTvNTg5FpWW76vv358XVjHvbsRG1CTK3MEU9F6n7uYpKZgvN23",
  "key1": "5rwkopqLY67nNDGczcZ5EUy3iHqUEeEsij5v1EAyWYCv2hQNDbxi5mx9HS9k4GZc51cXUn6cYYr61jJLD1kZkoLz",
  "key2": "orkey4b8p2sEhpxfRZNAVaTZVSYXQywzeDmyV7rxbigtMwELLkkRZWqewJKuyytkNpj6Fra7eJV6d42zv1qbQPa",
  "key3": "5Pt4MHuf92cwaLVf8NkbbmsgmPR9kugakijUAwKGfhhLnzBszeJPEkyxaYQqNtTGk5DQP4eDnQYsQo4BgyS7po54",
  "key4": "D662jhmXAdtmT5B457j6cyzS7u6yof4pH6Rz7TrxHM9CAuPo9ihDh8Qccz6SGM91VUC1NTFwX9MZto8YmX2WarV",
  "key5": "27VhG7kiJUfpZCGPuNEiPGZZVCW1Ge4GA9F7tF1i6f29kS9xP5G3umGFBsNPAr6G3FUi8FmJgwzSdtpNAJ5mDz9u",
  "key6": "5UTvc2j1Nt7W58hD2MJrg67XfomLnBTpzsq8HL6GWPLtPYzEyUe7x87FuhqAcqDQYpDLuVV81aBgpew18WwAyo2m",
  "key7": "2YXPcSN2uBiGb1VHf5wUY8YHz8PnXN5pKqKoc3cUtiuE5YTRBzKpwJQ5omKZZpiSxotG4ANgcypNdW4FDJCiou8m",
  "key8": "d83DgTpePdL2Ws8oGGJhpZoo9NSUuQmz7RggJ44zAPwLn6i3NATurmAaskreK3LPWrwiTceH2uTxNYYCeY3dDHi",
  "key9": "4fdZBiRXy8TfLbzT697MSbez5jd9mdGXMxv9J2xaU6fTr44Y7FoH54BscEAkGsGWywSQrt7qcwpAaVY7gTarm5rw",
  "key10": "54S4yYTRbQfB4GQLzYGPcGn4oiCszTwY8vDHFgqac473SqNntdDSYCRRwik6rPLftB95gxq1VWzcDkJPAB8pK9DC",
  "key11": "4ryt1meZbFtJ4KS7A9RWLcFUzdnCsogGQtpWnWuD5dMQCrVZzQMELSSKdRTkr2mD2BAUQ3rXHtjfkV1FRA6KFNfm",
  "key12": "67nNPE3UEWoxEGkJw4WrS1khMXi8ntoisjsG69mWkXQi3eidt75Wp53EK4LhePCfxyhTJWs1Bu2uUr7X7gjoTtcx",
  "key13": "2gS4VJYUc7s5pVfTrKYXJ8XFndPNzqVmKVMo3Kqi1f15ERXEmGY6sQWeU5GQXtGesKaXLPvbqhQNrenNkJS1EkBt",
  "key14": "2e4Hwip1Traynk3RQ9Zw6df5tVzUhfae6wsZf6eH6tKZExFQmhQaePuDyVLiNHHQLiMyABvFgfcywU9KHkXyvKc1",
  "key15": "5geUc3todiDfxe6ngkAyKdJCx6KaRJheavtGYsDXhHuWFsgr2NxysAukS42Pi1RtgJnEvzGDdpBo3Cf4wZFw9HVv",
  "key16": "3qXftnDBobS4McqXKpee36kLV3ibCRx2sMbnLVDiY57pEQAgNfribtNG18cAwHHCex4PbT11a8SzkFotT1WP5Wxt",
  "key17": "3LjieuzmqBmnguaoRZjY3Zbdex9mMFNW1LSJcke5YPAgpKa4WmJ1o6XPT5GDFmDGzZuvxj7TSrD5JRa64dfFCjMn",
  "key18": "3py1Kb4wbtXZHBtcSPBoasckNrKF1GHqAdQQuaqeXbgRxorpf6vDvjjgWLKAXVxFRzyvGoZdVPozqPtbrfAHbh2E",
  "key19": "2aexE6afknirwRzMuLfXPjGXS7mgz6UC6FTYrmNPTcCW4kzgpCKp1VmzUJaSrPJGZhAXU4JMjtRvpTEyyEfq4N36",
  "key20": "4gpohBTttQSRLXAyMRXAKHTdFmeNX25DvwCseGhFydPj1rHuQTCKEgiLRWWedwcbDSAbWVUm8mJHJ1nrNUgqSnqr",
  "key21": "4UcojumnQQAFTCm87dhPDqEurhVq6nr7BBSr4w5wN6YJdexrBQPzxZLLCh1bi28k8LEzpoF8jZD6R948C43ytEHN",
  "key22": "4ZNeGJqSc4QkpFKceHpkuQw4VfcFR17fqk8jYW44TiqqP59PGnFM4QGA5MS3jB3T7Y8MLHFuUn5z2RmDb8Gvrdxv",
  "key23": "Rn2eeAY3ve4MT9cStT9j8CjiSrrx9uYJF8e6ftUrwvG46rES1AVUq7VNfjDFWVenfTrSkVyLraiYmd7sZUMg4PV",
  "key24": "5qY79EvJsqEs9WefWwAd8bvBWki4uM8m1AfKMexPW9ZYQmjwtvjJEZZeXvpDAHkcx5VcrDhkAHEEEmts5FZ57fLz",
  "key25": "5TKwBhQWMwshPgkubMGYJnLtNshorLH8MYbeqthDSahKpwfJ4Nd4QH5KABJ9krhbsEL2Ay9JeuiTaE2ZHVMkM5g4",
  "key26": "4bEbn93uyhRaXeYFpFzF3JULK4ZSs7dTWoZDscCBtvwR6mXoCYhGFNGEgZX7vW1JAB4orNA5nSG9MwsrC8gZ3PHo",
  "key27": "5FVLHzHNSy15fcFQhLBxi6aPPc8A2h7qNqyRJzpgXgRQGTtFZge4yP5oDpYEfYVCBPEb6HKEWJsyQi3AB4vjRuz9",
  "key28": "S1h2LMHRtWaDkjWzFN72hqMZBvMeCPd35SsYe2xeRZtJhQypeSLvt63Yt4xnkXmERdvCkqzK6UdbDcfy17Wui9Z",
  "key29": "vEtBvzcaJMnDE7UtotGQJSeFAWDEpmWmW8dWLrMHdjSx7ujPRntRVHjRjgj58v7fmyq2k4y7zp4vFG2pHSfk3MW",
  "key30": "uf3c3bxNqS4neHqvdnfJRWefYhSZL34Djwmf6wXSCQXqjwvssMVNkSYR9GQd2BC4XVDbcuD6GCLcKdG2Ro7323J",
  "key31": "5nXJp927dAs2Ub6QBoFUAJc8ZC6dPRk4946josNFNtsGrskSTHDg2rKijapGV4FwWrX6VwXM8X1c6kGkoFDzwLjk",
  "key32": "ypwHLVSTvUujZ7vJkYVHbhdgudN2z5gGSAuKHsoyuk8cXUUbfCF3BaETDdk7hy68qn3x8iNfwFkyZMQVT5d7ETh",
  "key33": "3xnN8JxiicPN8uj8ArSfbu7oH3LqPMa8XxuLBhEng6YurKPgWyFRLyXE8JNJTQGPpEE42eh6rk2VXoWfVyBgFhXW",
  "key34": "5QwBJSoBmTnTxngty8w3bhCntoZ1muhSREYDSmy1VCyHv7AMtf43nFjphnWh21rwVPorHaD4uUjGkPbcykqMCPnJ",
  "key35": "2hsarZvnHuHhvsR8qFQ45oYygPEGspa2WV6DQQ2HY35YvcEts2torNACw2ouEUtmsejfBnJrqtA3qMovEscbfEpM"
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
