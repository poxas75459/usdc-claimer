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
    "2dabRrRmYWWujHaWcg7Suhh92q1JuCBKq6iEN4nmjLXyxxeqbXkmG7Q28seXdu5ZrXb9rHAmdaYPX5xJ5Puz1Fxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsWmHbExvVyqnwPjF1iMANAiZdHZZ2b8SYh3Nkm1dhdBTRneyRuYesLyRmcQtFLfhhhoXdkPKuoN6PBM83qbjnp",
  "key1": "2CsbHn3xU3wYFTNmZqy3QQV64JBMyMGeUpkFCr3dVDS4wm2wqesi6883YJS2sjSUx7FA5afcwRg5qmhATarCW3iN",
  "key2": "43yMsMuk2uK65uCgp66ACcfDNnp98MPp9pERuf6H8FxrftFqHgidv5N7wAM5CJi9v5WrTeau6uMJqVj7sYoFPv9x",
  "key3": "3J54kE9WNFaegvJ7KCnaBHCp93W7jSN8VRiZQRxoh8UrAY2Kum1u3aHiYe6Z1nRbB5wg4KG6pQhJeP7tsFvBKwD4",
  "key4": "gA7KqitQTBfubDpmkey7tCXsKqipmnqHThdMk1DEWURNcXD37twCDWJg7JkreWDM8u55uEjk7mPe3HEpRVGQPVy",
  "key5": "NdpTZ9toUM9uNZoJFH2QV8qmSVBySpuA2XjkQLiizCSgFkb4ixECouu1P4ur13ZnGFgo2kZpWeDAB2TGGMVgkt1",
  "key6": "FbfaRKfLoLNfegwXkatown2E86YtcBBivEAUnFZ31ruEdLiLcBcEDUWMLkULr8HxfgsWYxPoAyrEG4T56KSCMF9",
  "key7": "2Ax8FrWrvFfz9Gj8U6fA3VpxsheeJgxmzt9WsmJELQgZ6nuFrzr9osjNwqyKhLXKzQSn2jeDvNrBtGmNAQsx22KX",
  "key8": "52EBzsTykWaAJtxtX7WNrAPJgA5zs8q6GnrVBTm6Tc3hHF6XjvBSVzTSSfuuCgT2K4zMRSmhpp2josNHDeypVS7A",
  "key9": "eYP6SaChrDhrmGFC2mwDKy1VnCv2G32DjH8LghstexZn51zrFkgUsZnoTctgEzBeCjNyB59w8Lgm3FQ1meXjZX4",
  "key10": "5jqfAq4v8fYiR6B3pBXYkJbo1d5poXVsCXR1beJ54LMqoUQE2RoWL4Jq6Dqb5xtM4S6WW5aBhfjbLE1eqJCdLM7X",
  "key11": "4hsumEzMgpJzmVFR73P6qRpUDzpqU1o7ZAoa51KbQT1StAegoVukVKDB9bkacDbU6jcEG9KeznVYTP3AzAYzCBD5",
  "key12": "2hqUhAv8HNaq7ahCjdttx1UrF7c6T5rcbdproRmrB9bMK4LD7ueUoCcvMUYLCbQivNaudaNHVFs5LBeLzaYph678",
  "key13": "3JqokJCLiQo1rhZYKxAybgAkrkvcnGeCH74CDC8yfbRhb66FjvBAgwfGqk2gXvmYKWE9QvFoVovoCAr9Fq9T29p9",
  "key14": "4idYjUT5pUppDMvjcNqy4kmxhCenEZmFwL1jL66hGkDBaDgmNdV327dZeFCtQQVmCzUSK9YUXqUyC7dTnu3stPZN",
  "key15": "3bwpfFY8MqnWx16nD9MD2trqw24842o6a9upFfujBpopKVKV3iaZwdkHdov2JEpdXpkDtQeYo6HwmUW7ih78cVnG",
  "key16": "5R47RU6YdpxEvanf6iKo9MhAakhU4z2dBRcJi4si8YPjLJPXvAqvfphrAT3CiPZ35wWgdBiA68mSaW2J9xdd4yWx",
  "key17": "4d4bjcJyAHZxdcLHz6aWxa6S9qgnSUL15EruqtJH856QjP4Wp3B5GV1bhZMBgofw5NvJK1LzjpcvNz4syTJN7zMB",
  "key18": "3EFcbQ34wReUegmrWaCU3H1ez8vYkRxMvrJwSkBJDP66ifENSkPq1UUs48NVcAs6SAuN2FuvCQfMHFgEyioBh6B8",
  "key19": "2MU9qSCBsRpaqWXfUQWeDsdvnRuJ6HumPRzp1K2mctRyJvYtuTdRPGpWxAAvDYRftm2Go3oH1dohziUJUPbQqpd7",
  "key20": "2XKntqzrfDqntTXawTR6wep34cDLJHZ2aCXVx6LBHBBSFbEuSfyDaNuFk8JvjDEbZk9e4ZQt6qgfWmtYLLvnJ9VP",
  "key21": "5SYBDY8WHgeJXLEvkAGeAgx7J5kkvksPY2rdxXHKiCkDrFpdD64ipZHKkFm2yoKpBSH59ecdpsN9ffakqXyt9CbW",
  "key22": "3gQsYVgumZFgig6mEUpA7HEMUpz2smXXaRFjGEYzXc6VLabRmaHgFNguaRQ1W42H1ZhAqWrwx2RxWomtUCjvRCU6",
  "key23": "5SrVYBkHu3kTBuu5Qses3YyYYESwt8DgnUvUj75jNNDfG4X2WLfQPFNxUgnPkPfmHkRWApBkA1X9yfomRBHYLN2S",
  "key24": "3bQE8Q4bydE7CFbdzMgQCLmi1yc3ZRcrDv1KzyTkfzviMGMu828BDpTKsFpSn4PXDwEfPopcL43Pg6RTzHXMyZ7D",
  "key25": "4MWEVt4kfLnVPjJt5fnxZUh4TAJT2hCszQoVBhW5iaBgj457UtxdGD7PiSmKCQ2CEND9eSEcYEi229jABiz8yxeL",
  "key26": "4uvhZXKJv3e8JwxBbheW8RAkPVijGuizBVm9XsW5fh1PsdY9Ax8LpLdSk9QPXBkfpa4df3ySz2g7BUzvBTHLZdmZ",
  "key27": "5LFX5pBTDzFkjaz3z8n3DfXYt8cqsY6xNwQ2pnmUnctwLER8ZkB4UsDs8zfMADoxee6vy9ztqF1vvryYHPDj4ogp",
  "key28": "2HZNcYfLweiu4mMgPnLJobmUJZXAD4Z6QBza7kehEvCDkQSYehkG9F8D6sYZRLu7xvTndWwL6So9176ePA8PNPJD",
  "key29": "53vEPQ1Sc3uGSJU6xkgYzeWzRrK2mvwSUihBGWZCQgS4Ri9CHQdxaGjPWL4eipRwjWpog7hRtnnCXvvGmLb5DX7Y",
  "key30": "5NLNyZsatAzw5TMSkDguFGvmRavWn5TgJZX47W6vyZsFNd1tpLtpyU38LNxUUm67Tz4PuTwDBs7heUke2a8ZSAL1",
  "key31": "4CzemdyvKmDL8E6c8DLsN9YQsoA4Z4thSXt7hxDVCkwGLkwWeMJbBjLM6xiA6GxHAWzsE6u8z9vauJzbAokffSMJ",
  "key32": "3YvjnTwLv7gjwFbwWnX2MAiAJobBdoN4NSi8kLyjZB7ghxf6MWrF4KzHXtffyLkvMhkhxT7qCSSiBv8ZTRV7WCRn",
  "key33": "aio5cPzUVFRDZg1t2byCQrACS3aSkM6moqMYZGyx9VYSJiudCC5RAr26ecJE89BExzWoc1ZNfVVoms98thbNMB3",
  "key34": "23W2hoR9U2pyNKu6FtPQTLBP8XGR2A8j5FYThXjiGxxsRf9UAJWoAybjTxBvBs1YEfH22gHKyFei4E67HA8CxtKh",
  "key35": "5YoZWDQSquaqJymtDqDRiEaQmiKJDHd9UkdWW7znVseemtXYWcFHVy2Bk1Ujm2YLwLNoujgWtwbhoL9PYT4og15L",
  "key36": "3i3i9KHto1uKwTtQABtQZnk5FmopCmhNtGkEEAhAmAJPNCNj9sgAYTEexg3323Pm79rp6aGySrWWzDSRPBwS5r9G",
  "key37": "3juuW8F5meaJjrJx2LYEVws7xL9dReP1o8pzjXfLdnPwmWmo8z2wkZJ7ZvmEwdmkcveJTmtbz2gwQVjHc4DdBQLW",
  "key38": "2ErggQqLPa6U3H7XrNjpVugCQKV6nF8GVzpcj96mvbAcC24j8u2Qrppoej3DwwPvdfsabzWxn8e5uweeg8zck96e",
  "key39": "KvzNsziFFgTxDRRwqW6rNz4ASdUGBgwNydVQqgPKat3pWryEdEN3XH6U6fDDCRWdVJ4GcfjQJukBM3UBJw78fAr"
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
