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
    "2A7CKSSQyshMxVJFK5P8EpGpunTLeLKvy5tDmDSupgXTxSaFcYJGnu9Z9ABxaBHywLUwki97sK2MQpExiEpENPor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MA28bXkvfstyVs37W7DG4ww7UWdTAAGHy2DfNrNmVQ8ft44EXoXfAMtSL5mX6YV9BRS6pUhwUo1RDAF4nMp7QAD",
  "key1": "ocFf6xMGjN5ztiy4QY5wY5TVgnak4ZMniNpxT5RiHjxAYqyQ3qUTTDyF3srbYskLrZZckPr53Qrapgdma7KFjS4",
  "key2": "5g7huuHxsME8Marcd7RP31hoL4KZZ32piUmuj47YkmMta7AX2nVNpgENewaoNcMJhjFbSz2vArwCBKjnfdnxNKYv",
  "key3": "3Kj2zbbX39Z9bh9Y7MtA5eB22hNG86a4SkJd56ANKJiWmgGhVkrS8ZK37QZYFCUhbykSazyb9F9KYdQYTG2oYBkP",
  "key4": "M4mHsW7w2XPzGJxFMX2JRjuubmHTHQCR13bLVwXABLCxvcGyXmrvDd4vk7h17hR62SQ9fJ37qkRcZeCgvZVKTpX",
  "key5": "397p56vUyfQZRxe3xftR8GZ4ujtZVDUSShT2qt5ejKfEBuBFz2MdpsXcJibdkkWR1Y9rKkkuJ7Fo6YA9tpuvPKvf",
  "key6": "5e4FiY5LwpxELsTeTHcgtvux63gF7hxoGJnvjzVmhZvYrpBGBKkZSyNgEL19PbfWDn6yNtJUe2xbQVnbU7tFDezF",
  "key7": "61cdSSkE1skk5RdMzrUNjdU5Dvz9r4gofPMVApWU3nghgL6NgkpRi9dtS4TRVbzY6tS2z1uRkvc5chUCyjVMS4kH",
  "key8": "52vNs6mkxpVhx2D5jUKdXeqYspNEsEXS6PTa8mN4MVehbCVgNqCDnvXVHncqWman3uSWR5i2KX3Sd7JvZpi9robu",
  "key9": "4pn3gxgX4ZeNrqWbGUfoT7YBJNMftSSVwvCwj5Gj99Hbr7Y8fSgGpnBEQsggPKBudNoBnToZScCBD4SZ6Sv2C2tF",
  "key10": "MDRbH13e86fL6fQiKYX5sateHSCir4EcxjrpEdhwaDicy8CNghkoTB6ZNyJXBSSBXF4Y15pwzqwybPYH3r8GLoT",
  "key11": "2GCw1gmSc2NYEicfVbsCvmZaXvP82fMrCQpBX3L6RYezvgfmSiHsBESvt1NshDwmaDMXTUZVXHKEziKpf7xRzYj8",
  "key12": "2H4vkfUsCFHBe6JDMqrsgnK25v6KxCWXajkCVR4patmy6AWUpyZwzMjSe4ZLyeh8rLr3GLJ356Zyri5HbtyoKePZ",
  "key13": "31ZG3sWaoF54RRqkim1noCH6zEoWjqmVr8AH6SAzbTontYXKcXE1whUwRTtZc2TdsVxXstD7WSjaL1LYP7o4JNzE",
  "key14": "2G2G1BMuu6yotdr2nufJYeahWAksMQwpyeEfcixZKvvCML7W8FYvoSm4iAvf3ZyaXTGCZjTRsir9TpnmmDen7EiX",
  "key15": "p3W4WqU9Ak8ZJ3zumM89Eb1FFg2wTy7GrdxumJNvctf9aDRZyNHxZv4p18ooz83A8Q2kgQTi3A9w5LnMPD9a3vP",
  "key16": "5VfsMWu786treKbFavbfxmv5LkW7Hn49jCZ5QqEoZSn7TeMyAJWo317wQ8rMM8uXQw71vsZPJwmMeobAoLqNhGHg",
  "key17": "3wkWWtHJ3o75Wvgyj86iDjNqxzgA3vJvgTGFHB9HG5V4iTZvjkV2pk8CfTAYZ1KCVZQwaHbWKF1PZc8inhXDb5qC",
  "key18": "5g6Hh9fiVg64sQzqRbmJk2mjBJ8pnLXpNrLtenpjGGFgT5xR4kJaW9RCu3sGpmP1pPb8CniGmkR3zYeJQcT4NS7i",
  "key19": "4Lr6XnwfPbUcnq5MVEe6pvDVyURPH1NMav3gt4AbnE87NFbu5tqdVsHX1sQNwJ3h68KPuu5tro9gQXpo6JNLD17M",
  "key20": "2DdvyYphAyts6AbsVJrB3xRW27kZsmeymnWgupR4jxZdVZPUFVm8f4MmcZxhVFjiKGQi4Wo4xoM8753TKW7uK4jJ",
  "key21": "2xqyRufQuyVGSwSVioGzHo6str5N5At8H7go8vhrHMoo9yPrG8prSEcozTucP73CbRUAP9a9x5tus2MGTDfeivuB",
  "key22": "5KeE4nL3hKcbzyGUxisLf2UtxS3m3PsWFMssqpYrD6kFftpY5GxzVr76QjNhYPrwz9oq1yhYfzBrR8vfbxppUzmE",
  "key23": "5oNGLNmCqPYoTRA57QxAXjB8cS4SiPkHfQPtgsP54sPYjDcboiU2S6cYPNp3a2RjGtSJqRqbAxZ3Vyiu7ju27ERp",
  "key24": "4GdA48vWySJkYb5QNLJBu1os4ok9qJqPP3vLEvM4SwuLZn54Z468JsDrisoZC7zAGnb9Ya5ovhzZWMQgmcq7sFP9",
  "key25": "237PnXnANYEhhzzhYNqfNTATp1GSZtSax7XavyQjjbMhrVAKKczt2EWBtcKubshrTPfsapzL1HqcmVhnLK9BSxXk",
  "key26": "5xKYzpgW8JnJ2UFnv8xz7uqvQUq5B8EhhRFDJzqv3Ac6ZUH87Hj9vHXRfLSuNztmHeHmt4Z5E4ubLGLXLngN4swL",
  "key27": "5fWF4onTiu9HaaD9PmASBvoEPvY5XKGgiTzR8QwJUAochPWpUZLCC3qJww5d7tCtTvnPcWZGHsVsVLDBLo7XnnRo",
  "key28": "3zxahQFdY66RaDAaD3TwP85HenwyXghD4TDBng8WBnFt9bXcAC1RJnHLtJy2k43Vee1csoC5BaS51j9VL4x3fnqP",
  "key29": "3g3yyN3HQBfpETmRpa9SjM4vSigJnjbdnMo92wRXLh2UwmpgymodtDDwACdAkNBRzQgbvaVyio5WzVUtqNUXU1Ne",
  "key30": "4tWZZGgsg58WSWV8MdosHhTCfkEYQy8ypfnWYsiXssduZj8pSd8DU6JXJKTv6fsRhUm3WUMpaKXQ2qPF4o3UZNMm",
  "key31": "51z8GhnSU3PH1aarc4QYPsCkCVsUM3pwejSPRPjFdCWVMAGdjZiQ7DmKzpp8Sciz3AssAW1rbW5LmMWF8aXfu6Za",
  "key32": "4FD9kGneW6pA8g122Cr2Lo2BBm69276GLTHqdufvDweiGhf851ZP54FVeu5qoSFB6ueHUdZ2b8VkE1BpNoytKYC2",
  "key33": "4nN9t2AADF5RAvkuwmaMBcNdgrJqbieY5HDtDn4kHFg4rj5cdPH45B5SHnTvMMUm7GFmGpZcgwXLFCBV35ujmED",
  "key34": "33dvaHMVZ5ogDA5qWrgWsjxvnKqBArzwLrEEpCjaTZMU4JaH9EvJD2YgxmF3pFSx1jbpz67K8L2HyuFLDznLWo4f",
  "key35": "4T4gaxgs4gVeXs51TKqEc1uPWhpQBybJnJpM4hqr6aNeXav43W2YXaj3BT4tCK9HwNB9EwnaZvY2nKfwuz1J87fL",
  "key36": "8c9HYD38hGbjTovcNo1YaSqz4YV5AHd5SL4yHXUAr6HVyd8K6UpVD6WRiEyGEDzntdMd9ZBpy6ru4edmEC1DyKk",
  "key37": "KyGmzNHmuZaGFqigZEQcECKsWMjT71tR5U73R7rNrBm1ZdLexeH5fFD8eKhRVMUBYZ3tubjti1cVELXwqjKTZAZ",
  "key38": "vSpQgc3kU6J2ECT9LkVF51SGeacm7kMg8jySHDGXYyUgCiFgTYbJWC32rHqtjAdT2CXGLqg1MHQyqUvLBUmp8de",
  "key39": "5WXxAb3GCzgPHzrYhd5oRso73d7XjjQYCgbj6zztiiSXrY41H7XjrNVWYuYc2s4nJjqiap9xrPRkHQ5NaNPvND8H",
  "key40": "42wBy34DeMaSCRYY4bAPFCnLUy2udK23kPTiNxd6qKjBUbW8UiAw8tDw11uUY8yXaVtLX98bz3gY84AriS9Eka6w",
  "key41": "2A9xKZ1XNj1qRYDoGxi4XtZ33z5iU9f61kzhVzjTpEehRd5LejDV7c8j6RZygvr5U574Xjx9EW4LpDcddNJjQ2vK",
  "key42": "3VmxK4YXxkkNpKEuTEavNQuGxjHoJN4DLXpjfMkjPYyZa5PjxMxzCdSEjNMNGkwVmQmchdhLtqVvd2V5dTHgJKdx",
  "key43": "4UjawJVEiza9XLtSxVqQDvtqBy7ahMKFJj3i24td2XmLLg1LnDUeq8hxLvYqVgeKMqshQWp83XfVse7DGYS6EBVa",
  "key44": "5WP7ayavF1EEe9AnhWDXfTvLrZNgRtPpGPszKbKptXQXvajdiJPcCuV3uvudJyNLMY9BLQk3hTeqasg1JUuTH9eo",
  "key45": "5Jr2KqxgQtHRHSktprTUBWXNbKSDYEhBBvMbcWcoKz6jS5VLaHZqg8qbaP8nDiGND8BLVHD71cM9mwEuVB3quE7P",
  "key46": "2s4yqTEazaPii494TgM5H9dqhQFNP4TdpxWJ8zJunvK18Cvjuy3CjhoRsSdsEpGNpiKk1W4B9NAPWSRdcLHP9dzb",
  "key47": "49wxhWG88GfpZuURgp88CJeXy76433iZ8ihxGJxqRyahcAu9hnbbfr48FNkP5iJZWcCkryrskKp2R1cXCTYnbfzx"
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
