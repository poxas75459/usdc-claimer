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
    "XmNmkjqcJzvCwBWGnBTsX3Kqrb8GVcRqcVcXJjcmZ6GzfC4kdFHGWFbYKSqYs9w5Yso6GaJaAzxkA64MPLH6Jea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRiiSycbWAof4CeF1NNAu8Da3S3qbXuY4TN7ThcJqMvLaqNBunKwFaZWkUCZBthCsZYHeVDRdpJ31HnEDP7LQF3",
  "key1": "Ln9vddqLkurCe6UE9CMKe1yeUrRF2BKPEN5YJc1weVtKr28EUBhbQdBYoTMTCTvf2jq12sRFUxJi77eDv3btM81",
  "key2": "nFdVvVDFt2TLBzyNgVFqqSv3jxYL4G5RWCktTyZNsQUDRBmP5oitQDix1NSjN3pjHJqGmC7jpUjKiz5JNGkMjr1",
  "key3": "4qxKTkwguUCEYQc8jbDTDR7zy495mrhVdZac52pWDuW2tL3Bf5zVhLMvtq77dc1MYDejvfpMpNhyHHFu9zGehxew",
  "key4": "2jhwvac6E18mpt1qnKmEUqKXz7SrCiFez6X4pjsPdv33avoePR1NcemTMvg1gJ2bHm9J8TExsVwtMhXGE2cnTGuY",
  "key5": "2CPkpsC37DxjnLiyzYb4Jwh6C1qE5bu2F1McT9uGoSdWSXzAZKWshd8vLTxnBAXMXggGDYwS6znvgBiL3G99BYhN",
  "key6": "3J1dZDQNSUDM6bcKMHUNkVyZTGpoMPpQhcj6k8dr2qx3Kg2GRThNyjyFHupw8jCFqtivSsKooQjmqUpSuMx1RCjc",
  "key7": "4WbqreKSQSfDc2ZXCFZz7CazX7T3DfqBjjM8ueNVTH5nXN8EsFpfa6VCXGQ83RTYa8WT9G9ScDL58U5B8LKC4tHF",
  "key8": "5RR9S3edJcHxJjLa3wJCgaaZCRyQRUWHBU1d4VcY6HocEKXSuXgjCPCyyYxSkM6eb5NTpfQXpA99aL2TmoKPmy4Z",
  "key9": "2UQeyrwuNN6QYK6RPLjRn5ZbBoHAmhhZMshNfduASNNuc4nqkAxJsQkhxo4DyVBJBAG265iWTuP7MSMcANcjKsrp",
  "key10": "5VTi7BJQ2rZdbqV1qtoMKe3ARH56tTHKg9vE6j7Rq439SbMjBmR2TUEMKPwfwn1tZmJS3iqVqLD52K3Mmef1ba3Q",
  "key11": "5tCiQRwaM1CPsoBx3mEPZW6PaLwrY5DkpSfeUhepZuwN9AXFsUe71iybuCpfyQRivW4VVg2rwh15SziTVoJ6xQPJ",
  "key12": "4huoYGAPDaNvb7eJRmsFa1JsJ7JVvMAXZpL1d2TvdwSPKS37eZzbEriTvrAcPerS2BDmw1vXLBmpou33WNbsY2aR",
  "key13": "s8MDkPousP6c4Ra4tBgR5RHrLZS9GbYQA5NjA1FJMwgc4ZizCVB1i7ZHWdcarkDN9KTf6TKuj2GJeCHjuZQztgR",
  "key14": "3Y7gWcUEWhb6b4soTmdkTSPZCukyZ2DjMpeKKuhnT4V3zg9AzJwfeXAVXz3tj5qAhqccbUrDEuAzeKAgU3mm2qKC",
  "key15": "24F6N6CQzS1d3ykmEdh3SxtoZc43JwBFBHxL7VMEB1kbuZHgtez3giVmkHJsG3sMVNjv8cKEwZcmaaydnrQsK13G",
  "key16": "5gwpAX563SEwCvbmG1tWt2sgDWJejPnnrfAnkfAAYTxFh2z9WLqEZ17LkM4WAB2RfTCogNTsVRPKyBCoYwCViaV9",
  "key17": "2btErbGTyhSZdGfZCgxencdoT7fjLVUoXs5pMRs6a4GHaDx2NR3sfcmv2kKgWMDP14mtpp8y3tmZV8pxrozgbf2u",
  "key18": "8MkHt38cjq3SNjqoNUT2dB1rwQTRML4oUdTHnengnSgZiR7pcVnm9PHXMHDcsovEfKpzPHsp4QrW2DC5jc9wPdD",
  "key19": "4g7Vmf3BHTnCBPdWLu6APR1iAodLx4KJEaUGey4XGzDDXiRhdXrjArLNCerfR49WDgXUTLUnu2kM3P4SsqtDjUek",
  "key20": "5Hi4wWp9dE1xvyjG8mYQp4CMhhk12VUdjVRwbowsyBzgcAB92gCZbKse73uTG5fqh2xB1gSPAkuvENMnLuk5f2qC",
  "key21": "2WL4fL9bipTt4jmwiXj7pyYs7Am5ac2SLdHFCgntb9WWpecn9LzUpAdvhaYaBRUDCARx82M8ze3XsUrS7HEQZ8sK",
  "key22": "62YXtzGt4KatLZ1Tyvxe2qUEJkKL1aoLP5Tc9NHYYzb5G2tRuXPPtGQqamUQcGv6HprVvfsBQHE7HXMiqqdukLqo",
  "key23": "3wgbyDR3DuxVrhGnU9VhpA9u9ev5aEYUxYipVvKxc4D72f8RvB3q7APnQyiu6RiuxaZBhDrWJV5CTS8tsCbUphXp",
  "key24": "4LSWVjxF9LEJQ9SRPmcfy15fnm7fPTMXE4dxLDciMzkzGhcmMKoM1iZyW9yfMLX2Dv2WuWvfx5AajgRmSVULaKNJ",
  "key25": "2rofU2bhXCg61NFx29sv8GPDZiKbGiLDAmpCaQhsDNi2YQf5Sdjy8NVqCwehHpottbdPVGyZC99rhorqndXLQSJE",
  "key26": "3MhNB4WS5LHbJBdViFVXpG3F9oYBMaGqUnMgGZH9voD13zaXMYKy5yG2MbakaG4cqPQiLKQtVaMYYdnzR7GMHEgT",
  "key27": "2QNfQQqH6mYiSk57863wMsm4MBFF6NTcJr1zHSm3Pofd77wnofp2eJwLFyCDbH45hNVyJnnUgCMadSw1Dxk9X3rM",
  "key28": "4aRf9bwFAdKT1UF5VZyfp2ToALBkuwx7MbsqJRe3htjuF8j9NedsLSnUarPjtvPTeskHnov9KS6USCrqNspeVxyk",
  "key29": "MfSjxavSyxgPHcr2xxeBoZX9o63mPVzzgt97C6MSWBqXpaX8X9CwhyfYfK2nGp5a2JWFyn4tctNWk6zNy82tbwC",
  "key30": "5vYRjkdhHW6KYHa39sitFDgtgZRa4NiwWRQ9Sr9QSc6d8mQXRbRTRSGai2SR7e1Rae4jn5Xx7dMVYdzQ7pMC5RCu",
  "key31": "4mpMpoNrFnTrKAMCzswULWDpWQA6Tc3ngGNnGhqdAMQpFEuRL9XWUHBoRKaEzDWN8pPkHMoUWrXZiMBfkLRrQcG3",
  "key32": "59AwkobxMMiPJLwcmQ6BMqYvdaTA3DmnTPczgq7jLX2YrNomVACFNbwVRhFkBcujQRPfvMYDiTYUKvESJByedVzq",
  "key33": "2XBTfSecv7NF5wMs7EQknsRVDedwqpuYkCYQeMNgJRRVyjE3ehphpAHF4kx7wZHdfzRkWpuXUUjC78V1FTELgVLB"
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
