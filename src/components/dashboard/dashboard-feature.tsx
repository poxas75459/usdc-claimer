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
    "4mgRBwA9nTVGPw4Y7NekANNB1ibGQ6PaVaiP146BLKgF4ihtnU3UaSJu4eJRJRWfUZKW3fDM97LiuARGK1cjTXE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKFPfy2HBX3Nd4aAkW2PC26Nsah2TyDUNVqvSpqG1J7G7y6zkyQYGS4cQCp1gWRe1GeSQA2J1WcZw5kgtT9XTFL",
  "key1": "4jNwP6X4ei4TffLLMTUXNWQasLByqKcutrqsUYAsCZyxmi2b8EchGMaYb9QcJEX3biefANmUpxkF6g4tLfxDcPnH",
  "key2": "DYHpDSeNtbbGosy9hdmK3cRHFzq8ea4jXo2RYGA9dfaCkiv2b5v53aadWHza29QfRtKzarJ83K2JbsxZ5sGbNXD",
  "key3": "GWYGFHZ5z6mGLoRrEamAKN5gXE4JaVdK9oXvLi8r4gLXLYYNGUjWj6fNq5oxBpn58fw5We5W8fsrMFcHUPwfs2z",
  "key4": "aC6vnvxaZAZERuXi2wL1tKU2qhjc5GKJyZdeEDkVhoa5BDo9eA5JjQcXZgN92txMkjT4n5VYSTBB7bVAwGPNvUt",
  "key5": "2PoHqoxGVPh5PCcCanQQaGyEusvgzikZ9G16rSeYeowNg82h1TNfwgK6QN6TeFHeTsK4dVjKy3wTbXz5wrCzEaMR",
  "key6": "2dd5Kqb9BNpG9SQM6jMcVVsTDMqS51611oascoZUfehtwPEUWRbRk9tiqW2TAatkxz64G4VuNNqkmhN1DHitgw5e",
  "key7": "jZSrnPoqX5GN4nxJfn9Zy9BPPaHPC46RHVje43dDFFqHVEDjAefuX9ianeCNxoEmUnhYAShZiX5uyAdRAJ6fAZ6",
  "key8": "5Yv41UMG1jZDJPNQ6tBVK13zgjWQ1vEioCtCPk2VpWmcRfRk8FyrFYr3iiHd1FHWHd7XSJm2KX2qjGZiDETtLAuh",
  "key9": "56BG9moJ8Ffga4Gb9BqTLyR3eo6jTr56ZskaBZPsvdFXdrnrZsHMqeaS75kjYqZP3cqYZ9PZjS4tRwmJ4L9NbbU9",
  "key10": "3mtV1hAdcj7dNWA4kDyMuCh6ZLrgUYoY3P1ErsDfWz8QtrXSsN4aEAAUsqupZ5sc6hiWZeTf5BqVZ6sg3U2aM3LL",
  "key11": "3gUq8bAtq9b8V6EVCJrMdkJ4hXgucoB6y9t59efVUPmNhYFs9stpREWDNyNGdECgyeHy1FpoynHkmbkkJxcizmWM",
  "key12": "q8R5sfUtpGjy3F9mNGZwCyy83WVb4TpXQAWF2zHqfE3JmCKgMC329W7SYh2qRbLHP3VHk2VuzqFEWPiZTqQNPVd",
  "key13": "318Z68t5wZwHJncDz6q1gKC21qpuLUXhfqVEvTBWSKs6xdcJHRenNVBn7gjEhBiq1i4R1HyZePNnyfywFE5nH3L",
  "key14": "3DYNXm2GojXsWYfgjU1N4zpxb98GPufvHzvPgoHD6WwXfqJNTDgZJXHaXwfe2RBctAJgDycnegb6MjUshGf5PjeP",
  "key15": "4pU7Mdv5YRczH4LL5BpMwmuFVk1X4Go17Dcqn9jzJ52MR7g7gGZijz1NfEboMUW4TLZHwnTUCQJCRooXCzXEcBok",
  "key16": "TL2WxmDVoVaVpJNSGi6v4nNCwFpCaJtNhw3VKgr64NK8r96GkhT8d5xEb29ZKkBN73mLQhmYma1p6AaQru4ZGXg",
  "key17": "52J1acdNkwp9eC2GUmACGDyrkVgvJNnjUYPsLyuFCi6cLBRiZNJfds3JjfuWw72pzgUrY5Hq12RChfjFGhQQShd6",
  "key18": "2ZRZj7xP1RBPHx5H2hS37h9Z2Sfca5rAsb8sGvzGCKej9Fi8z1UNzNZnThdEQA7nHJh6r6CHkLKDzr5LGraVwtR9",
  "key19": "33XTwKsqaB6j5yrERJnMS1tB7wFZGBwcLpr7F6h89zLHx8CoKMdK6qein7j74pA6ynekbdS9qLdwEWAkpka4UsLe",
  "key20": "2KKoSyL5AZkyGonSRR2cttVEujESdt3UyP9w22WKeNoQTS3szgJhJ71ZjJhVRibkgmMhtMafM9Y34fruvMD8FNxw",
  "key21": "5Ztp6QM8YiwA4ehWNEE72gwnJPPSDCr46YW6AddR2gYXhzGZcaP78UjfJpqaxckzGCXkVAe8AwCXGHZnCMvgz2Xx",
  "key22": "2arNddDmRBZ5Man7cBuCttTYYCrgVdZBtNQpyc8KnDz25ZbG6sZ8AF1vJVWW38cgk3XkogaECt5hyXPwLXXJ3Yee",
  "key23": "41PamBRpHP5z1ZYbW2rYRzfiZ56xVi3d5CesyVcUUwuis19WjGM2dsoMy2gof4Eej9K1x19QZVNunQfYdC8BYh5v",
  "key24": "3JxvMYpujEwLfaR4NY25MgoFA5aJ1AVyAZzxEhwkRCecw2PT7E4dzDYGLzN5unWA8aNQHVfVhmdsUJmSVsdSr1Rt",
  "key25": "5v3YUkwm8Jum8GbV9iMutGd3y1W5FtKLFK21JRam7mPSqKaQTv4tULAZ3UaSfqd9LzTCHmVuLL7EWQrMnmbywF64",
  "key26": "2TWWwRs1TgnzfQQZkgpvnVZBGbrx9TbJXvZgvSjUxrZWCY68pSC7fVfthTrPyBSrXqzFudegEyKwF34BzY5vRoWy",
  "key27": "mX1QzuUTXbEeHLSJUvq5kUPXpDyPdFNvbJvgzHK4sZfkj6Z7f1XB9cZLBRmMuCHM3NtgyMHpyyb4PXQVtzHLSBJ"
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
