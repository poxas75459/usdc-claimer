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
    "2y8oCkPNj3Tir6cSGY9i1Fguy7cqP2ufD2KdQPuoGfmvMruBGauTgBJ8VZxJn3NRCm5VkA6LbffDEQTHRGkt8RnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8J1UnkmyBDuiht2ET4MssofoBYngra5yvodY4nhs2NceNij71tqJH4nCZ7M27bisXNAbfZq9AVne9JYiued8iWm",
  "key1": "3e2qp13fPjVNDvNZKYirewnAPm4g5WHjHxk6sX7e39GkZeWgBy3YuNrRKggxBoioA4xY1MtSjHKuJJsRpqXT1V9o",
  "key2": "5nCHi289snAYJszkiNySntn5SGaiNFEPvwqU5ZGGkaZL4wSQ1XZigcEumV9GTjcjSQp2r51BM7fHD3wsjyjfBmeb",
  "key3": "4tmnCHKJs3BycVuZwyyugK6TwuLWut4DUgSQnVw8kxBnsqej5zeq4uf8JTQiDBFygv2iUoezL4TErfN49qMrM26U",
  "key4": "2P9xnJfY5zEZZLnqdcxsdZuUnWiBmFf8Wf1Z28c4L74EtSpR7ejUSBuWryqmutkupYVXqv4ZFLaWqAY1dr1Fjwhu",
  "key5": "52vHrJmpc6p9pLHuFq5o72oawrsFsoG8xYsUt73E87n9Puo5RStzMNvDqSRwoee9qSi7A8k3jUi9jwHMPZd5WRTA",
  "key6": "5eCmmpJ2LJU5qAwibGafPvfbMz6Pj3bd1PcuUMmFWBwG17HiB4KNGCP6TC2K1nGcJPt8Xv6bvw8AbaTPjb9Tb9E9",
  "key7": "5ci8YGqM3MZQ1WNTYtG7TLNiw9M7NyQkP1XkdbFaPY8DyUShzJ3FRDKSrTKWE4V9xWq2V9oorRhXUdUWT9Jk6gfa",
  "key8": "5G4VkU9eYqTyQMpLyD34yTsaHVxt6st8hJKQ7ftWKAV17KsZPcz4BhMCAzXjDLBzwV3N3EZcYedAzD1iDZgs8uUh",
  "key9": "46gitDN3t9fZkaH7yMWAYby9tN5Pd2FFvLuW5n4o2euDj3k3Czg24VCN8qpUT9tqGWiYQgQrcf4yiHVCCetKS9k4",
  "key10": "37ATgyeUZzKGmM9qStpwPf9m58H8HftkgqEgerdKcuQSrUAAe7upCoMDqq4Y62Bm4his3AnGxxChmpeey1kWB6UK",
  "key11": "2iQrw57Gy1hjuepZfRwvrpnqnHGu2t6yLr5zagMzJgPgZhHAq1bxThua6BeiqYwaTKAZDemXkbM2wCffZ2HrFtRQ",
  "key12": "3jGGk9dr5KbWDjiGvfbbU7ygy2fLZ6qVGq6xTRwcPoCcbuaprgRfegJ9KAHKHzFdQ7iXzKkgPGjw7bbNY7nkqJoh",
  "key13": "3s9jJPEhMio3mRwQrMVm7NFhaybf8S7y8DdGtBFiq6idaHDvGQCTLNva2F5vi6NfcaPWtHQVbPUmX3cJoDYkSckq",
  "key14": "3yxAHGSiuWEnQxpsobXkWry414KdhokL15ijcoFrznNjQQgBAqk5qWhYqdpX4KzMagzmu3pw46qedGEYpLJhZnvq",
  "key15": "21LEYmqYU9UCQCgBjo2wzEB9eMfhVfFq7aNdjMauhkeaUPkyppugg6Zr51g23mxfDHjS6WmcyB3sXzJdbH6mMDPk",
  "key16": "35JzefVwyWtFdDHyGrpMvp8rENeSMaaeRu4ijubiE5sUoVdGMDjnmhmFzenLx2as3WrM4JQgNb1DRQMbVxL7QPWp",
  "key17": "5JMPrcyiFaUJupL4Zsj4MMd6tbcFkKZeMLEyxCb2T5N7gjkq4U5ds6mEyhbZVYAbz6MtQN4WiyvRsg8YH4B1NVV5",
  "key18": "4Yy9UBjjxGRkP3PypwEhDCQoALoMpoXhVgYNLHQjhYA28aeKYkBXZbfSZqfGnwM6Y2HxgwYBDNbCLzeL9XczrWAR",
  "key19": "28TXNexq9ZJWaaH48mxMbedzbDyttefKvAgH7iTkXNumznigHuWG4tan9keP5gioPg2j4gmRnLmUQxPwHjpETmhV",
  "key20": "5TfXPawUyQJ5iZQxpPgmH6rgXvLnWUDpmMHzief1BDPR5WtjEJSQpeZnJZqQv3YDyFH1NEW8Rdn8Js5izvARCf5V",
  "key21": "5XxRuAeiHPC1jqHjz9PhZcNN9AoqNUZJVPbvnqAzEXdr3UZa4AXx8FuSLchu6G1x6NxJ3FdHZnamj8ZgHw46L6Kg",
  "key22": "2tSFEyua2DYvf8rTzQj3t85P6MfYVuKwQbDtwkpyR2e8YWUHAHdDLdtEuJWgZjnMtyVdUQdfY4MM9rDw8fpMvbj",
  "key23": "2wH5rQo1dGLkNi7x6g66E3PKrRDNsWaaQsvzLLDyeQ9KkZeYhthq667Yqr52dPwhVu412sRQHpvMX75R4GEL2yWS",
  "key24": "5UiL6LBapiMuQp6jLKhaD5QMhePkMX7wbANcZMDx4eH8d98fnQwMPPtw5MZZx4y1gWimjKsMh8GxRgHxUwDFx7Fs",
  "key25": "3LfBSd69THywEuyR6eajFq4T1b7FW3oGzaEEYKtpwqxMgKR5KrGB4NcCe5SSZhis9w81eUeVnECZbyxrpJvUf7Bp",
  "key26": "17yqRoYxLQF31xmDKh5RvRM6p51PqybgwW4Mt5UvUHx7zwiFDpP89d2XmkP1WZaCEcDEnvsR9yjrGVtF5C6JYco",
  "key27": "uE8cqqvH8pkeR7b8dowNkHFcifycncbzS98Sc1yx1kUuRXH5e5pMYfLsqZhprdhddKrnVJRbPnoPHdNzZXvfYHf",
  "key28": "3aw8iY9nQJNdDsmF7CqwNrhPBWUWanpyRRaZEWU3x9LhFKk6SWuVpP3dB2cuZdvnK7Nikonf9m4Z1NJyhKKm52ZW",
  "key29": "2WoYRdnxBkY9Z6RFA8YYJ7XH4rfBMH1QsVogGYcA9fCgXx9N1MNnmsVhEXkrkckseS22JGFjjMP5M9ML3K7SPQVK",
  "key30": "3LemT5kZnH7Fwm9D3nBMWXpon8mg4eZvt6WkAg7YWcJb7wihgaX9HCqbdKqk3YVS8axKLEDHZbZzZyj9Cof18UPM"
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
