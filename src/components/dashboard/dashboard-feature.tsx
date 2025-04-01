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
    "5SvDkqh9mSYAwzndPDXXtcBd1b17TRLG8v4KiiRAwt8AU8Zgh57mnNwJDp2mjX3g5xRfgpG13QLMgXgFadUWwa6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fkhbrGmt56E8R3TcShyFK1S7UrzXqhv4ozJrnKpQHWzdSirn12WgZMcrrsFydh8nhLUihvXBLzieRkda338sr5G",
  "key1": "4K32V4XLrAMrNFqW7iTyJiqrKAw1WigAskav58Mg72aizEx2cvetV1uorx7qDYUDucmTCRSfuM4mtZkNrcX59pv7",
  "key2": "4RgBG2Ne1HSWM4po1M1PmA4BCjCqNNZhQ8GRCkPKTPkLqQdDi3BwoLMZkYr2rpgdL1N3uo5f2B37zwX5HDWj3VN6",
  "key3": "LZztfaP6nQAQZ1G91faB4LTxLg1iU3EJWMqrBjqEDPmA4Dv69zrgsWMW6mGcJWYt3aC1RHjsRQuN6ZV4qBjTdxA",
  "key4": "4B4kTf8tVqZuk4abeWYTC5UxMv5hZRZrD4Db8Sgn8UxjwJ3iNDKAnCNqP4JP3yyNNCpQ9EswdePJx8TWJAyw333a",
  "key5": "4P54ppUJgp4vQ6yaE5n11XFXZ444JwCMLnhWv46nxLD5axoSwxpieTBuFdVnrTR4sBtWyTPytpJbMcgTgz7pZED5",
  "key6": "pT5AuxEFR6DmNsygH9KFg3HXqCbaf1AVoeCdmPWupQE4yXoox8CvWtr6xdvbZZCHMoTy7FiCNivLXbGGvD1qtFc",
  "key7": "2wKMXhZrqLm3f9D5SkxBZm6VPDgkg3u7cr4qRcwCpjYukBH8ApHNux5TyKvoVYoouzhcM8ZHHESVirhj6xmuqXXB",
  "key8": "4nUVY4EkbnFM8KDWVzfsmMXFWHPRea2Ud1Nm7BiMbXMZMgAq87J4VaLXSvtYZz7g7hc8FkWjTm7Tupdvmfz6p5q2",
  "key9": "KXQNmsm9n4YLd6RaN3vFYvzPZzo2dQaPJ8de3GpNEmCQLTSUcdGMEmf524HjioxBq61ChXU7RXChEdaR68fYgMZ",
  "key10": "4usYz6M4VGzSsUYomvqbGPX3LkHjanTmxk7RqXNYRJR3sSLHTcJeagWjcP5WZbpubwTSCgc4sVpoKtHrEtWUXb3P",
  "key11": "3Py7vcQZ1RigTizr7FnVhVKL2aEjdCGwgXcwrKxvvj9esrhPLC83kWG99YgzUxY1csfouV7MzXugYNZhjvxfzrJN",
  "key12": "CRBL6BwkkbEYWV884J5YRysRLY3TKPp7R8JW3BHv2sEG76douZ9USdK8GZhkiRMbaUTFuRbjbCVS4UP3phJhY2D",
  "key13": "4ibvRzvtH239ziWyTWc7uAW6PB6NKM7dgLzRWbJ7smc2g3Xobos5VoouunbHdFUrzyh4kDqS9CZ3UrQx4R5ERjuF",
  "key14": "67JeAfcheWqaKUvLKNEydVBK8k78WSoEitKLCbKUe9ghTTV8B7Dv8gRrq9LFrNYA1qGScm9rtit1DSYpNqCQP6rh",
  "key15": "5Ge3nnPmsLwKctsvHbZPwqjxik7NVAH4qZwyJvC27VVxiUE4r6P17FLz6FbCcChZ1igri7X5enoHxTtebH9vMNUk",
  "key16": "2zuwHJM744eh88FF5HxmmYVB7WPF7rtJesmftq1UPpsKes4JRh45sSBVFRdvqiFYyYuTdMFWe5uav3gXzCGziDHE",
  "key17": "4oGvjyYHD7iEr8hd1CBrVzLDtEr96zaxortY5m27cuGe1pfA4Cn8zBNZsfQ7Vs9fXxXrReNh9eTgtgJPGHWk6DxM",
  "key18": "3S7BsC5tfA7UR4Ar42FbfW23qbpyViGHAsVq4d3ydHew8U6uvMqoUMg4Bn38esPs5hvsvhksRPB8pH2yhnTj28Ww",
  "key19": "41K1FJnWE3ygmrg4M6rki8avx7L1KRaj8ea5XZWjtuvQwHmS6FUnBx9jYDwYQDNsiUSsdqK1FgB6NgC1jKVFjtWA",
  "key20": "2bG6wCHnuScnzsLCKCnMdAGBz3gbRFXEo599HMLA7s1ubtJbXok2tgFQZhejvZ3P61zdKxYjrGE6QXP6TMZTKVCK",
  "key21": "2F1ueZLWZQExyBuncVTfQKkWSrmfvAKWUDf2CWEVLcRFWj2LvFvN8h7XXcQkUeMQJg1nRJKe9Ta4MUYwAY3KYLeB",
  "key22": "2ndf1to7QEfAgaw4ANxrAaxWQKKwUsHaz29DDNma6xmMBAomrMCbfb6K4G6P4P1z8XzXDEoAQLEWCXFthq7n1KPs",
  "key23": "2Z13dLkjTRnz9KKzW7ys9h9Hr2PqqL55Lw1x13AxpCAo2rWVm45cNpjwGdZdMFnmvAq2KqKziSCP9SGjZvFv6w7L",
  "key24": "4RtxjHUxe3kiHpdWSSdcbXFMUgZ8YJ3HgiMpFZjFrXJkJ8EbFG1SdEYTWhEzqqZ1kwCH6J3DLk4f54xu7TYJbxBE",
  "key25": "5gzdvZr31E1FxzD2gRkTzBff72h9CfJqDncj77imzD5hx46A1XwDoWqu6WpfXF3RtmuZkGW3wpZCzQs3Kzkujazr",
  "key26": "3b1c8BoPtPr7Yjq7AdGjhKpbLYyr1iEo5rAjqLVsSjEdhDu7227caBFgW2ZTiFNqrLYp38gQkcnHPj5czFzwsuDH",
  "key27": "4VKRaqgUPSaUUCzt3gWUfELaFWdFUtgQy4miXcrk57a3iwE1VWMbCYEQEERtujtfLKBm2tJZzxL8t8wS92jA58Cg",
  "key28": "2PXgvVVUDP9KzGXkeNjizUjx4AZRY3h96F3j2xUvzZSMk8fJXSR9Cmb35xN5A7fmv4AkTGPw7aCz4UzWot3PJFu3",
  "key29": "HXN1QPMj4VaUGZt5WLDq418TGeQXU4dD37xja5SQY9X295xhp4HFPGnbgKJw7r439WnXVTWcwhNYAwkmupx7Eim",
  "key30": "3onPopWLgU9bjLGnfDhEdg93wHxbXkoRoGSg1KF6ACaywnHHiFMhaYciXXXu49nYgZ7aJ6PP7J9JwxuQGYXPb19E",
  "key31": "4sRnmVmbUSTg7nG1o8L56DVfRFjM86YXhEyy5LJfGvytUX4jzhWsZoHAMdcackgVK1tgakCTnbW84ctNCsyKo6t4",
  "key32": "5SuxPRDMpXbkQf8sfY5oqy8Kj1xMGwk8XihKt9gWSkNozy7anPefMYq6xNWBKrpPaxMNRCpSSXGPZmYVLr7TBUDx",
  "key33": "8CYRikgd1BBFdAgRNFhkpBJtXAkrWuW6vgc8EdGXbCqiuhAX7txmB1fJr3yrx3uhhE1apF72yR2ZrH1VdBqsbLN",
  "key34": "5j66eBekUxQ2QDFvZsxprPmpZL9S2s4TY5SEv4ja4DRbCy9hEEAGDDSgGxjMowzTiP1GMXbQeFk5diJaiqHhYVY7",
  "key35": "5dRWuCTMYTgsoFQmeUFPLmUJp3bdVVPyht19aoX2UDhMLWoqyCdw9npTiZJRW4yB6DPMDqjyyBFFAN57ij5QzgZY",
  "key36": "254MRrkvFkqHTaUKhWo73eA2WyD4QcHF7LkF1VPYb2XybsfQkC3Fzx4V8QmuFhuY7mjxowRiyYfuF9srDcNrhnWR",
  "key37": "5ugFbcwx7C1by1jswDotPHbEvxfvsgJc49jMhP7PjypPHgn4DJNXP43zHGuoLdNZ2XeghFQbjFadrYF7kkfbunt3",
  "key38": "L6uP423amqPdw6tX7MjZfhDh8iUSNmyophu9HScXwWBLQ2bjS7713giun5v9yNNA5pqZoREdryxPLGjTatEFCvi",
  "key39": "mMLB6MTojJv8WWzdjjnNj5KKfNkJKagkxtNXk92cxnuV588g5V9o4BBDRwiSyhZJbV2JRfXAXp8oT513WCFrKPe",
  "key40": "648nTrymJdivGpUSeah68LMy5fnzgDWCcfei3ANixmcEYEFZ2CkXjkvMZkUBHp8xD6C4n6GspcA6dPTqJj8nZQdH",
  "key41": "5GTH8PcBiadzsFFQLCCwT4D1wAEDbFMdepw8H9BS6EJwKgz2vTYCY2Rodw9HDDE7J5PzENPRA2FmTtpjA1VuTq2p",
  "key42": "5pkwHDAqfr559oLULq2DhXdsPhK8UFugbQGfCnPRVosainjJnTAj17cj2rzgcZvrQ5cUfzymf8DKyBVHb3JDVhje",
  "key43": "3r2vkopPgBAQdJceqmKts8uNbrfUge1g27nv7nQogNeuCuLGSvwxVD4AkcKAuARVuvkNPPz49fZBKoxWPCdURCdY",
  "key44": "2KVeSBM7YFRBibe4Tf7myGEuHR3BfipDyHKZVGQH16hwPapJR98ojSYmALxMxMeLu1MepErmpNSTLV5LTXni7wwc",
  "key45": "63qmjjo9UKF9ZRLojVxmdk6JXZJGxW8vKzFebGkQY9T4MLXkjeBf7oAkabUXhaN7U6YRL329V6EyH52kLwciioZa",
  "key46": "2brT3C6TWNukhVhbSgiBqdX3f88X2HjN8UZi9exsdrXGHbgQsYZARJorVWqGWNjvjancm6WiKV1RBjbNQexWGhGr",
  "key47": "cGeptpM1kmpgwMY8Uqh3LEMzirZpdsVfHLHzcLVFRyQr5X3EDJQFMw4AYHgcSjJa1fi2mjzK5Yid5abxU4D2zX7",
  "key48": "CyK4bM1WVyB8oDuUnFXNijeivd4ax78KX9WF47u8fhAsTV9dJyf8NbFqf9ru4UpQKN1HSGEeQp6xQLEGQG5QKtC",
  "key49": "3twwpqMdMF8cuM6HHYP27WqE3mjucyBENjFpNcHy6TtovXswegZHAAc2jBUJzTFKYbdK8jSki4rwmzpoTkjdYF1M"
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
