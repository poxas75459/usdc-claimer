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
    "2Dw9D21111R4hGxkSyqRfadx2vQJh7UJ7G92SUkHMYNicwsDhfv7zCAci2nZLuxSfXS25duyFgXmgKLgRdX1Mxhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYJcYFYpiUjT6byecfNzoTbR4NS9HRUtqYvnxFzHdUV7KVDRyxjN5Lrs7mdmzN1kRG91nbRUvupxqQK392i1QoD",
  "key1": "5cGXdqQtcYEy9u7L4TLEjip38rrDXgeAC8M3EK7bZFSBnUjBxh7QYpjhEXw4HtnZGmnJ7ShgQbWyJBQAWqRhEUFd",
  "key2": "5VpzxWnaGyun2UDneH6b764JETH6UiQybmSrXuEWd59gV1mRtUSwUDC8BfbW6mHj2tFqRdzugntWXHeE3eVnudUJ",
  "key3": "4Bc7GQge2NyeTkphHaTa5xMouhWTkvxfECVVLmAmXM1pUUPLpPVmdXTXULwsuepZ8tsBy3oeLdX6ieM367qiWrn9",
  "key4": "4kJXPpxLwr8bh4RJB4xzny9DbpTMSRuUnRDrbArADogF1f8aD5dCHw9b8FfdRUy97aXfMj9XTixeL4rjpbMLccaY",
  "key5": "3TvXkq83xhZuM4P89FxuTQDwnkXjfmwWZGvwughMZpJgZhBdBCCxNE9MkKpueriuLkSqHu3S25HKKMBP67xmrW41",
  "key6": "HMQLsDFn3Qk2th4WigFsvhbvm9UhUPc6Aqsq1Rr1vH7dCMMD9UtfoXrieBkCsRiwjEzfrgtFGJpkiCtfx4JwKFV",
  "key7": "4X14YAQqMbm28FybrbFs22nM4XBHatGprPkNK4k5skoWFNGWndWFPZ4ibJo36jaX1Fy6gcWNUb6NRsBSseJtgAJA",
  "key8": "3xNscCi97YxEeGnUY1EaVVrsLqHYoZZFW1xzH5ZnB9XKVDmPx3gUfLT1GxQaWGxwuUbT1EPJkA6Q3jMhNDdgnuYa",
  "key9": "4oqUFMiim7d5MxuxMpPTQMqjv17MtkNWc5DYQ6oMi7wPva1CPYGpf23biQTboyU6yWj6Ei1oX33p1ACAATPgvJnM",
  "key10": "32iMUZzBGpeiU6tUAEh6nfu7JCrmjr2dwxUonasF6yJqnDfN5Mm3jSeoYouiZKC5yJ7LP4VPvMG9hg7rweNC68As",
  "key11": "56ckLPnUm7TScGYyhrHXv1kSeiPn11cduvpTpf7qCTnPdimNVim1LyxUi9p6EdzatG6twZaoaAzjorxuJrtiVKbS",
  "key12": "4ykdAydAqqUPEacCur3xkGVVqjN284qcBHLoRbWVxJ5rL8e4xjWrnnh3swEHGJUqP61qYwrZGGjgTHZQjx8yaPAm",
  "key13": "4NibbzHAHnm6SNFeucLKBhc4GsTEEoiwVeaiFsDcqay3CGPVEdwM65CS6Gi5xtWHJkTnuacnmPdNqdSnkuyQSqCA",
  "key14": "4QPXsTUQj3W6h4tkvGr95nwHjYD8vRsUyoNX12mbw9pxSmb6YmwRFFFMFUM3FczeRJPx5epV8XJSawCRBGsJkL1V",
  "key15": "2jvhvfjHS9eDj27ud14GyRkUCHeNjAP9ryEPSL64Gzjrq8DKgZqS1MQWoWSWmQwzAmvUiUZDNSvCNBwCN3AkCcuS",
  "key16": "N8e2sZCviyzJXVj1YNeC67o7r1jF7E4Nxon5QMP1BB4jZxYFTwtvdNqv5pj9vtUxnHhBDhBoHNdpf6R7aCXopJ5",
  "key17": "46RmpREbz2ZGiqwU4yZ7X7SqLkxmcLKcCFSqmvWiPCYj5DGcFJJsWJEm3gsN5D5SwW5XtxFhWFczZXnx43VBP3R7",
  "key18": "4Vw8RVgbqAjwkzA2XYorTK9mmCXNs8bFpMc6DwsSSA8SYNF3j6gAWYQ8qQq3tvzrx17ta7XkCe9BHvS4Qj4X7cM1",
  "key19": "3k2p8NjqZZQmqpcqo4m6NweBdG8uGu6D42muXVZuxsfRgdeFdBV3ynZdeDWG9Q83nBJbpeFveaEVrnkvhzenp9sw",
  "key20": "iRnm6rVwXgwC7oAoyaRaenXuAt3dembfyxNaXE28btP4ZU71vfGfUeg4SSEXzsyMieoipnuZyReREseSvUFKqQJ",
  "key21": "3ok5irf2EGoY1nE5qCezXfrBBpsHsGr7Srf14ZnmQkubASpwhG8iX37gdGwyWFvqXMKo4o4k3AotPEVatLLrmeaN",
  "key22": "4zmewAqRnk6ybmtA6Y6eDixpN8tQ9AGcC1TSBbD5GFS7R9Whbvw1gzwD6YetHj45PifhgStcXwmgWqXSYUPyyV2B",
  "key23": "45kmShSPQAt6YQFCmfQJEdDmcbaQ2xUpGyXGMVGSvHEf1KSWg2tu8ux2gzkrASFqvBLPvWQ7FuyAtb31Yy48JpXR",
  "key24": "23E8doG7kom1uAn74RekLiW9LsDVEULCeuf7AwSoWqsCPA7XS2wtxhNwgSSQB8dG84dkg9DooePPHx1iKjHHFxTb",
  "key25": "5RnfMHvCtomitrR7AvopcFshGkDRpS8EMfuwYQxKPmiEqu5BntSbWNwVYsbX7zZkQ1y1F95RqwgBwjzNBBzbUbds"
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
