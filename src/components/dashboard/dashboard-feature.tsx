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
    "s2citpHmN5nSPva8PFMBDW2HyqZKhYHZCDtWkSy2os9Nvo7TuE6RyB62Y8ZMiFVAZYbQRstedYmtgudmLRu4rFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYUKEFvLwegv9sMWJdpUWnjJwdZEM9N1Yr7MrtfTGCugjxt6QPZtLuPBqrJh9oSwUHo5mAdZ58gs48aSr1SZawW",
  "key1": "4i2vTzL4a1fZWNd4swM6ayVfryhkTb338CYYdHSb8cqcVreguB9JhbXUwHACVQwcgcQByDVcJgDkv9iH8AEzHNzE",
  "key2": "4by2fx7c7u29ynm6DckAtog3cv2fC3F2btcxvkhyiMCwoApU8UKmqNUjr8fFSKyKVneyDgSuS2sYE4wqXC1PjVJ5",
  "key3": "Uax8BUZzK9oRQ6x1rZVGUZexUWUygNPRUrgMtk7XuWgx3rxqKectE8xtGH3b5f8rG7FpLMSEgPpDX6MvDc7Au25",
  "key4": "2Y3Up6t8DzeNCxR15PoTb3kwrdLNY1fQJhcskLdvbrHU1XGuKixW65pWK75E4JJiowfjytfWHuPfj9Zho8DixTA8",
  "key5": "48LV4cyQumm46dVVTGADkfsjTv56f8Dmd4a5H1QqxFLKKKKUe5vAvSntJSvxbbj9uWCFb5juu8uCUs1fsNTANc76",
  "key6": "hBSstL4Yq1Vf6ECM8GfQ9vzCfeFPepguKgwQonCFuLsL2tQJTg2QEmHmccTGPkhHeST3kYBGv3bkp4FvyJyjUxr",
  "key7": "55jNoiVst9Yb41YnuTxBRNqN4YxC4S26THBPm2qJJrudZNE9aJM14wwWAJByH7Wb9wYDMfLyZKT4q6WFm7jbk914",
  "key8": "3aXG7hA3DMNfPGR3xvXj8gkwQLxJxPJ2rwpcgMqYafSR8Un5rW6YqtEu4KTcPYcJh9gr8y3RMeTx2dQXd6tjyFcd",
  "key9": "3mxNEHCZ1wSqGYtcGkqmWUsc1NQ3c7oSYCuYXZ9sGbg6Jc393wsRrENkk7EqVhFJzU7MXL2ZBiKNcBFey8Y9hVs3",
  "key10": "6jVzHx85t7VY4xCNm7sYe3TdBpGriB1im3wNfkgRfUaGQZXPEoECHHBy8GvDNFuR77dLcbo7rkW149XSBx7ENNB",
  "key11": "4dDYbKVVGJWRbuVWrCSnMi2SCRHMYhBojViGJNDnVXdgRA2FZo5fujMdzN5rKtA8Gm2P6g9EQiF4WKHMRXUxCeyM",
  "key12": "4hRrwcVhFKKp4dzHyr2ww1NTyCbfa7zc9aCWGkhSKQ1hUeMKH6xFkEXXwefAZjx11385HeAESLYa63BWFgztKaiX",
  "key13": "2f5dqrQppDBgSxnz72p82tZZqoCcT37AkCGqcaYQ81uHxy42nRHMsjeiWizy2XoWuLYR6v5AHVkFy4WWktAPiETA",
  "key14": "2UbxjXk8QhHvRE1AwPLCq3KoskmTaZvBvSSdqYjH5D5haNm4YcJNDBFkMnCZXYg1AMYX3giYYw7RcShYeUaNzqfn",
  "key15": "28Y4PWKTpXsxeA95ReuwVEEiBhUw5v4rMwADTDRnC57cHDMYgngkcpE1Yf6K5ZXRuu3aft5ysHwxRCREsHpyfiEp",
  "key16": "4AzmiieXvb1JM6GBdbBqy2KKfm6xpc1zNdYPncQWof2rdQwmsCFXxuVChkBCpuzNGqD5ZiyEaLkrq4yMaSxTuYPn",
  "key17": "5oG1LzBGASkcKXRovbGh7deNzuLW4SUb5DwqwQSFaFo6uXzccoVM9VPFj6ko9h35JMdopbAjVQnrtXj3yoeSnxWV",
  "key18": "2CEnijUuy3fYFHwTK3DkZymXkAXrHGjnSm7CS1RhXpwfpKNWX7v44YWhr6EjbRfpQLwL2McFmW8vnry8bhpP9zKw",
  "key19": "61yXs8JhGb7pmZcWqhVuX8VuCc5L2obhB8Y2iYCQW4fQHkTm6xThSv9Jd61eeYTjA7jjQPv7wcBRg9SF6v1tKeY8",
  "key20": "5nDfeMdH1xE5Ltu15SVhWh4NMdThWgRZA9sUgPExmbBHE3uhM1EsdqTm3dLtG6We6FCqcfhJxj2bHU31QBL1Nhbf",
  "key21": "2b81svpm8appxtjZvtxpofHta52VaxkYj1DzjW3ncncJZjdBMMFvcMTUcAcsYmiAcxXyx9EfWM2TWLRfKitAdNuP",
  "key22": "tHyK9c7YMSdsQadBVa7Ntu6At2VgKGaDfQU8jpNMhLzcLz8WKwrtiDPcrvf66Lp4F75fb35wRyhPhm3gXVY4ryy",
  "key23": "2XTbPausZdPNbqpjzNQ3wfo2nSjmhaGuznBNjtyBQikvQUNdBavTnAXiNmZ7KQKXHKyb5EWqTtZEHeDMpnTntDFj",
  "key24": "5ftJP6w6BMcAs152JwnZBy11TCsJ67dHuzfbaV5rJmhV9WpEK7NR29MFP6ZoMUTMTs7ZtBoLmjSoEMorVpYkS5Fz",
  "key25": "VLp9KiEhfLBiW4jvAWJWpfL4QEsHXDrSkpYJx4yxrtJLpVfrucvZqMf89mHwPaUcEpSrRv5dFWFzLcKwm3bKrTb",
  "key26": "5R54vAoyXUKME4FYGJMFjCwxJRrsYtVk1TuoEdkLFRa76y2Lwgeodh7dcxdz3Yo4gChRtzkZ93CxJygun9Vpe9wd",
  "key27": "5addqn35c3D9sPcQSC2NcKUWBVUaBJXhaHEM7DCSTY9xx6TyhcXm7HZK22QyFUZjapHA9qfjhA9J741g3EL8ULF7",
  "key28": "KEWQoZCtdufadLL5bFh8c6MGQ5CsZc2rghV3eNDP7LGhK8beywPRJnjGFG6TrjjVs2SB8mHSV4D2jhFtnQa2u2q"
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
