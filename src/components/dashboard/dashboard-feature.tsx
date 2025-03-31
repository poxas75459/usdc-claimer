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
    "4kPNxincmzjzK9jRrJVfHNunL8fzt5TVwU8gxinHSWavqDbeyYbVeafkMG5QispeM4ZQDyStMK2o2DK4zbZK5XVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCeGmoc6CgwWbcQmW4aWUzbGBdSzGNRwJYQ5no2ppNDeCcCrLEFp3Cc7Qq3VuhhLzmj7dWVRVouBHWKoMvwtAeb",
  "key1": "sp37FEmccCTS4UoAX6Gi5qvvL8f8RMJqMz12tACL9MRM2AhcJ58UKTAKvDcUABW5vGXNLXAGXyVb1Wz11yfSUYv",
  "key2": "5BibW68xqr1ufZfmaabAYS3nhs6B7ENMu7MD2mnbhqAVrHEBq7C6xno2qVdVEfCibqSbY1xv9CzRqkkmLLp9wECW",
  "key3": "2XoRdHGzMb2c6bTGs6oyttQok8So53Qsp3jPv4bHPuLU62C54iMSdWccQuTMaGs5RKqxDijPr6SmqwLpZBwWwk6P",
  "key4": "4gZ4mNGg59pkLKaoG1Uokj1To1TCNhoMxKw65v3oQawy3rHFXSJiSveZW26T66zsmSmxN59HkCDgiyZxSpHUXrjM",
  "key5": "5jMWR4Vnv1Dsqow9SesVv6SabwSnE7vfcKGTNR7p3Rh2U27UDyAnUjVZqZvbcF1HZoq7T6sJdzwc8hQ6EamBjnXH",
  "key6": "521dghdbhzo9Fy4xCg4rPfomuhmB9zLu8xMTqC96CMnSxbiPkPGma3h4fPwMwbUaLzEYFPy9EDXL3cBR1jQ613S5",
  "key7": "433aXvmoD1eRigKYrPKSQ5KkhEHMYALHiYE4VSygCydcNU7V7dpYS5VnASt2LZk4ahxhCfGc5okM1NbiiMEgLjCN",
  "key8": "5aNqDBCbtoDu3YfL3uDUtKQfx7ueB39eeWjEKp24v3wKo15a4wPZhxnnkU71odDNRa85rQkxpmdQudssDRFs1iEE",
  "key9": "5GtAifrt1wLmGoNc8Y7cFDcDucqWcLUrYQZCG9GAzFxd9ZEXkgCbYwwUXdt6FmMTj3qm9VfArou61DUiYhxG5LAz",
  "key10": "NWDHi93sCJnQPtXEXrLvgy2bMVQzmj5zdH2ijLetXwsd7WHz6coNAk6LXRevmmui8tYxX8UcHFnWaA1eQDCz6FQ",
  "key11": "menruq26XdD9Av2Xt8HA8imtV3iD3vg2Wn1qUYLiL63wJo3jkwsojQkYMKN2BXLnKTmamMv8w9nJYu39kFqhksy",
  "key12": "hw5nNPzwDL2uFXMHStDWQa1UQmrC21Xz3gwNg4gkBk2LAJTdSRoxeXH4NwaLwabte4xRQttD4Q2GEhbdRQwkgEW",
  "key13": "2uWSkyxJM7ygR4N98t1yuCJX8agypmrkk7ncQDPM8nTQSn9Zd97auHjaXZyzHqrHPkENbtsbcdBrXfuRP1q6C3VU",
  "key14": "2RTp9czqLe8e4gimEZFqQzuSPVLEkyo9cfN7NWBb6X7vYFHM9DYHNgsMeKFf1vmzpm8J9J8J61mbrApVi98KhkW7",
  "key15": "4oQWq5K9K9xcnpe3NphtF6LCYxjP3iKi38bkz58MNBqee72uwr5rb9og9zM5LpBgDgqiWkX5cwvGQFuicvieVvv3",
  "key16": "4b8rWrXxGMAV2KzKBZUFoQuX9fB592e8vR7LAPHVeV6ba86Uy42PUou7M5SSEqWVtTqLEGEhgrjLAgfbm96b9gXV",
  "key17": "3VWf2yj59APipkdqRp4oRVimVq1faQofTL37qWT9zGZ9FZGgnUuoyvcVVUVRCha9k7LTDJJ5B1iAXuEqWqAmSWo1",
  "key18": "2wbJsh9YYQBmsFgxHgxTp2Vs5Ga5J1auiwSUujkdwFbznVtyJVV4iAdxAtkBZn7RCpGbdbuXtBmuWxrgm2cne2QR",
  "key19": "2rrtWVoxG9qWScR4SUnLaV7jGc1QkFbxFEAyV4b7WfY76p98FvcToTCCXjysKMrDxCy1NEZBEuH7mZhjEHNzPoqo",
  "key20": "3VTTahBeipfygYCiL1yfkp5XW4crut1uubDP7wGdXuBHgFoXwgiVPvZSEmyq5hCFauKoaFBMtDKD5zR5oddcve6D",
  "key21": "3HG3ihXG2BauAPXWsuZb3S9iLzV4eQZFLAVCaPBPuJw29ghEoRB1EBZXznzFKCsZ4gMvkvt5snGDgiLgZoA6uPMR",
  "key22": "thMLTSDRKU65LkPoKb6gTMRsTsfiEydFj5zt6bXpw73Rjy9eVzNB7ShL3X3tCw4dgVkfiHf3R91ZZmmuYs31asY",
  "key23": "26N9PfCh81NPj8DwzoJKdD9NhdnS8J2BAiGq68k5mgPjpcD7Dd4vHtohwVnRQUjP6ek2yDJ7F2RHR8NkaG4SiTSv",
  "key24": "3j6zz257USx5DKWvgRT4YW5kSzsKVo3jrefpFF9kY6588U8bzvsGHaEUjfYvBh2kxo54k8xzKwzZgZ8hPCjnzzGb",
  "key25": "2MdQFfQp9F2Doh5HWZMB6553uLPt2hwzhrovXHezNyW8npdeaKwmBQCKwRXmegKZ458TA7QCKF7sYjvDjcAAmfE4",
  "key26": "4WpCCHnkpReBWR7cdUBBPPg2kWywp9oq2pvRDEJNMRAWf6yvV8qj3K6RdMJ6sym3qvjZibx12zRKsc2BJQRZfRbW",
  "key27": "3ujjqv2hM7veqZbF9Kci1HrMKdzSXf7CuTpW72WThxrXBaqu8k9RiwjA9QLzDnpZZpcSTMrDNfUztpNpQ82myqMb",
  "key28": "opoQTsfM5TjtyxF4nvrdAnHDko3Ywcei2Ve7tJiRwuizbhN3up6MUZXQLz7oeQwXVoeNL6dQqS6zDHkTfrRTRBJ",
  "key29": "2qzJUUgDDSU8gnzxiWDV9C5Ex5ccCqQdpg1FQX1f8xdnCn1HMfup4MPu5cHjRc3nHvuwih1PBKieTogAaCy9TPFd",
  "key30": "4gh3ZsvDDkcwCA8suGSbuk7VpxQ925wK7Sia4Z1zWNeznn7VtDMiX8L5gBjR2pSe3c5No5eUXS9ViHo3MVdpMWUP",
  "key31": "3RDzBuGLCTU378dzfJk5mZ9nGoRiYdS76rQ4mXSVrhHgyAdwJHTpwcnZXAB7RKdXt3TDNTXiEX53N2kXCC2u437h",
  "key32": "2mXoKYwGCQXe4PM9w4EYj8vKRz17uWWkk8zMkVuUBDVxpxkPmxiTvmz78dtn3cK54kc1KBMsNNvJxb3AsZMwBqFh",
  "key33": "2wM5Jo1WPxdiEom6qf3EkKp76TPpp3SR6SqHCPw9f7w424e5wa7x6Mr8ezjCfXFxKDDjrRbahBp9tPTTmsUMLNFX",
  "key34": "gk1DcjmNepK2HFht1cG4ZyESj84rqu4471wzHR9PWxiSuG7MMHU9mzAuxD28mHbuMwXtzYQ74vKjZLm33pwcL1v",
  "key35": "5WX1eTfx4Gui9tWjiyxh4n5FbaqFXJyEwNvNY4Eqg1bciibZHTbzaQik74ePQorWh6pbCTN5ENk8qh811DWuqZmF",
  "key36": "EqRCU13ampxpHxXaPbDgaxWXUzbKLQGDaytTq7hzjx7KRWfqs8xVCPyVCnXMzftRVwC4aSRRvD1esVFFy54BcaH",
  "key37": "2Q2eLseT7qfDHPkqePohQB8ipXjuVf8odVM1RPrrZ5BMFL8PyYmmTgnPmdmE1Hd2ofgJVjE3igYcXoCF6yF9nXdX",
  "key38": "45ZnBb3fUbFbfveAdem5mbQesdj4RvmU5o9E3ifmSY27Wxy2a2CZqrbYvKieyR4Zd28pcn1jLpJu7VGpRg52qDDN",
  "key39": "4z7f69D1B44EXqWY6NJxvqTXhPdpUpk63jcnExdsGtDguZ8gTiFC4LuAHJHk4W4nVEkUV6MvB3BcEXKSCa5Zvs51"
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
