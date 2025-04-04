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
    "5TvsrojrU5bBvxBLFi4cGKyxQH3YuzTX8d46wLSZasJpe7TVXPb1KeTmo2mh5m4hJPnmawJT7iQH1wYTwhZJjLz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWnTG6KRKCRhxt8DwMffSMoGp2hExJ7AkkiCsoiiD4SoW3Zpz9XLEGsabGYXL1rtXypz7k1dm8zNSGSQUPfDgV",
  "key1": "5o633XuGYXCzpjkuFRqpS6uiKiVRksXxPzSXN6phA85fQWHtiANEaQKThJQqQebZR5syyoZWTMnDCNfLrX8zFj2i",
  "key2": "5hvkH989pf8BVyzaQkpKE7NrAtakYvJ51fZjtCHqtGguruS84a24MYTYPytTYxfrKHRBxTFsppwXzRUMyHXWP33W",
  "key3": "4eFePayH9s8kNQJQXnS2oSKUh2BPSeci6irbcXeJsBuc7bDaWGU9VbXmzDD83WjPfSCUoJ1NvL5EYCLn8rVx3yMK",
  "key4": "2wWuuCHfok7Kcx9ibXPndYQsSiSziU7aHzSLMyTcZrrodR2gkAGrs99pQo62a9FWEHuyWJFUvXnVFzKUCyJiyJh6",
  "key5": "2EPoNevDqjFmVZL4owSvxNiHc4S4RPmTF6RHBj7YZs4Adt7RLKvRDSN3X93J51qd5NYMvo8kBgLos8pJQzNgfmQo",
  "key6": "2tWeK6HYaLdz6sPXVcucUmu2wMrrc5F7BXG6ruUaTo5vx9dnWncmdnJHTfEWyjkT5afBPqdy5eRiQQWBZ5r5ik66",
  "key7": "5DFzDq3Wo4inKNscw2Mv4rozSjZsQVh4CoUqP4bxWRjWdVYasDZNQpuFfnmFWmVByToPkZr4j36rerEMQCHCmRt5",
  "key8": "4vQ14kYQZz5RRsV1paHZWVg86EsDS5mjKe8QNKtaHURwJMitid1wF2t531zqMkcEhiCAMfa5vqbu2YLYvHAmMWyQ",
  "key9": "jWHxJkKMdFdftv2piB7GYpA26iMMvfrq7HAuXMAj7rHcdhuiUV7vUF1x651NmC9TLtp9hYeAbwEJyKGzew71Y26",
  "key10": "56LTNUvm9kXXAgAmDwAtR1C7iXhNJuV8iHVsaJ24wJ21uHH966EzXcyzpoN7mjvgrCr9N3os7yXabKLKRQEgosqy",
  "key11": "45bHCGZeP3yPufC7e9pNJe5DejGuZBBiw5p5ExX8xCFbMgCcPAoFTDqvZzkNeg7SJVBUmW6CHZZNcKDbfRWCkCYm",
  "key12": "3brvVyKQUkZwHh3xryVnxv9RSgh7RDDMbo5BQzWZwZ1sZTDuRoXRfdcGCgTCeyUB1euiL8kVmVjJDKhRwV9m7yr8",
  "key13": "3sd8jMAJ5Tm2Wegi2KqhgK6MLDXHgxnnLFomjr2oh7w6du9LWWyQEUpQaKsehE5x44s1r2TEiYxYJ1PNZU4YCxxn",
  "key14": "2YLPGA1tJhVyYuT3y9F54fhT17AX6BcT3kWJoerMPtxprg7CA2AxRRLr1yVFEjMZZVMVqsHDo1JWUrjkpiTy1mcb",
  "key15": "2WwP8fYDCNXmQPzLfw4FWASqdMvQfhQeHwELcfvmy8gcPVQhVCLkKmCSPtJ3eBdpfg11t34rHcZsUKvJ8YyZZ1Dy",
  "key16": "JxtYYinG7d9wHKLndxfna3nAcdAiSR56wVuCreFU1zeM4XWjLGVPobJPNFbtkVLeU74vaDkPUmNw4dvqZkkwimH",
  "key17": "2SD3g8naBgR2APfjjCgvWXY45YxJHRdThBnHKRgU6D1A3jDSsKtusBv4RgwKYev2TgZ1baJH7QHrL3QYJfoG8DSX",
  "key18": "4HwJrKioxaGHnbqPPEQoz19GvbndpmGzvvFBX2mjpjyvqnFBPrzxo8PqCPdi6vvEtLT48av4RbJx9GXfv9FRmsix",
  "key19": "4Hocp9FVoCrenDCfW7g14DrP2vDAWovf5wFmZE279ncYGbfwhrefpjN2MjuHFtG5oNanxiKhUw47k8dgTQi49JNg",
  "key20": "2wkaiqmaUnEeG8sE13J83x7wmVQWdfExqydgkwjTjqxwCNKt6ky4nV75DpMVApJrME8UQPhGvndSV1KGjrZrhZRB",
  "key21": "4Upt7v4UhoVyJNKwR23NWCf56WnBifZmDVLrjtg4aJbFZsMyuSrGtuEEd44yNshWJZfdwVX8LPgz2LybULNQpXib",
  "key22": "56JGFo7vRMdqNwa1eXuk13FczmXV3nGRqJheFpjeiZUwguqSeJUGFA33wUUKL2nTw2jZ9SBKRfvpaxcCZ9r5PYuB",
  "key23": "3mTbv9tmPTZ5yzCiomhN6JviodFG4XBhrXAFssGBbtTLKGhWJhJpBM5kyvqEPZRdCFLkdPv1RrQvSy1yrsAvUUym",
  "key24": "5hARQfZaJqxxsL6AxCxdijkRHUzbxvRzNT6LXztGUB6tDYdC3LHHTGiiLpGi65vmc8qKCUhHwMAX1eNqBLVdp1Kf",
  "key25": "2NZ61agxc2PoEhbSFUFfnrszJoEXt4JmYoJegi2WoC8VxmhExFw7pdfeKmDS1pzmJ1tufFse9Jdpip3LimGmY82Y",
  "key26": "cvtC3VYh7pdEuE1vtfoGUPvkxEjQhk75XRyDYVDS7DNc6TTSdHk4aozoaXzBfchJz8P1CosoApZzEwzMVw2p7e4",
  "key27": "iX7m9qYoU2tWpYuQQ4CzuwL8gx2neiSPYb4qZPVaksw58cUwfAW5FJNzqmfx9hm6ddfBySwot1e8zyjJiiiwGQd",
  "key28": "3q5t8iB2DSZed6Nhcajfr46rnYoZ3hqP4yHmf4YVJFpBPT7AFkuW8gGu3fRqVKZYPA5xNAtSk9TdDFrM57dxnuLf",
  "key29": "4UPGfSuoWpnbVPPumVbCjhehojEmxUQgNxyswNi49SA5nWAN1uBfUr2kBZexdCW7REZQzKTqn3HViFSJU6jfVrFm",
  "key30": "3juNAKS185CN8uBjbWSEvaCGHLCqNDES49DpghLRL28be5Bc73rXpvDa9TmrNf2JZ96eHujqLc41WiDLMypoiWpx",
  "key31": "54uWYhbJwfFLCvgTPS89ZYR1t32z2ft3kvQpV6XkQS4JBv2MgqiQKyiwk4djPspjx9SoGchhosnE1VARsfJtRRwn",
  "key32": "4btastjbjW1Ydj7mB5b2XHrevSFb8nveH54kovChBVDUn96L7rnwggGkdX75X6MGooH1C867LJNB75UoP7RKkWWg",
  "key33": "5VfbT85SzE8zYZLnjLWt8HQrNzvqGRkyNgrWRDEJLc931UU1pCrMk7BFkRxLGBNoXjs74vZTcnTxUeT2VNMsRwYC",
  "key34": "2YaQqfpLhjjkfYquhzfPNBHLu15XPysLYzp3GdcC8Lipz7KLcSPpXpc5osVQneT6a5iEy6HMQGwaWC8XG5V8HmGH",
  "key35": "5eVxej6JsypjHMt5rUDZ2ZoJv39dtwaLX6Edby4rYiiuU3cA9jScbnVny5fstQD8DjyYmBD7PFbVJd3pWBWofEXt"
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
