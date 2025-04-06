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
    "ayPdjAeefzEgy8LAZhS1vrXzjJzTYBWwWDu8zG1PKDBVHKGAuEfDRhKCgQeZpGdUKmQvyYZg3w6nwds2vG4Bskp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WtmzjddPPGNzVEyArSCVkv5RsiDjdiCyXKdXS4xZdVvhfzHEqrYGS9KuTBpSuhRfh2aCGhStUPkpF5ek3NbssHo",
  "key1": "2mC26JqmuKcJWQL62M7tkM377zvZmwvRzFuh1fq2r79F5TGT48WeeWgi7pvaA47p4MCCRkBZxt5iYDw3LECozyPa",
  "key2": "5FQvAcQQ2KFLQje3u1d2LzgudguEYREA38ifRjoyuP6MiBkWp9nCoWuTwxNQwrrMk9sMYbEuT1e1h6XwSLWTXzZA",
  "key3": "5tYDggBTT3EcgHFuiDh4vW8d9KbU4A8o55UqdZxtKUKr9PEuVvEafHxu7NV9iPgcgHvMUa1QGKhN3erQTZPuDhy5",
  "key4": "2LLkEkfFFnPCdKPxQSiPWaRnqdyjeFDYfpQhYqj8TbXD4HBVUD38bqkYS5qktLVQ5j13Gh78N5SkUp97Y3j1sBJ",
  "key5": "4YwKYusPCcXtc2HUDkV6LWH1D6dvBeEQqwjs2RVAjchrmbfPww5TyGdirtqhCtNBacfkraV9MWyJJZuZfACNHY3u",
  "key6": "4oYNF3CFwdPNCG1Qm3xDMXsXmgpiBGZnE2daetDQ3r83P3q4tZMpx45rH4P5RNCzprYwgYDbVKceGZyncssij4fg",
  "key7": "44ne2aUoQy2Bch3YZL2op4p2eTRFwcK1Dt2HBfyeAF6LAU7ndp3iz7aun99f4mjeDwJ3Mkdss5FjU3nJSXfkEZs8",
  "key8": "3LxuqtNsBYJ1uF2TLSZH26LabauvgQ1tkqoXYuH8DcjANk7KyKVEzzU8FWFXNVY8FgT3jo55BiMrh6ew4QbW4moJ",
  "key9": "3vcAUuUULemv2VkgnmmkqdkNzx7H3Ny5JPu2QmraXjPt3EqL6gZNwBaFr4246XczHedyocTKXtdVKFB4DHrDJkBc",
  "key10": "2ry43JVJS3XJDahrWjy5zRuSLCNDgaGS58z4rqXJgP56XcZ2yL5ykromqguudKGcN2qwGkEAHN4mpY5CYCTnmstK",
  "key11": "5ZQQjNgyfq5w1LpwdpZ9gDxVCMnBj3da4SUZsBqpZDUBdkex9QGLgsKRRjqbhs3RasT1QQnYFWdhKAFMqcKghLVX",
  "key12": "3iZ4JPMEywfSw6irMFfQ3zhAY1AdoN2mwA58zNGSXuykGBYd8B6q4Ku7kBkj1nJJmdujpPLgWonogMfyF1VNPQig",
  "key13": "4T3ArxYiSrgSRCiHLbraputb6YHPmKFB7E3SqB98Kdf6VVjnHqZEapEn36h1viJgTKqaENJMtZqwv1S8PVXndBZR",
  "key14": "2EPU9Gj2wuNZyaDu4LUoxMNsNy9oVNkWQG4hhDVM91b1SDKVcHPQ9UA54bWM2FPSDsC8yyRofMYaN5cAC1ojdVuA",
  "key15": "5hV6PmmW2JjqZho6tVAJc8r8LEehRiM5316hiDdS7AVHGfXyZLprHzC2h1P4MZ3zNkfqHr8xSmg6J5gGiJXtZUxy",
  "key16": "24iEVPzTBUi2izdg5hdyFxRDSVaMaGJCzJp4xCVXvrsfF6XCF6a63iRnUyFAQRc5DeZWWb2tVRj8bvtvDLSFVJg8",
  "key17": "38ee4TgrbFekzGZUKUqTebKsGYZ2doBn4AiMkZPCPt4cFAkKNw2JBvcKqxRKSaGmqE4G4h5nJ55wQs57vbAofktq",
  "key18": "ssvTu7xVQNi1BEqHjC3bN9UjP4eKiBPB2zRqMeqtAB6yZ3aWSguiwbhtsU4XKEXyWP9UL5FGPpXznpJThCwnY51",
  "key19": "4k9VRxQbqGyAcpQ8RzRT8qk9qzkXbq2AvpZmBWUm8GYqfrv9t5hLLJ7ovAvPgS6yA1L4tKZWp4QDT7nTy8KCPYSK",
  "key20": "2Vci2JedLCYUp5Q5FXnTKMwxsVvXurUuGFKvSEiHJANf6t9qRxctqzhhynKi2kaNKtUwzUqyR5yus5rdeRcLVhkE",
  "key21": "3zDaQ2hrszirwWbkGndMKouVSVvYzqSYMNomDsnwr92mdEEG2j8BNPUdbmge2Wb59xvRKxHwro9zfMFarZ1TTdNh",
  "key22": "99TAGsMLsq2pUzjXC3KZABLSc23J1oCVide2YwD7Um3c1w5NDBMcP4TMeTPmRGbVz6uiCjH6SVD8Ethkgwp9goZ",
  "key23": "NfbsL2k3LcxEzuYXWhwew3gYpgfktEsKQ1u7CdgfFVZLGBtgWTqcmxjhsWqHs8sehTrGpwbs7mwYc8f3HDYCwxn",
  "key24": "24pbUUzpSqpbBF1yqYReTPAPrUUeQTzpstHFQVJ4p4U6a7T3HLE9up1kRtptrRVtQ97mbHhZ7rTP5QtpgVBiTybM",
  "key25": "4rkCxjY6kyba3BEyHUVg1qxbFmnWWoJjYKQX65vUUHspHVLj2RgbtauvxpaKVNNQ7RszxNNh8iztyi6hbstwrG12",
  "key26": "wz8dnPTSvdDPgFu17xzxcECLhaJTCaz4xZH7xbnYjP2pBCMu8q3AhXcvkRUKGRvXjXmxf6KWueTqCwvERNJDJnr",
  "key27": "5rREcywHhLZRqKh88TTfc85P2D5PPZy2tk4rT39wHEzgQduyCc59LccgLcvX5dDWXCTmncfGK1AM35tDrVt23836",
  "key28": "3GLRogjNPHof6DZ9FdFKBVDB5hvpcnjZ96jk3kwkjGM93sNuv9j88nQP84tnzTrPJrZtWdum8JXuU8ge1ZuzCWMi",
  "key29": "y13FPGtpmyUUWQAtqELSpo5UHpvWz6qHfte2uRfBa4ecLtNfFXXRLscpXdtPwSFEDNSfiY6nLucdZxpCvamxaKP"
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
