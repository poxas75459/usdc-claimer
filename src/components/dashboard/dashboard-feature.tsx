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
    "4Na7vcAQeJ2Mnes77oQdk21J5QyK8RSW65rfxVH6FnanpAHrKC6m1ErViBnt2wdsvjjmXGtnt885nfkGkgQDHZ4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQbD2sYy94uv2CUa2SFnvqMsUPcGmj1ej5kCcJ8rQfHmGpkj6kuBUQwaYJtAvXbVCRzqwGauK6ufQw1TtQYrVTz",
  "key1": "QdsgwAFct4dJHRZdVFoE4tnGfQRuTgBDAXVVf8VYtCoBXb2zfHbKY87h8JoCU3LGCWHPrKPveYj8z7Q5c82sA6j",
  "key2": "5rPAmZddquB9pLSpBcr94Hk3a76wtkMvkBixUij9U5drTQgM73G5MjN9khogE1NLv8n9wUh3b5rxXRYGbThpe81D",
  "key3": "RJitD4XHo356FdcPsxZ7xJK6PVkSZdGkryuNbUJmM88dQtvWPY3E365eqiYwUZFTetmuYmnwoyokFaxLQgm4Xc7",
  "key4": "41CRkxGhX9WoRE3ygYrVcS8oWKuzwL4xKrJQ9bs6SZFF7D2UzYJXD1DWHFzbDDvDZuqNUUmtHkbd2ZmqyNXs14Tk",
  "key5": "27cLRN5apEEaNkCSAsoC9zhaq1Xki6HtEwYvF88xCNnMBrLSBjs419CyvHkeeWURNScrG82HzBiYPVPT1FfCG49J",
  "key6": "5eSQTHtyGYA2ikkFpCiyvBLaTKrjHz41pg3VbcpigYza41PQx7Zht4dqdTcM9hXsaZ5JpiqRMGbTyrCYspD3eZkc",
  "key7": "5ksmR9divAruZ4Nqm8bJ2nnNh7xYSzvK7gw6SHSpHa2Mci56XDYzA3mzaYMWFf2Pu5FNPmpn1ua6Az3S5wSiK7BT",
  "key8": "62jsMd5qE3Hja8pzaFf2VgnN761XVBLBMFHcgHmD1BvZ9E9CzQLqLLcDR2mPEouFcY7fPZkQHscEa35ZcUCPxrVF",
  "key9": "54MzgryRZAkmbbZJQbvpsS8H7y6Ez94pswiPQn7P5etcsVUgFF3vTnZNebFNPbgaTscFtsRJTaGfLWVuduvtqYJB",
  "key10": "4oDQsRJfxquQWXrXbX23uSujyevxZQLXYvfpguFxpfZwXzHRhAJG1zACYfYEbGas8CjrfDdQ8FgEazdXHB1P2ym2",
  "key11": "5jLPVjpUJkX6CQbneCKoNGjTm9NLs57joBxwfU3NYf6qJRafig51RWfMtWh3cuwtKJ6H1Gqm3sHszvGQrXeTYJH4",
  "key12": "2Kircisb6WheGGHxcwwzMXu1X2wLwSnPCCZbpLAvjPXDyFiEReVoQbnUNpcQkeN4bMu2Jt6CvwH28tiov9gZ52ng",
  "key13": "2ND5wSthBH9SHdW5DcrXJqVwTt2zVF1QwVt9vHj1SMw5UDfQF4cjgH4mLWaiPNvUBMYwUg7txkgQLTK55tVzm7YR",
  "key14": "53CmUnTih4ceato5oGrdQAKUJ5f519a15zXSkRumWJ5bxh385qo8MyXGL2iNbC9L7uR4MGczmd13tWAhMWbqxDrU",
  "key15": "3JWHb42UwUwBxJzvrgetAenkxDsXuVgCDwtQScS1tR4z1WRgL2e3cjaHa1exwU4fakzNYrJ1fd969sNYL7Xk3Rt3",
  "key16": "34sV68Udm7MesKr7BgeDK5torSYGLWGMyqXrnxQtpF6Hn5zSTYACPReomRKqz852wJUbgTxXgJUQisi7jkmmHjCF",
  "key17": "2XbBzpGUNCVCgCTK29sSAzgYuXouP7nas5yjTsbFx3tMoTypnzwDjLiRx6vR6df7Q7hPafsmEqC7UGgjqRfwZg9d",
  "key18": "4DtQnj2hY7ZjZZfZ4u6Grnmk8dgF9yQHH6Q5yKunUja2EqDXvcp9MoEZ6gK7De1Ff2ug58uKQdKkzQwYf3HQoP6h",
  "key19": "2EZReZ8raxFtD2tTXrE3XdZGLi89o95sMP354S1MG1f5y56Xd5HSZZzcvN7u3PVqmLJw3yNMf1HR8cRPrsCH8A7W",
  "key20": "2wD56N5iqN6x7eYYNL4aHVU15pkVuBwHrL49RsPXcqct88x8p6PtSf9dg2S99qAT5miPMWcSYw6udSuBJpzRorvj",
  "key21": "3b2Mww3sn2MDqt7sRXq6mN2tSJgMNtpYcLxxqB5WWvvWsBSXs33TsMXDuk8jyX4VdpHfTK2h9z4P6royC6G9pgpF",
  "key22": "HQSRBVxHKxFNPNjb6HXey5Ctd3JiAQrC39mz9Z1ypAZx1ZnQNLQ3KZW69Bryhtcbf3WZNBpTyqnEsSV8qzbAtc9",
  "key23": "41UMoPhLLSjfvoDhgtvjQdXzejkc3tMw5d9mbYVrCsdECBAiRSMrfPkbRFrhemwdzL7jrB1zYWH6ctrie2HRoN2U",
  "key24": "5aqDvksYHoS5h9rb2PzP6iqH8N5ZYvRWnCfwZoXwsnmHBAc9N26f29K1ajVo9DT9nvKPGTLT6BDiaaRFBj9VJXcV",
  "key25": "5Jg6KwP5mfRAVyGGrKRBe4m3G4X26kaECeiH5sTnFVhtpvtHa6b9xXNbFWhq2bPBredrnzKbUe32ZbRmmxEF6wYe"
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
