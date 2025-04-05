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
    "Drnqrc12rQcj6sqBrX5AuxKPaKRSXS2rjCS2ArWF44tscUG3yZnJYJnuVCLFbQPcX9bioc1X2pCo5gRgVPoQfEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFR2WzE4mKBzs5DX5fJeWCsphvBP4GJy17QGCaLNMJj1kjU9xaFSLZXg767uqQATgovGKa1WrG1L4bwJYaCaRWv",
  "key1": "24PJFsicUuYcW3QV29oM883R8M1L7RCGPvmNQJb881DL8dQujLUhexfkPqn9vuJ2w2gSK5TawR7zgxPhNq72tujr",
  "key2": "2P8fABRqqSy7QX2ktrqCFPW5noQGNAqNmWXZDFtrXMQX1dFLTdT6e5wYm6FgMfYefqBSXUD3binfNdjJe5M2eGJU",
  "key3": "3EDvyBrgFKJmkUv3YMBNRnqatHGP2Sw2cfqQPS9T5MwxcQhvGMDYeWGZK6ELfnWM6e1zfyX85r1tR5bVUGrbiS1N",
  "key4": "3CPkoKXwtMnfutctiW1H8wSNbHuA77YMfgkLcN489MNF8VxpWwrySM9pR3ynGYA7t1KjVxDT6XtcJ2bmZD2QWeD9",
  "key5": "3STBBKeoiWvb9ckExAaZy1MVvSSocdomqzyYJ9Bf8k4U9mTMfJENb8yesCby2MEvzBCRPAkRKeXzVrndVzWNMvdA",
  "key6": "4JksXjkqmy1KWza2mmXUFjFTScV1esyx6UMzKgHgkkhW9XCZBmcNbFNUST2MwQU9MQdKVY59h6wLkzFCH2vbyrrC",
  "key7": "jQAfAQ1y92D9LYT1WURjoh4j2THpY2MD5aHbRDSuuoppAjqZP5NnryboR67qNBcWXoYPDJkuNXh5svCsgHNLZGE",
  "key8": "34b2CQamcX72SrSVW2Kp2JHHDbwBMKY3rVstbbY2DTYQ8PwvSYV9bN5cNQKEbvEZYaXXE1sdPtdwtuFX27CV3Z3y",
  "key9": "2FoTcUUPDBv5YfC3ymnJw3yueEFczP2vGHrbHgp5pEjsQArgWc7wJqYosWRi4Smq8eLZJbMQtdqmJAFuCcQXkB7L",
  "key10": "3CWDqMnzBCztr8xiJBThFeHYRCQLwTZYfbT8XU8EHq2AP9rqDobN25P9FzwsPGHDuxaaMZAa8REm8zM1b8n2ide2",
  "key11": "7fZJs4SN8WE2nRAnnP8bFmtd2xjFLT3ufh12RfdMA6EzykgXmqQ3Q1cs5bn8brcE3a6YhmezTZCzKzkdWSSxcrD",
  "key12": "4ST1QDupKBv6qH44rARZQzx4vkJSMKGz6Qn89Q7WKRVMazHG6F7HmXWUmhqYKDdW11hARkwhyADG8sXbJjLE4yzV",
  "key13": "2nvv2bFgB9DwVBJxRbs1SbT2VcEB82Py5cf8sBCxk7pCdLnkHZFodb4hEJwSfhiovLBTqXKo9UA4asJF9mBZKSgf",
  "key14": "3T8W67s5igZB31fTfTLdCjaSK6jnVzSE2sfgPC9Dx9Y8Ej96kcD79ysMi3EvUtfZ5LxzUmHBKqqTvCTf37EVq54Z",
  "key15": "EBLv8Xi1Wb2Y2x4uGh8itXtUMFBJmyMCYUwPyrmunC2e1CCoxScfsZDHr3pKJt6YBxPBraJZtHS9x24G5TisXMA",
  "key16": "4ZmsnvmS1xeq32ewcEfFT2bcQTUjdL3uPujpGbcVFuuVuzLQbD7Q8bH6kxgwbkZveuqCLDMo51F3kM7wnQvHdsFr",
  "key17": "35nqdRJh3diuwMA53NByVH4dW8cmK5978jXZsuRYxNLNoErdeau5uyqFuwKHg9LdLHmHryd78tqH3CDyQgcR61Xh",
  "key18": "3G97hVLp6Rj4VUzNJwsJjVeqFnhFhfaXkrUQZgGvq1eF8L4U3yS97yDsHvhvjHivEauMTj3ZDnmcUpLRDQcpawRZ",
  "key19": "k1jnZzfYNnp81ZvebzwQatnemXZ6QhC2TWENiXkkpcRjWAjMjN7YfzBVEMbExjWhoTmhZGxYRiXxBVNs6akGJKq",
  "key20": "2GqLHwjU8haMPq3d8Y5SpiKUwdWpbboVwACfiUFZRgGt72xnSCaqhq1iccvTHAMfnQxBFA8ihuMWghwUFbTbbe7H",
  "key21": "51k6Yx36CwSVAcE3tm4K5G6TSo88PbCX1eCrZWWSZo52v3v9LGLGnd8tU2Zaj3ehTes3y1xntCM2G14X9vbnaJ18",
  "key22": "ihP2WnaCYcg5ygFTTkqg3r3q2o56hMoUBNiRSp86SHxp8ax1BW2UV8fDcT3HBp9nes1z21MdTZmHwLi1SJoQbMe",
  "key23": "pDLZ9paFs76h41T3twmEAGo9X7ZB81Usyw6oo6pbWNFZbAc8woNFK4gkU1YxGtEpSfQTody72eBAXbUHDjHTRK6",
  "key24": "5C4qu8Xd4noiua61ZYyLkpRmR3QgcU9uVmtAA5iM2iVHq3kL8Cc8fLBgzw5JeDYyaVbqkUzPekDkH2XaM5WWtPYT",
  "key25": "nqDmMd3pDDGUcX1eY9e5fjVFJJYV43c2shX9mS44JPfKu8RqMKHU6879KSsw9NGG4YfTqTKNKfG49N8VFh8nZwm",
  "key26": "3YxTsXdt76suetQfXi7kNbf3opXzDqBGme1VnW1xiJPqaZPi22T1JFMJ7pxfZr3YdMqfQrDacZevNYNg8Qi32ZZj",
  "key27": "3Se17zK7j8PhPZcRD1Xkmg39de9PKWzRDQKHMkcVytsgj27FDNAEoGJCfQB89mbFA1PjEuf6s3RPGFdcwbCh5jsD",
  "key28": "2U2pggbcE5diHT6o7LsLR2TzFgxgyJJenXN2p6zjiktHMRYE9HtUzduE7gi4MdB76W6biSzrittzKEpiBg4wdERy",
  "key29": "26GVrqHF4TYjgoHGANPXccc5Q7GAGBxiuG3NyGF6BPGtbe6o1RjGgH4eB7FPDnBYdDmwVdzA7Ez6njRfwuiEHE8m",
  "key30": "5gRrybrhof11RutHWbTk2hqw7ek48NTBb9gLUMn3pT1txejggnMDU3y21WXRG8cLWQXc52Ytkn2EkEGJD9ryRS54",
  "key31": "2EkQLZKQVMNe1YppJ9TNBbuNBfU1FVbXh19tC5TyrD8r592FVPRTMnxusFJDWWiBwk5s5CP7drX4pYYE3UhfwfAD",
  "key32": "4t9UBzF2oVzqqRKXHVuwY1nNB3W2sPyNc4WVr6DmTY64BeMmC6QoNsXPTpfXXYAhdxxEChgnw1kpEmLqrQdnymJC",
  "key33": "2qmkzJLCb13n8LhnBmmEb3AbrfjhjxYzGZKKmgXLZu2ZRfUujrjxTkNbU13mJa7go2gtri84J9osoBYaXRPphHgE",
  "key34": "3jDVy1BzUVWpc48LPMs5RcF3aWwYS4uTZgQc2o6dBb6CDs9HqmKSd8pHDrfKmiDtdxt44ZYDaXuYuf2NsbxxAXEK",
  "key35": "2rtAQmdAkbZRJQjQREVQ8BgmzevM4qv61WNKhEZ3R1G18HB6zsuxGgY9VcSuFU1ndywrZUxW92Xmnj6CYDQZSmfA"
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
