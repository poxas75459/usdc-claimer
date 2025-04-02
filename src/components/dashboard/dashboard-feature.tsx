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
    "uuxoweRL8fhHsAVa5awRwMPPGKFP5XmW76FoR7siAKhooxjQHS2CMrpTk2u6EH9Kc9fw2QWfbkY1FAbf3pAm6ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312w8g3UfhPn6s182PaJsJdTNjBLPDMTJeuqmv16Gcpg1tJtCKwnQK3breCjwQPmcf1USCqjfcKESwv2PRVmcB8N",
  "key1": "5Q66P8sXm1JsxVHJ6DQyz8H5xEr8BZDA1zP6ae59kimfojQpNRK9cvKJWHA4AR35KyrForsG94EremGyiPDNJKjS",
  "key2": "5xcc2FEhNhrWw2S2fn6HTvSsQoDSMHdwpkkqxZ8ZPfApkuRjUkNC8236XChs4oS1g8X3EjApVHQSJJoGmeocM6b6",
  "key3": "UCTHnWDEw79HeuHxQMAFQtRyCBSAFCwmkX75mwLh2TLEEk5pDrT9HF8aguB11SH7aUHAhSWJfBC2i5osUuVFumn",
  "key4": "nsb67p3sUCckat9WzhyFk4CqawhXYscqf6eLf1u6UyoN3KngHD9icb4EfccacfKg3Jdb9mTxH2W5SXSCRzQtQeF",
  "key5": "28ai2ocQg6J7cTZQzGTvQNxaZHDoQHNE5Dd6obngbZwdBtPeWYjYN9C7iS7WHZcjtnYiVy2zryZbqkxcBW6UfmBU",
  "key6": "4ZNAfgtorPUDfngCMJWjJX2gYnfLwDFCTAZ4Gg8akjDoHU7QxmxG1BiRH2F3G4UcrFUjYJV4zdMCdSk9gNp95FDP",
  "key7": "PVxfMoK4dMU1yRmoNe4j2qcdZMKtCmCiTqo5pVV9oC1EgQfE52i25CtpYeuDaRTWCxBgZHEJLeygVbbwaKDLWmG",
  "key8": "4d9bWeiKFtXFvae7CW26PpZZ1wNuieni667oFYKyabsCvFaH22zEbiU66QkdNk9b2tui6gVs6wx7e7oPMKwe96pD",
  "key9": "2REQWC71fJ9PtJPdUD1BXSZEf5DjsyqaXWXbxjiQe5x1Vu4msBigJeifvkqriJ7wkrqknKXnWTZxsGY3KVzamiv5",
  "key10": "4u1qUXe3XW4Uro3fTubHr5YuyVcK69ZAiiwprR72Vfqgt8pim68sk8QVGV8MUtvRvhAnAxs7mLDqwAiUexsr19Yt",
  "key11": "2e4dL8d5wT5EyW9UyhwhgP8KsTLCNVfqTTVXhtuq6LCR26AiFtqy3uVhHJKAUMXch1SQQ6KbiLF72PfVjneBLAxm",
  "key12": "3y5id9qeYvRmicDoYZhPNyBUekDwJ1r19TfWWd1VL4m393e5EBMLbQEozsRFo3pFaDk4NxkXSoiMHvmY7aDREUgx",
  "key13": "mo8rVWF8YFAn6m2eUgPcfVJRkwWfvqYQAQBztNXB1NnqhJixwAY9PfLD6tyAdRpdtKj51ARH6WqV1kbWyZbqHue",
  "key14": "HTTnQndSrH4g5Zv2QWNf7TGGPFkhfyzLvUDT9jjo5LcDY1TeUQ7i59Bh2hhaybaDbssP4GsA5uTLkv95HviWo8t",
  "key15": "3kTZXNhYRvfxEt1kW7jtbCfeqD5kKwth9Jv3q2sM19gXcKCEvc5hApfTJL9doKv942gFnwqWWk6UmGherhAVQwZi",
  "key16": "2ZBV13rwFgFkapQofozqmNLHhcn8PfqwfFjcKm2bzEGAp5hirqTj38kwnLZuwem7CNB9NMFuUPgUFee9kCJdEQu3",
  "key17": "22cPys2ZgSpD48hCth8DjYCCmRMuten1W8SUFAuR3eShb6hnQfoP7fNKn9bLNbiSYc27qqgYFhQhHQF6RCHGva5i",
  "key18": "3ZUQcaQXFyJ76vdnYD8CUv4RAE2djrJ6ox9VWEBTPb2J9DxmSvW286T3qXNnhktjQFFCcBytwoB4whD2PxKVGDhm",
  "key19": "3qg2zA68UeBtLahdpV3VpmXUu7PTTVjpE5fxqW2oR8FUpKq8gbRy2C1gEwzxs2g7z1h2vTgNCaQaSxppPqWzgpDx",
  "key20": "5WpgziKsH9v9p8FdNdNFG2PD1c4wP6tjkDn2o4PTf41gfJmHSkuMLKBxqWtuaRuMftqLmb7oU7mncvxSCfdwJ31P",
  "key21": "3dJdL41nePPYqDJMmat6FTPPV4V1tXFC3JwPn3ye5JLqJoktsnagR1TFqsEyXSZnfi1aZfrkdKM3cgQ8HjSafnp4",
  "key22": "4Jk6Ea1WZxQvNntQpnC6j4E2vcBjXj7y8GxNgF3YXUTz1mAL774qBkBiUSPZaMmaJXAwR9MZrripzni7NyBmZZMW",
  "key23": "3E9ys3oHzbLRr6kUKhk9fGtEPJCZtmVSZgnDWziCa2zijvjV9nusLn4usJMttbcUVFeLfNSc2nSFbPnVYbAcZ3c7",
  "key24": "36Crtb2ZABFfBrBCR4KkJxJhBdCKzUiMCiSAekvDoocVhaGWg4PdjBY95dKamDnJoQjc7kWBsPkau3TKt7Zpc1df",
  "key25": "32kFGQwLPSQpVpx62qcG7oGq1BPKSfUwvC7GN7iLRZwcKZDXjaALxhcoj5uGNnF1K2JNbBuFTf6SmZmy5U3v3HZF",
  "key26": "3yVgvPFPRBFKR34zM5U6SyqkdkxB1LVn4U7sghssEEdTHNdnu5cNvavqVeRRpgc4vzRo6ygTfXzuThY1UU84sKvd"
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
