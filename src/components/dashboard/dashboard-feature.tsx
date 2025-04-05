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
    "3wPLzq8JKYdZt4A9kdGBxMWXJXA474LD2zJ7wtk4ra4m8FpABXJM6hPb4ix366Ffxvrdvvs6fFLoww3kiLKWikRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYUAYBekvtAqQUo1dYA62bpYMuMhetvzcUEhfZtWg1qdKHaSRhRLfyh7E7oCSbJ6EeYYNpARhvQVjCeyAsGcvZ3",
  "key1": "5VUZep2YLTCGMBRq8CpTWTGxCMCMyEfwKpoVXMXYqDVxW3duqSyW6A2V5cdQqRv1snfCFafUvG41PytSk9nZBqJz",
  "key2": "2o1hEeeiocFenge7kKiBPAFq9vx4i1RzsCeKBBaYdZRfWREmFWTNC2vLZ88YtpbU4Uk2K1biHnX1NaxVZfmk6g6d",
  "key3": "4vJjkty71qMeBGPVFUxFdV9uNreFXvihNR5f8yicafaLpZDo9CBf4ENK8gQc3RDLzsj9pzupcpRMsvf9zpabe9E7",
  "key4": "5nFfU54qXAVvd1xY9cGjAYYyQPNfKx9VzpeDpKeCCYBRGiKqyKbiAs9A1Z2qE3qTmc1WYYUf9PxiBTYNm9sazx5a",
  "key5": "619WeeKXrHrrfNAhmkA25ax3fjDwMuXLPQP3dWdxJdZohEgdLb6gisQRdS2hP6pci2Sa9zd9Qn2ctFdSVDHy6TeD",
  "key6": "5xm91taCfMKk9n1vG9JvFfwpArYtT8qH3tQmTM8xf9V1LjiH581tb4ztkT7dXWmZhwU7aChoc6AnRju2RM4B15wb",
  "key7": "5F4zrb7qv5LQtC8wT3oyxEndjfEaTRfbPfU1PiJCDwvo7MuLSCq8dkzZnqqhDLr3P4ohmCD1RjUSZYSuLoTofEV2",
  "key8": "4vxyNRu1H9y3jwqaiRTzHhvLuUgn7GDfZWNxWMKBqG82H9jRfzMkg5zArspCaaUEoDpF9y3A7XTehYz9zjHEnhjN",
  "key9": "2DWNZuayFJbtD41RWJFE5cA19MpNU6Nn6pSNWNVffbmQGNFpngYD54Q2CcqgHEJbMSJTPGpKAsEMTCJEXxV6Pfwd",
  "key10": "5XfkK2Qk6QEu14UhoLcHJc3LAjxdUdH59XBaSdx4PqANH8QUUhdgR1DgpKv3RzqTbY1MhiGbc7qU1KoAittp8noT",
  "key11": "2CZpTXgG5CeqwP9JTrp1tv78AcJ3CCex4eStXrgSfrTWTSA85jUy1TtexWWPm4fQYegPFj75riMnVzCU4H5aZUN6",
  "key12": "2BCYTQhrBVzXzT5BxqhPx3tjKws9qEzmioEXb629SxJKRPkdbh55PtmAQQtZmX3KDmS8DFxTZF3gsnE9jHtmHTmz",
  "key13": "5h9yjk4R8kpiY6AdMM6bFfA2MrN5orC1QUzmMrfqWJKivgGitnWcoTKG3Fznkg7MmQ3fTvWiNsaFEYyd4YpYCGJH",
  "key14": "5WifQd78WsxwSeeNLcECbD4wsR5znMaN4soZsab7zyFuyGogToxoJrrvRkQAS9FtWKviKcBkCo1WzHtirAmFD7qu",
  "key15": "3datSq5vkAJZzCs1M8pyCt3wzzz9dXEcP8ENjhkAQWdyadrqXsdojdRj6PdwhjeozTeSJGhEYGDnBT6auHJ2HKaF",
  "key16": "63Tpg6r7fXfWcpxcS7GdbPBZt6MS47hKqrpQ2bNDqL9m3ovtFGxDqKZ244WVNmC28KqFwvooqcrVNLB3cdtpYuY5",
  "key17": "32UWo25D4mRVBkj3HdLgkYKkjVutffnNzdfH1u4pasoTAawo6iXdX5QRxKfuaTXRtkzDS4b1uArW5onaYeqNftcS",
  "key18": "4eQrkKpBEDQMBLb4vrawgK9uW5ZdnTikmHt4ekmoYobDdo7oL2vjW7tgTYFE7DojXSwNMHbL6D1s12VZ8rU73WBt",
  "key19": "5K3bv5JJfAr5vuUTfadUbDx1GTQ19HEVTYLDKM4NPT1fKB4hJ1pEVBdziLu5yh8x4fsSAiERaRXNhHyXPtPr2b8H",
  "key20": "CBdMR5CfvwJx45aaEgjjZj7QJuJEfsk9isQcwEDiHrkr5cACTvysmDDVa5HTr4oi9fa4CJWHsMfnGncnybXRPQc",
  "key21": "3aeUbQZDVa3EUkyKsgYKSvK7PoJGpEJRrvfiD59ZYcA7xamR6kvScw4t7kXrM3LcpuydWXPJ5gZ1bv1ETaQPnDUS",
  "key22": "5UbvFicyU3bo2cQCvzcgp6AWZ13VJRKuJ8Bv9CchLGLwQsLLJawHopZmRaWNhLboifLQkv1ZK5PA2mMFstMJ4FTZ",
  "key23": "rjGqnbYJLuokRJAZFic9QsWM37PrusgwBBdkXR3uQtL2ahGfkpC5jtcKwuQKSqRTyheZ8Xi2HZC54Hzq52D8Jei",
  "key24": "APGkj7nyp65KTsmbgXMdAcvNC4nQqcMg7Gc6dGMh6cxPCazVXW9D1k7Co67sK282Dp7SFS9m5QZQfAKs72bQerk",
  "key25": "JG34b7irFHAzK7W6itrzzFDng4JsnFKQRFgDxSygndhRWVQvmGLCVMUeV4yU8aAd734LBghuLQzDMQtHGnU5gGi",
  "key26": "5EaVV6mpLS5uFhXpZF3XEPpo76psEL6NeymWEc2toGx628AeKgW2tRc2BHfexZy6SfeuKpFGacsqMNguVrjMKRy6",
  "key27": "2wCtyB12dHx6RNeSRoTyLrES6dqrJv8BAkBn6tZ82vda1CgVFq38qE8hNgN1x1vDcjm77VZPbvRHRS6V98VM4i4q",
  "key28": "vE7aNWtKpKFuYJTRtfqJhgqEJ9aePvPkx5YzBUwts9KtApGZpy5KW8XVxTzk4CyryxmuVtt4cYDRXvuMgXQW1AG",
  "key29": "526urU6mmVfRYacJYXUEuCcC1CQcLTKxzU5Cyc3dw9DNCvFrobK9poZ14QPbFJ9k91pULgkPLGdjNUDh8TLbHzLZ",
  "key30": "3WarVx17eDcazhwsjE3Fuq5jZ4M9tLpCu6xjgp5BQhMmLF9ndPWwgpjc1pv3QxQUb8zUwAwK19ngLcm5exDsDxah",
  "key31": "bjjy12LWWNuZgJrkYn1ebBmXnVaS6M2NZo7y94jaGGgdVvQJcLpQz5LVJzPziEmoyqhQjd9r2mm5mMJTVwhghiT",
  "key32": "24Fjx1zNZ1khUjqCDd7qe7373VLLLsdPk8srRR6gCyfS9MkLkr4xA1b5gCAfkuntkWtK1XoyGgiWXqcLPfkkqoUe",
  "key33": "5RyTgXqtUFmLwWdoGFXMenGFcqvtY8J2mVCjBdzz27Z2FRMPGZNTkABQzLdd4Cc5qXb7rWAtQf8rgdcjpWNwnf9w",
  "key34": "4nWUMk7YwVaTWBc5VGcDKVFj8eqWzUBDbXcrr5TaJ1byrhhHbgGUykXt6D3oWmpP4CcuhVk9pMz9oX9A6VbLshDe",
  "key35": "3wBqVSyd7fnWuLdFw9s3g7v6KEvh164Akt3Jq37cT11TZbfSDpyLoWyCo6NFcVYvChj7ySbqzH1uM91dfhEmPBzP",
  "key36": "48grVtNeVUipuy4qKxM9kFpPjyx1AU1apGqL1gvWu4SH6dPGYVMzDbAK8LeKCyNvddfAJRrPc56ciNbLocp5qvFP",
  "key37": "66P3PBfXGtnBjqj6pamJZ3QvtZ47DdfSMKBRkJVCgtZvwNVm55pXfzVj6rXQ7yoevuPNtHBYkcNZYNttdjbFkHth",
  "key38": "y8qsnZWV9Wyet3Wp44FvqG3rf92Bog5hFkBnzxvkspPTG8K5xRzfUL4HtAhSrrWbT6NWUFCdWqZ8TwrnYn4KECa",
  "key39": "2bdPH52BvZDZJ5Frb2KFmwhV9WT3V3YUxHzyvxBK4T2NZFbPWEX3rBbNfh6y7ePAXKzLb5aTgDqFx8AQwDJqo5Ju",
  "key40": "5ejf3FJLSLYAyQRVFzwTgYvTswGNbBkhoKnBazAisr3GKWxM78wthEb2W42oiV6qFRqoeKLRnCfjLQyUaziJCqJZ",
  "key41": "3WG2n1BufbW43oV9sbXNXtZymqYj4XhPW2XjBPYsnbZyNnPnQTqrUTU3UCZFbSAiJMxZF13AZnVkVBrR9M3ZzyPn",
  "key42": "2kDMWfM7ZWwhhfxyUHbJH72AAgXpBFN6996JERsqFzHoTs2YHN1tDUpBRYNZBkyQbkMXSmdPQiD3yMq3nRmwT3om",
  "key43": "2WGJqKuqk4SCgUUkU3uMJtyotr8F2RxJwKTZg7F9vfztHVzmHypAqPW3MEH65wxLcA55nSZmMZYrJX8y2N6RVnWu"
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
