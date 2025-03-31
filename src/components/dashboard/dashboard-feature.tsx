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
    "3tzGY4pQhcNGTEKf1HXMGT1gW49tvzb6785L3ZXt5VxJBxqtPvW3wjELFtXywjkSfp2dj9Rz3yoZEs91UYUTxWcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hiWTHno2c1v9mCCjue47M48NYuHrnsRPBP5q5z9VFsmcRbayTsBiqY5Fx3ki85wgTUPMaK6QbcVazZgFRUKUcRP",
  "key1": "2yzhEEXgVF77s6ndyCaArEcttDoPNc7miCKwf1HxTmPDfZRAWVc1XfD5p6ym4RmcTDyRE6Xe687Regk3n4WgVMH4",
  "key2": "28v1scE5CYK1HvLx7tF9FTav55qGbku2cf7Nz5kfh9556eiF5RkAuLdTHnkxvALotQB1htP2o7cDftrk9vC4gBT3",
  "key3": "VXgYxvdq41UHhMpYhHb3cKw5Erd8BXDqYW8SFW3enC9VR46FZX9D5Q79kg2yrG9Prm8UHkSb2VBM196BayMdkKA",
  "key4": "371aYB9vnozqLEZVHkbm4Jpq2UqFYCQvz52cVJFxY3APSWaNABGUmEmkTndanjZFpK6S2DiGYBTSYCjvRs1wtbhD",
  "key5": "5EeVQfe8UjyrCNCxaY6KB2XVJTRHGBnio83U9c6XzFmrKH5dhSKkBLb3LihCRsx8ZZg3p9vXqdExv8WyGa2n69rd",
  "key6": "EWYn7fM4bQcvAAngPrhGMcxETPeEukDTpkPq2eJicotp9vmBzHQisYJs39zt6ARtDoaensxAgG6us1pGGdKcy1A",
  "key7": "3c9vjmxdy4GmQDXLAa8QXw6U1ye9tx8BW3iD61u5bawBtFNQgzcDxwChUcFG33cGPn2LqcgpVy1EnUvazzSbBNFG",
  "key8": "4FduALbJb3bzTkFmbGy4dEfhFSV9SwA6GgdTVx2D2Gd9uMtGfjoiFDjpLF6nJetHgWMr6RorkUBFH1zpjaiSfbpi",
  "key9": "24ofwz8bUY13HRm4skHFkAevkiECjsQgAgwS9Dv9pAM2V5Qw9pyNUotcFEKrmjSiwdAwEqtqdNb3kj5NGCwjYUS1",
  "key10": "3R2Nq9LS6EXKVXKdyn9dRJYVPj54A3mw3WgwCQHDiL6ifgR4oX5Qs6WDzAw1R58rfs8ABLFuvvdJQ1qqy2486ZUG",
  "key11": "6s2z4XU9hV2FwyoAbxaW8XGzpnLHg3ZPvtNKRGpxSs826umjqMKZAw2qQmWBBF1bfToF5tjokYX3KkiswCYXPtG",
  "key12": "2oThUQXBCT7PMENHotjgbeN9boMW2A7WYVE348eW54tFGDhgSdDspWC59ZboYWVPzuSbzxiL9Q38vPvoJ69n5MHD",
  "key13": "GDaMBzMKYPqBqL5RKzhfkm8eAs1FmLaVP6dJtCzpB7Bi4ras69Z2yg1Q51uPnEvZadcSsw45iPWBMqmzKPUhQrR",
  "key14": "247bKYxB3UmYU4R7pvEjvvn6FqdDmgNfufh2EPGfeHKkxr2AUwidMNtoekUNoL34CMUovUG7QEveavRHNscdSvjd",
  "key15": "4M99uzbtqURH64VVqsZpdwmxB21XpDUiUDxM8BHoNcVwECYDpJWwcPgnibge6E3qzjkkAmug9byj7GyZ7rCRdqBC",
  "key16": "5NSJgHZg8EXqKacYXgLT7mMUAgYMDQM16NaHhoFyxeECe1rQJRVCcYeWK9jtQ4mSTood9m4XhJbzM75GA7bsD1M1",
  "key17": "4T3a3WmkPiF6T5BcWp5ann16ncRauTfsfsrDJnkxRsAHt18NW1f8LEqwjJvP4NDbUCktBSpvfQFLKNTUZHXGGWRS",
  "key18": "346VNXUN7GZD55Tj9cYav8wDtua7e5MHS85ZA4h5kFzJvQgYVWttoRmRvfPgRaf8Z6H8AyFe6AqDj1pKZj8xDtYC",
  "key19": "2RpZ48WqXNFZraotQFEx8Z5W1ifJb6ubQ3NjSDrVAW7hcmCtDNS67jDmRiMQMQYsWoXj6m9yFpZEYxWeyUYfjwez",
  "key20": "5yJmFV6wyfmU2QX4n3n3PcqXU7idAfdvDBdAvMVP8nbUjPPGv7LPN6zov2CYsPFCH8VR98B8rjB9HCxFY2qBhjCL",
  "key21": "2bk63jaNWmPcSDggLPoo3XxggyuGLCGnT6mMntgPTLABa9HzB4VHYDTAa83gqNuvKBPEGe7hTxCq6H1KtdF9JVL1",
  "key22": "3s3Q8e82RNjmZn7HKAYXiBuGjg9yPAnLxhNnXmBgmaAoQ5FmQDkr7oBW6KhPRpys1ho2wiJa5QuTxTgpTwAEbuqw",
  "key23": "eDEq2MAgvhsvNWH8KDb7Sp78yExPi4KZbTEgphD4ppbzM4xCxjxgyAL9VTdMFkkbefRPagn9985yJG2c5qNnNFD",
  "key24": "S7fXLL76LjEvyZvyD1yVu9HibAU2ohpqJvprPzzJiuXrSedVeyzEsA6u9ki3FZGoU6Bzu2NkAL5beRZKtCLaLDH",
  "key25": "61KpdKAAaDBBpYq87pqnQKPxAS8WXwLi6o8Enh1VfvT8voQcwjqAQ4w9NLyB8hZeNa8DfMDUyV3a5YESDhH2cxVb",
  "key26": "4YbujKyhrUE6qzGNG443jwxKjPiyWKmF9QCcdtwE5qeUZWZMJXnqMzqxN2MRrDUJx6hhAAWFhq1a2vHqXaaEwQNP",
  "key27": "2tbCQeXkcuqYPriLJX5XWw8zkKCwQv9z8BpoXg1GJDgX3Dkg6Ta2h1JXFfDiFC79kWW38Qe3Pur1J6dvXLrPCSoS",
  "key28": "2obTcTDYMT9K568LQgLJy6Sc1wVUUm27b5JvhwgARixmqcWWtmq2MJu8baNJidxAcTX9BLgaosURGfpGsMwDDUuD",
  "key29": "YBrrsckJmCch2Hyjh71V6T1qT9BwBpSx17ExCt1RFnfNobVm1ddUCgJv6tLSDWszuGZUkfJW5giNZfJrKaW33Qr"
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
