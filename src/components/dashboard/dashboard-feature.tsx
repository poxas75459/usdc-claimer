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
    "2HrQGu83BFfJTcvEqDcPcmRdrqRTk4EjF5zbwnza5Dq8VDeAEKmTaRhpRVd1WuAk1eBpHZ48SrTBXGEnyvLVfJjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wy2z8SDTaSJVJcKPPgjA7rZPCtQbgTL5nedNQyQrWB9MSPuUMJDWB3dTCQYTuVVmHEVhsEFRAscFWKxZBivHAd",
  "key1": "fZrRvkdZVYXusN8jrJVBTxvyW32GvK26jrEzTpDCE3bwPNAL4MLyZn46qAYxVePP7VaUFUXn18w9gBRFsQL7jkk",
  "key2": "o6H6UYRtRZBK4aGQP5rB8geb7JEjt1bbuurRE76FvuQnq7hjkMubLFoUDJLBoTy3G2AEWwo9bumVzz9P3HNSRD4",
  "key3": "4kp8QERWqmx2mSEMEYr5YySddcQ2Z7CiWecLQ6KV9VFA4XYnkrNUjuebH4hLRymQh6ShBsqxEBEXYdNaHSLVqbV1",
  "key4": "5VSW2KNDa32uHkQccygVYwX8G4sGBCAGTq6WKSfQnTFQWzVpvEQcx62TFVwmbohXmAj7UgNSFQVJbyjH1ArkxYhi",
  "key5": "2zRo6VXxeqDLtsJybMT9wwCdca7VXjbo93LQzWxzvvYe7M8mUNYWYzZbJkNxGEeEkX62Ezd9DS8kJpLYqazw7Kw",
  "key6": "i3CVsU9BKg9aVvR4ACXhL8TFKi67UCFds3rf8XpGuDmMysQGt1fikmCgvWKLHTq3K7HxoZcPPyy3CpC1LBdSzEn",
  "key7": "61uxUp9n1zywkTLLBiknFNbT5jY4dw7CssHiJcoirrYr6K7RPfvmAQPfG84X1QB7wL6Vv3fCZoVVNbixw4L1FeeL",
  "key8": "LJ2N9n26ckLE6ZYFP4RgShKGL6R83yjA6xnqQiJVKxAQMcTBHjQUk7oAB2g6yapZHpFJSZoi28DMUVCjMs6odcb",
  "key9": "2Eb23op2vEjjweNRk8go8jXeAuhc5uDRv45ywdVF4JkYPoevvhV1w3xSTP9axguuqwsj2EsVTKXTNAZvvtXVrPdP",
  "key10": "56jZxzHYJ5pKf5afgDqLE9zMrCRoUo1zRueJj79qHg7ejoy2Lx2SPMJiYRzNEmQHUd8MM97KzqvBGM7K3n5JQZcs",
  "key11": "FH8EyTvESVYuGfi7bnyjmkU4twj6F4VRiQQZT3NdxaN8qDemuPpEvA2YFhQx3BZxpzCwMMnR6AECDRB7HFLmqwU",
  "key12": "3TQZZAgfhsZ1cYJ7Rjfhfp2RWSVSPh34jZE4acxztYwJVJJcq8BWpdzUXjfSKYRxfoaBJjcaaCzVbEPr8phdTGQK",
  "key13": "Upacg3ePjCfw4jV7Ahd5chTatvZFtkQuqyVSKUAZqoKYyeTyYrG1dmh5MLcYVmZ5jXsCksc4EyzBC7XAVwbTWFQ",
  "key14": "66Dgyjhjk837k9kVcGGAWs7qR1cfaTx2fVFMhFeC5DbhU42bG5cP1qqhgmcsvunx9v3PJAzRMyjPxdxiVk2Juqns",
  "key15": "617oXaC2Chyr2TGTPXg28g3receHxZXr38BXBHBAYL4DYRhatZqu99E93z2FvjN5WZ5RZ5D63CcTX7yscGr2nj2R",
  "key16": "3tZBbYr2ZfKg8hsjBNNZVdXyzbKh2cVm9zLtB23mom3WMQgtHJh6zyaNk1RCRokfZCFWMMPGVVRvZxWAneiQH5Zc",
  "key17": "5WYupXc113158VWUzucviXEbhjoycGhhkqgiv6StGux28gpgWm8RfoDqzGf2qumRrUoUP4d1wF2Rbjj3WbrG8WDj",
  "key18": "XGX3ro7GgzQqjSrggp2a6Pw1sQa5GmGewNjYpzR2eZvaRmcmLLaYfAkq3XhPbRvN7duZmmfBPyDEadd3LREUVFk",
  "key19": "43qXLkHnTCNd5xCqru7FKd9vHPwzPnEMmCHoMzHT4yVws1kX5odWToVF5hiTdvtwKPCSHDCBL3J4hczV5ToVjQME",
  "key20": "4zfviR2K9FKzbfJSiiCuDPo6THRgSLd3L4XkssLHxTvgEmfpjqUrA4qmSKHAdw8TfTqbbZjRQgWmEqgAQzqEBZEY",
  "key21": "2XDP8npaPvNwPjcNLvxwrd1cFm4GUXEpJE31KuNrWzMurNXDu5VimCBcXRt61nTgWZPzZu2E93C6Q6kPtFvBBoiT",
  "key22": "PUKR3L7wB28YbYWLTVPcmtbd46V6efEeqX1Ne2JxsnusiYXbF1CBk3aN4oHEELoMnHrf5ZsPLJULfHNQNUaeuSt",
  "key23": "3seoviG9jW6dGaTtbTuQjZWzNovpqM9Vz41dd2Udunb94FbATNZ6G8G2R3XsECKgL7xRRjouwxgmWbZ7Ego43B4s",
  "key24": "2XBRRX7g62iPUpvnqCNb6STakW9rVU5o8qibGP4PMRXNdpKnqtmFxshgPaQPa68ycshiMwdF1wSwpry7YEoAztdo",
  "key25": "3yTnz4b4nXuFA154fcM1bzwhoTpM5swgwdfugbvZLC66CwK8wPMio3BhtcM9Gmjenh7CwxVyqe1tBNj7Soaq3YRg",
  "key26": "4YLMpSGqJZD6f2ZnnWb11Qm1ecTvMAUDseCNofxKUGAJUpEynvmZb49hDuNgA6KYpVXogFinnHREN2iAvu61Rv5v",
  "key27": "2hQCbXUdrgz4U4VwNL1xC6mNT8K9jLTek4XnkySf3cJV54Hj4mKBLdEYgkwfHbDmhQ8ArqULDzwha49U2H88oYn6",
  "key28": "2MEdYXtZ4xKh8v71ccDYFJCuGHP6NfWN5ccpTVTx8PRB6nA3ghCjzvEjhU3kvyYwzMbpR1phNtyvZufWWfjBT2qS",
  "key29": "3HeoZwzYUJzG8XGSv2sPynNXhr9pqtCzGJWhvvvM3hGyecSBYaQo3ggXmLK8ovecM7fG89cHMdV872TbFXnSssw8",
  "key30": "3XLhWmG7ecV9AqBKmW2jLzsCKCqdQGQFUUhsDcmAZc5vcVfENkbKKKiZZuZtXKErmg6UCmVLgyaKqqdBRUmZj4Ki",
  "key31": "2niwAnPPTUdRYhDsA98zAFGYRv1x9PNsmTUWzWt5foYFu5qRd7j47aZWMRZJD84NEg9gD6VDihSCWbtYG5nVkhML",
  "key32": "58gKtcJHKXAExD8NJ2bxKQ1dwikktptTSC2oVL25SemJJuva7NRM988oSFcnci9kSZWp4Y58GswaWbRDJt1iJrr1",
  "key33": "3ipS3fWAaPKKv44ZMwDrsgdoLs5ibGRLdnNQr1Ey5fNJ8PxiADiky1mU8DsvaLfC7WqZYuRzwnzhxKp9hx5keuNH",
  "key34": "23TwWseDKjjUrHx7beUWE5QEz1Y6WCyr98PGKyRsJdE111xstaAVz5QuUoFRLevtwK1w77nbw3rZVGqsDbrJWtxU",
  "key35": "3TSVm5KfizyCKnoQpGFzz7qRCVfpKQjWUTST6xKDd33AMsm1LjN6yfbRTFjvDJqA2LCZtRo56uvL4LgvCAmkZRaC",
  "key36": "qxihM8dPL8cvuHdm3m519MPLdMKMEYe5ghVTYUKX7nw1ybU8LM9TdJ38Lv3dFfvySiN72HZwn69seaGULbMUdvz"
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
