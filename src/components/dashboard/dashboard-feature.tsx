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
    "kqU1HJ6vFNUPX9u3DKk1kLu5VXUdJXAjvWUDNZH7zwD9QQbPSzzSGCB9YYhQxpqhfghw9qZqGiR5tAfGJAP2YvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHVBFHnbdbgL4g5DFaxm9jeSLpcqusb7jWkaEzWvgEPEZxkq3ArQg9ysN2wKbjE3nDPFhuqk4oBn3h7SSTNJQRz",
  "key1": "3H5X6bTK6FNP8LngqL9ixPWz1uZNkwEzKAhQEHXFgEjqq8w2VAusuE46GxnMJgLbCngzDRNzKioyA1TZuqi3223J",
  "key2": "5neWm1KLEo5XNEV8A3uJCCNzzqvUDWzRTJqaxQBfeNfqZw6r6voDqRArWhoy3rEFjidnj9qJsesgxfSdvT4iB5LQ",
  "key3": "5U9R5NBQv2YWb7Mh8DjwfcT1pYT1zY7z3DT6iCfBXpnaVMfzuf32aMxpm28N8L3FAFwai7dZEy7PGVjjkiR4prGt",
  "key4": "2Yjex8FVQf83c6JGVBHh3aTTKhDkmW4kEVoZiXQQCTayXrWCD8hNp5dBn7MAQZNM4dZtG2SiyqbWWBU2p9z2QLbN",
  "key5": "5eL23twoYqVtPpmYxQxhUxoehF8S3FKXuzUfD4kRvRen59i1iYzb8cuJcGZcfpQ4jKp6obP9pTniY8DwupxPBFYa",
  "key6": "3rfgg8z1RDNGc69czquTycK2ZLHCnWuaQPuCg6ZuCu9sYvLEmJSHMSLeEeSwEJbxsdwcJ5JLygkh1Toxg3yJy3qB",
  "key7": "5mXV9GSs1rpGNqMh6EX1gzmsxm91rtGQpJsBSizqXPy1dwyjsQEeVwZsn4RDrkCBpLmgbfjAk2f12HhzjS2NUYK8",
  "key8": "5bmqQ2UF1FANiHbsemAYcLut3opivEhdbhxnoB23PPHhhCdKbRVrRpxCgJ2Z1JAUsX1hwDMBYDv87Ta5t6pxQ5zh",
  "key9": "3WDu1wbdnmmrCs8NuYV76r8mMKEQKwhEsKcFWodZfTgiUgb4GCwJsZyRhMBuVKieGbBNd9NfMNtj6R5F72BftdzL",
  "key10": "SykUmxFS49fC1aian2n8S6FV65DmjTs7Wfsu3UbejXsHXh231stKUpeZPR9DnKe5k5GDxaGLW2FKFgMjczbyxKi",
  "key11": "FjquLnhY82aYF84yj4CYdeZDHwstBrGYB8hTXQDrTGgyFXpGykhN2uUea2HF87QT1kjia1DQrnrtSSS6v4DPVoG",
  "key12": "4xVpKAGRjecgcHMZWH2zhfz2wJGGKY7sbro732e2MpqAuy97RKCwugA2bBuEMXWJLXe4upG4DXnogB2L9Uh2CCno",
  "key13": "2dhyquCpNoH1Heruu47ucbmLMMqVt8SMpfgZskWxVkU3W8GaDLtTexLPy5b6EkNvoZvwgtqSVnZfvAf549hS87AU",
  "key14": "51d7h4kpp9SY9hBHMrB7LkJPCRb4N5GERA3wMVd4PcirzxhFWg4v9ziRPAZr6S5WANqzyPuXTkKf1rqNBEdRa5ky",
  "key15": "3cNpW5PpvJFvcRP1syYW88p1f849jcgySovYLywh3VrUeVsWPtWtgGmGC4i5KqjGALCxvmPKtS35ico26abnJUSu",
  "key16": "4GvApGszLJn7NQrDxWkRH119KySGRq9gEC5VSrjDYq9J5FKPwFWYa6SZxRS2iYqtLwHbcY7kVa3U1cyhnq6jUQDZ",
  "key17": "5HMf8bXjnf3SvU6XVheU2MJkfajKHm5MBQWNUf2R3EYvTuTGq26Y9HiqAVLAcLGqghm7XjD9coUkwQPUJe3TMQR8",
  "key18": "93AWtEbngzt2ctgaQjhjVVezYJnczYW9pf9jnc3G5Am1fT5DhDoaw14eLRAwWb5YmCFZof7FrK1iByH4pLrYatY",
  "key19": "3R49iCmCQXwmBq7RkuDWzJRoFaK8S39fmXjizvsNEDCXVHWXVPkyV3RncmWvx8CBiEyrbuc1CuK4ebW7XQDyp5rz",
  "key20": "61xzcRhdo2eybvva38WcfPVFLWh7QD2ARbs2Lc3NbvAeic2GLzRTiUp5V5UEfUtRwVqYgP1dWGAw6BJKbmU1ipeH",
  "key21": "3iK2aFdUxD3ZqbWqMDQZRoH59xozkYJx1LhheR4iLDsc4LefZFAwnykZvdzv5cXrofKCZESj3h2d7fuPzio2Ebrh",
  "key22": "3McJLhjhExzaoKnWDbkviwmiCU2h26GmtqtoGY66BcACLTMpVyZhykJ5o94iyZPekWQgZbVbXZWXGRepJeYhqaRn",
  "key23": "GFR4hM12tQFguAUo3VN97JMKG5vQ53tMGCU8snxTAGDJk3rNzwcHgUp49RSkUZWETsM5T5AhMSTQ5q3ntSC9wfW",
  "key24": "4rwNvbukQiBA7kCZRmLHTPLCyiuNvf8jTvGDRwC4mqTpaya3jGtPnVHgecSF6NJwMrkr7r8Wor5dRYk7UYsAtTbn",
  "key25": "3ZHPYQEc4pokHibinCRoZqohnDJzZ7nBCRLoQ1W6rG4WZS8kMpNdt5fXysA3Z2jDwdZg6tCtruxSUafUnsB4LGUj",
  "key26": "2EFSjfKznG6V9Ada6j9U3Qxs3Muck8yF7iLZ1uNixS5vTKareGGNFPwMENGQzTR4rMt3y9AroerqfFtkQoNG1fiV",
  "key27": "xfuUkpb6b2pCng2gsGM9osC6AgFYYU6LDsJaPpDQ7fNo5hMVPQgFZ2sRhbgaANg6H4oFT9aeKZHjMW1iATuuvzR",
  "key28": "2VvSLq5JvRoBcdWPjnAbiaQQv1D7vC5CmiXeBWUubikkXpWiLT9HEkdUjR9TxMchjzBcaSS94igVk53dbZwbSkN1",
  "key29": "3kVaLdCsyJAHpUEY67jE6Tq4ip48b3bzavhVDSnofsELRKFdeQT6vKYDERnhi4pxkH4duusFgRNbJWydWEgE8s3g",
  "key30": "5DdGGmTskQKNbzjqe33wxbiyLGs2WihHkD6zpQPQ1ikiYgPMzfrGc7Jaf3p3JBnhYfjRbLGxZFCQXEBz4FwBJbvc",
  "key31": "26VHnv8gkMBRsFtG1ZcBM8JHbPWLi2kX6LFut4ogSneguVeWqGgE2VRRCgaru6mHF9Xv41ASCCDGvMkEpDtg6e18",
  "key32": "2dgDG83jZBHoBaXvSwqRS47M66E4EbTK2SmiBKLcBf9PtNvZzYdgUfwB6PWKuHSKVyQVBvBTvDaxVovLrTpV9Do9",
  "key33": "4JpgqDm2WmZeru871Yydidkek1Sq3n4P2shjfbEwM49xAtx5edBVZA1e2pTgAD3BMTXLmkYorBzewdgXaxiqbHYN",
  "key34": "WiUgjaabAyapeFWzvcKzGitaaGyxhUCv5dUJiWniJXqmixLRU6hvK7JNTyJ29gAGHekqM63dnKb3QrX8ohBMdVD",
  "key35": "3Nb1pjBXLUxX6AyAfAFfVue8CagT7g7UntJa8pRFV6kVE1o5QDcQab6UPYrxToibjZcYYuKEhnxCLF16EHMcw7CD",
  "key36": "6578cvSKAuBJxXu7DVjs4LJMvFTqFPncG7XG6gi4iGrLhr8SgDXXXZmMhPryU3CzFTNNd6WCUDDoQi5WH2fmC2ve",
  "key37": "2fJutScwRP7b9Qczh483iRjdKZuzvpB3aWjSTc8vvZkxVpW2TBYu6jmtjpBTpvkapFg5kXkYKHtuHgo9RmtLYJqS",
  "key38": "5wSgoEAUUJ2oFzUJRn2kwJd74CVbKALrxkF3YAEN4LsPkSj8JRzWvGZ6WNRYLSVA7trP3SxoYWYZ4EBinQZYXNC6",
  "key39": "4EnCCUhG21yS6bwwNxs6iXwwUsbVhDpcs2pAWY7tRHga9eJbqoqb8gRyBcz9t7cFZbtspuwgEbAVWdWMtFbsYUBF"
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
