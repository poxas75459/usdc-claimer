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
    "391PaKbnhCS4awjccFUGwNXAPj7UgBSi2gYratSnaP7Lv8hzSg6NpDyhwE8T6CRbT4ubCiURyX3Dw8zPwJDZGdHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dw3uBUafGbmqo45cu5BcCGu3ouZNMQywWwxXENmwihwiDeG6awPM3XBNa8TkKsBRkUnYHy74Gph3XvrYWwiFNU9",
  "key1": "3X54kPyJKkjCvFKSaHcDi9qzz1nw1uvNBzQfaeopBRTQNmwbyZQWAQqdFcxtWB4sJmsRHsqzmubA6wvvce987xvW",
  "key2": "QprqiXVxa2KxJ2i4g99TwbJrg7LVdZtNaaiwU2LkhkwRMtuFadoeng25BaSVNmSBjFRA8ZA1D5bPoPB1hCuRp2Z",
  "key3": "54hUPnFZeYgm5GB4NPz8CVJzVAjebyhaNDoodzEuyvFZXMvpXFKTsqx3nENx18Wk9LMLY6rvRGfkENqqeYFgG5qK",
  "key4": "3mc6UA7wdX66eDET2ncZQyv4e3g6V6hYMFiuB6GEk8G5D3ZBvU44jvkAMprK6itCL7PphFmcpPm3amKVkZ84dUqz",
  "key5": "67XhcCHFNTMe7dEo3MtkqQRe8Hd9VuJHh5KakJDHzJkLnY4KdY64N6DqRJpaNHqszCNSZtepE3ZHE5FLz66XR3tE",
  "key6": "2tE4C9ocQ2u6YeNSDiDyUUoRjfaAhv3zrVYySq3p28ytqf1J51rZJPod2MHehLKJjz4W3c6y4cs3c1k51HtAMhKH",
  "key7": "2T3wxbDevXtGbTDNyRAVww5yeSxPE38B4WvZEkhwiUoq1UQuBHwwxKtxTtmLQxVS5vvhvy7tRXnd2VPe7cma2tz",
  "key8": "2whjop9C1tv2z8awzegzVaMe8MpGFrrdrD96TCbMaJVmsXdVh3hguNfDtJHHUi4RNdQGtDqKodsYCKe2nMr8jS3D",
  "key9": "5CV6fdhf6hXb1jgGL4D8df8df5psmXLEBYJAn7AXhukhGspe484enC7NSe1Ckf8zyL6Yv4e8sa4yr4MSG7N4Syny",
  "key10": "2wcZ8KMRjGchnCVm68W3Tvd168mh48xp6A2tmUh7vgKAXdavZ7oTTFDKptvp5vaJLjyUq429GRoieMEGWdtDLw3K",
  "key11": "627gyjVTxhWXKniD2vtzLmtQpoyFgorCHKf1AaERh87XtE7dX4Ks7uWyCH6R39w131E7ypCk7zSPPXtjXmze5QzY",
  "key12": "5voHwey8kVMydCupFHq8sX6yjC9auMh6SLL6cDWic7iVNsZ45Q4xdgCNVe2ysWgLBQADDbPT6MNgyHQmFghXEbhc",
  "key13": "4kZSquJ9ahC59kW3L652sF9jRwSVT74gBaQyghjE6HAYqooy3uihxNdS1JFyd4ryHC4M74Z9xBGQ7oYU8HzktMF4",
  "key14": "3HkquDANR2gU9VLMgkACtMwFcVkg4XCRUtVwZKg2Nbtmq5eVW5Hjb6q63ce1U4rnvyEWprxw3Ms7VfEJgFM65jQE",
  "key15": "4xBBoxz3ofz51W1rjeaVmqxtA3uZSQwCq1gy8DaAif18SESSD1zTqm54CztX9Crr2yXXoQvoZNWDovDNiTHpm154",
  "key16": "33sTBMMejsV2Us77DcFkV1nLoFhMQcxYcMfVYJ3qrjV3rtjgMSfGX6hiBkbyjdjMWQL9RUQiU9URi4y97Fo2WUuQ",
  "key17": "atdqdpuK8cLgiaDknE9jmj9qdt6orbSSevMMtwf6PxdZhvnb4mr7Qii3vVU6vuYgNChuX2bFUvscfzGsjQ5xJh8",
  "key18": "4MPZkFGofR8J8Ru5gADC7QwL3pL2z41raFZbwPRakyHszxHPAjHbeE8mMAqkzRE1UVaCDdMUZVKgpsc5REaqmNip",
  "key19": "4jXaBZKpkGGjH731HyQjwBRrGX5KdsGnTGkPsWtXPQGQfByvug256Cq3eoZ7Ws9zSp5ZFiTvGcsSiabCE6aHxbz9",
  "key20": "4A6YDwd6RNRfFkmiBP7vQ3vrJwtr7tSPgRVP2Y6FYEtjU2Qw1AqRMLiNRUsz7aWWAxsHkDJSqgmbzwW1dKzayxFi",
  "key21": "4ZEUC84nrKCqhgVR37qjXYTjC9oSzsrkTP4rduFYMVCB3QZJcX3jXL9bzQBJ4Um5SFVbGvJHPcbthYYiRRtk2AUX",
  "key22": "3hjPLvfkRS9vG3RwdUdJz1qRXa6Kc7cYqLva3wbyTserQyojbALZbJt1XwuRUSpFd9ed5MEMnE8vSrgn3i3x3PW",
  "key23": "5QeJCoeKvKAKBPGiEVWBBqaKPVPMb9C6Jt48rkk8LzuZej9ViAMntezwmWM1RnTqHxy5P1goyJxMjPK9bxN8PdPB",
  "key24": "32pkBWtbu3iGnvntL62JsKf8WptW5K5KicCgd5HvPadfGQRKtDALgkSJiingnD81cg29w3SRLjJM1NMt5HEX8eFx",
  "key25": "2U6TQE3TtamLyXdWnYCBRmKZCnXvdrghAmMCmqCC2mgqo4y6d66tWacwkegM1b1FjptEux7BbuZ4CfxzqspuZecb",
  "key26": "3cVd8ipycHBUdJiC7kkix2TUWTVoFpeu8B1GqJpMVWXbnJ6RgqJsxb4fBKAXnAQR9X4sHXyBZVBknPJsXfd9qguF",
  "key27": "3XZz4hpEpFuVSkMrE5NWwpDqvKNP4mSykoHSFefG3CAv9v6vgS4u98Qv2FjJgmHaAKftLiFDYxJMQdS6DHnZM92n",
  "key28": "3zF23usXhpYNwYvddycJpeaZcR8Gj64ogWYaACFDEWnbBWqGNvTQ93DH7siwFGrwiFEes9vQpNZXtG2CwAND9VF",
  "key29": "4ePJUJ6wx97GQ4gGpZQkuTW7fb5JMwZ6LCvdXKsHuDyacHSB5T7VX5zj8vvkMnSACyc5EN1gdjLivy186W7js2ox",
  "key30": "PRvsGSYVt8RhwpD3WQusYqiLf5AFHwHHK5FURVC8Q9izvDptxpFzx24b1XuEPw3jxkieFHdmCBMCCubKiBCsdQr",
  "key31": "4DA5AJQAKSFTN6tAAsgckbMNqm185fuebsyxBu5kserKzEcwvd5PQ7wHw2TQGEryj3dsynifGpRMczgP5nqamrDL",
  "key32": "3fscLLTk2c3QtxP6ZTk3TNsniAck9STQiaHS1JGYdaVmwvYkZuCkVzAvkp36necobEdBwdc6xBuJwg4iZ4AS72oC",
  "key33": "3KDqS3hcskeptKWo5DUrB3qmu4vM7dATMKsHqApjqEjxppPBMjG23RFLG6hupVasJNoXBH43ij7wzpaByKg35dXp",
  "key34": "iFcMgcB6ZSuXeXAYhCxKSv7JX7AHfirpeqfRqyDz6orAKXDtNNVtpAuxwiC3wBHjZf5RXhYTSEvFKxC2bD6AFJ7",
  "key35": "4h8aMFRXGbMdBWA782vUqZdVqTnavqoTYAPH2dsxdRdGxfd2rjjuv98KHUwTJQzeM5vfb5Zxm1zu1yAkB5JVxAZF"
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
