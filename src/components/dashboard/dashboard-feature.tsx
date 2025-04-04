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
    "4tAXN8rkZvjWanwTY5HoRPM5U62bGAS5LnAVCCtwBmTz12sFnRNgxCKNsRav1jZTKUL1rqik51PapqhPSqtLQXTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nR72FHeHW7W1C26GFeBGtqN3Q4pni4HoAXgCVjqcvwjSzEYzyvYFXF76ikRSXdxxRDEAVRcpmvC2PmneQdnE8PZ",
  "key1": "D5eBzmjKg1KYcmKiqXf4ZceEcKpN684xsng3ZJmerrakqFCjs876BjXSCHjemC46HsUFKPowqFLeosNhD5esyFr",
  "key2": "3ARc9z5c4XUjqEFmiLhgKMuc5MaAQMbn85Meoy7BWBEnEuLzFhUfbwfdFDtMtM8Zvp1aFETknhyVZuRR4LkA18xF",
  "key3": "n4Ftg5nZ1s3gx1qnXUdL6s9Zo2Bcye4t5Ke8mwPiHJt12WX5cmygpUa24v84FYSK1LmGnpiXXp2yDmrMdP6YBeV",
  "key4": "47SkEMZRpqsGdJXVoD2a3ZVL9RNUQoZAaeVxMHYazULiF7yi4YT1RgTmzxaZ1cNQRk7AfSj2dvjYCsafwNH8zh5G",
  "key5": "2MdKtbhfvKnAp36Ai2HTcUUEFEgN8SpyVuybrkeLRbjPmpEmDcCDAM6WV9ojvza1nw8CMCaGVNVshGPximGdfZNN",
  "key6": "5K6DoH52yBCd668MHwSp2kZ1BAsAJxoQmprWjwHro5NPN9gqpcoYtAt7QEvX9o6oih5NXq1J79iYtwc7DHLsBM1F",
  "key7": "43NF4SXuhXtpbv4m6Tq7ZMhHhwHn2phuEja9QBftTSRXp5n6CEkbeJsXwu84rcs5SP9PuKtUyDK3sksS2Czk2UfN",
  "key8": "2ojPMaV93PzEk6NCLCtuBTXxNs2SskTkNKVjMR9WHbveZuxo4MwzLufDrsEo1UhSWQ2xpMDVm69R8vQskV61tRdt",
  "key9": "2X9kchfXTMxUGaSsyNxviWCvERfUJ6ca6A3jAfBqnMMGqT1WdxxMoTyYnvHi8TUahetV4pVZm2n8Z6vAJb2Rgdmy",
  "key10": "238cE7uTMhPkSDxty2Wjm1UxWxBZFd17gjbrF78iKunHWR8e73xM2q1UCqyF7zv3aa9JjsuCuyN3Xx3Yphe1TKhp",
  "key11": "4yuX4atUfxZRENjGqugiHNb4nSwSRrKXLqP8GB3WsGZcvQaBtbEQLQaZTeLhHDDpbyGZsH2EUCHdgxxDSdTSf4kC",
  "key12": "2Gaeo2YGdkE2M815C6MjQcLUF21FSSnnDTzM1yqVjJsTzG3SXbxS4vebbLbHb9vys9yoy6gy4YV22k3WmdBqmo2m",
  "key13": "48dGCccxp4kBecc4CTCiqLiViG4iWRtXVtXzpGpMEhhXPNVBuXrCxCTaT41rTew9iAEuaYuKazBDx2PiK9Rj9PTQ",
  "key14": "3hZWpJoxodzv72c1Uq8syasv3DiRAtBy6BEnXPgFBTu5DJ7G2rdmmYQtciNwK9sGZQ4Gxm6ESfxhwT3G84CqPxsA",
  "key15": "5M8KYr6ZBwZ44aRWdKvLTdMbXCN3GdhYdkBJPJMhbSy6rB3y957wKuNgDGnwZ3a6DsdfWqhhauHkmqnXsQTQJLvH",
  "key16": "37y77jr9ejdAsFWs7Vz3dGbPwTZA1m7z5L2rZNSzNbchxrivN1bowAiyDdv9mgCR2rUegDZUByP7y8Ne27FUzCr",
  "key17": "2UhgUfqdn9HaEWoDo3sdQ5MRbBRBPWLaXAJxFSjW43wnesBFNTvCzqDCpzqXGNqyBti7oPAzZoaiv5m2PPYVHFTc",
  "key18": "oNRRLRJ67QFKvmUfXeHStR7Dut5h7aMHX3UuSJGaE9kMYbMr1cKHz8ZuU3ny5Es79eBiLstW97GTgJMhBwrpMcE",
  "key19": "364CoGVFfnpPtgHd4agRWnFj7PGjZTAYMviju2u9Qn1csYbCpXw1hQSvYhn4zJgvs4bUZHhquQSFGd9Kf1pL4pbq",
  "key20": "3poyp5iFoZwRaD3a1dsnr2z6xPaU6zE67KUQawTPMARN1TkRHFSFJ3xJE5oEk5WPDTV1HbidRWN5v9nA7y4rCr1v",
  "key21": "2RUgFjQ1E5m5Ko8QM2x5gaZdz2DGALc2a9fKYwBy82M1sV1bZodfEwvBF645in9pJ12QZE78ZXTKyRYTbZMYGQp7",
  "key22": "2MWtawJz7GN91LQLef8vwhUfwzoT1WiJVurj9JrY9tHwFZpfTXNX3EALNhNTx93u7s1uyjEwYQmLX4Sz9ekuh4KZ",
  "key23": "5dLK1WuTnq8kAUqUAyf7V9ZVhJHpahd271wY4HUihrK8QkML4kzGZ4qyaXKMFDEZJ8G8oBkFEMuw4inFGXCiAMGB",
  "key24": "3zpG37S1RAjsykFGs6AsWT4QNj6dZbjUvQuXcUpL1J26NbBwzrRw1kSsMKfV13T73EnmYQMGzi4E9Y7mc54azyg4",
  "key25": "3ZtFKMga7ruZquDhRTwKkjuHiXuFGa1Rmv9F9UGvZRwHiDgMvhzDkaj3QW79LXagWr5dWy1S4Np5PmmbWc2T8LVm",
  "key26": "5YY6Hntbn4urNtPcCc47z4pw6Z9hLubkBoMhU44vyfanybLtGN3nASjwgxFF7KjLiw2bYJBmXwN3x8V1fCBa3YL",
  "key27": "2rCyfJxu3zG7TDv2r6xKPPGM2kRpU9qb1oBWa4v3BawKycobvwC4kj7TqnPVx6Nksi7cPQJmak84qWPCpvfgyout",
  "key28": "52bTY8LvTjBxd9H87C2sWQgir3Rj7vDrnSPAeNDeWKPTypqkWbVv1n22rbVZo7p965b4QoYFywy9DFTVvT7oSNNJ",
  "key29": "4omocypwVfawk3vBHVfmMGr7kT84f8UcbcPBMPtycTYgfRxuPMBouTuZGDBgb78vjGoyV4pmsh7vJS6NaNBPukSR",
  "key30": "432jUrmyfceL4Lq4aFbpSeLa8CTQMDbw7coVdDchA2adBSRJNXsA5MHkZAzKWH8Jf52fsGrxYpMdHSCMYFuYYJKk",
  "key31": "2Jt4psK1xMd7EydBu66HPcgQruiuxsvkx4LGe5KQYz3HFSBD4qqdhhzz1PMxhw4rut2HQdYnzSScP4LYX73p8cL9"
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
