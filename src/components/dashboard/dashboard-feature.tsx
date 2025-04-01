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
    "5Hz8kNYAAmBE3mwbhwR2QwMxYCeCDqy5QwjZwuajVsUjKpPRoduLkejT2QmDbxRvpTzoSqEWGzTUxAuDSTiaAXKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F42FECv7j1CHaXZwb5xk86uJhR2A1Yj95bskDShY4gcep2faN8X5t1Wajvts7ptXgwSYeVknQKwnSoWQWvV3K8N",
  "key1": "2HbgEQ7CVBkESE6YV9Yx1vrXAyJkDMqRJqHa7Kyt5iWoc46V4LyHFsgUaVhQDhiF1Z3kmtqcT7nWb2jD7BseybtK",
  "key2": "3gf92VuFf2L2HiepRtyRaXs9F42Tr7jC7vsEWCykRvW8QjLqKpwdfqAAXBYUEiGAgS1Pq338vmEAStpoz4uToRfN",
  "key3": "4KHY5PjidEasdSroQv4pWqsAspppaVx27VY9gcnjUJxEzLg5nraXSbHwnBzN2w9rJ3zbKpu5tMGk5QAVJimH6KLA",
  "key4": "66KBffS1FcfKd3thkZu3ZhNj5tmucvkspWmyZEXYriTDErS4MNXwpnAGDmb8vib78SQJjXtY6hU73tvVb4VNoyfd",
  "key5": "5st5eXaCP49rQVvU4JTzjTooiVoSLSbd7uzPpAMgh9Pzx6GvHhnLdaAbKh9PsLM2TznqKA34oViyuhck96NQ6ntC",
  "key6": "21yYe7ncEVY59WqgNUTnh5ZcZ1eagCDruEnR5ntz6f61jQoXLtCX6KjJCbxhxpa8D4c8youPUFazhrxmfWiRnwyU",
  "key7": "6W86UaBKo2YXCUaFhYfvLmHQ3J7rDWWY4qVK2ygediriBqbkyRXLznJZBb8jEoDQunjEPr8vyiSxjj3ne6iNx3a",
  "key8": "5DvaWykpNkbdjsnDP3Yz9LN8s1YGmEdY5A11fexi6JSMQGCsB8BNhewWVYACrjyTLuioAPv1RtWMr4TU8c2HYVYZ",
  "key9": "3xrYMxby6hV1St6eE5j2GXufjXgYjqwerwkz8MKYX9tUwuuzTrbWnEB1wP5N7ktBFR6dZGd7NdwJynr9DYArUmYM",
  "key10": "64eNffpwbhkV97coXsQvLZrgeRLxSeuq1itf5vJrkgWGDhouMVmgYrbGUs2UdC2ocDMiX52VQMR2VMrAyCM1L1jT",
  "key11": "5PLZgXpdg658e9w6VEre3zQAh6u7tfEBm2T2daLub7rUAEiViczkgjn1fdpix2dvGREXmZ6eV5saSgdv8JTdMVs6",
  "key12": "u5JpGujbYKNJEPRo5y58arGh3VwTemsvg2j6hoHBLvedQgyjabXiz1M4yyd5pQmakEtenf2Bi5CRq82NH4nudzm",
  "key13": "5zaeuiMQD7NYtGkfzspShtuiKi6fyzSDF4q8K3i8Kxh9fhHQBxwUyo7j51u51M9zkCtkGdfBKt8wgRrzTQa141Vc",
  "key14": "3YoUL8U4Ry4BBArvHfHJERzmXqw4tJrySjPGYxykTZa5UsGLTBWdBTdY1gEYhMGR6iXopEPkBAYeRevvRMc9MK5D",
  "key15": "4c8qND7rBMmSe25hEJqKLo9pubBQYR9ayuXpRUjxqfFwkrZmRSZgRziVFgH2KaiiMzesZvjctbhxnLSGWkCydLdu",
  "key16": "uMMsH1qvFkqDk8hKrdfBZGjkJ3e6Q8TgTQuPEcz4Wa6NQ7mXjGa9zcN3gRXCB2h1e8BuzoEdLjVuojEU36SYK9e",
  "key17": "5rWTg8jwYcae8Gkeb43TPRLxrxT1sMP44JUcv3hTRvqgY2xnpPkoHhExh9Vy83qeVmqZCojf3dZiDQWsiw1aKgwZ",
  "key18": "3L23cDVWWvWJWx34RoREDsY8rNu8CtqKZoCrxJTWGp2ya7q79sU5XbEHCQvrx31iJp1SnrjcbZD3FNp9ezDXZnoQ",
  "key19": "2fSpRaLYjWsRC3rWr2Whuzh8DjK9ZwKH8KbYcQng9X3iVo6iSgDbsdX98JEBXQze9bqTvtj1KkzeRktZtrDKWUB",
  "key20": "65TEcfacTGqvqLCK1nkEMa4KGMnsC696d76TaSdwBGDnT1a8X1F1URzErqWqdAKF859z6HtN6NyXYKBgJ1qXvChC",
  "key21": "498bJckqrbj8xiXRY4vS9WhKWKEyvYbvkKknJBQ7rRdsSGr19BGfHEvAiRKKGgFMcfTrQtzbSSCfoDv7ihcqpMC9",
  "key22": "5eCHVL74vggdYkQEquigdsqkjjK8ei4pB9k3tR51sAxV1CLS1kQrvGevo6ANFC9du2KareavCfywKLxaHnZ1HrFy",
  "key23": "5m2g5aojuFVmxM5x94TKSe7jgzqn9Mtt8VNvf7pvWRc5KzkTpis7YVsbSp3t3ikL3cju9yNWgwFcGDPCaSecntSi",
  "key24": "3b8uotLdAG41yHyYfB3TjypF2mZXgxJ7tP3WwN1xJgKTM9JEzv9tCfLSy9Wv6zeZJnND28n9V5V8m5asKgeHXw3m",
  "key25": "ymr2bVKyah3bA9eAW975moEBDdydSuTUTf7xtWGpNEftL8tC9UKcrWe3zBAu5cfYCPAAComAuywhuzFk6vQigX8",
  "key26": "2XxmuLaaZ4X6DdxHwqNMqXXtQawQRvKAqD3st9i4PuWUWrfSQiAa4seS1AMQ1ZHo1roFN1exEQFbrTPsCy3a8cUY",
  "key27": "4SmHQ8hQVABuv7Yi6pBMFXmKXYTH2Hg2Qm4rcrxrFnUvJnuEzsEs5aeDNH766Sksz7szQY9fdz5cTtRErPSinmn7",
  "key28": "5mZj4kWk3jGZx5XYfH6CMZfsnkVKSzscuzHkP11vgux9LYChtQh7F92r3AR3WzzUZGPqf5VPgc1keTo2SHBdtCLh",
  "key29": "9jR2mZ64sLQB6gZFVRdNmfjYQmA31Lxy9hVaSdy2NrggHVRf6eHwm1tnGUU6RgSFbHeuetzcW52TQEaQowBTRMm",
  "key30": "3zecJMLPjXEt4yYwMC7uZvsB2KrucfckPp33qPwQR7m2atmBcfgRHe8Eu2QL9mWMFhpZZsafdGxeRFNYVhubzG6S",
  "key31": "2wPQYtkuN4ZykpSecHvpf3MvrnE2a9TJkUnK5EatfeBGSa8nMb37nv3vtPr3WkFpKUKKRfEZvVN7rb99qsc29Hge",
  "key32": "485WL6wps3rhzdQ7Zbs57GswH7dzedVdgRNkunW8RaAHDbCb6HPAU7zCiiktW7VWaQygHr4MUsvaGwf3SQ8kFXaR",
  "key33": "Htaeg4gs8K2VFi1hfxpfre5HuhUfEqHsUxM4caMFzVbs8vdX3h3vtowDm5vAnMRSw6eZuGs2FvknJfAVZ9WAVRg",
  "key34": "2ynSHou9GodyzRN99e6cEaBVtwyikdKHahnFMiJuJyyizirmSbJUKpt8CdCk4acYS9ekiiqjLS7ZyGCCXs4aCju4"
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
