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
    "2NK8PMMQo3Ef145v6zt3NpA9yZ46WHGYLXepAVaf84bJ1tdsssVrRGFD6BSz8s2Q1jd4q2XKMNTxdKLLyJ7kVpNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tjCJC9M1rNkTsMrTiKLAtcCfzXEeddcZY9NPTppD9F3zD27MCA3WiH3BPPBcP8SGYA52pJpVtAf5oDLMKLbSPW8",
  "key1": "6R5jUKoVjV9s65ptd2bbbvGzJBRJz2xAkhm9PYbfeoi5ChZnuNqD83DJfkrD3D2193hs5aJRz8eDBkRmJ5trxFH",
  "key2": "3mFUwBhL2EWsGzV1wLPiGgCiLtNTEwaf2gt4R3sXsSGEhsJPCSyD2qiqthJzs1BH1jzGNpxrCvcirhWpkqTCArvB",
  "key3": "TaxBZV6iYXGAPzC9qYwh5MfpjscRm6n6eKVShr3nXM4VqH4AahWcwU2AVG9hxLHiaHP8oNKHLWsPg3X777sW8XR",
  "key4": "5t3Qezuu3mn6dKwjiXGqK2fRhZshikJGNRiyRYM9WSQF1XLJm14dNhmsBpXCchcojjqCmT2cSKFPrQofkdsLT6B8",
  "key5": "67ULtfaP6t28FsWUWW2eV8UEARA4nf8XGgWbDwGU5eCgC4Y1Zt5zcFrhPrWfYGfA5W9wbQwCXcNA9YfN721w1EtG",
  "key6": "EHEw9WnDAE8jHG61pqqYPywFYCvQmRqjHouJeqTDpzZLR1Mk5bsEpysrguFt81x9JSEKkgyJZ8XSnfKT7Sj2aZe",
  "key7": "REkxMt8PxakQFUVNg3HGnGwzF3d7GRpMLRpdoLsKhCeDXpipp4PV69SdvVMs6twwwuUjRpzvb8n9hu5brSZaDQY",
  "key8": "66QZMKFbvfjucZ7nio9coTn2SYgVfqaHsMXmSJmfgcBzR6yxaGe3j1iLPvK5NXBGv6GAWS4PcXt3kPYQvnCDazwc",
  "key9": "zJq3zRtR7n95APhMtKmkRxCjzFg37hktfsNGXQhm9Vwnz9Aw4brkVmS5Bqqo9hrh5VwFmHjKRKYJYGNYhH3XkZo",
  "key10": "5Le3nhpZqaFtBiaqHVF2MGYhdccLTKA5GjNDiAUtqMYyuA7jwwbTuuN8aGN2TgHbLR75aeDaKxvsuLsmC4bgxvhE",
  "key11": "59kMBkNznFXoSjz7dYZTNYKAbYs13VJ7x2pyPo6oAPa8QR2iK4wjWE4Y7uKJ6KASU1MMko9YU3YGGoBQsigDA2HW",
  "key12": "4ByBypNdjVhy3wvmFcBEn2Q2zfHmtDFSVTcr6CyG4MrMzjweXuMFwaeXu4E9Z5WhcjRa5utnKULdcBKE3dBNPYaG",
  "key13": "5hrGVvSkZtBm6d1XWWQSjTBv6s1Y2RDG4sjmNbNdgqsynrNo87jBQfqHnUFBeE3g1QAvV3FT9YYm9Dm9DNyZV9xZ",
  "key14": "4RChmevLRxEB8614kTX5DKfqVvamgA9AnTf1DAWkSFxqDhnkP4PgZan9TXQVYMMYbiFzdcD17hQkaHWdb8NH3djw",
  "key15": "KJxHnJ3qFnjGYxW48kWQg4q1o4GzqDPm722ChRzovH3osykoBqDocfiS8U8rYkNYy9NWVden7EUGGvmV9q5CsfE",
  "key16": "22LbFMfCU7uNVrZ6EyXRozTnVmihTYddVB59xp64SMXg7QA2RjYUQqmhpoSiPydwt7ADaTE3jpFzrVxkzjV9UfVy",
  "key17": "3gg6WJoeisStELdMRsehQP7vvkR9o4Q8C9fY9vHhCfCeL82EKUtNAYmMVv8NF7TcK17AaG44cmBqrxgbDcFeZSgH",
  "key18": "uv6CwHiM3vgDhWV1hXDUtaffxjSQyFXh2TD6PV9C4EhDKuxZPUb536qz4q8juaEon6Z7PWvJy4F7Pav8mMUL4Qk",
  "key19": "Fo1aSPtW9PMSXC6ueBDncKYcddhh97XYcKRDSU5NfpNzdFxz3csSaZcMZmJdmm17fE7RorSVgxwKpFmhqa5LoxY",
  "key20": "1vHAAezExxiw2Kmvo8ATYvd4naPw3CnJGhNkjmyCQCQV8R4chTP2Q6kzj7MH9gQMAFBgxLUCqCZb8gZzAisjb8t",
  "key21": "2dfHgYRm7RWKb28L1XRh7Enii19B17u5V1XFkrtqY8hkZJPdhgLfhzoedjHmuJ5SAguLHPDzPA1xkMmNpkER2tZ6",
  "key22": "28V7z4TtyJy6g57zSgQPUrnRRE4eQXEYYDTKxuhZ3AuZyLRrWGLzVFHmtUWmvjmpnZv4c4vHjsVnPvahd7HkuLe6",
  "key23": "2BJ4XbL4BwcnWqDG2zyF18F7WTrXKJ7dEJAEJeAY2o8kTZrZLE5Nd28w11Le14AGp8ieUrVQSRy8P3j3LBpB9Twy",
  "key24": "5HHVY2jHPP7JNv6vDLTqwnVBMqX2oWvMr5SYzTWHCb76U1FVqNZjqqUPqsKFkaXyNzt3Y7PX8s2qEPNfCoSB5R2k",
  "key25": "Gvfm1ww1hiEs2QkFHY6Qt89RUJebLYhrAB4ijExoLkhcWKDgo9Z458bjBR4Ze3jpjUEG6ex9cB6mh3kY4rGigmj"
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
