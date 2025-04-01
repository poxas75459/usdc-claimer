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
    "37NGd4tm4Q3FBvpNrZZ2qk3d47Ejggtfj8aB8NgXSt78UwvqSDiyP97gmU6S8WJv7bpDdhD6YHY8srNhi2tpxPek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TKqHfrpFmJ6U1VLi7yjKqHuUgmoJxKG7KHhuF9LDVg1os5bFZPcX8QZZuZUR1LBz57sEMy7PurzZGa71T4BzZp",
  "key1": "4PV2F8FmubbZEdgj5kLS1Vq9paMuhAxPwkHd5UZaLQa8rFXdVbQ7R5k1Mg99qf4covfdqLqQXATFYFsd2isySAvn",
  "key2": "4hd5JzmTUTTRJANpwSnRChfYSf4BnfGgJKKDoutCcjCjGGWbToMjbni8QeYBb1CZoeXi79LDPmeLakSZrNcvwWuB",
  "key3": "65NEn8pyjTzatwdNcMjdGi873iD7aTjJjJvg7f1s9fHzpQ5AuYZB1dqRtQ35mcTaA3qCEo4MKSAjdaPEZCYYk6ys",
  "key4": "3aDT21gYhjFwrH6md2ndZXundNZqJvfDmRex39nEghJdu5ByTt5C5eduRtY1wkwjAZrRbqYMhS3GRY61pEuePPvf",
  "key5": "3MNW5o9fwCkJRPuX6GFwNkaEZYbdC7fSe7bn2sE67wHuNqnL8UaYpqzKYBLT5XvJkdJ4fJLeRi7LcLYKXn6ZPmJb",
  "key6": "2arVdWHHHH1QLXVmGdQgwsGun311YZJaTXmWoBL1cT4PGPVpSgq2k4Tic2SUTRx6wzsTYC1wvf6zSWo2BQTDZktL",
  "key7": "2CetfSRxHLRuoWDXGrVms92zW5qpJ785DpF9veQ4g38z3RCvBxHGk3EPg3KxBUDopaRTX4DgS66TxmwS6xJuH8Aj",
  "key8": "4xTNyV8AMzKxyVqvsv37e7aJ3cuAYufNWdV2AffSUZPc4Syd1ubkrskZBVnaR8W89dazxcdeHSbyWJ8inxr6UAUj",
  "key9": "5RtukBoABCKv4K2q2NaQJECVi1aCQdtwMQfcKkcktFWzw4kZ5ruRdknYLjXVLSo55EeYjjkgjrnett7CbwLpXz61",
  "key10": "3T5jNbbNLXnwiCRB7tn23iHWph5MuMeSF8buoQTbeYKoyS9fcTxRFzJ3HyRZzfNvzYbRKx1Z45Zy2BcnTPXW3Auq",
  "key11": "2jHyurMfo4KRr8fYiSncW1Hw4vpk8UvspykMDPty5AqgBYykPVXME5jJ35QwYswCJCvwfdk26QRCc3yPaDLBMCHy",
  "key12": "5yJnDbon4dCCJYS9ZnxSuxfVT91SW74Y7i7bgytaouvYxFaQ6yPTVSsjQYBiF3nAavWbjm7zZNuKN8ypkyyqsvmM",
  "key13": "4Y4mzgDvFc8H9DaFsrQApn1tGbQqNkS7sMAkAd4f22f1d9VSWWZ93MEqiAhtu8Q9yJzb6PowRrGG92Zb7igCb5BU",
  "key14": "5uxvEYejtccDqvHb35UtQSuBrY9xan2mGUK128bUkRapF2efWNgBXSnm3ji2sgvBEyRAwj8F4vpkgEsssnr6oxWL",
  "key15": "4CBGoJ7DATSmNedaBZQiHQKvxTcExUX7oV2Gf6YiQkDVM6hxEgPpth5vRfbcd3EeegmNEPYT2PAiQxpeaWQ5Lapb",
  "key16": "39KYQfWjuU8K2VZZYEe8Ti24HMDqrUNEq1nT2z3JBNQZ8ceHeKpkn4w9Sxue3SMhGg7zPU7sgqbJsUa9GTV7oCD9",
  "key17": "mp6tH753UbAWknJSa9DpdLDgN5LghkXjrBqZKqpkP5ctsNPLYhiheb5vEks4jsbdZB5hFySbVDDTrUQj34LXiAU",
  "key18": "grmuF24iavPaKjgiaUAT1fPrs3HSX466Ea4NtiVBFRTabNFzBM1SBdY5EtUEvRGBAbDm8nn6LoWHudCHYc2ctG3",
  "key19": "2EHu36RZMYg2UzmatF8hya8SLgGRW52aXkBhBbQrRs8UPPsA3hEaxiGxnkhWXceFcZy8nNM7Yh5fbgcPxuTNsasT",
  "key20": "gg7KACcTeSQ7EgqvAv6cyn6BD594jcrL71QufxVaAvpajwJoZs2G8PPEtq79fYoBqjGqvWsDrVdXERn9tVkxAEr",
  "key21": "67JkkukdvGqWr33cUPUzb52j8gyxBomKLz3dnaHAvDgRnSAknwJorKpe5msXte8fk9oEqo5Ni5ThCNSXcpufsX3a",
  "key22": "3dMFsAukrYp8EkzdaspnXJRcVJev9YZ3bCDmfuHCBWqeuuwCe98XBpmAnqp5NLFQdhvy4EW72iKAfrp8XnamrnGW",
  "key23": "5qfNunj9pKwXcyXwYhy5gKVABWezHDwUURfzfvwnpqn7pdBt5tpiRxtQTVUeRGLztn41WnkoKrddGmojd9DNpYZa",
  "key24": "286Cgo3vK8aRYWQvbiihL3Bd5WYxPQXEvEaC45woTAm1KPfEkPR7wZXKgGsHLxdpcyjfxsASuG2CBwN8BHx83HGW"
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
