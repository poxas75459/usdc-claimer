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
    "4jqjDQbLgTcPimvmDmjfDgXs7fyyRtD8KcnDLNLn5qKgmdfsd1Ugp4BvXsChELZggWgywjY3VSqipaCqTk5cXBQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAYBhDAugVe1pT7ESW7UrGNSXSPjQksW3RQUyHW9LTRLTGheSRUmTrECP7z4WLoynEaxC8GRf1ur6rYtgabnYvW",
  "key1": "JaLJdXRGNCBudDUopex1ucTorpiE58h5uZDbBtDG3y5wJVUxT5bHGreZM8KrdCbRhpBU7pQD6E8J3WXvoDCN5Cr",
  "key2": "5nnBTSNPZBFbFiwg91UPhwaj1tWcew3hPBuBCEncrAKdRytFfmmFokgCu4ctLyyCxrGJoJ1a67Xw3vx8XwHHZokS",
  "key3": "4CRCzz6mu9fjZHMfXHeV33N8xro1bSa5Dcrkhva1e3eApn6cxRdop16TvTaKX2AGcPt7orQvfcC6EiHiETKAauxe",
  "key4": "65rfDXitwror6M9ad3Hw2baTpRHsbLexfdjJsvgxjfu67WJXexeKpxvpkoD8NFn3JJ7NkgPmSFm7asuJfs8D7s1e",
  "key5": "5cxu1v7SyZxqG8gpWaGVL1pUGGtZSoaR5nMGhxHeLGBBS8kZEhtCmc5CvFC77LZTQ4hPJmd5D9FfSv96agqNk661",
  "key6": "4kpHBpPdmts9yj47pg2GNgcNG8h19VbiuqGCBZaw7BJv4U4g52q5tEygLpM7bM8apECKfP4R919KJsRTjSg6ANHm",
  "key7": "i1uLbiT3HYpwnWjYJ7qbp3PadCU6dAQmjh6eJVPF4TSv2GK5iP56xzyo5fR32z1gQYC12cKHc3d9QSN9FvPtDY8",
  "key8": "UtobfhDPJUB9CLjZ3ZyQGmU7wx6ADUbHrqxRX27iwn7NkZXy2QVpU8uFSoquXNJP4mFmXLcxQo6wfygoW2vJxsF",
  "key9": "2kr9yjTYssLczqtgKxm7ukuHyZRhcS9p6uXpe1w37yX4eCvXq3jA5xXCuZTE8Exy7QzS1KSSC2QyzHdjLLZemmLo",
  "key10": "28d4554vMEpRSshRzPvnspiEtE4Hyxh2eDpT4oJHrBvGYHkVcPXTGhTgvLsu8fEKBQBbfaHFKLbkeFCAgdtBwx24",
  "key11": "3QwTwMKdnDhWoc4gDrCre8Cq1SpBStn4oruGzenyGFT9ixYYVLj6FyZnpiAca4b1RhWDgG2CKgviQcPwmh9x4zVf",
  "key12": "bwcUs5LmsxJC1EHLrzToxsXaaETnr1i9Qapm2dHNV1uY2ZNUtuMb58gZeMXvQjS6K525x6LMTbXBB1qeCb4bW1U",
  "key13": "2d77rC8rMauegyJxSPR94TmvjnnUzX6pTdFPH757q2SKDgbuyJ9sewUhA5TZnfFLQb53ju5qEkn7VGEv67hpULrU",
  "key14": "TJtpTUVa99BC3SXoVqALtugeNFkoBo5CtGC1oxz7B2ToY931bwXJUHzbZSH3AdvszFN9XKpBH5Wohv6wNz9mHhh",
  "key15": "DEnSfvgn1p72F4TBBSUaE2ggdDPDvegXiRUSRzxUKfEyXS2LEXTwvLijyyGgJWz1u6FTpfRuMDpvbw9T1yYtUYS",
  "key16": "3Xi4k45Hnv2mS8Pjrj6DpVj7GPt1hbPLMPpt5mUZweHuqR4re1xj2DCqtBKTzmVCcu3ue3Ejggn2TBQ5V1SaMUuT",
  "key17": "iFh9w8pgprMddCuidttcGfKJTgi4q4EnW1HHBdgQDSc8q6yNUcxeHEMFHRAAxJCGqSM7ypmBXk1n1DZtG8yqp2z",
  "key18": "8JvxaWuAcTRQYAS3ncGzrMQrqUwDL5HN2T1mcZcNFVQ52FFzXrQ5DjVCSLRQUrHf9RQnWkELuT3z8KQkAiqJkbZ",
  "key19": "5hyevxfdYhR8rPrNBRmLVUEXwALhN891WVMy59SE8aoySpCZ7orYJzbr9n2btsEA9V6QxKhEKqRyTTPfpJ5SpLVM",
  "key20": "5bTDdoh31cyGrB6AVEqM4hAQxJKMJysR5XdP2cESMWWbgutKBh4g52rXbwzDU9zQ2HEyyw2QiW1BXA6G59c54Ufq",
  "key21": "4ZSj3KRBRu7Z2yBnVbmvWyx54go5EwotjncQjwBVKHbEZnK2DXNj5FWiyRWRgWMnLMUK1dAmBKJr8Qp5KZMvmq83",
  "key22": "5s2BZXRZDAcJYtfmFeKAw1d73bynJtbvzJi3Qe22sd6c7ZcKvqPrLbAagjVCcQoafJMUVsk92pmZFArSJAkj6oFB",
  "key23": "4uMRYY1JQVrB3uJbcvAobQEd3ypEHhCHXbCbASY2JQgPDZu7zy9bjcGtUVeNsZh6LMz6GoCpzJVFqq7bUCUyknrd",
  "key24": "4VU4GvPj64qQyEbttz138GyLeBmVmexBidciN38zzwBydypE4uf63unnWptYfjWCGvaatSvRNzyxZ4b26mrD82o7"
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
