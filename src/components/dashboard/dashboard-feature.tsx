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
    "2XT4RhsfgYPPePjg7SkFBRYqv1ar2EQsgtAQKAJeceCqiCGsqgE7eUkrpr4jLN4JDmyHBs5rBveS1CfKFodVg81Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yU5u6ztfYPgs92EWURUkNbXMZhRijdh7aQAMGQnqzGmRuKi6RsztUPqaPYh3uXcSCYRdNhBZnkw5jWVL3oa6JXP",
  "key1": "Rcmzc6F4THbJzyJo6NTxrKXzde1hWQ8W9eEJrKBSayCBD53hs5dPS17dYDmb4HR7rhEnL2UJghZyhWMZKxdskrJ",
  "key2": "55X9XVs1Afmf7aEtorg2ZSah57uaVVPm4q51cRQNm7KSnYC6WihkeSDZBrQeHdnQkGqxngTEe8bCqruHBhGAmgpa",
  "key3": "4p2J5iXZqGtLUrGhxNXH9yGbgkF9sbTuHwW561zbTed1MacF3G8isH2AXVwXoXD5C5NbphKYpayrpFr4N6dnqnEE",
  "key4": "5cdfFwd6YwWqr8vCZisniLHcU4uGRYgmAqv8Sw7byAFNMp6NQABcKn1595GkMbuMyn76wGVwfJDWkGVs3K74SKYZ",
  "key5": "4UdCsbCiZy5J1Mm2nTw5LrDXgDL9JSHQotsCJZSac6abVUSVHsazmFEZuDdRXvypBEQ66T4QNCDCrcDyrV4fB1Mg",
  "key6": "43LAY4mvgEQDXhHVk4RouQP5uKkTun7pB1FKAzsRV5dhfTbqqtRpRJ7fbpSBBR2fVPFwDAKuHa2bdQ4MYvndJPxh",
  "key7": "5jux97sYQgPfspbKKPGJ4x3bW39LkqsuuB7MEngShaCXsknV2MUwWo2iwKvPfLr9FoMAtY3Vdg4i9xjk1zSQMXpz",
  "key8": "67U98Uh8Z4m3J7viw3Rd7oxGhED91yCP8tQamJzUun1nt9xb4hZEp5jUyQwYBcp8k2ArnnfdSzzeqLCEX16PX13E",
  "key9": "5wrZMiJqQj215GKNHqfrksAdfx7JSoHJWtsyq8mES8P2WL26tMZTp8BC8v1mcZFwszqX2deG5eoiY6fpYLvLUse5",
  "key10": "5zSny88HnR7ofH3mTSSt5PRAvEmmsoYmFEJZjtYRiw2bMmAxbXWuYpik7vVWNM4XkBQeFZzYWm4Kx4qGaoYTsFfG",
  "key11": "66krLDfDwq85rA1ywf6TV4V3NQnj7LLacbmWPJeb9LL86KWsDHLvHvUNQhJhRAQKz9E94GsyiYzXeVqd3jMb6cav",
  "key12": "5fikceLkgKs5kEqbz1Xi1twgVq4cF2xGbb3Zqi7Vq9U7F8iR7p4C5P1Y6s5b44Qhwtp3YopeYnMJJQq3so1VJC5m",
  "key13": "d1Me7NqA9uywv9MhknGgo2uCRnsvrc78uyoTjQD6E6QPg9daHoHExEzdw6349DdQeaamtAh13SQ8pH3AFL7qSuT",
  "key14": "2Qsi9YCh6oaGRgp8TpwaQkLfZaKjiuRGoAUUiGs8saKvBHMRcw8JqwkyRNntdpA2bzNQHUbjR3SxBMbGCUwFgcno",
  "key15": "4AFnfo1g5fs7zXGuPTpVGnxGomsh8MxpbpahZmgSKSaP8V53jL8GasAYFUK5UfFohdKGGMeFDobzb6sybe7HggRZ",
  "key16": "2hD4EVjsvkV9kozbmjhnDKxC93KKNc4VghCH9vDGR5gnzUHvqUZWvooL5y8quxDuC2ZUqnF5xL5Nbvtp7ZHwoj9t",
  "key17": "3arjr9wHZeBYS8rubwTnHxXt92W54wMyxsy5YTCsQTgQ7uQ16MvxWs5iDktLUULXPfqbhYnKSugaLrsUbpY44qPs",
  "key18": "2Jqmwjn7uFRK21PwVbs6nLy3xb18jiyaJdKGWZA7JhXYufHLRCp4thwrzafaNWr51DPDctjGirpofsQBMy2nmP9R",
  "key19": "3R6K2Ksx6NFAp2rCu2iRSq5EnhYYinCuABp4DSpGXbuxeB6LCf5CBBQtA42KicQraGFLFB4oKtkrqhN294NuLFhK",
  "key20": "KxvSTy5TJPRuHxnw3pyQ1mxL2bY75VSodQgakUcYpr26nnoMb6V6QrBARunxkPzgdMcEqTx9iqpmBupfW9Y9T4S",
  "key21": "VuWUXngWJgtD1YM4SJDhLqKWkKceWuxd9PjE9n6rSXmz4Xm15JSUDLkv43Ce9hVgDbXkGvSx3TTFhnmLCsMpu2P",
  "key22": "3fJ9ZWLQctXruTaEbEHFxKb4jt5e8u1nmviVcizzZmb54ZoXUvusmgR8eDh25SrAgmJbBgyUoStaHPX1qCd7mV3D",
  "key23": "3qNkjXygDPCDLBTfMvgDriZzP7dYx3Mhxu5vpAuc4BgBwvpZRmQdYfWwAxjPcptZNnBy6ukuGdBQmGhqgp4Y9sxi",
  "key24": "4ScB1zD7Bay15DLeC8i4fgJ2qfLAh6P7Nkq2rtu2N7tNueSgTuviVMvHtJE7S2rE4ivScmRnUKhqzzowheQz3RHj",
  "key25": "531LSNek8GECm3J12YrynNsKmkhgJ7uk7Qe8RDA7QbSNGK8eBfzvzazefQrGPGRLpnSX3oSXoMbZN7xcfLJuXqAY",
  "key26": "4UPxwJxZdd7Ji8Mad5pigAvS1RaUoPrpZc5WocjnyFQkjD6bJKxyG62Wj24D86A7Z9uWYfSwUbmzmk88UYnShmDy"
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
