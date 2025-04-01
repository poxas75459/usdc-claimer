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
    "5H74K5GP9dpDPLQo32jniXbFaV6wrbM8rd3NYKMisJ9tJRkvHCuGW8MXbzYYcbGWmMPu3exM3CVaXNX3HZ3Q1Xbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i5WjkzjkhQxfCK5nmU8mnsxAhjnKjvqxopaurDsZSdCuV6niVKzPwKPDkPTs3P2QE7815RZ615BHqbsasiaqF3a",
  "key1": "4NvrSDDGr9yZRtTNNuFZQzg3xT5wuXonjEDTnoNjbMU2tVcbwLojfHzf2BizLzfGPEkNX4B2kVmfoXt5Ufxa3z1G",
  "key2": "5guUYQBhb22agAjUxxkA6mRdvJmTyAyFjPGYLZKvLbtrRmUsoLaNCbwZTCjfhFhFbvgwhS1eTMpLPBAnjGXHtWu1",
  "key3": "2h8336edP2fwHzTREyh4b8KgKwMDMpzphxzJ8UoB2hsYCwAEM1nUxzLrxS64s6KbnSU5PecdfWqwgvvvnQbBSQ2y",
  "key4": "2Luu8MrvzKDLpYC9LTmgyHGK5YaoX2hvX6Ap3WmwYHkxXWJtFyopN8t8ZFqn3NHD16VDEzxU4vykrX6zqo9sMoKj",
  "key5": "JorhtcRX1Qm4ZiGBrBxxh6oaGHS4fqUZn6PKKURqVrukPdQaEBv9cG3FDX3bkY7coZ5JoAnUPadtdM5PmnKToen",
  "key6": "KoPfTa8ivb3LiaC3dVijmZrYoRv231yV8LGiZFTaJvmB2HaEyf4XWspMpNmQ6nyXbgCzHk9mESqpkDVZT6AGbhi",
  "key7": "zmvUJ3iuiU1CTdEHn7hWhs3RWr3b6vdX8Ggng7hJSE9e3FhKNMv8iicmGgYfvoQwciHpzRpDudYBiviwv1byzzQ",
  "key8": "2mMrLWy8Jee4ZFP1PmmibaW1mFDYmu5coi59QAH1PmBq1e3YmJGyoBGA72zKgNTxRCQzaUxqeLQNC2Prgw16gKWS",
  "key9": "5bFHLqErML49vNhYotuCYnimUivCjaFWZyhyrRq6kXUeDjeFabbRcXyW9JtungAsQbXyuS6MMhhsra6j2WktaYhv",
  "key10": "iXaKTUXvMDgKyPbFHy9UnuBDfBcpmbDGn5onTtNcXqKipDB3qhpxr4cA7TSzFjjp5jXSaoXeL2RbvURpKqzcieH",
  "key11": "4HnX1D9VDF1chA6sei5hJ14U6inVC8V1r4a4yaGij8D3NDcgifS7hPGNJ4ZAcKt6T5jUXSKjzF1jnUi6GAEz6zka",
  "key12": "4D53TwJYJoKBoRK8XGTVdkTFmyvFfwRhNwjudb9ZdxsmQ27DTWhSSu7aVnSZkG8RLeFprcG5FoK27kyynRkY7Cw2",
  "key13": "JzU5CbrPyvc1QEB2cA4veFwtR4pQyb3aSoTUEG2tQUFrcYY4gyQJciAwA4tp1wBzppvBJLRptCxiPF4jy3GKhd6",
  "key14": "55P1kGCRzcZL84sjPp7M8tZ8KeP9UrbiYUX6Xh9toydTnafBG2C5Pys7MyuuAN7rRJGwDXjxqTQPJ7XppToxnoYP",
  "key15": "4BLAjLDgn2B88dFRutE1SmVZP4VEsSExHgK7Lxmh75e9ZoqQoK2tKP53jpRigR6iUYUWnuutjWPjrt6z1TYfNchL",
  "key16": "5G6NBsvYAG2K4pnmHCbr3Q6cZt31CN1GNNk8ryng83YjJRtGZkiQKzx59HJkP1hVtoo19LnSoAyvsh76MmWJ5F8w",
  "key17": "qkLuXiqrD3t2oraEjW6NAJhpWYCCz4BP8eEvDHyK4TYo7JBQ2xZRRL1wRvFaBje5f1oBQMhWo9GMGcrx98Qm7ko",
  "key18": "621BgTQcaBgsbTKD8c9E8UJZBmTjaN19tcTbS3yt3p4T4PJXPihVp3NWaseGRc2rnEytcanP7RcU17HwJ7A3j2xu",
  "key19": "5XoG4QvgVAoQEPkdNd7VioaaqG7o8YFgKGog8vS4sBzxBTrqVxXrPSuAPa9PTjkPTiAf73zQUr4ZE6sMpG5qLFin",
  "key20": "u2f4LNxTyt2oPpkVuX1r1s575Hk515SMxUqsweZAzXG2RWi7GH8abAqEnAy2enipXfpnRETK3UNsgx1hZhZ7sz5",
  "key21": "sdiuSF3D3rKv8iy65im7CKCMg1oGBPYBD4ceoEDpiuhXkHa6jCc92CJ1jktSwecRMNfHNz6fHEbfATNwXqWw61k",
  "key22": "4nE4oSZdGvFPpqhVTJSzzLuU4Lts81puQpoMcbfoj3JqinBNctUMJR9H62NypT9Yep3mrW6ngvXey1xBkoxmpsQB",
  "key23": "5ib7UJJnqEDRFxjWwdPioksvDospnjYEjsomXJ2DbS1erPPv1yDarPgSZnCaN5Ng3YTWmQH2E6bE3eJo7AqTArnv",
  "key24": "2z1quwBXQQHzbRXAupWQ8hdWL86ASPMWvBDNvXHbxftJVwDxhnEhNro1dmBhhMgLSVpSDqXarmigoberFNnqCPs6",
  "key25": "4Ep4XAhCafMbpztHg8hZ6qzTS5KRHbbMpXfMmVHYPDRFzPWX9WiJmm8PY5RifdCtkCWabQtiKHR1dHp2PD5URMb5",
  "key26": "3YLjwKcQH2eHzgm4vAgrk6EzmJyeY2opynv7tysUctvThmKxNhgbTpLMnCc3V38fyBMYcyh3dqvfPJxaMyGdzSck",
  "key27": "3RuSGc2tg65bMehbNc9eLYTWipW3UToFcEy8L37fwhz7khobqHLBrrmPwx6jMLwD2qwDhpNFUx8FXiDqocEFjnD5"
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
