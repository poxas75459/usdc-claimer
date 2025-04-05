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
    "4wbTyh69DHRTEvzU9y6NUrauoyA3LxbBqMKJuWzt6iWJgPbRpVTQpEGUNbY3PFFRSDU3BFUbd82W8uJPfRZXwcMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWnub3cY3vcmiyU12cXRC4UMQ2fa5jBpbHvzZUZzur1M9VwzaV1uiPXSKfkK2eE9aQa75W18Hc4C72rx6LeHXzj",
  "key1": "33LUooXBqRwmse6Sc7TJMai6Ey7wxVwriZRyMBNdad8XQhy4BeAz6gTBw9NPEyjPgdxVUHecWoTCWeKrxcGCFuF7",
  "key2": "pjLq4JeCUgeaAhAAjPhRrnFDkc6XTA1cqipshQYTVJ9QkV6AVdgkqu4UNCFcNnPwTDPzZaowMWccUy8BV5vZ5Kf",
  "key3": "guPkc6ZTPRM8wjm3rkSJaWwjmBGaHAay8yieCJErYQN9nMqnrTGUJaLAYkWkDGH32bFp7qhD7i6CxqaxGLJUsYA",
  "key4": "2aCLoyTjCzh1DxiCdbHrCDyzPLq99Y8jzXS2rVoh8J9oexzHjtAmktm5zprkYPz61aUwzD9ehCNukjyZMpDoJXgy",
  "key5": "4Nfx31nQ23i27kEh4a55AhMEqhoJ7pLp9Yw9ygiYRn4ZQ2iyY4Qizg4Y8iJqReoTUKfDNZgUyaMo6MypYVL2rF2z",
  "key6": "f54shV5Nc7eeN8jZCafggXfg4wD3Y2HFdoemL7rUNwpx29mkkUHWSf1jyczSFp8MZo3h26NiTjkenR66Ci3RSqB",
  "key7": "4PkfghtFnfxUv2vkbiznQ2zqbxLcBwofHDdVtw8NYCyyXCXiiDTXYLdtkqgJGtoqXjBYhkE5tcR3H2SUYYTkJaxM",
  "key8": "2Fyrx1KnpeSzMjr7askW3Yp1Ff3UwbqGWnNy6ic2FUv5ECitbg5UpN37aKL1w1ckNjG51jvXxhFbMCUsJ1GKzWcz",
  "key9": "2mLjE5TtJzWpzd7kyv4cNM1sQVpCftFk1fg1zfitPurSM8QBXXAfZF45UtEyS6w2Q3qAqAdRodPuTPT6PnnnC8VC",
  "key10": "41FDF56NCynMPFhT6vF7h1ZFMTF8AfwJ5z5pBN9NXB9cVEDWJAoUmUpU7jSJugpudiw6X4Th65Ei4VP4TgeLKdST",
  "key11": "2TdfgoHkwrQaksG8FiojipMo5Y9XDN1LJDpijUxvmjStFsH6vBedpHi7j9DXi2qxAaKqeeSCzuMxXRemwag3LEvR",
  "key12": "J1YJoTWqGWNf7gMpJ1biaB7rAVj4hmoZwk8ccqsHKAPACJFwT9QZ68YsZx5ozD4HvmERFEXfoWDuzBxGztQRejd",
  "key13": "TatPogaNeGFBtDmPxsTwHYXHT9d8c5RPH9si4BzezaX4WzYJgLS5j9hQCDd6axb26Sv5fGU8Z1fThZzfbSp4vhD",
  "key14": "3D4AyKqYP69CGEETSQwTCcHZ24QvikVoYBpJUkwe7KT52EEWwYse4GLFk8jZd28ULva36xLm7hV9aTTGmqYjyNP4",
  "key15": "5AtpsjjKjVQ4MmM5r4YDH6iSETLofpxjeQ9EFs5LkfY3ccQxXWJx3o9R7rKndKN9XNSisS6ruy4QL5Awk9CgRt1s",
  "key16": "gEHuGtZREHFMaUumKJkz8yQhLodGCvR9HbPJkqXH5JNkoFkd6KeyQXU7S1X2ENqrseWcFQVyKfwHVeVByTaPKmb",
  "key17": "4rgfpHhxt4qxh8xwzbHTkrN8cUczA4v4vD1RHYPC8UZMdzoh7wsDtpifsu7iEzyu8vkxjFUSzrxQeJhNXTey9pCn",
  "key18": "5uV6kAiqEGi7doRqe57h5WzhVfgCzXx9x6WPRW2tkHty3Q2ixPTtmcWmD7zAqDG5AF5e98iuUPjf2r5EZr9G25ae",
  "key19": "2jTe1Ve6vDj88798ZntT7G79BwNVAnpca19FG33dhRpuqjtx4kUCJexnAUpDmQ63ptABH7LnRyNKHm1D5o5VmVKa",
  "key20": "49WcrekS9W8Mb13hLeSqDYXvsdATpFFbWzHw5bmvbdpaQR3cUqGyNean7HvjDwbkWywwbxpe8gBfnE72STriTfNE",
  "key21": "3saitgQSAm4KKYVZKzTgjZQXeSmsp3mzYHDknhYM2muYxPgHi9QiHWrhUY8yoBUCWSq4tAbyAf4GqVJj4Zyx1vph",
  "key22": "5Ekv8YdN26ES1vBUsjuoxsLbmG5TeRF3kACnopdaikiHdZVdWZ3NoRX3fbnRmtimz6JxHaC5MaWVTaJjY6t2by3J",
  "key23": "xYjar84LnMFcCV4WdrMCyunNdXnKJAKkD5aMR7pUDoT8MLNecMJnsj3E5QexdtnTKQ73oLF7Kgxqd5dWtwP1H63",
  "key24": "2daptPose7XjfECczp8hBr5HHkETgkHKW2Z4V4jK1oDsNJdyBHVXyVSq2ssyhM1BRQBQYE1ENwZrTzbGKxUKWP4G",
  "key25": "4DnVNAjFuNrT6yETNeLdfDsrkBULfEiNAxV2mUBhSvhwDWwtus8kJh3AQjGHyV8gvrSbhAeF3zrAstNe1r8ak9Ro",
  "key26": "3JbfNWCMu5tzfZXXFX3NNzvG13uZCipBZmifKhCTedVSJFtnrzTdNEiFMimKCiFHAPhq8ksyBotMSqZGxtaYdZ55",
  "key27": "sG4T9KhK5q3W42WQiARNVPkKs8Md5SUrG2vVXFPMdMwpwgnCnmNod4AKNT8LvMydqkPU15j8Uimjn7dXa2LbTsa",
  "key28": "f2wW2rezn5dP22fDB5GR78pjvm3EuHH1LyXvSSYwhyLZCT2DTpQwdhhFnBaCe4aW6Uq21JznP6dn4J347kpAGB6",
  "key29": "4wknGMvA4ecHqATizKifcYsY9uFyVVQrwf9F3ryLfw8t6VEj6wFBZv1poEcTWNcjtkdX3goH33wrucB8DAnwvhJr",
  "key30": "3MmreBRhCVQjy7akfmXkFzvSHTjhhF8CKSrhgPbYwQ9hC8VsjgkR7GPdTFbU1uS5u7RsUHQyWAkkSMzzbnZ4aXWp",
  "key31": "quna8MYz48LEEy6U3GWc9YAXrse5ob12YhgVxzZKejw9YsxeXsoAjytEpMAdZBNZ5Hak79bHykvFxRmiHt6wgFK",
  "key32": "2z389vP9xDSREGyCrbPvmmPmZ4ZhhRBfuFRBXNfPjqAT3trQLJKSw91e51UCfepaV77PQWNdNjwiNoaaairDEatz",
  "key33": "5EezBFfq6kVcRp5SwWd7MevXevxGuqhbJ9wQRf1GbJem3yYhD4PRyKf3GpX1gh6tt5w3T2Vf8sQwWGxuouXJ4TZj",
  "key34": "2D7KxTgagVzvr7ESJqN4HiM9LFnD5E8V61pghU7K6CFiDzqmNfNPobUVo7mv1FUp2YwRa8EppoBTbf4f1676gGeY"
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
