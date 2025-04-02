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
    "55duWMbc8JjVtGDFs2GBDX4uRFB6RN5Z7Kb2qKNf7omDg93jQAfUGsNcb3z4qEwJ5qViCFr4qxSy2PMkeHSibbXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bb4pgYaTonvUiUa1S7Er6gPFgqzGNvSz8xEpKMRciFeu4bX3NuoA18CgQ34eYP2ZSv2HKPjw5gM8erLaQkR7vb7",
  "key1": "4vdPcvgT7fyC5LALeTJ4w9ya5QmsB8kpn8JEpwzNm4oyDFvFTc6i8qpsVTniVR7Psoms3cqAjjwQcbu6iLTCo4T8",
  "key2": "2Z85aejgNbhLvkebnHTdv62Q7oXCn1SwD3Dq3HGTNafxZzp31jirkW2rRBUMpC8DgAj8rskCCqBCfF1zvh8Dxud9",
  "key3": "XGvYkwvpqfkZ4M7vXfZp3xtDsLXTbiUDd3AjnYYMYdZDKh8J34wdhygAtxPZYTh42cAt65k5dAi3sMgsrzRWonU",
  "key4": "5yGGJmPnjF6YMJPG24fYRcmBAQKQ6SDogjSJ5dN8RVE5fp1muwFja6AJ328zbaZPCh2rrmPBpV3FQevhw1rYATJN",
  "key5": "5twE4YDimwaE3ZikgZiVybZjw6jPzJhYU9FMNacz8tMKMKEUmXEEctm8JeYctynBYr3FEvU6Rr5FcJjkxvDkBKnL",
  "key6": "3BbkwnbQzDv8vtxmtH7EunqMxr94tPevcRsvgo2r535142TjrkEAUSdGvDT25pDzwKyKkDg4nBuwCMMf9GrYyY1H",
  "key7": "2nMGmmmfwWYc6L6QZT1LiF1ASVQV8AUE7qPY14evu9pBXU8GAUBj4MdnMfVJ3KUqatkGCw9yiUVfDgfsrHcY2F2X",
  "key8": "55ivnFArb5PFTaF9WeeKnLRoMLkPdnpFsejF8cAZ8kym9CbGXC3J4cQJUc8GHZuefykqJykXnwK9TnBqai4VThfZ",
  "key9": "kLojgPkL1dz4gGWTSgmMxfwUqE6XBW7CKvhji8UnNdNpaHSEpp88JDXLx6Tr8ytv6gynhN3r4upJfLjPSAGgYsr",
  "key10": "4ZsgHaLRbPtpa5i6BRDvTnF9LhSjL1bCUm2JzNqKUncw2cFdJ5EEhZJVzwG2BqjY1Q8xzBpRb37d1ABMJUKsXuT7",
  "key11": "3xrvAeYxDSWQSLUJKMsiE4uqg5RMXP2me8zgBgH9y9vaCyDXYLdJCghdLy1bbnfSB6tYyBwwcEWpgCiG7EvdZsdS",
  "key12": "3GhmX1Jgsnvfv5aKpGvimuFXAvzq4Q4Rp16QYRUR7buQ2QLStHSc6sGe439cJLa8oEh1c5Pvhu6zttLuNJa5mYZr",
  "key13": "TGyCiBsy3h1D3KkvkEvZL5rV6kKYa1m7wiKb9bx1MSYTD5frbmGUYHnDUJSFc3KLZ68qa3NZ31hD2cyRJqwvnWc",
  "key14": "2GdyWKWaE16sQkGStNRPDHH4fkgds62CVLvjR6RVXubzGq9BVsyziotyehWmthyyDYq8srDgb6FCHjYpBowE6Yjx",
  "key15": "5H8jjGRnnFK7eJ7zjMKhrFomV4bcWZ6SuVHzginnXSp4KLurepANds9sLhEArAwD2XNV6mYbvNvGytPNxw6wP3vi",
  "key16": "3VEbXxtQvT8yBvbF6jkapX53ooSYFv4355VJGP9BJAm2sQrmNAYsAe63RQxrV7WhEpydojLsQxge1dYmMzKJatLS",
  "key17": "5G4rbdjKW5XKdy178vMcVxkJUDNehX6Fr6EophqcqAGGcHBSbbpn61iUYZSC8VxTWuB8iRbtRt7Cjg8EjSjw2ck2",
  "key18": "2kKemtZ5E7ifTLEKyegjrq3zJpgpx3XxJ91TLQqoLpcFjwfTWvNUmsTW1HXkb49d3QUDQJC6PKheVSJyAhqaycg1",
  "key19": "5yhjc2xaBuqqKZTvF9z9xkavRnpLYJ8cHcRabF1UaMDqNiQZQqNVnQfvcDRLpJFYz2EYMujDusARZech7okMPMxR",
  "key20": "2RePiPSqyPBn5VNySrF3APaSGdvC43dv7KFa9DTaTcrp9wXHV4wzUuG26F1AQE9z6fTRoNJBUDcP6HghYkjNKLEV",
  "key21": "3F8UUtkUWyw9f4dDq8XP2Bb8ppVj9ag8GcePbk3SXa8SFXP5a7zR8HoV6wGfX9Y34sdMLEdGnjft7eK3BXeVUReD",
  "key22": "2j3FKdQ6793u5TppVWPDAHkh9Z9kARqkjNZjP9HdSL3qNpPzCifePD6bvsSdVHssJtvCt2ZF65pZF6qZNm4EcfMp",
  "key23": "4Vg9ny3TNx5uJ741kr7QgxL4ne66t1S1LUD3Bv4T78kXXARwrWqMqCVSQuABuDZNv1Lx2dHek4vmnxKuYzTe7dL",
  "key24": "45FKUJ14FVdwoCPLwGwr9GfHaMqLjen15j7hYPPodrFSMWuPDUhUSqaFxM7wdRGbKvKHxUJYmJ3qLdiY2zFz8QSV",
  "key25": "3vocrSM4QZVpaHKjYpBW1SNQiTUxNC46LWGPTnu4JJMkySXZfEpPwCRq7ZnD8CGL939F82brsRjpN9PKqmjtuxvd",
  "key26": "nLcgcEXHqEz6seaqiZm29qSpB6vYGGXc9rNXrpDGEcKwvqKXW7uecRXpmnjWhN9HFgtzsfiD7Crs7cXx4oGMhMH",
  "key27": "4QUjbWCmYbpEx7f16sRDHYriNsFkS9PMV5PvANVmRdKHoiF1rLMjwyai8nT27bidvfrJvqKHwfhdRsjFKKv7S2ZM",
  "key28": "5Uy2xHWYx4qnm9NEADk2PmjLjta9Xtstw1dJjdcfr8mRK4H6wthah213Q81bMFYJW2XCPbXURQj2jzoegKrkvB77",
  "key29": "5Ngja2xc3EDEFNUJbJ8rQGDN3hRUZDF7w1efFbeWZBFDUkR48cRQEkb11yVegkhfcBN6Zhk1KMK4KDVn6p3RtNZh",
  "key30": "5LL244quVuFBEw3RG8VhhLQQcmXvB6Laicq8jmSQfRhcKU63tLzkSrS1VyDkcJW2ENsedCmyZ7FskoFQ73rHHXop",
  "key31": "Xv6Ak1nPJsJK9rt4oqx5eD2VKa7WEtQ3RrhUc43DBFVKt4AVz46VGwUG93mmHEc7bscnNT9GfV4KsjqBuQR6FiT",
  "key32": "37si32GWEfYejomxWy5EVeW9YjTdvucDwTRocqrckaCLsSXHrqD8TTdpwfdjjucUbnw8ENMY4ZG3ZNwdAcCt321X",
  "key33": "i39CziQnSQwA57fDpRDJtspgNhM2hBBfr4UUZvV2MMxXujbJapnpzA7sPzxGSvS3hh7gKwHUeUuWhH7PB5xv6VP",
  "key34": "2FLkX3qq7WLnnLM7JRuqJC4yx5GoZeXb8AZEq4jpSvydzU47EsEAGcjhpEZCp2GyzqwGwqC9jWJ5zaxAotLAu5fq",
  "key35": "5yMeeW5tk9rGxTxNdYU2e5owxU4KdDaLHtXdatHRKxb1vrWRCSUBGUzXVZ2iN5EWoZwes6aEDZKjwZwRF4qoE9L4",
  "key36": "4826Wru8BJegC2QEbGPna3JmXscbPwvYghjkeFp7p7b8qGRjq4BjyGEBDwnuBjxDuoNaqd5wZ5K5BCdzwNNjjo4j",
  "key37": "2j8YPVLy9mhAYvkSKyA9xP9zAowVcjMLEtcoufvmWwCXWR2gZhFH6Gd7kxQn5WaZsY3CC4NRv5zpLZKkMpyzBc9k",
  "key38": "2cX9Qa72qZrxZPaoyumxhaFVQUbSeLbqvypWAq631wpVJ7NMH5C57JWGPDwpJ4kzk58B7d9R2wTEmUCSNyww6mGN",
  "key39": "pp3vNWTSMGqX7ABjkMTGxLNPCYNJF72nFE2kKNmY6ot8dzYmJkgMxFgwGKgJQmAMb4JeRF135ahr52D1MT5fVqi",
  "key40": "2Bo7WKjTuPzhrzr1AzcSUr3Y7h2NNkdEVoUgUB9g3LW7rNj3zU8H6jkGNt9Yc8MbRxSsCpQVUvM62a6fYC9vdsFA",
  "key41": "4Z6DSRog92w43ckkMuxcfKjKcQkhkZZqAL9n1TZFZpXKg6n5q6fDQT24FU4ZoBZXkvsNQ5bZZwJMa8CXGDKwUSDT",
  "key42": "3pZNCXouuA9j4WvUqW8aLiiFbG6vY6WhB69fxaigCZ5WbiEHMcdTiJqMgKF429Tbr5eW2s9LFApgiAUT8k52R639",
  "key43": "51XdKBB6JBpjDmgBK5Hg44SAd9NgGRpRpsKFyAYi8iURSsqSVk7DN2nmYhZJUEER4AJtruSQzZmRDPkugArLdJWE",
  "key44": "4oi2JkUebaPY9jMuL1Nop5TGXND8NknzMZV6seEkffpLePqjaQAkcpLyuiBmpoM7k9kZHJpA1mKeG84NHLoT8AMh",
  "key45": "4Dc91rBfMMdWgzfAs4Lv3ruPtzdJsSFT5ZGfTt9Zc4pmq32jK7skjiFeEcD7uqFxSDMQh4sBqta81BsSaqh9VcYW",
  "key46": "wBQH8gcvzPeFe3mbksG7rW8dncoRkyPBPDCrXY4DWrNJsS5JnNpcYuv5rLAhXGizSNBVQytLcfCMrdYrGaPHriq",
  "key47": "5pEwUFsKxNbKAsRAL4twxbv1wysZUpqx87fTVEx7bNcVtcKpsCheTrzqNoP4zvdRz691QarvkF1dVwN9b8pbadcg",
  "key48": "598tgQRJwvQQo1KjfKpXpMpYi6PrwD4gHWUZhPAxNKWCviBxaRzsvSW3j3CmdNbJVzbDu3jZHTHj12QXMpRD1tC4"
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
