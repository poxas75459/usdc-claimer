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
    "2zueyAaJC8Rj964YQjS4uKxuQtvzPAwWsrUEx7z1Rwctz4aZ29CnjcxKuNypDHMdm26Yko98Twnv4D9t7cGgsMiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPHWKBE5UYBmt5gi7e8WzE9ypaaGaAVHfKLXiVEABs2UMwZS4QzBidJREkfG2rdMezUZs6vsFu6Aq4nUtdhXMy2",
  "key1": "55aMCzVNiWM11RjDSjJ3xghHxgMu68N6AEVAtkUPhzW6xKAnF5S3yJUCc7fUxGkAU6SKrc7raBcP6vWgXztqAvy1",
  "key2": "33zosmtfk69pRaqp33EKvdBoVJ5uwxnyMuK72c6QH4ZCqBHkmQasuTMWSAw1kpTABAyMgsGfU5di9c1JB43QwmpM",
  "key3": "5pXmDE67iLyWWwpM7VjhdkcteQU3tpXFQd4yoQUtEHPNeSN3yL9Sb46cLZmXdmjruVBnzwrG6s2TubXP12vAKbBz",
  "key4": "5Jh6tTvvAPtGU1H6hinK2oKUNpWU8K37xQ1oNpTxGnwe3AR7Pir6zLggRnyikc4tjaGcCtZa85ctfV534oaxdL6k",
  "key5": "3aMDR26m7oxueDq5BeoMj2xprju2SNWd1hGihay7Fpn2epeSUaqCRXk9UNvF9xAbE6mssjww3Y87mAC6T9fUcsQV",
  "key6": "45U1mpZZnKXUPRcGQqm2rW2pfjDt8TXsKVDwrauZQwQNxZcUuRm9Xk2A6RMRzFGzHnQUhLMxfnn4nwQQu18FZmxA",
  "key7": "MysYNMrCPK3diDvMoFZBwokjmqN6K5CCty9C14uhZjQ8fmnfGH3zYgEs9HpiSAHmkghYEW5C2oYjQNpX9Nt8RYy",
  "key8": "2z2SUJozVT5HxYJVYDPpKz5CzYDbZGn7yeQuB4Arfg8W9kTtsU16LK6TdyUkSka7QHZPbYyHCZa9yvcrYaz4ewvS",
  "key9": "2ZnNyFinsYf3Wjmyafdn74SSmA4giMAdPD28qz1Euee3dzHX7Wi2JWQgkVo9vHkQuKHnRPLi2FkxrAY5QWgSosh2",
  "key10": "2BQUVxtRof81vwKRs6PRKjK3TFyv8DjRnkF17AJer8V4t3yJyet4nbHW6c165wqPAvnHNQZnerpcAXbnbpCUrADo",
  "key11": "42v36CsafcAWxxNt8CePkqQK8Gh1ioJYguu2Wpx8yvDrExA9RQLE75PM9hGV2LQC3eSbKUbhUqHsQmLcwDjtWRTi",
  "key12": "4LGJ1KC1HBK7bWXhjRqbXncv11LTHNWxcjxJ8ZN64dpnujYYeJuY1GePHE3wRUfo8LXnDJFgK4ZZobrqFVzJVaoB",
  "key13": "5DvMwnh5cgHhtHoLeBFsyZjfUXDTK4rzRhiPQ8u9e1zdLMk5TCci2csV17pxxRCMfVznpFyDwPQmJ1TkciwcSKBu",
  "key14": "2JEvzRBARcqJFmJWtyVF4SwsaLSbjiPZ47fxqtvGjVnc3sMJtWnxcbiEV5tuUjSSFGjBBvz2Y2dg9DvkER9haKYf",
  "key15": "53XSAgSMaTeGP7xdesxyeVMzgwUjBAzz7LaV9vsWs1Nugcr83CHxPzuM69njHRvpgRvFzQFRPQyA62ztyLRajgPP",
  "key16": "4WE4Gtx5yAzRR5FHigLbM3snmH2yAHcoUJKJgs6YTa5JAMayiezosdWwuMiv4fYQxii7gsjTAtwRLQsnh3D5Tum2",
  "key17": "4owG84YXZpjYDGYTesXkfDk7FKidBEBErHh3NegWUx9coqE8hwL1CGsQJzDXZX6F43mzbnDbQctCE51stvdnsq5f",
  "key18": "2X8azZ2GjkoSP6oVgWRKktgxNohef7mX3AD6Dus7Ceky4njVkMb8GAL6CB8xhJH9yVke5jnWaFcLdgCTPQGwpo3p",
  "key19": "4BDCP44SuSKaoD5fQb1MbBhjhNQG2wSXLzz5vhJQgp64Wb3sCYingJRGeea5Atxg7hfVMhPtoybV89UehSuJTC1s",
  "key20": "4LzmiVrmg5mmNkRDdxCzTVAt4vP2jFWCkztsgf6LiWXgdW89rbMFSDRcV46GP5AiNw3c6199uuCVqVK39LFC8ZoJ",
  "key21": "4t5AojqWbFj4vQ4NC5bmXqZucpsRQuWDmR9N3dMbm4TSX7KnuG9oKGjsZMAAdmZfE2v2ogSDkMBBXTQRV4LDmTaJ",
  "key22": "TZGQSLH86dKqyspGM2n7pNGSCRjsmxksDA2vqnSjbUNhyD7UmzHYtLj6SzkHAxP7hYGzrN3L1N47tkunUJMHjhC",
  "key23": "4bdikb8MMf9DTqVMzoNK5sNMFRFCvhMZdbvWm5M6g5XRLi51VA4aCKsUubmpFsY7QktjatRNNzCcakiLMp9Wqrmw",
  "key24": "366KS6dYZLNzNGDpBvyNdretzJbL9FN9TNBh8qzuZoPLHibkNg4wSMEewBY9wF4dbAg6gDTRAhbpcuketg6fNtmk"
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
