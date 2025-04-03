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
    "5pjvUanRNxEpQ2Nh8vYsSxUAJYChy1Hp3jkpFGWLiJS5VbfK8yqC3yM18WzYyr5Lj3HKF67LN7agGjqqfquSgbxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWjUWhQCXhdWB8vRE7wtxEVF3KNYT1W1wBBjEqqdUaeepbZxBJXfwanqnLrLSB2Jibmi9GEQFwdXDqm5zSA1Z3r",
  "key1": "5RqtWkP3LFtuSiRR1cZCL5V9KTTcPNMCKEqye2DDEspHjZWfDfm7yX1QoP5xCuiW9BLSZcDoAb4pFmfLjbUJSQWs",
  "key2": "rofUsxkS8tuvLynW8kLX7iXU9cWSZAwDFM5WfJnVKsTrPDN2Hx6xpdtPspqfjnndpuJSjU3MboAsKX3VBBUNXNM",
  "key3": "3Qv4CUcNqT1iAqT2r9SGgaAhPG9eq4XBS1PRu2dXZKXLX4pqPv7EB6XLQDEdWWKqPJ6h9eZjKC8HWHjDrnFXasxa",
  "key4": "5tmGSFd7Kvq5pU8GafPCFxpxqNAn9Hfxa7YtaFbZogYRoZx6kNofXpQj3agZzwqYM3cAh9DwHddp1SRRzuRYK9LF",
  "key5": "5xXaXzupBKrs9Q9SFgSwjeyRre1W8nBWvwWxRW9qJyvXcSSWs6YdAEQFLp9yvmYesRBzB3QFMZodq8SKGJtaT2q4",
  "key6": "2v1btkPtE6u8kpMYwR7xnwCGHKfasJnpv1mpLwy4JJePcFkY38xoNW4vtM4ejnN589LdnADXqEHHczUsCTnzDsBm",
  "key7": "hKiMZLPHGkFf5CdMCER8rq3TtjaaAfgHJBy3vTuftWpuN7gJ8C67UQURVjK1A9jAbBtEG2pPoxJqz5zq8ce7msf",
  "key8": "5UAxhsqPkjSza7gzr6XoMxNdssd3DmCsbL5HmSgJyJNLhQSt8pyBRwqZf3nGmoNTwzho3CN2B76DcM4zp3c9to67",
  "key9": "BHNvUwxG8hWvwJEiZcPZdKThuH5JkRWzSPkjPYG7pKqVrPkHnd8BofHK7WF9Q4UKLjF22UMV2hkMMjXbGMbZeTE",
  "key10": "5Hpi5emGEmXYM3dhx4u2uFMy1zucLRfrdiHMpTeh1xxUR2Ge3h8VepaFKanNfryWAdndo1mjuJky4EQ3sTXMP9o",
  "key11": "41aewjdJmfmh6bc5mw82bsCK3MWZF8KD61dYEYDk1AF8mYL5Kyg117WBsQctZmVd9vRu6XK5P1AcRTJuVJgRJz4u",
  "key12": "5mZBGpJ7eaNH913ocvpmwcmtGVNM5eVfGETQraX4JVPq1T8X9MdeR43pdDmmUp9juxCjsXw6Gf5CKZXojab4Ma9s",
  "key13": "3V1dqXoo1BFTRksLmrKpd8nQbifVUhuKQQQiAsT8D6KFBQn9fPRSFre9AkwoFYLzUYxG9SNnKmgUBALPpqtvSEza",
  "key14": "49Z5zUGmyw3vjHhC7gAcWMRrF9s888UbDDBsqng1uwaiH2rg77JcYMAq6XmE8P3v1vT1KYRuDzGD3JsQeSkibCcV",
  "key15": "2dt5bduK5Hia4UjcuMRpWgpn3ne7V7owWz7zT1RaHmnnnN56KPXoXvy9sVJDNCo2GswLqbYqzsGMCybyK7U3NeUx",
  "key16": "2MDskYQL1zfQkrWwJUGVfyuc1rg2EbJ5XABUYyhiqpQdxeSQmP8ryvYv4DZdpxbUatRgshmVU2uAjp7CqAELVQ3f",
  "key17": "33TecbgcCQZFt2i7cv27zHEmVEueE4QsRSqShXqqfcLyTqppnDtJWjvyRCJqhvZGTWoUTxth7NuwFKLbu4vgJS23",
  "key18": "3ewerQy6kB11VztdqPCmsju6yLLekSybqRSe1nEYXXju1Uup3vNuaSjmxSP1n1k6xLS5qYrcNVxacu9b4XVvBMq3",
  "key19": "4GFDHrL2dy4qXfGphNFWrCZQB1swi46ma4UipMTTT2JmqUtTpCiJiVoZc7bf5ijnJNnN9g9NAxq5JiLxCDuYUsDB",
  "key20": "4Fm5SuK4cM4TFT73wHgyjtPCqdjYD9SfDvgYkyGuNAeLgNNVLWEibS9P242rkFtKydXiu8ivyjoibA2hcXRgfcaZ",
  "key21": "42zbeMJjJcww9vFpvXnwQuorzPCpvgPp64BMijyXusmeCwfRSmJ8wEDoFo4bfSMtCAP3mjbHFoonTvkCpNRWAb8b",
  "key22": "4qPxvoRJU2tfn5mrMdkbGgL8CXwYMpM3Ln9xNfDA6QjME5jyyvj27rv9efLVHrLTraK6Sir6rgzYg4Qfm6LpjRmA",
  "key23": "B6DrZk1UtNRGZ7tAYWh7CFWxT82i5cTsNLjQWYKqgzy8jcSJijNGgS2XapmrpnYDYCDZstnmaYorpgsJGa4JMpk",
  "key24": "5ZnqhZfrB4gr4GLuJVCPjBHF9Exax4M1hVMBbtKrYUsg7phgN8gF45eAgMoTGr9mdEdqP5irh4HjEec6ykaWHcJy",
  "key25": "3KFxtg1NCf1maVzC9rckdum6r3fKvTnUqW7yBR7XQ3zevvg3ZabgNhugH2rW2b4sYKGeGqPkP9GgicWwehGswUq7",
  "key26": "64qnTZENYsnx7wyQosXBxvAaokLMrig7W7eTQJwMKoUinWvEzL2fVPhVN6mZYg1LwvRe9QDBndQExf6njcr6EsGt",
  "key27": "63GCNrTqHnGQvK7hqfrsdWT9hLDq6pxVWRJVQACrPxU8S7QoyCmSWHozU29cxTcHCueDUVrV84kzer13NaQ9GTQU",
  "key28": "4ewZEM4c6yykVaQHnusomqtJq7JX39N86MdYow83bHcBSGf6DP6kMvMQA378dgGYGbfvnDDh5h3xAQU14i3BmLue",
  "key29": "2L346Mh95fZapXPEbtP5iivfiEKs7Vz8cEHVXBDFrGofCFeqaTq5Q5pHS3hdVW61VAUKF2hzUuezxi3etnx29QYh"
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
