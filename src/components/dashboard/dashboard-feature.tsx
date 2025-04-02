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
    "C6E25uLewutotyEtDZG8AYdMxpFHXudR7Cm29kQYe8PvKknhDdVDHNvynDsUDdEYFngEgHw8joA3EKguyQR8Vcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35z9rferSbmRvEKKGBkH2w3y41PxQrY5zHqoBTooz2KV8igxj6wRgXPpn4BVNnHSy8TKQKYbQK3rLkjVH2KpKajo",
  "key1": "4Sx9vkmwyPGqsBLv39oKtNbRm8UY2TZrMzzbjgFq8axzJwogoRHqGngLqtoDGohMwQbPB5YT9rF7W7adCuoK61W2",
  "key2": "3sNg7sNMU1o57RJNNwCDkRddV3prr1cGBTM7KSM6og1jgx7WgsEFRTV4wBxT6RgLgnvFzEdfMyW1pDsvU2FLvyho",
  "key3": "47JS6htHa2rs6TWn65Z6XtPhHkcDUx38Hf7SYVZi1u3nHhGEzy5Fds7WpcG9VVMUNVHf3gwnfYr3HKTLaZKdeGM7",
  "key4": "SYGaTyA3SbeJwLhNc17cdP1Bwy4tFpW44JNCdqzEL1TN3i3poUVh9ehEd1qZueqczLgKoPWR3zgcWmCmEZT4Ktz",
  "key5": "35g8Md8MwTrRm9qccSd9157ZTMNdpc22NLWCttsbYUbKosVnm64tNWoaRyjV5eKTmtQQeG86ADQVJM9WMX1FTS2H",
  "key6": "63g93dqjGn9GAnnqDj5EZ1j3tMR6MzBzE2hba9XLpLaNNe8bUjvAKikVKgJGgRFdBu2AJqh2yQjueLRyUQVf8hgT",
  "key7": "4uRfUbzXry2PxBEuYkES7x669omWejPMCrCLiHzEdAt4zhXyvm6nGqBLqxBpUBihwy8MFGo4ePRr4PwVEeWJHHda",
  "key8": "7Tf8Mjkg3rErkRviSNBAYvpvwfbej4MwEc6SswdNwhniXJBhHHvawD7wzXxT8mwotfrgXxMBgzwt4CbrpUtoHQh",
  "key9": "EnNT6Qm6oWrbrbcF43TnX1i1ygvmNDYZh7HzZG5iVLYUKhVFkKRjVsmRDN9gvtMyTScv6LESEaDkRrh5yVMp5h7",
  "key10": "3GVaMWbb2PkUPzNm9USmGEfzv72Kqm5wacNCXzA8qktwRhym6yK5h3pU8cqhpwNDPMZx4pD2B6UKwAMzwGUAwe4x",
  "key11": "4hd99JJiXmjKM3LJTSvPvF5rGn6pSDehmqHeeGYk8ywdVq9GiF19ZnJRBscv8NyCR67itE3ubNM3y5RwMv58FwUk",
  "key12": "3bXpFJ1NKDKFpe89uBvWqAd8hYe3QwWWB888ikcd72qVY9NDwCkhqYEiBKGaGrK8gJ7qY6qtXHMhLvrXmCvSerW1",
  "key13": "2oxWtNyvspPGoy7Nmwtdnn9gCzeYQw8YgbBSzbkheHF7kvAVxBypd1d42UjqJgy9XPTFMFy9J8eNLMNGqY8jskWM",
  "key14": "3Se1maz6oVdh4fpoUXgnEQvotNjCWM6nr2AKtTy29dqz7FF5AjEupr8bNhamE3FdisSCR4GPbdD3SS2qiNV4pEJu",
  "key15": "3CMrWLTXwqjnEwuRh8VnMkSegKzYtSEGSNbjatQ2srWbMbQRG4gTTjh7UEfzYo81ob2yWR5G19mBkzpKZeV7F6aX",
  "key16": "67UkpUUExFShoBgx2QMGbuGKofnf3ZZhYqAn9XLf3t57GhQdEhzN4Fi79td8Rc4WDq8QA3wk6fJv8m4pM3nGRZ9S",
  "key17": "3oKqZW3j2kPT4EtYvr4GdY29xpjRgnLoF7xyMriAfwtCXtBCg1JniUN8svG8WDHTMmwEqgKDyhPnPWS8sFCbCdj2",
  "key18": "27uVQrzweKa4pspQzMYYKtReNQ3PCwKkzHdpXnsnvTNX1zgpEWdqKv9acDsAGwyKj9NuKJMFiG94UH1wZ4MS4DUd",
  "key19": "2W7zYDRseeFGSKbiVjEvxJipbNobc5vEVG2rLiCvaVvwVehqResV4ar7mNs5QLSPyhnbrGDnxghKiCmNLPo9P3r6",
  "key20": "Mc7HkQoW11MMPFYkA7Ni4AvNRHG12Vd67CSLEtizNkXE4AHrfQzJkcEFzUZEXp6x62ZXGDqFvXd8C4fqbYShvTM",
  "key21": "45JgiTqXKtxJn9eNngy7iStao5Ex1uW3wkiSFUCc3pAPAcZYGFCHJFQThTrgLzKPHvLrRemHLxCHjMiE15DM73KU",
  "key22": "t6ppw4dRa6W2QttkhCUBBnZqrqnmKfdNHMMy2Ab3GKUATtLQ6bTJ9PkagvP6Z5ro1jMK2KvuBDDR1CXgbQfjGP6",
  "key23": "2UMK3kQxBV9zaTAn2SRBALemtUvu9TzPFK55y4jokXmSGF6nQayCovActzWtChWE2vyGoCqT1MpEFSNGGWSMavP6",
  "key24": "4VWHKMWoz2y5WLXaQMg4q8Nn8i2xftZHXGiwRu1CLLZ1mw3oMDjuvqyS9mGpXoDDu8uepwU9kcyQzHMmBTEsnBRW"
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
