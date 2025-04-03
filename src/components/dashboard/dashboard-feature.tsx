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
    "2Dhq5d9pKGtDLf3tsyZtixyRjKqXP8sGDw5bUQwvaawjpTHPk8ok4qxukkpo3KPR3yNm98VWsdQNUKUUYXqbXSaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8nMWzoT6Jy1epSA2rV6sVpmeFPNUi9uzFrf3gSTFdpSqEDKvm6FVUFd1iaPHuh7xgHKurAUchPWYEinaxYT9qS",
  "key1": "5tbhGKuCFSYcupcNN4SbZ1UbUmwdp7VxaWQSbfbmtxyT6qEW4ekgP8Ye5gN7ugr5i1n95DyaAhpY4ECazKHHBgkf",
  "key2": "32JJyEeHdCLoi9j3X9msHHx9cdZkAqfDbGwd1bA3nj3UoGHGseA1VupM7owB24Pu9yuoDEBTQXDM2LfSiHb9Yoo5",
  "key3": "55Y7Ae3Nxo47nx6a9CccJpAVumiqv4sg9LAmVLp5sPQJMBRCXG5hYLD6k7bhQt7kPRDBMW2o29gJB1Fn514jX8Ws",
  "key4": "48TswCutACDW4Kw8i6EzsvvZ33XN9vhmnUBKPCxKofb5y2BoxKNpVAyqSdNmNGUWFPBz2bLShBfGod1t9C18c6vr",
  "key5": "2kzzEzbUVeCivQbYTaW5wtS1DBpkfiUFwyTVC31x36idjEvT1ErkJGEzQ4yTU253XQKDA2uDaMMjZ3HKvP84yfRD",
  "key6": "3mxPV1iJVfgZ7TbJAk9bNg1zypxM64hpuXfiHNx5YnYvE539QGRJvaTMFQAdGzaguTQTEKYzAUT2VxAuBbxzkyPq",
  "key7": "2J2A4PkgRtGpUYqVXY7gonNV9En9qssTbrocma1CjBmEzqQN9YnvE76t6e91cww3zwQnVowCgNqHVKKn95b9PCq9",
  "key8": "4uL7CUeXWXYhrkDDYnGXcW5CvpvKx5PNTi1cqyJUEc73Y2w5kdZhePgmxYAU28SDD9zVtbXyWB1BHJJvSrTP2H5y",
  "key9": "3LgK5YaogRCk6NuqTMrZcXe9UupD7hqMnKFDTkzP7f8pY3kxLN5FFT92wqCdqocGMuSscu3q2UnNfoa1ndhc3SNw",
  "key10": "4BtGRRqwzcKpfNhJRKgePVtWEWrDDzCYqDLtQ7TMpPqGHwHj5BXQQdU75pETJ439g7JoDyRw4pGLTNkd6kxxqxjz",
  "key11": "3hWYzMmerD3gw6Q5UDMs8QSYFLSk1Hesh8CMe46HtZuZ7bwQ3C79nivtifPwRvme1eRzK2oQmQYJZDos6TeCasA",
  "key12": "4ftGnSouVp9SSnHYvUgyvVaDzhF1eVEwsgwB6JyrnoHTKhT8MNeDYRJHf5Hf93uVrsXMqAURPHLMidXFDqQmicJj",
  "key13": "4A7cce8mk31Yju7annjQ6vHBPMf79aCgsaG2SJMZoaB8j5ZNTZuoRrHjpzAMqvtgXZhemxFXeniX3NvZSws2sdvE",
  "key14": "4UJC1ZuPMMAfVyYhKFmH1A3WJ4W3EaRJAA2ywEjmPVY6TcywxcwVssfxbztDsUisDEE22vvqrbr5MjQ79FUPkLEU",
  "key15": "5EZ8gnTHejnMqay2JxD1j6sAtPmsEUHSNmxKukTvHkoST89PAKZG7ZqgLiPoDpLphdFcgPMgEa5Xu4JiAYnzMJ7d",
  "key16": "4cavj4gY1J4sjgrwSTK5d64NKWa5np1F9nrexS4GLV671zuKSx6nm3EsvoqvVwJgoqKiAUPNj7uhDWxSKvwVbvsQ",
  "key17": "JxFYKLCwPPogFp5bQnDwE3q2UjSxd7ZrZ4qN7TteHH9ot2g3iAZkSsDJqeezvHafm9eEoR7m65daeV4igBDnypV",
  "key18": "HQWELNyVypXA6vXEHGbgP2zWMtXnDnMwbcVbna4TaYSU8WX1MB2erC2fR5EvV22djQA5KSkatBU5zeA3xyRFk78",
  "key19": "Mxx2o1Wvo46XQMMNDArtLHUNeQ5xPnQjYWVPy33tDBC3LGkWD8GZ3VuNydRet9BkTyqmevib4UiuETNEHejEJqX",
  "key20": "51DYAwtgS3BWwhFX9gXA5NVDLCiHxYEAs3csm4eNhquurvkWKU6EvH5AHZSEdPc7fBuWcUrowFEsFfoJbbBmYJaD",
  "key21": "2jAdBoT3pGxNwUx6ZSq5YwhZNAi15Uja1EsSB7dY2HCFEoaVDCj2T7cpWxJZyxqEwsxqPTcESFqobrXNnJVZ8uSp",
  "key22": "3sEfsDBTBxQds944rLptzPAbDVa8FS1YNTNZT69iv8brSSXxyNtXz6GyEEjDx4D4Qh4XPXFbnNtcfGNqgxHQgTRg",
  "key23": "42GMxpeuMjiiAQCpXGZ2A7pTBjVS6Ya64tNuUcmSBx5UvC7qmTkb5H4MGiSkryTpvdLErekATMtfDU3uZLfTiqEW",
  "key24": "5LcwmHWaDxhMx5rNYvugc764qasJciNsxZMtZayiM7AN7ugpUVJQ9tuw58s7bkc1qTBmYX8PYbwxHjFwrovqyX9N",
  "key25": "3HcFJTma888E1CHTeF8CneT31ni9HZLQAj9xwJYs5Ej2zmoC4Svtk1AtxRETxU9GfAQcKLKoRf8cJ1Arfo2nMrBa",
  "key26": "4fi1J34MAGGUN3HA3xqCpa25DEHjy1gj9wzknhN7ihTudQprjnHYp6vR7HuVrce5fUtZwp11JWeSiWXthhUgAWm6",
  "key27": "63rA7bZoTxxkbpJeq81RFzXQj3R1ww4dtCMgXLtcJN1ruU2x5ih8ViicneYLebANRP5ByuckeEjM8T9TuHvf1xnA",
  "key28": "4DkuXaBUHJeSc51PAZL7iXHwkzZR9t5UeZvjyHEZc9uZW8FQkriN2H1fsWZmoXxMgJ3a1hnkyEMtvaRS4Z3vn5td",
  "key29": "2vVd948iM8ZHZV33iEsruM3XDPyWKE54J3pfzGXs432BjBdzg8x7yTc5hwFa2egCv7xM5pKZC6wSuPtPhmrDZ8zS",
  "key30": "3epSubW7eFatnhw5RbSVDCsVE4QxxQq8t4sR4kTE3AVL97upnRHK7S5TtnGawXY7WhmtVMTtaPknvotPmnNcLCHx",
  "key31": "3vwnsko3LbR5gUwGZ3SE1yiUuZZD478sueBLknJg1GHDjNqLLijn2Q8QnCf1JnHhDy2h8YBMsJqz9fa12NcYjBzE",
  "key32": "Xqq6wpxrakiyXSb5vDmtPWBgtrerjkoKtLZkQoQpg1rq5pdQ6N2QiZTP2cRcRQRL2WyR9RrJzeKugaUDjKjmxk3"
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
