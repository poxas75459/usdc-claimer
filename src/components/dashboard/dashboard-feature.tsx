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
    "55fC5FaAir87J8Tnak2CLiJGEBm9rU8bVJf2DPSpAA7BJDg1mwcQzmi4vRRQPFgaRbLLFRWqZw8xDYRnQu32qrH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FRHMHwLvyjyJnpvTue1g1s3pZuDTjH3xZqN5JhEEWgW9iAaVLDSXx217HMvi1KeqRV5RjAwt2dcK4TR85AtJdF",
  "key1": "66dsiX78yE6cLfiUKZKiDW29v62SdV7kZsTPXtSRQAT2Xt3CLuq3MNEr1i97o8oQRXji9r7TQZqswDJWkHfvdSRD",
  "key2": "4aQB64ozdrrxQ21DA2GhpRZPcxk6PCh7PFFeH5DiyzAGN2iQmbMLJuFvRqtd21sLk8fr4zCX9WNoq12yBEeUzpKT",
  "key3": "3Bh1bCaBw5vBsM8dixUyWEDVBJsPB62beAFNHufLiLVwPqxZehegGojUeN8tcDLgJop2Sj8HS9Qy1MTzMEzPDL4m",
  "key4": "66hZgbXFkgSGsW79qhPXkjTcu2FjfZ3jNHyPJ5wGiFkjADcqe8Jr559dJ7hngJp63iEvQhuPANTB8Ve9RmaQYfg2",
  "key5": "5ZSHJe6H53p6Hun7uWcEdW6pYqGHNKKgcbfLXjuaVBke56dtMWNtWbQ2JSJ3kkBapmAUyqvqBa44F3uV4qTdfK3R",
  "key6": "3ZYuMAi2JgP9xvo1LmaG3FzGq5SMV1Hz6kG83UE8nAXYca9b771KTV9EVxYcGC7i6difpc1A8u12mPM2JM3qpWcg",
  "key7": "NLUDJrZLKBayr8rEGfSgR5TLV9bFWBRrkc3dXRQMKfB8KcrhR4YjU8N3CGVVjdKDYirUqcsbDevpEZ3LVm5TbCw",
  "key8": "51W5jjawXak2P1T9Nn3i4bjHbzx6SFTYR441xFnBmWWj7VDfAPHAs6ZhakVZBEKBCsuTU6Hh7R6V5cc4cwcZmZNf",
  "key9": "2m1K2RsC6RjARjYF1xKfBz9iZb8MVGmncTpkGaQBUjWfHbHuSosFV8U1Kq1eNDxiPoBGZQWE5UgDTTgjZkZThsox",
  "key10": "3VpBgiG57Aj7hpn9uUB2EGGV51taErwE7f7yh64LqfRUoe2BVV9r9x5z4yVs5Uk5DYGXryqUZrrVmMQm6dReUCtP",
  "key11": "5kYGEziSqpj93xaWd4XEkRfFWsEQk6RTfJAbhFnqJF7KjhUYSn83CHQZWjPkbCaCRPEunxMFPfYc3cL2RDdFLKD1",
  "key12": "3LVD2UxZbpb4XT4GTnZJy4ZhaQvU1EzsQkz46tEcq5oKT6ETwhspVhNLxD1F5ECJkmuckkg1Xq4pfFhq9pPkbGYR",
  "key13": "4gWwxHiw1yZXCnYXeJoogHwYP86osTEhC2dw8AXuLzM5m1Uu8hJSLdyXZKM4qik35moGBPD4doYsvjrNEgfMnBcL",
  "key14": "5G2CLZxCkucM4zmmvrbU1Qioq4Ezb6J1ZANRZmrFYhXfcnPcSvnV4DqHgRnzG2ZhmJeHBhhVSdw5KS2dudxJKGUc",
  "key15": "59jMYuDdiz5DmboLAuoapvGejxpshWn64BVvWLKMjxQYmMcTdC2vdv8EDavU3xvhREE3osprYbAnA4XJZpay1fsN",
  "key16": "2hzd6um5uTf2CTtg8y7QjHAPb89BiJExgAjoF9xuf7JJmhuQ4qPCcrbSLuBdt97r3Q5tsMNySXbLa7GEhJtaaSYT",
  "key17": "2HSkpm9QqfHZJDgwb9t62swHZv2Yf3xSesegdwbZiu9tGVRohNiVgDNni8AufAyXCuP9THTUFutKXzQV3s1758cj",
  "key18": "5MB4iayiFucfVhuz9uMtac2Xx8XvdMpoZHrWmwxqk2M9cvt9XV7tRC9faApinonPzwSYqvenyAYs12MM8JYkH1id",
  "key19": "UiVEt7SNM6pNyd6MZvPnGM4j85Vj2FYYZ4RMC2MwrxzUkjmmNdBadsfjNKma3dxiCanVR23H2HiSizmgBSaa7P1",
  "key20": "64AsPFCqjaVQtr74XeGByErAjQFoGNoYzmjcU5m4m2cM4gpct2Z1ZZCYxHpFp638pPRTt6dBJ1hxuQbgtuiLbjr",
  "key21": "3HX8jedNnrERkVrGd2yikAhw6vv3NxfnPRaVdenkjkcJLobRgxwQwuzNjCBT6qnE3pP11Z5BVyxvwm2pjAXoyMec",
  "key22": "5fmnEr246vdZiyQsxqemyRhmrrddtFuWcQtV61gv7QeodajzUuckgKzoeWJZPZ1JFiT3WXLSQXSxHY6NMJ3g9ESP",
  "key23": "5X5mFy9o7Y6Dj1xGHUq2MsWLnTfNrrBuvbrQEukApGs3YXiEbnbJ4Ff3hfgAwiMbTARQBAxintqvaYCFq1QbFNWD",
  "key24": "5kH2skSd1ncDY7jfrLYjvPXkqD3tBCweEVV926wXU4n66fjrD5zfgrdQZeHicgP3tdBGki9i5jy9evKaHcSbPJsT",
  "key25": "4yzM3166VPKZtSAZNtnPU5XxSdCLWmAtLVPJanaibGvHhEcYdP8mF9NKL7mjbgSgzt1rjrUAEHga2rY2wVu3itG1",
  "key26": "5dqpptvq4seSA5eFV96YaqvucKbWfUmLx2aNCrqsBaX4fH9R29BrPwWdF5f2KHrf7xUbewJRkC1UFabC6Xb7MFVs",
  "key27": "5Sx7scwTsEpJGRsKZrmTqQZTuuWem7xfwyWJQVgxfeEhZhcC7xVESJx8js2D3QV5zaJ91QoJRjkTm9fyQqPAXStE",
  "key28": "2JvCDziM6pmk2c4J2m3QimZJ7QqbD4LdwuEuJKbWGPG73wN9XhNUyXXamzpsUFa4ucpeicVF7bRmgoG2nznAgdVT",
  "key29": "Gq1qpqsNA7jrHJPAhJNEZCLejDaNVBjJiQ3aDC47ps4WGU3ekKi53AMcoRMGY37zZprcYw4UGnjJtXaBbBNrrVb",
  "key30": "3rBA8M6Uyn62KEoyFQ3VzDLuFhab2aExXM9AMPabcjjruzsMek83HTKB4p5wDjVYb1usbcoYZk9n5nX3mkSxHL7U",
  "key31": "4K9SwsR6BczNniEpZfukQFg999J1D1SoXk9SLdTidq5qqFHrWrpvXAQNJ7YqXZmon47MarLVJqpXbEq82pFcJpJe",
  "key32": "4yRJUC4G8SvQzRh2bw1w6pRsWP9YLxQohdQVHG8iPj2dmnebrVc7h5b99qvDGJYWDnLTZUbDrBhApUVB3RwHgBN5",
  "key33": "2N8UAeXDoiAetyw7dpH7jgN8VicpZfbY1o33eGbWvja17pVL3FFGqMt8sL4cw9hcB3zbXCungRyZF9B96sDYds4h",
  "key34": "FdjPN9SciPvW68xy32SMcRATYf5yHW9r14XKNTWgPdF8LQVUdVXNUFEXhVKc5VSFjHgPAxRb4vgXyvPiDWCnAfp"
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
