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
    "cCfGshpBzniiBSHUCe5XRtCAene4Qz8dd5vaxCcUrMGNtHxFVn373hdoZu4SkohLM8mktnAzEPh2SYxzS1ewHaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WkyJ8miJmicjkANx4NwmwZusaXX9FcvZ96jaMDSCPFfHsbiB9wpR1rNwaTTedWn2CLnKUgvrQJU38yEx9ScdzT",
  "key1": "2n37VekR7BrTJkyV9SU7WLv2ZdNaxGitz8HepR5MBHen1nyoe86ECfikF6BcP1iE5zoHkFfLT86DKj8YhVBseftS",
  "key2": "jH4P1Sh2cNf1cQw2Uwxy7dcYTtHft24UuQ6QY2VFgTdT4sjivnJsM9uck91cMtUvTJbUwkz9QKLiMoqRc8R3Bmy",
  "key3": "4wqCtkXDr3wDNSeRvBt6xJEjC6tYtpMopF2b4WgJSRGWN21eXhKmqymEbkrP67UpyNNoSetjfUPrTgsgSh5vLQ2N",
  "key4": "21FnG14WAFQ7zSQ6r8CMBuRNGEX6bDrgM8SFqkCfVcst21Fd7g1vE2mnRAPN6myg3MyJpmViDTXdhd9wEEoqyGPu",
  "key5": "2aLZMC4Kz9hd2vgXSzj3VRw4gsUYSYd4u1HrTV9kxRz7BHxKrWm8YhQyP9FiZZBXZQHzmDgi3AtzZpaB5afZ8qwj",
  "key6": "wWCA162UpovK5Y5N8XQMsw3TpC8Ag3mcrRXpWKHeVvfqNh2SPJ5FkkdbRrxjZhb8RRZHJq31dR4PpfDHS6wqbrY",
  "key7": "UYq1oXHBMe9eZVSpVXGnfozujmbonehN6cjUUHXVSg28VXAbTbuAgKbsq5r32We1sb7P8Q7M7ot5ikTWuLdzLTH",
  "key8": "ZiCcNViAWxkS82uY32mtpms3HocU3rqJk47oqSFZgzTAxnxHg5A4ZFbvNuqofgB7FVysqcPLc1oMmX1JZqZMjAu",
  "key9": "2UbQoCTCVM1H6PTeo1CdjSKPHHcpVURVoTkqVxq5cs2dHJJZCTkRRUNMbLirME1eLYy6PRP86SCpjr2YcVkXnyot",
  "key10": "5c5Gsvhu8QQja5uysgVZiAvWFt9S75Y219j4p1kvb1J9cwEVDKNRd2rWvZcfeghuw4Rk4yWq8sGcBNbcgHaZoHG6",
  "key11": "2AjjcUmN4uLArJ57JWSFS86XBJWy7cxR8peVz8bRSqabFze8hLP7HbC2k5z6qq4tbdo7eReUFje9AaL9pyiWLJ2y",
  "key12": "5tAPHY7DRKdTBqunkft1uNTBDgmWyAFoNpDARpapNLHeKdB2vZ8DF7PNZvH4UTCMGmrL3MCPoZJfnu242ECCC49u",
  "key13": "5BW7Uk28Nw8PfsBjXzdMPr84abawEtF1HkxRSkgzsoHpkPSjYsJ7pkp2xHNPvh34uLYNvsLYnrfAQth1eVVQ8LBH",
  "key14": "32fwZ882HwN9BA62GHAVmF7zzSiiNfR1sWjiKUZvAfRCAW99TQtqykpuqZE6hRFAq5HqVFak6y9B327tZCsqQ585",
  "key15": "5yv9ajbn5Rt3Uron5CW6ryLFQZkoVhgtezL99wfNy38VjniiCjBW4LPDtfrfu4JAv2qmudzxChd6YE3Hn8Z2ZiiE",
  "key16": "PG9QLZxhYt4LjZ4J8gg2QPT5sT2YDWtfzqj948awQSn8ZdUa3HUptSTm8tHPUk9G3ELusA1M5AEGYGuGd1UWVyX",
  "key17": "2mfyY4YYAvxqL5BDdmfB6TWpumBsnCvDWrubPJuSqTTPMbQRpkXdmX6F3LWW9vqdLGG34hGmkVPJVkeEQNwt3pep",
  "key18": "2xDfR29FhNMqzt8mAt1isH92P4eA5MQsXufAQa2hHxVogfwB1A7E6EhCwpfm49D9dmUwmGK1P8LrQ4uHG29RfPC",
  "key19": "3Ebgzciy3F4VdKKgXiiTSfumBuCrqdP3yxHPKZbK6bzhqa53Zb8Sd8cg2tFvuGby11PQB3aGbWZUQLz7tPBNdBSn",
  "key20": "38VPd8M5rig8MZKnSeLquM1C5ko4cFj6UV11vk7t81YctSKfnLhHPy37pwuUkW86ZFZxoVMYvS7CR4fiDS4zY4Yq",
  "key21": "2VK5fLAR1ej7jgd7ZMEEiS9dceVzHSSZu1oc5rmrcA58RQS7T3UoF5KpwebanbtUkwCZQZDUVVvzvhmNEQQDZc4Q",
  "key22": "trL4Cy8g9pcndTfARYLs9aim4hBEUcbUtLjLHpy3K4Ao8h3hzP1Gdbmo2vsjefy6yaX17vyT4ozG8Ph4uYdobeM",
  "key23": "4EwYXtHESDoaZQpAtugLgCLF7nVQpetcTqTAPzTkDpt32M7gKLDgvu1Fpi8XLq6A8CLLAXp4pfbixfSg9STT6Ytf",
  "key24": "2FRswZzwER1qB22uz4TS6Mi3Piy6eGM1r6MfzL8Cv8PuENZma2PESns2u1NrHSaMYvZtgrNkSkaBS9TogzfYXUNL",
  "key25": "4szRkTXyTNbDTy3ikziRopjZJZXKmke1vPpSYhFuCkcGoXUJY5JS5ej3PyjHdfge7txWgV3YJMVuLWxpBQA5GNGo",
  "key26": "4vgwzEw1nAAvapdF6bcHJKYpz7cSuXfhojq5ABRpxwraFrELkxZckThyJ3VCzkU3pv5aRdaGdzCkS4aJVUPFS7VR",
  "key27": "4hCgY6S61dSgkSNTFgww8i3iZ2uwr7BNifFdXrqtuCBoXivNn4123pyQC8JNLHtKv52Y2ps5s98ewP9J4uuWAgzq",
  "key28": "4S6nuXBuukSCaavL8vvC9DuGeVgnw6oyLD5MJVU9FNMSnZaptWP4JhwUPAXTgssXY5hM1GQzR69K5F1ahkeVL9xk",
  "key29": "pjHjDBsSZrmrRdJrhuAFayddYiTK98TdU2gqYaBgCdKAhGnfRyZFSbfxAkqCCffwtMjxBKo66cguoji1Vqk2J5P",
  "key30": "4X1duZnPWcoFaNqJshYsHKvozwV7vA8cQpKbyfLLcoyDL6v6iBc2UGaFowmfmxxpbYKDvudHTtLZb4aPmFYDTFhw",
  "key31": "5LSg5N8bDWinHF8zyFpCgrdKfBthvoYoF9hLoPgBbyQU6CxtMGSBcJJorRzCiFpA3smfvWqK3UKj12CJL1P1wtjs",
  "key32": "2VSzovTEU2R1HbsNH8zrxRUzEYNS6xDeuBJVstPGEcdb6P9cCVvH4xi79JSngodAbML1fnYq2BhwgAhJNjwzFaHR",
  "key33": "3W3jxSoXyeQsfHPKRCAZkCeVAhZbfP1BM9cZZ3qTTG4hNZenqaWaJcWL4ReVws5Sn4TWAqrUQkN5SybhgPnMi85s",
  "key34": "CtCA5Vyqk5MwojCK3WV8YbRAv1hQbUJoDTxhJP8L6Apqjtp8wj6Kv51ri4fJFGVT5qVKHTqG5GjPRMYEKDGdqzM",
  "key35": "43cUPE4G1C7a5Qhcw3adwe227mvDz69jUGgRyVghkppLgxZHetiPuvvdnqgWdqTYYBTJWKk3KNfr7Bg9YAJotHt2",
  "key36": "5kwExZXHGgzeUp5K9c6HVzPigCMdgMsgonHESDBZ8EoM2PhugoNEKf4eMLDnxUWVM3FsrQnSeb94SLbHqBVDuFA5",
  "key37": "4SeHW2psakNUYKR3xvcgejqaPcFKPtF5q1LSmNMdQfYUeJCdDEGTfvGm3fgmT8oMLeUFRjva8udu6KV8iVRVepwW",
  "key38": "484WGZAmJfXw7i2zUN6ES2X7Er3FbSe3zzzbfTmQyXnJz8c64eNT8AUckpFKDLqvzh8tiFJmFWLUPgiDF4JpHgDC",
  "key39": "26bZNi2jYVbtMS2oY7HfRSsPJdnVPU68p9RAK3yZEke8T9tGbpVFrQoqddUzWmm8ySiZ9kNTwZogdacu8hunHLe2",
  "key40": "3WH7JxEUYdKEbz6i7od8xKuC5KQVGEvhAA3BbVorqBFZjtwCtfmUMKPf1EqaHRbBkVieFHzoG6uk5Ly7HpdHjnnP",
  "key41": "639CZmdNN357KJ1J7Ra9kZc8L6DwoAXx2eXYvjMGpdDa5hdkZKESV24SPBwQffRhVbPyeNgodEhTvhyS5XQEFYXS",
  "key42": "3ZniSuk1jrYc4sRfoA3AVj7rXYFt8BynnDjAbrkHRj1NG4KoHsmCfSXUxJHxGvRz4W4z2yZhTLFmUyycQk6AoVhj",
  "key43": "3amSTuF3Kh7P8xPFnqtRsuQsubJn2zVcVRAezPWYxbdCyGpg7w88KuduNNF78VVt1JvXKKqXUTvrUn4NhigB1ui5",
  "key44": "284KeY7FFk7vZdNS8ZRcn9sfEqEAPDuXfFBPFKqBvBaERhhaMkovksULqoiXL7H7CuPJMBf8QgL9fDukjqUZHMNv",
  "key45": "54KfGipjKxaPNetPQUJ5Ab4rBY5TB7teTmvQHTa2QqVkipGriNvLizm4ipbwAJ12uCB71E81X66FFMXyXoGXmxKd"
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
