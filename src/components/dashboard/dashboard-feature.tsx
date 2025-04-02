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
    "4yZXTCNjtbEcmAsp7fFawj8kTSdn4aaZtcAC1rpmAD8DKDWibvYEr5ZjrQk414AAfPGcyKAUXzLv1kYJNuHcxg57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqJDGZStz1meLNg6Tt7YoKS9xhQxKrw5L4CPv2AVFh6bvRmbSpyc4pXm5r8cTagQak2Sms29wkMXnzac3KRv2Kh",
  "key1": "3BtSpi1GWoW9fNobSL7gUpQxQARDtqPhwjhP7HDhVCJQCuJzbSKw4oAcMvqV4dPRUPiTg4KQgog37bp6zYjYMWuW",
  "key2": "4k8Sv21YBMuoMwkQyfqTrLVnMAzBZXrXn1yJrZPJCCBVVrhys432DksohvSVtN3Ss5PN2hG9xEifMLN8CGxFDXhu",
  "key3": "5VDjRGtWYhmeQS99mTEkF9EBWaY7ekdZYhEEaqKNir1TitbHScj8eUENVhPzvnuKge4Q3hZMLkk6FLQmFGa3s3aJ",
  "key4": "9b9qinaLpKJDBUXbdb6xqFAVW6VaPwPRdhan8AXtoUqte1MCSpv8VzfHz6jDMqJdAy64zEAB5g1JsCX56hF19Ac",
  "key5": "o9coftRCzEnRXdTNsL7hQtZzKDVBAQ3SsdfdUiPyhKxz1w6HtQnTsLnD4FFsN2iGx4MKtfErTGYMB6baCHqmmbD",
  "key6": "5Dhd94wdRWnYRv8hrBpSyRjZgt8uSvpur1t4Sk9VtrAdiiNhtdXdRdeteabBHE9Nc19opK1L3mQFJ79dvBBUwjaA",
  "key7": "2kSaNLkRT9CX7qFZkHEnnPHGYbuJ9NLYrCiwi5SG33t8UwLP2c9cGfQyWRRcJLCgP8At6qiCea6UeMRNJnbseCsK",
  "key8": "db2esdHytyWWmvk7f9fY4eHvHmbuZ7EPtXn91fghbJQU6czFSxx7Ai4TfvNW1MDWQw6SHkDFGPL6GQra6pKBGj7",
  "key9": "2Sjka9L81kyF4hR7JyhjCMSNLbP8uDT4r5z6DhK5XMuRBy24KdBaxqhWMJRCVaqRrtMc2CE1ZZtvbxXtnesqFWS7",
  "key10": "24ijP7cn2AY2NAV7sejHsLefpZCLt7eJHWUjQ4P9JwEVzS8BR7Wy6jQF6n5Wn87R4hLoKaK6btJe5FRLueBGM7Mn",
  "key11": "56e2hpbDn98cEA4wqH74kzkFLVFQA1uPbNAkSSC1acP8PS96F4XVAzF5JySn94jTbHUS2YAvKU6KFHDGbjuBcQcA",
  "key12": "ZFeMfsxPLqUg1gCXsS4Vsi28iL8xbzX2rTkZYCPmWJrPQg9jdsHRyoy475NAJheipKgVb1LvhvoeTxgoXDNYtyU",
  "key13": "2bV9NsfZdj4NYezVKvzc5GodpL1muefPayJoDtXWvYRjZeiaUxBeGdxLcHsskSD7YemoBEVaLXkSAhN16nkn9dpZ",
  "key14": "47rg6SZbGgj5qbEPqGsDYtsyLMA5YWJCajp59q8qNqsJagNrM61UFFL9mXpPyxYRFtex1Csh8Z9pUHwkiqhiWKCM",
  "key15": "3Nsparu12DCzd3zEVFfKi3VdGmQnu54KjL8LJeFX7KAmudC8cAZmevvtSVQKhv7zsvFav2WWsUZ8yBEdJRmAqkJ1",
  "key16": "3gnJ29i3rtLTAyXgKT1xTMQonXwTJ9NCi6iyBso9RLsKp8pnv2z4rendovFas7gsUjGjgPXB7nxw7h5xozpQ2LKj",
  "key17": "39kCUw6NbFTe2jfhdLb9Ak3pw5WneKfPY1F4HtgykVT2MZy7UhFxGiWG79kAtfQsGughRthjYXXFmKLTrjxgnKFc",
  "key18": "3MBGq98XqR7ESJRdiytUJpa5qLHNJjMagJuv2CikFwQHEt6iAcPcfs4xZiJy36ZLtCjfK3DnaTLpsYCsLhbMpETS",
  "key19": "2PnbyWe9E42Phc2TfrUSDWVyi9Euqi2CyADHhDhc4hW3XjFsVroPa6WcW4xxY2hH9zVgicAE7rAgeQnAyP7yWy4c",
  "key20": "2B9rK7L2tLL9ErEYnLHNJfcAy6vWsMjPxPq5DSTodU71CA75vK54EniRBkZdFg9zX5Rz9fEb2SVpdQm7HXgd9Maq",
  "key21": "2HbZsPNthDVYQ2CFeeMdDCysSrB7AG1kNGs1Pkq61cS1kBggjsyZLRQmkmSi5vs8z42ZQ8D8knGpLcTeMR6jVaXP",
  "key22": "2DAgK8uKpb3QqtP54zvhCaiaWMqePJNoco1da6fdjbNEE59hqykQp3LVJiMLwMN8QLgWSS46bG7Hbcmiw2vW6Jw1",
  "key23": "7oN3Wpf9LDwGN9tWBQHLxbMyfSpXN5KssorPP2LEnsUeqnRjnS2NYsd8MtyY7L9x2LnnsfJdG7dPMWfgRkLPJuo",
  "key24": "3SCreUxYvYw1zKptM8kQXp2R8W4CGhqJqYUmZCr9Bi2Q4HBKnd6nQvENZUQos8Z4xx5gJjBucBRMDpsB9QJKCTr3",
  "key25": "5gQLRRtZbhHadervkuN3WjyK3c7prgDS7VaNcoCPVN4tUMRwodHdXFqpuGTxMYY1UaSyvGEK6NZPS1bBAuWTPhZt",
  "key26": "2Wv4bABzFQqZxtCnSrRgwkqWT3NwnGqmHNEseaCqoUoQjRep1DrH1UT93cuC51Ck2eYrvQsbvJmSHY1SufmMYj2d",
  "key27": "5EunHxvpxFJkQUMRQkTqWBZCfv9HzwpiBeVEvZzJJsMKZmcAPrHTV7omMML6AYaSACLjcjY8adVNaNifTVQ2jbAw",
  "key28": "5YBncp8LgaTeDcJ2KAXBwHYUNKVXNSzyuM26yYxUbsmz8pqDwBvVbrKa26QhJyaVeXG5KYfeqVdVLePu8LdwJeZJ",
  "key29": "56ZXgDDckygASz2SmC1Asdbq7exVUodx9fhWTp3qTD2WG4aDdqoT2CszQSgvzReKddz2gyDd3FqtaZTiKUGB2a1j",
  "key30": "5mvTcmfgXW5xjSpV3XJQCqXLnSw41PwHiaDCq38LsGusoq5yP8jxMg98QsTavrtLyPbGeieHAraZGFLFPdm7uBR8",
  "key31": "44KoJ5oDPLECcwXDbfckvVt9wUH3Hxjr4MA9ikDFwbHo6muiBowxdATigYWmUWbU1PFjaugJekBt3MzLQt9vs3i9",
  "key32": "tJzmr9ezZkarL7H2uaMgX6RL1YwFaTNcdCC1HQuTkd9Jy8pYLCbP4QLmTGrPK5V534W9K733wQgrAg39XMuvaQu"
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
