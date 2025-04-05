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
    "5xoy3v8vo6YQVQfCoAT8s4r5BcCDKTURM7wpEoWVmabCbZbNxrhG3Y4EF3Djc981sP4wThg2jVF6SZSMPnEaDzYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPPUQwHsUaHNtU2UucKo8pBHsL5EiZpDH4tT2biVX93yyBPb6AoDCME9mnUhV4nFhUVSdr3oLXinYrejVpMN1gi",
  "key1": "2k2Nf8cTmZNjNZNesHn7c1JJuvjzVccwMYocPmthnaXSUBEbSqUzHDJqkFzR4JGn6jAUsj28TeR4PLbEvQeWGdAD",
  "key2": "3sfsF6poZozkFpQhZ8i9qJmkBP5BaobU8FnPfXvn4whEjTpfhe12CJtDNXqHkAyqyCyKX5cbx9Phg3dWhHnwgzRu",
  "key3": "3pZ8WtgQB9MagBXcqTEsqdWjABpLX6DWEQixrsqAa2qewPAygTNfaQ2qosAsenXvjejqJJM2uYrEoYqU59RZHpe2",
  "key4": "pKGD1ipsNBbjzQewBwx61r544YSRJh5UtuD68A4fuXPMtmr9SdaNy7aBztyDsYG46uhSmR51nJYnmCtCeYR9RKG",
  "key5": "Ki7obAABEEiEhc95ksvJcgNBwGZSSwichbtAy2YjaYqAeG433vfBfbiMivi4iUVHEdnDFjkbGNPVErN2ms4hC83",
  "key6": "4MgmSVbJtH8UM8C41881J52krX4GuxrorMPYHJT3gqPc92WgXDABsrGC6UyKiyc7sfU4VNNvLtiympUcXWaHHbd8",
  "key7": "52B9ojKJFPqEjHQUFsGZ5UYFpybq2LBm5geAL4ThZbADQChErbB4BBBqEKXsoMEixqudhN5oD9KWyQ6cSQjesHCZ",
  "key8": "3PPXj4oMcvdtQj1RyA4Lk8Z78yd5Us1Z7vZtaKTnHpKkKd9tMAidDXEdBm3A6v8osCa7XiEkqf1kQ56BzT4Kq5j7",
  "key9": "TjN2BE4zL1nBoBVDAZtYakV8i1zChD9ZFaG3m44uNAcPDd9fWpyjcttxS85kCxREj35fwB6rfLP7HggerGrJhoe",
  "key10": "4bgU1syoeW91Xt4muKhHdagZaMm9FjoXyUw9tgqcEduJM7cyTnKSUs2L2iw3DCwjBmFx8nCLJ4rnCjk6MbDooFF3",
  "key11": "3t346FKKMNKLnoY97FAcoK94UzygTgzkjiSmGd3QGW2BzW4t7cm3y4XWmce2PdJDFbpKjpfovfkcSWVBKkjuWdaP",
  "key12": "4RtkK8t68QfjZciGh7nMsV8yHUtBYTQUc6dhoXamXiHKJYSy13FmQTVTtF6w4nXYjrzhy8rNtbz9z2teVxcyBkv9",
  "key13": "3CG1xQ2AFm5VH4PjPzKVqZiFiFmwjq84eavjJCfHhSAzwfATQJ9mvHcu4tiVdmPsVYTkvBWBg5HUkjgxn6UJ5hgn",
  "key14": "31Pt92cBfJtc7NBVYq2ocngzTtiwLV5NZLKCjbmiU5P8EjNnytgsEBMq1E83DmJ2Ljdmux2mNs9MrS7oi2mCrYhi",
  "key15": "4bddnksCwnYfDLbCdb6kJJSyUCymA4nhQ9r47XYsdtpe2wJH9BC2Crj2ctGUL23Xdo4GUCq513ztfNB6poZPR1f4",
  "key16": "2tqTBpKP6ZiFNAY3FDJnFJDGduXYxux1Pi2tF5puibgR2eb8YwuJ9SUhcXRF7DBvcgvwFUjMLVUFKYsV7B5nKb9b",
  "key17": "452DNqA5Zv1BTCCLQPRnFeiCoCDLoGD7HZXsp1PHQxX6QTTEcWwdGEGLxdMA3J9paMZjDYBSjjLcqJJKG4aXWDr7",
  "key18": "3UXoAFZ7mecmWzyvSKhvnd4FaeBT9Pey74xRFPxsPJ7TgxskHWg7dBRq4GMsAtUtrkesHAdazCFAUhWQphsNXjJo",
  "key19": "4wbawTHqfqq6ibu4tMkycBabcMKUVVipFYWrrWMiZYoBYJ3Fgv9SuyWVEkXoTMjmRgzNzR5pCYpk22RGizLHwUGx",
  "key20": "3rESEtivnQzSYc93YrAGS2aBezprkjzzMeE8CCUugiY71dsFkjxNecuVq9uELCwNnWjLv3U8h1QPma7rHPACVrF",
  "key21": "4DcuQirV6uGvJ8EC7sMhxPBF4jeYi3P18jvaECnJhmRGaX4dRqPmLs83LQBygoLkVk1MR8bibEB1DPbmPEkvgvxf",
  "key22": "5NnrY8cFQo26p4ADVLbcSRfZYTaknA1YahSgo8sLEHbDM9Q6L99Wxqy6pv29EqpvkHZoB2nvzFup4igAXUu1jHQR",
  "key23": "267xJSuSpipw8Q8kYfh3RC6auRPMf7H9QUEPGAkaZtPU87rKoEuQaqHgbaWdA7SRJQodFgiJekaWfWxj7kUCaBoc",
  "key24": "4KNomaBvizk8coSzZWrL9eynyyfFvo5UzPn4HNhueiETpmRDVTyGJip5ZMd2LDCQTDneNs41L2UQkNPUbFwzVuRL",
  "key25": "5B3aQm8VmodNfqVWhg6YuX5yVrxgc9EUbChx7JH5fKGpCp82EgUTpT4qK1snQxNLkR6yZyXxtoSHD48KGjvqvgjA",
  "key26": "qVnxZVLJuzrdYzBc22Tiio3muKQYjmBNyNgwNVppUDFTJ1cyTUHMZYA3W6sha9A47KfFvReSKoWa6F6ARZbj3F6",
  "key27": "4X4pocX5uVpMYNHCrm7gVr8sfiShRC9y5AxR3nHvWcuUa4TWDzhGxZYpjSr5BNC6XF1UVsi8NfC76fbUg5geNxSo",
  "key28": "4M18cYCP79KedetJxHt1bGU3B2dC5ZwUrD13tkwiCdGKNVztE624UdkkJ5FZf8nkmthWzthx3C6a8eP3yAzyavPE",
  "key29": "7yf4fvgR5VaAKmYXcZUfKFsHfimfUTUDs8gi9ZQKQ48qKvHjPcKMY2RruMyzuYtjRKA69uWBbQu8xrDdx5zJxas",
  "key30": "3Lsxddv2bovkmUpnyqJ9RjQv8RMWofaQ9rRNZobuEDZpkNz21akXSsrBTETwekmcgUWKRjYKKxqdw3JMyqcfUWuG",
  "key31": "gTG3tVXKHy9ZcMnFAnjBTL196iyvR6XsTgZAH6jGRtUcaPfYbxFA2UmuaWRtiavRHZ5EsnZagj95V83Ra8KBoHp",
  "key32": "5vzt81TRqVQrtebpk4LjL3mazgoL7dz7KXQEZaHVbbZgkuHfCveA39iPSBndSpQid8Qyvx9SAb7DZ766bq7cskde",
  "key33": "5AvrVzN3w3zw81fhQnW1UNxyi328x1fepQKdUpt1wsBbvXZJXQwYahBTSjzNQWTxGLLPQeWHDipiJv2mjcxwXxvC",
  "key34": "3EuRx6obbDzd7MMassj9ipETP5UFg78BD5WLRp1wvpyBCmrWoHEQ6qZU2sv532wagkaVfaiLDXdpGNAnWssGnY2j",
  "key35": "5Jv3c7ZKvjf9o4Q49LKCbRef9eTrpa4QwM8bHnbbVYfPLewkVp8HrgsSTGJYnXcxpfB6BC9TSMDnBDjqthJUEM5Y",
  "key36": "FESWEVSirpocbcdPGguX5CtN5ASdpyxF97dvBZKnsTGLvuC5B5SMvivDs7bEHy8aSgrbqKF5oqfYm7w5hkM3RbA"
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
