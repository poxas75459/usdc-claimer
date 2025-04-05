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
    "xskhKG3uX14ZBCCcsTym7VhNqSRDnZb9UkiqhtBsugV4MukcaWrBqUnDJNMcZ7Xxaq2trFeZXNkCxt3PTX6Ccnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VRZPBo3zda9uykaoRt13NvDHjfp1Zf7AhRYuvHLGtgBcpqdZ9AtC4omWffLUBbarQVgL9Wn7Tdz1tmVXQkh5eJ",
  "key1": "4bCvqUntZ4kWWQBKKYbpZbjecU3MEYsVBuQhwQMBNinJHSLtJPbj6mQnicnESwUADjb8RaX9FREjrFTERWQWbE8s",
  "key2": "2CoiGbNgfsSKc64owkphjFTq9WNb1bCcmUDjDaT47cLf1eD7N8565tVjGsf93KQBhYnw6oagVmGbZgQHNWwmRnpi",
  "key3": "46xpxiFcxqRdZYf9icSnjfio4TLX9zXJmsaYotbsCY5nCV2LrtNNX5x1Fh3bKUajxCHN5UEgLHiA5JmYFe79nhhg",
  "key4": "2MyFr1b5ZjPHXS8byHHKRcLD9b1cSvuXd4vBxcCTV5VftovRqDUny9jyLRL9dh7hjymTGpiPPwGVVZQPzh2T6s4j",
  "key5": "4nRBMVqC5L9YR6odmm3uedTEznBTEpBd2jZSUo89D6GSJ3CxdaEmvZGCviw6xeNpdfpk7Aair4rnyZmiYWJy8W3c",
  "key6": "4m1F365dmjnF6qDs14p7tHootQprA5CtVx7Ba1nqG1VbnxQR1jJnuUog22d4Y8fu3s3Fd7v1BkafY7Y9TKSzydpe",
  "key7": "5ZmusnjLhyNnnBXUYwR6zbRmraGzsUsDdZsunzZ8gATBawTCX5oZ1fQvBYQNsgnkJSXDxvXrWRGD8LJk9FPgf1FG",
  "key8": "5S73rYqzK2gyxyhzXESREHGvS5Cf7F5ncoH7MpsvhdFEgHw8TtdPDNfjULnC5UJ378AXsiiFdnpxRyMnyaroTeVw",
  "key9": "SxjFrnK46tWwcmnsicnLg9bsrSek7HkWkA2nLmQYtkVewEG1Bm2yjCfG4aC3q6dkSwVjzoPgo7rTuHWzDJiJ3yh",
  "key10": "5KfqzHwVwWi3bZ9nRNvCGpc1Ndixm4eXBDe9LGk4Bh9n45umgDBfSv54Jo8xPrBCZGpFkcYS3nhBn4QPMgNqtBdQ",
  "key11": "36xaRnVtAbQogzABodqUeYE4hLsXSvXMVRuSW7UUN4jp5xEB4oJfxkadv7dvCzcVYNUqxj5PADyGHV5k7eGkr3ye",
  "key12": "3xJn7GSPpR3y6PZa5eoY52tdJG8Q12BSKztjHy1JrWwEf9V92EXXWijP43GzVKEkXW2xTCGzcd7qEzsvG2HRVUoc",
  "key13": "2Fep271J41AJL4xZbKAyNLkVruogG2tfiooP2RPkhrYirm4FY3KQJhkMbsKTDehkaifRNXAgsxopvUDc8r5h3beY",
  "key14": "4uRG8tTiiHSReunAGEyMnwgPXRWMX8iNZbQwVDxYi9XS7ijiUT2XzKcxNvfijtHwaP2H2118aDVA3VAktD2gUqsJ",
  "key15": "4HnaYbE2KF1Xkf2Std8SUVBi4A5R2o1VdVsWhSHKWoKSW5CyKJz39WFPVMUXf7a65jyweH11PLBjmtsJNH6BVnRB",
  "key16": "2SopWW8oW3Z5waXyNdjP7kDkTiBREGb58UD4ccpr9VaW4JtYkKMUeW8nWnEdKeiwG5NJeqh5k9TkLnLoLiYsJm6C",
  "key17": "2HAv74TUH12Sj88t5R1EHDcJvvwk8D3sZ46LuPs4x6hrbi1mVKB9q6HpDyxGiboFtxFfSR4VRMR4QpoVKmDk9JBW",
  "key18": "52YgHishiVWEA2E4QArfq9e1DiRMhxEmfduqD8mgrTvkoX3ZAJ1ddpg13Q3FS5WJxZzrW4CUC1j7F8fEi53emYXT",
  "key19": "3AMH4bSjvpoyNYc3FG5zr7tKiVZ4bkRFVzEsnXSVN1SdSuUeCRUwSpmUyis4QHHFn3hqTUbu2VmYDgXDS7jiFiYn",
  "key20": "65QwRw7v5fhuw6YWyVrPxGgT4WCS5jWKYJNPuRZtAy1sgga8hjFYiqqwe4x7LLRFxWubeAaf4aBt5f6JBnd18kxc",
  "key21": "2nMBBg8CiYUyzTsvNd1ZMRgxFyqkQh4hkwnfhoa5prrwnWJQkXYpvCCr3MJbkkrXebtMoK2jJh3123DHh4B5EpSr",
  "key22": "2VstFWHuARdwVS3sezS4aRAkaPGVTYygTYgaNM3PBcUP5tDLy5o89ysmxsd8GhZ4VPwgjzgd7MXMBprFYNmAP3FG",
  "key23": "5Yf8xHsZddxQg876QMRUFZNKnXmLA8LhFYeQknPKmvjN7hvBJVEtQfhWPjaTz4zWaWAK17WneXNFSa3wQG8kzsFU",
  "key24": "4p9f7rB6Wcqjen4DR7aKKbkzG6WQkfyurzb9ceAv5KcYP7Ji4BnLyw2P6qm9TZWa4qLuGGZAg5e76FMu1kYZu4QX",
  "key25": "5XYjqUp8M2XSMVsY2obEViksX8Bks5myx8LLwcFCtLH4uy6pBZA1NWyJozuemY2uqdyJSXVaz3hENhGHCY8TMWKx",
  "key26": "4Q8UnsK4pPFP9PV3fGXRN3auFYLMU2VUUQ298aAqDCHQkvxEnxEuNfaanxtM2oEabHMPuUCecfydwdp4YxejvsMW",
  "key27": "2MrnU43K5WtMD1gGb8C7SbBdxeb3WDUkGExwsw6j8sHyNDZVsWcMxvM8neUcdh4iFLNMhoDxsrGsZ6BRYaqLmvTs",
  "key28": "2YFLuxa4jcm9iEvKxRNjPUzZjcKPTMDKSeSBR7HVgeBaQnoKpyDzAtkGEBgZMrWCNF6wMg2EzufeedEBBbqDjjbG",
  "key29": "3skEW1V6cRae18pX6rS5dKQt6gbfV47TyoUa3wa19JxkyjRC8FuX4PwakQBh9KzTaQ7vv5CmgjXXWMfTQ2pRtnwJ",
  "key30": "3r6SZ7cAJQ2MeUroPG5JchwBkg8KPsXFhtjsS4z2HSov89ntnTxUDHHCtLLC4dGd74J4fySMd9pidWLHrK93Uev1",
  "key31": "obUd1XTL767xmxHbc4VCoJn1gw4ejYnqd2efu8737TapDjscqppdcj3W8zPG7ngCFpMLuKmzSkU3FR5naivC4vh"
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
