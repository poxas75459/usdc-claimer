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
    "voYMnkoYNDj54BnPmZBsbwZtM18nRnAKBbt933jA7d68e8rJhHDCSLH1i87mpGZ7DW42nziunFPC4DeoNfmNc4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kf6iPimPZt1TbkvMbBG6mDY2jRyDvjpYq2jUUuG4CC2wxgVahxMCVTKFALQfmpocvhHncAPJzoFVe6JECtjy2fK",
  "key1": "4tTzpWVAJ1rvaNzKarG2GU7dQeePH16M77AL1L3Va2ikJiZQRBYmQRBQ6VLZAcTHLYWMGDQrXkR9GsZ7p8BzPftw",
  "key2": "g1za8B4qnysSf9d3m1bAev5q6m32EVJuHuPtsiTf9HEFHEjfJWXrjHu1U4aGuJyKKMHJPUyiHk8n4adtWm4Yg5M",
  "key3": "64eT259jBMoitnjyFifADiSxEzhHnxA1WnWqgd8VAj1x3YgfvBYtWYtPfMAQK1QUjgEA3jZGUqmprumqsNJUjgPb",
  "key4": "3mkvgwxz9ZaLJPxB1xk4Fsf5wGCwAHYkNvWKgDtKnLyCcmWvphhBwRJa85epZSAAAZyorUuh6VPbJBVLyx87hJyo",
  "key5": "2o9YED4ikW8UUYkcvC1Sm5npWzDPFBNUZguctkjd3jU9HmmjxF65m2WgSZ846tEcP2Pxdn5eWtmvFcnmeNMfzGFw",
  "key6": "4GMk5Gjasuvbh3yLBfBAaVJ6uV1XiQscRWv8haKeBbfgxNT7W1qS27rNL5FYMkuqLoywnsvZpbufqQhS29JbCw8p",
  "key7": "45FFnEEsA8Adv6DbZFcNTpL4d5xrkT1z1QgAwrU1rUjHuwnxkpHVqeZiA4xHTGREmW4EPZiv1qUPiXcFWPqWghB7",
  "key8": "47uKcnSD7E7EXUFfuPA3NSuvHwAdTjv2s4MDRqFGfaRYTTFhkHSXU6PCgDxo388rLtpFYqMaBkoDVezH5p8nH2oy",
  "key9": "3QuLZbFFhTzHgkUPcEzSdPfFLWR7dBoVbvGjKXiy9U29rhAmatZ2yL2Jm5VkMvqDv726MrK8QW3tjtyQUYPpzbcW",
  "key10": "3RRAcP84DWU415vgy74CkeWJaFKYt9ta5H4o2kHGHfKPJYreEoVGGXYU5ReRzZG6576sais7aeiPEDFw5rYrB3rA",
  "key11": "5Zfqx8QG5mPmCbcUdxJpoU9NJUZfwuMZxstsNQjemB1hj66MDJnAedfS815LFzzfXhvBA6WWGgSvknZjJnPGkdqe",
  "key12": "4E4V2oE6t1aqpgBUvQmbmB2EybV1G54p1oMCmdnaSNjxa6tVXkCCknoGG8Npcv6RHF8MJDq7rrco1hiE7sUkwinE",
  "key13": "5jmvaihtae3ecE22Kwq1anj4ZCPjmGwjF6ECTu8muarDiH6EaEPnJrCRi2c7BtNBBa1YnA3qR8svhAkdsVqoMGjh",
  "key14": "5sWRKpMArjN5uVXKVRLhNDZyHph3zgkGsnZPwSpj548SzWTq8pN7tYnK3VJWKfD1kQefHAZfUefMzsZEZYgewk3F",
  "key15": "2C9X6rGpZA7kkurU2NVwchhGnteDETBJXLrJE7YxeQbH3tZRJezf6nAPVnDivuYPBzuw24ikPQqwupouALxbW5PP",
  "key16": "3B3YPV1JxW7pSDSbuWXZBokq6p81AqXj4bWn1R7wKJaYYrpp9AHy6sJhUWGejgkjKY7Er5SsYdAx2GXuACh4gJ38",
  "key17": "4eTwVF7Sv9UDZP86k5PQDfQLiubx1txAU9LBG6pM7hDRXa5C3mXn15eD18bXmQ7hit8ftokwsNUw2ShEDoW3mpQT",
  "key18": "2Ga9k7drjkhYonBWrgr1wKeokVCgtmHKztsqLa47tvKdfN6gDgjs35DWFarHDMmok83U13rF7PUZooJiRoWv9pt1",
  "key19": "2mf6ERjoXtgTp8h64MCtFmfZUhtnAzu31KS2VfzBDRwGzXtyC38rUgxkovckmkLeeVrf1ApEL9SYSCN4F8PRfTa9",
  "key20": "324YK8Jh4ngqGdWiJ2fFwuuBRbL7DxjAysrJX4wBchFDJsosp6byq2Gy1mSqHop3jVQoreNLa3PYFRfzWsEYzfpt",
  "key21": "3HaB9FLUgtqVR6xj9yeuF3NZdTbXPyvPFDAjJ3ihny89NT8gmNSpLEfeDaepY6G2BtLyBSdY9aHrw1TMLcWR55q2",
  "key22": "xS8RE85wvnwSjwoQozXMqRD9DYZySXNkNhQwVi8xHwZ6QLywpZPrhA6tJKKLfV4b9UdRtu7GC1SV2ik7c4RA373",
  "key23": "4jQMenzkcWz5NseQLCK6GWwN5cgTiNGqXitUwDj2CcFXCbUcbJPPWKWu9pfSHUEDFYZcCjT71HxY731YYNyGtq4y",
  "key24": "2wXXaJHMW5pmzSG3XUkUsFB6Bt1U5fZFWk21fuTHfxG1UzPShxwQHU1VU3A8DjVzmUMXd4dk56WAJvvhT6psPhE4",
  "key25": "5mdTduuvcKojoKoJ6L2Pb9F7aChyLGnexVEaUFnBwZEb2FJfso47sHAfWUbwRbUvoz7cM7EgZ4JVV7AgF6wQhjGJ"
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
