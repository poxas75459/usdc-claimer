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
    "5CWjE8wdqTSPaQcdqMUzDG9JynbPbUsRSfpaZGfumex5K4w8Z19WkqZBJTs4Y8czgHNDYf3PH8MCCz7ab5Qt4b3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1BTEPjKspZ3EmNSGQpmncfkeBNu4CgL9xd99eN4pnjsmNYA9qDFU1QoQ63m5hDiWkeNRSLgQSk5sxZ8wAhmmB5",
  "key1": "2pQ9RJnUVK6Uh7NrX6p5HR8EDLA1TuB7hZmjbpawPjyMXxRtacr2EZ2dHzSN9idKCjiChFMP667vFYFGq4NCjx3x",
  "key2": "5n9XoCzppGr5vUTjjZK1pXC3yE5abRn1RctKEspcwHgAMx7d1QsgMAJRc42DVaD1dxRC1UJPbXpK7tch896gXrtd",
  "key3": "2ZcaoezUKVLBXYyoBLs97rswv7sP2XZXFCYyVyyAjwqkyLiRyjdeiokJT6qn1BJ9zapU7agmfwrgrYf74jZJUNkY",
  "key4": "xGHqNgkJErtf4GLE2K2WiLb85geVzZ3muXt6ZkkAJ3UqGSRsMU93gzq26WPGVbRW7Whcn1LKSCWNirxMZb5wsYi",
  "key5": "2GxjFPg86r87AjPjLLgE9LXruNUYrJ8DBnxT38S2Pe3jrLuaPqD9FV2KDuN3gEdcHyJonSgBFrC2TtAouCzTzji2",
  "key6": "5E3EmLsoTFVcwCaa1LegvFDu1ULQZwD645X66CYc7AfVfqR4NcRP7CpNdWJUC71boEb89t7t1gywrEP59tCZZeTZ",
  "key7": "4Jfmk8MjXTf7nc14QNyb3v1yX7WMM6o8tXgs5pSJxNoHSyEo8GLYxta1SJgca5n7xyoawKmeAgNmW8arfBNmZW6v",
  "key8": "5XvRXk41SwncwD9qLKh1QMfixQ8U2RSdNZSi76FeXKYC4uq83xn221E4xQsUHVZxkHbmChZHp9C4NtQDEeHWEU4z",
  "key9": "33ZDnXtm5gSN472GU8f3XuXtuoybfQfNMzr1DLidY9cDNewU1wkJgTzNW35CyYbWULBZg57w6tmbhbntd4ZkQCTN",
  "key10": "4yLjKqhdwaGYkHUcFMp1fXpdMvjZuyLHT9jxAcLA7vECMNDJxFsto8Q17vR3RvfMAPxpw4vToSBPphmba6tjqBd7",
  "key11": "4BHqgSLaNMFgRdDLwb3VAzRu57AhF72bdFqDjy56Tk1Vo6PAtsJtkQozknbFQi2GMVErNpFBZrijubFZ8znBxSnR",
  "key12": "4Sn2Ffoky1NSQDgcJ7KEhx8xXU4JtNeZqY2m1GNK8jYkHQVVJGV2ZypBSs9BmjuoaSRk37xdr8pge4cQmmDAXiMV",
  "key13": "2og8TadTrfu1FZNfoBSEzmvBvRNQyUHPnqrNZ3HwALPMTe8z27G4AY4psPULhJGTw3MQzpswWFm2E26hjjvXdraS",
  "key14": "gErWn4BLg1NDB47AKsVit2LtV6Q68cYKDay5VMqCjuz3uwqqinvtVLkBrKx91y2Yi84Sosba2xFZB3xyqyAKqEv",
  "key15": "4euwh92cBw4urwMrB4Xxq9teJejVYU495dfGLCPHx3CT6HTyK182XXmE7ZwoLdNn3n5j9cGamCY8G3jDi1Ld5UWn",
  "key16": "2ruGi6s1Jwig8dnxwWbkZ5CXpWotHoKVrRYw265D28Wg9AuQmetjNMxPfnnXboG4prkEQt3YgZa2eFAUfzYVWPX2",
  "key17": "3Egxu314qAvncTF4sPzXJXYix9Lv62A8gqswKFfn3qyFJXX9ZEQepCxmzZzzAwz7svbW4v5zSxhZdyeK2DBUSihP",
  "key18": "538qAMbj3HUERzA3rxaajEfLAT9jBsi63wBWT4TwjZF6CzCSAPXFUaCEH1r83UA8EV41swUa6Vy68J5BBbJk2Kxn",
  "key19": "5AqWSZ54FDQCknfuvvnFdfzx7KZNxCKL9dBSER7uZDjBzrRMeKZf9fiZygWDh4aH7L7YYA1mNV3Xb119Xzaf8mH6",
  "key20": "4q7kGMSU5a5TRvPNVvMmMrhQHgKbq4SUurCn7AapWmUPXVDKEMN1M9WfTcyHMGGGfSpkSRhjj1cDvRVdzzWiYLsj",
  "key21": "2p8TxfvhAutM4ZapHyVwJc69TYzhiwxokyrkGW1Kib9xyQgZun8dP2wuFvrtjuUNJVfJZN5C3F6t6UoabPgj7Ej1",
  "key22": "5rSGpxsK5hPKTrNKnieJrx3my3vmv8xZCkdm7EDFvCZvvtnQU4FPbHSvfhStwfjPLo1y3MkbfGPMbFXsxMd4KVLZ",
  "key23": "4kT42dxdS1SjojbyBD5T3cNThAxSMqdyGj9mWJJnxWAph6ngeMfCaHGWp7aBAyzBBdShzQFUmefeNhD9ZDkDhsgq",
  "key24": "3FZGDoydJbSCreaxjaU3PgkC6YatKfFSdQgC9sk4rWCLauwnX6fHBt5QCsKvYaRcMEwuiCqZ3tqPhgGz88w7Pzrd",
  "key25": "2F282jaxVrzdMhKWGLJVcTSZGfcA9sy9WYVm43Sooc6LVxKpLVVpwQ3QhTnerrWLpR2N5ooLEy3ossFTjC8jhqve",
  "key26": "3FrHDXmJgmNPr4qSDgx3x4UfkH2gW4c8FJPABBmcuErV3N1DpJa2kY8YHQKtaEXFBH8NzqjbwZUrxrDxwW1HJMQ3",
  "key27": "5hGVtEW8hyeWVQdZUkcpJqr3AQjiqBptTkxfDhQF3t3YiM1hodSSyHWcq5YN8zQ3YipVptVKwyYHRTX9mWfGrSbE",
  "key28": "4bxZV4Eb7wT4TNP1G7U4oofC8aNHgUns6zKCx1XLAGMJLkd5b3AB5rh1jqwwaQrbJLQZ5yiZRXvgdZ9eNVbZX5Vk",
  "key29": "HnpySyCLxK3Hu2RFfHTF37F4r8TX4mqjrEJeoZDaZ1wSA5LpfVmHkndkS5iEurRMfZGQD1XmmWQaR16FxvZiqKG",
  "key30": "g7ZVFHnmv937exomk6eg7VahakxaaGFhuWQC88nMpL38z9DgWVRinp6EGdKikW5PxQuGXL8rEx8Dvn8zBboNr7m",
  "key31": "3e25xwZrZCgU1UnRKDvz5GR6Sxm1bRM6PAN3PJwCyVcJDvYSxpVYbW211PQiBYd1vniGFvLv4Ty1cCScRtVHZe7A"
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
