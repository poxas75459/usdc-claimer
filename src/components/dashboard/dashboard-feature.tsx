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
    "dz6JJEmiyMsv4xGGoR1GxA8eTyLpWGnakRvXPtUz4BJtR13sDH6co7bxduqCgesXTdadrsHAfddUA8CAaL8HRjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqh73xdhrYDtHZTi7xV7VYthnHA4LGUGToXCTwAxMxECCqosSRayCXfnaoTtiTgSUa8wAX2k2b2YY7qU1nA2dAg",
  "key1": "3hEiLdEqdoMcFPTsKa3kz49KtkhBrcdtEV6EYQEZaL2iwB21inuVBJp46qhSuEj1wfFz2PJ3hN5YgRuoAzpcy8KH",
  "key2": "2HidBaRfpe6FqN2c4oXAG3URn9e7aMAi64XL7PDRV8oz6KLwPP5JT9nRdygWRJKPW5aorUsaxi79cPRnLzRdQSvc",
  "key3": "5zssHw43niXTeFAGqBuYJ1cYhLX1sPNAeyCvt1Nsw2vSUsDKJUCFWaUuZqFPQ31QAMuyxjButwkMFvMRdTNaPaWv",
  "key4": "26viN4fbcfjyKEHQs6YCd6pgDx3i1kHk7c9K4PVhhfPnQwPjDB4ymrnJuoEqV4d5E48zMCbAvTEXazqKrjEgAfPt",
  "key5": "4oGgjrPSm7W49w9hPbx3Hg32rMoLync2c3gr6feLWpQ7XzxGJvF9vvJPSsaQgnx66kJ4xdMt7uz9TR3UkcugRRny",
  "key6": "59a9cVKrrUqnewn6yaeeR7oHx9NEaDymFAWqQmxD61B8dhMMReGrqt5LLVohLmVZ8F83gyZCCuUkkGN5rbdGvR7a",
  "key7": "27JfEvCnzcHdHNsdNBrvMqpvPXTeR5JZtUiXXnijJHkJ2iwWfLji2irEMXybZYymADat49xCrHeUWtNtXvyyz7oD",
  "key8": "3rtbk5YYU8eJ7gVt5ecNCjS13oQPPse8ka5MJiRybKRv2c737qQmNc54wRjJnb9f1DAdKr3bphPF3QJ8NqcVB44D",
  "key9": "36T8AaffxQLdDUW1M3aRD73dVNmsBWNc4enW5BuWk4EcpxL3aNF8hALwsNhvBDoB3tYSVUXcgLxhi1sXLwVUkEHp",
  "key10": "21DWbm77WWVbsh3oBnJhhnQsNdjAW9u5KtneNoUap5yR44VxLbT7M8XkRXf1tEmxsmT2tXNB32BrSmo2T3897f9N",
  "key11": "5jEW5KCk5UUYTjzGmAtjzDs7aWRNComu9NpTKgFcJtEuR4rMkg49HTxAH81fjdZmwuwUGLfCAJJSkhnR6emeXpkx",
  "key12": "5KJy6AdiBLebnBH2y2Btag6NDjBJAPzZyXYDpNMV1niuCuSybvKab5JdUAxTEaspC7ApcV5MbSbdK8xFqgPR1Ue1",
  "key13": "37vfMQy7meQji4N8meC1DRyZ6C2oJ5HXmGdPFfuV14jCFfEySPDxhP9Rnx75rhHsZykBmxgw99bDZXrE8YVSce8D",
  "key14": "5gb15a8mj5D1jRUC2hrcxFphX5dJxr7NAqM5w5GFh58wQ3pySyjH1KQ4w326LqvqzTFtnMivEkcasAasSDRQuE8C",
  "key15": "3bamusSoWtquC656k9mvnzt3oDG8ugrAHx9YwD36yjBcEXUC54XzQqP3VbSJYG41Xg22ehqWWA362h9KUMpNAtJy",
  "key16": "4ZhtEsGtBMsVZmZPQoXNY3KSZ6oNEps891kMxsoWL8YqxqwVWLi6KNFN7npRDdDtYsqorsFPeLJpoEEkAV9UJYRC",
  "key17": "5ctCkw3JpnLtNNqafUuNUEVtfSjcDTV3WQsCmrHCo9Vhua2JmkcJFKv1pgVUJkLSu1nyraJpwgcLqcPDjGoQrKY6",
  "key18": "59ehPD1LBFU9NkoaAEsxo7z7fJCdBsW9udfpghTon27TyZeBiyawkwYU98DyqfsGtqhAkzQnMRSo5TgjTzgxCdkV",
  "key19": "ysv5TKib5EjxBPhFdaHiiKzUFC4WAYyqq1xz4UPtXunb5rWZwSorkcADdmD2QrcFX2Pdn94Rm5tomByqccujpA7",
  "key20": "4Jopfj9UQAgcMXgqYranwyMYsxbcBAdRmgdCxBBUwmmsTotztrH7rGBKj6qjcbouo5XUbf24yK1TqirTCtU3oeph",
  "key21": "C6Gz9VtUQi4yBnSfDwNrRvfGYbqQ24m5J4mnFdD94qihXyPfTSGfBbMXctXGy7kZKLnAz2HtHZrBMpi5NwsYBMF",
  "key22": "21KzKjrkHiwzVEXU2JZtPvjU5VvAukLaGLwkccW9aiwcCYid6W4UZU5BFXm6aEEmsZTRx3CyVRsRnoYA1nJjo73h",
  "key23": "RPASowc68XuA7xuJVRkGfg8Z4Sk5ex4QoPa7PANarXJ3CJvqLeeVpqwzni52dp7sH9h27CbcX9riA25D9baPcBJ",
  "key24": "5DEdKmsivp37WKCHvSJQ1nMRqc3BFNE4i7wa8aUydFgT61Fv4gte1ogSsfXnpS9fLp1PYHbZr9KPXvHcoG8HV8Mp",
  "key25": "33SvQd7mGeQ6vwzkC7bGQxZAsuwjzDgqgrT8k2mSyTgmFMwDkPFX2BomZvM2NNxtXZ7qB2rCujhXgjwW3tRwDXWp"
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
