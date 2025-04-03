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
    "aenjAygj4wNYoofJeTAwBgeZ4hJmtwb3uFoN8f8aBtHXsNFUbsJRitPqJrfoMGzBcH2n44FJW2UR7PafmSQcz7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2nEXEXnWR24HEcPjmtjyp7YodmCf48Y7Y7KezEhKmdB4CJSxMEGfZ99YmUcuVxf6cvs1p7TXsskFn1B7Cb2T5u",
  "key1": "5WFwHsMAQqzoaCLe1thzeVReTBV47D5hrC9QjKVEBfjAYnZBdSZuiSvCt2TNzYj8DqP5aMkUxeEAv5iVsQSrHMA4",
  "key2": "4GUZWeEyX1ZbhCTw95aEdGbFHevuU1aFpVkkBNgyMRe5e8sw1Vfm1sYf7ohWgrWg37gDSsNS7VPe35CzAhtXiCA2",
  "key3": "5rWhR3E2rH4HgkYvhoDSJY4N78h99ko9QG7afCMkH8SqaquBvYL1VtNng8JbkXPPjya787RLHXngjFdciU4rg8Lu",
  "key4": "4pR7jSfrhD8zNEALKbLRneyikGBUshciovTxngEs8fKenDjAVhtfFYr8uwV1VJgMgWRqZTTpibM8dNdRQQ7UVYr2",
  "key5": "5DsCzCV6wohoS5rZ412xsYC1hsSiSMUwsw58goWKTxia5pCE6uEypunX9vv7VZpQ1oUM61yMeJ7DrjM1rcdfLrgA",
  "key6": "2EMKgXGUc2uDVk2hQg9Rg4DQRCUSRUKadMmeXsNAkWiSeMRg2XHjk8aRKpjoKG14JNBNvWvpoDtkL6wrtCvRygKW",
  "key7": "w7DKHMeXrFDEwJ2Excbjimtfii2vD8HHBQF5ydYqoK1yJ2ouFvSGoRUhasWxNd18xfD6u5ZgCW92FSd2h9TDZFS",
  "key8": "54HrJCRqrKhMLQDsVQ1sibhCKoEeQynGqJqi5remUZqNx4dN7tJsJqWSgUUXrCh4SNAh3aNvxJZQRprCW6oJaorX",
  "key9": "4MzYgYWNmt1hTQ7zrxMwGsF36V8m81vpADjCahT17ggji1253ioRo5cBTnzL4VPWNH8tZcjXFX5oAP3u6qhCkMW2",
  "key10": "3XqXydKVarj2tguQkciHk4UEZdfGJjUm38ZZgZ4fnpix1YdcQAoiBmLMBGibjpHNbd2BeHZCDyougNMtRVrsG29D",
  "key11": "32jndnouvao6EiPqiFkoU5uZMp3cH9CyMQpPyNQPhg9pcptaq25gTZKsMzXmqrAgcABfVnz6KJBUpKwaFwA3qwZa",
  "key12": "2ti25wTXG77X2VCAC8VW41Gm6nZVh1b73yhwtzzj4VuBaYExVyB7q7of39WdqzW3Rz3sZwimUA1TnZSs5CahGRve",
  "key13": "5RhGzrzABeQ7amF3EnqmatCyyXom8cH7uYXdB1hMvooCWSuUG7zgARNSSbfrc5fwCPfZviFqNXGDD2wQgQecdSkX",
  "key14": "2vP6bZJDb4wzimwYm8aAA3eFHBV2S79Y7CkjMNtYSPUCG5rzZnqfXSjfVkDxsVriphN7ez1cp3zRz8rpNxncgoHX",
  "key15": "4dSZRbitCuJsSGw9Q3HmEwo5kig7CTE2wnacU3ijVQXGLFRuRZegagU5ahj365ZjMTj17NsWWE3eYxqAHFtxRALa",
  "key16": "3jtf7Yc7HBUp3xJZg4mWHC7YcwPT7DcKq8y8cFSZkeKVDKjwtCffRCJvp15C4gJH3MurQC8JNBeaMNDPc4TNAkxV",
  "key17": "DAKMr6FVUXrHM1a9WXU6dmdTngzHSHkkGJSqPCF47dSqCLnGBig2XzNBqbnyt74gchttsKkK9oeUbuxypLZrcdb",
  "key18": "55Konhm7VeupB5YbaKLNjwRjWxVo54EtZYyQw6sv6ciV93ZuxVDbQGbNMfQ4ZxhkC6otKd7aewehQuePbT8vK6Pm",
  "key19": "4ncV3miAsyeVuXMWRoHdcfnTZQYgVxVdDKJwaZrfdzT3PHLfCdL6dsNVvPxqsDWfFQ4Hr8VreU1bs265xDtgNc3Z",
  "key20": "3DtPzGgmgmncPJKM6CfP3n7qSVcZ8fuftMUfCJMpwWBDkNzcgCKvafEo54XaJVsFzk1BVeuSuCkg9qf7PHbbD2rM",
  "key21": "4m7Jjx1wMXeb8BXMMGPFX9fkpjGhHdMd5BY1qi9VhgihiBYQL95UgyK4xa881J5FDzDcU9J6Q9RGFyyiq8xQJ5TE",
  "key22": "bdK5xQYpqSwRb8oopd2kXkpV7a8TdgozHC9gUULYmTvDPCsiYwHs5PhxEgwULMoxLfYbjKShrGWva63xrkbJ7Q5",
  "key23": "5BKNvnZBqxNC9Jm3dT7nVJZhmJJfQqShviPkZ5YmPpSqjebE6PEaF8yxSyWAgra5HX2DwC2oCMNQxpXkaJVy8pqB",
  "key24": "5zaeuahV9xQe9uuvcXDoXW9L26ADGXgWkTnzFaLXLfjggzsoNUPuBu8daNoatxHLRHHg9xCDWBdWRz5NbkfkVL8E",
  "key25": "2Fuo3wnHbwPTw1VK2YaJRBrKfXFCSFmaZNCG5sri4fxAKfUodCorX3B6U9zDt5CZvha18KtGWNB39kKWE6wMkPfr",
  "key26": "3ctShGi8PmpWRU5TYz9tzKUtJ85yyFm7fS7G1bhorV94RnhDwost6iJ5D6jFxgMNohetNaLePthX5Lqi2D2Mt2R7",
  "key27": "r7xt4aLSYjDQFsVHZgxaCbWu1YJKnNngZYTmTHejUM1Vo4bGhd893mSTRe9KbLPtTChxDNzRGVmGxbGuSwtcuMC",
  "key28": "4muF5CTosBA5LmGdb1HeofY5v3JPwG9bgDNt3PkGmBTQXh3gcxsGbKws67Xr4Qx9Ye5dd4U5vpJ8BEcaCP3ocT5H",
  "key29": "CcqZay4eLdNf7666jDCDQDPq72dvcjkX6c7QPbxVnjtEbE29erx6KSBvKJyv7A2JCeNgy6pyrS74cduEzZvWnKY",
  "key30": "asuosbuzkk1y2SDtkDSCDptR7exeJ8idrrnvpTP85qrn5pKcXd5k3Hb7A1Quz2cgcUG7fcKDEqpLU7jbjiEmc7r",
  "key31": "5j3oo8ooatWe4Vm83TLcwRwCfNhYVZ4K8nswkDi4noomfrdBLapVJ2ZnM786j35hMYr6UEcRVshLtbcq9aANbADV",
  "key32": "4sKxzk5TCNLQi4qCw75KTRm3f2W1F677ViDH3S6ZQwj3NczAERuXD78CvegDJx5duXGU3VsX3QQxfyDxn78qMeEt",
  "key33": "3BsiP8QGsbTFJMJaRvNGR4m3dMUxzpEetZfteBU5sCYWzq4NhPVMtQvcECHyu8VnHsYjyDZMDBejhyzTmh9YEaXi",
  "key34": "56x1D9Tqq1VvahXRP8nnSmDn1tydtEKazmhaGmG9B1nwrEfz3yiMgfx47Lb9XUd28WGBNhW4bfuSRLdKGHevRgP9",
  "key35": "4TfgLHme5BaDRMCMAc4h4F1ejErwxw7kxs5ACEJSMeyAMLdJh2piC95T3Fzz2LvrfpBnn1x2JAZiHKMKhJW1SVX6",
  "key36": "5waB63VZX1pNRrpuAkako24yR6jk2hXeze6vTw8P8TCwYzFN8aJbff8wi8R7k12DqDENyzSRvu7TptUiLSwXnDMs",
  "key37": "5wdE2WLy6Mqsf9S2PbvKx7Aevy3DDH5BGGHPUSRVGMCGYbRwa6wUjAAZiLyjJF1wJekD1sgHbP2d36ndtFbxnA5e",
  "key38": "255NwbU1GmartPdo713eyXJrCpueqZKWHtLYzsTjQAkdDN8df72HxYVYP6awZt5YUQz4pEQk9mZUBECZk32gQUGc",
  "key39": "3PXhBCzXJrNmTgecQm94TTwcVQS66zU6mysHN9mwU4FTSoZ7sk2Rpv7zNnXBe2wuUTUgATA1zZKmRfwDz1aUcDC5",
  "key40": "5BEerxj7qTG2MyEjiuFtW4L1whVwFeJ1MHPVntrcJq4VasDrPRYw8tkk6fZvfFAamrDozazzEGFHiNkeMeW39cNc",
  "key41": "3yRCo1AGChycwdYjvLAgvV4wakAPwTLzxAnUeJMJF748GPScdNFDVFLbKqbP5EkCCywLtf8xqWjGibU8wfWySmXL",
  "key42": "2pS5s5x92bimSQnQUvjK8PrkjKQkZb6SbF6TYeK4hv3aGPhcmzxuKGrXbDgmPUQ1R6kE6cgRZUmRqTzufTn22Yek",
  "key43": "2FeZcQCWxzCs5K81eqSFAGDr9DLGBhTu4akGKvSUuhtTp3jZ4EDbgH1U6rvYt1JWAqxyB2HSyAvHE4wzFKbSAFUN"
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
