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
    "2ddBoSaqfmSZVDojoYgY6qLm4BzFVY1Hb6TqUPdx8bWQrpJSmLSBqoGqwZUtpJTPtgN7ybYogPKw2vrPiBM8TosP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cyiu8vaXe4qUaxTyYaMhnd5JTogsZBw9Y9ThpKgsQFmqbZhLpdohuza6jhtSSkCzgyH5eRA5w6BHKV7aNfQzYc2",
  "key1": "AjezRvhwN4QSW8bWqkGVYao1xc6qfH7E2MaX44DwK3uxFLPZLmpv2rza5AoAA8skUMTJs3YQrhmPT55QtFcJD5C",
  "key2": "5a9ASmvnPBDZ18UrFXWaau3bRQC2jAoUHFqJFC56FiYmk8BzoDYcwbWq8d1xF8kGSRb2HDK3xJj6u7j79PcpN9Nf",
  "key3": "5huegrwb6zMNndXcm9a7HcxWaWaV1haREwkMzzXApmFnubn41w1mp4TVT7LAsQq6npfER3sKVvaWxxMrLD7b6Eo8",
  "key4": "3iX4UVzQRSCUxzVwT6M3KGD3U5i6Wsde7ZPmMFeEfKjYuwyqcbx8zan9ZhFzVsWdc1nXsYVRnTbVx7Dm1bH7ZShQ",
  "key5": "3DqQRhGNvpGYtXdZUX6p9NwBpQhnx4bQcDMt2Bg9RQtYuixx8EpmHCVkjt8m975UyDR7e4rHbJpMmRRTHBY3YPnu",
  "key6": "5Yjq1GjaNQMrUEXUoX2XxLMsFqP6QQaC1btiQ2y7eXTBtR3hZ356TUL6V4dZxcygmgvv3PYwux3ViPqKj9XL1KrA",
  "key7": "3xA1cwUnD9JPyquDT72G3RzeYDxRuyRxuMUFbmHL4H3Yos6fyTET1xo7VFRdqH8kEx87VrsmxPr3TuXQuB98Gi2m",
  "key8": "2D7aeLMpMdDxb3bPGMQMAWhwQSoj7HktqxJyTNNN3XSU7DdRB6U6bknTKKmmkEBubLvtJTToR8zb3nAwFq1w9GRS",
  "key9": "yejywZMf2u7vUG43tfjJ8va16AicbWyCJfnWRUgJ4wsm8m82NsNHJ1ZSDoybQyuQYLAwSEGUgMiafEZ1fuopjBi",
  "key10": "5MXWxCGNgAuaGac5ZTbaDsm6BhQm4Mq5neWyiW2kYEXB9SFXmj2EduZcR4sVLntZjiLJjxp8mBL93FQXjW2ng4Yg",
  "key11": "4f4nRLnVSdL16uZiYNqmLZbv9jHMWRXZik1r5WJsW1tFTnqMuYrFLkCePZ35EwEehGu61hUQoX5Xph5kP1ikLY4H",
  "key12": "3SfCRC5Usrko7EYHi1NdKfPuywET6kD3FBjLXCRhLronqDt4VRZzE8ujMJJF2NK8Q3E2nH36LiunCLZ2VRzE9zq5",
  "key13": "oLkfKeZPko2ydKhSAHGgCM5W3ktpzzwqoDMcewJughdQUoZGcmLvTT9inTz5WmT4ZRnjZ25mLEoXn9WkXzYUYER",
  "key14": "3u28efUKprbnidQKs9nhZV3N83htrZxuNkD19mnVCpm8gQnXwSCbGWRZW5BCKGFsUbrDk9TQxaixqGjFuT1M95ZD",
  "key15": "5JarDC2dpRgxquS1oE4SZsg5BydcTKajXZKLexu4y9gcbdWSYTenRSd377aepohmX7VChe8teJYuQ5eQ7XHinLU3",
  "key16": "oTPsLMumizLfDPPotY9Jh8dT2MYqctmTBuC3tTponfistvHS5CyFDms2ZKBqmDzTXSL6cKsbD2wY1RHbPhtpnYn",
  "key17": "2652MMoWKujAZgdxYNJyFeQnubCMgEUBB8pV8oyw2Pyxzhq6CRHvLVSdza11bQzyd2oFYboHizsU8qFK6A5r8GFc",
  "key18": "NAYayFojxHU8kexhRhGkrosMo2Fi3s6mn6diL9LTsYdjFU57xVSNNzFb61ha9J1c1vmpLvqLtGniCvtUq2UWq4X",
  "key19": "4qfHWt3WU7Hw9LBB3RDn21R4gfDh4ZFy4Rdxame3Uto6LwCTTMqApYXRNFum7xERveRKWS4PjWsVWLHT5MiRR9hS",
  "key20": "4xqphC7jaThXqL7jEPUVNUqakFqzxWNT8vPGo5ScLhkYDrAJuCQ9L3tahAdQVZZTtGRY8qt3GZTEjgkkRAoUzisk",
  "key21": "4gRyK4kUNdPhXxPhLq97kMthTKheft4rgAqUuUbKLvMERppb1oxjDD9QLnin2QRnmhrQpvcpkd3uLHhjF1hMG7Vv",
  "key22": "ZyoaHk9eNWT8jHNfLwnK4QN2pboiMZePyrP2iNYUc4P5wihFbwrAfePErXDG4hJi5CdREwVqNRJWaoEZH3Fe9fe",
  "key23": "4s41JMyoqSdGzRRV7MZKZxfqGMxg9YEjb3Dr8GfCafsqLqXGtNvvbhe9fRf4LDzm4Rja7agapnrFEVoNB5u4CFBB",
  "key24": "4pRvh8BMFsy6SFMpCdLGtcVDWwy4mAwwhnTtC2sXmjituGjVFnC3c946FAyw97yeUHwjPA9XuoX2kuxoxPxnd46J",
  "key25": "5XfJundPnkPaCzSN4ABB7UzaR78BCHUQ3wLUCwFw3T4suDqv47aij4HhApmxdRZT9PKjCHQDLHPFYjhfQJQouaJH",
  "key26": "5vTksoznTFeu87oYFZhxw6j4rSEyJQWTQe2d4ZiUsfeKgtkk2RuKnWtGxbtfAQX2UbqRUcyHwtLJAqd5DgQCt3iH",
  "key27": "4NzQjepUD2s1mvLnEPFdb5Aq1MvePLzZ8ZPq196rE8qnti2hRxs4JipY1kqgLeDbg9ZBVCugyBg6q2waRXi8TnYq",
  "key28": "2shMdAtmRh5QTdpowvRiNyZSCr9uhv245a9VgARRaA86WxMQwDnHq7KtwmHMZ2gnYGuGynDTYo96Yy57xnFeqBid",
  "key29": "5EFcmyzJPCZH4z6ujKvhBTwm4V5HNrqJnu4Pjnpn943ZXYKZXgg9DoMqscABxkGZRm5yFmRwdAsASx3UgsKSHn2M",
  "key30": "5Ycs9xWhzhjT95cY1RwEC7Gm3yDEXXs6aSTgDFMp9naM1MeuvqngdnmiDhrUqmJh5NjjhawB5mAaxZFYAVqom5W7",
  "key31": "2pwDM53oBD2FPvYxC8VNjVrR7A7rXGSuFyvD5eZN9Hyc2NqEGirjDNyqQyEaXdkNXz555SbdT7N1JCnnLuihtotz",
  "key32": "47LK53veRjPi45hvUZq1Y4XU4Qo4Tyn4EjqYJNDR4f8iA14c9pND3XXVwFdsSErXCgXGWSQnAdc8JnFd4coqBaLa",
  "key33": "4nHFnEptLKBe2x3w7HamPb5GiiEdqLXts5hhCKx39RTpPd24yDhXUVWJUQ1tCwTdMvicu9SERqudXurvnrEyBtLv",
  "key34": "5aPbxFRkKPcPHMuCBDugiKyn8b7nbA3FtLn4mug4bqA5PaNLtPeRJfy12TptxAYQSJ1KPB2iyBWUBpQBpZvkTfzH",
  "key35": "2qdEw5M92isK3W5rH74rigzv3fGYAiXfDpoP1ewobg58KkHCnkrdvgppHX1EUQCxJ6N26TKL61pGj2fifzAKMVgS",
  "key36": "3hFTgDE3LKhcgcjFNVFjGJqstMwULUGSQFmjCVe2tzJHhgw4PDe8MeNYMHsKDaBqn9PHaZZwgYVSDFEfgJ7cR5Q2",
  "key37": "3e2VFYFNekq9r7uAMhtwT1UWXG8a5bfttsXhn9bKaDeZfCTEbhmSiopZNvCmMmPZ4SKXei78Cs8QCzPLZZcHNAXg",
  "key38": "5frw1EAP7Gn49Vj3FsGCJjRHMirn26xL6Hgjtj9y9Xhs56mjuf7ewNW8RqaUdzW6HRhcGsiHRE3cnHiumnYKzSGM",
  "key39": "42cV6ZYTp6D7AdcWnCED9tx8dAHmzi3ngVaAnCEiFbJiQ1oGF9WHLW4knjgxmfsWPumXH2EeV6QD3aGFxcaFioUr",
  "key40": "dmLwSd5qaKZxViNXKbKudoFCNdrpwu4XrVW84eUVFjqH72tUkqbRUuxXPDgBCMXz6qCqGTnHRvapP166CvVFLj3"
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
