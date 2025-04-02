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
    "4jtBSzy5NMgBHzzuqDjX5ui8QhQYuyuELt1mGGuJZwho1LgMqkeTGSSMNuLQUt12FnF2rB44vWTkBgdy5qB49Qva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSELEJZVieHcQwe5F49prjSMsHwH35aHBCrsXPr5F3exQX2dXfox5uVdLRv4XdBVs1AsHc5hcmzoHutJTZ9onTj",
  "key1": "53ugQhuMVMeEPFB2qv8pztFpGpcxERAuNkVvoYuHPh8r3mYRZ6abqPcyURC1nJFESgQrYf1DJHVg6zsvV7K65qyK",
  "key2": "5r9nQYYuH46AKFU37zkch1onrWnhV5qW71Tzhimxj6PAb7bQ4RJeAht7HBLtK5TpHGMRDhMd16WFAAWnDszu9B34",
  "key3": "3qjPrJgHw5KuCyeGYxDw1L7ZKvpvnArANNBcpLcXRvyuvnNfnZwKgswAZVtSnVTuium1S6RDDNvLLj6RZArc89Y5",
  "key4": "5PSaTEiTCViztNBkzW7wgbKZZYHjshEeUDLqTSySATDRw7WaoDy2u3qii8zTXgfS6BFsJp2y2mYL21pqPVAHk3pW",
  "key5": "uwimqDQb9tkUv6m3VBdiBMfQeCai5A3SKA7uG6y9NotuempsLVDZhahXDwswskHN5SGaZGzH9p3yzHxMcu3S15L",
  "key6": "36TTAcbAivR9aUSPLV4tBLmrDoLr49VySKEFyccZ9DnjQrbEi7aC3Vy5bAjeck2j6QxHSQ19jXZnY3yHbeykr8CZ",
  "key7": "LLaytfSiVPiMAzncTLjozCwgJmqz6PFGeoBJPHGHEURgAD7ggyx9HWF69fUgCgyVdqt1KCVgTHXBWEgkJuxqvNB",
  "key8": "ttAyY1vEiiaErj9saZCr24SpwXF5yEv6McMxg747xAi7ft732S2m2SrPr7vCEXssLHNqQb8pLWDBH3wJFpv9GoH",
  "key9": "3RMMPyjqaori98gaSG3LDpmoFTUy19yf43iDEwH1Ud4pp6kWdrKTsXhLckXnEvHvz7HghkCy8D6LCRnZL1r2zMqw",
  "key10": "54QWVRYRXmTRZ2BrsYGdNMCh5kfasLobP9JsQ74D35hW7GvhUgp3zPb4VW4K2T4PzevEmdsXYH6cwxthT5ptxjX1",
  "key11": "5NouT1cocRhwF2eacFUZqSq8tdquiA2reMH8JxGsoypwMduWHBHUd7oT6m46MUYNAXCt7Pv6Fr5vepApUb1TtCsy",
  "key12": "64yADiM1AkiYmMb5Fb4Jj3mAb3Tc8pF9i8BJTkaMggw1mkxgh4fQCjowsbVhExzKSrSuk7SpiNPmtH9WP8RGUcZc",
  "key13": "EXsXM34s9XzwwCXioJFxpX84dDdYC1fdax1cGXsTPKMXbwSL3QnL1s6aEbpucmEqSc8FipBshm62ZVCwsgsJThT",
  "key14": "26dRg8KV59bsXcpMJgbDfi46f7WaSNuYyTgJtArAQiAJbA5eRc6qmWySut2V2QRjPcVAAi7iSrbLW8QbGATbaPMw",
  "key15": "2pj2rKVCEDpL4WF9Pg5cfNAdcfRhBTeXPTmuejLZSV21Z8kw9sjX7BRQq7PWiSXHUFYpMqN1j15PxTNtx9kHFezL",
  "key16": "3vSTdXypMRAVzU6MS49YnLapwGZWGiN44dtHaeFFskpCL7T9rhZaSok87YomCua4vBKHiD8RY5B5qJuNi7A4QuoP",
  "key17": "P5xJ3dC9nskcE4B4UJ6Wpb3MrzaQ95PTdD4PvGobBHySitJrMDWgg7kRREgoPGXSpThibm5CFumDvJ15nUoofZe",
  "key18": "ssj6dWAzkujrzqk9tNf2Cmgr8R8LRqeVHkRPck2Tw6dB5u76hUwiZFLeKriKyGnPRpGC6gKEH2GvJwyz3q4NQvq",
  "key19": "vetSHuqhaLeVjHYAwvu3Aa9suSUsQ5gTu8jLf1Uz6HNrTL355FM5Xk9VUKLwMXnisUJGNVE8Fh2PtBNQVkr4gkT",
  "key20": "5dA3HwmB1YBnaRJjgyUP7uCv4nrWqX83BExKpP2YDbLz1kzMxVyiZEyaqZyDzvjHMqj3AynEzhimKWUAGAF7BXPv",
  "key21": "3soet4xFWaghwUNUtTGgZLdCSPhZvkoc6QCkEKYvQ2sHpP4JpPvCHKJUgZbHErvQxKbU8BY3LS1snaSntuALqdWH",
  "key22": "5DsjradcHCaaTs8grgophrtKGejT1SaipiHYUZStiA7sUoVkSadbBn8xsU9n2iSNASUTDwQRu95KNVTgfBvuukgS",
  "key23": "5eNrbi354bd9mGnBKwiqqmsSPuxHuuPHQKLusy34H6CotjpqUSQiHebDcpDWsKcVpkHxnDgw3JDvr4yWrfAngi8n",
  "key24": "3p6YJjntuCEE25avZQQRZASZXiBRxNoVX7SefQovbXXzvjkz43K82T7zxz8qRu4ZeELdvBw93ZJeXbFgreBExAwy",
  "key25": "5eRXobX19jLm24jKBae4n2UF86jnoWVmDkBfiGQvvyqc9Sh6Q8VogFQhVX2Tdrqfywi3Tc9fNAnF6fRLYxAR4eXM"
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
