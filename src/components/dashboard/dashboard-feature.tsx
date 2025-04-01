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
    "2HYGEJDtoJbSUyWyMC9QYwuKvAXu2evNvNzaoVvG5xP5zz82AmB2G2RZRY4uWAiHmAVTEkbQ6YL3KSwbVGcZYZoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2K7yh3ZDHVQTEs2eJmFbiWTEKr4neAZE3uceYDE61GiK1xeDDwsk8yBXxG2dWqXha18RY2V6ozDFmfiewkcwD5",
  "key1": "3fjnM63oLsCKZWyvWmrh3whoRMe2HXDSsTmZfimDNNvaP1ghKfKbXg6wQdA2K4tvyRwphP25Yb58Wz9p7fKg8JuV",
  "key2": "2ry4ywaR65hjgYKGVpDaTRtwu68eQbtRoi5K7BJjPbM6FoRfzpW9ADkfRsVkHqGQaMhFNHMoZW3UBq5Rssh3FwUM",
  "key3": "4FGXQCWDHZvMFBAvoHz4tQm7wMGUCx62FNXiZUWNJSsRb5swKhXpD4JtMkPRSnEpP6RQj1dJWPLwrnMC7MhBgerN",
  "key4": "32XNVK4XRn29wuy2qHjT8xNFrC4WJ4gPMxEQMHoJz9tpKAHcyCcYCLfH6Qq9h9JSn7GhkHfSJkKHCeT3VWhWjf6M",
  "key5": "2U61h6crorGs3RKb9VW3URdikesxHEak59fjfTLLD64DRx1rW9q4M5gmDZC5b7BrLQFRD4kcqxfC4XW2ieiABzGv",
  "key6": "5hVCo3umkp9iUA7Bcq4XPaiybvesTDymF2UkkiPHkMrfwCbE12YiUnwrBqVGoqe9VDBJdirnG3UCyN9kzVTzSDFi",
  "key7": "54TtewuWuSXB8rdDxMc1rFyz62KaTk2DHZyeZSHmdUu7caQ44iYzHBDKmu1cMQvMPJSuxPZn8xrJw8yJ3fCur3Fg",
  "key8": "3Zaqc5nsC7xs93danFCyWiciCNbPNXeRTR499CRXjfNfZwv68kQAkVZBN4FH6RUAEygTWzrDpPLDazsqaxudbYHn",
  "key9": "4guNFkmBkANwT6MbnocQyFKn4LFsoZWxfRb6x27MkYod23cMA8NXBopDYK6LipH9osP7Z7JALPcFSUawisAmJXZQ",
  "key10": "L2t4o9e1h9qX6yWFZJjpSA6gKpnZS2E8UXPJSZ1hmg6WNqgxeMqzTExFbKEEzGwcwazTJTVztvE2VNi685zaYsF",
  "key11": "57MyCTLrkmq1jUe1MAscMQdgaCh5N9Gb3nxoCewMDRHJn1AKwetctwV81b2NRVn8CPyFH6hXyqmkkaQu2Wve5D3C",
  "key12": "t8poqm8KGttrcgFgVzmwgS8C5hdEDJsXxPebYbWP9MLfNpDcwnQN8MvwEQnqWgHS7x3irNyJbPB3kkixGi85x4o",
  "key13": "5pkLr3zXLEkd85BoZLqfkypnkfsx11qKd1njwQ3aQwj4E8EcdFEfSuaa6dSavGrhWHcWA3nnEzFox417rJCMLkto",
  "key14": "YwGexooWQgUCEcnS1aZU8aLWr6crGJHZA3WF1oS7qCJqmZcueyRKs5bt2t9dktkriJKKx5kSCqrqCXt1gaBrYMK",
  "key15": "2pwpHUXZsYpYmHwz6n4C5gXE6jf32KeE7bSSghtZiq8CUsWqv3J9YvUT8JLSGmoJzbUPEbFtfAHzuz8x6mijRCwr",
  "key16": "3MKzXf3MgeM9vV3P1YWysyMvEqjfsd4s9VmJFF6s5RmbQ1mTJPfrnvMuc23TAfY3irV1y4vcJmrAerRRqPBUBi2q",
  "key17": "2pmFDpt4rNuHb4QQpB75Z32vgFJQ8VsAznzxTL7NzfU9ARc7RnyqqcESicm3G98VZzRs1Zn73CtnhBuUJJkTBVoo",
  "key18": "23PA6gVN2cxC8EETwdxddaymqceR9YUG29yDimtHQVzmvvNQohq8Wt4TXMtMD5J58F2p5EorUUi18nUTNJ9i355a",
  "key19": "3VmGxrgUNm1v9cayozSitCAgB2SvQVxQbr123WwnVQXhAAARtv3tDBWSRqFtbvn6MWWZEsAv3WvmeL2n7FhL83du",
  "key20": "4S2wE1KeP4ioQ5SDHn7HKDidSVcjkPD33uMN3pFcvY1ZwAMERbWQes28fZ6U8f8VfzYENf3NFqsrXKdKMETxQWS9",
  "key21": "5o58qjDhb6BcgYY6oxPFaK3VmhrCbwo9mAiYEwaAp4twHx1KrRUWEGbVoX1AdweC8apRWnZPAqPDcd8KwBfLm1bv",
  "key22": "1ypatVYjUZPcgVCf9Tq6GS9xUmtUYw7viwkDNqaqQFWxUKTvBYfswSWQihqLy4nHL72ubnCY35pEwXdW6dsQNbJ",
  "key23": "6wS8A7eaSzMBzNv5PoznFg9HDuhsTHHJbvUVYuaaQZgkWQPjpJdra3t35gE9oLMcFtAAbdJRHyZvfzkbCPwaomn",
  "key24": "5Y8tb2V59msXcWbJZadZxb4AwYY6dp5V5Ln8uehP6EGFGbG6RK6V7cKRsDSQkVbHbnsqUT2gfmSMtHLPfMfZACAL",
  "key25": "2U82AHJw4TX6TUQEb9TSdoUkhh2DarABfgwJCZ5upYbQ1RQYVPFR29im3TVfZjGTNZEmRprFdEoRwZ3C7QKN6Ne7",
  "key26": "5jJYmVh4edTwpWZcrH7WSmagZ5gGgzLkKhj9jsx7oUJv9rCCvsFPt3ua9P4XYQ1cDRg9Fo4cjvMadjTwm8AyRafi",
  "key27": "au7YxN6SVQEuUK4bW6qELFGAKQGsuGwSQ3StFwLbAKbfhjLS8Sr9iVwVYyXqo1Hzh2MBtZQfVBQiQF3JXJjMRkF"
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
