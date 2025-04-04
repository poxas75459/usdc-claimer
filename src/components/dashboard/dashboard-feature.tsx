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
    "5BTxjTk9Z8uBLsAi3MsDD8nMoomn9t6rKxf9KFbJaQ1HiMJ7ZcDyFzHajDu9tbkqZcnzeos6TcrkZUu45uk9SfEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7qHTgUAU2s7jRTgMpi7D2hJNuvwNYE19E76Tyc3arFsxMNY5hJbKptp2EUve5r8Ad3Pqit3Q9qm7XDqUXi2KRt",
  "key1": "56CUg9ZqvbZjVLYHBFsQnAe6jHWatJWZEfGmmpAyiBPZ6LKBvJnJmjQ8Xwj6ekXNhG3L7Uvoy1JJcvy8XrGQYk3o",
  "key2": "5G5bTQA86q9z58eD2FkzjTbppwqHp2dhATYhPpvvPEvz6hJGrhtwdyrth656XjEgccHRdd1uvPdewj5vGffUiA4s",
  "key3": "bsQNW7TJme4v2K7Aey9qTEY4Mv9q3bFxjocGFjAJ8wbzegjCHBSQd15jzFvscaCSHky21mdJfVPr4gRZgWDxFnN",
  "key4": "2M1QnANmf9wmKjbFFJcFjuqCywujkhcuQe9NY1jv53ymBz93KeFbdHDbWq3KLZ65MtBtvgoQy5eZ7wfcNComqymf",
  "key5": "4tiA8MoqdFYaxpZzGY6yXsJWKWos6EM2zJSVncXw4dYuSBfFBNScmJTS1Sx4bua3U74GMWwx96djEdJQAHddchsG",
  "key6": "4U9C7uQX7Spts2a46rACHtNyve8LobXLW25jWzsPZZC25DBvwvo6Y5z5Jfs8ARQ953YYfgfZkKdMt7esMqFPk5HW",
  "key7": "2QCorm6nNmz3DfYsEtnHvWCNmLSU9mz64TkXB6ftFmPoy5Sug9z7fwMnmKUfbEZHA7jPij2dUjrDMXJY4jkU5Cx",
  "key8": "q3rJwfUi7UEo1krFo7Rh9HsRy1D1wwz8cZ6MYdAdQp92xKm9xv1p6s4BQVr6SVX2BqZPRUbYbw3utXVis9BnonB",
  "key9": "ZAG5jwqpbs4mCe5ejTXg5nFwDKi8ShBGKCYmGN4jvV89VkK1US2sFkzgTnV4XAB6kSvVgFoRu7QAaKLspsw7JtS",
  "key10": "5Uu7RNMs833fbBh8YGvUZYQesxMT42RrnE8FFS2meFQhiZLvTM7dhRqGKoxvNKrRLdFZiUhuSo8uk6HSbY7mD43x",
  "key11": "3MnEsTYSbi3CBBqvUdENxtFjcxiRmFJzBYo7ExSD3fN37vCGLUyNhWTz2iXdjovvmCbiEZ4zsPWdQmGijyEoUgHD",
  "key12": "61w5oXYPdWezefoXVsFLDwJMsVFUkcwz9rM2V5gXkb7eb2FWcxNQ4GM5T667bHZkpp68ToGQjwSG54bAd3Ctet39",
  "key13": "7bF5zzA57Vn2AKksLRkvFjzAYEwauKdR7WU1ycuEdMWN2LPPxnhj7kpwSLScACiPPfAkyDn5imzCiZm2ZfyUxK6",
  "key14": "4t3pv4o3w3jijQsiRw88ThnkXxmT3ZcihYdUjPfZomJxaagSKNJThZs26Mhnto3MpnC1NuC2w4mSzY9rLP8KEpKz",
  "key15": "5kacXQ32Qe7xw1qLBumGyS1qtcaeLsyN2yqPq2i5b4xpyDWMzALTZby9D77o6Qh9bvBhT1S2xFAHmXeFUnySgfqF",
  "key16": "2E8qqyjs9kppy31QmpGpMRwa9s5PNx4ndoxADJbXcQat93nLe2nJtXctX73SekNDAfM39rBkhEc58r7k4V8bHPyn",
  "key17": "2XtfpdbYZEPnvbzVLHio56m2HbDazQjWfB47q3DCHxGoMEgjpLCS7Sim2sLyEp8XtJfakQh4F54PvVVtbon5zD3f",
  "key18": "4oN3HJN4aC6k7cH8bAAUT3oEdj81yFWJPKEVdaWeiF2rUASXKGh1A7H69wQL4DeyNTc1SFtoConiiufcm1ToHuRc",
  "key19": "3STQrp4UZkn3VRZtCUSuus39gCX3SAaHkYtJdyt7qAM1MpRosNpM77XsRTqVCS7w4cuwzrXEj8YjDgR6saKwMUsv",
  "key20": "4aaiJyqjc7HSWsPxL4Te93TBbZof77jTcFGndJfLHPV1Er8uQFwvzix2vJg83h6vuo11m1g87gNApMJWT2rqX5mA",
  "key21": "14DLGpny5FpFAPYcftJ5T6WgezcpJavnMSkKGaUGGTVTc23gUkSh1jxxyF195sAWJcKhcoGbHtXEVgm2BbTjt3p",
  "key22": "2FrJnivMttmATYXc3sWwZHVMzKnfyD8YzTCkeEAYUJD5gxcFunQAS2USKnG1AffPBat6GLuKeu3F951qxJwq4JR1",
  "key23": "pY2ndDHisCVR5bnzQ9LGwjjpCgwSKSyg8iQTxYZFP8DLWQrknPiUSgyFnYDtrs2yJj7iS5Jd7j47xeLkWYu3Mq1",
  "key24": "ih69gNZd4zymt8hJ559MkBNFN8dMBbwYerF88QPxA1KR3cNQkU7mJPtNqjJyHnyhWzrta5ACU6sNa7Dhpp82oG7",
  "key25": "G1cMew3HwrjA2mNvKoDSV1oJ95NrpQFixXeYjKv5y86svEE95ZsaybBxJy5eojoP3GkrWm5Rg11frPdTbEKW1UY",
  "key26": "3bYQ5DJ8WiDSPJyPXZNXWjdUs5TJXfMRRY16s4epcJN8LVtsJtog7XDCXJnbqE73bXksgtCyfNBobAcrwZPZKjev",
  "key27": "3HUNAvQvhBSaNPVnMiC6icwtvR65vJrbfegafjsa1jmMM3WSSXSgVkYz4rKhowjHU1tk782wK1KAAB5yxG48bt2g",
  "key28": "369pVKVpZMekapaqFXAhUT94Qxh9SuNhaFhzoqqg897LgGJen4GJJD1ihNq4Bd4SXXrZwwKSvvjpeBDuLDRt8pSS",
  "key29": "4Q53LADcUyME9WNuFy8oDKpALa8zep2RD6Htf1XMQT6WX4NM5QWSpEZwTWis3jdbQNNC5KWRGTtcn3c7Kh8Hzewh"
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
