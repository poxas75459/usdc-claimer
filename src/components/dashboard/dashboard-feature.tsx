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
    "32FR3bu3Df1Xk7rv31PWVrPvGxPm8K8qenFGMrL2Yhx3iqYuikvuY5kkLQ43TGW86HFs9QXpNK8shQLQmLSVQyaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFTaogwZkPKkj1Vb3qhZRsNADXkHEcYC4zP7H5MEePS2AmsbB8harLSYWTEMZVuDndqtnhRwTARBVSUQhVHHGGi",
  "key1": "3qALSwEa3VuKV4VU3yeiLhULQEjevEuKzcs5Z36qr7R6TeT8ZXGgUTsviuJZZiCvzANKXbrdW8KPkFFeyB59E8QG",
  "key2": "44GcohttbFUipM9szsPou879mxfL6L8KPzXKC1PM7vNd2GQV46Wyzt1riVri96DW7dKFZYsY5agjxLakLWriR8Y3",
  "key3": "4FcsZRXsrjzuuc8KYr3c4kpPpRQtYAtCM9frKyVuzHeicF7QHFsqsYrwKtAbvoSEnBX5MqWL3dHXcG1gA21jWeid",
  "key4": "32PLJXuqPetZudfQVe9d4VkS9fSoZg6ZYBh2rct5yZm2wXL1MBciSXiNKYtz3v5fUCKXLZhb8CX9prbHscQ5uEQX",
  "key5": "5P5f84abVC6uJP4efSv77c18dcF2Gr7r4yiy3CTDUN3sERUczCyikHsZrEauictgkrMnb43uWgDX1GXW6Rw7jhXn",
  "key6": "21EJgVLRKZtmaKgrwBjvyzgsQLZ19xKvXQu35fMtiVsVcZneVreH7CQXn2eZGB4Cza5fELXsgyv4ghoi5ZHaMRjw",
  "key7": "3gnf5rHcrL1A2mcwSjwWbjCzFbidW9XKLqGuzoZMcaCEiCb3pXwnkYpa6eEfJq2C4RBPT4ac3GoreQJLrxpoUtPB",
  "key8": "4t6ZZSp2KAFsioqsVvjN9zoRe5fGo5LS61LadWJj8jKemCQ6iZp6kXajHvKANQZY4bnXBkT6SaCitoUh1zLMz8MN",
  "key9": "CxiH9Zjrqe51RxTHEQGNjTGv9fEr65Hp7LHoAVfuyVgcqXBqLJyv5rmSh3uPw47meFk2TNvQFkSpteu2p6LA4Pu",
  "key10": "5FKoaDgC1bh8XVyJE5qx6qirWRKcGdYywSFcWZvwYXRNiEdeiRVBJyMVLzBfLcLCjyoTHNWRZES4QqD6qNnhbCRL",
  "key11": "5sbKSjCDrKFuwTmTUfQAFu3e1cijrXw5NHaPdzsK6cgsUSUgxd8MjPRDaupdZFRqRYRK3zJwkFQVANmDVvieikoB",
  "key12": "42kdDdm8wWS2Nb6rkpiz6JwQTTme7bhcbHp2nvRuXybUmnddP8vKEHtJsdzbNcoCtQofHYYuHPr6LuVkT8NcrKPm",
  "key13": "45HXESwcKjynNUJcApsjMDxLPJmzyjetB3KzPa51bLJK7psmx3ndUuJF6gyEk4NdRUFcwTsoJfmTyPhnYzBnz2r4",
  "key14": "3T3RTYLQ89gN8JTYsnw6eGYCU4QzxZTAsYHjgQPsCgdNqAjnssECvF2SzMNNnUHJRE4YRpZXj9yYwF7aD2z1viwh",
  "key15": "9KCLuXXn7dF43STdYoPw1p8ASbHFwrmQm4fJuKBu1m9heiXxec9BrD8woZM2eD2d2MMAdRX5CatKktHEo7oZAZv",
  "key16": "2YSt5RkcrcFdqk3eCQUDxSmfXhethUPhcEn5oVm9k7zNiMCE9erP528jvAdojZDx9NGE8c4nopCToNTGqQMcgBqU",
  "key17": "2grmn1iAXqihEvYiw9gTYLPJD4FdpXafjQTEQxDGuM6SQxBZef9mzm5NnBEA4VLJSVhGiMtPaSN7mj5gVjTjsG4G",
  "key18": "2Q7BTjKtbd5ph3wtARXZZX2CE22WWDuwUkgyoxQGgu7QwjJzA3y6Uez7cUxkAnBJxLUCoqwCW4pEcknufAS6nHrh",
  "key19": "YcNnuLC5yrJTXJ9ZVEYg2VkzAoTsVwgudDZh3LkNKgSyMpxeoGHWm2bhBEtLAk1bQfHdpLPGTPQv2CiVCbycbQQ",
  "key20": "G2PKWrRCXoNSjMwR1Hc4FV9srTdVtZ2yH8F7sx8gVw1AETzkYQCvmtzReLbN1R7x42rAmcjdpeUSmmQhr77wQLX",
  "key21": "UTia95s4p1g7WBfUQ9XoATGU4ghjDRoGvzHYoWFciydSKWgs6n99Xgo8pBEhYb9AERg2fVW5NKLhUC4Xy8Gxwwr",
  "key22": "oN1siU3P28W3ecE4n3vdfUW2Kr9yRqQN75yPs3ZGwArq3mRTaieacK79V4iFvPz688wqGXy84e6bvfoY9W6WKxd",
  "key23": "4bp4AzEVup26m5HfiWjStNmwUvpdZKDKDJRyVgpsni4HbGs4RvRrYGYXcoQm9gqhqqnGtZxMzLRnMUUSBXjaoUsq",
  "key24": "3cHWvxgdGMmmDpAvsSLNeZxn9qRirbY2YBUcmgpTqPtf1bWQ4dKP5gfAAuUYTN8aPFibYGjZ89yY7RFkGy1DbZNC",
  "key25": "gqweEC4zM3NPzsBGmmzm19oHUfJsPqhRv8rtEMqk1LRB7UQPXPAwfRwnmhPkbFQj4QT5GFtXYx5HkSuT7Nofckw",
  "key26": "2WuYHZyrg8fmSsABqQBwSfuyPsTRjTHJA6bAuyeJvXUarrgahb8x3WWxfofrsD4M1RXLBqETRv2xbnE1sFz797DR",
  "key27": "43uWBWU83fNjM7aXhBWchV22Fv3xEJMVL9Y2SG7L5xuXCcRMpUpgXpgq2mCUNoVaTKfcJNwG6XjiDoVADhfUkKF7",
  "key28": "3VgDy2fe9FmGEHTSbHpZEMuYd74bA9rTftyxkRckyKbWtydMford84ZMYw4sBZWq4c8d8q15EYPRBS5paHT648Ya",
  "key29": "3ZBMUzKuhGp415gWqzp4WJtZwgbam3d1VuAtmXT4PA61gAY7eLLcA44aWX6HRod6tp3wRpYLK48uTvbEnzQJnQX6",
  "key30": "3Jm6bZunvdST2kaHw1oVvweauFHLiwwHj8TaZF42sT7gmdkZb9dzztk1kyNbbxTXCo87zgKbZ9pKcTBKCyRT2RpY",
  "key31": "MMQ8GUAv8KMWZtfGAEuFXNooxEvWFGUuCanYjPnxuQo9mAnSjGiK6kiAiXeb9c7gyXUczKqcPrxkYQbtgL69uya",
  "key32": "4FiXirWimPF9tKUsfqNKFEgiSUgHuKnhRXrJ4BopXED8jK9E596wVokXMg4rSQaXzFfyrovchUE7h96kHVFgKUip",
  "key33": "5bpN3qE1zC5maLGShw6Do68XKNWL6Hy2yaRXV3ArXrosFHpTGXQavb5mgY85ivZkxBvJBwUxTStw3FdYRDf6bZsg",
  "key34": "2qFvSRxXSquWckYGVu6UwSwguEcguiu2R3dTNA5PweHqbRBQwSEQ15QM3GzmVe2UuJkGzEjPVRDbUGg9MZbzmq6G",
  "key35": "222sXiMjReNZR4hT75gZmjRBYsJiWrvt9U7ST2Uc3h3XxMKwCGWTVreDc1qiYQeqxNuD9avQGHmanwCmppRDDa3w",
  "key36": "25jDLSBdSHTFxTz44CBB3EARQ3ugwgznQfaDQGpVHQ4eDLbTMPDGb3uEn6rQq3pd3khovKFnAbkvchubh9yDajky",
  "key37": "5P4PPpVbQL7m5UzYEN1sKLwyPGDH8ezEpzL4we433iqGpofowaDUjkEGnNjfBynsbrsLt4JEGrs4Db3BcSEszzza",
  "key38": "pPmNmmGwfrLa6zWzKCjBZJho16mzSGVvsahn9VRzPJpoH51Nr5amGQN6Sqw25ZHE7fna15QkcB7ZRnC5ZijwTcH",
  "key39": "49NHqgLfe4utBVyXZGtsyBpZRQ5QMjx4fb1o8Rvo6XofakX6Kgbg54WRNWocoBxgSFNEx5sj6QVAeryagL6XmnbU",
  "key40": "3oM4uDoWd8zizoLKcH3zVWGaHkCef5NMDQBmuRzkATLPnvMQ8FuoavN1EuCcCh5AcB2h7gaasZCpvpY8ey8MW9Au"
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
