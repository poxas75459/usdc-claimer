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
    "39GtraAgb5Nio6Bj3L2Q1NjM2Kx6MAiCakBWmwDsQmD5ZjwG52c5EjDaZtJXRmApBZKsqJKwCEqFbgMERWBA5HgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iBD9zqwc1p4mAiWb88wqJc4vkpxbHDXMM7fmJtJRZJ3ru52M8E4BVQVziUcBE8z52R4QECUGHTLWu584G3MaJtF",
  "key1": "4yYpyFQ7ziQXjE8AiDGMRhRNqdW6hpY8tyw9SVRkY3y299gWQmGsBeLnpu5bnAyzF7L4vBFzrAkiNVAgS8pKWQnn",
  "key2": "2fv4bjEJ5ETf4N794C6ijbRNWyS8Tfax4KQAftJ7y8pgre8CXdAoSsoQDB3xjvz7xQ3SqbmWLqxjbG7yCJ8QEvn7",
  "key3": "2BPjUywdq7muF2xczJaEUfNWAW6dKUQfhwoVbZCNmGPbdM1w7jXHTubracsPfefh6nC6vMNiY1bsjtpKEHDwFkiK",
  "key4": "4vrQiuGi8U5Jo9MrLFWuhQ3c556ctPjgJBLzBX8sBMpPSwwLnwcxaWzNc4LRkzGdqTvgneWZmVptnE8i6qBwtzzL",
  "key5": "2d4oJbteJarNk737LWGHqTBXE4LjpMfwJ5ht9LoScojPnqf3DkTf6PtdRd4XHqNT4BboSUav3SNFQNz6GAssHYHX",
  "key6": "2wxo8VvYpHkJniDJB8JsfwYBMKsQitX1ifTSfpW2VAMcz9W97BZdu3qxeLsncrtAMfGnPERjatKVYr24UpHWG97g",
  "key7": "4mHkA3HTY3LVwg3rT7fj9aPGjzjeWaaC8UDg89sAr4SLH4fwXHbfyNww5bWGNpYd1Fbs9Dy7hZmH7DJjRWSG7eAe",
  "key8": "41b4Yu6xXpLivuA6EqUBvb1TLAeWNnReKL6xHjfQjy9tMxb6owscVTVdmmVX3wcrvjyc8wA3S9mygtGJqW2ABMGP",
  "key9": "3VE9VeA8xBdBW2RCgQT8FshH4DVhY1Rz2GpKJVudaqF8WNQ4vcYUdj6HWtW9TwtZvEq37FzcEvu2SbeoTGNvbscd",
  "key10": "28iu6jseXaUn4Kesyi38in9T8kPns7PbuB7sTUs1HDY21fVhkuW5W8A7EQDJdssQALViBoujX8s4PJFmKpgWt3gu",
  "key11": "54iP7SJsmrs2xbYZ9TPZZ872X7tf6S8ZHVAvMhe54UrdojDEp4tTx78q6HzbSwm5qrEk2PoDm9DJU8c57YL3zsVo",
  "key12": "4HSzk5RrmVWP9zoJ1vnub3AgVUU8c6zQxUq6ZfsYTSEu3HWgf3BcmR7WZ7o8KZbyZHPux8T8Rv4sKpCdTANicJTi",
  "key13": "2AJTwoX8be3Svp7TDgYy1RK4KXNGgKTuKPxHG6nV8Htuj2Veup1WugsNuShdrD8d8PMdHSW84kvC9yK9BKnFwSGR",
  "key14": "4Ks2j3FJyqjewkkGQu5ojViEK11S61az9xdZgmwPBXScKfwyuP3JvZcfnYqfJ84HL1YQvMAChiHy577bhKS1zSCU",
  "key15": "5cyGnxUMFAWrd28CY6YzhAASPzTUom4CuEvWtjyQ8LbnpjjeTiju6nwXJtWzkJsxmejCRoeWyvBsYXvcvsdZh1Wr",
  "key16": "3pETW2B5hji8PUZehwdbhVtvcTPgeANYAMus7xt9iYayjiCFQJ8nemkVTPRqnfLU3rJu7v4jBxyYxbD2pStvzsLo",
  "key17": "3i3bDc6mA9v44nxsYebqT65oekiN2T9KQXwABcBHY23ckyamZ7Wwa9dbGXNDxRYFcxXC9RUcGWW7PH93WPdapWPt",
  "key18": "LZAe4VKWQGn5wz1WjGfdnxXcp2nyx7dv1xehPxgRwn2XFoTknsCkmBqfag4GtuDM6Jz7ftaajozTjtdWojt3oMn",
  "key19": "47mDv1edCoioihrdKxv353sPV249gamFp1w4Qxk1UZtiSY6nWFyCSpwWsKf56ijkKUA2XATQ2feBQ31yinED2GhU",
  "key20": "JWMsG9orXYGSHHH4p9wghwF8jQfaeUAyXZFJBepWdW94txcy5zCnLsVYZf4vZJ3L8tzh3mXLn2PQZ1cHE35CtT3",
  "key21": "2Ke4VvELtLXesDpQwzq7LKH8HRTKfDjyp1Dhhzdf27CLKoNZNNeHDi2EvfRiWT2rvKG5BZ6UzriSjXK8GiMrezuF",
  "key22": "4c7zubYShgg93d2ucChcqWDcbPXRF3ph2gKgtHYMUxD9xio3sNJuG2ubkdSTAscnPVWNhdQoqvcy1Q4pDJXrYNKS",
  "key23": "4szoCq8ZNEUVLhaZ5A14LCZ2RtqtX4Uc1ybxFJGUMAxfMZC35RjK55R3QceLckExL71nCLVAg2EGqZ8o8So7r2pj",
  "key24": "3rnzozPMfQZNotUwx626yGeC5sTafiyZMNYcrSNpEDbEiFrPJvj3K6pZouQPwVMJRePGBxCq6tDGLU8wRf5uVnQT"
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
