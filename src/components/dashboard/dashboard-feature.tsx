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
    "6eCGAeCDe7L1yVqj8rMSSggF2TfsDsr4bkdCkkbEEeXsp7rKZkx4dW1DJh3Lx3puJzn3M8qrzKc6N2x2fCsrZKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGmBUvWFtDm8yt3M5LdewSMRDmqCdmJbHePdp4qVAMBmrk9MbBAHLTeEh4pHDJHPc8y55HmTiW76zCYu9LEGBFb",
  "key1": "58PwicZCeTYgoZu2uBBHjGjoG5tPc8Dg58uGQvryioTk7BmDUrujtxxfp2Em3sAJaCcYE8rLdtphJZF4gyXnxBTr",
  "key2": "22N12G2JrfLoQQfAEu7M7MQ296DzaYoJLKeEUX41FxtTHVckH6RLqZcZEsaaWC5TSdiudCoFFoJKMkoid4jJGM7K",
  "key3": "2m7SAxbdBDVNVY4KPe7zSTmadvCk8xG8m55ssVqxs9BPmQD813dsqcjoV7iPVGEzLchw8fK7pqb6MsqQJDFMsCri",
  "key4": "4m5vid32TwNHjpR42bZVg5tBeFMosU991Lm6B1xkEBW3DhL7Zr7HTuJpeUn4RcsjkE4MJyU83nVVWqKcqvS7csJT",
  "key5": "f2qGzWeh3RntiUP5nApkSrSGsL4YRmUMKXBcPsZmjGhuXMrEF1N1Tgkpm784sdSE5DjCSnDCMpJWyzyA2d5tURY",
  "key6": "2MsSeiqSDd8oAVqyj3b9obopaeHSFqyreYxsh2mgtBe2be24ctpdqWBShNMogvkgneGAvd4tKHH19HcSu4xwUE7B",
  "key7": "1YZUyX1xX7bwxNVdkkmXCqNkkbFQWj8Qj27DMqrSQSvRgvE1f2T8YdGV736sj1na2d3PMqN7BkiciN2fFYm9RV",
  "key8": "3DgCYX2Xdynp73KXpr8MnyMg8DXWZxDpjqxMSUx6eTscP9pibiRLg82iXVtNAiZj4kbXCXTTXCb4QtDs4GgvTBxd",
  "key9": "3W6U8HD3VZiLqzc4oSKYoVwnTXSfvoBP6aHHvT99oh1XJFLseGosHwmCXcYnazJe5gc1cRjUTiAvJdp6Dq6Q9bFk",
  "key10": "2r43tirjHx36tk1KSBdbmbHWqq2tX2NpcVHfJhzM3QD5Nvqfz2ehCppqWFGMwSZzEKU21ZovxP7i6yundSFvPsrJ",
  "key11": "4VmHor549YMp25ByHqL1RaJuqghSXLM3ZFkgWKwiSz5ovXcxkLJdHqhzz1UuhptrPA79nSyMmF7tSjkjE3VGfbu9",
  "key12": "4bySxSSexYjXfdNZ5DaH2CwzJVKBa3T17uJqk4y7mNVyATkuent6GkcqEzt7L1uSteFEu9WeDUq9zpx9Vz2fSrv7",
  "key13": "48LtVvQoDFXftqP3nrJX66Zy8Shb2kR23ZvFo65gMMhSMbiUHrD2BHivPXTq4hNo4RggnQoWhYCThhP9kt3u64b8",
  "key14": "4TTnz5oiEcffFuiLEzfTb6AAUjvf5uaZEvE3mLWaBUFu9ep9xBWTfuJF65Y52Q4FVFXBfhthAR5GAStgi2HYzr1T",
  "key15": "2ABMhT32hfJfpRrH1TPum9EKFmBsqeoyiVKJ5pa82anK9uuYRCZ6GD8Q9DsCtuRohivBdXkiZdSECZXumssZgNTj",
  "key16": "2j4uQZrNELPDZ9rAZKbyFFDx3X2gaGusphw8oaF44BEZ9QCs9qJ1dxicg3FwoGXJFocxh4FD4qvHfQ3qhpy7CcgB",
  "key17": "4wku62A5UaKVTVZugbxHTrwVTsKPkm5bcvaph1KohqrcoXto5CtFtAkz2xY9VoFaHvyyHJbcjvWKMXmQ45QivtgD",
  "key18": "4XDPLn6MxXGu1EyADC9NA7exhPS94JRfD2RND7XSZeraHrX6GYM3Qa8qrLvWqERSsfThV8zqrFtge7Uga54Wunjv",
  "key19": "2f7u65E23CdMwM6mK5UbgCbkXuskMTYqedb2QCZyPHnfeTZ6gFW42TDDtz8d3viDSjz6ue97A1fTZL32oFrF1jPk",
  "key20": "4dre4DeZ2FuceXfRA4qbNStKQG2qgn8s7gVqZ3nNCJmNVpRnKoRsvCqEgogDg7c1r6DcHH48o6AMJkJVn6TNg56P",
  "key21": "4u7ai7a6WmP9MkLg2SSSnGkBjK5t5pSW98XYBASGY8x5G4o4iWZHTpZSYNMDXjRBpGE4J5BbGUuto87dxtzoJYn9",
  "key22": "3di88FC8DzNXieADEba5g9DYTxL3ZBTUGWNUMXg5iCjLXJrbKdUKG7HFMMYKviZb2RzygP89YhGmB5S28HS4rzvC",
  "key23": "4fCV8ZV7ZSoQE9WQbCUr4d45nKnusQ9w85pjuzQP7mGXXJngniBF5MgjLJXTnMsrkd4Z5bnrno5C2XJo5n1F7AbW",
  "key24": "4jLNyc1m3AA3M1ZWWkxZdFVdPXe9g8fPdmRQxtFwc34fgpRRZeBbVP2ezcwV8iHhAsk3dSnb6qTev2FF1tWQ98H4",
  "key25": "5yaAVisGV6fQWTqPCFojN2AytYZoy89UFmX4HV1anbUd7AFjpnNPJj2X3Fo7rmfCG5tWBtf9i7ssVSvhZU7UZLRb",
  "key26": "3xqdKwNLiDNfGvupbSuAm68KE84bshDoNPgut2Bh3JHdwwYGace9fQSdCJngGBth7dufvQ9SM9EmqQJcZXNxxVP",
  "key27": "67f7hCT8a7JPBhe1d6SwfEXqZpSmtLZxBF5P2NmsEfnZAykUMJ5HnCyjuFs4BewMjJe8qHHdvg6EJofvCa45GxNU",
  "key28": "4PQcgsxo58bBz6mKZEtZSphjkNLUHV8nVSVKEhs2yNvice5PSAHvixz2zJNUcQSW8JqCgKrxHBnnneMUsHkeiySi",
  "key29": "51GSSyu4PuUtBPgnciGRwyxpzFcXEqWLVMM718VQFX6DCMeXddJnWkeybX8x4vqPKUN61fRWXKhYmCj2x5C3VFvH",
  "key30": "5UfivH7qUUC4c4RLyjoBzRh5PaPo1K7zDqm7ej2XyP7e3ob22fDy7cnUWBhAp2d9UMQwApaaktEU64yCzyoHwRcj",
  "key31": "dMVmS5ND96SkXd9m6nLV2tsQUConCxT4g8XAHJKPiiNDcHXv51VmeJH1K7GubNwodg6RL4ar2CwsNybJCBwot2S",
  "key32": "5exTFm1UUtNbPYYpSiHgYe81MH9M9xUGRX8vH84UVp7XJMdEZtoCKaRFei8nxKNupKhzgctjLEfAxokjDwTUmhBA",
  "key33": "4KGZ74XmhJLo8fA67sA5LJwZYxZPuqYdQTuvnWErwyNnQtuudf7PxzYwvFa3LetAxUXWZzYnJab9niHm96HBWJrQ",
  "key34": "4DrT7dSky1AgJVPXCiFi9A37tdTPhvRdDedFNS6gkgmvvLrMXekxu28niG9GsV2tKx8HtWZv2e4XGDAv6pMRDH6T",
  "key35": "4vz67zTXCEB9qtXmRAMhMPkpX5REuTXcqDhYQHMk2Z3q11fRUXhBRBmJ5SDuAuES9b1w2YSCHBVLqrvA2TgfFCaG",
  "key36": "5rRJnAcpo45d4AbKURVR7gWpVLcX8b7cagcQGk71L8M2FW5ryK9rNf16XTz6j74jfECGD1S1pVwpig3DvBjyW5M6",
  "key37": "3ZhKw8orGe93nux2M5cMXsTi8PvMUfUrYkF5azFMB26wtMwna7tTfhh5vgg5GKo71mHdZQbf6S153RCCLDQbmrT5"
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
