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
    "4Ep69C1zD2gAGgmXsv9P9uYDggjDSeMx5V3eMtuEe8VNjAzzYdizvFvrWG3Si99FNM2hmbf4wu6jjqzWiVLRi2TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwY4DsJf99Mk9NmoWhNVbbHr324HwgmZUtVNQWD6o16CL7mqNU3GJw54DYw3KEZMkPvBG3MAexoLeaYT24W4wS2",
  "key1": "3Hp1PURBhNoXkJSekQwWtv3j6tgzBs9DPpjyPSt51AKLxfYW8E9fpWKWApMQ3PwdXmkab5jdAoQsbrLqqZPG43vP",
  "key2": "3YkW3RPMRR7ZBuwxdnnBMVBefgkefNqh69jjP3gEm7pzphWqLcx6wm6ZgtnLFPhoY3vtneWdZU2mLwvDsK9aKtpk",
  "key3": "4cZG6zXYMC66hy8ZYQbjzPyf65s4uVUuNtxwZGjXn7qXhziN8xkFiuoEgbDuJAdq49Wc4tAq4jtYnQZh9zHuYCjy",
  "key4": "2fDUnPJydpVGyyT5YpxrEPC6fbwnwWve8xMho3QNkEwDc3Bf8W8j7hkaSms4XKevTBth8ke15d8avvfC5VtrxNtG",
  "key5": "3dttB6vya2hRnEeF5ADogg437yq7U6Jbk6PPu1YPcz4bdtz42qaUvDWmu9UE7jSfn9g5eUzUHcFVU3MR3GkwWd7n",
  "key6": "WJBuaseygG2bhhDQxxXeqMYieT53e1VpedZSxPoWiBPdnLjq8mCViS5LjG5WmNN9j9jrfG5w1DeCky6HtKn43j3",
  "key7": "4wQSyC7BmUJ9vwrA3Hfyqtiw2rejXq9ESweu1DM7izPwz91uFvq15pbkcc9T4NRUiqciJwufaDJKnA9WXrSrjyAw",
  "key8": "4WbNUekM4JQnUohWjNSUSiF6jTBMsuqp7zrKKkaE82XMNdDAR3kdN2pXQnuvFovqYP9sGZT8wz1cvmwQSxkkeLNJ",
  "key9": "2nB3wutJnAim7HSt3AoV2FCPpU7r2QZmTBbuPExThbq85YZ4jSiUmKgcwTaDnYbnG3e6Gg52WvbV4TaZgchgBMid",
  "key10": "47gLRjeVjTJFEehGVSbQxDBoTAsqueLLNs5o8RdRYJD8fSpmC4ZgGjnXgAmfwiTVKbM4gu4ujVe7JM1UMDPt7Q9E",
  "key11": "HZRP7rtGceX83PzrcCxeKyzFa7mrnEBzGmLj5jqqV5pVgRcdL8yivGLXtZikz3L7KVQ25QQC3NZrdXAxXgvt7in",
  "key12": "26bF4AeDmUBgUbQYW1oNUgr3cycfD6qFFsrK1P2EEAnSyFizdUC5sdT8z1zTuEhus3Y1wiouC8Qsd2DLFoXPLNSa",
  "key13": "NKhbMHRd7Urh9wjJome3oGWMLpZCJ9brMaD5f5U9USWURzj2xV9SMyWtiaULMksSxAuZQAvXeHSMG7PmT5utUCA",
  "key14": "4g6ZQrLbdKG42NN7XRCt51m8tLv6enJ3b2E2fwRKeH7TgG31fHL6PjEJxzZVoupgX4VG9SQR8zAvAm9YGfY3Rw7b",
  "key15": "3ijELsHsX8yox9FgevfkNqb7qybNrgzm8cjgPVsTUXxkrZoRMwbKRJTDyuhxb5HEWa2feJEEzxbTwbYk91vB974e",
  "key16": "vWfEtDVq7NtUCf8jm5teq4dQmJmKqfyFx3oJCD3kW45hNAVonGEzmkg9qX2ymjZnxja8bJAcqb4PNAuJrpUuwd7",
  "key17": "5kaeTx2M1UPE4XmKGHvxuxcLKBM686i5smijk2enTPiYi11AXJzMu94ZeK34kLpAq9poa43j5FEMudFRH5bMp8zf",
  "key18": "5PXS7zDcX2fXV2synQ6rLsbCGaQ8K1F3spNfGdh3dAFpQ5ZizhBakyBpod2SM5wGUDrkM5EuiADnnppcjsrJoK45",
  "key19": "3FqBtCWVYTgZPtx2Mmus5ikkCrMok3ZqYB78GprcJV5SfhQGLEAnMN2cGNpEvZbNUruLdyAFk1T1nK49gwoBxs7J",
  "key20": "5D5FAo4DWHY6ZwoWxgBPgRmbvRt7o98q6TmBGWKgqng1FBAmWMqARLa86Nj9KwGqehvbfDbdC3QC9afEEReqRrTA",
  "key21": "3aaYfuvFyoVo4RpE4fWyP9XSuhGDxX5bQzkYUFYedhazP1BtuCxMTa4fbYUavfwvXtdjzErE4EFaf7c2deFbjxgv",
  "key22": "4giYTUpATMBmJgGm5AJY2PsU9usRJy2TYwNDNfUj4M77kxEDjuGhb88PGNzTJMEWyCELn3P7yKTC1fUe2TEdsxXE",
  "key23": "5We9snayQC2T1CWzMN98uniyFRtTasQ6beNeCo9sNsrvm93U88eQk6sMkuWkCbWPgWQgGwMZbr1AwqEA5AChdSd",
  "key24": "vry92GUpHRjbL8ZW1NW3SZVWjSRnMKXwJftWMnjJagGVkz7kBvXgi9jWuVLASX2pkN2Nsg89ZgwFDZNPrf7vq86",
  "key25": "37ZkrQQZXNtpJXXyBQtdEs8vk7TueWWmH3JzppkqwHufeJGH6mz7zMghXbb11k39cbcFmUQS2uauJ2kAFZLnSAfX",
  "key26": "HyxS268xWnfq5vk46jzEWxwvT7ppqRe9mpc74H3MHYWrPaw2wLMkozPWZNkkr4ATr8EVye3j8ybixJY5nBtP7pb",
  "key27": "3uPZ9QcZfqr9qo3fNbsJJ7Bm2SBjoADgpLCKQixY5ay3R43TnSDABCGxoGJCKM3ZFDKSVUVReQYUiaSZrwCGZXnj",
  "key28": "3pVZdJh3jbC3iBEpAj8me5GEzNGPvRupHU6ax6pjDj6sYy5cLFdXzu5iWgsvceWkUrNuucKu5gPcy1DaCXYHaf3J",
  "key29": "3asfrdBNca5seKdx3xa2wVdLZz1KVknQ4rjVmekuKwPydF3yGZbM6ab8cH21JSnd5QDYPtju6fd2WSrjTWsFFUxY",
  "key30": "u75TYZfzYrrCHrdDL9HmVwfbdoUCG1iui3Htt8E3NJ7S1PTHLLwyzVWox5GuTp8kvVNXGH5uUqgDM2RmT7BArGn",
  "key31": "2xF8g4cLcj1hM1ViFotKonHjKBXjh1xtTRQfAZQ8gpj5AP6nPrAVymyKmBwY2GzFNLg8y1g79aBEPV91mTMSxscb",
  "key32": "2CFVtotE6Tr7bKJcasxu3jH1Y655m8JiH5ArWohXCtQgiANNox9qoo3ssEawkAojQc9FyCjtxCBKfHhaPACn84ye"
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
