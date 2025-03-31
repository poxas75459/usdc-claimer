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
    "59vmcEeb48P9fdtTUQBnLsEF34tRjyAwBhC5VnUmYtJYsF3q9uoY3pmnmiZWxvoMbWtwKq6JFRoqiXeaRwN7ySJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5er4VKKmnMQoGjYvgssYgmwNx8kMQkWZjyP9dADrHSNYEaR8KWgHtYLhCvqNQnDRAGGzq6ji849eR7tYr5gw7ytb",
  "key1": "3KBt1cYWqPqtY5Xh56i62Pta5yahg5qFE138meM56hoB65oVuhsk73KY5piNHGgGqgPH41fgCntwe4J2xKEA8QWZ",
  "key2": "3y9TBY3ezWTFo7bPE4DmQLXMSz6jj1S69VatUzTADtiiX4CCb6YDiz23nr11UW2tEdB3BW5k6CTbSKj4ify5vVWR",
  "key3": "5jAAbmMZwsTxd9GA4vv1VXtajaVQKNbF3Wwi6vZkZGvmNungdw5ZZVr3HwTcwj55sjwxchjmmreGV6tSLGksuKCo",
  "key4": "3mGez6t2mC7MbtgrZKm9Gjig2RKDvMkdXQKNmfemJgQ78tLy7M2xemw761QmA6BCYCCjdgKQ5CnGb5yHLN5GtPb8",
  "key5": "EEsUzrJGYF7by4T2yAbHPGbo7AvpQiqnhM6h1pVNUHdDP68pMNVmhrzE9y4GhUWJyhPBW6wvRFFw6AfTiHqN3ZR",
  "key6": "32wYspwe7oice8iGkR3z7ss62r6ZKUbpZA2qCZzJ2sEgsQqJdKyLrhgUTzMUtdHiYYDQBncZQi7GkT9ALD7GerrH",
  "key7": "91ZvkhjdetvKfrJBvggAY5xwvNfJQCKKvG73C6YKdTpJL4e7YBQ6TLD3FLudreaeZsspEqYXWuBVy2aFbMa9ojc",
  "key8": "sUGsZ6qSmkFWTGMaPkJ1QLi2XxcEbmNDYsfRwB7sDwanfm71g9JbUaxexvSfHWjqu7KAfW6JyNGrVvojNtZmJW2",
  "key9": "3aQtdctKMZyU1NorxfdWW9UXrtgqNwFCd1dkj1wGmud5enu9YiJnQLuGhKScbivtr6z1KBnVXJoQumg3jw95o4Yp",
  "key10": "29H5jLswoa9e5w8abdZvkk8BXaJhicKwf318Gn4UzJDuFpPqDvh9dXcWQwx2WhZ6t5xrSiLaWYEW41RdWi5ootk6",
  "key11": "4rEk4xPQhi3Js3GLp4o5vaQY8kTgVJM2AVqpyX4xtoLCi12ZxtTuc5kmBGJv2S1ApjHgFhm7T58Mkq6RtxnFL9jP",
  "key12": "9ZewDyyvYGTjri8b8sAFoeyDkRG3nkbPYhxA2wG5eKkMh1xhAruBekRKvM1TjWzf9TdXGGuAFPsqF6GEA83ACfv",
  "key13": "4U8gmBpAoQXwDQD8KcheYQigPMxqynFAgP332P1PTm82PfTvQRghTbApaW72wQbHq5veHfSc9ZmXJHLX3sifJLQV",
  "key14": "G41WNgwG8JqJaLS4Bj3AJQR9JrPVL7no27WWWZCEkPFQPdv1Kq9HKzoBmmz1DZU9WWqoYxmT8sWJiYaVwo6vaeT",
  "key15": "4Spi2MfNugzsbpispAQUsTX8WMtbgbY32axmdULqPW4489ScRoKsRMz4xGbsQSoCJe8474Ke2t4eZ2TSZTB2u42K",
  "key16": "5EKEXNnfgWW4Jp6yH5ZeR4GQY9MyfYC9AM5no6x6JP7DDLYX996UtbURbwdcQp8C2ozbUqbXXkSP1bn9wzfeGYQq",
  "key17": "SWqVfE6QSiPTgiqVn6LTs2U4p838R84ZL1mpMD7PjaSb4fSaCEpsG863sTrCL1RtfeiZUvfqRr7KcdHhvoiM2Rs",
  "key18": "2oifB2t8kF5Rxv9xnUJgmcKj4KTcxFjGj4H53VojjtmShuP228MmximFYwZzh8q8rBoqM6rDTKy5S74Dx7Xtytj9",
  "key19": "3NRGnFQQ9ucJbRF3dAaePiWeojeGLLFyJbbXm8a97iGHV6rVcetj4AVjVjPzjSjrHJhjEuK4uSwuusUJf3tNLtzs",
  "key20": "4gnwW87wF8bEhBjnWZ3qVY5pzfdrWKxyYFU9fFnYTfJ31uC1TGQ1PFXDVGZZNwBZrUcHpxDAJHHzAjTrcmKitWiW",
  "key21": "3B6vBqwqXGsTVYXaNBakmVwQ39asfHz4WHAdpmGjPTwyJw41fEmkakVzunphoBGBHMQ2f5sL6LNHH62ZknYzCDgt",
  "key22": "31xWvdSxi5wLuWSRReqwgX3FbcvhBhnij5mxNQKtGzzeX2kizuou4Qge8YqazMmecmDMvPpj6bXPnFAnhye8UYnj",
  "key23": "5wu2JK1XpxLkvfEx39kcpiYUrhZFodNSUfDADtrCp9jL9peiUWKRAGnyFnApyjUTSqsfLrc44P4NTDYkJoaUmXR4",
  "key24": "3fszZuhkSt6Mjm7uJHgsQbmhhPKVR38cyPjC54evsu4objZ9qU95rEBZyPodWoT3JBTLbMaZjLUeX5HZBcc6AECH",
  "key25": "2fFVbtSteCUU7QmXAyyKfiLbTyZbtoipp8Xa82rdKjN4a9rDafacASbPsAXEe9gQthFq4jaHe3dWUxDTLAnt7uLd",
  "key26": "2oHXqryCfqDtQcohAbCp5oLknU6CiBAEhHqRcMsoUi2eWLczKoKApAU63PxdJCjNvLZy6GWXvMYg1NeEJXxL1JwT",
  "key27": "5HyZ1rC3LELFYUDjyKTZRppCbJfJt5QRWK2smTyFQbPLsjMwqNHJakq8ENGjwxJAa7gEDK2XmdeFPo3HUrHrAQao",
  "key28": "38TeczKMPJY9VPpgfZ1gGceH8w5n76biSQxGZMwP5hhLWBYGhkGLbZXQzjvf7hnifeqVQDWhE4XTMbEWfy58oPBe",
  "key29": "4WZsbSFQn1bMYpCq4XE1y7JJgBCzVN5yMG8BKvpomLfRc6JrZGgjZFnD8RJLiPjW5LgFMrXm68nEZgvjkjceKNgF"
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
