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
    "662FeQ2uMJ8MSGjjMgtDHWMSP8smuyEHW5qpgcgG9fWQjFui5P51BqtEneH7W46BUjJzgE77rNP9b5nZwQBBSk35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3sVRym2SMXu6tP2jUv8BtHUrXTfDR5AZxVj6fbgpem7tTrkpLxFJWbYprNfvsi1cmjXFXwg6Cwtgs6y3sJMFcn",
  "key1": "2thRXBCcH1uLymUEVhDBYTcuwtCdJppfsECm22XK9TG1d5V66PeQFxVFbMeq9WZiauuExubaGXo3i5sPEbTHz5Zt",
  "key2": "2tSfCmwyzc8xd4zxMBgQuK7TojMGv4vQ82pmvkEZ5qFWp8VFUT44U3TGWXCjr5hAxvrrT1i2syRASV1TEAHSGgLE",
  "key3": "2qTjxi2fMZaYrzTVKhvocgysPh2SVQoqmNZvB4VbpoyCzkBG4mzn1hg7SVAy8erLDUAAvS1aFpYoWR8Tkn578qvH",
  "key4": "3nHJmSWZK2jy3XSReQLQZ82jsMRnnJddHNGS5wvswmoBAReMNfbKa4C8wSeDjS3hHaCMsxQ4JSsmFf3UARa4n3MY",
  "key5": "31v4uD6r5WxmxToAjEjt3bbiEkdTtUvbtbfzqhwc1Aum7KWqEi5s4h3dyPuTubMaRGTiJsb9WaCjcdDjghHQjZH8",
  "key6": "4EozQuL8g9v9uTyZf7jntA44cRoA6qyCAWzuGaq9UnA554cg724V7pT833TCgkPCC3pR9Nd9wDUDtphSCTmPUFpT",
  "key7": "mFSPyeUJXimMVdfKfGmb28w27QECEjMoFmuCXQrj3u8tQqqbAQtojN5Mge9YhrUm8BU2TpEuRW8tSrRDKFLS9DY",
  "key8": "3WSZuDYyDWmbMuXsjVGcSUZHbqMYiCjQUaNKYeCvyLvkEUc5xT3a8Lc5Sn4tBxmgbHCSFV3WBpTevMMEZuzNQjV4",
  "key9": "5NKhdTKx4BzaqzMbETTXVydpGcmB9AULZyz4dAZMB5usxN47TvU6UXpM5AWSJD3p7QJUqBMkcHXzvtKuTcEUj5ca",
  "key10": "2bp3oUsFG4JydpaywZ9Qj47JHpbiz19wit7szKapHLajes6GFBJBBSxRat28RXRCvG4ofwdHaWN51C9Lr9PifPk3",
  "key11": "2C3GyEJTaToJCAamxug17eqpDS43wf4cmp34gjfws9Vv1guRQbim6fvdomJTKcCS5vztWzwABTfjc6nmHFCzViQt",
  "key12": "hHdXsQxv9mNSMGFeTX5aoPxXinLbHRnbq6DUH4y53jyE22h4KKKi7uBZmqnfmtXkvKRubN7ekVLvb3nZxhUEXo7",
  "key13": "3WMLPefbecf6Z4VqZBo1iLduAWJFC8Apvctn6P7q2KLJ5U8c7oUqeTWk586caDuNvG7iZoqLepQTmszwk82P7iKR",
  "key14": "BrASNFA1qnvzhC26hDDw8h8TAShn65kAVvsgp7phDWviQeE9nsoCS3eVveqLZXA8NuNuxvG24CEQi7V2Xu7WAdX",
  "key15": "4vct6UhvLkVj97ujceL2Quz5Z8CFHo9rAsBjNHeeejK9iyBDm8TS5aSoK5eqdAH5AWTTbJSYQpa7RPgcG5VBdoUq",
  "key16": "5jHwk8xUbvuxHKko5FQR6avCHj6RL9jGX2CoGMgz2tUAJBF6haYxPnG6mkqLUxcn3r9r2Jb16vhPgxzwQWqwL9Eo",
  "key17": "zUecTCEJNYUyNYB52jVSAbVi1nG6HAF65tU8Ybb5zZvjAp8m2tdm81YnhnvJNPvvYxaBg178bcuk7Uk8PhCwuLX",
  "key18": "4P9e55mQ81SJm8Ywz3DAFp1hvfjtBfamcw94zy4DMB3Jxxj6oHAqDrjr5RoLiZvZfAZ2r2v2QdX2fvRDKCHtjrgN",
  "key19": "3PpqApRRo1yjv8DPyPLvSjcbazx4nGXmZjXQ6jh1CZp4Uhc1hxXVUbBC3hkFgpJog3Wr2xq5krhhjD4KfnVx4733",
  "key20": "4EVh8gNm192FqGVX4USHjRqvCnL48ZdHhT8FwtYukREMQrt1LNGXJnFEH2YRN5cDg6dA2um9DXNatxUAXJHqG2Xu",
  "key21": "4Xt11EzAefvRWNrvGDA5jdyYsv45JBfkTZdqR6ubqLH7NRunY4QezZTqfLh3BZkXG3r2ftKGgk7A2rDxSATchjo8",
  "key22": "6G9u66p29ti4iDLGKR7aTCt1KSFyqvD8SpYnfTGYLJhRP84ZBiWgbep6GV7cqTJTtueoDsfzcJ39U1RQij2eYF3",
  "key23": "2GpejuqiHPqHEGtR1SdCdtAkawTDvbd4QHKSsU6Vj9JCAbo131cPzki7KQXRy3jv7tYpZcifa6Ze41YZuprYox7t",
  "key24": "3v2D8RQVhwNRz4b576prM9WvgASwFVBgs9KFNuXh7SLMFBq6SxDgfwCUBjcXQf8yT2vGbLs6zZLXUMmSkgs7ELR7",
  "key25": "2inSzUYmhPkWFRYStpSD5yHmtkih49W4ZCtVPktvjPPNrSDmTNQ7AuZ6P5SZJQsc8T8S2LFWRnWS4eT7kmFCCAVs",
  "key26": "4okAKDK88tzxhYuSSqsWm2bsj1uHgQzkkdxbn1jokH1nPeM3VadGh3ZQcS1FdtfQNos96hXqSh8oxxdCD36U58jm",
  "key27": "3Cps8wW8YGc4WovubNxCcxa1WfJjuPLDLHnH3Ptmk6TkqjdAejR74M3pZs7cRaFvJgjopxnJ4nZRSriEqMtH9bwQ",
  "key28": "661pN9DhgnnJvi7cXdoEBuZBT1KseEPMvWT7BhQK1B7zETE11PLZcRiDyV1f7wUAU6zk2Pr1vUrSwKd292y7dNCZ",
  "key29": "4JK42fh3HQGW8DaZNanapsTPnr67XDLats8ZA7jNGfnCP3prYb9185zMgYuwMfW6w36gufYV115rADrvuJ6g3dks",
  "key30": "4dAEbPZ9uh29KWTqdsQauKjeKiYwRMb97vqxJjGcmjLoUgvWx8U8RAioXzK1pJc85iLpB5JVyqyyRZKyLB6ejegW"
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
