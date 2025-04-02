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
    "2hcYMEvR2TZmEgpzCN9cAh3R1cL3CEhFnDNYtjK9cbMEy1oQRuuP5Y8jtmJeJ2Xnqbf2JPn5axNBcEbXTSzca2xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5DtGb9g1xJJbVVpUS9DunwoU9nGFkkhnUjKVU2JJ1DSpDVrs4jSVggEb4SSTu4daDkjwxDYbcTHKnwJyC9aaLV",
  "key1": "4XtDPujRCMDx3jeXamw9tVpo6mAeqFvde57ydfx3VFrUrmR9ZVkWZYXwMEiqnn5D5K9ic5Aws4Y5ehw4yk6hbvcK",
  "key2": "33rRBcqAACnjTRKbihtTqiQ4fxgFfEQGxHDQ3pUeyX7wYQkeoEEURh36LmPyU31bSWnHap9PYtsDwxwXH1qZYdZA",
  "key3": "64BTtr9jwA9FBHGUvtnVk2ZCr2wv8gPftvcF17gxmYndfkNDqN6pTC3DMB3ZMdPtUDuee8qQJHrny7KNdm93RABs",
  "key4": "3FxSMxwbVY8XeUsYJUXsHUseyJYkeWbSvPfJcV6mP5YwwMoGE2Mps4QNZpeGEmBGdgmsLpDRZXWsMXwv5N9Bx5BX",
  "key5": "2oV27N2uQWzKi5ZqKnkvNtiigL4DQP6oo17TPcwnhviroBm9RpVzHQKjjwfbnbSvsDHU6fLDJcHc6YCCZeqB6Hze",
  "key6": "D1kXKPd73RH5gowAKsxL5otmvdLFnAFbE73hKRTRApVEAREhLQz1MnnNZq9xqCRpkYZFuC8g3CyRrxWWZ86MnD5",
  "key7": "3PtJtDDbej3cY7GSyxosNnQK2j9ohZwUJkW3HaqopqVuoBgwG6swc5rmk98LGT65Cdv5ziwK4NKNDfr239ZmNEpU",
  "key8": "4nxc644n8iGtsTqDTQuSWpvFjLFX68obgJgYH475kfLbrSGBch7VUzNFDWDur6bfN1CxferrRoiVX8Mas93b8nHX",
  "key9": "4wR7ocTjutjTnz4kAyVRe2FNbAPi1V2DpXbPAGmRrK9tbdVE82DHktM1iT4HDSxwEZP6LPrGtUZR5fzqi2HTB9nr",
  "key10": "2t3bMAytiKwMpsPq5hfhNHRAtyxJaQxjDbmsQrEXeGBM2h9bNvqmx63T3Szr69wz5bxqqz3Lci9J747MqRFUdARn",
  "key11": "3EbgULAUj9Jzd6qMFDnDvvvnhtYwhaAyoJUCEwkcxvAwtGAAgzHDjioBdGWHwhhdwKt2AL1S7zeP4RYVp1zwSGBQ",
  "key12": "2PgMPxXs9aso28vfCTRJLWQGWrqaPw6erJbLLDor32otk34NMHz2KYFNYxb9R22wdXz1FkFuUu61S9VJpLwrWDcF",
  "key13": "5wr5q9d1nFvPsuf4PPwvUTsm9meQHo9DBpfLj8hSzNt5ujHgN9i6FnRaWGdpvUFBznW1kbRWMMU9oE1GTUnseSWb",
  "key14": "4FwcmaoRkkHHQvgdzMvuyBvinM2agTPxJerHMinsNcQFSoMf7cWpYpp2BZn9A4Sw9igaMRuxQVEMq3oRihgUUzei",
  "key15": "4iABzSP7CuASqopwqgenirsGFsi7gr7ksoUN4qz4Zj9fwXoVrna8gnKxCxq1gAhcZwKm48DpSY62z75vy3zuNGtE",
  "key16": "MarVJSNEvkCuxcQocwupDETVsjinbLGWz89R1chGZ8frtMRSPn5t1WihDUJ4wWvQ84ag8TvfNrqSKbDPzwhBLQ6",
  "key17": "kusNiWM1M7u9HJEuzhpcpF4NWaVCvYjd1tnAWyQFLqnoVJWGprz3XdGHvqABBZfoJH9ii2CQFcjArPtZJhSETJo",
  "key18": "5rPTztwB7TML3kkMKgTCctrh39vo9yCyAZjohURDQBkH1r1TJYbpa5igSNS54UqqAdtEDJeLLjAQX6YxDdu2SFDq",
  "key19": "2me4sEdsxcPLJcHr86VegattrZa9xfAyhrwBix8q4nDC8wRqZEEpX37KHPmhgcA6PcGN6ZVz1viAGSrHSDj9aDaU",
  "key20": "4msQo2JUdnwELeCFVwh5sv99v9NiJDDnC7pvdWoTiDAfByUpuoppVCW2Jgwr5xmizBgSdJKeozeaE87aKRNGtfDX",
  "key21": "47hryQQE3FzXzAECmadhvtmeyWd8pYBC3qsuon6iHfQpYjFth6eQaoLByCukuEjNUhcH93Wt3EpnUA7uLU8hCUrW",
  "key22": "4kD1XMZkdQwg36VZU1wQqEHLXx6VnqztthRooWw5Kz6dw7nAP4A49aL8eTKSxz4pLuEfDEBuM8VfWaXEx4311Xzx",
  "key23": "2YVTVKchRKw2W1RNDE2vGqyBUsAnkXFRaaz1ZDZ9kiy2DkwzPwofFgqgt7QBxSgKEsD1bzp19PCyZpb1nPBJHJKf",
  "key24": "3o4g9fbdjuU4EEZA3Bwi5jzS7Cdwt23SM7P8E7BqeV74wLwneqiUSRM1rC1jYYYDA1MVLEN37qzC22Gh4NwUyDqQ",
  "key25": "5KwSQDxUx7nGnUrpzNSnnzM2WkvA6S73AQYSrnfM9uoeysZvXmHGvAaowBFx86vjnCGPtg41xMCy6f6txJMYhNsu",
  "key26": "5BpALXEsdGXMjHMyCnnmYwr4kCaDnKmYX64djYignMYdth6D72w2WGCKmiLfipJvhNnfKdK37G1ZNMB8irNyoSMk",
  "key27": "FDunADgTx3iTMwzq3J4JTtF1hRTHyQJ9c3a5vgGfJDeHdwmwsuQDpKxARTa12EBJWQtoycqytzmDitTbcPj2P48",
  "key28": "3CY4Q55hjxXZLSVkNDdRT83dnZou4Nt7KQbxFek8Nn8PiS7JVjTxTbCB4FaCujiBF3jBDDjTkAbjdT4z3bTCfsYW",
  "key29": "2T3HN2oPRaUxvxFAuu6RXXHpACBGSFqnziTzsy6mtadpthzbuUqoZNq4SubHidsmDDR5RnZK5KeChMDEhhbq7VEK",
  "key30": "3yxvdUHXy49E2nav4bHaEBZ7aRYghJhqQESUdmPXy8vYDf8fnMnYwBzE6EZZarmvtDdM6Ga2Acwm1YyeT6Kp9PSR",
  "key31": "CY9eZ82FKoB7FGym28HyHrry18gRYV9DREWFRT6ED3Qy9DyVRYKL3veu2UAUz8jgx9Nz4qTYRxDTwttn5CCdMbE",
  "key32": "8atnWkT5d3NqoLWQxs8SjoGH7KxQ8P7MwVU3faTQ9oN8AUdf4ntwJgp99NmG1GquuDLfSwcYRz6iZM3qDSGjB8j"
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
