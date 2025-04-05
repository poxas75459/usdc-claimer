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
    "2cT7W6VoTwgAx9yoJa37tkT1VGrSzjwbTq85qFwAxHEEcfgMhszEKQc4TscxLJFfSGrSVfrDmfivKLVhUzejchdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VpoJoT3L5aCniSQ7GpVsmd9MfS87PDfeJR3XFJrLvcEHBnnQtHkKcE3MiRCL8arpduR4mT4QnhQQE2YXWYfUha7",
  "key1": "5fkKxei8JSPcUCvMy5eCPazSpnPjoq99YuQvi9x1cZnKrdtTy7ENkPToV31zsQM3z82z2jEJZKzWXdvM936ojbno",
  "key2": "52y1h7NEGxB9XpTW5ikBhP8fZcCYkQjoqWgAJ1ywuMjbvivNdZAzBVaLQ2qSz4ocrXJ8gnNxMRNZdv6TuvJNJ329",
  "key3": "4nbKLsAb5Aa51R2qqAw3MDaXMnwkcQSHngxtDkfsb7aW5FoaNkMWudcX6DGxYYSDCACVZtrxQCCwik1KVGCVRXpr",
  "key4": "4LZHwfbRGzNJ5We9f7iH1iHkX6XHaQEpK3SBpybeNTrJGTeaTjQ8V5BFRdpSejoZqDY2Mi6VfzD3qJtTpiJH5Rqn",
  "key5": "2jFcTbX2AkqVrP3VTvSKPMjTL6X3uhT8KpUMa9jhiTvATUvfZj3v1rep1GoBrLDE9ZjcEG8emXGB8hxiBPrwn227",
  "key6": "21HpxLLz7E8PSzpMz74d93Yqvrz3D8Ej354QPaDUJbvHycD5UjjufcdrgQbdFikp3a9MbfKRSx6M2qoQh8w8duaL",
  "key7": "5eWdGWNEdHn5XFs6sQbyVeQaLFBtppYyWMSLvDdV7ZmXjKu5Z8BgakPddjqVbP8TJP54NgkGdp8BMbfQE533WgXd",
  "key8": "3b7348xEhNGk4eTqRNKSWLqyUrpUtthUtXBVYrJAh3qMz3sGB53ZSZmxuK2PopDeKoR6UxnAbptYEKgXR9gYRnT6",
  "key9": "5gLsktiTjZech9PCijRVVVfEF6h7Le8cWCAdhcPYmHRhj3ZR6XAddRMQFDFTmByBPUKwrsMMTF21hjn9sBC4HTMW",
  "key10": "3N7FgxsHhJ7tjdthmwBuw9Bxnd4qJsDAU6C1USXQkJH8NNvRfWJZvzvFuUmqyKKLRZaU2dH7cJwkZC5e3HmYdZKv",
  "key11": "yrHCHWt4dduKYX73QzdW3oE2jGMDNgnmBvbQDLnw1XAa2CGKd3tCbe4zFAQXRxin4wRBid2wqkiJAxqETYxMDvG",
  "key12": "5DPhx9xsJTtiT6K9aE4edLEo1rFCZ6E3rnDcM4NNFuYiRSDZo7vq16XfFPnXRuQ6Snd2Q2HcATauUKpaoyD4oeDu",
  "key13": "4ZZQhrrmHfueepcAWWqVqPid4xwceJfeU6QF64qNn9Sz6PcdkTXoZFPxZpqQU5ffdSsxH5atjVYrbCxjVWe6ZMqp",
  "key14": "5p8uCkQxf68CwimcfQXY4sa1sP6m3hJ26GeheL1o7Xd1Vy6qCPRDcDiFncXgEBFBbjZEsPxDPe5FNYGTMp83D8CE",
  "key15": "5FLVY1wV7tYexhdw8mW4MEz9eeSidaQx9AbFgXANF4WpyUMAqm36yf2Te1WoQTwCoT2cgNSXnrPruvhNmsemZphg",
  "key16": "5yKiajAKzBU15pWpDd71tAFUqKdPPkR6queWiV6S9vHsDc4Ax2DEm8WLLwW2DQXzjWD4phsQEHg9uhJp95KHxw9Q",
  "key17": "36KK5WEK1ng7RhyPBZXmiCKbxyPSanWPiY4PzJ4sRZmFUzPTCk1PZa5ZafnvvyFnYFKCjSfiKYe32uUjS1753A9X",
  "key18": "YeCrnvHPvRFjdbVD4oSU3teYdajQ1pM7fyZWaxYSKTCprGGsBxDpPb44vn4T1T8DEsYxTDHcn2dd6RNEtiEHnSd",
  "key19": "2sydUY8Sjw65epDF9Y1STRfwt6y9VsdCUXsaDxpxoJ4TKR4iqQwDbpVwMWvopAWA5ikdc8JVt7diPFcxQp8sD7jC",
  "key20": "4MnG2RPzyDJcbCNQg5139n1Q4LREjmAo3A6jfGWxhZXdhg6RHCzdiQ6xo2aUXtdYd2J24nTR4Hg7EmLZaWgNeTXp",
  "key21": "3MiuTW6YKPA7SxAsP9L2wpbHc4W5TyDpYAJDL1ZenAqsoRfkCLPth6UMKFLYUqkeD6WwX2GWC9uXEYba4NiZ1bYi",
  "key22": "2T6Z83ZKbySVNB4tBu7kdyNKNP3x5kDv6ERp2C9xbF6oYKgfMsw9f1M6z8fA6yF3gApxA2UFT2u2Yq2SW9T5qYur",
  "key23": "3dkogpdcqeeE9yYhsyR3pvDgnW3qYunN4yCfDCkwPnqmKui1m4YBzWmx8jGSn6ufGidfvPowBm84DiskETi5YhVZ",
  "key24": "41rHFtmDJ3RMJG92wC21UJq3HhKKCm4HyrfaYxutVg8t2YAbynMchUC8pKkj3rrEuWUTH9Kyr9wdNkqn9NrAbJkA",
  "key25": "XtXsza6JsemFEyTRzcMF35qgJ6GkT68myBTvw3yW9RGcQdn5kzcQcDpZyx3ziY1fnGVkUUdni1gWLko93PL1miQ"
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
