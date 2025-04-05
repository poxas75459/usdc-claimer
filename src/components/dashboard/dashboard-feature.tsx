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
    "zfZMSgFLVEvbZj5MYCNTwEUMKGvsYztGoXXq2oSeHBPsA6bqW1szuRoTt4L3fFc7T8uwKo3UbMRm3JrZF5dj8QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XKExnPhAVkPEKfv7bBotTZwHUULBpHfH1bLtcMk19nWTsdMWyNNNbGqcz8BebfmQSZ2hHxtM1HEZYxUM1Vf487",
  "key1": "2eC4vyBKuzG3sr3ksup4P3yfkumryWYBfprWf25K62tSKtmqE3gEVxHLU88q8TrUjsnP5Vtonkag83zUHL68JLVc",
  "key2": "7Ex3HqxnU3QDzPdN8AnadW331y5KwcpjYTtUy74fzUQLXbqCirssrDeP9AsPuLA1FwEmQZeyenzFUggyg7Ap2DX",
  "key3": "2ATnBjmnEx96wvjp2B9NHMR6kReJYiAQuMmC8ctCYX3ELLP1vWL7bBc8HyFvVB2w1f9W7hqDiYqyD6zzoFZ7MWvw",
  "key4": "4nkfyx8VgHByqmdDWozPy2nFS5Xtkaqvfr6kQP7DvdzmSmfxHcWobM3YRiifVXz4oo7WYswgLmCBFT3EQjg5xXnQ",
  "key5": "2E1VmDjkW1XstgzF5LTBaxA5s5oqZDj3XPBVoL2s27PHihT1EBkbYsTzkRUsncKT9WNWLWXbsRgNTZU5y59Uy1BX",
  "key6": "2dttsqgH4iWc9SM1zYzM1Vc5AEeJXxbbaW58oN5bcKJK6NXR2itawBGqxZt31huYrtJdhAzmN4E6AARbkspqBTu9",
  "key7": "4NksFfL2A181eNrnJR2Sh5MPy1jt9bGuvX4FxQF1MwwyikiEbMvEzZFtu78YrNo1bJtGuo7DpQGRmHY5GXnKHc7b",
  "key8": "4HND4L3KmG5QyLqQnYroCGr53fXpm147EdTkLYuRtFv8ymdXkwf2ZqA7x2V6v4Yrfk68VCfCqFXGvFCtQGWAaWbA",
  "key9": "3FaqQTTHamaXQWop4A86JQTwywXYy8Nw3WhTDgWCVuEAF2CuxgmKv1n2P1Yz5LpnArnLj1xiCsYQsw7wxLy8xszy",
  "key10": "4eD3oUdXQi2m2KNroeuFW3vjDMKncHP2NzQcFvsm668JSoHGV7ckEUYva5G6YBZRTt3EL6nXScfxpHTerGLWvz2p",
  "key11": "2t7fBMvW3DjYzjH92C9P7ecGVnKTAjmvjJtQ4N5Hwgg73WJmtYykheh3ERBTCe6V4svw1uHzvWmbXn13oNsVNeqi",
  "key12": "45PW9S9KLQynpooqacsgAAScjNJBmMPk9z8VKtwC2oC3TXMeB9QW5GbwmYn98YaK6upZ73Bq5uXC46BA1nCCYMmR",
  "key13": "5x9MagexNZExpSjhXkeFZwtdV66yYvFQxjexosjUpPQecCNQ26ggmrnchsWpooBFJ1kkq139ajxHSqvBsRToTgjU",
  "key14": "58gaRDik3pACXZyziF7Wu28Ltc7WzAkExiZatqUmsEZPA1b7V8MXW3evYXe3euFwrZnCQqLMoxRgctwcWeaxzBES",
  "key15": "4Dxvtwho7vHdP6xXSZu3J7UQX6Achb1sVNpNDRHce1uE6XPADkD1X1rHtfTM4iCMV78Weh38p36GK5K4mmJnw5Za",
  "key16": "2NzC4PWRC87nQ1yqPyj7g52cJirPrnAB6mJKYsgnW3N38YAxc8wBMa48RBoK2Jg3Y3pJpXag9UWTG6BMvYGcZvaw",
  "key17": "DmwtN5TkwAg86QkLNBbTCBWuXk54Ng95ArzAG82kaBfisZDDAaMxfXzgkGipNpATiFXF4UJZ9DczNo361nEWrX3",
  "key18": "35MsmxZigv73vz7cyq9cfMkc6wmcdLy4Yvsd5SzGBT1z5C2e3ubknZT3wEUwp7uNGrHFDhzQuqXt6F895G9AA13z",
  "key19": "35AWbeLhWacMwK5ChdSmcJtRuGPFZCfyxMFogY8c5h24md9pHD3vEXcePtVtKNLfWYzeqak16RFiTw7zBeJTrHho",
  "key20": "5Ken6YAnH23TW3g2b7KGdeA8gsaWtVVUJKaHCtFUdYkdCGAuBRT6YA97TSkL2niRKnXnsJBZs3JJkvQ5BM7RBUhz",
  "key21": "S5vRjH5CwBxBX1UKrVhTvDagH5UNb5wdpWmkFaitfe4Y7E2PhVDkDVaepLw2yotmmN3hfE9Ap1en6DaXrTbGKsk",
  "key22": "28TuKPfiyD56kyYS6HFNqQoQgDns41NuRAY5ozybaboH22cecsZiYDQHkgJy3e7Qkh71QNb6xEkWHNTtMjEaBtuN",
  "key23": "28oAqZPo7Z5tFF2LJqbDSKZYHyTg4HY57AmFAUZBGzhZJGQjLoJ7xuHCJx3ciCSKU5sg2P1b6cMzewdf1oP1h75o",
  "key24": "2rC1azMr3SyczLR4jg2AYFTarL53tqwfNRXEKmLTW6eGks1fP1jdJB1c8wjz2uL6L8amxTPBc1XHoLUzXwPoA1yv",
  "key25": "319AjLcyHZe5sGTL34p5cki5FQizNgi4357iQCffkLCnNZbp1J6DZfoUUg5Tt8YBbWbgE3sL7LNSB2p6HXygLPPc",
  "key26": "31uUb545dY8YSWcSiqAzCkr5DVX7N3hEzXSoBv3jTnb8Ja7djqsghXGM5FtAEY5DSrMp3REu5oBWzn3mBZkjtSzb",
  "key27": "uv7XgAT9RyQj6wctmfhjn5SaTydGREY4g5GuR7abzU8WfSUT8AoMdbu18tg5CsgKTpkRcokrreAaHhoepBGLUQq",
  "key28": "2U5qaHaXA3AP2Ao8VfHfrBFPAhko4YfuAa9ACmv84znxKJKhYaEERc1hVoWRZFgNBntDrwjWKiUjRwB7sABSxQFq",
  "key29": "3bkGzP9wU1nKfZhLY3LW167GxqhjBs4w9BcKhDAVzA3CQEe6g4fHAKp7vyEpav9fy4vxnkizGZq1vP6b645DNJpp",
  "key30": "4pnZwwCWczskkEagzEzqxHNWqZRjzps4jRxjMsfieiSBhL4oPBkKNLXYbyXTp4ZacvtAUw53RWbaEDr1nyuEdrg6",
  "key31": "gAPfMxrt5qz2Ke6KHDPtknH8PTcVkeMwdY4zpEt6JaoVveJtMw4yiTFBYHLb1oiXqFCd35B5bqLJFQ6gCs4TcTy",
  "key32": "5XLNJ3vfLHudX1triEndjpLu7T8bB3rimdxj3uX4uzunPkSzgdqQxCS5LXAhKgYUZN7HRWwomXWSiesqYs3FRoqp",
  "key33": "4BnqS5DuPemKaKYdJwjVGNtcQiJMPLxPqTkmpjd8JSVmrDpVEZQHXz8Hx4MDFQn7ZXDRyXs1XGfwL3QbDtpGFxHw",
  "key34": "QNk4u62yNEeGDjMSi8Z3vyEYCh6dh3d792Pud7bUtudTdU1Rb4GPW6bXoJUkiromv6t4cjxbzfNsnuzjFrB1LvF",
  "key35": "4a7wDsNWASNX3MDzFYHepQMyL2xPqPdftc8krV2ziCbGFJjgpvXNTfQrWiHrE4TkUf9ztnpFzZCRYGdQtKU6VHvc",
  "key36": "Ld2BWod9SCw9sRQnxJXvdQcBUHP5YCy7MLutBGPtFEDzE9y23ecJcoScCvAfqMTFvohaf2HUrRqyJbuyEHzE5vy",
  "key37": "3heZZzZvheL7YDCnmim3u1ZF6ytQ2GyDc5KBqEmfUs36CPq5AguYF1ebP8QuNtn7g6vfHz3Z85xEJ9zxs1dAuWKd",
  "key38": "2youJXqqBcNfUc5CMmb9rjC1RwRJvxCFXZzYMj9yKKzDmkg6arum81s6wMKCZTeZsbYSw2DDSKyruUeQke6F9713",
  "key39": "2qBnU9wjAQwrDA69BCCAU2k7iyF4GxkUWAWRUtuqcJT4bAQaUfRfC8NmD2myAqYMBq6cqVCEe1FAhahY5WM8YeaY",
  "key40": "2MhKv1njAYf5qQrKdXFMGR4GELoSq7FECJbUnByscFNkmtJaLiEfpQ6EdjpwVExWEsAcY7DNndgp7BNj5vWhv7j4",
  "key41": "3Ki3Yj5UFdUfng734qwAhqXuWsyYKm1VegUJDrdpXmk7kwZbTBudcDUqapr5zvTKWqqtV7NjsM59hhuqMvkrPEq3",
  "key42": "8mmA6ZYB3KzdHQQcChUykT7HjKnVCjT5M8fzqrQjPRCfMMcKyxSmfSffvSFsgE5j6dxqvqxLN6jcuusMuNDFSen",
  "key43": "5cYScTQeHrdj5WwP1ycVCc8s4sNB8kqAAgdqrzwq8FUgKu8WHUysKgNYerq9gTSKHo62N1GJUR9j3pEXLC6dyBjH",
  "key44": "2em3tHF5wdVQUC42KoctHyQakmfthoAEkgFDpcj23fRgF2zzkmbVmEytiE8PM4CH4VRKjUjkuj2rsFP7qnCAHUWy",
  "key45": "34TCMHF7hE1zbTiuXbCsCbyc1p9FMnHEC8Rcbno4BeGKkoTrhRcqXAGP1FKuKgY7QiEupGR5ukc44nib8o8KJQaE",
  "key46": "27nbEdeZjoFRmCVAJvjYgh83XbLeBVCpxtNGCEPLR643gmUuBJZK9Tj3Bi6z5GfT7asKUL1ozkXG944Los4yekFa"
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
