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
    "5erCcWkQye5cTArX4sVUWQf8hEKAmmSmyTYSNfCQxCAsUZF3H9PfCNVznv9jm97LWWhFjmEA1AX9jQiLE6orSBNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZmkoTX2N2hfkL8omngirBSbPMxk1J97fAEZ5hNsgWMFD7jLaLxXg7DQaPaxvLdmSburuW8C4Nzm629YFmjStm2",
  "key1": "56aVVFZrCtJLoQySUk5kPqYRxFDocZwpNFBMVB3azyppNxEjqJqe6W1HYPM2Vm5u5S7DGQThri64gkMNCp8oHoQe",
  "key2": "3rjzsp9X4CJSrQ12sPQAr538sXfRJrc14LB9JMuULp6Qu7LmpA7UDj7vHCAzAn5P9CLXuMohe3XsF275zNNqKubh",
  "key3": "3z3eoyaa4kosma8hy8pUyYVYMQ51PeMa62HyCL6kwPjBe6dmS5jdMLZpZaMpgLVcHSE6Q3GHWs7CMqVSKc2XG8sC",
  "key4": "3TE8VFjR6cCFf1tfzpUabpeio9fP3JRDRWk6XBAD85dxDwxpMHwT56cLDBCvukHCVizVPtHeU9ACRfeCPFVByMo6",
  "key5": "EjyGXZMYDmVzGtXNHUpptCU3Yg6frHipNDx8LM4HsHeyKhQ34nqWyVFZSLhs1LeXLnyus2EYwm37mL4JV76vrsb",
  "key6": "5pzYuzcSFTy53MNf4zNEYZBdSvKA2BSYzpFKe1YEZmGVsqS2GTxeD2nqvb6ik4vsDVhGxnaU3rHjC1mSzrJ97cBq",
  "key7": "5zKFDzPfjgDCFzn7q2oaukHExCwG43vH3zi8hcbucG1MxgNp3KoitT6Tmz9KQkRSnNuDtpeDqqSw7zh3NZKQfpVR",
  "key8": "3HG6q2e6JDp81TDbvzvTFKECPQDwkHMqigsRE4nSycvywe9Pm7Egep7o2ZfJHZtHFbYSg3NXkWY9zKQjFAdo6pzw",
  "key9": "8rn4CEjnH2vrXxYo9gcAbUDEmdCih3inLez7kBDyJcYXw28jdn8h7eTqfApvYYsqS8iDUSJRNy1mhGP7ihuUiLL",
  "key10": "2SaU62XoCxVFkoqW1RmUM594mupKJcsHQ4gXcuo9TErWCXBu41cGF1dqcJsXFLcuoYAtALDQx7mHD3XwehjeHXww",
  "key11": "4DRV6CoKVUyhZBZwmY1WVuzNdFjZByHT7GBu4Bwjd2bVmDKF7HKuNdNi9og2Z913dnRwpY6wZVcwZ8zFMCvKUmej",
  "key12": "5DLC6wziguPBuyjt4aojNzB4Uw7Xun4aXfRFXTBPuxZjwFdoxYcwbJJqgZ1iLG2MG5EScZxQo3aGf9dVL61a96qx",
  "key13": "2qQZveC87Lp4Qb3m1zLiDrXLoWTqUkbAHGwi1PE8MDAumDBQiqfRz32stU8iS7ayQm87aqVm5B5w1XePZkU5o18i",
  "key14": "3t5QMNDSrurY5AdZ6n3YX8ugEWJEvhdLBzAbYRJbMGRS11QjdFbMLQUAR13qJ6vyWSQn3AzTK69NgknrZPqn4YNZ",
  "key15": "3yRj9PLtW81rjf1W4Hk6hkwkEtE8NmW3q52tEE8i4xGyQB6ZLupC1kArcCf15PQHm6dJ6qqnRNZR75cuPBRv13et",
  "key16": "5EQPUszdKr2h2f7PpXyXXXYGqYqWf4SpGEUberjMbDKsmd7n7Hm9zExVaX5pUVepac8z3T9kaMgpap5wRgSgH5yK",
  "key17": "4Pm7pn3vmTg64YLBYaQERdqaZXkFbH8sRG4BB5KxKPLwRa7XdqSZhN7vftdLn6Pf6vMHqBJrxx7RbqWknDfD9Mwx",
  "key18": "5tr47qWomiiJjjivwrfhnxiPzgfZd1PpvX4Dy5RqVezwQ8RJioupauSiBSWYwRUGijP7tQWuzLrJCJERsLN3e3vw",
  "key19": "5pyt2nM62fVt8LspoHuszQmTEsy2XPPy8YXxXo8MkN1jAsCRZb1i1Qx8T4XZ5q53bBKYok6CLJrJQb48cEdyyTY2",
  "key20": "4mENb21Yx32Wm3eJjeyaXasyHvU7KQ7wsRk2NsnjrBccswxEA3ftURd7d2zAL2kC1YJuYSNAQ47EUNsJfVtJduRd",
  "key21": "3Qjw53E6Y8WuE8uHH7XLB66ZjogYDMT98bENBXaXzBPscoNnAbp42TRohgs1AYhFgDKU8TpRqGD6m8jfjP6qoXzz",
  "key22": "42B2TpVvz1wt1N8ebHvbXhofZdA4K16FpeDZxso8qF1E6z3KnLD67SFUTmRj9C6im9DHGtLRtnXxFrMVQEdHG7KQ",
  "key23": "4PrVyrGrVQWs4yh6tVgTKMN12x1iDdXkTmY8wTtLhW7R7E8mYycGbNmcX2RUTtz887M9PmtLy41veykteBgM8HE8",
  "key24": "61DppfQp8aTCTxtVM2yfvNKms4fBHuGhmpQEfQQC8mnk3AnomTKRqJFiHdaSoPHg8hGe9jLtUtfqjQpoZ5UKy6JS",
  "key25": "27bNAJs5ZPeM7bwdLCEEumyTE4kZHp2BHFxKujqd8CESBM9qkWXxJaz9LPMipB8HGAcAvN3Y5gkuaud9iqnHsXQ4",
  "key26": "2PNzLMBX7e6in54GGNNNqQRLQ8RqB6HZKUmEDJgYRxqhEaLLGa1ad915SM3Xa9eJA1WjeT4EW9BgVGTSLfhTBm4Y",
  "key27": "5hv6QfwevS77hsJ8DEoHPgF255x9xSF73ntsL55gMUAAZvmy1iewb5xJEUAr7aJyadar79rgfU5fNXpkLmZEsYfC",
  "key28": "4ExD3yMbmodaoYeXxLiDjDFYNyymw4jjw3b9Tu7WGocxmfxpNcNYEaRFGhUT2KRjkA4qrrSZQ6fMbbeChuSqWVkD",
  "key29": "3VkTV9DFm35upzXb2dTk5ZKhTFmF87aEC4yG96RK7CVyNvHcArZbzhGTifXQgH9WA9XAN5bMceZnr4Kf4NTxRfqG",
  "key30": "cTyrpwUDxaSzmNZPGykNrJbRMh9qm8tgizaB4LwefFNTEvc75ekkcPzDrBD8DJvvG3HqfgDaxQvnnXVRDjQqy9A"
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
