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
    "4gcV79oioNH56AxNNTx55QN2WwP2Y5NBYC1RgKQadSygPqkXuqp6jffMmb5e5AZ4sS8ffcq4AUrNoZs4fNysarHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HgcjbcYKXNv4AxmapGLtzdn2DiYhE15LZUaxXq43BjRZBzyax5zhCLcickg4YuLpgPqbaCuhCMrksarcMxmrYE",
  "key1": "aFake4F1eQWqoaKhNTKTygt1jHWtkj5iarKm3412geGYz8AKaHNtkmQz4rwmbPQ2ax4qkU9jk875K64YVAYdYXx",
  "key2": "3qqUH6vs7Lw1FguzMEABZd9GvYSnS8QdgtRywaMuHJrgY4xTSvzxA66v7JHQV38j1koPQE9PSi5admxfcYEWweFm",
  "key3": "3FwjZAswEsSDXjmrTNd98Cn4sdeWQYuQvHzdmDhvAvgz68Y5Yb1v5L8fuFzzRjWnyiBo2yH4reB6Q6EJBYqaa1Mz",
  "key4": "iYk53vJatUTS8gHv71PSgxZa32Np7fYVi9F7Yejoo9RqSMT4fJwMtLJZYNEPSrEusrAMQG293K5PTXSeuYisy3o",
  "key5": "3X6gKVRtQTAroaurtxdtK54TvDeFccsKSE9Bikru4KFsCqVEM6FXB7Gpqr6FwLukYEdymwTPCEQ3sug8TKEHkq7j",
  "key6": "3qfFKSZ9fWqpUwiPcRngCm9nhSA4bbRAbVhjCXDvjwM1uL7Uz4ykQGM5Qee7jHdxqFzpvdNWWsuTNKYBbPHrxHRt",
  "key7": "5FWsKueWAFc5x71uXZ16fzKc3aD1mvcj3kSL7k8cXDWoGUntaGYQDcdGmNeZFG8UguD7Ag7zqLGcB8V2enyQ9KSn",
  "key8": "4NJJkNMjGEM7rUR2chF7vVn8xMNUeC26V6AqKcZYtscodDVpThWQDaut1VHY35EwuVWAE3s7hJZPKqbJxQ1w4zU1",
  "key9": "XUSGwJXixPcQXnNdBZuWhU6tmCNpWSgLaNTZERJ9T11gnxFJX21VbNtiRmEZ672vkay2HgKK5WvK886ZKhwZCsS",
  "key10": "TNWxvcazMPCSviabjYrCk7igsxD7wkjhWUspB2sERS2FeuRHse9XdnjxNCFjeBHkL9gGzRxWHP3VAtK5ZNMe9is",
  "key11": "Cgy5q8PCTugr21NFK6kZKfL5WPW5P5iTVZkFXBiM1PaXn8w6qHFtma4ZRfiLhPt9ThssfNFgUJGXAdfWWMqQ16N",
  "key12": "2pca3wR3ffRfZnVYLuZD2ZpQRiF1Z88JcPdkZXbQHBPGsZenGyTNAt5x7wVaFVnxP6UPEkr36fYwNHah29vBgCUX",
  "key13": "3PYctq3NeKJfxk6opVgRPqae2FxoZ7ZDdxX2NzK2z1zG6Frwm9yWM7jU6cichtBKNN2zgUEeJ4wSBdjF296i2Mfq",
  "key14": "568ZLwwKgrio5uDJxS5K7Rq6GZWhPMBjZnBywm25hNtLcxfs5kxEqfhj4wEgMEZGyBW1sDFR7xUDPzz4MMoa4uWn",
  "key15": "3u6iQKjWy6e2Mojv2YeuCPwBay2YKraPgHAiXM8oUo6xBhxMm95grHwgQJUND8HmTnajcQo48FWr3V6aw2fRjd3K",
  "key16": "2VKrWsrkzFD9rjwPJvoxkoXkHtesQgjwrcNLnDurBSHyvEV2JwiuWWUaNgQ9kFY3vAdhSh4eYsiPDh1nAAf5Whao",
  "key17": "48j48XqGS9oZgGcyzFPjrUHAN7U1XgUM27TkphTZ113JUuQw6TowshtuJbSNwaHpLWuzXWPpL1fti5b4tFNTmfwq",
  "key18": "Pmv2eFrBedg3DmPnmPPb2iFhAQ8XZgmZmvBGGne54wuSdkSwPgwFNzC6EiMfS7A9koTtJdePSavvpnxZCdCdeWX",
  "key19": "52D9KEZSdrfbxpMtuCxtw7iSCqhWCh42X1ia9FnorS5mhQDj73733KVA3iRdXoH9HCEqNAoy2ogqKV6W6wZ6k8LQ",
  "key20": "3gHrF9eTQdph9nDP2BGaqssN96rgsMoVvvVn4hCVVDAqtFifV88wj5wMVmsN11hz43xuccR6gYt7da6P5Rit5KBT",
  "key21": "2KwkfE9nDc4azWcqReKdLNVcxmBSniN5hbHedaR3o6LLBPueyCWz3YkV7qHa82tnLfySHJx8M48aGifvu3D12bSZ",
  "key22": "3Jj6evNcPuBxzMFy2NUxmHxcnRSm2ej5kvpGf7o9hvgBF1YxhepM5oADbp2gYiZaQBTRmYSUJLVQqq1kwjdkdJfv",
  "key23": "2iAefLtSC9jARLCMhdYxoy3gb4bKVfcQ2SjDzyL32fVSLH7YtusLGMY8fyhSGwcsnZE9rGRMDVF4w93L4EnMav3K",
  "key24": "3xXgwDibswxNvAxyaFELWAQWzUGjsw2Ds25gfkNLJzhwRjarFXArVHuijJTd9N4K4n9viVE6cHs6FvSg6QYwvXp4",
  "key25": "36BT5XAxS6SF24tSynJ62t9i9owKEwD22PmpiNm19haWYDBFsYEjKx5X8C3nx1JfvfNCee9LGQG99PFx28PjjzqX",
  "key26": "6343oKFzrqueFiuCSBtPqxfTLZqVPp4dBATbbxjKdhxAVWwz9Xdc5Ys13xsA4ickJ5XDgr7g3NdJm9V4Ur7HJCK9",
  "key27": "2V4rkQX51Cw9dB8soYihMBb6svvxrvddLngJzQ5uokpbn7C4nfTcBViZZDdbhULQZJatkjZyrRgNq2X53y7iLV9N",
  "key28": "3wjgPRhH4VsqmvHWvUSGZn2xYbBdxdTBQ2MXBRLbSCP7bnnxypTebGhobtmmhSwttXCbyddtitWLsjYV4HMWCovy",
  "key29": "4VMWZL5nwbsDHEeHdbK55YabVgDZxynvTvd15zgaKmhgWs34ZZEaYLJkRKjEagTwNyrcmRXHvSkhSf7t9tsxVPQR",
  "key30": "4GpMrW7dGNfrgDN8ckk5FWgkudPhYKrPWvtxKe8hzwfT2hYpkqKAxL7HP5Cd5cvQLND27noZ1kt6vSmT6rYAkbVy",
  "key31": "2yKrbs25fB9z1ayoHpQzbnjtVe118wCQjRDYZ2Ui9FPEVrHReRWyH98JrjacTdyamUaxHChynYj4rx7jzHzFmtAf",
  "key32": "3qq5duvN3nvPNLWTF5kN6X7izE1uMk936VhGsGLVQGwxeJFMg4sy7zXWPGJUbUNhBN4FQ47skwUCu2evcQGPH7wH",
  "key33": "4UxdMxVJbbiuB8XhAYKaLw2rPBDd9mUJD5mSwVemZcLkYWim9xiEchbS4rj3u6YszeJrPeEvPVF9RbqxiWjNA548",
  "key34": "4MN2kVSnaghjghpxPaUSpw4pYRvnBW66X4x48DBo93meGtEpAU7Bc1nKZpTjSoz75EWsDTiud8BuejCvVWdSst2Y",
  "key35": "hmsn6Qo5wEjp8VV1AAmRDe5u3233UzcgaJHxGQgn54TK3UP6f79iYXR4LB2iBZnFS5LfA4hXyReetXRLVg9Y6KF"
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
