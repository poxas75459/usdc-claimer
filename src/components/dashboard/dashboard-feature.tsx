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
    "2yNC1Rwwt7xPbzzRZF8QkgJKDB28JZ69B4wq62x9FhKXYaCmcFn8jNTRQD84BiAx2Hb1ucwUuobZ1bx5hCtnfqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcbWJEaSza1nP743xFwKXULwLSjjuHRYzmZN7jEgLTwtqrUAZGUPVzkAbx3YkhRwp21Qi2XrJFP7bad7fvrGNE1",
  "key1": "3qY7TMaRXT58wVR8NmVSULjD4CvQmBD5HwWZYAhKqR5VJ9Bx7npwxTw749qf7MvKY8QkjZ86f3MUXft6yzVtCFCv",
  "key2": "4vJiM51XWqD2tYSoCiQWAv54LFcWRYkXfhRTywFU4AxVtvSLrw2kt2WHhgM27EjRbEMbsYU3ZC8nAXysh5cudh88",
  "key3": "4DBRhqqys7M6TGkoLW8wRG66DUM9bzCUFiY3Kr89WJXvFci57KbfyD7BLHgiwM5q7vZKoKQuMZKBoHHZ4k6j1pwJ",
  "key4": "4GxsGK8YEBbjSYTZYt3MzcVdSx5C1a9cha9p56ahzQBk2jE3G1hC6Se3rQ5FfcMt2Gyyr5T4LueAfwSB3Be7caUs",
  "key5": "2Hz2LPDNkSnA84SxfkRaimoUBYbkUbTn9AFqNtEPMLfjVRBDx8cwV3QHXh1HDLJXUnwNVmh7Sq6wDYpzLgkg4nYV",
  "key6": "3Bp1sRrJMJ8QYVkr14wsf3V5DERmnMjFTB5cwmgEQsJdNBcjbNrazVbs4dtivXh9uSXSkygnNAW6SsHYBzPzrRRm",
  "key7": "2AwX1whHqFXakSPPWedavVAwzFk8XnSSzGwSjq8tkHnMsRc3BC9Etc7Au4CBaT87w2aWohGPTNHPyghdjfiHpsMG",
  "key8": "2vSi5p9vzQTVPxaS5dMzaLjQZYDQjJRoTmD6Cvc3oBt2aF5XhctoGii4QvMHHrpFihHcaqoktrE93yNLwsjWFPue",
  "key9": "2rEicHjwYdU6rbS2TeXyH1PSQQRMShktMWz8CjgQnaugfdcRDimwmLsyPx1bYnS8niPUkYioZXjQW7T7MjnD1amU",
  "key10": "2SNcHtyngmZyfM4rmKVAEHZfu1bH2eDxMyShzikNqtU2KuQoeze8789ffvZQwyCVKH4ZisgjHXUNZgC5AyRACgWs",
  "key11": "ZCNbDBnPzt3n3DXycirvHo7VNyDYzcS3su5BPVzfy7uHgCdDZwTh9hiBDrtNzUWHki2Ly49tF13GxAW74MbmVYf",
  "key12": "hBCV9WVfSmD2T6kVrUv7bseFmsMFmKyJn2WNgjyJTzCkxd1D7PRcGvXwp2vN8SosguYyfxRmEbdJLw8kKyTiRk5",
  "key13": "5bLVkNtKGPBdsMZ47H6DDpVDWoWpQwRLNjnX4sa4RHxRUhHGRQhZnM2tDHr8TVED2w7Vo59a2RKNg2AWWCeNdaLE",
  "key14": "oNPn9GJsWWNRWHcbPPtXvJRQhEiV2weiQNex5jxCGr28Unidy2uH2a1NzYK9aeHjpmNp9J2PnmE8NhNxGRyGLqb",
  "key15": "2TkSuFo1eENqkkywk6bdzu9Nk6eNg6Vuyfqt1NkABJJ58sHJMBredm85Lm4JS6yU5Fmn9yWakexrKnq7GairxbXG",
  "key16": "2VG3KDG4vHAtFnM3Dk5Xt3fqBVp4UjsDKti1FFqRqdNYSEPN2hYbXr34tPrf1cUSWc63PULe2XDd1zehQfQbmtJp",
  "key17": "4YqFdByJLLTLmsiPMW85YM3kqqPXwHB4GXdmJBKgvmXUeTXVbfEoA59HvcxNPf3vrYhB9Kidt1qEDR4kJz2nPNzT",
  "key18": "3sMPXtgZfdzghoHV7ic4Q8K7BJPCbSCtkdq6iTRNvq9oUdvkJZ7qLUcZJ83aCj1p48YU6xhquB5CxsmtzjMt5EsQ",
  "key19": "3FyMJFN4yLBh1CXRqketaBxL8GiYHqPYymTq8quoLE9cytonUhkRYzKmaRi53HKDbRZ9Lrbwex1niKzc983rhQXt",
  "key20": "5ryWXxSXzqxBmz7L8ciaA76RG2e4Exiav52j9fZeCUwKNHDNyJf5JC6ocMogMZpzQomLbw8Sz32B1MLNtSUsUcz",
  "key21": "5tBoyouZFC75WzWaS6anWxiUXBBc2rE6vYC3GmfAH5qpzrKZKnEY5mDptGyLFD4CPdCPpzSv7Q7KeJrB9MmfYob2",
  "key22": "v5wcL5qtSjCJdrfEHXpwPGcrKXo1S8HV7XdktzFEE4wE3XDgCvTK4v7hBAgnoMgG4tL9XMSTHKG77En1wBTauLV",
  "key23": "2BpMsYF58E7MNv9zuQtHRZeNn9prwCAA47xHmgDXsmsjtRYHTwFHs8A1NgZF6fK2VM6GtjW6QnRUxXXoEekVVsv9",
  "key24": "97KNivcGKmg5kVWHbyfkTC3eUzxCWKNyXH2qaioAkvFfeaMfDQtkNd9tJz3jUSTfhCoQW4znFTFudsCgAG2d65a",
  "key25": "5hXHBtmSAGkogTfazNUgfBfGuhQSBEhR9G9La8Fh1GdFUB5V2e1Sh9uWXFPhbbtkvEPcuqRbhgdXBHVdf19nqemx",
  "key26": "2fD9eWgv1wSSJhnXLdGDgy6uBxs1KA3zceW1RghhEq9gwNPffJGvb6vwP9CyabrSyF14UUbzDgtR2KFftqKD7zTz",
  "key27": "4BvLD2vAPXT7143q2ES7LqGzDmUzLM12E9LFpXvGgEiKsnziaMg8ki1wH6drBfU7Bb2xaNeVdptXphaL9j4xSzap",
  "key28": "2h4MvaGrFew2guMPAkQSwbY4bs56pGQJoabZMwZjAF1ULsfsgwqXx1moJ1oCfwicwFNNynunF5r9C4PgLBiaP1az",
  "key29": "5ZUszYPkiG3TzgvZ8nK3wSUUNQJw5eANCNdbj9ExxyNFR3g2ktDuC2xPGT8o7HfdbgMLE3qGk4c1d6Stcr5tWHwr"
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
