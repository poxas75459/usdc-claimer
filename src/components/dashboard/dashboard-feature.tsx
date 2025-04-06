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
    "4gNYGE72jrtvG3mSDTe7MLVkka5kdYSEmH6fYTuaJiKL8a9AGcdeNp8xrRwnv2G4NR3Fnq3h4jkPTT9w85Aphid9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JrccMbVdvteYrCphSLenRdXNg9cbKaJCVw5m4YDYb2KzKcZNEwTF3RUbdKmbFQrv2tK2hvpBojHqNxDLWFYi1cY",
  "key1": "48WKXqumXcm3bVRQNYJRSJDvrjUYJvTETwsEbP7Scykj9ZkUCdj4aFMMKBkMBhgW4QPdjf2d9XdqJdHiC2s98D9n",
  "key2": "2q85rRP3pijRKvgZZWgyN8PRSaYQUphqrsfay7gaShLDBfkZbvRGffUiF89TqPKkvMm5LQw7L6qTTVyLHLYXNFsg",
  "key3": "k8VorY6VnqJsA1QUuJYcBHqabuLvXb7pAsVUvDxkzHeQb1oivLA8PCoxqh7nP4AKgAAzWzBAJEtVmuK3DZCZG1u",
  "key4": "22hUCg4EkLfSP7cfjJiaTSyhVVEjPjL24SigN6f16hi6A1KuXxmdiAco7TqB4571xpxyjV2NxTtXW4Pws6LVUMom",
  "key5": "3ucKip79P2sJBoB5Zmxm41vKE4s4WvAkSpSn46jDLBGD3mmVtumc8UFgtrsepcCUvUU2KFN1TPHH1WX1kHhSyHYo",
  "key6": "5t55JdYBASzH6G8RyxmpSdwYF4p57EoGCXCkep9N482ZFMy5ovLGByuDYpS3ExfEnsg92gBsAu8t1WTtJ91TNaCS",
  "key7": "tQEq3kRbUnmJTGgd4oV2MtcTS668ZURHLTkJSN8Pko3WYM8zNVoLjUmi1YBMzinRkHLw9f2yYuY85XqebuCnhba",
  "key8": "4nHh6CUABrLm58hAhXyEE5R7EFJxqKw4A9pqkVrYSkPQY83yzZa3LbWeA7SEknWKD6FxNeBWi5zKCnGkiGFH6Lri",
  "key9": "Tso8CpCw5pmmgELgYu5Utd7Ksa7QRfzfbzMqqCKfiEmHWoCV9QyzmZrHwLKjQrTHS2tPDEcSRjyQKa1LsvUuY7d",
  "key10": "NKmymFjU8NhVX9J3kptcm4QzUMKFnuMt8oKcEX6HcaQmbHyVx48L3nwVftDdFwUK89MpXuuoDzhZtRjZJVoxYnv",
  "key11": "5KrtsVL9apgJ1VBbTHBikbx49SKjFvmsjk4Ufnfbhx1vvTCVUptNcKgddRQCwtgFcAEag6i1XCNEB4jAxf39bSvS",
  "key12": "2Ycf59vFBtMPwcLapXJZPdJCXVTqiBLaUJB4CXADX53RUtBtrgw7VWfTmzz9zNqab1vx9R1ySBWRofkxg7q7vNdj",
  "key13": "27MHExLjZSbeATU4BygtAFyMMtV5QxJKuh1DS7iecQbd1MmFTZ6z5cGyfaQy6BApsJtuKkNCFzsFf8ypceLHEFZW",
  "key14": "5Y6gBAjoqDs1aB3QXE8NrDBb5zZopBKejMKeirKGzrnXfkGsoiVS9KdJMk73qg2k2T1PYqA1trSYkTaipvbfaTdv",
  "key15": "2eebhDEecCCzNwDfPmdn9ffLjv6yHsA6SzEVrHkxPwH3pmwKsze41iCEaTJuFA1y9rcpzRASysCvyAR6vpzxXh1s",
  "key16": "5DbSa6QAbv8RbHgVDCnP2v4iLoXQL6wVkqdwxeEiM5wUDukBARTkqQE9FRndSkzUHUwjZEt1rwxpxxrdKULrc2xg",
  "key17": "354ud1sPQuteAPpfNzubtxmAUUBc9SnztX4q5PFHUVr2t3LMEK3M5X6sYdnpwuGSbuhTPsNrKKkAFkufgLKfPGLP",
  "key18": "W5ghP3ohxXGgMwAmAbSGce6hXcrdr7K4EHvJPW5Naa9BWb8Ptzs7hNf6Q6DAVspWRgMQRjna5DNojXJVXf2u5E8",
  "key19": "3Z6jT8osebsP6YJXS2sbf22YbHzDKswUWowi58DDKLrBXieVyzZ6HgVhcrf5XR4DemXtcNmrFtZEgVRUtnHrt6QU",
  "key20": "26FrtSXjG4RNnNDgamJSiWYcjDvtyHSayQiY75Xe7QAtAhxST1tVJRfZ7vs1RxFc6VSxuZ31ZByb8NEaf7HGjCWe",
  "key21": "3VgQFL2AMou3pC6Pv86QBReZD5mXBYi5Zjbvi7o6EyszFMRovJsbEbSrd5LWkEH4g9rzRW5DKciFVbNKcD4Eu62C",
  "key22": "TMjaTvnQRjMbH4PYye5ac8ciRNavozQhbfd563XCuMoa9rCkAcktR9pxLb1uTNsCJhehedRJwHWxFXkcCwZEiZL",
  "key23": "449PLXXEwGc7MBr8FFUuaAW86MP9KA3TEuTXLGFJNZNwaP711oFdH5pLC1i7LrczShGjw6LDnKnEPgZRPr6sEoeW",
  "key24": "2dyvUfoFfe5uacAuKc78RC27kRR29tjnjtQQVyYtVC5sNzqMkTLsjhutmuNbnx1FijK33qMUbaKSjxARzoxBPz6R",
  "key25": "4ATUFQTXWYEVG1nQTS2gcubDBYfgGm11XrtJCiH94wPRPWQLLTXRmmphfYLj6ub9rT3Fbeur3mgq48WarJmxpCnY",
  "key26": "4pagsXB8qWgJQAbWt5rbasNDUWxoyAM5vJpQJ4TMoQQPQey7XULZBpRHQHNDriSeTncKqRVykxKmbiX1yHsLGfir",
  "key27": "3S1GYKc1vzQAPhvGGcRkLrjUeB28VsaMsiwYVeTm3QNwcS8o7eC99ijN2MEzLUXydRuiMuGFfZCMvkNCuXEyWtW6",
  "key28": "2My7qGpD2xChwqiFKZvVtSkiVXEu9NN6tcgsCJjwwdpesBXpFrCrcGF7iQutjYSGUx3keB5nrjqzgQVLEKXX89jR"
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
