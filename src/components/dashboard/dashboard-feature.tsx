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
    "51EVSm35ubF38wpzVnAKKH25LS2oomkYakwfqe1VohxQXqENAnEcYwuFbSqDfbDed7cgy4RDSgvCfHPufHAGwXJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPiGGdRgCZARfr9n5vWpXpoERWyNqHsrzaZaT8nRCP6SM4j91SxZ6ShVuKTxaCUqskiUPJJ8jHnGbgzaZJTcKpf",
  "key1": "62S2MKpXaeNZFDPGVevYqY8qAxxYMTxjBtu488Mkk2W72AeDJN75pvbybGzoawGZVjdnCcZW9xwaKfEHMC7gEYBS",
  "key2": "6JqzrMhrQudbVqTHZ1m7qsDi4M9vkNqXCbVLmwdMwYFxA9xmLL1V63y5ZahVSEa8hSB6DwgeF2Z3zgEmCComo5z",
  "key3": "4iHHk9CikrDKDkVTubY9KFy7dwWkayfey57X1uWUGHHPVPK7VGaZdufLkhB5f6MsRmxvjD21YRawbRqSkvNkLR8N",
  "key4": "2J125T72RVySpgwizu7pVGy7gDFELmcZBEVR2XWDhwm3UXFwzHRNdGePsiQs7qcp7Lu5csjatin1ZJ5v7pPc3zhA",
  "key5": "3BYv1W5pqhsq21yFgCFAa4LFidiuCChx6CVC7P7F4Uw5hvcsdeKGXv4X7cr1gxPAXRBckwmZAVpJfhcJoTAw2mpK",
  "key6": "52tP1gvhrY6xsbUdfUzwiRTZiKjCww5dgsYvrjgKUtJ3NKSRDHzVWUyaFyVCsQYvMNPuX5sHvyFLorBcEFGHU5W9",
  "key7": "3yPteDhTqP6YfFCLMVZjvXn5xzMtfqNJLagK2eBm2c5ZWown2axG9n3mg3HLWGMBBPiMKEaQT3EWCtQGV2smHWSL",
  "key8": "5ofVrh2bH81sS5RxqFSErZyUjiNKWsudZN8cS6P2cSj6JJimsNvWxnwsYmEAgmTbaunV9sQnewpiL7Zb85hXqBUg",
  "key9": "jeWqhhA2YtxHFGv8dWwdqDP5hncP8CjtwCyVgqKE1AUjDp41M9PVNVqDYLVsWrEtKHfNpSKE1tBQMos8WsZiMjN",
  "key10": "3p83AuNPHSjxLDXsd6HiaNmBL8GuruQbpY7uHZ83FL4xXM4dJqYxVoR1ExzE179kqkbH4LyGE83hpmdPmkwo15j3",
  "key11": "37zzoAKL4VWWjuKvQzwuksTxLg6ugMNJzJPhbKdBcjpvztR9kMpKrnjLurjQWqRdvrGzNRtUUwHMbAyYen1CWeQS",
  "key12": "pPHPGpAvf45cnRdHrXXqz4ivd9tP1eTFqJk2Dzb7hTTkmEEwnfeJC6JC5vPw93wh5i1JMuuVun8cCdrDtYpDYeK",
  "key13": "23D8Cd7MkUwScs241VTYp8FB6sRLsiQdo9U2ZyKRBJ3ti1UL34b1HCAwfPmQiXQFjE3ZsQmWmMTqB6yxC9mzQnbh",
  "key14": "3veSTH7jGDm1N3kTRZQnr2diWp8UbUwCVS13zSXtE5ysr8MpbTw7kjtSDzqFH2TAe29gBvEUAfMWL7a2KXRsh5Lw",
  "key15": "45CuueKdyG5v58GsK7KMEK2FAL1VL58QnsxuRwwAUM1VKUuhXjK84HpFCYixk2GkH7vkThQxWag35drvpvvxZaZD",
  "key16": "2frBtTWK2gG78rz9wbJSxyx1qPNv8mBwCJuv7q48T7UkUG52eoMGNTN2cJSxEJgs6U6gwhEF7Ucr18rUnuvEcR9s",
  "key17": "4uFVsq8jQM7ittG9L7yG5jnm9bDbvYHiXC88zWi7YgRTdaZaEeKtchHTq9PkAo2aVgFXqeqMj3D5n5mN8UEGi3e1",
  "key18": "2pQ7x8PqbgnHoetrErzpreZNRfWeiYH5TQWoiMuo2WdZAVhYKwo4R9PLwbQamFQRTTAyEGfSKubx71gATbRR5WAt",
  "key19": "vDb2qNkN1vaCTq7FBqcRdt2vmmywkaoSpDLAUViTpEtJdPMypuxUp4vfndpKfTAwdq5E8wx7Zvpv86hrrbm64a7",
  "key20": "NgbVDJcvLK78BWNuLfjJrcZssjXmmXog3cXjZ8yqJYcQMZmiXLQaLLwK7mfqchw9zXJ79QwPNVoBYgC3Tp3YJ97",
  "key21": "39BPZfZHsnXRt6pdPkfv9MYjPN2hZv9huyVpa8dZvFUiKreNe32p6eQoCkvJyd7rMLh9wJUCyeuS4VC9EY5UygVN",
  "key22": "iYoE8chRB1LiHNDfXwfgFcQzZjb1ywhBqAi32S9XmPu7cet82tuTFMMa8ndmSNdrQa5yWRn8kCEmpjDyFaFjhag",
  "key23": "3Jjy4awH8T2wfm3NBCqECFCW5ANKozoJQMuQnuS4ALJcFUfMvXuvCiw4GbVxDZ8Wp6JqDsSaBXC3GTDahcmDPpmB",
  "key24": "5gidjgEZ4BoXC2M9jduFLbAeVqNhKbX7BPkLGEgiwW2JhbhqfYVC7V7J49Hku9TkDQebR1va8k2MYbppzmHnQYcE",
  "key25": "4HntuA5KUDjWwiPQuRKurUVvj7VBMSKF1q4R8xWCwe4tBnvWJNpKeNTcVGxtDkptwKHuYoqjYJktQo3xE5t3z8mR",
  "key26": "3mGPLKRQjFCk6E2Pu4D5DLQu1Nk6GopMy5kyMKVcXUuvEq61WdVXPY7fFuWhGu4GyJESSdL6Tv3ddJNdKJRNhrVc",
  "key27": "4VLT21gL6asGkGM4DmSgiXoa9WuZQ9fYfC3mcg2faRr8Y8WuJxm1nMzY1beAW5rZ4QEN5b1MFWw6M3MoAvQN5B3z",
  "key28": "3nLbbaEaw9wh1JsafHGVNXv4Tan2LFEthkudXoFKMS4zLXhcA99HYEaYY6AJom9TZ3P6nai8xgM1Vu96o2DedaBF",
  "key29": "5Pqvy3hCuL4nXR6LdTo2DoqV6ccL1a7W71Fhi7d1HWk15mYJ7UQZGHQsGHZXRBLH1oR2zUQnX7dNHsZq5D7o14wt",
  "key30": "2BsJSajwQMaDYS7uy2o835BaeSJETbmkyb91YMeZfM6p3KqpVERXvH9gTqX86EuhKBX1NgufwTpX9UQ9a2ux6xx6",
  "key31": "32h1vqFB2JRHbV9CXRisKBgKSiR2z6WNNVW1sfLv7mG4pxD17hirZ6dye7wzRvksMbzU9S5vttgEgobTcWRMt4KP",
  "key32": "5KStzBMb3hAxE1bZa4sBLEjGegb7dxGKTPub4RaCNPYt6uA7iCDSE34zxMZCyoGcEWjarxWJV9vEZHQjuVhqm39k",
  "key33": "4PTiQi7bUsHBQgYq2yxg4X3MuJzX7fD58XF1vB6NsQ6BNRqwxDEeg6eeoytMhKSmRK4VmbQzAwW4dYGKzJDU3o3H",
  "key34": "2xaxJn65g5XiPTFGhAuFZw8jRwHEuY4Yjs2o51u1NTS3FthvvMbrd4nHc8paV4VX89tw4E68nn2mMc4gMkVdsTav",
  "key35": "wNUYerB63qKAn4wZ8ajK5adGfMG9j9jtno1uqyyTZ4TsqqNK7c7zXzkdxQg5XnSdzZG6LNVL2XdKWteHXWU4Gc3",
  "key36": "29sgcwygT3Gqd7tsoGqT26QjDdUB3H6B5uoyoGmD6wZG5GPzxAGtu7CdihQ9zRWsxFajRbdWgZ9pg7WBbWE1Fmdd",
  "key37": "gkPX7C7ZxBXXovDmusdwkQXdMauKq8qvVkVR2S6CG3hQA3DyfdjfQ2gn3g8Dsgks9JUBsS6MwBmhyd15MZEafyB",
  "key38": "Nv7bLfh3TjfW9qdxszMzuhVb21zneA4Tw38mPG6JKwpA8t7hG1yCDJii2vb1h98ogmtBK44oPidPgV4LjGEK7Kf",
  "key39": "sTDcASahXJhvHpMp4CURei1ZXVZs8LmrThdA2s6fB8KRLeUkS4NEMeeyVBK5UrhRwAbEsJ8mp8E3cgmu9GARZrX",
  "key40": "2ckUiNF54xcfEFdWTT8fLnvm4q3CE2cuzWwb2MjKYTRBXydBmKpHJCe837nRhEy7ptmuE76Kx7EvnDgHvJqq4ADW",
  "key41": "3jhDd9sEw9SUsXQeg81RTLBJDA3EM2kjzbg2GNY82MksnnrNC3EaakqHcFuJZpo666WSTRXc4x9LZesT6yQsfuci",
  "key42": "2LUb7y9y2ZFVrA3zsJaYPBXkQbetcaGo7n7MW3kY5QC2DJV3fFgGjjPXd5faTAmphmkgUCBmvMq9m53yh1rJN3m6",
  "key43": "38NP18AKNfHa6T8G8Cc25CeWx7WKL7TaYKpAhpjgRDFo3stToRjaMjXnFMNsUN1MHDFJnrtpaJqP9x1bJ4BrNHu3",
  "key44": "4sHipN7BrwLefq9iMgrppejSGPgqFSjftNE8EKeg3c9GEavEz4Uac1od3mwKioFQxPbGfLFk8yLwTSVLG3KjiYe2",
  "key45": "2sxFG93uFXAznBA6abyHCu88X6bzqKLRXFDbnNR2SGsvk5CyzaP79rgcJ6anxoU8JdZuBohBqScb7mr3XC526M9w",
  "key46": "EpymRhqmDZ6EhfD8C1YbtFh516g7HruCZpLAxUkZcc24nYuU9pq43FcdjLbH5vRrfv4SoB81FY1D9KgCTV3QAjG",
  "key47": "P2YuhqQKcFT2DiC7TsthcKPKRf83y4aPmfzHyaxjyWNKhLAzhvigRWNiYKscPf8LK3yE9EB8npu6RNmCecNkTYn",
  "key48": "5HssRtjKGUgApNenQPqzxYnbhfghFUMw1UpamS3FfKrobQ7r3WaguUqZhb6y1uuZfccCAZW6eQQ1sUK8egRtYPAj"
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
