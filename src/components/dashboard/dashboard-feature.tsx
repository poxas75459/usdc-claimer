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
    "4qExY3GBfT5MptNSmdN1FJkcFnKjSKmhUB3xNdpwgLWaSvTDxZxqeyC6wUQN85Pe3ddREAdwFGYcFEX3N5ANtjEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DC1fMmDTLCr5GfbbvwxrTX6BS7tBj8jnS76RYozekjyc4ztuVZ7PkSnbQ23tJz8F6SX31w5LJNtSXhCPZ49kHv",
  "key1": "4QVyuqV4p8w4UEYhrDnKMbcLnWgaQTSXFznF5VnszJYSb7MpWurpfwNU3gzdbuivEp2UtXWKcfhCdmxM3LRWMKEe",
  "key2": "23eaBhZcTW72jeGsYBLggKFW9smt8zmDSD8ZitFH3rCr6xiTp6gvGpsaXoHqrgm4YBZq6ixMHbPXWkef2Wkbeafa",
  "key3": "3mf92guzfZi9MCF3zhT7GvXTVFovFLNuh7ppzDvP2pEfPzqmZ5AnSADnquNqHuPAWPsSNeyTgrs9dcF2FPiSon64",
  "key4": "4dQTt21i7hEYKrCwHMVUWDiMipxNARwVzyPTomJa5Jnv56mMDodb4SX4BpFZTL9bHDy54PA7CD28Xhvb3CuANECG",
  "key5": "5wR5JrCSF9QJ28G4C4rdR84Qz1uCoqXm15CHSAgnq639gMRHidtyhhZ6ZN1w3GxLKCuz3pmw7LPrj2QfbzNotNNA",
  "key6": "5VQJWppnJyNHTfbAq2jGGMfFPoKDNp22WRg7fs4LFWfSuAj7qaVjL8CTsm9hL5rCJUVjZGKtzJAWMDxC6te4CC92",
  "key7": "41K4BHG5mp5JYKj5gRozqTaBoEToY1xXBvu38bRMvtoEUqYvkPVzhZrwKtVSmYCmGLqobEdeW1XPsBXmiaHvZiMB",
  "key8": "5QU1PE5iUwv4xoFTgpe4z72CX9vXwBBNMK4CdWZ69oLy8hpb7E5uFPizfASJt763zMxwd2deKG1SnzHYVY4G6pxK",
  "key9": "A1MVSWXYadtGBbYRQPEDRsN7MNct97EUFKvJxD5CJ1m6ZAuQ82BgxQxgSL96moLV7Db1Uxr14FGNx68xtpJ2ZjZ",
  "key10": "3gW2y3pWN9m5CAGgkT5nC6wamohawodoihvWkrVWSSzwyK58DRUMgnvHFGdfYquyCZDbRGyTiz3YVevfTTAohDGU",
  "key11": "258uZX1wAGKEHEP1PR8ym6jY9LSez5qSVJKY6dK5wMcywATUF67YWvAYdSnNfSJYahqYMWpcssCcDtqQF4ap6CZ8",
  "key12": "XGrpQEE3M3MJ9P5ScMaHU3bWbZRsEurWgaeJYWcwJQUptaCB1zemUMBkJ3J1pdWB5EbnNxvR4AbkSm19nYpRQ4s",
  "key13": "mpP3JifHprAYsSpRuGV9CrRmGqi9uhxeP1B3XMcT2dF4UMRmxdT3uFY67D5L15RH3QGebjJMukfucUNLYNS4oqj",
  "key14": "3kwffbVCAJ9AUVGQudskQfqq61CRhAJbD29CStUeNFmfRUuZxERxho9E2Atps2Vf7DYRhx2EUTCQue7w5ux5X3gJ",
  "key15": "3wJzRCBYgwJxkusVX7w6MKpUBDboZiqMerFyLypHWga8d78whvKnNtL4fuBVuGnfKdxJ2Aso4JL4Kbx4vmVRKBbz",
  "key16": "7GsH2Ex4Qu9tXy2V5rjaFu8L9ZcJVCXVjqTDnXBUQRzF4ztZBdmB3ubXsfvacA3eghsWLRthfX33pt6SrY8PQaq",
  "key17": "2XwNfYUPThXiSYt1wnzESHw7A7Y6BHB1sKYc48hjzHNkfcvftWqZS8TuzSQWryQv7LAtSZL6SUsNFiBPTqkKi8rX",
  "key18": "EKnrUc4vaVDaFoMMLznwEhiJGqz2mJ5WZXSoivEotmtpJmbykySL6PDRWxJmCXfzLyenAXVnTr3WyJKwxQq53zc",
  "key19": "4AETCRCjdAtSG4kYJWKUkiWDZCNsaoyEAGAbG7pwbMdWk4vftT457DQKPxHA9qHyLPiAo9pa2ZKgcEzTTWq5766h",
  "key20": "2Jm8bi3qCr466Zv1baps5HTkjgwdoGPVjCcht6UytdvA5YEiLkxiRSTmzYyXHnhgHY4UpDYr1wWZzVo3hnTBLJ7S",
  "key21": "m7rbiCoQEBKqK6EwwbDdHCKDFNNN2rhb4uqgHtzayKkMK82sX8u8xTfahhgNq1E6QVXpWfEuJWsbQDy29R9i6JN",
  "key22": "5bHXjVh5iPcqkdYKpnLLd6iYBNrVbxyhXYhrwxL1D3UoWk5HpJwAHm69dcao3w4umP4SUxLgTqtjZd2bL25B7N2C",
  "key23": "2wtc9nYpDLkHMafTicYqkf1Doey4TzviQpmiAUzt9kaHtBefxhqEk2Qru8k8FSd1k6mr6M56kgz4o7ex8ESLFTAY",
  "key24": "4FX4mpCNoMo7VJm935X7GmsdNQYp1b3kbUipU8T9GFrsK2xWBRXKoiRAFKqjKCdVhtiM6nVL9RSnv1e5bYCWNAiP",
  "key25": "2XS5yReaDqZ1jkbPR82TvfXwVkfEWSdzZpnJ2ssP786Tk5uvRj1ZWXz9WcLpsUjE1E7EmP3QY5vkXDWVgRSzKygf",
  "key26": "2N2edBjFB2qfcLpd4aLGtJtcRufb2wnU8Cft7uSKM3r281GqCrYKYvXc9CLM9Jsu17JbqC9bXzYLV8onDW63cZJw",
  "key27": "45whA5M4rfZHvi6d42iuRJTG2SdDp9Q3bHG9boKjP3v7FKUKaRjz9cprwvC4sfV26qktNhkzjSpnboF3rCSmBR5z",
  "key28": "36xfb8FmkHq41eXGAC3JHp1TjUgLJ7zoyAgf2cUiaG5S6fX2VKmp6tnHKNhqgh85kJJr9VaLdZhnPuf1BJfTrLwi",
  "key29": "5WzEkiuogznqz6TbEu2FqeSFkGs79vFKCXPaAKwWKABN3gDwmyjae3uftbaNp3hz895mKjxNur9Uqx5Nkk48NNCx",
  "key30": "3RmqYkewTqYtwdq67omPvZEKG3hL8iB2hLEQ4c78sWVcbUndRPpgDZi2A98zBwXuZxbV9wwuyx8Urti1UArTg21g",
  "key31": "3AjjFWDN78KaSBxTE9rBPYR9GAv7FytmLJUfb26M791tNgAmkyJfLyUjCtM4WPmmnMVT8ofH6jPQAjAodQ5BnSAh",
  "key32": "st9wmiQLVAL1TtdD24zNu4AFhZxCxvVJsLBwyZgTR2VzzPHc1MHgvTDQ2jXcY9gA6neyr3B4wQciVS61Gbd6RCv",
  "key33": "4isqmQDU27aQAEzz2QirKy5MQ4CaW4FieMT9iFS8vWb1PMuX8LmjwEkrVpyBb6PM1GcMWjT9ERSYGnMHFYmK42cn"
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
