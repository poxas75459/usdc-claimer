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
    "3ntaDRq9h1mdTM22Bo9uGqjBAGSYGWYCww6Dtk6Tk8sNGixJ38PvzKNfCVeXKf7o6GdtUsGYbSgbFafbBohYNUdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DhaNnEScdDkSU5WdRuRsBWHJsh3PJdioGfq8UCk67pqJXHLuFcHHuG4vB8QmctbGjES1f9hXnDxCCBA1ApeMLoE",
  "key1": "53TwQ6j7W8XH4iXTEcYpWkBscZVi4S5oPavmn5R81txnstwpqjPhHtZoNdSkacQW3kWbshjPwSPbQqocUFPw8uFh",
  "key2": "nh8pmjC12zG6ANQ7zgjBTjHUaCpn7x4guS4BctrgHaXoxEHd27HR5cLsfom2GCuShvZEMvP2FPhiZ2jKg4MaP22",
  "key3": "4nGLaAK8zD6Tc84DeMNtKSYVA79Rdd7bMhEhSsf8Shn8thXMs7dfg6BeKxfybpf1xB53RA99B1z7iPNNLnafSun3",
  "key4": "4a2qDs8gVNozddboFC2WNb3uBTCE15YSMMfJ1GHExBvQWBxbaRmVFqfhZ8jctiuUvMYfDS9EQG93js44m4zwTaKD",
  "key5": "4gK6TPiWPtmPyetsC2RvZs47CVoLqHpkFd3SG6vH2YmqZuNauLEkCmsJHuTJt5EFa7kDXVkm6tEwiEdsCv8HwqaK",
  "key6": "dShtzP9FaCJFj4MnqnCq88jVWHbE5hCBBRbYQpKwZNht9rGj4gF8kNADR7ZUJvDzsFhRAkNKv3AjqThEBUgLATF",
  "key7": "2xbuBuqBtTqigsdwNEqE2w4wXZKBnvaGwDfAK3EVUC5oV9VQ446JjLRJYJj9QL27kt2RAHpwNAARMSPQb2Hxn5z8",
  "key8": "66p9v3gXey2ocyXh1S5qQJ3PjzNYfPuHTXnYFGiyjddJXEeKQnfiH1do77PwLp1fszCmTUKPjg8ofzYBVULPTVFf",
  "key9": "5yPDKVAASFCiHgyAEgvwThBGKSTuEmzy719ZnkPtASFC8LDaN6EWGYSKm7dRETR1CCG23CebNu5HGaLPeeLmCk2f",
  "key10": "3mRgcwjH9MN2kiQrjDwNyADaE8ZXHfZPfMv8ML4w7WF3bjuWJKt2qoXZWX6cUu5sU2d3GThob3RyRtW6LN1g71SC",
  "key11": "4tVVwuyza2RxW5SkKi9srFGi7BBhugGjcnvX4tnJL9woj54g8Ebnm9wCeXnfTykLKUEcZ3E7cdD8YpyxKd3uWz2e",
  "key12": "3GwRoD3rawFZfD6DiKC9ywCSEnNrVTtRQApQZDLBoVNK1QxtTQFK5vYqq8mUGheKDrpZh2uKGtWZQN3VEQZ9yWGS",
  "key13": "3xcbS8QQyAfSphq7VDvHqXCTCoPvVMxiP62PqkfVP9njxgDri7xeBdHANxLADe117C7UkCvPF3KhogEtTUdGSH39",
  "key14": "4Rx7rUu5kbgBXZe5y1vDqrUvdzvDNhpqqNGGgE2p2pTezLnMdcZB2zpmVQiYrsTtZMbcpe5HQfUsAgzerJKnZTRz",
  "key15": "5AmkqQEDhLroANNnGDrvNxB6Qn97nHb9SGyhmAZVHG4ZkW6FajMKiZRsrnzpdqdmtbPBwYSRXNXE4T7zTu5Xb1EU",
  "key16": "2VL9jWuHEdbcQXaAve4S5NWhrZmcjjTZ8ZEmTo1RRs9PhqLAUfe4Hu7yibApkXRV6T1Jcbkqgej1WXLTjRvhUbUX",
  "key17": "451RtmaBBGmvHj886Fucf91No6M7rPK2ZmVkVRGGpT2E24FVfmWz7YepXoQU73L1bhyuQeUoPrxBzc1uE4M4WGsv",
  "key18": "28bVm8zkVd3C39z64tipSrKg1eX56QLyDqfc9JfZygyyRvs1prGG1mzW1mDWX18H6uHW4uZjnpXMQYBDe4gL7YDo",
  "key19": "46rUH6H8kfNq6Cv375RTBENw2RQKSgUBuKhh5LscrmM9LhDdLNAW5weQmvUkdiTgeuyxZCJXLebqrFFiFQ3o1zxt",
  "key20": "3XLNWKc7N28hwuWn16SJJ13GKi8YT4kPXRvgH3pT5BUtzfBgT8THHZgoFk3tzDS16tEx4HVwCVLnuBJ9Hucn8n15",
  "key21": "3VxjDqrwqoRob9zHJkeaWBzgsWtHiPxV1pzxytJs4KueSG19VwDBVjZqn2dMjuLryviCpAHJtUARRPNKqpyzw9kf",
  "key22": "3h3YUM53RqtTaA2wQoJ23NZwGnUt4W666gwmFoxebyRpxiAWwXcRr4rJC5EGVPrZeaDzPNvLtNe8TTpkQgWkXc2W",
  "key23": "5bGeNn6DE6vFveRhip9AH4e9ETUgWcF6ir83x35pH4trn4zEc7Av7iardhPv24czQBxVGUBBgFhbJpco8uYydpYc",
  "key24": "QtydKp8sRUhSYQ634iHf7MT1w7qZQvtxwTsFuRRVuDEV1tv2muqwX2jiNue9AUcdyxoM4gSAjjAXLj8QML3iQTw",
  "key25": "5mf8B8tZGvch1HVFaZJgHDq3he7FvdWPy5FyEUsXx2gmEAtBWCvnhKeJHyCY2efx2tmRhwoHGLLin1jwCo9mAnxz",
  "key26": "kAv72389CXvAM18sFj78VcQTEt332L3ugryCJ2yD9Yj18mgTFwjbwWNGbk15nrqY4ZkTWv7AXgGSJPHSVMWU72z",
  "key27": "GH7Jht15aVXnWKYMZojVJux9RcrU2EBH6wdFWdhHfo2VTmHhAvpqUTQpzmaMmyzGyYuio1qvUdcN7xE2eKCbCmC",
  "key28": "2Eq2UqhAkbch1KRE8Ms5GF8WYPQoEsR9MWkZ8os1xMrvq6ViV6KXfW3jifm1q6RoPeNzVd1bA5kUJnYBRXcN2eqG",
  "key29": "5k2XARr5p5MjaNdLPP5JFreKa342AAJg2LJZa23tht1yXXDH7HP9bZxFk6bpCJ15hXHT76LcPFVSbAYQNZt1UFa4",
  "key30": "3L3fbW7kfazUGir4fXSDJiLYENyyLt9MAa3LEamqXpmDLhwYTM2B5RwhYG9Wj3PHtMkYBuGFNPuUDhq8ULN5PqDk"
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
