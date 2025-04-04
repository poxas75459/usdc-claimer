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
    "2CmxSTsBi3JKh1aupdsQeY8UYjb71FSmPzo2tbSDntZmDdxCJWtkQZmJAZRjz1Ym1B4d3VHPzS5pH2uxPjnZC28D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NsdLEhZnxgUL5DQX8qFhK4cMCh6FiQDGx9s3ZuFeryztRKJLbSxk9VTYWUBhx9JnUs9eCnAMcsZK1dBXA3Q6on",
  "key1": "xxasgezq7r5A1Ly6oE9ReJCkybRfqKqk5p2z26Rdg1WXEQw961R6cjL6LqdgMedUmxkSFEpTez87Wkoek4kYnbU",
  "key2": "35h4xYSEAcRUAF4aMzcMmZ66MBaAeTkGT9qAoaNGV9kKkwJmb5x17LFCo6mSgC5ebHPej7WY2kwEs8vFysX1UkFs",
  "key3": "3vop61tXaEWfo1uCADnrt72ZT33rXhfuQXBt9XdyAuuo6mk1dEDtFevfhP6BfpS423U87y3piSFMM14JBkBsKe61",
  "key4": "5tQBCyFPQswcouFPXy9dMZnPmFJJfKEEHcVTuz4BCsT5Y6FdW9zrMsaqAE1Lticg61aFd6cs8qAR4L4gKQLrW4eS",
  "key5": "5iHFEpuTSKjRGCUMBfST6arF6y2vQoMkEZeqPpqiQaViiF5Ddk7trYftBrbiBLnnENiQiP1U45c1g8GLgDZ4MQw3",
  "key6": "5YxD8dKEoo8PHA4PgPbkh1c8sMbpMaioPycVFdUcsTWs4kQFMVhWkTLxeX1Hy5iZDh3n7vjQ7kNNVoZDsFKcuxXh",
  "key7": "3E3uTHPM9ArVhrZVy62ZE4gLV3txBsMNdd7vKF1ebBdiKDetcBfdUsmbfvCiiqpiHheTVu7D33juAUfjGciSZ9XT",
  "key8": "2HXTAGnSmzVGmpFSqtkkS9PqGw9Ae8rFDsNgwERLrsogjsb1dgHF2Hu6doqv8BsMEMETw7QNcwdZYqDjcbV7Tjyv",
  "key9": "4rZXF1NAptcQyPkSitn9V7Yf3vyc3x9wCE9oYzZ6YuYYway36prfncT73ZxKkA7K1aa1cQ3Pi4XiJTeZoX8JPZ3Q",
  "key10": "1nXPLu5mFgnQeL5BDP3VxsuVBqXkBsynrsroA86x723jADQY5BTgvgoHd6oQ93cLSVFe9YoZfowvsYPrWxFuEFr",
  "key11": "4vxBfuvXwFuswEKZBfUvEbxuw256SU6qKx9KbDeV8xi2ajZYXf6A4Jq4nQJY1YEBDygjV7N2sQGVkzH3LQ4EuXzj",
  "key12": "2CNkG4eZ5idmBkWn5KCzVNrNKJAzj2q1g8HHDg1JWgUjsr6BXiS3CrAjKNGgfz3aLAaycm4SiixyEZqaS7pHgjHw",
  "key13": "cYAZKGsKVVvg4RNiwAYv7oASoXTxkqMRcDxNW8dGpV4ZNnQWTEsB18Y8q7uqBcypKSQJrMZQZHpuQbKgPKFP1jP",
  "key14": "2NGsbjmgpm3gWPYEs1Xr3YKBVxxnQnMphRsG8kDMpNBT5C1Dj1HXenGp83LbtHDab6hWB65BcpqPASxKmh3PLNsb",
  "key15": "5h5inbdehwQ9mo1gHyWK82XTwoXRiiitpSB3Z95agzrM64uCLnr7bajXYoUqgg3gpfX3o4sRUMiY7VaK4hsPhCTh",
  "key16": "5wNJLkxpFggjKNXxhh8MSc74hGPtZ9DXBkzu8rSRmFJeq42QmLJqxhFtMKqCVJJ3Vso742k7FjWXCSQKYbMCjvL9",
  "key17": "2nVj8GEKMTquRssHuHUpvNGkvL8LJYKsnyrBoLx1dDNEteZqpPhmAxF7PWstX8iVp3a5KSCdweBRbJTHENtDhaL7",
  "key18": "4zyWquZJvAXbTi58eCgFXiHGPX6AXhGFz87r5DG5gJ2snMCofMBNWwCj74HRAFAQMPDAiUwpSXXJJk1YjXYWKhzp",
  "key19": "5tQt2djKSa4LrrTfo4f5jMUZU6KPMiLwpQY8HEDEx1yV8mD9AthVNotJKrRUcfkZEpYgJykJTWF8FGkEz9Pp3zb4",
  "key20": "2REQDBsHimQxWMcaqou31RC7hdHoJhjwoxwEsFst8sRZKSd9bTUCG1NwNSmvBshXkmWn6GPvqEtthgvzzbCbqbx2",
  "key21": "63RiZWyPL1HimRkawuHcuxvPPsBG7jyZzawFroXQbKMPiS83LtVshByXhdezQp7opu8j6QauCnwYDceefcBfaGg",
  "key22": "L1S7rj56VqXJLFYrD1g6B9XCqFnAaRbShK2rXLEvaTE6x66kav163xVwA2jEJhjaza9fghSRbxchC6Vhum14azJ",
  "key23": "3sVRaMnogwsVwfJehWB2UMiaBdiwUP7134t2fVKGDeAd14mCVuwEvVqXTH8cJaLYqEq5LhbymtE5W5UGaidcre8Q",
  "key24": "4WwG9rVxiu6HESmbvrqVybz8Y42dHRE3bWPnx9AKziGZWHGr5NzWf1eJN3xaiNCPtGMyNWSx423HGAmNiD8aBqL2",
  "key25": "5gjNpES4emmNSxqMBwc5s9fqv9LZGwRgX7kH2RYaBT6Uuvz6Lcqh6E4o5GoX8WAT3969TALDUqXV6JJzrFrEgJxs",
  "key26": "XoCxsPYbeZt7zKh1TBTcsU1YZwv1ZM7FjY6r3kyiLUVJzH5smmagx9qvnW6QUDfw9ecPNCSibYRii6pPd7huzkj",
  "key27": "43Jr7LcpXuF8y6vqVgMxX6ETAFnmTZoEe8uYJjp7pLKSj5LuStCMybDeNbNUPgjdzC8h6GTjt6rXFem8nmj13nDv",
  "key28": "444xzzjnErzTLiBUZXmkCCu44S3NYgxqaGrpzqtxLoCjtxPE48Hdvwjoyc7HkWSbFsYspWn9RB9ekpZm7tCV5Q8C"
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
