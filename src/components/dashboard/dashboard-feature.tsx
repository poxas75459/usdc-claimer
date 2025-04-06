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
    "3GNg5MtbEtt62XLkVSwqgwDZpDUuQ5bayVW89V2BVn2fGauk1JJLPWjJgQKx7EuMvaSh5XLrf5fKJfT2sony7JgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vb3hEFBx3dQivhrRv317VRGYT2JLYC59emXACXMhVGeQMLRwSy4GmdVSVoEKFyxR8LkuKx52gRgKWGYopAPfunQ",
  "key1": "59BKbTu3BDFWro6WeVYJ8L6ff39a1wBNEBShY4uaGBAYfVPGGjEsyGxqZDqj3bfK3Kp9dodmp8SVgz5HT9LkfkE",
  "key2": "22bwLyQyjdU67CzTFKhaChZU6aUy4FqSWa1QLKp6vyaYn8SiPSAiyx1jDKeQWeud6XjvbNDhdgjSkp3EHaYwSabe",
  "key3": "dgjqKW3ACnCMEyjSYnARhPshkfJiKeYYkGJd4XcZzkgRvK2vYvCxHmMHqoBvvSTDvWvZZwyp9hMxCykN7jXPt8m",
  "key4": "Tgy57ZgLvZGMbowW2Bkfwo25cfbk6M3ovf9etDCgH8jXrftRQ3pTQ5KLjQWESsh6m7mtthJGgiXfEef8JTi5puC",
  "key5": "5JT2vtiTvY7V9wEPzwG6iJXTW21QfFVc4w1VyxBeFuT7BWEezPdLvhdxH9ZUzVgwdQW4oYMj43py1K5Rp8r42FhW",
  "key6": "2BgAEaUt3dewkJwQAzU7EYW1niUjbkjBcA1iJGW6F11MkJ1E4yvQN4HBVJiUZzij67FZnhfA4oYZrPAC1jsqFo9Q",
  "key7": "3pZyViF37nYFiAVbFain5vyZnZFBDkWpb659Vs9VbpNBavqFHNmoGpWefye8fn4iifja5LTd4TPNVBborMucGBeC",
  "key8": "2bzXvWP989J3vMyi4RhY9pWUb9UX8v3ZCK5RX7fT1QDSwAAmxn8pEk4ui2omTDdsqtVZgAZJDLdSY1HCL5ucYyo8",
  "key9": "5ytztxtcZ9hcnXfp2VeJ7m9NAFz22Qv4yVaQPkJEQtFk1WicKAksPsRdaAUPTWnEVg4RJk4WGq3ZBuvH3jocrF4Z",
  "key10": "489myZd2UMVjHc9i83btqqi49Sa4e4qheLutmrwPDyTjC2vwfkBgegooozbxnA2FbSNcDhfd5cNepa6CT2aPpVJ6",
  "key11": "54QQiH8NeGwryA54tXYmySrHb1L7hJ8im65w5oDBzExLY57f5BYEK4M1jusX14idXmDNKEjpRgDnWawqpdktqEZN",
  "key12": "21DfKfB5pErdYjQ2E7dewpdr4fWdQvvrzPshcZAb1pK78mH3hCHy5oG9WJ78wGe6uEy8FP6SHup1h6fSyNPznNNX",
  "key13": "7ykoeDNvJUCGf2gNYMz1Mri6pnAjoCqf2MgNw5ZyVAWgACpZnsz7fz1P6qcVK842q26YbLyS8MR8YB4wZZkj5f3",
  "key14": "3tXVFdA5CvLZvkM6iK5ZGnUtVKWwQPY8oqSwtBAQ3ZZAwEJrJqnYeHgujraTLSydu1BrMxgqvaWLUsz3H4MPy8Y9",
  "key15": "33Z7cywuEvFjySKxZKJcdDPgUgrTmnx6U7gy6BCMVDadQamAYB5NJEii6ksHhpTUWuSyS2R5peyPWM2b5GeVKmXn",
  "key16": "62zZ64gpHrK6MvJc6ia3pJCVSwswT4zkXdx9DrHQoRYLCVyCBKrqjU1geBhR72fuMzoisKcPN5pc3BGiGk3YQSY7",
  "key17": "3LTHG4TGuvRXwna3XucyywnjENQt4ibLVWNyUGrsz764RFcRyoMubnALcj359sfwzfLRyYkFKZuFoAdiTY7mabyF",
  "key18": "4M2x2Y5RXCeU8snBzZCa9c9DTioPybzinexaFnFwwbTMA11FCnvPAmMSpDWJBc4bJudhpkrd7i1kSHCDN29DFmKj",
  "key19": "EFBnvatY7YBFvwZLmjMah3thvza36kktiAkARrEy2dJes6VpUydJAsMGzLu3naSjPxKBYcppsrU3VChMjUsyPgW",
  "key20": "2Y5Y19ocR2pL8C5VE91BUDgobCPm4diBM4x15EuhQpoRp2a3JN45hEACKSpHSehKnjscUL5RC5PRbT3iD7d85DUx",
  "key21": "58ostu425VXHUpe8RHyo3v3nQPDbKsSYCfbtmkLGwRkfpWtvtwYf7NUtsYdvTUfWtuPfQHEYhHGzZXLvDFGz6QZX",
  "key22": "3nrjsTvWxFDhz7gvdeAEZog3XTa2K7oVTLcoW2DYN8sjRUQ7L1p3EG3SUbpLvFzuE9a14U4wQv1H4mPJ8iPCahAA",
  "key23": "f2hKQbHhVfD6cbdY1sbBbBfgif6LanQJANkL4R1QQ7vCvDVPTNTm2JFnVJJHXEnWHJD1rZyrY28dEjfTRMbwXo2",
  "key24": "hhtcwWBKQKYtQx4iHhj9kBYLroTXc9VpJNZcx9iJ2KDFc71C5fDjShW8119R6dqPDPmNYdWizGc3zREvQHWSRjV",
  "key25": "5EgpZepwE7kFei8pEcQjKuV4apcZbLWWg9wU4g2cUThELmotTjacc4FpSza4XdqBF6R8HqLYvh1m8EQp245bnF47",
  "key26": "4gKvj1P6gmivwTzV8zzx6c5TXxm4vebGFEg5bw3Tz7bFyPmuSrTmkhE7cefLYv2nr3N1TXRKeXLcnuBzvYxBVeAz"
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
