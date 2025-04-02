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
    "4WXtrx6sxzQBkatLAs8LEzQAV26uscvKP5Ai7gMVXvAqBduxLuM5hPcKr3dCB6otGKkwVb9AfftwfACRRtWpvEtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ncdTa43dXPr8yRerJErD3GANytYQiQeQPyGREoiEfPmbKvuZc7vkXnApX94cWn4nFAtW3w59Vyj4cK76GWiKkY",
  "key1": "5MsvFKKZK6cGos4JF3u3rTxerNwbxxi7dTZ9bdMWuH4FNJYogyBdqr6nmQsztk6pnenWaBSyYZNPpYwkWQKJ3P2g",
  "key2": "WyFZrLq2oE3XUgZ5K43CJYUbwvmgoDEarWGhUrSBmoDFB6s3dws5JcCx3Bu8ZkbcpyW2A1JrQ6TWkyyDV5kRaEp",
  "key3": "53Cb6TVrGsD3gwYfbtXigxtx1wnativycQATEDeTdCGmNmJjDrT5zdzX8NZw3dZyKyCpLTy7LQCLcbo1372aCR5f",
  "key4": "4pAS2FRevShpnEMrWiT5ZvnJTs5RGvA9NRjgwy3TKASnm86gvsAj5HwSJxbJHUYw4vF8G8bSyyB7ECjL4btBS8of",
  "key5": "5E2sMN9geMca1AjjfHZyD4XLfonwZA5gjzFwwk7jkeLqxvgzDatxCxAT5AjxnShFn6uVC2bzgjceq3yBdWPweKV5",
  "key6": "MrS6nk7LEhzmhDdAp25Wxb6ywZL8yjkTbEh9KBfyA4PTQivoVsmn5BHAfg9scoavoNfG9ZzDThsso3oDYfgAsf3",
  "key7": "44BYpFTxk8BwRCXWYTsQ8cArW8cd1EfSeWqp5gpQp3WFppR13w31dDx2rnAXrV3EosYTR3LLR6R4hoAQw3n5AnQ3",
  "key8": "2HU5zF8N4uiNT9ouf8esAoNLcwVRaZrjRxA1H195ipQDhCNZtjQ6nmgcrQtKgoxSijfsfm2V5jMhBbJK73apNKp8",
  "key9": "38KdLVRvhfaxsdVkzZ53fdq447RZCcFKcFTngeHMcdVQd5zSSWfrqaAd5nfojvzbwBffACSqqWVcTBhmkF15n5zC",
  "key10": "23CsxCzRaYueJ8uyYCc6Rkh4grsYm1bLgViXbTL8iePEhrheodxFjDswmrchX8a2VMKmYDSUkbf2qmJDPpegg4W8",
  "key11": "5DCwtAHG9NBp8YeBRoT7pVm6p2QTow2QaqQ9iLKo6wfaYDvtckZbutKaDJtWpyaL5JQELQCM5i4B58Q5Gztic6CV",
  "key12": "ejqxT6i7kgzQZLSvyjbL7UY2tmVtrfiq4HbXs64AC1ZPzY9HjQfxho4huw5oxPf4f5VyF9ZsmoFHyYee53mxYz2",
  "key13": "5bYq2JM4aAa98F9UvsS5cyQwAiQRBzQvkZu3uv7NUMThudmzjvJJT4iyE5VXvnvBWGm7BJwZxWoDvu1Gicqwi3We",
  "key14": "39owCz2LYF2mUe4rjrVkZXDYs9zdotYupCMnnnXUotCei6Rz8x81yq9pNFaDkoi1fBL6tDam2tbZZ1EobWfwt1es",
  "key15": "2SA8EDBQuGfmF6mP1aZC6abYDu6DPG5PkTh8WnHhx5XidtyAKCJiQEAqsyDVR3CYfon6YCiY4UR4u2EiCN7EEzi2",
  "key16": "2VFoHm8g6LsGZxFUcX7vfvAfffbB7CJxZbwffhrLKzHZuZW6TDyVdfBMJsJJeyAXToDk4hZxpLVQGKSQ8pZWPY9X",
  "key17": "3CvmgyMdK6k5Kpav6udtL6SB69vuFkTXhsA2UwZ8HTrRkawCm6759TjT8A1HDpXTnSEBFvqKaCWTBXKzRHjtnxBk",
  "key18": "24uNrHsvpiJPG5EY1zMvfnnmvdniYSP1LSDYMptt676Bc3qYg4wiqVowWfC8xgAW75irNYEUTnKNt4u6xvgQitYy",
  "key19": "2GmuxZ1niXdkcp6EVgPnGznrJ2frb4VajsMgxDbRnLQ8MkG9u6kev1m7eSeqqHdmfqrugwQLnd722yM12E4s7Eg6",
  "key20": "5dxyAgnZ7d7XU5ryNqFj5EGtrWpSaP8Q8qibkX8KK3NC8edytPSYe6FoxcL7VqzT92xRVEiCnmGT1AadEfw8pqTM",
  "key21": "5Y4o6gJTMNZsyUbvSrLBzYZcBT9AXtfvqJEhpRX2CHuc8akBxBosXu2JrfpScrG5tvdn4vRXKyvaG4Gwd3rLjypX",
  "key22": "3reNgjxAH4nL2b8dPDbABrDj4JSAsXPDH37f91LgGSScMi1dGSSRYvF3KZ8AkuUaLWBpGzGhik61GpKMwQ99Bh4x",
  "key23": "3Vc3Mgj4yzyWHBETtEkEqAWG4S83ETfD74SGgqXVEms8htiZ6f7dzFwtTngF6HguXpsWGX7QnvCBDM6TrY6npkuh",
  "key24": "5jfq8yfo1mgPqBmRSVtbKaKyCCyXnU2YavMMi8NBATK83M5YBqAMiBt2r8n2Ne7hzLAqL4rv4GWukEooY8rYbFQr",
  "key25": "3dydtSBjVa4TuWAtQpCWGY7CC1eErFcmBMTaAP3jeSK6RMu3t9iDEwcnX8EBP3UBYoEm8Q1HoSdEze813Dq8zUFD",
  "key26": "4yXc7ozeQihURrXQbmgvYDmDoQVt4rRaksi21tzFL6CdiT3jqCWcRyWoJj9nczg6YmMbxwjcnfY7rkevoHH9Vj9a",
  "key27": "3LLyTAB1eDEj3LGsaFnRgrjtxMKk4yERFJQRGH6dawxpspyr2nmTfvQJQa9nCSWiJMsp98RvBd75TvGBQXunMxwg",
  "key28": "5ZU449Z6jbUSqzAvFyZkKnVzNgEhPWbDPVFVjuL1pawdtaxjhbCbbFFRqVxFmVcuPb9uPQSpdeTkj3FMgPFT4GC6",
  "key29": "BtjyQJitK2Jh3E3SLQixJAYJY9CXr2BqCr2n8sJDYc6iw1k3NQTw41qX1RJ6SuvieA1cKEfjD6H4J4feW29RtXE",
  "key30": "3jtEBvfUihN2zyc77etwL7kmn6mzVqW52sVMDP5G1DpdZesw6qiLq3Ufgy7SiKLQRBN22rRMW4k5BAtY3ZwyGr5o",
  "key31": "4Mh8uNickQMNamCizrc9ofK7npAURy5x1jJLEjzSyUxphu3yfHNbcooqZAzn8Gaq7aLUVpMf79cgfF4Ah3ACdWP1",
  "key32": "QB1LFAvnefSagc7jKPkaTfbF1Rg2hesxLHKxaUeQpVoZuszEm8j9kJjfJA6L1UqjZWeqgCYhrZRBLgKJCLdshC5",
  "key33": "4BrzPPogcr8QVJx4gHErFm6rc2UduVDBVFEv9FBRwtUf6yEEsJsU4Ya4rpvaH9kyEhe5qLMdBfJEJB8LpVUyUczX",
  "key34": "Wmkxm6KS9wMtZqF11fDsERifcqLrti4fsyTtZCCT8ZrJcuLTUzFnLjesYudeGagS7NgCj4WQjWRkcfDSuJSfBfu",
  "key35": "5WnwtAW1BNL1Ai26B9KuWLEdQa1dcs5cTHaUWdKybpegL5xGNTz4eEZBC6HSCj6tCuT5ncKbA9W7XQg9BN1aCW4q",
  "key36": "2p4fgwKfTWUXKBq45ESFiHSxKCdXG2jJPkSMcY3HBZYc3Ed6dKo5d7DphKwrNbQmxRSu9gsaaew9N2F1RFhrhFM7",
  "key37": "5Hrhqr9NnBnZ8TcWzws3yBtnRJxdWdXD8nirdZ2AkwB3m1CPDtEmayHgNPmhfG7J71q9uTf8ZmnnKpUqpNmWxNiv",
  "key38": "2HP98GG4WcoQXWpCfytweHs1Ph5pzEpJQkd47EYV3ycSMsx7GCXSRuMdEsGtYtgRW2Wwu89tKUWn2yXBDL8s3jgm",
  "key39": "5xH7mHHgM5hNCHG7U6wFf88DeZ9b4P4EuecYrgVoVGLVKAGArMnrE5NG8DMMkr8aTwNBhyPaSc4meyAhZswGA588",
  "key40": "3m32BZ7tx2RzDWoxKnukdb24apq8YMPk17UB3BjtDa6iwM6iSiWuHkgHYnsSnVnRytH4SjkksRd6tyfX9rzb1ytw"
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
