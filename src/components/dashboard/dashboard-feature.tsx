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
    "4Gw4zafY8fhwaKwaRufCd499RoAqy4X3idjEja6Z5Ho7Ky8QZrQnWUPgHubnU1m637kSqGZdTbCMs4QjZcF2mFUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fbjby81CN9Na8RnHP2bTuBXbFuN71s6C3GEGopoDUDTMXJkLCxLQrodoLn3HVhKCrMaFtXER9LyPJ6KCM6nKqhD",
  "key1": "3nSxLe9TNpUnwK2weYsYMgHKxXi79oQJoAfkfMMVpFNChEG3K131hPUFPsUAG7xPHTrFG4BySHk82rTsX6JZvDhb",
  "key2": "358nKV2QkVfX2Qfksi3P4nnmDpQErn5Tuq6rjDEPkJWXGnHCZts6XAZkVWMeBtyvxEjJD1Gchhx9Ur3Ro8YTuNNi",
  "key3": "4zaiKNdL16BMjteLMy4Db8GHcctV6CnDdkkSZC4md3PmwkNmoieiamMwdEKqAfJ4f2jDwTWRwu9fEX6Rjt9SzEcx",
  "key4": "4bou9GYsq3Rq7BDG2hWts9zRiXBhqcdyJUc3gHQgcxdUB4fJR3WVCTiPqNKMwa8VvHsux6fZLLytBVk5GsdJhNBE",
  "key5": "4Aky3HGTXS5H6tSoCQMFzU85sbbVp3FzfVJbT1Z8vDGUAJXnH4CM6mzSudvSgkmo4zoppGQh8RDWf2ArzTWa3hRd",
  "key6": "LJPGb8nJuusWtGfL1TwHahJDFb7CfwTo1YWQUZM19rT2FazcdZWqsHXH5M53tqCBR48CkQ7fDddLXfLbKuFWtYx",
  "key7": "4KggsdwhKAWweBZn9Zz2agSMtMiz2Rf2tuebaiy2RmyEEQ88bhjeTwHeBZAxMqSPKhp5CymAhEiU7BT2wbgRC6br",
  "key8": "3iNdNXqg1Cp8hVyADsbh6AVCWWbyfkMiNHQxJycMDiVcQ2X8yKv51c3NbCCBVjYNfmeHHaNH6EWWe2A9L51odf3S",
  "key9": "iyBfprZkCyigFxN4zr3RBxqGNfs1yKJus4v7odWPwWsuLMoJdDjXz797VFFn77vxhvXcxf41woTEyhwSadGdrHf",
  "key10": "2Lt2fsYuh8BWhwWJUCkENKTpphFhtK5mAzm8LjgiCKZWvZRpzXXieD2VQW1d787L1b6dvLrgfiKTWpgCcYZedAEN",
  "key11": "3RrdoPs4zmdCzYs9r1CkwDJoZAmPYt9G4nduoqkxLwd9a9vtb65g9TPXtpaGo2cQrHbnf7dJbuqrRpAJzKKx9ZkW",
  "key12": "bybaaFJ3pSiLqnZmcGJWBP7xPGEHUM2SJ1a3hLH9oQQcvz3Je7DCSEV3HU6nMksYvZm8VTzdSQMLHZ4K23DLZXB",
  "key13": "5Cty8A1GYBXzwqVKk174ZKnzGrCQqxr64L2JkqiXEPZQNxwkuatiKncC1DPkXVM24nTkshjSKfjkxcqtgcr6cLqe",
  "key14": "59ohZuz1nLwjehBL8H61EBnhBAYGH5SJ212DUWXQv4vKYhKohDFYaWBWCVmBRShb9DRe9CjDaAu9vt9E1NaGAifN",
  "key15": "VMz8kmB3AUoTEG343Lum5siucBR7i97Xd91WZKekZ1FXqS3uGAkTgLA1yFabTAJByJKCAiLLDvs2CHKzCrEoxGQ",
  "key16": "41S36YZXbmNDcHZMr3wqR9mNGASxMGoqapSQFD14FyrR3AKyXkmRwRPWYmaZCcNCrzFefajaMPPrqsfJ6NYuthcd",
  "key17": "3GnASFdkFTaxD7TGAL3Q5dLEHDMmMsas8sJPgYVk9JVuSkxxYVD4M6JNEuUUWkkdDRF2bmn7LX4nahLtTPHdCAki",
  "key18": "3hKnYaCJaEApbEUesspCYqWPusXtApT7xaqRJnkuxEWpwTUNAiE7medRCjftKBLPQL9mUqQ9TchmkqrYY34SDPmY",
  "key19": "4GB9LVcXVEseA1KCr5p57JeQojS4v8gdDAZNv22s3RSvAJChkMNY4wZ21Z6UsJYsrBSvE5SDM1UTr6s8USRKJyTW",
  "key20": "453gQC9LPYGyktZ1eHMQPYfXzFXQkDssJsZDdEhD1tdkpmW97Da5VmY84F2Q3HmUTpDf6wGZX6NwbXg8K3zhL8on",
  "key21": "2DqeuUp1QZvXCdLTBy7HVw3e7emh1GAS9hkHixhYKd4DTUW49HynePqLcAvLFZhoMh4E2MP1G76fyUpjC9uprV8n",
  "key22": "WApHK5n7oprd3642puUnoYndd6iMCg4Dpu92f8XwX6K7Hroz16VZ6KizCVqKe8RHtvdT9YciH2XbvAEon7qqZfo",
  "key23": "5d45MGKaWQALZb3dqQR3dKkiijSYyUoUS6M1AXvtWwpP2o6rQXRVa2At8L31Pr1H1nvPqJtg13CAZVfEpwnt3WgC",
  "key24": "3jjjcYagnghR9x7nimQFik1RZk1ni7FZfB9mmNVPNz3qnHu1piaUWoN3sUh9WyztiTsgSyx3WFuDhgE8vBGhNYKL",
  "key25": "4xKWGZqtsDuCzgkD5jr2GLiYWMVcEPaogB4bzkfXsnf4n5mkL7tWkprskV1Dp6qbxDqZQoxgCKU7DYDA2oTP83Xu"
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
