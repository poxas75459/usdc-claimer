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
    "417UjVPgekb8jjRhewME385N7W7fVzyFeiFsYC7NRqzjUThUSxELFy1T5pLRNms1MfkM7H2F7zjHecb6Y3F2vwLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tvn6aWiv6DCabXw9DGK17gB8fHiN3QYakdca9XdTif4zjnWVUSER4g2i1uJU8zYZf7QgfaB6Qvix631dCPcou8v",
  "key1": "4cRcESExnKDCHRgPzbqTNV8xW7o2MBvLusKC3UkcwXheu4F1HeD7rrsFakdG5mz7F9xZwqMbMgHXBGMe67RUT3xU",
  "key2": "3soCowhGsqspDi51qJxk6g7sUJxdGzXwPNEcA21b9J2wqkRHRMSnu6jq4htmd1T9RdHrhGmxPngBahKFCHcnZEt4",
  "key3": "3CSwfZvdfprRdYzhsqSJW6rUz4mmM5YDzaXQEy12tXrQshydVAmFEoD2FaXg4u3Bd7PJfq1y5rve3BftBV5MuFWv",
  "key4": "2LVJrjonPQ5wWJzKYYNQSphUnQVktPHRBYJeBN1sWjMwUYC3F2dhadVLY4x15TtnVp53atUoqGhB1JqawKNZvG3i",
  "key5": "7dQc2ycLVWkHzBvqaejjexqbeUHTBFXKjJ6s7HAyUno6rhMKPzkXfnwqwdHXn8kLjfGFMUuJJWhjRhcQfVHBmPv",
  "key6": "RsD1L4U17VaG67e2M6bNMWTuLYxfoeFdbR1XMdc4UzEu9A29pSGwPRmuaBoTZd5USo2K65zUXA9feRoC3gbuf2d",
  "key7": "2Lxksw6nJ7v3xPCcdAFgxBcYDbgk9gmn6QUM5adsDdcDJSNaLHv6FZ7LEDCGXFYTTUWsPvfFMDn2KWwCk5RLxpZ5",
  "key8": "2n9JKLspm1wrAqjq49UcpFr6nfrnKoGPZ3btcnVKDzc7zaAsLLULGgV9QvFsc31AsLitLhsx6fvv3kZG6rtD1PUM",
  "key9": "3viP4jXuWbJS3oGcE5eNuq4ooWkph8pwK9XcHUv99DAwwwVrdWx1aBXX3uA5Ct1Fp2mXpyWtV7i14mokZHAG58zX",
  "key10": "3rDghhb3fHZ4kAdC8BXKrzx9k5bURBeAB46g2DztoLnYXvVtNW7G4idtGxCLZGrx512WQaeNCF87Af1kr7ULRsWr",
  "key11": "5EgJTbHicY2gUZTvJkfNYFTWv8ULwJenpkj6MqJU8gebrBUdBYYULStcyJsDQiEb9YBT6QerHeVYL84yJ8s3HJ62",
  "key12": "4PiF2NdmUhiZWYPcETVXb3FgYfgHnUhgHi656yhbj9M7kt9djmUqUCSrTSzDXzjVu7ueB22tkzCjNKaZVgQbFkgN",
  "key13": "4yXm7omguNjWyjuAckJeu1LkgoWZqviqv73BFxUiAdwuPf5FW4vjTKujWzXBJxTtTshCgNNFLLUvNnD65Y5Nm36n",
  "key14": "37mDikhnGrnJ8XejedN8Zx6142Yn44P9hYNKQTenmmKGaE34s8FfvevddHRqfDU6BykS7MMtjpreS62qUd9ku86k",
  "key15": "2dsdyJnoCSXyDpkdvaz9reZZSnGa7kNPCNaCzsFsR9hSQcfGxLKVNdp8hJEYK2Chv5M35hesqar5SzxwcMMA4LRd",
  "key16": "5AZCQRviCYg84aBDu9P5X2gwNn4Jjf7Reqbsn4AQyKxyGP9efz2aRVxhxdprEiWjojixWK8z8oaZtBBygb7U7EW4",
  "key17": "5VgL1dTbi2LMwsLobbfuM7tiDnMQ3NoGMUERzT5oVpQWey9aadN1Wgkuq7PxbkLv3B1hRwihR2BeGeh1hRPTfbfw",
  "key18": "37EosbGFf6mqL4wcjNEDpZbkfXX2Z74mRSuccW5LMvjp6n5ubjKcWiQ9vL8jVi5SRc7vcZU6qFsVZzr4VzeVdKrj",
  "key19": "5wHC2RFiTHGQ1kuVeMs3fWJq1fhbgLguMikJh9mNw8S52Ljkh41aA7qYXAKBdrCL1KgEVFtvkLVLLc2WMR5mWzcz",
  "key20": "5FBigWxWYs94MbZXKz7GEU3zJirZMCLGFS8oZhngZLB5uqmoUpNxaHk2S5561cSM86hnQEwZ3TRppjK42XngpYfM",
  "key21": "3sRaSbovcf3vuq3BKUCCqkLvyGxTEvJXCvENEZCJfms94VaQxbZ2zxrxWKUkCmny7JiaULVd5t3jjNCoxgCisxKR",
  "key22": "2cvvUKcSmQ7H3GNbajQWhJvDzMoMrKnHVd8CAnTQMqtG5pKb8H5GgSc4C6oQWApKfQbitNxBWGCM3UsRSYLvsJSZ",
  "key23": "3F2gydQiUE8f1kV4zCrp2djPNCa455KWHbVtHSQDXvHPh8feabERVSKctxXMQrukEAxd4o1FjoZywSmH6fH4Akvu",
  "key24": "2wRynetV3YyBf4mrWDGJvXcoNktp72LTkzrDCwMBBvPaY4m1P1QQCEjrSoBKj71YEYJfRrFmWMP2uy2gpdnzWp4u",
  "key25": "2e7LJYNGUNYdHETgPDq1fqUQGP2ptoCFNhvzWUNH7BAYLhKoPyxVCaB8eZdi1h3y3iuU1LyFFgAducME2mLWFya",
  "key26": "3tX7r7XYqoxVmdyzis9K2aTKxXegENBz5Z9XHysEdar1irHJeH3pYFa5qSrXHgFnw9dQhLtQaBQWFQWQ29Seqq3b",
  "key27": "5bbWrvM5WrFTG8fLWtrKjwofJL3xXFycHs7ywHb862M3h6Emwbn1ZpUuTfta1TbQSsZg1JJjNvfUoagGBVYVrZo6",
  "key28": "28Sac1ifPtLG3HmbcTeRhM1sDnyschPo12Hh5HW9TZnjZFmoYPhjYCRJ5pxce1aNakTzo34mhEKC1nVAEA4qskAT",
  "key29": "5nUbM5Ht3xfCSunvrH2iyKoAQM84GaBdakEDiJNQ4PkVtYGdX5A7bfuMdGpxcnHNYJ6p92HZ3a4DgV6VJEyEXnX",
  "key30": "2UB7YZNW3zSAMiQVUP5LaNL8iWnXDHny25XARFcrMwQfMk5VmmpDJqrm5hKTqR4QM1P4QgJnZtJBLWTK2zvmi8M7",
  "key31": "2V8EPYDDCRcDmjt9LCvNj1UgbBWvYkygcRqWEr28uVH3Kpw2mvAGbbifhdr7seWBD7WVgW5BpSbcoXRoHiyqtDFj",
  "key32": "3VhoyrERy7gt9y4fEKmAsVB96dKTwrR3cRZt7fEU8Y8PxKRw5CeUuZqp3U7etja422vFpxxLSGtAhbxEfKcmPVmP",
  "key33": "m5bGnQhEneXYGX8JYNLaREGKnY56acM6qN4f7nM5uzS93mn55DNfAPR2mmBbUuKUNudwGhjATFiZDkpoa4uuiNF",
  "key34": "3DTT2z4zu79LtMvrzxHtrLFjF1o9ZG9xSfzsz6NPggUjb9KXxr1SYpZTscpp7j8gc4HML5avDXmChMupnyh2y52u"
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
