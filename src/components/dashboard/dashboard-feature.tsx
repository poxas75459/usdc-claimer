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
    "2gRT1iMZVDCheZkYvk1VPYWC8tkAEJ1m7W2r6KfrDMSefp21dfnnhGzUm1aZEvxpXGzAG6EGi6bER4VT3g3g9vrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrGE8vkdEp99UeZ3ACeh9CPAcuLkTHnxssmD6mswRqWqH5Ciwik1SsvErvs4QMAtZXQkDtsaN64nFkAt5qMgeSC",
  "key1": "4jMquNJ6i1ZBkrxD4AjPTomQq46m27531ck5gjTVek1CDUmkQNc2NcU1wBTp2YCVZxVYFBY8bfCeewJ4jgaSoVYg",
  "key2": "3TvxhhyBvvep7726W4AVKSjNZfg8pfT4EUxvxaoja2cRSvPrPF7NQmaXd2cA6aJZh3v3Z9z7EQ7w2ojYMKm9d9qM",
  "key3": "pAJLENb6KoUxrfge78LcubUx64gLcKpA1wyXuJQUsbF6JG5khTi5bhGZ69DrAJ89CrCSs1FkEdqLuotrAAhCdH6",
  "key4": "5oMEFgkpHkj69h2Lf3v9n4ssCvufMNFhsmdMGtmwz2kwLLVLjAG6dd66opnQuCHJde2RX19DKXKEEpi3mHVbtC5j",
  "key5": "2KoxZ8VSh1fQFeBehuTE3LRDMZ9KNtpVwxP34TdznvZ1zXeFuTWYE4SZp7mQfDAoeNVAvcfjwoC4W4XY2SZJ8YHg",
  "key6": "2xQGTvSPFoBd4h67KtHgHASv4quJfRpLbZ8gfhcb1gyq3e9hEm5F7egEZhF3DT9XnruQ6ndZB4p4wR8cZ5RdjXCk",
  "key7": "5grJ7dsP7G2rwxyeYPjW9SdxXsjqwR9p9wXAne8urqKD2BpDRnhz4AkUS7YYWhFAkzFTyyagRn8ZSb8mTApqGvm5",
  "key8": "2EDEcLmfEfbZTUAHfQH2CL7jnrRZ3HFFuYnpWt43AYFEa1iD8148QNpymSqAmy8Zp3YkyUX313J5D8rvMtADz31j",
  "key9": "5WRNNt3QrYvSinbH3zndashC8CseEEbh8JKsxF2wh2Je1MoeLM2ar1SrUsLYA3L1TxHMFaL8gkVydPsnuWA9D4Cd",
  "key10": "3LmonF3vBGLEXicHLY5E2wudTeCbCKsXKHnnygPUK6Qn5WNJeFwMmuo36SLeQxV1HpDgd8gHi6G4cALP34TzBaYV",
  "key11": "3WDE9orCZixY9hdpuubVFpT24Sq3c1RXQf4hhMEBrc6eBzq3FHtES3w38NUCtZwTW2YY3kg1WagFR49uiBmzNZer",
  "key12": "3AuWM9cSvGwNNLKuLYfVoCS1UamXjNYAj5RR63AHMa3SBr7tjNrytPzNhihGngSpgtJuvdGiKMFiqSjphUQm1ubp",
  "key13": "4KYYowV1RqUAjs81fETHoteiBmnEGZBkv52y1C4iPuzr4TwqnWtV3dm8PoM1R2uRQyozMtDekATvzDXFTccFcR7x",
  "key14": "47o5oj41fNAnp2FKvM6tVH8h12B3oU69DiFRy2HjAkmtwgMMNLUpCb2Fd8jz2exH6VVNmySiMy3mG392mks5T3dP",
  "key15": "2qyD8RJKP9Yt8LyPWmXVZ25d2URBSfiFGBSXckdNd7vKvpjYJk1nbUSX5951Z4kjjWvsWnxoszh2GGkNZvqYTygp",
  "key16": "2rmC8KwxZAt8cEYfY5F5s1nyhdbB6i6UPSwuV41QuTMVC6AYK22TRz37JWYvEeuDxFNUn6fbwYGLtBsq2Vv8TLny",
  "key17": "67TAwzC1pctojYZ9ME5WqJiu1JLBPCo1pekZ1hiSbvdEit4BZJNJaRHnVkJjFtJURVUErVQimHGzKbX9G1yScpK8",
  "key18": "4GWRPw3dvh1s8ygwTh7bNUmgem7hYYjTHNCZQRfqPDNJaabRMcyBbFjWWCLQrLPcZPCzNAS9UKDV1cseq3tLU2xC",
  "key19": "4Xmd8CpwJtmvjvN3Ta3ju8CbiB2GA6WQpp57Pgx8QUGkbwjEnKujUW982rxDK1t7qttEdpGSLqena4Kr5BHRfQ7y",
  "key20": "84D8duVnpikKiQXfWkSQaeXCrQd81gqKnu7kY96weNKPPgRqxES92V6YPjS8ddVaG3B3vd39KJzrXSD5DS84WYN",
  "key21": "2vkwtBzLg7s1gyFKJeMiPBaXN85xeqgtjqvHa8LoTqeuaorbmeTcN5C3EtWYiPDtSe9V7XvmNyRrrsMoCc5fUBDx",
  "key22": "dKqVpmW96iHA8FXjn7uHDqmdcmHd3bznTV9WMtbHUTdnCijx8ifP8sGh6NDfhDnLaeTpsxXEBX3YUrcNk85QryE",
  "key23": "3jmw8GjJdLB7dKxYPYpLuGUbQkczhzkFprLvL4efE6YfvANirHuHBQNibvGoKrXkYS89XZnA4APXrZ4AdNu38PsY",
  "key24": "3PZceBKLuneKsT5HywiSjDVEUXjJTNTGsDueEjaJ31e7uvwRkdhWp24VWNKHqUSFZc294PduYoTqaX47TpTjMGR9",
  "key25": "4SF8AJPmA3yD6qcsjLXTYtL4LwY1xBRjgYjGe2mQ7a5x7diapg2YdgfEFyU7LYMKWzMgSiZZgJURANkqLZXu8TCT",
  "key26": "5KP6YJJu6oUDG7GWDKNYSJw3mmVqkNVxVyZfhFk6hdHAZhnguUigY3dkMRDcimWuKQsqSRKbRGRmYaDQ9LRUhXnx",
  "key27": "3VPWnM6WtnsMHnymfgVtpePz1ytHbo9fKiWPP6uaswCtooErVJ28j43cNmykQHsU54jXQ4Rrpirdma3z3hw5RquE"
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
