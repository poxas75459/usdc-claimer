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
    "21nRutbL8ofRtBeCMsS4JcC4ncVFLmXMnrUGARtRsAwPyawLZ1ZNEN4gnGQaevQfbTwYQC9ipTrJgSwLejM17vic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxfkHMycikTKnsv2o2MyctK76Duz589oucreUneKVCPbTLZtd2FERbrajkwW7JJPrfrpap4CcoALkh6Hk5T1ZVc",
  "key1": "4WEXeRgCfkkrZyBWnhHNrHBnxPdLgKKKkp15Ugi2MZi6dve7j154sQ9bxPKRAkHvjphDwXhGiEPXawpE85hYuFYW",
  "key2": "4onA8LgwAVV2hb88d4cZUnBGTRMvfyaXcuTAH66ePot6PjZ3jYkMfWmtqPmKmL8yCXE5haALegJkmedFEAXYx5tg",
  "key3": "gyQyAccSuFg5caWKqBhK9cKWHJQpa4ypLFtrzEeSSpNqdTSfcbYjSH2nddSdwronRWun2GrjkdhXSCwhdg1LsRv",
  "key4": "4M9n2dDuuLBEDi8PLuyGAogPYkPRtqeUjKfTq9SEgkHHG7fC9x5kUB2r933A7qusmH7mVdK7tHKm5KN7iNUj1Piz",
  "key5": "7L4jaXj5QfQYywSM2fGGeMaPhsas6ui3NdRcwU1E7jKGuWTTsCcWE2ywAvaxouTmCLBwyAM2EMKmvARxJBb65oj",
  "key6": "5JEm7ZP51tt2uGvsrtYE5eGj4sg3BLwVYLfgJ5wadTmLTL3jdUYhbgBRVyY3kZKQr3gNcP37KLcwYSJnPRGaazHh",
  "key7": "DFupYULhMdcEZ4XtKjFAuujvDVgKemv92ug1wQx66BqdosrYVb7iQFHZog8pFKfqDSaxNXjJGgEJfDwprQqTkK9",
  "key8": "2uAZwZ8tZTHVR7LgxkAcc8o4cgPerVN2heQUtWL1da6gTxR7b1EvkdWYH5mt6fohuCN4bZ5K3gQHBC84iQ1sjK4S",
  "key9": "59tKeNCmGXnVjyALP8xw1k19fcS1h6ZoqMKK5eLqDJpi3G18mpfVMzHVieUNEAwLTe1VQroDMR4xvyjUZLMTV6Dd",
  "key10": "y1tkm8UAnAzGDZYJNa7Sje1AqCUDuh7seS9igYXSpk1rD9eJ4bQP93b5caHt9Y9CG1c6QSSeWKZ6ovQkCXJsJ8x",
  "key11": "2aBKLdDeYwrKH52PBFMD4L1E8Y7MMZ1P62HiouCBfzr8Bzz9HfuJDBA7VRx4VKvy6odptou3N8K11yMDZKek4vNP",
  "key12": "529DSWj46EmVUtCE6f2Vk9XzL8bSMp95h1k9DPMcmfEJAGBgMM5m6iB3TUFtCmkav64wZATBuZZsaCSBNNae9AaV",
  "key13": "66ruM4Mdmh86s4Bs3CNUE3rxN87iuyHo8qUUjWSwX5tXHK8yhFXNXqtrXshEXVh2PTnyt17uKgdHuQmgQ8ao1yrr",
  "key14": "Ker18s9b2GjnfzSp5cYCpdVQiLNutiBuWKvz4Sfvrb1itUTrKV934vPU42ncd5tBenk9k3TfJjKCvCS1AnhQqey",
  "key15": "M3dvqvk3t8W91kmzykGQsBbfCBS4V2KyV7MssRGd5Voh7eoA54rYrPJ4esGPANmyxtE78YUJrYjZinrf5Muzto1",
  "key16": "59otGJ1tVqu8vs4dLG7HFaNNR2D5yBdsVjyEwHp4YPeuxCS2fKN5c4At3UttCKQRf5oi7E4TjwdwVSU2pPChuMU5",
  "key17": "3CUpiuA1omH5Cxaaesm54GSHxknUDiNfQrmMMV9SFvY6MuZZfGDbKTWbNnhQYmdDGXm1MviPoT67eT8KxBxEYhs8",
  "key18": "2AUCtATpGzc2rSM66J1CC1yNKdjbzPf21XEv5A95dWp7K9WLNaSjmg4b8vC9QyXUiBqQj5HhY7rxa5sqmFarbsBo",
  "key19": "3o17bFk4aH33HKxSXAKZHLFTCtVhkfKiPw68iFKGwDpyDX4ppst5mR4QGASwiKftGHHWLRitovMgJdSfGNgkTbui",
  "key20": "3CMpWiFvCFiK2LtS5BPoCrLgnLe2b7isJCHeQbMcevfUeM9xhVdaxnt2ARABW5FUSYA5YBq2fMVjJXYExGbpdAqK",
  "key21": "2BUqe3DX26FRtQFc5PRELGGk9jvTpLiP9robPJCkyPPFkj69SwccVHhAqTpbSgihQKPwAnJxSGFY3yjXqkr9Sara",
  "key22": "2KFmKhZduUtk1rpUscT5PsT6jXuDsQyHrX4MXhRA3J42Bkxv7U3rHHBpviHcTGGEkMFyuLTVyG1ZysR8vFVoRk11",
  "key23": "2BP6bSEkK8mhQKP567x9XT613XNWo7Ho5EoRnek7Ey8eucTiSgh4AYqtKT3R1aMR9DzoZPyVuxuuxbFyMTQpsMyv",
  "key24": "4gGdXwbKCveMPm9Sky5qYPXmKM3MZ4GasLmdZ1FAA3XPf8icjUqQMXCs16q6rJjCeQMBuhwvGrb1si9QaWLeGPf9",
  "key25": "Jke4tgTAkY1C6trJHXcAYuAsC9W7ttY9TRiRkLpXmYroAkhTsffhx47wspgMRATrsAf8CzE77AtdeyHdUM3MZcc",
  "key26": "5Z3HrbUn3fVPMeN91b1GFkn4D4QwAj8eyyjGp7yBRZtmwGmcWf7ktqujNgXU57PHbLSPbaMNrZfjvtwWQZ6CkuK3",
  "key27": "c5mfiNifq2tYQ4sFDFT9vSqwgQXQUo5jhFZqx4ejzW9ZQJenW3bDdcxQhEeMvsuFNjb2gkfG3DHT7ZQNu9NoMxF",
  "key28": "3apibhctV1zKS97tXHM42pcpko3UScKHE1bE6ZQ8WmM7ui2gRB5kmBKqWuPJmro6JaupRHuuwGXz5Mu4t8cvaXF",
  "key29": "vXnZFtRztQFnSuZYiEnqb6USGapihcUwuRrUrQSoFmMBWgpjbnTimPHfUUm8jb7zraiUhWKScxivKdc8j9U7d8z",
  "key30": "byK4dVMYi7qCkgf74N1KV8oSd6pSzQLpJLgKYmYApi54WqzXoDChcoXcoYkoFvQeRNKYgoaUYL7zmtFxtX1qLbZ",
  "key31": "4wYgEi535RLeiEbXSrPP4PaPJVwgDzeTUxtAMhY87xkVYN8Rj6iU9d6w9JHrwj7ZQq2mLadxod87kkfKCPR3R4Ye",
  "key32": "V8brBd7Z7kDfyJrj9M8ap9hsTL5mP3Z3WuQzeg62nQkwbJHnPWSEC8kVM6tnpEbDQ8xXVHdE9D4FgiMadkqruVz",
  "key33": "5PdHgprLjTvYudwaNo5XPFjaxuY9pzAnSWpkAJRiudFFXvpYrxjHwAr4cYBvPREDuwEooTM6RxBdyNweVDkCUAx7",
  "key34": "2XPXLxtHvhKecEooCfLWZeoyJbSYnsiDnzhnNHaWuDW9La4Ap5SHUJ8gxkPTweaMcdf9LhMud8MzzrcDf8fi2un8",
  "key35": "2enoqs7d9fdJDcxaJMsspncBTjY93s7SmyM1zKsxWcPSwe5CGGxmJBfkURuRDEBcHw43zzUSQHQLAa6XGyj1u7Cn",
  "key36": "5xm95pjPRs7JsXH7sNQZeoRFaYZ4SdhjhyhJuC8N8bBV9s6zb6srBRKqUSzux5p6vAdjCiVmXLUJjfRNcdP9gFvP",
  "key37": "2oMQj8oc3tSSUGG4dBm11AatmKMgFS3uks29ZjVQCwvxvH6eZc2xe5tNdCYtseatCxX9fHesXcEQmLcx147HPNMj",
  "key38": "4rdbKdfikqXWSNihZhkoWB2m9xBaCLkL2nHfso1TwUC576rKxZn4kYzhdSvWJnCUjXxsRTcpDk9Kbm8HFRD2tZs6",
  "key39": "3ocG7V4vmN2EgEczSTg9w3RHUEJa5eZSBGxtRfRKmj18KBjsReVvGyLiMEdwQ6p2tRHgQh3oWMqcN9gpKLevMFk2"
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
