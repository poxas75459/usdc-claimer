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
    "5zx4uGXr27Hek7fZHKsarYGvNtbfSgyyYSo8z8Gh4W5fseKbeD4sx6TZc9v1mxrzWm1dUSEYPT6RqxonzazgxL5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwJyuw3G1w3p2UMypPr3Muniw3ncT6nWJLC5KJ3ubcpXDnbG4rCkrFTrPSNVE71rU7uCSxMBwS7dMDzR8LrbHVK",
  "key1": "FbWyoZroBmo3GHYN6syVw4FtKrbM38i6kuG5kQP9vSQADqg7ALXKmyPifFdBKM4WHAGQixH3nsWQ1gm3Y8aemKM",
  "key2": "4NnQwcgPhkKBq29mUDXpBj4Z9Vwz3d8L6TUiDBvPBHJ5LWaPHpWpaBpMZ1BQy9aMtUpeCt4HR6ef3siTT5GmpCHc",
  "key3": "4XqazU6awFHDZHVW6SrXjRTpJZwwgNzERJjUkAUyC26JhKL45iEU6XUw5tizC8RrWuMxfaQrpJ43H7GQ6j3z2dUM",
  "key4": "2fsQ3uCmvZBTs7dhWsVxvrunT5KBcKUtpXga37iFEZwqSbsraQ37xUFed23LhmAsqSraocTdZ8sSr8YBGC731fTX",
  "key5": "2gEevat5xQQjirieaJ91niggmTUgct1pV2G98LTE5Uv4oLETRZwXBcjwT5eQkrxpmX1n33tJmGZKHHqzBXDhRJER",
  "key6": "5Xhvcsh2czDYgqzfb3dPkfYJYE1X56gxtD4d87pBjQtHJe5EZGcKtKgq4vP8hbC7JcPkECriEKUjgCBXVFJumuL6",
  "key7": "4KdngFB1L96Fh4TvwTvt8HVWmRKso6Bwii2mHivi8XGviRbudt8hmt3igKptCBNR7nGDeZPFtFahBHv9yw7AoYWf",
  "key8": "3iaV1evABv4QP8xv7418rKCD4bh2fBDHqpjAcct2ZcnbGzBdHAmhi9khgVDDeTXEespQqHveYmHodG7FjFCRVhTU",
  "key9": "5tMhHuRyFjKL737gQvSSKmrit4sWmSRGVNt4mw4FfzeECjvgHzhzncJ4if4y8R7LZvtge9Bm3wdMmivVFH28AALa",
  "key10": "c319PpPQbY56C31Sc39TtFQgi9949FiV4T5ijWU7G6KR8AKSw5F6uYiyVST1PUS1fk5fEuAGN4UtcEP9eVeNRNv",
  "key11": "3XooPnP5VPU7AaDCJ2ykLLEYRgUKSaZu64eNgzRcER6cBqK8urxRVwymgzsK6QXdYXC86FWbcmzz3VyvyYjULngf",
  "key12": "tQqwiWjigLfuJbGvMG1cLyPqgYW8AwGTiDLgCucuqA4qva1YofSnP6cSGVoskBBVNF4vqLt16zcqqVqxZGcj2t6",
  "key13": "2DEFd814XGbp7JXmr5k8AwTmKjg6xM7GnLjb46rysYZvsjjq2qi6JPsaEqJmTxc7hW2FtHA3BdkTYj1YN836dapW",
  "key14": "39wiBLgHdUY6KntkbWe89hWmRWYqETRw2C1Kq92ckMeuMTUh2vAh5wCPuHbDggJjSPi6upvFvz1uMBci427DkznA",
  "key15": "GyaHojnLgty6jmAYHgRMJ9z3NCbffcYQTe4TazmmRrcV7jrNUe6hke2q8WngAxivNu6ZVjEGJMjTqXgSZixXQvb",
  "key16": "4jSCzohWW7WWBQXyeWi7y6sDshLtFm9kwYXnhn4vfDEdhZWMFGw4fmMJ7yRyENXPhunK2n5rZGmKo6NpPJTharAX",
  "key17": "57iBottWB3tQkv1zQQcXENitkUYTaw8CAUsFNDeEV5KPhuahKmLLpmGZ5jjyXZWTfmGtkAS6eDaFAWM9LzLT6xVu",
  "key18": "41VE8nnnRBLLvET2GdfBJoAQu4hQ6zzCetvD1TNHoJe5bSvVo9R4FQEBhTieL5DbYNCNdCCD3nowMkU7p5noLQfA",
  "key19": "2NYzc1psQrmhgoXLGeLx5HF7V4jkQnUtQwXYywvuwmJ2DfvuBTJs334NFqv6yTSm5BkL2ufYAJsEBwjsLVy9XUoN",
  "key20": "2pknvwp5z6nwmbsuUDndDYZaoADPXfnH3kUcMLXFGiZkLgKvYCX4Lda9yN4tmckj6xaH7DQt5LHmMACo3bdZaCw9",
  "key21": "541i6PsUzMkwnY8wB933FCYr1m2Eo4HcLbvk2w2yZKhnhYgvKrGythsuEJyK3KvP8imCMx6QTMoNgvBtBY2BXiW1",
  "key22": "4x11NQXEVZsCggrcsbaLtTFjb53KQy4fzGQLhdXMj4RT6uRqAXgL6WNpy2SwFYnpPMTGxisZidCdicg9iFyr8kJM",
  "key23": "2UFjCPwBLTwJGHWvnJNUz275zKzPrSmrhKhKGk8SFa3bNKhpEk9qqczCfTLbRGUkWaoqhgn81tLhiaib7RTiq8vv",
  "key24": "4n8hXenS4UDW5K7Nnf85uDCDVV1y5wTE9qgVpd8Eo9MNPNWptpmy3gwkfdNPPkg5of9EurDQv398GxQdCVaEsuED",
  "key25": "5MPn3y1DjxV9fk6tEo3XYPUJEuLpLao7ght7hohY2JeibB4ck4a2vgutXKMzBinj8374kzMgbVk5orAtY1ZbkQKJ",
  "key26": "2cUFN8uAainUfy3Zf7MiJWtuDTUjgjsSFTMGgV8p6kxxNnkx6bUxjLzoeQZ4zxR8Pi35tSuwb6747xVbZPxguscE",
  "key27": "5a4DeNUEfRTuUrRXEKYX8LMerUjpdkvjAhcHp8Qg6ALXouXRGQg1kdcs9cKogK4TyYDyRs7oNFPrVk7oDEe9wsp3",
  "key28": "5PooG55eCnpTJfb11EZw8PRzRWmDDSe8aFu15MEe3X5zyanbrM6Z95AscZ4xtfHRKrX4zWzzXL3DFk5CVfem1giC",
  "key29": "3iKA6UhgZVRwQ9NAqp9h6o4R3LHDHM7jeB8dnyiXBj9R5d7E3jKPGWhRmJFdVPxKCbc3BTwtoa6rZ464xvAp14Ux",
  "key30": "4c8VVbyymrkdD6jFNW49iLZ96GpWq5jcPiDg8kSnMdXJJMjFgfyfWD1nQLNPuYAcUt7iBkBywTuhvqVSn9KMNHNs",
  "key31": "3sostLSWtrE4h61JJ9CaQqUsNLjTpwUEzCK4AoAeTmXX6gna2eQqgVVm4o81yM59eaqiNzhKScfRk2mXJ5LzrLUT"
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
