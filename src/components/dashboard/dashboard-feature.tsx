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
    "3SQohVWd5wzaiZBVNHmvMggCQTy3QWaP59SEGN5FisDni7dttqDysjt4VnApN8y3jCnduB9FqPSfp1Xb2GnESjmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619DK9iE6kTwi2csqbX5b3nWGLkxP11pBMhAcLJWa3UApXh5NHoFWX3SjZ67aqPAawtgy7UihRqiCUEaKE65Za7F",
  "key1": "3ycuXSye8yPR2WuK8Lb3wdXB4S5ppDMiEZ1R2hQcxiqhCsXSS8oHSuZecEhXb4nez77GMiHT6CAaxFPWoa7ExaLr",
  "key2": "4c8TFLhd8ow2SHyDSnCbtqV7CNMWXMw68gxaejG5s43t8P2wCxBuXBGbLCiMgAEMP17RXtAreTR1mV6Q4WxWsXef",
  "key3": "3fq6wxzNkokF7DhCow7YVCTJLhu7ZcPc1tspUoreEHbpeU3xSdtWGETW6fGyjK3eeoXdbxJzyxDD4MjWqDCnPqSF",
  "key4": "5QTEAt76Pah5GvUP5s9HzH2DqFgd64CmPQxxXCQrWiZSERhCxFUmM3uo6xbxxtdHprkXyE4Lif2XLMhJbGRVQkMP",
  "key5": "2bTXHvgspuoqK1Au9U3JYbinm8WzCtBJQ3Q62e8PiC6VNx9kZJN26pZhF5sxzphfQYDfebf1hK7EMudujNa7ijHD",
  "key6": "4w7w2vtobtFB5zh1e1WvhvWA9rYvAwTjsJmEpks4JJJkyMiUhZ2Ecp6MtEBEGRfzZasWpbFKwDLfgPtek6TScpuc",
  "key7": "5DFBstF4fEGPhb4Z4WVfpYZJp9DUSRTNjjcxZrphhnjZvCktwtXxuRX2jJ2KAtCKKoXUMd7aqvXDR7msRQ3Pk5fq",
  "key8": "2UH7YXy4a9R2dsu9zmiEdjoSUkLgnYWPHQaSaAnUPHvp9qSTwkm4jfuxuiGFEZ3KJDNN4anGTjxSmTs1BBjjXJF5",
  "key9": "2kSiV562R94sfeNNMvstosxV6XJ9fZy1MMgojinzgD34Xgi6vECG2xykZSh8xhrtrDFQW1FouSkxQy2hxZo39gGi",
  "key10": "4DCzL4oRu49rGxgjY5mpjjnEe3o4DYCFZyPe4t2nmKd58FM8MoDonfW6Qn1vYkTEJvhXRLtkg5fkj2z4Yy1eAmL",
  "key11": "3Q1g3EaB4Q9EVJFCRdBoSPdBgh6fUYBGNYTDQG14kEUrybnXJr3AQBeM5KQzScb7pg3Trz7DGJbToqRyLc9SBjYQ",
  "key12": "5oLk4Wy5FxU9xtYGA6wE6giU7rKhHtAo8YBHCQYL3BvSb1fcdztVYQQHrdD5d9zQsoFN6znkmBsPyCnZ1rqppKFq",
  "key13": "3Ds2sqRE7Yg8JUmrBNzv8BiAQWiV2WTUiL2jvoKRiW4gkQh7SN6GHardcumrT22StujmELLatr4rYKDPPHXenThZ",
  "key14": "2FZ37frPdJHdux8ZNT4AUmHhMSiPxBwokK8VEbPRXg4bQmz55gvi3Zj36x8j6s9A8VN6Aa9K23uPwyg9dQLRDMCW",
  "key15": "39GPsF7rTS7kedvLLvW7Nb7L11YmkWvk3wDqUzhQDJ16uF3zZnRvCM5qwq8yB2jvL8giVg9pog2WhFLc8whG8XHc",
  "key16": "3phpb8uuFSP9ngPPuQkkRj8nf5nMDVMASMcZWmWmTiKtFgp7aWZMuCgmGS3waov4mx7iBbmDEmik86MP46Zvxzsm",
  "key17": "43VYvwVUv2uyySFdnbhEoSqX6uZmKxNEQRQD6B8xpj8JV8grYjmpFi9i9CfLPnY8Q3a95L6y3STqtwxQ8GtUWXnB",
  "key18": "4dGbQPobjpDB8aMM7tbfzswcXF8byLSngKrzxqMoNp8MPehnWHXizMziQpBNB6j7U1iBDvJVWkAzEibdey5Gov2r",
  "key19": "BV2BnTDNBqzYK4i5Kgwv7Lmbv5nSsU2yHGNEbgLPoJbyDinBabtze2QdwF4NrCBivpWWfcFyoUTgofewt5fBXMj",
  "key20": "55yguZtNMCGpDs91aPC7yW9GdpVGKBxcFRAPrsPg7a37Y2q9FzHVDNFhmGs6MRQeVxuMfCdyh1FPXDtusP8Aq74A",
  "key21": "3yRyBvWY9MoafKycHtdPK47687CYdekx2GrJCaASFAueRxDKa5RBccgZQsxB8hoWJUtTHJCopTuKreBFkHvr4K6q",
  "key22": "3Ve26fV9rsFn8GV8dwpQi1baT76917UkhsY9gNQQoXXEouUcN689opK6z3ZPJq4HiBQ3BqE3WSUgqCsyxzHBS9xY",
  "key23": "49zhH4B5tpfTcBJMkj9XTNrx3aJw8Nt3AiMcy7WGEs42sxyTeFMF4ndpz6xC5ApyRzvsVNJJMuutBmcSWAB5A3HL",
  "key24": "2j4mPTRfk6LRZeUaGs6Ut55FVeTpefytWVjHVLdQefvfE78jWhJDWqQvTnAh8MT2NypGZ1ZZe9htDT56W6jPHYio",
  "key25": "2oKRnFy6aWKWmthTPhBJeLs7YHYGr1Ax93MPV2RepM3m7WnUxUePjYiXxpDdw1YuYEsVvu5CHxdDnsWwUuuWAj6H",
  "key26": "Te4XbVM2sHKqmMoHryim1iTCmZvGdh5Bwz5uadbb1PYpFeoCaazX1meE67LSabCJYsNh7mJY5r6zdHjaNMypmjA",
  "key27": "t2xZZGrGP3PmJHMj2sHN1y22fVyaqzLAwH6xUFSM8Fu77TEu8xBWP1xtcxjbSDaNuFvc1nxXwfXDKtCjwraiz7s",
  "key28": "HFNdonWXnfPWGhAwmVFKcBX44ZYFCGrdq2eH98G7gT5A91LZJjcSvbVcB2bYWZnD7VFAB7D48Bb7xGSzwweFGDD"
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
