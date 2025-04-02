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
    "3YEHCfsypBjRLC1L1nwK3VqczmtUepYssAQFmat15YniZdCanKcYruyjf7kcVFrhGiPA2RV8PHVRpVhQLbodfyuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewHJ2BFvASuiGkECqPL6TArxUiLovDd5QHQXgzYDycum23P95KaY2rPRATmYz44K2p7CaBgzjgYqGUrBzgTEtb3",
  "key1": "4Hi61vCDMsNe8Wu1dSJQjJT6UFcV2AN1ipu5w3JPm6zD5Fom98mRQbjF5abMKSnjgVLBRZEenxazQDfTpcDZ1S2C",
  "key2": "4XZg6xQSkguzVAdD5D7fGxnPDCYgZT4LHn7WU9hD73iPYQtKSyFTWXVyke7ry4aTwV89aqJfXk3KkUWZdVni5W1U",
  "key3": "2VDQLWFe8fJGDHUh4EUxjDG8GoQudqA9Fnj5kBYWf5RgMGGWxuAj7Z4HvU94DYRvqttCT6vnd9FkDNzgXQMhgZXd",
  "key4": "NXucJA1rJcN89D1gKpb985eQtHDoRJfWBChDvfc78nhPQQpHFV4DCtYRrGBR1iWfYK3f2Ds5f5Xu6KfnFfB4nxS",
  "key5": "3gdVLbLvgMSaecrAkEEtcZgfGRwWFf1FHcYA4pAeFGtDYtJGRycBABvTtNi9fvRoYdPtVqeSxEoPNcA3ey6KHA3Y",
  "key6": "3VxmuaPafrcx1AyXUTU9hQSq2PkQihPcM7Z87cNV41WLQayw4eUzQFm4D4s1eSnRQrv2cUsjrRhpbGKy86TzdCBh",
  "key7": "FaWN67PGvB1gMkZAg6xsCYvXVRGuiHPZAKVcsDEMYqHxYyuMH7zG4An855pRidzoPkiDGXAwHVSGcmjuesenKWV",
  "key8": "3uTpZNbR86WZCUuSAE8pYHJ582cEdy3j8n2Fcjp2gUE4K9ZXFnsUZaXDft1GFP97VJ5CrjJWxVqHBMJj17wsiY67",
  "key9": "5JUEw7fVTY8k3WjCvDVwb9A1RJAwFUuSd6P4nJEPHbNWFHDRyNH6GqdByeVqntnQ8maTMsaVMC5jBLAhMPeACHnX",
  "key10": "4nBWaBrqW3UVopBzpHGFNMP6C4n7cWovLHjTq2uqKWwUBvDWQEwfgg4bKKfmsxUXzTFmeba4UjRLevuCoUA6wAMz",
  "key11": "2eqJb1u2YNv712Hif3tUPdvgvf6HErFWARkDtJdcuWTJHzciJ2S1eqkqwrCSg9ygY1GjP5ZhWrnKTqSwMExc3N5C",
  "key12": "kpfZa7a6evBrDaQhUmEnn6x9vAFRch92ePXHws4XM3o9BRQVd5WM7ABzRbGiEhXHbHjbtrEY6DZgjdQsjZCPL7f",
  "key13": "46PeQS5gKXsB6QP4dMt1wYmGGpupvhpbogjByZoHmGaQtRDYarEEA3Y668CJkrWbiFkemRCTJ5bTYAtLers9iw1n",
  "key14": "2A45MHUtmpfbDkzjStnZ2kHMNUfkToAXNRkkxK9meXNivL4bW5NJQC5XDQm7oiJF7LR1HQ6LxHb36j11J1NYhqsr",
  "key15": "2JX8g6o5BphzKCJTP8PRA6EUQF9xQUwLVJj1TvtUC5mSRUHWefh6adC63sr1FhDoPA44N4EjDuXLWJ2p4VRgpJ9w",
  "key16": "5xw4hWsaHUL5TFKf7hj4iu364eSee5EyaZnGWgAHDxSLMSVJBKfLoT5J63vBJKNbRWrXAHAmw6sZtCqBjn4ZhaaC",
  "key17": "UZvgMec4A7ZsMebictZLB4kpsGph2SEqWgU1JfyWnjvttyEm1rwNSHgKePL35B2xqcmJj12FMcrKvtPxWshDh1i",
  "key18": "5vdfa93CM3jUU5hrdrKnkaP55LgcHgwgcgEPXCYZQPKvRqPhyYHDakfsMtDuzdg9xWgvj7vJ4HmVntfGLxLiF6xG",
  "key19": "653Q7NtkoQri6yWv2DpF5XrDTxSxFHsbiVzTy6W11bt8BeacF6TEi94y1VcqkmJ2gGGrmw9vgSiFtx1S8Mwy78YS",
  "key20": "5DRdpnpgNJA1SFrykk2sMg1jBLhPjQDsZzsCRhwHZ6QGM7YW1vbqbATJ2vd7ZSvJi4XVkk7aHxTCZTN6xJ98AN5u",
  "key21": "2FyvmM714G4jYV3WuxFnZ3BVwPwY3qMWPDAFnTL1V9WM1bcRo1rpJ8RdtknHc2FPFfUN69ndqrW5xDm3Bzn6eTQ2",
  "key22": "2TG7vGGt3omADE2eswN2AgtdHrfCZN6acTyvCQChkgLEiSknFDT9p22DWJ9CkzSj1A8nYcviKtdiWrwhNbv3cKXD",
  "key23": "JM9Zgi7cwUq8KRLECBtPTtEvPKhhZa2VF7r5nrH9y23ny6uWL1chZqtDR2Gx1xDCZXb3mJJ2NifTVBvMJipCxsA",
  "key24": "3FAKa9qoQNnqUEEBhdLbsgkGZzTxLsegh9t5nzZebfKbRDzzSdMkWs5XBxHA2sPoUz8YoQS6Ls4ttu9iN4RJNvhJ"
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
