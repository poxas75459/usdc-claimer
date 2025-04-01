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
    "3C8Kef7w8fDcjpQFuik8fdgCqQCTayv4CahBmBw9cj3L6z4DCSqZcd1yRGaoErfRmjUuntBLNAupZwNrSuWHw5ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1gmXuprQh34UGTcrqRn2d3VocVKiWsF2oHkfdzo1LJYcrQSR4pofrVnCaoe1SpxyyxrXL2j23yVxrQo35tsAvc",
  "key1": "2v9iPtwagvBoT6X1Ss7Gt1sS1uwJvvTnt7nUsuNjc75HoknjY5MRfjCodCekEZwuKxLQg1DLLmonH729RcBnoncv",
  "key2": "5juyxTfeVWAmN9XmqVoAkGfKqBJi9uk9WyznmazErLVW2jGwTqCxvfvXTUHiRWaSL39t9czqcru9wUgSPB9sEsgK",
  "key3": "262FJ5D66VGJiAWThoFuCF3FDeNKtc9Mkjsv4B42YD7M1w4w7aDZ9q8REXgmN5qXorcucthUkLzkE1s91Fu9ToQL",
  "key4": "kaYWpzpwcbS9prpS6zNkGWYV1g96NoUSgyRyvko4YoZVr7tsndV8PbXD9yHXzP5TooHhQcWcLAnSfMkhFjWy2h6",
  "key5": "3txQC5Lj7wePZyR7uDqLKngBnYdCW6wdQ7vfScVRRjGsLu3P8K48JtytTo6A4dWc2hNnY1eZPZrnUuvSVoyvEoBd",
  "key6": "58EbCNXpWtfwNzHwwJMXjMpQMuSh6t5qH48LfdPNXtN4KQhS7knj5RVRMGCUzvM1cJmk7kkxtjMiwZUNmWNPW7wt",
  "key7": "5L7262nr7eHaRzB5T3YNkTGPLYXfE2fGKUC5UovZxeLiub7DB9jhqNkf6RHvcwZ7xx782MDqCjRKtsrCVC6LVvGc",
  "key8": "Uf3NsyLFJU5LH9Xk7oMKroSB5UaHakayP1wyNJPiVYYm1KSrEWUSTdeEqDWmBoWS1bXsemvKbBvWf7r62CsAEDH",
  "key9": "3gKC1PqAcVnvVG7M6gpk4UXs7ZWUWAFwNXfhhgvxrkTQJfwEdZBX4NPeobeygAWR1E1cpJY1oBtJ5Br1W4xFETfs",
  "key10": "EmFBBRmWq6x3t1APWp4iLvZBeypSLRfsmFgoufVaoSs27zQxofVLfyYwMoLrhad5w5vmJJuWwxqaKobc3dR5rSS",
  "key11": "2B2C6C4Q8ueYn9nyLcBhMXeFVgfpdjr2X7eGmoAtL7mqqDLmpaoG8wPPVXMUdFBUwA7hUV7LEvNE5Fe4qKy8x1pY",
  "key12": "eieaQeeo2z28RdXXDV5KXU7rb1oS3F8vxXL364BVB4FiDpFkfXaHkwuNZiFx6Y4YTA6hAhMoWVKSh2TRHvL8SU5",
  "key13": "5UFyqyWANrxaw4ScQxZocvpoY69X1rys5CZkkk29msD3vkXi79vUY49C4MFPZ6zSfw6FPfwaz7V151KnxHLHnX6i",
  "key14": "59JdCeC51xdiyUmAzdwRQGTmCtgKaT7Qhs1YERS7JKcsXd9oLUWzUEoksgzZ7MmDN4y7JnMSKjsB86aA8QS9kLWP",
  "key15": "5P3tQsWW9TJnUEwFM5fjz5HL4T7FLhfnJ8ALZgpBctfnAV1hY9JY3mhNmTKdWcEuWmq95q71YwcDetW4VA44JubL",
  "key16": "4Yk7zSJ5z6VhMJ7mJB9Ym9aVDrFYLbaLSsbNJdhy6yx1Qt9YM2oxdsS73TbZH4XE6fEZZTodMjWhkeVt8LDYA1SV",
  "key17": "2mfJT2HapVJHM6ReEFtb191c7ScqwVMcAdawdRNRmRxXUG27mYg8UZCGffGUkJGxp5ySFxPWBxNqdAgnmwFDKUZF",
  "key18": "5J457AJrE2Fy5vJYpYPcM53t5isMD2kaeyqG8UiEBAWD18yJCiBSzTr8U8EGSDnppaVU7UzouQy8D1jvD9efMSWe",
  "key19": "214Lg9imUi5XzefNdBzHJ4c4GbKgmpzQvT9dQmZrmBJ6EQxQDhRCCMS4aUPF5a1d6H2MzBP5ViywnLap4tvtgNVN",
  "key20": "ZhhHViqjReeamnurKoRCP7cs26j72mXE6uxuH7DXrhRoZriruXp42ohJrtCxCHqvGJR3s6rgUmuuoUnDoKAkiiV",
  "key21": "477JBWSXQojCFvrHftrRuAGn5gMDY9Cmp4MrSK2EPhvRFRNCQLcgYMYWCKzmDPnmp5UMN2Nj6sjjbpfv7M2BqV3K",
  "key22": "3amnpJYmsbppRSYWccTSTFMN2dXkucpfrtRAb3Ui8W21DLbCokncs7FXNtZGx36VX9sa46PVHAQJfU4Bbgs9dhUA",
  "key23": "63tt82qCLf1ivJjGBPqv1XAZUjfwGMZRqzauCtHPkv47Bi4AbBYNmsbgGLrPXVfniLXmNVGqvEyA3TmXuobFmxL2",
  "key24": "5H6V8JvqNUdjvzH2QN3kNVJcxJGRugk8i6f8MjECnhcFKkzQtJkn8Q4qkNqutbtuPmU84indvtvPZVuXCagLupRv",
  "key25": "3nz8Z9ShdrRY6vUJz8CJJQmqR9Jota6pMdXpKvLuPDazoi1FSzvSZey55btY9ZTEiX3z8yt8yTJPE3YWptnyJLeX",
  "key26": "RTU3HcWezzR2Af3Rq24ZUAZJFmjRRRHXokB7kgPsiZMF86jMexnT7kFoRGEnaiPYMaF1dFxAe98KKYX3GCmKHZj",
  "key27": "5gmEA61rWUBT15ZWG8BVpn2EuZmAZ4fnHS4YE4vBfXnvb9RrND1ukF2TLvRYLg9nDEobBKVKY6PsSTrooT7AaDM5",
  "key28": "4nzVNqxUgHnGyFAJ2X8zmQsqjwdAY5sDWWHSqYUc8UbFjHzty7x8onYfTQkKj2VJfhRyqDNm32hg6SFnonrV8Viz",
  "key29": "mWxZJa3yzmapyD3BmWKxzJqSeZgZ9M4qGqwmkxBjJ5yBbmHuFiqwt42jjmWUASvC6FTHVuTkoH7FaVxqQVKnQ5b",
  "key30": "E3RQXz7MSDQZhmxaN9ZEP3fzv1esEXpdz4aW7f7poJU4fGD6mECHWwSgRsABSKV4wVg5fnMwQGn4RftraaBz56Q",
  "key31": "4PsVJWGKmuPQquSzuWqjMjL1211fmmDJFJG1u13wZPRgPswtPFDvexbhxEmJxkwWkFjinxBJaNzL2ExZqrz3y4bh",
  "key32": "3W9tH4DbyM2J8HdMzfutCeRg1HQS2EBDxCWJZdo4LuD7r6GQdc1TCs2Y9Rs97xSPzfy5QESS2n42u2nJ1moaTWsd",
  "key33": "66X1vYprrkdqpFQF7MhTgQiV5E8LtraNB2SJJYzBjULEmJ6DBxUkB9USjgbPET9sZb2ygP2SwzmzrqQH4Jju6Ld1",
  "key34": "2zmKnYMNfcwp283akEXuC8DFzWNd9Qr4TamG35vv3SMzfNSHPnFW6mYHLacaMf9h63h5bKbFr5rpUx6g547nhagR",
  "key35": "5DxXpiz9wkm26sz86f4qx7k5h3GCDEMbfLqdPpicfpvQmqkKM23dxv2TkCMfTB1U85n9HXRCeJcxaTKGXrx9TFNr",
  "key36": "5neaaTLRRy2oCLjcN7kVZzDQvBUQ8rpWMuixfuDtPFRTFaGCXnK282VqSZLbWDeAtzcKjbPUAnzcR4PBJbo3WTA7",
  "key37": "2U2HPH8e5mGUWWmXwvQvmwe9NW4FPJfNhxZcdN6dG8XU6FscodznvrkFbia1NVcBhmxsFVsnkTYhFWfcu4Kv2S3C",
  "key38": "5M2Qn8ics46difTrkH1D7sWrjP1kmkqvGrgxECpGYgcR6WxfAaysN4FegDKARWgmmG3bNjnkXkGxogXAfx5H5nzq",
  "key39": "4ehxVSDDxtBFD3Rj3iWsSN685zJgzykXab4ayjSPLWFVprGPkFCqnjyNsCRj8cfoz1VmqBbdwZ6uqzCrUTjG6EhE",
  "key40": "9ny5JDzWrJgHV7dza77ENsoKSB1ZYfUaHCWiHwA1b3ceyMikdcit77r5si9beS9H5DQcBBs3dwgXirBALJPZJ3h",
  "key41": "3FteNedCAcV2QVDxojAJNwPJi3rjaoXJ4v7mgoNVDkwMqq2FfonFoSWi4rCyGRBgTtQE45PHwxVJtyo8H3VEUcG9",
  "key42": "5xtq8ewAmSnhdWnWGhQM2LGWW7cD8k1F8vetzJFPgM4yUpZzsLn5BShKQ6G45wb5qRoRGnyk1yHEtT62vx3SrG9Q",
  "key43": "YyNsHc9mUxYVXY9RDyjvfTAXSqm7J7PcBPUsdnA4U7KEEjacF4pRim3uH1F5mW2EV3oNZcSYvwFgsYbcnn76QQP",
  "key44": "4dbnV57PwLNuhUaTh5p3KTDgYyaeyBN1nmJgVqwVQ4u4X3nR9Ka88jFZuiAWueZvjn6rVkz1LJMV2cZcjZypoMjm",
  "key45": "4ithYV6kY1UuwpeCCbwBPJFMxJrnKyDqux6B8yQPy4t7hzxuL8EVEDtzXZYWyCR5zhi86Kkk1qhnKTuKPiVZLbPW",
  "key46": "5sPkq7SWf7BHhKGwZGtBkYNZezm21wJzBoBpjkDxwJeUHywedoxb2ffPDTrwzwWj2mNXWiYhjFMSEpQDnw7gMRbW",
  "key47": "4MK9uDVjCephs2fLuDTM8uLVP7mnjNE9438Go8zb5Jwt3tJnhtaZTAeXj1b61JNMSBCTHZsd3KYNPANeLaSDDHan"
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
