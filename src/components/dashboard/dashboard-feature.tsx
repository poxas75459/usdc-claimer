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
    "3BCPidLBDt9kCSQqzJch6bFoJr5tjEDUJC4PJZWvqGuqGkFweNEbzXkWnGuDcbQrHaQofsQMkberAW5JCTYRjYg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAQBsv8GPyfKZGQEJCejq1s5UvjofB197FLW6rw9bbB4MhaTSThuBHW3NPFt2vH42drdKCh4QmTwE8FqA2hY9sP",
  "key1": "63BP8qimNwUxnmz6i1zLSboRPZSqJLi5DF4acaYywkdN5Nc8zc63LB6ykqvamUt78RqszG8jVp1PyMPMYedXEXar",
  "key2": "473kCb57ZMD5kVydNm52o8TsFJ5YTc9F2P36TbVu2TdrUceQe3bee8r6TE3MuXaLUScH5RfxzCb2BoJaHMx3736L",
  "key3": "51JV8Hajv3VJ23MLq8ymuCZ1PF68hDPGeM6Jca1Y8XqigRYNj6GqnAU4FQVXgfaH9X2Wp6cxFguT7sEjCcQ4ykFR",
  "key4": "5xSppzX8KeuycfXosmDwFDU9JhtEwhL1zCjrRtTv6VqKuKXqCtQKg443FH5norXEaXEwmsgUof2E3FuKJAQs99wi",
  "key5": "3kSMy6MdEdEv3kJvhv6bMtL5yDpxgUwNWy5cZ1vsYeJjmT7Fe5dJm7kCyqzumEPRRgaLYaz575EcS15sSyJLHZBs",
  "key6": "4PSZC39SvRi3i581Fo8ocrznMairqg3Ghid2UUcmzktjZBFHRfBQewx1MDzG6yeBRchVEwCp5VM4AJRJyZ3JRGnu",
  "key7": "5JacYMx8CQwvpU5KJwuQZZTY8Gx8a4oY5LvB97DCYjb5fnLA7tJya22tCAfUhFKV2wzFNUFD4AdAdDVQ4Yp2dS8y",
  "key8": "65cMaCYDk9iLTUubUFvhezjmaEp1BhxKhnb6EPqR488sSUcrXx6X8x3Us1xXgLMuKzPKVp3etJrDt3dsKy3w1B3V",
  "key9": "2PVQvjrdrJ644nEk4q6J29aBoPPrwmxmj2ziz5vxmmUjRUqyZfQWzXQJdEqEQNRnHenHM81vvVRwGkYv9CbVoJp",
  "key10": "7USTcMUa1owzJGnm6v5sjSWMaLRYbMdzPJXPy8wCbnDAdJbnnyQVzGQFk2BP3aswJ5K3GgdGtx94q16EAZnSSVe",
  "key11": "ZtYxBVNwF8DrBfsx6R3R9wFgzmyT6i1zWxvegLzLonzhaJSXkxTApYCv4VQ54Hm1E7tZgVw7GwbSE6HC8s22mtQ",
  "key12": "3FHozmjZLTDZtYu19e626srM389Xy59iNs2WxYq264zTVWQQoWPCd2Z2GMrTXvtkCdeD4WUJ8BMbatWSKwCYsdNe",
  "key13": "22uSi3m8u7E7LrJTN11aFvK12gCCKNCYXQ71hyYUWXudrcQdeWUEPdFfD9LEy3jruQVufnkMb8bg2AQM91WNjJmN",
  "key14": "6zc76ckY8XnUeKKrgDrnD5Xsv5xnFcdSY5BjwZkDYYmBGqX1pQLkSzBAV2kAA5nSGPU5ShgzupXBrUDS2ShVKhg",
  "key15": "46f9QciL2naecEpEV2C2Yto9Nr1jneP3rLYQ7HFoDcXgYCdPncapBVwbYjmX48WxSB3w99jfg8fgSyjKRMYwrD4k",
  "key16": "3uDz5F4wM1TSA6Zz2Zmj8ssPGXuLUMRsTySs3e6Zbuo91zLgaWBJ3LtSb23Kn35RVcHP3NajWacR146WYiHcUeSJ",
  "key17": "5JYqiwC7BGAAgu8F9UNxuvhWNCARmne1ocDuZnAaM9tC3qBzRPWBqxcUGoHBBHRqh7TidyizHewAuWuGbxRRuKTV",
  "key18": "5APsTCXC99YfmFJC1RF1bXm128dCZMHeaFGW9dPXRgTruifr9cw5u3TeMRjjfR4VoqNhBALanmdWkU2cMiuw5QLT",
  "key19": "4XZFaxCN4cxy6Jj9wgxsHdFrEayyPJYu4LRQEWj4PEyB7r677ZHUTPTFkR64XEE7cSnDE3YoxKFAeMHUu8LbYomo",
  "key20": "ijKHNQyNJ17wL1M91bp9d2NZ8KXaHCEh1rLzsecnB6cD1PLeAVf9TBvxDtjhfCaiFz5EPFDGnHRD8HJGruzvvJ6",
  "key21": "39ueScnYgrtSgCa7NVvoSupHcBy3M1yuQz4bJyjJrJtM618aCaCwG9LtYTmpJCWf4jKToaX7awyueruGDQtxea4E",
  "key22": "2S3FwWP8j3ER3ez4LFxUo6PqckEKu1kETyFpBnjEzRzEP3LrG5q35SkpyqafVcPFoNb9sAcKg2GjdHNUFnUr5doA",
  "key23": "5vbj124SRgUGu2CKed7BsTBbgyjFW4EHFk1SavrKLX8KpRov4B6vpP9tXNsJC6E7qMA8ReKDGBopSVQx2QVxEwVR",
  "key24": "4zfLWEbaunJFdo8BL2AQpUjaarR7gsGCoGmL47Sp7ZiKtKBBxkj8h6QSeLVrBbr6WHadNrwpwBVUQxQR28Za7aZu",
  "key25": "2d2oQVmUotLJjwGrHsCw5QoV1CJNmghMHiEE3JeEefZQbK6q7TPART8E42JegHqTxsrTwszWU28n3i11XGRQUat6"
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
