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
    "4DqkAEFDmVsF2wvn3oi3pxUASQSp2XecqiwxLgyVkRyQ53DacYseVALuENLWP93XmijZEAzGUsoo2kTxrHJ1BPuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZkwAZrsNkQU3yGLffTfEPuAus6gVXRPipdKiX6hTa2qZfiyTpVvX2UHn6NsdeBKdVVV4hdkRt43nQ6ErqZLtN1",
  "key1": "53vhRp3js2ZKW7XpmGERoAKJMU6KMzygM7Y3MYfn9Ax1fB9cKBq5Zi6Bt3gmY1kuHGMKofH4g8CmQBFViuszL5Fv",
  "key2": "36nUw9KJrSigTukPrgYf93uHkQKMkymmF9rXAGiPeRiS5nHN8rso2mb49gRaMRmkCMXazGzoUAPsjDBWhLcYCkjg",
  "key3": "2cuDfkaoiqwWbpQABPqzkwX6PMeaDAmZmW4WemArdMKUgj5qiVdRZrWY9EKDdz3SBJCzpPhznHdvAUuH7f34CaiG",
  "key4": "xJXbpTywJDYyyTkYZ9ZCWNanmMYDtTUPE3yu59QZtmcqNBk2BSJPAL2Rua7ftECta4T5a6X9LunSdTr42rowL7u",
  "key5": "2hx5NbeQgRY4VDyFp2Adw5Rjn2i6goPo77JXfTQygXFid6GV5A4DzXoGBoJom19JtZGx41bBA3fKYZgruAtJCWNy",
  "key6": "4cuFqCFrZVTNeFxtjN7tLSEphxAhrHgYYJKR7Vpjm2g7LJySEsL5xF7cBTDSAcvpD4SY5ca6VXMQqjNPSqsZxexj",
  "key7": "LCJK1Th66UQWJbAYFgFo41GyrDnZKDaKeE2sHuw5gRQUBxSFsp49TZsMCXVu4eB6W3kxmqGLPPasbQPrgreKLR7",
  "key8": "zkXEASP2tauknd2VkPDTdTWnqFn96x5z2MQcWWxPWCXRRdWyn3qdK6uEE3qzhuxZypWSEE7MV1Xg1sUysYeCqah",
  "key9": "4CZkENfMUC81d9xH5AoSXRKvsCzEzRkJv3Tj2HJoJPbJZU88Ht9fZqNGHBFzNjWWukVnHhcbB46DBdmL9ZtySRw9",
  "key10": "2FfJmhZh3uJDd4Z7CoSDCxfSckqb8BdMXhFDKJULXKgkYsqouuS8pVS9jt1eEuTrBk63UVvEc6oCDxdcqUK6WyP9",
  "key11": "4D89WreuLdcRczMHXmgkCqnvx2GE2db5hzLF3pVaQ1wmWLEbUCrmch1kTEcfzkZRKgUNjMNCTEm6gcgx4iRygHPT",
  "key12": "4HSDxqJueZHCZPEARi1yBpwvtJNUiGPRMr58c7va5a6EbqJrZaRwMcPed8Kr1vYoaHTeiA6FAm5ph3rq2nVrJ5C9",
  "key13": "2zF2td1vy2AMo5YcpBQCopN9UYJhC9kYvvi59PycDGdbvKdjDQdhRZf3PoaXT2HRfGQusXXpxMKWG8tm6gHcr9Nc",
  "key14": "3LxExqRPCoxUwy6FzXAWZhr5ANXVqDVj2idkjccN9yoiyAxwSovbw9mmiQM5K13TmHpQA382QFwxpNFmugTiBYFL",
  "key15": "3mGE1v5AFVuy1ykXG1D2gFSi5Kcm56R2igtK2AyVqA6bDHwWaRvT2Xc8SUfuXYdq5xqtAwjvFjH9PHyfXH5eEYXV",
  "key16": "5BBcXNauEbFXcagPcgVDsKV6vE6UqGBpffCEDiYodyWfXASBwfDxuAYn5D2uBVbQsdXRCHHUKrjt2bCnuo2APoJi",
  "key17": "5ntzxvynMYF8Md7MkWdzqzh8ndff2aMeTUH2Rd9ESSpWLaBmvC3rcApo5LXmu3LyatnvFbNKjQaHpj94Heqo5nJZ",
  "key18": "3JRCEoiVdhjgTAZ1nWwjsXH6L3kScDeJHVwQgJ3FVcpEvNLADh3QEKNRK4RiUmUvzEWiwgoAXRhH2C6HLQvrJ5Do",
  "key19": "47QonXrE5Bizh7S9Uxet3RAKaxyih515URJKzq8JFzTTxDCwNpkoRPQMw1omXtbgUdMtwx9mC9XKQERwyz2aiGoQ",
  "key20": "3SmSaQ54VhCUdu3MeufATFchuWgKGvh4RUZ17vwhenFfeQXTRUNLpXF5JwBwqQJaZAjMPXo7riSKpgWhCGnUtxWS",
  "key21": "4efhZ2mS1MM6AQSwBZGhToq2A1vxSeeUoYUwk1DV2y2GKXU25ZvSDYkutXZtKfjn8SCs7SnqGvrKqqeemqSbuHaa",
  "key22": "3SLsNvxm6KXEPrGYf1MhaVEzwbGx6CQreouTzgvZSq6L7RDkbhSDteXRkvnYHdfpvQsbAdWj9RJ1f9ARKxmQmEiF",
  "key23": "4EnTG4p5YshAS4D3LPTQp8V6xeGLsC9FJRFgcbDdLaSDK38L9cJZajZWFfeoYdNrY1gNX5a6CJLvpcd6eAtUxdK1",
  "key24": "25whJ4YtDAa6YEWSov6d7grbmx4X4ktnYd2QareuoN9Uy3T9CDcymAJDmfHj9wRnUwcJLTJsy1du8BYBBVXsS7m9"
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
