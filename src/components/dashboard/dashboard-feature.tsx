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
    "2TGrKGBSw4DVDLReDDcDGLjEeuEKzQgnJZLjiQgvHqqxD6zJxW58erHQC9UxHzEfZTSEnXazn4KmUiJkTR14rndR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qa64V6m9gWTF8wRzEXyBVqbXSWGAcmtBcK9z4aB6Cs6zSXhg4VXxLxgRHB3RjL69Eja7qwcEL1Rh5WhqbhuLJBY",
  "key1": "2BuvvwGHvc4uhxSJkT1rYwqd5j5FjRGMuUMiRsik5aE1xNS29t4ND2x8JpW8sU7odDqDuGXvHzGnJfeWQp1Kc9vq",
  "key2": "4snPE9LDvMeuitjsuibQ1z2YqSrqd4nyctvekoX9aUkk4aN2WuQkFzxULqvtHfgN6hk2tMJzCUsfQrtFvyEgPPtV",
  "key3": "5p3DbmGR2t2mVqTUqMcBudPQFwzPysDkQxN87nYs1uA5ififNr6sLL72PZuq3yw1vD1hBWPm5ZmREEbv1VgboMJZ",
  "key4": "3afrmqEaQzuLknbmckof6hz1Bxdmqth7nXJtEj8hfRRRsXwZyqU6BVczVs9DmjLuGi1Rw9z4Qygh7p593sHHtJmp",
  "key5": "67ZLJjy1GQh8qmzf7PkcmsV68ey5aUDrFG9j4MeeV5Qjt9SQCLrkQtXKr7z3fUUKggr2KXotMiwFbXERfC2griNF",
  "key6": "2PrMqEM5mgk7yFghQ8v9t991ZXviiYpapGjhqKgngiWAaFaoro8BEyWT8V4Xhnqv86onWVj9DjnBb4hf7W8uGAEU",
  "key7": "BTktTHbS6JLhNqaB5fSz6jcxCWjA3QLBd1sVaHfJGgixjGE8vJvHrnqHvTne8shceHGkX32uv8KxRh1K8jTcSSC",
  "key8": "4XhrVJ1erp6fwwkNJtsowVo1DXef4p5TjsgDWP6rGdyVMt3uaZUmbEzK8RPSSLka14H5BGNWYGtAjGWzeCXWYVdY",
  "key9": "37Kg2in9ZrxnpR2AryjRLK5qWULS6JJNV88Aaoofp8pHpY86PctMv3Evvak5hTe6MRGP1xJZoSVvrvW8ugQdA56M",
  "key10": "4x2ZLcGfyeE5vB2Qh41zN4UTwY44kyomCBeq6vvUq7yybsFAoxCpFfN1vNg2QLuN9F8nYpuDqPY1tLW1iZjUZS2G",
  "key11": "gN5kdQ6Tv4MmgXgPjcLsie8CsTg4TMYE8Un3ZtwnhaQ9Y6EHLxtPezsQo9kZm2KudJyqMJ8C2YRVgceVeBjGk5q",
  "key12": "31pNYtQHXAyT8f7Bd2TiTfGYabgpqRZRUt7pSsNd28tamT1V9wdXP4919zJNB9QKgezZVFqtmcHmskUWcx8AqMAD",
  "key13": "3ULL16V9XTjK8hYP6dRgNYTKiFn9649KkLsNLf31jFUy3QQRvGAD23jbyaqhYB7in3ES9VzYgJtZjUByweVas1SH",
  "key14": "2B65TdfQV7YvkAs7FR6QjEm8hzJR8gsNxKh2DSGNbsixU3KEhzftvDWUZTDH6pJwff1Kev64bUSDXnLee58F5pSo",
  "key15": "36dbPdd5A1JCe83frdG5N4VFCU8w2b5AKj1brU7mnLv9dCC59mxmRqS8TCweN1DiXxQ5hQRpxDto32vMEjATbpAB",
  "key16": "62YmM9LqyvzK7QPVxeToRxCPop2dSdoPcGfTbZwrheCJDexLvNGPQzDC62K7AuTeoenG19VaV4oe9GwySMWDxjfN",
  "key17": "2ft7FRfX8P1TEKQHf7XWLrU5mxxUUy73gFCEyYooNenCnoBSPUMa97Fpd7GHWGbrzxNUk7uzqPMkqfYQf9d96x5C",
  "key18": "exRanroBertoF1e6vhiPoGBzepr3BxHRrD2svhanHJWw3hNubwRJU9P9pR4dotMHZCqT8bKr2JNU1oi6g74eVaR",
  "key19": "4VPZMpd5rnhjHrse9W5rrzModjfbBzsrRBPkTtWxtGtNyEzd5dgEVppuPgq8jR3BFwcNkTjkt9dp8qcAAmPHwS1c",
  "key20": "3XiRSVo3f78XfkSQmU4MmerUcDonYGNvSgAMwe75YZJEPTrFABo36uFNLzKUZgKHLauV9id31bMiL9H89qc8a5e6",
  "key21": "2bJshRKvjbaNKnbuDgUPbcetje442LQJ2s34gMW9FscREGAcpkQ6nUbaYbi9oB22kEd63nZ4mAkGaS5ZWffDSEB6",
  "key22": "5q4rSZKpCzMHqqJxsAWCXxahtgWNVHYr5fUfCXKRDTtpYH3UJ2hLL5Cd3V6wLGWLGyUE256fEEQsVgEGuvuDTkpn",
  "key23": "5qYzVVFuP95X4VFtXEkaaHEwAoXyjada9BsYgBqUZUWE1fxTA37cZNBr6rDggF4hJUvesazMWbmJpYGwVBbDBwu7",
  "key24": "4C85CEvLHTy6TQWiimqPqMjsqbWdpFYpWAdCL37MtbUBqSzjWf12vrm72fnxvTc2EsuyGpQhYYHAwpWZKdaibm4H",
  "key25": "43nFXuEn2UABUcVEAa4FotARkLc7TaQJTB9Zukc3Ed9BBxU1oPg78nJQgF7a6rhQNndjcD63oGxG1CkACMr91pHm",
  "key26": "5Ww4NEVCWPUgKnJdiuQWzoGrLTiwpk4Ey4JB5BxMZ9TY9mRp2oZr3XvMRgSgXnSjFLc2eHNL98MBb5Nck94uhb4M",
  "key27": "4mgaWFHD4FYW5fgLZonKLC4feCmj1os7TuhvGitbYNxjMNLhsqoa1bXa7L1GAEPfnfEA3ERN85oBUSDUYysTwUH3",
  "key28": "5h8hYxbacR2uG8JdnsXZhUsE11PYyvTKXPipgfS6zegUXK33qHyjCUVs3WX1b3LB5jFWeqczxdu16Crk3yPkRLgi",
  "key29": "44WWnxDES8rzqv8AEWQfvsAxK29EUhSm9ZXe3MZxbsow1zy1CLbEfmfNs4qzM61s1gxiBUk5o4nCabmHLYK3u1S4",
  "key30": "4FEMt5rXsy1oZmXx62FixXNni1aE362Cpc3XDuEEmjicb6E6QZwAsQcK5yP49R1v5B3zCstZfai5wvKvf3tj7ano",
  "key31": "3XJfkscPDdQzTPyvxVpxGBjjDAujEtymYa1Xhp1G6jWv4di7ULEUPMe7dturjoEFNoYKvq6BHP8HbWTKVXbT8Bnj",
  "key32": "ZJxzzUcNxAUJ1scxZDUJjuFfoK8aiXVcBqA7Mrsv6D3PvAHPDfw27jZLuR3pPgjvHxkV4bunU7tWd7fcs2i5X2s",
  "key33": "5rbwqhpnWYDCYpSzYmsZaU2svJ8dJPQpbDQLHCPCJDsSxM23DKHNbB5k4Tyi7qg5LDRqcaPdpLaPPtXZybYXwAar",
  "key34": "3kyF6A7ZCfaV5hai9BLTJo5GCZcjeRwDn8S2sgN7SJSvCm6SapsnvSaaPehbMutPrXHHR2uNQyHYFgoYSn5LmbFS",
  "key35": "5HZbkTg15ak2RBavTyVbivs1yzJKgiyLc2m7rUHL7h7ZNS31aUeT9TC3fHE9SF4hBNj5PdWp2pmGZqF7SqyWcLgn",
  "key36": "4sa6js3YaGe6Mx27Wg3h1K1HNCCrKmP8EHHQMAjEgXqQ9c32EmnV3PGMVr4euXQ8NwprzLkSYFdZcHKDQZYd2wjm"
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
