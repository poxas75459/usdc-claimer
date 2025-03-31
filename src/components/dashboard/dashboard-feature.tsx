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
    "47waXeggBp9cufF6kknDeiSJis26q1n71PSRwpi2JsmKbUAqVRmRMRysMp9SzYdQK5o6NTnGPiEw5UCAvUi5qic6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293huygDMZ9hHtchy2dkZAinBMGtw9v4fvyGEqDuNpwCCYcoVDDr4NbEpKKfJsVws1VhDHp9AoPdc2PJavGPkn3i",
  "key1": "4rySXGxFGhNMZbHwrukTeheNXUqCpeJVQnFtcQfnywVaiPfxeKNZp6xKqRKboqBbefGuPmbLughnisHxxY2AgdZT",
  "key2": "KhiY3WwpWRb3adPhx2Vm7WfxP7GGzdXqKnJR7ZnLHSjFW4Vpi7mTLePetkKeRDkyTHXgK3T3F2T12npTyk3Kkr9",
  "key3": "4XQk4ms1EHZqBX2Yg5NJ1CASokJKdGSJaA1PKSZ5ohGYN5WFXqtn9PtX9GAvAS4yzQeXJCcCNhHNXZhu5Gz53h1Z",
  "key4": "396rDxbPqqnaEc7o5gzpq4gS3uNaDZf3SHgRSyzykrTY3PzYPiGxuXbQ9eE4VkWc6LqfE3ZX9wrymcZU9yVdKjjR",
  "key5": "4TeLxzUp8ia6GLVMY4cxw7Mwk97RLx2iVNesuN6nrPCZVqDiyhDmnNj6rcH6JAwoGFzLTYaTz1hB9kBir5YhPrjq",
  "key6": "s65L9rz3tMno21eVBGSbvjNnG86yB3iNoJkAWknFHgjMKrzcwZvSNwvTe5hf3BQkLB1aM5ofTeTtYMzKnzzePvo",
  "key7": "vsGpR6WzS7AJW8xhZUh1M5LkE5BMuvteohLn9sh18REsHKmtPrK364rYpmuTnE3hrtGvcy68ZDNvsY2zq7fXjGP",
  "key8": "24Mk2tKvjnVBT5rA7Do4fZ9x4BXg1bLjfeyZ3YTWLWr28Ffdqn8v1XHdzQkXAEq8qq9r3gqQkK71S2aQwwQmKGCe",
  "key9": "5znPx2jNoQ8VUNGAtkKGoF1kyY9EUmEX4Q1kK4ruKczecbgujMtadokuEjaZmt24WUZHnAY6cCmRC9p9k3YjgoT6",
  "key10": "43y6o2wVk92YKEDGxzLp9se9uGj3rhLoz52N7GcN8yYxWJPPXAWHeicsT58DBvqLA2JbGB2JtKVWxhbuENGypEEE",
  "key11": "41sDfEajMtXuW2w7X737Vrivdsi9jWThfi2rsvYSvh2xC4CR6divcHsvemnaArfkRYuDUMnAhkXVqFzR7y7rL78d",
  "key12": "3EHCGZeae4Lw3pwL1oJAiNHvRxQzxp8CJ3N6Y2NekAufPnBkksXKATMH825wyZsXm8jtNN6rRY8JiR7KVar9asc9",
  "key13": "3UZq1Y11mepAX5bdEbSAWr594FNRWgC8fUndp3eJdFrJLWCHKLo1zxBX5S9ZHcAw2pc7v8gSxErk9M8hmUU1ymgw",
  "key14": "4kYdSL83iecM1iMtu4eHTpiLVcAzu9q7DcR59hPmqDFoMJXDhsVKXLqqd2ePFHRFRoppKb5sxmiUufgkzbhx4jc2",
  "key15": "NGAmaq9YPhpeV58d53wk2AxvjLYH9LAHuf3jrvs7YvbQdmLZoz4ymPdBniBUPTLDHNYYuZHNy9rzm84K1vs9JKv",
  "key16": "4s7cdJenGkVxHujkZzwkNpXSEosSLuHAJvCRtVhFxqYzcLQERYGJg65a6nrh9N8VHr9sS1TGzHLDibXSzf4BTadP",
  "key17": "3LJnHoawTU6NNn5b5qZEBnsikRd7cnV48qFudGaVnECmzgvCTcrcxVXYCjdjmcQ9FeHYFj6dCXkacZJLZwobm8r8",
  "key18": "2CRunxGFhue8Z9cLjuxPZxsbKSnunzNoB7VVe78wfNPLiY95kztW2nMssn1FXCihM1m9sU2JQqHEnzTnyGCjnvet",
  "key19": "yDReGkEkG7A2aj7xu3SQDDVgR4KWPSiyDwzekfcRtTJxbcoakEGaBLZpR7RBrVEd699A1oft8epqVndcczWfNtL",
  "key20": "3sj1YUjYUbW8krBgvJ8H73P9qpQMpA69bh9gFT9tMdCkKEerZ5MYW6bCDTj36RidaBrZdC2pXJhS37x1ahjHbHVN",
  "key21": "2rumcTFSyQ6WnZUMackMLizp7gY7vbTuATmWJeLTQKz5Um15ijtjJCjsGKYpeiytfTPy51YM1GEzjKEJ1Jp1TMtF",
  "key22": "3dtBZRFnvTcm7MTR7hasdBeFB312jnv7gVRLga6bmAJkPig5Ty7dX6pdDXCfSRjFFj8F8FgXRm4jCgqmVxUFQeYH",
  "key23": "5DyNNqqaMbzvYEUZfRMNo3y9mnqXpBxWvfvu1Y9Ndxt2cwLr6VMuTDNHtHuBoy2C357T5VGjY4BVWQZ4gDJWZU6D",
  "key24": "3YVa1R92iHEADBuZh3Lzph6HNVMFBTm2k2YLEhRGST8NVZhYHk1p6cr5jF2uQ8E8WqA4739UnjScUEzWm2Vm1vQG",
  "key25": "4cJ6U1LeXGdxwTbgR5fhzTJZ5fKYgpWuJ1MGj1pTjdfAkBRj9u1BcdUffrqrC7t5CsJLoUfjAtsUzLEmQd8CuD57",
  "key26": "4bGnPQViaC4rsHg5hgrYSc7LaXt9bM5bmChcimXAiHv2a3vab9nQrAoFB3RVUaFD4kLKWchmF99x26DhREKPYzfp",
  "key27": "XBksS4GUkBZTtVFxLbbwBxUWVDnReykFP1f9MTjL83Hw6X1GTpqN1g2V5mNH7UWgBvSZZ1i6gTrRQJh9bDx7X4H",
  "key28": "3CRoUEfEmCCMYP65sMEJpSPCSGPQt3Vpgo79RnC2GfbVLtp9d76GHcvpF1H7Zfkair3xacDJk31MmVi54i8xjm3y",
  "key29": "4wi7SwBmeRLZ3tgT7oEUrCjasXwebNre6w4gBfU9uHQJXQ4X1KRxqG97zLu6GALybNdPTPwNyQ151ZvK9BciyWdK",
  "key30": "4Q4uxEaZ85jFdt1kp7joVc5T7FdywyDbF5grmkhuoopD5wyE1kSaLFb1fx5HCbyWS9eGinerS4GR4FDhiP1TosWD",
  "key31": "4JsMbDPQDBC4ww8jDFT7qzrkPBCDPazk9ngL3iDesEHf55SxonWaCGpEdwRU8kWgmwQHhBZiYeDq16bMYuCugKwD",
  "key32": "4SSyGn2W4QVWTvT6BFWjuqYf2j8mZ1wjuy7jhQMyCgJrBfn53aGPKtv5DeG9sSyNrnKZbCnKqDFXoGSFgpAHouoR",
  "key33": "42N5vFgMjUTGmpRyb7BK6LNS6f2EkqVt1ZKX6YRknmEe5VSodzxoM2RrY8VddwU5W7X8P7m9tuVRTMhKnMeGZ44t",
  "key34": "5Fzv9sHPXzBo7EBnJhs2vKfHxYDBsedsZQnAuHRf2ADuZicEigSTt8aPPPU2teuaEaX2D9wJQWrRbLL4EoB2dLvt",
  "key35": "5Hz41LwzAxB5UVVPXVHXheFwLeTjDrmXLnhojAnoc7TvcepeGRmmeiJVMXXyvPBgaLMioPWksJfrfjA3P8auYbA6",
  "key36": "5gZwKvKsHfi7zLRXdrRGiVEgscBBuuHfVc58cQYTm7gctfrXbwn47CnrkxeHoqEMCqmf8emoP7Y5W4mnPNhVCJMv"
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
