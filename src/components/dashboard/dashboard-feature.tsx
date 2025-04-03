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
    "3gSHW7cPXZtLrqqNAdkzoc8jghRvnmDkom5aeRZ12pM5K7nK4YDDEwJoxBe78Ex41MxcBQtMrWaFuPxhd7ErSk46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3im8woKjU2QK4TsMJwwVYkCJZmuXjCPBUw5Es1Hy72A6tMjR5dhSxuMx16BVWv4wzPY9tGcHvafVwxvCdYfeMkc6",
  "key1": "45QcfJeweWVnndvb3VDpDcdR7iY6GZbDcAckV1cuTzEeK1w5fhgRKDepGvyhn42YBFvDJLmK1Krg2ogjBrEVLjr6",
  "key2": "4TAFp3unLZNcypmJYL8kSyp81f8o9vtfVhTeUXV4mKQe2ogQX2Zm2ztaWyQvWo7hR8tCR18W5z63cxmFYVCbnfgW",
  "key3": "4rUqryX7AccqYMggoUPa3LBoUgodvCbHqPk9PHtu2Lm9NkuZEvggZXTUUcdRXu3BqcSfZKm7DCeYf4hCu4Q76x2q",
  "key4": "2oM4xeVJfLDxNob4aXnfth5ikZZszXiFKcrKeRjABRCD55vE6rVAm6nLeaVZwmcrfvxxpGsPeYToUTb8kmS34Zou",
  "key5": "5P3R4WrbWVVwSg4iof7cnMaJ4BqSgbJgMXcQQBxoZwo7mKghhgJ1bQMPhRg661vVSSfCmWm8QJhpCVsCwBkUE6q7",
  "key6": "JC7XU8tKYiw5GRjCbUf4nrJoPbF9pNdAmN5AAH1EjYFZbdXRtoq85WjdHLUJ3wTYioJtqjHSN7Pjgnh3eEaso8Q",
  "key7": "9Th78tzFMuCR6ExN38LMECogSbXKmLMbfbiEa5JMrixNKCut79AVeWkPX5RbjorMceND6dTMGWzjMNKWWsgvrQv",
  "key8": "3N5QVF3QwAgf8rVQyrRtmy36HnsfRSMXyvNxEhhhUCWRwe9Sot9wai2YDPrbPjuF9TyvnpB5RivWaRc6EJ9WK1E4",
  "key9": "4gdEcNN1AswUiTtkpu1n8AS45JfQ9pnooFteyMdCp9wRfDe9iGksoF9vehCXze91MjhAb8bvtugrVD3MLiMCDAah",
  "key10": "7SLyar3mFbz6qU92dPEJERK3CqYFK9HttkAWGM1u5SHLraNecYmgW8iVbab7sFSGW4QQvjEmrUSa4xN6mZrckRX",
  "key11": "4ojtxjfmkrNY5aooS16J7MyRTE9D8VJYiLNnZsiMq6sKXDRZD6ZsjJ4AJMGbZML1CQz6H3xxB12Nmr7jwkAYmAT9",
  "key12": "4emhUVJTdkh1jky89RubjFQRdQJFTeU3BjF2LDEGSEZEMieSpcXMsCr2Fo8R33HJqpuanAVFCokJXNujyngZrkVG",
  "key13": "4EVvgvMUWye4MGLjxLA5v2D3FPQcn9FEUTWFLnJ8wQUHfn4mYe4em9sqQDdyt1UnL27hdTRCy5taQBkWzhKsrsNf",
  "key14": "2yJWGkzwLY1H4UnYBVYJsdKbpVGm5eTKKQfmbqEsoAyGGMUN6Bg4o9Tatsfcgt7X4XAHjmkfBoQywW3Xgvt79k6Y",
  "key15": "2povzRBkAu9VoRxD37NibmBCUXTA4X2Qf68DdVDbJ6D6VrU7JmudmfnDHEUJJKvJo6UVExB1qDes6vq2qoongJ7X",
  "key16": "4grzcAnnyq2mhJCU4KCcxBTni8LxCzPJYER4MoUb3Q1tPBFZe7cSKoPq3MWMvvJeThiM68DZYR5PNzUD6b5pgV1Z",
  "key17": "2ohbkKEyErVbk3eirrh6c9MvVSw4Gk8BF1M5EJvUnb4YnNvgqrCn1mdyrGUSjn1hwfTRJYmJBZQZegEdx4duBm5f",
  "key18": "UUmWPmpnD6aqKZXJ5R2eWo9wjER6fUTySHkTGnncQfwCPAZ4smAETXDKQSDtg1nB6gkK2GoDZunV5ZTpqGzojNh",
  "key19": "phH8wgxPwWPi31a7uSyz3CW4toseiASz13Qur6UdvybaJuwJQV1KtTbZw2moqmXtDFfsiMjM2NJaXjNAniw1W1d",
  "key20": "3Bp2CoxQHtwwT48V8LypRGA3xfK34GdEpmwjmU6FbQuLYQ1Jyw4ZJG8Rif1iALaMwPUSBwT5co2YjokBnGpX4wAR",
  "key21": "3tqo1suGAd7KENYBgmPfjYLQXdujsQgStEPQGBhJBtkFM7vmNbXPLzQ5wJ92W6iwgJ4KvZM2ndtu45Gvxk8ptMEY",
  "key22": "5MDLaXG1Hr2eatR36vP7aQb9JeyF7nCTKSoH4eK2A9DGStN5zkfVLb5qwS1DewLqKTw2rqFWFQkSKgC9fpB1zKbA",
  "key23": "4CWciQbzuyymfkEsaixxbru9mEKf5pmfPETi4hKd8CWD7DpVM68NMxxnn2QHzUppoAqJiwTv96DauTzCt4SRZpoj",
  "key24": "5RS3c97GKN5CiibYF2jEUsYSpcnSzXZu45McC1PxKdvydMawK1Eadcn1Lao3jj6vd97eBH9YXTiVr1bTjKgkQL32",
  "key25": "4LpvhzjXRxbXijSyMQre17KNr3cRyPMgnipNLsur5Ev2h4fnF9szqxiEK7NHcntb5WTCJ44uBYdsQvfh6SQcyEUL",
  "key26": "4cyt9EEgjxg46yv3Nuw9kYE3RuVEoxuy363ZywsKSx1LbbdpsRcBfCChWGQANhQJLtYn5zPSAJGtb4Tr9Ywt8ZBm",
  "key27": "23kM9aD3qmB8oGZLgPS5vQN6ZEA7TfZ4tK8CLFqpY6E1mHYJRnhauhxmCBGek4Y7ckT2LtagqF2GX6FmqDqunA8t",
  "key28": "5DJ8GfJ1gk6hqn35TcuucNhtc6pqjnPYgMoey4m8SE9kESNVi3StekZF1ccg8aQCUswcXKfGsD7bcJn4M5FnA9tq",
  "key29": "2dham2NYwDxo1cG7yTyLKfyDak4cUJgjVk1XwUFmwDVJZPq4Koz3o3QPpjz9mEwmLozPWyqwWu2B5bAuWbzXEmEb",
  "key30": "3FGptVyHoixCeYas95CEDF7fFgFemGjM6EEuxY8tx4mCoC7iPfzskAJNXRS9hmwH17mqxdiKgLoLX5aLtWi8rktK",
  "key31": "24UYrFPV7UgCEDBCoBN5y8SqsLRsxCPpf9amRRG4YkePV4JXbkPjdmipaaEmQyVUXea8pJGGFWRk95arB2iGjqWB",
  "key32": "5LwTDVSteDMgTamQw2D7uwBVJnJb2hLWbe87ix2tkK1buTjfNSoxGhbwg1BQYq8hzEPD9KvghAyTZu9mK5AW7f29",
  "key33": "2sCBdjbJWuXsrMBhpvxyNQJCeR1zjp7fx3Jq9fex7xb3jwwjXnvw9XfxPu16JBgfgKVb4E32HfD4oD7Az7djJAM8",
  "key34": "3d2vq54gGtY4JoYuYWBoL6L7Vfje6dy5RiVZYfLSdCVEtARdJfE3jaJK6M1cxdJEcgTqqdj674ZnZBj3dijXeGMZ",
  "key35": "3w4Dh6EXVLxhWWSeoRH4Tgo7x15CqH5z8XgBkV3HLFoVj7uEUq2ruRHQVNhBXPoCswNhjvw4UPZg3beNjDwNPmQx",
  "key36": "5s76ehrgjr3QoyL1fLngrVJ94JXtnjAye98hukwtBtgxUdMDXhub1zif86FMp87QGj2ZW7GFAJqVwjkMeCRyyQJj",
  "key37": "4uiJ47YfeJM3BVHvKV73FFANXtXg2fRt8kGXLLnwGHyhB8KCGkQeWgGmnLxh5baNShJT9w4PmauTf8o2FNteVwsk",
  "key38": "4tcACD1SenFgDExmbXD5oru6oigtXyJ7GTnoYmmLZF7LcgtmVjPvfzoHLJsaMAukU8fAvEwHq6zteeVD53VMMypM"
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
