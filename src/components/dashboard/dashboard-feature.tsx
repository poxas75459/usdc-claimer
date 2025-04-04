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
    "4YS2zqARzXSh1kTfSqEZGi4Mvohxif57F7o5AgZQQrFWQo1iiCuAeEcmsWB6zEHtMvsasRr7Ces9PVKr1GgUZdrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dX5AryGC7b4bui9VwErxS1RZwPhDdbFiywogWCCh5erk7vkkiX8CKw4nQKg8GbCA4x7yWWTYCuRkpj99vJD2D19",
  "key1": "3WCqznqvuPWVGXg2Gnz32VXhQjACiHVkNRKjYpkgefGL9Zdg1CeemtWZ1YudAdqErhQ3jt3NaMR4KStrMomeVR7",
  "key2": "2QjrSLvM7sokGme1fGXuecHgf9xX1jkBy7LbSBFXmmmhsJxw6VpM1QqKmJt3EjCijtRfu8vY3oGk8DX3pgvyKUm",
  "key3": "21hyUJVn9v8ySSjuJfDCuuqzcAsz4Pr3GMfxsueeJUhbz7sH5QqnfTBsVjEdC7Za1TMF7Q3Q6Zm9hHffnb5VH2nh",
  "key4": "5hCJhWZo9Z42hFYMYLxJzc1roAnVsfY8B8Jd6C5wHPryBnUmd1KgYDJNX14tS1mpHhcD3j4gQz9cqWBHALC1NXpX",
  "key5": "4GGdV3iJ3KSkTCWG6vH5dMWDuoY3HJM75yr1M1ZnZNU3wjo1vwLLduKRVMcCfb45fnygZ9fS8h2jiVsrWcA5i5GX",
  "key6": "BjKGFULKD4TRM4o1vWpux3diVgDkBme56geJ99dn5bRj3ffh5SSiafNGSQF5U3YirYfkMZEZ3B7zVb3jhJcbfS9",
  "key7": "jNnQSC6mvdFnN54kSLxD5Wd7ipTjbRecx5gQTKW6ktWdFrKhftnipNytVWVFrDNHr3uuQbVWdxbrnWtBDbpHVMS",
  "key8": "3enTuYZ4P6S7j7aPg3yLcJj54LE4AgmZux1L9TJUHkiUEz5EoG2QdzNKMyiyLMeyTFJzZa1F6MVJKQAv6uHyYaBj",
  "key9": "qPZvtsUT9pLgY1J59ebmYZWcW6MNfACFKE1sHSWQrwJC6eGiZbgtsEhWsgXn3b1UsXwTuQnKwynVn58RNKMhwYn",
  "key10": "jggEaLFo5PDq8zwSWxdBmHt7LJLt6iAps6SFzCW2yKBCFHJWwzPUr8zh42HXVpn4PQZs9XjY3bA4EZLtrKU45uZ",
  "key11": "45PR6TVYuWZjHw67pApg7mVCPXYviBASqtbEjcZkaqGxvWa7FAXzkgyMmnjCYAL3BaUWw9ZYDcJjVkiJPKT5h4Ne",
  "key12": "4yKo8U1RXJwnNdWAqGnaK1SGrndL1BSAQpqtx1yETP28Cj37P1naoLdQXXUnHknbGVk2WWpQbNZhciyzKNdBATPt",
  "key13": "Dfth8eo9rUSpG321oXcWRtrEbar8NqTakJsbeJ6LBwz7ab6zRdurDec63Fpw5S2nYcRJNLoheAg86zmQcyXJwai",
  "key14": "67ZDDN5nfD94Kum62mFpha2MayCYzpdGSYo4dQLe923HgfJaVuxGf87FxGYa7b34XwHHicL1wB2P7Qk3SgEaXhW6",
  "key15": "5yqu2JaVZLVUZgKGUuA7ENwfDwTv3r3jdkoqFkok187J6kvvLkZCBagKSDxVWffB86KMx2uREHRLxoBHx4PUBM7E",
  "key16": "5fXKEXMeoiKuMjimD8PnobBkAacCY4RMhEuGDgHYUc6YPNYQATUHVJRVdHE9rU83MYiFQ8PLz3FFzhWK8j5PewFg",
  "key17": "3AXFTK8jzKeycXeJ5yUdw3h2aDrpEMcL1T1eLohkBjfaX1gfswyvcr8jDQ8WsvGpP4wjKzVa5S32mPtTVbc5TPPP",
  "key18": "2s1xHV8QHMBCDhow8Xb5dAnz9wMpHNZr7dmDLE2wcLmEnnUCq1Hnn7WraL8zhXcV8j7GifVugRL1rac2TUXGbhVn",
  "key19": "3G1G9VotVW9VSxWWH4MGgDuoPHW1PqmThMhNK6JLFFN2QXQ2XZsRb8ZsBxX62UFMs3BCseEHL9cgvGPoHS5CiLZ6",
  "key20": "2CWshZHvb1dixwwtnqzPHSSxkgpyqfuRTasysJwXwnPWbm2kuHc5wubExCkhXfP2YkHcaPk5VWcq9kVakQkJpvBS",
  "key21": "3avuHjiMtUjPu5Sf1Lp6iv6CUXGCW5gpu1T4GVc8moQFUB7J4XmbCfcezd1FemcpmnayK6t4ZTwn45pBSHvBbRnD",
  "key22": "2o7KC15eDDjoDpiQEEZUXYTDdakKGhosTawVsG8jZcKmZMouRXbUeFKRaDbFjY9FKrSQsH4guyBFRnNMQSyr9VCJ",
  "key23": "JFci5pEdvxPGwRDiYzZGGST1jh48zYSvPb8eYcjyA7uJUGPHCExiFofdWE1tdMkRCh7i7RALaGHqyVgn4rKtbJZ",
  "key24": "zYvBbEiqM5TXJVjsBLtLkB1ZUFTypduubtaWA2BsvYyF7Vpmr66t8EQ5agSwuY6SVyyuaVTRVUCB6UAagWzoNp2",
  "key25": "5Yya5Bf7fX6Po9YscB159bFymquMXhDCR7qx36WxKnbwtk3etDPMPN9U1Zr2wAGEJo73nroMuHEbDYvGBBVkQa7G",
  "key26": "3fr3rGcn42FMmRBAP8apTkobP3HSmod9wnxnA8t9DwyC7SGdfGFknuh5PciN6DHgKbpUQhU5XWJaGYDQimVUqJJD",
  "key27": "57x3YJCW4ujxzskHHEPcBTEvL4zRe9sup4vf8ns7WDFrWtyTYTKK4VFpJc6K2EcmWHfKnvxTJgFoXVBXdZJxwzpR",
  "key28": "2mv54YvRD95oHXYiPWRXPW1nBB4SGEss6zRRzM4MiNqRkxrCPZPofNSnMVbhLnh2fcif5mbx57RCtGPfcYPRLud2",
  "key29": "G4R6qF43rkXmmGUZ95ogRiz34N4W1UpMjvemdDV2RRre1jKsTR8QbjzbfJmzdYPgpE9vLkPhn7c7C3xPTdYahnZ",
  "key30": "5A2ub4J3Wg3BBSpCcFVaaTfz946yUhucbT2qoW2ko1ZHTmNKp7Ct4nti3SeYTciYxLH9wYLgWY7EJfxPuu9U1mod",
  "key31": "4i27ewCf53mLyQiNZ2mGp6QNsyxUtQncVTUVGFn5Xis9YPPSjR9TRBAbsjnW66TH8BzKZJRF3NQQNPiwouGiztiF",
  "key32": "3S6hmCWzsg33fGL8ZJAuwBDiDhUVnZviZyekbnW37JpueWA3WoL69md96jwWCLQMtiw6Cm6zE6zVPGZK8wfqWrLq",
  "key33": "2c8KVMdZPJbTJUme6n4HwQxqxymHqCWh1ggdFdQJyPbAwiRZnp4TiC6rk5GegF5paEuWM7C3zWrQ4WvBDjq22PWr",
  "key34": "4W3LtPJu54GC94hWHcrt928MaDh42fgQJskGQmogYmW34AtnwobDJvSxgTxGenQ9b43ARYF3ZUNSwHef5wwgbcja",
  "key35": "21zA7J7gMHugE8ERfsJuzwFjTfLw2MDfXkNiJ3RMGHkLN4v6AzViNTinx4y7Gpk4zdPRaJG7u6Qc4NNqqD4meFcC",
  "key36": "1Ke2Sg4WVfnpuCazZPHDXBAZZ5CRGTHHizbDQsoAWc4EVqL6FQvrJyowngYKTHbfn4NVWmPMeoGh4Vigj6vkstA",
  "key37": "4PbRXc2NGUGGRM5jaB1TyX5R9jmaTF2FJpVjL6UTfEjtN5nDXdyW2CDhwcjY79wCVvP78iXcH2hrKWXtBBzrHEmB",
  "key38": "3g7rt17BxdM6u9fVqLoQESxtEKMvXMMWGYXKaeCoELpU1LuGvbnG3e8mCjhX7JSgbXZg9gFR41ieHV6B77zxuXxP",
  "key39": "66CofELGhVikwEFnXPaM97VeFLmmfXJaTyFsmN4hWpqbZmsVC5mG4GmzdpDFtMxdXsKnsvybV6nFgS1fduhBWzxi",
  "key40": "3fHB4UPfcMjzJj4B2Hzb7twQqLpBygSaJ5sJqSRaXgHgNvzXJi8oFPAeymQsXXpx9VZFf5Xtr5dn9h8UYejKcTEh",
  "key41": "roGCnPExNkKETkhDEoFjwAfy1BPzuBtr1QMuqkZ2Ne9KDznxuXqB5R9gFyitnocmz4kmfvbYx7ehTqorCgo32HZ",
  "key42": "KBSmvSGyZPns4uQDX2AGovQERza5jw3EjAH5i4mGsXZacwBxjXDqHi3wzsCBahiKL4toiz8Ugk43Tuu4n9p8i6J",
  "key43": "2xvCQyg4UyjESPpShHgchpmH73Gm5GGmMTA624vgggMMurDcEBZ6F8Jy644EpuYfcdhaXg28v4u3jnQRxc7TEuGD",
  "key44": "64zv5cqSNknb2JZXhaJ4DHmGdx4dhBFapsVPg9MPgJEQcQtdjHKZA1jF7J7rAMYvESudM8BAN1MDaVsN8PLtbxb2",
  "key45": "66oHHXUK8W6kmLUAmKhQUm1WV3QuyfsecCjL2AE8qaWsdZ7xNwnMMhaTo3tAzbgykvLUQaCbK24DXUEkSs7T8LTr",
  "key46": "UZ8ZzR7jca4JEEYjSbKq61Mx1dZrH5kRs2qcoLvMrR1uRmVABPLFx8SbNmxA9uavXDod6LtW4xssoyEaRyp22NE",
  "key47": "55Y8zkF11tFqeHVtjPLjm7LbTkDodG5rVyGPVrsnA914yJFvDCDmN8YfdpCn8Au4LY82VSjuKoYGXjhf9WFwPEBc",
  "key48": "HgMg5qEY4cr9bD98nR6HA4FF6vZbCtrGDjjDb8EomQTscjcV47hzPcsmnnM5sZ8syJXi62VCeqP6CCmnA47x5Rd"
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
