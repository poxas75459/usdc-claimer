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
    "226hdTFxEaDspei48MQt4vdC2tZbPE3Dhq7PoGgvdsydJYFvfouRm6s5iUdheGeo2QJ5Sjviuy28aNudwzsiGd7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2XJam41kjX2y6KwTNUowfFqnaMA4dpnzHQZV2PASCbhsjfTXrz3CK1GHwP6kaSVRv8KJuBmN7JbF3vDq1HVU9g",
  "key1": "2yUA8kZdpQk2bseCaxpfnuFhbSJVqakvh1ywA4NCdpEAMmL4XvChjXt9m5eL1E8pcP7SdrvK8RTMTrdwCvZtiG8v",
  "key2": "5yFwJMuHkDiTkCa3zt9DiBDC3dWBsCg5pycam1GWToysRk8uS9BTX2aGumvFRhXSW4kRiPPQBgbcC1JwmfVuE5mf",
  "key3": "63Jrme4PaBbyr9xk1ZrpRGWkdkyLidk6yUniLYJRxQe5dn3BrdHSPdwCpSQGP1rG4GbNfVmRGFBwUqos17VtdZp5",
  "key4": "5LWB3VVQqY9BH4yJpSC3EtzjJfBv7Pop6KmzD9hC6FV68ucVimXvg6hfQbLC6fUjmuU1B2h75GpzHrDdfEFGKp6m",
  "key5": "66yhaxuLeYAwTAKvNsh1SHXCurAGmqqnK95F5uf4s9jbH2faGVUTxZ1hijoZwj5qtDS94oREvUAmQGCwNvMeHo4w",
  "key6": "342NjWdEtvnLFqEkbGFMB4hgL8uiZtygyk74fE9fnCxpu196463DZFqaBX2og9vk7Qnki7FU4imUT31e9DSjw7ux",
  "key7": "4AXwH1Kdz3BtQEkXVLmzAeiu1HGqXTgrYUBAMTYjD3obBMXTL7EnpCoSqpPsyXueksUp2hH7hVgKVRbPiGienYqU",
  "key8": "5EfiusijQduohjQxh9xzF5qpZwCA9kqLuEfgFTXQ4qsRKb4Qf54GGxvra2BGS3FnM2F6XdFpv5HmmqChx13sSniA",
  "key9": "2QtTZEvFHW7vfyYs6g6aRsZWYu8V4hmQUqmqrbfyzUi3oYQVaYbdSRFGPncuzgKZSMxoHduXpWXWkdm8CZJrKSb1",
  "key10": "4uC9RVzS1KibiJkTBVNMnQ1rpf583ZBofQtYV2Zwz2gnjjDtXjbAmASbdisSCnPZ3TjhzC3J2XBm661eymTtJfiU",
  "key11": "4vCGHozz2un2PviRwNjuaoZzTW1tFkpqG3MSHcdz59DZPCVos9vWVvAy9ryyrEdpcfwvcLmypRWoG9fY8HL63R8P",
  "key12": "4bpNRGyr8qN9XtjHvgC3wdmvEbFBm8arRhSgchTLA2M96v5hjkutx3acz2Uf8WJFip7EujZLFyWkKzPLEjqGZgmK",
  "key13": "2uApCWZkPjr19TExyo4bntH6qu7JGEoQ3LqShL8tHN94S3GgHERNumuRVkdywpZPepaasE9piqakjcnABhBZweRJ",
  "key14": "65xfw35yGA2exHZ5z79vp2BzA8cuqLGLuUidWVAoPKzEJBmC6pJAbGLNayBkWXhRzXLug5SS3bsegYra98iZ9npe",
  "key15": "3RoH54Rzh2JwjzhEyxatG646aQUtTJgusgKXGrqP4MG1ntgZ4cUpdskUCHCAZaZZG7vFiXPWFEmJmQJuUBkjt9VQ",
  "key16": "4jewkYTniEYnsNQmD4vqCyBxmvwDXDqMhcjXNBNwx5hp78G1vNRWwM9Xq8wyut3pmuLkVULUR51rLMpnsPA9fySP",
  "key17": "5rEoPgaPXBuFbCmKDQ2Nr2ugRpBqK6ykgto4VbLSvxarRRzVQRdX4kaH3B2tEYghijSoyyfTJrhhr77Qg5iavyfF",
  "key18": "5xtLoBvJztLtTMC9MCiGmemRtuHJsHt2UNv8qoRFKq151rGynRoiyJ2mxoAdXmmKhr6KF3hmEX38GDRMHCvEUbzt",
  "key19": "HgYxJNXoG9jJewcDhEQCiRYB56Us1sZp4zFcDzGx8oJx6AoYxCGGp9nGe2vV6fWDdhzgFJS8KzyDJV4ad2Gtno6",
  "key20": "QkYJyi54vPzzj5sK8mSf7RGth5ZWiyArRd12hYAW2HyJ3ZynEP97wfvGvrobpzTjvRscGmGLGpbVJb2hGbdNaQF",
  "key21": "5grdfbTnWmxYs4GvzqhN45YC4R5zc7HndQryJrkfugnEPWNvkphzcPXz4vqPQeEHRbbonirUTNz4Y3oS6dEU4ot8",
  "key22": "2cf1zGtHASKZe9LvdPR1riSGDLtmDSzoYkDN3GBmekXjz9Kyg5n16Y2aNuaHeC4BrEScLEPemjUyWUaghcLTWfcU",
  "key23": "4Ug263ePJSLuq34GELJpcJLix7udouEDpL6M2miRDNLwzrTdNQqSiqJoXqE97vHkiGUKVvbDwkdnW4AVcbcxbbkA",
  "key24": "4CZi19cmtrY22xkae4F66GCg1DabDHGrEHeUwPqpjuLe2NMtLPEWjUgzhwz74LrwzntDRYTaqGMJm4qDTKM84UJe",
  "key25": "3vJw6PQ2CAsqhyCDyUHsYk8rxXNfzFBe6pD49941kzerH5eR5E3M7kPx8uh1TyckSoJudzDCkZ7iHD7nxyFrfUu2",
  "key26": "2zL1eaAFr9uWThSTw7wFNZ3SVsTg7HmRyHCHhiBiZtR7iADhaWCWxXGX5hWn1EsNWuKMPNPWq5ng1Kf8MhyvKkCH",
  "key27": "3M4S58DJvmz8r68Vgm31gD8Cu9FBfcVhd9D468GwbBZmBfBMopiNhJC4eDtfhE2QQrYzSr2hsWRJc7rYEouT59RY",
  "key28": "3n94WzpvaCXoUznE7mQ76MRBrXEavgtRwiHjGNZX2kDk99ew56CWuCwJMeYJHHZRJ1nHuk8uCSzEoDveFe2eH5DU",
  "key29": "2tmRTismejqzsrXToQ1rRMCyrQTaeLm4ndm2di6S7Vu196Mqp4VKvjN81PgorBEzSDHSziN4iHygYuhFTGUzB8hj",
  "key30": "cdJ4w32ZW3f5aA2UpFwVS3neeqQ2nYrpaCFQZKy24xzb1ozY6tJ7oM6T6PMKJDP1Akndwj5KttMgdZHMBJJwnBm",
  "key31": "4Xo3AVX6K6WB5vCXWmw5AhJRW39BQoPW1XWDh1ii1nqN7itdxMQBKpBRcg31LDCGT89XeApK1u3nW9v8AyW2vFpN",
  "key32": "3VjSYaUsE2CWkwruNW2oTwGsSaDRn6e4CqzRgbD1PVt2w873LFhNJ1GHTXEn3bPWvifmSXnz2NRFy1Z46cb1ANph",
  "key33": "2stmS1Y32HrPj8BDnjfkMR3zUCM7ja2av4cA8CKgReMTfTswDhS5rdv7wchZN4YZ43nq3XST7NcdehU7yfAzLq3c",
  "key34": "26LcdCHngx5fW4tiXF9kcaumy76TJ1Xv7cPwDXSEAx6JugrTLHFZBrhCsAMPZdyXXtpPDJhzaQjo4vG9zuuDusWp",
  "key35": "7pG8VBSVvPi5vp3XujTAkxwds1R9JDLyX8fdieZz4vCqrXksZe74XApsbz3FL8KGcNx2funZvzzWqWbWDSHDmUw",
  "key36": "3Tmg8g9Xna8GPxMfiDtP1Hh1BExCxf8HsswWHvyUbfefvSFhmDeXP5gpQmoUhKWcp9i6beibSLFqQrJv8Efc4Tc3",
  "key37": "nZ42CuM4x7beFJRfToZmrUbXrh9C4kx9QGgmEYmywsLkmp9xTERBnEdbYSbu4KZrqt9PJkGkQeCKKFS4VQcUb4F",
  "key38": "5hww1eWLrMqSG6BwnH8LwGWM2aUTQzEbAYgtoawfJvaShVWqWSgL63YRpbZPwCSSd7Kdb2ELD3nvhFwoPR53xQbQ",
  "key39": "JWFJjBor7D4n81LR23uMg2yMpGj9s7UsMpsNva4euY9Y8vmWAJMb65fviiFrpvdfB9d4rE5HJCokQuVBondXVTb"
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
