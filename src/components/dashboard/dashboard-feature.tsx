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
    "3NVpdPRXKvuNbGWQsHv4MoWUgQaDcq1MwhFM5G2TxWCoGwXx8nGmHHKhbB9yJKPSrKxie3SWqLbnBTgzuzovJczs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKKUceYDEMTenB1NszWu88DFieGc2wCNutjqAZ7egKkaCKsL1e7vk2KJxAdRdDmvPXSN5U2fnquoJJE3rurGdrG",
  "key1": "5B1mrLskKBce7x8EjZ1sojUhcKrd1PjETyTkPz8VfstnE71Jtq2cRZXmbUHJh6FKJHsuSL3nRVNZQ7JLhasKnNNp",
  "key2": "3rPDCGPWbMUzWyfMEjuvLgfTcLzQfKCEdjVrRQS2Tffxr3fAM6VUAUBxyN2fPKVXJ4JvFFEUNhoEgSdxbt4PebCs",
  "key3": "2TDx5fdo9bLacBhQtvxEtemERQZBffFbvjYC3B3bQSVKSLAC93qEf6bhVGpZYSGr85rnW3Fy3egHNamkMQ1vjHrB",
  "key4": "2JDfZuFhgVmAa48hy4VaCyAmzfurVhvatWTN3pUA3fZGKEpxVLi3tXrk6VBTnYPJsR7RG72gTY6LfStJSobdbuP9",
  "key5": "5yCRZtitxMHPmGuWA3L9uRnff7rSjeVfcHXXHJ4sxG4g4u9ryR65X5WukpNfamcs6iPZ18xdYikQQCbkvUEVRo56",
  "key6": "5zKQN8PZHZzXtrZ27MzawrpDfUd7W16WsC2kpC923V1JbHv1dwnFvZtjqavAzDPrGhyJ35goR42YVxEGBHyfPBr4",
  "key7": "27sWfPr7oTAHRu5qErMPuTq6FPAE95s797jb7rGk5bWfdYzJz4cRX991SDgy1ahkSn897RtutopsvLh94xwhagXr",
  "key8": "3BtkgphPXEeW2GieUDWC3GVzK956zLSRMxt4yPoRMaf3Kst5zhHpwTmNTdXYS6fSUBneTYZW6bmUa1VHFNkoifor",
  "key9": "4qprEEFKyMzeXDSX6FWFLM648JbbfAPU39feQbYVvcvoZw9jSi7GydXQ3V2P894w93vuvuz5iCC42Uj8HvBEg3aP",
  "key10": "3wJG8je9BaYuEFXi5hxpR9tAwD1arvhWVsmeSfMMsMBRJWPbJqN2j9fZcDd6R96WRcgmkGvkA9LFNhSCovMDsYoc",
  "key11": "2dNGCoZTmYsYaMwvLyCt1iSFPEXtHeyeN7sVYnnTpXXVG4VNmcgcN9Whdj6aDxnkM2US2RkVAqm1Wr7veHaz6awk",
  "key12": "39wnKFLET5GMkRvdAMGm3su6mGZcYJf1bbamEh93hcsEUVN3H1mEdrgb4WKRXrndNWXzHPEvTdoSS2uYxZUErR9v",
  "key13": "4QU9JbdB2KRVD2EQBjNa2VFeh6t5ZjbrwxRk6mtiTGmHLGzsMfJhiTzf9KrBMHLbSnBdPDq1Wwm9twsXutjjffzq",
  "key14": "2dKiwtyLXvwyH4BU72g9kF4up5Dw7CoJbbEEXR3NVPqRzKtw7PqNmP6WJPrzTxkteM9PH2P88Um7VLcKC8gKN58h",
  "key15": "KqmygiCJ6Mj7pNv4AB5HzMfPdwhQ11by8KNzwvsPwXpYTKVkeQP6HXKuCnhhg16L8pvbc89F88W5YcoYyG4CjEy",
  "key16": "m6GpHwfyeu8toXV7YB4YpX2bvUcg4CtWHS56FGsKzHesGEnef1L4kb7N6n2ThCYjqh4s13DAYcbMPKMJsXKJkzG",
  "key17": "2eHEw1KEigMaTNnJVYuN3juMP4PELz1dEdn9uKWYDtkRoiBHp6UhC4Eyj5uwGhR7fYi49FK3GWwNwqANB54Bjvws",
  "key18": "5YzsYLE431YAB88Lq7QyG4UhF7W67xCXw5jfyQZAvGFEBTkcqQWKjPcGXvvWDroQLuAk7m5YU9sgAGmSMQgSX3fy",
  "key19": "3MpRsHH6EivypoFUGkrE9TUy4yeNxtsh2HqDSJ7pbxvTxXwWnBMHxWUCwPobG8z6yCQJKMP59DUqPeuq2nY7KEe4",
  "key20": "3uKXTmSVXdPYNr8GmVza6sUDZeWNejP9S3vwBvpot4TWvdojywMVDEv4dv1Frj2R1SwrZZAAbffMh7pur895EXqC",
  "key21": "5Qds8eiT3NT9TBZGGfHQZcPdpyfLRK4gzxLa658bcQV5R4yHH95cHL8F3tGU8zsEEvRJgDFbsjuJJyc8mMrBnwRB",
  "key22": "3X6g2a9EsS9LtVNc5V1D92GzPZCrW7v14yXcjvvPAE4apteQ1CJosWuAQ3NH7JEV4GexTcigS4di4SnCcQfmpUrU",
  "key23": "5yNg9Yq7qi47BSUT34QDmWv57rRmUEauekNT7Np2iQ2kMgSWfcaWMCrx98NhJoWMwBUBVcRZ4s8PGQJMDVKbKRsV",
  "key24": "3kuySyw4pJ6RfgDoRsev5hcHyfrPsrvuLcxHSYnEQ58RBrNkcwHco57rAjjhFP2LJxr9EGQ1kuCNidd622FbfeP3",
  "key25": "58bcnJZsJZYiWNwNkNv1F6nWu4NfZmcJmiGGxkfprkoCVNurcXJMgw1uM12QUHoXhP324XRthxaBYdcfewKYhK3L",
  "key26": "r4LRD7DAGypRHukX67o3xDYrUCMPkGdefo7VpGPsVqV5js6ast6JNrWevLyKNbc34Muzos6Rw9DZpGBDnnEXsn1",
  "key27": "YpEnh6oXe6dPQ3ssqksRZJHaCtQqK54on6DmBv15g9WpCQ45fmvXKJZtnQLky7MnetNiwNR39Gvkv75VD5rhYZF",
  "key28": "3DJ5iQbHCxdu8hQS2xSWvEhQRM7EFUBxv6c2Kj6FNcUK4FWWGaHH4528zifP1z1aysr64NHSKSf4sz2bUneSRY4a",
  "key29": "ybZZJm82psPXmjritaW21YKNLftWZTeWjaXTahKA9MxtaACGUm7og7cUdyTZryr5H8kYx7xutqXNRueMRLMj16L",
  "key30": "58Je55aaCRZsoLxkZ4z1KkWg6ixaGrKzncE6uahMnV2Vfe61o3bSJyYvxbsq3PeZHGqASqk2YSrcBFtBxs6wQ83W",
  "key31": "2epWuCiuc4efd7ipYCFjSsXvGoaZXhNQsdcSxdUrSXhcmxftVwGYaa5W5btyLhX6CNpN2borqA2WVHDTns3C1ZtL",
  "key32": "5Pfz2jAHixAiVXcJFe6FPjL1xtPStfBUL11kdUL2H1UdnY4hwV9LxSHCx9Q6ki1r4u9vfG2xXLs37xBkS21Fj9CG",
  "key33": "2dDqa9CTZBSMpBQXusmsfHsRnRUVEYh8ranPWQaLFVQBoeop4A16tF5tyuX2Yf5314CM7Mduoeq3tE4X54E2bn61",
  "key34": "2MneAD4Y3JePp6b3tE475weMjknskB7caQGezMCKwQqKauDj7J9ymxc4VEYeBMGJUktLVp4UEtmPWVbfD7sNMa97",
  "key35": "4N46EFN6wMP32VhSogRLez549TZQUXqzKVe46kSoq7qDoumjXAdtKdWBqDkfAZegKyfvRu3V8LF7UEHjyxEPpS7A"
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
