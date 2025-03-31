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
    "5iWexbJBWzMofozXghWNjH26zFqC7ZKVker88fG53jTXyEFP214CgX7KrdWjt3gHweZQYWWGqpaMouAGW6ivFWqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BY76XydVmqEXfgCAqyg2pRAw5nrwWKZzDapTe1zB8kExCHBbSYbVfv3NJuiLMNoNwT7g9ADyZhxpS2ukgCrTtid",
  "key1": "ikSoWdvCc47eFCNVW1UzAi12n5YSDWwwcYeQeU1xLMwBnfwm1CEURsES4BYP5o7STkMFixpyfQzsug942zEL2Tj",
  "key2": "5GHruyMevvht2hJga4h78jTQEn3irJGzkp52CZTiZzUo8ssWUQXJ49eubHThNveJcJoETPQ3AXtpceNVfhcwG6tZ",
  "key3": "2CgQvSY9VgT5EBR56dPdDUB3bPRZbGbQKoqtkEBCRanfp1n8A1gLy9DkorRGs7L55NtmZhhahxJSyUEMEeaMgdC3",
  "key4": "4HBMPZPZm782UzV3duYHV7es5rfamEY4FT7WVRmy5SDHB4eTeXBseKRXmudTYtr7cQuznU259rChhiTFuRQ2Chey",
  "key5": "2TF4sGxyn6gM38ekWNT6kUVH9mp3SH65wKcQPBh51556yL38yFRtFUgxG5TYKaTjazvZcRZ6TDv9mA1RzGPJdTPD",
  "key6": "2yTxFqbgt1HivoGEZw2njCwLhD2k5TLjHv9SUenFgAfcG35UvQpsaonEDifew9UxcZyeyKAPTzLMFXWnhadbPcXi",
  "key7": "3nXaFeHYztqMPGQDbMA25WbidkgxpY9H8ts2A2mwA7kGoszPJF26CYKdZtAyQwzL4GgJjRGUefx5fF5bZWp2N3u9",
  "key8": "44kg9z92rPm22ktVrZDptU8nF9BPKx9taFFhXdgLc5wFF6XAi3cUtjkLqeJDRnFBkUFUaNYW9zaer1Ki9U3X3rjX",
  "key9": "4S4dsScB8KkQLo7gFwJFWNfqiFgwLxXtBAFQ9g4D9uZkhPLu4aMFZQSSNbVwV4VF8yAsxhj9ViikQLAWvaBy2W1j",
  "key10": "21WkYDCmYNK2Dj1s3MY35c8BSrQwf2kn4PpMobaP3SgbeyFuXtrS2hZa4w1Tk7AKRK9BmT1fjwnAhxBXukPUNjN5",
  "key11": "4iiobzwYMfb3hi1HQRAtDorwiKMxSbFVgD1SCHKa2UiFWcmp7jtLVfnsDXmJvUDNbnQcEqw8y9j6cmTXxSwjaVtD",
  "key12": "3d7W48Gx9pzheUZKL6qbho35abFk7Y65FBXBhgQCpb1rNJAbcSmNSTGu8sXUvxY6ULsUbezKSahwHXPkQ7CUrxHX",
  "key13": "3cjTBFx7tjPxJRXLcdVe5vCj4BUjudvKMhvXkQ1J1v6UVd3oGMb1FWknftgstgss5ksHQcG55xioJ5hc9pnejJrV",
  "key14": "4qPf36MDHRh5AQaEnnVPy6N8psGuufBKtmac3A2u1NeCRgHpevsBQddFc4bXb31PyAN8JkZc5MAenr9ZsteRxisw",
  "key15": "5ddHZjqZbNyHbTPMVGzpNVchRrULNV4Qw63jxAKLoev87PaamTBiN1aB76S2JpnE7FddNt1koEjtftsv3x9ST3fT",
  "key16": "4D7zpmfMdzJDZ66HDkNQoLRt7BrvXANxhuv6JsRjCgoZY1APbMpgiGUeLqvQDVvwhY1WuxaZBcxPwAgJYbtzvXVo",
  "key17": "4dnaFfh1vxAJGJQ6kdtyE6Cj4XEF4vkqN4jQDZ2M73mLutN3k96ubXQqbzgP5erZz8rz814CD2zPdfDgh1TG3Lt6",
  "key18": "3cX9gNHB2tSEnmUwNPUA1sSsJwVk2KYfMT1E1zZpg5PZFiysoUyFj36Jn8yNn9X4u2KaYcnLYvpAjDji9CTn7tpA",
  "key19": "4LGjzsSKVP1P3xYoojcRpWTT8VxyAoN2DCfjKcti2aqoRPoQWnkFgk4RdyzAxFibDgURmDFydSkd8wiQhTaRNpqV",
  "key20": "4kkRxnNJ7PMktU2N6ibksFRdxKq5gB7g2pMRhFESQWsuNtJa9EJvCrj3MvHGS69ZQ1MMCUS32E4Qz5fncKfXGK31",
  "key21": "2YfirebnNrbR5qAEM5gzagNYAz77uqNgeccp7aQZjLvE45nXV2Z3xBnZFRF6C14Vv2wqCCWfy3pV9dmQK4zfCi4n",
  "key22": "5QExLpecSTZ7f1XUGDE6r7niyjJkQYX6xhTiZW6skpk5XdNh7LozNoaTRGtUZX9v6x4JKKUtfZVybG78dGK8P1Ca",
  "key23": "3QKxrsMEj44mbGHCipb6FpL4jxgCkrZ2pWdzriS1uiinBfKSaniJjkktmHqKxNZ2oHRXXGfywzNLfmxnzzKFLuF9",
  "key24": "4bGKPqyZDY2MnrpAUytGH9cS9zqy6JZz9L6ob7MyK52RxqQxFPWmHE11HtguN5K2MCKUd6h9WMHo5Kc8hqWDggXm",
  "key25": "4QPmRsLQUZQFZW57sF9hnbQCkWS4yhC4WqdE3e7172Wqw1zPP1LouSZZSza6vUvX6Y6eaVJWEE6MByhrzbweWtPv",
  "key26": "4LdTyTp3DKVEu98fWa7EwPP9JgavS4LUwhjERQnRDNp7rtMDb9dxLyQnaY8WLa2qY7E3cj22MfZD95ffCgU1cYWj",
  "key27": "27WT2K3CYxVokCm2Q8bDpvzk3sWS6oFgBMR9XZFJ5xk3WSGfczbU7tCyzB75DT4B9ER1g7796EdFCJr51nCtGUYU",
  "key28": "5vqNdJyiamR5szSUxnQkyHBAPfTY5NDgCVnmcaj5ADa6DNeE5cuS76Bd2NMDY9sm4EhETrWHVNkYhLMaVPbtY6C2",
  "key29": "LEHvKnVY8eVN5EjoA9RSfGg1hJv61DVHNkQqkgAunnwFEtaX5V5RuKU17Lr5G5AiQtUaQbHzHJ5fF3Dmqjyu1bg",
  "key30": "VbiX5qYNKmQWzrGXBuYdUofbQciPv27C8TJtJVekLpWvP6nW7fb5wrf52UNRYFUQy3Hh7FTQmzoSanJN1oMJN4X",
  "key31": "5jdN678oAjQFfSSWXjqaYkypYDXQWFuWEwZkbZRqm9Luuq7TT9VpdzpTbe4ujsEzXQ1EES1phagpH8j7jza5PoGK",
  "key32": "2LaT72R6zdcy6QqZLyJ6mUeSpU4grPsAExgoigFMUb2Acd4sNV2dUhqGRE79rsb4BqqC4ZdLJZ5xBkbpNzH4rKiR",
  "key33": "DzrL7gqSggH6zu1wApWgrhqiXs37QV69s1EvHCjdRkaADESuoYrmcVojwYWaAvXaXuHHu4MmnbjZpoZeybP4zRr",
  "key34": "33tP9WV7vjRfD6C1LyU4piJmisApHcw6VtYzqKAGQM91stWQkJSPpNmCtVGLMRZh6hSHS2hwW9mrQ4bXnCsH2uvo",
  "key35": "5A5DyAYwpyUcTpgHdiC57XkfpyF4oQYmR8eecJdqTk28Nko8D1fdw1aJ7d8azCUhc5AbchsBHbPy92SmkgiDoULV",
  "key36": "YYER1RYe7Qsxkdroc5iQwmVGuvRevTCKnVWGVfMQUUgcmNdiDsnTdVbuhhCNkEMiYWgRLcztnYFenjChNpWMhAP",
  "key37": "5YCcNA8vFabT99fkfSDfnd3wtEg9AnYUmPq63Zj32NYufrLAETnrhN1uoMSqRDg9Wk7bm2qgfqj8AfM3YeaJPUva",
  "key38": "5Pp67STRY1gfYSpV6zbQN29o4pwuTenuouZH2RwA4ThaK4dw8y4ogNXhdNiBWaauhLoMh9ucwR5AAh2AVMJp8CkD",
  "key39": "5PqDqJbJwsYikccfTcG37K3o1HigjZn8Tu2iPmp1hVJoE7fm2mDb9cXBmf1MnPCXcW8zYuTBKN7dftSg4okCzmyf",
  "key40": "3ZtDw5mov5RMVDjGeT7E9nRBEyXdbxkjHagTKrUBag8S9X52TP2NEeKtb56bqxNgwMSaKNqruu5QM1iTq2EMBe7g",
  "key41": "3remvTxodGaFvxZ7ykGHZ4pofkB61EMtzucgJxMv3HqVKvtRdewQmhD95CSWGLASmhHc1wnFJhHsFpGyJZz68ZiD",
  "key42": "38zK1LESi4vPF1V1DVAcgCcr15sjBww2bM7KzbiyZ8KL8HNbMQSpnhTixgC4Ma5kNFXQTxTGKWimMPhA8FNk7G1y",
  "key43": "4wteoMx1JN2y1tvzW8akn4TaRKaegUfSMpqLWKfEq39XU6R3w1WHGyCE8G5vCyBpKBm6hYv6DMhQRd6ZufYsdzQE",
  "key44": "K8jhdRucwVggJDDY5Ww7XzkjWb5PsPk7CqJuaPo7fb4z77cETbBJXDTPJPTY5x3V4RtXzcvV3EET19ZmiFqJ2GB",
  "key45": "3m4ZJWXoEsnMpquxwjieMECkdfLotFHBddTy5MGK33T67GufExvikDN9ZhDa18VfXLq1jqkyoJ3CruQwjCYfR88d",
  "key46": "2V4GAh5zM2bgrk5sRaKrxAHv34jUeh6kTUkPWH5Sxp3uq7onwkU4uVeg75ZybArvQS3HddJthcFF69y2K883ztxT",
  "key47": "1JvcsAeNiBsqyoSUXJxUCzQXXYEJjc86ZwiW3b5qZqeBrGXTkT4CQzh2Hy9FWue6aCgX2jXmcPMAp81D1A16Nco"
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
