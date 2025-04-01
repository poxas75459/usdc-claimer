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
    "3BaS3pwcsm4nzi9dqCXUGG8K9WWvmzM63JvimLFj29kxHQ49HK2duXQAJcMa4RYSKgWrbLy5qVrPLQvE9o4BNYEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbLtPRx6zjUEwYpRmAqBuGTqG9wHPkaiuphygbmh77ZYwxcUz2bPcdyfRv26EaTqZYCuZ7g9AjZjT1MG5T2cfRB",
  "key1": "JNdkVZVqT3TUbyUvBY8KxWeQYcvnEW643g4rqk4Dbii81SH277voh5U3NnUzP7aqrAb4DFBHixpjRx6UkDzsDyp",
  "key2": "5BtqeEVLZMg1zW57pFs71zkkBSGToAdZ3E6D9XRGSnzkRU8AqEn1Ut2bBRrSD7n4S5YvbiDB3jf4Y6EZ8JHqb9F3",
  "key3": "2m47BBpsagV6zsrVhsuopG4yPd5cF8Z175Af5xgCufK2ErxJ3RBMZLo9HLjrmnbeJ7H5wNwu8D76dCvRpxDTUpvk",
  "key4": "2jdgq3k7zJxeeaAWwN4bZ57kpssitFysQk7Fa8hViMaTXf2TNfQGpdvESuJzr6oeR8dzaEyVbfBvAw7RkwQUqCbf",
  "key5": "66F6YF7TwhkQdQ3bxPfiHuXKD9okgo2Ed8zu1mBjftB2dhzagmS32txzXaqBwpZHxSfMzjEdhXAe3kBUyQNTTPwG",
  "key6": "jubPAKM9krYLAXLcCyAgCi1RAtqEsLQmy7kjhaSkkmJFwwYa75gry9MuyoQnNfYWGACrNzzan76R47HWqXZwJxL",
  "key7": "2KxmKoYhN9YVYbifKhgFKwoZhcq642WmEMgyt63tf2NKu8hWACYTQXYXhnY4ktTETis1ebnsvecdL5gtR32yG2mp",
  "key8": "tzhoRkw5CPeNqkxtkJ1xmsPhn7NMJJ6xvtwjG1XM7nDjNYFW2pTnQLL1Gs8Yy7BsGSohX5bFcV9azEWNRZpJCGh",
  "key9": "3QyPBnhySqB1U3r5nuHJfu8bxu8ybALAMPBaN29euC4w2ox9HoJbLowKvhAxzqNbtiVVVCw8CeAbghJxuP7SkT7n",
  "key10": "5inxWdd8m1kgGY6bRjh37imRg3urJn7rhDMnKRj7DLt1YmzUkKHc2Z5DgT7F9QPiG4BKvgZns1N8ckxQdDWoZ5r2",
  "key11": "5orWyEs4EL6AXT6VYXNahhKXe7wh1t197PEGsKLnrfHQKrUPJEDZXkgZCKuzEb9ahZdPpSxaA1FtM3pPnFUnodZj",
  "key12": "2gPHjgMeWcTb8g3MWg9JMJwK2wcNbTaK7d7ZJPks1eggw1nqctnzKQjcJZVAziiyf49mvbNPFmZNcYJf1MSZpdc7",
  "key13": "3y5Pb6MfZQghR9NFy5D9WTMKnqjdRqs8Gd8s4rK9c9dmx69pTc7DkaWMgvqkBuNKqF2KqswCo38c2rGH8rwCsag2",
  "key14": "5h2ATjuVbtwrnCqzRQrWP4vsseZT3dVqpRj8uF8SumVGbvAow3kAm1UNrMrXFNSfLa25iWziKd1cFr7S8vNYibre",
  "key15": "3K19piozTa3ZJBu9gizvoHNyyw7Kme76wvq4U83uGf3jtbi1mebshYxgj65jS8YjhchhF2a77uxc1q8LMFwva2r6",
  "key16": "45MVqHKtSUqv1sXmDUdw7MyffPLuQUwnBqNVd82bv3UKwCAEPZuNgR3FhhfMxiHmPGCh7w3ChB1sXw8ZCnMX7QzW",
  "key17": "4JdhxqSZdYpjyPAn7M1djxtbqCxyk1ayUVnBwCJfoebM5MD987ENZLVC1GFh4c9RkTHWXVuEbB73dWNyvt4GwRzt",
  "key18": "62SDwizuMktWLkkwAKQvGjww7C3SDTpnQFj1uRJekqvTUfYk4zgL1ZDRssa4Qps3gn29YSMTNytKG9tsgpu8Y9iS",
  "key19": "66BWixmKgRQLRMU7fpvDdZ8BncSfyqp8p2o9hzAiE8NZpvxuzftLsuEvrVXXydK56jAUHsci2bjCZ8vH92QrvJ3p",
  "key20": "3sQLuP7RqyxhFb9mdBLz2ok1Lo67qR4mvMjgLMMezN2g9XZdqa29MFacMcmWDRPjjauUkNsZ9ZTm4KKewa5LQdgd",
  "key21": "3fxQ5RJUBhyioou4sPScr8o12hSPiwoPLuX54RhrDXK5uc9SESY4aN8kyQrXXGbA2epMTGqRZZs6iinCPsjMB92j",
  "key22": "3yY8R8RfCocHEP5zoj51CcQ6usSyvypW6uxe2R2TSkyW26raMLrVheCszT3YNKwEZpu7poJr6dnDcq5QVcJFQAhq",
  "key23": "2iGRt1MRGsXX5BW6kpCz6gV4rssx3P1H7UQVi1F6DyuVRshrXpjDrqdtSeveLNpxKe3c7pkmg7T3mmNkAUGHACjJ",
  "key24": "BigTEKSPuPnJyHY78Y7xbyfTP37kaAL2kx7c7x6SMtXS4maf6Tggvg7jqcRxC8Tjap3FMz8AzkeFfEX6a6qn3Vt",
  "key25": "4XvBVLnNkejQ45mzwtNLnMh2nfwEQ9rGDduqhn9UKFU7s5F4tvMsi8kQTJuDS3ad4Z4Aq73J9T3LKNXL1MhgL2B",
  "key26": "5pkXWLo5eN87Tec8PTnx9wFcbJJceEKTVtE3D4cJZWyzYHiVPYjxtfkAjfJhX73opKmcAdekjgLT9ojJJDJTsSMV",
  "key27": "4aiZfXy8zB7SeXZ962XG5B69sS3BXpno4CGFX3WxMzM9jWUbKW8bjJXbLVmgN6pJjGeHm5JUvQhtBj8sdifK7vuQ",
  "key28": "33BAWLyQz5PPoA8vunsfxt4teKSpg13HtazHrpV8mXyU2SUAEw8XrSxW4URVuBjuVG4yXqARQFLEdZ7WVfaLJzQ9",
  "key29": "s1A6bKy6695UZ4fzSnUjdMRGgPC7AEqfuzBqxPyxWcqP8z7T2C3qXvtyCWdqspqHvc92zjJXzBNhZqf4dwEwzEM",
  "key30": "4xqDRjaPpjF6xnvhJVWHr6ajWPV2mSZLCAjv8FiHfYyVM2Cse9EmAGaB1H8W5WuEpnstvi3oWdfHvEwFByoJ1C7x",
  "key31": "2Gc4dQjkpRusJCja4HyRuJi9z3rTDTkXLoWEQENsi6gaAuxmnxA5KsKirJJmRtq4ecBKv2XwQJvwbpzjhBXu8Yv5",
  "key32": "uRB7jMxR9hkK9t6kkg5VQkVLrgW8EJmmtrBEoKQ72AiUKSsNzdr2z29w5qZLiv4vrQ4EsH8UFxCpkvkWpjS2jYe",
  "key33": "BsTYdBvyWueHWPfzDSijtqMLWZKuPt2hjkK7WP8HwoJHHbz6DBSRXm7ftYtW6YcZb6gRxf3JR5HNYcJu1zb6mkN",
  "key34": "3GASWgYviahGVkDjTD1E2nWysoLUytZQFuovB1ppgdA15hEZDuotR1G635DGuzEShfdmpoDgMFAXRzzEpKHb2QzN",
  "key35": "4yuPtviQ5ByMGaFit4zJhXobdmk8CdDycUcbZidasZc6un5qNnQ5BEMEqM6fSfnxmZDLpfQEuKc4wNgeu2JvMpY4",
  "key36": "5wkBdNmftYw46eYcQ7rVjA7M8nodNAruLowXqV51sfytSKSiQfjPgnfxEraSxoYQYN4U4o2UzPta3y5aetrrtfmY",
  "key37": "Pi7uccqV4gGXR92MEoLhE8Mssc2PVf6FKSGC2cgjMRzshX1gf5SqGSesskQcihLidi6XbdSXJwyiDYfXxCQT1V5",
  "key38": "3REPo1kFqP9t39e9WThjzXjXV4s8TzXQXLyCqWNncRcrZGBQ63iJavQBVELQcpVzjMEMkJ8rwQgFBXxUCtU49jC",
  "key39": "5eaUXPH4GazzCjtHC99DaFivzqKbnqe1GjbC7agDTvv5KPKPRn8Vyh61JWfg2WGg2d5c6pfHYp2YhU8chYEMmqqV",
  "key40": "BdfDmebdhNWnjK9dkLyAgn2PCnKLQHXZTsPPf8QYjaVXWcAK9Us6FKtMaGpqsgMUxmRi2ZiZuyJdNQFTqYKSxdK",
  "key41": "46spzMDquLMaSqgJ1iRHHa6ydVrTGfGJj3RUpV8AHaYdm8hGubMTgAYFdVPswcQhbAds86ZZmJ887VHLo8Uug9Z1",
  "key42": "4WcUUrqzmjKuXPknTekbUay4G77yBhR9EhqcXWDNUSKwyzM67taxbnut2h8Nh1aNJK18k6PvwgvWwKDYyAbrTqKg",
  "key43": "5Lh6h4Jpk1gLugeJDWt4BFSqYJEhdHr2bT66evuBsDrKgmUSHrhdD2hpYnNdSrUnNsd92bbZAeudrsRZZpifbJzG",
  "key44": "28xq2v2WbxF4kScYqbChWpftzvVTt7yVSbcfEyN1gB9GA5NyUSBzuDXsDtbEh9mXqthMNx8zHpK1vxwvsgs8gZFm"
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
