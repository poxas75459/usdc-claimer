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
    "3N2noBgarVu1yB961pePkSNHXyYiyfX7S8keybLxYEfYxC5oNWhPjKa8yCw4oEHmxif6XtFt3ZhsZse5nGYXNvRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GaETjut34m9a9u1acSNyXimTQw6P7TCb29C4kzsMfEzs7do7og9iKM7CK1C8wTE5w5zprPhgojikVLtnQ5Wne11",
  "key1": "5U5LZj7BVufwU5bufvnucyimYCaJymwaua3dB1ev9PQz7qUBrBubPu5TWmFp2WdKunShZKtVv2QzXr2knRLunLiu",
  "key2": "5qzeJqHKXD1dewc7X64aVfpyJJccPYdw4hDQ5fNjiMcXZHXATvZVXjmqxi8RW4wmmxci1yvQGaxuCWLfVmWg97ie",
  "key3": "4mvmzvRQ1q3QFnnfsYGHRohhq7bLg8fZqxVfeD2bXwSJ8714vuRNsAsJWW9Z5KbZ262ThWEG2bruUPv7qe2nLycQ",
  "key4": "5CveJzN91wqrMWdnaxC4nH9WZzKM2wzujghCP8gFZ5kSaj9GSgKd1U2JsoCHLYe8e11fQRT3hBbu2fjtsMawgzrk",
  "key5": "4MrByrWGBkmpkMuB5cFUNnT7UQsxSuTNtFpSgzLANTeKNZ4X3U6w7B6oLaRKJsJLn5Psps2ezcSHn1569cwvZHjD",
  "key6": "4KD4HHiE15iK9T6EJ86wJ7XSUT8vdnGbsEXoB2KVvWMMJwJZHHRha9VtHVt2dpVDPym9W7JrAMHii5YB2uqrtit8",
  "key7": "5vwyvEhjHrpzeMoPZCF4kWgx4bQ4c4Ek79zPp3wWBLAqyUSF4W9oJCXvj8Kjhp8w8yB5PBeptSVuqqpbKEPXpZNp",
  "key8": "4kRGFZdyy5iJfT3H1G3e3nNfw6mgbFzdAwN2VnKwNHSfsVKAuGDJeNVCJNCPBiF7yMb9rvx9TTahezrMmMqG3H6p",
  "key9": "3FYY32vTjC1hJjiw5L88ojr5v8oq6a831fkRFGa8p4p85G5bPCY6qViESqQcKa1baHq3ygRC5LdhSWn4ECuKgK5a",
  "key10": "23NUWHyASKtBzAksKkSsrAqSGCqSfPPfb2nqdAaMpRAw1u5RYWAyHmdwWWBW8RkxBvKFcN9YErb3vYXDpFZ6LhzJ",
  "key11": "3xqmVCBSrJPfUUwbdrXAgc1Z2wCLbRsVKXhwJUahG6UAvRMjYwmz6QJUL5MviYaaijsLusG9jNYrK6dYJWyiEU7a",
  "key12": "4brUA6WP9U1rJFktX15jLt59FoHpQxsGpUTMCfbt4f93smXv9UxHVCtMXeKQeDKsVt9K9prRdarMXvBbsJERoD4Q",
  "key13": "64sfoukThL1cRAn2SNzpFtx9kym1QYtihGhMrSbUiBc2PRykVaghFU8n1k8ugPfaF8gc6TX6t8tYNWtxwAmPACyq",
  "key14": "2wikdE9gy2Qmh3AA18HQyzaKzjj6JLsvBbMZeS5fW3vtkCcqcXsAAkMiHkhXBpRqiZMtqAMcuhtSV7BosJLc2F7i",
  "key15": "2vavKfVcTJ9tccoL7H9g5y61n2nRep4uoTYY7QRgybyCrRNZZE56qTkwBUbgQiTyF5e1S92GHWL1abwqZ5HdwanX",
  "key16": "3FVrT3Hsjh3BbBTX8yhxQn4rUTcMMXoKiNc162oFXXufixGtYydD892FbUXhenPyoRFU772r9Rr7UQAidgKsU7nQ",
  "key17": "46wb7sYfKNqAPhAwwSn2inurJ7MgeYi2GQKXKBk5KMWUYAS8NbxZUYdJC3waB5fojjQbZtUmrnwuZF1fLo6SwV7S",
  "key18": "2BwZaoNtT2ketUuMQC26HPxtoPJ8TRs7brZzSzHgVCFs55krBpFncwwwk2DarWWp1X76Ync6pu26A5AwDYbkBAz6",
  "key19": "5KH1EQrVxStnq62VPj7EpdYwhxJuBMQ85RMCkfzprYRXC6GFNQ4kX8vRiVD1TB7FbGhwTLtxHQqRcEgytArVxppH",
  "key20": "4PBRJ4UPnaKCdF3JVNN1yU9fDWKuaPwKuDjX8fqvUsAUegmdbEDmMniCQgRk1YasRc92PrPgJaKBigA1ifmVfyyB",
  "key21": "22Dt15U98aUrKZhopFtfxHH81ZHweYmWra9QiwKxcijWTwssgM3LeeJJjN2z8rpNMXXHpyF38eNuvX6D7J1ndaHi",
  "key22": "3Lz8tmNXCjyyeXEDtEwWxuDGLmsCAFWFmaxMayrP8BLqNjb9yGmYi3D5QLPKwBvP3YMfemWXQtPdBVxKreJTmJfx",
  "key23": "5x3v2m2KBhoReEfrDBcqrNTxf5hYbiUH6dHJrzE7CY3215U4kFyJZbvGT79iLahrkb1hVvYrSxWGqnhjBYgTMv4b",
  "key24": "5iCWeYJBzDGT1nBkjDZE6Ab3MXFPiy7tSYLBogsD6TB7Zb2GHLCvaazQp3UcMVnzvo4WUEZXgidVNHgguoVjB4da",
  "key25": "2kqDqWvjs6bB8dps2KhRrxYBgch5xngNzG5Km6uJjjbXzmirfeyiEYQr3couY93ZeaiFonFo1G8HyFEtkT8HWEhK",
  "key26": "u45AumEbxPaowGffue7gGkJXtTY6M4d5woBSWPCgRatgp6a2b52gu5GqiE28er33BkgjHqF1dpHnED7jKAF6kjm",
  "key27": "3JMbpkyJBwnvdSdxMFDDPgefnKVuwebocf5J4XRM573npHuPYKMZTWEq21LJwh8kVQdxXsbuoVuhyoQqxqUhJLLP",
  "key28": "4Mx5CyhS82hxUXgBpZnBLrBje389iUH3jQfdeUVBc73cPjYJpT1SEAjJriUq776PH9jSQxp4LhcHp3oeexB73HJH",
  "key29": "62rvNP51cVnJhAnpseTGcKzXMiDeKVHK4RRFyHa7DTz22dDYiQyXAmqm5JQTosGtXEF3aEaXBAPdoo97DLLRfLLk",
  "key30": "2ra2WsuP591RBwBc8R3z1NLkSjRgXzvBgCHD1b2rjPkwB9X4rEpxngmT2rovxvR36YzBBAEwU292WgMAyqABp9yG",
  "key31": "5S4yYDbphH8wL6isBC8692CHdAfh6xh9iRvRfXn6tu4WT6tNPqJoyD6QNjCdtmrp9uh2g8WUQiyqRfnj7ianG8n7",
  "key32": "5oKmxvhQMDHU95fPvCuGKzXpxVbPCKUMM6B3xMS2pciZQHRCvmSDUFDV9dz2DSf15w1341gMPamN9UYFhAaDktay",
  "key33": "4L7gDemyEy1zPKdim8t1FvAMsZLwgJbBHBbtFGS34dCJP8VRksDYnmB5noVvxT9CQ4JGctBgMPgLf83ZVJEGMbJB"
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
