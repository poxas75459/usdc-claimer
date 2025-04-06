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
    "5k8cyAKFsv1bC1EgH6d7nNbvPaAkEQGzjUrCJVwz5Nyz2PH5PJJHRRJf7jF5PZyDkodVs8aQvbDBcnpZEheGwVBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431kFbxkb2qurr3TuoFEfvyfH4vbTK4Y6cwrV7e1HN8qSH3nSts3GQVykxUBvUPGGaXFQ5HngY5imyQN9LUfNQ4f",
  "key1": "BDJCrtX9XQGguzwdQjyX7irNKzcxDK5gsU2SPRBQdFqLahYJrXFxSoA2Gwrxwr9CWMczyzQpWvVUCgW9B8pZWKE",
  "key2": "a3vS45AHrGsFMQHVzp2ZjBN22rKEV3qEDXt2QFP7FXx4ygVDsQYoy3jJvBkw4wDdaW3RRPLqfA4f5nNTq5CK878",
  "key3": "5gD9vhRZwT7wcMLoaqL2kF97teAT7epQd5hRVqfUsEsKt84e942NbuCvXNJG58SY9jUJzxjTTFvdPuxAYWpcTCoA",
  "key4": "5Yeb2H6VN4pWDyEc6ikNdD85uYZvgfDD45fV2sSB9h4SfAQxq1CkVRhFKd1PqWaNWJiYxarzw65xqTTHrxfDfpcc",
  "key5": "3sjPg7jSyqczDg2JwLopuHmpJEjPfoHgDegFH9m56d38sAU26jTvGcfDntUSwRZECj45huTFvXrYY6icgK2ZdQmx",
  "key6": "2dE7qjeoqt3DaCmVEPhyo9cPvRqXMfKxz88XWP9shkNFL3U4ZBzdhWvdD4NCNK6VDY8qtg5gQ6y37LnGAkUfzd6X",
  "key7": "3FbbAWMA4xNNzPfpAX6ifxzi4VSFXGRnYs8GtL4YnBWUjBkdCBkTJDxQn3nNeeTNUr8WRPX7eEbkACZHycgSH8DE",
  "key8": "9McJ2P7znrLp9QzV3WPsNgBnSH1CouLLFPQjtrYUinv38cTg6xyv3cJmszfcdX4azKxJxFFNdMA6skosoahJui5",
  "key9": "64vZ7xASAFcbVAh7TU2Qxi6W9ASR7AdNQmTPEtgTrVMG8YW5RRsMD2YhNhmB6eTSV64Q6G4KK3kCeC4851ovwn4V",
  "key10": "ZUfyzuQHSycftbJiBKnPsnkEPMCGbfwaWybMRtXfamz4xtVtqqnJsJJycGQ5PjLYZdGcWdXpHf1iteSzx7dDdM7",
  "key11": "2EifKJbQfbycz8uNwz9pKNncU8BymRUYDa19gnPNUZUDwKQMuiPDigNE9ackaUqfxcpsCwu9BNpkEcq8NJJki4Cc",
  "key12": "xVufPrAhuYCXE3SLXKd95TR1nxyg9UASpdvm64WHQjjLbLUifpZRjef1kfkreJpijakCcLMdYVMcXt6vyawqCpd",
  "key13": "2qh7qsDZjjSZywdTXQAPF51TzefAgMFyQjHESN8DhFexTPXJSEKU93P2kEGFjrYA7z547LHLWBtD8d6z7tHb82SJ",
  "key14": "4SXhcJwiLreTZECS2Vv44xdVPB8S1fKezZ7ETxNPKTnLnKRkHjPwPLRWWcUicQSbiBbbmtCWi4tk4LAtBpGxMWoU",
  "key15": "bqVZfShAJCr1FpoRBSYK636rqhunrs3SinHyQN5EtSMGE8sNmy8VAjiEAHsR5z7QEvkiYQ8SfKQ6FLnAd7WLHjt",
  "key16": "i6Kr9yGbh4MCcxCik95enVcSngG2YvmsVTj186F9zwKmY9y5XpgStXWR57MtNiYLQdPbhsaMh52nugKtseWAV1Y",
  "key17": "4hsSKcsLr16RvSAAe22pfJYMQq2kidrQP2SKi9ZKETqzzGn6ktzLfLQGRAFYCd1eg46fbJFTkYupWpmKS2EthyGZ",
  "key18": "2G1ak1QsEDBQKYcSE6vkftzJ3vVpTd9i4Ke17cNazKUycTDAa7oiAbUkESFc26KZXj9dvE9uegkEj8UeMX1Zn9Hq",
  "key19": "XQNkQhTJYCd4Uc6LqcUzuQ7ycu2vkL9gQgVjHrycLb66QpBfmLXAXiHW1ejijusQFgVcoiBmxith3vYtxsjA6rQ",
  "key20": "83DAnBrpXJXL7DkJmEioy6e7iTfBb1ZQHYt1hMthf8ViAJD9yK5PLBYyLphNYnihch2JhSSA5ST8b1u2XfPap2y",
  "key21": "3bfjt4aZcJtU5TCqRt7QgYALCLv2SPGSLm7QrA8ownxmuDFvnpoZqCVVBobCwqA1MfhUCKa1SaizMo6PHbwaTzMN",
  "key22": "3u23UWVfF9Fv23BoQzWLLx6JGbnxx8U7D49frD8Tdd2W8MXV3LEuCbpmDFRQPKcNYAZTuHemfEzq7ATpmXTvZFYK",
  "key23": "3aPK3pN61rJ6d2rSFiAhBSjH2ZFK1t6b7uoATsTFmBuGr2WGcyajmix3WPdcgHCh5cLx3YbU4Yx8dEn9JD2zqd1W",
  "key24": "25WWTd6VNPSFfXbJXxokdBmNvWT2gDZdfgbf8VuTcan2fPeX1DgS1GkXDcMTcZTVPk1GYoCLFgjDdQqqXhwW5nbY"
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
