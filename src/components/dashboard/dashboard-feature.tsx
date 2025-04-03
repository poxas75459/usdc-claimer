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
    "JzbZArYYm1GWij9xA9DTzFkP7sEbvKJFnhudANRAmYEVPmToPDq3RjGs3h9uCxVSAkSQcbAfTqvhBccDPJHuAWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VL7Q4gRxfShsMyNBUBNrXRDBURaooPP1WUUfuenWgZ2hqiCvx8Pq3Haz4BSQdtUnyqNL4p72UXGRSn5UCTTMEas",
  "key1": "3V8UUf3nEoi6zCQEWAsUmLEV5a1ie4Y1gMkUTVtC1dwv5LSHxZTZAWuTsf7e42GbLRZcAE355wv89oSjPHVDXWP3",
  "key2": "5yDxjzLCvBEW6YHWpKwauPnx5ZZodEytN5EpN3ptrXS95SYHc43UutvfkiC4DWXmTZApT4YdPtxZjVb5wqMYABEH",
  "key3": "33pmeuLpwC3qBn7nQUeJQa7jpUrYLw92LMB4dpCSLmW4CLeuw59Mi58id9u6hS3arFAoTMQNzTZLXMBvtBCG2Vuv",
  "key4": "5WfBC4UJT8jko3JYmU8wHwdMWmo9DLRjKfytBj9u5n38rjmpzyY8WX3d672AKSzAqEhdFMPSZ1mggVYCmYbGPnRY",
  "key5": "3rrDMy1BxR7XUARmDXC7BKS1JWpaS3XZKZ5wgxpk1EM51KDiaBfqzSmHHzaLDFc1aa27RAZGUyfiQvVLpHxHENdz",
  "key6": "4iX4RtGeqfrCZeuKdJu9q1ggBMojPmfWLtGWrGZKUp1LrUoivSNUbuEWcXnSHhy4GihLrVMZoNjQQLeDW9rRzBfj",
  "key7": "5ScfRvuRAydE34ou7KNgFMTGS2W9swd5QnpxascbHRPjLLcpYUpyhtAR3YX79iMcZ2YiRtMPct8BjgM5JA57xmM",
  "key8": "5zxrVg49m3yEaAUxeFTXomV2LLph3HjXJYqBAxpeDH5Wa4ZgJBjCJspghq2eQPvAUHqBbeN3EnjdFEBjmHLpfthb",
  "key9": "2vM8SpPaXFYuK32sns1XWRhpcDUkKSH7k4CYkmfNomvhW2jMnfufD8vSo6gSxjv4esxwxRXdGbaXLHzr8vxWfAey",
  "key10": "2Zq3xfo5A9HueYhMGa2AkusPG57MRomro7bdvrEKZrv7D5ncAqtkk3awExXiu2Df8NWGULGA6GWsdUcDrxhhHy29",
  "key11": "5SfWqjpyMQEB9JzcbxuweXwHXPzjo3ruviFLoP1KqrQwkqBYTwhKgbr8WxpFDQP2dWr2XARVUFiieqcRdt6zQF6D",
  "key12": "2sUUZfJehHTUDVNf1btTvhAmUhss2pQFYDatZaEZBAFMHs5HQibYn6aXgTZ7NqVMmbdUMzduHaZ585k1aD949QRq",
  "key13": "5Kcty1LGzMqU6MJvBwZABNrdwsWcRVyVNNqjg5BkrJtCicsPJYc2RbHUhU6dxG8QPXUtZX4kfVEuQKkSELrVqXKE",
  "key14": "3TJm6WbGipNWVbH576gL44WxyiBfiphaUgPLk5LqfAJZM35n7g4dghJUMFwG2MUjGs9C4BxsAARFFnyccFLuBp7T",
  "key15": "3Eve1rcyiRiEzFVAttsaVsB321BnVycza5vaiYFkrbupzx2bgq5JUQVC78mUgKpb7GqeTdGV4ZrYmCW9TYvrTKAc",
  "key16": "5qs2sBxCsJGjYcFWt55bi6qZPtBcz9ebspVpxJ7tuzFEPv3gnGU4oPrwqVh6PZtPmqFdenZZ2n2tpX2JmTdumvda",
  "key17": "3vBRChfJXfe52egAGt8vrfKxyvptkcucGkhgktuHANFxb3VPHQQLPVs24woHEVYSRW69gtUx3CCgMmgrq4CotuAB",
  "key18": "5f2pVXBPYUgyv3d1twJGQ9iarJtz666gu6yAoVV5tNAzvNKqV2EYecMdP4aPYarqi7sw2ndXp9A2T1ZUUnVs2y4v",
  "key19": "zQxuHgKHhuHxa42wRf71YyRqWK9QzdMhFfnrxsog9SsYdCZ5tKXscuVAEJ6cNbL13zMfyZFnxUVKKqVnL8hFT11",
  "key20": "3afAp53bzoeoKJJpSutx1eoLb6QeNANHVRv5g9BNDHYAQkk4EwFrxhf1fUqzDnzQ2DxqykrkJ2GhHhwZZAKEmqS4",
  "key21": "5pjDgay5L2om34Ki7HbMoG1q8QbrwumbE95BTnGGA3J4V2nT3pyvicfomQKTfU17SrMGKxSMVwaCY9ujfB3Cx4zg",
  "key22": "2hJv6hgSEJDgBinZiH7bjBtEHvZs8KhKfUnigVTqMjqCCDEms26DTsEF7awXth8mSPQALyVo1j1tdtXss4J8q48e",
  "key23": "5hgXCkmTUqPtbiij3aqUr1pWceTUtikAghnp9dmQB3oQwxU9K3Av5CoAWpEt4TPxZujUHjJHHEgvWV3416FzSvFP",
  "key24": "4rtHqU6PSgcPGQ5dPeySvYjeQ2TUb7UcBBnQrqUirX7eUFpP87FVeh9YfsjwQcw1rGw9GbGnWrUz4bkzu7aBVs4",
  "key25": "3vwNTCVTCTVUgFX3b4pMs8HRpHnMjJ8sfjVBkjASJdsXhqyk3Kojxg8F2grvadvZyhZLoXUQQznuZZaKzqVL5M8H",
  "key26": "4qYFc8Nzu48VBWaDwsuvLKx8rpJosQtHyEkV3PdmzHxXCq99H8Aq6hAZ6D8meQKnbEKgTSwtb7oUZJYKrSL6YN9D",
  "key27": "5CnHUTijBCEEwMnDJpFDruPrujiV3s13ZLhqvRDECK69NPQoyQK2jPiv5FfeX7mUc2rbC2bdUxjGtQw3TM1XsSwM",
  "key28": "3m6uZvw92jH5BSjRMaxkKGEMek3Ej8rdvTGiC1GEPPsC9TckMfwQP6vK6uwpLwgaMyvBBGckgU1UBsP3rFg3kWq8",
  "key29": "5MHkCtDPr9igAsoLpc5ov8vaHdyAzJLTF8AqYxZkbgXdWdZTcqaUSfwrT8PH1XiQYThufTuFwkpH3ki4LCqouU2A",
  "key30": "435VroQaYc93z8r83V7KQCEzo4uVYarnuopn9qCyuJZ9ijnW3nLyv9SXzxmNvFaNQ3U74grU6uD9znFnJXRW4Se9",
  "key31": "2eaEoh4x4SXMqc7NSDPSk7nzXK4VjmsidvVMFY5SRPJ8MK5hF761759eDyjJS7PtzYV3dUx9b3XzG4MHrpyL9zzW",
  "key32": "53XTwH6ueYCCruDq77kgXJ2wHnF3iTekT7wVq4qT7fhCdxTDrEYtb9rfWY3abQuMmssbixFhX1sVy2qvpbxWKu5A",
  "key33": "2nennZSSHHkETQmVY6Bqn7YUsr626yf1qC2h6iSPpuFApkpDbiQJgk9tgWqh6o7Bvqnn4C2hmdVnkxD5Ua4KhjX1",
  "key34": "5kPknvqpaZa8CZKrYGcv1PWKwEiahy7HnkJafmYyBdXRJXe5zrJ73e9vzfhReU8L8RW1Dyu4w6LEpLpXS4QucfGt",
  "key35": "3SMAExdjEgt83hz9ex6VANSbU3rvoF7f1vVGMFPDxJheQsX3jF9FNXRmbm5ffts7r9SvBejf1EqHKtrhpWAQrCjv"
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
