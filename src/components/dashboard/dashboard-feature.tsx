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
    "wyYyBHY4YKfac8xzSd5X2DQfKmKjNcsWt1Z5HhXEYM4iskxMfsPeNpJVrgb2o43yjyW6JBHJVodFgP7qtx5d7WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66utnegJBK5HNTR4Ncm4FFosYbABiKvLePfeXE7x5ZsKsu5P5PS8W4n3oq2BZZYhbkxKNRq9LEnFefoDxmXwsSQv",
  "key1": "3YB8pRez1gC1ZHWzxW3z3JW3RG97Htc2tMJMb3KnvrVGdKbX4oSou4UgaNaifgYaMTu3QHhB6Q6TWapdM8naYEAq",
  "key2": "33rei3MtAWAXzsZxNtveMFRn7ky6qGSH3mb7mn84Jt3Hk8eufcs5uS3qazVC8b55Zq7PkubETai32K58ZZs8WmYv",
  "key3": "4aETG9WHy21CXQuz7XnuH28zrfUr3FBW8zfXBgCxksmWeGYzCwCto1y91wh51F7HkquCC1NPKj2Ti5zhgSeiXnqW",
  "key4": "3CvCq84CDtdof3ywXfXEEo4zZ9h3E5jr98BgTqck5yyA4C7P6Z1RcsTAhcM67JRvteNKLqvH7L54pER9FJRoJ27g",
  "key5": "4zZxqq43JPu2vGvfKKsfysthSKZxdJq2Fum7hksmhZ55dLcbhjsV4EHEs9qf5cecbzHoaD1uvhjtoCQTfywFtWm5",
  "key6": "2yxJJRgz6Xqcka4rTzTRGzmEuqum7yFbHh5XuUoiTrwboeQ9DBCVCDfFPqdYZqaufjhg8JwPt77cC4VjBceJMMd1",
  "key7": "5ad56W18A8aK2pwPHvnXGFzyqqiXKNV4xFbpXnJmU4VtheRcLP2pNLb2z6Y6dRNHzQPevjn6HtCjAY6u8DuhLPiJ",
  "key8": "4S7RSxMDpwBTBC39GnGXsJLjg2hDxREQAhwyyf2xnUug5D8hnZmmgvWahm9H8bwzo4nGX6f2smgmHpHsMWndJ7CR",
  "key9": "4bpgmff6GVtLiSqfAsWHxoiMVruA4J5xysu2nYq4rtL9BRtdhfcm1YSs9hPR1xVAHA7PuwfHXiZVwF4yoBattUMy",
  "key10": "4KmDDfLzZwmmXnEqCQgQzz3VviPvSzEg1nhUQcuyzCf7HnDjrL2pT93WpGWkH8YDJ2LogmfEZf1vs46SvrxeEGf6",
  "key11": "3NzJ5B2vrhHhtASmLgp4uRM6PUHiY7jTPyKQ11UaYMrnS4ZncFS54U6zQok4LHqzPh4D12VMrYNqX12uvs9dbPae",
  "key12": "4bkkcstMQVE4A5Z2HSyvgaQhapXKxTh2vEEpknJJtgFGtzgoz4wzMvmLq5Cnn66VuGSk8LMpZgXZ5oYLTJpuKDeu",
  "key13": "62WbpBMZuENuKqTsAm9ZjtgxPGEcCt5NtEtQGMBso9ndsTmXwLs6BgCuYx13Ppti6EjusxJdjejfAxfaiqpg36nn",
  "key14": "nXL9DVu1gyCrcVZpAGLwJMTRPjAAiSYy7Ri1ZyZor7CPLfmUZHNiXsEftqKxBtk59A6CbcRi4272Mpk1hatUMv6",
  "key15": "67dgjXmTLv3DYxMnxJcvzNJbxK5covxpQvMhZLS2ALU6N7VoEaaj6Nn4ArpFUonrNmSzbTDC5DdAHvyKVEFMF2et",
  "key16": "3jzP6G7KJCi4kNtNcFRdYhUhj5gRdiSchiTwHUJFXV4kfzuSn4NKNfoCeNz1ExyskiUDxPL9hfvZGojxZZBr8nw1",
  "key17": "3kRHyjnZCYvuehEkQ5aJhEg4VtD9m5aajXnUsDpNhcAKktbbE1Uw8guTXKZvj7Ff3hb2AoLSxyGJWYV9QqoJapFE",
  "key18": "2NPNfvcosinGGDTJ6tVcQY2ztksCraHfRMpwRW4k3pR1QjPah93FmjrzNpydSCv97keC62xXviardJr5kdxo6FUS",
  "key19": "4mANCrnZTKYMQrL4BnZgYxaa4pTyifk9cTWbiv4Lypozt17BcBMKLv7GGo5ZC5PLyBeb4fDzFD8WfRkZ4EAojGfc",
  "key20": "4z2uxvKzu5vWasHVpcQPajN6PEGFNeX3UsSGMMhTpLkmyAVqvv7CJwSA2UdCD1r8uhpMMx5zNPuUWb4s83Sxy29s",
  "key21": "5axRMiHB3uu4wt5ydtS1eGXar47wFaBBHwf4yexPMDESxGbNtQvRFTNnoMgNSQecb8qPAaipFu2hWrxhCsWhePYd",
  "key22": "5ZMroQgW6SQipJBdhNjLNZEkum2WtwLHWnvyd5Tt8upKj5ffG15SM9tR8xRkSuk7zxEkHKq2iZC56iUCTsXiWpcU",
  "key23": "5cWgrbmgd3aTrFRHnx3KAgUTnsVtcSQXVSpBsqNUQ1SSDgeMJ96tAfPeLZFBdsYXjo1yUV1c65yBX8jm3ezRgS7X",
  "key24": "2SQNBHo7D2S6jHfPmKjQUdk5DSFPMGEdZcZp7S4QWeyCyCKWkbamzLwxDWPVMk7XzRod6JScUcAYA66myVTTamDx",
  "key25": "5CaBmzACRjVysLHr5q27TwPzSLwzu2AZaRCWcym1gDKjdTVBQA3A8WPkvwx9FN26sqUcegR4Zx53dGVCKaqDvedA",
  "key26": "4bzwqEp9XWMdv51NQXgW8mdACeeUjQFXqnnLT4EwBB6AHTZLYCafy1XU9uaP3GdWDupdCNLUbovDBmYQXdMxP9BM",
  "key27": "661czjmG6Z6Shsm3jrofeHYQBb4s1PHdFKLyJMJ3FVfqGgFjW8Qqe8KyZRYu1mHaJe8VZRNnzMnVi1eRgXJ2ppsK",
  "key28": "5gdscpBCToug9BbNQMo9DUep1rJz22LR4QuvyFStV8WcoqAjJTHXYp16DgxswajuVAshoG1MmXH1z1pFs8RGQZRD",
  "key29": "5a5oFnvuVuyKQoXiY2Q8HDk9nSLr6ipcAnvrpqX4aWsav5zMrVghPANdaqKjqqb6RLKFbsML4aK47RPG4VQerCie",
  "key30": "HnTz3CGj6Yn5Dz8p94niVMh157RAocU8tTYMQ4DSHNjCzVsLbeAry1Ar1Tma7wjLUbLurdfC224GTD74h2SjAZH",
  "key31": "4jRApgmKQmHa6ZGRf4XZjpsMatu8bWbAHwiySGfGSQmM3vMm9idu2bUU6gas7FSEmjNhScm1p1Y18cyyj4yGoxDA",
  "key32": "vkhUM2mEgBY248mKo2jPkbyjXawQTMB61YnUzoaQCANeGQT4DsSTmsFb7AYvjF9pJzAhCLEXfwbYrMmt3Se3BzZ",
  "key33": "vpmdPLrVNsjNXsNuU9Dr4RVfctW2S9nGxUmFCpEauYikkZfb6jSEuTXMM4ktL2VkPgnuCTM7mTZQsNYTAAKtqyC",
  "key34": "4udJjUKf938Jb7Uy2NDngM5kckKV9tM6w5xpBXsK575zoWpj5a9YoWFq6im1PTmU2cQBPK7GcKuKVh5JSWuRiMDk",
  "key35": "pGNuYDrDqWXut3PApn3VdGono37MHms42zZ6PvtydYupohuQZn3kLgfBhan6zXWx4eRr69PEb3r1aTHnvgWEJVi"
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
