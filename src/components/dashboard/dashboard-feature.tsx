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
    "2gpZb5LoCRuS32jTbfwrGYmhiB9FbzFkcseCivFc1ysyE94eyf5W1XMycT8qur7ZhN2uZtjpUkDvtwwtFi3eSjqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMeZDSKY8GaYtqFPtxhYvWgM5qFJaT3VtQbkWZvWP4uo4yyTgeavbKtnc3nhJF7iz4y5BLCYS3uZpqYMWxvRJUY",
  "key1": "5r4zBjnYL8UWn2ZwXhMfVo144vnA8G3dpnthrunUhjFuYDZbTjF7QNWUaJJS12Kk7kcogmCpNFj4gv11V3Pewywx",
  "key2": "3hLoo4w7WCd9UhnC2o6GZxh7566qf3VWHfCwaBb9HuNi5NiJ5KJMEmxJmVapetvK74XzUiuruxczvT6L9XbUtGEs",
  "key3": "3bPyiySW9pCuJsw46r1jB5mXSPr8fhEPYbLQw6ipsoRn3BqmrRmu9vfF8ZitqEsvMTKWcoiNYW4K57h1Mmqxx9H2",
  "key4": "2EwbdkjJm7DBeHodJCR3qqTHrdd6cq3zwFcRyYFuyTyaFVJQkAg7UjcWt7QYXKMZDJ2nCBrvPF5Eg3ZF6c3Q56rE",
  "key5": "34a2XPX9zPtMaC7a8cTvYw6sW2BTVjX58j17Zww7hMvgX7FdRn7wKxBRAWUNYjheihMBrygEN52NPEJNXb1Yvghq",
  "key6": "5ogactiPnjQ15wcjA42GqEtP39MGvaGLrhhWLWfyvW9aTZGcJXcxiTzhdD8Dn5JdEoDxk5EagmhN4KV1SBvNrHHk",
  "key7": "2jg7BCEZzydsvQH6gppKYrd9tqbm3Axk829Yc9ZAZBLPNSRr3UFhs5Zv7DJiQ92TgjBp8mUWYpTPcQGfeWsMYYnT",
  "key8": "B5boGS5C368paVNtJUoo5wjANeX6cqACXEJpkwDXDuXfUVs15bTjpP1xbWXJ5MNZS6LcaCdAmcTQLxWp9PyWKLe",
  "key9": "3TNdC16px2Y36uq4YuArbF14fFyhFd5f9LPsEZmA3Zxv62ucGLhWycXNo44Y6k7pC4irrdVAh2BisQsGvvDrDvj2",
  "key10": "2sYNfvEPEKymBJFvLtXiFf9GXDsJbDcRisKBxMFbdzGUpDPAH4bdSv7W5i1RnWn4PXDmAYtUykZywLxNvkhgtwwj",
  "key11": "4aabhPESyQ2LfgQxDrhrCMm8ZGUuRWdb6bT4KVqidDUegpm4WvpiE2MDFVaaNKjoX5tYdgPjU7zmEtQK1MCyNv78",
  "key12": "5pAWqGUVwqFeahzzovM8XYYXa1rFq1oaSUZ25sSXnfLnyvXqP3UqKbVbHVo4KPNdt76xjjg9Tbcs8guRsPgwYmtM",
  "key13": "i3WkSC6tQJu42iC47Wxp7J6yEMmXMZRXmm3hgvJ13apSroVV8tEU7fWLBANacReVPvWzk3gbLGCi96pHeydBuSA",
  "key14": "4oXtZXsQtZZZmRuFVaFuR9sQyyyNsQ5AZmUidSPZnrpfM7ZcQHFNvdyGdVGA6dSoDUeUi1UKZnLjWQsXThBGUJ6J",
  "key15": "5kiXY77yqQih3VNdwNQAr36ir7o9B9H3dz75EJUsTW8xBa36hgkHdC1apNUVBQ2as1SFePdcy8AxrWhPfx3cB4M3",
  "key16": "5xNi5pg62BzUMnASbc4Fqf3nXsH8UR51tTJP3FayV7mdCDhE8xzSC9hGUV1N37ECxQXbqsX23VgcEFtFAqtGeYZ8",
  "key17": "4Mozij9dDyFjLvyCC5LqTWEVCy1g93u5Cvp6Y2tFzo5dq8PKLSexk7tJehWDJnyNnYemyDhRnn5UTHS99vcbb5qY",
  "key18": "3FrjKvyCGc7JvsXCG5pv8gfjowodpFhxHQso9Nhf8V4m99kbBoFemeUHurvxmRXqyKYdRhyM4uu7QDRrTo8r2GCe",
  "key19": "3ZjAXXkbtiqiZtU4NP3aVRDUVp7fq3T4iND6tVhcTme5hSjJ2hhshDUY5TbQPn9oqi5E98EB7R1zCcmK4pc1jSVu",
  "key20": "VL3vEgxmgZHrmGzxN3ygdhP5V2JxyC4dAw69U5zmbs8xa11njXEdpQr2E4zv4DUreNpxepjwSxyTcZQBZEgzGgU",
  "key21": "4QaqLjRBPfd7YQ5f6XmQu3CUth2Kze4oUa2yiMLvFpc19AF7YgFbq6PZpqW9KyFLnncX8GDdXnEgz2hme4hj2BAc",
  "key22": "2y1DhyMYtRJAqXMikgAmrGDNdhuuFxv6kEQS3wKZ7v5WiSDAYYB55iT2WtcEAW9HK4VNZroBNSZuEntTQaFvnZdG",
  "key23": "3fLWm6Pibdqb4VL5HCiA92AYWPM52hrZNNbCx35DJoaFQYXHrhWkY5nEZw1eVyRub2zSqgqtiQ19rEesbfqigKZG",
  "key24": "4ZkYmQi2JxGBWfUW2s5HoA7Y5w17cPGVmDzDW6knfoZ8UZEUwSXTaBPAbqFczveTCNLU97zVGCSxunWoRbv1kWBY",
  "key25": "zzDccRMGrm994ALYkBuS5S7QYuqeAYPdH8YReVAvofSpid2d9VxG6hHvEyxykSNviixt7iTPnhuKbSNkGo465LD",
  "key26": "AoHKgenKpnJnH36c3g36hMUf6kzs9rZZ1jq9izvisJkrTyTsLeUb5W4uuFGWshVnPZ7D8wMmF2CAJJoFdwtyF5D",
  "key27": "2zDiPGseNiJqzfzMVUzGs4Y2qxV5KXNYmdJMJjf8Qx1vxDHqUQW8UGyy8oun3ijT27MDUNGWMsS7SdjDo7tN96P5",
  "key28": "2zcJf18AAzVztgWYKLvSnrrdPmvHXrDEAZwQEYSVZjfSugUK8Q1ddDh4ZYoGV25L2LZALMpiuFtVGfC4GaJVgvtf",
  "key29": "3veVc9RWiDWtuRtJeb3YsfCB79K1NMqEHjhxqKuXnPqsRprDaKSWeHYsu28BFoFT5fcStHZZJYRXonwj5m2yZz6a",
  "key30": "4uhBf8zEjXJ5jr9khpH6vykR6bCZgpfCyniG6R9MU4LPyYgj9c8VMa48zpCFAzjE7tMBpn688VfkduJVN7xWRjGf",
  "key31": "2s8QHX1gMwrpghmou6EdfS3B9SfsxqKDGRHcUjZHUX1Jy75f2uJFABHu2pspN7xMhwgC6xYXmAshhQHj38xL3xyw",
  "key32": "2DmGWHN67YW2qLCS4ppibhiEL6GAsGVs4p83s4hEt9Di822DZwJ29vrt7sm5upyX1ayoVxt54ZG9KKA8zH4jpcMn",
  "key33": "27m2eMhC9h4MkJva2v8oS9EA7w6DptWA69nru6HRbfbD57YJmqhdhS9anE1G3cwvS1e7qnbd3icuETiLEApJjBF3",
  "key34": "4tCnfDZTMJQ56otxLHt8pjFYPpbxF4WxMx5HEePFAD9UJGbKrZuA2KB7bBa3HZwJWFFRwXJMpA6oZnqGU9566Bm2",
  "key35": "2nSjD13fXG5e5dRwFhGLuuYP8gBERtVkgv4phDYeVw9sasjUaD2an4GvtxVHwDtrWchaEtmNPkhH4z5zgmVBJvpg",
  "key36": "mWWFqqSjCCFztmJyHbS9mWaAn22ds5ExnubkiCm3D2uSMu4srZn92TEXpn3wnKD6oivsakbzgnR8sFLi3QTngaJ",
  "key37": "5qMUFHQQJ3xVxPikQSp11HjB6bsTBH3gGSmtLWSEHTKuLgsFftLZMZYEdw4D4U5AxN3h59KJocuKFSFZRD4sfTjn",
  "key38": "3yy5XtjJH9aFPBmbNBL8rgHG3DsDM6UmDZSjee5JPSYHRN9aTsY11waBq4NY4ACuAe1Q1UiVPSvpLvk2tgcjTsW5",
  "key39": "322MWrNaPNez6ZD9t2uLDZ1p25H6hX24pNsLfKYe8MrQvyZRLFdYZ9pmT1qBpFKvpjTjTjsz9PS1Lr6xC469VgP8",
  "key40": "3Jcs22EtQM4PQLrj7i9Sfv3aF9R3V5sEhHbdZovWvKBkJSXGKj8t8J7kEkaW66iJSCc8gTt1EymcofBH8r9TUPdQ",
  "key41": "4yDAUr1ThNiWYrNeC5VdzJeUZmFT2JE2xu3sMketYwU7gEvf7VuDWWGKfr6hE58ojqVyJBSZqKF2Dfko8ekfTHQs",
  "key42": "4RPg8DHo5xVFZJ9a5ZtaGnhv41qihcr2wSkMVms69S4wqNho6UMoJnS9G9Du3A2HBKYYJnWXVUignTiWZp6GJSWa",
  "key43": "5gRJsPG6jzNao8tfY83XfJEkdrjAt18gvnxLWG4MZa2ThGQSXHejZYZNp84dGHZRHyuxby499sBoXR4VTYfFaH9p",
  "key44": "SM992wrNJDMBEkCHnmjFL6bWafPit9RKvzh2LYgpD6vjNqvjMyGL7TsifpH1VWAGbgBFDAUXWnqN6QfHNkxBD4g",
  "key45": "2QdBwSkQKXNFtGT4i3GyFnkLN6zhEARqS2cEqWTUpx1DNgWxenqetyh7ScvVopxNpgj3Rby8n1BkzU5FxPpaNDzk",
  "key46": "251cBqWkyKm2z21RrxsEtgtjChcHx4DW8HEe5bxdUH36fLPRrwNo6zNjXDkanWKGvsA4EvvHvVkbLTUxAhXZADEx",
  "key47": "4sXDeTAjMyDSXfAFKuf3zT6pJYRqN9STHa2J48KtntVZoA6Cu9yDiftU5HfFH8Nxz4Zk1dz8NhwrrtmfH8yz6ZkW",
  "key48": "4ZjXKuuh35MAyPzpqVAQwkmA84nnpok3i12KUwiQ3nmFM4YXVxxnN47sGh8eV5wkRCk9DoPkhvSMKGE1Dybsmg26",
  "key49": "2ZhUsihdGmdGsdWFGHi32RnTjPEU5YteuJjNrctzu8QaVCoLR8ynGznFGEZtTKDiQWknCAbNBSmeQm6fZZHECqHz"
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
