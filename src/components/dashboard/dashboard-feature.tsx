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
    "5myCkMJs1tqBarUemURu3PssRGioWci3neWCE78fiHkxARHTpMXzt27iAbXDR7XZqJZ1pfxBpSC5VhixBeahtWvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3Gj9xL6xUe9TUtEgk93wjDLqWJcCXVpWABQYqer8pjvnVZyGtDYtA6EghhhnXK4y6zXsRogQaLob1sfZUu6sCk",
  "key1": "5KYNYQmTym7wqvQowNmaFJcyio61RSVB2YFq75oodZJuqLR23f28PcvcTJBTZMWJ41LjyqjVKen7uzZTR6doSy5k",
  "key2": "3go7yicaXxxPWjsAVwbiRpspuVXqVjjQ7uNzosDhCUXTA1LP6A8AcrUu8gNQ1pCamAQwGjz5myGs3RWVVde9BUXR",
  "key3": "bZ7oHkCMi8wZE7JppQPRTL8X6SqR8HHyspHouQUoLtmgpyT3hpia6bXGnsz4uAaUBRBF5QWCCkA4Bnv33VLMwMn",
  "key4": "3Z1QQrsEK4QWtQs56XZ5bscN6STRT18pMJZiSqSxe1b8B3UStF5H15GdQmrsBV1c41s9AunXhyJDX5mHsmZdNfWG",
  "key5": "4kZ8Ma5YYY6XgzEfcVdXjjLdHwKTj8DWgSeSGAr4M86R4EzVrKaDSuY88UBp5rU4SNdk21zuCHduYgzMKQjuhitd",
  "key6": "3XKEBRfpsmL149ZTMVCb7H8TuGFe1VBuWZPm5cmbyg9BSDopXSQH7Vt76YUPojvSEhCZjdvhmw1qJQ5JUeRLEJGp",
  "key7": "27dNNwTgeQS6Pa4nudWbTaCq6Gxhu4ntoU56bn35YDbsDaB6dvrhqDdEn3NLSxEGzsJHawANvS2N1sjeJSFtZJfa",
  "key8": "VyXpewtPex5C25L5aeqmVe2D5Tu9ZRZmuZaB5R4WeLxkNnCthhTN79vUDPdcMmnZtE4A7d2UgdnrE1FKbCW4yXA",
  "key9": "3WfJzqHyMcTx773u9frzJGCeTZU54s7bWnekMkPCFdhSpwEfwoUXBSgsJNc4ksQZH3trMYrFEg1P59jZcaELSfmJ",
  "key10": "4iaJBXaovDurAodpg72cajYQ9aE57wbaAPY3qaaDK4ezwSWXPp9VySvozW5cbrud9NUAxbQSsibH8wmPB75w2XHB",
  "key11": "4C2aGi1FAGAUawCwupQTTAg1bijktFUkeFzUmXjN2Q3Zt91wVZ6L86E4gnyqurhsNnT3LeeupcgxhcUsVEZWYLec",
  "key12": "46EyoH213aruboRGj8S3sgKW9YTRbBezembTnsHGFLp8eJV9ZhyyeabdDW2wRq5fkLTW93SY763hgF1WVSDEjtQD",
  "key13": "5AT8L5Zzzv3VVv9kKCALGSsiztSBN8PrEFqx6gAwPEWyM2qkbza2PEWmVoH3U4ZHMwdKDJUeevSoaqnFvYVJH3SU",
  "key14": "ZEWMnhvQengY5G5ZujNHCpfmSyJSacfneeoWi9MnvWA1jxtUcgDGrwiP9ZcYxrbAhLewQfydgtkcWGDuATFwq5Z",
  "key15": "2u9p5sSzCDj7vs8VdYL6tadtAycwrKYwWUbh6L1S24r4AqndsG5en1WGQPvQZJ826kRagfyNWexxNtWGq89HnFQ1",
  "key16": "4AN1S6e91rxG2gU3uih33TUHWxuvvsd7vUz7K23TbHTyBYp3KDbruqDKhq41MR4FBKU5zEZAPnA14oU8WfsP2EzV",
  "key17": "5GFNZDRKbMxUcHHjFCW2JtR23jxRgA8LxHd9msjV6nXdnZT8DP7ViuN5yLd3pG5xR6mKpWbzTjePCNygWi91FZW6",
  "key18": "gMzCZWTZHrpnDKvx48inKYPx89PJT37HPPTLcJ7wdCM265RHhpPQgZS7oXL4Rw8gLr5TCY2gM1RnrVK9xAxZBK6",
  "key19": "6533SXGDN3hpcEtHnEwUtWdBnAAnK8NJv5HBq2kQ7ed6mrYWksbsqrCpnJ7Mt8S1MTQBwBY7YxNENy7DQJBD3q5Z",
  "key20": "37JmnbvttVUmbpzsQSK126TGne2Z6Dz18H6hyS3GATfCho4m8eSSRNvHaDKnp9F89EHWhRCY249phMY3Q7i7emD3",
  "key21": "3sdLvWHKXJA3ZGM4tKurKz6mTho29fb9EPVPYdnomEKbLQ7CqNE6maNjotiEhsnG4yF8rUFqGDA7UxxVoWeBcdnd",
  "key22": "2MLn7sgEuPqRibeko8fnBN7bvhMUP4Lqa9f6BRgJaXrLcLaDesmi2U9mDv3FE7J67ZNQToWRtRNuRnDpxq2XwZds",
  "key23": "4YFDmKfepdpubhuBtdM4bXUHUh9zd97Am3umJgxweF9QcV6GPtnfRu9Qz1sMb8TgYv8gA8pvnAAge3BsjTtXw5px",
  "key24": "2XLhAPAv3tyJnDEPcnqvt2ibRSoPJrdHwu7vJjmSjFPjpuL3qKo5qHQwp2BHZsDzQnPqgXCLCB2f8Zek4piuMmwq",
  "key25": "bg8gkP21qsjQnqYD1Y5vyzwCtvPoZ91VaXPQhexJgRqneddHr7DEs1JYz8nz9rZGdo45PqkUWU7NzYEximtc6gG",
  "key26": "4ji5nNs6JaNjfCvHezS83JMM94MRUTmrZDaosNGJwfuMTLikLzVKUniy6zARRSME3zCJQMG5rf5Bzm8xp9LQxH5x",
  "key27": "CVNK1JsbaG2qaLi9Q5J8CGs4CgvttAGEPQw3CUtc2B9xCUskZqN1b9ygeo4ogWRDmrVNBfbDcDixhzjwzScHZZk",
  "key28": "553BL17ouh6UVHC32pS4mXXtnTgeYRJJqvL6nnsFcLLMTcfgnzvvwot819mc57RPhusS1UNAo6qVZi9rNZA7RrDH",
  "key29": "2Nf8xe6QJEEGUPbxgXY4Xv7X39iPEVuVawby4sHrEnyjuRQkBWbzMkn2ECZ1YjQ28RKJS6kpFYPLKxp4chiABSJt",
  "key30": "3ZuTzDwZsceiZhP71N8M7Lmhn6GTqLddUkUH5gWGB9LrTa3m9ExDus3Q2BEqVz4AkBiTSnrcwPu8Y8dhhPudHM1v",
  "key31": "365vpYdcrXaEjTGkhRG7FuJxujmqUpPkdQXuaaAfLJ6A3uVXfXQhrRjoKHMVddN1gx9EwnyCRLHNCHrXJZPDV5uT",
  "key32": "2Jdg76CY7ofm26FoE1xmRikfopnYL1gof3aThJjuBxYj86GaBS2jCb895iCm5JJWUTwpZxTu7d8FpRre18zR8Go8",
  "key33": "5vj4x7ZZ2zUg3Gh9i6rYMWaTgHihfCY5DL3oXtyXSAh7UzCoHLNy3w5u6vhAkcPFd25jjCYuREXEAuL2pd8n16hT",
  "key34": "4xWMshL8fGJjJVJCJr6GLb2JLoJRUbz8RxQS4SxKEbo8LqAsU4TP4w7k7C5R1vxjaeSke54JCUyv6ePPYsLE1vuB",
  "key35": "e5CfGtvH87xvQCNJd3NTqrkbSKtTAHU94TWGVwKBJrqcQ143jFo8WGQyEdVEQasmqZLukmPNXYXobMYhZDi21PD",
  "key36": "3W3RqmCcNftspEp2jZPtjtAK1NFiZdaDo1TWWT48VuwuqrW4fgDYZNA83hABWoLC3iz52SiMEPYPYthkEAX3Vsnt",
  "key37": "5onV4go7pgHbBMLwACEXzYJ356qVBgRhZ1ScmsDTv5LJWn1rkWb6E2XnbZHpQTtRX171dJCKB8yjq92F6ETSxsLp",
  "key38": "3ZTZNE8v3JG9mLZQGPPU1yJfRLWd3rH7VDCr6Vs3nTtQjwYWV4Qq1koZo63Hp9uC5Ppm3h596qt19iZWHQ1hXfJh",
  "key39": "4FWv3NsZcjsbWTncNy6iHZHgSLooSkAxN1fTBav2Tw3ynK34a75Mm9oJV7d4JZ4eFiGHVyc5Bqqqwi1hhhTriP8P"
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
