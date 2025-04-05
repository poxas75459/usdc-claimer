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
    "62A98ZQ1LPyzYeUN7hjE9jRBKB61SeNT5nDHT3hCrcrenQky2e9iWWumcdn8TJLj1ZAC3NXjhERx1GxkEez2cFPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxSsNFPSQkjRcdhzUisRWfxTkBf4vC311rMiTQCqvT2wrosw32s9NVUecT3ca9fDqtZ38KPw35eSJEGs6wyDymv",
  "key1": "BGPtL6Pxxq5W8juSnUAgkQ92QJT1sCCKyWeVbsmxgronfSptkTftm4sFsz1bzoJ3cXnhmu6tJN1NydDRooV7eGk",
  "key2": "4Na2WTJTK2CgSPJubpusRNChryqiR7ytPGCyvBsRgfcq76S1hFDHVZyBMneWcMhqdWPYgqa6BNGAUxzCgutthC2G",
  "key3": "2r61GJ59bLAWLshueh2PbZFhd1qjgNU9Edm9FQ857TnoyH6D2AJVaC1zXzeZ4hWN2o1WkaQGtzqUK8y3mEmB6iuQ",
  "key4": "3id88keWXjPibKm3BBpZ1c7tVptJojda934H93AhuzZ7ZiBtwnCvnEvAAiyRcAw98vhd2Kfh2x9tY3vwo7MzgDr9",
  "key5": "WoDGmdLzcMmqw2r5PfonAVsUYDbvCkY4EeKsKu7mLHtB8kTkdUtiQJR8NE15odLi8Li4Ss7UgtozduAEeu6vE41",
  "key6": "4BigjW8bqNevTmrMCXg5ErK2TbdK9VLcp3TYz9m8LLgtCCthqfdnjhfVN6nCKxpitZcTamvywQGyKMnyDsw4EN2J",
  "key7": "4zEonz3T7iqzbfbuxAwHFJGJW4WdWjBhmMvzzj1bjYLf8uZ6NyEWX7EXXBaNi9DcN6qBmcWjWYquvzhe4guHqh9v",
  "key8": "4xYywf1s2fYEkUXsWXJFcUcGticUJxeotNpCq5r4b37neW96yeVPN1go3EWnRokzgaLKP9SpXafxBThAcmA9NY4u",
  "key9": "2M26yTD1Ak4H2ffeujsNxfK3cci1xSkbt3fTq24dcRfU7c3cDbuyASJkj9fbyuqpRH8FV7t4E82RBwbuAJNhk2gY",
  "key10": "ZHk4JZwmwYmRzAoqS63y62q1VgK19ujgzZ4XBoN7rHFh9Yvtzd67hfZ6vBnkAwWGetzr7fc1Ufi8dLDHL2mTVR6",
  "key11": "8wQf7ofUBqDNzAZ3BayEHJqCYJPH9xEd2Ko3vNM1ELM94Ercv3a8YV3r8XsunTgU4YtYkohNQtrJGU9pY5gxPNf",
  "key12": "E6jegKgLyEQQgNoNmPpZn5XerFYcL46gpddmn3RPaxUFEWggYzD4GNwf6fPnMa3WopXPCMPbK1ZT1zbz132YGsN",
  "key13": "StWCdGd9g2Qbk1yLaQBi2PGMAFkpg9a6FFV7ZLgRa1dYbPc12G2WfH2zdDRHegRw6BRcuHoedSGjRXLXCCHg64u",
  "key14": "3qez6BR7TG2R1iPQZHR7qyDuWoxfkDW5kmYeC7A56fnDNK1FKfEvWf1ge7Js7uR69YQVutZE9F6mnHBpiaFgqqE",
  "key15": "4B3gveMt2P6EYJESkkTF4JiwHsTKDZnmFdZEcAgtBPDrydx8XBbEPz1gCAYyiPiVLE8MvsWvnsrezpoDLeEnARnn",
  "key16": "N5CFsXP4oZU5fjdgh5pSsLQqr53QuEfiCXCwoRXpv7XiM5AtJq5D14foBTQ72nFcM5NWiqLnFKuF564yWoCmvMR",
  "key17": "3gP5RWXkCtauUUx1ZWfVLdrwXYoMBwhwg6pqZzvyUsZ92vwHQQDCQ5e8UJfsLpB4hYGE1Zkd5ippT2NZ94Dwrt48",
  "key18": "2zhjXJfzgjc9ELMw4Q9y3jNv9GYWWqRCihUoh9y2Ruhnbfi44Zk8aSqBhG3iG1BpEvUEHrwxhm1iPjQz4wN1kdnm",
  "key19": "4iMxQNaBPbAN6k9iKXJh89gZQNeGrFNACWSoni3jQ38EdnsrgwSgCj1X7ydgjXybecJFRhuXxaHzRp53C5NviaJU",
  "key20": "2xEtYkVMS5bmBpuoYjziQBvsANHmsUjdHe6iNWrpe4taqaUU1CRnK8HwBbZoq3hTMsuZAt8vHhLdx6jCq6Md6FNc",
  "key21": "2L4Zvx4uyPceFzYAMYNqv8iSq7x1R2j62cd2hbnH9qfpW7E1GAz8oap8hsa14d2MjKAxfh791ZZMZC1cncnr2khv",
  "key22": "4yAnW1QxPaYJTJJYutAeUUrhGjL2ujVWb12dRZoqWTBoRSaKG5ShwjkCFtTQYLUr9zM2c1c4eCRxiDfH9YbuLRBW",
  "key23": "3cvZ8Gn9WH4f2NTbdp6hsic5K9quyMJd3xxfHSUh1Xdzgnw7co3KVuXDLsDwkUtW7K4ripb3HVdGjoNe4x2V6mHc",
  "key24": "4qTg7286Zju9stY7TNzt9ZUngBUusNEEzbBcthDi93KmJ4Uqwa5JcAA1FPCvmF6mTzbSdoyDmnuUcjjRHhZBCkPW",
  "key25": "33ZmAhFTSUQXYnj2pugZeUmexcZyyaEBjT5ZPzsSGzvzNBnB5V3yoLVdjaPwcW2WCB9fpE7wxFFPLhU1waWc4F3z",
  "key26": "4odxcnPPSqnrY6JHXfGivyyAMsX4LNhvoK9LDnvRK7HBCuUspsoZZ9kdzs38Qs3yXozMprtoKUCLZSSi8nAZ4e3p"
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
