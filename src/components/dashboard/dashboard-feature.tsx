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
    "5Wz7v9gEsFvyupgucaKwyjEXsAo5Kw1xCdME5pDQcagk6iVrW7YxVEtPQ1hBarGNA3Q9tCzemD2i4dHiSThqtvA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wjwst1SrbeHihTm4hPR2xcubC2PLYVZfhmP2kpwasBcLLSSaMvjepKDo8TuxRSxBNMXYnP4JqHgjS42f9tf2my7",
  "key1": "5XXh1CpUDg49CbBWo8GYom2BJBbogqmcWckt3Gf9vyLwbaRduYMyMk7Gy2VsNHEgVorC15R8dLhPsP8FF9es7AwJ",
  "key2": "PYG38VgK4v6Xh2dTECgk1qgYYQqQ4Qx6jtD6eJcjwnZF3EaHrSZLhvqDbUwEA5SnjcvDHdszpsLvwAgykG8wfpK",
  "key3": "2Pac7n4Dqu9tWViS9aMqeLvLH9hZnZvjyAMzuDSTrSqFCsZNrXYBdTWrHVd4VLjUg89yurLz7KDLoWiVTFpW2o5X",
  "key4": "2BdicvZsgVrzEKoQuD17T6xiAXDnEsujsNdGERjUwVwPa8p2hZQ46S1ZQRrsvfhT63aEGfc6yRpNbzEPvqGt6cBM",
  "key5": "2k6RnHvC6CuWiXC9XYrmArHRXfFzfeGSUdrEWa7YJhc74Cdkhyh43jtn9vd3tBH19HgsvL7rLEobq884sJCNQsHu",
  "key6": "2J6HHtgAHuT8ERnLq66QDszJ9FdHMfiDbe39hYWiD9Rqme5hpQHd2AyYuh6UKjG1FudtdYT4HLqWUCXrKyY9ai4x",
  "key7": "322zK5dMGpcf3R6nepxSnZs7qQSUbwyHBgHeWZe5Vfphig7xzDtP8wajZ74TQB5sShr15tEg6xFzofhKCGh9qUTb",
  "key8": "3hmUK9tPpP7DsMrAERnpj7mwKSQVBZYZGdxUCQCqbR6Q95wjjqN21sTFFERtY5poymCi3ctmycdWoggf7F4Y3Uqr",
  "key9": "BCLka8NixanGWiuhdXRiNMm4XFDprYxcy2LS8hzqq3riJXAsuHKT9eQuNpi9PWThaUNb4S3B86F8Pg8KYmZAp2E",
  "key10": "3Eijsz7prpTJmahuJeA8qWqDbtcER1eBtBPNSA3ktLEKMDYwGQNFLVPYUC7oU9C4ZWw88ygTseP13QWVxNbwvpKT",
  "key11": "4eAzH5NXERmmPSTg4rRfpnVzoYZtsEqaBWTfZ1F31iJg5mFJ2zZkmqU5udLwg5tr2AeqCnuJXGY5kpAERuPFzeM6",
  "key12": "5vN8V4KLx4D4wh6kgoFrw5wpn5UiMk63ku7knikARwcaRUt2ZvE6jsVauy8JoWc5Dgdc74AmWyGyTwy1x6pDc8UD",
  "key13": "22CKhyAYhtJ4X7AbyTCibgjvyfaoj3ezeiVizxPVvun9xGHiqyHBw3HtDUQwoErKf2WnpJUxmnhjzQ8NNRuW9EVJ",
  "key14": "4YPY363cbV4dqbMhVa7deUC3RJ2sKS7yVvp8NJnVdbWC36Wg3JdCECRsmEUDoTmF2DQ3egXsxQ88Ui8ars54r4oK",
  "key15": "vGTrVGd7rgwgtcgMY4KBuYjQmiV4JN1SxbAJA6iwSepY3vCkZh99PZSnmUhuRs8diNX59CgKMoCk7jBrXXkJYpf",
  "key16": "4GeupaXyxhHX75z61WPqZiEVKtM3HQu5vA7wErpXkp3iELda8GwMLGKMeFUcU1HpJbeKhmfae2KoRMgLeihZJaX9",
  "key17": "2jypaTo8jJkBooHtB4bpprjNFt8QQLpPq3W3FvdNAUv5U8jJWJk8JKgSXK5C8YjKpoPX7yL3QPTb1YLsieWYQPJZ",
  "key18": "5q3ZkTRQNr8q1WbA1fifnBc8XnPUbZs4a2DPYA9YxkYagYtNNwBZAUJQRkMD7s8XZTMVN9yJ3wQ3ooq2Ra7b7Mup",
  "key19": "29xGMfrMrwfKP7aUnEyaFMCRhQ3cNKNHghc9GtKZes8t2YAaggRbkEeRf9ssab3UCtKWhw5A46Da8FFFXpiFCZNF",
  "key20": "qQV8YizbX4iFTrnuApW5mhYmDbid8GzYAs2DF4f6BS7B3yV9G69goiGsQWgfzV8BVgkpvo1b2DUvDYbisva4pEi",
  "key21": "5KQzFXuqepjBg4CLn8xibdatLTXate6UW5iCfu5Rz5FXLwfBhmsQ2xtbXPbHVR5bPvurHyaE72AA8k7s8VE1YhsW",
  "key22": "4jxWQzAZPeXxaumVEgs6LCQX9XJRGfAAuj2MivK3m3BuZZWNjS4rPr8hqWJiUZmkdd2ypbzQwRDoaBBNMDhpKGk3",
  "key23": "2NxhRBdZzhzQmKjKy3LFkYEp21M3W1Be6CPiiMGqwtM9SY2msVmKxpXxp4GRYBrCBUq7mAXVv6zV3VbJ6pefj4WJ",
  "key24": "5KRHD4QtM6fDn5aPBEZ8bTJbHk4NGNUkThv6UuoaVPqiypV64nR4c49th3A9gexmaDtqdPCBXqBvFDrByL3BRS2K",
  "key25": "45pHgXjzXEpgRoNMMfJ874yE5V9NkK8Uy5VhfnxmxkGvYBErKjvP745pphJDkaaqcHXgRyXa42uaATHy7SAgM3i3",
  "key26": "2MVmKkRqpfx7bxs3QYDJJin66PtB35TFG9yKTLYQtYbiWQUiaPeXcnbKjgiAmfQ8iofZ5VgwvZptz23arQuxG8GL",
  "key27": "4ceETeUEuGw6EaSoVnsQvERWdQ1uo9vGtEgMpK2BejLfoEFwnd1bXAhmQzL163kQndRfDv37tfEGzUR3vPCEH3nd",
  "key28": "48PT3Smc3dZmgvjQS7McZzg3gxEYDDjv5qawsqQs94YQFec1k9JGghvcdzKmERoCYQfaSsKwCNJ1Xe4ecthVZ3ni",
  "key29": "4z9mGDD4Weehz1zFBVQW3gF9YLwxjHWSwFJMLQ87r6h3FNx18i6TV1YXJtt3zYRCMY292KCGrPxvgaxsCed58rqS"
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
