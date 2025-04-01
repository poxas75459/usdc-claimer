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
    "4XTqsdLNYRM7KbKARiwrzg5UTsj5wsjiLWUK7qML7nncVDvxcuxaY7iAiARSYdzcUhjcDmFLURsxKySxhVBMxi96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqxMvzqR9wg9uD1KYxA8y46EGfsE8KpTiZHodVzomK7kJ6jeyFQQLLHb77zvUt4oALw1J84ZkQ24kezjutWtyzo",
  "key1": "Gz8kwnZ5SchZqcdSG9Z4TW7CYYrigeBqgrK7DZPjJnmgtYpmCM9U6zuQvEiSmMQ3k4KKSSwYNsX24RGaWzdcuxx",
  "key2": "2MKYaTpAXm5m2q8YWvKKgUSHHYVk6ujj9w1xEw3dMVW3vUAD625QCfCZekDNhBLUhDRP548zaZgzABShzDJdcFDk",
  "key3": "2HZTT94Lnru8Q9S4huA5CgzWfMRGuZfdTxVSwds1erXVLh8pP3fDVQm36WXM5E1vsiu7rsHd4hw5EZhKebpQjb6B",
  "key4": "3cFANwRmupFGpFDMUPdtfxDDTDsP85aviiRtNJmpcf6vUaSV72U8p4vTHBWckVG9pikj4MM6n9PdDiUJVGcKqSsD",
  "key5": "3ndrZ3gC3o8y29VPZGbnA3dQNTB1197TzXvEWfMLzqXadiNMqzbx5r1XpC6o9WqpSQprxEHoM19YZQ9mKMDvmTYC",
  "key6": "aNZqFStPHEq8crNviJS6CGkytNWKwegPNuH99yAx9ps425wKah9iMPaxLGmJACGefyCo8D7DFknpBDLEV9eosYK",
  "key7": "8UF4vV8yHAbKxzhE9juRyDwacfsjpoqFBrmmgMjvRP8zRaEPLHAPyi1CSzN3829q4pSwJwNSkK39XBZSjpnx2z5",
  "key8": "3gGE3Qn7meMi7tGoemGV7G7kdUKjLqBEoHsfs6XysfK3NY65J8hgW6L1GfRRDYZhvAvjomrx7eKSP34Y3ryRbDm4",
  "key9": "51gTJqqFywPCVg23gju7FKSmMyFQcXr3Ymdq5SFevuLuCuaLG4XgcYp4CjL9TA3FH9PK4y6oDZb2wH3tJkMTrVha",
  "key10": "WpHj25767ywfGLWP4z8bGwkzsTLgboUtrKRVRzUGKm81DHjpL8KPGWZMfvmVXUk66kuc3Zpk5wcstY3equr1iJ1",
  "key11": "DX487DE99bBWWfKeTwWrMj7wGEuDSiuubefZFxcNbK6Q5eqxxDcbk9RC788XQVecoPTHVGQfG95hNQTpfWvYbKb",
  "key12": "4VyGDmdGav52cSMLeM9xUPVFtsMAdUtxvpFJJdP1d3Sn2e3ajNtU18wD6CaoETGznoSbw17xZTTgbBNZgjv4ki5G",
  "key13": "3caJT9rqwumGdSRphdgDFRSjYa26y2LAZtztauyVZfMrpmU5keDoFSFxoSR4ACvp9K4xh45DP55qs6DYrQbCufkJ",
  "key14": "5bMWs9GpJ7oKzC8Uv3eVN17M39zGeiDsiwR9rFNCYG2scgmSNMLGGjUMV73357S12prmWdqX2DvW96s5qykrtguD",
  "key15": "YvgPSvtTr8r8vJwS9EQ1s8qMJaiyyQNjw7icusvbPfVuJxmZtd1j8VXjCWv63p33pVVLw7B9cvRXJYvRUNqaM3v",
  "key16": "5EZVYzLXYpKg1VFUNsMB4y2GJ9Q97hcx7Vt2uPogEH6YNSd7AGnUGVXcQGDMretkJ4omhHgjwD56JhBb56sQJyQS",
  "key17": "67SU21qtJHeuV6z67oEnrTU9DarTgRZDbj9KsAnuYq9sPL1ip2X4e1VYpnP5KiShNYvkBs3QLVjAH8n7j2h49Wss",
  "key18": "4gVXN8pfzjdKbeVHEtwBxAmQkfj9NpM587mR8W7G891cyr5GBBxKf2yxCKdDHehwnDUqrpP9po5vJyJr5EMmAxVS",
  "key19": "3GHr8cbJG8Ye2XMMaY9tpnrtqHYqJZD6sHmgBoXMts5EyGUKxyEZ79oTcgMCZARGiP2GCwomoGhz4xRfWnMZVVEt",
  "key20": "5KP198f1C6F4dBJacxUvHXRDVatjaguHM2YA3bPgJkwqpGTX1zchJWZYWVDAzzEerQiHz6yr2ua9Z9WhH73EZaKp",
  "key21": "37KmXMcEvjtvdhcY1cpeHVK6Ue17QK22iVmPqpmjsonXhShEZD7ypKJdJD1PRWH1c9iL8DmxJqQ9ZWNgUaP74zi2",
  "key22": "Zi2kKLMJhmwuqVDc9h1uyeTLSe14J74k6rgVw5dPnbsojgTi8E91zZNHNYdgfTd2UwyMYs37FmGWKqosMFkH5X5",
  "key23": "5WfdNRcnHsXjqXs1bddJUk71H9o6HSNwbXaVNcUR6LeHgJd8FrSBsRmUyQ94pwSS4Z5RnFgBTKNTW4rx19VNoWw9",
  "key24": "2YnkRAKCS33WiX9uH1qrNjjWRaADWMQ4umSMur6VTCzZBh3gi6CqaHLaGgKPSQg8mD5GMDaaTj52kJb7aVfyzWm7",
  "key25": "3bpF9TAMcDiQvvndGC3Kyzv4z6MRADjYSk1Bi7Ch6kTiR6A9CaYJjHPrL75sNVuUeksfUTBWJ6JHBm4VpW1Ycavm",
  "key26": "5crJcVUGwxL9zWvCRL8MGE891Z6E21xcbbMeLVdD5FGinCy6YQ97kssgd8bYYwCyuRnQZhX2gRU7sxco6JCGXQAZ",
  "key27": "4gQKWHJfXFcB8S9Fyxm5sBHFaGbrsq9Wz1GMQishhZssW9Grb3QXVQycWsCwVPyVAgbqcJNvkr1KKSR1wHA4gStK",
  "key28": "5fmdvEUWmzVC3UXkD6t8W9VSSN5unPZ6v3jkyXGQxMejRfubBdTU6C81oGZ55jMVYzMWh1X5bDJJ4tSKwqPhTiBf",
  "key29": "4SFrAT5eSRHxQ56LBhRZU3cR6HS1YJogvNrZwAtcEysM7NBQ67YRpsfKjSHbYd8pDg85E3FJME9evw2nKfmcBtuN",
  "key30": "5L1vM19qd1Zwbodf34uYwqcWD9iwUrsUvvjBEYNti9CdLJV7Chq9PSTDMTpsm51JE2jqjhL139PqwoHuSbBmwNcH",
  "key31": "2261KXrXpeE4XGdMKhvytFxGBbRcEjom4tDa98BAg2JwAuZoFgSeYaFjDLzgwNNwxqpryeoLYANk2eqBauHuUsgU",
  "key32": "475gJRH3vhiTmXiiiVVP2VVR84HgDQ7MAJVYGxs57NjVxfF81UeMqSYYdaE8uZdeB3sALokFt7zs64nnQDA9vMcp",
  "key33": "4P7yskkxw7EHbjc5MyA8aTcKTXrso11A3B4by4QNv2TqjEvrm6zmwzq5BQMYCZUkxNEQgeQ1jxAMJxsmFoNojdE5",
  "key34": "tGmUcxRZfGknQyUWN2EzdfizaT8yWdkZWQqCWVuirMEHLPSaH7L4b6TBvSHFxGLcQg82me7oc8CWcj2MLP4Xewq",
  "key35": "4zuF93DBVN9mLDXwHkGvVF9SgLLvqCDiuTogBA9o9ASoMCZKSLHBubySHyWfEjEhLzj16ynEKtUuYZGrYSkwfcHq",
  "key36": "4K5woMJi74gCN4fekHREJV86wtJRmkCyjqmW5qHkNpxnZUz3YYDUA7NzZpaMe38xcMkeNSMSjtTH9M3Tqv1D8Cfm",
  "key37": "5df32nzHsBzDfR6V8SfLDwg8eq5bW4JppEWm6u3R6c6FNitJFbkQSDkjeVATC5uCsdNyfTCdjPHBec4gnG3TEwQ",
  "key38": "3SYeSx87Ky5Hksgi63XEUCe8G9U8CTNW8BVP82ZR3VRHhQgbwAE1y8D74iTNsGDJZNWbo4yhGJ67rKsj4CiFRHA1",
  "key39": "iPQ9TyYyWMFcQCKgtVwtciz5CMYyJL9gpYTX7vEk7xxSdi9PZxwcEG4NJFRNGaryfVEowrGZwtheavEh98pUWxx",
  "key40": "4kzuhyoUrm7UjcTQZdfWzYmsv8fdb4rSpyMbhGVBnF13ZowFEkoTWL4if1p8rfNoTURgcKTnvZkwEgNT9fRTTbv3",
  "key41": "5o8boP3PuKKMDM55GprP7vx2KTgDKmhoriBanNiEJf3nmgkS573qwt9RDWaQ1xwZRM9RTTcmQgwSQAKTpXVPu1Ad",
  "key42": "3G4Vv8Hn6vJtLQwKHmFUajuua5JvkD37cL9cVYhUVzNufhTtiYNar4WR2bTwMqR7egeo3H5ZXyPxkFfd1CUTazjV",
  "key43": "3ioGaJdN2Y5KPFYiq7wpEUaEmiLQCFbv6dUyDqBiALXX9US4Hz5qfVqnxmy6Ek6s4xfK4nFLrjpjTAZRY5q4VHBn",
  "key44": "77Tx4t5omkmbisQLUVTk4NuzQowoGuVp8LikdBgEnpgV9BqiEDeN5HJ6o7TSKJHAn9dqRcCucAtT4FrQ9iaCSyQ",
  "key45": "C6wMTMedU8CXQgTNPMmj8EmxcEchsReev7gGjJ5f2RepDVHnfsxspguoie1fiSgHgQPhtz9ZTZH6seiCVZnBB2f"
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
