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
    "2y7ag1uxHbXqoCq8DhPHNMseQ5o9q5oAaEyHkhC8uucjQyEUDicT3YzCBhTXwrW2PATxqXHBBJbNR6JVU2HggTya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622VuAtxZqKi7tPJJ3TMyTWHLbtmJiSdBnBu2qbDp85tnKk8x7TmSETBUjuzjGSkNqKPFZ3KnbpSKfuBTJKCkErD",
  "key1": "5nQcbxU2VHckT5c16TS58zKE4ezBdjo5AC45P7L8XZYGehsBv6K9CYSqsF9Jcj9S7Pg8DXLpWtZFmk58CQJmmvUi",
  "key2": "3ze2TH61ZLrrTXJCoagwnenXQpdWnVt2wTs89y9Myzj5LESRC1jkaqR8GDnDyGfNZhd4jJ4xG4gLgLuGPFZBaTaq",
  "key3": "2Lw845iNWh9DXTc7VwfAe2GWmVWv2B1pedDkXJ6SjjF4hihCmKGuxhonwHEDQpNYo9aX1xn55gwSZr714rGminJ",
  "key4": "2YiVJFAjY9f8w6PSXnNYPBNiTkSxi1BKFSNb6tFmSdZvvAqBrUup1k2qUZEdjYCqQVxgEGq21av1QoGuVou9EJwR",
  "key5": "5dP7DVUWSjGF1UjY11n7XbSwcseu3XXMUhUejkGU8rgVpZTogSuZRYHGx38NAsVeV5t2CyjUtnCCnZqqgi1xLEJb",
  "key6": "2sEvSPW4tKEXmtTz9xWw1eDYzHY1Kq3XJCWx8kPA8GSi6cj2rtdPMUvRD6uHWPzhL76722G8THHoBxjr6G4CtPtZ",
  "key7": "3HpCR5ME8ehmZ7G9GmEX4mCfJTuvWL76Q1KbEuk3vE9MbYtwH6SmJXWNQZfYoJtiLvkbwVTv6NymPtohPRCnMRQj",
  "key8": "my1Zrq4i696dZx9a1EzLvAZPaiGvG2V236SUHFPom6SS6QoftCszt1eNikctfgmFGsf5MKcQ5vxtQhYoYQCxpL1",
  "key9": "rjGYw2BawBTLUCmCHj1pVV1s17tped2jAXB6HEEjyaZ9STpAydW8wKgKPZ294LHhEefx5L1NPntFu1KNUeoomUU",
  "key10": "4FE8w8B4qEXFfcnG9bpAKA4DoR1hDhJj9rVRvJ8WuMJTEXfsgbpgDvVXhn4kP8iCdbe11xRaxbJ3gCLNpwnSJe3r",
  "key11": "4xXevrWFGuKDMahXSJ2Bsg98Q6kxnJvQMH31NjnC1irQKnjKbqiepMexmQbXm1ERL64MbNMdumRowkeQ5qeWPsS8",
  "key12": "3TQAy3pXKjDvWyoP93wATyMXNtjE5cN3atVC5fAfqsaEQrQPyu8QLDdQDmuWmd16Sp8Qx752XkndZSJt7NjJTwf7",
  "key13": "4tuHRd94MoPkB4HPr4hyZnthVGEJB39v1j526SXP21pMHdN5Yz8EPbBRH3f9AgmEeACYYoC71sLMHZqjSTzEoZXe",
  "key14": "qFkE5ms1JXU1aERFaQ8rt9dcUJwfr4dEB2ZQYQfdEfpx2kX3WXTX6a19sh81eXdY3mvpvKE6iuEivBgm2HH1PJx",
  "key15": "4FXZ7oPDNmjPLdZoHFahdUb5V2j44F6LYephMBeqqFVEbGt7zYvk1jfzcKKhSsyeSrKNUVG3grp9VKNfwD7X5PXs",
  "key16": "2irauDxJZGa3EE32hGZK5Aia3pJ2rT6DY673wLYAxPJd7yEsQAAPw1S1ac6GknG72ABchzS6RX2scvsTTs7Q8hvo",
  "key17": "2tsni9bTiPE59PPa4LDG6PJHZXgNdbCx6dVomfUNJnAW3YSCPCoxJQoU1b6k4fSwCPQq4TfEVmH7c1UJDBKyobcG",
  "key18": "4eHefH7J79q88CSEcuzppPM19fECEeTbHdpd6AycaXwYiJWhBV4ApHwVKKmgve6nigitLtG3GczYDLaHm8mkU8Z6",
  "key19": "5KMTT7X7kEGZkbcHLi3e9G2dNZzLcQFxZQcDRVXKLuzVC9ep7HJAsLUL7kaskC84jgZbAyZhJRcTrV41tNPc1ogG",
  "key20": "5yYk52QR4MMmoNU19ozUK1kDuqhTRsFwNkyMaX8orweKCUSweHT3B6UPoRvJNCmgmiQwAoVVU7gGv4f6SzCV1WEL",
  "key21": "4YRBEMaCu8dCS88TPT6Mf6hL8j7hKmXhCcjJTkp6oSFyRsufh6NJAyMwbX6s4UFHUkWQ3Bft9zT3m2YDHewo7ZLo",
  "key22": "4kc4a5ve7TkkZ6dGe9pYv72xBnq6aXJbm69m4rVQXvf3842CcqR5ZVjLR63JfkAoeKU1ydf3Vj8KwzTkEfHigbZh",
  "key23": "5QVv5EZ4F7csQEjGGHJdvBNqSNFZqBSvZPsfJim7Eo8h4u4JkAU4eijfAy3CfuiY3aefGgrxpzqXNsGFWLWrcbpd",
  "key24": "3ZtMnVtBahTwDMxhFWYQw8ruzyZDMTgJBjc1ToTQEyygP5N8kajW3uRvyWPvLgquACtMfXohX1oM7Xu4eZCedLk6",
  "key25": "2wjKy4PTgeig2JR9hgfhvULgThfsYZmyJcN3mMHBPgdHN3wof49vLQV5GMnrCKQwv6x35dYMCKhT1VcN4QPPX6Rz"
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
