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
    "wCK6NnEc8B9aK5FJMPJsfMxf98v9rebWRh6cTkvTWD5BdZzj5GTGhmKaQcKG5dQisjam1ByUJbSHmWRaPMdWbAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5Fbg92rMKVhZ6RBZ1GZF1DTmino88CHv3xQsV6u5MHGomMs6ZVBJWm1nTjeNNCaymFQrPbC9TrWgy12HKoN4Ax",
  "key1": "65kSTSCa4JvCAZkHez8uwkyRcJcSix5LYBgk8aMnfn9tBAKXB5PVkNgvcNonytAkz4iWSwDMfwUqWjiSKtJzdi3e",
  "key2": "2Bqfy15uiDSyiRAEMRSYwDATti8sWXpDwgNfdc9dHLAUkqjLApTq266x9ZdmzfuVs4Aj85iFWaMzbg3cJWGhmbyo",
  "key3": "541mwBUdSCSBerpmgB4LDWH3qd5M9g3JXK6mS3yYdtneGkYU73KKqUsRjPZxBg5wVqPf7uzSFXuCcoQg6he5SRV7",
  "key4": "KVUn4ugzUgT9g2HMgXu5E3YYsdxkhTHocJVuAiUJuabTqYXvjyJUZxrpB64HMUFuB1971zDPtZqTLeX6wmMnzYB",
  "key5": "FbywANksn89RJhGhLR6fFA855ecLophQWaHDBkJuv44r1NXFXLGkKmyCpUNErNH6VXzfDhC3uqqFKtdRNo5tVV5",
  "key6": "47Zzhnfdmu5uYQdztc4Q4SE1vXGg8N3Q5HjQXoze7iBxWLpJV57reEU2uGFxc4RacCnDvUh2ebwH7HLuNFGfC85J",
  "key7": "2cUPXgVCDkTtzNtX3XApwCnz1uPWphwFkijwTKD9vSUtmA4WL9UGWqhEBE2MzVmabYjfGpcEotVZfKoKSjiZrftL",
  "key8": "446hENMu4Xi6eFnYJahMfR8N48NP7xyYWZXZW5Go8mN3GVKJpSDk9iZ1u181UFQBdLkV6B9EzTd8zLKEdNebU5My",
  "key9": "4p3afWHLjbwGzGMkyQ1EL4neokzTEb4uBvx3hwWx629taZVH469dWsxdTetQs96MsPca4V9boLGMtkhqoY4yWXHb",
  "key10": "2CQZaQebhDESfdujzZdBVYLKp5fSnUcFKBuWpyawdDTEJF2SD8kyenDbwx4GTjR3qDjYWEXeud2TV6fuzrKGwQE",
  "key11": "65h6xGpE6fdLKRBmm8Kjbret8rvZXyYXcj3tHUyPAmjwsLJ1LuhuxbqpcWKbNvyUXRoXrs5Vpj3qgh2A8ALZKhhu",
  "key12": "jFfAS86GvLgDGhm5u1RxYyYxfNEPbAYTVVevZ8Z7S62fkr1xm571s5tjPA62i9dsordzqK6HDcbGV9tbtxLfetK",
  "key13": "3LVd3mfWXyPoscs79q7Eb4WQnm74YJQ6T7dYrkTTs1HFQ38M7Zh3e5zEhVKymsnwWgS3cMKtX6JYmR4SS7kLRDTc",
  "key14": "4SQUTMzRprNecXCjjtBcKZP6pb1f4qoZ4GDoeDXKQqs4Jx1DDoMAtLFVmegzhnQrQYRMjpwVz4sHA9nw45gLrXsZ",
  "key15": "53GL1L38MPkgYt857ZzfMSrCvbsnTjyNganR3XHGDjgFh6eth4oter2ipJAy4nXqtCUWevYkdAQJy7heyenDgSWf",
  "key16": "pAsnmSpT2ETq8hL3DcpQyHUB6HZYypE7jxyP9UurGAo3FjnEq3VPJe9tGQfvHL4Z25Hpjxss15CU6ReichB4ShP",
  "key17": "2a5wMQLKhyW8FSp8pC1YLHwLhmoFH4uX6qthE1MQfmkQnrtGLsK5Fee3TdVyE9BqRETcHXif5onDn8Z2UTSpPYVN",
  "key18": "36zL2ycpk15X55our7bvQyfPVt4aX7tGiDEjReLkxWHWGvQouJsEWhDB2WPX8WZjKLeK51FS33jJ85nv3sH66paF",
  "key19": "4A8pWJzYcNibsR5pwTPP2H7MMtDGVTkkpX45v7amHSxEcwcxG6zqKgnCBGFa8sre5Sm5MNpcKFhRd7UJedmVCfbo",
  "key20": "4GC5KprTpgCA4YXCdxMARhqVYrLCyjAiKNpRqVdWMvxFaB1spbjkUNGr7HyTgjezcRkNTpszskbwffpecGv1zHWr",
  "key21": "2JnfeXJMYjuBfnn8stWQJvk5iPz4GMMW4ikrtMRKFsiTbXgLxdVybEV2GKRNaHGp7nmgPuPdZpRSph38QU6B3Tby",
  "key22": "4edyjK1ZzGZeYS4hVmfzqTybicUJWumBu668Jy1nqcEjfwNpEiA2zpatZL98Bd38UWZXS3xsiNSXSe9rRXy8Ny8D",
  "key23": "4qu5Ytx7je5YobDgwcoZ9gxtrx6mQJScdCK6bnBzjysEgpHA5qPeAoMfvEPnzEbHHo5aPmB9BoVfsJcsRyNvRFsG",
  "key24": "59NWsFUeYnA2RC5uX8ZbTE7htn7knsWeFiM6GWxCGGU7UdSL9CgasoaJ2JYKjXVX82Uk6RHeR3vscQpiH5895j7Q",
  "key25": "3MDvevLByS6zMfC3nDUsLsnLA6co1BwakFPMLvCqagk462RQ7jNoRUD43KCejdNesnMRJ5SAvNTEfPZccFaccs11",
  "key26": "4XrBUjVpstnMPhKYsG9gMPZoUwvZFFZo5gNkEV4RCkumfj1NmALo4b3kHWgXEnp4GLULVxtmu7expiCWEaEAxqFp",
  "key27": "4KupDm5eHbvf93niHjcmAobndFbjjeASLKjthgYopfroornQ2HbouRvksQ9R6Ucy3X6gWkNHzKrc74bz3sR1wm5W",
  "key28": "MgUFj6efzrunchnUMBpbxyCXx4ag2CiviU3BPDtHYvYQBbCyDtNBRZWwvg5yfPLShAXQLPueFCnyMvxc2kdjMLt",
  "key29": "24vUxuy3fVLHXXkL1ZfbwPARujJymkWAvA8udG3gFqCLkDjoYdvfCZPtkejA8NQQDqhwLuuipM6V43vXEF5YwhsS"
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
