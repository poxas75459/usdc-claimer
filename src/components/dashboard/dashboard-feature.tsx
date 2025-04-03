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
    "34yTbqgR1Ke8BYBuQc62JVrWhv4x7XBLxvvPrEqus4MAjC39UYwE6BQKr5fBYFRZXkxX8T637P25UMoRBrvk4zjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6HpiPhLYCz1tLcCAydtP4tMVtNUDidVbbCvuhvHPZoEC6m8urWnsUkaEUbaYAiHPxqAMKZ1SLZZKn6CZBxt6bg",
  "key1": "p7JQKYxRVkuMzQcDp6rkCYFeLen9DtxnxwtWbErgvwVfCqGfZTb6eLiTBsDyhpFcnQnyBmETBM4jZWVqTPQHMgM",
  "key2": "5eQJFKHygCk1ziHzqRNGKGPHLvCMCYsMuyskvfw55W6xNnf6Wh9JYbwpGBumqBCpULgeGAsiAvoUa1ctxMkCUMC4",
  "key3": "3WSx4xz4cXe5YKkLvgebPMUPXLhvErR4BTRFiXjWt5JgoY9xaKvTz9BkqBDs5bdKYWkKAAnJkc3xudsPtHqUjH7Z",
  "key4": "4n3EF9fhWfdGhCzNaXsKAP4FLNSGBgxQrSiDKhrSWgDQBrRr97H4EaRSML6VVDwYyYpqS8WzzJbJ3Jegyt5VPYwx",
  "key5": "3nisD9nk6aeSTT55gHaP4eFg6gon3tBEnrggdt3UGYYEdeFysG78m8jcpb5eNHhPDY2hj5rzfRYCV3hkHCkxqifL",
  "key6": "5jQM5AvSjiEPy3Lp8C34EofcUtyMAyp7DCfJMGPc3JF8fQhuAVfnprA1QegwxaTNCaEs2KKU4XX7ra4RqHC1JG2N",
  "key7": "zNBM5UnqZoMT33JD2fYhDVDweLMYmsqNaefVsJJskrJZXrneNRKHkCTaggfyW6hdnzioimrKEoXpK72cik9Jt2B",
  "key8": "iosxBmST99TugnffGL7xnJKUikN2BA1KKZiURJRTZBdk9pPkvZZf4BSW5c5BA7X9wFMZJHQ3tUPPAm1wM7W8XJt",
  "key9": "5Z9jbofZgoA2RAibgBrhU6smaeiPY1jN9hbpmRaFskTYNiPV1sDbfcqwxchKRr5q5uprs2A8CAuzoLPLo4uaBRVQ",
  "key10": "3LqqiH1dC2ajk9S8EG6eRpjPhZwVxp8McR5y17waH7ockbrg5Zk2r9MqM875dEhztBHYN43Lck7i74gGBcz9VTpD",
  "key11": "2FmErr8YCW3fMNUHSDWho4khQGNdb43msgbxVdryH4CrbmPvoB1TzFRPysHrWx54QVWmh9wXJkrF4JEar2HkdCgH",
  "key12": "4FZ2f8z54x62HxTLnbQ2PYt4R9cDtc7V4S47VpJAHMkC1Ri1YsAYCrzmHHeHLZFrQfz1oKcfLE2DeTk6S9uaJ9V4",
  "key13": "2nM3gWSsrrs3k7rYnY8mB2RvGbDbc4DX2u5ompwKx8KuDHdyt8ybfWPeAGRviXhJSxhdQ9ayrJu5awY2xoNdpNab",
  "key14": "3YQgCJyatuvBY8ZdadApS5it9FH4yNybNiAaHZ3x17Q3PXTRE5Qd2sd5LTiPtJLCFpf2fQKhsjzaJCAzbd61Nr4F",
  "key15": "2HFDuyAEkQD9LgsXZSWYsdVfdyNgUaNDFYjvaj266Gh5VFjuBo7gHoe5rWuVVhU1fGGDTRtgtecAwksrPpChN538",
  "key16": "5se3LrZvY41bLYMiSdVfHjDF7tvh1pFksW49tykYyKBonRTpLQ9qfcy11zWnTso8kGsyo3dz99vN7sMVCgAXW8S5",
  "key17": "U1tC2tbYHFo854xKcMCiTQte47STymJGungYBeCjb6LWsK6by7RDQj5Wh9iNt2bUS37p7DrHcTCcduhxu5tGPCN",
  "key18": "SsEd6cdtJUgp4uUHSvsgKfHMYmWAUyRrbHdPYxk1FVmLZEwotTrYM3RZfD7nW7EAEEeZ4xMWPRtMtZNUokxuhN1",
  "key19": "yjg1XfwWnSwVhGdYpuEyZ5q2FihxVC7PtW4n7d5ZZcpGsFjCWRsC5C1NRGByTL2nM1zdNZkE41QzdWahZhd24GB",
  "key20": "27xBkYhXBCy2Zx6zdU1poFgNYuRPG7wDLYNG2iRNiqpSWhnpwWYEH8vBRAfvPHB1pu7fxo42S1JnKToWcaSUbJmX",
  "key21": "5jWfpgcZ5enqNnpE9i7X4VxLNDcCXoYHfzbCxH972jd9X5bQmitXscPaRTVhM9v9CcM3oSoATGa9qpSdA9hWcdZ5",
  "key22": "5ftV8KH42wcFsJXvTYbMWtUkPBxcr11FGpDHHmaGdhKX4rQQmBgVz5MNquNdsRHb4JY8GHLXREYccMzPaAy3u2xr",
  "key23": "59H4ZAdX7xCtoGdhqm2nN5QuyuCpnuQ6xrCnZRuYyLsvZ6Totw6kxD41nnn3FEVFmhYz1AY8FvxYhi9WELNk2bhc",
  "key24": "4iwyYuZooGwubB64TSabUANTb4vMZKC3JVtXpmw61hJxLApiDxAZjYnDUgfD9oh6JG4pAoeiZMpgX6t1qkwk1YRJ",
  "key25": "42ajc7WSsWxtzeUGtwjjnPWWXC2xTG6TBpsHi4SNweDJFWqwZm5sHH9tXvm29qwHFvGceQhtsBjQBjDRLwH7imf1",
  "key26": "5opwdzGBNWvh8Sg63HmFiY422dKomUL9XSJ3pBqqsKC2aD3sP6PgUXwPRk3ARuow4yVjbaTqmUHgtXay8S3wxRWg",
  "key27": "2XDPZcvYTbrMnfSZydNxKYJLBiVnrdMjLUxLzuwRZPMnfQ7geHjvy4eRupBbpKXvdoRRXHUgSwKBMpdsFPr6GSxj",
  "key28": "4sbSkVdG57uLekQS8YMnjQK9733TtEryKZHB1DV51YFDVyLQKF4xQHHoQnfBcAs1hVsLYBiCrbM28tdXHKdi9HHL",
  "key29": "Yb6x1eZHuFzsNvR1qNH15oAWt12eZjVXchZVgwLKr6pgpuoAWCLHseNnbSxh8gHohmgSgkp5H31BwPd7PaoUzZu",
  "key30": "FRKct1chmexEzfxXuZnZG1RmLQF6F7jv9dbJCJvHxbrPAsJHz9rcueTUhAS3hwAjgaa3dhw9wp52g4hZekRFgXQ",
  "key31": "KXUVtZHMqeHejbv28qG4MtjBinfrR8YDMQ77gULDyeMUu3nymGfP3dQWkXpEW6L7R51gyrV5KHUkXY6k1kyNRz5",
  "key32": "BJrVn1gjDeeMq7r5WYNFugFib6quUkv9G2bvjyaheeq4Uvz6DDUFNkXkJFKPdn7r3biMVT3dKzHt8vE5dFCpoJb",
  "key33": "4C8FizaPEBMKn4Lx634u6sttfwFVR7fxtjC58rWjCsLfd5xYv4o2BoGAjmPy11k53x3NxfzxiSHR9kgZiDEE8aNj",
  "key34": "4X2EGpcAnj4qVynWQe4bnLLgaYDaXHWe8JgmBJeEYiWSAmeLfitgkvVn5rDDBMoEZBT2CCuuC2Y979PN6di8QwX5",
  "key35": "b75fVAd2Dk3FGq3EPHj2fjia4bxQ3JofkM6uSvrr7TZiDkRmZB4ijbn1RihXR56VE1z5an6ZEgvtPd5CGaRuUr4",
  "key36": "5NjtUvJgfjMRM8NAbxZc1gC6E7TCj9ELSteBBeE2Yvth16NFHDPWEdf9bUdp6w8PKCaEgKgyCqzx8vQex7rqrzWg",
  "key37": "3y45fqVMqnCe3Xw1svN5DNjJ6PKsfLd7FpZca7gPJMuBG66pVMgHvH75NaWLCJsGroNFJ6DgsNH3mbQgwjffzAxj",
  "key38": "W15EEK3H4sfK21WjPpK4VhoeedVTZA8vmJ8soBC4c6yd4A56UBjcG9ZBF9tqZbi4EV9U7xVcUGimb35LuLFmUb7",
  "key39": "4afMgNg1r5CDGi6W2g3iEVc7BoKGmkSr5RyRif9p5qr63awqoWgqL6pnFfxh1jj1g2YekBqGoLNZXaZduzVE8Ur2"
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
