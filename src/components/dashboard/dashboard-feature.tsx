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
    "36qm75KdiPrGGaLvEACTTa2tGts3U2V9ukULyjG3G8HSafik4Fb93Qx84LxshYmVA1dfuiXzy4wZ8J9Emsx4GP1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txrFnJFsNfGEeok1vm43MNP74xQ3J4YXqfM3UUQdoKCV6SfGTp1fZPKjkDmvjXJNQuhE2dvsiaSyvsT595iZtEL",
  "key1": "48SjivmahULrb2UZTksUo95WTdwAt5X4cncd6UHBVGBJ8RMRCFhqa72g2XZm9TE6BNKeEZ4ch4QYnweU3uDpw2e1",
  "key2": "4xxr5jmqSkb8kTRKjeQxWfMyQT1vHWGuPj5A7ncZjWbJYbKNfYWt1ihjZoxDzMbDarc9ZQgozADWSXd58pXLH2et",
  "key3": "3yTT9eDcwCwNmZ2fzN7F3wBtSZrMxFVGqG7rSJUoauXtgUSnzpnCRHhq5TrnSUFnaT61Usq7VsoV8z4i7HSqnJMC",
  "key4": "48gnog322T6DiW4yMQE3yM196kK2s8H73CJKhYkSwJZZ9bXNYCmCwJgnqbrCSzpYktZfYGXGyMbPtS19bcsXEuaf",
  "key5": "3FJGPW8MSM4WYo5yaqCt24zNkfUdSFxPbs8HYQ1EYXAYsZQWzAAfXy4SLsE7t58Hd71EsTKkHTJFz5RGDcdcgwUm",
  "key6": "2o5sxGiCXh8UDwfEcTk8GEDxMrGuLukZEPaULEnES36g7pWkjijk5nffnVUjJiotfM6Nq5JoXVKTHCx1bYSUnEtX",
  "key7": "5VAnQducfUYSyBFWd2coJMJvTScpJm5yb6hPutDss1dPwWtNfY1ELsfrKn399YkSkbKG8QPvDHq5pEzJdDYaFCT6",
  "key8": "4fF5pFaWJSFokey54RLLFX2Mo7wAEL3cmHuurWcCcZ4pDjqkrXS7aHfNqg3HrpQZsxhde9oU1NUWb9j8pCFYaJ98",
  "key9": "42Pn8pQUGCWd7fpXXHQCviQyA1SdrsepJqtTcH33g1L8Ta1NkEvyNebVYbL3eJjgdcYyPCHJBCrAT457igtYpHT5",
  "key10": "3F7qoYJhsLGipPu41Yu3bEmW8fJzacs4im7tRC8yebFuESRh3ehaVeoeaS2zWuvVStFxnnxzjDfvYJGoMwKBeMGd",
  "key11": "4ywZPfGg3ESAi8uS6pL65jkxchcBLfd8oeEsVG6LiWxrjQas29mFw1qoQDLdYdk39Qvvu3tCPvYYCzBzXpbX4yVk",
  "key12": "56Z4YGUQMduQNzSZuRnhkjGi8ZQFPuUnzueaBFLqe8gZkvV4pZHvuqfYXU8rSf9h7mzRG8mtYiMYiWMVzXz4GucV",
  "key13": "4yiyFCH8Zv8Sk3NCYMYHiJsJE48suH774hgSo4UPXYQ8ryk2SpN5rpQhHrxnyTYPYaG7fYpaD6hMYBLsD32JJqGz",
  "key14": "5pvBu8rDxYLy7V92GnLrHay5HWwmQU1qtKZJ5BAvZXAj9VLcMGT5hBecwLSHyPzXbtFtiPfHyoEyVM3CcxaiPDq5",
  "key15": "4FbKnKTYZd17tWWt6PNaaMoP98ZRLtZ5f8qkyG3tgEyamxBm4ifd3AVwQMRZNRKBbjqEhJas4gpfT3cMQ2EAeZWg",
  "key16": "5p9rocQoAYFkGHaYpb63pL4JuVhoFRTtonA9GeusQG8xvwakK3icW45dTejq5zBM9AaoKgbthSNNvkhRHsAf2bNd",
  "key17": "5PCPdPEzQMiGzvRrHkwKnhYKmKhPvj6LNciaNbiDeqotWqrezDv5KDtU4J1vEunsS5o1mg51QWmioo64yQFPQhw3",
  "key18": "g9bA6ticiYuneeXL265peLM4hseShFyNST55NVQYGZD8dWVF8TStUDsgmvsd8SKRTtByBJ1rhieu1ZaWVcKtdDX",
  "key19": "2mDAQFef2UvVXT8eDpW3fkoNcMvtLsuHhRun4BEaJLipULmqbwZwbNpn6U4fQBmELCbD5RTGcsEXmTc2AC1XU7um",
  "key20": "54Y265eVLkG6cfa7SdQCKckb7eaeF1AuLhcsgmEKWD8qdF317igE5bCrcpafCHZcSYrG5JhKu9kwWWiarX7jXLfx",
  "key21": "4WQptjvxNzGZ9iU7t7XmT5qndH4TEggPucy4YjkudCtHgGDesEpBA89NU5WJLQJWS14CcMbCcM5NUBJVocZhwCxc",
  "key22": "4fDPk8VoWFm4YzaFzJHgU3pRiASMLqGjqLhtaGDDYJY9YEV1UMujVJFjRuVexE6odZfp3EohuGYgNupj6e4Xt4vQ",
  "key23": "3AxXsnWcAx9wjBo2eLhMKbvKyWzWPmcNNTmzCbgbvaj5R7AQXRRz2i7kqFK9h7L9aFZrWZvgZcZ54VaqTsPzmoZM",
  "key24": "4Fr5ipuzMULKWwFhYn5jkqigFXVbanpivBgM7ym3XZ7DnQyvGevAi9rYPDKDsboTqMd35QhyKPHTcTT3xtjZ6nx5",
  "key25": "2tfdZCFqVYh13EX9jTLm7aKQgQzZJgWkFtRhYTUJrX9Zcuvrdhhxgjjj82EKyyUAenAhYMjfRqKGFatMUA9sRdye",
  "key26": "2tYU4cAfNhvVke63yQVcDX1xAKJT5wt1WgdSiT1f4Fzss7x8rzFqn2XeRNecQUXw6vfwpUJz1tjUSvwXSAebZZAx",
  "key27": "5fhVmJi8bomXohLoLc4APvw678tUa162ZhDb6RGAWFxxEeHbM4JhPxEmnXQMpN3TsoztZ7dfHiq8S9Z8fTHqcSH6",
  "key28": "4pg8rGywFYiuucQgBHa6cYLmHrGAxwADegUMoshy4wiHS2AL7L4ZeCxWXBjur2qrqmCVj7oYbYR11aqoTULMXNDz",
  "key29": "scnUKMowJsvo2PUP8yuQm9NpwCuysk3pyYEy7BhqXHpHT2ssDN7tS9fTaMbZmsp9bey6hdVeN1MboZRGpmVkrYV",
  "key30": "4RUav6cB18kUwXnAMvpPKiGq15wtTHtik7cG5arevnr7nzyzdcHbuBxvKX26rxQMVAz2QNqkkkXERhkmXCAexWVd",
  "key31": "3jpHT5Mno2wAoBnRkkAhaQByMf6KzdNqN1Fi9TLHEHq3c1LfBEwoPvJ7WJqX3Gd1j6mamkZY5CfttT4sJsFezvr1",
  "key32": "474BgFZHhNNyKG6GjwSaEszQnHUZWzix4pWizGQ2onF3dd2Gj5ovjxuGM6AupX4jVunsUx5r8SXtnqB7QpiujBPV",
  "key33": "55megE9vx1JXG3r91j7CzxX4oC88gV9q44wedY4CUsoTX4ZiuCMsbvxSsCp7eLaoiJg65qDboSm8gCPsPnFfrvEm",
  "key34": "2ajYU34XdNHdRygLsFDdr594AAuTPNXiueP2DVd4TysVFxomgsZUi7xed92FmodRZrW2yonU4k5TZ1oK2LGe9Cy4",
  "key35": "uU49jcopaVNxuNHNUCerKCiF9gzPSNLJXHKVwGJLUGxGGa4Lhhjt5eerLeJLN9Ry7WsP1tL8fTEnThGMT2gFbVd",
  "key36": "5SrNECBHgdtfNFkHkmHJV5FsELuFcKgDHKab1StgAmqgiNKtyKXdZJjw8rMqxf7omzDNwaGzyf3Q2XRdhgzExWgT",
  "key37": "2ZUaXRCcqcMFu6bgAWBHQwgNwXynjAPtgyRDg13RJpaQKERkhMrfNoxsAfft2ETHLXyw5GpV4SzqMAypYVpVFCrr",
  "key38": "3qFC6SvFRJnG5SBMTgF4VJJmXxZ5qjy11wLnKSMGvSVQgpQq3fGr1uJ1fD4niPqQQE2xfDYXByPuMK7yXWDLZgyp"
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
