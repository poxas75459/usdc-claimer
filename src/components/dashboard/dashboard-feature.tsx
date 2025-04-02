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
    "2yDEFpbj6xWb23ws3G5ZEuYcP7njXTiJsgcT8mQk357jMnedMbJBqdgxaRD4fFaZ5t6pA3qN2QjhQ5MospXgoT7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzKzKgMCpERfVsTxN7yKtHLoSrAtc5WeKjuvAdweGZm9ufYWdxLn46taCPgtWivzPRG3PwcoghZfBMdNNWDtbzs",
  "key1": "2oGjNwwnV6dymy9X6FXWS2dQuXKyQuVBq5zHuzDjmXTYPV1SEpbyQmqXqDJim51Q6YNwJ7rtXbDkWPCfRieKUp7s",
  "key2": "5bbYKWXhWFMYbWJm9JLr3iHHqxrpbCrzQVpPjYBjyzWmC1RRFfeUppnwMen6C9yMRTKsXxcLUqeTknAwRRVVekaU",
  "key3": "2HyQbNZyr7BzfY9tGBtgan5nizyaY6Z6QZCeKqHTs5kkKtjVZ3cWi8bjBQgB3wJn4EYRSz4woprqNQwNsx13bLy1",
  "key4": "5ztCyXYpgKqpYghmmZzS49eg3d1W9kkX7K4t9YCd9u87J3SyTesJLazPGFE8qJ4M5aCawUeeJ3XRtAs8MWMhE16F",
  "key5": "2HTehk3s1YWXzF9UmyhqvkhGLJeZoCb4PDYKNzP5PpY7vCKQac4RaMk39xFYZGaPEG2DLFbbDMTkAyHoFgjJf9KS",
  "key6": "5wTKqP7rhHz5abRD7jemxL3Rc8xF12FGFbd59Fg2km3kwSJyaZqVuT3pnJ5CMzZna4Zxh5JYSkwkm6brKpf63w7v",
  "key7": "5gXbnK1h9fkgKXr3pD3oDTLrvixa5EuUVRHovxDKU5pdBA9pUPwdzq2Wxaif9xX2vpXnB8qGfkQEhrask9kgF26W",
  "key8": "3XXkCgTQukn1GQANTXscE3SXFqVJ7cozqqq2QAeaxBxte9FRPXXPVJQpqo9ZdDYYFUv8wFoqHJUmNhaJbGcg4kWZ",
  "key9": "5BFr57wfc5essaSKTtnX44RFWUWZ127XJg3hT8xHRPFDXocMddSwnmCkrjL23XrtJnC3Aa4Vxw1FC7mC973V4nQS",
  "key10": "2b9v5yNGEdnhKcGzN45tM7RrQXWRqrvRP75dJiuppvhPtcChDMaZwBSvAAHhnqT5BxDBhSG8Lceuziz8ff3hYKAv",
  "key11": "jgEo9Pdu89Gh6k6VMnztVdMuFTAseZGT8rZjkfffmy2o4yGyocdYDV8fTxnBqM5skRziKS68frDN1fHkBPo7pr2",
  "key12": "2FejK33Xmx2pHg1eD1jH5vJDFQ3vEBzph8RtHehREG7eVZV5AX2S8cZYTj1RjFnXFpkU8kB4FG4UWuP66aAC55Au",
  "key13": "2btu1nQMgSo55uJqEjyii2Kvd3KGPk98osb4sBJxRYk6ZEnQPPEDHTXnepiaXgqg1yJKBy8kNRbNPe9iTXoPZjeo",
  "key14": "2n1K8PqeUW3V267sEtA4rpef2XzT49koTyjD2M5NcrUGQ7FmscnTHyECdqQQTukctUQDGUGvCMTeqcSpXPHY5A3D",
  "key15": "4tnZHutxV7KeTT3d4G8WJx3ohsxiGnzgfDKDquRj71oBCnHkMVQ1AHwSu3F6ypECPdoyK6QNi4mcTimpty2UgxFP",
  "key16": "5KkGFevc4iTht3maNBNEpT2GZcrTazQUAiTdSCpAfLbZ4RrPdeW5uAnp4ZDPHkyukiBhsWuSKYjfnStuHssfnfie",
  "key17": "3fiwHwywKu1iJpNoBtftpsy88wHd1TJUqDB9a36yzEoNHbwEW8KcwVPM5hR8i3koxxq4F13wPuXraeJVdUeHiWG7",
  "key18": "5M4wtGSBhbMVCiqJW1kftWvFB16Z8q4WDEmbEYwc72v5tjpk95PwmKtesbVtThh6EkvwEqMvjasaxHMuZqQdRcLu",
  "key19": "5qxFjv7GbcfdfT3zPN4AtptEcczwoz1mYa5oLUwmBbqYAUg2jKFgxHTQxLvvSR33kwGT8Yd3Mq39hHKkwvMdLjJk",
  "key20": "3wdAsBM9AVHGhU5K1PRUcJ86cFNMTxBykbZjYeif6iVTGhQGNEWFHMjS3cGaBYyMKAKspo5Wa8GCf363FHPQZr4S",
  "key21": "3eXNiPYxBLunDTpHHPNTqiftZzSPcQkuegZNxzV2c1nHzH6ET2aSTXXwcaTvP42aMkU98JPAGF3dvUpcfX3F7HCr",
  "key22": "3fZYLJSXQ8BqxxoTr2jCamSjwRtskw1FAkJMVtm3ZeBcVyTjBpnHqD4wFTfrwNk3c4orEyQZACBCH6m5o9cWSRe3",
  "key23": "G7JH2WYvEZ7kmAkHmbMxwKC64PFz6JPnBeKTayaW6jxkJodiuLSDoB3gZ1yKaGLZdzjsK2BUVNryqjNi7qhuDuk",
  "key24": "2AFLzuqUoMtfNHwaf1moZpHKhARHNbrm7cQykCTJ2pS6C8TCvfJcDkPxPdGBMAtbV33fxdBeJeZdmLbpj1xJHF7p"
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
