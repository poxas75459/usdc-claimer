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
    "h5W7S5jH6EjBv3iw6tPaQn6DVUFXBbmVWQezoUFnvnzypNrHNhAAEMMKA6uZwpMysgFJTxcY1ndFpztQTvYu5YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkxPtN3fg8TLMsgABaYMoSx6tvdGcLEht7cK7EGZWytqVgFAH9ZeXnRSoxzXHXtxJveEEFxVEhkTwPNQfGvpmhV",
  "key1": "EmE9LgN6BpxxMjvnRSKEDqupQazoEMJCmTx1Wum7BppkTfoPpL4AgPTDvtpnD8fH5MF3DDzHPrs82tcJwkFQBBD",
  "key2": "2xkrPFercgV6i2yN14Dxactpf87a9dmA3g9G6D9V8S2Z2d7vDNaA2RYAhGFFmwLaUBNVtRj8Bq8YAiFFNQYheJP9",
  "key3": "3Uhp2UvZCoyiuQxq24t4yNh6XmsZf3PsMMC84ybDsj2dWaa8yMMQD5EL75QAsYWTDqfvajZpSoiunzdCHb9geXhz",
  "key4": "5tawEeGwYDWAVvC9zwYUzu8AxqXvpyYXGTUZxDF45brAS1hYY25aWxGtF81FUK9HPxTHhms7LNuo7d43N3HGKWwi",
  "key5": "56uccx1q2DegpVcK8XNasCoqVt7HUdj6sTKfPK98eq97dGz3m8XR9rxrCW4ALuc3ewu1u5GWH39WuLpR8UkT2vD2",
  "key6": "4rDW5mzwBK1yyA8D6nRZdnUKeomNBX5N8MWyc9yTjnahBb9oEyhjsvLJVQqZgCLY79uwTL3pcTYh1AXV1yaSDCAL",
  "key7": "v2dVjVNi6qXoY4L24cfQQEbCwkEC2SssvozDu8vgsEwQuFfVRGcUXx8pMhkmFNHizCLR9dEQ6pu3Hju7q6sgYzC",
  "key8": "2rkAevVMKPRa4D9ZTkqZHWgLuHQzfEisKpy8MX47odWZrp2EvQsZ2J4c7Tg7NWt4UK2XjFm6pabG3tjdfL6DmV8z",
  "key9": "2Rs5BX51ZBPxmotjpj5th89GmavcPxE43GeMHgCFRoWy1XNyKXj1S8zVVCk9GTvCqXb3ET25rSKGtE89FjTQuzmx",
  "key10": "3iX6nDZrfsiXckiw1MxFuhyaGsTVm3YNUSkPVmBcEtbYNFEyTWMCgazZ8YfYYy6CWo7176Pnu4tD7wbTCFNjhUy2",
  "key11": "4WS7AU84YVm4iX8xf2e8bZyqQFhCRLAirqM7Kc9MCKsWxMyqbgSWVSdH1kJYv4uFfnsKisaXL9eNv1qorwebXbBh",
  "key12": "3z4s3iL7QutzyNvnTH9t3up1UY8ng5ba9UikKBoQSMJDUpEThuD29fwqLCzgjPw5Q1ActXijF2xD7R3SKV2EgJe4",
  "key13": "JZe9Q1HsKSKU6wysbXNdpFCxCtWQ4XfiTZCb9odMdZ4GE6nm3fm4ESvMGVWWrEoFtvrNUEo14HRE3C55HntvKPZ",
  "key14": "2cFRLVAFrJmGqGHCoC53J8ehUKUPrqvCdRZW2fniKUbqoiTeLwNwwkVTwquWKwezqj5txsTELPmetLFtMLu5vceM",
  "key15": "2aTbUM7QCoDe5JGmYe4Exjf6eKtHNPM1dQGNvpSV5u6cHHyGpCTrj5pXzNXDLUBzWvnwN1biZirpEmW5EXeYD8w4",
  "key16": "3k9Gkin65EdJoykw3ieXi5HCoWPZ3dEsNp9yMSh5bMWtRvKjntwdKXEebQvKDMwAP2osMUtHYeZJ97vcW62ymCUs",
  "key17": "5dV5sy8q3MFj7bGjQZoCqKCaQWWcxgbYpXBk1Ef453rW49maGjugH1FhPjtzCZ7iJJGrdCtfMTXgn7w6giKToWU2",
  "key18": "3nErbEuaHFeYGy1NaeLyj4Ni5JaLatxx2ayF8xGC45GETLQa7PkwHhzKGzwka2C4YvqQfEMYmnnq6N7SJ5xBPL3t",
  "key19": "3VwQmxGMti2ioVmUkzv5rmwQrWs5JEwipBo5h1JcPj163vSAa3mdozaTdQh6mVC87cLNCz48WxHmB6BwXsZfv1ix",
  "key20": "2i55MQBgG8GFHnfz5uh3fAUsYG1bsWqaRdd1jiwrLKtqsCJxhsxcQm6f8xuhmeFoTBU3dUCfKG3BBNgEtZds7TLR",
  "key21": "4BG3EdGBkDWJYXj7Z59yHAxPV7Xn3fSeCHCHyMCza1JmYNyqnBKReGf9A4nAYVneejS7bEcSMGME7SnHrwmWbWfJ",
  "key22": "3Tg95EFy3d5AYR7JWZxXkhLK3DNbn74b4SSkyMz81pZhujFJPvweFrx5WssYR1cfs8xSq5TyVrfSPWD1w3xjVp4A",
  "key23": "Kcg6Nye8UVfSQ8wjdBmzNB6ifWtXDWZn39A3pLGr9muZFj1LkgffJeCvX1agX9NkKVerDsAXJS94Q6vTnNdckW5",
  "key24": "2qDd1qmwneHWv1qJygAJRh9M7U4t8NREeVhmqVPV28puf8zkARYkV4gqB4BkUfVzoHGVjrKUeS4g7Dq3pAm4Fyj2",
  "key25": "3kSjhSWUKAnqyuAAAa3YkT447FYgCQwni6npMASX4u7HthZCbkT43xvcT8apXfD6F1CgNRxHGsUQWNmUNVtb1Lg2",
  "key26": "37HoWYuy283hso7HFNpwzbU52At3VmnjrecYY5KqLUt7CZqW23hbDezX3AxFAPqAnbanAvrdMCnR5c2VERfMvV9g",
  "key27": "5nbnYxMnHitmHygAA2vE7BVkgyFVLs8RghwvKNDhyabEcDwUxdP6sUwgXuz1PfKXrCms3CY8BjCE5E4YfvJPx14x",
  "key28": "3xMHwGCp1w5QW7GmMCzzNUAukUcqguF6818MHwAcevDR3i2m5ZgQS9ob2qQq4GbMCuFKeWpqA45SvL5BFeCCkWqq",
  "key29": "45d4AjwPjirV3U1e5ZSkX2g3jNbrEwcMVYF9emTm7QWrUmZoXVbtL1WNmZozkNxTv5FPPW2eYrW8dqaz1N8TbMpF",
  "key30": "4UfKosjqAhJpj5CgtAbAXMHwkCeUtzUBVaFyifFc9pDAkUAh54h4DYWqSTtGVhj4A33TpTgWJ1YbNzS6vD3NCxBh",
  "key31": "5heX1QXs7r3JwnoXT5uzRYRqk52MqBtHEabEcZQzFXWScfbesDZJTQHYyoFP7CD3LqZAdbqGvNCe14FTxR3F5so3",
  "key32": "4eZVoNwT3RtrW1UYJSCU2E3i87exEpgc3FvARJ6826htWLGGmGjfh4waWFsHDN167QvVzTRkckQELv85VFjg1KiN"
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
