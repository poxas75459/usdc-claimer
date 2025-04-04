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
    "2rjStmNCPYNQCCMbAwqccxM5SzN4rWGNHks51pHCmcdA2C5Qus7Z77TU6pezMdWJMZhayxkd5bZ1aophSbuGEi5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2br6PdpMgJpXmGTW2UHBnz9viVQfEN64Zg5JQkvLaUykTHZCbhsYwXkbCpDF6Sc95X4DtwgkhhuRCdTKb8GcFV4d",
  "key1": "2NE7htK7bmksCsgNidSLNAiWhm1XPd6C3UBZ7D5AZVoGDkk3btn43cQiu9pXSScmkYMicc2RV8Rjes8yrK9CbJ5y",
  "key2": "41ivA6crhYN22MFjozZ6rMyjYJ7stHpjhPBXdGGzxDPEeD3g22Rs9wsFP1UEwFwnHz3EiMqkWrKKUTyA58WXUdyg",
  "key3": "625zBp6XHSykTtftaNdTf8VdGfNMwyLMP48e4tvqWJYjhRdEV3Kd89yNLTqN3ZJZX38LGqH9HGqjA4KEwEupwtP3",
  "key4": "59DgBtorTVYSVhktpfJ2yFLA2r1aUFWG2aMjNFt5uyU8q6SH94cgywuas7vzfMht8wk1zmkNcGxY5Xzyv7vpSGoC",
  "key5": "5mvfUiR9XvznugjQx9tbkYUTKFbzBLsQBypTrCX6itAUQTJj5uZGJEE4yuUmJyjspLQMyAEMoreoqrfWcrLj3nth",
  "key6": "21pjZZFZin3Q7DTUM4rfNpbRyaiqvP4XtV3WXsPEY1DzZM2Tyxref5hy96iDY2Jm2MXWmzS8XCpg1h4QBLeStU7b",
  "key7": "41xm9RoCXeYTvA1yKLntqhPiNjiYyhv3U3GczHsox8NVKRSyrZibjy1XVpXSxxz8xmHCBqsfKTUeRnxBtvcEonjf",
  "key8": "4QNpwPaZeZdLjAyuPraJwTnWfkbBjdZzJnMdWyfUAZJbFP1Kfpuf9r5Z8GyxwuMevPaGg9XgRSLAQ3mzag8Edydk",
  "key9": "32jyrwP61y6ku6ZV8qtDaym8TSog8348a5ZJmDQ6593E4gPtvFAmnUbcsoAGxsjNFYJSfLAecHpygEYDXa8kLAdC",
  "key10": "4ezBfBRAg5T9twJ76gu4V4yz9UbABAu3eXpRqbetxy4Y2DyacLcfycYTys1oqQPUEWjdqQjZ4R3eZxyuBKjxFxNi",
  "key11": "2quBapLsGMHfDVzcLxr9H7qYDn4cb3HM227QJ1cFgAfKHWFXSwytES1u3fuBhNJQDK1kyUBwq3WBnVFsGw59LsFw",
  "key12": "3U2faeGoG1vt5whDAfwfXYm2o4eMEkZo1Ku7Jrgx6pEF7QaK9d5ixSCkVX4Nu59ED6T8hLWf7xQUBJYkL7czahwB",
  "key13": "2xWv84tBxoYF24WXspwskJF7tA4j15ncJidndov6aMcRMiodUNC5zrXViLS3wxSVFP9khVWwpMho8LF2CEC82rk4",
  "key14": "61fYLnesZLa6KsSg8QmMsxzNky3gXm87WYHCXSdqUVbvE9voUnrVrMcLLLM6kYXR1rH13dDt5SRoBVxMrVshZuJy",
  "key15": "4zr1mU62zmwR9D9UUtzT8JqoVR2KNCMgLN3wgZiDw3CVSE1HdcHDpi9ENxzYn51362YcJRYELYwc3MDvr6aspeZb",
  "key16": "U7gtoo3GqRswQaiS31ouFx4bfa2Qo4sGH8kosLRzk53Bnpb5dVhfqGMtE53TwQ5oX933g8o8idUKugrt9tyfkob",
  "key17": "3ZxLRc7EubHYpFSu95ufZV9fSuB85FmN3VuDPeauMTsdTAmbyZmHkmyq4uah2Ns9cb7GyrgFNFxche3vZ9k8Juf2",
  "key18": "3ZDPSGJupNoxeLTfAkqjVbDU4AmQj74wKv4ESnTdWaZeq6PXzFHfwgQwBCYnBi5mXtUwJy3NGyDSbbCrYKem8ijX",
  "key19": "3nhyAJAP1edy1rD7CHb4nCNyPbEpMKubWbeVhEWbD7mKsv3eFWoyKx4sfBA4FFazCoo8yEDUC2sEbUTeJzfSFNrC",
  "key20": "43STYRcqPQivrS5AnRzJKq5EaHhGfRu3kKfNdm6Qdu5wHrU1esn87ywSndtRyiTtsMoZhZRUzdFdFGLkoGteLDAT",
  "key21": "3nRsPv5bpjM5MS7DNigCSP9ZXubaszJaKdEjYxSF7p5SM4HKDptWsxVaarR1oSFhpSBYX8sUXXjzqhoJ2UGenoaL",
  "key22": "WBv3ub78zWsB34qdqxCEpBihKnTn549W9aGo5n9Uh1gP1SaNY1Y43cZitoRyZsMzpW9r4dq2JH1g244gq7VG98L",
  "key23": "kdAapCwTGurMj6CWK1qf8TozMhrXdtFrcEkxxfxbwceLkfn5ciBGaW29sXQnBs2DzVkYKYaA6c39dtqpX5hzevY",
  "key24": "32AGSJaG6bKedKK4J5JXuBxnyBWgdj4tkcwxsmLmWwyKCQx5uXeq3ZC1EERZpSj7VpYeDUnXLYsHezLWdsv38FmV",
  "key25": "5JD8qCqZ1Tx5U5xVqeiVjWAN1YqNFp8rbqbg5LoWNmkDuXNVboWDL2U6vRR3EVDwMDzHfjeMsHpWgDbScHcJxbK1",
  "key26": "5xH1HMkvHqDezUy1VbFFut9niK82FnRiJGNMeqU44AkxGgXDDUUsPicnifBqkMbZk4WfXHNS1FrJoF2a9qomRkK2",
  "key27": "27NbejU9ix6pfnjvq2zpmQ87LFyrdLteL73N1xxEASnQ78DGKVenkGoB6BJZgNgo4HDLERvriKjTdSPXchHxGP1w",
  "key28": "5pj2F76bZJNCDgdN5Prd18XsZt2aCwcLbvYn9S4vU6cyLb47CFndLaR1mvGWKdgYiVaYN85zwFvzDPVY8cSxserQ",
  "key29": "4UqwLSyxUA6pfsVHsC8jhQXMdE5sa7tG3RwV1ASLh3MT5yBXjbQFqbSLFACGdV8hce5ijWoFQyHpt8r1hXYVWNQm",
  "key30": "2a2zjhzoDoHa7s1nhmxyma2FvGmKibbs4Jriyd8VMttG1uvyToVfymXeEk7t9jc9nYvGJe5ATmVPKRMCgYrN9i1x"
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
