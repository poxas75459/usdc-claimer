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
    "2nJM4akoCCkizeiwkomqnWiCFZvuqqgDbRq5onbkVJfGXTBHfoGy7hVKog1Vqun6dhjhxzTyRymWgj3quoc3kseJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCFG1WwAoNnrq37JXvCPKui9743Jy9ZkApoirkQaCoNAqcq1PemynpZP1rAiysriTGCtnDEsipALh9mBsE2znmm",
  "key1": "3i7AKznaDfdxxvJ3WfWBLDByp4WacYn4cTMgh8jt3y2BLqjhdTVwCCUhvC5p3qm6YKjbCYRxEtprJSjjC3PbjWEC",
  "key2": "27qWVBS8WrYycCL7LU5fBPDKC2DRg7sz5mjRshSN8Y7mi67vAQbYnxxreScMfLFJzTYNRkqLCTwevwGWE5MHg8qv",
  "key3": "YxPwCwGjXkks1ZAYhsmLSrgi6KP4Xfiuj6nH5K4sWs4bogfsG89hL5bL9cVbqzKJdr5oi4NJGu7QAsPmr6GqX1K",
  "key4": "38ktbigDB3DWto1krEPj9uVoJRv1bmcuEFwW4H5d9RfkGpCj4yPgBuPF1cDrWwXEA2JcYALW9TgiWLeiy2JWjuMJ",
  "key5": "3Q8KGD4JBGSSmrHSc4NKT396NFvQ8FbW3asiHvGK7gSqyC1eHgYSdnrdk7HXrL31TTt1SLbACRJu8GLxomBJ6Tsn",
  "key6": "4BCdWxeJKVo337Jfn3xK9dE5YU8k2cHLSsf7jyvLwyUKesvBpcVmTKdX51PMaZgbm2TaFZZrgGrKPQoat8ASB21B",
  "key7": "4xTLjZFXJvpnndTYVpj9cJbsxV5QBbMNwkCDP5nTVUu1Ed2qq14TEvC8zDT4M2A6Z6roqMfEo9yZgA6qXPdcRTp1",
  "key8": "347jfeV2yN7xWeipdWbhrx9UsdnDni7tErxkpHdAYQg9z5rbrmuShofJDKYspxezsRxFX2Moja2CJYw1aKRMcYT4",
  "key9": "4HTx778JTD8gHpMxMCaYuAZiTGZfHaELiHoW5BkY38UbVoxAXqfLYQfHH1vVFeCZcbtRzeDeR3Hy9pVWTsVFo9UL",
  "key10": "5fH7e7kHkf1y4WCVJLkvh8WDkWwcEXajQa36xfkftgS955uPfPdY9TptM6crdb3ppeALAr8AnWrdHQQ1BUopEUiN",
  "key11": "5LypKSwmqyH8vx7Cw7HXE9TZw24daar35QJKqpKVz6CyKas9jjL1iDwgy2JZH47VSbkyiK55wZdAz8kx5K6AYpmb",
  "key12": "4BvrdS4kBjRg6XUQatZhPtugJDSAXRhrBPQrRM7CEadpBQ9LdDaNLS5XwHc9h8PS5XYD7gJvmXb6nZEBJu3PVMjv",
  "key13": "MjtCP5J6V5tWtBkXoAKujyXitsRiTyrd32xMxa26JrNoaTgwk423TgERRc3uDtkA2kg5Mz6GqkYtoe27qnkhGpL",
  "key14": "2sZUSNcAtJdgDxhzVToPCceQdK4ncqivfrvN6k3fvk5MGgr7X6uD2zCAitBBVH2Xzv3zAzwGwZf4YYuNQU2WDWKn",
  "key15": "FuNJugYuoJ2U5cBnpHvancDm3b14q4nRXQNmyD1oDwXMYANLiaFrP8cwZpZsicdNTkZSR9HPuqP5St4qpbznw7D",
  "key16": "2pGJpSyVkoABdT7rdoyXWfnZWngx1XUDCyT2gpYohxM88Q75rSN1ucohupYSe3QWLqAWvjdUs8GjSJAcwM2azLbw",
  "key17": "5vR672Cc4ez3iUxiTzNabW9tu5waXEvCGXhz4bsdTBG8jR5yepRrEncW3VkoJ76Hb8z3g1mCpoZP2oi7UJZyqxP",
  "key18": "2bD19n8XdsRvfzVqU63F1KHPdzqa3yxpk12rpBAFsGUH5a9KV7m9tg7SLpiaFQPzE7nR1M7yuLQAMrsc6B19W6fY",
  "key19": "2413XJZuZjQHxWTuiGoqaDku3egBj7bD3fw2CxsX63ge5o6CX7zDwC9xUvNc6wr3vCTwDEpjxEjCC3CE64JWCTfR",
  "key20": "46zsRcEfM5Cbix6z8ZnpJ4fPDRAMAqgoXMJJfVZdjGq9116DTHfJgMBEn7BCf3GSkkeBmCcCSeK3ognAm4oNeZyd",
  "key21": "5oRad4fXegGgSAtsRoXkzPiSx7gbx24WA9hDGZcVNntaaEhxdrGyK3rLS89sje5N3n8qH82amshTHQmFYQi6myXt",
  "key22": "4BseP7mXdaExJCsob3hz8ZdSyw3KxMybVuF8rakq8tSQTfLY5YQBw6YBEmjqqC9M8od9qMvnafzZUtk5peEDDtGV",
  "key23": "4G8zznRSgmSGRKKUr9FLZCw3y8p29BVswHNFbH1iGFmRpnTHSho6biVBqHr5HCvowUuAgQBK6F4hvNHKtKeAb12N",
  "key24": "4V7P4pag4yLhp7LxW953kZdFxJmMFsmDxXDh3EBGdDmxZnDfdeMxVZMHq7A8VT1T35eJLiKEJieSqhcFqT9Yd64d",
  "key25": "2j45Avu45XUKtrUSw6E6gUxmbfpmJV4WvH9eW7pzs5NQLxzCEK5gcii5taP7xajBz2VkJfZr6nXNUfVi5z9KXAxW",
  "key26": "265vHib535Qbg3BJVfbgDSyGPhDXcccdsTyCBdFMvi1iAG8gXyEGTwUduGgSMva6rhAzUT7wVLwVNkpZTwarqy9C",
  "key27": "6yZnLyo3f6LDnW9uLVsKYLZKCTDMTwsTYeWnCobFqowa1zdLZ8rMxR8ieVWgzCfXrBAmGv9dBJ5GEMvvYRGvEoy",
  "key28": "2sSu52CxDBwnDHhnAQ5k9Qt7j4PWaYdkYMeiMdGRtLSrSj9AMEnpmFv5reavKWie2geozJhJhif6Pe9oHKdP45i4"
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
