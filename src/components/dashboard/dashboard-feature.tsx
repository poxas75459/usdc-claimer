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
    "2BNXL5JvWA9eR77pKsYP2n84sGtQ5ihdTGt4SCP1njPRpYcRvxYFvZNhvwykpwCcLaxqUqUd99ZfBYx3JKbKb9Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSdJy83RhAw1txFKMEJSzxgowiqwAYz5uq6XfaaD4XLkmJG4Hk48yXVXi6RqJAdrsr97JGxdUNYt4PytaUtv2M7",
  "key1": "5kdjV2uyQsF1TsvqpUcUWDDDfrmG9qKsDGSBrhPkXtZ6szUv3RRJC3asF2B3Cj8S9bb2pm7BnUrk8rAZgeRPPbhY",
  "key2": "3qQavEHRuoXmhALUgeM878hrLyeexnRZVgsNtXExNKZjh5PYM72AuiRLGVQ8uTeFFBpgdPGzF95vCt6rW286Bmg7",
  "key3": "5nDZxzJpsU1H2wADej2Se1e9B2B9vKPKMfz3C9SisD4TcMsiYMotXWPWjR3S4Hh3bfDGqp1pMYPDT3XVaU1bur23",
  "key4": "3CX56n5pepXL7j4YNbMhwcVRVeEFtKeHYhbWyDY9B9NnJVjKp27SfQUXwW517VmA6ARwBKvpQPitpaUoAqQe7Yii",
  "key5": "362rQVJU2U3Ky1fSsYDRSYheqHosvZqkbwkxUCNu9t9Wmb8P8mP9jw2GP7qr9fsTXZgN2HYY8ZCPpTAqC4sKuY8S",
  "key6": "3BSRr7fWq9EWeJirDWGwNVbREQQQbxCjmnc9PnZurfjV7M1szJrta1qcGTF9G88tyJgkxTTEo5ABRcKpLEKMCzMH",
  "key7": "2gzfz6vgiYiywG8K5RRNhLQsue54LxSa5XzvRyjgsJjvnqgAudeztEepmTT7Qu3EYhHVA8Ji5zHe6EA8pRrmgiNu",
  "key8": "7NSuccATwt64Z3GuwQTiSqtgA9W5vSgpw5dY4W4ra1BkGjeWzCBXnEdRWkBKmKsExjLgZtHhKdWgDFHh2fQrDcW",
  "key9": "wHk3kY7AW9ifkiTJuk1mFHSZDwCibi9XxxANyXjExRH3Wv3TCeEQZ3L4vaBfcSRrDpo3MJ8kK3EFzhN57NKsn6A",
  "key10": "5tLDiQsXs57c3x12VPGvF8EmmM6N6bXym9qkNGtZcgaZXevQ4tNUCWwRyKDL9nWtSqsMXdjX96rN1RfAgMkZoxjM",
  "key11": "2WDgGht92AG3CnXvA4nR5abJAF48vwyXkzDmKYdG5RiD2qt33e8zc7SyrTcS5GfY3UpTifhFSFVAze7J6HDU1LLX",
  "key12": "3Ee2786EMgJHBYwgwRkhZHQ8AqURfDp2JucdyiTFRi3wAPizppTPEn5oA234vYbSQKUvnX4LuCiRdHmbeBynTguR",
  "key13": "2WifVDqwwf8VzoZLaMUBfxVC4TWT6z3nU1gYTorEuGnGxD5cU2k9Cnqz3irUPRxA5bvxmmmrdxupDbBunm3cZ6tv",
  "key14": "5QJjYzemw9kSRQjQK5zYUaxjr66yxXpqHbqsPH8fg7kFYNaHdTLtjn63vq1VvSmJU9ue2Povh2cRWXSmyiQ9UzWS",
  "key15": "KtHeJLE1mHyepJaJFKbY8Wj8PbGJXiBFB141y6Wof5RwMcSTM3ev5CtRfFMV4rte5D7R4m645Ce1TqhnHoJdwZT",
  "key16": "tZxVtetV9HoGEXnLV4431VHRCBj11rMWJJTZGfdN2Cf75Xn8pha5ka42fQYGr3Qub2cW4fk64m5rgUQfMj68BvN",
  "key17": "5CKUJfMQzRsitsKtNAWgkJy9e9x8vQZfuJDFh8HSx9u2ZUgkY5B1YQy9i5rAeXxjU7KBAQ9gmAScf13jvfT5vAwS",
  "key18": "5ZwBS39xmqtrdw9ncfu41mYZg7kdx2fV4p5qKszwdPFmi58GpZ3SiN9aqBk74X5Uvw17EbYDVrkrQmoSGZbEHCjZ",
  "key19": "3ounRNSkFJDWrS25fzC9pKgnsaYoHCMPfUGoSBYnSsKhi8f6YnmvMn3LhjUo3YpFThgVBSFhMM92m522dDgyQf2W",
  "key20": "67X2bXg8ECoyGGHQXqQMQa7DB9ntBWLJdtTSScE6z68WQq7VZBr7Noy4UzVv4kdrZLEHf3i6io2dgW3837xPvK8L",
  "key21": "5Acq7sp921cuWxZceSoevgh6goPiVjmyP3YT7wnyjFgzGnfYtpcrtbL5FPhpoacq7ht4BC4PK7Wi6rKhqEPFHPEa",
  "key22": "2hriSPn3Kbj6bDx9vqx9Lx81JwoLDsctTzcbMuapuiEXn6oxLJDGGWA2FjqgQvgQnQY3mjkUtNkDUqJwJf7YFPLq",
  "key23": "3aWES9v9Va2HzD7dGpyBDVwMXQak5AjZpabNp3bSM5dVGeFgXa6AArUYSV9cmK5XV5f7AUH99FZZmTWqVvSrPK8L",
  "key24": "g2qQrPBASUffaTqm7NHe3uGrCBcJxfxUPawqBuRZxuR8a1FGfh4PjU1tknnUVopTP1RPTZvy3Jqn2jmNpoXG4Z8",
  "key25": "2cobcSBX6YT6wbgzgHyJGffocJx1WS63BkPn7xhXRsngTTZeqx7Mpxn7ViS4D8UZihJnPAxNMZwW3831wYpSfDqY",
  "key26": "35kTb6L24vGDXLRyxes4hs23cLF9LVUnMTiwGLi7uRTXg9wUrjcn2fARyDv7cfTUNAktpXdPaCvnTeXYytydurJY",
  "key27": "hkNFMqpEUZ5swKcsNs7KfExaMSjQYtUca71BLrZDS9wsHsXitJukHx9nQCVt2NFUwhQQcRCXRwY4yBc5s7JWXwU",
  "key28": "CQ3oUsc5z6gwJpaLRpSWfbpojJLpxhviCcRo6NJ7MZsE7U1HKShFGLGRAqSq6bEvMWhxhpd3hy1xd45Fn9zAeRS",
  "key29": "4WKY8P77f9fYiApDu32WAgv1NMRLS9WnDg2qzChSdMgtBY9y1TdUKhvV2UWBACuyX2nKKd1RLTL7ZDW29EL3c4me",
  "key30": "3k5Y1ZRQa7p3W76TmmwPFCVNuJRZqiu8BbSxDndCVmtzdWqzXwhTv3hotxtbV3MB7uiCKAKtTi8kct55E72wVb9",
  "key31": "5N5egSodCnDYS1ZjUdPLso5PYMstUvkFHkjToQMVkC1uBWNFitWY7B7HbepQn7gC4W37FgEgBoB4KqApXrUcApAL",
  "key32": "3kwQVDPGXfWMuwcDobgNHijcPecPHdjAZTibGnD1diwDjEFJA69XS11jM3nPYSnpSJkkownZyuC2ZjH9GVdo8LgR",
  "key33": "4ydUR4So6pQwSjqgpgWDgsi5HqV9mRMLpsKAjYAQhd1BdY1YfzEVceZyQ8ERyW4zWgpGRzZRj9i3NCQiJbfcKpZH",
  "key34": "51XvuNwVXbgitxyTAseXe6KKDX4WGs2AKbvKMd5fkBnNqoyWno529w7rtKMkpRdbomWUAcRJVct3mdbAZNMPtErW",
  "key35": "4PYxmH4PZTmaJf5Xp7CKEM7o7BqWb4oZHo4s3QHQqYCH6qA4efG9gxpdCo6HPJcygcQdcuAPpW9tQoLZEea2qLqg",
  "key36": "21LSfhdntqCJz3wfd6xJWnmEzUc9jrUPXVcK9Vdm9GNb6EPk4cCLtGrSSQ6g1qqyRhDicfgmMQ1xyBRRgU7cUHN8",
  "key37": "5fKnJS9KH8FQoAhAMmCcEyUXd8nfifxxBYJ1jg9gEczfjrnGB7nDrnfVwE5yxVjZhWkDtfdTvxogHNDVbnBTYHNi",
  "key38": "5JDFKkP2MZByvH3CBYHkpgfkpZWfeC4nUyQtLGLzEXpjpBnNp2JgVesHYQvD3oq75UTdtHgdgifZFEFhaQrhFe9y",
  "key39": "3RSjxp62UVADi4sZhJkDXvuHTnH6AfEYsC7pATAd2Ktm658vc6yxrVJbDsAp9B2LBBWxMnf6AxhJdX1wPPTmhgJM",
  "key40": "3KKuPVhhd37yTPXNyzGEAdphLKoF4HEoV1jTuUVGkTD64vMKRBQKy8YeTfXt8kfpYKC3cWFYJ3ZgZdAk3edJFX3u",
  "key41": "2XYseGtojJ3Ftjjdv6ntMpvV8MhRu5FNxhnmnjkDAxnEQey5bnkPz4xKJ7d7ACgCcpdxdXmWJkk9uJ5tATKDxpvp",
  "key42": "5frpiGJjkBzBWJH2oKLmnrQFy5PDesZ4n4RZNGr2KsY92VqBD9wXs1RdGAwerWj9HRuMLajyPvhgcCcDseMmFTwf",
  "key43": "tXDVhecoEiFFXhKkJ937jtYvARnUHmTbUZ8xENcxKtH9TTH7t7oS3quz6fjiFGxXZ16uqmMiyctcdp9n98Uytr4",
  "key44": "3E3Ys28Nxt7xWgAdibeeMVZBFPKu9kVYactUybgLNYhHQotU8GBhLJDWHzBDk8GzR4WhWrHgzYK4MvXHFsTiUJGi",
  "key45": "2NvcektCkfqAGPCD5kTZS318sgWw3Z5wpEWWiuiqUhcejWsc3ns7efos6kpvD983GuHQFaN1GjsNZZPgmDGpttr9"
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
