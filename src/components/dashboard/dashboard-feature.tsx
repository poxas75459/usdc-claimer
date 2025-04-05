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
    "L6V3BVkkGrHxSFaMkUyiUN6Uzr62UTyE1k3K9AMCUcLNuH72EPeJPFWq7QiAs5pPRgYN9wuVBK9FrEpxRxpX2ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhQgfjXjfxD6UFm2Sqtdq8dkjyUeoJmohZAEsGVQz1whvaUqfrdPRDYvLNME5YbFkbTX5Em9Nub6t1jK1opBvoZ",
  "key1": "5PkmyATcuyXBUgVjooELRjtrBwhjV23rsyV65u5rFFwdGPWGDJJsxhTnF4URXfdzm4rWFEaryWVUDhvvQ9kXTtoA",
  "key2": "2PU81bzgsY6z9D7qEoe1XjSbVUiFjXSjsYtmiwLH1EfFqHxVvgUGdiviygWdyAHoQmRm38z9cZZrquzAZgG9bqFE",
  "key3": "2hFr9GfEKsddTtEKJNPfudtwxnTqVs9avRkuvtP5wKwNffKn8qzkAYKyY2g1wTWHrZuxoBmGXm7Nh42QCjaf5irF",
  "key4": "3tr5h3rf2xv6unGXJhXch9QtZkn7C2568CY5xdhPc7YMdFu7Q48ZoMeBPtsKseY8nkrZmrfzqR2M1Q66u1JcUWgK",
  "key5": "5yQue9cvoY88F4GU4GJa2ic2wBGmiNgsPNFNzufwqm419yD4LbwdjvGrhE4FcstuPrktSWgG6mbewTTNrwKJAw9y",
  "key6": "2Ywr88Dak5oVYkbwSFWkmMPS5NxBLHTCJs1Cb1ThsWXhhojydg1Hjpsd7fsk8WvuCD7W4TqyvUSHBYUAk9gT3i6K",
  "key7": "3LqAF1sCL9HDjHxUdY4Jff2fDHRJsHaA9fNsRgP6jhqtNq9Xg3vy4HyLGLR7TL6vKZu1tzcpdjwCaEbm7XpY9nGw",
  "key8": "5fG4iRDdivXSo45BbWmBHTU4wrmgQXeT9WGfYMzsjhnU7oXLEgWxPa91C6LXQzLUBUXf2Ra397SscyJ9rxQWsb4",
  "key9": "5T8ktiq34dwFU7Tg8wiLd3FZ6M7D6dNB6Dz8s2Muaj8C2supHipWmojVz4Dkw5SJtXqxkkbnMAkos1tMUeHEsoQu",
  "key10": "5LgdPHcRuYQ1gCbzFkknj1MBfsrch2uSucWAQSpf4M47wghWiaDYUKom7Vrrsr5wmtrcfxBW785HBea4qtEA8bY",
  "key11": "2N1UHhv41XwqEkABCSQqLzhuJPSrMLo9NY1PfDgegZLoY36CxKkgoQb3WfVPNytsnN3AKKbiRJYuyNaqLzQPEbSf",
  "key12": "2YGvWTscqoeZrmA2Qi4DbZw1sbNcP8z1hdjiQ5joNCegiuj7eRn99uj8tvSqjxTLjUkWiHUx6ZCW3F8UuSmitczF",
  "key13": "63L9CXsHEHsVESuvdmewaSW56QfL8Jn9fU17saPjxQfTa5BGjnxGV38qN4P9SP1ajN1R9HTVY69N8Ud6iUXv1gZb",
  "key14": "5fabeJTJr69zdTBZ7BgGchKSWdCHkZLJryUWUuPt75j7JULfNGnyTYx9PCVu3Ldq8a5FR3gFqeUNs7NWM8RaV1h",
  "key15": "5Diy72KH8ARCiwKhu69qh59yQWh1LoFADcXfToXV1nP7mYR5WYM4NBedEUU1VZCYBVdLJDqvKJ2kVaWte9b4oPsR",
  "key16": "xsDddFo1YQmsaKewdW2iYtAzYuKjLXJ72c9v4tnDPhDQjpX3SSiEpYm8k589mT1ptAD4v3Sje7fbrDrCLQE8hYk",
  "key17": "4W1gUxR3xsaaVvcvLCjManZqU1qowuwTFNUtie18ahKow3dRpuzTwdJuKeS7EzT2gSQYjpXnoSSAmry36XMEiYBw",
  "key18": "5WPA4ajynzb93YcMZAGTHwv6XxCJCePb4fPjgnVzaXaLvYFV1TDnFnyPaBN11ANTUHNVAPWHGE5wUsCRwaaumZyC",
  "key19": "2KuJQAfoFsfzE3ADYbEW278pHUhj7b1LvqeMq273R5gXKefSaYwJ4UMzk2K2yCpyMUgo9GezWrjJwzDnNtjJy65q",
  "key20": "3qTQsbjnnxaDCDVKcppVXbBM2uZR1mvZNyp71Tag9pAxnNogRqw8mVUuHyMNwMKcmbbeEPtwE8vAKz2cEEAKTJvd",
  "key21": "2wZNv3vjCZ8Vr2gvbXGzQhVHms2hVeFAenmThWcSwXiCfyesgUS7vhMqVmJfBdFra2GqYdjYLsNpfNnuf8CCkvwF",
  "key22": "25ss349nPQAGUafqomMygAN7rTZD3gz8R59aMvEETQx16Rf41PqUz4CFgmKCjKnMbZZpFioJpmUpnzH9wGjYGsKL",
  "key23": "3DG1r6K9snfEy8qt2n5atfPnKZXkuVGdYfr1R75dRTvJ2MzAf3Rp3k15bk6aHtHwy2UjcEN7zGchtZTwYTZdsY5u",
  "key24": "4CfkUeGwLn1dAA73ByNSA3r5wNz378Uf9WmMWw4A2jWSUUQHB4ZUUkXd9dXEZEcxrX2UNEp46RiH15KTWVomFZQ8",
  "key25": "5nPBpfN42zA9JYMqzGNUPq1rnRQy3zJhSa7YWJvTsWZC3EWrKurVcHFngKPCHbP5FEpcXMon8TqhvK2hm9wDqb3E",
  "key26": "2Ph5sqyPxxRQVALsaNKcGWUgDoCQJSzh2JqQkk8DbyacJHt4yDpt7bp54fdTaDJ74weqXL7Dpq3ARswgAYCCRU5q",
  "key27": "54oxL6TmbWKuP3hcM3ZiqiTfsJoZxXdnYLhFm4fZFEfeFBeJ86yRkurW8Y2qriqRJNujVfbpdCPwZsRrrW9Ajwme",
  "key28": "4zsg62Xmog6paJtRmYHUeiVfyn35vUdTfLe9WSUmKuRgpihLuSJaabzQkn9sMSfimRLHQxLXvES9XcQapARk9Zn5",
  "key29": "4S55Pdv6Umwrwvip5ipUNqKgfz9mbetZj43rwEsBfXmY3by4dhXp8BDcjZQRrUdJ8enbJyyDyFA4p6KW5LkQ99ux",
  "key30": "44bUvz8B6JjHP1tS5U8CScdANDQx6LojQJVCwZfJFgm6k4bGYC8f3J2X6xWz5845NhNr8gm1AdMhx6PdqG6xDEnh",
  "key31": "5McXbKgQiSmxDN95mGC88KKYuTKn9xBwJFnVYF4g6kLnZxWcyme37TjjYJoBZ2UutGnj6FpyM4e516X3DDuDkjvP",
  "key32": "3tDE8xR5YoPxthYFfx1fjfjMMSaUaTTu7JdKuvkZV7hbyAW8BVaZTK4euBfe4hxKLKTnapWPS6jNcCy9ourtrPBk",
  "key33": "3vFzHooVdjMsHwr1VaWAE2pPoHAA1GWgjsJPgWoZNBxt8qAHb2vEdttvwjPACJ4HM6uMv4cAHpacWvdCqskvf3ak",
  "key34": "4NXZRAWFshpTxevgNX3QduEuE5imEfeXLsfExWxpEWFpojp2kjeVY7M3FxoPKAqEMjbWhJyrvnArhU7deTkchd1q",
  "key35": "2YYR3f5zyMAgsZxbPHWQoKHKZ6piF7saKDuTXvLed6NHDYWYKRCFSwcaJMsHxyCbyzQnj9HVjwF9HuYKKnbyq3F5",
  "key36": "zXExuy8c35LmMkes648pQeLAprE6JMqa9zhGAEw6jb7djYiknBUc3EsprFjvjY6v4RBZwErFPcyyZoZSVe2QPS6",
  "key37": "w2rmNfiVUMCe24cUx68GQPPa5QZcFrDEju8Lwg4FDxx9qsnBZHnR4DLY7MHv8uqvwAinudmCM6d1E7HUdMWGfHH",
  "key38": "5V8tiGW5ikYnr9hnuqrg9Zve2N1sd7r8MCMPZ5ZZP5q7XDYmz82NC1h9UnLJbpw4ChenmuRxGTnAPh3UVpihnnVf",
  "key39": "2mQDhxfAmRcpAkMRU36c5oRckBAbauVE9bSxgWTy97w6CvCZwrg67uh3cRLP41Lt7noh8c6WvGrz1mjpTjUUhkrb",
  "key40": "3uaxCjpEr6ruYpYjjpUKbotxFxTB5uYmyWpFiDJJ6euEirULHa8rupdksPQfWrvTuxPA2etZAEBbJrZnUCkzRZPA",
  "key41": "3v4RrF35n18DZYbEzoqy7jRKq4PgghTdPz9AUZqMBGaT1Hn3BLcn9GFSE9NnuMp6QD4jeubb5958BwTcQxWmR3HK",
  "key42": "3ZMfahKNjTJEAkFS9S7n4cpnaJhacewBcqFKXSSvFiBwpEe2BtSvKFSJsQp3SVasXuMXkjFeoxHADGdpkmMPjA4c",
  "key43": "GtvmvcSiiQKe2YDK6zLAqnqq8pjXEG32PxVZxUH33vFHssv8pVA6r8sKLaBCDtM64UPgWu4m6jPnsatXKG7dCif",
  "key44": "5ekXJNE4m2jitWr6HSZK2x8NtmFqDvnsXBtQksKFzEatot67hNPaUR4yUy2UveCyAB6THXspwAPBgWMyrTodfPbU",
  "key45": "2DhT33tecn1yhhJYxzjx4tFzhb5GboirVWNauqjnNLdy7kfEpSnBJxkMMigVuQNkk2h9mX48GfbLXxhS2AdNj4fG",
  "key46": "2HcWe4Dq9mdL8WbsoJ3SiwDbw5p8JRGWmxkSrcDnyTigWGDJro7cdKCDcwZRaJgTQtqL2cZZmqamQJfNKgGtWfN3"
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
