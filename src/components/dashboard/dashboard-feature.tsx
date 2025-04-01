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
    "2SyV2pH8Rkpe82m4DkDfdSeXg1FcC5T2dTgQkGt8MUFn3LNTpeJN5SGJ6W6VSDvPXR2c5gZA2dUcgvJiPHqjBTPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGwrxSXT1YcGvB6axpSR2kRwBnRRuEiHQBAnhCxs9JnudaoXu3k58DpWiVzSHxzkMSBg96WJC6j1bEYinq1REJR",
  "key1": "42FHz14jgiUvAE6dXMruP5Fc1fzGSNVUgkA7LfPQUoU6mkzYRiHwMjPAKk5fdhtpjDrTQS6vjAqG8FkVBiPybRyc",
  "key2": "28n67iTWAC5dZ7TPNPCNdsnu9uJ6B3jBkA5Q8dPHCimi3bCHd4PqTX6dtw2Z9WoQ6LQYn4wFGBFrvBhUapfGRVPZ",
  "key3": "htCw6RPgULMSbSaEpwoDULTUAw2KAsSPH72q2vr6SCDEGmW3TkHg91PbxkJbATZpJJuKxArKgKGLpDAfy3FiFP1",
  "key4": "8uTAssnw8Pu18GMJHtyzuBDrbMoLfKtndTHSzr3qLrAoQQNV71MvfKSd3j5mDaZH1zo5cE6s2cghg5TDtw9rcZ3",
  "key5": "3N1X1bGJG1BtsUs6aE6RM165SePUBixiRCEE6p8a42sfsFnDskSZdrR6Smv5Bx1twRezvkRt4uxeb4gpdvme5Kt6",
  "key6": "2iBMgRDHCdfa6XQvWjNn9hRZJnPaCdhXK371HHsgPp7hWRekXsDrgL6xp9U23WT4LU5B5LrsKFNzLjvg8CupeyKE",
  "key7": "4uNYTnXouiiUwSK4afhY7YTCDYe4uzHLsxqgWgzKiJK5juVGxTjrczeiUr4J9CSugVrsiecMMahftfCvGSGoFSCr",
  "key8": "5kVw5ugfis7pLVFx7TDmyUTeMyBw3k4VfWtKnBKM7wiBctjBXo5nN7s5Xok934s2PDuEDPrhF9D6FfLhHQcEuajn",
  "key9": "4fpyNzXTT6MuFVS4XrmrXXCDRpKHvMeNjuV3MWgruJdkbxGfcneELr6WbzRqK5Yjz2MsnL7psdjNitYFBdg4FM9B",
  "key10": "46Y5e1sJxvHGB8hGZD42kEPqhbg5Qp9FEbASLrT38kgZKzXAdTbSwMsgh2LwJQ6HG7jAnxBXNySXFakesXpgmJC7",
  "key11": "vEia9jm4MpYxNyZawZ7T4AeABFe97qZ5Ls3RNmjQyBEcYgHQfy6RFgyzgY2MBpnBDk1so56zrayZW1bLhmznr7t",
  "key12": "4fRYfUJH6UQ4dysQnreCro8jC731nVqMjR9uuiSUBzRuA9tvJhK5zt6y186fRQsyu4gUkNytxxwRmv4kKCkX3kdj",
  "key13": "2V5nJw6sWytC7XqZ3j8QMqSgc2QY8JmdLE6caqga6PxRpJsBns4skaNVW5tfYuCLbpQv4Y2A6nLazt7YGqeWxUbg",
  "key14": "2i3vLeTJu7eotBDyWwDfDkHRUv7nZDe3TKtVCAESY7GmRCZg1zdGpRzArbDnt3FBzypgyMSz1TvY3zLywbfrWazb",
  "key15": "43EBZCtNJNyF1rFA3ovdZS8D54CtHYc1mzbuocmZjrp1wg4zrK1UMLcK981hY8swLif7G7J25YHw4ggXAhiQM16F",
  "key16": "3snsWDW15dEdFu26tM4Cvh4gUyRVbewdSkMEJaRV85R75mWdkLpiMnJfzbFWAZ19vi4qpaCrNr7HHKY84u2qAu5N",
  "key17": "27j9GrZneFreY6hen4cu6LRGk1WGqxrDDjHMVwnCY9FtcVhihwb6BvN94drFVyXw9NfFLxA6CWBSa1XYrFfZq7D2",
  "key18": "2qWvv16bTc9YuxKyLbyNYbJwwXopEJRXiwRRgut6yUUtuiqiy4tq2MCWQeHetq7P7woW2dXsPCb3uCN8U9N9Uqgn",
  "key19": "dah6FR58RnPMYs2QmhsGDjNtpqzCoxXN36Wmy47BtWmjQHhhaTUADG7qG2z1Pckp19LewsTeZ3MUiAst8YL6UnD",
  "key20": "wf4nS5RwKjp9Jr1dmqhk9dJHaJvsgCoNHnTbSXk6aaeUExJgkCx4pAhi5F1tLQbbdragxc7M4reh9NCvzNjBz2K",
  "key21": "2akEWLp5TWZtVMF6Lh5YwVmDrwx5m6TuLJY5nANUF2k2S5YSQaGSWNNWswu681fCWNiivGjr8xQH7i5kaEEXXAxu",
  "key22": "3AsSE117af58iDxVHC8Q4ditxF17TeQodcjPdoXP7DR2SXwpPVaWSqz463xx3aF6jacfdHnTejCJaeKkuyWfo1kV",
  "key23": "4hPuZXi9ZwHUmpzz1gBzf4niTTxJU6TYUjpDp6iXbLFfAqtfqTfBrTM4ed4e5S8ifSMjN8itbVRcrQt18EAomofa",
  "key24": "2tUb31rGp8VJ7JyKELBwxMMFZyf2VuJEG9HSETq7Kxc79XMZYygxmQ8Emeeye7Sa6cFhCcVDrADsCtZyKjrtfayP",
  "key25": "5XuntCE4gxHrh5FQTmXoFeQfAi8VpQVJKPQdaQBM5X1uGU5Sus2QGQmbfT5U5QMf91zCvyjft6mDELjhcfKMUdUM",
  "key26": "67gkmUbQt1NAxUiGiMDHUThtjrCZFG1QoYa6WWuT1o3a59ib3S7PYxdcCEFuRg4i3bSgkN1uehSxpthqWZz4Rrgr",
  "key27": "65Y8jiYZSrm3H6bsDmMg18Z88tkM4NxZ1RBNTERy2M4iNeetBhe6mNuf3vsHeax5dJqY5p3wVeUh2aH6Ko55KAet",
  "key28": "4VcAzrf9d1AT7E4y3xG916fdYv1B1U27NstNA7eABJrLygQiDx1rD6QsT9Ra6w1WUtdwVm8SugUQo39gZoGJ11MZ",
  "key29": "4mR739u7FiJXWQZmK49iwJVsAJ6Tuh6tRazNzCUNusxT1cxPLjatTjQ8hvTu2eoZCmpi4j5vA6xVdu1ijjxq94Qz",
  "key30": "3F7NgpsA4quLjwEJE2ypqdJfpreRRZwDnExY9PbNnAPawKd2XsgQrdQYhcCv9u6z63cYeQBqFXdq5LoBST1N1qEo",
  "key31": "2fbVz65GFhU33PUdedNwmrb4PvBXfaRZNwShRyrTD37WD4JJct7jyHkwaHSbsD5p6GxSxFHhFJ2H4ahwLLgPgdrw"
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
