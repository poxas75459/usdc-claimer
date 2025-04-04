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
    "2WEphAKuiKoEocqdMaEVVm1hEutx1h5ra45TkiwLbDvnBh4qzJqDo9zqXBstJAD89fsjmsRbcXV2aXVqoZykmxaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pokajERuKbWfcmp4n7N8wk7j3RmcWFsmZC4PigG3XRgYLgdcp8JG1jJTVknXWcSQ5eeZGU3zKWEK3hL2g9nLFXy",
  "key1": "4np7vzz6PA7uP3tznyPyh6rcEbsB69UvLxNmbwEXxptKGSDe8BzkFeFBGpPt5UsrzWyg5gC4zmFFVutFikrJUJcr",
  "key2": "34WH9aUruk1BsbCZvC6DVuybtk96bBsStDWhkRpzQCeGM3yK5uEKfRTXom8Wm7vXbo4hoYhgkQJL3dwkdjgr9wA5",
  "key3": "jMXY8EMptFUiUSBH1FTLJcptjjmAYEC1VQ29NByBYHkBG2HSRia9P5rzJW5hTH8Wzvprn8dLaua3Aq66o5nTrwA",
  "key4": "3ds8EZovM8s7gz9wVifAY24KAGZgvv7EVmrWXuTFoUz2iUN9tpGjCy7VV8wgDaqtmfNXryJ85SK11gNAdbMFJcte",
  "key5": "5WWS1jaHsscG14v12qqnmWFxjqgc1bUHdjY2hWNU3y7GqfkMnrTSgY8orYZ4de9mJjAFNzaxzQVCv16LepvZkVU5",
  "key6": "3NxNX5EAsYKitTxZL9z72X6c9i2fQeB3LfCZuH5P2B4euhQ9V4E3ADtEiNbcYxZfyUarufvBk9UHoyDvEq2ZKvve",
  "key7": "2Qu7MU49CZfAXNtvNViVSXJdJU4yrayBjbSUyQYkmTaFT7DMnMRSWoaCqAb6H6hKY4q5GBJGZtghUVLT14GRhWKz",
  "key8": "5gY9vF1bU8WrdVr5y7tg1ePsCC9Vbw3uwm2q79bfdeCXmSmVwGLrxotivwpeTrEDzgSEVKacEFZpUBDmSxgZj5bk",
  "key9": "4ixATb7t7VTKoXxBnwmn7haAVadPquqs5LyyVef5u7rSPSFqEMfpwSgSJFfgGfJKUoN4QBMRakWuswZdfDar1biZ",
  "key10": "3XwQ34XuNn3hcAL9M8aj84SR2HiT6E7aPsoas9YJLLhHoh72j28T98mWWHsnbt6rZKRzJUaXdvENsocGAwA6ZvvL",
  "key11": "5XytCZLyfBrjhbKtH4MU5iXmNK6sgay6krZC8i1BZohi8uT6h3JbtZbwLsvz6vcVhZgAjVWCCfwBi2Ws1aqUL3oF",
  "key12": "5xQG8uRNPQDgQYc93X4QLxE9bpqSAGPcfhRLy2LYgBmrcthHnemdKvW2wDjiycxxozgGqcaBAjaFMi9kFbYAu3K3",
  "key13": "2pxcr9fe4YReQ314W62PR1AufQYGuRZ2nUCpZTwa9KhuoDDmN1j7xzhZboQpdAK3a93BPwSfSLw4rDxcGWYP4qtT",
  "key14": "4NSjq4bewZqiKp12HRZvtMhThQ5wmpNdjRBwu4k9wUEWgpv8eMkpArWU7YRyhQbKQDCeVpYiv1pu22np8S4cpLxD",
  "key15": "aDJHZBmsvDaKPcHNgGbMAcqmGJC3CqkR5vv2dSQ656ScyPLv1UwTbjYfCd3hstp7Wu8DuDh2ZssqbReieobhtDL",
  "key16": "2joinXDDG7GuNiGsb4kv1w6QSK4NH1QsYvpciqcVioUaxTtre4JYFmqeryiwjzLo28bYrRGN8sZh4tuP52PBb8tg",
  "key17": "5wqE28ZvL8c4mUp1of1W5W6FLveNFFWCNCyaEtcpSL8gBH9T8whfT29LwCq7xPmFcaXKcnFmL9P6fbQR8pTfQE9r",
  "key18": "512TzXwke4snM2vUWihKg7ngFJvSQHXHALnYxRpu8C6BoQcVXdVdJ4NvsEtmtypEicEssF5zvSX2U3gQD14wqvVw",
  "key19": "4KaDpYfS8yrtA2uiFrvdfGLdubrX8Tz9q65Sm2u9DkpwUab3i3zPjsMn4YYVKW2UKrrAnuEPgu2qZfp3mbYJqv61",
  "key20": "3BhUhLByUUEXh1SM2dXYPHCdifrjjZ2632xSwndtyFdSTAKYNYknknKcybmaPi1Yf96PDpLsMZEqnaLkjnVWncbu",
  "key21": "EPzcgAL1CssPb1RC2GUT41L7P2wx2Kbty9Ptx71Uq8ds1tVe2xicctCmikUYTuPVE72pRRtQmFbRaWBmNeYPgAD",
  "key22": "4E9qQbKvp5vBWiWkVLxzhXEd2K3Pcuo7XoxKxeQVcS4Y5wXucxjmWDuno5ymPi1XTRPZXNH5SzVyZwt7Sq8xPCjs",
  "key23": "3ve8UqiusPumFCFjA6uYGemYdM4xT79yCyKzuQ4LBtqSZXbNNDsSSssFKj3uFBW3SCnNbvdiqSHTWSbsUKehMA89",
  "key24": "491w9SyHvrWVry8aGb5yH4wmmc59p9ynkHd6BQRAx4yaPcxayoo8R1EjigWRiWtDwUcwAFAnW8eMgBykkzQyevLF",
  "key25": "4PZBoFF3Yh8uPestwAvks5x7ZejwXmEkVUKVLeeecyFUBancqBPWLbhsTN2PH5YsPKsGaeAtsKTwcQqDvKysEYhf",
  "key26": "Mo3LLdxVcyVwfoiGGBEi5Tmsom9DNndQs7ih2iEQH8mc6mQU7mEZsF2HwkuKPjpWfxthdNcRdoo91DZgPEmkNpD",
  "key27": "55ypeB6XSp7SFuTUAVVbEYfc9f24xk3m4E2J4KGnxpdzjXdrKAcAeaDJyjWQowX9BD3ymU5v7dkftB4x4VUgk1Z4",
  "key28": "2QxvwUZ3iZEqQowjJGjPu7TSSJFZE4D4FMw4vXYBrehG4EL3hJ6hg4FtUR8ezTbRYaNzMnLssN42WDUQDoinFUzT",
  "key29": "bRZUaP2hGcJWti3QyHcauTJEPXPSc3Yeyo8eKXqvETrn75ZLDnpJLKf4EMFX7fJi58WrekpXqUJ9FsMEeoskUHa",
  "key30": "3fHYv5fi1udGqw3418W7oABsWrMU5Gj5F9jugt9QtsDM3pCU8uG2aLtURdFZt7QWw3GY1hZkFMxFjsPCANNcTE7B",
  "key31": "Asqu5zo42wKvE1cpT8AJF4HDD67AHXAYiJbhMMgpMfHoKtHkvZsLRbT1hHPwtMQXidYDcmW1heox82g4KdoQDDK",
  "key32": "4kxPmUHzaMW1VHPeTwtV91wCcDTEBrmdVcZix9H1E2Umejg7by3yWDaFgVvhWCqijNtkm7EvBaPxMi8WfeeayfLp",
  "key33": "3hUR2aMk9gz9EQKc52YqyyFpdVKFtt11AvdqVfktUoijdHzLFdM3kRaVDCCnYgLL2KoyyVNVGDRUJ4d9F5hdkpL7",
  "key34": "hnyJvha9MFUigs4o82fbnYhRkdsj2wtgKU5j7vtdyXNTe9Nu2Qux8YMXmuqaHR1FyUfu7dwSAhWFNWN4VY7ruac",
  "key35": "4z2TWWG2FLT9S6SFmFD5qN3vYwDsdxmBP3cEw83UHVUBYJFAns3JEFr1LQEv6hy1U4NTnpN85b7imERLwdZ23Ja8",
  "key36": "4ZkpWpVbieAQQdic8cQxRfypWSk2HTZNKruc3KVdHmdHi2YEEyxZmhETLZo7KkRYZ6x6ZkzfKRP1dHxb4i6V56u4",
  "key37": "2LE5GH9kJhCpNNngZfDkedYT4shtWx29jZWdaVDgp8T59EPe44sFgAv48d2pyTiLsXJQaMsonprcdnn8TkvKVr2T",
  "key38": "3UqaCECFcQduMCEL8N5gP44rLEm7qxQo2A6whRPfUcrTBzNPuvhW6QXPW7bHffufj6S9K9phrosmv3J3sVpV3zhX",
  "key39": "37u2AzYAWgoLSQkySaYRYK39veM4xQ5WgwbqbwFWAjwcYvJ8cw7zhDZzjdxwsqvh4n3zXtjWdxqxe3BWSFbD3Kai",
  "key40": "sPwVMN53yeArJA4GDL3T2ohxVJjH2zgDPCDiyzwfVMKPris5JaL8TxwGA7s7oP9fneVTRaWrxGggpuLKBoK9k5G",
  "key41": "Ma3txx19Y4a28vmAMoXbgYvHbTNtYtdcBbU2jchB3bcsGWDgDzKhXkHWRahfova6xzw2TK6ob9FKZdP7W75u7Z2",
  "key42": "4UA8XSFkn3AAnTdJ6RdAK9r15DsT9Ec32vWZN22X7qvhDqFrnuHyDFBD3gKcWJTwD3cDuqHkx1zigsaxa9cByFWG"
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
