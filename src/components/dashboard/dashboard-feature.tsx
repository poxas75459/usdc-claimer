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
    "3FWkLLPEvfE7qmmYGpsZPb5pc2jdzU5PcykqbzcB72XAndP4Ri4y2mcwfbxXmChs8ZhKsxdq7BMeXbLMctrmgkvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDjd3XrXJS8dzQFUiB5kzP4msHxGPp1esGcDSeJwyXwm7BATJRjejpDgd9xgFPnbZwsaYZLdduCjAP9w4QuuAWR",
  "key1": "59cDg9BkuSqKqvjFC3YEb5oRDzcPUyD28ramdwa4E69jM72tT4Fi9twQ3sraATLW2MZdYPR6oM31c3ZktmW8onjc",
  "key2": "wdr96ZTnwSRMsFxZLrQo5BCtzX6i51vKYK75y8ukqdareyA342PUcSHoaT1VrUhFeXziSN7bRRokabdKR527fYC",
  "key3": "YEw125UkPEZZX9DP7qfayeB6EUcTCedVy2wqmrPMdKh3AWdC9SP6SpqPiJXHWivV51f5cPP2PTft7SdGesoTBfS",
  "key4": "2BuWtQyfreKvzq8p2WJaMDN29T2uW2rQQU2F62QNaWSoBkKV3jKZF4DGQwvusziQ5oY9HD2ndFUXmXsz5N2cdeEM",
  "key5": "3SWgK3TFFwwiQZVdqSTrNQ8SC7DCT2gWx73bVeuKjQRgufQi9yC8U9JWAzZ1tKwxW5VbE2Ym16pBgeKawBaaCpdB",
  "key6": "335KukAgKe2s88jiX5u5WwyP5RtU8QyFM6jG68jFHJ21dY8wNHyMWFghMR9jM1hixxMyzVK91iNL5C7jX55c6LMn",
  "key7": "YarBLEQoxqVm8UK1QpGT8VvrGEZRexGKZfwuq37SbbRtCM6rczjurNkLJquAbLepQregGZUjK9drLr1xwbALyPE",
  "key8": "4NaASiwwXRfzjPtYxASVomwGvWChC4LFa91AdsVdp36mqCHb3DmpDZENRgCoqFQUUM4GZ9MgRpU4dkM3mt13qbTW",
  "key9": "3zp4DcwtXeJJ8LT1FEoJgKFH3xRCLUx27iXZvGqWDXqqAeQeQKd3wxv9T3o8Yh8PxvW5rsNg9r1nLJC1kn5R6wqk",
  "key10": "55zoRtb3mHg5GJtpQqbwgD3avrEuS5PNfDpqPEZHW7cfU7ihReHxLdUXTiQ4i5npVWMsnRsjMqcJf5JADagmYVMw",
  "key11": "3QfX5vAVTfmTUZRAvUoo8hm9McZhETxqCeWyk5jY9zVrQEciKGE44jobXrQCUk1HkmswqrWR8JLhJvkJGJR9eiPS",
  "key12": "4no6sGwP4NbyA5cpDAgFhYHGNN9iBQyVDDFGpRx62eq7mZyJAkGLRe7jyQPRAzGoFYCoXhNRxUSh4HQX8RDJidgb",
  "key13": "3aCsyiWRw89cxZBG3jMGMecbTw3B1XeAAp5paz9ZAHxbofWt2gBej2AzHVyuZpcv7iTfPRaY75HeaXtja2etjkf3",
  "key14": "3j5v5L85A9iG3YMbvu9TmP5TD63GhRC2mHriASoaFGkvAJCLP6j2YxwbigeAdgTTsfhmcNBu7D7HgJuF7Tihfnnq",
  "key15": "4sg2VwxdFno2f3KEWj2amS84gK4Q2ARN2kdjRevgzvZhBVBs86omcQBtXa7TfHjF8SbcwpFdK1w52Qu8236CwSif",
  "key16": "5D7FsWXhUhcNKSBmyuDG2UmzMEPrS2tGBqwqoWeykVNGoXL9MTQoxWMfAWER1q9fHarooUPToPFn1tuH5btWAgih",
  "key17": "45Y5fwFucTCMQdiySNdBTHB7osp9Pi5s74wWzejPz6FZRJ2aUsvyrekNyfEyRamWvFpcCAwR6NFyq1CuocTck6yn",
  "key18": "3idsSARwVcDnasGCSU2F6KtXgJMcgRS1rzVqG7xtrmhfx7Xzvg8adz8qZpkqaybygyhHkvL5pepdTC2DbLDkSmeu",
  "key19": "3vFATALRMMvnE3zKNSx9aRNMR3CkBCVcaMEvFzspYpHBi1nZdauo2ogRGcQKismvhKYLFW5izYYNLXx6A8Ytentf",
  "key20": "5DHkQsMdq6wx7ms9Nyx8sh5y8hQrLNuZNAWqrKXJDgT5BCcn1eXeyrTh5ezfgi8YFyQV48aYU2jiSnwDYfLd5dXh",
  "key21": "GY2MwzJyf4JDJWd2vqPbJx3evj9FG9SsWENZ1MdvdszV1fnFLu14q2c41MizYvwxwXJUkZai7WFN4Nvwwydccb2",
  "key22": "A5K31gttYVE8BuYLHBAufFci269Akhi41SvKXoV8un1mhR5cedPfqvxgKjpLFYHChEhgdVyQgwihT6XE1rMouZg",
  "key23": "3qhjSvNzmjFG7se7KeAJ1Vp1MD682uyaQPyfsU8inq3Fhn9K9ToHoDbdUVd2V1ZHSbi5spzP6S9LNbbY9i7kcJdK",
  "key24": "5VRJUeVUxZjT2TXYQVfJZvu61QxKq7SnV6tMCS3aa3Moa1LBPLy1s96fMX2H9VbGuCZcpWaiZnfLmhAsEnHGDCNP"
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
