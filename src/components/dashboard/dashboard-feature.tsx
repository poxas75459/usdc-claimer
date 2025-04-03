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
    "yqaVTDMM5DXRGaLVXeZB2eQTB9fJmAmQKnegy5ALSZUuqqDbMn4ssrBgo1cKvHpw6HCUEw8XbKekDcPqXoYEera"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zh9pqipaFbKSBL1M9Sq4K8FYMMW8tKoiDpEJqbYA1rgjA6YWp45mDNnVVtdQfZQe9JYBpps6LZqtdUsgzQHpYj2",
  "key1": "5zCy7HRtiWU21X2mmrGTZUJTNnbhn14u1kDHemB64fxwciN2GzZeuV4srPcJZWz9bXDwP8zRj2xymNrrxoF8wYaV",
  "key2": "5T53wkQBmiE8c7KjtX8N6DJtv39hihaq4ZGZSXZAh1Xfuagr2JZH8WrV3HDdsy1nCnSccMA34XDQdEgBU2yrPqLa",
  "key3": "5TGRYh4NjeKFVwkRmeMsTNGVN9FLM9sEcNkut9PWVXSjpbzkdHBdX93m7kmDnp6iEFeCSKgkTqvcpv6Tbn7GM5eC",
  "key4": "5khADmykP7Ax74w7SDZm2R2ejv4CyBPxiCwk9UXMFUfUKqYzW7qysSgnuUhhqQ2Y7pkwx9e94rbQocT819AiSNqm",
  "key5": "2x1o7pFSzKSkM8StQ53QMurQoxp2fuW6xMQfp3okG3227uoMV7xx4Hqgis9SM6CxewJUHbZHtqbq1M3CUcHRH72V",
  "key6": "59h6PtDHskPWTphun1vQsK6EreDP9PW6LgWnYco5g7DTuMGfAuVpCFZr6g625DcYSgWDW1ZTRWNGvzBiBNvKRKf2",
  "key7": "2yZJmwEMWerhTbyzv6QsQSGgApT6LzkRzCfh5EWcymKyFw3PVNErsv2Whx7TLbAB8zY3ZHzgXQMdbcFqMRutoyc5",
  "key8": "MYUmd4rMbcaQZaDwpHP13C3Cx7wuWYHhutJB7JyVrVz6vJ8foUpQnHrtYqyrYmzp4qfWPp4YWsjKSXjatWwSVjW",
  "key9": "39T3TApBNepfcMaUpFgc64sQ3R366vBk1ZS5hrs8ce6quJyJVfJf3dDwBUKEVTpMV6m1VfHhvdUsEft2Jv2yRYHp",
  "key10": "2LmA5HT7hu3qBPTQoTEXMqRp8B2GVVfKqhyHGffXSMqgq9nupjP5e1ghUYUsNzBqXxsstTdop7g7MJMneURD1gaj",
  "key11": "2tSq1Ze7kdbNH8HuGZ3tkibtL5DQqYsYamVgTYDJ6wCFgiNVjtRwQ9HKVkrvBvVfNATGUJNDByVSkCw295C65ZTo",
  "key12": "3AAgd5NXWR5Z9aHmfTuTXnfDoqeUrcy1vQiei7aeWNmWvmYExriFUHQMUX9o1TzUTkyjHBLtrEKRNiax8FmJsv6G",
  "key13": "5eNpFMWqE9piDHXTpikGLGHNYLGDNJ8qRbzarsPFG3MnJLWYYhX9B7C151oQBomr9gCtj8GPj36pKBEQLUkMeq44",
  "key14": "54y2PZgpttJKgkkVadZcVdMAmrR4oyfaUpXBs1mCap7HSzZDzzwRdnro9dLhmPYAdBZEvg5mCKfwSriqLYYNunbF",
  "key15": "WHVVZrtdwyTtDJbd5GjbowR43Q7VNhsMHK1od2fSsNE4aUkNeB16KVmf2ZsVBR6RZxt3aHEroAbg1vPJhk3G4B7",
  "key16": "5FE8vdiTS9rvB8H1RvY5KNYDL4hdayrRjq5tf8EUDm5p1L6dvA8g1Wvn4MPhVekvVSxfm3GAM8ZsJyyGqDoJD5eM",
  "key17": "PZc2TTxP8Pqh8QBkNK4iA9q4k3UpzVxYkEye6WM14jCYyTbQjukeDmmBTXXYrYW4XhXEwnhrsx6GmhStxzd44Xp",
  "key18": "gJvP1DtvFNgRpXDE9mcHLBZdF5UoHV8zVifHQYxz6m1HLo6GB4MXmnMobuYCzJ1RfHTr2BW8FE4hw73fLZFmJQk",
  "key19": "58B2dV7qMasX4AAKpCrfNbtCwoSZkVeYjKSrpoAbyyJpdGWjCvcYc7kTGBT3tPgT3eMFY8ECpu8xeEHAaXWAH8qo",
  "key20": "2WYngP3dwZVKaE61XxR8TDqKALtPP8cYB6qiwMqUA4BwJacv6fwVxToENgRwWCS2EGQTSN8MiDFB4x9ZKY6E9E3G",
  "key21": "3YS7v5bocfZdwNHJkckeegh4AybnAiiTozvmvRYsu3vV2eQUaZo74Fy1A2ekexuubfwKDXUB33ncdkDpRtYrqEkn",
  "key22": "4YV7gVqioRPbwDa1Uqp3wfBBzhF4ZSy5vTZpj6vjeGGBXp2gucQQwpozpMwBp2Ecu4nxyUMGvSYZHMdLSgdHxWut",
  "key23": "4qMPHwhfA14A2YzJFRJ73onpgPLUk229ssstDrVeA1CMhM9Ddf9VEwkG8CYdAtuPd2LJDvYUuBLj49i9kPLZVRgi",
  "key24": "2X8bjkKe52Ko5GQdKqXe7FudAs3CHEAsoBSpDAU5oGhnS3UmZgJjgU1RHbhUk6kmNqpCBUU7dasM1mi4aJNM6L7a",
  "key25": "57rw2h3Y6ZFbvpAw4AkDFLeSQ6tQadN9mD6tHK3Pnb66hpAQCCgMnZ32UBHYnTCa2YLXvbzwNNFSXqmLo4Utnysp",
  "key26": "31Sk2sd5YknNUmGxF9b1pBzLQrHhLYsTqyForxgHm9cCSrCLoDVqA9HGe8o5JsUxwyryFYTwDxAe47zDfHcQLgoB",
  "key27": "4e7dHfs3CH8oitBKzUhuyLmh2vNN1mtK2NY7938EPiuEDayLEFAhNnkCwhVouPJuz9wJoagKxUZtPYzdQyGR7vvi",
  "key28": "4QoofNuqFZ3LzgXAFrhW3cGXkshEKjtPEjxEqhie2YVqWRGqk9uaPKKXTjJWx96favvuia9zdrc8ENYarqPj1Dq",
  "key29": "qDt4sakA3keAkWZVjPG3FeCwmrLpBkAHMrxiQnY5t4VR1AwgSwGperU7Bqxtyoko8TVdEgU5NCoujKwnRKd6Sky"
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
