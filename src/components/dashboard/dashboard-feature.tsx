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
    "4xN74uzPzf17vcK4eVFYxuQ355nVjUujqojUHb5UrubHaFEcWd6nFovjNp21rg9YV2UkJALGAgXZ1E4uZVzijbeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGFH7xTuziSzHf5gEz3Twcw74FTcHYd2ezbNYLsDqReBzDuBqm8g7T6QcPNSg9C3Wis5as3WZxS1krnrZ8W88fm",
  "key1": "VTtZNPM7z9gw534YHxUQz2bwhme8Vc9bbvL1TZmTLjvBkovYJaV1UKxYbS8pjB5HUfzno5oXsrddnwssPZjsRyS",
  "key2": "371MocGniFEtj9heuxJzu7XRLj1oLTqsDCryFMeMBPNhsoGzAUMfZ6V6SELsNQabL7M8gRc9BziQAvNVbB2HL61o",
  "key3": "4H8gPhf9Ufk5gXsDnBGbNsc8bXwaSJnxqTS4HmcqAT5TbcksUyQWPGuJUVa1K8pfPt4NbA1qdy5g2ayZYE5wur5n",
  "key4": "2uyuJZntiHVFkZqMMgRJMTh7taDiRFPedi5JmjdZhCtXtaMaW7Wak6FHPrnRoJn3L4ayiYc5Y8R7F1pG1JdGezdC",
  "key5": "5RKNyK51qE2kcb4BVfqaC9xNb4VjjLdMpEVMGvrdDpAPeC4GuWUhWkwXU3qGtqQkQFTWu6h2fug39DkHwUcUbbGz",
  "key6": "BSXvzsbCskWg7XtpAuByoRYtWEg1Lwa1YmZxmFKFcVnuVoA8AoZh7XvJij7xZUNnjBPZZ4yK6SRQsDogy9DHQA2",
  "key7": "EU6DfYJYUdLk1oXS4DWEkCcdri5AnyJCUbBLxWaeU6SdM3fGycSWF7puwJ4v8b8wg1Ujcc27CKiwnqmDHJWwFaZ",
  "key8": "4ybjpsuRHNrMv9p5Cs3ZAXHPaVzHiPoBUJtzmCSsMaqmcKA1KmSn9Ux4mRxRYWWTF2FJdoudJ3zwgZDbTJjDchhs",
  "key9": "2fc8aFzDMarTGuQRt3sXsnR7hJhHsQy7MV9MqYASJs3nmztxcFSP16EjvCJ4iXefGJHRaxAJoWCdhmL2BmCFsMH9",
  "key10": "3d7Ub1h73EZ8hC4NDNbiNRSGbmUmMSCAJfvR64fvACWnAKFUMsRpbwLToLmT4QtBCzc5JNNksGis1jxpPgNrQSjv",
  "key11": "3esfAEdnBRykSAUH9Y9PEXRozHxitF7JaG5CFazs1DimXyt6EFfEmKeLcyZvew1gbhmkZW93KQAPoYvDT77HPsQa",
  "key12": "3BV1dih742LfmwbithLooMVxJugeKUz3JzBYrkNPsGEp5KGn7FzscsoKYDQbdAfZ4HoL1UyyELaq1B7MkdaAQDxf",
  "key13": "f7RAmCertZ9HwWRzUubqMqXvqMQywp5VKW9aKjDDAtRcrjgLYjRR9XhysxgkEMdj6FbkNXQzExK61NsptVStU3n",
  "key14": "62V7syfugURt8VavZ9saVwpEiKCBAAbtqZtrhLgBU4eZSRyQnw17i5DnM7gWanbe7JMzHieJY7MwxbghuicWVrMN",
  "key15": "4xyiiicHkcWs4szyDAHz99jwcpnVMyJQqYQqVPVuRZnijbP2hEo8RaxW9p3PaLswSxB52sYQGKf9aRfRcas7EvRv",
  "key16": "1JvNarqqkV7GC9tNW6Y4rJmdveeCh67JeAV2PYwTeEpA7LETvrTqt5D6hxQqbV6itJYivmYa9giXxZELRsRxWMW",
  "key17": "4zRytWR3XtHrVCkx7wjxiHykrsEGb16opdhRYPYhKxpyytS12wgFUAKryBJEw1R2avMgzv8ASLeQ5GrcsNjnyJJc",
  "key18": "5DXm1hyx13PernDwbQBEGKNsxtjacTeVfrRBX9PMe5dRbs4rUmzqRrz7fXVJPpzpkFwSFjoXXUAdU3aZZsp6p35p",
  "key19": "5E1FPu3qAAiTfTmiyhYihdKotiXeCKBEoxCiK8BwgG7H3iLYpMgxMExAR1ZU7BqKRyo8YyBXME4hxPV7zZUG38MW",
  "key20": "4A9pzGwcNSohFCvyM2z1mY1zE4dMpHHE6xuz8NSXwrfUWuowB4rzvNDYXEd4G8Wt41RwRVD4YYHWfwfLoynukmp5",
  "key21": "KHThD624LZ9TqRFkMP3JmhonBgxH6ySuYBS8Xg8qfJropKmSuSnxeYyQzgnY2pv2mXm24zXvzuBZ6KztuczSLvH",
  "key22": "5WLbdeweJhqFdAnjS24JHZrpNzNmCR6fBxacNgngMEmE8Zq4hZFNvCk9K7oZeVBhkLR4GTT4MSspJA1Xjkmrq2kP",
  "key23": "4hzWy6ZuuAcvZHHFWZZGubmLATV2fvhm5rFtxNVg9m1ZcdMxunTh2GbxRtsQu6exEGFjtC8DAkhYioPwSGUz1AsR",
  "key24": "4re3qmb4e2ktEm5WF1nrbcrXSJ7U2snF56TyAvkaqx3nJLiRnELYsFW2rUs3bHEZ1VGGobRLSfqib1YihzeJ4kRQ",
  "key25": "zqJGkymwEbT2DUeuTgXj26Hsq7iNfFLJYAy72HaEpBT8iphAFXEi3iLcfYf6C3c1M2fJS5e74eLxqYzhyKfjFhT",
  "key26": "5EMapgQYg8qyCSnQDgpEchpxgZfBhswuhi8azv7MCigX1cgFLwArycowtEwdSu2NUYcfQjfP9xhmJ8spJKgcDuq3",
  "key27": "46rbqKUbkdHy6cCcmwz7cCTM1WNZMHw7RDwBZwa1MtHNvMQg7hBGwdL9xgLGPRNkX3Shwzt5Kmp75R6zgVyCbWKF",
  "key28": "92Poc12XX3Zrup1ywfrWXmn6F5wkXxhupaK7G3Hy5JFqwUgcm4DiYtkt3zietf8y911Z4Ec5mRfvtBbrwiFNef6",
  "key29": "48SQkS5un5jWm78kxnvPJuuvw4wdWWe2nxJrmrLbjwMMumxvWC3FX9aPaAw45HZpE2W8oLMCxkMqEovfZ5wDfxzF",
  "key30": "4YwzMfE1LV9rDtBAq6jKjwCYYBHPdw8Mio8tkKL1fEsMod4zE94zXnGib3oXEySgwJHHbow2Tdr8xmoScwEw3MfB",
  "key31": "3oCFUDA9QrHsxXJXrddeekJNArKDatg9Y7NLDSnwyK9f4zj3Rtq9ZnAYwz8kbNh6Ne66XeA8L5agDyCKKLeosDAY",
  "key32": "33ipkU7VodFRnceeLuQKY4ze12BbSwgMjiHq3GUTQWQ3wNaBV9bKHFtjtAR86mmNp3BC3bYkPZ5UWjoGDnYB3c4m",
  "key33": "5aSkBA5b7NtZnnMQogcuYr64dLHpAqXmDMMokkkPzxrvkEBdjUarBqGThHcXoHakujypY9kKuMpVFkfWExgmQqj4",
  "key34": "2nZHNEEqNJ88RR6zBmkdC8YDeQnb3SsjZQJZKi3i9WyrgeCjkUNmMtimnYQotdbmCLsFfvQdJ6QkQEQn5T1hs9Pu",
  "key35": "5vZqLbRxyizBcK5LGNuvgtNPRk2AjA9FBYuQCRQ9pHxavhEwwChvB1epAsPzzCu2BA8gLUbdnu9EP1V2R3MYQ5iS",
  "key36": "4JgGuZbhKVmBBCU9uoQKXd5X7qbVrSdLQFN84YmDAr6QPXZnzido4fAUYa5rf6cVnKgjZpXCZk7R6FaZEwoFEY2n",
  "key37": "5vPbTxB2MtpyftYt8tRFxBqgxd7KjdGQQcpxvCuGKPcAmkbiLcYHu3sigacBdC1jgE26UZucA9UADD2sJ3ffxSid",
  "key38": "278ryU9YBq5rBmZczcB3USqLiW5bts21PY1oLvwMZi2FvSBTL3aw8utv9WEitBpyHRV5KcRi3nWUuRN4NTH8crRM",
  "key39": "2uWqe8ogv7xF8jVtCWifDVVq35WbLscPfVSbepmmzt5XSuuPsYtsbydBbSp98ttvM8Wq7AWD6m4SM6kc6irHswck",
  "key40": "2nUaCcsHdEv875M5Nw8Hirigb8TCVDJcYoVjj3xY95uRLTea274fNdrr6XqvxUjhG3G2e9UYQaUUxyadxsDW6Afi",
  "key41": "nRp2RSSbcAR3zFXa1KoiLSqA4MJVyJfM7XS1Et99czRkkq9uMkUznQCK4mP9BSCR4Z25xCf6NYZSYLoaMamRyY3",
  "key42": "rNTBqo2aQad5M1JzoaWuv9NSoYmkEVvBQZrf4dGGvGASMuCxSTbdohgr459hYi1T7j4dxu525nfBfCgkoigr5wy",
  "key43": "4BHKHvs7ra7TsuMwZMgRWmUnqbx6cX5AjjwHy6QgPcLsXvN6iXY5VgB3RtpZPnDqqLkpGhevETjHoLNCeiys9aop",
  "key44": "426MHzHtVh9tGReGJMZy77c1D68tPDuMFK78PZCFzmqtEcGr6af1cd7bkwnLjWByDxw6xDGK2S4fYZY7eJULstnU",
  "key45": "4jvKEUHxZSZbmGxrSmFeYB1XFLcEVPgjTYTMXZCyAWZzNPYevcaGua96Qhfw5ZjutKPdrJ2C1s94FHd1f5a24nK8",
  "key46": "5TpCBGgRLrxL7ik2B36RaKjrVCzqszfJ72qHmw96nfUQxHpgsbbANBYocmZZPixYc9wBAnEcs3kZjkEV6aPrSumP"
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
