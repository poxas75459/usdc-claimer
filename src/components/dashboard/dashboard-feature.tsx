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
    "3kokRGMJPY2dGmka6Nov3UTL1dLrM9dWXahuEKVgPW5deUJVsJoxuMtXNajYKLR4zARf51CuMieUxVZScZ3LE2xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fqwCcFL2CCXFoaV1EWKm7SGsyMrKQTQABmjj8mpPh2vU2nZTwfwW6s13yMhJ1EaYPVFyu3EGYyCy7o7tjr3aey",
  "key1": "4NPZtnKAVd2NwUXFsoVk5AQTHLmMoBGgAz2B8YNJKGYdNqniSAsUvk57SD8pv5qLVkKeQkyJdzWTEYEn218KMmJm",
  "key2": "4fzmZ4U4xs859oaBF1HWezZ1anc8Byf8kwjFvu3unrPiBRhk2EXWcihmMS6hGvsi8EJ2xhkqh9z95GXTo4nrqp7d",
  "key3": "wRQhF6mJ4MugUhBRXfUeLufiQCL4LaZdC6LMq2tGp3tJLk3GvfVXRkdL1BAhvcm2DGCLteDdq5StsdtRNTmrXVi",
  "key4": "2UtVW7LmH4o6GGMg8JFvKfeWyG6hm7YAJJDdGHv8coXqyjEmLgEbwVKBy4kKJbjGj79JkkoQd1pNkBMcvYJdXzxk",
  "key5": "4rMx85BrCmnLDheajHjAdmk7Cq9M5VU7G5GxuVBgSAGTzHH8i9sLYrxy8DgTV8C5VasW3DPzwENaXCaJmp8xyvqg",
  "key6": "218RqoYNvqu1YXGpPbrfBjRjkQjSRHR6mPzfRrY8fW3i8FqfdrdT1WnQAThowvaF7zC5aPg2q9kmQLxh1xXeBniC",
  "key7": "4H9qdBhRZMC4DCxmrwTDXpiJJWSTtaAicGw5PpCXC484mC5L3BpeV8rsFUgZiG59k6qNtEdmAzv4ZJEP1gNP9DMz",
  "key8": "2Qm74aUEdGfgTjmhwMYWqQ4cdYKN5gQCTsg1tVS7EU6ozYuRSMfKdd6brBas8etaPRpcQMkfHJVz2gUP7ASnouxp",
  "key9": "26bx1AeoHAZkmJMAt2WHLwnzrqw8Z2h9CCnLqjCByrafYXj8QJ3AE1nwwN1ZamQUBYbzJERTcBynAKEaux4FfKGE",
  "key10": "2sVMz69xm5KiDqyVisUXT3AaKRehFrhy874GicbgYFBkFF6Sh7Ukchno94M68tKJXy9pd3EQkPV9YMA1nBxVeARj",
  "key11": "2PfXPZDys9ta8RVE3A2dQJDK8fFUzabNraLR3vh1f42DD7aphvE9gC8vhwZpSHWN9kLf8nN7GE3tbuRw1f1ZLvwx",
  "key12": "2WePi2jDBo8qbrbQ1XAGYJex72JezW45gz31w8Ze5XAsotEo8dsMneJdTKPfQjiWEv1tKvyhDJKXW8VARwbhvDHj",
  "key13": "5fs1aFDDPwz5Ms8okyApAnANYQ5Go7pj8FieqKNtZnQLS83tZFvJ6bdiz6qXFw3WG6A9ryLsuBNAgkLWNeAvBnFd",
  "key14": "DeNumu2UcBxZKLQKsWk94y4eBNcA7ETU9e1WbaTaku1X5xuFX9B9EjELLWEr1uVX4uWE2EE4yEbrmXBtcmurwBN",
  "key15": "TLkmHACdmcTK4UBMFV99WhgBHNtGC24skbk7V3X6r7sW3W2zGbrx95n6C5GdpZ4YBukCHuKQvhzxJ54j9yY2Lnz",
  "key16": "Yf4KxndArGrytVQmdw2JzpMRVfda6M3zAFRf4Q9FkYAyoUQnAwHLzyUUof9k6WSFK1MtDgnvQJBV2u9YPtSMjUj",
  "key17": "3tQe8odDQDhUiL5BFwS9kNosT6UsZh5CHE2k1CH5GoEQfkf6VNRGNiGurVDwaFzuuYrFzj6f6seu1AVHyJBJtadZ",
  "key18": "SaGdAzGemp12EGhcytC7RCgZdoHo7H4EPepELbTDJKwbQzfTRwmh5nFWkgRn9PcrNn5cyvW9HqPxubEhRXso37p",
  "key19": "2TSwd7NehLyr9uq7bBgSsRLgVeYZfBGYaVXao8upsNZNkFvCJkHoYCagjMZ4S5PPt8ifN8PtrUi4uUU35ebfTBkZ",
  "key20": "3anFDXSS1h1EgPmFMmq7eGZXJFa9xcZQSj5njGCM6P3gVoM4bQmkAe2Vpa2RUHMNUerG2HknwhNanJaxW3jAKyeT",
  "key21": "5vAkiVa2uq7p1XdA5eSMnHbukSwqXUbR4UrXyvxrzLfxChRgTZ9VHrsdyFimuvZa1xh8gbNwayivqrCMs4UGPvRt",
  "key22": "5UzdytLwYCkFkYRwASskBYqpBgpg4sx9YsPYCcQMbxPdjT4B9oQHE17rwBi6S6UwwVBwC3UGU7ny1iix5qkFrssU",
  "key23": "2WUYHrNHSfeAARovWtKr1xRjBv7rm9rvJKfcG79NemHNKaiSDJe7PLZqWai2F9YeeVgRei4vGVFCCZaguffEjHmu",
  "key24": "57jHVH2EDZ17qsRKW3gdhjeRLm5yc9KEVoMqwpwzYkN75un3kaXzHxCZxcgF9BmuSin7H5ggod97Qs1nT8tNVwg2"
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
