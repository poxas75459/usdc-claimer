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
    "32LhoZdmw1ufaTo3e4mnKBZ5D8VRrGidDXSGSVzUb5qYt5jVP911saDLYS83dveDEGsR369MV6jZVBgC72Cjq6eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwqMNw7a7MospMrgWnSJPtqoD3jrRQ2PSnLXwcejUWDiN5ie2BeDDGWfzrEE7RSamV2EXHA7zhnzAk83W7qDYZu",
  "key1": "NVNSU8bWC8FgSVMs4ajr5HFNjk7NY3FMsmVxMLsQjJAX4HsQZS3K6jmZYzyXDQMQJoKQcsVs53URDbLGqfDKhnp",
  "key2": "2q8ztVMr6QXFbWtfx17kE1GVnJErrUVouDd1Yw1NFm18rsL9PFUiMo4ZmBLWPRt9skoZvxDyiNx8T5CG89K6rSeW",
  "key3": "4HaFgEoZM2cSr56m2AMG3yJY1CU3U58vqA4GStdyNwzMBxvpzSGLikPNNfnVuQW47fM5rzcNf2XJq7xDLW3d8t8V",
  "key4": "2wSvvv8RVUtCHmVCVyKgueRVAxJeuAvLY7aBzBhAddoUvHEMN7eUuPuRKnTDSVwQf6RhfiRhaf2DhEGYjv7hE4z1",
  "key5": "5RbXgL95fHTM3wBqZrGAzDCeyGAyTQvbnSb4q5m1i3RzTru1CCDgdRW6kqjvhERfTMgDSCzB1WDYsxXNYLcq28nJ",
  "key6": "56fxVRxTTg69sV9hj2UikfxDmbAbeWUCuiWMufRKStnMez8H1UgUFqsvFbwj3PZHQSXbiYaEbZhDjb2JfGCn551h",
  "key7": "fBqUG9kHmSCvvsGzzRGACSbqnQbxNt2zs7d23Mz25UuKTbZPVTTb7KimXoGQeevdhCD7Bch6244gQk4jubsTvY3",
  "key8": "wPoASGxL72UxGRtgYNPvBdn6sgkD3ti4N6JbTEd8JrVTpM1Lks8Ht63RuUJtugsbxZYvK37q7NTwGknTWnSY3rU",
  "key9": "5gb6TK5tbjGW6tGZPD3PkPk6hnJqKY6n7fM91JH2xhuzGdMNWAka72bSUyaDzaSAVn8z7VSL3VCc7Xh1cupkukG",
  "key10": "3Vu2KBsHL6vP3sV8vByojD17Gm28DAwJsXeSoDXAH28iAW7nDgB2Bh4kNxToBCo1GgeoutF3mN9n6QTT9fSSByKM",
  "key11": "wLpPBBXdTRbiwKnULhtYwnuD78pb9BepfV5L8rMdUEPtv5jjmPvLo9PBEbWyQgXW9EGDesRsYrm63FRMdHPUn4q",
  "key12": "3hDoqbMrJu6y73Mm3JBbEe94Czb3AZb6Zk4gGzoLbvi2pnrGaGzvG1XAbCk7eBB7Hwhti3pGoBMaMYPGEejZXJQb",
  "key13": "Pf2CfRNXjZfcYg6CvYNcJVqqdyiXC2pQn112i7drHV3a1nwwqGEc2SLmdhdT2U3GQpaazj9Smm2rP5zx365WJRB",
  "key14": "3KM98QzCEh6b4GGKxRiVgKDNfG3drpvfTMgUifU8NVA4zQbyv5wmEeKt4TWU5xtFXKNUyNVpnd4hyWy29KqECE5N",
  "key15": "2jDGjEqWxGf6Qx3gnp7prDM4wMNS8cRXTYTrJ2huNYLYb7nnq3GGAJnJr9MSFKKKRA6kBfxDWXXjPxBoc5TiEqZo",
  "key16": "3EExVLB5yJYvPmfBEDJ4eG3CSV7pTAf3QhQpgmnCv6N5RYgqtNcGTBzFEGUHdVvRdvX4K2Ct9Q19irXae3UGb25A",
  "key17": "yYQpUfqN1R7UPor65ZRWGf7RQrx8N59131vDD5jKsExEN3kABkkk7hxXzYoJ1i3uXbiXaQgAbpzURxDLW3c8BUA",
  "key18": "26Sumf4F6UmUsYmd31W1tUd5JihJcqABdRBixTxwYSisN4faYFN3mLU1unUjQZU2jd3FAnYPtcSoqj5KgcPmB9e3",
  "key19": "UPgXapcVG4aZJLdr9VXrDFtKvHy5GKwLvGrW9hSTMRrdKEUwyGE8ZUnw9J9vYQdwVKyUumwbpxuG1kvMTnCLmML",
  "key20": "4uR6s6wvEj8qvwCjBQNTGnPnj9tgX3M3AsQvL7ZquwkXB9eHfFWsATrTvhXxPyjFvh5r9bNeNxAF5Y7wkcaVcyRm",
  "key21": "2QnZPRjX7K2fM7gfAEhxuvZAw5DvCpXoyzm4nBhshZBT2FgXhHw22TWkWEbUFwXnezwK7isZjAeZdRpw3udAxCJY",
  "key22": "669m2NfNtSc5RuXkmoJwbRidyaBdqUoKtCMe2RhSRGt2o8xaPYLA4ss86ZXPGgHAH59uaN7xs9cRh8aVZXgfBkyk",
  "key23": "5VFyWeJR6v5LDKK6ei2VB1gVYU6UfmVuUnouxNwGVHiwYX3HQorpgejzXDTTuA1KzfNLqZjSzJYB9Ca2xstZBbY6",
  "key24": "264RQkUtVUNn7D68nqAbN4ko4ia6cDeP1g9i296AzVNHPmycQns4xNDCrM6TQ5tyHrj2XE4GVvLgXqzfDki3RFHy",
  "key25": "zAyi8aLR9KDxfw6nL6MFfCkVQXAZxcH84iiERfwVEUTZXr1LS3Wf5u6NSrUejhPHfpSG7gGajXkTb6QDWtUds94"
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
