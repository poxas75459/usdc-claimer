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
    "2vDxT4EUJJ1XwmRsxeS7EHX3MDMqEJ4yesfbzbvE595DToZzzTBZNyCFfxDnFTLEcgVpGuxhKZ3PZ6Xb974moMPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1gQQ67D6RtJdNRcQEENyYsLcrWw7DWiZfNdUxKWn6XgEwuF5anaJArNCFBrZRk7c7XHTkFA3Zf81Zhqd3W5T2L",
  "key1": "3YHVrQJMDEN3VhsmhvvBcf4M6oPp2RxXT6fnDBrmthB37P8GCMxEdP9M1iAQcRrbBz5kzWYotVr24diXgChrDV2w",
  "key2": "3doDa8qu48PkgBmdAVSeMtgp1joQkKzypNR9SiqSpFmVA7zaR1jUS5C8yG1bxR3K5Nyb48XK1kxycGnX7sPjnzZT",
  "key3": "2uUmUUfyWFgysmSyhvsRDGoTtBaDHaDDVDTE1tyN8iouNNf59L2HHRBGBmmF86tU1Kzjn7Y93V9QtgYuURa5JkSz",
  "key4": "5dDSiDo1U8vBiehrWuDvQ4sSNLrFURhg1yE95tvL1v4H3yxkVutMDMZuFctGs17VPESu2DbxVM3iAY1qzoBKjJ28",
  "key5": "2pvBUFMXfm8bebKUjpySXNKJkfNnSAw42QR93xHdxq3Yhc9PgubN6QZQ2d9uA6zVM4BDhMobe9b5EJNvSRa8rV9Y",
  "key6": "Ttuse6cy6wctcB4mYsYj2VGZ9ZNsxA3UxhAL92MfXxpBkpY8bG4nPactfFsCesNLLPCWzcpjKsKhSLUJcFhZJCz",
  "key7": "2qyszMJTpd6mbCXE4H6A1dq1yZkF8Q6gMxukMRAL6nDQSwANoTUMRU2tnmXQ6kXgs3pPVhNFdSKqHa267JrCsZTE",
  "key8": "3j749Jjadjs3tAqxpbYH7QTyHToL2eS86NtQXVEqbGUHMKe6awRykaskMnJ3beYbYZ1Tr79kcSfw3kt8xjzCTygp",
  "key9": "RHSLz2N51m5DSDyYv5B7JSNEjjnB7rzPgaQCSESYw3JuR43s4Dzxz2LVDbGYoUmnhrtvLfuQvRoD3e46ShQB1ne",
  "key10": "3oLWkwsmAU286BSuoM5aAL56rX2aE8ueQd12XkWi39s8nxsdFfeQxRg5SwbnEJRPJjF9MDQtR4S2khxYXT8dBH4C",
  "key11": "5dT5SEUVm4L5Yu53Wrttuftr4mJyEeYgf9ieRMRX7JRWE5EEpBYVQUxV4buwWE4CQCj3HhvMnuGkYKvU8sUHMSNV",
  "key12": "3o5rX2T2SPiDQvyQwxk8MxcGpbpuxdFeN2etSLbqjtw7wGTL2qToDvL8GsPjRXWbkA1oDZCEG4qjcbqKqLA6aTM2",
  "key13": "uhMS1dsNNgna8tBPbE2nr8icDzWoHK2i8SujaFpHB5HdbhN5xtodS1RBE4BQUh321GaZ2bANhCe5zEnw2sv83fA",
  "key14": "4LHrUV1pcYK6xgfz1RfvBzBYi1rBijzDXjUJkU6crZuqrwqNk57RTpLk48fQ95cm2AhhE3RBLpko6N8xSLmBCW3v",
  "key15": "2GCDx2WBxBW7sTqvCy4JbYiWfbjYRcF1CEZJQTJQt9TtHEkMiSsQsQ3qu1bYg9YFo8M8bVE9VPVZpnmMjdLrddqX",
  "key16": "3GtXspfTVkH9N6rTkhNBBgZoFbqHeGVomRSeQDLV7fZUDDuhW4KZE6EdXrJyJ8j4P28E3pZuTt87J5JQwKdrtzE5",
  "key17": "2vcB5Mwt5VoCPqNFbS7dWL3zvoWf6K4LvBkKCvNYzw5XdsouVsPjs6gmcVy8TMmoDNTxwQcMN223LXgPdVg7sa33",
  "key18": "2HNmHQF16TsygMjs7mmL6wEYeLnFv2YNamZER3NmMtoST27rYPUESGwNCbsQJZ3e5Jibrz1d9ddw29mZNFanKiGR",
  "key19": "SWszPbXBzCbvkQG7iigNcqtc62zUXFQDgk7k4dY9z37LCv7f3mUFPDW7jE7wNty6FSNZrijWeniHKYLJGtvPRrW",
  "key20": "67mT3pe8NKik1NXSScAdPJCCQPb3MZHmtg2q9aV1Ui8VNoAqnqxYeU3xqj7tFg22jtQn1hkTnzfmE6jmBmvNft9c",
  "key21": "3XVRt9Ccb9sEy6KLRY7YjC5YVRFxrWu7W1TpfvX6Rg5ccaTNmdMe29MDMCcwJUD1piXuEGMxwc5iNcY9beetFiK6",
  "key22": "3tU1UAxjoQEfEvzMicobqH6VxvN8JK8eEdXSDzgWv2tdV8z9gKmqiyhxkzYbqfL4vwEEK6QSv1ecr3pwo2Eh61Yb",
  "key23": "34oZEtMKMoLWRbRU18HrTo7BR9tfC5JF6QS425XvNy2wSGAJvXK1Bp58jgTjK5D4bu1xfc92KdGAir9wffgkjX7M",
  "key24": "2ktsqEbiMRS74ngnVLf3abon1d1CvoBru7bYnYg6ryyVbhVgNZx613kRDfSXyvuzCh1WZMDZ9yV4aYXZyj7J1sUr",
  "key25": "3mk6dwQ9vtzwuo7j9WFxpVRreiEp3xncCaRSFQHhV44xXrxhAZ7v5GbR1of7pcPkU1dkBHfT6aoSwJEH3sU9dJKR",
  "key26": "2jUvZAd8S8JF24MJGw9tan73o682efcm6TP2BXSBffE4BYbcZoUN4VweKB3H5nowpYka9VTXfX3bvi5VfWovyNMj",
  "key27": "5UHpsGmYBhodK8XDqjWoFSqgkmQjJWDC3EwQ66KrfeBE1wTGrsv9JRfC6x7bSdZJWthc7jwA4Qd6ktNvQcw9A4Kb"
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
