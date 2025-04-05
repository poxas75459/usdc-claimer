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
    "3ZMz8VVHZ5cF7ghvaQ1sCk1UpPtwRABeWk1ZQsZ7GApfhehbNiY3aoLSaMuMPotCSyTRyVaEyXpLMkGk9d5UMANa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512NwMpBfTBwbtYjRaecdTHUsgwrjEjM4kRgZxQw6coWZLk7t77NWz5AeyYBXJRsxFn428zznfbxkMYuGSjL5tRE",
  "key1": "37tqLmUK3PwkXabRWTzkCiBQgNphZjvRiESsY5M22AoExe9KPDQNiuxoPPefejQSTwHa2DjepwagTCfikm5npsge",
  "key2": "4eExdD8j5cuciuMpdrdrgSfpNLKC1NFawRYZLSQyMPSpsbDpiHEm4bgmbkRzYbcJWW5VNQBZ6618a95vWopHXCKa",
  "key3": "oxkLgNzsHSXSaB7YUeBTAJCnhA4mVMtcgHXSsA9yN4cMkuAXzywZd2grepXmpVRZXg5QYwiCRYWucZGxzYXrvmN",
  "key4": "5vm6H5rTE6jQhecCM6vFLsiCy5xms2kBzwEFQ5D1zzfVXecN2r1sVBn6GHmGfg8dpZqdtXwWWE8vRxSBDeErDmdW",
  "key5": "3iJfhFq6xR7oSiZfcoAvQQ6rhV2K1wMsfPHFMEW74USbdDbLcTcN94Bv5EydDwEV7wYwHUeoy4DsJHPHKp3DpZK6",
  "key6": "NK35M7TP8JzSQ6YERc5Wm5cVEmtt4qZREbBTBCu4e586VVmrL5zTf3rzCQ5cDLqdv1PKityk7uo2fPVNgPxu7y3",
  "key7": "4UX9HEFaHPSa9LmzAAyNmaA4y8psDwGxM1qcV7FaVXVVwywHRL3akV34i9jxrov6CphZpE4iwqFBCnioZQE2TPi6",
  "key8": "2WaBv6goopRvCdgeFA4JsApSk1qQWbzLz2Kj1ZGkhcSsdiwURcfVHtTyvD5AHpiQ8L8ubfZyKMHSHpT7KMuLgN3x",
  "key9": "DrwKPuxZSTJDrWvAgF3CBtnAv7vu56PJBVPqzxG7Q4SYSdXpX99jFAu9kqeuYJ6pvQQZKi2m5RJ3bjyzWJp2XAG",
  "key10": "27ouqzfF5bc1cJQzqwRaBpsGRKtu9krysW3fttXKo3LkHDX78KU3Ao2xwskNkrYxjnaBVJxBo8WakrrkaXLGBJvR",
  "key11": "2HjkNcbPewqKsVNPHVpcM6aeQ5Vz1U55eiAb1cpX35o6QqnC81ebvn6Y8tUaVip2nH4qxtu3R32ShGzAwdGG8Fui",
  "key12": "56jsmwQy5xjjVdNoQNLwYDoKhQt3XTpLg1K61a4758i8QYnzzkTL4jPQSBW845cYfaUxbpY23cWoMPk5MuxhazjK",
  "key13": "fs8o65AH2c3mFpBTn91n5wGAEk3Ss1uNvYMJK7QTwwfukaRLvX38RmVwHVafNkdu6sEStCxwxAQbg6uLkYEwSMF",
  "key14": "22EesKicCU5zB3pDPq9XPENG6EFU7H9thWaNFA3prYDWsoMvhi7ExYsyfMPgw5SHya6a6tbDNde8GDrjvCffTL4E",
  "key15": "4Jdmm8Fc1WhoXJQSQMy9QynxsVs2TcvqXSXezHqyJSRkVcnkx4j88gjCuZ2wrnGod52VNNVKDPborwfM2kmG94yf",
  "key16": "5Gp7go3wxt5BNWqiYPvMHFjMWy1SW4GBjBpPxeDwu6GnWHLE4XHhNRU3zsLLHKBPJkTqXGYfdjADAY6v4iV7xUPX",
  "key17": "3d3VfPDaQdjrtEydCmRdZFUmDdtgegdeR41XvhfBeWf8ns9nsEsPn5P7gsSwSzVHCvuS6r4ScnXr1v5B5mR2xzv9",
  "key18": "5DJWNwKZ8AcNe1Fq2iSrN4AQE8rEUAGnmPpCGfA4LzGEpDRETuMAihcM5ySkg58z4VicjjwxY3PGij24wCSJHF27",
  "key19": "4UAihZH8GgW4naKV3uQ1xBSGya5XL3gvitR5TvHoqnp41jhnPEBdJadk7D5iydNf3sFJNEobsACq9gzojhpwxjud",
  "key20": "E7ZppN1Ai6CdcagRQH5YMEwBjNsmr4fzL3gFs8rN8fR37G4hPb8L62Ck7c8ZgiSKKZrRDVvZyWjgQs4fV9k6c9t",
  "key21": "5E5JbNb6LiMYMHrEnQL8fziUVu5BcUmuDUresDxHKtKf9wjhiSmyo6Gfhdsbwo4cXUdEzuujeCGKxj8HAMhFb3XH",
  "key22": "d2EwEmyv5E7yzTe9VMrJWT4vahzrVDCgbFNJmTKAdh4mj3auQ7mE3FuBCe3QgRvEgwtRbubWEdqRev9wTpTKGm9",
  "key23": "5QCJTsAEaDVvT82KioMQJo3ApN9pbTqheoZ1L11qQPbXJGrPT2XQg7CABdx6ffJcgrYPJFfKdkBGQk1T1YucQB2E",
  "key24": "RHqAaaEDXALEpAeUEnuov9PPLeafSXpoWGxfVCHG8xbfTgZLihUGnz6XvzEpq4kcp6TeffU48YFmoPMiFVKxfrM",
  "key25": "TT6BeEgvMN6dZAj5zFYQK7RB22Zobq7Q9SdDDs5AGHC3v1FceQ4z1jpqRr3jdtepZDVAW7LKfwa9M5gKuTxVSDp",
  "key26": "UY7ys3xUntGxLh3ozEckvo2sVcwW4eC8KZCtEviAZbvdhAM52MvstLj4HU54GMh87oyvqmct97N1jQdp3zDgVRj",
  "key27": "2Xk1xnCpwgp3fYPwDncMHqSC1bPbWhLLU9HK8x3JMY2pgfn1uuyEgMby9HcB8GMWW1JrEKBBpUdDrdcAsvTobeYj",
  "key28": "48mdvaC2T3HzGnSFPwBv8SxJNK5gJL3yPLZpHRDi1WtnGETJAxx5387ig4Vi1DxEwDNf58XrCZBREeREVmfVWyfw",
  "key29": "3FybUJYW6XHvhRGTHWQY6WByrKnmcZzfXXwJiYSjHCnTXnuEB7mCCE86EyUAZXpuzh9kHbimjTG2dtM3a6ha6JgD"
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
