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
    "vXv5mwpkecuHaCdHVCtULUPfGWnLuBLq2ULa32etfzbf7VDFpjKFKBnN37jWvfvXNh5VQMMCfygTQ2NeHMsFv8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqdPkndnrvVaStUfUd5wcWZ1M7UuGufLteTrJtEw57CGxhXmmPqCKRB6BQvPNxx5rLE1QHRM4x2rgjBEFUZpNtX",
  "key1": "2tyETSyv9DbXx9Sy7FT8GSD4smkSr9azf4FbhvymmoQnZKZ6Y7CXSN2cExtZpWRaRVhoLVrfgyfsXwX3dYxe3U15",
  "key2": "4R6LtCkNQvAJY82A36T8h5TvMGF3UCtRhrLfN6SgV3o5aSvtfQb38nHjXj6RguTkRr3Vz3H2JaPsfYmNUew7kbhG",
  "key3": "5uYjts98qkLLhLCe5fpidhRhTDNeYV7gNM2Vuo2WJzsvBd9UoaUfMJ71ZHZAXWSh2U1P9jmb3PTtBTKGP12Y8BNe",
  "key4": "4fv3fHqX2BQyXsHAE53Y1Szu2Yy25NK4vZrcihBaRLuv3eniGCdWcRmZSiWUm1U1C9LUEuVv1jePHtZ4gYgWkxLx",
  "key5": "2cXszsrxpoZfbqLrfkjYxFnDm1S4bsFnwZWJH71rMJgC5eZeM2qG2GVsXSLDaeLv1BPraDTZcHAr3cWQx2vMa98z",
  "key6": "5p6fp2jPzamMX97yq6Y7r9kRSdRHmBbmh5jqYMthem5NTegVhCMKetjJtrym17Vin6B5k9gB1UAri2AZ8RLPMaQz",
  "key7": "5TH4788dWxujJB3RZW5EWqhnuWCY8vqm8PGr2m7gjSBD1h1g68CYrP6H87YrEheNXvo6Aa7jkHqxdRTbUCoa3fZ5",
  "key8": "Jpr1iaXevezxv1ntN3P6PJ7QEZBehknBSMWVLqPnBfFB9HudyaPQ8XvDx8GeLChJH2ejVyDisA5AX7vE3fc54Rw",
  "key9": "3AZWSGLvxvdBQ8qE2daNjXiyPZyNWaHd1nGwkbTuSJVtmxv6m16pdB45fuQVRwj7NC2r7sr5dnLKyK415UzRPVQG",
  "key10": "AZ8CQa8kU13jgMF448kE5SATzHXZJBY8rHUUHdGPSgKjVX61mfNGv4qEmt59GJ8wPFCT3BhRCQVavF8PinWqJdN",
  "key11": "5Bk1cmooxwLNjJ8ktdEMhgnWpLXC4fh33BGoXe2TTWNYt98Cfuw1YHqPcQMKqdTVN6cLknM3PtYZFwPFjCN4RcBW",
  "key12": "4cbrty2KyFNqXo9pvnhUMtbkgsbRJD3HMqBZhHZi4qgTz1Hg8vDyBj731mD2MXzsN7qYC1YMuwo8js7Ns1KT5Azw",
  "key13": "2xX63M3qrVz9Z2y6ujpsiTMoT1LNNDTF7ZpkHCn9UiU4bMLxPNdTWfjrYnp3Spy7DJriPEMSa4Dj9qETr3RxxGvH",
  "key14": "3rbJP1XcnxPsydneMBCy7CLQhpN8XtAoJNd3sNmVLgsihrERhw3kMMWsw2QrFpT8uoP2LVm6f4EJTRJnJYH5eqrH",
  "key15": "3fqEnwWCN4xQc96MEBA5q9UbrbDaiY5JY9zYhHRUhkZfZAwdZt7nVfZLYzpqp9vuXQXyaHYqcdkYgsnRZL3VqJmE",
  "key16": "WbdJyqPX3LFncfhRfUtEgp1xbYJxcgq49fgCMqCWnJyviYdjXNfh6ua7pMtxAZF3vH8o8Pec4Y7cCWkh9pgu9Ac",
  "key17": "2pmU3Rxr9cUPNjtqwb3HTNi9uvm7KBiKvR8qNRCFX11P7YNd4A9x3t3cZyhdfYhdEQp9Kuuu957kra2SvEd7LLjF",
  "key18": "4Fi3wJxC7VVcujLhmewtMyBP7Dt66yHgr22JsuDcVCMHXCpM1wtacELXhY62x9h3gdJA98ovRCMJtkqL8HyFUPG7",
  "key19": "3deqK3buYXsyH1BXpKwo3UEgUoGasqYufPPo58FqS9kDCWTwU5iWdd17uyKTybK1wzyM2qRsgoroUvPjw2PLfqHs",
  "key20": "KjFYVLsgMDmXp1Arqwb7UkUzUsnT9WybdpHAf1twJQb8FKsraD4zpXFUuAJ68DQfiXb8z1JD2ZykDyJSSDXoXJY",
  "key21": "6wrb4akVeZDVaMWXqWyD6opESAWZFFQaaUPDZNv9DqXm1roXx5ZvkAgDJCYkdjwKuc7qoaZmud8D6gCddFB4gyi",
  "key22": "5JkFoFthjQAHwJHUY5WBZSbPX5Fm3y3GPwxoLzmbo6aucbi7qtFMJdRn95yaLNqPBt6cUSRSYrHipMyAkZ1kfvWV",
  "key23": "4Wpc8P3pgNSukY4p1mz4HVjVf4Q4WDe1cMw8gm9gVfg21iCETWEbdTWy6ai8N7Y4tp8eYbzfbtPqj4oeHGPphE8m",
  "key24": "5MHUtytomkAs1Az1V7EN85DcHzMEYjibV5jA2K4mj3ngAZnWXKoeQvKDvubcpng2bZxtcyMJ2WwVWDtjk5UKxFZ8",
  "key25": "4g1TGEnMEGMMd369KikhwhhveKmFuLzCSoL6YyoCPLjz7wemCLgAsY2gmx1bfozEEAHPpFajFPXyG3z7WDj3sCEi",
  "key26": "5hkcHnuj59KsmSjfawskos43mS2SmmzWMUUoNtHaPnW3aEcnRidg8WS9T8h5MYM4JDjsFXKfGpHPBhJzZx6hPVmL",
  "key27": "2hEKrnQ7zZuiMabjDAjiQ5d9ShgCfmgCQJLskLbnq2JzLy1xvaB5MF3PLg9qyCuTmV5WSwxdaR8i8QG5EEmUAB4d",
  "key28": "dZCPep2cdshtdSnELxDSYFiGFbwbevGG8UrsGMF5cJBrxA49FEEboqU9UhnQpkbLwTuwY8RS8Fwr7mLw6ScQctx",
  "key29": "4dVvU3WmVwABxZYqZmQ3AjbnN85fMRwyYpWXdFRSFHW59FkWXbLNXin2UkCDkg4QjBXqit4m61Q9JitjmcZartrS",
  "key30": "3RcPyAhRz6s2x2eA9dx2G52D39j2MGLgUaKjG1RdiKdYqrLemEBmXtsAEnod2AHfz4sopNJdp1XtepLgshMT2gba",
  "key31": "2ZutWfvSinVEkCdbUJ8VBeHvT67gfpKh4AQDzuESomjYPEBtfVbpF9KXhygUSvpLQn3GEdpwSfAhHfwNkf89NRZ4"
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
