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
    "2HjyZaLCSj5D5EEGW8m5CD6Y8mH3mRiPU2CpyZAZ2tnK3C4uRCWjKPXJ5q7FahWWFdFqiy3fSna2XVLvsjjfW2Wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Jday2W6raN6veUtboQGLM1ZdXe4aYhdfQHoXmLjHXne1yr7WfysnFXU5GzjaUrG4SHsp6NqDxjKNH44F3JriC3",
  "key1": "5XdyELfWyRg1fXAxtsdT24zihxdQxUv1MjAnnDR8Dpzu6tNCrat3RbgqXFPe2PqB2U3Sx291YRtBKrLjeMyViyYF",
  "key2": "4V2xpimPAqU7msCcxV6F5yDuAPdPvY1j1WKYawNZ7DHpeZf7WTduJQexcWidX1yqqnmwL1imWzUmXFvSvdmYBa6n",
  "key3": "2TRw52yDd27jyBivND5vZxKENdk4b2EZcpyKu9GU88NJwRGonHFd2dtE9UYRMikXrBvFWeduk8A3tAaL7VgaZQug",
  "key4": "4TRvj5xRknpgo4WDxjzRDxRt8QQrRyWAEFtGqoJC37ZpRz3M4Y9v3ck3bCFVuvm8AgjLDmhtbM8y5a9KXXPF8RKD",
  "key5": "5iH9bd3BfzuDM21nk7pAhoNNS8KSJ62JMJQmBEumhVXegz53Vahug4i3e9nQ7MtChaeBeN3pXkM811Lfp6uDTjMo",
  "key6": "WrDYVuo1zNGDHD54SDJsmuYQpzbMo3EbQYVGhLfU1hExUkdyDqbzm8yr15LJcXYymXYtqS1ApxiPbHkY5xPSECr",
  "key7": "25HZhJwCrSLyVwUBUMG4AQ7SpPg3GG111km7Xwkg6pWaTwQyHDTMjiiFj662ByRfcQ6yYvfMGMoRBwJtkffTYLYS",
  "key8": "3zvEinRtz1SRsBH4uUf9iCaKZmvgoH9EhhELVg82vmptSKHmeiznUa8kvZ65ycVFCjWydYBJtPpCAgXPiQdJSik",
  "key9": "3AJRr5cLhKFbm17iKKzPb3TF5fUYnvLJKzmm4Lck4aYYaJHZzBNZiFmZhpFseVFtfERhHoETNUdk8pXRNh4VvGGs",
  "key10": "57ybEC6YZJhBk28XLyTXBdbQDCxRwEeUd2BrjNbNQntxQ3dAPYUdCHNLaJrWCgEi9H9z73z2dwaYycxXrq6SwyPG",
  "key11": "ifkzzWGfb6uUnatxk5GfytGRzmtk6Mt1VejKFnwWYzXWM7MEp4oAwEEBPt93mgniZ3Jqq8yiLFPyCgjzZgL7356",
  "key12": "2g4t34m5igfWP4622hiwwTBgXmU73crEtpgPQWGjhotg8RrMDRuo8FqNu3Uy5ZNejk1LbyATC5ui6FHq4Tad52XT",
  "key13": "3Cpyei9sT82kXKhhVH1RX6YG9FBJEc94jpiKbr1w7xdNkRLGsbkWSMKrpUiCpXH2ZBEoDL4215BzLy5kJn94T9xH",
  "key14": "2WVq7So8c6MmF55XnzwEBXjY85m5Xz48Jf4Q2JqtGVzYCjiihH89ZkKN9LEjRBcD1eBP2mvfsE57Z2tK4nQPi7fs",
  "key15": "5Uybex2p18A5xf3SWuGzqr1cqBh2eERC7Km9oUhek6gCtkfcK9wrW7KBnF32UiaTwbd6jd2QKzYCpph4TA4HgmEJ",
  "key16": "2tgZyoFicCrQBNhfn6dMpd5rv2xGXo1gz92kcXUSP2it3Xgwut1ap3SciMmGkkZx9u52S8SfemwX5RTmAMZSiAjs",
  "key17": "2mpcZqXTeXQS7HtEBNWaBhjXUgrRMc4uPLcmgrakPfmGZPgAo38zj1xCuY3VSLmVas51yFpGN3jBbVh3iWLXvHit",
  "key18": "3ZhZH3GhWTsnHyUQJ3VE7j2rmEi7yAUoAM5mVYeyko9CPrNiFYjhdSmwfANUM7CQpV9zBqs78C4MbghRttJ5DDfp",
  "key19": "4izaarvysaFZXMNuW79LXyrmE24VaXKp2jUNwUp8FzWgBrgqJWP6bmMZp6TPGSvUz1xiWJJhdFF2dRpwNVDPCEjd",
  "key20": "5HETxSjKqgwAew1BwKehYy71DwZzk2Nz97X9rpyKvDJS1PheKdJUqKi6bzqXhUamxwP5kQWxUB1twNY9RfzXpEei",
  "key21": "2m41Mh7yLYFe1r73UgsSrnhWZKwpbpRarmJoHyHocJEXvSkAK2DAuEypFsUgv4KtpoKqXWEeaBy5y5qnzVzS8a1o",
  "key22": "5cq5SkyoPb6VQwN6GhsAVUGiKLE5S54vLga1xshqXv4ohDEyrUqYL1rdvbceM5YsxtNyvnFmcRaeXP2FKpXniv7r",
  "key23": "5W7yJAbXDevZocq7rk9qr9akSANPWBY8fXH6PJKKxTqMtDfscnqZBHvXve7yJKZT3uE2t4gJ5uA6xMAXsaYARvLU",
  "key24": "39pTQB8GHne8juBF9F9byM3ttKzW8K6re8XiiuoFuvMLYc46kDVfjeA6KGwgNFLdi3pKwxqqY9KoQTsTAyo4qyUy",
  "key25": "JEK3T1iASk11ic13Fkcn19seZpiDB78z7TAAnn89gSs2MRyfGsWrYWBn22bFBE2j7bgS1PeJxsqeL9TTYwAwf86",
  "key26": "2bn3UztkQJzHX5WEw8eB2Hxf6Bbqxcw35QQCZn5xRQBuy6QRkgmbJKgS4vKnrYnx4kLtXrGrFFw9bpvdhswqECuA",
  "key27": "3hDKQz5fW5r47wB1yricXk7dW3YN9tH4ic53rBQwSDDBMHXpD1HMMU9CRcitrkKH5dVj8qB9ZZS9XdJXbU12GcyU",
  "key28": "E5yhCrX23BPMbskk2SrL5voaSS8apv4ANCHWVeT4jprg14EBxWfhEJ92oLxWatJkoTSG7RgQAD2LLCpdQupKAxG",
  "key29": "4htkC7rG6Y9vmSzLDcBqmPaVWUNjxzugMw1FZ34DNSUdy5nuQusWdZC5yY3JiicaCjFfwpRoRF1omoaaVnrYWrw",
  "key30": "58bfELxofEd6btVDZiJVJJbUoFJt1QZJN9XDQZ3ruKruGuiYyoLosKbWkGEt29L9MAHw5UDi5XXLuGqroFn1HTRz",
  "key31": "gp26M5fvCowEDwpgwvgD9EFuHeMUYsTqerHF2EKBqfyVz3AjGYgQYH1EevbzkP9pgFmz44wjUSkjfcmN87tY66j",
  "key32": "2ZGmqXttHrQY8Wz2Y6LzBWXBQCGEVwQa8zRDB2Y1CwGCEGbMMX888azwpFEWJr5kAF81RMmt59fSEZNgEVYtstYs",
  "key33": "4zcbpo2ffJkJU85KffH3UbwnUirGZFRbf6fDHpX8UEgu5RihUA2bbNVpPHzs4J4Q12RGQP9Zb5i176MSqtRCHxJ9",
  "key34": "3uaPLKcztYmtcXPkiZPvRpPiEDVBrYdsUAAzhBVLysQ1f1E7TjWCbToMzAxSaD3FcdmmVh1YKdDFUhgrFMDjKk7H",
  "key35": "2CZRNAUBu19YDgdLjQiN4UvqALrbSEqY9RvUcWwjGwtjrfyQtcxJxB4W58LE34VA1LooswjcjQVQ9wV6q59CoFAM",
  "key36": "5ZAJtJEfo36y2RewwF8rtZ2G6npfvyeB4RuvDC5HUrGvFdChudd7XrNzqt7qXLrsvKHMo2xV4sTF68Z1wDSThrJq",
  "key37": "2MEAb4yt2aP8QivoSNTecRm7KzqJiutZW2KdMgwXUfc6oGLjoVBwvLzEexFQir2T4CvL6MTDuD2nNRXN3ZdmTWCu",
  "key38": "2VepcqCKuPjbc2PQmo2EGWiiMXRsRr5Fn52ubYAmD7qmnW7N3Qju5xq1mk3pVK6XPx1wtKaHJuJtu9zL33yPoDSK",
  "key39": "3VkV4dEpT2xXTj9mpNWjiQcbLib4MiJ8wiorXgYYRDVPkUf4ernyHS84uAWaysmg8P6mrgh6oudFHRni3z4PaYN3",
  "key40": "5HqHFGKjy41fwLqCfY3WBSdRgQ1P2ALs3j8vb1HjDwHBMT1i8Jds5YMHSKKecHbSEPrJ57ZugA3wmfUm8NfCZSzx",
  "key41": "2LeZSKcYSwyei2nAtzhpiUNdfoXyPgXoTK7zHHua62MUbac9De7P818TdMKLGXduUZgYM4iJkPDDkAaRj4tGLzLj",
  "key42": "mgpJ1VVkhsVWqWQrhxJycsXVKeWfzxspDiJc8H439jd3RopJVSAdhGK22uZiyWe8Tn4yu4VUVMWWnvkfessgkqa",
  "key43": "57Q8KveYuhn1VHqCh34zkGVT5QcAGUMe9fX52cxFYFrjFgNYDFXLHXnSFTeDevQtsxBqb82CZeHTb8trmnWJUX2j",
  "key44": "5BJNCYhjyYbT3EAPwAqq8upLcgC2nzbjKfPvfKELmhWVFmDpHycLmeDhyt3tzWbcS9Y6xfDKQdPSUGCaW8gkSm1R",
  "key45": "4ieUUnR1Z6nXYZKu6P8jdCWXZwVydL9ujspJbBemGkr3wzNHJkUgZNgBgZ65WZKSpRH2524A8ZHGJmWLYzhHD6SE",
  "key46": "Q9j1cpZucrDuHe5qVZbvjiGLZkCGTJ98ek9o5zKep7MefLbkZFVyxtvNEF86rJmfmfAgqqndWj7hpUw4mNy5R6N",
  "key47": "4gjPBsEv7zr2BmdJdRSEpA6rUc3zaVnLDmqhg3oyufPZ63RtkPP54oozXSJfnfKxvsPScVCUivkSoFTtEWkZ8deN",
  "key48": "5y5rjPWmghYtbcrCS6bMjTnCT5afjGCSFYvkXi9uW56UTnaUNSUcuffMQsuGKhG8GiHBUexsZMfrgyuq7Jcd5kGB"
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
