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
    "4JB9bCUCEyG6CmVTG5e7K6SssiCQqNpkqGBLVFzcTsczJML7z5sAwxwxw1xEDtRy57iKXshy2C8qszAezYuCFTYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSCQLXxExhsB84torCeqFBJbhfLLtFjPtufq47Dbw7hFYUeJ4s1ovXtHcLpGsKWqKQEaM4znivDcSf8Jt6aCFNd",
  "key1": "2CKDUtb9dEsHbrDGGtdxz2eqbMGXPgnDNHP5un9Kc3pdFWtEpaVKLNtqsFZmXpPg1FKcY8qGarfHscHQsmcyVuZA",
  "key2": "2Qdqsn58Kf8VEWZaaTdtZCyvtHUrKUoktaE3KRwZfbWT2ZjuV7cv1irACGpBbrfppJ8dDYzh8EtMApEuNBzu6DgN",
  "key3": "5sDsNmeUs2HvEVPAV5W1QcWTP3iU12m2u5JTTinStLm6fPpkhw5SzYb1KqvfUTQyqdR9Z9VXEGR22vnovWwh8Rdf",
  "key4": "51Mk2BrmM8E2JrNgx13UTnv2HvR7ueJB6a4s5Sfnt6viLJaYgp9o3E8drJwcHHkwXfDcMxpyZZeHMG6f5QWrdMkV",
  "key5": "4HwrrbewUsDBjFjheorSaHC4rmvekere21Wx1veyMBbpRcextsPbfATRUxnRxhg15THbc1JGXmmGbr9ExjPvNfxk",
  "key6": "5Y3EJavecSMNGtwsMd49nicsbqe2HvXZWQQ1rUgEN3T6mZBz93rXjG32RnaYenh8cSkzSMYXowQtHbR7xT5tu4vA",
  "key7": "5rQxziAHQbanEsabaeFsJhEQKP9fbVk5mLnAHi3uDAo6WEG1pnJTxs6ZoLhLFZgNqUk8GHEzQpUWAXUmoQRnsWrU",
  "key8": "2jbR53GCDv3gigZHksRgdWaGLx9Y5zSa4oUqUHC65KJuqLhMbckfh9KBJqyqbDv99NzqCWidCiYixqaDH7BUpvu7",
  "key9": "4YZWTLCftw6MswHY41VEvhtFk9rP3hPQEc7wA7Eyff1ombi86s2LT1rzLrosqh4o7HDur8Lz6XAqVt8XRXa682Lk",
  "key10": "3soYp2ktKT55B5Sxtnj3H4GuDn9Q2q9SL2VvZSYD7jkrjR1jcpYioKsFZUiL6iZBh19AcYsnn6LHtnAGucEQswJn",
  "key11": "4WoyNZXguvc8W3zjHRh6FcgBaREz3bX5KqbeYDLzhZQSSeicyLAshUHCSeaJZeRAYEzpnW73Pz4xpsJemH9ajcq8",
  "key12": "5W9z8VRT2e63VUxRPsr7qbFsFDVnmmxnHhggkLN91KDLTCcasghgmTnxA16RtdDRtj1Jtg2bTottHsznZ53drAcd",
  "key13": "YjRexWoFqwyf1ntmK67LDtwptzYaDjXbk81Uqguax3y9LxF3fN1TdxQKqDwmptQDYTHedqB5YNqdJzKF4E4cFgQ",
  "key14": "3pyVuUanWMvrPyCtZKWSJvcAA4zTVyFgMKBQu4fsYY8g8UZ172Ezg5abTQEkjYxScpnN45Bo5cAcQwrEqxCi7ea8",
  "key15": "yr2nq9TmR2sMQaLxRP6zhqox3GpHAdS114iNrhkHngUPukZxeN7NEXgmBEnLyJqVn45AsU7qE4rP7N2nKp1RJsp",
  "key16": "4YaBTUMhutqpg4GC51g489hLpGVCJhSD9wrA3emcu9YpbLYoDA7S6Kn4N2irZonWB2NGGoxhDcc8D4RWauAsvUSx",
  "key17": "5VK9YSqEdvzzB5PAry3f8MEUAktqmvfW9eYVmv2YVdTPC1AmDUgLKemhVgRrpSTgYNrPf8aYecdvodjpRSym4BfE",
  "key18": "JzAVBnhzexHAiksSgMNqXEmPYGVyJuSsXAyakkjBjJz2z39qM27yxrmG23qsWJdFYPrz4EaEeMrnWHfum98AYLs",
  "key19": "52kPKFukDFzA6EQWwXGeqNuFv3dH9q7gduABfaH8By6PXcJviKpxezAsBXQsFcvfhSxSfc53Lrqz8V51kAskRuEP",
  "key20": "4ptp2vHzfudJbRW4sqRJmS9h1ArHYsVNVxdWPYXFzKU6zQjZXY7uyaWmZ7qh6oeRyDrmUAPDorGEp6uyypxh2FVE",
  "key21": "5DGTvJMQBKiGMxBTN8BkANnqb2x9spsnk3tQALHq1HwRYKG94eLQmc1cyEKQVecP9rMAk9kzW4qamLbpC1VXpMDU",
  "key22": "px93NXz27uG3aFQKetX29m6pDM3F3aM6sdqCej5HKmt55Lk5hFSBz2B124p6XXJXWUqTQ7SkdqQ4tMpwFYEsxo7",
  "key23": "2Es85md2DqD6CP4SjBpUr3aVZD2k6YMmyV1jJmV1XnUx98xutDcEKQvPkraaREeaWzFK19z71vaSqAPUgPrdeUUq",
  "key24": "4BWVNwxeuuoUrbhq8bwvh3MTyU4BGcn2BQrsYhtfyZgf1RdufLmWPGXNZjdMWbt8Q43SZSJwHaRzBLZjGUbCXQR4",
  "key25": "ycHoDYQNfByYR7QKjKA5nSCobWPvGpVKJ7d1XFZMFJmhNTyu71DdFi72n79xbEAjn1YU5BQMEBArfD3Pxqn6zbg",
  "key26": "3VQS7e9RDBZAEDJ9AHb2F8x8tG6BxTxnLpcGvyNfkhj94jNm7QBwQ6fobvnTFRfNVAGBZWBtE4wQoD4aRrGfv6j5",
  "key27": "3bd5MrL9LH6Lppu9ijRqtLLRpYDjrTTNuHDkNPMHKbK7HYb5AyewkoEKAwsHCJ5fboSxwaDwGvjGFkB3vcFNwpsE",
  "key28": "3uBPbwjrmMVLbpr3Af8CBR5qySzZFftvxnib9duA6LPUJqR2uKy3TyhJKCb5iRjxvDs6MYp8dpKiULVCuc6856F1",
  "key29": "3VUqRiJHQxzrgj6gnis5jZ58TRtbZCMvusY6BXVmMi8Nb3sTCGhpZFjMDexzmV6HfD7E2Zp2nW9SonaxMq4XxnTj",
  "key30": "2jnvVBDSh9m38SZrM1vW5Ku6zmQUQn4NyQaKaAvc1VozRiHf9nncDwD6ffWdBqmNCAsiJ7xd4kCZXXe6Qx1G1bFM",
  "key31": "2H4HTKBukSqS59AR5Gch75G3BJC4tePHmtJmY62Vd6h1KshsH5gcyamH9QFm1wiLC32CPA2hnHSwvsWQtywZkV62",
  "key32": "3Z2Wh5D61AsoUBL5k6TNWMUfjF9DcKgQdYFAi9izAQ3Kns6GuPyMkfb8NitQTZvMzeMdC762LM2YidntyYJ8XdmY",
  "key33": "2SKGDLWPuWhdBY44wFmtKCcDX6SiXyfEnionp7f8mDsK3666FZSMTjqGc9WFoQQGvqemBEftYZDKq34QfSMc8hz4",
  "key34": "bBDmrtyU4dDy316WdtZfMTJidRx95vAKDhH5ruvk64iK18JCYZ3cgRXSZxoY1orDBuwCDjoiATpt4bP7TfPKLJJ",
  "key35": "xoVP5aPpBzYXQ2V4zq6dHB1RKWYbauf5tkR6GYmGSQPCxthanDqhjuM12jPP5u13NdEKSYV3zE2W4ZBV1nGwVi3",
  "key36": "48qArxDtEQR4BuVMw8aHy1oGJVjcMU7LLdxf5QHHt6dyCfdC6jhg7iuBWWHp2ZeNNYvEtyCD5KGzxYELHdNrLjLA",
  "key37": "2g3PkCyyvrgxoJPiw18iAWYmPoK169MFRdAKtQHpp8PHiJBk1s2Lwu4Khwa33r5e4rEAM48iazSsFtHCu8sXRB9S",
  "key38": "3uhHyodRbNTEdpE6qDmnPTqN1Xk9xmVF58F9hk5sB6wF4tGfmy61uhN5aFUY1wPi1dYKiPoCD8MaRqVzPnArQaTx",
  "key39": "5QXr5QAHBobPFPvAXs7JHLeJSMVRMSpj2AvkyKyXraxAvSeXbAaFRgDWHN9tSGQHB9gDUCjVVKpnrVAb9uenLvWB",
  "key40": "55fvjEmTPbaTYdj3Lsa9DCXid1fQ4ZHqNJJK4ZGXTg4DDqAGmZP8iaK6Xg6QXR9EvzLumfijr29FszXFeZEUpb2j",
  "key41": "2gKwtmjGAeedNqUxoLinW1AYu47EvAZ3TfYSB5FhVqZgYpLv8VF6GXfanJUSbPx5BsqWuaXXkTGnSsAvCK8FJoNm",
  "key42": "5hvauC6wFQbizvQN7B5K18v29WGdpkcWwzve6hqwPf6jLnene8bKDouDY6Exx2TPpjKb6D622QKnPTtbj8wJJRs1",
  "key43": "5KuYHYaHnbhpuBbfV7F2jZiRWZNT3poLoyG1FjB51vkL2VVEZjqErBpTVYFjtmWfrDzQz4XXxzwP6vJE932NqTpu",
  "key44": "kYpMYR4Cc9xHj8D2RxvU3oZYbh1v7WHVtDrRWPWtCQbr9RDDn22hnBU5V7sTGnXYTGnfB6ZQE3YxV1f8Kp39Aeq",
  "key45": "5drULPukWnj2VGEvmr24v5z57AwWJFUHpNpGd33p7B7X1hsx6gqca6wye9QDdYrQYH1YaN7F941vGZu8jBANwyUB"
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
