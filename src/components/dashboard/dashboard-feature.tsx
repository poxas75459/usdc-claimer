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
    "gZxYpBRbwTQysGtjRnP1sfgPm7uiXFzZuvJcJNr6B3PXgbzR7YkHnFHeqsaEMg56xFT9K4i8P8eh2MAjU4ggLub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wii2c8uZrodeHnMHGmv2xw51PmC58TLoTRd6Qsoa8KqK2ms9JCfK5hUqPADdjtx72qgTPCiKWu3dWfWimMpsdM9",
  "key1": "256PY23NXU9XLuAvPdNMzU9vG8EyFt9JuVNu3xWEH14mD6DqxgZa3a7TEcyzheip4Aomb7wMtgKBTAKozXjfRAqR",
  "key2": "1Pa4TigHufPgb7tAQb8cju7ygwkRedZ5dn5BkLw9eWWEjs15GzWnf39jRdMW261vnQU5NRY3grG14YovDnW3rYi",
  "key3": "36ybGZzUbE8UtFyywETHaQQFVATtKYdBevhxyz5fbkoabHVnYhW3ccCpVLbuH6ehDFHf9x3xphhXfL2VAM39ZPD",
  "key4": "5e6cVAKWsTafoWAVgzEH55ZYheVccch8GL8nheKUoB1PRhoPfNVLbffppkodrBcFsGoEvhMDBiqKKudem4gWLsMW",
  "key5": "4uj7DDfbhEtTV9NHsRRzpj6GtDTMGKrZaCfKUxESbQCe9BaTSz4rY18rwmVYggBWA8fLMrR7PWLM8JpZocdypM2H",
  "key6": "2Q8v6QS4sBN51bUFt54h8564yJ8v7shQQaWfvg4Q1hZzqA6dHrjtLAmyrTRZVKHgY8NBLxZioTfvPFZoyEV3D55D",
  "key7": "sBuhapGLNvucNnP7jHJNcKRdseKF3TB4HLPr83gvt86jeFjziqABh3zgQw8j1gqMJTro4uSQ7zYm9bCX95wVjQ6",
  "key8": "4vXjVh7viY6q1ASCU8RKnPzLLjeAGbYwrrTGtZxX6sF5ia1KbW62Rxd51A6ThaE8ai9PYzspX6V32jtkxAgzKsHc",
  "key9": "5DT2rHifdr9oMJepvEb9AosQcWL4gM35vR56T4MgJoDFxD9W11GWinTUnyVJwH1yb83MczmKMso5UnAkCRR8G2q",
  "key10": "3sbdxmqgwfSbfc1Dmoy8mvKrvXf5FDfyJ1ALCPGXrec1sWstknSPpMWN8q8CMT4j1A4JRk28QmMAnQq74BZqpHK1",
  "key11": "41dqLwkTnfnntWkqEip4b4naqSkjWPCZ2CAarKmPL96KTGMJSXCAPVpqEKmNthoXJngTjY6dw8Ms4ynsPjXYju3F",
  "key12": "5mTViCUe4jMU4dg92egxhVLAzxyPqQkkKjYLG8yFycDsUNbTWQteEcAFkMPAQMwATWZReaXywGv2BrV24Y4vWYFu",
  "key13": "vk1ZdqdfCdKdLqjpNspMhCGFcrfjLaGtLFchUgybSoiySbR5pfHYE59TPDSjJ6YxSSoz41Dud9CUhz5vYGG1muX",
  "key14": "2uQcpgGsWVo568orWn3jDsLsrfxNQuBwK6u75j1RWUeucMUCMp9uTyWTTZ3GLY9zQ6jJ27qekgaWgDdsDWfhjgMR",
  "key15": "5ytWGmCydcq3G4Uw3g8qewb5JYbDDwFaFpQa56azm6z1tBxoJQhpnEc9ko7q8fX9hLZM7V9spV5K3hWdSJUi5Mmf",
  "key16": "2AykBgong3cd29LXKxrgiKrqjs2dMAbxr8tAWRwscxLGT5egVKDrWJfiXL1Hh4wVdiwpzvdZmZzB1cD6E6RgR7D7",
  "key17": "5kXcoxcjMK6yiBbPGyGwpoKNTFEddYotq8SkegREGWQpLHvoD2rbkEnmnwG8fLWwP77VsUrJnuMMr8MPyb2r4SMW",
  "key18": "4u1uDZts5A2D5qd4pJTKo7JMtXg2ZGMc18hPDTw1gYfh5RcvwrHwk8Pv4Zois6hhzmXjGMTrouwr8n9KiGAALF6d",
  "key19": "5HB5VpXc7qeQ9ue9wg2JSqrWdyk6JZewB6UtP1Ay9o1XgYwGrb7XdMA2RA5jQruJs2kX38ZbQqwo9mZqzN1R6H7h",
  "key20": "3wyWbeFcmMQtDrBvvMMVXFHxa8FW8xqevxenZTj5xb9wT6z1ME3BS1mgxXn3GWVeHs7qqiCuvZSJAThirYLjVqQw",
  "key21": "3rp6fBDCUZUjj4Cr4abCoKAKWxktjcu1q1eHrDKFQ9fzXQCUQ2oeiKqHxJ46WBM8FXed4wySrMunpu3PWDSjVBuT",
  "key22": "5KmZiKi6U3n72hjTr8PTbZb8V7Ppw8DEkLVSSc2XLc7iTrisN7bd1vBremFivCf2cLnvAWC8A8HJXGPwgnca8Dgk",
  "key23": "4bpK2KpcGixM642Gbz6Vb6VKGUoWmWpasbJMJUGJHWEoV4cp4avkdEFFVbbD4V1WxUgeKwk6UpqmNxtisTTKoi8i",
  "key24": "4LsY5soqXP546XjK4xmtvLvxrgSCteDvtuEt8VpA8Zmdfgpy7n6NQAXLjPSYNt13ac4jFhX3x1soaYc8xaMmzDU",
  "key25": "492fQMWJ9SMDaYhWeb81DpiwA5FHNrpR38iXmQZaBKBovVuq1hZuNgpP6Z49zzDYAAhP9NmmXdJi6CvkLD1JbYQA"
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
