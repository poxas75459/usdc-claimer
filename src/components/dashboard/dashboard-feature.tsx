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
    "2U2Cv7qN9G5vH9Bcz98V35egwxdKL1tx8qE2jeLYAGfQdZqFAajfNCatXnH6pRVstkuqCBCtxL7xVfs21zfW41BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fE5HUoqjsF4oG1jjZUvdofs15LpotsYHN6qvpvG6HhMQXeci5AtieSzr1s6SPLEhBoecZMk5pYczWVzwuneQKYG",
  "key1": "3YkhvQGbtQD1nttvo1cy5EmffyT4b9xpQ5wKobTZ2YUjb735NcKRmcJQwjkowxPiU1ETtFQb6vzscs5vE4W5scRg",
  "key2": "3bjeGFH3ed8ZxPbnyz7CfnDJ5qBrjc4Rw3KzFfsk1U8bGaZN8e63eNCfY2MLrFazShyZdS4hDsvpSiLQomtxZziq",
  "key3": "5sNPbDR1EByaoNwSfG4XjgvDMPwfcqhVspszJP9bDCDuURmw2an5nDtBsm9n9bSjD6uC2dNG8NZ1vDyiKmwr5CQk",
  "key4": "36PrAEvBs63sDNeA28EmW1j5qFMupmLLg4bfqo5WLYYv1mSHkRPVPEDEo39EFDVFD4S5tk9U79rofyodv5PbMJoo",
  "key5": "5HCR7cYjnXYASgbTVaxY7NBstBvNwMiyY7MmvxGEayoWNpEceETMyWSHzLrrziVfSi2q7vorHWqSpnG5fzywv87T",
  "key6": "5saPZFVwuvKKXHBts2jTYWWtXo5jPvxPzJ7SQTJVaagw8BVJL3KmgyW9AeGiKFkVmC73h8Zqr5y5XZhFHm5yVw34",
  "key7": "nL6ZH7K7rQN24X1c7GT1aNg3qtCQL3Ur4L3KwGfWU7vLhj8QbyD5y5SakJGrLwUX8dHCstGMV3yRZbpc4fibhdv",
  "key8": "5nEK7fgsHSzvrjthAJrYLid6LbLMBpZrEPDJYU2MfUTLZMDvAM6z3M4tNLpTLezNsH1C5yWsqPG9xizf4mvjQbWm",
  "key9": "2xbp5QDM2rFXb8qMqJgt2LaUKqw1L7HiDBCNrfSj2QL8h4vg2t1tZxrFibhGL6fMZTC6hXLEPdjTBE4EgXRAZQYQ",
  "key10": "mbKB7RtkA7D35wTSdLUDUHdG7iRfqnthNexkRjmGjcvwRDGJXDxuLcYHPoYeQJvA5LwzFjpdJXJ8HiLzu84c4d3",
  "key11": "6u1dbVcYRgMkm99e2ESjWZS8mNYk3qBioU4Pi56eVE8bie2M7bKewN1TneHsQ15iEfKZLZU6frNzdgkuk5KwS6e",
  "key12": "2CJ81uV4rS2XAWdabr17n5D6L7iFsQA4Ce6NH4zzNwrnxo2WgwCNixyJCin9wygyRyE6YLcCjByt2gPW6JWM5CUo",
  "key13": "2TkjHVm5r7H93BMEqEfWaSM222igX1inps7XhjVr2nANnWjJYvDC6zoYSh8eRUGZ8tKXupb1Hz3QwMTzSBsTqmP1",
  "key14": "38Am9HSDNsU4K6Ssxt8M5TkTe5dhAqedmxY2U9F283x8mmWQxmjwUDJCy3kEgi6KQ1DByH5dN8z8SZLPgWciohsW",
  "key15": "gqDWPHTjJxvKZd6rFjKgwg8XWSfmCyzhmmpjt9PWd9FKfLn4KxP8KCYd3GWZqtVgCLGNXPEk9bFshxoEXLvVikN",
  "key16": "24JbyN5LJE3mfxKrYF3DjLHUn4CV33a3dVx17HTjZWndMXc4ANgMTQAnkrg5amKDLkkcSS2fGMv8GEp6bM2T5z9z",
  "key17": "2RvsEnpjwq2jPtfyxokrFJbm8Zw2pVKQdDWTY864MUeBH1Q8hpXWPEUu9MVZCBETthj4HJEYEcyxCX1CuMVKEQDa",
  "key18": "51N26tfLC5fvesQQhriPqruhy3PCUVN5cDYeWm95PAhzkjpnL1FyUubdwwNbKjvwdmXUaVvCEDTubg2TsdER9XJ4",
  "key19": "4913pqCige9hYQb6M6x5GMWnNUbo2hG4mVRrEK9q4DikHdh77UgLcW8RGTJz7dUKQmur7XhA5no27ibXVhPz7CwC",
  "key20": "4VdxSgCBGm9xySv1fLn6SVdatvU1Me2ivtehbo4PTR7srZxy5EUfHxyidqWsY8PrXeUdtxQvJ5kmZjnpJZ4Dwa4U",
  "key21": "49ejeSS93GbwavhYc3LWak5FMWFjNbDMdkxSLzkNWfQ2B1KsZUrwM8edYFDnsYvoihyQsSuwpkWSwmzk9nhHt614",
  "key22": "4jj3uyRcNbUX5nSeQzhvCQwzVFfQeDfvBbsK1YEL2YaXvLerrCToeq3yywbRXSt7fMNZKvg7dB4yGJi7HSVx15no",
  "key23": "229gvtaT7t18158jiUQV1eJQchdnhv4Ej1u3JFNtPWMmSLmY4xyBP5hJV7igayUKCNVSoBhDKVucjAsuQz6q5wZz",
  "key24": "2d5pQiN75Hx2J7rSpXvJkbKT4GMpWnshYwxwsaRjvco4MCAHW8KxgbScAckwXBRmJqx2NEWyNMJbkuZPkL7HMaP5",
  "key25": "66enhtQnxpBjirmGBYeHQaC5CSxm8d2suysWHHPJsuax66rSRys2JFb4VRBC79hErhXJzTe2ohbb7GycrmRyBe12",
  "key26": "64VUeRioJYAGw7DkR5zrL5TvM3xeHkZStV4YtnUsG1CrJpzEjrs9SgkcogqGm8btoS2ZpRDx9CW8yujrfgjuyqh8",
  "key27": "5DkoVcBkkPpdFZceqeKDGwPUc9eKns6TGYoFa2gedFQMcBj9phSu3ZRuGm4mwxr8DhcEEEcK7G51cSLsBYvgR2B5",
  "key28": "RUcZSBxdEZJb8g17tN3JUWcwvKPzC6ZsWcWD2FN4zNZjucD4NFYDmM5kVNctKyc3GN3jFEFZva3cpzVETkaGFHe",
  "key29": "3vESFw2QkaKnjBnHR6qwQBT1A1uFYQP77mhHcWFbkz2se4YcTTg477fLxSnkLxRPNGzbdUozX47YjwKBGbjtNB9d",
  "key30": "3Hs7HCwdoJwAiQt2PqHamgvQaV8zgeEQjHixeRQw9HtSSNAX1xXFrGEa25B2LA5BqHwjrJw67zyHhwHKSv2Q9pno"
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
