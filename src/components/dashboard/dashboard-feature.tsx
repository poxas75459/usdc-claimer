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
    "21tWFkZG4aRvQmgwtNqH4vomwpkthwoQEocbgdijgt25x4igcHWtndT8JtG9rsng38nw9oud9kdKRBJ2cRRUMMSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZGWbPyh8b4eqMDc1ypDrJ8H5wMGhHodhevbdvWFohrazmByQN18YVFnARM2EtBcHo8X94j9CQZrccP22H2wL4sV",
  "key1": "3Vii9tzE9udWS7TGGE57eWovFy2WWD77Fny6iaGGeKWb9jTau5BgJ3WH5vze12YFeyPDvh2TbcSkEsjR5AHAhmzu",
  "key2": "47PwqKnZxh4tMS9xabH6FyftJmgvCiMsh9zLwfatjvUEn5a83skRK4qydtTqzoMfpGq1P8NGboPHLPDdpu6B97Qa",
  "key3": "4tvARXRQgYCQHMV4XVUNXytLVypcHh2wFFLoctMgDvyEP8G3DHRC96e4WgzZEmpULMUyUtCvkyH2CQgL3XJTJ3da",
  "key4": "15va867RT31W55B7NGkYZbyJkRqZQjw3zk4eMbeUgAXrDY7nM9hX2iPFuYFusxQJqoC9M9twdbqYJQNh2fcQBaK",
  "key5": "4bTtxNFNRyd8LZ5322mYZtN8eu8mra9gLpTZJSVtNJHrmuRu7VYZJ4wZxQBKcCYPJoRkkN7ioBKz7tbEuwufwjYH",
  "key6": "4cs2hEYTMP7DfKjV7143S5mxmgKAcVbATPBNh1AioeFuSkBiH72RfasMU1cGkHU6pynTz7jTnLfw66nx1EgoEJPZ",
  "key7": "3ty7tZXi6QoWX8fywQQCevPfW6ZXKqQLKFoQyuEDgfT2P3kiBDN1SwTiTqck9j3wLCqAn3NNxSo5rpaXovKs2ckr",
  "key8": "JYS26qriQmRtyLJYCNfzMweSMW8jXVLwZwowAw3rCHmBwa5met3PxabSc7V8zFdQcRe8C2eWK9QLQXRT8E2UPtt",
  "key9": "2P6UigUJo3MnjWUimxfQk4DSBcdop9reFzEa3ZUs6xzgCQZzj6GrRJdw9psevH6TVJgCb6ULDxgfS834RQkUnDEi",
  "key10": "59ofmFX8SwrfMT1jqJy1jZ2DW3EicZ1GjdiPTZNUuWJF35vFqf2rRKvCb6dBZPJBqxACQkJTydu85sHbFDUBxZsx",
  "key11": "3eJE8V28yWM73fDWX9Pun2aazV2UhucEHYoEisg6GHmBxvgWo1oRgj75qcP2k24bZnHBYm5jVjDE5t7L61TnCdFM",
  "key12": "4y7inQXhrq2wxguEhDXjmB7dVNNN55R6TZfA6hAUh2nGSz9Rg2Ct4rApwSQmXK1MLKMLDY2DVscpZGxBfC1qfRxm",
  "key13": "3WbAXBsQwXPCCY7zJz5YiFdhMafJBHiZaZooFnCJMBLigF86etBFhCS7S4Fm2ycrqZ3GVGzjX8tndD7Nxj1Znsjn",
  "key14": "2h93kDzCZnuv4wUnnJkrLzcJ51KL5dtqCG91iHGhgr5Spg5wZqeUowB3S3kuLasw4M64HmgnvoZUKKX9xPpYwetE",
  "key15": "2Uktie9LUCydvj2h5vmfF1CiTgThA1WVnaKtrDwJU7wLCz6PYcY3EhL1pnrtGbVxsKGWgJHKQRWBMgmFfkqnvUWA",
  "key16": "2yq4fSCH1xt48ZvHTXAgmdZu5rKygGV8Yf2xm7FxkGbpVHaN9vxbnC8WZfHutDLMnD9XwGdECLrgACtpQrPnYnyD",
  "key17": "nxyDV3X939GcoT54Q8dTYP8cV9uHnngwHuYtPRJAHWyeX7oYgcDTRUNPSKz4uYtF3icnQ5gbYvshNGdGVXw8xsM",
  "key18": "5x2sCJagbZLgEMBprpz45P7qZNH26fyTG8LvLRuFt3kKAR8edH3mzRaviJKfU2QeQVDA7rzYVLCQBHLQ3nvvoJ99",
  "key19": "3NzUBrJNdQaFofLViuueJNBSKJGfcR8smTmg36k681g9qJk6pRs5zDZgKdRdC8pUPvhaaBd7oAUCmXPxCnbzfQVu",
  "key20": "2HLKXMXfDteBdb1ZGaYNcBEfBwccdnpS3LX8no65E6EaHDV2yZS5cuELs6U48SSZEbbjCD2qSQvvcXyQNbLcf2Lx",
  "key21": "3qbbbeQEeALv18HPFYCeD85v4yKrAuybATPfjQXCtuyGSzsjr2tpE5AhdWKxaS2vebHWUXpkRES9ygoB1qz672bP",
  "key22": "5jwFvL5K3KfvxtE9tWmZXDehve6uKehtvkAjjVmcuXfUUT9FW5URGALbbCw8J3ucTjUJKgjQPvzEuPeZeBRcUQif",
  "key23": "2noKPdTKMD2XAeBAmfr8CBgjfwsyj9sxfDj4v5eSjUq959TKmJmPaGsVb9DnE1cXP17m7LE7zs5Ag6eHMqvXj4NZ",
  "key24": "2zAZazm1itC8bWEwTEDEn1zg9YtcKgu7FAsSuWn88Kuwrr8iDAMP3LmqwEeMai891xmowB42usoyHo6b9MULmvgM",
  "key25": "3edAxDuueRDA5GaQJnNwW9buRoigx6pNym2um3Xo7gG6Bj1XcqDCUsvLggpyPRZvsEUBJXg1cuWmK4nLQVH7iLTR",
  "key26": "4xQMfKDrEyCHGactqMj5Miaq3u7FX7yDWz3Pc1wYrRXbMHJTuUxdWrT7pFNLb8C42XvJUrxAzSo7uPtBZ4X6F5CL",
  "key27": "bSBeon3sA3kdsrQvGMxAUpezapmwT6BHhN7HkRFvwrU8r2UCA13kioYTNiUEmWEwdeg7DUnhCFoCT4yMVp5bbrV"
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
