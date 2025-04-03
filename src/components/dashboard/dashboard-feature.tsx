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
    "4xfVXgEv96fGYjPuatXSGWiHwCKKEhCSMcv7t4f3s6tzk19yFiRdbduzuEbGagovP9vn6cV9djwKhXv9sSe4rpo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mn4Mq6j6PwELyQDh47KqJFyCmNkmZqK2UkeHEh7W4Sahztz4TNRctQN688vyGvim2kg5oWRiC7ZaepqvhQnv8fw",
  "key1": "4be6XBbbN5hwpf2McgZqiubi2wTE77wsGGLTfzy8PK4GDU1DPwuQxUrpMJMJpsy2GqRsrCwvmyo8MU5r3up7ju4D",
  "key2": "H7Jqnw2yA98HQfcsmwaauDCCjzxjAFeHV9GJLq1Y4y6x5CCKCRxEBLsdEXEoZECasyHuG7LTfaE4Yqk7EhPPeyd",
  "key3": "4KoBSN7B4PXYQvm5xWFzbi9Lj786owYbhdExRt6foPfjry4Z51Yq2uHRXrt2fmkfmHFuzsEXJU7DLJPSJ2NDY2MZ",
  "key4": "3f5tVjBpEoZEtKLsatZjQZ3TecjMkQPdS7WUR9rLhNHxmYEKw8v4nWnCLp9EDBoumBkGM6uQxUF9z8jG7SeVg2yQ",
  "key5": "46Jj4hmVPkAR1wSqPzwyCYxN2CgF8cRFnodPq2DN3DQqMaCUamFBLmW6S9vNfJNEzouiau4swVfLDCs7sXZTHv6R",
  "key6": "31kEjua3gdA8SYcfugyUPimy23bJMiEt2HxKBLgFaeCyk78GBU4sSvSAdQGCZevMN1rev2TE17ohmTzByoz1R87W",
  "key7": "4ZtayEFHT5KNwvYLJ5bXDBuD3Y9bUM3GDQMtc1xVHzrq39KGwR7V5XMJeTXgA6722Ggg1s9o6vDJqEZAUKHjbawj",
  "key8": "5nNRdndPJxrUHg9qVq1EVQeLYn4v5L5YwgbkTXDeNNXg63kYmpWQiY3L6AF55CzreiKPHoU9YnP5TRsuq3Yt9vGQ",
  "key9": "3rgzCH8diVYkwSzguK2pFhkgZ58gjbRqvbZwphEHNVAmnSLgKELSLEhWzq4LfmHpCDfxi8bkUFUCDPe2FVzJzjfg",
  "key10": "2AaGaamcHdtP7PKwNDTDRiDrDo8t9Vw72MCr2oU48CiLvsxBhCB3F3UsoLiRSt12pic25YhvYovkiQL1bCQZZYvL",
  "key11": "sKKwJ4dVSGkm9CSoN8U9wV8y9DKnkXKhS9X76z3Z8yuE4n3go8YGYefyELTrMrSGxFCgabqeqwAi1LsWQfn3Fwb",
  "key12": "BErnjEDzjso97RuUfy9Zu97uJmuHDL9iDXo5EG6FJBGLneMSw1J9faAtB2TQoaVVpqE5iuBvy1tJm7J7oe6Ej4o",
  "key13": "4TMHWiwUa8uvybNsoQs4yeQMFWExVkDuUSjsHqzFa3Y7sxqNw3sCAy63oQQ6Q14BgdtZc3eTcYc4EbvBEP8r3MhB",
  "key14": "5kxDM8THimB8pzz5LdDHWPDDpWTcpGRghg7rFwk6BwTCikP2kCH2GZ9pit6ZHaFAomoAt5QkLCApXm9MTKdAAkB7",
  "key15": "3W9ZXgz9ozSMxxF9pgGjmZiomWRHJdMSQYmBKRG13TkF8Vcg7oQ7jG1gRQ1LQf2YSZoMDuvmvwqAYnAxFu1kXTBb",
  "key16": "2zFQVUP3wYY4Y2YX12gFg5fbPLen1Ch5metGPqpj9od8r54j1xbN3S6YpKgsAQ7pQEugzv1PsmhQcdGNRU99Rke2",
  "key17": "2or9ukQGRSyfi6WuidhS8HwhfKW5BzCmPZHSDuYTZ16gZacn2fAFbo2wZW6JUS26nepJQBEm35LrRSmRiCgxqYDP",
  "key18": "4WyAA1Gbdb7Y5ZbNHj7BUoekFcKXehaWLsuyaHN6sGEr7geEXQusWYXWJDipLvgVauRbberJjZCxeQHpChXuqjD3",
  "key19": "3rYHBa5UsJjgLYYiFeTcPJmGvSTDckCy1szqeahyvVBAoHAUw7MdhEqRwML9tLZVoRDUMeogGzLDi77YQyvuwbjJ",
  "key20": "4mzMvwKNzb4NyEM9hGKDxoMiQ3yiupmgywYDxuPfeN8EATgyEZYfFqQxmorPdu57XtJV4sTEzM8rmYoSckpnRgM2",
  "key21": "5cfb4ihM6DvtuP8GjiMszjqY7MCBj9KALoYbZozSjtErGyBz8wvSkA1HWhSijGrhyz21XRZnkyv1wgGaoz5oYVYy",
  "key22": "3ky4Z7ZArFiCF7dbXwaSVRFqAQxASARWJ5muCBMibuSNrJnTFnKUvUf6UXG5yNJe7VH6LfcyrBYDhb6saxewkpNL",
  "key23": "3TpBUCkNWPtj9q6yLeiesu8PexjaDFkqVVinymqQpLCUdX7DAmYm8raYZ13vHGzsxc8iYzKSJtLzFurG53Ro8VXP",
  "key24": "5kgqX1cnc2PPWcVEe7AhSkyDGp96mxN3azHMMrXBgvekRADg6XqSKmzPxfL5PVruxBGv3uYSGCB3upW4o9hDGr27",
  "key25": "4qC27rxeU5Wm3jUdom8jYhv8FkzDe1cu62HyeseoKyQ1hXaEGL9CHT9Sm8AHGfECXg9rFJtmMUuArGYZM8GXE2Uc",
  "key26": "5wFcPuvMCcaMEXzuN4Zo47h7UP5BMEgy1G7xHdZDttUdUbuNKQhtnCTz1K8vy6pkWyN7dY2mGviMxeNcrconncJH",
  "key27": "4ysMM3xVerzaA86RkSCVEPPxx1UpJXfVCBtP8mchhEaC6LfTDUbzJcVLnGPztbJNdgbhHUcwipw2bF9XFmWLsB1Y",
  "key28": "4AQ5fEnNowBVVy8TFj8KkvS4rsRDCfbrCfP8n1CfuMEGkYnaHzX5z76nuSB2rUMUVRNDaq2dJQgzdeEoWxMwPTBE",
  "key29": "2QoNBbuyFmUiVqEaX7FgjgDycLstihG9zSjET6C8XPXSxzdrAQjjSwH7t5D8DPx3asFj3K7DV45x24e4XMLEkPP9",
  "key30": "wf92C863ScdKvqii85BPxHbk3U5VSmSNpWz872NoQRidJijAZQagQRrm74zHqjrmYodoto7e5marmeL7nCFipu6",
  "key31": "26dBj58vwCGTkFJtiKDydPv2t8MXpTxvxiFAxPBq7u1Mve4soYaijitY12w8L4xouCShXZ4wPodc4WzVGhWbFSdc",
  "key32": "2EzZHgGwxkDYFbkaQWRnpNbGWCzn4pBwpcr875UeryVHepMPp685GNzieqZXEErWSgJN1XsEXcxkBiiXhb5y6upo",
  "key33": "5fciyc4fjZAv8waJKdrGMx5bPddvF15yTQJSxPr82UPDxgXHKPFJUqAthzicu5f3CQajVwMtHRjcBvMmXRJPqLfZ",
  "key34": "4vkyB7636Hpks4rtWyJ9csmzE5WyccmGt8esyEki3UVbxpNCVeryGtPnsDKyZWQDmC9x6bdyou2D1bZkkLXmpNsr",
  "key35": "3yVHc5qsnqrswUZX6K3yTh2FzsxL2Zu3CnEcBqkvs61FKgUnfBP4bmMSpeYAQSGU4CDmLVXdqv3J5cJfKJsHc8ai"
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
