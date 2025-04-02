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
    "41U9WMS6i9YApGM9ZvRAaSAgXhMgedq3tLa4BmTU6RLjMJhJStbVaWdxd5RYeaG1Hc1UUqQZsEymdHa1oZofpT82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njndh56JyewHfV6QQwMTXAQm3o7qSghZVxRejXFcwnaeDTDN5E8P8hKYDb3dTknqFEK1igV5aRPMzHAmh8xgyT5",
  "key1": "5VLMnYGozmFdTnMPCsVSKgzzZLF9hpZcQfuVwidaXtLUq8cMSjrxmJWMZ6Ae78xeMyonMjQkwgPqgvmN5LkPgBFp",
  "key2": "5WkUUz7GMLo19m1GmjzoQzyKsjthQXa2kLynjHoH4jDM98wft9CjJULGPubTNrtUjf9NNLCJfbtEc91NhQnXVkeb",
  "key3": "3wb923iY7XdubDR6xFgVYcaStezbApLSLVuPjE2uzMR3h3BjzeFr3a19bGFS47wR83FHRJbzckJevMRKeFXfGgZE",
  "key4": "ZmmBRcDKETtgombE1JLdhzxnrhH7NjCHzR95AK88w1LvxgmWeMss8vRdQLmhFgsxRGFvWnWPVRpXCbu6yZXAZPH",
  "key5": "3XJtg1bmbSrJgiVSbui5F8yZKpXvivD4AyeFtHdwvhRCM1pSAhjz7J1A5a89pkLuajzcT9PxktCTyQWCc2oXjUwy",
  "key6": "3xuZS8wVGMzFnBcZB5QPvCPfgcMDPKmx3d73XE76addMshGQLt9fc9z7NxBG3fd8fBTYqtWUTfS284o6JopXtfr4",
  "key7": "2bWaj684JmBrGJbtFyyXA98sQMjR6fyP1y895okG1yrEiMRPq7gBxrhxKX18jpEffF5cLy5fiBFgLFC61MUotwN7",
  "key8": "38jLWVAynjBJxs2JpENy54Lntwq2RmiyrsidudU2vvSgdWpVi2Bk3GAsqjru2SnMw4QzxKDgztXfFCJxGmj1gBzB",
  "key9": "2atkCaiGYotRxSTrKwuYphCjetZcC1wrFJw6rSDGvjQpnndHaLrgUJi9MPqxVDs4x2qEfXZkYABTijUthXWp8c5n",
  "key10": "4WUvW8yRgg7wgzf7nWFBv724PZKVTqFB2DZJBYgYpkZ2XMsUzFp5LvfbC25GRumLDDmRkg6L6ZiVbxRJmKDz5oMN",
  "key11": "5yekZa6ztLLCfKHTXrNGLUpN8mn9RFGZbMFxMcjZamyCKnc76Ycr2FhPgCigC6WoMUTTdk18hSokEQ2DkAV2dRDV",
  "key12": "2tJmSwgYYfvL5tStCcixs3SwQifJpcGrZdQ7TN852rjLQswikvrYA8LifdU2zxHPGkfUNS3WzuxJivNNo7DTvkyn",
  "key13": "4k4bEKKDPYsVuqRrKaX1wgKTQKZwyp8KENwUGpzzKjbRsh9dfHBTCX1yVfz4hTgQsLGfSkZjNXBkhpjhcMRnzUx7",
  "key14": "39BdxH6Tw6HAndiVzEMQJrzLQVyjbbkmJPJdW5cXrakJDWk9z7U1UwYXabgbXHmyYCFThz656eh7dG7ipLmtd3oK",
  "key15": "3zxsYs8aXtrUJy2GVUoU32FVSpaSDrhyhUZdHL7t2LqyyJuXgDDrEtrJKo5R9epZUhnjiuxNb3N2LKRCLZPw5WcH",
  "key16": "4HEqi29CdbBiNwtQ3yEk3itvVEPp1956UFfbL9gF2DDSaa1nZkUaH8JZMWjDEm4tEnaGCX8strEp364r4SvEc2iF",
  "key17": "21pviKbfNoBQ6TTkmPzBLxZiZE8XwwdWPEWqXzdqANhZ1qibSsEZYLauPcwrMQyrz15wasCeVa4qnyU9Zbv6NFwZ",
  "key18": "632QX6Eh2ZxPAHNB32JShYRoKAAPfbcuVGnzmxsc8mDvoJyTUfX5LGy2pyckc9kLfQwWfpMLTajfXyrxUyuBTXBg",
  "key19": "5C1cFuWaEJcRy2iqozCdJUbi6nVV9nLFLfbybkqhezkraBR8m11TAfvnmjfe9LgjQokcq8DPpKj6e8y4uRdV7xpz",
  "key20": "gotDDS1Cx4pcKKa9N3ojWsAfwVUUkx5vFQBXtfBa3LY5B7GKzR9k47yW8SCw3V1v2hJoKfGcehtwzmo5cgy5sWz",
  "key21": "3Ld454jXdQFVQQYAG7qLqkWfH4vHzr7KDmJ61m97JCeje5tZ5VCshW9PP6kd4ckDNHN6StEdUWuRmv8Bt5vdQmzB",
  "key22": "Dw3euQ5Vt1W8MGnnvWFXnm4LByZctGoNnRP4AKrZuzXivxSV2TGkYiBKYGExq7tiMgvbL8jfrqXQDnaUnfbaWAZ",
  "key23": "22gc3ZH6Qjfacr8T8aQXCCPt3yC65U5Vdhwdwt1atGZyFcT5jYtZRkfv4uXPH9XUpUy5PBgxF8XEBouTberDEwRU",
  "key24": "4VnZSKdURyTePNSHqGLxKmANi72orLYYwY4eHRz4fiWWzUY2M71VShxau6mpywRMG1u7asE4BGxFeD5t8GCN18Rw",
  "key25": "2MTyDinjJHQrsEqkWutm5cRGF6sPrQ5P75muCx89SimeCE9vLkaEtws4vuezpePTgSTCPwmFHdNg9Y3rpV6ZVqUd",
  "key26": "5NNf1mXg5suTZ45NEjFG4tYfqZBnRm82VEyR7g9RPW5sewP5hfstkPzqmbjH9WgF6jPe3MCN1he6MXutZqMEA1iD",
  "key27": "5y8evFTwknzjF9NRqGBzBSWdmv52g4bQReyzEQEnYENG3DBXZQ2jkJR2z6zfUZDx2Yy7HN7kWjYrqUSCbnT3rgnA",
  "key28": "351CefVC5qCUFxwdUpmCXHtWSVG1cFTrbnkeLBLurYxZgWACVvrczS1KEfTJjGgQ3UY1gyx2gRvuStYP1CXXf6oP",
  "key29": "JnsrzQZDsQRZkqAZ1CStTimKEjQnkLb6CKb3Lk9ViNzf7tpShB8XGKwwE9dRYLCouH2LCSe3hWZttiLxGJZFX7S",
  "key30": "58A7And3nDdPEBz3sCXWzFrkwYGUmXL5X6EtYCgUSPYxx3b1xVkDME9dXTmLniPwdss52JdYU5rAwSjQBq2qxEPT",
  "key31": "4PSFwTfJXewHFgx3gi8ERB7Wm3L2JPNyV9KAwEQ4gBsqidvKV47Ve3jfrucYdb1KE9nxsmJ5GDpQtnXtEbTXqVD2",
  "key32": "2cvWRYsfd3RDD7gJ1aP6dY56TtyWWdUe47pjFdGLvcghXzQKtsAp2NDF5mjt2vtr4Bmt69eyrVsTJ3GxCsimKvco",
  "key33": "4v3QgTHVj1hpEa858U4g4EEvEwkjuAChPJ4vFwSp9xwKwBvafHfAvSW4GDCyQD1gdjaaZsb9HaVXyM6XrYXTkoVC",
  "key34": "3V4UQtahFjHH3D5RMzNeTv1cb7SrXVAiXr5MTG1fUd3KiNioqAdzypmZP3B59jAgvcEynNKtWpJo3Wv38kP7ou3G",
  "key35": "3hAmJjCgR5jpJEhac28gfMrSpXLeYbiTEsXFZrv8HrUHKCdsvhLuHWoPQP33qby9yK2KLQgcpJqRrbymk1Y8SRjV",
  "key36": "5N8XZuwDy4siUvkNopHApH1L1nciUE39rm5165QUPQaqzveoZmAL3xfQzf8S7JgCdBF4ihzTVmeeSQoLzkozXe1E"
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
