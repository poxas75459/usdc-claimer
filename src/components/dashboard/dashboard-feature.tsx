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
    "21wmLbFGYnfhECHNxx3n2zmT5LHzTBaTZjRPiXoDFgoMZFNqqLWiZ1eqeAXY25nNNVt1vhgp1skRZvhzPBAEe41j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sq8N4vTKALXtXhnKE9eBKEjTEZCzw6G61bfrL1XfQUr5g7BvJdMMofME8MyvQ9zFBVD7uVzpvCoDN1LaWcXawzy",
  "key1": "31UFqoSEi6Yrrbe9b3toZASLxMucUrrVoJCVyDwKePxyaLcCdWHjmo9oBFWpWksNSBctbcPYPJym3D45xsyEmWF4",
  "key2": "Pnj7NMeHkHNYPBuSPgR7KThxE374PDSxFFtM5LhCYY8K9GGJcrLSEUM7hC4NhDtpmPMzdc7JCdvxsBVMxVEtt3x",
  "key3": "5SeWSwyp7D9rpKVme7eXcfPoEioCqMhWcdfh4jv9Dh73vc4JTNaaSXH3kfFbqcnDPyuF2W4xCkZMYBcPsDYhKDqX",
  "key4": "2y9KwBfwn2G6LfNc89DmQAb1B1W4Gbi7RYZhU9cZxnmYAzSppRtXfAdbhiNpf8SNTKH9mGm98UDoSKV7g7J6Lj4Y",
  "key5": "x7Mh6vDkGijutSWN2VuQ7Y4r9CEYK7JbnTFKXDiMPFE4t5UA5r82bn9iY7LSssJ7NdoYoqGrWwKMocUoEmgNRQg",
  "key6": "3BCo6oEEBvJXyZwCtSWvUPbik7BvegX355gmk3b1fCFoFD3gb7oDQYskHa2C12VXqLAbkvjVqEJbpht6p7LKUVs9",
  "key7": "3mSSMVfe4iJWWt3TmQXyjoN3MJEjo7opjCT6LYMXcLbpCmMhNV1DpNLV7u8j8Yr5eer3VFH8PfMtyimPPjbveuoP",
  "key8": "47gJev25hzkbFG4uo5zetinEQngsiqsi5U2B5Mx4yDr5egGFQoL36jsYJ4xTDYfmZNPVZkr1swmhws27E8ao49kD",
  "key9": "3tHEoNoT9VkojQjf4KHLpnXVF7BAGxfkdVEGZbyD7fmc4mFSCTQRc6tErKazTgdu12V88kAFA2ZMni81eEjAHjXM",
  "key10": "yWEeZsBxM3EicSpxJYwFbuN4HPanYStsa9F3dPV2r4puyPDE4a9S445A8uEvKt9fAkE2chJK1mDX3E45UfoLVqv",
  "key11": "3YMena1MqhqcsFrXVMR7moUm4HEtknngwM7iXALQuKfF2tdcSBc3VqoNuk17K2YZnAEcsBUW9Jk9DxKYR2s5WDWZ",
  "key12": "5js5ZKMgfUpfjwy3Xx1HNKdzcFwFUAKm5WfGJ4WnbuBzLKF8GxY5U4JMo136TaJrMetabmrgzt12hWZbfRU7R3i4",
  "key13": "4JUfkQRLakzY5eWwSV2tdbefxCfJBXyK63nXwfHCypU57JHg4nDL4u3WwB9AGnSuCPDR2XyFshZdMHnEaaHtASN9",
  "key14": "4kgGppackUKU6H3kbVQDE4o2XSTzjZWg1ao8UVkDsErvpUscg9JSptentAhnSwKFkievjaeUV6Ye2n6bWWmufHYt",
  "key15": "5Gi8PHPL4QKk5nt1XcWKZNk1oXEkSH3hpa2utWJMUBadATQHCyaa5wPfxrat2Ju3djGEtuzamdQg2PQ1iAVbeHmB",
  "key16": "35A9zRu9hH9JSSrRZ1DEfMeqJuF45nHDTYJXM48CRtMjTxpqgVivNPoZtZF7nnkpqb4yGvC4qmto2vTPEA9ptbFT",
  "key17": "5N1rjBYRK2uM4mScFGsnMWJTXygLT4xnoFHwEhDZghjYMZaYnryf7QLLTnJgco2gptT8mGfrLPT1fWMfMNfZYXiP",
  "key18": "4gctS3dz7FqCCpY5ntZmWz4CRZT6zeypzAv8NTWFotUAHHncXTNgWLawHpgs8xM3DSMPs2mEZ7vcvaMA8HU3fvN",
  "key19": "3dYeoHpkiY6QpLz9gxiwHSsetTHSFB7zBARv4ns361CWUwanx9s7AdzZEDLf3v5VLe8zHSeXs9DFxRaHN6GE7krM",
  "key20": "2okQQqj6nhqvbx4n6F4Wt4m1W5tuREAmBiKkb3Eg5jSp4Lto56treh7TLA9dwqp7bfoZXKiQNeHgKXghAYdiwXKb",
  "key21": "AC3J3Nvi6TTKeiGw9Lfrey41evtQaLEA67G3NmZM5MaymdzpjjMY4KzNZig7W9a753dGeANgx66aJQ9nsqvuH2f",
  "key22": "4WreYFyzwegtf7w3E3JPzJD66oRQY53eqMUmK39bXYBxEWjADDKb5fYx429LPfYbTEUr8iRxsdyx1iybKF3fxz3m",
  "key23": "2NquttKQaAbU9GpwUgowgUaFV1eted8GN1q3yB4FHRg4KScEvoziVMeSWoFAu153LvBchvT1HAqh9LTU1KoEXAdv",
  "key24": "58SxsUwhbTYoLLrnAhgCVPZESpgPFnr5NAgYtT6p3kLh6RBfFK37HRKERupTyQsxJTgbuZFiA9jqRt8XU2GvqR5d",
  "key25": "2ZGFjMiSAcfMZk92mBDWosFF5VHwWsiRZbYEFSrRCWmUmzBVYKWYgg6MHDDNyHf7DVRXzkU4NbXuiGG1USzTMFgY"
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
