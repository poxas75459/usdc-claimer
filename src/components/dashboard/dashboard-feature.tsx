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
    "SASwcJ8wXabiB66GGzhgibNgcmmqntN5hH6n6hVfxEDPtGe3grTYkMqCzyQPFte9x8dwKJJSfVBfrSPwGW6FteV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eSVsoWGknrbUJGsEKmewVULEwp9FNyR2h6VJf3vabNnfSUuR7hpvHSZDsSHNxzpEeHStyv4DssR7LRMR3hcG2n",
  "key1": "4R49hnpZtWnBJqqU29MHrLxevmzbJPcTe5poNWfGvLqFQVjQjtihNrzkMvywZUkw4vBUseuuXCum66CJ1rGQuxWc",
  "key2": "59p6D2aFKbSSxk7XXc318D97MwLobs7HZcVwmfrtRyDvc2wQRzTGCsi5xxwMQJDpY7HPJ1mPwGJCUt5ifQbj2PXR",
  "key3": "iQdTH6rKw7LGEm4mwMiHMZZHKmXKCMraxrewA4V1PdAsZU933nBT6g691U2BCWbNbNGbE2gttU8KTWPdcizC89p",
  "key4": "k8E7VyWYvX1fpKBkftxAQc7n8DdrTmYKtyzvUJffWJYHL5fBjbjCU9N17883RaekDLzkdSD7uJFtfT8Z7uYEYZf",
  "key5": "22bdpfJevw9BSECTbEUCJZ4d3jBSyfWUcSPvvuQ39v49R45nvecPpCa2hLKQ6WrHLxicVVjCo3hppXp9zxUBzH5R",
  "key6": "jbBhZLmtJAmTLcXEHVHLCsE4ZSZnxbe357DHGtBmrGit8zzuKDTT52oGmL3D1y8nojMCQKCLD8vF6VhWnfh3NZv",
  "key7": "3kdYyJbf4FGnH8MRRtoNgGFWfGEye3d1S6f74q9P7x29zSovfeRHjzMxzrnbt4zHUkvu33fDm7RffQA2WWcRRUKK",
  "key8": "5pqzu6rhEV5Br4ba5rMD5Wpb3ZWoZPDs5Kwtho2btPoo2njqHBRB7vKH6wBseBVFV3rXbKYmfTZKMXHtiuZzHRuC",
  "key9": "4qZxdFDQfWkQvzvHkkKkmqXQ5YFXyA3rJSUdPE47CeE3H88VoAS9gDBwuBgMyeKpssZpjidA2A48RmQSxxdAAEQy",
  "key10": "4c9FpqqA6vVSAexSTbWty3uszPzB3fn4dN9gtpWAehWHB82N5Xs9JoPuyaH3TmLYMK3nHdom983yXmGjQtG4EgSU",
  "key11": "4emnEwCMDDk4W2VSgBWK3qYVxwjpdH2gKsA5P5RMczSziM8N7aEL9BFzvaz6DYMmXV4Y3BJsFKttQDqFzSEF7y7m",
  "key12": "33EJVS6hdnQtNFfGgdfKfARujgM3bqZefThpcjEd4MF4s71kv7YsWihPdTyLzgvsUnF76rHTnk6X6WbSRgPwr7HZ",
  "key13": "2KGs199nvEkQQV8RwNKC5BRNNCoz1FjsCHqfUU5eSU7a12J8nQ32e7McyFDnwUM3vro7wU2SQ93CvqgMr6g1SdMe",
  "key14": "5g64fZGqh3n1WahkJ3ekPDsVNwqz7Zi3QMPYJACaLCT5eUypzhRxK34TY7B3fawuWQEAPS2qskvDfqHQAjgBH4kD",
  "key15": "5Ry7i1mqCEcpRTAknQnedVSU4Tzez2rbb9mXm4CoZpFjscJw8wEwVgfrNtuJnEwjsdDeVMcYtrihKQC5j1sr5xhk",
  "key16": "4Upp6fDAhar8AYPU2hUF2g9ASAwFbNkbEnxsHVPnfxspMfxbm9W3bQknuTYJw3zSmzzzDg1d5K2si7io7MHKLNF6",
  "key17": "42fYUv2BJCwCmg54SKwExgdx7oZ3uTd42Y4JYa3CMC7oAFdbZVRGZp7qUqygPpqk1mdsYEZ9wViHQbmkSxbQu6u3",
  "key18": "5545pkKHCZRqWjrBvYVi6UcwQLM8Ryjg9HXbAWUDxa2xhRK9NWg6HN6aAugKc7EGSm4LUW5YhD5sn8y3gq8PSK4G",
  "key19": "4PbVEnpk6Buv49A6djv3RawWBy4ZgbP2xDPP26A6WwbFPjTfUxbod6ts8shEX6VcmjjFRv5WYDYfk1B9ZbceEd8C",
  "key20": "3pC5xyWGnLZGHM67WHtawep5rFFwYFHk98nvBTRexC9Pyo2Jee6gwqJqEjJpK6Pxv6PS9c9aVoLJjFxh9Hur2LUV",
  "key21": "235mybsyzp3RL25MrzGVChGjBQWLndtX2tq4tRVn5GUhtkLf9s2hsNXsGCEMz5Tj4TZPNZqHwbpBKj4yTR7m1x7j",
  "key22": "5rivkZDed4n2Si1bHAL2dZizuDKYy82tqsNLVjmNPd7coGny2AMsxPjCV8nC4XGa1YVeZBHebyNeSgTduzJuwQsj",
  "key23": "2uB7bAx36jofaUzDitLUZUxGtkbaDXBfHJu19yqQ2P89K6oUjye6v2i31EgX1Kd7rtmETRNbBMUwUKRV5vCfjKQF",
  "key24": "vQjraWHkrXfqB184NuEp4z6KVxiu7McmxyEUnzp3sGMcdspYq7MzaYoQDzNQU8Mbx3rHvXYQitMdwyCnJQUbtGr",
  "key25": "aukdwF6gGYm9CF6zk8EakSSgX36etFBeMwnaVZPmkcWYQmdQStzufPJXPtyoqTJHroZiNKhxyLna1wwdfGtNTiS",
  "key26": "4iwnWzsr5yoyMoLSYE9XjVztye9mRDnSMDWACnAFtP5GAQfkCBB9UXHVWZAZ4Pbs1GAvaoTBbD5cVeNh3K6ZaDM8",
  "key27": "52hfwZEnPvioC9w9n8tdqWFcBi2GZxE8uSG5STSrYvku3oujRySSuzkunCo5J3MF4drRrbfpHAkmxVvRt9XwYV58",
  "key28": "53sckPxx1T4yJoRoEvkTzvGetUgYKb4hp9CG5Agu5VQg7KJg2ok1CmNM6Cw1kfEpj8fCorBWdkCxDNk2sct4khTF",
  "key29": "3qAoSkgyuCAZ42tNGnDQTBk9mzfmfXnDAakgbHLobG2BuYFmY1gati5QUoHaqngr5W9MKW27XPVfV6txXAH7q7bX",
  "key30": "2Qbd4ogtWKZByibtrjj53Y7qEADNQtct78ZrsyVWTGJgJyKbqKrAE1UaqZMYs97X5m4w3dgePFrsE94Ku4naLSEv",
  "key31": "3fWT4jfSazAfRuZhdM8tv6XW3EFz21C9t4pmGF6FKVB32XxTu1Exr7QPuYhKYSfFuA9Sw82JXApKBdevw6dnLjz1",
  "key32": "4Y7Uq9renKawotDzhdGcjv59rZp91xrbn2MmwfgcC1PB8uzhUobpJDxPQq4nW7BoBpfzCwNkYXaBi1QpCZWtCDMh",
  "key33": "5tnidZiF4m47eC654f3Pvn1w2dQZVN4mB9mfvkDm2uqkZzKScq8iAYVxcPZfrh4mDHTJqAni4tEPiZvGu215vjFu",
  "key34": "3dPzdWXEWhemCFCUV2Qe7HqN2ki3LyMWHipqhua2PFrfHH48GGcnpRLDMggUSpbU7v1Z4rAC6tPuRnJQA231Snwz",
  "key35": "VN6nzpZYyDYijncy7opF6b7jVqAWUPm8vDNm3GVyEMXGZcw7X9MGqNiPvfWmS5pnBkGYichuL1QzjM3hSFayDhz",
  "key36": "QgLmbgYLgdcLL4ooJZ3wVq83ZQzdfFYnbDEJURAjeHUVSTHd2eanNesNNBEGFk5x8NstNNfVgWmm23if9uCq1rM",
  "key37": "5zVwsSC4ZZecHPpkHn9Zst9FwFWRaFKJHtQZsJfzEtKDcY3DdySVaioucBbGAC11LiXrbnwvZyA8S7WxALYcJ8qd",
  "key38": "4F3dwX8kV6BJH8knFLu13kT26VMGTn3MkU2LTZttJXHzEtJUR5hHqa1jAP4a17BaNXY2PBujcxZhZ9niVKmTuHzd",
  "key39": "5vPizXf7JHiGg5XUuifQGZYNkEknmUzLnjH99fGnFc9BYyw2BVRq3Ki1xjsXXBUDSHCxn6ZrH6DmmBQYh2otmsRE",
  "key40": "2yRPPpzK63QphVsvaGPCnjipwAZWy1rnvxdp2Tsy6Ah4k7TeWfrctrAwD45XR3kHrdBEJB1f4SLcUwLe3Py9y1bh",
  "key41": "PxYq68xpHcJqCinj6ANYKoRXuYyTnYwqHFNn2ijjwDm6K22wpRiAvhgipniXjfzMAojiZaBYX5jqPwDoAtdPZeh"
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
