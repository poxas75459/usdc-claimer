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
    "yJFd6eYGHeCQHL4LBmtthYb5neLUfXLU9C9Fhu2f2FCjiMtywHz8ZTpRBrEr9c84xrUfyXFkH6BjVa3PWzHHpkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwDAoKxX9Xef4dvxBfnyDFaenGZMopKypFdXG33GKcuDMB4kadqNqLaxk63a7sW11UvcaEzU91UAdVNvHomVPsz",
  "key1": "5sWqjdv3shjWuCAWxnZ2xPMqUvhf2Rd5bpn8Dh7PrmtPGh1WQp51BfFPU6b7AhnWKWsiUdNYBk9mZBraQbEseFbd",
  "key2": "2TQfqNM4ykigSc8nucBrv1bSDZr4M1Vn1dYoUGEcmUmcHfcuKUtZ8283jUioVKxipZCYwLYiVfo9F7G7QPWjy3NT",
  "key3": "3z5TDyFAsYAWa4vP4HSaRrbCfMeeuZ9dXfFhkja1W55KuPyiuuf24tG6ek5gt1vRbSqLjfhAFYWAJgRqdAp8WdGa",
  "key4": "2EPmWnNZX78EaVG8ZmscAFtucoWyKxDDV8VrHZ3j86Z2KxUyw5tHHttgrDJv6XG1MRttcZeZm6NSY4dakWA1HQvF",
  "key5": "28uXUYbR6UL3xdN76MzV7RZ4YYSsLuqZTnxFy2BWtriPnesaMLP7PTrLMdrbSQBJ31RTSpCZ2Vc6cWeK2pLZ3e4Z",
  "key6": "WJX14NQrHtXro392dFbxnagGhMhTXjKWd5xsYyWtvFSwejMyZYrj6vmquVgKSxQTqRMtLShLTQY2CFSUVcWvXpp",
  "key7": "5PrtbWe1uXvqJUBhU1Z6SiLkiRrGgXnyGpiAdi91EiP2USoTaWqZbrida97SS3JH2fcnQQaftzzgyCS5iMnSw2x9",
  "key8": "QGYS4LMEwQiK1BjkWoCJY4wwK42w3Lg5SHyFFgRGzDgBsnujkJ7eWsucpDf8x3523b4sEgwGJfhdixjZ8o5ZBRR",
  "key9": "3P6Mq4UBgKMsoD2dVrQszK9j8Vtds67a3ZKhPJniTjgZ28wVjAtojkPAeP84SfjQXMbiDf186R4xBdc8hVFdMMKt",
  "key10": "5QS8JubEW7utmiYyS2z9ghF2HvvSJi2TJbts5ojCPjxcQFVRsY6KbikxeqPLirtwriEB6JKbeUotb5gyvB1S9JD6",
  "key11": "2qrn2tY68aTu14h6YBXC6h2NeHnbGxcXDCxg5aHDUxyvDamWTAPz8NnD32LbSpPXBDS6iTN72da9QQfMZeDe6qkn",
  "key12": "56Bb4FggRJRDUaFbKHCeWDB6uyRguFuC4pJvXehrmAT4V2m4G3XmRf6P6pQQrjHRyViFVY4G4cT9RXVDn3kGfnjD",
  "key13": "65zbnhrFzg7GeBVU7DC6hDedEQebYY1YYYbmR3x1vaHx93NVGkTUKL9aNSqQWPCA61s1ASWexz6Q7XBTjje5x7Sm",
  "key14": "56iLdXs3BQYK5GC86sKWxA4xqtP1rQPcmruawR5bZ3MB8QyNZto2nTyQixDb2ZCvKsKWrDaD36LGMxeHkPyoRc8U",
  "key15": "2pgpJtJnepKV1SZsshXACcd5DCZP8qnYQHPsbbRsnsZ7LdfBg6evnmLrJoGUyVLYcdoJYwGhNmnmXFcL5jXNaG4b",
  "key16": "3ssgD8YaJFvWkUYjn3nzBoVZAFVHEhELcJSA1prwK1XD3vhv4fjw834AVv2VyjnKDWwhfHHfEQB9W1rGsNki4jGT",
  "key17": "5xSQdnU4TLaD2hzdHEkPUYjdHmkgjEBUiDXCQBYpHtBsrwJbj5VSWdScEEq281pQLbe57D5ADfYQe787tmcfiKXv",
  "key18": "494Q2dXq1kMPw6wic2khfcfrJPrEA73wCR3VrzcfnzrmukWoJzMN9Qp7T7s1hnRdzGQogSwwEvJ6YA5Bjj5fGTAk",
  "key19": "35j13JscC26jbknHooMRiPJTcpSX8tWEBpfDpCGP7KPZVMwVZE9DWbybRV1AiVCNQBTRGnARpiber1ueQwjqS3Xe",
  "key20": "2kmgapbbpmZicge6Yf4LKptzwzmZ9AmYfNR3BTWFb6wy1gt4mhSrAVYzfG6W9K7ckMtp48RiWcdnyvUf4DobcZTk",
  "key21": "4sqTKaWpxLSc1YooR94gfv6HWkUydsd4xd1WaxpjNahLCMEi9rLNiSrZ4qkb4Q3ATUtkGq9BDDfUNFvwVedWW4ZD",
  "key22": "2YomUem3VHucAjm7PowFR9qDugvN7xZxtL2pDTxRMk3oej5L2z66fcsD2Y3DdKRwBKSSNhKwDrY3abm465biAz6Y",
  "key23": "3Fc5zcebkybGrDPkVSmQ1suHrtLZ1qjPRX6ZXaZ73yGK5ck5uYpPnJ1mavLnrtZH7fL4uYA281wHgndBuuixXm3L",
  "key24": "287Qun5dQ8BHhM2uUbdeDzpk28gFGxtYxSQ8v6fBqDXcgCrPB5H9BVXwsResqjxwjiyHbLhnmUqk3QuugXtMNuGS",
  "key25": "4ebXuiDmgABmtkvW4k57ZMcqs5uM8GQyDaE2JnSVSoFm7rjfYJTniYsPNHnUFCTHA9dwdoNcRb9niZS79HCrAAyn",
  "key26": "5WGCAUYLywRFU3eCc5kXU4CDUrNRqCnFQXR17qt7drBGrTAPHwpu7CXH4JrydAYReCXcAftHNJuNVhM2wJ67SbCc",
  "key27": "2X9p18aF9vuh7stjgpyTZCQA5osrL1Eo6mPe44EKjvcfDWWrcsKEKnPdMd6ErogGKrbbhihW8aWgGat78zEnoMgB",
  "key28": "5i8oPm7YQE3gLxXkHLRvgbq9dbsoHtyQyyLEKvJd5Qzkrj2gSHoTYrme7sRC4DD2YhhKPhCQqXLXXJL19my63wpY",
  "key29": "4RZz8qwCMbCwsKbEvznaBNLmKMjNxVD9JbNhcXhnLzqun9kBGohfiAG8YRgtCxun9VyBVe5dNsxVxaz2s4EHWYZv",
  "key30": "s69C9u2JKHoje7BC7TwwoLiLwucESkiHf8hpogr4o1keyVYKxscqJ7qm7bH4N6oQsNLgEProKrF2BRBRRUTYzSR",
  "key31": "2r3gsw137rypycVfEQ3B8SErhQuZ9TeMxGXVyubg4MfzDZaWFBx3785v1xYhRHc6xWx4uX5UWYFEikMXWHzx28RM",
  "key32": "5H4Um9gTYNN3Sa5r5nGYqUw8nrqLdYXnb1AmDprudnZSeSKbX3qSSAr2ZiaVxWmhSoimjutkdaYHRvANt13uro6C"
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
