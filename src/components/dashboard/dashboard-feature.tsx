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
    "WpyvscAiHGWX2HgUTH92J6cgmr8GUDPDZqHMSo5F7QgMpsA1kq2ScKJEFcWySoNHApHDXrjXHEYSR6gcvfBbMgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHmDAZQ4A7y7TGgXSnNTe8hVfAvARKUPeYhorK9SFRRgGpYL2i3Sw11ZDcLpNV3YgAuJwKHyXU7XoDTDAtb9KZ5",
  "key1": "F6ghc8VwFUfWnq2BSnepk2s2wQ4ECbTzSxKMiqvvJvF4RrdhxiYKMdfikUizXTCxNqLpdER7cDUCXxg3YEeKord",
  "key2": "1h4D3xZGBMvQF7DKyJrggswLTXUf2hpzXF2jWjX8TBF94P9sAH219DvhLUjoAaitG4WcDZVrgkTen61zXyV9mus",
  "key3": "2jaZ5RkN3QsqdB2TCj16J8d2iiiycRGb1psBrYRdyrhmhH4nc7uivKS9Bp69uCAMzLW52x8UdTLLoBR7UG1BA7yQ",
  "key4": "5gi3vEQSBv4hoYHDWGWC1SqFRwmAHvS715D2LEEqERtLWzLCfSEPoYjw2BW9LeHBB3nKegNBeAxRnRmFPvkM5sRg",
  "key5": "3cUJ45EDZFZYGvHp7dPu2UQZvmyHn69EL6PbFpHjFKfMhfjvoZNWKBgorAXnuGEQEFWBnYTRzb2yF81xBbTaZQUk",
  "key6": "5n2bFQCy4ESHY7dTbqxVwpKq6jNGbkZkntmqcxGrVyJAkDntjzEb3C2hKkJVSebq2VUC9NJAyoQ53weTZovPyuB",
  "key7": "3AajLkwsXTiSR3vw4Jkco6eu61RBTsSJ4UUaFUxZhXj6BRYDjsBUAL2YoGC3WF45cSsQ63ZaJuFAXeNeqDVB2DEL",
  "key8": "hF2RzfZKgCKso8iGiz2X3mqtbzXYQcwhmSNmtdWSvQbJptNL6tT6nVGnBhqMTkh2z4MKbfbNL1FHAhRPXiuUdC2",
  "key9": "4iT3xuPGw4dfPVG7oKmWUguWQVwwigA9tataNCopR9yKjUrcqq9VHZQuYVNJ17hsyQCPC8L37cfBLQLmGW5z75N",
  "key10": "4XkZ8MaTcZr5gUA3WG2Ty3PvTiJP9VTmpEQnPYjRtV7eXbiAMngrSXf1NsqmecZmMPnuDZU8vYZFvKKbTYaJobLf",
  "key11": "2dCagfK4S3Vihog7pday2jLhxfbLetQckbfrT3Pn3dubkHjzWWZVSG6bvtE5i3LyoW9iCcVJq6ccefHshi22Foz3",
  "key12": "4HVWCN7W4XuzuppX2BHYzvPeGzYs3G7C13cinku5N3cdDeqcu8nLHBGDWPvLBNKisrN6Mdh5TZV3wJJJBzNFhkCp",
  "key13": "2W3XkeYyCpa9ZT67E4wuEWDW5E5x4Mn7RcueM3qGAVL9pYxf2ZH3L4mhaytDGbqzaRf1i9q4vUeegjobQi7XPSft",
  "key14": "4ACPG43XRoMUtph5Yrnzq4bjwdBjZ1aPNCjh9QVAqr7rS64UfuGqEfUPEybzHKNduS2TsMgirNDBwzf28BYSZtRT",
  "key15": "2echJtbKnGy11XEzUTQDoqD2NMooggQXh5HMu8HVp7BBquK37445Re4pqGQKe4US665n1nVYL1CxNNPSMpFsLTep",
  "key16": "4nJDdVVAg5cCpUQ8kTDXHUomNY48j7KAbjrdGVHk47YcGnaoRmccmetGLB63yZNfwPXnZesRXJnkn9EfEeVrUgXG",
  "key17": "4vx9f6d26nq7MUbgv6Un52mZNLD5qjJzB4UQuZuTJUSYbANcXBsXNY1Ls6QB6hr3JyR8TR2BfsTzn4M9JhAR8kcV",
  "key18": "5yRJQVnzRSFYFReUvyKUxBLTgw3k3EVmTzFVmRnbHejRn2mUwBftSjV4UFazARYdR9GRqXkYFHtw3jvuYxksa8GL",
  "key19": "5iZQUsbLQyexGpYX3v7oKYKXphyUf23A9Y7sXjc5fNGZCxhnS1Q3Ux9jDo48joVRZsum8tu5wdJECscrzDEKsu1j",
  "key20": "63UUdhFhp9JavNnY4Xs7at4PdzE65PZmcnqkm2HiAKd6gEArEw5TnWYD9WyE4LQprM9duArjeun15omBv5XkST19",
  "key21": "3Nm9ta9wesHmTUW5uei3uWfbXzgaSJKtHazpuy8yV12wdecxDgvQN9P58v8ugQz1ELeJaK4EkRsXrbhzDM1jFpep",
  "key22": "2spMBLeF2Z6xtTVWeoQZ55jqpEjMF5mRZv6jVn5bYJoHRm7oMtAdrvgE9qyFHW9SrrGHKVQfR16DXUn8VBMhtugV",
  "key23": "4BPaTX6LTAbhsjiTzknFAKRiWNk3Hg5VCktryu8TSizwDaLv7zSP3nyAJPnvNFzcy6yvGizj1MFQwYfAEMQf44x4",
  "key24": "5jhawFaKjuvfdJKUM2aWJkbrxqBwD8QqbwWQUL5FKSq5zrV4m2CzEfbqxA1bvsNfHSYXtbjQ4yeZGbGwkF96mgAN",
  "key25": "3QBCFRaXX6kjBaVgjZTGJrFCy4BU8VaZECsfRmFmrFQ9x1ZaMgbf6wxXU8TjkD6ayGAvpL8jxbWVGhWJfJQxFVVP",
  "key26": "4nV4iwRkmRj8UjhTCvpxiqFAfCh5uTy46mHASaFxcSvDg4Ck7wg1LJTuk3fKSnHCWkjn9zbFuiB8TXJvqjArgfH3",
  "key27": "3JRViNuXDj1BacoZMitrHkdYGNEmzmchwRFBTvzhMEGbLzYUhXuVKdrhXDFeibWi67S6KAn7kWXHcgcBLWMx7jMC",
  "key28": "22P7SidjYW94kAinpeosNoPCeFW2RGLnDEWKJnTGUw5xZhtq7xChYNg6jvgRYmqfQfi8KvQn9CPyYbAV2mnKcmGX",
  "key29": "3a6WgwwSrCG4ywcvNC2GKLypLshcqJtxBjuUYW3vEG2cBUpMEebeRKRtLV2WqETj633FXriFCrPKwgGGvBrt4Lem"
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
