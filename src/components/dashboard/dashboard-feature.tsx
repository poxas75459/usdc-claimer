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
    "2LmW5i7GuQj5h2Qb2QmpPci2JFCBrVZYyL6HwuWtjuMzwY9e2TnfNoE19FNomPbNmobF8tuijvshJoMyhajAiKd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rM3SVkNQZsPmn3PTQhRaVGu7qD2KEMj6cyaWhcXBLiAmdeV7MKqwxYneCWNiz3NkV6bxeJ5qWk2SPAjKkBfaPG",
  "key1": "3cH7n6d9FiTKPyqgrAbyCFV5doJ4ztWHXpu4vFvniJKfkTFcXhgS6bFDRxXR9inS5vbqfxKdoVBJg8jH85k1kGq9",
  "key2": "3GKsP81UJSQunzqr5gJWCQfdxv6c2YFTgjf2pVqjvJnL8C8ksnqPVapf9BUUnFKNt28ioBWnC73d4Y8cuY7CkyzG",
  "key3": "nejdbminX6a7fYYpqS5WVhUAb2tDHWf2aqFRzAuojkBLuUBiLGt1C893TPY2dhNoxsjzDgfQJRQdTXFnvPVfjGc",
  "key4": "4i3jSy2E3USuSGoYWyBQaMPDyrqsScMbjoVSwLd9WeP33zLRXWTRBJSzXTGgfDtkzfDFPBjgr7ktnLtf16QCWv4u",
  "key5": "5gUvm9Hs4ZxdCNVdpezfF7cCycSL2JsvWAdB5M9xpFrNEcL5m9ruwHVbPkRtsqnDdbE52NJ8ehwyarSWDf94YUsb",
  "key6": "5YFsvYrUeqPWYu6tREbiHfFi9oqTBsNtD5bz4JArVDiAHoPsks3MiQPNctUPrYbvn1kEJikcV2ULayzFZStv9gPT",
  "key7": "4sDeLZ5k7TfkG4UzekDg6KenD96LNSPgs13Hons6PuwpR7Uxj8Lum7PNkwGrZiJxqm4rpDqcYgejEj1n8ka61xry",
  "key8": "5nFAsXKdQqkNXdbjsjRALxfbUWB8K651DCrjBGyCTk4GAwyWjoeVTGGg8cV83ww2uSkkUjiMnJCU1EPRJUXdBQsu",
  "key9": "5vyZC2yjsoXdbjD7rDMuKGuMoMg2QuhZzFan8VGugfgfJuvjzqpnaSwJCLF4NQ7vCpU5dJDhbmUA9uUsGvoxSxcf",
  "key10": "L53kixQypyWFgpVRTsV2p1efchX9cuAx39hLJDUrgnCpcxhzkp9iDxxHtgnm7hCibuAb74AMcuHvxKGHgJKMt6Q",
  "key11": "67YCs4Y8ujNmQ2dZrxvfpqsi24yxhhQkPHLMJqwNBmkLEjRDbjP3ui5iXAN5DmPMofbySK4KSbFEjxBq5VnqS3bR",
  "key12": "5ZWZ5RQM6TFzzMxgDNiwhR8mwLdkTEeCWryTxqhUHSisEQ3ydM7JWJkpi5mE7KnFuFn9YWMDnh8us87AhCB6ngBE",
  "key13": "Jy4S4kPpgB2JC9VRZWeoCpxkckfrD9bk8GGDpxBDSYairtPtSmbg6AW1rEKsfEgzDp9wTscuwvW4bYZUx6fuDYb",
  "key14": "32AH7WH3FZ7dsscxZaJQWFrhSj29oyGNp3zsbn6FwXHUUe7npwdw5JEzv6tdhAs53LX8Em6MbZ9ZrC7WwtXEf63Y",
  "key15": "5XXyZg6rg8wPXY29aTjpRh1CucKGSknbxbXbstNNd3KtUt7z4dgupY57vMWE7nAcKp1tLyKcrC4eV6BY9GZZrbXR",
  "key16": "2GV1xDabQKerCXzJxP1RDEpvpTssFj4vAEyjkjUvZc35At7ZtWvD7XDgDWenRE8qZMbw6pXASMT26SDdmUoRYBLP",
  "key17": "4SPhU4LHsuoSPwoBEpU3d6YpqzDuHL12Rs2vquj3Gm79MG7EkmEKpMcHv7p4PTR5MZotD5U7QbZfqMGwSGiWjHSb",
  "key18": "5fRGPqvUctX5jCzwAZZuUxZEJNFMV8bvvb2SmkifivD8SqFd96wTzabZE8k5gwiwbH5v1CMiAzBtyvNvAkLQDn6e",
  "key19": "2CjLE4kzmCeKw3Xr9GuzyodrEmzJkstBQ5XM3Ex58Ufg2eDAuScv5ppVYgzZX2BtvJYEEvfihYk3ehXDGky8SK7w",
  "key20": "mVnUa3UPq3MnE2u9dDMvThEERQw94v6s7zhwRUtoD11DgZsTEEgK3BXN7zzf1AsRYXiKiGbnZ1Dron5nxFaemLX",
  "key21": "2njY522QYXzEJqMdgCVGLCPiXTXoy5PqkfJsS3oSeHNjGBwAbYruGeKknPsZjKSDaLhqu3FrNFAe532tXctznEBG",
  "key22": "4QQhdhEVXb8eRe8CQgTGv1EdegdEemLrjS9M19afcngGv9sBUNuyu2E9t4sZsnwnFgYsg6yAyH2uWXzvsLXsNotT",
  "key23": "3nkk1NTFK68wuJenuincjdHYAzXDX3md2kj6qmzW3d7TRC8GQvTummR2TqEuhomge6MkJsnfD21CmdkgX2ZJrArR",
  "key24": "2wB5NH8pGKKpBM9UweEFibiRhgdrPEbXaPWCMzkPByuFssQhiMDVoGcM9Kz5t3sh6VPKhwxRcw1L252tUatzcCMX",
  "key25": "5ooPyu64bCGN4A6KLxaDGwmxMp16mAXebsKuC4A6EsQmSjcqHbTBWQBtXQRdM7Addo2T145JqvJNXyD2r3H15VtD",
  "key26": "4ufv35FeQKDtwUZv9ticqPiwqjajgEzMWJygsq6xvL7JsmbsF8Y1KC9WLTVR2vTgcAQfRPjHJWHcX4mLFMTgbZJz",
  "key27": "3MNLnu9439QSjSPtscVDBgnxEMoDp2TAFDW9V7NLBDtUNtLUTaf4bztvchiWRMSvt9BdMeRrxxvHxHUThKoqaMQ9",
  "key28": "2eiuZAtEun6Qvt9ofVa74MiHfg7vpwkV8s4VirLaeseKdt7hF43b6LWXNbLWPzKiaGbcGwwkSrJf3z6ut68xJZJT",
  "key29": "3m7rNMFMqGL2tjjBcqUGtzyTXSxgRZ1gS5QPmEY7YA2c3n83KVUVTgAecuKFJQB8asfkwGTWcUBbpng3ojz58D8d",
  "key30": "4w49cGaQgf4Rf6MQ9oBVzbU12eZGoE4iSnRY62WXmgrMK4JwPxsAvdyWU941V9V1HQDQDndNtMjLRH8peHJNH9Hm",
  "key31": "4vUjAmtDj2dLnMHpnyqsM7PfcxZke8y1uzC8Gw1JHEkgHNLA9gk1zjM4wEoYGX2hsHu7v4sci8MTXTVnH839ADXT",
  "key32": "38f3mDhEfcnwBgqGcVsrwD8RBYuEKKe1dqAMSonZqUT6C6mWetGWnBq76PraS5ki4WVYUMuuCJgy8bEr3ZHBc1j8",
  "key33": "5c4zM1caiRsCaUSUeSfExMhLYuZ5NATnZuLSzeGM541vFeB5C64JB5qrmN51Snvkx9tTSS44VELUrGEQ1Wx2AViv",
  "key34": "3zyFdz3FQpVQ6oEvve8RxA1DEP7eatY5puyGaZomUcbhtL6mx5gEidWqXHrEzcnuSweR7bcrxTnzwd1x9QP8N5DC",
  "key35": "4ZLFpjmSeVbHqmfHf6RdeBLSG4VPgePF5RrCWU97HoL2md3c3t4BT9zWPgSV3PHGUB1jPXs914DVQeSQvw9aPWX2",
  "key36": "5HE8SMmwdxoUAXKmBvm8nDPw4T8BQDNq5cYiGpLctRgxhTmUKVRkALkE69HruGK9Qum7NoJBmw9imnLWii98qdA9",
  "key37": "5kPnnee8ZqCyGup1FXDseopwyKnsKg1o97CTqh8KWzm5JkqWuGqbsod71Vh8oTENxEJsECNEZqGnFDsQuc6zpH6Z",
  "key38": "2hV19ziafV6rcacERbszmtFjspbGnoqNpsofPVZ4tDshmn4U694sxQwQDVTDREH31daxknzdKuhj9LhJfNyCbBhV",
  "key39": "61jVaLzuSyTALTnbvqtuZefRKEMx6bSwCeTsyZvfXW8CGURTpaUCXjRkUKrDmVPXLjr51zGAkqfwAfuHm89yBuEU",
  "key40": "Ho6HBVrPA9fotLx4X79XSKrTTSR9mK884foeGqtw2DCJgkpXMB631zpDzNi1mbk7Vxki6SQJ3EdGTuSijS7FPjh",
  "key41": "3qhd9kJTv7BQXJGqBPPLiyHhrvv9VQ1Qbk7RBCuUWoan55fYYcqrkWHZzqDo4xEPY886RaLHSh5txxDZT5HMJ3L2",
  "key42": "51ccQBp4cqvDm63JTxuyhu2i2bF3bu4RHuHLvuQuXG8BRgGKNcXjdEN1ARLEMs6T9VqU3ULg9J7mpqbRneggP4G5",
  "key43": "KCvXCtMNZjVRivpaNE2378GcsnoUrWUNY9VEL25ZmuXJHZSTxoaS9aVQwbdYKF3ZVcswb4eze4WgfYVU4q6cVY3",
  "key44": "4QgN6AASSJgLjBtKmT7Jpi2pbVpChmtyvtNdXqqg94ENedRyopScRK37ekYnYRtqhLnqwmUTD3RMJV3RZiE4b5uj",
  "key45": "J3V6pa6FwYt9N3PPey4G113SaF1u9ZZ3sBDvcHuiLuSM8pM566mnXF8AWLUjdG93TyzRWdayEcQuPLEmGdByUcB"
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
