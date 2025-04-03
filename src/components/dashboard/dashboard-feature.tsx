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
    "qYGisT2SLX5G7HE1WjH5hL2WmuRCtdKVffZgQZcwDzVxhtienox6fkjmqBLq2BLFnhMhcxC7ZSdHYafFRUkjozC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDxDCxjwX3GM8YA4zkv3f4k6qxVG75MAGH9Z8B4brMLxZa7hqD4rhtT115PdwzxC2Avi6NtRzJTbaNWmZLjpBnr",
  "key1": "3SB7ZD2LjHBxYNMBENT2XrcGVhEKUjHVhrqr91tqCUsY2ZHYU94FBajTCu1sZAdHLo6PX364eapQ3xVsHKzxeN8H",
  "key2": "4aKcKrsKsRFuBSY2J9sB4t5RksCv7PHpcLE38y3uh8CY62LfErmGdfgTcqxCajaLCQmKy9swr1m2RchFR9iLoqor",
  "key3": "3rboz3QsFj23gPbtSi6BACkFdTez9K8uDrhT2oBdBVPdJhnTc9ZPD3et2Daz4jVnoH9tWQ9kEKsckxFazr3E8jS4",
  "key4": "2nD8YB5gp4589i67J8A9RenyHQkw584fL9SnRzFqoszmC5mJJXz3DN2YY4n8aTFrVXDJMoisAmRWumqSADtc3U7y",
  "key5": "3FrZ8DTdqNVfPQiHnKnNGEN3nemPs4hWHL5LgsvdLw32Bkwug77LgCUaVUJmprrgTzMhpwDTcKWWReQcD3bqURav",
  "key6": "47kJmQzwppo8HkgGvdTd7vQQjuPbxGFS6B9quP5GNGqVmXcTKc3ZsB2jWjgbqPnAFYoTkXHSMCwXPzTMmKGyh68j",
  "key7": "2fg4G7PqkbLSRvqpcjZNvaTn9PKT5GACJKwxQodXxkuPu82PwGJqy5M7s5WsaSaTVDwpw4Ab2KrahTVSq2mj6ofH",
  "key8": "4cf7nu3seHhGoSSX4Ycx2ALJfpq2Pg9vohBGqzRwuTKPXjDwyFQ5GvVTzjL17uemVoXFFbRYBeJWGzzeMEAmkhy1",
  "key9": "5VisaSY2rACgikip5xfuhHE4ojArf28YMeAThbDGCxAhXemFe4LkGYDWGjAVrAtF6rgY2DrgAwSZh8BzMQ7X4kKr",
  "key10": "AwNu8im2LwK1xKPGit5hXvSBmPWURgijMV7vvPM7L9C78Y57HSA2qh8YeBzDeAY77ugHqdbuCynsjs95WDT872U",
  "key11": "4Q6g27XjQyVYTfcxjUo3VKDZVu5A5axVBUY9grfLUSuhzrpK1cYAoexVyQxY4SH6BxWzSPtrJN6LNSACnZWfi267",
  "key12": "4XdVSHVKoksYnYVcST9PWVuMPeCTM5CrqgKBQaPTm6s6hGhfjpVb5K9Swy1ATPWT8LcB5qkqGjqKnYsbw9MTFrVk",
  "key13": "4mMT1j5RyGR25tdZ2pHgmys3dwYa8hLi6LTasAQYD8aZDb1myMwiEUWNBaDEqvHFzUeGAff6At7YdK6ixXdTvUS2",
  "key14": "275AiPdHZmxzWuxBv4K58Vh9MxJN3D23bzzXCGN8HYFK2haxX9JuAjHqNrhjr3NVfpNHcDtv2WnXYj2UqCYKWMhZ",
  "key15": "5Pe8mdhpf1zVTvfwxmnrqGN9xmXBYn2euoVxzaJB574ZNkZ883Qmokbc1PxPBmH5NKmdoHKA2KZMADNeXGuXjToa",
  "key16": "2Wv5YMNkk3g8D9qfTt2B3BCk6xnrnmDKnuUdiXHjuA5ga6NDSKYWZmWH36vYrCgmfyNSVK2RuZUWqQzVvRfTsqq6",
  "key17": "61Lw6c1gg1orxP2uZsVaACJDTeYxBLg6VxTdxCCGTfaap4Ptxa2hwi1r3kwH2j8ANxHWcyrtNGwEMzpsvxZwSmjs",
  "key18": "5K7JQotE4Bf23ZnxrXNyYw7rxLT2kVWopR8yzNM1gvy2Kum3kycgF1cjZGaxiRk2fDWGHM2vExuYv2zSJmfNJtx9",
  "key19": "RznXWwsNevGcwBhbPoZaEcZgp5hvCbzvTFbpsYWequyQ1JUswmyxdVCzvszB3gNN1QVAMuu9CaTWVggUoUwyiYC",
  "key20": "4wb4KSQJF2ggpdk8Ku5ymTig5MfRUZwPEf22PFrbSWS2rYkNSJxQtThhCuN8HccQhXxGYAcKWA3KaT1WGkPj2kRb",
  "key21": "XMn8j8htEgNEg5rWaqVpNjhbtTqr2Bo7TQZ9pT2dqKLJfufBocuS2Zw4FZTA6ChEyVo8Nyobd2ih3B6oEzbqTPd",
  "key22": "4g6BnBsrgkPeuLQeQ43DkNEXBhX1iWALkZQogWWXrRmhJ3SHF7YwUFQjtL7k5zqNjA9poFYHQ8v2JT2WoWsmGrXn",
  "key23": "DA3ieM9hnVqGz4FYXU2VzkpUzh15nT8tctWbhzY8H8yLrx77gduoXeXNXte8srsukUDjD1de8P4HCEtfgHWk4Bf",
  "key24": "2CcZYMVKCqyp6MJ4PmL9MzeEQimiPVUroUHT8uzs3A3mbg6NpdeganKSwpV6GLuyQext8ZZJkQiuXU7dQCCYGryv",
  "key25": "4HbGrYSjiyudqrwAzY42mQSxR3PDpGcdT6YPHfPdUcPsXkCVffHs3LHWMgjjHLeyoKYXyipn83siyKYL4L9cUjxa",
  "key26": "21oiX8THAU3qSC3nXzrEbXWWANiknforQoLhhcvNnCocZjV9Jf4wGP7jae6Q2QmbQeyEVmXqj5peeaZHC6MEfZnp",
  "key27": "588VhRMUtUyqfwUFG2KEMLWzVTpojnGDTfhEsQ9EbUKPL1Pr9Yq34oGBy7wq6fTzz7gVMHWgGgz7WiAvR86rvaQU",
  "key28": "2o9Bez3tMYusE6k8ViaDDjv4S8gu8jYCTwVm8SArTkD8RVsjaY9hAvYAkGuNdyBx42Pc3rnqR9qRHaJ7z8JSbWa1"
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
