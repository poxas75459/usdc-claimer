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
    "A4KF8yosJYDTXSy2WvQ2kg9TxbquJCMZTfp1SKd1wMWkB4n4FkYWvkwQw57dspYCrj6Xajr9nmSothsiQCUTc8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vr2F3KMBP8PLSa6WdcHN2pSsSEDbdTFCuudAumYucp3RtpE4L6RmGTrvvJhkpKz4HakgidchVpoMTdjveJLg6Xa",
  "key1": "5veEhtzs5wvjYbaTv5Y2khgQ46r4oQj5zjuJU4ZrT2we28BWVVTpVbRgnrXUiCgr8MAWimfkqydfvnDjM7yUJHSq",
  "key2": "BqGAj3ejgPTP5TkZRR8N9ooZZNeGuXCxnVFdzX9iL6wkpbGALnwzDDgQujZQm3v2ACjSqeJj2hUUFJhkFiSmLxv",
  "key3": "3XqbJ7DoCTEp8g5WRDQEKmrbUQpayZ3Xjq8D2vELBQsygCAU3TtM7X2Ghopgr5SHX28jrxsEnQvBE4RCQyLsxFLS",
  "key4": "65soFtcLJgfnyGnARRivG6zHEumAXXnqPkEGmrwwdjNiu8GGrxKPz7JMqBQ5FBAdyQkbZk73br2MPCVbVqfiUmFV",
  "key5": "Gep6xSTV7rfo3x9recB31e7j8e1FW7zJs95tEZF3CzuyJcV2rbikdJWB81uVQa7cDAVsaDFL2ML3JF3QsyWvfsg",
  "key6": "4Z5PU8wwssvjVTfRVfdCdVMiaLeReetjBcXmngYMsRF1VzynH8nKvxoJfcUZeCPMrEQg6nGzxRiq48wigu3ZmEuB",
  "key7": "3Xg4R3jmggrGvYn937sDtPHwfVSzxLSd6P4b4mNEEp2zkGYHXiTPxPZz8CWdJP42tHTwGs2e847W4RX3QCURhC6K",
  "key8": "59LBycYD9GgxYeYzgdCoKscBeGbeQKEtuSfGK5Mmke1bocev1bGmE7PmFxP1SnEBondgXmYzPCquv3RSTXnELytL",
  "key9": "ps7C2xtwYTNpckiL3koGSR1SvWxGXqyccmeLpv5yvC6AzuC89PKp5LrZRV1fdFfxsPQktC18JAdXnHNQTA3BftR",
  "key10": "4F1Z8YaHuSw712KrrfBJvw1jAonSzFpA3U46CauXe8XLwtt51z139vvJ41gARZvEpK4GpEErqtYHGsCbCi1B54nK",
  "key11": "4pq8hzbxmATqhMgWoRqsebkdXs2yxhJHqh2MBWyaxuuc9tz51kWQ6N8GgCQYUF8RNV8jcTPztfaYETcyysdRzapE",
  "key12": "51yYWz2dJwQT6xADLtGYCedZxKiDdudtnNCpPrekUUDfBye2xSth8w4KbKZ76P1B6ZUMYgbsKLeGn2LspvpJpCds",
  "key13": "5GeMAr8HjEojkKd3mSioWK8sA77Hxo3BWgmqb6EZGPcaRr7P5RjWkgY6A8taYCDomb6Gf8cSiaKw86mE5LVsrAwY",
  "key14": "2GWPmCShfPzAW2dRLxXC7JyrzBp2WSY6iL7vZnV55gR8gJJhETCgjZeLUwN1hk7rAeYnVYKtMJY46YKCLXoH2Usm",
  "key15": "2U7bAair9d5SpUF8FS7r7jmm9dj3qzL6bwVujQsw8XpxHEHHPSb4JFaoFyEMQZ6JXzQt27CS9CnagcAYTghdGAek",
  "key16": "2JH4i7DThaUh6NbrShJqdQzky2XjWXFMbbbtEDfYVhrtWnNjj55NSeu5PeZEKm8jQ75869nLTDrZdaPLJdBdqA6U",
  "key17": "i5LR7C43pV6t3EWgGN9QUsy9XaY3bzD3tVgbFgxjj5Z6DYgcbtyLTAUrcUPUkqPH4iSmphECA7RjFYbotv4ygPm",
  "key18": "Tab2p1a6V6PHYj39914zWw7vXf7YdkpcfYKMsoqwSei9xRwU8TyXtcivGUZBxB1SKevvtNhsh1K8P6zo2HPDnqL",
  "key19": "s4YAWu5BCKTYK2Wgd6mNEEMwc6C2kMr2KnkJJEMj486BFCpGRqY3EDPuVqun1L9Y5obTff5NYnA7F5FY8w47sRD",
  "key20": "4Mb1CXv68kJ4kA1ep6micHpCBN7tRH84nyLXYe4gMmZE2oL5zmvCpps8feUanJp82SB9PAK37Yz4uhP4irmD5b4s",
  "key21": "4x9rTzLqKx1FdKZ6LRqxQaDnMhS5nuQK8PdVWBR5W3fYRhTqhoif1k6tTz74deispe1gVxbVs5JANwLtXwwwV3Gg",
  "key22": "NdGe3bJDsuR6jCf4nVHrfxuBe715pfXwL3mD1k4QtvygA7DAydhDvYd1cgbnj3xLkwbarMRVkS8ruAzLpPGM11Q",
  "key23": "675cwMwfX8oPXsYSdaKVtGpn5AzSkdhhYCGvAnPLVCVRpUVvNYQzBWXKUoNVavvfCGdRS6wMiPmeg6245nKUmV1h",
  "key24": "4NZ9BmdAkCGUtFGB12Q1EpDWLA5iNiokgEHzhWxZZTQUgB9KcvFkz8m4VGcU8NLK3URzPFpKvcvUQWcfy9pq6kCb",
  "key25": "22VYS1RnBW4xkm5RnPAfPgfXYWCAVWpzEEQSzGrktPAgKLeGtcXvmJsPbMpdof6Q6xLmZQs8coAzgjm5Cxn84npm",
  "key26": "5kGUD5Dwmwo6hspmFXfPmBsx6WrSKYxiB753bVReq9YfotzJ1TCAupuRDTGkHeexETGcz3LLHVQ2DZj3UMdeRyfa",
  "key27": "4fCaaPhBKHxbBkjVoCT7x28oXpzzQBmbjsc5zKvL7RtfiZ4hoWpb11WFkeEznUVZrMAbxu5xFaAK3W8wAiPd7dor"
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
