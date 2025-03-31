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
    "4HasADHeAnF78raY9PXgYBXr48SrmQbbKcaPSxXtB5GUkwVtsHcvAHanre1ftVfkwhJbHN257jutGdxWBZBhbWTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cs1wdervnYd1S48uKV8jYLvZqVQ6yVpe2Tu8Bm9oaBwtDYiZXvaT5ab6tMAhfbca7863DM55FzDEoRKkqbVHfqi",
  "key1": "4EujAcSfGP68aNoMW1yPcR7Y5WsE5nKoGsD5itJoDTpeVZQr2ihXto6d7n2gsnbtvCA5LPeisB1zUbfo99cNsTu5",
  "key2": "2C5gJhqVeVm9xG1VN9hrH9BXRWWWQaJ4aFEgYj9PBDchC6AAH8ZiE96LF5TQBQsdgnYSeYEZBWSRFbduBR6ogQW",
  "key3": "46isg17x9m1zAK98SWo7iyudrNEsgAQu9hUCtd2QkbajatdEHUmoYQDHHuKG9m8fYiynyPF9FDg6aF1cZchkc4ty",
  "key4": "63xXC7QSNXNcfqaiQiRCswQuZwRUmNyLKM5sprRTb45m7DDgawp3MqVtqg6KnanzGT15FrghBq6QxJqhWpJDMQEf",
  "key5": "9cwoJWT1cNuFdgHufPfpmc6k69zq4THMAW9vMB76PJFeJahpZpmbMjUB7PfSToqZtBEmkSpiaNqb36trLZt5epP",
  "key6": "QSLWcFHRgejgNTG6Umxn3mVYA7HNo9UXiE3fr2xNfqsopPtzGuvYBzRfj7wbCH3ahuvvwhmU8d78Lfv6XSSnhSt",
  "key7": "4BNKoFj24AJ1dpWdr48f22yYuW7GVkFNPtg9nYMr21rdcBbVAydN4UFqDtnmQDHK2cYXUGt8dP9ypiqp129xdtSs",
  "key8": "gZdGsjZkc9NDXb3h58F5cUPjMi8iosHMBPYY7oyQkHF3aVxKHUDdY7wkFwTBw3QtwDrBJxagufch9MMbdPqUo9y",
  "key9": "382mnM3bD1hFahgcu46AsfMiFqnE7sMrDLfBJv525uV5mscUv86BX1eBdVeMRKsGnr7C4VJY58p4NxByQhZgzZ23",
  "key10": "2SzdNvdwJKbQCxDgcWo3rWX1rnW8XCufX2kjGBfWofCh9QsfX3QrsEt4tVhkSNjwae8CKnnkM657sDt5YEv4RjVL",
  "key11": "4p89cwRfzp7BkLhmFdSwgQRBduGJyZyQChNQsJhEadshsUeY4M5dXWegbfqg35C5Vckgafv6msEeSm51nWuXWwr3",
  "key12": "2vZcopuop1VvLpZ5L7b9UFC5EX2aagBJuqViNwikDsvRbfegsq84efRnJ6ST11LbhqQ89RKEugeEr4xB9So4Vgt6",
  "key13": "56Az5a1a3xRm8GjLm8LimT59J6SLzyRCLfgcrdCDwtbgZ6VDf13X9VKstqDmRpyLutZkwC5mKFboZ28KaYp5CNMw",
  "key14": "3xwR4Ngw8RTHeFATSe2tdPdSig9cgFDNm73EkkuMgxynbQx9TWtnvYapfhzYssd5wGQCqw8m6R59HGDuyMpHRvcP",
  "key15": "SuPkJZhaTmZfCrSfdoRTJNabqNBExvrDUfDffdYQgivjVxa5weg1yqwWzJ7JFt77eZ6AbbBhWfxotTqMwXVmXS9",
  "key16": "4K4vVFtoRW2BFUsc3ornGF1xMo5LRKXdqqScsmbBEWcnSp8y2ZMnn2rZmYrRZjHUhQe3PJXyZxG8pxFycK9z12Su",
  "key17": "r4doonDnMyG4rXSy2kAJCwfkY6rDkp1jEQX88NTGZ4EAtwaqys6BYs2xJsRR4j5vdstzw5PaDYFbdL9njL5KvjX",
  "key18": "3CtTW2RAFDPMQrzgLFS2f3d4F1i1My8qqHp5ondKdTGsXh8xGspFMTZMxQ4nPzrFP9QP8gacizn5vmf4UVSu6C3X",
  "key19": "5eSN8VvqjgbT6o2cbNuD85Qn2uBedrxVXjcBio4nu3FUt79XxPV2Z5YZ7FYfTVCQU9ii35i5u5gmR7RPy1LKcvuA",
  "key20": "4XBeVHJx8V3hhK6xDnC4TmLxy9PR3weN7e4cFdXLpxgF4qdZwHat5dLr9obWmfde6GfyWwUKFrXCaj4Wfv8HxP6w",
  "key21": "3suAweiKBudpsnpZPMsSAKngpYA5UGUkLU8akDrYeVYJExsNeuuqtLR6BbZAeuKm4MxMg2Lue4Yy4QNT2cHEt1i",
  "key22": "4CcLPDkQAqGbHjYAS7ayA5babNG7ricmfGFBDfy2ZrCAJKeocGujdczwdK4mZb4oREkbe7LuxbK5auSKPcT4yWPc",
  "key23": "41CafwpZ3sceXV8yNAvoo3F6LTQ4famRzfjFpjUUUsp9Xm7F4hU658Wxqgvng5d2N61Zid5prPWwn3brXLMwUYYG",
  "key24": "2wrPmtHuvqz33spfb38VQSCSVtB2ZMcLjXE5iNti4P8PiWC2euajmboq1pLpnkyDhy3fNqML7mPAb7tGGaK3UEJJ",
  "key25": "3gbh1JJsZJQUvhnTwiSAVPAZvUpY98PKwewSfX4Xq6NKLsPACXRRcNiCt1DyZpm4ueLS2oKBQW4Nq1vBJ5h34dgM"
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
