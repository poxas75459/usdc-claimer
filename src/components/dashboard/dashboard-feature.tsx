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
    "4X3peBAYzTfbywgw1Hejpruvc2e1CcTpEfKCWBxwiJikiSJWr2Yj2njPszbn4NQpGBwTjVGKGFJqPsk3fKMkSsQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hASqZPTmWVtRqqfH3dJesr4crgqHQPchzh1Ms3YG72myrCU3wvBpi2affiCF2grNg8wvhw2gCzjSCYxefmZMrq",
  "key1": "3yinQ5mQjPWtURVnza7TU1QPYabWhW4oATqEoBxabPoRAnkHNEWgg65enQVx9vVrFDDSn26p4FnJiagWxAMDmAzx",
  "key2": "4bghkBJCqUdHkRiFhEUuKbgkJP3TEKS9et1CPvmX4iZymB9kX4W2PfsTMkNN5ushXAuWZmKqDGZoEXtET1qzdz8R",
  "key3": "4RG8BX66ojDUQhvXxoCTBLb4VKCY2SWPzhSEySsbNWjgZDxQJ6tABSynzCCF5i8dBm5xFwLxpq4gVmFBs1gxRxjF",
  "key4": "MbsMrrMoHgHYYvSNcmchAkkjdYnRXiTGCWCByhpp1HnMpFzMjEW3R7VQKCYPgLDqGpp4uETw4YXjR1hxDVYM7Q2",
  "key5": "Fh1MBAijX1VuwER4b49VkXhXGcbjaBR8JZaxYWYAi9UxFXNvkbbyCMhcrNkpe4iF8Y7XGKmUmxXbyA599FqY6vR",
  "key6": "3h8hPGLbQuS4Jzh22dJ5k5MM7YxQB3QpusNkX4gWwrP6NRWbfGBaQLTbjcvaxbjUXyMFwNefy2z6PLro3Vf1ozvp",
  "key7": "4BczvAp1HuC8je8n9mBgEcZ79VJtJNpzKhce8U7N1uY1ZEw4L5LySz3d5GcRDsTXHsszpSPXU23cry4SA3ecAdyw",
  "key8": "RiJyAWQtWUjcGXmqgVXTTNYhhbqrCniL7N9XZwafpiZPsdeArxzZVdgLNB9ukKKeNodiPkRMHafHP1B9GQu59iK",
  "key9": "37Z2EnEw6cZeRec7NkSuYjVVpijnddGbVFLG9Ns4Qk4MwRDir9QLmACFgnTN5iHNke38Jd76afzPKJ2R17tiKfQS",
  "key10": "3fpRDUnWzLYFo9FH2wEPgUpcGtfFgXHYdyWzY41rRkZah5v9Rgh9YRSXrEJwxyziJaezcCugXqSmQBs6yWwNCDtv",
  "key11": "4y9EQJhMoKfmkUJjUMNQCw422UP9gpby7XXzEkuFwYiTyRZn2pYdBjma6BMgZwsimjWhVcNcd6QYaebsVnY8NEf2",
  "key12": "3XBPqidm6Tm93i6wnigNkaCt7oYrBjN4RKJThLBuYBJ3NPc1AVFPZvFkspxrYyVhDd45tFdpwaZ8ivt8JCTUW55t",
  "key13": "363LyDj3WZFaonMy4GEUUG9GNmPJ4ZAdvjY7nSr8ytSGNxsRsxyD6StKULgHNFZPbxTfsWHfJUzNtE7xbBwkE88",
  "key14": "2EXGLks9tL3EQWjRT93AMugpPSEzp92FW8jJBxeGn27CqUBa7QFCVaQkyyP62tUTHiqfTyqsur4wqkmqQPm67YW",
  "key15": "4vk7EWGSWEghtEuhH5JwhAecK77vZ7fgF8GKMRgyusEMNLEDbbDdTcxURC3hZs4k5rqnajQictXCKPrRHLZMcwsc",
  "key16": "46bzfgo525cUAibuebZLeQnzFvnU8qUFk8rDXUUXfzfZRrw7ns2mNYyBM699RNd6sTn7JbVd8YdnJWr7SHeUwSkP",
  "key17": "3UCxQY9xWALzHpERfKJjRTZ4k2WsXRH3PNYwvbwMny7jFLDkkmJQiVsHRxLHJZCkEQPzDizLu9xa3MuS2CpLAJNk",
  "key18": "3Xq5gfpUdFtwB4Lq9UVy9nCzriWiP2YNEu6gXSX1DEtJLoXSuksqy6WKvsM9HayUFTA9wifgCvLwFcpEHsdKRzd5",
  "key19": "3FuPwbz1bZzEkGwsoJ9FT5M25qTwYNdp5oHiooWrBij31EtR9uqYb9WrLmDn2AEk1dHUQ337HzV5vmdWLKyX4vnS",
  "key20": "2KFF9UN9hpSxFis4fXsqKKw6QHs6es2TvGpvLBWFzFQEkua25fXpqxsdzEa6fD1XPF2pBRXdxZ6ksVg61QihcGYv",
  "key21": "Q8JaRmXAN6nY51kKyqxoDY6QC9ZUbLPn2ggkrQDw8Bg8Y27HpKFDf9dvjiYpbTzu9BVPPCgEvG17buCTTr5fvd2",
  "key22": "3KQDBt1sPuYKKaBDLuEPUKdAZZxR455kN1UQNfdB1yUVeLyKLFe1b1g3HvFGGavznc5Xj66y8UG4WrLSw2wpus2p",
  "key23": "22uYBZQUEfpPXSCEMLTX6jqQue989snxhSWwEzKBE3c2bqwHFgHmDckF5vYTHBCHi7eUNqXVuL92TPh5Ri6PDcQw",
  "key24": "RpUXwCM9PACwz8nJGijo3nCkoRnA1UFAT9xogakmUbquJBBuXpXW4dfnv6nPNwrUviQuHZFTDytcnq5w5WwVAhP",
  "key25": "61kKNn52ey12hHR6Eb86rAUMnKEqmwWRbYHR6DVEYXxUs2AAsLKGTx6B3aTJEJK7U4tQsnArTzX3UwrsukW8XBRe",
  "key26": "2WzF12wyTCEQZuzkEPPn7MXBF1L41xCQzuiK66GvShfc1Rg297WG3uQ393W1E5bVAmeEHTaBSfiYQ8734UG533w6",
  "key27": "3YTztm6HBHzrGpBPVjVcN6ePSiqWEvTFpP8qSG1JVnzE8VXgz4rhBccAnSTqpY12UXewUd3ASVPu8QF33meqaJUU",
  "key28": "3ZNmXLM1ijVKDmpa2j2nWHXKY5kPAKcDQfGkJpbG7ECxcR5q1RPkiHe7oArosSvRrtDwePvr5jcMfQQxewXtvf6K",
  "key29": "2sxC8CELqqSmYZsCnfjcW2hwvZc9yhrBcbgun2uFLR51K3KyX7YZyUxnNg7wM51fpghm5An38DyvMNYrKQYpbw6u",
  "key30": "2gBpRCtBSnf8ASvwMaP6wv3PjJkHARdrAfjRPKjTG2DPxzMWJrRbEuv2iPUZwRmQpL9u3pxxWkvSb9BzepXAiJEk",
  "key31": "xQeva2kQiAdwunxATFtpTZgrE8h4M2mHLzjzhZ9h6rwPzFJwU9T9Q3eYDp72zjDLhV9mj1ULFzdx92UdYQsTSPy"
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
