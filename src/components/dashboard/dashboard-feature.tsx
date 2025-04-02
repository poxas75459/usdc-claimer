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
    "4ypSb43SEpEu4wUFbzP8JGnR5FSjk85opdWpprk8xrJC6avCcWDF1ybuz4dUWakoG6Wf49nQwfP16RKqfXFLGT8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxtB45cwEU8fKmHsd6gTFT4kuFuUpMkjxsiDza1w7TD97JrYYzv3rJhheMom3C9qZAWTKKJgj45Bh51DCyj8ccj",
  "key1": "Zgz6KA3aLNcPX9G3V6M8AVhJRB1f2erco4RJyZ288dx1G8Bqy5B3k2qYVdgVhxsP2LFFAbt8SCfkZw2HEecF3J4",
  "key2": "sKknFHxoAqbeRM7bi3MENUvhcBpQSfJtuMrFzDx3fVkAn3fKZjovwrpAYAXLDQipBGQbuaYkJUBF3iCW8mdR4qs",
  "key3": "5ziSpPCo3SBV62yfGZqeti2q9qZzXB7FzHNaL6rzkpxv3LE8NEkwza1Bwc7qAnTcBf5mCoQvVSm1JMx3Qon3d93B",
  "key4": "CetxitiHSv3KeL59L2iEVNZy4qa2BqeKoXiEqF9V7rSip74qzjpj1Dv7ePDkU7X3MhwY37eSNsd9kKVwTLNBcY4",
  "key5": "2EYmXyTbwvHDEdzca3FwM5b9yJwjGtvhvvedeYfvPHnXUnP113r9wrQqBXJZA7GixE7tugEYThV3AKE5WYxTQ5n6",
  "key6": "wYbm7v1tr4isAMCn2CVoSLaqbfA46GTdidQET3wjBCijzwKSmKNbC5jdTK4rQjFjEYbLnrsnhVLPsK8DNCko3wD",
  "key7": "x8g5n7pCXKFqYUKExoFGR56CamV161wbmrMk7qdZnEJbjGnTRGitBryGdhy58zGFdvWtf9b3yScLkP7WuQ9zb9F",
  "key8": "41npLSUhFikBspYThddvAsK4mADJYgh6sg48RRAJ97i2PB9b3SXchZFiUbyf9TnFxmepaKxxzWt4TABy9HiR88XJ",
  "key9": "33zumXc8JGRuSQGYFPHrSfmGTxSffwcZPV5hnHp47oQpKKKuzYBgqaTVPXY3rtKUvyHjzWzumYtVvDfi55eJsxEx",
  "key10": "3iC5RQv3XPtmMAfXFtxDwL1fbDw7nupJztnHpsA3bT2uaoaPGasSvWTgeM3Mpyz9vCdjbYgpYuhHcs9Zb1g5Zo7R",
  "key11": "5p9yzfJJEwwTpVnoGksdgMXbeq4t8zZ8ZdngyiX3myzyKcCPLugKKQnhtFoXq3XVTogCKb7wDuA99HFWZ8PoBGHc",
  "key12": "3ywenuKeZxzgUvsfnuCE4jSnmCCAFKMQNbMH2drvHntwbGCq2Hyinaasj6JNPTL4kU173js9mutjK7Y64YT5U76J",
  "key13": "4CnGvqKfeD5yThAhs5641gV9kHrwaLtV1Lyfyh46MsdXzusuWjhMbouEsFxHWUkaxN5TQGwTo9W5RLgokrUttin2",
  "key14": "7yf3YdeF7hHt9soqQk9V8WuQccNYTd2QDVgmwbqoEShJkA7UkZ1jm3efQEzNymfHRrkkZtH2oSJbHt5am1LmSqx",
  "key15": "3o219u7tCagAB39i3paUKndeEonoTPfm8BS4VpHrGMwXr14Y2i75s58aqXivbx8oPVP2rd1qx5t6jSQpGChzHbk8",
  "key16": "53UoczXZZXFNxvNiB8W3pZPhWCLNt1DRcgKGk6PzYXe4bsZJyNh9J7Lse6cYTktF2B4cJu4FDWAyeipt7H2WUk5Y",
  "key17": "rfQGKU3MmhANqDNQmWpaB6G91fi1YEMTDCLv2cPiQQtbkNg7fTzUHQ6FDY3TRynqmvgNfcWgBfermJHu33vbMba",
  "key18": "44qgrSUVvG8TdQq3xgVw2Qn8cpS3YsPsycngt4pqtBpXPHC4Gb1abCYHWuCLA59CZoZtAYuyyFcuvgN6kMgug85r",
  "key19": "3zKAqi5JpKjDJLfLMHF4iLfPJGYAYc4So1YtJs1ARixygpuwyb8vsbrR7anwCDEtX97wy3HsPkNGMc8VWYkhnKAD",
  "key20": "3CmcWvppYQXP1F4VFvYY5ejNNg3D2gHMxTx4rVCLr9mfcv2gxw9zkPjMmsxD1y6ZSdvk9KWCbey8mU1ktBXCmWsH",
  "key21": "3tbcyCAAQAQroinbQ9nM6MRhFQytZNpxbDnKqMgnhfhewnRJBdsBEk7KXGd9qC6UUENMkBUgXuSGfieXSXhmxov9",
  "key22": "w1gw5d76BQig6sBvExZi8AwEGsHyN311isM9qZwC7bRE3WZKEhb1X6nJnx2n7S9fG9LgrSW7DnaJ9fHeZpNUPxD",
  "key23": "4HidnTuvibeVtczythAbCL53yc69JomGSY7bxZdnEJgWu8wYtvDjB9XL4EoNykFJiiqceEkZroTYm2YttLMh1bvL",
  "key24": "jXCEZw4tvueePAQ1JFBasmeufnkDycX6AYNL1E1kh24K9xL4pFh8ZkumQ1oCkCaGQWPi2jHWoo9dkdkCnRuRJag",
  "key25": "4MzVDchwqvjqpqyJzbZjjCRFqVhzgANBuegBr631tjjNPUkUtN1dggCpUNYWkJcTe8Evd8w8cqeR9bUnKMUnbuKx",
  "key26": "35848EnaqN8sXPjwopKTjL97JJXsMENtB1EVsVQJK5T23DST1Exw37Qm7XeCKwSD4DsvThFCFEZeMNrF7uLM9xBv",
  "key27": "66v33dGPGHrA34HyHUzHqcbQ65YCGwH54nWtbWqbhoAYhnLWbvVuP7TQRVHjcvBTdBUyjpkF7D1QwLyemrFMVbLh"
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
