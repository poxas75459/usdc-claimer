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
    "KmEe28dbLY3rNKNAmi63eJAgGWFEaToA7ggJ8LNX9Ux3x4EFwEBtp3szwjK1nb54u1rwzqpPqP64wM3T75svBHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bviKakkgUDnEBqyij7WEz4vARxLayRyVtZ8o7LrVoqKBo1xkvXDuAPtCDHE4Kedq31s18mw49RWDJ74DDmNwTe",
  "key1": "3HjsE8B63a65gpGTVJtQ3ACSyzXpbViia5hj3Hn9izv3WNHYsXun7nYZL3sNxbxVHMhR9Pc52NykwuoiqHNyHj6g",
  "key2": "PyoMFH8Kj8G6MB76zVMG5UK15Jw9pW6kWbkNtjXenAdrkgw68cQfeCiT71xqTBfqd14zycd3veTGH9UW81RvbcP",
  "key3": "4e7sNNZc9sNxu633XxxE1R2o9ozfuWTC5uqHJq5JRSpF3SujmokeK6wAtXf9sdZcPky2TiyJPdtCPcqe3Mo9ChhK",
  "key4": "2zkBJYrdZCFUr1j8Jeoc6FEnhAyNvxpxZDaQk52TgAp2F49VEnw7vmQijkNnnu3uQK6eRvENW6jVwxZ7sXhPQ1Ur",
  "key5": "2ogUdfpTesCofSpc35eimbDqGKKRB9MWfL37E99Drm1Tv5Ue9Eaqwudm8NoFPAS5MLwsgRVyYRWaXbxSDDN9edcp",
  "key6": "3zpNGc8KZKz73GCpJp5WPLcx8whqKDRQ4AUQGKkumAd7Z5sfTnEBJ63NzwfYybeyYkfRE9U1VbeDTRBKqqHn3zSH",
  "key7": "CTMxUx38BiiyyZ4JsVCATpxhC8voiTJyaunXayR3mFyKfhtZo6qSR5XbDqacshuzo4heBrhZ6tefeUzkq31p8gb",
  "key8": "4vVyXApas49SxHhtd6VrKnczZX3SQtw7EX3jS7CS3UExrDWyy879Mn7HMw38UeSV9ioarQ51PQRc8MR4JjznNGQ6",
  "key9": "2Z3zMDn3yFnbh7weVf7Vao1g1FkahKYK4UBrhuom6t85w6HcapjZSZXRVP4qFzjph2bgGCTLG1hM8626dg3HurbZ",
  "key10": "3a1q9CtfSGHsjoaigs9xCxH85VifpHu78psaWMHdVsDRWEGWLRSvH711E5h31VUMxANEAdDGsLtm2ziYsUVv1AHU",
  "key11": "5hiFAxKJ5FGPMGKuRkkHuUPk2QyHURJkNCEmxmojLrQNo1n3imvwoTxntrFMAFMpnCGwavr1jPfmaiPNT1AxdZke",
  "key12": "2j6xKkKtSkFtpCua1FkivzcVkpk1uWumo1YYrTpcMwDvdMuSg5DmhNFJhAZikD5MkzAdeoA7p66443pESoim8H8u",
  "key13": "2u7HVzxzwDBohKUf54um5Sg2HAhRRT7wzzTkt6DiYua6RqJVzuhQwYiPLzzZgagRFPbcpVY1TkuzdzKW6LvDYGKH",
  "key14": "2AsjkccZxoR6vJKJ19v66XSapsnsFpSei1YkuhZbp6qoUdjVqEHTAzAUnVzib75c5nkCexpD3UsJ2b6Yuwidz84P",
  "key15": "49kiNwBYR4KYzewgubKonjAFaBgij7uwSV9VptZEDGBaghPaButVMgJePPBFiekzzAiQgMfC5HjVqXsHv4pzhaSM",
  "key16": "2Wx5ocGpULZMbx9p9gHLdGWAJLcvwkDyhKZghXhi5eoWgj5MxANHbVYwYAsafdB9Z4ekMG42orqQKnJsj9Wa3nEr",
  "key17": "5TcptWWCy57od5S5HLVL6nTPSp41FFCthaNEJ8xTF4ePbKPF3qThqDpSyXD1tf1Ju3BzLfViPKwQwsXgem6kzSb4",
  "key18": "5Ss54N7WQAs1WbEf4wnh48gKHq1ZZqFf48fzscSvbu9LzmGNMcBUnd96cqpxwN2mZkvbFkXDAeNRNfsdj6DS7q8M",
  "key19": "MZfjKLg3akmiVhk2GawyNfpS8j2xud5HUQgwSuTYrgsi2EzU4T7Y4hNCVU2oWfXzFYwfLnfZuiKPCZhv9rCW5Wx",
  "key20": "67dffT95hCaiEDgX8ZFn4Y38siepZHNwprRrmnEr8ab89euwscVqxjdPenW8PL6ufQUynYuKfoajrTKqe23pxuKk",
  "key21": "w2H65u5cv7kidqmajYS9x1DXPKR5TK9EaetX5NE38yys5meWu1gnrxi7ERQQTpbAVSBTmPsJBQrAY9zWqtUowjc",
  "key22": "5zzgbhEud3owwG8Mq3WwNJULeZmTx3DJ8CBG4FNLcY1GQDDYmCvWTdJXbMfvjsuyfMHArx7bFYSoN9NUd7uoZwTV",
  "key23": "eg2KWjnvoiw16TF8uqFq19YP55n63Zg1xHQjeoctTiBSMN741sruojEExRakex1syfi1EnrZs4fhM8QRQ8FeGTb",
  "key24": "1DCtUC3DxNKTuMhj474xeDScXYJh6V8uDds7nbSrynrYd5NtZgCPtUZsmwyz3Pu4P7mVdVy1YciPQq7hZTjcLoB",
  "key25": "4VkRyCpBUfuodSaGk8uvbExtbJHiB3YEnt46NVKDWQiYVJW757V6RNhMSLVBCR7MqokyRcSAT1cPDTys6iGAuA4a",
  "key26": "5HtxE8u8gZtp7Fjpitp33bdTT1y2JXEX6UfYb25BuRcpijyFT6X5LGWPHbu3PrPtU3jak4Jej9o344N9pDzVVZvg",
  "key27": "TnqLhpYNwz51NRHHPbNd2HwMMmoJrgVGKELQ7xcFqehhwgRhnPEusrinWkcF6uawjW3HCjBkkoy71e32bmdaDLx",
  "key28": "4nNGyrvT9kvuqVjxoCPC9mBYo3WLWMVA48sa5ViiX7mHMyeTkP36Y8tKNXcE4Y5h5ufun3G1tmaLHWLe2JYSvzgn",
  "key29": "5ptiQDuAoEJr79CK3iEgxhW6nwCy9bgQA3ikoABXeT2rVY3GtBYUAFUvfLfhYRbecMMiNWKuiraF4bmpaY3i1ZaF",
  "key30": "3K6hS6YuCjBTkaNid9hFgyT8DTMuQw7MeoPZzwM1YPJSuhKHXQQycvkMMfXx4eRBFSN8V12j26JKysRiBb8uSM7d",
  "key31": "3wp6LVrutm8nmKboK64vdkGHWd3ENscgrinuGydz8cuVjEJSfBA2fihfdZVbm9Wj4kRPRKvDSVtErdRiFGZrasKB",
  "key32": "1qsspm6JbWrZWZBUQ9TAv7b8aniwAhYD6qgZtPJjEBKbwRuYGbgnqVH8M6EKC1bgqEZnFhSEbfHTFj8rtxmUpaD",
  "key33": "238LrkwPRSHPpc426zVxE5exc7qnGb9hQ8TYWyP9QN8rgfmKcr92YZAc3DCK7EP32SN7TggkB4u9unzNdQ2xtMBH",
  "key34": "3N3m2EB3TYdwzKtwWXrnRgKQKrJ3pKzSKv7X688cvpwkkbGEFL74HVrowXbTCy4ta8FDwnSG1daTpPhbz7JpR24M",
  "key35": "2QQmmYbG2ZZKbU8mAcHeYCyu1HxVrn5aafpfCvXHJPncCXr1QV6uKjsfp2wCuHQDia3TGprhjk4WEgYtiCCZQ2Y2",
  "key36": "dRfroSTmLETESLUnXpvsoSJuuxqTex3B6Ceo8oUmhZmsXcAJP6cSU549nua2Tdfd3njL42buQ7rH7K8i1hHXLss",
  "key37": "4K7oQ1TF88dyeHgQVVkMEuBc6uU2TicNRTDe51VB2m2HGMwdk3XfFNNS5ynj2UYVC4y9RtmoxxG9bR85yzNUjPEK",
  "key38": "2a3jXU6XumX9ywXheJfrnrzqt7wC5kLAfCdgPbLQUc4YGCbEko7kT1NkcL8nF2AmgJrxaURzD3bcL8cSuPpomPT1"
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
