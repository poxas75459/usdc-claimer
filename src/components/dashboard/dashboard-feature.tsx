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
    "uaCPHd862TsbV1au1AhaDR4voLenthLgMFQXx4rQwH2CwZSSYne9YzducyGu58biG12C9eHnQgsencCSD7adkTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuV3oj66Vq5Lsqph2KM9EKQ1pV5EorVR4A3P1juV7CvoGiLqJ5dGKhWN4AM6GXkk5HutpGbC1yTVyyxWzqf9GeW",
  "key1": "4zoi7TjqA4fGayzjWihQxwxFucvca54M9kXzTDUhMWAsTFoXXumqinBjqL2WEBKgrUhS2mm3AgUmZZBDfMuVhvQh",
  "key2": "3uHccoqEpem12bByKR2LGMD198VdMNNTs2g5znRspada26Yxv4146QspJXqmR4RSgNvei4ke51wSsTEdRdp5AxQy",
  "key3": "AVcYtQwvm4CtyZ4ecTXLoptf7WKsfvB4zt5qHP4G2iAHsVnTzqVpPY8FRc64dgTUCsVtDXRZeExBufLhp6QMrJK",
  "key4": "29EagvgHd9Ztx6F61z5snGcSmYuoWb4mBwtTVoxYeaoXWhNQrz4gC52tD8Yuz9fLAb6viXAyKnNet393yTGjAp6X",
  "key5": "43QHmGJJBZ7JHzUHNaTSdJ3W4hteEdq6Yjq1EEGaLi6Fp23TNRB7T2c5haFj8SNSVGYoaXYvzvu6TVwyGioTiwfQ",
  "key6": "28MaBmsqhDjxXALHAJZ1PFKcU7qTHBwQgWpUkq7NVud9Lnqs2RHw6ag2zghFvSxxzgBivrYpDoDGgjxhALnrCJ4g",
  "key7": "5sa8qBmEttK4mrk5JU8RD5hRPWkX9v8Nnr9vamjuNU3ZGTKKqfCFE6Xgy8fyYtg51LiYZzsW7zxvVQrQEPyLgeYd",
  "key8": "qxG7yZm3WGBnN1j6ZBZcVsbCzh9eHpXcAWJweUkgsFwWdMTd1kHzXdw8nB8P4KLcKxTrt5ZPpAWLszCexseMegb",
  "key9": "44Jt7dagFFikuqVsrQ6t4ajsT3GZXkCcupbcdnarckwgkY8vAxD4ZTMegjdNoL8ASjWHmQEDrHTS7VR1xczFFGGL",
  "key10": "4a4HSoBZEyxf8dJTmJLRKnzE3nBZURhQPoyeRCyuqQMKsZwwQh85LyWS4VdFhR1StGBe8tEA5S6b4dn46NNUoaB2",
  "key11": "2Rb1kjy87GWbbDibT4Ut8Zk9dw4PG1WhwNBShfygCjEybCrqUUrPKnkZT9a6i7VyCgn5rS2aaBR8VyZp1Zfyv9AF",
  "key12": "5EcBf5VsJC9iyZcK7JSGthjU3ja7d4Xmc5s8ay7dt1zi7sLRKv6vc7aHyWkFWRCxrMZfqeyySnM1ogB4PgBVEBXZ",
  "key13": "2fWSZYEqHZqbYsf3kT9or3KQ7DjjkKH7LErgAtCPHifjNVwR3HbyGfNpah1XfZNyFVFcHzdkiYdihB4YYAqSyLkv",
  "key14": "eBmLdYPan9J1StF82pvVQww6kcKJRwzcTatejgptXbEG8snjRs1JsEzCWJ1iD2X4EsRNP7kb3p52oN9zMjDRdee",
  "key15": "nwEBFNGAGrJ7m3fQCUnFCZLEjcR8m7D7X4qgHsJQCbzX79etuu7HnGXn5Wigm1pFda7wXSiGW1TSB7r1pjAkuFk",
  "key16": "9XjU2sgFx51kHM6LgmTqcwHeYbEDS4DAUJ6oVbREtwid42tMHNMDYnutgeCfGGAz1EJo6wEkYwfoNwq1sbk6oYX",
  "key17": "n6AXYQ3YD6iNAFngzHtx7uQDzEPXPWVy2MPcz7qMVGn9w5uzXfvCavcuxSMGX42tARafLRZsKawhDxJV1a7NpS5",
  "key18": "5YEkBA4HXxaWJGFmvFvqNjZnxS6WriGyL8cteJuh7vcJwYv2FFseL9CCFha3eVmbwfdx5wP74NwUNF4ymxGP9RNx",
  "key19": "dJHMarGgiHXafxnjXue6vcrdtuPsJw94WkYfzRdmdA2XB47CA8C23jyXZmZ25jsaGrLYU58jELRsYLpT49SiRpR",
  "key20": "4w5XLuvUffTqjrB3fNT3sCKqg2ueR2gsfN9fCGMR9uEi89nucurokfbApmoi7nmJgjdtsA6nfn8UTPfQM44rsXSf",
  "key21": "h84tWviGazZPYSZwVb1skGJ7yTooZjbLnw1RLNfyKTnoxn2oD2VD2hdWeg92vq6DRY6ZPiQDv9mNviR4S7bveQK",
  "key22": "3mfEsB4xHM3pfBrmZuANHW4ghnFjkW7VivqkNGzGW2rZtiC1xXVZ7PG1ZxJQoo5kHKRKXPuoQHr1ZK93AbtVKAkZ",
  "key23": "5fvKGwcj6WTCaANdVhgiW7UxssM43kfe4sap2wahbrhH199Ug8WTZuXPTqSxxn9Cz8M9HS468tQFENgu62wRqQ3",
  "key24": "39BtAcVDsuMXnfXruCoccqFP6xiEtfiaHpHvE5itUqtqSaNCUiXjoB9nCZsy3AiUCU1VtK6yF1pa7iZSk8tKZDLH",
  "key25": "yixdFqRxBGxQhhZSZoQn9c7jy8Nexcu6QWtUQCqhu9pZGeueHJGfSoDSRdQjhdPzyQBzDdN7dCK2xcJQdQzj32B",
  "key26": "5faEVRAkEkCYN7vSnnCM8zFSnutzxN7dD4BzAmt8K3MsxCfFQ31xXvc1QWaJAVH2Fv4kxrpqDw3Z4U3bq4D8tabw"
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
