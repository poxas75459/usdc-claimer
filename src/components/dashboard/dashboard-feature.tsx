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
    "3gZM7nrw7bqmqRtehxxaQENfzE7WEcfHoeh5Ur87qG4efaS4v3rN9sKod5EZgPsmcRHFmF97KJAdTtFV9gEWnL1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XtBQhFZKycaedUVraiKruUrN1cti736HEdY4mFrs4io4wSqMWXYibToQWNwXyUVDW89zJzcKxyEqvLZgnT5S3v",
  "key1": "4B9NqSosaowytzysSF6DTqTHKveeQTeutMbMnsCPBpnerJf6oKNZKNvJSqxuHM8gJCz62HwV7w2cAiZrpGPWgG7a",
  "key2": "4h4od3Dhz1AFvwbvLhoXgWh2ZALmabTmbxud5EFZm12eteQy2MQuzDQHgZZLApnAwXfb34ypzt5gmKSZRuD58gU4",
  "key3": "26B88bypoU7Jdukm6EEkjaLVwNnyi2Xx5iG6SeLoXwjX4wQSbDXEtjBuJrPXvGszuH5BSx2yKCiLpkjVBavvrt7z",
  "key4": "2wguNQiZqrxScLgWLYjmMCbyz1yUDf7WHbagyGJLNdd5bYbSZwwt336nQvzLjFLj4zZL1emuvNcxdu756ZsWuRQJ",
  "key5": "E6HXvpjca2ZP2mbmJeViLFwKRuuBF2HpiSRgbiPe57YcwDvnnpQzxBomfLZWiNUAhzA29YLGYvEjjYJwzoDR2nM",
  "key6": "38Bm8384HZq7oufJQcyYo5px2A8WRGpYrmM1kWE5tNpgov2Zx4xVcBCY28FccV1iXcJUdDs2wSWdkD16LZmeiHbB",
  "key7": "5NeDqstdjBY7s9wVBEBmbKAxAahcfetQhz1mHDgBSNHuXVcMwYbTHzTv34N4VjZdKX2cqzxPiGVNZGrZhYKqVUth",
  "key8": "RS61B8sriT1Ef32fU5VTkJ1C5Y3C7KQQfo5ntmPJpS1kGDrEPWdBtpA5c4b6MxgHmwPYZcE3VHzMmjHfjmTqxRK",
  "key9": "4dudmB5zRf6Ecr6A5Vj3BJ9cS4oCsYzqVsWS9B1qmVvhrpijg5gYXwR5ivuvHbJrUxVYGufYmh4qoxadagbK43By",
  "key10": "3evoqftNvVV1mJwbXJ9HAVumYtVGhTEn5PmnMRWoUSRym6re4UZnoKfGZc4rNh3c1DPCPPw4hnmny6nPFA9s6kC3",
  "key11": "2XeX9NoU8DhQ7a7PVdzip8iMh4HZPSxXJrBq7QEyEtNZ9Ze2MYTjugF5BZdDnJ3QHNkM1kCurATLNfS2CzVchm8N",
  "key12": "2Zhof9aCWUxPCEZmabmnKJnYzUk8s3LVwZjMqEhBnWuWJFqF5Gw7btNdBdmEvcaXmUdeedLHCrPrf3WNWSPQ7vem",
  "key13": "2wMCoZjUZKFnhXq7MfQkggYSq8hDxs2oEGH7weHMWMjfYxeNV6NK8JZdMBUXJzTRc6erXXcy1c3FstZeMiZCfHf1",
  "key14": "Z4YDFwRbhk6mv7J6LQbja1ZmiNGPQXyMHpxLG9fL7Wbi1RVcRWMVDsts3JJ9brPjoVEZTKAZQy3ijaACZYhCp6a",
  "key15": "4wZAMFY64YDrWjSe9X2n2FSJ3ugpFrRwxvzaE75UEauMgTENZ9Z92jVabpHA86RHkPMGgoJe5V76rCeHGRbYkcB7",
  "key16": "KcxmRcdG2rUi7FEtSWQAiJU3Ypxm6dZyKpqegKtAUxQKC6SoQGkrwNqNgspvUkhSmxhs1XDtN7tuvZZatrBXHVi",
  "key17": "npcnKSTSGmfHeSCwYJiinEJphCuUqSFvWbBikVD9n7bZWoEePN6xd18iube7YvWXmkTvfVStKn2m18PMgKtCS63",
  "key18": "2ZKJ59jnjoZY46nFB1cPpCx79mq9aktWqfQ3ppV3iPqtXD1krwoXefJank765jBdVBWp5WMSiULEUBvND6bKRLzn",
  "key19": "44Z6eRu3b7jpFp323hEdVWR9bfNTh8qRKDbNG74aJjbyFCfzBTM1SeZWK4o9abTdjiRphPvrUkjgnUC7ApL59oRK",
  "key20": "2wtcyYwiAmVMNskf7PDNcxqzCdzZzR197vYPFGLTFDNGeu9zB4VoLaaZyGwXRbBbpVP5jJVuiicez1cCLaxQLVu9",
  "key21": "2XHBkxkfjFVDPAK7QtTjN8JnB1YMph7fUBytG7zRbwQAkF2MQ6p9yU93uTCJ7GErouaf8tKKNuMdcpL69oiDYFsG",
  "key22": "EJCM5SG4pkfv7gbRdxyhEZFCeEvFWBmYW2hsV5NivJAGeCYoSgBQrpzxHnvhyft3Y7hvCxiSzuybzqb4tHXjJc9",
  "key23": "4iK1fq7aGms8MJ5WxaaWuqLUkvL5L94JizYKwxG64tX4d4bhdoGEWkbzZnnRg3bV5KDncr9XDv7khdGi7s1pzmfA",
  "key24": "2K4qjwVCpJ1XcgKkGd3TaPot4nhKcNon3qeLJRwfetn3Ncd5iGqmR9FLFcjB6sbgdGR5HWF7jzqu6VQwJERpfLjk",
  "key25": "61xV3GDkpX6oNi8nGiT4G2RNScQC7VkKDtP2CwUCL5BMRTczQHKqdMXoSwRcG8DXHd5qEtfzGR59o8AoTKLHShHM",
  "key26": "3tzdXK5k8NstQs5prCcEWc69LqwjFbP9pmmneLxuKkm8jsq624s5ypFjMJq2Zzg2GPznrNicJzbWxxMwYSswrteH",
  "key27": "5GpUbtfMbm1Cqt6rFepZJjbHaZ1HvPmGZk2auDbokTFGwkhVnKEQS42FucAXqh7ETR6PD1wtgxyG6wBbXpdJYPgq",
  "key28": "4zK8T3V3WBn994xQWmuKuy8gNgbibwSRR9a9iP8JGEPtVpDieijDsA6yHv83sPt3khhMk9rmNsLANFa858ATiQic",
  "key29": "2gC5ksn5kntMn1hYYsSpqi4KxfSnDb6B6ixDXvDEy41ZzLBomgehC3gC7Acpoz8yx1guH4rc28R3EDt6TxVtYnT"
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
