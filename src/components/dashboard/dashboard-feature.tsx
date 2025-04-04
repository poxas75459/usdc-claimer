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
    "3JCJd1EW1CN6D7pLx9ewaZwkrybjCUe21sFM7Q3CGWWTagKWtswVkKijPsW2FSn3jLXeBDgHsXtNfqZ5K1szjSAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKCwrgCr5wqDZAQWxKEhWxPv1m2UwRHrmrp3pDX9UAjutLyxHw7JqsiQsuNo7H54jyKkUXcJs5m6dZ9Jt3jYud9",
  "key1": "3ztmt3sogQUS4qV5goAAwyJeqqcTDfBmFjrWYqDgH1P8xJpfAYaLTbBwNeJ27pmkyK2kZcDccnkwVX9B5rh1KR4t",
  "key2": "3a1Ury6q3TirjLBGPbF7jr8bCoGVrJdBgmTrFtYsFU83m4icuBZeAb91yrmmGNpzL7j2hkcsz6rjK2fpax7933Ur",
  "key3": "4V6zcTQNk6aKYRrr3SdqQUhvRYBHvk3Cy3xxaAij9Hm8Ba8QMb7tMDsAopqiDTru2kJSiLJAeJXY34QfiRigzMgX",
  "key4": "4hULiWrk96HUmv7wamEWXQUraCs94DNbK1aAJHCE8mpVor6MVn4Q5sxW9Qvgjx1CDiEQkaJUmaLQAaujDePrszba",
  "key5": "2wddmTc3rMgQ9C9YcUmYv6wPNUi4aDAGbjD6FeVZZL68cFMeoMS3L9yPXjw9j57ZMyNFFu9PtkbSBQccgbxGa2RF",
  "key6": "5hyWL2JUHKon8yMuFN2xKo6xbRbPzQ6GE1VTCtipAjJSWDPGp8W9WZtS1jHPqCpTEevcxEo5AfG5Hnyn6yhAw6r9",
  "key7": "eqftWCBHCan3MDeKLKBm6FNenqm25hbSJ2VffiCQRbkeuSGX6pVizYag9YdsuvrGoxVMyzcwn3r8cKWQjQZWpWh",
  "key8": "54rP4imhqX1uGm1j66KSYUBX84wiM1CgtCae8kimAjZcbFDozKV8oTDXb9EjU4Jx8ppiGzpUFv4VCVP65ugDBp1B",
  "key9": "2UgH7NL34WNtGhfw8bbLfZBnQniZdGLNq2aFh3i7DWJHfYLno1yqXSZwbJYd6so4B9LdNEqGKh3697UvVCGoUjHf",
  "key10": "53M4QDA9VQyNEeiKEc3VXNfLN5qZhWw2qp9L9ihezctzYnFQ4SLeJ3KHYqw5P7Ym197gnh6WdajeiYiG5e5sv9T9",
  "key11": "5zTrRVBEiHVJtTZgLrp1LpUvxGhVXZz3ACmqTdZT6PY7aGGiyhnBzN3nveNfu3jcCaQmmyWNJ2V4dUEirLWSgX3h",
  "key12": "4CHt74rHoCWWA6g9NfH77aiboiC6iNFTAEp5i2hJejaeFVXBXf1271Kt8Vfoq1zRqBWmUjv8R18FCTRfrFijH6ng",
  "key13": "5NRfuu9j35JLjKJ9A2CJmg62j16RwXuuZepP9txPQgmpotjErRTcMtcEkxQr9aeXda8B4Bkz77ZAzKyb5tNJGcLz",
  "key14": "3AkcXMe3j84HxUFWo2FGxEkNPBAGWprD37KRZ9frmbqMkcGk8LKYAA2AGZDVVBEz5D1dic2f8fpKvG77WkTskEtS",
  "key15": "EcTvpaqDdriWjLtDZGzP9vrBuBt1YVE6WmRRBEAwW6dTfMCXiSMGL7tfZfGWWA6Bs3612asnh6NkqKTcTve4bxR",
  "key16": "5i4cWSSDUJFoPA5VtFYLyTFRAN2P5LQnLX5PE7ZX2H3kkN75RsHhSEx9smrLaBcrbNLznzpWixCWHd59PuWeuUT3",
  "key17": "4BAucntPRUNJLLhTGdtoy5bqNap3Epb2Zy5pqniejfXejSqbnx4xPX7ghhr8wPnVopMK1xZmDs8LvorWgEcMHx15",
  "key18": "4P9Cej5btKvT87qor8DHWzUBcY7mvjjRMTdWCm13JrkAYqMrs2g7YwsUZRmtHQ1rVgcuoZKUCEnLQXKWfhtqGTLX",
  "key19": "bYwnvGt38dmHAFsdazVs9rMBBtotjgQnP8DUmV9mPbof22SrFmhcMoagoqNqeekyPSRjQwfg3yemW8ZxgEPJFFT",
  "key20": "5QSzYZQWbi1Mq7MCJRFMkYNDVYzgYT1fPFDy9CG973UWdNyzg5uYdQtLNEHbQ6t77EFyFUrHgBEg1VPDZTELoogF",
  "key21": "5B6QmxEQRpqi1VB8ykhGy4jXxxvZVKG1F6Yck6TiBaYs9WCNop5bZdJLU1CGCcokUiF4H3W1bCPrR4XvKC2mR5WV",
  "key22": "57XUHtzTGdq46NhND8zRjNgzLste2uz8ZT7t5gJ62Eh1GhM4ku1jAGem1MH7ZtDVP6FvaT2nHXBogrbR1Wq6uUGQ",
  "key23": "5XmiCaMYZ3zKqXWXNBSpbkjhX2Dy6FC7f5NrNTabWieT9jYTdPtmGb3KM3oHGtM8gdxy5n4nLRTk8LPjmudcTt1w",
  "key24": "5Per2bVx5b1tYraZw5tPN8n3DiHtvtWS69PCwQcEYFTDBHDZAD7FEM9n52xsUNEnHKhoeXWd1pupvHFHsnUVCWfB",
  "key25": "3dQbvjfBRNgKTRtFwr17jf2Tf3knNYDmDXetwobrAo6vS64LKoq8i38UZdrc7B2KEGwvM4dykfrxaV7wWg3x8ffL"
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
