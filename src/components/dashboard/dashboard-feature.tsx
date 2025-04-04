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
    "5dJ7cbPFDaSSxNqChXT32nyGn7g9uuSpdnapDF34dXfxb7QR8RasrGiA4GLZHM6weCxNzTWE5Lmi56F3ww1gC56B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFEaYatTmTqjukoECAGKEiMmBueCugPwoKXrVFU48dd5QrZtR5VwCCifHQo4ydsvXfyuGfFLJxy8W22VJoqcDVH",
  "key1": "2qNtNFPDAmohg8b2gtS8T9QJ6QoErM3f6Dy9KZw2sB8r2PomXVcaEBP5MVKE6ZBQbr8wKpciYfbAM7mrnCnzTJTD",
  "key2": "53NXhcMqVxurnAhphKGXb91Pq6qBKZ6aJ2LUf9hzQByFKrDgvKqxjo39s8Jt6vee88aFWUut7ZRJR5Xo1KcMhEs6",
  "key3": "2Eq2evHEg6mR3cRikkmshNzXzRZDp9ZJkSPLCUAff2RpEvQwFaM3kkzepwQbbMctYj9S7nTAJg23PFxgXy3HS6rK",
  "key4": "1kWW5fnieZgC6jCVbQcnuoAH8cQanWViRMtVKNYK2r99AHzEfy79GkQ9DaJZdRLTHTaAkWQYJGaxxs945UgTikC",
  "key5": "49D7DzKmkwc4777nTPDoZrgMVRuiQzu3ZTDnjyLCrTyPUV2eMvghP7B937MvUCcdgfSzvQNwZABuwz17SrhKxvLi",
  "key6": "3pEwn6bRyYojz5udJYA5gSepDHmYwCd4wPLAwAnZ1zDkjUY7ekRkrFLcyfoE5v6UQFtUdsLjNtbdB57DyeWaNF81",
  "key7": "2qi823cfkGcvs2G6rSY3KYmJb4gW6Y6qLLAisP6DAnHA3JHqPnTu2KAfG4RaVo11Bg7JaLKLew5vc9cvwch1TnX8",
  "key8": "4FVZfaNQrkdh9QtckkUYSouS9s3mHW37dwWjXcpAUZYBgT4E5e2qrNnBmK1UHfZzn5uGzwaSTUoVXoVF3x4EuahY",
  "key9": "2UuxsD271u4TZrjR79bw1dZbEhJE63EtYJtiR7cweRc1xCmdWdbDLd7REqnMeEbU1XHeLxbJue7D3xWMrZ87AswU",
  "key10": "4QjrUcVbysec2MSM5tYEPHj9Hm5EeZW9wksqUJSFMUeKtoFrEWua1knpt7CiugNMoyzLzKpDqixtSGtBs8Kd3435",
  "key11": "2mTagoaqRTaUZPV162inx5WNzmCZ1D9kmvkiUy35WdZiAyAjp5kDZB6ExR332YHUsGSMC6Ns4oJ4y7P1fyxTyYDb",
  "key12": "3198moRrPaKKfSBnQBQfynWeXP5X4LrNfTm1bUWia9vhurga9kJ54c4sYq4rba7k915mgfcauKTRb6FU9XsetUxh",
  "key13": "5aeFWk1YAcBeEHagrx6zoaX6ebCbGCgJoDNs71bn3C8E4ymEW7otG26HKKcddj3rF4cG5LSsmgommJ1sJ2BJjyiZ",
  "key14": "4gTi3SbtR36x56aBhA449RPjyEb752wjsPoTtEnTkpkxfqu5391qP2hZi1rJArwd5ZkBoMKTE8tgyq7ojx1RYohR",
  "key15": "2qphWS47Cj1ssxZmCmstKyeQcXnaT5E8o8WwWP1gtepmk4yqUi8uD8TtBL3H9rvZk98KPHVFAw23DnLF5tbg7mSh",
  "key16": "3bgPMCunRDs6wBzSsfRAJ5BWgryCJBz87FspKUCRTyQHa9kzjxfTTrtjdrfWvV2oZdQ2zZxnKjEwbnm5AoNYgucS",
  "key17": "281TToaR5UwdF6ZNKVVAkZxKMXFWTfH9xzJsvnNEoaDqaQysjXSgVdBDJNwA8wP2SevdcpF5oVaxW8iAVggm26So",
  "key18": "4Sz3YRKCxzZA27nYEV37aUAFJwQupf5iXXiNNXnPhd5JhiaBZRgr27uusayBZbEKajZGoz6d7qc558mCz6e1AgVQ",
  "key19": "48k2E3cLuzqFK59qcV1ey1CFm3f5c5spCeDpgo7RRExYU4gp87x7Ud9tdiNwve84YyT5FHiNdVwBKDi1pHBmFiRX",
  "key20": "61QZ9NaRiaCLGxn4v8P8vaKpa8LF1TW7LEDM7rz2dFkvscv3zdiag7gx3yW2TDwF6nD2hF4enw3ovoP4D2hKvj2r",
  "key21": "2qseGDJ9wJvaFXTmUyEuzSLW9ciUo7PZWzJzCWp7MRSGH2k1imQj8zyZjfghL7Teg3MyeP1SbCBEfXFbYPNd9cGN",
  "key22": "53tJdM7eS8zfbAUvZNnaMDqSGZPD7SLC747hxLYzhJBVGGJuBHYepJLPSUbuSJNaXCzav9FEpi8N7k8k3Rci5WAQ",
  "key23": "V9nU9mqXVE7qpZFPycPgH7tnkmCCZeUfxVbdSa24qa88zqu7Dvj1Xmzj7dQ1uF1oyycbMDGp2wcjZaajmphwHTq",
  "key24": "4cFa777purpFyAubt3PKEe7ZFmc3NddYjDiHAiya9wPQEmTLbAfzit5T2W7FwMJwk7ctNPPedi4tqZzmX4UwhE14",
  "key25": "3YdoAnD73ZR11wqR7Jy1UzAh3HpuSeae8hekgyV5x7QPPfxoP46AJd7JCfB2BNCMmhn4raaKaL96Pqu8bffZuvqq",
  "key26": "3oohyFE53vbGhYbCp1gJMNf9HbQ8qCfNpCAmRyFCJ3irvSbLAGG5f99cMZSsfhgCVCvkHFYpmAcjhgdxXySCtVYj",
  "key27": "3yPTrLP94XMgpeRUZU9BZznsECrniezDfkB7sMPWifSHC8ec7JQ9x2MKWwd9oSwaiewqr4qpWnH17afdwSyjA3hF",
  "key28": "2ao26uJpbzxk7BZeNzc5ua1kiPNGszE2yqc4ZcvgZUvD6ft4YZrYKw5KQJejRE5WK6NaqK6RxQjmMr6Mpa5FFrY4",
  "key29": "ZREEHXgUt5rW8dAB46AkrJmSQJNq8zLtaijWGs2e3DGkSBr8SosDQwWDa7rAe2eNZ25t38bv2UgPXz8biAjWuyR",
  "key30": "61bMZebwbHX9YbVZqLwAaJ5j5efJ5pboqCHSgGDp6dHDrKgVTgHocKKpqPtKJpNnRT3MZuPyeTZsoJMnBsFWvS1S",
  "key31": "4781meVGYp6CjgXysL6J1sXjpmkof1Ts2pfVxbeuZYibsqSh14SZac9isuyRTwJbHGK8hFM9gNn5aWFA71dQhNAN",
  "key32": "gSDTQCai5vQ24htwa2M2RuJAj84vqXAzvJaWScEkfLVtCjJ3vMgiVx8y5bnpCNCh7VxynzCn8asgzGWDgJCdH83",
  "key33": "uCzHA11Pq8X8RBa5zgkx4JP1z3EqyDoak2pnhDiSgmvfFGEGFJdC9f9nCcXj9yVu3Ue6mTshcJd667KgjJh61Bo",
  "key34": "38ufyY3DwmVnwXKNS8Bhem5a4RZeXnqi4WGPouEearznWP8rLX7ACxhUFb7ns6mWvFNaQAjEg6Ctxs8JxdT9yeUH",
  "key35": "5nBZsqusiyJFDqZZD7Ku9wvU9suPcHGeprVs7uvxcrwa8EjvrDcQ46vT2XNFbp3Cw5oz8gz34D3rTytuCJ6LWszb",
  "key36": "qyWsWGyecxLX56E2KnhFhpx7gDbPnrFpuFgz4uVJ1y4egnxNoYo1HwTDGB9BCykHWusS1tEWNdYqHbpNhTySHf6",
  "key37": "5GaxDD9qgWXn6PhDgHxZXWbve5VGk8XD9hqtBg61bVfCUrwumcQ1MEGA7uTx1uuH3WQFAcnNrkTQn4Vufrhqzaec",
  "key38": "34WUx6329tvdDvHFXcHPtp9JSinoHEnuA6SaBwsvW4QUBaH2N7qWrVfsX8hamm82AVzKu8CN6KWpegAUeWMSvCsK",
  "key39": "3dMmY5X7p2xQDT2C7HMzChrb5SyY7xnZzApcaA5TFTkHmjwfgggNqYmGPnnS5vajGzeEmwje2CqkSr188XX57WK",
  "key40": "W59oQoVX2gz7mUUEZHAMtxmAKrqcvFMPqSdSJNc81Cx81nZ13nuw9fV9NgBvrXXWfc1SowBb4gXPKh3QyTsRjG2",
  "key41": "3uKnhxU81rUZmYNmXKKH4x1sdpxmUsj6qMGbBHqcecpoPJ8X5uqSnfHCfKPtHrX7p8i2PjHvxAcikfqSe6W617oP",
  "key42": "pBKMsskej4o2LRXm5GoXCNnLMSD3FzLPLr9Bpmepjfngsjv1GR1Q6DHDT56VDUsfv6oaAZBuJqVietrvBhZYHdP",
  "key43": "3RxeJU8kFSjN7EpqXqzBkVZtfBt2Sci2GnimFyQzKxifM7F3QuXJasuXGGDAHovEdnp56nynF8DZoCTXGAUQnGi",
  "key44": "fmcHSp76w4MTqH661yvnkha9My7sXPQ3PkY1v3p5Uy4KgtggKhK5sB7R6jemvgcAMcvLKeWGA823KKuHdX4XTXu",
  "key45": "61M7mfE5gDqFFRn92sqJX63zD85jCNTStVBBGyCQgTs9XxH1vxdFp6F7Jssme9M7GcJfmzFw8fiFK9U1vV3yBf3T"
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
