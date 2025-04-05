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
    "35D8z5zt1auLrSGXr3BDRFD776dXPuhLGR3abiFbs94xih73RAkenNSPGLWE5o84vQ7bp3vAhT2R6edYRK7wFJBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zunHedQtC4waBqXbi21LQ6RvDNr5Z4Dj5t5bQwthLqsqE3TjJ2DMgFkvaPLbZ3NhJuNuLkMr5R9DGh9r7PjTtkt",
  "key1": "2NHLjNDX2CtFJnV5XKskT1mWV6YuhHxm3V8XiirzqQb6BJqY5tewAdc49ApBYnoXADgiJ4ZZxoiJ556zS5t5Rm64",
  "key2": "5iHBWZYP6qfX9WVFsJACi9S2zGXKsozX9bLBLLkWqspwzHUhyP4ZTjKC5k7BXjXQwADhDw8xNS8fx5Pxkn7tubPJ",
  "key3": "VVnxUuNELi9MtFxn9FNDphoURdajLDaHgroVssh29Yc3BudsPfn9KxaMoTq8zw1LMAHBiv9Sv43wXDzgLsU2yYv",
  "key4": "2rH2ZiPh2PHmy4PLBJJKXSU6mnikipXDuN5Qmr7zWQ9d5QPG4aQ7cj3Fzi9XF9Ccj1iJtGeCe6PAau2wR2tq87EM",
  "key5": "tMTMqyyuUjkVJoKNag8Et27E4m8QnJChUFqJyFTExs4FAy5NNc8USsTtDVVHKjxWk4yttRqXAH1rSeJj8nKU74b",
  "key6": "4PfZX3a4Dmd5DXVeJKSbjKxVeQ6Uu9kwxacVnQWhsnQamza1yhPpnuuHUdYCCz12L9qSwBu5ZMvCYFibUv4YvEXg",
  "key7": "1292xpZiyTRBGuAVsNJYXSPk5cDRKFFk2JfwqXioU47UtzDfaesz2ZETpPMjgLck2zCHKGUt5GsmDBNjNwPDUpmX",
  "key8": "4pCyx3fwxCPc8LgvWq1DFjoY84bziKyufYzqwt8qK7JiJkZk1YFGgXqupjpva2amZDeJKGMyRytz2p4XRMTjorsC",
  "key9": "5oBd7SsFw9THfp9KnAMjSmDz4JAunfYZJxALxAYxXiikqU5PDxnzWjk3mLp1i2tbf5BDpJvwVdvToQ69eXUi2npE",
  "key10": "5z91G8mpFtN6EGuTY5JdQvhAe9wXHLqCvmWPK2GwLAjWchtwh8ZbLK9QPzNZo48oBRH5Razm6YLzdFHeqcjXmTho",
  "key11": "2dRMVmZunuRpLhNBjKtwiiLEoKL3GSWYPfZhqaTGviH8adjEyQASkYzJDdKVVizeU9D8BLWKzvPLU5q7ckRZy5iR",
  "key12": "5R9wC82yzUjfkEjFB8wmyZG8tN6zTPKFoEkvRRdySAZfmNfBWJhvoAcwcxLsNbLQi47FM9L3H9GNV5tX7H9ZWEvU",
  "key13": "5PeGUvLcgot69CGEvYzzC1mFQv4kj1JzjYLEqL8KcjM1UiRkeLH9HkmTC8i3F8oXU88Y1BhmZoj7sBphQ8gMHVaL",
  "key14": "2RpXarXupSvZ2W8MsR16MejQizV38T1qznPSAr9nfviek2rQdfzozSfyQ5BEgas6XeUWGp5SEhra4Lupdf91xfA5",
  "key15": "4k889poreQVeoDiProN9WYwBc9xGBcrKdzVXs7YvedYo4rKHAdxepMGsRUev96hsuod9U2VxbXbZsFSVHnK27Pzh",
  "key16": "4KHAEZNdHeRiad9MLG3i81sV6KotFLLE7S2sZH8WxgQrCPwfBhRdziffNCDxH6oQRdDrRSWY66W57NKkhrDEg6xZ",
  "key17": "5PwqX8dZthibEyjZKEjRWk4Ns6Bayd49WtBY8fUWNyoVZiDE1G1nkG7bDpTCVyC8QqypkRN3FJhaFDmpWMJy39tx",
  "key18": "3266A8HzE77EDy7ZX2PghNkb6KYasfPadoeshdVewE2rsVGGeqKN1H1SXMx3bMonGWzpWnX9PmQSdrJoU81WYNhZ",
  "key19": "67LMJ123XVmxA5MHZTXpevxRSSVruaoSodcdRLJMVa3WyNijvnsS2bsEMaXNKWJqTDvgtpLGRf3fhoVMniqAxWsX",
  "key20": "4KfTpnuKidGrQLxdJHakeYbZRjcJRkdThHabVVbcfj96ANLE2zD8fy5VRBDKKwu7G5H8ey8FbqWqS1S2w2GMHQCM",
  "key21": "4pMonn7vMDehvL7ykTs95pXGbU4Ns2jsm68QV2mxqMjKyKoXaHxGkM8iK34G8kr5QHGvvRzVhQEQRDbobyfn9T37",
  "key22": "26BngDF1BSW5s1Aw5Xda4wwGHwiWGmYBZbmNp7uZdpbzWFAmhWcBq7AdbbtnzuhkoTqAJm2dRu2gU798aGo78LHX",
  "key23": "5kSyN9pZXdfDwgcr4sHi31oB8NNAkTEq7J58jQAsHVFwk5erjd7aXc9vXF4nFtXvNUvC19v5EaECpeJoNFAgt4LZ",
  "key24": "5kRxNC7oh4Zsi3pXX3W7hpMQF9fEZQF2KX5KTAvwzHN78x5jKvK88yWJ99s5ttF763ckyMG2QbWoR2iot1XuBbGd",
  "key25": "2E3DJuGqtGBcNSEv25HcbesSNwoD1qy19DSkFmgwHg62NEGVVW23jje61taAHvavdXSRvdaPz8CCM9K1VM7N1ZPT",
  "key26": "4shPmxP7GiwrswmGTMXPCMVYzbNxMzqbjNK3VfqZLb6skoZzidVhCBakpVQTU1vsK8WjwGDt6ebgi3sBsmVCR9DC",
  "key27": "48D7kdZorx4eQMn6qaNq2S65JSwKkbCinamF7g86Dgr4CyWUXXtXHGzfTGi9mcRsi9mdGfYPLLH5XyYWGSoiEJvm",
  "key28": "36nDSGCDnM7TiskZH8QrhZrq99Xb7PjdtCtjEM7syafkffMYMPFRCAUNWco8514WcP72x9nfJirEbWRknNdbjVMQ",
  "key29": "4tCbAVWEU3SYgbvHKesPZXxuv19oymbDJfuh9Uxr3ECPASQiZH3Zo72FPXwFUv9HcxofMv2JQzvVHqmDAK7YnUxa",
  "key30": "495Mcaa1a1Bwk1uNaRRgz2PwD1ERhsHVAzY75n4jXcdHDf99i9cKYvujcU1cC836E6obX6zcomewYyQzNTDNiEpH",
  "key31": "44zh4VXzAzp23JN5b6XRGXsf5TN5HkRG5CJFqR3E4q1Dwp4HTABZpBCcmXSmJabU1LMU2nfji7umKPA4zC45KxDv",
  "key32": "6xQT71bqDYG84jxNVq9KNhR3BcAnh29mKEFNzdg9FXnYyQtKxGxzAA1TLAF6VmH8Rfx4pfice3eBLjPcJsNNdNV",
  "key33": "29xGS8cUiE6AiZQ1QoBKYt9hhzPvXaRLNNeJGPUN1rPerLaAQjuwVthMKgnMsPSepCTXWGi8khLHta38F7cyVKB7",
  "key34": "283Rmqw8ywmQkQs8MAa1Norsvue8Bm85xG9gWitouK62YsQmXdw2Gxb5A9jFSkfs2SXQXjgKJm92w8aMEhjgLgGr",
  "key35": "rYywoRnGJ6CH3bM3shHs3CaH3rdUDEXD6KVT2NK3a3sTu4o82WprBNDEHGZZDDBTAgXRWuLZdL8MgV7ite4CZrD",
  "key36": "44A5swz5qyqwQsCVBJpFZMQcZNUqdo74uoHLMfkYCE7xWQuux9kEG2wdrg5PukL5zL9Lp4K3Ew5EkBX3A6iFnFCN",
  "key37": "5o5sD9pAsLtKuaNa374rfrLArYD3TNxLdKMDxm9rPGA3Gt2by7ATZTfSGVhaaCLAabhranFKRKCeRbyKYCJBf5he",
  "key38": "45BVS5iVahMn9rKxVd5UkRFd1yFvjKRwnYy14zvRHc1YDygJJwFsmbUDQU73SCFNi2NSkUQdrrkk49j7jZi5LFzj",
  "key39": "2KcN78zDcHevsjU75Dg1vWiuPMnrLSSurKmBnbxo1KMPBuqPNboqY1H17vFhNBo3H2Zswzp3kRPDZ1Mf5cLMoWB8",
  "key40": "8Zm6XDZ4RSpMEsWp5LUeT5t2NqVRvEkmUkd8km1TYUQb91hoq6ft8oYDuJSNFywgpfs6ao2SdQEKjouLTEaz86f",
  "key41": "XJpb3iERVWPKsZdRSvzg3q4wn3eyHMoBTjuzrkV4aJWWyHyLr3KchQAVGnJn97epARqxzr39BNJ4fAeYEG5X4ZA",
  "key42": "Ueg2Qdtc5yM1fWtfmRtbYCnMkBXRqw4KqvPtYYxQvoqgEXffjEhni3s1rSsvhT3fKA3DGiJfBHdQm5NbowEwptW"
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
