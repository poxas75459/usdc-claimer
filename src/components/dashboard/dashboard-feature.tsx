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
    "2Z78nyUAg3RFY3WEYPnJ8zShx5wbk43vpojHDN4KSNpEp7kGrqJYqQ6VroFMRkqFgs4wtSMu7UHxXCbGJxpy5DVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F43MTbd2kmfCWCyJf6G8HLsJg8ePXkWt4DSiNbRXwEn22bJWh9vjwj7AMtyBGSoXwsvkbjK9HAp7SDsSUJtr9yh",
  "key1": "jBZsMN9mJmy1R4GZiyPNt2o2zb477ynhNrmV9KXGpnjgzFRS7qEkv5MATHeqPvyUFxQxDP73wYTeGa18s3xpoat",
  "key2": "2riT5PXdCo1bNuSx7VFidd2rEekTKj7X2Dr4SQGa6vudfrkDCWjPwtCC1GBmFsdogNpvJ3ERQcScGJwztoqYCbMi",
  "key3": "3V9TWPttHnsgzgE6pWoziEbwWdB8KAoGjTVewEMaitXaa8dednoW9TECvpGJUQ5xqTkLogQyWx3BhL2Dca1qmXnQ",
  "key4": "4ehRcMthxEoa9aTxXrVjoan3WRDT9mZJ2kWZiu1eaqv32FB6MBEs141KTBLiANNoNtLkxJr8vYQXxp3BGcdLxzWL",
  "key5": "2AfpyjozYHhdyzRFtVduXAa4KbfU97hfacmkkq2gbrxHChxgznMWkd2SMLrxxTxKGsNRBxBVyofAFyfnzia7Tttt",
  "key6": "44WSq5SkYU7K9EapTGk7UDkkDrhAxkvbYw1RnkS1yBMbjP2xhBG3kTzQM1odqcQvVGkwLmzNjUCs5waa1k8ab9JY",
  "key7": "JtmEZXuNwmKG3qSumWCk29aNH3uaBWjhPQLAxK749cogyveCdBXFavoA72RpBkmHitDWpfLqjVdyFG5GuyfZgvn",
  "key8": "5YLhyyE5ty1pYJuDmTbwJA5Cyzj15Kqe312B4gcnDMJvcdranF7iy6Q1WVcEVyX5C3URvKJnaX2yHKqaYk7TFTRA",
  "key9": "56FrBMoJzSVNaoKJMKn3ZJfU8fekVTctSJAajK74fqo8GLcDam23Y4jNWLQ1g6o5oxRGciHhgwrVTJkGpfDSN9CG",
  "key10": "349SYoXPQu9ScCarA2QXFBPV9oz5nZzfbf97vnFkvqzRqB3fn6ApL6qyfBPZZpRRZKHKVgwZiiysxTaMixNCZZsy",
  "key11": "4MTG1rKGyKPqNMUzUh4ReqpQQjLZMz7oFiPPDTFBCRSQkoWZLBteEJ61uHUh4PKUR2TpL3e98dXCuq2Ktv9hBc5z",
  "key12": "4sHNGX6g3e6Uf3jf1xjjv1NhJwVtu5P1TogHmJuAny5EwEwQHXeyEDn3bo5tXYM2PdNiDQECXorWesEZv2i6KUej",
  "key13": "5W24ohSVkvQ8TMQbVmt4uv728mBVNWLj1pkU7xwUhtLLgETZo87mvdTVDSywJWZEtxjFGkjFVbRX5C3jbYcmYisc",
  "key14": "2nhmxVtpQMVYsBct9tsx2pYPZxr5JFyrbuj8ECbvPyjmw36GL97e4JCZt3sJX5CPBBUJCtdscNrRRhndM7wUCrho",
  "key15": "45K8Bo3hQSSX2eermg4Bs4XTsKSPE7k63EigGAsHCuD9q9VBdJzESq8tSabhD9ed6SKzoyJ3i8Grazx1o2K42uYZ",
  "key16": "4tatEPfcGM15q69tPXe3B64tj1nzWJntgmR1kJqN2VCzMzivmapa3wwvi36QLRPuN1KFnij78iC9QQCSFWKb3hhf",
  "key17": "XV73y44hBt6EqiykgmVWSZx825AxtFJW91ccA8yNzeQtRhUbsCJzbGm1YUGBrXPnvbauiPP7dYQkuBtKvRr4FfN",
  "key18": "64TTWYQWcbFgPC4n5MJwLfokHJoKynrrHtUFMQkcTtPrcAySntqaduWZxjHwNijyCSMtM9P5yERn8Gq8vnu9gBSE",
  "key19": "8wDSR8bs31AokPcGDLEg1e6M7uePoupeuZYRBoM2nFG9HVNFtGZ55TF5azCbdA91beZEomHQ9aaYeLYitPMbHYE",
  "key20": "2yi5vJbMm1Wx6MdCvNkmgzwXCJm5xC7oxyTb8xr1bC1qthRAD6ZwNkj1KQ5wHUffqM9MyAB11hqLZKAVNehoAbPr",
  "key21": "3X6UNnabpjqSsBzqZfGWymc4PBZdwzhxmDftUh8MXQrztVFHAJ2rYg8DgXbKrCwBTDB9WJjdn9oSasq8WmUm9KT",
  "key22": "2QhfupfPH8suE9SVnV1o63REJQWSN3PZXti56owD8ZEhUT3FvcXmWpX1mkvr2GKhUKUzopYgMzHqm8CwL1gcjzsA",
  "key23": "2mwN4QDw5huDnNqseBpztDcrTwaCPpfB2pdMZDyXfitoQ8NqkJSNT7sQYuifbHs43DRTXbtQX7nhaaoC1dqdwem7",
  "key24": "2VpUerMi5349JtTSGXrK3js4SvjWUE2jwgdqnvY5KJ2WbXVHTB18fQgyaRtVvrx71krDEGfrJ4HhSGN5maijuk7S",
  "key25": "5SXyUzfgwALU7UHyJvYnc2Vo5LWyHx9ysNwdKD1uCgi2uHHZCERW3JHRo6itXC3WCQWmtVnQvjtTFrR5TayxG9Wh",
  "key26": "2ZoMHXpqHhxyrGZkyjnDwJxsVdnBpyFrJzFU5NfqMyV76bgoehtwBYMEDHLy1Z4bMrJkMCM7ycUnsUwgw255pRyq",
  "key27": "4ptFHMchTbnZFFNqg1qaUzUo6SVPhHxhnw4ax1ZRb38YBo1snrAXqViy4APziwHrMb66pRiFAwehLuhakv5KLuUp",
  "key28": "5i8QZDKh74tYkptB9mzzzMaeaXBnWL3Fv4UfdXuW9Kzk7jFvvkr6PVhxqk4FLjJTLVrTKCSFGoQekUNVZFw3zhRg",
  "key29": "3mMhMwoCmfVc2NhAmGmJ27sqtaxwPcoZ569pruRpxA4PxTPUFmpM3MGKR8JCPgETtsUiba8Lvj3Wz4AAv1Y3TWHm",
  "key30": "so1hkYU5XHAGxWf1HkewfKMZW3un2iAjhUTBDooeCrX2kCPJHKCjAAEBeMVAyutyxRg917iFxozvsheAcKV799K",
  "key31": "2swdhjo49rePr8m9NJR7Gb9PyEmUJ8XAU9NLrNCA5Stgkm4JKX547g7tFMybb9YMsFgrAH1z5p5ybKm17P3BhQey"
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
