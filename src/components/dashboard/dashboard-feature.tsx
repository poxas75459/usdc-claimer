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
    "22t9wNjZaNnavJ5TJ32ZMbRqpefW8g5JqRyaRin85BjVWJ19bMkNGy9N5w2gCkjnHFJWCTvC3ESD5itL6TBQkyeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zCiF1WAKzxCvq6BiangBRMMtVsogvXY5QpVUiojVPEH8H6J441anHgGGDTz8bmwsbXjsdQQHfKZtpCqNnenGb3u",
  "key1": "28jW7eh8dJcQDJgUQZikCbma43oy3Ak1WH9TwK6aZoLnLhFtyFuFDJdhGLuZJESzgnQ9Meuxyvn9TgxfCFnMDxeU",
  "key2": "4r8EpZ1rG1SzCay2dNZNrT18qpssM6Nv3vVYg1XNTaGK2qQLcKpnKRmpkC3NHgnDD4bAG1jamQ1mrqzLV7gN8ehH",
  "key3": "uPpMdNaZYvNvjHYD2wq1sRxWkQpwiz9JGDxjojxRRML3kLuJ8VrALDHixvE8bYvcsSFqjfFbFGG1hDUEMjU1PAB",
  "key4": "5MFXF2eL8TkrQVdW3AZjYfhqxoNk4Z3YbxRqUzYgfVoozJkxaiMD9ZyN7JDC5N3da1Q1AcPXKQ8CdSzMhqpvYUn8",
  "key5": "CiKYg6N7kqphTSHzh13jgiWbfnt2tDyqcsgsD3sqBAjjxsBAA5JGbBKDPFgh3CCSZMzX1WQmhvtPJW4Xckcff9y",
  "key6": "3WbTSyXo3hv9rkzPX3LB3M6czyCsEgcF3x78tqnSk9onLhUK6XwLZzVcCBULdSURLAX1AR6BYbs29BcBb5LqXoo2",
  "key7": "RK2L8w8AMZmb8WjxY4hqSQHwkgZJukmB59seDkr3Unec9gJqnt2HWMPaRdUnaV3P6JRhVwkC1t1oHLmhkStTZns",
  "key8": "PtVCSB6nSyFZkLnrJB8aA4VWZgy4bxUywdKwewmrrbv7o3p71PHVcBohb9L1ipy2qqfWHhkSvwxWpR4p6MmwfT6",
  "key9": "3yi9erdc3sczjDg7odJvRf2aPLAY7qXw5B9Knt3psiDGCZsd3J1DdiPmy8mhQHoprUqxEYhUiv8ZZk9g9ZorKxLk",
  "key10": "67bDCmKpYfdTeEv4dc9MdueUh5XZEdU4fwy7pxQgGEpNhhRCbtKqJd2zha9YVUMvRycjdHZQuKsXSyZSqzdaEW8F",
  "key11": "5AjvQR5r4hBsoRMX4xNhraiStfsgtWyFrTwiz6YXiJsHdba2pcXUhUqDc777Xy6UskpvJNJaJZzXR454p1LjRUPo",
  "key12": "3WAAJ2jj5srf5UEGuXXiBnKAshgqpjU339QYotL9ScnR759j7cGTnN43fvHEpkFAiWojVgpHFUUWkr7Bs64zvfG2",
  "key13": "3HKu9FDabhob42iZpAfxaVxGtbk9opurF143zgJ7uPCTZJFLEYpBBK1KQMyWMECsnNsfhPBQeBu2oc9zoHDX7UWu",
  "key14": "4PXjBK61geCWKiHx9k1CqLHUqa9EnQz6No3owwJGdYiymaDpnxDLExsNrhi3aoUQeXhWwoUQMQK9qiPR7ZimBrCv",
  "key15": "4GWmvuAi1tAtAG8YmgcfPnwR2zRc9gwnB6KBH9VnwQW5HKAv4nUypvCPT8v3uGxLQb6CUNtS4wrwq6Aoe3jcuNjT",
  "key16": "3gPsKunxY7XXQViP5QZQgciNrQuS1m6yeFkvzrotABh1PDbmPMjtzN2gNp8e9TdiQvsJq9LhiEExP2LyE785ehCH",
  "key17": "vT3eTNpwYqbE9BgvpBSRrbWzz5HuJmgTUir2MhCJuGZ4pYfNjAMqpucZdWU8hkwtCp4UNMiWwB6PZkFrthDJUC1",
  "key18": "3B9bWxQYn7jSqsLHUbV45T261o6gyG8Tp1DFHLo7SRUZV78EvyLA9y7ZTmedtBMxdDQwHsm7hxpyQixrn5QSmiNN",
  "key19": "3nPneesJmwixQUwLXE2App4aYkcwLtEVG2A4Qz24QrqHU83p36kGJPr6agyVz3odT5TN3Z4LkVMXfAapiyY1hkMk",
  "key20": "5pBTJbjkhBrsmDawC6TMzX7MKhacQ9sXvsw5zmnJydfrShBhHGrtJoCXCAJmGuzsmZV3GhyD4KFGymYNfuPARCCi",
  "key21": "p8YkEMaKvcHa2wueVZcwW6eaEvUnBMPrsf8sj7AaVUzhEcTdGzt2WV1Mq2zbVDa2P5tnJChRTxLygJLvXLF7XjY",
  "key22": "4fDZeAq5PhW4NGuXt8akYnUYxu8GHvY7bUDdmZPWrzc6aQxL3fqP3zVuGJ7ycCW2zZ7v3vCGkSERDGL4LLXpF1Lx",
  "key23": "3Zkis8CS4EyVUWzq8315XghjWcQ36A5k8Gs9w3KFPvhFC9He3i28z4oQsbrSQFG8ZbqYXAYhr7Sf5gFd1YzeSCNF",
  "key24": "4MitVtkMaBFHk7Hfye7bVzcxiuCbmm8wkRDiAsQkpqAuNiuTs51rZf1FpaTp6s8btncLnnu72ZruqsCa7dfXBNs4",
  "key25": "4Py1Q7fo8wMetreXopsUy8nLQGiDnjVLqQvo4UYdfiimVDuN1p3FnUudtHdeiw6u1Aj1Ghrj2episz2oeJ7zL5PH",
  "key26": "2nfcAZAyVpHvNqE5g3aCgERLeiduKcErYjvQ4rhZgdH2NiHxursFnyn7zqok3gnCrx8JbYKgLCAHDKF1xWBvSpj",
  "key27": "5c1SC3GFgNP12yZ6wEiU23trco2hR8UwwHeGwf9PYUDKcpgoDh3zHLMQSJjmSv2gLFMUrGes7HZvzjctDDY18NR8",
  "key28": "5Db9qQKa5ZkoT2Zmfg78SMrkJnpnE5uUTbaY1SvRYx9qV8pUnn9b5GhiWxyq8kA4WxJgWkub1LZHwMwBergNr9Yb",
  "key29": "42dFB7KSE6j7kGg6fZVA3tr6BD6swBFBnSnBbBLUAYzWxE8t6kSG5VYg9zhWL6UGS38v3VLM8DDJg2NyYxgMWKSB",
  "key30": "2f5iL2eWP7NanSdDg7oCnzLbaTGyzGyQA7KdUt8Pz2rsNSBx4Lmf2DWAAhTwMMGSZLpgK2YWEGjRboH4WugkAXR8",
  "key31": "2ckwC6GQmBHXowKcHtQQoMMi1CxTnngA4prYZbruH7E7vfkkc2gLGzKCtCTmWUC8qQJJg1apBnNSSFeZwxTVnHx4",
  "key32": "2XfFwHMKQWW8MPQ81c96JXWTAAUo1scgHqCVuRguDFYsJACVpTa4u4N2tm1jsNnYyUd3qTdDSPZFhhhi8iStk4YC"
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
