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
    "zikCUD6Ka7ixRSzuYkRALjqeriRGwagBwdRjdNt6c7R8cTDTBDH33Sp6SgDe3tybZszHtWj9GzsE41gFY2k3BVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35meBB4HdvtEWnoiSzCULts32g7QZcEHLVwVksnvcD11oqyk91MDANFDyTyqLRyBS257C8Y55MLQbcTDpxdLxQEC",
  "key1": "ayfFZKCbFzwdzXLZp7AKdXeWYZAy5CRJpypUE6qRPinwfmcwoo5U3Q1p4LUkqKWbkC2AY7RukmTVrGuwZqMFiHd",
  "key2": "3hy9DG9wx8GembK7u2tjas3kp8qwx7Ys3BxGDzXEPCWYmD2wWhkRNfhgfUCPkdHbrQMV5MwLbR7JafBZ1TnTBMA5",
  "key3": "5yH7VGJoaSQNwfCJhnkjvv5MNKV4k7gxEzmr4tBuzm6RMVEWHTU7zR8v8iZ8hWqfRwoTYswT9ggUGdrhy9YHLA3n",
  "key4": "42X4Faxoytd9G3VHnCSZRNjwybejCqypYcyqLuHgYhz4wZpcj3C1XNDgkwQtTLsCQMwzqQBFrQ2NrYggzHCmAtud",
  "key5": "2xoAgQTBQnwjBNZeYnUitSD1N1fzNTmD3kvFeT34pCLXJCBVRyG3MdgtqEeNDMgxvSsyVJVNUcoX3RvuHAZzW1FN",
  "key6": "4ksqT78Bcwz1PddoefCCtiEfQ2VRxYGedHs7JdN2MrqR1f69ZcZc8RvZ1RRnWdKuj8WbZzJouF1whvXBdyM9L68",
  "key7": "5ZPx2KbFbyrK78U1uZR2q2CuxwXu8vyMNevhNrHsrTDvVcsmtWjvunGkWc28sRpXKJKmc6km2wNutuHNwp7zvTne",
  "key8": "4nv7JW43hFdQzFoUiywtWTr7yrqaLFTSbNcy6ncTzAZ8S6ZpJeZ6399RBJztvnomJWivrFQDWcSzUpjX51HeMZmt",
  "key9": "62S9Aj9WtCvggHBqBWibASv53QY41BZSQyhzH8GqU13eyQc7Um67Eb3oLBKUnSsF4WR6MpCHFLa8PTFum8xDrLbM",
  "key10": "5EHVXre3mLsseyAfHqTdUZN5K8LStQUZUV4JdePEn4kMMeiUX9qv6zj2oavQxQ1fGjHzAwBS7JMqEaWf69y9b34m",
  "key11": "5n6hfGfL6cEoNZw8bEYgyJ4yn5beTceQKkmC2DdVvxADmeKnTn2KQin783SbJdDCtwSQmueTr9JeLAMU3vdsqsC7",
  "key12": "5dZqGpxFxV2sbsTvxNKqzS6WAcTM6BuQkBZoCS6WJUasohb6JefPUe6brUs8NQ6xjS5SRmo5CjvGTpMvxULbp7Sh",
  "key13": "pxYkbdvBvGJHiAsEZcm4sreLUD4JcjrBBmvvthsndFKJdsZAQxprcSeiyCnztZoLHqtbC7beQYyN59PP3sm4UaQ",
  "key14": "4dRhBJyuVDBsjJKbyMZqo7a995QTgKoGT5GzVgxV5eaz893UCuikW3iJ7i1ZNywgvMUwkPRbwhVQuTjGMkAsSsoR",
  "key15": "2C7brq3g9P7mAz4P8wGkE5dXmFJ4T2vgwuhSxmTpXS5DzWPZQBsMS8u7HmwDeoakoGnMGrZfGAyF4yCXjzWD8ZXX",
  "key16": "AShF2bpkaAsgmVp94MgmWsZahukk5rNvq8bVcTky7PVtvnPpN6zzD6Lymnacmf8uqRuJ5XUXKqLV1iEtYK6NpYK",
  "key17": "KivXrMqxVfVE89QUjgNNRpRNKuXLNVxe2xtYQzoA3xxBL6rVHuXtVxdFYEYx94fkJ5bDUiQ2GpPtqpjCp1q5SoF",
  "key18": "2P1rGEWvUy7BLbEeQCuXTue1rM9kLgzL5W58m5R6G5csG8dVcZFQiyUtApFaiT7JfHLYJa9vyaJb3gZDjc7prVRs",
  "key19": "X42hYVq9Uq3Wc9FWL55n99MiaZYHj3tVyya3MbNC9stMKYKZn62HgoNWNB7TNqAeq5ZX6jRQoXoipaTtrNpp36A",
  "key20": "5f6sW4UgiU8Z8FugRoUgbA4zPt2p44VHPxr7rvn8XrnV45FJRsDrWGxmTDkdsgDybs7EVJTKW4XFCvGsG6SJx5s1",
  "key21": "5GytbuQV4CEUe2zyjUp43NqMaFT9ah4nShmME1S1Qo5d4LVkx8JTDSaWVy1JkzmEAoTZ6TDdSdtVnumoC8ceXMBj",
  "key22": "65yfRAN5Tt5y8Mxe9o7BWk3mtvwpajN4qzs48dsy5A3kRnNbbRGD1JHFwu18i5X8NkDieqNpmjtBQwhULRcs8mEx",
  "key23": "yHhwreUHjn6M5of1zuzUi8S5nCVHjwqFHqJJW731ssPJVfQGK4CpSz5S28HnbZjFkNQU9p3H5Zt2bqY8SfqWXso",
  "key24": "2MwXoEjgWPhPVzsmV69cwcDG3oqmK1bVQwmfn9zywMmAYVGq7Ju6WaVE9mrD9tT81ViTada28AYmZLwd1jDHwZ8F",
  "key25": "632wGuL6ePiES2S89CSAgZm87QM6n7hXp4hR2TCJZYYYD1BoTz2fqgtCTrTMc6frsqdbvuWTi6AcFhNLCcWHiRo1",
  "key26": "2QkYPTSpAcJv4ZTtyhniv8BAizSCHXABRbmpxJFRe4ryufSBBLUqqUALTu1aNTkuZm9sSqNVc2DufvDG4WxPDCDx",
  "key27": "3G2tZy1WqSxfMtYYHQZ2E15jqLHGMgoUxZPp4TMyWMc1EcmrCHPUTHrXEx73pJTdYQ7DWL7Zi58JAMGgy5TuctPW",
  "key28": "s9EV8pkY6SpEYghryt5X7Rdy7nYYtXq4ZWiCwFwhhrFCZ7FGXi6MYroTCwhFiM9ykGXiMid5xciTrnpyaPGPRTv",
  "key29": "5Ht8NbnyLnBLJp1VNZUL2HBizRycvPmdWZ94MDs7tZyMwowtaXn7hCYGypDLm3cHcY15GomsuPyXYPaqUvj7sWpf",
  "key30": "5DPpZ989fGYbpyzdfjiRzC9siQoEuhp9DufhH7YG2cn8CtxUdBuA6gjg35cpzdQiswdqSZYE5n5ZB8Tjy4FAxJHH",
  "key31": "s8ptqBUk42aTjaLdoWB4xnZ6PYgmsTUP5Hm5PvXV8vyjpAS5e4u3fbeZXFY1xL6bjmpKCVwHW9rEVuXs6FcA9gT",
  "key32": "61GwQ7eXxxpmJ4kAZ93ujHZY2VrmCokDfLeyyu9Yu3jAkKAGed4GWWuap96jcxkQDtTYgCVj5xnivV6XHnkuQy4v",
  "key33": "5bW4c8U8QXFSkhpBLGiKqKiVtcRrhESDuBJaGn51xpQCrxhh83o5oS6kvHFg5n1dzGMHZvU2XiMiScdMYwUBe8oz",
  "key34": "3vEeg6thycswQpKZYmN3eM9Hq9Vnmm6Zb3xPyTf4ozTAnEBsW8sroZvpX2xsPkRSjmHAASLowYFMjJQUVYhm6vWm",
  "key35": "3LL38b9vuiGGxJmJue5SoH8eefos699CunT7Wn5Rm4QaU41cB3JuW91TeUFAybBXnvMPXVnQ3HUWyqaGG5xDH68g",
  "key36": "25iYhs7HTzngBy3jvzaQiSLoA9vQFMvGCNMTSV5XLDjMPEjhH6qiuwDgfbGhhBZb3f23ZbXRnJcJYcgmgGoeCLHB",
  "key37": "4ivTTXbXKPX7ATBziU9KsjRwGUBi1W9bfCcMPjtkZs2rVvAsSdpnVoxVgKVTcto1ZC5igdi1u7hSv7sCk2mX3Ncd",
  "key38": "4X98CCqhLKfvFMEwjhTUG4ETHBTcTAcokRUA7zrvNhDNCTktzVrX51CzDz7MngBWazrfGAWXAed5EjiHR6WoGLCU",
  "key39": "4cntnhFYMk6x4ZwbgvBQ1GSDNYb237jMCBeJoiq2H243NsKgvNz4RuVp25t1DW4xEDRf6ZqBJZPuwf1oMJZ552Ei"
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
