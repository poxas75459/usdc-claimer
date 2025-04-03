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
    "5WXvUaESM9fpUFAmFEzXwNVubqEC2fbVoYXcuRB12fmdaGBbkYe56Q6WmrWviqXzEYFK3Suga3NGMyt56vSsAkat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68df9NRi1X3Tqt8Q3aHE7eNQmgMgeSDpkzHb6sSLAnG9NqoKgeJkGiiNm4ipGXazDxy7kv2eaqNsUr4hFRZfBg1",
  "key1": "2TcevxrKcFugg6eok6LwNDuLgNtKazwASyZr6xWX3qpDXPRVhQkWnqeKqHNg8MGXS12Uqw44EJttLSwGHwfhfAPr",
  "key2": "rQkjfv99sDPnLAbW11S2Pn8zw5TDQFKkYQjjz3thrZSBw6FD163Bng4y6B98wLULSuqBVv81ikHGoRyCd8cBiaT",
  "key3": "E6B9B4VVoWi3CEZC9Zj9Sr696HTX5dGSSoKbuADZx2RpHzJQcnz8wx5anETd1deMcZbSqjUmb566Cye4EnhtuYi",
  "key4": "2LBWzpdmtbDshwM8X78676Um8fV5dudP4VzS3sG6YYRXy6uLb1RN4iND6JdNWBtiQca9M1KJZgecv3kd4ittwpR",
  "key5": "5xTCnFvTYZvv8ZqwWNzNnLuSbsqHyuvHREp32f5ngEYphjqVdGxvL9tGkbtcWme2M7z6wBE614i3CSaSgi5JcXjj",
  "key6": "33tqRZUsX1avBsqFAF1bLTY5RYvLjH8VuyeBcczMcXDo7iT6RyaUeqEJzWEYEstGnj46CLitXeCBBJ8zTLhkcf5a",
  "key7": "5MfCwBCHkfD9ez9wyMJB38WrPxbmjco3AnRSibfyp5eXoqbyDVHhvHJnavE3rs6dzXxfiy31vWq1pWvwQNqipWJJ",
  "key8": "4xwU7L7EqPfASdZLPfjEiuTADzWM7Tt9uFAZ6FGXkGv3fy1v3tSawVm5cu5LXUHF5mFGRUjQLXVggdtj9qJNadvD",
  "key9": "2uwLk3VVMHj3EWwpMSBS9QWWUvBPpibPVc3y9xMQ99iXmx9jGJGbA6j54G5h3wSCyiF3kNXrym3oGkMfrqgUSV9q",
  "key10": "had9hsyeUPFGRpXow4UaYjbEWiA5UaVmQPVpnhJ3z1v4H61NCrnfKnAuUkG7tXJjbAbo8AJS5vn1aqW92gySyPh",
  "key11": "aiWH7Sv1oosgrdUFscZF2jLNjiUAncBvA774EsQkQGYG4xkdN1uDWfTzFosrTaiPhiMbqMQAG6ZGETKr2m754w7",
  "key12": "4JzD994XCg9cWyvt89czdBMci4bBaeNLYJ6tT7KPRWWzEv758K7FUNhmGRbrCLVPn1yQiSRw7NhJfhNi6n4cmeaB",
  "key13": "AM7xyRfb5HNXvxVVdfYvPdSRRed6nKgWc32qWDzBdbA5FiJBFwaywSKG58AtTvMtSZjc9DuGXbtD6dqsP1kyioB",
  "key14": "554QYzTjgfjB8AJbbQDWLjMpbJQbXCQsfuivB2wyCjAvh1fbnbqWtSeRzdRAVFpxqniL49oQrEhh38NJvADvfvD2",
  "key15": "4e7qsuV1y31cW2yeei9bZupXDpsxwrhp5PZTkjB9HqCgTjJchXFRTu7fvn2xh16QHjY9BJ1HRitvn6HLTXJaRccj",
  "key16": "61bmar1yUi1GQQU1mPUJCtWhsAF6U5yh7zfszmR6KmM7q7ZDJjEKRQUF6VAV4ehEMv1kK1H9ScahKUt6StBU96sm",
  "key17": "3GdmXLVZWn7Q8gH7pDzGca5phsNcZvmxgnHTDMfwNFj2pNhtmfs8xLuqbqYq85VnykhryBZ1neLXsbo3LUwJFXx9",
  "key18": "27oA2HiY8DveBGqk7y7hfZqibCcVYve7mvYvdwCdEydJvg8VZnHX7CVf1Ec3Qqgz1hDqCivrm1ytUL3E93kLeusV",
  "key19": "4EQpFhghsExpbA6SGuQp2d5Zzn5peFtwERkZFKE85ucapVFekW13Ltxd2gmancpMwJmELaDDyFuSiQWbTi3BJZSp",
  "key20": "3BY8577KWMfUpitPaEo9NXcvy5Yk4qXhaVQravzTXz6dee6N1uDLi5vVYxGE1y9PTBqNkNMc22QkdgpRodfXqwS3",
  "key21": "3rpva2iw6Wfnzo7iXnDTtSzay8oDmxdZcHWHaHr4YeErVp3x6mGm3XSW7C8CEpDpCvz6LK4qymZ5rNC1okN36b5h",
  "key22": "46Sw7GsBCFPLvm5uS3oyqT7mEeNzZLMDMBB67urhesGLhqWM9DqvHqP6x8MpH1D49MJJDHUwfHngFQhXZDoWWAuA",
  "key23": "5EEPHx33gCgWPWRQfzA3Yb5jurb2aTE6PPnbM7M6CVG1WJRVsfFR3ckNwPNKfcQkJSmAPB5xrWxpP49cV2hXGGPq",
  "key24": "3z36iCzp5dQJC3D32ZmDFXRggu25XgUzeLB3Zx1HPCREsx7gC92hb3qAtYqeGAuT4wXZqb6vA35jb6JgRkcRN4wJ"
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
