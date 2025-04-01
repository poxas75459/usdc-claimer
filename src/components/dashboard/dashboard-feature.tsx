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
    "2sN9s85aaVqxpwK9qCscW2D7b6aHrvzAKMwqmUSZoKnfdqkNNBYqaAa2yqjqxfRFpUo153ZxLsE271NE3cJWuJEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MmDyFUrpRb9pCFvXAMnWjMMWyNb4qAQDWNrnvh8otFpQAE4CJfJR2PrLFMkwzmTLiMVRTtm6h4yaHkeGkoZ85Z",
  "key1": "5NxBRfiQL2jey7KL2bvTQK7AEj9XPxh6m9hL6b5NqJxTZx8XjKZ3oiHhoKxxtMNTZwcAZu9Jcd7JDNJKXej5KRph",
  "key2": "4K32eefUgdDQpCpQdJTvi5MD5hLoeysSFLE1hxgiD9J5o6ynUJjj57d3GWk5UbgwcoUEmsNLmC6nPP4GF7BVeB7Q",
  "key3": "5VZ2WKapSUHQww7jRPzUu8oKK4x28XGHtpDZutSc1MSvfhTzPVg6QPAZQVSMkapggTEwoiMARTexRyxgiHgWNAhu",
  "key4": "31E26HCrm23MhDHqE3Fag7f3t6TC26L32XnEkLCoS1g3VSxSAnYw1AC9CEfavkFGabwofr1BYDkeHXWmod3U9LP",
  "key5": "4UbzdkGDWgDxK5zXPRZyyyDMzNKtdFfhDWFufd56tmDywZQcQrS7xuBApcDuUfJsCEPh52iEV7aPExKdHtFuJcur",
  "key6": "5NjKpy1AjEkoivPLvHZ8zxUak5JfnamLPAPGqmSveWpLgkmAxZeRf3BHD6Hcpu4A5eqzgeWczMyUTc9ayefgWCP9",
  "key7": "348q28eBqS4xH4mhxEeRpKBvwqmgPNZW7ztbCpc7VeKXqLVFPEzJDGfg1AVuxvZaz2Hrn1sALCD8CnUNgBBZRu3B",
  "key8": "3gCSVk7kBkCyBLDWEWftZxycsL6MkEcKxXwzTYh8MxvKJDUMFgfNAwvHzQXvEwmyF42497qms3anNNpY5A8FFHfv",
  "key9": "4W5Qs6ekjZQTRMNxbQek5uCmvg7ek274sg5uqbcR9TVUitCTSKQJQBuekWzrLsEtTqEpWSMBH1Kk4F3DPDkcgZav",
  "key10": "52VZ1XdKod6jVAPpGGfo8csTW5WVeUzpSaMksFEzpAFWSYDBAHffcDAFzhXuhJQWQY2u43fh1sLeEGYEUyWAw4QN",
  "key11": "388LYwWAWMTjyjnXeGYXX9YnXUhgheGrLrPTmPreqRB744Yahn1yYBm73GKY38asYqUkn9zBXRS6u5rwLFNSKNKN",
  "key12": "5zv7RipKekjM7hweYvuyMaRtAmxnCRzxn4Jd33CQMkHzBqSuUm6EocaCELhdavNmz1qvvUeFGBXRkGVzaiSaCGK2",
  "key13": "NrzAoHY4cxEZKp7RY6eoDFfCzqUtVTCVHo8inxTPaFBFmQd6qUyvsceeFhF5TGBP8s1mDGLoHELhJFBTmRGVdM5",
  "key14": "4tsYVAyYErZhrpuq54ktP2fz2FPusc45t2MttSy1ku7cEKD3aNV8ru3j2J35q81rz68UK6q5DpiPgcW6bp9CDcfV",
  "key15": "64qyh8LRBjGZrKmaVyh1FdpU8eA6NxJxJJsVioAZPiKPC4oGKSbyVjJvDHyZXJv4g6kFDpobR7V5PS84XzZdFSQJ",
  "key16": "3BX1ScTQs6d3zRBKHCejGB4awLNam3cRSMym6DeW8522xnPhpVZ5ofSaLPQjudD6DHaA7nuBZXdSBkXc1nC5pWpS",
  "key17": "2FeJPr9JsD3nRjzxT2VfmFXYhjotxtWdsqkTPJ8cZ9U77DkNdos4wkanSG3rk46FAYdfeWSPsm4sGZA36LQhcj9i",
  "key18": "2qMK4FBgW5yr3iEc8676NAJH8ikf5MuJmGwUhPe1bDNdTB81JoUTqSX67crRysJveKjYttmpC2e9DifjJ2sYVkp6",
  "key19": "KUyocRZu3fNBw4kCkuQLQXAqr4VYmSkFhXWhjKruWeSzaRt6BLHtNvijo3jLJ1HaJZn286koLrhruzbcoTcfHNt",
  "key20": "25W3ukBbw3rz242D3qqVofHVBq1UN2oYTy1dDcgPXDYGkSdrXvSvoBiog8rLZY8BFbTfaXVFHeS3TmjN3hQPcg9C",
  "key21": "2a4togJQ9giVzCWKctvNKZ6Kh9RHwLxRN16VjE53AKaLK1EpPEYdgW7GNWvNy7ouGinVNx8bpwhnPcX5d3qm9uVS",
  "key22": "2e5VvBr4QmGtAjVafZXk9vtKQFAzeqauffHSTnK6rXKACCXc972XcW9URqwbaCao7Ryyw8yFxU3qrnbzFdKfEs1F",
  "key23": "5DThJQ886QG6UQs7BybBAGimnbN1BqeYUW4G6iioj7HgfbPkBo99LEjtDX7s3gkS3ntLJPyWwAoeJKwPRLjKjSHm",
  "key24": "22cPP47tUeoMhgbvLkvuYke7imj8dt7oyXpJkgDcSYBvR4BNiWFhNz6RBwkoespgmUxdhGTz62Hv49RtKZ16qnyy",
  "key25": "4Rd7Px2q3Us1K3V3XVxi7qH91kAHij7bMZZs8d4VRM4iD3rnNPZzqon4j9FibPjvC4N83JzeknyC5iwoyXd1cpN1",
  "key26": "2aucQFx7LmBSc4AZKDcSzmYMPaJ4D1wzGFLdWTuYUxxxX3dW6eE224BArwoGVaWC3KiWZ2dEdRVJZBZgqvd7Q2Fw",
  "key27": "2syDDomGc7uKFu9mRdC1xhcuGQchB4xm1g69G5bUBjMbhRwTFsuBwAUCwm4ZEeAe9LFsmjAtinCrdUt9ErSQkALC",
  "key28": "336vBSeNceY3rKiXQZtZgTQQf21G9ZYcnSKkZpa6XLHeHjwybNPs3eh67MbtmnCfJguzKE1LKd5B6sJg7LuNUj4N",
  "key29": "56eGf3wL41rHvMKDc1z4FYU7cbWX1KGacHyZgfreSKUwYyzhJdkUWwrVbtTgHDozWpyhbGZsN9w11KEW1QP2m2Dx",
  "key30": "4UmPjSj1UFgtBRZ7rpUyDhAQLofF9qHi1bhC7gfSQhYLEPDvsk4ocjRHypPLyEDQYkv3kawYWrDHKqrEvhqqRKEh",
  "key31": "3pRnhqdcrK7XFxWtc13P94JV4vvMbQUagRTWQkKfjNYy5rPQonx9sm69cia7JfV4W6aHbExZaEbsy5dk1Jariohe",
  "key32": "KFfnZZhNpA747XDUH3StiNP4zpizg2dAZZQ1jUbgSFzfcKWU3R8sLfP8Gf4SSDmdhu699EHiaUvaxtnEW3jGVDT"
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
