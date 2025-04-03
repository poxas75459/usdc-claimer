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
    "3fUW3mAmDDyJzvwLUXQFzxdxB7YEiU8S7CyhDoQcqzXrYtLKFQEBTYajFbC2mDEDcaWucXjTACAQDwEuYTkk5Txy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNJZdCQwRKJpKCYj9eCz3VhCqXj9vsjMmc3dqd4McwSbb245dGaE2WAg1kTFRCQGibaHuo3QJcXTe7BZJduGUae",
  "key1": "5ZQQVtrbxoHxFxJagdSavXoXvEcNHvAzwSM4p9vGJJshQWUEJEAdEcCJBfupYaTYpQrcG4dSXngyZzKhyDavK1CS",
  "key2": "4JPKx8jSsW6jMWpPC2B8k2mksbxdG1p9rxm2Q8iaXvQWth9v7xFqnr697PhjHL3nBcQp5tGciwFHtzU5oifmY7k6",
  "key3": "5ATdYz8nSofqsudaqNvz2zrhb9SjiannCDU3s5skLKKtboevbp69HgnXaujbo3ne5PFEcAog2PiPgADFFunENTey",
  "key4": "4JdMFvcVX9KaqbQgyXegMTnvqCNAZ1mdEaj9yA4TDX4Ya48dZFZEYXCAqz7JfAohBaScwPizXxZXkJUVzarDyM93",
  "key5": "3yiNXQQJWS5J9pQmEPGBsMPAQR9S1ut9p1PpVd6GstEFp44jgZvaAc9Jva5QdR5RAct5LxJLJ2HTFGftQXPcySLy",
  "key6": "5Xdj4TcJdp1SkVd8VEjoAcqsLb3ENBR7mfCCyDWtxjuLKG3c75YAtntRbtdppufVwoAVAWErfpSdj6HWc1peLKwA",
  "key7": "4sdvSsKvVdjKTrBMbY6MgKut3ZaBP3RYbuvUBtUPKGxpfKHMtBCQ9ho2zX6c5QQhtWR36945jBXZQzkwsugYC2aS",
  "key8": "3JGUbaXARrfeg7RaJapR6BPFXSGLTA2zvTr7ToVxzEqk1wP5H46XsJqnFvqrkS36DGsb5yzP6b97HuksJRK2EyUL",
  "key9": "2gDesN2SXKrvB6qm9fk2xBXLfEbv4ro8SmN3goWsxu5nun1f4tVdQpPmBwVvhKvDE12ke7VgwCFNt2NdWTqJpAdn",
  "key10": "2Jfb9tX5UYq7mxjiegK8FpDcGiXqCKFcoXVFaAaE1NkWEFzFdhA2jzqfmBtPaZmu9MHM5MtsB9kiczQrBeXgDebH",
  "key11": "2saijtL2zhpkFbzu62FHmkqtgWnRL8JoTQi4daT8ku5LqvU4NzYhPoSduGWcxYYaoGw7UwqMuT4ZmjitWDfxzATm",
  "key12": "45A8PhoEHmiTjABt56nLzGbxuqtwDQoiounRhR8qZHPrt3vJdkpoKNfy35iwQNwSGJXoYZvAWZPZFENrfLzxjV3S",
  "key13": "5NxH9Sv5aQymcbWR9L2vQSSquryQCeqx4v1xrdGcFnctcG2Wm5cFmQ1e3KxSXUiD591UopkD34yeYCQPhXTBdfRs",
  "key14": "3sFMfpJeecda9g1DbPEDyyL97DquzSPn6fxWoNyKq2FP5FLBnjw7V6QVfUxLhAo6KvnKE4XmdobL62jwttCRvqe6",
  "key15": "5r8ZuZeHYbyiU2wdT1dfGMc27o9LqHafyt6s8o1nctabHhUSREJcEp5ZmLAzSkBCwdF9XjVxTusTwZHDXm8fYTLk",
  "key16": "67AhUQf3JiPZxbSgvaP6GE8zFcjgXWcHCSbwPbyCnw6Q2s5eiQRtDxcqMhh47KoojizpGqhFfj4jvSom7HuHJCjz",
  "key17": "3warAbS2s4EfbdU4EGo8kuGyAtMWM9qKE7kR4DeRzumMtrKig2EjK3MtUPCEX4soUymr9FPJBfu8pYGU64vSzr7X",
  "key18": "5S1dt76bGjC5oLPfPYkTdqMYhgYrDNow1NDPdcv1UzZrFBU2eJoURy8RoonF8y5gx4BsbNzAknQftcJiihWZHAZG",
  "key19": "3H9f3PiXk2xn1kefjFBKz6U5KUgVDM3p5pQpCGLhPYzcDMnWvGCMoseTtKUF13eRpeJZBksVin5LF1xFuYnftXoB",
  "key20": "2ouoPGAUYmh51piwtP8UWckr1h6brNJQ4f4qNcSdNsSNkp1bi1afM9vKetjSnbW9piyK3nNnsFwH6zSswMsxPybF",
  "key21": "5mZzhKTgGREAzpCQbk9U77A7uZZBdKLccLMbZLbqPzvdB2jiniduRf27AxuzQeAkk9yqbFXYeoNbJZ5cMCpohe9B",
  "key22": "6Rmf5WPjxrTbdb6SCHSxFjDMdMnmYnQtBNpzMKFt6Quyx7vnHNuGj1QkHEZpFarkD9LBXpPjAdFUW9Hp5zRw37L",
  "key23": "RgHNs1BWNZb4wcBH3yvHLzcxHr3gUst8jcFS1QFqXwXkjnjrH5Hh96S2i7osuYbG9J6MZybsHquL1rYDfUdYiLY",
  "key24": "3GEUsQ25xrm7fTc2zeMGrDeMtZVTjE6ccZoi99q89YEBh8vavxWvHTGgPFgmZG5BRtNVS9aPSobDSAAU4jbYMBH4",
  "key25": "5u7jjacM9WoRPQuGwqmePqJhkRuf6bWcTZFb9Z2qcL9jvgQS2v67dMeq5Hta3Z4xiEy3gVUHu3uKAraRuchYxKv1",
  "key26": "4ZhDcg12jGom5aQRJbdSvrrTGDysuuK3SKzgUFWyr3AyUs4fGRU2iPcTo4G27dB5pKLVpWtwByzf79kMfc7Qs8Mb",
  "key27": "ySqCaqaJAWz3cgi7ZKg49mv5ePw3CkPvfwfYiFmpXDUaVou25ovmcUat7vkZTSeAZQ5tN8wDpCHhMpdGambe8jg",
  "key28": "5WTbV9ei66w2kuACmabzJXeeMD9qMM4xfBt2iZCw2fT84yESjtMKUHYTaZ5TEoSBmWRmpMxzNHG9gguSRwmGj9ZN",
  "key29": "4VVFc2wJbdEmyBDQXPVZk2spDr8t4YvxXjFgQZDQwsRPkPEaFeVG1BbV1Tp2iERJjqBZwC7jcXuqYvWpwHtgjSLi",
  "key30": "5VpisQrwneyfaLYuhw9T8scV7ERwoQV8yqFoXht6MnKNYgjRgZAQovb33Ytbd91iWuD3RRgv89ErFMrnrd4nQ2L5"
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
