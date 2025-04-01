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
    "hPhJPyqnuUWP6t2rWfS5WTxxALRc3BsWAdmpYb9LotJLsisHaCbbZSPXtK1ZaAHbKY5UfUnnUoUbgsQkoHTEzP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGwtB1AgvT5ATGRFBT527XFS7P1bxWK82qDHV85kG56eP3bapZ12Bwb27XVSVLbcdMbpxgM7ZiwBn4LgzXZ2AD2",
  "key1": "7viMg7jVydxLH5Hsf39rxpMhki2yiCGPwUkRZnQ8W9spn7XHgPbGo4tSbgckFW7r4qAsLRrZnWERH7pNxLoLMRh",
  "key2": "3tXGfXgS8FvYN68Kvu16paD6QDAMfvrz2EvdidJfVsH894NpFQGkXVvQvyRXgjhK4EkFGzy7yCetBNv8rBDfXhFa",
  "key3": "41oJrNMC6HuBcB9pznEv41Y8QYt5MADtqcmct3UENMhDjuCefV1hDUyum4abcDB5EQZhxyCoDhHngsbLKHLqdeMR",
  "key4": "46v2gW8tCWbrKyQPsoy5NB5QyULD4YhuuMu4V6B1iwGmJVjFcf3ZYBowDCX2g2YNUVzSNmAT78SkagdSVhTaVjKM",
  "key5": "3ZJ2CSePZgzoNmAyTHYbiJAJXsUxQhoLoCQqunbFitt1bu9ZsrGcaGX8e1kYHbZw9pu4dC2u3hwZXU4h4VxUfq5F",
  "key6": "3TfYrNAMMMzbzbkWhowcVaSyfpxqZQDWJ5d3185z7LYA5QEQ5MQSsWokdY4RL983Ete2j61FXg92nYCo4eXk1hd6",
  "key7": "2SErw2GDh4nFpPxS8JFu5toUPdnaDVLgWq4FTGofr8Mfd9zi79bzLyM8xEfr7tG2qDooiRLksR9jBsH6NekWfAWU",
  "key8": "2VWJLvbbHKvJh5vjs4sgWxbjfsqQ35AU5PKbteKp3AyLmwcMgtTnNyxAb3BW2hZ3TEKFgwqFtZtTkbgH1xWaRxuD",
  "key9": "51UH9gd7t398pSkZj9xxGZHeBska3P48pECNhih5Dp9UuhhipGWt4EFK59XpDWm9HrEsgMMPGH1atqXS8CbzGsk9",
  "key10": "qfP4mfvPxSJPA4KbqSwdsoiXYqVbbAvHhQ4UWSafzuH11bYH4ZZMJKk9HJhpk7E4bVEnfsjnjcv1MiYfKJy4tMn",
  "key11": "3XJmky1cWdD5yC4Bs28s78smpCdEPSSuZcqPDF9fvj6o3wCwCQU9yw77Qrrz7VsyawmkQcw25AC9F8ArYaah3y19",
  "key12": "5xVWQvnXEfPFDJ32uEevBwswa9abDzHU31u1Nnedns2huo5s8K5UkBzrQRFK7vhfWkso7i57GMfoNpgg8v4zL7AL",
  "key13": "21jZyx3wjciBjj2s6rVLep57KQBti4PjomCgdr8RL62GD5hJoSS5uzCsPU6Wzv44WbpzsZzkif7TPuavDNvg8fDv",
  "key14": "PPXaf7FJEhPkeDkJLYN4AcFVP6Z521ps9Dxm2CFpjQbhCzwJ1UDmXxfNrjjD6AdvZrZ6QD9zVyXKpptYwb1HSBh",
  "key15": "4K522h1TdfsjRfHQuyNfVWyWh6qRjHCuT5AuEP2uqG1HLtHJjARUdyUqpqCWfJxGLCDzEQDYQyoAtRFyfPknLMbr",
  "key16": "3qkMgKM5xf8HChdMwBUHqaLpAKA83TKN4rrAGrhQM88Hbn3zyYQCeMmTR9V5X3YF4UsJcpbaFNX2wTQwFBbCnvub",
  "key17": "4NDmn1uDNa6LQyUaEy6VzS1HtfVvPW5Zbn32M78VCb61nS9GY3EivLaZvuampc83Fu9VnFzSqY2CbSAcMXX59s3N",
  "key18": "3Gfb8VHbwnjKTX1muBeUx7PMdKXudiB1mZPULNQnPTXmFGvmqDaN72H3EdQ1Mb6YpVZGGZw7RAbsr5EBigSEosRC",
  "key19": "3dniocjaFdD1Laz7WjkvmQR7HxJiLn59iK6qcsGWGQJVJVnNa6HEMrMwALX1E7NGXvXfo2mderjyQfqPTc66kpDs",
  "key20": "4kG3WpFaK9LkBQmJfQJZeKnP9ZQhHWJWvzCPkpazemynZvs4zXQqrQ4Q8hhcAMTezgDW1HRy3wXcGx8vxBy773BV",
  "key21": "3KSvXHCkDmEAtqXYAWwsfekfSkwTh1LVEqs8j7JZ6Xwib9APpixhF6wEEsbKN2imKpsqh1RWPgpvJxT83ZscLoDG",
  "key22": "C6mBPCPEih9SA14Bkqsh2CcdEzVgQqhrGN1b3obf2617VbEgRWQ5tPGy8cSxbA8PRDB48H2hDEnCJfxxUy6o2ih",
  "key23": "4KyHqbqyzQUGjV1QFnM1APLEr7eUmsZ5FbbaXcYWGUUTwgHtGWcyojZnohSgEAtGuZ1xKj1FhG9bdx4xuHKrahVu",
  "key24": "3Gsf1PM4DrBStnmzEs1sd1bDzzHau99MVMDtouyNFWRejXG2gddVtFVXzUR6uRyE2cUtjpwL89C7tHFbs7RuwVEE",
  "key25": "SXwrNrvRjJT5W5s49MXyBpzZWw7s36iMbcf7iWtvbS85uFCzDKaRKmzKRnVQ27rMh86mmMxZKKuGoaGvYAq92tp",
  "key26": "5sdZV3LtzAXZe5rTmYyanyp9pf44KspwPCrDdLumYfv6Vgs6A81nAu4fqdTgJyb57EY4xmnNZMMj7Ej9Hko6zDzn",
  "key27": "wNN6RRpfAHLzcB6iVjxLkxtbUVBo3s9DgHWQsSzcFgiDML7nTDBFWSmk3ojt5UFhFVpkKitoTxPKgSu3Q8PoAFD",
  "key28": "5fRCCWC21SzreskhXRTB3P9aCxfz2sfM5hxj9xHe98mMfgiMbJgzbR38ZSGay7mwAVp4u3JV7dwqwV8bnLfZmaFQ",
  "key29": "2TUpTwtepMU3wMk7QTvj4xLkfxEYF9t6MBwY3YSYPxkMKw1ccyUgzKu5TrZxmRdkUxRDVHJsSH6fV1TTkPUhBV2U",
  "key30": "4yMUAdpopbPu2AHaxaBtq3Jmsb41PVwQMACcKCDnhvKHzffQUVy5auDjfRJeNfZuPzVYnZ2xZJjxck5NHxwRAKJF",
  "key31": "Fr9zG11R9ee6cYeNKabuQ8GsA6tgLbaDHqK5Sg6m4xEHDpykSwhXMgzfGgLHXvqWvUAV2gWeWsQUhfp1rvrxxrt",
  "key32": "5SWSKuhAVY5jigbzrrGJsGTsb9EgowEvhFUpzacZNS66Zzozt3LuScDAtFHnUQfp5NwR8hgTrmMbz6As86UrXEtP"
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
