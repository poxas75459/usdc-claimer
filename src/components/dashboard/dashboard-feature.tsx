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
    "3dz4kbi9feeP61uXy7cFmcmwqBt6LFwg7Vckf9BvBd87BjZE2brst6Rp5micdBPReTh8LcpQUm6tmuuN2RSPgFsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2424ZZ8HB2WEPeUYXbAoLtKanjpZREZCR5CcwQHHJZQbsmbW7B8DufhCyWUc76tV6KwKJaCwpmFC84sXdftYkrv8",
  "key1": "5Ez7teeMqFiYkACAAcxh4LwBhnDigmztnfWxzzFYsVSeC7pnjZLWNJt7RdUavnsGkaFfH4m1WKUHwdDW4ydxij1D",
  "key2": "5tNLoSKG4q9gPjJYABSSdBpmq33nBAkp95xh4Eor46AabAdSZ8mFLGHxXU7Bx13C9Nik7216AMzda5CEQ2ZUU8Ln",
  "key3": "5Eu7k8oQNfQwStkY9YDBdYtUUdDgB7LXrS3bv6AtJ7dSHc8SKrUPaCbUT4TjCPfavWL4DknovaGgPacZxFBoT29w",
  "key4": "3giPEXLiNfHhpXoN3wZZK2CY2uFWL5WZkpZ78gkD2CzUYcR1seWs1ccUQQHNKRs9HJg2n2gZ8pNjvtxmfrjF3Cia",
  "key5": "5ciHTs8f3Nn17R5gLZYCsGQnbiNg4Fto9gx9fYNfkpeoK6VC2MGyi1PniRQFiYGm63cgWk6pKEXvRLdNj7TeAaL8",
  "key6": "5LoLiNwpGtWnaKSwbEgxPTGKLUrBN3AWFdmqjJQWzLzZzb51LJxw1dyJbp1oesNAynd1FsJqWpnAb4jtSQaNpwd5",
  "key7": "3yYCJmjJjP2Ln5DdhEBzeHCKPGhzn8aR4M7gkJnxTRjhcQ3FPzDzptXP8UHb7Vnc4ivinQLapyzsnU1GHdExpGVc",
  "key8": "22GAaiAhvsFfUsetSmJs7N7yRdYSmD6vYYruzbPhybm9f9AKftcsz1hu3p2UpT4EHF8VP2YVHdLf8Gd3ZoTMGqqZ",
  "key9": "41aVrDjaYtPxj4Zyw7He1Lwnb7Qr9VsAfeqTgModrRi9gPxUFnjrN1FTqJJoZd1hsrRYgvdDMwybDjSfsQpPxP1F",
  "key10": "5BExMAophT5N8d4a4ziWrScnrjybwdGwRMdmbhdkVLZ9uSoMYwEEn95Yk63L1n86HrdPTxPGKD7847MHcbLYXoRr",
  "key11": "5PMRKzLgJcLQpxHgSuadzD3GeC8MWaf6PpoyV3qAeTreAbjrYTTiwWxmR2TQzAXNoCEvGsQm3EkYPFgJ6fcVhaYj",
  "key12": "4zyhgAJBD6Ca9fAQefLdUeoUyufjTnvA63s2oh8EfxUrdrr1uaoKmiT7nkQEY2Bg9v73w4paoREMieyxVuK7rgS7",
  "key13": "2cVmH5XRWNM8diRiSbqQabU1T59k5HXQguwuey5YmbnyzKr7MC1GrtEGtr9QMMkktXdpApKQqiZx8Nc2VMmN5ajn",
  "key14": "4wDwoZJwkVAjqiDRUUxonjrYCUiYcBztJV2LwhZyvuuU8j9BvWzww3b1eWnw5idV7e2pJoLwF6nrkUdXniXYSCtz",
  "key15": "22PPSLtBhKufk1GH7XeMyeM4ZZ4u6yv4YmBeXG5hh6fo2JPtRAXpiQ7EqKvoieyUdXia8yMwyKqJYxkTosoJEdx6",
  "key16": "2qnVcEa7jdWuCBu5MeNS3pyG5NDmV21jKheWiZkWALWhnu3suwmcXgjV8SsMvsr7Bk1qBqTLpnR9vckuq2Ddp2Be",
  "key17": "cwWjH6n8Wx8ysZZSH2ngBxDVU5nHmohXzSJqDiQfzx5mRWZfW5a6nbHzaVnGupyHQZ16imcsmHCXHoacue5bdQR",
  "key18": "4ctmnYkbGhkkHj3XLj1kZLCxogGVjea8NWnGzRHet811sy3L5hH65rp96oytVZVi4JZdz8boCFvsZ3WUWDufWyeY",
  "key19": "3FQHQ2Bi4NXTxdYGtM1w8n7pqnpcj7s1jngAUGm8yfwJ4quAbov1B7VXxkMm1WJHS14sBxAP5bGpKo7a8nKc7L8A",
  "key20": "57AKTpGcCcSUQN5bEfM9QLCV4S5hUrSpm5E3wZS6EK8U5KEwZzXBukf666srUNP1QTR72dme1e4K3PB1h3kh9u2J",
  "key21": "2jMUhpHoXc5URGr2iC5oXkemFK5he2TE7q8pi6jJ7HNMuEgxHRV6JEMfn3VYBZPNwgjWKHFDk83mjGQHYa7xP3UX",
  "key22": "FswMdtojWjaFPuidyvy67Kudum3cA8se8hXrV9kQVYJxCcQyGJg1ffU22Pg7kZLPoA5EaaEZuFV8QFBMsBdgYWP",
  "key23": "3bctXEh88gPYcu5DPNN6MqfMstD34bmHfpmf7XC7sh4sWWfeSVC5Q4TTLpL5eXqpkxaVNKq73FKp6rkE33BbUJH6",
  "key24": "4nXhKUx8d9qgakxcfWeJuA9BqVbACZjmURUBnvY2ahcxAtcw45nMhfiLhZhqquG5DWLduBHkKM954Tz6je514raN",
  "key25": "31KpBoiKvCv8wzL7fuXCXfHeAxb9TmBfgtRdjZRN6xe1VKPik9tKg3wU4ZLG2xR7wAbRgr6hkabcXoJ8bSBCTwmG",
  "key26": "3vK6T8JhYbWVDZjgCVXb9wkeXVzfdzwnWjayFDAeTtw32kq7P3scrcKvNrNJgmmAy6q9fxAgHh5UH1QyuZPJcn1H",
  "key27": "spPc54MGgCj9R7Ypr1ZijhWkC6NSm66GHvKdVWA5dGvimrjmUBJUhKmqBJ3zdHr9VAwt3VEsNQ9JbJr3fepTMsa",
  "key28": "CPt7y27qFEjkjicQXAsJVSJaHxSTMjy3q2ACipa8ZYz8874jPQbq3rdUv9WTELZUanhofMofU4xeenfoACYUQTw",
  "key29": "5RbbssyotfXhLtJhAVDc3S52zs4k9oFXeSDDRUDcVAT8HNTheWwY6ke8KEboRshSykbLrFpCkk1C3Ncbzdeo26Ec",
  "key30": "5HanydxaXgLmSx9k62AEbKrACqjq54gpZywagDgc9HdNRDpC5KdjkZCrRXihDToJ1oFZgynWybg2d5dSULxLszHu",
  "key31": "5Pmg1EAaTmTzUXNrC1UozP2sfHXJmpfYh4AkMfj2nuTteCpUw38wXk35eSPgr85AoFnn7wXkEitcUSSo9GQWqkcu",
  "key32": "4p9yCV79jHd4cmrEDY67qXA2R4pLkerDE2MCGh3tqTZE8aqHoLDn2Bfhx2G8d3UfsZTNSoYcdCYYhQzn3uvJi9Ui",
  "key33": "44fSnZ7uKCB8XzSqm19HXiRsFFiDKCAhAYg15XZ5c5LebW8HhZ8ssKQbLL4s6sUcNthM5AE4jBXtTmTybsCgzBhY",
  "key34": "4j2DHhfsWctJb4A4bsxUE5UdXPie6ARX1ecKrdzSFFKExc9w6MNqR2Y52KWY3EPMBNWhfkWCAMDdv39ar7Ch27sm",
  "key35": "3PcaTgbGUGiaLphjMNophj848gTPwrSdUSEn7Yb6xHaxHtXbcz9YYH2gwrK2qj6mXieeFCR3qsQE58P8KAWqXYRj",
  "key36": "52tDKMiF3xXxQkd7dz6DJEasFgi7FiKyYzRnsZX9kTd9uiYT13qnWiGEuvhsCA1fsxKGJKkXnv5s2vmnNHPqMBJW",
  "key37": "5LiSt9mp4rz91BfthPzniKStz31uvYzJsQi6pXU34D1C8DYBanjdGXp5TqGKPbafZcMYuX4h9cfaJot18VW7bXM1",
  "key38": "S64yCZvmFrw3Qs1WMXQ31LeXPjarfc3J3oB4Rw55Rak9LuJy5Xi9KM5z9pTVCpfH5yfcyUZdEAryFvnuSnhcWV1",
  "key39": "5ptXQBMwUZWusMnhWk2kGVLHnefmz55r7Mp89zYmptnmewdFq8MVtkFGfDHzFCGWu6m4HjHLm9oKzCMnedvn9vyg",
  "key40": "5CeeKCG2g3aPkDxD9dL1AanAmKjhQgo2Y5HznUrDQ8mnUCtse3kxeoW4XzSNuDpK3P7FdYLMz9EUKct82DqX42pG",
  "key41": "2A3aDA8YyT1hRreGGXJhpaAoasmABVZQPzeaWQSy5ooqRHxtJgT2idYdkCSSQyUs497P4f3eaoNvDXTDVz7vCsR5",
  "key42": "2v5NRoxin5nM2d9haowm9sJKUHAqizZnQefxzSXU4Y66hRsTUtaSZJrnnuLaUku1h4uEgQodGsUSQvkiFDwtxYpT",
  "key43": "2PPAri4veNvR6whnWQa5a95rWsU8LUxRs4JQpjRXXZAJFwXrb9Ud3gwBArR2qHbpA7pYXtMrEoTNiY1mZh9XmLbX",
  "key44": "MCJ4ZRNTk2K9VWvbzW7WzcC6rXQYiwkMGSG13bEj9t6kUCGicWSiKahLB8KZewgy5HZ2CHNvLBuDXuFWcsQ9sim",
  "key45": "3kS4VFfAZysfAo6cPnptojTZQayu87JtTouacYXcSo7WAwX7rfHqVom9rg5C11sBdnKjNWYrSs8fKihJ3fe9yrqc",
  "key46": "4aYLitJLp9Emyt7jhQpUHCtavNAUZgUQ7oBNWPctQ45jQd89vqZn8dqUy2cxPDq1ztY2zxDL6bDFH1vu2Nq2z3xJ"
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
