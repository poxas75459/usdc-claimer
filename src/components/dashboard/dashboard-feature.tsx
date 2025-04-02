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
    "2fuZp9bAAsxES1QFKfy5FaoUxHrN4EpXSWjNToGDH8xqJTFAP1v39HhNvDdNB2DMWovy8L4VhH7qbrxnk8zYY1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eYcVeLxvCNXrRejnW4mAJUMm6ngjEN7qN271QEGYbHpK8PkEgKtnXARwSj35qmzUu9PqaprWZzKXj4RsTWtgJXz",
  "key1": "2LZhKfMAzifyNwTJZretBn1eWRDt1XafoGAwhD2Fsg8nRbPij4jczUouzadaf31nSBcafWLNbzZfKm5AchHECULn",
  "key2": "4YcPRmhVC6MUwbjk4ixHNBGfgJiWS9UZUkheneQG3w6Cv3D9nZpANi2xXnLj3A3e2hYhEB4mPN2WVaS1eUZiCqGv",
  "key3": "odU78t4LuJorYjJ2TFtQsatEYZX621m79DeWz2SpWekUbJx8xRp1aMzps8hoyqxUCWnka2X5JJRJPEvKUKwWbp2",
  "key4": "5kydSoB2RCmDW8WuChrUBVeZrEi2ph6cvSwdwx3DM8oK5KZexdconWWLgYvwyPxs9NXTj77vhDfKoHHG6mWGSQXP",
  "key5": "3nhMDf6T8jwnQJ6s3Hno6SF7qgax9ne7msnDBY1aZmWJgDb6U9RzupHfZU36tdDWJb4Y9nSRjKpkpW8Xtn9XNBKL",
  "key6": "5SeNT3aNpzZcXmqAZLXepf4T1iooY4PDjeSY9tLGotogqcV4LygNifqN6aaBPFD8K6Ag2zAoUQYUxcw2N4koGpwT",
  "key7": "wFU5VavWgVbMc9QdNd8AygQbyED7xrhPXN71vZF9CDf6ZJQFnUZsAbrCXKJrvzTtdirEjW7P3N5ZYCL7Qct7jXM",
  "key8": "4e3XPFvisDEjjrLYVgNY4Lvqjh6Y2VGYVw1Sn7oeda7zttbJvF8L5EoSpoKELTS5vKfYRUx2ZyrBnPiW73TVY2at",
  "key9": "3W3Es9ZR1v2jdViUrK412C95S1dNm3t2kwfw7o6tG6ciXie6wL4A7XMJfqw2D3KHrfSWSEhftM6Lt42nMr9EaDnQ",
  "key10": "4MRnbk346tGsFtc5CAoZduVVxJcKWP1tuetjBhXCz25FgX7DfDoguy2Dm1Bk4K2nKpU5BbEzicNfctoFwemhYZha",
  "key11": "4KW8anXXD8Ymccn3yF75KszqWZWAdJJKQMVvR1HXKkSQ2fp7zhazqAqGhNcRb9V9B9W95CTTvDRuhKuoj5mJCp3q",
  "key12": "5w27VnCdZcg3suHQdcr3mCaKkjt752igGLeWSutY95TLafBhfMwxFRRiMsdWrkVE8vyJweKDZM5KpYfPs7gJ82YA",
  "key13": "5Gbp8HyK7ksmXVSyR32yFwaWdXSWJAe9948rBnZhW3Jr8hMPXcRYDEEcnpTYm5h7br7QoEdkJHT1CfttdQnAj6F8",
  "key14": "3F8sJTn9MX3mzVptBqZouJ2HReknkskzDLRVHPEsW2f6yXRutBsd7wJAraojFRnnyBbko1wdfiX7JtjwhQxUVu64",
  "key15": "2bKSzcFFGYjGNEL24Lnks2Y1VvVrsyxDcAQ7gHH6a9rAUd64iejSurZTodYNu7egdW8or3oDdxKeMVbKkKXKo9P1",
  "key16": "3ATC7DHrQPmKncZimiwZccENKzWQRpsacdZbboBJdibZPJKxbE5QXfUGFpBVUoux1YJA3jLietEEMbo6MseUNCKT",
  "key17": "2mtNrDPyirEw4Ucn3fYNvYfvys9yQNgwfwP1XwEvgeECiuME7eQhav4Pa44KqYMiNaAP4x3ZtoxXHjPKhvhWrtJJ",
  "key18": "2iJV9pV7gfyLBNgpFLdi8M3VFJjVPWqz1yaPmtHw7aceLQqrAzbxeqGGQ3Ppmj7YKHBbRDpj9Kx1xfrGmeXDGztn",
  "key19": "38b6tEq82ENRcdeqBNBjgaGevEXkS3yGZv4gfFDTnQeKLhKHMoRhbTbJNQZMmh7gKGTjZP5dvQjvNM7b6MQBMovq",
  "key20": "3J4Dtsn1Jeczf3CDT22ahc3XJJXEqinZEYaorDmLXxN9VmKv9GtFTH1zzrTYgNjbGmN1GZbA2oBUZmkU18FdA1tG",
  "key21": "24vb4UecGKEcbskAo8e19PcAwDyDyY483Qqm5egzVnJLYS5EYC9o1bPqfn4uwFpEJpVnDXj8dxzNSSexuFMC1yyG",
  "key22": "5wPdqL2XYEEqsPmFnYRqLr151XSqmHqihfyjZXRiuxWWoiGQD4Ht71aw1M5rNGq3PZVwjehkTdZj1gMeZyaSZ1Ln",
  "key23": "5Ji1MTo9JiqubZsehRovrpMVFzoC7Ki5fx4vrUUzKoJsNFukkAgR3rbAwcwmXkeGsaqcQ7zCkvZXkQzabKjWbqLR",
  "key24": "esE1z7yrMDUhz2gc6ViBMfDx6oR4ueyxC2purR64b5EFmav5fj9KYhDzKZuuPZsL8szcjASAdFu43FKaBfrUZ7f",
  "key25": "3FhUZHpgVFNnjrbkJiJWPLU14xExFktorTTeYKdbTFsMpHg8ELAoNJnDqVWbwALm2F77LVt6tFWktC6A4tkqYN7m",
  "key26": "aajLpH3YpHoBCMyAAwSHHnVDmWkkos4t5NkgshAbQedCAaQpEMj7c2BAiFvk8QBK5jkM5G6733Lkf9HAN2cpt21"
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
