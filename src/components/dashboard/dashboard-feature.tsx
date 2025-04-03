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
    "4stMjzAWfYxmKsCn8dJ9K19KaZv86RbERq3G4HHqEwXaUTvvB9rTZpEUyKJwTnEQpuKzmvXH8chAupN5zwZMSLXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52gXx2gGZxhQx8sc3zMWcxBxJhmfB9d5BmPMHkas2Nzby2VVxM47Z9nAN6CRKXScgHNzgj5u8ncn192ommXUjRGD",
  "key1": "4uHVhQna8rcZ3qrd2cu7cUomnYZS5ZRHGYMxxa514CRms2CfUiLGXet7VYqQX3ZEDciUTrKcx8x799agxQqWjYLY",
  "key2": "3Qd8XRBKmQvM6gTkNXdmn6fhNVjE3RnccAbX4nNswTL79hSwfN5n291UTD9z8zQ1fknzpLvHTvfSrBgjgEuew7aG",
  "key3": "4LPyuAkGWBydmNwXmixkcXtQDsG1vCmzAyMcYBbaQQQQCLMxcWpwLN1MrB3b2omoyu2SSbteX5MLGdzFQo8wkwB1",
  "key4": "2XxM2RgQKDMYSK6ivmy2wX2yf3Mn6ZpEiqGz5Q1eMgS9oszQowVswjfMWMcmddpFEeXra6hUTL1FhBkDbfSD8DX5",
  "key5": "Q4hmdV4JJqFqdghWzJhwwSDMyiQrJ5bXhaUkzwQpbDD5yLPqgAmv38k6KjBgAwW1AdQVtGN2KekLn6d2Xhf1S5z",
  "key6": "cSTTC1r2zUmoz214wbYnkXmRjjjK82uUqxNotxDhYf3fsEegmQcSYdNLvy9Tmmo25HYGbNpfLhpYch4qk5HAVwz",
  "key7": "2QduLmxycT6VJFKe4bKoZMtvZi4AXrYBmYQjHeJGHNy3g33uF6XGnLHqPUeybnhhCdbMfaLDjJcf9E7Za1hoVCbE",
  "key8": "4iYVwKe4XakXY8PsTBj8eMp7yNpidqKzom3rQuZtRcTaSiogDMpePKZw6dvm6QpmkhPy21A4DZNH91uaF8g2aReu",
  "key9": "5pMfxjfk3qPaNhvxCM34jcZvorkm6R5nagH21c81Nbf7iHdrrjTUJFZURXUWikq3FaP1PPGDJnpbExVjdJbP5bzM",
  "key10": "4zxdG2CdDPdd2sVwc4Sa5ALRioVzaHwfDffKNYhfMCEFpAS76S6Mt4FwJU7Xf9furb1FhjysrESV1nWCURWzBfz5",
  "key11": "4gNqYY8onLZ7QX2zbc9Un3MDvp7HNmtFKsFS7gGDauHgf5NBrLWPUSJkLFspgnwQHxQNNhcoJehb6GCf2zux2Lc4",
  "key12": "2ggyMM9mm4HRZZBYbGkPF2TYWrPDPBbMgQeBE4AYW8UNhP1zfPyxNiuT8ESwFT9CAyppxCTpMvy2YWxxjxfiuWSG",
  "key13": "2g2LpcW5CbqUTr6uk1nMfbJK9ycktssgX7TP5qAjbt5K6NGF8eYfXWdutUDkDBuq8xDjdGm5rDx6b4FxamXitBBy",
  "key14": "4zA8qMwxrvMxXamho5yoyyfot3X9CBcCRJcQ7JtALZR3gZGrs9F3aV6Rw5pSwh3n3rFSN7K22RZqS96E99hfw1JY",
  "key15": "4jjK4PqoVLgoeH1ySVQpczR3Hv37id8dcvmt33v8tJjLPfgvYfX1PpGSVbCS6rmUPtrWaRgeqx32HwfFiUmTXPLY",
  "key16": "5hCXCCEJeAo1UhWK5Lh3DsSbrpuwcTMbrkWiQwz7u8iiqqtN8ADdcfik5ce7NPE2ygTdT9z4Zma5D7DpfkcyZW51",
  "key17": "5r4seinddob82VjWV3C9kqY2TKWduMW6uqU4s9AA36KHMgBwkBLcFY9tyoDUZuZp7MLrWwzfXRfjwMAaY3fnyfLf",
  "key18": "5r1j3F8Cv8q6E5nShbSQSXcBdTaibd2SJMCTNuLzmiUFHuPLdSJDEmJT9F7zVNP3JGUWt72Rwi7YwufNUmzwJHde",
  "key19": "2QaGvLVtqk5kDoqsNwnKryCXuhFdwsUFZRSNER3eEsNJWtVCQo1hxHBZr3nrfCzwHqudZcGeAaNYQ1hSGQ6wfm75",
  "key20": "2yPBnYgCpjZBCgpviSbpwcBGJuUdfjToZP2FpxtFDL6qN2C2h2bzekgVbNZTCmdjMP4UZRcWk2uUM6a5FJcFFubr",
  "key21": "N1J58Ns1H4FyJ836KDa63oCERBgwb5pzjinYAFohp2YNmeR5c5mMR6KLDxFyXPqnKFEiHtoenzCtqxShEAzsbEY",
  "key22": "2LCpasZmnnyKcYkKQGUb23PhP9ZELqAATEmsNvhdgMDQ7d3CPbHoZTrufaWLEtXixpka4W8tmGpjyPozLvXREUXg",
  "key23": "HWGP8Tnvhdt1onHJAc1q1KN6chZGW2MU7ncCNPTJ9JfiW4tXrtn6Jxkw8UgGU22cp1t52rvMQ4Xr56T3VNKNxNx",
  "key24": "Q8rCtkUfFB2aAq4zH6kFNmxipVrys6q446tgFeUL6qvd8NT37D8AX7Vr8GipA4h6yw7BowkGkNh4ibW6Uy3qSs7",
  "key25": "2zzgdsZdJieZqzzf5kmJTi15wjXSphzoJNbgYFpJ86FQnpzhEXDnFxYq8Z6SdvJfCz3n9CDhNYJiopHC4S88i9Um",
  "key26": "3opMp8BdWcCscN7xCQJ43qR5RmEXieLRCtAzGgxECtfpekVYWH3JrEStQ1NK4kP5Vmz93LmZ7ijM4WAieXQtGirL",
  "key27": "4p2AhzoEV6ynZZ2yFAj8FJGbXQLQTAt5Pudx319rdrp4F6F4A2K5VUbhUp2jt3idiSodKnc4NRS5SL2K4tgaewoB",
  "key28": "5aihwBHnAWN48h5ZQWhKDX8v1NB8G4D7gAZ4Qq5DHVVff3iiTi9aRgXH8DpdHWZpAUo2reo79nPrcBdTHmq12nim",
  "key29": "3xEE3hegrxvsBn3km8n7RuLqaybTphFEmmbTQPitzDyiKEj9T9y5b1JrjHibWnLjN2fnBMfcTDzdrRfWTTCo713H"
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
