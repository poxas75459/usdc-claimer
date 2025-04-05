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
    "45jN3dcLunHYgpQEiAgp9ZVxRda6CwsSHBUZCtfmcyQFVqQcqzEzKzFu1vccJWMvQuc7aPFsHs5mY2rihnt233ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SrwJ2JLCCE3yUopne9o92ZB3gCbH7pb9MUQCNBBEDk5hCcfBWTFscxPFm1TW77RSyTxyGby5qy9swd2tn7721M",
  "key1": "3pL9qbddDGaZcTAbQApc2vHUsPXmykYaw4sqtUMfsA5jTPP9BkoeLQVC9q43scHRmxaYJnMgkgytRiijydkHrSK1",
  "key2": "3qwjwV5QBZHRJZCSzsuWLS3QCaH9ycDb7nXaRjwoJPH8FsLVv15VMQxLPs9jXPnsU6eWNEu4iUQBjTWD3L2xpEcz",
  "key3": "665HAQCBpztuZruKeWyDYaoENpVFMbm7pRiBxi2LSVht9tBVzjMgDqPGs7JJzCwtDxviDUr3GMXUBqs22oJYyPm8",
  "key4": "34jVcwYLPzZK7gNNBqjDVXPr44J1Zk4qoje8z8zq6UBT5fCbm7anfQVCRkycu2nnuWJxgRaT7cWGmFpPSqdK74Wj",
  "key5": "46EgjuRMEYMGFFY2tEYoWtZ5WcrFmXRMkZp72UfB2Ui9cNUCgzf5bZfZEvmxZMcNHS1tGwR27azzt1fJhC1iMoYB",
  "key6": "412Av1f6vPi7cpJ8miULTosK2W1SHjvuyhHQsCceLTMLFSuNkx2L2ufos4cK7qrtom5aimc4sEAnh5S6KnzHqkYn",
  "key7": "5dMQVqVRktRX7RbW9eFUbN1ChHMMBbistxs2G4J8by4PQCfCqqGqzfEd4kvrncbS61Ldncmd8miBr9hbwrmyMthT",
  "key8": "2X4BbVzPHp2rzzUrG4x4b52tE7tFbMGzkN9wGe1NaLu1giKNnmoTupE7YTfgu8tiS6Eq5baHBGZgMdLmoN796GYB",
  "key9": "3Ar5o2gj1ULJp3svGUARAdaRYQe1Et8qfsotpTJ9QYSCLmTUn91N3HkfSfeXeutgDxeDHiDw3vcKaCx5UWnYmTz5",
  "key10": "3z6NbwZUoL2bA73NBMP5ZBBopCa72hkVPJ6uATaX36nYAPNgHGLZUqgTPP9iSqg5ynZTu9Bm6zNPKwUT5R4ai9aM",
  "key11": "s9bjsvXpg9K9TZ5uB1f9JZYYA7zSuXxfzByMbyTWpAZx6W3AV31qkUVtPzZAqsfmRG3JijHvkCNJN1hHrjUm7RS",
  "key12": "3ME2UiFxptQrn7nJc443U6xod5vLX2XbYsUDxkT7AFhgPF6GJZwGu4qHnsvBHHsdcqRHX8D1fM9ajTrvRHd7K8cL",
  "key13": "4a7sfg31wcXaJif9u8huPBL3WAn3wPv97qcVwTPQgZkNJY69boY8mjhoteoXSztH5yLxbDZA6UNewTvuSAHMZ9nb",
  "key14": "2Cmw2UkJDGeZdGNRpXikYVsnu4xZmgjNdNPCzkgticWHBykXPtYsDLo8RSEpxYa7wv99p75RAkQhwANg6wotZVnD",
  "key15": "65i4xfWZoGDSbRkGvUCZoCmvmjAmDYGmyqN4D1q1LrtdfQRaJy1kwKsGXUUu4ZDHW7T7GUspVzKEYy8CnYnuXwwG",
  "key16": "5VR3Gt819f8ABBsaEGXaFXBGFc1iCLqVnSmutU7BaMjHCFudSzuYbNVBE2oj5auxZNatruociTjsdLzt9Ju1zxSX",
  "key17": "2nGJVnHAnBWQtDGG9G6UEX77LmboY657xoUeiRKk7X3sU3esuyMyLVZ8pKqPYswjHHDMVdendS1ijnkR9CHWUSep",
  "key18": "5EMbjuS3E3mD2zkeSFVUtLj7FzjKZD3gHkMSkYa9cDoiEHceKhASSEm9dxXVwe2mo9MY4BaqQaCcZHpz9NoGuwwr",
  "key19": "3G1ycpZGQqwkMEveWWwtrHP6HxCPuAfZTH3sqnAgvK97sCAkDCH9XvKar3vb81LRZBSPB5RdXNbm9gSiNGds44TH",
  "key20": "486SntqZ9GsUbzTi7YgcXqpofJ2jALn5MxtLgy2GVCDixn3AJ5uMW7Q6VgSbRvyHJMhHj2uo2oqcKo7VongNxEWA",
  "key21": "4wsvCy4dbmfEF1oiMX4pFgFRttKmWqcDtWncFLupPuCFoirTGyfT3YS9R3YtVa5DoADs1S4o1XXXVhDXRLgqg39R",
  "key22": "2zPULjaDyhCpdVTZZedyy7Z8H8EwKj4CECjSWBkBTTa5CbtSox2HFPQ6xxVC115uUnyDSfq9VqL5tqPPyUQQERTZ",
  "key23": "qtGgNbkF7gbGtVbtmBvWsWHZXFVKPuzCz2TQtVnqYk5NeZfCvEWL6acNir4wrFrpqUzwcyGZh1quLRQsSFTbnmG",
  "key24": "2y1W9nTBCiMJNwQfarGeKAQ4oLUej2RM1mLUMiCVh52sMAyQ9aEUrpDTKAFh7oa464DnQw5h2p13nVM5m1kCoVwE",
  "key25": "5BvcjPLHQu2FYXY9FXf9DyufZ1mHxnknAq1d5omVgRSn57xTKJXPP6LPvwEfXj7AhpEraHoM4ybn9XrByEfs8xkb",
  "key26": "4DbQWQY3S8uz2im9WNdgcJFC1Y8YD11HwWtR5HG1PEHdoLdkPaRRNEhrVoxHSVVM8PdB42QjESErProMyktv3UKc",
  "key27": "2xqAoMp5MLM9Fv3Z5oXvqdGfhWq4XNYkHn9FPbg7aoVzYg4T2gkAHZa4U7zbfiDDrLY7BAUpnc5N3im7B15sXKBj",
  "key28": "5cKUaE4PV6GmWJFDWeneCrHa6AUiufKhY8jrRZ1nr9NvZRbRDUbe1qWaWsaeY9TD2hoGJs4DWFND5Txx3GA9Vjm7",
  "key29": "3wzNGzdCdFLMaorvoE3hHbFZjZMNt26PLqs7CmUW9WU5xnYcJFjhZDcJSBcXGNSvxDdZJS37XZ9MXgTXhx7XpgFA",
  "key30": "58f7PfdBYda6r7yXQqQAL7NAu8MsQkbjyNJnq8DRLMyDwyyYp8RwnTz96hCxftkB35KuzouSzhjVDkKpJ8eBaBdT",
  "key31": "4dr2oNeY4oHo1UDLx11y5LVpEjcLMJ7jGqd13UzHE5CYptYzWB9wGcoSqxprAWhSebpeoqdKN1sweiexcVga2tmz",
  "key32": "5mtW45c1LPaRkywtD8E8aGEo7VGSRV9CFzkJgLQpriZr6aFpwBxuCJYYCS2z8dytCu5vtfR3nfTXSnQprT4jmaPX",
  "key33": "2akWV4VMaRdnWm2QFHTwASmKGQFVkg565gxou63nw3YT9LuCwWonMKj6Y9qxQSDhp8j11takTZXgERbVRkTYV5gh",
  "key34": "4iyugeRj25VSTrsaHFqvjk8RpWVJPKUsCjPY9C7NPEwWsX4qgNVYga6GRqw3az5U55UEMXEaHyNEbdCoQVkywWaD"
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
