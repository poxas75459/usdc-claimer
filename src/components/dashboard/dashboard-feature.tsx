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
    "41pn9Pvo9nkTXLHWRo74zVbMgRfSgJViQJ4xModtv9ixcFmQEFHyiCjnmMF7D54pmkTo6zeA129YzWU3aE4Wcb4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5naqFDuNH773mjKFXa2vfdogrZCnweJvf5EuenXMzCNU5nwgGyLkiAwrXYjYLYgEJ7iFkM6q96zqVU4jaZxqSei4",
  "key1": "55rm7sPumvpkN7LfVVVqiQzxe8Ncpts7opreuCxmbWqMwSSxkMdJ2isvpXuSWcGdJttkMhztPo3KGattavhdduhr",
  "key2": "3BpwQdJGEpL3razdpXV94k7fkJNrEYSm2xZBne13yE63NFSHfq2L9g2Frmduu3UvAjPnLPGXQX5jSiL3pBhD1tA9",
  "key3": "5VWGXX367q65LjYUz7kd6W2m69kjeQsP2Az4nSqj6dYqybR6m4r8oXohLWEQKENTu3sAvXYVcXL3k6p8sBT1vqwG",
  "key4": "Xvh37SLw6yrYoLzRVQZaZWpVd7TBukrH91cbeBnuAdh8xKVZA5LNrh1gm1RQyPa1UG8t4k7xegXQZnrKggdMoLH",
  "key5": "5XXaY72hfJCNcVJRszMgc5wLLdaQvHwcJYmqQju3MTK4Y9pKDNEiE63SAchKtinLUwvyu6eYeFeZcwvjQ6vCJ36h",
  "key6": "BnqUGmiLeSXFVheJg8MoKeouT8rTE4eFG9rZsXo8nVXcacxj8Z8h3iJEiaxawUpRJoijmVkts2hfkqbkJduzpeB",
  "key7": "5Lqit7xoV8LHM6N8xVcY1rFawRnBXSdkVfR9VEb6AuZCqJQn9EnL6rhfgTqtdxpXXc9oNM2YwcHBi88PsrcyKWjA",
  "key8": "4D5mXgqB1M3QhpZWJYYyZZEHyyLe53oFAkjdVN4RyjCceHcGwvGrRd8xCGasD54Axszaoy2cdFJM2hgiy85jb8Yc",
  "key9": "2TtF2obsfi5kGjesjBec1ucAoRApFkw1868mg9ndYAStWeVbbsxR8gTrcNiS34YGyoPpgCFZxYU8YEidayuVN9QP",
  "key10": "ZLDfNX5A7xVXQd3yUE1J82ekSvzM1Kx6yfc6q56eVCTRp4UC7zQizHPMS8Pwz29nuQX45TtC11avhNEtxvyNd76",
  "key11": "3eRvvZ1DDKYaJExHHfT1ryTJKQwW4CiqTfFEt5XVMr23hjZUPwBAg4kj6mZHrVnBzhouEGDH5qoziNGLwKk3Dzep",
  "key12": "3JqNmmcTo4SYTLk37Hiq8bjUm6fpuY4pWunhudbmcWYyGXQj2SPVKbFLp1JdV6RKQgL2r1jWFSdyDEAsvBBCZeVJ",
  "key13": "457cBQNrE45SYNNVhNGzJFCGDDZnSYKvyWwNVr8DbVU66TaZFfNNtFK9HJ2Hm8fGeVs3i9LumGeZCviL9TzB8CWb",
  "key14": "2BBaSGVHCuagtQiGKjD41P1e4xEVv3BbEZ4GS7vrirnMpLAgB5BrQFGAu4LArDZAiBXhTWYsnnBDCzi9jR1tM3aq",
  "key15": "4KrzoUd1HbKYCJwvZME7SCpwSbPhSMp8hGeuAKR91N9x99mV9qYFbME3GrT74AZUHdRfFKwwPtANVj6An7FKzMfQ",
  "key16": "AZRQ3YQkw8MZKksMkZo4uPG6qpyLwGck3WzpGpRiUZXJGGzKbr8dtxGTjsK911nuHnELis5xa4oZwoXzUnZvDfi",
  "key17": "4nM6WBfgBZFTfABiWHvjKgJ9svD3tBePbRE834nxmBBX56a1TSaq34gQam1q7zJY8F7UG7zYaC6FFimzJxZ9pU8c",
  "key18": "g5YivbF4XGz2gZGZCTADfnFFxMKTpVtXEWqpjShAuWrX4eMExFPTsfAf5PcmcUV2UiGBH6KDBwaTA9dhW2JaQiT",
  "key19": "5xXxaACJm68ZdcNZZVmRXaHnBqR4ksPUk3QrUciUVHsu3Nxq5ZuaYgkEhFkojRWrwBwAggDdb6jF6LJjZEY3R27p",
  "key20": "5dEFLrWyGUPJrYZH9zjvytxU8bcnvmorQMf5i8Zfh9FBgAhsWtpf1WnQxbpCJphodDnP12vhvnmcg6FacKQi7y4n",
  "key21": "47pFMJviwy6BRLxWAWpvmXmiPf2F2J2QA1McCS1cJ7r96R6GxMLRLuWQzzo9DLesrFDZf4Km9PrPSDSMekmCAkE3",
  "key22": "5yadS8pHnT7Q9NmU7fzS9vUQLxVgTgioQnkfnd715Xb1GeDU6YV8AiVGyE1a2MDHrnH7Nagjx2REmyUvwUw5mRHW",
  "key23": "43gTjdbN8Xkf3ds49G4A9GiKDd8xbMNP16L33uQe34RzZ7EA6Fz5C5tpmDhvSpeVQuUX7rpkLeriRBrow1mjspoW",
  "key24": "1bwKJW6bDVXA3D3iS3DofMX4Zmsm5vE2AUroUtpmgvaVpVM27Xq2v2YUmG65X6pK1KiQHxYaVHM7qhDAPTTYEnU",
  "key25": "4REzoFhaJFqBt11qRA8hYqwiefG5TJcoZVeg6fYkL4n32i8Pr82KqPLwJkaaQ4Kj8Ru6zK6sPPg9pigSiubrnXgH",
  "key26": "MAP4vxYBDcm2sr7roF1StR8PWmoTUcZLitBMKy9TXEvXxuLjvCvqfHibQzWNn6DC3YjqCVymfdwwy4J8i8aPLa6",
  "key27": "5yqqV32tsgyKuvaUnhQaZkQFGRjUtL5vUXjJPqd1af9mWs5bj5xq6ysjYjVrzB67vTkaaGnA4RaFAsZpvV1bHPXX",
  "key28": "2ujRjDiteW3R29iMAZZDCPGwb7fukDGwWSt6EF14tKQuA97yyyCQW8hFknEezhJDcaNhj6TB9iZG2QFoKGDsckkp",
  "key29": "4u5aetEkEADuoMbktWpcwm3ewgrYDZJCpo1bDabmBjzoWVLXUtBv9vasJBuJRjoWPe8wVq8C2dGdgPBKkFHj2GNb",
  "key30": "3QJ7YxdTzNZ6Aon9en5zjWYN21YXzWJ7huZ8EnvxFrC1HLcbyeiJECbb9R129h76E5KBJFxKybkCD7RVgqfs4rcC",
  "key31": "3cPC8CHsXxrKS9RkyBeMGsLq6yym4f1cAuApWhqWyXs8Ad5QtMf4ycPCEwT2Mb7N7xkRieoUSjDtc9JCu6eg5t7B",
  "key32": "3qZ5P9X9HtLGRQ7Ev78pkMwzpk4Amxh471xcvYBVSFmv4ZBErJsAJupnoXnruex9SVwANNCuyrBsQfraTQzN6rFz",
  "key33": "2rseuPbdEswHSRAx5r2KionEzc9KwZyfLCHMxX9CRab5NrWjsC1f78ZTM12VTde3PPPzWvsHMKwv5cKnixLxQmBu",
  "key34": "42DFBRGDSp11yHeFQD6eF6jQ54QNFzptfKkU1ShU6UbD46bWVn5u4nMppV1sm1PbgVKGa8ZMxXvBEwuAxa4rSHn8",
  "key35": "3WdmtsdARkWa4FMNQ5NKE9eJoavR3hg8n8TK4EpXCVdHhRb5MSRpPjn7Z1WJ9PR233gDKKtjK8yMEnHztZeXCXpM",
  "key36": "qjQnn9ZPgBYJvLwGGiV5WiCygwCFGoX12JEJLiQKW5JrfiZURXeUf2fMxsfKiekLEwtraUsNf4MEb1djbvfcEJk",
  "key37": "5n1kSSeFapQ9za9QfJUxfiZWr6SfLzbVdwmjiD4FGGseEZv92Lz6pC42sWC1HdP5qX29yc6FgyX2kwhSmSA1B8Xx",
  "key38": "2rNHAZyykK65xdhq5VcAswV9VdyencHR3HhejCunqSZ9e8NKEwSmyvoqUkntNLbTxrfbn2Qg936sJsAStVaxojpZ",
  "key39": "47xon6UqCtCnaUyJUAD5aeu9zKadEY4Pn7DBwexfVEbdc7ukEq9uHd5rFWBmEe21pPuKZgssFJoobYKwuCMtRWB2",
  "key40": "nJCfEGaikHfXaVvAZKSToFe7Sp24q98HFdWpxd9d77EeyrYEyBbYP5sjg7mVMccsopmNmS3DF47533BmtwUUuqj",
  "key41": "vj8G6SjSSz4hq89os5MKaQFLyCdfeqDF8ZZFSeHBs6tTxSwPJLDQ3T3j8vc823jHZD7FwqHtVn8cSMQq8KG51to",
  "key42": "2wabuiZSesyeEpGmVzHdxWsXYLV2StsfsP5igX3Mhw1Zb5st2QuVqP3RHzDQWdUXy6tzHyGm2dK1d9uEYzjjBm62",
  "key43": "2juhks422BaTcjD8DjB1rXoiXfRdJe4prufHTTw7MZLqCckPFu78tFFuD3wBBDHixwbFPuX6yqNaPKjm9aDHJ5ka",
  "key44": "55ZzbF1iwWDTpyNHwvA9VtoGArhkdfYfWFNa4NRd7PjJJsDzUXo4Rr9y9De6GdMPd6ZkXcohcxRmVZo7DGTvRBmL"
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
