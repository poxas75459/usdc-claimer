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
    "4px6iFgbvoJ8c6mnrhCseMeBC36UyGYV7vEHxdEzd2vBwyGH8WM1C6bWPVht5xTV5H3DQhNvuKx4sdCcNcnJxSjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCL2jkZDCdE4Aby1oMeEaX5yZU2znaWYKhszqejJugLtpybsUmqf41tU4UXC6ZyBv9FxjRLNXQSzPfcqUkQtVbP",
  "key1": "3eyZoG37o2N7RGNuwVmFpSyYrcgY5nT3XQ2KJEh38hZqT6DzNaUL1AzodcnX6wrXHBthCoLC4uyuYoU59bt1TaBP",
  "key2": "4j63biABpMSCuTH5Hp8qiALTKycr516tfLyePvvR9bjrGjaCik9yepgiPTuY9XpnsPbuPtpAMFB1ULehZ4VenuRk",
  "key3": "2BQdvd1umMD5JDfAHZ2PcpSCJRX11XSaJWHV6LweN3mHtmMVjRT7vX3HtWXj4edUmJLu1KLifx7UyHKGWxYitvmT",
  "key4": "3fnKyodgec7zdvhaxtEYR1rrYjtu8NGs17s8fTNjFrjokSVLG8cFbHCXmuXDjtjgbcWtkgUUo6SVFnjgSihthzX8",
  "key5": "3buzHiK3Bd4ztRvumRuVq4AZCY2hArw1Zqg4tnhL4cqA4XfxkcagDh55otasnwyTf4b5TAp7nQMA7RgYoLfT6PjA",
  "key6": "5iXM6jTfyDiFFWkk6C8LPzpqAXG3fwqeemSH7epez6aw8DHJorZXL1zGHhJpLueWkYLdkQvGCkPTsGHDvWY35ssp",
  "key7": "FUpFiUJJ5s4kS9L9dNiS53scusXG66xwWLdHmgrG2RNUyjWzyvUtKXiC5RSdZQnzj7hHhoqY6jiQiuMzvJmV9Hv",
  "key8": "3GmER885wDjJYK75e6m4ZGAEsDLJEo3eF8jZnk7YoR8Xr2sMRtonQxygvZMF6X4SGRz2U7okKde3u1ciuyuqNGrH",
  "key9": "3FTEEfQNntjFekySLqME1sqChN6cZFX5oHVrWhKyFSU8PkLTvMmPzwFTuQNsjDrvrBP2GQhG4XqfpGeQQAS8TvBK",
  "key10": "3SjTD8abdwbacKJH3kEBxpmSbdcekGpEBwegmgN4u44745c3sXTbKGkXzPjvNyUQDTegCtmpQvDSAAS74HYctCY8",
  "key11": "5D2Wb6wXZV7DrqPTWyp2D6eGaWDsSdDTmxYE1p6ZVLmChW26AqafnHyCRLKigbNRFYy717EVit2CPK8S56n9dvhX",
  "key12": "46aJorCzzz5Dabvqbsjzx9ktjicG5cwx49e1nKPpceN7Y7sjibgftxpnn9TLtPRgxiWXQTXEdCBmNwNNV3STrNkQ",
  "key13": "4tbWXqfUK2gusNxZyR1XNKKMqp83cpEm16WTUJVzThQ2essSJ4PKStqd8L5Jx76GVqWJhwbwzL1MdEoqPxSoRbKV",
  "key14": "5Gq8Ktj6LkdTmcCYFtcn8VYULagMMn1aDsQrcZ3XGEt36yQBRPUttVvJk9Ce2ziRN5NjHdThUgorwzq86hrtQkcV",
  "key15": "a2JpxL2oD5epT4qjVQYKqbbHN9CDDicoQQEiQq9QnrfjQrsjeNZqd9rTuTzuRrUWdPJ5CJDo3AySEsXyEAUyHqG",
  "key16": "5SBNEruoCFGJr1on7akYAtuzziwCTSzWYdp8WD1VMBtvCGVGcjKE434VuFa4DPNEZ42WwHkidBe35MMRprNoWtv7",
  "key17": "oY1fC5j4a447BJBG9d5otCkGM1GSugWQgqNVb367KnBc3taW4zb5cmZhTNiyoJDvsPXQGzW5GPW9CEZdbPNyXMZ",
  "key18": "whkWwU1PdWuFmVjMLu9H9pehFfnxpH4uttmtvnWLH6orGx7RJQACNjtgqQUSzHEtc56ZhjQYX6igrGGhxXsFyxS",
  "key19": "28N9uzw7Fqep4d9mnMfZYktSYNFKrp1UPVa1zZKWYaBsZa2YiMdGmyEEbnkqofK5DrHMxGeP4bDbzCkTRjC369Fb",
  "key20": "4QMwgZRHb75w1kXmj7ifNnSVg5xqarZKU3RxHB957hudaSvtHM1T2MCkcJagPh8PZW2SR9mNj7taqNWiskWrnkB3",
  "key21": "4H5ivKsS3i1Ncd9FkC6ZkEEYWPJReDQaSn5enSJKsAT7qeZ6shAvFD331thJyxwNFp2ezfC8CEApfizwYESxuE7Q",
  "key22": "3tHqUtuFzVWhiKgxWSEuSmhLq98Lo2FRsvK9EZ9po9P8RMfPafX4MgstNJ7pf82juj1Hi1VbG7wmtnv11PqnnZ8h",
  "key23": "3NqBVwvHadES7UPeBhfPHBKSyr3HHXxiih99eRS1y1Bmh77UQMkzsLh482ZxhCXWjtUE9D9UQhcZB5S3G6Y3tsec",
  "key24": "MCaHFKe2fy88joUSTShU8J1KDTWUCkxVJSUbQHW3UbGVjJ8oNnwPfGAMK5Era9RYMKXQJvAKRCGjAsks8ToZXLV",
  "key25": "UR1nAuPKzM6nKVEDBEwvnNj3bmKgYpmmGeUEsKFAvWcWghRJqbL1zDBjW7YcLTq5c22hJSXA59MEfZBGLm6xzwu",
  "key26": "3TU217NmQBXQrg9JwbjFr2kPLXV3vV59F5HV7jj9VCSjjsAyJQxDWryCe6E23nhfA21JC4oMMv7q8LmabrELACyp",
  "key27": "32XwvwWR51A6DbGBGnpJeNp2YgQBzfsPsWTrK88xyYrMHS7mqqutyv995QRtd3D1ysCb4PPcMKCUrfD4kjHZ5bnc",
  "key28": "64K3bgMg3VjwXrrQqmM7nC5BTq2bgzotbKAsX2W4UB8Bgh4BdbgcNTBUHL5a9qd3fwmoXEEvFw5bXYGYZjt1N2Hs",
  "key29": "RMo1puCsrDzbaNdCmq2XUdQf1FjG7sk15C6Kncb1inaYCJNbMgUpG4taP5CbBLME71Mjq7bpipsqYm3eXkQAaeN"
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
