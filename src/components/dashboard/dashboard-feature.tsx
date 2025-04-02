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
    "4c44mwRHCL48PXs1SnSuvr8XGWaBSduXLPGDmpLT9yb4KQt1oX5Akos87nyrazDedZ4ykKf35dYJn9EVEbifHguM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeFAaVd5z1uVRBuXdgAAfTZ5oMVg4mnJH26ncUESmBTgraBpx63hEK3JN7pYKJtDGDbRaJumB5ckkbeC5tG8i19",
  "key1": "4A73uvXQZvhffmd3BzsNEDUsi9MZKpugULnv6U5x8NKc1x9TCBaLHTi113VJxuZzG44KML38vVyxnJtiPtvEzZhD",
  "key2": "f6G3pni47t8aNSQMUyoLjAeNsQGnXreX4sHPmFsRBV3zgSU4ugZ3YKZBQG2NQVZVVtTRdPEtkzag1oDFiwHBSA6",
  "key3": "29Q6ogdsWAmzTNWrGmYcNrNms1sMPTK6d8qoGJw1mUD3CW56e4cs88JiFnKtvNRUHmMUDrv3kANRBJrZKYwdnXbW",
  "key4": "515dzAv3icfxU2ZU55fQPZ7RmYozKmDUM584WVcHRtepa6CTdgfQgmgCYqhxJucYN5UrhPG6PLRehEeiKWsfxRNw",
  "key5": "3sCNsVyAMheEhzb2G6M8NJq2eYzwreMv1sDchzP7jUHnt77a3KSJ8S4fEuvxSk2tMNHUtbvcxvDfuTaHXF98Rhj3",
  "key6": "2Ghn43T97P8pRHM9JXUZTGNX4YvWWE6kpQarasnGFG9RuceM3dSMKGRnM6Makz8sCqyR9V6v5SZC8PDzobS7oJ2E",
  "key7": "35mgaZqQgWnRTzpvP98Mwiezmxzd1B6TU5JhT5erRtAWADQaJkUwpJgxq71gg3wu9crdbQHNoZP2SnEzVUD7o79r",
  "key8": "5Tk1pRnxwevtP3r4rw7kNooLuuJTohfXRMj2TKY9nZsc1o4kQsVRWnCfe5Xcnmu9nbUhAjr4qrYtcpTwgpgUNiLR",
  "key9": "2R9b6CHY8DJmnaFqRnCkWLoN6pTUwmLbcmMutAcuNhG698FEvbAZth355eQFJqo43X8Fimsr4CEJj2Pno31bquJE",
  "key10": "9nYSuwUcbdz3yvLFdYDz8AEHWWtu8MkTuWUamaQwhBMNrpf7p4uLBj7Fv9TjyhMqH9jHC6tkWMKVwCT94MnoBJt",
  "key11": "3G6MZM3maro7zK7ry7Vzgq6ukmXsXAseZBLfhCrPNNebAigLuh1hHTMYqV944kwHJ4kzHrv1TuPqqzCruyB1tWZE",
  "key12": "2NAWRVGtgYhD7VEGqvp2RHrGxH3JkNvZWvtF9FS3WzxxkG2Y4mxhwNgm3xh8P6fQdGcYChLFdimnYPXC8y8ShCdg",
  "key13": "5FtPwPTNGVj5tyUedAc8MnrU2LmYFEt95GTAnFJojEiwhfHEc23aAA3QaMAdoodCPppbWpf2q7N1DehiE8aekds7",
  "key14": "2nACwprQ5DaokAtSC9eYrAi291aiyR8L3ZLHqBWbhzNqJdXyDMUPswxF7Jqpk2JLCtxitAX2kSdRTKtWDCaFkczd",
  "key15": "3eZxr8xqAAXRWChutEyxhKHZndYAAkQkzqit8ugjdXEtJ4iWR1xfoQX8hxF1pWhkyhg9inNQ93JuihBa6WhASa93",
  "key16": "2frhowwvZKC4Mbqe2WyXwwsaaEQveH8B4uabMFMqEpxK4Yj3gDsoGAGGqaED5xdsXJSnmPJRV69UhHXwipmJgoKi",
  "key17": "4ExuundFGrRbKChocKpR5LFiAdCpM5NQuyBgZuc5r1qupH5eXD1gxQa8Kkug91R3RZbuiFtsbpVeSVKkNfaW6WFJ",
  "key18": "4x1ebBS8UQ5y1jvuPbbmhqSqAwcSHXQ9iyBdMR5K5f8GTTvkLZpZ99BFWCYVHAbpQZPxHZyxWXGZLGvz3YtwAyXG",
  "key19": "kJzDNqmSpZ2L5eGHPaS5mKKteTTu7fyJy8TxYPWmp9ED1QaayMY4t6hA8gc2eZifExVDuPC2rxHpHZtvtiHbTib",
  "key20": "M5BjtobAQP7CsyrCiaxHbVAwZKTJiPuYik1Yuq3XMLCqzE9nQ2NokSAnEbQEg1s7Q7xchEisU722VZuJqhW6Gjy",
  "key21": "4nx5BUjgqCi2zjmsAAXZwVMutoNM3QL1zoshEC7eq5YJWXwNMrPUVWqfAECgQrXsEyv7Q6DHSYkLUBsJRcnGBkuy",
  "key22": "4ceY3P3D3cgG8fAGqD1DnyCNCDEfK5oN5UpKiYuHvzq8B8E6BUZ9oHaLpezQQBEbmxTXLn4n5dRVTqzWJXDQsUpb",
  "key23": "4zsjJb1dC1JGUUWJJpz8BmhQNFtUMCNiBvU2TCj4LbgbTzvafzVeNzLdffc6K9CqisN8qfchJMnawPxXxPpPhkbA",
  "key24": "3bZEa843pYa4GQFvbsv8ZdnDE1bHqJcd58EDPXfFNM36vJAejEnko2SxYs7iiTxmowiatqMwhUav7ffVC5d4gGxr",
  "key25": "9o3KYfuJKesbYa4frWB2TfnD7aWrYWYjPQBhZ8APaK1UK2PaLBZRjeLifvUkR4zdEWncNGpi18WkmeoNHwbRsqY",
  "key26": "3pS1jye6UMNeZi3KWssEnSPW8RPKYAoqyBc93sRHptAWTHucf7pyohDKGH35N3ZbgTKFEW783gk2stZsvTaSoV9p",
  "key27": "3ut4vXjeDvKfuPG3wf9pcTbb5heSCE2MMRxqhFZoSKsrbSyG6PQVsridajUYjDHFLoJx9avy6EpNdiMKGfwqiDX4",
  "key28": "584S4T9wXUBAgasGuwHo6d3GHbPiALSa538spH9ZkL4ymTzmxhaCEggWGg7r2SEVvcutdcw8hQPTmxkrg2SqVvtT"
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
