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
    "Fq6LoTvvDjVceCjUvEKJZrzj7sTHMVSsHUHtxEHHh6Qw3idoarwGW5AHQsy9CC5xczf3uk2Lj4pBDvpuckVKF4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNvVaHs2R3XsgXiMM5TMPNzDHNhLehNiwckTWm71Vwd853jNvYVfGMJ4eKWWQwxRjsHyomZgkdWM2FVCbFb7bfn",
  "key1": "2VbkigSs8dbYAGkx5QgLwhjMVoEVXhsszKBGPrAgnHu5Vm1ywTMKrJ8eK3Fz6e3dRxUn1ha58ZSiwZ5Wt715awKh",
  "key2": "Zvkg8Bk9okL5ps7xLQ9hPL7hwQwBZTYKqEpL9G7HMVaVspVcHtuEMwhAvEJrEwedoJ8iAtCxTfYm1244iqztqgf",
  "key3": "2VWRtCBgTAp14VqarDNrQnDDuVTzPTyGELzgp6dfLQHHEpfsXWx46LmDbL12TPa8CCqeUP8KymaxseksKFAX8GbW",
  "key4": "2v1ZSuRua2v6cWBkxq3NxiSZQw2yCKnzzFxvQu7TfMhuG2jQuraHN8AqMYpeXJpJ7EEnrr8WfsjMY6AGuFxFc7dh",
  "key5": "2yX5WbVfnE5Ld58NfWnD36NhsVsXSQYFwVSRqLphsEwKf5U21QsFYAtnhXicyybdbKiFeMoyFcPyX31svJpW8t75",
  "key6": "76uVoyr4922HcwPHWDrU2QhQ2pnENBkx64iynirNTMFf7Wc1mfoxZbUuf2MVVnJHNenMwEAaZoAycyvSaWNLKK7",
  "key7": "2ShXLnFNxrMADrTKKivB6wqcT2GCPvgCfBLjVgJ96ZQvz82aTznfqynti4fC1kTQjpS5UFgu7HXSdH4vHFZihquh",
  "key8": "3jLW23TdYvxmkpg3pVB31MnmajTw8zVzXgXFMm8SSrXa5DsjmAguQHgwjDqenv4ckSdXP8SZ2GqUvN66URNuJYUG",
  "key9": "2WXaGgwY5MsFnonXopMsQ2pJ1pENCKegZ356PZh7HWK6HXgovHjBf5daxnzLfoggDP2pYX9TApQZjp1ACLt67ZhJ",
  "key10": "2o9zM6v1cZBFDLsTRwKYkyLQ4ZJTwbtns5xZe6bud4jrCRKtPqtCTvZQTzwoW5SdKPSKw1aWxE4JEcScbNUjeLC1",
  "key11": "sFBnFg7h34Qcj3uf6pPqwmQpWRvwXGF77iFKmEfehswTMFBi35cusebRjWLMZbUyDbE8FbkThVmGrH8EbW64n71",
  "key12": "4fp1pDtx8QaJ6XVxwmWY83fKG6m2wPWTWx3Dg3a8XgdXAXygF72qEWb1Hda7Um9jcCWK2WqiWgZ9cbw2osuFfHN6",
  "key13": "3g4BT6HPs59VZ6hWoAy4sqrdr4hbRGAd5a3XbZSP86e3AZXTCgJWPgrPiJEE7m2DMQ7QmjjwhWiTR8k8T5XfrSK7",
  "key14": "2FbH6ja7G9LvqrdLFGurDJ1Bfxv3hAzdq2E3DTq1wWdP4q2po4pMdxD64EK3xYXvJqgKyuxPw9QUj4yCguzuVJWL",
  "key15": "4zaaM4GSPAcHmqamoQLPdU8u7pDjh8sKQWq364nwLgYxyo7iq7dXYNQZYioZKuehmuMAzCJQLzb6CgsYuUsdqu2A",
  "key16": "2fCPg8WmqcTURyPgsDb7wsMaR2r1YxdyfDVznFJpetfwCKHk8YkzajafsFgTT9PhTVbFYF2dmWhbaDwH95wbnruS",
  "key17": "4gvBRtQRQwk4YdPdoRe7YNcXGBuUBJrqKsfXXaxZQ7ry2AL6Cu12tycdKi5ERQzrpJLoSoKjgQKYpvzTuneHfg8Q",
  "key18": "3DLnakd9fJhTZ73pCbvqDpovvEKHcr1zHtcGAdzipWLfpzjP2oztABbcHZGesdJeAmYx1RkuxwNMqNj3L4trUAav",
  "key19": "4cd16iTovw6EGj3G4v1cRsTbKF84ytZMJXNwWZauFeQeRfeCyLfbsTRqHF5Zb8C3Ss9EwMXMVQLF7yrU2qcZkGAu",
  "key20": "5AA13rBVnKQe2ovWftcURNw8E7UEHKf7xUG8yXqTaih5ofLfG1Xs36Gg7BWjRyjqJ3kWpZhbsENvGXxqkrPCj3yk",
  "key21": "2rBXjZE5snAwjGA37zd1xHLPTEKMhTHUayecTj3RDQPERik8MdbQc6bTDQWdgy6UKn5KmJo6VPLsmefWAwPTzhtv",
  "key22": "4qMS8kW6FswZbit9FCzppXpMPQMkfziNB662BD5u6jHcank3DRhoTZTzm3zB5iW9z61nkvPYeR5i2f9uABR1z3bo",
  "key23": "BAjeDAnin3czjkkgbaxxiut2NucpwodPod63X8xEfPakUS5ahPCkqxK73aEn7yXmvRzgmMnM86kMXv1F85s7dej",
  "key24": "CbMbwkZzZSqCMY94GsQ452wXxHztmzfMadCLi1oVz6uVogiy5Ae2vPPw5rLCswsxmsgQaPqtzZbxyE4Hts7A2Rp",
  "key25": "5i7AmEd7LP5VM6Ew2SR7gdKoAyhrQ4agvWQP1QH6MT1urGUtdwaGBELfWW7tWPzdxfDniacVqqb5C5D3NayJD6rh"
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
