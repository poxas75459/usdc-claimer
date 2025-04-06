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
    "37hC5PKN6KdJSRc8Jov1nBaToCDwUEm7bcnTZZhz8pQCnwHVEyrKLYbdUyAT6kKQKeQS3GqYFoAE99ktYKRecopd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hfQVcg4fVkR8t6cj8R5ehCsps3djy6K1hCK6oUnjhHNa2J7RQ5LuTQx3HyZFigmeFPJMMFacJsSB5PUCTPJe8u4",
  "key1": "2VWoFw9M3xU9bR3vHEzE1DezRPfMHiPjPcXjVR7FDpzXw2AoDQaAmQyXASGsL5P3BgAkZ82xpUB7KqHDaqXwNyDP",
  "key2": "2YrGEKvZ9So5vwvSkRRgKa1nvbWxaV5VfBJdxFi8k87bQzJmipbr1EPd77cuTd8iiy3XeGu7Eb9U1WjuhgE7bfVs",
  "key3": "3bZ19ujbUXxbtVVNuEjyxYJ1nDtEdLifpmf4WzWLDwJ1T2xQaTgzGLd3LcVyyAYKrGDcJkdizKGAMikB77m3s3hW",
  "key4": "54djhZ5ZFLa8Eb6hE2s7w2NMJ7dY8JFE3sY4ZMRPMQmSyY3eYhBGdkLthK3o2rqZT9y24qJTBKhJGWUqMJAV9v5w",
  "key5": "3jnQtzCYVqUe3tj25TrwSt6VsTMjkeCrGEbj59yA2NFDsXhhLGA2V6daMAk2Jb9MrJ5m2uZUDCz1JHPQekPKmie3",
  "key6": "Gfz2ZaVoTRbpjZmisemsFNpgiRpXB27zHfKTtaxek4aUAsRUjjAexu7rFnmL8FD6fH3Ab4FGfDHCvrwK435FoP6",
  "key7": "3ibsKXaLcWw6yp2r6VYLd3wGxHVCSc98WW3SHU4CHM6JkH52vULtKHX3QyFy8gvD1ijaTpqJ2qRJGQaNXJdjyaab",
  "key8": "5DVmzueZAJVifPocNXaYmS4eLSzXPuZLbF4Ds2NKV6LGy6kz688uveNPwrKdw5y3avyP9vQuimDtdtJ7Rk2n3W1M",
  "key9": "3bCEukYmymSe4YDw4K6PgQf7rdf6Uq2ga8V7xYZLHP3kpjdp1Q6oXokVxW5hTPKNv8GJDMGgKHWE3koizsBMf7wZ",
  "key10": "2D44CiN81NH1d9PT2g6kQFoEzMK3iauZk1T3LEf57tFq1TYGu7jxkqsvGmKjNVbJMMFzCvyFyMvNscgTnxmMxhJf",
  "key11": "3XtvR7jb6HQGRKr22ijBSxj44U2eewNqsAyBzYv1o2Fw8jrR7ecQRnpRSPkaBWQ7SA1zdSw4XEnh9NBKKFaomkY2",
  "key12": "2iMcyTXHHkLoq5adehXdDdxPjXzTULSvdUtQ5eerZxV7VQXeg2hkvD2sgD6JJYkXUbGGEquWugPT5ymt6t9DapxM",
  "key13": "vsrart6fA2gQMQU9ps4t1oQQtNufDt46vXTX63dEWARMdDwQ3q61Z8uRDcLYKfT57bqwMDE4VAz9Vu1QRySFRpD",
  "key14": "U9kUBXiNkzHDC4TvZn8HFg72C7eHT2vKGNJNc9FD566PoG3G4nHs7eimmfUiCng6SsQaRogQcZ6QZY2MFJ918Rv",
  "key15": "2yraL9d1Xegv2uMjwfLHVKL9AUwS9hC1xgdXWrEW892gfmpj4oiAUVrdcX6iEEnmJWtAz3CWtUT6JWtTKWUhEBZe",
  "key16": "4PFYh5q6Wo1geFBnL3r24hx9DAvtjTbQXBBbqivucAScDdkqffL4gLw9ZWhhXhcx7VNLNHne3MmJc6rp7zEm5NXe",
  "key17": "2V9fpbRguFCoFFd422mo93xJrAE7CvZaSLvGArD77s5DK28tnVEQHG9XosuVyzrQ5GiDhmrMzUoo1CyLY6VN5UEE",
  "key18": "SQwJFMmWuwxbmtYsXh6TsGXzLiGP1pXvfYWQJCs4Y9aKwg4ngTSp1SJ35SBBR6fftmJn5R1NBVkyxHUpzHbPVVW",
  "key19": "2MkhfoknDvYtJxDfHmk8WXZiamSC91JEy9vvXETG1b9cwC8YEdgSenY1fK22LX8RgE9RRr4Bnqer7cerZNcUZh65",
  "key20": "5b97pBRmVSHRzCNeqEGwzGGN6E2mWAXhrTeu18W5j6xgVxqZM5wkmnJ3PrmRKtbMQop6oQ5cupJneG3k74ursXG5",
  "key21": "9y4qKtXSQVz6zFeXdHEvmB11k8QtmnMePTdtzDEWsB6RPmKR9D4xz82E37r8SvhnycCpcTBRNAp2ifByfGxnLbH",
  "key22": "3phhPMRyosV7fD7b2WM6qwFmpEcdrpQ3iqCbmVJbAVJvndAge8U8PuzuFSketf2vm1zbhawz6AbzuhNBZf7PV9M3",
  "key23": "5RV3QLGUUuHJHkVXyHz1aCN7UTQ29uG5SCX4eAhM2iEjd4rD7auY8t3jNVu5yJTp2Hk9hAJ1cmfyKGfUxv21hc6P",
  "key24": "DQubBSCs5oEG7ThZHDYS6gsS5pKwWS5mKAsD6aUqjeZsYGW9HD1XoMREWgU8Wio1SEAck4xcYmMdJCtd2pp7bbn",
  "key25": "3Ttr3xgMCr8SSYF6M4wBYSi77yh15S8Wi1QXrfBfvPwCLsSfhenBLiDrb5iY9Y11KLqToudyyeN59JTYQEr6otV2",
  "key26": "2QduHws9VdTi4agPrjk95fGnPGa6AHAayXutznnNiQXaSmcUoV9totTKs1HEm7g5NacsbPHdeRbvGHsPDuVy7RJN",
  "key27": "3RdhSZdwGzUd3Zp5y9XsvPPp6o2AmnRECB5BebtoXNh9r5PSn11xXmekWfyAE2pUGULGa1vxKoEUSSXBn4WHDr2X",
  "key28": "4yWjdq3xKE4DQbkV4y8ay3gMTUm5anWVs1KAUnXULrWZGHWpL7Yci4pnNvjBGS4xgARBwDPtoZd4bgzmEW4awFLN",
  "key29": "2bhT6nF974452YkjHLp5TDeZn6uknSDqfkVXJ6fApH61sKscegrdSkgXK3Lvxc8FhknUSMCDSLFJVTnev8UkFa8H",
  "key30": "56tAiUc96Pv95dXDusvq3ByLAadAsTJfU5EzvWTNXsNQUvoL8KjKdUzS5uubb5HCbpQwmdCML3uLit4tp2bUSr4M",
  "key31": "4zTQvJuu7sQ9ntRgP737cdgFgKRumsYYSu83TVypYRFLBHgLXiFfQc6S2aaYoQLjDhzqKuXM3bCoV9W8bWUv2nji",
  "key32": "2n1oHU1EQxmKTphq9vN4wTfFf5tprQ9n5KHsqT4eYzApXLPUejLZ1TbGdsM6o1EYCTBn7dzJ4fgZWVaWmZoyPCq9",
  "key33": "zCRVYGjzjPXb1gSzQ1nFHdKKN82dX9Xd2XCFKGyh22qpPnX2pTNB9nebDDo7jQNyRFLJBGfy6hc6jn4KiJD1vnJ",
  "key34": "2gzuerBw5qZF7s5ibwdB3rhuSLBsiVCv1WL7YZafjFypafxWhsunQCTRfyrf6GpmrTkikHrCdRwk5ScXsEMgfsVF",
  "key35": "2aJQRc6bVoxSA93jiJnF26fZ7oKMVQrC7F6SrLq51PydwQMm9n8pXXxPSDy5yrUo8CQcRKUTNoDYJAqCvaCSimzi",
  "key36": "5N8eUpNquXy2cBiu6PuV84RN1YTxYfnd6dGyXidD3ZvLHfPYcuZLx75nP2oziwbTEPgPmoERd1qHD5f3J1sSin8L",
  "key37": "3Nje1tAnBKmj9bHsQx3EMufLwWpJF5JQQyroMifMzYC5R5DMbjuMn58bwSFvGiHJSgXwvfih47S5a3t8qyELiz1i",
  "key38": "2w6q2d9QaSbd2aQ1xghqndUGQpjk6VewMgPx4fpPgtaVskKNJ2x1hi46mgPyxrAPfvbHd7BYnu7TDbbooiv71nqM",
  "key39": "3zg13mupYNHKb93TRcxsVC32Ur8LswQ4GZtku8784HT4TWyfsGBQhrE3YTu6EGwctSRpcMBEnwzpCmzejByyMgb5",
  "key40": "3WbyaByD7TWq87W23bGJi9xWECzuRyRDn6jmNmEKkHtRW8sL89nN9744Hu6km6RKtxNB7TkxFDpYHCkuEPL9DJnG",
  "key41": "25ucoa1BSxCxderiWCA7woXyXk1MiUZbGhv2fGGT18874a1ZwjMkaT82XqTSXw9SGWsv817ni5yenSpYxtcaB4LG",
  "key42": "3dpWizugh16yZpvwoyhzyEMkdvZRqSAg4G8bGi1Fh8HY6uXKzvrH6SWJVsr54qwpNjTprJfzdgVG5NGU3RqVVxG2"
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
