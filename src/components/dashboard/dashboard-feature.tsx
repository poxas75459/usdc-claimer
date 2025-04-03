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
    "5QNTiq8Gpc7BypkS9LcridhoCMqpDXsADRtKDNJtCp8ohEiDu5omRy4zZseEwSkXeKZyh8uwC9rBDthYs517VoJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36J2nf7qTqoxcDfaUnetjUBxwxUXcjzd7fAU6RPihN8KcQ8WLvNMJfRbr3ayTHM2Nhgo3jPoe8TM1mDnrwcUmA74",
  "key1": "GtVmUJxzg5go2xSmKFgs7FzU4rqTHzmExTDmHHUGVdtWtiYkSvoAQzqi6JYGNXWjFkFCDdzUaUP7gpoFAiBVPXa",
  "key2": "5PG4tTcHx9nXUVR3sTtxkLRme9Gi5VLz3Rh8w97AoCcLyaXWBVZPf8ubf2KEnG63qqGVE3BwEMVpWhFdb2zewUV",
  "key3": "4JqB5KYytT4136LDuLSotLrMR31Neiawu32TfPQQWdVWMqHwmyyBDwxwjnd7yj879S2WMfSZZPNxcLso9f6Dgm2u",
  "key4": "2rdhqz8s3GwX4tnu8LER6iYbhggcQyP23JevfENGWARyx2jR9vYfCMmA4c5QVfvxTjzh81hzvKcpDRNqYWfxG3ru",
  "key5": "5fEfgbqRLJPmL63kHiPKmXhZm8rtq4357TTwxwiYvwYNBqHzRuBzEJb63CsZtLxBZSmduqmr34R8LcfPGvSiXU7v",
  "key6": "4YLiTvWuQdTUhyYZRjSnwPXbRsiya9PaZKhwie2LFMYrK522er2tjxSn6pU1PELtNHw99orpjRbc57LTcTk9Pmig",
  "key7": "63aeaey7UXhBrFYPfrnZbF34ePUbM4qjpmHPQLycVgHtQXatbmbxXoSUEXhw3EPAW5jfnq9KM8uP7nLSMXDBy2PB",
  "key8": "54nWv4vX6FCH3FY7jQ9qx7ye9qhLFSC1ZU2FkmpKNwmXHndzTUrLCp8aGbGqFJ9pQaPLJuPMSqCG7QJGtw2FHM3P",
  "key9": "3G1XFKUXDRYAbcU4bnKCEW75yfBhiDrDMf9Um7hVRggaFSLGQdoQyQRkyCJpTZpHrRFTza89PJxqMyD3qHwRnzvY",
  "key10": "jJmwRDgcgSTsGyiaRszWPKb9Qigbhwj39N7hNWupDMXWRKsU8rWvLGy1h77poBn9xE5a55Tj6zB1rRzxtGxcMCj",
  "key11": "3KDNeR21QAnZvpz9AtaDYMPqyLBXPLnQhCbUnyS89Z8EzSvsgEkkrVkrCTmbsHJQDa9bzeE6JWS1dLPW9LZmMZpi",
  "key12": "24zKqGDyQoXPS3Xi7abnYGUmAo1k9awd6cdH1bKz5Vg9mA68ggd1fJYBU4u2Amk8TVm5SuuwRjkDqAqJM5C6xZCS",
  "key13": "4h6K1PnVg5LY4proCFu5RALV5xoyZzVMxySzNX9ckDDGsz1z9chSxiRtvcejubPEeSn6AY69oGaqiCahTWvS3Nyk",
  "key14": "5ddnxY6kZFJ9TSvsmefEi37BghGutJh3wYNg8g7r28KkLgfoF3jmzNAYteAuaQYcxETvHuXp7voWXyJiQ2yeDR4a",
  "key15": "5VcviVFSqpqqMqU6g9H24GHamQzBE1MKfVrjPmeBuA48fjteqVAgSvNoxhpStQ9Z61ZLhoJHDMUoeQnk47B9rKKu",
  "key16": "2kUuphGxZohcdR8mKZF2CvABE4XALzMQ5nC2CrxsQMKg5oomXDKsJNjPwNM85CVj79GVviBV1GQyUkSacSgwzrYg",
  "key17": "5DnE1UkRdquqsPR483KaSYiuV9PCnPhsduySNaEH3cw5ZYAJHq57sBm6Y54p48HMdYpne3FKazoiCqjMbdRL143e",
  "key18": "3DxVvkGzv3otKawVbgyBM9BJR1jvC87fhP4dutnfwCxdKiyXjp45mrKUdZtvBoNgTWkGcFuZfWuzs2PBW88EM9RJ",
  "key19": "43Rb5aDdCvbuT5NiaapXJXz3iza5umYYnwFxDV15gKBo5PPVBvEUA32NBojiJRjFHDMEATZGKr4HW6g1cjS9siZ7",
  "key20": "56ZRxtEQtJRfSKrjJyQjmyYmsh2ANP3AsBPLdWH9JCukzi2HFGCHL22tJEhwtMtFDkTjWVqbZpMTC1gkhRPDNGoY",
  "key21": "4GHE4kg2fjTx6F2NpCXVmAo7a9jK8HTmg54zuymCXJEbYALw8NDXCVLwAK2fC5r6FvcbVSZbdEoFB5hozPSgMGZQ",
  "key22": "2P5sTWpNFouEQcKQ4jkhAvatygbe4v2s7reGA65re7vZAo9DAWgNwjjMJnksG9fGGnSK5oqu93GFNJGDdae9dgnn",
  "key23": "mXWkWE8mNnB2Bz3voijmmAKbjohNpSTQJti4Gzc9J1Enzc9VLLfKadTiG3kdekyd9C8veqJfvSSKx3fDVk8sujA",
  "key24": "5ffmVwMARv8LTQoSvWcHHjV3UUQY32eLwQBZHWek9KNCHVdJhfuKvBo1qR3PYKj1YXe2PP4S4gPeqtLSFYweW6iX",
  "key25": "2FJBRnVVtpLoHMkDR836ruJbLK35HoPaNxAnhZjXM9uZJ7zVK3CxZ3xULPP6VYXEUHGwmwM2MbsgFgQrpMij7UX6",
  "key26": "562M1TtDNxWzLoCZGnRfSEJR3tr7AKJE55LXmAdsvmvrefECmPTu6PjGswWEZAXsxyQBH1TDcatCQACi6TnobXwn",
  "key27": "5FFPiPVAw6aRorX5octkbMXmT6SeKd2tuD9hvsiqvvYNgJ6TkedxfqnFNyPGQVRrgRtHLmkLxBiUmjG2rbLpXFkf",
  "key28": "4bugzfVjGUvDWozHeZkGcX4Piy38DuMv15hwA1u4vCaJpJew213e42tRGmKsL6oeg1tZM81YQGdeYz9hib6KZUt7",
  "key29": "cx8D28GiJRFpMHmoQXxerYibEZ55jBSSeeGBNty2EeaD6baHocz7oAhtS5qtNmjR8k2FJfoDecmeMLFjqiue95B",
  "key30": "3gQ7umby36LAhWqa3EuxZVnrKyCvEo386vv5nP5QVKrCSZgkenazoj8pwyA2XU3r7HiJuid8NQ8c3ih1B88aE2DN",
  "key31": "43HXUcz7DQFeDXSLBrjDyHtbfuAwKgwYAvSTodLBoQgCmHNLMdEVsdvVwfhSHaBbRdAAY1S1xKfhV8hVbYSt2L7h",
  "key32": "4vXvCHzeSGnoGGACdYKWjPmW3AyrE9Xki36VwPcXYaCQ42hC5gUbxKKhp91muoZ5WHz5rXPp7VUmNeHCmPU7SkrN",
  "key33": "5FmGTXS1yLx5QigQd5p3A8snpBzj2f92p69VQsHjU9XcqiAfGZCVyjmeWZ7vAJeggN8j64o6WiE2HeyK3dMjKYCg",
  "key34": "47DmGuFWCdP3VtLbkgN9EpDwt5SFiZMu85AbLTrA36XDQrc2hKdB9N76JY6t5Mz7Unz6KqYg9aF9jE96qahoET76",
  "key35": "5fq56EXbDzmTNGVoEWRe3gfiUkForwFDYMsQ5kM8fqgqyN8j8PwaXitjnjDCGnR7A1c1nQ8dCBmB3uPSvvkPNzgm",
  "key36": "5cohrbR6c9egPnNauufHhA9ES6pJ2214TfphA1diSoKqH2DBERzYrtceUdTuHj7XL5dxDAidubZSLydfaAjYvwfk",
  "key37": "MJRfVhyKuacGDH6TDHctvS7Mv93KRLG6rvBGPKUuNKfxWhyBe2pJ7hKdgMay12qR4BG7qs98FqRBASW63eiNP8J",
  "key38": "rvWNandx57CrKyuQBLERqnVnTJPFURVN25M6L8P78gBeW7aaJTricMxBGbsUQJuEcvigVXrLwbe9EUtmQi4UwHs",
  "key39": "4oPkCxLGSJwfqRPZzcSmXyP6uW1kLQjhzNEr9dCMCfHFF5KSLJAyxY17CBSBGeH6WJzia5Z5xje8CUztpe4q5kcA",
  "key40": "5ufP4c3F76W7ZPaibst3sa6sSiMqypyroSjk9DALaGtd4GcnKVCNp3rp3ttANq9yvUduoDqHzWBzWQQnqRkiRHns",
  "key41": "54htqXUfL1JWTeVwSYkYRPU2Feh9smqBHdNxW6A5kdMcZaeLzGqfb6rA17E8RhTWUTiofdSjQ8B2whUD346VqFU8",
  "key42": "Vso8CZBbdEZDRTAmBj7VBZQwtrGs3o76R3xrP3bbtv2AfmxGyqVqSeNyjTqcffFX2WshzsLr5t2ejtWUHUXpwZM",
  "key43": "5czBVNqbGpwNs1G7Va5fbSVn8aBNUf98mmQeJciTXLJjW5wStjKe9MmXQpx6HkvbDVkiaGsHiSBhbhLGmapEe2tt",
  "key44": "2EKa8QYLh7JWnq8zK78qYRB2W5o6SJUzDHzWhbqNM5oLDwXLMWiGmRnLo2VsbkirpQ6q5zX7yFe3qN8Ytus1Rd3W",
  "key45": "4dh5G57wtdJPfj6RNofgSmG1mzGXPpf97SGLk3xKcFYCnmGytLAuBvb112v8PLYB22ePcweb47LsmicC8RZosr9P"
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
