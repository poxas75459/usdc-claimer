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
    "2Be4CzVr9hG4vCt5DNPhWKdSQab23rffaha4zMqRCfhw7YV3KBtgapeeZcgxSZBWtSGqLmsRw6GcHkfBGFf8enid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWt119RkvwMxXswLb5oWFsnEYwWpxX1paswSyG4gBn4tFCUT2L9bcUBSDWcy6xrPiy5pAUc91V8wVHZL6RjRXo5",
  "key1": "TmngyVKDQYrLS6BxPWgoFyWUXjUSWcionq4hxSasMuW8cbwQVcfAgVm4NiSLyUVnxePLfjzKP49Dp4sjHeoHNz8",
  "key2": "3zs481Temi4D7Eeciwb9dwAvs985C8UKYcbgeyQpZguvA3wET7cG28XoCGMC6TE6MsM4v8B3yyWKzfjcRkct67Mu",
  "key3": "5mFQyr6NkcfGPEAa2CtvrreF2pXW6jZeSwLaZd7GeLLsBHeeU63Gfs28ik7gE58K5698TiMQmKhya6mDkWoR2qbi",
  "key4": "4Qcx9nKTkpxsE76s8s5hXRGJovUXWEV4jFZv8pAjZGmEcF1vcihPxkbkkvQV5w4SbkkKSf5Ruc6zapntezYMikjf",
  "key5": "4fBcxcEFo3WLKUxqFHcMcW8ZmRMuhVBCCMCTCGLQfAvhfd8cwqFmjmkbf5NjjYQzo1iaQPsLyoZDCYRHu4JaZ2Yc",
  "key6": "24M3MDFZ4U5L6swP65nU9w5qTUahpFbc7wtFV4crU8gWqzAVEZNoMAXMmYCBw6v8RubfsGvseffeWjmQj3AzHYL7",
  "key7": "5gWkosAX5dB8BQgLBggJ6ffxYPPBTQfjif3wQny3sgLUCzJ4Q7XZXQ5sABijjkHY4zvqyTagQVqCtwVBhqdVhvuE",
  "key8": "2SPCxBwXKEV9xX55tzXEoAVXQVE1p2BVEKc62C4Z1LBLoETCmPGxjiNsD2AUqFvLdSxibCGnD2HcLpxJiagjSSah",
  "key9": "4broWcicLHdJdJXCrQWbYHd2e1inooXWKEbn65G3fWsuVXK3R1ptCe64Pgx23rb7Xr4Zqp2thXhVegGwotR5DNEz",
  "key10": "36xQmHeFDPkDCejf85TzYzJXWEKqMjEZchwvyBpHSGmHgFS7rt63VYfCh96izNRWY53DvcMUSadrMFMeeNqBfwUB",
  "key11": "3j4knWGXcpUGDVzowXz1h2g9XikpLZV3EM74fAQBDkKeaCAXMbqrwCZRyHAzUEM8gRTGprdDVMBCkGwQw4MrN2gM",
  "key12": "2bAatJbzatxScWKVnhTCi5QMKYMFTGCYmGhybfhQhTyt3tfPv4dqMkaKFXfsX1aNa36odoFb1cmmt5JreCaUgxti",
  "key13": "YrbhcDs25p68958RY931yCMzcHE277S51Fnbj3uzVAXxQcgxwADgKFQ93hXHwTSNXMRpGBH7f4abEyxWYpmWmXy",
  "key14": "4sZLJGRzC3FL6y7HiKDTZzQG8acA2McTJhk3c61XvpQasoKKVdfNgTv5cZePtP4XgT1Vj5YeMPfdRe6XBrZXLgiy",
  "key15": "3GdhjDkiC7d25shxrkAZnRit4TJX5jQJuqawkxwGWi1niFd4UMUmzyV8SNMwscsPMjReLV8XywHsPWMVMkQm6n36",
  "key16": "xPUJxEHB9Ua8yoGMAkJX2rYHptoJTd2UM3Hxoir3MNbnpcysB3VW4FCAWta3Ezhx7zcjxEDAtEc7abkgUDXg1Cv",
  "key17": "23XykmFtymfwDtKPTaDkqF4iBC3i2bMMXn5BVjj7SaRq7wSVk9CtX3w3m3yhUuCvboPuR4bK6cmWCnoqGvgr9fiy",
  "key18": "2Pu4BoLkzQaU1w8CTTR2hzgtkjxBYs2afQfkrXGKjCodQUS1x1fQ7rkfBGbcJECnuAQLHmZNCDECkYgpsyZZErbZ",
  "key19": "5kSPEK5UHs9whJDmtkgh52et4kpqaJ5YPixEnidQ3ZJs4Kfpu34ixxEYeaiL6CjAKhHzM5veW7sRzpGiVc1bPNGj",
  "key20": "2SA7MxejovHrr8E4vYiUe2SaQPFvuQRofJs2ZZ5nywKaicknQkJbXrWRYRYHdxGcZ8EDY3h3LZyeKavKBk2W41dC",
  "key21": "2tFtL5Un8m6SozF6xB6vEhVDZdyn8ZuhxD7BuDmYundfeTwKhxs7r9sGD8dnVePJQYM4T7aemzYVAW5dnL4xvoRy",
  "key22": "AUng8cU12BQwEfXUnWjfeexipUUmJUnwv1XgbukccgCG48xCq9gt5BsL3CgdYTf4z7okaPABGCfD7RvCEmGH8g1",
  "key23": "5sif6c8d1LddkJs3LKhT3EPhKk5rGvjYJVxQTgGGz2xDEk9pzCVGyK4JUfiXTEWHxdVX13FN7WhniExpC4c7rxUu",
  "key24": "5fKkUJzKVNPf55RpoFtmcfpYPhAxKZGjporYrwk8usyLsyhJStJtZykzsR7tTprrMYJM4QcxnQFApNsH7eYkbTrt",
  "key25": "4KdiG2RsbHXnWRBp3duYP2sv4ruiPwrJ7gA4pYMycYDNMfJoMf4t1yuuicjHznTzfJgFCdy3xGL2koeRH1zvVT7i",
  "key26": "3mviGxb35LH8hJArs9gGdtZdovUAM18j66DS6sVq7Uo4FxavS5HDEgKamuwfMiHrdKqso7RwAveNQxwLHayXHQBr",
  "key27": "4aWGhA3jXZPx49wbfoxpMxbGFmXHpSR7GS5TTZQfABL8R1H1zuW6BYyyuQHCayY5Sz2sTBf8TpKStuFUGS2L7882",
  "key28": "3FcNq73f9Z3Riv1r5XeYUUdL9f3TZXsq8vbRHrN9eUypquFxeFfr2GnEmxGf2McYBNBvJgYpyXyKxzBdxE1qUdwm",
  "key29": "2mF7EAGRLJoKfRv3xJAEkdh9gzPW1JARRj7J6Gv59sG53dxfyCy3jKV7HR4VUAHMuZhBgT2iLTqKXex9YPVeV4fW",
  "key30": "3j9LDTL62jDX5BcCVBdDdiY91xoo4eXbQf7QkQ4tEJZhG2qDtWxU9TqSS4w9CzF9oAJeo5enrqCMw3CnX78kSW7G",
  "key31": "5wb8jSuJkXmpmNusRRcC6GZh4eN7ELMbwbtnBnhq4EBugjNWCZFzKFFyT31SE9gaWEvcWGZTr9GWbkCjj7EGjyWX",
  "key32": "3p763ZjyF3B2mUZHMgJZXVfhWtv29oXZeUP8UwPEt6TBqh4oASoucrzeRpeB7AptscwNuLuFDpEdiy9rjmCtvJnL",
  "key33": "589DFAst6xgHSh8XSsN5pWVv5Zi6vN2wuJQwKt4qV8tsZm13puzLdUw9eJHXNsyp59BawdGRe3vjvocCS8iadXVq",
  "key34": "5bg6Qy5WWrjxcoird8MsxVXmzUeLEYJTgC7CNxNW5tQAaCywAY3KueEsruTpwMU4zXkWeXWofby3A1bR2rkvHpQD",
  "key35": "5Rhm4Hfcb86D3nKnfa7JkETSd2MSQFvmwajGCkRah7sap5x3d53AcMV7HGXgBobEynn26iAmyZpXtr5RYXxgrkCw",
  "key36": "3jNHMnxx8cftqPDgcLXjgcZ6UwakPTVYo9wYT5SMgrE2i7RbLGmDz4XqTS6SEfYzh3TNP5CEDZasEMTcrAvGYshF"
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
