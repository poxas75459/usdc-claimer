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
    "4qNd73Waw4eVxxN1PaFxc6oCFp64LFEQvo8LTh6pkQyyCZWE4Uz6Wwv11wMHMYMkwi94JGuQ5sXhvDayv4R5VK1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhBKTUYPu71JJqeb6Nc2VetimdMuUe6bBQo8ovVJ137BVJBbrktd6EuLhAyr1GNwdA7nFDkmFE1rc1FGNZzmRaT",
  "key1": "5ATEXUgZy624ae2sjjJHCvLya71dK7rZxQdSUs34RBemZpvjVrh4F5aE2NGdQexoTQXo1bA9vKrzCxPbffP35ddv",
  "key2": "4vRdoRio9GyYd6MudRhiiDiysvzgvTtXoy6BYEzHDBjJvHSp7nE3ZtzqmDfNmeQiV7EhZjk27ZWm73RJGr5Buo1U",
  "key3": "3eBzVGWS7gQYNouvuSdHPa44gK9MJHb4xTVmK66vfs1yLoE8gSBoZc6MwUYmweVPU1FwSzjZQoFz9i3y9r3RdbvY",
  "key4": "31HwL6F3NKuxRjKf41H2VQGJj9rAU8NWzKeekruXXH1tjx1HSjENfuHh2ck1VyNPH5R2ScmBw5YMxA1G2ueWJrtM",
  "key5": "EsyvPfe61VX3BxXAW8pzj5hWCbhVMGiL8McyoZ7XuNL2fEjdjjXTmqiFbYUPUwvPA6AycAusVaZpCNKXrzd1SkF",
  "key6": "4AYQs5bMnBVoeVmn9Y94GBv2J9wcnU4KJf3MuQsxP3uo7rcncbKyncgSKvNvPhcSS7Ji67T65tbokMcwP2airgsB",
  "key7": "dib7Lekyk4iD6ZrLB59CswtEtiPswLLe8jSUqw1fmq3hRJT9aPdQMQtWYLvbedKCf8qe6AJxzRhobw4bM3Aw5UM",
  "key8": "63Kr7JHuesA7WuWJfLUgusdavmsGQNnGqPmoGSxQ3pxM7zLXeXQrtYwwDGkvdASzcWXfDT4rjTsFainsEze18GdC",
  "key9": "4bZfPyv8P9YqriJaUygjrNJc4kspWEabfGZeud1xYpsVmN3HvpLqncxyqXpY8K3dV5sZ3TaD9StkBjZFwY9jybCT",
  "key10": "2GAVk41V8WFEvobbXdhdghk4BBZSm7WadcGTukh4RUr4wYgKju2XkT5fE55fzYtrLaJhnhf2gYJQFzbhBo8gAaWG",
  "key11": "3HkkuTYT5Nj7hN58PdjVQ477V7aNYBkKAYJeDeDRW1YfJRbCJ3FGW4hYefHFYuTFfRJHqB3JHZBiFAFLEuZR47rH",
  "key12": "2cshnL4MQ8L7kpHCWAvJTTaLEmXJt4c4ZLQABThrMvWyP69czdUme29iKix9mMThZPxQ3SNSa39zWXTEeKNaAcfE",
  "key13": "4jdRPc1rQCUorHx46Hvg7CfURsE2gsSH4PgfYdiMUVeAkQaGL3UTMJTicWbRcVzC2qfTxSaaPJ1psUGnxcHfRi8k",
  "key14": "3TDgUxyGf6uZ4C7nvKqtD7ys6aE1jEPypanAiX1fTXTakVqMzarPiWKmEV5fqCfFFxaDKPKMxmzyURXqLXdqn182",
  "key15": "3MfR5cLQKpCSZsJUqtggmakrHvfXKuvBvew77fL4jqoVWnADe2gocWKrcn2VK38YWRi2VkgSgRaeiahDygZZMiyT",
  "key16": "3uT4Vqb8NXL5re26SAHewgyhDgzsAQtRFbyHmd5ViLGh6zRPRccBQ9JfERjRALuP5Ft4C7uf2FN1fmoWU7gbha48",
  "key17": "5z8LCnYsT2G3LkcRtuRMCWDpChJSwoEYP3h9qrXRZP4oWpC1VwEZEP9YmLuuYQBxukqxVregLSNCP2dZsW2MmjYu",
  "key18": "5LmsfLKuY5fiNZXUJEwXHDAox77CWiJN2kEhBrHex2vne7xnUJYgrmU5SegzFjxfrkxo3PQD2eBuKsHpL2bKLESz",
  "key19": "3so7w7nZwzaEmNyR8Fu5R5vc7Ut3ESVFn68YBA9YM38TLFe7i2SSNnov1rntxsiDirCFtcvjaDey6E2CMfh4eht6",
  "key20": "2Ugy5jYVURpv8bySvXzuZMySgtUCTSNLtCdjeYR5GKuCijiXra1C2qxqVqshZwi9kDuL7EvX9oASY7gE7utFGewZ",
  "key21": "5vP9Gh5GRJL3xpbxeC8waGD3LGHUT8eQ6iR18nybbYea46xSwCwt3MyPLFZ1F5MimcfMiBSzvvHNgYu41ZyRZp3R",
  "key22": "21e3EwErBw9wFh7ZnhLWA1AaD2k59xexUzQjMSm2RYbKXc15tS27i4oZwGJhyUe9geD43yLz6pweBhJks2qjX1to",
  "key23": "2oHhd9dFvxtPC45hpxkEKBpCShMwsbfMX9aDCnT2JGeaHHup15T4dCBJefxxr5AEJ9V27JdMyMqtvg6Lkh5YVMYy",
  "key24": "5sryesvDhmLXq6z5JTfSmgZ1aeXmEb6UzALRNfgmdVtY471UiCpizfaTD85Sw6D6JUH2fwC3k5iYzcxc7nwhmtr6",
  "key25": "VyTkXEZ5KgY5XTQC1uogCKshiZYJrkee9aFrs84EhKjsnQ2yvX5N1E7JB1FzP9KpxNdysLuJA85Jsw1iYVXr577",
  "key26": "4fCz6LfuPTbRHBP9GRtt3RLzPpVaz4vkfn4RGr4Jt7NCuaKR1EUSwaYGajYD7bNKtQhJUf1975nVaQXqhh1hrMSw",
  "key27": "5SRubie2R6He1VkjF5V4gbmbf3D8tMVTrRVkrJJH8YLcFBCtyM72z8Ma86WUDpJR13sJd9D213WNiqiccy7mXoWb",
  "key28": "2m3UXtbzt68RaLasuHip7kJ4xx9xyxKmT7AYKUou6iHD4kfPvQuWBmZ7LBwT4y2qCkiCre2dte8SQpxTAf2668m2",
  "key29": "4EpvDg1HMGuTmVNhbMDCbFa9TTpnUx8o4moLKuDK4d8ey2GZgsXwbFxToZioE3GU3ieJaz5Y25aNX9rhR74DaWyh",
  "key30": "3tVrvsqg3iUh2ffVekevUhcJVakhTaiv6ofBEhauK7tLQaSmBqsxSnn2mUWdAKa87CQqjFFMTRxv1YipsVnzTUGq",
  "key31": "4gGMKD5TdXyRD8Snuus9qB77Zh4mj22idumBgznn7WzSaaX6HCG5CvHkn21BvQ3VJVsK9wbjSkbimKcgiQRM7wwY",
  "key32": "3FXseeGxgru3gcCj4oci7kVmaunoUnGDdyMDY36nthY4QJfzTkKzMNQEHdC8jgJ9HBY2cHH9m84wwoeF9sFZoAk8",
  "key33": "3UcnQ2SLqdXTLMty33tvdYDko6iMSsdwV98cTVebPWDZVxn8JSwc41PTfpFvAnJZXHKuC71C8kN4E9N4Z6jKtqWh",
  "key34": "5waswz6WgGyxmsGs29DU7y83DGindzHibyviVL23qP6PHg8HSxfiDn8UDNTUiWpRogZtiEfycjgBQNDkfpBtPyWb",
  "key35": "TKm4EfvWMxewv5ADjwrjp5Su8jtaDu1RB3nRmT5QPGwYMPCGKFg82qURWMwQmdQaRF8SivoWdtRUVjYZMbngdxZ",
  "key36": "5RCpPPXwWQaQdFZDJnzhoNLMCE9yHTsmBuqyRgAn33Q8oYwANgyHGAjKfaMTK4Mz8KzqkyMQGZGG5GoEa3gYyXYp",
  "key37": "rQW1zAeK5peRjYmaNvu4hCJcgqwWuvy65p5BXcHd1gJHUZDyDdu1xif5fioysrJoC6SDVuHkpHWn3xmWkurfevH",
  "key38": "3EBQWNjEJ3tt5bHAtB8psbrAhhgk83fi9wAEsrk5qoMYYtxnn55ZcDZ8sney7Kq5NKUfD5Bxf29uKJfPRWpQLFeF",
  "key39": "2JeUdoksswM1iiAsVeVijCfrfpCwgGKmuNoUc2CqKQKy8UMEkNc7DRQnGmvk9LCn1aywQqY8pgHNgDSsdE2Bik1n",
  "key40": "5xSc6XmSTfx5gVH5QMQ512p7cNKw8oyk6imz4ZiqQkrCcAeHycMGwatpysubXLpwHh1mLg2QeMzLdkHs4BnWCkr7",
  "key41": "2ukD9G9G2UNt1FKVaG9jSd1QSZrppa7dPYqmJ48EC69iLxzSkChaQ8CFdSLfpwWhRdmguTm7Bu3JGJ7sXuvAqDUS",
  "key42": "4sxzgFZPg54gAchaXXzkUuAjbZQiJaHh9RURmr2mECfwFVQvviVpTqFPYcgcLn1mgSGGa5dQjfBMgjHij9q3GCy6"
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
