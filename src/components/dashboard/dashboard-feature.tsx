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
    "qC1FWp2LBGHAT8Yud1GtcXW2ZyTaANkuRpzxHhzHUY4qre7iAqBHgthv7ot2JR6hUdjvX8dLHYxPKFmQpzPriix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBCcLyTBnhezjcMY7NQfW2HDXWrjTSNY3zD1Ltuo5p5mqDb4K7yoQBJyHtvxfdKa97x8YzEzkWNJNETaqJu3drU",
  "key1": "5JuhNuANFzKhhtmzkMqbARLo82ktUGMrZLjhcwUz9vkk15xBcneGRZ9KiaN65SnXdSMwqYkUQXucUx1YkPfAELEw",
  "key2": "4AEismbJZDrUzf9FpYzdzkM5696nLjvaHVWjJm8QfEY8QUVr8SeK6tEp3hcK5wippVkgiB9HqTVNT2dr1kcGmmpj",
  "key3": "26oCN3MX9J9vD13Ui4DF2QsdEqhjMywEvemeLzwShcJSYvLpQB2pxDvU3MScFWSFaQ774AWpmPG2e6aoH38rx8Fa",
  "key4": "B1sMMG4f3zgyRajdu6NGiLPfEqbNUD3KhN2TNcfkj34VTyYSEfdJyjKLL5xfacnCZ8fZXV3Hy8br7c7tc5o1EPw",
  "key5": "5rzK9rMPquKHNetxVQbpg99PJeSVLfQq1XWZr63tBex6nAUHCL45nUNzMKJ8DnxMZx8782ZhXGXxTvS1FYWEbSJS",
  "key6": "3Ha6QeVa6qzFZDhCzWbpLXCLMpLLAZQqRiRQB71eY2GQWWVSKQZbE7jduaWp7ztWJWQM4NGqKmEYGa6VZfuD7QoE",
  "key7": "2d53ksGvkLkP9vpLQ3wrjWTvrxySdeRoLP5jvPiRRGUiZDvXATNxjfxThqRAMEjZNVqgGYYkSrEnGZDJjwyeToEB",
  "key8": "5iUn8JQUBKj3pXVUma7EonstFXPhEWEjpuyL1Bm4Muee4wFMgWBW1YxEDEoFsLHCkXSR57CXAoM8pNaGxs5wr5V4",
  "key9": "5PS2bmmG4kdztKRoh7Cyqcm9CaEUDDxY6r325MhTUUT4Szw9exTahqp62ZFokDH95Sw7BRWzwk2oDhYMbzGwn6gV",
  "key10": "2k4uq7VRXjVLr6a5rUo1MTmogpaaVzwBpJTmXfX6NoaJyEHykmsZE7fhpWNYUVe47GHrU53MFJeLMyNkufoNifRx",
  "key11": "5fV1bmHeuiGgE9t2NWBQc4Ho26ieRBnrLGMTmsG4kr3qDTedfJ5HHF1WkEXiGphXk8aekmB2THmpD8TYudZzVszb",
  "key12": "52V4XvXrungGbTQKK4XPgxchb1yf5njgL3ZWLDPphY7fM2aVQ8vdBeThgryR1rAr8JiBZQMgp7aMhVwFj2kbYzq7",
  "key13": "3Yeh9BWmcBRbJPbLx5uWhWAzRdWCcR5T7HfGkVN2C7qdtmGndsfF6EHJVPBM3QK1RZohjNACBDEESyczaFQNpTiW",
  "key14": "5N9DJCPbiQVZEdJoAJUeitPJASB5XBFLrxKSSaq3WpXEKUWYbrLhmDXFQ2F1skT9Un1L8nDaRUKo4BWdWJ4DN65W",
  "key15": "4RuFbXagdQuPQwu21Y3utc7kQB9p1ewGbFueqvRv2JTVoywFsUJ98EgWqDta9uzeEBV9FfZmyZmmAfnAjT8ScRhp",
  "key16": "611WAKu5eUPS4DaVKEGSWW7NMApaw7bWqN7k78UMzD5HyUCJJ3CXXT6M4KgmMSQxrjG5y6ndsd21Xm5CgAyCGSWx",
  "key17": "3pEM8rqjWQcVhWVnytwwZFgSkvvGCNLw2Vx8VHwvCXbjJJargZfU1WXRMLjHvqHvoeSapsHwYj5j4qKqupH4Q8mF",
  "key18": "3sx2AQXqK39Yi5QU7sMKWVvrmkxW9GyHxzjVoE6Evtib8Kjoh2xEnVEjj5s6jsWzDE5tvU8avq13TUvVRephqLX6",
  "key19": "4vhTPgQMdng2vQZmZnkGWAXJN2uxsxBwviZ6i62B2sj7t5XVo31DcUFDiVbyLQNnvz8v3WXqrdHwcLdTefCrMsy1",
  "key20": "Ewg7x9YbrxV5AWbeX8e2vjuXVA4u7deBogbzUYFTvcZ8HGsFZTXnRF367PbiCuFDcun9ExUBkgECeTvD3erkLTa",
  "key21": "3bCdDrTFThEaoBGhaDepQMMa6U6bPbmCSEZtNBuqzMvPZZp4tAp32gzrbHyHYJxkA14zFMwQQKLsyt2VcxYzhm9z",
  "key22": "4U16cBuV3UVzJgYqZEHCpdxQzFPDSZZGSDwFLLWKQPXJvDTH2sjJWxTTWHcZsNwHBuUJAUs678gY2wJbUK8wBpg7",
  "key23": "2QPp8rkYQQDWci8W92qvmDwR7CPCrbKnj5uJzoMHnWpgtdyRMzqe9LAHT35QkYUnXEamb246V38LETh35gcVkC3G",
  "key24": "Ht6AVHMVZcnDenEzmTepSorGd3CqSeN8SLneWqykbn1FEcEfZDi6y3qdW3gndiijF2iCEwthjNxP3G9J5rpr3Sd"
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
