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
    "4c8PGvUaXAAh5Faw8uEAkFjFSgQoRRSBRmdMvijsZubecSzvwBzN2wBAbq2sWza7ibGPzHmDQvhJkUNsofDBAtJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u44787TKaw9pt9w42TuFnjMKQcD2cmQWckcY1fvwRzaAPR8G1S36pi61e5U59ZdnFXPdwxvuk8nembbsT4c2HcC",
  "key1": "FPg7PfmLboCXi4SHncphKGadpRWCyjuFkz2Aj2KUtxWXaJUk6Eu1h3EiRAgziLLXYscFzCCZNb3FxLZ1bCG5wp2",
  "key2": "4d1VGpLkNmFNh6q5e3MySVcR9pA3bhvnAUYdePZGFAT44iE3CQgcXmgUr7E4MFymTv71u8KgW7pqX6wsqUepgdwp",
  "key3": "4y4tEq8aBDuVEjRHB3XqWHe6Ptb8rtDqfUojCcSEYKx5TpbnHt6wXtuqz41MRPPNpUvZRCwCQNeXPvsD1sbZCiDm",
  "key4": "3UFZd9rrGLiP5YPACWD6KGENo8PhH1fccCzvtjwvJayYzCNAgYR9uVzmHYGqozmrtvtYWAFi6ajurdqBHYKeRTpY",
  "key5": "2cCFb86jiurBRNDR8oMVt7TLLb3V2gSaX8UTjrx7DYsKun4TRBvCRn9mBvxDZ5t7cLQ32XtkmU4H6mbZDbFoaBYR",
  "key6": "3NEH24YcDhxD88zkTSkW1WDdTXrS8wKtzgjkP5Q4DBSvb82UhXu4TpQLGivJbDCSTha9T5qJMqFtuZYmbj2Qzy2z",
  "key7": "4pnwdKMA6UutdaB4FYYHohN581KKS9H92pyqdhS9bjoDnYzirohRjyhxjmL8KTgCujZimbN8ms9GD4ox4zxxzZob",
  "key8": "4e7YjQjLHSJMbydFAgjcDtGxRjiYAkzDn9Xt1QN1sjxVmhTKgCMdwRuXLNAzAezeWZg2PUMTG1FXZVBFCgfBgs35",
  "key9": "5LxwaYvEDMESh3eDT6563sAu6j2QTSeRamNMBU3XAXBvFCxbBfku1FAVkyovm21EgR2e3CHXBSpGH3KGpr2RJuYW",
  "key10": "2m1bDET4UZxJmU2mE6LmE7Gjwg3fe2CdJsfxXJEmHiopvBuivYXGrYtB2ZHMRkBWjJV2NnXZtEBbNgFv8dRSGBNT",
  "key11": "47PYPW5emkQTTrQZ4PXcN9XoLPUbgSWZjnzLcucQuouqQKeqaRs8VyL1bUTdiczXuAWQ5VSU8PSBcCgpsRsDoGCC",
  "key12": "5qKkyic1oqrNoJVc7NdhtFJe2nBmdwBPfRAGUm7MEHovvhqJHVXPCzzmc9xJ2J4UKL9NsNb41BtiFRm5yD8cHcNS",
  "key13": "4AVx5R8tsUGzYnwURMHVKeTFWgD2FSwJLomeGtE73GWaxrW5eUz2Fepkn9P6rrKxwLZ8AeoTWGXPqZfjVYdPy5xV",
  "key14": "3yEQvg9vGzPfqmQkEKdSWUHunAMoBn1G2XwY6uqTnDCGHvrfCYtxZoKMcUzr4F9Lp9vGwvBPNn1xVnqWb9eTXjvX",
  "key15": "2XKWcPYu5QhcS8rk8iKkiaFytmHSYRrT7eMKFvFQZzG2mcAYXMZACxFfdh4nnf5TaH5Ku75NoTuw5JxqjGisqE7y",
  "key16": "61HNEg8FXcF2EThq7DY3rTvdGi62vbUQzKLJnMybd2JQj211FibAkfuecXjyBdygPgaycAFHAvVB6EbgQ7YxHv7m",
  "key17": "2wmtpt9NTEZP2yANR7RcDAe716B4LJq8KsR9CWhBsTHwKTiT7hrpoZnuvfK9w3TQPcGFFoAwuFrpbtMvyFfRzTf5",
  "key18": "2bzxgcYDzWT2n7U79HQwsi2mbeM7J3t6WSymKeHGWXFHufWfehaAPKJPuDXWiTyZvar1AB3FLMFv7UxyDqXEaUxu",
  "key19": "qWZdAsBwdtpgL6HwkfZ1DDYqH5CZ6gLPU3D9tK7BnEgiKzb42pmyUa18ky46xL3uE6cPHA63HLpFkmwP9ChTm3W",
  "key20": "gSPtNxRkQSRJZJ3gLAc5Pso6c4fjUA4RyEU24HimqkqJTC61FHvHz8N8KDEg5pF8mwK6Xx9kVQ7Nn8PTWzvAERF",
  "key21": "wqSNEDUsMXSmYpDVXEEruwPDDzXLkeAg4xJprt4Tz1LeNMiRW4AK7MbS6CBd7NnFeiW3VegZZCMYVcxjsE6PP9C",
  "key22": "5tCJTb97B4ezojwwLEc27YY3kRABRxdodhDdSikU9bYqsQHoEHfP1rdU1bdbLK2vY25uuA41GXa6dYDLPPs8pyAd",
  "key23": "5kPxRzuoJ6H2iKxuMu9RhpjPbyPskxiXwmmPDSpamhn8ZjsA9iVYE8BvQUnj3hs7bWybvUiSDDZoBzqdfdHFmKK4",
  "key24": "4KR7AmMqwZHwCC3C9RcQa9vPSg8PDwdi2HunVRBvJHgeyTYHXXMdm6LM2rVBwdzLmD3vCccCLWamT1FQeTh6zaGL",
  "key25": "34ftbvNdJkYzYb4AFQZztLZ5HdzfjkV7eUFauaSgCLQYpBsWF1ZESopq7zHL94G4ZCwXxex16GZ4VXzNjYzFeykm",
  "key26": "55u9DpTFtdPzLcc63StFPDWkeXiVaN9mukpbBx5yPYYFLBytZTMV6HS1PQKPN9wiFFejHjwWZJ7ugtyFVoNc6b3e",
  "key27": "3o5qtCgzCKtwy8wiW3qUuHuHsGTPmhoDaY6DjJtUniQLvTB82puzYkNVv9sR3tqFoECSFW8921U3DgdoKpbhaiSa",
  "key28": "tCmVCRuDMQQ4sRYLDMSSMLnXtrW6qz3wiYtYZ4EEDhBwA3DssJP7qvRyWM2efiBxkbJ3BBfuYkVg8bUN4am51gD",
  "key29": "XvqqJJQjxtJYeA7M92if3VxGSPMyqe2dK6QtEo2ZZ35KhenwF7AE7m7Ys1YwMoqLAWfEzU3NXandQiu2nXgNC75",
  "key30": "2VtKFYXixtzEzLmwUqDsnKDDPSGNU8zL564ME9e9ieuD4oBAdBb1EoMswrtfKHQqfoYdXnf3AB38E7sFgitxWrti",
  "key31": "22sPsSodMdSveYyuYQa1ACjD6u2epoH1PDX1W42V8QLo2B5JqwUYoq7oBAuUoDiGT4k7tDMqW858xJzEMg5ygUku",
  "key32": "67QijKmtR8dmPS1Y4vxZvbUKzJim8wT6MB8Ww8e47F29t7rpJqbMXQSuraCPjqnfHYGtwUd8Tm24mBairMDGqdhB",
  "key33": "67aMLsCpddBjdnMMyT5o9EWUpNoBeoV5tbzT1KWCL6iqzVHXBaJpVCUYnpXdrq4GV8kYCNFzqpPxLLmE3NxNePFU",
  "key34": "4a1K4te5Kv9sxaqBUBnUi5nmPT2Bs4kH7eTK5KjAcf5kLJs1AsXMTiNHy2NjmqQbDGen6PF8RFyqv2wZDxeYiZGD",
  "key35": "4Xaz2nr86CiRKdCu4zcqNdAdmFm8dRUBMXco8Khkkfwxscd74tBZwN9UBfTT1reoMSTGDKHmQcQryCqbLX9LXpeL",
  "key36": "4mPaW2ioXvxR1KkHGYCeCkfhc3zpLzebGyeqbwRactqsSDpy1K5PdrDf41X3uzLPD5hpxiq6ETKWWWF4cc4JwiHn",
  "key37": "5SqxmUUAd7rMyDd1pPHVSYeBoLdZMiim9ScMKVGohiBt3LNFAizhDxZsHgNn1NCjbCJVJ6jNyWs17CqSw7BGdhNQ",
  "key38": "459qVyXxymocF8mo2mNG1MB3s9kZDuQPS3SaMby7TkMAQ1vSo5Lz3XGEjfrJfLWS7m2bEu7VQChCuaVLz733vDnu",
  "key39": "CHR52Ye3wZcNr1Hfko4Rqs1iVaLUxgorCTU7ZwR3Z6EkXe4NvSi84RdMYk52RXUxKfjgKBxAkLYrK7LEfa7mp1m",
  "key40": "3j4YtKKQZMJxsVKxqTFh7jqi5Qxzj2kYzSaoSeA3rkm66HXBjGWZUH2cfjfue1TmvyC1jbqgkGWPfNwiMLzd3xMq",
  "key41": "Pvamn6gBUzESAsLrVp3oFy64TEBDBWFmUXL3FmgB7cCEKcXFJxudT19Ut8MFvUUgTcARkMnYeMkYeSaa2g7rB5g",
  "key42": "4z6BVunKQMJ33sdWYbj17Ds7eM3sRXRbRRhbWy2o3yESmndBQ8y8kAJnzCq5gn3f8Nu8e3hnVw2TEgRQ4VugePV6",
  "key43": "3gqFdXSmsC8Mq9b6ogfQeQJTvcov12vWkrfoe4QkvjU96CbfbxVjPPmgcfVNGvhJEbCTTrYEgrUdvNvhUnJvHJRn",
  "key44": "FtUdGT2Vpq2TBUiRQMhFtuSvpkXeotQqH1SLNuHw1NsfbByziTdhhy6S2QS8eBCbVTWPQS8zdVh4seHMJvXM7qn",
  "key45": "b2VX3Y25seuQVLEvNzvTdw5jpGqV9JPxwCYTBeHVntCrBNMvGfFhCx7zozY8PqW7vNhsBcAgA31HgMpBHon9ckQ",
  "key46": "3it4rLgU2mstpB352aQiDCGVe4tBWkMrTM2hsqdeE4GQSWqdDcXZvTiNKLXo6ZAvPsP38pXvrGvLA11HmEqfZgcq",
  "key47": "4ujfkH6aDhRnAEsWitUTinLQqa3wq1y1mC6FnTNvacnnV99wxGXhAJfPErbyX3sVzpHaA2tJP9YUvBPP65Tm9P4j",
  "key48": "4cnLTzb29oix5cmWs9ezi9MV1tp1ugZhaTxfFLxM8JCNRHAENKrE4emTBXqnneXzpAqHEacU7Uk6JKCT5vrh1yvE"
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
