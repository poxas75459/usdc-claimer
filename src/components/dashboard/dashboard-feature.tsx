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
    "3xcJZ4S73goRKuWwJkbid44hTLFEc3ZXfYRvdV3NUK79xcXtJ57JQWLtipCQ5j6N6x6SK6y1fzf6WRWwTbvuAn5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfbYXtCDno6Qr17GigNS71hmVCHWEFS5g2AmGGdQkvM88WnH8yQYX7HgETdg5gHVKgYfb9ri7rboWzT5Mtq1ZQe",
  "key1": "G6XW7h5hNjef2yjE7x3G1r7na4HkAs4ZVFXhrZRzJB1AwuW8ERnPEVux4TUY64gwDuoUKvBrwfC3oE4mjMNjqnc",
  "key2": "3wdWVXTSdtLGA11w22zCMpCayFUZijduzC9ZJMqgYNbpGWcQfcP16sQuBKEnY12CE1NsxVRViRy8MT9eS418WM5D",
  "key3": "473qrGTkqPGYHDoD86DhxC158xSHS889pgQoZdgDKxGR4Leom9FwsYgi1RXkPMbQLyYSdhBwFw5UXFEKdJZHxd1a",
  "key4": "3rQNgW6TRsPc8xdjy5NjknLYEedwM142axU625LnsY7yDDX3LKDhwqb7ZMGbFqzaa3VzWGYV9ztzjcEQFmXpFMNA",
  "key5": "4EFcVfGqkREpjam2wwckh2Ltf9gwXQEoM7ccYCJD7fivg132RwFswnyLqV39dCee2BuvcqPzKgufgrvk7c8fV9fJ",
  "key6": "4ZxfoMPvVz5MNpZo8Q3oZxnhGyA8NpjjyiKpTHVQLUwduWTM8wQEcKtesB8MgYYPCZhc94JkdnW1XNPYmGH6VKSA",
  "key7": "3VE6ui5KYzAZkUnUQgkWYAuHp1CtRv7tZTTjBWuvidPBfVkdMcP4PKbw4ScXxuVSmKsyzUGcuLTmVF8FKd3EB6qJ",
  "key8": "4HFL7iozNSFc18zQwNNDkSYH32nY6vW7kybt4LDTj1cA58Gmc1P9x9ZAJnjuMEXbg8YVWVUFREZLxX4muCQUWEa",
  "key9": "2kJLKB5rLjmEADc2cC84h5tm8WXjMuLNeTU7SSuUZwMC29Ee7jQodT1FzoCUKnQ2Stx9KUoTTKP59TPXZpZtn6Pp",
  "key10": "56SWtz5Ax8be3EZyXZ9JabjcdyniCwnjSPsHJdRS61JMgqfjbkDvgFf73ieibp8ip1Y7dGKgYVX57Vrz5NvHsAVF",
  "key11": "2fuLWRYFkE7bMyMdrjEEKYoUmfPnShrGiQ6gBvXNPkGAebmf1t1xQsR74361yegvoWKrY2QFPjrNT1LrcCEo8Fce",
  "key12": "3VtQB1mAzmLKyYtmnwH792x7VKpWh4jFMsC8zFkSBmv8T4wbU4KcaDnAHG5x2LmCy5QWtxGdMC6edRTX9KokJsGZ",
  "key13": "2Z566oJdEHAeyrChh6wQW4nmWLtARUfKGemk6sXfLF3oCB4TMToDEJuygYnihoJcLpBNkpPFJ64fBcRXnfWXZxxQ",
  "key14": "5e8TK7zXSfZRXvT274bdyqiVUy3Cq8LSXe3QhzZDuh5EbX1gssYGEGXrY7i1tCtmhBMnNA3T28EXihQzXcXrfV7t",
  "key15": "5BEyD5gWA72DW7vBdnVBQNLXEkbPswTFETRkpHVAUhuHh6rnAnCsdMu4hQ4TtLnyro3LrTUFnvYjD8hj4Aopsyoo",
  "key16": "37SebGwETbw6XJdx6Ma2cbWF3nPJ3Jm7sqtuwr5Lhkfs81hhsJmwmEqbyFDd7uCQA8LXcoUBXiP8e3p5E4iTgmtP",
  "key17": "2H1z2UqE4AvARTtVFTKGzVznsn3pq9jPQiW5CiDCvboaMGbaWQbtqEeM3CJ8yVW3uKoGANjVHCzEW9hDxmYTKfXb",
  "key18": "vye2BnSFN1RVKtYknjcA9HZCbkdk4dW5j6NWdpWs6X7N5HqFFB9S4Z8yahJPyxyKYH3z2nFRWcBRLwJugKcwcMc",
  "key19": "57J7zQUiJ4x6nkwzwuTHEgoh4GJDfBzMX96yfZuzQ16TSC8NdvMPuZzdw43tMPFb3AKQ6gV4HJ6oEmUG1bYJFyB2",
  "key20": "2uN4xezMtEjeu292P43o553h9o6UTDLhgwwNSAwMGr7afbK43KDzgwB6G6yntGGyk1o42mRtAMxzhwPzDRa2ergc",
  "key21": "SbpWQURuJcBUkHUpV1HqjJUu7zr6Fd8aH4zES5TjYHW7j6vZeZb8ynKGq1rk3i1S8Pmj5jM5QHu5ZUBf9TPGNkN",
  "key22": "CB7braBJPf491XMVrY61uqz3TGMXHrc6C3W9SztUoP85PnnEgqVW4iTa8t1icSVFMC6rUK5zAjvDtpgnM47hEZX",
  "key23": "3eB4So2C6YLwWx5T5xdwPxMsEnDLxc982d6hELqonFK2SCaFhvh7UCgSpPvEqcyGutp39tRDon2vf5Rs7bozJMgs",
  "key24": "5wzCtuiAecTUJ5CNJQ1UdXcRt3QjQr1x34qiUnCc1ffV2Nm44vg78b6QtH7FACpTJYbDaGyLMQbydYZKUJoXiNmj",
  "key25": "3NJ2kBW4T5nwwmivqbpJ2PXDHKNvEiy1Sn2KDiAF1ySq4bX3chY3hYjcC4SXGooe9BrbQhiCU2tdTwjmu2j2rJqK",
  "key26": "5HmNY5PJdyurjt1WoNVevDCvqqMiRqfhKZjNwfiNhQTRUDY1vwAqUZ7rYWPd1xwgax9mhKWLi3WRnwaV6KXVd8DJ",
  "key27": "56kHqMv1oCPMboJwDdX3e5uUnb3cbVXGwjKPu4jny8zKdhvSh9aMkG5Sdhum4VGyWAcbkwozruT39gAdEmU8HvqF",
  "key28": "2ukhWLX1rGrDyzeDt2AXc8hAMJqEsyVgFTK3nssNm9NNtkKjSK9vxtoAFCEwKm3mJfUp2xhSUrdnvgNeGho2Xqyz"
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
