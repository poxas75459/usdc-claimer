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
    "453rxdt1nQAt4NnrzrebACEEhYGBn9zRKYBkvYhoRH3XQyebfcMNhiGqRerGgizjiix1pcLvRPKaXUh12kszPyUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3La62KZUTFcURWMffdQ3DDhJZeqPGZUNxkkQBP16oTVYXVx6MYy2SE5LoZw17NpDtbxZg2TfW7CcizZv4heo1D6E",
  "key1": "5dqMAeNcpFnkzSyDC1b2YBon69pXb2FpTNrhteWsfJrLijkC6BSR7aCBvurgNHmbcWdtAAKEBxZL1n2S8GmJfsUc",
  "key2": "3bh2KvWvH4REmnLBF6vXpGjcKCoFMriD6jEUEWnT1xxhzaU3PJwLTpgjYuyEp1tqvCK1qpZwdH6PC8is8rd4uBMz",
  "key3": "257sgveJUtW4Ku7UMoMkD8sQhYi3hxmCHSjWxptdc7GTrkoLepXNrGsTy6JPZU2kj1jJX7r8TBeB78M6WtVFrE82",
  "key4": "3vxWvJgesTn57PU6BmoVuDeyjFYB57UhSNqbyXvMFU556SGgQvSH1qAgoWkySXYjh4LPbcwjvgUew33FQFKscUd9",
  "key5": "3oBWR3nJLxGghhgqAhZcsqmfaZnq95AZ4mKisxJJVXiwcceDxAeK5aDr2cdaHs3ZYwdkpM6k3CTtif6mHCaRCRSU",
  "key6": "2wG3NUN3VnVq7tyYsgFCjwZDUdkSqbd7URib98kSNxDuL3QoRunWrwUeUWuXqt9i4KfZ8WJ1htbKBVv25WNScFUX",
  "key7": "r1HFZhdMqMGxMSFC4Jia8e1tNUtgX5RCZRKxYm7PPADBCnYjvVvqLfXf1nVggMwgJMYPgfZBduRCxHdUnu4CPXN",
  "key8": "5nFQuThMGNamtdRjmgt8hL8EYraWjyS43WFxj2HiL46vJ3EcWrbLicNKKAQK9qjCHgp5QSP2Qrjo8mwJMNWa37dM",
  "key9": "5cmUoN8vW9JmExg2396KjzcHwVAZTX3Qqeqf5DhtUNLbGXQMkNuwDb8Km7fVJD1vUTAG8G5dnfWiDhjWpiFVoGVE",
  "key10": "3fHdqnR5eBjoMYQLG9wGyjYnUVUKCwmdT7Fxns93FzhuK4DSc2Gx3yjWpECWRhS1P7bUqwLYxNDCS18e2STBaS3S",
  "key11": "5NP4KfA9rFU9sMdXEgccTUMBRXeKGtVS8Y9WrYJ2YrxNgs5bNBXphjvJpSbyGvq4zs6u81p1DyZrFXVvR8qL9Rpz",
  "key12": "eFV1ZxoDXCL9hHAgYyHzWPowpiQj9iJES9kFAXXgmJzzSvPbSFgbhQK69o4rXFuihfhqEr2yLEp5KztnPBrh5Uf",
  "key13": "32LLeqRwzK9Pxno4ySitV3k7hwDx4nGe6NrAtJvLM7G2ZwyCDhfeNkEzqxDFDUvwiEqPnHZggTXkyMyokBNHdMWJ",
  "key14": "zvfNzh2abqp4USNvXvEXcK8c3TUMFkwTJFNgU2xNVo4QvTKvu6aZzDMYuTndrQ4G9A4dMtSDxbhskNua8no9UzU",
  "key15": "5G7E4Yd8fPQqS8j4DhDMM7Cdn9uc1KNNGi7daSrS872T9Vr5dayUtgkZYnqVaWtYWmoWxSdHB4xNTooMjpHx2sj6",
  "key16": "4PQ9n59A3N62UnzKuR6Mi3G5RNjC6rXNgg9Ndz4RppeZTfvFWw4gPrSGjk6Mo87P6iSzXw6rNWfDAS6mSFh1Zu2q",
  "key17": "5S88fAFT7vf38rUSeQ12NVUqfmWyPxcxzmJLiqsgD947EPcgRnym5MtitdqRLGoyNkfiWN5eupTVBK9RNEYAbt6n",
  "key18": "67jurt5yzufqzzc7uPWAFQhZm2M8wnw5kbTcEmhgLpAWkBJV7jMiurXeP7DC21NMHdnE7J4k93muJXfihfKmvCn8",
  "key19": "2MsTpUMKjNDfgozqdTavWtJM7BgHq5WhqzRpvYwNwn9UcavF1dujtkfVLwRRKy1gjsiEGUTNf5hiLkwqUWaxieL6",
  "key20": "4HBkF2WpZrRtc94bxXQFJq6fHxvFiPwtcMuQ5erB5bbXjtpQEdsAbb8NJzfq7iD78nzA7VMaFBocsANoyLtaoGtG",
  "key21": "2TFjA4cg7XLnZWQsjrJpgBy8FaZZqERoRNH3oYnAFfBNPdmYYov2vn8uUaJcsy7Azro8ah2jvocUkDMdAjeKw1z9",
  "key22": "CRJeRM32zqifhcKZGJpodpxegjqZU4K3uNA4d1PVBUwYV1nQqsd65V99PKpckENc8DiHPPWNfP4wvWy2C8krxCQ",
  "key23": "4AgmadZmVXRRaBjY4NJv771iMeeDL7T9aRoSSiU9DFB74wWbHmyWKNiZmzr7ZXXsrTQQGVcNxZ3xzGUffjm28KAM",
  "key24": "3SeKruL1RZWcEoyiX2mN6iyoLyMXoLtX56LxD22Bgk72gQErNkqZczyN5g99NGBUTdqZhLAyznJ5n55d3fAaLvcE",
  "key25": "AaoKhEU5ztjditYPuwGqATPruhq1bb3f1B9VdcgKPas7za7URnzYkEe613gLZR3R13hrbxZf5nAubcXKd1NFNBL",
  "key26": "35CxQAYfeMY1MYDRaTEp9RZYJq6PYTdUT7omy3GXnC6RWmVRAm4cGRaz6sRfeA98H3PxmJ17Ve2bBNcT2N8uAsBQ",
  "key27": "65Qxu8iyBEitaadJVEYeQpKdxJh2FypYFGxcpbBjUTsHd54dCn2ryaTpobGobqRAXEJvydo7PfED29TgtsSWqh56",
  "key28": "28XNe3RsJ86BMGtgoES9o4UzpJi2ZZMbmiQBaYce4EP1MF6U6xSUNfmMzDrkWvrz9TDGMzpZb56DnPt1LW9EZKe4"
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
