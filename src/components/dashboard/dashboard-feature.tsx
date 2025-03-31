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
    "4J3cMY5G7jbzXghi7wRSPT1K4XHinz24H64VxXZwhbb73kyZ9ZxRnGzeQ9zC5FtRVJGzLMTYMMXJWaZd52L4F9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoqeNZDcwjiA6DHyNqfGsnccKGDmaAzB5oqmP37VwWqM1H2aVoHDkd53KFjssr2Yn5NFNqQMREKkVi6coVzSJcF",
  "key1": "Zs8v62EMzkqCU7jhDEZa2W2DFxycCoKKhRz7eXSj2BnLHbXkWqA8gC95wPZ6hmQT27Z9MXs41EFGMv2cfna3MyC",
  "key2": "53yTHFpKNzkakAF6KTWRTwD2yBGuxNSnDTfzZ1iU1E7x8YuFYbd9TMxTDEhGbwLrXcaWrs9XfdME2sGnzCfQAFTs",
  "key3": "sQRstAP9eyHmTwPJr3ubWPdi8phb8rdae59juVsH6jhZCv3WcKfX7io2gSwauYxpQBmuza2B8QJBej8dD4cgxHg",
  "key4": "5JtaaPEArLbF8GcUb6F2Bn3CeYY8woYMY7RKkAsjW1dgMuXNaGQYhVdzZzqTf9JbzzGk3QRu6M92jrK6MbsVaWmq",
  "key5": "5Cb7yTNf3vcYH5qbSuWmFgFj1MyK2j3zfh4zPJ1VbQZNxqRP7XVKnTfogdBJNQtwprCYWUqJLp3evUkqsjQkYJtX",
  "key6": "54Y3QcegoLaAQESRe4AHcXYMVgmSP5u2v9e4qRVkL1LnwGtAeqfKXjsJa8VMFL5yw8RAuE2RbJtwiFA9NULoDVeR",
  "key7": "XH6PMAzf9F2DBPyDmEpDTAwjwFQMcv6zmikY5RksNfVbDWM1dSHRdzTTCrCoCkzTbihxFu7QUpcKmBkPnQdv7t9",
  "key8": "YiUSqEyB6qkWuNxD1qfmUA5eFLymb99EZqZDfZpSNJ6FcrYmg3iEKdQDVENG7EjYchJXSJ4PNKUyjHbPwaAmWGE",
  "key9": "4Nxmxh4XHzxZMNyRQkm5W6zsCzndmKDYMW1aV36cjCE4zgKresLtbH8bAqxnb9yjCptpHmrEvnnb22ksZL1iGkpp",
  "key10": "3ijKcfPt5vRsw6EV2sP2iSSLuLogHfLY5ydjXcHNVergxHnphp5gobAGMS4PuPaBwk8ijrwHDm5wiGxZJaX9kuTt",
  "key11": "2qTAMKGXtAphVz61UgnFouKuqEyuDqzp8XGfFxVxUWT938M4baixk4Cup4XRKHXKgUSGRdV3YkZvu72LhSymXCA7",
  "key12": "2Hfe2LoPq9SiCJQ8M8eVN8HBWm7Xnddcu4Wvd5Hs85sDMx265ngTJ6RUU8L3s2gA8vqUNMtwwtd8vTZWdEpzpaqW",
  "key13": "5bd2LSFSXicq9UReU3PYZ5JeDztoFyEX8QpqvWahGB1XHCAmAwn2spTe1eWjid4Agg3UBYokZpFrESfRtwC3t9N7",
  "key14": "65hfFJCVY3ahdU3mHPEJvuUnNi4DxoNrwL1JmAotufNV1rpRVRCByzZWtNgeBznTUkihTBSFzffrH3CcJqMqz6vc",
  "key15": "5fFZBVT38rGR2o1QTbmFwKRCQ82yrrhd946o9yY5QMW3Fu8crANpXyyCkGncXy9qfyy5GuXjVRhkKwr21sbPgHts",
  "key16": "23vMNzbLcPPAfRD3eHBrbyA4H7gWAWjJg1R6n5TBTvSm2oQRxNN9AdqF2cLYm3ri7s11pZKCGdeSBJz8nDMdxXde",
  "key17": "35S5oMFc7pRzASJX7Q855BkqXN9iJFqsT5MGgy9BL2Lqq5ZnfuJiLbagGftxwZgipu6uWz4cwsrDVZqncvoNzg67",
  "key18": "4UC64SUnVLJqkLyBZa49TQXeZTVUqi9ygeWaCAoqfvoUQcQVGN6j8L4r3j56YhGTSdRfBm1dsZ17Pid7jqULuZCW",
  "key19": "5gB9StknBkZuxwce3i77Zv9ax7jNWPKX7SxwX4cD5nSpaxMjC6EuhBDuVp34TQ1evT8cktGHm4VqW18QQGUBCTzf",
  "key20": "3vxa2kzmvAaANEpUF9CAD472jKQaphpX1UgTmCazHxDA1axHiXFJp4rScktX4oLmT4xGbe1R6Ce3riQXfDLyR2oM",
  "key21": "3zuzYz4HWirKbuSHpa34cZL9zgq3BQPUbJa99nigmhRaSue1wEexntBiScxESvg4CphbGLhquaFqDaGAGbuPvmqf",
  "key22": "5sda6pT2S1tz7gswnWRhEyCdCC5adAFLWUZUFumeBbh8jGa8cWHDqay5pDx2VC6nt8G2PWpswJs7NkgSGyPRtSrv",
  "key23": "rPFXWLyXzGDkzGVnFHNmaQZ31TW46Tj8Te4tf41utfn467MPteGcqQ1SuCFFR98WjWVJWwBSeWAg8BFrX3c8Zr3",
  "key24": "2no9aLMXbYg1aSKqYLZUCC5r9kY21qrHHzLwsHz9i4pqCq7MvoNAL2JwfnabjSNGBhLvJJE2ikfbg4ikn8wWEsvh",
  "key25": "4unVm1y8kaVdU5WfDVxko7g9ufYv6G1qfkPWwzzpUyC8Tg7Jrur9GfJVFMmpbDioWga8JYu39Y7L2XoyP9EmLzVj",
  "key26": "5nEkPC9wQ7hq6oHMQLbiRQqZqFL7cYQyw9gCcZuZkSoJhEreWNaLn3uSHC7QMxvdaNDLhfG9wrDRPKdHT4EhV7hQ",
  "key27": "2MGAgG6FxW8rzoSb5mdnLkgrjqr1JuTCJeZoXSNBGk5KP39v17MugdjkYxSJB7DkoqUddvvyW9PsquSmayF8132Q",
  "key28": "36yLgaubCwv3UtkNRyKyFbUMESqwVdyeFqfFrkvgR5vbkRPkJWqk8EBM56k4pAKeojDPrqiRMnbTRnmsTwUtZ6JB",
  "key29": "3kTtwQSkiehU4vYoqQJFuivx9ov5DBR5WwURgyrfTh2HABHye7u9wMDp8L15KJqD6qBUKzkveke8Qfotuy7AB1iF"
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
