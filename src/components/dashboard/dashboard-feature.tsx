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
    "3nH3ZVbdexa1NcTCnsqzHSGHqEXWSsDSghZSLXQUKiJfQPJqi6UZYGmoYL2pRJN6WjVy4goFSKAi6mQFtiv8FaT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5T6sXoDRp6rxS2UDN1SUbGd1DyT4qiB4cMPXs5smtC3MbjZaRHqPfvGUQGoimFYDgbxE4jkmFtKepWwyW7UP3j",
  "key1": "3TbDG8S7cdy5SdF2dGaCyXxQJLeeq8FsUSyLVieBxWx9pW7DoSSP8nHfSZYZVw2QTeGbb6xovxuPMmaRDo2UPsWj",
  "key2": "3WRoaXjaME4mRjPFtVjYYvszm1p3k6cc9yMEMFit377mGjQSQSVX6TN33FK7qg9yShuVEGGVSnXtpBZThKtpX5Df",
  "key3": "5Jq1tzTM1JfX9uKCwinbcYyskixwR1fx9pPMjpN7aYb7hfGdMUh5z2Dy6zzW2tdWjpv8LFy3YzW8cEpZAQPjE3R7",
  "key4": "2H1KsizxmYvrcuyXZ3DbDCKf2yr6gB6UZ3MRQBZYjKfN4kkXKLxRq5YoJzfTiLFjWkD2q5icsMrgjTxsC6qaXjXp",
  "key5": "5zSNZSt9tvi3diHrtZ77GKimfvpDFbiU7mKic3KvoQFCk91Dt6MKzWb954T5azMxieBqyX9XVgW9uShoPGRYRf6m",
  "key6": "34BaNhmpdPf8J2RtgdBPg5bCEBSiyxeaQfWMv6e7v4WZzPjQDkKjXY5GmNgCwBErQLeHAfsNSFMcLfacSkzno2Zo",
  "key7": "3XAxAWyF2EqfHjpaZDGZeMc9kc97YxXW6dvH5cjp9xoqF2hVA6HJhr9N2zHDa7PrcW3ywgwrLmy5K9bEn2viwpZZ",
  "key8": "4u2rbt3Pum3BSMJrritnKW84J2opNiP5dhQ1Q42hBATqmaNGPxz9hDtPFisHuW4qNLfu8D3e5ygx2CT4Ldq983RG",
  "key9": "W4MC1Q8xis7YXWmMj81d7XDqjgtJtQzXVSschxSjC282UUjMVFRk2fTj4iiaKiG6j9Wf9Pd29jCHgS7pv4bmH9R",
  "key10": "4a24tN7RvPyCrGVWW6KBGD3QG3aKWEgYypfEysUNdizPp6WuH3wNJNRsGiGnMwvZEQT5299JhwFfWYcn1M4Bgn1r",
  "key11": "2QaxspoLjzHdc4SNYn3ndaVtaiQiUgaBS61pJhxeZrZfKtEjkLxx1PDYAqkBbvYyQ7EkWgQ8dV8fV2U6fGpSp8F",
  "key12": "3g7P16bUrKzEr5y5nH9phX6f5phaNVcDJXp3RjRxn2H5WwFwuAGLR2TBmHkCWKrhiZjLfjcFM5UQyQd6EsiAMBLk",
  "key13": "2J52fxMPbC9v38GpfFANd5egzSQcfwJuFP15o2eRde6PfFxSLN3pyh3DiMDf8odUMcsDBBMr5CSkNThqFaFTHemM",
  "key14": "DcR615ebxkg7uNnFJGMhY8EwVWEjAGzAJ99s1YcaQryGLinbUeyees3wRgHPrJspqr7RSqgz482gbGNmKWWrRNz",
  "key15": "3ZyyNik71FRyv1uUuRBk7mVQjgvJN1k6iHP1uWUmPb2taaHUkJvZrakRMdB2m2mufwbBg6qm6UkkMJt5y5yXxQmv",
  "key16": "5qy1eYoQ4jeZ7RMvE6G2JU4y4vEv84pgkMGburp2nmx2aYviAeSjS34XYzPVKGtKJdKR8VnZ6V8Rja7QVH4vtnxm",
  "key17": "2ftBaR9ufr79WpYa5Hx9Pewmmgr8zgePo8Y5fbCJjhdRVND9CP4jX2gW32AgUNXfRYuaG3pQYMBncTjEZkf4jhgN",
  "key18": "5pZZGi7PvCpeEPqKGkMhzQZr77VJiUMuJev352CZ76X7VfqnozC8NaeaBh4Sn2fk2u5sDAfofJrPM3V8bbx17x42",
  "key19": "5rLK6udGejA3hou8xZMg5Nk4rtYt2nDtuqxbqEGGgBjHFaAgzr6pQX1NGjpKcJsrj33KNrbrBS9PmP1ojCG45D3q",
  "key20": "26mqa6dJmfkPkt5YPUXLPzhMt7r3y621wi4QihiZK5pSaZqJR86JZA2epCXezXayYiPBejA7QmGvhu1iippt6XLP",
  "key21": "D19T18jyXGC8nHmzmQ3PCCtHKpqs6Bwb64mq19Em4r8eVeVeSTVZjofvdkKGTk4T8A1EaCTcsZ6MR2einNCnSSb",
  "key22": "45qEhivt8w39kbUF2pMSyGtU9aMFHuFNBd2SreFVZWUiiL1W1B5US8hwrZ2CPwjAfVibT34hGg72r52PAbgWMYXJ",
  "key23": "3EbfAyWbtew6LnVfKbvRmj1dLdXxo1EgFQVwnwZLzcvwRhBKJezFBR1Fw7WCVHHK7YBWDbXR9Db6Bwr5YV3KVMna",
  "key24": "5ZdBB6dEo1NHQvMBUnaEoFbb7dAu6hZTGZcyj2JcYNahArPf8onRAsU8QXgaTqtzkmF13ji6mWr2vLqWcDUmFRbt",
  "key25": "38oJeU43NpaDRgodrQUm3o5qUpTk3wRLycDzEdcLRuRG3NKkEsoGHd64bpxqjk7NaQZaxNh1ASsXE5Rm4NHjTQGC",
  "key26": "5P3tGH9a34o1k3G5HXTT2gY9mJPnv9WFUsUqdBgNA7cMCbtHs9YUugspzGywFPtqYupcppp2mNYxuF8h6QbPG6MV",
  "key27": "XrNVdBLwUcFaRjuwdh17Q4Txn1ouBdW43mnEWgkn1iEzY5qNqTj4Krrb376QGn3pBUfXFFA6zrnPTA5xpbQkuy1",
  "key28": "4jdwieKET8QgdXFtpofCgkEp49xhJCEqkCdKkRB6Pk2xZVYqgnoVhjgjgJXwGrP893bV3dSXDiW6UHEq3BcDzhbP",
  "key29": "2HtxpG3jwrVyGHCVECSRrPkP4iUpAMMKFbJ9NFsBYRwnPQ8FC2RRRdR71YCsSN3FKsCVchbogPfbHD7ZQ5fTkA7s",
  "key30": "hr4B5QrJmXZFbKYWxPVd2kASsVJWxvTZ9avSyxRZVWmT1sHVUCjLpCNv3x3wJqkVzZY6NzzKN8AbnBQHeeAMkN9",
  "key31": "L8FSByZVVJRnV5ffvNg4thuzM9EAzNcD745wY8iCSMAN6PiFEAomiUgTLa1rY4gprQgHdxCVe3HvWQWcJA8WJUH",
  "key32": "Bh9SnQCzxZ4MPi3fwHseBKS82vqoWxj1cu6u1hSVGCzTSQ7iuLHp35SjX45M23zjtAaTBTzgc5RiB8HMyiDkSmA",
  "key33": "2LNibMHgo4DnNjWADWcWje1Z85yeAf7oP2i5NzxcjQ7QNRTWy4Ub2roHnpdvrZCKNTDxdYi5PMW7vtTnvtsbVwUM",
  "key34": "63QhPMWKoFZJFcPCGEt3dpTrvF2UKeypqmVqYGVvjyxMqFcL6bRgMA3WUmyHYnriSqp2Hp9CTLvUptuyro3SM2QQ",
  "key35": "268u2K6xda8GoYy1ZEZVVKoRoKgR42Def2LS3NjXwTuARtSpjf22BHwuS397PnnLcNsb9XjTpp3EaMFxhQpks1RK",
  "key36": "532Cc9tmQfjiCSHzwn2yWeU9GgbAiPm1jvWJsznTQdDnT9V1gZJeg9QgqkaFZ9fepC3YMy4YQJM3u7fGbfQvSquR",
  "key37": "2oWKu898EMqHSQEndgGNNSVAjDw7W6Rs8EkQVKxFAyeAqmyBij1QK1BqojhR68H24rxb1iCXv4wyf85grAwFctqA"
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
