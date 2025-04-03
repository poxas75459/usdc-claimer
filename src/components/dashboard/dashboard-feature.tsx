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
    "354LZr6keX6khfGgiyLGeg1iVcr68BVePmTLP7fsr1cMHhZBgukMAhqPgv2AfMsA25q5czQaR2kxDBR2Adjpdb6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dC2TsiLP5mgKErNywQ61p5ptPdjKct9rAbcCshFnYy1m84VaR55oqeKR1uGRsgX2BcsXUQrzLTtQiwBHFTETyYp",
  "key1": "3bo6uAXoNg3iUN8GSMAdppb9qHPJZqLjoEpm413mzPsRtniMx9sFpS2NAoRSaMs21hF1qDLRrrkXT7fzVM34rBii",
  "key2": "4oSLq3pBqKoPoizHwg4FmmEHadoF45azdQ4txDAxVc3RBv3PzrBzZPpsDm4zyDAZZQfo1BoJEHKAPWRS6FNoZScH",
  "key3": "3FAz8fM3qXWdez1KAdrCTYgCAfMPcPA4Lw9htePdXvmaxmkznn8rrNV2oCjyErtswfy2GBiuDofpUGB3cJCSQcVN",
  "key4": "2uYAJojbZbskgSPWnfDhMAnqsAy7jJksVB2kkYxpEBoY7JnV1QKYWUqZUQwfTUq7UqNRQP6kFa2eN34mPKNdSbxu",
  "key5": "4awn9pBoDMoEFEaGUBrPvQDthx5GpymbR8qNoeSu5jrmDNhnsDbg7cEoS5XkqoSi9VouoJtDgqyuXhSymm6XxED2",
  "key6": "433ouxWzzhZbmFeWht6DPzKnWWjQTtoArh8qLZQTH43ZLFTEVBZKjDfaZ4Rn7zVYwqP6gu23kHCAXVAAW5BWaoA2",
  "key7": "iXieehwQDfoEvPLDkpeweN5VFCw97x2yuaYxHyjV8Q9PEEZ1oTWjMwRrQzvDQEX7SLmftN96RbLozE1Tyy9ZXks",
  "key8": "5HjtGQcDs21FBH3XfBwKxyYp8uAM8zcaBcqaougDBJgHDa2qJRpQTjBUVut7adgsqntjbv3pm4GE137Rxecno7Ui",
  "key9": "5WGFV1hVLmbhk8FCmwCS1pFsvvJGgxpPNTRn6XnYYQzCHw4Mzg95Ccc4fLzx8ade28aQfPiwfRiDxusB6txpnZTP",
  "key10": "5QKgnPN4uvcCbbGh8uiKPGJiJXvcFYDuBNpdF5FnbR8fp3fpgN82v4qpGwijKBniRsqJnzrrjedAbM1LEEHVhuaS",
  "key11": "4JUwmxHiZjGF2vHoByyGRNkHHNtLZu7Nok5m6ALtczMk4NM1qavYnV9LvWyEFHcc2iAMUZjHMSvNNPnMjBCrM776",
  "key12": "ncueWWZqy5yvoiWkmZMYexiaEwncAzdE8Ggs6CBxuLpa9Tnzp69xURX55sdHRJFMiSzRkBwXxsT6KBzt1RskCxx",
  "key13": "e2vuHT3unPX36B6YF7caKxKKYCrNohmRJjkM8akgXSSYZSdcnWZs3vzJjpkvP7mXZirNftaGdYkwWkpUnqu6Fc2",
  "key14": "5ViiQ8A39SvZKrP1MKcQ8KW7QMPi9kCYZWHTHCKfT2c7t5YHDA7rxH9rGNThoFxH1TDdXzx21hMDiW5XwNN5dT4V",
  "key15": "2Q6N9WrvaBhESWGk7RVYnEMnKBu7ufH5Uvwjhn8ACC2i1fKPvYXSHdSboy9kN82LYs4cfKsiVhzrKm6goCUuJPjG",
  "key16": "5yVrkc1xQPp6UkqmpM6dm5o1T88etkWG5PF8NYp1tAvfADtxDjdV7DaxFyUqzc3JBhpSknJubsHHKmERMhJbMwnw",
  "key17": "3j2RWynjSpgxPjeZp5uRE8dvCFNefA8uCKcNMNyx8d9xRmUcdL17E6sxRAA1YfbjQF6EHWF9DQeLEvNt8Gif2saB",
  "key18": "4j7EC7aVBQQmKqMTXQs2gGBxsuEb6nyp6u93zSESJQgsDSZCk3zRwoje7QQ5WreCYxrRZm7TBSHsoCKXQQAYxA2R",
  "key19": "vdQu3jAa7hWithR59WT478P1onjK8H4w7DoYFhVSJqd2gwrqtQFg4tH9tgMe6cdkLHUpGQ7nEPef1LN3TXRRc6n",
  "key20": "2KuLjwdZ9cptxjM4XWb1tfnSRj7MRBJTcuriaDKssXwfYup2fbFgWs9fwr6ghSTemHPThUES8cAcpZ7Hi6MYgN4k",
  "key21": "weJ7cw8Pes1D4nuu8zMtuV4SJXon1G1UXY8naof32Qazm5w9eNDW6fm11RG5rhPzx7LnVMGyXGoYG2VXxjqhMCQ",
  "key22": "4NyPLpFT7oc3dWa4RtJpfbcaygpM1QCi4mcyfankvLp3C9yTfsFHgakBfDGiVkuEbuVeGvyeXfsCkCCnMYA8ntM9",
  "key23": "5ytRy4g4PqGo7cS85ycRfaDDpc5PcthBQkePCUPGszgS5Pz5rcWc2CQZq6Z7NYCoDmDKtei4LUgggP9Nzr34Bjq6",
  "key24": "9zsHYdGYfFGtqELN5HGQQNHKv7ey8ArF8CbngocUBFM4jwWisyho3GiiiT8eiuiTRL5DTH73jYJmijky7FSq9gK",
  "key25": "4TqNvWSs1rUo1gRtaRcjWfhQxfHk8ZCSNSw98DC6r1ZQdc5zFKE6sZVtZs4TtETzdomxPXLhQGZbjA2DL4i3xD1b",
  "key26": "3Mud8f1NnFQtbievWEhXT2mRdWunGTVA6Ubavv21i5n3ixFeEbu2A9R2i8J4hLgJZFMPaRqntgbYsZdDwQVyG2hM",
  "key27": "ycxnka9VKEjjS77stcYLxVLbRb79snXg3qLbJDpYkpdcVUa8RdiPzbwoktLeFNvTuXh918qrruZ8zixS7tqHH9T",
  "key28": "5SkDRFFBn8bGfsqBVypr1H69nL867GsqMdDnLV4ftQUX1W8HrPCUEtAScYERpYtTERJh3raNpiMqinNjcbhnzuGq",
  "key29": "4aiU1udV2yvAzs5tbdUbV8aFsETP1V5S8dYVRZPKph8K2oEijMmtz7zWwocaVrNNaFq8j2PCCTc8wUTPM5xuxXAR",
  "key30": "5iihCFjHSBFqiCGfheeLM8dFVFiiPAJadxvdNx3N63oJvQMy5G31Fros9pBBFGpJ4dyWQrhUPjtxSLRZETPG2yJ1",
  "key31": "2F2DYybiswBu68DjrPzNPFw7ykRy8wkVmQ9GzHExFmaAkGNAtq7VL18jAChywZ43fLr6xuGS55bjXMa3R8Fk5TeX",
  "key32": "2DmmRGhvRCagt2XHGMW8uEswfrXR9iUmBiZCMmLPjA9TYyKKbuceBrFmpvPfyPbRpLbzpc9m3gV9gXdA33R7UZEU",
  "key33": "5Vmb8hdR4rgZtvYQRA9tejyMmS79tZMtWHE8Apb1WRLgKJzwzkxppp125nyR5HLANH7XGjorTN5oRfbL1MpEU1ij",
  "key34": "Th6L9uQGG5kzHt8wCiiJBDo5DJkugxaoGWjz37GzC91CV8g9D5ME65LfGTi9sbpF6rMsNAZuhhKpopRxrdQ8YmP",
  "key35": "4fXQUnWfaGZoTexZkNpXosSES24EBTSfrAyxz7btAQNfsUbyZXi1AnEQzxYU8sYUdsmqX7Uav5D7Yo287grRqJwr",
  "key36": "AnE7jtMqiYhomnuFq4wXdYbZzyUNuc8msZbj3YVUXFbLiNBb4kjKSnChHduLXLyWAPTdjPHtWnVktiBfvXnndvn",
  "key37": "rpbLCawRpKYvvoXCSWsQBoygP2xRQgNH4DLNNc1QtsoyvDf5rZx95ejvTNqQbsBkPvXDquWuPEmxbS8TDyhsotG",
  "key38": "3hAj4J33PrMejXftNrNnWS4kC3yp4yTtP27nnQBBVz2WBbxZS7pAWhV1vTd3MnCohcCHLExaAkRaztVgPk3gVDwu",
  "key39": "3EUh5eqDHoLG9BGwg1pWmd9puiGjWZhKNkwtM7QQCNNW3AP4XL3zqczHM9Q6zm9id7BWGEhJaeTSKRy3k2KzBgDN",
  "key40": "5aEsb7YRE7jsqaQKzrTz8td1BvrT24URSUDUgKGcUBrqTw6UauVnnQNqo2qVU4VHRqsisv3oV4M8krfD4wb56z6w"
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
