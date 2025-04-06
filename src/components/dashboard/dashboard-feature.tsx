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
    "3fzbdUWSnegUZL6e4A7rKhne88GdhsxBXxXYjubWbv9HWw3afPrEECAaSmcxk6PYosuYqHeq8NF95sCY8AQrv4kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1dvhxz39G5NGCd8KBPNxGMHFEBU18Jhse94Zs2iHnCrxK8obh6oRG2McTqdTpc2Snoenbz97WNKMJtzEZgSrw5",
  "key1": "5tF7SwDHx6tNAKxqeJsmNL2MRaUoR4Q7fup5ZmZbp2jPubznHR5Vx2ZczxR6nH5dboE1gewdfmr8kwzprfLzY4Ab",
  "key2": "3tVAsLkFkDhFnVj3Jm6Pg6bH8xZdpCXeWasHbcwM77geyQcXsZ6nfRLo5xdh3neMW3vqnoXhdyMLDbCebXh47Qf1",
  "key3": "3cgsC1yEr7jhyuoWpSp2h1d3PFXVpv4XCaqP1Auu4vaC3KXKpcFsxtbpLkBSjQdshAq916oUiDHzyP7fWHyAr6j2",
  "key4": "5dZhe9C1x4aDcpb7zhuAugAmEL357vyWJBGr9uxPjZ5FxSnk6MnaeivGjeZxpgD8GAkB4XvCYEzQRJct7KMvHeQf",
  "key5": "2HzaHXzdDAwhi2MgaY4m5HE4qeupmhFrJuJATj5HZ5JcvVjozDNivqzDGD8hr4cdcxoGnnPiSqeUjNjriAs8x9f5",
  "key6": "63j9h6fWijJYMLZjHAPMLXBcEPDA46V69TPZXmtoHt2r7ugHBDfMa9cDbMrujwHDkGPDhxrUNXSEprNQ8DV95LGW",
  "key7": "2pTpLrYAxZeRgWVMK45hpywiE4dTTqYimpeEYE58RHMuV5R1QijoNWHZZvWPRSnDDsfKWWjFPEz6rcfDaBBY7RK4",
  "key8": "3HdhcsZjiuGYUy2cf87LvNJNkLr7Xr6esB4tfJHbjxNMWEK6jx9XTBgHpqd9vGBAG4XrWWbhX3g1Dan3n7bNRUpb",
  "key9": "3cVkwteRy2ZkFyJZbhdyfKa6oqj1wYaYf41cYzMgdMAisQL6jfTq1Kk6r8o6SrxkQhKKyZzbLPt7QCgADZQsiKfd",
  "key10": "4md2s117WsY5NxDXRyCV7tz7uxzDZH1xaCbsDNjycUTvLWhUvbHxQg7KLU3bnA299LPWGY4ZgAugi5qppDuo796W",
  "key11": "2AQdkZYY2UFdSLdR9oDEwRhtRygbHEhZCm7y7QT8MoX8Yi8R96F5HNPisxJWzNxBBAuYz2nBSStsmBydQKKfggU4",
  "key12": "6iDfVSqSndCpYafP5LTygHi5NmhDopdfMnEk53BLkQt1btnWuGskqcpyZMsrh9pLo76hxMZj8RPZELFzFw8uiLg",
  "key13": "3zrFAHfWbfWsi9oZnDNs8hbfVDM8SBDbcchYeWYKnSLyQ5dQBSHWBAvntb4HoPxD3AyUpT9FFjRjBA3Wz48MQ7kx",
  "key14": "4b1uSD9uhwjRNtfAxAqagBvMYMUsmS8BYGb9yJ9nFnC1MrDnLmhposRxXQZV6Z3rGwViBbQMESPgyxh2LdCzg2gu",
  "key15": "615U3MLmNVj1XRnwgZW1QdMQDQQefakyEhJ4jsRPJe5JCkxRwDCFNYu7Wjpi4QHMfk7TjNDbvnxxm3hexNzHghZp",
  "key16": "21XPsodg9iQ7W5bxq5gZ2yescyQKUWt5EEdGDaJT2Vy7JXLydfH6Q9hnVTAgaEug6DUzXBsqF7xG4xoZJuZxQP6o",
  "key17": "4akLa8rU6c9Kfh7piNS43j734hfQuSiuBwaTcN7RnC4isAxnUVsceCBg27m9MPs7SGAQWr9PMEirjsJ2U1oJEs6J",
  "key18": "4hLfPJCobQKRSMMjPiJwXFKHKAoxrFxrrbybwoBwRit28NudBvn5ZNnFEpFXUrFvQ3Gm7vARwqtCX5xAKePLmztN",
  "key19": "6arHKbwMrRDqfZkDjkDvM4vZUFwsf1E8Pnw7XmxFBhRKJhzkwJNGNiku94ySbwuLdRXpiJTkcF5CUjnvk8EcMF4",
  "key20": "2htKvCcKBR2XijCNoc7AGYR2jGG5NLGALMqZJMcedcv4en9ygre5nNGcNmrZJiFHkDHFnvmGEhbFZPgUHqPgVcmG",
  "key21": "fyyaPK8uypWQPXNd9woB6Ab26cwkRSzAVBs4ZXQpQoNR58eZaaaARVqT8HfCAQRtKrAwywFFZKpkwpLpMSdjDJC",
  "key22": "518YeuaGdEThpwN9hZKF2RpyygQZ1gyPz1JNMBMizvnWKaV2a3cmtkpFcPcjWENcSw7uLQKNaJmEmGEPqcEVoogU",
  "key23": "31NTwcXiMB86eAoUX1FB9ctbyi2HFp7PNvtgZ5awzm9sL3wEyZCxLvPkYnKud1D9Mqhw3YFcUgGBGv9yLaGNjWAS",
  "key24": "9pAkW85ixBLqK1Fd1yFzZKQcV4nQE4XsvXhZt4SVTtR5aAdLZcY45KJ7psYE5b4aT3kvojwvHeFawhrACXdZ8Ts",
  "key25": "39xnGpHAMYofkT1cHTDLhwtre4dLzG7qkp9wGMYkahgq4BA3XDYmHHLAUFU7MvzRjEQtjJ9VgYKpWpBa5Zydg1Eh",
  "key26": "27CAD1K2qHen1bqjJJt5QcNHs6kzV6QBTMkDo6L3j3BYDrHuAa261fndBRPjdAT8ugBdFzhPxqpnnsZvZiSMnJjw",
  "key27": "3PSYiZ7Dnrx6ZrJZkt4c3ixFDwWgm2vz1itrt7nXB2YmGgA1RKj5D8WkCzqr55uV6keDm8kbg2RZRK4ksCem37bU",
  "key28": "5EWS32R1Gd78rCAgMzNoCsq71GNwzAHRxbbSvLuikW9Bqo8gbThT492nY2J3cwQLzfdSvHNbbneUYyV9W4Tc9q2Z",
  "key29": "57AkGCTp71GSGZhjkqudehjLRrFafgX6M7XMjjqvSFmwE4qcAqzoJSE3HM4PCgwLXecR9ZPjKhxaLicdXKsiHUfn",
  "key30": "44S1FtEu4UptpTUeXgRU2bDJuu8qZfwMHPRS1zANu3BzJYsW2knTdTVU5sRpZtV9Hq3cziEMp9j1sMUaKAfcm6WN",
  "key31": "3DnDUDv1tsucGDxy3v3q8xCu6CYTs91FhRu7KTiApXbKkeeUr18ztFtpDG7Mz8wh5x7iMcPQ7JbaNiN9hsBPhBNH",
  "key32": "bpvAJXLh7Z7d3piQRpTiDmqjjvw3tTQV3XaRNPqMfFz2sc91He5Niy3PfjSvqDATEqQak2Z885dRaVXkdUfvEfE",
  "key33": "4sfsgGGnBBXPmJJc3fQkA6XHFtYrrxU7GgDyM6bN3h4xdBGEVwtNY52jRr8xPWiMSx5SWufcr6goBTeXEFo2v3HB",
  "key34": "JjsqiCwSWiNksJb1pLWdCiFquj3P4mx38StvuFAUBJ3uDoNKtggfkghyW6ngp1z6uhLyikUUtTNKs6A79dpJjx9",
  "key35": "33m78z7zAZ3hn8r42fmwUQyD12npTBeBhmh9X9co8FKZNmz8Q1n28F1dSMaNTMh9MoCHfd3BkfhDdbuLUGH3qpBh",
  "key36": "xgGMwYfxjHZfAcpTA2hHKZ3ick7aP94sDtTpYEgPBMWqixwqc6HfUTT3eVkJg36i9RTEXK6cAvjExb6z4hG45E3",
  "key37": "NZusXpH1gsa9y9PqoxjgeVAtcHeqBvyi2YoXhtXBFVCQdjHYYiCLRc9rv19qswaHYdXcLKqfy779iGJfe4jvkW9",
  "key38": "5ffFD9dahjxdSwGPnMXo3T6UU4XFDNewkabRKpfxitrDeqoF35a8fzy592aoDXShKTU3ky5uMuk3CrLGw5zvvVxz",
  "key39": "2rd53ADKYr7UNiwJKGViJfZLNj9DEKTABH6z24aKY8pQ3zBHkKSRVBGvSLoPzidrNJMRmsGeUSykmVXRJrB57CTN",
  "key40": "njuqTgUWtevkYjphs6qt7JuUWC9VtSgLqjFDKdsaRUsj7yMEuC2PFrRTRv5upsckaWRSsipUaxR7SLTu9ca5H1K"
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
