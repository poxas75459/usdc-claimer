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
    "3cVQgHyyaibdFuvT2MmEpWhrNCypV989pVR1PWuMTFhi1C6unv3y6amghnzjsU8NK1nSsdYrtWbmhEGogHyz7hhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iG5eoFr1x7GiZn8egA3FGoqrAdTGR6sW67ygFKa6DF9DUo6TyNPjiwjDjg5dJSQudHiFv81LKWrEfCjMBY6F7YH",
  "key1": "5iWJHJnJnyACVZQd71wxt8vb5qdtK3yuhYq58HwPdG8p4XtQNSk6sUH1Ap3QgMD2x1uDj6GVJE9qRD5PAB5u7HM7",
  "key2": "4iiXLwgZQdbQ9VXbHAoMjXciqsGu2YRzxk3PWXr4YCY6dKXp5gMTzXVcZNfSs8WfRi2cTwM79hcLvX7ypku2GD7g",
  "key3": "VJBoQzYVjeQMCcDcFgw2KvdncC6GhpEApjw7ve4FzjvvRp2GH14Ui9zjMRBDYSsokqFXA3mrZtMhvoarjj6A4m2",
  "key4": "4b2kokKvmDaY5XwPHYGHX5Hocn9JvBw4f6FviQN8rD4hzxpzwk9wjmBtiPtgk2f2z7VqEvMkuBunSTwQTu261v5q",
  "key5": "4zCXVCnF74LD5cHzruwUXe5gX5SZbx6TUAd8EpNqBh5uuDQGCJWPohYjPoWbJhXu5Vo4nDmYECotS2efXABFaZmN",
  "key6": "2Ge66Hq7YmtLFkxXmcx79f6wv788pV6D9XYxBCw4WrEsqinZEHbiSA9tGaKFjaNfeTJxJ6ZB5kJhTov9odWcPa9B",
  "key7": "61tFHmrhkeQdLagrosmBcFy24Eqzmk5nGixvrwxoyEvhX98qJgbsv6mK4CfK34Ws9ywwjc9vh8B8AUCHu19c1GAZ",
  "key8": "LZoTGVPnxabUh77HHhs3yGbQxnpdcBwgdabtQ3LgY5ZncQWxNLSkcnprpto8HHzHSUF7Z9v9RbHNnRnbdRxRfUv",
  "key9": "4ZR6vBbJyu9t1DRfriQFbmtBkqH9K3X6vpAu9hScrGZeAswcJGQy4GkhTtyt7YSsscatMExoRoNFPDiwtxLXyXz4",
  "key10": "5JbyhmvxVowMn5DXZGu2tZBZwQpdPipdE44k5soyaK6W65cndGtt1C8DgrqpYUSDgiTxusMKkjqQLtcRNPWmF6Ss",
  "key11": "J9pUjnxEZdVwLq5stFVMhiS1FAYKDMqdqbsHy9m49q7jVWmJk6qhMZdh3vA195RDpVjNPsxzpgN58LdWeBAgEUo",
  "key12": "4jZutQdXsGubwW9eJb4YN8EZNQSEDUBxhuZHKhH6NXr6u7kexjEsrhaa7mEiWZhAsw4Tqr1omGakGTt3LLgRP6X2",
  "key13": "46raLac777N3LZMja8UWVFHY7Err7F2ECo7HYKn1dqriTjGUXnt6fEWoNWL5GAXnugrwrEqwZ2fmSULVdm2W3hgX",
  "key14": "312TKjqpztMyphp2GWtnCYvvZSG5CzHRSvqjVGqNmjcy8Z8992qPu54FsvWqKWaojkYtHcBTaNkCbmYPVZYTRMMn",
  "key15": "4FDKVMy2cuKWunwb7DvctgqAHu5AkadaXDFvvtYLfMJQRZHefJQuLaSFMZwhyJKJLsHPe3yq3anahMsU3GxQDhop",
  "key16": "5raxPySper2cZGCLFDoVn6jMjjepijBaWaNMS55sTfQMVu54hUXPrHttMWc1Y6xU9wFpDMiz1nhKA1xBZhfcGbBE",
  "key17": "2DWToW1FbPt6GFRuany3Pgor5exQ3njXZV6pmLYYUGc8d99hzYJe3BPxjMzjqXUU3oe8QV2Yi2KmmHWKzkGUGCag",
  "key18": "4kc7XNNX5YgiPczVGbesAxbKqhJ1s7bmKW6kCQPYHLZa3Q8omRd1E4oQye5KCrG9HH8K9UhhCchssgyULSnTPAYo",
  "key19": "2weD9zeYREdVKbuuUyksCmkaW2YFmzjTe6onFCryijTv93oecZnYrXCA2tqDeH3rMH6DewEQ9TW6n3gbEqQEPQEw",
  "key20": "5t596J6CmZV3f3Fc8jMrgjVuRmtWzVHkXdSM2cKBdG3pPMMXzabRT6DAmWNic29feeExcKEPq44n21oHjde2qhYk",
  "key21": "dXZQ9A42pNFyiwGLxhccFEKatoXkFgNPXbBK4ireodvK6sGdrCe3gpxJfFnWbcaqTDPk1aXf3eE4Tog9X4ozXD2",
  "key22": "42qvUyerBRfkZWdysqaJxwD1Z8yc2Ks8gwx9EvWKtxwAy3gLFxuesv2HJZ1o3bNRLJQYg8VjKvvMbvSLedP67Y6C",
  "key23": "P9ip28xhrmd12HViYRG8rbm4kBZaMt2ury2JuhTAG4uDqYKMYD3dquFw89JrbVRroXfwfcJQ9RGNGdyJ9R12jfX",
  "key24": "3oYscakzz5XZ7wH8HGaWoH4rrK93kwoQ961diGRu8qngvP6JWKH6CGhz6eKULvjEVKZKXa8nm8jzNqKxaPTCgM5X",
  "key25": "5Bg8se97AjWzJh4aY2tgN5pV4Wi6koCrbT4hmzVpgCEUdCbCW2KqR81NzYUhLebhWgjxmei4BxGPGyRRsVF2cxJy",
  "key26": "25XAeaBtrTBpv3aFgvvsyZaRi7FmYaufaKTKyVwZ2TxmRdoxxG1HzxSqTzcDLErQ6YB3e1z6nztuMJzPWUMu1oPP",
  "key27": "4RAsQez6CqTsgXCUTgt74ZvYw7y4bxwAkUMBr3UUc8PZ8WR6ARoTLhFgQWYdax1XEfPXbmmrCvH6CsdUeFrKwMr8",
  "key28": "2vxccoRmDn3SQarSTcGRNz4bQNhTMcw4WVZMwHm2Xgr6s9iksG6onbzfnuMzEwdPwGrdKGHbMKsLYg1uGJaEamWf",
  "key29": "3cob1C2CmDeAhGJEDrmfGF2ndYxzd8JDjr1AabxdUjKwZ5XYAuhHSu7nnbCGyB3AYgWLxMF7hFXv2YwvMNJ1uQBL",
  "key30": "3euFNnDn4e9Xm2rYEq7GQ7a315B44QzkW6DFrJnHuanygzpWEgjv1EYzxQBq6bPSdixivhMTnitvqQ8tVK5KpGh8",
  "key31": "dsoxoFA2HsDtXee6BhJU91qCMcnyrByXnervaW3Wf9mXa7WhjRRmojDsmG9MpVFVsGGyjdt1hJi4Vt8uvCb6DRg",
  "key32": "3Ti1akMQfZmsmEs2Dk56ce4TVDdCBC3LWq95kQDeHMTHrZTo4DmNYtAKgRB6P5ctu5iN9hw5ZR7FDnF2J5wunBBy",
  "key33": "4LmgKfLK9oajyFsfiiSXgweNH9Ch2kUmYwCq7sotg9KU6RPVp621xM6MeQHGzRfC4zfCUKgrb1QfcWrwsRRUExc",
  "key34": "2Utt4u3XenihmAjDJ93jEj28qFVzC9XZcqXX1hoTcXVGNmtViLiApcRtoPRRcV5m82nrmhKoPQEjejw35GqsFzGZ",
  "key35": "52bbyNuFVrosJDz9chanH4Wmcv5jjAvr3mvbzEVm15NwQYh8TozacW4XykaSaofV7ChU2CMNZv6CX8Nui1SKhT1h",
  "key36": "53GiPJdbcdttNeZW2JWUZQ1RAa2qKKY9n9Lhn73MgHhC2ZXom5cKFsnR6MjS6w3mvJ6nyWFR92qcJMNuuGFR51Gb",
  "key37": "41eXYETAC6VeDtWwNZWNjKZzsgZTPgW9Zraxqe5dGUwSCX99AaoMxwLWUdZmpUDM8knoCLBm2ihWSQz2wgFnFv6k",
  "key38": "2dSgnsfKyq8jibA6o7Jofa9BcswFPdwnpH1Dg5rjN9BcMfJfS5fCYvJj8uxGXKmQLQD88zediaq14znLY22ZJB3Y",
  "key39": "4kM3L1duz7Lqd4fVA8FSnEbegVF4Y3QREfLKwF8LJL8aHm8vcLr6qcEC76sEdabG6eAzMT5AZEACfMNyxy9iuWU",
  "key40": "3UaDkQVH4dRyTpJgygwDeBHBUHYexf8ptG2A96Zb6A9rKuMjFGLDXSme4jimS3d8wh1m882ii3T2CHxpFZqwNPwd",
  "key41": "4AL5spdryxxmSMYNtfJsrQPo3P5syGhdEA6MP3mLFRzeAzwM2nwafXBPj6s4GM2tTZ31XRrCudfBtHUH6fP7kpj9",
  "key42": "36StrCPmoeNzwhi6xpie8VqDSzse8UpBgWPjst5B57ffk2qxuR7Ri2bkxYFshb8YLe2zJPbVzJtd3ByjQkmWKaES",
  "key43": "56GjXPVMtGMU1TNKjkXeq9zrAUANyPUt2ErJ8qiRTqGseKrzh3jmABC8jDCq3VBgheWnCW5F1FmyWP8zTUqCGNN2",
  "key44": "52XPmK42MGTYNRYonm3q98QQ2JqRV7K1FdSqjSvcyPKfqMAtFRh5heALe4Nr8pVNVKsAGsEJrGVbW2ekfbEYCywi",
  "key45": "5tqzfibqJSKDJ9G4cVoLDGG7fHXSY87HD6fcafA4Gcard76jywcyq9KFf5iCGZujJuhBRkiZd7wwXPAMwMMcyhbA",
  "key46": "3BPz6SQhdJiomWHs8NnuvkQUiKFVFXwp1Q44TZBv5HurevrZFfCWQPWzBY3EpjUsu5hsaA2i7onYkCY5xYm7NQ3p",
  "key47": "3Vv236KNX1WrrVyVNWFzdkCs974rS5ZD2PiD55NGYaPD9oHak6ZdepLdhxhocacLKNgLGyvVojrDC9NygEkPF5Uk",
  "key48": "2tnELk9HjfTxZeARQYpNHFuCPQBSZyxz8PXpdjDz4poW2UfNtqctCXQXfJnx6gvRunRd6EstWBK6FNjuYhA7ax1Y",
  "key49": "3JLPTcwLw2a1bfDD84gacd1dJzVHgnZ7AsHjXKq6jBUSDj1r4HGvQNBWZEUbQZdaTmfyyiE7rmg389AXHh736KHW"
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
