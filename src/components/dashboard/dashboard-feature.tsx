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
    "2iZ2URccwZAc4A2hqiHsncWbaYodKGLN6hJ1PnWCdFAWgr8tpMiRz8M8WkGkcc6BPv9nXUY97WPWXqsZUERGd5Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLKxH9XiBVp78L95RHaH45mt7bxjLJ4bZRUAJYFmgcoGDaWuFEUZ53Ygog6BLhYiq3v9twMAUYjwifQSnqWWgNZ",
  "key1": "24CzxnuVUMg4whWAk2EvZwmshHVpwH2uAoKNVc8uZwTK9qUN7osaGqTmEjibYgMkkMkSQZ9BP9xzWAQdWqsmciPh",
  "key2": "3w1cqsoAXPJDCoTE5Fxue2FhKnnNxTojyQNp4ZuYncYBjNjezSeCM74CRoZZxTjC4AtmpDbYDAVEXN6JW27HhS4p",
  "key3": "4Aa7XXrptUNz1CS47FCbhsg7FryofcK4XnK82s9nDsTpxRgYwHoGhBCftkXJYmeZ8k2zekfcLAyub1T18LcHn9M5",
  "key4": "2gF3gXPyRrkm9CnGg21SeN8mSGvfYXcnCtPRSZZFfWqdpvdZCSfHMGTr1sEXtw3kYT3CuFpWU4UBSmh4nBfrVa1y",
  "key5": "5QsnDQ6oBvhWQPTY92RHXxNA2UCDRvbthyE9dMF4rjE9Yq4RAsEREXu4JQCmzaBbLSW462Zn5ZH5kmQsvDPQZ6x5",
  "key6": "5PiUKMMCyeu46CuTawJxmcAjfTPDcxcy96RhoZ3y5zuyJS8QrRB7anKWXNxvwCburC4ae3aEDMBFJcFTPdv8gQm3",
  "key7": "3XgT11kcDujjjSrUc1mLadwVtDdw2A7ToF1t7gpyi7M3S7pg4Y5cvSiFVjzguy5VNhacpxg2YDPSy6mMzFGudk4X",
  "key8": "3KdRfPyWgFd2RDejbmKTaUwMCJYF4hVx6wk4TnRzNqmUH2ZGheqKEMin63pB39LTVPa8CasEq9HE95M2A8SPcRxb",
  "key9": "5SDdRExBC6roxS51f6C6fXeRZV4Tn4Np4DugJEZ3AqHFN2qqhwaUB6XwHi3C7GFpizYirF23EZXh6Xaz1YDo164y",
  "key10": "39CDuVmJzpU3JztFRwf2sdf7PBGTyHcXoMeDj7vdZEvnoaoUbchZ3nDaJWqv6CZZo4gSXLtXX6xMZFRWDsonz7YL",
  "key11": "ScW37ywKt9VptuaWaWYRkBGB5xvaB8KY1PCZW6SrgEk5ESDmwcC7soEfMnYR5LbGZDnNNLo2Hv7R1vpMJne9WvW",
  "key12": "K15oSHkjHtW7cWejfgnsWfyricH8yWp6f19VACKbhcWNdShD9B55JHB8zqXkxcqkCq7tKgSdjo382oAPAJjyzHQ",
  "key13": "4BUTCF3UNtW9vG32weUnj6KWScYn72j8Wb5GugT8PyEwvfTs4F6yVRG4kSZtoLMA2V2LokDApsSi1oSAgrjxqy2W",
  "key14": "2GtZGg6PQuX1Suzk5Gd3q77bt3X7ABbhydSYMr2iWEQSCNhQucFoqHrMaxePPvTASVrh65yAFEe9Gx8muJeeCPEJ",
  "key15": "38pcgBAmA1s5sU8eM8croeQe7V2x187MeJj9hzeX8xtWutWrjChsFBtHnt6SdwJwybfLkEEJjzWKVoox9gFidkqs",
  "key16": "EHt2Bxa2BGytvhDs8snkrmGsMcZzTZbk5fnnjQ2uFnvGqcNdZ24UvfrbmEeTmU3YXkmHyyGvso5svqZK9D4Uwrf",
  "key17": "XEFCkxbNiLmmdc8AXxcW9Z46gNaVCrfVnA4uTkPDZn7qZeNwaeNWdZpmLRZFHyG2oaFyVW12DsexdTzZAmVHGYt",
  "key18": "G3qm31FUFEPMtrJZnnvq1dozHjfmHWpf6xqnapfzUJvv17ZGV4kpHksMk6bGfXBiWidMpUavgU2gDXe3qphJ1Le",
  "key19": "5XkVLmF4EQCeSJY9iWEuNhGG9ZJsBm56XB5Fd7tw2fdJfz7LCtmTeN2fHzSoH8EaMoQciu8Ebkkc29NcEHwpBHFA",
  "key20": "5PeYcHaQEA6So2xMRddDCFBboyKQw3DjzQV2kM5qx38asWA55FfMJD3dtj6z4YP5GoPd3JyqYpFrVV59U4wFvGWW",
  "key21": "5rJRui1DygYq8C2zvMruJ25TqkBGmATYuunLSS8xJVCvLQFWWunoitq7tR1aG28nJwr8jRepc6fzeiMN1fgfQaav",
  "key22": "3t1C1vYwX3gHrC3BAS45DFFX8qW4FjwkWnCyNc1xWr4Er3XJqARbCZ5kPeA6RQCmCEC47hYBsYEtLptFbP3VmGvG",
  "key23": "hW7mZTRybHgs3ivnPrYzfstRUAZVYpkBsNkQENa81qjz948dCZYqBUrBMV1EUnkfjftwetZV5MT6t7J3A7jKvRx",
  "key24": "4ST1RcC94aSYevCYJYWEei75V1xUzjJD7UxFRwZdeVfRokhRcr7mYuKF2ikpgXqbAmajYjuQYbH538RqRx9zf4jp",
  "key25": "3YpUWuUpkoUpJayAFp4tgVNozMYu4o4dpAvQkKfmKnZnbKSZmEGGyy71H4rpbBBB4F6RBWQM8gJS3VCWyLnzNoQ3",
  "key26": "3BNiAFGsi7aW9sriMy3FwzZPDzENzxEC6NAkwMKmh2yQyf1CSWsFWDKjSEnECqt6NhrEniHL1W1EECJuycsJu7Sm",
  "key27": "3Rs4vGFSaozKqfAnzgV1B8Ve3kFJqoGN162CsEt9k1sbJ8PKXvjNtGB7QH2XXuPRe3U4yofaC5iy6Ht9L3KKQ3Cx",
  "key28": "3GJWEDw5XPrrhgHCgTw4q5nXLKwTkp6t2osYDj3TRs7RNWLVCj3CdN7Dczi7o58gCvxGSRP7HbDxGLgwBrwbK5iB",
  "key29": "3CzPor7sjeifbbeA1V8DUfkSjrLmuS1r17Dhu1GgbVELidsAUfnjHQ5ffbyrRkKznaS2HWdruWQZJUB72LkTN61b",
  "key30": "3gGJUW7Ga4cWFsUaDC8R2s7KaUfQSVjqkNodTYgUYbPvUQK6dnjcudTahB2ri2wkHVsAeVSC2QwZ4NLYZ19xPKgo",
  "key31": "3fshXgCu37ac4rGsWNurtxV95tj9EJNX4hRceJBzGRADW98tiS82wcePcERGcuFQgWMECMsSMCxxthBRwPyk11ot",
  "key32": "5p2MmZE5VqNJmkSh5EtAtG5FkwVWwZt45MfB1YrtVHvyDGdHSzLUS5mAt1inBu8E4EtkGKoFbDaa1FrjzdtnQkKn",
  "key33": "3edVyMrkLMX3Uj5FJcYr41Zxrnudca3BWC4fg8FrvjZxWEwqjdUE8AGvpGUwC37QSRtpDdReqHmLiceYFMADGuwr",
  "key34": "22ep9xqD5S2WsE61VGKNzT1cxPRrhBEXKSDtWLkjQyLZad1KiCai6Vh2Cp9FyDiFELCK8Cd1bRAAULAor9aWQ23q",
  "key35": "27hhkstyj6VVFzAJyRoEd4ta5FEUUPBUwbvfpRJiPBTQuATtrDqhE1E7QFbB4qNPmgWPth2ZbYvNKQJXxoEvv4fi",
  "key36": "CyavvmqrDthtvHnMnWLivFdkwzvGyhKJWkM1SC4sBWnZwirvQAWUY84MRksnbqFpy2mbcihaTbhCqxx2HFVARwQ",
  "key37": "4PeDZLXA4aQAqzFEqRD9yuqzT3PifrvZZoepTbCLpAQ1uDea1FuFXXqQHpMajka8mZhhMTDv66XFeTxSA4zgUCKf"
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
