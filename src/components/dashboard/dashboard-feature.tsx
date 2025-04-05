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
    "5aCdefZXnrvuK3Np9fVL88kwcstsggdihzFknCUY3PQ2485TNZPaCiBt4cXeyhP7rZrZ19JWQza4XCziCtpE27oR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jo3dNFcEHkXdGmm57o6kEPGTGXXnz7fGJsopMTs4nfCpAmLCnRRUMmmvhQXFVbkaK11ZzDChfB5BJ163FBXczd9",
  "key1": "23W4w1hqU7QK6L2sZ91XrJWfvBqgUd3eHykiDZY3Mn49gsNtNzUXMdoNR4yw8Ct1ZHoVq58aJgBUkzU4zQPgwa3d",
  "key2": "5djd6DKYnTZdZ2XnUFoXHCwsWo1Ayx3T6N89D1KyJ4RyNfLG5Wd7yVrUHiZhzPAgo1Z87s18adA55zhwZnkKT2u6",
  "key3": "3q12fiNvNLJQcJxXXt6nvUAqhyDw5QAhiT5UYEvNTdcs4KyNYBEtgmgPR8uiaCESUN7tWwyFQYJvPe2KVrkwF5J7",
  "key4": "sQUx7Z6qdREsrnwUY5WT2TiQUNftfu6wwMEskrRMng6fqUVrc5dtDUxbCFKRU7eReMNxwMRWssrHotLcTXu2stf",
  "key5": "8AYw4EyH1Ahg1f2Qtn4Mm3j4W5yR9L2CkrEBC1afMqWztXMUte6mkevpmyTNZnMRgWMCXakzQQBgV75c7VEFyn2",
  "key6": "4S4pbhGp6sJNTya4TX8CFpTMtMXqe9EhUkH62QMJkdXwnvKC3DdoHc9zQ4bPpTXpyM4o1BbEU3rksaYrH4nSQG31",
  "key7": "5Ruc8GzbUjoE3Y62KdTNiuR6kNgwEdCvrFy748nb2EwFXn1CBkqg3ZxMG22nXe8tnxEQAHAD5729KECn3fSiYSBV",
  "key8": "3ssnfkAGVSxFEiU9H5xA27wheht6vnSX2ADbv9oBUDDrrNYTuecfroDPgNTqFjWRHMRD4aTYDQNB1K8KRuGYCtus",
  "key9": "2xu597uccEJBcwwVK5VrjMCkNPkhoHS5HYyKCpcCREXZvXR88Hs23JgQuZw3fTfd9SLHPhrm5qUHqttJxUuFzPQB",
  "key10": "5wt3R1HAUKBBAKcphZcV53DSNMAmRfxahuL2GUGjCfgfddWk3vNndJffg9qmJjDDkQsF8bpwhg79U3hqgmJ8dFRa",
  "key11": "3gPZd7yfB4dicbck7Rbxk8k8PeNQxTQFrZ2Jf4PjrekhivqeRhRiVVCS87QNi7PFRuw5VwEei44VbhHeW6ZSfTj3",
  "key12": "5TcYaCZuCqEmimBnbVgbCAV9dXbLpBEA2xXMkXUwGtCyuPF2ccdeUCQqydSvYPMQ9J7bZZ4gSeagZ4eLerPCFmnc",
  "key13": "43nvPbwpYmHx9XGh7gnQHoadPUNtU8Z8b9Nu6VC5Vq7arfvM8NBSHz6mroojJKx6DEnWRPp1EihsU8aSVvTgytcS",
  "key14": "4fvq3Mbb6hNGKejym5ntLVSPnfBVegNzMtq6kiwkFhajjRbgyZcEAC3xPgQixDvvfGRVbc55vFcvhja6TgNXpiH6",
  "key15": "5oFS76j6aP6UTKgtz3i4nkW8hi3NxFb83AJTeWXorxWiRyeFpbgq25NAumff9RTcvoXQNRGRVjGza9e8TrNCvi5x",
  "key16": "sZNWShoiEZi7MgzHPHpEmP7neE6w1bwULBeVdKUi3mK9nRTMUUydmTbRbKxABu5wo9N1eZ8rZJboecPUTZeEi8o",
  "key17": "23etsLZEMcjGkifknVMZyR7dinzJ8WG5jgKNZ6iQW2Vg3taziM4FFSno26sBMJj4JdYri5w3uAKk2pQtXYvTLqV1",
  "key18": "5kGEf1Y4PZ9MPycCpzcnSPzpQ5CKDpc45yBo2fezbC65xsq1Sv1VLNJSZejobddQ12F8KKQSyki53CMfirjoeQGT",
  "key19": "452X6KdL1KddkkqMqr9WTaG6KmH1VAwtCWVGwT1JXEwUkUGooPT3REXQ2JwZrkybisXLSvpB6TYC8YZ7wNMFeAYn",
  "key20": "5Unr8w6hBYRP6bc8fivzGhD8JQegHNxj1bifVY7Gcs8uZwDJAfeZYiix83eKY8NMDF4Q4oALnV6PiGguZSqu8Rt6",
  "key21": "4mRUqk9zr9NDabvPjeDQwatEUoWbvEiKE9xFmtVMXBd9kDeZwomcsnVUspnQwuYuR6gRn3KZmh13MBrwDYzBZEA9",
  "key22": "2BHUP72FvQZWxrPMjr6knwx3XxvQvNaXDBa1muDDNSL11qViQrtuEg97Gdu8p6KkyCcG7kfQ2zjRKFX1wJ4KTKgm",
  "key23": "4kmcb5DPxgWwnwXGfCtmM9vnuZtYTEi8J3dXwKWWA3HfNudH4tuCDvct7VRRAsX8f3MkxXU82PnD1ip2sYqvUSqN",
  "key24": "3VsmRG2tTnnjazo57NXRGt3FgVd2pbB7hBN3XNTUcojr9ehEcMBxtjGpvFJpY1m343As2DiYDs6nCGEPESFfQtkt",
  "key25": "4SYMUJsaPJmozauB86Wk3jCuKi12WQqSJShBoYRafehMjESxt4naV571uiYqdVgvvJRfZL7jnULWdSHXbGxJNVU4",
  "key26": "oi7zjojn2jApGrvxMWyENkoy5xXLVinRYKqDBdTdDgvpFDqEg3htJZ7ukLqfpRvN2cb3Y7T7K58zVNy2Kw5ztYp",
  "key27": "37e88g8CoauYkAbqMkHVSwE2XJppWBuFhoG3Sb4CMwDULGhhu8eDn5wXHFDKX8MRjFrEeU8rQ6sHJYkr2bFzSeD2",
  "key28": "4NHZ18LkFer336cUmUXQYNQ7TGjMizEhvudMba8Mz2uoEYUzPd9aEZerCqogGccjZckQU5x3i8tEEt3GQp3VHmMM",
  "key29": "Gh9PBHwFSg6MThA2mVpB6sQzN4SzoEgfDaaezwsZnsVqnsafQ5ijD4iNRJQ79VwRXbuvPzNP4i6QS5EUHW5FcwQ",
  "key30": "3dcxgbb3oeHoZ7kHWBatk6dU7Ct5oep6XqPvaEf8Whb3XqCBVftWghqLnhQ3E5iDQMaNxd9yBbMi5NVUVQB5gJnK",
  "key31": "svikcPiTFRCWK8sRBeyGRYH2VaHcz17JboKCasBi2KXmaoX9DTgHWmvQNxBxSoPGB1fct7Wse3QiZXjc3tjibm8",
  "key32": "4HvUPXC51H9bm9WkmSF7AqCK5WbxwYiPUUFMkFAsK3nPheqJgp9Z9n2VZFg1x1TfdCufFSMqB4L4YF485YDA1P67",
  "key33": "5HvUhs9i4KopJEfsgitHLZqScp3GVWvs4cemuhqnQzBBayuKYhFFqJwrjTG3FwdW7Vw6Rbuc5JYgqr4y1C3Z1JUF",
  "key34": "2iJ8Y7mGGPmGEBSrHgk1VbA1EZk8BuYSAFZQFx8MJg2ZhRuWDujerUWkxDeLHjh1W7ktG6ZjXZhKDfJEqQHiq665",
  "key35": "3vemVbW5wH5PQ4GW27qwRBwZsWwQJJk4YkthnPAL2bwNrppXi9XkwgUWtybHDoEnFWE65SdxgPLDGsnqHRcwwYGR",
  "key36": "5LQs63UTdRgZCGJmuANAgTcQT1XUdxQniUpZHffkWXrnqyEvHHm8CKk88qD3oJeFbZwAjBxC2oqt9qsVkgKjUnFc",
  "key37": "4fbKWFzUxPNUSjUfoswrEvaLRLUtx2unFMkUN9128zHRQvkBLQcy2vEXyMogEq9qfRk95h2aiApYUxehyEhtGUME",
  "key38": "42XAkajVNyMDuTgdgdG9aUkQNJeRMyEwarWVpmGgYXGWQRpvS3DKeS6gu3q7tnKVVeQWAYMSYzFaqLgLzMGpvxSE",
  "key39": "TkxZoXhUy3rP4euXrwQuyfqDzz5JQYkd5xtZ1XgAHX7kYWrE4k8C5yQUqgmfUDcAQsM7Y6StMg3RJKUgNw28a7M",
  "key40": "LuQwiuVF3wZeuT2st5wpBEbZb3kMyoK8BgjUKSxKod1iCcJwdNsxFagr5ofgiQENG5GWE6fxZJUAtcPRe9te3ec",
  "key41": "3gimAaW3x8fsYq27jASt5sSFrDDVwfDg6xvqrieQDV1WTU7VqRooVQ2EwNxrywd7iKEgyPAzmFubVzA68nhWJ7qA"
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
