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
    "4Gmmh7TDETgBMrQGtAzJ4ST5UVtxdHok6Rqv8bQcS7n4KDvJ6maExxC14cuyN8gYvwk2QKPpNibAzgRU2AbKQXYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KUQpk4P9uzJgHRMcmcLt3rE39Bb75wAeB8h4uFMjDYJmJ2TPcC8L7RDpvRK61TZJrPfpRZme9qiF87DbUyuV56",
  "key1": "3e8ZHhXi2dAFEqRD74aC4EwkuwY6ksseibD7a962L4isnb4NCP5RBNN45L5YugAHo1m2gZMnYjTJAnN2UGKWcyUS",
  "key2": "617ztsfN9hP7d63p8VXF4UFLWmsCWevyGXLrGJBKKjmjmvsQ3jARJgLRCZ3UvyszXkmq4ZcdnaXUEzeK8BcUtpu4",
  "key3": "39w4tB3c4ZTosTipgFSSv77MDKgL6SnD5xdq8tYaovKwsxmk6eHHdFquYz77tkJq9YLJVLXjcibBTvkB7UFFsm8E",
  "key4": "5joRWRJhJbiA5THbKKGi5AYTdPkmt5rKd54A4FQdATGFe288XLSYfsJe5S2qDE8SGWDHTkFWr9X1UEhrcPhM7jv9",
  "key5": "35op8fPnfsm8rC3DJQNUV7oRYUHevquZTk999J58Pbw3TjPSNwH19E1aee7PXyNgY3zhFavkveyCMWZmaG27ZDP6",
  "key6": "2g5cmvB8mLNXWgNA9WKHKsPhdJw4WyZEGaz4G9ZJktnJ17geoSLhw5TNfS5Zm4p2vVnVn2GZidN9PiD9eXyu3jTC",
  "key7": "61eacH6ZeAy4DKvQpzZpXeUyq6vigNsCt6HHhMPRPidDhSvW3qrJeYSjphut9rjqzYYffZvJv95H68WJCHutZj4y",
  "key8": "TFF7HQqYbubpsbhSGEHoJXnbfvNuPRC2Zu38AjQEzykSDnz7BWJZZn5z4MYyEv3FGKfZ2m5HSWijgBrN6urPuix",
  "key9": "4aDvPtis4ZixnPFYiTGJx8NJZtcFS765CSmztzezpdfsbouCfF1BMRS4ZQ2NGC47BJEzngVoTA29iZmTE4U64oBn",
  "key10": "ZbPuJE2Jh4bLhwustKKHAsao3KFxLG4noDtYs2UmRHUfeBjc9e2YkeQoucLvfu1ZXSiUZmjjGqKSnHLpQdSX2fU",
  "key11": "2nER6fPCFux5ppt7oyzcfFNJ4aa1kwkYcXWRi9ibzmB71yoiqpgggEcRrRuDAEfJnW3QwZD1WEB3587iRmG62J6N",
  "key12": "2VbbLLEnUTStAjT3DSPoobYBT3RwMNK1BoizFphj8z2k4p5UpN1XH248dsvc95Eb9bPTuZT4c6asUM2T2YmNr2KH",
  "key13": "umCH1bgg8qTW7sLxst7GSjfGDPFa1Fex36rLufk7BvYjmEP8BPBed3LrPdqbFQPPVEbpMLBGwDvvjisoSpmvaTm",
  "key14": "kvD6ZNx3Q1zkbG9hNyJFTCi42LDwoVkeRftSHxRUGbDsCY5JxG1sj4krhnHemqiSkAG7jPEqwTf2PGEodJZb5Ls",
  "key15": "3k69KQTUxXF6fjiGPA72HxQJNHfu1qsqrEoSAAZ77tBZE9FprA8CFQu19r9ftVAB64DBgzFnMnHQ8f5L1DE4eUf5",
  "key16": "3FHHrMuM2cuDS4YvQjbY4VdfkeEZSoBovXxzVq8PQGedEdQ3ER3f3mfEJfivVR5B5ZQWNB8mCqTindACm8Qffi8V",
  "key17": "3B8TB2q2MjdsXdTXauiDotU9nNyemQFCEFJmGWm3hdCb5ymVxZnor126erSmcXLdmrcmQ4gbLZEk937dVSqAqnRU",
  "key18": "5nVYPdrFMMQ9aXGYrExQdHVQopCCsGvFzL5hJvGF4CToDNQz7qzvghu5FJW3vwm9X7dPp5fLrh4EyF9Wood6F2H3",
  "key19": "3zmYJB7UkgUpRpRMf8KS6Xjpyn4xpxcZyJWhHPiTMFPxqfDhAbdgE6pFxuZpjbSo5oC69pmXyU1AY33Rc6ehC9Z3",
  "key20": "3uyDd6iBtfELRfEkyQtEa2DsgEwh5uoZSFRNHN4YAq9CR3vJ6Q4DMDF7wfazWwgNS7xFxpdsiPu6gmHEu2xB31Vi",
  "key21": "4A4FfVTF2yUX1j4W2h3Mqqv2nf2nfF6NV8zWDnt5HXGY9vKynLtMnzHKhJdLyQbsQGtFa5zSNUFXqwLnoFjaFYUC",
  "key22": "2pgLX1qjWLDpT351J5E9vv3K6zkjksbPNrXuSWiejjj6wi6xLGsyWFDrsLQLpPiJXhykvpNVKPUckeaBfEUwynW8",
  "key23": "tA92Lh9eAQALJi3ZMsHuzGsGLXFRG9RpDPxnhrC1Mh1uF1oomzqdAXxXZ6eozrRrVGprHjjTVzrBd2SG7fsiXvh",
  "key24": "3Hc3TM5BCYFepa8P1iE6P2JoDaefe1K2bHjPHjiYEg4Y6f7izQ2zTKNWNuQHSPVi5SHaB3xLFJec5Gdy7zrYynBW",
  "key25": "2wtrGBoPDm9ZGHT6M9YUjybsh1z3dJLHRe1Zmfbgbjb2SSpfxhtyeejM7KeMc8tndsxkmPt9rd9jc2gMK8oyN3AH",
  "key26": "4eFKmQiLGiq5XHhfAWvw6aFKPw7Zd4rHLUXnBURJ27jbmu4o2cHkR8xrkYAAREM7BjENghiBBpYm6KwmcCYZYJHs",
  "key27": "2LZJGxh2tvdgJVNKJPKZaVcrLUEN96usHWbVWJNxKft9sz2CkszWvFQ69G8ExqP6nsnsjwNLEGkyLjMq8KxTuQZG",
  "key28": "5ERVXVHof2kbszsDWjKXUr8H9UGwWSzeK2GfYqfz7xyfoSLuwGzjARQ4DA9G3gpvgM4dXhh2PGoicxsBwJNzZBTQ",
  "key29": "2DAA7hxmAhZcbgZZU9fktTN3rCxBBCfvZmC5u4S7cVe1eUkVo9fp381oPYxquK313JDFS2TTxEaoLHiESFQZMHD8",
  "key30": "5iKMsWKUpJsxh7RC8cQLyL85MZjDQKyECqFtSqf3YsyU4p8a9sBecBy6ziFuMTbnmygrKLbQY4aLDo73bhyo5Ejv",
  "key31": "3nUZsELz6haBXYmn8zZ4Fmvxk6hPZAfnWCVLY1RYnVCruJKo98phgEscznhSWk5Kb7aQw49RGU4BjvoJVnNfPafy",
  "key32": "4s7bQDuGMiZZtRxQn4MKCsXCXa5aFxw6nyju2GY817YhYf5Y9U85esHi1E6xUvRy424fpV3jbfgw5yHsc2EVXQCy",
  "key33": "Strvw1W3ZkE8FwGw97wLDtdsRuTEALk77nFGB1THDNezUnk5y6tmunh4PKyVbjSnYaNcg11a51vRiz6dKHWtSuj",
  "key34": "4ZqZmYZ6dxzFqKHdSh1nLyBFFddK4oXYnjsc5J3hzDzMRcRkRAVwZKGFMNdywJ72gtrtedHeKxndkpFmpnb6xB9P",
  "key35": "2um4XKEWGkiNzZCYwrenUpKKb9ZDwYwFkuTx1HkJ7yYvtCdyi77cnKxZkeMWEKxVBRdBb6bJDe3URBcixBYC6S9u",
  "key36": "2PMhMwF9ebrevhj1dFqZdBD5VwEJdZwLBFXQf3uHrqbxSbUmWTvx1rM8R6cvXNGjpy4PbarhYy9nN9P4G4WVJcFo",
  "key37": "3UCwnSy12r1WixNib9H2ZRMZqWY9LK8ftJv8zANo9HyLcwUcF8WjveGZA67Go5bpdBhQ4kqBrDVsprjYEG4WxYPq"
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
