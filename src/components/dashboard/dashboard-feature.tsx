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
    "5bK6ogSzcWkyUFu1ZL8MkRBn32yG9mbuYnVTzNRsKiHx9z38dnMfw8Vd6reKFwddvhqLgGyu8KGMGyVy8VQKop1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEyK5LPSBsecJddUKpoKvSW5V9J5ott8e7wUAEJt8buKpEsTPmiSHSd4fu4cZ1SNnTRgG5NqASPXkiBR6gF7gmY",
  "key1": "2xCoz3R83rcX52TU1UVu81VVExs7uYr789FDttFXKrBy2YvqFspPjViCGLXJvoG9se3kc7FYqLypFi3zjKJRXCvC",
  "key2": "5K89Bw5Ew8D2hfuyAa7FsPK7giUJo2g2V6Uf6xztYgosWV69XPbvUqv2bRVqxSE3raFKdqr4HcwBtvChduFMyxk3",
  "key3": "4LSWRHETwYeTVQYDgjBgu4xXThdH97TMSjPSSG8zf2ncouXm2rykjBJDVZiWNnfkVowaccdqAm3xTWLQnc2uME3w",
  "key4": "4ztHH7gHKSVip3XdCoiRL4wbzfqMG6F9MRQuFGzNVVMEkxbCLoob2gkGNpNyGfHvZ9gj3yKSrjdQTUeKF81KovMm",
  "key5": "3u9C4WEWjpkdgtSN95dBGULYEpmXjW2u2KBkaiqJJoiskkDLFvVbx5jv4KxNNhFEdadps7xDzC7tV2DpqapSSFoh",
  "key6": "2QgB48guziLRa9oTUN4dPaFFRc1dDW1aWJEtrRHEw93BgFDqR4bFBJKvmdvNQ8CS3uyaj5FNLUpTzbKrePsu4QXp",
  "key7": "JvcE9yG6CGVGqcjmF4jaPCUmpTd9BRRovutfFEC4AntZTC3PQYsk3YDT3XsY2zfKH6H6NtYrX8d4zf7ucGKcLAb",
  "key8": "Nhihdav5wn3qrz3LgGr37LVwex33VtS5QnPo49SeWut4GkofLzKnCv3tAwe63qyBtjh1RVgUaGHxqJmXMELF5bX",
  "key9": "2pZjGJbh3PvFdmDxUoNzM7BoU8VgpdgnwMjB2SLJPQcgep17r59dR495npREazmRgj2TqnBrfn7EcVEj4RMrDPVt",
  "key10": "3BciaTnv3uWE7vUtXnnCRoh4McXUQM3Se6JFgS5X39EtArwHxXHjBVTvARDyHJZdoKhsPb4jJHNwPnY1nRDXRqxd",
  "key11": "jZWP2FFZzfNyxY2cXCnuNxce3EGfYdcxZcSXqyE95Pfmm1zpvhN5wB55zcWs6rZHezhd42byu7CtNboJhVuvFES",
  "key12": "faLqoUmxTowMpYNRfpuSzhYLUYnUezWmZzbhkeAhVdSdB4rM4ySduunD6LejwfNsiprNavXLATbVdAz4ShXcrtY",
  "key13": "EbMH7tBWDW7Z777yNZoBFhZB4C25DqB2GYNSNRXPLaMK6y4ajf5SpM88CVkbKYH7iwxHsVVvbajLhRgcW3uartF",
  "key14": "UkFJP9UutKUEucEEoNqEov4gu91QEp1VFkosTh6MJLBYzNz68x6PgfyzcYn4x4tJvLkY4PAAnvtuxsWdG5UEhcJ",
  "key15": "67ehgNMqkKTzMbcPvdAfs7cJr1xrFKN6NDwRhQduR4etoS3yLaPcxzUGBCCjJ2putaRJMAHh4VDeoYBBNMkoyjQu",
  "key16": "4ZPsRZZfYTGL5G4EGJ4ADX7xhpPrx9dxMhNozzcu8XFUGp6Q3pE9q8nsoVRtVMrwDfa92rSGET26cBFvWhoDpM6v",
  "key17": "YaWU7fVAFzzah8bLtgVS5iqTWzAEQ4ync6XH9KziCpiBcNX1obToHxGKi634wGGHTd4QvpgWi78A3tyz362h1Kb",
  "key18": "22hvAftQpnWhG2af8KasKcaY8BnHNESWZhVF5fT3xStQP1W3d3juCVjS4CxL8F4geBYgXehP6h96vKDwfCFKL3o1",
  "key19": "67pv5epQeRQRGNLzwx27KdrPhEaEvoaef1ckV2EAGXSnDvNDrktNknHnUxs7hdZEGqgjV39TpVkw8UUqifuxXZqP",
  "key20": "4cJqR8WUiGSJ8t54ePH3VSFEiP6WHRAo34mPDs9rPcz95TYS7t7ri5j32r32ZY8a7iZWSY37uTBTGBLuHDt8uZvJ",
  "key21": "2cCWv6ZMT5kTybQ2ezUwV5eSc5GuuvoEN4dRU1Du3X6qtMJNGuME4jev9LMZ45RW6ve6XhjFq6wFN46Bhd5GYkeK",
  "key22": "eYygUm5ZRJhxx99dYfLMiZ4JHCyYSxmWD1PZUrwrvYAgbucFb3f8iNKtax819WitmoHWBuSLUWyNnMWkdJeTb9G",
  "key23": "3KML5QeSxJu7s8szwXpWiC6D6JEGXLN1MRb8VDEY3BFLwesNfmTW537ku8TziEMUG8swaHimbWqehjGthCoB5nRs",
  "key24": "EL3GAUoaYbSw8tUC1YgCVyHa1jm9sSq9NhNWArsEz4sKJKJmdpkexF4uSy487kMU8F85sZgNVgCsekkBGqqbzXe"
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
