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
    "2BuDkZoxnS2XzY5ketu5ek72ZZeH3k7fMyHQMJqM7fN3oWCpKiaKVDhngdxvxowkwvHbPnD86dHRaRdKayYZxXVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vrE58PLxRzjXJqdLANWguGbDyNRhqNq5hRsC4SDyFzH24ZmW2Xt4eFb328Btceutik935yTK2hCMPHVSpJoPzq1",
  "key1": "3qemiW6yWcAA6ujV3cBXiQYWrWGNn7jwyiNejTXZpu1LstpCiYkKpKtx6GvxtRmztWZfbiC9BgdfDMgu7fFdq35D",
  "key2": "3vR7NpeAvs5UsA2tu3zTBC4GuBnEtZwW3yokRXcakEziZZjoPehKCt5Dad5Ppy67XjLw2eUuq7mY6XSkPCLxB8gY",
  "key3": "536Rrn1WThyBwhzPZVnjbbiZn8PAXp3QeFwyN2Xb4MD9kRezrZnxs2AA8i1C6KworuobaDVkKawvRsufZ33gspJd",
  "key4": "2dLzXTH4zYsCHthCuARMr1SN3KeE3sWWF8SJQPTa8GyNroMJnzMM8zPJLEwdBa6fB722uUUB2a5BzyCHtX1kCwn3",
  "key5": "4j5k1cpcKQ9gD5imm8qfLTWb8uuiFkoVKPvtSUBTdSx51fMF1HDfZ8CGSb8GNPKp9QbouwSsENbmBhnj3wKuv7fi",
  "key6": "44wYb2QQnmqACyvLNas4DUvLo4begKUAxW15B3iKXSeaTp2qrbeW98PjUMhWUQwvrRMotiKpFNPLdNm8uC1Sr22j",
  "key7": "4jYzduRJVwfAGncNzYQ3v5VGHQ5vDd12qJNTqzZi7eHdco3vRVGYWNBEJzqiPcnCgrxkouDUXZ8pXLJtnmqbXgY2",
  "key8": "55ScdcCDRqHeKnZxJJ7ry5BprqXRtzfDU1iY3q8tzYrRg5nx9ivsknYajRSYwLp1Ymh9ruY3brXfjE9HyzrcDrBN",
  "key9": "4prXdchj2eSZr1wSe74UrKSZVGRiu2FfkWbS47enHB97kx7nLv6fsVNwmhfzeaUEyX9PESeUNTiiAjKPuNnwBwcp",
  "key10": "4udETEYER9QjKcSqmtnHVE1BhCB5BzNCfi8YG37VB1ebTM5omMvT2oub1bqjNLBaoLKpvLMc8BTdeaQbRVmauq1Y",
  "key11": "587RmNnAf1Gvt6S9YsKSTJeVrbxWn1w6uxMacRxWq7uofLHu8WRwFdTQUxSzjvXkaKAXTmBnddoKkEk5BfnjCayT",
  "key12": "4zUbhPFZCKL7dFov5kGbDP1mA6J3rLQu5cErLAviKyGR3UJgD1z2GVpXDcCna4Y249frtuoYwfY9u1LZsSpJwfxH",
  "key13": "CSPQohks6QmEovhhj9j7XPvp6BbFtNXq9VzWSGYK8Ynv9PonaKZJDkfTCioSn5NpvwdpmVMDxntnEJtaUdGRRZB",
  "key14": "5t1tzxxWs8o3in95XdHuxj8WYVdCdkwd8zKZ2a4d6V99czDFSYJqTztmZR5i9g8gN7qBPSoe3hdcBoHaGqz4yQmA",
  "key15": "3RkWQmbK37NFg94GFL8dirZA7kmVfefNmPaVeFJSUHiSekjhLC5DAdgN6AA8Ncr6huD4j1zWFw1RwuC5gJXF2Zuv",
  "key16": "3Z4QobJaBV8DiYo96g1xyHdgZtsByKjbLTHgcdFqPyzVW3ysxohcVPySMqTXjDNTscSuJkQaTHyLTbH948hCQDoH",
  "key17": "2RSKG7GrEhpvwohMnDzYo5QrHACvmf7MAKSA7w8JGLkwtda346UvsjhmjL96e5R5XRRe1BrrSWR2bdhtVNXqiAq8",
  "key18": "26s5CUTnzq4HH8ciqvEejfEucbzYjsWpNH76dfyeRqcXpHHptxkQLAGc2ZsJtvBSxJde2qMZ1KwXHp7Z6YFJETMc",
  "key19": "5eJuPzdX1NiVeivPGztrW6auUbC1ahmxBSAUyXHkKgZqrC4w547DnzPj4bQ9oSeSH92r5rx6NGT6bSvWGtKYdLYo",
  "key20": "3NYWMPt1XLecPJenw8SCCSUbfLwrAPxAs8cncKodAkbuVH3zz8CfgzueNsiqrrTpL67BpdHVazvnF3sUAkZxxtxZ",
  "key21": "4QcHWQDhbzoCQUWke1G1hkDkZdy8H5Qefv5HSm7nL4Rcv6i8Dwz8hiAPURPnsCQ4srav3wvcah6nswjizeFXX7DJ",
  "key22": "4xNYLTbVRbTfN1E1r3WWKNgvPNjGDsmoUmoiPXUNXQDpn1vv7dRnaYqdM4tH32CH5f5aWqEoYpaA2oQhC6kkTFR",
  "key23": "2c6Q6H85jJwnTM9mn3h6dwNkAHm9Hyani2sMmSjx8qssWD78wX8eG3B1jhwR1RSLFK6ZY35PASyNfTrZ9H5MW5Z8",
  "key24": "3yfvSSYU8yaVXqLsjYa8pcDVCU9tc7VD3m9eJLD3J9nqt5Vz5sS3Ld7ckDmR17N7CdoCEVVAwPFEBt6AMiNt2mqz",
  "key25": "3sJ7QjTXLMRe3YDL8xArgL5a2hvUt5aiKd7YZjTz8ZESSwNr3ctv6yGLZhTFEPLM3FS2BKXmiAhCeNS2rWbwnUjC",
  "key26": "aDZLcMUwdE9AMVeSzPD2FjFkFkSmYv2euPaTctK5ig344mGRuJFXd2etdrkT7redexQM6T3WNNoAN9ZEPvHTZYF",
  "key27": "2gjTGg7YEsusSRSSenWovnnR8rm589QairjKXBP6dneicJXaceymnSjXwnEEzAVvbh9SSMcqrZ7scu8mcLkiN57U",
  "key28": "pGcA5VqKi5c7uVgN3i4yBGhW5u6gqKUiF6dMfF2z6GCZsdKSzFoeJdFtCTGPxqeg5mj879h47S8LiCZ48EWesV5"
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
