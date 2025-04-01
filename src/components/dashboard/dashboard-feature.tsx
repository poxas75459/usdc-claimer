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
    "3UgyFktsbG2q2vNxDXQPR2q1nWpbgQBo9bDcw5t4F56FXSZtjXVm94hm8p2PyhRdo6gdtBEEnm8pHSmNPUtYBQZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vpjLb14E5mPaqvMRbUbqFj2tHXZe4DY36ngM5Bha5t2NEAdjLVzTzyXUUipUwWyqTkorrHccveSuwotzgjdaYu3",
  "key1": "351zABDFMrFYWaEg5gyKRCKBFTeBjYxgqmTvuPmtXVF1hiazyULBpUjNftVyMf4AZBF1hD1HTdujtb11QqcpUKu5",
  "key2": "2sj3G1EpGrUmGz4qjjz3YMSYqtqCTg1sbeQc7cKphZFizWdi6yqULWPq1ehVSVLZJqz7mmgXM3qip5uXzPPvsqmn",
  "key3": "5GkbiFSRiWRG43NFqdrn9btVPLPhiPn6phFpuRU2AeHMo4ZkJid3gBGkb7H7CTnuqrvAK4wo1uRyK7FVUy5SsrNr",
  "key4": "3esqxguCZnYAehoRX41phJekGRdHWvGkd4R5RCPvhNQKpcSrcVKZCQJDMzgSooVU42BGo1ZQtW4sSSZHuw8RLoWK",
  "key5": "4a5Qxrm3hDEss4XdUkK9K3DmMmLyqXFMDgij5FQ9fwuAg7sDLfdET2SGE3AvahS6twUhtk7ai2myXxrXP9w2m1kc",
  "key6": "2aY8tJC3saobbS2tq6EdTDWw89JtGFuRkhVyBW7tkAUumyuZFcmxDiZ7EkhoaUZiQq9BGPEj4fqixgECisueNRoX",
  "key7": "26bAorNSfVmLrnGLXoXEPe1ziPqNhk3aDiiPZAd8xaxeva7mpvVQgLZDo7tVaS6MGfjDAbSfsdYjirYLpiS6Bw6c",
  "key8": "3zqarPAJSHi3Ga2ErF2Z7JgB93xj9urJz1KGmbGXYghgGzbeFBbsdhfr5wQfCGvTM6jSD6uaGjBVJmPvxTAwcpqs",
  "key9": "29nzky9DhmbAwZ9Ly54P5cHe3HDGvMWgncAHyTb4P9NsYWA9HJ4WZqVmFXd4Zfk7igCLaSw8zFbfynN3hgGD9hpK",
  "key10": "3yArvPhNxyUtDXFz9hbr5JsV9Dx8dQEqdHYgo2Y9tNAMWKLK2vT841g6kJWaycbUNJJhBWuYGq8b4N6byKkNkVLN",
  "key11": "3vNqJKyjWUfvuwDYnF9WABorryAwK4aQ7xCXkMaKf4Hhxi71crDjhL4bPEuqKmv9ByK9YLuodDqVae1xjb1ARscS",
  "key12": "4A9nfuVtJXvScPFuiaLW2hsjgBKEShK6FfoWyqY51pFUQ8dYYnqvnhLuCgXXR89ppymp4rD7pZ3ghPGtR4np2vCk",
  "key13": "67Q5SorMZB1bRhScgVs7AToUaC2XZChgEB7TERbPKVnvvEse6m96Qfrur4tww44CwYLfdRPYVTscT8J638DwR3tU",
  "key14": "5yVqgiHnVP33h3kDbL9vCNbqbWPDQt1fHGE3N17aysFk1uQ8waU57E9xqPSWYJDH3uaVXQcj3HZv1vKQJbcDyfdb",
  "key15": "5bPM3JHkd8DXWj7d7CAY53eqnoG9c8vBYK3PFgZji3CyWoVLkvR8VmZeym3iPAcmgqK3tKpd5bxf13D8gRunT7hd",
  "key16": "5YgfUv5JbagDdF4x3BgTiQyPfLxU2Gthp6ALrHHgYWADeZFRVt68yoVhhELRGiTmHZP3ZNi1cfVwhaLYups1W492",
  "key17": "2edmZES9XvbfcT6uWmQzN5veNLZc38MgzDRDAk8HGH2uVRaQ5LYMMSHQzdsTSCAitAfT1PdXjTVS86HXhoUJNt4t",
  "key18": "5tsKoRgMhLaoHVWBC5jnrQwwY3F9GfLrbe6YrNT2BShbDm2uM79D7nvoSfyJ8yCWVEmf1Wftc7Uk34Nv4d6AmYEy",
  "key19": "4FnE2MFRzr4X2sS77jTAq9ijD2WuuXgRkWvCmpypwpZFiAmJQBmWziBWECKasPy9o919kzKCEme9oku2vn9awSkC",
  "key20": "3ZBesCCrCvVpoK89tZufSTziHPm7p1iwndGGqayLuLXz9ods2cWZsNHdWppmvPy9rxHstq9aWbyGY1KQF46hYA7x",
  "key21": "24RFPL9P9KK1W3wDZaP5wnt6cL6GEbxe9LpnpFzKxE57oNnQ652hxtxMNjhgCqZwnrXmjGSZ2yBCnPHScqC55sC1",
  "key22": "33W6TiuPragPkF9L9ybptpJzTddpR9Lq9Gct1EW7qN4EYwRLCGpq27u96oWnWY4ZuiUibu9SQ52YC9kiQnzza1JC",
  "key23": "5rMdASS3wypXnh6mCBUmhD6N5KsHPTnz2sVJZszpu7RCqRpX4Yp9ddY5Ey8uHcaMSVXaJoYUHUMa26fByry7CvTy",
  "key24": "35a6cRpximnjM4pToW4gQ6AubmJNG4WDAC91T8dA2ST6tsT7UfR2AUyxAsqr6YGYzqxZUWCfUxuV6HbJXwnydwwS",
  "key25": "5Xyq9pozD5xbeNLtCr68dGK58gwj1sdGnezh8KiJoLZa615113mU6gLFhhEG6mqDrHQ8k6fre8NcC5UVipovrHpP",
  "key26": "4djWLkTG1vkB3aSdoym6DgVkh7Bhne3GTxefxC5PJwg3kftjvoSGF5GcrnuL4U1BsFyMdB5y1UYhjenLf7MDi9dD",
  "key27": "3HDNzHGbWQhUHUF16Fhf95T3bUvxyvn47EuMLAasPDoakWDef6wFkjLyy8ot2vL8uUGDXMz3battQuTYJdQ8iz7E"
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
