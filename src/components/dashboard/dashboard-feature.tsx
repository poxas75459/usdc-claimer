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
    "gduMqXdUBDJLJeYBV4ZRuqH3v8VC3ac4s5QTyisMqueXtgUVAxYECENrfTVoBnzTkPNW1YP3wgCz8pPg4W34cPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22qiKoHt5PUuXby5RTsBjQCVt3LfwDoWF65FZDp3b8Q3Xnx677i1xP2DAAaxBAVDPzuTgnXZHk3a2MP2YXNzPupr",
  "key1": "47NRgfo499hGiAH9qbg7jU49gpWjqY7W19RzYd6wDSjaTvkM9GDxvTFKMmqTAQiVewJKsNHfMroadGmd5Sck5w5c",
  "key2": "5KrNgaiknsUaJGidCpzJM8XpqL4e2MYZBgADVybYRuoYocAofbhsRuiH3BCJHxKwhSZ2povN6LebAoK1TfpBXjH4",
  "key3": "3Ah4WXe6zGugosEn4XNB4dtrY6qKbPmBbNTZgZ42dZ3ekHuEqYRAfKXyf24DP39iu1tnkyBXJyPd5zCoT8TM8AoB",
  "key4": "21h1VwkEw47rZeMSuQDJCYJ4dkTxFcdiWmEBLkcZoZmCXFeJudK2UYxoQxtktrbaAtdF1yu5QRTqSqErLNFXHBr4",
  "key5": "5iV2QCnF4KuVZBwFXBUQqyYsAstqKkydZSQ1VRCWvnHdYyHRLsyP63LsuTYYACZwLkHpJZsva5h9tHCA2FotRtWe",
  "key6": "3WX5zDmTZrHzQBpsKA6btkvkXyVTKicS3xi2rmeXofDLWZSxeyvaRficzgWH14y4TeAfFNeHV76Je9MSZ2pdYUDN",
  "key7": "63Zqu4ZnAtNWtFrU9M9P1hvFw881Up88QLHFn6vo9mRfMPgZXZVj4rcsWppFEps8rSBY2LGrHtJ3X8SRthdeP3iv",
  "key8": "5KZ4zm3izSWF5ZvHkqDEEbQgFanNmhyaj6S9qg6pj722LGnTgwjxuiizb248hGDpE5HhvdUWGT4rKPhYmWrJxc5y",
  "key9": "326Soeqho3EByV6X31JLXHerRrRXgcB1RK1jHgeKwFmMvGd2D7iBVsjAeXuDG5X2r8xXPy9zFsKnHvB3HsQHDUvw",
  "key10": "3a6S3qsEnDYNzbeHuVgG8HaPfku8hNa4FkbZBRJqeUJnEVjCqquE27dpbXRBLkdnM85RZvNUsLxzB8KGCndiAEUR",
  "key11": "3C9UcT2yJGq5cTpsvwuFGCQG41UXAMjQpHR72rCJjwM5XQdgGDuGoT67pBCDQz6J27kQy5aP6FxikZw31ztiUadr",
  "key12": "5c6RweUMhWH7SF4jec5XxM1hDfL7iPMhhunamQo5Gbz9Rd7R2akjN7yRmyAc7pN1EJvhtkZG39QRRsugyRr5GjAX",
  "key13": "zsgUECPqevjSUzHRFaACUPNKKVJpLbiuGjwpDiYoxAnjp9whvHPJof2H4PU6bZh1jyn2zhG4dBrSHbLveeuVU21",
  "key14": "3jxLNQLLNFNTy2rvKY5Dbb3eFEWULYPHHf1fpu7shWgrMf2zokgs3nzayJSYdPjFPYLrF7JMuMKUP33bLLEY7cZQ",
  "key15": "4VhgAX8T6pbbgqK23G1zhaiZQHoYaGornUCLa3hmo3gh1HkUUWgezSMwa1LMvRt5S3bJrV6NHCvicVRrvhBy936b",
  "key16": "4NPdRuQQmtQxziWNKsXd28vvVPB8wfG9SbkPVVVe4EHp2Qx126kFBbtQq1HaHhsfc1a5maP8pGm8ToboPeTnnwy6",
  "key17": "3GFgHwkRQTH5TzePVApuEtMMFkZ2KNVGxUCbJHhmpMKk8n134gL25m8KgszhVqHRmoZJczi7zu3ntoK9dQSXD2H8",
  "key18": "PYkix2ExowNNGV1KXgEp4Xqo5UeBhg76RcvkeJzSE8YfKwhfQmTxKSwLchVrSQiXCC27hi7GdPz7bY25jcTS4NT",
  "key19": "2oa3YkxvHgwdfSR7DzedRTTbF8jNWjEtNYVLqxoLQVumPQ1BuaYt4QKRNvviBrpvSCnknY4SHky6YWbyRLeMXeco",
  "key20": "3989RzVAMatfeg7K8nqNX1Ur7Z8G4jYBpCRGBRb4jLLAyRKRqdnb5wvvHSD6Eu16LECzrNLyt1PbGVFPckadAr8K",
  "key21": "4DXCr6GSkyk2huTZFvysfmDfXehjxH8EsU4VSiQFDxnBWGyibF4e4Q9ZDmB8fxu7hNCg1722nYnQBTzCaaWPNqEZ",
  "key22": "2qwrWGCkem4hMYGXbH97An4gx28otbWF2aaScDM7i7G9JsKnhD94vNeDogKjsoZV1jTuzm3FtrbYkSrkwdDjbWrE",
  "key23": "ckg7y28L1pStrPk33Tj1HTtNHgdG6SVDkbk1u6bHcPX3KCFPSTLGJ7h4dnCiJ1U1fjCPrSkG3X6eoxx3V2R2pKQ",
  "key24": "LX3f7eNPFQtBmBfgvkpisJtaXFWFaCaT4fvzjxUstgtN8o8n7whGXdpLVNhVzEjETxFuYoT3vb8ytjnVcoxV8fU",
  "key25": "2Ncn3VrgSfVve45m41CPVsRsMYBcsGFJJT9DXB5CrR6QMkDCmzaJ9Rb4DsnQtwD6LVZkA6aHSSztMJDuCGmRVavo",
  "key26": "4Z7ypCsuD8H8V1UYJEvjnXtGpCXhSwjjkT73i4XyV4MDP49atT26kUNkTef8TkyWWF5n6CxrHN2wPnT9w6bYTBHT",
  "key27": "2JR1xFaFVKRFAdiQNytmQ57iJG6yAJ1YsmB7YFiKSh4tT3GHVEsgZpEC8BhiDJyXBRqoZ46RT3cFRMTiD1LoCxRT",
  "key28": "3MPDLPPXT6qsGGKZ2yZYVShEmxHuEGSfzHjRAADKTQas8J394Hm3Z7YajXVGSnweNX654c87deSgvxK4MYedSyfy",
  "key29": "5ef8q2YvKLrbMpKgqSfpdDCW51wRLLpY7UG9zKanuzLJYXtGX7oZRQ616LcAKCtY6t5dhbWtXtKPtAUvgwwHEQvs",
  "key30": "38W6YAhfZsVF3avqDW7egidMRszyJhkTKNHq2Zq3gWr3P1btotaLQKXTh7K6QarXNKzBTCz198NVWrcfTJob8iWg",
  "key31": "57Vj8xtzTvser5ubCfaSb6srUmWLUrzrQf3SgLGsAVscSGHBbFMCG9wdYgvXEKonvKcpkQ8H5kcNV6bQDNTgGwre",
  "key32": "3cYUXVa2xvVRmqBYQbAaajQeVpQByA8pDxD3FUbcyHo1ucymdUSZ3Ev8cymeth3oKJjQBrn2Nc9xq7vjW9vUPA5B",
  "key33": "5goJq4qf6CPJmrihp1gTQGkKF5vxxQEYAm1gBTivWpzJSrtjv84qBMCyLKKqpiaqENzRuWt7rvx8cjD9z9kfEKN6",
  "key34": "2DhP3wCp6qQ1RCYsHoeAZFPX9ym3tFrmESyTkDudozpXEKNrctXHrXqj34e89qqNQaC6ryN71wFKq7extBN27Dsb",
  "key35": "FJEfAqebzH1sbkoxPEfj1LTYGPccuj9pxtaeWKpiAP8aQnSyAyxWprreqPnypGK8hPVR4EZkXHFKvY6Hn28sWj6",
  "key36": "2GW6E8j6UPEzQiWByERrgAw9rHsH1WVHUJLEEnBWmpMx2hxe24dbFjdoBNnWQrbHn2JDaoXtokPgRAZzFSwf6YCJ",
  "key37": "pkgy8Y9ua9NhQEnZfaNyz5kNMjdSCEkwB1Qfemkt5LAXA6BBL3n1HhVkW4Kqja2pNV1BJEqenKrkyq57Bbaz1FJ",
  "key38": "5XKWUebLGbnCshkZEmLMAtxPSe7HdUYdVBe6esZN591t5HuxU1xCtowvhxUnLB2h7J93p3Z8WLxBx2xabrzJDEBW",
  "key39": "7M9kWDGcNP9Q7cvMP1AdBNNxCGh9tGXPPuZKvHe5GcaWoT7TBqf35kMrFJ67S5jXPXw4yayANFjQHygC3MtjHKP"
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
