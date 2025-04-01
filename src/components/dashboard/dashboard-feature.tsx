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
    "4zQbK4uyiGEWNSCFtjrgNyjSPztUyFNVs4Mxc2ZV6ysKB83wzNo5R9zrzyju2eybvu5otNEFhnHsxs3ogPC5oCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aesC3DDJGXsd9HRyFnhKK2fHFGPBe4xrqBb7tNbsG2TrcRWCzwYkHoaUZWgZGXx8fRB5bBAG6BB7Tr1Xv3YhGdX",
  "key1": "5QaN3qaFUdAiMGdAgNiE5NasWviW5dLoymNLCLS8WW8ySrzy6CDz3Vo7AXMDwySCNwKFthETAhCNv63KXMHrhbeH",
  "key2": "5q9foxUqT7eR84HjtGdT9q1qnxXrUP3AmrqTVZNP9DJd33z8WvfU7vBNFhFuREcofuhmgkfArb1buanzredm7AHp",
  "key3": "5P29bCxMj23iCwg1m94PDYjA2ysbVPXecZmcrY5M1ytcNbidHG2UHhyWsjAnnygxEQ4ybZy6KV6siRpsVprsYtEm",
  "key4": "4MokAj3U9vX9MGNpUkWL36133Azc8wgS2FYFYwezHcvxAgT2rA9tyEwHZPrajzmXBYvK1572CQJ89PpKGvZMPURt",
  "key5": "9smZxArSS4n25JzyRDicx1QaBhDM9evdyVtHUecgUnsxPNFRqPih18AQc36NiW6Jjn4GJsvv31P4ss9kkfmykHy",
  "key6": "51TX1xsnoggDp3J3a8BEnD8hNvZqoG9SUaBxgNfWCkBxodc7isxyRvRJeKuTfDpGDUkexCnQz7c6eXJBcY8Hspg5",
  "key7": "4hB5NUj6cBF1BK3Z5szey7Cn3ZcoAiV5MPmncTYCq9JGcUUQh6pC9JpTVkuTz1byJUm97XkpRwAd7Ga5LHgpFh64",
  "key8": "3b8fmBRugRD8RFeM36tEB3RwDYR6gpbKHqqYQYoR1g7v44DcYVsNWCc4vGmWgtCk4npEqbbo2JYfpBpJjeEyS4aN",
  "key9": "2vDu8hy4zfimWiiQNfToeRZ9VNCv2yMo233KsLc51HPUjhHCf8jP5Y7roGY4Xw85hr5t8zqvSq5JYGURFCKt1TST",
  "key10": "3Y21sVoci4CfsBBqw5FdTUYGDbpcpbjAyLF16Jb5BbK1SGQcXVpBuQqCL4ZX164d8odLHVLn4m7zMmc2VTLmnFGa",
  "key11": "3hp419dvKquCMY7CoruWcHQNv7Y6FXmfTpgCVm8N9LBdWRHzcGxcVhZs51bU6uM9EwKhWXQimTPzozhtmTbjEwHs",
  "key12": "5kwfi21CkNEjt1wFB2w2HmKKs9EMtV2rRjqoqWao6Qs9V8k3PsYck3ERc2AURzT1dFvspkJHqrnLySMzAtRXh5cf",
  "key13": "57fH6Y3QsGcmv3zZpz81XZ6LNBc4sKnFHmPqPu2TsAnKX41CSFqc7c3y1ESDcrYurEdKNoimjihV7znyyMehXD7i",
  "key14": "34vJoJiZxHZ8ND2Sb3PUPFzpAnK2pxYzHcgVLWxFkvCVBC9VsYVpML9xXWWdErJkoR4d8BGqLMfVnnkfpi2MTfgQ",
  "key15": "2qUdWxQEy8HkTHDaatiUUgfKezrCRQ593g1LpnQnQRJ5T5DrP7UJ7QUFXM6MivXA3JeCCpwrm3iXnK1VjakUiNoq",
  "key16": "37BhD17hLn6UuYCDuRiMWnc5ZwycLnuypjwXXFrfhLF19xsqdS2Zhxj14s5oKXgfY5smJNrafKdS3v3oQXPhv5hx",
  "key17": "nQMxVr8cw4JXPwNezaHeaa5SRC76XEJXDZ18BJdbhTPhVaJXvJ4dADfwU7Yq1A2KLh2TY8H5thNNmb6r9W3tKGE",
  "key18": "5RG6Bm7jySeUfeA22TGZewaAcY81uQmxBaTbGNmrGgoMnXAkGcB7af3iTiv2VV3mS3NusWHazN5LnTW9SZYX387S",
  "key19": "5e3WpVGCchbgDYc52MTxdyoPmzhTmhfQQhuJcuaz2f1zqfBXcVEEJ34Ge5g8JKruyvhY2p43jLkiAEfp8DCMJFcw",
  "key20": "2BKQ9Qo18yzBdSn6TCt6mz1SpPpKewDNqMayRJKeAs9dC2E678nuRWDxre8UcwjQ7ACEQFwMpAxtXpBxtk38bc3X",
  "key21": "MjukwG9ftyk2YB7D6CsZ6u4xbGQkNiZVCvJGTYg4R3LF7SV2ddsPysS19bXcDYBRYVoLCBkAVt7B2TNgb2zDAb9",
  "key22": "33ihqY18joKsWugobqrzaHVXknwQzSDjNnxQaLDpno3AiWZ4VGXh7T265EbbZr1fcTnxFGiascAsmqZ9kYHwHS2t",
  "key23": "5vVW7GV4VqZziZzDuaDheqsrksyUQJSviDMwFAi5jMzJUfNjkYfMxiK2UfYm2JFa4sqoKRAedapK6cwVKH4GF5zp",
  "key24": "41ubCK7BgNNKKvEHED4cdsX2u8cQ4dfJGnTPWZAZChmX9N9BSXPWg751mcaooSQbAPyG3s9cav3tLghAug8eGbhG"
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
