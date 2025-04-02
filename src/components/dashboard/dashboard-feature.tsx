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
    "43zSPnmLpgjLMiL4xPDiv5x8hjyabTDWUrj9gajEs1fgrfbCkwg3Q6CfTM3x9paaVTRouZGNg8Z75JNkphkibYNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMtsL5Ge7TjzL6u6FSeehprEokShSQuTSa5ruMWGyCoxysusPwTNFWhe8sF6p5zaKMLKF7GkFLZN4fa9A7hfmd3",
  "key1": "4CwX97jgf9cshFo9HMmV85bB4nCma5mrtSfP1u3HXrSfK9dpNuFFEFymmWMRfBoeP9xxcisuaSiFAZBzerUFaNKq",
  "key2": "5RE6yGJ3ZpVoHQHXtuWgkyH5iPb31EP4nvvtau5HnESn5U9STJqNzhf2sdRJbSbEe84y9uRzic3yDYem8WYCmhky",
  "key3": "3Q8DSv63nCkciGTAoVqDzG4SSiLDFsfirzkt4FowzUrSev51VJQKVMH5tSVdvVRX4dcpokEvrCQbUco1Xpjb6ZMR",
  "key4": "2V96ngSZrHg3C1N4iRpbRQBVC6i83dhwRq4v3KBRogYXvZNPZLQ6V7wodgeY1yXNodDGSVinHdnYZPEvSUSwCabW",
  "key5": "4NGoFgnE2pENScg645mcSmhEqs5CTrfDtDqtSNHipqdSgQrRrKqf4P9rubC4muWCwnQf6rkP3xu4BzY4a71VUL5M",
  "key6": "4RQwyQepgjAzFcrkmQLMsf8nkDETVYjR8845DcrE1kqYbUZyVngDk3bQRvpmZBA6JbDNfVXs7nntSjhdQusC3hsd",
  "key7": "2Gv9iewUm1DYE8HKvYCBPTchXgZKRxU52v1tv5xMFpTLYLeea4iiWbgvnZFCMM5neaNJ8XpyrTdJBDWLzqups2gV",
  "key8": "dD3jTLWG3wHMHS3w23wXJJEPCG2nZbJcsiJtLkDrV5Tyce2W2Fv5jK7LgzT2SnwUfEyoQFHfe4dZDKJgMhcFBqA",
  "key9": "45o59bqXoUb9zcFYKqj5XQxABHqGipJqEk11CfiUGwSvZuxYBCHjrLU3t6TnCHfKcSpsRtoDxNg1BTLB9PTvUwAx",
  "key10": "5oopWM44hUEJFtTRtqzCF96TCSdyfTdVLzUdEGUFZt8pU92tyMVp72FvEyGZAnAzQuhqQJ3TAp5XeKrkH5u84ymG",
  "key11": "QHecvSZpbVBqfByXcWH55cqDrtzxpra853kJbMzpHcyYsDN27LPHnBohrsqMLxW1NSVYpscWSRn6R6xbrocVEZi",
  "key12": "3GimgA334xRi2KX68JnkcrmQapCHEztSD91RsRHfeDZXQrP7dCzTwjzXQoMLDuHkmX7vBfo6iSV4ZTGksEL4VCfb",
  "key13": "5VNztyZwJMa75mriV6ixL2fXHkhoCcmee8w7XT54ArcYc5sTdX4PF3vb3obfXfhDiFbfga8mLWpCNCS74YvnQE3K",
  "key14": "2j4TjjMEnYD3Pmkvg8wrBRdeXM5oDnhwaCF37dbLWqQL2epuzy8xQRjtNJ65E62aoVcmQSxH5iEVFz5jMhfNTMTG",
  "key15": "VLrZSbf9aaSFrpGRuY8UnYnzZtAjTKhBvk5iS7QQB4xDnmbaRHNQfmAfYT7EcwDjSQQff2Tdz8PsyYi3xuirFRv",
  "key16": "2a3pyGHnJCTRjkQZTvosYRpwFsVY26vWnokHWzh4xRdqMbZqXcazbRshbQSP73J1K3kWh8Vj6G4joHpyQsRQehRu",
  "key17": "456FKVGhXo8Pm3jcWwoR4jFK2H7Fz8LukY3oB3tJ7L87LLpU4JBei9ZJAPmGQZQ4aFZea9k8GpCEhfpaAqARxxiE",
  "key18": "5cVfsvR8Ro1rnpiLaNTFFCD19YurmihAKpx2aHC3YTjFD8KGUShCsGcui8hfFTqGAD1eU9r5zhEK9hjb3PLHTfsm",
  "key19": "FiFuk4BS5xfRrswwH6mhf3DLnChzVgL4sxWtqWU1PpNsNRLHLX7ongtQJhY3FpWEK4Gi3JJktbtizMAAxr97SiZ",
  "key20": "4i3FoYHtYkUftUS2iRbjL2aGLurTYUJ14RFkZUvBetAdcT36LnSbZGshMptxnQBFd1y21pqdKgEEmXQkFWqi7pi6",
  "key21": "25i6rgZ7fEsnJKDBVxd9dLG5PNhBa9n8YsHgcabxp5rYzSbq2bpMZzs8ksMuvuE1rNnkFae68FTchtNf9ZL23gR3",
  "key22": "4BDzsC6tJxp9DBTZjFeC7p94mVNGDJ2U5XHFY1k3SvpNzd6dN41667TCLKFoobzKFUVqgFGKb1p4QisHdPUqhbKi",
  "key23": "bnCHoWtqPxkLGXB3tPZomzHaLxVrfGy1yiPojXVu2iYJBPe67GzFEjMFmHrSYnMFUVKSRmd7qDjvZ1qRDoFvTaY",
  "key24": "4KUS8VUVZ6pkr5WHXqw6nNZA3JiAYkUEXJ2kvXDaWJRM2tDA96GcP1dzQqhaGusKPBMKfqGNFNCvNY59bQm2aqrx"
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
