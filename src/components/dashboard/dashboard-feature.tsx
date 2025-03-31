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
    "3vERf8i1bvd5rpgXLP9XkPm7CJ7XvHtUL3JquMR6DPCUVpC8MzST15KPhNNM6xY9NjJTw4uCH7EPj99Ha2GkcFaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AuBVqJibwHsB6zqkcvUnsPMLm37g1YDTzMF3oSTET2FSLuMXeqSbzoHcBM7FuvSc3bVYTxAvEMYS9rEzepgq3h5",
  "key1": "zdDhsU81udFN1t7f5aBq16cMjPA9YWQxHPRR3inmXN1A5CF9LT1DWrL4RTte7KoV85npBdrfmzZufr9YMgdG1UH",
  "key2": "2dU5eFZVwB3fiyCt23awULnjuVV3qgmoHCLfiofQMnW3dSKzGUPFxSUS6oum4pVxE9zAp1ePPn3EuBVnkvw3V2nT",
  "key3": "4eMi4uPoJWhE97L4XMYSLZdG75WxnWZZVQjyB5Kv7ed9HwXeyMkYjREF8LDNh2i1LMS7Mw3RwePmbaNEyR7XhPkK",
  "key4": "Te6dGrk8wEo4V6XqF7s8PdnecL1msf6pPpo1T8GU4Loi4R5cudaLjSPLTj4TCABS75VD66r8Rcxc9hTZP5hrL1v",
  "key5": "5UdY4KZNvpJi1qAFgLhGUkGy5sA2wNEbB6x87SZ6UwCmvyzMzg1sGQHqELYfPm3Vi19tBxiJDozniCU4MHLZtZnJ",
  "key6": "5SeKnFrXkkod8yKvmkXqSJwXELZBhfBMcWHA7YiWRvRYCC1vTWuxBKdGkys3a2tA54sgAssYBYpqUJqCby1FkxQi",
  "key7": "2zB12V8YQtNhXF24djctnhEoNXgMmbBTaiucaPfbVk8mcpj41CwJEE1HHtXPj4qxSJrTPAZ4qpozw3tUHBrt5Sva",
  "key8": "2LrDQo4fe2vnRgGgRxnivK122yPQ1ssfGLGjRkBpUCUe3XRJkJYqjdfvgMq4ynAVNGo3faVVUPPCUr33zco2axS3",
  "key9": "4TWw4LYw1QzYTy4Uhtx7Q1ohbxeLfoVwDb8oe9V822Ppu64wpnZCe5zdZGqsCwdWni2GfbWMREuUhiwJXntPxGnU",
  "key10": "31QtpkA7tdBQ5oAbhM4NmKvy5ivoAxtQt94B5mYttWc3L7rnepctQvtHkrckYV4ssumiBfgVNjT4JDZMYT231rdy",
  "key11": "2EkUaJLFFEagShXAYG288N3w9QDNZ9dTAkXDQYr1c74NvRQ2pFgL8hpA7rjqiRUS6LxH2qkwGckdJcuGJhRy8WwT",
  "key12": "2bmPwg4cuWmW5qStQ1LSbBKPR5gvwSxd4FybCtRKqXaQpMp7VVaPUHP1zKP4fLBKdwBPcAJoyJZmAoWE4TncduVp",
  "key13": "64T4LhRE61fTjtPXWMq1onjZqTnckYhhs17Cwz8CyRQ2Tm2fQ7boorBJZwq5qjzxvNaAGzBaFMug8x48sStXP4z",
  "key14": "5teL7jKktk7bxRpfgQa5zc4To3WLqePZ4GmBE4WoNNE1Yh67sUSRxKbrrkq2RcgCTfUH9ybpqbFMjcSatGNNZSRv",
  "key15": "2e1emW5eG8ZgVjKd1c5L7psYFrLeMNcnRJsibZHJwJoxpMqgrztpQSnC5wvQBCymADReUSqM4mpPiynbsuq95ptN",
  "key16": "nyRQjPvkizDkPLaWmkYQbC1Mt5cGqBeZPKMY8Mruqmd7X94LAszgdg2vTYy3tSDqBG9zuVyuNXD1Fz7w14YNY75",
  "key17": "YimGumttCP6bTnf9CJUU4GkQAH4iYADgaUgcxGb797Pre9dwLh1BQFYCipvDvJ9fdymWZavdKWH9AnyjwpjjZWL",
  "key18": "4Z7KTkcGjFLKeQw65h9t1vz4ESdotCYwvtgbc3FsHqKktE3rRhGKkqzGv3Ps4Qf11MtDxKKVV5sst3DhMwycJMoX",
  "key19": "3LXBN6dPJhSn1kTbzaU9kWfzzM1Aoic7ttCM6bHhXRqmtzUubivMqEpGNNEUf5hSRXakg5g1V45MygYUeeswkJZj",
  "key20": "29stmviHwF7aBawip1Xoi23Y8AiKa1aPZEom3GBFd4kUmqGtZAYW1AQtuB7Vd3tYi4Bb4u4DYofbZWXCGb51ikJN",
  "key21": "HboDzKwDes47eXY6CPwb2BSM6tDm7bnQwCusUma8q7FbFs39rHM1j1f5WJwpeyctyEEFhkLzEjXpHHV1iQ66ApA",
  "key22": "GmpfyBXq3Nnd9J3ZbmMWCwBtHV4Fdiz2PJYTUnd45CxXt2ouieweGQUhZng9Psrm6kb7d3bJjTZneFRWvhTQ6X2",
  "key23": "tt6xHd9E4cBxN9L5Z77N7xKqrEmQ84eb4Gxyopr3Be1pLs4gEsRT9abe6VPknQkZyxy3NTpwFDmjWfH2x2wDcao",
  "key24": "vzDWMvajDfqpz7Y81bdqrcGotCYDp4caYzm3s9WkpcpMojS92MkzeB16yecnQnRrRbpB4VpCYHiukiJL58WCgrK",
  "key25": "644Fy24wEGyHfRVZeA4h9dUsBHK3EjfBA4Je4yJ1TxqkqKusmPysL1kv76sgwCAtBjVEaiL8y8ekbWRh4LufQ1ZQ",
  "key26": "5bfgU6txjtoq7WQynHVarCSVk12EHA6njqDRQvMC8B9yqo8hJLQSYA1RbPNUVKAFmW8AB6wEBa5Gn4bjxpuKkB1i",
  "key27": "UbQSnPJv1RJ4pPYsW7YKbrYeoy8MVDFZeJpYfP2VH1AKZVz9Sohnu4UZR2Y2PNPDccxbSMsGBgTBP7tGE8dq2Nz",
  "key28": "2LMcAnqcTkdvLf1QoThmz9Yag7oPE1uXSTp25PRrPY5DeWiKQYdjGRP3JKjfcCn87uueuK7s3u5srPYFiAQgySgA",
  "key29": "Fc1jXjUYoMPfr7tv5nDVwGw9n6Hr6zSUuY3RvKmSF3JLZmdRkunmnkHosPeRuAZUPu6NkL4YMZeCLpR6iciUu5u",
  "key30": "CFqkkm73CMmA27hNuncHJnmgeAUaQuTHkS2aCKuJF9es3s99UxmKqcyzrHRtd65TXWqVTMdMUQrujFoW4Sjkrd6",
  "key31": "3s718XbpLCwBsBFSxUG3d3XGsLbfQ6kTjFCgWmDSvWb14drCJaE7udJ1eUczxRmuhYRA2qUTeSNB1ZoS7x2NJAsG",
  "key32": "3QvAPTuxSMY73D32iFkpfRUW1LZXtK3XVyArg7srDGypzKRNV2j8um55g7bKxj8Q8Gy81Df72rWYQtzJSnJjuvYY",
  "key33": "2sP5d6mWq61tzbU3aheEZDwHfifqPAu25qAjEkRHfvoM9qCpe7BbcahvUKxg6kWKEzpRvEyHCeU8dRgxXtSoveBy",
  "key34": "5MDkVAyE4HLY6Pmam7AWZ874UUXuR6FboEA1ES5rQjaszA6EQ8cAyfaFqqexw6V8M8TqkbeFJhbHgWrKxB4cApBD",
  "key35": "3YP16gMutxQcV2D1EMJGf5NNSNNwTFGGsYsdTs9b1Ji59z3b4vLhdgAUuG3jpqB8GbBBMAwLneoEW1haigypaaRS",
  "key36": "5Q561aYu1cGUyuopJVQj6R1Nb1HEaQa3cdjdTFCsCnthqkbo8J6CsoEiofSkq3dtm7imuYwKr7jnQT7tCZJbfZTz",
  "key37": "4cUKQDsU5EK5tWdVUn1dg1xvHZ3niLMEVFHVTZ6WZHRdDsN7VszhRYifHEWwCRJcAYUyh5uTVTaSPBCgmLNA3op8",
  "key38": "3aM3hdrgMxyfPZDSiU4NTspL3prprmNRWJTNj5x6TBx5NxT263MVMjfugbHYgmCYpbBwJwMNWDUcwaMfyC165DVC",
  "key39": "5mYmRw4pZ9X3zdmKaa6qsvGwKVXVqdx4gwoNEAfm7fXavXJRs8QLCjHgwd1ujW4M5ACRcUokQVHV462jo1SYJp25",
  "key40": "3nCo85LrfX7pgrGWfUvAUQCDxgAfvTm9No14nT4a6LfRtEAnXz1bSANNDC7fEyy5TKKF9A2tZkrAPeHyq9gi89fd",
  "key41": "5C9WUbyUdiAY8Rr81xwqJUR7NkGLa5jsAQks8GMxrjfKNTs6UC25nTSsTZRHovPFnhEBN9amHDEWc3YZJmvQ3L7h",
  "key42": "5xF2qoqTNDPjAoBiNrwg2q1HvCDDxUzpzszcpWhYCdai67tqF7nxqERKe8sNkMfKXVDJZertJVRAeWgjyssPjAAX",
  "key43": "4YyyLyqwNgyJ74bMwkDepGbHnDdzKXbDHXooQ3tzq8sbdhzbMa2Twp5nanqn3G73VrD4h6d9iqpzkgx7cppgEfn4",
  "key44": "4Rb6ov18qdvePvyjcwRoAjmNL4XtvG8QybhopXzZZXEgeXUuJUrkjMo4oxHSwJXYgkCkbFEWE3EtaC2qN7eepNfR",
  "key45": "4QH4dnntYVtEmtZvvt64wrxe1Tb5KRNYZLtnQNsWc1ejLsQHB79Rag3HLmdSaB7YXtWLu8mxovxjCVaMXrqSqM2p"
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
