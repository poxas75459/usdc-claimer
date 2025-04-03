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
    "4Nk4EWbExQb1CDsLxL5N4KGyw69hBrDJ1o1BN758Lb4fNNDjdkw8FZAr1ALE8BxQPDUNniMfDZnGQJvRrTzSasid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJd9kog1JeRPadpSSeaNBoaYB8SqMDvNfsG47g7HHs9gdAN5S9Lr27YFEfRat4LQMdsEEPGBi6h318gkQduLaL2",
  "key1": "3Rvjt7VVTGaoZSEubNt9vFRS4gzeKyQkcZuSdAyp9TBhiFdNXveU2DaQ1qncwEcFiwWLbkYiPFmh8jviLPs1Cb4f",
  "key2": "3uTqLG186HDpxNazu2nuseXf9x7zAXoDiN8ebo9S1xD2Uw3fsWSXYY7q3mEAmV9c4sDxbUfWhPh94DGaJYgngZE1",
  "key3": "cfkGcwMBfWPZwxiuXjnFdxkrBgQWH2fetKMDYN4zchT6P2x91X6h4Xj3sGsoaxZDiQgWKMrQ98qFj8uGV3Xx7CN",
  "key4": "4rxbQo2AhjKBfzJYc9ayuj7AWZ7AkTGLuATuH7csnzx6Q3RhFzCUPpFL68d4UZgsggKMjd8t7wCtbXBbRGmzPqGF",
  "key5": "2pxpRvbdEbyWiRU4zqypkvS7bRDUM6VrqQmuRRaipjDF163WbznGUWwm6E1Jq3yMxrq5vxAmk1TStGRxBk3g2FWr",
  "key6": "55UdAmcChVuvUn72ftEci8Zecc8vcsDMCqGkBDUsb8h6R39DPq24ExsSQtYeRE3ZL19z6suPUsws4mooEBzDt4cg",
  "key7": "5FEhAemzdfFNsGqMWPocYoNrgBDBPmN5DAFJZ2kFQsxAAkpgJzrEvpkQGxjYNsCBAwF1kLZ8JKmfkhuSUcDx84em",
  "key8": "kqnnuifjxdNKjTpbekmbTbfxFh1qkd7GAaDZPQ8BELxbHCs1Qqnnw1bucjNvpeEmBXNZ8U6MTxsVFbhA4T1riDy",
  "key9": "2xZhNXEXBf9iWGkrB43N5pbRjgZLdCrHXtWAcDbYrVPq5HRRZDpYtjhoqZUksug5SL4YA2XQ3dXB9SDygrsa6ZYc",
  "key10": "3x4dWJEZJf8yb9sueeeWBar8S9AZ33sAVSRqhDB2ymaGVbvix7SWZEmm1kCJnGLcrpjb3EiYun9idGnnAF95VVDV",
  "key11": "3iPWvoUAigzsxFFau8WkUUzEpHerw27jYpL7EDGuKSGpWMGquLipUJzXQJNsUqijsQoBvSEHMPgkyqKjeQZVwPg",
  "key12": "4FTXHabkVU1XiCVWxUUUf8oBHoRnRKmhB5KtZFRuu9C5tV2eEN3KSWkZAdhbCpQfFD2YPKU9u3uy4QMe2tF4qQVu",
  "key13": "5DT33J9wTqMCCnBr98os83kcfJwU8fZNUxrSnzoZdQZD4FkUKHSmyak93ivw8qF5ywjwWDkP7d3WFD9tM9B4DTdG",
  "key14": "2ZtwbqNA2GwYUT9n1NAozhDP2ZEFemEr82xLaHs8j8Dc2kJwvqqTwoEzbTmc9drD6KAYzn3tU4365w2m47F5KVe",
  "key15": "4ZHSSUmkit6WWYJKRja26M7ShPJazUspb3vfnWS692Tz1wevJ6eLjRAH8HCkXXNDNpz6xRwtLRFhkKvz993YexSd",
  "key16": "5uVZ74SvkQUuae8mqSg1SLk2QcxvERwZdzveWzVPFcQLJGCUbxq8MV51VZFrY8VxRkjvp79nh15xvvx4JaC8gNg4",
  "key17": "5iJ788qzcYk2gejVZxyV8XMp8FtErqu2tVQF4V7nm3wcPBf9y9gtbap1K7XCd946KNoSiuqsdqGWhsAZgeEqCDaC",
  "key18": "3GfgnjNPTMBJzMMnyEb57tE2NEWxuCrntmVAtNqFXBosTj4cYc5sk3ywrGsNe6W32jDGa6L8zbGF51nCPoY8pauF",
  "key19": "4BkCtNwe3DfxQCovP8tHeq5WoJj3Ci83j6y7fNfey8euZCNCHfbpyVnf4MG3wFPJ23QdgiWihvBbcKkWwpQMHD8m",
  "key20": "4mKGmB3EBc3MBTyzC8dXnfRjkdkbRdJZ21kq3Wovr9ZxiEuYAtonosQp7sapqDkqUwmVhDQJeRbHtSPRC5G6DrGo",
  "key21": "4959qy5LeSN2XGZzcyBscUStLsZThYR5mfV98cWQT7CBZWGgLyfkM5B2ZhpXZtUBoLrbR6mYKxxpTGtfUMHhfA8f",
  "key22": "2JNwG91DT3bLM17V7Xrw5Gh2vtiBPuBA9Ctt8rj7avoDhxgpjZSC7kmeirhqHn4WtCfaqFbJPKVCQ1d5bvpVXWcQ",
  "key23": "2JHaFfByEAxv5UnbZSsyVnn1QTastwYTvsTm2C9kmrVq5i94QeajUxW88HJmjA9jjJnhmdeB9d9jD4A4ZedVgGXQ",
  "key24": "3wiEHKrxoGgDf4sUAMyWijTGvnQM23vGyQeQgasUqqndK7gsWDi68LSbXDonD1Hf5VNcEwjFK5XvRAcYdiqD4zLe",
  "key25": "5AAdM5T3ibxDjZaUBRthj6vTSrViUAftZcZrSxj2WpSo6wqtjTfv52W2uzUDbxBPABminYJKDJKPuwZ5g74b7SJY",
  "key26": "2GsfbEj29A29Qy3Pk9g6PNxDNhnoLPrB5r8Ntd3o1UmmZqhaRQc8Eu9wBA4gdaoCrQV1z4Rfi5uoP3qPzELdzcnZ",
  "key27": "2gn9n4n2oZdkCTiwhUqS9z9H5JqwnKxLa5JsLF6tkTKq9npvtt3Y6zeVKMwriBbJfAPZHrtKxxCajgceToGtF68r",
  "key28": "3DW7QBP9zRo8RgDRWnbGKKqvsEXpVo5dJAP58GscnzD3Eq93iBenvUHW7orwQEvZ4gXPBaD4EimRHk2wuhq9Vsw1",
  "key29": "659qsm79an1Bdhzo5hChUWPn8cF9kQig8DrcBXGubH5CyT9SjBkR69Nfo3qzSmVZyE7a3CR3fZ37kMi31rePpYKr",
  "key30": "E3EYTKN3ZDkbvYxwxsZhMA2Acj5wBvmtvPBpJzjT4tPFtURrm6rr84Hirp7YmkFfoRztRUXJiffawEECSXG3r31",
  "key31": "4BfMwYPLGpxhP3inxDhUushdSCmDFwMsHoWg6f9Qvxo1TJWJ1FcTXbRGEEfbCR95FG351FbPcmdxQJMT5W4qyPSs",
  "key32": "djKVS6LMwx8BT3T8SNVJX6zxkrAaNcCnkndH139qEnWsgzWRXxtEqQV5VeqTrUzyrsWTMn2iRPhMg6cCFsie4zC"
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
