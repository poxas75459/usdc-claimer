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
    "3M1rzi8Cg71c8kNr63aCSk7GNmpQWCmxrJyCT97mRBWHyYrs5DxyAUV7kk52gSLUmJ3HnRpya1x61Fxgcz2yBazx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKNXEwKu5PpWw3jTUBHxmeqd3FdTT3d3GDiA3GV4LmpuXrtph2ssJ7iiu6qfsdJwLLgL91137M5DnLwUA8iR6pX",
  "key1": "5FBYKcZ1KeasphDvuKz5nfb9oGxp9ysUsgxasgSYhZtAUouish3pmN1xxZ3TDYbMM73qQaJwBZ7gukEF3ZDrhLTr",
  "key2": "3JNwYDkRjck5iJBrbVQWXcGnbB2fq6HXzqmXQkpXny5uRSK5pZHbejbphbmNvUG2Kkf8tdU3d5eY6pPZoBdkHRtc",
  "key3": "3TDgDGjagTT7r7ss8mUcSvPydtpnGJUJr2muNjKAjbCM63ZcWuXsxGsrfCvGNbRLiJhy9V8iMHDVNXpbqqJZExWE",
  "key4": "3jRuYkVzVt8KkFmGbneTdXX8223rjBm58m2oR2STfenusR9nmjrrRhUwAJWiUE9pQb7cBzeSa1JZeG8AvvyPnYsg",
  "key5": "2go1rt3X5cJNEgXYxv1tbrPEoFgG8doFsFYaVz3tAbw7Qa2EhDjaZs7TZ7TeahZAAZfQHi3CYvS7tGe4vhBpHnBX",
  "key6": "4JJJEHkNwPmnpNSxSCaEtHWT8ExVHqfU7QiAABtKQamq3vQVXVkSLDUcs2VG8y5rzMuWXdy1dyJTcZSNYs6JXvAz",
  "key7": "4TTL3x5BfFGgaojKouqdLuefiRtPuUtpiD591C6ribVZKg1WGbvvHwysE62oSaCVjF3RFUCsBBxqZUvhSueu4JfS",
  "key8": "5AJyBcc8cWkxeUphx4uSuYXJfA55cwUPYvCnkiZsvQdQdqSZnbzhdg9cqUGCWMvUWcNpreZq3vtAueG7PtNNNfde",
  "key9": "2kVQoCDkuyBAou4pU7pBvV2V12XB9Rq1usFhcAbtNqK2bVMch9UjPoJbciXpQugGzJtp77jnGFcEVrK7HTQamM14",
  "key10": "3nWCGXnCUpneZDFzTG7RRaUAPvxzLNrJVbgqamDHzWZDMK1vwTWAwjSw7vmxStR3WrMnLLmnzyqXJu1UGdu6PaBX",
  "key11": "66NwBJXNLSv53k55XnVqab3RwmkmTiYE1qQ68tX3XYRsPVMRBKsyqbdQn9qyet2G7LG8aZK834BNbnYvzAAUQhE9",
  "key12": "2CWbcAfXt5otrc6supw7QSnFNFG1xdHT16hNfgSJ8PVjL8b2n7x2KXuZoAFzc3CjffngHbMWkmosc8emvqz7yFZA",
  "key13": "zn7KEja2UrEmPVD5iSUzLwmZy1NQiWMNgFho48avVPkfkEcGLUHLq2RQAWoZo177h4NAmReBZkFrKPhSHyZL4mE",
  "key14": "4RUXcdBMqp1mQor9BPsLt6BPfvA9QCnrmCf5jDu9ipdZ1H1dBDCkEf8ZwAv54sv4avMAzLqXE25KW2oGEmY9KtHg",
  "key15": "2UCuvz5TZBg3bxGBDa4Do76CHSbtMkXFo9bdfeM4VWFcDNQRyZwGETa54849dBgTXHdDmyck5fcF1cTkaHwmnevK",
  "key16": "2g9s6Q24hVgTzDdamBgFB3dJ8m5tbYSyaoN2tiXeAZn4kyMTEDTJ93cD451wKecM2axxxEdULNakmTfCDpsm2ZwW",
  "key17": "4nvnTpQTxxMQ6yn6KW7wN3iYeu2rSP2vkAgo3LsjxsgceKZn623FWRVVwfkcBznDMUb1P58uaD3ozCfNw4xEai7",
  "key18": "4cPYwpEXz4hhb7rArYPexCwBaAuP8F5hr8oBm5fSTHywyfPmUBokjUPWrcqHmgV3GBJfFqcta97b88bmH1PZEvk",
  "key19": "3s3jjR3dK1Nk6Gy1qUY64UJXAiN4GJqp52Q1hjS5wFtw73p9YKTvS72ksZPF2tugafbdFKwaHXierxMzHwz7Bfjf",
  "key20": "fB2jkA1eGYvSrvYC75JpjbbnhK9WbxSXTAT2BYFA3octd6UYf14bfhsUCBHaQ5b4B3pZSLQNLBboaSLtVVHKjWy",
  "key21": "2nzTyvudBGp6EprRpJirvib8RbqcVrn3SgGL2veC5Hzpp69F5jV2iWURJjkjateTzJEEaBQesX4Pg68pdAhBL8gt",
  "key22": "4RZHe6gufwkBK4TqeaoscPizayWWDLRQUoMbAdE5kZcJHzJjGZMe2pZQXrknNjAZFfs3h2AbaxC7qjvos3bxTyCz",
  "key23": "2iRPKvnfPKhQj3GLrT6ofpNHMAJGHnsUEHkW6NYiSDvsouuD7dYi2ZXnzXWNrJ8XrEHvXvUCuh1Pq3AR7MbhRU2q",
  "key24": "5v6gd9ckdAXGcVTdVXetJ4wuZgcHuP7zRHTkX9dpbGM1Bq6ekaN7eX6qLoSUJ8odxyDpn4LQcAUKfhwNXgzoaDxU",
  "key25": "5irRdtdVxXs72h48JS5kDkrSB8K7DKSZxMp1ARMt3LoccyDtMSJw1y4PTwASAQaQVLwcwpc4wVHTPGjGjsp5oidh",
  "key26": "2Gn4Ye6g47ks5MQNn7qr1Wk7F4icpFuprA7X8cT4w99snFrwY8RM1MKTNDbh9YQHJYNf6dXkmWbrbfNTCGNkSzTJ",
  "key27": "4sbKgUPrp1QQffGfUpfGKQ98vHgLPPZyyv2nJyQMCWajU586chyNeG7oZZcGSis7VzfCzxwngNHweLLVqdgm4Dyq",
  "key28": "RCQ8GUyrXgmNQBnQdkF7BLXiTeTLQCunoryGcbxWcygKxe7bSkKuB6nmigBJZ3jdLzt9bVjug8WNXE6b4ne6FuJ",
  "key29": "22YH3bPyNxUnUB4N43ZJMcNCCDr8BoJJzqfDwFHAExwL62YBcJwCTJbEKmsPs2ySASrczK7zp647mj6qsvCo57Et",
  "key30": "4kRbnUhJ3pZwqfzsN1QtLtVyJP7f6jtcEjTeKUAd6yJ23N9GaySaQgL2DTowmrMW3LdhNwZDYzRPA9jAx8vRMy8s",
  "key31": "2xXxADjE97awPFHAg4B4ySjYiKuveuBSpNMNNhxLp3zFcYNC7oNUGi8bjpsY9mA3SyZZFNKgrwJgDSezcMoMjXdm",
  "key32": "5AKNguFX3H4zNLKfy4iCp8bbV5rscV77qV5VreLsu5LrMP8bXyiejhJ2vkBC1WfyKPXreronNJ6tYCpoNsJ7frB2",
  "key33": "4Ucc53QquTPU2Ktb8GNVQzY3q7UzY2jNev5e1D93vB5rctTmYhxWFLZkUiw5yNAQ3EA45Z1BVZmZwuR2XSGc27iK",
  "key34": "3ajdLcquqKCfKxgHq83yfPaLcH8pFBBCVzPwkxgiwizdWgj19z6TJxTW7bZcALEtwYheeT4T8LJ1GfGpzLNPYMgP",
  "key35": "1m8n5akEiQPPe9ehzV8KjiaFzZiiMqSYpmKJDkHyhxTW4YJHQy59vb4sQhCyuu24cxjTfPbX6b4waWzmRHcFrig",
  "key36": "2kcQnNt31So1ZAFxhuc7A167iP7u24PYpCWYXcKGqkwVcZ1gN5Ur4KMPtEHVZZbsa47XnrKfC4aHjj8StyXmrL2i",
  "key37": "51EKamgSjpqqJ24CNLiRS63vuFzMchRsZasHU356iERFsGffmViBCuYXqH5n2MDamD7eCRnVGYs7sFsvXz3p4WRP",
  "key38": "TYoaHKKMDeUKimZzg5LHvMEbiWzFp3UjpkjSJwfC3QDm2WUUn9SFpyAoZiCSEuuCUHeDrQ3XssWbyL1uruT93Li",
  "key39": "5N7zEcrTC1bUMQdD7ys3A3YNjWV9a9UWWMPCUsNqr5PpsXqvQVHvLcvG1sQ5nKL7VVTJfmznw1NN9TJ8dvd2R8yf",
  "key40": "3cEhcBNQ9oQaKgAmxq8RLJMQkJDttC38Kw7f2N5wT8paRPDyRRXnXKNptSCSys72CoRhRtKvcDhmn8u4J1MzuEva",
  "key41": "szUkefJyR7zjWMpuXqng6JmKDJwzKVXZY2gqPgPYQcKFW1CYodqin62RLy3VjRbN7s7PpEUq83i9j7hN8xL9bA6",
  "key42": "2BiZBgRWTj6QToWN4r4dtF1xo9PWfhHMsDFSbCX6RDwzoWdgXH7o4o2oDLVtN2YyJ1hWfwdiNDk4KvEZ1zsTC3Zv",
  "key43": "BeFffEaEBNy3qCfCQQMksPai7BcDKyU3DFhoCepepMkZqAsfT2pppZ7YL7q89WsX3pqjSK28PpUG9LwJC55GBD3",
  "key44": "PTVftT8xEZCSRfiS44484iZqnDRxzkd3tytSa9kGquemF647DMaphNqBZ9j4G7Zvp8HLiDM2aqy3qQEg8eWvbKB"
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
