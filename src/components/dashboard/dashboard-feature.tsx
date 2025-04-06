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
    "3FjtpGvVTK12hsg3DaSrzt8SCBpMeUC5XVw69J5G4sPryuuaJvnXxqY8Nmp12wZB4DJThFZVrY1swt3ZqWP35RKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uTYNHk15zbuR46jBHcsSaVWHCnT9XyTYUpdcAXtYHeYMgJys8dV15KtdnPW9pQou9Es7Q1zsr398ppL4fuSFKP",
  "key1": "3rprjWjAh8RGcAkZMbkHaKYjnhz9stQYhzQ587eNSxm5gSHpVw9PibDYsNkbiGocubiw31ikj7qSqm2iceJWp2Ap",
  "key2": "2TMTm5dJfcX9RCodwffpvJ8t511KUpt5wrbZPTVwFtiLP3gBBHPorXxrYahvhKexKoturHE5rMTKt7n9cuuA6L3p",
  "key3": "K6nQok87avdfrXGB4deUgDW3FruXvBGjwSoX86LwZQZNacHEA5x4dHrjDvqqxWgPAJq3a3bMJiCUasewPtx5fU5",
  "key4": "4xv166yLf8R7C79U4ZcAfrjbpbkaGu8uXeyocffT67WAA3yWeBtmrwZLWeKDPtonMYuvFFjRMR3RKVqR5mLWnXb4",
  "key5": "3D5tLb8W2y1ZMjgvJQVwwzi2ZnJX7d2tefFmcHtgw8VZ9Fu8w4j6ifBt7UtivqgWY8rMgjpAbdbEZLyg3xpdXt5B",
  "key6": "5CzoCdnoKRrcx9bxLc7xaeWosy45VENhaKXKQs26pesw6N5X6w1jMrTFZbaoSnoX4JyQ2Sv84VuayNktRDyLcKJH",
  "key7": "tScnz2sFvSKfU4L7otgzz6EisDc7Y2cVgsW7wSJSonqTEKK6EdkpRFERgN7MiPgdb1Hi1PELQ3d3HGHC3HPu9Vd",
  "key8": "4fpFow5iaQZcQpPqBZscUVQmLKVZKxnQfDA2DJkbs9u8U3fGjMUYRExt4GyXEFDhmqK2oKJKzB4W5XbqfpnRshdb",
  "key9": "Uu24hGa63FiyQhGFoRkjcDJdvyrmPsPJrAe4w7XbXjSUdYxkrUfYGBCs4MBAfV16UGwp4qakEnsCxkmK1j7kRS2",
  "key10": "5MRm3fJpifET22iML2GDgpfBV66LAdEm4jo6xRKaEVksMmFZ6jKgw2857tRvaQUzaVBZV8SjZAfaKsxHokTq2SBp",
  "key11": "4GNK9w86W6p2JZnY5GQWp8CiJTeDwhsaq3pnwWowsXgxxrW2tLEwJNDgB2TXsDxrsqmvRJs72X6kJVHnPq91w3F7",
  "key12": "AKcxadY3SzfMurjTUUrDggC39whyMvYqmxW4UQGfUbwGebgTmE69JRQc2jMZSho9F58M2hYBkm8geZ6B9jDCfbV",
  "key13": "2Ma98bw2BsZnv4Gy5Tp8ZcMnZNgWKiFZA91aRDxc9MrwszHDA31rRpXtoRwBnovczKhbbYkHfdiiotxP2AUhgkSh",
  "key14": "45HpAMJAvq3mh59hjSUndH9cVFwQeFxDBXL7VY4UB2gbRgeCjK6btVrbxgkDdpVmWxxidtTFKsD24WAgez9Z8PdW",
  "key15": "3Bb3FthiDH6zscLAncsTYCApNeeUzsiTRcbh46GSRoSgD8SRWTJFqcz78pfhPVijTab2VNGrbdkgncx1ohJWv9hx",
  "key16": "FKN5JWKxxn368TFKTMV3t8XDXaVYV1xFrzMvA4pgeMSuzSF7EX5fKW1CVtmVEWpSXh1xzFPZh3ZpC3tFkBoQTgn",
  "key17": "3q1dEJMNxQE7df239DM9p8EAXkX5M9zGZtmBPjpDR5PgzDo8oirksKDJ5hBpoPXb3ybaEo1QJpxpsFpH77ymhy5D",
  "key18": "3PYKrTNixBp7uMZVH5KY8XDZyUqDw8ZDa5mkkedS1gr9c1Wvv2Ckmx3Pe4BjRQpW5aymnJSKhyHBfhQfSXR8dCp7",
  "key19": "c8k6kDwC2ghi2fYXTkqJk4YscRXukDmhaYMSu5qeZJq2dj2sVqDWvFWzkXS6J81XioTVHbu7HDgGpuqFBvh7Cen",
  "key20": "3xhY6fwRmrVeknRNJ7oUKTZ1ER1V9uaB5ahxNqRHnkgui1WpagdKVd8nm2C37rpMuPLkXApXqA9nRxZ9o4KpsoAq",
  "key21": "4vgcEZ55UuThjC1QThgYAg584ULG19LZ2k3qerNE755sNAN8f92Tzc2Tih1kKU95JLgdk1REGpFMqiRwvseFfZid",
  "key22": "tZYsdrsYgdnV2cXqYy43qqPYiNKCmQDMJGsMYHV5LMycBxrG4NJMcG3qXTjjxEzJEaoBvwpMrt6vYFDPmeXWihW",
  "key23": "3z1QgBVj3LrXVtAhpoxbPGV1PtGhnNHSrVv9evnGcsgAshAVYjbRF6UGm5T5ZjnwiLn6twyWZ3vgh8ag3YBH2zCx",
  "key24": "4a98mhjSBRYBX3Sh5HUDbAvFTjKqNjDu7jEByYAPtSkMZk1jw2SwrrKycEmwSCxpGmsqhrwWXoF9nhuuUaN5nWiU",
  "key25": "2P8y1otFi5BFxDkqpSAZA6H2TZUPxWTATE8BRroyk6H3qMpFGWKibJ9vVih4j5wyRCjbxQuU1RYPgT5aRN4aKUs6",
  "key26": "32JMrmBmUXu8nqtqwHsu3FCwzy1V57CXELKjEiA3Bf4fu9AgNbXj76B28VFzjUvKvPer4FQJBTfSp4beM9cGEsv5",
  "key27": "bqVgBuhZHsJHSyc6mDcTGWFSvafCfKM8YkmD4Tm643vYq7HuAASdQU2pjMyiUdrLgdkvFVRcmx8Bh1ESZRSCVJA",
  "key28": "5Mc5mL48trucaERo3PLXoVkkp7ik9A7siBxa6yZMdzrsyCs9ZuQgiAJbyyu8UdpdbpCR7fNvjWXP2y9N9EpkmUSH",
  "key29": "C4dV4X4XzufT6fdKhWBx95cL7BZrtB9GahoBqPUAmxzFpxruMuRmzBX4fEkFzLhiNzXvAT3LNA1FuGrcHP7oLrv",
  "key30": "5CDg8wRykQMmNXFqC4VSebx8ox3P4GqyTrwuRYvVVhFx4cJc6FARXkzhScfkdfFSUMotKqgnxCht4TgdvzVeqqqt",
  "key31": "2Dz5c4TioJ9rGnVzdQN3URnGSh5BcAaZ9Bk71bFBHXfE1wGF1oN1dBSbwFffTbtrKiUB19FqvFjUfX8MW2hbGcXQ",
  "key32": "iLhurKPxgzn3oRRZSkvuj8GeCCp8QLTcbgzjPuYNW28Hf6Uzx8inSfjKcwikZKS7nEcQ7ARy1US6uFjDNcWCgqp",
  "key33": "2AQ2GAwZvnGtW99c8C5T7wUQLU2ggKe9nyPwvACE3mvpu1BK1TYDrszonGeYNMK4BvSzpw2Pp2FPGeXKrWEscttn",
  "key34": "oARQBvgSxwjLDbwPS6cXnxcUhcKYWDYjTjiUCDDQh3tmuiLDB4Mrr46bT1p1RBkGsi7EV1LvBsamRWW6mDuUqbt"
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
