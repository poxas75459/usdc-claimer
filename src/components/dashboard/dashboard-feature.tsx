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
    "33RQ5JdcyHKfnVeMv3V6DyRTxN6k4jsKqZYdLU5aoDwagotfYboLrEQmimH333uxeBxTusUze7GLVfUkdfWH2GSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bm2vfmuGNq3PSTfyYAHprKoBwUHQ73mU9zrj69TGNuFVYzCSakkk3HtC8f8y1HL4wHRcKSRjWiA87oRuvqsb3F1",
  "key1": "Lej7uhV5uFPZWEiUZ6rWhzQJMKZDa5Yyrmu1QnJwqJCLS4Tgx5K857Kusxaxi6VZAgN8iRbJr3judrnzh23Q1hY",
  "key2": "5PH6BdzFk6hmFQa3TCGMooChMr1NkqKWRx8DPcTc8BBmsasTNXQMPaX5xhqiAK6tRFmyiP9TpG7j4SGXBPzrgsWG",
  "key3": "4X1hUvQjoRwPYR7myqhKdJ2AtShsm1PNKNnJyqTyyFmxXKWcEcD1ZJDZ62QeQaGMoyNzZHjdDefdw7fhFvYe17uf",
  "key4": "4gaSjNwi9i4VVMu7X3MxxBdx3BkK2wtAWtU76PApH2AhFRqucpPpC5vqJUpGxYw2pgp6ZngHNjT2MKaCk21WRLLc",
  "key5": "2y1oRjE6J5VTcEFc7QmjKqJ1xLzivL2kWGcPrX3CmAWjcdHVTxsHK7BrvJfh37siq68uVAwRrrSFgkofZroq8Gwt",
  "key6": "5BX9nKjCunK4A5apF5wzCmUFdR23gMm3y5jpCJMsAvb6ayF7iUL6BVV6isdAn7uCGcDJHk2QP8Ewf5mGgCKAruCY",
  "key7": "3zuYZxeeWCEJNzfrdTTCTyf2ZxCon4ctySge3y6U467qxtu8V6A5Gbqof4AEFtezu6qLnXmxSfq1ySf5gvB7JmVL",
  "key8": "4LyRLqDRUrpSmDv657XoUreHHCGf1ov89Df8h86yPuG8U6hPdsbK4NH7VMN5FX8VSWprn291qXkRnMBb6QTw5FQq",
  "key9": "42XPZH8JwNYq6tEWdgJeAEGBSqHAJUWu7mwWaEWDD1cD8o9jxrKWUXYLPuv46JnDhVHM9Aw59JWBFYsBmBvitRBe",
  "key10": "5wj1Eqg9zHR2myCsuHdvhghdkTTQHmXuZjmaktiBdzc6dCCqPJCVFkyD27MiZZaa8kmUE42DsyFYF2mrMjJWAdVe",
  "key11": "2i6vSM63eyq28mihF7LfYmQkkjzyRBH9ccyjYPtYKJYimEhwvUinzPRBKNf1qhNRrYz4o5Q7S5qr8Tyc74VtehMQ",
  "key12": "3A7A6m6gkvExtGBNtxa6FvkJzmF7juqzy379jesB4sB86HRL3fazYuzZbt7AChyg8cyJurz9p8GGgBn9ngYRKzd2",
  "key13": "usS2UJAUKVXthNpYDv82FWq7dfYbn8HZA5SqhgHrv9gZvzstX2aSaLt3Fg2Z3foBwKCeAXucdVi4NrhbCBAsuTm",
  "key14": "5sfMp13mVeeKwFRipWoEYH5EwzborAGxyY46zkBmjyUx9a5Hb36fwwaKWGvzPoYcbWFQXevQPN5oJZgFR1r25xCW",
  "key15": "4mQdbThE6f8ABdeJQ5dWGsehmJEa87qDvcY5WsT6P18G6JHHsPmFimJMMgtCnJxPMfGm9cZVy3eCun7EFGFKtER6",
  "key16": "bh31LGWUhinGJrJ1uqKr2tiMkpPxmjZHutxUgLU2sAhGwGrxsFKHP2JEBw7FdvCqzneo5X3W13UkXE7p1bSbBsk",
  "key17": "2nMd3DvhaP8zuCog348iDEQsbFmqDGwNB46jm5j7w8abq5e6bPLX4Px9rMruMtsufS4KRidxoH2gGPbtT8RQJQFQ",
  "key18": "67pmVae6G3JbzeBFsQLeVvAKVVHkNSr7uCwpSKHwMYfCfjpMJpSS9uep2TJs6wArFEWAUhQ7mnZW2Y1uEEfEDw8q",
  "key19": "3XSWngnN8cWjM1b4mBEPG1875gUXXEJgvwrwin5Kqsqpm35crPcJf1e54YdXgeWkrPyFUwqZwChD6FzKk8ao83aJ",
  "key20": "U5UAsGekuCKs94WrPMfec81SEkMzvFWK4bsfjXB8HqCq56PrCE2oJNYzf2LGowF5QtEv1vU2GNEzGE94pAPciHi",
  "key21": "5s2Er32vmBKKc4nBKvQ2X7AdrViNJWQjabjfTAYZbos45bYkex4yTanyAWs9Q2kepxR5szTuCPGrN187soVMeDXt",
  "key22": "5Pn9CuyPM6xpYXdVxXC2S5TLqKL6BRUu2R8tcK4nv25CjZfzyixSHWa9z4pjBzwWy94MEBRLEkdB1XjP9KkrghTN",
  "key23": "2AFjiUHwYg4vox8uoPAWTYVJgkNKAV9wXas6vdnkj63Yedhwy2iBMr337rHnt2XGas933HDMoUqSGsnSFEkumV7H",
  "key24": "iqHPPXZxhoKgEGMwJZRLZCzpci3e5RSFz4m3wwzgeQsDhE2WGCKy9CGvoBySKVHjPHmfyEj1rDghJyTtrSVHEvb",
  "key25": "wZK8YhACseEY47hN2BT7fmsdAXT5WfzenbJLagGXNcSDhMdrqHje771nzMtDNnJMp2gYwAF3hAFnYVqPS2wJSU6",
  "key26": "5gJjoDRp3R3VSS6uA4ewPkfDAurd24zviAhpCFzAAZGjzKZ8xTp3vapKrY6o8W4bT7RqRi7ZAeTVF2APLfCGUWAh",
  "key27": "mVAkNZty6VjnsEfsUZARfTCCK7YcVqseLe1EMKqQz9EMLR3rfd521i29SPi77wVKre98N1EkqmpA6nsmkYhZW4E",
  "key28": "uLxLEsqBR1LZCLX7JsAv6FuE2Cgj8QAdzJkXhQnGw6E2pj4NkzrEX1szaGQTeokADAnjPjygVqyRcPn15eDSLGU",
  "key29": "4m1LfJ4JLfzrKMDyBxVZifBCpoMSpVWPeJqkx5zjYiTNFc7phYDD94eZrGv4TZ1e7uqJHHnZWKL2YQwamEVLUdYW",
  "key30": "vagzNCS6KXn3TSwxaGuXL2M6fdQ1abr2X1L8GGg5hqKrq219SGM6aoN1vGCMsk6Ks56fm98Z4nHt1xBhFEYnpuS",
  "key31": "KjroVT3a5zAEBA6fhqQATeiHsvy339UUvUonvNi5sPekMnepXjpzUKZkJL2Nu5w1Rxf8XPBJLo7trvjSphpSKxc",
  "key32": "3cL7Y2xzjSNKvzUbBJ1XtMjRt6xVNyXz2k3dqLoJCG3JvWdLuNn6Cv1zvFSpZfFshet9XTsngdLdpc5FsB9EktNu",
  "key33": "3nww9E2ofu8WVNJfH4Aost8isfaY4tsFdGzQX28AJLnXKddRUgL3DVBSfbhEbaAMKxbMhgkJt2ZSuVwbhbe4JVAA",
  "key34": "5WBQnEsUW2e7W8LACwwLjXqedGV9WLfweK3zVwYmB2zHuMdtSJaPECcQPa3WqNR2b4DFnqJ8iXeSqjsJzpaPxaaE",
  "key35": "4P7nDg4SbwibaPA6Ro9BwPPXTTLAyMfm48h7KU6uEqgt27rPgycZwAJNWgScmdjwSkYzjb7ECtAyG83ezBnbY6tD",
  "key36": "5bAV5En5yY46HfJjonaogUMB5M1BhWKog28BwWvBXt4GyHUDmsZr2CKgZc6gVMRPKUgyn4BbESSsp3CvAw7wrVrd",
  "key37": "5dypV7Hz3MubFnuZNwoRkdT79vBUApv6yeANrqB1RUa1CkHn2FTESxkAwVPzjiiCavK7P9acukAvNMQpJyLzu2Z9",
  "key38": "23FXRegN3fdRboeMvDgr7TYsZyCqLexjBejrdjQ5JKYFgz6743XUzi1oJ35dSDd6FP1AGC3TLwbamZYqeWjVn2Pp",
  "key39": "2jNNwiWbHBf6Jh7uvmJ439hKfHN4sqPzmzcBrgWNs5ZaFonQ17c3e1b2yVGUN1KXBjTLoR68zrciDnfUoDKKGG5z",
  "key40": "3c4D49jrqJyJVoCuhx4Kex7H5ESkAhHztW2vrLzQKrg3WD9Auabi7wSc1vsucZuBwu2bbm6ygUrhck2tHH4emj56",
  "key41": "G9fx2wqPcrdLFTPnUfHnBz2qoqaLa6nLVHB94EH5fhK7yifSmjNcNJMZwGxfXszEBAnJ44kQ5VYhMWikfEs3p9t",
  "key42": "n6JkdPwrN1tjNdFKSZji46VwCNPfj5snR21kmdoSamFaoAnkDXy6dTZ4qxfyTj68pbfT5GFAVoMz2HW96Urpioi",
  "key43": "4fQUKfZnk6fFCfcaXWBKqJ8Jaxq2NXrRyV7Hfr74v2n8R7pPoTTpRYVcVYfsJAP815bBrAUpTFuPYEe2DYHNGVph",
  "key44": "59Rn4zX1HnmhLDHCUwJ2JYZvbwUMh4SfYoCXSwpygRhLPr5gDTbcstKCRmvCVNDLVBDLqEDQMKGkrFPzqa2ovkcv",
  "key45": "FKm3a8UsT2RuXhH9zb73KyZgu1cwsHR6ztcaXZ9NZQdSSdAp7KJ4bSpHU6FGhfPP15EnkCuekPFoi2Gmn2YVqyg",
  "key46": "5kX8gjx978xsYEpSDLzeiPACYwcJqZ8K5nasPPzRJQP64wiNAuj8F8R9TSCddg3Th9fzawWvCaHkZBDnuAc4KkdG",
  "key47": "3oBpN9hiNEcYfMPa2TbvXzFyNhPEfcYtaQyzV7CzxNfb73iSZBhhqTZhaZiQ2gBumdJr6h7Hfpwoe7onK1Q1ZFpM",
  "key48": "4mW83VB9B2jC1qs7fG7s7AXJjnKtzCRKctVgzqFYTsCU737xqfDc8Ha7Lok79UKkNzPaqPfJ5UWC6dUCPaZktRTA",
  "key49": "3uumbeaes747PXcHWA4Az2TV4Ctf9ajRR2SxjJdE8prhBd1gVfgV6vsu1iZPrvfZ6t2tHiH32xJ2J84ztJjFNd25"
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
