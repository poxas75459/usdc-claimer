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
    "3YtwwopZ2EJ62yN8f1U4Yt313J8rDJjn4es8msd6bN8SZA85wL8Vvp13tJ7ZVxPxLGNm34VKTcLCBZptuyFRddMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPhXUEdpLBcaGnRsm2ti3MNuHy1J7FefHgMsrsBWxEFUBwFdcM1dTwHvzBFXsgSAg2hRdFL1nwwcxQrJnLLGiat",
  "key1": "3eE3uE4M1wUnvxBENTqNvqgT4Nwp7RkdCLqD8bUW4YKr2oTS6Y6inz8Kb73QVyZtUxeDxUE3qg4F7DYjjGehPiWn",
  "key2": "BHWgBNHAzVhhgsvZx3gSW4H7C8J2vsYRPQYRaroDiW6pp9aiRxmehPMn5HRycS7u9EVFkdB8R8GZmNkon1qRuvT",
  "key3": "fNQReg2XLHYykD335RmHoREJFBbh3pnzo8zheACLfcv3b2QPVAiBX7LRsDPSsewVW99157vDHK1xTkS2C1u3VEj",
  "key4": "3uiv3bokQ7ChSBajiw4np43V32wMkhZp3Tg4vCD5pza5vgFdShz4nb7RBR48Ld3H9k6rGJgcZYQLMafrM5F28abd",
  "key5": "2JYumb1Kvg3NRvePWfjkpfNCT6Pkqe6557wejrM7dUw7t9J6GHeVKNdSm4UDTf43gwDiH8vpX2tCKhNYPbCb7d8q",
  "key6": "4XAuN6X3wFkVn2WvqJPJEvGcMg1noLKyWCei4xAjCJtBcztFnMRXJMsxJuCQ2H7PL5ymX3MzmNRc32bugwQJikiF",
  "key7": "5RKFw2TG48BXzUyoqMgCscu4aLKnm2LC1QWFd7h9cCPE7zfYfJ7R6RtQZZvjpBp664iNE2FPWJHPcLPdeq6hMwZA",
  "key8": "5uuqrXo7E45QcgvNGTnQZVLeBgFgb5MT7DHMqrU9S9WZYxup3EyA5YGkC1E46xLtDbwVw3Qq1T2cTkAhVMQNcyzC",
  "key9": "59EgtGKRGkdCt1hjLq2FyzE3LHPLhuFTcHVdm44cXLG9Y4hxDoPY5ih6RN2JqKrqidiRA6fohNSn1nYgrhk6ZUFR",
  "key10": "251wJDwGbnBGGZL6ewVdSQUJgjttqsWwWvb6A6Kn3sA1JY7o62EW2L3ZtAzKjayM3a94aRonwkxM3QHq2MuLPuNS",
  "key11": "23sY7Jg96oaQXQniEGjsrz5hUyYi2XhAzJfrgoXHvQeCwTCMpb49hi293LivfiTgtfuDPgvpzQHz74yNz8tS6Lno",
  "key12": "yRzUcjVmxEGDazQDdPj5hmZLC2oQynvnETdg5Po9MUkZzsMZP1GLjjzbgSwGXtczZggaSE5gPMByDcTLgxiqqv3",
  "key13": "3YjyvarieumujacHAtc76uZG8knvk2ccu7tqabGBXVbwipD52Jc81p38vn3SRd8XodeGXgqQdufi4iBk1JTdB28m",
  "key14": "4LxSjneB8iZ89rtAnKJdavkuZSwKPxy2HVJFZzBUAAotDbCiesdSg7g1mgf3RwJPcKR62fdHS6Ep8Rxbp8JiywSe",
  "key15": "2gkKr5enBTEewL7YLPJ3keUUemYn6CqLKR8zFYnD39wEnwJpXUmNPrdSr1QFUHY9yXz7X1ZBtnoSGksFHB46pfCx",
  "key16": "5GifG8vX76r381nTntjaadk56MzSKZBGSQMt5CczxBRYQQyc1bUDWDGAYVTZrPFiFS8ytJaZeQ4JCsszhwofamvZ",
  "key17": "2sZfvZ6skue48DAUdQuKTPH7WRUNRC3AvDEk4LexMfSiwuSQ29w1fuzUz95ZpowBVvJfxoUrmda2juUju48tFKnj",
  "key18": "5Y3SEgUFWAfmVmA6QLaLmzNWMXpioj8P5J2LiPCAywUFpNTDePL3zb9Vn7vvSq872HfyEELjckrAV2M8F1MJzFm4",
  "key19": "4n7HQz1bsTLZ1efacnJN9qSXVJRijs1njaxWaYkd6kx4L6q6zuTVwyFtcAB5ePpucZqyYECA7sn27bKhWW97Gn8G",
  "key20": "4auPPgFkTLkh3KFQT4DPZBL3LxdKonRfMbAniqzJi3XCFXpBAyM4KHphx9JGYv8ARbweuQLkb7JvMD4YGzAr7EyE",
  "key21": "4QQok7BpgQ76smNSKVYgUUJRWoavW3jkroWFyXZ5pRkzgoDghjcXzmatNGCaMBi3DRbPKGab5YNabccLxfQuphAJ",
  "key22": "66iL7EjEeyUxCNnnzgpeRiBBcFt3LbWnhLruQTdLqyhCrKihE46rEqR7q9b2BjQBf3oRHHjuhs9xkUhTaPwEZhtp",
  "key23": "5y3KtwMfyxAVFtBwHrWMDqvUyZeiNNv7a2Gy12Tc4bcUcVFR974RHzaA4w6VRXocf3HXJ5AXttaJ8Hn5wASwsJNv",
  "key24": "5WXAZsc8t3RRTd9BcXDceQk5SRDtyQCCMBF4AWSRFGbtVLyqfzKp5RRyueo6TRZStYASLK5ZbRKgjWZbnJanokAq",
  "key25": "2jyVLNcBYfHFHXkd4uiCmJb1gs5Afok6bTvpS2wEQazWSCsBGuUs1vrVJ5TK8EcQPDX48aq9PFe17BCJJNrWJrXi",
  "key26": "RJcJzymPweyo3xDdRb3kAApc9ZVjL67kheSbxSVEGS4ikz2ifKJd9oXDzNhPpSuzGmDkZvYLNbFGkFZbYeysoMc",
  "key27": "2yeFWg3YCMKRtn3ujc5vH6xLe5635MEhbBhXfZbTu4okXeSxXzPYaQWqeZUFyjPiKjpvRS5mppgaEhNEhroVPMrr",
  "key28": "5KbVwo76X5MPYzvKtYhDnBeXG12d5PNWpnnYhdBjzAsw5J5xrPAPi5dHbJeJ3aUbUENyGw9NXMnP1Q87YWyuJohs",
  "key29": "3aTFdttKQZvBtDfEgk7kT3rthK137Nd5Fohgs7CEqRgToEDyX18N5WEAef9QXFjXMiKwB7dd9ESk9FKJJibtfKMS",
  "key30": "3MqiQfWhcQqAt5DVUFBdBzjm2jocwani65WYe3o1GmgxsVu423LCkPmikkHQ8LFdfks9F5bq6CBFAEFX5ByQQzZ8",
  "key31": "3Wps976JJe4KTWw2ngwXpGsXWFJhLtv6zExUNEjKZUiD1HJUXy5X3TfrT4G38adueCBksCAd4Fnp9wkves6DYVm2",
  "key32": "39tMJpCe9xcYUDKnzGQG9yLWYYXvuPt5QRRLDDf3GiQuiQ8QjLk2bKwDXg4kjjVJG45WYDwdrt5wh754Jmm6E7SP"
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
