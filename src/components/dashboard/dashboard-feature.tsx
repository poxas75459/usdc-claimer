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
    "4HHkYaH3Q7KH6ZNLt69QShu9FgFGt2bjXU9Z9kvYYwXRq7a26Kw6jSDc8hP513UvKznJGsYL4mWbGerbVTfPV68a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQEaVUZSzSQd94CD6nyB8ogmWGrA2QcEphgL6QHXDSqUZihy7iUsAi2tNpgZrLXSXKNrSxZHatbun5EJjaXjrCW",
  "key1": "3WBfUdfXFQ5HM6DD4rV4TMuVGVgNuXbsXGBbaiE2s95Qm7FfD4dY5LvT3jhdfwyi7YkTYKbnK5h5m9EgaAu6NJLj",
  "key2": "5RArr7VKGnRnzrmuMxDMtGYPiVdh2N9Ezg3JWCt8Eokw6R7orLmcPeiAZdkYJ5zNbbfABrY1HqAB5WMxBeBHFKrD",
  "key3": "2sTTg89tihRtYoKv1cgQfg4T3LVuxYVkLQtYWoRh9JqLPc5h2oGDC93igotMGC3dPGEBQifBrSjzsiDmdiC7iuPb",
  "key4": "3pN6pQKFgfn3ctRMmdhPvdBPhbRX3jxUyRkVNauJTHMXdemPPV5Aw7Cte9fK11oG3Uzq4YwQGBvq2MAW9WTKjQw2",
  "key5": "4QCyN2WH52nbmtoydfTnskaMhtUeig4yaoXJswdGhRTSS6Y12oUrDb4Vuqh221EbFDwVU4AvVGkK4s6xzKbGhP4B",
  "key6": "2h5s6bk7BCssBYTmobMBthVoSSzCrT8gc6EcgrYHgH1Q4FhXmnRZqn81i8CXz7W9hhMJkUXTPJynfpmXR6hxVbD",
  "key7": "2Evi62vcekrid8HX3jT47k6JN911RF3EskFpSUvK8nfd4KBQSxtuvYxqVYubRRb9CZCe33BuCcC5A3p83Vxrov6Z",
  "key8": "S3xxbBXotER3LNTDes8jcUaztqAnfkkgiCAxsVDQfxP6jG8msD5mrXAhnm9iGEsEq9aVFBczJtpftLr1ugVBp6L",
  "key9": "3QYqyRCwMoULwDhwiTdGu4aed9HtEpjjzVRUhz9QhZcNqftAMAhgakzsxSD8XBV5da1NwM8gdLkP1p7hBGybqDvR",
  "key10": "3CovhddVnJuiJRDeTeA19ug2YvRk5PVt1ukFhurKHjEsgu7pQKxp5XfhMqBthLC3f7SCmXmo6gnBNAhLb6h3S1UT",
  "key11": "5XzcQjtAjPoq7SnLz89pGaVbJW4x49KRT8tY5T5gqy5Kajh8JZVz7CFujTLhKFFFyu5s5dEaxi4ETHU6c1aA8EQ6",
  "key12": "2NdYfXhzKpEdTLokmtKBPgmBUwKqzWbMe3edceQ3GCVH8CGyjYNcis2gGGA9CuZ8E7Fgytwguy5KkNsC96Jxsk3z",
  "key13": "65DUVZ6g5wWeUREuAg4cfr1EjYbGawN6xSxabVEjBq9mchuG24zhMe7uZBj2g4cU7tKG3UnPY1GNgYy7WWNABDAs",
  "key14": "4AQgB1KNYefLVRK5TMkqGRv3VCSnWsaJirVNWLquJFoV6ajLKAduc3i6APicfRbDXP4Jd4Ufw938dBcAmavRi5Aq",
  "key15": "55cWNVwd8s8TzD2vrgiVjW3mLcjiHRuQgy8JVDERjyLTr9c7Pfs2M5xeFq3eSMxKS2AaBjaoPaQao8vBwSeURHVr",
  "key16": "2iwBPUxmn7FgnqL8tUuiVxqHrB1zbBHCuzN6Hm97an8kM5raAvGjAjeE8h2EAybzFZJ8FZDykGtAwWeSgZdZoY1x",
  "key17": "JgYGGmAbxdqmfQmCP8yf1CThFy6SdeApmVim7K4dT14Y4pVxgouB8T6P3XQjCLBcUc3sjuAAeYzDZU25qdcKBBT",
  "key18": "vaFnaeaDYcyxPwRCMZJRbfGGvwrWFKKwnWGcJW6HM1mxNtv8KZthWbExQkM2zoMC4DL5NzvWEoDtDYR5GqJ6RAc",
  "key19": "5Ygna4EbxGPPu8dfZi3TJK4kcrkDjvaH25Ry6maSS1UBpmRJG6PsNutZYSj1PyrknQCY3jmU2eEuocfSV7bKhH18",
  "key20": "5s4E1qN4k95sVb697Chw8vMqYaWXL8M5VdyhX5Wcmtu1XhDfXXoTfRLdBC1Hk7X1F7MfcdTTcwoVGDUHE1WXwxRp",
  "key21": "3JokWcvKfZVHdDenGs4yMdq86J6gUoHM9Mhnur1G7t2zPYDukJq2mvPJWNZ83hRSXZ5g976XpdwMM3p83MnSg7zm",
  "key22": "sAyb6ucGeBGDGD86gAN1zyLrk5GhMUJxP8mPbNAjbAZdFvNhhkAkuVgiVZt8HYTCenJ1uVknjWGCaezBqn4BkMB",
  "key23": "5TvU3UVQB3vZRm8q9r4rZfZXXM5P9ePQaxZu1uGMX19o8bTF3f3EDysAJA6u1eJaoqNKwwydm7w546o9oyRCc5DP",
  "key24": "QR86k64DYY11izYEevmfS5YCTzaTyk18isTHmgRvtirL1ekoPD33BWPuskaDKLfptHWRhizGPcGDH86PG8yuW8B",
  "key25": "4XMjcXHHBdZ4YBPFrRy84pAnufyen5J9RGeSz5rcYQFEzuqwTCPp3tcKthHWtc9pN7m9FT7iTnu6921XS6Ny2XYW",
  "key26": "PK35Rd6SAVnYNcsFBT5AEuSf3mZmDs5EYQ9gxWK3pqVtfaDCg1AB4e92HumeNiXATXE4BmfTnQdX4qCmiGJ2bWh",
  "key27": "4uMFy7afUW8UTjq72cVwYc9wSFBcUxhg8Ex1HF2HDrvtUjbGawuSbwxfcFFo9d2D1CRwu2upCkD89pm3N2JyGs2V",
  "key28": "23HwTHsLkAR3o6pzkq8TuSAZ8FNB3EdsAE1oUy7R1h8AbHGkteG6EZTzcAEfexGEskxaxRpZd4gLqM3b9ZQfsqyv",
  "key29": "52JjVCqKi7tTbaHFjphpGPSRBJCfXzAUdcKjckM6fgHdZTUfZsujKhJukhQ4Rg3H1WDX3y53kDE7cmJ2gJbFgiw8",
  "key30": "4YVEwKXQV8kANJ6AMmxpNLvntDsYEYj9iWyhGXaesqLeWQyWQ7cTTFgfk3iN8RQRDB8XeofKG1eatu6HrDQTD8dk",
  "key31": "4837JWTKWiXfNR19h1tfcrVzmSvSgW1Riuqa33QBFteZ3uqFUQHtuqdPYPg6WEmbM7ggBxbVhVCq9zSUN9PgubgM",
  "key32": "5Cua5qnyeM78f1wp6UNTmwTayyaVvPqz5GjBDst7hVVCw1GWjyMrZjFe5SMxa1E5GxbM7biupwPJktLRsYNXAnq9",
  "key33": "1LBxvtPCn3noCS5BCFRf11BmrdoeaKND9sRz5AQ7gpn1WdvTm26iEHPtRB6unCcmELZL7hLwNpXXo7AqdkTMtue"
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
