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
    "2rDbfkARkqaADfwSRWEY6ycpro1mpuSQCmpqSgVvhoqFQt5fmQuUD3e4KRbJYGBRr5TugUzjxGtHEJmGWyRC26CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3Bme5grqsgjg35pScswMrn4XzDQbEd5s4UhhadnidXiygSZHFEcH7bxnCxSMdyDumMBsd4Fha1KxBJVGGvGx4i",
  "key1": "7vy298M5926PSa1k2amdyfq8hnVGbYwzgiWZNwjM7RMqLW1w8U1XMvjdczyuUr3wAZdxBnDdfoBDyt87NeE4QpB",
  "key2": "2zDuwGFe1AQRLk6ovaDWTPSZkjNrbgFoMkHFWUjKMQKrVYfRmT3wXyRk17Nv95xH6TtmuYuStzTS9xPYZBLESgEa",
  "key3": "3M4bPSDRv3qfJtxnePT8awBYTypEkv5HbzQeCKycBUjKEx92t8Er5MLYGj6L4zUovm7T1sSJTy6oj85NkajuMRBF",
  "key4": "vPz9WDyxfHMCHUw9xPo76YjQTrzACBwFUbg9MupazUuWcbyxZjfpsNkE4dLWJ1zbtSKsEuygYtuLKvChE99496H",
  "key5": "3EbADAdsYJQqhbf652eVCDjF6xxV6zPPzssDNykU9DgLpM7wcwar2za9Ttn5XfNt1NmUSM3wvjKn4ZJwsZjWw1pN",
  "key6": "3vzUuENDEHGm6UTm4ftziQumHfpk5JvE7T2TX9wj9HfeLLXWTj1JwxtV9imasiTGW1pFiTo3HG4VPF5AdGqNFE3Y",
  "key7": "5U551ouiV1RZ6Au7dZyGopuHPdP9ZhNxN4RJovnpNG99zkAciieWZbz7Fmtd1yUQfw7aVBmbXf7KyBVqTX7zK7nB",
  "key8": "62CGEkhmKpsDXPeYrPSxpxJYewJy9112ZnUPhB7TUnJsYgz6ZsbthdLxDT6dhEs1Z2tvhU8ymPbGH87eAVdr6i2P",
  "key9": "4sPDbSkMP5XtdewT17h6sLxUXaY4HXa8tQ9Tbi9zPpqpsgw5WfgwgzRWt1udjYQCPdm5J2WhHk2V2EW3CGhYzu8A",
  "key10": "42TVuDKAg5ZZzDvPaRJcUFUUYZTBheD83YJKSgwM3oRwqqDLzkgAbyBTtX1NWtSPkrMBhGqw1DAc4hKGgz2kKQWe",
  "key11": "2StbGaSovVv4v6ErNfn7dAhQmXX5YJ4V4gneyHs58YTfoJsK4R4wGu1dBxafQyG13cLihVKH7cXk6r9ibHHxU2nL",
  "key12": "3WzgqYgMxLoVXwY5chWAQMvt2b4yKsrm4aqk3XsALhLQubMi4SKb6jcWYjxhR9GopHwLeiVtjkedUX6EJ6VzyViH",
  "key13": "4R8DwqTU1PXDwrCRynj6SUaK72EbuD7Rs1ru4QC9K7KML8ZJCfM7afVzaVQh6ztcWrfzSSRvjoctskb3B8G5x2aX",
  "key14": "57UNoemH1sfRn7uhdBFu71bVCtGv9RYhNNaa12dNccDJ6kq7biS4GXCrsCdwrjCM1z8F2m6ANVHa3e551bDaniqq",
  "key15": "2SP3RJ8Ldbo3pgpZMpXxzUjQj9MXXezXTgMbZYF1WBeA7537JrFaoUYFHBjnvTG8hZRRSuKJi5wojXe6zYjVoZBR",
  "key16": "2N9znKaF4UcZxWcpL4sy3e1tF8Hp44M8WfC17ckKWkJp43xGyzn13GVcrXoNDFAChdWwuSC31Hyh8GmYD2bdJpro",
  "key17": "4becsDVT1xMajrCXqr7ys1Nfphei7KQcUiV2QBdga9ezrsFaartdvxnKyCv8EeZeSd6yg6QHWQ5FzEGy9rUqZcEz",
  "key18": "3DsjQic2gyMmBrR8nmS2bjs8eVzYCZbB7pXvK133cDq6NzXx5Gkz813oRcYQNxCVcnCnh1rsBfKS1onWSjW6R1ia",
  "key19": "3Wpm2ZsrXWjhaUYSW3V3DGMKauajWdqxbpuG1DigNS3dxickqCQGcrtVjDa9W3gvzY4pHNhoekLEwUZLKhqebHv5",
  "key20": "6G8zJxKL82TQrq9qsmtTDRnT1YiGq3y4H8MNcUq8DiKTnW9gysEhcZqQs81PTRmJRrEMW9FUh48WWN1477gCbKr",
  "key21": "4pDn5UmxqYfLp9CHxs522Ggk23nuEwJufp3cad247FyJHiQbarxb5geALWN8i4jkHpo8JU2Tm7N4f4HSJ2YysZh3",
  "key22": "2odRCitZYArd3c4chZ9sJA3WvKn6p3KhVuor4bMysAEB3TAgwHocKFoThdB3QvsFWN54dGc1u8Va6ELXnTPxw7VT",
  "key23": "52DHz4W5oYidDHhvWGjy9UFgAXXHazzXuXWgC4xhB98VfW7tDxfUoFXkpKZ11vYEqd9WGzjpVuGGa9B3AmPU7vEs",
  "key24": "2kU9s6pWT4hT9R5rQqQuifwvFhrWeaDZJn87LSyzsTRpudPyNkxJwyZqGPd1z9uBmtuyew1TequQKuMp1mniGMAp",
  "key25": "5vUweHNPzeoZHAjZmAJw7DRLjGh1zWBKzem8oLeozRerPTRYz8YoixcCs5zXf4mrmAephVZD1AkG9bndRtSdeeWZ",
  "key26": "5qjAJyJjoSmBMBDg7ctKTBnwVyZv2rH5J9fmfczEKL7d1yXgtFTfdzZFxRXTiKAMxyoKzZVt35wcsvTo8vv9GhLW",
  "key27": "5ScKDU8v9DKUweujh2bhGt7TMpTNKfCxBRZJCiksisVhnpkpAM958zaRosWZfod9eYLQLCJ6icUV3WoXhmHvrKD4",
  "key28": "aQzEeExsr3DbYT4dzMWaMYC2EnNH69eEpe2SfDb6YTWFQVvjJArBXzhCcd1A7PeqS3cvZD3txbXp9KEETjJK1gj",
  "key29": "4BGNpiu6FcMJnV7EX4ozkjgbQP581NJB1pSEmTyiGZohNdTiAYEQwMuLTZbFKyii6q1HnuJMWKNkeLGJ49bjHmcJ",
  "key30": "3Juf7sE51cZhPEBmtSW9VhX2Y5FPSfnkMBEwqhC4Seh1QmyM1yRMiBRbZVwoLQ1i9xHuPodegH1V3wwEhFvrYZp9",
  "key31": "5qcYqKzNoxnyYuHYDAcgTmz1qdatYLmAJRaLwZYuJr3zAiSJyrAxVmzt8SdJTHawyMdpwqsvCvwBG7fW5cPGuLW7",
  "key32": "2qpmrma2j9QgtjA33XHFRTGmp2doBDBKB1GDKJaZJDNCGArgYqZ1HfAdrBs4x94E5tPQKrLkH4KHhz3QevBvxNGw",
  "key33": "3Z3Dmp3KtVkrP5DNYKNYxZrgPGyR3MdXboQfwg7FEtiHnuPkJjbXjCDyUp8vf98XT3qZVKmcyZJ4uhGGYHTJN8NP",
  "key34": "kDrcDmU3ohydrYh2cgXhQnYAMS8fQtvh4VsTHE4PvbWKnDuV5VyGJoT6pqjs2xaH66fdvH5FuqwBYzVR2A1cSQF",
  "key35": "51j3dR85RvGJpAx7rMryBP8Tgg9xbE1LQTNtHBkTNpd9ZsNBwWjsNkabN3gW3RTzRtq7cMLZQwns1AVkjrAfNXpb",
  "key36": "5AdtNxut2QFp4BnMcQuzKPQXNd1W7oRGe77rtcug5wCqzpFgXd7ABM9XzafqGMNWBWVwxp31gJ2nqcFN1GJvHJF5",
  "key37": "5hEDqvwE7ATCji1u2fQbrdo1KXLH7iYQXJk8hHWU6u3NWCSSZs6k7Nh4rnWpCVR6rw2tbRewDBSyZKTxU3RTLMDW",
  "key38": "2Cg8nFoN3aRamPRZFF8KLgknmwhm1KVBmrG6XYJLFXdqsafysPDTLYdVYJLWyzfmmzWHBBHYvbRKmBVe8RtCTBfY"
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
