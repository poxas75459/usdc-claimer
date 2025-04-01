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
    "2JnB49f5QdcQV8e7L9rj1dPzByMy6bmDXSeTPXk3a1r8S2R33quNAGfEd83GBkDRvk2R5gZqcznBLt5djP2uYTgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ch2LWDJoxEBh1yhDnHrsqfT2CZEQ9W4CQDJGNMNTF6J54sS767Lmb9Wf8EgvhFHgFEqTjF5yn342cTfpTQrseWv",
  "key1": "5HBnpGRJ26bzzNNqMa2Jgq7nF3SdsP6bRDQ94dqFE3orTpggRePm5HQbEnvLk1TiF9iTTPEvp6Chgv2CM6aGLNnu",
  "key2": "5zqnCfJTiBAcpCr77f5Js9rYLkn9MMvYjVAd2NT6kwoaSzBKVXV1kYeJ64dUn4zFqvjUd8seyKxjqCi8p8tbJsbm",
  "key3": "79UzM4FnkuPhBBiKkgNww6KE2X7dsk9YgQ8kc5WwD7wbGeB32NM4VA2jFCewUPCKgrJMghi172B7HprxycAdPZF",
  "key4": "65ARce11nkZp4876u3pciTdkwy51V4bN5aUWo3oCcpgVNGamWHfiiDBUMgj1UyScTJo63k5UCY6iNp6R3w9iseJr",
  "key5": "44WFNdiZVwQWNd9GiTJNaxt2rstw2FkZekjduj8tdEUbZJezcKYoT8dSC5LnUcuR7k7ozvrraoSkqPhtAzPbTA9J",
  "key6": "4LF3HTrK1DoZjoAN2TBfUMvgwKMygmh5abujV9yPe7v4SMLLxvP3AiH9eoTDi71pWxed5mUG9GNYkh9QEC3RCswW",
  "key7": "3rsoq8MTuwprht6Yhmj41CUfKhJFGc7xWiFquTfVYRAgww9fyerQwkH1hHfLyHqpbaqF1tNC2d7LdhSH4sekbkuz",
  "key8": "5GpkNRi6kemsX5ZXrEhsR2kAoG9kAnfKzeBjrRNyeSgRNbSQZzkmaqxbcjzQBLMjpGX3uM4ebZy6CzVTQbwQVS4",
  "key9": "32pzReozHQCkejsgxqjzZrfht9TJBLdkoTWdRVyKwSwZVN8XoPhxzofxLYLkRymdoKe1Wx3auJMyNsSK6juv2EaZ",
  "key10": "9LxbUkyMFqhyysVtyYpBNLSu1EvTkK8UA7prti4pd7Nm3xyU2TpybX6mHaVezx1K3aDziWFZJMsBJ56XA2Tk5gD",
  "key11": "2ZK3VdFaoHNjWTtEDowjTNb2E5MrbfMo2SW3zq9YUNYfURuEymXAtzbsqYArtmP6CDe8HM8nKbJHnMKigCHNgLRP",
  "key12": "3b6a2pj932HSDDuN1cwF8fvfG3kqgYxaPucBV9npvppJYJhuukk8BrxXjUBzV2uoWkvwwejfyYgGJLenTaFonyps",
  "key13": "2qhu7YbuhAijvnjYLreBzkZrGg6cKE3qR4vzUas1EBB9oPJfaHEgY5XotUoQcbjGQAC6Qa5c1RgpKnXkmtEaX4bp",
  "key14": "ke1Y2wb3FAhhGmKJZFbZ1gp64fDHYDXvbF61TJiTUyaaoJbFpUs7cF588bNmMMx3DqQ9ZzaFCSDmAYMUiSMNDWg",
  "key15": "2t6kkWDtzExg7iNtwHozk8QNQZxVN6PX1goV3RAqgCZvWECJfxup8bnngDMt76xxJscvSaSBWUG2C8XueHB17WQv",
  "key16": "3jaiUvmFYhPNbAEQAZym4vBY1ECVJ1pgZTyjDvKQ16of9fpoTmgoCNZaj6f562QQ9FGdAXXNz4CNhfb6oErXrDYo",
  "key17": "3tEqgb84m6HQqShgmDbKv3zTTeP3buKSstJ49HiAMDHhKtTBzGNqRBULf33totuAudhTknpmAApM9892R4GZh4vA",
  "key18": "2Sz2BzR2uRDPF2XusYGDWJXMrTXpPp8GFtEBqD5eyemnAnxhuHCTCH497CBpgzgTTh29A2LHDvEPWP1zhdB1FpE1",
  "key19": "66trU6YnD2EEysuJ3X5PtS4GRndV3vfFd5RvD5BJeykwgU5G9QdzmCACufV4xtRXxRWj2iPScGaaYMMQYPi8mfXh",
  "key20": "4FZHpMyo6SuNqCoQJkPsqEXGGsHpL9GwDnLJeFpcumoR5NuVGz1yipN9uu8eiz5BYXnTzuQVEkPzQvmhj4dZKp8R",
  "key21": "GguQ3GP9fsNYR5vnKgeeTPFwUiifGT38DeP7kGZiZvpVKQ7srGHyJb8Q46J5aQxmMAJP6fAnaLZyaax79n8yVbg",
  "key22": "2EjNu9JRcVYqFLCSR4dynt8ctRUPjHE9VapD8fCNtm1o5YRdYWS56q2U5Sv1B9mCAnhu4fh1ruVnyUWUuYrDkpW7",
  "key23": "2CeHoc55tuexDJQLue7a3pFkaq9Xu7WkNPYPF2ysCq6qFcos4qZEbHHZ4XM1W88bexeydNYUwM4hSAF6D3KHV1oR",
  "key24": "4PqTCMdvxhgHBsiCFEwD75yKvZsBAEEwHFcH4AYQBRJd5h6TwwgqMnzy2CL7SWMQyYAnCEarBdkHE4fSwEw9cDvR"
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
