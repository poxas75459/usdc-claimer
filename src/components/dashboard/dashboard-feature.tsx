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
    "m5ruzQ9faghSi5m1Gxq8CNqH6idNAJbh4F66yaLVMwQEHYQr6tCvfTnhoFL7yjjYQ1V6W4s3LdWCkCtGo9K8f9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZ9Ug9Ns24FrvdSMDH2H4LcGK4b83MsVQtCpwHAL3AbhKa711p4Yh6NX1jc8b9n3GrfwmEFFHzm16JbnAsPCYnF",
  "key1": "4Yy49AViwtnsNDrt1RoD5hEj4UywF62VtvfSjj54mzXXDgRkQfS1acyumQkHfFeemgy9PvnMj57YDGFqRC2USqqf",
  "key2": "3rGrsVKsuxjJUgeRrDGY8uED911TE3Zriy9tJhMmX82c48uBSMNs3iTRLFujy6MzqLjzNRpN6eaBw9mqzS4h6ZB3",
  "key3": "4usqZn53BqSbuFTi8iEiAU3tHUfPUShGvRTvtmLPM98G5EhBtutqjgB2SgXkHjnjpvkaUnKGnZMH4EaNiPAzVh5e",
  "key4": "3dBHuLApngjYGDU2rT92p9SkVyiH3PSGmdtPCrS6si669YpGkVGQQZ2BAnGesYRxZ9n6G9Xr6KnV59kC3EBx7nmx",
  "key5": "3EjxjDr5FnbqZBbyx969u6PXShBz5sCHQEtXNsaKm7dvhNSWmAeh3C6Q8HjW8if7FCAMneqxr5qjypyznGEBnsnQ",
  "key6": "2LCpXsu3G8K6JEzVSBQLWRECpbv1JtQ5dWY2cEiDY2i5cGWL6wrj4uXCJQvTKr3hsKavb7RUh2op4cBfqkHJGt7a",
  "key7": "3izozTKZgEdNXj66voHmeqFrnQ8qEHwSZPGwFgjjoA1wPZ6A6Q2qWtEcWP9uc4how7n6vUiRXkDMj1pG8sA28aDm",
  "key8": "5FBZEYQ1ekMRYSbKwvgLJNizMZatpG89XeVEJwgGSXQk8rDfUXjEmowAJeG3dkeKVq87WAWPPvgbZnVZNRzT5FrA",
  "key9": "42GhndXPPwLuEn4Mg9XwUvpZDetwU2S7GrQe3ATCD4HdGWfqxNtargitHNEnQXD2dU6MR2jtYSfB9vgtoi5kZm5n",
  "key10": "3JJSKThwyvmtLDhcq47R6VvnfHA2TGYSqHcmY2AVu4b9LvFudpfyLqVpVdVNTxKscyLbiU9akEwLkFV4sHoJWpUc",
  "key11": "21aZ5AzxTS2kcTtyH9WTSJjynrUu3wvcKdoHcjfC8aykVbxbGoWLJKzazPXNmHw8FePgpn82SngqGTAzxWDLAPTS",
  "key12": "5Z7tB1GHD5sWfJeNtzdsVN7QzAwqzzJehkhwxEFnAXHDev5aTur9xxDnrLt8erHb4pK7ywWoMvepwNrcVH8p77Kc",
  "key13": "2sEj4BKmUYCpGR8EveZMMSfjZvbpn46D3HeK5reGCRtYrKwJkcUb8kmufq8k7mhpcMaFaB6ZfoZdjeT3GwtLnzSm",
  "key14": "HUVBJQ2KfpA2mm5UKGT9wS3iLvsWgtXvWNJ74QaXBqid6PtKpj9v6fbWxgh6q2Scz45hizuLNXt3gCDwGmDqGtc",
  "key15": "eUGzNn2DXSs8CAW5C3S4VeL63C5TVgSvnkeqAQaE8KTRhXKsLkX4qM6QLxxkcFouG4xq9FXNJCmJmgRJ6YNEYt8",
  "key16": "ZnQ8udu87N7uEeY9k9u3pge6MHibgx7yzQwSpzzUbiHSSskTVenhLg4YEXivqnJbCFJ9JWE9aKL9bKowoC5sZ2z",
  "key17": "41qy7DwGuMzfnLHaV4HrU6WenyQJ6NMZFs3H7Qm6XEMLDnVBMxybKEj3qArXoSf6KqPDSJX3ZjUAasChHaiuEjfd",
  "key18": "25M8DpREDkpSndHQ37kbghrGq2Jr1j8bGTBcDA3EsTkR2GR5mg4dXcUGr8e8GhuUZ9yLw4yDXuYjVX2DChp1hUx2",
  "key19": "5UZAw6FUkq1FemgsAMLsN7YmnYbySPzJAmKqJLanjfbnUXmj1MasTxQK9apfWDv18EPabGykDpEn1dUoUVTxPh4B",
  "key20": "4Kofz5x6an82cQWzK5Qu7Xm5RGdxM3219AnBQ3xpxbdNYJtc2ctDYiVrEYYW91atEtyq5h1dBc5t2dUm3DGnGCEL",
  "key21": "3oLTjjbfsrAJvsyGnd9RpsSDhyJnCKEn5P8TFN4YDCzgw3jEiEYafC4F8esxFkC4FjBQMPWv4nSWbZqZ9VFzzFbs",
  "key22": "4NsMKTgoxgojewYTLgSEuT6Jywi7sLYV9zwyjGZ34Pbh6LcDVX8Qizu5dL1rVs3j7KBM1BJx46Fcq4w1vJdV83oq",
  "key23": "5U5gWP8P5aMd7cMMtb2FjsG6UTYd6PAryXkc8YSro7uHC6LnQNeBMYnXLQzZMPcAqtiTY9d3ypZ6nHwMMRAbwaq2",
  "key24": "QKNhEW5wM2qaMcAmyX3EFbPMjearZRz15tYeTV9zW5Dence8ULaN3kCcKSBgMzGoug2CyqEJLFCL9XPF6viBspZ",
  "key25": "4spr7SYjdVWA8pRCFrNugBzmbVVEA4CeKP8kWYv2vurMPKw3BMNkKeUbz1wD4doRxcAGku1zBkBsjzbUW9UWJL5Y",
  "key26": "kW3L6PP1Tu5Kb58q4kd6JPnBAJnimmtbZao7VXinYRVnDFdVNNmp57bNKuLYaNEgN2CxBphRSGeXf1D1Av4h3Rc",
  "key27": "3HTR1yFj7NQ9viNNJ59bNVW7tLScJqMTDGEwtJ9FrrwRSSLiSbdLTFmdLx56HiVG2X239yUuHmxY8r6CDPRMpce4"
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
