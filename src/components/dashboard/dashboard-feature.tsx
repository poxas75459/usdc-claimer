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
    "4oxVDJVzLawKPX3mHyywP6BnvPFAJmZPmC49LieeDqk2vH1nMvvJEnMcJtvkbKiud6KVPBwWJ8nvnLkoX8CFw4B4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rv5mXjRAzWTnNNLAfmDPTa2iRCHHht2iUouVTBYiAM1ye81z6xPLsE5ChSyGwB13ceRGdko5BWFcR9kWCyUraF",
  "key1": "denGh8bgWFpB88b569jCQsUPe8Y2FjykkimWDQQDMWvrcNTXtEScGteJf7mPpBfctqyibTvEr69QCDwopn8tLA5",
  "key2": "qsfyUv3Lr4sPLUuLe9HmNqYb99Yq4ftuWNhZ7mP3mtYx4a9MyUNe6ACkrzxVYsbgmy123UABN3o2khpQgayscVn",
  "key3": "33CuQzxM28dmJUm8oY6QYteQE7qwNqpzmGAkPZ3zsg3BU8RMGJF3KLqhgGqiuhXtG1gDgGT13ESMaCNpZJi8LQ7v",
  "key4": "3SfN9KKwwHBYRbTy4g5i9HZPbLi7iSE3n9dpzLajhY9nZAmakyu2hGQmCK1uAiNXwXUwgfYWp7kNp9mhWG3cvV9U",
  "key5": "3sT6fQamJd5NBYcBpF4W4CmMjjHRtmFvb4nz8M6pRRAE4pb2279VmTsJcQVoeazEa5gCtUDQLvBD7SpG8TBG6SVS",
  "key6": "3orcx8r9Xi4ZAVTKc6Rx6RE5pQsRi2P1heezDSdAfpKAXu7fm1qsmjhC7zks32Xo2fFt2cqy4T4fUYm1iKZdhV1m",
  "key7": "2EHER1g7cNrT1BgiYePTiv8jyZH6uhDwMH2EQ3HuhSCvNsQegkUEu5Gs3vW6iCoMredz2XxxbDbFCQPTGVNRF7ju",
  "key8": "2Lz5rqYNjedphb8KBCFvHWkS3ffKTBUr6MvQ4R5QaWe6xN9mkTKZQsMzhJ48ZVz4rFKZwSVgfMMXZm7PyAp7A9vJ",
  "key9": "3tqkQCgH2p1vTrgMR6BqsGVpzESJgA3gxYWzvDjW7QPBgaksKGFtj6A6RZSbYNemQ2g8wXi14oGudDcnmk4xeEuR",
  "key10": "489xsgDU4AZjGLK5HHFuZ1TLqSUbWX9T4s2w8q6q8zc1xHZ3iX7jPgYuXJK6gJJMm8YLiAR1wJ9mfHp4PaAMZFDi",
  "key11": "27Qe795TptnTRTZbahc1REbZWjBbCiosLCAgnVhqfQRxnNwBmkkYHPXCyLnFZqLgJsaUsQkFiUkupabAA67MaQVj",
  "key12": "5avgV4AYz84fk6uWkD43xc8mBwNQNovnVx21zA2fsQ71aYPzZkDxiNg7cEw2DEmjXiXZTrsWND19GeXHjXkk2jzW",
  "key13": "3JbVARFuz2fvR5skyLMqtu6aNqF5tCei43dmoQnNygShvp1QgsXDnK2MJ9MR1R38GrNz3UnryRyv7qY268DprR4o",
  "key14": "3KGyXVLAArstH6zPkGSvmq39N2HxxQG9rRdrHKeir8MQz3892hNtigwg4Rju13ggUxJmPJgmigTFi72vBjgimaLJ",
  "key15": "4Y2AU5YxdrCNKyLNAJASfci4s9tvGDkkSceXN2R3sP5oAd2gCknHGXYrFZPoareNSrnLah66RVKZyMa7UpHNWJ8Z",
  "key16": "396LanP6BSYneGjWYzHojQvw4dYALnL5vCgFaCLwgd2KPe1Wd5d4ZFUdWyYpFsHaY92FeVTTYj1gM9DMhBCKsS4P",
  "key17": "4kdyx7HQXxDUZdetuRpKQfU8i1uNZL1tMsJKqTPpfDNcmf4zPfy88tYx2kVDadX7HN23obTuHP5env4ZZnARsXi6",
  "key18": "mbGwgrXnRT2bHLuo5wTAfXnfyFiWZ8zf3rtB3c3RywuNgNk8W216uzAH5QB7KQoEJCrNQQTVepVLUP2uZCct2s9",
  "key19": "31Q4USirFjd7Sxyz3sdX6Nrw6m6LEDs34vxhrM4jbJ2DvSFFtT8Yzo6kTAZe4mMrBMhuZ1cTZ8RZHkYjTmcjewcn",
  "key20": "57LAP7cSBzZnu9BmmZLiETWjp2tDHxykZBj4cVbroPk89kGsfkbwERbEpMY6YGDSgbCVAWGn2V3rfi9imW8VP4b5",
  "key21": "5HL3kZPhwVugzS9UDpKqtPZarhRZRj3rSvyqXvjxnvB6HB5TmuKEiaCbbJKmvKK3BbZD2WRdUxzYfEbFTRiDRAb8",
  "key22": "5GmHifbZo3DGKqcbVSmDcir9u5AKS5jkiMbQ6Jpgf9gZFamhHoX8RE7kdurtB2e7arMeMjjttAh1eYevJTUjAVEL",
  "key23": "4P37XE35G2YKDNp3WQ93wLDbby37B9mT8NJUPC7rit3jxX6YXVNAqRyvEa8RbBia2c49fTU72z5L3CqrWNdyxGii",
  "key24": "43Pf4cKPy7X9GfMt8adcj1zho3nvL4rZv7oksCqF5NRMrY2a3tyPKLNaqQCxsPPFqYNUBf7Pmmm4RNDWuTgME5d6",
  "key25": "2RZuXfkhRYKbQj4AFfVGLQe4D9ckV7BjCywKcRLJvg5WnX17W2SkWicE21569oyjzcfKSt6DUehszaPdiVZ7NaT3",
  "key26": "2ssAvYYShsf4wGHtwgPe25KTETJ5V8w4CoFtUTLNG6nfqLdce1LJXaNtNK7pUK4RHsPvLHDmkL7pQHTEXLLGxnW7",
  "key27": "65PY3FPirUjcyT3zoyerV9V4qZ7qcyBuyd4RPPBr5k3ohYEmBznydzaKa4BKmqAZ9z7ApisvhyxUnxkH6fWUdBVc",
  "key28": "4G8DVAJihjPEJwujT7oTe8iYAK3vkbmYXDfobxLvjwp77CTgvuMfnkM3bnrncQe4ApEgSiUB7Q5SzScXT87bJXbk",
  "key29": "42bghF9REcA13QM1fTZMArBEURtDdyUZNwN8TFLfBTqw5euKQV6FsLS41FXQTXvLU7WdfiKADTyNCeBRe22HD7L2",
  "key30": "4Ys8bMFnoL4Z8AZfhknBC1C2FSjq8B1F65HkaDC7jti8dJjAd4LrfkTGDQ4hXdibfBtCS3J7WAWHhTsWJ8EqpUiW",
  "key31": "1ky3G1TMCsN1xKJyHfXxpgnxQksupvCwqXC5Pwmqg8ZRFDQrTP61Zv5Tk7RoETQjGzztbHDvTDTq4miSThp9rCe",
  "key32": "2P7jkJ3wFpfQfnDd39FLzKcbmXCZtsCCoChk6s7bYKe4Vwm55Xe5CHs9GqdocyEEE6uDgLowZzaR7UgLLdETFynC",
  "key33": "5E5NWKoLKePU2osvWUeh3HNDFysWh18jj64HFf2yXW2KntvUmYNCxnNHgA6weKSh1wSsn8J2wUxknPGFKSB2fcBg",
  "key34": "5UEErNsuXUXvdUfGVHQqfGfBgpYq4HCP5SxiTCZnv5jYnQ54Bg9Y45Tk3GtHfD8P9xfFCD4mqMYGRPZL8FbMtVeg",
  "key35": "NhkaQbLmdFhYeyiGLMqP4VsARiEvf4KZtLZXictGgPof8s5eMEhX94rovXox9EX4QuM6GRzrRSgbxdPP6xL7SPG",
  "key36": "3fhDWFH9kZ3ck51dtSLVujMx2gthcxgrjBkBxwX8A2RJjj82UdB5KLUKchFB1obxRFtPmWhuhApvPJLJXAKgApY8",
  "key37": "dGUjDznTmFrNSYVLmZW2aqWVjxBQCHbtEKurNkR8HgxKvN8NPRxBRRrybenXUEcSfdsuRLgdWAvqrqJrt9CQKmv",
  "key38": "389ACpRSu3sm9DNRC73XvXkxM46f1X3uNY2kzqxhatPfNVz5XnULYxYbSwbjWEiTop5kPkdWDeLKoGVq9WiAiKXf",
  "key39": "Y6LRGBZQHxGucVRA9dSEoghfZ4jdihEDS9eGLH4awyUWgQNXXZtqQVCt9rBu9m5BKGsoPx16XaUxB4XnWJH2v9g",
  "key40": "4QmfoREfn3MXjk5hcRckn84iTyU4NQNHMLAGSqtQXMJEkxo6nvBt358mhiGLsiurWn9ic88jm633UtRMsuzAKf1V",
  "key41": "2aNfwUb9mQzZwqeRTj6xwN2kamcTjMgFjwixCzJds3SEyAeU4Ss7bYykSxqDHG8Bc2PWVJ6EjzsfF9dF6Bfbdj3L",
  "key42": "qJLK9nqvGvSLAJBhZxnLkmJqm4ELLzK9TztNyCzc84GMAZSjhVLqXohXLZQEbA2VjzvKLxVQprs6fgDkp9TK321",
  "key43": "55WLNFJGEHSdvE3tUrTFGQ3DH6jZFcDw8zHEHMRUXed1NENaQxLotkz9oxwySs5AjjwcGdugwi2DqTT5Wi1yRmta",
  "key44": "5iaCFgmTNXqQRBk1oc4EQnAERJTP2pjNos9ZDgPVwgVA1wDXBqYo4BPG1WDsWgmrf7Xv6jW33LRtphA3gEY21Uc9",
  "key45": "4NGca6CCT7ZuCsT1fVxJSqataxXm7YBfpF3LXuk5j7ugPx7GBV48mj4hP3sV7NUqyvQRyfxyncVywBfsr1WimJA9"
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
