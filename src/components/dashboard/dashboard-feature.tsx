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
    "5zFuJQ5D1VJjpT83vrfjMKhurRQU82cEQFWHaoDcFJfH6YRU6hoDBKRj4LzggqsdAvCcNFCNfA8etmvcr5JFk8hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujn5NwzcHa6J4cuGHrB6qWaLGxnkNeEfDq6bdFZHcJJPHn6oGjMxXdxfJyud6wmAt9cjCLkEcE3B6qK34vN32Ln",
  "key1": "5FFzy83U2n8EWcM4Uf9EW9hDvgWp8hvojcExYP4i29XfTYNoJYTDa1QvVTuhPsZDJUyCNezzq8uyd6uGiWEvGMuX",
  "key2": "3wgdqhzvayVrP9c8z9sBJ2mSfPMigUJvEKndQYCFNuJQq2eVrmACFoJkXoDAvgw9WLRCt5sHGH8jt7JPUjhNNc3x",
  "key3": "3kbQCrM3bDAT3azHxQeSK2rt9hfapXfeHiZaJFd9ev7D67bSunJtcyzTEBdhsxzu8xK7JbuM1AYdAABFZVbL7p6z",
  "key4": "3DUSoPFryn3KiY8NBFGVnXY9irhxPsWPMRihSUG3hpMApHgHoXJuHDv3NydDoZrVFp4A65PUBQi3R44ibmjqEFcw",
  "key5": "3wiHGeyQc6xhpaUHuD3Giw96gEL2jPRgCBP7aQYkLMgxq3MBHewbYTcGXhPQVqeP1NfnewdBRdH8N1444495d1yy",
  "key6": "K9hTLMoXyzFsjmgWSD23MVw56s15L8EWDsuEBvs62snXVfsfG8h9a25nCdZ8GkSbDQNgw4kD5myZfbQnu3fFM5o",
  "key7": "66p6QvcsPNioWsWojBCCD7BXvwy2Go5ZgeiWjZjeZfZQrQXCCoS1CLrsvqyDj783AGswBWNMnM8k1SDReyFry8oE",
  "key8": "2bwEq5SVXnGZiHiaX5R4dQnWT43gYEetQEMsjWrP9mFc1ZousHzUTrv1ggcB3qB44SZ5oLzJmiFutSAeNiKA6LtW",
  "key9": "3ZpYTG1tfWh1y4ixjcY1rFKHzKtUpRWejn93edZkQfiH48h32AF8W1zNWuTxmtL1g4SZuz7fhiNZZ7WHLiXcPMMo",
  "key10": "516hymjH7GnuXzgb39FdyxKMAzCm2zGH8XyKNmXyDjTGtg7PDPE9moyESb7zGWpropaqP4XUaPEGwcChgWZ5gKtk",
  "key11": "65x3bD21a4W239TxYs7LQwgsSpMRVxg6caG5shboZGffSiNwMQaZRntonUqpAGnYnAouZXuNfDYcxA5KKgryoqQj",
  "key12": "2LCqP5wyUoxps23mrDCTbh1hxA3fW7ahgRmfProYA3wCTVa9CXYDPiz5JaAzQedZAVQvLb7RPGw7pkUMLB1KAHQX",
  "key13": "2N3V14WQn6vD52K5pUkhQP6hsKwFnEUCzfvwPHd3vWEviYEwhewATGSuQ9X2TA4T3kpyXhTJh3Yi1Mmu5TXgQ2t8",
  "key14": "2vpAJAK9CgrfqVmkgTMFK7A3igmySu1WcdVTuBG3CgLVnxUe1tRhCEypboAxRXD4wuEpp8pMHGKXqBT9K2JMbCWR",
  "key15": "3HygN2YdQmarM6bgBRHPeYu5seX9oMcmBJ3NqB4YbjsRPaGJ6MiASmUeEmB7SCvqJRP6FTRYduyWfrwYm6qSMKuy",
  "key16": "HqQ5yntdhNkpBJu3Z3VvnWcs41JzWcrePwqYH5g9qTouXivscwrFZ6hxiqK172f6T5tSywS9XTKSp9GaiLhr4qe",
  "key17": "2x58Mau6pRt8Dm9rihhG6MQ1EeZ9nCkW5LyDp2NT7XVANaX8PM5A2VyseJJr4HAtjw7D8KJfvJ5zMiDhQVpA37bn",
  "key18": "4hafZtea53j9ttJYhGDk6j32gDCQPvFPUk12Ky3yMEKAq5fQTfHqV5rwLGZK6kP2cb5kYrHF7KEJcS9pnQJL4jJf",
  "key19": "2ebZevZPsU5omEbqGkFp17VWgzWQo1qjYmqE6zYkx98D7tsSAzFVuyF3QdB48YfvcdV21s9WEbiYUz8buuzabH8u",
  "key20": "2z1tinRti1HXJYAdETaj3yeMrVV9z1SdusczN5aeT74yzGPCddwYUKsgU9SUFiCEg5kFEd8B1HJr9fUHAzpwz7st",
  "key21": "3z98fXzdi4t6jxurhR2UPgcdXyoY5nAvTnwZNFgq1QEJagR73zhGqUrHgDrmvTDViuqxVhNnQcysdDc8e2q9G91t",
  "key22": "26z2PyyRNW3FQjNCjCA5bQaNP5ttiakGhdY5oudzKiv4MCNrhmAtsrsjbPybrCJNDXAbAXFGqzQSmEHSYJPvQayE",
  "key23": "gk4p5dV9V1fT6dZC2FeW3S7PETqres2kf2AjwmSsqFbmGnBUKJdLSSCppSYsgoscyAN5KHP6qRh8T7G8Xi7CW8D",
  "key24": "3k69GXVsJCJquzSY6t7vSh8xMvMDf9qVEQ1mV5BMfZ9533hY6hxXXBvcmRTFpFXmRm1uBDLuUwpViHQdQYbfACQH",
  "key25": "4xtDDQukcsJsKE5DeS9yJsg7WH4qkMTWJY3eLGF11RWUA7nqS4b5fdwYJaZZCxBgjpKDMjXRd9ovKLDzCVrjGfr9",
  "key26": "dUTonCLR8LNMSosXhJyxGTHM7APrSrjfzpScRdu72SCD9iXQM69MSTEZKT6bMxiMEAze456BtjXT5apuggio4kt",
  "key27": "3HjhjZcXpfBQ797oYFnFgrkLXAeHY7yzUoPjGBCuZBnKM4fakQ9zQM4x2vkRbkKD4PbyQjkKeP6hvsJs7jmcDAXy",
  "key28": "2emWJ3jESy2jKZXmiT4gtfJSCFM3ZKfKiGcUeb36XV79SfKyw5cepgYHxMKc7Q3MzpMP1BUBgSFCmDxJyfP6euSK",
  "key29": "5PCf8nBi8syoo259nFpgEdxfzCpFH9TXQm6fz2TVbmzBPSPycuK193mjjBCsVL3nDkNok77YZcPn6ipdzHu3whUG",
  "key30": "38RbhEwhHzUFJwD8LHaz8gM61ShUmd7DPTqdpULotEVvd5N4atSc5Z4NWYBwLVb4kFngM1Ert6kqc2FtcEue5sdZ",
  "key31": "23K8cJHyneNS9LSvNrFPVFymAu8DJC5cMhQDPqjxKo3KzyNcnt1uXzBpyav7rr4YfezxFcu5FPd6vNrgFnF5rtK6",
  "key32": "sHuDWEUgLw5Vehw4qn4ENMq1Cu4N51q6iVDbpXzncApChbWSDD8nKNghEcruToRB5P2kLdBK7nRYTXczQ1zjGXP",
  "key33": "a8FqHj81UxEEzwygBJ19pZBozBMVsSV5mGWVJJroZieNkjLLKh4truF7Ujg2rYErBaZJbDCjNx7Wa9NHfwQ96bc",
  "key34": "2DdfcedCm4g6x4QNiHqPkDaLQVYQSafgNouDzeS2wLwgd4bY15GWxbstPd7QQ7H3c9tBpNbCmJJ5rye3xTDtgALZ",
  "key35": "5A3zLhRngR7PQi3vtbpaiUqBfmVkSNgjdNLdsFNUK2KVZmgsYuyjstWrjVwAs2Mg5jkH3umET9CNdTSVb8fgz3p5",
  "key36": "55JTcy8Dp9HoFbs9D6vYh2ZQjwwjuXKXBak82r8YPkr5n1apgb3k1ms3pdPTVnBtMwwwvPGYkLfcAYkhEJ1TcEku",
  "key37": "2XwMR1rxnf9EaFycVcKeW4JDp4wqbweP2pDwDfkmnckrkZkCg2SeB513LVwSpiCxiLP9yrVTWtZAFgap6pWQxVWh",
  "key38": "SmxGucqtBnLtrDgN5nbicNc33cKmGzpgPRn75RAu2VSSNyauBCMTxXqTTiA7iTZNK75BVvF67gZtiBJn5WgombY"
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
