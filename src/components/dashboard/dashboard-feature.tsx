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
    "46qbdncgBb6y4hCrZsoLHSb4Rd1aCCAfqLKfQuXk7L2WrXiPWJuNL6wvJmvDihviTN4gPnrJJMo7f36vov2QMrsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tQ61pQNKuXggq2DZZyHMZSwgymQQnNcx1bdB3GaXvrDfXSPuioywoE8BJr4QjQE1rAptvLSYxhPjHoLPG5Qtf1",
  "key1": "2NLkyT5NXbnyz3Qc7oSNCCsNaMtmv99K5tYJ25vkxrDjafvWQmKVvnPbH4b3t7cf9EzCCzj631K67Bw5donuKWiX",
  "key2": "3vsBviwFzA2iP3jnDggNDsM8VcHSPKXJDyDUXMD5DiRjxJZG345kKw87KL4TdwAL6VYRoGgNsTcdAF7Eg1GpxSKd",
  "key3": "5nbCEoi9cNbcdGDJNoXxdmJqPtwcCdPuUYF3zPKQvacv6B3BpdPM47cnHKwsHdq5tbfiZ5snEN5ETSyKCazgKrPN",
  "key4": "3y8DddhLHFZKZdaVGxd2wyakUey67nsWV2hzRuZVNNZaB5TJJgYXNhsgetLAfWUkxmYrV3yiXd496YjFwq5GawQo",
  "key5": "5SE66t2XoKVcKv5st2T9uZNA8uwvj8UcNULzkLPcJJ9HhXd26KmV1CnvBvRV2CXCuoswRGGf37jiotFskN3m7rM1",
  "key6": "9VmyNkBRrUPGEinPTNZx1gtBJsyqnRmixU6HwPUt18sBnyrKiprMmZLyiFQc5ZrNNZDPSN4DNbhEyAXAFjvu2Hj",
  "key7": "5NCeN31qLRNCc7vBjw3nhG8eLDZDmmciQPwxaZXTD289gEmaceA3A1sdEpj4sCnijNNV5vkoAQ27d1GfkuAzxGkp",
  "key8": "4XeJwta49ou58p7YeCdZ7xYbz3GQLdQZB2QDA4wJauaMQiTKFX3YVwkJpW4TvTxjRvjNR1PpzAVDCC8Sjdc6gsad",
  "key9": "3Vm6NiZSKgmHRBnTxEvHu8hq1gcXXsuWC1muUUy2chgjyc6uU3qfAoDMVsD5mcr3QVC3mxszUqFXDxqHBNte33h6",
  "key10": "5rrgxUR2dmVaYcc9XTkGNqmYhVEWuw4SsuMvRTjSCMMBh4LxXsGWjwD75W8BsRcsnMdhjdS5drRcLu3eNcMCN4pJ",
  "key11": "2Ffjh7Qow8zDcY35aojMZTM44uu1Rajct3KnTAcpJBU6P9gokKz65uKzAVd4hdY6ak4HqvxaEf8fJqLx1fGCE5LB",
  "key12": "2mRzb5cCBHmSp1TL8sYfnKbpwYnuf7mXq8dWFjZgRg8YdxSzVXucVCdDuePCxFLyZjdmXLbtggKUdeQWrJvwFuCV",
  "key13": "264gmLJBkiP3AcFf2byAtZj56i7iF9oXoHV4QkuJtULRyjDks323idFiJoL7dB5U1tyia5m1j1iMpntjgGmzACRu",
  "key14": "3yGmSANmzExnTRZNSK7cBFKaX7ynrWCr3qAw234pTL1ByuDAyptsXATXAA8o6fJXZVGdZERzULF9V1qBLB29i91k",
  "key15": "5NX4q4EWgsbmXqkSH6rTeCAghr7DyyQpTtonA2JBVBJH6XXfhZJcubob9ByjPZKMf75KquujQAgWKZNVLKXEhhuz",
  "key16": "3TfVnordPqAWGdmx6xd84XCQ4zbJC9x54cMRNLXYjS3FxGYRTk9R2CNXLLC6Arjwv1QXLqvtEXr8nhREnCce961m",
  "key17": "2C1PJw24zNd8xGKboSPZnaYkRJ4YZj3kqkemnbtBaVvYPomNqqmtUyBfucc5Q2Mic2RSLTyTu6e1aoX9dquY3Gii",
  "key18": "4Qc7RHhJYHcZ6icdZzpjyziUGbdiTUbWYZe8JU3prkVd163niyk93t9TEL4HXhJu1bHMu3nL785ivNS5YSsNhuoC",
  "key19": "4MxCF4uAvv7fJ6E1jVKQfFeF8iG6Z7VenEGV2qRC67t6Rc621GwcHTo5cfD5ZRpCgVjKRrotbeUZ66h67wxnoNWR",
  "key20": "53nnwmZYnKVjh8oBBrYaorqmQJCY3jZMMfGh16kBmh8wXZkV13A5vNVtqkGjQcPKN1iVSSuGfC5rCwX2eaJHaVXZ",
  "key21": "32XGKAYnGyZGv2P3B5Gg2d1ErZGtBukUf5EWhSfn238cLAcZx7p7VSjHd973va6zK7u8U5EnTyjfmrAdyTKikeCU",
  "key22": "Uh72WLyzd3VQat4pCMvZ7Zp7V8HKwVrZehpHjCpb1ivCymhPuE75LGm91wWwHhPX2PCQNQV9gBjisoxpjigCoHJ",
  "key23": "5eiVsB1vUrLHHg1XQCsd5r1mXh43mYaN4AVUdiFDmffn3g8BwippXB19kfSY4VkjVGhi9WKeRqUjjBv3eE2rHStP",
  "key24": "5TkmGf3vefvyjjiLg5PhpCwmAAd8GgewoDdw8upHnKvmDt5e8U8C4SWG17YHYBogjDWKYyKaG2k2Do39ggmx38Pk",
  "key25": "2h5JGotKKk8jTGB262vNHSx71tpgpRreEqvmcK9288sXAyrdvLSQPPxsGXbcP8adLVntpyp59Rmm5dknU3nQ8tjs",
  "key26": "zfxRpHU6PjiuWC5C4cTwgW1zc5vV8RSAEYC6ETYXcNmDPbvNKiLgrv6ScTz916DjDSacF6F7sp8wi53AZCdSC9g",
  "key27": "3so1nYp6CThTkkLcpLBbh7tnwN2zgREwjvL77g4Fn3cijbgQzE17bPVZ9EcbuKtq6paBDmumXw8cPfPPmQGi6QqV",
  "key28": "4HFTCar4pPvM2bsGmNRbQdpkozp4JLjHJvnkxV8qsVrbDbusf6dA6zhkEso2CfEAfNE9BRZpShtp4BcokA4VZAMr",
  "key29": "66jzZmm6UAepYu61cbMJ7194JZ9Y2DTsMC2k3yBeahjgjsRxXdoZ3vTSQKyxMZh6VJokKHPM7389NjBFeafRyA1R",
  "key30": "4KAkyYofWAa6fPsgXFkf1gZLdZjiCEWPgEucM1QDGSEF6uUfXi1NknrR6YxLE9aZuMXH8Dp9AUGKxhGuAfPYZMzt",
  "key31": "4JH99dRQtmw4SsPy27UyFwXd7LH7c6NdnQ3aoe5wVBaSH8XN5e3vGeRUCGirT1ZNn7z6VULVc9CcRMUe5eui5zyr",
  "key32": "GyzCbmzFHCZj9SLeRoG4imFuwp1RpBEqT7WLxcZgAV9df19v6FhfbEfC172QFDxwwkHwSk57cgtHoUQ4DWaW6nA",
  "key33": "e5UsRc7wHotP91L2Cf63cSqZekajvYD35f55Xw4i8S2jRcZ2NaUJXdmXqcp3jquDbVNdX8WMfHtVDPWvDUvgWPj",
  "key34": "31JfBfM2ZZxZgkhZE5Jp2QkivMx3k9Now4yR4VcyzndqFc1L5sA4SDmn29N51KRAfpP1ZVFRXNnzMPGj1RXGTHMh",
  "key35": "Bwaf9jYiJLJtrbfYsewSbvpeR1fQejHeus33vCF3YG4JED5qf6JYzjXKXasuLHd54WY5BahsXjstjsEEgEt8pZr",
  "key36": "qRKm3Z2uT3xtGRH39dQodPBrHKwHuHzPEf6mYCBpR5YJ9d7aiv5TteF1rVfWrL2YAC52jMvKhDB5oQduJ6zrNKV",
  "key37": "4c7CuoJGQ8yuL5QCgs49Zpay6uKxsWhoFGaEpQosxwFRSBhpZVMYkqwC7VdBYpuR6owfdpzJ9nKNdndYZEefXqkL",
  "key38": "2K6V4Xj74b3TCGhgodg6MwWN7eoPrBgMy4MN3Nr7Q9KPy6DjHusCXbgiCHeqsmF9Qb1GhCm9th2bWaEAHEKXkfG9",
  "key39": "34z6p55dzAnU6wpnDJVt89Rfsu27oiAbmyDmAVHNcnKdQqKdzdAY2hFiKsbJfptASPb7TaisAMEJqZH8o8Nztabb",
  "key40": "435EjKzicMf27tZ71pF7VAeJ3YM3yLpfpAkf3nZRtWovyTyvZGmG96MFKmpPJwmQC5n2JBiCA7Kg6UnBrDKXdYNu",
  "key41": "5mo4yDUZ2oSi9LjKPjqQajba13Lc8u2ZmjhwWDEduXur3LYeCvf6yDfxdxpwm6L5FnB6XVCme1SRMfUxS7Pk3Kdy",
  "key42": "49TUFo4VfXDJxU2WNoyozp18XzQQzreK6BCRbrRqapQd9Q8Pbbtm3qXxKYiWZ7YECtTqQ9CQ7dtk5aE4CFCgoaGV",
  "key43": "wpaxB2CYvWLzh4qP6MGfDzeEhcVG9zUsY4FkuZyPXZ7cNHcavD6gxj2b89buhEj1LGyi4urgpdS4x6gGMKnuM6V"
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
