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
    "5USi2DghcDpZWrskUGkNUUaEXZ3hQoCV2vD4x8GefBt3fNAZTnt2nLiwJeU2eyQJ6BTo2x9qFhUtgBeWi2KBfQYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQYjKVenDZV8kiVW6hfhTqJrJmXPTZQ61miQ7MaLAC7iyosLhj2Svu7w4nxwE6kv9yyaPXym4Y8mxiAR2wY7dom",
  "key1": "5vmTWRH5NCw5p8nKSCQsosNUdjGLvXf9qAnkXYZNGo5B7wfifSFbVvvjNRMY8szi5L1V3koSmhQA15JvUvx8oSSg",
  "key2": "9LodG7EB39cnnNpVZbNdDc7Z7Rcxr5wThP33iwQgNzWKCSQHASPnjww3mAYdpoDwWvtGvcVhXVq95Up1majgX53",
  "key3": "3CZ5NthLc13ZwmdSNBUoVz1ePG3KjgTkecsmjcMPBA91XGQuDr2iCQMjbcVLvt5ExVBGm1mHvXTsLSh9HNEQnamx",
  "key4": "JzR7pHWxTyqo3kiG6t17jZsABwjFfirTmMo85x3XnXQcoVEStfzSngJHuRTCPaK3DoPt44UTaJoSjPJBTXUNVaw",
  "key5": "mVbCFaQtEM7dwaBp2sENtm9GwfzCH12F7hps3iYNPBPFPhoyaDL48XPDJsHoRKDgTV1qtGjuT9jvt5jEwZtLo3B",
  "key6": "XnXBPyVpHetiHVr99WSBw7euFc6s1jdbe86sphk6cZgpCQj4UXaiqtmwuPidkFdo6ZwspDmS997YM4gtUtjbFZs",
  "key7": "2y8c7zupA3xuBRjY5zb4dMjwPpGoAFGW3RTA6jLxGtkHPr5eN5zxA57ZZzetYjCetguh44xzdzBRXt3bcq53TbWz",
  "key8": "3o5jMwTQuMbhwrchqZhsudCEsQwr8erJx71yE31PQVQ3QcQmAHHaZbz27DJo2jzAHQCQWwWv2Qi8vABeXJsTSdZH",
  "key9": "5aSwBaSJ3ohf6dyhxheLZ5kApJbG2yDSWxsvRiTeCod8AfPzurAaFHbPXm8pxSEX2WPLEmHYdQa89EnK2fNcvzHU",
  "key10": "2KVKsPDaGQvwadHrViFqXokXd4VJ4ccGYzvEg4QfjeNjdTt7uhWvy2ZLU9eEr98LYi4gy3okfquAD2u5XykiwzDG",
  "key11": "37o1AYKQj6z9kV4NZw32TfWsWSX9nhJdfxMGYskXJRHkrf93QXBYxJhb7xrwEoUCxKUXkcg59d4aKkN5ZQYVC2tt",
  "key12": "5j2qqJFUnc7CxVeo4HQwtkVhM8MaxgwxiJoHSk3tFKtnLwGPRZNSr8CtBC8gQHmZzMwGDTyLq7fwGPFrPcT9fw9Z",
  "key13": "2ZimJpbrqh5b7hm1eqZjF1u5E3YvbpyDB7V5iMiQ2YoCBt7gChkyCJycgbENLU7rmncpKSvAkMiSJD9YyydsfNHC",
  "key14": "zoJk79YxdpEB92u2HYrYsbPGJyh9HQhowavZU22iS2cCfLZXvGt4Mj3erGHFn4sqNX1qCXnjBmUD4JgkdwRKw8C",
  "key15": "5WUYKj41VHxvWLU2GwoHwASyw7xfbUA7jSdpLr36QZX3VMX73UrL2GSgLnTqkdjMHHgL4dHWgnoWP4gYGy5Z3ivE",
  "key16": "2zxGXjj1BKqqwoFa3mSACcQXHkMwvasDg7WBi7F7Puh73Ht1snoAC7dNBCse2o4Rju1CTyxn8cebdbjbQgZWq7g",
  "key17": "5A7Qe9228WFUm26Gci6Hv4WZuxc5X9e6wtzBPp3oKsNFuXXRaLdxLDXfXcXsjZU49bNyV48q7uGz8yfrQXbcHMrL",
  "key18": "4YpKWYqHRmAkd74Du4hnsnTYtsRmgX3wgCwSnf5J3Z8KzQzfx2iharBSD1VDNJxCKFd1wBfjUji7GKGaLMyySWYr",
  "key19": "2tbXtYdDxtD7xTjGzK8exym954wgBNXNnHATjhWAZ7wzdCuN2mpNBbpWZcoJ4XiaHWLX2oU69Gggoueti1NUrcQk",
  "key20": "3b4e2SLBK5LCtV7RPJn1ALeyJ1htujoeyGz9HeaHd5wVS87PbaaGfeXpkpK42fTdtPB3AucMJAH52nXqPRK5GVxX",
  "key21": "xMkzdS7AcBaww6JWGyqeru2AXSuJDV3Qs9Q3Km3BopWgrZaoNd5U76oLnTps9xaN5U7mYbwS2mKKatiMGUSkMsF",
  "key22": "5tvNMkBFZjdgbeRt9ZRAwKbQ6G7UGhHrMHAiSCGyGHhFJD7xYrveLJWnFsqviCRiFdBUCMf8t8MJobLHqdrKCaU9",
  "key23": "5dw4gHjcdi45NJHckPyohEDzP5m1xaaE8tJ2mVwYv4y6g2PbmnYEJM9ArpT9gMwZjUKZFZZfPebnnKbCYkxnLuKE",
  "key24": "2GiK9sEt3pCirzuhdsXTeBh9J4sSGKtgkn7FXimAD7cXhvXiKSr3jMtoRpxjQ7Y91aPuUwamgaKxYFesRjTYNSR5",
  "key25": "vNmC6JfM2K9no5mcinjDXz6iHnYb48wJamwjcngDcpN5nGWHDvcAHi78kLM1U8MtKNeGzuk7N96kwcPGLvPuTUQ",
  "key26": "4dKaV8ij42JN4Q8pmNrCRJqF75Zi9kh8KEwGqPaQsMZg9aeeyy85svfN7PKqJZYYvsiWzcG7N6aGd4WNRpnFpX34",
  "key27": "5muW9TNjAfGgGEb3iJC8CbdBmajjvrifBnv7ofi6e8koESHbV9PMWRac7TBdu5LhXS7AY1t9qxtindUi3xbgY1Tv",
  "key28": "pczq147PFXdaDn61EmqE5iWQwoX91iwERtfu8nH3HnSX5JXfYBVDzXX9arKQSL9UYca1AqTwFjvkPuvpEdbvH4L",
  "key29": "ETSxnHccWYn4NZQQ7EqMPftjcLZ4GWWdYUPyRPL84giPwd3354nWW6MzuEDi4wPBNrGhUKofsbc8WJqbFtQuwv3",
  "key30": "3168d3phc2BSri8Q8CCiETGfdma3dZ3mePwrHmjCj3mbZk6iigFhyFnp75mS6Qo9XHfDtXq9Z28nwU1iaDdxmrba",
  "key31": "KDcF1eJWMiYYYduPrbtwgkpfHYwT5fX1BMXNnbRZ53DiEKA4hVPJpT3ZQHLvcK5isW74frrLaKtd7PCSBgSgo1v",
  "key32": "jTMXkeUAkurBgig3BA5hCjT26iSNbRHUBUjA49uwWxPuFh4vznGz9Zy4MX4BPmQn9Lohwg3EnD7hfFUEnGZMX1x",
  "key33": "5THv9dWKcyjqHcFgXDKXnvSLQAe6JK5HBF3ezNN3zzihyxXDK8YHnPDmjEYxF7ZWVg9ESXWqoaBqLVXMi45w8ipP",
  "key34": "3vn4Cxvxd3K5sPwim18n3LGxjvCgBvdD8jaq8W4ZhB9ZqViREhAExheQnULbPPpasarZwY1N3hJULpaAjD4nMBc7",
  "key35": "2WJJvn6JeKxetjPA2h3odvhFexiaPejr88iR2gPjNo49ci9WLCTy1E7TunJ4sns8C12NwFR8xHCFUrWPre2njiU2",
  "key36": "53p6TBG2fekKwL7iEVFJwAAYdvUpUUm4pXTSd1zcY5tiKVUQFyR24Jg2rr9V2B86A6GWuWQcXMYqa3nJy4depnRX",
  "key37": "2qcGs4R4bMFPpQaLCL4BWkeNW3UsrCvYfyTcc4A426Ln3iLmismm5ZFJ9zVXkZFBzmnQW9FCuFahVTmTu3C1g1qL",
  "key38": "3tgxDzJfDLGEFXHuY1PQoySiXDPipSkfycEsYKgVVrtH1CfTf13o43FvX7A7wjxEQ72nwJTFt8KWAKwN1kTKYJcQ",
  "key39": "VMWMXMCWyuLV5B9Fh9b6CCsxSrphKGchd79dH2HLdKrmKF3Aume84QKXGoxXownHALHWHck2uJV1ySu3wLjn2a5",
  "key40": "gxMdgUsoYT5B2nMvN4Q1jCiZAS5kJVQGuQPSWgdbeF4zXDU3ULczrTiPjNbfV6Pfp25zpcgje7hZqW3YRssCbBc",
  "key41": "DVhPNnaRVMfGXbcvoZJAyUbHfNXrywgHAQPW9PiDZMHMHe3t7amRrEV8vpvQ61VeB9csa2hDTWnVL9u8LHh6XQP",
  "key42": "4wufumutp24EDV4eB1iNCUHzJiQ5E1ZB4pPpmvqEQaY7HCN8XXujdBwpkejTevvWWj2LJPj6LCt96EYHySQYjJyi",
  "key43": "4M7agQWatgRGMqgj4UShqUfuBBbMCdyMoyp8xnpLgGTFjvKn1cMsndQLESQ4f8sBHTznQS1o9huYuL9qJpR3uUiC",
  "key44": "4WuJyjgaSoHgY1rieg7ejk1RFWUcdkkSk7Djg6H3JcNupVTbwVtNVeTvNVDSr3LHznYbuZfnRypwtTbyx4u1BVMQ",
  "key45": "2WuTGtkpuFfjFwXMWFGVp7G5UTqF71atyBaxLKuiESwxfzc6ffGhYp5asmWpDPLRVVQvgJKj2mpX9jt7cj3NJ9h1",
  "key46": "5qhQ1U4Ro5fh8YCw228guASNS8EGxTxXTaZTw99M26Cz2eMQcvbA1r7m8apztxLqjvPoWdYQRkDqa5B6Gwudv172"
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
