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
    "2bgbovod5JqwfmoXbWRhxWmFQvmyn53hKXYniH59kGPLcdU8TaJXvhcHWWo8dToiwzwpJw9N9STzxQjntPBc11FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1qMMp3FW1BqSMKwByQwsUUnrsHq49urjdFvi6fLzpGvHhpYwM28RnmfcHT9fdmyfMfgLLsTQeWhUHPdKF4aqZe",
  "key1": "4WtEYNQ9uWW8v6fwrCSkc2c5SRWrHaQASjZWnfyekcCEGztNp68Binp2pjXpcSLsv3SipAw4Tz3fCSgVc8A4F96d",
  "key2": "2vq3iZ6VbAusF8iEfbSkpaWNadjhzF7vwSxhVrmtaAPjis14oBJdSMhhPVDrQREKvffnhhNjGGpvN6Hy5vfLFDiW",
  "key3": "5bmySxJTUyzf2WzmaGBRQqkUMj43DmymaspGrDQ5wYqYWPpm15QibbxUFzF19PeYuuX6Nq9z2tXccajMqkvSuQVx",
  "key4": "4j9T9oTkr9LbpnXXipnLZrWXNu96TcqZyQVvPF5VKv51JKFjXVRC6pDxM2BdjgFSYFdfHAku1A9ShkdX8xB73nDZ",
  "key5": "4X1eaugntex5iGcZ8m5o3Mn5J57oYdJg8u5kcAcrbNPNkw9LG1xUJa3r8ffs11Bv3K4SFHY66KvUsodrNrTNdr7m",
  "key6": "5rpwnewuutr57PdLs3m84bG5qbadqatgkMgKnMEw4JK8n6rAEqbAFZLDeoiQrxqxgaNXCvaEKVWF2SCGrboU8WhG",
  "key7": "3dFvrTJpiiNZU92m7hrynkjNYxWJCd91gD6EuawXEdTqFY9h2ryKt2yWuvgCjMgZKqB5YTQWVoZVEhbgVFjfWgEU",
  "key8": "4Chfragd4ntxQ5CrQ4SnGKPjjiL9ZDgXihUWojgWpW9q6VEbyZxW9fFP84qRAzuZwhNVraG6cYknsYupfN2VwQjt",
  "key9": "23LPJG2ptHniuwYPVeHuSMUu3TZfr5ry1Z3LjhbRGLcGjpeEudZTCbbHGqMV9uHVhHNKTnpSMaH3bDiB5A99iWPN",
  "key10": "5NKZ8xiJjBA5ZYfNWxVFzeXR8Bo2erCJxUxBiPDuJJE8DBTjp2PaSRsQdJEacxLUZqQuKQBxfnXzzdFrfCiTb1Kh",
  "key11": "5CssUB5txFKArRuQujDjhRESdvfEewMDHw4pjkL8B53ah5U9QvQ9X3rnn2rqP6sq5aENRmyQxS3FtSuvTRqVcY1v",
  "key12": "26V57YqXpzxLH1rFTNHJdvn8VvqrESVVsukRfh6zUFBYT8qX9BQR8MtCBzupdfCj2AXiuQWeVe3qXgdt6qnXwt8u",
  "key13": "5rXaTUZECw7qW52wbbyfPB5wFFtJkoTRjXmHpzHcEZAwsxX5kXYTjTf2JsV1XH7SCxd3Brwpk2sw5QriynbSUHX9",
  "key14": "5Ld5RbdQTzmcqMX1VjFMwFeAmLG5GPU95isgx1PYhkzsPm2u1jzTAZZGDWtaRwitnwkcr6C5HQnatA2yJ8C3K7Qz",
  "key15": "3GoHQX6xZo6L8dVKc9eUHiXcoBSSWxZS27emq8SgyH2sXPRDP7NajPetEjxiAKsH7eN5ED7NHE1shQWo9kbE6v2j",
  "key16": "5zyA86HistghC7x7mErHnNCdzhJKzGv7NuUN4HoV1SrZQwBBWSdDVVS642KrYveR1562KiMSh6nxTSdvvfAEDbcr",
  "key17": "7J8r3QXGPjgFpsxv1B2HyK7ddCtmz86bouoFsCB7Ykdsuk2woAMBbgQ53bm5TJSLEarc231HNtcVpKq6LuFF6ns",
  "key18": "5vCdxhVMiRXeG3u8B6V9UzrckPqKUDJJ4UP3zDhFGRvxaDLKXrwgebZuEszzUJxeS7wppTCQJXT2kXwqMmr5bxxc",
  "key19": "3WLwFjXLwAfHwsLW4uDywK7sHDBjrPifWQDJzyqmQDwfsHEex9Fyo6FrEyTnFJn176eWoDp7cJHkBwLUxcpd93av",
  "key20": "YG1z8AtoDACLg2HpPpYcWynyC3EWfRw2cFBUcjgoE7FJtDLECgZjyFUmq5SHAzWg8P1YBwChoEyaGZSqWgdztvT",
  "key21": "42aAVo5Rz3PFZ9D2TEACwbVpb15UPcNpwxaT7ZDU2XvadsPuHA1uD64Qaf9tMKtEUPWTEo38rkc8KnfBGiWd5ABj",
  "key22": "4qfKKNDx6NCaJtdXdYkUAC6pQ5afVmv7mRxcYuMfhPxsra6waLenHSrikU1bm2ZH7M2qt8s4oCwKiJ1FYYiefRb9",
  "key23": "5aEuewAsBry6eEaH4c1hojk517CL7RoGEF9Kj3uB7KPhJ2Rf8KtsNKcfysSnPm78Vx7G9Ar52ce2niQRdNvmBG2y",
  "key24": "WfPQK54YfLavnJN9zQJeJXXTMdJ4JmXxu8Hg2mcDNHPkWDHzNxX8Fc3sG7aaWnh7GB8VjNZwKg7rrXnZupZV9zz",
  "key25": "2UVEbM1S2R2R63JkQx6YyVog2zsRTwSXGiyRZ3GpBdAhCHLDYYZR7A5Jpf4wZ5HBUC7RKPGRuZ5ZpR5dbX4B2JJK",
  "key26": "2SEite6yxkXh1Gau9WxZF713xuG91cPq3ZHvhuhJDkzezQt1WPBaTRagLbiRThgNHse1xZfMuHfzDJmh4xpBuoaY"
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
