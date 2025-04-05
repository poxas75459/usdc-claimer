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
    "21k79hNgyLpf1AmvwyvFcjto7a17wzh8hVpQAjsbykCHfNMyAN2C6zCAJ75FF8SdqomQXpVadH7dHeEynSiUWAhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJtm64fgQA7YTePFLUyUNkZCB5aBHzXNtjTpnUNCgwYsrXqCXthNDYyTceitkBuQiE3rvwmLGu3sCcEsk6TgGd6",
  "key1": "4bALc6Cc8vNUJcnxrysE5ZxDzyPUX8E1MGfUZ4EyqcgTcDRUcctC3FKieRUbzx8fgakF1JyjFR84VKyGj1khEYe8",
  "key2": "hMgd1zZcAY6mJGCvQFF3YjFW8bUymzEwhEJieQjT2psF7ot5Q3xfMF8YS4RUPgis2uNwYW55fwssq9ddQjpff1K",
  "key3": "3jRmGLH5fufJbyCcLvXsz4fPzq3ppgZ3Z8HvVg2oJh9PBXmMwsLP8htkeMYMH2vyfr27TbNFgRVnz3RQJJGzUwgL",
  "key4": "iWAhg9gSWsavmfphaA5GN8Jns67ZpNpPrhVpB9SN7dxX61rYpjpwq5QHmRy2LHjaBF7xnhGz5tfY4Nxs5MVNFTj",
  "key5": "5GAPq4KQ2dJ4Liae4fbnjdXfs9YEcv2uvdF2BGrkiaevQK11XaEpq2kLQaK7VBRaXqBSft8hNM3szMoH5ookeXDb",
  "key6": "QmafCHu3poQW6PGBoT5xiaM8Ptkq8Uko7JZ8uuWyiB7gayuUb8HX6P9Af26KAMHQH4ghboWS96WZVGkZ12WGsMe",
  "key7": "56JAjLuAGR2fcpvA8ErJigCjvM9kuqX8Qya11rJWh9B29yNyJ4GqJYUzPtU9usXu2CkLjcf6oPNnx3cGkrGCDGgb",
  "key8": "62e1F8DRiELJ5YDTPMPjRQt5mrv6pM2S3HSKcpz1vMhgWCd6M2YbHyC9fEJj2gbJpX2FLZBuUtjJoUzgHGNKv7q5",
  "key9": "61acMvsjTi12ZxCbUDbTSBGAzZvDqCY1L2bRWh2DnYPmqoGzv6UrcpxWmKX1jXZZafFd1ZbJiphXU26tt1ysVWGS",
  "key10": "2DHXXwVur3YodknLmySa6jbmMZcgB3GSKXzBgbVfUZEx282ZuZHhFpzZQ6ECMcjQg3wZcqZ7GkuMxwFgUvrpnw22",
  "key11": "65Q1aoprMqqYXkBaHMtJqccHPZ5TjZP2ea1CCSG5gzEfCn9Tjpa1h9MjpNwveDTDkBmMc1ze42EcTRWD7w27GEFA",
  "key12": "2QawrpdzG8pkd1tKYLsnW5xU6piLkK9kcvgmZVf81u7yeh42g7S8WvbxMriJ2oxUUgiQfXB7fYZ2eaxNX1Xa5sn9",
  "key13": "5EnLvQ7Adw1ZYj4kjjibd4J81ueHrpsGKBfmQAS2sSsst4XXQCAmoCyDVk5GeCAMP1c7uxAr2c8CxiHHAkuf8y9x",
  "key14": "2xAmeE1PnR1uyrk4kvKi4RHsHq4u8aYPZuz5YY9ddZgcwwMUavWxkP17dovP54uUZgapabavhoft1yacqv1ueGwL",
  "key15": "3wcQ9VsVN2egbTMZjqUMpnDzVp23QhWrcB9Q7sNQRRTEQpaSXvNQXcSkzfMBj8wqt71goURQfrsw73Dfe2SiFzzj",
  "key16": "2ek4aTLFcvH3mYsZNBydR1R46hnvTNM2swvrrJoryvK7rN9fnRzre6mbJxEFHJNFHeAczSiy7x8vCFTmZjRt2pxD",
  "key17": "4W6pHo3NF65LVRmQySHnrrV7XuZCTox2wfzVE63eBBN9MCqDq7GhHVD5jWYzpCBaYgSMudQQsEFEcd14hEuQhLwW",
  "key18": "47ahwU5YWruTD7x8k1U9gkBi4NTV4qEjKwzN827igqd9BzW7jET2CVmHfRuUSNYd31EMmSN6F87sg1ShrEY2j5W3",
  "key19": "32fzd1fXi58KcJkiw4wGR2ZNxUpN2DFxhubnF9Er7XEVoRvf4WQgpkbTpiZsTVgGx9G8KcRAAxos24CV8AyXvDRN",
  "key20": "tef9NqtcLtDBUx1ED2T8QmtBjm6825ooqDGAs3eREUAvJk7seUrBjsRK7AP3fyHECB8VFUufFpJh7LgFaAbpH69",
  "key21": "iBEzJWGdkPuezndWvpjt7jDGQw5adYp1Dekhwci8Nt3A6gqc7tma15upeAAWEsTfSKion8uLcfyaFqGryKB3zj6",
  "key22": "zE5Xo577SE2AyFGGYLwKrJhojF3JdHab2aeJpUswZnAyr1tNEB5gJDzxKscATxaDVVdpd2jFdQEzq4uEaiQH5qB",
  "key23": "Fhze9ZyoWQzxgBAhzYhvi8rsL8715PmKyMQa8tbEJsQAN1LJjEUBsRQChvHzE3C6jY7fp2rPKcuR3niKB9rBd52",
  "key24": "5ow7eXkANzkzdL22hZ3ipSk4VCJ6un1jxFCQMZ4HVXtv8T3C4uvyUZMwsySQbVEv7nh1mtYUG52JU8hTnDTGfnhq",
  "key25": "uejaTqEaLRDyzY2mz6bd3T8WFysaNCup69sy9W7ghwQznSTS3huDYKhEDSJq6WP3HTDhhoYxpAQLXucwuhkDZev",
  "key26": "5TAAf9kaVnqSvtyADGyDTTXGro3xyH9Tr2UREgb6e7t66d6exJ7XLXTvPLyNwUrmMQX9JWT328ZvckHCj7RLnPWn"
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
