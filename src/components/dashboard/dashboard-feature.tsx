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
    "3zyN3aUGovCs9cNUA1isi7iVbmBQWEtNab3VYpR4STdxmKSzF7dUhAx3Et7JenBe8pAFdDGukx3sfsd6BLvMpcyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5kKNoaRYQBp5Ja8eqpVdgbZX2JZBHRVSU96HyAn3vqYUipY2gjqTbCyA9xXZwbU2zBhB8iVgafwKBkECKjgpAk",
  "key1": "Smtxoy6qJoRdqwkhvozcytAiBaL8QdKf9NXskk48WYnRdzTx1QNCXoQzx4n2J9z1syVNzV8DACyuw13WvwUtWz6",
  "key2": "4nbnfX6NsXufBnRZmAMzCMRYuaKJomMEuPGJNhnDu6EXNPJV9caEMUqosusV5wLz64wo1Hznagsh7Xy5oT231sNm",
  "key3": "GVnFFNxsPWKUCGv1phgXKrnHCZr5GJjWKx4KGwdi9KkbTGFrfAUewi4GQnQ6uZAVGm1rSCd1zdJ32d8ZaSinMQP",
  "key4": "4qimdBxYHzpu5FDp4doEUqWmsGX434KSGV5BvZnRojynWVRSQegLgGhMNyRtLfx7tqzDAH2tvJHKrQVgCnrXipbC",
  "key5": "3rxaaZxwNhsbxFquUF7euXZQw1PRb2Ao9XTrjqTtSnFsf3rri96P6jdzhjeVAhm8oo9nveQQzS3DKZNgdnG8cB2F",
  "key6": "3nv8B5GwkB16aNqhKDcXKJNCw8MaCmonKVz9m3PeXvkswy6TT8VPQrBbMQwL1RLcGxvPnmKBv9a48LQG7DMQh7KB",
  "key7": "65PJdCF2XwtbUdqUMtoStiFYNJ9W52oJdiCmVgBZSNMWrFBQy5ZzruRDn6vk59GfgrzbJqufK8Ge691cf62RpfBg",
  "key8": "NenpYBXGXLySvk3pEijoF1jNtAjiz5k8nueVW44qpTCBa35x48Edoe7gLfqARcvJxcnFMumH4LPUrtHDvCovXAQ",
  "key9": "5FyGtfLzupEGPd9uB5Vj8oUnUTpekasABovtf16iAUhidQcHSpLxjzG7xbDcKRWG8H6sBqzmZoxUcDCgsGinfsFv",
  "key10": "xcwj1nSQnqa8GBAXV2cQzNctSMuXdnm7owhFqr8RQmiYPUBSbJ9SeuTmcYqa8eCHmyxMuUw1NoQDJpar6akvxmb",
  "key11": "51T8C7BmcLc9S6PWh4pq72wYFSeytZpGadCqr64FnNRSuWaURc6qwqn2HiGWbB36hk63jAB9BjUg2sK4wditHC75",
  "key12": "5acTe2gKXfARNWTw6zruXG66w13vLXssVwN6gJBw6faVS1R32ssStPrbeJFF3KMjfAxomJnKxV7wZPSEDRXTP1se",
  "key13": "3VytKcSVzpxq4iiMMwNxTTRnNgQQhgEv4wSLJVA5ix8EfnW1dXmL3ve4xPYWxc4JR3p9M5pcc6VJAmVM4v6y63jJ",
  "key14": "2f7Zm2qmH6HStnyiw6sVZT243ZRsdvQN4e4hY3P5SXCuND2UEZttCKMZ773yoDQJqKo1dMdBW2RBCoXctgD28nCR",
  "key15": "54Y89rDJToBSh9ZYjHCosodwwk1tdzcFN4b8xMfBHUKJUq8xaVSkHk2Fy1bh2oBKVveqdPSZhaTjygvpUF5pB2NP",
  "key16": "27rTSpRjCkMkEYUG7mt2ocWaEd17dbjvnVWjfzqAudhubp412ZJz9PCuCTi7EHc7aax6pCGZGdck6fLeJL3iGNhi",
  "key17": "67EznH6Bb5SEbiSutQ6aY7Zi94nLSj6Vso8dGPopCxmgByg7ZkXF3tAxKVGJpX4gvtHJQpWvJnKGDwgaa34Mm91U",
  "key18": "3hB6eibE3Xuz6rGC5daVapUjkX28DtXbzZ1sqdkQprmhT9G3sBVfdXWPRN7PppJxSZ2CZn53r2HZcswN3GCYZ78i",
  "key19": "5xMUMbizFCEfdpRHTQnK6PrvcUHVY1XqYg5accN9xH2cTV4ushhzD2sx8M9ZEcmL9xjoDQCZiyuy3eaAzf5CoR88",
  "key20": "pLPNBH36g4shrYXgUs7xG6R2HpQ8hmmJ1T3ygydGai4UD49DjXR4JNAuExtErvYm3FVT7jiP9YfQubnKxxKmfr5",
  "key21": "57E7Lo4wfWoSLXGDhUCCDPFhiKGkPWAbLnju6ssiuhiqqUEubLCv9V3HVHcNpi9iFuzz4VU2Yf3dWRbPymoouwvg",
  "key22": "5peaJh4p2giz1BsjVdjCBNFmALr8eUxg46i8rt5dVJnQQzDH4ggUKTNJuxupoLmnvMmTiQvMnBFbPkB8Crxc9Aaa",
  "key23": "5sQKK5LEPHX5E9tZMDoAkPFWwji2iUdzej5Fqu54xTJNqwwYqGniRjWGwJF3B687mFr748Myt6nvYXc1JQPYY7Wr",
  "key24": "n2NPhYxypCGDc6qEjTdt2tTEpz6v8dSGbbbsoEd41aeazbfdTtUSPjg9aezUKfC6ChCcDxi9egaEKfzvzR9kEFx",
  "key25": "5HFhaqLXgU2H3pzsBjujTPwaTUhhQYqwYgkitFk9R9pB7CECwVTPbD4B2dSgs2HqTiutzLyFFwnKqKmKDWy4aqcS",
  "key26": "3kCEnnYkL4HGtv32gdumFRB153m7yjNY3bMkKFLRL2o5vVESPkzUgmeQz4xaJ3wunZjZMRG9fUoHpehvoagnZZy1",
  "key27": "5p2DWBc4iBPHDxZJFn7vmDzLNMWAK2ix1QZQA5s6hUqhWiUnrN19MJXSjcYimNixPrJX2nmebKHJerGYcwQ3JJbk",
  "key28": "3mekeagQNjwdiYtyLeivpBCpcoFhX7AnJxwx2tjhAfAsbYb1qDBxfPUMuocqkA7J22LPWsaHGgGX21g8GWnuvKmF",
  "key29": "4JyTen3i95dF2kmaTLq2yuTf9TjnDfDUmSfjR6kTUEuCmYReJVbR8qcQcuehr5kqysocLymh4zcbUWHH3HWzKAxx",
  "key30": "4CpYB5htuSbyQUKwVhjApsLFtWZNDDS1ZdjzRNXP48sLBwFn5o4c7nc6qus4fT3NfAxWBPFFG6aSAWM1Y8ypkRAP",
  "key31": "5NgSdt4zXw61bdM5qxMPWPmXpT3VhQKz5VkuQei1DXMKo2udqDxL9TxMcdWwBfiXDh5yy3PFhUW32i3et4e4VjYu",
  "key32": "2Ruj9XqwpYh5booTjpuzfpfFpaQtWcVB17FiDp7VctDD2XAYxJZtPHiVTJpX23ZaH4kQPd8BFVb3ygnVwjRrS2uX",
  "key33": "5xwE7mW736nAfF3tDVNg5Q5CrJRHNt7rBhKdChBPNALyYFqYruZxw7iJtcbLsZmZoMftNK8JmV9gNuVd5Nsb1ogJ",
  "key34": "3qV7CxRswvwsaQtB9w7SQNcug62DycuTVhAprCfbeVt6vpeJJHXCRDfHNbHHw3WxZxsz77xrPw53zNvHAqB9bdyS",
  "key35": "4fsetswnSbbawyr5fagHMKP7J86QDGoSGZtjd7fDd2M7NLwCJNb9FcApK5fArXnp8oP2qBT8Y4ZAqEFFY8kz5ZSe",
  "key36": "aaJ7jrakFJSVchPVpLfTqQaCvyKmR1WtTWW4JaTff71eK3CBptmPNcW8CGgEdmT9ieNYzPpQrteVk4EG1eGQHrs",
  "key37": "4ixmLAUcvfSqHtZfFe6LRMRp4cyg9n99ao3YjNk7MpEwzWhTLiicB3tW9r5G2t5yzPYnJRFgAe8moa3ChmQQV4Sf",
  "key38": "8kYpAtkoXbYFEM43n4Yx6f6qmUiZzcVK9UQ8WpVsev54vTkoCzvsBcysx25mCESgNRUfedq9nkz4vtEk8qWQq3z",
  "key39": "2KARsMVFTmcJu4vTHYuYqMCBGgzFMMXKaDdmnHWHTZKHus6zxTcVpWTAug3kjP1xNQBKuqqUcnNFYGd2MgVAT6Er",
  "key40": "wKsHsrosUp7amrnmFEEzi2MZKXXoPEnZDVWy7rajEyrY1D3B9tC67M2AZpubAahAK8QVgovb8FqDBttJNPGDR2D",
  "key41": "5j6YphEZiz1BBfHRHpkke2RGrnm1e9XfKabYKJ8hsuxdhAMNWPcCkD73kCEsxYMgoqhZ59xMCEyNNPK8js8LmBr7",
  "key42": "21Kfn6YXWiEXW6ywKKkt6fu2T76rvuBFJcEJ6Xep8VtjqCKTe7xK1yStxa9QSVbb8UhvgtFugimDewtSRU59AjqG",
  "key43": "3PuWsYawjYtb4zeh11uDe9m7eUcRsjsnDqsC9a1AXQ9m9HvmaLqMRuCvDpkfGee3a3ZJBFdmQMbY4Ngg6qXfKnjn",
  "key44": "JeXG25Noa5aJHWuUpStFB8T6YMbuFwyE9PmMasRrmP2EcbHPjd6RofCdcxbD6F2NzxG72qGp14xNEnEzXmJVYsQ",
  "key45": "3EhBwAC81EYex49Vm8EhWSceuJVMP2mKAJA7pMRker96jaJgqN7V2zdC7J1UB3XpRcaXQsg4KvbhZaJZqeXSq5GX",
  "key46": "EfDAhb5zBDMCcrzeqqdQuwrkhSEDCdWvfUdbLdN6QEcatMpHe2DR7x7XF6yQPPSoVy3UxZrA9gHAHi8H7cddRPd",
  "key47": "5C7uToEv6mVJNqmo7vzZTEDCgYmWFcvV48f5T1rnYwFLzcgTN9PohHjWZyfXCyrvMLk38Hcr1UbhQXi4senJ7tmm",
  "key48": "3Kz2ouZgpKSnPPqYD5Dy1fJqGi3Wnv66aGdG1SA5V1bX8zhkxSEvm3KztK8wo6t5sZCTwxY2ecgFXCijMSpXeMTd"
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
