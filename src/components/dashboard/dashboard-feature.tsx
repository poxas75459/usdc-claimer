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
    "2BjnZF3fqMnDG9fRLUsDbDxPWViUuGk4W7Q3rTJVBU66ZJcw5SQGZxduxYtJRrJZJLzvdg5JUWaW8VgMJNpKkoA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCJGL9RvKpPWf495Xs7tiEq461avrn9Jg66fSdCjE7e48sCnLN8yDPUVtFKRcAhJSB22thKMkhgXZcku4ZLfYKz",
  "key1": "pLr9bg9Qxmtjs3ZD5RTVCnTFRkBcY6bEqoyy2PNum7RDMbNn6pdHAW9SPx9dw7WvqqVN6zoVF9oiH8W835BsFEC",
  "key2": "65YxtVX9mCdo47aE5eaneasKyhsNj13mGTFmrVxtYaAnCutFW5m3K3RgKPUZkgUWpkmbNUvZP4oC6n6g1jRBtoJC",
  "key3": "5gBAdAaXM6R3mw1rFQKt1uPGWTQEWpFc7VX2uA4kAFoKgbUYekVmZjpk1UtzsA17cHdgsx4NrFJar56LXu2RTvYo",
  "key4": "3LkRbQVwp1VnZiz9zX88gLG1QuZot67SUXwFWeCZZF5DogE4ZCVNXwkqQH3BQs6bVK3degXXDsH6R1zJaKaapGdT",
  "key5": "t4GPZ7qxUsvrBTZFdVvTWG2j12AGcSY5iitiN1VdXqkyBKvmqwpus3dmPGaQDpyjbAYP3jHXr7HeUvseJhetq4T",
  "key6": "2PRzdW2CSCU9JSUkG427W3JvDi6bY1y9qk99uY2quiYEwpVEiDbwP3BoSpXwA8cgMAhkjVNTejuizdmdmJpx2asp",
  "key7": "jzbodGi2FiEoKoG6LVzVS8hW7woS92cd7CPGGvPKaMuMTc9vsPuyFtTdEBbKAboq37Dj21PzAsMpqviyZ6iLz2f",
  "key8": "3vFnsnQGucjiRSJ4asmNmbRNibY36Fg4sGGUuGK9BuJwTDQQekyBZd1DK4UT3GL5iXCHEYrxKVPcpgBqAWeh5Ltc",
  "key9": "21H18sbUYoBsisEU3NtNvaosioKeKr3eor8YwQzVfb2y2vfkUx7h8mkJPCf5Q378wLbA48EdiN7SyChDwqNMLTCR",
  "key10": "24P9AM4mr6pqBv5qBLWZrTeKrYAVgS9yrs3iGpWZXysXMEKMvhWfJ19ZLyYmJWfwhSnG7ViR9JsCb8a5mzaxL45v",
  "key11": "32UHVXnokgnoPkyPSvywAMXVYjqBDkd5GSRPq1svpkZxmzzRGLAcT4dqF5tHvNagZXZiKaicDZLqcXiUtAGUnnEE",
  "key12": "312kUSriTLWtNx4BHJhj7XZLz8mNDR8o6P9qYQd27QbwxAbaGTRSCyRFJbzdVUKoBpCASDmjWcw2UPMa2TE1exkB",
  "key13": "26Bak2KyeskhHAnFAwVrQR1h3ccUetmW93SXQT9AAAkikVRVjpKsBnSRbAp7gMbLJQhc4E9fG4hQwnXnJpnuPXby",
  "key14": "3Zh1bve2UFYNN42JjaDfXHGwceETS1JFC9SKrBjzbcdTtRB6PdsoGoMfLPkdWDxzaL2XFaf8BapVohneZvqJcXyW",
  "key15": "2m6RHFB1ejBg7yrLwPZeUfpDigVhS7bJay7fZxtuk4GwT65TKKFEvT9gx6Hxkt42ewacra2tbVjdfwQbs3BJtAmq",
  "key16": "1F195mTCL8nmCeuC5ctdjFVspK5y8WCPYvphZrdgV1Q6Sv6ZBn4DSW74j8f8Gq5jJPDv5wJ1CJALeifWwKPSWPd",
  "key17": "j5coMSvjBvtcS97nqA4KXUa157p5g2865tgSuPJsQo1u67RJ4yFj9w652EKYivgC3z9Je2QrisphonbXVzfitnd",
  "key18": "2PFY8L65VKxYq2aNDCzHwmytBJWpXf4dKthaAqK7isRrWRdjUT9bQfZrkUGBdwL9qHWoe5iNfMRY6xyxCwvtuy31",
  "key19": "r38t8vEvT12vbetM58pUmcgTqA1bv7epqgqUZ19JoSuG7DjFVQuBHfCAA8veLVUDUDrYGejzB2p9NxP7DX1rPf3",
  "key20": "324WxKARN4WCfjqVWVZVoxFkZy6xpTgmbJak8YLbVPqk3Kq1SS5QAGbr322gRcGKnUNdFT8ojekuu22CiKTudijD",
  "key21": "2hNJeMwkQGxqaKVcrZEXQV8GRWERkURg7EW9C3myEXivp28vkDXAvQHkXYmT9skMQcV43GkvD7gTAEa7XkpBX6bx",
  "key22": "3oPd8FPXxhc8XCM82QacrFmzR4QYBdJQePRynU6LqzKegZCr28bzr6s3CPhiC2zP8TE879hJeh8vyukz28fWKVy2",
  "key23": "tFmCTJi3BwXXy7RFRYMCwU29ek7utB8eUjUNUFLJ9fLs1nQgP1cejVAN7QYABzGhuEZhzxhVyPrRaTGiTZWVN6D",
  "key24": "ACrM5HjAXsMnfu8jN2N2V8HsnDL1ceBS8jDJ8mUoqff9AFX4kk8hPUzAPwWpwqBKszUcB9fo4SHwkFv1atKwTJX",
  "key25": "3pRBGUuJCuZUzDfTnJnHt4DvoANJkzKq4eGDxfH4NBr2JbzrU9PWWixgymeqRU62LzQ1snLmbMmTCGCeJXBF9YV9",
  "key26": "4KhdXCeoDjmPoHzBCLhGxpVigNkQn5tJcw2kyidHJYaziCPhndwjtaa7G2naCZMpr6pwfv8YtFg6CZ688YZS3CnK",
  "key27": "2URWTwjvBf9okQwdDU6W12dx1TbR83y2tQHDnEZPyHCGkfxdkekpRAjW3RQyEqS78cQW6JscVbfnq7We8dcfmpk6",
  "key28": "58d7msKGq3Jd1kxkxaXQy3kiPUxuqwWTMSxyG3bkT8nPoxdkdT5t1wHp1SF317FaGZKHMQXeEKq1n42ZgTkNwzqd",
  "key29": "2fuUoeBoEjJ8GfkEiFN894T5Ch1oFawK3BQoDEUw9QFptxC2rnGwmHeh2zsf3TMGFo4hKfZqmgwz3qQ3QgKe4zeD",
  "key30": "5tMRk94z7XGTw4Wj6YQj9HHLZJkUwfNQ1yzAJVZh14qQF7Bw3zNnJGtx784LNBM6oCsnSg61HgAbdJ5HUbnpEvv1"
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
