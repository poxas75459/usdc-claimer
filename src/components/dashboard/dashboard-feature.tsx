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
    "32HqSTdrK4Wmz7He2ug2Gag3FzkHdgwaFMeD4Yw3FYnGbw1P1vx4VbrbFp7QQ77YF7xRLK2N4sUYRNCuW6P5PdbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Q7NEocW9qvKXffV9s19shy2fyrE91Dz8RgKR5uunqgzHKtoXVoRcMKM5KfKjf4za5UUF6oxSZPMPoUivqoj73p",
  "key1": "4NkELvNa1RAhwgeAqFiTe9uiNLV7MMHzcvuGEFjcfmD47cC5R951wHSfyz3uvSgydKXw7agdoE4Zcz1665TkGfty",
  "key2": "3YhELjXLFXXkpDqPu716pLX6ocfUZF4K9RewFKYMTetdGBpT5skqJ27rMkQy3q3bDN8KYQPTsTLk1KtfYNH7ZPg3",
  "key3": "2i1xMRmbFibvuqui1eZMik9VhEBkCz1gnUMiSNxMcv9TdyrVvYXt4vwKN338MkmA49Bf2P9g6b5zY1mTrxfA3Gf8",
  "key4": "5tAWmDN7wyS21w7DwcrTsLKXt2sqjYNXPPJ7qhm13qRrv3n8rDwHMYf1XyYXSt331haPteyrKdQewfD32GBmLeHK",
  "key5": "43HDi6vnZLZoswP72aFr3Lf7vv1tAjAjnvQQ3PcUHtUL22NHjWz3gPWFmjVqVMvTKwAsgjqd8eNhwAmtBnJnRjCS",
  "key6": "4VRTGkcHYGMS5gSwavjLdUfKr2eH6LxSxsc9fHxsL9tdfDnvEBQ1UTn2bvR3MJMYYzSoKaGzsvnkrWMw4U19wfHo",
  "key7": "2xbaDvMfvNEAVnA7J7vKP4RT8ge3LE92A8vkgHvCdQFESfMTd3n5KfUkHmFmvos5eGXcExgxatQcbgJsDBMcWWWg",
  "key8": "2dWFcaTKZwiT3p3K73r1XQFjJcAj3hBJk4FWyqnQ1v9b1XdjcJy5DyuX2CbvZtJKckioJ5itTHK5ZVfgy1WXzrMU",
  "key9": "39dS9t5NxqDk8zLs1Pp5Gwsh8qrUuzCpqk1rHRr5dRVTJPM7h14HL9n1rmXoba8T9NA7D5J58nYH3mBCurKSdFAR",
  "key10": "61hX1J8mR6XEdcDwxkoVuXJTHkcCL4rtz7iq3f6E7bHmJ6hR63NxSUqHKeJQRHwRk8DXPYDk6fVpTPSSypPcmbcQ",
  "key11": "3Htn7dKuZrBGzGPHEqvrYWpsJsZTv42RNWwXmrQR2Pd5CjvyCGNbydJnAbvXMCEP5SkoNYSFQxecDQd2P1TpV5bx",
  "key12": "3xYvhvPhgQTJ7G3nWgoq2N5TP35ZapkdgoJJRuvLRK2Ut6FtUJFWaStKbUmp1dVbjopWvdmQEa7gh7DdUz9enKEk",
  "key13": "5xWKU2Y2UhsfCqT2ZYxtEGUXpccZj8TFKnxW5xkd1AZXfaNmDxwjSXJBD1r7mHJPrwTNFLbgxXRXdfaqpPo5yHam",
  "key14": "4vWLtLSQwoHHdj15NKB1eQEJzqcNmgBrdEm4ycJuAwNF7TbvzDNfSU9p5zNcQtEFAuWHFWHDB4n5S22CCsiRCSw8",
  "key15": "2LQCe4tRsByco2tZZAiXouWCW1aJveeP3TBgqUrxjmJf7aKXhgFWNDn4bhqDCPrrJ2mLwFBiV8qTr7wf4CRX9tCB",
  "key16": "4jKjqiYLz1PNZC4xovB5JJzhMH7QPPMJ1hJXD46HYA1Txz3sD3TccbjNgvsqDZTDuSmduBebtY4CAe3iwkY1HHQS",
  "key17": "2R5JpNKABcr5umhcogjb35qUFt185SWnEhjhEfQLqDZr6wwqF6qv3LPnRFBuu2cCg5fw8QSjREP4P7MoaNLmXqRD",
  "key18": "4NYY9WAbiJeitkmqFB89xVinBk4obS6QMQAVukpWx6jUZ9LmtFkFZsz4Ma5EvKGmaJYM9Nd9BzdDLcuY2tH1tHDR",
  "key19": "2A9Y1Uyo5CyfpdCxLKUHWD1AyEUYdReeTai1SjSuYtf8FfE5cNtURn7fScGtPT8JBSStqnUzGYa23LhVCr8Fvpii",
  "key20": "4vEZQqSuYoQWfD9L9gZJwbXT12jzR2NjyVMC176ix1iAhVR6QQwBwKrydZGRQvp4o1QQUYN2h5ZUgnRVNPLZEpUN",
  "key21": "3Z5NNGLJYZcn4E4n3mszKfgNKRmiFa5NhC1yvTR1uyxtowzDzv3Dec7VLzFbMfW3vxzHAePZJ96iERkViwz8c6aB",
  "key22": "5PFRqJ1SuRp4G1rgTfBPcYMbSEA5jxpY5CyTrLePXgH9gVw1sYfkGYmXVY7P91Xvg8fePnu3Tgbp9eYnVxwfdEV4",
  "key23": "4dargpK9BU8mvKYFqBTLnGPrGrhjj6v771Lae6uTE87svvSScBqYWkdE39JvEjS9eAUvRZEDCZJJmE29tSWk7jnh",
  "key24": "2knzwsgzkJxfo5T91UBmbgS44gKAg7GH8SyDEv5kXoctFE1i944YjAhWsG7HAH3MGhWYZfRsuuox7kAcWMP7fTUK",
  "key25": "3vJ5whuEv15Ap91KYKnq8VKaXfX8WHpwvF5L37vLSj3jWUBMaNk5v4urTu6FA22fKcYL3z2Apmkwj7XQyQXuA2LZ",
  "key26": "2cfVAFktQuupPodLom2mFuWZBNpzQUQcHM5qo2imKf72DzjnsPfTCf1m8nBUuhiNNsK3NiBgAvGAAkw6L27ZUPC6",
  "key27": "5iXDhbgfYAFXmd8Tu62zHBN1ep7F3nD1bcVPqSBFEEuc7om5bxcs9pBofKYGZkigR1fnfiyJZtPUQB1GdfNdz7qh",
  "key28": "5c3yCk1wpw6CLnHwmuANPVBZK8qRYqbTHqLyyjJmQ4rUYGCxmamjEyFhQWLecTR6ydNfMXASZvxFYr2uLRxb2BYH",
  "key29": "4FCrsH9Tfj8rro2sGVtXsmct4bg1FgBLUTAuvk9u5pgB7nmTWX3vWXdxag3qHuFnjgZtZ8WRbMNXGP24tms8CxqS",
  "key30": "3MUZVtE9aAK7QMFV6eHWNWcRoF5PQC7PFqpqGKiMKXkWEuzNjJvtSXE2y34uatdkkVg3efvDRj1ixn41SMHXtVoS",
  "key31": "2eR4H7k5ivjGMX9CdhM4jmkfyrEt76pWtg3buqtJ6LwmJLwaifvWJXCZnj32vXjoRtCYWEBn7a6XYW1AeKo3nf9s",
  "key32": "4hmhVm41BnEdf1N8bMFBXWrCCARjXSes8KNgCMfB46DVhi9B17UPzfhh5dt7nfbMdWoACoAVsJRLMaZKMbmKQ12L",
  "key33": "4qRhc9CD4KNKyNxmveKKeUN3kUUqHxpcGUAFDjHJhPJ3LsLyVnP2u771PVf2HN4wRbBpY4PLUUqzQwDLWecfmpS",
  "key34": "3ZDUFPUNXCQRmxWhGo1HGBX8auAPBMtZJE54x7UDDkPibwSpBtinnUJcrEa3DJie34aJaZVTXfpNGuMG68HEq8mE",
  "key35": "3bjXXwDtzwtbEYvR3LQ5S9prQudkvStC4AmYRy8sEzFqW8ssptujfUKLMsGrVUG58Mso4YcmoadXPV4FX8zXM7G2",
  "key36": "FHrB1wZeKPsDct9CbweVtZbZQHW1MZfkVQbZECRUuSU8tRHvMzs8iPnex9YYbbMDEYeYdEUbqvqLfLR8V7ehmZ9",
  "key37": "65B88wE8LYqd41v9r53XDFugh5xKgAim3QwPpMaVyynqg6ZiNRj4sxHTCfreFs91oknWyKLJ1CVLPkPD2befLtiu",
  "key38": "y1fonMt2wm3sLbRsxf6ruNpisfsPFkpLpfZ4KU7dMRa41RCatjDNQxstYwGMVDJGmvxF2LAwQsjQcNhZWkQtK4t",
  "key39": "28ffZFFsSneB4e7tPkYPeBBYW89bgV78d3bQdCqXEZouu8u6ZYf8mv78K4UzscfLMEumniV8DMmUEGbKEuQeQgQ9",
  "key40": "54cpzCgkcge7y3PCtiLXpSGt3pjVUTKijiZBVs2KSajah4nUwkGEDNuGCm4GXa97rpGquJDuhbkiCR2xProApMZq",
  "key41": "KqMoUkA3g1CTBop2FDsJasYZff5TbedzKtCvZ95bRQgDq2NoFdnuqCRkYphpe7yNMPPcYabioxwUgVvXSa6xiaM"
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
