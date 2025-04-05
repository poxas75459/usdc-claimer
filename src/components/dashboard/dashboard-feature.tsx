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
    "3kM1fJ8SnMogqPqxS6h4FsETfgsLNjdk2zwtGvJ7gqyrm4hX6ucLy8r8BnAosygcCqtePwkCKsVkUUqQPRYS4mXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BDYj9uZUzXE8MFub6Hs7GaGpMuj3tnnjmYAaYnKLhqULDrhhejXRi1QNxq1VQazohhMfuSffwdmk6pL9MmKZDtP",
  "key1": "WYsgzaYkDASxLAGvCCn3eV66FzYxHExoMSwXBJGTWhGJVRrZpeqvqSi9pZQpD1fuReB6egVsDWcuZGBQqC4Y3iB",
  "key2": "3S7DSLk1gTGxXaRuRXM5SPQAdTmJN3bAhTdjQUowWLyTFKyVpXeszegRhh76S5NTZfQGdofXkkEw9wppeUXVepx5",
  "key3": "31e3XYH1DWzna7ChQyK2mfgdL6t33Ea2Z7dRXn7HHSbywyyv1cRCYnEXAohwRz7NpYppp2wYgUjcNDZdfVEAX71",
  "key4": "5hoqQVwuH5zNY9Hx714C3BhXYyAk2TCu4Hx7ZMPW9xuuJbYqCDSCFLa6XBGHpQEu6mYYJDaJWN7EeewnXvqrGYPc",
  "key5": "2X5U4J467y2JTndY92ng3kPDqBYpXthY2K3Fp4QmRrUQ7Uzg3jtufAkBM54bCzqXdjhgQ2qm5uSkiZVHwN9PGsC9",
  "key6": "51p2RbfG5h25FJS8TAkGVAHPnWs5Q5FFNvuxEYG2ZMzMy2j5DeAeFZcmHtuuhuKEER19aqmL3ecvLpcW13e85QW6",
  "key7": "DUbECS8YFahmvMuRPe7hPNu8LjtdEaFN2UpAVDxLLPasp7fELzET6vVncjSuKxHMsWSqwewDSx5nb8BTBmm6djZ",
  "key8": "3CLoTA2xspgc1WtHjqqSXEr8EHDUnXkSCK99TYm4RbmJrMcnVmWsQhgufhqSPXZsE3h5PX1WitiPP8kBzM1KFMhs",
  "key9": "5GQUFTHTVTo6AmudmWnrJZhdzWXFS9Kotj2fVHKaV1XyMx3hejwkgvbZ3kPcTk4gVKuxyrHNLnPyDVbpAiUMgAZX",
  "key10": "4BgWz2geQmmH4t11Fygxua3MxMQy39J3EUeRUFB9BQDrrZPRThUfhaYSjHYzJDUTHTysjKQvMDJVvR9XgBZetgsL",
  "key11": "2mifHSePQzkRswj9gFF9L3aeReYcaaQyEeCQ2ERJkCMfxxbJafdPA45YWJTXxu6r81vZeQR7W1vJY3dMdTXcyRTF",
  "key12": "3peU4frYqptTqhkm59sVpiyRh61MZcjtqQvaewyLZ9Pk59fduHcDpqAm7EoPBa3JLmVQd5PznvZKH2jXXJQmqCrp",
  "key13": "qXxNxbRXHF4DtYiFEqxhX7JsLYNmuxeDzEpXfeopKmhWCrZwbLwF3wvirW9QPpGCg14F3z1Mn6eSH29JF1yEXSK",
  "key14": "47Ww2WZTF6NfvDKYNKJhCtZFoax7nozJDRwfnhBnM4nQcr47QfePmnobLjXDjNu4XEmvYoxrBy7AZhsTTZKaPBN",
  "key15": "M81fPE8utCL3hPmW55GyJKfzvsWxoiPck4xCgCGFc6BMknHq5WCF6Q9VScJE6G5JxeFi3yAtbJCrAsX5sCnVouF",
  "key16": "2iKGQJVQcwhn95LY6advmQfyNkwZpNZzdLjy84cwP2zk4NPWrCTd3RghAYBq4vsmZDrfRgNko5YQj5nKJLLPEoFs",
  "key17": "HMRNA9q14AZy36yrVnnxQ8rv8MkUZq1YUNWMFJj4kgQnb2nvRNmLaCoDRcyNkM4GeGXsW3ZfXfgNYmPoNYafbGw",
  "key18": "3ESwMEHEnWaAFtYGH9e4g274pDcHZTd5TKSoDgyXQxQxTov3NGa6vrWGcfg2ihGo6umfKA2taHPBrSS6PcMuP7f3",
  "key19": "3kpPdtwjjUzLZZDCK5k3g8LYyr4HtvpQmeCBEt3dWYEbCH3EVmNBwaHNUotn5AVtayY3U5rPoF4aop8YtXZe2HdB",
  "key20": "9yefnRvLbKy7Z9xiTKHkmLTMsWWNMCW2BCJyVtWDZPT5mwhN6pxb25PEev8Mrk221FQLWQqD7yd3sRuD4HFhizD",
  "key21": "vxBRbua72NpfMfYoxVJKqnvfFnuNS9eELC4CGpcrE1M7nH6nfsy8onKaHij6YeBhxvZ2Za44BvzHSBtpwvRgivK",
  "key22": "32VEsMAp8bsK6vKMUj32sJVZyoGCdUwBjT9fDEfLkdohvRKoejtLqak5QU8dFWfRATyVkSh9cnzEZGndDw5TRuzC",
  "key23": "2TUB8cwYxaQgNggM1sK4EvmTzYxXVXQnuqnysMEjeKC94Va3tMj492tHeDdAt7YkfQUY2NayeND6pnoi3xWqx7ix",
  "key24": "ybMDCMD9s1nUxsXt3rMiEu6t7VBGQ82ucCovrLVSx2jHLV5TnrbyPaCfWT3nNUqN7bBWZymb4kn8vgYKcfGyoeN",
  "key25": "3W7VTFRDoXvSXDVGqJJ6X5gJMP2t58mnF5exB5nScZbYJDP4j4MNwdphG9qSQhHAX5TmBuJKZ3sR5zN2z8Y9cdGo",
  "key26": "4uJP1EUqJC83PV6QWZzLFEdhBpd3PQyucTTGApvCMyPK3qWXp4pSH7jn3qepM3jGmrovzwZJbTLhpG4tN7Lvji9m",
  "key27": "2YaHEmGJ73rczWYYR5SFhsaB2ZA5B2aEYLMsrREMKvASFAdp65ZXTXpe5hP2Bd3hVabQ4sVwWHxwZzetWZ3rcgB",
  "key28": "5hv2XN2v3H7UBGzBvbFmP8aYZjYtJsXjcds5MCpeh8L3hNVnURMFRYfPZtvDrs9NtCm7AY8NpCHRhmKfNyh2gfPR",
  "key29": "4hHuy4eq2k9DAMidupxumubJBrUkUozLvmUivMMT5tDScgaKkE2VJCQcDMH2BGH1roaQuRangk2x9gPftB6CZd2p",
  "key30": "3GF8eVWczCBSv566BbUoXQjFhnJ6nh17cajYm5Z7tM56xwxgebJNfQPRR4ZENvogiZpg9jdzioBV17GCkz4HbMYP"
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
