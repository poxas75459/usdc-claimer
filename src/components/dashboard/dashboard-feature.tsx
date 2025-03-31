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
    "2YnBoABXJYyjtT9y7ApNZE7th6Xx516aqk7R6aZ8qg1koJvwSQBxuLVM7dushotbfQWGgXXuwJXh2dQt3v1Ni5BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBJqmjQ9Qp2WJ2y16mdd7cjw6hYbLYkv7WNZ6Y3drER7Py9Ka7y7dEuLhP6fSf9ZifgTXcnKGEYkg2o9aLUSM13",
  "key1": "4QcLWNPPjZ5q6GgRAFqhmLHKPJr6DqFwXaA8zx3qfqJFEHTvQuTGeF66jb7rMZUDYnGS6EYzAvoVuwae3RJCWUyp",
  "key2": "4js9RwNnDd8K4idahLNCk63giiPSdx6WvmL21cihu39xXVRWVkEjB41HdTGhfxKatvcE4KuAg6e6gvcRYm2ZZ76P",
  "key3": "2DHgai1JXWZE3SCb5eQSAatXf9AnYEgqxp26N6VECyZM2F4YvQ159jWehpoGk7ofwsbQhCug1qwRg7SveyMFK8bQ",
  "key4": "4wvNSFZzdoZ684CwdtoUXx5uGFvpKZ2wcmoaNbK6k6yv7zQMYpvzVSvW9y152W97mfppk2s72mBohXvqV9SaUj7J",
  "key5": "2EH17cbFMFn67oTCVEfBN3QBvYtWFX8VqVjL6zpA83xFzZ4kMGwptiUaCTzL4QbYBTu4sdEVtuv1xHfv3ffnDvbU",
  "key6": "x6UMCPjwXG3RPnCxDdWLLXYXvo3yqprMuoRZnEmazBqZKXQSwGxcNGSkz5LY4tVpMF6QMmdt8CLXTvVh1dVfeZ1",
  "key7": "2ybxXvrT2k6nZNUFu65BYtyJzexSgeQXDeE9hPgLVHUVmndKXdT4rcpKiXew4D41Z5hc16LQhjP9938drkv43oaX",
  "key8": "2P7b3vfoPsS49F8aTX2jBCGJ5iaUsRNAD6SJfyFELJKATSTsG3ARYy8BmF9g2uxMhZTbeWv6DBqtcsum4PUfEfpH",
  "key9": "2hZK8QDJ7mXyJu8AxtARjiVwNxBjBiTJMPC27oiHFu4YTLAYs6gQarGfGw6rXocaAnJZewKGQxaCyrULRHBwSmo3",
  "key10": "2rYZez6LHeKuUnt7gbJCg8f6iAQ6LCkPE4LG2WjWKf1sFwtxqjWkhodEA7gt4ANse7tUoTMFxyhfXtuPcPLbn7r5",
  "key11": "523sfLaYe7YSM4nFK7fBx7Mqw5G8Uybqv4zRnCFpFun2Y3iatj3uZAynxo22LSFZxNLaueKJWf4ijGRDeps1KoMj",
  "key12": "CKHwsxxhBWdKuePugKCijC18DoA2HZPkq2ueheXX23dWRWLjromTX3DCUhzubftG3pEUvpgXeosztkbiaiGWY4V",
  "key13": "5cZRUMJdSWuuX25VP2rHBspWiyprffCxzzNv89Uqte5smTqrFuQgyLknPCgU8oSwiGKdeKBsXFY8Vk4E9NqV9eLS",
  "key14": "5rxLNmZ5L3iqyR1wn6FFxKMYioMKmvcBb3kNQQL8gNDHnTB2WZo4kZKWh1eetPZ7FtesW6d2pJUtMWF3LJoMF7t3",
  "key15": "29E5us4ineNCG1obhEZhnvjrvpw6ouUZ1upd529Q2zs1z1HtXHzZF8fGt3vMqbsBrnCkT3B1v8QKj5hLWYageLQK",
  "key16": "4b3XpDFamp4UeS9KKaxLTWk6HiP9YqTwU4STcbD8GkUzL34GPAtaBrJrvvHSE6Chuv4J78BH1DRuzfMCabmXWgxt",
  "key17": "2wqwFySpoNp5WRpqUj2TfNzhMriUDEZEDSL5E1cw8G3vGTJbfziqVe8rC9EEYPnTK9ya47JbjumaWk762gubuTBs",
  "key18": "3T2rWmSX8ykto5z4kzm1kj8eka8qxcA2JJGHq3EDeiLu5rm8dGh5xRbzgPq4U6CX2d1Dg9gsjGspPcwJ2eyP6NtQ",
  "key19": "4KL8WpdCu6GCLKUncxwFrorJWgUUkTCHit55q987zQaQwScpWsuZRuKbydJaUpz59xSvhusQzZZ6pZXYQWkbr5D7",
  "key20": "RFvkaUEZ2E2dP7jg9Y3WfdmEmVcBjnTKC3Va6nXjGqruPTothjs3yXwKBbMqZ7smXZrQeJXJ2FapRseY6EuBNV4",
  "key21": "51rdR3BxMjEtZAHgxbssS5dkFbbgpALSqx7Rqye1ZuUtoVMDtMaJsGVgY6sGNyA4uHGDQR5RYWeG7FfxGeceWWqX",
  "key22": "3gdd8DXkMiQ1cGzFnR6pHn4eZyhLjAEEjg6A15ALdwLGJ1q5ENAcNohXvQqrzp1PYj5utpnk7SoaRHrnr3dpN8Aj",
  "key23": "dHaoWkcwiZV2E5QXqtKHAMy17PMUzQt5WFuCw6ZMG7xq5BcyJBGnjtroCcSPbcSNn3gcgLvqtYeEBVjSXBDGvyp",
  "key24": "dxUy7JMETgAEc9oAcKpTvBBEPkwbMJYPXQ913kKn3gAsLBLSEoGeohxAGKYjpyXAhGVjX6EUW68HWWTeD2fTG16",
  "key25": "1HmduYocy9GaALQ6SfgsqoVR4ANoRgForCUZiiGNjTY5wzTGuzaLNXRicukzkmYiwvYmurjXyJvWaurrJBNnLV5",
  "key26": "3aNCBG21rq9vchmH1grFmxQzYAfxD3DXosTHXyCoiCoqbkTYdaLqbbkWNjTa1nSzZENQrRtHmajqxKBUbsAgB3NK",
  "key27": "2PUGVUEnNtdsz3HKksmUqkdkuyN2x2Kg5aem8KEEosus8V7yvwpedWELi87zZqEafBqiwNQUyZRKXPjAAACN76hE",
  "key28": "36NuBHeE8dyhTwDGQH7tPZr1HjAaVaF9Q4TerpMiP9DtkpdYz5crq5jnugQk6XvGzse2KyMa1Q5m5hkSgC1vXsWS",
  "key29": "Mhxwwib6BekDdznksHVa9LvXVLvFyNwmh51EufRZxPf4E17z1ZbUSGrTKU44Ba2n9chQts79ok2L9ihzNTF3vV5",
  "key30": "Hmm8Cz2VVGvAKQq3Nde5Koih7HK7FtDDxRV8Z6yJjRHxpJSrPaDTiycR3fCFcU9i7VMNMasid775VV6owARB5kL",
  "key31": "3BKcoCnmpvfxTVwgHkxX2Wyh78UJbvtwXupmwRC2YRRoWtZWSiJoFZjEtfMk8GHM92RCt575UsjJMJWz6RHBN9BY",
  "key32": "LPi4NSccte73PamNeShH3AJBU8v59siCBPb5YzJV3v1W48qWcQtDDyG8WSe4FPB1h1eHZQancZ1zSsvyLs563oM",
  "key33": "5Zd7Cp3AhTnYzaZ6n7khpwJt6e1n4q4pLgCAZWno63x8jJiUV3oSA9NFX59Ahtk44LBf9fAA46bNv2rZfKM12unU",
  "key34": "3wTT85PUUQ4qgKRSmL6eJ4NQ9q2ZRfzEtbZ2Qf45hdNRSuz3aK1fHF5YbcCkPZB4DNKuyexEhYB5Qs7h2wXnuTa1",
  "key35": "5hX9dFkABzGE1LRDapqKWdx7ESmm9bGAZZbQPbM6QKwsCTkbFwhxdMXfWcmVK33GXpCm3EbZRPRNRxaghxkGNWKL",
  "key36": "5gcfNK3X8NhUL7HYqTCKxZ3VPFXioX2x5YkH9zQdUxH2s6U3fUFbZg5gVftNid19Sjk3ajsBQHmVTrjT7vi3wsJ7",
  "key37": "3Dpzfz4Rp4d5nUHMwwhD2C4mGurZQ1zkANd2yYRk7QpornirS5fic9PcNwKX1V7ani3bJAfCsoAhYHJGG535NJG7",
  "key38": "uBTTJcAcF6GMTmij8UKJ5LZjw23Fp4HHDFzRLCN3ts9y4Nx9B4Rb8yDgfSksnKiB71Qi73YegK58mGAGZCejgKj",
  "key39": "46VtwW6SFRvMidJrhy5vFySG5s16FnqBnYrStVYvPr75bvjceWRWzNpPdA9Y597uSBmouwKCidp2Ua6QLx3RePw",
  "key40": "62yTmteouwUEX3VX32DLot3asyxFA7z334WmbJzEdnhdExKFth3UTy1vprhnxVYxnZWfoTXLtDXQagEoEnasqxcV",
  "key41": "3Bj5kARutTBcUC1tjErjgHrr4oxC1WfggHTMUtbFyLGd3pC7jJZLKgSPmTuUWUVnUQ5SzXT77ChVSkakxG3Wyzj9",
  "key42": "2kwDTVP4ve4u2oA82VVktzQvpnFM5jKoCr9rwTGuBAMLpovXPcNn7Bc7x2nNJbLWdZYkgQpr7gSFb13n5bLVTxEY",
  "key43": "2jkMNcwc7n2oparCvVDEMVBqF7YP794mbW8eSn7LK6uUT3wceNpTAZV1a4jGJqFFoXPJrk475sgVV81VyDs6Whq5",
  "key44": "4BnnRxm1rLdoPoqLLWEjZTDhhdWsYYwZ7MmQP5NoenNajQKjdZMJC5k3sSq8iiaaPek9PVEVgRcmqQf32gGWsP8q",
  "key45": "mW4Q6UhEBJSusTYaMWdvGbwqGDMSwfntewxpGvJDhuRfne7C3VUAkoUcXyxMEB9yoLYWDrBGY9e16QDuvns34sM"
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
