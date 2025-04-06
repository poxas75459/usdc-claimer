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
    "4v7R38Ue8uVtVxee3pFJrGNtCXi5ntUZmdAP5L7SUbP47RpzcDoSRsemD8j1SUDsXiDuwDoieqvin9tA2Q9zP68m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVav7rFV9qsvjZCniSGoaoWMkHyRnsAkgjQciUjW9yAVzFd6rMWVrbnTXYJyH2RJi6RpfkEznw6r3vkh6Xpg2ys",
  "key1": "2AdSSizZPJdd8xok4UnTdupnXgSDR3vSUkkjucCPMH1uEEe8BKb1iMM7bN4W8WwrWymhGLidm66Uqr4p1qKiMKaA",
  "key2": "5NwpgV4HT2aTtNyz7XSAg12tTu9QY8hxe6cQzMsRztiYB4i9ee4o1wERVAUJNJqXTGfpWm8oXLihWDWYmoHquXTe",
  "key3": "2acUHp5hns4nuNmqypAfTJ2YdKuL4eG9i2wq49WUphmxYFG8C84y3EozxU3py5z9xsYEYFJjsZPDdtNZSEon4Nk8",
  "key4": "5bmjDsxbkMvCmUPpfH8LMfjV41NWMKfx9iC5xTYgjsp1W1JJgtEVaFHcmJBhK5DWKKwFcxxnDLvQmxmrBG3MuZcG",
  "key5": "48XhsWWnk8sAMdKJR5cJouMJh9gRuMs7nRVrchkay87c6SzJq75yhWAXui5yHsBhfy4GxjAFWSSTNmF4MvaJQx5L",
  "key6": "2F9UDQb8weKNe6WZx4b4feK9CU5vSJyifoMrFpRsPqnZ9mtBFWWzmfcZe4uQAch1aHh9vYdmoTmnKM7Bd3Bew3j8",
  "key7": "2fHRwNvkwQTgV1psc9HBxaXevyfiDzUwmeWqzs7SWtPYmXjCoKEVJPFtvPqb1JWVWh7SrKJD8f3B94ZZdpSDqwFA",
  "key8": "3b5P5JBdcfYnWFQQya5gkLenb1Bipec1fGbGZwGb4pKBigJHCPeVpMAVviNR2SiijX9is81ZPu6BqLWN1geTqsdJ",
  "key9": "yGzveoUyQmPCoesanUnVKiZAskDQACdAa83neXWmTF1MgmhrQxe4GhuJwV4EU6ojuqWzTCD1obDfwzqyw4P5WQ5",
  "key10": "2foqBF8VY6yKpYwjixJuVBYA3SZw7PKTGXzUgAwKFzcCJmEVTknXPnS8Cxfujpe2kfVRzyifhkBYYJgQyQX1Rdqp",
  "key11": "344iYCAFvPsWq3H1o5uiFeLUCv6XiCdh9rPyEuWEKKcNCzrZz6v8tUxmwCnU7mbjz58NRiJrWGSBuxtpLWfmNUeX",
  "key12": "5jHwcBXxPg64bTkXAhUM3o78AwxS5AzuDtHnCXe9KQtYQrgrGvXCgY4jtGh6AEv2Sonnm8uYims2i8LfMtzCTF9e",
  "key13": "3FxkkVESLDGj9f1UtjyuFQfnge7CLbM46XTvwgS1bm3BAF1xJxXdqybWQwky6Lv2Wacb1hujmLb8yyPx3MscKAt2",
  "key14": "ppavEG79D13vKxXsZtARDEtQSHMESCz6R7o8g6MR1TBwC1ZJd8dys9AgBQWE9UCpJtXXA2YRVq1z53P9ePdUxa1",
  "key15": "4UFu5SYXW3RKgL2uboQnfAWxwWXfKQn1yvsMeBg7FMa7ZAzgUVuA4NGju7dNKoVPGEoUUJsGmFKRPszNGpwWrDSh",
  "key16": "67QDCn816yyhKiDzSNCEqyR2NEwhAJ2bAviadYKmiKgCjGc6xGb8NW1r1LgSe7gP58yxWvSAjYTj53BAeVHLpYo5",
  "key17": "5HruTEXBhf4jWJjMXbUoekV9QsNnuqCRPiEHVukc2D8ayt5LUQPmGg3XBcMHXGSA4xAghmn1fQ2agqgMUrz6ZaXW",
  "key18": "3JtCieVf7ak7wpLDMrkjrVJ9uhZygGC8kVEF5tVCk7GwUsXLWcQdTkjF24cSxarMYmds89MJUxYwocqnKQR94H3r",
  "key19": "5RSMwRSdmGTN35U9ZUv8ZN2s5zeKCUmhzh3YS8xEbmuKbLNzgEx89AgYrNFxnQ5xJcLePjaFQcWUMRizxC59awK1",
  "key20": "5P7eDZsKYCABer3vz7WDW9jncb6hhEG8p7Vu6x7cLdKfGM6J1jPoGW5eW4zQBdNjvWy619HBv4Tp4CbEnPbNG3FF",
  "key21": "5rb5YEMtXsep4ad6mxma6SDzq8AxZTgrCdG7KcF62wa3UXP73PkVKrSjGtB1Ju2oLbn9dgVdT8SDnG5Mhs4pGmvS",
  "key22": "Medv5DdWxQwxpQq4Qaabh1XGvRUk5e3tbTwW7g1P229W7zVvsoCJuZaqfsNoXekKcSuFGmKFZWZsN8RE8WmR4Ba",
  "key23": "4iv7pLZHx5mvTSr4jdSRoZ4NVNoBs5ayntcecASyDC2VFubJpedCvzQZK19DhPjs3fdbpEEVQgrF1M1AuH825n1o",
  "key24": "2RzKAKz8Y7MymGrC37JRtdWjZtmqugkPYFEw2p6Pmv9Dfw475UdwVkaiqwBnDamqZQTuxbkWkZrsHBRNEPmsxzS2",
  "key25": "24HMX66jkic6TX9VxDBnmHgP7ts8XUhehNzY5hoHqYGsHct1fXvQ9uGRA8VHDq1nAjKBTKASnjGorboJ4tBX9kki",
  "key26": "2wMZMhHNwkxDaafsmZhJ1yNV532xGu3gKSPjRTLuEmAus7U6LGBiax7zZN8cPfbe1Ssy73EKaU3dLr4LH2RozSv7",
  "key27": "5W7vdeccnuGcdH6xbfqAkKp2MhpLFWxuHJNsbuxbvQLRmpjGLMHgbAbDNRGVNBiNNQJoGFkD8CKMZK2EHvHg49HA",
  "key28": "2DwgC67Cxi5yPFZfuPPMJH9zE7gNRycYVTFyvFQyGe5TR8xFuqSWfLs7Nv211yUtL3uzj7e87J9DyHDPLPUuErHp",
  "key29": "2hLEAZXpPB7n4FDqo1D4Kch3SL9E8bkCMhmesVwx3Buv5NxJU4zrBQ91tCwytNT3o8eZf2kibtumfFcdjXtSwVye",
  "key30": "5MbTxNq7gMccYyu13sRPQNZdij63RfgW18kHYT8V1aozEnCgQQPaFv7gKNGhja4AbVrPLvJSwiVsDVSMs8chxNZi",
  "key31": "i9B5LPFoNg7zBgdD9icujJ5VSix1bgtgEsVP5ELRhy57qoS5P9Rzyk6nW2ysgk1kv5b2HFsNraA5ZcV41YT6s7e",
  "key32": "49i37QKqVJvMtF8PiUAU8QhnGFDNFHzEwdzwnXYDabhaFj82oKjhJNVejnjFZxoTGXiRmWoiadLVrK2BWHNjxfm5",
  "key33": "GuEBQvfuRQ22GPZjKi9Ko3s7NVLsqR6BUoKADLnu7fu4K2HNdakwbFN1TFDh2wYCnuzdzASdNV3WCb9w12LAq5Z",
  "key34": "43qKCy37eafmaPn2MA4h91rPbLmG9d2K3eor582E2mYMYCSWHeY6rHXqr6VEvFJukewZjsP1GN9DRDGePMXT4Dto",
  "key35": "2xPc9J3mSUeEUrtTv7vLqs7yUQJtA7VeVmquGqCEo5Y54siHWiYJSuFQLNWMK2u3aQnk4CMokRkti785FqssYAqb",
  "key36": "2dSaTRVjbGKeBNF4PiMzt4SWTcGZnwJv77xi54USVFcqmKhT8AyrKZW6w5xy2Ahib9HZRwWDirauyPCrKmnpsEdW",
  "key37": "5rQzr5uaaGEKKUdbgVW2tXf6JRfMxUC11YR7PpCFNzoV5cVbsc1HEJGbJWuMqJVTXaUpieqhscE6xSKRn6iRH1ci",
  "key38": "2M1eJCNg289WgK5VaWDL3xdSgAcHQQzvsErZm7jq88YPXLAKQLmnti3WKKFVV2Yg8uPPhk12ZLUK8PjRUUchzLoC",
  "key39": "4ZHbqvgYeka2o9mrEfKVGJ2EE7dktzUJjLkegirExugjR3MAXefHpp4GY2Vms6PsLxRSntuGJik9gnayCREFmHPb",
  "key40": "3ZTYgs6fY8ZpkxF2vkyGXzH3GiBtmcMV6TwHfFg1DJM41JtBBxA2uLSGWmvUmQtaQ1qKEF7FmAp5ihqub9bzLFmM",
  "key41": "5ztRXsXknuZGPaGWyy5cnj79PjM6dAPH12zF6d2zmdpFLh2mQboYJdRAeHPor9YRUv1P5R2XFgiEwfvbtoZKVcS7",
  "key42": "Mv3bCTqpT48bSnufvPovxz492mfjETHWfXDqvrzUD227QPvP7zW9vumZT3VQEjVvfvJkVZVNsWiMmvfeDuM8Wi4",
  "key43": "ecokwtJChYsAa2BdLBEFwMmhre6MieNRvSabxKLGUGeHdho1vNA3yP6UshU4KVKZcWi1hZjxPLcferJ3qDFUNVL",
  "key44": "5yaPXb9bF2YfSVKS1DdZUWi323kmiuDuCMUWJTftT29Rg3ZdxfY5QEY8Nr6supJdCNHw9ypZBxKrYfLVzJvcJohu",
  "key45": "5sweXHAEYG9qv5YnnXuWH2gcJK3fAq9FfDEXbVx16i6EvfewFUgKdZZjngFuED3AaLAC2Nd6CCy8bGqqNaSLCnJx",
  "key46": "4Pb9BkduhturayjKWgFPjtt9uho7FyDeG7SUgsXQvRBhB4rC3JpgKQrAa5WH6x6GCP7XVj3QCcD6uCG9CYM89JW",
  "key47": "4AcNGhBcyt18GsR71p7a1EM9MgEGcPgKUwXKsZC3Ftngz6LMqMvWE7eBUUJT4qbndXcbbNdG9L27vNPgwL8nDswr",
  "key48": "2fSjQDR5VNUizKSsC3Z94WooVTQv8gAffKdR3FLiCbcBcGxf6DruMeD15Jhmx349FneipX2LTqRsBZ63SSdyAeNp"
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
