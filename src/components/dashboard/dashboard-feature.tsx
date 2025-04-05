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
    "62LeoDofAJJPKTQEpAxSKuBiyhQFD5oGZhmM6a4aVov99W15fHTAzsYMstnbvE5zeQdxATNR78CNYCBzNY7UoHAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kV6j8S9JDoAGiX6ag6HqVKRkrmDmmmePyj9LuBZJskM9CdM46WLgxk9Cc89bRteSuq9qCxvVQcAng4rdUZg3aHB",
  "key1": "2iZU3eL1oxRFUdqRVYVidV3tgj61N8GjKgBj5PTpG5zE1GrtxZkoFH1bUe9srryigQdq53RHZ5f2BY9Vfp9LRiHF",
  "key2": "5i1xDLirR359BijhVntJDAf1CG5pucHECk91bAJKz6Nx6v27zmfKsjjjPaJtKefPE2coi26x5m9yFwMtTEnTW5au",
  "key3": "UkvtrcQoa3zS9dyKygBTvNwEJA8QsJ3fnaJ5Rw96GNeSPJUQbHegjmtgidv42poCancu6LuuiJARatDFbvT83Do",
  "key4": "3iX8vtapRY8qX3xtoJD4PKCs73m55JAwcrBCFdDkc6Ctf3uw9nxTU4WXmgfqwNBq6bHMXKjziaUUDSTa96ynF1gn",
  "key5": "4GNLE36Zg13m99p88TxndWZ3yYQLFKeRoErNWX3RrSq3YxaigB4WVTiYJie7xYzndR1W9ECtsczyxmpGFRyD39Xq",
  "key6": "nptDg2fJHYfWcFAV7AVCUSiZuyabhP3oCFSPrCTbNrbxythtNmaEuEadYEp5vNS3Z6onbWwdvFNefTExaTsUj9h",
  "key7": "3vNTNeiqvq2odUzgsk3TGZyPpg5b5GVGKh46595yiu2vsFDfsyoyVYdtzu6P55qkTLT1GqFT8v7E1EUsEoCUX5in",
  "key8": "3J3ycgVJUif5765H5UNLy9G5S9HXTnveVbCuqTjqSybRdxwSyUzER368VJNQnZnZRgrhYmxXFapPbHuDQ5dActq7",
  "key9": "4h6nGSx4EjhJ8GL7p1DqFxic8YDtc3tJox6k2FHsysVwRAxeoVLKZzJKH25i9RVgibXetkqJY5YMnFp3AAkGVbi7",
  "key10": "ywBC3AjZHzdhhN5zfwZQ8LnxjoNGzTSPys2ZS1BTGRSbuMKHTERMtGrQS8TSbEhmywdzpmg7uL9ztA3YaCxbDda",
  "key11": "2W4uF82Xw655DFE5gTuyzxKQbZ2CY2DFjS8RvtvqkHcncoP4QUhbTtSoE4VJrHGLvswk4fMxYVW53PoV2ycR9vXR",
  "key12": "4c6czZJ8S57xdYYBPyyou59y4Civ48RJnMN182mZykbhzk95DwMXkNzGm7isxgnvHeeyJpJbfnPio7XG1T1ZHkLY",
  "key13": "5KYLmnDwHt9yRzp3aThUYnGCCB2oioK7enmsQSW228Fun3yAPSHTHu4prWyF1PJrJ6cWWzxb2S4FKkkDmMcfmujn",
  "key14": "3RxMfXaALz2QwU6gpNFzKDapsFVVeYtJivSq94ygUdgaX9SFgHYM9ei4qYdvv7fz4kFePETe2zrVBkb3Mf6NDtj7",
  "key15": "4QpeQrXT6tbC4KqebuVo9Xy2Vk7W4xZU8rzLv5hhG17Yy4dqic5JHCpaw2ef2hdRTbBfznSpCcp5nPaefA4F6fbg",
  "key16": "3JXKG9rnTj1jXzEEksdT6Uf8iWaTXoPwPdV2qf4g79gJ3z973qDShXPZnqbo9ByUnnqQXCdDKUrLUxtzRhJogn11",
  "key17": "5t9GEgfY8DtKRomZfECixt6tyWTwMXizt3UNsaNz8mUkQP3psd9LNEbK7G3j8ALagVihjT5dv4a7bC12Kd96S6vJ",
  "key18": "2Vs53WsHER8cUW7MKVqgaWeUCByuWSbFg7LZvYHF9E8wu1ghEvB5w8HmqQR74BTV2WVrRBgAbWAUitwNpSWZPYcR",
  "key19": "4HRPfRYUrtE8SDdPHik4e5zzdFuCF6TTKpXBo3pZ5UqGUwvVNtyR7krbzQG7mAeqxpDHqpLxdgn9hgorF2K11TJd",
  "key20": "gGFk89VLJdjxNyfeyCBmZZrUy8aF7KHkznGJXaQjm14vxcbagegtLdGDqqC4kyiTCbCPfkLfXaoZ7inyBwYvzf6",
  "key21": "4tDPxFHbmT3smxm5Yfon6iMdaLNg4U54gQGZRLbSCLo1xrFT9VHsVnoS2pKpoxRgXsnU4kD8R51SgcBcSFgJeyTw",
  "key22": "2Sr41yxoA8S2uesKirEFMkW5qgmzMk1nJBW1QTKgH7zBrYZrzofZZbks5SLCYaRy2ne1kUcNAn7RCEKSziTDafmr",
  "key23": "5T4hX5XYKDym3fsqB9wcShTcXie4mCTDMrZuHE9ZdpPTzNfVBZm8d43jodLgcF5ZhCmccfwp62JnFrmbsgxgk4F2",
  "key24": "36p4J3WEG3v1tzCHgtHPycp6gKNhBw2CXFMRCVU1s9rAyH87tXW8tbVuUXo4xXnBNTyn2Rp1PMdrkjj9qDG7JA9Y",
  "key25": "3mraDdwgFkmDiTjy95ymJRFdwFefmVkbQ44UkHvPW2mefVCFa6LMFK2vSFrdGXM43mYwx9DFAg575ynHFm5Ue1j9",
  "key26": "W5ZqPdDT5AuAbScnzDiV36sV8grjJp6Tbp5YiwhU9rr6moXhVdcpanDetWekoCs5UbDGCjRWdPg7STJP4bEEcbQ",
  "key27": "4zLZ3wbbwA4Wm5nBaQWTscP7oACLAxamh9c9fgTDW5LoUBXG1MSy4uEEgswEFXN8uXTdRKsZrNdnGHL3qkPn6i4K",
  "key28": "4GKHysTnByWS7WrfzWiLpbUMunRQ7GzRKNkjVSbZbU5YE9hqdSBAtn2iZMb55kFY5bXV6uYScDkrzF49Hu2P5TYj",
  "key29": "361YoEaFncizuq3t5k1AaYqwiAkxg3NXM3TPkCRSUsv3WZEQVNYctehQACeTFypVYQsCAyT4gp2ApqKKhKje6KA3"
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
