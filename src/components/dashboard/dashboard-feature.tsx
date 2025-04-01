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
    "KMiDXekptPmvecSeAHKF7U9FgpMe9g8boSUx58HNi9PrXomYYcnEthymnGwwimxfLZkPGkrGDtSfihMSVSZXSiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgq1Sf1efYfPV5MFbENixXCYp1XEdwRsD8bukyeJACFe3CtmLNVtZCCFUAkKVbuMyUUGV9hR4WY35fbX49tAeuj",
  "key1": "4Gv64SRtjS7eviRDax6SJNNFeqZP7qFfr6aZqKjieG6r5aoCfRRPgQ4yfQNVNaTH9JHMNxt96cNHeW8y3XeC8Wkg",
  "key2": "4f5vV2vHCruSN8vv5FQfbGEy5Z5T18bFNDS4xPB6tj7hNjy3tzPP8UqFw48nmR73hCZKHWvySejeysZxDBSo6zDn",
  "key3": "2X9jf4PKBsN65UBd2PHqhNptqLSQ2DibKX7PDsFTseaa96A9gDG1znnam76aiKjWJW3MJbn5bJeyG51rSJbYdtG7",
  "key4": "3gKRitmAavPQaUgz7G2UVMkef5ANHfArBLGgmt8U3n7PgmQSMth1xigrVzcAT1zpD3Yh1KnEebUQWYmbhb6fSkG",
  "key5": "2hRDgAUVheGV6NmVDtcrWxbDLNzDjmhAqiC21umWU5EBdeLJ54s1X2DtSdDnNNW6K8tLmPFpzy2oyWWCFLXKx4WJ",
  "key6": "7tdQ2AyeUJRwgsHtEuE8bpcsMZ1WmH3m7iQVCyob71PDV66A4M83nWoQAdPYt9ZkFjCyaKFG6NEgxeAmWbDnJoW",
  "key7": "5VaGhkxNJJZfh7fPheMAqEV763tXE8PD4C87KbVjvwFK33ysZNMCdeohXqdc3uoryYZwjYAHib8hVjBxQvZEQSQS",
  "key8": "31MJ1K9oKrhZ2PKtAUb7Shwcf8ZTQqyz3xtsHSWbcgeWjYZJShc2Q3cJdjFGaziWpCimq7bJdyHzEBE6YJsDkeCM",
  "key9": "5dYVghPtAFSjmPr9ArcTB8q5mge5n82gztGgrvy7LGmGqBDu7EncTQ2wn5eHVbJAwv48y58TCsUcvW8eb6qNJnoQ",
  "key10": "3Q5Xqg7MTuXLRPeQn6nGFPBHZxT5Z365sY8XGpKa4AnM8ssEbCwbM3Rn3s5x7GGPmcyi7LTijcUGrBuZB4ddMoN5",
  "key11": "3DmZP4kWH4hiC5HyyMgzLezEuatiWftDYcDFG9Gv4Koxxqy1PPzwT7cZNSBgRjV5hS9dJNC35CMpbdRdBDCPJdSq",
  "key12": "5u8QtE7QZLcmSUttHjjP6CXDHcYi5XqvxCY3QpzHfFDbXcoxWmQtPWuMiuJRKssfJZ7eqFyfLWEcgxd7nqVtbR6d",
  "key13": "6faDDMK5RYr3swWvej4RyT21AUTuT8fXN9U9JdtQuJ51SrNCPeyPN4xWoaA8xfCkJDw5YUHkWUJeAN4sWS5UEwZ",
  "key14": "4AnpE8YWHTVm2QFxaNTyYURHeX4QccdwwiyFSRBaJTWuufqk3Sgw4y9LqZkRCpus1ZF9pLuP4Uuf785S9a978QF4",
  "key15": "rGHmhFe4du6PQk66RNjMKxVdTKBzKC27FrpuWj2KvnyJGmdfbCVYoHvRosh4qp4qDLGk9oapvuTCQEtYLhKoaZx",
  "key16": "2ZBGwXKUGgKoi4CZrRNZJfuoiW1qdBcs7VcwhUnBqckJbHwTHe5LULzzF8d1pqEajB8MCqrUUSuJgupQuR1X5aZz",
  "key17": "57Z1sXpuCdo43UkKwXMSKY957gaX62sSXFbG5wQX2ZiTmPmeneML5UcR6tGCcvEBcznq1WwZdMTiNufm7R3W4kn7",
  "key18": "LH573iJ3XGi9j7CA8X1vLSYkKwi8JzSnRVyA95TZZim3opUxLCn5RBSMhSWoRGZd9n1AY3XNxnK3UMDDWFyMTk9",
  "key19": "29P64nCU3mauFj1nft3oEaQXxB6Mqqy5tUr61C8Z9ADX6hFvS8edqp7rVGbhFsRgDtRuV3xcuQkXXrXPyPFyscdU",
  "key20": "39WnZP4xDPy8j1SZ9c2ZCVvEswVXvFNfsPiqmKTjZqsCei2cqjmhAa1zJBjwfkN5HpobJz1mUctXsV7b9TTscAEb",
  "key21": "2ZGKuaMPnerbFPfH1t1UJ5woGbXYiQkT1NdB1K35zv7dryYi7gyvJf2N5hMY3VoV2LJcMcVxEKybZzoqcxGKeR1z",
  "key22": "4wB5TFHfnQEn3NkvMHvHnQAUAYM53NJBUUqD4GBpF5W1sKqGJurCyPiTSVqLkWgWxxNtugsSvGtNBur8kr4pQoH7",
  "key23": "5r6eyt7gfWMA6txcyFiS9AwkzvNSN1J2ubbZMit3zN6AhGcXSDixX4istndNf1D2CXDDxdRwzMTzS4ohYqnayV4K",
  "key24": "Z8fAq3WA2AJTLhCF13iXW6JwVa7zpfTU4FsvbTsu5yrrd48PE7BLKx9oMLXZNxQyhP3kdmaK2rMyTJxazdf6gSa",
  "key25": "4utcq2R85otPWx77GAxuySnaRU2rLTnPiN6YzgLU4acuSq3wxyriQ4zfwkifLTiHoJmCUNXY9TND84e1acSvsie3",
  "key26": "65oBoE17nxGC4HtahCg8v452HpZ7uJnaENomFJk8JiCM8ppyaPHXpqtJvmhyKxsVtrgi98u7isY6gUQ4q78Sgh9m",
  "key27": "f2sKEoQmrxJo1wY5GeA39ZTa3soES6GJExTxkgU8z8qujGUypGAv2X2xV313VwAXU1WrVgKJ6eempQERxvQoqne",
  "key28": "3Rd5vdjdgwEsHXRsXJbRdpVJzPfsGLZZ8963dBnQDCq8g5wRBTV24vNVuAQENUr4utkz5pthvJzyTwHPKQmYYWjR",
  "key29": "CXEnxvZzpV1m8vFB4AcuoDPXGPV3y1999UVTH2KA3PzDioDvdUkJp3Z4J5p2ghVxqTzgZu9psYGWq7eFsqvzmPf",
  "key30": "4sAVF6JxseSR3kER4TTkWE2vvkXJaxEPPVzY9dS2JBNuyAXN2L28A4Jp2yW7kSHXumXfamrBz86JCfGiZ3oaQe3J",
  "key31": "ky5LR97HbH3XrXWToCHKb7aVYNRACAutChjeKTDfdsnS9JRhY7L4AbUVbjCWjKxPW6xCrC2HXdY5dyvju37pbCi",
  "key32": "3Ez7whs4eeQq7eTpee16knMF48CvukcCfgSBMTjSJXth8j99kjBpJ5QcL648SFCpzEuK9chCSHSaSFeciBykvN73",
  "key33": "5SQDawUaQxEm2farxTS1EMmRpT8jjcugpWDJS9JC1ziyLryofSDsqbND6qij5MRo1hK7CVda8QF4t1LUBbFCDzyY"
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
