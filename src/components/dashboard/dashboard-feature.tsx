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
    "qNtFM8rafEb12YUU9JzwmtR5QGzDKkfvevi7hQDPt4PYEnwqMw9MrDHTVRipppKQ68AAHyurTkNMXuXLLdZiVNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCutxigBWbfWxFhK5ppk8bN4YtEac3HBFHvXVmifoqyfgzv1szpMAdPJJxqeAq2HqJDR3MVnJXGHkHcZr2Wqzhe",
  "key1": "5uid6wJayfjPQJZnFMHqQmhkPo4bbVWjWi7i2QbUwDH2NQ34QEbwPURrjZdeiBUdGM4atPVeazaAnRHNSfapQN1c",
  "key2": "4UMoyuPdzyQ3a5p5XJcJ1sVgHuNRQhUx2LU1JQ7qJYAFQf4CookjL8RY57Qpc9sZp1szPb25CuWd5aWZ15MyJy48",
  "key3": "3aXyqdqHZkkNKJrNFkbEMWVcWvzkt3ppQxvq4BUQkRx3Xvh84bYAicEWbAY4h7iGVMq7jKXCuBsbUtrRdbW98vL3",
  "key4": "3tE4USDyLJuWMpA8eQJv6w2j1UsvvZ5o23QvdYxYBpd2NCcExpDYECzizftmhQfpLoDLh3TP8HmYZeApFBwdZKJE",
  "key5": "Re92BgqN9cNFaxgmBTcFLQ5pdDo1NRpye4uvdchJPDhVzgA8ruExvwATa5pdFtvtjjtbu3GKPZ2UrBw2BwTbCVs",
  "key6": "3BsZ8zNkxS7HwpP1ar8zSPrAgefVjS1TUTN47TZn1YsacRhWcDSFmogEg6FGFhoAUA8QGJ2EC1s35McP82iYhDqs",
  "key7": "2Z3tEti4F5fXkUpPiNnqJeaX8dqruR8kYMz8LF5Lb9ji7rKCC45YuFjvexTVJHdfiRJmG7uL6SWTHqGU23g65GXq",
  "key8": "21irrhfPzWMSnheWeEaDXRXRXY5KkJadkv6nroDZwFL4ckmbn6iQegSGSU2UDpjMxfaUC8xvXiKr3KUS5ruDyHqA",
  "key9": "afqgqn1SeAwkc5XFP2BxrEvBCXe61pCzfFNDoy5HKTuEKrg7pwzfmqX18A7oYxX9TfMTcCLe2LKhQKUEZ18usMi",
  "key10": "3x58N3Ahpk5yqMSCawQDrsm9t3LZUrGp6SW5aVTomixwJKX59N993zobWSy6b1a11SnmeqqQYqZDyhkEmZd4wZ3w",
  "key11": "3FGWdcMz1novWNHBp3NB9VSSCBpe9Q3fs4PVtD8Smpo1X4WaBZTt67xQu76MfauKoBCviV2kfLXzCnxvSfKiYr6B",
  "key12": "yRQCUbnKjqiYCPoY9WH6BvQHsfXRea8xviNZviaWUjcW9YxMgnksoJZcPzZcUCYeUC21sZ9UuAfa7bVsZ2cekiT",
  "key13": "5aM5JojLgLExyxdovBTbkpA1ZjbdNFRnn9XGp5ajGjhuEBvE7im9S5UH6SmcpNPQMLbXYrHVpMb7W48wjzBNvXXW",
  "key14": "52Zcjin6VZnyPF8K1fdeaFP1eaEpk48d2LfNFvaNa41hEJmuEzKMPEX7qZYrRbvKAiEof4JrTqVtZ7WFfNtKgRJN",
  "key15": "rjzCS4YbWN8ki47ewHkvMvAvnzsZJUdeE3zcEHfs4hMqHpDZSbuSysPzcvsjMQAZTQVqDTzbrNig26Qh8HA7dVA",
  "key16": "5FHcDrzZAATiVsLHubHt8bJbcABJCk4sx2KxymcpnvWZcQfR651UcCz69bEkdNZzzYc4dYnEHa8nkMtZT8wR4ZLA",
  "key17": "38SuDVUD9t6yrjBKyebNG1wuiCQSPq2Xdz58tLRUR1j3fynvXcCUJNh3JSqbwuXRsSxD6BB3tM8dzvgRR19vgwAz",
  "key18": "4MjYFkPobkKs33UrLmcKa6HiPfz577ht288jfMopswB18XFLK5UgxcmRTEXjPg4ULWTX2pcCgoTZU199LsVQrjsR",
  "key19": "2bYBbrNuBFBe3aYwigCUQKaxM2dJrkTVehhFzbfPZzenSNC9F1hZhUqStF8xXPq8s7PSKt5dPHf6HVsx5h14rLmS",
  "key20": "43YbePidgGgD58DJ3LM13jPJ2nknA8eiBMhNxHrzxaZzVF5ptPPWH1eENNT118fRk5udhuHZGY6hYmPxY6zgTWNF",
  "key21": "5ukeAQvaewZBrusLz4YC1pvZeD5GJyEcX6TFEAVSGQZmjWYLSeoC4GBN9gvGnidNNDZDczaP6iuwyi2iW8Wmabkm",
  "key22": "4nDDCiFyAH1b7mDBgf4ns1kA83DpkFfeWe2JcE88t777q8yWep1Pe1pHahcPRshiKBKtEiF8EQteArnTBBbzArFn",
  "key23": "36rPAyCQb3YZBzJJXQv1B8UfHop7zKinJYYdoLKLqF2tP6QqcrzAaEQGnqqCReJY9UdWkGU7rochSCUodNnJ49fc",
  "key24": "5CU6hzKq1u96fw1cQGZvMaoqS6S9aQuPPxYGvVHGrmuJ67uZ8BiAQ4ZiTNuS6VXtUUrkgsbDRjbvmMgopckxwuuf",
  "key25": "5xZsLxnduhnjb9P4sTzwdK83pYEufpr3tG6vj7DKGumLWdDV1CLtAMCT84szB275BpJyqnfn6iAUK1m1W52a7hjT",
  "key26": "sgEoEFDpfe1y6EuYZWYg6xEdgTKs1moUjT1ZYqVvSJLTwFLUqtrUutiL7chPwfh3bh4VxzUB6nfUMksgmFvUK5w",
  "key27": "4SoqxzWFqStiD3FcfwjeJapuBL3buTDPxFAzWd7kQZGdew8ANUQzah1sx1JZbCFhd7LmMigPhvBtY436dejWptFR",
  "key28": "5XTbjFZNfGkxVRUcTeMRSPjcNPzGqBroLhvtTAXH6XVviZYUz7G52g842HRGn4K9kmtMpTn3rLJq5FknciHYCWCh",
  "key29": "3hWtDgr27SBFyCDKngx6qytsUCxTMwpgS81ijerdV1C216VFRTDubTRYEn7idGRoZ7YdjxRSXi7CSVAyqvrZwPL4",
  "key30": "3WPQm4TfwsQJfNoxWh5AHNU277TdsZJyq15eUxDseb5iiy1kqHyEBSEjUpT5E2ib2kjEkZjbVsLe75rUSg567wzm",
  "key31": "2orGg4fzxF7qPn7fPiBvmp5nWimF4PKNdJNPVFnhpb2JzbmQULnuXqvndrjAvyLf3vGVpTTPjoxnnB6iwva3opNa",
  "key32": "5vYRBSj9zi4K4bkhJTZqQheTkGYhQBs6jkgzmjXWKoyixVD5vSrR9mawXBT9EYy1hwiZZDvgt1FceKgSqtbyHvWR",
  "key33": "5sYtFGAxBRenDBb3pQM5hGCe2mUF7yzGSAugGPU2ArnVtEsHpmAgzjRSazU9dgESJxRbC3K599kqQQcpcz4UwBgr",
  "key34": "Cp8ATvJbktNi7wZuhpGXrDZTMKB3grJtUxW1dXW5pURtJ59kXBEpL2CvPMdkhQ7sqTi9aQq7AbvuDtCT8jwUnBs",
  "key35": "2YwBWre28VTrpis3kRQdPYws13z82m3W1G9RQvb4T7TpBUutXabnJ5b7KanctiZVQJK2BB3h6zVyAASHbCf83RAt",
  "key36": "3syJsGHcw4sbbZWu9TrC9xpm9kQvZ4TH7PxsD54mMScy6g8TiMHjrNgWr8fdovy7CFE5J2rFRBYXE1tkB1TTfXfT",
  "key37": "4gRhLLhLai5Lw7FLS1SS7hjrsze9PAuTV9Ufy4tXvYHMiCPAVPepxchSGyJBGFiuGFaEDFvoaq4PrAFi1vUtUEd5",
  "key38": "Gu36TdiNuMNupmfHYRT7wCzRBgrnWkoGh7vE66QoiADAGWyu9b4dx1LotTkp8Fyd1YWc3kpfdo9Nm8Twv43iBTf",
  "key39": "TPLcavoQ91xeJh56J1i64EWn35hqXg71TVroKH1y3247c8nKU9DvFWexKpySnjdh8jVAqofPYMNCqmiPwNY5kcf",
  "key40": "31jwq6JrQV1anXmqu869FscG7pAn1DjgnbWJn34cb2WFwQE2LtnvaEev1GsFV9B8jQdR6kPKifStEEqLTWEro3Q5",
  "key41": "2gMMH84E8FwG5FUonLTSPdWeeNWwr27anKZ1mRyNH6sfPLwuM36YrbpfHh4oiZmkf3WJaHt5bx8owKf94kzXVABz",
  "key42": "63uEerCsqmw6e4ZUU5mgG4V5nDMDyjfCnLBZZHqMuGuP6aRJ1YwFMFZyQvv4GwQFxbRWdp58ECFQLzgdwVTkx4yv",
  "key43": "2BiWdsgYxLHuC9HdRBPvhEAs2g7LNGMPbQefdQmqPstuUtr6WcChfqxnWiS6UVbe8QvZJTiaNYKaUaabu2NcURr1",
  "key44": "5cM4RhKRH5v5pmAH9GA2G3Dx39Dg2JRZyisKUbRGSAPDjvwEFZBN1EA5uYmd9BXHH4hjyY6zEZ8x36gmoS9C9uA6",
  "key45": "25B4NSULkEHBB4PiVUv1fbXvQwHD7kuvy19NgqKrG1SkXp7peXk2qvru3vNUcdhLRiU1Fuib1ASDwci1axjqjCBC",
  "key46": "2RdxyHhPEujuafE5mehNeE3m8xakvsxDXTWMQg9WAN4dwDsqidSFwCr4Pv8Nr3aG3PdggDhNYGbrvw9QeLk2SsBX"
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
