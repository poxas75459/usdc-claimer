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
    "5SQdCiNj1ksN1xgZvrMWRLagFQ64zKDYyUEQ5iW9vR5aF17an1PuHCZSCyfGYuMH3UEsytt2av8Q3mkypnJLKpKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTua7Axxtpbpwyk2dNLejmw8cHXxSmVdCQ8MBUh2Nhvdk6wH7XPAbNq6RsDN7nQVmgZEYo8JojUUGeKmoxWHTUp",
  "key1": "EaH5Yk8w43y4dko1UP5urhmQNAY8AWdn5rJmbzMnoPzgVRR3kthMNHyy6kXR7CUA29FoML8sxXd2a5DJf7VYJEF",
  "key2": "49RKCULBSi52e6zQp9N7KrG9ikQAB8HTo87myJVyzSCzBVg9e2LixDmFVfzDN5ZnQQms5fc3Pa2rJs6XGjpWNCCn",
  "key3": "5pJhxBxP4gP45HDEz7QZrs7Eyk16HdBo7R6tpCoUk6yqk5MBKvvo7CUCQmQo9WmBffBmMft6RytKRBGRbVof4dcq",
  "key4": "54ujXJ7ine7ViU6RCDpsAAJMXzhXzYQZUjJYKb84bBDcsMvJaW8t7iiX8aovzPqKJhoNACYRQroNgdxrTWiLMGgL",
  "key5": "3NVYTjoKrvzB25DZvSu1PtMEroSarg6wETYZFGbQfiv9nVrjL16cTs4HFck3xAEkyMrhArxyrjdgnKstocHwX8jC",
  "key6": "2T3EygdJiisxksE3NCfjbfKm8CtkupNcjmTxf8ofFPWgBqwBF7E7e7JNSJU97rAjxDpZ3aMkSXaKcWDiqPv4L3eX",
  "key7": "4r86ZRoRDLEQqnZgnwQYvZuXwULAv2BEMNDyogbrgX16gXr5phDeAjDvdXFQUY1fDmE3pGjNZ8iynRQteRXco9Hs",
  "key8": "2VRjtb2agBxiYKSrkoUcCJS94eG4zSkVZLY6Euii7oBzuYcixBaEoG6UKLmw4XP5ESdxGgXDgxVzGYtH8bVRFE6v",
  "key9": "2cENDdSUf9hds5WT2ifMLibozAbHejdQcn1aujLzjPd3N1Hk1qiVg1bmvUoDXrFCRsib3GHdkZMdm7ViZejb49VM",
  "key10": "41BAz6Wtv78qumXPTrmtDCMefiUgeSCn8nShVXjywkp2dS6aCNpg8tHooCogsKdFKi3Gatf4BA2JTG8HNtbunKTC",
  "key11": "64jJryYLZtqkFKH6f13vuh3HztjcDyGwDVQvyuom75qduzQupNBjwnJ1VhoaSRQc2LUR2fDwrh63gBtG9qkevYCW",
  "key12": "2mPiMwUxyS9yn2togrk9t7NexFrfHz5jSLbxAjpKLU2Za9FNM8VckzbLEBxgc2HrkHrZjZzewF89qiJZBuuzCoPW",
  "key13": "5FRaTKmqfS1BXaH8ZJByBUfCxdnmY24Ufd9fyZkirnDZaVkoVefzU6bp2oUKnA8SzRe6LnhvgS2BqvB9mqRQkZeK",
  "key14": "58CJC4AP4Xc8wiVu7EVkib6Xwdrn93f7JrMRmuxjKeBkjDF3Z1BjF5dfVf4v5fRJa6FABss1STEUUuGM86rq9Kat",
  "key15": "m1Rojaj81t5gzfNzCAdRzGoCYZrAMsHff75FATinzpy88UoX44qNnicDyaujQgPHgnmSNDKbFGeES6KRncZESvQ",
  "key16": "2ZAWchnYKmj4PjPXrcrypcJaRKj4ma9s2DwmjUjj6cUWxqHsNrrEeqpWETEhWYrMQE8pzb7w8fSJeFba6ikkHcNy",
  "key17": "63nKtUtVF2Q1vNSyaFhTDiY7h9R6vLMbG29pr8u8ZogL9qjGcYcAATifS8c8sQaSbApnAh8phL4Be7GLDRY7DMfp",
  "key18": "8w6mK6D6EfP9JAe6yzF1okQQPwNwQdgmS9SqagwHWs2obF8HbNq41cjbebMfNhGccpXgnJpoxTVFqrtth2e8rnK",
  "key19": "k5zUHQhctAwmvbyS3MwrMJspgLzRyzvwqbkZrcx2ENkUKZ4yCsbGPErGmmDyHQMNAuNG4ZvhBSUTBmMQSo4Y5LM",
  "key20": "2Q5qmyP79pFKiQbAUnR3SeSEznkBMQd3CA9sFPzT5jU1BcZiC6YsPcMM4ajijJskgyRSP78qMpQGHZuMvJPF2LRJ",
  "key21": "5yZjXq36XTDFxFHrJ7oNqmwUN99yt9bKQv5minvQZUiP2gQC6zQUtmip9vKf6AU4Ae9PMXgbeWuAAMvgCwNuonbK",
  "key22": "5aCfxKbaKDvcbqfjEe6yePGy53BmaxamDkzeJft9VUPsHgpDE8VkEhbSJncSQBZxvqY5AMcV6dnLodzqujRNfcfv",
  "key23": "W8mw5p3WNutNhgQAGhgTrKNfuAFVwQ3YG6Tuu7XeHxccNmRE7hADdoFh88t6YJfyWfgwRZdVMoEaLpe2jiE3oD3",
  "key24": "4EFYHZbuBvP1qmfoTtbxsSfRfZ2wmNUA3LGipC2vJV3jmWJGLZ7h5Zda5oUTqLU9iPkRgWvm3iyGSN2t39dYVTcD",
  "key25": "2J6BTwMf2gePb5FEfiZnTutATGNUvzSdMcRzH4TU1yeZc59RJB7EEePG8By5UNwUoE9YUZ4aNkg2Xw6kdnornU9Q",
  "key26": "3hrS7Md2EPreKSpmhC4Jws33Ja9WPHtQuCd6ZTB2yY45zYHbxWMgTHyZstMX8M1Dfy37BPfyoiwZc1cE4jFAJLsj",
  "key27": "641XZ7mHqYoVf24B3L2S9TGkvQRT3hLdcLfC3YrkSzASsLbjX8C9uc1sjkcA9BM86HNfbPgidNEjEEx7PAeq5gJq",
  "key28": "4TpuTWXp5FFszRatfYd7yxTKByzy8NGnqxu35xDZ4QV7p1r1EXh7MNrS6Yr5pHfd47wvYRADujJVL2wFTLXpLbxz",
  "key29": "5LvkkaSHmvDV9Mp6L7SFNKVqJ56TBKrZkm3KtkugMvg6rSs2SFo85tfmT9N8u3qPm4VDV8DxJowyfKTff7xoKMym",
  "key30": "6t3nZWswkqahuuH5xTtwjsXjwobPaXozuPmYWgXnTGjAwsCZ2Dt7HvLLyMb6P4KVuWuaTMmBFEJYEBrov1oXt9y",
  "key31": "4bP83Zb6U7QmrJVfbePtdSyuE8n18eZuzJh5MaucyvTmtFiZSiotxyXQBbbHKpmjeLuJYNjWvejDN2iUaMts9wQC",
  "key32": "3kjenAGVF8yqXEhmpEUj9fiPSfGXJKsG7RNywAgmvgWdS1tWf9dc1sTPiiMqamKgyjYWNKahUnRk362vBFZSR1RL",
  "key33": "4KcNKJ7kaph5ndk2nmWqcg6mNwjfneAji6dK8ojomkGdTKGc5i1TDJ5fu9x9JbLWDvrjXXHWw99np3gSibpUSECq",
  "key34": "4tmVqEQAgP14qdLuJX8PXi4mGvzzeksNbYi9kxc3Xkif4S8fxkhi57dAdwWZYSvehbu8HRDDvuXZfhk8YET9W6J6",
  "key35": "67HqcQkgx1Q5sr3Ja4h8jdg49iW4W3xLnvG6MZyA9Ce5o4WPam2WrykzGjMSdPe68LBkKDFuzX6GgZB1E1zongP1",
  "key36": "wtMVSjJqZhhq37wiBe6Dz3D1rPVHwcvcLptteU3RvJpcFz3rtbjsxDpz18tCFyY9uhfyf5Q5aZCySabFNYUYdCa",
  "key37": "3RHz4RKtppS68FJo3rPMpgj2ZNUKDHqxxkwmfNK4hDeHz29t6gRWD8LmPGTDXE4nYEMK6FbhqzdJdepFm7XETL6u",
  "key38": "5NJrX3vW5vUn7YJM3JMpiWa9BdVz4ua7npxQ4NrsPFCuPAKYRvgTzVid2sB5t5K84irVVejs4V14rkPr6UJLYn69"
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
