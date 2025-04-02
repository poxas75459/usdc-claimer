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
    "2aoNihveuJfsxEHmpaixpsbh8SZ7FCL5T9dZ1DWPYyN8Ra33ai417BUoFvRa81owWBAFymTHx6u58S8AzMRJaj8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqEnhLTJnnDwqcjAtuYYvTakfE4vNmq9ehw9EcEHXffaZPw8t4mMJEmQdLT3RmNoe7dJE62bNmCGsqszwTK1mTD",
  "key1": "54x2H4saox8FikTc8w5v9tujdX7MoVSuSnpxr1EN2SwuMTFpChm99ZxYE5YNAD4oDd2cDjjjbpq7JbtbEQvr45m3",
  "key2": "4YDXUKcXi46vSrSPYQ93KDf5QK7EuqhNt8Cs8K4TBadRYwhBcC3rDr2or4NEW8Cvfyxp2DTKzWDADokJTZJMv1Wx",
  "key3": "4xffqU4gZ7Bi9DCYyFhpHnyrhpk8YpsBZYGHzxv7H6QYdzBVJbb5q85ByLBvbuBAScsrHfR7jxQvCNSdEo6YbX7a",
  "key4": "2PmxFcTuqqboDTZJqXWtVh3rrurJwp7Drw8uuJPhcqgK5nnHsBXzQp3X6v7nrgnuxTueoYzDUbqsaQA6Wc7rkEbQ",
  "key5": "4pu6u44H1uapPz92nkMPCmAkhkjuTkwWtLd3a8uhkdmnjHnEHgp8HuiimxHCJbMGWvLDQk4YP5Te7QHA2uTJowtd",
  "key6": "adc1zaCRkSC9vJXHiVgWqL3aLkauyjsLS9s9sr1unGYn5DF7Lvu3pUeLiyeYSCZpd9gASSB7u8Z762gwZHjMXGb",
  "key7": "47qAXiAFy5Dhr7Unf1kFrunkzqZtXjQ64rRrP4Dk3tCsMuJrm68uYHG99hg8DJsTza4gtv8tdnHMyQAhJGCez6cN",
  "key8": "5dAQ1u2qudY7W6uGU5KZisDaiw2xay6RSCcxve9w6Z1Xc1sXN2LZLpSgUab9NHdcHBJLCvEYYiw1RQRtVRvxhHHE",
  "key9": "2dJSeshMA4eMEuLTaEgscEi6FUgR8GVKJKAiE9nTBEnYgffY5GrFc6SHWEamrtM9N9tccaDAbNzv9Uwg7GGi9EoX",
  "key10": "2X7jVMXM71UNYdet7N63GZy6YBwEp8MokwhxHQ866zvgmSiEdFJTfoMU9bejaFtb8nLUSL2y3kmTrPWZ2deMuJjV",
  "key11": "q976Dpr8JUfRYpse2FFMjWB64wKtG853HbQNz8rCKz8LSU1RW4zeHQGfmZjFM1jvjYzEggsjon4PFnBUjeevNP6",
  "key12": "3NSCSjXJXoa1FJwV4qbSHU4w7QEZTcR3xzzMAjjJcPVXrxKDgetrT3D16dawURCRHWCEE6HmknVBPosUrUVW9qLW",
  "key13": "2ipKbVFvbQ7bfugBopafZaFYN9aArHGSQjQvQnzrDWWWLbc1kqQZXY35cj5SJpM2U7ACMX2o7rzcubJyXZWoNSJn",
  "key14": "383JDCbqB9VzaYq99dXoGd1mjtL9sRg4VQ2Xmu1JnE2LFj21Ezk3UV4HdeQbpRBRskHJEZFdvEWQceAp2CigsvGU",
  "key15": "5oQ5fG25UFmvnktK11ah72jPNgWXfEei1pH4tQ9dZkg2HRBULiZAZqwK8obHtmVCecdjVssCM9y5Jwf7bzKrHY8p",
  "key16": "S2cPkH6Gfsjxz1kobesZXfnbEZ3XDHXvfSvaybtvfCTByRkeXmFJ9jLq1mpgVHYWmbvMq9jdtUJUvNWxCaczKub",
  "key17": "4mBbT7FSmHEoMHBBzH3GdPPNhwH6FTWjYqb8u5Zz3PgyFzDvfKqMB3QDEy3MTPW7AYJ4UdrC5iDbzx7Af6B3KT6h",
  "key18": "4K3U8yqHgfSwBGXDfMLm5FWMRiv6fzNwptbRWteSR1P8eytbd6wfMmurhz6g4zqyAav3oxLHtmD7P1rwmfwGaZEv",
  "key19": "3p5L3nXJsz2tyubntmCUte2KJLXXSBDu7LCJZ4Sdxum7QbojUwiHqoiz316NhCxbtfY6qiGdDZazqvJFhxgvDME",
  "key20": "3oAkejqNDkUnM8EJxfAknnGgGj4o6aWH4W4PcmHYw2PDKXTTDwBh2fDFfb3aTGxx8W4rhKF3tawgSZJ9sRAhHZ8R",
  "key21": "TpTqk7ViPaghkpdRFxSexuES2ZRigiNPa76WyWQR6kYNWPwHbpKFgGDYbGMmALnwU4LCuxqGPU7yzP63X3BTpCP",
  "key22": "3pjch3xs4sCdaEErzx5pk9Wj8gqUhpGz74cTsnXAfGvD8uvK6HPb8etJZkdYC8xrJYjMjCHXHDK1YdswSt3mDLis",
  "key23": "5FxfHNeHjcnaizayNRnnZvL94kmL4UwekqfPuXVNaVmXx94tNqRfz4DnDCF9yMCDCdxfmGNMtMUv6qfsAXe4RWjW",
  "key24": "21bm9ujGgmukf5dtcdPqaQ1BjtqyGAYEhXNzcXLeemcrf8GK2XBPgg4e9iwQfj3wKgioNPVWrY8fWTFjppjsDqEj",
  "key25": "3ip8Jx6EF5KkrdjTGye8gKSgDCBApkd27gEKkHULVMkjRKsLsimNymR2jnftFRhfRXsokREqGeWTpBvDxRVxVGMf",
  "key26": "4p4wSYLTAcyrkmjynzQ2jdkBLiWTb7RwA81RsR37dxanuRTYmixV5mySsdGeaX6MNdkb6xjpWQw8r4JmLPHcjQ1M",
  "key27": "5e2J5qj3TwZYW88ow5SSNsSvt2uZodxUqKmriJb8P9U8aQyTwuvJjh8CcKSFVxq7PgwMruZPxFR7rRfBRF8iuvTX",
  "key28": "32fgdUEgxFXX2Vi2C5hduFYrGbr7QH55ar6jpARn5Mv4wESduzDm5bRUoE4Anuqf5eTatPN4M3R6qoAmNLhixKM7",
  "key29": "3nXk6rnU1Tf6C9FDeya1gtZbsbgap6F2XCjBd7rkZLCqRvZXfKVzUWMUQMhxeXueJfeoWn5fZW6MQPA1djE426sY",
  "key30": "GbjjUQQXMeywGW7CXtiKRcTKEG2kxmxXMUVYRkSw6him9j2CeKa6NSMpj5y7W8FPaNNDySLDqi2rrTxX8fWkRsu",
  "key31": "2RQ3uEAGYzJkYXZ7QG3S6qpzyhUBnXqsiJm24SaRDrqTUE78y3ChRUuwKo8qu4J1hVjUzNqU5FGLkXqBa2pmPVzy",
  "key32": "4bwMmL3QQJUcRbtZWnnP9BguSbpixke9nzXWpZfRBejoC18gEEE6NSrN7dUEEycsnNKhqgcNrQjFRmTR1i7C1toG",
  "key33": "2VLqQJGRm2XsRi3dtpxwj7wee6dxtuQshY4a3JARThvitkG9YHiCKFZAdn6e8nM4DA14goFrWHibsKWoQPWxcvBg",
  "key34": "2bFSiZTYDQ3qhk9wx1bTTv8dydQ9ic426ZG6uWMdoPB14RP3XhZ1C1C4RBe2ZkV17EfEEhyPXtP1gBamPqpMdkQG",
  "key35": "mpRgkbuxx3YEqG6G2pFHdPj4Smmv8S3M4pbMnNcxY3jNt9C7EvyB7wTXyezhPZpaXQgET8S2pj6iVWjEuSCQU9E",
  "key36": "2MDfBGCoeJhoTGqCjd5cZyJDhYUB1k1XiHwQD6WYzRvAmxa5PakZQqWAFZyCpjd17CPX6v1sXUNyPGCTLn61Pirs",
  "key37": "AdZ44WgP9UrYRie3HREQ4H5uh5Ju69gGdvjMHq6L4eKKfuepww4vd95REwtdxEzU6VniVBn7aUKC934e8eRAk9u",
  "key38": "38RRuYMyNiafzWoE5xsmdqeCzS5U2eHjPkEDZ3i2rkSwAmZxhXnrTxDsV6npPaWAnk7hSN2F3GYPHo9rdfSwjZ8e",
  "key39": "3vuMu9D3AyGLj5BnFrYfopXaababFT6JvSJ6ks5Ehpx1qriqY6cM5jGXLu1BpCYEcib6pQzSwTm5nfu7A8auWE43",
  "key40": "3kN5zLyCpquYy9uUeF5AJzdpQfuT5bzHgczKvHNv8kfSZq5CDsbYSWWKnvJSb2t37HVx1SQuF4fhdFAxvKcmfULR",
  "key41": "oEhL4M2q2EHth8X3DToF9W3A5PvQniMvXAVVkHFqnberZPjjjwD4Q5zgoXwZshdGUwT9ApHeh8HmsKqAo3zY9ST",
  "key42": "5aJpDHr136a8ztWiNQATF5s6ZPo1oRwd6yDQpxHWvnWVwaRdFEf75iimNpGhbB4SpNgTa2XXtS4jZCfgrSgiCiHE",
  "key43": "3DgUE7idbWf7wtXFsqCqAzPhZuAArAQCj2cZW5JTcSVqhJofZYZcLaRkdA14baSuTLMPp3UqitV4R71CXL1KEGpe",
  "key44": "3YvryGPPGaKXbDaxP8fTtXfuD3a743ahGuJyoPy5CdAVv1K1srfPWBXs7UF94nhVLRkKyEmvN3uXwR7qvD6SoWZb",
  "key45": "Vg4y8mDNbEWG9pG9AWJE2qLkdmRo1adB6wp5Jvn2uMKJQZp6S9nf5uwLJrggCpamx86d72MbpJ5CuJbJET2HbuR"
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
