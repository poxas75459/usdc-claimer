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
    "3Y9JMPpMmjpjUxym3jmQZ7HbSW1NHmBeop89VbHhH8WNjbw3pRVtGbz4CppA6RPZ1hT193UckJhMYoNevQcw4NxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25EQ91c1P45AkT27kY3eZDJZcnGYWdUnibxHhtxPDXH25RvNthgczgG281hkfM6D6MAKqGoACyGkffqHrCDVvveK",
  "key1": "2geuPvuudReioKRsLZpCD9J1z8xZ8cNSbCoTjRXxEUNKDiVdhSnekb1BNGYLLnqB6QkxFeKRRJeyALXmd6efMj9x",
  "key2": "4DzUWhM7PTA43xfc34rdEpk14YH225mhgqros5hQLKNqaREF1juTtc5zFWkwWK54WZPU7WvunJaBzU85saWw5q8",
  "key3": "59d7QsDUv9LQ66XNkNi4U6YiHDn7DThUxQ2b14tKq7FNG5o791GZBLQmgvYKZhpe8vuCtdnGMeJdNsygjbZ11yrc",
  "key4": "5BcVH6KKsLjtmx3PotcMdNsgRbfKFFEgT5woXTJLNW696xa882aF1DBUP4QpD7PAAFB6rawTSZUkw3Mr3TuxKvXb",
  "key5": "22FVrMrU2e2c2ZRmxUWQ4ezPyGahEKci9nT8uorExTzfqUR8HGNAFksBCgu3svs9DFDftKtcANVs4CP5Y2LxT8Br",
  "key6": "2HHv3uFHQx93WC7iuHSd1X56jYff1pyRmyhpr7esWEwJQBNVxgL29TKzCUL7SZdWkLXqvoi6dhJckAcn3cVu6GZd",
  "key7": "29eeSTeFSu4ynYiRpADTMNwojgR4EaNGgUicdxzpQaudZbHwQHBwQAP3J2snEfedRDHKFv8N1dW4h4XxFgfZoxHH",
  "key8": "Ev5i4RrgnR5ieTRqu2eWwkVcX6i3DWS3ZK9EB1tyx1ypJ78j7ssoR9zZoZA42V4BL9L6ko2KZomfbicPmBz3EL4",
  "key9": "22nSnGcXtdEGuSQrUgBygRBq3VdAvJ3MNPEtyXfuypgdz5f5aKA59pbcQJtF9Q4SR257CYaqFMxkoHpNVLH1iYZh",
  "key10": "2Aag5NiGMXs3x2wYFdKmFRrfXP3n3XcpULojwUL59coWeb76vWsJjWRABmn3j4EP23cXoD6s3ENHa8Reee19PVkj",
  "key11": "5u2stNaTTsHX3GAARWUfdsFjastPencgyFwRKHcpBS7RhP3LQpQt97UaLjuiG8Y63met4KZsosrqJHHJAHJtXiVa",
  "key12": "Ad65PWBPHyYUMyq8wfWDDDssVuLTMdMdtMPDXXbQjwKxX2bwRGGBjzVEquFt4HBZqa2x843HLAVRufGH84WDkEw",
  "key13": "4aLPz66z4BkNEQUJ6yr9gDvVLRZCmfXQ27L5TXNYBqgbnbGT2stGqpLGbwFUDavz9LTaA18Y4jHeuDMSVC18Nj7X",
  "key14": "wewq7EWisWbFjc6JzC9Lak84D9aacS3okMMGx7UXvi7e2ZXim42XPmvpF17oMjPKctGVvYT5BpfcU6rTSGspZVj",
  "key15": "2xqnGPckZXb8WZn5EL6FH4FEfc7sD63AhW78du2N6xNnqJW7FoXeNnFBKyKvAKgC4YtuCsJoQLTRnjVXiBjaGAxk",
  "key16": "21xWmPP4f5ijbGrzVAbSe7HQUTQoRXR6LTiDYQDUr2T88S6vKHndEkRe38syYXrMbjxEwMT6kzZAYBDPFBdGTsqG",
  "key17": "2wSvUQb2RQngf6fEKQKDSNNDeYuGNyWfeCSXrpPafNrAbKoxUwkciyLZmNmSRVHyNqH2RezSw2ZUVPdh3cfmjyyZ",
  "key18": "2TABsXz3tperoFiiT8zLMxZmwKzG2UTMvniEMpPkSUpnwZcRpVZJ7C5vsEHULwXJ3bt3oVajKgo549JKQx9BYEMs",
  "key19": "59CFq2StEbdoh86EKHD5uKTnhust8cpMY7b2aBPPmoVVv5Dfodx3JBcHu8TGB6pQ3uToG8jkAKvkf9NaBHe1f3hx",
  "key20": "3NAuKP1KKKxU1r5KSVfjK3U1Qi5s1J69yuGR6JKmVyZ3nK2tbh8a4vyqcz5eJuiNh76Xp4YG8kW6nYSaRzVEEdQK",
  "key21": "frAhDd4hPBaBSkmGnz6vzjkYdLAP5AibSirdTLwWwxE5AViprLJdArdJXGSjMsfcLCdFBWVnszHAdC7twXL9eRT",
  "key22": "FXb1MGjgWAiw4pZ3GnYmWogMgk7R68jvUbJu6Toa7da75Ski1muGfcYYxLqmLKbogJvDC3RXX1uQAmDpG2Eu1ZJ",
  "key23": "3DrDGZ6Df3PU1zfMG8h2xuwGuvp6FgFUSrJXrLFnyhe3FnnGfyh6teE94q72VAvMZ4DZ9i3h4g3PFBTjia2DVfEt",
  "key24": "4UZvitCmozjT1APvne38gnBD2wpabNcnskw79KxXdNu1BEqL8JPFpnVk15ULNH6PSGetwvPf4vsp4Lc4Dpet58BM",
  "key25": "5g418oAnGRUKQdNXN4iLuRLZuLZpP5jgAzVfA8BAuWGjf3L63M9BZKUCXr4zDdmnDtjVciczPYArYt9jdtW6Zggi",
  "key26": "2CRvUGwNbW9vp2AZdCU44SucoxXW1XUqZn8YtVv57AtEPwGtUnRyXABm4AuJzjVfKH8ZY7Ea9Fg334sKwKG9Xmnu",
  "key27": "44tsJLtxPxbRpzTAF3zkmfE9ziX92Kirxn4YGvrFtHNpQCZWqnhHsh9iUbheNL2hJ1AR3KB2FiDYozRXZqRXz6uU",
  "key28": "5pDyyEQPSBzB7vGjEC3MK7czf5AfHogeybZX6ns3FJU1WcZZbuW35nCsJFwyzatQfHuyQv2GtgWFKbPQra3CpKJZ",
  "key29": "66SWB8mg8w1wSuGb8918StkEjLnEb2VMEACCL4Est3oN3JKznRBxkPyTozzvgpQ9HmyWBZyZEyWUc9tmBk8ztM1R",
  "key30": "2JKLgJri27KoRgPUGM3RYHgbbKDJo3L7DTAVwPoJXLi8sZPDTfRT1vwry4RywTDsmfoNpCQ7FoMcubX6qjdutFhj",
  "key31": "23qmN4fh8bacowxvEFBhPxMu8hBLc3c9YprGLPykS8Si7N3bxf9W8Y24FQMpyrBvRQjomiJ1oJQQZP7ftiuzkk55",
  "key32": "4mRVUYuwFKLCLMSHCiFNYZLifQfkJVRNetifbWdH8dd7wis688SyCL1wg9zPLtTJ7BLjbRiZSETJRZvbAb6Sb1US",
  "key33": "28YYMPQufNHsksfAmZiJrnJ2mzYJ5MdqumnjCZdf8wFfWiVzabQmFuBbsAH85JzMS9i5KXutG2WZWYXTe2SVFtvv"
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
