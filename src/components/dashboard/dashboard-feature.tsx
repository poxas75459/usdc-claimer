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
    "4idN4SUH6R31ksdMPtQ4eRPHGhRhGGBjbrLGjLfbzqDDqgUVHPBtn52vbHo3KFXqMNEL3LCDktKRNHnxG85ETEfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ra5szxPU63KTmzZkWR1PYPFGDEf771Emaa6QipCWUxzdrigsEg6sykMLAT8tr3wzAxMUGwGKcdaFmQ1odid2AJm",
  "key1": "57hHrp7iS8hWgStsNQKrqeL4WJQZEFN42RquRc57uPA3b4u3xZzesjRSKMQSrANqEd3mAMbGotYaSs4EarR9UhKT",
  "key2": "2L8aR6kwUTSqYsYFUWUu9LDsByNgkNgDMRGsoaJAgnzRJ7nVbJVnD7FMU4s5SW8KCjJZQ7CGYpGRi7aa82uGQDSU",
  "key3": "5UWBzeFLiKwi7cR4d55kmdxXUP4AAipUfEUEZJQ6LMDDH8SJ3NHkDhueP8WJHTRCUzzaPPN3T2Y5LXDSh4xFeKDz",
  "key4": "iL1ccqq1pefDdxmP6tikwueEtRw1u5ur1GTyevQFeLYSyL9r8agDm6cMmCNMJDsLQ2qrNqyDR65SsHmyJb9HjEV",
  "key5": "3J9aF2mDMyEneZPV2Zo6aVWBwC4GS9MkfmpNataZRyCwsdyZM5ud79Zk4TTsyKsc3XyNSTsG97hos2kXTNGAgqir",
  "key6": "43naSAbv6W5APvnGEu4m1C3tRZPeGDPXRMFWeKV3buXstypzgUJeCayQJnhzh8Hv9btDxyRddXSsewfhM73AFcPk",
  "key7": "tixSWhRW3HiAZARLeufBZVYUn9NkBZxgzRmA4N3f7bqT7hVoc1JJBHoqmAZRCYqUHJJWydg7fESPgwWBL3weXTX",
  "key8": "2REFFQop8k8dvnDu4ti1g72kKfJdRbGJbWkYiBotiZjdPGacr3WasyBSDU2csygX6tCXd86XhNZbuXF4inYeLHpA",
  "key9": "4xbQdBdtcUpSqbwvExooXpCQbtpXoESNBhAZtkqSH4KEATowphCcQfwv2kRRJYktVo4dQXyBpeEcWqTVgM7x3v1j",
  "key10": "5w6piH9GmpyGEVVEvzUXR2qf89gvyrYrFVViJZiTxNehidBQCrbTzqLUxwEtviir1msFd5t1ntxwMnZgKbnAa2ph",
  "key11": "3EmKyGa97ek2SVb3rgs8ERjY49S5z7dps9brQgDLZyRkNJeh6oWWZtVncfNyZvAhgvJo9WA4jX3dDzgdRoMYA1CQ",
  "key12": "mPXxMKqcfP1Q3AnXizKnvte6vzWXx333QqupH4SK1Z1tuvoKMMoWzAVdoeCWxUodZyPdimXnPHkgd6WzpMf6Rgc",
  "key13": "nzWScGqtLGyPCuyCKDAfjpMdR7wXPg6ZQGMc7xkJQvhZuiTXHPcm3TeDWVYic2KK46Ki2WukfPMq4DBetgCQwug",
  "key14": "66srQbFC13HVpnfXPfDnS8GZPUy9N6Ukcfu44PRurtBM8sUUrsb4hkJswLyoZ12E6VWJGoAr7PfY2gd1YRGKV4Fv",
  "key15": "2jHzE46Q3roJdLciJmPCVbD2thg4tVRU1NJxgEu5uBJDrkuRZRewUUvnv6VPe9xssbTUgczoDsn8JErqW5SY7osj",
  "key16": "3oom4v1tCapWyoF3aSUPPA6mdcKHvqR4FKtzs6wyjsTHiVnVPz5Vh1kE3zqQTXEsyHVxAZLwPdFwzYiCAN8BZUZG",
  "key17": "32Nawzouu4RnCbNzjCGzfE1fszbGKHgKsV5TPyZ2io1kXLmeqaiLa5iva7huLB49Bz3QPW13oE5YNZj5eMLQjJKm",
  "key18": "4A1ppmxriDvQ1nztA7EE1P93hqskmnXhBGKCAZTguynjkqnVdNjdXY4SbNw6z4wVWNiztqaYsH3bHUDGo4HdyrAz",
  "key19": "5Z8emnDfNLK2Dvth9zmu9iNzXsxsierSPLSi5KiRh2a5D3Ydnk3rnmRCZ9dykhRg6xHrwQuYYHYbcKKbzGAXtzSq",
  "key20": "5dpydwFgzHAYSSj8Asz8fKQVJ1RUvLP5yE3mmjec4rHkJEUcSxZRvimNzcaocMkW2q92o2uhVv1J9J6DFXL2BjmV",
  "key21": "3JWyPYtExefH6898yGUzzuCHSTn4Lws8TqKC1ESjxGinLPhMyNHHZ4JJv2pi9LrgDtdeM9JjXjhzM87H6y83eD5W",
  "key22": "43iaF9oy94rpvLQi5CNLEyrgae6GTwYj8UhW6Tcf4U8xcsySWsDt8Y8BoQR9SzkcnkymCYwATUZQR9EBkG6HE7zC",
  "key23": "2ZvgLPmXubd17D1ZDA1x2pW8y1DfCzXtR4Mef6zo4uJBcrydvX6b25NSzMFJebVyzmJM4UMZzzzub4SwMPRh2vXv",
  "key24": "7j8zDRksRubKR6zd9ZWR9neyC4nVs3PRDUYNVMid353quW5jsxb63A3coRW4MYMiqyuP4a5RA7saoLCeBMBZGFF",
  "key25": "pHJfZuQhjBiXVJQDWScQm5m1EzXQGYQHqaYmw1A5pry3zwwfstaVRMxbso6AtUr8A8YagHTCEA6WWBqkVLpKZpa",
  "key26": "4UjVvrNzC1XHkg9i5maAP85Z8deL2jyv15Cg3RafhTqh73e7TeYCT1JKhodfL9Jz51pmXfBf8VguHdUQcPRYEanX",
  "key27": "YNx3K6po46am5CrqbqMEXbVzA7JqDF886fCgc8cKeaxbLX3JXguU7czXurypvGWrgRj2LMrGagZoVVQXpbUkVfN",
  "key28": "41HxDSB21cPKsr7vdepq1EsCQPsfx3KkcQmqLBgbqHmURrHVBMoSqJfGyGVeh4C477uxWctmMkCD64pXRW4S5GAB",
  "key29": "5in1sL5E5V1Ff9CQniHXP1s2hEppwNWmpos34eHdpX7ooTKxeXAKRjvTN9bphVX77HKuMM1aX3SVXYZitmHStLW8",
  "key30": "62y6X3ZbJmPc58zfvgwX7A3UnEfw7bVyRRRpwbt9jvW4aBYsESeKsoSUjevQP3VZVzxFKZmK8hctXLgyk33Rf8yd",
  "key31": "4rmc8iGErxV3EU848FRmkLFUKhoFejYyD1wzkRQtKD4puJ9738gxmCX1j4DVUBcuPKHsgFtabUeoQtEWd7GrUtb7",
  "key32": "545ozGVVvqfPAdjFqQnTS4KFGgZEHx2ojwpoBuZgrHtvmvpYTmyetDzfm2PhmtgxrZ8FRN6Xcg8RJA4sj2ts7oAr",
  "key33": "oXXT7dBkSAUu9D2Q1fJ1uY5L93wJbFr3Quz6QaTZ57iY2KwnW5fyka1qTfvgGgfnzuAypkesbszz3zPXRSs83JG",
  "key34": "3o3RvmJ8Sg2wMQ1miA6CuW6G3vgsL31XVSKGc17oRDJYnh2VGATLVcp1hCkneZm2ypACmfndVw3oBM3K6LpezwGi",
  "key35": "4YN7jMf7LqCUCftSSgehENj7L7oAw46m5gL4xsXirRPrZXbZWfaCK4PXb5EtorU5aBf1ZZd8pEngdZGNGCxee9tM",
  "key36": "4KNbqwthoU31hKuFGWC84M54Fydi4bv7tVbVAsGTukbhMjgY66Q1tLfrfKf5JqMWgydqGzt4259o6WcrkEBMMVvK",
  "key37": "uEC2NZYwgaV82KpfaiYhoYyhqz8B6ziEtfTamdWt644sQCcun2VtBkGfWTyt5BxNsRnQP2EshbBuhdSUcJGwmAF",
  "key38": "62F9TFSG9Xhq6Av8Gm9ex5gcFQWFvfSRf1Sa4cA4bkwmc1DDZEFAS4AKoqyUaxpkw4aBiuVuWg9hgi2yEy9u1dHW",
  "key39": "5W7TyacZLfyri3bfbGo3Nj4tVGAZ3aZz26SQE6DFcxoEShFwPHCyMYWLfYYrwZtvcY989N9m8zgqzgcmLaqeRn1",
  "key40": "2SDdp2WU3pAhSKJMDfUwLNFniyU9Qkm8JaopsuYJHF2zP67Dacy2WZ1TxeJi8eVn6mf1J2dqteaG9By8MtGBt151"
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
