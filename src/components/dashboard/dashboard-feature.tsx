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
    "2oidA2TotpDegmnzp3ssVXc4qAovB7L2fVXbddQuUY72bEebwGhYkeaedGCxuq3VqDD438JwGxSf11jWuqkrLzqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36h6FBx4w5bwk9KRP4oAgbf3Qb3WQX3YSu3mpuBQU3idz8iUv7xFoYWjWFTCbjq83bL7eiVU2Z9b72AAnUf4TLvJ",
  "key1": "38XMQTcKELauAPaJfPEDgMHQjVCyCUmkAEWq3KkpZpRk3D7qh2wNBJwCwJRAJ6Sv64WsyNu3MtywtNy9WQ1xGtU4",
  "key2": "4gZc2YGfUdZUr8V3KfFoHn5y8v15MpJjntDdUSWWZibeA3KNiRVpSP2FQiFxyh4bn1iiMHd8AAivuvwsS91wEEJs",
  "key3": "ff6idvsgrV9zDB2LguknwA1uuEnfp5WFGju6u5C4rFXbcgRw6E66nUkU7hw2jWF3NzCJCipPQas1sGHTKsJ26TK",
  "key4": "5zkmmDbwvevy8kcwjMatRZarD24xnQ6t65sPEmU6dJkch2GhL1T9p3ZSajEJU2BfajnQHjg5fswkAYuoZwJph4yE",
  "key5": "5NJk12mRSh3zfgvRXW3gHdRZCWmdUD2NDowwBNNRTQjWddbHEYyu2WztDrbHr9py5xbipG4B8XuED3nTQ3dQbDZR",
  "key6": "59axrG3cNrGTqx54zLjJKYaJkfsnb8odA7F2te4mduFpBuEyDXBT7wyWUFp7gxnHFtk4BHVJcGaaT6wSkSV72H6k",
  "key7": "5LrjePpAaFLGbY8VV1wW1zc8Hyi3E4rXCwtpdMbq2Q1KGB9JAnSxinJw6xAkkfu9CLzCecZapAZ6BnkVt98nvxXd",
  "key8": "MsxZ9JRDhidpipxkmQc5iRH4vRgquU1GrMhUmK2eR51YX9HRLEs91dTZRVbNuibnLy8nohLkNooE8LXUjR9uCKc",
  "key9": "3zzq39UgYZnchS2RMi9i5nHjZrNx6yNUNiSsQNY1HLqM7zrw6JVDGPFxij3gyRJVKeh4QnX8dBwgycJUvDhmy5fG",
  "key10": "jyxgT2uo3FSYTCNk8weN5JiZGhzMPrPQqNcPqHNRYp7hYbvZJcdzvZdwy58di7FG5hBnKi12htsddK8coBoEoqg",
  "key11": "4W7ES9ShTSLm46J3U5VZdrGeqy2BB1oQ1Y6mqf6mP4YZekQwwQ2rUQY4WHVeaitZzFRVwCqYNiDcCHG3v3wRjhPP",
  "key12": "5JwCiG4EAqJ38XbdeJFNByx1aWHLQyZAuVGZZ6eG1uLktrj21LrdqXLHrxV7H8ugRDfXrk1uAhi5ec5sXTzQQLnj",
  "key13": "4rWo5aTPLri9UDfcWf2mTedRbMXpAGhBeZHV9MRbNQLcFinSXDZQvnZLgiKweFwoXDasiFLJxuYmXKovwHCH3bJ3",
  "key14": "64tfwc3C2JgYcmSJb7Q64GQi3rEUbKLgnKeix8YwNTSAn1ja67a34gq9P1X12RLwHCnFWvJdYfs8uDDgXGBs51Uz",
  "key15": "UcTN4w1L7QMWtSGKnDRoJWXzYFuFEu6r5Jm84vs7APrxMr4H1MhqwcG1U1jpfXvVFPG1soCbUJrLUHnFrMV4xpQ",
  "key16": "629oP6yezcPNUvq8n7qbB5j1GW87kBQtqcDPzoJ4wYwiUpfEWAAMgCNkPaAMaQACFtwLF8v2DNcZEtKvkZnps6Ak",
  "key17": "4kyhyA8GsjBdYT1hg9q5aWEi6Pm3ydcuKAS1c6EahMQch1ZqWx18SyANWWvPJWedt3b7ZfeMY8priasMBcFdGgqr",
  "key18": "ncbgbwb2dAf4gysrtbip8yvhH3thPe2hb8LGARRTJc4BYktZiB1wencFDJU1MBNkFsLGhcwKdhaZCvh6cYU1q31",
  "key19": "58KCH7cf9VNkXMaAsfxAycvDRHZnnmfckdpN56gMsnBRDfbubBMRVgEDrHGBUhtU69Ni35UGnXCREyYYhEYa19sV",
  "key20": "3sfEX4Cc2Qaoji9UzMbVgQSVpeo1eDh9uTW27hMHqBEn5Nwp2g4nBkYQq3vxzySdycDUKYpBEoQCZmfv44EbFzEt",
  "key21": "2TSYtuKrQKtZXAaYXp1tzGFJBe4A4PadBHqaJjszyadUFe15GJ5EtDokoUsFiUY7RKWKt55DPK5moBnmHrQ11B79",
  "key22": "5bumSRfQdzbteauf8UQcHYvRuV5p6KK6RDUTiPXizNa7m6BHMEGZYm8qNKt4czPo8wDrwHa5ggNrSQNWFw3tg1o1",
  "key23": "3Gr6MSTYYUYbz9Ag6kuwiAqxE1Beda8X4XL9WFqGLjYkWToyKn6T3YVdYUz7p1Ljck9QqC7Y5FxciTJrPYwJ9QH3",
  "key24": "3L8cZGaaE5Cw9mLmM4beN48dSp3MoTQ8STFiPjJUaKV1U4vVvCn25KApCQQxajcdQz6Zg7UDGoDqtNWVyvn5f3Wp",
  "key25": "3YLtwdgz76UgtUkbuJWuPHzhmZrTEJeZUrKu6kj4SxkVgemC4FuRzCDR4vK3G2mmrwDmUB7VF4FG9rA7hsKdkvkB",
  "key26": "2i9MTYpBW4rieYQ1Cr3DDjBmYaeZctmKnkV3aDH8kubQWwNyWgkJFit1ouM8gXixm1RxKmh8JR2mXewc5mbKY7Na",
  "key27": "2VFeRy8XK7Rygu8MRaA7XRAkDw8oGGafjKhRAMCXZ4y581CmCDFGvCPohfNKQwUw619icWi2isS8PpoCBCtBcgFf",
  "key28": "3ujirERLcdTE8zNQF46n1kptpCxK1pTLUVCrDKXKMbbn2jCVNWN3KSkTyRsT1aLoXWAMa3txYtZwdGHz9K3khnbP",
  "key29": "23QHsHJVCanTMMz7XvDrnpZWLu9WAvb1YyHXhSheVCR5kLJG3GYH2TZ7574ewscUWahwN5d8GjkYTn9JrWER3YUZ",
  "key30": "3z4rWCfWdGnqURwGqxZfq4oNpTPysivMzM2BhTBu6upVqnB8pminimCzXWiGRDA9Zkn7aLrdhGYfLZkeh6ZugAYJ",
  "key31": "2ChzWWQHkYne5jMYoSWEYtXMm3b1mhWfShqGwSvESa8QeTsWJaKviZJfV4LoeWFqzk5TEuSin4WXwAacmut7LyrM",
  "key32": "VjGFvnLTjtmAeF4x1Nqiorj8fU7Q2tYo82EKbWWt2J6Z3GsRW7gkLzcn4jjKx1tXzrnAtZDou3WabJ5BRBcRfSv",
  "key33": "3MYrWnMF7B7Hz5nvK5NeAECYeSWdzUcx3zYqbbNzaZF49wTc71HVZfEf6JnCc8Y8k3PPazTNkQWftp5dFXbJqQQL",
  "key34": "2qsWvxC86t1Fiz4j2EgnG85mWNxXXWLZZ2atQg4gMTsApLXTQ6L7GWFxNjcuEitQAYC4A5Q2otjHJvRFdU62xCJp",
  "key35": "27sZWzQvstchpKcXRWq7XPnzDJzuxXBTVPEgMkeSh1gUj5XnQ731qhwx2hZsyvmCaEXmvF6NuxiYT6b9LvUeVyoX",
  "key36": "DbPdQRS6W5xMp1zs85tukhPX3T5YYFnyadPJczTyLuBfMSa3CW1CBYCN3hNkXQ7fa7JYEAFYcBKuSmAyGKPdxt6",
  "key37": "7EGHW72eZwdfKM5mDEkBioo6w3hiNYQ1ezntzQzm6TEhRZRqHuPHvz9X3vKNmvNNXywqt8CNE1jzz9X4oRiVjq2",
  "key38": "5RiyxjG57PvYabJQwgjtsxc1kbpVsUo1siRuiQjGQ4xuiEFrgQvHRxpkjVsZxhCV6wMkVmNCucPi4XnqqNuXbqMP",
  "key39": "3j4WtNrD6SEkNg3f8GqKA6XSVr45q34KKCNYWJ28re3GP3ntWqukpBEBTwDMuoSjQ4FU7jLAxvniieWi98WTnXRN",
  "key40": "3NU4pFpVpuuvmPC7LT66z3rAtCeT9EZvjPsBCwyyKcrY1fbx95SJocfJVQ1qECeHBN873inVpbV66EbmTG31U2rn",
  "key41": "4dLK8eBJKciYFf89M5QR2QSmsx7kbDehB9dxnSJixdDLcU4yeKRaNCX4t1e5h2grbpsCVzNDjqmy5398BJzT4DN",
  "key42": "3FdSRFb33BNYf46JgGjsTsoDYi4NhEbqyk4fEyhYDJYpeMb637TmbebSEf2yopTaTv2tHewBkrLgysuJWhJhu8FJ"
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
