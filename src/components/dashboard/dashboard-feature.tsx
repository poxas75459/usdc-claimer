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
    "TfBZK51UZhnxr7HCBB85ur6qcjbAP5kwKGj9UA3odmRWDuv8i4qHzYJ9WdYuUGZLborBC9HVHr8RMvHxZW9w7ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wV2qyJSbMzAvLqq1ZJDfBSV1oPU4eSEPTsDQGs2PYaYtyf1tPdY1pt1krwqDmRkxhKM5CaifrUHFeizZAr72Mv",
  "key1": "5AuNqnPL5eSEMX9rRNsZxk3h7gEdC2NGoX8o7ctVYcsRc6ojp7WAYsrmdPuoZCxCrnWGPbRkp4Ay1n8z75XbZbfL",
  "key2": "5eaPCtSoEGQsgK3HqFkqti7uwyQtPJD17CMmTs8h8km3T4JYD7QJnbCSSXPprtkgchvhR42qej5QgoghGTNLtY8d",
  "key3": "ek22XpjMRM8Q6NSjKvBkM6q6UwVgcmiQF9SYzd6rkeP9Bw9M6kSUeQxK69ZCFMB3RFjotAKVca6NNGPGpkNDNuE",
  "key4": "WQAMKXNLuxYwBJFKnZXKTzzdMfUWdK8p32N9bFY5TNhhMDFJfsSSPEQJyoft8oDaYiPoXUKWYSq9xKvmGqw151R",
  "key5": "4ZJ3SdPmLcsJQtUYA4JbfmkWzzZYmSSWdjz1TKhPw1LNHNendqreaSJaP7Z8LfbixL8f1TijkVQR2om7Rgrkhved",
  "key6": "2BerCePAc7HLeYD8rLGjikjig9W7Su4i1i1kCJBHdCY3HBzHsi9gSf5d5qFMkMv5wRzTB7bETPu9sfYMcCyoaD12",
  "key7": "21LfBPscgDzbJH8SEcAicpPiWXukMW8ptxb8H7eetu8SrAeHYoXBeKH4vDeWfwmioa1rtkHoueCxFhfcMzbUPvVd",
  "key8": "3ackckHH9aYHvZfwhbiFcnGCXwvxrehUa7Frt9qbrYoV9euCsZwuLVGgfSpZPFpzSmenDNV69cRyGd8z8vPSACdU",
  "key9": "3YoxF2njoNWUdoEukwv5XKt1nVwp59z3EkFP5DNEAVLMgod5vJuUD2bjGFmEMd7n21CPQ4x7AJzGFL1R8TEN6y1J",
  "key10": "2s4sUWTpYvetgccSyJPwASY8CPab8oVH8DH3JL9bYfr3Wi2LFUagzHTCAJ2kLjJzzyMw8HUuALSKviVEzMCWh9ez",
  "key11": "4f59wJpf2vVPjE39ZBvyugPFtuKTavwakMgkwS3gxrZUQFHyt4DGzzqmF5PRHzkQegg1aMRvRoVBJxCwMBKX37oc",
  "key12": "4hf4dXTjsBqJscw34HFdaJSax2AAdP6ju82HUde7YvzCXumKz75J7D5JAsfm6JBGmr2cDw8TBy9iKmEUU4c8fGUj",
  "key13": "62aREHF7ei3Lu3LsdERhMYZmGTXumeNoX7DfpfYANAPa3QQHVEDFPhVeiPuw4QyeXye9ZyZGZfiUaGfbTmz7ghPM",
  "key14": "3HXAEvmFKKyrVBZkHqoFMTG6J6u9e7ZyzFC9MjjMt1JswvK5uNTEPWGv1EAxp17DJN2k1ngH9oiLKoScsGmZBWWZ",
  "key15": "3n16NHfHCefqipCW6wQ17enHeBeT6Poqj4LJVhB9YE1NrPfKPb2ySgJGgTCXSe2dzLbkRKejyD3gizNYY64FCdWn",
  "key16": "5c2DpeQz1EKK3MrrpzjkAHGJDoYuhRaG239B54btfmeKum4DuZfuz9QeWY3m8m3gZFUvbqiSrRVntXZkv9fiFgw4",
  "key17": "3KrP7tvzp3wrRoobyQTfeKTGVYtWimpBSMnGdNx7dZDCjWZ3ygsUrs2UCvkuUsEyiBZPfXW3ZMvGHcvoQNsWDMpN",
  "key18": "2tAvR1fEicdCjgwZLGnr3Qs6iJXpf2yr6nHvzaK57uHfPEN1sQpyXiCvxRPhJdHWJ2jPrCQPuv4ND1JKzS8PWWnm",
  "key19": "5kYeNEdY4r1YF3xDEUP852VKDucH3iFmhSYKHsKxCFySM5jYYwkCsozxmTx4Q9ea26p3x7K5rR84eDvf4SBnWnzg",
  "key20": "2yksW2KcRLTVbj8KLE8kJTMWzHmszEnqnrQLWvqFiWD7Ex7KPfBxTj9sevkQVmJMbi1HPUNZo8JoJLu7XPCht1SX",
  "key21": "2m4o4WKGeuRqwLUEki3hVM6msaSuZxSpfnK9wcWGXohNDncXSYESmwjBX5g2gcL9neDj7FPUXDjHE5o2BMzu4tSy",
  "key22": "pLmof8XQ7cVuY5D5dmBZyotnHyPrpM5pzaTq1VWo32zZLBTgTcazAQJeghSssW78q81A3Jme3BGRx1hDpa7jkQ6",
  "key23": "5sFtFEppjbm2KGXBketfycckNagMhz6qk5gf82Vat2vXZue9REYn8i7DmeGEj8uuXhZ4occNJz1KxiPJQ5UY9FR8",
  "key24": "3AQWaXUgcnT5MYHh8h1BVVQ6e7UZG3Qexz2b7DAighMBcyiys6prPB91jqBJX2fCHstEbwC6LWAVrxxCJvN8Q2wA",
  "key25": "3JhV3xrEqQ251vcL4aSciLFRtZNbZu1CZ7xv62eAYBWXFjFXSqxRv8gqoxwZWPMUaros9rVpq7Fn9RphBkw6MWnz",
  "key26": "5zJpiKZKD4cn5h6N5cH9aGPZkztqw9KpBrT18RCkG2Dh9GbwnJJnZNWcEiZvWoAzpB985BFYoajxhr7x36UbYxCF",
  "key27": "4Y9fZY4tQ7dozH7CEUJKpV1GU1CPoWVxapb1vCD1WzNapVtM6QcqiV7JRzZr7fR7p5jwB8zkk5PqtXDE9iFBDPWN"
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
