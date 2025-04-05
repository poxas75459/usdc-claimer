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
    "61u2Vgw5TG7nevxddKTXc9K8kjxXCF7FzGq7P1DeevemH1Wgim8DLn3vnt7RD2MroKdVykH36S7wpsGPFn4HRgsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZsRMvn8YPPSJx6P1Q2F4MqHjJhYiVY3N9UDmVbVXnKX1kaXxR8UhsG8cLukXWzkg94RHh2bKLxYAfBZoNzw6aig",
  "key1": "3rLyyrPjr6Z8Uv9LQPdBqeY6UTaFH9F5BHnEfogH4feZxokuQhgkEeFmFAs1mkwYVivgyWai6FLnQ8WJgGJhQqAa",
  "key2": "rcf6cfhde2C727eUMsT2NQ7dUZbHeX7Spv9VjyR245yRWYAkfCvioQUVzmj5o1g4Vb1FtVcVcAwK6uQp5rgmftt",
  "key3": "62uc7pJp3qcwUyzB2MTvbLP6k9D49tkYBxxvGpUoAeUHUgzc4WJXM9RaMuEiyZMxX9Ssg4X1d4pbtF8wp3iBNjHM",
  "key4": "3wN6KAVCaFK9FHev7HmwRt4onb6sTPuYj9NMmEjRHkMQ5wtvxFDzgyq9Rf6LegXb4x5xK86qJsy3s34VMz7vTFC",
  "key5": "4hALTEkgSxbsYidRKNVck5TwTQQbk7KbHST3wDhi8F7eqEVLBV5HKYPQH8nHvsSMnsDp7vgPMpeV6NeoJ1i4iC9z",
  "key6": "4d229grd2zxfDBep35ogyFG2yzGEvNphYC61syHGsSUhbi1QFnNsiCcS3CQ2ZyZtDBR6Y3w57i1sQ6xt5gfn6nnt",
  "key7": "NpaJaJes63Ws98e8aW7Df9Zd6LUcGGWGAL5tmXDNu8JZNbEu7uVSQtXTe3nBDhoox72zhwLysJGnzniZd5hBuzz",
  "key8": "sC7BxrspBcWqLcht1U1ajiA9d4uusCyR5daFN47JLsJxQuNYtgfdpPiwdJ2XycWdwaVPx9HDNYnnFzXjLMacxeT",
  "key9": "3dK5eP8xvNnHjB8ywmp7uHe5d7jcPgeC5AmWzPjCMqSRMANxgS5YQ6Zeb2UDCR4hYSWSyqs8BCfrHW3McqABZHZA",
  "key10": "2DUvorxZasDsuUjM2uezFLTvWsupXzWdCoJyCfKqXnvutvjBQPwXv2jpsJwytuD6c4qX5ri8BTjjDfZLgWTqb6oB",
  "key11": "4jfjVr5T1A2ybCXiSagUXGBFQNBn16pj7WZW6U3crNuUJr1RHy1V8e8qgMZnQZaNYb8ae2fUTB659C2CyMNP4eQt",
  "key12": "67oCKxZaKVNmCgzJMmve4bc8SaMjrFNTqnzPPZTkGsPfFR9DLsCcAs8wcdN2uUrC9uXpw7SbKHSi3BLcWRFkxMce",
  "key13": "k1Fvx96cA9eRNB1MyTj72ZKMQnsNTpoKPA1FK8QmYNcUA9gQidEFjQVymYSihNsx4dJt1cS55o3mA3TGCmVou1p",
  "key14": "2AXxFFHyayxGBAEhvg3PGYDyhinK5V4EdQe5QBFNL4WcTkqC5vxffMLkm6kK4bGfA3NrgrL4WNiRW4kXBsvAgrkT",
  "key15": "4SWqEffYr63os4DJAPtToXiw6iwe3bDU26Gp1repkxxZYGENxcfcA4k9V7EgWn49LFSzPeZ39JJfT6hih2Dp4uYV",
  "key16": "3rBsqp9QrjYeeTJY447zn5yeXrYCNodFcWHv8JHDdVf6HwFAto1FuNoi3q7JhZBf4mMq7u7srhedkcPqtqaRK6qm",
  "key17": "8SmCTJr7NmQSazFo18gUMshstP7kpB7MECqKUyeNKop3tHCagzPq2zaxGkx3ZTjxUkZpBXaVczdVpyP6bbXVZw3",
  "key18": "5Uss2nXsWUEYZ2kqsgH58gsHfPRv2jCcKwUYgXFw2cHnKAfzVUoG1eVy4peUt8vPUH7Ze6V66dgTgytoLVB3z4dV",
  "key19": "4nqRZnKeQEWndcyYEjCaBcrqFS1Syjcmq7VgEm7QxsZkeaV9au49kqLRPiPRkFsndYQ6cqW7P2ramvgEpLqm2JNR",
  "key20": "3NqDsnWM1HMBut2BerFtSbnsKLmnXwKmJm4bVEGKongpngoDiJ2Z1581p3gKkdVARmNy7JdqLaUctoQ7eSXBw49o",
  "key21": "5aTpSiZwZxxXS8TNE5RR5Z226Y4KvdKZvonv43QUbzSE7CCz1Z9scPugETnaxukDidR53bCKBMmXMWGqjVC5hzeK",
  "key22": "22KDgApGZVvqNhmbP2iChTnSuKf1ZtC3whsq91DgmEB1rQov2coCq4BDVcHGRbDgLqJLU8aP9B4K3xFXQZxSdEDf",
  "key23": "ufbzjyzHpqwrjmZkTPcKgp7si991hef8LArfspVNqQC87389HWqRSWchBY7zWxfCWPMTc677w4kVFej5iRmZ1QM",
  "key24": "3QAsporJbPW3k7JtEtsnDKJDj4kMkREZHX8jZNUNCTHyENX1b6pB5ExhhsSe5aZZisYoQ36ERAzur5uK84AEMQjt",
  "key25": "wAVZ1H6ycmtJdHhC1phzhnuoS41tC6FLU5Wr37tE63N4UUrBXPe4zRSzcweqQwnvcqessN5eHAHy42NLh2kcoKa",
  "key26": "4gMycTbZE2gi4fMWuwfcntf19TKVbTi5eReJpA6ekMEfXFRaCbbT2ZypjdYCz9vDyRd8UL5Weinfs51qXYZLhTAd",
  "key27": "4FgYJzo53js8LpMnUP6V7BMSK8tDV9o4PZBmiP2Vtq89XCHF752omhqr9CnuZhoQENhkMg2vESWKrVpSMEWD6fLj",
  "key28": "2gUnN532UJykTW2Lv6xu8qy2NrbHvXEgHXV2QzN75TU2hjTuGywTiqV5dA9YDqG7RUcKSC88gV6M2DTYd37mptkz",
  "key29": "2YA2b1Ft2KoyH5p8Q4z6ft5U9AVn5vie1zgFyLySHK9mLBZyMBg83cRmswLU9R9Sjsct8jfaCQ4e5EoyYURVnPdU",
  "key30": "385SYf8yzQ9YMwzabPEhApRHaZB6yMtV5h8qWcakkbwcQabaSX5nZbeTBu92UyyU9vpt5Hu6Bkm3RvyTDQPbcBWg",
  "key31": "3ndFtVxhYjSkV6cp6sQU2sBXvoi5LfE6J5PPWUzmZK3KG94b1eKwTgZpXxABYoynXMzFhhu5gEDcpobJAZwAAgoX",
  "key32": "3dFJE8Z8aRaY2s1zuwxkuDt4n8VSJnjbRP8A9SL4wkgWhssddVWDesiyCJhaphbYrUU6EH3pRGaRBxyXEiimzskA",
  "key33": "WYTQ7XKj9o5FdSKZevW8iSVoF37GC1pFvovueaX8WeWzEYWwoiypkL9b9CtZMLcvaeghBve9qXVcY7KCZ5wGy14",
  "key34": "q4SpnvxTnkEsFZN18AHdJyEukcKjGyBM15Pqxyjds7rsYuhfQxmbMgdYEU5SPT1LSNCzFg3psSWNYDB5VD2LB1U",
  "key35": "5PjbN755qMKJCpsKmT81ahfZZawDvZ2skzWVVb6y8Gk8K4sWaLUuW26vQEXLAcK1MEk5t1PdZujcfNWpw8zxmRNV",
  "key36": "5v6V2uBrkZZgCDvjRxmR2y2DWMiHXibzZUWuigFn8PKB6usFEL6DidmKxwkqePw1DNEs9VqtW4RRGmXEjYWxXvxR",
  "key37": "4Nmb6NYU1rG7DGcziqDGUkamNmHEGCQSzrJVc1iQ9xpqG9r2PYHaiNy3wr9JNRS3v9ZDAQDNgzBGsBtct1YgEXuR",
  "key38": "4xSyTja1u1UF1ceNijvcfaHH1uQPrjBC4UmJNvVTFD1392ZeJ6o5Jq6BPwrNtAgGUp4gmj2roqDzqB2aCs6KW1b1",
  "key39": "2HYNedZWvdMUre76FT2BE6cvkrmxkauJ5hXSwQU4EqAFPHriP7JE2LF2Yw7sx3q24wkD2aomYit4HgykVDagLv2A",
  "key40": "4tNvRwgbPihdycbyEMjdijvcoq9pQkKiAFS3VwJFjPepmQ7Mwtt7sawv9Mi9meja6MUn8vBadZcSdojyEFde28Kr",
  "key41": "gBgw5kXTw5wrY3QZJ7cFikFM7kkSZviad92MCQP1Z942HuVMEr3dsKxpAbHQFCVB4RiG7v2oc3agu8x3xUkd1Mq",
  "key42": "LEEaYcDoSY6RRNWRLNP8pnBpUKpuZhWKnHz1LTsEsSHjN8xeUoiJLkZNrbpdkFkvq5dbqCskJexpjQETZV55M8P",
  "key43": "3arbHAoztCu6KHKbXRYiFGq2hHBvmrnSGSJV2ENyqzmhV74GZdzCuKZig4XsAPX5D6bwALNVBSbREHKfJUuitAfp",
  "key44": "2DCY7mGbfnseZBzCDQy8QhTtXrasjgoXa8zACc5x5u8JB8JWYJQv1vaAxBMVxUobxSCGubvTPGXXcF9NJZkdsoaQ",
  "key45": "4ZYqF8yopc65z3rxsNtndMUw7WrK6zzY1Ymzxz3JCPtajnpSmg5J7P9r32RupQuZZytyUE1pBzpiY7PTK2kN9s9J",
  "key46": "32jxaNNkPwTgDocYS1uyXcqBrN4sfggV35Bdh1SS9BLKyTNmgLL8KmESppzsnuj7ddEwdcNmjT9e23LnZB21EGHd",
  "key47": "53KTyodNuehCK8WYzQrGkVUwjLw8MRMQhQB5qNq1iMRVGKsS6xChuVq76ejbiAy1T6AdDWrU4X5dz4FonKspcGw4"
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
