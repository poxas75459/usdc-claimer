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
    "5mQg2SfEegWhjKmWhChLZ7PAb83iV1i3qPFd3qroAEADYm49XjKMu5RCo6UuSEBpP1Zoq8zQYdedZABKVikGwyRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scgDaX4Nf9nb9J2SwBZkPmWyMkNLNbaN4nHJMQbymTXMJgyUi2LPVv4wg1QjacKAFgqSNTCPxucUBZYmQwd1AXi",
  "key1": "2BurTRsc6W8nCZnDLj3CQRVBtJ42f7MfUnYU2wRz6FjkCvgfpSutgrz15dmxVGBwnScCRkFQRXMXgKdhmfvUx79C",
  "key2": "VQW5noWPfkoS61gDFDRDnLNP8oFBELAvqAGb5ffW6owU8n4MVHpLfDrLxXAJ4gW8ZAosHcnnyR6EfGRdCScNzL7",
  "key3": "4muXHtBxFTnz7feFHv7Pt2gFMnzitVTp1DyiSMHYxukTVrXyshN5ZUmJ6vSps2Nsg9Z3bsaYWtuzLZtw7tWG6PoK",
  "key4": "5Yw964WnbNBMAL5gKH4deQf2aCS84VMQwsESsS1XUttsdqQBy6pp5pjgzYYS9mN3XK8h5F2CGZCqyZeuKLhJQ3fb",
  "key5": "3sVPWfWpS1Y8tMH8fwSvMhXN5p9xxGGtt4c5o4bSMKG9mYA5kLV7GHTJHEaeuJ15F9vpWokvGogsXUgHUePPvWXu",
  "key6": "6bTJXdPijeY26b7sUF9M2gYovGBAQ7PbFZhocetsv1Lm6kYZbbk6FatHPKeF9Nx9G5W1RyzPPsyYtwRV8o6C79v",
  "key7": "3XBZkbmfDgghKhsqEkqx7LiiPLAXRsZkXxd5DSuyL6kwRFr2YsGWt8NXthfJoeiH53Ukjzq8X1jSBFTMEfrHTvsT",
  "key8": "3xXGM5j3wucm9fToqi451RPe3P1LwdBmtHRxHGSKEdw3NPXKNj4Tm22rTMv4X7DgTq1Z7tv2PkFpzwGwdbCNXdrR",
  "key9": "2MCVjxzwLY8wAWvEXuNnMNnCcMdLMTA7kK45qWgeoxXvZS17LGuKAawMyzumjeY5fcwQRADmRuKwRup76GosSt3d",
  "key10": "4L9Wb29c4DvSnZ2ZobMCMbCNKCsZmScg3ijwxX4Vwj7u4LQFzsqCyCS95o1FZ8LnhTBvWQRs14sgocBqWuo798b2",
  "key11": "2eamvZBkdTmRwbKiCZSZmdLrmNG7R5zgTwx4NbJTazp5pBTifv1U8bqjBUHw6sbd1q2RWsYjFkqPqgqT7Csyk4ds",
  "key12": "4UmEZfBKy4j1t6aLbsU1PeT5YUm3fHawJ66wwrPMLVtadw3C6aHAtRvgUqgfGRbLvswrqeNvVm6XKVXSMpkxb9wf",
  "key13": "3LhjuiYEjkR9ntH8hXN1NY2hZypANexcr5KVZqdMqr6PS57PgchEVoywYVU3GxyxzFT4yaGaqAecMShAZhsXu4eZ",
  "key14": "5kti7apTQ55fx1RkYRmn9R1pdK5XZ96C456md7fU2mGZsLaeVpEZMBACKvzUJ2MFpApyuQBiKyVqLz9LR1LvCud7",
  "key15": "4vYHKCsdzSLSu63rH5vLsEa7Cc5VsB8QV5NLoFCF9UXMhMfPYcvNpU4g29bscJa9xaxWRaZC5JJmg6pB9mxx8Qng",
  "key16": "2956qFcZUutgj2MHYtGG6728vcWGwKGk2wzBHQ641ivxpfSZ6zSm7AC7qVb9JyMVVxJhNKvZgWp3Lb5CjpZEuLmo",
  "key17": "4tyThBob2fSVyhv5vGvyVk7bC6QZWjgcjfVjb8kJq3sXTygcFp3qNCmm3A45EnHFfLUEnshwtDDohXcqW9ruQwsV",
  "key18": "33NFBDg7gxaSsrvrYQ7PPCcAZzvCNWS3YnUtLyW5k17jzUBVF6DCGMVdFFVUAQ7nkhEQ7cA13i76WiDNHJH3Vfpw",
  "key19": "4cQAEZShCeHZmdGUDSop5kv5cPXUVM435xRPSRPrhAMSGJA7jmB6UnthHjwmQTFrgHzUQkawajjZCKxFvLxjjNBV",
  "key20": "612UzvVWMRPMJNuThAU5ghFsZE6W43oJahZKdmAKXAh263evFx1gFC3cTmPpJBSyrSQCe8CDkWnSoSvfj4nAB1Fs",
  "key21": "3HzAewMgzx8rQiBdtMdG9wVmFbvUZq1Kfc4NxU98JqzNyWnapb7yy9DRgYGaetUgLNnZ1Si8BbsoTbaQPtsiY3Aq",
  "key22": "6628L2hTNzQ8b2mGABQ7qgkkYUZRouTwYSeLaHJr9duSiXJbACQtM5c7QLHaQhtVMpMS5WDhS3bxhPXyWNY5W5RC",
  "key23": "geyYsSsreuiH5kXE7xqZtVPVzSQ6EK4b97EhDs35bkVMMWt5HgzGfDqrEBtaBYBQAv2JtHNn7KSwiw822yDDakK",
  "key24": "4tfujtDbFg1dtkccg2Qb42r8tH84KVuCmf4bBkrz5CEJpPqdRCvqhUcZF1Ms5VprPxzsgnYAV4vgJaN7viLU8BKW",
  "key25": "5k1caMiK4i8MXwcV2M3iNgNhrNMBrxvKXm8XmgMSKmjUuPm531JGgRKkw5jpLtWuCUofL32wZpc63JfnezYGnRCM",
  "key26": "39chbWTHQ7aE1kax1hwnNDzyuQEgdGPTrHJEbBGVZ7NMZSB2HyHK7mQkJB8m2RRnFud6DhyMzk1HaYUtbGiCpcUV",
  "key27": "5VzX4P2EcnHRCTSXTkQ4e5oJhNpghZksoJpyTJxoPxu7ojwXS1CJQxCqKpPfzPq6uJsaggXSUzLDrmmc27DBwWGG",
  "key28": "3jmeNmRxfR3txGvZMGykcR8HbkgXePgDXgjERWBwVszhhHtnpnaVMzemJRjRNcDzWnmCZoRETqabrNDt8MTEoYZG",
  "key29": "3LJTVC8ERFrSSF1RjPwjwVbgwscCWPq9AsReqXkSJ3tX6MR2V1oDS7cQvHSdUfyjxLmTc2UdSrCJxb947rHiNdW8",
  "key30": "wfbfDrP4aNdk3KNBbiLEoo5CAsXQup52zBDXpjwLZFHc1ghkh7JwDXCR2F5xdfSGfcu9Po8x6tEA7SX1TN3P4d1",
  "key31": "5bddwT6th33a6AZXaj9XCxQvPPS48RrZE1yQYhp8AbiKxSJn4ynzoEC4HnYESJHWZk6Eanr3PQeaPfv3Crww3vGp",
  "key32": "4ymDJhsQXNNBeH8WgdAbyR7bKRYejLEX5vkMYC8DyTHbQAJNB2zKtZZUZFcKHxSfmFkJhqnpqtexeDvyuoeT7rmD"
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
