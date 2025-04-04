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
    "3bXzeTfaEHBUCLivVF5txhHjX2nhJqfJH7HgoNHMRxsCkQBDCg7QS5dn3obHPhwyERJjE5rHZjBW4ZwPfMGtfczZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpzxRuyB5HViTYzGCKku68ZnxKyWNCaqHQ9v9UsfSKi5sBPMS1Nyadfhas2Wn71x8rA9u1ewctfrUV8bzXB4ay4",
  "key1": "5M6VeqswrxgKjkfUYXrEJXMDQatrKBy8xZqeuVJFoA4xjjniqvYW5Kh8VKw3MD49hvocPEa1LW54YbdmQTZbRDwb",
  "key2": "udoqsE6N3gwVCX6TQU3wRGj7ZeFkRKpWXiBMqazyE7oHziguNP2sChXDdJMQN5jf5raDMx7y4JJQeTg6UxGeXah",
  "key3": "58KwuHukrLE6aWYgeU9FaeBGD6BUGUfT71MjvxzVJaMsSwfMsoZqXRhHUCy3CJDjcdAVaj8frt4hTHycyeLht6rT",
  "key4": "3qD4b5Hx8rHuvXJxCM9WqkQn3E5kDGCwzvZ3VRo4LKbijHMthkDT8HNHj18iKruj8JCdtAH96qB3RW1K7X7jpTJM",
  "key5": "5BA7x81JC1iLvgKxcZL96cGAMog4DD5oUJRvwrkPNkxssw9QEvgZ5iQmMH59mXJHCPAqHHfARvGUiU7yRd1ABbXz",
  "key6": "65kCoigeYD1GnVw2Jy2eX87ZnvqP7F7SYMURkjNQdYY9RLhJw1Ka2wmQ2oyyFbtNQ5LLcLQkq4y49h7ZiSrUxok",
  "key7": "45zcDyDUBjYRZUNzyQ4CcwH4Vc4F9LKjJa9nyuMfzPhUrzwkJ13YsuJZhPpwUhdDHrsp9JsCBCJqxWUYyesRAFRH",
  "key8": "2dhU98C8bM6gFS5bH5oeBE1rfNmQrdb1H4iFtxLo7fvxwfnJ5Fj2FQicaLSyXpBAfy2DqHaKGishV1qe13AZJatx",
  "key9": "3AfLNza3QcdiguVuLhvMLeerazcLoaAmHCA75JPDvS3BWPZeBiczzX3Ey13o8gFnShq9jePepLmHBEpmXimUdV87",
  "key10": "2n4twVFzaAKi5UPsye5drQtXKyRyi4LYmiRMofekneYAF9vgX62rFGMDe36yRGXB2nNN4sgCoGzGMfVRsFDa4AdH",
  "key11": "2SPpe3JS6oLo3NB25K9iB2sd8SQ8UJxEKDNWkEKedvSJcT2KYntJjzJXj3uzWYirfuG9oLtC1aVoaaCY3yA3J55Z",
  "key12": "23P6VkdZvk2tuYa8qvkYM6mWJ61ebKZW5awe5aUdgwkTJG7L19GX7zq2cTV3GS1zWcF3Q1x2Vtw9tJvvUGBZT5WG",
  "key13": "CEsdBfdxajP2uq1z1TFLuN5dNGLKepW8FuNrnUvrULDuMAFCpTe7VJPdQi7EJJSmxf1KctX3Crjvz8nj6KLDsYE",
  "key14": "jK2ZQzPkW3XR72TDr3hx8jDuWybhtB9bhNgQ3LfSpH5DRUAG17sADWjBgiGb3Xmew1P85YwZv5FAHDE9cjykzNA",
  "key15": "2d9maAC4Fi7RFBRSoiS3NtoMA7yEPzb4VgGCTNW7Zr6BJ6cgNBjUb9RBNdsEV89PBTQgDzZ4Zv6jGCgJGshmb7nv",
  "key16": "3AG8yt7iruo73MpHth7hfF9GWrbTS9MvN1g4fZiFDw6P1qUTJa7WVXZhvgUod75VMn2iWvpyStzG3R59FXeSgniP",
  "key17": "54T7wTEHo33Gbng6gTkXc3cBrKCksBrHBRgdxsX6Ze9zkG7Wgq2uDQXRa9Rur5zpefJxVm1rH4NgrD6kP4Vw5nun",
  "key18": "2STjTYSC6MYijU1bAiJEk6uxQ2LhPBfFFBYjGDib66YzX8aLaGj4U2CLhwGrsSXSnhVkAyuYSLxUkLZnWw4izQ8V",
  "key19": "2USNV8fondh2S3RnQT6vhXHNh5gD9MsTZWdXVohN1VNreU2gnnkDvLMau21Xcz4U4tJFiMRRqu8BqtZuwEvmFAG",
  "key20": "4sb9cFJX4H7aD7hdETUNEQo6QqKLLTWD57skrH14DhL3QFdCxYw4LcRdwTFGYX7rxFdfbMxrkWEPqVjxnstkjuvw",
  "key21": "39hsCm6KhBVKJKHyR4S5ji2z9S1GrbYLSLj1pEMjhpQ28pjZzwnzK5TbHcdLMvNWgETkH2iXDRyob7NrJGhULtx6",
  "key22": "5AurAL1HoM2u36LR4xoDhb7Hz27feUEFzHjXKyZN5RpwqWGGrPW98XPnL8SYVU7kuFgvkixC2UFM5sSv7AK9RMEq",
  "key23": "5KFcmV2EcyoFg7hUcS3jibrJ4v5m6CndFb2v7oMU1dcxzJ2WHvtWkXyhTXe2BPqmg56cQzr7oVabVCfCbmGjsWCd",
  "key24": "5PAidpMVHpymSxf2Tm2eD1uc4ToZJzFhXnXfc66Q6Brh65uHMz8ggwZGP4Au9ScJUqrmqU1de7HxFRgze2np2qgM",
  "key25": "iiaBmD45Pe1vQS9vy6RaFfJBEcXz4XJoe4Q4KbovUDZr41JQX5fP7xr3rMg4YZmedDepphnkura2WYq98KGBWBE",
  "key26": "25C3EAW1k14bc8udXiM8rYUbxFXeAEL7viuqR8mtoHVHu72Pw6x7TkcvmtwvGNSzhjTD2ThEU61iuY1AzBieJUDG",
  "key27": "3F7FXqZ2U3i9jRXe2FDnQy2Zix79aT6Ddkxg1wRydfzvje2ippNuTewGsLuQTLdLofgxwghMxSbW6MYPh2azK5zm",
  "key28": "3kyKpptTHmrWaukpZzxB3PsxcGuEZGBGUF4oBGWWfPRzvNGWtaDAnrfyWvauQzB2vmy7EjSgq8FdxjevVTXD9DGa",
  "key29": "4FAVt6RLNWrFYxGJ2onSYSf5u3pmpoMJsJTS6ma3R18UHY9apyg2JoMsHPGDCw2o4XFUNQfANAWYPA2rgYKsoHni",
  "key30": "exLyGys9NAnbs34LCANF7NahmLXdvyAeQdTU1NzthsTu391EBnb4JZ5uZowhsFD8HG3BREVK7SnwXeTCmP6xequ",
  "key31": "3JFhuJkCuPqgczRh3FSKdxAJn71vN1n3zj7DF6TpgMBoRZRVVWrUTkUKt6nAys2yfi6yJLBB6fytrG7MdZSxN1YX",
  "key32": "3djcDE5ksb5kEYsroPiPfP2SHfBMdiFJL1t6avQgLs6rrUbdULLCVV4K9pZzodpHgFGWCMt3nVbiT875baUbD2GB",
  "key33": "4Q6ndoj7BpgnjLdtcQABcmJceox8xst4UJ3qLsjzDecfEpS5qvJErboKhYBHn2rYoFcQkmQuo1cVKChiEW2kJSh1",
  "key34": "3RAeDn9hVY2RbePkwqHkoa6XWCQTYkEjShgFuk1yGUqHDBWDPUcnaadvw9dHeQyN1pej4uRyC4V2hJW65CwWPwG2",
  "key35": "4cViknvBx6j8hYRm7U2pjnuaWCEU8VtZM7KKvdVVdduqsjVU6SpNfieRtE9uvhyPNHRPk95i72iRsLk8Fcc2BA1D",
  "key36": "NddheVQM3nWj7D13uFYDAzSC1sE5g5zMisu7weM6BB5X6abvaL6mNA4Nnj3rjUje2pUYmS6czr1di41cHU94DNu",
  "key37": "3Pby8eKoewZnvM2gC7SMwUWqKMjvAPeMkANte6PHXCtiKYQT48V4A9H2TtJwy3ASZXuDRngq46MxrbkkfeGnGvfJ",
  "key38": "3bpmtvpwxpCu8HVh5LueQjvuSqTSDQidPG7GyiYLXGCMG4kXS2DdBnNYAa2q1j3KxBv8SzkKqTFQsDokmMxmQYVT",
  "key39": "235YMYcCxsxNk3ZmABU8k6HioHteo5378V16kBZjAuLHM146LHu7n5fTzYCrVWdnNc69Jdw1tSZ74ErCUqpCtQDW",
  "key40": "4Lz5Y6p1wiFgLWGFdVS9RfgehYnaAwGxLHhJtwmK6Y8A9JfWdh58VURGebiJYZgQFiv9qJsasApW5WLWvDEkgERW",
  "key41": "53LYSQKT4xhQCVFQKaY3JMa1RRN3igRSZMmYMisVZsEAkoMGPCbzMSFbknXg4MqVoHtc8STRkxeBUM6BUZsqZsxH",
  "key42": "4oZi2kEhqmNf3AaMB5822GBjHuSYRSQCXBHjCLoGBhy2hfhnFFQMfDdmcuD3DvyA8mukobsmStHzYJEEV1AxVfDb"
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
