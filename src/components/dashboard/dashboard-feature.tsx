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
    "3WREQGjBrngRKUWaHX3kMxshFm9zYLQBJsmLyke575AXBx6ydd8y8YrNt8UjXKZss36PiyRpCv4cmDn9ftZod4Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ti3PxrpNt3L8zFDvXmwBXoK21gbB4MU9onj5iL6USoxTQV3tEWUJWrG5DLrF5GqQu14j2BNiF24JTuCTgV1xoXu",
  "key1": "uZbBhWKw1yqPK7uu4SBFzLf8zri3UYnjcwSwPiGgudnK63PEbDb891H5HYMyr67LMsHVGum8Q9yz4VMLi1LBaE5",
  "key2": "4VEwbjkwku8WxLxgF4czEKmGsUauJoLDrMMN6sJucki1yMjwJxxxVix3sdVBrbZiPQUmveVR2T1aREnZvXYWuW7V",
  "key3": "459o7j4gv4Xpx8GakiyAmDbyoyqdLdMG8TEmTC1fY23bPrqzaYwUcaCcKiUcXkEu9dd5TamAxp7c1o3WnUTCGE6u",
  "key4": "CnhcWmsoASrVx1Wa8QWCttY9JHixB4WHK23SMY4DmELUM1F9yjMCtordrA2bvM4Rsm8xgwgSUjnnDcQnNy7fjmk",
  "key5": "2vsNjWuQSXyPiwvb2qGQj2WyWxX1uZ47rBBHDeJGWWTVjMtYPnKJk8BNtEV9XTVuWVFaiShJFPq4T49BsMUjBzHF",
  "key6": "27C4PxSjdX94Lsyp9Yxzx6nEt6KuVu24UuQ1LYApXut8XGBgfh3CH3dQNoMFVKLmkYQRxsQYwZqubQsCV4CG4yjn",
  "key7": "4gtB9PRXYh95GXtgEJ6juvoRs4LQkUEz8vRXAXZtDodcoKfim9NshEYJHmyJ872cZpb5ESg3VTk8NQyDM74HCBZY",
  "key8": "3AP8mjRaNVzKtogmyuyKJ39ZLTYPXYu77UVKSvowxsW6Yuv7KEgoA7zjVFzHKezYHmEFKCsT5jZEr9NQAZJ9vb3B",
  "key9": "vK8QKFnMSFx37Kynqh5hQZ6BC4TjwtZ5g3r4XHjAJX2vtDvsoPPjcmXRGUfxR5RmfNXWvVPJ7djq2fxcVupA7DF",
  "key10": "brQfWpCoXCwaqZ8BwWRTVUETk82yGTicbucrZMZiAjvTudgE55RpmGRL8Kn8GFQ4Dk5VFRcxVp51xKvTjjmEZQo",
  "key11": "5nS5K5NsA9KzbggA9AFN9qVfJCQUdi2aAB1Dzcpqy28RhAKvbSy1WDZPVKM1zyqpjujdsD7AkzXEpGx9jkzSqSn4",
  "key12": "uhus7dUHDmgpEqK5TKaCdQoW1XXDkwTHPQxwdMHBQskPp34datn1kkH5e4wk6buA7J4FZxjaHLSpUNToLT1YV9X",
  "key13": "3xM6Upd1KrH55SwU1rQM4gXAXJwfN1T8TxT8v9QAH1fMYM1gtKnfQscxNzVsrXhyATi2Vtn2vH1SAgtnUcuqjst7",
  "key14": "53xNyXRGAx5qDabSsZAgmduRZcrfQNsYCqiMSf7e28LYfqSh4VP1mxGo1Px1AUjznBumFkA5vBwmWyQgtbAoW8je",
  "key15": "SkCY59UWx1BsNaj3QPbMryx38FdZZHZevD5NovA7HHdpA4VBxzy1ogpXfyVYDcFYqDB1PXzownW3NukA5n34wX1",
  "key16": "273sYA1BTJPPveoQqAM5WAA8jDnh7i6XMrZhugAR37av2Naef4et6f8N2JgcqmzxVqE7eYNVWPiAySk1AiSH7aJS",
  "key17": "4hX4q65DdzGAnqxK9zyu2jS5LUc4s2cG3AiYK9dcUzjSSXuLTz12H4xvpqCHzxipbNkM2pXEmq9Rn9UBT9jRdx5v",
  "key18": "33JmKMCgDBUu7i7xdQJHiFgeiEkRMx27iLfgVTxuwBphXsco35VEyx7oXpEqtRwadYyGuX4kKWuNYgysjRBn7rfZ",
  "key19": "nie1miSjCTZLCqvsf8K87aC8P8NT62gngZ6RKiKRDLDvx2R2h65VbkFKqCQW23VgTY8jtCTqFnfe3buy5RUKzyg",
  "key20": "2eyZ9TRXBgQwuGrZBnyritq4EzkbmnP1QiqC2bichCWcihroFg1VSNJJ3c8uMvnyz2hADMvxwCiAAdqKtLHMKLa2",
  "key21": "3R33iKHBMjwu8CgBQciyPhV4vrxZeCsVH4FfRjkXAXrZMeH6L9GWhs5caPjsNnbYSDhEujHHfdXr1fiJvcmBAyMw",
  "key22": "2m9EPUVRgNiiGEVhDuGwyYtd8WE6z8zjFrgPnVT2AMwy68Perg1mZqLPF6NyqaFghe5h8vjdFim7v94tQnLGdH5A",
  "key23": "64fSm3q2SkYgxFGDrrPr3XCTouMuhWGNQtRW5LraoWdwyv48gsPQ1GGfVAhEqpGYFmBFAis2Mw4nHNGX2CDVY7ae",
  "key24": "32NhWevAGJKL6EE5dFeUrmQj36nzu6DpAtGQ4wF72TzN4MvjkqewLvsc8QyWkKGchq6NjtnrUGnJSx86PfcsfSke",
  "key25": "5d9xZiNvxf3UAwnKqCpGxuce7Nbqcc5Ws3C8wsXQhxEQQ2qJMSQyKFxxzqywikoGXaDwfVCaPBDoumxp1QUfjzCg",
  "key26": "275daKrX88hDQmqadNtM76vB5PU3X8LLre6WDhmQoeeT7gh8GJ4yJG9VgAsvw7zzqkZcFMaRqeWisKh24bjavLnd",
  "key27": "3Z8JH2AZ72uP4ARMGFTV7egvi85yV31LmVwMucUMZ3PRAsF7KdxbnBLwBQDFDTQyC9XGMcLfVAMgd5sGbCMQjkLD",
  "key28": "o5nf9rLYthTq8BTCte6QPdoEaieA9gsu339ocJjhWThZjrvnrotkS9Ticnq5i6WKQN9d5t1HWGfQ9xP3ytGiM5h",
  "key29": "3wuFvKUg4YoYFfPSAKY3NPk9szx2JBnpKw8XCRxzU5E1v2ArDCdRHMs9iVWgyseKj7rRfoYkFxj5BPWsrrVh6HZj",
  "key30": "SupPrTHPWFfBrRWJEqFiS9ahcfkMWDKXwRcrTghUGCBECdsQ2XZVuxsFN94weFXzjufYzgenQEE3ZA8AzvMfS57",
  "key31": "CX6175dCD3Mxojmcju8wTRUiFvz1uXDstHjoXKKX3a7XJf8wMmSgsNYKhfA59vmpU3q4cYfm8Rh39RBwBS7TZEP",
  "key32": "4p82SuX3Vv7X1bVnUBQrCTXrS5cZ8rqMh1rgfoV4XntHmaqHaTtYqMwp9ngMd1ffvpkm11zenDXWyopujPjJgXm5",
  "key33": "4nqraxDRZUKJsSGXHx2oFQF572mEUXGG3ee2UaqSrdqGNkPfjzVuMN7tEpasq1sVhBbtRCBdkW7C7njRykQ9G56H",
  "key34": "5gF7Mt7PBf5VyoCgQ1Cst393tk57cFtC9mdGHi7TxSzbeisUo2xBhwEcdxgYnEoDChR7LoEaMH1Hftr2vZTYtjgH",
  "key35": "2X6gLYd7squkM6rE5Z2JWhPJnQhtp7cEj1mNEocWPMsA91bDZDdky3qbHZsdcHuxckamYpJD1JV6DjgtQurK15jZ",
  "key36": "5mMcAnVuJfvZFCrFQaAyhJJ5FsWd4bkEPFiEFZBjvPLuSN3PcVjFuFUBpAKLgs1VKjeygttBiqRtcvzi7wAP97Nt",
  "key37": "5enhKo7r5f6Du4FkVYAM1rEodn1i6s9tG4KVUYYagB8gUr1VLbZjbGzJvpC3uk7ShYJZYe4FjhvaSD2YZzXXvP6Z",
  "key38": "3RMWmEKpLo5qVLTocW8oZw5Ycw6UApGzMhLkHQYR4tnF92PZihRr7unqETBS6Bq2P7C9qxuV4adr4Ds2khJUGmx",
  "key39": "4tHgCEDV6UPiocxk2dycgsgKAeJALXs8oNUcaX2hWZMtPFX6pqfHQ93HTu9mJ4zGNCeNc3mLhHjYHkLV3GENxVMu",
  "key40": "H3FjKxXAytYzH3iTMonyrfMa6Gh1ypKJHKBhvH8TShbJVEMk3W2oDK4CUr5pvjhVMCCqaamYFus9HhffkwN5sKT",
  "key41": "3sNB1o1De6dmyi7hyczcTnsM5txobHQMLxXmeVZMto5BnChroqhrvp8DC3fgs1ufFzNp88iUrgHt67iAHghz5hF7",
  "key42": "iHqt7dxQwtvi5HZtaqAkrF6rs2QfUjrL2ReBrhUzwvH8wzM6CXDJMkwNK1JyUuTKYZtZK4hVJEoGUngys1NcFuo",
  "key43": "5DahBwf7uFt5WvxnFa2NNsJmkPPrEnFybTq5LJ2ThicARkEd1Rm8eByMSmmqtJoankhYWTYfXDFWBcmWActGVbF4",
  "key44": "4Knd3Sh7xPFzHKCXwNxBuUidV9qSbffoau6TLjdga5H7VV2UFJSwHr7Tjy28VLkdCNBJSbb4QELor4tvizgpVX89",
  "key45": "4VwSSShSAVGJjE7USWTvDrYXUUzTaDroeYvH5BmSMoco2WKxAhfXAo9CZo8rjw3wRepr8D6FghE94xeeZsjxriWn"
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
