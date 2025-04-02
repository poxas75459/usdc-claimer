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
    "51LtfET7bpMzGty8EyBmz1W6QcaC9eJq42m96oCZcsPTZfw53y3W23Xu6qc5MW2Co4nWsBnj45PCr4hegWGvg6Wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZR3KeYk5UES62hAEU7fPibpsgR1TGPSNEuULXFYsyk1WVJpyo4s4JFD2ptKNQT7XU5gVsG5S2VDimqGUhbHVZnA",
  "key1": "KTu277ps6g4VoygocVkKWt9WPqjdLnM6wasH8mmLRyDCMU66gPaA1YJ7aJEnvT3MqFrKTvxCM6nr2QDhWtsiLRV",
  "key2": "2NMcRLMbXmKaugX5X7MDw7gDoSBNHp94z3kk8m2g3sW2nKG8axVy2YsZ4RyAB7JpQmvXUH6NCr3rcRuMPhUJqYys",
  "key3": "4Ue3zrHm1G9LLCRWLp2Mz7P4YHxY4yrGoTvonLPtCdHDtjAN1rQJMvAh2S2NohgyfEHBHqngjWbzMDTCGUFzULt4",
  "key4": "2E4U6ZYiuJXoEXsfnMzZYcnw6v4XdNxmSVYCuezreBN2HwDzKoo5z7CVWdGtBSHd56AzpZ8yZ1em4qm68xWtfHqP",
  "key5": "5qm8z4eyPTDXYczThaQzeNzmKxEHHNtDAUZ6XoPZrfDs9Qy4V9QFo5fR18S4paLmi7rz9dm6ECCzrTNpum295Xit",
  "key6": "3ur3qwdjnyV7x38aHQfSQGHQQypX1hKXYfYqWsuSdPvQ1EdKHaRjATkKJM4pj3CrrB38tZHqHqp9GDo7fNJksVKq",
  "key7": "3EzFjV749NTAAfQjoKwbYR54WRdM8oCDbNeKw192eBUwML3yjDjBB59SpGD4nWotqT618zPw2aCBe3sTfVtRehcW",
  "key8": "KFAkFo5d287CHqb3U32wcgkT2yh83iiz8WrUvMPg9oLXAdxYz6Z1eGrGNi3X8JMnWkwrE7hCtLQY6jNPKG3aPJP",
  "key9": "2DYcJFah3Y7tLr3mCcPZ1YN2U5yRp1f848WmQhE5EegFTd4ihSR4jNiUeSGkMdCrPBP6mqM2fjLXjUiJC4fPQAKf",
  "key10": "8FbrXmT5wHktTQtFx9MsXkCGmjjZhYQo2sVSeiiGDmghtZWH9xENgGfP1yxxAPNTq4Y7Rg61Xg7iAkUR3TMa42j",
  "key11": "5tgEWTyWYLJHk672bCrY8YLjSoLuddGXKsWiTaRyixfk5Hhq8NxuhW6UTRA8dUW7L8bj7Q5SyErw19VHin9rtzp1",
  "key12": "2wu7EvM6RX12MMSst5MTTLzWSP6PYynjsBVdyaiUGQfQyWN2Kw2ozeb2JPK13GuKPfUct7AKncqy8DSfbMYRe5qb",
  "key13": "gQwoUjPasSB8bWbmqiNf3F8n9t2GbbSYDd2RAVdhW4vN3iamKzBxE5cNcoRpUocjMDB22kpjup3rXsumFDBxKxt",
  "key14": "2p5v9Hwomv9NypkWGK4AC9ScyhovNTDzEq7V58kUfCMrPRAQsmfrC3A9T1oP7QkwamLaWNs3ym96dnLT3uZZRstc",
  "key15": "2GuBg71o92sMqTPzHYvTJUeoA88KgZWj7fcL8zgcmF85ENRNxqNGRWmXCCaShoQwb6q9cSyCUFj9WLf3JxNRixwh",
  "key16": "4qWsWKnS2TgAyZnfhZG1mrjbgkSP8m1hvkFyvZkvWVen3KdNh4yXPvfSU9UFgqYTDfQmU6ByvRTfd5BCxAEi2HHY",
  "key17": "3ZbR5GauiRrmNZpJpDirDzL9LyfU1XM3mMDDGkvERcFqrBnDpWo3RR3DjQQGG12P2AppN7dy4yKF9ctHTp2VxRSL",
  "key18": "3m3pNvR9azWryoZuxAVz5NstRHJnmu925wB9Zmm6qJysTDTxRTiNzRNavtT4hDdwbsshokK9KW1X66SFbQcr84f3",
  "key19": "2MB4tfVvGgdC3xzbipWA2mEzWBFNesVxa6srtWnRnx8w2gTgX7byBRiKwwVtRjSeuQPuYNffx632MR9NjaAFAuZ9",
  "key20": "42LFN7TzUJpF37SfAFwmdnUhuE2VX9Dmpv6GgPKX9S4jLo7hnR8KKeEdyaEhWF5Zwm3SbKdMeTcnctX8ySrEhL8U",
  "key21": "47ZVXB3dNnGxCavMMnZTaFYAym9oQkYcWxddsMPkkioRg5947iPLbarKPHjguXz3yWB77YwbKbha1K8mw81YVn5f",
  "key22": "4WANn7uW5649Mk8i8AFD5Dvy37o8fD41jDof2nvCJCyfLrzvC6U12pPVHbvvHgLVyMRMEmAKsq1csvw9k1S9jPzs",
  "key23": "33eAGBeKhYdKS5aDzVJ5kAEbYWFCHAnJkB3wRVru112Em3hiHmbsWqRAgJnxTKpzrbpHtBr6jHfdSm6muF5WS749",
  "key24": "4K4HJzMQx6Lxaxpi3xHxdbJwz35FUS5aPwVhH1oQNFaLKw6wPjormg2bZhsaDBWjh2TeVi69hGEfeZhiBKPum7F3",
  "key25": "5n1zhqNLgvNvjGvAyivwtXE2njUGscVmUD4Vw2XR7eD8wrn6gs44X6tTv1DTf4BYoq3MxwJkUpmkNWQGmFp3pxzd",
  "key26": "3joM87neWUKfeM6cSkggJfXWK4iSfYcEgXY5hRVwtFxKdqYuycEKzyVagB6FmpCH2eeDEZJRxEp4AXv4DJ5CB2XY",
  "key27": "MyaDL7KLTX5njgJZAYUyqMLZd3QfzQbgzoZb6GWRpjWrHdrWd49LdctD6vWHcm228vvTXfAmgjG7bE7Pvq5bbFT",
  "key28": "sp8iN3ENQ4dZpBqkUAiNg9t3LCBDDkUGRU22zjiv4C6C2QDj8fmroj36n4LUK7oSRSYxuSDWVyiHthbAPLDtHUr",
  "key29": "2LxmTSYhzNyhZ2FJWF9cxdeqQJpsfBujVSEhThxbU94T2vA3Snx8fSKWF6Lx13VLwsMFZH4wDhbcKQ8WR8KG8KAf",
  "key30": "3VKWTnJmKv85SwTqXAwCnH7Jy2LcjUiU615J3tGyGmNfYiTAxayMzyJ9sQD4TpEbmz8Z3xG4H2HUYo5zBXx14RT1",
  "key31": "5VF2VckTjJ3EsPktGTYTjk6RNhCom6xq4VEPvXsy8VtmYZBsF6K64SubLFkpkomYJFvPXgv3t7yqFyodnjMTJ5TT",
  "key32": "49CB1DZxZowLuv2w2xBKd6SSksJQzsy9k5XUB16HH5jkHChm46tjrBLUNnnaojLkgyztNXjekjvSb7cz8nBAX836",
  "key33": "2X5i5DcNMYdbFHutRjp1h37QPsTjEZBJtSCehpGA2Wdwi6Bod5drffgcPTbvRLXMvkcKBcEdhT424tuKMrwp7Gm3",
  "key34": "2qZVZyfhKGhmUGCkWnuDf1GJE2XydhbD6NeD1NsMzHgWqd1vHW2agwJdNi2a1fX5ZwTGBBw6pr6Qmoe3SKFD3qot",
  "key35": "2ym33biZdFsM6y2RFRo1kzjXFfJ9A26msjEUTG5D8Q3agM1jvsSHRW2wpT8muUZbHGxSzUxu4DcfrprUQK7yFckm",
  "key36": "2vtxjchtU9P3pxXQCA8LhMgJuWVKjU1wsq64E3fY4pQqRrkoUx4ZHD5egKyyMufcnxuxPnSnWtiWdj7eF5CAz7p",
  "key37": "3CijrNazvMPucAiMbboUyDN3zGA3jZFgzhtSJpPBMfvT1kcgDDD7TnJYivhba3c6YfZgAVTcBUMahuqNeQGqmW9J",
  "key38": "5XwkLEVuPTD2WRXjpyL9UVxm16atRL3SBYzhidvMcxM8tGUxAQozNuZ32e2uBuadQwbeiiA2BZYsYo7WZbTagGZQ",
  "key39": "3yuEiaaQBu2ejjRfqRnoWq2ZEZDYKVTUWSiFvU21w8xE4uJaxo1JHjpD8zD2VbDyxJhNE92HWjyqKYNGtgkTy8Ym",
  "key40": "2Lk4ZDvmXetnFARcksg6CZWEWgc8UtC52i1CUXkvrEigi15kv4eJb1AbMYaC7TbXwS86U5L4R5eUXDoHYgm6ZtwJ",
  "key41": "4bLyD4nvNDZfcJA6or4Axntynz8dMKKb69U79CpUiPnQixNJtzw9rZh8JK38duqRHtvHA6qgqHHy9L6yCymUtfPo",
  "key42": "2pefPqaE5tnsGyg5n7DEvLxxnjXJanj8NQEbgBqXSv3hM5aJJc1h6DynCw3fJTx2wgXS5nSp5ZknSLtzAJTQeoHM",
  "key43": "5cQ7QTVNp76ys9Q4DdeRNDEmHAF7VkoUbsMLVKLqrBF9YnKsizndewVX7swkSwMgL3v3R7EDZQbpk6Mk5i6khfTg"
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
