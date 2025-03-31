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
    "5ZxBw6VwM7edGFehJKfBjH3BWCNymmfiskxGkA5pxLQWFygLtxwG4yhQ1CpvnVGm4omdvAV1ehvGx2b1eXDHJHsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jej84HKD6ZvzMbxRvv69ubqNC6EgWRcZ8M7o6qdERppiY5s2C5QAQqi9VC3sN5QdjgoxV2DTJZjPBGmBpMtu8vm",
  "key1": "3jkPoBaVh1r9dYzHrwx25VbFsV78BfbQ5R478Egrw7RsMwb41rszm9M7o2xbVWynwkfEtrDHrcoSmkXZMAx8bJn4",
  "key2": "4VZWCJsNhGa3LS8JuycMrNjbEq7ave1gAQ26M6sVLrLFybSgXnAi5wQNRjyK3qGVbvWkpCN2z7xAZCDUd21Dq2j3",
  "key3": "4pZq9yuHjM6KqyJHth4VhLXx1BeaxYe9HbYCZZzXvDTtivibThbbaQxP9DieF4a8wrgaybgwcV4LPEQqh7KKjBCD",
  "key4": "4ydKZJVyRdvkB5pJoUdHS3v4y5WXPN4BL9tJ5xpjYoWjqLyNfua2AvkciCsbASs5rC7vWtwNi3rTQFPEbe8fN4Rx",
  "key5": "2hn1H3g5tYgdUS3WnSFpAcRkx3GfRybk2UJWftxKKas5L4DhWFzM2gWf6UAwZ2xQ7YFLcBYkcvjdWkkXoiVne24p",
  "key6": "2dJgV7DkGyDKmRwC7WwdmVbagkSih2PJES1FM8zp7VG3add6tjMWHRdVugz3LtRLFnMEshwbxgSs5NSu6692jzv9",
  "key7": "5SJrtDJn7NmxoAGdmxLNRx7iq7MNNZLcCR9YA7EFMcbpzKnEjNXDuAheaxyHBsHSRy4wEjYZ3np6YXawF9aVNcfr",
  "key8": "3StBdppUbGzGeMkH9qNACmVwifzLMdHjSHS4x9Urrx26RdVg3i5iK5WhoLoGYwoUxovxU8k3SSwAXaesuoLnjDn9",
  "key9": "46G6cTL8PtGmZPBeZE26dZihbMK66DTxtr84LHw1rxLyHAgDXXoi6iLAqcUfB8Q6XAytKHEibV7PUVY8rRFU1HPX",
  "key10": "27g8C3PpNhEgo8o69mZGnGCewsjVhTVzGBWzk5H4PqGyy94aXDQHjkVFruhuVJZQwgT9NYTU6oNiHmyPyZ15d3LT",
  "key11": "5GBfiLpkvetXmJw1vDjsExzLkYjrrHdeUycY2wXLJCLFsrvkXctFiXaKdpMBwYe24GENCcvGCHZoNnun49GH2mhe",
  "key12": "Bm79QfSzEhTLFgZmA5cqx8EM8tscE6P4cF3yBG9X1AcgNepWqQjtXSMDWeYTc3F1NeetfCSLH3aNoVJ4D7425dW",
  "key13": "4NGAuovXwEd4jM3JLXfUHMWimn2aX7TRiD39hh5fdgVRHi4nqYYJfgqtLdeQ9Sc7WRgFjVb9zXEE5ZMXiJGUZz4Q",
  "key14": "4ouLdx9yr5Ts2M6KGWKWzCPnhjYXXmkSRuDFfkgQXs5PP865nZrzrDqB7HDuFLSiyifLyPN58NGoWv1dSHTfgV8Z",
  "key15": "K7CMdUnCUBGzyj3ZnqaeFiEPR7aC67yqKLg4uNibn4w1BFviDuxQMNker9oDnEP6g6DAaCt3gwimbBUgqvpzxin",
  "key16": "26bdRpAyALNHoaW4jYgAqGEiC1ALAUnCMoWvyeWZ66hwUwW3ojs6nGzaP55XEnzeqU7ZL17Vm3f6rMFiiFR19oNN",
  "key17": "WT4e7kNqwvjTAUursh9DsjoAtiFFRcoLK8pnnwRQnS7ZvfnB4koKNzHfbvn3wKjsUu9UMgjBTeDfshiibna24yu",
  "key18": "3nNrLdzvoY3n6fEUE2VDq8S4JopJ617fwoSeHnccHBuvX5G6wAk1angPLwNkwLMefPJsjJ2E8tJBEM3JWU1oyVei",
  "key19": "2zyUCehP1J76FY8GReqLLTTErvQ488P5r3419jnQu6oveEQ3CZe85fHaLfySrmbz3hW5CJaRpsSCyiJBvF3y7CQK",
  "key20": "67JMyFJp7WUyv3YSdqbgsZ237q8JqDWBRJFiHXxZFS42KyVdjrcwxq2T67VJuBFggZTZ1t67VeDBoqqcS71RHoEu",
  "key21": "5KrwqaUySDVimEiWaxEsNEY7YM8vRm43qnzp1xHsroXACdTKZFggUcw4e2uT3fsGrzmhSa4EpQzx8B5d7Up49bMi",
  "key22": "625ybc2SXQRLWQ4bBkCqKeXEfMCnbSxDzSW4WkNc1UZyEVdhxLs1FG7B4e8wEm8PzTFfWEvnw5oRNqSwNUxmYr41",
  "key23": "5ct8JC2AUN8EYXXrSkrD6dFJ8AwmzN8TZb8NjWRbFRu7gq5J6jvaUWLyN7Qc5Kem39qoGodXJ9sXJoRafDLqTpQi",
  "key24": "3padYYE2Yj6t8DqQV7TPHFwyT6ggcdSUAk49sgnnkJL3UXb9SmtyFLEfpVnBfrT8PSqFRFcmxVsh1edU5jQheCLo",
  "key25": "36XhQEuZu6zMdks5hpnAveJGQ1xyvNKLiVZdpMfjJKNTFpYSEcScJUwGeBUtVZBRwr5TkQ9ZT37QiWaEqibg6o7r",
  "key26": "4rEiDRgTYPv3wo8nKEm6xxHs1iEjrFBzjGM4um7qx181cYEhuKE9SRhNLT3jYAMUxFW6fnD6T3SUqS62NpeUr37D",
  "key27": "2tTwQSa7Y2QbCfTMUNyPpwxnTP9uhYmtmYp3YFMz8q5bhty3UBkjd4n9SYb23wSqxJBkHTV7PtkqRJeMkSiN6KCg",
  "key28": "pSGqU3WLUs4gdc5nJ5YxDxq7CP2VVFWnVbZyMC3mq977JqqrLjTRqdaJPzc3onC7XXm9WU35SThcyr9dyVir6XP",
  "key29": "2DgPgvDsTSc6URKJn3m5ynzF5y2cJuzNX1GHgvd2NDw7sqpR9jLKvh1goo8sMvQmA7X4rztHNrSDcBTwwXeHKFRL",
  "key30": "33jb5LgUAEA1ATcs9gnYqRiWzwA3nsKK7TjR2Tk7Fyigeko8mUWPqqLb2m1muzGVMPgqp4woUXnNuVtXUCZSC8uR",
  "key31": "3DUkX11a9FrRop9mPpuBy4Go3U667a8jT1fzKkxkmm4zFkPBBFQsDuVZWAUUmsS9Pef3jTjibTuZrYgxK83NnhvF",
  "key32": "3vmdFJcYbp73RvNvTu1sksRzFc2FDYxvkW3hsJAvVSUq9srBw9P59tL583ncG6fkTRo4b2h4ScmCsiZua2gL36Mw",
  "key33": "CPBNK9Ee48YVrxS1yB1y2RiPaJvjtM27vM218gqwCiWqvmpuAHW2c5bciHExMdBePRye5fuvRfuxq5uaV8FpuD1",
  "key34": "38tbE3RsXcXKjpFr1DkUrvdTGXB3txN68qt7n2GrsSJrbVWNZJhuLZxWfFhvbDeM6s1jL5wUSxtRNo2yQ4Ad5tjA",
  "key35": "4CCMdShKXEwbehYKPh7QsLHEHtqbRaSWj7bhFSe3z77gZRj5WtyALqhaLsLyfwwcCH8BJRiArwZYRmMacYfuYVZf",
  "key36": "4A1UtBS6tuyaDBAgGxWh6pdRYsYizy5Gyuzqbnf6meomdJTboHMSYM8xED8Sh9S2iRsVgR3ySRynuaEG2KA8EGkn",
  "key37": "5LeiSPmoDZXNzGqjS69SEcmcFnFopPYV52eu8BZm6ND7uqmpDBkDJw9SwEA9KiQepodhC4YWQKDtTwwmypFUVfjF",
  "key38": "3ymod8EwMPEho88k4AvfVuKD7kKGoZRKXz4g33waZpLuBBND6mhfr5jyKR7NLKCX6sM5oioTcU7uxJhczY5HWp6a",
  "key39": "51PB1pzBiXhvanmzqHfJC8zZ1hbWg8YHL9Jmih2SQ4NJCPWsZUT1CFbzgKEWvZc159fr5ZZD1t4j3zRg4ynp53XU",
  "key40": "3Ut1EcS2TkQnKzcRvaDa1QRTzRxBsScjcCsVtG4Ft4SMQfQHfBaSmXKwKFyfKzbL6FNCFeEhEMAFDToAMC1BUeNY",
  "key41": "4R25AocDaj9fNK4rui6VB2L5oELkKY1fTwTyjAV9hPbqGu52KxMd2tN7MQLbEEVV3zogatWD7NqaZ9eYJdq2a8Hb",
  "key42": "3NhzbadPZCac8vi7B25rA2J2TZ5tV8AhMxA45mfJYvEjDcrivAsXCCmX6hzrb4unZSnMRpaipCA5ATFBuWWZSv9e",
  "key43": "iP8KKYxQFJ24vsnvt8ESNrfp75SDBPXLvvX9kVthqRMyUc8tKP5boGgo96dQDfivx9nqb5Q7sLsfoA4j8X8BpzT",
  "key44": "3d9YoNDRsHNDRi1ocLriGTbH4xArow4EAsFvuYX5T3w518YYDdQg893M6Hn9chnW61tPoCVgANE1FtkRWwjZvhM8",
  "key45": "2HvQE92Jy9K3KkxUnzSm5FnRk3JW1FJseFKM9kP7FSKGCamttX5KhDm7G3ud2NdMPKRZyVRooJE9ZEm5NuxGGRcj"
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
