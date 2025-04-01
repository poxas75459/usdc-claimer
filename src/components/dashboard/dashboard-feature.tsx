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
    "2yrW9ZhUNzkLhx8BuBkBVsj6cJtED2NEEuTVXVDfMkLyScHGSThpEy1WrfPGAfXmmcbLf4587JkwdGgWDJwgmNgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CX2MEfcnsTZMxLkc5VBkCwAxwpE6Pp2qJc6iQXCt5zioB8Nt7PicswQBWABuKxUpftbfTXytuHibxpiimqxmfsY",
  "key1": "5qLkRA277FnBqaRykJ3Xzc1xhZt2pLrpWd7DWap4UFbtfBzkcfY3emKhUNUTdr75VweiBhKQzSGJbpJvCbbbmhFq",
  "key2": "46WK4vUjrq3qeKi7myZJrtb9o1uUA6u7qgUtampYErmqftDVaLduYGNt9iZ5oTcvHCsg4mqnpUfwtPGkD449NRet",
  "key3": "3TCyQfXSpnftnKadJBty62TX7dveYHGjSvwGLbr4i54tYPianmBAqVUBYm8zUzXVoZipoW1fPiPdN93XJZ8Rwric",
  "key4": "4Kg2HTmxkE9zwgG7Sqv6Bn3LLeS2U5XZkCktEAqbEtVLEWHpH6zKLgtGzVDTGat29hPcd4AxBqXtPER4cmW6VPy5",
  "key5": "4FHmTGDoujAsqS7Hs8MGmmVDDFGJa9wVxAchQPPwqXxuqVn5BLKYcvPPHbK2JnhK8Qk4nAZquDoKe4nkGKb5jjJo",
  "key6": "5aGvKDPLa7PQAVp6GMwXVnfsfF1bkWPWfzovim97CevV74kiUrRNNxAJNETrvqw8KCMWfRERtqcUJ1MiAAuqo8vb",
  "key7": "5A3wpSRH931DsWLsae4DuhhGNBBpvdZdUAXym9wCcdUUHPTMnQdMUCrVX8CJoxxt5XkeuzMtVdhTXFmSaQ9ouPPr",
  "key8": "4gjfgJFWjxHSrdpfh3Tu6kv6K8ak2DvhRrgAvtsASRBdzwTeppomg9Sh5sWVv7eBQEHEcZPLS32ThMVpf4nZncme",
  "key9": "4EtjzxMGpAuQQvf1ANSkVd1BqMWyk4nHTAaZ2vASxFiPZYrQHzoMY4o1reAwmm4UaZnzWA6m74NAfpEFEo7k5ygq",
  "key10": "5MDxjfQ2eVzF4dmeiMXjiAzCnEyLqzXvzAC2F2dQWp7v3iD8SgTXsaQtMw2pmMuwJXBiqvsuA99Z1dNZAptweFti",
  "key11": "4ku8WtW5WEX5TdS1aNDYZXQD1GMkb9nw5TDtvn5ExwVW1nmQfQHQG6XnoBQH9DeJRxXE16os9xxcbmC4tfJeCgm6",
  "key12": "4nvUGgvhPn8aozVCUNdXm61AauAWvjcghyDWH8Sg6vVGkJvp26tm65Zkhg7cyC3DzKkn9enRtasLLCagjEw24dqi",
  "key13": "22rGYNRSbTHHXZPiCUMMVDnayBpRJxqwGkTYMphrWt6i8pkKgx3hF8EyMKnzmqzxLqtKtQCDUH34dbixrWTkXhJL",
  "key14": "2j9Npb4cyYDi3qNyXXBR7H4emEUpHfKqWExd5uB7Axo64wgwM3dsZmMPuZ1X6YGWqsKQz6xDcGJBudyBSN1YoSdA",
  "key15": "UoPEiA1GGTfb7o1QBreFeiPTN4vFrs7aqfZEnKbtk5i1X7sZ6qnfsW6MAzXh3JyzbTA8vz84583JzUGiuXozC1z",
  "key16": "4QT3ttEWDQvw8xgPDsPMAVhweoeW1AMRp55NyHmgdEV9qaBGq8B4UxTVQg7Kvoc4U5qsV5tXYgG9bqarQ9VRbMRG",
  "key17": "pbWVjuKk4MfTDqmurxJxCmkx4jFDufrhV9rX9PdyeYMR5dhha6z6B9wxpNJ2XQiLMMzGxVTE7G6Kie6QH9Ztsm8",
  "key18": "3bGNXC5iPeatjgoJ6c8umAfGRkPRTxzeUQid6TqXMxYTSmKBUC2GK9gKUSJDvPDgXEVa6uXQMWAHof7jYqDFFDEv",
  "key19": "5AwLkGWR7Z382r5f93ainkb2bLtTrQ5K9TxYWXfCKgVMGrwGJKv28WvW81iWiguxuj7grKbJF2RH6MRe1SodWFc8",
  "key20": "4yoVAjsvdKSrvyvQoszyiFa57HToNqTqGp9pzh8AQE7cxXpihgn41iUzRgHaHddQXpKPR7XNbHx7q2BtCFcmNX1Q",
  "key21": "4AKqf6u7crXENSwPgTW8W4coQviG1sxBNxFEgGLNEeuDfCLKctFKa9S3gnP2uPtSEJMZ8zu8xPSNZVuScvpz4kTS",
  "key22": "3jGXEUod6uVeq33b2agojQ37M8qLinqDnG3iYsEKDz1iS5dyNLfp3fuGyhRRg8ksmj3WzaXguJbfNYokZT7r1neb",
  "key23": "49Fm5nKGd3JxZtWc7dMT2xnwBCUfyWQeGfT6rjKXHkvpoy4hhPpZfFsJfvr4REKBUBTbCrvvtgfK75wM8C2Haq6F",
  "key24": "8vftv59E6uLVtrNYmFJE8ARv21LA5zGq5k5oL64VrHvQueecYhUBxXpqJKXFsNtxAetVwzkJUe3BKsUbq4d6X1C",
  "key25": "3HRxbcsv3mqBsbB8zkbDXecCEqeTSym1BubkyyXMJdPe77J3Rj6uSkX65SKpCdencnhjXTjAP6sNsC16CC2BL4Pm",
  "key26": "2M3hE9QNdBr2tTLK9TkQC7rCGtnJx48RNknEj1A1dXDwYpt4wXQPp4Z42oiiAUN9r9FpeX4zDjkBUDB3WEnJvS4A",
  "key27": "5QSNjfTB9B7QUqKEoyjwbzxeCSGZAn6YuGodhgWB4HqVGhiWh15HN9gXtX6SX9VvddhHAp6vsB3eDi3BthTKKXqj",
  "key28": "2HB2YZpD8kXLBXbbZi5k2o8GMBxbELwUNbQ4nSazhRAJMB4GHsvZe8F7uqtc1TW6acNLLhL32pzKogFm1aUtVNid",
  "key29": "4ouj4ZqS7Cwa52Jx4HoQdzYtRNWg5FD5HJHoBYR9M66yPpd2Enn4fMFBjig63tso3WimBr2AY6novnWQXGXqKVhj",
  "key30": "38xo6k29G2LZ239MuCgfwbvWtdV5Z3W6y4TdMf8G8oSPKM8RgfVJvfw4rcW4JdYSbktpB7i3C6Y6cPagrNqLavVA",
  "key31": "658UTkJmPtEeNq1RgeZesR575PG3aM6jC6GZZ1Pn2izw2n9ZGo3oYggo2KvC5kJ6rHzJBTyVawepqP5antoUEhgh",
  "key32": "52Te1T8rj5QPBUcBeNphhEvMhpXTiWvh73JSA5QV6eYXHwyyGhHeFtr7Nyzz1qdpCoyHJ6987XPbSxccvKnUiRX9",
  "key33": "4FvhKuWRqDVS2AYUa1jCBGjnne89Ui6TGbzGDcuMMUj72a3PBkZs82vZQitom1rBGCJQe1DeaX8hmT98dc38jBY7",
  "key34": "45i181NSnL6ExFnAFMEWCBJKBZi7QLk4fEgWCJmon1JH1KXrvCWrphFupHU54iWPuWzT5wnxBQK2t8s9o8WGTYNQ",
  "key35": "5iBynx1iZL1f81aKPfxn3xFKcNw8ZC8J4K7N2if8pCjJhVfKtkWkmrBh68rA4jQ4vkMgPDHz2SmqDtYAPuAz2NmP",
  "key36": "2B82Co8vd2fTGcSfAENYNtZEiLEWwXvpeCXQD3X4sGorzhwHYjT8MfW4m1E78ucqGrcsVK2jmtjJXbYw3AVW6RLp",
  "key37": "E4EeXgCCFCc5QqrimEE9bscPa3ajtrEtifvEd9HYMLAxASAt7YZHhA6VaNVYpeduBNxEo3wTySfNzQwH9ELgWNx",
  "key38": "66vDCRyYPAKTAzmz5ViTbbcCEZFGMVrGyYXpytM35iJ22PpuZUGBzk7QD8hbTNhcQfEcXJ1NPPt4KVtyQj14odTC",
  "key39": "5JakpRXazRn6w663tdQi5QhNcArsLy3VYPore5fdSPmhD8gpJzbTgb33ACVkPbRk5mG7i6fNWu58WKzXdj55g4dh",
  "key40": "4WRnNgTViE59ff1qmoxZf1nRPHyL7u8dRYJNchsHGqAYMzHzty4cSoMEEzpcWXvdg2woR3BmEzuDm38Nf7jwkRhy"
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
