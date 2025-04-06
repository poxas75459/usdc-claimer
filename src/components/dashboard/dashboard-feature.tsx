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
    "5YLdMztUaC1Nj4TUg5Zym3ZHYv8MpnPN6cURid1eSA5XRyLAtkNNG7BG8aqCzEoP78qz9Us5XjacUjyGASRJiprF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wX3k6KNUGu7npMPrPFNTWXczSAHYuR3Gmmj4pmxKQ1FaRwutX1XrDjSgjQhnQURjGNaW79pX3JzqLE3RhFrDbvK",
  "key1": "31SpZkvrfmDXH1nzitDTK4tAq8tPhbpmosfYLktWa3BEsUWunbYG5PYMDPsu6xdyXNbxuNY3o99Z6Ufe25Q5k6Mg",
  "key2": "3JNrvztP72f4M9S4wREVv6tTserqiwsZHbShXDBnm1JaDQ8zHvxAhXQrxwnSSxEAftocXQjoVCracuKYv2pcys6f",
  "key3": "4ZQEBBr4UKWKFkqK4s9JtubxTVPscAzmeQoijbNeRbdb6UQSL6dYvTw1kDumt4A7P5Kj68TyyyfXaysmDnrdD8tr",
  "key4": "3cpWSCdJhBHgGNwV6p8P6xEGDVFLsdR2U8NsTrM1jNaksrbhZQMmKFoyL5cURnqdDPze3NN7Vq1Qq9Kp2ySJMjoB",
  "key5": "4vu3xp7HJYzaNNBcWe8AhJgY4vy3sT1ytPZ6o9QGGecq9Qo3juiv3W6mWWjjiWxFhT8u6wswzctn1dvegoAptTnp",
  "key6": "639X6AwrBiGsmT74JMgiqESDkpHMSymnCoGWYCFDzcCATA4riDEwGzQFMViXxgp1gUDPmmhHWKL5zMJ8K1vP5xkN",
  "key7": "2ULx3egRHAc6ykieMhk2YcHNmT9Lb99H3aLcW99m6tYELcTWtCNGrEthpTpByJNZmGcVKeV6ignCJqSCkrPRaoqw",
  "key8": "CE95vC8otV4LymDrTZ7qEMYig3GQjKbXf3kj5EEFrru5U4UPYG8c1veyQnbASPFpCi5hMbU4cdtuUtqCip9L4Rk",
  "key9": "KHDPL1rMrWFnH2Wg1msbGccjan7vHjk7TAKq9PGrXRibEsA9DFY2PDc7okNt3bouA7waN7BJBMAJeMRGMS9ibtF",
  "key10": "2Tq2mbaw5T5U9qL7WXBeG6W4GF1WnPkto9gtCkNsBRsfwnguwdAMszM9wGdZY7ejgUnhqzDiLf2rWZVcx4NQLFyp",
  "key11": "37PtheAn7b3DfvvsCbqZNbvQsb4miLJqFiFbbuePXMRwbVmAiFu4HNF3HZCaJffib8dL8PcT1HBBrnjhqVjY8wH9",
  "key12": "5qkGwyDseLM54Wa7ub31MqAU7hNqwFGAZJYE39j1wF5dAx1H8wYDbiQwPQoSfg8CPf5nRYjvoJ391m5DfFnWKUpr",
  "key13": "5UgPTmEMeDDzi2AQGcV6dUaibVH4G4KSaShdoQsrYFi95rGSn3db8QZActRScDSAYrG86vaBuoF2QSDdRi6hNV1j",
  "key14": "tUDgJ9WsNUY7niGQEsAoQEXXFy2t2aVAt62j7PV6L1oskQLQbn79iWiNVfbL3TdFX9DBubSQ2CVbtKMyi21uTid",
  "key15": "3Ha2vjYU9i25edZ6CBKAnyavbep3Fb7KBqqH6SJiRJyBKjk8nAXa8Vc4QUP1UdnR4VnDT66WQpf1BPsNwK8faU5w",
  "key16": "5Bamtqfc5ShvVN7UzC8CFqWZ3NaAjUm57oTjqt2oBmdQxeAtAi2VFuKQFHF251tkgcfJuD5UspBcDKXU7KmwE2Y6",
  "key17": "66uaTH8j3DsPypAXuyj4kbYrpikDap9BCJW5cyUsEpsvr4SfNeprSh6vXp2eoX3LRijCixpUgBkCcyMYXR7kjDsV",
  "key18": "3iLECcrre7HY6WF65PnzzRVfz37f7JxNL3HRp8E9M6CnsvbkS5f9o8cYj2WC88gt74sJBBmUy9XTbyY5JgY9Eyxe",
  "key19": "5dQv2ezbH5514SZUuarv7mmYnT8aa4G3jAkuE7V85tLVLPYtiA3XcwovYYa3MSRwp9LTJ22yuX2J4wsMEgJGQrAT",
  "key20": "5GjEnntNk69pHHuHyoxVp6fjPNCgMj15EG14TUMkRLaLd9uCGYfjd7NR3TY3Kmz3u4PeY517QXUDj5hzErZ6WeBu",
  "key21": "4URrbG1WyFHAru38TrhDs4YDihoHLQfDm73j5PDJ3nFWUkktZBZSyB6GiA1gpL6dKBXaG7WbeRb72ubGFY6XnHGd",
  "key22": "3g3p33Qey4encmy3ZPojcpvEYpyg3XMdkHV81xxbqNXA3Af8b2RX7o3VrRYoqSugchYxuGaaJMaDtfBjBgkZs2fK",
  "key23": "DN8L6b1i9UimbEwSzzuFTpMKTo88kzgqTkYsJm7mYEwmAAWtjdUNjgE4NrLAXeUPu6QrEvkXEzcBaKqGtTL5JgN",
  "key24": "3zu8zTTcZeKnYr2bPXiEJMUsH7ejgUXo5mKnBQLfuz6iD2yrNtB2UpXAiS4KPHM8AaMAfta84jjjxtr42FWz1PEY",
  "key25": "2RRFicjT2fZuMaj1hyt4M7btiRo2zGLDPqFHN73ecNDYLDnZR3DT9zCJdrKF4XNHeWUtw2KpKmmLeTt7Nk1Brx99",
  "key26": "3Rbmnby3ZrzsBoTnJcMeeA2VMUA3osLqKiwy86GBnxYQRaVtHEU2DbbQCKd3Qh3JYWgTrd6Di63qG4YyYBcwCyqK",
  "key27": "5HzuQRzaRQ5r6GxZq5SdZCybYpfcY4fGukSJhxSAVeMBuZneBkJ71P7vrdwu4uN42aLTXhLEfD4rcodHBhKXiNkE"
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
