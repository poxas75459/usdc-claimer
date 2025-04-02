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
    "442Ao53XYEtVRr7u1jNSUMNkPwXT5PirnGYMEQX97gtVj8GrN5h5HpLi4RUrDdFvEAyHTV5NZospuaAYvWyc8DKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49xGhL4BHXVbZMWKLzuCMHFnkEuPCwtzUiK2Z7xvcgmVDFKqdDXu63GNo3uyVWB4Re9u8fe9QBXXg4Ln9hRAVU9u",
  "key1": "53x7GDcehryd97pAQq4nRaSJ7i6x3Wn8kpodZxEypigh8P7VyATwJEdGJ6ij9JM3CHLkTpNQr8rXCNqHWHMqsV5x",
  "key2": "4SvLbc1navzkAA1L4mfQx6V3k5RD7CfQQDkc8zjM78Q9HGNc8gBNDxefPF3owY2PsPkXGwUPDFkPdwn7k2MvR1Gb",
  "key3": "2qVmFfFiq8vhcYvEBM1fYSbWUtsfQn7azae176sJLp8oJLKs4BwmygQn42mujVLJPP4W38utpqwYWi9tuxT74DSf",
  "key4": "5p6vKQ4tUftTKopfVcLDMoocLgcSx3hMCHVpxKZFi4ckhve1i4Rf4vSNE8muzvk6vXK8KNp3bdQhMGiSys7P9jZs",
  "key5": "5mjqxM15ZaHwTwfmtNLt6T7yxhNt8ck15WxK74L1nkqmuTicHgWZ7B8kqDdCTef1Fm61UzZRGwTMd7zJcCRNTCVs",
  "key6": "46WDBbJmD4zSGfK464S9LpKKiSQGBZdAPSSYrWUk8FTSzMYMkAm1nV6YhF1UX9e87wZ8zJiKgTGqEMReRjDb5RGn",
  "key7": "21TgZzGURn5cNqE1e6FUEQMheqmRzErmMFPMwZ9EL2fWS7LUWzNcdYaXyovHU5byRrrng7JrUVZ2jzTTZEegpTCW",
  "key8": "2q1eQh22qRUzGyb2ZQweoTmQZjg3z6RbBVrbzKst9LNzEZX95waJRsVrNAkrDSWG3fX2f8fi1Q41WioGDzAn5hfk",
  "key9": "41NNYDvtrwm85f1pHBL4yfNfhviwz5m3diGFR9H322n2DHbXipiJHj6AN5tDZAjqgzswXm5vf39F2XUib3QdFNDZ",
  "key10": "4Z1BUX7KfTbGrk4TPiwqHqwQm1SarawgeD7fgZFMAcxVQJLrTKyUSoLf3a1Cgpbv124uhmK1iWrJACqxRMwjxXaR",
  "key11": "2dMjeoNfbj9U5TZRrn8qJuin3eeXpZtHzyK5jMPbzZQyZYugQJBWaCfYKm24sU9zqyLXwgxdfY5PaFurD9oabh65",
  "key12": "5AdAxwce66QTc4o2uYfwjDRvbkoCY4PEkvSa8iGB7HuJapDN2rqUXMc5GkQmNHsC6ueniueiuUTeCLf4yuxn4qE7",
  "key13": "2BxbsB2eiSAwvc7CBh9LVhQ859MFycr4z2jp17GasRYXFQaV9yy9mCHjqUYWZpen45d6ZJHkAST5i9nkmwrQYZaq",
  "key14": "wc2kBhrqcEQTwSWrZ5FZ3shtcdReNgA7dv5GetdfouZAwb3SzXaE82Wrz75K2vU9tXRHfZBT5xgHHYQfAy5rwnd",
  "key15": "4AJz3oWjw1CozHTiCuc4F5pFEZrt86vMFavyatg3TV5YpQhRYpRNrbNCKABreJ6MkWMQHP2zAGwwKdXuq2ZoXQVU",
  "key16": "3jNe25R394vwWVM3ZdsbgDhqMtHsRBFomdtxcYmtBRkwEacB21dXF1TiuVt1NJQUvVS9gqskWTH7ZBwiXnNf1mo3",
  "key17": "3KgbLJXkvsnYtwNerY99vfJJDuAwA8RGKfCz6tpcDPnq5N4Q9cxFT4V4wLFoWivosh56YkdSxJuhgCuMCh5Vu66g",
  "key18": "57W2nyL3hA35bzM9a5FEniBxN8Cp5Wy3nEee8zeUBoRDSZU9VsZMWskfv4xKEXJT69mzJSeL4r59w31Vvz6amquy",
  "key19": "4gnAd6kfmr9Jhi9NBxyQDgddyofUQy9otDc3yEdPm4e578Am8k9VKgHBBfBFJcc3caQnTg4ZofaD2TLrNRfpuW87",
  "key20": "2f3gvCjxCQZYqNHZRYhZ7VvvM9jXJ813AhhuxpKzp4TfZe1SMtAasPCYcHRSEBDUTVpv3g3ieCtdACuDmsZS2ffh",
  "key21": "4SX9a6b4Zeee4N2GYAu1jdTDNk6ueZYjasXSJyvbBvj8D4mPQ3WHjdqS74v5RTYeuAevFFMsKWigEUgNRD4wYVgy",
  "key22": "2ksSdBUCQhBzVH2XyGa72MuT9nqFevR8eVJa9pjt4MJz2UvH1S7AAYFDwhAiThE4Xz9HLDJjznGzcVKt7mbk5Zfa",
  "key23": "2DxBFFcgYiPcbkXWVkZEJwYb8xeXmKzV9uUEDGvZVaMmmAGNgtUn2SgmV4F1Z7Hp5GFfNEXUozbPJbygeN5WDiAp",
  "key24": "4cRz9voLB55b67PKyNSCjigoNr3dsy6DtsB3BhnokFZ9UTvktg5jfYkGKsGaJQWf4udAcE8YqboExrHN3H7Np3ux",
  "key25": "47j64szZjZ3BrXu3BCRgG9cY8fjRcQvzaaxrBDr9ZygqeESyiNPUyov6Z2Ymp9XVrGoGxSJk46XGmwSBEXpkysaa",
  "key26": "FqXLsNihdMR1vR9bSAwnayM2QkGjBXaNXcsX36XG94t5TVSiih74Xvqe6PjWqydMVcBJUJSTGhXxk36NyRktB4Z",
  "key27": "2YfMBxHyStsH3XMJALynqCX6PbZBvKsxwvSLvdfgp5opXypwiMhGWFmJmd6NXwMS7j3isb4iXh3qUSvAMkEAHT84",
  "key28": "5fUNMABkaKRAQACDwJahU4jboPYUSDuiFnS8jRxuBmPTdN53hd7ugxZFBhekHrG5WdGxap4Nq6BrSRV4qcbG6Tdu",
  "key29": "Dg821ELcwohCcR8gM1YP16XVsYsjds9c4HeahH4SfoqNmcWRboEtmrNzLWKzrGsfcjpSGJmfir2cvTqa4gFnweH",
  "key30": "3Qfg5ZBHc34DyAWyjw9LLxp7f9SVee9hV7ehYTNNHBuY3hi4WWMH5NK7WTVHYP1wUKdHRAw5pSLG4MqK9AHnB4FY",
  "key31": "4wX3VJyCzPYM9DWm1H5FrKUNdfmj4H3VmTMTC4K21BPLKRharaX9Wgt6CYMpgkm2piJHV5VnbDC1mKj7ZtvgeyFs",
  "key32": "31g8JEkkNsamwG4M7raPepZWmYA2aL7JLcUHebMpr9Domko4JhBhKkL5opqjxBaHKRNoN9EbMe2NdFoCro66ZnhD",
  "key33": "4pqAemvjUYv4spijZCxb1GwLY4s2KVNnT6DkZEDXwNZe2kdQ3bpj5TaJhYKs8RMvQahYcTxdMnRBmA2QBTTptM2H"
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
