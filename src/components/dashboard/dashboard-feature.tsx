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
    "VZWoUr3aNSdowYsERYnqRBb6BU5uaqhXE8MrKUhxaCJKAfYM7ruwwoaqj8GFyqETAZ75p9ExgHAvKXGS7B8a1Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3RCkYcvTthj4KweH8PrdgkHCX5k4kuzgfFg8WfpCc4ZRJ9Ci2KW5KK663he1yQGJVxvBTwcgXUM7RF12jfy1Sm",
  "key1": "4s6WsRZjMAeZ8aFMQs8F32nobnwsyhGmw1eZkN9e1XnREUS6hWGaeL6pzL9AKF9gFTJg99G8eLHrrMDf69Ym4SWa",
  "key2": "5EGLr9c5r2D46Qgy4PPxb4Fwq8suaNAz1xZ7ubLLWTqH37GtLBLqJDM5jbY5TzoNcsryqJrYBBntPS7LkDgT5YjL",
  "key3": "5t2r5gKQ4G55sVdw4fmyPEMMmHAKoSf8e2kxdAPpLi3vSP52YdYdwKnZWaJrUiyKtKVuF1icqprCGCmTzFne4pAh",
  "key4": "5RMCneo51x1EA6JTjtRzoXX97fZy3LPtHYVQRi2Sno1wTzARJK6eQ2GCdAUX4xx8CYnpdGx8ovB4LQHVm2NLy2gZ",
  "key5": "2ukWysoXWe1gZJ69amx9gLKN5FK7isq4QVawwuiyFeyDAvKquaKNxtn9KaBagwAoCtZdLaCg75zsLaF7scyTg64x",
  "key6": "3BhFg8TVe7yj48fzw2agUR7D8ZbJjer8cwjkmu6wooenxpipTuCfmWeuXCbnLNVFhTF4EFAwTGeGtsHup6UYTic5",
  "key7": "4PSxmv6M3CPh9sNRCQyoHTekyiAUJXNn4uFzSaZ3siovAPr9QQkB6MwX7Yn7UH4gSMQwK4687g6Zt8mgGtMRZ4Gz",
  "key8": "5YJdNpgg8xoyCj2ZLPjzyQwPQ5ksC1xtMFiyeFSqS3N4JrN8H9tirapu3XWfn31bSAd1wwgQX1PrnsLC7UkVFHvJ",
  "key9": "25a3wrg5z7FQnWKwfm84QrQdRdH91HRbH1UjWrHxBDj9tcdQASxQXX5rxQFd9GyVZByJGZzWefGTrscufiuqWHZt",
  "key10": "2764ZU5GvWiQmkcdvA6oRHj7GfUNc7i6DHy6AjEkthX5HThFx2ch8kn73q3Ht2AzAvzVWzkUGmDoesBRUzYav64P",
  "key11": "4d8vpojqxo5wdQtPf4jyEDpth24bVFKVBmjjKA3MM6zdqjybZjqYXHJ2Wq6wDkcvfjjApyQziGPuEfpRA8PRRQ3i",
  "key12": "4M8VDRH5T1Wok5GNHjLE63kJEcdnqSaVVkDiYjCJi9VqrJ3eegSZnWA8k4JGZLeZLxcpNUFDd7FmpaBJkcYmG6Nq",
  "key13": "5GzgZXE9YtSj9CAThCbLYyBYSrP23zB39xJrT7WnW1GdUWKG2mRqLdfDBzjXZ4zfLLkbMTViWn25UMXfWACoYMi2",
  "key14": "3PzqykGgBoavDt91rU4mV7oXWsm313p9pCm9E5R3K2zwcj2JKZ4xKKphntDNfatyww5wYZXxPkhgKQMnczB515LR",
  "key15": "4aKjAtExEdKTh1oPdmi96rRTqzXHfjKTukS4vryAYV4TG8BKuAGjdLfRyfp53dMFcodbkXHXT9RoPwTqJPiTef6R",
  "key16": "5qhqibK5yGv8nPbhqoR6BvtKe7kofS77EWFkQJ3nxfhQtnk9cxnt1yR1EMBPzz233zyjswZxMENfDMj2uCHKVq64",
  "key17": "GzYoJsDHBtpW6TorQ7fYJ98gczrKRvfqdRRnKsipogpGqhfwFsmmQv5Wm6N2j5KEPmR8hD3tFtxxKnLwdNvzj7K",
  "key18": "5gcSyQGgPRynEpwyxyPj2C5KYUrZYY9bNQg39pvstZvjHcQXY9gG28EQtPBqoBsJGSPtRJuZMZzHmSAwbYEBQwid",
  "key19": "3KoAAAHZ43taP6FPK48RPd5sj8CFhWkBWGDKS7Ugbd4Z8KCvdaKwrkTugHWtufdtRrjjN3FfWm8VWM9ndzRdtfD7",
  "key20": "HZ5QEpzALmoY1bk2htZP3aYPdFVT89G6qMp73jhkVToorZG5rYoUZGtjSkPwGmYVcKn8NnLuX4AWxdmXFbG6d1v",
  "key21": "4TA9kt3k5X4zRPpJwgiBtnoUceAekXK4akCAbRsUmf8eF6mVtdcN4QfeEVQtzhMZMnqqFAQRBwQtsUKzAZXUQZ7W",
  "key22": "5C7mberzntGkq7ZezcSMja5C76cq8WAz3qBfAAkmooM7tZJqJ7AnerobjzjWSwqAPubQZySDFBzLyU22Nfg7Wf6T",
  "key23": "3xyYQx6t9Qt8sQuZdBjKW7hqicYCJ5XTNCB5DasBLJ9W8XuFKZFJtH4KP6XsSzNmviuznihYpxUzLU1uwawVwxRD",
  "key24": "5xN4sX94pWTJdV36ywDFZWGSr4qBL2o7eZvmKKHVn5ZheKHUtpK8vkbXimnBRU9LfveprQft1vvV8Q3cKdat8EeD",
  "key25": "5PNv2TmdguBYdEuZP6MNhSwonVzr1vDpkzy8P7CaW6x5vSBumSsTzxErn8h25i5e5BaQrK5aCmpEMtfWGUr8VFxF",
  "key26": "3v8g13Hvi3xqe8VqP15Z2wUTS14T1TT2XgoRUefS4PqgcVnqEKEZWV44LbufrwUr13Q1NRfg4MR4UXdPQCH8R5es",
  "key27": "5whAhZEr8jghMwLxCc9NMPiKB9gbAy81RidbvtNccjZtmpy9SAMxrTTi5Fo2fPVGdGTtBYVwdM7MKRXQPnijvAr2",
  "key28": "56ZmK4s9MogksNPtB4yoW75LwdpoR9p7B6XXobzP12tPrrn4BjmkcuhBGZVJz1h5GzyqcRdXfMK3aTV51sfuPNtR",
  "key29": "3V5YRiQ4CsdigbraeRYkgmRuCT1Dr81t8s6CbnsDhrWifg54ZwEJ2Sue3D57h552huhtZghuDBtsTVLyD6Z2UEqR",
  "key30": "3PrFLpZkzfvb4VbCBFcbJKA1WFs7WiNJKaoapZ4EyQakedaUjcZfQMekaQX3nuSzMsoDDtzfsWNuzLxZdmtF4K8B",
  "key31": "xwuj7mMd2nZ8745ghZCUAVppUjVfrv2MiqDHNJY1SGYgBivSu2YHpkTkqbjbLoJC97yVidtFwLeyhp6JbV7DiuG",
  "key32": "44mMzRtSpR4g2CTXHQAQ3vZPYPxsZYYKffcELgVQWSayFX3ecMDggb8TpiQ4BRtmRbZvANtXJMT6vp4P6qBGhA4i",
  "key33": "2ED1gaoM61ifzbvr9hJstqdHgxRxBzEhRjWVeLEW331FcXMi5nCcv2eJaa7SbrKEWAX4JnQB4Mru1igKdbZqQ13h",
  "key34": "3swHRk4eQJB551g3D7whK5Zcw3zSiNjL46BQFwgRRRL34yDCaFV5877Np99D3kRYbsGQQfESKZMQ9tVqPnLLLnD8",
  "key35": "54t9fSLadQFTbZrtu9uNWbXAUurtEzkjVEy129gkNLttZRR4Xipqg9szaNjuX3VDVwB1brgDdUdBwCyBUcQNnFnT",
  "key36": "4cm7RoreDkpK7CtDevaV1jtBEuv5yh6dpEAsuzvpqzJmnkXTpAiGghBdk9WxbQmj4TQbvEzVcVVgRS8ZvWHuRTDo",
  "key37": "4TnLMV5eVHyK5EBjrY5boCf7KVS9ZCAHQ3o96nS69oHT1YiXk3jiGzCCQ64TeZR19JKXbzqMpJPnea8i1DQpzAeC",
  "key38": "3d1rYdcJ2pCaPeNtcoE2BdcDe2EcJMdzqpEA8vofqgdygyCeEzLhp6RY4xoEfqPM3pEDGpPjehXXDvqPjSwpnDJ1",
  "key39": "39zWjbv2QfY8JkbptV9x7Xd8GXppJh4ABZw99WHno2rnysi2tLMt1o5fa8Bi5JwhS8WHCGXVTPCPX31cGoAPhhMQ",
  "key40": "cjTpDuDU2tZuZhvnGVNiAXHnHeJYVCyX4ry9bzbV46DrXf7iRvAkJXPkrFr39jB5f63GsqateDGa6rJTTRBW2rT",
  "key41": "2Zr3cgdeZbKb6MSxpxacmxEAgR9iQZCMA7ctx9Fq4HFQWwjCCPwUVZ8xkfwQY6mvSKVFVg9A7MURqEHbZv5A8Y3k",
  "key42": "4bpS8Z3zTKAZTrBZ4Fbd1xe5tQyotvAzrsk1NbcRXYSjqAK93WQpJeDYyqe1idQTxNuNQMF7owiegC8Ur8rAfGUa",
  "key43": "H5VEdH5jnEAW8EgrveLNgEBf5GSGJPYMCyUS9Qe2MGmMQXU8uLhstzKa1MrjA3Jjwk1ug11Q3Uszwt5X5XKjaFe",
  "key44": "atWcvbLA2S7nF9WE1P7m6fKGEEep3F8HaxN6UPk25vJQpBhdho2fXMvenguRg6zrj5eQirDCWb6aPkrwjGQCcZu",
  "key45": "3ZoUk7VAq36tyNx85CaRXFKcAfyPnGobh5mHCFbXvmbhb7S27q6cz7gzyaKz6tS1sR9c2Vp9hXwWkVTXF2GsvL8h"
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
