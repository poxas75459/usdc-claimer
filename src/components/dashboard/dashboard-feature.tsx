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
    "33CcRgUkUK16hsZkb23igwofH5tK4HLzjNe6qEwmPH24t8hU5G148gUBqLP2u1RMxbCQWngWXcZLAFdE5bCgoHnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hx1U8emdDBLGeuNawicZsj6ZuQrhv92qZ5VBQZhEecoB2kLym53fVYh1HWaooJmvk8jitz7mDHA3L7Uq54yxoWg",
  "key1": "5PzTeBtNcx3nw1obgJHNM2nCV94rUFUTMDEBdAmPRYy4YGhBMu7qEp5FmFUWnPn3hsiKZiKmyK3tQM94d2gpTUQk",
  "key2": "JiuhcZarVofmRQsrXitYWLjPkcJk4XWRcNH4E32uCgHtHMi1Par16wnwtiqyFtVVH2kJVSmfXB2Js1E9koNr9Gw",
  "key3": "av6c5No9fAAt8artC6a1QQ33SaamE2Uccm6UzvKcFcrxXe2ZH9vWuSxtPw3hSsMvNkJvTUuYAeqZv4PpJy3bQsp",
  "key4": "3BgvYsphNtdF8iQhJ5N8LQyjKjjEym89hUSdWMZ9hCcCVqnUjGb2WeU34QgUgLRpiRWpBWaXNUGFmoBAnNusLfpA",
  "key5": "3vgMLpRCaXihJpKm5QF5Nvar3xJ5x3TZhkRcVV8AgWtrEzWT6XEsZRx2UgphDMdio6YcFWKGRZSexeFAAKPT7rf7",
  "key6": "4Rhuvh6Q2nsE65pWigEy7Cj2iwATp62FPyLyaGbwxTF9GaTzKNXHCJvjxAf1rVpijMp5Z5NAFYkrfCfp7N7DuLVv",
  "key7": "5FBp5DGeKep8xPNXt6urTSFp5XuG6pi811hLQMDUkj4cx3HDkJZmEmcoTfB2fTnn7VCCSSMkFfnozomG82Ua9bxL",
  "key8": "31ebhotEsBkBPscFAo55SNBAUtUzBP8AfTfc67PibcLPycYxv9Z7bZhKt4YXkQXVkx7aBeMdkUTrmHWVrgfy4JN",
  "key9": "2vaihzh46CgH3mPZNqQuT1cjhpAnjy9bQxUkBQkK53gTey2cvNNDtNCfwaZD1b1AsA3trhqie3S7n9MGSq5FskuU",
  "key10": "2FptAdj3F7gX5Lc86yyBb5NZfcd1jYWMauLyaMPPLeFWtURKR4qtSU2Wem94sFzzstf338tHTSGSCHWixAXZPG8n",
  "key11": "4aBb2CGMW4aXbnhgsWzRpa9KYsUvXX2SVVrjpYrUSTBUgmExQ76F5P2N8wJp4uYYjZMuTXmgTJbz6YXHhk526Ye7",
  "key12": "fJxDY5CdzfoHfaufjQNUAdT45Jys3RwxmErGKeKWzYiwUChdtamYh2GnzDSrM3nMVDEffEvs5tosPBaVC7jLzGA",
  "key13": "2eqXAuBA9RgjieBGah5fe9U3EyWADkDw18zkAqFkF3Gv4DLFdEL1ab2c5AyqaXZhqFz4UfWxMuF4J3XrWBaZNtf4",
  "key14": "59QkKhY7HuxCRbAYBGzBAEZNnS24Zdq3BiRyC3wfh23rpKryJe5fCA3xTTKN6pMnJQFTqSUYXKndz8xh1jGfByT3",
  "key15": "3qwH59uAJhgS9oS4ob6sMo6AkGNpYvby6Buz8rhof3cFt25u5pPKSpk3ktgvJfx9Zyj8DTvdDeroeaSkxWReCcqp",
  "key16": "qzHY2EY8cNNrmQVhDUnCoF4Dt5RPgEtbVdvBHHcSfwgP8wvC18rHquP1Nn3JhiVDmEeo7wFV5jf4tSGdKPpwntA",
  "key17": "37QQ6kNLdT4B9RsGgA6LHdY43B1wvXut4y8kgmzC98bvcWHKo3oRqjtRHrRiGUEbNbeLDSC7xzyevFdwFkJVxHTa",
  "key18": "2HHunSLsBnL5icsNL43qUzDRmmuovE8T9H11Cefufwx5CBawtdaqNtAB3eHSt9diFy8sDnvyRuZds8maKudDt741",
  "key19": "BCRssEtNNozozwoVX8KqLdjGeMB7jwSxraxJZTUso27SpbuTP1u8kaWi7seou4CrgoSgv8Yi8BMbXLXd3ZijcAK",
  "key20": "ZX6LPRu8VZ9w4L6EXn1398oQTNQ19zcHsbStXpu57h4JG3jyjJv3Rwv4BXNW133kRVrwWZdnykwkbxnZEdWi3cP",
  "key21": "59HXZnrLwPp3pAdDJCL5PuqK4tRrE9cSds72du57Su71bW5pUAqGvJf8UkVnDxJXrMU7V24pmefPiCEv5q2a6rYx",
  "key22": "49nF9vnj3BbDHp3pRC1ub8uSuiM1yLFKqZKAPyxhwrNGfmi3EJ3xtZLifySHTpkMgHJcmGNTjSqQhANNS6ZpQsgM",
  "key23": "43nTNXuo72og4sVz2P1yopxuUsU73R3VhiBYUGC1458TZHfnaXiCAAeoJNC7Dp7fAyiZj2ycJ3sWcqRWw2eT9RWA",
  "key24": "5UHwRn2J4oKDiEqSD6k5S6EmMbDTmEwMFSjKKbY76WH7vsqjt5w56Z9CBM5PtHib6bKcizLqtQK9iKqc6owpPCJH",
  "key25": "5LqMZEJiAjePX5iG1heVWDRTjQ1ftNZnBrHuWBUoqRYZXevtAhD4DRdk7YH3PY3KbDB6mA2cWYkfzjhYHtKu4eg8",
  "key26": "63yw4VQgHWxQnZykDQ7mGywoNSDpbhqGK5STUCrVt1tYwMauRxbzheRFsvQQM3PLFHW3aLhPp4PNvrzbAqqTZ4aJ",
  "key27": "2xGPTTHFTN9YaCYD3ZzSQJT9QbjmNdWxnZNRGfKQUHVZ71u2VRyKevwsMM1AXLqr7yKs2QQNfguVp42ZSD1g9NED",
  "key28": "5cK4i8hpjDdv7ysg4h53fgDcG1CHJBp9vpDxcP6d1tc87SxL7cqDUSb9NuHxYLwBpkmTYA7qj7xf3aQrwYL7R6dQ"
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
