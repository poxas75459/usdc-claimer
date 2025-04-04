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
    "2PptMhSuz3vYyBjVwg2TxtfBVAu7Xn9vTxeaj9u5AvjTPXLtjYJAzVvHqA699c1KRzBrc4HNttiTrFDzgDofVupE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5idcRdrsyQ7AZKaPHWkf1d4SuZv1pRW5wCDBUv2JE9bwUUTgbzoP2XgYCqgraVqV8CDb84xdeRydbkiMH61Mar5M",
  "key1": "5N8fG1hihnVTYBx8uY6AoJFCNNqE56NpFDogpv54SHPFzUPyk9mhiiuwEFsoe6jS9bvuMPPqq5wC8v1Frc86z3CY",
  "key2": "3CjnuMocXN5cK8wMDMwodbKjGk7E1qMbkAg8nGXGP4y81vmQMD8p2SYTMvSCoUKE2XpnHvV2NtbsTkxQ5rvXc6ES",
  "key3": "2suc6NfwKyR5QvaTp8V2QUuwe3HKPgfP7AsCPLUsGpkViNbqQaJVTjCX5WUCMXPU8KUWKJZyDKPgqNQVGg6n7EE1",
  "key4": "43FyA68r89PJ3AKvkfw8JV4vGWjJZCofWGTysLwjn2qNfuFL62T5Gd8EEd62NpPCBF1MCWS174fwAztpHLn4hav5",
  "key5": "51iBbnVzq6bhJotZLpd1mSpPcXrcmN9KAXSyq3Ts8zXB43sd6Tfe54FEHX31drdyKSwcTS8HsDsZQ5qnZmdhqty7",
  "key6": "5WyPgVMWfi5z3ahnCoN64RRnHotHBkrU7PBKiybPKhmPKTLRY9UgqXS5FcvVjjJkRA6RuM26SvXUP7EQv2jmeUqH",
  "key7": "34PrdBY7Lcop79g8VZGgWbnj8HSsiMLHHB2oJzRk1kBsreFHj5VMYtbS6YyXFqRF3pQcu9FQoJSsMgP8C1cHgEim",
  "key8": "58fMtCpjggtJnp8jzygDGA3BjQQi18bMXkSepJLfUmUwRPviRCCHVNommSM8uigjVJnjnL5jBcsCbbsWTKbeRfe5",
  "key9": "4PqmY131N49fNjgd2c52f8BcRLpTJJyAR98KgwEGWGeDhU4XGyCSMJuVyy8zaHG6de55tVjWXG7LCXmkgCntVczU",
  "key10": "5nVXcazvroK7BGv848S2qEiGBT8WrBjnS5VfkBKA4H4kGBvAWEBemHJVDGaVmptBnjfFecWLf94iRo9KfH1VKYjt",
  "key11": "4bi3BCVXhaJQK3mFdKfwC2vQZg8vhBx5aUDiqSNbxAHU7LcZ65tM8KBChSRjYSU8gUjHEKRM4E6YfzFmBfcE4RfQ",
  "key12": "4UNEuLc9C56y1Pea4AK4oAN62eK1AVW7B383jyv81Bwmr2QAhp9qgU63iwoYDtdSpKzife3nGNrGKn9rSruXfqcw",
  "key13": "22tmpVdKxsVg4EDv7L3nmrU9BMnFo9WhkKBXr92sTeyrrf5ohYWq7zf5BMU9ynkMR49CWmd7aXvoU1UPkJGzr2T2",
  "key14": "3ShCsxbXhCbEUveaFLgDDeq8tY4PQNzh7LwkNRwF1ZpJkovYsPAuefgwd8v3FctCpucJnsuvDmW5M7ipCtuTWngy",
  "key15": "3F7GQMVZvwpJSCe9BjiHEMs3YqqHENykmvmVxAwRH1BkL1MpV63MfcqAycmn5yy7bwaD5BxH6t9ouH6cYHfA32xH",
  "key16": "4rgV8GxykFX2Hdfo39DNrXD6Wv2E8VZtMHEdCchgApcqePART3abdtKCbuDDX2reC1Yt2jaAxHdwjEpXaSe7dpM1",
  "key17": "63BreFTx2Y3aY5ih9zyk34Pi6h48HFJaD3gs7V8dxTbFUPcdHkEA4XiFExKPKiGNN5onLPPAeTWf5nYzgHTGhQ3i",
  "key18": "51dMQqZEzGbViNfUPq8ScfUzPwf7qCV5fyScbH4WTRrf8GiB5ZuBWBM6aMFgHUXHbrRqbDD7ScKpXVhH1tiKjNtv",
  "key19": "3cZNYq8xFjUF6QqMss3YMk6cykVTTNESX6D9je9UBuaupi4acUvPKDGzUSP5CNMi9JoMDgfiSFNcfYoP2i3tVxcg",
  "key20": "4rJRadREn2cD5XEfbPh51LUq5vEXdu3R7ScFVbYLe6MJrGHtPxqVDD5jetWTXJP7GYS58FtC1jypxtRruSA2Q17m",
  "key21": "3Un71q2gzFiRA4oxAHDaLzVrTdPDLiXsaCjR8yfCSjQvtvWnAeF2trXk61aaERWXWvnpBByJw2pkewn2FeuJbN2F",
  "key22": "4z7Dof5o1AMeMDrqH6MceNGvHQHPgD2KD5bHq9isapdJCpwBinHhTJ2CPPX2HV4Ys4fGGHiPQNrUN2Ba8z1dHft6",
  "key23": "oDaC8M9pj74YfnZe9musHYK4Kgtx6dkqq26xfwor6R82PocVWtBDZ4hx3mJ3AoDcMeSbeVFrt24bphqeV2g1Sd5",
  "key24": "5f2CqWuu1bR3JHED7UiW2XatLGQHcVt7KMg5szjioMpdgNcjGsboHAyLHKSoeTcYKjv6dYc3tEwMvLHCwCAn1YnU",
  "key25": "5Ft9C6VnP25LpJC7KVoFaUudcRZXMEQLCeYqMEyvdn6TBtp8vTDEjVaZZBTMn1qEPZDeKwYAnBwiA3Cu44AED2Q8",
  "key26": "4HPocDe6V8bucyVnrjQShZZx6yCjjjQjCd5LqWUJrPrnxQAM5VonXGYQytjfwDDv2o4qTuVkUqHDcb59KRADRJLR",
  "key27": "4ji1xig5dFRPw8FSvzMqMK3E33SWy1zsMYEQitdp7gZLi1GQPe1Wfbu6YrNNPDdNmDxNacZr4XPiJyQAiywuT3ys",
  "key28": "dMUi1xrr4JjYsXLXQ8HnAiZr4Hq6PepVBhAC9AZDC3i1QW3XY3ZvYoePf9MzbJJLg3FFqw7UtqsLrhs28QKSsot",
  "key29": "34awnXX2H4mmA1ihdLimTJb3gEVa9C49s7KkH84Yc3e1xz32sAky7MfR8WzoYni3kWowT4FEaYYrR4eXqFYBHiC5",
  "key30": "t1zZxVE9eDoxFSBujywL5fTmMyYwYdVeagdaozkZxiSURnXFU3MHnC9sp5t7LEGdE4eaw1CE9tk4HR4fg2wu6e1",
  "key31": "454abpnTQFBp821QPnFZ1kwJiA1XYJARGvq2Kv9gPyPztYdcVFRNtXVePFsPFTXQw1nEKz5fow4CjDW8y1QxyGF8"
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
