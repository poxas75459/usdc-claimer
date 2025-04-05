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
    "2oav4GwNbQApVjcoKPtznB35cRG7osxcmktMnTGGKEgVQJn6Nd6niKpQrW4xho2HFD4yTHuwZV5VMTbARWLeELsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZwmowi18rLcNyXjaknvznUckNAzgC9Avz4s7WxXXhTLUbPRqaqgbcaqUbpjDsjj8LfQhJDjLjDdgMo2s3aruEW",
  "key1": "2VVYPK3q21DVsS2qJb6ypZf38WGqPYtQZXqPGwKRpMMq8d4KmT14PKAEATkqu9z5ipbdAiGNrKVh7hbj4zeym1ZP",
  "key2": "4VSZWfyC7oodDsYijD98G9dhMBb1oEvVFzsgtD7ETeRRrVnUeLhkZza47jPw2EzhkR5xdnpwyDaaoDxKyHb6TKNE",
  "key3": "2qYn8jM9GGjiWf9zAUnQ5d9m8kQEscGKycBZLGL4tvaGmRF5NBncChaENusHqeWJGqsFbHs2En6rodFME1AE3bfP",
  "key4": "sqQnWegHABvDCSi6CHJGRbMYa9jLPdn5MKrDBaeRFWRPtTSWwfNVopbTpZEf8AkvScM8dkGQbymWMDiH6KiUFtQ",
  "key5": "DFFMbPNkVhbcq5Rd3TiufZwS57BNTY9acSVmo421QHmBMEKCbUf28KmN1XGLyrQdWq4x3S6tYdMQ3EuTgePHU6B",
  "key6": "4d8kGkSdtNwQx2mt6v1rTQC7vNziBaJUgAsELnn4xFMEQ1bhb1SLgv55SBWjnoUxg5UFAFNjW7TwCQYQch9hGhnr",
  "key7": "2TAB99LCC5BRGNZovuCd1FG47yDqR8vbCFfPsf2K8uoAJvk8F3i8ek4t98x7g8XoY6T8qMq2HijZki1j6rPkn6qD",
  "key8": "3wH7Ny4GqtJ3rPzdqZHtHSQs9dzpq61nVB4bZK18ZkAMQ9LbEC1WBswvmFa12HiqxZ2yQi7ZjXYAvcFmhyg4yUzH",
  "key9": "5xbKoPk7PcUuDeza7a7LVhSFHMsgbfTVt3DVYH6VhMgMZtw2GbASvqjz32e6gQSgChPGnokh7aYuapkF6t6EZCyY",
  "key10": "4Bqs1t4r2HXQoqKX6DgQ78PMSZtSvWtcUtmpExv6116xkCvqsqgfcCqN21kAzh4ubGcGRKxYNbN3wN4woHAZYpMw",
  "key11": "qkjbcLiWZeY6jgEgnKNuxiwTmKngoFfTPSkz6kqT7jxa7XnwMUkKKVXAxgWUXd8r3Xe3XNJktvPYYYScyUxo6aw",
  "key12": "5CfnQdqsz9yWybUwLhT7MMEUvpb36pR7qy8s2fLwxdNNjxNonLx6RrCYgNUjXMYwMjEWCj1jTMXZFnUbELUEaqVq",
  "key13": "3yReJCzLyEJUFv3KENiCeV7MuGT4ukq4mhmH7Gg2JbEDWUuWvdF1Q55inF36AF9umpPx7r2ufvzr4WheL18HSRvW",
  "key14": "35Kjy5BM7eVpqGympB4YZbgvX1uHwKKLZBCYGgTJJwT81KXeAUgtHFgKAjh8gAZsmtuJgSkjkYRLZ73Lg5WNRLnJ",
  "key15": "4s2WAyCmfnopcEoS1FAcfZu7Gd8KdFi8hi6iL1P3nmUEdRfJ91RA6hY1PRBQkkdaahVRerLgFU3oWKZ4MX5Fp4fC",
  "key16": "y9bQYxiiawGs8EykaYcR7t2ZwVuCjPC8G5NHUXiHgf1Z5fxkgVkrN36dZrZwEW7F3bc6Vfx1WZLwFzwNK1fkzNe",
  "key17": "3djBuEvxXCw6xNegNKV4KDGMfTYfJwrimhD42eixnhfg4f5syfkJpfn8ipjr5hGafRHj5uwtjVJyZGXSBYd8iq4N",
  "key18": "5tmP9E6PFgmbGXYckzyzbVrX55ox5WemaReHBBoLce2izBhDRpfX7gYZjJHz293Uop9RhQPctdPRF2SBELJtZYv3",
  "key19": "57qA82AqUApFFti73ZZSsiYwXboip9qxacDAGigkDejcu9fCUaEEr9Lgvj9HFGU9UsiP4ZNFKA5K6adFw3idr1Ub",
  "key20": "3x85NwWrj9K2RxAUGUSdnvSPGJNWNAt2XKWrFeN2h63aLncdYmwwtbQ7RW5uRKxX32JvpJjaK5nuhavnVfoo9dTw",
  "key21": "2cDL3WnoSiJE7GLMJkyCCWTEFnmZaf9DWN2QPnHNPnQzogMpWUiC48KgVtAvnD3Q4VZoxuNBbDVVGAxM3FH6y7NE",
  "key22": "23hy7wJJKbzwuj9k9MZRN57MvXP48LKbTqsMFCjXnEtfydkNPy4Z4hFaH6hYDgTpEr3qnQ2hgG4hrfJDBDv6ZrqW",
  "key23": "2hAQr3gZMTEM28xAgGNMEmNCaniDSehdK2oFuYwGSNPwSEoF4fk2TPxjXXSSJSFCkJ1tuLM4PXjHry25C1hScVFg",
  "key24": "3cv54xxbjUSqnCfTdLTdzpVq8ucuZVi614nVZCNVYRwckKeWa3WMqzsKSHe5EfVrDFVPCqJH9pB9th9Tack4W558",
  "key25": "2UX5511n14zPWd36NmPUqZ73qbdosfWcFmdaevKiPLvp9Un969zDGuKoTQcyXNjFT2pWbU5cAd5y9W51exCB36Sw",
  "key26": "5LLbBXRtHSta3Xcny9HFUQPJpWYnjrUCK4XdNBmbAkrsx8TQzJuempvPBnBDWXndwvXFTfxXiByPtQXu8oXAaDU5",
  "key27": "4SyTExeZfP2drXc2jdty8f9rHiRLL6xwakJ9FWSqboZSkMnCaZCqHHKuQk4BYxumkxafW9RnA5PCGztyH7Lei1Tq",
  "key28": "VanQ4NokvmxonQyjAw4DsnH79eExyYNXXwVaZRyL8A2nEX2CGC8EZG28awpEg54MjuyJ9iCU3Kai9MiYGH8nb4T",
  "key29": "5pB3L9Ndr6TEvmy7xsfG8DbR879ZS1g1cVtoBr6beYpysNR4aBKvmD3Mjr7ytoBz75yEYEx4VSwRnbcUtFrTg4mx",
  "key30": "2MDUnks7CUoyBNk38RojmjmumGJD5NuXhuvpPuUxH7AQNS4TTjpYHhhrqtVzneeA5bb78gNPBMcDZEaQPYm5QsqH"
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
