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
    "2fFSg5VLGN9yZkWU5D1u7RV2wSN7qK5YXBWdyQapat9jDVev5E9JK1cmWVQgZzA9YNW3sMExLDBEeGCRdDmHF5ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrwGJ5nyeZrf4J1RMdDkJ9UKkbEUG1nC6bnr4ZRw4WauUrJuaEqNzVNTJbkbDWx7f1sb5psgRfjTys2u3fSokmN",
  "key1": "suzXaNr3mByEQmcnGenJZNztZG9zsC1UmQ14wFKfezB1UJJum86fF1bfdGvri7WbF1nioLYtasmmk6FJcuR8APS",
  "key2": "3Xj6f9ynjuzzQdBnXcsNFWyBK6dxBD5kzp7xCMe8FQxfZcTCo7MRvycqky2omBwdauPRwMUa3UBd3WaiFKG94v43",
  "key3": "4aQ5q9nZhS3kwF1VPjJXF4C2AYVk7bHKzRPFhjM6dByeSRjt4MqCZ2VUF2T3KztgUkRkMKVgthxWEf1fKAKVzuGf",
  "key4": "2D1X3m4EfrnYcfcTLoQsNfooYz2egVfkJjPWR5fkoxgoHervVxsrgyEqZ2dVssn965fvFLG4FTxhF2o1wdt796sJ",
  "key5": "4onLiPpPPyh9S238z3M1JiudeHGFY1r5eA14ofAan6b4ekjgCEviaFLXjZWszr3EnSpFh26DzQN9aCupEffFUhGC",
  "key6": "5Fq52t9YUTvTs4XHFFEhqFG2E2XntkPL7nPN1oHrsqfx2SHeQ8QGP2X9yjp8o61eWt7367wvi8apFdVYTDNvvDX6",
  "key7": "3oDhh6eo4fjwLeuVzNiWwEBKxY8A6wBZCp12rQ25X7ENuYGmCz8EvzdUZ2BfuB66kf727qjw6zsNMAX9JKDCW4yF",
  "key8": "3SgMe5j6CQM1yit6Yt6hJyr6t2VEL43VDHeRErnS6PTmFNVtsN9xpnJHiy4VmBhxUduE5BbcU6ztCmyKCiHJSFKq",
  "key9": "4E81i7bJYmQsVdbWM8sEZohGny7teoyaUcMDe5p1WMf99bFGro71HnHAFLoPDR258aGYG319sZTrt4jVDZWWKAde",
  "key10": "45RDBoehxTdNvEFP8EXTy5dsggpM34iwqTZrdaC1kzsGAcaC1uAD4qvV7mVdrKCC29uXfv5QaDn75BfUqccpEeYW",
  "key11": "3mR58AtBKCz1JJik75Z75JuovGopTXuJfEB1AZXQAuoE4uULdrcDv7zpS9yAfGonpA6DUr995PrgHy65ffrLvGUa",
  "key12": "5zfZ2Toq5ByZHv87atrxRHThJCRAevB3m9fHNPYf5LE5p4Teu585ADYbkyLr3bxFJdBGUznNSfV2HDUpsUVLUoE4",
  "key13": "4qyf9NtxrgTKyYUphk3SVXqSxH3DibJr8UV988B2d4fotwSFRhFAgKnzMDYSvq1hssFeVfV693BUwXBDDxPAyH8o",
  "key14": "o8TDzkbYPC3kWNGaAQihaummNAJXRPUuRceQQaejCCiSPE5uWfcvLfA8DLsT1x2ipLgAg9d4n1Dnt4PhMp8Vbkk",
  "key15": "32bjfRzEnjjbHDndkNTWSLEW8y6Dq7uai3cYfLDiCZNMQNoww8j9JdBKqhn2x4QrDMJC9LQvdYhUHGRARWHsViTR",
  "key16": "2EJrt15TjEadLTu7F5w1hVZzv9naLAspQGcoep9LUNmgQLPwh9DDzT8oxjYBHdJgwAKjmGtsNoiK4wGRwb6j1uag",
  "key17": "5jYZgxo7ihLMCpBspSxbpwuwoc6ycaH9vVH3e7kiUn1e8aJPpDx4KiEuAA4jr2EdTB6HcGtU3yaGTWr9WH4cEVn7",
  "key18": "9ifxjeKn16DQmqxJcRjoTGkvJM6FagQrVJhaUJphsRNkMUYBPw6qLZBv9uXWk3yKw6d4bQAtwaaP34qvuQGyYZJ",
  "key19": "2MQD5i1x4yzBEGUv1WCLoCGv5VQubnZQ9PbFEhAx18iUQ6oUVJVWaEYRU6QjB3YEiu8P4t5bM5syQDh54VPYSfoN",
  "key20": "3iASucBwQ72b6XTRyaT8kvhmjWNgZ5kEEojCF3evjvwewagPABBo1isyJpo22CAYiLdZLXQ1v6x4UB34pWa4qnoY",
  "key21": "4h6xEb6C2m8HGk3vaLNntrMfDKTPrbT2boqfNQ5ZhDKDhArKdLBs3qyijjpxtBhV57LsVY5TVoZqsof5MiowqKtq",
  "key22": "2b7tUBEtzNohFmPoLgcxUUJi9qrVCNfbioRqRLz5rJMmEHCx17XgsbtcLVG6Prc5GSn1tCLBSSjCjeYoPVi5kwAY",
  "key23": "4SpexAk2zDTKU17y9SCcjqAiqpuzoWaDbLp9Btbfnij39eAU6abh4n36gLL81QgstYVDbqt46XKE1rK8Ccj8Rey",
  "key24": "2wjx8fMbUuDXnR5VBEivGP514uuBC3CE7K9TuXDNq3iWJBx4kr92Fi2au8R63HGNVkw9ztyzgCbJYWEDsTdanqjQ",
  "key25": "5LkCTw37S7x8ogDJuHq7tvGxys6mmZPYf5xjHzNMQDFU1jf9As2uGH8TfNqo71quXViSbGLxuff3Sbc4YDYP9uaH",
  "key26": "q1hTyt7TQ5Hgjyi61UQnZR4fFLWH5k2VLAdVUiABk9qPpDSX6YX3miSNgDNeSJCJnfAeBFCTxMyRDWn3koQVtpy",
  "key27": "3yQiiQymjDupkWormeVuHTAYCcT4AUEyT7fFBjRE4GDMrfrXgxUkn4sWT7GJJdWiY54xczJwSZPwmGeKYzekmTzq",
  "key28": "42wjPeb3AApGTPczYZdUcrAVRzhqBbxssiJxQrPh3eNgL5HWhGLrE4ZA2GiWHaBeHUw1v3UFQgSKZvz8DEuXJHcR",
  "key29": "4YfrEugPKoNmhLZXjy8BGf2APXdhFVzBtcgyhDBUdXTkUN9L8tMQtssqTWbwjiXHgZfmC7Ck7FxrqNBoAWVvao4W",
  "key30": "4oaGWTicPcwdMWcGgtph54fwMzpDU5wABYHVqKhft2KhCKApAxBufLgP58gCCiJWdJuBsn4Wniwe5BCGwbbzthe5",
  "key31": "9rPr8agRZdeXstypAecPuAKPzSL5gPERS8RFMoMFJHiRW727H4p4U1XpFctqoCYaFn6kjZMHgdDmCVeRkNDUdXG"
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
