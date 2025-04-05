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
    "5cp6BXuxDdS2o6TL5vvR9z2jgFjhz82fWxzhQLwjoshvJ67V7KQZyoXTWp53fiFE9Qm1KopJWtsmErwgfgNQXpgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpESJzcKdvP2udQbQw9gbAfiw64zndUbdEKNV5K8ixfN4ku34s1tAz9XcgPydp1t6xn2KTqGJG3txWnkQo87BwR",
  "key1": "4fZ7yXwkxuRymmGe3VeiDAAkXtp4jEct8qky9yQVJR59gMis1Cc5TfeBvJM7NaHco8SL8wXvVJvBsj9Da1499knd",
  "key2": "4LVUioW6gKhR97vBZW8X6DAXYQAAuwTrHfGnprKXLNkfWjva3GgoiTAM3TLPizpKSmCwfRBgFLW5Vxefdjba4mgd",
  "key3": "BD4QsShL1goZYxzpyKShRn5aPskhfQjPQoV1d89d7N2X8ZxdWtqE3dbcj9CByWtEQQ92fwW6msfjfJkrkkBGPE2",
  "key4": "5unfFgURZ7oiYvJ1LJer3EXwE7cMKC9iiXLduv9LPG7ACbwTZjfUPtrHHkQoanBXSLeAQDpiaVhxjc6GBVA6XqEQ",
  "key5": "KWGyCkF3NyfjMFvQWV1GWqroYvPgGvGXMGY2gq3SA3WcNvx3FJb9LBy4Y8c7xz1K5V1onpv7pQaW6fAMKNP3GtJ",
  "key6": "a1bYnWnaHDjccP9mXn5cnnKxfyKCWQYhnYG7LGWkpw8msZmH6BCNGwQohHn55Z5YVCnkgdNURwRrWVp8iJQABEW",
  "key7": "5SFK9LrEURoFFv1W2Ezkm1b9ToEsKSMqu6yB8B1qfzknkng2J9vCP5aHaS9fF6Tyv5fuNadYu3Q3RhF5wqiyFv9o",
  "key8": "2qvD53dx279jXZjTqyhfioaotyqsw5RxNhWGCPHsQZ3LxJFEfsUuDsyg2x71FA9AuLdYtwvfFM57QQuwAzVCaBtB",
  "key9": "pcMji7Rw9PszD2FZfKHMrSrmv6LHqVhu8RVPFVtMzrhT7N9csjURFKrbENS3i5WGZpt7V9dEXK5UmzXJn7FPpjZ",
  "key10": "2NDfyeMc2VaQPZZ39x5SpF1FjDYWEtyFBpEaGHnqVY661B6HR7DCRtuaytLNNotKmN8Ah1GjLNSWx3BWFXYCu9t5",
  "key11": "2KzRjhdtrK8H9npS6WnAN9EwHg7eZaCxsTpTAJ5PBKtWtmsF2x7KhdPY4WKehxWSchBkuNGGSJsAF2vWvQ7SN5vM",
  "key12": "2rqBZS9sL3QYuqo3UykkeHrgdseero5guXEyQEkW27VtLA1nNU3y88QFCCUdgty1U6dNQvHzLkGVAWFgYmwbZrsy",
  "key13": "2EPJfyJHRHkvPt8guYHvN8UTkEDmgZERBpXFeVxfBy1Xjs76449JSagejN38Udaf5VwUefzua9mvZWfhmZDtqVgy",
  "key14": "2nsSHYbJzbsMiRA6qQyXyP8AAZPzGGcMMd32tyhe2CtKv3zSHcXaA6C84dQZNx67UfToAtSAnJBWuY786vn7E2Cz",
  "key15": "5BAdbYTts5TnVfoCRgrR732fddWZXroERS4rVNfSzqCJADeFk9SQrXVzrhkBRyxtrtfnzH8ZjC7kpRLsaskafVjB",
  "key16": "58gogPrGEK3gKth2GZPHcGwPqQRyE2C66qdfxjAKBry51RcUjhgX8mPp4Qg3K7LDY4nf8MntLtQz2FZhSgSyBToe",
  "key17": "5iF2PgzzA8axo49Yh3vBFBamdJFfroHAdU75N1GqAe9MoVbs5U6dzBuprgXPkL5DiHFxgZezn7vv2UDsd4VC1DD3",
  "key18": "3mB9rWUuxHRhFy6CiGDp54RnmvnSkGrrgkm2S3xy2omVExHgCfVsVSHQ4W5j6ihKrcjfGnCMaKV4Eg8uNBskw1mp",
  "key19": "ZqzUPPisiMie6aeoxaBSwW97bMEwduKAtcNZHJX21z3Joi9W9DZYZXdnnaA2YEMUyFFJFHWNe7hme636g1tnr5r",
  "key20": "31nad2qq1i1Y33mWyeoryi6bqbxCHRVCHjpW8uTScGb3jD5Qp5Th68R62LEG5yj6iZLAwoBWoLQjymBZNG6snRmu",
  "key21": "49FuNpBDVK3UojpYfX2sMox9h4dQmu47RTi6TEznwcV4nS8arJiV5fwUHucFMtJkg9vZzg2zEvdTpZLqm2yEGP1j",
  "key22": "5F7d5qnqoQiam1siBtQd8V6SDuccK1MFnHpN86U3ocxZojTRFELpGE3voxHoC8sGuTze6bS7SHYgiFipm6c3VXP4",
  "key23": "3oFkAfSCRQt7Neh6roMpHu2ktcimXVWLGRAXFv4BCnBhCreza31ZPSiTqoJ9ZizGUHDuTLh7LV6DdCELMZf1TSuf",
  "key24": "41XzNwcGNQ1n7UwuHghc5yd5RcyNNXUUidYEjAk9561TWHRpk4ySm3MXknyUs5eixvp3JXDjrkyb51sfxo2xKjMo",
  "key25": "66YC6Gq6iPe6UP3hvzEcCEVtp9ZPuVXLpRNwtBnjQmRLUoxQDy7SxQfYVmQvXakgdmD2ZexKcyPTYUsnnNPqV7GW",
  "key26": "5xkegvunkwFYxKmVC8MS1bc4EDk3ZcsbKegVeC5NQHpkLNAF8XUmEFQLxog79sK9GwLJf8WJWkEMT2y74D6DwE9u",
  "key27": "4W53vxRqBPHKStmXPZwUY9iQ8GwCMM92jAskjtDNHjwcDvNCe36p9RtP9ZspBRGM5iBoKiXh5E4YuJKRbzxWhgab",
  "key28": "62A8zcWYSGxt1UHZmGtgL5n1brEwtMzaX9iVYkKqcrf7unfkLY44DDeiFa8KGnQq1fid932Gu1shWbp7ywfgtZJw",
  "key29": "3hJNgc96enFT6auC4qd6u6CVCqc9eXCVYekFAaE4T6ajejkaxjRAq8pDd1vj9zPegBLHVDfoJwMvXzZu7hWJgxMZ",
  "key30": "5BgudQA6jZE5pfWyAq3o7u7d1fJLFrxndtRDWVekxVdouVkrmnMiDYhq3L3agbRC6AzbfEDGM1Swb3JrgY37o5X2",
  "key31": "5o9mpGprqFGUzpmYDPhPaK7tvVQiaZrnVt7AQyuwJQZfdGrUsQrSDpPxnXvmjWzPJRQS3hRpib7uu2SLBDUEHESq",
  "key32": "4d2KVSQgFoZGBCw4SFzFoBF38CN3Fh3BXpk3yWsuZNN1uFUbcoVsJgHZc7xkvh1DJ8r8XKHmHu9XXhDLVnLFS682",
  "key33": "3zpMJ2UBEtepVvhh7Qd4nq7KBCx6jUXo4TKErpBaHpR9G8Pqyd8wrvAD99ju71PvLgwPLwXTipDNSA9EkmgK5M8m",
  "key34": "53eMvhecUSGaMppLRmQcwmL1H39VvevmsFvVSWpxzsyMzQKg7LLmBsAVw4UBzHHXmca7navtHtFyCZQSyFRqKL3P",
  "key35": "4LgQXjBunmHNs4bm32PMiBHewKNfEfopDwd7tepGCh5TbzREHR2aK3h6NR2PcaSHPKendmYPs591ZqkJzcsMYv9d",
  "key36": "5gwcXSC9gf1EBzHAQCMsf2zGbnibi4HXp2w3My4egahYNnqUNJznnAt64aM4K73vrCAtYNHmkRPnWBQch9Rsr7yn",
  "key37": "3p1qTvxdURJFBydfbD23CEXsVyNhTAioNsmHK6q6zcK19WYa1FrfcrDw1nVSEj1HrFdmc9fv47cCZLAXZuE1iq1D",
  "key38": "2LkfUtcpz95wYLnLFDfPENW6PPFq7f6d9AnuRtJ88DnopENcDtfG6oG5rrQWSps88qb8bVuiqfLvehKJdiUSiNQr",
  "key39": "42trHmpbe7VgkvoaEtTLbTj7hShbtgFufx6NUFjPS2MRtcgof9ZbnVmUVPnGV9GHCQTsWfyRofiWDVt25qBX8JFC",
  "key40": "2cMy11JhYter65nS2VNPVnx5bNSnF7oLsgay6i8GS5rPW7TjuP5pPepiSd1TLU2MZHHWCovyxftXR8bFZVaK5icJ",
  "key41": "63gb7JHHg4Pk111FXraJDGdduy2SyzoS4nVyuj23fVtCxd9QN9HmmX1UnkcBw594QYU5fzFnbfb31jbgVCh9rvX9",
  "key42": "4ByNDMqwY2fVeeQ8TawMq344mjMvqWqSBmwQ5TLEnHvVzEUbzWedeXAz3Vf4TPMxqVavQe4TAHhh1iUi4vR7oDkw",
  "key43": "5smg45xuGctStdwshhfsHg18PN7oyHtZLJYcjANt2ZTrg6nVY7EoZrvkd2Yjmx2Y1ykAPAnT98AJtxE6v4Gem1X4",
  "key44": "AZTTqn1hBVn6uSJzaHUUSp6CuFMW2n979ZjMcanKEB6gMV3i2KNhVeitpRiyaGSevxdPp4uqKuk2uLfhzdKjP1t",
  "key45": "2cBasFJHs162T9W5afSouN8ypz6BbNRiuTvj7iC9B8BPZVSvgxF2ot5W4HVZUuwismwoBFnJF8EB4zs4bCcC4rg9",
  "key46": "4dsWSZF9TB8SJLsPsDpSvU4ZR9XvqtXeiChZyqxuUiba5sdgZHYmDspfE6jvLFR3L3MHj8JhkhZ3ZuKVzKNPDfUj",
  "key47": "rrvRfmJ8TkQJkvbPP5t3tpteKKmwhFhrBBciPqx2hq5cgadcNNM8e6Brh99x6yyKAELopezLGtWE9Az78fYBW2f",
  "key48": "4MSVQtqGMtXJRovVCr2cHbupyC9SzCaHgqKfTjawqvrAWwjs1eMwB8k8AnFDydEfszTowz5rLBcbr4pgtTryQWnQ",
  "key49": "4tpiNH8byuYLCYMPED1HpD2jGeHGtWNzcKjerVKc1JTMUbfW2X9tBpxhE6fwYHruj4qT7Bw5pfD1MRJNo5NPmHmc"
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
