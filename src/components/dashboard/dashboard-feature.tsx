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
    "2X2WB492AKHpSPHNfDUvGjBYszkwzrYHjpMSL8wZMiCNcsUsy9132Qsx6v4B4shX9xo2jPcmo7ddz3KkN9it1v8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBLH8PmPt98PLvnZEKbdtdnBuVvdX6pbiz7R35GikoSqKMNDVyb9BzvqvuCP1uYn9eYB4AwN78MmosM9Eu32v2W",
  "key1": "2MWPejDJ9xE2mPPKQHuY4UP6A2DbY13kFz7RVdDVdsG5r1n6quJBS26c7Vq75SfYVUT75jptURCXTFAXf6XnH36m",
  "key2": "54XTrxP9gNNpYMD7Qwx2jnvKopqP2tuQUodHr6mho8NY6Z5uQNwcQ2wRpxtaevYQftKoYdJgtTHZu5pN8LxTXvZu",
  "key3": "2CJZoEtre2D1ZqszqWVLjp9KjLaKGFMYWbgpaXXkamnEuehTtnjNn8nga9MprpgzRsC2356mWXaiYF1HYJfkL8fC",
  "key4": "2HdHJfS8qNgJtPeAzRUcXdNuytbgqFpYpJ2JuV3F4d3SwjqqrmhkqEMGwJGcAcz7QHiPYeK8dFG1Hsadb5kgssUz",
  "key5": "G7f3p9P67jkLBsG21iNuKKj7MBWikYcJEDGhv3EnpRv6ysquQT5d5iwLu8QTCxzybyxQyoHM8HtdXTgtF38oz1e",
  "key6": "3ANYz4GjtjVK46vkCVtwVMVzbZKuodwFdfqxp4ND5qUWBX9pD9haaJaxtrmRdW4CiRkxoFBYPhiFmqmwjsk2s9vp",
  "key7": "47PndXg2FZ7V1FeLerDRo32ahkYndFR1V5Hs6QP1SPS2b473PbLc5ZSuGfyoDepeBdGKA11rXBk6iuTrCAo2n35U",
  "key8": "3WwD8ZneiZMn5CD9JjTFa2YwqW8YgMeXo5MYN2uTMw6FDtaLNPYTuUv43hfPv5nxmYMy1ESrrfiaxQUAwR6H878u",
  "key9": "5erAAUh73TD686Nqgnk2pk564QKkwRusbP5wUCWUP2GZVWvF48C7DtS4Ntu1gTnY7opcvYsHV7HZ51dz49A86chD",
  "key10": "2ubAp8Nws3aAxHQ2dMR8CTMkBGeCZHKfGSRXRvY6qxvkq5J3S4k1fyzwqGBLdGhXJnm177j2GaekkUZ7rS7BJwro",
  "key11": "5gsfzJKTgMSu4NVJybfbU7A1Enc7DWMgQcPaQxBcBVGzukjJpV3hkHwSGe1y4mLSwNTFkmBF8L4HhhYvVqfAhT2S",
  "key12": "3nH8MQzuc5Byr7EV6gdKTPYYASpNokjtEtYW3xLtkL46Pd9JVWZfz72jnZioFtXXDHSVXNs7XPupQHDXiBUmekjM",
  "key13": "5M4zscPJGiAFZBJCxHHHQKUXvzMY5Ae9FWY9b5PZTCMA1M5px8tZtN7TwZZK4P444VkcfQwjssjVax4xuJPpN4bJ",
  "key14": "3Y9N6Q9BcHahtg8Vj3Mg6TUEP4jSYcpUH1QhYQ73ysZB3H26pKGrqk3HUNjjc6daUMngWob8zUxD6s4aJaWu5N3T",
  "key15": "63JRG6CPracxGjRGtyrqx9dRScenRtQ2DSrS17FFwyhWdw1g8AtjJdtv3mfnXj5NbtQpoxywx2Uwv4fth1qgTm33",
  "key16": "eUo9ubbUaimQzbtK5Kxu4gtWZ6h18mGbRkhmw5tCwzER3dCVWWeusDSpdcA33zntm8x7aj2dXbJR9B2JeAcYVHx",
  "key17": "5GWhGttfo7W8yimEfDSH78YbT3wCEHPigDJCrYWTAmvgjgd4q9sUrAdLnyKsUAF3j1MbhTyqyY7mV7p4buXTsdKJ",
  "key18": "4n1KTNPwn8LHrumRStDcwibHEK9wuycZ4phnGd5Kbssvz1VzZocvok258RMsAUm4hCRB6frDTiqMVWgjHJXTCRoY",
  "key19": "3iAADAbCZiC72drwQ2e7JjP78wYZXDzYU6dUQxboBJ9mBr4kzVQHtMy5ArRMbsAfpapqYop4XFsg4vqi6tryPYj8",
  "key20": "3UDMAQbaUyA4BzjEES7UBUTg6AWy3N3pK4CTG9We2BWUqZNdKSQqB1dRCbw5FibYaTnyPLoSfU6yuqPChbdhjYrT",
  "key21": "NokiTHBuJyYyPRtnHUcQStfJau1bixtc8nJw5wQ3qeSH5aVfk1sgKnvvFeFP8pdRryk5VAbK5N71imtXzQ9aXia",
  "key22": "rrJHHvqtNih86JvML61Mewm4gSXx2CgcySHcsu22J9HrNoXyDP1NbzrgY36GyN42ihMCKGjCJ4EULitJQsZuBZK",
  "key23": "5RB9v35WXpewjj7DwzUSiyoJohBDPzd46Mv9bDJo9jMmqKsDTo3cQeM82fBi38KDtAYCfcr8fxN13rKwGEhM3vFN",
  "key24": "6DM1KLF17oSHcsqY9ye9EyUWdSvyjzc2BKo6KgYLX3joE3GfHdgXsz8krhqVEvFFpXMYRvGYhDybF9kjX2w2jEn",
  "key25": "3GpRpUzJpNeji7FVSxrgP6NeXr8YjtB5RckJSv7Asc11r5nxkYhSwenAKS6F2MV6A7CqcmTKVeS1Bapwz4iXWt4M",
  "key26": "jWFdfvfg5Ld6bK3m6urzLP65spXL5dCEAzTGhr6xdqgmNDT7MMtBbwU7Q3ViUkJ2TxugQ3SEiUUTpnRKEGtinKm",
  "key27": "4ZCHp9FYpYSKoGxDVmXXqD2St6G5JiXKN6LvpXcYfBNzRHGegvaTT21cFKXv7347rRARaroq4wXTJ5LjkKzACHeQ",
  "key28": "64d82hXty6HyS8vnAaC3UUwLssntwnB1kZPc6w9SYupLq7C3WyJfhSkqz3DexuDNHCbSwJdLTmaU671Cn6nPqJgd",
  "key29": "3zhLM8T1n4GMEYgLYrLZbqbXSwWVMGMT9FfPU7AVkpyosQei4nMCZnYaxcwq33etHbssNxAyiQrmPACUyiyHo9wb",
  "key30": "42vqMkHitj7oBXWkqtgDai9u3NduoU1keCVqZTpPg9MoovGr81gxZWzAEQq6s3EjvG8Yb4iT73AEZuf7rBcHsii6",
  "key31": "Co2oybkmGo2dMYgLHPBhZveXfh6zP89R2a7sfrHs4Fk7SWGt2KJrzEsFDs3djG4KNeeBMRzFY8B2J1w7BtBQSPz",
  "key32": "3BugnmVjKz1aqT98Prf9YtqitkPHM97oNfngRJbLC3bpbvZBFyBcvQTQ2Xbvf1og5q6GPLM4ZfCX2WChmvvigCZW",
  "key33": "4v7AKmRstRig84Qckdhig6g4rbWzdz2FSRj9tomfryxSnASBiTmGRPQNsCQvK3VRBdWFxxGDZe79AAdQSuWjEKxW",
  "key34": "4MXVwTYytdHfFJQspLVb51m73k5bTapq3sivY7MX4Eva4VrN5EPE8v8hrNtwrR36FNv22EonNK5iWmX5t1Yw15kV",
  "key35": "2Qi9cgNh2aEwVtYXvXpWmogUiBi4KDecDfdm14ZRxjNQNdHMDPNCeu6rT2HkfdhxjjSTpH846811g8fGBo3mpk3M",
  "key36": "5AqSmLo25XsaSWqPXV8dCkGWb1MvS21KtX2Wc56FTKRMKnmX9zHF38kZtugg56NhRF5okwhaPe4Vhe6NYVRfiwnf",
  "key37": "38VG3GiYBuqGoyDnFNDAhrfqxghEnNUqJCV1ru5tWeNhFEaemXtwFL6DapxuK5mHkATzibpSMQ8G44ifVKMM5MtX",
  "key38": "kqPUt1AVo6db2AEJMatvrTiRrwGrU4UP86ww5af3J8K88DqMUXUnZ8AbaSVWfur4SDNrBkU5vfKacpRDQ85vUKv",
  "key39": "5TGtXVtUMeTQErhq32bkojKFB1yWv5QypNtdY5KoLSsKSAVXHsmChryi4yg46i2GZdKdKrfha9CsxYxw3dr9LuCc",
  "key40": "3MP4632wR77Gjbdhe3NZuKiXvn3TUNWrRy7i39iiqLuav2AoqgXmmFcnBYHSnZ8CCF6G8Kr71BtRevhXsJrcwugy",
  "key41": "5F9Bbuu199YfEP6eaR42ghznhcJPRX8eaJz11TSPAbzBdLBCJkwtDDZwUFBhFXJMrA56xBFA4oHoeQComvunLXgt",
  "key42": "4LcwgUc4QQ6QZh3GvQznLwPRPxqmVZMXzihEqZQZQMJk4W4dRk4QbCWEGGhieDTw2uVkza7GoKkDs4z5f1F8Gc11",
  "key43": "2hPhzqJ1mFvT2v62yGoEidkkmeGb1TzDUYwWqEPnSfCx1osA75Ew73wwCFSKjGq9UExfbez7FoMv32d7TGXxak2a",
  "key44": "46xYr2WMG2J4m72BUTumvybGtmYuf7EfSGdrz8mpLwmAsmxRG7ens3etqnKtshifzYAw5TNjRUY5pHaZZvbJyCAZ",
  "key45": "GyvueroFqGooiZTdQg97Qp7LznW2hwqxvXdRPSvsBUFdJuupyt87QuiAejsL11Z7u3TnVygiMkTc53yxxrJeHeZ",
  "key46": "213nKg5PafwN5Sah6dGj2yimQ7wRk2EUGMPmEpj4zaaYU2ya9edXLkFK2yKj1aXDVFfDn4xXwYBMsEk8kv1JGpZB",
  "key47": "3KpxyVAwBKh9Av9iFNrTzPAVDKtF4Mnx6E7bQEP7hynntW71WjMzZwvgecRUcpsUob6RdArPvknZRME7naaZH9RF",
  "key48": "BB7hz3AH3ZVfvCyWQHeyZzFtgXHLbRRngsTmGU5DAC4sgoY7S88wA6xhHAMy9xc6GrPc7pNQNFAR8Q5Mhr6QnWs"
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
