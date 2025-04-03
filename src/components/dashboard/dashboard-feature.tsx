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
    "3dGaFtyJnzMZMxz7mWHnj851FF91M8dKHyapRoeMTsjdsvpbQ6EoxtpfNhq4YzW7YTxq8TRsWatGcmGobfjRSsJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4Lcpjh6b1Qjb6u7zQyjs7xPafCGrk9ummJi3591qeu8RQ8j12MHyaTSSS1rAF4Sq8QJM6bGLhsC26ujJPHfr2Y",
  "key1": "2KAByM7HsWenVK5ugTmHYofbzNQLiADAHcpim1nuefVN8W3NSwkJjChjD2PPiwtdGb5T2HJ2ydJm4ByaaftX5zsE",
  "key2": "ZNnXiQo7mrZZQxgCCvXoGUPzR7jJrgAcuuU9VMb28bKVtUi2wPJFPShUApeVY2RUffAKQthQqTnXNvxsqs7MNhB",
  "key3": "4v3W4xcjPDgBLAQoonDMwPUGAShsex31J1ParES1jPRQm6SUxMDeMepKzSBhHxERNawrucrXskq5m6E85YBFGGbr",
  "key4": "4ak6uUJ8k4eDUMuY9WHsHkKX5b2zb2uJEGLvkBskfKG2RKUWGzDuRY1DDe5UaJMvUWwhq6HtYT8jdWaEASSTW6yG",
  "key5": "2TpfdPULXnTtRDLddbQsZw9shd9DpQws4iDCqhxaNd4utbZqsHJcTqXniy1SSQanTbvZGwTkokeyqrHDiJpjZFuz",
  "key6": "61vmxTFiCqfb7jHA2K9nkbj2DUm8H2BrGo59cSEDi9i4MNVvBkY7kFHzBiMaXP8EjnRuHkt8PP325Q9xE6ZtWQ47",
  "key7": "5XXv2VyVkzFCBfSQBrN6SsYdyXMboemgeC5cij1HzNbj5RjxDckj9aQhBbB67NSsza4qbkYp8A9eHDtZ32rohiMW",
  "key8": "24AidoWuHgT38Rk5uc7HvGSJNFHm2yXdyuDsVF6qSDqoHkGRiuzXpERigxoQEtHaFd2CqUMX1qA5cFhDEraEMUpN",
  "key9": "5xT9WVNUoBEWUawbWLfHmrm4yK6iUZo9UEXATn7qfTttVuxvRdxi4uW5Saq8wFQBN3yWocn9fLRPS1qG6LmdPTjp",
  "key10": "2CtcdeoZUqrUQgSETPwyeMSukix6FdMeeAGMdUspMNPtpd3psEgaj1zZZfAB1s72LKA5JNcEFMsLaa7i5oXiQriF",
  "key11": "4ctVJYN64rc7jmA4yEhE5ucgeFWhLR7n5pYK4HJDpPT9ypudk16psiXkhHREks3PdaTn4QucdN1CSgi4sUivEydt",
  "key12": "GoMuNeSPW9sf25rWg28DZResBnnboxgwcgRx9yMam5HvNwafUV7gtzQFuPfDzL3pzwtEhKWUwAnezTyFpFgzGak",
  "key13": "21XQuJf81sZXGMhDNDiiYpfzfYX5wBH6wCUVnNQ28aHhKosFfc1VMX9sS3aY33moGejfcxeQBNRK34jzpHZs3bs9",
  "key14": "4ei4bU9M2LGjmQYJTAEANfVbw5GxggSBYNkqTfQaJLva5Z4xAquFae9v8pePpJpTor5oqZetoFqgk5L9scYFDF5a",
  "key15": "3JXPAeqisgc45wYr8AbyGbAhMws1TtrGjrbexPMbPdj28W27Squ11znot84JL9hq5bYdbxKjEsJSRbwoPvTJiXr",
  "key16": "2jCKV9frCs8DzyxY2s91Pop4FAdQLFDM5jb9ybfYdkNz7dkSeRceaceeogzmyRV7eowEiFQfa8XzU6AmkAaWz66M",
  "key17": "T33TaQdwL23ADBBmE2KVzZvzHvaAJezL4WVYTAtLYrf63tfugK3w9ntLWtTYDiqgm4yFtiqjCExJyXQQ1BgK7QW",
  "key18": "5DWNLJam367wgsC9ZZMsSxnCzD5LRzd5msCxmu7KfABUWLe2tMrFanKnyRvx7U6ohdU4u47dUpfgvhpsyvQ1qJcj",
  "key19": "3ahUYNz4uH1pSHcTFhDbJ6U4tvtoWDvYZXJZuoCstX3kspXeN8wq3X79NdGSPr3PSKnLuEEKSD9bU7AYhoJK8FZS",
  "key20": "4gWyW4EwG13vdv4S8388ZS3dmnbCHKerCcQdEHJsiGVziDR8SwR2ptvHnwBqdF7vNkZWmJNJn8A7VgyLah8Eai2t",
  "key21": "oBDSEj6GBxRtAqtfVySSW61qoDtaWJnxnVm4h85DZDZJUPfq67zSPU6pKN8BW4gGKR6eH927hdWoMAUqrybZWy4",
  "key22": "5hC62uaDGZwzdhKCaUS7xisfATUv9MzBREyMweuZUNjEDmE8yiwGDXEtWb3qFipFTig2cpnnc8adPX6XE1YufdDZ",
  "key23": "4w3KXG35dPE1dVLg51N1dyLXcbTd5ndMxwcFMbArSuyTC1ykZvzN1r4aPXFe7TqCcvRepnwS5SdCz5Vmr2gkvTyc",
  "key24": "5VZCMUFg5xeibW65aWW6S458m6xAdtv5RsTeDwtyZViboHsNMxYSzELA9SqCUKAkKwH8XkfqmzZ2Ho3zKzB51ZnH",
  "key25": "EnQpQiZRYPm2VBWawG2QdP2UrxfWzQSHdf2YzNfCtnRdaG7PgXQ9PR8ugB5BFWBJiQc7XLpjbKF4xTVtSfEBEWz",
  "key26": "49brysdG96HCwd8PmsshDEL3SVo3gVmmLNcc1AaKeTjEdiXiyUSxoKZHwQrkYAEvN6JheSb4gLz7ipfXijDQosJS",
  "key27": "5wRm7bZWHoTSJrVvb9pvEKEFPuYHpQu2Q8DeWuiWgTB3nmnDCMqDDGSqgoF6bm8kfKoq1w8NE96STAUtYkx6XeFe",
  "key28": "4YxmH3JBFekE59gRMRV5JSWNuNHEBuVhGXVz2jKMgu9v6F2gGrCtgHQJ86cAqZWuVXajXbMgjLutkMaUnUz7HHhq",
  "key29": "CRmKsGhMEBdsTxESxexYNVxgtbkwxHcwGyrzAB4wz9WfzKLNGMsJnCT8rHKsfBxnnjAUdn4SiQNrN6irSpQXGMK",
  "key30": "2iqXAyfSutPiuUetnzQjmHSGetDrAvmsH1GMt8jBZCq4UFeTRZkovLymyKHCkB3x37YY8Lb3LTWS3kHALPx7FooS",
  "key31": "4c39jWyz5ymT2prd8iLF1vsMpHXqa2ZjtiLpYQNiVQuf1bHD3r25A6ijv6qWTeqk69CZTT4Wzj7u7oUNNkTMqw38",
  "key32": "51iySCcT3hPFvvKHVCiJMY27UdfsVkoUV1PPRJJShku5xn37BSWWPe9wGEzW2BRdvrVeXeUCoF2KHeP9BjGoPJAk",
  "key33": "23wccUZUY1FfbXc85GRqwnJbTpqU6zTVF349onKMk1hKuAzkG7QjtMTsomNeUJRF9LnCnRXkiWmqnaSYwCqbqUT8",
  "key34": "wk8CdxkWz1UNQ8aUMq445LbkGq6HPN3GQPjJZW6sifoW88q2PGEfScZgAsLhpWByFkrFPkNwQ6bKPsQz5dfGcNd",
  "key35": "3YL4jz5sL7p5qm3B8PConSVEdqN2YfQbVv18jgYqXYHYPGRmB8FNuz3bRhdDB7NfgAn95t9aovbN6o8AW7BbyNm4",
  "key36": "3K1iaBD7fdVWbDigiQ41SX13GEJany1ia39nAZnGZx5tB6dwiCTr9nVG1hZamWWdFyDwfGRGF26YNmzcburhUSng"
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
