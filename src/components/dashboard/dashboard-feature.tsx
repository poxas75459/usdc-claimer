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
    "gBhgraQ3ZjUXbhr8t2HKcHx2H6ZvqPzVFaf3CLrGP5E2Y11JgbDpSERJbVp7Fks2Pd1QqdsCvRCRx1wVCFfMaUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYTqdcQmkd3qNhG9cvBFycKUnrDDBM9WSD8M5Dwcix92ou1uPaU5yvXFqNtPFiYBbdUJAUdsSCvoA1uSKnoZexC",
  "key1": "2mTX6awGWxsH8c9ZJZLHbeVVFDdwVzVFGMS5xQWvPvic3hqvTSer942uxvRUbgWPe43Z6wf6JKaWuX2CCpPwitBE",
  "key2": "52VSEhqkKkdJnSH9dJWD1hPbBJKP8c9LHPtwwXf3d6Vr9CPCg1pvG671rhDbVAhzXBxLfDRFDw1F57oQ2DjCyPZt",
  "key3": "5jRvfuKQuvBHcfnKpFcjLCr2ggDnWbkcDWjDUZS6tWbA3RwrY84LCoCHjtAMzJyc2yds2WLGKaZmop3RUEZTLstG",
  "key4": "2bV2EPY2m91sDBrsabSupyZMeXoPmBq2V3qZnu13AmdtodRpK5V2EfxpwV3M2CZHAASRrBWxGfYRAF35gLzviErZ",
  "key5": "Raz3kcT3T25RpcnABVWJB3h9vWKtU65gmafmLdD8PgUN1npXTSxBnh2qNscTEGtCdihCVAQLDqrwiVmPXiY2dau",
  "key6": "k1Z9hmM6SuWFDhdduMKBHGd4BLkAdZPDPD3xicH7ksn62wqMtZANoKLQow5j9ETLV16U8VKXXbyQQxv9EE87VGF",
  "key7": "5dNbeHKCAGpaxkFxGuu94GGsCLmfPshQkEftpVuVgDFfgnrn56ZH588jH3Gc1e1v471ezaeD3wCRX9e7iCcvxWtr",
  "key8": "2NJiJELTHYxUYQRgBDsuUpajgTmJeT1c4bJ1rwguSRpnHrwgEEtttrg9deCVXcQsZPqU62VHkTkpyeJfKK6uJDB1",
  "key9": "4byWKoyZtaEqjvTrgGUuuVdbNpk6XLvvQGXehKJsACG46xSSykSp9eJUhbpBikgPHd7nNUABenc9YBKnGiYq9GiY",
  "key10": "gvRSnEc5QkgjznniYDnQFzzfHMwXndaRLwYKmDAW11WmKMgVYMapcvPps4KSjbTfqNRegcCRAX9zpGyBF98eyAK",
  "key11": "ywnUDBZ1Fh1N2EuytiCZnEvVQZYpwQe41qN1msGUGZEW1jCwuQ8mfBSir6LwNTXSqRgbdq2V92gbmFNbZAsqV2L",
  "key12": "3AfqMUo2g7TJM91BncZC8dSV644psYev72XGycNnL5f4g4EGouMEctZFXkG5EZ7ze8aDkZTXefxBx5MAZHGpVe2J",
  "key13": "3S4uvCpez3HUnmgp33Z6NPjruX8UMW64DAy6bpopfJG8XkrXqkT9QcBMsTgS6Nc9rWv8q1sPaaR8AMiMQ4uvgdA",
  "key14": "47H6ivjod6E6DXmPeXYcZsfSjDisKvGq6YjX6d5i2ue5H81pKuj48w9nnb4eZBQmWRP1kbE1PT6jSMSfR4LNxPqb",
  "key15": "5GUgT4qVpVJLapiMRrjKvm3aSCvcGhc2dUbqCEWiiccRPEgFcyYohDwHqWoomtMngxAdicfMbzqHAD1Ffzu28MdH",
  "key16": "5pwnFurwFw3mLHAGfBuhGRyfnQPQqbYS8FPszKQbq92kdQyCJ8cQ2GYWijdYKjhgbuPTvk4dLvKtSqswjxuRmJsJ",
  "key17": "5ZZZ3rkN2UNGSYAhutwhoEcDLn6yP6pWWjjFoH3MycM9y8khjvDy2AqQsgu23hwuSw58Sz2M31M7WGBrTrjRCE5A",
  "key18": "4ocmWo28VAq3T5rSGRJGbLAUMmWZW3PnL3U9fXCdohFu5jE7Gq6eb51XhAqQ4emsaDkZhUCvcDnwqntRKX34VgFw",
  "key19": "uw6MxVwEPvsVFk8pqFXFAUzKpfuofihMYXcWX2t7x9ifL4H5k1wigYJkihbJMqJd4KSmMsNotbSQXPG2Nkcvc66",
  "key20": "5EyvRXZfpCnrP4jwf6An2qk39AoDRvSR2vWbJ6VSYKs2yyAhaQSczCeejmB3wBFx14rjxyw6Q9uJBuWZMr3nC41r",
  "key21": "4u3NwdPJb9jFK4kprwdLVWyUuWFzGadBJCY3FJu7JHqd5apMFsxJagVno486qZSGYhg58bfuhPtw3TW11aRibwj7",
  "key22": "3trhnaCp4A6h8P2f9eyN66ch7v7E8Uiada3Vy9sXp1UoWtDDTdb3hDuj8u4fRoYB7Ke8qM9c24cj95B8MwY1ZUXh",
  "key23": "5Fu8BEESyU28YV5H2VjWygJE4bRUBSWebbZhbvWmJugzFm1tcmvHSLs1AmNvnXw529rqzkVutuUYhx8DHB3dzYoR",
  "key24": "4B3AoQj1VH7KPq2n8vTnC322oTEnPkcev6S7PrddmLsKnP8RwbFeQPvrQUPNmpFbqxAuTjTng3GYRxT7gpLxnvCt",
  "key25": "k8fM1oGxxXWf7mhnwi37uHEZ2Yc6C57id6Q3xeqdTpSBtyqBzMWfhyjRU7ax8P4c6ceCCVhE1LYtQ5TrPLG4gtR",
  "key26": "37CMWFvTJ5ZJAiDWy2C67fWjbKhwgSGPqkHBufRaE1zUP8mhhtLFM1KPytUPi5jfCaHjWhMi1GjQq2bwUwBAWDxm",
  "key27": "3Q9qFzKzAZGzgcvM3aJ564dSs91oe1PeuivKd3kPg1RxYqoDmB92HGs7oH92485szjgtBXGL7q8N5yfKH2kncx31",
  "key28": "sMYMJkRYEhojgYww3CmmBRPY1FEyehFRpcE473EribBpmsrvXCRtfSqSAASoxa3B21YXyjqFgqR19cHeK6qz9FF",
  "key29": "yqrPKMu9PgNhmtroJFyqbwbQG6qHdbQRdJtHnkLXCLskTz5vPFkRrfx8i69z27NS1YXzhnQA3bTx7f2c8k81Vb8",
  "key30": "8sKYoLUiBQmn8NdHex9aeA29xoGQS8AamhGhAkyeSh5R31eZZGXmTdSAJtyR9QRroEoUpNoTotdjxW6fQCJBg3P",
  "key31": "3P5D9Qh7VgCfR49PJXwcBv8p7TvM1jmmn58X1CcMN4h9f82tXHtXoLmQkomqDKVWELk6HFa6YMTTAkUC9SSgztEn",
  "key32": "5BTiTa9TmoZty6wNrte7kCBdnuCtp31YDS6UgfWpywb1ThqF5hMP6rtkAxjzTHpQtq2JHYe3QG8Y17YNaxp8PiSv",
  "key33": "tYwc8wdCdkReAR44hHFYAMVQA9Y93GQ1yfj7iBiBKojdpDXpLELTvVVERbuPySkgmmNArfzpUn9x7jC9BgMMHPT",
  "key34": "28HoXkboFiBwhbpkriWuYSMnK8nasc1KLUQRE1SEhxQd8nr2RkRPcFwomPGem4rWiTTiUgFiUB6SnPYbvydccoMn"
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
