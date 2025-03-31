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
    "4Ax7hRwruWWkbWV7Fcgnq2R3ezQrfTe2VgbykSc6L1HCuaHP9cifXmRvRzPHkhjwAbNcyAvcoG9jEgaLfVECfURx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJHsYFCQ9cKuXeSQ4TuR864xYgopppd59iXXh7Cq1ZExmnqrfrtiZeZgey9zXdQmW3LD1HcinRKKn4zt8tfY3Ve",
  "key1": "2uuNimHpRCHAvPbYoErSYjAYk3BBnnVLa1vrwXW2wb7bPCddv7yFe22X3uX3D8985cob8nJoBP8MDep4DQZozxRu",
  "key2": "5P8Ajy2pixNomZ24acHGmvXkYWZXF5dYN97Tn5qHjdq53fhX7jsBQv6cj9UGcTTqZH5mcf6ddknNJ6VvuryDkeBB",
  "key3": "4GyNsNJFBwFEmF5xzj3garaq4hsDpby34WB231ZnfKNK53u3cUBB4kCVsSkdgqb4pWh8eeHQpBPQ2ceD6mrwjwm",
  "key4": "25Ak9obeH4Pkkd4ja5gMeQkAp7ZnQaTorGbz8aJrixXNtKLFP5f7MtAxAZP88qA5A1mwJehmbjgHWPBng7WtPRVB",
  "key5": "hK482HGEECuR9B87X3Jwq2MFcdjWnJNUmMGi7csNkMrFTXtJkPLGxvBr7NqNrmcsRVR3oasCcsrFMpQRDyYLMbx",
  "key6": "2D7PgtS96uQFnjXv8WvgGmXpsbPfumf36AM3zaW6TCguJbtCaRdvXREw3GXLoFbBq6DLCrBNdkoENTCsTTW9VmcG",
  "key7": "5C4SnH1bjsmW1Xd9Y9yQraQH6HCqSFKrqYp2js4gLVHBEou61yqo3NaEYnmVeySxW2TjAZ7XbAyU5gzw2McP7wVT",
  "key8": "4BgPhfzWZ7Tbk4WKiwzu8X1hvVmRdFpG584wkybDmb8rDaqyWrFT8SycEYgy8EDtVVtsimgJNTUetdjhrCNbopsj",
  "key9": "45eDkkX5MXnzhjCDxMAwyNCATmz2UYDxDQZ7aj3ZG6jLy7zcpaRwJAgggvMzFWhkvZSSeitJyuibyQjJMNSPgnyx",
  "key10": "XNCw8Rb2NPzzamsNdaUfnMcgp84t81iCPYrzjsyk7exSHcJ5f3kZkLc53k94GPJiaUtPLeQ565jgFYEbRz1dkhK",
  "key11": "5M8ssDSXm9gX1oyqFFXPQmxPAPewQYkoUny3KfYW4uU6nKcahNPY3fdmqakoATAzaQLGEgioqKcYgvvT2fLMHjau",
  "key12": "2KL8i5psHJhMPyNEP4FSDkkJy2Pzua4MAUXcKwQ3i3xwhqQMp8M5JF44g9gSSFniUpUszFwk6jh7x2oFW7oVd7PP",
  "key13": "U1icbcr2ao1B4zwxqiMk3jP6FPmZEHK9SimM59n5fo19yhBV7J3QaxBR2yuZaMJHmQ3Ucj7USL2n8nNcQZkGV9J",
  "key14": "3rAb1yhjcwMr7YLkB599fCvnWsafd1fjNjGh6fcmw8BrrTCw7AaGm4dYxzJuSRyrCWygtVhAN9r1V6QzGkzoZnhH",
  "key15": "3uKVv43aNYsYbvHqcZza2ruRjn1wz8Btor46RTeEGMQ423azYMrdR2a5h9jCYq8XYiryKdRSGMeBJcxWUV7No7rp",
  "key16": "7XT4NmJMHKX2hGZGaGGRf3xVqxdnya5TY5e8vZqJayjTWcHHVJMxV5ULZ67h4XUDuVzHyjDYYACFVyjAJy8Z8gc",
  "key17": "21k1j2YXamvpr6zAeUg2vVdceQvc8o5fcm6AkihTbFVQoUpfgB3qspcHXJHiMoDv4hcjKUuxDhELCi7Pkox5B5y2",
  "key18": "3boWZvWxxxSzw2S1MYepsgfLGq2WaHywojehzDyDP949UxS3jj6HV91tJx5ztfebAbGLA7ZHop6Fx2E6A5Ni78fb",
  "key19": "23DDFi76xwthTESHLNmy11wngh1Kj821QhKYf1M45idjhemPRZhrQahEu11SF1bu7Na8iqUVn8ZEkDfGQX3ugHRm",
  "key20": "4KrWfgBWmPrsfwM9Sx7XN8FBbTVGfrBXDQssfF238bRzu5dWtYpuYw5x2iU8HYMgmnUQSYW6cVnQAnQVkWrBNHA8",
  "key21": "3yL6udX117VZn1GWKbUxiypzCPZxhXu7PHMMbeF4b9gugromrmgt9GwZY9n9o1XLPS1N5x1byEtQBEcdmA8gmsNF",
  "key22": "5n2XfJt9YNnVkJuekE1d9o9udUSacZuZNLMryQggGHxubcHUvsJBygrbNfUvwpwp2rtgXaZurAxK8ntfi6QbRLZk",
  "key23": "3LirkrxLbsSMwCjtt9qGR9jbHuxwzmd5jVfVQqHkbCWHfxS74a9Qc2s5fMEFPN3LwPskBh1wUhob6e9UyDbcwjZz",
  "key24": "4yn2iHGcPqpe8uBoUBx9nD5Mta1nmb9w9x2kak4Hr5xZqHSUacxtAEZhcwB3mCQ51FhQMa1SFA4sz1MWGZVxuqDV",
  "key25": "h96VpfuTuVnx8w5RwQEB1CgN5qwHVGDjwK5WH38GpgP81LRHzA7yTdG847ZVjkTk4H1GeBt1yybrYfTCWD5HKxm",
  "key26": "3asDBduNLpLtuiFAyjramZyVs2eDsJ31s3jXxrtKVXGLUjBZtyRo7qbk3hSAPWjbKwPCB6rDm3WuAx39sdGHVMXZ",
  "key27": "CqS7hbaKPZ9m6N6r4FFpBM35ig2YPu8NQJchj5RG48qNM98kFymM5rZjVfznSSxBMDzwQ2foVv94bfEGUhYfLzT",
  "key28": "2g87XFMXjwWPuarKzuYvht6wcR3YKNe5V7TztSbSuTJPj81eD7kbYHhgc7h17eLVGmEqVvfWw3rvGczvmQu3u2Gz",
  "key29": "5G9PgTPgrtnDpKHFmQXdZSKC3TBsgTvxRcMS4J2Co8u8233VsWofvFAco578ZffWoLhAJtcCYoPykxvRFGfo89UG",
  "key30": "67DWxG8fJ4sjBC8B4cdUGPHULrMJDVVmKp2hQAd5LCVH4yoBrkBEt4YKQXndpqYzBKe6SRSoK9jxM8CfLVyyXKot",
  "key31": "55WnxgQTiLwXJgFjTwuYkDgnTPFEaR888SoGDFsavDXruFfeuFSMMyxcfAENWtg6y2hz2gVsyHgzjvL6D9XZVY7j",
  "key32": "fsNz7dWk6jcDGTKuwHYomX5mvjyfAXioS6XqpRJWLAB8mMESb9Ti4R9WQSDWvwkVhFGdsJo556eqTfmR5W8kBEo",
  "key33": "2GgZQE2yWRtyLk94m8pN5BxMTjToGXXJi5MfVEWRQq7oajqGdR7Po4PEJ4YtCeKuvY8nHhs4jiMpyfDUi1T1ZKAc",
  "key34": "3vHNcNbSVrJAzugm1QEqkqBcTjNRf76pTYH3xRcgZJp1SPww4NWrVkLB8hLxS3CKJvzKWPVVCgVz4SzetZ8Puqvv",
  "key35": "35YB15wssHJaTbG8mRi2jpRmx1FxeibgFeBCUaKkgu7PAeP9PcAr4iWxGPkBsu1KkthNKJYxZywDa9ky4ztc1Yrj"
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
