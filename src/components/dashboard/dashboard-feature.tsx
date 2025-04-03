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
    "KHy9gc9riSDgZaStyqw7wu13GSjcaEPrxnMUaq5mcnEb4yUzNL8a7PGz93E2kbzK9n37AcdbgRyYpg5ERKL87pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBAm6Ve8RNwzvox8iwexLZJEbm8fsXELU9ihcTuqxK49Twj5J31WdEjgrjvtCiwnY6vegehprNPJsGL4oDqd3Aw",
  "key1": "5CKemUzVAzW6fdVNos9YyR4n6EamWFoogRznd1nKqndy5uxturzrM9NJL5SQseDBf5p6BR8SV25dQy1SaDD3HF3F",
  "key2": "2oJJtR59LVSefcCnEJCRGhbooTFwDirUbFk6bBapDt7Qntx7u9spiivV5kgmG7w9UTJuonMcWjhYfBXBFDpfNjRz",
  "key3": "3jxhF8wEHf5CQGHSUkHYWBo1XZb6RV6kdjUft4jJb51CBdcVqY8n4feeW6xNCW8Xj3w7m3PqhKx8PLWnXpjtdXPB",
  "key4": "2RPRdCAbNrTnvVhjGDLcwcQp7U8FH1Mb4rW9Mw7B9ihQu4NTdaHD6HYsbTZdDvJbxDe4M1WTQSKjGVh7icrEM6QT",
  "key5": "2JssDefHEWo1Ywmi3yV45fvkNZNuSNvbM6DVPfUDMFuTSAjQCnpG9H2GWH6oervddYkeA9Uj63R6Hc5cc8FP3uc1",
  "key6": "2suHhfGpaLvQt6UFLxRdE2Ge1DRcyrXXx96MyNtTBpAxGvpF6JAAVtUC6ZbpCmLA19s3GpGL52Nsp9nQXEEVLPuL",
  "key7": "7zqWLmrtb2LvWKjFYkACfRyAgTwL7C3CvN4tdEav43EtpZ2eHyEXEfGvJnM1u6KaATJ6kbGpn8E8BFnuvW9kXUr",
  "key8": "WEGLbakg6d7o8mTWfpFgsKt4dA5T5jKxrwsjsiMpdZdyoNiLNB4LTbXbgXQjvYrJhXincqmQtMExixrncTz8FtK",
  "key9": "3RPy5M4s6azczNgSZvvCZ5e658Taq9TZQyfQ73gKK9iZhMTXGPqkHcKVM83cdg5dWSR8iCXL2CtPj1AAqjqiSP3Q",
  "key10": "MUKcb1MB4C5hFMmcfz2cWNiF1SE5dQVFD7jrPAYQ1fvzdxf38XYJiVWBfba54tMZb9JWMY2qYn27ccgH8h85ySP",
  "key11": "3vVi3ETHfzmY16nEdP7goByE6sG1fLasVB7FsSeLzSR75B2npemL5KhiXjf5uLn2yNrLupLkweXXuQJCMHLdZ3aj",
  "key12": "MoC3F2TTWLcboSL4ZQM1Pyb8wx3JaD5ofTN2vW76h7zVMVScoypbFpUVraPQnVekcbYkVhM4a4cTcxnP23ZTsNY",
  "key13": "32yUgiM9aReLk3cpEMWdDnvwucfVarASMhA7T4LGQ6isMkfQQvKzwweM6U92gUmpYWbZAdMWviXPh6woYAqGY4fq",
  "key14": "126dUNy9udf9jhW9e4vWAodkQgxTQV58yQobx2Xoht8ywwXgz1ycmExBY1Y1LY5ScdZSGRs5ShgpXJWoRCya2eLs",
  "key15": "43xgFZp68WVXZ4iCQJshp8KUcLe27j6VajRkPruCb3Df3tMjkFHJ2qU3W2iJ3thodYo3vAMJtzMqtWbdrY9MuSMX",
  "key16": "52GYRPS7YMjXLvN4uBDqEpCtVTcnXay23w71Wh7ZSRAegDCjApxEgZMGdXSvJnjH6otSqAn77WAossS8XJKwVnfz",
  "key17": "5zN6uCGWa2kfm9hV7nhMDPci2qrAzZBE1FKHtWqou89M1an8Hh1sB8YMvVSCi3egnnLY6rmXEjNnHK8xixyRxVAp",
  "key18": "vrSBj76nmyQAKrtPhhVqT3xfFFqFf6UyJJzfQ1SPgP36ULDJ8ZvLVpSvBoN1dNCi7rDApkn1WFK96DkwuqXrYe8",
  "key19": "4qJFbJyqQQCwuB6sybAysFJB2cr8ahdiLy3et9i4yfN9bfFt2ufxr46JDQtfoZXMtXdUXXVUzYSwYVD8FVb7P6T7",
  "key20": "54z2pZz3nJNnQg4gv328kjdgcAT71m9t974sFg77jWmuxxwu1d3GY8uu4SjFTH1E8nftEBSP4BMXubwttuwtZRTH",
  "key21": "dmYmNfmfmcUfXdzEuA1goHNJDoyJsZ1diCXTpkna5hpircsw7jkSK11r8q1rsMpSTRkvJ4emRiBnFDEUviub38n",
  "key22": "5W11yJyXabdazrQBzA1rGcRvyivm4KkQjn672kJZZgSst9eRdKcsT2WXAz5Szc45QffKHoFJZ4EqhLZzNJ9LeUyk",
  "key23": "2WTAscb5zBpLktPTh4RvKPvFdDFgrnQHKr6utQJ2g6DVofeLmgGbDFfdtgz1QeoqC8SZUP7DT735YRRS6RACg1gA",
  "key24": "2TJ3v5ABXB24JDLGbYb3e8qxPuLpYAjgnf66gnCadGo5W6ruyNTdE1tcMc63Hr7sSUVWcaeXuyGkDXwbH9uPkW6u",
  "key25": "4jeLX2PJo7oSyjPP9qiAnZhGDeiTV11rQKzcNrHpw6paQqB7qWihJm8HSVppwkHH3dPEQafyqVpBnEMZyS9SoVan",
  "key26": "Y4VURfKEJ4YZBPBy3TbDiaaVWtgMtBjfVCQfPGXDf9yvQRuchoCP5hEComv2u4uM8C3WKmuaZyjZbVJ1MMaB5Fb",
  "key27": "czhjMoRQ71v56KPW1HZ43HUzVEG7kFMWSM2zqQ6X88SyveM5arg2GjSJqyoSkBYiSkK2MMjwQS7bW57HSAB5DC3",
  "key28": "3XjpHRgENoiCdwfc6uuz9qWeiXfqznmGEAJUNQfNKfiqj28MU8E5WUxxaiuwJYPUnnmzx2Msy59rd2Q9WZFyCER3",
  "key29": "5Jh36hzuTCgKSWwnwXVdkzSgaPH41VcaXtUfYTZVL5zteWWfts4PhCXpkBNwsEQQWnFV16icyzQcfTzPbm1GdMEB",
  "key30": "4gktqYKpVXaxPCsPMjZc5JF7BEyWbvgovpjz35wWgRB9EvYrghAfJP1rBaobyB8ioPZPzAT5WH1xsW8MpeABFoTL",
  "key31": "3Aa4Q6hVPrSqpRELYTUFQFiWNamoY7iEUJYQ5JgjMQmAp84EBuQoqAdF35TT4UjXUiLqCrknBNM36uVHdzxMDPET",
  "key32": "31fauTJxCvGbcGX4Fm3fqrq4nq5iCAavcMoa5gmHNdzPx6X3YdPZ8eLrvEeut87cYtwCGZeGkCP9xgEZHcCHFmF3",
  "key33": "4hytQuc18ijYBB3a5nu8k75KSMThfXCsMUytXHFWqSyfkuDmk3uAMkHMqMb6vrsvzXFqZE2WeVJHPpNpzuh2EwoU"
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
