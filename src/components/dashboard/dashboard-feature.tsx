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
    "5EK2918eDyDLrUM557CrM7Vqduo3T7rXC3f2iZCd7vKcpSMJxYJdxmgH9CAvzAtBKDBFRFGfASELMofmfK8Cvo1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uYeNtF2UQw2xaKmXWWmFEkVo4GakDMA2NN1hww91pzsKqeS5vbqqR9kDGJNgPCq1Xgc6zoD9tTiNq6GZosmiv5",
  "key1": "4aXsHMYza4mqtcvLt8kpac78cwEYbfB7R2jCtzSDir4WHD9ujRgH3aJpFd6wqyRd29nV5B92SyAFB7EfogSoPHMK",
  "key2": "3Y821iYVoNypZBXj5DNybXbeHw6hHnikgL9poynsiiKeaSF9ccyGv5SJfGCVJtwVWkfjPjjyXeE4kgS51biUZmGP",
  "key3": "3gNwXeRY8eHTb9Z9rHK23CgQQjZMPXWuQP9FgFtQ6J9CiEmce5LUD34uLWcJqFzanWuzZ1gYFe23akfCP5ZoUq4t",
  "key4": "6tKcF5LDkQYoyD5YzeANDf8KfPTu2e5yG7fznJTKFGEo4c8Ms1K2VKi4idWjyaQevquJEQWRiLaiD1qyABaAuWS",
  "key5": "2ETQC9mgjmHQKAqWN6W5guCpDjdcbhwVAESuy4zybrCpQWBkgymBkhc2ib87ENaymLQ2VLjVbQqcYeKD9nTSKVmg",
  "key6": "3Wu4Dm3WTsujZVVZGpqoPSsqhNUdhAXZyc4PVc6qpUKksFprGp5Nb5NUmj7ChVW4dHdpTq5S4nPySqGyarNNkYy2",
  "key7": "5mMsEzije3aeT3WQdJUmBKrHCKT3L7789FLjSphsusTgNnwVg5G2LcF49NuBD6iFw7NHvXeuJ7zWKkj93WwDwLm1",
  "key8": "2tScjVK2yaxFTCKmhKNMNg62KojWvTovGAHBeBBCsrycHFiDm7ubCVFGFpVkQPJR3tJzm1nQswgN27Pw3QYKaEpR",
  "key9": "4PkeP6ApwSu9yYAMx2updrUqCqNR412bmMb5J95ZyLkuNdZFunzDuMVZmS3mqEmmWUCXFdeVJ5gX7LTXfUX8fhs8",
  "key10": "2ZtWMKDrwY7ZQz41EUHEK6BUDzcCQ7m8NKDeGUzAYwSKv6fh2XdBuQ7M2ZY8VMkRwFthW15ZJPW1LVNFkNUmqvda",
  "key11": "5E5Ed2CAdBW9dhJfZWY4DGVn45mARdqEesnTw38nsUy9yxUxb2rGku28pv44prs9xKWApL7YGRMjtMkHsfCVtNgb",
  "key12": "514o5wBH3odvtVPMzvsVMZ5uRf35iGMgc7M1iVG8RyBRPkDHt1QUaUC6X6eLpiFkav23ZywehdyUkZZ9mrkXSdLN",
  "key13": "pkYxBdYEWUijqHG55FQ3YWsSyN8JpyMP2Ar6WgXCzyVA63eZkuY9VtnfwFNakph8kRxYhJLdp5VM8rQ9UmqcrVq",
  "key14": "sVcCPnopXm9nsmCNei6ZRXS1vnR75hEXSW4MefS7kMnfHqistrxj7dod8gqEVap8GDjd2Sj5VEK7tDLLJG271Lb",
  "key15": "5icFtCEthJfGXvu95yEYHiQWsmT68CmDjUmMTTq3QRMBBCkPmvFkYQAkVvW8aqJrTYe7bDjP2n17KVHF2xCgnXuM",
  "key16": "ZM2rPs5ApHFwJrQRLTPBCtghcP2KTZDERCw6pmUdoPi9oi4oPmMBTbjpaqV7uqiyW64BnXjLPVmyd3RMmJnvTZZ",
  "key17": "WVB1uadQFpRv7RwM5JZnqYajGzRQrvNJMfNh7sWuowxwvdoyb3418KpkK59ksP2qgvQXmj6NqEZXPasbUNoymgg",
  "key18": "PruX3RLABDUXCAhEzvvSM8aGqTXhBqyAeqkvr9ktqQx5fcSzBs54F1N89HZ4myg9ys7s6ESbqTqFNmRvKdBY47H",
  "key19": "bTNSE4QerLi7iCqMMrKtZ3Jj3dLPeC49kJWE5bjeur5VcreiNec3ajZ8gsduC93SCZQmYxBAhkaViZ9aUg6ct6W",
  "key20": "5m8Dv5SayM4gfKtgDWyYsxoVNwZHsDNnygutFtUaWZs9E1wmsc8As343vqDHSthYDDHPwGwu5GY6kBE2mG7RxQDE",
  "key21": "4ThHaJCDrKRszvhgkaMyMTibhY75UPnNNJBeVw9KXEQdW3vEGD2QzUxFCW2WA6W8yWrkLYQF7rgN6wcaY38fjvt6",
  "key22": "36yEQTgkx5kKgi4cUAZapeVzmELMYWPcEnDadTEJANkRWUx7j1PyMtFjMhKzcU39zH1eL9ieQDXNpUwtHADuycv5",
  "key23": "5Mr41iSpZBLucWHn6usww8TSHRoXZfAMzASKP3KUCpagHGegEdiRWB3aj8AmBcJNJQxC1N1c1uKZhYyxqDXHP1kT",
  "key24": "3e9cN1ow4vwW5SXFJFe5yZtjtcy1mj768EohVmEb5Fpipmo8faU3ZnEmeDambhbEXEjAPTwjzMVbfPVYx8fhowgR",
  "key25": "2JTtCXXRANdBVR1GNZMMayaw2qkAacAvSqkxuqoZA4TVHZoh5RuEbL5zzHQv917gTrKfDdamyiQSbAsNcwbddnEa",
  "key26": "3NEc66FKxquK7ghSFBC34U4p6d2W2pzqSob6CmB8js4Yg3MtzZuf1aKAnFiKcAWDk7dGJqP5R4pS5ykgUzoPnJEW",
  "key27": "37EmzTMZHytxS8x2yCQuqVtn2MRA2oWPPX4bhCQYexNxdqNXtX46zmV2KedfRXZa94Q41ak79v6fnmNTBwbSjZxG"
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
