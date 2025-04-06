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
    "2Tt17njToChu1XSJ4DWmkmk8Wag7r2718ZDbeCtv6QfWHQqDNxEkGEMTSyauXYaWRSVeHB4nS4qYxv6raM6GnUsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpGt2MEHtw3nfRsjGboBrg5XarfyUANrE944CRYvKaX4c1raq7XdQY6MiHJSAz9Rbteord3o9iedsiyGRsrXMLh",
  "key1": "5ziv7GZAhmGmzDQy2hFHu4WLD37URobxNd6BaVwdagirY4HVkdN7r4ZiNRd51XSVYaAUCoqGv5HEByneX4LSjkV3",
  "key2": "15E2qeFvf4grgBfQqPriPL4zHB747bKYgDP2aPCoYthnS4dzdUBQULYTxm3ztNphMrDmbnbYYhpMLpaKKP25hpn",
  "key3": "3kaEHw1Yh3CFh4QEyDzGhwzjHiLUVD9xKLJPJzFawm88JHjVpMFHVGKSS9XzDMwgeyFUd6hdGgdfnDZYZyp3koB2",
  "key4": "3TgqDN99kJdLGt8FgiDXDPLLucXxyWLXf7bVtxmUdPwRKBR7eZqX9K1VDnLhCE5PSAG8EBbcFebDbqNp8fjT2SYR",
  "key5": "3dqv3xT9aWwD1Fv6Aki6WKhLAihY2CB4hyCJcJKQYk2UFLsohjKp5VGeeZAVBgegThCCQYrqt2zNWUkPjq8r8icB",
  "key6": "3FwzXm8tQZ6RxR2gb71C1LLk3C2tEp9WmyQF3C1nN9Sdvckac5mBtZXpaaM3n4SmNZP2XuaudBFbLZtoHcXgVQoE",
  "key7": "2Aa82mvbuisGerD3yoRYMzHYjBZFYfNfj3fM76Ffz7Pa9DqSNmRo7CaoTCHyVcmRPYFZGcvhjACGgK6spKk9GL3q",
  "key8": "5nZFne1UFJPPLfZxcAiEcwYEnRxp4xpxYCsbkK3WMX1GRUrwLnBAdAco3M6qvQqon9Y3b9DmgfPQgeqm7PGH92kX",
  "key9": "1mZDwY7xmwDDA4tV2go7r3pEhTYtzWwszrVtDEsBhDekcuuEmhgBP79qWfo3gQvaAAicFLJxHAagCUduE2BqBT",
  "key10": "2ecutQGZCUyJkiDhYMgwSCQQxdJxNoxEvCie52MM2vAFuZ1hYnciAqggqqD3HyxqnbVtVwKhxKLq5MievzQ4ySoS",
  "key11": "5Pf9Nkx3AUPJzhNKZjLphPgZP5E6VnDVbixC2y3351dWzZP71ShJ6wEi2LC2jXF7VHo6VYR5qJUSdEq7BTskaacb",
  "key12": "3QmeGHhsdLVy4bMjxZgeKbvhnu5EwPfHMCuXNPjCd84neE92ckKsKLzqitKPMk4ubKNkmvpEz2aZAG6G3T2XpBgQ",
  "key13": "2j4s1a1Q3nAsvuL6cRHRDQGdfVZRxoo2CZv53LdjsVZbcDAQzdEqYyHsDUQnQBwuAZkJTE14a8LEEd6BHLxmBM8J",
  "key14": "2RHw8AoupxTmQ5qcTVW27dh2XfKimr64p5EzJNDWRVZK7BJhaXxprJ3WwKNWZCUuJsTVbc2PdCaxY2g2cPwaW7Ya",
  "key15": "5N6qVNyViPkD9dT3Upty357Zqk31xGcjd6mJHzjeo8kcaqEdxqzKWa6DYosPrtCrTNbmAkcdvx3jZgjn8JLCcZnu",
  "key16": "4Kzf1WegeFp9Pw4NG8jMHa4w9P9YBEk65V2gdxCJbmLhEBHT83hKXcLz7jJdqhnqc38yKd9tW898kuC4oU6QyxWH",
  "key17": "2163RXsDCGXHp4YRcKMAENnWpdLkYZkbs7dwYadREvHZecvXVdq5dKjVXoh34Cj8NvXGW8tYSnWkTNpCy2NofWc4",
  "key18": "4PM319znTBhtcxGHw45MQA2bP8ka2HpDVK6xURFxC75fMNnRYHJA2eDwbAdRCw1apLxAF6K6K64spfvG2ZticspJ",
  "key19": "MfNsiPzFNWahk5rZ4veQSPDSJnDpAHadV4AeH4irZzEAUukhBMMtiRohsSKPC3oswZe1oRHJ5Ge5fc9sZ2vtvWY",
  "key20": "CFBe2RPsxKXGeVFoyZwa9g13iuXcdGq3ZzTzWhtnrGgMZNYRMp9QguNHaSx3QVrX9X9tnf1kKCaLHUFd9tfWqQ3",
  "key21": "4rtFFR795hSsqf2yRGfeCpCAMhTVoPYBvEuSRrTkNEXvLcdrMRZy18miha3bBAPTyjewkW4C6nmzbM44ekZ3JgxR",
  "key22": "2uf8ByzKeXXojBswo8m1qmHfv1cNrhSNkuRwPQe31L1VWvQsacFfrtapt98FSt3izCr3YjK6ftL1fSVEWzTMMDCn",
  "key23": "mxcTC9cD357fvjEtTP1La5wY8KR4duSjW7tXJR3fG3KWtLV5jEpNB6yNwN1A7jErs5G7EVGp9YTrSQPE5fGrrYc",
  "key24": "59juhSgvWYFDPKngpa2DtYmTau3Da5Vc6dMxmUiZDvRf5gECz8XUhYdA2j4fABmCTgALDJCuRGxuGQUTpVFatFpF",
  "key25": "2VewWbcqc55pkHmKySDA7xj179aqdq7LWrNkWLMJg7kQPquucyNYbRiZnYvQk1aeQ8otvEsi5BanHAPp8RqBt9H7",
  "key26": "yxySooQVKcrF2Taqpad6Px3YfTswpNUDeH25zCpH3Uwp8hpZAnhUcFWtBP66uvYG3cuHHkoMRmFSkBY7jw3WHrT",
  "key27": "38HZuGzisq9DY9ifSTQV16KXVLws5s5SAPe7WxwqwcLnmypFYf644TfzSqvg2kpd27eJTFgeCE5okytRsFNsBJKQ",
  "key28": "5NaELM6oYztbKvEoRnKVydWHHRDUD6G5L3PFvmfddkMrPB2wvAsWgb4WQPWgwDQ3T7bmPLqUL96a9XvZQHcNyhXS",
  "key29": "2XKedk66zs4gdFcRup7yGZmg1VzUxWEQL8uKPqZKWVjbeXadxdMGUdcYtLym4cbXKmgRmUMsYPW2vvSHAqubK2u2",
  "key30": "5k9uGXznE71vgbF8r3wBkNDp6XTfcDJetsZWyzuzwWCR9dxLgnRmnEAjD88GTXD8EboNVNwCpCJUvUzSp4N8i9t8",
  "key31": "zNd4rWFbmNcYsZx87jatKmNpEPJtn5Z55n1Q4EXCw6pXRZpiheFFeCuKnUoAxn1TmSMET1UaaN3tx2qFZ82w3iu"
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
