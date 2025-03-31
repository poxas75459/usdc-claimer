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
    "3ysb1DiyF73o68dFAVZ1FAD3FTFiwCbcJo6t9maEFzm68ny75vkCX9t6U6RGGjjpRuMKoEo6BtDDFSpdoYT5JsHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d56JimQ17Fk18tAdUUQaVKYhpnQQs6c8y6uZAfGrbLUSCGDr9qsKkFRHKhQYaeV5Me9b6jZvS2Ff68txRWPY61p",
  "key1": "2HNUMcCswzJ9pKbSuDNBvYGxbQQ2K6aULrYjuHoqrYZb6qPomdQQtuYcJE6qqWDE3cnArtHJaAtogXe2eRgzaxCf",
  "key2": "3bmkd5tGkzjccuQdNshnqwyd8BTZNxvyfAx6Dm6MAKDDN7eAtwfk5L5bzimrRtyz3HgELzEGPLLmMwWzono6E6yv",
  "key3": "3wbMjeZ95sjf74mYqk21h131Wc3889MSVWWPcDExkF8swhDjfFsdUoDWJYmPcxmd2Fr93qouv6YA9NBRhjZ8Xky8",
  "key4": "ToS4nCufMLExfYRUDm7DMXDWaz8BLVDJikZjXCeeQaBRnssh3ibyrDoE6w2GSpcUT93j4Zxgq28p8novTx7rdia",
  "key5": "42JiLN7hxeMdZs4BpdMzFUQoJCZnshLBbcasWpauXkcSAc1z13gcmxS9FJLLNmn2VB1BPrTLfYaXhvfXimQoGcHQ",
  "key6": "5xUMrSw8YY8dfrUUBTtTzZPvdXVambH3RtYqH3PiwnsC7f31xXDK5xpaMXZm8JFJ4MQu3TPmUw6cYxmq9kjcP4g5",
  "key7": "5eU7h8XxYjbmuBcVTPshLiF6T8zgnGZZnRvV8dRe2aGo1VwxZwJS73AiAimzjTQehCUyDmUREi8jufu9Nts8KTbC",
  "key8": "4kZkuRYikLCsu5HLfHUVr6YoiPgnzZKL5dBRVh2N7nfK9r6YXUUiLLp8USey4wegnXmNaUuvViNgNuMCa61LPtcQ",
  "key9": "4kQsQME7HxjNJ5ot4acMcxtgxqiAnEcrXyyKE4K7tQicYBpzU826K5zNYmrST9EnPyNKiTTZFZVGHtfoGXGfRGfj",
  "key10": "3rM3KpQmPXxQCiZk68ZLWy8SN4eEqh6os3fvnfhQT5QbnYYxU9p8c35fS7DbxDGUgFMdf3UDx4sCUYNgvnyvhe44",
  "key11": "2FTDyp7FrDUScckLofH2YaCuNgjLcRHBfRJt8pKVWxXTnubZdQZor4n7j3p46NBatmpyPeaoiGFm6uzqZvDwXezJ",
  "key12": "42HSFQzrj2wVMwsQ9x58f6WjSDwgeML8k27VpGsihYCmrmBLoXJf33bjyN8HBNUdRGdGhPPzJsEF2NiDkeBZV1Uc",
  "key13": "kuUAMDXrKxWXSmJizoCJojNdqL6sGH4oW34AtWcynMzCtPd9yTJievktqZVVuMkpNRkF5EHf2CQ2p5MdubHXrwB",
  "key14": "2JBw51AfJjmqSeBNmUMfphR8m8yzKh2thtpqH4SDzqQDYeTndWx47v6Za6QApPGQgs88ZG4FQ8aWoAiMJzT6GwMS",
  "key15": "4QCeiXoEZ82T35somAqAAqHWqcACci7jmFaqwePhfCWPmWQGoVy4jSzy866TcsvyjH5gMK1Jj8vdfSBVxP1643s3",
  "key16": "5iEX4ey4dsNEmhsFwtSZ4LiYewhhFevUsSii9WpHEAhfXkRZ8vbUYmU7Gw4Sxy4eeNLjBkesXn6NQQmQYwy1tcEX",
  "key17": "mT3XvA6K77caFCRLPnvTPuzMrnP6CETC6XdMsVQ3pWBN2P8LmuLmiz4E8YCQjFeNaTHGACzxJyRDVcfUjbWxLkA",
  "key18": "3G6MCYUuHfnTjMYcM731CaUAnREhzmLuHWTjqpJx2tpN7q3DAYeM8Yqb1HUefenK5WHcsNw8uR1R7cwePeTN3viT",
  "key19": "kjz4KwhAXCRjU1VZevCZypJUGoVxrer3be1KXb524z3RtWNtmJHT7yswtcsGTz9azTWJPcE3aFCcaPsRUAPfSWM",
  "key20": "21BJG7qjiV38xr8yyLH5w5zCA5fR1h5uSSu63oSexTrAvFjkYFrMH4z1bobgNq6ziwuK9LCuKRDjRp1nQYBLGSsL",
  "key21": "55JMhdhxCKe9c72HJi9rsqSzYeaS2vPW2YjbnoY2jtk29SN1AZkbh5XRTERVUQeT2cQGhSQ77TRPuT5KCBTq9QN4",
  "key22": "4PeVYdSKx6XsyX6WdEvSyE91TbkCUU2JouzZWUNbsdUo9j6Qhe2Te8qbaMPmRUyeta4FRcpiMyViFSXE4rxPGzm6",
  "key23": "2ixVLPz2yG392czufb1TRFkFtogYnhjuHsJm5eGTFugBPMTobqnuxgVup24UGDgTM9oNe3D3qSxdSDQU7Then6Bf",
  "key24": "5RpryWS8sgHiY9iSMFkCSjX824TKSpFdMQrjtQQdCFcU6Mpp7aMN5yPpYDHqMvhZbEBTCRUoHroeXWQduY5tCvn8",
  "key25": "5u5XC8mzdBLv7dLZvoB5nsDDhY9kZysiebyLk4wkYjYSngbXH5QsDjmx8DvrnegYgt6F7YVNmoT1ckFVkKTBsEf3",
  "key26": "4D1MopnYDey135S2uraq4HQhhSh4PrJgzynxmnmyEGogbxg1qTCuYjuTDFn3Revjq16N8ARNE9rAor37NWfK1CBp",
  "key27": "Ph5zrDMmF1YsdMFrbAiFQ8AcjYrry6L5ijsaeZpHbKbKmitZUALpp8cPWViJoRCsdC1bGZEY8ek2NHNsBQmSmGN",
  "key28": "33cfJBy9NsUHdRkHWx12irRRZ7yeFhdjUaBcrVVPrMQJofUqLcMiptcg34dhHynaVYHLbjTJF5wwAVCBBMPXwBvE",
  "key29": "24Gi56um3ACNP1N38RvjhxnBGQTVvfvn2KAzuaHLWVH781X2EJxqcJHFiCXKcf8DBdyGQWX2AHffQ2MhkM6PZUzX",
  "key30": "AibE2zzRRK9KKZMgKHkfDr95dyuW91GbeaSPELNHoEnNU2muVaGpcMgEVCp27LhxQYtD1BoCgWd4v74xSxLefJc",
  "key31": "2Pd7EuRFWDaNbwspUYtnRju93XhCUC8ZJfvkwBycGSFijDnieoYkCGjJcnLk39ws9Sxfe9g15pUNFNtHk138VPRR",
  "key32": "5cAoR4krS4vrTtSSQuEXoEgFrfNz7EQq35W26MwS7ZMGb8vLM41Xc5dNPznnFB1Lj78kFoJ1PeR9iW2cD9bye8yb",
  "key33": "4prYcJ9BJ1Ar27LL4BskugXbrPNXoWFbV64UWFhQ23LWLnSvU8TEELbkFXjND3yYt8S63CQqTwadeo8z9cSj5d1W",
  "key34": "2ByNJ6mtsoLuugapYVQgJVXzkQYGbkaiDVUaUPF6PSqiGeEGHVQaFTQXkhBCthGoGWvLTuZPjfmxdwCBRaH1dU6M",
  "key35": "3UFmqkzjHR6t4iypkirrTdTHhr7QX3RjQw2w5rJ9KLH7ar6FDxgFsLoJ4DHtndcXTV2e9GuZQipjNLHZdXoL8qoB",
  "key36": "bDUnCmpSpBi3kp5iXafxyRmiL9YV1zxrcdNjLzQTeK2r2MUMFhpMbq9dLXnaCyss2wAHGTo5ym5hcnXa33eJaFX"
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
