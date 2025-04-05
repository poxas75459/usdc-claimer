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
    "2SJEuaXKd2frJuAu6kWYJrNKxvCAqgh4Lvmns3EKxcg1Q8Caow5pFLFZs4q3j9do1XZBTRMijnWbLCR6iWH8n1J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eX8hw5ds7WH7KzeUGcsfQSzyadKnqejehGGsCGaYZP7BnzWp9rcn1ziZZv7yZdrdaBGzYeSJ83mKryHP48LmYcZ",
  "key1": "2vFcCoVbykEkRSi9GrUaZBQacFaQRhFVKQcNmR4xZSj3gGN2GJ342ByzVo8cUknzaqxeV2aJzGabxknGb72YbaEu",
  "key2": "2M1X1V5Wn1NPcEz5fjzDJmzYS9ypGuZckiawUa2m3uFfsYZZQpnytTnwESepiUK5jYaR2PTfdwxuWYRPGR5MxjUS",
  "key3": "2iFwxXw4ia3CqneCKBscw8Pg7TknQJxb6WA8SnPoHZ98QhFfQTuZ2NHJDVkgnPxHnAjxUFmtonsz7W5r7mzCE1K2",
  "key4": "2ZRVh23HwajiAnao6QAsgnGLDX6eEy9vki2eQTmRE1H7GRLZ7pjGyPC1r6NHRZYVD87aLWE2HdcZ2VGAXGytM5PN",
  "key5": "4euA3cWZ9uF6LjFCv11pXUz6u3hCf5i4oJQsvWxJqCpL9JKwfr3cwnYVEQ85cdGsVTge3aFXKN7ej1q3iS9664iu",
  "key6": "3mV7jUi5vwS4kprBoYD7UK7Nji8Y8Y6PZSgJKY4fq4QQRvAMLwVEFRLCA3TU14JsEUXwE4s3hL1CTMqtMyg7MWaX",
  "key7": "5L9fuA1bXPxW6H8hMm86Lf3j6J8RdDwuf171eYoZxjgvo8KiRyuDVRLpDvuZr4nKRC6J1ugSBy6LiP9P81k9Qr6",
  "key8": "4TFU1pHB9BsNpv3xWQ1iCuFf7sRgTPy5GwWRSRow1yCwTEpTHHUF33LUDkBLD4KGmhrWxvfmbXF9f4FYc68fmdSD",
  "key9": "2hJ8ocTLpdnJPwVNP8nU1aB6HZQQdwmZPVXWYWeoq8qTnabSs6t7G64A1Hob9CJYMf7eDJzWzNJtq6UByNsraFSd",
  "key10": "RZhJZFwzbx4k99ymRo49EqQ9a11LAuWrRvit9NnRD2Bv5eB7o4CxKfDAKioDzvHrT9ZevW2Cbe2QZXoQ5G5aYRj",
  "key11": "4fcU1BEMF4HU4ipfyAncWEGu3jyapeBS4YDRTA7jZHHQ4u3qaagPXsioTy5PtrS7f33iS1JZdQU4ien1B59Me7vT",
  "key12": "75T4FVLGywBqYAaKeLZFUnRgGdb7jZQMfbRxnBuoBvJWZoovZgeTGks59kdM1CVxsiSGZ7TjyKDvuY5y4n7GjEM",
  "key13": "52QC5zWcrfdiZpGar8G2AEHwMocAb4iTo5jF5Jpzh4d1ntBYzgxYfXyvZa8ArT5A475EoSchGNTXgZbaqZrx6wdd",
  "key14": "5VgvW4FCATNLJXYUK9cgxYLmCiJq3Hz5xmBGQgDuyJBSmtHWqpnnDAohkcZGLPr33CUxbpG1XHwMv7wDEteqQKEH",
  "key15": "4MvcrCx383f7x1i9XZwn8L9tNqVAQouYAU6vKNUs5U2xCgXxZGYNCBnW7i1NPsb2WnQBjdK4ki65PxooBRZgSS9F",
  "key16": "2yhoxJySkmBwuBQXiHaiTLE7edB2iXygR8nMCpHTxkhQVz1cD4Pa1RaA7rKkM8XavLCP3HxjacjakBqjnWfciaky",
  "key17": "ZH2hFxShGrL2AQCPnZAqSaHDTo5uCCn2Kx7BvLRWuskaNFMrw5MGAtcnMQ8nD2XKu7y4gHfvPPuu7QbhwZ54wwf",
  "key18": "nfHRWXHnr8WUfykmGWN2T2dwGjjdCjQQ75Lfx4FeYhQiyjVgqHJMkWRNx1jj6ECSBLUJN9bzwgvzSpZqZqD7n49",
  "key19": "4eDLZJgC3k86hGadPnmsQwvfp9SpUNtrnC51UbKeKiXMX5RJm7kv5jKwx9Xy24LEgZVR6bhGhcBXRiYHSmm9hAag",
  "key20": "3q5FFbDg3oKNq1wy87Dafymey36VjtuY8yHfuRqAUUSktorXjsNxrx3V1ENFGkEEmEnynWHxnfz7MSBRTvHVQa29",
  "key21": "52Nz6yXvw6fuNHByzv7bo6Crd4HL8X6EsaeE4PWtK7ZWUNVJuvfx6yDiSvRddJ6rG9im29GHG6WStjrv8WewF2St",
  "key22": "2pUzzhCr8j3AmudBxj4uLJfDgRtGkoFXdPxsE3TRmTepok6J1BV2kCzz3pPNAVjNMDKGX8TuKgQotgxch5GmxKBP",
  "key23": "2c9Fxw1eDPvc71Kg4xKTcqVfAQQdfK6MEjzd5EaEhCU8BFhERsE5XbFx4PpbqXzLu4tHmXt8g43siWzxJdtzVojG",
  "key24": "2pHM3kNfEn7gbRjWGqiTFXXCuSASiKFjjCe65MSGVFXZyuLNow72j9TRRvbwF9531LmkKRMhkqRHFynd35VFSrH1",
  "key25": "UvTiqTMLpBSnqE9rgp5GgRJie6uygQgDtQDV6KZccXLkaZfJtcJeUQRwYxsNLqFHRrRVWZa6sBFLLu75jYAP5u7",
  "key26": "5FLGXfoZNF4cpFgLkHYe6ZPxQ7e3jX43qMJ5JAqjFGharv7VKw5iqCkSgfARM4X3hgf8YHUFKXigRfJMwUnAS7jS",
  "key27": "j8Gw7fYnTHqvHAzzU5J17aroLFjxrDVq9cVW87L6iGpTXN5FR2EPAvSnCgxiMRNHMSmPN5EtVdcFo74WN9VhFCG",
  "key28": "5ABq34GVBtf1Z3q9scF1o4L3dDxC3BveFGUp86bQT6Q3uLTQWPPXCfXNbP5ZUgfroPAZJRbScC5Zj3C7eGpoawoB",
  "key29": "64w2eyvGQ9agpNd73b5MdSdzSGa9sEGhEfN1K8a3k2GXp2z6JGH1SxRXhjew7LTMCdXFHrokPvbWmzk1cFXKvGso",
  "key30": "325mZDmLhmQUeEiD8wDdo35tkHTUUDTQLbDght3gpoj5nEaNSezqL2Y1FW2ypQgDPaiazJSV8S1rq12A2ZVpf7Tb",
  "key31": "54T6pX1N2DpesFPzv73S8Fid1erNV86RRgj1GjrYgKfrUs4TNCkWRfaiEXb7ejpaMvfwNAGUAHTejiR3gg13MXVe",
  "key32": "pXbjduC64Gs5AxjEaufi6ZuixNRtn4enAXcvJjtAckRtKBrn8dXKqrbnbog4qLTrHcQwaBy8BXQyMgrqt1hmAc8",
  "key33": "5FQ7B3N5GoU8y6FSrVKJ88mDtWefaG62UBdoZenwHgosZuWyrXpozf4Q4kcpGZqvLxB9yonomFtAiEKS6iu9rEqh",
  "key34": "2GBbHKKi5T93jgsCmod7mXbUccdczxbnzYVzAWbgnzqC7Whpe3S8cJaiV76JyqE1mv6LuhjbSCT2YSCdLMCPMLoa",
  "key35": "5UaJHVESEhkBYMz1khxK39tmbu1fCSRhR87RWnvudeZXA3zjrKNsWXsprRPRsjCojU8NM6ZnDu6KZxLLYVeS5ry5",
  "key36": "4QMGGoe4pRS4o1j2EVCRUpxkDbZpNjBdxtpKQn8Ymd5B6GJbwtqVzukUHQMn8cJW3wqt8TxeSrT7ZRmKWwu1Fp4S"
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
