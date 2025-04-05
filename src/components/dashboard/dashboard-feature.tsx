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
    "5PDELV9rVpFZnopDVM7PiDijFZvVpdveG8E2Z2e6BGoLihiW95iiJ4MfJzUXfF1zirMtDQd9SuGB7WyTKhgGsqMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTG6GBWk5HRCQpReFyYxBn97uXQ7k1Vubm3fijRbPVfuqLvwYq3rWQzhUUTNFiYXknRGDU17RxYoZ5Ka2LKQ2zT",
  "key1": "2xYKcQfmZtsmCV46yvgE91fUtir49tJuxZMUrzMwZnZ7WBBMTRMsxLpBi2jCnDEB6x1EQMGYx5ugpAyebV4j4Vhw",
  "key2": "4TgYBEUqj84ERiX96QYWeFZuY8NTQLkF6kFNrw5uQsQRt5wkcVAd43A8DFNkACSCr4fMQUM4daWyPvizyBJF3UVE",
  "key3": "vb12WrBAknsZQLThvEPxPH47KeL9BcL1zgpyW34mKrU5XB8JdTvr7r2zrAD7abimT8n9XAsDFMZz2YYsghuEtkv",
  "key4": "3T6KNo5hZDcHvR5Q2xSJxzV7VLtGpAPQfgEFTnDbVh38v6JMk7XG8jd34jBZ9mmUuKYAx5DfDDPAjVFtuznwLkiy",
  "key5": "3kBobVpcL26SwacczMUUejGtqdQjHNKBQxKmLTwR2t7oW1yfMDDZaGGFSDT8j6Wh3mxW2Yq5WTZRbmj82WwP8LbG",
  "key6": "4BBqXwuhW5X1sN9e93L5V7C82tnJ1voKHqFeBgmHzNFm5cLrmGdms9iRGkiD8sBZpWCC6yKaeASQXXiddkNNBo1t",
  "key7": "5knbNbwe2pJQnJ9VFd6UvAkGatHxH6doN6VM6ufPJsqa86xB4mQSocNvpSg2AZikaosPT5nLVey3aip6SBtddjxe",
  "key8": "d4HtXE49Pw8TkTsSCFydHTZbpeDGMKinKfnBuSjT8VNkvzKGse8drBQWwHWEJmdxa6H2n82aWtsSGyw1YAHH3jD",
  "key9": "58oqaxaxJrgt3CDR9LovPmJkH63DYWMwoSWnBsK6pimA3FasDJLRJnz3or4EdsyHcKh9GBgA6NSF6LM9XQuiJvdL",
  "key10": "2zWruT8bWocSfNdDzzUvVQ5Y2U5HaaM5MJoWu17eCgprV8aaC5ZpVfTWf7tEkBbUq3ZiQKEUyDFygp2HJ89GKPr8",
  "key11": "rY2kn3MAERTWYGVEjiSssvykJ8iDH9UuQN43WuraMkbtQ3jbkBnJw2kKRB15L2FiKvjRphej2c5oS4ocC1kHzFv",
  "key12": "2PXpebR66Wuty93nnJoH4ubG7SWvNkpbog26Tr7q1NzfKQJMRcnZKdQccNRoUZ4NxxwYXafYizYnWZ42Z9pykZ3f",
  "key13": "5SiH8Djk8oriBwDNEV8ye9SFP2ihymKAWfBZiPc2vrN9J9ajTg1QVYY1Q35YWLVdKAa3UnmWof3kyXCgrhXwkf3",
  "key14": "3WPifkWJwUN6SsSpwrYp1GC99yLYRvc4mBZSaYzDVYhMFuT5MgkuyYgN6KQMFFrFWW47zWsybHb22ST641yErEbr",
  "key15": "3Fhq6tW1zhzT8jHVsTxym5YMDnUCWLhhkoCAg9KKr6f79RoUTNhvEjCqfXPar7e25sCraGc2GLUy2DsKtWAAUcaF",
  "key16": "5o46inFUDRk8aEQJPGAhUt5x3qU8URb9zbQSinWPA1ZubD61xVhqTqi22b8vakqo6dN31y9kSd9udNuVkePDdtS1",
  "key17": "4iDPvWkfoVXjFGVEV1DaG4QLSYBzHTQvGwkxRQjRZRvmmH5TESx9UTj3MwMCKUVcH21RwuyqPUpnUEixyQNAdhWC",
  "key18": "2r36Lt9FvgPr58aRe32jcMo3FLBSC17KEjZZe5qwuDmvC9dNH3qAjWxW8boprTmEbaxGp5phKJ52wk5pLvv4V1ij",
  "key19": "2JUtMEwwYgRQorWhwMoNnohy7Yk1iU2a9ceXBbKhsAwGZnsJ3cUrErvEDvYrsHMwdntJWkFxGQKsQqMhfWAuKKBg",
  "key20": "5y81YRtieBgUuVWfhqtBJyk4pLRMh5DrC5gZQphTesNPPTfbgi78763S28mjjYae8TcZ319dRVKJ5kWe5AByDrA",
  "key21": "5D6tSPLaaccu24x25dvXvvahwUXvTcNUtF9txT873YHFYVGx4FLp5u9TpMLvd8RnJKv1k8u8AnMzqQ8brStNZhmu",
  "key22": "3yq68BRiDhbrQvXvZDqDuBown3idP8FKX7CZT4KAbK7q6yehbqLJUSDbwx3Dj8DkPmh5VRT6Mts2o6FEuFxpgZQF",
  "key23": "2mS2F11Pf4XCjdp4j7inMkELT1QgaqcZXYf5dFWfXQ8RhPQJd4J7t8Nk7DTa9NLZok75Adrm5Di3oxn9rn1yvhEz",
  "key24": "4zbkJt7jmYhgXnzJhWjyuSfnzrh9Hzh3e3jZ6w9uRRjwDzW46c96uSTcawDfu2zy2DFeDWyCrcRy91HsCZzEbuok",
  "key25": "3xwtNo3NyPRGytXQ7J1K1H32B6TVDq74hPwTqV4jFtEQs9F55VCZVpRWHsnzDWrLwCT9y4f8MyRPHfj2AR1pGTvE",
  "key26": "5v2t8SjmC6g19iPnxqnvXyDaVRf4ux2HLsUwzEFL3N3Xm1GxegbqeTbvW7LcKnZgLDqgewxKHTrJ4xfQkpDLC27M",
  "key27": "4Ny4Esomi1Ddo1HfBwHgWaSR4XkQk82HD1tCeQ7vAeSVUhPW8aKaAZV2vGpF8XBHuT31tSq8rmcZrJS6TJqTXV6G",
  "key28": "44av2KhweJ53GfJSKd5XPk1y1ENwuVTQiWSNGdAKsguSadDfpujCrBDTmEspCMF8EwR4h3r3nLSw3jGcTppoE7cU",
  "key29": "ZXNsK1DG6gkwTUEBsjuZfwSTfydDdiCR4DvZLN4q13TWRFD7YmRTxvWA9RF6GuphQmHyEicPSdg9pA8LqBrPUe2",
  "key30": "jPMCfY1qjdsVZjhJXTWF7QXyN9L6vfnZdBoqHcAseCDev9FtGe5gn8uBGpRxB7aTZ3Ych8wzG8LCkgZbpDN1Kpp",
  "key31": "3BDyiFHr6wjzcERfLGC4cwqKaVikpfAjY97R7yCNNfoxum52JL8aTSpqgFxhi2cGRyeAzd19HhyXEGrAoQssfWiZ",
  "key32": "oCYEPzzFk4dcw48TTMqNTAo2m9Zdq9DzzxggdEgbyQ46Q9PLNu7dPbPEDZHxht6gcXZk5ptqoHAkSf44N7PgxFP",
  "key33": "52f4ZofQTPh3o1krJ4e1B1aTQe59mBtYRR42q5LM7dEPBwwwgPFEFJxXQW3NZZdZfvCJqCHEBBSK6oY8SWZQzQTA",
  "key34": "5XHg9ZXaedy4Ee4xZ1B7eKTKVitisjhLetRVWnHabMQ7jET6sxVmnKzkWgLwTBerCHimBWRqyoRQ5VhW3nqbS241",
  "key35": "6yWfGnJu5hmxahpckjksVWGKS9zuvy9bbKNzAUg5V68fbMo3Ky6UPq4kA9fj15cB96cKu2n9F5NTqvZpr3Cug3b"
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
