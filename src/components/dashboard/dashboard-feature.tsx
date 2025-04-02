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
    "2fKwEXtthLCuacVjBEL1e8E86a2Jo4pB7NdiqNkor2kWYh3Mt6YamXodnBGGM4bHEZcX2pJgqMDR1zXEdobMqYGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b9wNfaCvDwumHobN2NRFvQZrALpmTqszVHGnWQhpRQyWJoYkLYCKCknrvRtHUT2KpSjzeDtCzfcJc8PEWAP3Pk6",
  "key1": "nfWHfHa7rptJQR77u8YqLewEMqvfmcUPVzzw3gbzw69yDhFXP6FH2fY7eB5nQ9DwfUmqqem7PTNVnxXyg7hNiGQ",
  "key2": "3XBfz8ubsCk8ZY1RRtUxy34FBX1xqAtBonTqZNrhki2jE4rQYgxoQo4P5bqui7xGiukF1eacd8dLRP3W1teW6SnX",
  "key3": "8byGsJhb1V4nq9eoec6FiHwEpBHBjncNC9dfDV2zXJHkmXBqq7RSPa7L7Y1ryWrmEJo6Nrfw786r4qYX2SvkTC1",
  "key4": "yLAt8UiPisQZEZRrr4oTSSbGSFToi4pxjMJQ75MFAZnRD1t33TYiTmZxxK3UUbtowLzr29tpoxcGDVjHYpco53p",
  "key5": "5Hq7Rvm2q42Uuf4wBbthsQiTcP7Y4YJYpkx5LjMPWoUxXXrw28rQiyvzJf5qCTCHCrkoirmYQtxTZjnxZgMdTrFX",
  "key6": "5vhdm8wWpyKgtJQ4avuQ9viL83ctNChbwbmpPBfh8gLJUyhNHYUF29edSnFY6TtyYiXdmtGoDnHEbyf5Ur14bGdT",
  "key7": "3Nvt8gZzGKSkGTkmZwfm7Fn3fiM7xiDkexGKvBFgqZq695t5Hcagjzz2eP4Ej3nLUiXP8zFBbd3zswZfTHCvbVUq",
  "key8": "2tufoBEXNPHUcCdc1dDMHvTpr8wgdNVdav5UKyw6TrJSij5VT4uUgaiQiq7LnFEVG7Rp6XcTuATp7U2fUDDn7ouq",
  "key9": "WaVHRVWt2VkLPeDZTLArVQwHZ6gseRvEgd697Bk1PT7ALFnczghow72FiG1dRCwCHkUkpJynNryJrJAs4sCUdk8",
  "key10": "5cGXdTvGn6rSNR7eX21tXhhLztdtMEMx7wU2sGhx1fcpM77eCeAVQS8BoZtMLKhAPNPKGRYVd2NbsLVUQwH4Xa2n",
  "key11": "5uytgqrzmHqg4mdNtayp6MGuJsKfMjjiYQgpBhNSdLjZkcPdEFurpVdbS7Y7McpfQwpEHYng1qtQLjkB5msVj12g",
  "key12": "5e7s6ZAmiT7sKnaW2tnBEuBLVwcHbHqRe9fmG1pk7BUDJAMUVnpS6iahJQoDcTzNqiiDqTt12PDTNPEYqktHNCRs",
  "key13": "3XgbPGbX3uj5bJEcmvQXN8GbrS6a4SP15Fyn5RKDQ59iJmaaiufA6JBvqJuZT1S6LNY4bASyyEHYo5Fzf1ygFZUY",
  "key14": "5MUuD1gB1fKsbkXqpR4NZL9KsZJZjoVLeLyaPkX4yDejSD1sNTZQAawpZnAFoGDFrBBtsxu6Dy4y7mA2LvbBLaSm",
  "key15": "4e1VCCtkb91bL7K8FcguwRLRnVufgRuaRiecxScwrw4zhYSQ6h3wyenpZ87hBFqMb9tXpS4iNMwPfcVVvEvVwAUE",
  "key16": "4iLGcRtrhdNFVRRa9UixxpBngtTz1yJxxENZaMUrsLddZ2ec7p5CykK1o58Lo4mmbnzKUBdXvPxdVc7FQnmrT5gi",
  "key17": "2kHKtyTS86zVD57HtQHJdF2CWdwKmbhFw7iPUNFY3vKunPfn4hv8pYy9CyVLHGjT2CRvkmLnu3G7EU6bNEJDimea",
  "key18": "pTReTCxg12X1octLw7KwNnjiiXQUhZjTZfAbdLY7jGWYSS1gLarEQTSGP8TL2HjDEqP1cvHRdaAscL6ey9WRuZY",
  "key19": "58c9bVwDaX5eXXB5PcMQjVAztFqKFvfC26RKvbPmTDSTDbgUJZ7YW2Hu3Hn2Pq9nFUu2E6QK8S382Wu1eoG964wy",
  "key20": "62R31Em8DKUfY9vUSafmPWPCGnCemMakZpdYBRdGaQXDgXR18nABwMi29XZFEKkuHXvmoB4w2LW9maNtxWfjgFET",
  "key21": "2pGtps7apTuQCDD18eP96pCvoJ9y22jYehBUDZEAdfbPGFYoQmG67YucuogjvuGJgrs8YodkS466nD2B4ymMM2tV",
  "key22": "32aEXuVtQ1mPKgeiXPUiucZ5dPGWLyjjMvswF8LcS1kepY9gWWgVKTxmVLrZmSHk8qcNmnMV6oTFhU6NL7f89ixG",
  "key23": "sWoSanpMSE33QQf55ZdLj9rs4g5m3Kq7Vrx9hyhY5qVHu4rKbgf7cGm3xH45fJQPrvFoXN4Cr7m7YxEoigeh86n",
  "key24": "4tEajNnyi6WHnfWeGbMQc1ULZmt3ATcf8AJkaTQs9wDcBPgcVMbvBWqUEyNANKshVYwNuoqxtPF83zZtmhPcDYaQ",
  "key25": "2AZj6aFBDGPd3T2v94MM6bQii9McRFSm7yrCVeKEvvGtSMmEvJN5x1MzwEFoqmYvKBj4ex26rDQ6J2DiwcwoGrFj",
  "key26": "3Rr3xLWFUL632GYZ85e45xHQRYT8oyFLYJckhPV5RDEDdTVr5S4X17B4bA9qM4yvBh4kMk4QudsZV6wLxNq15sTm"
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
