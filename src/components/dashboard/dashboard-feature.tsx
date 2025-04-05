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
    "3kf6ZL7qu4jVMcXPLU5nbQgefkWBHUuWcVinjJcNxGCNi1LawkyjeEwBj22BLxLKQ7LYvhHTjQJeqQt7X8aCL1aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLPwfZQuQ9m6TSYigSPp2wKsx2C7s3TzvmSM1yyGA4bVPhCRn5UtguTxSLuGVBUWjs6M1TzAJhgx1trAjsA33mc",
  "key1": "2ZdQLP1Nj1vZj8U9jJuGRffhPQEBBAeMGGqoMuZRqUNwS1nyXgaC4zC45pFFuMDAsRcFW8torCGEUxMo5vrREacw",
  "key2": "TmRPe7mh8f1uk949AQzhduhv47N26M2ypXcY7ugHiTbLNKptYSjbBtaxxRi9j8vmVv4VPL9LhMNGUiowv2WybkE",
  "key3": "5gqpueVtvk3KRBmiu5WNUyBAterYGE7a6NGPDRF7bMvyHFd9aC9BQrVpwqNDS8HqBQGqdMNF2UxzM9dG19cDTgDS",
  "key4": "FAJA8vU95up3JjRnEHoSE8REUcbcBCbc7AFSYB2HbJFasp56BXDUSzyfqjbcECPMUQ3ish7X9XFKsowoHkCVgR7",
  "key5": "56SPVtQ2vmJgvzuBvk9eDDXoSjZpQKvjuiE8ZPNhjkc3jU2QhZGEVrY6ntNasEXBQoKRmXcoqQtFKvMRdUv9JdXg",
  "key6": "Tk8kKzThDEgqk2MB8gM9n3jZ2tX5r1haWerTWzQib7xpF4HoXZjsGUttwAJ5heVpYFjKKYAWGA3pXecFQ2HEiQB",
  "key7": "21QsUoKkzjcuQ6X46csGMtRkv4RCwewsbKYYxBxZ6rBRZkQ9eDMioqeAbbuHVGbEv9Y61fjiYymAePwhgw4QVpZG",
  "key8": "3K2gWxnrxSAAThpQWbtGmbMMYjdF2qX5XmaEFgmjatz641m4AhtQPG6YRWje3mfZoQDUPjekbXMcHQfx8Dy3jxXj",
  "key9": "4cAuzypSH7T3tkR57aRgA6reSZat6bCSuwgGAyvYnwucoXngm85gWfSyEhsKYZ3YK5wW4i5ZW5tTuESRJvpNsamQ",
  "key10": "53GyAQNP6K56tRk6mfmurK5ZFM8qSb1E79XobtpkALNwANckBTPANbVxYZdLKiVmMXjm2SHnVUsmBNekDxa4Z8Wr",
  "key11": "2d2Tw58Zzdg3aFd8vrFgYu8L6iU2j2QUuuzs8eLFZPXFCm4jh64XSbmqeVfZ75LCogW5Men221LQfK4xDVaewR91",
  "key12": "3o6LFxaQKb5RkSdVu4YJHR1Jn3J11JScJbzh9msXU6c4pJeSq6p2iVaAriB3UaHbJkP7sHe2HBKkJoM6ug1icTJU",
  "key13": "3nnh9wcr1T3EBqj7vPVJ7veD39N63qcjvF5JiWqFGS8xL8UTWQ64f7ot5LmgMN8ND4RAnqgFyk9hqhGxr9JkuHWb",
  "key14": "wj4BRYNAuhznxCK58saYc8JRMZvPsiMoQZYb8vkp9qFLzfkrcpAvrNhXgykRiACECtPSagFXq58rmjz6sqViALJ",
  "key15": "3sbFPox6SjuKb8ye2yUj67nN6EDff1pYgR2e4vQ9CFLnDaFK9CEdCtB2KMGAGdKJiBnzajvPvoRaTpuor85mzjV",
  "key16": "5B47qebJbrgt3cBo3QXMRR117TK4Czm8cEQ53TWdMo4XbRbzZgx6W7SSi4bgWFsAwQrG5xgsHSHv1GKVT4ei47Mc",
  "key17": "5FkFpkWJQQinpG37fnfZtsSxecoozdMqRwB59c65kkqqMmMquLTWfGJ15kEvrmDcNMaK3YUiLZFNxnozJ3GVjVQ2",
  "key18": "rBVorihGtbpCYiaYxjvahFqdeYoNfSsiofyjTwsV7zT1PJn23uCoM3qvwH8HQjovjQCgmdR1MtSUh27E24JSnW2",
  "key19": "2svpHgxBFRQ37D2Aofi7BAWaapgHgYzzH2oawmUBdoidwKKNT2AmxyeLtGxHQnqQD1iMmsHcptVsM6tQShY1YKmd",
  "key20": "5HLJvgEGVjHoZcTvuzUpw5dnBmRxZFSBXfYd3kUet7XFL3BAUAhbZHyw7kALRxh5GVRMhjoBNojtXKwwjxSV7Set",
  "key21": "4v2QA4VMoEtbm9NxB3nxRYw7QJaFtu8EzE6TW8FgPYurm7iPqusUbRS2M5Mjt23D2q7M3Hd54e29my8ubaL2hSUv",
  "key22": "3HvJ1VsMoUBTDfBnXQiazJdyZdyhkqSPjQeExQ5kX9um38G6pesZDiGapiGNqwutMaJaGXeXh1WXYrxbFSXGee6D",
  "key23": "2STvRWo6BseNu1pKUrgvzajvkQFSFwtxEdZqpLZMmBckg2rqgMsa8SuHdN5bTBP4xZjKxnMSCSzfLeuS1Mii4zmS",
  "key24": "32i5YeRsuMZScFMvwGQMPa2TTLuX7UNB6K6ptKWRBVQLPgPrhnzJfS9rQL1SvjCwuX9cVmJNX8WffVav4tMehRjX",
  "key25": "4mn58je3p6GRr5BGbhwDK3Rh77hvbjYSEmq4sVGR5Jiq3MKXc7e27tCeJS6EifFc4EXAtnFKfRzSxX5DAg42B1M7",
  "key26": "5Frg1sAy3pdJKT2nuqsr1tCcv8R58D2CPdPL6y1srdsCkRMoGgfZGhuiYibg7FrSW6UsMwhrQVrc8JLvnhr4ks2m",
  "key27": "2gsobftvMXRjkUDNTE4Y3tjQodZAfiHW7JAhsDFzhjqAJDeorME47yFvcc2TaBBzZUStt9MrTuCnA1vHJhx6ZMjd",
  "key28": "5t8XshpBNkH69ESUzZ4wcYLHfxSAvTkSWKwqL3SVLAazHX6FZjUYsHjCPShGhB6fsi99VSNyKgKCuaM7A94uFFqZ",
  "key29": "4qLv8pvQuqrod9Wn1GNVzUFcxHPsaYj24n7sTPYBptDnNamFzVB3iQw24Wu3R89ytxxvxi2eC8ivbJrJtadL1vyW",
  "key30": "3So2MrQVaPDhpLErcxm2UUhdkPJyojYS6e4rmdZFhNKMp64aSzMVqPWkh7fe682BNnVqx76bAQ3myjEccjDRJUnT",
  "key31": "4ZBVEZqW9qHuzsUhVTgUdqepu6w7JbsQ9hUBLMTDg4kakuhcKwv3cwtzupwjXjqvwtFLqWsQD4fXCsLQamWegvfP",
  "key32": "4rtBJ3d18tyc3zaivQBCp736YMHu9wwEgwEzuvwJZSCqv73aEMv4dgpQUXM7xZwB657pCyuGNHivi9CMMHGEvGSM",
  "key33": "4rzhmguApmqY4AamutnPxdxAJX7TxvVFVWAcofFZPswCHDCb1FPFhrERJrDhVn1A3GRq6w2XkbcN26q1rrj38ATq"
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
