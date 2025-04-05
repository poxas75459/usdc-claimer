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
    "5tfinSLrbWysSTipLWQRZiV32VGiADTiJWTHzK4iwDYZmeFmUyuYZ6m7CPRgv9Zws93LQwg98BTLUmEWUrvF8F5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Cm77MU3pDVAms9u1VvCHkrr41kwviSN3giq9KZt1qZDV8X7YBh2gQjYEq2Kc1ekbugxVHeqoLt6m4zNw8QJZWW",
  "key1": "nGZbPtPoQJpDniyC3j3kZPuxPAHwtmxQkAJU21MVGVg8wy7JBHsRHQe1mCVuJvrVbtBsZ8ndnuKE2QvVfQGFLYg",
  "key2": "4kp9VtHqBAUndksJrBfHCRQE7Fsy39E88qNonb1tQ8RQLd1XsgAX9BVRh9wQmxQs9hEgWpFiR4ZaTy7qEmQJ9qcE",
  "key3": "2KUkDGLvVXnrij8paFiQiBwfAdaa1TAc1BcaudAnV4vjuqqE3qxLm8LVNDMwVoqn7bpzAuM2TfpnTX9YBUx8W2Nt",
  "key4": "dRWb7svZahZy1ThQWrKky9Gv5zBVVM4DpwxpqdrS4Eq3GkdkSg6Lq7DwBaKTERgXwfPAumgfx89wSCYxsHgLDjc",
  "key5": "4pEs38jLqufEE9PohWFPbTVhwkeSd13hnHcTLkhS929iajcH7XBYVynyxNKhutBr79kRBwTenYwpCtZfAVE9eFEE",
  "key6": "suwBUvemkapYFAu5Fhbaxfri6Q5dzXaVjJjYYqWrYq2eXWNDD6acMEqjdc6NxTSJRJaf5L4rCR12oTMcFPUtS5q",
  "key7": "3pQdtHY7UyBu6Cjd7y9efKgauFq2Ce2ezTUsAKFDvWgGsdCjXy6DN2XeJ3Bmq1PRMqA424DbmHSQyTSHTyMPhJWX",
  "key8": "WZZJ8ejy8QFGBM1pATtaGLiPK9BfrpbM3FHw7YudhxgdchrH9cqPDYwSQxzwc3nZjdkW1H5FdzLpgba9MwQw8YT",
  "key9": "3GvYcLydqqDPuHQSs73BXgBxbx5YmuUZocBgHHbAunztEGLoWJj41UvVQLGegzy8KWeEaGNfDwXQe6mpXvU4mgJo",
  "key10": "wKCtmBfoRkAnJWGsZ1ab3tTxG2CnajnUSnsp6vYrdiY9WKsSFhA4xKePupTQ9P6aLK7Li8HwgkN84pgA5xREZtv",
  "key11": "5RkEne4PXkZMPcFxhVHywyCzcL16K3kEbKNhejTmv7o3y4FEHdSmHYFuqobwLY34A1cbHgyAsTGUybjjAgNZyDxe",
  "key12": "31x3fU462dPKpze5SorW5ar3N751qK6z4vXBQfr2xc5aVsWVoxcPYmXUt9tWZpF3Xcqdt7ZeW75h1A7brFnbQh7H",
  "key13": "2Ee3drJTvJ22hWX5JKkQBcpMopUNKDoDA1E9FKF2hUWsFsZi85M4seMaTVDQK8pGS9MgpWh2Zq7sbUu4buc57Vmw",
  "key14": "5skdnyQDcbcrnwRRZK1xS1BmFutqStUf8pzsUwYk9JNUjPcCxLPDufPKFT1aMpNhSbrTTZxWKpPuh6KkhZo9VBhm",
  "key15": "2BN4HWtPcSfFy8DgmTHvrRuegGb3AQAofE3fwGAmiqK1QLdTusfJrHKHpz312ehZ6RnhpmoJM7Tz3S1xoEgAWZQq",
  "key16": "ZtjC7t2mBE1JuuAknhDKgnfPVgmX4gHShG8pRWXchs56zHjiq5rEbhQQGAi6TjYLLA9iwttHyJ3JkJ9UxeJFJup",
  "key17": "41bSkcYwDm7HZuni9dPDpeor6iSwSRQdjsXbVX8rxNtryLzGaUypk2eMSvDbAYTfVZwevfMvz52uTMWeda5BkCTF",
  "key18": "BHzd4KJDtXEtBYqDb3h1LRmyncvHrMEXV1mWMEDXZwY2WWawXi91UGdydzSH5ZkspAN9ucXF65A9ZQzAdPQ6K3N",
  "key19": "2JD5HFRoW64UeqQQia7QJjbazXGCjFFXo19i6gMEnyPJJrvMawTjuyyh9kzvWygt4Yt1W8dVHtrbJPuVxv12GUzB",
  "key20": "5D6pno3tB5d2qSibHXgWcUoEXeTMGSWPGhNUTB5unpKS2UGykJFnrWC3X9ddNTkFEpo57ePthHa8AoSPKZJrdnQS",
  "key21": "FdKc5nGpUid95P7ghhiWgLNSY3ZZKxNs2uCptGxZSUEH4RRtiNctWgkw3pjwPwGr7mbLrkzNkCxy1Zn6pt42wQx",
  "key22": "2bw8wCSU7siNz4KoQaS6ydeTGVqEjuweSFW2s67x4qeixATmegKE5jR2GqHMkcT3Ne4ozZ6XFu7j4MPCxoBeXSUv",
  "key23": "2FnoJCi1bLN2dWS9RVKGARQJnwxs5PN3wVhSmXsPCiXNt7VdeSVF1q3wzQEhux7UzGGGsZSo3T7ET95KaULzQp6Q",
  "key24": "3yRMUhyTci7Na7X43AkdugrpVi9o5TpvoRnMHDTFZxgF5pwy5xkfv8n1wpGt7b5nrXB3Wa7hBySu3SwYAkTpuvEf",
  "key25": "5krVvfNB1MDwq6WWTTAgfmMA972Kn85Nxe8nPzT5tJukFi3W1XHspVKj6nRRqrZxFxePiYvfDjcHqKqtVTG8zVDK",
  "key26": "4Q7SbMXVkbCPn6DPR1wKS9ouuAdSWhdL5awV1bGm69zuHmq1eew2EA6XJQ7EWRMy5Lvdezp7s17B4BvRupXUhM6f",
  "key27": "3v1pQCutDTRKKCcxf1VDMhoLQSmAjcntsXrjSL5ZruwmQfZ8XcHGRxUa7YELrtmG836rMPTWEGuTF92L2LxueFVq",
  "key28": "JH33U5FWsANy1XXLByZSRrLUuwNHhL4MavHCYAEcJt4n887vTp8eB1SfDSB2nKyPDvjeZtk78EACcUtopJVMZPK",
  "key29": "4eUgEY1zer1k5tWk5HbVRfHdJr9LsC1muEvfnvezZ5Bey7YRihqKQ7HDZVH2DgQrgQmWCTmJ6cRdoWpVZkvj3DPF",
  "key30": "59Z9PFXVbR9LevC3ycQJNnz24XqQALPCdkwpAv3V5fgz6EJzxgB3eWATSrRGJmJn3XDLQ9pRb7LpGYDKesg9wvub"
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
