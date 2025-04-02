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
    "3asrwMrGFpnFJY4qkuuiQR331FCn8ohAhva6kdzRxKUGMamDRwgLgKx1LhTaMTkPikmsYK3EGUwwL7Whf6mmcwVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wkqoQhPTzdTLcu4hQYkHMYpFarZ4aAfVJfaw8gzFqnFoFkPVJrqehoMw44hdLwdRLvGvyDh5KD3ECXh1uSN7Zh",
  "key1": "3JaFhgJJ7J4Q5g9dvHvGqmBaQUcVhBgohwXSRTeUM49SvwVzhohPjAwqeYNXjniFGmXJugrVZ32wmQXFv9fXBzGo",
  "key2": "51WbFoMXk2dfQYbXymunQ8tUy8c3KZyo535LPmivt7tsrkocT2dM3YS5Jn7NgphAyHA4gGQvJHSzxtNE4RcktN52",
  "key3": "35kGugMbSFZSxvfJq6YcfugUf4d1CT53s4SVfiRi9Gu131nk8KXQixT6VPkR3Xh7o9EsjzQvFBKnQsTwsk53o63R",
  "key4": "3mpsZdfaCUeKddLeZViaRFY1wtYgDN6NMgBivqHo9Wbui6B5FF47YjBGU1Q8iwNLmHJfLJPycbVAkHyjY2vmy3ZW",
  "key5": "5Rdzm1sjdzAbihhLLbE4PMB4Gy9Xu2gitVB7TgYW63fqPRNFkLzmro19iQRev4j5RtNAzyaDYacRxrBJRcTD2ajq",
  "key6": "7w1S1G5m1etiyuV61yuSp68VCk8ENPEGQTr1XrWxaFPsWaoETA7gUVm7hpg6hLjVVsfC6bkHTqEHE7cc8arurbm",
  "key7": "4RLyHrXETBzEKB6RLHKPRhTSxNmVnfeu4qYgF8K5cPMoFd2P6bh96eY27FXjnTeKxg8TRmGibzwcz199jXbKYQhz",
  "key8": "2Jwh1hd8uWvLWExgm42arRKSM1D1KN8xnEL2EfiXt15b6AdNRHfsPU4qaXKokwcmhGSNJUtMQEzUjYNjoRE3uhfS",
  "key9": "5N3DFHwcSQLvkLF1wX1byEcwrYw2cmnXukzeirU5L5hkr3EWqdZUbCd8tCMDa8SUtsHFxhg8A3evyED86ruVtzq3",
  "key10": "3vj69hjXsnooX8j6WqBwk7tmikQhJgsp3hcoUzPuenm6PAZ4iQd2VjaX9atmtURerBXnSLsPUhcVV6RTKVD735CL",
  "key11": "F7sghhCRSjCcJ2UWcgWumtWJ8iVYkHhFQJH2icsBPtKkq4NSx1Ks7fBRykRcSDJUjNGu3ByLwRZNw8sAALiPxNS",
  "key12": "3GcFw8qvZzGh6PKM6dZ3zpGj46azuHunPfkGS2dRiTHU7NaHmAmm5h2XtCkc3adB2mjAFB2H5R3aBC4qCdRvRkyL",
  "key13": "2WSJQCtfsX7jkd5mAjAWrkJKvcrnvmChSH86E7oSk9soVbytu9ueDCMoqQnZwyCNGrKVrgfAbDmnRh1VquqkeY3a",
  "key14": "2yAhe54ySC19x1NT1Qf5mS3vCZ5wTB8gmWVXgAiAduthYhW7soXnNBkNtU4XDRGzvLgz9nMTZKSoX8MCr914mgrr",
  "key15": "4L3roXVvrzupf5YhjwUovxQLrDt9tp8VmvQp9kDjhq2TVDdenbG7W8aciZHKf38jDbpH1wtKvvzaTFD5dFxGtdfy",
  "key16": "3ZsPfAXPhjpf5hXQpuB1yU5nmAktUn5CxLmJnVW87GWW1r5sjDgWDCU9SpWY4p1iu7HTWYHpQq33ZvqXuMjDxSGP",
  "key17": "TVoiDEG1Y21RprnSgdjKy1dUrRiikXJEM2JHzjNQGmrKMy4zMaj2JjbqqaSEx8r5YfYmq6XtfgdEQinbm4UBBM3",
  "key18": "47LnfxwLX86D3Z7P6nS4tNjsjxwjqLuB7sah6yxs4QgoUjLnhSDh2hN9uj958EWopT2XHAmLiQhoaiyzYQ6FqKqR",
  "key19": "5cxGdSVYLY5LALt2nZxW39wd3iRQe1e2k8PFqD2GRxqS2S83AM3epNu9uMSSvVQXHzkfsf7894TjaWiRFF5XY3oW",
  "key20": "5cbrwBeGZ2qAFabNi4YAVNfgo2QQPqEdYZizPwK4eRXGkt2VDgvYHSQ2hz18V9XctNW7cd6QjezZNnvDVoZB851D",
  "key21": "5pVPkgTdHAh6yr9tbydezqRPou32AdPy118oewvWbD2ikxZf4ukaVsuMn7FJAE8sZGiASVKkkpn8NJa5dzAfSbuw",
  "key22": "4pNBoy4ziarYnXiMw8c3Cs9U9BgSCrrnVB2aYuh1nbvVSpoRH2DVbH4mQzqumHWbhD6Vx5rkPRuwMJ9cPXfsEzCR",
  "key23": "2Hth3jU568my86g7DeXkS5CWkfhXQYpRy4AnoRaagrwnXr4muFtxS2NoYjzD9k4L2KawoZPdyKxgQQku7WXUZFZd",
  "key24": "4Nva8hkDgekYB8i3cYiS5eYcS6o15PyxjJGxRh6wTr99oefGMgMC258Gy11PykT5Pp5kMmZygAoQGUm8DGFBcFq9",
  "key25": "2fqpKzfhcjJm1vZu1yMtpPo1aAFybZoujsAGMG3noLHCP1cJ8JNikDvVcBvj8Zg758iuw16ovuz9QGzPo2dwkp5d",
  "key26": "WNLVrZfnZAtWLTwwZtf6DcZ17AuhvKKFXJCsHjPCggJJTWLQpY613a5pWLyBag3QQBtZJVigWtPZLYm5yXZcm9q",
  "key27": "2NEWfyNTqqgWKGYqr5GA4RBS3fq8Kr9vRQ1wYhUQMCZDtMj6AVoV5c6jAhtdDSkNCYNBzkj8fK48PnEbBVcnwg49",
  "key28": "2hZNq1F3BTmVVXnMQsKSSXWtMhFaRGKQzbkuXUGVrDGkGhdb3hdQ5625uPzuYRjGHqv5zT2bXaajEUhcbE4vH9iU",
  "key29": "2CCD1h3GvCmy94xABPMXoqrGCHr13riqFKhK4VR8MF1efFCFjHFfUFJf7uLSLHCDsdBEuHrhdNnawYUecJpYrC3y"
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
