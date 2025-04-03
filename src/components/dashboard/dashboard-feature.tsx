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
    "eceSpzY8TxFgisSGjSPgvTyxux6jS1Y4ysQMFM6wrQV9k1m127kqHQAYwAvSBmy5Y5g2X5n9wgnvixmJWQT1zJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pumpYFkHuaMPgSQvQbvR6SWUXaJmUu2aKNY8yBxtxsCpxzcF7wRGRRompJLQswpaSv5Qwq4BPbsT6ohy68kHNPz",
  "key1": "5FMrA62LyKJz1vuo9bJS8fmp9m2AfAFpBmy6UHzLzcojbAXzaytEC1JTFJgb4umP8KR7tqmEqAaS5wEE313nHDnV",
  "key2": "cAeLPgmrforHnYCouw1bpB9ugV289cMTnhr3DccEUJsqN9NFvFBGDBfEkv2wL6GnRCt7PdZi93Coh5SH5q44K4U",
  "key3": "39yteKMrYQxaNxa8xGX1YgTjUfWA9q3wVCtFuUea1mTpvVvmWkxA7iV7gDzs8AuNyCK7jWwgWnSqE8WQ86Boo5Kj",
  "key4": "3PvWcJLuEh2uBqUuR5r52mFDXuyMbwgj7MBbNkhj7p46yetq5CPwmkExZEffMJzAqqrTYzXCSfVW1izM5rSWf4AF",
  "key5": "Pyvz3mgTQcRj12jDqW7LHNn5fCoHcLjb1TVjcuKhrP96GobtqYLLdCGcqpZFhaNHGYp7M3W4byScr1NcC9bHjeY",
  "key6": "4rWy1g4NzaP3BR3jFWJZxQqDBUr8KhWTMFpjiwTxHizF1wNoE83H4MEAKrgsvnsAzfS3LPFZwSpC2NcgETDW8Nk3",
  "key7": "2dVdpniZZdhtrarGhNQUB9q5JkTnin5SfEbtEnk9qgpxpa5hwFagvG1Rg3wMMjDZ3Ax5Zt3LKCDZ29MrKSN1Wp3w",
  "key8": "2Yzq3JN5X3x2cnYkrZDPJM2x1BjPJVzfiXGfhCCV7t6gkhV1rfrrUGdJgrv25QdXsMK4Y1jmazsqbVaQqvMij6jE",
  "key9": "3x31RMuYbPiZKpKtzXB5FJmPxvpDhcUD6ocZHvcXczRyhwXR8FMKX2xwhWmuEaNvF14LBXHMVMv5L9c5fFTiTRAg",
  "key10": "UVnu1cSRJXa8Bqm8gCYjnR5k5PKo2mC4LEvNp8izt1Y4FkPKCJk173GdZXh42exrzPxiXKhcrBwcKDuxDrdhgqg",
  "key11": "4Vo1xuAWssgFBAVMEEZ98LJ9zx417f7RD23uFeL3AC28qUKbSnEr5AZz1eNJvLBqKWgRy17Hmp1eGJ2cRxjC8Pmi",
  "key12": "2YcdVeA9qNuJqv1mFKJmL9bytoYSQ22SHoJTJBym1LZEUGWMBGXThWXvceanWUfQDdo7sitKkgwvdMTHp3PpQyn",
  "key13": "qL8zxpWzS9TpNFaoWS4H57QSPwZAimy1qSeZ3Gv1cu8bux11mrvCgLkViZMjxkWijk4QaqEJMf9Zm7hGpjX4NEv",
  "key14": "5wqvoh8pyyEs9WvzFQH9tgafogQwJvS13voEGKgeQ1cH48gjRbs1iLzNauYFnRkokYdp1XzQ7pw3dziv9nnewTy2",
  "key15": "2JHjZEwK9jZg9kWRaqgVVoVAUUWV9NqrJjUkpcaFozkh6zjorGQ4XRzQ1WFZWort1jiS9LGahCQCrfy9BmHUxWjY",
  "key16": "3VJ1sKJcbAhEFcdch1gRJ9Cfvr2M4322nTxg82esv91bZfqCgBNQmM7r2D6yMqtWgESnMnWLcpUXm64NWpQSZsNN",
  "key17": "2d2TygNcv1oAjeq3mG8n7dfpeUfLbTk5reQSn1qZrTjXM3EJWxbc7Vya1F1d5KPGUvoMPn5kw6fM94dP4tTXtGfw",
  "key18": "G6Zh9t2umLWQCuASQVvsu7UtCc3a5uRsPfyzA2qrusNzJn2spmqqTe1iteF8ua9AV8KbKfSctoyB3xqbeeYm23v",
  "key19": "5dWcfba75SwoovWGSqukZohMLiLQ8yzvKPbbAWFvg5qUMHHaoRnKLGRvqeWX3AvS2J5aUyA5X5zFJj3E65YQ85Uz",
  "key20": "nztS7caVhaSoxdUhnFN7RCUNya5tLKDsT5oZZzE18PaKUAq6Ujz6jpwxA4QgEdnEu6NNM9aG1jyYXspodwtD9rd",
  "key21": "5zdhJr3BN5tYBDnRymmTH4ip1pSUgeANPRdecWZMqaeQQ4DS6qfYgJhAuNZQ1MUtBRSCQSdFiaq2uXEGxGnJkjLx",
  "key22": "67Z9cMzQCJC42rPWJkeMt4cyna75XB1phagwHf8T4WgCg44NURjpBCSuqS3xauKmjBHmQTx3YBttW9Bkxa4pQZ3U",
  "key23": "46q3d38HNech8DZDkB9SYLKgqRFC2meNCqjXcFH2xC5QTiKujHqm3ABPjAFSUYpKstqsmMWfafpJncYKPHVbgPHK",
  "key24": "2U2FG3fGFfvm3m9AZu7KozEVqYrQHzd3jS6ctewM1hfLawpH8mm1j746DYTwZzKtWBQeBRQvp5dRaePwoTLtGe6b",
  "key25": "3cY92bu5rJGobC4Gn1wXqFRtrs5mwTnXZ9uGHQquYPJwEis83bSSYSk9rmy1m6RPyyo5M6pcSCFd4nof1Jd821Du",
  "key26": "61i5ncZ2U9e4Kxs7GbMt8qn6JrrqQ7zT3jqMeXvyybCqZdz5wzjN9i8ARgHGM9Ye37RbRQuXNEFWRNsJQ5GhsC8g",
  "key27": "23M6qqrYGmwHRA1LyYv3zHfXJufGhC8w1EygxM9Fi82Y3ymdmq5Gx5b8a5ytTuamfaSrKiiwShZDxpm6Lo9pURGx",
  "key28": "48Nqe45zvX1YPjZZPKcB7WjEYa6uZiPkZypmYLGbj2UX2eGxUdUtVZAzhD9nR2LWH9vZ1cVSkPm5hDTjkMxkiSwG",
  "key29": "HsZ2puETKrJGH6PSxXwZMebD4qieNhb7enUusW9ZgwrYwwGBbMnMGXRXvgEftNV7jGftpjFLs4hygheH2hN2cB5",
  "key30": "4EP1vFCGtdWuhKjyjXKVafy7Fkp3JbR19PnmSiAitJmYkwpYNHL4LBqGDVMAHbhbCNFSFYABmXdhrjMjCNmUSjuo",
  "key31": "4TqSawL5SbM5kZ3viqxDA9UtsBk6kPqvqGrF7hiadWJoC6nVg9tWJWPCKehx7n1fRuoJpXbG1C2zhDasXJhC4Pc",
  "key32": "KbJLoonHtMyVZLPjjGubfDad8CNcXR2We3Uw9CtZMPB22WeHYj9hQbFo4eg39hsbiLGj54LUv1rg6JTYGHDMqMV",
  "key33": "21DigZ1nZ6vMfw25s7NoTHJArbk9wJnrtVxgGJZAgrzZVYgNHEeGHy3fzDn6vjkW87kVrJXhptEioBC12F5rZ55N",
  "key34": "2EXBsnrxjahoYm1C7vuV9JKMPxL83jLjMkREajXpF5jH5ceqJvARiDWnZqRfSFYTmjpZCFDVU3m7exnJN2H6qNxG",
  "key35": "5ZpwCJsVGMZ8UBsa931ZqUGNz5pJpiMdcNKBbBNc6zekzRFYfPE8Jsdhcc6ETqwwqL56ztRzZHLNoumucQB7GYg5",
  "key36": "q3qcwCvWDF4M86Mcbwhd4YahoKqwQUmKd68BXLMpbzRmgR81ma4qAhmhtyVCHaqC29Bt3PkWu3bDxYPoTSoVTS4",
  "key37": "4MbreHkLLS2Kr99hLdGpJLwCqbczapLxGe8ERxkDQ1r6PJp3nP3bfKg3G5uZPWkQBGR2cWVVpB3NJCgaT1ZMDyiE",
  "key38": "3iHKp35yq8dHRgDeZdaejEcm2NehLqaeepDtzhypyuodnVu5GW1BVdaWZQrbq8nfDp4SadL3SW4eMJRkmcmWnZS6",
  "key39": "4UGqdxsEvFjGE2uye2bdFGYtYWK3UXsrQEdmDFRcNyD8a2S45eyPAqwL2GEej2X7XJ39ChZsC48Rbf9prRMs3M4b",
  "key40": "3ubPSzkazxvUgymzLutMiqMTqrEK2pMJw3CkfUZayYXwT5WXHUh2vpKjLM4JJtHMW5db3qtYSVeL5q36iaKevNZs",
  "key41": "3UZy2rYJJUccybT9cFSKzw14j2x73ZJ83RaA5aZqsRM4ezuS8aiAh3nhErWk4uXYi3rq3ZdLYf4n5kXP55Jyu4Ti",
  "key42": "SjWKJ5SvxUkSFKDkKJmJELLc3pv8MDdToiEm4vYcyCt8WNmrQsiLBRZShLXu5NTHCFKuV5354RvkDMfu6cd3ogh",
  "key43": "4UuvbYo7wsFWAn6rcs4QBJxFzbXKLky1t4qs4Qan1zcYcazz6jm9Ze1h3tmCHmqsukZufHCXzepMdXagGZ6t5Zed",
  "key44": "4kTzbr5jLJPFeYDVMaiccF6WG4Y5FfWhuBRzSS9e6Y5tpaw6XrxpNzJVLBkCyv5BQwxLUXG4gk9uc82XAZKUJn45",
  "key45": "54VSfr1kaUgW8LNQCnxB7uR54KJ3pATkTeAquZDwHgNoL1nRrrnjfwRC1Ni8TkJkuuNy4u2ZFsbw1w6AygAWyYZR",
  "key46": "5mqP7MDfUsRswywbHpXqDsGtm9jFediRTNAMmE5SppsK1W4PqRivK2PrrbrQNpGbggPeAM4iKof8TLPVhp6iyjjU",
  "key47": "21pgbx5gDQqBzPh2PGNearDRWPK5ajiq6jFngPrksHUWnXM5ozixxoLzsoauwQshMap26WAjnonRWMpxbi1xdULN"
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
