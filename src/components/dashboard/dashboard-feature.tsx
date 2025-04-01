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
    "441c2xz7oNiPZawcGPDXDbG2W2aC8DS6Ju1ewxUQ7d2bH8APFV3CzupBULkwQJrwqRGMyuVnScR48NGSQ3ZNf7rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwR1qPvBsUtR36LhQbtw9qeGpzJZi1v88GEPj2Virn981ML6TtxbS73eijFdRoKmufDxcdaFj1jYajbw65fx5Zj",
  "key1": "21gg7qBq6q6ygPyencREtBGr3vFu1e7XkW1yDGRspnvB84SWSpLfyvC5Kfc2DhdKAF5e8LAaCRqzWcrRi81s6D4D",
  "key2": "5ssTPb5CghbnDEHXSSiUfN498dRzHA4LEjRPkzf9UN8QakvVPBVng8HGk8pTAHEDugryUX48PVeerLJ6Sh48Bv28",
  "key3": "EvGUqRUkbQxxbVF3iennsjM74U2pKinsSAU8m8hVivRmsToSiX6VhHc8jMvF6HfaR5rmujYcr5aoPsmb6bVWMf4",
  "key4": "2cyGWDtNdatGFFJWjEEd97wR563p3RYR1YkU4nbZFioJRTE3gYJns7TS2GhvoBWRaqsqdzFTpK4YsB9CTEuR3qRV",
  "key5": "5VEYn1tsQVf2SAnU2C869Ns93whvjGLkTrBqTeJ9NCov6NAR7NCV4SKH2recDeu6LTKSWebyCs79vjFv8Jm7E7Go",
  "key6": "2dpkt3ncFEHcJvXMAeAk3b6NVr7xfSek8hER1K7HqKpfYBQuwNXLJAbqanstqMk9xCi47NLc8tGBQb1VLGogvDEM",
  "key7": "45XnmjGBHv9XD1BoSC9ZuRgqZwxis9K8UiW8CiqKSdsFpBNGmccZdShzXo9uTajNZGL4UqGAu7XTWCttK3MSLWmh",
  "key8": "3RXBRJud65nVFrZzCq93ruNijwqu7rdTazGMirzPLwYK4HPwNK64LqFV5qBHv4X7BfttE4Njrf9QjUypocnRowB8",
  "key9": "4HQ5KbGoFUgLCi832ML1btDZjGZbW2sxRz87Xems672YrfSS1YH7Nd91oFEoc1kMVcFahJaRxtjmN1Edaauwwf4M",
  "key10": "32CTdWvFDsXJUAQSejKyNSj2Hx4uYnMHjmZy2h5inyuar7qy7QhqLaRSVVCGfdCtFNDhtAHPVzWKg5vd6NcV43w8",
  "key11": "3RuE6U6saLJzmDSGrZbiHGVPikmigcS6fymJFBUW2sRLnsDadH7KCortiFqWhKaEs6VY5xRWCNnZSSTDgUZg5ija",
  "key12": "5T7bJ4Y9r9zsLSKNqgw39w5Be733ZASMT9eNzeRPhEbxXcwc8inPBntNVhf1zyEtK3XZQQyfDxaRj1w7JCWuXyAt",
  "key13": "5Yfcekm1rskDEEmCKKcBRYUCUYDDvBRVPFrmm22jPobN6wTKhoxeAprpgZB8baAUicPx7AmUMoAfR9tAw9wb5TD5",
  "key14": "5CYWeXHmDr2hy4MZw6eckkKtHTQh3CVE2X8dE2Byp2PcaxN8QMwYVemmP5RNMjttsJrQGaxMMEsWNj6UewLpy6R5",
  "key15": "4AEXbvzk1ve6f5BfSkaVVg3iJtbpJELSZzBjUpVMqmFeriiVXX1XhDMyLAVXjHJWH5idX7KRncZArvi5aCMBptA",
  "key16": "2uFfjYH3W5RUMRFXPJUVXuMPVLPeKYMF2rZvLnhTvr6o5Mm8vzoc16msJ9Sb2JWsrQT9hxo9qrTiJ3E8r3GzUjVg",
  "key17": "4MmydnHhCzjGFo6i26b6rJQgm6ejMhpPNhLxppK3qePxdZZCSay6JY8kGGhSMg5LWxmSmhDZZo8TBqzCrwdE4QqV",
  "key18": "2LLVH4Ln5SzC4SdjkpyVfBEHoMHryhudF8mLzW6A4W54yi8oyVnN7K4kcAGQ5kfjpdxN4cgaUW8hW95t36FPMqkU",
  "key19": "4qHjGduz3aBRcES2GsJLKf282pVzv7CyCkEcUcfNT2ZG5SdwWXw33Vgsm5jjgJrwC6189WBeaYS12jdnnRZ8i8Ha",
  "key20": "2vf5oUa3cAEhD6ZZuehaSUrbfVEEwtLH4nZDDPpKKMJXnYjH5uMq2wobWgG3ztJrJqf5aAqDo9qEWJiBwiABkK2G",
  "key21": "5WXFd91fU8ebZV8kHYQBPiUj6BNSK7xAGSnGKjbpX1kgD1Wxnit5BjZ5fnanxt8UPzNwvhddf5a3FjPJye8xhV9U",
  "key22": "m3QAntkj7kgjn2aTXVJWnFxnDhSo7cTMmZ3D2Wu9BuQRFA1tN8TsnA1YdmRBSEkCbZsR2mmqph7V1PKUwA5VJv6",
  "key23": "2sScxZ4uiev6AjoDJYdkk3rUN9PgJzaWfsqLRymj4JZkrQG2EjAW18tUECiSWLUUch2Ld6FMFKtscNDHxnssJg3h",
  "key24": "5MNvWqK9d8iN96jeiqVgnhJTTPU71aQNqof5TGTxneaD8e9dNmMaLJEr3QyMuPJhjNRz8oQum982seoFBCMDqf6a",
  "key25": "RFZsHXCdS2VZb7hs42QohmmSTVLq8d7BMdKfpqyasWyK6PDutzNXhEFnTcXc3SgAhXsFuwshuqdTCBeHSLYWKEM",
  "key26": "LNLQdDWc2APgE4b93GxiFJBt98UgHdmkSndTcewuubZXxpURmmKV4kbRGewHd8gCSHCcYApjQp6dBgtuZneQ5J4",
  "key27": "46h9EMGkjxXKumcj1pXJwGpogq2Lj78eAggrjkppbBRAFcvvjgG9uwosrdX8kCCDTGGrccYNQZDsYhUjezPqSktD",
  "key28": "46Eu2L5gyVRKHBLBZNtfLawdTfxRPDwg6DmXYKg1SWVRjSAJiQnYYEJXWxYiGFkYAfDjtPZCeDX1XJHxUt2CgQhY"
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
