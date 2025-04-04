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
    "XYQu3217Yz5cBQjN8Skiv51gpL3rGxjPd5TYtcnu9o5hqrZV6nxiRarjbPLx3Ati5RM3pVzztHgapqs2mDypEVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NYbjoqLHDGK86g1ppQzZN6shaCvTR21oijnbXZLFR5URgzb7JZWgMsJstZmAY2xpUtELM3dv5hJgqiZs9XRWzVG",
  "key1": "5BvrABmQFHq2bibBsaziLMBbXsbhm7LysPPBeQbLD7GrqaAkVbUyagbfPtpq4ceUhc6oSm2zXbbZ6eHdrBECoP9J",
  "key2": "2v29FjUqgnGcMfGa5kUSetKSSQoxXMMYKER5W3xS8h5KCFBfP1GebPucozHSRqG53VA1rQ62Qc2QjPQq2oiMntVW",
  "key3": "65chKLykip3g4SPpfUuNBSeRVL8wmS4JJ6eDK6jMSBUjPAKEcAPccL8KKUBk2eD93Da5ePYtMd6aHncxjsHccyG6",
  "key4": "3RoJr6beKQoLRydSiMkw9s1Eba1JoYMo11mrRei9rikUUQwDwvy1ugtVf8hjyAALMDjH1A7V1T2eTqtPXAuBXYjY",
  "key5": "23CMivMj5Y4pCQSp6uVRTkXttRDwRKuhjr7yvzMXa11D6TbZcWfqHmjG41Tn34VVaUYSDYCT3G8bBWeaNaUCEp8W",
  "key6": "2KjZ1Z6LohdyE8NFicNeRJieGuT2oMtYLsNwt5wVBu9aVe4jq5RTGwCbzuYLLxcYmmnQseZ8rLFDPBAmMKeFbwhF",
  "key7": "3uyx3jmfB1RVg4HmfgqYzWWvYAJb6XVUbBV59aywepEqk42fYZJQvVWom55kTPk6bVi4qWUBVASC5W5WGukm2iN5",
  "key8": "4HvUsUcpUQSgPCtq2CEPnLj9B1h9EzZE3CHTZFSezvJ5MS6mVxKfLWRREq1mPz99z6Th74YYfBSzFrXHurFDGxqy",
  "key9": "3UzBB8pt1DcoiPa1EMrWZRkTHVfUriPgZKPxhKp5GQBnuwmBqJ2HRRDthK1DarpeCg8tcakwFFRxZeHpUyseeZYN",
  "key10": "5gUypb7uX1BXVM9wV2isH3KktcnAWhPwnSj3JaviN3i2S46N9yimzaAChcU9UmU2abD4M28nK1naW5iPmiWqHdxm",
  "key11": "5YGiBPeHmp8qjz3tZYEgtWHZtk3VXm5NyNQvGNM62TpWqXAL43SVx3QS21onhN2PU7tQSG48iQwTtf2xgocdjVc6",
  "key12": "2ZeNxUZsRpAtNWemoimsK8dtAiWQVyaUWhxPnvoLgwCrRwFcL15t7VUrQP5gWaHqmqkTAERPzg53ctoYySjPrjb9",
  "key13": "4FVeCuXxcTFBPwja2DTbWTgayhhRghWtEbeCQwPDfbZDVvxDtBJ2NMRY3b1ebxRVU9bsqh97J5Zu5y2i7YHrYqRR",
  "key14": "3UPpXXSfYThDqB5Ah7XPbKpkfPyvdbWDY7tsR7fMtb7bZrVJhnDBN9YV34Xju26JvJwzjmyRtMz5WqK4LFdAoAS4",
  "key15": "3TvaY8v8azKummWTU9Z9u86U1cqDXZSknhhPBFvsd2r8AZYLSrkkJwL6qWQABdvJohnA8o2JQixdBFSSZ5xHdm6m",
  "key16": "4BEbvHt2mC6CQmSSDfceNxgBziDu7rGCjyiqGodtoKcg8SFLyPgfn2gnkFCABJw1tkJPsLgtArB7Ce3vmjrg35qr",
  "key17": "2B3njsjJtFcVVP5nqsX48jgNh2MUnZ7kF3N9bXtmyXHSdmi44rigy3rEQy7yqgQTZEgSivVYomaecseWxVN7Y3Qe",
  "key18": "3auip9amDBq5zAMq1oprs5M6xzJKJbmrWCB9ztyfXpkBX3saQR2jyyzMWkfPZJ5r9BoJBYKpk5Ss59GBCagMZGV7",
  "key19": "3TgXX9NkA8BetTwJExPssSVhakqcLgAY1bzJonfidPHkPLgSg4LyKSk9YBvFA8imUWUaya38nJV32rirfxphoQTy",
  "key20": "3bjXB7xs36Ak3wgGogWg19DRchj9BTYG1DevDrAzQh7oNYQmctSUo8mwY3rWCyv12xH9S18Nv1zXRzm8QqhJtpoY",
  "key21": "uhzmpvthcS4a111th3eUqiFrqNmfaTfCdfSCdk6aSTr4dSp57FBqFiiXY4sQ99cpc3d7z4Xu8NV22L1txJ8zoLt",
  "key22": "2PASG3JPrE3xshrNZTbu13aCmn2GRPBQhgcZKPWkGbujwapXj68oQpFi3VDaCMtb6sjPAErPwDvwFesGFniMLprE",
  "key23": "4KuReguRkbrdZxbTKxgFQZfaNNXWhRkWuxWawS4Yaw32eWK3mS6PaWZwDjbpUKWvEjmmhWyqZownCbpfZCJp6hDi",
  "key24": "ghXmpW8WCvWefXhmwp3hSpePiQBodXLaGmhFcQSCMyq6tkzDgFShwhTgxrWPCb481se1QV33VPY4EP5nNjYFJ4P",
  "key25": "3cPhPp2VZBbYmYGkp4h3LruP6rNCYKMn3MMLqkr3Xg2L47KckhSfQK53uVoT25GcdXirysaE4kiWynELTcE7hCVJ",
  "key26": "4W8rNV3HEZuN6LE3HaMHiXiuin8J4xGg59vmbx6YeCRdcJxKqPCAjdXRgg4oaXiB6SYNQn3qCvpkzikTNci523t1",
  "key27": "1aMsrbMyd3o1NQs4U8TFRstLMQTTahoRKkz7S1j96QFB3Wsc41Q6G8J97ewDkNo7rp3knkxHkbRRd4mq9TazjMm",
  "key28": "8fTvkyDB9TxLx2t1PxkhstfAdA6otq1uNzBEBBu3cojiZhX6MjVAXJPn5FHqqb3juUi1S3AjPA1YYGoa5CGTj1i",
  "key29": "XJ2JEyUjQ1qL4JuuhBJJQfCW9Ae1DSoizAeXytKsJhnCgWqCiEHJDh6EXXwpNnH54UyW38M1bpQXiAKt5wQg2FA",
  "key30": "2sC3fmwRv7aHn45qiAiGVhDVLaEPXcA3k9BU4xsv64gs2LvxhHFsYCn5TUUntzxTKskPczgvi5kNt223jdqdMNv9",
  "key31": "5hA3k5NmergpWKNaMpWYJpGUMDqTANAANrVB4FsmAseBREBMKRBXoRaqLNfA93t5QJzzcL3e7kTx3paA497QueT6",
  "key32": "57ExfVors16u6zRgc77xrwJ4vxbT2XK5k84cQGDfjMN18L3zteT9kgXxvVi95BZgWVgfTaNLDnx7bMgV129T2woh",
  "key33": "5HbdxjqNEPkizQmSAijaHa6CRKwBkRBLxiXXBFtjVyB1g3gLMLMg7SN7paX2QbxWLXfaugxpmZEGMq8jNaHsXn94",
  "key34": "36XrSH8h9vXm54gEwGg2ht8eTq4HKYsmwsiWLBACoBeM1LUbWDQrDe5vYYoZPPTPXmZZsaFtJuQQLSf79PV4Penk",
  "key35": "3GzbL7a3k5PyRRwPsCiYdDpMKp9k8PiK3r9wR7K3CYLVN19wRgmw6kqH1t17yq85SVofUhivKiAoUPdvYH3opXv5",
  "key36": "DS8E2YS8eU6eZpm8oN3RxYhz2N9UU4EBM1ofp8qBN5CNCU4EBvXJe3SmcPbLkiGMwgMbg4Nre7HjSPHfXraSewC",
  "key37": "5eP3QB36eb3XMZbdSz8u6VwYCGEkNUatBmuM6D3JM3v7wV8XkXtacMUQyzmcrntj8NoU5Jpn71cF3V4vKcyBzdh5"
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
