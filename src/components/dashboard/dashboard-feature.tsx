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
    "2KMrSCXzWZTZuU1rVwCVMmgqK2ztJEyZikVoS9FuTsW2TXRXdShTqQGrStfr9wJW5sGcVnH4uckNA1UCGDwCEL6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qtRQiQsb1MYsar9rmtkHVi9xi6ov5iy277KVMJS93WVREbBy2gWsEhjXgYkjaha6p2pvhivGkPGnXXQMdzD9MV",
  "key1": "2txpQkwsk7F35XDjbeeNoM7M5pbqvWjNfRUcZvahuxyrvkfYfeGMG77Q88voczfrgLryeuadxKs3WdUsvFbEQ6Mw",
  "key2": "tNzJrzSMDZqPdTr85HDpSBWe4t4GvnATf6tjJKTqr95h9VgRunC3MNs14tJwKXkLEnAhCGqVVXutZedDNc24vH1",
  "key3": "5hMMdH1HZjx8vpmd3aRUmq3LPevcKZiQYkXz4QTocrxggE7nb3uaqmVowPRTs8PEiSP3XLDR6mvPgVAUw7QVy15b",
  "key4": "wKo7yoGW1zqmDHhKGVk65EeVtRp5CsNX7zPaGyHD6gaEqPLHve3T3CEdTYD8ZBUoohc1BXgVH1GgfMzRizNbD67",
  "key5": "afAvocnU2YDhvWMUUKUW7Vti8WaNkHbctCKk6hk5qQfwP4EAWWFxs368wimadYEHB824CQvSNV4Bn8q81iZTA2d",
  "key6": "4VSG1ytzAJTNgTNfogZr6shz22d6MiS197k5hhrU9G6BY7UpSgyJGwtjJrzCp2GX77kbYpBSEQyM9dUUTfeVK9z4",
  "key7": "4Vef7Yo4qiodRPhPLpU9Zi2r12E9fj2rrSjHTmPwZNZgSn5ZHYPojg5KQF8ZNt71CMtFRBCMftmZFj9ntTrM41aH",
  "key8": "5BK9c46Cm52uJjJspkw9pMKYmVy3xapTkn8P2BoJy8twaUnTqx7wQWVzoBRHuNHyJDmsJmwDp6kZCGZbx72H8PbZ",
  "key9": "4RxipcJEsb69vCagVZANQBAjZeVnHgQtZivbpvwkM6AXKGeY3cBQKxu59RZUuSf78d9cT3yjecxJzKmRqRdyRWHP",
  "key10": "4ZxjGQRHNRns9Z5qqej8kwTWtWfqUn31avLE9nZJtoo4K8j67NnTs3qt2zaUwzmYDBLUiiAMP7yuFY7jypkWXgtf",
  "key11": "3RXgWpjn2zUk9gFBMSSrKPJCV2T8oCRA11uTaKjnAiNFdoRWiW81yhnkNb7VSvNqdb6hcprqzL2EneG6kTArRmFv",
  "key12": "giwx9NzYKwqLpJiXtSNEa5KCTsADmj5mkQW9MABgdYLS4AvtS5KmgRM5swmHwYrJimfdPJJHbrEqEZPVs5Zfqwu",
  "key13": "28Fsj9d4x9PYVpp6pEygax3E5nzUUaJ9FD653u27gXZrvptc11XVjeeKPwWNBLmk6nRShusXK7peoPwQFGhK1Lg9",
  "key14": "58SUcMmkXTnQzbr1m445cf7mxAV3a9cVBFu3gkZobDX2Zxd8xc23KwaLUX7WKzPc48vfZSpCMvgWPxWVRTpYZNS3",
  "key15": "4NKgugiEKUWpiaXLc3iH2AYM2NYqiKmjcU2DwWkYMc2Aprc98F6cRNn8wJMBStPKh4Z1C6TShp95LQsmHVQKCU8e",
  "key16": "64rFEgpuQhQ89qaFkwVXUeqzsVJTbJNYNXjmsRZvgy5Q1UYdrCssxhGfrBAjQVbioW7cwNvhPYHWFvwRDFqJGdEb",
  "key17": "5pophbLbi8ENR8mgxLtEz7EdRmXCTkhMeFfJur3eVBJr3cpXm6kdQGaMbKkaUgCgkPfy9kFkZSkkJHauE4eoKnkb",
  "key18": "SqjNZftukYJc7P5q6o9p7KxnNiKxy7NkocTUdyxNfmvTwKc9mZe3Ka66kVnteu8ZJUAh88yLW5wfCijV9hmo8VV",
  "key19": "rKc1Etb3gRAWnCPjBQitWscu5W8cVaFGW1NmXTMU8vrw7cS5V2krudDFyfuYEu2fb9FWaqYrUGhykEEJWDfaJYB",
  "key20": "39xba1qvDWEbBFueJnpwVBmsTRwSaRCebdxnC8eqkoAHJxxSmVbmFoH5jHBUdtzvFK52tu1ocuLEAv3HqZyRDJsW",
  "key21": "5XL616buLmvSrTsSy36YNhPt6UsYM9nn51JodTkTiXmCtFbopMMoawi7jNy1Vk7QZ2XNCVYVtYBLkbZkwzVrnSfa",
  "key22": "5sAEcXc244hDgpyEhiqtQVD8y9378yH96Ezhc3weQSirWY77UyzAZQBppFKkYjSGAB7ndqpAx3pzFMXFbGyrRTTe",
  "key23": "3gUo14HxDLYcNbhFTMgBim9KPDn4g71m2jYGJvQSCgr7Ac3JBAvvBRhsTpCyuDkyNJHe9Vmmp9QjM83DotrKfLmX",
  "key24": "3UnU8WYNs3PMgqbc6sg2GPkvZ2XnPMMzuqrBG2z8wTd6fghuib1Rk5PmArbenBjFZv5wnJs6s6G5Qc1A5uGHaBZh",
  "key25": "4R174a5Mf6YMju5XbJLKWp7VWaKwbzcSn5dKVHMS3zSg9ov2Kefq6Z6HcqYSYaydMh4CQD29URuEbcUFSkU91kBA",
  "key26": "tjJNMsacR6SvptWmJsFCxR1K9QMvwzyjCEXa6vCYsMukJsWeihNkkDrZqSzAXesWtJUiKtLVQPBVzR5Ss1ZKWe1",
  "key27": "2zJ9rQfubWeaforwGmcXDXqiNe5NxdetcCd8y2NxyCm8SwdoSHkmGScJYiXKV6WLSH73xKCadvL8nBtSPhs5vZYt",
  "key28": "4rdf9vULQSiMXoT72iYPgs189W77CSe7Wj9UT1k2pKMNZ37fQMbsh8R8xDJcSAYzNEq6PFQmQ5ghEXwfDxC6VzHL",
  "key29": "uzQnGKYyQwZ9fv3j6xWrigtsmg9NBow1AWvYZTgD2bw3ZZQtgyrxtFNFjvdDK4Crznertmmbkc8y1Y1q8EB2oPx",
  "key30": "3JdQLu4EsCbT7ZLacas2rrKNFxc5DfXLQp1HxfLi2qtgg8HHU4BcGP1zEhPuiVrBtR5e6ba1BoAzocYbNP5V7pVs",
  "key31": "5EzCBYvUL1ASUV51EKCt4hgXr4zywHEE4t9oBC7CDiYsgXUHDLCStETZCJAXftvTSC5KdwkiVm24VhZJDN1GryKg",
  "key32": "hmbQbeT2wcYXg6j1dU68TLwQcvHmRxmLJiYBvFUw8uUxro6sMgZyCMxxLaTevbgEkFi9xVUhUgMLjTdCkypykPA",
  "key33": "5GxCKF2m1KUxFiHsdGVdo5R9n2vxuXg4TnQksAVNgrkxoFtJ8qMkbsUayGy2Qj6X1gdvhHGKkR7esFAwKMABHaUk",
  "key34": "2SzdFfzzXr7FdsMWVv4UkrPYmY9hEjG7juZEq8D99Ayn9TksBQYSB95B3p2JbEWvrXwx4wtrhYv9kCPT4GAT9qDi",
  "key35": "3SKKAoKRMSmtnR8SPfM4XXDNzzC554ei69W13UbGEEPbC2XxgMfYfmomUW3coC2AA1jw6PSoWd2wJ5avVzXiFJU5"
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
