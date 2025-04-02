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
    "2u9hMvmjW9A9sxk9Msjdtf49ENEapenhAV7EBsecay3KArLzfrCsypyyyUSsB7SHuR5tPZRUqJkc2jyTcMqXUr9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1AWZCdEjT5kGXxge397vzmgUbFZFP4LvawNc22wy2Dg736eUne2eNFEofUBYWTNm6aXTMf12BR7CTrRQTm4Dj1",
  "key1": "2KX8uv56r9grTK5GnPLqD1HSfUjCqhPfjyCwpaubshxqJGF4iaBLARukAbCUvpRychhh8XGVAakeP6mTvBrRLpxo",
  "key2": "4HCEwrZwft4xEsyqZXc3cpjbovnpxqx5N7JpMJefa2pweKbxJUepvshQ4pM9PhTKfFcQEVT5RsCS1oPaKoyFSvoC",
  "key3": "8s5CCQeSMW7ua9NmzqtCckbo8DLp6b3FXxkMT636trN9KFPzHBHT3GeCFdayZ94cumW8CdW548TGZLS71aGhuSU",
  "key4": "x3zhckfzgwZud6h26WoPJm1fVMUssy9qjcNEib7F8k9Tn1c1jpX6qjS4hSFJQ56jxcLgsvAk4LBAXVoNZ2dHVeu",
  "key5": "2HPEmXkHma3jqvctygMwFHEXowUHNiUvEinKTHD8ss1iA7K63ygUfPYM4uanFtK2DSbgVo6iSJyJiXmdttaY9U8X",
  "key6": "kzMy9Aj8u1Qn1PAQU6DGfvjPhKp7bP986s3RtRam3JxhxSz7Ey7kyTHw1LR6SQm75FUDHWEn2gNaefkAF8VA65k",
  "key7": "4uU25h5FkSSycqi2GJfDUhNnKBZYn6pXZUQowAeJmkVJ1GztyRzdPjHGJA1knWD3KUtTJ2MtuFBKWzHSg2DW15BY",
  "key8": "4c3EsP1EkNsgpHfzTWKsCKTQYrbRkQ32VHwNfGyf2EeXQasb3PafTYh8YWMRRtKq6nBS2mHELahjMChJcLGQNLt1",
  "key9": "2WjjccJcrgKvbw372hmcQzb8papEjM8dcE8o6JecbpHsj86nPrXoQuvBqMxL3sBG8zx2ex2NZ86o2haiFc7TFZFd",
  "key10": "3aKSXwZRAmtXQHJZs1Mwi5zEk5aimLziCXibq41TdRwpHFENMMb3vokVfhaWtsBM14d1odTBqPc4kr3aRaz8dCN9",
  "key11": "4fHdfhh97g6UkYHw9ePT9od8kMx3T4bMRP1JkvwXn7wTwUbVgkFbi7HtLYBjRxaWDbmNV6jmcnsCjjwctsEV7VcM",
  "key12": "5dbWbHYzrXwgREER2fh7TKnJGQbVRsnVtv9ntmsM4buLyJYbo1S27iUWpHDN5E1hiMg4LEePpszaNze9LZZhh5xA",
  "key13": "4eTvFnzgCYVZ2stwycrpwAYyxirVrY3dfMoq8kUhACGJKiWwjziLKvpy5PfLZChPG25PFHyNmrCheQP3bApqmyUy",
  "key14": "5hFYK4if4bnKbvqwESALu148esZ7eo3mXi3efK4ETa1dRRyS2SpMCV1WF9tbnaUgFj9MbYf9WR7ct4eJjKSukNS8",
  "key15": "3e9ACWTqiE6RANXyekWrMA57nga99uf1ff42GZjpwN1ZJuf4Hu1Hpqb9M7ohTvSr5fj5EnKP53WGRqion8Z4JqQC",
  "key16": "4iqsxYr8uCC2PoHL5B9XfYMbUKaXSLUte6w2FhvnucDW5ojpt69CiiiiKfSrFNaCec896MehbNM5WoudKJMziAVw",
  "key17": "4PBvnX4JTaozPboMVk6dDqkYZvKwrWjw5nDBVWwuyD2C3NsvXa2ZoWCkQJhoLUkjfeNrPM5wyTgpQVYFUKNAsEVo",
  "key18": "39BeexEbJnYtje23gqu9BHxAmXUva6TBFFJfzgzZTv4QtMKrTD3beVGm7WshK1D6drhYGQfMCMc4enpjAPDiMrtm",
  "key19": "4HVWL8pNironNkiBCiZHS3r6NVRUJi7YiTX3jAYdz4vmPCCn6HBZjveiSgmkCdvy8ktW9M8s23nv8CabooxLGkRC",
  "key20": "mY2nyYZi5LeTKgUAKSY3wTtUw4AzwXEbk77KUor75MEaZx6gKveaZb9XpTdw9JRU7Yb835bK7ugEcb1xwhAotCC",
  "key21": "233HpuXAtQDwBSExh6mu83RBr7Gte3TByJNgFzSJ8WcezdmDVSCW2BMLNtMtXoyZet2fdMXMQATK8QEMUS5KrUqf",
  "key22": "2SEzydDfsLsoRHmR2b6LPDUgHu8PTC6BLvz12y9aRKosHnaiFYVRwsUN3ipFxuJjHqtv97qMRmgVwYZpic43f9YW",
  "key23": "26Pea9zUiz9hDk8BVownQDJggqtQcUCVz1qTTpVjzAaszZ3X3qUiCWx4T4LWPYgquRD9721pgxAmkURQgUqXpBip",
  "key24": "27PuPfCE281oDpMqsuVU3ezgHLvK6c4iHghMqpuH27SyczsV4jkaHEPBnCkkgBGDK7kpVFRTU4aHvViXHZjYLici",
  "key25": "5JXPnpi1NKq8d5B2XBoeVBVydM1UvitCRLmF5LTzc1pVDiJ8S3QmBuNkRvqKvgGrjEFyDgLszpspPGRVyxNBCSqJ",
  "key26": "4jZ18z7APqjbn41dvHUZNV4rSPvx7ahk1ansKg7ivMaMWENCb9MHbJMfWiAYiRKmnjrJTUo2cE8Zi4c4bGYAXvbB",
  "key27": "2GjxRB5DSeEAt2QY4ARt442LfycivXBbUrP12W6fxAhMFaS4wAkBQy1jR6EWrJ8QwtsF7Wv6BpwHXL9DNJNpxG5e",
  "key28": "LC89LVvfeSGkEGKwxkieTr2f34ntehDnBjQu6YYu8Z4HEicyjv3ABBki7ycSoAaBTLLEqXSPKgFxrJVhQhs4XWh",
  "key29": "2mx3dSWjXdqaafkAGKrgWJr1G4RN9YiM47k9WYDN9zzUnv5use6K5HxpHykHwAzFYp2R9YjFsQAo9TqjKyFpLksD",
  "key30": "2zhypXvgheNnu7nVfCpohgh1GhdX8HgoXcJw4fcpVZLzjk3KedbP1Mp3y2Ata1tRymw7jEzfZaiJrogTdThbZyK1",
  "key31": "65B1aXL1suW8CteskPNKgxKVnmU8Bir5WwLugUPDtF9KdZSk9yeb5X1bdg5qzm4Kx3qsxasQsP2Q6dTHXFur3EXE",
  "key32": "59krS5ZVWqs9jGZhzUxWVP8vHLRKeosYu8X1BkTDpRmAPRBK5tE1bpjNiuhTkuwNmcd8kCBaF8biaCjp3BoauZRV",
  "key33": "514CFcv6PnmVL5bDL3hi1V1i1n4ggmzKqZzuxV3fFrbfvEafTw7nvmMs8osgTQYnm6KaC8WHZyFxfHqh8fXhzbGS",
  "key34": "3VcSx1anrAW6kgWEBMeX1DE7n7VoQWdGi9Ep7GnejMGqRQygLMiLsoKKHt7QURRskLxsUe81me68Wnf8P3ESs8K4"
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
