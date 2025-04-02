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
    "5miFYdMfri3QeqZ6FDY9n1inDWPDanxbwu62t7eQUydmSyKRzo29TVGseQTpbGo47bXLhTif2Ryhm5j6pu5eJut7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3nNVVHnkdCLJWm2EUgKDZiYnyBkvS1SJFPkmjXC33SW7MUG27ortTKvqzL9NxUnaDso77pNStGeWxhbZjtyUym",
  "key1": "4QNUZKHfWnQv4CwkcRgjykfBsQK5opqAvZWpKe8YPD95mjp9ZVJ5JrKtSiu6cUShADTwep4MoY4r7CZZASYhGQ2K",
  "key2": "2Jqf2CCan3HAWtQVuuKScbqVjZCYSEgC2Suba8ZQDzk4gRo1VzCyzrT18bqEvjiVeacGesZPfjff9QA4WtwPpSLp",
  "key3": "2fU6XBwLUM3wrCcmcxLcK3wtRGMLBTjEpZpcP8YE4ewnq8s9pWr7QKwRsjhALEx46TEndYgiAToKN2Nr4BXGb4dw",
  "key4": "2EgX1rjA2SeNB7vueDujQCT4pDv4gDnoLmmBDBK7tFUSEYy7NNHPM4G8sR59fNiJupwyfgQDJgJkDxjrUd9HnJkV",
  "key5": "2WtmXgJDJTiAbBLCBK3xrYt3FfERBKL6dfmQwWqYPWaxjNSKHy9CydBHP5GP6apXScyaXNsVdcbbbwgSfXuJm5Kp",
  "key6": "2cWvVBPbtfLuwjBFGns2n8kUazdwfy8X7ERZEVGAJNNC9YbxoCdMTedaRHgSxkgUZKec5ATmKepqL9yLFQeu6LsM",
  "key7": "3DCevGDruBMzutns2yUejpzzxZGW5YRxxMDCjNKb6uniR6DT6Fa2JzLWKcpwzdzKbLMdss53LMgjJE21871mECeu",
  "key8": "4ci3ohDq9aiyfoejKEBB6vbyfeU7Y2Fscn7EPzfpnykFPDunFdALHY7XJjdTnB9RunzKzoRsCvtggiuNYxNCXGAW",
  "key9": "4bXBvKvTaNwf5TkBz18o79jKptpLFboYsH1T5LV9gDBnTCpvFdnnjmyMxurozu5G7gZCv93g24QPmo5DMbte27D1",
  "key10": "fgSopmyRYC3o51d5CijCgxthUgpXZP9hkeHH4Zt97b9H356wEhQNKjTesFWwwi9V8579zXFF4DjyDbXPe4YEj26",
  "key11": "4CeLYmtHv5jktGJvK9FkcXJQQv1561fBx4qPgzRyTPoATfgEnL73tWs6utPrTagRN8P4eMA1e9yZs1C7PkenFuEY",
  "key12": "37S4tqNU36q7dBz6ZGet9kyDnfhEjKbsyiRuL9pVPXhrDQGAY73JvUUHLvxurLmbqpCFto3W4XG44wNh6xFLu4qx",
  "key13": "3QisyuJMXFrkogb8Hh85Q1v7WdcUgn72UVz9ZWz9MJwFmMcfjEKKPQbwJF3Zt6NMs6oQ2wfi7LkrzTnUC44c2tVX",
  "key14": "2mdbLWcvbMf5VUYKtZThQhMd6Rjwjm5mmuk5YtDp1gLXQDUwvhKE2oLufyvTdLzncSc9ZxeN61sCNmYW4W1TbUGr",
  "key15": "4YZdGdZDVQtWWW94YM6a9u76HmJkSuatRzEPhZtc5Vpn8xMj8ppbWXvpDeeADD4QsMArrdagpYXchA5zu9tiiPMU",
  "key16": "48j3BVfRxJDvWc2jEsMEbAAhhpTZek13kByk4zMKo25oxjzx6WdexPUkMcxJ2qkHd8sxVS9VBrZyE3pkCFzkjfdk",
  "key17": "3DqbyVQJX8cJ9oVKySc6Psrw37AVecP4TBGWYcvWeSe1vN33LXzKkp9FsrPdT4WD2jckeiSinEPji3uN91Q6hvsf",
  "key18": "HGZF5DN29yUNkD2y9GDDAjPTyKtPDhB7HfEBYRZaBS7sdQdeoXjnFzgD3f7Azg9Wm83oqEFWezCznFVmT4aFWWu",
  "key19": "3AjwaeaNUu3dTd28HhxV94RJ668tpsFJV3LAiphujYDakbiZfziNZY3Edwi5MFBzpuQstPLf1B6BtzKTB6vWThee",
  "key20": "4o7Cj12gDh2G9VeaCp7riHS5u16RHutahHLZ9Mtqa27nrzno6SdKZpCTWAkxSoQQ6bJdFn5H5q8wZdWaJK5k2eQ3",
  "key21": "4hNqUwpRwSTd5sfC81PQCZpCmoW9HHqYEdyzzUN8zodUy1qXED3NzN23fieYQN5HtJCmjTFg1pYtULYgf9fK4thm",
  "key22": "4sVQfjtWYmnjeitnWiUKt7sp5XiL9JQEBCoL8QWGxGvCptvjYRiKmh1xZuAW4YB6CRWYPFco9b1ZMNCKEPQctDL5",
  "key23": "FMeBdKrL4EcmSRU2tvcXPw6QPnSdHCYZ9NZVhoXcc6ott7ps4ssmcbqbs5D7ewgnqjSTF9kjdCASatNa7YDoCZN",
  "key24": "SRiAaxzaV2z5uoij59kti6zciYoSLc7zFkfd5tMmzA5K5WEnqbvF4CUsqT61WfTjXoyLfySByh4VipQdKS1WyJs",
  "key25": "3ryzHPXz9Rbtdd5iQ7Ndon5tKPxiEHw6pDtv3PRs5PfFMTYRCtn8448rZJWij5hcCVK54N8epNdQBT44ijwW31rt",
  "key26": "4Nwr96Jcbz1pWnGWtwSJh4UtTYSzBgrRkg2gw6DGSmkoBRotVd9tPUqpod6xnUPSUDXiM64eyAKgfH1g2Q3PigUk",
  "key27": "mnor1cxwzs2jLuG3C3cEo3bjhucERc85ryPq7AEyynG4ihn4nBMPcft4tnZsqr4BboYwGV5gaBsPWxGqamrbdjK",
  "key28": "Eyx5dsu3L6j5SoQWfXsP2DZVvCWb9xWGU7Lg6B3xQkTarAqCfh9966bvwQd73v7DrVVhCXsk1ndftopEVdvfsiL",
  "key29": "3eGUGd5m7zpZupwEtQzKTD5q7TP95dit7cy7F83q1HbPb4BQwaq5hiiU7aySvoqM2swWnab5r8xmd8dEN1L26t99",
  "key30": "4TTuJDLVLQqePjqQ5N29QvpL1zxsircx6pqwXhf7pR62aLq2ugfwmhus2WCZxSDKHHqjVA45T9t64UzuCazLrLEU",
  "key31": "5LDH71UTTcfPqTYPGVixxGjBPb9nLHGe8yie34MRkNLRVqmQaDHBfdJYkcZ2xW6Z6USZVfU9Fj3x9uy7FfcjBqT4",
  "key32": "43Kn5pNnoQSXhEvuDu25jGJxS4JXhVMiN6wcv6yrP72c7THmh1bZ82PyMNhWS1Q3tCJ4fKem5SK8CeDHYM29KarW",
  "key33": "5fEt3SM85u7ewRvUzoiDfNt5htuktERXRwkd7vc2VFw5XNqeXWQ3Va39QHYb9N1LPdfpmUa3yM6WjPxsLUw9oKGV",
  "key34": "5ZDe6p6xjkkjF3iiCcuC1r8WN6h52LGns7icvDoapYFsxwaUXanb3ErKU6G1NQZnUTisvfYhGH9ugVSgw63FZDKN",
  "key35": "3GZTNhcMKvgJjNP17fba5DdoGBytVbpmFyWCmGp2m8ZzuAj6J7VRd4pUWJNoRy3RMBwiP5HLxG3ABsgFUoZg14j5",
  "key36": "484CAsh8Pahm84iY5zmPSvcnDmqqUp55NBayYoVosUZnD2wWaYn4EjP5Jufxhd29rPs8yqCn3MzcpBe5LvDup3Sd",
  "key37": "ddB7BFN6CU4u82dVvJPwBQBA25cR8KtBGeKB1XUTdSkxGaht2254noPDYErng84DwAyU42UME9PH1wfJdaKHDiJ",
  "key38": "32yDXBSxnKW7pSJyMG915UaG3DFpis5vf82DKQHf9d9RtLhTzHo3RcWnVBD6VydTgqxyawuZpQyBQy4JHF3wZep8",
  "key39": "5PJvTj3fQSWdMsQjkUCj8XL6MgbUzgyVodWgQxSx8A6ZJ7XwVJEcJ3rppQ23LJjEsdRB3vhJM2PXPVS4NysZyaqh",
  "key40": "5rLBEjLe4k113MEmErbRicMy7r8hd3sv23u3VHzYysNXbnddJSN9is6MZHbWAmXcfL6TLJMRsrnPEJQt3dPShwmJ",
  "key41": "57UHcDKJ1CYe1J2y7BjLVua2PoUPCSjVWVDcB8nyJC6NPh269wYB5GNUSmuoPtwBASHUhSdhP4Q8mU51LAqWscvf",
  "key42": "2CfbNKZD5zaySFAea161sWxvFMqwZWfEB8mtn17E5TESXeNCCHk8LajW8oQY6nUA795HimfeXLBiz5rXkbBjz7Yz",
  "key43": "2XyDYE2XUMtes3iq1t9a82zT5xbPxWB74c5iig4BKzQccxguZgT39wXoo7A8xAA5VxpsKspvTbUCfbveFz3HAAaU",
  "key44": "23Z5UUMmeiNFZmsTQ6GhHiZjcpYQbDssFbAxKjXZzpdY53n3dKqLcTcJwXWs4HVHXvpdbKiRvpCuUCMxxbyMWRWK"
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
